import { EducationalContent } from '../../../types';

export const uterineFibroidsContent: EducationalContent = {
  id: 'reproductive-uterine-fibroids',
  type: 'condition',
  name: 'Uterine Fibroids',
  alternateNames: ['Leiomyoma', 'Myoma', 'Fibromyoma', 'Uterine leiomyomata'],
  levels: {
    1: {
      level: 1,
      summary: 'Uterine fibroids are non-cancerous growths in the uterus that are very common. Many women have them without knowing it, but they can cause heavy periods and other symptoms.',
      explanation: `Uterine fibroids are benign (non-cancerous) tumors that grow in or on the uterus. They are extremely common - up to 80% of women will have them by age 50.

**Key Facts:**
- Fibroids are NOT cancer and rarely become cancer
- Many women have fibroids and never know it (no symptoms)
- They can range from tiny (size of a seed) to large (size of a grapefruit or bigger)
- They often shrink after menopause when hormone levels drop

**Common Symptoms (when they occur):**
- Heavy or prolonged menstrual bleeding
- Pelvic pressure or fullness
- Frequent urination (fibroid pressing on bladder)
- Constipation (fibroid pressing on bowel)
- Pain during periods or sex
- Enlarged abdomen
- Back or leg pain

**Who Gets Fibroids:**
- Can occur at any age during reproductive years
- More common in Black women
- Family history increases risk
- Being overweight increases risk

**When to See a Doctor:**
- Very heavy periods (soaking through protection, passing large clots)
- Pelvic pain that does not go away
- Difficulty getting pregnant
- Frequent urination that disrupts sleep

**Treatment Options:**
- Many fibroids need no treatment (watch and wait)
- Medications to control bleeding or shrink fibroids
- Minimally invasive procedures
- Surgery (myomectomy to remove fibroids, hysterectomy)
- Choice depends on symptoms and whether you want to have children`,
      keyTerms: [
        { term: 'Fibroid', definition: 'A non-cancerous growth made of muscle and tissue that develops in or on the uterus' },
        { term: 'Benign', definition: 'Not cancer; will not spread to other parts of the body' },
        { term: 'Myomectomy', definition: 'Surgery to remove fibroids while keeping the uterus' },
        { term: 'Hysterectomy', definition: 'Surgery to remove the uterus' },
      ],
      analogies: [
        'Fibroids are like knots in wood - they are made of the same material as the surrounding tissue but are denser and more tightly bundled',
        'Think of fibroids as unwanted houseguests - some are small and quiet, others take up a lot of space and cause problems',
      ],
      patientCounselingPoints: [
        'Fibroids are very common and not cancer',
        'Not all fibroids need treatment',
        'There are many treatment options available',
        'Fibroids often shrink after menopause',
      ],
    },
    2: {
      level: 2,
      summary: 'Uterine leiomyomas are benign smooth muscle tumors classified by location (submucosal, intramural, subserosal). Management depends on symptoms, size, location, and reproductive goals.',
      explanation: `Uterine fibroids (leiomyomas) are the most common pelvic tumors in women, with an estimated cumulative incidence of 70-80% by age 50.

**Classification by Location:**

| Type | Location | Clinical Impact |
|------|----------|-----------------|
| Submucosal | Projecting into uterine cavity | Most symptomatic for bleeding; affects fertility |
| Intramural | Within myometrium | Most common; heavy bleeding, bulk symptoms |
| Subserosal | On outer surface of uterus | Bulk symptoms (pressure); less bleeding |
| Pedunculated | Attached by stalk | Can twist (torsion); can be subserosal or submucosal |

**FIGO Classification (Types 0-8):**
- 0-2: Submucosal (degree of intramural extension)
- 3-4: Intramural
- 5-6: Subserosal (degree of intramural extension)
- 7: Pedunculated subserosal
- 8: Cervical, parasitic, or unusual locations

**Risk Factors:**
- Black race (3x more common, earlier onset, more severe)
- Family history
- Nulliparity
- Obesity
- Early menarche
- Vitamin D deficiency

**Protective Factors:**
- Parity (decreases risk)
- Smoking (paradoxically protective)
- Hormonal contraceptives (controversial, may be protective)

**Symptoms:**

*Heavy Menstrual Bleeding*
- Most common symptom
- Submucosal fibroids have greatest impact
- Can lead to iron-deficiency anemia

*Bulk/Pressure Symptoms*
- Pelvic pressure or fullness
- Urinary frequency (anterior fibroids)
- Constipation (posterior fibroids)
- Abdominal distension

*Pain*
- Dysmenorrhea
- Degeneration (red/carneous degeneration, especially in pregnancy)
- Torsion of pedunculated fibroid

*Reproductive*
- Subfertility (submucosal > intramural)
- Pregnancy complications (malpresentation, preterm labor, cesarean)

**Diagnosis:**

*Ultrasound*
- First-line imaging
- Transvaginal (TVS) for detail
- Saline infusion sonohysterography (SIS) to assess cavity

*MRI*
- Best for mapping multiple fibroids
- Pre-surgical planning
- Differentiating fibroid from adenomyosis or malignancy

**Treatment Options:**

*Expectant Management*
- Asymptomatic fibroids
- Near menopause (will shrink)

*Medical*
- Hormonal contraceptives (reduce bleeding)
- Tranexamic acid (for heavy bleeding)
- GnRH agonists (shrink fibroids; temporary; pre-surgical)
- GnRH antagonists (with add-back)
- Ulipristal acetate (not available US; liver safety concerns)

*Procedural*
- Uterine artery embolization (UAE)
- MRI-guided focused ultrasound (MRgFUS/HIFU)

*Surgical*
- Myomectomy (preserves uterus): Hysteroscopic, laparoscopic, or open
- Hysterectomy (definitive): Various routes`,
      keyTerms: [
        { term: 'Submucosal', definition: 'Fibroid location projecting into the uterine cavity; most affects bleeding and fertility' },
        { term: 'Intramural', definition: 'Fibroid within the muscle wall of the uterus; most common type' },
        { term: 'Subserosal', definition: 'Fibroid on the outer surface of the uterus; causes bulk symptoms' },
        { term: 'UAE', definition: 'Uterine artery embolization; minimally invasive procedure blocking blood supply to fibroids' },
        { term: 'Red degeneration', definition: 'Painful complication of fibroids in pregnancy when fibroid outgrows its blood supply' },
      ],
      examples: [
        'A woman with heavy periods and a fibroid distorting the uterine cavity has a submucosal fibroid and may benefit from hysteroscopic myomectomy',
        'A patient with a 10 cm fibroid causing urinary frequency has bulk symptoms and may consider UAE or surgical management',
      ],
    },
    3: {
      level: 3,
      summary: 'Leiomyomas arise from clonal smooth muscle cell proliferation driven by estrogen and progesterone. Genetic subtypes (MED12, HMGA2) have different characteristics. Treatment selection considers fertility preservation, symptom profile, and procedural outcomes.',
      explanation: `**Pathophysiology:**

**Clonal Origin**
- Each fibroid arises from single smooth muscle cell
- Monoclonal proliferation
- Multiple fibroids in same uterus are independent clones

**Hormonal Dependence**
- Estrogen and progesterone promote growth
- Fibroids express ER and PR
- Enlarge during pregnancy, with hormone therapy
- Regress after menopause

**Extracellular Matrix**
- Abundant collagen and proteoglycans
- Contributes to firm, whorled texture
- ECM alterations important in pathogenesis

**Genetic Subtypes:**

| Mutation | Frequency | Characteristics |
|----------|-----------|-----------------|
| MED12 | 70% | Typical fibroids, smaller |
| HMGA2 rearrangement | 10% | Larger fibroids |
| Fumarate hydratase (FH) | Rare | Associated with HLRCC syndrome |
| Other (PCOLCE2, COL4A5) | Variable | Various phenotypes |

**Growth Factors**
- TGF-β: Promotes ECM deposition
- VEGF: Angiogenesis
- bFGF: Proliferation
- IGF: Growth stimulation

**Heavy Menstrual Bleeding Mechanisms:**
- Increased endometrial surface area
- Abnormal vasculature (venule ectasia)
- Increased expression of VEGF
- Altered prostaglandin and vasoconstriction
- Submucosal fibroids disrupt cavity hemostasis

**Fertility Impact:**

*Evidence-Based Effects*
| Location | Effect on Fertility | Effect on IVF |
|----------|--------------------| --------------|
| Submucosal | Clear negative; treat | Clear negative |
| Intramural (no cavity distortion) | Controversial | Possibly negative if >4 cm |
| Subserosal | No effect | No effect |

**Advanced Imaging:**

*MRI Features*
- T1: Isointense to myometrium
- T2: Hypointense (darker than myometrium)
- Degeneration: Variable signal
- Can assess FIGO type and surgical planning

*Sonohysterography*
- Saline distends cavity
- Shows submucosal component
- Guides hysteroscopic approach

**Medical Management Details:**

*GnRH Agonists*
- Create hypoestrogenic state
- Shrink fibroids 30-50%
- Limit to 6 months (bone loss)
- Rebound growth after stopping
- Use: Pre-surgical to shrink, improve anemia

*GnRH Antagonists (Elagolix, Relugolix)*
- Oral administration
- Partial estrogen suppression (dose-dependent)
- With add-back: Can use longer term
- FDA-approved for fibroid-related heavy bleeding

*Tranexamic Acid*
- Antifibrinolytic
- Reduces heavy menstrual bleeding
- Does not shrink fibroids
- Taken during menses only

**Procedural Options:**

*Uterine Artery Embolization*
- Interventional radiology procedure
- Particles occlude uterine arteries
- 85-90% improvement in symptoms
- May affect fertility (controversial)
- Avoid if future pregnancy desired (relative)

*MRgFUS (Magnetic Resonance-guided Focused Ultrasound)*
- Thermal ablation without incision
- Focused ultrasound waves heat tissue
- MRI guidance for precision
- Limited availability, strict criteria
- Fertility data limited

*Radiofrequency Ablation*
- Laparoscopic or transcervical approach
- Heats and destroys fibroid tissue
- Sonata (transcervical) system
- Acessa (laparoscopic) system`,
      keyTerms: [
        { term: 'MED12', definition: 'Most commonly mutated gene in fibroids; encodes mediator complex subunit affecting transcription' },
        { term: 'HMGA2', definition: 'High mobility group protein gene; rearrangements associated with larger fibroids' },
        { term: 'HLRCC', definition: 'Hereditary leiomyomatosis and renal cell cancer; FH mutations; screen for kidney cancer' },
        { term: 'MRgFUS', definition: 'Magnetic resonance-guided focused ultrasound; non-invasive thermal ablation' },
        { term: 'Sonohysterography', definition: 'Saline-infused ultrasound that better visualizes the uterine cavity for submucosal fibroids' },
      ],
      examples: [
        'A fibroid that is T2-hypointense with clearly defined margins on MRI is typical for benign leiomyoma',
        'Women with FH mutations (HLRCC syndrome) require surveillance for renal cell carcinoma and often have multiple fibroids and cutaneous leiomyomas',
      ],
    },
    4: {
      level: 4,
      summary: 'Leiomyoma molecular biology reveals distinct pathways for different genetic subtypes, with MED12 mutations causing transcriptional dysregulation. Leiomyosarcoma differentiation, though rare, requires consideration. Emerging therapies target specific molecular pathways.',
      explanation: `**Molecular Pathways by Genetic Subtype:**

**MED12 Mutations**
- Found in 70% of fibroids
- Exon 2 hotspot (codons 36-44)
- MED12 is part of Mediator complex (transcriptional coactivator)
- Mutations alter Cyclin C interaction
- Leads to dysregulated gene expression
- Associated with typical fibroid phenotype

**HMGA2 Rearrangements**
- High mobility group AT-hook 2
- Chromosomal rearrangements (12q14-15)
- Leads to overexpression
- Associated with larger fibroids
- HMGA2 regulates proliferation, stem cell renewal

**Fumarate Hydratase (FH) Deficiency**
- Krebs cycle enzyme
- Germline mutation: HLRCC syndrome
- Accumulation of fumarate
- HIF-1α stabilization (pseudohypoxia)
- Screening for RCC essential
- Fibroids may have distinct histology

**Other Pathways**
- Wnt/β-catenin signaling dysregulation
- TGF-β and Smad signaling
- PI3K/AKT/mTOR pathway
- Aberrant stem cell renewal

**Estrogen and Progesterone Mechanisms:**

*Estrogen*
- Promotes proliferation
- Upregulates growth factors (IGF-1, EGF)
- Fibroids express higher ER levels than myometrium

*Progesterone*
- Critical for fibroid growth (not just permissive)
- PR-B mediates proliferation
- Antiprogestins (mifepristone, ulipristal) effective
- BCL2 upregulation (anti-apoptotic)

*Aromatase Expression*
- Local estrogen production
- Target for aromatase inhibitors
- Similar to endometriosis

**Leiomyoma vs. Leiomyosarcoma:**

*Leiomyosarcoma (LMS)*
- Rare (<1% of uterine smooth muscle tumors)
- NOT thought to arise from leiomyomas (separate entity)
- De novo malignancy

*Differentiating Features*
| Feature | Leiomyoma | STUMP | Leiomyosarcoma |
|---------|-----------|-------|----------------|
| Mitoses | <5/10 HPF | 5-10/10 HPF | ≥10/10 HPF |
| Necrosis | Absent (hyaline OK) | May be present | Tumor cell necrosis |
| Atypia | None | Moderate | Severe/diffuse |
| Growth | Usually stable | Variable | Often rapid |

*STUMP (Smooth Muscle Tumor of Uncertain Malignant Potential)*
- Does not meet all LMS criteria
- Requires careful follow-up
- Risk stratification challenging

**Morcellation Controversy**
- Power morcellation disperses tissue
- If occult LMS, may worsen prognosis (upstaging)
- FDA black box warning
- Contained morcellation systems developed
- Careful patient selection required

**Emerging Therapies:**

*SERMs*
- Selective estrogen receptor modulators
- Mixed agonist/antagonist effects
- Investigational for fibroids

*Progesterone Receptor Modulators*
- Ulipristal acetate: Highly effective but liver toxicity concerns
- Vilaprisan: In development
- Mifepristone: Some efficacy

*Novel Targets*
- TGF-β inhibitors (anti-fibrotic)
- HDAC inhibitors (epigenetic)
- Vitamin D analogues
- Green tea extract (EGCG): Mixed evidence

*Gene Therapy (Investigational)*
- Targeting MED12 pathway
- Suicide gene approaches`,
      keyTerms: [
        { term: 'STUMP', definition: 'Smooth muscle tumor of uncertain malignant potential; borderline histology requiring follow-up' },
        { term: 'Power morcellation', definition: 'Technique to remove large tissue through small incisions; concerns about spreading occult malignancy' },
        { term: 'Fumarate hydratase', definition: 'Krebs cycle enzyme; germline mutations cause HLRCC syndrome with fibroids and renal cancer risk' },
        { term: 'Mediator complex', definition: 'Multiprotein complex regulating transcription; MED12 is a subunit commonly mutated in fibroids' },
        { term: 'Ulipristal acetate', definition: 'Selective progesterone receptor modulator effective for fibroids; hepatotoxicity limits use' },
      ],
      clinicalNotes: 'The risk of occult leiomyosarcoma in presumed fibroids is ~1:350-500 (higher in older women). Pre-operative differentiation is difficult, though rapid growth, postmenopausal occurrence, and certain MRI features (heterogeneous T2 signal, ill-defined borders) raise concern. Contained morcellation reduces but may not eliminate dissemination risk.',
    },
    5: {
      level: 5,
      summary: 'Evidence-based fibroid management integrates clinical assessment, advanced imaging for surgical planning, individualized treatment selection based on symptoms and reproductive goals, and emerging uterus-preserving interventional options.',
      explanation: `**Clinical Decision-Making Framework:**

**Assessment Components**
- Symptom type and severity (bleeding vs. bulk)
- Impact on quality of life
- Reproductive goals
- Fibroid characteristics (size, number, location)
- Patient preferences

**When to Treat**
- Symptomatic fibroids affecting quality of life
- Infertility with submucosal fibroid
- Large fibroids causing compression symptoms
- Rapid growth concerning for malignancy

**Treatment Selection by Clinical Scenario:**

**Heavy Menstrual Bleeding**

| Option | Efficacy | Fertility | Invasiveness |
|--------|----------|-----------|--------------|
| LNG-IUD | 80-90% reduction | Preserved | Minimal |
| Tranexamic acid | 40-50% reduction | Preserved | Medication |
| GnRH antagonist + add-back | 50-70% reduction | Preserved | Medication |
| Hysteroscopic myomectomy | High (submucosal) | Preserved | Moderate |
| UAE | 85-90% satisfaction | Controversial | Moderate |
| Endometrial ablation | Variable | Lost | Moderate |
| Hysterectomy | Definitive | Lost | Major surgery |

**Bulk Symptoms**

| Option | Fibroid Shrinkage | Duration | Notes |
|--------|-------------------|----------|-------|
| GnRH agonist | 30-50% | Temporary | Pre-surgical use |
| UAE | 40-60% | Durable | 15-20% reintervention |
| MRgFUS | Variable | Limited data | Strict criteria |
| RF ablation | Variable | Emerging data | Newer techniques |
| Myomectomy | Complete removal | Durable | 15-27% recurrence |
| Hysterectomy | Complete | Permanent | Definitive |

**Fertility Preservation**

*Submucosal Fibroids*
- Hysteroscopic myomectomy strongly recommended
- Improves pregnancy rates significantly

*Intramural Fibroids*
- Controversial; individualized decision
- Consider removal if >4 cm or cavity distortion
- Discuss surgical risks (adhesions, uterine rupture)

*Subserosal Fibroids*
- Generally no fertility benefit to removal
- Remove if symptomatic

**Pre-operative Optimization:**

**GnRH Agonist Pre-treatment**
- 2-3 months before surgery
- Shrinks fibroid 30-50%
- Improves hemoglobin
- May make hysteroscopic removal easier
- May make laparoscopic dissection harder (loss of plane)

**Iron Supplementation**
- Correct anemia before surgery
- IV iron for severe anemia
- Tranexamic acid to reduce ongoing loss

**Surgical Approach Selection:**

**Myomectomy Route**

| Route | Best For | Limitations |
|-------|----------|-------------|
| Hysteroscopic | Submucosal (types 0-2) | Can't address intramural/subserosal |
| Laparoscopic | <4 fibroids, <10 cm | Technically demanding; morcellation concerns |
| Robotic | Complex cases | Cost, availability |
| Open (laparotomy) | Multiple large fibroids, rapid removal | Longer recovery |

**Hysterectomy Route**
- Vaginal: Preferred if feasible
- Laparoscopic/robotic: Most common for fibroids
- Abdominal: Very large uteri, adhesions

**Post-Treatment Considerations:**

**Recurrence After Myomectomy**
- 15-27% cumulative risk at 5 years
- Higher with multiple fibroids
- New fibroids vs. growth of small remnants
- May need repeat surgery or hysterectomy

**Pregnancy After Myomectomy**
- Uterine rupture risk: 0.5-1% (higher with deep intramural entry)
- C-section often recommended
- Avoid pregnancy for 3-6 months post-op
- Counsel about timing

**UAE and Fertility**
- Ovarian reserve may be affected
- Pregnancy outcomes mixed
- Generally avoid if fertility desired
- May consider if myomectomy not feasible

**Special Populations:**

**Perimenopause**
- Consider waiting if near menopause
- Symptoms will improve with menopause
- GnRH antagonist may bridge to menopause

**Pregnancy**
- Most fibroids stable or grow modestly
- Red degeneration: Supportive care
- Myomectomy rarely indicated
- Monitor for complications

**Postmenopause**
- New/growing masses need evaluation for malignancy
- Stable fibroids can be observed
- HRT may cause growth`,
      keyTerms: [
        { term: 'FIGO classification', definition: 'Standardized fibroid classification (types 0-8) based on location relative to uterine wall' },
        { term: 'Contained morcellation', definition: 'Tissue extraction within a bag to prevent dissemination; addresses morcellation safety concerns' },
        { term: 'Radiofrequency ablation', definition: 'Minimally invasive thermal destruction of fibroids via laparoscopic or transcervical approach' },
        { term: 'LNG-IUD', definition: 'Levonorgestrel intrauterine device; effective for fibroid-related heavy bleeding' },
        { term: 'Fibroid recurrence', definition: 'Development of new or regrowth of residual fibroids after myomectomy; occurs in 15-27%' },
      ],
      clinicalNotes: 'ACOG and international guidelines recommend shared decision-making incorporating patient priorities. For women desiring fertility, myomectomy is preferred; UAE should generally be avoided despite some successful pregnancies reported. The LNG-IUD is highly effective for bleeding control even with fibroids (unless submucosal) and should be considered before surgical intervention. Pre-operative GnRH agonist treatment improves hemoglobin and may facilitate surgery but should be used judiciously as it can obscure surgical planes.',
    },
  },
  media: [],
  citations: [
    {
      id: 'ref-1',
      type: 'article',
      title: 'ACOG Practice Bulletin: Management of Symptomatic Uterine Leiomyomas',
      source: 'Obstetrics & Gynecology',
      authors: ['ACOG'],
      url: 'https://doi.org/10.1097/AOG.0000000000004900',
    },
    {
      id: 'ref-2',
      type: 'article',
      title: 'Uterine Leiomyomas - NEJM Review',
      source: 'New England Journal of Medicine',
      authors: ['Stewart, E.A.'],
      url: 'https://doi.org/10.1056/NEJMcp1411029',
    },
  ],
  crossReferences: [
    { targetId: 'reproductive-menstrual-cycle', targetType: 'process', relationship: 'related', label: 'Menstrual Cycle' },
    { targetId: 'reproductive-fertility', targetType: 'process', relationship: 'related', label: 'Fertility' },
    { targetId: 'reproductive-endometriosis', targetType: 'condition', relationship: 'related', label: 'Endometriosis' },
  ],
  tags: {
    systems: ['reproductive'],
    topics: ['pathology', 'gynecology', 'surgery'],
    keywords: ['fibroids', 'leiomyoma', 'myomectomy', 'heavy menstrual bleeding', 'UAE', 'hysterectomy'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['obstetrics-gynecology', 'surgery'],
    },
  },
  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
