/**
 * Kidney Stones - Educational Content
 */

import { EducationalContent } from '../../types';

export const kidneyStones: EducationalContent = {
  id: 'condition-kidney-stones',
  type: 'condition',
  name: 'Kidney Stones',
  alternateNames: ['Nephrolithiasis', 'Renal Calculi', 'Urolithiasis'],

  levels: {
    1: {
      level: 1,
      summary: 'Kidney stones are hard mineral deposits that form in your kidneys and can cause severe pain when they pass through your urinary system.',
      explanation: `Kidney stones are like small pebbles that form inside your kidneys from minerals in your urine.

**What Causes Them:**
- Not drinking enough water
- Eating too much salt or protein
- Some medical conditions
- Family history

**Symptoms:**
- Severe pain in your side or back
- Pain that comes and goes in waves
- Blood in your urine
- Nausea or vomiting
- Feeling like you need to urinate often

**Prevention:**
- Drink lots of water (8-10 glasses daily)
- Limit salt in your diet
- Eat fruits and vegetables
- Follow your doctor's dietary advice`,
      keyTerms: [
        { term: 'kidney stone', definition: 'A hard deposit of minerals that forms in your kidney' },
        { term: 'ureter', definition: 'The tube that carries urine from kidney to bladder where stones can get stuck' },
      ],
      analogies: [
        'Kidney stones form like salt crystals at the bottom of a glass when water evaporates.',
        'The pain from a passing stone is like trying to squeeze a marble through a drinking straw.',
      ],
      examples: [
        'Drinking 2-3 liters of water per day is one of the most effective ways to prevent stones.',
      ],
    },
    2: {
      level: 2,
      summary: 'Kidney stones are crystalline deposits in the urinary tract, classified by composition (calcium oxalate, uric acid, struvite, cystine), causing colicky pain when obstructing urine flow.',
      explanation: `## Types of Kidney Stones

**Calcium Oxalate (80%):**
- Most common type
- Hard, spiky crystals
- Related to diet and metabolic factors

**Uric Acid (10%):**
- Form in acidic urine (pH <5.5)
- Associated with gout
- Can dissolve with urinary alkalinization

**Struvite (5-10%):**
- "Infection stones"
- Form in alkaline urine
- Associated with urinary tract infections
- Can grow very large (staghorn)

**Cystine (1%):**
- Genetic disorder
- Recur frequently
- Require lifelong prevention

## Diagnosis

**Imaging:**
- CT scan (non-contrast): Gold standard
- Ultrasound: No radiation, first-line in pregnancy

**Laboratory:**
- Urinalysis: Blood, pH, crystals
- Basic metabolic panel
- Stone analysis when passed

## Treatment by Size

**<5mm:** Usually pass spontaneously
**5-10mm:** May need intervention
**>10mm:** Typically require treatment`,
      keyTerms: [
        { term: 'nephrolithiasis', definition: 'Medical term for kidney stones', pronunciation: 'nef-roh-lith-EYE-uh-sis' },
        { term: 'renal colic', definition: 'Severe, cramping pain caused by a stone blocking urine flow' },
        { term: 'staghorn calculus', definition: 'Large stone filling the kidney collecting system' },
      ],
      analogies: [
        'Different stone types are like different recipes - calcium stones need different prevention than uric acid stones.',
      ],
    },
    3: {
      level: 3,
      summary: 'Nephrolithiasis involves supersaturation-driven crystallization, influenced by urine composition, inhibitors, and promoters, requiring metabolic evaluation and targeted prevention.',
      explanation: `## Stone Formation Pathophysiology

**Supersaturation:**
- Concentration exceeds solubility
- Formation product: Nucleation threshold
- Metastable zone: Crystal growth on existing nuclei

**Inhibitors:**
- Citrate: Binds calcium
- Magnesium: Inhibits calcium oxalate
- Glycosaminoglycans
- Tamm-Horsfall protein
- Osteopontin, nephrocalcin

**Promoters:**
- Low urine volume
- High urinary calcium, oxalate, uric acid
- Low pH (uric acid, cystine)
- High pH (calcium phosphate, struvite)

## Metabolic Evaluation

**24-Hour Urine Collection:**
- Volume, calcium, oxalate, citrate
- Uric acid, sodium, creatinine
- pH, magnesium, phosphorus

**Common Findings:**
- Hypercalciuria (>250mg/day women, >300mg/day men)
- Hyperoxaluria (>40mg/day)
- Hypocitraturia (<320mg/day)
- Low urine volume (<2L/day)

## Treatment Modalities

**Medical Expulsive Therapy:**
- Alpha-blockers (tamsulosin)
- Facilitate stone passage
- Most effective for distal ureteral stones

**Surgical Options:**
- ESWL: Extracorporeal shock wave lithotripsy
- Ureteroscopy: Laser fragmentation
- PCNL: Percutaneous nephrolithotomy

**Prevention Strategies:**
- Thiazides: Reduce urinary calcium
- Potassium citrate: Increase citrate, alkalinize
- Allopurinol: Reduce uric acid`,
      keyTerms: [
        { term: 'supersaturation', definition: 'Condition when solute concentration exceeds solubility, enabling crystal formation' },
        { term: 'hypercalciuria', definition: 'Excess calcium in urine (>250-300 mg/day)', pronunciation: 'hy-per-kal-see-YUR-ee-ah' },
        { term: 'ESWL', definition: 'Extracorporeal shock wave lithotripsy - using sound waves to break stones' },
      ],
      clinicalNotes: 'All first-time stone formers should have stone analysis. Full metabolic evaluation recommended for recurrent stones, bilateral stones, or high-risk patients.',
    },
    4: {
      level: 4,
      summary: 'Advanced stone management requires understanding of complex metabolic disorders, surgical decision-making algorithms, and prevention of recurrence through targeted interventions.',
      explanation: `## Complex Metabolic Disorders

**Primary Hyperparathyroidism:**
- Elevated PTH and calcium
- 5% of stone formers
- Parathyroidectomy curative

**Enteric Hyperoxaluria:**
- Fat malabsorption → Calcium binds fat
- Free oxalate absorbed in colon
- Common after gastric bypass

**Distal Renal Tubular Acidosis:**
- Low urine citrate, high pH
- Calcium phosphate stones
- Nephrocalcinosis

**Cystinuria:**
- Autosomal recessive
- SLC3A1 or SLC7A9 mutations
- Requires massive hydration (>3L/day)

## Surgical Decision Making

**ESWL Considerations:**
- Stone <2cm, low density on CT
- Not ideal for lower pole
- Contraindicated in pregnancy, anticoagulation

**Ureteroscopy Advantages:**
- Any stone location
- Direct visualization
- Higher single-procedure stone-free rate

**PCNL Indications:**
- Stones >2cm
- Staghorn calculi
- ESWL failures
- Lower pole stones >1cm

## Advanced Prevention

**Thiazides:**
- Reduce calciuria by 50%
- HCTZ, chlorthalidone, indapamide
- Watch for hypokalemia

**Potassium Citrate:**
- 30-60 mEq/day in divided doses
- Increases urinary citrate and pH
- Beneficial for most stone types

**Dietary Modifications:**
- Sodium <2300mg/day
- Normal calcium intake (1000-1200mg/day)
- Moderate animal protein
- Increase fruits/vegetables

## Pregnancy Considerations

- Ultrasound first-line imaging
- Low-dose CT if needed
- Conservative management preferred
- Stenting if necessary`,
      keyTerms: [
        { term: 'enteric hyperoxaluria', definition: 'Increased oxalate absorption due to fat malabsorption in bowel disease' },
        { term: 'renal tubular acidosis', definition: 'Defect in renal acid excretion leading to alkaline urine and stone formation' },
        { term: 'PCNL', definition: 'Percutaneous nephrolithotomy - direct kidney access for large stone removal' },
      ],
      clinicalNotes: 'Restricting dietary calcium paradoxically INCREASES stone risk by allowing more oxalate absorption. Recommend normal calcium intake with meals.',
    },
    5: {
      level: 5,
      summary: 'Expert stone management encompasses rare genetic disorders, novel surgical techniques, emerging medical therapies, and global prevention strategies.',
      explanation: `## Rare Genetic Disorders

**Primary Hyperoxaluria:**
- Type 1 (AGXT): Most severe
- Type 2 (GRHPR)
- Type 3 (HOGA1)
- May require combined liver-kidney transplant (Type 1)
- Lumasiran (RNAi) approved for PH1

**Dent Disease:**
- X-linked
- Low molecular weight proteinuria
- Hypercalciuria, nephrocalcinosis

**2,8-Dihydroxyadenine Stones:**
- APRT deficiency
- Radiolucent stones
- Allopurinol preventive

## Advanced Surgical Techniques

**Miniaturized PCNL:**
- Mini-PCNL (14-20 Fr)
- Ultramini-PCNL (11-13 Fr)
- Micro-PCNL (4.8 Fr)
- Reduced bleeding, shorter stay

**Robotic Surgery:**
- Robotic pyelolithotomy
- Complex anatomy
- Anatrophic nephrolithotomy

**ECIRS:**
- Endoscopic Combined Intrarenal Surgery
- Simultaneous antegrade and retrograde
- Large/complex stones

## Emerging Therapies

**Novel Stone Dissolution:**
- EDTA chelation (experimental)
- Phytate analogs
- Stone surface modification

**Microbiome Research:**
- Oxalobacter formigenes
- Oxalate-degrading probiotics
- Limited clinical evidence

**Genetic Testing:**
- Targeted gene panels
- Rare stone disorders
- Personalized prevention

## Fragments and Residuals

**Clinically Insignificant Residual Fragments:**
- <4mm traditionally
- Risk of growth/symptoms: 20-40% at 5 years
- Stone-free should be the goal

**Surveillance Strategy:**
- Annual imaging
- Annual metabolic evaluation
- Adjust prevention based on trends`,
      keyTerms: [
        { term: 'lumasiran', definition: 'RNA interference therapy targeting HAO1 for primary hyperoxaluria type 1' },
        { term: 'ECIRS', definition: 'Combined simultaneous antegrade and retrograde approach for complex stones' },
        { term: 'primary hyperoxaluria', definition: 'Genetic disorders of glyoxylate metabolism causing severe stone disease and systemic oxalosis' },
      ],
      clinicalNotes: 'Primary hyperoxaluria type 1 can cause systemic oxalosis when GFR drops. Early referral to specialized center is essential. Lumasiran represents a new era of RNA-based therapeutics in stone disease.',
    },
  },

  media: [],
  citations: [
    {
      id: 'aua-stones-guidelines',
      type: 'article',
      title: 'Surgical Management of Stones',
      source: 'AUA/Endourological Society Guideline',
    },
  ],
  crossReferences: [
    { targetId: 'kidney-kidney-stone-types', targetType: 'topic', relationship: 'related', label: 'Stone Types' },
    { targetId: 'prevention-stone-prevention', targetType: 'topic', relationship: 'related', label: 'Stone Prevention' },
  ],
  tags: {
    systems: ['urinary', 'renal'],
    topics: ['stones', 'urology'],
    clinicalRelevance: 'critical',
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default kidneyStones;
