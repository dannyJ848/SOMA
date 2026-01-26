/**
 * Sports-Related Concussion - Educational Content
 *
 * Covers mild traumatic brain injury pathophysiology, recognition,
 * management, and return-to-play protocols.
 */

import { EducationalContent } from '../../types';

export const concussionContent: EducationalContent = {
  id: 'sports-med-concussion',
  type: 'condition',
  name: 'Sports-Related Concussion',
  alternateNames: ['Mild Traumatic Brain Injury', 'Sport-Related Concussion', 'mTBI'],

  levels: {
    1: {
      level: 1,
      summary: 'A concussion is a brain injury from a blow to the head or body that changes how the brain normally works.',
      explanation: `## What is a Concussion?

A concussion is a type of brain injury that changes the way the brain normally works. It's caused by a bump, blow, or jolt to the head or body.

**How Concussions Happen:**
- Direct hit to the head (helmet-to-helmet collision)
- Indirect force (body blow that snaps head)
- Sudden stop or fall
- Whiplash mechanism

**Common Signs and Symptoms:**

*Physical:*
- Headache
- Dizziness
- Nausea or vomiting
- Balance problems
- Blurred or double vision

*Thinking and Remembering:*
- Confusion
- Memory problems
- Difficulty concentrating
- Feeling "foggy"

**Important Facts:**
- Most concussions occur WITHOUT loss of consciousness
- You can have a concussion even if CT/MRI is normal
- Symptoms may not appear immediately
- Proper recovery is essential before returning to play

**What to Do:**
1. Remove from play immediately
2. Don't return to activity same day
3. See a healthcare provider
4. Follow a stepwise return-to-play protocol`,
      keyTerms: [
        { term: 'concussion', definition: 'Mild traumatic brain injury that temporarily affects brain function' },
        { term: 'CT scan', definition: 'Imaging test that takes detailed pictures of the brain' },
        { term: 'return to play', definition: 'Graduated protocol for safely returning to sports after injury' },
      ],
      analogies: [
        'Your brain is like a computer - a concussion is like the computer freezing and needing a restart.',
        'A concussion shakes the brain like shaking a snow globe - everything needs time to settle.',
      ],
      examples: [
        'A football player gets helmet-to-helmet contact and feels dizzy.',
        'A soccer player heads the ball wrong and has a headache.',
        'A gymnast falls and hits her head, feeling confused afterward.',
      ],
    },
    2: {
      level: 2,
      summary: 'Concussion is a functional disturbance of brain function caused by biomechanical forces, presenting with diverse symptoms that require recognition, appropriate management, and graduated return to activity.',
      explanation: `## Pathophysiology

**Neurometabolic Cascade:**
- Neuronal cell membrane stretching
- Ionic flux (potassium out, calcium in)
- Release of excitatory neurotransmitters
- Energy crisis (increased demand, decreased blood flow)
- Recovery typically takes 7-14 days

## Recognition

**Observed Signs:**
- Loss of consciousness (even brief)
- Appearing dazed or stunned
- Confusion about assignment or position
- Forgetting plays or opponent
- Unsteady movements or balance problems
- Slurred speech

**Reported Symptoms:**
- Headache or pressure in head
- Nausea or vomiting
- Balance problems or dizziness
- Double or blurry vision
- Sensitivity to light or noise
- Feeling slowed down or "foggy"

## Sideline Assessment

**SCAT5 (Sport Concussion Assessment Tool):**
- Standardized assessment tool
- Symptom evaluation
- Cognitive screening
- Balance examination
- Designed for trained medical professionals

**Red Flags - Emergency Referral:**
- Worsening headache
- Repeated vomiting
- Slurred speech
- Weakness, numbness
- One pupil larger than the other
- Seizure activity
- Cannot be awakened

## Initial Management

**First 24-48 Hours:**
- Physical rest: limit activities that increase symptoms
- Cognitive rest: limit screen time, reading
- Avoid bright lights and loud environments
- Good hydration and nutrition
- Monitor for worsening symptoms`,
      keyTerms: [
        { term: 'SCAT5', definition: 'Sport Concussion Assessment Tool, 5th edition; standardized concussion assessment' },
        { term: 'neurometabolic cascade', definition: 'Series of chemical and metabolic changes in brain after concussion' },
        { term: 'cognitive rest', definition: 'Limiting mental activities that stress the brain during recovery' },
      ],
      analogies: [
        'The brain after concussion is like a phone with a cracked screen - it works but needs careful handling.',
      ],
    },
    3: {
      level: 3,
      summary: 'Concussion involves complex neurometabolic dysfunction requiring systematic assessment, graduated rehabilitation progressing from rest through controlled exercise to return-to-sport, with specialized considerations for pediatric populations.',
      explanation: `## Comprehensive Assessment

**Computerized Neurocognitive Testing:**
- ImPACT, CNS Vital Signs, Axon Sports
- Measures: reaction time, memory, processing speed
- Baseline testing ideal for comparison
- Not a standalone diagnostic tool

**Balance Assessment:**
- BESS (Balance Error Scoring System)
- Computerized posturography
- More sensitive than clinical exam
- Can detect subtle deficits

**Recovery Timeline:**
- Most adults: 7-14 days
- Most adolescents: 14-28 days
- Children may take longer
- Individual variation is common

**Active Rehabilitation Approach:**
- Complete rest NO longer recommended
- Subsymptom threshold exercise
- Progressive activity introduction
- Symptom-limited progression
- Controlled aerobic activity beneficial

## Return-to-Learn Protocol

**School Accommodations:**
- Extended time for tests/assignments
- Reduced homework load
- Breaks during the day
- Quiet testing environment
- Pre-printed notes or reduced note-taking
- Temporary dismissal from physical education

## Return-to-Play Protocol

**Graduated, Symptom-Limited Progression:**

*Day 1: Light Aerobic Exercise*
- Walking, stationary cycling
- 5-10 minutes
- No resistance training

*Day 2: Sport-Specific Exercise*
- Skilled drills without contact
- Running, skating, shooting
- No head impact activities

*Day 3: Non-Contact Training Drills*
- More complex training drills
- May add resistance training
- No contact or collision

*Day 4: Full Contact Practice*
- Medical clearance required
- Normal training activities
- Monitor for contact tolerance

*Day 5: Return to Play*
- Full participation
- Normal game activities

**Key Rules:**
- Minimum 24 hours between steps
- No symptom exacerbation
- If symptoms return, drop back to previous step`,
      keyTerms: [
        { term: 'subsymptom threshold', definition: 'Activity level that does not worsen concussion symptoms' },
        { term: 'BESS', definition: 'Balance Error Scoring System; test of postural stability' },
        { term: 'baseline testing', definition: 'Pre-injury cognitive testing for comparison after concussion' },
      ],
      clinicalNotes: 'Return-to-learn precedes return-to-play in school-aged athletes. Multiple concussions require specialized evaluation. Consider vestibular and ocular-motor therapy for prolonged symptoms.',
    },
    4: {
      level: 4,
      summary: 'Concussion pathophysiology involves neurometabolic crisis with cellular vulnerability, requiring advanced neurocognitive and vestibular assessment, targeted rehabilitation for persistent symptoms, and individualized return-to-sport decisions.',
      explanation: `## Advanced Pathophysiology

**Primary Injury (Mechanical Force):**
- Neuronal cell membrane stretching
- Axonal injury process
- Cerebral blood flow changes
- Neurotransmitter release

**Secondary Injury (Metabolic Cascade):**
- Increased energy demand
- Decreased cerebral blood flow
- Mismatch: supply vs demand
- Energy crisis (ATP depletion)
- Cellular vulnerability to repeat injury
- Metabolic recovery: ~3 weeks

**Advanced Assessment Tools:**

*Ocular-Motor Assessment:*
- King-Devick test (rapid number naming)
- Vestibulo-ocular reflex testing
- Smooth pursuits and saccades
- Convergence testing
- Often abnormal in concussion

*Advanced Imaging:*
- MRI: Usually normal, rules out other pathology
- DTI (Diffusion Tensor Imaging): Shows white matter changes
- fMRI: Functional brain changes
- Research use currently

**Persistent Symptoms (>4 weeks):**
- Vestibular rehabilitation for dizziness
- Vision therapy for visual symptoms
- Cervical spine assessment and treatment
- Exertional physical therapy
- Consider referral to specialist

**Risk Factors for Prolonged Recovery:**
- Previous concussion history
- Multiple concussions
- Younger age
- Female sex
- High initial symptom burden
- Learning difficulties or ADHD
- Mental health history`,
      keyTerms: [
        { term: 'DTI', definition: 'Diffusion Tensor Imaging; MRI technique showing white matter tracts' },
        { term: 'King-Devick test', definition: 'Rapid number naming test assessing visual tracking and saccades' },
        { term: 'vestibulo-ocular reflex', definition: 'Eye movement that stabilizes gaze during head movement' },
      ],
      clinicalNotes: 'Metabolic recovery may outlast symptom resolution. Objective measures lag behind symptoms. Active rehabilitation preferred over passive rest for most patients.',
    },
    5: {
      level: 5,
      summary: 'Contemporary concussion management integrates evolving understanding of chronic effects, emerging biomarkers, evidence-based return-to-sport criteria, and recognition of CTE risk factors while emphasizing individualized care and prevention.',
      explanation: `## Chronic Traumatic Encephalopathy (CTE)

**Definition:**
- Progressive neurodegenerative disease
- Associated with repetitive head trauma
- Tau protein deposition
- Can only be diagnosed post-mortem

**Risk Factors:**
- Repetitive subconcussive hits
- Multiple concussions
- Duration of exposure
- Age of first exposure
- Position in contact sports

**Controversies:**
- Causation not definitively proven
- Incidence unknown
- Risk factors not fully characterized
- Clinical diagnosis criteria evolving

## Emerging Diagnostics

**Blood Biomarkers:**
- GFAP (Glial Fibrillary Acidic Protein)
- UCH-L1 (Ubiquitin Carboxy-Terminal Hydrolase L1)
- Tau protein isoforms
- Neurofilament light chain
- FDA-cleared tests emerging

**Advanced Assessment:**
- Eye tracking technology
- Portable EEG devices
- Heart rate variability
- Virtual reality platforms

## Prevention Strategies

**Primary Prevention:**
- Proper technique education
- Rule enforcement
- Equipment optimization
- Limiting contact practices
- Neck conditioning
- Fair play principles

**Return-to-Sport Decision-Making:**
- Individualized risk-benefit assessment
- Multiple concussions consideration
- Position-specific factors
- Age and level of play
- Psychological readiness assessment

**Retirement Considerations:**
- Multiple concussions
- Decreasing threshold for injury
- Prolonged recovery times
- Persistent symptoms
- Concerning neurological findings`,
      keyTerms: [
        { term: 'CTE', definition: 'Chronic Traumatic Encephalopathy; neurodegenerative disease associated with head trauma' },
        { term: 'GFAP', definition: 'Glial Fibrillary Acidic Protein; biomarker for brain injury released into blood' },
        { term: 'subconcussive hits', definition: 'Repetitive head impacts that don\'t cause immediate concussion symptoms' },
      ],
      clinicalNotes: 'Second impact syndrome is rare but catastrophic. Cumulative effects of multiple concussions not fully understood. Prevention remains the best approach. Individualized retirement decisions require comprehensive evaluation.',
    },
  },

  media: [
    {
      id: 'concussion-assessment-flow',
      type: 'diagram',
      filename: 'concussion-assessment-flow.svg',
      title: 'Concussion Assessment and Management Flow',
      description: 'Step-by-step guide for concussion evaluation and return-to-play',
    },
  ],

  citations: [
    {
      id: 'concussion-consensus',
      type: 'article',
      title: 'Consensus Statement on Concussion in Sport',
      source: 'British Journal of Sports Medicine',
    },
    {
      id: 'cdc-concussion',
      type: 'website',
      title: 'CDC Heads Up - Concussion in Sports',
      source: 'Centers for Disease Control and Prevention',
    },
  ],

  crossReferences: [
    { targetId: 'sports-med-head-injuries', targetType: 'topic', relationship: 'related', label: 'Head Injuries' },
    { targetId: 'sports-med-return-to-play-principles', targetType: 'concept', relationship: 'related', label: 'Return to Play' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['concussion', 'brain-injury', 'sports-medicine', 'neurology'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'neurology', 'family-medicine'],
    },
  },

  createdAt: '2026-01-25T00:00:00.000Z',
  updatedAt: '2026-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default concussionContent;
