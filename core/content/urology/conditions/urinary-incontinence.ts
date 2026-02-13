/**
 * Urinary Incontinence - Educational Content
 */

import { EducationalContent } from '../../types';

export const urinaryIncontinence: EducationalContent = {
  id: 'condition-urinary-incontinence',
  type: 'condition',
  name: 'Urinary Incontinence',
  alternateNames: ['UI', 'Bladder Leakage', 'Loss of Bladder Control'],

  levels: {
    1: {
      level: 1,
      summary: 'Urinary incontinence is the unintentional leaking of urine, which can happen when you cough, sneeze, or can\'t get to the bathroom in time.',
      explanation: `Urinary incontinence means losing urine when you don't want to. It's very common and nothing to be embarrassed about.

**Types of Leakage:**
- **Stress incontinence**: Leaking when you cough, sneeze, laugh, or exercise
- **Urge incontinence**: Leaking after a sudden, strong urge to urinate
- **Mixed**: Having both types

**Who Gets It:**
- More common in women
- Risk increases with age
- Affects 1 in 4 women over 18

**What Helps:**
- Pelvic floor exercises (Kegels)
- Bladder training
- Limiting caffeine and alcohol
- Maintaining healthy weight
- Treatments are very effective`,
      keyTerms: [
        { term: 'incontinence', definition: 'Accidental leaking of urine' },
        { term: 'stress incontinence', definition: 'Leaking with coughing, sneezing, or exercise' },
        { term: 'urge incontinence', definition: 'Leaking with a sudden, strong urge to urinate' },
      ],
      analogies: [
        'Stress incontinence is like a water balloon that leaks when squeezed.',
        'The pelvic floor muscles are like a hammock holding up your bladder.',
      ],
      examples: [
        'Leaking a small amount of urine while laughing or sneezing is a common sign of stress incontinence.',
      ],
    },
    2: {
      level: 2,
      summary: 'Urinary incontinence is classified as stress, urgency, mixed, overflow, or functional, with treatment determined by type and severity.',
      explanation: `## Types of Incontinence

**Stress Urinary Incontinence (SUI):**
- Leakage with increased abdominal pressure
- Weak urethral sphincter or pelvic support
- Risk factors: Pregnancy, vaginal delivery, obesity, surgery

**Urgency Urinary Incontinence (UUI):**
- Leakage associated with urgency
- Overactive bladder component
- May have neurologic cause

**Mixed Urinary Incontinence (MUI):**
- Both stress and urgency components
- Treat predominant symptom first

**Overflow Incontinence:**
- Bladder doesn't empty completely
- Continuous dribbling
- Often in men with BPH or neurologic conditions

**Functional Incontinence:**
- Physical or cognitive barriers to toileting
- Bladder function may be normal

## Evaluation

**History:**
- Type, frequency, severity
- Pad use
- Impact on quality of life

**Questionnaires:**
- ICIQ-UI (validated)
- UDI-6
- IIQ-7

**Physical Exam:**
- Cough stress test
- Pelvic exam (prolapse, atrophy)
- Neurologic exam

**Basic Testing:**
- Urinalysis
- Post-void residual
- Voiding diary`,
      keyTerms: [
        { term: 'SUI', definition: 'Stress urinary incontinence - leakage with physical activity' },
        { term: 'UUI', definition: 'Urgency urinary incontinence - leakage with urgency' },
        { term: 'post-void residual', definition: 'Amount of urine left in bladder after urination' },
      ],
      analogies: [
        'Overflow incontinence is like an overflowing sink - the drain is blocked so water spills over.',
      ],
    },
    3: {
      level: 3,
      summary: 'Incontinence pathophysiology involves urethral sphincter deficiency, detrusor dysfunction, or pelvic floor abnormalities requiring targeted evaluation and treatment.',
      explanation: `## Stress Incontinence Mechanisms

**Intrinsic Sphincter Deficiency (ISD):**
- Weak urethral closure
- Low leak point pressure (<60 cm H2O)
- Fixed, drainpipe urethra

**Urethral Hypermobility:**
- Loss of urethral support
- Rotational descent with stress
- Normal sphincter function

## Evaluation Details

**Urodynamics:**
- When considering surgery
- Mixed symptoms
- Prior failed surgery
- Neurologic disease

**Key Urodynamic Parameters:**
- Valsalva leak point pressure (VLPP)
- Maximum urethral closure pressure (MUCP)
- Detrusor overactivity presence

**Cystoscopy:**
- Recurrent incontinence
- Hematuria
- Pain
- Prior anti-incontinence surgery

## Treatment by Type

**SUI:**
- Pelvic floor muscle training (PFMT)
- Pessary
- Bulking agents
- Mid-urethral sling
- Burch colposuspension

**UUI:**
- Behavioral therapy
- Antimuscarinics/beta-3 agonists
- OnabotulinumtoxinA
- Neuromodulation

**Mixed:**
- Treat predominant symptom
- Combination approaches
- May need staged treatment

## Surgical Options for SUI

**Mid-Urethral Slings:**
- TVT: Retropubic approach
- TOT: Transobturator approach
- Mini-slings: Single incision
- Success: 80-90% short-term

**Burch Colposuspension:**
- Open or laparoscopic
- No mesh
- Good long-term data

**Bulking Agents:**
- Coaptite, Macroplastique
- Office procedure
- Lower efficacy, may need repeat`,
      keyTerms: [
        { term: 'ISD', definition: 'Intrinsic sphincter deficiency - weak urethral closure mechanism' },
        { term: 'VLPP', definition: 'Valsalva leak point pressure - pressure at which leakage occurs' },
        { term: 'mid-urethral sling', definition: 'Surgical mesh placed under urethra for stress incontinence' },
      ],
      clinicalNotes: 'Always rule out urinary tract infection before incontinence surgery. Confirm stress incontinence with cough test or urodynamics.',
    },
    4: {
      level: 4,
      summary: 'Advanced incontinence management includes complex surgical reconstruction, recurrent incontinence evaluation, and specialized populations.',
      explanation: `## Complex Surgical Cases

**Recurrent SUI:**
- Repeat mid-urethral sling
- Pubovaginal sling (autologous fascia)
- Urethral bulking (adjunctive)
- Artificial urinary sphincter (rare in women)

**Artificial Urinary Sphincter (AUS):**
- Male post-prostatectomy incontinence standard
- Component: Cuff, pump, reservoir
- 90% satisfaction
- Mechanical failure: 20% at 10 years

**Male Slings:**
- Transobturator approach
- For mild-moderate post-prostatectomy
- AdVance, Virtue slings

## Mesh Considerations

**FDA Warnings:**
- Transvaginal mesh for prolapse removed from market
- Mid-urethral slings remain available
- Informed consent required

**Complications:**
- Mesh exposure: 2-10%
- Pain: Variable
- Voiding dysfunction
- Management: Conservative vs excision

## Special Populations

**Post-Prostatectomy:**
- Wait 12 months post-surgery
- PFMT first
- AUS vs sling based on severity

**Neurogenic Incontinence:**
- Address underlying cause
- Anticholinergics + CIC
- Augmentation cystoplasty
- Urinary diversion

**Elderly:**
- Functional assessment
- Cognitive impact on management
- Medication review
- Caregiver support

**Obesity:**
- Weight loss improves incontinence
- Consider bariatric referral
- Surgical outcomes may be reduced

## Quality Measures

**Pre-operative Assessment:**
- Documented cough test or urodynamics
- Rule out UTI
- Shared decision making

**Outcomes Tracking:**
- Patient-reported outcomes (ICIQ)
- Reoperation rates
- Complication surveillance`,
      keyTerms: [
        { term: 'AUS', definition: 'Artificial urinary sphincter - implantable device for severe male incontinence' },
        { term: 'pubovaginal sling', definition: 'Using patient\'s own fascia for urethral support' },
        { term: 'mesh exposure', definition: 'Erosion of mesh through tissue - most common mesh complication' },
      ],
      clinicalNotes: 'Post-prostatectomy incontinence typically improves for 12 months. Reserve surgical intervention until stable baseline established.',
    },
    5: {
      level: 5,
      summary: 'Expert incontinence care encompasses novel surgical techniques, regenerative approaches, and optimization of complex cases.',
      explanation: `## Novel Surgical Approaches

**Robotic Sacrocolpopexy with SUI:**
- Concomitant Burch or sling
- Mesh considerations
- Long-term outcomes

**Laparoscopic Colposuspension:**
- Comparable to open Burch
- Less morbidity
- Technical expertise required

**Single-Incision Slings:**
- Reduced morbidity
- Learning curve
- May have lower efficacy

## Regenerative Medicine

**Stem Cell Therapy:**
- Adipose-derived stem cells
- Muscle-derived stem cells
- Injection into sphincter
- Phase 2-3 trials

**Tissue Engineering:**
- Bioengineered sphincters
- Scaffold-based approaches
- Preclinical stage

**Neuromuscular Electrical Stimulation:**
- Magnetic innervation
- Percutaneous tibial nerve
- Pudendal neuromodulation

## Salvage Procedures

**Failed Slings:**
- Revision vs removal
- Alternative procedures
- Fascial slings

**Refractory Incontinence:**
- Urinary diversion
- Continent catheterizable channels
- Ileal conduit

## Research Frontiers

**Predictive Models:**
- Machine learning for outcomes
- Personalized treatment selection
- Risk stratification

**Biomarkers:**
- Urinary proteomics
- Collagen metabolism markers
- Treatment response prediction

**Novel Devices:**
- Adjustable continence devices
- Tissue expanders
- Biodegradable materials

## Quality and Safety

**Surgeon Factors:**
- Volume-outcome relationship
- Subspecialty training
- Complication management

**Registry Data:**
- AUGS/SUFU registry
- BSUG database
- Real-world outcomes

**Shared Decision Making:**
- Treatment options discussion
- Success rates
- Complication risks
- Alternative approaches`,
      keyTerms: [
        { term: 'continent catheterizable channel', definition: 'Surgically created channel for intermittent catheterization' },
        { term: 'proteomics', definition: 'Study of protein expression patterns as biomarkers' },
        { term: 'volume-outcome relationship', definition: 'Higher surgical volume associated with better outcomes' },
      ],
      clinicalNotes: 'Stem cell therapy for incontinence shows promise but remains investigational. Patient selection and standardization of techniques are ongoing challenges.',
    },
  },

  media: [],
  citations: [
    {
      id: 'aua-sui-guidelines',
      type: 'article',
      title: 'Surgical Treatment of Female Stress Urinary Incontinence',
      source: 'AUA/SUFU Guideline',
    },
  ],
  crossReferences: [
    { targetId: 'condition-overactive-bladder', targetType: 'condition', relationship: 'related', label: 'Overactive Bladder' },
  ],
  tags: {
    systems: ['urinary'],
    topics: ['incontinence', 'pelvic floor'],
    clinicalRelevance: 'high',
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default urinaryIncontinence;
