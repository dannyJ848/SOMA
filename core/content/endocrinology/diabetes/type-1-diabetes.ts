/**
 * Type 1 Diabetes Mellitus - Patient Education
 *
 * Comprehensive patient education content focusing on self-management.
 */

import { EducationalContent } from '../../types';

export const TYPE_1_DIABETES_PATIENT_ED: EducationalContent = {
  id: 'endocrinology-diabetes-type1-patient',
  type: 'condition',
  name: 'Type 1 Diabetes',
  alternateNames: ['T1DM', 'Insulin-dependent diabetes', 'Juvenile diabetes'],

  levels: {
    1: {
      level: 1,
      summary: 'Type 1 diabetes is when your body cannot make insulin, so sugar stays in your blood instead of giving your cells energy.',
      explanation: `**What is Type 1 Diabetes?**

Think of insulin as a key that opens your body's cells so sugar can get inside and give you energy. In Type 1 diabetes, your body stops making these keys. Without insulin, sugar builds up in your blood.

**Why Does This Happen?**

Your immune system (which normally fights germs) made a mistake. It attacked the cells in your pancreas that make insulin. We do not know exactly why this happens, but:
- It is NOT caused by eating too much sugar
- It is NOT because of anything you did wrong
- It often runs in families

**What You Might Feel:**
- Very thirsty all the time
- Need to go to the bathroom a lot
- Tired and hungry
- Losing weight without trying

**How It Is Treated:**

Since your body cannot make insulin, you need to take it from outside:
- Insulin shots (injections) or an insulin pump
- Checking your blood sugar several times a day
- Eating regular, balanced meals
- Staying active

**Living Well with Type 1 Diabetes:**

Many people with Type 1 diabetes live full, healthy lives. They go to school, work, play sports, and do everything others do. The key is learning to manage your blood sugar well.`,
      keyTerms: [
        { term: 'insulin', definition: 'A hormone (body chemical) that helps sugar get into your cells for energy' },
        { term: 'pancreas', definition: 'An organ behind your stomach that normally makes insulin' },
        { term: 'blood sugar', definition: 'The amount of sugar floating in your blood; also called glucose' },
        { term: 'immune system', definition: 'Your body\'s defense system that fights germs and sickness' },
      ],
      analogies: [
        'Insulin is like a key that unlocks your cells so sugar can enter and give them energy.',
        'Without insulin, sugar is like a delivery truck that cannot unload - it just keeps driving around in your blood.',
        'The pancreas is like a factory that makes insulin. In Type 1 diabetes, the factory has permanently closed.',
      ],
      examples: [
        'A child who suddenly becomes very thirsty, loses weight, and feels tired might have Type 1 diabetes.',
        'Someone with Type 1 diabetes might wear a small pump on their body that gives them insulin throughout the day.',
      ],
    },
    2: {
      level: 2,
      summary: 'Type 1 diabetes is an autoimmune condition where the immune system destroys insulin-producing beta cells, requiring lifelong insulin replacement therapy.',
      explanation: `**Understanding Type 1 Diabetes**

Type 1 diabetes develops when your immune system attacks and destroys the beta cells in your pancreas. Beta cells are the only cells that produce insulin.

**The Autoimmune Process:**
- Something triggers the immune system (possibly a virus or environmental factor)
- The immune system mistakenly identifies beta cells as "foreign"
- Over time, most beta cells are destroyed (usually 80-90%)
- Once enough cells are gone, symptoms appear

**Classic Symptoms (The "Three Polys"):**
1. **Polyuria** - Frequent urination (high blood sugar pulls water into urine)
2. **Polydipsia** - Excessive thirst (replacing lost fluids)
3. **Polyphagia** - Increased hunger (cells not getting energy despite eating)

**Other Symptoms:**
- Unexplained weight loss (body breaks down fat and muscle for energy)
- Fatigue and weakness
- Blurred vision
- Slow-healing cuts

**Diagnosis:**
- Fasting blood sugar: 126 mg/dL or higher
- Random blood sugar: 200 mg/dL or higher with symptoms
- HbA1c: 6.5% or higher
- Antibody tests can confirm autoimmune type

**Treatment Basics:**
- Insulin replacement (cannot use pills - need injections or pump)
- Blood sugar monitoring multiple times daily
- Carbohydrate counting to match insulin to food
- Regular exercise with blood sugar management
- HbA1c testing every 3 months (goal usually below 7%)

**Comparing to Type 2:**
| Feature | Type 1 | Type 2 |
|---------|--------|--------|
| Insulin production | None/minimal | Reduced or ineffective |
| Typical onset | Often childhood | Usually adult |
| Treatment | Insulin required | Diet/pills/insulin |
| Cause | Autoimmune | Insulin resistance |`,
      keyTerms: [
        { term: 'autoimmune', definition: 'When your immune system mistakenly attacks your own body\'s healthy cells' },
        { term: 'beta cells', definition: 'The specific cells in your pancreas that produce insulin' },
        { term: 'HbA1c', definition: 'A blood test showing your average blood sugar over 2-3 months', pronunciation: 'H-B-A-one-C' },
        { term: 'hyperglycemia', definition: 'High blood sugar, above the normal range' },
        { term: 'hypoglycemia', definition: 'Low blood sugar, often from too much insulin or not enough food' },
      ],
      analogies: [
        'HbA1c is like a report card showing how well blood sugar has been controlled over time.',
        'Beta cells are like insulin factories - in Type 1 diabetes, these factories are destroyed.',
      ],
    },
    3: {
      level: 3,
      summary: 'T1DM results from T-cell mediated destruction of pancreatic beta cells, requiring intensive insulin therapy. Management involves basal-bolus regimens or insulin pump therapy with careful glucose monitoring.',
      explanation: `**Pathophysiology of Type 1 Diabetes**

T1DM is an autoimmune condition with both genetic susceptibility (HLA-DR3/DR4) and environmental triggers.

**Immune Mechanisms:**
- CD4+ and CD8+ T cells infiltrate pancreatic islets (insulitis)
- Progressive beta cell destruction over months to years
- Clinical diabetes when >80-90% of beta cells destroyed
- Residual insulin production may persist initially ("honeymoon period")

**Diagnostic Criteria:**
- Fasting plasma glucose ≥126 mg/dL (7.0 mmol/L)
- 2-hour OGTT ≥200 mg/dL (11.1 mmol/L)
- HbA1c ≥6.5% (48 mmol/mol)
- Random glucose ≥200 mg/dL with classic symptoms

**Autoantibodies (confirm autoimmune etiology):**
- GAD65 (glutamic acid decarboxylase) - most sensitive in adults
- IA-2 (islet antigen 2)
- IAA (insulin autoantibodies) - more common in children
- ZnT8 (zinc transporter 8)

**Insulin Therapy Approaches:**

*Basal-Bolus (MDI - Multiple Daily Injections):*
- Basal: Long-acting insulin once or twice daily (glargine, detemir, degludec)
- Bolus: Rapid-acting insulin before meals (lispro, aspart, glulisine)
- Correction doses for hyperglycemia
- Total daily dose typically 0.4-1.0 units/kg

*Insulin Pump (CSII):*
- Continuous subcutaneous infusion of rapid-acting insulin
- Programmable basal rates
- Bolus calculator for meals and corrections
- Can integrate with CGM for automated adjustments

**Glucose Monitoring:**

*Self-Monitoring Blood Glucose (SMBG):*
- Minimum 4 times daily (before meals and bedtime)
- Additional checks for symptoms, exercise, illness

*Continuous Glucose Monitoring (CGM):*
- Real-time glucose readings every 5 minutes
- Trend arrows showing direction of change
- Alerts for high and low glucose
- Time in Range (TIR) tracking

**Glycemic Targets:**
| Metric | Target |
|--------|--------|
| Preprandial glucose | 80-130 mg/dL |
| Peak postprandial | <180 mg/dL |
| HbA1c | <7% (individualized) |
| Time in Range (70-180) | >70% |
| Time below 70 | <4% |`,
      keyTerms: [
        { term: 'insulitis', definition: 'Inflammation of pancreatic islets from immune cell infiltration' },
        { term: 'C-peptide', definition: 'Byproduct of insulin production; low/undetectable confirms T1DM' },
        { term: 'basal-bolus', definition: 'Insulin regimen with background insulin plus mealtime doses' },
        { term: 'CSII', definition: 'Continuous subcutaneous insulin infusion - insulin pump therapy' },
        { term: 'CGM', definition: 'Continuous glucose monitoring - sensor measuring interstitial glucose' },
        { term: 'time in range', definition: 'Percentage of time glucose is 70-180 mg/dL' },
      ],
      clinicalNotes: 'The "honeymoon period" refers to partial remission after diagnosis when residual beta cells still produce some insulin. During this time, insulin requirements decrease. It typically lasts weeks to months but can extend to 1-2 years. C-peptide measurement helps differentiate T1DM from T2DM.',
    },
    4: {
      level: 4,
      summary: 'T1DM pathogenesis involves HLA-associated genetic susceptibility interacting with environmental triggers. Contemporary management emphasizes technology-assisted intensive therapy with focus on time-in-range metrics.',
      explanation: `**Genetic and Immunological Basis**

*HLA Associations:*
- HLA-DR3 and HLA-DR4 present in >90% of patients
- DR3/DR4 heterozygosity confers highest risk (1:15 lifetime)
- HLA-DQ8 (DQB1*0302) strongly associated
- Protective alleles: HLA-DR2 (DRB1*1501)

*Non-HLA Genes:*
- INS gene (VNTR polymorphisms) - thymic insulin expression
- PTPN22 (R620W) - T cell signaling
- CTLA4 - T cell regulation
- IL2RA (CD25) - regulatory T cell function

*Immunopathogenesis:*
1. Genetic susceptibility + environmental trigger
2. Loss of tolerance to islet autoantigens
3. CD4+ Th1 response (IFN-γ, TNF-α production)
4. CD8+ CTL-mediated beta cell killing (perforin/granzyme)
5. Deficient regulatory T cell suppression
6. Progressive insulitis and beta cell apoptosis

*Disease Staging (ADA/JDRF/Endocrine Society):*
- Stage 1: ≥2 autoantibodies, normoglycemia, asymptomatic
- Stage 2: ≥2 autoantibodies, dysglycemia, asymptomatic
- Stage 3: Clinical diabetes with symptoms

**Advanced Insulin Pharmacokinetics**

| Insulin | Onset | Peak | Duration | Mechanism |
|---------|-------|------|----------|-----------|
| Lispro/Aspart/Glulisine | 5-15 min | 1-2 hr | 3-5 hr | Reduced self-association |
| Regular | 30-60 min | 2-4 hr | 6-8 hr | Native human insulin |
| NPH | 2-4 hr | 4-10 hr | 10-18 hr | Protamine complex |
| Glargine U100 | 2-4 hr | None | 20-24 hr | Microprecipitation at pH 7.4 |
| Glargine U300 | 6 hr | None | >24 hr | Smaller depot |
| Degludec | 1 hr | None | >42 hr | Multi-hexamer chains |
| Detemir | 1-2 hr | Flat | 12-24 hr | Albumin binding |

**Hybrid Closed-Loop Systems:**

Current FDA-approved systems:
- Medtronic 780G (Control-IQ algorithm)
- Tandem Control-IQ (Basal-IQ for predictive suspend)
- Omnipod 5 (tubeless, smartphone-controlled)
- Beta Bionics iLet (fully automated)

Algorithm components:
- Model predictive control using CGM data
- Auto-adjustment of basal rates
- Automated correction boluses
- Predictive low glucose suspend
- User-initiated meal boluses still required

**CGM Metrics and Targets:**

| Metric | Target | Clinical Significance |
|--------|--------|----------------------|
| Time in Range (70-180) | >70% | Primary glycemic outcome |
| Time below 70 | <4% | Hypoglycemia burden |
| Time below 54 | <1% | Clinically significant hypo |
| Time above 180 | <25% | Hyperglycemia exposure |
| GMI | Individualized | CGM-estimated A1c |
| CV% | <36% | Glycemic variability |

**Adjunctive Therapies:**
- Pramlintide (Symlin): Amylin analog, delays gastric emptying
- SGLT2 inhibitors: Off-label, requires DKA risk counseling
- Metformin: May reduce insulin requirements in insulin resistance`,
      keyTerms: [
        { term: 'hybrid closed-loop', definition: 'Automated insulin delivery using CGM-directed algorithms; requires meal input' },
        { term: 'model predictive control', definition: 'Algorithm predicting future glucose to optimize insulin delivery' },
        { term: 'GMI', definition: 'Glucose Management Indicator - CGM-derived HbA1c estimate' },
        { term: 'coefficient of variation', definition: 'Measure of glycemic variability (SD/mean x 100)' },
        { term: 'pramlintide', definition: 'Synthetic amylin reducing postprandial glucose via multiple mechanisms' },
      ],
      clinicalNotes: 'Teplizumab (anti-CD3) is now FDA-approved to delay Stage 3 T1DM onset in Stage 2 patients. It depletes/modulates autoreactive T cells. The PROTECT trial showed median 2-year delay to clinical diabetes. This represents a paradigm shift toward disease modification.',
    },
    5: {
      level: 5,
      summary: 'T1DM management is evolving toward disease modification through immunotherapy, fully automated closed-loop systems, and stem cell-derived beta cell replacement therapies.',
      explanation: `**T1DM Heterogeneity and Endotypes**

*Phenotypic Variability:*
- Childhood-onset: Rapid progression, higher HLA-DR4 frequency
- LADA: Adult-onset, GAD65-predominant, slower beta cell decline
- Fulminant T1DM: Rapid onset, minimal insulitis, HLA-DR4-DQ4 associated (common in Asia)

*Proposed Endotype Classification:*
- T1DE1: Early onset, HLA-DR4, IA-2/ZnT8 positive, aggressive
- T1DE2: Later onset, HLA-DR3, GAD65 predominant, slower

**Disease-Modifying Therapies**

*Approved:*
- Teplizumab (Tzield): Anti-CD3 monoclonal antibody
  - 14-day IV course for Stage 2 T1DM
  - Median 2-year delay to Stage 3
  - Mechanism: Modulates CD8+ T cells, expands Tregs

*Investigational Immunotherapies:*
| Agent | Target | Status | Results |
|-------|--------|--------|---------|
| Golimumab | TNF-α | Phase 2 | Preserved C-peptide |
| Abatacept | CD80/86 | Phase 2 | Modest benefit |
| Low-dose IL-2 | Tregs | Phase 2 | Treg expansion |
| Antigen-specific | Tolerance | Multiple | Mixed results |

**Beta Cell Replacement Strategies**

*Islet Transplantation:*
- Edmonton Protocol: Portal vein infusion of donor islets
- Outcomes: 50-70% insulin independence at 1 year, declining over time
- Limitations: Donor scarcity, lifelong immunosuppression

*Stem Cell-Derived Beta Cells:*
- VX-880: Differentiated from embryonic stem cells
  - Phase 1/2: Measurable C-peptide, reduced insulin requirements
  - Requires immunosuppression
- VX-264: Encapsulated cells (no immunosuppression needed)
  - Phase 1 ongoing

*Encapsulation Technologies:*
- Protect transplanted cells from immune attack
- Avoid systemic immunosuppression
- Challenges: Fibrosis, hypoxia, cell survival

**Advanced Closed-Loop Technology**

*Fully Automated Systems (investigational):*
- No meal announcement required
- Faster-acting insulins (ultra-rapid) enabling better postprandial control
- Dual-hormone systems (insulin + glucagon) for hypoglycemia prevention

*Algorithm Evolution:*
- First generation: Suspend-on-low
- Current: Hybrid closed-loop (auto-basal, auto-correction)
- Next: Fully automated dosing
- Future: Meal detection via CGM patterns

**Special Considerations**

*Pregnancy:*
- Preconception HbA1c <6.5% (ideally <6.0%)
- CGM recommended (CONCEPTT trial evidence)
- Pregnancy TIR target: 63-140 mg/dL >70%
- Insulin requirements increase 50-100% by third trimester

*Exercise Physiology:*
- Aerobic: Generally lowers glucose (increase insulin sensitivity)
- Anaerobic/high-intensity: May cause glucose rise (catecholamine effect)
- Strategies: Pre-exercise carbs, insulin reduction, post-exercise monitoring

*Glycemic Memory (DCCT/EDIC):*
- Early intensive control provides lasting protection
- Mechanism: Epigenetic modifications persist
- Clinical implication: Aggressive early treatment matters long-term

**Emerging Biomarkers and Monitoring**

- Beta cell function: Stimulated C-peptide, proinsulin
- Immune monitoring: Autoantibody titers, T cell assays
- Continuous ketone monitoring (investigational)
- Multi-analyte sensors (glucose + lactate + ketones)`,
      keyTerms: [
        { term: 'teplizumab', definition: 'Anti-CD3 monoclonal antibody that delays clinical T1DM onset by modulating T cells' },
        { term: 'LADA', definition: 'Latent autoimmune diabetes in adults - slower-onset T1DM, often misdiagnosed as T2DM' },
        { term: 'Edmonton protocol', definition: 'Islet transplantation via portal vein infusion with immunosuppression' },
        { term: 'VX-880', definition: 'Stem cell-derived islet cell therapy showing promise in clinical trials' },
        { term: 'glycemic memory', definition: 'Long-term protective effects of early intensive glucose control' },
        { term: 'dual-hormone', definition: 'Closed-loop systems using both insulin and glucagon' },
      ],
      clinicalNotes: 'The T1DM therapeutic landscape is rapidly evolving. Teplizumab represents the first disease-modifying therapy. Stem cell-derived beta cells (VX-880) showing early promise may eventually provide functional cure. Fully automated closed-loop systems are approaching clinical reality. Clinicians should discuss these evolving options while emphasizing that current technology can achieve excellent outcomes.',
    },
  },

  media: [],
  citations: [
    {
      id: 'ada-standards-2024',
      type: 'article',
      title: 'Standards of Care in Diabetes',
      authors: ['American Diabetes Association Professional Practice Committee'],
      source: 'Diabetes Care',
      url: 'https://diabetesjournals.org/care',
    },
  ],
  crossReferences: [
    { targetId: 'endocrinology-diabetes-type2-patient', targetType: 'condition', relationship: 'related', label: 'Type 2 Diabetes' },
    { targetId: 'endocrinology-blood-sugar-monitoring', targetType: 'topic', relationship: 'see-also', label: 'Blood Sugar Monitoring' },
    { targetId: 'endocrinology-hypoglycemia-management', targetType: 'topic', relationship: 'see-also', label: 'Hypoglycemia Management' },
  ],
  tags: {
    systems: ['endocrine'],
    topics: ['diabetes', 'autoimmune', 'insulin therapy', 'self-management'],
    keywords: ['type 1 diabetes', 'T1DM', 'insulin', 'CGM', 'insulin pump', 'blood sugar'],
    clinicalRelevance: 'critical',
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};
