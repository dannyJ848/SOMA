/**
 * Rotator Cuff Injury - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const rotatorCuffInjury: EducationalContent = {
  id: 'sports-med-rotator-cuff-injury',
  type: 'condition',
  name: 'Rotator Cuff Injury',
  alternateNames: ['Rotator Cuff Tear', 'Shoulder Cuff Injury', 'RTC Tear'],

  levels: {
    1: {
      level: 1,
      summary: 'A rotator cuff injury happens when the muscles and tendons around your shoulder get damaged, making it hard to lift your arm.',
      explanation: `## What is a Rotator Cuff Injury?

The rotator cuff is a group of four muscles and tendons that wrap around your shoulder joint like a cuff.

**What Happens**
- The tendons can get irritated, frayed, or torn
- This causes pain and weakness in your shoulder
- It becomes hard to lift things or reach overhead

**Common Causes**
- Overuse from repetitive motions
- Falling on an outstretched arm
- Lifting something too heavy
- Normal wear and tear with age

**Signs of Injury**
- Pain when lifting your arm
- Weakness in your shoulder
- Pain when sleeping on that side
- A crackling feeling when moving your shoulder

**Treatment**
- Rest and ice
- Physical therapy exercises
- Anti-inflammatory medicine
- Surgery for severe tears`,
      keyTerms: [
        { term: 'rotator cuff', definition: 'Four muscles and tendons that stabilize and move the shoulder' },
        { term: 'tendon', definition: 'Tough tissue that connects muscle to bone' },
      ],
      analogies: [
        'The rotator cuff is like a sleeve that holds your arm bone in the shoulder socket.',
      ],
    },
    2: {
      level: 2,
      summary: 'Rotator cuff injuries range from tendinitis to partial or complete tears of the SITS muscles, presenting with shoulder pain and weakness, diagnosed clinically and with imaging, and managed conservatively or surgically.',
      explanation: `## Understanding Rotator Cuff Injuries

### Anatomy - SITS Muscles
- **S**upraspinatus - Initiates abduction
- **I**nfraspinatus - External rotation
- **T**eres minor - External rotation
- **S**ubscapularis - Internal rotation

### Types of Injury
**Tendinitis/Tendinopathy:**
- Inflammation or degeneration
- Often from overuse

**Partial Tear:**
- Incomplete tear of tendon
- Bursal-side, articular-side, or intratendinous

**Full-Thickness Tear:**
- Complete tear through tendon
- May be small, medium, large, or massive

### Clinical Presentation
- Pain with overhead activities
- Night pain (lying on affected side)
- Weakness with arm elevation
- Painful arc (60-120° abduction)

### Physical Examination
| Test | Target | Positive Finding |
|------|--------|------------------|
| Empty Can | Supraspinatus | Pain/weakness |
| External Rotation Lag | Infraspinatus | Unable to hold position |
| Lift-Off | Subscapularis | Unable to lift hand off back |
| Drop Arm | Supraspinatus tear | Cannot control descent |

### Imaging
- X-ray: Humeral head position, arthritis, spurs
- MRI: Gold standard for soft tissue
- Ultrasound: Dynamic assessment

### Treatment
**Conservative:**
- Activity modification
- Physical therapy (strengthening, ROM)
- NSAIDs
- Corticosteroid injection (limited use)

**Surgical:**
- Indicated for full-thickness tears in active patients
- Arthroscopic or open repair`,
      keyTerms: [
        { term: 'impingement', definition: 'Compression of rotator cuff tendons between humeral head and acromion' },
        { term: 'empty can test', definition: 'Clinical test for supraspinatus pathology' },
        { term: 'painful arc', definition: 'Pain during mid-range shoulder abduction, suggests impingement' },
      ],
    },
    3: {
      level: 3,
      summary: 'Rotator cuff pathology represents a spectrum from tendinopathy to massive tears, with treatment decisions based on tear characteristics, patient factors, and functional demands.',
      explanation: `## Rotator Cuff Pathophysiology

### Etiology
**Intrinsic Factors:**
- Tendon degeneration with age
- Hypovascularity of "critical zone"
- Oxidative stress

**Extrinsic Factors:**
- Subacromial impingement
- Acromial morphology (Type III hooked)
- Repetitive overhead activity

### Classification
**By Location:**
- Supraspinatus most common (>90%)
- Anterior (subscapularis) or posterior extension

**By Size:**
- Small: <1 cm
- Medium: 1-3 cm
- Large: 3-5 cm
- Massive: >5 cm or 2+ tendons

### Clinical Assessment
**Special Tests:**
- Jobe test (empty can)
- Hornblower sign
- Bear-hug test
- Napoleon test

**Functional Assessment:**
- ASES score
- Constant-Murley score
- Simple Shoulder Test

### Imaging Findings
**MRI:**
- T2 signal intensity in tendon
- Partial vs full-thickness tear
- Muscle atrophy (Goutallier classification)
- Fatty infiltration

### Treatment Algorithm
**Conservative First:**
- 6-12 weeks physical therapy
- Eccentric exercises
- Scapular stabilization

**Surgical Indications:**
- Acute traumatic tear
- Failed conservative treatment
- Large/massive tears with good tissue quality

### Surgical Outcomes
- Small/medium tears: 85-95% success
- Large tears: 70-85% success
- Massive tears: Variable, higher re-tear rates`,
      keyTerms: [
        { term: 'Goutallier classification', definition: 'Grading system for fatty infiltration of rotator cuff muscles on imaging' },
        { term: 'critical zone', definition: 'Hypovascular area of supraspinatus tendon prone to degeneration' },
      ],
      clinicalNotes: 'Age-related rotator cuff tears common (>50% over age 60 on imaging). Many asymptomatic. Conservative treatment effective for many. Surgical repair outcomes depend on tear size and tissue quality.',
    },
    4: {
      level: 4,
      summary: 'Advanced rotator cuff management integrates biomechanical understanding, biological factors, and individualized treatment considering tear progression, healing potential, and functional demands.',
      explanation: `## Advanced Rotator Cuff Concepts

### Biomechanics
**Force Couples:**
- Coronal plane: Deltoid vs. cuff
- Transverse plane: Subscapularis vs. infraspinatus/teres minor
- Balanced forces maintain humeral head centered

**Massive Tear Biomechanics:**
- Loss of force couple
- Superior humeral migration
- Pseudoparalysis

### Tendon Biology
**Healing Challenges:**
- Tendon-to-bone interface complexity
- Gradual transition zones disrupted
- Scar formation vs. regeneration

**Biological Augmentation:**
- PRP: Mixed evidence
- Stem cells: Investigational
- Scaffolds: Emerging

### Surgical Considerations
**Repair Techniques:**
- Single-row vs. double-row
- Transosseous equivalent
- Margin convergence for large tears

**Irreparable Tears:**
- Superior capsular reconstruction
- Tendon transfers (latissimus, lower trapezius)
- Reverse total shoulder arthroplasty

### Rehabilitation Principles
**Phased Approach:**
- Immobilization period (tissue healing)
- Passive ROM progression
- Active-assisted to active ROM
- Strengthening (3-4 months)
- Return to activity (6+ months)`,
      keyTerms: [
        { term: 'force couple', definition: 'Paired muscle forces that create rotation while maintaining joint stability' },
        { term: 'superior capsular reconstruction', definition: 'Surgical technique using graft to restore superior glenohumeral stability in irreparable tears' },
      ],
      clinicalNotes: 'Double-row repair may improve healing rates for larger tears. Compliance with post-operative restrictions critical. Irreparable tears require alternative strategies.',
    },
    5: {
      level: 5,
      summary: 'Contemporary rotator cuff research explores biological enhancement of healing, genetic factors in tendinopathy, and advanced surgical techniques for challenging tear patterns.',
      explanation: `## Molecular Mechanisms

### Tendinopathy Pathogenesis
**Cellular Changes:**
- Tenocyte apoptosis
- Chondrocyte metaplasia
- Altered matrix metalloproteinase activity
- Failed healing response

**Growth Factors:**
- TGF-β, PDGF, VEGF
- IGF-1
- BMPs

### Biologics Research
**PRP:**
- Variable preparation methods
- Inconsistent clinical evidence
- May improve early healing

**Cell-Based Therapies:**
- Mesenchymal stem cells
- Adipose-derived cells
- Challenges: Delivery, survival, differentiation

### Surgical Advances
**Arthroscopic Techniques:**
- Single vs double row biomechanics
- Knotless anchors
- Augmentation with patches

**Emerging Technologies:**
- 3D-printed scaffolds
- Growth factor delivery systems
- Gene therapy (preclinical)

### Outcome Prediction
**Risk Factors for Re-tear:**
- Age >65
- Tear size
- Fatty infiltration
- Smoking
- Workers' compensation

**Genetic Factors:**
- Collagen gene variants
- Matrix metalloproteinase polymorphisms`,
      keyTerms: [
        { term: 'tenocyte', definition: 'Tendon cells responsible for matrix production and maintenance' },
        { term: 'matrix metalloproteinases', definition: 'Enzymes involved in extracellular matrix remodeling' },
      ],
      clinicalNotes: 'Biological augmentation shows promise but clinical evidence still developing. Patient selection critical for surgical outcomes. Prevention of progression through early intervention may be key.',
    },
  },

  media: [],
  citations: [],

  crossReferences: [
    { targetId: 'sports-med-overuse-injuries-overview', targetType: 'concept', relationship: 'related', label: 'Overuse Injuries' },
  ],

  tags: {
    systems: ['musculoskeletal'],
    topics: ['shoulder-injury', 'tendon-injury', 'sports-medicine'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default rotatorCuffInjury;
