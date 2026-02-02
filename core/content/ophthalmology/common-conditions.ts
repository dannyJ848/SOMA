/**
 * Common Eye Conditions - Ophthalmology
 *
 * Comprehensive content covering refractive errors (myopia, hyperopia, astigmatism),
 * cataracts, glaucoma, macular degeneration, and diabetic retinopathy.
 */

import { EducationalContent } from '../types';

export const commonConditions: EducationalContent = {
  id: 'ophthalmology-common-conditions',
  type: 'condition',
  name: 'Common Eye Conditions',
  alternateNames: ['Ophthalmic Conditions', 'Eye Diseases', 'Vision Disorders'],

  levels: {
    1: {
      level: 1,
      summary: 'Many people have eye problems that make it hard to see clearly, but most can be helped with glasses, medicine, or surgery.',
      explanation: `Lots of people wear glasses or contacts because their eyes do not focus light perfectly. Other eye problems can happen as people get older or because of other health issues.

**Refractive Errors (Problems Focusing Light):**

**Myopia (Nearsightedness):**
- You can see things up close but faraway things look blurry
- The eyeball is a little too long, so light focuses in front of the retina
- Very common - about 1 in 3 people have it
- Fixed with glasses, contacts, or sometimes surgery when you are older

**Hyperopia (Farsightedness):**
- Faraway things may look okay, but close-up things are blurry
- The eyeball is a little too short
- Fixed with glasses or contacts

**Astigmatism:**
- Things look blurry or wavy at all distances
- The front of the eye (cornea) is shaped more like a football than a basketball
- Fixed with special glasses or contacts

**Other Eye Conditions:**

**Cataracts:**
- The lens inside the eye gets cloudy, like looking through a foggy window
- Most common in older adults
- A doctor can replace the cloudy lens with a clear artificial one

**Glaucoma:**
- Pressure builds up inside the eye and damages the optic nerve
- Can slowly steal your side vision without you noticing
- Eye drops or surgery can lower the pressure and protect your vision

**Macular Degeneration:**
- The center of the retina (macula) wears out over time
- Makes it hard to read, recognize faces, or see fine details
- Mostly affects people over 60

**Diabetic Retinopathy:**
- High blood sugar (from diabetes) damages tiny blood vessels in the retina
- Can cause blurry vision or even blindness if untreated
- Regular eye exams help catch it early`,
      keyTerms: [
        { term: 'myopia', definition: 'Nearsightedness - you can see close things clearly but far things are blurry' },
        { term: 'hyperopia', definition: 'Farsightedness - far things may be clearer than close things' },
        { term: 'astigmatism', definition: 'Blurry vision caused by an unevenly shaped cornea' },
        { term: 'cataract', definition: 'A cloudy lens inside the eye that makes vision foggy' },
        { term: 'glaucoma', definition: 'An eye disease where pressure damages the nerve that sends pictures to the brain' },
      ],
      analogies: [
        'A myopic eye is like a camera that focuses too soon - the picture forms before it reaches the film.',
        'A cataract is like trying to look through a foggy car windshield.',
        'Glaucoma is like a slow leak in a tire - you do not notice until the damage is already done.',
      ],
      examples: [
        'A kid who squints to see the whiteboard at school might be nearsighted and need glasses.',
        'A grandparent whose vision gets cloudy over time might have a cataract that a doctor can fix.',
        'A person with diabetes should get their eyes checked every year to catch diabetic retinopathy early.',
      ],
      patientCounselingPoints: [
        'Wearing glasses or contacts is nothing to be embarrassed about - they help your eyes work their best.',
        'Everyone should get regular eye check-ups, even if they think their vision is fine.',
        'Tell a parent or teacher if things look blurry, wavy, or if you see floating spots.',
      ],
    },
    2: {
      level: 2,
      summary: 'Common eye conditions include refractive errors (myopia, hyperopia, astigmatism) correctable with lenses, and sight-threatening diseases including cataracts, glaucoma, age-related macular degeneration, and diabetic retinopathy requiring medical management.',
      explanation: `## Refractive Errors

Refractive errors occur when the eye does not bend light correctly, preventing a sharp image on the retina.

**Myopia (Nearsightedness):**
- Prevalence: ~30% globally, rising rapidly (up to 80-90% in East Asian youth)
- Cause: Eyeball too long or cornea too curved
- Light focuses in front of the retina
- Correction: Concave (minus) lenses, contact lenses, or refractive surgery
- Risk increases with close work and limited outdoor time

**Hyperopia (Farsightedness):**
- Cause: Eyeball too short or cornea too flat
- Light focuses behind the retina
- Young people can compensate by squeezing the lens (accommodation)
- Correction: Convex (plus) lenses
- Causes eye strain and headaches, especially with near work

**Astigmatism:**
- Cause: Irregular corneal curvature (more oval than round)
- Creates two focal points instead of one
- Correction: Cylindrical lenses (toric contacts), refractive surgery
- Often occurs with myopia or hyperopia

**Presbyopia:**
- Age-related loss of near focusing ability (typically starts around age 40-45)
- Lens becomes less flexible, reducing accommodation
- Correction: Reading glasses, bifocals, progressive lenses

## Cataracts

- Clouding of the natural lens inside the eye
- Leading cause of blindness worldwide
- Types: Nuclear (center), cortical (edges), posterior subcapsular (back)
- Risk factors: Age, UV exposure, diabetes, smoking, corticosteroids
- Symptoms: Blurry vision, glare, faded colors, difficulty driving at night
- Treatment: Surgical removal and replacement with artificial intraocular lens (IOL)
- Surgery is one of the most common and successful procedures in medicine

## Glaucoma

- Group of diseases that damage the optic nerve, usually due to high eye pressure
- Called the "silent thief of sight" - often no symptoms until vision is lost
- Two main types:
  - **Open-angle:** Gradual blockage of drainage; most common
  - **Angle-closure:** Sudden blockage; eye pain, redness, halos (emergency)
- Risk factors: High eye pressure, family history, age >60, African or Hispanic descent
- Treatment: Eye drops, laser treatment, surgery to lower pressure
- Lost vision cannot be restored - early detection is critical

## Age-Related Macular Degeneration (AMD)

- Degeneration of the macula, the central part of the retina
- Leading cause of legal blindness in people over 60 in developed countries
- Two forms:
  - **Dry AMD (90%):** Drusen deposits, slow progression, geographic atrophy
  - **Wet AMD (10%):** Abnormal blood vessels leak fluid; rapid vision loss
- Risk factors: Age, smoking, family history, light skin/eye color
- Treatment:
  - Dry: AREDS2 vitamins (vitamins C, E, zinc, lutein, zeaxanthin)
  - Wet: Anti-VEGF injections (ranibizumab, aflibercept, bevacizumab)

## Diabetic Retinopathy

- Damage to retinal blood vessels caused by chronically high blood sugar
- Leading cause of blindness in working-age adults
- Stages: Mild → moderate → severe nonproliferative → proliferative
- Diabetic macular edema (DME): Fluid leakage at the macula
- Risk factors: Duration of diabetes, poor blood sugar control, high blood pressure
- Screening: Annual dilated eye exam for all diabetic patients
- Treatment: Blood sugar control, anti-VEGF injections, laser photocoagulation`,
      keyTerms: [
        { term: 'refractive error', definition: 'A vision problem caused by the eye not bending light correctly, resulting in a blurred image on the retina' },
        { term: 'intraocular lens (IOL)', definition: 'An artificial lens implanted inside the eye to replace the natural lens after cataract surgery' },
        { term: 'anti-VEGF', definition: 'Medications that block vascular endothelial growth factor to stop abnormal blood vessel growth in the eye', pronunciation: 'anti-VEJ-eff' },
        { term: 'drusen', definition: 'Yellow deposits under the retina that are an early sign of macular degeneration', pronunciation: 'DROO-zen' },
        { term: 'proliferative diabetic retinopathy', definition: 'Advanced stage of diabetic eye disease where new abnormal blood vessels grow on the retina' },
        { term: 'presbyopia', definition: 'Age-related loss of the ability to focus on near objects, usually starting around age 40', pronunciation: 'prez-bee-OH-pee-ah' },
      ],
      analogies: [
        'Refractive errors are like a projector out of focus - the image does not land exactly on the screen (retina).',
        'Glaucoma is like high water pressure in a garden hose - too much pressure damages the hose (optic nerve) over time.',
        'Wet AMD is like a leaky pipe under the retina - fluid seeps out and damages the area.',
      ],
    },
    3: {
      level: 3,
      summary: 'Ophthalmic conditions encompass refractive errors with specific optical corrections, cataracts involving crystallin denaturation, glaucoma as a progressive optic neuropathy, AMD with drusen-driven pathology, and diabetic retinopathy from microvascular damage.',
      explanation: `## Refractive Error Optics

**Myopia:**
- Axial length >24 mm (axial myopia) or corneal power >43 D (refractive myopia)
- Correction: Concave lens with negative dioptric power
- High myopia (>-6.00 D): Increased risk of retinal detachment, myopic maculopathy, glaucoma
- Myopia control strategies: Atropine (low-dose 0.01-0.05%), orthokeratology, peripheral defocus lenses

**Hyperopia:**
- Axial length <24 mm or corneal power <43 D
- Latent hyperopia: Masked by accommodative effort in youth
- Manifest hyperopia: Measurable after cycloplegic refraction
- Angle-closure risk: Short axial length → shallow anterior chamber → narrow angle

**Astigmatism:**
- Regular: Principal meridians perpendicular; correctable with cylindrical lenses
- Irregular: Non-perpendicular meridians (keratoconus, scarring); requires rigid contacts or surgery
- With-the-rule: Steep vertical meridian (common in youth)
- Against-the-rule: Steep horizontal meridian (common in elderly)

## Cataract Pathophysiology

**Classification:**
| Type | Location | Risk Factors | Visual Impact |
|------|----------|-------------|---------------|
| Nuclear sclerotic | Central nucleus | Age, smoking | Myopic shift, reduced contrast |
| Cortical | Lens cortex | UV exposure, diabetes | Glare, variable acuity |
| Posterior subcapsular | Posterior capsule | Steroids, diabetes, radiation | Near vision affected first |

**Surgical Techniques:**
- Phacoemulsification: Ultrasonic fragmentation through ~2.5 mm incision
- Femtosecond laser-assisted: Precision capsulotomy and lens fragmentation
- IOL options: Monofocal, multifocal, extended depth of focus (EDOF), toric

**Complications:** Posterior capsule opacification (20-40%), cystoid macular edema, endophthalmitis (1/3000)

## Glaucoma: Classification and Mechanisms

**Open-Angle Glaucoma (POAG):**
- IOP typically 22-30 mmHg (can be normal in normal-tension glaucoma)
- Increased outflow resistance at trabecular meshwork
- Optic disc cupping: Cup-to-disc ratio increases, RNFL thinning
- Visual field loss: Arcuate scotomas, nasal step, eventually tunnel vision
- Medications: Prostaglandin analogs (first-line), beta-blockers, alpha-agonists, CAIs

**Angle-Closure Glaucoma:**
- Pupillary block → iris bowing → angle closure → IOP spike (>40 mmHg)
- Symptoms: Severe eye pain, nausea, halos, red eye, mid-dilated fixed pupil
- Emergency: Topical timolol + pilocarpine + IV acetazolamide → laser peripheral iridotomy
- Chronic angle closure: Peripheral anterior synechiae, gradual damage

**Optic Nerve Head Assessment:**
- OCT RNFL and ganglion cell analysis: Quantitative monitoring
- Visual field testing (Humphrey 24-2): Functional assessment
- Disc photography: Baseline and progression documentation

## Age-Related Macular Degeneration

**Dry AMD Pathophysiology:**
- Drusen: Extracellular deposits between RPE and Bruch's membrane
- Composition: Lipids, complement components, amyloid-β
- Geographic atrophy: RPE and photoreceptor loss in well-demarcated areas
- Complement pathway dysregulation (CFH Y402H polymorphism)

**Wet (Neovascular) AMD:**
- Choroidal neovascularization (CNV) breaches Bruch's membrane
- VEGF-driven angiogenesis: Leaky, fragile vessels
- Rapid central vision loss from subretinal fluid/hemorrhage
- OCT findings: Subretinal fluid, intraretinal fluid, pigment epithelial detachment

**Treatment:**
- Anti-VEGF agents: Ranibizumab, aflibercept, brolucizumab, faricimab (bispecific Ang-2/VEGF)
- Injection frequency: Monthly, treat-and-extend, or PRN based on OCT
- AREDS2 supplementation for intermediate dry AMD

## Diabetic Retinopathy Staging and Management

**ETDRS Classification:**
| Stage | Findings |
|-------|----------|
| Mild NPDR | Microaneurysms only |
| Moderate NPDR | Microaneurysms, hemorrhages, hard exudates, cotton-wool spots |
| Severe NPDR | 4-2-1 rule: Hemorrhages in 4 quadrants, venous beading in 2, IRMA in 1 |
| Proliferative DR | Neovascularization (disc or elsewhere), vitreous hemorrhage, tractional RD |

**Diabetic Macular Edema (DME):**
- Center-involving: Anti-VEGF first-line (DRCR.net Protocol T)
- Non-center-involving: Focal laser photocoagulation
- Persistent DME: Intravitreal corticosteroids (dexamethasone implant, fluocinolone acetonide)

**Panretinal Photocoagulation (PRP):**
- Standard for proliferative DR
- 1200-1500 burns to peripheral retina
- Reduces VEGF production by ablating ischemic retina
- Side effects: Peripheral field loss, night vision reduction`,
      keyTerms: [
        { term: 'phacoemulsification', definition: 'Ultrasonic cataract surgery technique that fragments the lens nucleus through a small incision for aspiration', pronunciation: 'FAK-oh-ee-MUL-sih-fih-KAY-shun' },
        { term: 'choroidal neovascularization', definition: 'Abnormal new blood vessel growth from the choroid through Bruch\'s membrane; hallmark of wet AMD' },
        { term: 'cup-to-disc ratio', definition: 'Ratio of optic cup diameter to overall disc diameter; increased ratio indicates glaucomatous damage' },
        { term: 'ETDRS classification', definition: 'Early Treatment Diabetic Retinopathy Study grading system for staging diabetic retinopathy severity' },
        { term: 'panretinal photocoagulation', definition: 'Laser treatment applying burns to the peripheral retina to reduce VEGF-driven neovascularization in proliferative DR' },
        { term: 'geographic atrophy', definition: 'Well-demarcated area of RPE and photoreceptor loss in advanced dry AMD; causes progressive central scotoma' },
      ],
      clinicalNotes: 'The 4-2-1 rule for severe NPDR is a critical clinical marker: hemorrhages/microaneurysms in all 4 quadrants, venous beading in 2+ quadrants, or IRMA in 1+ quadrant. Any one finding qualifies as severe NPDR with ~50% risk of progression to PDR within 1 year.',
    },
    4: {
      level: 4,
      summary: 'Advanced ophthalmic disease management integrates molecular pathogenesis, pharmacological mechanisms, surgical decision-making, imaging biomarkers, and emerging therapeutics for refractive disorders, lens disease, glaucoma, AMD, and diabetic retinopathy.',
      explanation: `## Myopia Pathogenesis and Control

**Molecular Mechanisms:**
- Scleral remodeling: MMP-2 upregulation, collagen cross-link reduction
- Dopamine deficiency: Reduced outdoor light exposure → decreased retinal dopamine → axial elongation
- Peripheral hyperopic defocus: Signals for axial growth
- Gene associations: >200 loci identified; GWAS highlights include GJD2, RASGRF1, ZC3H11B

**Evidence-Based Myopia Control:**
| Intervention | Efficacy (Axial Length Reduction) | Mechanism |
|-------------|----------------------------------|-----------|
| Low-dose atropine (0.01-0.05%) | 30-50% slowing | Non-selective muscarinic antagonism |
| Orthokeratology | 30-50% | Peripheral myopic defocus |
| Multifocal soft contacts | 25-50% | Peripheral defocus modification |
| Outdoor time (>2 hrs/day) | 30-50% (prevention) | Dopamine-mediated signaling |

## Advanced Cataract and Refractive Surgery

**IOL Power Calculation:**
- SRK/T, Holladay, Barrett Universal II formulas
- Post-LASIK eyes: Requires corneal power adjustment (Haigis-L, Barrett True-K)
- Biometry: Optical (IOLMaster, Lenstar) vs. ultrasound A-scan

**Premium IOL Selection:**
| IOL Type | Mechanism | Best Candidate | Limitation |
|----------|-----------|---------------|------------|
| Monofocal | Single focus | Standard cataract | Spectacle dependent |
| Multifocal | Diffractive rings | Motivated for spectacle independence | Halos, reduced contrast |
| EDOF | Extended range | Intermediate + distance tasks | Near may need readers |
| Toric | Cylindrical correction | Astigmatism >1.0 D | Rotational misalignment |

**Refractive Surgery:**
- LASIK: Corneal flap + excimer laser ablation; corrects myopia to -12 D, hyperopia to +6 D
- PRK/LASEK: Surface ablation without flap; preferable in thin corneas
- SMILE: Lenticule extraction; no flap, less dry eye
- ICL (Implantable Collamer Lens): Phakic IOL for high myopia (-3 to -20 D)

## Glaucoma: Advanced Management

**Target IOP Determination:**
- Baseline IOP at diagnosis
- Severity of damage
- Rate of progression
- Life expectancy
- General rule: 20-50% reduction from baseline; lower targets for more advanced disease

**Surgical Options:**
| Procedure | Mechanism | IOP Reduction | Key Consideration |
|-----------|-----------|---------------|-------------------|
| Trabeculectomy | Fistula to subconjunctival space | 30-50% | Bleb-related complications |
| Tube shunt (Ahmed, Baerveldt) | Tube to equatorial plate | 30-50% | Hypertensive phase, tube erosion |
| MIGS (iStent, Hydrus, KDB) | Enhance trabecular outflow | 15-30% | Mild-moderate disease |
| XEN gel stent | Subconjunctival drainage | 25-40% | Less tissue manipulation |
| Cyclodestructive (CPC, MPC) | Reduce aqueous production | Variable | Refractory glaucoma |

**OCT Biomarkers for Progression:**
- RNFL thinning rate: >1 μm/year suggests progression (normal aging ~0.5 μm/year)
- Ganglion cell-inner plexiform layer (GCIPL): Earlier detection in macula
- Bruch's membrane opening minimum rim width (BMO-MRW): Improved structure-function correlation

## AMD: Molecular Pathways and Emerging Therapies

**Complement Pathway in AMD:**
- CFH Y402H: Impaired complement regulation → chronic inflammation at Bruch's membrane
- C3, CFI, CFB variants: Additional risk loci
- Pegcetacoplan (C3 inhibitor): FDA-approved for geographic atrophy (OAKS/DERBY trials)
- Avacincaptad pegol (C5 inhibitor): FDA-approved for GA (GATHER trials)

**Anti-VEGF Evolution:**
| Agent | Target | Dosing Interval | Key Trial |
|-------|--------|----------------|-----------|
| Ranibizumab | VEGF-A | Monthly/q8w | MARINA, ANCHOR |
| Aflibercept | VEGF-A, VEGF-B, PlGF | q8w (after loading) | VIEW 1/2 |
| Brolucizumab | VEGF-A | q8-12w | HAWK/HARRIER |
| Faricimab | VEGF-A + Ang-2 | Up to q16w | TENAYA/LUCERNE |
| Aflibercept 8 mg | VEGF-A, VEGF-B, PlGF | q12-16w | PULSAR |

**Port Delivery System (PDS):**
- Surgically implanted reservoir releasing ranibizumab continuously
- Refill every 6 months (ARCHWAY trial)
- Reduces treatment burden

## Diabetic Retinopathy: Advanced Concepts

**Pathophysiology:**
- Pericyte loss → capillary basement membrane thickening → microaneurysm formation
- Leukostasis and endothelial dysfunction → capillary non-perfusion
- Hypoxia → HIF-1α upregulation → VEGF, erythropoietin overexpression
- Neurodegeneration: Ganglion cell apoptosis precedes vascular changes

**DRCR.net Landmark Trials:**
| Protocol | Question | Finding |
|----------|----------|---------|
| Protocol I | Ranibizumab ± laser vs. laser for DME | Ranibizumab superior to laser |
| Protocol T | Aflibercept vs. bevacizumab vs. ranibizumab for DME | Aflibercept best for VA 20/50 or worse |
| Protocol S | Anti-VEGF vs. PRP for PDR | Non-inferior, fewer complications |
| Protocol V | Observation vs. treatment for DME with good vision | Observation reasonable if VA ≥20/25 |

**Widefield OCT Angiography (OCTA):**
- Non-invasive capillary-level imaging
- Quantifies: Foveal avascular zone, vessel density, non-perfusion areas
- Detecting subclinical DR changes before clinical findings
- Limitations: Motion artifact, projection artifact, limited depth penetration`,
      keyTerms: [
        { term: 'MIGS', definition: 'Minimally Invasive Glaucoma Surgery; group of procedures enhancing aqueous outflow with minimal tissue disruption, suitable for mild-moderate glaucoma' },
        { term: 'faricimab', definition: 'Bispecific antibody targeting both VEGF-A and angiopoietin-2; enables extended dosing intervals in wet AMD and DME' },
        { term: 'pegcetacoplan', definition: 'C3 complement inhibitor approved for geographic atrophy; reduces GA lesion growth rate (OAKS/DERBY trials)' },
        { term: 'Barrett Universal II', definition: 'Advanced IOL power calculation formula using ray tracing; most accurate across a range of axial lengths' },
        { term: 'OCT angiography', definition: 'Non-invasive imaging technique visualizing retinal and choroidal vasculature by detecting erythrocyte motion without dye injection' },
        { term: 'HIF-1α', definition: 'Hypoxia-inducible factor 1-alpha; master transcriptional regulator of hypoxic response driving VEGF upregulation in diabetic retinopathy' },
      ],
      clinicalNotes: 'DRCR.net Protocol S demonstrated that anti-VEGF is non-inferior to PRP for proliferative DR with fewer adverse effects. However, PRP remains preferred for patients with poor follow-up compliance, as a single treatment provides durable regression of neovascularization.',
    },
    5: {
      level: 5,
      summary: 'Expert-level ophthalmic disease management integrates genetic risk stratification, novel drug delivery platforms, gene and cell therapies, artificial intelligence-driven diagnostics, and precision medicine approaches across the spectrum of common eye conditions.',
      explanation: `## Myopia: Genomics and Future Therapies

**Polygenic Risk Scores:**
- CREAM/23andMe consortium: >200 loci for refractive error
- Polygenic risk scores predict high myopia (AUC ~0.75)
- Potential for early identification and targeted intervention

**Emerging Therapies:**
- Scleral cross-linking: Strengthen sclera against elongation
- GABA receptor modulation: Preclinical evidence for axial elongation control
- Repeated low-level red light (RLRL): 630-650 nm, 3 min BID; choroidal thickening mechanism (Chinese RCTs show ~70% efficacy)
- Anti-VEGF for myopic CNV: Standard of care (RADIANCE, MYRROR trials)

## Cataract: Pharmacological Prevention and Advanced IOLs

**Pharmacological Cataract Prevention (Research):**
- Lanosterol and 25-hydroxycholesterol: Restore lens transparency in animal models
- Oxysterol eye drops: Phase I trials for early nuclear cataracts
- Aldose reductase inhibitors: Target sorbitol pathway in diabetic cataracts

**Next-Generation IOLs:**
- Light-adjustable lens (LAL, RxSight): UV-adjustable power post-implantation
- Accommodating IOLs (under development): Restore dynamic focusing
- Small-aperture IOLs (IC-8 Apthera): Pinhole optics for extended depth of focus

## Glaucoma: Precision Medicine

**Genetic Architecture:**
| Gene | Mechanism | Glaucoma Type | Clinical Utility |
|------|-----------|---------------|-----------------|
| MYOC | TM endoplasmic reticulum stress | Juvenile/adult POAG | Screening, prognosis |
| OPTN | Autophagy dysregulation | Normal-tension | NTG risk assessment |
| TBK1 | Autophagy pathway | Normal-tension | Gene duplication assay |
| LOXL1 | Elastin metabolism | Pseudoexfoliation | Population risk |
| CYP1B1 | Anterior segment development | Congenital | Genetic counseling |

**Neuroprotection Trials:**
- Memantine (POAG): Negative (Allergan trial)
- Brimonidine: Possible neuroprotective effect beyond IOP lowering (Low-Pressure Glaucoma Treatment Study)
- Nicotinamide (vitamin B3): NAD+ replenishment; Phase II positive (NICOX study, Glaucoma Research Foundation)
- Citicoline: Mitochondrial support; some positive evidence in European trials

**Sustained-Release Drug Delivery:**
- Bimatoprost intracameral implant (Durysta): 10 μg, biodegradable; ~4-6 months IOP control
- Travoprost intracameral implant (iDose TR): Titanium reservoir; Phase III positive
- Suprachoroidal delivery: Targeted posterior segment drug concentration

## AMD: Gene Therapy and Artificial Intelligence

**Gene Therapy for AMD:**
- ADVM-022 (Adverum): Intravitreal AAV2.7m8-aflibercept; single injection replaces repeated anti-VEGF
  - OPTIC trial: Sustained VEGF suppression >2 years in some patients
  - Dose-limiting inflammation observed at higher doses
- RGX-314 (REGENXBIO): AAV8-anti-VEGF Fab; subretinal or suprachoroidal delivery
- GT005 (Gyroscope): AAV2-CFI for dry AMD; complement pathway modulation

**AI in AMD Management:**
- DeepMind/Moorfields AI: 94% accuracy in detecting 50+ retinal conditions from OCT
- Automated fluid quantification: Predict treatment response and retreatment need
- Predictive models: Risk of conversion from dry to wet AMD using deep learning on OCT
- Home OCT monitoring (Notal Vision): AI-driven self-monitoring for fluid detection

**Complement Therapeutics Landscape:**
| Target | Drug | Route | Indication | Status |
|--------|------|-------|------------|--------|
| C3 | Pegcetacoplan | Intravitreal monthly | GA | FDA approved |
| C5 | Avacincaptad pegol | Intravitreal monthly | GA | FDA approved |
| CFD | Lampalizumab | Intravitreal | GA | Phase III failed |
| C3 | AMY-101 | Intravitreal | GA | Phase I |
| CFB | Iptacopan | Oral | GA | Phase II |

## Diabetic Retinopathy: Screening AI and Novel Targets

**AI-Based DR Screening:**
- IDx-DR (Digital Diagnostics): FDA-cleared autonomous AI for DR detection
  - Sensitivity >87%, specificity >90% for referable DR
  - Point-of-care deployment in primary care settings
- EyeArt (Eyenuk): CE-marked and FDA-cleared; 91% sensitivity
- Google/Verily: Deep learning models; validated in India and Thailand

**Novel Therapeutic Targets:**
- Ang-2/Tie2 pathway: Faricimab (approved); AXT107 (peptide, Phase I)
- Kallikrein-kinin system: Plasma kallikrein inhibitors for DME
- Integrin inhibitors: THR-687 (pan-RGD integrin), risuteganib; target vascular permeability
- Neurodegeneration: Citicoline, brimonidine; neuroprotection trials ongoing

**Diabetic Retinopathy Prevention Trials:**
| Trial | Intervention | Finding |
|-------|-------------|---------|
| DCCT/EDIC | Intensive glycemic control (T1D) | 76% risk reduction in DR development |
| UKPDS | Intensive glycemic control (T2D) | 25% risk reduction in microvascular endpoints |
| ACCORD-Eye | Fenofibrate + statin | 40% reduction in DR progression |
| FIELD | Fenofibrate | Reduced need for laser treatment |
| DRCR Protocol W | Anti-VEGF for moderate-severe NPDR without DME | Reduced PDR development |

## Cross-Cutting Themes

**Sustained Drug Delivery Revolution:**
- Port delivery system (ranibizumab): Refill q6 months
- Intracameral implants: IOP control without daily drops
- Suprachoroidal injections: Targeted posterior segment concentration
- Gene therapy as ultimate sustained delivery: Single treatment → endogenous protein production

**Precision Ophthalmology:**
- Pharmacogenomics: CFH/ARMS2 genotype may influence anti-VEGF response
- Biomarker-driven treatment: OCT fluid patterns predict treatment response
- Individual risk calculators: Integrating genetics, imaging, and clinical data
- Adaptive treat-and-extend protocols: AI-optimized injection intervals`,
      keyTerms: [
        { term: 'IDx-DR', definition: 'First FDA-cleared autonomous AI diagnostic system for diabetic retinopathy screening at the point of care without specialist oversight' },
        { term: 'light-adjustable lens', definition: 'IOL whose refractive power can be modified post-operatively using targeted UV light application; enables customized refractive outcomes' },
        { term: 'ADVM-022', definition: 'Intravitreal AAV gene therapy designed to produce aflibercept endogenously from a single injection for sustained anti-VEGF activity in wet AMD' },
        { term: 'suprachoroidal delivery', definition: 'Drug administration into the suprachoroidal space providing targeted posterior segment bioavailability with reduced systemic and anterior segment exposure' },
        { term: 'nicotinamide neuroprotection', definition: 'NAD+ precursor (vitamin B3) under investigation for glaucomatous neuroprotection via mitochondrial support and metabolic rescue of retinal ganglion cells' },
        { term: 'repeated low-level red light', definition: 'Emerging myopia control intervention using 630-650 nm light exposure; proposed mechanism involves choroidal thickening and reduced scleral hypoxia' },
      ],
      clinicalNotes: `Clinical Pearls:
1. Complement inhibitors (pegcetacoplan, avacincaptad pegol) for GA represent the first approved treatments for dry AMD - set realistic patient expectations (~20-30% lesion growth reduction)
2. Anti-VEGF gene therapy (ADVM-022, RGX-314) may transform wet AMD from chronic injection burden to single-treatment disease - monitor inflammation closely
3. IDx-DR autonomous AI screening is reimbursable in primary care - deploy in diabetic populations with limited ophthalmology access
4. Fenofibrate has consistent evidence for DR benefit independent of lipid levels - consider as adjunct in moderate NPDR (ACCORD-Eye, FIELD)
5. Light-adjustable IOLs allow post-operative refractive customization - ideal for patients with prior refractive surgery or demanding refractive expectations
6. RLRL for myopia control shows promising efficacy but long-term safety data is pending - use with informed consent and monitoring`,
    },
  },

  media: [
    {
      id: 'refractive-errors-diagram',
      type: 'diagram',
      filename: 'refractive-errors.svg',
      title: 'Refractive Errors Compared',
      description: 'Light ray diagrams for emmetropia, myopia, hyperopia, and astigmatism with corrective lenses',
    },
    {
      id: 'glaucoma-optic-disc',
      type: 'image',
      filename: 'glaucoma-optic-disc.svg',
      title: 'Glaucomatous Optic Disc Changes',
      description: 'Normal vs. glaucomatous optic disc showing increased cup-to-disc ratio and RNFL loss',
    },
    {
      id: 'amd-oct-comparison',
      type: 'image',
      filename: 'amd-oct-comparison.svg',
      title: 'OCT Findings in AMD',
      description: 'OCT cross-sections showing drusen, geographic atrophy, and choroidal neovascularization',
    },
    {
      id: 'diabetic-retinopathy-stages',
      type: 'diagram',
      filename: 'diabetic-retinopathy-stages.svg',
      title: 'Stages of Diabetic Retinopathy',
      description: 'Fundus photographs showing progression from mild NPDR to proliferative DR',
    },
  ],

  citations: [
    {
      id: 'aao-ppp-glaucoma',
      type: 'article',
      title: 'Primary Open-Angle Glaucoma Preferred Practice Pattern',
      authors: ['American Academy of Ophthalmology'],
      source: 'Ophthalmology',
      url: 'https://doi.org/10.1016/j.ophtha.2020.10.024',
    },
    {
      id: 'drcr-protocol-t',
      type: 'article',
      title: 'Aflibercept, Bevacizumab, or Ranibizumab for Diabetic Macular Edema',
      authors: ['DRCR.net'],
      source: 'New England Journal of Medicine',
      url: 'https://doi.org/10.1056/NEJMoa1414264',
    },
    {
      id: 'areds2',
      type: 'article',
      title: 'Lutein + Zeaxanthin and Omega-3 Fatty Acids for Age-Related Macular Degeneration (AREDS2)',
      source: 'JAMA',
      url: 'https://doi.org/10.1001/jama.2013.4997',
    },
  ],

  crossReferences: [
    { targetId: 'ophthalmology-eye-anatomy', targetType: 'structure', relationship: 'related', label: 'Eye Anatomy' },
    { targetId: 'endocrinology-diabetes-complications', targetType: 'condition', relationship: 'related', label: 'Diabetes Complications' },
    { targetId: 'cardiovascular-hypertension', targetType: 'condition', relationship: 'related', label: 'Hypertension' },
  ],

  tags: {
    systems: ['visual'],
    topics: ['pathology', 'pharmacology', 'surgery', 'screening'],
    keywords: ['myopia', 'hyperopia', 'astigmatism', 'cataracts', 'glaucoma', 'AMD', 'diabetic retinopathy'],
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

export default commonConditions;
