/**
 * Low Back Pain - Musculoskeletal Conditions
 *
 * Comprehensive content on mechanical low back pain, radiculopathy,
 * red flag assessment, and evidence-based management.
 */

import { EducationalContent } from '../../types';

export const backPain: EducationalContent = {
  id: 'conditions-low-back-pain',
  type: 'condition',
  name: 'Low Back Pain',
  nameEs: 'Dolor Lumbar',
  alternateNames: ['LBP', 'Lumbago', 'Lower Back Pain', 'Backache', 'Sciatica'],

  levels: {
    1: {
      level: 1,
      summary: 'Low back pain is very common and usually gets better on its own, but certain symptoms require immediate medical attention.',
      explanation: `## Understanding Low Back Pain

Low back pain is one of the most common reasons people visit the doctor. Most people will experience back pain at some point in their lives.

**The Good News:**
- Most back pain gets better within a few weeks
- 80-90% of people recover within 6 weeks
- Serious causes are rare (less than 1% of cases)

**What Causes Back Pain?**

Most back pain is "mechanical" - meaning it comes from how your back moves or strains:
- Muscle strains from lifting, bending, or twisting
- Poor posture
- Being overweight
- Lack of exercise
- Sleeping on a poor mattress

## When to Worry: Red Flags

\`\`\`
Seek immediate medical care if you have:
• Loss of bladder or bowel control
• Numbness in your "saddle area" (inner thighs, groin)
• Leg weakness (tripping, foot drop)
• Fever with back pain
• Unexplained weight loss
• History of cancer
• Pain that worsens at night or when lying down
• Recent significant trauma (fall, car accident)
\`\`\`

These symptoms could indicate something more serious that needs urgent evaluation.

## What Is Sciatica?

Sciatica is pain that travels from your lower back down your leg. It happens when a nerve in your back is compressed or irritated.

**Symptoms:**
- Pain shooting down the buttock and leg (usually one side)
- Numbness or tingling in the leg or foot
- Weakness in the leg or foot
- Pain that worsens with sitting, coughing, or sneezing

## Self-Care for Back Pain

**Things That Help:**
- Stay active! Bed rest for more than a couple days can make things worse
- Gentle stretching and walking
- Heat or cold packs
- Over-the-counter pain medicines
- Good posture when sitting and standing

**Things That May Worsen Pain:**
- Prolonged bed rest
- Poor posture
- Being inactive
- Heavy lifting
- Smoking (reduces blood flow to the spine)

## When to See a Doctor

**Make an appointment if:**
- Pain lasts longer than 2-3 weeks
- Pain spreads down your leg below the knee
- Pain is severe and limits your daily activities
- You have numbness or weakness in your legs
- You've had back pain before and it's different this time

## Prevention

**Tips to Prevent Future Back Pain:**
- Exercise regularly (especially core strengthening)
- Maintain a healthy weight
- Practice good posture
- Lift properly (bend your knees, not your back)
- Stretch regularly
- Avoid smoking`,
      keyTerms: [
        { term: 'low back pain', definition: 'Pain in the area between the bottom of the ribs and the crease of the buttocks' },
        { term: 'sciatica', definition: 'Pain that travels down the leg from pressure on a nerve in the lower back' },
        { term: 'red flag', definition: 'A symptom or sign that indicates a potentially serious condition needing urgent care' },
        { term: 'mechanical pain', definition: 'Pain that comes from movement, strain, or injury to the muscles or joints' },
        { term: 'saddle area', definition: 'The inner thighs, groin, and buttocks that would touch a saddle; numbness here is serious' },
      ],
      analogies: [
        'Your spine is like a stack of blocks with cushions between them - strain can irritate the cushions or muscles.',
        'Bed rest for back pain is like leaving a car unused - it makes things stiffer and worse.',
        'Think of your core muscles as a natural back brace - strengthening them helps support your spine.',
      ],
      examples: [
        'A construction worker who lifts heavy materials all day and develops aching lower back pain likely has mechanical back pain from strain.',
        'Someone who feels shooting pain down their right leg when they cough has classic sciatica symptoms.',
        'An older person with back pain, fever, and urinary tract infection might have a spinal infection.',
      ],
      patientCounselingPoints: [
        'Movement is medicine for low back pain - stay as active as possible within your comfort limits.',
        'Heat can help relax tight muscles, while ice can numb pain and reduce inflammation.',
        'Most back pain improves within 4-6 weeks even without specific treatment.',
        'Sleep with a pillow between your knees if you\'re a side sleeper to reduce strain on your back.',
        'Don\'t let fear of pain stop you from moving - gentle activity actually helps recovery.',
      ],
    },
    2: {
      level: 2,
      summary: 'Low back pain is classified as mechanical, radicular, or secondary to systemic disease, with red flag symptoms identifying serious conditions requiring urgent evaluation.',
      explanation: `## Classification of Low Back Pain

**1. Mechanical (Nonspecific) Low Back Pain (85-95%):**
- Pain related to movement, position, or activity
- Usually worse with flexion, better with lying down
- No clear structural cause identified
- Self-limited, favorable prognosis

**2. Radicular Pain (Sciatica):**
- Pain radiating down the leg in a nerve distribution
- Caused by nerve root compression (herniated disc, foraminal stenosis)
- Often accompanied by neurologic symptoms (numbness, weakness)
- Better prognosis with surgery if severe or persistent

**3. Back Pain Secondary to Systemic Disease:**
- Infection (vertebral osteomyelitis, epidural abscess)
- Cancer (metastases, multiple myeloma)
- Fracture (compression fracture, trauma)
- Inflammatory arthritis (ankylosing spondylitis)

## Anatomical Considerations

**Lumbar Spine Structures:**
- Vertebrae (L1-L5): Bony building blocks
- Intervertebral discs: Cushions between vertebrae
- Facet joints: Posterior joints guiding movement
- Ligaments: Hold vertebrae together
- Muscles: Support and move the spine
- Nerve roots: Exit between vertebrae to the legs

**Common Pain Generators:**
- Facet joint pain (localized, worse with extension)
- Discogenic pain (deep, worse with flexion)
- Sacroiliac joint pain (buttock, below L5)
- Muscle strain (paraspinal tenderness)

## Red Flag Assessment

\`\`\`
High-Risk Features Requiring Urgent Evaluation:

Cauda Equina (Surgical Emergency):
• Urinary retention or incontinence
• Fecal incontinence
• Saddle anesthesia
• Bilateral leg weakness/symptoms
• Perianal sensory loss

Infection:
• Fever
• Recent infection (UTI, skin)
• IV drug use
• Immunocompromised

Cancer:
• Age >50, new or changing back pain
• History of cancer
• Unexplained weight loss
• Night pain (worse when supine)

Fracture:
• Major trauma
• Minor trauma in elderly/osteoporotic
• Prolonged steroid use
\`\`\`

## Diagnostic Approach

**History:**
- Onset (sudden vs. gradual)
- Duration (acute <6 weeks, subacute 6-12 weeks, chronic >12 weeks)
- Pain characteristics (location, radiation, aggravating factors)
- Neurologic symptoms (weakness, numbness, bowel/bladder)
- Systemic symptoms (fever, weight loss)
- Red flag questions
- Prior episodes, treatments, response

**Physical Examination:**
- Inspection: Posture, deformity, muscle spasm
- Palpation: Spinous processes, facets, SI joints
- Range of motion: Flexion, extension, lateral bending
- Neurologic: Strength, sensation, reflexes (L4, L5, S1)
- Special tests: Straight leg raise, femoral stretch test
- Gait observation

**Straight Leg Raise (SLR) Test:**
- Positive: Reproduction of radicular pain at 30-70 degrees
- Suggests nerve root irritation (L5/S1)
- Crossed SLR: Pain in opposite leg (high specificity for disc herniation)

## Initial Management

**First 4-6 Weeks (Acute Phase):**

| Treatment | Evidence |
|-----------|----------|
| Stay active (avoid bed rest) | Strong |
| Heat for pain, cold for inflammation | Moderate |
| NSAIDs | Moderate short-term benefit |
| Acetaminophen | Minimal benefit |
| Muscle relaxants | Modest benefit, sedation |
| Opioids | Not recommended |
| Spinal manipulation | Moderate benefit for acute LBP |

**Physical Therapy:**
- Core strengthening
- Flexibility exercises
- McKenzie method
- Alexander technique
- Yoga (moderate evidence)

**Medications:**
- NSAIDs: First-line (ibuprofen, naproxen)
- Acetaminophen: Alternative if NSAIDs contraindicated
- Muscle relaxants: For acute muscle spasm (cyclobenzaprine)
- Duloxetine: For chronic low back pain
- Avoid opioids in most cases`,
      keyTerms: [
        { term: 'radiculopathy', definition: 'Condition of a nerve root causing pain, weakness, or numbness along the nerve path' },
        { term: 'cauda equina', definition: 'Bundle of nerve roots at the lower end of the spinal cord; compression is a surgical emergency' },
        { term: 'herniated disc', definition: 'When the soft center of a spinal disc pushes through a crack in the outer layer' },
        { term: 'foraminal stenosis', definition: 'Narrowing of the opening where nerve roots exit the spine' },
        { term: 'sacroiliac joint', definition: 'Joint connecting the sacrum to the pelvis; can be a source of low back pain' },
        { term: 'McKenzie method', definition: 'Physical therapy approach using specific exercises to centralize pain' },
      ],
      analogies: [
        'The disc is like a jelly donut - the soft center can bulge out and press on nerves.',
        'A pinched nerve is like stepping on a garden hose - it disrupts the signal flow.',
      ],
      patientCounselingPoints: [
        'Avoid bed rest - it delays recovery and can lead to muscle weakness and stiffness.',
        'Expect some discomfort during recovery but pain should gradually improve over days to weeks.',
        'Resume normal activities as soon as possible, even if some discomfort persists.',
        'Apply ice for the first 48 hours, then heat for muscle relaxation.',
      ],
    },
    3: {
      level: 3,
      summary: 'Low back pain evaluation requires distinguishing mechanical from radicular pain, identifying red flags, and implementing evidence-based management including physical therapy and appropriate imaging selection.',
      explanation: `## Comprehensive Assessment

**Neurologic Examination by Root Level:**

| Root | Sensory | Motor | Reflex | Pain Distribution |
|------|---------|-------|--------|-------------------|
| L2-L3 | Upper anterior thigh | Hip flexion | None | Groin, anterior thigh |
| L3-L4 | Lower anterior thigh | Knee extension | Patellar | Anterior thigh, knee |
| L4-L5 | Medial leg | Ankle dorsiflexion | Patellar | Lateral thigh, anterior leg |
| L5-S1 | Lateral foot, toes | Great toe extension | None | Buttock, posterior leg, lateral foot |
| S1-S2 | Lateral foot, heel | Plantar flexion | Achilles | Buttock, posterior leg, heel |

**Special Tests:**

\`\`\`
Straight Leg Raise (SLR):
- Positive: Pain 30-70°, radiating below knee
- Sensitivity ~90%, specificity ~40% for disc herniation

Crossed Straight Leg Raise:
- Pain in contralateral leg
- High specificity (~90%) for disc herniation
- Low sensitivity (~30%)

Femoral Nerve Stretch Test:
- Patient prone, flex knee
- Reproduces anterior thigh pain
- Tests upper lumbar roots (L2-L4)

Hoover Sign:
- Functional overlay assessment
- Absent downward pressure on "affected" leg when raising "normal" leg
- Suggests non-organic pain

Waddell Signs:
- Non-organic signs (superficial tenderness, simulation, distraction)
- 3 or more suggests psychological component
\`\`\`

## Imaging: When and What

**ACR Appropriateness Criteria:**

\`\`\`
No imaging indicated for:
- Acute nonspecific LBP without red flags
- Non-progressive LBP <6 weeks

Immediate MRI indicated for:
- Cauda equina syndrome
- Suspected infection
- Suspected cancer (red flags present)
- Severe or progressive neurologic deficit

CT indicated for:
- Contraindication to MRI
- Suspected fracture (CT superior for bone)
- Preoperative planning

X-ray generally low yield:
- Low radiation dose but limited information
- Consider in red flags, trauma
\`\`\`

## Specific Diagnoses

**Lumbar Disc Herniation:**
- Peak incidence: 4th-5th decade
- Levels: L4-L5 and L5-S1 account for 95%
- Central: Can cause cauda equina
- Paracentral: Root compression (most common)
- Foraminal: Far lateral root compression
- Most improve with conservative treatment (6-12 weeks)

**Lumbar Spinal Stenosis:**
- Degenerative narrowing of spinal canal
- Neurogenic claudication: Pain with walking/standing, relieved by sitting
- "Shopping cart sign" - leaning forward provides relief
- Unlike vascular claudication: Position-dependent
- Surgical consideration if progressive or limiting lifestyle

**Spondylolisthesis:**
- Slippage of one vertebra on another
- Isthmic: Pars defect (spondylolysis), common in young athletes
- Degenerative: Older adults, facet arthritis
- Grades I-IV based on percentage of slippage

**Sacroiliac Joint Pain:**
- 15-30% of chronic LBP
- Pain below L5, near PSIS
- Fortin finger test: Point tenderness
- Positive Gaenslen, FABER tests
- Injection is diagnostic

## Evidence-Based Management

**Acute LBP (<6 weeks):**
1. Education and reassurance (favorable prognosis)
2. Stay active, avoid bed rest
3. NSAIDs for pain as needed
4. Consider short course muscle relaxant
5. Physical therapy if not improving in 2 weeks

**Subacute/Chronic LBP (>6-12 weeks):**
1. Structured exercise program
2. Cognitive behavioral therapy (fear-avoidance beliefs)
3. Consider duloxetine for chronic pain
4. Multidisciplinary rehab for refractory cases
5. Surgical referral for specific causes

**Indications for Surgical Referral:**
- Cauda equina syndrome (emergency)
- Progressive motor weakness
- Severe radiculopathy with disc herniation + confirmatory imaging
- Spinal stenosis with neurogenic claudication limiting lifestyle
- Spondylolisthesis with instability
- Refractory pain (>6-12 months) with specific diagnosis`,
      keyTerms: [
        { term: 'neurogenic claudication', definition: 'Leg pain from spinal stenosis that worsens with walking and improves with sitting/forward flexion' },
        { term: 'spondylolysis', definition: 'Pars interarticularis defect; stress fracture of the vertebra' },
        { term: 'spondylolisthesis', definition: 'Forward slippage of one vertebra on another' },
        { term: 'Waddell signs', definition: 'Set of physical signs suggesting non-organic components to back pain' },
        { term: 'fear-avoidance', definition: 'Belief that activity will cause pain, leading to avoidance behaviors and worse outcomes' },
      ],
      clinicalNotes: 'Red flags have high specificity but low sensitivity. Most patients with red flags do not have serious pathology, but missing serious pathology is catastrophic. When in doubt, image and/or refer.',
    },
    4: {
      level: 4,
      summary: 'Complex low back pain requires distinguishing somatic from neuropathic components, recognizing central sensitization, employing multidisciplinary management, and understanding limitations of interventional procedures.',
      explanation: `## Advanced Pathophysiology

**Pain Mechanisms in LBP:**

1. **Nociceptive (Somatic) Pain:**
   - Muscular, ligamentous, articular sources
   - Inflammatory mediators (prostaglandins, bradykinin)
   - Responds to NSAIDs, physical modalities

2. **Neuropathic Pain:**
   - Nerve root compression, inflammation
   - Ectopic discharges, sensitization
   - Characteristic: burning, shooting, allodynia
   - May respond to gabapentinoids, SNRIs, TCAs

3. **Central Sensitization:**
   - Altered CNS pain processing
   - Widespread hyperalgesia
   - Poor response to peripheral interventions
   - Features: Non-dermatomal pain, mechanical/thermal allodynia

**Psychosocial Factors:**

\`\`\`
Yellow Flags (Psychosocial Risk Factors):
- Fear-avoidance beliefs
- Catastrophizing
- Depression/anxiety
- Job dissatisfaction
- Pending litigation
- Secondary gain
- Poor coping strategies

Prognostic Implication:
- Presence predicts transition to chronic pain
- Identifies need for multidisciplinary approach
- Early intervention can prevent chronicity
\`\`\`

## Interventional Procedures

**Epidural Steroid Injections (ESI):**

\`\`\`
Transforaminal (TF-ESI):
- Selective nerve root targeting
- More potent per procedure
- Higher complication risk (vascular injury)

Interlaminar:
- Central canal delivery
- Safer vascular profile
- Less specific

Caudal:
- Safest approach
- Requires larger volume
- Less targeted to specific level

Evidence:
- Short-term pain benefit (2-6 weeks)
- May facilitate participation in PT
- No long-term benefit vs placebo
- Limit to 3-6 per year
\`\`\`

**Other Procedures:**
- Radiofrequency ablation (facet joint pain): 6-12 month benefit
- Sacroiliac joint injection: Diagnostic and therapeutic
- Discography: Controversial, limited indications
- Intradiscal biacuplasty: Emerging

## Surgical Decision-Making

**Discectomy for Herniated Disc:**

\`\`\`
Indications:
- Radiculopathy >6 weeks despite conservative care
- Progressive motor weakness
- Severe pain unresponsive to conservative care
- Concordant imaging findings

Outcomes:
- 80-90% good/excellent results
- Faster pain relief than conservative
- Similar long-term outcomes (2 years) for most
- Higher recurrence with limited discectomy vs standard
\`\`\`

**Decompression for Spinal Stenosis:**

\`\`\`
Indications:
- Neurogenic claudication limiting activity
- Failed conservative management (>3-6 months)
- Progressive neurologic deficits

Surgical options:
- Laminectomy: Standard decompression
- Fusion: Added if instability or spondylolisthesis
- Minimally invasive: Faster recovery, similar long-term
\`\`\`

**Surgery for Degenerative Spondylolisthesis:**

\`\`\`
Evidence (SPORT trial):
- Surgery better than nonsurgical treatment
- Decompression alone vs decompression + fusion
- Fusion added for instability, deformity
- Adjacent segment degeneration: 20-30% at 10 years
\`\`\`

## Chronic Low Back Pain

**Multidisciplinary Rehabilitation:**
- Coordinated physical and psychological therapy
- Functional restoration programs
- Cognitive-behavioral therapy
- Graded activity exposure
- Work hardening/conditioning

**Medication Management:**

| Medication | Evidence | Notes |
|------------|----------|-------|
| NSAIDs | Moderate | First-line; use lowest effective dose |
| Acetaminophen | Minimal | Limited evidence for chronic LBP |
| Duloxetine | Moderate | SNRI; 60mg daily |
| Gabapentinoids | Limited | Use if neuropathic component |
| TCAs | Moderate | Amitriptyline 25-100mg HS |
| Opioids | Not recommended | Risk > benefit for chronic LBP |
| Muscle relaxants | Short-term only | Side effects limit chronic use |

**Emerging Therapies:**
- Mindfulness-based stress reduction
- Acceptance and commitment therapy
- Tai chi, yoga (moderate evidence)
- Antidepressants for chronic pain (duloxetine)
- Cannabinoids (limited evidence, legal concerns)

## Red Flag Re-evaluation

**Serious Pathology Prevalence:**
- Cauda equina: 0.03-0.1% of LBP presentations
- Epidural abscess: 0.01-0.1%
- Vertebral osteomyelitis: 0.01%
- Metastatic cancer: <1% in primary care, 7% in oncology

**Diagnostic Yield of Imaging:**
- Unselected LBP: <1% yield for serious pathology
- With red flags: 5-10% yield
- Multiple red flags: 20-30% yield

**Shared Decision-Making:**
- Discuss risks/benefits of imaging
- Address patient anxiety about serious causes
- Set expectations for recovery timeline
- Reassure about benign nature of most LBP`,
      keyTerms: [
        { term: 'central sensitization', definition: 'Heightened CNS pain sensitivity leading to widespread hyperalgesia and allodynia' },
        { term: 'allodynia', definition: 'Pain from normally non-painful stimuli (light touch, clothing)' },
        { term: 'catastrophizing', definition: 'Cognitive pattern of rumination, magnification, and helplessness regarding pain' },
        { term: 'functional overlay', definition: 'Non-organic symptoms superimposed on physical findings' },
        { term: 'radiofrequency ablation', definition: 'Procedure using heat to temporarily disable pain-transmitting nerves' },
      ],
      clinicalNotes: `Complex LBP Management:

1. Identify yellow flags early - patients with fear-avoidance, catastrophizing, or job dissatisfaction are at high risk for chronicity

2. Opioids should NOT be prescribed for acute LBP; they provide minimal benefit and carry addiction risk

3. Epidural steroid injections provide short-term pain relief but do not change long-term outcomes

4. Surgery is elective for most causes (except cauda equina) - shared decision-making essential

5. Multidisciplinary rehab is the most effective intervention for chronic LBP with psychosocial factors

6. Consider referral to pain management or spine specialist if symptoms persist >12 weeks despite appropriate conservative care`,
    },
    5: {
      level: 5,
      summary: 'Contemporary LBP management implements guideline-directed care, minimizes inappropriate imaging and opioids, employs risk stratification, and integrates emerging evidence on genetics, phenotyping, and precision rehabilitation while addressing overtreatment.',
      explanation: `## Guideline-Directed Care and Deimplementation

**Overtreatment in LBP:**

\`\`\`
Common Low-Value Practices (Choosing Wisely):
1. Imaging for nonspecific acute LBP without red flags
2. Bed rest for acute LBP
3. Opioids for acute LBP
4. Routine imaging before PT referral
5. Passive modalities (TENS, traction) as primary treatment
6. Repeat imaging without clinical change
7. Imaging for "prevention" or reassurance
\`\`\`

**High-Value Care:**
- Education, reassurance, and expectation setting
- Early activation and return to activity
- Guideline-based red flag assessment
- Delayed referral (2-4 weeks) if not improving
- Multidisciplinary approach for chronic pain
- Shared decision-making for interventions

## Risk Stratification and Phenotyping

**STarT Back Tool:**
\`\`\`
Low-risk (50-60%):
- Minimal disability, fewer symptoms
- Prognosis: Excellent with simple advice
- Treatment: Self-management, primary care

Medium-risk (30-40%):
- Moderate disability, more symptoms
- Prognosis: Good with PT
- Treatment: Physical therapy, manual therapy

High-risk (10-20%):
- High disability, depression, catastrophizing
- Prognosis: Poor without targeted intervention
- Treatment: Multidisciplinary, psychological
\`\`\`

**Pain Phenotypes:**
1. **Nociceptive:** Mechanical, inflammatory; responds to NSAIDs, PT
2. **Neuropathic:** Radicular, burning; responds to gabapentinoids
3. **Nociplastic (Central):** Widespread, non-dermatomal; needs pain neuroscience education, CBT
4. **Mixed:** Combination of above; multimodal treatment

## Imaging Stewardship

**Clinical Decision Support:**

\`\`\`
Appropriate Imaging Indications:
- Red flags present (infection, cancer, fracture, cauda equina)
- Progressive neurologic deficit
- Symptoms >12 weeks without improvement
- Pre-surgical planning

Inappropriate Imaging:
- Acute nonspecific LBP (<6 weeks) without red flags
- Routine repeat imaging
- Screening without indication
- Medico-legal documentation only

Harms of Unnecessary Imaging:
- Radiation exposure
- Incidentalomas leading to cascade
- "Labeling" effect (worse outcomes)
- Cost: $500M annually in US
\`\`\`

**Diagnostic Yield Optimization:**
- Use multiple red flags to improve positive predictive value
- Age-specific considerations (cancer >50, infection <20 with risk factors)
- Clinical prediction rules: Ottawa Cervical/Ankle rules adapted for spine
- MRI with gadolinium for infection, cancer

## Pharmacologic Controversies and Evolution

**Opioid Crisis and LBP:**
- Initial wave: 1990s-2000s prescribing surge
- Recognition: 2010s guidelines recommending against
- Current practice: Opioids should be exceptional, not routine

**Acetaminophen Re-evaluation:**
- Large RCT (PARAacetamol for Low Back Pain) showed no benefit vs placebo
- Removed from first-line in many guidelines
- Still considered safer than NSAIDs for some patients

**Duloxetine:**
- Moderate benefit for chronic LBP (NNT ~7-8)
- FDA-approved for chronic musculoskeletal pain
- Alternative for NSAID contraindications
- Consider depression/anxiety comorbidity

**Anticonvulsants (Gabapentin, Pregabalin):**
- Systematic review: Minimal benefit for chronic LBP
- High adverse effect burden
- Reserve for clear neuropathic component

**Benzodiazepines:**
- No benefit for acute or chronic LBP
- Risk of falls, confusion in elderly
- Contraindicated in geriatric LBP

## Surgical Controversies

**Indications Re-examined:**

\`\`\`
Discectomy:
- SPORT trial: Surgery better short-term, similar long-term
- Many patients improve without surgery (60% at 1 year)
- Patient preference important
- Earlier surgery (within 6 months) may be beneficial

Fusion for degenerative disc disease:
- No benefit vs intensive rehab
- Adjacent segment disease real concern
- Indications narrowed to instability, deformity

Motion-preserving surgery (disc replacement):
- Not superior to fusion or non-op
- Cost-effectiveness uncertain
- Limited role in carefully selected patients
\`\`\`

## Emerging Directions

**Precision Spine Care:**
- Genetic predictors of chronicity (COMT, OPRM1)
- Imaging biomarkers (Modic changes, endplate defects)
- Predictive analytics using EMR data
- Phenotype-directed treatment algorithms

**Regenerative Medicine:**
- Stem cell injections for disc degeneration: Early phase
- Platelet-rich plasma: Limited evidence
- Discogenic pain interventions: Intradiscal biacuplasty

**Digital Health:**
- Tele-rehabilitation for LBP: Non-inferior to in-person
- Mobile apps for CBT, pain neuroscience
- Wearable sensors for movement monitoring
- AI-guided exercise prescription

**Pain Neuroscience Education:**
- Explanation of neurophysiology of pain
- Addresses fear-avoidance, catastrophizing
- Shifting focus from "tissue damage" to pain modulation
- Improves outcomes, reduces healthcare utilization

## Systems-Level Interventions

**Primary Care-Based Interventions:**
- Decision support for red flag assessment
- Order sets for guideline-concordant imaging
- Patient education materials (backward pain myth-busting)
- Integrated PT referral pathways

**Emergency Department:**
- Avoid CT/MRI for uncomplicated LBP
- Safety net for red flag identification
- Prescribe NSAIDs, avoid opioids
- Discharge instructions with red flag education

**Value-Based Care:**
- Bundled payment models for spine care
- Episode-based payment
- Quality metrics: opioid prescribing, imaging rates, PT utilization
- Shared savings for reduced low-value care`,
      keyTerms: [
        { term: 'STarT Back', definition: 'Stratified Tool for Back Pain; risk stratification tool guiding treatment intensity' },
        { term: 'nociplastic', definition: 'Pain arising from altered CNS function without clear tissue or nerve damage' },
        { term: 'incidentaloma', definition: 'Incidental finding on imaging unrelated to symptoms; may lead to unnecessary procedures' },
        { term: 'Modic changes', definition: 'MRI vertebral endplate changes associated with chronic LBP; clinical significance uncertain' },
        { term: 'Choosing Wisely', definition: 'Campaign to reduce unnecessary medical tests and procedures' },
      ],
      clinicalNotes: `Expert-Level Practice Points:

1. The single most important intervention in acute LBP is patient education and reassurance about the favorable prognosis

2. Red flags have very low pre-test probability - most patients with red flags don\'t have serious pathology but the stakes of missing pathology justify evaluation

3. For chronic LBP, identifying nociplastic features (widespread pain, allodynia, poor sleep, mood symptoms) is crucial - these patients won\'t respond to peripheral interventions

4. Opioids have NO role in acute or chronic nonspecific LBP - they provide minimal benefit while creating real risk

5. Early PT (within 2 weeks) is more effective than delayed referral for reducing healthcare utilization and improving outcomes

6. Imaging findings correlate poorly with symptoms - disc bulges are common in asymptomatic adults; don\'t over-treat imaging findings

7. Shared decision-making is essential for surgical decisions - patients value symptom relief differently; no "correct" decision`,
    },
  },

  media: [
    {
      id: 'lbp-red-flags',
      type: 'diagram',
      filename: 'lbp-red-flags.svg',
      title: 'Red Flag Assessment for Low Back Pain',
      description: 'Algorithm for identifying serious causes of back pain',
    },
    {
      id: 'lbp-dermatomes',
      type: 'diagram',
      filename: 'lbp-dermatomes.svg',
      title: 'Lumbar Dermatomes and Myotomes',
      description: 'Sensory and motor distributions of lumbar nerve roots',
    },
    {
      id: 'lbp-straight-leg-raise',
      type: 'diagram',
      filename: 'lbp-straight-leg-raise.svg',
      title: 'Straight Leg Raise Test Technique',
      description: 'Proper performance and interpretation of SLR test',
    },
  ],

  citations: [
    {
      id: 'aps-lbp-guideline',
      type: 'article',
      title: 'American Pain Society Guideline for the Management of Low Back Pain',
      authors: ['Chou R', 'Qaseem A', 'Snow V', 'et al.'],
      source: 'Annals of Internal Medicine',
    },
    {
      id: 'aafp-lbp-2021',
      type: 'article',
      title: 'Diagnosis and Treatment of Acute Low Back Pain',
      authors: ['O\'Sullivan P', 'Brousseau M', 'Scales'],
      source: 'American Family Physician',
    },
  ],

  crossReferences: [
    { targetId: 'conditions-osteoporosis', targetType: 'condition', relationship: 'related', label: 'Osteoporosis' },
    { targetId: 'conditions-osteoarthritis', targetType: 'condition', relationship: 'related', label: 'Osteoarthritis' },
  ],

  tags: {
    systems: ['musculoskeletal', 'nervous'],
    topics: ['pain-management', 'spine', 'primary-care', 'neurology'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'family-medicine', 'neurology', 'emergency-medicine'],
    },
  },

  createdAt: '2026-01-26T00:00:00.000Z',
  updatedAt: '2026-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default backPain;
