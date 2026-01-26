/**
 * Osteoarthritis - Chronic Disease Education
 *
 * Comprehensive patient education about osteoarthritis,
 * the most common type of arthritis causing joint pain and stiffness.
 */

import { EducationalContent } from '../../types';

export const OSTEOARTHRITIS: EducationalContent = {
  id: 'chronic-disease-osteoarthritis',
  type: 'condition',
  name: 'Osteoarthritis',
  alternateNames: ['OA', 'Degenerative joint disease', 'Wear-and-tear arthritis', 'Osteoarthrosis'],

  levels: {
    1: {
      level: 1,
      summary: 'Osteoarthritis is when the cushioning cartilage in your joints wears down over time. It causes pain, stiffness, and swelling, most often in knees, hips, hands, and spine.',
      explanation: `**What Is Osteoarthritis?**

Osteoarthritis (OA) is the most common type of arthritis. It happens when the protective cartilage that cushions the ends of your bones wears down over time. Cartilage is a slippery tissue that helps joints move smoothly.


What Happens in OA:
---------------------------------
- Cartilage breaks down
- Bones rub together
- Joint lining gets inflamed
- Bone spurs may form
- Pain and stiffness result
---------------------------------


**Which Joints Are Affected?**


Common Locations:
---------------------------------
- Knees (most common)
- Hips
- Hands and fingers
- Spine (neck and lower back)
- Shoulders
- ankles and feet
---------------------------------


**What Causes OA?**


Risk Factors:
---------------------------------
- Aging (wear and tear)
- Being overweight
- Past joint injury
- Overuse from sports or jobs
- Family history
- Bone deformities
- Diabetes
---------------------------------


**Common Symptoms:**


Symptoms:
---------------------------------
- Joint pain during or after use
- Stiffness in morning or after rest
- Tenderness when pressing on joint
- Loss of flexibility
- Grating sensation when moving
- Bone spurs (hard lumps around joint)
- Swelling around joint
---------------------------------


**When to See a Doctor:**

- Joint pain lasts more than 2 weeks
- Pain interferes with daily activities
- Joint looks swollen or red
- You cannot move the joint fully

**Treatment Options:**


Management:
---------------------------------
- Weight loss (if overweight)
- Exercise (low-impact)
- Physical therapy
- Pain relievers
- Joint injections
- Assistive devices
- Surgery (severe cases)
---------------------------------
`,
      keyTerms: [
        { term: 'cartilage', definition: 'Smooth tissue that covers bone ends in joints' },
        { term: 'bone spurs', definition: 'Extra bone that grows near joints' },
        { term: 'inflammation', definition: 'Swelling and redness from irritation' },
        { term: 'joint', definition: 'Where two bones meet and move' },
      ],
      analogies: [
        'Cartilage is like the shock absorbers on a car - when they wear down, you feel every bump.',
        'OA is like rust in a hinge - it makes movement stiff and painful.',
      ],
      examples: [
        'Maria developed knee osteoarthritis after years of running and being overweight.',
        'John has OA in his thumbs from years of working with his hands.',
      ],
      patientCounselingPoints: [
        'Exercise is one of the best treatments for OA - motion is lotion!',
        'Losing weight can significantly reduce knee and hip pain.',
        'Use heat for stiffness and ice for swelling.',
        'Physical therapy can strengthen muscles around your joints.',
      ],
    },
    2: {
      level: 2,
      summary: 'Osteoarthritis is a degenerative joint disease characterized by cartilage breakdown, subchondral bone changes, and synovial inflammation, resulting in pain and functional limitation.',
      explanation: `**Pathophysiology:**


Joint Changes in OA:
-----------------------------------------------------
Cartilage:
  - Progressive loss and thinning
  - Fibrillation (surface roughening)
  - Ulceration and exposure of bone

Subchondral Bone:
  - Sclerosis (hardening)
  - Bone marrow edema
  - Osteophyte formation (bone spurs)
  - Subchondral cysts

Synovium:
  - Mild inflammation
  - Increased joint fluid
  - Capsular laxity or thickening

Periarticular:
  - Muscle weakness
  - Ligament laxity
  - Tendon inflammation
-----------------------------------------------------


**Risk Factors:**


Modifiable vs Non-Modifiable:
-----------------------------------------------------
Non-Modifiable:
  - Age (most important risk factor)
  - Female sex (especially after menopause)
  - Genetics (heritability 40-65%)
  - Race (some groups more susceptible)

Modifiable:
  - Obesity (knee OA risk 4x higher)
  - Joint injury (sports, trauma)
  - Occupational overuse
  - Muscle weakness
  - Physical inactivity
-----------------------------------------------------


**Clinical Presentation:**


Symptoms by Location:
-----------------------------------------------------
Knee:
  - Pain with weight-bearing
  - Stairs are especially difficult
  - Buckling or giving way
  - Swelling after activity

Hip:
  - Groin or thigh pain
  - Pain radiates to knee
  - Stiffness after sitting
  - Limited internal rotation

Hand:
  - DIP joints (Heberden nodes)
  - PIP joints (Bouchard nodes)
  - First CMC joint (base of thumb)
  - Grip weakness

Spine:
  - Neck or back pain
  - Nerve compression symptoms
  - Worse with activity
  - Morning stiffness brief
-----------------------------------------------------


**Diagnosis:**


Diagnostic Approach:
-----------------------------------------------------
Clinical:
  - History (pain patterns)
  - Physical exam
  - ROM assessment
  - Crepitus on exam

Imaging:
  - X-ray (first line):
    - Joint space narrowing
    - Osteophytes
    - Subchondral sclerosis
    - Cysts

  - MRI (if surgery considered):
    - Cartilage loss
    - Bone marrow lesions
    - Meniscal tears
    - Synovitis

Lab Tests:
  - Usually normal
  - Used to rule out other causes
    - ESR, CRP (normal in OA)
    - RF, anti-CCP (rule out RA)
    - Gout crystals if indicated
-----------------------------------------------------
`,
      keyTerms: [
        { term: 'crepitus', definition: 'Grating or crackling sound/feeling in joint' },
        { term: 'osteophyte', definition: 'Bone spur that forms at joint margin' },
        { term: 'subchondral', definition: 'Layer of bone just beneath cartilage' },
        { term: 'sclerosis', definition: 'Hardening or thickening of tissue' },
        { term: 'DIP', definition: 'Distal interphalangeal joints; fingertips' },
        { term: 'PIP', definition: 'Proximal interphalangeal joints; middle finger joints' },
      ],
      analogies: [
        'Bone marrow edema is like a bruise inside the bone - it causes pain but is not visible on x-ray.',
      ],
      clinicalNotes: 'X-ray findings often do not correlate with symptoms. Many people with severe x-ray changes have minimal pain. Treatment should target symptoms, not images.',
      patientCounselingPoints: [
        'Your x-ray results do not always match your pain level.',
        'Exercise remains effective even with existing joint damage.',
        'Maintaining a healthy weight reduces stress on weight-bearing joints.',
        'OA is not just "wear and tear" - it involves active inflammation in the joint.',
      ],
    },
    3: {
      level: 3,
      summary: 'Osteoarthritis involves dynamic cartilage degradation and repair attempts, with inflammatory mediators contributing to pain and progression, requiring comprehensive management beyond simple mechanical models.',
      explanation: `**Pathogenesis:**

*Chondrocyte Dysfunction:*

Cellular Mechanisms:
------------------------------------------------------------
Chondrocytes (cartilage cells):
  - Become metabolically active but dysfunctional
  - Produce degradative enzymes:
    - MMPs (matrix metalloproteinases)
    - Aggrecanases (ADAMTS)
  - Reduce synthesis of:
    - Type II collagen
    - Aggrecan (proteoglycan)

Imbalance:
  - Catabolic > Anabolic
  - Net cartilage loss
  - Attempts at repair fail
  - Clustering of chondrocytes
------------------------------------------------------------


*Inflammatory Mediators:*

Synovial Inflammation:
------------------------------------------------------------
Cytokines:
  - IL-1β (key inflammatory mediator)
  - IL-6
  - TNF-α

Growth Factors:
  - TGF-β
  - IGF-1
  - FGF

Effects:
  - Stimulate enzyme production
  - Inhibit collagen synthesis
  - Promote inflammation
  - Cause pain sensitization
------------------------------------------------------------


*Pain Mechanisms:*

Sources of Pain:
------------------------------------------------------------
Structural:
  - Subchondral bone (bone marrow lesions)
  - Periosteum (lining of bone)
  - Synovium
  - Ligaments
  - Tendons
  - Capsule

NOT Cartilage (anesthetic - no nerve endings)

Neuropathic Component:
  - Central sensitization
  - Altered pain processing
  - Widespread hyperalgesia
------------------------------------------------------------


**Classification:**

*Primary vs Secondary:*

OA Types:
------------------------------------------------------------
Primary (Idiopathic):
  - No clear cause
  - Related to aging
  - Most common type
  - Often multiple joints

Secondary:
  - Identifiable cause
  - Post-traumatic (after injury)
  - Anatomical (dysplasia)
  - Metabolic (diabetes, acromegaly)
  - Neuropathic (Charcot joint)
  - Other arthritis sequelae
------------------------------------------------------------


**Clinical Assessment:**

*Physical Examination:*

Exam Findings:
------------------------------------------------------------
Inspection:
  - Bony enlargement
  - Swelling (effusion or synovitis)
  - Deformity (varus/valgus)
  - Muscle atrophy

Palpation:
  - Tenderness along joint line
  - Crepitus with motion
  - Bony prominences
  - Temperature (warm suggests inflammation)

Range of Motion:
  - Limited active and passive ROM
  - Pain at extremes of motion
  - Contractures possible

Special Tests:
  - Joint stability (ligaments)
  - Meniscal tests (knee)
  - Impingement tests (shoulder/hip)
  - Neurologic exam (spine)
------------------------------------------------------------
`,
      keyTerms: [
        { term: 'MMPs', definition: 'Matrix metalloproteinases; enzymes that break down cartilage' },
        { term: 'ADAMTS', definition: 'Aggrecanases that degrade proteoglycans' },
        { term: 'central sensitization', definition: 'Increased sensitivity of central nervous system to pain' },
        { term: 'hyperalgesia', definition: 'Increased sensitivity to pain' },
        { term: 'effusion', definition: 'Fluid accumulation in joint' },
        { term: 'varus', definition: 'Bow-legged deformity' },
        { term: 'valgus', definition: 'Knock-kneed deformity' },
      ],
      analogies: [
        'Central sensitization is like the pain "volume" being turned up in your spinal cord and brain.',
        'Chondrocytes are like construction workers that start destroying instead of building.',
      ],
      clinicalNotes: 'Pain in OA does not correlate well with radiographic severity. Bone marrow lesions on MRI correlate better with pain than x-ray findings.',
      patientCounselingPoints: [
        'Your pain is real even if x-rays look mild.',
        'Cartilage itself cannot feel pain - the pain comes from other joint structures.',
        'Nerve sensitivity can change with chronic OA, making normal movement painful.',
      ],
    },
    4: {
      level: 4,
      summary: 'Osteoarthritis management requires multimodal therapy including nonpharmacologic interventions, pharmacologic pain management, and surgical options when conservative measures fail.',
      explanation: `**Management Principles:**

*Non-Pharmacologic Therapy:*

Core Treatments:
------------------------------------------------------------
Exercise:
  - Aerobic: Walking, cycling, swimming
  - Resistance: Strengthening surrounding muscles
  - Flexibility: ROM and stretching
  - Balance: Tai chi, yoga (prevent falls)

  Benefits:
    - Pain reduction
    - Improved function
    - Delayed surgery need

Weight Loss:
  - Goal: 5-10% weight loss
  - Reduces knee OA risk by 50% if BMI <25
  - 1 lb weight loss = 4 lb load reduction on knee

Physical Therapy:
  - Individualized exercise program
  - Gait training
  - Assistive device instruction
  - Joint protection techniques

Assistive Devices:
  - Canes (opposite affected side)
  - Walkers (bilateral disease)
  - Braces (offloading, support)
  - Shoe inserts (lateral wedge)
  - Jar openers, reachers

Heat/Cold:
  - Heat: Stiffness, warm-up before exercise
  - Cold: Inflammation, after activity
------------------------------------------------------------


*Pharmacologic Therapy:*

Medications by Step:
------------------------------------------------------------
First-Line:
  Topical NSAIDs:
    - Diclofenac gel/patch
    - Effective for knee/hand OA
    - Minimal systemic absorption
    - Good safety profile

  Acetaminophen:
    - For mild pain
    - Limit to 3g/day
    - Less effective than NSAIDs

Second-Line:
  Oral NSAIDs:
    - Naproxen, ibuprofen, diclofenac
    - Most effective oral medications
    - Use lowest effective dose
    - Consider PPI or misoprostol
    - Avoid in CKD, heart failure

  Intra-articular corticosteroids:
    - Triamcinolone, methylprednisolone
    - Rapid pain relief (days to weeks)
    - Limit to 3-4 injections/year per joint
    - No disease modification

  Intra-articular hyaluronic acid:
    - Viscosupplementation
    - Controversial benefit
    - Onset 2-4 weeks
    - May last 6-12 months

Third-Line (Chronic Pain):
  Duloxetine:
    - SNRI antidepressant
    - Moderate benefit for chronic OA pain
    - Takes 2-4 weeks to work
    - Good for patients with depression

  Tramadol:
    - Weak opioid
    - Reserved for severe pain
    - Risk of dependence
    - Falls in elderly

NOT Recommended:
  - Strong opioids (oxycodone, morphine)
  - Opioids + acetaminophen combinations
------------------------------------------------------------
`,
      keyTerms: [
        { term: 'PPI', definition: 'Proton pump inhibitor; protects stomach from NSAIDs' },
        { term: 'viscosupplementation', definition: 'Injection of hyaluronic acid into joint' },
        { term: 'SNRI', definition: 'Serotonin-norepinephrine reuptake inhibitor' },
        { term: 'offloading', definition: 'Shifting weight away from damaged area' },
      ],
      analogies: [
        'Viscosupplementation is like changing the oil in your car - makes things run smoother.',
      ],
      clinicalNotes: 'Topical NSAIDs have similar efficacy to oral NSAIDs for knee and hand OA with better safety. Weight loss provides the most significant symptomatic benefit.',
      patientCounselingPoints: [
        'Topical NSAIDs can be as effective as pills with fewer side effects.',
        'Exercise and weight loss work better than medications for long-term relief.',
        'Cortisone shots provide temporary relief and should not be done too frequently.',
        'Duloxetine can help with chronic pain even if you are not depressed.',
      ],
    },
    5: {
      level: 5,
      summary: 'Surgical management of osteoarthritis includes arthroplasty with excellent outcomes, while disease-modifying OA drugs and regenerative medicine approaches are under investigation.',
      explanation: `**Surgical Management:**

*Arthroplasty:*

Joint Replacement:
------------------------------------------------------------
Indications:
  - Failed conservative management
  - Severe pain limiting function
  - Radiographic advanced disease
  - Significant impact on quality of life

Total Knee Arthroplasty (TKA):
  - 90% survival at 15-20 years
  - Excellent pain relief
  - Improved function
  - Complications: DVT, PE, infection, loosening

Total Hip Arthroplasty (THA):
  - 95% survival at 15-20 years
  - Best outcomes of any joint replacement
  - Multiple approaches: posterior, anterior, lateral
  - Dislocation risk with posterior approach

Partial Knee Replacement:
  - Unicompartmental knee arthroplasty
  - Preserves ACL and healthy compartments
  - Faster recovery
  - Higher revision rate
  - Only for isolated compartment disease

Hip Resurfacing:
  - Preserves femoral neck
  - Bone conserving
  - Metal-on-metal concerns
  - Younger active patients
------------------------------------------------------------


*Other Surgical Options:*

Alternative Procedures:
------------------------------------------------------------
Osteotomy:
  - Realignment of bone
  - Offloads damaged compartment
  - Delays arthroplasty
  - Young active patients
  - High tibial osteotomy (knee)
  - Periacetabular osteotomy (hip)

Arthroscopy:
  - Limited role in OA
  - Mechanical symptoms only
  - Loose body removal
  - Meniscal tear debridement
  - NOT for pain alone

Arthrodesis (Fusion):
  - Pain relief through immobility
  - Ankle, wrist, thumb
  - Last resort
  - Loss of motion
------------------------------------------------------------


*Emerging Therapies:*

Disease-Modifying OA Drugs (DMOADs):
------------------------------------------------------------
Strontium Ranelate:
  - Mixed evidence
  - Not FDA approved for OA
  - Safety concerns

Sprifermin (FGF-18):
  - Stimulates cartilage growth
  - Phase 3 trials ongoing
  - Intra-articular injection

Tanezumab (NGF inhibitor):
  - Potent pain relief
  - Safety concerns (joint replacement)
  - Not FDA approved

Biosimilars:
  - Platelet-rich plasma (PRP)
  - Mesenchymal stem cells (MSC)
  - Limited evidence
  - High cost
  - Regulatory issues
------------------------------------------------------------
`,
      keyTerms: [
        { term: 'arthroplasty', definition: 'Surgical reconstruction or replacement of joint' },
        { term: 'osteotomy', definition: 'Surgical cutting and reshaping of bone' },
        { term: 'arthrodesis', definition: 'Surgical fusion of joint' },
        { term: 'DMOAD', definition: 'Disease-modifying osteoarthritis drug' },
        { term: 'NGF', definition: 'Nerve growth factor' },
      ],
      analogies: [
        'Osteotomy is like realigning the tires on a car - it shifts wear to a healthier part of the joint.',
      ],
      clinicalNotes: 'TKA and THA are among the most successful surgeries in medicine. TKA outcomes correlate with preoperative expectations and psychological factors.',
      patientCounselingPoints: [
        'Joint replacement is very successful but recovery takes 3-6 months.',
        'Partial knee replacement preserves more of your natural joint.',
        'New therapies are being developed to slow or reverse OA.',
        'Your expectations and attitude affect your recovery from joint replacement.',
      ],
    },
  },

  media: [
    {
      id: 'oa-joint-changes',
      type: 'diagram',
      filename: 'osteoarthritis-joint-changes.svg',
      title: 'Osteoarthritis Joint Changes',
      description: 'Illustration of joint changes in osteoarthritis',
    },
    {
      id: 'oa-locations',
      type: 'diagram',
      filename: 'osteoarthritis-common-locations.svg',
      title: 'Common OA Locations',
      description: 'Diagram showing joints most commonly affected by OA',
    },
  ],

  citations: [
    {
      id: 'aa-osteoarthritis-2021',
      type: 'article',
      title: 'American College of Rheumatology/Arthritis Foundation Guideline for OA',
      source: 'Arthritis Rheumatol',
    },
    {
      id: 'oarsi-2019',
      type: 'article',
      title: 'OARSI 2019 guidelines for the non-surgical management of knee, hip, and polyarticular OA',
      source: 'Osteoarthritis and Cartilage',
    },
  ],

  crossReferences: [
    { targetId: 'chronic-disease-rheumatoid-arthritis', targetType: 'condition', relationship: 'sibling', label: 'Rheumatoid Arthritis' },
    { targetId: 'chronic-disease-gout', targetType: 'condition', relationship: 'sibling', label: 'Gout' },
  ],

  tags: {
    systems: ['musculoskeletal'],
    structures: ['joints', 'cartilage', 'synovium'],
    topics: ['osteoarthritis', 'degenerative joint disease', 'joint pain'],
    keywords: ['osteoarthritis', 'OA', 'degenerative arthritis', 'wear and tear'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'family-medicine', 'rheumatology'] },
  },

  createdAt: '2025-01-25T00:00:00.000Z',
  updatedAt: '2025-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
