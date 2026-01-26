/**
 * Fluid Management - Kidney Disease Management
 */

import { EducationalContent } from '../../types';

export const FLUID_MANAGEMENT: EducationalContent = {
  id: 'kidney-disease-fluid-management',
  type: 'concept',
  name: 'Fluid Management in Kidney Disease',
  alternateNames: ['Fluid restriction', 'Volume management', 'Hydration in CKD'],

  levels: {
    1: {
      level: 1,
      summary: 'Managing how much you drink is important with kidney disease because your kidneys may not be able to get rid of extra fluid as well.',
      explanation: `**Why Fluid Management Matters**
Healthy kidneys adjust how much urine you make based on how much you drink. Damaged kidneys may not do this well, leading to fluid buildup.

**Signs of Too Much Fluid:**
- Swelling in ankles, legs, or hands
- Shortness of breath
- Weight gain
- High blood pressure
- Feeling bloated

**Fluid Recommendations:**
- Early CKD: Usually no restriction, stay hydrated
- Advanced CKD: May need to limit fluids
- On dialysis: Usually 32-48 oz (1-1.5 L) per day

**Tips to Manage Fluid:**
1. Measure your drinks
2. Use smaller cups
3. Suck on ice chips (count as fluid!)
4. Avoid salty foods (make you thirsty)
5. Keep a fluid log

**Hidden Fluids:**
- Ice cream
- Gelatin
- Soups
- Watermelon and other watery fruits

**When on Dialysis:**
- Weigh yourself daily
- Limit fluid between sessions
- Tell your team if gaining too much weight`,
      keyTerms: [
        { term: 'fluid restriction', definition: 'Limiting how much you drink each day' },
        { term: 'edema', definition: 'Swelling caused by extra fluid in your body' },
        { term: 'fluid overload', definition: 'When too much fluid builds up in your body' },
      ],
      analogies: ['Your kidneys are like drains. When the drain is slow, you need to put less water in the sink or it will overflow.'],
      examples: ['Tom measures all his drinks in a pitcher. He knows he can have 1 liter total, so he divides it throughout the day.'],
    },
    2: {
      level: 2,
      summary: 'Fluid management in CKD requires individualization based on stage, urine output, dialysis status, and volume status assessment to prevent both overhydration and dehydration.',
      explanation: `**Fluid Balance Principles:**

*Non-Dialysis CKD:*
| Stage | Approach |
|-------|----------|
| G1-G3 | Usually no restriction; adequate hydration |
| G4-G5 | Individualize based on volume status, urine output |

*Dialysis Patients:*
| Modality | Recommendation |
|----------|----------------|
| Hemodialysis | Limit to 1-1.5 L/day (32-48 oz) |
| Peritoneal dialysis | May have more liberal allowance |

**Assessment of Volume Status:**

*Clinical Signs:*
- Weight changes
- Edema (peripheral, pulmonary)
- Blood pressure
- Jugular venous pressure
- Urine output

*Interdialytic Weight Gain (IDWG):*
- Target: <3-5% of dry weight
- Excessive IDWG associated with worse outcomes

**Thirst Management:**
- Control sodium intake
- Suck on ice chips or frozen fruit
- Rinse mouth without swallowing
- Chew gum (sugar-free)
- Keep busy to distract from thirst

**Special Considerations:**
- Diabetes: Higher thirst, need careful balance
- Heart failure: Strict fluid management often needed
- Hot weather: May need adjustment`,
      keyTerms: [
        { term: 'interdialytic weight gain', definition: 'Weight gained between hemodialysis sessions from fluid' },
        { term: 'dry weight', definition: 'Target weight after dialysis with optimal fluid status' },
        { term: 'volume status', definition: 'Assessment of total body fluid level' },
      ],
    },
    3: {
      level: 3,
      summary: 'Evidence-based fluid management integrates clinical and objective volume assessment with individualized targets to optimize cardiovascular outcomes and symptom control in CKD.',
      explanation: `**Physiology of Volume Regulation in CKD:**

*Impaired Regulation:*
\`\`\`
Normal: Fluid intake → Kidneys adjust urine output → Balance

CKD:
- Reduced nephron mass
- Impaired concentrating/diluting
- Salt/water retention tendency
- Neurohormonal activation
\`\`\`

**Volume Assessment:**

*Clinical:*
| Finding | Suggests |
|---------|----------|
| Weight gain | Volume overload |
| Edema | Interstitial fluid excess |
| Elevated JVP | Central volume excess |
| Dyspnea | Pulmonary congestion |

*Objective Measures:*
- Bioimpedance analysis
- Relative blood volume monitoring (HD)
- Natriuretic peptides
- Lung ultrasound (B-lines)

**Evidence for Targets:**

*IDWG and Outcomes:*
- IDWG >4% dry weight: Increased mortality
- Associated with LVH, hypertension
- Quality of life impact

*Dry Weight Determination:*
- Clinical assessment (BP, symptoms, exam)
- Bioimpedance-guided probing
- Echocardiography (IVC assessment)

**Management Strategies:**

*Dietary:*
- Sodium restriction (primary)
- Fluid as secondary consideration
- Patient education

*Pharmacological:*
- Loop diuretics (residual renal function)
- Dialysis prescription optimization

*Behavioral:*
- Self-monitoring
- Thirst management strategies`,
      keyTerms: [
        { term: 'bioimpedance', definition: 'Technique measuring body composition including fluid status' },
        { term: 'relative blood volume', definition: 'Hemoconcentration during dialysis indicating fluid removal' },
        { term: 'B-lines', definition: 'Lung ultrasound finding indicating pulmonary congestion' },
      ],
      clinicalNotes: 'Sodium restriction more important than fluid restriction in controlling volume. Bioimpedance can guide dry weight assessment. IDWG targets should balance volume control with quality of life. Preserve residual renal function in dialysis patients.',
    },
    4: {
      level: 4,
      summary: 'Advanced fluid management integrates precision volume assessment, individualized targets, and technology-enabled monitoring for optimal cardiorenal outcomes.',
      explanation: `**Precision Volume Management:**

*Multi-Modal Assessment:*
\`\`\`
Clinical Assessment
+ Bioimpedance
+ Cardiac imaging
+ Biomarkers
+ Symptom tracking
         ↓
Integrated Volume Status
         ↓
Personalized Fluid Target
\`\`\`

**Bioimpedance-Guided Management:**

*BCM (Body Composition Monitor):*
- Measures overhydration volume
- Guides dry weight
- RCT evidence for improved outcomes in some studies
- May reduce intradialytic hypotension

**Cardiorenal Considerations:**

*Heart Failure in CKD:*
- Strict volume management
- Balance between congestion and underfilling
- Diuretic resistance common
- May need ultrafiltration

*Peritoneal Dialysis:*
- Ultrafiltration via osmotic gradient
- Icodextrin for long dwells
- Residual renal function impacts

**Sodium and Volume:**

*Low Sodium Dialysate:*
- May improve volume control
- Reduces thirst
- Intradialytic hypotension concern

*Dietary Sodium:*
- Primary driver of thirst
- Reduces IDWG more than fluid restriction
- 2g/day target challenging but effective`,
      keyTerms: [
        { term: 'BCM', definition: 'Body Composition Monitor using bioimpedance to assess hydration' },
        { term: 'overhydration volume', definition: 'Excess fluid above normal hydration state' },
        { term: 'icodextrin', definition: 'PD solution for enhanced ultrafiltration' },
      ],
      clinicalNotes: 'Bioimpedance may reduce cardiovascular morbidity in dialysis. Sodium restriction is key to controlling volume and thirst. Heart failure requires careful volume optimization. Technology-guided management is increasingly available.',
    },
    5: {
      level: 5,
      summary: 'State-of-the-art fluid management leverages continuous monitoring, AI-guided targets, and systems integration for personalized volume optimization.',
      explanation: `**Precision Fluid Management:**

*Continuous Monitoring:*
\`\`\`
Wearable Sensors
- Impedance
- Weight
- Activity
- BP

Dialysis Machine Data
- Blood volume
- UFR
- Kt/V

Integration → Real-Time Adjustment
\`\`\`

**AI/ML Applications:**

*Predictive Models:*
- Intradialytic hypotension prediction
- Optimal dry weight estimation
- Personalized UFR limits
- Volume trajectory forecasting

**Home Monitoring:**

*Elements:*
- Connected scales
- BP monitors
- Symptom tracking apps
- Telehealth integration

*Benefits:*
- Earlier intervention
- Patient engagement
- Data for clinical decisions

**Future Directions:**

- Implantable volume sensors
- Closed-loop ultrafiltration
- Personalized sodium prescriptions
- Microbiome-volume relationships`,
      keyTerms: [
        { term: 'UFR', definition: 'Ultrafiltration rate; speed of fluid removal during dialysis' },
        { term: 'intradialytic hypotension', definition: 'Blood pressure drop during hemodialysis from fluid removal' },
      ],
      clinicalNotes: 'AI models may predict intradialytic complications. Home monitoring enables proactive management. Closed-loop systems are research phase. Individualization remains key principle.',
    },
  },

  media: [],
  citations: [{ id: 'kdoqi-cvd', type: 'article', title: 'KDOQI CVD in Dialysis', source: 'AJKD' }],
  crossReferences: [{ targetId: 'kidney-disease-ckd-stages', targetType: 'topic', relationship: 'related', label: 'CKD Stages' }],
  tags: { systems: ['renal', 'cardiovascular'], topics: ['CKD', 'dialysis', 'fluid management'], keywords: ['fluid restriction', 'volume management', 'dialysis'], clinicalRelevance: 'high' },
  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
