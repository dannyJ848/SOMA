/**
 * Kidney Transplant - Chronic Disease Education
 *
 * Comprehensive patient education about kidney transplantation,
 * a surgical treatment for kidney failure.
 */

import { EducationalContent } from '../../types';

export const KIDNEY_TRANSPLANT: EducationalContent = {
  id: 'chronic-disease-kidney-transplant',
  type: 'concept',
  name: 'Kidney Transplant',
  alternateNames: ['Renal transplantation', 'Kidney graft', 'Transplant'],

  levels: {
    1: {
      level: 1,
      summary: 'A kidney transplant is surgery to place a healthy kidney into your body when your own kidneys have failed. The new kidney takes over the work your kidneys used to do.',
      explanation: `**What Is a Kidney Transplant?**

A kidney transplant is surgery to place a healthy kidney from a donor into your body. The new kidney takes over filtering your blood and making urine.


Compared to Dialysis:
---------------------------------
Dialysis:
  - Machine filters blood
  - 3+ sessions per week
  - Limits freedom
  - Dietary restrictions

Transplant:
  - New kidney filters blood
  - Works 24/7
  - More freedom
  - Fewer dietary restrictions
  - Must take anti-rejection medicines
---------------------------------


**Types of Donors:**


Donor Sources:
---------------------------------
Living Donor:
  - Family member or friend
  - One kidney is enough for both people
  - Kidney usually works better
  - Can be planned ahead

Deceased Donor:
  - Person who died but had healthy kidneys
  - Kidneys are donated after death
  - May have to wait a long time
---------------------------------


**Who Can Get a Transplant?**


Transplant Candidacy:
---------------------------------
Good Candidates:
  - Overall good health
  - No active infection
  - No active cancer
  - Willing to take medicines
  - Has support system
  - Can follow medical plan

Challenging:
  - Severe heart/lung disease
  - Active cancer
  - Severe obesity
  - Active substance abuse
  - Cannot comply with medications
---------------------------------


**The Surgery:**

- Takes 3-4 hours
- Done under general anesthesia
- New kidney placed in lower abdomen
- Your own kidneys usually left in place
- Hospital stay: 3-7 days

**After Surgery:**

Recovery Period:
---------------------------------
Hospital (3-7 days):
  - Intensive care monitoring
  - Pain medicine
  - New kidney starts working right away
  - Daily blood tests

First Few Weeks:
  - Clinic visits 2-3x/week
  - Many medicines to take
  - Learning about your medicines
  - Watching for rejection
---------------------------------


**Anti-Rejection Medicines:**

You will take these medicines for the rest of your life:
- Tacrolimus (main anti-rejection)
- Mycophenolate (prevents rejection)
- Prednisone (steroid)
- Others to prevent infection

**Living with a Transplant:**


Daily Life:
---------------------------------
- Take medicines exactly as directed
- Go to all clinic appointments
- Learn signs of rejection
- Report any problems quickly
- Stay healthy with diet and exercise
- Avoid infections
- Enjoy your improved life!
---------------------------------


**Remember:** A transplant is a major commitment but offers the best quality of life for kidney failure!`,
      keyTerms: [
        { term: 'living donor', definition: 'Person who donates a kidney while alive' },
        { term: 'deceased donor', definition: 'Person who has died and donated kidneys' },
        { term: 'rejection', definition: 'When the body\'s immune system attacks the transplanted kidney' },
        { term: 'tacrolimus', definition: 'Main anti-rejection medicine' },
      ],
      analogies: [
        'A kidney transplant is like getting a brand new filter installed - it works automatically 24/7.',
        'Anti-rejection medicines act like bouncers at a club - they stop your immune cells from attacking your new kidney.',
      ],
      examples: [
        'Maria received a kidney from her sister and no longer needs dialysis.',
        'James waited 3 years for a deceased donor kidney and is now enjoying more freedom.',
      ],
      patientCounselingPoints: [
        'You must take anti-rejection medicines every day for the rest of your life.',
        'Missing even one dose of medicine can cause rejection.',
        'Report any changes in how you feel to your transplant team.',
        'Your living donor will be carefully evaluated to ensure their safety.',
        'Transplant offers the best quality of life for most people with kidney failure.',
      ],
    },
    2: {
      level: 2,
      summary: 'Kidney transplantation is the preferred renal replacement therapy for most patients with ESRD, offering superior survival and quality of compared to dialysis but requiring lifelong immunosuppression.',
      explanation: `**Advantages of Transplant:**


Transplant vs Dialysis:
-------------------------------------------------------------
Survival:
  - 5-year patient survival: 85% (transplant) vs 35% (dialysis)
  - Living donor: Better outcomes

Quality of Life:
  - No dialysis schedule
  - Fewer dietary restrictions
  - More energy
  - Better rehabilitation
  - Improved fertility
  - Reduced healthcare costs (long-term)

Freedom:
  - No machine dependency
  - Travel more easily
  - Work opportunities
  - Time freedom

Disadvantages:
  - Requires lifelong immunosuppression
  - Surgical risks
  - Rejection risk
  - Limited donor supply
-------------------------------------------------------------


**Donor Types:**


Donor Comparison:
-------------------------------------------------------------
Living Donor:
  - Family member or friend
  - Planned timing
  - Better HLA matching
  - Shorter cold ischemia time
  - Better immediate function
  - Donor risks: surgical (small but real)

Deceased Donor:
  - From deceased organ donors
  - Allocation by UNOS system
  - Waiting list: 3-7 years average
  - May have delayed function
  - Expanded criteria donors (older, higher risk)
-------------------------------------------------------------


**Immunosuppression:**

Medication Classes:
------------------------------------------------------------
Calcineurin Inhibitors:
  - Tacrolimus (Prograf)
  - Cyclosporine (Neoral, Gengraf)
  - Monitor levels closely
  - Nephrotoxic

Antimetabolites:
  - Mycophenolate mofetil (CellCept)
  - Azathioprine (Imuran)
  - Prevent cell proliferation

mTOR Inhibitors:
  - Sirolimus (Rapamune)
  - Everolimus (Zortress)
  - Alternative to CNIs

Steroids:
  - Prednisone
  - Tapered over time
  - Lowest dose possible
-------------------------------------------------------------


**Rejection:**

Types of Rejection:
------------------------------------------------------------
Hyperacute Rejection:
  - Minutes to hours
  - Caused by preformed antibodies
  - Very rare with crossmatch

Acute Rejection:
  - Weeks to months
  - Cell-mediated rejection
  - Treatable with steroids/thymoglobulin
  - Occurs in 15-20% of recipients

Chronic Rejection:
  - Months to years
  - Antibody-mediated
  - Causes gradual graft failure
  - Difficult to reverse
------------------------------------------------------------`,
      keyTerms: [
        { term: 'UNOS', definition: 'United Network for Organ Sharing; manages transplant list' },
        { term: 'HLA', definition: 'Human leukocyte antigens; tissue matching markers' },
        { term: 'cold ischemia time', definition: 'Time organ is cold-stored before transplant' },
        { term: 'graft', definition: 'The transplanted organ' },
      ],
      analogies: [
        'The waiting list is like a long line for tickets - the sickest people get priority.',
        'HLA matching is like blood typing - more matches mean less rejection risk.',
      ],
      clinicalNotes: 'Living donor transplants have better outcomes than deceased donor. Tacrolimus is preferred over cyclosporine. One-year graft survival exceeds 95% with modern immunosuppression.',
      patientCounselingPoints: [
        'Living donor transplants usually have better outcomes.',
        'Your waiting time depends on blood type, antibodies, and location.',
        'Rejection can often be treated if caught early.',
        'You will need to take anti-rejection medicines forever.',
      ],
    },
    3: {
      level: 3,
      summary: 'Kidney transplantation is the optimal treatment for ESRD, requiring careful donor selection, surgical expertise, and lifelong immunosuppression to prevent graft rejection while minimizing infection risk.',
      explanation: `**Evaluation Process:**

*Recipient Evaluation:*

Transplant Evaluation Tests:
------------------------------------------------------------
Medical:
  - Cardiac: Stress test or coronary angiogram
  - Pulmonary: PFTs, chest CT
  - Gastrointestinal: Colonoscopy (if indicated)
  - Vascular: Ultrasound of vessels
  - Infection: HIV, hepatitis, CMV, EBV
  - Malignancy screening: Mammogram, PSA, Pap smear, skin exam
  - Laboratory: Full panel, PRA, HLA typing

Psychosocial:
  - Understanding of process
  - Social support assessment
  - Financial/insurance coverage
  - History of compliance

Contraindications:
  - Active infection
  - Untreated malignancy
  - Severe irreversible cardiac/pulmonary disease
  - Poor functional status
  - Active substance abuse
  - Inability to comply with medications
-------------------------------------------------------------


*Surgical Procedure:*
Transplant Surgery:
------------------------------------------------------------
Procedure:
  - General anesthesia
  - Incision in lower abdomen (right or left)
  - Kidney placed extraperitoneal
  - Renal artery anastomosis to iliac artery
  - Renal vein anastomosis to iliac vein
  - Ureter anastomosis to bladder (ureteroneocystostomy)
  - Native kidneys usually left in place

Duration: 3-5 hours

Complications:
  - Bleeding
  - Vascular thrombosis
  - Urine leak
  - Wound infection
  - Lymphocele
-------------------------------------------------------------


**Immunology:**

*HLA and Matching:*

Tissue Typing:
------------------------------------------------------------
HLA Loci:
  - HLA-A
  - HLA-B
  - HLA-DR

Match Grades:
  0 antigen mismatch: Identical twin
  1-2 mismatches: Very good
  3-4 mismatches: Good
  5-6 mismatches: Fair
  - Mismatches increase rejection risk

Crossmatch:
  - Tests for preformed anti-donor antibodies
  - Positive crossmatch = incompatible
  - Negative crossmatch = safe to proceed
-------------------------------------------------------------


*PRA (Panel Reactive Antibodies):*
Sensitization:
------------------------------------------------------------
PRA:
  - Percentage of donor population with antibodies
  - 0%: Can receive from any donor
  - 80%: Can only receive from 20% of donors
  - Higher PRA = longer wait time

Causes of Sensitization:
  - Prior transplant
  - Pregnancy
  - Blood transfusions
  - Prior kidney donation
-------------------------------------------------------------


*Induction Therapy:*
Induction Agents:
------------------------------------------------------------
Anti-CD25 (IL-2 Receptor Antagonists):
  - Basiliximab (Simulect): 4 doses
  - Daclizumab (withdrawn from market)

T-cell Depleting Agents:
  - Rabbit antithymocyte globulin (rATG)
    - 1-1.5 mg/kg × 4-7 doses
    - Lymphocyte depletion
    - Higher rejection prevention
    - More side effects

  - Alemtuzumab (Campath)
    - Single dose
    - Prolonged lymphocyte depletion
-------------------------------------------------------------
`,
      keyTerms: [
        { term: 'PRA', definition: 'Panel reactive antibodies; measures sensitization' },
        { term: 'HLA', definition: 'Human leukocyte antigens; tissue typing' },
        { term: 'lymphocele', definition: 'Lymph fluid collection after transplant' },
        { term: 'ureteroneocystostomy', definition: 'Connection of ureter to bladder' },
      ],
      clinicalNotes: 'rATG induction reduces early rejection but increases CMV and BK virus risk. Desensitization protocols can overcome positive crossmatch in selected patients.',
      patientCounselingPoints: [
        'High PRA means longer waiting times but desensitization may be possible.',
        'Crossmatch testing ensures your body will not immediately reject the kidney.',
        'Induction therapy provides powerful anti-rejection protection initially.',
        'Recovery takes 6-12 weeks before returning to normal activities.',
      ],
    },
    4: {
      level: 4,
      summary: 'Kidney transplantation requires sophisticated immunologic matching, surgical expertise, and comprehensive post-transplant management to balance rejection prevention with infection and comorbidity risks.',
      explanation: `**Advanced Immunology:**

*Desensitization Protocols:*

Desensitization Strategies:
------------------------------------------------------------
Plasmapheresisis:
  - Removes circulating antibodies
  - Usually 3-5 sessions before transplant
  - Combined with IVIG

IVIG (Intravenous Immunoglobulin):
  - Modulates antibody response
  - Given after plasmapheresis
  - 2 g/kg divided doses

Rituximab:
  - Anti-CD20 monoclonal antibody
  - B-cell depletion
  - Reduces antibody production
  - Given before desensitization

Bortezomib:
  - Proteasome inhibitor
  - Targets plasma cells
  - Used in refractory cases

Successful in:
  - Positive crossmatch converted to negative
  - Highly sensitized patients receiving transplants
-------------------------------------------------------------


*ABO Incompatible Transplantation:*
ABOi Across Blood Groups:
------------------------------------------------------------
Protocol:
  - Pre-transplant:
    - Plasmapheresis to remove anti-A/B antibodies
    - Rituximab (B-cell depletion)
    - Splenectomy (some centers)

  - Intraoperative:
    - Removal of donor endothelium (back-table flushing)

  - Post-transplant:
    - Close monitoring
    - Plasmapheresis if needed
    - Biopsy to check for rejection

Outcomes:
  - Slightly lower graft survival vs compatible
  - Expands living donor pool significantly
  - Allows transplantation across blood types
-------------------------------------------------------------
`,
      keyTerms: [
        { term: 'plasmapheresis', definition: 'Treatment to filter antibodies from blood' },
        { term: 'IVIG', definition: 'Intravenous immunoglobulin' },
        { term: 'rituximab', definition: 'Anti-CD20 monoclonal antibody' },
        { term: 'ABOi', definition: 'ABO blood group incompatible transplant' },
        { term: 'endothelium', definition: 'Inner lining of blood vessels' },
      ],
      clinicalNotes: 'ABO incompatible transplantation significantly expands donor pool. Desensitization allows highly sensitized patients to receive transplants.',
      patientCounselingPoints: [
        'New techniques allow transplantation across blood types.',
        'Desensitization helps highly sensitized patients get transplants.',
        'Plasmapheresis removes antibodies that would cause rejection.',
        'Your transplant team will carefully plan your treatment.',
      ],
    },
    5: {
      level: 5,
      summary: 'Kidney transplantation incorporates advanced immunologic strategies including desensitization, ABO-incompatible transplantation, and novel immunosuppressive agents to optimize graft and patient outcomes.',
      explanation: `**Innovative Approaches:**

*Paired Donation:*

Kidney Paired Donation (KPD):
------------------------------------------------------------
Concept:
  - Recipient with incompatible living donor
  - Exchanges with other incompatible pairs
  - Everyone gets compatible kidney

Benefits:
  - Expands living donor pool
  - Shortens cold ischemia time
  - Better outcomes than deceased donor
  - Chains involving many pairs possible
------------------------------------------------------------


*Novel Immunosuppression:*

Emerging Agents:
------------------------------------------------------------
Belatacept:
  - Costimulation blocker
  - Selective T-cell costimulation blockade
  - Better kidney function
  - Reduced CNI toxicity
  - Higher rejection risk (requires adequate baseline)

Voclosporin:
  - Novel calcineurin inhibitor
  - Structurally different from cyclosporine
  - Possibly less nephrotoxic

Tocilizumab:
  - IL-6 receptor antagonist
  - Treatment of antibody-mediated rejection
  - Investigational for desensitization
------------------------------------------------------------
`,
      keyTerms: [
        { term: 'KPD', definition: 'Kidney paired donation; living donor exchange program' },
        { term: 'costimulation', definition: 'Signal needed for T-cell activation' },
        { term: 'CNI', definition: 'Calcineurin inhibitor' },
      ],
      clinicalNotes: 'KPD increases living donor transplants. Belatacept improves GFR but requires adequate early CNI coverage. Voclosporin may reduce nephrotoxicity.',
      patientCounselingPoints: [
        'Paired donation programs help people with incompatible donors get transplants.',
        'New medicines like belatacept may improve kidney function.',
        'Ongoing research improves transplant success rates.',
      ],
    },
  },

  media: [
    {
      id: 'transplant-surgery',
      type: 'diagram',
      filename: 'kidney-transplant-surgery.svg',
      title: 'Kidney Transplant Procedure',
      description: 'Illustration of kidney transplant surgical placement',
    },
    {
      id: 'immunosuppression-meds',
      type: 'diagram',
      filename: 'transplant-medications.svg',
      title: 'Transplant Immunosuppressive Medications',
      description: 'Overview of anti-rejection medications',
    },
  ],

  citations: [
    {
      id: 'kdgo-transplant-2024',
      type: 'article',
      title: 'KDIGO Clinical Practice Guideline for Kidney Transplant Recipients',
      source: 'Transplantation',
    },
  ],

  crossReferences: [
    { targetId: 'chronic-disease-kidney-failure', targetType: 'condition', relationship: 'related', label: 'Kidney Failure' },
    { targetId: 'chronic-disease-dialysis', targetType: 'concept', relationship: 'related', label: 'Dialysis' },
  ],

  tags: {
    systems: ['renal', 'surgery'],
    topics: ['transplant', 'ESRD', 'kidney failure'],
    keywords: ['kidney transplant', 'renal transplant', 'immunosuppression'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'surgery'] },
  },

  createdAt: '2025-01-25T00:00:00.000Z',
  updatedAt: '2025-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
