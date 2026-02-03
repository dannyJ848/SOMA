import { EducationalContent } from '../../types';

export const sciaticaContent: EducationalContent = {
  id: 'ortho-patient-sciatica',
  type: 'condition',
  name: 'Sciatica',
  alternateNames: ['Sciatic nerve pain', 'Lumbar radiculopathy', 'Leg pain from back'],

  levels: {
    1: {
      level: 1,
      summary: 'Sciatica is pain that travels from your lower back down through your buttock and leg, caused by pressure on the sciatic nerve.',
      explanation: `The sciatic nerve is the longest nerve in your body, running from your lower back through your buttocks and down each leg. Sciatica happens when something presses on or irritates this nerve.

**What It Feels Like:**
- Pain that shoots from your back down your leg
- Burning or tingling feeling in your leg
- Numbness in your leg or foot
- Weakness that makes it hard to move your leg
- Pain usually affects only one side

**Common Causes:**
- Herniated disc (most common)
- Bone spur pressing on nerve
- Narrowing of the spine (stenosis)
- Tight muscles in the buttock

**What Makes It Worse:**
- Sitting for long periods
- Coughing or sneezing
- Bending forward

**What Helps:**
- Short periods of rest
- Ice for the first few days, then heat
- Over-the-counter pain relievers
- Gentle stretching
- Walking (staying active is important!)
- Physical therapy

**Good News:**
Most sciatica gets better within 4-6 weeks without surgery. Your body can often heal the problem on its own.

**When to See a Doctor Immediately:**
- Can't control your bladder or bowels
- Numbness in your groin area
- Severe weakness in your leg
- Pain keeps getting worse despite rest`,
      keyTerms: [
        { term: 'sciatic nerve', definition: 'The largest nerve in your body that runs from your back down each leg' },
        { term: 'radiating pain', definition: 'Pain that travels along a nerve pathway' },
        { term: 'herniated disc', definition: 'When the cushion between spine bones pushes out and presses on nerves' },
      ],
      analogies: [
        'The sciatic nerve is like a major highway carrying signals between your brain and leg.',
        'A herniated disc pressing on a nerve is like a kink in a garden hose blocking the water flow.',
      ],
      examples: [
        'Pain that starts in the buttock and shoots down to the calf when you cough.',
        'A tingling feeling in your foot that gets worse when sitting.',
      ],
    },
    2: {
      level: 2,
      summary: 'Sciatica describes radicular pain following the sciatic nerve distribution, most commonly caused by lumbar disc herniation affecting the L4, L5, or S1 nerve roots.',
      explanation: `Sciatica is a symptom, not a diagnosis. It describes pain radiating along the sciatic nerve pathway due to nerve root irritation or compression.

**Anatomy:**
- Sciatic nerve: Largest nerve in body
- Formed from L4, L5, S1, S2, S3 nerve roots
- Exits pelvis through greater sciatic foramen
- Divides into tibial and peroneal nerves at knee

**Common Causes:**
- **Disc herniation** (90%): L4-L5 and L5-S1 most common
- **Spinal stenosis**: Narrowing compressing nerve roots
- **Piriformis syndrome**: Muscle compresses sciatic nerve
- **Spondylolisthesis**: Vertebra slipping forward

**Symptoms by Nerve Root:**

| Root | Pain/Numbness | Weakness | Reflex |
|------|---------------|----------|--------|
| L4 | Front of thigh, inner leg | Knee extension | Knee jerk |
| L5 | Outer leg, top of foot | Ankle dorsiflexion, big toe up | None |
| S1 | Back of leg, outer foot | Ankle plantarflexion, toe walk | Ankle jerk |

**Diagnosis:**
- History and physical exam usually sufficient
- Straight leg raise test: Positive if leg pain at 30-70 degrees
- MRI: If symptoms persist >6 weeks or red flags present

**Treatment Progression:**
1. **Weeks 1-4**: Activity modification (not bed rest), NSAIDs, ice/heat
2. **Weeks 4-6**: Physical therapy, consider oral steroids for severe symptoms
3. **Weeks 6-12**: Epidural injections if needed
4. **Beyond 12 weeks**: Surgery consideration if not improving

**Surgery:**
- Microdiscectomy for disc herniation
- 85-90% success rate for leg pain relief
- Reserved for failed conservative care or progressive weakness

**Prognosis:**
- 80-90% improve within 6-12 weeks
- Recurrence: About 20% over lifetime`,
      keyTerms: [
        { term: 'radicular pain', definition: 'Pain that follows a nerve root distribution, often sharp or shooting' },
        { term: 'straight leg raise', definition: 'Test where raising leg reproduces sciatic pain; suggests nerve compression' },
        { term: 'dermatome', definition: 'Area of skin supplied by a single nerve root' },
        { term: 'piriformis syndrome', definition: 'When the piriformis muscle in the buttock compresses the sciatic nerve' },
      ],
      analogies: [
        'Nerve roots are like branches of a tree - the sciatic nerve is a major branch that splits into smaller twigs.',
        'Each nerve root supplies a specific strip of skin (dermatome) like lanes on a highway.',
      ],
    },
    3: {
      level: 3,
      summary: 'Sciatica involves radicular pain from lumbar nerve root pathology, requiring differentiation of mechanical from inflammatory components and identification of the specific affected level to guide treatment.',
      explanation: `Sciatica represents a clinical syndrome requiring systematic evaluation to identify etiology and guide management.

**Pathophysiology:**

*Mechanical compression:*
- Direct pressure on nerve root
- Venous congestion and edema
- Ischemia if severe

*Chemical inflammation:*
- Nucleus pulposus releases inflammatory mediators
- Phospholipase A2, TNF-alpha, IL-1, IL-6
- Chemical radiculitis without mechanical compression
- May explain symptoms without MRI correlation

**Clinical Evaluation:**

*History:*
- Distribution: Dermatomal vs. non-dermatomal
- Quality: Sharp, shooting (radicular) vs. deep, aching
- Aggravating factors: Forward flexion (disc), extension (stenosis)
- Red flags: Bowel/bladder, progressive weakness

*Physical Exam:*
- Neurological: Motor (myotome), sensory (dermatome), reflexes
- Tension signs: SLR, crossed SLR, femoral stretch
- Gait: Heel walk (L5), toe walk (S1)
- Spinal exam: Range of motion, tenderness

**Differential Diagnosis:**
- Hip pathology: Intra-articular pain, limited ROM
- Sacroiliac dysfunction: FABER test, compression
- Piriformis syndrome: Tenderness, FAIR test
- Peripheral neuropathy: Stocking distribution
- Vascular claudication: Fixed walking distance, pulses

**Imaging:**

*MRI:*
- Indicated: Red flags, >6 weeks symptoms, surgical planning
- Correlate findings with clinical presentation
- False positives common: 20-30% asymptomatic people have disc bulges

*EMG/NCS:*
- Confirms radiculopathy
- Localizes level
- Distinguishes from peripheral neuropathy
- Optimal timing: 3-6 weeks after onset

**Management:**

*Conservative:*
- NSAIDs: First-line pharmacotherapy
- Activity modification: Avoid aggravating positions, stay active
- Physical therapy: McKenzie method, core stabilization
- Oral steroids: Short course for acute severe symptoms (limited evidence)

*Interventional:*
- Epidural steroid injections:
  - Transforaminal: More targeted
  - Interlaminar: Broader coverage
  - NNT ~7 for short-term relief
  - May avoid surgery in some patients

*Surgical:*
- Indications: Cauda equina, progressive deficit, failed 6-12 weeks conservative care
- Microdiscectomy: Gold standard
- Outcomes: 85-90% leg pain relief`,
      keyTerms: [
        { term: 'chemical radiculitis', definition: 'Nerve root inflammation from inflammatory mediators without mechanical compression' },
        { term: 'myotome', definition: 'Group of muscles supplied by a single nerve root' },
        { term: 'tension sign', definition: 'Physical exam finding reproducing radicular symptoms by stretching nerve' },
        { term: 'transforaminal epidural', definition: 'Epidural injection targeting specific nerve root at foramen level' },
      ],
      clinicalNotes: 'Imaging findings often do not correlate with symptoms. Treatment decisions should be based on clinical presentation, not imaging alone. Progressive neurological deficit warrants urgent surgical consultation.',
    },
    4: {
      level: 4,
      summary: 'Sciatica management integrates clinical localization, imaging correlation, and evidence-based treatment selection, with surgery reserved for refractory cases or neurological deterioration.',
      explanation: `Advanced management of sciatica requires precise diagnosis, appropriate intervention timing, and understanding of outcomes predictors.

**Clinical Localization:**

*Motor examination:*
| Root | Key Muscle | Test |
|------|-----------|------|
| L2 | Iliopsoas | Hip flexion |
| L3 | Quadriceps | Knee extension |
| L4 | Tibialis anterior | Ankle dorsiflexion |
| L5 | EHL | Great toe extension |
| S1 | Gastrocnemius | Plantarflexion |

*Sensory examination:*
- L4: Medial leg
- L5: Lateral leg, dorsum foot, web space 1-2
- S1: Lateral foot, plantar surface

*Reflexes:*
- L4: Patellar
- S1: Achilles
- L5: No reliable reflex

**Diagnostic Injections:**

*Selective nerve root blocks:*
- Diagnostic: Identify symptomatic level
- Therapeutic: Short-term relief
- Correlate with MRI findings
- Useful for multilevel disease

**Evidence-Based Treatment:**

*Pharmacotherapy:*
- NSAIDs: Modest benefit over placebo
- Muscle relaxants: No evidence for radiculopathy specifically
- Gabapentinoids: Mixed evidence; may help neuropathic component
- Systemic steroids: Short-term benefit, no long-term effect
- Opioids: Avoid; no evidence of benefit

*Physical therapy:*
- McKenzie: Directional preference treatment
- Centralization of symptoms predicts good outcome
- Core stabilization: Prevent recurrence
- No single approach superior

*Epidural injections:*
- Cochrane: Small, short-term benefit
- Transforaminal vs. interlaminar: TF may be more effective
- Risk-benefit: Rare serious complications (epidural hematoma, infection)
- Limit 3-4 per year

**Surgical Decision-Making:**

*Indications:*
- Cauda equina syndrome: Emergency
- Progressive motor weakness
- Intractable symptoms despite 6-12 weeks conservative care
- Patient preference after informed discussion

*Outcomes predictors:*
- Favorable: Leg pain > back pain, positive SLR, short duration
- Unfavorable: Workers' compensation, depression, smoking

*Surgical evidence:*
- SPORT trial: Surgery faster improvement; similar outcomes at 4 years
- Maine Lumbar Spine Study: Surgery superior at 1 year, less difference at 10 years
- Surgery more consistent relief; conservative more variable

**Postoperative Management:**
- Early mobilization
- Physical therapy: Core stabilization
- Activity restrictions: 6 weeks lifting limits
- Return to work: 2-4 weeks sedentary, 6-12 weeks physical
- Recurrence risk: 5-10%`,
      keyTerms: [
        { term: 'SPORT trial', definition: 'Landmark RCT comparing surgery vs. conservative for disc herniation' },
        { term: 'centralization', definition: 'McKenzie concept where symptoms move toward spine with repeated movements' },
        { term: 'EHL', definition: 'Extensor hallucis longus; muscle extending great toe, L5 root' },
        { term: 'selective nerve root block', definition: 'Targeted injection to single nerve root for diagnosis or treatment' },
      ],
      clinicalNotes: 'The SPORT trial showed faster recovery with surgery but similar long-term outcomes, supporting shared decision-making. Patient preference and tolerance of symptoms are key factors in determining surgical timing.',
    },
    5: {
      level: 5,
      summary: 'Contemporary sciatica management emphasizes precision diagnostics, phenotype-based treatment selection, and personalized care integrating biological, psychological, and social factors.',
      explanation: `Expert management of sciatica requires integration of current evidence, clinical expertise, and patient-centered care.

**Precision Diagnostics:**

*Advanced imaging:*
- MRI with contrast: Distinguish recurrent disc from scar
- MR neurography: High-resolution nerve imaging
- Diffusion tensor imaging: Nerve integrity assessment
- Weight-bearing/dynamic MRI: Positional changes

*Electrodiagnostics:*
- EMG: Paraspinal fibrillations indicate radiculopathy
- H-reflex: S1 radiculopathy
- F-wave: Proximal nerve assessment
- Timing: Optimal 3-6 weeks from onset

*Quantitative sensory testing:*
- Identifies neuropathic pain phenotype
- May guide pharmacotherapy selection

**Evidence Synthesis:**

*Natural history:*
- 70-80% improve by 6-12 weeks
- Disc resorption occurs in majority
- Large herniations: Better resorption rates

*Treatment comparisons:*
- Surgery vs. conservative: Faster improvement with surgery
- Long-term outcomes similar
- Cost-effectiveness: Both reasonable depending on patient values

*Epidural steroids:*
- Meta-analyses: Small effect size
- May reduce surgical rates by 10-15%
- Particulate vs. non-particulate: Safety considerations

**Phenotype-Based Treatment:**

*Mechanical responders:*
- Centralize with repeated movements
- McKenzie approach effective
- Good surgical candidates if needed

*Inflammatory predominant:*
- Chemical radiculitis
- May respond to steroids (systemic or epidural)
- Imaging may not show compression

*Central sensitization:*
- Widespread symptoms, allodynia
- Poor surgical candidates
- Psychological intervention important
- Pharmacotherapy: TCAs, SNRIs, gabapentinoids

**Surgical Advances:**

*Techniques:*
- Tubular microdiscectomy: Less muscle damage
- Full-endoscopic: Smaller incision, faster recovery
- Same long-term outcomes as open

*Outcomes data:*
- Success rate: 85-95% leg pain relief
- Back pain improvement less predictable
- Recurrence: 5-10% at 5-10 years
- Complications: 1-2% dural tear, <1% infection, <1% nerve injury

*Predictive models:*
- Machine learning for outcomes prediction
- Identify patients likely to benefit from surgery

**Biopsychosocial Factors:**

*Psychological:*
- Depression and anxiety predict poor outcomes
- Fear-avoidance delays recovery
- Catastrophizing associated with chronicity
- Address early with psychological intervention

*Social:*
- Workers' compensation: Worse outcomes
- Job dissatisfaction: Predicts disability
- Support system: Important for recovery

**Prevention:**

*Primary:*
- Exercise: Reduces LBP incidence
- Ergonomics: Limited evidence
- Education alone: Not protective

*Secondary:*
- Physical therapy: Reduces recurrence
- Core stabilization maintenance
- Activity modification during flares

**Quality Metrics:**
- Patient-reported outcomes: ODI, leg VAS, SF-36
- Return to work rates
- Opioid prescribing rates
- Time to diagnosis and treatment
- Patient satisfaction

**Shared Decision-Making:**
- Present natural history (favorable)
- Discuss surgery trade-offs (faster vs. similar long-term)
- Consider patient values and preferences
- Use decision aids when available
- Set realistic expectations`,
      keyTerms: [
        { term: 'phenotype-based treatment', definition: 'Selecting treatment based on predominant pain mechanism' },
        { term: 'centralization phenomenon', definition: 'Progressive movement of symptoms toward spine indicating favorable prognosis' },
        { term: 'H-reflex', definition: 'Electrophysiologic test assessing S1 nerve root function' },
        { term: 'MR neurography', definition: 'Specialized MRI technique for high-resolution nerve imaging' },
      ],
      clinicalNotes: `**Practice Points:**
- Surgery provides faster relief but similar long-term outcomes to conservative care
- Natural history is favorable - most improve regardless of treatment
- Central sensitization features predict poor surgical outcomes
- Psychological factors are modifiable and influence outcomes
- Workers' compensation cases require careful counseling

**Red Flags Requiring Urgent Action:**
- Cauda equina: Emergency decompression
- Progressive motor weakness: Urgent surgical consultation
- Severe or rapidly progressive symptoms: Expedited imaging and evaluation

**Decision Algorithm:**
1. Rule out red flags
2. Trial of conservative care 6-12 weeks
3. Imaging if not improving or surgical candidate
4. Correlate imaging with clinical findings
5. Shared decision-making re: continued conservative vs. surgery`,
    },
  },

  media: [
    {
      id: 'sciatic-nerve-anatomy',
      type: 'diagram',
      filename: 'sciatic-nerve-path.svg',
      title: 'Sciatic Nerve Pathway',
      description: 'Course of sciatic nerve from spine to leg',
    },
  ],
  citations: [
    {
      id: 'sport-disc',
      type: 'article',
      title: 'Surgery vs Nonoperative Treatment for Lumbar Disk Herniation: SPORT Trial',
      source: 'JAMA',
    },
  ],
  crossReferences: [
    { targetId: 'ortho-patient-herniated-disc', targetType: 'condition', relationship: 'related', label: 'Herniated Disc' },
    { targetId: 'ortho-patient-back-pain', targetType: 'condition', relationship: 'related', label: 'Back Pain' },
    { targetId: 'ortho-patient-spine-anatomy', targetType: 'structure', relationship: 'related', label: 'Spine Anatomy' },
  ],
  tags: {
    systems: ['musculoskeletal', 'nervous'],
    topics: ['spine', 'nerve', 'pain'],
    keywords: ['sciatica', 'sciatic nerve', 'radiculopathy', 'leg pain'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'surgery'] },
  },

  createdAt: '2024-01-24T00:00:00.000Z',
  updatedAt: '2024-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default sciaticaContent;
