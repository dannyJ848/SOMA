/**
 * Cataract - Comprehensive Educational Content
 *
 * Covers lens opacification, types, diagnosis, surgical timing, and outcomes
 * of cataract extraction.
 */

import { EducationalContent } from '../../types';

export const cataract: EducationalContent = {
  id: 'condition-cataract',
  type: 'condition',
  name: 'Cataract',
  nameEs: 'Catarata',
  alternateNames: ['Lens Opacification', 'Senile Cataract', 'Nuclear Sclerosis'],
  hpoId: 'HP:0000518',

  levels: {
    1: {
      level: 1,
      summary: 'A cataract is a cloudy area in the lens of your eye that makes vision blurry, like looking through a foggy window.',
      explanation: `Think of your eye's lens like a clear camera lens that helps focus light. When you are born, this lens is perfectly clear. As you get older, or due to other reasons, the lens can become cloudy. This is called a cataract.

**What causes cataracts?**
- Getting older (most common cause)
- Diabetes
- Eye injuries
- Steroid medications
- Too much sunlight exposure over time
- Smoking

**What does cataract vision feel like?**
People with cataracts often describe their vision as:
- Looking through a foggy or frosted window
- Colors seem faded or yellowed
- Glare from lights bothers you (especially when driving at night)
- Frequent changes in glasses prescription

**How are cataracts treated?**
The only way to fix a cataract is with surgery. During surgery:
- The cloudy lens is removed
- A clear artificial lens is put in its place
- The surgery usually takes about 15-20 minutes
- It's one of the safest and most common surgeries

**When should you have surgery?**
Surgery is needed when:
- Vision problems affect your daily life (reading, driving, hobbies)
- You can't see well enough to do things you enjoy
- Glare makes driving dangerous

Most people wait until the cataract bothers them enough to want surgery. There's no harm in waiting if you can still do what you need to do.`,
      keyTerms: [
        { term: 'lens', definition: "The clear part of the eye behind the colored iris that helps focus light" },
        { term: 'cataract', definition: "A cloudy area in the lens of the eye that makes vision blurry" },
        { term: 'intraocular lens', definition: "An artificial lens that replaces the cloudy natural lens during surgery" },
      ],
      analogies: [
        'A cataract is like looking through a foggy bathroom window after a hot shower - everything is blurry and unclear.',
        'The lens is like the lens in a camera - when it gets dirty or cloudy, the pictures (what you see) are not clear.',
      ],
      examples: [
        'An elderly person notices colors look faded and has trouble seeing road signs when driving at night due to glare.',
        'Someone with diabetes might develop cataracts at a younger age than people without diabetes.',
      ],
      patientCounselingPoints: [
        'Cataract surgery is elective - have it when your vision affects your daily life.',
        'Surgery is outpatient and you go home the same day.',
        'Vision continues to improve for several weeks after surgery as the eye heals.',
        'You may still need glasses for reading after surgery.',
        'Protect your eyes from UV light with sunglasses to help prevent cataracts.',
      ],
    },
    2: {
      level: 2,
      summary: "A cataract is an opacification of the eye's natural lens, causing progressive visual loss. Cataracts are classified by location (nuclear, cortical, posterior subcapsular) and are treated with surgical extraction and intraocular lens implantation when vision affects daily activities.",
      explanation: `## Anatomy of the Lens

The lens is a biconvex, transparent structure located behind the iris and pupil. It focuses light onto the retina and changes shape to allow focusing at different distances (accommodation).

## Types of Cataracts

**1. Nuclear Sclerotic Cataract (most common):**
- Located in the center (nucleus) of the lens
- Causes gradual yellowing and hardening
- Initially may cause "second sight" - temporary improvement in near vision
- Eventually causes overall blurry vision
- Most common with aging

**2. Cortical Cataract:**
- Spoke-like opacities in the outer layer (cortex) of the lens
- Can cause glare, especially with oncoming headlights at night
- Common in people with diabetes

**3. Posterior Subcapsular Cataract (PSC):**
- Located at the back of the lens, right behind the capsule
- Causes most rapid vision loss
- Significant glare and difficulty reading
- Associated with steroid use, diabetes, and younger age

## Risk Factors

**Age-related (most common):**
- Age 65+: affects >50% of Americans
- Age 80+: affects >90% of Americans

**Other risk factors:**
- Diabetes mellitus (2-4x increased risk)
- Corticosteroid use (oral, topical, inhaled)
- Smoking
- Alcohol use
- UV light exposure
- Eye trauma
- Previous eye surgery
- Myopia (nearsightedness)
- Family history

## Symptoms

- Blurred vision that cannot be corrected with glasses
- Glare and light sensitivity
- Difficulty driving at night
- Faded colors
- Frequent prescription changes
- Double vision in one eye
- Need for brighter light for reading

## Diagnosis

- Comprehensive eye exam including visual acuity testing
- Slit lamp examination to visualize lens opacity
- Retinal exam to ensure the back of the eye is healthy
- Potential acuity meter or brightness acuity testing

## Cataract Surgery

**Indications for surgery:**
- Visual impairment that affects daily activities
- Glare that affects driving or other activities
- Medical need (cataract prevents monitoring or treatment of retinal disease)
- Lens-induced glaucoma or inflammation

**Surgical technique:**
- Phacoemulsification (phaco): ultrasound breaks up and removes the lens
- Small incision (2-3 mm)
- Local anesthesia (drops or injection)
- Intraocular lens (IOL) implantation

**Intraocular Lens Options:**
- Monofocal IOL: clears distance vision, reading glasses typically needed
- Toric IOL: corrects astigmatism
- Multifocal/Premium IOL: may reduce need for glasses

**Risks and complications:**
- Posterior capsule rupture (1-2%)
- Endophthalmitis (infection) - very rare (<0.1%)
- Retinal detachment
- Corneal edema
- Posterior capsule opacification ("after cataract") - 20-30%
- Refractive surprise (wrong glasses prescription)

**Recovery:**
- Most people notice improved vision within days
- Complete healing takes 4-6 weeks
- Eye drops for several weeks after surgery
- New glasses prescribed after healing`,
      keyTerms: [
        { term: 'phacoemulsification', definition: "Surgical technique using ultrasound energy to break up and remove the cloudy lens" },
        { term: 'intraocular lens (IOL)', definition: "Artificial lens implanted during cataract surgery to replace the natural lens" },
        { term: 'posterior capsule opacification', definition: "Clouding of the lens capsule after cataract surgery; treated with laser (YAG capsulotomy)" },
        { term: 'glare', definition: "Difficulty seeing in bright light or with oncoming headlights; common symptom of cataracts" },
      ],
      analogies: [
        'Nuclear sclerosis is like the lens becoming like a hard yellowed piece of plastic rather than clear jelly.',
        'Phacoemulsification is like using a tiny vacuum with ultrasound to suck out the cloudy lens through a small tube.',
      ],
      patientCounselingPoints: [
        'Cataract surgery is considered when vision problems interfere with your lifestyle and activities.',
        'Surgery has a >95% success rate for significant visual improvement.',
        'You will still need an eyeglass prescription for best vision after surgery.',
        'If you have both eyes with cataracts, surgeries are typically done 1-4 weeks apart.',
        'A "secondary cataract" can develop years later but is easily fixed with a quick laser procedure.',
      ],
    },
    3: {
      level: 3,
      summary: 'Cataract is a lens opacification involving protein denaturation and aggregation, causing progressive loss of transparency. Classification by morphology and etiology guides management, with phacoemulsification and IOL implantation being the standard of care when visual function is compromised.',
      explanation: `## Pathophysiology

**Lens Structure:**
- Capsule: basement membrane surrounding the lens
- Epithelium: single layer of cells on anterior capsule (cuboidal)
- Cortex: newly formed lens fibers
- Nucleus: oldest lens fibers in center

**Normal Lens Transparency:**
- Precise arrangement of lens proteins (crystallins)
- Absence of light-scattering organelles (mature fibers lack nuclei and mitochondria)
- Antioxidant systems (glutathione, ascorbate) to prevent oxidative damage
- Low water content in nucleus maintains transparency

**Cataract Formation Mechanisms:**

1. **Protein Denaturation and Aggregation:**
   - Oxidative damage to crystallins
   - Formation of high molecular weight aggregates
   - Light scattering from protein clumps

2. **Post-translational Modifications:**
   - Glycation (especially in diabetes)
   - Deamidation
   - Racemization
   - Truncation
   - Disulfide bond formation

3. **Calcium and Electrolyte Imbalance:**
   - Increased intracellular calcium
   - Activation of calpain proteases
   - Proteolysis of crystallins

4. **UV-Induced Damage:**
   - Photooxidative damage
   - Tryptophan derivatives and chromophores
   - Yellowing/browning of lens (nuclear sclerosis)

## Classification

**By Location/Morphology:**

| Type | Location | Characteristics | Symptoms |
|------|----------|-----------------|----------|
| Nuclear | Central nucleus | Yellow/brown, hardens | Gradual blur, myopic shift |
| Cortical | Peripheral cortex | Wedge-shaped, white spokes | Glare, monocular diplopia |
| Posterior Subcapsular | Posterior cortex | Granular, plaque-like | Rapid vision loss, glare |
| Anterior Subcapsular | Anterior cortex | Fibrous, inflammatory | Often trauma-related |
| Polar | Anterior or posterior pole | Congenital or inherited | Significant visual impact |

**By Etiology:**

1. **Age-Related (Senile):**
   - Most common type
   - Combination of nuclear, cortical, and PSC changes

2. **Secondary:**
   - Diabetes: accelerated aging, snowflake opacities
   - Steroids: PSC pattern, dose and duration dependent
   - Uveitis: inflammatory precipitates
   - Retinitis pigmentosa: posterior and anterior subcapsular
   - High myopia: early onset nuclear cataract

3. **Traumatic:**
   - Rupture of lens capsule
   - Rapid cortical opacification (white cataract)
   - Rosette cataract pattern

4. **Congenital:**
   - Genetic mutations (crystallin genes, connexins)
   - Maternal infections (TORCH)
   - Metabolic disorders (galactosemia, hypocalcemia)

5. **Systemic Disease Associations:**
   - Wilson disease: sunflower cataract
   - Myotonic dystrophy: Christmas tree cataract
   - Dermatomyositis: posterior subcapsular
   - Atopic dermatitis: shield-shaped anterior subcapsular

## Clinical Evaluation

**Visual Function Assessment:**
- Best corrected visual acuity (BCVA)
- Contrast sensitivity function
- Glare testing (Brightness Acuity Tester)
- Potential acuity meter (PAM) or Maddox rod test

**Slit Lamp Examination:**
- Lens opacity classification (LOCS III system)
- Grading of nuclear color and opalescence (NC1-6)
- Cortical opacities (C1-5)
- Posterior subcapsular (P1-5)

**Dilated Fundus Examination:**
- Essential to rule out macular pathology
- B-scan ultrasound if view obscured

**Special Considerations for Surgery:**
- If macular edema or epiretinal membrane present, manage expectations
- Optic nerve assessment (glaucoma)
- Zinn-Hall monitor for potential acuity in dense cataracts

## Surgical Management

**Phacoemulsification Technique:**

1. **Anesthesia:**
   - Topical anesthesia (tetracaine, proparacaine)
   - Intracameral lidocaine
   - Sub-Tenon or peribulbar block if needed

2. **Corneal Incisions:**
   - Main phaco incision (2.2-3.0 mm)
   - Side-port paracentesis (1 mm)

3. **Capsulorhexis:**
   - Continuous curvilinear capsulorhexis (CCC)
   - 5-5.5 mm diameter centered on lens
   - Critical for IOL centration and stability

4. **Hydrodissection:**
   - Separates cortex from capsule
   - Frees lens for rotation

5. **Phacoemulsification:**
   - Groove the nucleus
   - Crack and divide (divide and conquer)
   - Emulsify and aspirate fragments
   - Irrigation/aspiration of cortex

6. **IOL Implantation:**
   - Inject foldable IOL through injector
   - Place in capsular bag
   - Position haptics

7. **Wound Closure:**
   - Usually self-sealing (no sutures needed)

**Intraocular Lens Calculations:**
- Sanders-Retzlaff-Kraff (SRK) formula
- Holladay 2, Hoffer Q (for short eyes)
- Haigis (for different anterior chamber depths)
- Axial length by optical biometry (IOLMaster)
- Keratometry for corneal curvature

**IOL Types:**

| IOL Type | Benefits | Considerations |
|----------|----------|----------------|
| Monofocal | Predictable, covered by insurance | Glasses needed for near/intermediate |
| Toric | Corrects astigmatism | Must align properly, may rotate |
| Multifocal | Range of vision | Glare, halos, not for everyone |
| Accommodating | Some near function | Limited effectiveness |
| Light Adjustable | Refinements post-op | Requires UV protection, multiple procedures |

## Complications

**Intraoperative:**
- Posterior capsule rupture (1-3%)
  - Higher risk: floppy iris syndrome, pseudoexfoliation, high myopia
  - Management: anterior vitrectomy, IOL in sulcus or AC
- Suprachoroidal hemorrhage (rare but devastating)
- Iris trauma
- Corneal burn

**Postoperative:**
- Endophthalmitis (0.02-0.1%)
  - Prophylaxis: intracameral or topical antibiotics, povidone-iodine prep
- Corneal edema
  - Transient: common
  - Persistent: bullous keratopathy
- Cystoid macular edema (CME)
  - Incidence: 1-3% clinical, higher on OCT
  - Risk factors: diabetes, epiretinal membrane, complicated surgery
  - Treatment: NSAIDs, steroids
- Posterior capsule opacification (PCO)
  - 20-30% incidence
  - Treatment: YAG laser capsulotomy
- IOL dislocation/decentration
- Retinal detachment
  - Higher risk: high myopia, intraoperative vitreous loss
- Dysphotopsias (glare, halos, arcs)`,
      keyTerms: [
        { term: 'capsulorhexis', definition: "Creation of a circular opening in the anterior lens capsule during cataract surgery" },
        { term: 'LOCS III', definition: "Lens Opacities Classification System III; standardized grading system for cataracts" },
        { term: 'phacoemulsification', definition: "Use of ultrasound energy to emulsify and aspirate the lens through a small incision" },
        { term: 'pseudoexfoliation', definition: "Production of abnormal protein fibrils; associated with zonular weakness and surgical complications" },
        { term: 'YAG capsulotomy', definition: "Laser procedure to create an opening in an opaque posterior capsule after cataract surgery" },
        { term: 'CME', definition: "Cystoid macular edema; fluid accumulation in macula causing decreased vision after surgery" },
      ],
      analogies: [
        'The lens proteins are like a carefully organized deck of cards - cataract formation is like the cards getting stuck together and out of order.',
        'Capsulorhexis is like cutting a perfectly circular hole in plastic wrap - it requires precision and control.',
      ],
      clinicalNotes: 'For patients on tamsulosin (Flomax) or other alpha-blockers, warn about Intraoperative Floppy Iris Syndrome (IFIS). Consider stopping alpha-blockers preoperatively if possible, but this does not eliminate IFIS risk. Use strategies: intracameral phenylephrine, iris hooks, or pupil expansion devices.',
    },
    4: {
      level: 4,
      summary: 'Cataract formation involves oxidative protein modifications, crystallin aggregation, and loss of lens homeostasis. Surgical extraction with IOL implantation has evolved from large incision extracapsular techniques to microincisional phacoemulsification, with premium IOL options and advanced technology integration improving outcomes.',
      explanation: `## Molecular Pathogenesis

**Crystallins and Protein Homeostasis:**

The lens contains three main crystallin families:
- **Alpha-crystallins**: Molecular chaperones preventing aggregation
- **Beta-crystallins**: Structural proteins
- **Gamma-crystallins**: Monomeric structural proteins concentrated in nucleus

**Aging-Related Changes:**

1. **Alpha-crystallin Chaperone Function Decline:**
   - Age-related decrease in chaperone capacity
   - Sequestration of alpha-crystallin into aggregates
   - Reduced protection against protein unfolding

2. **Oxidative Stress:**
   - Depletion of glutathione (GSH)
   - Hydrogen peroxide accumulation
   - Oxidation of methionine and cysteine residues
   - Protein-thiol mixed disulfides

3. **Advanced Glycation End Products (AGEs):**
   - Maillard reaction between reducing sugars and proteins
   - Pentosidine and other cross-links
   - Lens protein cross-linking and insolubility
   - Accelerated in diabetes

4. **UV-Induced Tryptophan Derivatives:**
   - N-formylkynurenine, kynurenine
   - Act as photosensitizers generating ROS
   - Contribute to yellowing/nuclear sclerosis

**Genetic Factors:**

- Inherited cataracts: mutations in crystallin genes (CRYAA, CRYBB2), connexins (GJA3, GJA8), beaded filament proteins (BFSP1, BFSP2)
- Age-related cataract GWAS loci: genes involved in lens structure, hydration, and antioxidant pathways
- EPHA2, SLC44A3, CHMP4B associated with cortical cataract

## Advanced Surgical Techniques

**Phaco Energy Modulation:**

**Fluidics Parameters:**
- Aspiration flow rate (AFR): 20-40 mL/min
- Vacuum limit: 200-600 mmHg
- Bottle height: 60-100 cm (gravity) or 40-80 mmHg (pump)

**Phaco Power Modes:**
- **Continuous**: constant power delivery
- **Pulse**: on/off cycles (e.g., 50% duty cycle)
- **Burst**: short packets of energy
- **Ozil/Torsional**: rotary oscillation (Alcon)
- **Ellips**: transversal phaco (Bausch + Lomb)

**Advanced Phaco Techniques:**

1. **Chop Techniques:**
   - Divide and conquer: grooving and cracking
   - Stop and chop: prolapse nucleus, then chop
   - Phaco chop: nucleofracture without grooving
   - Vertical chop: less stress on zonules

2. **Femtosecond Laser-Assisted Cataract Surgery (FLACS):**
   - Laser creates corneal incisions
   - Automated capsulotomy
   - Lens fragmentation
   - Arcuate incisions for astigmatism
   - Evidence: slightly better refractive outcomes, higher cost

**Small Incision Surgery:**
- Microincision cataract surgery (MICS): <2.0 mm
- Bimanual technique: separate irrigation and aspiration
- Coaxial MICS: 1.8-2.2 mm incisions

## Premium IOL Technology

**Toric IOLs:**
- Correct corneal astigmatism ≥1.0 D
- Alignment critical: mark corneal axis preoperatively
- Orientation marks on IOL
- Stability and potential rotation concerns
- Brands: AcrySof Toric, Tecnis Toric, Staar Toric

**Multifocal IOLs:**

| Design Type | Example | Mechanism |
|-------------|---------|-----------|
| Refractive | ReZoom | Distance and near zones |
| Diffractive | Restor, Tecnis MF | Diffraction grating pattern |
| Apodized | Restor | Smooth transition between zones |
| Accommodative | Crystalens | Forward movement with accommodation |

**Extended Depth of Focus (EDOF) IOLs:**
- Tecnis Symfony, Vivity
- Elongated focus to improve intermediate vision
- Less photic phenomena than multifocals
- Pinhole effect via small aperture (IC-8)

**Light Adjustable Lens (LAL):**
- Photosensitive material
- UV light treatments postop to adjust power
- Lock-in with final UV exposure
- Requires UV protection until locked

## Challenging Scenarios

**Floppy Iris Syndrome (IFIS):**
- Tamsulosin and other alpha-1 blockers
- Iris billowing, prolapse, progressive constriction
- Management strategies:
  - Discontinue alpha-blockers (but IFIS risk persists)
  - Intracameral phenylephrine (1.5-2.5 mg)
  - Iris retractors/hooks
  - Malyugin ring or similar pupil expanders
  - Higher bottle height and lower vacuum

**Pseudoexfoliation Syndrome:**
- Exfoliative material on lens, zonules, ciliary body
- Zonular weakness and dehiscence
- Higher PCR rate, vitreous loss
- Management:
  - Capsular tension ring (CTR)
  - Low phaco power
  - Avoid aggressive nucleus manipulation
  - Consider sulcus IOL if capsule unstable

**Small Pupil:**
- Preop: atropine, phenylephrine
- Intraoperative: pupil stretching, iris hooks, Malyugin ring
- Avoid sphincterotomies if possible

**Brunescent Cataract:**
- Very dense, brown/black nucleus
- Requires higher phaco power
- Risk of thermal wound burn
- Consider:
  - Larger incision for nuclear expression
  - Femtosecond laser (limited penetration)
  - Lower vacuum to avoid surge

**Subluxated Cataract:**
- Traumatic or zonular pathology
- Capsular tension ring or segment
- Scleral-fixated IOL if inadequate capsule
- Iris-sutured or glued IOL techniques

## Postoperative Care

**Standard Regimen:**
- Antibiotic: 4th gen fluoroquinolone (moxifloxacin, gatifloxacin)
- NSAID: ketorolac, bromfenac, or nepafenac (CME prophylaxis)
- Steroid: prednisolone acetate, difluprednate
- Taper over 4-6 weeks

**Early Postop Complications:**

1. **Corneal Edema:**
   - Striate keratopathy (transient)
   - Descemet folds
   - Treatment: hypertonic saline, steroids, wait

2. **Elevated IOP:**
   - Viscoelastic residue (often next day)
   - Pupillary block
   - Steroid response
   - Treatment: aqueous suppressants, consider washout if severe

3. **Inflammation:**
   - Cells and flare in anterior chamber
   - Synechiae formation
   - Treatment: intensive steroids

4. **Toxic Anterior Segment Syndrome (TASS):**
   - Non-infectious inflammation
   - Early onset (12-48 hours)
   - Causes: contaminated solutions, endotoxin, detergents
   - Treatment: intensive steroids

**Late Complications:**

1. **Posterior Capsule Opacification (PCO):**
   - Elschnig pearls (lens epithelial cell proliferation)
   - Fibrosis and wrinkling
   - YAG capsulotomy indication: glare, decreased acuity
   - Complications: IOL rise, retinal detachment (rare)

2. **IOL Dislocation:**
   - Late spontaneous subluxation
   - Pseudoexfoliation risk
   - Treatment: IOL exchange or repositioning

3. **Retinal Detachment:**
   - Incidence: 0.5-1% (higher in myopes)
   - Posterior vitreous detachment timing
   - Symptoms: flashes, floaters, curtain

4. **Endophthalmitis:**
   - Onset: usually <1 week
   - Signs: pain, decreased vision, hypopyon
   - Treatment: vitreous tap and inject (TAI) or pars plana vitrectomy
   - Prophylaxis: intracameral antibiotics (most effective)`,
      keyTerms: [
        { term: 'IFIS', definition: "Intraoperative Floppy Iris Syndrome; iris instability during cataract surgery in patients on alpha-blockers" },
        { term: 'femtosecond laser-assisted cataract surgery', definition: "Use of femtosecond laser for capsulotomy, lens fragmentation, and corneal incisions" },
        { term: 'capsular tension ring', definition: "Device placed in capsular bag to distribute forces and stabilize in zonular weakness" },
        { term: 'EDOF IOL', definition: "Extended Depth of Focus intraocular lens; provides continuous range of vision with reduced photic phenomena" },
        { term: 'TASS', definition: "Toxic Anterior Segment Syndrome; non-infectious inflammation from contaminated substances or equipment" },
        { term: 'pseudoexfoliation', definition: "Production of abnormal fibrillar protein material associated with glaucoma and zonular weakness" },
      ],
      clinicalNotes: `For patients on tamsulosin or other alpha-1A blockers:
- Do not discontinue preop for IFIS prevention (doesn't help)
- Use intracameral phenylephrine (1.5-2.5 mg/0.1 mL) before capsulorhexis
- Prepare for IFIS: have iris hooks or Malyugin ring available
- Consider bimanual microincisional technique
- Use lower aspiration flow rate and vacuum
- Avoid iris trauma during phaco and IOL implantation`,
    },
    5: {
      level: 5,
      summary: 'Modern cataract surgery incorporates femtosecond laser technology, advanced IOL optics, and precision biometric calculations. Understanding lens molecular biology, zonular anatomy, and surgical microdynamics enables management of complex cases and optimization of visual outcomes tailored to individual patient needs and expectations.',
      explanation: `## Evidence-Based Practice in Cataract Surgery

**Preoperative Assessment**

**Biometry Evolution:**
- Optical biometry (IOLMaster, Lenstar) vs ultrasound (A-scan)
   - Optical: more precise, non-contact, measures to fovea
   - Ultrasound: required for dense cataracts
- Axial length measurement precision critical: 0.1 mm error = 0.27 D error
- Keratometry options: manual, automated, corneal topography, Scheimpflug

**Formula Selection by Axial Length:**

| Axial Length | Preferred Formula | Rationale |
|--------------|-------------------|-----------|
| <22 mm | Hoffer Q | Anterior chamber depth variation |
| 22-25 mm | SRK/T, Holladay 1 | Good accuracy in normal range |
| >25 mm | SRK/T, Haigis | Myopic eye considerations |
| >26 mm | Barrett Universal II, Olsen | Best for long eyes |
| <20 mm | Holladay 2 with Wang-Koch adjustment | Hyperopic modification |

**IOL Power Calculations:**
- Intraocular lens power calculation continues to improve
- Barrett Universal II: works across all axial lengths
- Hill-RBF: radial basis function method
- Kane formula: machine learning approach
- PEARL DGS: deep Gaussian learning for post-refractive eyes

**Post-Refractive Surgery Eyes:**
- History of LASIK/PRK/RK affects accuracy
- Multiple methods:
  - Clinical history method (if data available)
  - Wang-Koch method
  - Shammas method
  - Masket formula (double-K)
- Consider intraoperative aberrometry (ORA)

**Specialized IOL Considerations**

**Toric IOL Calculations:**
- Use total corneal astigmatism (posterior + anterior)
- Scheimpflug imaging measures posterior cornea
- Neglected posterior astigmatism leads to overcorrection
- Alignment accuracy: within 3 degrees ideal
- Rotation stability varies by platform
- Calculator: Barrett Toric, Holladay IOL Consultant

**Presbyopia-Correcting IOLs:**

**Multifocal:**
- Apodized diffractive (AcrySof Restor)
- Full diffractive (Tecnis MF)
- Refractive zone (ReZoom - mostly discontinued)
- Compromise: reduced contrast sensitivity, photic phenomena
- Patient selection critical

**EDOF (Extended Depth of Focus):**
- Tecnis Symfony: diffractive EDOIOL
- Small aperture (IC-8): pinhole effect
- Vivity, Synergy: combined EDOF + multifocal
- Better intermediate vision, fewer dysphotopsias
- Not for patients with macular disease

**Accommodating IOLs:**
- Crystalens: hinge-based (limited success)
 - Lumina and other next-gen designs in development
- True accommodation remains elusive

**Outcomes and Satisfaction:**

**Visual Acuity Outcomes:**
- >90% achieve 20/25 or better
- >50% achieve 20/20 or better
- Residual refractive error: within ±0.5 D in 70-75%

**Patient Satisfaction:**
- Monofocal: 95%+ satisfied with realistic expectations
- Premium IOLs: 85-90% satisfied
- Dissatisfaction causes:
  - Unmet presbyopia expectations (monofocal)
  - Dysphotopsias (multifocal)
  - Residual refractive error
  - PCO requiring YAG
  - Complications

**Cost-Effectiveness:**
- Cataract surgery: high value, improves quality of life
- Premium IOLs: incremental cost per QALY varies
- Consider patient values and visual needs

## Complications: Advanced Management

**Posterior Capsule Rupture:**

**Risk Factors:**
- Pseudoexfoliation syndrome (2-3x risk)
- Small pupil
- Floppy iris syndrome
- High myopia
- Prior vitrectomy
- Mature cataract
- Surgeon experience

**Intraoperative Management:**
1. Stop phaco immediately
2. Assess anterior chamber depth
3. Convert to anterior vitrectomy if vitreous present
4. Remove remaining lens material
5. IOL placement options:
   - Sulcus fixated (if adequate capsule support)
   - AC IOL (anterior chamber) - less favored now
   - Scleral-fixated IOL (sutured or glued)
   - Iris-fixated (Artisan)

**Postoperative Care:**
- Monitor for IOP spike
- Check for retained lens fragments
- Consider retina referral for vitrectomy if fragments present

**Endophthalmitis:**

**Incidence and Risk Factors:**
- Baseline: 0.02-0.1%
- Increased with: vitreous loss, intraoperative complications
- Prophylaxis:
  - Povidone-iodine 5% prep (most effective measure)
  - Intracameral cefuroxime (European Society study)
  - Postoperative antibiotics (less proven benefit)

**Organisms:**
- Gram-positive (70%): coagulase-negative Staph, Staph aureus
- Gram-negative (15-20%): Pseudomonas, Proteus
- Fungi (<5%): Candida, Aspergillus

**Management:**
- Immediate vitreous tap/culture and intravitreal antibiotics
- Vancomycin + ceftazidime (or amikacin)
- Consider immediate vitrectomy if vision < LP
- Postoperative antibiotics, steroids, cycloplegics

**Visual Outcomes:**
- 50% achieve 20/40 or better
- Worse with: virulent organisms, delayed presentation, poor baseline

**Cystoid Macular Edema (CME):**

**Incidence:**
- Angiographic: up to 30%
- Clinically significant: 1-3%

**Risk Factors:**
- Diabetes
- Epiretinal membrane
- Uveitis history
- Intraoperative complications
- Postoperative inflammation

**Prophylaxis:**
- Topical NSAID preop and postop (4-6 weeks)
- Especially in high-risk patients

**Treatment:**
- Intensify NSAID
- Add or increase topical steroid
- Consider oral steroids or periocular injection
- Intravitreal anti-VEGF or steroids for refractory cases
- Treat any epiretinal membrane

**Posterior Capsule Opacification:**

**Incidence and Timeline:**
- Adult: 20-30% by 2 years
- Pediatric: 100% (virtually universal)

**Risk Factors:**
- Younger age
- Hydrophobic acrylic IOL (less than hydrophilic/PMMA)
- Sharp optic edge design (square edge) reduces PCO
- Capsulorhexis coverage of IOL optic
- Incomplete cortical cleanup

**YAG Capsulotomy:**
- Indications: symptomatic glare, decreased VA, PCO visible
- Energy: 1-3 mJ per pulse
- Size: 3-4 mm diameter centered
- Complications:
  - IOP spike
  - IOL pitting (rare with modern lasers)
  - Retinal detachment (0.5-1%)
  - Anterior chamber IOL rise (rare)

**Refractive Outcomes**

**Astigmatism Management:**
- Corneal relaxing incisions (LRIs): 1-1.5 D correction
- Toric IOLs: up to 3-4 D correction
- Combination approach for higher astigmatism
- Consider postoperative toric IOL rotation if needed

**Presbyopia Management:**
- Monovision: one eye for distance, one for near
  - Successful in 60-70% of patients
  - Compromise: depth perception
- Multifocal IOLs: range of vision
  - Light split between distances
  - Reduced contrast sensitivity
- EDOF: continuous focus
  - Better intermediate
  - Less dysphotopsia than multifocal

**Postoperative Refinement:**
- LASIK/PRK enhancement
- Piggyback IOL (secondary IOL in sulcus)
- IOL exchange (more invasive)
- Light adjustable lens (adjustable before lock-in)

## Emerging Technologies

**Femtosecond Laser-Assisted Cataract Surgery (FLACS):**
- FDA approved 2010
- Potential benefits:
  - Precise capsulotomy size and shape
  - Consistent centration
  - Lens fragmentation reduces phaco energy
  - Corneal incisions and limbal relaxing incisions
- Evidence:
  - Slightly better refractive predictability
  - Reduced effective phaco time
  - Higher cost not justified for all patients
  - Consider for: premium IOL cases, astigmatism management

**Robotic Surgery:**
- Preceyes robotic system (NOT approved in US)
- Potential for sub-retinal drug delivery
- Future applications in cataract surgery?

**Intraoperative Wavefront Aberrometry:**
- ORA System (Alcon)
- Measures refractive error during surgery
- Confirms IOL power selection
- Particularly useful in:
  - Post-refractive surgery eyes
  - Long eyes
  - High astigmatism

**Surgical Simulation Training:**
- Virtual reality simulators (Eyesi, others)
- Improves resident performance
- Objective metrics: efficiency, corneal injury, capsule injury
- Standardized training for complications

**Pharmaceutical Developments:**
- N-acetylcarnosine (NAC) eye drops: anti-cataract?
  - Limited evidence, not FDA approved
- Lanosterol: cataract reversal in animal models
  - Human trials ongoing
- Pharmacologic lens refilling: theoretical future approach`,
      keyTerms: [
        { term: 'SRK/T formula', definition: "Sanders-Retzlaff-Kraff/Theoretical formula; most commonly used IOL power calculation formula" },
        { term: 'ORAss', definition: "Intraoperative aberrometry system (ORA); measures refractive error during cataract surgery" },
        { term: 'FLACS', definition: "Femtosecond Laser-Assisted Cataract Surgery; uses femtosecond laser for key surgical steps" },
        { term: 'square-edge IOL', definition: "IOL with sharp posterior optic edge design that reduces posterior capsule opacification" },
        { term: 'light adjustable lens', definition: "IOL with photosensitive material that can be adjusted postoperatively with UV light treatments" },
      ],
      clinicalNotes: `Key clinical pearls for cataract surgery:

1. **Biometry precision**: Small errors in axial length (0.1 mm = 0.27 D) have large effects. Use optical biometry when possible. For post-refractive eyes, use Barrett True K or similar formulas.

2. **Toric alignment**: Use intraoperative axis verification. Marking errors account for most undercorrections. Consider image-guided systems (Callisto, Verion) for precision.

3. **IFIS prevention**: Intracameral phenylephrine (1-2 mg in 0.1 mL) before capsulorhexis is most effective. Don't rely on stopping alpha-blockers preop.

4. **CME prophylaxis**: Use topical NSAID for 4+ weeks postop for all patients, especially those with diabetes, uveitis, or epiretinal membrane.

5. **Endophthalmitis prophylaxis**: Povidone-iodine prep is the most effective measure. Intracameral antibiotics (especially cefuroxime) provide additional benefit.

6. **YAG timing**: No rush to perform YAG capsulotomy. Wait at least 3 months postop to allow capsule to stabilize and fibrose. Consider OCT for macular edema before YAG.

7. **Premium IOL selection**: Careful patient selection is critical. Screen for macular disease, unrealistic expectations, occupation needs, and personality type.

8. **Complications**: If PCR occurs, stop phaco, stabilize anterior chamber, assess vitreous. Don't chase lens fragments into vitreous. Refer to retina specialist if needed.`,
    },
  },

  media: [
    {
      id: 'cataract-types',
      type: 'diagram',
      filename: 'cataract-types.svg',
      title: 'Types of Cataracts',
      description: 'Diagram showing nuclear, cortical, and posterior subcapsular cataract locations',
    },
    {
      id: 'cataract-surgery-steps',
      type: 'diagram',
      filename: 'phacoemulsification-steps.svg',
      title: 'Phacoemulsification Surgical Steps',
      description: 'Step-by-step illustration of cataract surgery technique',
    },
    {
      id: 'iol-types',
      type: 'diagram',
      filename: 'intraocular-lens-types.svg',
      title: 'Intraocular Lens Types',
      description: 'Comparison of monofocal, toric, multifocal, and EDOF IOLs',
    },
  ],

  citations: [
    {
      id: 'aao-cataract-2021',
      type: 'article',
      title: 'Cataract in the Adult Eye Preferred Practice Pattern',
      authors: ['American Academy of Ophthalmology'],
      source: 'Ophthalmology',
      url: 'https://www.aao.org',
    },
    {
      id: 'aao-iol-calculations',
      type: 'article',
      title: 'Refractive Lens Surgery and Premium IOLs',
      authors: ['American Academy of Ophthalmology'],
      source: 'Ophthalmology',
    },
    {
      id: 'evs-cataract',
      type: 'article',
      title: 'Endophthalmitis Vitrectomy Study',
      authors: ['Endophthalmitis Vitrectomy Study Group'],
      source: 'Archives of Ophthalmology',
    },
  ],

  crossReferences: [
    { targetId: 'condition-diabetic-retinopathy', targetType: "condition", relationship: "related", label: "Diabetic Retinopathy" },
    { targetId: 'condition-glaucoma', targetType: "condition", relationship: "related", label: "Glaucoma" },
    { targetId: 'condition-age-related-macular-degeneration', targetType: "condition", relationship: "related", label: "Macular Degeneration" },
  ],

  tags: {
    systems: ['visual'],
    topics: ['ophthalmology', 'surgery', 'aging', 'lens'],
    keywords: ['cataract', 'phacoemulsification', 'intraocular lens', 'lens opacity'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['surgery', 'family medicine'],
    },
  },

  createdAt: '2025-01-26T00:00:00.000Z',
  updatedAt: '2025-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default cataract;
