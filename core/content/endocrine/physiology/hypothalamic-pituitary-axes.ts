/**
 * Hypothalamic-Pituitary Axes - Physiology
 *
 * The regulatory systems connecting hypothalamus to target organs
 * via the pituitary gland: HPA, HPT, HPG, and growth hormone axes.
 */

import { EducationalContent } from '../../types';

export const HYPOTHALAMIC_PITUITARY_AXES_PHYSIOLOGY: EducationalContent = {
  id: 'physiology-hypothalamic-pituitary-axes',
  type: 'pathway',
  name: 'Hypothalamic-Pituitary Axes',
  alternateNames: ['Neuroendocrine axes', 'HP axes', 'Pituitary control systems'],

  levels: {
    1: {
      level: 1,
      summary: 'The hypothalamus and pituitary work together like a chain of command, with the hypothalamus giving orders that the pituitary passes on to other glands throughout your body.',
      explanation: `Your body has several "command chains" that control important functions:

**How It Works:**
1. The hypothalamus (in your brain) releases a messenger hormone
2. This travels to the pituitary gland (also in your brain)
3. The pituitary releases another hormone into your blood
4. That hormone tells a gland somewhere else in your body what to do
5. When enough hormone is made, a signal goes back to turn things off (feedback)

**The Main Axes:**

**Stress Axis (HPA)**
Hypothalamus → Pituitary → Adrenal glands → Cortisol
- Helps you deal with stress
- Cortisol gives you energy and reduces inflammation

**Thyroid Axis (HPT)**
Hypothalamus → Pituitary → Thyroid → Thyroid hormones
- Controls your metabolism (how fast you burn energy)

**Reproductive Axis (HPG)**
Hypothalamus → Pituitary → Gonads → Sex hormones
- Controls puberty and reproduction

**Growth Hormone Axis**
Hypothalamus → Pituitary → (directly releases GH) → Growth
- Makes you grow taller and build muscle`,
      keyTerms: [
        { term: 'axis', definition: 'A chain of hormones where one hormone controls the release of another' },
        { term: 'feedback', definition: 'When the end product signals back to slow down or stop production' },
        { term: 'HPA axis', definition: 'Hypothalamus-Pituitary-Adrenal axis that controls stress hormones' },
      ],
      analogies: [
        'The HP axes work like a company: the CEO (hypothalamus) tells managers (pituitary) who tell workers (target glands) what to do. Workers report back when the job is done.',
        'Feedback is like a thermostat - when the room is warm enough, it tells the heater to turn off.',
      ],
      examples: [
        'When you are stressed about a test, your HPA axis activates to release cortisol and help you stay alert.',
        'During puberty, your HPG axis "turns on" and starts producing adult levels of sex hormones.',
      ],
    },
    2: {
      level: 2,
      summary: 'The hypothalamic-pituitary axes are neuroendocrine control systems where hypothalamic releasing/inhibiting hormones regulate pituitary hormone secretion, which in turn controls peripheral endocrine glands via negative feedback loops.',
      explanation: `**General Principles:**

Each axis follows a similar pattern:
1. **Hypothalamic hormone** (releasing or inhibiting)
2. **Pituitary hormone** (tropic hormone)
3. **Target gland hormone** (final effector)
4. **Negative feedback** (to hypothalamus and/or pituitary)

**The Four Major Axes:**

**1. HPA Axis (Stress Response)**
| Level | Hormone | Action |
|-------|---------|--------|
| Hypothalamus | CRH | Stimulates ACTH release |
| Pituitary | ACTH | Stimulates cortisol release |
| Adrenal cortex | Cortisol | Metabolic effects; inhibits CRH and ACTH |

*Features:* Circadian rhythm (peak in morning), stress-responsive

**2. HPT Axis (Metabolism)**
| Level | Hormone | Action |
|-------|---------|--------|
| Hypothalamus | TRH | Stimulates TSH release |
| Pituitary | TSH | Stimulates T4/T3 release |
| Thyroid | T4, T3 | Metabolic effects; inhibits TRH and TSH |

*Features:* T4 converted to active T3 in tissues; tight regulation

**3. HPG Axis (Reproduction)**
| Level | Hormone | Action |
|-------|---------|--------|
| Hypothalamus | GnRH | Stimulates LH/FSH release (pulsatile) |
| Pituitary | LH, FSH | Stimulate gonads |
| Gonads | Estrogen/Testosterone | Reproductive effects; feedback varies |

*Features:* GnRH must be pulsatile for normal function

**4. Growth Hormone Axis**
| Level | Hormone | Action |
|-------|---------|--------|
| Hypothalamus | GHRH (+), Somatostatin (-) | Regulate GH release |
| Pituitary | GH | Stimulates IGF-1, direct effects |
| Liver/tissues | IGF-1 | Growth effects; inhibits GH |

*Features:* Dual hypothalamic control (stimulatory AND inhibitory)

**Types of Feedback:**
- **Negative feedback**: Most common; product inhibits its own production
- **Positive feedback**: Rare; product stimulates more production (e.g., LH surge)
- **Long-loop**: Target hormone feeds back to hypothalamus/pituitary
- **Short-loop**: Pituitary hormone feeds back to hypothalamus
- **Ultra-short-loop**: Hypothalamic hormone self-regulates`,
      keyTerms: [
        { term: 'tropic hormone', definition: 'A pituitary hormone that stimulates another endocrine gland' },
        { term: 'releasing hormone', definition: 'A hypothalamic hormone that stimulates pituitary hormone release' },
        { term: 'negative feedback', definition: 'When the end product inhibits earlier steps in the pathway' },
        { term: 'circadian rhythm', definition: 'A roughly 24-hour cycle of biological activity' },
        { term: 'pulsatile secretion', definition: 'Hormone release in intermittent bursts rather than continuously' },
      ],
      analogies: [
        'GnRH pulsatility is like sending morse code - the pattern of pulses carries the message. Continuous GnRH is like holding down the telegraph key, which actually turns the signal OFF.',
      ],
    },
    3: {
      level: 3,
      summary: 'Hypothalamic-pituitary axes employ hierarchical control with releasing hormones delivered via the hypophyseal portal system, pulsatile secretion patterns encoding regulatory information, and multi-level negative feedback providing stability while allowing dynamic responses to physiological demands.',
      explanation: `**HPA Axis - Detailed Physiology:**

*CRH Neurons:*
- Located in paraventricular nucleus (PVN)
- Also release AVP (synergizes with CRH)
- Receive input from limbic system, brainstem

*ACTH Release:*
- CRH binds CRH-R1 on corticotrophs
- ACTH derived from POMC (also produces β-LPH, β-endorphin)
- Pulsatile release with circadian rhythm

*Cortisol Actions:*
- Gluconeogenesis, protein catabolism
- Anti-inflammatory, immunosuppressive
- Feedback at hypothalamus (CRH) and pituitary (ACTH)

*Circadian Rhythm:*
- Driven by SCN → PVN pathway
- Peak: 6-8 AM; Nadir: Midnight
- Stress can override circadian pattern

*Stress Response:*
1. Acute stress activates HPA axis within minutes
2. Cortisol rise takes 15-30 minutes
3. Facilitates fight-or-flight response
4. Chronic stress → sustained activation → pathological effects

**HPT Axis - Detailed Physiology:**

*Thyroid Hormone Synthesis Regulation:*
- TSH binds TSHR (Gs-coupled) on thyroid follicular cells
- Stimulates: Iodide uptake, thyroglobulin synthesis, T4/T3 release
- Thyroid produces mostly T4 (prohormone)
- T4 → T3 conversion by deiodinases in tissues

*Deiodinases:*
| Type | Location | Action |
|------|----------|--------|
| D1 | Liver, kidney, thyroid | T4 → T3, rT3 → T2 |
| D2 | Brain, pituitary, BAT | T4 → T3 (local activation) |
| D3 | Placenta, brain | T4 → rT3, T3 → T2 (inactivation) |

*Feedback:*
- T3 (not T4) is the active feedback signal
- Pituitary D2 converts T4 → T3 locally
- T3 suppresses TRH gene and TSH β-subunit gene

*Set Point:*
- Each individual has a TSH set point
- Determined by HPT axis sensitivity
- TSH varies over 10-fold range in population

**HPG Axis - Detailed Physiology:**

*GnRH Pulse Generator:*
- KNDy neurons in arcuate nucleus
- Kisspeptin/Neurokinin B/Dynorphin
- Generate ~60-90 minute pulses in reproductive age

*Pulse Frequency Matters:*
| Frequency | LH:FSH Ratio | Phase |
|-----------|--------------|-------|
| High (q60 min) | LH > FSH | Follicular/luteal |
| Low (q2-4 hr) | FSH > LH | Early follicular |
| Continuous | Suppressed | Pathological |

*Female Cycle:*
- Early follicular: Low estrogen, FSH dominant
- Late follicular: Rising estrogen, positive feedback → LH surge
- Ovulation: LH surge triggers
- Luteal: High progesterone, negative feedback

*Male:*
- Relatively stable pulsatility
- Testosterone negative feedback
- Inhibin B from Sertoli cells → FSH suppression

**GH-IGF-1 Axis - Detailed Physiology:**

*Dual Hypothalamic Control:*
- GHRH: Stimulates GH (via GHRH-R, Gs)
- Somatostatin: Inhibits GH (via SSTR2, Gi)
- Balance determines GH pulse amplitude and frequency

*GH Secretion Pattern:*
- Pulsatile, with largest pulses during slow-wave sleep
- Factors increasing GH: Exercise, fasting, sleep, stress, hypoglycemia
- Factors decreasing GH: Obesity, hyperglycemia, aging

*IGF-1:*
- Produced mainly in liver in response to GH
- Mediates most growth-promoting effects of GH
- Circulates bound to IGFBPs (mainly IGFBP-3)
- Provides negative feedback to GH secretion`,
      keyTerms: [
        { term: 'KNDy neurons', definition: 'Arcuate nucleus neurons co-expressing kisspeptin, neurokinin B, and dynorphin that generate GnRH pulses' },
        { term: 'deiodinases', definition: 'Enzymes that activate (D1, D2) or inactivate (D3) thyroid hormones' },
        { term: 'POMC', definition: 'Pro-opiomelanocortin; precursor protein yielding ACTH, MSH, and endorphins' },
        { term: 'set point', definition: 'The target level around which a feedback system maintains hormone levels' },
        { term: 'IGFBP', definition: 'IGF binding proteins that carry IGF-1 in circulation and regulate its activity' },
      ],
      clinicalNotes: 'Testing the HPA axis requires understanding diurnal variation; morning cortisol is the standard screening test. Continuous GnRH administration (GnRH agonists) paradoxically suppresses gonadotropins after initial stimulation, useful for prostate cancer, endometriosis, and precocious puberty. In central hypothyroidism, TSH may be low, normal, or mildly elevated (reduced bioactivity).',
    },
    4: {
      level: 4,
      summary: 'Hypothalamic-pituitary axis function integrates circadian timing, metabolic sensing, stress responsiveness, and reproductive status through complex molecular mechanisms including receptor signaling cascades, transcription factor networks, and epigenetic modifications that determine both baseline function and adaptive responses.',
      explanation: `**Molecular Mechanisms of Feedback:**

*Glucocorticoid Receptor (GR) Signaling:*
- Cytoplasmic GR bound to HSP90 chaperone
- Cortisol binding → nuclear translocation
- Transactivation: GRE binding → gene activation
- Transrepression: Tethering to AP-1/NF-κB → anti-inflammatory
- Negative feedback: GR in hypothalamus and pituitary suppresses CRH and POMC genes

*Thyroid Hormone Receptor (TR):*
- Nuclear receptor, bound to DNA even without ligand
- Unliganded TR recruits corepressors (NCoR/SMRT) → transcriptional repression
- T3 binding → corepressor release, coactivator recruitment → activation
- Negative feedback: TR in thyrotrophs suppresses TSHβ transcription

*GnRH Receptor Dynamics:*
- GnRH-R is a GPCR, no C-terminal tail (no β-arrestin-mediated desensitization)
- Pulsatile GnRH → receptor recycling → sustained responsiveness
- Continuous GnRH → receptor downregulation → desensitization

**Circadian Regulation of HP Axes:**

*SCN as Master Clock:*
- CLOCK/BMAL1 transcription factors drive circadian gene expression
- Per/Cry genes form negative feedback loop
- ~24-hour autonomous oscillation

*Clock Output to HPA Axis:*
\`\`\`
SCN → PVN (direct and indirect pathways)
   → Pre-autonomic neurons → Adrenal cortex sensitivity
   → CRH neurons → Circadian ACTH pattern
   → Adrenal clock genes → Local cortisol rhythmicity
\`\`\`

*Peripheral Clocks:*
- Most tissues have autonomous circadian oscillators
- Entrained by glucocorticoids, feeding, temperature
- Adrenal cortex clock modulates ACTH sensitivity

**Metabolic Integration:**

*GH Axis and Metabolism:*
- Fasting: Increases GH (mobilize energy stores)
- Mechanism: Ghrelin increase, FFA increase, IGF-1 decrease
- Obesity: Decreased GH despite preserved IGF-1
- Mechanism: Increased somatostatin tone, hyperinsulinemia, elevated FFA

*Leptin and Reproduction:*
- Leptin signals adequate energy stores to HPG axis
- Leptin receptors on kisspeptin neurons
- Low leptin (starvation, anorexia) → suppressed GnRH → amenorrhea
- Leptin replacement restores menstrual cycles in hypothalamic amenorrhea

*Thyroid and Metabolism Coupling:*
- Fasting decreases T3 (non-thyroidal illness/"sick euthyroid")
- Mechanism: Decreased D1 activity, increased D3, decreased TRH
- Adaptive response to conserve energy
- rT3 elevated (D3 product)

**Dynamic Testing Principles:**

*Stimulation Tests (Assess Reserve):*

| Test | Agent | Measures | Interpretation |
|------|-------|----------|----------------|
| Cosyntropin (ACTH) stim | Synthetic ACTH | Cortisol response | Primary adrenal insufficiency |
| CRH stim | CRH | ACTH response | Differentiates central from primary |
| Insulin tolerance test | Insulin (hypoglycemia) | GH and cortisol | Gold standard for GH and HPA |
| GnRH stim | GnRH | LH/FSH response | Pubertal status, gonadotropin reserve |
| TRH stim | TRH | TSH response | Central hypothyroidism |

*Suppression Tests (Assess Autonomous Function):*

| Test | Agent | Measures | Interpretation |
|------|-------|----------|----------------|
| Dexamethasone suppression | Dexamethasone | Cortisol suppression | Cushing syndrome screening |
| T3 suppression | T3 | RAI uptake | Thyroid autonomy |
| Oral glucose tolerance | Glucose | GH suppression | Acromegaly diagnosis |

**Axis Cross-Talk:**

*HPA-HPT Interaction:*
- Acute illness: Low T3, normal/low TSH ("sick euthyroid")
- Chronic stress: May suppress HPT axis
- Glucocorticoids inhibit TSH secretion and D1 activity

*HPA-HPG Interaction:*
- Stress suppresses HPG axis
- CRH inhibits GnRH neurons
- Glucocorticoids inhibit LH pulse amplitude
- Mechanism: Energy diversion from reproduction during stress

*GH and Other Axes:*
- GH enhances T4→T3 conversion (may unmask hypothyroidism)
- GH deficiency associated with relative hypocortisolism
- IGF-1 inhibits 11β-HSD1 (cortisol regeneration)`,
      keyTerms: [
        { term: 'transrepression', definition: 'Mechanism by which glucocorticoid receptor inhibits inflammatory gene expression by tethering to other transcription factors' },
        { term: 'sick euthyroid syndrome', definition: 'Low T3 with normal or low TSH during acute illness; represents adaptive metabolic conservation' },
        { term: 'cosyntropin stimulation test', definition: 'Uses synthetic ACTH to assess adrenal cortisol-producing capacity' },
        { term: 'peripheral clocks', definition: 'Autonomous circadian oscillators in tissues outside the SCN' },
        { term: 'insulin tolerance test', definition: 'Gold standard test using hypoglycemia to assess GH and cortisol reserve' },
      ],
      clinicalNotes: 'The insulin tolerance test (ITT) is contraindicated in patients with seizure disorders, coronary artery disease, or cerebrovascular disease. Alternative tests include glucagon stimulation, GHRH-arginine for GH, and metyrapone for HPA axis. In suspected central hypothyroidism, TSH alone is insufficient; free T4 must be measured. The TRH stimulation test is rarely used now due to TRH unavailability in many countries.',
    },
    5: {
      level: 5,
      summary: 'Hypothalamic-pituitary axes function as sophisticated neuroendocrine interfaces integrating central nervous system processing with peripheral hormone action, with clinical manifestations of dysfunction dependent on lesion location, temporal pattern, and interaction between axes, requiring systematic diagnostic algorithms and targeted therapeutic interventions.',
      explanation: `**Genetic Basis of Axis Development and Function:**

*Pituitary Development Transcription Factors:*
| Factor | Gene | Deficiency Phenotype |
|--------|------|---------------------|
| PROP1 | PROP1 | Combined pituitary hormone deficiency (CPHD) - most common |
| PIT1 | POU1F1 | GH, PRL, TSH deficiency |
| TPIT | TBX19 | Isolated ACTH deficiency |
| SF1 | NR5A1 | LH/FSH deficiency (with adrenal/gonadal) |
| HESX1 | HESX1 | Septo-optic dysplasia with hypopituitarism |
| LHX3/LHX4 | LHX3/4 | CPHD with rigid cervical spine (LHX3) |

*GnRH Neuron Development:*
- GnRH neurons migrate from olfactory placode
- KAL1 (anosmin-1): X-linked Kallmann syndrome
- FGFR1: Autosomal Kallmann/normosmic HH
- CHD7: CHARGE syndrome with HH
- Kisspeptin/GPR54: Normosmic hypogonadotropic hypogonadism

**Pituitary Tumors and Axis Dysfunction:**

*Functional Adenomas:*
| Type | Hormone | Clinical Syndrome | Prevalence |
|------|---------|-------------------|------------|
| Prolactinoma | Prolactin | Galactorrhea, hypogonadism | 40-50% |
| Somatotroph | GH | Acromegaly/gigantism | 10-15% |
| Corticotroph | ACTH | Cushing disease | 10-15% |
| Gonadotroph | LH/FSH | Usually non-functional | 25-30% |
| Thyrotroph | TSH | Central hyperthyroidism | <1% |

*Non-Functional Pituitary Adenomas (NFPAs):*
- Most are gonadotroph-lineage (SF1+, FSH/LH subunits)
- Present with mass effect, not hormone excess
- Hypopituitarism from compression of normal pituitary

*Stalk Effect:*
- Any mass compressing pituitary stalk
- Dopamine cannot reach lactotrophs → hyperprolactinemia
- Other axes lose stimulation → hypopituitarism
- Prolactin typically <200 ng/mL (vs. prolactinoma often >200)

**Complex Diagnostic Algorithms:**

*Cushing Syndrome Workup:*
\`\`\`
Step 1: Confirm hypercortisolism (24h UFC, late-night salivary cortisol, 1mg DST)
        ↓
Step 2: Determine ACTH dependence (plasma ACTH)
        ↓
        ACTH-dependent (>20 pg/mL)          ACTH-independent (<5 pg/mL)
        ↓                                    ↓
Step 3: High-dose DST, CRH stim,            Adrenal imaging
        IPSS if needed                       (adenoma, carcinoma, bilateral)
        ↓
        Pituitary vs. Ectopic ACTH
\`\`\`

*IPSS (Inferior Petrosal Sinus Sampling):*
- Central:peripheral ACTH ratio >2 baseline, >3 post-CRH = pituitary source
- Gold standard for differentiating Cushing disease from ectopic ACTH

*Hypopituitarism Evaluation:*
1. Assess each axis independently
2. GH: GH stimulation test (ITT, glucagon, GHRH-arginine)
3. ACTH: Morning cortisol, if borderline → cosyntropin stim or ITT
4. TSH: Free T4 (TSH unreliable in central disease)
5. LH/FSH: Testosterone/estradiol with LH/FSH
6. Prolactin: Usually preserved or elevated (stalk effect)
7. ADH: Clinically assess (polyuria, sodium)

**Therapeutic Strategies:**

*Hormone Replacement:*
| Axis | Replacement | Monitoring |
|------|-------------|------------|
| HPA | Hydrocortisone 15-25 mg/day (divided) | Clinical, cannot use ACTH/cortisol |
| HPT | Levothyroxine | Free T4 (not TSH in central disease) |
| HPG ♂ | Testosterone | Testosterone trough, Hct, PSA |
| HPG ♀ | Estrogen ± progesterone | Clinical, consider bone density |
| GH | Recombinant GH | IGF-1 (target mid-normal range) |
| ADH | Desmopressin | Sodium, urine output |

*Order of Replacement Matters:*
1. Glucocorticoids FIRST (prevent adrenal crisis)
2. Levothyroxine SECOND (starting T4 without cortisol can precipitate crisis)
3. Sex hormones and GH as indicated

*GH Replacement in Adults:*
- Indications: GH deficiency + impaired quality of life
- Dose: Start low (0.1-0.3 mg/day), titrate to IGF-1
- Benefits: Body composition, bone density, quality of life
- Contraindications: Active malignancy, diabetic retinopathy

**Special Situations:**

*Pituitary Apoplexy:*
- Hemorrhage or infarction of pituitary adenoma
- Acute headache, visual loss, ophthalmoplegia, hypopituitarism
- Emergency steroids, often requires surgical decompression

*Lymphocytic Hypophysitis:*
- Autoimmune inflammation, often peripartum or with checkpoint inhibitors
- May cause hypopituitarism, diabetes insipidus
- Stalk thickening, sellar mass on MRI
- May respond to steroids

*Checkpoint Inhibitor-Induced Hypophysitis:*
- Anti-CTLA4 (ipilimumab) more common than anti-PD1
- Present with headache, fatigue, hypopituitarism
- ACTH and TSH axes most affected
- May require permanent hormone replacement`,
      keyTerms: [
        { term: 'IPSS', definition: 'Inferior petrosal sinus sampling; procedure to localize ACTH source in Cushing syndrome' },
        { term: 'stalk effect', definition: 'Hyperprolactinemia and hypopituitarism from pituitary stalk compression disrupting dopamine delivery' },
        { term: 'pituitary apoplexy', definition: 'Acute hemorrhage or infarction of pituitary gland, usually in an adenoma' },
        { term: 'PROP1', definition: 'Prophet of PIT1; transcription factor whose mutations cause the most common form of combined pituitary hormone deficiency' },
        { term: 'checkpoint inhibitor hypophysitis', definition: 'Immune-mediated pituitary inflammation from cancer immunotherapy, especially anti-CTLA4 agents' },
      ],
      clinicalNotes: 'In hypopituitarism, start glucocorticoid replacement BEFORE levothyroxine to avoid precipitating adrenal crisis. GH replacement should be deferred if there is a history of malignancy until appropriate surveillance period. Patients with hypopituitarism require stress dosing of glucocorticoids (2-3x maintenance) during illness, surgery, or significant stress. Medical alert identification is essential. Checkpoint inhibitor-induced hypophysitis may be permanent; prospective endocrine monitoring is recommended during immunotherapy.',
    },
  },

  media: [
    {
      id: 'hp-axes-diagram-1',
      type: 'diagram',
      filename: 'hypothalamic-pituitary-axes.svg',
      title: 'Hypothalamic-Pituitary Axes Overview',
      description: 'Schematic showing HPA, HPT, HPG, and GH axes with feedback loops',
    },
    {
      id: 'feedback-loops-1',
      type: 'diagram',
      filename: 'negative-feedback-endocrine.svg',
      title: 'Negative Feedback in Endocrine Axes',
      description: 'Illustration of long-loop, short-loop, and ultra-short-loop feedback',
    },
  ],

  citations: [
    {
      id: 'melmed-pituitary',
      type: 'textbook',
      title: 'The Pituitary',
      authors: ['Melmed, S'],
      source: 'Academic Press, 5th Edition',
      license: 'Copyrighted',
    },
    {
      id: 'chrousos-hpa',
      type: 'article',
      title: 'The Hypothalamic-Pituitary-Adrenal Axis and Immune-Mediated Inflammation',
      authors: ['Chrousos, GP'],
      source: 'New England Journal of Medicine',
      license: 'Copyrighted',
    },
  ],

  crossReferences: [
    { targetId: 'anatomy-hypothalamus', targetType: 'structure', relationship: 'related', label: 'Hypothalamus' },
    { targetId: 'anatomy-pituitary-anterior', targetType: 'structure', relationship: 'related', label: 'Anterior Pituitary' },
    { targetId: 'pathology-hypopituitarism', targetType: 'condition', relationship: 'see-also', label: 'Hypopituitarism' },
    { targetId: 'pathology-cushing-syndrome', targetType: 'condition', relationship: 'see-also', label: 'Cushing Syndrome' },
  ],

  tags: {
    systems: ['endocrine', 'nervous'],
    topics: ['physiology', 'neuroendocrinology'],
    keywords: ['HPA axis', 'HPT axis', 'HPG axis', 'feedback', 'pituitary', 'hypothalamus'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['endocrinology', 'medicine'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
