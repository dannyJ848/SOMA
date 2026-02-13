/**
 * Dialysis - Chronic Disease Education
 *
 * Comprehensive patient education about dialysis,
 * a treatment that filters blood when kidneys fail.
 */

import { EducationalContent } from '../../types';

export const DIALYSIS: EducationalContent = {
  id: 'chronic-disease-dialysis',
  type: 'concept',
  name: 'Dialysis',
  alternateNames: ['Renal replacement therapy', 'RRT', 'Hemodialysis', 'Peritoneal dialysis'],

  levels: {
    1: {
      level: 1,
      summary: 'Dialysis is a treatment that cleans your blood when your kidneys cannot. It removes waste, extra fluid, and helps balance chemicals in your blood to keep you healthy.',
      explanation: `**What Is Dialysis?**

Dialysis is a treatment that does the work of healthy kidneys. It cleans your blood by removing waste and extra fluid. When your kidneys fail, you need dialysis to stay alive.

**Why Do People Need Dialysis?**

Your kidneys may stop working due to:
- Long-term kidney disease (CKD)
- Kidney failure (ESRD)
- Acute kidney injury (sometimes temporary)


When Kidneys Work at 10-15% or Less:
---------------------------------
- Waste builds up in blood
- Extra fluid causes swelling
- Potassium rises to dangerous levels
- Blood becomes too acidic
- Blood pressure rises
---------------------------------


**Types of Dialysis:**

**Hemodialysis:**
- Blood flows through a machine with a special filter
- Cleans blood and removes extra fluid
- Usually done 3 times per week at a center
- Takes about 3-5 hours each time

**Peritoneal Dialysis:**
- Uses the lining of your abdomen (belly) as a filter
- Dialysis solution flows in and out of your belly
- Can be done at home
- Usually done every day

**Getting Ready for Dialysis:**


Preparation Steps:
---------------------------------
1. Learn about your options
2. Choose dialysis type
3. Get access surgery
   - Hemodialysis: AV fistula (vein connection)
   - Peritoneal: catheter in abdomen
4. Training sessions
5. Make treatment schedule
6. Plan for transportation
---------------------------------


**What Happens During Hemodialysis:**

1. You sit in a comfortable chair
2. Two needles are placed in your access (fistula or graft)
3. Blood flows out through one needle
4. Blood goes through the dialyzer (artificial kidney)
5. Clean blood returns through the other needle
6. Your blood pressure and other signs are watched
7. Treatment takes 3-5 hours

**What Happens During Peritoneal Dialysis:**

1. You connect a catheter in your abdomen to a bag of dialysis solution
2. Solution flows into your belly
3. Solution stays in your belly for several hours (dwell time)
4. Solution drains out, carrying waste with it
5. You repeat the process several times each day
6. Can be done manually or with a machine at night

**Living with Dialysis:**


Daily Life Tips:
---------------------------------
- Follow your diet and fluid limits
- Take your prescribed medicines
- Keep your access site clean
- Weigh yourself daily
- Report problems right away
- Stay active within your limits
- Stay connected with family and friends
---------------------------------


**Diet and Fluids:**

- Limit fluid intake (how much depends on urine output)
- Limit foods high in potassium (bananas, oranges, tomatoes, potatoes)
- Limit foods high in phosphorus (dairy, nuts, dark colas)
- Control protein intake
- Limit sodium (salt)

**Remember:** Dialysis can help you live a full, active life despite kidney failure!`,
      keyTerms: [
        { term: 'hemodialysis', definition: 'Dialysis using a machine to filter blood outside the body' },
        { term: 'peritoneal dialysis', definition: 'Dialysis using the lining of the abdomen as a filter' },
        { term: 'access', definition: 'The site where blood enters and leaves the body for dialysis' },
        { term: 'dwell time', definition: 'How long dialysis solution stays in the abdomen' },
      ],
      analogies: [
        'The dialyzer is like an artificial kidney - it filters your blood through a special membrane.',
        'Peritoneal dialysis is like having a dishwasher inside your belly - it washes and rinses to clean your blood.',
      ],
      examples: [
        'Maria goes to a dialysis center three mornings each week and reads during her 4-hour treatments.',
        'Tom does peritoneal dialysis at home using a machine that runs automatically while he sleeps.',
      ],
      patientCounselingPoints: [
        'Learn about both types of dialysis and choose what fits your lifestyle best.',
        'Plan for your dialysis access well before you need to start treatment.',
        'Home dialysis gives you more freedom but requires learning new skills.',
        'You can still work, travel, and enjoy life on dialysis.',
        'Join a support group to connect with others on dialysis.',
      ],
    },
    2: {
      level: 2,
      summary: 'Dialysis is a renal replacement therapy that removes waste products and excess fluid from the blood when kidneys can no longer sustain life, with hemodialysis and peritoneal dialysis as primary modalities.',
      explanation: `**Indications for Dialysis:**

Dialysis is indicated when:
- Symptomatic uremia (nausea, pericarditis, encephalopathy)
- Refractory hyperkalemia
- Volume overload unresponsive to diuretics
- Severe metabolic acidosis (bicarbonate <15)
- Caloric malnutrition
- GFR <10-15 mL/min (with symptoms)

**Types of Dialysis:**


Hemodialysis (HD) vs Peritoneal Dialysis (PD):
---------------------------------------------------------
                      Hemodialysis    Peritoneal Dialysis
---------------------------------------------------------
Location:             Center/Home     Home
Schedule:             3x/week        Daily
Time per session:     3-5 hours      Varies
Access:               AV fistula      Catheter
                      AV graft
                      Catheter
How it works:         Blood filtered  Lining of abdomen
                      by machine       acts as filter
                      outside body

Advantages of HD:
  - Staff handles treatment
  - No storage at home
  - More efficient toxin removal
  - Less frequent

Advantages of PD:
  - Done at home
  - More gentle
  - Fewer dietary restrictions
  - Preserves residual function
  - Can be done at night
---------------------------------------------------------


**Hemodialysis Access:**


HD Access Types:
---------------------------------------------------------
AV Fistula (preferred):
  - Surgery connects artery to vein
  - Takes 6-12 weeks to mature
  - Lasts many years
  - Lowest complication rate

AV Graft:
  - Artificial tube connects artery to vein
  - Can use in 2-4 weeks
  - Higher complication rate
  - Shorter lifespan

Central Venous Catheter:
  - Large IV placed in neck or chest
  - Can use immediately
  - Highest infection risk
  - Usually temporary
---------------------------------------------------------


**Peritoneal Dialysis Access:**

\`\`\'
PD Catheter:
---------------------------------------------------------
Placement:
  - Surgically placed in abdomen
  - Exits through skin on abdomen
  - Usually 1-2 weeks to heal before use

Care:
  - Keep exit site clean
  - Watch for infection
  - No swimming (usually)
  - Bathing with care
---------------------------------------------------------


**Dietary Considerations:**


Dialysis Diet:
---------------------------------------------------------
Sodium (Salt):
  - Limit to 2,000 mg/day
  - Avoid processed foods
  - Don't add salt at table

Potassium:
  - Limit to 2,000-3,000 mg/day
  - Avoid high-potassium foods:
    - Bananas, oranges, potatoes, tomatoes
    - Avocados, dried fruit, nuts

Phosphorus:
  - Limit to 800-1,000 mg/day
  - Avoid: Dairy, dark colas, nuts
  - Take phosphate binders with meals

Fluids:
  - Limit based on urine output
  - Measure all liquids
  - Weigh daily to monitor
---------------------------------------------------------


**Complications:**

*Hemodialysis:*
- Hypotension (low blood pressure during treatment)
- Muscle cramps
- Nausea, headache
- Access complications (infection, clotting, stenosis)
- Anemia

*Peritoneal Dialysis:*
- Peritonitis (infection of abdomen lining)
- Exit site infection
- Weight gain (from dextrose in solution)
- Hernia
- Catheter problems`,
      keyTerms: [
        { term: 'AV fistula', definition: 'Surgical connection between artery and vein for hemodialysis access' },
        { term: 'peritonitis', definition: 'Infection of the abdominal lining in peritoneal dialysis' },
        { term: 'phosphate binders', definition: 'Medicines that prevent phosphorus absorption from food' },
        { term: 'residual function', definition: 'Remaining kidney function; preserved better with PD' },
      ],
      analogies: [
        'An AV fistula is like building a super-highway for blood - large enough to handle high flows during dialysis.',
        'Phosphate binders are like sponges in your gut that trap phosphorus from food.',
      ],
      clinicalNotes: 'AV fistula has lowest complication rate and best outcomes. Peritoneal dialysis preserves residual renal function longer than hemodialysis. Home dialysis options provide better quality of life.',
      patientCounselingPoints: [
        'AV fistula is the best access type if your blood vessels allow.',
        'Peritoneal dialysis is gentler and can preserve kidney function longer.',
        'Home dialysis gives you more freedom and flexibility.',
        'Learn to read food labels for potassium and phosphorus content.',
        'Weigh yourself daily to monitor fluid balance.',
      ],
    },
    3: {
      level: 3,
      summary: 'Dialysis represents renal replacement therapy removing waste products and excess fluid through extracorporeal hemodialysis or intraperitoneal peritoneal dialysis, with distinct advantages, complications, and lifestyle considerations.',
      explanation: `**Dialysis Prescription:**

*Hemodialysis Adequacy:*

HD Prescription Components:
-------------------------------------------------------------
Blood Flow Rate (QB):
  - Target: 300-500 mL/min
  - Higher for larger patients
  - Adjusted for access type

Dialysate Flow Rate (QD):
  - Target: 500-800 mL/min
  - Usually 1.5-2× QB

Dialyzer Surface Area:
  - 1.2-2.5 m²
  - Larger for larger patients
  - High-flux for β2-microglobulin removal

Treatment Time:
  - 3-4 hours per session
  - Longer for larger size, high-flux membranes

Frequency:
  - Standard: 3x/week
  - More frequent: 4-7x/week (home HD)

Kt/V (Adequacy Target):
  - Single session: Kt/V ≥1.4
  - Weekly (3x/week): Total Kt/V ≥3.6
  - More frequent: Equivalent goals
-------------------------------------------------------------


*Peritoneal Dialysis Prescriptions:*
PD Prescription Options:
-------------------------------------------------------------
CAPD (Continuous Ambulatory Peritoneal Dialysis):
  - Manual exchanges, 4-5x/day
  - Fill volume: 2-2.5 L
  - Dwell: 4-6 hours (day), 8-10 hours (night)

APD (Automated Peritoneal Dialysis):
  - Machine (cycler) at night
  - Usually 8-10 hours
  - Multiple cycles
  - Dry during day

Prescription Elements:
  - Volume: 8-12 L/day (varies by size)
  - Concentration: 1.5%, 2.5%, 4.25% dextrose
  - Number of exchanges per day
  - Dwell time

Adequacy (Kt/V):
  - Weekly Kt/V ≥1.7 for CAPD
  - Weekly creatinine clearance ≥50 L/week
-------------------------------------------------------------


**Dialysis Membranes:**

Membrane Characteristics:
-------------------------------------------------------------
Low-Flux:
  - Small pores (mostly remove small molecules)
  - Do not clear β2-microglobulin
  - Older technology
  - Limited middle molecule clearance

High-Flux:
  - Larger pores (remove larger molecules)
  - Clear β2-microglobulin
  - Larger surface area
  - Reduce amyloidosis risk

Considerations:
  - High-flux preferred for most patients
  - Requires high-quality water treatment
  - May increase albumin loss
  - Better middle molecule clearance
-------------------------------------------------------------


**Complications Management:**

*Intradialytic Hypotension:*

Low BP During Treatment:
------------------------------------------------------------
Causes:
  - Too much fluid removal
  - Rapid ultrafiltration
  - Antihypertensives taken before HD
  - Autonomic dysfunction
  - Cardiac dysfunction

Prevention:
  - Limit weight gain between sessions
  - Gradual ultrafiltration rate
  - Hold antihypertensives before HD
  - Increase dialysate sodium
  - Lower dialysate temperature

Treatment:
  - Decrease ultrafiltration rate
  - Administer saline bolus
  - Trendelenburg position
  - Reduce blood flow rate temporarily
-------------------------------------------------------------
`,
      keyTerms: [
        { term: 'Kt/V', definition: 'Measure of dialysis adequacy based on urea clearance' },
        { term: 'ultrafiltration', definition: 'Fluid removal during dialysis' },
        { term: 'β2-microglobulin', definition: 'Middle molecule retained in kidney disease' },
        { term: 'amyloidosis', definition: 'Protein deposition disease from β2-microglobulin' },
        { term: 'autonomic', definition: 'Related to automatic nervous system' },
      ],
      clinicalNotes: 'High-flux dialysis is preferred for most patients. Intradialytic hypotension is associated with increased mortality. Daily home dialysis improves outcomes.',
      patientCounselingPoints: [
        'Your dialysis prescription is tailored to your size and needs.',
        'High-flux dialyzers clean blood more thoroughly.',
        'Watch your weight gain between sessions to prevent low BP during treatment.',
        'Peritoneal dialysis can be done at home while you sleep.',
        'Your dialysis dose (Kt/V) is monitored to ensure adequate treatment.',
      ],
    },
    4: {
      level: 4,
      summary: 'Modern dialysis therapy offers multiple modalities including conventional in-center hemodialysis, home hemodialysis, and various peritoneal dialysis techniques, with individualized prescriptions to optimize clinical outcomes.',
      explanation: `**Home Dialysis Options:**

*Short Daily Hemodialysis:*

Home HD Prescriptions:
------------------------------------------------------------
Conventional Home HD:
  - 3-4 hours, 3-4x/week
  - Similar to in-center but at home
  - Requires partner assistance initially

Short Daily HD:
  - 2-3 hours, 5-6x/week
  - Better volume control
  - Fewer BP medications
  - Better phosphate control
  - Improved quality of life

Nocturnal Home HD:
  - 6-8 hours, 3-4x/week (overnight)
  - Weekly treatment time: 24-32 hours
  - Best phosphate control
  - Fewer dietary restrictions
  - Regression of LVH
  - Better anemia management

Requirements:
  - Dedicated space for machine and supplies
  - Water treatment system (reverse osmosis)
  - Electrical and plumbing requirements
  - Partner or caregiver (initially)
  - Emergency training
  - Supply storage
-------------------------------------------------------------


**Technical Considerations:**

*Dialysate Composition:*

Dialysate Components:
------------------------------------------------------------
Sodium:
  - Standard: 138-140 mEq/L
  - Individualized: 140-150 mEq/L for cramps
  - Low sodium: 135-138 mEq/L for hypertension

Potassium:
  - Standard: 2-3 mEq/L
  - Adjust based on serum potassium
  - Lower for hyperkalemia
  - May add potassium for hypokalemia

Calcium:
  - Standard: 2.5-3.5 mEq/L
  - 2.5 mEq/L (low calcium dialysate)
  - Avoids calcium loading
  - May trigger PTH secretion

Bicarbonate:
  - Standard: 35 mEq/L
  - May adjust for acidosis
  - 30-40 mEq/L range
-------------------------------------------------------------


*Water Treatment:*
Water Quality Standards:
------------------------------------------------------------
AAMI Standards:
  - Bacteria: <100 CFU/mL
  - Endotoxin: <0.25 EU/mL
  - Chemicals: below AAMI limits

Water Treatment Chain:
  - Carbon filtration (chlorine, organics)
  - Water softener (calcium, magnesium)
  - Reverse osmosis (purification)
  - Deaeration
  - UV irradiation (bacteria)
  - Final filtration
------------------------------------------------------------`,
      keyTerms: [
        { term: 'reverse osmosis', definition: 'Water purification method using semipermeable membrane' },
        { term: 'endotoxin', definition: 'Bacterial toxin that must be removed from dialysate' },
      ],
      clinicalNotes: 'Home nocturnal dialysis provides superior clearance and allows liberalized diet. Water quality is critical to prevent complications.',
      patientCounselingPoints: [
        'Home dialysis offers flexibility and possibly better health outcomes.',
        'Nocturnal dialysis can reverse some heart problems from kidney failure.',
        'Water treatment systems ensure your dialysis fluid is pure.',
        'Your dialysate can be customized to your specific needs.',
      ],
    },
    5: {
      level: 5,
      summary: 'Dialysis therapy has evolved with innovative home modalities, improved membrane technology, and sorbent systems enabling more physiologic clearance and enhanced patient outcomes.',
      explanation: `**Emerging Technologies:**

*Sorbent Systems:*

Sorbent Dialysis:
------------------------------------------------------------
Wearable Artificial Kidney:
  - Miniaturized dialysis system
  - Worn like a backpack or belt
  - Continuous dialysis
  - Clinical trials ongoing

REDY System (Sorbent):
  - Regenerative sorbent cartridge
  - Recirculates dialysate
  - Produces ultrapure water
  - Portable system

Benefits:
  - Continuous clearance
  - Reduced inflammation
  - Better middle molecule clearance
  - Improved patient autonomy
------------------------------------------------------------
`,
      keyTerms: [
        { term: 'sorbent', definition: 'Material that absorbs toxins; used in regenerative systems' },
      ],
      clinicalNotes: 'Wearable artificial kidney trials are ongoing. Sorbent systems enable truly portable dialysis.',
      patientCounselingPoints: [
        'Wearable artificial kidneys could revolutionize dialysis in the future.',
        'Sorbent systems may make portable dialysis more available.',
      ],
    },
  },

  media: [
    {
      id: 'dialysis-comparison',
      type: 'diagram',
      filename: 'hemodialysis-vs-peritoneal-dialysis.svg',
      title: 'Hemodialysis vs Peritoneal Dialysis',
      description: 'Comparison of the two main dialysis types',
    },
    {
      id: 'av-fistula-diagram',
      type: 'diagram',
      filename: 'av-fistula-structure.svg',
      title: 'AV Fistula Structure',
      description: 'Illustration of AV fistula access',
    },
  ],

  citations: [
    {
      id: 'kdigo-dialysis-2024',
      type: 'article',
      title: 'KDIGO Clinical Practice Guideline for the Management of Dialysis',
      source: 'Kidney International',
    },
  ],

  crossReferences: [
    { targetId: 'chronic-disease-kidney-failure', targetType: 'condition', relationship: 'parent', label: 'Kidney Failure' },
    { targetId: 'chronic-disease-chronic-kidney-disease', targetType: 'condition', relationship: 'parent', label: 'Chronic Kidney Disease' },
  ],

  tags: {
    systems: ['renal'],
    topics: ['dialysis', 'ESRD', 'renal replacement therapy'],
    keywords: ['dialysis', 'hemodialysis', 'peritoneal dialysis', 'RRT'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine'] },
  },

  createdAt: '2025-01-25T00:00:00.000Z',
  updatedAt: '2025-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
