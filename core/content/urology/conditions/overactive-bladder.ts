/**
 * Overactive Bladder - Educational Content
 */

import { EducationalContent } from '../../types';

export const overactiveBladder: EducationalContent = {
  id: 'condition-overactive-bladder',
  type: 'condition',
  name: 'Overactive Bladder',
  alternateNames: ['OAB', 'Urge Incontinence', 'Urgency-Frequency Syndrome'],

  levels: {
    1: {
      level: 1,
      summary: 'Overactive bladder (OAB) is when you feel sudden, strong urges to urinate that are hard to control, sometimes causing leakage.',
      explanation: `OAB means your bladder muscle squeezes when it shouldn't, making you feel like you need to go RIGHT NOW.

**Main Symptoms:**
- Sudden, strong urge to urinate
- Needing to go very often (8+ times a day)
- Waking up at night to urinate
- Sometimes leaking before you reach the toilet

**It's Very Common:**
- Affects millions of people
- More common as we get older
- Affects both men and women

**What Helps:**
- Bladder training exercises
- Pelvic floor exercises (Kegels)
- Limiting caffeine and alcohol
- Medications if needed`,
      keyTerms: [
        { term: 'OAB', definition: 'Overactive bladder - a condition causing sudden urges to urinate' },
        { term: 'urgency', definition: 'A sudden, strong need to urinate' },
        { term: 'frequency', definition: 'Needing to urinate more often than normal' },
      ],
      analogies: [
        'OAB is like a smoke alarm that goes off when there\'s no fire - your bladder signals "full" when it isn\'t.',
      ],
      examples: [
        'Having to rush to the bathroom immediately after getting the urge is a classic OAB symptom.',
      ],
    },
    2: {
      level: 2,
      summary: 'OAB is a symptom syndrome of urgency with or without urge incontinence, usually with frequency and nocturia, in the absence of urinary tract infection or other pathology.',
      explanation: `## Definition (ICS)

OAB is a clinical diagnosis based on symptoms:
- **Urgency**: Sudden compelling desire to void
- **Frequency**: >8 voids per 24 hours
- **Nocturia**: Waking to void ≥1 time
- **Urge incontinence**: Leakage with urgency (OAB-wet vs OAB-dry)

## Prevalence

- Overall: 12-17% of adults
- Increases with age
- Women: Higher incidence of urge incontinence
- Men: Often overlaps with BPH

## Evaluation

**History:**
- Voiding diary (3 days)
- Fluid intake patterns
- Previous treatments

**Physical Exam:**
- Abdominal exam
- Pelvic exam (women)
- DRE (men)
- Neurologic screen

**Testing:**
- Urinalysis (rule out UTI)
- Post-void residual
- Consider urodynamics if complex

## Treatment Ladder

1. **Behavioral Therapy (First-Line):**
   - Bladder training
   - Pelvic floor exercises
   - Fluid management

2. **Pharmacotherapy (Second-Line):**
   - Antimuscarinics
   - Beta-3 agonists

3. **Third-Line Options:**
   - Botox injections
   - Sacral neuromodulation
   - Tibial nerve stimulation`,
      keyTerms: [
        { term: 'nocturia', definition: 'Waking from sleep to urinate', pronunciation: 'nok-TOOR-ee-ah' },
        { term: 'urge incontinence', definition: 'Leakage of urine associated with urgency' },
        { term: 'antimuscarinic', definition: 'Medication that blocks bladder muscle contractions' },
      ],
      analogies: [
        'Behavioral therapy is like retraining a misbehaving pet - teaching your bladder better habits.',
      ],
    },
    3: {
      level: 3,
      summary: 'OAB pathophysiology involves detrusor overactivity, urothelial dysfunction, and altered afferent signaling, requiring systematic evaluation and multimodal treatment.',
      explanation: `## Pathophysiology

**Neurogenic Mechanisms:**
- Detrusor overactivity (involuntary contractions)
- Increased afferent signaling
- Altered central processing

**Myogenic Theory:**
- Partial denervation
- Increased cell-to-cell coupling
- Spontaneous myocyte contractions

**Urothelial Dysfunction:**
- Increased ATP release
- Altered stretch receptors
- Abnormal suburothelial signaling

## Detailed Evaluation

**Voiding Diary Analysis:**
- 24-hour volumes
- Void frequency
- Urgency episodes
- Incontinence episodes
- Functional bladder capacity

**Urodynamics (When Indicated):**
- Refractory to treatment
- Prior surgery
- Neurologic disease
- Consider before invasive therapy

## Pharmacotherapy Details

**Antimuscarinics:**
| Drug | Dose | Notes |
|------|------|-------|
| Oxybutynin IR | 5mg BID-TID | Most side effects |
| Oxybutynin ER | 5-30mg daily | Better tolerated |
| Tolterodine ER | 4mg daily | Bladder selective |
| Solifenacin | 5-10mg daily | M3 selective |
| Darifenacin | 7.5-15mg daily | M3 selective |
| Fesoterodine | 4-8mg daily | Active metabolite |
| Trospium | 20mg BID | Quaternary amine |

**Side Effects:**
- Dry mouth, constipation
- Cognitive effects (especially elderly)
- Urinary retention
- QT prolongation (some)

**Beta-3 Agonists:**
- Mirabegron 25-50mg daily
- Vibegron 75mg daily
- Mechanism: Detrusor relaxation
- Better cognitive profile`,
      keyTerms: [
        { term: 'detrusor overactivity', definition: 'Involuntary bladder muscle contractions during filling' },
        { term: 'myogenic', definition: 'Originating from the muscle itself' },
        { term: 'M3 receptor', definition: 'Primary muscarinic receptor mediating bladder contraction' },
      ],
      clinicalNotes: 'Avoid antimuscarinics in narrow-angle glaucoma and gastric retention. Use caution in elderly due to cognitive effects - consider beta-3 agonists first.',
    },
    4: {
      level: 4,
      summary: 'Advanced OAB management includes third-line therapies, combination approaches, and special population considerations.',
      explanation: `## Third-Line Therapies

**OnabotulinumtoxinA (Botox):**
- 100 units intravesically
- 20 injection sites
- Duration: 6-9 months
- Repeat as needed
- Risks: UTI, retention (6%), may need CIC

**Sacral Neuromodulation (SNM):**
- InterStim device
- S3 nerve root stimulation
- Success: 60-70%
- MRI-conditional devices available
- Staged implant approach

**Percutaneous Tibial Nerve Stimulation (PTNS):**
- Weekly 30-minute sessions x 12
- Then monthly maintenance
- Non-surgical option
- Success: 55-60%

## Combination Therapy

**Antimuscarinic + Beta-3:**
- Synergistic mechanisms
- Better efficacy than monotherapy
- Consider for refractory cases

**Medication + Behavioral:**
- Always combine
- Better outcomes than either alone

## Special Populations

**Elderly:**
- Prefer beta-3 agonists
- Avoid drugs on Beers list
- Consider cognitive testing

**Neurogenic OAB:**
- Higher Botox doses (200 units)
- SNM effective
- May need clean intermittent catheterization

**Men with BPH:**
- Treat BPH first
- Add OAB therapy if storage symptoms persist
- Monitor post-void residual

**Refractory Cases:**
- Definition: Failed behavioral + 2 medications + 1 third-line
- Consider augmentation cystoplasty
- Urinary diversion (rare)

## Urodynamic Findings

**DO (Detrusor Overactivity):**
- Present in 50-70% of OAB patients
- Absence doesn't exclude OAB
- Phasic vs terminal contractions

**Low Compliance:**
- Different management
- Risk to upper tracts
- May need augmentation`,
      keyTerms: [
        { term: 'sacral neuromodulation', definition: 'Electrical stimulation of S3 nerve to modulate bladder function' },
        { term: 'PTNS', definition: 'Percutaneous tibial nerve stimulation - needle-based nerve stimulation at ankle' },
        { term: 'augmentation cystoplasty', definition: 'Surgical bladder enlargement using bowel segment' },
      ],
      clinicalNotes: 'Before Botox injection, counsel patients about possibility of clean intermittent catheterization. Consider staged SNM (test phase) before permanent implant.',
    },
    5: {
      level: 5,
      summary: 'Expert OAB management encompasses emerging therapies, molecular targets, biomarkers, and future directions in neuromodulation.',
      explanation: `## Emerging Therapies

**Novel Pharmacology:**
- Selective M3 antagonists
- β3 agonist combinations
- TRP channel modulators
- P2X3 receptor antagonists

**Gene Therapy:**
- Herpes simplex amplicon vectors
- Target neurotrophins
- Experimental stage

**Stem Cell Therapy:**
- Adipose-derived stem cells
- Muscle-derived cells
- Early clinical trials

## Biomarkers Research

**Urinary Biomarkers:**
- Nerve growth factor (NGF)
- Brain-derived neurotrophic factor (BDNF)
- Prostaglandin E2
- ATP levels

**Clinical Utility:**
- Diagnosis
- Treatment response prediction
- Monitoring

## Advanced Neuromodulation

**New SNM Technologies:**
- Rechargeable devices
- MRI-conditional systems
- Closed-loop systems
- Miniaturized implants

**Pudendal Nerve Stimulation:**
- Alternative to SNM
- May be more effective
- Technical challenges

**Tibial Nerve Implants:**
- Implantable PTNS
- Removes need for office visits
- Clinical trials ongoing

## Phenotyping OAB

**OAB Subtypes:**
- Urgency-predominant
- Frequency-predominant
- Nocturia-predominant
- Mixed patterns

**Treatment Matching:**
- Personalized approach
- Biomarker-guided therapy
- Pharmacogenomics

## Outcomes Research

**Quality of Life:**
- OAB-q SF validated instrument
- Sleep quality measures
- Sexual function impact
- Depression screening

**Real-World Effectiveness:**
- Persistence rates
- Switching patterns
- Healthcare utilization

**Cost-Effectiveness:**
- SNM vs Botox analysis
- Generic availability
- Quality-adjusted life years`,
      keyTerms: [
        { term: 'TRP channels', definition: 'Transient receptor potential channels - sensory receptors in urothelium' },
        { term: 'P2X3', definition: 'Purinergic receptor involved in bladder afferent signaling' },
        { term: 'pharmacogenomics', definition: 'Using genetic information to optimize drug selection and dosing' },
      ],
      clinicalNotes: 'NGF is the most studied urinary biomarker in OAB, decreasing with successful treatment. Future practice may include biomarker-guided therapy selection.',
    },
  },

  media: [],
  citations: [
    {
      id: 'aua-oab-guidelines',
      type: 'article',
      title: 'Diagnosis and Treatment of Overactive Bladder',
      source: 'AUA/SUFU Guideline',
    },
  ],
  crossReferences: [
    { targetId: 'condition-urinary-incontinence', targetType: 'condition', relationship: 'related', label: 'Urinary Incontinence' },
  ],
  tags: {
    systems: ['urinary'],
    topics: ['bladder', 'voiding dysfunction'],
    clinicalRelevance: 'high',
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default overactiveBladder;
