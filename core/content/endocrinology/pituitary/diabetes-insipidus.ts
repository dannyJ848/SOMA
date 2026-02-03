/**
 * Diabetes Insipidus - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const diabetesInsipidus: EducationalContent = {
  id: 'condition-diabetes-insipidus',
  type: 'condition',
  name: 'Diabetes Insipidus',
  alternateNames: ['DI', 'Vasopressin Deficiency', 'ADH Deficiency', 'Arginine Vasopressin Deficiency'],
  hpoId: 'HP:0000873',

  levels: {
    1: {
      level: 2,
      summary: 'Diabetes insipidus is a condition where you cannot concentrate your urine, causing extreme thirst and frequent urination. It is different from diabetes mellitus (sugar diabetes).',
      explanation: `Diabetes insipidus (DI) is not related to blood sugar. It happens when your body cannot properly control water balance. You make too much dilute urine and feel very thirsty.

**What happens:**
- You urinate large amounts (3-20 liters per day)
- You feel very thirsty and drink a lot
- Your urine is very clear and diluted
- You may get dehydrated if you cannot drink enough

**Types:**
- Central DI: Brain does not make enough ADH hormone
- Nephrogenic DI: Kidneys do not respond to ADH
- Dipsogenic DI: Excessive thirst causes the problem
- Gestational DI: During pregnancy

**Common causes:**
- Brain surgery or injury
- Tumors
- Genetic conditions
- Kidney problems
- Certain medications

**Treatment:**
- Desmopressin medication (for central DI)
- Treat underlying cause
- Drink enough water
- Low-salt diet (for some types)`,
      keyTerms: [
        { term: 'diabetes insipidus', definition: 'A disorder of water balance causing excessive urination and thirst' },
        { term: 'ADH', definition: 'Antidiuretic hormone; helps kidneys concentrate urine' },
        { term: 'desmopressin', definition: 'Medication that replaces ADH' },
      ],
      analogies: [
        'Your kidneys are like a water filter. ADH tells the filter to recycle water back to your body. Without ADH, the filter lets all the water go down the drain.',
      ],
      examples: [
        'A person who has surgery on their pituitary gland and afterward needs to urinate every hour and is constantly thirsty may have central diabetes insipidus.',
      ],
    },
    2: {
      level: 2,
      summary: 'Diabetes insipidus is characterized by hypotonic polyuria (>3L/day) due to ADH deficiency (central) or renal resistance (nephrogenic). Diagnosed by water deprivation test showing inability to concentrate urine.',
      explanation: `## Types and Causes

**Central DI (ADH Deficiency):**
| Cause | Examples |
|-------|----------|
| Tumors | Craniopharyngioma, pituitary adenoma, metastases |
| Surgery | Transsphenoidal surgery |
| Trauma | Head injury, Sheehan syndrome |
| Infiltrative | Histiocytosis, sarcoidosis |
| Genetic | Autosomal dominant (AVP mutations) |
| Idiopathic | 30% of cases |

**Nephrogenic DI (Renal Resistance):**
| Cause | Examples |
|-------|----------|
| Genetic | V2 receptor mutations, AQP2 mutations |
| Drugs | Lithium (most common), demeclocycline |
| Electrolyte | Hypercalcemia, hypokalemia |
| Kidney disease | Chronic kidney disease, obstruction |
| Systemic | Amyloidosis, sarcoidosis |

**Primary Polydipsia (Dipsogenic DI):**
- Excessive water intake
- Psychogenic or hypothalamic thirst dysfunction
- Suppresses ADH
- Can cause washout of medullary gradient

## Clinical Features

**Symptoms:**
- Polyuria: >3 L/day (often 5-20 L)
- Polydipsia: Intense thirst, preference for cold water
- Nocturia
- Dehydration if access to water limited

**Urine:**
- Very dilute (specific gravity <1.005)
- Low osmolality (<300 mOsm/kg)
- Clear colorless

## Diagnosis

**Water Deprivation Test:**
1. Deprive water, measure urine and serum osmolality
2. Normal: Urine osmolality >800 or 2-3x serum
3. DI: Urine remains dilute, serum osmolality rises
4. Give desmopressin:
   - Central DI: Urine concentrates
   - Nephrogenic DI: No response

**AVP/Copeptin Measurement:**
- Low AVP in central DI
- Elevated AVP in nephrogenic DI

**MRI:**
- Look for pituitary/hypothalamic pathology
- Posterior pituitary bright spot absent in central DI

## Differential Diagnosis

**Must rule out:**
- Diabetes mellitus (check glucose)
- Primary polydipsia
- Diuretic use
- Chronic kidney disease`,
      keyTerms: [
        { term: 'water deprivation test', definition: 'Diagnostic test measuring urine concentration ability' },
        { term: 'nephrogenic', definition: 'Originating in the kidney' },
        { term: 'polyuria', definition: 'Excessive urine production' },
      ],
    },
    3: {
      level: 3,
      summary: 'Diabetes insipidus management requires distinguishing central from nephrogenic causes, treating with desmopressin for central DI, and addressing underlying causes while preventing dehydration and water intoxication.',
      explanation: `## Central DI Treatment

**Desmopressin (DDAVP):**
- Synthetic analog of ADH
- Selective V2 receptor agonist (no V1 pressor effect)

**Routes:**
| Route | Dosing | Notes |
|-------|--------|-------|
| Intranasal | 10-40 mcg/day (divided) | Most common; variable absorption |
| Oral | 0.1-0.8 mg/day (divided) | Higher doses needed |
| Subcutaneous | 1-4 mcg/day | For post-op, NPO |

**Monitoring:**
- Urine output and thirst
- Serum sodium
- Avoid water intoxication
- Dose adjustment needed for illness

## Nephrogenic DI Treatment

**Treating Underlying Cause:**
- Stop offending drugs (lithium, demeclocycline)
- Correct hypercalcemia, hypokalemia
- Address obstruction

**Symptomatic Management:**

*Thiazide Diuretics:*
- Paradoxically reduce urine output
- Cause mild volume contraction
- Enhance proximal sodium/water reabsorption
- Often combined with amiloride

*Amiloride:*
- Potassium-sparing diuretic
- Blocks lithium entry into collecting duct
- Useful for lithium-induced DI

*NSAIDs:*
- Indomethacin 50 mg TID
- Reduce GFR, enhance water reabsorption
- Side effects limit use

*Low-Solute Diet:*
- Reduce protein and salt
- Decreases obligatory urine output

**Desmopressin:**
- Partial effect in some nephrogenic DI
- Higher doses may be needed

## Gestational DI

**Cause:**
- Vasopressinase from placenta degrades ADH
- Usually in second/third trimester
- Resolves postpartum

**Treatment:**
- Desmopressin (resistant to vasopressinase)
- Monitor closely
- May need dose adjustment as pregnancy progresses

## Post-Surgical DI

**Patterns:**
1. Transient DI (most common)
2. Permanent DI
3. Triphasic response:
   - Phase 1: DI (1-5 days post-op)
   - Phase 2: SIADH (ADH release from dying neurons)
   - Phase 3: Permanent DI (weeks later)

**Management:**
- IV desmopressin if NPO
- Monitor sodium closely
- Fluid management per urine output`,
      keyTerms: [
        { term: 'desmopressin', definition: 'Synthetic ADH analog used to treat central DI' },
        { term: 'water intoxication', definition: 'Dangerous dilution of blood sodium from excess water' },
        { term: 'vasopressinase', definition: 'Enzyme that breaks down ADH; elevated in pregnancy' },
      ],
      clinicalNotes: 'Warn patients with DI to never restrict water intake, even overnight. Water intoxication from desmopressin is a serious risk - patients should have breakthrough urination to confirm dose is not too high.',
    },
    4: {
      level: 4,
      summary: 'Advanced DI management includes managing adipsic DI where thirst is impaired, perioperative care for pituitary surgery, long-term desmopressin monitoring, and managing complex cases like autoimmune hypophysitis.',
      explanation: `## Adipsic Diabetes Insipidus

**Definition:**
- DI without thirst response
- Most dangerous form
- Cannot rely on thirst to drive fluid intake

**Causes:**
- Hypothalamic lesions
- Craniopharyngioma
- Histiocytosis
- Congenital (rare)

**Management:**
- Fixed fluid prescription
- Daily weights
- Regular serum sodium monitoring
- Desmopressin on fixed schedule
- "Sip and avoid" protocol
- Often requires care coordination

**Sip and Avoid Protocol:**
- Drink to schedule (not thirst)
- Avoid drinking if serum sodium low
- Complex, requires experienced team

## Perioperative Management

**Before Surgery:**
- Ensure desmopressin working
- Morning dose day of surgery
- IV access

**After Pituitary Surgery:**
- Monitor urine output hourly
- Check urine specific gravity
- Check serum sodium every 4-6 hours
- May develop DI, SIADH, or both

**Fluid Management:**
- Replace urine output mL for mL (with desmopressin)
- OR use desmopressin + maintenance fluids
- Avoid both SIADH and hypernatremia

**Discharge Planning:**
- Patient education on recognizing DI
- Prescription for desmopressin
- Sodium monitoring plan

## Long-term Management

**Monitoring:**
- Annual serum sodium
- More frequent if polyuria changes
- Assess for underlying condition progression

**Desmopressin Adjustment:**
- May need less with age
- More with exercise, heat
- Less with illness (risk of hyponatremia)
- "Drug holidays" to prevent hyponatremia

**Emergencies:**
- If vomiting/illness: Continue desmopressin but ensure can drink
- Medical alert bracelet
- Emergency contact information

## Complex Cases

**Lithium-Induced Nephrogenic DI:**
- Often irreversible even after stopping lithium
- Thiazide + amiloride
- Consider alternative psychiatric medications

**Autoimmune Hypophysitis:**
- Can cause central DI
- May improve with immunosuppression
- Often associated with other pituitary deficiencies

**Craniopharyngioma:**
- Common cause of DI
- Often permanent after surgery
- May have multiple hormone deficiencies`,
      keyTerms: [
        { term: 'adipsic', definition: 'Without thirst; dangerous when combined with DI' },
        { term: 'SIADH', definition: 'Syndrome of inappropriate ADH; opposite of DI' },
        { term: 'sip and avoid', definition: 'Protocol for managing fluid in adipsic DI' },
      ],
      clinicalNotes: 'Adipsic DI is one of the most challenging endocrine conditions to manage. These patients require specialized care with strict fluid protocols and frequent monitoring to prevent dangerous sodium fluctuations.',
    },
    5: {
      level: 5,
      summary: 'Contemporary DI research focuses on copeptin as a diagnostic biomarker, novel desmopressin formulations, genetic diagnosis and counseling, and improved management strategies for the most challenging cases.',
      explanation: `## Copeptin in Diagnosis

**Advantages:**
- More stable than AVP
- Easier to measure
- Can use with hypertonic saline stimulation
- May replace water deprivation test

**Hypertonic Saline Test:**
- Faster than water deprivation
- Measure copeptin
- <4.9 pmol/L suggests central DI
- High copeptin suggests nephrogenic

**Clinical Implementation:**
- Increasingly used in specialized centers
- May become standard of care

## Novel Formulations

**Desmopressin:**
- Oral lyophilisate (melt)
- Faster absorption
- Better for morning administration

**Long-acting:**
- Research into longer-acting forms
- Reduce dosing frequency
- Improve adherence

**Selective V2 Agonists:**
- Newer compounds
- Reduced V1 effects
- Better safety profile

## Genetics

**Central DI:**
- AVP gene mutations (autosomal dominant)
- WFS1 (Wolfram syndrome)
- Genetic counseling available

**Nephrogenic DI:**
- AVPR2 (X-linked recessive)
- AQP2 (autosomal recessive/dominant)
- Prenatal diagnosis possible

**Gene Therapy:**
- Research phase
- Potential for genetic forms
- Technical challenges

## Wolfram Syndrome

**Features:**
- Diabetes insipidus
- Diabetes mellitus
- Optic atrophy
- Deafness
- DIDMOAD

**Genetics:**
- WFS1 mutations
- ER stress, calcium dysregulation

**Management:**
- Complex, multisystem
- DI often difficult to control
- Poor prognosis

## Research Directions

**Aquaporin Modulators:**
- AQP2 trafficking enhancers
- For nephrogenic DI
- Small molecule approaches

**Stem Cell Therapy:**
- For central DI
- Restore ADH-producing neurons
- Experimental

**Biomarkers:**
- Better monitoring tools
- Real-time hydration status
- Implantable sensors

## Quality of Life

**Patient Concerns:**
- Sleep disruption (nocturia)
- Travel challenges
- Emergency preparedness
- Cost of medications

**Support:**
- Patient education materials
- Support groups
- Emergency action plans
- School/workplace accommodations`,
      keyTerms: [
        { term: 'copeptin', definition: 'Stable surrogate marker for ADH; diagnostic use' },
        { term: 'Wolfram syndrome', definition: 'Genetic disorder with DI, DM, optic atrophy, deafness' },
        { term: 'AQP2', definition: 'Aquaporin-2 water channel; mutated in some nephrogenic DI' },
      ],
      clinicalNotes: 'Copeptin measurement with hypertonic saline stimulation is emerging as a faster, safer alternative to the traditional water deprivation test for diagnosing DI.',
    },
  },

  media: [],
  citations: [
    {
      id: 'di-guidelines-2019',
      type: 'article',
      title: 'Diagnosis and Management of Diabetes Insipidus',
      source: 'British Journal of Hospital Medicine',
      authors: ['Cuesta M', 'Thompson CJ', 'Reimondo G', 'et al.'],
    },
  ],
  crossReferences: [
    { targetId: 'anatomy-pituitary-gland', targetType: 'structure', relationship: 'related', label: 'Pituitary Gland' },
    { targetId: 'condition-hypopituitarism', targetType: 'condition', relationship: 'related', label: 'Hypopituitarism' },
  ],
  tags: {
    systems: ['endocrine'],
    topics: ['endocrinology', 'nephrology'],
    keywords: ['diabetes insipidus', 'DI', 'ADH', 'desmopressin', 'polyuria'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'endocrinology'] },
  },
  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default diabetesInsipidus;
