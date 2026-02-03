/**
 * Acid-Base Balance - Comprehensive Educational Content
 *
 * Covers pH homeostasis, buffer systems, respiratory/renal compensation,
 * metabolic and respiratory acidosis/alkalosis, anion gap, and Stewart approach.
 */

import { EducationalContent } from '../../types';

export const acidBaseBalance: EducationalContent = {
  id: 'physiology-acid-base-balance',
  type: 'process',
  name: 'Acid-Base Balance',
  nameEs: 'Equilibrio Acido-Base',
  alternateNames: ['pH Homeostasis', 'Acid-Base Physiology', 'Blood pH Regulation'],

  levels: {
    1: {
      level: 1,
      summary: 'Your body carefully controls the acidity of your blood, keeping it in a narrow safe range using your lungs and kidneys as balancing tools.',
      explanation: `## Keeping Your Blood Just Right

### What Is pH?

pH measures how acidic or basic (alkaline) something is on a scale of 0-14:
- **Acidic** (pH below 7): Lemon juice, vinegar
- **Neutral** (pH 7): Pure water
- **Basic/alkaline** (pH above 7): Baking soda, soap

### Your Blood Has a Sweet Spot

Your blood pH must stay between **7.35 and 7.45** -- slightly basic. Even small changes outside this range can make you very sick.

### How Your Body Keeps Balance

Two main organs keep your blood pH stable:

1. **Lungs** (fast response -- minutes): By breathing faster or slower, you blow off more or less CO2. CO2 makes blood more acidic, so breathing faster makes blood less acidic.

2. **Kidneys** (slow response -- hours to days): Your kidneys can get rid of extra acid in your urine and make bicarbonate (a base) to neutralize acid in your blood.

### What Goes Wrong?

- **Acidosis**: Blood becomes too acidic (pH below 7.35)
- **Alkalosis**: Blood becomes too basic (pH above 7.45)
- Both can make you confused, nauseated, or very sick`,
      keyTerms: [
        { term: 'pH', definition: 'A scale from 0-14 measuring how acidic or basic something is' },
        { term: 'acidosis', definition: 'When blood becomes too acidic (pH below 7.35)' },
        { term: 'alkalosis', definition: 'When blood becomes too basic (pH above 7.45)' },
        { term: 'bicarbonate', definition: 'A chemical in blood that acts like a base to neutralize acid' },
      ],
      analogies: [
        'Your body is like a swimming pool -- the pH must stay in a narrow range or things go wrong.',
        'Lungs are the fast thermostat and kidneys are the slow but powerful furnace for pH control.',
        'Bicarbonate is like baking soda neutralizing acid in your blood.',
      ],
      examples: [
        'When you exercise hard, your muscles make lactic acid, and you breathe faster to blow off CO2 and keep pH normal.',
        'People with severe vomiting can become alkalotic because they lose stomach acid.',
        'Diabetic ketoacidosis is a dangerous condition where too much acid builds up in the blood.',
      ],
      patientCounselingPoints: [
        'Your lungs and kidneys work together to keep blood pH balanced.',
        'Severe vomiting or diarrhea can upset your acid-base balance.',
        'An arterial blood gas (ABG) test measures your blood pH and acid-base status.',
      ],
    },
    2: {
      level: 2,
      summary: 'Blood pH (7.35-7.45) is maintained by buffer systems, respiratory CO2 elimination, and renal bicarbonate handling, with disturbances classified as metabolic or respiratory acidosis/alkalosis.',
      explanation: `## Acid-Base Balance

### Normal Values

| Parameter | Normal Range |
|-----------|-------------|
| pH | 7.35 - 7.45 |
| PaCO2 | 35 - 45 mmHg |
| HCO3- | 22 - 26 mEq/L |

### The Henderson-Hasselbalch Equation (Simplified)

**pH is determined by the ratio of HCO3- (base) to CO2 (acid)**

- pH = 6.1 + log(HCO3- / 0.03 x PaCO2)
- Normal ratio: 20:1 (HCO3-:CO2)
- Think of it as: pH depends on kidneys (HCO3-) / lungs (CO2)

### Three Lines of Defense

**1. Chemical buffers (seconds)**
- Bicarbonate buffer: H+ + HCO3- <-> H2CO3 <-> CO2 + H2O (most important extracellular buffer)
- Hemoglobin buffer (major intracellular blood buffer)
- Phosphate buffer (important in urine and intracellular fluid)
- Protein buffers

**2. Respiratory compensation (minutes)**
- Acidosis -> increased ventilation -> blow off CO2 -> raise pH
- Alkalosis -> decreased ventilation -> retain CO2 -> lower pH

**3. Renal compensation (hours to days)**
- Acidosis -> kidneys excrete H+ and generate new HCO3-
- Alkalosis -> kidneys excrete HCO3- and retain H+

### Four Primary Disorders

| Disorder | pH | Primary Change | Compensation |
|----------|-----|---------------|--------------|
| Metabolic acidosis | Low | Low HCO3- | Decreased PaCO2 (hyperventilation) |
| Metabolic alkalosis | High | High HCO3- | Increased PaCO2 (hypoventilation) |
| Respiratory acidosis | Low | High PaCO2 | Increased HCO3- (renal) |
| Respiratory alkalosis | High | Low PaCO2 | Decreased HCO3- (renal) |

### Common Causes

**Metabolic acidosis:** Diabetic ketoacidosis, lactic acidosis, diarrhea, renal failure
**Metabolic alkalosis:** Vomiting, diuretics, excess alkali intake
**Respiratory acidosis:** COPD, respiratory failure, sedation
**Respiratory alkalosis:** Hyperventilation (anxiety, pain, high altitude)`,
      keyTerms: [
        { term: 'Henderson-Hasselbalch equation', definition: 'Formula showing pH depends on the ratio of bicarbonate to CO2' },
        { term: 'PaCO2', definition: 'Partial pressure of carbon dioxide in arterial blood; controlled by lungs' },
        { term: 'bicarbonate (HCO3-)', definition: 'The main base in blood; controlled by kidneys' },
        { term: 'compensation', definition: 'The body\'s response to restore pH toward normal by adjusting the opposite system' },
        { term: 'buffer', definition: 'A chemical that resists pH change by absorbing or releasing H+ ions' },
        { term: 'ABG', definition: 'Arterial blood gas test measuring pH, PaCO2, and HCO3-' },
      ],
      analogies: [
        'The bicarbonate-CO2 system is like a seesaw -- kidneys control one side (HCO3-) and lungs control the other (CO2).',
        'Buffers are like sponges that soak up excess acid or base to prevent big pH swings.',
        'Compensation is like turning up the heat when someone opens a window -- it does not fix the window but keeps the room comfortable.',
      ],
      examples: [
        'A patient with DKA has pH 7.10, HCO3- 8, PaCO2 20 -- metabolic acidosis with respiratory compensation.',
        'A COPD patient with chronic CO2 retention may have pH 7.36, PaCO2 60, HCO3- 34 -- compensated respiratory acidosis.',
        'Kussmaul breathing (deep rapid breathing) is the body trying to blow off CO2 to compensate for metabolic acidosis.',
      ],
    },
    3: {
      level: 3,
      summary: 'Acid-base homeostasis involves bicarbonate/CO2 buffering governed by Henderson-Hasselbalch, respiratory minute ventilation control of PaCO2, renal bicarbonate reclamation/generation via carbonic anhydrase and ammoniagenesis, with the anion gap distinguishing metabolic acidosis etiologies.',
      explanation: `## Acid-Base Physiology

### Buffer Systems

**Bicarbonate system (most important ECF buffer):**
CO2 + H2O <-> H2CO3 <-> H+ + HCO3- (carbonic anhydrase catalyzed)
Open system: CO2 eliminated by lungs; HCO3- regulated by kidneys.

**Hemoglobin:** 6x more buffering than plasma proteins. Deoxyhemoglobin binds H+ better (Bohr effect). Chloride shift: HCO3- exits RBC via AE1 as CO2 enters.

**Phosphate:** HPO4(2-) + H+ -> H2PO4(-). Important in ICF and urine (titratable acid).

### Respiratory Regulation

**Central chemoreceptors** (medulla): Respond to CSF pH (CO2 crosses BBB -> H+ in CSF). Primary driver of ventilation.
**Peripheral chemoreceptors** (carotid/aortic bodies): Respond to PaO2 (<60 mmHg), PaCO2, and pH.

**Compensation rules:**
- Metabolic acidosis: PaCO2 = 1.5(HCO3-) + 8 +/- 2 (Winter formula)
- Metabolic alkalosis: PaCO2 rises ~0.7 for each 1 mEq/L HCO3- increase
- Acute respiratory: HCO3- changes 1 per 10 PaCO2 change
- Chronic respiratory: HCO3- changes 3.5 per 10 PaCO2 change

### Renal Acid-Base Handling

**HCO3- reclamation (PCT, 80%):**
NHE3 secretes H+ -> H+ + filtered HCO3- -> H2CO3 -> CO2 + H2O (CA-IV) -> CO2 enters cell -> CA-II generates H+ + HCO3- -> HCO3- exits via NBC1.

**New HCO3- generation:**
- Titratable acid: H+ + HPO4(2-) -> H2PO4(-) in urine
- Ammoniagenesis: Glutamine -> NH4+ + alpha-KG -> new HCO3- (PCT)
- NH4+ excretion: Non-ionic diffusion trapping in collecting duct

Chronic acidosis upregulates glutaminase 5-10x over 3-5 days.

### Anion Gap

**AG = Na+ - (Cl- + HCO3-)**. Normal: 10-12 mEq/L (or 8 with K+).

**Elevated AG metabolic acidosis (MUDPILES):**
Methanol, Uremia, DKA, Propylene glycol, INH/Iron, Lactic acidosis, Ethylene glycol, Salicylates

**Normal AG (hyperchloremic) metabolic acidosis (HARDASS):**
Hyperalimentation, Acetazolamide, RTA, Diarrhea, Addison disease, Spironolactone, Saline infusion

### Delta-Delta Ratio

**Delta ratio = (AG - 12) / (24 - HCO3-)**
- <1: Mixed AG + non-AG metabolic acidosis
- 1-2: Pure AG metabolic acidosis
- > 2: AG metabolic acidosis + metabolic alkalosis`,
      keyTerms: [
        { term: 'anion gap', definition: 'Na+ - (Cl- + HCO3-); elevated in organic acid accumulation (DKA, lactic acidosis)' },
        { term: 'Winter formula', definition: 'Expected PaCO2 = 1.5(HCO3-) + 8 +/- 2; checks respiratory compensation in metabolic acidosis' },
        { term: 'titratable acid', definition: 'Urinary H+ buffered by phosphate (HPO4 -> H2PO4); contributes to new HCO3- generation' },
        { term: 'ammoniagenesis', definition: 'PCT glutamine metabolism producing NH4+ and new HCO3-; upregulated 5-10x in chronic acidosis' },
        { term: 'delta-delta ratio', definition: 'Compares AG elevation to HCO3- decrease to detect mixed acid-base disorders' },
        { term: 'chloride shift', definition: 'HCO3- exits RBC via AE1 as CO2 enters; maintains electroneutrality during CO2 transport' },
      ],
      clinicalNotes: 'Systematic ABG interpretation: 1) Assess pH (acidemia vs alkalemia). 2) Identify primary disorder (metabolic vs respiratory). 3) Check compensation (Winter formula, expected changes). 4) If metabolic acidosis, calculate anion gap. 5) If AG elevated, calculate delta-delta for mixed disorders. This stepwise approach catches >95% of acid-base disturbances.',
    },
    4: {
      level: 4,
      summary: 'Advanced acid-base physiology integrates the Stewart physicochemical approach (SID, Atot, PaCO2), detailed renal tubular acid handling, RTA classification, and systematic assessment of complex mixed disorders using anion gap, delta ratio, and strong ion difference.',
      explanation: `## Advanced Acid-Base Physiology

### Stewart Approach (Physicochemical)

Three independent variables determine pH:
1. **Strong ion difference (SID):** (Na+ + K+ + Ca2+ + Mg2+) - (Cl- + lactate). Normal ~40 mEq/L.
2. **Total weak acid concentration (Atot):** Albumin + phosphate.
3. **PaCO2**

**Clinical application:**
- SID decrease (excess Cl- relative to Na+) -> acidosis (e.g., saline infusion)
- SID increase (Cl- loss) -> alkalosis (e.g., vomiting, diuretics)
- Atot decrease (hypoalbuminemia) -> alkalosis
- Corrected AG = AG + 2.5 x (4.0 - albumin)

### Renal Tubular Acidosis

| Type | Defect | pH urine | K+ | AG | Mechanism |
|------|--------|----------|----|----|-----------|
| Type 1 (distal) | H+ secretion | >5.5 | Low | Normal | H+-ATPase or AE1 dysfunction |
| Type 2 (proximal) | HCO3- reabsorption | <5.5* | Low | Normal | CA-II, NBC1, or generalized PCT dysfunction |
| Type 4 (hypoaldo) | Aldosterone deficiency/resistance | <5.5 | High | Normal | Reduced ENaC, reduced NH4+ excretion |

*Type 2: Urine pH >5.5 only when serum HCO3- is above the lowered threshold; below threshold the distal nephron can acidify normally.

### Lactic Acidosis

**Type A:** Tissue hypoxia (shock, cardiac arrest, severe anemia, CO poisoning)
**Type B:** No hypoxia -- mitochondrial dysfunction (metformin, linezolid, NRTIs), hepatic failure, malignancy, thiamine deficiency

**D-lactic acidosis:** Short bowel syndrome; colonic bacteria ferment carbohydrates to D-lactate; standard lactate assay measures L-lactate only -> unexplained AG acidosis.

### Metabolic Alkalosis: Maintenance

**Chloride-responsive (UCl <20):** Vomiting, NG suction, post-hypercapnia. Volume/Cl- depletion maintains alkalosis by: 1) Increased PCT HCO3- reabsorption (volume contraction); 2) Decreased Cl- delivery to pendrin in B-intercalated cells.

**Chloride-resistant (UCl >20):** Hyperaldosteronism, Cushing, Bartter/Gitelman, severe hypokalemia. Alkalosis maintained by mineralocorticoid-driven H+ secretion.

### Complex Mixed Disorders

**Triple acid-base disorder example:** DKA + vomiting: AG metabolic acidosis (ketoacids) + metabolic alkalosis (vomiting) + respiratory alkalosis (Kussmaul overshoot).

**Diagnostic approach:**
1. pH, PaCO2, HCO3- assessment
2. AG calculation (correct for albumin)
3. Delta-delta ratio
4. Check compensation formulas
5. Clinical context integration`,
      keyTerms: [
        { term: 'strong ion difference', definition: 'Sum of strong cations minus strong anions; independent determinant of pH in Stewart approach; normal ~40' },
        { term: 'corrected anion gap', definition: 'AG + 2.5 x (4.0 - albumin); accounts for hypoalbuminemia masking AG elevation' },
        { term: 'RTA type 1', definition: 'Distal RTA: inability to secrete H+ in collecting duct; urine pH >5.5; hypokalemia; nephrolithiasis/nephrocalcinosis' },
        { term: 'RTA type 4', definition: 'Hyperkalemic RTA from aldosterone deficiency/resistance; impaired NH4+ excretion; most common RTA in adults' },
        { term: 'D-lactic acidosis', definition: 'AG acidosis from colonic bacterial D-lactate production in short bowel syndrome; missed by standard L-lactate assay' },
        { term: 'chloride-responsive alkalosis', definition: 'Metabolic alkalosis maintained by volume/Cl- depletion (UCl <20); corrected by saline' },
      ],
      clinicalNotes: 'Always correct the anion gap for albumin -- hypoalbuminemia (common in ICU) can mask an elevated AG. Each 1 g/dL decrease in albumin lowers AG by ~2.5. Type 4 RTA is the most common RTA in adults (diabetic nephropathy, ACEi/ARB, K+-sparing diuretics). In metabolic alkalosis, urine chloride (<20 vs >20) distinguishes chloride-responsive from chloride-resistant causes and guides treatment.',
    },
    5: {
      level: 5,
      summary: 'Contemporary acid-base assessment synthesizes traditional Henderson-Hasselbalch with Stewart physicochemical analysis, integrates molecular tubular transport defects in RTA, leverages base excess/SBE for quantification, and applies precision diagnostics in critical care including unmeasured anions and strong ion gap.',
      explanation: `## Precision Acid-Base Assessment

### Stewart vs. Traditional: Integration

**Strong ion gap (SIG) = SIDa - SIDe** where:
- SIDa (apparent) = (Na + K + Ca + Mg) - (Cl + lactate)
- SIDe (effective) = HCO3- + albumin charge + phosphate charge
- SIG >2 indicates unmeasured anions (similar to corrected AG)

**Advantages of Stewart:** Explains dilutional acidosis (saline-induced SID decrease), hypoalbuminemic alkalosis, and allows quantification of each independent contributor.

**Base excess (BE):** Standardized to hemoglobin (SBE); represents metabolic acid-base deviation. Normal: -2 to +2. SBE change of 1 = ~1 mEq/L change in HCO3-.

### Molecular RTA Genetics

**Type 1:** ATP6V1B1 (H+-ATPase B1 subunit, deafness); ATP6V0A4 (a4 subunit); SLC4A1 (AE1, AD/AR forms). Incomplete forms: nephrolithiasis only.
**Type 2:** SLC4A4 (NBC1, with ocular abnormalities); CA2 mutations (osteopetrosis + RTA); Fanconi syndrome (generalized PCT dysfunction).
**Type 4:** CYP11B2 (aldosterone synthase); NR3C2 (MR); SCNN1A/B/G (ENaC -- PHA1); WNK1/4, KLHL3/CUL3 (Gordon syndrome).

### Critical Care Acid-Base

**Unmeasured anions in sepsis:** SIG elevation (>2-5) from circulating organic acids (succinate, citrate, formate) independently predicts mortality. AG may underestimate due to hypoalbuminemia.

**Permissive hypercapnia:** ARDS lung-protective ventilation accepts PaCO2 50-80 mmHg. Renal compensation over 48-72h. Contraindicated in elevated ICP.

**BICAR-ICU trial:** Sodium bicarbonate for severe metabolic acidemia (pH <7.20) with AKI KDIGO 2-3 reduced composite of death/need for RRT. NNT ~6 in AKI subgroup.

**Alkali therapy in CKD:** Sodium bicarbonate (target HCO3- >22) or dietary acid reduction (fruits/vegetables) may slow progression. Mechanism: Reduced ammoniagenesis -> reduced complement activation -> less tubulointerstitial injury.

### Point-of-Care Integration

**VBG vs. ABG:** Venous pH within 0.03 of arterial; venous PCO2 ~6 higher. VBG adequate for most metabolic assessments; ABG reserved for precise PaCO2/PaO2 needs.
**Osmolar gap:** (Measured - calculated osmolality) >10 suggests toxic alcohols (methanol, ethylene glycol) or propylene glycol.
**Urine anion gap:** (Na + K) - Cl. Positive in RTA (impaired NH4+ excretion); negative in diarrhea (appropriate NH4+ response).`,
      keyTerms: [
        { term: 'strong ion gap', definition: 'SIDa - SIDe; quantifies unmeasured anions in Stewart framework; >2 is abnormal' },
        { term: 'base excess', definition: 'Quantitative measure of metabolic acid-base deviation; standardized BE corrects for hemoglobin' },
        { term: 'BICAR-ICU', definition: 'Trial showing bicarbonate benefit in severe acidemia (pH <7.20) with AKI KDIGO 2-3' },
        { term: 'permissive hypercapnia', definition: 'Accepting elevated PaCO2 during lung-protective ventilation in ARDS' },
        { term: 'urine anion gap', definition: '(Na+K)-Cl in urine; estimates NH4+ excretion; positive in RTA, negative in diarrhea' },
        { term: 'osmolar gap', definition: 'Measured minus calculated osmolality; >10 suggests toxic alcohol ingestion' },
      ],
      clinicalNotes: `1) In ICU, correct AG for albumin and calculate SIG for unmeasured anions -- standard AG misses significant acidosis in hypoalbuminemic patients. 2) VBG is sufficient for most acid-base assessments; reserve ABG for precise oxygenation/ventilation needs. 3) BICAR-ICU provides level 1 evidence for bicarbonate in severe acidemia with AKI. 4) Urine anion gap and osmolar gap are essential bedside tools for narrowing metabolic acidosis differential. 5) CKD patients benefit from maintaining HCO3- >22 mEq/L to slow progression.`,
    },
  },

  media: [
    { id: 'acid-base-algorithm', type: 'diagram', filename: 'acid-base-interpretation.svg',
      title: 'ABG Interpretation Algorithm', description: 'Stepwise approach to acid-base disorder identification' },
    { id: 'renal-acid-handling', type: 'diagram', filename: 'renal-acid-base.svg',
      title: 'Renal Acid-Base Handling', description: 'PCT bicarbonate reclamation and collecting duct acid secretion' },
  ],

  citations: [
    { id: 'boron-acid-base', type: 'textbook', title: 'Medical Physiology', authors: ['Boron WF', 'Boulpaep EL'], source: 'Elsevier', chapter: '28' },
    { id: 'rose-clinical', type: 'textbook', title: 'Clinical Physiology of Acid-Base and Electrolyte Disorders', authors: ['Rose BD', 'Post TW'], source: 'McGraw-Hill' },
  ],

  crossReferences: [
    { targetId: 'physiology-nephron', targetType: 'topic', relationship: 'parent', label: 'Nephron Physiology' },
    { targetId: 'physiology-glomerular-filtration', targetType: 'topic', relationship: 'sibling', label: 'Glomerular Filtration' },
    { targetId: 'physiology-respiratory-control', targetType: 'topic', relationship: 'related', label: 'Respiratory Control' },
    { targetId: 'condition-dka', targetType: 'condition', relationship: 'see-also', label: 'Diabetic Ketoacidosis' },
  ],

  tags: {
    systems: ['renal', 'respiratory'],
    topics: ['physiology', 'nephrology', 'critical care', 'acid-base'],
    keywords: ['pH', 'acidosis', 'alkalosis', 'bicarbonate', 'anion gap', 'ABG', 'buffer', 'compensation'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'surgery'] },
  },

  createdAt: '2026-01-30T00:00:00.000Z',
  updatedAt: '2026-01-30T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default acidBaseBalance;
