/**
 * TMJ Disorders - Comprehensive Educational Content
 *
 * Covers temporomandibular joint dysfunction, diagnosis,
 * and treatment approaches.
 */

import { EducationalContent } from '../../types';

export const tmjDisorders: EducationalContent = {
  id: 'condition-tmj-disorders',
  type: 'condition',
  name: 'TMJ Disorders',
  alternateNames: [
    'Temporomandibular Disorders',
    'TMD',
    'TMJ Dysfunction',
    'Jaw Joint Problems',
  ],

  levels: {
    1: {
      level: 1,
      summary: 'TMJ disorders cause pain and problems with your jaw joint and the muscles that control jaw movement. Common symptoms include jaw pain, clicking sounds, and difficulty opening your mouth.',
      explanation: `**What Is the TMJ?**

TMJ stands for temporomandibular joint. You have two of these joints, one on each side of your face, right in front of your ears. They connect your lower jaw to your skull and let you open and close your mouth, chew, and talk.

**What Are TMJ Disorders?**

TMJ disorders (also called TMD) are problems with your jaw joint or the muscles around it that cause pain or difficulty moving your jaw.

**Common Symptoms:**

- Pain in your jaw, face, or around your ear
- Clicking, popping, or grating sounds when you open your mouth
- Your jaw getting "stuck" or locked
- Difficulty opening your mouth wide
- Pain when chewing
- Headaches
- Earaches (without ear infection)

**What Causes TMJ Problems?**

- **Teeth grinding or clenching** (often during sleep)
- **Stress** causing muscle tension
- **Injury** to your jaw
- **Arthritis** in the joint
- **Poor posture** straining neck and jaw muscles

**What Can Help?**

**Self-Care:**
- Eat soft foods
- Avoid wide yawning and chewing gum
- Apply ice or heat to the painful area
- Practice relaxation techniques
- Be aware of clenching and try to stop

**When to See a Doctor:**
- Pain that does not go away
- Cannot open or close your mouth
- Jaw locking frequently
- Pain affecting eating or sleep

**Treatment Options:**
- Pain relievers
- Muscle relaxants
- Physical therapy
- Night guard (for grinding)
- Stress management
- Rarely, surgery`,
      keyTerms: [
        { term: 'TMJ', definition: 'Temporomandibular joint - the jaw joint connecting your lower jaw to your skull' },
        { term: 'TMD', definition: 'Temporomandibular disorders - problems with the jaw joint and muscles' },
        { term: 'bruxism', definition: 'Grinding or clenching your teeth, often during sleep' },
        { term: 'night guard', definition: 'A plastic device worn over teeth at night to protect against grinding' },
        { term: 'lockjaw', definition: 'When the jaw gets stuck in an open or closed position' },
      ],
      analogies: [
        'The TMJ is like a hinge on a door - when it does not work properly, the door (your jaw) cannot open and close smoothly.',
        'Jaw muscles are like rubber bands - when stressed, they get tight and cause pain.',
        'A night guard works like a bumper, protecting your teeth and joint from grinding damage.',
      ],
      examples: [
        'Someone who wakes up with jaw pain and headaches may be grinding their teeth at night without knowing it.',
        'After a stressful week, a person notices clicking sounds and pain when eating - stress can trigger TMJ problems.',
      ],
    },
    2: {
      level: 2,
      summary: 'Temporomandibular disorders encompass a spectrum of conditions affecting the TMJ and masticatory muscles. The DC/TMD classification distinguishes joint disorders from muscle disorders, guiding evidence-based diagnosis and treatment.',
      explanation: `## Anatomy Review

**TMJ Components:**
- Mandibular condyle (rounded jaw bone end)
- Temporal bone fossa (skull socket)
- Articular disc (fibrocartilage between bones)
- Joint capsule and ligaments
- Lateral pterygoid muscle (attaches to disc)

**Masticatory Muscles:**
| Muscle | Action |
|--------|--------|
| Masseter | Jaw closing, clenching |
| Temporalis | Jaw closing, retrusion |
| Medial pterygoid | Jaw closing |
| Lateral pterygoid | Jaw opening, protrusion |

## Classification (DC/TMD)

**Joint Disorders:**

| Disorder | Description | Key Features |
|----------|-------------|--------------|
| Disc displacement with reduction | Disc moves but returns | Click on opening |
| Disc displacement without reduction | Disc blocks movement | Limited opening, no click |
| Degenerative joint disease | Osteoarthritis | Crepitus, pain |
| Subluxation | Excessive translation | Cannot close easily |
| Dislocation | Locked open | Emergency |

**Muscle Disorders:**

| Disorder | Description |
|----------|-------------|
| Myalgia | Local muscle pain |
| Myofascial pain | Referred pain patterns |
| Myofascial pain with referral | Trigger points |
| Muscle spasm | Sudden involuntary contraction |

## Diagnosis

**History:**
- Pain location, duration, triggers
- Function (chewing, yawning, talking)
- Sounds (clicking, popping, grinding)
- Locking episodes
- Headaches, earaches
- Bruxism history
- Stress levels

**Clinical Examination:**

1. **Range of Motion:**
   - Maximum opening (normal: 40-55 mm)
   - Lateral excursion (normal: 8-12 mm)
   - Protrusion (normal: 8-12 mm)

2. **Joint Palpation:**
   - Lateral pole (preauricular)
   - Posterior aspect (via external auditory canal)

3. **Muscle Palpation:**
   - Masseter (superficial and deep)
   - Temporalis
   - Medial pterygoid
   - Lateral pterygoid (difficult to palpate)

4. **Joint Sounds:**
   - Click: Early, late, or reciprocal
   - Crepitus: Grinding sound (suggests degeneration)

**Imaging:**

| Modality | Indication |
|----------|------------|
| Panoramic | Gross osseous changes |
| CBCT | Bone detail, condyle morphology |
| MRI | Disc position, soft tissue |
| Plain X-ray | Limited use |

## Treatment

**Conservative (First-Line):**

*Self-Care:*
- Soft diet
- Limit jaw opening
- Heat or ice application
- Relaxation techniques
- Posture improvement

*Physical Therapy:*
- Stretching exercises
- Strengthening
- Manual therapy
- Modalities (ultrasound, TENS)

*Medications:*
| Class | Examples | Use |
|-------|----------|-----|
| NSAIDs | Ibuprofen, naproxen | Pain, inflammation |
| Muscle relaxants | Cyclobenzaprine | Muscle spasm |
| Tricyclic antidepressants | Amitriptyline (low dose) | Chronic pain |

*Oral Appliances:*
- Stabilization splint (flat plane)
- Anterior repositioning splint
- Soft night guard

**Interventional:**
- Trigger point injections
- Intra-articular corticosteroid
- Arthrocentesis (joint lavage)
- Botox for muscle disorders

**Surgical (Rare):**
- Arthroscopy
- Open joint surgery
- Disc repair or removal
- Joint replacement

## Prognosis

**Good News:**
- Most patients improve with conservative treatment
- 80-90% respond to non-surgical approaches
- Self-limiting in many cases

**Chronic Factors:**
- Psychosocial comorbidities
- Central sensitization
- Delayed treatment`,
      keyTerms: [
        { term: 'DC/TMD', definition: 'Diagnostic Criteria for Temporomandibular Disorders; standardized diagnostic classification' },
        { term: 'disc displacement', definition: 'Abnormal position of the articular disc relative to the condyle' },
        { term: 'crepitus', definition: 'Grinding or crunching sound from joint; indicates degenerative changes' },
        { term: 'arthrocentesis', definition: 'Joint lavage procedure to wash out inflammatory mediators' },
        { term: 'stabilization splint', definition: 'Flat plane occlusal appliance for muscle relaxation and joint unloading' },
        { term: 'masticatory muscles', definition: 'Muscles of mastication: masseter, temporalis, medial and lateral pterygoid' },
      ],
      analogies: [
        'Disc displacement with reduction is like a car with a sticky door - it clicks when opening but still works.',
        'Disc displacement without reduction is like a door jammed by something - it will not open fully until the obstruction is cleared.',
        'An occlusal splint is like a shock absorber for your jaw joint.',
      ],
    },
    3: {
      level: 3,
      summary: 'TMD pathophysiology integrates biomechanical, neurobiological, and psychosocial factors. The biopsychosocial model informs comprehensive assessment and multimodal treatment strategies based on pain classification and central sensitization concepts.',
      explanation: `## Pathophysiology

**Biomechanical Factors:**

*Disc Displacement:*
- Posterior band normally superior to condyle
- Anterior displacement most common
- Lateral pterygoid superior head attachment
- Disc deformation over time
- May reduce (reposition) or not

*Osteoarthritis Progression:*
1. Cartilage degradation
2. Subchondral bone changes
3. Osteophyte formation
4. Disc perforation
5. Bone-on-bone articulation

**Neurobiology:**

*Peripheral Sensitization:*
- Inflammatory mediators (PGE2, bradykinin)
- NGF upregulation
- TRPV1 channel activation
- Lowered pain thresholds

*Central Sensitization:*
- Wind-up phenomenon
- NMDA receptor activation
- Descending modulation changes
- Widespread hyperalgesia
- Chronic pain development

**Psychosocial Factors:**

*Pain-Related:*
- Catastrophizing
- Fear-avoidance behavior
- Depression and anxiety
- Sleep disturbance
- Stress response

*Biopsychosocial Model:*
| Domain | Factors |
|--------|---------|
| Biological | Anatomy, injury, inflammation |
| Psychological | Mood, coping, beliefs |
| Social | Support, disability, work |

## DC/TMD Protocol

**Axis I: Physical Diagnosis**

*Joint Disorders:*

1. **Disc Displacement with Reduction:**
   - Click on opening and closing (reciprocal)
   - Elimination of click with protrusive opening
   - MRI: Anterior disc, reduces on opening

2. **Disc Displacement without Reduction:**
   - Limited opening (<40 mm)
   - History of locking
   - Deflection to affected side
   - MRI: Anterior disc, does not reduce

3. **Degenerative Joint Disease:**
   - Crepitus
   - Imaging evidence of osseous changes
   - May have pain and limited function

*Muscle Disorders:*

1. **Myalgia:**
   - Pain with palpation (1 kg force)
   - Pain with function
   - Location: Masseter, temporalis

2. **Myofascial Pain:**
   - Familiar pain with palpation
   - Pain spreads beyond palpation site

3. **Myofascial Pain with Referral:**
   - Trigger points
   - Referred pain to distant sites

**Axis II: Psychosocial Assessment**

*Instruments:*
- Graded Chronic Pain Scale
- Jaw Functional Limitation Scale
- PHQ-4 (depression/anxiety screening)
- Pain Catastrophizing Scale

*Clinical Integration:*
- Low disability: Simple cases
- High disability/low pain: Behavioral factors
- High disability/high pain: Complex, multidisciplinary

## Advanced Imaging

**MRI Protocol:**
- Open and closed mouth views
- Sagittal oblique (primary)
- Coronal oblique
- Assess disc position, morphology
- Effusion, bone marrow edema

**Interpretation:**

| Finding | Significance |
|---------|--------------|
| Anterior disc, open reduces | DDwR |
| Anterior disc, does not reduce | DDwoR |
| Effusion | Active inflammation |
| Bone marrow edema | Bone overload |
| Osteophytes, erosion | Degenerative disease |

**CBCT for Osseous Assessment:**
- Condyle morphology
- Osteophytes
- Erosions
- Flattening
- Subcondylar sclerosis

## Evidence-Based Treatment

**Conservative Management Evidence:**

| Intervention | Evidence Level |
|--------------|----------------|
| Patient education | Strong |
| Self-management | Strong |
| Physical therapy | Moderate-strong |
| Occlusal splints | Moderate |
| NSAIDs (short-term) | Moderate |
| CBT for chronic | Moderate |
| Acupuncture | Limited |

**Splint Therapy:**

*Stabilization Splint:*
- Full-arch, flat occlusal surface
- Muscle relaxation
- Reduces loading forces
- Worn primarily at night
- Evidence: Moderate for pain reduction

*Anterior Repositioning:*
- Holds mandible forward
- For DDwR with pain
- Risk of occlusal changes
- Limited long-term evidence

**Pharmacotherapy:**

| Agent | Mechanism | Duration |
|-------|-----------|----------|
| NSAIDs | Anti-inflammatory | 2-4 weeks |
| Muscle relaxants | Central action | 2-4 weeks |
| TCAs (low dose) | Descending inhibition | Chronic use |
| Gabapentinoids | Calcium channel | Neuropathic component |
| Topical NSAIDs | Local inflammation | As needed |

## Invasive Interventions

**Injection Therapies:**

*Intra-articular:*
- Corticosteroid (limited injections)
- Hyaluronic acid (viscosupplementation)
- PRP (emerging, limited evidence)

*Muscle:*
- Trigger point (local anesthetic)
- Botulinum toxin (onabotulinumtoxinA)

**Arthrocentesis:**
- Lavage of superior joint space
- Removes inflammatory mediators
- Breaks adhesions
- Moderate evidence for DDwoR

**Surgical Options:**

| Procedure | Indication |
|-----------|------------|
| Arthroscopy | Failed conservative, disc pathology |
| Arthroplasty | Severe degeneration |
| Disc repair/replacement | Selected cases |
| Total joint replacement | End-stage disease |`,
      keyTerms: [
        { term: 'central sensitization', definition: 'Amplification of neural signaling causing pain hypersensitivity; important in chronic TMD' },
        { term: 'Axis I/II', definition: 'DC/TMD physical (Axis I) and psychosocial (Axis II) assessment components' },
        { term: 'reciprocal click', definition: 'Click on opening and closing, characteristic of disc displacement with reduction' },
        { term: 'viscosupplementation', definition: 'Intra-articular hyaluronic acid injection to improve joint lubrication' },
        { term: 'biopsychosocial model', definition: 'Framework integrating biological, psychological, and social factors in pain conditions' },
        { term: 'GCPS', definition: 'Graded Chronic Pain Scale; assesses pain intensity and disability' },
      ],
      clinicalNotes: 'DC/TMD provides standardized diagnostic criteria - use Axis I for physical and Axis II for psychosocial assessment. Most TMD responds to conservative treatment; surgery is rarely needed. Central sensitization is key in chronic cases - address with multimodal approach including cognitive behavioral strategies. Splints are adjunctive, not curative. Limit corticosteroid injections to avoid cartilage damage.',
    },
    4: {
      level: 4,
      summary: 'Advanced TMD management integrates pain neuroscience, precision phenotyping, and emerging therapies targeting peripheral and central mechanisms. Understanding the transition from acute to chronic pain informs preventive strategies and personalized treatment protocols.',
      explanation: `## Pain Neuroscience in TMD

**Peripheral Mechanisms:**

*Joint Nociception:*
- Free nerve endings in capsule, posterior attachment
- Substance P, CGRP release
- NGF-TrkA signaling
- Inflammatory soup sensitization

*Muscle Nociception:*
- Group III/IV afferents
- Ischemia-related sensitization
- Myofascial trigger points
- Sustained contraction effects

**Central Mechanisms:**

*Trigeminal System:*
- Trigeminal nucleus caudalis (TNC)
- Convergence with cervical inputs
- Explains referral patterns
- Sensitization with chronicity

*Brainstem Processing:*
| Structure | Function | TMD Relevance |
|-----------|----------|---------------|
| TNC | Primary relay | Nociceptive input |
| Parabrachial | Affective processing | Emotional component |
| PAG | Descending modulation | Inhibitory control |
| RVM | Facilitation/inhibition | Chronic pain switch |

*Cortical Changes:*
- Somatosensory cortex reorganization
- Prefrontal cortex alterations
- Insula hyperactivity
- Default mode network changes
- Gray matter changes with chronicity

**Transition to Chronicity:**

*Risk Factors:*
| Factor | Association |
|--------|-------------|
| High baseline pain | Strong |
| Widespread pain | Strong |
| Catastrophizing | Strong |
| Sleep disturbance | Moderate |
| Depression/anxiety | Moderate |
| Trauma history | Moderate |

*Mechanisms:*
- Persistent peripheral input
- Descending facilitation
- Loss of inhibitory control
- Neuroplastic changes
- Neuroimmune interactions

## Precision Phenotyping

**OPPERA Study Findings:**

*Risk Domains:*
1. Psychological distress
2. Pain amplification (QST)
3. Autonomic function
4. Inflammatory markers
5. Genetic susceptibility

*Phenotype Categories:*
| Phenotype | Characteristics | Treatment Focus |
|-----------|-----------------|-----------------|
| Adaptive | Low disability | Self-management |
| Pain-sensitive | Heightened sensory | Central approaches |
| Psychologically distressed | High affect | CBT emphasis |
| Global high impact | All domains elevated | Interdisciplinary |

**Quantitative Sensory Testing:**

*Measures:*
- Pressure pain thresholds
- Temporal summation
- Conditioned pain modulation
- Thermal thresholds

*Clinical Significance:*
- Pro-nociceptive profile predicts chronicity
- Identifies central sensitization
- Guides treatment selection
- May predict treatment response

## Emerging Therapies

**Neuromodulation:**

*Transcranial Approaches:*
| Modality | Target | Evidence |
|----------|--------|----------|
| rTMS | Motor cortex | Moderate |
| tDCS | DLPFC | Emerging |
| VNS | Vagus nerve | Preliminary |

*Peripheral:*
- TENS (transcutaneous electrical)
- Auriculotherapy
- Percutaneous electrical nerve stimulation

**Regenerative Medicine:**

*PRP (Platelet-Rich Plasma):*
- Intra-articular injection
- Growth factor delivery
- Mixed evidence
- Ongoing trials

*Stem Cell Therapy:*
- Research stage
- Cartilage regeneration potential
- Safety concerns

**Targeted Pharmacology:**

*Emerging Agents:*
| Target | Agent | Status |
|--------|-------|--------|
| CGRP | Monoclonal antibodies | Approved for migraine, TMD trials |
| NGF | Tanezumab | OA trials (safety concerns) |
| Nav1.7 | Sodium channel blockers | Development |
| Cannabinoids | Various | Limited evidence |

**Biobehavioral:**

*Acceptance and Commitment Therapy:*
- Psychological flexibility
- Values-based living
- Mindfulness component
- Emerging evidence for chronic pain

*Pain Neuroscience Education:*
- Understanding pain mechanisms
- Reduces fear-avoidance
- Improves outcomes with other treatments
- Cost-effective

## Multidisciplinary Care

**Team Composition:**

| Discipline | Role |
|------------|------|
| Dentist/Orofacial pain specialist | Diagnosis, splints |
| Physical therapist | Manual therapy, exercise |
| Psychologist | CBT, behavioral approaches |
| Physician | Pharmacotherapy, comorbidities |
| Sleep specialist | Sleep disorders |

**Integrated Protocol:**

*Acute Phase (0-3 months):*
- Education
- Self-management
- PT as needed
- Short-term medications

*Subacute (3-6 months):*
- Reassess diagnosis
- Address psychosocial factors
- Intensive PT if needed
- Consider splint

*Chronic (>6 months):*
- Comprehensive evaluation
- Multidisciplinary care
- CBT integration
- Long-term management plan

## Outcome Measures

**Recommended Instruments:**

*Pain:*
- Characteristic Pain Intensity (CPI)
- Numerical Rating Scale
- Pain diary

*Function:*
- Jaw Functional Limitation Scale (JFLS)
- Maximum mouth opening

*Psychosocial:*
- PROMIS measures
- PHQ-9, GAD-7
- Pain Catastrophizing Scale

**Treatment Response Criteria:**

| Response | Definition |
|----------|------------|
| Excellent | >50% pain reduction, functional |
| Good | 30-50% reduction |
| Partial | <30% but improved |
| None | No change or worse |`,
      keyTerms: [
        { term: 'OPPERA', definition: 'Orofacial Pain Prospective Evaluation and Risk Assessment; landmark TMD risk factor study' },
        { term: 'QST', definition: 'Quantitative Sensory Testing; standardized assessment of sensory function and pain processing' },
        { term: 'conditioned pain modulation', definition: 'Pain inhibits pain mechanism; assesses descending inhibitory function' },
        { term: 'rTMS', definition: 'Repetitive Transcranial Magnetic Stimulation; neuromodulation for chronic pain' },
        { term: 'tDCS', definition: 'Transcranial Direct Current Stimulation; non-invasive brain stimulation' },
        { term: 'DLPFC', definition: 'Dorsolateral Prefrontal Cortex; target for neuromodulation in pain' },
      ],
      clinicalNotes: 'OPPERA findings show TMD is a complex condition with multiple phenotypes - one-size-fits-all treatment is inadequate. QST can identify patients with central sensitization who need centrally-acting approaches. CGRP antagonists approved for migraine may benefit TMD patients with migraine overlap. Pain neuroscience education is an effective, low-cost intervention for chronic cases. Address sleep and mood disorders as part of comprehensive care.',
    },
    5: {
      level: 5,
      summary: 'Contemporary TMD research integrates neuroimaging, biomarker discovery, genetic susceptibility, and systems biology approaches to develop precision medicine strategies for prevention and personalized treatment of temporomandibular disorders.',
      explanation: `## Neuroimaging Advances

**Structural MRI Findings:**

*Gray Matter Changes:*
| Region | Finding | Correlation |
|--------|---------|-------------|
| S1 face area | Volume changes | Pain intensity |
| Insula | Increased/decreased | Emotional processing |
| ACC | Altered volume | Affective component |
| DLPFC | Reduced gray matter | Cognitive modulation |
| PAG | Structural changes | Descending control |

*White Matter:*
- DTI alterations in trigeminal pathways
- Microstructural changes in chronic cases
- Connectivity disruptions

**Functional MRI:**

*Resting State:*
- Default mode network alterations
- Salience network hyperconnectivity
- Sensorimotor network changes
- Predict treatment response potential

*Task-Based:*
- Altered pain processing
- Emotional reactivity patterns
- Cognitive modulation differences
- Temporal summation correlates

**Neuroimaging Biomarkers:**

*Potential Applications:*
- Diagnosis (pattern recognition)
- Prognosis (chronicity prediction)
- Treatment selection
- Response monitoring
- Currently research tools

## Biomarker Discovery

**Molecular Biomarkers:**

*Inflammatory:*
| Marker | Sample | Association |
|--------|--------|-------------|
| IL-1β | Synovial fluid | Active inflammation |
| TNF-α | Synovial fluid | Degeneration |
| MMP-3, MMP-9 | Synovial fluid | Cartilage breakdown |
| CRP | Serum | Systemic inflammation |
| Substance P | Synovial fluid | Nociception |

*Metabolomic:*
- Lipid profiles
- Amino acid patterns
- Oxidative stress markers
- Research phase

**Genetic Susceptibility:**

*OPPERA Genetic Findings:*
| Gene | Variant | Association |
|------|---------|-------------|
| COMT | Val158Met | Pain sensitivity, chronicity |
| SCN9A | Various | Sodium channel function |
| ADRB2 | Various | Adrenergic, autonomic |
| HTR2A | Various | Serotonin, pain modulation |
| GCH1 | Various | Pain sensitivity |

*Epigenetics:*
- DNA methylation patterns
- Histone modifications
- Stress-responsive genes
- Chronicity mechanisms

## Systems Biology Integration

**Multi-Omics Approach:**

\`\`\`
Genomics → Transcriptomics → Proteomics → Metabolomics
                    ↓
            Phenomics (clinical presentation)
                    ↓
            Precision Treatment Selection
\`\`\`

**Network Analysis:**

*Interactome Studies:*
- Protein-protein interactions
- Pathway cross-talk
- Hub genes identification
- Therapeutic target prioritization

**Machine Learning Applications:**

| Application | Status |
|-------------|--------|
| Diagnostic classification | Research |
| Chronicity prediction | Promising |
| Treatment response prediction | Early stage |
| Phenotype clustering | Active research |

## Precision Prevention

**Risk Identification:**

*Screening Tools:*
- OPPERA-derived risk factors
- Psychological screening
- QST profiles
- Genetic panels (future)

*High-Risk Populations:*
- Trauma exposure
- Other chronic pain conditions
- Psychological vulnerabilities
- Family history

**Preventive Interventions:**

| Target | Intervention | Evidence |
|--------|--------------|----------|
| Parafunctional habits | Awareness training | Moderate |
| Stress | Stress management programs | Moderate |
| Sleep | Sleep hygiene, CBT-I | Emerging |
| Post-injury | Early intervention | Limited |

## Emerging Treatment Paradigms

**Targeted Therapies:**

*Mechanism-Based:*
| Mechanism | Target | Approach |
|-----------|--------|----------|
| Peripheral sensitization | NGF, CGRP | Biologics |
| Central sensitization | NMDA, glia | Novel pharmacology |
| Descending facilitation | Brainstem | Neuromodulation |
| Disc degeneration | MMP, growth factors | Regenerative |

**Regenerative Approaches:**

*TMJ Tissue Engineering:*
- Scaffold-based disc replacement
- Stem cell therapies
- Growth factor delivery
- 3D bioprinting (research)

*Challenges:*
- Mechanical demands of TMJ
- Vascularization
- Integration with host
- Clinical translation

**Digital Therapeutics:**

*Mobile Health:*
- Self-management apps
- Biofeedback integration
- Symptom tracking
- Treatment adherence

*Virtual Reality:*
- Distraction therapy
- Movement training
- Exposure therapy
- Emerging evidence

## Clinical Translation

**Personalized Treatment Algorithm:**

\`\`\`
Assessment (DC/TMD + Axis II + QST)
         ↓
Phenotype Classification
         ↓
    ┌────┴────┐
Adaptive    Complex
    ↓          ↓
Self-care   Multimodal + specialty
+ PT        interventions
\`\`\`

**Implementation Challenges:**

| Challenge | Strategy |
|-----------|----------|
| Phenotyping tools | Simplified clinical versions |
| Multidisciplinary access | Integrated care models |
| Evidence gaps | Pragmatic trials |
| Training | Specialty development |

## Research Priorities

**Short-Term (1-5 years):**
1. Validate phenotype-based treatment
2. Develop clinical biomarkers
3. Test CGRP antagonists in TMD
4. Neuromodulation trials

**Medium-Term (5-10 years):**
1. Precision prevention programs
2. Regenerative therapies
3. Digital therapeutics integration
4. AI-assisted diagnosis

**Long-Term (>10 years):**
1. Disease-modifying treatments
2. Personalized medicine implementation
3. Prevention focus
4. Cure for degenerative TMD`,
      keyTerms: [
        { term: 'COMT', definition: 'Catechol-O-Methyltransferase; enzyme affecting catecholamine metabolism, variants associated with pain sensitivity' },
        { term: 'DTI', definition: 'Diffusion Tensor Imaging; MRI technique for white matter microstructure' },
        { term: 'interactome', definition: 'Complete set of molecular interactions in a biological system' },
        { term: 'digital therapeutics', definition: 'Evidence-based therapeutic interventions driven by software programs' },
        { term: 'multi-omics', definition: 'Integration of multiple molecular data types for comprehensive analysis' },
        { term: '3D bioprinting', definition: 'Additive manufacturing of biological tissues for regenerative medicine' },
      ],
      clinicalNotes: `Research translation priorities:
1. Phenotype-based treatment selection is emerging - move beyond one-size-fits-all
2. CGRP antagonists (migraine drugs) being studied for TMD with migraine overlap
3. Neuroimaging shows TMD involves brain changes - validates central approaches for chronic cases
4. QST predicts treatment response and chronicity - consider for difficult cases
5. Genetic testing not yet clinical but explains individual variability
6. Digital therapeutics offer scalable self-management solutions
7. Prevention focus needed - identify high-risk individuals before chronicity develops
8. Regenerative approaches for disc/cartilage damage are research-stage`,
    },
  },

  media: [
    {
      id: 'tmj-anatomy',
      type: 'diagram',
      filename: 'tmj-anatomy.svg',
      title: 'TMJ Anatomy',
      description: 'Cross-section showing condyle, disc, and temporal bone relationships',
    },
    {
      id: 'disc-displacement',
      type: 'diagram',
      filename: 'disc-displacement-types.svg',
      title: 'Disc Displacement Types',
      description: 'Illustrations of normal, DDwR, and DDwoR disc positions',
    },
  ],

  citations: [
    {
      id: 'dctmd-guidelines',
      type: 'article',
      title: 'Diagnostic Criteria for Temporomandibular Disorders',
      authors: ['Schiffman, E.', 'Ohrbach, R.'],
      source: 'Journal of Oral and Facial Pain and Headache',
    },
    {
      id: 'oppera-study',
      type: 'article',
      title: 'OPPERA Study: First Onset of TMD',
      source: 'Journal of Pain',
    },
  ],

  crossReferences: [
    { targetId: 'structure-oral-cavity-anatomy', targetType: 'structure', relationship: 'related', label: 'Oral Cavity Anatomy' },
    { targetId: 'topic-dental-emergencies', targetType: 'topic', relationship: 'see-also', label: 'Dental Emergencies' },
  ],

  tags: {
    systems: ['musculoskeletal', 'dental'],
    structures: ['TMJ', 'mandible', 'masticatory muscles'],
    topics: ['pathology', 'treatment', 'pain management'],
    keywords: ['TMJ', 'TMD', 'jaw pain', 'bruxism', 'temporomandibular'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default tmjDisorders;
