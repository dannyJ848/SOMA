/**
 * Diabetic Ketoacidosis (DKA) Management
 *
 * Emergency management of DKA including pathophysiology,
 * diagnosis, fluid/insulin protocols, and monitoring.
 */

import { EducationalContent } from '../../types';

export const dkaManagement: EducationalContent = {
  id: 'condition-dka-management',
  type: 'condition',
  name: 'Diabetic Ketoacidosis (DKA)',
  nameEs: 'Cetoacidosis Diabetica',
  alternateNames: ['DKA', 'Diabetic Ketoacidosis', 'Ketoacidosis'],

  levels: {
    1: {
      level: 1,
      summary: 'DKA is a dangerous emergency that happens when the body has very little insulin and starts burning fat for energy, making the blood too acidic.',
      explanation: `**What is DKA?**

When your body cannot use sugar for energy (because of too little insulin), it starts burning fat instead. This makes chemicals called ketones that turn your blood acidic, which is very dangerous.

**Warning Signs:**
- Nausea and vomiting
- Belly pain
- Breathing fast and deep
- Fruity-smelling breath
- Feeling very confused or sleepy
- Very thirsty and urinating a lot

**What Causes It?**
- Missing insulin doses
- Getting sick (infection, flu)
- New diabetes not yet diagnosed
- Insulin pump failure

**What to Do:**
- Go to the emergency room immediately
- Treatment includes IV fluids, insulin, and careful monitoring
- Usually better in 12-24 hours with proper treatment`,
      keyTerms: [
        { term: 'ketones', definition: 'Chemicals made when your body burns fat instead of sugar for energy' },
        { term: 'acidosis', definition: 'When your blood becomes too acidic, which is dangerous' },
        { term: 'IV fluids', definition: 'Fluids given directly into your vein to rehydrate you' },
      ],
      analogies: [
        'DKA is like a car running on the wrong fuel -- it works for a short time but damages the engine.',
        'Ketones in DKA are like exhaust fumes building up inside the body instead of being cleared away.',
      ],
      examples: [
        'A teenager with Type 1 diabetes who skips insulin for two days may develop DKA with vomiting and confusion.',
      ],
    },
    2: {
      level: 2,
      summary: 'DKA is a metabolic emergency with hyperglycemia, ketonemia, and anion gap metabolic acidosis requiring urgent IV fluid resuscitation, insulin infusion, and electrolyte replacement.',
      explanation: `## Diagnostic Criteria

| Feature | DKA | HHS |
|---------|-----|-----|
| Glucose | >250 mg/dL | >600 mg/dL |
| pH | <7.3 | >7.3 |
| Bicarbonate | <18 mEq/L | >18 mEq/L |
| Ketones | Positive | Minimal |
| Anion gap | >12 | Variable |
| Mental status | Variable | Often altered |

## DKA Severity

| Severity | pH | Bicarbonate | Mental Status |
|----------|-----|-------------|---------------|
| Mild | 7.25-7.30 | 15-18 | Alert |
| Moderate | 7.00-7.24 | 10-14 | Drowsy |
| Severe | <7.00 | <10 | Stupor/coma |

## Treatment Pillars
1. **Fluids:** Normal saline 1-1.5 L/hour initially
2. **Insulin:** IV regular insulin drip (0.1-0.14 units/kg/hr)
3. **Potassium:** Replace when <5.3 mEq/L (before insulin if <3.3)
4. **Monitoring:** Glucose hourly, BMP every 2-4 hours
5. **Transition:** Switch to subcutaneous insulin when gap closes and patient eating`,
      keyTerms: [
        { term: 'anion gap', definition: 'Calculation (Na - Cl - HCO3) that helps identify type of acidosis; elevated in DKA' },
        { term: 'HHS', definition: 'Hyperosmolar hyperglycemic state -- similar to DKA but without significant ketosis, more common in Type 2' },
        { term: 'ketonemia', definition: 'Presence of ketone bodies in the blood' },
        { term: 'metabolic acidosis', definition: 'Low blood pH caused by acid buildup or bicarbonate loss' },
      ],
      analogies: [
        'The three pillars of DKA treatment (fluids, insulin, potassium) are like three legs of a stool -- remove one and it falls over.',
      ],
    },
    3: {
      level: 3,
      summary: 'DKA pathophysiology involves absolute or relative insulin deficiency with counterregulatory hormone excess, leading to hepatic ketogenesis, osmotic diuresis, and anion gap metabolic acidosis requiring protocolized management.',
      explanation: `## Pathophysiology

**Hormonal Imbalance:**
- Insulin deficiency (absolute in T1DM, relative in T2DM)
- Counterregulatory hormone excess: glucagon, cortisol, catecholamines, GH
- Glucagon:insulin ratio drives ketogenesis

**Metabolic Cascade:**
1. Increased lipolysis -> free fatty acids to liver
2. Hepatic beta-oxidation -> acetoacetate, beta-hydroxybutyrate, acetone
3. Unrestrained gluconeogenesis and glycogenolysis
4. Hyperglycemia -> osmotic diuresis -> dehydration
5. Ketoacid accumulation -> metabolic acidosis
6. Potassium shifts: intracellular depletion despite normal/high serum K+

## Treatment Protocol

**Fluid Resuscitation:**
\`\`\`
Hour 1: NS 1-1.5 L (15-20 mL/kg)
Hours 2-4: NS 250-500 mL/hr (adjust for Na+)
- Corrected Na+ high: Switch to 0.45% NS
- Corrected Na+ normal/low: Continue NS
When glucose <200: Add D5 to fluids
Total deficit: Typically 5-7 L
\`\`\`

**Insulin Protocol:**
\`\`\`
Start: Regular insulin 0.1-0.14 units/kg/hr IV
Goal: Glucose decrease 50-75 mg/dL/hour
If glucose falls too fast: Reduce rate, add dextrose
When glucose <200: Reduce to 0.02-0.05 units/kg/hr
Do NOT stop insulin until gap closes
\`\`\`

**Potassium Management:**
| Serum K+ | Action |
|----------|--------|
| >5.3 | Hold K+, recheck in 2h |
| 3.3-5.3 | 20-40 mEq/L in each liter of IV fluid |
| <3.3 | Hold insulin, aggressive K+ replacement |

**Bicarbonate:**
- Only if pH <6.9
- 100 mEq NaHCO3 in 400 mL water over 2 hours
- Controversial; may worsen intracellular acidosis

## Resolution Criteria
- Glucose <200 mg/dL
- Anion gap <12 (or normalized)
- Serum bicarbonate >=15 mEq/L
- Venous pH >7.3
- Patient tolerating oral intake`,
      keyTerms: [
        { term: 'beta-hydroxybutyrate', definition: 'Primary ketone body in DKA; most accurate lab marker of ketosis' },
        { term: 'osmotic diuresis', definition: 'Excessive urination caused by high glucose pulling water into urine' },
        { term: 'corrected sodium', definition: 'Sodium adjusted for hyperglycemia: add 1.6 mEq for each 100 mg/dL glucose above 100' },
        { term: 'anion gap closure', definition: 'Return of anion gap to normal range indicating resolution of ketoacidosis' },
      ],
      clinicalNotes: 'Never stop insulin infusion based on glucose alone -- continue until anion gap closes. Cerebral edema is the most feared complication in pediatric DKA (0.5-1% of cases); avoid rapid osmolality shifts. Overlap subcutaneous insulin by 1-2 hours before stopping the drip.',
    },
    4: {
      level: 4,
      summary: 'Advanced DKA management addresses euglycemic DKA, SGLT2i-associated DKA, mixed DKA/HHS, cerebral edema prevention, and ICU-level monitoring including subcutaneous insulin transition protocols.',
      explanation: `## Euglycemic DKA

**Definition:** DKA with glucose <250 mg/dL

**Causes:**
- SGLT2 inhibitor use (empagliflozin, dapagliflozin, canagliflozin)
- Pregnancy
- Partial treatment (some insulin given)
- Poor oral intake / starvation ketosis overlap

**SGLT2i-Associated DKA:**
- Mechanism: Glycosuria lowers glucose while ketogenesis continues
- May present with near-normal glucose
- High index of suspicion needed
- Hold SGLT2i 3-5 days before surgery
- Check ketones if any DKA symptoms on SGLT2i

## Mixed DKA/HHS

- Overlapping features in ~30% of hyperglycemic emergencies
- Glucose often >600 with significant ketosis
- Higher mortality than pure DKA
- More aggressive fluid resuscitation needed
- Osmolality monitoring critical (effective osm >320 = HHS component)

## Cerebral Edema in Pediatric DKA

**Risk Factors:**
- New-onset diabetes, younger age
- Severe acidosis at presentation
- Rapid glucose correction (>100 mg/dL/hr)
- Excessive early fluid boluses
- Failure of sodium to rise with treatment

**Prevention:**
- Gradual fluid replacement over 24-48 hours
- Target glucose decline 50-75 mg/dL/hr
- Use isotonic fluids
- Avoid bicarbonate in children

**Treatment:**
- Mannitol 0.5-1 g/kg IV or hypertonic saline 3% (2.5-5 mL/kg)
- Head of bed elevation, reduce IV rate
- Intubation if GCS declining

## Transition to Subcutaneous Insulin

\`\`\`
Readiness Criteria:
- Anion gap closed, pH >7.3, HCO3 >=15
- Patient eating
- Glucose <200 mg/dL

Protocol:
1. Calculate total daily dose from drip rate x 24 hours
2. Split: 50% basal, 50% bolus
3. Give first SC dose 1-2 hours BEFORE stopping drip
4. Resume home regimen or start new if naive
\`\`\`

## Recurrent DKA Prevention
- Identify precipitant (non-adherence most common)
- Diabetes education and social work
- Sick day rules: Never stop basal insulin
- Ketone monitoring at home (blood preferred over urine)
- Continuous glucose monitoring reduces DKA risk`,
      keyTerms: [
        { term: 'euglycemic DKA', definition: 'DKA presenting with blood glucose <250 mg/dL; associated with SGLT2 inhibitors and pregnancy' },
        { term: 'effective osmolality', definition: '2(Na+) + glucose/18; excludes BUN; >320 suggests HHS component' },
        { term: 'sick day rules', definition: 'Patient guidelines for managing diabetes during illness to prevent DKA' },
      ],
      clinicalNotes: 'SGLT2i-associated euglycemic DKA is increasingly common and easily missed. Always check beta-hydroxybutyrate in patients on SGLT2 inhibitors with nausea, vomiting, or malaise even if glucose is normal. FDA recommends holding SGLT2i at least 3 days before scheduled surgery.',
    },
    5: {
      level: 5,
      summary: 'Contemporary DKA research addresses subcutaneous insulin protocols, closed-loop management, biomarker-driven resuscitation, DKA prevention through technology, and the molecular mechanisms underlying ketoacidosis-related organ injury.',
      explanation: `## Subcutaneous Insulin Protocols for Mild-Moderate DKA

**Evidence:**
- Multiple RCTs show SC rapid-acting insulin non-inferior to IV for mild-moderate DKA
- Allows management outside ICU
- Cost savings and reduced resource utilization

**Protocol (Mild DKA, pH >7.15):**
\`\`\`
SC lispro/aspart 0.3 units/kg initial bolus
Then 0.1-0.2 units/kg every 1-2 hours
Transition to standard regimen when resolved
\`\`\`

## Molecular Mechanisms of DKA Organ Injury

**Endothelial Dysfunction:**
- Ketoacids activate NF-kB inflammatory pathway
- Increased vascular permeability
- Procoagulant state (elevated vWF, PAI-1)
- May contribute to stroke and thrombosis risk

**Cardiac Effects:**
- Acidosis depresses myocardial contractility
- Electrolyte shifts (K+, Mg2+, PO4) cause arrhythmias
- Troponin elevation common (not always MI)

**Renal Injury:**
- AKI from dehydration and hypoperfusion
- Rhabdomyolysis from hypokalemia and hypophosphatemia
- Recovery usually complete with treatment

## Technology-Based DKA Prevention

**Closed-Loop Systems:**
- Automated insulin delivery reduces DKA rates by 50-60%
- Ketone alerts (investigational dual sensors)
- Remote monitoring with caregiver alerts

**CGM Impact on DKA:**
- Real-time CGM use associated with 50% reduction in DKA
- Predictive alerts for rising glucose
- Integration with EHR for hospital detection

## Research Frontiers

- Point-of-care beta-hydroxybutyrate for ED triage
- AI-driven DKA management protocols
- Continuous ketone monitoring devices
- GLP-1 RA as adjunct in DKA recovery (investigational)
- Personalized fluid resuscitation using bioimpedance
- Mitochondrial-targeted therapies for organ protection`,
      keyTerms: [
        { term: 'NF-kB', definition: 'Nuclear factor kappa-B; master inflammatory transcription factor activated by ketoacids' },
        { term: 'subcutaneous DKA protocol', definition: 'Non-ICU management of mild DKA using SC rapid-acting insulin injections' },
        { term: 'continuous ketone monitoring', definition: 'Investigational wearable sensor measuring interstitial ketone levels in real time' },
      ],
      clinicalNotes: 'Subcutaneous insulin protocols for mild DKA are evidence-based and increasingly adopted, reducing ICU burden. The combination of CGM + automated insulin delivery represents the most effective DKA prevention strategy. VTE prophylaxis should be considered in all hospitalized DKA patients given the procoagulant state.',
    },
  },

  media: [],
  citations: [
    {
      id: 'ada-dka-consensus-2024',
      type: 'article',
      title: 'Hyperglycemic Crises in Diabetes: DKA and HHS',
      authors: ['Kitabchi AE', 'Umpierrez GE', 'Miles JM', 'Fisher JN'],
      source: 'Diabetes Care',
    },
  ],
  crossReferences: [
    { targetId: 'endocrinology-diabetes-type1-patient', targetType: 'condition', relationship: 'related', label: 'Type 1 Diabetes' },
    { targetId: 'endocrinology-diabetes-type2-patient', targetType: 'condition', relationship: 'related', label: 'Type 2 Diabetes' },
    { targetId: 'condition-addison-disease', targetType: 'condition', relationship: 'see-also', label: 'Adrenal Insufficiency' },
  ],
  tags: {
    systems: ['endocrine'],
    topics: ['diabetes', 'emergency medicine', 'critical care'],
    keywords: ['DKA', 'ketoacidosis', 'insulin', 'anion gap', 'metabolic acidosis'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'emergency-medicine', 'endocrinology'] },
  },
  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default dkaManagement;
