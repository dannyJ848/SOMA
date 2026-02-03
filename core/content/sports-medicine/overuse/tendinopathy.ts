/**
 * Tendinopathy - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const tendinopathy: EducationalContent = {
  id: 'sports-med-tendinopathy',
  type: 'condition',
  name: 'Tendinopathy',
  alternateNames: ['Tendinitis', 'Tendinosis', 'Tendon Injury'],

  levels: {
    1: {
      level: 1,
      summary: 'Tendinopathy is pain and weakness in a tendon, usually from doing the same movement too many times.',
      explanation: `## What is Tendinopathy?

Tendons connect your muscles to your bones. When they get overworked, they can become painful and weak.

**Common Areas**
- Achilles tendon (heel)
- Patellar tendon (knee)
- Tennis elbow
- Shoulder tendons

**Symptoms**
- Pain during activity
- Stiffness in the morning
- Tenderness when touched
- Sometimes swelling

**Causes**
- Repetitive movements
- Sudden increase in activity
- Poor technique
- Aging

**Treatment**
- Rest from painful activities
- Ice and anti-inflammatory medicine
- Stretching and strengthening exercises
- Gradual return to activity`,
      keyTerms: [
        { term: 'tendon', definition: 'Tough tissue that connects muscle to bone' },
        { term: 'tendinopathy', definition: 'Pain and problems with a tendon from overuse' },
      ],
    },
    2: {
      level: 2,
      summary: 'Tendinopathy encompasses a spectrum of tendon disorders from reactive tendinopathy to degenerative changes, managed primarily with progressive loading exercises.',
      explanation: `## Understanding Tendinopathy

### Terminology
- **Tendinitis:** Inflammatory (acute) phase
- **Tendinosis:** Degenerative changes
- **Tendinopathy:** Umbrella term for clinical presentation

### Common Sites
| Location | Sport/Activity |
|----------|---------------|
| Achilles | Running, jumping |
| Patellar | Basketball, volleyball |
| Rotator cuff | Overhead sports |
| Lateral elbow | Tennis, manual work |

### Clinical Features
**Symptoms:**
- Pain with activity
- Morning stiffness
- Localized tenderness
- Possible swelling

**Examination:**
- Point tenderness over tendon
- Pain with loading
- Possible thickening
- Weakness with resistance

### Pathophysiology Stages
1. **Reactive:** Acute response to overload
2. **Dysrepair:** Failed healing
3. **Degenerative:** Structural breakdown

### Management
**Activity Modification:**
- Reduce provocative loads
- Maintain tolerable activity
- Avoid complete rest

**Exercise Therapy:**
- Progressive loading
- Isometric (for pain relief)
- Eccentric exercises
- Heavy slow resistance

**Adjuncts:**
- NSAIDs (short-term)
- Ice/heat
- Bracing/taping
- Injection (controversial)`,
      keyTerms: [
        { term: 'eccentric exercise', definition: 'Muscle lengthening while under load, primary treatment for tendinopathy' },
        { term: 'reactive tendinopathy', definition: 'Acute phase of tendon overload with potential for recovery' },
        { term: 'isometric exercise', definition: 'Muscle contraction without joint movement, can reduce pain' },
      ],
    },
    3: {
      level: 3,
      summary: 'Tendinopathy represents a continuum of pathology requiring staged loading rehabilitation, with treatment targeting both structural and neuroplastic components of pain.',
      explanation: `## Clinical Management

### Continuum Model
| Stage | Features | Management |
|-------|----------|------------|
| Reactive | Acute, swollen, thickened | Load reduction, isometrics |
| Dysrepair | Persistent, matrix changes | Progressive loading |
| Degenerative | Chronic, structural failure | Capacity building, consider surgery |

### Assessment
**History:**
- Onset pattern
- Activity relationship
- Training changes
- Previous episodes

**Physical Examination:**
- Tendon palpation
- Loading tests
- Flexibility
- Kinetic chain assessment

**Imaging:**
- Ultrasound: First-line, dynamic
- MRI: Detailed structural assessment
- Note: Imaging findings don't correlate with symptoms

### Loading Programs
**Isometric:**
- 5 x 45 second holds
- Heavy load
- Pain relief mechanism

**Eccentric:**
- Alfredson protocol (Achilles)
- 3 x 15, twice daily
- Through mild discomfort

**Heavy Slow Resistance:**
- Slower movement (3s each phase)
- Progressive loading
- 3-4 times weekly

**Plyometric Progression:**
- Once strength restored
- Sport-specific integration

### Adjunct Therapies
**Injection Options:**
- Corticosteroid: Short-term relief, may impair healing
- PRP: Mixed evidence
- Prolotherapy: Limited evidence

**Other:**
- Shockwave therapy
- Dry needling
- Manual therapy
- Orthotics/bracing`,
      keyTerms: [
        { term: 'Alfredson protocol', definition: 'Eccentric exercise program for Achilles tendinopathy, 3x15 repetitions twice daily' },
        { term: 'heavy slow resistance', definition: 'Loading protocol using slow controlled movements with high load' },
        { term: 'shockwave therapy', definition: 'ESWT, mechanical stimulation that may promote healing' },
      ],
      clinicalNotes: 'Imaging abnormalities are common in asymptomatic individuals. Load management is cornerstone of treatment. Avoid complete rest. Eccentric exercise has strongest evidence base. Corticosteroid injection may provide short-term relief but potentially impair long-term outcomes.',
    },
    4: {
      level: 4,
      summary: 'Advanced tendinopathy management integrates understanding of neuroplastic pain mechanisms, individualized loading prescription, and consideration of surgical options for recalcitrant cases.',
      explanation: `## Advanced Concepts

### Pathophysiology
**Structural Changes:**
- Collagen disorganization
- Increased proteoglycans
- Neovascularization
- Reduced tensile strength

**Neuroplastic Changes:**
- Central sensitization
- Altered pain processing
- Cortical reorganization
- Explains symptom persistence

### Loading Science
**Mechanotransduction:**
- Mechanical load → Cellular response
- Optimal loading promotes adaptation
- Overload causes breakdown

**Dosing Parameters:**
- Magnitude of load
- Frequency
- Duration
- Rest periods

**Individual Variation:**
- Response to loading varies
- Progressive modification required
- Monitor symptom response

### Surgical Considerations
**Indications:**
- Failed 6+ months conservative treatment
- Significant structural abnormality
- Unable to return to function

**Procedures:**
- Tendon debridement
- Paratenon release
- Repair/augmentation
- Plantaris excision (Achilles)

**Outcomes:**
- Generally good for appropriate candidates
- Prolonged rehabilitation required
- Not guaranteed resolution

### Biologics
**PRP:**
- Variable preparation methods
- Mixed evidence
- May have role in refractory cases

**Stem Cells:**
- Research phase
- Limited clinical evidence

**High Volume Injection:**
- For neovascularization
- Variable results`,
      keyTerms: [
        { term: 'central sensitization', definition: 'Heightened pain response from nervous system changes, not just tissue damage' },
        { term: 'mechanotransduction', definition: 'Conversion of mechanical force to cellular signaling and adaptation' },
        { term: 'high volume injection', definition: 'Injection technique to disrupt neovascularization in chronic tendinopathy' },
      ],
      clinicalNotes: 'Pain may persist despite structural healing due to neuroplastic changes. Loading programs must be individualized and progressive. Surgery reserved for recalcitrant cases. Biologics remain unproven.',
    },
    5: {
      level: 5,
      summary: 'Research frontiers in tendinopathy explore molecular mechanisms of tissue failure, biomarkers for staging and prognosis, and regenerative approaches to restore tendon structure and function.',
      explanation: `## Research Frontiers

### Molecular Pathology
**Matrix Changes:**
- Type I → Type III collagen shift
- Proteoglycan accumulation
- Crosslink abnormalities
- MMP overexpression

**Cellular:**
- Tenocyte apoptosis
- Chondroid metaplasia
- Failed healing response

**Signaling Pathways:**
- TGF-β dysregulation
- IL-1, IL-6 involvement
- Glutamate and substance P

### Biomarkers
**Structural:**
- COMP
- Collagen degradation products
- Protease levels

**Imaging:**
- Ultrasound tissue characterization
- Elastography
- MRI mapping

### Regenerative Medicine
**Approaches:**
- Growth factor delivery
- Gene therapy
- Cell-based treatments
- Scaffold technology

**Challenges:**
- Delivery methods
- Cell survival
- Integration
- Clinical translation

### Load Monitoring
**Technology:**
- Wearable sensors
- Force measurement
- Activity tracking

**Application:**
- Individualized prescription
- Real-time feedback
- Prevention

### Prevention Research
**Risk Identification:**
- Genetic variants (COL5A1, tenascin-C)
- Biomechanical factors
- Load-capacity mismatch

**Programs:**
- Nordic hamstring program
- Eccentric maintenance
- Load management`,
      keyTerms: [
        { term: 'tenocyte', definition: 'Tendon cells responsible for matrix production and maintenance' },
        { term: 'elastography', definition: 'Imaging technique measuring tissue stiffness' },
        { term: 'COL5A1', definition: 'Gene encoding type V collagen, variants associated with tendinopathy risk' },
      ],
      clinicalNotes: 'Molecular understanding may lead to targeted treatments. Biomarkers not yet clinical standard. Regenerative approaches promising but early stage. Prevention through load management most practical current strategy.',
    },
  },

  media: [],
  citations: [],

  crossReferences: [
    { targetId: 'sports-med-overuse-injuries-overview', targetType: 'concept', relationship: 'parent', label: 'Overuse Injuries' },
  ],

  tags: {
    systems: ['musculoskeletal'],
    topics: ['tendon-injury', 'overuse-injury', 'sports-medicine'],
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

export default tendinopathy;
