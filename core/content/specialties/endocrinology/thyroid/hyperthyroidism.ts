/**
 * Hyperthyroidism
 *
 * Comprehensive content on hyperthyroidism pathophysiology, diagnosis, and management.
 */

import { EducationalContent } from '../../../types';

export const HYPERTHYROIDISM: EducationalContent = {
  id: 'endocrine-hyperthyroidism',
  type: 'condition',
  name: 'Hyperthyroidism',
  alternateNames: ['Overactive thyroid', 'Thyrotoxicosis', 'High thyroid'],

  levels: {
    1: {
      level: 1,
      summary: 'Hyperthyroidism is a condition where your thyroid gland makes too much thyroid hormone, causing your body to speed up.',
      explanation: `Your thyroid is a small gland in your neck that controls how fast your body works. When it makes too much hormone, everything speeds up - your heart beats faster, you feel hot, and you may lose weight.

**Common symptoms:**
- Racing heart or palpitations
- Feeling hot and sweaty when others feel fine
- Losing weight without trying
- Feeling nervous, anxious, or shaky
- Trouble sleeping
- Diarrhea or more frequent bowel movements
- Muscle weakness
- Bulging eyes (in some cases)

**Main causes:**
- **Graves' disease**: Your immune system tells your thyroid to make too much hormone (most common)
- **Thyroid nodules**: Lumps in the thyroid that make extra hormone
- **Thyroiditis**: Inflammation that releases stored hormone

**Treatment options:**
1. **Medications**: Pills that slow down hormone production
2. **Radioactive iodine**: Drink a liquid that shrinks the thyroid
3. **Surgery**: Remove part or all of the thyroid

**Important:**
Untreated hyperthyroidism can cause heart problems and weak bones, so getting treatment is important!`,
      keyTerms: [
        { term: 'thyroid', definition: 'A butterfly-shaped gland in your neck that makes hormones' },
        { term: 'palpitations', definition: 'Feeling like your heart is racing, pounding, or fluttering' },
        { term: 'Graves\' disease', definition: 'An immune system problem that makes your thyroid overactive' },
      ],
      analogies: [
        'If your thyroid is like a car engine\'s gas pedal, hyperthyroidism is like the pedal being stuck down - everything runs too fast.',
        'In Graves\' disease, your immune system is like a micromanager constantly telling your thyroid to work harder.',
      ],
      examples: [
        'A person feels their heart racing even when sitting still, loses weight without dieting, and feels anxious all the time.',
        'Someone with Graves\' disease notices their eyes look more prominent or "staring."',
      ],
    },
    2: {
      level: 2,
      summary: 'Hyperthyroidism is excess thyroid hormone, most commonly caused by Graves\' disease (autoimmune) or toxic nodular goiter. Diagnosis is confirmed by suppressed TSH with elevated free T4 and/or T3, and treatment includes antithyroid drugs, radioactive iodine, or surgery.',
      explanation: `**Thyroid Axis Review:**
- TRH (hypothalamus) → TSH (pituitary) → T4/T3 (thyroid)
- Elevated T4/T3 → Suppressed TSH (negative feedback)

**Causes:**

*Increased Hormone Production:*
- **Graves' disease**: TSH receptor antibodies stimulate thyroid (70-80% of cases)
- **Toxic multinodular goiter**: Autonomous nodules
- **Toxic adenoma**: Single autonomous nodule
- **TSH-secreting pituitary adenoma** (rare)

*Release of Stored Hormone (Thyroiditis):*
- Subacute (de Quervain): Painful, post-viral
- Postpartum thyroiditis
- Drug-induced (amiodarone, checkpoint inhibitors)

*Exogenous:*
- Excessive levothyroxine intake
- "Hamburger thyrotoxicosis" (contaminated meat)

**Clinical Features:**
| System | Manifestations |
|--------|----------------|
| Cardiovascular | Tachycardia, atrial fibrillation, high-output HF |
| Neurological | Tremor, anxiety, insomnia, hyperreflexia |
| Metabolic | Weight loss, heat intolerance, increased appetite |
| GI | Hyperdefecation, rarely diarrhea |
| Musculoskeletal | Proximal muscle weakness |
| Skin | Warm, moist; pretibial myxedema (Graves') |
| Eyes | Lid lag, stare; Graves' ophthalmopathy (proptosis) |

**Diagnosis:**
| Test | Result | Interpretation |
|------|--------|----------------|
| TSH | Suppressed (<0.1 mU/L) | Primary indicator |
| Free T4 | Elevated | Confirms hyperthyroidism |
| Free T3 | May be elevated | T3 toxicosis if T4 normal |
| TSI/TRAb | Positive | Confirms Graves' disease |
| Radioactive iodine uptake (RAIU) | High: Graves'/toxic nodule; Low: Thyroiditis | Differentiates causes |

**Treatment:**

*Graves' Disease Options:*
1. **Antithyroid drugs (ATDs)**: Methimazole (preferred), PTU
   - Duration: 12-18 months, then may attempt withdrawal
   - ~30% achieve remission

2. **Radioactive iodine (RAI)**: Destroys thyroid tissue
   - Definitive treatment
   - Usually results in hypothyroidism
   - Avoid in severe ophthalmopathy, pregnancy

3. **Surgery (thyroidectomy)**:
   - Large goiter, suspicious nodules, severe ophthalmopathy
   - Results in hypothyroidism

*Symptomatic Treatment:*
- Beta-blockers for tachycardia, tremor, anxiety`,
      keyTerms: [
        { term: 'thyrotoxicosis', definition: 'Excess thyroid hormone in the body from any cause (hyperthyroidism is one cause)' },
        { term: 'TSI', definition: 'Thyroid-stimulating immunoglobulin; antibody that causes Graves\' disease' },
        { term: 'TRAb', definition: 'TSH receptor antibodies; includes stimulating (TSI) and blocking antibodies' },
        { term: 'RAIU', definition: 'Radioactive iodine uptake scan; helps determine cause of hyperthyroidism' },
        { term: 'methimazole', definition: 'Antithyroid drug that blocks hormone synthesis; first-line treatment' },
        { term: 'Graves\' ophthalmopathy', definition: 'Eye disease in Graves\' disease causing bulging, redness, and vision problems' },
      ],
      analogies: [
        'In Graves\' disease, TSI antibodies are like fake keys that keep turning on the thyroid\'s ignition, even when TSH is saying "stop."',
        'Radioactive iodine is like a targeted missile that only destroys thyroid cells because they\'re the only cells that take up iodine.',
      ],
    },
    3: {
      level: 3,
      summary: 'Hyperthyroidism results from excess thyroid hormone production (Graves\', toxic nodular disease) or release (thyroiditis). Management depends on etiology, with antithyroid drugs, radioactive iodine, and surgery as primary options. Graves\' ophthalmopathy requires separate consideration.',
      explanation: `**Pathophysiology:**

*Graves' Disease:*
- TSH receptor-stimulating antibodies (TSI) activate thyroid
- HLA-DR3 association; polygenic susceptibility
- Female:male ratio 5-10:1
- Environmental triggers: Stress, smoking, iodine, postpartum

*Toxic Multinodular Goiter (TMNG):*
- Autonomous nodules with activating TSH receptor mutations
- Usually in elderly with longstanding goiter
- Endemic iodine-deficient areas

*Toxic Adenoma:*
- Single hyperfunctioning nodule
- Somatic TSH receptor or Gsα mutations
- "Hot" on scintigraphy

**Thyroiditis Spectrum:**

| Type | Etiology | Painful | Phase | RAIU |
|------|----------|---------|-------|------|
| Subacute (de Quervain) | Post-viral | Yes | Hyper→Hypo→Eu | Very low |
| Postpartum | Autoimmune | No | Hyper→Hypo→Eu | Very low |
| Silent/painless | Autoimmune | No | Hyper→Hypo→Eu | Very low |
| Amiodarone (Type 1) | Iodine-induced | No | Hyper | Variable |
| Amiodarone (Type 2) | Destructive | No | Hyper | Very low |

**Diagnosis - Decision Algorithm:**

TSH suppressed → Check Free T4, Free T3:
1. Both elevated → Overt hyperthyroidism
2. T3 elevated, T4 normal → T3 toxicosis
3. Both normal → Subclinical hyperthyroidism

If hyperthyroidism confirmed → TRAb/TSI:
- Positive → Graves' disease
- Negative → RAIU scan to differentiate

RAIU Interpretation:
- Diffusely elevated: Graves'
- Focal uptake: Toxic adenoma
- Multiple focal: TMNG
- Very low/absent: Thyroiditis, exogenous, or iodine load

**Antithyroid Drug Therapy:**

*Methimazole (MMI):*
- Mechanism: Inhibits TPO → blocks iodination
- Initial dose: 10-30 mg daily (dose-dependent)
- Advantages: Once daily, lower side effects
- Major side effect: Agranulocytosis (0.2-0.5%)

*Propylthiouracil (PTU):*
- Mechanism: Inhibits TPO + peripheral T4→T3 conversion
- Uses: First trimester pregnancy, thyroid storm
- Disadvantages: TID dosing, hepatotoxicity risk

*Monitoring:*
- CBC baseline; warn about sore throat/fever
- Free T4 and T3 at 4-6 weeks
- Titrate to maintain euthyroidism
- Duration: 12-18 months before trial off medication
- Remission predictors: Small goiter, mild disease, negative TRAb at cessation

**Radioactive Iodine Therapy:**

*Mechanism:* I-131 concentrated in thyroid → beta radiation → cell destruction

*Administration:*
- Stop ATD 3-5 days before
- Single oral dose (calculation based on gland size, RAIU)
- Effect over 6-12 weeks
- Most become hypothyroid (desired outcome)

*Contraindications:*
- Pregnancy/breastfeeding
- Active moderate-severe Graves' ophthalmopathy (may worsen)
- Very large goiter (incomplete ablation)

*Ophthalmopathy Considerations:*
- Mild: May proceed with steroid prophylaxis
- Moderate-severe: Avoid RAI; consider ATD long-term or surgery

**Graves' Ophthalmopathy:**

*Pathophysiology:*
- TSH receptors on orbital fibroblasts
- Autoantibody-mediated inflammation
- Glycosaminoglycan accumulation → edema
- Adipogenesis → increased orbital fat

*Clinical Activity Score (CAS):*
7 features: Pain (movement, rest), redness (lids, conjunctiva), swelling (lids, chemosis, caruncle)
≥3 = Active disease → immunosuppression beneficial

*Treatment:*
- Smoking cessation critical
- Selenium supplementation (mild cases)
- Glucocorticoids (IV methylprednisolone for moderate-severe)
- Orbital radiotherapy
- Teprotumumab (IGF-1R inhibitor): Novel therapy for moderate-severe
- Orbital decompression surgery (severe, sight-threatening)`,
      keyTerms: [
        { term: 'T3 toxicosis', definition: 'Hyperthyroidism with elevated T3 but normal T4; can be early Graves\' or nodular disease' },
        { term: 'agranulocytosis', definition: 'Severe reduction in neutrophils; rare but serious ATD complication' },
        { term: 'CAS', definition: 'Clinical Activity Score; assesses inflammatory activity in Graves\' ophthalmopathy' },
        { term: 'teprotumumab', definition: 'Monoclonal antibody against IGF-1R; FDA-approved for Graves\' ophthalmopathy' },
        { term: 'amiodarone-induced thyrotoxicosis', definition: 'Hyperthyroidism from amiodarone; Type 1 is iodine-induced, Type 2 is destructive thyroiditis' },
      ],
      clinicalNotes: 'Treatment choice depends on patient factors: RAI is definitive but requires radiation precautions and often causes hypothyroidism; ATDs offer medication-only approach but have lower remission rates (~30%); surgery is preferred for large goiters, suspicious nodules, or severe ophthalmopathy. Beta-blockers provide rapid symptom relief while definitive treatment takes effect. Always check pregnancy status before RAI.',
    },
    4: {
      level: 4,
      summary: 'Hyperthyroidism pathophysiology involves TSH receptor activation or thyroid cell destruction. Graves\' disease results from complex autoimmune dysregulation with extrathyroidal manifestations. Management requires individualized approach based on etiology, severity, and patient-specific factors including ophthalmopathy and fertility considerations.',
      explanation: `**TSH Receptor Signaling:**

*Normal Physiology:*
- TSH binds TSHR → Gsα activation → cAMP increase
- PKA activation → CREB → thyroglobulin, TPO, NIS transcription
- Also activates Gq → PLC → DAG/IP3 → growth signaling

*Graves' Disease:*
- TSI (stimulating antibodies) bind TSHR → sustained activation
- Polyclonal antibodies → variable epitope binding
- Some patients have blocking antibodies → may convert to hypothyroidism

*Activating TSHR Mutations:*
- Somatic mutations in toxic adenoma
- Germline mutations → familial non-autoimmune hyperthyroidism
- Gsα mutations (McCune-Albright syndrome)

**Graves' Disease Immunopathogenesis:**

*Genetic Factors:*
- HLA-DR3 (Caucasians), HLA-DQ (Asians)
- CTLA4, PTPN22, CD40 polymorphisms
- TSHR polymorphisms

*Environmental Triggers:*
- Smoking: Major risk factor; worsens ophthalmopathy
- Stress: Neuroendocrine-immune interactions
- Postpartum: Immune reconstitution
- Iodine excess: Jod-Basedow effect

*Immune Mechanisms:*
- Loss of tolerance to TSHR
- Th2-predominant response (antibody production)
- B cell activation → TSI production
- Thyroid lymphocytic infiltration (less than Hashimoto's)

**Amiodarone Thyrotoxicosis - Detailed:**

| Feature | Type 1 (AIT1) | Type 2 (AIT2) |
|---------|---------------|---------------|
| Mechanism | Iodine-induced excess synthesis | Destructive thyroiditis |
| Prior thyroid disease | Usually (Graves', TMNG) | No |
| Goiter | Often present | Usually absent |
| RAIU | Normal or elevated | Suppressed |
| Color Doppler | Increased flow | Decreased flow |
| IL-6 | Normal | Elevated |
| Treatment | Thionamides ± perchlorate | Glucocorticoids |
| Course | Persistent if amiodarone continued | Self-limited |

*Mixed/Indeterminate Type:*
- Common in practice
- Treat with both thionamides + steroids
- Thyroidectomy if uncontrolled

**Subclinical Hyperthyroidism:**

*Definition:* Suppressed TSH, normal T4/T3

*Risk Stratification:*
| TSH Level | Risk Category | Considerations |
|-----------|---------------|----------------|
| 0.1-0.4 mU/L | Grade 1 (mild) | Monitor, treat if symptomatic or high-risk |
| <0.1 mU/L | Grade 2 (severe) | Higher risk; treatment usually recommended |

*Adverse Outcomes:*
- Atrial fibrillation (3x risk if TSH <0.1)
- Osteoporosis (postmenopausal women)
- Cardiovascular mortality (Grade 2)
- Cognitive decline (elderly)

**Pregnancy Considerations:**

*Physiological Changes:*
- hCG stimulates TSHR → physiological suppression of TSH in 1st trimester
- Total T4 elevated (TBG increase); Free T4 may be mildly elevated

*Gestational Thyrotoxicosis:*
- hCG-mediated, often with hyperemesis
- Self-limited; rarely needs treatment
- Differentiate from Graves' (check TRAb)

*Graves' in Pregnancy:*
- PTU in first trimester (MMI teratogenicity: aplasia cutis, choanal atresia)
- MMI in second/third trimester
- Maintain mild hyperthyroidism preferable to hypothyroidism
- Monitor TRAb (crosses placenta → fetal/neonatal thyrotoxicosis)

**Thyroid Storm - Pathophysiology:**

*Triggering Factors:*
- Infection, surgery, trauma, iodine load, RAI, DKA, MI, childbirth
- Discontinuation of ATD

*Mechanisms of Decompensation:*
- Catecholamine hypersensitivity (increased β-receptors)
- Impaired hormone binding → increased free T4
- Peripheral T4→T3 conversion
- Impaired glucocorticoid clearance → relative insufficiency

*Burch-Wartofsky Score:*
| Parameter | Points |
|-----------|--------|
| Temperature | 5-30 (based on degrees) |
| CNS effects | 10-30 (based on severity) |
| GI dysfunction | 10-20 |
| Heart rate | 5-25 |
| CHF | 5-20 |
| AF | 10 |
Score >45: Highly suggestive; 25-44: Impending storm

**Long-term Complications:**

*Cardiovascular:*
- Atrial fibrillation (15% in overt hyperthyroidism)
- High-output heart failure
- Pulmonary hypertension
- May be partially irreversible if prolonged

*Bone:*
- Accelerated remodeling → bone loss
- Increased fracture risk
- Partially reversible with treatment`,
      keyTerms: [
        { term: 'Jod-Basedow effect', definition: 'Iodine-induced hyperthyroidism in patients with underlying nodular disease' },
        { term: 'gestational thyrotoxicosis', definition: 'Transient hyperthyroidism from hCG stimulation; associated with hyperemesis gravidarum' },
        { term: 'Burch-Wartofsky score', definition: 'Clinical scoring system to assess likelihood of thyroid storm' },
        { term: 'aplasia cutis', definition: 'Congenital skin defect; associated with first-trimester methimazole exposure' },
        { term: 'TRAb', definition: 'TSH receptor antibodies; includes stimulating (TSI), blocking, and neutral antibodies' },
        { term: 'perchlorate', definition: 'Competitive inhibitor of iodide uptake; used with thionamides in Type 1 AIT' },
      ],
      clinicalNotes: 'Key management pearls: (1) Always differentiate high-uptake from low-uptake causes - treatment differs fundamentally; (2) In amiodarone thyrotoxicosis, consider thyroidectomy early if cardiac status unstable; (3) Subclinical hyperthyroidism warrants treatment if TSH <0.1 mU/L, elderly, cardiac disease, or osteoporosis; (4) Graves\' ophthalmopathy requires smoking cessation as critical intervention; teprotumumab is transformative for moderate-severe disease.',
    },
    5: {
      level: 5,
      summary: 'Hyperthyroidism pathogenesis involves complex TSHR signaling, autoimmune dysregulation, and genetic-environmental interactions. Emerging therapies target specific disease mechanisms including IGF-1R for ophthalmopathy and novel immunomodulatory approaches. Precision medicine may guide treatment selection.',
      explanation: `**Advanced TSHR Biology:**

*Receptor Structure-Function:*
- Large extracellular domain (leucine-rich repeats)
- Seven transmembrane segments
- Constitutive activity (even without ligand)
- Post-translational cleavage → A (extracellular) and B (transmembrane) subunits

*Antibody Epitopes:*
- Multiple epitopes on TSHR
- Stimulating vs blocking depends on binding site
- Neutral antibodies may affect receptor turnover
- Epitope mapping may predict disease course

*Signal Transduction Details:*
| Pathway | Effector | Effect |
|---------|----------|--------|
| Gsα-cAMP-PKA | CREB, thyroglobulin promoter | Hormone synthesis |
| Gq-PLC-PKC | Cell proliferation | Growth |
| PI3K-AKT | mTOR | Survival, growth |
| β-arrestin | Receptor internalization | Signal modulation |

**Graves' Ophthalmopathy - Molecular Mechanisms:**

*Autoimmune Target:*
- TSHR on orbital fibroblasts (confirmed)
- IGF-1R crosslinking (physical complex with TSHR)
- Possible shared autoantigens

*Orbital Changes:*
- Fibroblast activation → hyaluronan synthesis
- Adipogenesis (PPARγ-mediated)
- Inflammatory cytokines (IL-6, IL-8, TNF-α)
- Lymphocyte infiltration

*IGF-1R Pathway:*
- IGF-1R overexpression on orbital fibroblasts
- TSHR-IGF-1R physical interaction amplifies signaling
- Teprotumumab blocks IGF-1R → reduces inflammation and expansion

**Teprotumumab - Detailed:**

*Mechanism:*
- Fully human anti-IGF-1R monoclonal antibody
- Blocks IGF-1 binding
- Induces receptor internalization/degradation
- Reduces hyaluronan production and adipogenesis

*Clinical Results:*
- OPTIC trial: 83% responders (proptosis reduction)
- Rapid improvement (weeks)
- Diplopia improvement
- Potential disease modification (durability under study)

*Considerations:*
- Hyperglycemia (insulin sensitivity decreased)
- Hearing impairment (rare but significant)
- Inflammatory bowel disease exacerbation
- High cost

**Immunotherapy Approaches:**

*Current and Emerging:*
| Agent | Target | Status |
|-------|--------|--------|
| Teprotumumab | IGF-1R | FDA-approved (ophthalmopathy) |
| Rituximab | CD20 (B cells) | Off-label; mixed results |
| Tocilizumab | IL-6R | Case reports |
| B cell depletion | BAFF | Early studies |
| TSHR antagonists | TSHR | Preclinical |
| Peptide immunotherapy | TSHR tolerance | Preclinical |
| Small molecule TSHR ligands | TSHR | Development |

*Antigen-Specific Tolerance:*
- TSHR peptides to induce tolerance
- ATX-GD-59: Phase 1 trial completed
- Goal: Reset immune system without immunosuppression

**Genetic Insights and Precision Medicine:**

*Pharmacogenomics:*
| Gene | Drug | Impact |
|------|------|--------|
| HLA-B*38:02 | Methimazole | Agranulocytosis risk (Asian) |
| HLA-DRB1*07:01 | PTU | Hepatotoxicity risk |
| PTPN22 | ATDs | May predict remission |

*Predicting Treatment Response:*
- TRAb levels at diagnosis and during treatment
- Lower TRAb → higher remission rate
- Imaging biomarkers for RAI success
- Genetic scores under development

**Thyroid Eye Disease - Staging and Management:**

*EUGOGO Classification:*
1. Sight-threatening: DON, corneal breakdown → Emergency
2. Moderate-to-severe: Significant impact, active → Immunosuppression
3. Mild: Self-limited → Supportive care

*Treatment Algorithm (Active Disease):*
1. Mild: Selenium, lubricants, smoking cessation
2. Moderate-severe: IV methylprednisolone 500mg weekly x6, then 250mg x6
   - Alternative: Teprotumumab (more effective, costly)
3. Sight-threatening: High-dose IV steroids + orbital decompression

*Novel Targets:*
- Orbital fibroblast signaling
- Hyaluronan synthesis inhibitors
- Adipogenesis inhibitors
- Targeted radiotherapy

**Fetal and Neonatal Thyrotoxicosis:**

*Pathophysiology:*
- Maternal TRAb crosses placenta
- Fetal thyroid responsive from ~20 weeks
- Can cause fetal tachycardia, goiter, hydrops
- Neonatal thyrotoxicosis: Onset days 2-10 (after maternal ATD clears)

*Management:*
- Monitor TRAb in pregnancy (third trimester)
- TRAb >3x ULN → increased fetal risk
- Fetal monitoring (heart rate, goiter on ultrasound)
- Neonatal: ATD, beta-blocker, supportive care

**Future Directions:**

*Disease Modification:*
- Can we cure Graves' disease without destroying thyroid?
- TSHR-specific immunomodulation
- Checkpoint inhibitor-induced thyroiditis as model

*Orbital Disease:*
- IGF-1R pathway targeting refinement
- Combination approaches
- Prevention strategies

*Personalized Medicine:*
- Predicting ATD remission
- Selecting optimal definitive therapy
- Identifying ophthalmopathy risk

*Technology:*
- AI for imaging analysis (ophthalmopathy staging)
- Wearable monitoring (heart rate variability)
- Telemedicine for disease monitoring`,
      keyTerms: [
        { term: 'EUGOGO', definition: 'European Group on Graves\' Orbitopathy; developed classification and management guidelines' },
        { term: 'ATX-GD-59', definition: 'Investigational peptide immunotherapy designed to induce TSHR-specific tolerance' },
        { term: 'TSHR antagonists', definition: 'Small molecules that block TSHR activation; in preclinical development as potential ATD alternatives' },
        { term: 'DON', definition: 'Dysthyroid optic neuropathy; sight-threatening complication of Graves\' ophthalmopathy' },
        { term: 'OPTIC trial', definition: 'Pivotal clinical trial demonstrating teprotumumab efficacy in thyroid eye disease' },
        { term: 'BAFF', definition: 'B cell activating factor; target for autoimmune disease treatment' },
      ],
      clinicalNotes: 'The treatment landscape for Graves\' disease and ophthalmopathy is evolving rapidly. Teprotumumab represents a paradigm shift for moderate-severe thyroid eye disease. For Graves\' hyperthyroidism itself, disease-modifying approaches remain investigational. Clinical decision-making should incorporate individual risk factors for ATD complications, ophthalmopathy status, and patient preferences. The goal is moving toward precision medicine guided by genetics, biomarkers, and imaging.',
    },
  },

  media: [
    {
      id: 'hyperthyroid-causes-1',
      type: 'diagram',
      filename: 'hyperthyroidism-differential-diagnosis.svg',
      title: 'Hyperthyroidism Differential Diagnosis',
      description: 'Algorithm for distinguishing causes of thyrotoxicosis',
    },
    {
      id: 'graves-ophthalmopathy-1',
      type: 'diagram',
      filename: 'graves-ophthalmopathy-pathogenesis.svg',
      title: 'Graves\' Ophthalmopathy Pathogenesis',
      description: 'Immune mechanisms and orbital tissue changes',
    },
  ],

  citations: [
    {
      id: 'ross-ata-2016',
      type: 'article',
      title: 'American Thyroid Association Guidelines for Diagnosis and Management of Hyperthyroidism',
      authors: ['Ross DS', 'Burch HB', 'Cooper DS', 'et al.'],
      source: 'Thyroid 2016;26:1343-1421',
      license: 'Copyrighted',
    },
    {
      id: 'smith-tepro-2020',
      type: 'article',
      title: 'Teprotumumab for Thyroid-Associated Ophthalmopathy',
      authors: ['Douglas RS', 'Kahaly GJ', 'Patel A', 'et al.'],
      source: 'N Engl J Med 2020;382:341-352',
      license: 'Copyrighted',
    },
  ],

  crossReferences: [
    { targetId: 'endocrine-hypothyroidism', targetType: 'condition', relationship: 'related', label: 'Hypothyroidism' },
    { targetId: 'endocrine-thyroid-nodules', targetType: 'condition', relationship: 'see-also', label: 'Thyroid Nodules' },
    { targetId: 'endocrine-thyroid-storm', targetType: 'condition', relationship: 'see-also', label: 'Thyroid Storm' },
    { targetId: 'endocrine-thyroid-cancer', targetType: 'condition', relationship: 'see-also', label: 'Thyroid Cancer' },
  ],

  tags: {
    systems: ['endocrine'],
    topics: ['thyroid', 'autoimmune', 'Graves disease'],
    keywords: ['hyperthyroidism', 'Graves', 'thyrotoxicosis', 'TSI', 'methimazole', 'radioactive iodine'],
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
