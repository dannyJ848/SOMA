/**
 * Lithotripsy - Educational Content
 */

import { EducationalContent } from '../../types';

export const lithotripsy: EducationalContent = {
  id: 'procedure-lithotripsy',
  type: 'topic',
  name: 'Lithotripsy',
  alternateNames: ['ESWL', 'Shock Wave Lithotripsy', 'Stone Breaking'],

  levels: {
    1: {
      level: 1,
      summary: 'Lithotripsy uses shock waves or lasers to break kidney stones into small pieces that can pass in your urine.',
      explanation: `Lithotripsy is a way to break up kidney stones without surgery.

**Types:**
- **ESWL** (Shock Wave): Waves from outside the body break the stone
- **Laser**: A small scope with laser breaks stones from inside

**Shock Wave Lithotripsy (ESWL):**
- No incisions needed
- You lie on a table or in water
- Machine sends focused shock waves
- Stone breaks into small pieces
- Pieces pass in urine over days to weeks

**What to Expect:**
- May need light sedation
- Takes about 45-60 minutes
- May have bruising on skin
- Blood in urine is normal
- Drink lots of water after

**When Used:**
- Kidney stones up to 2 cm
- Some ureteral stones
- Not all stones are treatable this way`,
      keyTerms: [
        { term: 'lithotripsy', definition: 'Procedure to break up kidney stones' },
        { term: 'ESWL', definition: 'Extracorporeal shock wave lithotripsy - breaking stones with external waves' },
        { term: 'shock wave', definition: 'Sound waves focused to break stones' },
      ],
      analogies: [
        'ESWL is like using focused sound waves to shatter a glass - the stone breaks while the body stays safe.',
      ],
      examples: [
        'A 1 cm kidney stone might need 2000-3000 shock waves to break into passable fragments.',
      ],
    },
    2: {
      level: 2,
      summary: 'Lithotripsy encompasses ESWL (external shock waves) and intracorporeal techniques (laser, electrohydraulic, ultrasonic) for renal and ureteral stone fragmentation.',
      explanation: `## Extracorporeal Shock Wave Lithotripsy (ESWL)

**Mechanism:**
- Electromagnetic, electrohydraulic, or piezoelectric generators
- Focused acoustic waves
- Cavitation and stress forces fragment stone

**Ideal Candidates:**
- Stone <2 cm
- Renal pelvis or upper calyx
- Low skin-to-stone distance
- Low stone density (<1000 HU)

**Contraindications:**
- Pregnancy
- Uncontrolled coagulopathy
- Untreated UTI
- Obstruction distal to stone

## Intracorporeal Lithotripsy

**Holmium:YAG Laser:**
- Most common
- Works on all stone types
- Precise fragmentation
- Dusting or fragmenting technique

**Thulium Fiber Laser:**
- Newer technology
- Faster ablation
- More efficient dusting

**Ultrasonic:**
- Rigid probe vibration
- Simultaneous aspiration
- Used in PCNL

**Electrohydraulic:**
- Spark-generated shock wave
- Risk of tissue injury
- Less commonly used

## Procedure Comparison

| Feature | ESWL | Ureteroscopy/Laser |
|---------|------|-------------------|
| Anesthesia | Sedation | General typically |
| Stone-free rate | Lower | Higher |
| Fragments | Pass spontaneously | Removed |
| Complications | Fewer | Higher |
| Re-treatment | Often needed | Less often |`,
      keyTerms: [
        { term: 'Holmium laser', definition: 'Most common laser for ureteroscopic stone treatment' },
        { term: 'dusting', definition: 'Laser technique creating fine stone powder' },
        { term: 'stone density', definition: 'Hounsfield units on CT predicting fragmentation success' },
      ],
      analogies: [
        'Laser lithotripsy is like using a precision tool to carve the stone, while ESWL is more like a jackhammer from outside.',
      ],
    },
    3: {
      level: 3,
      summary: 'Lithotripsy technique selection depends on stone size, location, composition, and anatomy, with outcomes influenced by technical parameters and patient factors.',
      explanation: `## ESWL Technical Factors

**Shock Wave Parameters:**
- Energy level: Start low, ramp up
- Rate: 60-120 shocks/minute (slower may be better)
- Number: Usually 2500-3500
- Focal zone: Match to stone size

**Targeting:**
- Fluoroscopy or ultrasound
- Real-time adjustment
- Respiratory gating

**Outcomes by Location:**
| Location | Stone-Free Rate |
|----------|-----------------|
| Renal pelvis | 75-85% |
| Upper calyx | 70-80% |
| Lower calyx | 50-60% |
| Proximal ureter | 80-85% |

## Laser Lithotripsy Settings

**Holmium:YAG:**
- Energy: 0.2-1.2 J
- Frequency: 5-20 Hz
- Fiber size: 200-365 μm

**Dusting vs Fragmentation:**
- Dusting: Low energy, high frequency
- Fragmentation: High energy, lower frequency
- Active extraction: Basket removal

**Moses Technology:**
- Pulse delivery optimization
- Reduced retropulsion
- More efficient ablation

## Predictors of Success

**Favorable:**
- Stone <1 cm
- Stone density <1000 HU
- Short skin-to-stone distance
- No lower pole
- No anatomical abnormalities

**Unfavorable:**
- Stone >2 cm
- Cystine or brushite composition
- Lower pole with narrow infundibulum
- Obesity (>30 BMI)
- Ectopic kidney

## Complications

**ESWL:**
- Renal hematoma (rare serious)
- Steinstrasse (stone fragments blocking)
- Sepsis (with infected stones)
- Hypertension (controversial)

**Ureteroscopy:**
- Ureteral injury
- Stricture (1-3%)
- Retained stones
- Stent symptoms`,
      keyTerms: [
        { term: 'steinstrasse', definition: 'Column of stone fragments blocking ureter after ESWL', pronunciation: 'SHTINE-stras-uh' },
        { term: 'skin-to-stone distance', definition: 'CT measurement predicting ESWL success' },
        { term: 'Moses technology', definition: 'Optimized laser pulse delivery reducing stone retropulsion' },
      ],
      clinicalNotes: 'Lower pole stones have worse clearance with ESWL due to gravity working against fragment passage. Consider ureteroscopy for larger lower pole stones.',
    },
    4: {
      level: 4,
      summary: 'Advanced lithotripsy includes PCNL techniques, combination approaches, and management of complex stone burdens.',
      explanation: `## Percutaneous Nephrolithotomy (PCNL)

**Indications:**
- Stones >2 cm
- Staghorn calculi
- Lower pole stones >1.5 cm
- Anatomical abnormalities
- ESWL/URS failures

**Access:**
- Prone or supine position
- Fluoroscopy or ultrasound guided
- Posterior calyx preferred
- 24-30 Fr tract (standard)

**Lithotripsy Devices:**
- Ultrasonic
- Pneumatic (ballistic)
- Laser
- Combination devices

**Mini-PCNL Variants:**
- Mini-PCNL (12-20 Fr)
- Ultra-mini (11-13 Fr)
- Micro-PCNL (4.8 Fr)

## Combination Approaches

**ECIRS:**
- Endoscopic Combined Intrarenal Surgery
- Simultaneous antegrade and retrograde
- Staghorn stones
- Complex anatomy

**Sandwich Therapy:**
- PCNL for debulking
- ESWL for residual fragments

## Staghorn Stone Management

**Planning:**
- Full metabolic workup
- CT for anatomy
- Culture with sensitivities
- May need staged procedures

**Approach:**
- Multiple access tracts
- Flexible nephroscopy
- Complete clearance goal
- Prolonged antibiotics if struvite

## Special Situations

**Horseshoe Kidney:**
- Upper pole access
- Flexible nephroscopy
- URS often preferred

**Transplant Kidney:**
- Increased infection risk
- Careful positioning
- Often anterior access

**Bleeding Disorders:**
- Correct coagulopathy
- Avoid ESWL
- Consider laser URS`,
      keyTerms: [
        { term: 'PCNL', definition: 'Percutaneous nephrolithotomy - kidney access for stone removal' },
        { term: 'ECIRS', definition: 'Combined antegrade and retrograde approach for complex stones' },
        { term: 'staghorn calculus', definition: 'Large stone filling the collecting system' },
      ],
      clinicalNotes: 'Staghorn stones require complete clearance to prevent regrowth. Struvite staghorns are associated with infection and recur rapidly if fragments remain.',
    },
    5: {
      level: 5,
      summary: 'Expert lithotripsy practice encompasses novel technologies, robotic-assisted techniques, and quality improvement in stone management.',
      explanation: `## Emerging Technologies

**Burst Wave Lithotripsy:**
- Short bursts of focused ultrasound
- Potential office-based treatment
- Clinical trials ongoing

**Thulium Fiber Laser:**
- Super-pulsed mode
- Faster dusting
- Reduced thermal injury
- Growing adoption

**Robotic Stone Surgery:**
- Robotic pyelolithotomy
- Complex reconstruction
- Learning curve considerations

## Quality Metrics

**Stone-Free Definition:**
- <4mm fragments traditionally
- True stone-free preferred
- Follow-up imaging protocol

**Performance Benchmarks:**
- First-procedure stone-free rates
- Complication rates
- Re-intervention rates

## Research Directions

**Tissue Regeneration:**
- Minimizing renal injury
- Protective strategies
- Long-term function preservation

**Predictive Models:**
- AI-based outcome prediction
- Personalized treatment selection
- Stone composition prediction

## Training and Competency

**Simulation:**
- ESWL simulators
- PCNL access trainers
- URS simulation

**Assessment:**
- Procedure volume requirements
- Objective structured assessment
- Proctored cases

## Global Access

**Resource Considerations:**
- ESWL availability
- Disposable costs
- Training infrastructure

**Guideline Adaptation:**
- Local expertise
- Equipment availability
- Cost-effectiveness

## Patient-Centered Outcomes

**Shared Decision Making:**
- Treatment options discussion
- Stone-free rates
- Recovery time
- Re-intervention risk

**Quality of Life:**
- Post-procedure symptoms
- Stent burden
- Return to activities`,
      keyTerms: [
        { term: 'burst wave lithotripsy', definition: 'Emerging technology using focused ultrasound for office-based treatment' },
        { term: 'clinically insignificant residual fragments', definition: '<4mm fragments traditionally considered acceptable' },
        { term: 'stone-free rate', definition: 'Primary outcome measure in stone treatment studies' },
      ],
      clinicalNotes: 'The definition of stone-free matters. Residual fragments, even small ones, have recurrence rates of 20-40% at 5 years. Complete clearance should be the goal when safely achievable.',
    },
  },

  media: [],
  citations: [
    {
      id: 'aua-stones-surgical',
      type: 'article',
      title: 'Surgical Management of Stones',
      source: 'AUA/Endourological Society Guidelines',
    },
  ],
  crossReferences: [
    { targetId: 'condition-kidney-stones', targetType: 'condition', relationship: 'related', label: 'Kidney Stones' },
  ],
  tags: {
    systems: ['urinary'],
    topics: ['procedures', 'stones'],
    clinicalRelevance: 'high',
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default lithotripsy;
