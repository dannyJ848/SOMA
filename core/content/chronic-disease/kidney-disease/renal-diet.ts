/**
 * Renal Diet - Kidney Disease Management
 */

import { EducationalContent } from '../../types';

export const RENAL_DIET: EducationalContent = {
  id: 'kidney-disease-renal-diet',
  type: 'concept',
  name: 'Kidney-Friendly Diet',
  alternateNames: ['Renal diet', 'CKD diet', 'Dialysis diet'],

  levels: {
    1: {
      level: 1,
      summary: 'Eating the right foods helps protect your kidneys and keeps you feeling your best when you have kidney disease.',
      explanation: `**Why Diet Matters**
When kidneys do not work well, certain nutrients build up in your blood. A kidney-friendly diet limits these nutrients to help you feel better.

**Key Nutrients to Watch:**

*Sodium (Salt):*
- Makes you retain water and raises blood pressure
- Limit to less than 2,300 mg per day
- Avoid: canned soups, processed meats, salty snacks

*Potassium:*
- Too much can affect your heart
- May need to limit high-potassium foods
- High potassium: bananas, oranges, potatoes, tomatoes

*Phosphorus:*
- Too much weakens bones
- Limit packaged foods with added phosphorus
- High phosphorus: dairy, nuts, cola, processed foods

*Protein:*
- Amount depends on your stage and if on dialysis
- Earlier stages: moderate protein
- On dialysis: may need more protein

**Simple Tips:**
1. Use herbs and spices instead of salt
2. Rinse canned vegetables to reduce sodium
3. Choose fresh foods over packaged
4. Read nutrition labels
5. Work with a kidney dietitian`,
      keyTerms: [
        { term: 'sodium', definition: 'A mineral in salt that can raise blood pressure and cause fluid retention' },
        { term: 'potassium', definition: 'A mineral important for heart function that kidneys normally regulate' },
        { term: 'phosphorus', definition: 'A mineral that can build up and weaken bones in kidney disease' },
      ],
      analogies: ['Think of your kidneys as filters. When the filter is weak, you need to put less "debris" (certain nutrients) into the system so it does not get overloaded.'],
      examples: ['Instead of a banana (high potassium), Tom has an apple for his snack. Instead of canned soup, Maria makes homemade with low-sodium broth.'],
    },
    2: {
      level: 2,
      summary: 'Medical nutrition therapy in CKD involves individualized management of sodium, potassium, phosphorus, and protein based on disease stage, lab values, and dialysis status.',
      explanation: `**Nutrient Guidelines by Stage:**

| Nutrient | Non-Dialysis CKD | Hemodialysis | Peritoneal Dialysis |
|----------|------------------|--------------|---------------------|
| Sodium | <2,300 mg | <2,300 mg | <2,300 mg |
| Potassium | Individualized | 2,000-3,000 mg | Usually liberal |
| Phosphorus | 800-1,000 mg | 800-1,000 mg | 800-1,000 mg |
| Protein | 0.6-0.8 g/kg (CKD 3-5) | 1.0-1.2 g/kg | 1.2-1.5 g/kg |

**Sodium Management:**
- Limit processed foods
- Cook at home
- Read labels (look for <600 mg/meal)
- Avoid salt substitutes (contain potassium)

**Potassium Management:**
- Monitor blood levels
- High-potassium foods: bananas, oranges, potatoes, tomatoes, beans
- Lower-potassium alternatives: apples, grapes, cabbage, rice
- Leaching technique for potatoes

**Phosphorus Management:**
- Avoid food additives (PHOS on label)
- Limit dairy, nuts, seeds
- Take phosphate binders with meals if prescribed
- Choose fresh over processed

**Protein Considerations:**
- Earlier CKD: May slow progression with lower protein
- On dialysis: Protein losses require higher intake
- High-quality protein sources (fish, chicken, eggs)`,
      keyTerms: [
        { term: 'phosphate binder', definition: 'Medication taken with meals to prevent phosphorus absorption' },
        { term: 'protein restriction', definition: 'Limiting protein intake to reduce kidney workload in CKD' },
        { term: 'leaching', definition: 'Soaking vegetables to remove potassium' },
      ],
    },
    3: {
      level: 3,
      summary: 'CKD nutrition therapy integrates evidence-based macronutrient and micronutrient targets with individualized dietary patterns to slow progression, manage complications, and maintain nutritional status.',
      explanation: `**Evidence-Based Recommendations:**

*KDIGO/KDOQI Guidance:*
| Component | Recommendation |
|-----------|----------------|
| Protein (non-dialysis, non-diabetic) | 0.55-0.6 g/kg/day with education |
| Protein (diabetic CKD) | 0.6-0.8 g/kg/day |
| Sodium | <2,300 mg/day (<90 mmol) |
| Potassium | Individualized based on serum levels |
| Phosphorus | Maintain normal serum levels |

**Protein and Progression:**

*Lower Protein Diets:*
- May slow eGFR decline
- Reduces uremic symptoms
- Risk of malnutrition
- Requires dietitian supervision

*Dietary Patterns:*
| Pattern | Components | CKD Evidence |
|---------|------------|--------------|
| Mediterranean | EVOO, fish, plants | Favorable outcomes |
| DASH (modified) | Low sodium, high plant | BP and albuminuria |
| Plant-based | Plant-predominant protein | May slow progression |

**Mineral Management:**

*Phosphorus:*
\`\`\`
Sources:
- Organic (food): 40-60% absorbed
- Inorganic (additives): 80-100% absorbed
- Animal > plant bioavailability

Strategy: Avoid additives, plant-focused
\`\`\`

*Potassium:*
- Target: Maintain serum 3.5-5.0 mEq/L
- Restrict only if elevated
- Plant-based diets may have lower bioavailability
- Cooking reduces potassium content`,
      keyTerms: [
        { term: 'KDOQI', definition: 'Kidney Disease Outcomes Quality Initiative; provides nutrition guidelines' },
        { term: 'very low protein diet', definition: 'Protein intake 0.28-0.43 g/kg/day with amino acid supplementation' },
        { term: 'inorganic phosphorus', definition: 'Food additive phosphorus with high bioavailability' },
      ],
      clinicalNotes: 'Low-protein diets require dietitian supervision to prevent malnutrition. Plant-based diets may benefit CKD through lower bioavailable phosphorus and potassium. Avoid blanket potassium restriction - individualize based on labs. Prioritize avoiding phosphorus additives.',
    },
    4: {
      level: 4,
      summary: 'Advanced CKD nutrition integrates precision dietary approaches, metabolic considerations, and emerging evidence on plant-based patterns and gut microbiome to optimize renal and cardiovascular outcomes.',
      explanation: `**Precision Nutrition in CKD:**

*Individualization Factors:*
\`\`\`
Assessment:
- CKD stage and trajectory
- Dialysis modality (if applicable)
- Diabetes and glycemic control
- Cardiovascular comorbidities
- Nutritional status (PEW risk)
- Serum levels (K, P, albumin)
- Dietary preferences/culture

Personalized Plan:
- Caloric needs
- Macronutrient distribution
- Specific nutrient targets
- Food-based guidance
\`\`\`

**Protein-Energy Wasting (PEW):**

*Diagnostic Criteria:*
| Domain | Criteria |
|--------|----------|
| Biochemical | Low albumin, prealbumin, cholesterol |
| Body composition | Low BMI, muscle wasting, fat loss |
| Muscle mass | Decreased |
| Dietary intake | Unintentionally low |

*Intervention:*
- Ensure adequate energy (30-35 kcal/kg)
- Sufficient protein for stage
- Address inflammation
- Consider oral nutrition supplements

**Gut-Kidney Axis:**

*Microbiome Alterations in CKD:*
- Uremic dysbiosis
- Increased uremic toxin precursors
- Reduced short-chain fatty acids
- Intestinal barrier dysfunction

*Dietary Strategies:*
- Fiber (resistant starch, prebiotic)
- Plant-based proteins
- Synbiotic supplementation (investigational)

**Metabolic Acidosis:**

*Impact:*
- Accelerates muscle catabolism
- Worsens bone disease
- May accelerate CKD progression

*Dietary Management:*
- Plant-based diet increases bicarbonate
- Fruit and vegetables as base-producing
- Reduces dietary acid load`,
      keyTerms: [
        { term: 'protein-energy wasting', definition: 'Malnutrition state in CKD with muscle and fat loss' },
        { term: 'gut-kidney axis', definition: 'Bidirectional relationship between gut microbiome and kidney function' },
        { term: 'uremic dysbiosis', definition: 'Altered gut microbiome composition in kidney disease' },
        { term: 'dietary acid load', definition: 'Net acid-producing effect of diet affecting bicarbonate levels' },
      ],
      clinicalNotes: 'Balance protein restriction against PEW risk. Plant-predominant diets offer multiple benefits in CKD. Metabolic acidosis is modifiable through diet and supplements. Gut microbiome is emerging therapeutic target.',
    },
    5: {
      level: 5,
      summary: 'State-of-the-art CKD nutrition leverages precision metabolomics, microbiome science, and digital nutrition tools for personalized dietary management.',
      explanation: `**Precision CKD Nutrition:**

*Multi-Omics Integration:*
\`\`\`
Metabolomics:
- Uremic toxin profiles
- Amino acid patterns
- Lipid species

Microbiome:
- 16S rRNA sequencing
- Metagenomic profiling
- Metabolite production

Nutritional Assessment:
- Body composition (DXA, BIA)
- Dietary intake analysis
- Biomarker status

Integration → Personalized Prescription
\`\`\`

**Novel Approaches:**

*Targeted Microbiome Therapy:*
| Approach | Mechanism | Evidence |
|----------|-----------|----------|
| Prebiotics | Feed beneficial bacteria | Some positive |
| Probiotics | Introduce beneficial species | Mixed |
| Synbiotics | Combined approach | Research phase |
| AST-120 | Uremic toxin adsorbent | Not FDA approved |

**Digital Nutrition:**

*Technology Integration:*
- Dietary tracking apps (CKD-specific)
- AI-based meal suggestions
- Nutrient calculation tools
- Telehealth dietitian support

**Future Directions:**

*Research Priorities:*
- Optimal protein in CKD
- Plant-based diet trials
- Microbiome interventions
- Personalized nutrition

*Emerging Concepts:*
- Food as medicine programs
- Prescription produce
- Molecularly targeted diets
- Individual metabolic phenotyping`,
      keyTerms: [
        { term: 'uremic toxins', definition: 'Metabolites accumulating in CKD with systemic effects' },
        { term: 'AST-120', definition: 'Oral adsorbent reducing uremic toxin precursors' },
        { term: 'food as medicine', definition: 'Programs providing healthy food as therapeutic intervention' },
      ],
      clinicalNotes: 'Metabolomics may enable personalized uremic toxin management. Microbiome interventions are largely investigational. Digital tools can support dietary adherence. Standard evidence-based recommendations remain foundation of care.',
    },
  },

  media: [],
  citations: [{ id: 'kdoqi-nutrition', type: 'article', title: 'KDOQI Nutrition Guidelines', source: 'AJKD' }],
  crossReferences: [{ targetId: 'kidney-disease-ckd-stages', targetType: 'topic', relationship: 'related', label: 'CKD Stages' }],
  tags: { systems: ['renal'], topics: ['CKD', 'nutrition'], keywords: ['renal diet', 'kidney diet', 'CKD nutrition'], clinicalRelevance: 'high' },
  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
