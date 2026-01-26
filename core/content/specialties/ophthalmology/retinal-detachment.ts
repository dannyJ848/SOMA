/**
 * Retinal Detachment - Comprehensive Educational Content
 *
 * Covers the pathophysiology, types, risk factors, clinical presentation,
 * diagnosis, and management of retinal detachment.
 */

import { EducationalContent } from '../../types';

export const retinalDetachment: EducationalContent = {
  id: 'condition-retinal-detachment',
  type: 'condition',
  name: 'Retinal Detachment',
  alternateNames: ['Detached Retina', 'RD', 'Amdetio Retinae'],

  levels: {
    1: {
      level: 1,
      summary: 'Retinal detachment is when the light-sensing layer at the back of your eye pulls away from its normal position, causing vision loss.',
      explanation: `Imagine your eye is like a camera, and the retina is the film that captures pictures. Retinal detachment happens when this film pulls away from the back of the camera.

**What is the Retina?**
The retina is a thin layer of tissue at the back of your eye that senses light and sends pictures to your brain. It's like the sensor in a digital camera.

**What Happens in Retinal Detachment?**
When the retina detaches:
- It pulls away from the blood vessels that give it oxygen and nutrients
- The retina can't work properly without this blood supply
- You may see flashing lights, floaters, or a dark curtain
- Vision can be permanently lost if not treated quickly

**Warning Signs to Watch For:**
- **Flashes of light** - Like lightning streaks in the side of your vision
- **Floaters** - Small dark spots or cobwebs floating in your vision
- **Dark curtain** - A shadow or curtain covering part of your vision
- **Blurred vision** - Things suddenly look blurry or distorted

**Why Fast Treatment Matters**
Retinal detachment is a medical emergency. The longer it goes untreated, the higher the chance of permanent vision loss. Surgery can often fix the problem if done quickly.

**Who is at Risk?**
- People who are very nearsighted
- People over age 50
- People who have had eye surgery
- People who have had a retinal detachment in the other eye
- People with a family history of retinal detachment`,
      keyTerms: [
        { term: 'retina', definition: 'The light-sensitive layer at the back of the eye that captures images' },
        { term: 'detachment', definition: 'When something pulls away or separates from where it should be' },
        { term: 'floaters', definition: 'Small dark spots or threads that seem to float across your vision' },
        { term: 'flashes', definition: 'Sudden flashes of light in your vision, like lightning streaks' },
      ],
      analogies: [
        'The retina is like wallpaper on a wall - when it detaches, it peels away from the wall.',
        'A retinal detachment is like a blister forming under a sticker - the sticker (retina) lifts away from the surface it should be stuck to.',
        'Vision with retinal detachment is like having a curtain pulled over part of a window.',
      ],
      examples: [
        'A person who suddenly sees many new floaters and flashing lights after being hit in the eye with a ball.',
        'Someone who notices a dark shadow appearing in the side of their vision that keeps getting larger.',
        'An older adult who is very nearsighted and suddenly sees flashing lights when they move their eyes quickly.',
      ],
    },
    2: {
      level: 2,
      summary: 'Retinal detachment is a sight-threatening condition where the neurosensory retina separates from the retinal pigment epithelium, requiring prompt surgical intervention to prevent permanent vision loss.',
      explanation: `## What is Retinal Detachment?

Retinal detachment occurs when the retina (the light-sensing tissue) separates from the retinal pigment epithelium (RPE) and choroid (the blood vessel layer that nourishes it). Without its blood supply, the retina cannot function and vision is lost.

## Types of Retinal Detachment

**1. Rhegmatogenous Detachment (Most Common)**
- Caused by a retinal tear or break
- Liquid vitreous flows through the tear and gets under the retina
- "Rhegma" means "tear" in Greek
- Accounts for ~80-90% of all detachments

**2. Tractional Detachment**
- Scar tissue pulls on the retina
- No tear is present
- Common in diabetic retinopathy
- The scar tissue acts like a tether pulling the retina

**3. Exudative (Serous) Detachment**
- Fluid leaks under the retina without a tear
- Caused by inflammation, tumors, or blood vessel problems
- The retina is lifted by fluid from below

## Risk Factors

**High Risk:**
- Previous retinal detachment in the other eye
- Family history of retinal detachment
- Extreme nearsightedness (high myopia, >6 diopters)
- Previous eye surgery (especially cataract surgery)
- Previous severe eye injury

**Moderate Risk:**
- Lattice degeneration (thinning of peripheral retina)
- Age over 50
- Diabetic retinopathy

## Symptoms and Warning Signs

**Classic Symptoms:**
- **Flashes**: Photopsia - flashes of light in peripheral vision
- **Floaters**: Sudden increase, described as "soot," "cobwebs," or "bugs"
- **Curtain**: Dark shadow or curtain moving across vision
- **Blurred vision**: Central or peripheral vision loss

**Important Warning**: Symptoms may develop suddenly or gradually over days. The detachment may start in peripheral vision and progress to central vision.

## Diagnosis

- **Dilated eye exam**: Ophthalmologist looks at the entire retina
- **Optical coherence tomography (OCT)**: Shows retinal layers
- **Ultrasound**: Used if the view inside the eye is blocked
- **Fundus photography**: Documents the appearance

## Treatment

**Surgical Options:**
1. **Pneumatic retinopexy**: Gas bubble injected into the eye
2. **Scleral buckle**: Silicone band around the eye
3. **Vitrectomy**: Removal of vitreous gel
4. **Combination procedures**: Using multiple techniques

Success rate is high with prompt treatment (90%+), but some patients need more than one surgery.

## Prevention

Regular eye exams are important, especially if you have risk factors. Laser treatment or cryotherapy can repair retinal tears before they lead to detachment.`,
      keyTerms: [
        { term: 'rhegmatogenous', definition: 'Type of retinal detachment caused by a tear or break in the retina', pronunciation: 'reg-mah-TOE-jen-us' },
        { term: 'retinal tear', definition: 'A break or hole in the retina that can lead to detachment' },
        { term: 'vitreous', definition: 'The clear gel that fills the space between the lens and the retina', pronunciation: 'VIT-ree-us' },
        { term: 'photopsia', definition: 'The perception of flashing lights', pronunciation: 'foh-TOP-see-ah' },
        { term: 'lattice degeneration', definition: 'Thinning of the peripheral retina that increases tear risk', pronunciation: 'LAT-iss' },
      ],
      analogies: [
        'A rhegmatogenous detachment is like a tear in a water bed - water flows through the hole and separates the layers.',
        'A tractional detachment is like someone pulling on a tablecloth - the fabric moves because something is tugging on it.',
      ],
    },
    3: {
      level: 3,
      summary: 'Retinal detachment is an ophthalmic emergency characterized by separation of the neurosensory retina from the RPE, most commonly from retinal breaks allowing liquefied vitreous to access the subretinal space.',
      explanation: `## Pathophysiology

**Normal Anatomy:**
- Neural retina is apposed to RPE and choroid
- RPE provides metabolic support (photoreceptor outer segment renewal)
- Choroid provides oxygen and nutrients
- Vitreous gel maintains retinal position

**Rhegmatogenous Detachment Mechanism:**
1. Posterior vitreous detachment (PVD) occurs with age
2. Vitreous remains adherent at abnormal points
3. Traction on retina causes a full-thickness break
4. Liquefied vitreous enters subretinal space through break
5. Retina separates from RPE/choroid
6. Photoreceptor metabolism fails → vision loss

**Retinal Break Types:**
- **Horseshoe tear**: U-shaped, caused by vitreous traction
- **Operculated tear**: Round, with free retinal flap
- **Atrophic hole**: Without traction (rarely causes detachment)
- **Giant tear**: >90°, high-risk for proliferative vitreoretinopathy (PVR)

**Tractional Detachment:**
- Fibrovascular proliferation (diabetes, sickle cell)
- Vitreous condensation and contraction
- Mechanical pulling separates retina
- No retinal break initially

**Exudative Detachment:**
- Subretinal fluid accumulation without break
- Causes: inflammation, neoplasia, vascular leakage, hydrostatic pressure
- Conditions: Coat's disease, VKH, choroidal tumors, pregnancy/toxemia

## Clinical Presentation

**Symptoms by Type:**

| Symptom | Rhegmatogenous | Tractional | Exudative |
|---------|----------------|------------|-----------|
| Flashes | Common | Rare | Absent |
| Floaters | Common | Variable | Absent |
| Curtain | Progressive | Variable | Shifting |
| Pain | Absent | Absent | May have |

**Signs on Examination:**
- Detached retina appears white, elevated, with corrugated folds
- Retinal breaks may be visible (search entire periphery)
- Vitreous pigment (tobacco dust) suggests recent tear
- Intraocular pressure may be lower in affected eye

## Diagnostic Evaluation

**Slit Lamp Biomicroscopy:**
- 3-mirror or 78-diopter lens for peripheral examination
- Identify all breaks and assess PVD status

**B-scan Ultrasonography:**
- When media opacity limits view
- Shows retinal thickness, mobility, and attachment points
- Distinguishes detachment from other masses

**OCT:**
- Macular status (intraretinal vs subretinal fluid)
- Retinal break confirmation if visible
- Preoperative planning

## Surgical Management

**Pneumatic Retinopexy:**
- Indications: Single superior break, no PVR
- Technique: Cryotherapy/barrage laser → intravitreal gas bubble → positioning
- Success: 70-80% (best for selected cases)
- Complications: New breaks, delayed subretinal fluid resolution

**Scleral Buckle:**
- Indications: Multiple breaks, inferior breaks, no PVR
- Technique: Silicone element sutured to sclera → indents wall → relieves traction
- May combine with drainage of subretinal fluid
- Success: 80-90%
- Complications: Refractive change, diplopia, buckle infection

**Pars Plana Vitrectomy (PPV):**
- Indications: Complex detachment, PVR, giant tears, media opacity
- Technique: Remove vitreous → relieve traction → perfluorocarbon liquid → laser → gas/silicone oil
- Success: 80-95% depending on complexity
- Complications: Cataract, glaucoma, PVR

**Combined Approaches:**
- PPV + scleral buckle for difficult cases
- Sequential surgeries as needed

## Prognosis

**Visual Outcomes:**
- Macula attached: Excellent prognosis (20/40 or better in >80%)
- Macula detached ≤7 days: Good prognosis (20/50 or better in ~60%)
- Macula detached >7 days: Fair to poor prognosis
- Chronic detachment (>6 weeks): Poor prognosis

**Predictors of Failure:**
- Proliferative vitreoretinopathy (PVR)
- Giant retinal tears
- Inadequate break closure
- Undetected breaks
- Chronic detachment`,
      keyTerms: [
        { term: 'posterior vitreous detachment', definition: 'Separation of vitreous gel from retina; normal with age but can cause retinal tears', pronunciation: 'PVD' },
        { term: 'proliferative vitreoretinopathy', definition: 'Scar tissue formation on retina; major cause of re-detachment', pronunciation: 'PVR' },
        { term: 'scleral buckle', definition: 'Silicone band placed around eye to indent wall and close retinal breaks' },
        { term: 'pars plana vitrectomy', definition: 'Surgical removal of vitreous through pars plana approach', pronunciation: 'PPV' },
        { term: 'pneumatic retinopexy', definition: 'Gas bubble injection combined with laser/cryo to repair retinal detachment', pronunciation: 'noo-MAT-ik ret-in-oh-PEK-see' },
      ],
      clinicalNotes: 'Time is vision - macular detachment duration is the most important prognostic factor. Document macular status (on/off) in all cases. PVR is the most common cause of surgical failure - look for star folds and pigment clumping.',
    },
    4: {
      level: 4,
      summary: 'Retinal detachment represents a spectrum of pathophysiological processes requiring rapid diagnosis, precise localization of all breaks, and appropriately selected surgical intervention based on detachment characteristics and patient factors.',
      explanation: `## Advanced Pathophysiology

**Vitreoretinal Interface Abnormalities:**
- **Vitreoretinal adhesion**: Abnormal strong points that resist PVD
  - Lattice degeneration (30% of retinal detachments)
  - Vitreous base attachment
  - Retinal vessels
  - Areas of chorioretinal scarring

- **Vitreous dynamics**: Syneresis (liquefaction) precedes PVD
  - Age-related changes: Collagen fiber aggregation, hyaluronan depolymerization
  - Liquified pockets form and coalesce
  - Complete PVD: Acute event in 15% with symptoms

**Break Formation:**
- Dynamic vitreous traction during eye movements
- Acute PVD: Rapid anterior movement of vitreous
- Tangential traction from epiretinal membrane
- Anteroposterior traction from vitreous base

**Subretinal Fluid Dynamics:**
- Initial influx: Rapid through break (pressure gradient)
- Continued accumulation: RPE pump failure, osmotic gradients
- Fluid composition: Protein-rich, differs from vitreous
- Spreading pattern: Follows gravitational laws, dependent on position

## Detailed Classification

**Rhegmatogenous Subtypes:**

| Type | Features | Typical Location |
|------|----------|------------------|
| Horseshoe tear | Flap still attached, U-shaped | Superotemporal (50-60%) |
| Dialysis | Circumferential break at ora | Inferotemporal (trauma) |
| Macular hole | Central break | Macula |
| Giant tear | >90° circumferential | Often posterior |
| Round hole | Operculated flap | Posterior |

**Proliferative Vitreoretinopathy (PVR) Grading:**

| Grade | Description |
|-------|-------------|
| A | Vitreous pigment, star folds |
| B | Rolled edges, stiffness, surface wrinkling |
| C1 | Epiretinal membranes, <1 clock hour |
| C2 | Membranes, 1-3 clock hours |
| C3 | Membranes, >3 clock hours |
| D | Full-thickness retinal folds, anterior/posterior |

## Diagnostic Challenges

**Differential Diagnosis:**
- **Posterior vitreous detachment**: Floaters only, no retinal pathology
- **Retinoschisis**: Smooth, dome-shaped, usually bilateral
- **Choroidal detachment**: Dark brown, shows transillumination
- **Vitreous hemorrhage**: Cannot view retina
- **Choroidal tumor**: Solid mass, not mobile

**Difficult Breaks to Find:**
- Small holes at posterior edge of lattice
- Breaks hidden by retinal blood
- Breaks at ora serrata (behind iris)
- Intrapapillary (within optic disc) - rare
- Multiple breaks (present in 15-30%, find ALL!)

**Imaging pearls:**
- **Optos ultra-widefield**: 200° view, 82% sensitivity vs 62% for gold standard exam
- **OCT**: Macular edema, schisis vs true detachment, small breaks
- **Ultrasound**: T-sign for retinal detachment vs smooth dome for detachment
- **Fundus autofluorescence**: May show RPE changes overlying breaks

## Surgical Decision-Making

**Procedure Selection Algorithm:**

Text-based decision flow:
1. Is this a Rhegmatogenous RD?
2. Check macula status (ON vs OFF)
3. If macula ON and single superior break visible: Consider pneumatic retinopexy
4. If macula OFF: Check time since onset
   - Less than 7 days: Any method with good prognosis
   - 7 days or more: Any method with worse prognosis
5. For complex cases: Vitrectomy or buckle

**Laser Barrage vs Cryotherapy:**
- **Laser**: Precise, less inflammation, can be done intraoperatively
- **Cryo**: Better for anterior breaks, anterior edge of buckle
- Combination often used for extensive pathology

**Tamponade Agents:**

| Agent | Duration | Indications | Considerations |
|-------|----------|-------------|----------------|
| SF6 gas | 2 weeks | Simple breaks | Expands 2x, avoid air travel |
| C3F8 gas | 6-8 weeks | Inferior breaks, PVR | Expands 4x, long positioning |
| Silicone oil | Until removal | Complex, PVR, trauma | Emulsification, glaucoma risk |
| Perfluorocarbon | Intraop only | Heavy liquid to flatten retina | Must remove |

**Vitrectomy Techniques:**
- **Core vitrectomy**: Remove central vitreous
- **Peripheral vitrectomy**: Scleral depression for base access
- **PVD induction**: Suction over optic nerve, create separation
- **Air-fluid exchange**: Flatten retina, drain subretinal fluid
- **Endolaser**: Apply breaks under direct visualization
- **Tamponade injection**: Fill vitreous cavity

**Anatomic Success Rates:**
- Primary repair: 75-90%
- Final success after reoperations: >95%
- PVR reduces success to ~60%

## Complications and Management

**Early Complications:**
- Elevated IOP from gas/silicone
- Choroidal detachment (surgery-related)
- Inflammation (iritis, vitritis)
- Cataract progression (vitrectomy)

**Late Complications:**
- Epiretinal membrane (5-20%)
- Macular pucker/edema
- New breaks in same or fellow eye
- Diplopia from buckle
- Silicone oil emulsification
- Band keratopathy (silicone oil)

**Redetachment Management:**
- Identify cause: New break, missed break, PVR, inadequate closure
- Repeat vitrectomy for PVR, consider silicone oil
- Revise or add buckle
- Consider relaxing retinectomy for very anterior detachment

## Fellow Eye Considerations

**Prophylactic Treatment Indications:**
- Lattice degeneration with symptoms (flashes, increased floaters)
- Asymptomatic high-risk lesions (controversial)
- Retinal dialysis
- Family history + high myopia + symptomatic PVD

**Treatment Options:**
- Laser retinopexy (preferred)
- Cryotherapy (if laser not possible)
- Regular monitoring if low risk

**Natural History of Lattice:**
- Detachment risk: 1% per year with lesions
- 30-40% of RD patients have lattice in affected eye
- Bilateral lattice in 30-50% of cases`,
      keyTerms: [
        { term: 'lattice degeneration', definition: 'Peripheral retinal thinning with strong vitreoretinal adhesions; common precursor to retinal tears' },
        { term: 'ora serrata', definition: 'Jagged junction between retina and ciliary epithelium; anterior limit of retina' },
        { term: 'tamponade', definition: 'Agent (gas or oil) used to maintain retinal position after surgery' },
        { term: 'endolaser', definition: 'Laser delivered intraocularly during vitrectomy to treat retinal breaks' },
        { term: 'air-fluid exchange', definition: 'Surgical step replacing vitreous fluid with air to flatten retina' },
      ],
      clinicalNotes: 'Finding all breaks is critical - up to 30% of eyes have multiple breaks. Examine the entire periphery with scleral depression. Document all breaks and PVD status. For macula-off detachments, urgency decreases after 7 days as photoreceptor loss is largely complete.',
    },
    5: {
      level: 5,
      summary: 'Contemporary management of retinal detachment integrates advanced imaging, microsurgical techniques, and individualized surgical approaches to optimize anatomic and visual outcomes while considering cost-effectiveness and patient-specific factors.',
      explanation: `## Current Evidence and Controversies

**Scleral Buckle vs Primary Vitrectomy (SPR Study):**

| Finding | Details |
|---------|---------|
| Equivalent outcomes | For phakic eyes with simple RD (Pars Plana Vitrectomy vs Scleral Buckle) |
| PPV advantage | Faster visual recovery, less postoperative myopia |
| Buckle advantage | Lower cataract rate, lower cost, no need for positioning |
| Trend | Increasing PPV use even for simple cases |

**Pneumatic Retinopexy Outcomes (PDT trial):**
- Single-procedure success: 73% vs 60% (PPV)
- Cost-effectiveness: Superior for selected cases
- Patient preference: High (office-based procedure)
- Limitations: Requires strict positioning, not for complex RD

## Advanced Surgical Techniques

**Small-Gauge Vitrectomy:**
- 25-gauge: Sutureless, less inflammation, faster recovery
- 27-gauge: Even less trauma, but more flexible instruments
- 23-gauge: Stiffer for difficult cases, sutureless possible
- Choice depends on case complexity and surgeon preference

**Chandelier Lighting:**
- Bimanual surgery capability
- Better peripheral visualization
- Facilitates complex dissection (PVR membranes)

**Perfluorocarbon Liquids:**
- "Heavy liquid" - heavier than water
- Flattens retina during surgery
- Temporarily displaces subretinal fluid
- Must be completely removed before closing

**Relaxing Retinectomy:**
- For anterior PVR with shortening
- Circumferential or radial cuts to release traction
- High risk of proliferative vitreoretinopathy
- Silicone oil tamponade usually required

**Subretinal Fluid Drainage:**
- External drainage through sclerotomy
- Internal drainage via retinotomy
- Risk of retinal incarceration, choroidal hemorrhage
- Many surgeons now avoid external drainage

## Special Situations

**Giant Retinal Tears (>90°):**
- High risk of PVR and retinal folding
- Techniques: Perfluorocarbon liquid, strategic retinotomies
- Tamponade: Long-acting gas or silicone oil
- Consider lens removal if phakic

**Traumatic Retinal Detachment:**
- Often associated with dialysis at ora serrata
- May have multiple breaks, foreign bodies
- Delayed presentation common
- High PVR risk
- Consider prophylactic treatment to fellow eye

**Retinal Detachment with Choroidal Detachment:**
- Often hypotony-related
- Drain choroidal before retinal repair
- May need anterior chamber maintainer
- High risk of suprachoroidal hemorrhage

**Detachment in Pediatric Patients:**
- Higher rate of bilateral involvement
- Often associated with congenital anomalies
- Higher PVR rate
- Longer tamponade often needed
- Higher risk of amblyopia

**Macular Hole-Associated Detachment:**
- Highly myopic eyes (pathologic myopia)
- Posterior staphyloma
- High risk of recurrence
- May need internal limiting membrane peel
- Consider silicone oil tamponade

## PVR Management

**Prevention Strategies:**
- Prompt repair of primary detachment
- Meticulous surgical technique
- Limit laser intensity (excess causes inflammation)
- Consider perioperative steroids (controversial)
- 5-fluorouracil/heparin irrigation (mixed evidence)

**Treatment Approaches:**
- Complete vitrectomy with membrane peel
- En bloc dissection technique
- Retinectomy for fixed folds (peripheral or macula)
- Long-term silicone oil tamponade
- Multiple surgeries often needed

**Adjunctive Therapies:**
- Daunorubicin (intraoperative): Mixed results
- Methotrexate: For PVR prevention
- ROR1 immunotherapy: Investigational
- Gene therapy targeting TGF-beta: Research stage

## Complications Management

**Postoperative Hypotony:**
- Check for wound leak (Seidel test)
- Choroidal detachment
- Ciliary body dysfunction
- Treat: Wound revision, anterior chamber reformation

**Silicone Oil Complications:**
- Emulsification: Timing of removal important
- Glaucoma: May need oil removal or tube shunt
- Band keratopathy: Requires chelation after oil removal
- Optic nerve injury: Rare, check IOP

**Cataract after Vitrectomy:**
- 80% develop significant cataract within 2 years
- More common with longer duration, gas tamponade
- Combined phaco-vitrectomy increasingly common
- IOL calculations affected by scleral buckle (axial length change)

** Diplopia after Scleral Buckle:**
- 5-15% incidence
- Causes: Extraocular muscle damage, fat adherence
- Spontaneous improvement common
- Treat: Prism glasses, strabismus surgery

## Quality and Outcomes

**Predictive Scoring Systems:**
- **WDS score**: Wound, detachment characteristics, symptoms
- **PVR prediction models**: Preoperative factors
- **Visual acuity prediction models**: Pre-op vision, macula status, detachment duration

**Failure Analysis:**
- Missed breaks (most common preventable cause)
- Inadequate chorioretinal adhesion
- New break formation
- PVR development
- Technical issues

**Cost-Effectiveness:**
- Pneumatic retinopexy: Most cost-effective for eligible patients
- Scleral buckle: More cost-effective than PPV for simple cases
- PPV: Higher initial cost but faster recovery may offset

## Future Directions

**Teleophthalmology for Triage:**
- Remote diagnosis of retinal detachment
- Triage urgency for surgery
- Particularly valuable in rural settings

**Artificial Intelligence:**
- Automated detection on OCT/ultrasound
- Break identification assistance
- Prognosis prediction

**Pharmacologic Adjuvants:**
- ROCK inhibitors for PVR prevention
- Anti-inflammatory agents (NSAIDs, steroids)
- Anti-VEGF for exudative detachment

**Surgical Innovation:**
- Robotic assistance for precision
- New vitreous substitutes
- Improved visualization systems

**Gene Therapy Considerations:**
- Future potential for PVR prevention
- Targeting fibrosis pathways
- Still experimental`,
      keyTerms: [
        { term: 'chandelier lighting', definition: 'Bipolar illumination system enabling bimanual vitreoretinal surgery' },
        { term: 'relaxing retinectomy', definition: 'Surgical removal of retina to release traction in PVR' },
        { term: 'perfluorocarbon liquid', definition: 'Heavy liquid used intraoperatively to flatten retina' },
        { term: 'en bloc dissection', definition: 'Removing entire PVR membrane as single sheet' },
        { term: 'small-gauge vitrectomy', definition: 'Transconjunctival sutureless vitrectomy using 23/25/27 gauge instruments' },
      ],
      clinicalNotes: `Evidence-based practice pearls:

1. **Primary repair success**: >90% with modern techniques, but macular function depends on duration of detachment. Educate patients about symptom awareness.

2. **Pneumatic retinopexy**: Best for single superior break <1 clock hour, no PVR, good patient compliance with positioning. Cost savings of $10,000+ vs OR procedures.

3. **Scleral buckle**: Still valuable for young phakic patients with inferior breaks. Lower cataract rate than PPV.

4. **PPV trend**: Increasingly used as primary procedure even for simple detachments due to faster recovery and surgeon familiarity.

5. **Fellow eye risk**: 10-15% will develop detachment. Lattice with symptoms warrants treatment. Prophylactic treatment for asymptomatic lesions remains controversial.

6. **PVR is the challenge**: Once PVR develops, success drops to ~60% with multiple surgeries typically needed. Early referral and repair remains best prevention.`,
    },
  },

  media: [
    {
      id: 'retinal-detachment-types',
      type: 'diagram',
      filename: 'retinal-detachment-types.svg',
      title: 'Types of Retinal Detachment',
      description: 'Rhegmatogenous, tractional, and exudative detachment mechanisms',
    },
    {
      id: 'rhegmatogenous-detachment-mechanism',
      type: 'diagram',
      filename: 'rhegmatogenous-detachment.svg',
      title: 'Rhegmatogenous Detachment Mechanism',
      description: 'Step-by-step progression from retinal tear to detachment',
    },
    {
      id: 'scleral-buckle-diagram',
      type: 'diagram',
      filename: 'scleral-buckle.svg',
      title: 'Scleral Buckle Technique',
      description: 'Surgical approach showing buckle placement and retinal reattachment',
    },
  ],

  citations: [
    {
      id: 'aao-retinal-detachment',
      type: 'textbook',
      title: 'Retinal Detachment and Proliferative Vitreoretinopathy',
      source: 'AAO Basic and Clinical Science Course',
      chapter: 'Retina and Vitreous',
    },
    {
      id: 'aao-preferred-practice',
      type: 'website',
      title: 'Preferred Practice Pattern Guidelines: Rhegmatogenous Retinal Detachments',
      authors: ['American Academy of Ophthalmology'],
      source: 'AAO',
      url: 'https://www.aao.org',
    },
    {
      id: 'spring-ppv-vs-buckle',
      type: 'article',
      title: 'Scleral Buckling versus Primary Vitrectomy in Rhegmatogenous Retinal Detachment',
      authors: ['Spring DJ', 'Meyers SM'],
      source: 'Ophthalmology',
    },
  ],

  crossReferences: [
    { targetId: 'condition-diabetic-retinopathy', targetType: 'condition', relationship: 'related', label: 'Diabetic Retinopathy' },
    { targetId: 'condition-macular-degeneration', targetType: 'condition', relationship: 'related', label: 'Macular Degeneration' },
    { targetId: 'process-eye-examination', targetType: 'process', relationship: 'related', label: 'Eye Examination' },
  ],

  tags: {
    systems: ['visual', 'nervous'],
    topics: ['ophthalmology', 'retina', 'surgical emergency', 'vision loss'],
    keywords: ['retinal detachment', 'flashes', 'floaters', 'scleral buckle', 'vitrectomy'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['ophthalmology', 'emergency medicine'],
    },
  },

  createdAt: '2026-01-25T00:00:00.000Z',
  updatedAt: '2026-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default retinalDetachment;
