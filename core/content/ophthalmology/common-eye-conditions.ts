/**
 * Common Eye Conditions - Ophthalmology
 *
 * Focused content on four major sight-threatening conditions:
 * cataracts, glaucoma, age-related macular degeneration, and diabetic retinopathy.
 *
 * Five complexity levels from 8th-grade through MD/Professional.
 */

import { EducationalContent } from '../types';

export const commonEyeConditions: EducationalContent = {
  id: 'ophthalmology-common-eye-conditions',
  type: 'condition',
  name: 'Common Eye Conditions',
  nameEs: 'Condiciones Oculares Comunes',
  alternateNames: [
    'Major Ophthalmic Diseases',
    'Sight-Threatening Eye Conditions',
    'Cataracts, Glaucoma, AMD, and Diabetic Retinopathy',
  ],

  levels: {
    1: {
      level: 1,
      summary:
        'Your eyes let you see the world, but certain diseases can cloud your vision, damage the nerve that connects your eye to your brain, or hurt the delicate layer at the back of your eye.',
      explanation: `Your eyes work like tiny cameras. Light enters through the front, passes through a clear lens, and lands on a special layer at the back called the retina. The retina sends the picture to your brain through a cable called the optic nerve.

Sometimes things go wrong with different parts of the eye. Here are four common problems:

**Cataracts -- A Cloudy Lens**

- The lens inside your eye is normally crystal clear
- Over time it can turn cloudy, like looking through a foggy window
- Colors look faded, lights seem too bright, and everything gets blurry
- A doctor can take out the cloudy lens and put in a new clear one
- This surgery is very common and works really well

**Glaucoma -- Pressure Damage**

- Your eye makes a watery fluid that keeps it healthy
- If the fluid cannot drain properly, pressure builds up inside the eye
- High pressure slowly damages the optic nerve (the cable to your brain)
- You lose side vision first, so you might not notice for a long time
- Eye drops or surgery can lower the pressure to protect your vision

**Macular Degeneration -- Losing Central Vision**

- The macula is the tiny center spot of the retina that lets you see fine details
- In older adults the macula can break down over time
- Reading, recognizing faces, and seeing colors become harder
- There is a dry type (slow) and a wet type (faster and more serious)
- Healthy eating and not smoking can help protect your macula

**Diabetic Retinopathy -- Sugar Damages Blood Vessels**

- People with diabetes have too much sugar in their blood
- Over time the sugar hurts the tiny blood vessels in the retina
- Damaged vessels can leak or grow in the wrong places
- This can cause blurry vision or even blindness
- Keeping blood sugar and blood pressure under control helps a lot
- Everyone with diabetes should get an eye exam every year`,
      keyTerms: [
        {
          term: 'cataract',
          definition:
            'A clouding of the lens inside the eye that makes vision foggy and blurry',
        },
        {
          term: 'glaucoma',
          definition:
            'A disease where pressure inside the eye damages the optic nerve, slowly stealing side vision',
        },
        {
          term: 'macular degeneration',
          definition:
            'A condition where the center of the retina wears out, making it hard to see fine details',
        },
        {
          term: 'diabetic retinopathy',
          definition:
            'Eye damage caused by high blood sugar in people with diabetes',
        },
        {
          term: 'retina',
          definition:
            'The light-sensitive layer at the back of the eye that captures images like a camera sensor',
        },
        {
          term: 'optic nerve',
          definition:
            'The nerve cable that carries pictures from the eye to the brain',
        },
      ],
      analogies: [
        'A cataract is like trying to look through a frosted bathroom window -- everything is blurry and washed out.',
        'Glaucoma is like a slow leak in a bicycle tire -- the damage happens so gradually you do not notice until the tire is flat.',
        'Macular degeneration is like a smudge in the center of your glasses -- the edges are fine, but the middle is blurred.',
        'Diabetic retinopathy is like rusty pipes -- high blood sugar corrodes the tiny blood vessels in your eye until they leak.',
      ],
      examples: [
        'A grandmother who says night driving has become difficult and lights have halos may be developing cataracts.',
        'An uncle told he has high eye pressure at a check-up might be at risk for glaucoma, even though he feels fine.',
        'A grandfather who holds his newspaper farther and farther away and still cannot read the words may have macular degeneration.',
        'A person with type 2 diabetes who skips yearly eye exams might not know their retina is being damaged until vision is already lost.',
      ],
      patientCounselingPoints: [
        'Regular eye exams can catch these problems early, before you notice any change in your vision.',
        'Wearing sunglasses, eating fruits and vegetables, not smoking, and controlling blood sugar all protect your eyes.',
        'If you suddenly lose vision, see flashing lights, or notice a curtain over part of your sight, see a doctor right away.',
      ],
    },

    2: {
      level: 2,
      summary:
        'Cataracts involve lens opacification, glaucoma is progressive optic neuropathy usually related to intraocular pressure, AMD causes central retinal degeneration, and diabetic retinopathy results from microvascular damage due to chronic hyperglycemia.',
      explanation: `## Cataracts

The crystalline lens sits behind the iris and focuses light onto the retina. Cataracts develop when lens proteins clump together and become opaque.

**Types:**
- **Nuclear sclerotic:** Yellowing and hardening of the lens center; most common age-related form; may temporarily improve near vision ("second sight")
- **Cortical:** Spoke-like opacities in the lens periphery; associated with UV exposure and diabetes
- **Posterior subcapsular (PSC):** Opacity at the back surface of the lens; associated with steroid use, diabetes, and younger age; affects near vision and causes glare

**Risk factors:** Age (most important), smoking, UV exposure, diabetes, corticosteroid use, trauma, family history

**Treatment:** Surgical removal of the cloudy lens and replacement with an artificial intraocular lens (IOL). Cataract surgery is one of the most commonly performed and successful surgeries in medicine.

## Glaucoma

Glaucoma is a group of optic neuropathies characterized by progressive retinal ganglion cell death and optic disc cupping, usually associated with elevated intraocular pressure (IOP).

**Two main types:**
- **Open-angle (POAG):** Slow, painless drainage blockage; the most common form; peripheral vision lost first
- **Angle-closure:** Sudden blockage of drainage by the iris; causes severe eye pain, redness, headache, nausea, and halos; a medical emergency

**Normal IOP:** 10-21 mmHg (but glaucoma can occur at normal pressures -- "normal-tension glaucoma")

**Treatment ladder:**
1. Eye drops to lower IOP (prostaglandin analogs first-line)
2. Laser treatment (SLT for open-angle; iridotomy for angle-closure)
3. Surgery (trabeculectomy, tube shunts, MIGS)

## Age-Related Macular Degeneration (AMD)

AMD damages the macula -- the central part of the retina responsible for sharp, detailed vision.

**Two forms:**
- **Dry AMD (90% of cases):** Yellow deposits called drusen accumulate under the retina; progresses slowly; can advance to geographic atrophy (permanent RPE and photoreceptor loss)
- **Wet AMD (10% of cases):** Abnormal new blood vessels grow under the retina (choroidal neovascularization); they leak fluid and blood, causing rapid central vision loss

**Risk factors:** Age >60, smoking (strongest modifiable risk), family history, Caucasian race, obesity

**Treatment:**
- Dry AMD: AREDS2 vitamins (vitamins C, E, zinc, lutein, zeaxanthin) slow progression in intermediate stages
- Wet AMD: Anti-VEGF injections (ranibizumab, aflibercept, bevacizumab) shrink abnormal vessels and reduce leakage

## Diabetic Retinopathy

Chronic high blood sugar damages retinal blood vessels, making diabetic retinopathy the leading cause of blindness among working-age adults worldwide.

**Stages:**
1. **Mild nonproliferative (NPDR):** Microaneurysms only
2. **Moderate NPDR:** Microaneurysms, dot-blot hemorrhages, hard exudates, cotton-wool spots
3. **Severe NPDR:** Extensive hemorrhages, venous beading, intraretinal microvascular abnormalities (IRMA) -- high risk of progression
4. **Proliferative (PDR):** New abnormal blood vessels grow on the retina or optic disc; risk of vitreous hemorrhage and tractional retinal detachment

**Diabetic macular edema (DME):** Fluid leaks into the macula at any stage, causing central vision loss. Leading cause of vision loss in diabetic patients.

**Treatment:**
- Blood sugar and blood pressure control are foundational
- Anti-VEGF injections for DME and PDR
- Laser photocoagulation (panretinal for PDR; focal for non-center-involving DME)
- Annual dilated eye exam screening for all diabetic patients`,
      keyTerms: [
        {
          term: 'intraocular lens (IOL)',
          definition:
            'An artificial lens implanted inside the eye during cataract surgery to replace the removed natural lens',
          pronunciation: 'in-trah-OK-yoo-lar',
        },
        {
          term: 'intraocular pressure (IOP)',
          definition:
            'The fluid pressure inside the eye; elevated IOP is the major modifiable risk factor for glaucoma',
        },
        {
          term: 'drusen',
          definition:
            'Yellow lipid-protein deposits under the retina that are an early hallmark of dry age-related macular degeneration',
          pronunciation: 'DROO-zen',
        },
        {
          term: 'choroidal neovascularization (CNV)',
          definition:
            'Growth of abnormal new blood vessels from the choroid into the retina; the defining feature of wet AMD',
        },
        {
          term: 'anti-VEGF injection',
          definition:
            'Medication injected into the eye that blocks vascular endothelial growth factor to stop abnormal blood vessel growth and leakage',
        },
        {
          term: 'microaneurysm',
          definition:
            'Tiny balloon-like swellings in retinal capillaries; the earliest clinical sign of diabetic retinopathy',
        },
        {
          term: 'proliferative diabetic retinopathy',
          definition:
            'Advanced stage of diabetic eye disease in which new fragile blood vessels grow on the retina, risking hemorrhage and detachment',
        },
      ],
      analogies: [
        'Cataract types are like different ways a window fogs: nuclear is like overall yellowing, cortical is frost at the edges, and PSC is a smudge right in the center.',
        'Open-angle glaucoma is like a clogged kitchen drain -- water backs up slowly and you might not notice until the sink overflows.',
        'Angle-closure glaucoma is like someone suddenly blocking the drain completely -- pressure spikes and you have an emergency.',
        'Wet AMD is like tree roots cracking through a sidewalk -- abnormal vessels push up through the retinal layers.',
        'Diabetic retinopathy progression is like a dam developing cracks; first small leaks (microaneurysms), then bigger leaks (hemorrhages), and eventually the dam structure weakens enough to need emergency repair.',
      ],
    },

    3: {
      level: 3,
      summary:
        'Cataract pathophysiology involves crystallin protein aggregation, glaucoma centers on trabecular meshwork dysfunction and retinal ganglion cell apoptosis, AMD pathology involves drusen composition and RPE-Bruch membrane interactions, and diabetic retinopathy follows a predictable microvascular progression driven by VEGF.',
      explanation: `## Cataract -- Lens Crystallin Proteins and Opacification

**Lens biochemistry:**
The lens is composed of ~65% water and ~35% protein -- the highest protein concentration of any tissue. Three families of crystallin proteins maintain transparency:

| Crystallin | Molecular Weight | Role |
|-----------|-----------------|------|
| Alpha (alpha-A, alpha-B) | 800 kDa oligomer | Molecular chaperone; prevents protein aggregation |
| Beta | 50-200 kDa | Structural; intermediate refractive index |
| Gamma | 20 kDa monomer | Highest refractive index; concentrated in lens nucleus |

**Cataractogenesis pathway:**
1. Age, UV, oxidative stress cause post-translational modifications (oxidation, deamidation, truncation)
2. Modified proteins misfold and aggregate
3. Alpha-crystallin chaperone capacity becomes overwhelmed
4. Aggregates exceed the wavelength of visible light (~400-700 nm)
5. Light scattering produces lens opacity

**Surgical technique -- Phacoemulsification:**
- Clear corneal incision (2.2-2.8 mm temporal)
- Continuous curvilinear capsulorhexis (CCC) in anterior capsule
- Hydrodissection to separate lens from capsule
- Ultrasonic probe fragments and aspirates lens nucleus
- Cortex aspiration
- Foldable IOL inserted into capsular bag
- Self-sealing incision (usually no sutures)
- Posterior capsule opacification (PCO) in 20-40%; treated with YAG laser capsulotomy

## Glaucoma -- Aqueous Humor Dynamics and Optic Nerve Damage

**Aqueous humor pathway:**
- Produced by ciliary epithelium at ~2.5 microL/min
- Flows: posterior chamber -> through pupil -> anterior chamber
- Exits via two routes:
  - **Trabecular (conventional):** Trabecular meshwork -> Schlemm canal -> collector channels -> episcleral veins (handles ~90% of outflow)
  - **Uveoscleral (unconventional):** Through ciliary muscle interstitial spaces (~10%)
- IOP = rate of aqueous production / rate of outflow + episcleral venous pressure

**Trabecular meshwork (TM) dysfunction in POAG:**
- Increased extracellular matrix (ECM) deposition in juxtacanalicular tissue
- TGF-beta2 elevated in glaucomatous aqueous humor
- Reduced TM cellularity with age
- Result: Increased outflow resistance -> elevated IOP

**Optic nerve damage:**
- Elevated IOP causes mechanical compression and ischemia at the lamina cribrosa
- Retinal ganglion cell (RGC) axons are disrupted
- Progressive optic disc cupping (increased cup-to-disc ratio)
- Retinal nerve fiber layer (RNFL) thinning detectable on OCT

**Visual field testing (Humphrey 24-2):**
- Detects functional vision loss corresponding to RGC damage
- Classic patterns: Arcuate scotomas, nasal step, paracentral defects
- Mean deviation (MD) quantifies overall field loss
- Pattern standard deviation (PSD) identifies localized defects

**Medical treatment by mechanism:**
| Drug Class | Mechanism | Example |
|-----------|-----------|---------|
| Prostaglandin analogs | Increase uveoscleral outflow | Latanoprost, travoprost |
| Beta-blockers | Decrease aqueous production | Timolol |
| Alpha-agonists | Decrease production + increase uveoscleral outflow | Brimonidine |
| Carbonic anhydrase inhibitors | Decrease aqueous production | Dorzolamide |
| Rho-kinase inhibitors | Increase trabecular outflow | Netarsudil |

## AMD -- Drusen, RPE, and Neovascularization

**Drusen composition and significance:**
- Located between the retinal pigment epithelium (RPE) and Bruch membrane
- Composed of lipids, complement components (C3, C5, CFH), amyloid-beta, apolipoprotein E, and cellular debris
- Represent RPE metabolic waste that cannot cross a thickened Bruch membrane
- Size classification: Small (<63 micrometers, normal aging), intermediate (63-124), large (>=125, high risk)
- Large/confluent drusen strongly predict progression to advanced AMD

**RPE and Bruch membrane:**
- RPE performs critical functions: photoreceptor outer segment phagocytosis, visual cycle (retinoid processing), ion and fluid transport, light absorption
- Bruch membrane thickens and calcifies with age, impeding RPE-choroid metabolic exchange
- RPE dysfunction and death leads to geographic atrophy (advanced dry AMD)

**VEGF in neovascular (wet) AMD:**
- Hypoxia and RPE stress upregulate vascular endothelial growth factor (VEGF-A)
- VEGF-A drives choroidal neovascularization (CNV) through Bruch membrane
- New vessels are immature and leaky -- subretinal fluid, intraretinal fluid, hemorrhage
- VEGF also increases vascular permeability via fenestration and tight junction disruption

**OCT interpretation in AMD:**
- Drusen: RPE elevations with medium reflectivity
- Geographic atrophy: Loss of RPE and outer retinal bands; choroidal hyperreflectivity (window defect)
- Active wet AMD: Subretinal fluid (dark space below retina), intraretinal fluid (cystoid spaces), sub-RPE fluid (pigment epithelial detachment)

## Diabetic Retinopathy -- Microvascular Pathology and VEGF

**ETDRS staging system:**
| Stage | Key Findings | Risk of Progression |
|-------|-------------|-------------------|
| Mild NPDR | Microaneurysms only | Low |
| Moderate NPDR | Microaneurysms + hemorrhages, hard exudates, cotton-wool spots | Moderate |
| Severe NPDR | 4-2-1 rule (hemorrhages in 4 quadrants, venous beading in 2, IRMA in 1) | ~50% to PDR in 1 year |
| Proliferative DR | Neovascularization of disc (NVD) or elsewhere (NVE), vitreous hemorrhage | High -- requires treatment |

**4-2-1 rule for severe NPDR:**
Any ONE of these findings qualifies:
- Diffuse hemorrhages/microaneurysms in all 4 retinal quadrants
- Venous beading in 2 or more quadrants
- Prominent IRMA in 1 or more quadrants

**VEGF in diabetic retinopathy:**
- Pericyte loss is the earliest histologic change (pericytes normally stabilize capillaries)
- Capillary basement membrane thickening -> endothelial dysfunction -> capillary non-perfusion
- Retinal hypoxia activates HIF-1-alpha -> massive VEGF upregulation
- VEGF drives neovascularization (PDR) and vascular permeability (DME)

**Visual field testing relevance:**
- Post-PRP patients lose peripheral visual field (expected trade-off for preventing PDR complications)
- Central field preserved unless macular edema or ischemia develop`,
      keyTerms: [
        {
          term: 'crystallin proteins',
          definition:
            'The major structural proteins of the lens (alpha, beta, gamma families) that maintain transparency; alpha-crystallin also functions as a molecular chaperone preventing protein aggregation',
        },
        {
          term: 'phacoemulsification',
          definition:
            'Standard cataract surgery technique using ultrasonic energy to fragment the lens nucleus through a small incision, followed by aspiration and IOL implantation',
          pronunciation: 'FAK-oh-ee-mul-sih-fih-KAY-shun',
        },
        {
          term: 'trabecular meshwork',
          definition:
            'Sieve-like drainage tissue at the iridocorneal angle responsible for approximately 90% of aqueous humor outflow; its dysfunction is central to open-angle glaucoma',
        },
        {
          term: 'retinal pigment epithelium (RPE)',
          definition:
            'Pigmented cell monolayer beneath photoreceptors providing metabolic support, phagocytosis of outer segments, and visual cycle functions; its degeneration underlies AMD',
        },
        {
          term: 'VEGF (vascular endothelial growth factor)',
          definition:
            'Signaling protein that stimulates blood vessel growth and increases vascular permeability; pathologically elevated in wet AMD and diabetic retinopathy',
        },
        {
          term: 'Humphrey visual field (24-2)',
          definition:
            'Standard automated perimetry test measuring the central 24 degrees of the visual field; used to detect and monitor glaucomatous functional loss',
        },
        {
          term: 'ETDRS classification',
          definition:
            'Early Treatment Diabetic Retinopathy Study staging system for grading diabetic retinopathy severity from mild NPDR through proliferative disease',
        },
        {
          term: 'geographic atrophy',
          definition:
            'Well-demarcated area of RPE and photoreceptor loss in advanced dry AMD, causing irreversible central scotoma',
        },
      ],
      clinicalNotes:
        'The 4-2-1 rule for severe NPDR is a critical clinical milestone: hemorrhages/microaneurysms in all 4 quadrants, venous beading in 2+ quadrants, or IRMA in 1+ quadrant. Any ONE finding qualifies, and the risk of progression to PDR within 1 year is approximately 50%. These patients need close follow-up or consideration of anti-VEGF therapy.',
    },

    4: {
      level: 4,
      summary:
        'Graduate-level understanding integrates phacoemulsification technique and IOL calculations, trabecular meshwork molecular pathology and MIGS mechanisms, complement cascade dysregulation in AMD, and anti-VEGF pharmacology including bispecific agents and landmark clinical trials.',
      explanation: `## Cataract -- Phacoemulsification Technique and Advanced IOL Selection

**Phacoemulsification parameters:**
- Ultrasonic frequency: 28-40 kHz; longitudinal or torsional (Ozil) handpiece
- Divide-and-conquer or phaco chop nucleofractis techniques
- Effective phaco time (EPT): Metric for ultrasonic energy delivered; lower = less endothelial damage
- Intraoperative floppy iris syndrome (IFIS): Associated with tamsulosin (alpha-1A blocker); manage with iris hooks or Malyugin ring

**IOL power calculation:**
- Biometry: Optical (IOLMaster 700, Lenstar) measures axial length, keratometry, anterior chamber depth, lens thickness, white-to-white distance
- Modern formulas: Barrett Universal II, Hill-RBF, Kane -- all use multiple biometric parameters
- Post-refractive surgery eyes: Require special formulas (Barrett True-K, Haigis-L) because standard keratometry overestimates corneal power after myopic LASIK/PRK

**Premium IOL options:**
| IOL Type | Optical Principle | Best Candidate | Limitation |
|---------|------------------|---------------|-----------|
| Monofocal | Single focal point | Standard; predictable | Spectacle-dependent for near or distance |
| Multifocal | Diffractive or refractive rings | Motivated, low astigmatism | Halos, reduced contrast sensitivity |
| Extended depth of focus (EDOF) | Elongated focal range | Intermediate + distance tasks | Near may require readers |
| Toric | Cylindrical correction | Corneal astigmatism >1.0 D | Rotational misalignment degrades correction |
| Light-adjustable (RxSight LAL) | UV-adjustable polymer | Post-refractive, demanding expectations | Requires UV protection until lock-in treatments |

**Complications:** Posterior capsule rupture (1-2%), endophthalmitis (1:3000), cystoid macular edema (1-2%), IOL dislocation, retinal detachment (long-term)

## Glaucoma -- Trabecular Meshwork Molecular Dysfunction and MIGS

**Molecular pathology of TM in POAG:**
- TGF-beta2 concentration 2-3x elevated in glaucomatous aqueous
- Downstream effects: Increased fibronectin, collagen IV, PAI-1 deposition in juxtacanalicular ECM
- Cross-linking of ECM proteins reduces tissue compliance
- TM cell loss (0.58%/year normally; accelerated in glaucoma)
- Rho/ROCK pathway activation increases cytoskeletal contractility -> Schlemm canal narrowing

**Target IOP determination:**
- Based on baseline IOP, severity of damage, rate of progression, life expectancy
- General targets: 20-30% reduction from baseline for early disease; 40-50% for advanced
- Normal-tension glaucoma: Target >30% reduction (CNTGS trial demonstrated benefit)

**OCT biomarkers for progression:**
- RNFL thickness: Normal aging ~0.5 micrometers/year; >1 micrometer/year suggests progression
- Ganglion cell-inner plexiform layer (GCIPL): Earlier macular damage detection
- Bruch membrane opening minimum rim width (BMO-MRW): Better structure-function correlation than traditional C/D ratio

**Minimally Invasive Glaucoma Surgery (MIGS):**
| Procedure | Target | Mechanism | IOP Reduction | Ideal Candidate |
|-----------|--------|-----------|--------------|----------------|
| iStent inject W | Schlemm canal | Trabecular bypass stents | 20-30% | Mild-moderate OAG + cataract |
| Hydrus Microstent | Schlemm canal | 8 mm scaffold spanning 90 degrees of canal | 25-35% | Mild-moderate OAG + cataract |
| Kahook Dual Blade (KDB) | Trabecular meshwork | Goniotomy (TM excision) | 20-30% | OAG; stand-alone or combined |
| XEN gel stent | Subconjunctival space | Ab interno gel microstent | 30-40% | Moderate OAG; bleb-forming |
| OMNI system | Schlemm canal + TM | Canaloplasty + trabeculotomy | 25-35% | OAG; stand-alone |

**When MIGS is insufficient:** Step up to trabeculectomy (gold standard filtration surgery) or tube shunt (Ahmed valve, Baerveldt implant) for moderate-advanced disease.

## AMD -- Complement Pathway and Anti-VEGF Mechanisms

**Complement cascade dysregulation:**
- CFH Y402H polymorphism (chromosome 1): Impairs factor H regulatory function at Bruch membrane -> uncontrolled complement activation -> chronic inflammation
- ARMS2/HTRA1 (chromosome 10): Second major genetic risk locus; linked to mitochondrial dysfunction and RPE stress
- C3, CFI, CFB additional risk variants
- Result: Complement membrane attack complex (MAC) deposition, RPE damage, drusen formation, and inflammation

**Anti-VEGF agents -- Mechanism and dosing:**
| Agent | Target | Molecular Type | Standard Interval | Key Trial |
|-------|--------|---------------|-------------------|-----------|
| Ranibizumab (Lucentis) | VEGF-A | Fab fragment | Monthly or q8w | MARINA, ANCHOR |
| Aflibercept 2 mg (Eylea) | VEGF-A, VEGF-B, PlGF | Fusion protein (VEGF trap) | q8w after loading | VIEW 1/2 |
| Bevacizumab (Avastin) | VEGF-A | Full-length antibody (off-label) | Monthly | CATT |
| Brolucizumab (Beovu) | VEGF-A | scFv (26 kDa) | q8-12w | HAWK/HARRIER |
| Faricimab (Vabysmo) | VEGF-A + Ang-2 | Bispecific antibody | Up to q16w | TENAYA/LUCERNE |
| Aflibercept 8 mg (Eylea HD) | VEGF-A, VEGF-B, PlGF | High-dose fusion protein | q12-16w | PULSAR |

**Faricimab bispecific mechanism:**
- Simultaneously blocks VEGF-A (anti-angiogenic) and angiopoietin-2 (vascular destabilizer)
- Ang-2 blockade restores Tie2 receptor signaling, tightening endothelial junctions
- Dual mechanism enables extended treatment intervals (up to 16 weeks)

**OCT-guided treatment strategies:**
- Treat-and-extend: Gradually increase injection interval if OCT shows dry macula; reduce if fluid recurs
- Pro re nata (PRN): Inject only when fluid detected on OCT
- Fixed dosing: Monthly injections regardless of OCT findings
- Treat-and-extend now preferred: Reduces visit burden while maintaining visual outcomes

**Complement therapeutics for geographic atrophy:**
- Pegcetacoplan (Syfovre): C3 inhibitor; monthly or bimonthly intravitreal injection; OAKS/DERBY trials showed ~20-30% reduction in GA growth over 2 years
- Avacincaptad pegol (Izervay): C5 inhibitor; monthly injection; GATHER trials showed similar GA growth reduction

## Diabetic Retinopathy -- Advanced Pharmacology and Landmark Trials

**Pathophysiologic cascade:**
1. Hyperglycemia activates four damaging pathways: polyol (sorbitol), advanced glycation end-products (AGE), protein kinase C (PKC), hexosamine
2. Pericyte apoptosis -> capillary basement membrane thickening -> microaneurysm formation
3. Leukostasis: Activated leukocytes adhere to endothelium -> capillary non-perfusion
4. ICAM-1, VCAM-1 upregulation; endothelial nitric oxide synthase dysfunction
5. Progressive ischemia -> HIF-1-alpha stabilization -> VEGF, erythropoietin, PDGF overexpression
6. VEGF drives neovascularization (PDR) and blood-retinal barrier breakdown (DME)
7. Retinal neurodegeneration: RGC apoptosis may precede detectable vascular changes

**DRCR Retina Network landmark trials:**
| Protocol | Comparison | Key Finding |
|----------|-----------|-------------|
| Protocol I | Ranibizumab +/- laser vs laser alone for DME | Ranibizumab superior for visual acuity |
| Protocol T | Aflibercept vs bevacizumab vs ranibizumab for DME | Aflibercept best when baseline VA <=20/50; all equivalent at >=20/40 |
| Protocol S | Anti-VEGF vs PRP for PDR | Non-inferior; fewer side effects with anti-VEGF |
| Protocol V | Observation vs aflibercept vs laser for CI-DME with good VA (>=20/25) | Observation reasonable initially; many need treatment within 2 years |
| Protocol W | Aflibercept for moderate-severe NPDR without DME | Reduced PDR development and CI-DME; visual outcomes similar at 2 years |
| Protocol AC | Aflibercept 8 mg vs 2 mg for DME | 8 mg non-inferior with extended dosing |

**Panretinal photocoagulation (PRP):**
- Standard for PDR, especially with poor follow-up compliance
- 1200-1600 burns (500 micrometers, 0.1s, moderate intensity) to peripheral retina
- Mechanism: Ablates ischemic retina, reducing VEGF production
- Side effects: Peripheral visual field constriction, reduced night vision, macular edema exacerbation
- Anti-VEGF increasingly used as alternative (Protocol S) but requires ongoing injections`,
      keyTerms: [
        {
          term: 'MIGS',
          definition:
            'Minimally Invasive Glaucoma Surgery; a group of procedures enhancing aqueous outflow with minimal tissue disruption, suitable for mild-to-moderate glaucoma, often combined with cataract surgery',
        },
        {
          term: 'faricimab',
          definition:
            'First bispecific antibody approved for retinal disease, targeting both VEGF-A and angiopoietin-2 simultaneously; enables extended dosing intervals up to 16 weeks in wet AMD and DME',
          pronunciation: 'far-ih-SIM-ab',
        },
        {
          term: 'complement factor H (CFH)',
          definition:
            'Key negative regulator of the complement alternative pathway; the Y402H polymorphism impairs its function and is the strongest genetic risk factor for AMD',
        },
        {
          term: 'pegcetacoplan',
          definition:
            'C3 complement inhibitor approved for geographic atrophy; reduces GA lesion growth rate by approximately 20-30% (OAKS/DERBY trials)',
          pronunciation: 'peg-SET-ah-KOH-plan',
        },
        {
          term: 'Barrett Universal II',
          definition:
            'Modern IOL power calculation formula using theoretical ray tracing; regarded as the most accurate across a wide range of axial lengths and keratometry values',
        },
        {
          term: 'HIF-1-alpha',
          definition:
            'Hypoxia-inducible factor 1-alpha; master transcriptional regulator stabilized under hypoxic conditions that drives VEGF and erythropoietin upregulation in diabetic retinopathy',
        },
        {
          term: 'OCT angiography (OCTA)',
          definition:
            'Non-invasive imaging technique detecting erythrocyte motion to visualize retinal and choroidal vasculature without fluorescein dye injection',
        },
        {
          term: 'treat-and-extend',
          definition:
            'Anti-VEGF dosing strategy that gradually lengthens injection intervals when the macula is dry on OCT, balancing efficacy with reduced treatment burden',
        },
      ],
      clinicalNotes:
        'DRCR.net Protocol S established anti-VEGF as non-inferior to PRP for proliferative DR, with fewer adverse effects (less peripheral field loss, less macular edema). However, PRP remains preferred for patients with poor follow-up compliance because a single treatment session provides durable regression of neovascularization. Protocol T showed aflibercept was superior to bevacizumab and ranibizumab when baseline visual acuity was 20/50 or worse, but all three agents were equivalent at 20/40 or better.',
    },

    5: {
      level: 5,
      summary:
        'Expert-level management encompasses femtosecond laser cataract surgery, novel MIGS platforms, gene therapy for retinal disease, sustained-release drug delivery systems, retinal prosthetics, and AI-driven screening algorithms transforming diabetic retinopathy detection.',
      explanation: `## Cataract -- Femtosecond Laser-Assisted Surgery and Next-Generation IOLs

**Femtosecond laser-assisted cataract surgery (FLACS):**
- Laser performs corneal incisions, capsulotomy, and lens fragmentation with micrometer precision
- Capsulotomy: More circular, centered, and reproducible than manual CCC
- Lens pre-fragmentation: Reduces ultrasonic phaco energy, potentially protecting endothelium
- Arcuate keratotomies: Astigmatism correction at the time of cataract surgery
- Clinical reality: RCTs (FEMCAT, FACT) show comparable visual outcomes to standard phaco; higher cost limits adoption; potential benefit in complex cases (dense cataracts, Fuchs dystrophy)

**Next-generation IOL technology:**
- Light-adjustable lens (RxSight LAL): UV-responsive photosensitive polymer; power adjusted post-operatively with 3 light treatments; FDA-approved; excellent for post-refractive surgery eyes
- Accommodating IOLs (investigational): Mechatronic and fluid-optic designs attempting to restore dynamic focusing
- Small-aperture IOLs (IC-8 Apthera): Pinhole optics extending depth of focus; useful for mild-moderate corneal irregularity
- Pharmacological cataract prevention (research): Lanosterol and oxysterol eye drops showed lens clearing in animal models; Phase I human trials initiated

## Glaucoma -- MIGS Evolution, Sustained Delivery, and Neuroprotection

**Advanced MIGS procedures:**
- Ab interno canaloplasty (ABiC): Viscoelastic dilation of Schlemm canal 360 degrees; addresses both TM and distal outflow
- Endocyclophotocoagulation (ECP): Intraocular ciliary process ablation combined with cataract surgery; reduces aqueous production
- MIGS classification by target:
  - Schlemm canal/TM: iStent, Hydrus, KDB, OMNI, ABiC
  - Suprachoroidal: CyPass (withdrawn due to endothelial cell loss), iStent Supra (investigational)
  - Subconjunctival: XEN gel stent, PreserFlo MicroShunt (PTFE microstent; promising data from IMP2 trial)

**Sustained-release IOP-lowering:**
- Bimatoprost intracameral implant (Durysta): 10 microgram biodegradable implant; 4-6 months IOP control; first intracameral sustained-release glaucoma therapy
- Travoprost intracameral (iDose TR): Titanium reservoir eluting travoprost; Phase III showed sustained IOP reduction over 12 months
- Environmental drug delivery (investigational): Punctal plugs releasing latanoprost, contact lens-based delivery systems

**Neuroprotection beyond IOP:**
- Brimonidine: Alpha-2 agonist with possible neuroprotective effect (Low-Pressure Glaucoma Treatment Study showed field preservation vs timolol)
- Nicotinamide (vitamin B3): NAD+ precursor; Phase II data (Glaucoma Research Foundation/NICOX study) showed improved retinal function on electroretinography
- Citicoline: Mitochondrial support; European trials show possible visual field benefit
- Challenges: No Phase III neuroprotection trial has succeeded to date; IOP lowering remains the only proven strategy

**Genetic architecture of glaucoma:**
| Gene | Mechanism | Glaucoma Type |
|------|-----------|--------------|
| MYOC | ER stress in TM cells | Juvenile/adult POAG (3-5% of POAG) |
| OPTN | Autophagy dysregulation | Normal-tension glaucoma |
| TBK1 | Autophagy pathway (gene duplication) | Normal-tension glaucoma |
| LOXL1 | Elastin metabolism | Pseudoexfoliation glaucoma |
| CYP1B1 | Anterior segment development | Primary congenital glaucoma |

## AMD -- Gene Therapy, Port Delivery, and Retinal Prosthetics

**Gene therapy for wet AMD:**
- ADVM-022 (Adverum): AAV2.7m8-aflibercept; single intravitreal injection produces endogenous anti-VEGF; OPTIC trial demonstrated sustained VEGF suppression >2 years; dose-limiting inflammation observed at higher doses
- RGX-314 (REGENXBIO): AAV8-anti-VEGF Fab; delivered subretinally or suprachoroidally; ATMOSPHERE and AAVIATE trials evaluating efficacy
- Concept: Convert chronic injection burden into a one-time gene therapy producing continuous anti-VEGF protein

**Port delivery system (PDS) with ranibizumab (Susvimo):**
- Surgically implanted scleral reservoir continuously releasing ranibizumab into the vitreous
- Refill every 6 months via office-based procedure (ARCHWAY trial demonstrated non-inferiority to monthly ranibizumab)
- Temporarily withdrawn due to septum integrity issues; redesigned version in development
- Paradigm: Hardware-based sustained delivery as bridge between injections and gene therapy

**Complement therapeutics landscape for geographic atrophy:**
| Target | Drug | Status | Key Data |
|--------|------|--------|----------|
| C3 | Pegcetacoplan (Syfovre) | FDA approved | ~20-30% GA growth reduction (OAKS/DERBY) |
| C5 | Avacincaptad pegol (Izervay) | FDA approved | ~22% GA growth reduction (GATHER1/2) |
| CFD | Lampalizumab | Phase III failed | SPECTRI/CHROMA: No efficacy signal |
| CFB | Iptacopan | Phase II | Oral complement inhibitor |
| C3 gene therapy | GT005 (AAV2-CFI) | Phase II | Subretinal delivery |

**Retinal prosthetics and vision restoration:**
- Argus II (epiretinal, 60 electrodes): FDA approved 2013; company discontinued; demonstrated proof of concept
- PRIMA (Pixium Vision): Subretinal photovoltaic array; 378 pixels per implant; infrared light-activated; no connecting cable; Phase III results promising for GA
- Cortical prostheses (Orion, Cortivis): Bypass the eye entirely; electrodes in V1 cortex; potential for all causes of blindness including optic nerve damage
- Optogenetics: Introducing light-sensitive proteins (channelrhodopsins) into remaining retinal cells; PIONEER Phase I/II trial (GS030, GenSight Biologics) showed partial vision restoration in RP patient

## Diabetic Retinopathy -- AI Screening and Novel Therapeutic Targets

**AI-based autonomous screening:**
- IDx-DR (Digital Diagnostics/LumineticsCore): First FDA-cleared autonomous AI for DR detection (2018)
  - Sensitivity >87%, specificity >90% for more-than-mild DR
  - Point-of-care deployment in primary care with non-mydriatic fundus camera
  - No specialist needed to interpret -- AI gives go/no-go referral decision
- EyeArt (Eyenuk): FDA-cleared; 91% sensitivity for referable DR
- Google/Verily deep learning: Validated in India and Thailand studies; comparable to retinal specialists
- Impact: Enables DR screening in underserved populations where ophthalmologists are unavailable

**Novel therapeutic targets beyond VEGF:**
- Angiopoietin-2/Tie2 pathway: Faricimab (approved); AXT107 (peptide Tie2 activator, Phase I)
- Plasma kallikrein inhibitors: Target vascular permeability pathway independent of VEGF; potentially additive to anti-VEGF
- Integrin antagonists: THR-687 (pan-RGD integrin), risuteganib; Phase II data mixed
- Retinal neurodegeneration: Brimonidine, citicoline, erythropoietin; recognizing that DR has a neurodegenerative component preceding vascular changes
- Fenofibrate: ACCORD-Eye and FIELD trials showed ~40% reduction in DR progression independent of lipid levels; mechanism may involve PPAR-alpha-mediated anti-inflammatory effects

**Sustained-release platforms for the posterior segment:**
- Dexamethasone intravitreal implant (Ozurdex): Biodegradable PLGA polymer; 4-6 month duration; for DME, RVO, uveitis
- Fluocinolone acetonide implant (Iluvien): Non-biodegradable; up to 36 months; for chronic DME
- Port delivery system (ranibizumab): 6-month continuous anti-VEGF release (see AMD section)
- Gene therapy as ultimate sustained delivery: Single subretinal or intravitreal injection producing endogenous therapeutic protein indefinitely

**Prevention and systemic management evidence:**
| Trial | Key Finding |
|-------|-------------|
| DCCT/EDIC | Intensive glycemic control in T1D -> 76% risk reduction in DR development |
| UKPDS | Intensive control in T2D -> 25% microvascular risk reduction |
| ACCORD-Eye | Fenofibrate + statin -> 40% reduction in DR progression |
| FIELD | Fenofibrate monotherapy -> reduced need for laser |
| DRCR Protocol W | Anti-VEGF for moderate-severe NPDR without DME -> reduced PDR development |

## Cross-Cutting Expert Themes

**Precision ophthalmology:**
- Pharmacogenomics: CFH/ARMS2 genotype may influence anti-VEGF response in AMD; VEGF polymorphisms may predict treatment needs in DME
- OCT-based biomarkers: Fluid patterns, hyperreflective foci, and ellipsoid zone integrity predict treatment response and prognosis
- AI-optimized treatment algorithms: Machine learning models predicting optimal injection intervals and treatment switching decisions

**Telemedicine and global impact:**
- Store-and-forward retinal imaging programs expand DR screening to rural areas
- AI-augmented telemedicine: Fundus cameras in pharmacies and primary care clinics with automated triage
- WHO estimates 2.2 billion people have vision impairment; cataract and uncorrected refractive error account for the majority of avoidable cases globally`,
      keyTerms: [
        {
          term: 'femtosecond laser-assisted cataract surgery (FLACS)',
          definition:
            'Cataract surgery technique using femtosecond laser for corneal incisions, capsulotomy, and lens fragmentation with micrometer precision; offers reproducibility advantages over manual techniques',
        },
        {
          term: 'IDx-DR (LumineticsCore)',
          definition:
            'First FDA-cleared autonomous AI diagnostic system for detecting more-than-mild diabetic retinopathy at the point of care without requiring specialist interpretation',
        },
        {
          term: 'ADVM-022',
          definition:
            'Intravitreal AAV gene therapy producing endogenous aflibercept from a single injection; designed to eliminate chronic anti-VEGF injection burden in wet AMD',
        },
        {
          term: 'port delivery system (PDS)',
          definition:
            'Surgically implanted scleral reservoir continuously releasing ranibizumab into the vitreous cavity; refilled every 6 months to reduce treatment visits',
        },
        {
          term: 'PreserFlo MicroShunt',
          definition:
            'PTFE-based ab externo micro-drainage device creating a subconjunctival bleb for IOP reduction in moderate-to-advanced glaucoma; potential alternative to trabeculectomy',
        },
        {
          term: 'optogenetics for vision restoration',
          definition:
            'Experimental gene therapy introducing light-sensitive channelrhodopsin proteins into surviving retinal neurons to restore vision in degenerative retinal diseases',
        },
        {
          term: 'retinal prosthetic (bionic eye)',
          definition:
            'Electronic implant (epiretinal, subretinal, or cortical) that converts camera-captured images into electrical signals stimulating remaining visual pathway neurons',
        },
        {
          term: 'fenofibrate in DR',
          definition:
            'Fibrate lipid medication shown in ACCORD-Eye and FIELD trials to reduce diabetic retinopathy progression by approximately 40%, likely through PPAR-alpha anti-inflammatory mechanisms independent of lipid effects',
        },
      ],
      clinicalNotes: `Expert Clinical Pearls:
1. Complement inhibitors (pegcetacoplan, avacincaptad pegol) for GA represent the first approved treatments for dry AMD; counsel patients on realistic expectations (~20-30% lesion growth reduction, not vision restoration)
2. Anti-VEGF gene therapy (ADVM-022, RGX-314) may transform wet AMD management from chronic injections to single treatment; monitor closely for inflammation
3. IDx-DR autonomous AI screening is deployable in primary care with non-mydriatic cameras; most impactful in populations with limited ophthalmology access
4. Fenofibrate shows consistent DR benefit independent of lipid levels (ACCORD-Eye, FIELD); consider as adjunct in patients with moderate NPDR
5. MIGS procedures are best combined with cataract surgery in mild-to-moderate glaucoma; set realistic IOP reduction expectations (20-35%) versus traditional filtration surgery (40-60%)
6. Light-adjustable IOLs (RxSight) allow post-operative refractive customization, particularly valuable in post-refractive surgery eyes with unpredictable IOL calculations
7. Protocol W suggests anti-VEGF may have a role as prophylaxis in eyes with moderate-severe NPDR even without DME, but cost-effectiveness remains debated
8. PRIMA subretinal prosthetic and optogenetic approaches represent the frontier of vision restoration for end-stage retinal degeneration; both require residual retinal circuitry or intact visual cortex respectively`,
    },
  },

  media: [
    {
      id: 'cataract-types-diagram',
      type: 'diagram',
      filename: 'cataract-types.svg',
      title: 'Types of Cataracts',
      description:
        'Diagram showing nuclear sclerotic, cortical, and posterior subcapsular cataract morphology within the lens',
    },
    {
      id: 'glaucoma-optic-disc-cupping',
      type: 'image',
      filename: 'glaucoma-optic-disc-cupping.svg',
      title: 'Glaucomatous Optic Disc Cupping',
      description:
        'Comparison of normal optic disc versus glaucomatous disc with increased cup-to-disc ratio and RNFL loss',
    },
    {
      id: 'amd-dry-wet-comparison',
      type: 'diagram',
      filename: 'amd-dry-wet-comparison.svg',
      title: 'Dry vs Wet AMD',
      description:
        'Cross-sectional diagrams showing drusen accumulation in dry AMD and choroidal neovascularization in wet AMD',
    },
    {
      id: 'diabetic-retinopathy-stages-fundus',
      type: 'image',
      filename: 'diabetic-retinopathy-stages-fundus.svg',
      title: 'Fundus Findings in Diabetic Retinopathy Stages',
      description:
        'Fundus photographs showing progression from microaneurysms through neovascularization',
    },
    {
      id: 'oct-amd-fluid',
      type: 'image',
      filename: 'oct-amd-fluid.svg',
      title: 'OCT Interpretation in AMD',
      description:
        'OCT cross-sections demonstrating drusen, subretinal fluid, intraretinal fluid, and pigment epithelial detachment',
    },
  ],

  citations: [
    {
      id: 'aao-ppp-cataract',
      type: 'article',
      title: 'Cataract in the Adult Eye Preferred Practice Pattern',
      authors: ['American Academy of Ophthalmology'],
      source: 'Ophthalmology',
      url: 'https://doi.org/10.1016/j.ophtha.2021.12.006',
    },
    {
      id: 'aao-ppp-glaucoma-2024',
      type: 'article',
      title: 'Primary Open-Angle Glaucoma Preferred Practice Pattern',
      authors: ['American Academy of Ophthalmology'],
      source: 'Ophthalmology',
      url: 'https://doi.org/10.1016/j.ophtha.2020.10.024',
    },
    {
      id: 'drcr-protocol-t',
      type: 'article',
      title:
        'Aflibercept, Bevacizumab, or Ranibizumab for Diabetic Macular Edema (Protocol T)',
      authors: ['DRCR.net'],
      source: 'New England Journal of Medicine',
      url: 'https://doi.org/10.1056/NEJMoa1414264',
    },
    {
      id: 'areds2-jama',
      type: 'article',
      title:
        'Lutein + Zeaxanthin and Omega-3 Fatty Acids for Age-Related Macular Degeneration (AREDS2)',
      source: 'JAMA',
      url: 'https://doi.org/10.1001/jama.2013.4997',
    },
    {
      id: 'oaks-derby-pegcetacoplan',
      type: 'article',
      title:
        'Pegcetacoplan for Geographic Atrophy Secondary to Age-Related Macular Degeneration (OAKS and DERBY)',
      source: 'Ophthalmology',
      url: 'https://doi.org/10.1016/j.ophtha.2023.02.016',
    },
    {
      id: 'drcr-protocol-s',
      type: 'article',
      title:
        'Panretinal Photocoagulation vs Intravitreous Ranibizumab for Proliferative Diabetic Retinopathy (Protocol S)',
      authors: ['DRCR.net'],
      source: 'JAMA',
      url: 'https://doi.org/10.1001/jama.2015.15217',
    },
  ],

  crossReferences: [
    {
      targetId: 'ophthalmology-eye-anatomy',
      targetType: 'structure',
      relationship: 'related',
      label: 'Eye Anatomy',
    },
    {
      targetId: 'ophthalmology-common-conditions',
      targetType: 'condition',
      relationship: 'sibling',
      label: 'Common Conditions (includes refractive errors)',
    },
    {
      targetId: 'endocrinology-diabetes-complications',
      targetType: 'condition',
      relationship: 'related',
      label: 'Diabetes Complications',
    },
    {
      targetId: 'cardiovascular-hypertension',
      targetType: 'condition',
      relationship: 'related',
      label: 'Hypertension and Retinal Vascular Disease',
    },
    {
      targetId: 'pharmacology-anti-vegf',
      targetType: 'topic',
      relationship: 'related',
      label: 'Anti-VEGF Pharmacology',
    },
  ],

  tags: {
    systems: ['visual'],
    topics: ['pathology', 'pharmacology', 'surgery', 'screening', 'genetics'],
    keywords: [
      'cataracts',
      'glaucoma',
      'macular degeneration',
      'AMD',
      'diabetic retinopathy',
      'anti-VEGF',
      'phacoemulsification',
      'MIGS',
      'gene therapy',
      'AI screening',
      'complement pathway',
      'IOL',
      'OCT',
    ],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['ophthalmology', 'medicine', 'family-medicine', 'surgery'],
    },
  },

  createdAt: '2026-01-30T00:00:00.000Z',
  updatedAt: '2026-01-30T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default commonEyeConditions;
