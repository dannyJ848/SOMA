/**
 * Glaucoma - Comprehensive Educational Content
 *
 * Covers open-angle and angle-closure glaucoma, diagnosis, monitoring,
 * and treatment modalities.
 */

import { EducationalContent } from "../../types";

export const glaucoma: EducationalContent = {
  id: "condition-glaucoma",
  type: "condition",
  name: "Glaucoma",
  alternateNames: ["Primary Open-Angle Glaucoma", "Angle-Closure Glaucoma", "Ocular Hypertension"],
  hpoId: "HP:0000565",

  levels: {
    1: {
      level: 1,
      summary: "Glaucoma is a group of eye diseases that damage the optic nerve, often due to high pressure inside the eye. It can cause permanent vision loss and even blindness if not treated.",
      explanation: `Think of your eye like a sink with a faucet and a drain. Fluid is constantly flowing into your eye (faucet) and draining out (drain). In glaucoma, the drain gets clogged, so fluid builds up and pressure increases inside your eye.

This high pressure presses on and damages the optic nerve - the "cable" that sends images from your eye to your brain. Once the optic nerve is damaged, the vision loss is permanent.

**Why is glaucoma dangerous?**

Glaucoma is called "the silent thief of sight" because:
- You usually don't feel any pain (in the most common type)
- Vision loss starts at the edges (peripheral vision) so you may not notice
- By the time you notice vision problems, permanent damage has occurred
- It cannot be cured, only treated to prevent further damage

**Types of Glaucoma:**

1. **Open-angle glaucoma** (most common):
   - The drain looks normal but doesn't work properly
   - Pressure slowly builds up over years
   - No pain, no early symptoms
   - Most common type, especially in older adults

2. **Angle-closure glaucoma**:
   - The drain is completely blocked
   - Pressure rises very quickly
   - **MEDICAL EMERGENCY** - can cause blindness in days
   - Symptoms: severe eye pain, headache, nausea, blurred vision, seeing halos around lights

**Who gets glaucoma?**
- Anyone can get glaucoma
- More common after age 60
- Family history increases risk
- African Americans, Hispanics, Asians at higher risk
- People with diabetes, high blood pressure

**How is glaucoma diagnosed?**
- Eye pressure check (puff of air test)
- Looking at the optic nerve
- Checking side vision (visual field test)
- Checking the drainage angle

**How is glaucoma treated?**
- Eye drops to lower pressure (most common)
- Laser treatment to help fluid drain
- Surgery to create a new drainage channel
- Goal: lower pressure to prevent further damage

**Remember:**
- Glaucoma damage cannot be reversed
- Treatment only prevents further damage
- Regular eye exams are critical for early detection
- Use your eye drops exactly as prescribed`,
      keyTerms: [
        { term: "optic nerve", definition: "The nerve that connects the eye to the brain and carries visual information" },
        { term: "intraocular pressure", definition: "The fluid pressure inside the eye; high pressure can damage the optic nerve" },
        { term: "peripheral vision", definition: "Side vision - what you see out of the corners of your eyes" },
      ],
      analogies: [
        "The eye is like a sink - when the drain is clogged, the water (pressure) backs up. Glaucoma is like a clogged drain.",
        "The optic nerve is like a TV cable - when it gets damaged, you lose the picture (vision).",
      ],
      examples: [
        "An elderly person notices their side vision is decreasing and has trouble seeing cars approaching from the side while driving.",
        "Someone suddenly develops severe eye pain, headache, and sees rainbow-colored halos around lights - this is an acute glaucoma attack needing emergency care.",
      ],
      patientCounselingPoints: [
        'Glaucoma usually has no early symptoms - regular eye exams are essential.',
        "Use your eye drops every day, even if you feel fine.",
        "Once vision is lost from glaucoma, it cannot be recovered.",
        "Family members of glaucoma patients should be screened regularly.",
        "Acute angle-closure symptoms (severe pain, headache, halos) need immediate emergency care.",
      ],
    },
    2: {
      level: 2,
      summary: "Glaucoma is an optic neuropathy characterized by progressive retinal ganglion cell loss and optic nerve cupping, often associated with elevated intraocular pressure. Primary open-angle glaucoma (POAG) is the most common form, while angle-closure glaucoma is an ophthalmic emergency requiring immediate treatment.",
      explanation: `## Pathophysiology Overview

**Aqueous Humor Dynamics:**
- Produced by ciliary body (processes)
- Flows through pupil into anterior chamber
- Drains through trabecular meshwork into Schlemm canal
- Excess fluid also exits via uveoscleral outflow

**Intraocular Pressure (IOP):**
- Normal range: 10-21 mmHg
- IOP = Rate of aqueous production / Rate of aqueous outflow
- Glaucoma can occur with normal IOP (normal-tension glaucoma)
- High IOP alone is not glaucoma (ocular hypertension)

## Types of Glaucoma

**Primary Open-Angle Glaucoma (POAG):**
- Most common form (90% of cases in US)
- "Open angle" - drainage angle appears normal on exam
- Trabecular meshwork dysfunction reduces outflow
- Slow, progressive IOP elevation
- Asymptomatic until late stages
- Bilateral but often asymmetric

**Primary Angle-Closure Glaucoma (PACG):**
- Anterior chamber angle is physically narrowed or closed
- Iris blocks access to trabecular meshwork
- More common in Asian populations
- Can be acute (emergency) or chronic

**Secondary Glaucomas:**
- Neovascular: New blood vessels block angle (diabetes, CRVO)
- Pigmentary dispersion: Pigment clogs trabecular meshwork
- Pseudoexfoliation: Protein-like material blocks drainage
- Traumatic: Angle recession from blunt injury
- Corticosteroid-induced: Steroids raise IOP
- Uveitic: Inflammatory debris and scarring

## Risk Factors

**Non-modifiable:**
- Age (>60)
- Family history (first-degree relative: 3-10x risk)
- Race/ethnicity (African American, Hispanic, Asian)
- Myopia (nearsightedness) for POAG
- Hyperopia (farsightedness) for angle-closure

**Modifiable:**
- Elevated IOP
- Corticosteroid use
- Poor blood pressure control (controversial)
- Central corneal thickness (thin corneas = higher risk)

**Ocular signs:**
- Optic nerve head appearance
- Increased cup-to-disc ratio
- Asymmetric cupping between eyes
- Retinal nerve fiber layer defects

## Diagnosis

**Comprehensive Eye Exam:**

1. **Intraocular Pressure Measurement:**
   - Goldmann applanation tonometry (gold standard)
   - Tono-pen, iCare, or air puff for screening
   - Diurnal variation may be important

2. **Optic Nerve Assessment:**
   - Dilated fundus exam
   - Cup-to-disc ratio (normal ≤0.5)
   - Asymmetric cupping (>0.2 difference between eyes)
   - Notching, rim thinning
   - Retinal nerve fiber layer loss

3. **Gonioscopy:**
   - Special lens to view drainage angle
   - Distinguishes open vs closed angle
   - Essential for proper classification

4. **Visual Field Testing:**
   - Standard automated perimetry (Humphrey, Octopus)
   - Detects peripheral vision loss
   - Patterns specific to glaucoma:
     - Nasal step
     - Arcuate scotoma
     - Paracentral scotoma
     - Advanced: temporal island

5. **Optical Coherence Tomography (OCT):**
   - Measures retinal nerve fiber layer thickness
   - Ganglion cell analysis
   - Detects damage before visual field loss

6. **Pachymetry:**
   - Measures central corneal thickness
   - Thin corneas (<555 µm) increase risk
   - Thick corneas may artifactually raise IOP readings

## Treatment

**Target IOP:**
- Individualized based on:
  - Baseline IOP
  - Amount of damage
  - Rate of progression
  - Life expectancy
- Typical goal: 20-40% reduction from baseline

**Medical Therapy (Eye Drops):**

| Class | Examples | Mechanism | Side Effects |
|-------|----------|-----------|--------------|
| Prostaglandin analogs | Latanoprost, travoprost, bimatoprost | Increase uveoscleral outflow | Darkened iris, longer lashes, red eye |
| Beta-blockers | Timolol, levobunolol | Decrease aqueous production | Slow heart rate, breathing problems |
| Alpha-agonists | Brimonidine, apraclonidine | Decrease production, increase outflow | Allergy, fatigue, dry mouth |
| Carbonic anhydrase inhibitors | Dorzolamide, brinzolamide | Decrease aqueous production | Metallic taste, frequent urination |
| Rho kinase inhibitors | Netarsudil | Increase outflow, decrease production | Red eye, conjunctival blebs |

**Laser Therapy:**

1. **Laser Trabeculoplasty (for POAG):**
   - Argon laser trabeculoplasty (ALT)
   - Selective laser trabeculoplasty (SLT) - preferred
   - Low-energy laser to trabecular meshwork
   - Can be repeated
   - Often used before or instead of multiple medications

2. **Laser Iridotomy (for angle-closure):**
   - Creates hole in peripheral iris
   - Equalizes pressure between chambers
   - Opens the drainage angle
   - Prophylactic for fellow eye

**Surgical Therapy:**

1. **Filtering Surgery (Trabeculectomy):**
   - Creates new drainage channel
   - Flap valve controls flow
   - Most effective for lowering IOP
   - Risks: infection, bleb failure, cataract, too low pressure

2. **Tube Shunt Surgery:**
   - Implant tube from anterior chamber to plate under conjunctiva
   - Ahmed, Baerveldt, Molteno devices
   - Often used when trabeculectomy failed

3. **Minimally Invasive Glaucoma Surgery (MIGS):**
   - iStent, Hydrus, Xen, Preserflo
   - Small incision, faster recovery
   - Often combined with cataract surgery
   - Modest IOP lowering

**Acute Angle-Closure Attack - EMERGENCY:**

**Symptoms:**
- Sudden severe eye pain
- Headache, nausea, vomiting
- Blurred vision
- Halos around lights
- Red eye
- Mid-dilated fixed pupil

**Immediate Treatment:**
1. Oral acetazolamide (carbonic anhydrase inhibitor)
2. Topical glaucoma medications (multiple)
3. Oral glycerin or IV mannitol (osmotic agents)
4. Laser iridotomy once pressure controlled
5. Treat fellow eye prophylactically`,
      keyTerms: [
        { term: "intraocular pressure (IOP)", definition: "Fluid pressure inside the eye, measured in mmHg; elevation is a major risk factor for glaucoma" },
        { term: "cup-to-disc ratio", definition: "Ratio of the central cup to the entire optic disc; increased ratio indicates optic nerve damage" },
        { term: "gonioscopy", definition: "Examination of the drainage angle using a special mirrored lens" },
        { term: "visual field test", definition: "Test mapping peripheral vision; glaucoma causes characteristic patterns of loss" },
        { term: "trabecular meshwork", definition: "Sponge-like tissue through which aqueous humor drains from the eye" },
      ],
      analogies: [
        "The eye is like a sink with a slow drain - if the drain is partially clogged, water (pressure) slowly rises and overflows.",
        "Visual field loss in glaucoma is like losing pixels on the edge of a photo - the center remains clear while the edges fade.",
      ],
      patientCounselingPoints: [
        "Use eye drops at the same time each day to maintain consistent pressure control.",
        'Close your eyes and press on the inner corner for 1-2 minutes after drops to reduce systemic absorption.',
        "Tell all your doctors you use glaucoma medications, especially before surgery.",
        "Regular follow-up is essential - glaucoma can worsen without symptoms.",
        "Family members should be screened, especially after age 40.",
      ],
    },
    3: {
      level: 3,
      summary: "Glaucoma is a progressive optic neuropathy with characteristic optic nerve head changes and visual field loss, primarily associated with elevated IOP but also occurring with normal pressures. The disease involves retinal ganglion cell apoptosis, with mechanical and vascular hypotheses proposed for pathogenesis. Treatment targets IOP reduction to prevent further damage.",
      explanation: `## Pathophysiology

**Retinal Ganglion Cell (RGC) Death:**

1. **Mechanical Hypothesis:**
   - Elevated IOP compresses axons at lamina cribrosa
   - Disrupts axonal transport
   - Causes ischemic injury
   - Leads to apoptotic cell death

2. **Vascular Hypothesis:**
   - Optic nerve head ischemia
   - Reduced perfusion pressure
   - Autoregulation dysfunction
   - Vascular insufficiency

3. **Current Understanding:**
   - Both mechanical and vascular factors contribute
   - IOP-independent mechanisms exist
   - Mitochondrial dysfunction
   - Glutamate excitotoxicity
   - Neurotrophic factor deprivation
   - Autoimmune contributions

**Lamina Cribrosa:**
- Collagenous sieve-like structure
- RGC axons pass through pores
- IOP causes posterior bowing
- Pore deformation compresses axons
- Remodeling and connective tissue changes in glaucoma

**Ocular Blood Flow:**
- Ophthalmic artery pressure vs IOP
- Perfusion pressure = MAP - IOP (or 2/3 MAP - IOP)
- Nocturnal dips in blood pressure may worsen perfusion
- Flammer syndrome (primary vascular dysregulation)

## Primary Open-Angle Glaucoma (POAG)

**Epidemiology:**
- Affects >2 million Americans
- Leading cause of irreversible blindness worldwide
- Prevalence increases with age
- Higher in African Americans (3-4x)
- Often undiagnosed until advanced

**Pathogenesis:**
- Increased outflow resistance at trabecular meshwork
- Extracellular matrix changes
- Endothelial cell dysfunction
- Pigment and extracellular material accumulation
- Schlemm canal inner wall changes

**Histopathology of Optic Nerve:**
- Loss of RGCs and their axons
- Increased cup-to-disc ratio
- Posterior deformation of lamina cribrosa
- Concentric enlargement of cup
- Focal notching at superior or inferior pole

**Clinical Features:**

| Stage | Visual Field | Cup/Disc | Clinical Findings |
|-------|--------------|----------|-------------------|
| Early | Mild peripheral loss | 0.6-0.7 | Isolated paracentral or nasal step |
| Moderate | Arcuate defects | 0.7-0.8 | Arcuate scotoma, nasal step |
| Advanced | Peripheral constriction | 0.8-0.9 | Central island intact |
| Severe | Only central island | ≥0.9 | Temporal island only |

## Angle-Closure Glaucoma

**Primary Angle-Closure Suspect (PACS):**
- Iridocorneal contact ≥180 degrees
- Normal IOP, no optic nerve damage
- Risk of progression to PAC/PACG

**Primary Angle-Closure (PAC):**
- Iridocorneal contact + peripheral anterior synechiae
- Elevated IOP or optic nerve damage
- Angle narrowing with signs

**Primary Angle-Closure Glaucoma (PACG):**
- PAC + optic neuropathy
- Same visual field findings as POAG

**Mechanisms:**

1. **Pupillary Block (most common):**
   - Iris bombé due to relative pupillary block
   - Anterior lens position
   - Small eye (hyperopia)
   - Iris bowed forward, blocking angle

2. **Plateau Iris:**
   - Anteriorly positioned ciliary processes
   - Angle persists closed after iridotomy
   - Peripheral iridoplasty needed

3. **Lens-Related:**
   - Thick lens (age, cataract)
   - Anterior lens position
   - Lens subluxation

**Acute Angle-Closure Attack:**
- Precipitated by dim lighting, medications
- Pupillary dilation causes iris blockage
- IOP can exceed 50-60 mmHg
- Causes corneal edema, optic nerve damage
- Treatment urgent to prevent permanent vision loss

## Normal-Tension Glaucoma (NTG)

**Definition:**
- Glaucomatous optic neuropathy
- IOP consistently <21 mmHg
- No other explanation for optic nerve damage

**Risk Factors:**
- Migraine, Raynaud phenomenon
- Low blood pressure, nocturnal hypotension
- Thin central cornea
- Autoimmune disease
- Coagulation abnormalities

**Treatment:**
- Still lower IOP (30% reduction)
- Address vascular risk factors
- Consider neuroprotection

## Diagnostic Testing

**Optical Coherence Tomography (OCT):**

1. **Retinal Nerve Fiber Layer (RNFL):**
   - Average thickness: normal >80 µm
   - Quadrant analysis: superior and inferior most affected
   - Ganglion cell-inner plexiform layer (GC-IPL)
   - Early detection before visual field loss

2. **Optic Nerve Head (ONH) Analysis:**
   - Rim area
   - Cup volume
   - Disc size variability

**Visual Field Testing:**

**Humphrey Field Analyzer:**
- Standard automated perimetry
- 24-2 (standard) or 10-2 (central) patterns
- Reliability indices: fixation losses, false positives, false negatives
- Mean deviation (MD): overall field loss
- Pattern standard deviation (PSD): focal loss
- Glaucoma Hemifield Test (GHT)

**Early glaucomatous patterns:**
- Paracentral scotoma
- Nasal step
- Arcuate scotoma (Bjerrum area)
- Temporal wedge

**Advanced patterns:**
- Peripheral constriction
- Central island
- Temporal island

**Gonioscopy Grading (Shaffer):**

| Grade | Angle Width | Degrees | Configuration |
|-------|-------------|---------|---------------|
| 4 | Wide open | 35-45 | Ciliary body visible |
| 3 | Open | 25-35 | Scleral spur visible |
| 2 | Narrow | 20 | Only trabecular meshwork |
| 1 | Very narrow | 10 | Anterior trabeculum only |
| 0 | Closed | 0 | No structures visible |

**Other Diagnostic Tools:**
- Heidelberg Retinal Tomography (HRT)
- Scanning Laser Polarimetry (GDx)
- Confocal scanning laser ophthalmoscopy
- Electrodiagnostic testing (rare)

## Treatment Pharmacology

**Prostaglandin Analogs (First-line):**
- Mechanism: Increase uveoscleral outflow via FP receptor
- Once daily dosing (evening)
- Efficacy: 25-33% IOP reduction
- Side effects:
  - Iris darkening (permanent)
  - Eyelash growth (reversible)
  - Periorbital fat atrophy
  - Conjunctival hyperemia

**Beta-Blockers:**
- Mechanism: Decrease aqueous production (β2 receptors)
- Twice daily dosing
- Efficacy: 20-25% IOP reduction
- Contraindications:
  - Asthma, COPD
  - Bradycardia, heart block
  - Heart failure
- Systemic absorption can be reduced with punctal occlusion

**Alpha-2 Agonists:**
- Mechanism: Decrease production + increase outflow
- Three times daily (Brimonidine) or twice daily (Alphagan P)
- Efficacy: 20-25% IOP reduction
- Allergic reaction in 15-20%
- Apraclonidine used primarily for perioperative IOP spikes

**Carbonic Anhydrase Inhibitors:**

**Topical:**
- Dorzolamide (TID), Brinzolamide (BID)
- Efficacy: 15-20% IOP reduction
- sulfonamide allergy

**Oral:**
- Acetazolamide
- Efficacy: 30-40% IOP reduction
- Side effects: paresthesias, fatigue, metabolic acidosis, kidney stones
- Used short-term or for acute IOP spikes

**Rho Kinase Inhibitors:**
- Netarsudil (Rhopressa)
- Mechanism: Increase trabecular outflow, decrease episcleral vein pressure
- Efficacy: 15-20% IOP reduction
- Side effects: conjunctival hyperemia (50%), corneal verticillata

**Combination Products:**
- Cosopt (timolol + dorzolamide)
- Combigan (timolol + brimonidine)
- Simbrinza (brinzolamide + brimonidine)
- Rocklatan (netarsudil + latanoprost)

## Laser and Surgical Treatments

**Laser Trabeculoplasty (LT):**

**Selective Laser Trabeculoplasty (SLT):**
- 532 nm frequency-doubled Nd:YAG laser
- Selectively targets melanin-containing cells
- No thermal damage to trabecular meshwork
- Can be repeated
- Efficacy: 20-30% IOP reduction
- Duration: 1-5 years (varies)

**Argon Laser Trabeculoplasty (ALT):**
- Thermal burns to trabecular meshwork
- Cannot be repeated in same area
- largely replaced by SLT

**Laser Iridotomy:**
- YAG laser creates hole in peripheral iris
- Equalizes pressure between posterior and anterior chamber
- Flattens iris, opens angle
- Indicated for angle-closure, pupillary block
- Complications: IOP spike, bleeding, lens damage

**Laser Peripheral Iridoplasty:**
- Contractile burns to peripheral iris
- Pulls iris away from angle
- Used for plateau iris, acute AAC when iridotomy not possible

**Trabeculectomy:**

**Technique:**
- Scleral flap creation
- Sclerostomy (removing block of tissue)
- Peripheral iridectomy
- Conjunctival closure creating filtration bleb

**Adjunctive Antimetabolites:**
- Mitomycin C (MMC): enhances success
- 5-Fluorouracil (5-FU): postoperative injections
- Risks: bleb leak, hypotony, infection

**Success Criteria:**
- Complete success: IOP < target without medications
- Qualified success: IOP < target with medications
- Failure: uncontrolled IOP, need for reoperation

**Tube Shunt Surgery:**

**Devices:**
- Ahmed Valve: flow restrictor (less early hypotony)
- Baerveldt: larger surface area, no valve (more effective, more complications)
- Molteno: non-valved

**Indications:**
- Failed trabeculectomy
- Neovascular glaucoma
- Uveitic glaucoma
- Congenital/developmental glaucoma
- Poor surgical candidate for trabeculectomy

**Complications:**
- Corneal endothelial cell loss
- Tube erosion/malposition
- Diplopia
- Hypotony

**Minimally Invasive Glaucoma Surgery (MIGS):**

**Categories:**
1. **Trabecular bypass:**
   - iStent, Hydrus microstent
   - Bypass trabecular meshwork

2. **Subconjunctival filtration:**
   - Xen gel stent, Preserflo
   - Creates mini-bleb

3. **Schlemm canal distension:**
   - Canaloplasty
   - Viscocanalostomy

**Advantages:**
- Small incision or ab interno approach
- Faster recovery
- Lower complication rate
- Often combined with cataract surgery

**Limitations:**
- Modest IOP reduction (15-25%)
- Not for advanced disease or very high IOP`,
      keyTerms: [
        { term: "lamina cribrosa", definition: "Sieve-like region of sclera through which optic nerve fibers pass; site of axonal damage in glaucoma" },
        { term: "retinal ganglion cells", definition: "Neurons whose axons form the optic nerve; selectively lost in glaucoma" },
        { term: "NTG", definition: "Normal-tension glaucoma; optic neuropathy with IOP consistently in normal range" },
        { term: "ocular perfusion pressure", definition: "Difference between blood pressure and intraocular pressure; critical for optic nerve blood flow" },
        { term: "Shaffer grading", definition: "Classification system for angle width based on structures visible on gonioscopy" },
        { term: "MIGS", definition: "Minimally Invasive Glaucoma Surgery; group of procedures with small incisions and favorable safety profiles" },
      ],
      analogies: [
        "The lamina cribrosa is like a watch face - when pressure behind it increases, it bows forward and the axons passing through its holes get pinched.",
        "Prostaglandin analogs work like opening a side door in a room - fluid can exit through an alternative route (uveoscleral outflow) when the main drain is slow.",
      ],
      clinicalNotes: 'For patients with glaucoma and cataracts, combined phaco + MIGS can lower IOP by 15-25% while reducing medication burden. For patients on anticoagulation, SLT and many MIGS procedures can be performed safely without stopping blood thinners.',
    },
    4: {
      level: 4,
      summary: "Glaucoma management incorporates advanced imaging for early detection, individualized target IOP based on risk factors, and tiered therapy from medications to surgical intervention. Understanding aqueous dynamics, optic nerve head biomechanics, and treatment sequencing enables optimization of long-term visual outcomes.",
      explanation: `## Advanced Pathophysiology

**Biomechanics of the Optic Nerve Head:**

1. **Lamina Cribrosa Strain:**
   - Finite element modeling shows stress concentration
   - Superior and inferior poles most vulnerable
   - Microarchitecture differs by region
   - Posterior deformation precedes RNFL loss

2. **Connective Tissue Remodeling:**
   - Extracellular matrix changes
   - Elastin and collagen alterations
   - Laminar beam thickening and posterior bowing
   - Astrocyte activation and glial response

3. **Vascular Dysregulation:**
   - Reduced optic nerve head blood flow
   - Loss of autoregulatory capacity
   - Endothelial dysfunction
   - Vasospasm (migraine, Raynaud association)

**Genetic Factors:**

**Primary Open-Angle Glaucoma:**
- MYOC (myocilin): 3-5% of POAG
- OPTN (optineurin): NTG association
- TBK1: NTG with normal pressure
- CYP1B1: congenital glaucoma
- Multiple loci from GWAS (CAV1, CDKN2BAS)

**Primary Angle-Closure Glaucoma:**
- Narrow angles inherited
- Anatomic factors: shallow anterior chamber, thick lens
- PAX6, HGF, MMP genes

**Normal-Tension Glaucoma:**
- OPTN mutations
- TBK1 duplications
- Mitochondrial DNA variants

**Aqueous Humor Dynamics:**

**Production:**
- Ciliary body epithelium (double layer)
- Active transport (Na+/K+ ATPase)
- Carbonic anhydrase dependent
- Rate: ~2.5 µL/min

**Outflow Pathways:**

1. **Conventional (Trabecular):**
   - 75-90% of outflow
   - Trabecular meshwork resistance
   - Schlemm canal inner wall
   - Collector channels
   - Episcleral veins
   - Pressure-sensitive

2. **Unconventional (Uveoscleral):**
   - 10-25% of outflow
   - Ciliary muscle face
   - Suprachoroidal space
   - Less pressure-sensitive
   - Enhanced by prostaglandins

**Target IOP Determination:**

**Risk Factors for Progression:**

| Factor | Impact on Progression |
|--------|----------------------|
| Higher baseline IOP | Faster progression |
| Worse baseline damage | More rapid progression |
| Older age | Faster progression |
| Disc hemorrhage | 3x higher risk |
| Pseudoexfoliation | Faster progression |
| Central corneal thickness | Thin = higher risk |
| Family history | Higher risk |
| Race | African American = faster |
| Vascular disease | Higher risk |

**Target IOP Formula:**
- Baseline IOP - 20-30% for early damage
- Baseline IOP - 30-40% for moderate damage
- Baseline IOP - 40-50% for advanced damage
- Adjust based on rate of progression
- Goal: single-digit IOP for very advanced disease

**Diagnostic Testing Advances**

**OCT Angiography:**
- Non-invasive vascular imaging
- Radial peripapillary capillary density
- Macular microvasculature
- Shows vascular loss before structural damage

**Standardized Aerial Fields:**
- Trend analysis (Guided Progression Analysis)
- Visual field index (VFI)
- Pointwise linear regression
- Event vs trend analysis

**Progression Detection:**

**Structural (OCT):**
- RNFL thickness change
- Guided Progression Analysis (GPA)
- Trend-based analysis
- Minimum clinically significant change: ~2 µm

**Functional (Visual Field):**
- MD slope < -0.5 dB/year = progression
- Pattern deviation worsening
- Cluster analysis
- Event vs trend analysis

**Disc Hemorrhage:**
- Flame-shaped hemorrhage at optic disc rim
- Strong predictor of progression
- Associated with localized RNFL loss
- Indicates localized vascular insufficiency

## Treatment Strategies

**Initial Therapy Selection:**

**First-line options:**
1. Prostaglandin analog (monotherapy)
2. SLT (especially if medication adherence concern)
3. Combination therapy (if IOP very high)

**Medication Sequencing:**
1. Start with PGA monotherapy
2. Add second agent (different mechanism)
3. Consider fixed-dose combination for adherence
4. Maximum medical therapy: 3-4 classes

**Adherence Considerations:**
- Complex regimens reduce adherence
- Preservative-free formulations (Zioptan, Cosopt PF)
- Once-daily dosing preferred
- Educational interventions
- Reminder systems

**When to Advance Therapy:**
- IOP above target on two consecutive visits
- Documented progression despite stable IOP
- Intolerance to current regimen
- Medication non-adherence

**Laser Therapy Timing:**

**SLT Indications:**
- Initial therapy (preferred by many over drops)
- Adjunct to medications
- Alternative when medications ineffective
- Reduces medication burden
- Repeatable

**Success Predictors:**
- Lower baseline IOP (<30 mmHg)
- Younger age
- Open angle on gonioscopy
- No prior glaucoma surgery
- Pigmented trabecular meshwork

**Surgical Indications:**

**Trabeculectomy Indications:**
- Maximum medical therapy failure
- Progression despite target IOP
- Non-adherence with advanced disease
- Patient preference
- Need for very low IOP (<12 mmHg)
- Combined with cataract surgery

**Tube Shunt vs Trabeculectomy (TVT Study):**
- Similar IOP reduction
- Tubes: fewer early complications, more late complications
- Trabeculectomy: more early complications, more reoperations
- Tubes preferred if: prior ocular surgery, conjunctival scarring

**MIGS Indications:**
- Mild-moderate glaucoma
- IOP < 25 mmHg on ≤2 medications
- Having cataract surgery
- Goal: reduce medications, mild IOP reduction
- Contraindicated in advanced disease

## Special Situations

**Ocular Hypertension (OHT):**

**Definition:**
- IOP >21 mmHg
- Normal optic nerve
- Normal visual field

**OHTS Study Results:**
- Conversion to glaucoma: 9.5% at 5 years
- Treatment reduces conversion by 50%
- Risk factors: older age, larger cup/disc, higher IOP, thinner CCT, larger PSD
- Treatment recommended if 5-year risk ≥10%

**Normal-Tension Glaucoma:**

**CNTG Study:**
- 30% IOP reduction reduced progression by ~50%
- Target IOP: 30% reduction from baseline
- Consider underlying causes: sleep apnea, hypotension

**Pigment Dispersion Syndrome:**

**Characteristics:**
- Myopic young adults
- Pigment liberation on iris back
- Krukenberg spindle (vertical pigment on corneal endothelium)
- Mid-peripheral iris transillumination defects
- Trabecular meshwork pigmentation

**Treatment:**
- Observation if IOP normal
- Miotics (pilocarpine) for IOP control
- LPI can worsen (increases pigment dispersion)
- Consider lens extraction early

**Pseudoexfoliation Syndrome:**

**Systemic Associations:**
- Vascular disease, dementia
- Tadalafil, hearing loss
- Deposits throughout body

**Ocular Features:**
- White material on lens, pupillary margin, ciliary body
- Poor pupil dilation
- Zonular weakness
- Higher IOP, more rapid progression

**Surgical Considerations:**
- High risk of complications
- Capsule tension ring during cataract surgery
- Consider tube shunt or trabeculectomy
- More aggressive IOP targets needed

**Neovascular Glaucoma:**

**Etiology:**
- Retinal ischemia (PDR, CRVO, OIS)
- VEGF-driven
- Fibrovascular membrane closes angle

**Stages:**
1. Rubeosis (NV only)
2. Open angle with NV
3. Closed angle with NV

**Treatment:**
- Anti-VEGF injections
- Panretinal photocoagulation (PRP)
- Tube shunt surgery (trabeculectomy high failure)
- Cyclodestruction for refractory cases

**Uveitic Glaucoma:**

**Mechanisms:**
- Inflammatory debris (trabeculitis)
- Peripheral anterior synechiae
- Corticosteroid response
- Ciliary body shutdown

**Treatment:**
- Control inflammation
- Avoid corticosteroids if possible
- SLT ineffective
- Surgical options challenging`,
      keyTerms: [
        { term: "ocular hypertension", definition: "Elevated IOP without optic nerve damage or visual field loss; 5-10% develop glaucoma per year" },
        { term: "disc hemorrhage", definition: "Flame-shaped hemorrhage at optic disc rim; strong predictor of glaucoma progression" },
        { term: "OHTS", definition: "Ocular Hypertension Treatment Study; landmark trial showing treatment reduces conversion to glaucoma" },
        { term: "TVT study", definition: "Tube Versus Trabeculectomy; comparative trial showing tubes and trabeculectomy have similar long-term IOP reduction" },
        { term: "rubeosis", definition: "Neovascularization of the iris; caused by retinal ischemia and leads to neovascular glaucoma" },
      ],
      clinicalNotes: `Key clinical pearls:

1. **Central corneal thickness matters** - Thin corneas (<555 µm) increase glaucoma risk 3x. Thick corneas may artifactually raise IOP readings. Always measure CCT.

2. **Disc hemorrhages matter** - If you see a disc hemorrhage, the patient is at high risk of progression. Consider lowering target IOP by another 20%.

3. **Don't forget gonioscopy** - Essential for every glaucoma evaluation. Never assume open angle without gonioscopy. Perform before starting treatment.

4. **SLT before or early** - SLT is as effective as a prostaglandin analog and can reduce medication burden. Consider as first-line therapy, especially for adherence concerns.

5. **Treat aggressively in advanced disease** - Patients with advanced damage need lower target IOP, often in single digits. Don't accept "borderline" IOP control.

6. **Pseudoexfoliation requires surgery sooner** - These patients progress faster and have higher IOPs. Don't wait until maximum medical therapy failed before discussing surgery.

7. **Check for non-adherence** - If IOP unexplainedly high, ask about drop use. Pharmacy refill records can help identify adherence issues.`,
    },
    5: {
      level: 5,
      summary: "Contemporary glaucoma management integrates precision medicine approaches, advanced imaging for early detection, and individualized treatment algorithms. Emerging therapeutics target neuroprotection, aqueous dynamics at the molecular level, and novel surgical approaches including MIGS and device-based therapies to optimize long-term outcomes.",
      explanation: `## Current Evidence and Guidelines

**Target IOP Paradigm:**

The concept of a "normal" IOP (<21 mmHg) is outdated. Evidence supports:

1. **Individualized targets based on:**
   - Baseline IOP and amount of damage
   - Rate of progression (confirmed progression is key)
   - Life expectancy and quality of life
   - Corneal thickness (pachymetry)
   - Bilateral disease status
   - Patient age and general health

2. **Evidence from major trials:**

| Trial | Population | Key Finding |
|-------|------------|-------------|
| AGIS | Advanced glaucoma | Lower IOP target (<18) reduced progression |
| CIGTS | Early/moderate | Surgery vs meds similar initially, surgery better later |
| OHTS | Ocular hypertension | Treatment reduces progression 50% |
| EMGT | Early POAG | IOP reduction reduces progression by 50% |
| CNTGS | Normal tension | 30% IOP reduction slows progression |

3. **24-hour IOP fluctuation:**
   - Diurnal variation (typically higher in morning)
   - Nocturnal IOP elevation (supine position)
   - Peak IOP often outside office hours
   - Consider home monitoring, water drinking test

## Advanced Diagnostic Approaches

**Genetic Testing:**

**Current indications:**
- Strong family history
- Early-onset glaucoma
- Normal-tension glaucoma with atypical features
- Congenital/developmental glaucoma

**Available tests:**
- MYOC sequencing
- OPTN testing
- CYP1B1 for congenital
- Panel testing for multiple genes
- Direct-to-consumer limited utility

**Artificial Intelligence in Glaucoma Detection:**

**Deep learning applications:**
- Optic disc classification from fundus photos
- Visual field interpretation
- OCT analysis and progression detection
- Risk prediction models

**Limitations:**
- Training data bias
- Black box decision making
- Regulatory approval status
- Integration into clinical workflow

**Home Monitoring:**

**Visual field home testing:**
- Melbourne Rapid Fields (MRF) tablet test
- Peristat online perimetry
- Useful for monitoring between office visits

**IOP home monitoring:**
- iCare HOME rebound tonometer
- Tono-Pen home use (limited)
- Contact lens sensor (Triggerfish)
- Emerging telemetric IOP sensors

## Pharmacologic Advances

**Novel Drug Delivery Systems:**

1. **Bimatoprost SR (Sustained Release):**
   - Biodegradable implant
   - Injected into anterior chamber
   - Lasts 4-6 months
   - Phase 3 trial results: IOP reduction 30%

2. **Travoprost EX (Exfoliation):**
   - Travoprost ring inserted in punctum
   - Lasts ~90 days
   - Compliance issues

3. **Dosing aids:**
   - Electronic drop dispensers
   - Reminder systems
   - Drop quantity tracking

**Rho Kinase Inhibitors:**

**Netarsudil (Rhopressa, Rocklatan):**
- First-in-class ROCK inhibitor
- Mechanism: Increases trabecular outflow + decreases episcleral venous pressure
- Side effects: Conjunctival hyperemia (50%), corneal verticillata (25%)
- Combining with latanoprost (Rocklatan) reduces hyperemia
- Additional benefit when added to PGA

**Preservative-Free Formulations:**
- Tafluprost (first PF prostaglandin)
- Preservative-free timolol
- Cosopt PF
- Reduced ocular surface disease
- Better tolerability for long-term use

## Surgical Innovations

**MIGS Expansion:**

**iStent/ iStent inject:**
- Two stents placed in Schlemm canal
- Bypass trabecular meshwork
- Combined with cataract surgery
- IOP reduction: 6-8 mmHg, -1 medication

**Hydrus Microstent:**
- Largest MIGS device
- Schlemm canal scaffold
- 8 mm span
- HORIZON trial: 77% medication-free vs 55% cataract alone

**Xen Gel Stent:**
- Subconjunctival filtration
- Minimally invasive tube
- IOP reduction: 9-10 mmHg
- Lower complication rate than trabeculectomy
- Needling for bleb revision common

**Preserflo (Formerly InnFocus):**
- Microshunt with lumen
- PTFE material
- Similar to Xen but without gelatin

**Transccleral Filtration:**
- Ab interno approach
- No conjunctival dissection
- Less invasive than traditional surgery

**New Tube Shunt Designs:**
- Paul tube (smaller footprint)
- Ahmed ClearPath
- Baerveldt 250/350 improvements

**Cyclodestructive Procedures:**

**Micropulse Cyclophotocoagulation:**
- "Subthreshold" laser delivery
- Tissue sparing
- Less inflammation than traditional CPC
- Useful for refractory glaucoma

**Endocyclophotocoagulation (ECP):**
- Endoscopic approach
- Direct visualization of ciliary processes
- Often combined with cataract surgery

**Ultrasound Cyclodestruction:**
- High-intensity focused ultrasound (EyeOP1)
- Non-invasive cycloablation
- Useful for patients who cannot tolerate surgery

## Neuroprotection and Future Directions

**Neuroprotection Strategies:**

1. **Blood flow optimization:**
   - Treat nocturnal hypotension
   - Avoid overtreatment of hypertension
   - Address sleep apnea
   - Optimize perfusion pressure

2. **Mitochondrial support:**
   - Coenzyme Q10
   - Alpha-lipoic acid
   - Limited clinical evidence

3. **Glutamate antagonists:**
   - Memantine (trials failed)
   - Riluzole (under investigation)

4. **Neurotrophic factors:**
   - BDNF delivery challenges
   - Ciliary neurotrophic factor
   - Gene therapy approaches

5. **Stem cell therapy:**
   - RGC replacement
   - Optic nerve regeneration
   - Significant barriers remain

**Optic Nerve Regeneration:**

**Challenges:**
- CNS environment inhibits regeneration
- Glial scarring at lamina cribrosa
- Long distance to lateral geniculate nucleus
- Complex connectivity

**Approaches:**
- PTEN/mTOR pathway manipulation
- Nogo receptor blockade
- Oligodendrocyte myelin glycoprotein inhibition
- Gene therapy (AAV vectors)

**Biomarker Development:**
- Tear film biomarkers
- Aqueous humor analysis
- Serum markers
- Genetic risk profiling
- Multi-omics approaches

## Controversies and Evolving Concepts

**Normal-Tension Glaucoma:**
- Is it a distinct disease or POAG spectrum?
- Role of intracranial pressure (trans-laminar pressure gradient)
- When to treat very low IOPs
- Balance with systemic vascular health

**Ocular Hypertension Treatment:**
- Not all OHT progresses
- Risk stratification (OHTS predictive model)
- Observation vs treatment threshold
- Patient-specific factors

**Surgery Timing:**
- Traditional: surgery after medical therapy failure
- Emerging: earlier surgery for selected patients
- FIRST trial: trabeculectomy first had better long-term IOP control
- Consider younger patients, advanced disease, pseudoexfoliation

**Combination Therapy:**
- When to combine medications
- Fixed-dose combinations for adherence
- Combination vs monotherapy efficacy
- Cost considerations

**Laser Trabeculoplasty Position:**
- First-line (supported by NICE UK guidelines)
- After medication failure (traditional US approach)
- Repeat SLT efficacy data
- SLT vs medication direct comparison (LiGHT trial: SLT non-inferior)

**MIGS Role:**
- Expanding indications
- Combining procedures
- Long-term efficacy data emerging
- Cost-effectiveness analysis`,
      keyTerms: [
        { term: "LiGHT trial", definition: "Laser in Glaucoma and Ocular Hypertension; showed SLT first-line non-inferior to medications and more cost-effective" },
        { term: "ocular surface disease", definition: "Inflammation and damage to cornea and conjunctiva from long-term preservative exposure in glaucoma drops" },
        { term: "trans-laminar pressure gradient", definition: "Difference between IOP and intracranial pressure across the lamina cribrosa; may influence NTG pathogenesis" },
        { term: "micropulse CPC", definition: "Subthreshold cyclodestruction using short laser pulses to minimize tissue damage while lowering IOP" },
        { term: "bimatoprost SR", definition: "Sustained-release bimatoprost implant; biodegradable intracameral implant lasting 4-6 months" },
      ],
      clinicalNotes: `Advanced clinical pearls:

1. **Don't treat numbers, treat the disease** - Some patients tolerate 30 mmHg without progression; others progress at 12 mmHg. Base treatment decisions on documented progression, not just IOP.

2. **LiGHT trial changed practice** - SLT as first-line therapy is non-inferior to drops and may be more cost-effective. Consider SLT before or instead of initiating medications.

3. **Measure what matters** - Central corneal thickness, diurnal IOP fluctuation, and rate of structural/functional progression are more important than a single IOP measurement.

4. **MIGS isn't for everyone** - MIGS provides modest IOP reduction (15-25%). Advanced disease or very high IOP still requires trabeculectomy or tube shunt.

5. **Treat the whole patient** - Systemic blood pressure, sleep apnea, migraines, and medications all affect glaucoma. Consider nocturnal hypotension in NTG patients.

6. **Document progression carefully** - Use both structural (OCT) and functional (visual field) data. Trend analysis is more valuable than single measurements. GPA reports on both help identify true progression.

7. **When in doubt, go lower** - For advanced disease or uncertain progression, aim for lower IOP. The risk of undertreatment exceeds the risk of overtreatment.`,
    },
  },

  media: [
    {
      id: "glaucoma-angle-anatomy",
      type: "diagram",
      filename: "glaucoma-angle-anatomy.svg",
      title: "Anterior Chamber Angle Anatomy",
      description: "Comparison of open angle vs angle-closure on gonioscopy",
    },
    {
      id: "glaucoma-visual-field-loss",
      type: "diagram",
      filename: "glaucoma-visual-field-progression.svg",
      title: "Glaucoma Visual Field Progression",
      description: "Typical patterns of visual field loss from early to advanced glaucoma",
    },
    {
      id: "cupping-illustration",
      type: "diagram",
      filename: "optic-nerve-cupping.svg",
      title: "Optic Nerve Cupping",
      description: "Progression of optic nerve cupping in glaucoma",
    },
  ],

  citations: [
    {
      id: 'aao-glaucoma-2020',
      type: "article",
      title: "Primary Open-Angle Glaucoma Preferred Practice Pattern",
      authors: ["American Academy of Ophthalmology"],
      source: "Ophthalmology",
    },
    {
      id: "ohts-study",
      type: "article",
      title: "The Ocular Hypertension Treatment Study: A Randomized Trial Determines That Topical Ocular Hypotensive Medication Delays or Prevents the Onset of Primary Open-Angle Glaucoma",
      authors: ["Kass MA", "Heuer DK", "Higginbotham EJ", "et al."],
      source: "Archives of Ophthalmology",
    },
    {
      id: "light-trial",
      type: "article",
      title: "Laser in Glaucoma and Ocular Hypertension (LiGHT) Trial",
      authors: ["Gazzard G", "et al."],
      source: "Ophthalmology",
    },
  ],

  crossReferences: [
    { targetId: "condition-cataract", targetType: "condition", relationship: "related", label: "Cataract" },
    { targetId: "condition-diabetic-retinopathy", targetType: "condition", relationship: "related", label: "Diabetic Retinopathy" },
    { targetId: "condition-retinal-detachment", targetType: "condition", relationship: "related", label: "Retinal Detachment" },
  ],

  tags: {
    systems: ["visual", "nervous"],
    topics: ["ophthalmology", "neuro-ophthalmology", "optic nerve"],
    keywords: ["glaucoma", "intraocular pressure", "optic neuropathy", "visual field"],
    clinicalRelevance: "critical",
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ["surgery", "family medicine", "neurology"],
    },
  },

  createdAt: '2025-01-26T00:00:00.000Z',
  updatedAt: '2025-01-26T00:00:00.000Z',
  version: 1,
  status: "published",
};

export default glaucoma;
