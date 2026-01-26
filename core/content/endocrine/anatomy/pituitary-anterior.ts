/**
 * Anterior Pituitary (Adenohypophysis) - Anatomy
 *
 * The "master gland" producing six major hormones under hypothalamic control.
 */

import { EducationalContent } from '../../types';

export const PITUITARY_ANTERIOR_ANATOMY: EducationalContent = {
  id: 'anatomy-pituitary-anterior',
  type: 'structure',
  name: 'Anterior Pituitary',
  alternateNames: ['Adenohypophysis', 'Anterior lobe of pituitary', 'Pars distalis'],
  fmaId: 'FMA:74628',

  levels: {
    1: {
      level: 1,
      summary: 'The anterior pituitary is a small gland at the base of your brain that makes hormones controlling growth, stress response, and other body functions.',
      explanation: `The anterior pituitary is like a factory that makes several important hormones. It\'s about the size of a pea and sits in a special bony cave at the base of your brain called the sella turcica (which means "Turkish saddle" because of its shape).

This gland listens to orders from the hypothalamus above it and then makes hormones that tell other glands what to do. Think of it like a middle manager - it gets instructions from the boss (hypothalamus) and passes them on to workers (other glands).

**Main hormones it makes:**
- Growth hormone - helps you grow taller and build muscles
- TSH - tells your thyroid gland to work
- ACTH - tells your adrenal glands to make stress hormones
- Prolactin - helps mothers make breast milk
- LH and FSH - control reproduction and puberty`,
      keyTerms: [
        { term: 'hormone', definition: 'A chemical messenger that travels in your blood to tell body parts what to do' },
        { term: 'gland', definition: 'A body organ that makes and releases hormones or other substances' },
        { term: 'pituitary', definition: 'A pea-sized gland at the base of the brain that controls many other glands' },
      ],
      analogies: [
        'The anterior pituitary is like a control room that sends out different signals to different parts of the body.',
        'It\'s like the conductor of an orchestra - it doesn\'t play instruments itself but tells all the other players (glands) when and how to play.',
      ],
      examples: [
        'When you\'re sleeping, the anterior pituitary releases extra growth hormone to help you grow.',
        'When a mother nurses her baby, the anterior pituitary makes prolactin to produce breast milk.',
      ],
    },
    2: {
      level: 2,
      summary: 'The anterior pituitary (adenohypophysis) is a glandular structure that synthesizes and secretes six major hormones: GH, TSH, ACTH, prolactin, LH, and FSH, under control of hypothalamic releasing and inhibiting hormones.',
      explanation: `The anterior pituitary makes up about 80% of the total pituitary gland mass. Unlike the posterior pituitary (which is neural tissue), the anterior pituitary is true glandular tissue that synthesizes its own hormones.

**Location and Structure:**
- Sits in the sella turcica of the sphenoid bone
- Connected to hypothalamus via the pituitary stalk (infundibulum)
- Separated from posterior pituitary by a thin boundary

**The Six Major Hormones:**

| Hormone | Target | Main Function |
|---------|--------|---------------|
| GH (Growth Hormone) | Liver, bone, muscle | Promotes growth and metabolism |
| TSH (Thyroid-Stimulating Hormone) | Thyroid gland | Stimulates thyroid hormone production |
| ACTH (Adrenocorticotropic Hormone) | Adrenal cortex | Stimulates cortisol production |
| Prolactin | Mammary glands | Promotes milk production |
| LH (Luteinizing Hormone) | Gonads | Triggers ovulation, testosterone production |
| FSH (Follicle-Stimulating Hormone) | Gonads | Promotes egg/sperm development |

**Hypothalamic Control:**
The hypothalamus controls the anterior pituitary through releasing hormones (stimulate release) and inhibiting hormones (block release) delivered via the hypophyseal portal blood system. This is different from the posterior pituitary, which receives direct nerve connections.

**Blood Supply:**
The anterior pituitary receives blood that has first passed through the hypothalamus, allowing hypothalamic hormones to reach it directly. This unique "portal" blood supply is crucial for its function.`,
      keyTerms: [
        { term: 'adenohypophysis', definition: 'The glandular anterior portion of the pituitary gland', pronunciation: 'ad-eh-noh-hy-POF-ih-sis' },
        { term: 'sella turcica', definition: 'A saddle-shaped depression in the sphenoid bone housing the pituitary', pronunciation: 'SEL-ah TUR-sih-kah' },
        { term: 'portal system', definition: 'A blood vessel arrangement where blood passes through two capillary beds before returning to the heart' },
        { term: 'tropic hormone', definition: 'A hormone that stimulates another endocrine gland to secrete its hormones' },
      ],
      analogies: [
        'The hypophyseal portal system is like a private highway from the hypothalamus to the anterior pituitary, allowing quick and direct communication.',
      ],
    },
    3: {
      level: 3,
      summary: 'The adenohypophysis derives from Rathke\'s pouch (oral ectoderm) and contains five distinct cell types producing six hormones, with secretion patterns determined by hypothalamic releasing/inhibiting factors delivered via the hypophyseal portal circulation.',
      explanation: `**Embryological Development:**
The anterior pituitary develops from Rathke\'s pouch, an invagination of oral ectoderm from the roof of the primitive mouth. This pouch migrates superiorly to meet the infundibulum (neural ectoderm origin), forming the complete pituitary by week 12 of gestation.

**Anatomical Subdivisions:**
- **Pars distalis**: Main body, produces all six hormones
- **Pars tuberalis**: Wraps around infundibulum, contains gonadotrophs
- **Pars intermedia**: Vestigial in humans, between anterior and posterior lobes

**Cell Types and Their Products:**

| Cell Type | % of Cells | Hormone(s) | Staining |
|-----------|------------|------------|----------|
| Somatotrophs | 40-50% | GH | Acidophilic |
| Lactotrophs | 15-25% | Prolactin | Acidophilic |
| Corticotrophs | 15-20% | ACTH, β-LPH | Basophilic |
| Thyrotrophs | 5% | TSH | Basophilic |
| Gonadotrophs | 10-15% | LH, FSH | Basophilic |

*Mnemonic: "GPA" = Growth hormone & Prolactin are Acidophilic*

**Hypothalamic Control:**

| Pituitary Hormone | Releasing Hormone | Inhibiting Factor |
|-------------------|-------------------|-------------------|
| GH | GHRH | Somatostatin (GHIH) |
| TSH | TRH | Somatostatin, T3/T4 |
| ACTH | CRH (+ AVP) | Cortisol (feedback) |
| Prolactin | TRH (minor) | Dopamine (PIH) |
| LH/FSH | GnRH | GnIH, sex steroids |

**Key Point:** Prolactin is unique - it is tonically inhibited by dopamine. Loss of hypothalamic input (stalk effect) causes hyperprolactinemia but deficiency of all other anterior pituitary hormones.

**Vascular Anatomy:**
- Superior hypophyseal arteries (from internal carotid) → primary capillary plexus in median eminence → long portal veins → secondary capillary plexus in anterior pituitary
- No direct arterial supply to anterior pituitary parenchyma`,
      keyTerms: [
        { term: 'Rathke\'s pouch', definition: 'Oral ectoderm invagination that develops into the anterior pituitary' },
        { term: 'pars distalis', definition: 'The largest portion of the anterior pituitary, producing the six major hormones' },
        { term: 'acidophils', definition: 'Pituitary cells that stain with acidic dyes; include somatotrophs and lactotrophs' },
        { term: 'basophils', definition: 'Pituitary cells that stain with basic dyes; include corticotrophs, thyrotrophs, and gonadotrophs' },
        { term: 'stalk effect', definition: 'Hyperprolactinemia due to loss of dopamine inhibition from hypothalamic disconnection' },
        { term: 'chromophobes', definition: 'Pituitary cells with minimal staining; may be degranulated or undifferentiated cells' },
      ],
      clinicalNotes: 'The stalk effect is clinically important: any mass compressing the pituitary stalk causes modest prolactin elevation (typically <150 ng/mL) due to loss of dopamine inhibition, while simultaneously causing deficiency of GH, TSH, ACTH, and gonadotropins.',
    },
    4: {
      level: 4,
      summary: 'The anterior pituitary exhibits complex cell-cell interactions, paracrine signaling, and transcription factor-dependent differentiation, with hormone secretion regulated by pulsatile hypothalamic input, feedback loops, and local factors including folliculo-stellate cells.',
      explanation: `**Developmental Molecular Biology:**

Anterior pituitary cell differentiation follows a hierarchical pattern controlled by specific transcription factors:

*Common Precursor Pathways:*
1. **PROP1** → activates **PIT1** → differentiates into:
   - Somatotrophs (GH) - requires PIT1 + additional factors
   - Lactotrophs (PRL) - requires PIT1 + estrogen receptor
   - Thyrotrophs (TSH) - requires PIT1 + GATA2

2. **TPIT (TBX19)** → Corticotrophs (POMC → ACTH)
   - Independent of PIT1 lineage
   - POMC cleavage products: ACTH, β-LPH, β-endorphin

3. **SF1 + GATA2** → Gonadotrophs (LH, FSH)
   - Express both subunits: common α + specific β

*Clinical Relevance:* Mutations in PROP1 are the most common cause of combined pituitary hormone deficiency (CPHD). PIT1 mutations cause GH, PRL, and TSH deficiency.

**Hormone Structure and Synthesis:**

| Hormone | Structure | Half-life | Notes |
|---------|-----------|-----------|-------|
| GH | 191 aa, 22 kDa | 20-25 min | Pulsatile, nocturnal peak |
| Prolactin | 199 aa, 23 kDa | 20 min | Tonically inhibited |
| ACTH | 39 aa | 10 min | Derived from POMC |
| TSH | α/β glycoprotein | 50 min | Shares α subunit with LH, FSH, hCG |
| LH | α/β glycoprotein | 20 min | Pulsatile per GnRH |
| FSH | α/β glycoprotein | 3-4 hours | Less pulsatile than LH |

**Secretory Dynamics:**

*GH Secretion Pattern:*
- Pulsatile, with largest pulse during slow-wave sleep
- GHRH stimulates, somatostatin inhibits
- Ghrelin (stomach) potentiates GHRH effect
- Negative feedback: GH, IGF-1

*GnRH Pulse Frequency Determines LH:FSH Ratio:*
- High frequency (q60 min) → favors LH secretion
- Low frequency (q2-4 hr) → favors FSH secretion
- Critical for understanding PCOS pathophysiology

**Folliculo-Stellate (FS) Cells:**
- 5-10% of anterior pituitary cells
- Non-endocrine, S100-positive
- Functions:
  - Structural support (stellate morphology)
  - Paracrine signaling (IL-6, follistatin, VEGF)
  - Phagocytosis of apoptotic cells
  - May serve as stem cell population

**Local Paracrine Regulation:**
- Activin/inhibin system modulates FSH
- Follistatin binds and neutralizes activin
- IGF-1 autocrine effects on GH release
- Cytokines influence hormone secretion during inflammation`,
      keyTerms: [
        { term: 'PIT1', definition: 'Transcription factor essential for somatotroph, lactotroph, and thyrotroph differentiation' },
        { term: 'PROP1', definition: 'Prophet of PIT1; transcription factor whose mutations cause combined pituitary hormone deficiency' },
        { term: 'TPIT/TBX19', definition: 'Transcription factor required for corticotroph differentiation; mutations cause isolated ACTH deficiency' },
        { term: 'folliculo-stellate cells', definition: 'Non-endocrine supporting cells in anterior pituitary with paracrine and structural functions' },
        { term: 'common α subunit', definition: 'Shared glycoprotein subunit of TSH, LH, FSH, and hCG; hormone specificity from β subunit' },
      ],
      clinicalNotes: 'Understanding transcription factor requirements explains patterns of combined hormone deficiencies. PIT1 mutations → GH + PRL + TSH deficiency (but normal ACTH, LH/FSH). PROP1 mutations → progressive CPHD, often including late-onset ACTH deficiency. The common α subunit of glycoprotein hormones is why hCG (from pregnancy or germ cell tumors) can cause hyperthyroidism at very high levels.',
    },
    5: {
      level: 5,
      summary: 'The anterior pituitary functions as a complex endocrine organ with precise spatiotemporal hormone secretion patterns, requiring integration of hypothalamic input, intrinsic pituitary networks, and peripheral feedback for physiological homeostasis, with dysfunction manifesting as distinct clinical syndromes amenable to targeted therapeutics.',
      explanation: `**Advanced Cellular and Molecular Mechanisms:**

*GH-IGF-1 Axis Molecular Details:*
- GH binds dimerized GH receptor (GHR) → JAK2 activation
- Signal transduction: STAT5b → IGF-1 gene transcription in liver
- STAT5b mutations cause GH insensitivity with immune deficiency
- GHR mutations (Laron syndrome): High GH, low IGF-1, dwarfism

*POMC Processing and Products:*
\`\`\`
POMC → PC1/3 → ACTH + β-LPH
     → PC2 (in neurons) → α-MSH + CLIP + β-endorphin
\`\`\`
- Corticotrophs express PC1/3; produce ACTH
- Hypothalamic neurons express PC2; produce α-MSH (melanocortin)
- PC1/3 mutations: Childhood obesity, hypoglycemia, hypogonadism

**Pituitary Stem Cells and Regeneration:**
- SOX2+ cells in marginal zone and scattered throughout parenchyma
- Capable of differentiating into all pituitary cell types
- Activated after pituitary injury (e.g., post-hypophysectomy)
- May give rise to adamantinomatous craniopharyngioma (β-catenin mutations)

**Pituitary Network Organization:**
- GH and PRL cells form interconnected networks via gap junctions
- Coordinated pulsatile secretion requires network synchronization
- Calcium imaging reveals wave propagation across cell clusters
- May explain why focal adenomas affect global hormone patterns

**Clinical Assessment and Testing:**

*Dynamic Testing Protocols:*

| Test | Protocol | Interpretation |
|------|----------|----------------|
| Insulin Tolerance Test | 0.1 U/kg regular insulin IV | GH >5 ng/mL, cortisol >18 μg/dL = normal |
| GH Stimulation (alternative) | Glucagon 1 mg IM, or GHRH + arginine | Peak GH >3-5 ng/mL = normal (cut-off varies) |
| TRH Stimulation | 200-500 μg TRH IV | Exaggerated TSH rise in primary hypothyroidism |
| GnRH Stimulation | 100 μg GnRH IV | LH rise ≥2-3x baseline = normal pubertal response |
| Metyrapone Test | 750 mg PO q4h x6 | ACTH rise >75 pg/mL, 11-deoxycortisol >7 μg/dL |
| CRH Stimulation | 1 μg/kg CRH IV | Distinguishes Cushing disease from ectopic ACTH |

*Pituitary MRI Protocol:*
- Dynamic contrast-enhanced T1W: Adenomas enhance slower than normal pituitary
- 2mm slices through sella
- Microadenoma: <10mm, macroadenoma: ≥10mm
- Cavernous sinus invasion: Knosp classification

**Pituitary Adenoma Pathophysiology:**

*Molecular Drivers:*
- Somatotroph adenomas: GNAS mutations (40%) → constitutive Gsα activation
- Corticotroph adenomas: USP8 mutations (40%) → stabilizes EGFR signaling
- NFPAs: SF1 lineage, often GATA2 mutations
- Familial syndromes: MEN1 (menin), AIP (aryl hydrocarbon receptor interacting protein)

*AIP Mutations:*
- Young-onset, aggressive somatotropinomas
- Screen first-degree relatives if diagnosed <30 years
- Often resistant to somatostatin analogs

**Current Therapeutic Approaches:**

*Somatotroph Adenomas (Acromegaly):*
- First-line: Transsphenoidal surgery
- Medical: Somatostatin receptor ligands (octreotide, lanreotide, pasireotide)
- GH receptor antagonist: Pegvisomant
- Radiation: For refractory disease

*Lactotroph Adenomas (Prolactinomas):*
- First-line: Dopamine agonists (cabergoline > bromocriptine)
- Surgery reserved for DA-resistant or cystic tumors
- Temozolomide for aggressive/malignant prolactinomas

*Corticotroph Adenomas (Cushing Disease):*
- First-line: Transsphenoidal surgery
- Medical: Steroidogenesis inhibitors (ketoconazole, osilodrostat), pasireotide, cabergoline
- Bilateral adrenalectomy: Last resort (risk of Nelson syndrome)

**Emerging Therapies:**
- Oral octreotide (Mycapssa) now approved
- Paltusotine (oral somatostatin agonist) in development
- Relacorilant (selective GR antagonist) for hypercortisolism
- Immunotherapy investigation for aggressive adenomas`,
      keyTerms: [
        { term: 'Laron syndrome', definition: 'GH receptor mutation causing GH insensitivity; high GH, low IGF-1, protected from cancer and diabetes' },
        { term: 'Knosp classification', definition: 'Grading system for cavernous sinus invasion by pituitary adenomas (0-4)' },
        { term: 'AIP mutation', definition: 'Familial isolated pituitary adenoma gene; associated with young-onset, aggressive somatotropinomas' },
        { term: 'Nelson syndrome', definition: 'Aggressive ACTH-secreting pituitary adenoma developing after bilateral adrenalectomy' },
        { term: 'pegvisomant', definition: 'GH receptor antagonist used for acromegaly when somatostatin analogs fail' },
        { term: 'osilodrostat', definition: '11β-hydroxylase inhibitor for treatment of Cushing syndrome' },
      ],
      clinicalNotes: 'In clinical practice, pituitary adenomas are common (10% prevalence at autopsy) but rarely clinically significant. Functioning adenomas present with hormone excess syndromes; non-functioning adenomas (NFPAs) present with mass effects (visual field defects, hypopituitarism). The insulin tolerance test remains the gold standard for assessing GH and ACTH reserve but is contraindicated in cardiac disease, seizure disorders, and elderly patients. Contemporary management increasingly involves multidisciplinary pituitary centers integrating endocrinology, neurosurgery, neuroradiology, and radiation oncology.',
    },
  },

  media: [
    {
      id: 'anterior-pituitary-cells-1',
      type: 'histology',
      filename: 'anterior-pituitary-cells.jpg',
      title: 'Anterior Pituitary Cell Types',
      description: 'H&E staining showing acidophils and basophils',
    },
    {
      id: 'pituitary-anatomy-1',
      type: 'diagram',
      filename: 'pituitary-sella-anatomy.svg',
      title: 'Pituitary Gland in Sella Turcica',
      description: 'Sagittal view showing pituitary location and surrounding structures',
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
      id: 'williams-endo-pituitary',
      type: 'textbook',
      title: 'Pituitary Physiology and Diagnostic Evaluation',
      source: 'Williams Textbook of Endocrinology, 14th Edition',
      chapter: '8',
      license: 'Copyrighted',
    },
  ],

  crossReferences: [
    { targetId: 'anatomy-hypothalamus', targetType: 'structure', relationship: 'parent', label: 'Hypothalamus' },
    { targetId: 'anatomy-pituitary-posterior', targetType: 'structure', relationship: 'sibling', label: 'Posterior Pituitary' },
    { targetId: 'physiology-growth-hormone', targetType: 'pathway', relationship: 'related', label: 'Growth Hormone Physiology' },
    { targetId: 'pathology-pituitary-adenomas', targetType: 'condition', relationship: 'see-also', label: 'Pituitary Adenomas' },
    { targetId: 'pathology-acromegaly-gigantism', targetType: 'condition', relationship: 'see-also', label: 'Acromegaly' },
  ],

  tags: {
    systems: ['endocrine'],
    structures: ['FMA:74628', 'anterior pituitary', 'adenohypophysis'],
    topics: ['anatomy', 'endocrinology'],
    keywords: ['pituitary', 'adenohypophysis', 'GH', 'ACTH', 'TSH', 'prolactin', 'LH', 'FSH', 'tropic hormones'],
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
