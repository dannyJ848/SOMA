/**
 * Thyroid Hormone Regulation - Physiology
 *
 * Synthesis, secretion, transport, metabolism, and action of thyroid hormones
 * with feedback control via the hypothalamic-pituitary-thyroid axis.
 */

import { EducationalContent } from '../../types';

export const THYROID_HORMONE_REGULATION_PHYSIOLOGY: EducationalContent = {
  id: 'physiology-thyroid-hormone-regulation',
  type: 'pathway',
  name: 'Thyroid Hormone Regulation',
  alternateNames: ['HPT axis physiology', 'Thyroid function', 'T3/T4 regulation'],

  levels: {
    1: {
      level: 1,
      summary: 'Your thyroid gland uses iodine from food to make hormones that control how fast your body uses energy, with your brain carefully controlling how much is made.',
      explanation: `**Making Thyroid Hormone:**

Your thyroid needs iodine (from food like seafood and iodized salt) to make its hormones:
- **T4** (thyroxine) - has 4 iodine atoms, main hormone released
- **T3** (triiodothyronine) - has 3 iodine atoms, the active form

**How Your Body Controls It:**

Think of it like a thermostat system:
1. Your brain (hypothalamus and pituitary) senses if you need more energy
2. TSH is released to tell your thyroid to make more hormone
3. Thyroid releases T4 into your blood
4. T4 is converted to T3 in your cells where it works
5. When you have enough, your brain senses this and makes less TSH

**What Thyroid Hormones Do:**
- Speed up your metabolism (burn more calories)
- Help your brain develop (very important for babies!)
- Keep your heart beating properly
- Help you feel warm
- Give you energy

**Why This Matters:**
- Too little thyroid hormone = feel tired, cold, slow (hypothyroidism)
- Too much thyroid hormone = feel hot, anxious, heart races (hyperthyroidism)`,
      keyTerms: [
        { term: 'T4', definition: 'The main thyroid hormone (thyroxine) with 4 iodine atoms' },
        { term: 'T3', definition: 'The active thyroid hormone with 3 iodine atoms' },
        { term: 'TSH', definition: 'Thyroid stimulating hormone from the pituitary that tells the thyroid to work' },
        { term: 'metabolism', definition: 'How your body converts food into energy' },
      ],
      analogies: [
        'Thyroid hormone is like the gas pedal of your metabolism - more hormone means a faster "engine."',
        'T4 is like a package that needs to be opened (converted to T3) before your cells can use it.',
      ],
      examples: [
        'Pregnant women need more thyroid hormone because the baby depends on it for brain development.',
        'In cold weather, your body may increase thyroid hormone to generate more heat.',
      ],
    },
    2: {
      level: 2,
      summary: 'Thyroid hormone physiology involves iodine trapping, thyroglobulin synthesis, hormone synthesis and release, peripheral conversion of T4 to T3, receptor-mediated genomic actions, and tight feedback control via the HPT axis.',
      explanation: `**Thyroid Hormone Synthesis:**

*Step 1: Iodine Trapping*
- Sodium-iodide symporter (NIS) on basolateral membrane
- Concentrates iodide 20-40x above plasma levels
- TSH stimulates NIS expression

*Step 2: Organification*
- Iodide transported to apical surface (pendrin)
- Thyroid peroxidase (TPO) oxidizes iodide
- Iodine attached to tyrosine residues in thyroglobulin
- Forms MIT (monoiodotyrosine) and DIT (diiodotyrosine)

*Step 3: Coupling*
- TPO couples iodotyrosines:
  - DIT + DIT → T4
  - DIT + MIT → T3
- Hormones remain attached to thyroglobulin in colloid

*Step 4: Release*
- TSH stimulates thyroglobulin endocytosis
- Lysosomal proteolysis releases T4 and T3
- T4:T3 ratio in secretion is ~20:1
- MIT and DIT deiodinated, iodine recycled

**Hormone Transport:**

| Carrier | T4 Binding | T3 Binding | % T4 Bound |
|---------|------------|------------|------------|
| Thyroxine-binding globulin (TBG) | High | Moderate | 70% |
| Transthyretin (TTR/prealbumin) | Moderate | Low | 15% |
| Albumin | Low | Low | 15% |

- Only FREE hormone is biologically active
- Free T4: 0.02% of total
- Free T3: 0.3% of total

**Peripheral Conversion:**

Most T3 is produced in peripheral tissues, not the thyroid:
| Deiodinase | Location | Reaction | Function |
|------------|----------|----------|----------|
| D1 | Liver, kidney | T4→T3, rT3→T2 | Plasma T3 source |
| D2 | Brain, pituitary, BAT | T4→T3 | Local T3 production |
| D3 | Placenta, brain | T4→rT3, T3→T2 | Hormone inactivation |

**Hormone Actions:**
- T3 enters cells and binds nuclear thyroid hormone receptor (TR)
- TR-T3 complex binds DNA thyroid response elements (TREs)
- Regulates gene transcription
- Effects on: Metabolism, thermogenesis, heart, brain, bone, growth

**Feedback Regulation:**
- T3 inhibits TRH gene in hypothalamus
- T3 inhibits TSH β-subunit gene in pituitary
- Pituitary has high D2 activity (sensitive to T4)
- TSH has inverse log-linear relationship with free T4`,
      keyTerms: [
        { term: 'NIS', definition: 'Sodium-iodide symporter; transporter concentrating iodide in thyroid' },
        { term: 'TPO', definition: 'Thyroid peroxidase; enzyme that organifies iodine and couples iodotyrosines' },
        { term: 'thyroglobulin', definition: 'Large protein in thyroid colloid serving as scaffold for hormone synthesis' },
        { term: 'TBG', definition: 'Thyroxine-binding globulin; main carrier protein for thyroid hormones' },
        { term: 'reverse T3 (rT3)', definition: 'Inactive metabolite of T4 produced by D3' },
      ],
      analogies: [
        'Thyroglobulin is like a storage warehouse where thyroid hormones are kept until needed.',
        'The different deiodinases are like three different processing plants that can either activate the hormone (D1, D2) or deactivate it (D3).',
      ],
    },
    3: {
      level: 3,
      summary: 'Thyroid hormone physiology involves iodine concentration via NIS, TPO-mediated organification and coupling on thyroglobulin, deiodination-mediated T4 activation, nuclear receptor-mediated transcriptional regulation, and set-point-determined HPT axis control with clinical implications for thyroid function testing.',
      explanation: `**Detailed Synthesis Mechanisms:**

*Iodine Handling:*
- NIS (SLC5A5): Na⁺ gradient-driven iodide uptake (2Na⁺:1I⁻)
- Pendrin (SLC26A4): Apical iodide efflux to colloid
- Mutations: NIS → congenital hypothyroidism; Pendrin → Pendred syndrome

*TPO Catalytic Cycle:*
1. Oxidation of I⁻ to I⁺ (or I•) using H₂O₂
2. H₂O₂ generated by DUOX2 (dual oxidase 2)
3. Iodination of Tg tyrosyl residues (organification)
4. Coupling of MIT + DIT → T3; DIT + DIT → T4
5. TPO antibodies = marker of autoimmune thyroid disease

*Thyroglobulin:*
- 660 kDa glycoprotein dimer
- Contains ~130 tyrosine residues
- Only 4-8 form hormonogenic sites
- Position of tyrosines and protein conformation favor T4 synthesis
- Tg levels used to monitor differentiated thyroid cancer

**Deiodinase Biology:**

*Type 1 (D1):*
- Outer ring (5') deiodination (activation)
- Inner ring (5) deiodination (inactivation)
- Km for T4: ~1 μM (low affinity)
- Inhibited by PTU
- Contributes to circulating T3

*Type 2 (D2):*
- Outer ring deiodination only
- Km for T4: ~1 nM (high affinity)
- Provides local T3 for pituitary feedback
- Regulated by ubiquitin-proteasome (T4 ↑ → D2 ↓)
- Critical for BAT thermogenesis

*Type 3 (D3):*
- Inner ring deiodination only
- Inactivates T4 and T3
- Protects fetus from excess thyroid hormone
- Upregulated in illness (produces rT3)

**Thyroid Hormone Receptors:**

*Receptor Isoforms:*
| Receptor | Gene | Tissue Distribution | Ligand |
|----------|------|---------------------|--------|
| TRα1 | THRA | Heart, brain, bone | T3 |
| TRα2 | THRA | Widespread | Does not bind T3 |
| TRβ1 | THRB | Liver, kidney | T3 |
| TRβ2 | THRB | Hypothalamus, pituitary | T3 (feedback) |

*Mechanism of Action:*
- TR binds TRE as homodimer or heterodimer with RXR
- Unliganded TR: Recruits corepressors (NCoR, SMRT) → repression
- T3-bound TR: Corepressor release → coactivator recruitment → activation
- Some genes are negatively regulated (e.g., TSHβ - T3 represses)

**TSH-Thyroid Hormone Set Point:**

*Log-Linear Relationship:*
- 2-fold change in free T4 → ~100-fold change in TSH
- Each individual has a narrow set point
- Population reference range encompasses many individual set points

*Clinical Implications:*
- TSH is most sensitive marker of thyroid status
- Subclinical disease: TSH abnormal, T4/T3 normal
- Central hypothyroidism: TSH cannot be used alone

**Extrathyroidal Effects of TSH:**
- TSH receptors on adipocytes, bone, immune cells
- In Graves' disease, TSH-receptor antibodies affect these tissues
- May explain some extrathyroidal manifestations`,
      keyTerms: [
        { term: 'DUOX2', definition: 'Dual oxidase 2; generates H₂O₂ for TPO-mediated reactions' },
        { term: 'Pendred syndrome', definition: 'Pendrin mutation causing goiter, congenital hearing loss, and hypothyroidism' },
        { term: 'TRβ2', definition: 'Thyroid receptor beta 2; expressed in hypothalamus and pituitary, mediates feedback' },
        { term: 'ubiquitin-proteasome', definition: 'System regulating D2 protein levels in response to T4' },
        { term: 'corepressor', definition: 'Protein recruited to unliganded nuclear receptor that represses transcription' },
      ],
      clinicalNotes: 'PTU inhibits D1 (in addition to TPO), which is why it is preferred in thyroid storm - it blocks both synthesis and peripheral conversion. Amiodarone contains 37% iodine by weight and can cause both hypo- and hyperthyroidism. It also inhibits D1. In nonthyroidal illness, low T3, elevated rT3, with normal or low TSH reflects adaptive D3 upregulation; treatment is usually not recommended.',
    },
    4: {
      level: 4,
      summary: 'Thyroid hormone physiology integrates membrane transport, intracellular activation, receptor signaling, and coregulator recruitment with tissue-specific effects determined by deiodinase expression, transporter availability, and receptor isoform distribution, providing the basis for understanding thyroid hormone resistance and tissue-specific hypothyroidism.',
      explanation: `**Cellular Thyroid Hormone Transport:**

*Membrane Transporters:*
| Transporter | Gene | Substrates | Tissue | Clinical Deficiency |
|-------------|------|------------|--------|---------------------|
| MCT8 | SLC16A2 | T3 > T4 | Brain, liver | Allan-Herndon-Dudley syndrome |
| MCT10 | SLC16A10 | T3 | Muscle, intestine | None described |
| OATP1C1 | SLCO1C1 | T4 > T3 | Brain | Mouse models |
| LAT1/LAT2 | SLC7A5/8 | T3, T4 | Various | Part of transport system |

*Allan-Herndon-Dudley Syndrome:*
- X-linked MCT8 deficiency
- Severe psychomotor retardation in males
- Elevated T3, low/normal T4, normal TSH
- Brain cannot access T3 despite high serum levels
- DITPA (diiodothyropropionic acid) under investigation

**Molecular Mechanisms of TR Action:**

*Coregulator Complexes:*

Corepressors (unliganded TR):
- NCoR (nuclear receptor corepressor)
- SMRT (silencing mediator of retinoid and thyroid receptors)
- Recruit HDACs → chromatin compaction → repression

Coactivators (T3-bound TR):
- SRC/p160 family
- Mediator complex
- HATs → chromatin opening → transcription activation

*Resistance to Thyroid Hormone (RTH):*

| Type | Gene | Inheritance | TSH | T4/T3 | Features |
|------|------|-------------|-----|-------|----------|
| RTHβ | THRB | AD (dominant negative) | Normal/high | High | Tachycardia, goiter, variable |
| RTHα | THRA | AD | Normal | Normal (low T3:T4 ratio) | Growth retardation, constipation |
| RTH due to MCT8 | SLC16A2 | X-linked | Normal | High T3, low T4 | Severe CNS impairment |

*RTHβ Mechanism:*
- Mutant TRβ has reduced T3 binding or reduced coactivator recruitment
- Dominant negative: Mutant receptor occupies TRE, blocks wild-type
- Feedback impaired → elevated T4/T3 needed for normal TSH
- Peripheral tissues often relatively hypothyroid despite high T4

**Tissue-Specific Thyroid Hormone Effects:**

*Heart:*
- T3 increases HR, contractility, cardiac output
- Upregulates: SERCA2a, α-MHC, β1-adrenergic receptors
- Downregulates: Phospholamban, β-MHC
- Hyperthyroidism: Atrial fibrillation, high-output failure

*Bone:*
- T3 stimulates osteoblast and osteoclast activity
- Net effect hyperthyroidism: Bone resorption > formation
- Prolonged TSH suppression increases fracture risk
- TRα1 mediates bone effects

*Brain Development:*
- Critical for myelination, synaptogenesis, neuronal migration
- Sensitive period: Fetal and first 2-3 years postnatal
- Congenital hypothyroidism: Intellectual disability if untreated
- Newborn screening essential

*Metabolism:*
- Increases basal metabolic rate
- Stimulates fatty acid oxidation
- Increases gluconeogenesis
- Thermogenesis via UCP1 in brown fat (D2-dependent T3 generation)

**Non-Genomic Thyroid Hormone Actions:**

*Integrin αvβ3 Receptor:*
- Cell surface receptor for T4 (and T3)
- Activates MAPK/ERK pathway
- Effects: Angiogenesis, cell proliferation
- May contribute to cancer cell biology

*Mitochondrial Effects:*
- TR isoforms in mitochondria
- Direct effects on oxidative phosphorylation
- May explain rapid metabolic effects

**Autoimmune Thyroid Disease Immunology:**

*Graves' Disease:*
- TSH receptor stimulating antibodies (TSI/TRAb)
- Mimic TSH → constitutive receptor activation
- No negative feedback → hyperthyroidism
- TSI cross-reactivity with orbital fibroblast TSH-R → ophthalmopathy

*Hashimoto's Thyroiditis:*
- TPO antibodies (most sensitive), Tg antibodies
- Cell-mediated destruction of thyroid
- Progressive hypothyroidism
- Lymphocytic infiltration on histology`,
      keyTerms: [
        { term: 'MCT8', definition: 'Monocarboxylate transporter 8; primary T3 transporter into brain cells' },
        { term: 'RTHβ', definition: 'Resistance to thyroid hormone beta; TRβ mutation causing impaired feedback with elevated T4/T3' },
        { term: 'Allan-Herndon-Dudley syndrome', definition: 'X-linked MCT8 deficiency causing severe neurological impairment with elevated T3' },
        { term: 'integrin αvβ3', definition: 'Cell surface receptor mediating non-genomic thyroid hormone effects' },
        { term: 'TSI', definition: 'Thyroid-stimulating immunoglobulin; pathogenic antibody in Graves disease' },
      ],
      clinicalNotes: 'Resistance to thyroid hormone beta (RTHβ) can be misdiagnosed as hyperthyroidism if TSH and clinical context are not considered. These patients should NOT receive antithyroid drugs or ablation. Elevated T4 and T3 with non-suppressed TSH suggests RTH, TSH-secreting adenoma, or assay interference. TRH stimulation (if available) helps differentiate: RTH shows TSH response, adenoma does not.',
    },
    5: {
      level: 5,
      summary: 'Thyroid hormone physiology encompasses integrated understanding of iodine metabolism, hormone synthesis and transport, tissue-specific activation, genomic and non-genomic signaling, and feedback regulation with clinical applications in congenital hypothyroidism, resistance syndromes, nonthyroidal illness, and thyroid cancer management.',
      explanation: `**Congenital Hypothyroidism - Molecular Basis:**

*Thyroid Dysgenesis (85%):*
| Gene | Protein | Phenotype |
|------|---------|-----------|
| PAX8 | Transcription factor | Athyreosis or hypoplasia |
| NKX2-1/TTF1 | Transcription factor | Brain-lung-thyroid syndrome |
| FOXE1/TTF2 | Transcription factor | Bamforth-Lazarus syndrome |
| TSHR | TSH receptor | Hypoplasia, mild to severe |

*Dyshormonogenesis (15%):*
| Gene | Defect | Laboratory | Notes |
|------|--------|------------|-------|
| SLC5A5 (NIS) | Iodide uptake | Low uptake, high TSH | Partial defects possible |
| SLC26A4 (Pendrin) | Iodide efflux | Partial organification defect | Pendred syndrome (with deafness) |
| TPO | Organification | Total organification defect | Most common dyshormonogenesis |
| DUOX2/DUOXA2 | H₂O₂ generation | Variable | May be transient |
| TG | Thyroglobulin | Low Tg, high TSH | Goiter common |
| IYD/DEHAL1 | Iodotyrosine recycling | MIT/DIT in urine | Iodine deficiency phenotype |

**Nonthyroidal Illness Syndrome (NTIS):**

*Pathophysiology:*
\`\`\`
Acute illness → Cytokines (IL-6, TNF-α, IL-1β)
                   ↓
            Multiple effects:
            - ↓ D1 activity
            - ↑ D3 activity (inactivation)
            - ↓ TRH expression
            - ↓ TSH secretion
            - ↓ TBG affinity for T4
                   ↓
            Low T3, Low/Normal T4, Low/Normal TSH
            Elevated rT3
\`\`\`

*Clinical Interpretation:*
| Pattern | Likely Diagnosis |
|---------|------------------|
| Low T3, normal T4, normal TSH | Mild illness |
| Low T3, low T4, low TSH | Severe/prolonged illness |
| Low T4, elevated TSH | Recovery phase OR primary hypothyroidism |

*Management:*
- Generally NO treatment recommended
- Treat underlying illness
- Recheck thyroid function after recovery
- Exception: Some advocate T3 replacement in prolonged critical illness (controversial)

**Thyroid Cancer - Molecular and Management Considerations:**

*Driver Mutations:*
| Cancer Type | Common Mutations | Signaling Pathway |
|-------------|------------------|-------------------|
| Papillary | BRAF V600E (45%), RET/PTC | MAPK activation |
| Papillary | RAS (10-20%) | MAPK and PI3K |
| Follicular | RAS (40%), PAX8-PPARγ | PI3K, MAPK |
| Anaplastic | BRAF, RAS + TP53, TERT | Multiple |
| Medullary | RET (germline MEN2) | Receptor tyrosine kinase |

*TSH Suppression in DTC:*
- TSH stimulates thyroid cancer growth via TSHR
- Levothyroxine to achieve TSH suppression
- ATA Risk Stratification guides target:
  - High risk: TSH <0.1 mU/L
  - Intermediate: 0.1-0.5 mU/L
  - Low risk/excellent response: 0.5-2.0 mU/L

*Thyroglobulin Monitoring:*
- Tg produced only by differentiated thyroid tissue
- Post-thyroidectomy + RAI: Tg should be undetectable
- Rising Tg suggests recurrence
- Tg antibodies interfere with Tg assay (use Tg antibody trend)

*RAI Therapy Considerations:*
- Requires TSH stimulation (TSH >30) for uptake
- Options: Thyroid hormone withdrawal OR rhTSH (Thyrogen)
- rhTSH advantages: Avoids hypothyroid symptoms, maintains quality of life
- Stunning: Diagnostic RAI may reduce subsequent therapy uptake

**Drug-Induced Thyroid Dysfunction:**

*Amiodarone:*
- Contains 37% iodine (75 mg iodine per 200 mg tablet)
- Type 1 AIT: Excess iodine → hyperthyroidism (underlying thyroid disease)
- Type 2 AIT: Drug toxicity → thyroiditis → hyperthyroidism
- Treatment: Type 1 = antithyroid drugs; Type 2 = steroids
- Mixed types common; may need combination therapy

*Immune Checkpoint Inhibitors:*
| Drug Class | Thyroid Effect | Mechanism |
|------------|----------------|-----------|
| Anti-CTLA4 | Hypophysitis (central hypothyroidism) | Immune infiltration |
| Anti-PD1/PDL1 | Thyroiditis → hypo or hyper | Autoimmune activation |

*Tyrosine Kinase Inhibitors:*
- Many TKIs cause hypothyroidism
- Mechanism: Increased T4 clearance, thyroid destruction
- Monitor TSH in all patients on TKIs

**Advanced Thyroid Hormone Therapeutics:**

*Combination T4+T3 Therapy:*
- Rationale: Some patients remain symptomatic on T4 alone
- Studies: No consistent benefit vs. T4 alone
- Current guidelines: Do not routinely recommend
- May consider in persistently symptomatic with normal TSH

*Synthetic T3 Analogs:*
- Sobetirome/GC-1: TRβ-selective, hepatic effects without cardiac
- Applications: Dyslipidemia, NASH (investigational)
- Resmetirom: TRβ-selective, advancing for NASH

*Thyroid Hormone for Weight Loss:*
- Supraphysiologic doses increase metabolic rate
- NOT recommended: Bone loss, cardiac arrhythmia, muscle wasting
- Risk >> benefit for weight management`,
      keyTerms: [
        { term: 'BRAF V600E', definition: 'Most common driver mutation in papillary thyroid cancer; activates MAPK pathway' },
        { term: 'Thyrogen', definition: 'Recombinant human TSH used for thyroid cancer follow-up and RAI therapy' },
        { term: 'amiodarone-induced thyrotoxicosis', definition: 'Hyperthyroidism from amiodarone; Type 1 (iodine-induced) or Type 2 (thyroiditis)' },
        { term: 'stunning', definition: 'Reduction in RAI uptake after diagnostic dose, potentially reducing therapeutic efficacy' },
        { term: 'resmetirom', definition: 'TRβ-selective thyroid hormone analog in development for NASH' },
      ],
      clinicalNotes: 'In thyroid cancer follow-up, stimulated Tg (after TSH elevation) is more sensitive than suppressed Tg. Tg antibody positivity complicates monitoring; trending antibody levels may provide surrogate information. BRAF V600E positivity in PTC is associated with higher recurrence risk and may guide extent of surgery and RAI decisions. The distinction between Type 1 and Type 2 amiodarone-induced thyrotoxicosis is often difficult; color flow Doppler ultrasound can help (increased flow in Type 1, decreased in Type 2).',
    },
  },

  media: [
    {
      id: 'thyroid-synthesis-1',
      type: 'diagram',
      filename: 'thyroid-hormone-synthesis.svg',
      title: 'Thyroid Hormone Synthesis',
      description: 'Steps from iodine uptake to hormone release',
    },
    {
      id: 'deiodinase-pathway-1',
      type: 'diagram',
      filename: 'deiodinase-pathways.svg',
      title: 'Deiodinase Activation and Inactivation',
      description: 'D1, D2, and D3 pathways converting thyroid hormones',
    },
  ],

  citations: [
    {
      id: 'brent-thyroid-review',
      type: 'article',
      title: 'Mechanisms of Thyroid Hormone Action',
      authors: ['Brent, GA'],
      source: 'Journal of Clinical Investigation',
      license: 'Copyrighted',
    },
    {
      id: 'bianco-deiodinases',
      type: 'article',
      title: 'The Deiodinase Trio and Thyroid Hormone Signaling',
      authors: ['Bianco, AC', 'Kim, BW'],
      source: 'Endocrine Reviews',
      license: 'Copyrighted',
    },
  ],

  crossReferences: [
    { targetId: 'anatomy-thyroid-gland', targetType: 'structure', relationship: 'related', label: 'Thyroid Gland Anatomy' },
    { targetId: 'pathology-hypothyroidism', targetType: 'condition', relationship: 'see-also', label: 'Hypothyroidism' },
    { targetId: 'pathology-hyperthyroidism', targetType: 'condition', relationship: 'see-also', label: 'Hyperthyroidism' },
    { targetId: 'clinical-thyroid-function-tests', targetType: 'topic', relationship: 'related', label: 'Thyroid Function Testing' },
  ],

  tags: {
    systems: ['endocrine'],
    topics: ['physiology', 'thyroid'],
    keywords: ['thyroid hormone', 'T3', 'T4', 'TSH', 'deiodinase', 'metabolism', 'HPT axis'],
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
