/**
 * Macular Degeneration - Comprehensive Educational Content
 *
 * Covers age-related macular degeneration (dry and wet forms),
 * pathophysiology, risk factors, diagnosis, and treatment.
 */

import { EducationalContent } from '../../types';

export const macularDegeneration: EducationalContent = {
  id: 'condition-macular-degeneration',
  type: 'condition',
  name: 'Age-Related Macular Degeneration',
  alternateNames: ['AMD', 'ARMD', 'Macular Degeneration'],
  hpoId: 'HP:0000608',

  levels: {
    1: {
      level: 1,
      summary: 'Macular degeneration is when the center part of your retina wears out with age, making it hard to see faces, read, or drive while your side vision stays fine.',
      explanation: `The macula is a tiny spot in the center of your retina - the "movie screen" at the back of your eye. It's responsible for your sharp, central vision that lets you read, recognize faces, and see fine details.

**What Happens in AMD:**
- The macula gets damaged over time
- Your central vision becomes blurry or distorted
- You might see a dark or blurry spot in the center
- Side (peripheral) vision usually stays normal
- Both eyes are often affected

**Two Types:**

**1. Dry AMD (More Common - 90%)**
- Develops slowly over years
- Yellow deposits called "drusen" form under the retina
- Like age spots under your eye's screen
- No specific treatment, but vitamins may help
- Can progress to wet AMD

**2. Wet AMD (More Serious - 10%)**
- Abnormal blood vessels grow under the retina
- These vessels leak fluid and blood
- Causes rapid, severe vision loss
- Straight lines may look wavy
- Needs treatment quickly to save vision!

**Who Gets AMD:**
- Mainly affects people over 50
- Risk increases with age (very common over 75)
- More common in Caucasians
- Smoking greatly increases risk
- Family history matters

**Warning Signs:**
- Blurry or fuzzy central vision
- Straight lines look wavy or bent
- A dark spot in the center of vision
- Colors seem less bright
- Need more light to read

**Treatment:**
- Dry AMD: AREDS vitamins, healthy lifestyle
- Wet AMD: Eye injections that stop leaking vessels
- Low vision aids for advanced cases

**Good News:**
Wet AMD treatments have greatly improved! Eye injections can often stop vision loss and sometimes improve vision.`,
      keyTerms: [
        { term: 'macula', definition: 'The small center part of your retina that gives you detailed, sharp vision' },
        { term: 'drusen', definition: 'Yellow deposits that form under the retina in macular degeneration' },
        { term: 'retina', definition: 'The light-sensitive layer at the back of your eye like film in a camera' },
      ],
      analogies: [
        'The macula is like the bullseye of a target - the most important central part for seeing details.',
        'Drusen are like barnacles on a ship\'s hull - they build up over time and can cause problems.',
        'Wet AMD is like a water leak in your basement - abnormal pipes (blood vessels) cause damage.',
      ],
      examples: [
        'Someone with AMD might see a clock face but not be able to read the numbers.',
        'Looking at a door frame and seeing it wavy instead of straight is a warning sign of wet AMD.',
        'A person with AMD can walk around fine (peripheral vision intact) but can\'t read or recognize faces.',
      ],
    },
    2: {
      level: 2,
      summary: 'AMD is a degenerative disease of the macula causing progressive central vision loss, classified as dry (atrophic) or wet (neovascular), with anti-VEGF therapy revolutionizing treatment for the wet form.',
      explanation: `Age-related macular degeneration is the leading cause of legal blindness in developed countries for those over 55.

**Anatomy Review:**
- Macula: Central 5.5mm of retina
- Fovea: Center of macula, highest visual acuity
- Photoreceptors: Cones concentrated in fovea
- Retinal Pigment Epithelium (RPE): Single cell layer supporting photoreceptors
- Bruch's membrane: Between RPE and choroid

**Pathophysiology:**
1. RPE dysfunction and debris accumulation
2. Drusen formation (lipid and protein deposits)
3. Chronic inflammation
4. RPE and photoreceptor death
5. In wet AMD: VEGF-driven neovascularization

**Classification:**

**Early AMD:**
- Medium drusen (63-125 microns)
- No pigment changes
- Usually no symptoms

**Intermediate AMD:**
- Large drusen (>125 microns)
- Pigmentary abnormalities
- Mild to moderate vision loss

**Advanced AMD - Two Forms:**

**1. Dry (Geographic Atrophy):**
- Well-defined areas of RPE/photoreceptor loss
- Slow, progressive vision loss
- Can eventually involve fovea
- "Patchwork" pattern on imaging

**2. Wet (Neovascular/Exudative):**
- Choroidal neovascularization (CNV)
- Vessels from choroid grow under/through RPE
- Leaking, bleeding, scarring
- Rapid vision loss
- Metamorphopsia (distorted vision)
- Subretinal/intraretinal fluid

**Risk Factors:**
- Age (strongest factor)
- Smoking (2-3x risk)
- Family history/genetics (CFH, ARMS2)
- Caucasian race
- Cardiovascular disease
- Obesity
- Light iris color
- Sunlight exposure

**Diagnosis:**
- Visual acuity testing
- Amsler grid (detects metamorphopsia)
- Dilated fundus exam
- Optical coherence tomography (OCT)
- Fluorescein angiography (FA) for wet AMD
- Fundus autofluorescence (FAF)

**Treatment:**

**Dry AMD:**
- AREDS2 vitamins (C, E, zinc, copper, lutein, zeaxanthin)
- Risk reduction: Stop smoking, healthy diet, exercise
- Monitor for progression to wet AMD

**Wet AMD:**
- Anti-VEGF injections (first-line)
  - Ranibizumab (Lucentis)
  - Aflibercept (Eylea)
  - Bevacizumab (Avastin - off-label)
  - Brolucizumab (Beovu)
  - Faricimab (Vabysmo)
- Injections typically every 4-8 weeks
- Can stabilize or improve vision in many patients`,
      keyTerms: [
        { term: 'geographic atrophy', definition: 'Advanced dry AMD with well-defined areas of RPE and photoreceptor loss' },
        { term: 'choroidal neovascularization', definition: 'Abnormal blood vessel growth from choroid into retina, defining wet AMD', pronunciation: 'koh-ROY-dal nee-oh-VAS-kyoo-lar-ih-ZAY-shun' },
        { term: 'anti-VEGF', definition: 'Drugs that block vascular endothelial growth factor, treating wet AMD' },
        { term: 'metamorphopsia', definition: 'Visual distortion where straight lines appear wavy', pronunciation: 'met-ah-mor-FOP-see-ah' },
        { term: 'AREDS', definition: 'Age-Related Eye Disease Study; basis for AMD supplement recommendations' },
      ],
      analogies: [
        'The RPE is like the recycling system for photoreceptors. When it fails in AMD, waste products accumulate.',
        'Anti-VEGF injections are like turning off the faucet that\'s flooding the basement with abnormal blood vessels.',
        'Geographic atrophy is like patches of dead grass spreading across a lawn.',
      ],
    },
    3: {
      level: 3,
      summary: 'AMD involves complex interplay of oxidative stress, lipid dysregulation, complement activation, and RPE dysfunction, with geographic atrophy representing end-stage dry AMD and CNV driven by VEGF and inflammatory pathways in wet AMD.',
      explanation: `## Pathophysiology

**RPE and Bruch's Membrane:**
- RPE: Critical for photoreceptor function
  - Phagocytosis of shed outer segments
  - Visual cycle (retinoid processing)
  - Nutrient transport
  - Secretion of growth factors
- Bruch's membrane: Pentalaminar structure
  - Thickens and calcifies with age
  - Lipid deposition
  - Reduced permeability

**Drusen Biology:**
- Soft drusen: Higher risk of progression
- Hard drusen: Lower risk
- Composition: Lipids, proteins, complement components
- Basal laminar deposits (between RPE and basement membrane)
- Basal linear deposits (within Bruch's membrane)

**Inflammatory Pathways:**
- Complement system activation
- CFH (complement factor H): Major risk gene
- Alternative pathway dysregulation
- MAC (membrane attack complex) formation
- Chronic para-inflammation
- Microglial activation

**Oxidative Stress:**
- High metabolic rate in macula
- Photic injury (blue light)
- Lipofuscin accumulation
- A2E (toxic lipofuscin component)
- Mitochondrial dysfunction in RPE

## Classification Systems

**AREDS Simplified Severity Scale:**
- Score based on drusen and pigment changes
- 0: No drusen/pigment changes
- 1: Few small drusen
- 2: Extensive small/intermediate drusen
- 3: Extensive intermediate drusen or large drusen
- 4: Large drusen or geographic atrophy without foveal involvement
- Higher score = higher progression risk

**CNV Classification:**

*By Location:*
- Subfoveal: Directly under fovea (most common)
- Juxtafoveal: 1-199 microns from fovea
- Extrafoveal: >200 microns from fovea

*By Lesion Type:*
- Classic: Well-defined early hyperfluorescence on FA
- Occult: Poorly defined, fibrovascular PED
- Mixed: Combination
- RAP: Retinal angiomatous proliferation
- PCV: Polypoidal choroidal vasculopathy

## Imaging

**OCT:**
- Drusen visualization and quantification
- Subretinal/intraretinal fluid
- PED (pigment epithelial detachment)
- CNV complex
- Geographic atrophy extent
- Photoreceptor integrity (EZ band)

**OCT Angiography:**
- Non-invasive visualization of CNV
- Flow detection
- Useful for monitoring
- May miss some lesions

**Fluorescein Angiography:**
- Classic CNV: Early hyperfluorescence, late leakage
- Occult CNV: Late leakage, stippled hyperfluorescence
- Staining vs leaking
- Guides treatment decisions

**Fundus Autofluorescence:**
- Lipofuscin detection
- GA: Hypoautofluorescent (absent RPE)
- Hyperautofluorescent border: Active disease
- Drusen patterns

## Treatment Details

**AREDS2 Formula:**
- Vitamin C: 500 mg
- Vitamin E: 400 IU
- Zinc: 80 mg (or 25 mg)
- Copper: 2 mg (to prevent zinc-induced deficiency)
- Lutein: 10 mg
- Zeaxanthin: 2 mg
- No beta-carotene (lung cancer risk in smokers)

**Anti-VEGF Therapy:**

*Mechanisms:*
- Bind and neutralize VEGF-A
- Reduce vascular permeability
- Inhibit neovascularization
- Some also bind VEGF-B, PlGF (aflibercept)
- Faricimab: VEGF-A + Ang-2

*Treatment Regimens:*
- Monthly: Original protocol
- PRN (as needed): Based on activity signs
- Treat and extend: Extend interval when stable
- Fixed extended: Every 8-16 weeks (faricimab, aflibercept 8 mg)

*Monitoring for Activity:*
- Visual acuity
- OCT: Fluid (SRF, IRF), PED height
- Symptoms: Metamorphopsia, vision change
- Usually treat if any fluid present

**Emerging Treatments for Dry AMD:**
- Complement inhibitors (pegcetacoplan - approved for GA)
- Port delivery system (sustained anti-VEGF)
- Gene therapy trials
- RPE transplantation research`,
      keyTerms: [
        { term: 'lipofuscin', definition: 'Age-related pigment accumulating in RPE; contains toxic A2E component' },
        { term: 'complement factor H', definition: 'Key regulator of alternative complement pathway; variants increase AMD risk', pronunciation: 'CFH' },
        { term: 'retinal angiomatous proliferation', definition: 'Type 3 neovascularization originating from retinal vessels', pronunciation: 'RAP' },
        { term: 'polypoidal choroidal vasculopathy', definition: 'Variant of wet AMD with polyp-like lesions, more common in Asians', pronunciation: 'PCV' },
        { term: 'treat and extend', definition: 'Anti-VEGF regimen progressively lengthening intervals between injections when disease controlled' },
      ],
      clinicalNotes: 'OCT fluid is the key biomarker for treatment decisions in wet AMD. AREDS2 vitamins reduce progression risk by ~25% in intermediate AMD. Metamorphopsia is a red flag for conversion to wet AMD - needs urgent evaluation. Geographic atrophy can still progress despite anti-VEGF treatment.',
    },
    4: {
      level: 4,
      summary: 'AMD pathogenesis involves the convergence of lipid metabolism dysfunction, complement dysregulation, and RPE/photoreceptor complex failure, with precision medicine approaches emerging based on genetic risk profiles and novel therapeutic targets including complement inhibition and sustained drug delivery.',
      explanation: `## Genetic Architecture

**Major Risk Loci:**

*Complement Pathway:*
- CFH (1q32): Y402H variant; OR ~2.5-5.0
- CFHR1/3 deletions: Protective
- CFB, C2 (6p21): Protective haplotype
- C3 (19p13): R102G variant
- CFI: Regulatory factor

*ARMS2/HTRA1 (10q26):*
- Second major locus
- ARMS2: Function unclear, mitochondrial?
- HTRA1: Serine protease, ECM remodeling
- OR ~2.7 per allele

*Lipid Metabolism:*
- ABCA1, APOE, CETP, LIPC
- HDL metabolism genes
- Drusen lipid content correlation

**Gene-Environment Interaction:**
- Smoking + CFH Y402H: Multiplicative risk increase
- Diet may modify genetic risk
- Pharmacogenomics research ongoing

## Cellular and Molecular Mechanisms

**RPE Dysfunction:**
- Autophagy impairment
- Mitochondrial DNA damage
- Epithelial-mesenchymal transition (EMT)
- Anoikis resistance in advanced disease
- Aberrant secretion (VEGF, complement)

**Photoreceptor Degeneration:**
- Cone degeneration in AMD (unlike RP)
- Secondary to RPE loss
- Rod loss may precede cones
- Ectopic synapse formation

**Choroidal Changes:**
- Choriocapillaris dropout
- Precedes RPE changes in some models
- Choroidal thinning in dry AMD
- Pachychoroid spectrum in PCV

**Immune Cells:**
- Microglia: Phagocytose debris, release cytokines
- Macrophage subpopulations
- Mast cells in choroid
- Complement deposition on Bruch's

## Advanced Imaging Biomarkers

**OCT Biomarkers:**
- Drusen volume (automated measurement)
- Hyperreflective foci (lipid-laden macrophages/RPE migration)
- Subretinal drusenoid deposits (reticular pseudodrusen)
- EZ band integrity (photoreceptor survival)
- GA progression rate

**OCT Angiography:**
- Type 1, 2, 3 neovascularization patterns
- Subclinical/quiescent CNV detection
- Treatment-naive CNV characteristics
- Vessel density changes in dry AMD

**Adaptive Optics:**
- Cone photoreceptor imaging
- Cone mosaic disruption
- RPE cell visualization
- Research applications

## Treatment Advances

**Extended Durability Anti-VEGF:**

*Aflibercept 8 mg:*
- Higher dose, longer durability
- PULSAR trial: Every 12-16 weeks
- Same safety profile

*Faricimab:*
- Bispecific: VEGF-A + Ang-2
- Ang-2 inhibition: Vascular stability
- TENAYA/LUCERNE: Up to every 16 weeks

*Port Delivery System:*
- Surgical implant, reservoir refilled q6 months
- Ranibizumab PDS (Susvimo)
- Reduces injection burden
- Surgical risks, explantation needed sometimes

**Geographic Atrophy Treatments:**

*Pegcetacoplan (Syfovre):*
- Complement C3 inhibitor
- OAKS/DERBY trials: 22% reduction in GA growth at 24 months
- Monthly intravitreal injection
- First approved GA treatment

*Avacincaptad pegol (Izervay):*
- Complement C5 inhibitor
- Monthly injection
- FDA approved 2023

**Gene Therapy:**
- AAV-delivered anti-VEGF (ongoing trials)
- RGX-314, ADVM-022, 4D-150
- One-time treatment potential
- Complement modulation approaches

## Special Subtypes

**Polypoidal Choroidal Vasculopathy:**
- More common in Asians
- Polyp-like dilations
- ICG angiography diagnostic
- Combination therapy: Anti-VEGF + PDT often used
- Higher recurrence rates

**Retinal Angiomatous Proliferation:**
- Type 3 neovascularization
- Originates from deep retinal capillaries
- Often bilateral
- Poor prognosis
- May respond to anti-VEGF

**Pachychoroid Spectrum:**
- Thick choroid, dilated Haller layer
- Pachychoroid neovasculopathy
- Overlap with PCV
- May have different pathophysiology`,
      keyTerms: [
        { term: 'ARMS2/HTRA1', definition: 'Major AMD risk locus on chromosome 10; second only to CFH in genetic contribution' },
        { term: 'hyperreflective foci', definition: 'OCT biomarker representing lipid-laden cells or migrating RPE; associated with progression' },
        { term: 'subretinal drusenoid deposits', definition: 'Drusen located above RPE (not below); associated with worse prognosis', pronunciation: 'reticular pseudodrusen' },
        { term: 'port delivery system', definition: 'Surgically implanted reservoir for sustained anti-VEGF delivery' },
        { term: 'pachychoroid', definition: 'Phenotype with thick choroid and dilated choroidal vessels; distinct from typical AMD' },
      ],
      clinicalNotes: 'Genetic testing not yet standard of care but may guide risk stratification. Pegcetacoplan for GA is first disease-modifying therapy. Treat and extend preferred over PRN for fewer visits with similar outcomes. Subretinal drusenoid deposits indicate higher progression risk. Consider PCV in Asian patients with poor anti-VEGF response.',
    },
    5: {
      level: 5,
      summary: 'State-of-the-art AMD management integrates multi-modal imaging biomarkers, genetic risk profiling, and expanding therapeutic armamentarium including complement inhibitors for geographic atrophy, gene therapy approaches, and artificial intelligence-guided treatment paradigms.',
      explanation: `## Integrated Disease Model

**Converging Pathways:**
1. Lipid/lipoprotein accumulation in Bruch's membrane
2. Oxidative damage to RPE mitochondria
3. Complement dysregulation and chronic inflammation
4. Impaired autophagy and proteasome function
5. Ischemic/vascular contribution

**Two-Hit Hypothesis:**
- Genetic susceptibility (complement, lipid genes)
- Environmental triggers (smoking, light, diet)
- Age-related decline in clearance mechanisms
- Threshold model for disease expression

**Drusen as Active Lesions:**
- Not just passive deposits
- Sites of complement activation
- Contain activated complement components (C3a, C5a, MAC)
- May recruit immune cells
- Soft drusen: Higher inflammatory activity

## Precision Medicine Approaches

**Genetic Risk Stratification:**
- Polygenic risk scores
- CFH + ARMS2 explain ~50% genetic risk
- Rare variants: CFI, C9, CFH mutations
- May guide treatment intensity

**Pharmacogenomics:**
- CFH Y402H and anti-VEGF response (conflicting data)
- ARMS2 and progression risk
- Not yet clinically actionable
- Research ongoing

**Phenotype-Based Classification:**
- Subretinal drusenoid deposits: Outer retinal atrophy risk
- Pachychoroid: Different treatment approach
- Drusen phenotypes: Large soft vs crystalline

## Novel Therapeutic Targets

**Complement Pathway:**
- C3 inhibitors: Pegcetacoplan (approved), APL-2
- C5 inhibitors: Avacincaptad pegol (approved), zimura
- Factor D inhibitors: Lampalizumab (failed), ANX007
- Factor B inhibitors: IONIS-FB-LRx (antisense)
- Properdin inhibitors
- Gene therapy for complement regulation

**Beyond VEGF:**
- Ang-2/Tie2 pathway (faricimab)
- PDGF: Failed (combination with anti-VEGF)
- Integrin inhibitors
- Sema3A inhibitors
- Tyrosine kinase inhibitors

**Neuroprotection/Cytoprotection:**
- Ciliary neurotrophic factor (CNTF implant)
- Visual cycle modulators (fenretinide, emixustat - failed)
- Mitochondrial protection
- Autophagy enhancers

**Regenerative Approaches:**
- RPE cell transplantation (iPSC-derived, ESC-derived)
- Phase 1-2 trials ongoing
- Subretinal delivery challenges
- Patch vs cell suspension
- Immune rejection considerations

## Gene Therapy

**Anti-VEGF Expression:**
- RGX-314: AAV8-antiVEGF (subretinal)
- ADVM-022: AAV2.7m8-aflibercept (intravitreal)
- 4D-150: Intravitreal dual anti-VEGF
- Goal: One-time treatment, sustained expression
- Manufacturing and durability challenges

**Complement Modulation:**
- GT005: CFI overexpression
- HMR59: CD59 (MAC inhibitor)
- AAV-delivered regulators

## Advanced Imaging Integration

**Artificial Intelligence:**
- Automated fluid detection and quantification
- GA progression prediction
- Conversion risk (dry to wet)
- Treatment response prediction
- DeepMind/Google AI: Expert-level performance

**Biomarker Development:**
- Ellipsoid zone disruption: Visual potential
- Persistent subretinal fluid: May be tolerable
- Intraretinal fluid: More visually significant
- Drusen regression: May precede atrophy or CNV
- Choriocapillaris flow voids: Early biomarker

**Multimodal Integration:**
- OCT + OCTA + FAF combined analysis
- Automated correlation
- 3D volumetric analysis
- Longitudinal tracking algorithms

## Treatment Paradigms

**Wet AMD Personalization:**
- Disease activity-based (PRN): Fewest injections, more visits
- Fixed interval: Predictable, potential over/under treatment
- Treat and extend: Preferred balance
- Observe and plan: Extended intervals with planned monitoring

**Fluid Tolerance:**
- Complete dryness not always necessary
- Subretinal fluid may be tolerable
- Intraretinal fluid generally treated
- Individualize based on visual response

**Treatment Failure:**
- Define: Despite monthly treatment
- Consider switch (class or mechanism)
- Combination therapy (anti-VEGF + anti-Ang2)
- Rule out misdiagnosis (PCV, CSR)

## Geographic Atrophy Management

**Risk Assessment:**
- Drusen characteristics
- Subretinal drusenoid deposits
- Hyperreflective foci
- Autofluorescence patterns (banded patterns progress faster)

**Treatment Decision:**
- Pegcetacoplan, avacincaptad pegol approved
- Slows progression, doesn't restore
- Monthly injection burden
- CNV risk with some treatments
- Patient selection important

## Global Perspectives

**Disparities:**
- Screening access differences
- Anti-VEGF availability/cost
- Injection burden barriers
- Disease awareness

**Economic Considerations:**
- Biosimilars emerging (bevacizumab, ranibizumab)
- Cost-effectiveness analyses
- Treat and extend cost savings
- Gene therapy cost vs lifetime injections`,
      keyTerms: [
        { term: 'polygenic risk score', definition: 'Combined genetic variant score for AMD risk prediction; integrates multiple loci' },
        { term: 'ellipsoid zone', definition: 'OCT band representing photoreceptor inner segment/outer segment junction; integrity predicts visual potential' },
        { term: 'iPSC-derived RPE', definition: 'Retinal pigment epithelium generated from induced pluripotent stem cells for transplantation' },
        { term: 'Tie2 receptor', definition: 'Angiopoietin receptor involved in vascular stability; targeted by faricimab via Ang-2 inhibition' },
        { term: 'banded autofluorescence', definition: 'FAF pattern at GA border indicating higher progression risk' },
      ],
      clinicalNotes: `Key clinical pearls:
1. Two complement inhibitors now approved for GA - first disease-modifying treatments
2. Extended-durability anti-VEGF (aflibercept 8mg, faricimab) reduce treatment burden
3. AI tools approaching expert-level for AMD screening and monitoring
4. Gene therapy may eventually provide one-time treatment for wet AMD
5. Treat-and-extend preferred over PRN for most patients
6. Some subretinal fluid may be tolerable; intraretinal fluid less so
7. Consider PCV in Asian patients with suboptimal anti-VEGF response
8. Genetic testing may become routine for risk stratification`,
    },
  },

  media: [
    {
      id: 'drusen-types',
      type: 'diagram',
      filename: 'drusen-classification.svg',
      title: 'Drusen Types and Classification',
      description: 'Comparison of hard, soft, and confluent drusen with clinical images',
    },
    {
      id: 'wet-amd-oct',
      type: 'image',
      filename: 'wet-amd-oct.jpg',
      title: 'OCT of Wet AMD',
      description: 'OCT showing subretinal fluid, intraretinal fluid, and PED in wet AMD',
    },
    {
      id: 'geographic-atrophy',
      type: 'image',
      filename: 'geographic-atrophy.jpg',
      title: 'Geographic Atrophy',
      description: 'Fundus photo and FAF showing areas of geographic atrophy',
    },
  ],

  citations: [
    {
      id: 'areds-2001',
      type: 'article',
      title: 'A randomized, placebo-controlled, clinical trial of high-dose supplementation with vitamins C and E, beta carotene, and zinc for age-related macular degeneration and vision loss: AREDS report no. 8',
      source: 'Archives of Ophthalmology',
      authors: ['Age-Related Eye Disease Study Research Group'],
    },
    {
      id: 'bcsc-retina',
      type: 'textbook',
      title: 'Retina and Vitreous',
      source: 'AAO Basic and Clinical Science Course',
      chapter: 'Section 12',
    },
    {
      id: 'ryan-retina',
      type: 'textbook',
      title: 'Retina',
      authors: ['Ryan SJ', 'Schachat AP', 'Wilkinson CP'],
      source: 'Elsevier',
    },
  ],

  crossReferences: [
    { targetId: 'structure-eye-anatomy', targetType: 'structure', relationship: 'related', label: 'Eye Anatomy' },
    { targetId: 'condition-diabetic-retinopathy', targetType: 'condition', relationship: 'related', label: 'Diabetic Retinopathy' },
    { targetId: 'condition-retinal-detachment', targetType: 'condition', relationship: 'related', label: 'Retinal Detachment' },
    { targetId: 'process-eye-examination', targetType: 'topic', relationship: 'related', label: 'Eye Examination' },
  ],

  tags: {
    systems: ['visual'],
    topics: ['ophthalmology', 'retina', 'aging'],
    keywords: ['AMD', 'macular degeneration', 'drusen', 'anti-VEGF', 'geographic atrophy', 'CNV'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['ophthalmology'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default macularDegeneration;
