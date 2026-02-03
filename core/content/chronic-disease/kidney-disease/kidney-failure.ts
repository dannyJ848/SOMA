/**
 * Kidney Failure - Chronic Disease Education
 *
 * Comprehensive patient education about kidney failure (ESRD),
 * when kidneys can no longer sustain life without replacement therapy.
 */

import { EducationalContent } from '../../types';

export const KIDNEY_FAILURE: EducationalContent = {
  id: 'chronic-disease-kidney-failure',
  type: 'condition',
  name: 'Kidney Failure',
  alternateNames: ['End-stage renal disease', 'ESRD', 'Stage 5 CKD', 'Renal failure'],

  levels: {
    1: {
      level: 1,
      summary: 'Kidney failure means your kidneys no longer work well enough to keep you alive without treatment. Dialysis or a kidney transplant can replace the work your kidneys used to do.',
      explanation: `**What Is Kidney Failure?**

Kidney failure (also called end-stage renal disease or ESRD) means your kidneys have stopped working well enough to keep you alive. At this point, you need treatment to replace the work your kidneys used to do.

**What Do Kidneys Do?**

\`\`\`
Normal Kidney Functions:
─────────────────────────────────
• Filter waste from blood
• Remove extra fluid
• Control blood pressure
• Make red blood cells
• Keep bones healthy
• Balance minerals
─────────────────────────────────
\`\`\`

**How Do I Know I Have Kidney Failure?**

\`\`\`
Common Symptoms:
─────────────────────────────────
• Feeling very tired and weak
• Nausea, vomiting, loss of appetite
• Swelling in legs, ankles, feet
• Shortness of breath
• Confusion or trouble concentrating
• Itchy skin
• Muscle cramps
• Changes in urination
─────────────────────────────────
\`\`\`

**Treatments for Kidney Failure:**

\`\`\`
Treatment Options:
─────────────────────────────────
1. Hemodialysis
   • Machine filters blood
   • Usually 3 times per week
   • Done at a center or at home

2. Peritoneal Dialysis
   • Uses lining of your abdomen
   • Done at home
   • Daily or nightly treatment

3. Kidney Transplant
   • Surgery to place healthy kidney
   • From living or deceased donor
   • Best quality of life
─────────────────────────────────
\`\`\`

**Living with Kidney Failure:**

- Follow your treatment schedule carefully
- Take prescribed medicines
• Eat a kidney-friendly diet
• Limit fluids if your doctor says to
• Go to all medical appointments
• Learn about your treatment option

**Preparing for Treatment:**

It is best to prepare for dialysis or transplant before you absolutely need it. This is called "advanced planning" and includes:
- Learning about your options
- Getting surgery for dialysis access
- Considering kidney transplant evaluation

**Remember:** People with kidney failure can live full, active lives with proper treatment!`,
      keyTerms: [
        { term: 'ESRD', definition: 'End-stage renal disease; complete kidney failure' },
        { term: 'hemodialysis', definition: 'Treatment that filters blood through a machine' },
        { term: 'peritoneal dialysis', definition: 'Treatment that uses the lining of abdomen to filter blood' },
        { term: 'kidney transplant', definition: 'Surgery to place a healthy kidney from a donor' },
      ],
      analogies: [
        'Dialysis is like having an artificial kidney that cleans your blood when your kidneys cannot.',
        'A kidney transplant is like getting a new filter installed - it works better than dialysis but requires anti-rejection medicine.',
      ],
      examples: [
        'Robert goes to a dialysis center three times a week for 4-hour treatments.',
        'Sofia received a kidney transplant from her sister and no longer needs dialysis.',
      ],
      patientCounselingPoints: [
        'Learn about all your treatment options before you need treatment.',
        'Kidney transplant provides the best quality of life if you are a candidate.',
        'Home dialysis options give you more freedom than in-center dialysis.',
        'Follow your diet and fluid restrictions carefully.',
        'Take your medications exactly as prescribed.',
      ],
    },
    2: {
      level: 2,
      summary: 'Kidney failure (ESRD) occurs when GFR falls below 15 mL/min/1.73m² or when dialysis is required, necessitating renal replacement therapy to sustain life, with dialysis and transplantation as primary treatment options.',
      explanation: `**Definition:**

Kidney failure (end-stage renal disease, ESRD) is defined as:
- GFR <15 mL/min/1.73m², OR
- Need for permanent renal replacement therapy

**Causes of Kidney Failure:**

\`\`\`
Leading Causes:
─────────────────────────────────────────
1. Diabetes (most common)
2. High blood pressure
3. Glomerular diseases
4. Polycystic kidney disease
5. Severe kidney injury that does not heal
─────────────────────────────────────────
\`\`\`

**Clinical Manifestations:**

*Uremic Symptoms:*
\`\`\`
Symptoms of Uremia:
─────────────────────────────────────────
• Fatigue, weakness
• Anorexia, nausea, vomiting
• Metallic taste in mouth
• Pericarditis (chest pain)
• Encephalopathy (confusion, seizures)
• Peripheral neuropathy (numbness)
• Pruritus (itching)
• Easy bruising or bleeding
• Menstrual irregularities
• Sexual dysfunction
─────────────────────────────────────────
\`\`\`

**Dialysis Options:**

\`\`\`
Hemodialysis:
─────────────────────────────────────────
How it works:
  • Blood pumped through dialyzer
  • Dialyzer acts as artificial kidney
  • Wastes and extra fluid removed
  • Clean blood returned to body

Schedule:
  • Usually 3-4 hours per session
  • 3 times per week
  • At dialysis center or home

Access:
  • AV fistula (preferred)
  • AV graft
  • Central venous catheter
─────────────────────────────────────────

Peritoneal Dialysis:
─────────────────────────────────────────
How it works:
  • Dialysis solution placed in abdomen
  • Peritoneum acts as filter
  • Wastes drawn into solution
  • Solution drained out

Schedule:
  • CAPD: Manual exchanges, 4-6 times/day
  • APD: Machine (cycler) at night

Advantages:
  • Done at home
  • More continuous
  • Fewer dietary restrictions
  • Preserves some residual function
─────────────────────────────────────────
\`\`\``,
      keyTerms: [
        { term: 'uremia', definition: 'Buildup of waste products in blood when kidneys fail' },
        { term: 'AV fistula', definition: 'Connection between artery and vein for dialysis access' },
        { term: 'AV graft', definition: 'Artificial tube connecting artery and vein for dialysis' },
        { term: 'CAPD', definition: 'Continuous ambulatory peritoneal dialysis' },
        { term: 'APD', definition: 'Automated peritoneal dialysis (cycler)' },
      ],
      analogies: [
        'An AV fistula is like a shortcut for blood - it creates a larger, stronger vessel for dialysis.',
      ],
      clinicalNotes: 'AV fistula is preferred access and should be placed 6 months before dialysis starts. Peritoneal dialysis preserves residual renal function longer than hemodialysis.',
      patientCounselingPoints: [
        'Plan your dialysis access well before you need dialysis.',
        'Peritoneal dialysis can be done at home while you sleep.',
        'Home hemodialysis gives you more freedom and can be done more frequently.',
        'Kidney transplant offers the best quality of life but requires anti-rejection medicines.',
        'You can switch between dialysis types if needed.',
      ],
    },
    3: {
      level: 3,
      summary: 'Kidney failure requires renal replacement therapy with dialysis or transplantation, presenting complex metabolic derangements requiring comprehensive management of fluid, electrolyte, and cardiovascular complications.',
      explanation: `**Metabolic Derangements:**

\`\`\`
Uremic Metabolism:
─────────────────────────────────────────────────────
Sodium and Water:
  • Sodium retention → edema, hypertension
  • Water retention → volume overload
  • Requires fluid restriction and ultrafiltration

Potassium:
  • Hyperkalemia from ↓ excretion
  → Cardiac arrhythmias
  → Muscle weakness
  • Requires dietary restriction + kayexalate/dialysis

Acid-Base:
  • Metabolic acidosis (↓ bicarbonate reabsorption)
  → Bone buffering (renal osteodystrophy)
  → Protein catabolism
  • Treated with dialysis and sodium bicarbonate

Calcium/Phosphorus:
  • Hyperphosphatemia (↓ excretion)
  • Hypocalcemia (low vitamin D activation)
  • ↑ PTH (secondary hyperparathyroidism)
  → Renal osteodystrophy

Anemia:
  • ↓ EPO production
  • Decreased RBC survival
  • Iron deficiency
  → Treated with ESAs and iron

Uremic Toxins:
  • Retained nitrogenous wastes
  • Middle molecules (β2-microglobulin)
  • Protein-bound solutes
  → Contribute to symptoms
─────────────────────────────────────────────────────
\`\`\`

**Dialysis Adequacy:**

*Hemodialysis Prescription:*
\`\`\`
HD Prescription:
─────────────────────────────────────────────────────
Dialyzer:
  • Surface area: 1.2-2.5 m²
  • Membrane: high-flux (preferred)
  • Biocompatibility considerations

Blood Flow Rate:
  • 300-500 mL/min
  • Higher for larger patients or high flux

Dialysate Flow Rate:
  • 500-800 mL/min
  • Usually 1.5-2× blood flow

Duration:
  • 3-4 hours per session
  • 3 sessions per week
  • Longer if larger, more permeable membrane

Kt/V (Dose):
  • Target: ≥1.4 per session
  • Measures adequacy
  • Goal: ≥3.0 weekly for 3x/week
─────────────────────────────────────────────────────
\`\`\`

**Transplantation:**

*Evaluation:*
\`\`\`
Transplant Candidate Evaluation:
─────────────────────────────────────────────────────
Inclusion:
  • ESRD (on dialysis or approaching)
  • Willing and able to take medications
  • No active infection
  • No active malignancy (usually 2-5 years)

Contraindications:
  • Active infection
  • Unreated malignancy
  • Severe irreversible cardiac/pulmonary disease
  • Poor functional status
  • Inability to comply with medications
  • Active substance abuse

Evaluation Tests:
  • Cardiac stress test or coronary angiography
  • Pulmonary function tests
  • Malignancy screening
  • Blood type and tissue typing
  • Panel reactive antibody (PRA) testing
  • Crossmatch testing
─────────────────────────────────────────────────────
\`\`\`

*Immunosuppression:*
\`\`\`
Maintenance Immunosuppression:
─────────────────────────────────────────────────────
Core Agents:
  • Calcineurin inhibitor:
    - Tacrolimus (preferred)
    - Cyclosporine
    • Monitor levels

  • Antimetabolite:
    - Mycophenolate mofetil
    - Azathioprine (alternative)

  • Corticosteroids:
    - Prednisone
    • Tapered over time

Induction Therapy (perioperative):
  • Anti-CD25 antibodies (basiliximab)
  • Rabbit antithymocyte globulin
  • Alemtuzumab

Monitoring:
  • Drug levels (tacrolimus, cyclosporine)
  • Kidney function (creatinine)
  • Infection surveillance
  • Malignancy screening
─────────────────────────────────────────────────────
\`\`\``,
      keyTerms: [
        { term: 'Kt/V', definition: 'Measure of dialysis adequacy' },
        { term: 'high-flux', definition: 'Dialysis membrane with larger pores for larger molecules' },
        { term: 'tacrolimus', definition: 'Primary immunosuppressant after transplant' },
        { term: 'PRA', definition: 'Panel reactive antibody; measures sensitization' },
        { term: 'crossmatch', definition: 'Test for antibodies against donor kidney' },
      ],
      clinicalNotes: 'High-flux dialysis clears β2-microglobulin better than low-flux. Tacrolimus is preferred over cyclosporine. PRA levels affect wait time and likelihood of matching.',
      patientCounselingPoints: [
        'Your dialysis dose (Kt/V) is measured to ensure you get enough treatment.',
        'High-flux dialyzers clean your blood more thoroughly.',
        'Transplant medications require strict adherence to prevent rejection.',
        'PRA testing shows how likely you are to find a matching kidney.',
        'Living donor transplants have better outcomes than deceased donors.',
      ],
    },
    4: {
      level: 4,
      summary: 'Kidney failure requires comprehensive management with dialysis or transplantation, requiring careful attention to cardiovascular risk, mineral bone disease, anemia, and quality of life considerations.',
      explanation: `**Dialysis Modalities:**

*Home Hemodialysis:*
\`\`\`
Home HD Options:
─────────────────────────────────────────────────────
Conventional Home HD:
  • 3-4 hours, 3x/week
  • Similar to in-center but at home
  • Benefits: Flexibility, independence

Frequent/Nocturnal Home HD:
  • 2-3 hours, 5-6x/week OR
  • 6-8 hours, 3-4x/week (overnight)
  • Better phosphate control
  • Fewer medications
  • Better BP control
  • Improves LVH

Requirements:
  • Partner assistance
  • Clean, well-lit space for machine
  • Water treatment system
  • Electrical and plumbing requirements
  • Emergency training

Advantages:
  • More frequent dialysis → better outcomes
  • No travel to center
  • Diet liberalization
  • Better quality of life
─────────────────────────────────────────────────────
\`\`\`

**Cardiovascular Considerations:**

*Cardiac Disease in ESRD:*
\`\`\`
Cardiovascular Burden:
─────────────────────────────────────────────────────
Structural Heart Disease:
  • LVH (left ventricular hypertrophy)
    Present in: 75% at dialysis initiation

  • Congestive heart failure
    Common cause of hospitalization

  • Valvular disease
    Calcific aortic/mitral stenosis

Arrhythmias:
  • Atrial fibrillation (common)
  • Sudden cardiac death risk
  • Potassium fluctuations

Management:
  • Aggressive BP control
  • Volume management
  • Beta-blockers (cautious use)
  • Statins
  • Consider echocardiogram periodically
─────────────────────────────────────────────────────
\`\`\``,
      keyTerms: [
        { term: 'LVH', definition: 'Left ventricular hypertrophy; thickened heart muscle' },
      ],
      clinicalNotes: 'Home nocturnal hemodialysis has superior outcomes compared to conventional HD. Cardiovascular disease is the leading cause of death in ESRD.',
      patientCounselingPoints: [
        'Home hemodialysis offers more freedom and can be done while you sleep.',
        'More frequent dialysis can improve heart health and blood pressure.',
        'Heart disease is the most common cause of death in kidney failure.',
        'Cardiac testing monitors your heart health while on dialysis.',
      ],
    },
    5: {
      level: 5,
      summary: 'Kidney failure management has evolved with home dialysis options, novel immunosuppressive regimens, and precision medicine approaches to optimize outcomes for transplantation and dialysis.',
      explanation: `**Innovative Therapies:**

*Wearable Artificial Kidney:*
\`\`\`
Emerging Technologies:
────────────────────────────────────────────────────────────
Wearable Artificial Kidney:
  • Miniaturized dialysis device
  • Wearable or implantable
  • Continuous dialysis
  • Currently in clinical trials

Bioartificial Kidney:
  • Combines filter with living kidney cells
  • Produces hormones
  • Metabolic functions
  • Research stage
────────────────────────────────────────────────────────────
\`\`\``,
      keyTerms: [
        { term: 'bioartificial kidney', definition: 'Device combining filtration with living cells' },
      ],
      clinicalNotes: 'Wearable artificial kidney could revolutionize ESRD care. Clinical trials are ongoing.',
      patientCounselingPoints: [
        'Research is developing wearable kidneys that could continuously filter blood.',
        'Artificial kidneys with living cells may eventually produce hormones.',
      ],
    },
  },

  media: [
    {
      id: 'dialysis-types',
      type: 'diagram',
      filename: 'hemodialysis-vs-peritoneal-dialysis.svg',
      title: 'Types of Dialysis',
      description: 'Comparison of hemodialysis and peritoneal dialysis',
    },
    {
      id: 'kidney-transplant',
      type: 'diagram',
      filename: 'kidney-transplant-procedure.svg',
      title: 'Kidney Transplantation',
      description: 'Illustration of kidney transplant procedure',
    },
  ],

  citations: [
    {
      id: 'kdigo-esrd-2024',
      type: 'article',
      title: 'KDIGO Clinical Practice Guideline for the Management of Dialysis',
      source: 'Kidney International',
    },
  ],

  crossReferences: [
    { targetId: 'chronic-disease-chronic-kidney-disease', targetType: 'condition', relationship: 'parent', label: 'Chronic Kidney Disease' },
    { targetId: 'chronic-disease-dialysis', targetType: 'concept', relationship: 'related', label: 'Dialysis' },
    { targetId: 'chronic-disease-kidney-transplant', targetType: 'concept', relationship: 'related', label: 'Kidney Transplant' },
  ],

  tags: {
    systems: ['renal', 'urinary'],
    topics: ['ESRD', 'kidney failure', 'dialysis', 'transplant'],
    keywords: ['kidney failure', 'ESRD', 'renal failure', 'dialysis'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'surgery'] },
  },

  createdAt: '2025-01-25T00:00:00.000Z',
  updatedAt: '2025-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
