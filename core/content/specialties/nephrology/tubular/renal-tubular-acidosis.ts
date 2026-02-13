/**
 * Renal Tubular Acidosis (RTA) - Nephrology Educational Content
 */
import { EducationalContent } from '../../../types';

export const renalTubularAcidosis: EducationalContent = {
  id: 'nephro-renal-tubular-acidosis',
  type: 'condition',
  name: 'Renal Tubular Acidosis',
  nameEs: 'Acidosis Tubular Renal',
  alternateNames: ['RTA', 'Tubular Acidosis'],
  hpoId: 'HP:0001947',
  levels: {
    1: {
      level: 1,
      summary: 'Renal tubular acidosis is when your kidney tubes can\'t properly balance the acid in your blood, making your blood too acidic even though your kidneys look otherwise healthy.',
      explanation: `Your kidneys help keep your blood at the right level of acidity (pH). They do this by getting rid of acid and holding onto a substance called bicarbonate that neutralizes acid.

In RTA, the kidney tubes (tubules) have a specific problem with handling acid or bicarbonate, so acid builds up in your blood.

**Symptoms:** Fatigue, muscle weakness, bone pain, and in children, poor growth.

**Types:** There are different types depending on which part of the kidney tube is affected. The most common types are Type 1 (can't get rid of acid) and Type 4 (related to low aldosterone, often seen with diabetes).`,
      keyTerms: [
        { term: 'acidosis', definition: 'When your blood becomes too acidic' },
        { term: 'bicarbonate', definition: 'A substance in your blood that neutralizes acid; your kidneys help keep it at the right level' },
      ],
      analogies: ['Think of bicarbonate like baking soda that neutralizes acid in your blood -- RTA is when your kidneys can\'t hold onto enough of it.'],
      patientCounselingPoints: ['You may need to take bicarbonate supplements (baking soda tablets) daily.'],
    },
    2: {
      level: 2,
      summary: 'Renal tubular acidosis is a non-anion gap metabolic acidosis caused by defective tubular acid-base handling, classified into Type 1 (distal), Type 2 (proximal), and Type 4 (hyperkalemic/hypoaldosteronism).',
      explanation: `## Classification
| Type | Defect | Urine pH | Potassium | Key Association |
|------|--------|----------|-----------|-----------------|
| Type 1 (Distal) | Can't secrete H+ in collecting duct | >5.5 | Low | Kidney stones, nephrocalcinosis |
| Type 2 (Proximal) | Can't reabsorb HCO3- in proximal tubule | <5.5 (when HCO3 low) | Low | Fanconi syndrome |
| Type 4 | Aldosterone deficiency/resistance | <5.5 | HIGH | Diabetes, ACEi/ARBs, spironolactone |

## Key Lab Features (all types)
- Non-anion gap metabolic acidosis (normal AG 8-12)
- Positive urine anion gap (Na + K - Cl > 0) in Types 1 and 4 (impaired NH4+ excretion)
- Negative urine anion gap in Type 2 (intact distal acidification)

## Common Causes
- **Type 1:** Sjogren syndrome, SLE, amphotericin B, lithium
- **Type 2:** Multiple myeloma, acetazolamide, heavy metals, Fanconi syndrome
- **Type 4:** Diabetic nephropathy, NSAIDs, calcineurin inhibitors, heparin, adrenal insufficiency`,
      keyTerms: [
        { term: 'non-anion gap acidosis', definition: 'Metabolic acidosis with normal anion gap; seen in RTA and diarrhea' },
        { term: 'urine anion gap', definition: 'Na + K - Cl in urine; indirect measure of ammonium excretion; positive suggests impaired renal acid secretion' },
        { term: 'Fanconi syndrome', definition: 'Generalized proximal tubule dysfunction losing bicarbonate, glucose, amino acids, phosphate, and uric acid' },
      ],
    },
    3: {
      level: 3,
      summary: 'RTA diagnosis requires systematic evaluation of acid-base status, urine anion gap, urine pH, and potassium, with specific tubular defects in each type dictating targeted treatment (alkali therapy, fludrocortisone, or potassium management).',
      explanation: `## Pathophysiology by Type

**Type 1 (Distal RTA):**
- Defective H+-ATPase or H+/K+-ATPase in alpha-intercalated cells of collecting duct
- Cannot lower urine pH below 5.5 (even with systemic acidosis)
- Complications: Hypocitraturia leads to calcium phosphate stones and nephrocalcinosis; hypokalemia from renal K wasting; bone disease from chronic buffering
- Treatment: Oral alkali (sodium bicarbonate or potassium citrate 1-2 mEq/kg/day); potassium citrate preferred (treats hypokalemia + hypocitraturia)

**Type 2 (Proximal RTA):**
- Defective Na+/HCO3- cotransporter (NBCe1) or carbonic anhydrase in proximal tubule
- Bicarbonate wasting until serum HCO3 falls to ~15 mEq/L (new threshold); then urine pH falls <5.5
- Often part of Fanconi syndrome (glucosuria, aminoaciduria, phosphaturia, uricosuria)
- Treatment: High-dose alkali (10-15 mEq/kg/day) -- most is wasted in urine; thiazide diuretics to induce volume contraction and enhance proximal reabsorption

**Type 4 (Hyperkalemic RTA):**
- Aldosterone deficiency or resistance reduces collecting duct Na+ reabsorption and K+/H+ secretion
- Hyperkalemia itself impairs ammoniagenesis, worsening acidosis
- Most common RTA in adults (diabetic nephropathy)
- Treatment: Treat hyperkalemia first; fludrocortisone if true aldosterone deficiency; dietary K restriction; sodium bicarbonate; loop diuretics`,
      keyTerms: [
        { term: 'alpha-intercalated cell', definition: 'Collecting duct cell that secretes H+ via H+-ATPase; defective in distal RTA' },
        { term: 'hypocitraturia', definition: 'Low urinary citrate; seen in Type 1 RTA; citrate normally inhibits calcium stone formation' },
        { term: 'ammoniagenesis', definition: 'Proximal tubular production of NH3 for urinary acid excretion; impaired by hyperkalemia in Type 4 RTA' },
      ],
      clinicalNotes: 'The urine anion gap is a bedside tool to differentiate renal from GI causes of non-anion gap acidosis. Positive UAG = renal (impaired NH4+ excretion). Negative UAG = GI loss (diarrhea) with appropriate renal NH4+ response.',
    },
    4: {
      level: 4,
      summary: 'Advanced RTA evaluation involves provocative testing (furosemide-fludrocortisone, NH4Cl loading), molecular characterization of transporters, recognition of incomplete forms, and management of complications including nephrocalcinosis and bone disease.',
      explanation: `## Diagnostic Provocative Tests
- **NH4Cl loading test:** Oral NH4Cl 0.1 g/kg induces systemic acidosis; failure to lower urine pH <5.3 confirms distal RTA
- **Furosemide-fludrocortisone test:** Simultaneous furosemide (40 mg) + fludrocortisone (1 mg); failure to lower urine pH <5.3 confirms distal RTA (safer, preferred over NH4Cl)
- **NaHCO3 infusion test:** IV NaHCO3 to raise serum HCO3 above threshold; fractional excretion of HCO3 >15% confirms proximal RTA

## Molecular Genetics
| Gene | Protein | RTA Type | Inheritance | Features |
|------|---------|----------|-------------|----------|
| ATP6V1B1 | H+-ATPase B1 | Distal | AR | Sensorineural deafness |
| ATP6V0A4 | H+-ATPase a4 | Distal | AR | Later hearing loss |
| SLC4A1 | AE1 (Cl-/HCO3-) | Distal | AD/AR | Southeast Asian ovalocytosis (AR) |
| CA2 | Carbonic anhydrase II | Mixed (1+2) | AR | Osteopetrosis, cerebral calcification |
| SLC4A4 | NBCe1 | Proximal | AR | Band keratopathy, intellectual disability |

## Incomplete Distal RTA
- Normal serum bicarbonate but impaired maximal urine acidification
- Urine pH >5.5 on provocative testing
- Presents with nephrocalcinosis or recurrent calcium phosphate stones without systemic acidosis
- Treat with potassium citrate for stone prevention

## Bone Disease in RTA
- Chronic metabolic acidosis promotes bone resorption as skeletal buffer
- Hypophosphatemia (Type 2) causes osteomalacia
- Distal RTA associated with osteoporosis even with alkali therapy
- Monitor bone density; calcium and vitamin D supplementation`,
      keyTerms: [
        { term: 'incomplete distal RTA', definition: 'Normal serum HCO3 but impaired maximal acidification; presents with kidney stones without overt acidosis' },
        { term: 'furosemide-fludrocortisone test', definition: 'Preferred provocative test for distal RTA; assesses urine acidification under maximal stimulus' },
        { term: 'SLC4A1', definition: 'Gene encoding anion exchanger 1 (AE1); mutations cause autosomal dominant distal RTA' },
      ],
      clinicalNotes: 'Incomplete distal RTA is underdiagnosed in recurrent calcium phosphate stone formers. A random urine pH persistently >5.5 should prompt provocative testing or empiric citrate therapy.',
    },
    5: {
      level: 5,
      summary: 'Contemporary RTA research explores molecular pathogenesis, genotype-phenotype correlations, novel therapeutic targets, and the intersection with CKD-associated metabolic acidosis management.',
      explanation: `## Evolving Understanding

**Pendrin and Beta-Intercalated Cells:**
- Beta-intercalated cells secrete HCO3- via pendrin (Cl-/HCO3- exchanger)
- In acidosis, intercalated cell plasticity shifts beta to alpha phenotype
- Hensin (DMBT1) mediates this polarity switch
- Disruption may contribute to incomplete RTA phenotypes

**Acid-Base Sensing:**
- Proton-sensing GPCRs (GPR4, TDAG8) in kidney modulate acid-base responses
- Soluble adenylyl cyclase (sAC) acts as CO2/HCO3 sensor in intercalated cells
- These sensors are potential therapeutic targets

## CKD-Associated Metabolic Acidosis
- Not classic RTA but shares features (reduced ammoniagenesis, impaired HCO3 regeneration)
- Prevalence increases with declining GFR; present in ~20% of CKD stage 4-5
- Alkali therapy slows CKD progression:
  - BiCARB trial: NaHCO3 improved physical function but not eGFR in older CKD patients
  - UBI trial: Bicarbonate supplementation slowed GFR decline in CKD 3-5
  - TARGET recommended: Serum HCO3 22-26 mEq/L
- Veverimer (TRC101): Non-absorbed HCl binder; phase III showed sustained HCO3 correction (VALUE trial), FDA did not approve due to insufficient evidence of clinical benefit

## Emerging Concepts
- Dietary acid load (DAL) estimation: Net acid excretion correlates with CKD progression
- Fruits/vegetables as alkali therapy: Comparable to NaHCO3 for CKD progression in pilot studies
- Precision medicine: Genetic testing increasingly available for pediatric/inherited RTA
- V-ATPase modulation as therapeutic approach for distal RTA`,
      keyTerms: [
        { term: 'veverimer', definition: 'Non-absorbed oral HCl binder developed for CKD-associated metabolic acidosis; novel mechanism distinct from alkali supplementation' },
        { term: 'pendrin', definition: 'Cl-/HCO3- exchanger on beta-intercalated cells; mediates bicarbonate secretion and chloride reabsorption' },
        { term: 'intercalated cell plasticity', definition: 'Ability of collecting duct cells to switch between acid-secreting (alpha) and base-secreting (beta) phenotypes' },
      ],
      clinicalNotes: 'Metabolic acidosis in CKD (HCO3 <22) should be treated with alkali supplementation to target 22-26 mEq/L. Dietary interventions (increased fruits/vegetables) represent a low-risk adjunct. Genetic testing is cost-effective in pediatric RTA with hearing loss or other syndromic features.',
    },
  },
  media: [],
  citations: [
    { id: 'kdigo-ckd-2024', type: 'article', title: 'KDIGO 2024 Clinical Practice Guideline for CKD Evaluation and Management', source: 'Kidney International' },
    { id: 'brenner-rector-rta', type: 'textbook', title: 'Brenner & Rector\'s The Kidney', source: 'Elsevier', chapter: 'Renal Tubular Acidosis' },
  ],
  crossReferences: [
    { targetId: 'nephro-acute-tubular-necrosis', targetType: 'condition', relationship: 'sibling', label: 'Acute Tubular Necrosis' },
    { targetId: 'nephro-chronic-kidney-disease', targetType: 'condition', relationship: 'related', label: 'Chronic Kidney Disease' },
    { targetId: 'nephro-hyperkalemia', targetType: 'condition', relationship: 'see-also', label: 'Hyperkalemia' },
  ],
  tags: {
    systems: ['renal'],
    topics: ['pathology', 'acid-base', 'genetics'],
    keywords: ['RTA', 'renal tubular acidosis', 'non-anion gap', 'distal RTA', 'proximal RTA', 'Fanconi', 'nephrocalcinosis'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine'] },
  },
  createdAt: '2026-01-30T00:00:00.000Z',
  updatedAt: '2026-01-30T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default renalTubularAcidosis;
