/**
 * Stress Fractures - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const stressFractures: EducationalContent = {
  id: 'sports-med-stress-fractures',
  type: 'condition',
  name: 'Stress Fractures',
  alternateNames: ['Fatigue Fractures', 'Bone Stress Injuries', 'March Fractures'],

  levels: {
    1: {
      level: 1,
      summary: 'A stress fracture is a tiny crack in a bone caused by doing the same activity over and over, like running.',
      explanation: `## What is a Stress Fracture?

A stress fracture is a small crack in a bone that happens from repeated stress.

**How It Happens**
- Repetitive impact (like running)
- Doing too much too soon
- Bones can't repair fast enough

**Common Locations**
- Foot bones
- Shin (tibia)
- Hip area
- Lower back

**Symptoms**
- Pain that gets worse with activity
- Pain that goes away with rest
- Swelling
- Tenderness when touching the area

**Treatment**
- Rest from the activity that caused it
- Protective boot or crutches sometimes
- Let the bone heal (usually 6-8 weeks)
- Gradual return to activity`,
      keyTerms: [
        { term: 'stress fracture', definition: 'A tiny crack in a bone from repeated stress' },
        { term: 'bone stress injury', definition: 'The spectrum from bone stress to stress fracture' },
      ],
      analogies: [
        'A stress fracture is like bending a paperclip repeatedly - it eventually cracks from fatigue.',
      ],
    },
    2: {
      level: 2,
      summary: 'Stress fractures result from repetitive loading exceeding bone remodeling capacity, presenting as activity-related pain, diagnosed clinically and with imaging, and managed with protected weight-bearing and addressing risk factors.',
      explanation: `## Understanding Stress Fractures

### Pathophysiology
- Repetitive loading causes microdamage
- Bone remodeling can't keep pace
- Microdamage accumulates → stress reaction → stress fracture

### Spectrum
1. **Stress reaction:** Bone edema, no fracture line
2. **Stress fracture:** Visible fracture on imaging

### Risk Factors
**Training Errors:**
- Rapid increase in volume/intensity
- Inadequate recovery

**Intrinsic:**
- Low bone density
- Female athlete triad/RED-S
- Prior stress fracture
- Biomechanics

**Nutritional:**
- Low energy availability
- Vitamin D deficiency
- Calcium deficiency

### Common Sites
| Low Risk | High Risk |
|----------|-----------|
| Tibia (shaft) | Femoral neck |
| Metatarsals (2-4) | Navicular |
| Fibula | 5th metatarsal base |
| Pelvis (pubic ramus) | Anterior tibia |

### Clinical Presentation
- Insidious onset pain
- Pain with activity, relieved by rest
- Localized tenderness
- Possible swelling

### Diagnosis
**Physical Exam:**
- Point tenderness
- Hop test, fulcrum test
- Tuning fork test (low sensitivity)

**Imaging:**
- X-ray: May be negative early
- MRI: Gold standard, early detection
- Bone scan: Sensitive but less specific

### Management
**Low-Risk:**
- Relative rest
- Cross-training
- 6-8 weeks recovery

**High-Risk:**
- Strict non-weight-bearing
- Possible surgical fixation
- 12-20 weeks recovery`,
      keyTerms: [
        { term: 'bone stress injury', definition: 'Spectrum from bone edema (stress reaction) to fracture' },
        { term: 'RED-S', definition: 'Relative Energy Deficiency in Sport, risk factor for bone stress injury' },
        { term: 'high-risk stress fracture', definition: 'Fractures prone to complications like non-union or propagation' },
      ],
    },
    3: {
      level: 3,
      summary: 'Bone stress injuries represent a spectrum of overload pathology requiring site-specific management, with high-risk fractures necessitating more aggressive treatment and identification of underlying risk factors.',
      explanation: `## Clinical Management

### Grading System
**Fredericson MRI Grading:**
| Grade | Findings |
|-------|----------|
| 1 | Periosteal edema only |
| 2 | Bone marrow edema on T2 |
| 3 | Bone marrow edema on T1 and T2 |
| 4 | Low signal line (fracture) |

### High-Risk Fractures
**Characteristics:**
- Tension side of bone
- Poor blood supply
- Risk of non-union, completion

**Sites:**
- Femoral neck (tension side)
- Anterior tibial cortex
- Navicular
- 5th metatarsal (Jones)
- Patella
- Talus

### Evaluation
**History:**
- Training changes
- Nutrition/energy availability
- Menstrual function
- Previous fractures

**Laboratory:**
- Vitamin D
- Calcium
- Consider DEXA
- Metabolic evaluation if indicated

### Treatment by Risk
**Low-Risk:**
- Activity modification
- Cross-training (non-impact)
- Progressive return (pain-free)
- Typically 6-8 weeks

**High-Risk:**
- Non-weight-bearing
- Immobilization
- Surgical consultation
- May require fixation
- 12-20+ weeks

### Return to Activity
**Criteria:**
- Pain-free with daily activities
- Non-tender on exam
- Healed on imaging
- Gradual return protocol`,
      keyTerms: [
        { term: 'Fredericson grading', definition: 'MRI-based classification of tibial stress injuries by severity' },
        { term: 'Jones fracture', definition: 'Stress fracture at 5th metatarsal base, high-risk for non-union' },
        { term: 'tension side', definition: 'Bone surface under tensile stress, higher risk for fracture propagation' },
      ],
      clinicalNotes: 'MRI is most sensitive early imaging modality. High-risk fractures require aggressive management. Address underlying risk factors. Energy availability is critical. Vitamin D optimization important.',
    },
    4: {
      level: 4,
      summary: 'Advanced management integrates understanding of bone remodeling biology, comprehensive risk factor assessment including relative energy deficiency, and individualized return-to-sport protocols.',
      explanation: `## Advanced Concepts

### Bone Remodeling
**Normal Process:**
- Osteoclast resorption
- Osteoblast formation
- 3-4 month cycle

**Stress Fracture Pathophysiology:**
- Increased remodeling with loading
- Resorption outpaces formation
- Weakened bone fails

### Relative Energy Deficiency (RED-S)
**Components:**
- Low energy availability
- Hormonal disruption
- Bone health impairment
- Performance effects

**Assessment:**
- Energy availability calculation
- Menstrual function history
- DEXA scan
- Metabolic markers

**Management:**
- Increase energy intake
- Reduce training load
- Address psychological factors
- Multidisciplinary team

### Biomechanical Factors
**Running Mechanics:**
- Overstriding
- Loading rate
- Hip/knee/ankle kinematics

**Interventions:**
- Gait retraining
- Cadence modification
- Footwear changes
- Orthotic prescription

### Surgical Indications
**Consider Surgery for:**
- High-risk fractures in athletes
- Displaced fractures
- Non-union
- Failed conservative treatment

**Procedures:**
- Intramedullary nailing (tibial shaft)
- Screw fixation (5th MT, navicular)
- Pinning (femoral neck)

### Prevention
**Training:**
- Gradual load progression
- Adequate recovery
- Periodization

**Nutrition:**
- Adequate energy
- Calcium 1000-1500 mg/day
- Vitamin D optimization`,
      keyTerms: [
        { term: 'energy availability', definition: 'Energy intake minus exercise expenditure relative to lean mass' },
        { term: 'osteoclast', definition: 'Bone cell that resorbs bone tissue' },
        { term: 'non-union', definition: 'Failure of fracture to heal, risk with high-risk stress fractures' },
      ],
      clinicalNotes: 'RED-S is underdiagnosed. Bone stress injuries may be first presentation. Comprehensive assessment critical. Gait retraining may reduce recurrence. Prevention through load management and nutrition.',
    },
    5: {
      level: 5,
      summary: 'Research explores bone mechanobiology, biomarkers of bone stress, genetic factors affecting fracture risk, and novel interventions to accelerate healing.',
      explanation: `## Research Frontiers

### Bone Mechanobiology
**Mechanotransduction:**
- Osteocyte sensing
- Sclerostin regulation
- Wnt/β-catenin pathway
- Load-induced modeling

**Research Questions:**
- Optimal loading parameters
- Individual response variation
- Pharmacologic targets

### Biomarkers
**Bone Turnover:**
- P1NP (formation)
- CTX, NTX (resorption)
- Sclerostin

**Potential Applications:**
- Early detection
- Monitoring healing
- Risk stratification

### Genetic Factors
**Candidate Genes:**
- Vitamin D receptor
- Estrogen receptor
- COL1A1
- LRP5

**Clinical Utility:**
- Research phase
- Future personalization

### Novel Therapeutics
**Pharmacologic:**
- Teriparatide (PTH analog)
- Anti-resorptives (caution)
- SERM therapy

**Physical:**
- Low-intensity pulsed ultrasound (LIPUS)
- Shock wave
- Electromagnetic stimulation

**Biologics:**
- PRP/bone marrow aspirate
- Limited evidence

### Imaging Advances
**Quantitative CT:**
- Bone geometry
- Cortical thickness
- Strength estimation

**High-Resolution MRI:**
- Trabecular architecture
- Early pathology detection`,
      keyTerms: [
        { term: 'sclerostin', definition: 'Protein produced by osteocytes that inhibits bone formation, regulated by loading' },
        { term: 'teriparatide', definition: 'PTH analog that can accelerate bone healing, used in recalcitrant cases' },
        { term: 'mechanotransduction', definition: 'Process by which bone cells sense and respond to mechanical loading' },
      ],
      clinicalNotes: 'Biomarkers may help monitor athletes at risk. Genetic testing not yet clinical. Pharmacologic acceleration promising but limited evidence in athletes. Prevention through training and nutrition management most practical.',
    },
  },

  media: [],
  citations: [],

  crossReferences: [
    { targetId: 'sports-med-overuse-injuries-overview', targetType: 'concept', relationship: 'parent', label: 'Overuse Injuries' },
  ],

  tags: {
    systems: ['musculoskeletal'],
    topics: ['bone-injury', 'overuse-injury', 'sports-medicine'],
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

export default stressFractures;
