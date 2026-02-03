import { EducationalContent } from '../types';

export const fluidCalculations: EducationalContent = {
  id: 'calculation-fluid',
  type: 'concept',
  name: 'IV Fluid Calculations',
  alternateNames: ['Fluid Therapy', 'Intravenous Fluids', 'Fluid Management', 'Maintenance Fluids'],

  levels: {
    1: {
      level: 1,
      summary: 'IV fluid calculations help doctors figure out how much fluid a patient needs to stay hydrated, replace losses, and maintain proper body function.',
      explanation: `## Why Do Patients Need IV Fluids?

The body needs water to function properly. Sometimes patients cannot drink enough or are losing too much fluid. IV fluids go directly into the bloodstream through a vein to:
- Prevent dehydration
- Replace lost fluids
- Deliver medications
- Provide nutrition

## Types of IV Fluids

**Crystalloids (salt-based solutions):**
- Normal saline (salt water similar to blood)
- Lactated Ringer\'s (like saline with extra minerals)
- Dextrose solutions (sugar water)

**Colloids (contain proteins or starches):**
- Albumin
- Used for specific situations

## Basic Fluid Needs

Adults typically need about 30-35 mL of fluid per kilogram of body weight per day.

Example: A 70 kg adult needs about 2,100-2,450 mL per day

## The 4-2-1 Rule for Children

A simple way to calculate children\'s fluid needs:
- First 10 kg: 4 mL/kg/hour
- Next 10 kg: 2 mL/kg/hour
- Each kg after 20 kg: 1 mL/kg/hour

Example: A 25 kg child:
- First 10 kg: 10 x 4 = 40 mL/hour
- Next 10 kg: 10 x 2 = 20 mL/hour
- Remaining 5 kg: 5 x 1 = 5 mL/hour
- Total: 65 mL/hour

## When Extra Fluid is Needed

Patients may need extra fluids for:
- Fever (add 10% per degree above normal)
- Vomiting or diarrhea
- Surgery
- Burns
- Bleeding

## Important Safety Checks

- Monitor for fluid overload (swelling, breathing difficulty)
- Check kidney function
- Watch electrolyte levels
- Adjust for heart conditions`,
      keyTerms: [
        { term: 'IV fluids', definition: 'Liquids given through a vein directly into the bloodstream' },
        { term: 'dehydration', definition: 'Condition when body does not have enough water' },
        { term: 'electrolytes', definition: 'Minerals in body fluids that carry electric charges' },
        { term: 'crystalloid', definition: 'Type of IV fluid containing salts dissolved in water' },
      ],
      analogies: [
        'IV fluids are like putting gas in a car - the body needs a constant supply to keep running smoothly.',
        'Think of body fluids like oil in an engine - too little causes damage, too much causes problems too.',
      ],
      examples: [
        'A patient who has been vomiting may need 1-2 liters of normal saline to replace lost fluids.',
        'A child with fever needs extra fluids - if normally needing 60 mL/hour, with fever of 102 F they might need 66 mL/hour.',
      ],
    },
    2: {
      level: 2,
      summary: 'Intravenous fluid therapy involves calculating maintenance requirements, replacing deficits, addressing ongoing losses, and selecting appropriate fluid types based on patient condition and electrolyte status.',
      explanation: `## Fluid Compartment Physiology

**Total Body Water (TBW):**
- 60% of body weight in adult males
- 50% of body weight in adult females
- Higher in children, lower in elderly

**Fluid Distribution:**
- Intracellular: 2/3 of TBW
- Extracellular: 1/3 of TBW
  - Interstitial: 3/4 of extracellular
  - Intravascular: 1/4 of extracellular (plasma)

## Maintenance Fluid Requirements

**Adults:**
- 25-30 mL/kg/day
- Or: 1,500 mL for first 20 kg + 20 mL/kg for remaining weight
- Alternative: 35 mL/kg/day

**Holliday-Segar Method (Pediatrics):**
| Weight | Hourly Rate | Daily Volume |
|--------|-------------|--------------|
| 0-10 kg | 4 mL/kg | 100 mL/kg |
| 10-20 kg | 40 mL + 2 mL/kg for each kg >10 | 1,000 mL + 50 mL/kg for each kg >10 |
| >20 kg | 60 mL + 1 mL/kg for each kg >20 | 1,500 mL + 20 mL/kg for each kg >20 |

## Fluid Deficit Calculation

**Estimating Dehydration:**

| Severity | Weight Loss | Clinical Signs |
|----------|-------------|----------------|
| Mild | 5% | Thirst, dry mouth |
| Moderate | 10% | Sunken eyes, poor skin turgor, tachycardia |
| Severe | 15% | Hypotension, shock, altered mental status |

**Formula:**
---
Deficit (mL) = % Dehydration x Weight (kg) x 1,000
---

## Types of Crystalloid Solutions

**Normal Saline (0.9% NaCl):**
- 154 mEq/L Na+, 154 mEq/L Cl-
- Isotonic
- Risk of hyperchloremic metabolic acidosis

**Lactated Ringer\'s:**
- 130 Na+, 4 K+, 109 Cl-, 28 lactate, 3 Ca2+
- More physiologic than saline
- Preferred for resuscitation, surgery

**Dextrose 5% in Water (D5W):**
- Provides free water
- Becomes hypotonic as glucose metabolized
- Good for free water deficit

**Balanced Crystalloids (Plasma-Lyte, Normosol):**
- More physiologic electrolyte composition
- Less acidosis than saline
- Increasingly preferred

## Fluid Replacement Strategies

**Deficit Replacement:**
- Replace 50% in first 8 hours
- Replace remaining 50% over next 16 hours
- Add maintenance fluids separately

**Ongoing Losses:**
- Measure output (NG tube, drains, diarrhea)
- Replace mL for mL with appropriate fluid
- Consider electrolyte content of losses

## Special Considerations

**Cardiac Patients:**
- Restrict fluids to prevent overload
- Monitor carefully

**Renal Failure:**
- Fluid restriction often needed
- Avoid potassium-containing fluids

**Surgical Patients:**
- NPO maintenance plus deficits
- Third spacing considerations`,
      keyTerms: [
        { term: 'maintenance fluids', definition: 'IV fluids given to meet daily physiologic requirements' },
        { term: 'fluid deficit', definition: 'Calculated volume of fluid loss requiring replacement' },
        { term: 'isotonic', definition: 'Solution with same osmolarity as blood (about 275-295 mOsm/L)' },
        { term: 'hypotonic', definition: 'Solution with lower osmolarity than blood' },
        { term: 'hypertonic', definition: 'Solution with higher osmolarity than blood' },
      ],
      analogies: [
        'Fluid compartments are like rooms in a house - water can move between them but needs different approaches to get there.',
      ],
      examples: [
        'A 70 kg adult with 10% dehydration needs 7,000 mL deficit replacement plus 2,100 mL maintenance over 24 hours.',
        'Post-operative patient with NG tube putting out 200 mL/hour needs additional IV fluids to replace these losses.',
      ],
    },
    3: {
      level: 3,
      summary: 'Fluid therapy requires understanding osmolarity, tonicity, sodium and water balance, and the physiological principles governing fluid movement between compartments to appropriately treat dehydration, resuscitate patients, and manage electrolyte disorders.',
      explanation: `## Osmolarity and Tonicity

**Osmolarity:**
Total concentration of solutes in solution
- Normal plasma: 275-295 mOsm/L
- Calculated: 2(Na) + glucose/18 + BUN/2.8

**Tonicity:**
Effective osmolarity - solutes that cannot cross membranes
- Sodium and its anions are primary determinants
- Urea and glucose (until insulin acts) do not contribute to tonicity

**Fluid Shifts:**
- Hypotonic solution → cells swell (water enters)
- Hypertonic solution → cells shrink (water leaves)
- Isotonic solution → no net movement

## Sodium and Water Balance

**Total Body Sodium:**
- Primarily extracellular
- Regulated by kidneys via RAAS, ADH, natriuretic peptides

**Serum Sodium Concentration:**
Reflects ratio of total body sodium to total body water

**Darrow-Yannet Diagrams:**
Visualize changes in:
- Extracellular fluid volume
- Intracellular fluid volume
- Osmolarity

## Types of Dehydration

**Isotonic Dehydration (most common):**
- Equal loss of water and sodium
- Serum Na+ normal (135-145 mEq/L)
- Treat with isotonic fluids (NS, LR)

**Hypotonic Dehydration:**
- More sodium lost than water
- Serum Na+ <135 mEq/L
- Water shifts into cells
- Correct slowly to avoid central pontine myelinolysis

**Hypertonic Dehydration:**
- More water lost than sodium
- Serum Na+ >145 mEq/L
- Water shifts out of cells
- Correct slowly to avoid cerebral edema

## Resuscitation Fluids

**Goals:**
- Restore tissue perfusion
- Maintain hemodynamic stability
- Preserve organ function

**Fluid Challenge:**
- 500-1000 mL crystalloid over 15-30 minutes
- Assess response (BP, HR, urine output, lactate)
- Reassess and repeat as needed

**Conservative vs Liberal Strategies:**

Studies (FACTT, CLASSIC) suggest:
- Conservative fluid strategy may be better in ICU
- Avoid fluid overload
- Balance resuscitation needs with removal

## Electrolyte Content of Body Fluids

| Fluid | Na (mEq/L) | K (mEq/L) | Cl (mEq/L) | HCO3 (mEq/L) |
|-------|------------|-----------|------------|--------------|
| Plasma | 140 | 4 | 100 | 24 |
| Gastric | 60 | 10 | 90 | 0 |
| Bile | 145 | 5 | 100 | 35 |
| Pancreatic | 140 | 5 | 75 | 115 |
| Small bowel | 140 | 5 | 100 | 25 |
| Diarrhea | 50 | 35 | 40 | 50 |
| Sweat | 50 | 5 | 55 | 0 |

**Replacement Strategy:**
Match fluid type to electrolyte losses

## Burn Fluid Resuscitation

**Parkland Formula:**
---
Fluid (mL) = 4 mL x Weight (kg) x %TBSA burned
---

**Administration:**
- 1/2 in first 8 hours from time of burn
- 1/2 in next 16 hours
- Plus maintenance fluids

**Alternative:** Modified Brooke formula (2 mL instead of 4 mL)

**Monitoring:**
- Urine output (0.5-1 mL/kg/hour adults, 1-2 mL/kg/hour children)
- Adjust fluid rate as needed

## Third Spacing

Fluid shifts to non-functional spaces:
- Bowel obstruction
- Peritonitis
- Major trauma
- Surgery

May need aggressive fluid replacement despite normal vital signs initially.`,
      keyTerms: [
        { term: 'osmolarity', definition: 'Total solute concentration in solution measured in mOsm/L' },
        { term: 'tonicity', definition: 'Effective osmolarity determining water movement across membranes' },
        { term: 'isotonic dehydration', definition: 'Equal loss of water and solutes; serum sodium normal' },
        { term: 'hypotonic dehydration', definition: 'Greater sodium loss than water; serum sodium low' },
        { term: 'hypertonic dehydration', definition: 'Greater water loss than sodium; serum sodium high' },
        { term: 'third spacing', definition: 'Sequestration of fluid in non-functional extracellular spaces' },
      ],
    },
    4: {
      level: 4,
      summary: 'Advanced fluid management integrates dynamic assessments of fluid responsiveness, goal-directed therapy principles, and individualized approaches to fluid selection while avoiding both hypovolemia and fluid overload in critically ill patients.',
      explanation: `## Fluid Responsiveness Assessment

Static measures (poor predictors): CVP, PAOP

**Dynamic Measures:**

Passive leg raise (PLR):
- Increase preload by raising legs
- Measure stroke volume or pulse pressure change
- >10% increase suggests fluid responsiveness

Pulse pressure variation (PPV):
- Requires regular rhythm, controlled ventilation
- >13% suggests fluid responsiveness
- Limited in spontaneous breathing, arrhythmias

Stroke volume variation (SVV):
- Similar to PPV
- >10-15% suggests responsiveness

IVC diameter change with respiration:
- >50% collapse suggests fluid responsiveness
- Not reliable in spontaneously breathing patients

Echocardiographic assessment:
- LV end-diastolic area
- Mitral inflow patterns
- Tissue Doppler imaging

## Goal-Directed Fluid Therapy (GDFT)

**Concept:**
Optimize stroke volume using fluid challenges

**Protocol:**
1. Give 250 mL fluid bolus
2. Measure stroke volume
3. If SV increases >10%, repeat
4. If SV increases <10%, stop (at Frank-Starling plateau)

**Evidence:**
- GIFTASUP, enhanced recovery after surgery (ERAS) protocols
- May reduce complications in high-risk surgery
- Mixed results in sepsis

## Fluid Selection Controversies

**Saline vs Balanced Crystalloids:**

SMART and SALT-ED trials:
- Lower major adverse kidney events with balanced solutions
- Less hyperchloremic acidosis
- Small absolute benefit

Recommendations:
- Prefer balanced crystalloids (LR, Plasma-Lyte)
- Limit large-volume saline administration
- Consider patient-specific factors

**Albumin Considerations:**

SAFE trial: Albumin equivalent to saline for ICU resuscitation
ALBIOS: Albumin plus crystalloid in severe sepsis showed modest benefit

Indications for albumin:
- Spontaneous bacterial peritonitis with ascites
- Hepatorenal syndrome
- Large volume paracentesis
- Severe hypoalbuminemia with peripheral edema

**Hydroxyethyl Starch (HES):**
- 6S, CHEST trials: Increased mortality and renal injury
- Not recommended for resuscitation
- Removed from market in many countries

## Critical Care Fluid Management

**Early Goal-Directed Therapy (EGDT) Revisited:**

Original Rivers protocol (2001):
- Aggressive early fluid resuscitation
- CVP targets
- Blood transfusion targets
- Inotrope use

ProCESS, ARISE, ProMISe trials (2014-2015):
- Protocolized care vs usual care
- No benefit to aggressive EGDT
- Importance of early recognition and antibiotics

**Current Approach:**
- Early adequate fluid resuscitation
- Dynamic assessment of fluid status
- Avoid fluid overload
- Early de-resuscitation (fluid removal) when stable

**Fluid Overload:**

Consequences:
- Tissue edema
- Impaired wound healing
- Pulmonary edema
- Cardiac compromise
- Gut edema (ileus, bacterial translocation)
- Renal congestion

Recognition:
- Weight gain
- Peripheral/central edema
- Rising CVP
- Decreased oxygenation
- Worsening renal function

**Conservative Fluid Strategy:**
- FACTT trial: Conservative fluid management after initial resuscitation in ALI
- Reduced ICU days, improved lung function
- No increase in shock or renal failure

## Specialized Fluid Scenarios

**Trauma:**
- Damage control resuscitation
- Permissive hypotension (before hemorrhage control)
- Balanced blood product administration
- Minimize crystalloid

**Sepsis:**
- 30 mL/kg crystalloid in first 3 hours (Surviving Sepsis)
- Then dynamic assessment
- Vasopressors if needed
- Conservative approach after stabilization

**Neurocritical Care:**
- Maintain euvolemia
- Avoid hypotonic fluids (cerebral edema risk)
- Mannitol or hypertonic saline for raised ICP
- Triple-H therapy for vasospasm (hypertension, hypervolemia, hemodilution)

**Cardiac Surgery:**
- CPB circuit prime
- Fluid shifts common
- Goal-directed therapy beneficial
- Early diuresis post-op`,
      keyTerms: [
        { term: 'fluid responsiveness', definition: 'Ability of heart to increase stroke volume in response to fluid' },
        { term: 'pulse pressure variation', definition: 'Respiratory variation in pulse pressure predicting fluid responsiveness' },
        { term: 'goal-directed therapy', definition: 'Protocolized fluid administration to optimize hemodynamic parameters' },
        { term: 'de-resuscitation', definition: 'Active fluid removal after initial resuscitation phase' },
        { term: 'damage control resuscitation', definition: 'Balanced blood product approach minimizing crystalloid in trauma' },
      ],
      clinicalNotes: 'Dynamic measures (PLR, PPV) are superior to static measures (CVP) for assessing fluid responsiveness. Use balanced crystalloids (LR, Plasma-Lyte) preferentially over normal saline. Avoid hydroxyethyl starches. After initial resuscitation in sepsis, adopt conservative fluid strategy to prevent fluid overload. Albumin may be beneficial in specific situations (spontaneous bacterial peritonitis, hepatorenal syndrome).',
    },
    5: {
      level: 5,
      summary: 'Contemporary fluid therapy emphasizes precision medicine approaches with individualized physiologic assessments, machine learning predictions, and protocolized strategies while maintaining fundamental understanding of fluid physiology and avoiding both under- and over-resuscitation.',
      explanation: `## Precision Fluid Management

**Personalized Fluid Therapy:**

Individual factors affecting fluid needs:
- Body composition
- Cardiac function
- Vascular tone
- Capillary permeability
- Organ function
- Genetic variations (ACE, ADRB2 polymorphisms)

**Closed-Loop Systems:**
Automated fluid administration based on:
- Continuous monitoring
- Algorithm-driven decisions
- Reduced variability in care

**Machine Learning Applications:**
- Predicting fluid responsiveness
- Identifying optimal fluid strategy
- Risk stratification for fluid overload
- Predicting AKI development

## Microcirculatory Assessment

**Beyond Macrocirculation:**

Traditional endpoints (MAP, CVP) do not reflect:
- Microvascular flow
- Tissue perfusion
- Cellular oxygenation

**Assessment Tools:**
- Sublingual microcirculation imaging
- Tissue oxygen saturation (StO2)
- Near-infrared spectroscopy
- Lactate clearance
- Capillary refill time

**Clinical Implications:**
- Macrocirculation may be normal while microcirculation impaired
- Different fluid strategies may be needed
- Vasodilators may improve microcirculation

## Fluid Biomarkers

**Guiding Fluid Therapy:**

NGAL (neutrophil gelatinase-associated lipocalin):
- Early marker of kidney injury
- May guide fluid optimization

Copeptin:
- Copeptin increase suggests volume depletion
- May help differentiate causes of hyponatremia

Pro-adrenomedullin:
- Marker of vascular integrity
- Predicts fluid requirements

## Specialized Fluid Protocols

**Enhanced Recovery After Surgery (ERAS):**

Components:
- Preoperative optimization
- Avoidance of prolonged fasting
- Carbohydrate loading
- Goal-directed intraoperative fluids
- Early mobilization
- Early oral intake

Evidence: Reduced complications, shorter stays

**Restrictive vs Liberal Strategies:**

Restrictive fluid management:
- Zero-balance approach
- Weight-neutral post-op day 1
- Reduced complications in many surgeries

Liberal fluid management:
- May be needed in high-risk patients
- Trauma, extensive fluid shifts
- Individualized approach

**Daily Fluid Balance Management:**

Fluid stewardship:
- Daily assessment of fluid status
- Active de-escalation when appropriate
- Diuretic use
- Renal replacement therapy for refractory overload

## Pediatric Considerations

**Neonatal Fluid Management:**

Unique physiology:
- Higher body water content
- Immature kidneys
- Limited concentrating ability
- Insensible water losses high (immature skin)

Fluid requirements change rapidly postnatally:
- Day 1: 60-80 mL/kg/day
- Day 3: 80-100 mL/kg/day
- Day 5: 100-150 mL/kg/day

**Peds Specifics:**
- Holliday-Segar method
- Insensible losses: 30-50 mL/kg/day
- Fever adds 12% per degree C

## Future Directions

**Wearable Technology:**
- Continuous hydration monitoring
- Bioimpedance analysis
- Real-time fluid status assessment

**Bioartificial Kidney:**
- Wearable dialysis
- Continuous fluid and electrolyte management
- Reduces need for intermittent fluid boluses

**Organ-Specific Perfusion:**
- Kidney: Renal Doppler, resistive index
- Brain: Transcranial Doppler, ICP monitoring
- Gut: Gastric tonometry

**Artificial Intelligence:**
- Predictive models for fluid needs
- Automated decision support
- Integration of multi-modal data

**Regenerative Approaches:**
- Stem cell therapy for endothelium
- Reducing capillary leak
- Improving microcirculation

## Clinical Integration

**Daily Fluid Management Checklist:**
1. Assess fluid status (exam, I/O, weight)
2. Evaluate fluid responsiveness if indicated
3. Consider fluid type (balanced vs saline)
4. Set clear goals and limits
5. Reassess frequently
6. Plan for de-escalation
7. Monitor for complications`,
      keyTerms: [
        { term: 'microcirculation', definition: 'Network of smallest blood vessels where oxygen and nutrient exchange occurs' },
        { term: 'fluid stewardship', definition: 'Systematic approach to optimizing fluid therapy and avoiding fluid overload' },
        { term: 'bioimpedance analysis', definition: 'Method to estimate body water compartments using electrical resistance' },
        { term: 'closed-loop fluid administration', definition: 'Automated system adjusting fluid delivery based on continuous physiologic feedback' },
        { term: 'macrocirculation', definition: 'Large vessel blood flow; heart, arteries, veins' },
      ],
      clinicalNotes: 'Precision fluid management requires integrating multiple assessment modalities. Use dynamic measures of fluid responsiveness rather than static pressures. Balanced crystalloids are preferred over saline. Implement daily fluid stewardship rounds. Consider microcirculatory assessment in refractory shock. Machine learning tools are emerging to guide fluid therapy. Individualize based on patient comorbidities and clinical scenario.',
    },
  },

  media: [],
  citations: [],
  crossReferences: [],

  tags: {
    systems: ['renal', 'cardiovascular'],
    topics: ['clinical-calculations', 'critical-care', 'surgery'],
    keywords: ['IV fluids', 'fluid therapy', 'resuscitation', 'maintenance fluids', 'dehydration'],
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};
