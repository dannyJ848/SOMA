import { EducationalContent } from '../../types';

export const ankylosingSpondylitisContent: EducationalContent = {
  id: 'condition-ankylosing-spondylitis',
  type: 'condition',
  name: 'Ankylosing Spondylitis',
  alternateNames: ['AS', 'Axial spondyloarthritis', 'Radiographic axial SpA', 'Marie-Strumpell disease', 'Bechterew disease'],
  hpoId: 'HP:0008763',

  levels: {
    1: {
      level: 1,
      summary: 'Ankylosing spondylitis is a type of arthritis that mainly affects your spine, causing pain, stiffness, and over time can make the bones of your spine fuse together.',
      explanation: `Ankylosing spondylitis (AS) is a long-term condition where your immune system causes inflammation in your spine and the joints where your spine meets your pelvis.

**What happens:**
- Inflammation occurs where ligaments and tendons attach to bone
- This happens mostly in your spine and pelvis
- Over time, new bone grows where it shouldn't
- In severe cases, the spine can become stiff like a bamboo rod

**Main symptoms:**
- Back pain and stiffness (worse in the morning or after rest)
- Pain that improves with movement and exercise
- Symptoms often start before age 45
- Stiffness and pain that gradually spread up the spine
- Reduced flexibility in the spine

**Other areas that may be affected:**
- Hips and shoulders
- Heels (pain at the back)
- Ribs (making deep breathing difficult)
- Eyes (inflammation called uveitis)

**Who gets AS:**
- Usually starts in late teens to early 30s
- More common in men (though women also get it)
- Strongly linked to a gene called HLA-B27
- Can run in families

**Treatment focuses on:**
- Exercise (very important! - maintains flexibility)
- Physical therapy
- Anti-inflammatory medications
- Special biologic medicines for severe cases
- Good posture habits

**The good news:**
With proper treatment and regular exercise, most people with AS can lead active, full lives. Early treatment helps prevent the spine from becoming stiff.`,
      keyTerms: [
        { term: 'ankylosing', definition: 'Stiffening and fusion of a joint, from the Greek word for "bent"', pronunciation: 'ANG-kih-loh-sing' },
        { term: 'spondylitis', definition: 'Inflammation of the spine', pronunciation: 'spon-dih-LY-tis' },
        { term: 'sacroiliac joints', definition: 'The joints where your spine connects to your pelvis' },
        { term: 'HLA-B27', definition: 'A gene that makes you more likely to develop AS if you have it' },
      ],
      analogies: [
        'In AS, the spine can become like a bamboo rod - stiff segments fused together.',
        'Think of AS like inflammation creating "cement" between the bones of the spine, slowly reducing movement.',
      ],
      examples: [
        'A young man in his 20s with months of low back pain that is worse in the morning but gets better with exercise',
        'Someone whose back has become increasingly stiff over years and now cannot bend forward easily',
        'A person with AS who also develops red, painful eyes (uveitis)',
      ],
    },
    2: {
      level: 2,
      summary: 'Ankylosing spondylitis is a chronic inflammatory disease primarily affecting the axial skeleton, characterized by sacroiliitis and progressive spinal fusion, strongly associated with HLA-B27.',
      explanation: `Ankylosing spondylitis is the prototype of the spondyloarthritis (SpA) family of diseases. It affects approximately 0.1-0.5% of the population and is now classified under the broader term "axial spondyloarthritis."

**Pathophysiology:**
- Inflammation at entheses (where tendons/ligaments attach to bone)
- Starts at sacroiliac joints and progresses up spine
- Chronic inflammation leads to new bone formation
- Eventually causes spinal fusion (ankylosis)

**Clinical Features:**

1. **Axial symptoms:**
   - Inflammatory back pain (cardinal feature)
   - Morning stiffness >30 minutes
   - Improves with exercise, worsens with rest
   - Night pain, awakening in second half of night
   - Insidious onset, duration >3 months
   - Age of onset typically <45 years
   - Alternating buttock pain (sacroiliitis)

2. **Peripheral manifestations:**
   - Asymmetric oligoarthritis (lower limbs)
   - Enthesitis (Achilles, plantar fascia)
   - Dactylitis ("sausage digits")
   - Hip and shoulder involvement (root joints)

3. **Extra-articular manifestations:**
   - Acute anterior uveitis (25-40%)
   - Inflammatory bowel disease association
   - Psoriasis association
   - Aortitis, conduction abnormalities (rare)
   - Pulmonary fibrosis (apical)

**Disease Progression:**
- Early: Sacroiliitis
- Progressive: Lumbar spine involvement
- Late: Thoracic and cervical involvement
- End-stage: "Bamboo spine" (complete fusion)

**Diagnosis:**

*Modified New York Criteria (established disease):*
- Clinical: Low back pain >3 months, improved with exercise
- Clinical: Limited lumbar motion
- Clinical: Limited chest expansion
- Radiographic: Sacroiliitis grade ≥2 bilateral or grade 3-4 unilateral

*ASAS Criteria (axial SpA):*
- Imaging arm: MRI sacroiliitis + ≥1 SpA feature
- Clinical arm: HLA-B27 positive + ≥2 SpA features

**Laboratory:**
- HLA-B27 positive in 90-95%
- ESR, CRP often elevated (correlate with disease activity)
- No specific autoantibodies (RF and ANA negative)

**Imaging:**
- X-ray: Sacroiliitis, squaring of vertebrae, syndesmophytes
- MRI: Bone marrow edema (early sacroiliitis)
- "Bamboo spine": Complete ankylosis on X-ray

**Treatment:**

*First-line:*
- NSAIDs (continuous use may slow radiographic progression)
- Physical therapy and exercise (essential)
- Posture training
- Patient education

*Second-line (inadequate NSAID response):*
- TNF inhibitors (infliximab, adalimumab, etanercept, golimumab, certolizumab)
- IL-17 inhibitors (secukinumab, ixekizumab)
- JAK inhibitors (tofacitinib, upadacitinib)

*Note:* Conventional DMARDs (methotrexate, sulfasalazine) work for peripheral disease but NOT axial disease`,
      keyTerms: [
        { term: 'enthesitis', definition: 'Inflammation at the site where tendons or ligaments insert into bone', pronunciation: 'en-thee-SY-tis' },
        { term: 'sacroiliitis', definition: 'Inflammation of the sacroiliac joints, hallmark of axial spondyloarthritis', pronunciation: 'say-kro-il-ee-EYE-tis' },
        { term: 'syndesmophyte', definition: 'Vertical bony outgrowth bridging vertebrae, characteristic of AS (differs from OA osteophytes)', pronunciation: 'sin-DEZ-moh-fite' },
        { term: 'bamboo spine', definition: 'Complete fusion of vertebrae giving appearance of bamboo on X-ray' },
        { term: 'inflammatory back pain', definition: 'Back pain worse with rest/morning, improves with exercise, onset <45, duration >3 months' },
      ],
      analogies: [
        'Syndesmophytes grow vertically like staples holding vertebrae together, unlike osteophytes that grow horizontally.',
        'The inflammation in AS acts like "welding" the spine segments together.',
      ],
    },
    3: {
      level: 3,
      summary: 'Ankylosing spondylitis is an HLA-B27-associated spondyloarthritis characterized by enthesitis-driven inflammation at the sacroiliac joints and spine, leading to pathologic new bone formation through endochondral ossification, managed with NSAIDs and biologic agents targeting TNF-alpha or IL-17A.',
      explanation: `AS is the prototype axial spondyloarthritis, representing one end of a disease spectrum that includes non-radiographic axial SpA.

**Immunogenetics:**

*HLA-B27:*
- Present in 90-95% of AS patients (vs. 8% general population)
- Over 150 subtypes; B*27:05 highest risk in most populations
- B*27:06, B*27:09 may be protective
- HLA-B27 positive individuals: ~5% develop AS

*Non-HLA Genetics:*
- ERAP1 (aminopeptidase affecting MHC class I)
- IL-23R pathway genes
- RUNX3, LTBR, CARD9

*Gene-Disease Interactions:*
- ERAP1 only affects risk in HLA-B27+ individuals
- Epistatic interaction suggests B27 presentation pathway critical

**Pathogenic Mechanisms (Hypotheses):**

1. **Arthritogenic Peptide Theory:**
   - B27 presents unique self-peptides
   - CD8+ T cell response to entheseal antigens
   - Some evidence for specific peptide responses

2. **Misfolding/UPR Theory:**
   - B27 heavy chain misfolding in ER
   - Unfolded protein response activation
   - IL-23/IL-17 production
   - Inflammation independent of peptide presentation

3. **Cell Surface B27 Abnormalities:**
   - B27 homodimer formation on cell surface
   - Recognition by innate immune receptors (KIR3DL2)
   - Th17 cell activation

**Pathophysiology:**

*Enthesitis (Central Feature):*
- Entheses are "stress concentrators"
- Mechanical stress triggers innate immune response
- IL-17, IL-22, IL-23 pathway activation
- Resident tissue macrophages, innate lymphoid cells
- TNF-alpha amplifies inflammation

*New Bone Formation:*
- Paradox: Inflammation followed by ossification
- Wnt/bone morphogenetic protein (BMP) signaling
- Resolution of inflammation with aberrant repair
- Syndesmophytes grow through endochondral ossification
- Dickkopf-1 (Wnt inhibitor) dysregulation

**Clinical Assessment:**

*Disease Activity:*
- BASDAI (Bath AS Disease Activity Index): Patient-reported
- ASDAS (AS Disease Activity Score): Combines clinical + CRP
  - Inactive: <1.3
  - Low: 1.3-2.1
  - High: 2.1-3.5
  - Very high: >3.5

*Functional Assessment:*
- BASFI (Bath AS Functional Index)
- Chest expansion measurement
- Schober test (lumbar flexion)
- Occiput-to-wall distance

*Structural Damage:*
- mSASSS (modified Stoke AS Spinal Score): X-ray scoring

**Imaging:**

*MRI (Gold Standard for Early Disease):*
- Active inflammation: Bone marrow edema on STIR/T2 fat-sat
- Location: Sacroiliac joints, vertebral corners
- Sensitivity for early sacroiliitis superior to X-ray

*Radiography:*
- Sacroiliitis: Erosions, sclerosis, widening then narrowing, fusion
- Spine: Squaring, "shiny corners" (Romanus lesions), syndesmophytes
- Bamboo spine: Complete fusion with bridging syndesmophytes

**Treatment Algorithm:**

*Step 1: NSAIDs*
- First-line for all patients
- Continuous use may slow radiographic progression
- Trial at least 2 different NSAIDs at full dose

*Step 2: bDMARDs*
If NSAID-inadequate response or contraindication:
- TNF inhibitors: Effective for axial, peripheral, uveitis
- IL-17 inhibitors: Axial and peripheral, not for IBD

*Step 3: JAK inhibitors*
- Tofacitinib, upadacitinib approved
- Oral alternative to biologics

*Adjunctive:*
- Physical therapy (essential for all patients)
- Exercise programs
- Smoking cessation
- Treat extra-articular manifestations

*Surgery:*
- Hip replacement if needed
- Spinal osteotomy for severe kyphosis (rare)`,
      keyTerms: [
        { term: 'ERAP1', definition: 'Endoplasmic reticulum aminopeptidase 1; trims peptides for MHC I loading; polymorphisms affect AS risk in HLA-B27+ individuals' },
        { term: 'BASDAI', definition: 'Bath Ankylosing Spondylitis Disease Activity Index; patient-reported questionnaire assessing disease activity' },
        { term: 'ASDAS', definition: 'Ankylosing Spondylitis Disease Activity Score; composite score including CRP' },
        { term: 'Romanus lesion', definition: '"Shiny corner" sign on X-ray from inflammation/sclerosis at vertebral corners' },
        { term: 'axial spondyloarthritis', definition: 'Umbrella term including AS (radiographic) and non-radiographic axial SpA' },
      ],
      clinicalNotes: 'MRI can detect sacroiliitis years before X-ray changes. TNF inhibitors effective for axial disease; conventional DMARDs (MTX, SSZ) are NOT effective for axial symptoms. IL-17 inhibitors avoid for IBD (may worsen). Uveitis responds to TNF monoclonal antibodies (not etanercept).',
    },
    4: {
      level: 4,
      summary: 'Ankylosing spondylitis pathogenesis involves HLA-B27-related immune dysregulation, IL-23/IL-17 axis activation at entheseal sites, and paradoxical coupling of inflammation with Wnt/BMP-driven pathologic ossification, targeted therapeutically by TNF-alpha, IL-17A, and JAK-STAT pathway inhibition.',
      explanation: `**Advanced Immunopathogenesis:**

1. **HLA-B27 Mechanisms:**

   *Peptide Presentation:*
   - B27 presents unique repertoire of peptides
   - Some shared with microbial antigens (molecular mimicry)
   - Klebsiella cross-reactivity historically proposed
   - CD8+ T cells reactive to B27-presented peptides

   *Misfolding Hypothesis:*
   - B27 heavy chains misfold in ER
   - Accumulation triggers UPR (unfolded protein response)
   - IRE1, ATF6, PERK pathway activation
   - UPR induces IL-23 production by macrophages
   - IL-23 drives IL-17 from ILC3, gamma-delta T cells

   *Cell Surface Aberrations:*
   - B27 homodimers expressed on cell surface
   - Beta2-microglobulin-free heavy chains
   - Bind KIR3DL2 on NK cells and CD4+ T cells
   - Promotes Th17 differentiation and survival

2. **IL-23/IL-17 Axis:**

   *Cellular Sources:*
   - Innate lymphoid cells type 3 (ILC3)
   - Gamma-delta T cells
   - Mucosal-associated invariant T cells (MAIT)
   - Th17 cells

   *Tissue Location:*
   - Entheses are rich in IL-17-producing cells
   - Gut-joint axis (subclinical gut inflammation common)
   - Bone marrow involvement

   *Downstream Effects:*
   - IL-17A: Neutrophil recruitment, osteoclast activation
   - IL-22: Entheseal inflammation, new bone formation
   - GM-CSF: Macrophage activation, osteoclastogenesis

3. **Entheseal Pathobiology:**

   *Enthesis Organ Concept:*
   - Enthesis includes adjacent bone, fibrocartilage, synovium
   - Functional unit responding to mechanical stress
   - Resident immune cells (macrophages, ILCs)

   *Mechanical Stress and Inflammation:*
   - Biomechanical loading triggers innate response
   - PGE2 production amplifies inflammation
   - TNF, IL-17 production locally
   - "Stress-responsive" tissue

4. **Pathologic New Bone Formation:**

   *Coupling of Inflammation and Ossification:*
   - Inflammation induces erosion
   - Resolution associated with repair response
   - Aberrant repair leads to new bone
   - May explain disconnect: TNF inhibitors reduce inflammation but may not fully stop progression

   *Molecular Pathways:*
   - Wnt signaling activation
   - BMP signaling upregulation
   - Dickkopf-1 (DKK-1) reduction
   - Hedgehog pathway involvement
   - Prostaglandin E2 promotes osteogenesis

   *Cellular Players:*
   - Mesenchymal stem cells at enthesis
   - Differentiation to osteoblasts
   - Endochondral ossification pathway

5. **Gut-Joint Axis:**

   *Subclinical Gut Inflammation:*
   - 50-60% of AS patients have subclinical ileocolitis
   - Histologically similar to early Crohn's
   - Shared IL-23/IL-17 pathway
   - Microbiome dysbiosis

   *Mucosal Immunity:*
   - Altered gut permeability
   - Bacterial translocation potential
   - Activation of mucosal IL-17+ cells
   - Migration to entheses/synovium

**Treatment Mechanisms:**

*TNF Inhibitors:*
- Block TNF-alpha signaling
- Reduce enthesitis, synovitis
- Effective for axial and peripheral disease
- Effect on new bone formation debated
- Treat uveitis (monoclonals > etanercept)

*IL-17A Inhibitors:*
- Secukinumab, ixekizumab
- Block IL-17A specifically
- Effective for axial disease
- May exacerbate IBD (avoid in IBD patients)
- Candida infections risk

*JAK Inhibitors:*
- Block multiple cytokine signaling
- IL-6, IL-23, IFN-gamma pathways
- Tofacitinib, upadacitinib approved
- Oral administration advantage

**Radiographic Progression:**

*Risk Factors:*
- Baseline syndesmophytes (strongest)
- Elevated CRP
- Smoking
- Male sex
- HLA-B27 positivity

*Effect of Treatment:*
- NSAIDs: Some data for slowing progression (controversial)
- TNF inhibitors: Long-term data suggests slowing
- IL-17 inhibitors: Data emerging, may slow progression
- Early treatment may be key`,
      keyTerms: [
        { term: 'unfolded protein response', definition: 'Cellular stress response to accumulation of misfolded proteins in ER; activates inflammatory pathways in AS context' },
        { term: 'KIR3DL2', definition: 'Killer immunoglobulin-like receptor that binds HLA-B27 homodimers, promoting Th17 responses' },
        { term: 'ILC3', definition: 'Type 3 innate lymphoid cells; major source of IL-17 at mucosal and entheseal sites in SpA' },
        { term: 'Dickkopf-1', definition: 'Wnt signaling inhibitor that is decreased in AS, allowing pathologic new bone formation', pronunciation: 'DIK-kopf' },
        { term: 'enthesis organ', definition: 'Functional unit comprising the enthesis and adjacent bone, fibrocartilage, and synovium that responds as a unit' },
      ],
      clinicalNotes: 'Etanercept less effective for uveitis and IBD than monoclonal TNF antibodies. IL-17 inhibitors contraindicated in active IBD. Radiographic progression may continue despite clinical response - true disease modification remains elusive. Gut inflammation present in majority of AS patients even without GI symptoms.',
    },
    5: {
      level: 5,
      summary: 'Ankylosing spondylitis exemplifies the spondyloarthritis paradigm of HLA-B27-mediated immune dysregulation, entheseal-centric IL-23/IL-17 pathway activation, and paradoxical inflammation-ossification coupling via Wnt/BMP signaling, with precision medicine approaches emerging through pathway-specific biologics and understanding of molecular endotypes.',
      explanation: `**Precision Medicine in Axial SpA:**

1. **Genetic Risk Stratification:**

   *HLA-B27 Subtypes:*
   - B*27:05: Highest risk globally
   - B*27:02: High risk in Caucasians
   - B*27:04: High risk in Asians
   - B*27:06: Protective (Southeast Asian)
   - B*27:09: Possibly protective

   *Non-HLA Genetics:*
   - IL23R: R381Q protective variant
   - ERAP1: Epistatic with HLA-B27
   - IL12B, IL6R, RUNX3, CARD9
   - Polygenic risk scores being developed

2. **Biomarker-Guided Therapy:**

   *Disease Activity Biomarkers:*
   - CRP: Correlates with radiographic progression
   - MRI bone marrow edema: Activity marker
   - Serum calprotectin (S100A8/A9): Emerging marker
   - IL-17, IL-22 levels: Research stage

   *Treatment Response Predictors:*
   - High CRP: May predict TNFi response
   - MRI inflammation: Predicts structural response
   - Male sex, HLA-B27+: Better TNFi response (some studies)
   - No validated biomarkers for choosing between biologics

3. **Radiographic vs. Non-Radiographic axSpA:**

   *Disease Continuum:*
   - Non-radiographic axSpA: Clinical SpA without X-ray sacroiliitis
   - 10-20% progress to AS over 2 years
   - MRI-positive vs. MRI-negative subgroups
   - Similar disease activity, quality of life impact

   *Treatment Implications:*
   - Biologics approved for nr-axSpA with objective inflammation
   - MRI+ and/or CRP+ required for most approvals
   - Similar efficacy to established AS

4. **Treatment Algorithm (2022 ACR/AF Guidelines):**

   *First-Line:*
   - NSAIDs: Full-dose, at least 2 trials
   - Physical therapy: Essential for all

   *Second-Line (bDMARD-naive):*
   - TNF inhibitor preferred
   - Consider IL-17i if TNFi contraindicated
   - Consider JAKi if both above unsuitable

   *TNF-Inadequate Response:*
   - Switch to different TNFi, or
   - Switch to IL-17i, or
   - Switch to JAKi
   - Limited evidence for mechanism switch vs. cycling

   *Special Situations:*
   - Uveitis: TNF monoclonal antibody (not etanercept)
   - IBD: TNF monoclonal antibody (avoid IL-17i)
   - Psoriasis: IL-17i or TNFi
   - Peripheral arthritis: Consider sulfasalazine as add-on

5. **Targeting Pathologic Ossification:**

   *Current Limitations:*
   - Anti-inflammatory therapy reduces symptoms
   - Effect on structural progression less clear
   - Disconnect between inflammation and ossification

   *Potential Strategies:*
   - Wnt pathway inhibitors (theoretical)
   - Dickkopf-1 restoration
   - BMP inhibitors
   - Early treatment before ossification cascade

   *Evidence for Disease Modification:*
   - Long-term TNFi data: Slowed progression after 4+ years
   - IL-17i: Early data suggests similar slowing
   - Earlier treatment associated with better outcomes
   - Radiographic progression not yet a regulatory endpoint

6. **Extra-Articular Manifestation Management:**

   *Acute Anterior Uveitis:*
   - Most common EAM (25-40%)
   - Unilateral, alternating
   - Topical corticosteroids for acute episode
   - Systemic TNFi (monoclonal) reduces recurrence
   - Adalimumab, infliximab preferred

   *Inflammatory Bowel Disease:*
   - 5-10% overt IBD (Crohn's > UC)
   - 50%+ subclinical inflammation
   - TNF monoclonal antibodies for both
   - Avoid IL-17i (may exacerbate IBD)

   *Cardiovascular:*
   - Aortitis, aortic regurgitation
   - Conduction abnormalities
   - Accelerated atherosclerosis
   - Screen and manage CV risk factors

   *Pulmonary:*
   - Apical fibrosis (restrictive)
   - Chest wall restriction
   - Sleep apnea (kyphosis)

7. **Outcomes and Prognosis:**

   *Favorable Prognosis Factors:*
   - Early diagnosis and treatment
   - Good NSAID response
   - Absence of hip involvement
   - Non-smoker
   - Physically active

   *Work Disability:*
   - 20-30% work disabled over time
   - Improved with biologic era
   - Physical and sedentary jobs affected

   *Mortality:*
   - Slightly increased vs. general population
   - CV disease main contributor
   - Possibly related to chronic inflammation
   - Spinal fractures with minor trauma (ankylosed spine)

8. **Emerging Approaches:**

   *New Targets:*
   - IL-23 inhibition: Disappointing in axSpA despite efficacy in psoriatic arthritis
   - GM-CSF: Trials ongoing
   - Tyrosine kinase inhibitors
   - Targeted synthetic DMARDs

   *Microbiome Modulation:*
   - Gut-joint axis manipulation
   - Probiotics, diet interventions
   - Research stage

   *Prevention:*
   - HLA-B27+ at-risk individuals
   - Identifying pre-clinical disease
   - Whether early intervention prevents progression unknown`,
      keyTerms: [
        { term: 'non-radiographic axial SpA', definition: 'Axial spondyloarthritis without definite structural changes on X-ray; may progress to AS' },
        { term: 'calprotectin', definition: 'S100A8/A9 heterodimer released by neutrophils; serum levels correlate with SpA disease activity' },
        { term: 'R381Q', definition: 'Protective variant in IL23R gene that reduces AS risk by altering IL-23 receptor signaling' },
        { term: 'mSASSS', definition: 'Modified Stoke AS Spinal Score; radiographic scoring system for structural damage in AS' },
        { term: 'treat-to-target', definition: 'Strategy of adjusting therapy to achieve specific disease activity goals (being evaluated in axSpA)' },
      ],
      clinicalNotes: `**Board-Relevant Pearls:**
- AS is strongly HLA-B27 associated (90-95%) but B27 is neither necessary nor sufficient
- Inflammatory back pain: age <45, insidious onset, improves with exercise, worse with rest, morning stiffness >30 min
- MRI shows bone marrow edema at SI joints before X-ray changes (non-radiographic axSpA)
- Conventional DMARDs (MTX, SSZ) do NOT work for axial disease
- TNF monoclonals (not etanercept) preferred if uveitis or IBD coexist
- IL-17 inhibitors contraindicated in IBD (may worsen)
- Syndesmophytes are vertical (AS) vs. horizontal osteophytes (DISH, OA)
- Bamboo spine increases fracture risk - minor trauma can cause unstable fractures
- Chest expansion <5 cm is abnormal
- Schober test: <5 cm increase with forward flexion is abnormal`,
    },
  },

  media: [
    {
      id: 'as-bamboo-spine',
      type: 'image',
      filename: 'as-bamboo-spine-xray.jpg',
      title: 'Bamboo Spine X-ray',
      description: 'Lateral spine X-ray showing complete fusion with bridging syndesmophytes',
    },
    {
      id: 'as-sacroiliitis-mri',
      type: 'image',
      filename: 'as-sacroiliitis-mri.jpg',
      title: 'MRI Sacroiliitis',
      description: 'MRI STIR sequence showing bone marrow edema at sacroiliac joints',
    },
    {
      id: 'as-syndesmophyte',
      type: 'diagram',
      filename: 'syndesmophyte-vs-osteophyte.svg',
      title: 'Syndesmophyte vs Osteophyte',
      description: 'Diagram comparing vertical syndesmophytes (AS) to horizontal osteophytes (OA, DISH)',
    },
  ],
  citations: [
    {
      id: 'taurog-2016',
      type: 'article',
      title: 'Ankylosing Spondylitis and Axial Spondyloarthritis',
      authors: ['Taurog JD', 'Chhabra A', 'Colbert RA'],
      source: 'New England Journal of Medicine',
      url: 'https://doi.org/10.1056/NEJMra1406182',
    },
    {
      id: 'ward-2019',
      type: 'article',
      title: '2019 ACR/SAA/SPARTAN Recommendations for the Treatment of Ankylosing Spondylitis',
      authors: ['Ward MM', 'Deodhar A', 'Gensler LS', 'et al.'],
      source: 'Arthritis & Rheumatology',
      url: 'https://doi.org/10.1002/art.41042',
    },
  ],
  crossReferences: [
    { targetId: 'condition-spondyloarthropathies', targetType: 'condition', relationship: 'parent', label: 'Spondyloarthropathies' },
    { targetId: 'condition-psoriatic-arthritis', targetType: 'condition', relationship: 'sibling', label: 'Psoriatic Arthritis' },
    { targetId: 'concept-biologics', targetType: 'concept', relationship: 'related', label: 'Biologic Therapies' },
    { targetId: 'system-musculoskeletal', targetType: 'system', relationship: 'parent', label: 'Musculoskeletal System' },
  ],
  tags: {
    systems: ['musculoskeletal', 'immune'],
    topics: ['rheumatology', 'spondyloarthritis', 'autoimmune'],
    keywords: ['ankylosing spondylitis', 'AS', 'axial SpA', 'HLA-B27', 'sacroiliitis', 'enthesitis', 'bamboo spine'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine'] },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default ankylosingSpondylitisContent;
