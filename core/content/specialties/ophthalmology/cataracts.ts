/**
 * Cataracts - Comprehensive Educational Content
 *
 * Covers types, pathophysiology, risk factors, diagnosis,
 * and surgical management of lens opacification.
 */

import { EducationalContent } from '../../types';

export const cataracts: EducationalContent = {
  id: 'condition-cataracts',
  type: 'condition',
  name: 'Cataracts',
  alternateNames: ['Lens Opacity', 'Lens Clouding', 'Cataracta'],
  hpoId: 'HP:0000518',

  levels: {
    1: {
      level: 1,
      summary: 'A cataract is when the clear lens inside your eye becomes cloudy, like looking through a foggy window, making it harder to see.',
      explanation: `Inside your eye, there's a clear lens that helps focus light so you can see. When this lens gets cloudy, it's called a cataract.

**What Causes Cataracts:**
- Getting older - the most common cause
- Too much sun exposure over the years
- Eye injuries
- Some diseases like diabetes
- Some medications
- Born with them (rare)

**What You Might Notice:**
- Vision gets blurry or foggy
- Colors look faded or yellowish
- Bright lights seem too bright or have halos
- Harder to see at night
- Need more light to read
- Glasses prescriptions keep changing

**Who Gets Cataracts:**
- Very common in older adults
- By age 80, more than half of people have had a cataract
- Usually affects both eyes (but one may be worse)

**Treatment:**
- Early on: Stronger glasses, better lighting
- When vision affects daily life: Surgery!
- Cataract surgery is very common and safe
- The cloudy lens is removed and replaced with a clear artificial one
- Most people see much better after surgery

**Good News:**
Cataract surgery is one of the most successful surgeries performed today. Millions of people have it every year and see clearly again!`,
      keyTerms: [
        { term: 'cataract', definition: 'A clouding of the eye\'s natural lens that makes vision blurry' },
        { term: 'lens', definition: 'The clear part inside your eye that focuses light' },
        { term: 'intraocular lens', definition: 'An artificial lens put in your eye during cataract surgery' },
      ],
      analogies: [
        'A cataract is like looking through a foggy or dirty window - things look blurry and colors are dulled.',
        'Think of a camera lens getting smudged - the pictures come out blurry until you clean it.',
        'The cloudy lens is like an egg white going from clear to white when cooked - proteins change structure.',
      ],
      examples: [
        'A grandmother who can\'t read recipes anymore because everything looks foggy probably has cataracts.',
        'Noticing that headlights while driving at night have big halos around them is a common cataract symptom.',
        'When bright sunny days become uncomfortable because of glare, cataracts may be developing.',
      ],
    },
    2: {
      level: 2,
      summary: 'Cataracts are opacifications of the crystalline lens causing progressive visual impairment, most commonly age-related, and treated surgically by lens extraction and intraocular lens implantation.',
      explanation: `Cataracts are the leading cause of blindness worldwide and the most common cause of reversible vision loss.

**Anatomy Review:**
- The crystalline lens is a transparent, biconvex structure
- Located behind the iris and pupil
- Provides ~1/3 of the eye's focusing power (~17-20 diopters)
- Made of lens fibers (modified epithelial cells) with no blood supply
- Capsule surrounds the lens (important in surgery)

**Types of Age-Related Cataracts:**

**1. Nuclear Cataract**
- Center (nucleus) of lens hardens and yellows
- Most common type
- Causes "second sight" (temporary improvement in near vision)
- Eventually causes nearsightedness (myopic shift)

**2. Cortical Cataract**
- Wedge-shaped opacities in outer lens (cortex)
- Start at edges, progress toward center
- Can cause glare and light sensitivity

**3. Posterior Subcapsular Cataract (PSC)**
- Opacity at back of lens, just under capsule
- Causes more symptoms for size (near vision, glare)
- Associated with steroids, diabetes, trauma
- Affects younger patients more often

**Risk Factors:**
- Age (strongest factor)
- Ultraviolet light exposure
- Smoking
- Diabetes
- Steroid use
- Previous eye surgery or injury
- Family history
- Alcohol use

**Symptoms:**
- Gradual, painless vision loss
- Glare and halos around lights
- Difficulty with night driving
- Faded colors
- Frequent prescription changes
- Double vision in one eye (monocular diplopia)

**Diagnosis:**
- Visual acuity testing
- Slit lamp examination
- Dilated fundus exam (to see retina)
- Assessment of visual function impact

**Treatment:**
- Non-surgical: Better lighting, magnification, anti-glare glasses
- Surgical: Phacoemulsification with IOL implantation
  - Removes cloudy lens using ultrasound
  - Inserts artificial lens (IOL)
  - Outpatient procedure, usually <30 minutes
  - 95%+ success rate for improved vision`,
      keyTerms: [
        { term: 'phacoemulsification', definition: 'Surgical technique using ultrasound to break up and remove a cataract', pronunciation: 'FAY-koh-ee-mul-sih-fih-KAY-shun' },
        { term: 'intraocular lens (IOL)', definition: 'Artificial lens implanted in the eye to replace the natural lens' },
        { term: 'nuclear sclerosis', definition: 'Hardening of the lens nucleus, causing nuclear cataracts' },
        { term: 'posterior subcapsular cataract', definition: 'Cataract at the back of the lens, often causing significant glare' },
        { term: 'second sight', definition: 'Temporary improvement in near vision from nuclear cataract causing myopic shift' },
      ],
      analogies: [
        'Phacoemulsification is like using a tiny jackhammer that vibrates very fast to break up the cloudy lens into tiny pieces.',
        'The lens capsule is like a clear plastic bag that holds the lens - surgeons leave it in place to hold the new artificial lens.',
      ],
    },
    3: {
      level: 3,
      summary: 'Cataracts result from protein aggregation and oxidative damage in lens fibers, classified by morphology and etiology, with surgical management involving phacoemulsification and IOL selection based on patient needs and ocular characteristics.',
      explanation: `## Pathophysiology

**Lens Structure:**
- Capsule: Type IV collagen, basement membrane
- Epithelium: Single layer under anterior capsule
- Cortex: Younger lens fibers
- Nucleus: Older, compacted fibers

**Normal Lens Transparency:**
- Highly organized crystallin proteins
- Minimal light scatter
- Maintained by antioxidants (glutathione, ascorbic acid)
- No blood vessels or nerves

**Cataract Formation:**
1. Oxidative stress damages lens proteins
2. Crystallin protein denaturation and aggregation
3. Loss of regular protein arrangement
4. Light scattering causes opacity
5. Lens fiber membrane damage

**Biochemical Changes:**
- Decreased glutathione (antioxidant)
- Protein cross-linking and aggregation
- Calcium influx
- Water accumulation (cortical cataracts)
- Chromophore accumulation (brunescent nuclear cataracts)

## Classification

**By Morphology:**
1. **Nuclear**: Brunescence, hardening, myopic shift
2. **Cortical**: Spoke-like opacities, water clefts
3. **Posterior Subcapsular**: Central posterior opacity
4. **Anterior Subcapsular**: Less common, often trauma-related
5. **Mature/Hypermature**: Complete opacification, liquefied cortex

**By Etiology:**
1. **Age-related**: Most common (>90%)
2. **Traumatic**: Blunt or penetrating injury
3. **Metabolic**: Diabetes (snowflake), galactosemia
4. **Drug-induced**: Corticosteroids, phenothiazines
5. **Secondary**: Uveitis, radiation, surgery
6. **Congenital/Developmental**: Hereditary, intrauterine infection

**Grading Systems:**
- LOCS III (Lens Opacities Classification System)
- Nuclear opalescence/color: NO1-NO6, NC1-NC6
- Cortical: C1-C5
- PSC: P1-P5

## Surgical Technique

**Phacoemulsification:**
1. Topical or local anesthesia
2. Corneal or limbal incision (2.2-2.8 mm)
3. Continuous curvilinear capsulorhexis (CCC)
4. Hydrodissection and hydrodelineation
5. Nucleus sculpting and chopping
6. Cortical aspiration
7. Capsular polishing
8. IOL implantation (in-the-bag)
9. Wound hydration (often sutureless)

**Difficult Cases:**
- Mature/white cataract: No red reflex, capsulorhexis difficult
- Brunescent/hard nucleus: More ultrasound energy needed
- Pseudoexfoliation: Weak zonules, small pupil
- Small pupils: Iris hooks or rings
- Posterior polar cataracts: High posterior capsule rupture risk

## IOL Selection

**IOL Types:**
1. **Monofocal**: Single focal point (distance, near, or intermediate)
2. **Multifocal**: Multiple focal points (diffractive or refractive)
3. **EDOF**: Extended depth of focus
4. **Toric**: Corrects astigmatism
5. **Accommodating**: Moves with ciliary muscle

**IOL Power Calculation:**
- Biometry: Axial length, keratometry, anterior chamber depth
- Formulas: SRK/T, Holladay, Haigis, Barrett Universal II
- Target refraction: Usually emmetropia or mild myopia

**IOL Materials:**
- Acrylic (hydrophobic or hydrophilic)
- Silicone
- PMMA (older, larger incisions)

## Complications

**Intraoperative:**
- Posterior capsule rupture (most feared)
- Zonular dialysis
- Vitreous loss
- Dropped nucleus
- Choroidal hemorrhage

**Postoperative:**
- Posterior capsule opacification (PCO) - 20-40%
- Cystoid macular edema (CME)
- Endophthalmitis (rare but serious)
- Retinal detachment
- IOL dislocation
- Refractive surprise`,
      keyTerms: [
        { term: 'crystallins', definition: 'Major structural proteins of the lens that maintain transparency', pronunciation: 'KRIS-tuh-linz' },
        { term: 'capsulorhexis', definition: 'Circular tear in the anterior lens capsule created during cataract surgery', pronunciation: 'kap-soo-loh-REK-sis' },
        { term: 'posterior capsule opacification', definition: 'Clouding of the posterior capsule after surgery, treated with YAG laser', pronunciation: 'PCO' },
        { term: 'zonules', definition: 'Fibers suspending the lens from the ciliary body' },
        { term: 'pseudoexfoliation', definition: 'Syndrome with abnormal protein deposits causing weak zonules and cataract' },
      ],
      clinicalNotes: 'PSC cataracts cause symptoms disproportionate to their size due to location in nodal point. Always check for PCO with YAG laser if visual acuity drops after initially successful surgery. Diabetics have higher PCO rates. Pseudoexfoliation increases surgical complexity and glaucoma risk.',
    },
    4: {
      level: 4,
      summary: 'Cataract pathogenesis involves crystallin protein modification through oxidation, glycation, and UV damage, while modern surgical techniques emphasize femtosecond laser-assisted approaches, premium IOL technologies, and management of complex cases including prior refractive surgery.',
      explanation: `## Molecular Pathogenesis

**Crystallin Proteins:**
- Alpha-crystallins: Chaperone function, prevent aggregation
- Beta/Gamma-crystallins: Structural, maintain transparency
- With age: Alpha-crystallin chaperone capacity decreases
- Protein aggregation → Light scattering → Opacity

**Oxidative Mechanisms:**
- Glutathione depletion (decreases with age)
- Reactive oxygen species accumulation
- Protein thiol oxidation
- Lipid peroxidation in membranes
- Ascorbic acid (vitamin C) protective role

**Glycation (Diabetes):**
- Non-enzymatic glycation of lens proteins
- Advanced glycation end products (AGEs)
- Cross-linking of crystallins
- Accelerated cataract formation
- Sorbitol pathway: Glucose → Sorbitol (aldose reductase)
- Osmotic damage from sorbitol accumulation

**UV Damage:**
- UV-B (290-320 nm) most damaging
- Cortical cataracts associated with UV
- Tryptophan photodegradation
- Kynurenine pathway metabolites

## Femtosecond Laser-Assisted Cataract Surgery (FLACS)

**Laser Functions:**
1. Corneal incisions (main, side ports)
2. Capsulotomy (replaces manual CCC)
3. Lens fragmentation (reduces phaco energy)

**Potential Advantages:**
- More precise, centered capsulotomy
- Reduced ultrasound energy
- Better IOL centration
- Reproducibility

**Current Evidence:**
- Visual outcomes similar to standard phaco
- Slightly lower endothelial cell loss
- Higher cost
- Learning curve
- Miosis from docking

## Complex Cases

**Post-Refractive Surgery:**
- IOL calculation difficult (corneal power altered)
- History may be unknown
- Formulas: Barrett True-K, Haigis-L, ASCRS calculator
- Often slight hyperopic surprise

**Pseudoexfoliation Syndrome:**
- Zonular weakness
- Small pupils (poor dilation)
- Higher complication rates
- Consider capsular tension ring (CTR)
- Increased endothelial cell loss

**Uveitis:**
- Pre-op inflammation control (quiet x 3 months)
- Intraoperative miosis
- Higher PCO rates
- Consider sulcus IOL in severe cases
- Aggressive steroid treatment post-op

**Pediatric Cataracts:**
- Amblyopia risk if unilateral
- Aphakia vs IOL debate in infants
- Higher PCO rates (primary posterior capsulotomy)
- Myopic shift with eye growth
- Close follow-up required

**Mature/White Cataracts:**
- No red reflex for visualization
- High intralenticular pressure
- Capsule staining (trypan blue)
- Gentle hydrodissection
- "Argentinian flag sign" risk

## Premium IOL Technologies

**Multifocal IOLs:**
- Diffractive: Concentric rings split light
- Refractive: Zones with different powers
- Trade-offs: Halos, glare, contrast sensitivity loss
- Patient selection critical

**Extended Depth of Focus (EDOF):**
- Single elongated focal point
- Less halos than multifocal
- Good intermediate vision
- Near vision may need readers

**Toric IOLs:**
- Corrects corneal astigmatism >1.0 D
- Requires precise alignment
- Marking and registration systems
- Rotational stability important

**Light-Adjustable Lens (LAL):**
- Post-op UV treatment adjusts power
- Fine-tune refraction after healing
- Multiple treatments possible
- Must wear UV protection until locked

## Outcome Optimization

**IOL Calculation Optimization:**
- Optical biometry (IOLMaster, Lenstar)
- Multiple formulas, compare results
- Wang-Koch adjustment for long eyes
- Consider effective lens position (ELP)

**Managing Expectations:**
- Dysphotopsia discussion
- Spectacle dependence likelihood
- Neuroadaptation time
- Occupational considerations

**Quality Metrics:**
- UDVA, CDVA, DCNVA
- Spectacle independence rates
- Patient satisfaction scores
- Defocus curves`,
      keyTerms: [
        { term: 'alpha-crystallin', definition: 'Lens protein with chaperone function that prevents aggregation of other proteins' },
        { term: 'femtosecond laser', definition: 'Ultra-short pulse laser (10^-15 seconds) used for precise tissue cutting in FLACS' },
        { term: 'capsular tension ring', definition: 'Device placed in capsular bag to support weak zonules' },
        { term: 'trypan blue', definition: 'Vital dye used to stain the anterior capsule for visibility in white cataracts' },
        { term: 'effective lens position', definition: 'Predicted postoperative position of IOL, critical for power calculation' },
      ],
      clinicalNotes: 'FLACS has not shown superior visual outcomes but may reduce ultrasound energy. Post-refractive surgery cases often have hyperopic surprise. Premium IOL success depends heavily on patient selection and expectation management. Pseudoexfoliation patients need careful counseling about surgical risks.',
    },
    5: {
      level: 5,
      summary: 'State-of-the-art cataract management integrates understanding of lens protein biochemistry and cellular biology with advanced surgical techniques, artificial intelligence-guided IOL calculations, emerging pharmacological prevention strategies, and personalized premium IOL selection algorithms.',
      explanation: `## Advanced Lens Biology

**Lens Fiber Differentiation:**
- Epithelial cells at equator differentiate into fibers
- Connexin gap junctions create syncytium
- Organelle degradation (mitochondria, nuclei)
- Crystallin accumulation (>90% of dry weight)
- Continues throughout life (no cell turnover)

**Age-Related Changes:**
- Compaction of nucleus (presbyopia)
- Decreased water content
- Increased insoluble protein fraction
- Post-translational modifications (deamidation, truncation)
- Alpha-crystallin saturation

**Molecular Chaperone System:**
- Alpha A and B crystallins: Small heat shock proteins
- Prevent aggregation of denatured proteins
- Binding capacity finite; overwhelmed with age
- Therapeutic target for pharmacological prevention

## Pharmacological Cataract Prevention

**Research Compounds:**
- **Lanosterol**: May reverse protein aggregation (animal models)
- **Aldose reductase inhibitors**: Diabetic cataract prevention
- **Antioxidants**: N-acetylcarnosine (limited evidence)
- **Oxysterols**: Potential crystallin stabilizers
- **Pirenoxine**: Popular in Asia, efficacy unclear

**Current Status:**
- No FDA-approved pharmacological treatment
- Studies ongoing for crystallin stabilizers
- Lifestyle modifications (UV protection, smoking cessation) beneficial

## Surgical Innovation

**Minimally Invasive Cataract Surgery (MICS):**
- Incisions <2.0 mm
- Reduced surgically induced astigmatism
- Faster visual recovery
- Special IOL designs required

**Robotic-Assisted Surgery:**
- PRECEYES, Forsight Robotics systems
- Improved tremor filtration
- Potential for standardization
- Currently research/limited clinical use

**Intracapsular Lens Restoration:**
- Refilling lens capsule with polymer
- Restoration of accommodation (theoretical)
- Research phase

## IOL Calculation 2.0

**AI-Based Formulas:**
- Hill-RBF (Radial Basis Function)
- Kane Formula (machine learning)
- Pearl-DGS
- Trained on large datasets
- Better for unusual eyes

**Intraoperative Aberrometry:**
- ORA System (WaveTec)
- Real-time aphakic measurements
- Toric IOL alignment guidance
- Useful for post-refractive eyes

**Total Keratometry (TK):**
- Measures posterior corneal astigmatism
- More accurate total corneal power
- Improved toric IOL outcomes

## Complex IOL Cases

**Post-Refractive Surgery:**

*Post-LASIK/PRK:*
- Keratometry overestimates corneal power
- Use clinical history method if data available
- ASCRS online calculator
- Barrett True-K formula
- Expect hyperopic surprise with standard formulas

*Post-RK:*
- Central flattening, unstable refraction
- Very challenging calculations
- Consider toric IOL for residual astigmatism
- Staged approach may be needed

**IOL Exchange:**
- Indications: Wrong power, intolerable dysphotopsia
- Timing: Early easier (1-4 weeks)
- Late exchange: Capsular bag fibrosis
- May require sulcus placement or scleral fixation

**Scleral-Fixated IOLs:**
- For insufficient capsular support
- Gore-Tex sutures (CV-8)
- Flanged haptic technique (Yamane)
- SFIOL complications: Tilt, decentration, suture erosion

## Premium IOL Selection Algorithm

**Candidate Assessment:**
1. Visual demands (occupation, hobbies)
2. Previous refractive surgery
3. Dry eye disease
4. Macular pathology (OCT)
5. Corneal aberrations
6. Personality/expectations
7. Willingness to neuroadapt

**Contraindications to Multifocal/EDOF:**
- Macular disease (AMD, ERM, DME)
- Glaucoma with central field loss
- High corneal HOAs
- Corneal dystrophies
- Extreme personality types
- Professional night drivers/pilots

**Monovision Alternative:**
- One eye distance, one near
- Test with contact lenses first
- ~70% tolerance
- Preserves contrast sensitivity

## Complications Management

**Endophthalmitis:**
- Incidence: ~0.03-0.05%
- Most common: S. epidermidis, S. aureus
- Prophylaxis: Povidone-iodine, intracameral antibiotics
- EVS study: Vitrectomy if LP or worse
- Intravitreal vancomycin + ceftazidime

**Toxic Anterior Segment Syndrome (TASS):**
- Sterile inflammation post-op
- Causes: Residue, preservatives, enzyme detergents
- Presents 12-48 hours post-op
- Treatment: Aggressive steroids

**Cystoid Macular Edema:**
- Irvine-Gass syndrome
- Peak 4-6 weeks post-op
- Risk factors: Diabetes, uveitis, CRVO history
- Treatment: NSAIDs + steroids (topical)
- Intravitreal steroids or anti-VEGF if refractory

**Posterior Capsule Opacification:**
- Lens epithelial cell proliferation
- Nd:YAG laser capsulotomy treatment
- Complications: IOL damage, CME, retinal detachment
- Square-edge IOLs reduce PCO`,
      keyTerms: [
        { term: 'crystallin chaperone', definition: 'Alpha-crystallins function as molecular chaperones preventing protein aggregation in the lens' },
        { term: 'Hill-RBF', definition: 'AI-based IOL calculation formula using radial basis function machine learning' },
        { term: 'intraoperative aberrometry', definition: 'Real-time wavefront measurement during surgery for IOL selection refinement' },
        { term: 'flanged haptic technique', definition: 'Yamane method of scleral IOL fixation using heat to create haptic flanges' },
        { term: 'TASS', definition: 'Toxic anterior segment syndrome; sterile post-op inflammation from contaminants' },
      ],
      clinicalNotes: `Key clinical pearls:
1. AI-based IOL formulas (Hill-RBF, Kane) often outperform traditional formulas
2. Total keratometry improves toric IOL outcomes by measuring posterior corneal astigmatism
3. Intracameral antibiotics reduce endophthalmitis risk
4. Premium IOL selection should be a shared decision with realistic expectation setting
5. Post-refractive surgery eyes: Use multiple formulas, accept uncertainty, aim slightly myopic
6. PCO risk reduced with square-edge IOL design and meticulous cortical cleanup
7. CME prophylaxis with NSAIDs, especially in diabetics and high-risk patients`,
    },
  },

  media: [
    {
      id: 'cataract-types-diagram',
      type: 'diagram',
      filename: 'cataract-types.svg',
      title: 'Types of Cataracts',
      description: 'Diagram showing nuclear, cortical, and posterior subcapsular cataract locations',
    },
    {
      id: 'phacoemulsification-steps',
      type: 'diagram',
      filename: 'phaco-steps.svg',
      title: 'Phacoemulsification Steps',
      description: 'Step-by-step illustration of cataract surgery technique',
    },
  ],

  citations: [
    {
      id: 'aao-ppp-cataract',
      type: 'article',
      title: 'Cataract in the Adult Eye Preferred Practice Pattern',
      source: 'American Academy of Ophthalmology',
      url: 'https://www.aao.org/preferred-practice-pattern/cataract-in-adult-eye-ppp',
    },
    {
      id: 'bcsc-lens',
      type: 'textbook',
      title: 'Lens and Cataract',
      source: 'AAO Basic and Clinical Science Course',
      chapter: 'Section 11',
    },
    {
      id: 'yanoff-cataract',
      type: 'textbook',
      title: 'Ophthalmology',
      authors: ['Yanoff M', 'Duker JS'],
      source: 'Elsevier',
      chapter: 'Lens',
    },
  ],

  crossReferences: [
    { targetId: 'structure-eye-anatomy', targetType: 'structure', relationship: 'related', label: 'Eye Anatomy' },
    { targetId: 'condition-refractive-errors', targetType: 'condition', relationship: 'related', label: 'Refractive Errors' },
    { targetId: 'condition-glaucoma', targetType: 'condition', relationship: 'related', label: 'Glaucoma' },
    { targetId: 'condition-diabetic-retinopathy', targetType: 'condition', relationship: 'related', label: 'Diabetic Retinopathy' },
  ],

  tags: {
    systems: ['visual'],
    topics: ['ophthalmology', 'surgery', 'aging'],
    keywords: ['cataract', 'phacoemulsification', 'IOL', 'lens opacity', 'cataract surgery'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['ophthalmology', 'surgery'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default cataracts;
