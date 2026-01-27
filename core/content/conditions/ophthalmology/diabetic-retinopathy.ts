/**
 * Diabetic Retinopathy - Comprehensive Educational Content
 *
 * Covers diabetic retinopathy stages from mild NPDR to PDR,
 * screening recommendations, and treatment including anti-VEGF
 * and panretinal photocoagulation.
 */

import { EducationalContent } from '../../types';

export const diabeticRetinopathy: EducationalContent = {
  id: 'condition-diabetic-retinopathy',
  type: 'condition',
  name: 'Diabetic Retinopathy',
  alternateNames: ['DR', 'Diabetic Eye Disease', 'PDR', 'DME'],
  hpoId: 'HP:0000867',

  levels: {
    1: {
      level: 1,
      summary: 'Diabetic retinopathy is an eye condition that affects people with diabetes. High blood sugar damages the blood vessels in the retina, the light-sensitive tissue at the back of the eye, and can cause vision loss if not treated.',
      explanation: `Think of the retina like the film in a camera. It captures light and sends images to your brain. The retina needs healthy blood vessels to work properly.

When blood sugar stays high for too long, it damages these tiny blood vessels. They can:
- Leak fluid and blood
- Close off completely
- Grow abnormal new blood vessels

**Why is diabetic retinopathy dangerous?**

In the early stages, you might not notice any vision changes. But over time, diabetic retinopathy can:
- Cause vision to become blurry
- Lead to blindness if untreated
- Increase risk of other eye problems like glaucoma and retinal detachment

**Types of diabetic retinopathy:**

1. **Early (Non-Proliferative):**
   - Blood vessels weaken and may leak
   - Small bulges in blood vessels (microaneurysms)
   - May have no symptoms
   - Needs monitoring

2. **Advanced (Proliferative):**
   - New abnormal blood vessels grow
   - These vessels are fragile and bleed easily
   - Can cause severe vision loss and blindness
   - Requires urgent treatment

3. **Diabetic Macular Edema (DME):**
   - Fluid leaks into the macula (center of retina)
   - Macula swells
   - Causes blurring in the center of your vision
   - Can occur at any stage

**Who is at risk?**
- Anyone with diabetes (type 1 or type 2)
- Risk increases with:
  - How long you've had diabetes
  - Poor blood sugar control
  - High blood pressure
  - High cholesterol
  - Smoking
  - Pregnancy

**Warning Signs:**
- Often no symptoms in early stages
- Blurry vision
- Spots or dark strings floating in vision
- Dark or empty areas in vision
- Difficulty seeing at night
- Colors seem faded

**How is it diagnosed?**
- Dilated eye exam (eye doctor uses drops to widen pupils)
- Special photographs of the retina
- OCT scan (detailed image of retina)

**How is it treated?**

**Early stages:**
- Control blood sugar, blood pressure, cholesterol
- Regular eye exams to monitor progression

**Advanced stages:**
- Anti-VEGF injections to stop abnormal blood vessel growth
- Laser treatment to seal leaking vessels or destroy abnormal vessels
- Surgery for bleeding or retinal detachment

**Remember:**
- Early detection is critical - you may not have symptoms until damage is done
- Good blood sugar control can prevent or delay diabetic retinopathy
- All people with diabetes need regular eye exams
- Treatment works best when started early`,
      keyTerms: [
        { term: 'retina', definition: "The light-sensitive layer at the back of the eye that sends visual signals to the brain" },
        { term: 'macula', definition: "The central part of the retina that provides sharp, detailed vision" },
        { term: 'blood sugar', definition: "The amount of glucose in the blood; high levels over time damage blood vessels throughout the body" },
      ],
      analogies: [
        'The retina is like the film in a camera - when its blood supply is damaged, the pictures (your vision) become blurry.',
        "Diabetic retinopathy is like a garden hose with tiny leaks - water (fluid) leaks where it shouldn't, and the grass (retina) gets damaged.",
      ],
      examples: [
        'Someone who has had diabetes for 20 years with poor blood sugar control develops abnormal blood vessels growing in their eye.',
        'A person with diabetes notices black spots floating in their vision, which could be bleeding from abnormal blood vessels.',
      ],
      patientCounselingPoints: [
        'All people with diabetes need regular eye exams, even if vision seems fine.',
        'Good blood sugar control can prevent or slow diabetic retinopathy.',
        "Don't wait for vision problems - early diabetic retinopathy has no symptoms.",
        'Contact your eye doctor if you notice sudden vision changes, new floaters, or a curtain over your vision.',
        'Keep your A1c, blood pressure, and cholesterol in target range.',
      ],
    },
    2: {
      level: 2,
      summary: 'Diabetic retinopathy (DR) is a microvascular complication of diabetes mellitus characterized by retinal vascular damage, leakage, and neovascularization. It progresses from non-proliferative DR (NPDR) to proliferative DR (PDR) and may involve diabetic macular edema (DME), a leading cause of vision loss in diabetic patients.',
      explanation: `## Pathophysiology

**Vascular Damage from Hyperglycemia:**
- Pericyte loss (pericytes support retinal capillaries)
- Basement membrane thickening
- Endothelial cell damage
- Blood-retinal barrier breakdown
- Capillary closure and non-perfusion

**Consequences:**
- Microaneurysms (outpouchings of weakened vessels)
- Retinal hemorrhages
- Lipid exudation (hard exudates)
- Cotton wool spots (nerve fiber layer infarcts)
- Venous beading and looping
- Intraretinal microvascular abnormalities (IRMAs)
- Neovascularization (abnormal new vessel growth)

## Classification

**Non-Proliferative Diabetic Retinopathy (NPDR):**

| Stage | Findings | Clinical Significance |
|-------|----------|----------------------|
| Mild | Microaneurysms only | Earliest stage, annual screening |
| Moderate | Microaneurysms, dot-blot hemorrhages, hard exudates | 6-month monitoring |
| Severe (4-2-1 rule) | Any of: ≥4 quadrants hemorrhages, ≥2 quadrants venous beading, ≥1 quadrant IRMA | 50% progress to PDR in 1 year |

**Proliferative Diabetic Retinopathy (PDR):**
- Neovascularization of the disc (NVD)
- Neovascularization elsewhere (NVE)
- Neovascularization of the iris (NVI) / rubeosis
- Preretinal hemorrhage
- Vitreous hemorrhage
- Tractional retinal detachment
- Neovascular glaucoma

**Diabetic Macular Edema (DME):**
- Fluid accumulation in macula
- Center-involved (CI-DME): affects fovea
- Non-center involved: outside fovea
- Can occur at any stage of DR
- Major cause of vision loss

## Risk Factors

**Diabetes-Related:**
- Duration of diabetes (critical factor)
  - Type 1: nearly all have DR after 20 years
  - Type 2: 60% have DR after 20 years
- Chronic hyperglycemia (elevated HbA1c)
- Type 1 diabetes (more aggressive course)

**Cardiovascular:**
- Hypertension
- Hyperlipidemia
- Smoking
- Obesity

**Other:**
- Pregnancy (can worsen DR)
- Puberty
- Kidney disease (diabetic nephropathy)
- Anemia
- Sleep apnea

## Clinical Presentation

**Symptoms by Stage:**

| Stage | Symptoms |
|-------|----------|
| Mild NPDR | Usually asymptomatic |
| Moderate NPDR | May have mild blurring |
| Severe NPDR | Decreased vision from macular edema |
| PDR | Floaters, vision loss from vitreous hemorrhage |
| DME | Blurred central vision, distorted vision |

**Ophthalmic Signs:**
- Microaneurysms (dot hemorrhages)
- Flame and blot hemorrhages
- Hard exudates (lipid deposits)
- Cotton wool spots (white, fluffy lesions)
- Venous beading, IRMAs (severe NPDR)
- Neovascularization (PDR)
- Preretinal/vitreous hemorrhage
- Tractional retinal detachment

## Diagnosis

**Screening Recommendations (ADA):**

| Patient Type | Age | Onset of Screening | Frequency if No DR |
|--------------|-----|-------------------|-------------------|
| Type 1 diabetes | <10 | Not indicated | - |
| Type 1 diabetes | ≥10 | 5 years after diagnosis | Annual |
| Type 2 diabetes | Any | At diagnosis | Annual |
| Pregnancy (pre-existing) | Any | Before pregnancy or 1st trimester | Each trimester |

**Diagnostic Tests:**

1. **Dilated Fundus Examination:**
   - Gold standard for DR detection
   - Slit lamp biomicroscopy with lenses
   - Direct and indirect ophthalmoscopy

2. **Fundus Photography:**
   - 7-standard fields (ETDRS)
   - Telemedicine screening (retinal imaging)
   - Documentation and monitoring

3. **Optical Coherence Tomography (OCT):**
   - Essential for DME diagnosis
   - Measures retinal thickness
   - Detects intraretinal fluid
   - Assesses traction in PDR

4. **Fluorescein Angiography (FA):**
   - Identifies leakage areas
   - Maps non-perfusion
   - Neovascularization detail
   - Guides laser treatment

5. **Optical Coherence Tomography Angiography (OCTA):**
   - Non-invasive vascular imaging
   - Detects non-perfusion
   - Neovascularization visualization

**ETDRS Diabetic Retinopathy Severity Scale:**

| Level | Severity | Definition |
|-------|----------|------------|
| 10 | No retinopathy | No abnormalities |
| 20 | Very mild | Microaneurysms only |
| 35 | Mild | Microaneurysms, hemorrhages < standard photo 2A |
| 43 | Moderate | Microaneurysms, hemorrhages ≥ photo 2A |
| 47 | Moderately severe | Severe features in 1-2 quadrants |
| 53 | Severe NPDR | 4-2-1 rule |
| 61 | Mild PDR | NVD and/or NVE without PRH/vitreous hemorrhage |
| 65 | High-risk PDR | NVD ≥1/4 disc area or NVD + PRH/vitreous hemorrhage or NVE + PRH/vitreous hemorrhage |

## Treatment

**Systemic Management:**
- Tight glycemic control (target HbA1c <7%)
- Blood pressure control (target <130/80)
- Lipid management (statin therapy)
- Smoking cessation
- Pregnancy planning

**Diabetic Macular Edema Treatment:**

1. **Anti-VEGF Therapy (First-line for CI-DME):**
   - Bevacizumab, ranibizumab, aflibercept
   - Monthly or as-needed dosing
   - Improves vision in 30-40%
   - Prevents vision loss in most

2. **Focal/Grid Laser:**
   - For non-center DME
   - Adjunct to anti-VEGF
   - Less commonly primary now

3. **Steroids:**
   - Dexamethasone implant (Ozurdex)
   - Fluocinolone acetonide implant (Iluvien)
   - For anti-VEGF non-responders
   - Risk of glaucoma and cataract

**Proliferative Diabetic Retinopathy Treatment:**

1. **Panretinal Photocoagulation (PRP):**
   - Laser burns to peripheral retina
   - Reduces VEGF production
   - Causes neovascularization to regress
   - Reduces risk of severe vision loss by 50%
   - Side effects: peripheral vision loss, night vision difficulty

2. **Anti-VEGF for PDR:**
   - Can cause regression of neovascularization
   - Alternative or adjunct to PRP
   - May help when media haze limits laser

3. **Pars Plana Vitrectomy:**
   - Non-clearing vitreous hemorrhage
   - Tractional retinal detachment
   - Combined tractional-rhegmatogenous detachment
   - Advanced PDR with fibrovascular proliferation

**Follow-up by Severity:**

| Severity | Follow-up |
|----------|-----------|
| No DR | 12 months |
| Mild NPDR | 12 months |
| Moderate NPDR | 6 months |
| Severe NPDR | 3-4 months |
| PDR | Prompt treatment |
| DME | 1-2 months |

**Prognosis:**
- Good with early detection and treatment
- DME: 40% gain ≥2 lines with anti-VEGF
- PDR: 50% reduction in severe vision loss with PRP
- Vision can be maintained in most with appropriate care`,
      keyTerms: [
        { term: 'microaneurysm', definition: "Small outpouching of retinal capillary walls; earliest sign of diabetic retinopathy" },
        { term: 'neovascularization', definition: "Abnormal growth of new blood vessels; hallmark of proliferative diabetic retinopathy" },
        { term: 'macular edema', definition: "Swelling of the macula from fluid leakage; causes central vision loss" },
        { term: 'panretinal photocoagulation', definition: "Laser treatment to peripheral retina to regress neovascularization in PDR" },
        { term: 'PRP', definition: "Panretinal photocoagulation; laser treatment causing regression of abnormal blood vessels in PDR" },
      ],
      analogies: [
        'PRP laser is like pruning dead branches from a tree - it destroys some peripheral retina (the "branches") to save the rest of the eye (the "trunk").',
        'Anti-VEGF is like weed killer for the abnormal blood vessels growing in the eye.',
      ],
      patientCounselingPoints: [
        'Regular eye exams are critical - diabetic retinopathy can be present without symptoms.',
        'Tight blood sugar control (HbA1c <7%) significantly reduces risk of developing DR.',
        'Controlling blood pressure and cholesterol is as important as controlling blood sugar.',
        'If you have floaters, flashes, or vision changes, see an eye doctor immediately.',
        'Pregnancy can rapidly worsen diabetic retinopathy - see an eye doctor before planning pregnancy.',
      ],
    },
    3: {
      level: 3,
      summary: 'Diabetic retinopathy results from chronic hyperglycemia-induced microvascular damage involving pericyte loss, basement membrane thickening, and blood-retinal barrier breakdown. The disease progresses from mild non-proliferative DR to high-risk proliferative DR and may involve diabetic macular edema. Treatment includes anti-VEGF agents, laser photocoagulation, and vitrectomy surgery.',
      explanation: `## Detailed Pathophysiology

**Cellular and Molecular Mechanisms:**

1. **Hyperglycemia-Induced Damage:**

**Four Major Pathways (Brownlee hypothesis):**
- **Polyol pathway:** Aldose reductase converts glucose to sorbitol, depleting NADPH and glutathione
- **Advanced glycation end products (AGEs):** Cross-link proteins, alter function, activate RAGE receptors
- **Protein kinase C (PKC) activation:** Affects vascular permeability, blood flow
- **Hexosamine pathway:** Alters gene expression

**Oxidative Stress:**
- Mitochondrial superoxide overproduction
- Damage to endothelial cells and pericytes
- Inflammation upregulation

2. **Pericyte Loss:**
- Pericytes: mural cells supporting retinal capillaries
- Selective pericyte apoptosis (PDGF-B signaling affected)
- Weakens capillary walls
- Leads to microaneurysm formation

3. **Basement Membrane Thickening:**
- Type IV collagen accumulation
- Laminin and fibronectin deposition
- Alters nutrient/waste exchange
- Contributes to capillary closure

4. **Blood-Retinal Barrier (BRB) Breakdown:**
- **Inner BRB:** Tight junctions between retinal capillary endothelial cells
- **Outer BRB:** RPE tight junctions
- VEGF increases vascular permeability
- Protein leakage (hard exudates form from lipid precipitation)

5. **Retinal Ischemia:**
- Capillary closure and non-perfusion
- Hypoxia triggers HIF-1α
- VEGF upregulation
- Drives neovascularization

**Inflammatory Mediators:**
- ICAM-1, VCAM-1 (leukocyte adhesion)
- TNF-α, IL-6, IL-1β
- Complement activation
- Leukostasis (white blood cells plugging capillaries)

**Neural Retina Changes:**
- Ganglion cell apoptosis
- Glial activation (Müller cells)
- Electroretinogram (ERG) changes before vascular signs

## Clinical Classification Systems

**ICDR (International Clinical Diabetic Retinopathy) Severity Scale:**

| Severity | findings | 1-Year Progression Risk |
|----------|----------|-------------------------|
| No apparent DR | No abnormalities | 5% |
| Mild NPDR | Microaneurysms only | 15% |
| Moderate NPDR | > microaneurysms, < severe NPDR | 35% |
| Severe NPDR | (4-2-1 rule) | 50-75% |
| PDR | Neovascularization | High risk of vision loss |

**4-2-1 Rule for Severe NPDR:**
- Severe hemorrhages/microaneurysms in ≥4 quadrants
- Venous beading in ≥2 quadrants
- IRMAs in ≥1 quadrant
- Presence of any ONE criterion = severe NPDR

**High-Risk PDR (ETDRS Definition):**
- NVD ≥1/4 disc area OR
- NVD <1/4 disc area + vitreous/preretinal hemorrhage OR
- NVE ≥1/2 disc area + vitreous/preretinal hemorrhage

**Diabetic Macular Edema Classification:**

**Clinical (Based on ETDRS photos):**
- Absent: no thickening or hard exudates in macula
- Questionable: questionable thickening/exudates
- Present: definite retinal thickening or hard exudates
  - Center-involved: foveal center involved
  - Non-center involved: foveal center spared

**OCT-Based (Current Standard):**
- Central subfield thickness (CST)
- Normal CST: ~250-270 µm (by device)
- DME: CST >300 µm (approximately)
- Intraretinal cysts
- Subretinal fluid
- Disruption of ellipsoid zone, ELM

## Diagnostic Imaging

**Optical Coherence Tomography:**

**Quantitative Metrics:**
- Central subfield thickness (CST)
- Total macular volume
- Retinal layer thickness

**Qualitative Findings:**
- Intraretinal cystoid fluid
- Subretinal fluid
- Hard exudates as hyperreflective foci
- Epiretinal membrane
- Vitreomacular traction
- Disruption of retinal layers

**Fluorescein Angiography Patterns:**

**NPDR Findings:**
- Microaneurysms: hyperfluorescent dots
- Diffuse leakage: DME
- Focal leakage: microaneurysm causing DME
- Capillary non-perfusion: dark areas
- Venous beading and looping
- IRMAs: abnormal intraretinal vessels

**PDR Findings:**
- Neovascularization: leakage, vessels on disc/NVE
- Preretinal hemorrhage: blocked fluorescence
- Capillary non-perfusion: extensive in PDR
- Macular ischemia: foveal avascular zone enlargement

**Ultra-Widefield Imaging:**
- 200-degree field of view
- Captures peripheral retina
- Identifies peripheral non-perfusion
- Guiding PRP treatment

## Treatment Modalities

**Anti-VEGF Therapy:**

**Agents for DME:**
- **Aflibercept (Eylea):** 2 mg monthly × 3, then q8wk
  - VIVID-DME, VISTA-DME trials
  - Superior to ranibizumab for moderate vision loss (baseline 20/50 or worse)

- **Ranibizumab (Lucentis):** 0.3 mg monthly or PRN
  - RIDE, RISE trials
  - 34-45% gained ≥15 letters

- **Bevacizumab (Avastin):** 1.25 mg off-label
  - DRCR.net Protocol T
  - Similar to ranibizumab for mild vision loss
  - Less effective for worse baseline vision

**Anti-VEGF for PDR:**
- **DRCR.net Protocol S:** Aflibercept non-inferior to PRP
  - Better visual acuity outcomes
  - Fewer side effects
  - Higher cost, more injections
  - PRP still standard for most

**Panretinal Photocoagulation (PRP):**

**Technique:**
- 1,200-1,600 laser burns
- Peripheral retina outside major vascular arcades
- Spot size: 200-500 µm
- Duration: 0.1-0.2 seconds
- Power: gray-white burn endpoint

**Two Approaches:**
1. **Single-session:** High-risk PDR (may cause inflammation)
2. **Split-session:** 2-3 treatments, 1 week apart (preferred)

**Mechanism:**
- Destroys hypoxic peripheral retina
- Reduces VEGF production
- Causes neovascular regression
- Reduces risk of vitreous hemorrhage and traction

**Side Effects:**
- Peripheral vision loss
- Night vision difficulty
- Dark adaptation changes
- Macular edema exacerbation
- Pain during treatment

**Focal/Grid Laser for DME:**
- Direct treatment to microaneurysms
- Grid treatment to areas of diffuse leakage
- Modified ETDRS protocol
- Largely replaced by anti-VEGF for center-involved DME
- Still useful for non-center DME

**Steroid Therapy:**

**Dexamethasone Implant (Ozurdex):**
- 0.7 mg sustained release
- Lasts ~3-6 months
- MEAD trial: 22-29% gained ≥15 letters
- Side effects: IOP elevation (30%), cataract progression

**Fluocinolone Acetonide Implant (Iluvien):**
- 0.19 mg sustained release
- Lasts ~3 years
- FAME trials: 28-29% gained ≥15 letters
- Side effects: nearly all require cataract surgery, IOP surgery in 5%

**Vitrectomy for PDR:**

**Indications:**
1. **Non-clearing vitreous hemorrhage** (>1 month)
2. **Tractional retinal detachment** threatening macula
3. **Combined tractional and rhegmatogenous RD**
4. **Premacular hemorrhage**
5. **Progressive fibrovascular proliferation**

**Surgical Technique:**
- Pars plana approach (3-4 mm posterior to limbus)
- Vitreous removal
- Delamination of fibrovascular tissue
- Endolaser (PRP)
- Membrane peeling
- Silicone oil or gas tamponade if needed

**Outcomes:**
- Visual improvement in most cases
- Anatomic success >90%
- Complications: cataract, RD, recurrent VH, neovascular glaucoma`,
      keyTerms: [
        { term: 'pericyte', definition: "Perivascular cell supporting retinal capillaries; selective loss is an early event in diabetic retinopathy" },
        { term: 'BRB', definition: "Blood-retinal barrier; inner (endothelial tight junctions) and outer (RPE) barrier preventing leakage" },
        { term: 'ICDR', definition: "International Clinical Diabetic Retinopathy severity scale; simplified grading system for DR" },
        { term: 'HIF-1α', definition: "Hypoxia-inducible factor 1-alpha; transcription factor activated in hypoxia, upregulates VEGF" },
        { term: 'CST', definition: "Central subfield thickness; OCT measurement of retinal thickness in central 1 mm; key DME metric" },
      ],
      analogies: [
        'Pericytes are like the support beams for capillaries - when they die, the capillaries weaken and bulge (microaneurysms).',
        'PRP is like a controlled burn - destroying peripheral retina to reduce the drive for abnormal blood vessel growth.',
      ],
      clinicalNotes: 'For women with diabetes who are planning pregnancy: assess DR status before conception. DR can progress rapidly during pregnancy. Monitor each trimester and postpartum if significant DR present.',
    },
    4: {
      level: 4,
      summary: 'Diabetic retinopathy management requires understanding of systemic and ocular risk factors, appropriate screening intervals, and timely intervention. Anti-VEGF therapy has revolutionized DME treatment and provides an alternative to PRP for PDR. Individualized treatment plans balance efficacy, treatment burden, and patient factors.',
      explanation: `## Advanced Concepts in DR Management

**Systemic Control and Ocular Outcomes:**

**Glycemic Control:**
- DCCT/EDIC: Intensive control reduces DR onset by 76% and progression by 54%
- Metabolic memory: Early benefits persist even if control later worsens
- Target: HbA1c <7% for most patients
- Caution: Too rapid improvement can cause early worsening (nephropathy risk)

**Blood Pressure Control:**
- UKPDS: Tight BP control reduced DR progression by 34%
- ACCORD Eye: No additional benefit of intensive BP control (target <120 vs <140)
- ACE inhibitors/ARBs may have specific benefit
- Target: <130/80 mmHg

**Lipid Management:**
- Fenofibrate reduced DR progression (ACCORD Lipid)
- Statins: mixed evidence for DR benefit but cardiovascular benefit clear
- Hard exudates related to serum lipids

**Anemia and DR:**
- Anemia associated with DME and more severe DR
- Erythropoietin may promote neovascularization
- Correct anemia when present

**Sleep Apnea:**
- Associated with more severe DR and DME
- Hypoxia from apnea contributes to retinal ischemia
- Treat sleep apnea in diabetic patients

## Screening and Detection

**Telemedicine Screening:**
- Cost-effective for underserved areas
- Single-field or multi-field imaging
- Trained graders or AI interpretation
- Improves screening rates

**Artificial Intelligence:**
- FDA-approved systems for DR detection
- Deep learning algorithms
- Sensitivity >90%, specificity 85-90%
- Used for screening, not treatment decisions

**Risk-Based Screening Intervals:**

| Level | Recommended Interval |
|-------|---------------------|
| No DR | 12 months |
| Mild NPDR | 12 months |
| Moderate NPDR | 6 months |
| Severe NPDR | 3-4 months |
| Treated PDR | 1-2 months |
| DME | 1-2 months |

**Pregnancy-Related Considerations:**
- DR can progress rapidly during pregnancy
- Screen before pregnancy or 1st trimester
- Monitor each trimester and within 3 months postpartum
- Type 1 diabetes at highest risk
- PRP can be performed during pregnancy if needed

**Cataract Surgery in Diabetic Patients:**
- Can worsen DR or cause DME exacerbation
- Optimize DR status before surgery if possible
- Treat DME before cataract surgery
- Close postoperative monitoring
- Consider perioperative anti-VEGF

## Treatment Optimization

**DME Treatment Algorithm:**

**Center-Involving DME (CI-DME):**
1. First-line: Anti-VEGF
   - Loading: 3-6 monthly injections
   - Assess response, consider treat-and-extend
   - Continue as long as benefit persists

2. Second-line:
   - Switch anti-VEGF agent (Protocol T)
   - Consider steroid if pseudophakic or anti-VEGF resistant

3. Adjunctive:
   - Focal/grid laser with anti-VEGF for persistent DME
   - Consider micropulse laser

**PDR Treatment:**

**PRP vs Anti-VEGF (Protocol S):**

| Factor | PRP | Anti-VEGF |
|--------|-----|-----------|
| Efficacy | Reduces severe vision loss by 50% | Non-inferior to PRP |
| Visual outcomes | No improvement, may decrease | Average +3 letters |
| Side effects | Peripheral vision loss, night vision | Injection risks |
| Treatment burden | 1-3 sessions | Every 1-2 months initially |
| Recurrence | Rare after complete PRP | 40-50% need PRP by 2 years |
| Cost | Low | High |

**Clinical Approach:**
- PRP remains first-line for most PDR
- Anti-VEGF first-line if:
  - Media haze prevents PRP
  - Fovea-threatening traction
  - Patient wants to avoid PRP side effects
  - DME also present (anti-VEGF treats both)

**Anti-VEGF Agent Selection for DME (Protocol T):**

| Agent | Starting Vision 20/32-20/40 | Starting Vision 20/50 or Worse |
|-------|---------------------------|------------------------------|
| Aflibercept | Equivalent to others | Superior (more letters gained) |
| Ranibizumab | Equivalent to others | Better than bevacizumab |
| Bevacizumab | Equivalent to others | Fewer letters gained |

**Steroids for DME:**
- Indications:
  - Inadequate response to anti-VEGF
  - Pseudophakic (no cataract concern)
  - Inflammatory component
  - Pregnancy (anti-VEGF relatively contraindicated)

**Emerging Therapies:**
- Faricimab (anti-VEGF + anti-Ang2): q16-week dosing possible
- Port delivery system for sustained anti-VEGF
- Gene therapy (RGX-314): under investigation

## Complications and Management

**Vitreous Hemorrhage:**
- Common in PDR from neovascular vessels bleeding
- Initial: observe if partial, face positioning
- Persistent (>1 month): consider vitrectomy
- Preoperative anti-VEGF may reduce intraoperative bleeding

**Tractional Retinal Detachment:**
- Fibrovascular proliferation causes traction
- May involve macula (macula-involving TRD)
- Surgery when macula involved or progressing
- Vitrectomy with membrane peeling
- Combined TRD-Rhegmatogenous RD: urgent surgery

**Neovascular Glaucoma:**
- Iris neovascularization → angle closure
- Prompt panretinal photocoagulation
- Anti-VEGF injection causes rapid NV regression
- May need tube shunt or cyclophotocoagulation
- Poor prognosis if not treated early

**Disapointed Macula:**
- Irreversible capillary loss
- No edema but poor vision
- No effective treatment
- Emphasize prevention

**Anterior Segment Neovascularization:**
- Neovascularization of iris (NVI)
- Neovascularization of angle (NVA)
- Responds to PRP + anti-VEGF
- Can progress to neovascular glaucoma

## Special Populations

**Type 1 Diabetes:**
- Earlier onset of DR
- More aggressive course
- Screen starting 5 years after diagnosis (age ≥10)
- More likely to develop PDR

**Type 2 Diabetes:**
- May have DR at diagnosis
- Screen at diagnosis
- Slower progression than type 1

**Adolescents with Diabetes:**
- Puberty increases DR risk
- Screen starting at age 10 or after 3-5 years duration
- Pregnancy planning education critical

**Elderly Patients:**
- Consider comorbidities and life expectancy
- Treatment burden may be challenging
- Monitor for systemic anti-VEGF effects

**Patients with Kidney Disease:**
- Diabetic nephropathy associated with more severe DR
- May have anemia contributing to retinal ischemia
- Coordinate with nephrology

**Pregnant Women:**
- Rapid DR progression possible
- Screen each trimester
- Anti-VEGF relatively contraindicated
- Laser treatment safe
- Postpartum monitoring`,
      keyTerms: [
        { term: 'DCCT/EDIC', definition: "Diabetes Control and Complications Trial/Epidemiology of Diabetes Interventions and Complications; landmark trials showing intensive glycemic control reduces DR" },
        { term: 'Protocol S', definition: "DRCR.net trial comparing anti-VEGF to PRP for PDR; showed anti-VEGF non-inferior with better visual outcomes" },
        { term: 'Protocol T', definition: "DRCR.net trial comparing aflibercept, ranibizumab, and bevacizumab for DME; aflibercept superior for worse baseline vision" },
        { term: 'neovascular glaucoma', definition: "Secondary glaucoma caused by iris neovascularization closing the angle; complication of PDR" },
      ],
      clinicalNotes: `Key clinical pearls for diabetic retinopathy:

1. **Screening saves vision** - Most vision loss is preventable with appropriate screening and timely treatment. Emphasize the importance of regular eye exams.

2. **Systemic control matters** - DCCT showed intensive control reduces DR onset by 76%. Early benefit persists ("metabolic memory").

3. **Pregnancy is high risk** - DR can progress rapidly during pregnancy. Screen before conception and each trimester.

4. **Treat DME before cataract surgery** - Optimizing DME preoperatively improves outcomes and reduces risk of worsening.

5. **Anti-VEGF first for CI-DME** - Anti-VEGF is first-line for center-involving DME. Reserve steroids for non-responders or pseudophakic patients.

6. **PRP still standard for PDR** - Although Protocol S showed anti-VEGF non-inferior, PRP remains first-line for most due to lower burden and recurrence.

7. **Anemia worsens DR** - Check for and treat anemia in patients with severe DR or DME.

8. **Don't forget kidney disease** - Patients with diabetic nephropathy have more severe DR. Coordinate care with nephrology.`,
    },
    5: {
      level: 5,
      summary: 'Diabetic retinopathy management integrates evidence from landmark trials (DCCT, UKPDS, DRCR.net protocols) demonstrating the benefits of intensive systemic control and timely ocular intervention. Contemporary approaches balance anti-VEGF therapy, laser photocoagulation, and surgical intervention based on individual patient factors, disease stage, and emerging technologies.',
      explanation: `## Evidence-Based Medicine

**Landmark Systemic Control Trials:**

**DCCT/EDIC (Type 1 Diabetes):**
- DCCT: Intensive vs conventional glycemic control
  - 76% reduction in DR onset
  - 54% reduction in DR progression
  - 47% reduction in need for laser/surgery
- EDIC (follow-up): Metabolic memory
  - Legacy effect persists for decades
  - Early intensive control has long-term benefit

**UKPDS (Type 2 Diabetes):**
- Intensive glycemic control: 21% reduction in DR progression
- Tight BP control: 34% reduction in DR progression
- Metformin: specific benefit

**ACORD Eye Trial:**
- Intensive glycemic control (target <6.0%): no additional benefit over standard (7.0-7.9%)
- Early worsening possible with rapid control
- Higher mortality in intensive group (halted early)

**ACCORD Lipid:**
- Fenofibrate + simvastatin vs simvastatin alone
- Fenofibrate reduced DR progression by 40%
- Statins alone: no DR benefit

**FIELD Study:**
- Fenofibrate reduced need for laser treatment
- Benefit independent of lipid effects

**VADT (Veterans Affairs Diabetes Trial):**
- Intensive control: no significant reduction in DR progression
- Highlights importance of early intervention

**Landmark Ocular Treatment Trials:**

**ETDRS (Early Treatment Diabetic Retinopathy Study):**
- Established PRP as standard for PDR
- Focal laser effective for DME
- Aspirin (650 mg) safe for DR patients
- Established DR severity scale

**DRS (Diabetic Retinopathy Study):**
- PRP reduced severe vision loss by 50%
- Established high-risk PDR criteria

**DRCR.net Protocol T (DME):**
- Aflibercept, ranibizumab, bevacizumab comparison
- Aflibercept superior for worse baseline vision (20/50 or worse)
- Equivalent for milder vision loss
- Cost-effectiveness favors bevacizumab for mild DME

**DRCR.net Protocol S (PDR):**
- Aflibercept vs PRP
- Anti-VEGF non-inferior for visual acuity
- Better visual outcomes, fewer side effects
- Higher cost, more injections
- 50% of anti-VEGF group needed PRP within 2 years

**DRCR.net Protocol V (Center-Involved DME with Good Vision):**
- Observation vs anti-VEGF for CI-DME with 20/25 or better vision
- 5-year results: 50% of observation group worsened
- Anti-VEGF group had better average vision
- Observation acceptable if close monitoring

**DRCR.net Protocol U (Proliferative DR with High-Risk PDR Features):**
- PRP + ranibizumab vs PRP alone
- Combination group: faster NV regression, less DME
- No difference in final visual acuity
- Consider combination for DME or fovea-threatening traction

## Advanced Imaging Biomarkers

**OCT Angiography (OCTA):**
- Non-invasive visualization of retinal and choroidal vasculature
- Detects non-perfusion areas earlier than FA
- Quantifies vessel density
- Visualizes neovascularization without dye
- Serial monitoring without dye risks

**Hyperreflective Foci on OCT:**
- Represent lipid-laden macrophages or hard exudates
- Associated with more severe DME
- May predict anti-VEGF response

**Disorganization of Retinal Inner Layers (DRIL):**
- Disruption of inner retinal layer boundaries
- Strong predictor of visual acuity
- May be irreversible

**Choroidal Changes:**
- Choroidal thinning in DR
- Subfoveal choroidal thickness decreases with severity
- Choroidal non-perfusion in PDR

**Adaptive Optics:**
- Cellular-level imaging
- Photoreceptor loss in DR
- Microaneurysm detailed characterization

**Widefield Montage Imaging:**
- 200-degree field of view
- Peripheral non-perfusion correlates with DR severity
- Identifies predominantly peripheral DR (higher progression risk)
- May guide PRP extent

## Therapeutic Decision-Making

**Anti-VEGF Selection Algorithm:**

**For Center-Involving DME:**
1. Baseline vision 20/40 or better: Any agent (bevacizumab cost-effective)
2. Baseline vision 20/50 or worse: Aflibercept or aflibercept biosimilar
3. Prior inadequate response: Switch agent
4. Persistent DME despite adequate anti-VEGF: Consider steroid

**For PDR:**
1. Standard: PRP (especially in phakic patients)
2. With DME: Anti-VEGF (treats both)
3. Media haze: Anti-VEGF until clear for PRP
4. Fovea-threatening traction: Anti-VEGF ± urgent vitrectomy

**Treat-and-Extend for DME:**
- Monthly until dry (or maximum 6 doses)
- Extend by 2-4 weeks if stable
- Shorten if fluid recurs
- Most stabilize at 8-12 week intervals
- Protocol T extension data emerging

**Combination Therapy:**

**Anti-VEGF + PRP (Protocol U):**
- Indications:
  - PDR with concurrent DME
  - Fovea-threatening traction
  - Neovascular glaucoma
- Benefits: faster NV regression, less DME
- Drawbacks: Cost, more visits

**Anti-VEGF + Laser for DME:**
- Early DRCR: Laser alone inferior to anti-VEGF
- Current role: Adjunct for persistent DME
- Modified ETDRS focal laser with anti-VEGF

**Emerging Therapies:**

**Faricimab (Vabysmo):**
- Anti-VEGF + Anti-Ang2 bispecific antibody
- TENAYA and LUCERNE trials
- Non-inferior to aflibercept
- Up to 16-week dosing possible
- Potential for reduced treatment burden

**Port Delivery System:**
- Continuous ranibizumab delivery
- Refill every 6 months
- ARCHWAY trial equivalent to monthly ranibizumab
- Potential for PDR/DME (investigational)

**Gene Therapy:**
- RGX-314 (AAV8 vector)
- Suprachoroidal delivery (Phase 3)
- Intravitreal delivery (Phase 2)
- Potential for durable anti-VEGF production

**Integrin Peptides:**
- Ragofillax (AVD-104): Topical for DME
- Novel mechanism, non-invasive
- Phase 2 trials ongoing

**Rho Kinase Inhibitors:**
- Netarsudel: enhances aqueous outflow
- Being studied for DR

**Oral Therapies:**
- Ruboxistaurin (PKC beta inhibitor): Phase 2 positive, phase 3 negative
- Minocycline: anti-inflammatory, limited data

## Controversies and Evolving Concepts

**Observation vs Treatment for Mild DME with Good Vision:**
- Protocol V: Observation acceptable if close monitoring
- Anti-VEGF results in better average vision
- Shared decision-making essential
- Monitor every 8-16 weeks if observed

**Anti-VEGF for PDR as Standard of Care:**
- Anti-VEGF non-inferior to PRP (Protocol S)
- Cost and burden are significant barriers
- PRP remains appropriate first-line for many
- Consider patient-specific factors

**Anti-VEGF During Pregnancy:**
- Category C: potential fetal risk
- Limited data, case reports suggest safety
- Balance risks vs benefits
- PRP preferred during pregnancy

**When to Stop Anti-VEGF:**
- After maximal improvement and stability
- If no response after adequate trials
- When burden outweighs benefit
- Patient preference

**Steroid Use in Phakic Patients:**
- Nearly universal cataract progression
- Consider IOL status and surgical timing
- Reserve for anti-VEGF non-responders

**Bilateral vs Unilateral Treatment:**
- Treat both eyes if indicated
- Stagger injections for patient convenience
- Same-day bilateral injections controversial`,
      keyTerms: [
        { term: 'DCCT', definition: "Diabetes Control and Complications Trial; proved intensive glycemic control prevents DR in type 1 diabetes" },
        { term: 'UKPDS', definition: "UK Prospective Diabetes Study; showed glycemic and BP control reduces DR in type 2 diabetes" },
        { term: 'Protocol V', definition: "DRCR.net trial comparing anti-VEGF to observation for CI-DME with good vision" },
        { term: 'metabolic memory', definition: "Legacy effect of early glycemic control on DR risk reduction persisting for decades" },
      ],
      clinicalNotes: `Advanced clinical pearls for diabetic retinopathy:

1. **Early control matters most** - DCCT/EDIC showed that early intensive glycemic control has lasting benefit ("metabolic memory"). Don't wait to start tight control.

2. **Screening is non-negotiable** - Regular screening is the most effective intervention. Use telemedicine and AI to improve adherence.

3. **Individualize PDR treatment** - Anti-VEGF and PRP both effective. Anti-VEGF for DME, media haze, or patients wanting to avoid peripheral vision loss. PRP for patients needing definitive treatment.

4. **Treat-and-extend for DME** - After loading doses, extend by 2-4 week intervals if stable. Most patients can be extended to 8-12 weeks, reducing burden.

5. **Anemia worsens outcomes** - Check hemoglobin in patients with severe DR. Anemia contributes to retinal hypoxia and DME.

6. **Pregnancy requires special attention** - DR can progress rapidly. Screen before pregnancy and each trimester. PRP is safe during pregnancy; anti-VEGF relatively contraindicated.

7. **Don't forget the fellow eye** - High correlation between eyes. If one eye has severe DR, the other is at high risk.

8. **Coordinate systemic care** - Work with PCP/endocrinology. Good HbA1c, BP, and lipid control reduce DR progression.

9. **Consider clinical trials** - Many emerging therapies (gene therapy, port delivery, bispecific antibodies) may reduce burden in future.`,
    },
  },

  media: [
    {
      id: 'dr-stages',
      type: 'diagram',
      filename: 'diabetic-retinopathy-stages.svg',
      title: 'Diabetic Retinopathy Stages',
      description: 'Progression from mild NPDR to PDR with key findings at each stage',
    },
    {
      id: 'dme-oct',
      type: 'diagram',
      filename: 'dme-oct-findings.svg',
      title: 'Diabetic Macular Edema OCT Findings',
      description: 'OCT appearance of normal retina vs DME',
    },
    {
      id: 'prp-laser-pattern',
      type: 'diagram',
      filename: 'prp-laser-pattern.svg',
      title: 'Panretinal Photocoagulation Pattern',
      description: 'Laser pattern for PRP showing treatment areas in peripheral retina',
    },
  ],

  citations: [
    {
      id: 'aao-dr-2019',
      type: 'article',
      title: 'Diabetic Retinopathy Preferred Practice Pattern',
      authors: ['American Academy of Ophthalmology'],
      source: 'Ophthalmology',
    },
    {
      id: 'dcct-trial',
      type: 'article',
      title: 'The Effect of Intensive Treatment of Diabetes on the Development and Progression of Long-Term Complications in Insulin-Dependent Diabetes Mellitus',
      authors: ['The DCCT Research Group'],
      source: 'New England Journal of Medicine',
    },
    {
      id: 'protocol-t',
      type: 'article',
      title: 'Aflibercept, Bevacizumab, or Ranibizumab for Diabetic Macular Edema',
      authors: ['DRCR.net Network'],
      source: 'New England Journal of Medicine',
    },
  ],

  crossReferences: [
    { targetId: 'condition-macular-degeneration', targetType: "condition", relationship: "related", label: "Age-Related Macular Degeneration" },
    { targetId: 'condition-glaucoma', targetType: "condition", relationship: "related", label: "Glaucoma" },
    { targetId: 'condition-retinal-detachment', targetType: "condition", relationship: "related", label: "Retinal Detachment" },
    { targetId: 'condition-type2-diabetes', targetType: "condition", relationship: "related", label: "Type 2 Diabetes" },
  ],

  tags: {
    systems: ['visual', 'endocrine'],
    topics: ['ophthalmology', 'retina', 'endocrinology', 'diabetes'],
    keywords: ['diabetic retinopathy', 'DME', 'PDR', 'anti-VEGF', 'panretinal photocoagulation'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['family medicine', 'surgery', 'internal medicine'],
    },
  },

  createdAt: '2025-01-26T00:00:00.000Z',
  updatedAt: '2025-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default diabeticRetinopathy;
