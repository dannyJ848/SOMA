/**
 * Pheochromocytoma - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const pheochromocytoma: EducationalContent = {
  id: 'condition-pheochromocytoma',
  type: 'condition',
  name: 'Pheochromocytoma',
  nameEs: 'Feocromocitoma',
  alternateNames: ['Pheo', 'Adrenal Paraganglioma', 'Chromaffin Cell Tumor'],
  hpoId: 'HP:0000830',

  levels: {
    1: {
      level: 1,
      summary: 'Pheochromocytoma is a rare tumor that releases hormones causing episodes of high blood pressure, fast heartbeat, and severe headaches.',
      explanation: `Pheochromocytoma is a rare tumor that usually develops in the adrenal glands on top of your kidneys. These tumors produce hormones that cause your body to have "fight or flight" reactions all the time.

**What happens:**
- Tumor releases adrenaline and similar hormones
- Causes sudden spikes in blood pressure
- Triggers stress response symptoms

**Classic symptoms (spells or attacks):**
- Severe headaches
- Heavy/fast heartbeat (palpitations)
- Excessive sweating
- High blood pressure
- Feeling anxious or panicked

**Other symptoms:**
- Trembling
- Chest pain
- Shortness of breath
- Nausea
- Pale skin

**Diagnosis:**
- Urine tests for hormone breakdown products
- Blood tests for specific hormones
- CT or MRI scans to find the tumor

**Treatment:**
- Medications to control blood pressure
- Surgery to remove the tumor
- Careful preparation before surgery is crucial

**Remember:**
- Rare but curable if found
- Can be dangerous if not treated
- Most are benign (not cancer) but can still cause problems`,
      keyTerms: [
        { term: 'adrenaline', definition: 'A hormone that prepares your body for action during stress' },
        { term: 'palpitations', definition: 'Awareness of your heart beating, often feeling fast or irregular' },
        { term: 'spells', definition: 'Sudden episodes of symptoms caused by hormone release from the tumor' },
      ],
      analogies: [
        'Pheochromocytoma is like having a fire alarm that goes off randomly—your body reacts as if there is an emergency when there is not.',
      ],
      examples: [
        'A person might have sudden attacks of headache, sweating, and racing heart that happen without warning and last from minutes to hours.',
      ],
    },
    2: {
      level: 2,
      summary: 'Pheochromocytoma is a catecholamine-secreting tumor presenting with paroxysmal hypertension, diagnosed by elevated metanephrines, and treated with alpha-blockade followed by surgical resection.',
      explanation: `## Epidemiology

- Incidence: 2-8 per million per year
- Peak age: 30-50 years
- 10% are bilateral
- 10% are extra-adrenal (paraganglioma)
- 10% are malignant
- 10% occur in children
- 10% are familial

## Clinical Presentation

**Classic triad (50% of patients):**
- Headache
- Sweating
- Tachycardia

**Paroxysmal hypertension:**
- Sudden BP elevations (>180/120)
- May be sustained in 50%
- Orthostatic hypotension (volume depletion)

**Other manifestations:**
- Anxiety, panic attack symptoms
- Hyperglycemia (catecholamines)
- Cardiomyopathy (catecholamine-induced)
- "Spells" lasting minutes to hours

**Triggers:**
- Exercise, abdominal pressure
- Certain medications (beta-blockers, anesthetics)
- Foods high in tyramine
- Stress, procedures

## Diagnosis

**First-line: Plasma free metanephrines**
- High sensitivity
- Draw supine after rest
- Affected by some medications

**Second-line: 24-hour urine metanephrines**
- Fractionated metanephrines
- High specificity
- Collect during symptomatic period

**Localization:**
- CT abdomen (adrenal)
- MRI for extra-adrenal/vascular involvement
- \`\`123\`\`I-MIBG scintigraphy for metastatic disease

## Treatment Principles

**Preoperative preparation (ESSENTIAL):**
- Alpha-blockade first (phenoxybenzamine or doxazosin)
- Volume expansion (high sodium diet)
- Beta-blockade ONLY AFTER alpha-blockade
- 7-14 days of preparation

**Surgery:**
- Laparoscopic adrenalectomy
- Intraoperative hemodynamic monitoring
- IV nitroprusside or phentolamine for BP spikes`,
      keyTerms: [
        { term: 'catecholamines', definition: 'Hormones produced by the tumor: epinephrine, norepinephrine, dopamine' },
        { term: 'metanephrines', definition: 'Breakdown products of catecholamines measured for diagnosis' },
        { term: 'alpha-blockade', definition: 'Medications that block adrenaline effects, essential before surgery' },
      ],
    },
    3: {
      level: 3,
      summary: 'Pheochromocytoma management requires understanding catecholamine metabolism, proper alpha-blockade with phenoxybenzamine or selective agents, preoperative volume expansion, careful anesthetic planning, and long-term surveillance for recurrence.',
      explanation: `## Catecholamine Physiology

**Synthesis pathway:**
Tyrosine → DOPA → Dopamine → Norepinephrine → Epinephrine

**Metabolism:**
- MAO and COMT enzymes
- Metanephrines (O-methylated derivatives)
- VMA (final breakdown product)

**Clinical significance:**
- Epinephrine-secreting: More palpitations, sweating
- Norepinephrine-secreting: More severe hypertension

## Preoperative Alpha-Blockade

**Phenoxybenzamine (non-selective, irreversible):**
- Long-acting (24-48 hours)
- Side effects: orthostasis, tachycardia, nasal congestion
- 10-20 mg BID, titrate to BP control
- Goal: BP <160/90 sitting, SBP >90 standing

**Doxazosin (selective alpha-1):**
- Shorter-acting
- Fewer side effects
- 1-2 mg daily, titrate

**Volume expansion:**
- High sodium diet
- IV fluids during blockade
- Prevent post-op hypotension

**Beta-blockade:**
- ONLY AFTER adequate alpha-blockade
- Controls reflex tachycardia
- Never give first (unopposed alpha stimulation!)

## Genetic Testing

**Who to test:**
- All patients (guidelines now recommend)
- Age <50
- Bilateral or extra-adrenal tumors
- Family history
- Malignant pheo

**Associated syndromes:**

| Syndrome | Gene | Features |
|----------|------|----------|
| MEN 2A | RET | MTC, hyperparathyroidism |
| VHL | VHL | Hemangioblastomas, RCC |
| NF1 | NF1 | Cafe au lait, neurofibromas |
| Familial paraganglioma | SDHx | Head/neck tumors |

## Intraoperative Management

**Anesthetic risks:**
- Hypertensive crisis with tumor manipulation
- Arrhythmias from catecholamines
- Hypotension after tumor removal

**Monitoring:**
- Arterial line
- Central venous access
- Rapid-acting vasodilators available
- Invasive hemodynamic monitoring

**Postoperative:**
- Hypotension common (volume depletion)
- Hypoglycemia risk (rebound hyperinsulinemia)
- Monitor in ICU for 24-48 hours`,
      keyTerms: [
        { term: 'MEN 2A', definition: 'Multiple endocrine neoplasia type 2A; RET mutation causing MTC, pheo, hyperparathyroidism' },
        { term: 'VHL', definition: 'von Hippel-Lindau syndrome; predisposes to pheochromocytoma and other tumors' },
        { term: 'orthostasis', definition: 'Symptoms (dizziness) from standing due to drop in blood pressure' },
      ],
      clinicalNotes: 'Never give beta-blockers before alpha-blockade—this can cause unopposed alpha-mediated vasoconstriction and hypertensive crisis.',
    },
    4: {
      level: 4,
      summary: 'Advanced pheochromocytoma care addresses metastatic disease management, variant interpretations of SDH mutations, differentiation from adrenocortical carcinoma, pregnancy management, and long-term follow-up strategies for recurrence surveillance.',
      explanation: `## Malignant Pheochromocytoma

**Diagnosis of malignancy:**
- Only diagnosed by metastasis (not histology)
- Common sites: Bone, liver, lung, lymph nodes
- 10-15% of cases

**Treatment:**
- Surgical debulking when possible
- \`\`131\`\`I-MIBG therapy
- Temozolomide-based chemotherapy
- Tyrosine kinase inhibitors (sunitinib)
- PRRT (Lu-177 DOTATATE)

**Prognosis:**
- 5-year survival: 50-75%
- SDHB mutations: Worse prognosis
- High Ki-67: Poor prognosis

## SDHx Mutations

**SDHB:**
- Highest malignant potential
- Extra-adrenal paragangliomas
- Aggressive clinical course
- Requires lifelong surveillance

**SDHD:**
- Head/neck paragangliomas
- Multifocal tumors
- Maternal imprinting (paternal transmission)

**SDHA, SDHC, SDHAF2:**
- Rare, variable phenotypes
- Associated with GIST (Carney triad)

## Pregnancy

**Risks:**
- Maternal: Hypertensive crisis, heart failure
- Fetal: Growth restriction, stillbirth
- Diagnosis challenging (similar to preeclampsia)

**Management:**
- Alpha-blockade throughout pregnancy
- Surgery in 2nd trimester if possible
- Vaginal delivery with epidural vs C-section
- Multidisciplinary approach essential

## Biochemical Cure

**Criteria:**
- Normal plasma metanephrines 2-4 weeks post-op
- Persistent elevation suggests:
  - Residual tumor
  - Metastatic disease
  - Incomplete resection

**Recurrence:**
- Can occur years later
- Lifelong annual biochemical testing
- Imaging if metanephrines rise

## Differential Diagnosis Considerations

**Adrenocortical carcinoma:**
- Also produces hormones
- Very large tumors
- Different biochemical profile
- Worse prognosis

**Paraganglioma vs pheochromocytoma:**
- Extra-adrenal vs adrenal origin
- Similar biochemistry
- SDH mutations more common in paraganglioma`,
      keyTerms: [
        { term: 'SDHB', definition: 'Succinate dehydrogenase subunit B; mutation associated with malignant pheochromocytoma' },
        { term: 'MIBG therapy', definition: 'Radioactive iodine treatment targeting catecholamine-producing tumors' },
        { term: 'PRRT', definition: 'Peptide receptor radionuclide therapy; targeted radiation for neuroendocrine tumors' },
      ],
      clinicalNotes: 'All patients should have genetic testing. SDHB mutations require more intensive surveillance due to high malignancy risk.',
    },
    5: {
      level: 5,
      summary: 'Contemporary pheochromocytoma practice incorporates comprehensive genetic testing with panel sequencing, advanced molecular imaging, personalized surgical approaches, and novel therapeutics for metastatic disease while addressing quality of life and psychological burden.',
      explanation: `## Precision Medicine

**Comprehensive genetic testing:**
- 30-40% have germline mutations
- Panel testing (RET, VHL, NF1, SDHx, MAX, TMEM127)
- Genetic counseling essential
- Cascade testing for family members

**Phenotype-genotype correlations:**

| Gene | Tumor Location | Malignancy Risk |
|------|----------------|-----------------|
| SDHB | Extra-adrenal | High |
| SDHD | Head/neck | Low-moderate |
| VHL | Adrenal | Low |
| RET | Adrenal | Low |
| NF1 | Adrenal | Low |

## Advanced Imaging

**\`\`68\`\`Ga-DOTATATE PET/CT:**
- Superior to \`\`123\`\`I-MIBG
- Higher sensitivity
- Lower radiation
- New first-line for localization

**\`\`18\`\`F-FDOPA PET/CT:**
- Useful for SDHx tumors
- Complementary to DOTATATE

**\`\`18\`\`F-FDG PET/CT:**
- Aggressive/metastatic tumors
- High SDHB expression

## Metastatic Disease Therapeutics

**Emerging options:**
- High-specific-activity \`\`131\`\`I-MIBG (Azedra)
- Pembrolizumab for MSI-high tumors
- HIF-2α inhibitors (belzutifan)
- Peptide receptor radionuclide therapy

**Clinical trials:**
- Combination therapies
- Novel radiopharmaceuticals
- Targeted molecular agents

## Surgical Advances

**Partial adrenalectomy:**
- For bilateral tumors
- Hereditary syndromes
- Cortical-sparing technique
- Preserves adrenal function

**Minimally invasive:**
- Laparoscopic standard
- Robotic for complex cases
- Reduced morbidity

## Quality of Life Considerations

**Chronic burden:**
- Blood pressure fluctuations
- Anxiety about spells
- Genetic disease implications
- Fear of recurrence

**Psychosocial support:**
- Mental health screening
- Support groups
- Family counseling
- Disability considerations

## Future Directions**

- Gene therapy for hereditary forms
- Liquid biopsy for recurrence
- Improved metastatic therapies
- Precision dosing of radiopharmaceuticals`,
      keyTerms: [
        { term: 'DOTATATE', definition: 'Somatostatin analog used for PET imaging and therapy of neuroendocrine tumors' },
        { term: 'high-specific-activity MIBG', definition: 'Concentrated radioactive MIBG for therapeutic use in metastatic pheo' },
        { term: 'HIF-2α', definition: 'Hypoxia-inducible factor; target in VHL-associated tumors' },
      ],
      clinicalNotes: '\`\`68\`\`Ga-DOTATATE PET/CT has largely replaced MIBG scanning for localization due to superior sensitivity and availability. All patients should be offered genetic testing regardless of family history.',
    },
  },

  media: [],
  citations: [
    {
      id: 'endocrine-pheo-2014',
      type: 'article',
      title: 'Pheochromocytoma and Paraganglioma: An Endocrine Society Clinical Practice Guideline',
      source: 'Journal of Clinical Endocrinology & Metabolism',
      authors: ['Lenders JW', 'Duh QY', 'Eisenhofer G', 'et al.'],
    },
    {
      id: 'esa-pheo-2022',
      type: 'article',
      title: 'Management of Pheochromocytoma and Paraganglioma: A European Society of Endocrinology Guideline',
      source: 'European Journal of Endocrinology',
    },
  ],
  crossReferences: [
    { targetId: 'condition-adrenal-insufficiency', targetType: 'condition', relationship: 'related', label: 'Adrenal Insufficiency' },
  ],
  tags: {
    systems: ['endocrine'],
    topics: ['endocrinology', 'surgery', 'oncology'],
    keywords: ['pheochromocytoma', 'catecholamines', 'paraganglioma', 'hypertension', 'MEN2'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'surgery'] },
  },
  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default pheochromocytoma;
