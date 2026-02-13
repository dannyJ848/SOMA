/**
 * Diabetes Mellitus - Comprehensive Educational Content
 *
 * Covers Type 1 and Type 2 diabetes pathophysiology, complications, and management.
 */

import { EducationalContent } from '../../types';

export const diabetes: EducationalContent = {
  id: 'condition-diabetes',
  type: 'condition',
  name: 'Diabetes Mellitus',
  nameEs: 'Diabetes Mellitus',
  alternateNames: ['Diabetes', 'Type 1 Diabetes', 'Type 2 Diabetes', 'High Blood Sugar'],
  hpoId: 'HP:0000819',

  levels: {
    1: {
      level: 1,
      summary: 'Diabetes is a condition where the body cannot properly use sugar for energy, causing high blood sugar levels.',
      explanation: `Diabetes is a disease that affects how your body uses sugar (glucose) for energy. Everyone needs glucose for energy, but people with diabetes have too much glucose in their blood.

**What happens in diabetes:**
- Your body either does not make enough insulin
- Or your body cannot use insulin properly
- Without insulin, sugar stays in the blood instead of entering cells
- High blood sugar can damage organs over time

**Two main types:**
- **Type 1:** Body does not make insulin (usually starts in childhood)
- **Type 2:** Body does not use insulin well (usually starts in adults)

**Common symptoms:**
- Feeling very thirsty
- Urinating often
- Feeling very hungry
- Fatigue
- Blurry vision
- Slow-healing cuts

**How it is managed:**
- Healthy eating
- Regular exercise
- Medications or insulin
- Checking blood sugar levels
- Regular doctor visits`,
      keyTerms: [
        { term: 'glucose', definition: 'Sugar that your body uses for energy' },
        { term: 'insulin', definition: 'A hormone that helps glucose enter cells from the blood' },
        { term: 'blood sugar', definition: 'The amount of glucose in your blood' },
        { term: 'pancreas', definition: 'The organ that makes insulin' },
      ],
      analogies: [
        'Insulin is like a key that opens the door to cells so glucose can enter; in diabetes, the key is missing or does not work.',
        'Think of glucose as fuel for your car; insulin is the fuel pump that gets it from the tank to the engine.',
      ],
      examples: [
        'A child who drinks lots of water, urinates frequently, and loses weight may have Type 1 diabetes.',
        'An adult with a family history of diabetes who is overweight may develop Type 2 diabetes.',
      ],
    },
    2: {
      level: 2,
      summary: 'Diabetes mellitus is a chronic metabolic disorder characterized by hyperglycemia resulting from defects in insulin secretion, insulin action, or both, leading to microvascular and macrovascular complications.',
      explanation: `## Understanding Diabetes

**Classification:**

**Type 1 Diabetes (5-10% of cases):**
- Autoimmune destruction of beta cells
- Absolute insulin deficiency
- Usually diagnosed in children/young adults
- Requires lifelong insulin

**Type 2 Diabetes (90-95% of cases):**
- Insulin resistance with relative insulin deficiency
- Strong genetic component
- Associated with obesity and sedentary lifestyle
- Often preventable/delayed

**Other types:**
- Gestational diabetes (during pregnancy)
- Monogenic diabetes (MODY)
- Secondary diabetes (medications, pancreatic disease)

## Pathophysiology

**Normal glucose regulation:**
- Food intake raises blood glucose
- Pancreatic beta cells release insulin
- Insulin allows glucose uptake by cells
- Liver stores glucose as glycogen

**Type 1 diabetes:**
- Autoimmune attack on beta cells
- No insulin production
- DKA risk

**Type 2 diabetes:**
- Insulin resistance in muscle, liver, fat
- Beta cell dysfunction over time
- Hyperinsulinemia initially, then insulin deficiency

## Diagnosis

**Criteria (any one of the following):**
- Fasting plasma glucose >=126 mg/dL (7.0 mmol/L)
- 2-hour OGTT >=200 mg/dL (11.1 mmol/L)
- A1C >=6.5%
- Random glucose >=200 mg/dL with symptoms

**Prediabetes ranges:**
- FPG 100-125 mg/dL (impaired fasting glucose)
- 2-hour OGTT 140-199 mg/dL (impaired glucose tolerance)
- A1C 5.7-6.4%

## Acute Complications

**Diabetic ketoacidosis (DKA):**
- Usually Type 1
- Hyperglycemia, ketosis, acidosis
- Medical emergency

**Hyperosmolar hyperglycemic state (HHS):**
- Usually Type 2
- Very high glucose, severe dehydration
- Higher mortality than DKA`,
      keyTerms: [
        { term: 'insulin resistance', definition: 'When cells do not respond normally to insulin' },
        { term: 'beta cells', definition: 'Cells in the pancreas that produce insulin' },
        { term: 'A1C', definition: 'Blood test showing average blood sugar over 2-3 months' },
        { term: 'DKA', definition: 'Diabetic ketoacidosis; life-threatening complication of diabetes' },
      ],
      analogies: [
        'In Type 2 diabetes, it is like the cells have become deaf to insulin and need more and more to get the message.',
        'Type 1 diabetes is like having a broken insulin factory; Type 2 is like the factory works but the delivery trucks cannot unload.',
      ],
    },
    3: {
      level: 3,
      summary: 'Diabetes involves complex dysregulation of glucose homeostasis through insulin resistance and beta-cell dysfunction, with chronic hyperglycemia causing microvascular complications via polyol pathway, AGE formation, and PKC activation, requiring comprehensive management with glycemic targets, lifestyle modification, and pharmacotherapy.',
      explanation: `## Pathophysiology

### Mechanisms of Hyperglycemia

**Type 1 Diabetes:**
- HLA-associated genetic susceptibility
- Environmental triggers (viruses, toxins)
- Autoimmune destruction of beta cells
  - Anti-GAD, anti-IA-2, anti-ZnT8, anti-insulin antibodies
- Absolute insulin deficiency

**Type 2 Diabetes:**
- **Insulin resistance:**
  - Reduced glucose uptake in muscle
  - Unsuppressed hepatic glucose production
  - Increased lipolysis in adipose tissue
  - Lipotoxicity and glucotoxicity

- **Beta cell dysfunction:**
  - Reduced insulin secretion
  - Loss of first-phase insulin response
  - Amylin deposition in islets
  - Progressive failure over time

### Complications Pathways

**Hyperglycemia-induced damage:**
1. **Polyol pathway** - sorbitol accumulation
2. **Advanced glycation end-products (AGEs)** - cross-linking proteins
3. **Protein kinase C activation** - vascular effects
4. **Hexosamine pathway** - altered gene expression
5. **Oxidative stress** - free radical generation

## Chronic Complications

### Microvascular
**Diabetic retinopathy:**
- Non-proliferative and proliferative stages
- Macular edema
- Leading cause of blindness

**Diabetic nephropathy:**
- Microalbuminuria -> proteinuria
- Progressive CKD
- Leading cause of ESRD

**Diabetic neuropathy:**
- Peripheral symmetric polyneuropathy
- Autonomic neuropathy
- Mononeuropathies

### Macrovascular
- Accelerated atherosclerosis
- Coronary artery disease
- Cerebrovascular disease
- Peripheral artery disease

## Pharmacologic Management

**Type 1:**
- Insulin required (basal-bolus or pump)
- Pramlintide (amylin analog) adjunct

**Type 2 - Stepwise approach:**
1. Metformin (first-line)
2. Add: GLP-1 RA or SGLT2 inhibitor (ASCVD, HF, CKD)
3. Add: DPP-4 inhibitor, TZD, or basal insulin
4. Intensive insulin therapy

**Key medication classes:**
| Class | Mechanism | Benefits | Risks |
|-------|-----------|----------|-------|
| Metformin | Decreases hepatic glucose | Weight neutral, CV benefit | GI upset, lactic acidosis |
| SGLT2i | Urinary glucose excretion | CV/renal protection | Genital infections, DKA |
| GLP-1 RA | Enhances insulin, delays gastric emptying | Weight loss, CV benefit | GI effects, pancreatitis |
| DPP-4i | Increases endogenous GLP-1 | Weight neutral | Pancreatitis risk |
| Insulin | Direct replacement | Most potent | Hypoglycemia, weight gain |`,
      keyTerms: [
        { term: 'glucotoxicity', definition: 'Toxic effects of chronic hyperglycemia on beta cell function' },
        { term: 'AGEs', definition: 'Advanced glycation end-products; formed when glucose binds proteins' },
        { term: 'GLP-1 RA', definition: 'Glucagon-like peptide-1 receptor agonist; incretin-based therapy' },
        { term: 'SGLT2i', definition: 'Sodium-glucose cotransporter-2 inhibitor; causes glucosuria' },
      ],
      clinicalNotes: 'A1C target generally <7% for most adults, individualized based on age, comorbidities, and hypoglycemia risk. SGLT2 inhibitors and GLP-1 RAs have cardiovascular and renal benefits independent of glycemic control. Screen annually for retinopathy, nephropathy, and neuropathy.',
    },
    4: {
      level: 4,
      summary: 'Diabetes management requires understanding of incretin physiology, detailed knowledge of insulin pharmacokinetics, recognition of diabetic foot pathophysiology, and application of technology including continuous glucose monitoring and insulin pumps for optimized glycemic control.',
      explanation: `## Advanced Pathophysiology

### Incretin Effect
- Oral glucose stimulates greater insulin secretion than IV glucose
- GLP-1 and GIP are gut hormones that amplify insulin release
- Incretin effect is reduced in Type 2 diabetes
- GLP-1 also suppresses glucagon, delays gastric emptying, promotes satiety

### Insulin Physiology
**Secretion patterns:**
- Basal insulin: 0.5-1 U/hour
- First-phase: Rapid spike at meal onset
- Second-phase: Sustained release

**Insulin formulations:**
| Type | Onset | Peak | Duration |
|------|-------|------|----------|
| Rapid (lispro, aspart) | 15 min | 1-2h | 3-5h |
| Short (regular) | 30 min | 2-4h | 5-8h |
| Intermediate (NPH) | 1-2h | 4-8h | 10-16h |
| Long (glargine, detemir) | 2-4h | None | 20-24h |
| Ultra-long (degludec) | 1h | None | >42h |

### Diabetic Foot
**Pathophysiology triad:**
1. **Neuropathy** - loss of protective sensation
2. **Vascular disease** - impaired healing
3. **Infection** - portal of entry through skin breakdown

**Charcot neuroarthropathy:**
- Painless joint destruction
- Midfoot most commonly affected
- Immobilization critical for preservation

### Nephropathy Progression
1. Hyperfiltration (GFR elevated)
2. Microalbuminuria (30-300 mg/day)
3. Macroalbuminuria (>300 mg/day)
4. Declining GFR
5. ESRD requiring dialysis/transplant

### Retinopathy Staging
**Non-proliferative:**
- Mild: Microaneurysms only
- Moderate: Microaneurysms, hemorrhages, hard exudates
- Severe: 4-2-1 rule (hemorrhages in 4 quadrants, venous beading in 2 quadrants, IRMA in 1 quadrant)

**Proliferative:**
- Neovascularization
- Vitreous hemorrhage
- Tractional retinal detachment

## Technology in Diabetes

**Continuous Glucose Monitoring (CGM):**
- Real-time glucose readings
- Trend arrows and alerts
- Time in range metrics

**Insulin pumps:**
- Continuous subcutaneous insulin infusion
- Advanced features: suspend before low, hybrid closed loop

**Hybrid closed-loop systems:**
- CGM + algorithm + pump
- Automatic basal adjustment
- Some systems deliver correction boluses`,
      keyTerms: [
        { term: 'incretin', definition: 'Gut hormones (GLP-1, GIP) that stimulate insulin secretion in response to food' },
        { term: 'Charcot foot', definition: 'Neuropathic arthropathy causing progressive foot deformity in diabetes' },
        { term: 'time in range', definition: 'Percentage of time glucose is 70-180 mg/dL; CGM metric' },
        { term: 'IRMA', definition: 'Intraretinal microvascular abnormalities; collateral vessels in diabetic retinopathy' },
      ],
      clinicalNotes: 'Time in range (70-180 mg/dL) target >70%, time below range <4%, time above range <25%. Hybrid closed-loop systems can significantly improve time in range. Early referral to wound care/podiatry for foot ulcers. ACE inhibitors or ARBs for albuminuria.',
    },
    5: {
      level: 5,
        summary: 'Contemporary diabetes care integrates precision medicine with genetic subtyping, artificial pancreas technology, stem cell therapy for Type 1, and advanced cardiorenal protection strategies, while addressing health disparities and social determinants of health in diabetes outcomes.',
      explanation: `## Precision Medicine in Diabetes

### Genetic Subtyping
**Monogenic diabetes (MODY):**
- HNF1A-MODY (glucokinase, HNF4A, HNF1A)
- Responds to sulfonylureas
- Often misdiagnosed as Type 1 or 2
- Genetic testing changes management

**Type 1 diabetes subtypes:**
- Severe autoimmune diabetes (SAID)
- Severe insulin-deficient diabetes (SIDD)
- Severe insulin-resistant diabetes (SIRD)
- Mild obesity-related diabetes (MOD)
- Mild age-related diabetes (MARD)

## Advanced Therapeutics

### Stem Cell Therapy
**Type 1 diabetes:**
- Encapsulated islet cells
- Vertex VX-880 trial (stem cell-derived islets)
- Long-term immunosuppression or encapsulation needed

### Gene Therapy
- Under investigation for monogenic forms
- CRISPR approaches for beta cell regeneration

### Bariatric/Metabolic Surgery
- RYGB, sleeve gastrectomy, gastric banding
- Remission in 60-80% of Type 2 diabetes
- Mechanisms beyond weight loss
- Guidelines suggest consideration for BMI >35, or >30 with poor control

## Cardiorenal Protection

### SGLT2 Inhibitors
**Mechanisms beyond glucose:**
- Restoration of tubuloglomerular feedback
- Reduced intraglomerular pressure
- Improved cardiac energetics
- Reduced inflammation and fibrosis

**Indications expanded:****
- Heart failure with reduced EF (regardless of diabetes)
- CKD with albuminuria

### GLP-1 Receptor Agonists
**Cardiovascular benefits:**
- Reduced MACE in high-risk patients
- Weight loss driving BP and lipid improvements
- Direct vascular effects

## Health Disparities

**Social determinants affecting diabetes:**
- Food insecurity
- Limited healthcare access
- Neighborhood safety affecting activity
- Diabetes distress and burnout
- Implicit bias in healthcare

**Interventions:**
- Community health workers
- Telemedicine and remote monitoring
- Sliding scale medication programs
- Culturally tailored education

## Future Directions

**Implantable devices:**
- Fully automated artificial pancreas
- Bioartificial pancreas with immunoisolation

**Immunotherapy for Type 1:**
- Anti-CD3 (teplizumab) delays onset in at-risk individuals
- Trials for disease modification

**Digital therapeutics:**
- FDA-approved apps for diabetes management
- Behavioral intervention platforms
- AI-driven insulin dosing recommendations`,
      keyTerms: [
        { term: 'MODY', definition: 'Maturity-onset diabetes of the young; monogenic form of diabetes' },
        { term: 'MACE', definition: 'Major adverse cardiovascular events (MI, stroke, CV death)' },
        { term: 'artificial pancreas', definition: 'Automated insulin delivery system integrating CGM and pump' },
        { term: 'tubuloglomerular feedback', definition: 'Mechanism by which SGLT2 inhibitors reduce glomerular pressure' },
      ],
      clinicalNotes: 'Teplizumab is the first disease-modifying therapy for Type 1 diabetes, delaying onset in stage 2 (autoantibody positive, dysglycemic) individuals. SGLT2 inhibitors are now standard of care for HFrEF regardless of diabetes status. Consider metabolic surgery referral early in Type 2 diabetes course for best outcomes.',
    },
  },

  media: [
    {
      id: 'diabetes-pathophysiology',
      type: 'diagram',
      filename: 'diabetes-complications.svg',
      title: 'Diabetes Complications Overview',
      description: 'Microvascular and macrovascular complications of diabetes',
    },
  ],

  citations: [
    {
      id: 'ada-standards-2024',
      type: 'article',
      title: 'Standards of Care in Diabetes',
      authors: ['American Diabetes Association'],
      source: 'Diabetes Care',
    },
  ],

  crossReferences: [
    { targetId: 'condition-metabolic-syndrome', targetType: 'condition', relationship: 'related', label: 'Metabolic Syndrome' },
  ],

  tags: {
    systems: ['endocrine', 'metabolic'],
    topics: ['endocrinology', 'chronic disease'],
    keywords: ['diabetes', 'insulin', 'hyperglycemia', 'glucose', 'A1C'],
    clinicalRelevance: 'critical',
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default diabetes;
