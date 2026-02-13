/**
 * Adrenal Function - Endocrine Physiology
 *
 * Comprehensive coverage of adrenal gland physiology:
 * - Cortisol synthesis, regulation, and effects
 * - Aldosterone and mineralocorticoid function
 * - Adrenal medulla catecholamine production
 * - HPA axis regulation
 * - Clinical disorders pathophysiology
 */

import { EducationalContent } from '../../types';

export const ADRENAL_FUNCTION: EducationalContent = {
  id: 'physiology-adrenal-function',
  type: 'concept',
  name: 'Adrenal Gland Function',
  alternateNames: ['Adrenal Physiology', 'HPA Axis', 'Cortisol and Aldosterone Regulation'],

  levels: {
    1: {
      level: 1,
      summary: 'Your adrenal glands sit on top of your kidneys and make hormones that help you handle stress, control blood pressure, and balance salt and water in your body.',
      explanation: `**What Are the Adrenal Glands?**
You have two small glands, one on top of each kidney. Even though they are small (about the size of a grape), they are very important for keeping you healthy.

**What Do They Make?**

**1. Cortisol - The Stress Hormone:**
- Helps you wake up in the morning
- Gives you energy when you are stressed or sick
- Keeps your blood sugar stable
- Helps control inflammation

**2. Aldosterone - The Salt Hormone:**
- Tells your kidneys to hold onto salt
- This helps control your blood pressure
- Keeps the right balance of minerals in your body

**3. Adrenaline (Epinephrine) - The Fight-or-Flight Hormone:**
- Released when you are scared or excited
- Makes your heart beat faster
- Gives you a burst of energy
- Helps you react quickly in emergencies

**When Things Go Wrong:**

**Too Much Cortisol (Cushing's):**
- Gain weight, especially in the belly and face
- Skin becomes thin and bruises easily
- Feel weak, bones can become fragile
- High blood sugar and blood pressure

**Too Little Cortisol (Addison's):**
- Feel very tired all the time
- Low blood pressure, dizzy when standing
- Skin may get darker
- Can be dangerous if you get sick or stressed

**Why This Matters:**
- Doctors may test your cortisol if you are very tired or have unusual weight gain
- Some medicines (steroids like prednisone) work like cortisol
- The adrenal glands help you cope with everything from exercise to illness`,
      keyTerms: [
        { term: 'adrenal gland', definition: 'Small glands on top of your kidneys that make stress and blood pressure hormones' },
        { term: 'cortisol', definition: 'The main stress hormone that helps you wake up and handle tough situations' },
        { term: 'adrenaline', definition: 'The fight-or-flight hormone that gives you quick energy in emergencies' },
        { term: 'aldosterone', definition: 'Hormone that tells kidneys to hold onto salt to control blood pressure' },
      ],
      analogies: [
        'Cortisol is like your body\'s alarm clock that also helps you handle emergencies.',
        'Adrenaline is like hitting the turbo button in a video game - instant boost of power and speed.',
        'Aldosterone acts like a dam controller, deciding how much water and salt your body keeps or releases.',
      ],
      examples: [
        'When you have a big test, cortisol helps you stay alert and focused.',
        'When a loud noise scares you, adrenaline makes your heart pound and you feel ready to run.',
        'When you eat salty food, aldosterone adjusts to help maintain the right salt balance.',
      ],
    },
    2: {
      level: 2,
      summary: 'The adrenal glands have two distinct parts: the cortex (outer layer) produces steroid hormones including cortisol and aldosterone, while the medulla (inner core) produces catecholamines like epinephrine; cortisol is regulated by the hypothalamic-pituitary-adrenal (HPA) axis.',
      explanation: `**Adrenal Gland Structure:**

| Layer | Hormones | Regulation | Main Functions |
|-------|----------|------------|----------------|
| Zona glomerulosa | Aldosterone | Angiotensin II, K+ | Blood pressure, Na+/K+ balance |
| Zona fasciculata | Cortisol | ACTH | Stress response, metabolism |
| Zona reticularis | DHEA, androgens | ACTH | Weak androgens |
| Medulla | Epinephrine, norepinephrine | Sympathetic nerves | Fight-or-flight response |

**Cortisol Functions:**

1. **Metabolism:**
   - Raises blood sugar (gluconeogenesis)
   - Breaks down fat and protein for energy
   - Redistributes fat to central body

2. **Immune System:**
   - Reduces inflammation
   - Suppresses immune activity
   - This is why steroid medications reduce swelling

3. **Cardiovascular:**
   - Maintains blood pressure
   - Makes blood vessels responsive to catecholamines

4. **Other:**
   - Affects mood and cognition
   - Maintains bone health (excess causes loss)

**HPA Axis Regulation:**

The brain controls cortisol through a chain of signals:
1. Hypothalamus releases CRH (Corticotropin-Releasing Hormone)
2. Pituitary releases ACTH (Adrenocorticotropic Hormone)
3. Adrenal cortex releases Cortisol
4. Cortisol feeds back to suppress CRH and ACTH

**Daily Rhythm:**
- Cortisol is highest in the morning (6-8 AM)
- Lowest at midnight
- This helps you wake up and wind down

**Aldosterone System (RAAS):**

When blood pressure drops or sodium is low:
1. Kidneys release Renin
2. Renin converts angiotensinogen to Angiotensin I
3. ACE converts Angiotensin I to Angiotensin II
4. Angiotensin II stimulates aldosterone release
5. Aldosterone makes kidneys retain sodium (and water)
6. Blood pressure rises

**Catecholamines (Medulla):**

| Hormone | Effects | Released When |
|---------|---------|---------------|
| Epinephrine (80%) | Heart rate↑, blood sugar↑, bronchodilation | Stress, fear, exercise |
| Norepinephrine (20%) | Blood vessel constriction, BP↑ | Continuous low level |`,
      keyTerms: [
        { term: 'HPA axis', definition: 'Hypothalamic-Pituitary-Adrenal axis - the chain of hormones that controls cortisol' },
        { term: 'ACTH', definition: 'Adrenocorticotropic Hormone from the pituitary that stimulates cortisol production' },
        { term: 'CRH', definition: 'Corticotropin-Releasing Hormone from hypothalamus that triggers ACTH release' },
        { term: 'RAAS', definition: 'Renin-Angiotensin-Aldosterone System - controls blood pressure through aldosterone' },
        { term: 'glucocorticoid', definition: 'Another name for cortisol-type hormones that affect glucose metabolism' },
        { term: 'mineralocorticoid', definition: 'Another name for aldosterone-type hormones that affect mineral (salt) balance' },
      ],
      analogies: [
        'The HPA axis is like a three-level thermostat: the hypothalamus sets the goal, the pituitary manages the system, and the adrenals do the heating/cooling.',
        'The RAAS system is like a fire brigade bucket chain - renin starts it, angiotensin passes the signal, and aldosterone does the final work.',
        'The adrenal gland is like an orange: the outer peel (cortex) and inner fruit (medulla) are completely different.',
      ],
    },
    3: {
      level: 3,
      summary: 'Adrenal steroidogenesis follows zone-specific enzyme expression patterns; cortisol secretion is pulsatile with circadian variation and stress-responsive via CRH-ACTH stimulation; aldosterone is primarily regulated by angiotensin II and potassium; catecholamine synthesis requires tyrosine hydroxylase and PNMT in chromaffin cells.',
      explanation: `**Steroidogenesis Pathway:**

All adrenal steroids derive from cholesterol through sequential enzyme reactions:

\`\`\`
Cholesterol
    ↓ (CYP11A1/StAR)
Pregnenolone → Progesterone
    ↓                    ↓
17-OH-Pregnenolone  →  17-OH-Progesterone
    ↓                    ↓
DHEA              →  Androstenedione
                           ↓
        (11β-hydroxylase)  ↓
Cortisol ←  11-Deoxycortisol
\`\`\`

**Zone-Specific Enzyme Expression:**

| Zone | Key Enzymes | Products |
|------|-------------|----------|
| Glomerulosa | CYP11B2 (aldosterone synthase) | Aldosterone |
| Fasciculata | CYP17A1, CYP11B1 | Cortisol |
| Reticularis | CYP17A1 (lyase activity), SULT2A1 | DHEA, DHEA-S |

**Cortisol Regulation:**

*CRH-ACTH-Cortisol Cascade:*
1. CRH released from PVN neurons → median eminence
2. CRH binds CRHR1 on corticotrophs → cAMP
3. POMC cleaved → ACTH (1-39) + β-endorphin + α-MSH
4. ACTH binds MC2R on adrenal → cAMP → StAR activation
5. Cortisol synthesis (minutes) and release

*Feedback:*
- Fast feedback (minutes): Inhibits CRH release
- Intermediate (hours): Inhibits ACTH synthesis
- Slow (days): Alters set-point of HPA axis

*Circadian Rhythm:*
- Controlled by SCN (suprachiasmatic nucleus)
- Morning cortisol: 10-20 μg/dL
- Evening cortisol: <5 μg/dL
- Loss of rhythm: Depression, Cushing's

**Aldosterone Regulation:**

*Primary Stimuli:*
1. Angiotensin II: Main regulator
   - AT1 receptor → PLC → Ca²⁺ → CYP11B2 expression
2. Potassium: Direct effect
   - Depolarization → Ca²⁺ influx → aldosterone synthesis
3. ACTH: Minor effect (initial response only)

*Aldosterone Actions on Collecting Duct:*
- Binds mineralocorticoid receptor (MR)
- Increases ENaC expression (Na⁺ reabsorption)
- Increases Na⁺/K⁺-ATPase
- Increases ROMK (K⁺ secretion)
- Net: Na⁺ retention, K⁺ excretion, H⁺ excretion

**Catecholamine Synthesis:**

\`\`\`
Tyrosine
  ↓ (Tyrosine hydroxylase) - rate-limiting
L-DOPA
  ↓ (DOPA decarboxylase)
Dopamine
  ↓ (Dopamine β-hydroxylase)
Norepinephrine
  ↓ (PNMT) - cortisol-induced
Epinephrine
\`\`\`

*Chromaffin Cells:*
- Modified sympathetic neurons
- Store catecholamines in chromaffin granules
- Release by exocytosis (acetylcholine stimulus)
- PNMT expression requires high local cortisol (anatomic arrangement)

**Clinical Correlations:**

*Adrenal Insufficiency Testing:*
- Morning cortisol <3: Likely insufficient
- Morning cortisol >18: Usually sufficient
- ACTH stimulation test: Cortisol should rise to >18 at 30-60 min
- Insulin tolerance test: Gold standard for secondary insufficiency

*Cushing's Evaluation:*
- 24-hour urine free cortisol
- Late-night salivary cortisol
- 1 mg overnight dexamethasone suppression (cortisol should be <1.8)`,
      keyTerms: [
        { term: 'POMC', definition: 'Pro-opiomelanocortin - precursor protein cleaved to produce ACTH, MSH, and endorphins' },
        { term: 'StAR', definition: 'Steroidogenic Acute Regulatory protein - transports cholesterol into mitochondria, rate-limiting for steroidogenesis' },
        { term: 'CYP11B2', definition: 'Aldosterone synthase - zona glomerulosa enzyme converting corticosterone to aldosterone' },
        { term: 'PNMT', definition: 'Phenylethanolamine N-methyltransferase - enzyme converting norepinephrine to epinephrine, requires cortisol for expression' },
        { term: 'ENaC', definition: 'Epithelial Sodium Channel - aldosterone-regulated channel in collecting duct for Na+ reabsorption' },
      ],
      clinicalNotes: 'The anatomical arrangement of adrenal cortex surrounding medulla is functionally important: high cortisol concentrations induce PNMT, enabling epinephrine synthesis. In congenital adrenal hyperplasia (CAH), enzyme deficiencies shunt precursors toward androgens or mineralocorticoids depending on the block. 21-hydroxylase deficiency (most common CAH) causes cortisol deficiency, salt-wasting, and virilization from excess androgens.',
    },
    4: {
      level: 4,
      summary: 'Adrenal physiology involves integration of circadian, ultradian, and stress-responsive cortisol secretion patterns; mineralocorticoid receptor specificity is maintained by 11β-HSD2; adrenal androgen production peaks at adrenarche and declines with age; and catecholamine actions are mediated through α and β adrenergic receptor subtypes.',
      explanation: `**HPA Axis Dynamics:**

*Ultradian Pulsatility:*
- CRH/ACTH pulses every 60-90 minutes
- Cortisol follows with ~15-minute delay
- Amplitude varies with time of day
- Stress increases pulse amplitude, not frequency

*Circadian Regulation:*
- SCN → PVN → CRH neurons
- Also direct SCN input to adrenal (peripheral clock genes)
- Shift work and jet lag disrupt both pathways

*Stress Response Integration:*
- Physical stress: IL-1, IL-6, TNF-α → CRH
- Psychological stress: Limbic input to PVN
- Both converge on HPA axis activation

**Glucocorticoid Receptor (GR) Signaling:**

*GR Mechanism:*
1. Cortisol enters cell, binds cytoplasmic GR
2. HSP90 dissociates, GR translocates to nucleus
3. GR dimerizes, binds GRE (Glucocorticoid Response Elements)
4. Transactivation: Metabolic genes (PEPCK, G6Pase)
5. Transrepression: Inflammatory genes (NF-κB, AP-1)

*Tissue-Specific Effects:*

| Tissue | GR Effects |
|--------|------------|
| Liver | Gluconeogenesis↑, glycogen storage |
| Muscle | Protein catabolism, amino acid release |
| Adipose | Lipolysis (periphery), lipogenesis (central) |
| Bone | Osteoclast activity↑, osteoblast↓ |
| Immune | Lymphocyte apoptosis, cytokine suppression |
| Brain | Memory consolidation, mood effects |

**Mineralocorticoid Receptor Specificity:**

*The MR Problem:*
- MR has equal affinity for cortisol and aldosterone
- Cortisol circulates at 100-1000x aldosterone levels
- How does aldosterone act selectively?

*11β-HSD2 Solution:*
- Expressed in aldosterone target tissues (kidney, colon)
- Converts cortisol → cortisone (inactive at MR)
- Protects MR for aldosterone binding

*Apparent Mineralocorticoid Excess:*
- Genetic 11β-HSD2 deficiency
- Licorice consumption (glycyrrhetinic acid inhibits 11β-HSD2)
- Result: Cortisol activates MR → hypertension, hypokalemia

**Adrenal Androgens:**

*Adrenarche:*
- Begins age 6-8, independent of gonadal puberty
- Zona reticularis maturation
- DHEA and DHEA-S production increases
- Continues until age 20-30, then declines (adrenopause)

*DHEA/DHEA-S:*
- Weak androgens themselves
- Converted peripherally to testosterone and estradiol
- Functions still debated (bone, cognition, immune)
- DHEA-S: Sulfated form, long half-life (marker for adrenal androgens)

**Catecholamine Receptors:**

| Receptor | Primary Agonist | Location | Effects |
|----------|-----------------|----------|---------|
| α1 | NE > E | Vascular smooth muscle | Vasoconstriction |
| α2 | NE > E | Presynaptic, CNS | Inhibits NE release, sedation |
| β1 | E = NE | Heart | ↑ Rate, contractility |
| β2 | E >> NE | Bronchi, vessels, uterus | Dilation, relaxation |
| β3 | NE > E | Adipose | Lipolysis, thermogenesis |

*Catecholamine Metabolism:*
- COMT: O-methylation (metanephrine, normetanephrine)
- MAO: Oxidative deamination
- Plasma metanephrines: Sensitive test for pheochromocytoma

**Pheochromocytoma/Paraganglioma:**

*Pathophysiology:*
- Chromaffin cell tumors
- Episodic catecholamine release
- Classic triad: Headache, sweating, palpitations
- Paroxysmal hypertension

*Genetic Syndromes:*
- VHL: Clear cell phenotype
- RET (MEN2): May be bilateral
- SDH mutations: Paragangliomas, malignant behavior
- NF1: Associated pheochromocytoma`,
      keyTerms: [
        { term: '11β-HSD2', definition: '11β-hydroxysteroid dehydrogenase type 2 - enzyme that inactivates cortisol to cortisone in aldosterone target tissues' },
        { term: 'GRE', definition: 'Glucocorticoid Response Element - DNA sequence where activated GR binds to regulate gene transcription' },
        { term: 'adrenarche', definition: 'Developmental increase in adrenal androgen production occurring before gonadal puberty' },
        { term: 'metanephrines', definition: 'O-methylated catecholamine metabolites - sensitive markers for pheochromocytoma' },
        { term: 'transrepression', definition: 'Mechanism by which GR inhibits inflammatory gene expression through NF-κB and AP-1 inhibition' },
      ],
      clinicalNotes: 'The distinction between transactivation and transrepression has therapeutic implications: glucocorticoid side effects (diabetes, osteoporosis) are largely from transactivation, while anti-inflammatory benefits are from transrepression. Selective GR modulators (SEGRMs) are being developed to separate these effects. For pheochromocytoma, plasma free metanephrines have >97% sensitivity; functional imaging (MIBG, PET) helps localize tumors. α-blockade must precede β-blockade before surgery to prevent hypertensive crisis.',
    },
    5: {
      level: 5,
      summary: 'Adrenal physiology integrates molecular clock gene regulation, stress-induced epigenetic programming of the HPA axis, tissue-specific glucocorticoid sensitivity through pre-receptor metabolism and receptor coregulator expression, feto-placental steroidogenesis modifications, and therapeutic implications for glucocorticoid replacement and adrenal suppression.',
      explanation: `**Molecular Clock Regulation:**

*Clock Genes in Adrenal:*
- Adrenal cortex expresses full complement: CLOCK, BMAL1, Per1-3, Cry1-2
- SCN synchronizes adrenal clock via autonomic innervation
- Local clock modulates ACTH sensitivity (higher in morning)

*Clock-Steroidogenesis Links:*
- BMAL1 regulates StAR expression
- Per2 knockout: Loss of glucocorticoid rhythm
- REV-ERBα: Represses Cyp17a1

*Clinical Implications:*
- Circadian glucocorticoid timing may optimize therapy
- Chronotherapy with modified-release hydrocortisone (Plenadren)
- Night-shift workers: Altered cortisol rhythm, metabolic consequences

**Developmental Programming of HPA Axis:**

*Prenatal Stress:*
- Maternal cortisol crosses placenta (partially inactivated by 11β-HSD2)
- Excess exposure: Altered fetal GR and MR expression
- Epigenetic changes: GR promoter methylation
- Long-term: Heightened HPA reactivity, metabolic syndrome risk

*Early Life Stress:*
- Maternal care quality affects HPA setpoint
- Mechanism: GR promoter methylation in hippocampus
- Rodent studies: Cross-fostering demonstrates plasticity
- Human studies: Childhood adversity associated with altered cortisol

*Allostatic Load:*
- Chronic stress → HPA dysregulation
- Elevated cortisol with blunted awakening response
- Associated with: Depression, cardiovascular disease, cognitive decline
- May be partly reversible with intervention

**Tissue-Specific Glucocorticoid Sensitivity:**

*Pre-receptor Metabolism:*

| Enzyme | Location | Function | Regulation |
|--------|----------|----------|------------|
| 11β-HSD1 | Liver, fat, brain | Cortisone→Cortisol | Insulin↓, cortisol↑ |
| 11β-HSD2 | Kidney, colon | Cortisol→Cortisone | Constitutive |
| 5α-reductase | Liver, skin | Cortisol→5α-THF | Androgen-regulated |

*GR Isoforms and Variants:*
- GRα: Active receptor
- GRβ: Dominant negative, elevated in glucocorticoid resistance
- Polymorphisms: N363S (sensitivity↑), BclI (sensitivity↑), ER22/23EK (resistance)

*Coregulator Expression:*
- SRC-1, GRIP1: Coactivators, tissue-specific expression
- NCoR, SMRT: Corepressors
- Ratio determines GR efficacy in each tissue

**Feto-Placental Steroidogenesis:**

*Unique Pathway:*
- Fetal adrenal lacks 3β-HSD → makes DHEA-S
- Placenta lacks 17α-hydroxylase → cannot make DHEA
- Cooperation required: Fetal DHEA-S → placental estrogen

*Cortisol in Pregnancy:*
- Maternal cortisol rises 2-3 fold
- Placental 11β-HSD2 protects fetus (80-90% inactivated)
- Fetal adrenal makes cortisol for lung maturation (surfactant)
- Premature: Antenatal steroids accelerate lung maturity

**Adrenal Crisis and Management:**

*Physiology of Shock in Adrenal Insufficiency:*
- Cortisol required for catecholamine sensitivity
- Permissive effect on vascular tone
- Without cortisol: Vasodilatory shock despite high catecholamines

*Critical Illness-Related Corticosteroid Insufficiency (CIRCI):*
- Relative insufficiency: Cortisol inadequate for stress level
- Mechanism: Cytokine suppression of steroidogenesis, GR resistance
- Treatment debate: Low-dose hydrocortisone in septic shock
- ADRENAL and APROCCHSS trials: Mortality benefit uncertain

**Glucocorticoid Replacement:**

*Physiologic Replacement:*
- Cortisol production: ~5-8 mg/m²/day (10-15 mg hydrocortisone equivalent)
- Traditional dosing: 15-25 mg hydrocortisone in divided doses
- Issues: Supraphysiologic peaks, inadequate nadir

*Modified Release Formulations:*
- Plenadren: Once-daily, mimics circadian rhythm
- Chronocort: Delayed-release, evening dosing
- Benefits: Improved quality of life, possibly better metabolic outcomes

*Sick Day Rules:*
- Double or triple dose during febrile illness
- Parenteral hydrocortisone if vomiting
- Emergency injection: Patient education critical
- Medical alert bracelet

**Primary Aldosteronism (Conn Syndrome):**

*Prevalence and Screening:*
- 5-10% of hypertensives, higher in resistant HTN
- Screening: Aldosterone/renin ratio (ARR)
- Cutoff: ARR >30 with aldosterone >15 ng/dL

*Pathophysiology:*
- Aldosterone-producing adenoma (APA): Somatic mutations in KCNJ5, ATP1A1, ATP2B3
- Bilateral adrenal hyperplasia: Unknown cause
- Autonomous aldosterone: Suppressed renin, hypertension, hypokalemia

*Subtyping:*
- Adrenal CT: Identifies adenomas
- Adrenal vein sampling: Gold standard for lateralization
- Genetic testing: KCNJ5 mutations predict good surgical response`,
      keyTerms: [
        { term: 'CIRCI', definition: 'Critical Illness-Related Corticosteroid Insufficiency - relative adrenal insufficiency in severe illness' },
        { term: 'allostatic load', definition: 'Cumulative burden of chronic stress resulting in dysregulated HPA axis and multi-system effects' },
        { term: 'Plenadren', definition: 'Modified-release hydrocortisone formulation designed to mimic physiologic cortisol rhythm' },
        { term: 'KCNJ5', definition: 'Potassium channel gene commonly mutated in aldosterone-producing adenomas' },
        { term: 'feto-placental unit', definition: 'Cooperative steroidogenic system where fetal adrenal and placenta complement each other\'s enzyme deficiencies' },
      ],
      clinicalNotes: 'The emerging field of chrono-pharmacology suggests that timing of glucocorticoid administration affects efficacy and side effects. Modified-release formulations show promise for improving the quality of life in adrenal insufficiency. In primary aldosteronism, genetic profiling of adenomas may predict surgical outcomes and guide medical therapy selection (spironolactone vs. eplerenone). The role of low-dose glucocorticoids in septic shock remains controversial; current guidelines suggest considering it in patients who remain hypotensive despite fluids and vasopressors.',
    },
  },

  media: [
    {
      id: 'adrenal-zones',
      type: 'diagram',
      filename: 'adrenal-cortex-zones.svg',
      title: 'Adrenal Cortex Zones and Their Hormones',
      description: 'Glomerulosa, fasciculata, reticularis with hormone products',
    },
    {
      id: 'hpa-axis',
      type: 'diagram',
      filename: 'hypothalamic-pituitary-adrenal-axis.svg',
      title: 'HPA Axis Regulation',
      description: 'CRH-ACTH-cortisol cascade with feedback loops',
    },
    {
      id: 'raas-system',
      type: 'diagram',
      filename: 'renin-angiotensin-aldosterone-system.svg',
      title: 'Renin-Angiotensin-Aldosterone System',
      description: 'RAAS cascade from renin release to aldosterone action',
    },
  ],

  citations: [
    {
      id: 'williams-adrenal',
      type: 'textbook',
      title: 'The Adrenal Cortex and The Adrenal Medulla',
      source: 'Williams Textbook of Endocrinology, 14th Edition',
      chapter: '15-16',
      license: 'Copyrighted',
    },
    {
      id: 'endocrine-society-adrenal',
      type: 'article',
      title: 'Diagnosis and Treatment of Primary Adrenal Insufficiency',
      source: 'Journal of Clinical Endocrinology & Metabolism',
      url: 'https://academic.oup.com/jcem',
      license: 'Copyrighted',
    },
  ],

  crossReferences: [
    { targetId: 'anatomy-adrenal-gland', targetType: 'structure', relationship: 'related', label: 'Adrenal Anatomy' },
    { targetId: 'physiology-hormone-basics', targetType: 'concept', relationship: 'parent', label: 'Hormone Basics' },
    { targetId: 'physiology-electrolytes', targetType: 'topic', relationship: 'related', label: 'Electrolyte Balance' },
    { targetId: 'pathology-cushings-syndrome', targetType: 'condition', relationship: 'see-also', label: 'Cushing Syndrome' },
    { targetId: 'pathology-addisons-disease', targetType: 'condition', relationship: 'see-also', label: 'Addison Disease' },
    { targetId: 'clinical-adrenal-testing', targetType: 'topic', relationship: 'related', label: 'Adrenal Testing' },
  ],

  tags: {
    systems: ['endocrine'],
    topics: ['physiology', 'adrenal', 'stress response', 'blood pressure'],
    keywords: ['cortisol', 'aldosterone', 'ACTH', 'HPA axis', 'RAAS', 'catecholamines', 'epinephrine'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['endocrinology', 'medicine', 'surgery'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
