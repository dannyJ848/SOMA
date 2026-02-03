/**
 * TURP - Educational Content
 */

import { EducationalContent } from '../../types';

export const turp: EducationalContent = {
  id: 'procedure-turp',
  type: 'topic',
  name: 'TURP',
  alternateNames: ['Transurethral Resection of Prostate', 'Prostate Resection'],

  levels: {
    1: {
      level: 1,
      summary: 'TURP is a surgery to remove part of an enlarged prostate that is blocking urine flow, done through the urethra without external cuts.',
      explanation: `TURP (Transurethral Resection of Prostate) is surgery for men with an enlarged prostate causing difficulty urinating.

**How It Works:**
- A scope is passed through the penis
- No cuts on the outside of your body
- Prostate tissue is trimmed away from inside
- Opens up the blocked channel

**Why It's Done:**
- Unable to urinate (retention)
- Medications haven't helped enough
- Bladder stones from blockage
- Kidney damage from obstruction

**What to Expect:**
- General or spinal anesthesia
- Hospital stay 1-2 days
- Catheter for a few days
- Recovery takes 4-6 weeks

**After Surgery:**
- Blood in urine for several weeks is normal
- Avoid straining, heavy lifting
- Drink plenty of water
- Most men urinate much better`,
      keyTerms: [
        { term: 'TURP', definition: 'Surgery to remove prostate tissue blocking urine flow' },
        { term: 'prostate', definition: 'Gland below bladder that can enlarge and block urine' },
        { term: 'transurethral', definition: 'Through the urethra, no external incisions' },
      ],
      analogies: [
        'TURP is like coring an apple - the outer prostate stays but the blocking center is removed.',
      ],
      examples: [
        'After TURP, most men notice improved urinary flow within weeks.',
      ],
    },
    2: {
      level: 2,
      summary: 'TURP is the gold standard surgical treatment for BPH, using electrosurgical resection to remove obstructing prostatic tissue and relieve bladder outlet obstruction.',
      explanation: `## Indications

**Absolute:**
- Refractory urinary retention
- Recurrent urinary infections
- Bladder stones
- Renal insufficiency from obstruction
- Recurrent gross hematuria from BPH

**Relative:**
- Failed medical therapy
- Patient preference
- Persistent bothersome LUTS

## Procedure Overview

**Setup:**
- Spinal or general anesthesia
- Lithotomy position
- Continuous irrigation (glycine or saline)

**Technique:**
- Resectoscope (24-28 Fr)
- Monopolar or bipolar electrosurgery
- Systematic resection
- Coagulation of bleeding vessels

**Resection Limits:**
- Proximal: Bladder neck
- Distal: Verumontanum
- Depth: Capsule (circular fibers)

## Outcomes

**Improvement:**
- IPSS decreases 70-80%
- Qmax increases 100-200%
- Residual decreases significantly

**Durability:**
- 10% re-treatment at 10 years
- Superior to minimally invasive options

## Risks

**Early:**
- Bleeding requiring transfusion (2-5%)
- Clot retention
- TUR syndrome (with monopolar)
- UTI

**Late:**
- Retrograde ejaculation (65-75%)
- Incontinence (1-2%)
- Bladder neck contracture (2-5%)
- Urethral stricture (3-7%)
- ED (rare, controversial)`,
      keyTerms: [
        { term: 'resectoscope', definition: 'Instrument with loop electrode for prostate tissue removal' },
        { term: 'TUR syndrome', definition: 'Dilutional hyponatremia from irrigation fluid absorption' },
        { term: 'verumontanum', definition: 'Anatomical landmark marking distal resection limit' },
      ],
      analogies: [
        'The resectoscope works like a cheese plane, slicing tissue chips off the prostate.',
      ],
    },
    3: {
      level: 3,
      summary: 'TURP technique requires systematic resection, hemostasis, and awareness of complications including TUR syndrome, with bipolar technology reducing risks.',
      explanation: `## Monopolar vs Bipolar

**Monopolar TURP:**
- Electrical current returns to grounding pad
- Requires glycine or sorbitol irrigation
- Risk of TUR syndrome
- Limited resection time (60-90 min)

**Bipolar TURP:**
- Current contained between electrodes
- Uses normal saline irrigation
- No TUR syndrome risk
- Longer safe resection time

## TUR Syndrome

**Pathophysiology:**
- Hypotonic irrigation absorption
- Dilutional hyponatremia
- Glycine toxicity (if used)

**Risk Factors:**
- Prolonged resection (>90 min)
- Large prostate (>60g)
- Open venous sinuses
- Low-lying prostate

**Signs/Symptoms:**
- Na <120: Nausea, confusion
- Na <115: Seizures, coma
- Visual changes (glycine)
- Hypertension, bradycardia

**Management:**
- Stop procedure
- Furosemide
- Hypertonic saline if severe
- Supportive care

## Surgical Technique

**Systematic Approach:**
1. Initial hemostasis at bladder neck
2. Median lobe resection
3. Lateral lobe resection (one side)
4. Opposite lateral lobe
5. Apex trimming
6. Final hemostasis

**Achieving Hemostasis:**
- Arterial bleeders: Direct coagulation
- Venous sinuses: Slight bladder distention
- Capsular strokes: Compression

## Post-Operative Care

**Catheter Management:**
- 3-way catheter with CBI
- Irrigate until clear (24-48h)
- Remove when hematuria resolves
- Usually 1-3 days

**Discharge Instructions:**
- Avoid straining 4-6 weeks
- No heavy lifting
- Stool softeners
- Warning signs (clot retention, infection)`,
      keyTerms: [
        { term: 'bipolar TURP', definition: 'Resection using saline, eliminating TUR syndrome risk' },
        { term: 'CBI', definition: 'Continuous bladder irrigation to prevent clot retention' },
        { term: 'capsule', definition: 'Surgical boundary - white circular fibers of true prostate' },
      ],
      clinicalNotes: 'Bipolar TURP allows safe resection of larger prostates. Limit monopolar resection time to 60-90 minutes to reduce TUR syndrome risk.',
    },
    4: {
      level: 4,
      summary: 'Advanced TURP includes challenging cases, laser alternatives, and comparison with emerging modalities.',
      explanation: `## Challenging Cases

**Large Prostate (>80g):**
- Consider HoLEP or open/robotic
- Staged TURP if necessary
- Bipolar strongly preferred

**Anticoagulation:**
- Balance bleeding vs thrombotic risk
- May need bridging
- GreenLight laser alternative
- Increased transfusion risk

**Prior Radiation:**
- Increased incontinence risk
- Delayed wound healing
- Consider alternatives

**Concurrent Bladder Stones:**
- Cystolitholapaxy at same setting
- Order of procedures debatable

## Laser Alternatives

**HoLEP:**
- Enucleation technique
- Any prostate size
- Steep learning curve
- Lower re-treatment rate

**GreenLight PVP:**
- Vaporization
- Good for anticoagulation
- Outpatient possible
- May need re-treatment

**Thulium Laser:**
- Enucleation or resection
- Similar to HoLEP

## Comparison Table

| Factor | TURP | HoLEP | GreenLight |
|--------|------|-------|------------|
| Prostate size | <80g ideal | Any size | <80g |
| Learning curve | Moderate | Steep | Moderate |
| Hemostasis | Moderate | Excellent | Excellent |
| Catheter time | 1-3 days | 1-2 days | Same day-1 day |
| Re-treatment | 10% at 10y | 1-5% | 10-15% at 5y |

## Button TURP

**Technique:**
- Bipolar button electrode
- Vaporization and resection
- Excellent hemostasis
- May be slower

## Training Considerations

**Key Skills:**
- Resection efficiency
- Hemostasis
- Avoiding sphincter injury
- Capsule recognition`,
      keyTerms: [
        { term: 'HoLEP', definition: 'Holmium laser enucleation of prostate - removes entire transition zone' },
        { term: 'GreenLight PVP', definition: 'Photoselective vaporization of prostate using KTP laser' },
        { term: 'staged TURP', definition: 'Two-session resection for very large prostates' },
      ],
      clinicalNotes: 'HoLEP has the lowest re-treatment rate but requires specialized training. Refer large prostates to centers with enucleation expertise.',
    },
    5: {
      level: 5,
      summary: 'Expert TURP practice encompasses quality metrics, simulation training, and integration with robotic and emerging technologies.',
      explanation: `## Quality Metrics

**Outcome Measures:**
- Transfusion rate (<5% benchmark)
- TUR syndrome rate (<1%)
- Re-treatment rate
- Catheter duration
- Length of stay

**Process Measures:**
- Appropriate indication documentation
- Informed consent quality
- Antibiotic prophylaxis compliance

## Simulation Training

**Virtual Reality:**
- HoLEP simulators available
- TURP trainers
- Performance metrics

**Box Training:**
- Resection technique practice
- Hemostasis skills

**Proctorship:**
- Graduated responsibility
- Case selection
- Feedback mechanisms

## Robotic/Emerging Approaches

**Robotic Simple Prostatectomy:**
- Very large prostates (>150g)
- Complete adenoma removal
- Longer operative time
- Excellent outcomes

**Aquablation:**
- Robotic waterjet ablation
- Ultrasound-guided
- Tissue preserved for pathology
- Ejaculatory function preserved

**iTIND:**
- Temporary implant
- No tissue removal
- Early results promising
- Select patients

## Research Frontiers

**Tissue Preservation:**
- Ejaculatory duct sparing
- Functional outcomes focus
- Patient-reported outcomes

**Efficiency Improvements:**
- Novel energy sources
- Tissue identification technology
- Bleeding prediction

## Global Perspectives

**Training:**
- Variable access to simulation
- Proctorship availability
- Guideline implementation

**Technology Access:**
- TURP remains global standard
- Laser adoption variable
- Cost considerations

## Long-Term Outcomes

**Functional Results:**
- 15-year data available
- Sustained symptom improvement
- Low late complications

**Cancer Detection:**
- Incidental cancer in chips (5-10%)
- Most clinically insignificant
- Follow-up protocols`,
      keyTerms: [
        { term: 'aquablation', definition: 'Robotic waterjet ablation with real-time ultrasound guidance' },
        { term: 'iTIND', definition: 'Temporary implantable nitinol device for BPH' },
        { term: 'incidental prostate cancer', definition: 'Cancer found unexpectedly in TURP chips' },
      ],
      clinicalNotes: 'Incidental prostate cancer found in TURP chips is usually low-grade and low-volume. Clinical significance depends on patient age, volume, and grade.',
    },
  },

  media: [],
  citations: [
    {
      id: 'aua-bph-surgical',
      type: 'article',
      title: 'Surgical Management of BPH',
      source: 'AUA Guidelines',
    },
  ],
  crossReferences: [
    { targetId: 'condition-bph', targetType: 'condition', relationship: 'related', label: 'BPH' },
  ],
  tags: {
    systems: ['urinary'],
    topics: ['procedures', 'prostate'],
    clinicalRelevance: 'high',
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default turp;
