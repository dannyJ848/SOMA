/**
 * Adrenal Cortex - Anatomy
 *
 * The outer portion of the adrenal gland producing steroid hormones:
 * glucocorticoids, mineralocorticoids, and androgens.
 */

import { EducationalContent } from '../../types';

export const ADRENAL_CORTEX_ANATOMY: EducationalContent = {
  id: 'anatomy-adrenal-cortex',
  type: 'structure',
  name: 'Adrenal Cortex',
  alternateNames: ['Adrenal cortical tissue', 'Suprarenal cortex'],
  fmaId: 'FMA:15632',

  levels: {
    1: {
      level: 1,
      summary: 'The adrenal cortex is the outer layer of your adrenal glands that makes hormones to help you handle stress, balance salt and water, and develop during puberty.',
      explanation: `You have two adrenal glands, one sitting on top of each kidney like little hats. Each adrenal gland has two parts - the outer cortex (like the rind of an orange) and the inner medulla (like the fruit inside).

**What Does the Adrenal Cortex Make?**

Three main types of hormones:

1. **Cortisol** (the stress hormone)
   - Helps you deal with stress
   - Gives you energy
   - Keeps inflammation down
   - Controls your blood sugar

2. **Aldosterone** (the salt hormone)
   - Tells your kidneys to hold onto salt
   - Helps control blood pressure
   - Keeps minerals balanced

3. **Androgens** (weak male hormones)
   - Help with body hair growth
   - Important for puberty
   - Both boys and girls make these

**Fun Fact:** The word "adrenal" means "near the kidney" - ad (near) + renal (kidney).`,
      keyTerms: [
        { term: 'adrenal gland', definition: 'A small gland on top of each kidney that makes stress and other important hormones' },
        { term: 'cortex', definition: 'The outer layer of an organ' },
        { term: 'cortisol', definition: 'A hormone that helps your body handle stress and control energy' },
        { term: 'aldosterone', definition: 'A hormone that helps control salt and water balance' },
      ],
      analogies: [
        'The adrenal gland is like an orange - the cortex is the rind (outer part) and the medulla is the juicy fruit inside.',
        'Cortisol is like your body\'s built-in energy drink that kicks in when you\'re stressed.',
        'Aldosterone is like a salt manager for your body, making sure you don\'t lose too much.',
      ],
      examples: [
        'When you\'re nervous before a test, your adrenal cortex releases cortisol to help you stay alert.',
        'When you exercise and sweat a lot, aldosterone helps your body hold onto salt so you don\'t get dehydrated.',
      ],
    },
    2: {
      level: 2,
      summary: 'The adrenal cortex is the outer 80-90% of the adrenal gland, organized into three zones (glomerulosa, fasciculata, reticularis) that produce mineralocorticoids, glucocorticoids, and androgens respectively.',
      explanation: `**Location and Structure:**
The adrenal glands sit atop the kidneys (also called suprarenal glands):
- Right adrenal: Pyramid-shaped, behind liver
- Left adrenal: Crescent-shaped, behind stomach/pancreas
- Each gland weighs about 4-5 grams
- Cortex makes up 80-90% of gland weight

**Three Zones of the Cortex:**

*From outside to inside:*

| Zone | Location | Hormone Type | Main Hormones |
|------|----------|--------------|---------------|
| Zona Glomerulosa | Outermost | Mineralocorticoids | Aldosterone |
| Zona Fasciculata | Middle (largest) | Glucocorticoids | Cortisol |
| Zona Reticularis | Innermost | Androgens | DHEA, androstenedione |

**Memory Aid: GFR = Salt, Sugar, Sex (from outside to in)**
- **G**lomerulosa = Salt (aldosterone)
- **F**asciculata = Sugar (cortisol affects glucose)
- **R**eticularis = Sex (androgens)

**Hormone Overview:**

1. **Aldosterone** (zona glomerulosa):
   - Regulated by renin-angiotensin-aldosterone system (RAAS)
   - Increases sodium reabsorption in kidneys
   - Increases potassium excretion

2. **Cortisol** (zona fasciculata):
   - Regulated by ACTH from pituitary
   - Anti-inflammatory
   - Increases blood glucose
   - Helps with stress response

3. **Adrenal Androgens** (zona reticularis):
   - Regulated by ACTH
   - DHEA and androstenedione
   - Converted to testosterone and estrogen in tissues
   - Contributes to pubic/axillary hair development

**Blood Supply:**
The adrenal glands have an extremely rich blood supply - one of the highest per gram of tissue in the body.`,
      keyTerms: [
        { term: 'zona glomerulosa', definition: 'Outer zone of adrenal cortex making aldosterone', pronunciation: 'ZOH-nah gloh-mer-yoo-LOH-sah' },
        { term: 'zona fasciculata', definition: 'Middle zone of adrenal cortex making cortisol', pronunciation: 'ZOH-nah fah-sik-yoo-LAH-tah' },
        { term: 'zona reticularis', definition: 'Inner zone of adrenal cortex making androgens', pronunciation: 'ZOH-nah reh-tik-yoo-LAIR-is' },
        { term: 'glucocorticoid', definition: 'Steroid hormone like cortisol that affects glucose metabolism and stress response' },
        { term: 'mineralocorticoid', definition: 'Steroid hormone like aldosterone that affects mineral (salt) and water balance' },
        { term: 'DHEA', definition: 'Dehydroepiandrosterone; an adrenal androgen converted to sex hormones in tissues' },
      ],
      analogies: [
        'The three zones are like layers of a jawbreaker candy - each layer has a different flavor (function).',
      ],
    },
    3: {
      level: 3,
      summary: 'The adrenal cortex derives from intermediate mesoderm and contains three morphologically and functionally distinct zones with differential regulation: the glomerulosa by angiotensin II/potassium, the fasciculata by ACTH, and the reticularis by ACTH with age-dependent maturation.',
      explanation: `**Embryology:**
- Cortex derives from intermediate mesoderm (coelomic epithelium)
- Fetal cortex present at birth involutes
- Adult cortex develops after birth
- Complete zone differentiation by age 3
- Zona reticularis fully develops at adrenarche (~6-8 years)

**Gross Anatomy:**

*Adrenal Gland Dimensions:*
- Size: 4-6 cm × 2-3 cm × 0.5-1 cm
- Weight: 4-5 g each
- Right adrenal: Pyramidal, directly contacts IVC
- Left adrenal: Crescentic, contacts aorta

*Anatomical Relations:*
- Right adrenal: Liver (anterior), right kidney (inferior), IVC (medial)
- Left adrenal: Stomach, pancreas, spleen (anterior), left kidney (inferior)

**Arterial Supply (3 sources):**
1. Superior suprarenal arteries (6-8): From inferior phrenic artery
2. Middle suprarenal artery (1): From aorta
3. Inferior suprarenal arteries (1-2): From renal artery

**Venous Drainage:**
- Right suprarenal vein: Short, drains directly to IVC (surgically important)
- Left suprarenal vein: Drains to left renal vein

**Histological Zones:**

*Zona Glomerulosa (10-15% of cortex):*
- Cells arranged in arched clusters (glomeruli)
- Small cells with lipid droplets
- Lack 17α-hydroxylase → cannot make cortisol
- Aldosterone synthase (CYP11B2) unique to this zone

*Zona Fasciculata (75% of cortex):*
- Cells arranged in radial cords
- Large, pale "spongiocytes" with lipid-rich cytoplasm
- Vacuolated appearance on H&E
- High 17α-hydroxylase activity

*Zona Reticularis (7-10% of cortex):*
- Anastomosing network of cells
- Smaller, more compact cells
- More lipofuscin pigment (darker staining)
- High 17,20-lyase activity for androgen synthesis

**Steroidogenesis Overview:**

All adrenal steroids derive from cholesterol:
\`\`\`
Cholesterol → Pregnenolone → Progesterone
                    ↓
              17-OH Pregnenolone → DHEA → Androstenedione
                    ↓
              17-OH Progesterone → 11-Deoxycortisol → Cortisol
                    ↓
              Deoxycorticosterone → Corticosterone → Aldosterone
\`\`\`

*Key Enzymes:*
- CYP11A1 (P450scc): Cholesterol side-chain cleavage (rate-limiting)
- CYP17A1: 17α-hydroxylase and 17,20-lyase activities
- CYP21A2: 21-hydroxylase (most common CAH deficiency)
- CYP11B1: 11β-hydroxylase (cortisol synthesis)
- CYP11B2: Aldosterone synthase (zona glomerulosa only)`,
      keyTerms: [
        { term: 'adrenarche', definition: 'Activation of zona reticularis androgen production around age 6-8; precedes gonadarche' },
        { term: 'spongiocytes', definition: 'Lipid-rich cells of the zona fasciculata with foamy cytoplasm' },
        { term: 'CYP11B2', definition: 'Aldosterone synthase; enzyme unique to zona glomerulosa converting corticosterone to aldosterone' },
        { term: 'CYP17A1', definition: 'Enzyme with 17α-hydroxylase and 17,20-lyase activities; determines cortisol vs. androgen synthesis' },
        { term: 'P450scc', definition: 'Side-chain cleavage enzyme (CYP11A1); rate-limiting step in steroidogenesis' },
      ],
      clinicalNotes: 'The short right suprarenal vein draining directly to IVC makes right adrenalectomy more challenging than left. Congenital adrenal hyperplasia (CAH) most commonly results from 21-hydroxylase deficiency (CYP21A2), shunting precursors to androgen synthesis. Adrenarche is distinct from gonadarche and explains isolated pubic/axillary hair development before full puberty.',
    },
    4: {
      level: 4,
      summary: 'The adrenal cortex exhibits zone-specific gene expression regulated by transcription factors including SF-1 and DAX-1, with steroidogenesis requiring StAR-mediated cholesterol transport and involving complex enzymatic pathways with clinical correlates in congenital and acquired adrenal disorders.',
      explanation: `**Molecular Development and Zonation:**

*Transcription Factors:*
- SF-1 (NR5A1): Master regulator of adrenal and gonadal development
  - Required for adrenal gland formation
  - Activates all steroidogenic enzyme genes
  - SF-1 mutations: Adrenal failure + XY gonadal dysgenesis

- DAX-1 (NR0B1): Modulates SF-1 activity
  - X-linked gene
  - DAX-1 mutations: X-linked adrenal hypoplasia congenita

*Zone-Specific Markers:*
| Zone | Unique Feature | Signaling |
|------|---------------|-----------|
| Glomerulosa | CYP11B2 (aldosterone synthase) | Angiotensin II/K⁺/Ca²⁺ |
| Fasciculata | High CYP17A1, CYP11B1 | ACTH/cAMP |
| Reticularis | Cytochrome b5 (enhances 17,20-lyase) | ACTH, age-dependent |

**Cholesterol Supply for Steroidogenesis:**

*Sources:*
1. LDL receptor-mediated uptake (primary)
2. HDL via SR-B1 receptor
3. De novo synthesis (minor)

*Intracellular Transport:*
- Cholesterol esters stored in lipid droplets
- Hormone-sensitive lipase releases free cholesterol
- StAR (Steroidogenic Acute Regulatory protein) transports cholesterol to mitochondria
- StAR is rate-limiting and acutely regulated by ACTH

*StAR Deficiency (Lipoid CAH):*
- Most severe form of CAH
- No steroid synthesis (cortisol, aldosterone, or sex steroids)
- Salt-wasting, adrenal failure
- XY individuals appear female (no testosterone)
- Adrenals enlarged with cholesterol deposits

**Detailed Steroidogenic Pathways:**

*Zona Glomerulosa Pathway:*
\`\`\`
Cholesterol → Pregnenolone → Progesterone → DOC → Corticosterone → 18-OH-Corticosterone → Aldosterone
                           (3β-HSD)    (21-OH)     (11β-OH)        (CYP11B2)            (CYP11B2)
\`\`\`

*Zona Fasciculata Pathway:*
\`\`\`
Cholesterol → Pregnenolone → 17-OH-Pregnenolone → 17-OH-Progesterone → 11-Deoxycortisol → Cortisol
                           (CYP17)              (3β-HSD)              (CYP21A2)          (CYP11B1)
\`\`\`

*Zona Reticularis Pathway:*
\`\`\`
17-OH-Pregnenolone → DHEA → DHEA-S (sulfated storage form)
                   ↓
              Androstenedione → Testosterone (in periphery)
\`\`\`

**ACTH Signaling Cascade:**

1. ACTH binds MC2R (melanocortin-2 receptor)
2. MC2R requires MRAP (accessory protein) for function
3. Gs → adenylyl cyclase → cAMP → PKA
4. Acute: StAR phosphorylation → cholesterol transport
5. Chronic: Increased transcription of steroidogenic enzymes

*MC2R/MRAP Deficiency:*
- Familial glucocorticoid deficiency (FGD)
- ACTH resistance without mineralocorticoid deficiency
- Tall stature (no cortisol-mediated growth suppression)

**Renin-Angiotensin-Aldosterone System:**

1. Renal hypoperfusion → renin release (JG cells)
2. Renin cleaves angiotensinogen → angiotensin I
3. ACE (lung) converts Ang I → Ang II
4. Ang II effects:
   - AT1R on glomerulosa → aldosterone synthesis
   - Vasoconstriction
   - ADH release
   - Thirst stimulation

*Aldosterone Regulation:*
- Primary stimuli: Angiotensin II, hyperkalemia
- Secondary: ACTH (minor role)
- Inhibitors: ANP, dopamine

**Adrenal Cortex Regeneration:**

- Cortex can regenerate from capsular cells
- Subcapsular cells serve as progenitor population
- Centripetal differentiation: Glomerulosa → Fasciculata → Reticularis
- "Adrenal stem cell zone" at glomerulosa-fasciculata border`,
      keyTerms: [
        { term: 'SF-1', definition: 'Steroidogenic factor 1 (NR5A1); master transcription factor for adrenal and gonadal development' },
        { term: 'StAR', definition: 'Steroidogenic acute regulatory protein; rate-limiting for cholesterol transport to mitochondria' },
        { term: 'MC2R', definition: 'Melanocortin-2 receptor; ACTH receptor on adrenocortical cells' },
        { term: 'MRAP', definition: 'Melanocortin-2 receptor accessory protein; required for MC2R function' },
        { term: 'lipoid CAH', definition: 'Congenital adrenal hyperplasia from StAR deficiency; most severe form with no steroid production' },
        { term: 'cytochrome b5', definition: 'Cofactor enhancing 17,20-lyase activity in zona reticularis for androgen production' },
      ],
      clinicalNotes: 'Understanding steroidogenic enzyme deficiencies is crucial for diagnosing CAH variants. 21-hydroxylase deficiency (CYP21A2) causes 90-95% of CAH with elevated 17-OHP. 11β-hydroxylase deficiency causes hypertension from DOC accumulation. 17α-hydroxylase deficiency causes hypertension + hypokalemia + sexual infantilism. StAR/lipoid CAH causes severe adrenal insufficiency and XY female phenotype.',
    },
    5: {
      level: 5,
      summary: 'The adrenal cortex integrates developmental, molecular, and physiological mechanisms underlying glucocorticoid and mineralocorticoid biosynthesis with clinical implications for congenital adrenal hyperplasia genetics, primary aldosteronism diagnosis, and adrenocortical carcinoma molecular pathology.',
      explanation: `**Congenital Adrenal Hyperplasia - Genetic Details:**

*21-Hydroxylase Deficiency (CYP21A2):*
- 95% of CAH cases
- Gene on chromosome 6p21 (near HLA)
- Pseudogene (CYP21A1P) causes gene conversion events
- 30% are de novo mutations

Genotype-Phenotype Correlation:
| Mutation Type | Residual Activity | Phenotype |
|---------------|-------------------|-----------|
| Null/null | 0% | Salt-wasting |
| I2 splice + null | 0-1% | Salt-wasting |
| I172N | 1-2% | Simple virilizing |
| V281L | 20-50% | Non-classic |
| P30L | 30-60% | Non-classic |

*Non-Classic CAH (NCCAH):*
- Prevalence: 1:100-200 in general population
- Presents in adolescence/adulthood
- Hirsutism, oligomenorrhea, infertility
- 17-OHP >200 ng/dL post-ACTH stimulation diagnostic

*Newborn Screening:*
- 17-OHP measurement from dried blood spots
- High false-positive rate in preterm infants
- Confirmatory testing: Repeat 17-OHP, genetic testing

**Primary Aldosteronism:**

*Epidemiology:*
- 5-10% of hypertension
- Up to 20% of resistant hypertension
- Leading cause of secondary hypertension

*Subtypes:*
| Subtype | Frequency | Genetics | Treatment |
|---------|-----------|----------|-----------|
| Aldosterone-producing adenoma | 30-40% | KCNJ5 (70%), ATP1A1, ATP2B3 | Surgery |
| Bilateral adrenal hyperplasia | 60% | Less defined | MR antagonist |
| Familial hyperaldosteronism Type I | Rare | Chimeric CYP11B1/B2 | Dexamethasone |
| FH Type II | Rare | CLCN2 | Surgery or MR antagonist |
| FH Type III | Rare | KCNJ5 germline | Often bilateral adrenalectomy |

*KCNJ5 Mutations:*
- Potassium channel (Kir3.4)
- Causes loss of ion selectivity
- Na⁺ influx → membrane depolarization → Ca²⁺ signaling → aldosterone
- More common in women, larger adenomas, more responsive to surgery

*Diagnostic Algorithm:*
1. Screening: Aldosterone:renin ratio (ARR) >30, aldosterone >15 ng/dL
2. Confirmatory: Saline infusion test (post-test aldo >10 diagnostic), fludrocortisone suppression
3. Subtype differentiation: Adrenal CT + adrenal vein sampling (AVS)

*Adrenal Vein Sampling:*
- Selectivity index: Cortisol ratio (adrenal vein:peripheral) >3
- Lateralization index: Aldosterone:cortisol ratio (high side:low side) >4
- Essential for surgical decision in bilateral adrenal abnormalities

**Adrenocortical Carcinoma:**

*Molecular Pathogenesis:*
- TP53 mutations: 20-70% (more common in adults)
- Li-Fraumeni syndrome: Germline TP53
- Beckwith-Wiedemann: IGF2 overexpression (11p15.5)
- β-catenin (CTNNB1) mutations: 20-40%
- MEN1: 3%
- Lynch syndrome: MSH2/MLH1

*Staging (ENSAT):*
| Stage | Definition | 5-Year Survival |
|-------|------------|-----------------|
| I | ≤5 cm, confined | 82% |
| II | >5 cm, confined | 61% |
| III | Local invasion or positive nodes | 50% |
| IV | Distant metastases | 13% |

*Weiss Score (Malignancy Criteria):*
≥3 of 9 criteria = malignant
- High mitotic rate (>5/50 HPF)
- Atypical mitoses
- High nuclear grade
- Low cytoplasm (<25% clear cells)
- Diffuse architecture (>33%)
- Necrosis
- Venous invasion
- Sinusoidal invasion
- Capsular invasion

*Treatment:*
- Surgery: Complete resection essential
- Adjuvant mitotane: For stage II-III, uncertain benefit in stage I
- Chemotherapy: EDP-M (etoposide, doxorubicin, cisplatin + mitotane) for metastatic
- Radiation: Adjuvant for R1 resection or local recurrence

**Glucocorticoid Physiology - Advanced:**

*Circadian Rhythm:*
- CRH/ACTH pulse frequency drives cortisol rhythm
- Peak: 6-8 AM; Nadir: midnight
- SCN → PVN → CRH → ACTH → cortisol
- Peripheral clocks also modulate sensitivity

*Glucocorticoid Receptor (GR/NR3C1):*
- Cytoplasmic in unbound state (HSP90 chaperone)
- Ligand binding → nuclear translocation
- Transactivation: GRE binding → anti-inflammatory gene expression
- Transrepression: AP-1/NF-κB tethering → reduced pro-inflammatory genes

*Selective GR Modulators:*
- Goal: Transrepression without transactivation
- Reduce metabolic side effects while maintaining anti-inflammatory effect
- Compounds in development for inflammatory diseases

**Adrenal Crisis Management:**

*Precipitants:*
- Infection/stress without glucocorticoid increase
- Sudden cessation of chronic steroids
- Bilateral adrenal hemorrhage (Waterhouse-Friderichsen)
- Pituitary apoplexy

*Treatment Protocol:*
1. Hydrocortisone 100 mg IV bolus
2. D5NS 1L IV bolus (hypoglycemia + hyponatremia common)
3. Hydrocortisone 50 mg IV q6h OR 200 mg continuous infusion
4. Identify and treat precipitant
5. Taper to oral when stable, add fludrocortisone when <50 mg/day

*Stress Dosing Recommendations:*
- Minor illness: Double/triple oral dose
- Moderate stress (surgery, fever): 50 mg hydrocortisone q8h
- Major stress (sepsis, major surgery): 100 mg hydrocortisone q8h or 200 mg continuous`,
      keyTerms: [
        { term: 'KCNJ5', definition: 'Potassium channel gene commonly mutated in aldosterone-producing adenomas' },
        { term: 'adrenal vein sampling', definition: 'Procedure to lateralize aldosterone excess in primary aldosteronism' },
        { term: 'Weiss score', definition: 'Histopathologic scoring system for adrenocortical carcinoma (≥3 = malignant)' },
        { term: 'mitotane', definition: 'Adrenolytic drug used adjuvantly and for metastatic adrenocortical carcinoma' },
        { term: 'ENSAT staging', definition: 'European Network for the Study of Adrenal Tumors staging for ACC' },
        { term: 'Waterhouse-Friderichsen syndrome', definition: 'Bilateral adrenal hemorrhage, classically with meningococcemia' },
      ],
      clinicalNotes: 'In primary aldosteronism, CT may show bilateral abnormalities or be normal; adrenal vein sampling is essential for surgical planning in patients >35 years or with bilateral lesions. For adrenocortical carcinoma, complete surgical resection is the only curative option; mitotane is used adjuvantly but has significant toxicity requiring therapeutic drug monitoring (target 14-20 mg/L). All patients with adrenal insufficiency should have emergency hydrocortisone injection kits and medical alert identification.',
    },
  },

  media: [
    {
      id: 'adrenal-cortex-zones-1',
      type: 'histology',
      filename: 'adrenal-cortex-zones.jpg',
      title: 'Adrenal Cortex Zones',
      description: 'Histology showing glomerulosa, fasciculata, and reticularis',
    },
    {
      id: 'steroidogenesis-pathway-1',
      type: 'diagram',
      filename: 'adrenal-steroidogenesis.svg',
      title: 'Adrenal Steroidogenesis Pathways',
      description: 'Complete pathway from cholesterol to end products',
    },
  ],

  citations: [
    {
      id: 'speiser-cah',
      type: 'article',
      title: 'Congenital Adrenal Hyperplasia',
      authors: ['Speiser, PW', 'White, PC'],
      source: 'New England Journal of Medicine',
      license: 'Copyrighted',
    },
    {
      id: 'endocrine-society-pa',
      type: 'article',
      title: 'Primary Aldosteronism Clinical Practice Guideline',
      source: 'Journal of Clinical Endocrinology and Metabolism',
      license: 'Copyrighted',
    },
  ],

  crossReferences: [
    { targetId: 'anatomy-adrenal-medulla', targetType: 'structure', relationship: 'sibling', label: 'Adrenal Medulla' },
    { targetId: 'physiology-adrenal-cortex-hormones', targetType: 'pathway', relationship: 'related', label: 'Adrenal Cortex Hormones' },
    { targetId: 'histology-adrenal-zones', targetType: 'topic', relationship: 'related', label: 'Adrenal Histology' },
    { targetId: 'pathology-cushing-syndrome', targetType: 'condition', relationship: 'see-also', label: 'Cushing Syndrome' },
    { targetId: 'pathology-addison-disease', targetType: 'condition', relationship: 'see-also', label: 'Addison Disease' },
    { targetId: 'pathology-primary-hyperaldosteronism', targetType: 'condition', relationship: 'see-also', label: 'Primary Hyperaldosteronism' },
  ],

  tags: {
    systems: ['endocrine'],
    structures: ['FMA:15632', 'adrenal cortex'],
    topics: ['anatomy', 'steroidogenesis'],
    keywords: ['adrenal cortex', 'cortisol', 'aldosterone', 'DHEA', 'steroid hormones', 'CAH'],
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
