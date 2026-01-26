/**
 * Glaucoma - Comprehensive Educational Content
 *
 * Covers open-angle glaucoma, angle-closure glaucoma, pathophysiology,
 * diagnosis, and medical/surgical management.
 */

import { EducationalContent } from '../../types';

export const glaucoma: EducationalContent = {
  id: 'condition-glaucoma',
  type: 'condition',
  name: 'Glaucoma',
  alternateNames: ['The Silent Thief of Sight', 'Ocular Hypertension', 'Optic Neuropathy'],
  hpoId: 'HP:0000501',

  levels: {
    1: {
      level: 1,
      summary: 'Glaucoma is a disease that damages the nerve in the back of your eye, slowly stealing your side vision without you noticing until it\'s too late.',
      explanation: `Glaucoma is often called "the sneak thief of sight" because it takes away your vision so slowly that many people don't notice until a lot of damage has been done.

**What Happens in Glaucoma:**
- There's a nerve in the back of your eye called the optic nerve
- This nerve carries pictures from your eye to your brain
- In glaucoma, this nerve gets damaged
- You lose your side (peripheral) vision first
- Central vision goes last

**Why Does It Happen?**
- Usually because of high pressure inside the eye
- The eye constantly makes fluid that normally drains out
- When drainage is blocked, pressure builds up
- High pressure damages the optic nerve
- But some people get glaucoma even with normal pressure!

**Two Main Types:**

**1. Open-Angle Glaucoma (Most Common)**
- Develops very slowly over years
- No pain or symptoms at first
- Like a slowly clogging drain

**2. Angle-Closure Glaucoma (Emergency!)**
- Happens suddenly
- Severe eye pain, headache, nausea
- Eye looks red
- Sees halos around lights
- Needs immediate treatment!

**Who Is At Risk?**
- People over 60
- African Americans (much higher risk)
- Family history of glaucoma
- Very nearsighted or farsighted
- Diabetics

**Treatment:**
- Eye drops to lower pressure
- Laser treatments
- Surgery if needed
- Cannot restore lost vision - only prevent more loss

**Important Message:**
Get regular eye exams! Early detection is the only way to catch glaucoma before it steals your sight.`,
      keyTerms: [
        { term: 'optic nerve', definition: 'The cable that carries visual information from your eye to your brain' },
        { term: 'eye pressure', definition: 'The pressure inside your eyeball from fluid' },
        { term: 'peripheral vision', definition: 'Your side vision - what you see out of the corners of your eyes' },
        { term: 'visual field', definition: 'Everything you can see when looking straight ahead, including side vision' },
      ],
      analogies: [
        'Glaucoma is like a slow leak in a tire - you don\'t notice until it\'s too flat to drive.',
        'The optic nerve is like a cable with millions of wires. Glaucoma slowly cuts these wires one by one.',
        'Angle-closure glaucoma is like a clogged drain suddenly getting completely blocked - an emergency!',
      ],
      examples: [
        'Someone with glaucoma might not notice a car coming from the side because they\'ve lost peripheral vision.',
        'A person with acute angle-closure might suddenly get a terrible headache, red eye, and see rainbows around lights.',
        'Many people discover they have glaucoma only during a routine eye exam - they had no symptoms.',
      ],
    },
    2: {
      level: 2,
      summary: 'Glaucoma is a progressive optic neuropathy characterized by retinal ganglion cell loss and characteristic visual field defects, primarily associated with elevated intraocular pressure but also occurring at normal pressures.',
      explanation: `Glaucoma is the leading cause of irreversible blindness worldwide, affecting over 70 million people.

**Understanding Eye Pressure:**
- Aqueous humor is produced by the ciliary body
- Flows from posterior chamber → pupil → anterior chamber
- Drains through the trabecular meshwork → Schlemm's canal
- Normal intraocular pressure (IOP): 10-21 mmHg
- Elevated IOP is a major risk factor, not the definition

**Types of Glaucoma:**

**1. Primary Open-Angle Glaucoma (POAG)**
- Most common form (90% of cases)
- Trabecular meshwork resistance increased
- Slow, progressive damage
- Usually bilateral (may be asymmetric)
- No symptoms until advanced
- Characteristic optic nerve and field changes

**2. Normal-Tension Glaucoma (NTG)**
- POAG with IOP consistently <21 mmHg
- Same optic nerve damage pattern
- More common in Japanese populations
- May have vascular component

**3. Primary Angle-Closure Glaucoma**
- Iris blocks aqueous drainage
- **Acute angle closure** (emergency):
  - Sudden IOP spike (50-80 mmHg)
  - Severe pain, nausea, vomiting
  - Cloudy cornea, fixed mid-dilated pupil
  - Halos around lights
- **Chronic angle closure**: Gradual, like POAG

**4. Secondary Glaucomas**
- Pseudoexfoliation syndrome
- Pigment dispersion syndrome
- Steroid-induced
- Neovascular (diabetes, vein occlusions)
- Traumatic
- Inflammatory (uveitic)

**Risk Factors:**
- Age >40 (risk increases with age)
- Family history (4-9x increased risk)
- African descent (POAG)
- Asian descent (angle closure)
- High myopia (POAG)
- Hyperopia (angle closure)
- Diabetes
- Thin central cornea

**Diagnosis:**
1. Tonometry (IOP measurement)
2. Gonioscopy (view drainage angle)
3. Optic nerve examination (cup-to-disc ratio)
4. Visual field testing (perimetry)
5. OCT (nerve fiber layer thickness)

**Treatment Goals:**
- Lower IOP to prevent further damage
- Cannot restore lost vision

**Treatment Options:**
1. **Eye drops**: Prostaglandins, beta-blockers, alpha-agonists, carbonic anhydrase inhibitors
2. **Laser**: SLT (selective laser trabeculoplasty), LPI (iridotomy for angle closure)
3. **Surgery**: Trabeculectomy, tube shunts, MIGS procedures`,
      keyTerms: [
        { term: 'aqueous humor', definition: 'Clear fluid produced in the eye that maintains intraocular pressure' },
        { term: 'trabecular meshwork', definition: 'Spongy tissue at the drainage angle through which aqueous humor exits the eye' },
        { term: 'cup-to-disc ratio', definition: 'Ratio of optic cup size to optic disc size; increased in glaucoma' },
        { term: 'gonioscopy', definition: 'Examination using a special lens to view the drainage angle', pronunciation: 'goh-nee-OS-koh-pee' },
        { term: 'visual field', definition: 'Test measuring peripheral and central vision, detecting blind spots' },
      ],
      analogies: [
        'The trabecular meshwork is like a drain filter. In glaucoma, this filter gets clogged, backing up fluid and raising pressure.',
        'The optic nerve cup getting larger is like a balloon being pressed - the center gets pushed in.',
        'Visual field loss in glaucoma is like losing pixels on a screen - individual spots disappear gradually.',
      ],
    },
    3: {
      level: 3,
      summary: 'Glaucoma encompasses a group of optic neuropathies characterized by progressive retinal ganglion cell death, optic disc cupping, and corresponding visual field loss, with IOP reduction being the only proven treatment modality.',
      explanation: `## Pathophysiology

**Mechanical Theory:**
- Elevated IOP causes direct compression of optic nerve axons
- Lamina cribrosa deformation
- Axonal transport disruption
- Retrograde degeneration of retinal ganglion cells (RGCs)

**Vascular Theory:**
- Impaired optic nerve head blood flow
- Reduced ocular perfusion pressure (OPP = MAP - IOP)
- Nocturnal hypotension exacerbates damage
- Explains NTG and IOP-independent factors

**Current Understanding:**
- Both mechanisms likely contribute
- RGC apoptosis is final common pathway
- Glial cell activation and inflammation
- Mitochondrial dysfunction
- Excitotoxicity (glutamate)

## Aqueous Humor Dynamics

**Production:**
- Ciliary body (active secretion, ultrafiltration)
- Rate: 2-3 microliters/minute
- Decreases with age and at night

**Outflow Pathways:**
1. **Conventional (trabecular)**: 90%
   - Trabecular meshwork → Schlemm's canal → Episcleral veins
   - Resistance primarily in juxtacanalicular tissue
2. **Unconventional (uveoscleral)**: 10%
   - Ciliary body face → Suprachoroidal space
   - Prostaglandins increase this pathway

**IOP = (Rate of production) / (Outflow facility) + Episcleral venous pressure**

## Optic Nerve Changes

**Glaucomatous Optic Neuropathy:**
- Vertical elongation of cup
- Notching (superior/inferior)
- Disc hemorrhages (Drance hemorrhages)
- RNFL defects (wedge-shaped)
- Peripapillary atrophy
- Vessel bayoneting

**Cup-to-Disc Ratio:**
- Normal: <0.5 (varies with disc size)
- Asymmetry >0.2 between eyes suspicious
- Rate of change more important than absolute value

## Visual Field Testing

**Patterns of Loss:**
- Nasal step
- Arcuate scotoma (Bjerrum)
- Paracentral defects
- Temporal wedge
- Progression to tunnel vision

**Perimetry:**
- Standard automated perimetry (SAP): Humphrey 24-2, 10-2
- Mean deviation (MD): Overall sensitivity loss
- Pattern standard deviation (PSD): Localized loss
- Visual field index (VFI): Staging progression

**Structure-Function Relationship:**
- 25-40% RGCs lost before detectable field loss
- OCT detects damage earlier than perimetry

## Gonioscopy Classification

**Shaffer Grading:**
- Grade 4: Wide open (35-45 degrees)
- Grade 3: Open (25-35 degrees)
- Grade 2: Moderately narrow (20 degrees)
- Grade 1: Very narrow (10 degrees)
- Grade 0: Closed

**Structures Visible (posterior to anterior):**
- Ciliary body band
- Scleral spur
- Trabecular meshwork (pigmented/non-pigmented)
- Schwalbe's line

## Medical Treatment

**First-Line: Prostaglandin Analogs**
- Latanoprost, travoprost, bimatoprost, tafluprost
- Mechanism: Increase uveoscleral outflow
- IOP reduction: 25-35%
- Once daily dosing
- Side effects: Iris darkening, lash growth, periorbital changes

**Beta-Blockers**
- Timolol, betaxolol, levobunolol
- Mechanism: Decrease aqueous production
- IOP reduction: 20-25%
- Contraindications: Asthma, COPD, bradycardia

**Alpha-2 Agonists**
- Brimonidine, apraclonidine
- Decrease production, increase uveoscleral outflow
- IOP reduction: 20-25%
- Side effects: Allergy (brimonidine), tachyphylaxis

**Carbonic Anhydrase Inhibitors**
- Topical: Dorzolamide, brinzolamide
- Oral: Acetazolamide, methazolamide
- Mechanism: Decrease aqueous production
- IOP reduction: 15-20%

**Rho-Kinase Inhibitors (ROCK)**
- Netarsudil
- Increase trabecular outflow
- May lower episcleral venous pressure

## Surgical Options

**Laser:**
- SLT: Selective laser trabeculoplasty
- ALT: Argon laser trabeculoplasty
- LPI: Laser peripheral iridotomy (angle closure)

**Incisional:**
- Trabeculectomy: Gold standard, creates fistula
- Tube shunts: Ahmed, Baerveldt
- MIGS: iStent, Hydrus, XEN gel stent`,
      keyTerms: [
        { term: 'lamina cribrosa', definition: 'Sieve-like structure through which optic nerve fibers pass; site of damage in glaucoma', pronunciation: 'LAM-in-ah cry-BROH-sah' },
        { term: 'retinal ganglion cells', definition: 'Neurons whose axons form the optic nerve; die in glaucoma' },
        { term: 'ocular perfusion pressure', definition: 'Blood pressure driving flow to the optic nerve (MAP minus IOP)' },
        { term: 'arcuate scotoma', definition: 'Arc-shaped visual field defect following retinal nerve fiber layer anatomy' },
        { term: 'MIGS', definition: 'Minimally invasive glaucoma surgery; lower risk than traditional filtering surgery' },
      ],
      clinicalNotes: 'Disc hemorrhage is a sign of progression - intensify treatment. IOP reduction of 25-30% is typical target. Structure (OCT) changes may precede function (visual field) changes. Normal-tension glaucoma may need lower target IOPs (30-40% reduction).',
    },
    4: {
      level: 4,
      summary: 'Glaucoma pathogenesis involves complex interactions between biomechanical stress at the lamina cribrosa, vascular dysregulation, and mitochondrial dysfunction in retinal ganglion cells, with emerging neuroprotective strategies complementing IOP-lowering approaches.',
      explanation: `## Advanced Pathophysiology

**Lamina Cribrosa Biomechanics:**
- Connective tissue plates supporting RGC axons
- IOP creates stress/strain on LC
- Regional variation in susceptibility
- Remodeling with glaucoma progression
- Scleral stiffness influences LC deformation

**Retinal Ganglion Cell Death:**
- Axonal transport disruption (anterograde and retrograde)
- Neurotrophic factor deprivation (BDNF)
- Mitochondrial dysfunction
- Apoptosis via intrinsic pathway
- Possible transynaptic degeneration
- Secondary involvement of bipolar, amacrine cells

**Glial Cell Involvement:**
- Astrocyte reactivity in optic nerve head
- Extracellular matrix remodeling
- MMP activation
- Muller cell dysfunction
- Microglial activation (neuroinflammation)

**Vascular Factors:**
- Systemic hypotension (especially nocturnal)
- Blood pressure dipping pattern
- Vasospasm (migraines, Raynaud's)
- Reduced vascular autoregulation
- Endothelin-1 elevation
- OCT-angiography shows vessel density loss

## Advanced Diagnostics

**OCT Parameters:**
- RNFL thickness (peripapillary)
- Ganglion cell complex (GCC)
- Macular ganglion cell layer (mGCL)
- Bruch's membrane opening (BMO-MRW)

**Progression Analysis:**
- Guided progression analysis (GPA)
- Event-based vs trend-based analysis
- RNFL change exceeding test-retest variability
- Rate of VFI decline (>1%/year concerning)

**OCT-Angiography:**
- Peripapillary and macular vessel density
- May correlate with progression
- Reduced perfusion in damaged areas

**Corneal Biomechanics:**
- Central corneal thickness affects Goldmann tonometry
- Thinner corneas underestimate IOP
- Corneal hysteresis: Damping capacity
- Low hysteresis: Risk factor for progression

## Target IOP Setting

**Evidence-Based Guidelines:**
- OHTS: Treatment reduces conversion risk
- CNTGS: 30% IOP reduction slows NTG
- AGIS: Low IOP (<18 mmHg) best outcomes
- EMGT: Each 1 mmHg reduction = 10% risk reduction

**Target IOP Factors:**
- Baseline IOP
- Stage of disease
- Rate of progression
- Life expectancy
- Risk factors (family history, CCT, age)

**Typical Targets:**
- Mild: 25% reduction
- Moderate: 30-40% reduction
- Severe/progressive: 40-50% reduction or low teens

## Surgical Management Details

**Trabeculectomy:**
- Creates fistula to subconjunctival space
- Antimetabolites (MMC, 5-FU) reduce scarring
- Complications: Hypotony, bleb leak, infection
- Bleb needling for encapsulation

**Tube Shunts:**
- Ahmed (valved), Baerveldt (non-valved)
- Reserved for failed trabs, neovascular, uveitic
- Complications: Tube erosion, corneal decompensation
- TVT study: Similar outcomes, different complications

**MIGS Procedures:**

*Trabecular:*
- iStent: Titanium stent into Schlemm's canal
- Hydrus: Scaffold device in canal
- Trabectome: Ab interno trabeculectomy
- Kahook dual blade: Goniotomy
- Gonioscopy-assisted transluminal trabeculotomy (GATT)

*Suprachoroidal:*
- CyPass (withdrawn due to endothelial loss)
- iStent Supra

*Subconjunctival:*
- XEN gel stent: Subconjunctival drainage
- Preserflo MicroShunt

**MIGS Candidacy:**
- Mild-moderate glaucoma
- Combined with cataract surgery
- Lower IOP reduction than trabeculectomy
- Better safety profile

## Angle-Closure Management

**Acute Angle-Closure Crisis:**
1. IOP lowering: Beta-blocker, alpha-agonist, pilocarpine (after IOP <40), acetazolamide IV/PO
2. Corneal indentation (lower IOP, break attack)
3. Laser peripheral iridotomy (definitive)
4. Prophylactic LPI to fellow eye

**Chronic Angle Closure:**
- Peripheral anterior synechiae (PAS)
- May need filtering surgery if LPI insufficient
- Lens extraction may deepen angle

**Plateau Iris:**
- Angle closure despite patent iridotomy
- Anteriorly positioned ciliary processes
- Diagnose with UBM
- Iridoplasty may help`,
      keyTerms: [
        { term: 'Bruch membrane opening', definition: 'Reference point for measuring neuroretinal rim width on OCT' },
        { term: 'corneal hysteresis', definition: 'Corneal damping capacity; low hysteresis associated with glaucoma progression' },
        { term: 'guided progression analysis', definition: 'Statistical method to detect significant change in OCT parameters over time' },
        { term: 'antimetabolites', definition: 'Drugs (MMC, 5-FU) used to reduce scarring in glaucoma filtering surgery' },
        { term: 'plateau iris', definition: 'Anatomic configuration where ciliary processes push iris forward despite patent iridotomy' },
      ],
      clinicalNotes: 'Target IOP should be individualized based on severity and risk factors. MIGS has lower efficacy but better safety than traditional surgery. Disc hemorrhages predict progression - don\'t ignore them. OCT changes may precede visual field changes by 2-5 years.',
    },
    5: {
      level: 5,
      summary: 'Contemporary glaucoma management integrates advanced imaging biomarkers, genetic risk profiling, emerging neuroprotective agents, and precision surgical interventions, while research continues into sustained drug delivery, gene therapy, and RGC regeneration strategies.',
      explanation: `## Molecular and Genetic Aspects

**Genetic Associations:**
- MYOC (myocilin): 3-5% of POAG, trabecular meshwork
- OPTN (optineurin): Normal tension glaucoma
- WDR36, CYP1B1 (developmental glaucoma)
- CDKN2B-AS1: Largest GWAS signal
- SIX6: Optic nerve development
- TMCO1, CAV1/2: IOP regulation

**Polygenic Risk Scores:**
- Combining multiple variants
- Predictive of disease development
- May guide screening strategies
- Not yet clinically implemented

**Gene Therapy Research:**
- BDNF overexpression (neuroprotection)
- MYOC knockdown (for MYOC mutations)
- Trabecular meshwork targeting
- AAV vector delivery

## Neuroprotection Research

**Failed Trials:**
- Memantine (NMDA antagonist): No benefit
- Brimonidine: Equivocal (LoGTS)

**Ongoing/Emerging:**
- Citicoline (membrane phospholipid)
- Nicotinamide (NAD+ precursor)
- Rho-kinase inhibitors (beyond IOP lowering)
- Mitochondrial targeting
- Anti-inflammatory approaches

**Stem Cell/Regeneration:**
- RGC transplantation (proof of concept)
- Optic nerve regeneration (early research)
- Pluripotent stem cell-derived RGCs
- Major challenges: Axon guidance, synaptic integration

## Sustained Drug Delivery

**Rationale:**
- Adherence is major problem (50% non-adherent)
- Topical drops: Side effects, inconvenience
- Sustained delivery improves efficacy

**Technologies:**

*Punctal Plugs:*
- Drug-eluting inserts
- Travoprost-loaded (Phase 3 trials)
- Months of delivery

*Intracameral Implants:*
- Bimatoprost SR (Durysta): FDA approved
- 4-6 months duration
- Repeat injection possible

*Contact Lenses:*
- Drug-loaded materials
- Research phase

*Suprachoroidal Delivery:*
- Microneedle injection
- Targets ciliary body

## Advanced Imaging

**Structure-Function Mapping:**
- Hood's structure-function map
- Correlate OCT sectors with VF points
- Improve detection of progression

**Deep Learning/AI:**
- Automated RNFL analysis
- Fundus photo analysis
- VF prediction from OCT
- Progression prediction models

**Adaptive Optics:**
- Visualize individual RGCs
- Research tool currently
- May detect damage before standard OCT

**OCTA in Glaucoma:**
- Capillary dropout correlates with damage
- May precede structural loss
- Macular and peripapillary vessel density
- Artifact challenges

## Surgical Frontiers

**Ab Interno Canaloplasty:**
- iTrack microcatheter
- Dilates Schlemm's canal
- Combined with trabecular procedures

**Laser Cyclophotocoagulation Evolution:**
- Micropulse (MicroPulse P3)
- Less destructive than continuous wave
- Can be repeated
- For moderate-advanced disease

**Subconjunctival MIGS:**
- XEN gel stent: 45-micron lumen
- Ab interno placement
- Bleb-forming like trabeculectomy
- MMC still often needed

**Preserflo (InnFocus) MicroShunt:**
- 8.5 mm SIBS material
- Ab externo approach
- Large lumen, low resistance
- May rival trabeculectomy efficacy

## Special Situations

**Pseudoexfoliation Glaucoma:**
- Higher IOPs, more fluctuation
- Faster progression
- Poorer response to medications
- Higher surgical complications
- Need aggressive management

**Pigmentary Glaucoma:**
- Young, myopic patients
- Krukenberg spindle, iris transillumination
- Exercise-induced IOP spikes
- May burn out with age
- LPI controversial (mixed results)

**Uveitic Glaucoma:**
- Multiple mechanisms: Steroid, angle closure, trabecular inflammation
- Control inflammation first
- Trabeculectomy riskier (bleb failure)
- Tubes often preferred

**Neovascular Glaucoma:**
- Ischemia-driven (diabetes, CRVO)
- Treat underlying cause (panretinal photocoagulation, anti-VEGF)
- Tubes often required
- Poor visual prognosis

## Monitoring Algorithms

**Risk Stratification:**
- Fast progressors (VFI decline >1%/year)
- Combined structure-function progression
- Predictive models (OHTS calculator)

**Follow-up Intervals:**
- Stable, low risk: Annual
- Moderate risk: 6 months
- High risk/unstable: 3-4 months

**Decision Points:**
- Document stability before reducing visits
- Intensify monitoring after treatment change
- Consider ceiling effects of OCT in advanced disease`,
      keyTerms: [
        { term: 'polygenic risk score', definition: 'Combined genetic variant score predicting disease risk; emerging for glaucoma screening' },
        { term: 'Durysta', definition: 'Intracameral bimatoprost sustained-release implant; first FDA-approved sustained delivery for glaucoma' },
        { term: 'adaptive optics', definition: 'Imaging technique correcting ocular aberrations to visualize individual retinal cells' },
        { term: 'SIBS', definition: 'Styrene-isobutylene-styrene; biocompatible polymer material used in Preserflo MicroShunt' },
        { term: 'ceiling effect', definition: 'Loss of sensitivity to detect further change when baseline measurement already severely abnormal' },
      ],
      clinicalNotes: `Key clinical pearls:
1. Genetics increasingly important - family screening valuable
2. Sustained drug delivery (Durysta) helps adherence issues
3. MIGS best combined with cataract surgery in mild-moderate disease
4. OCT floor effect - VF becomes primary in advanced disease
5. Fast progressors (>1% VFI/year) need aggressive intervention
6. Pseudoexfoliation and neovascular glaucoma are high-risk subtypes
7. AI/deep learning tools augment but don't replace clinical judgment
8. Individualize target IOP based on risk profile and life expectancy`,
    },
  },

  media: [
    {
      id: 'glaucoma-optic-nerve',
      type: 'diagram',
      filename: 'glaucoma-optic-nerve.svg',
      title: 'Glaucomatous Optic Nerve Changes',
      description: 'Comparison of normal vs glaucomatous optic disc showing cupping and rim loss',
    },
    {
      id: 'visual-field-glaucoma',
      type: 'diagram',
      filename: 'visual-field-defects.svg',
      title: 'Visual Field Defects in Glaucoma',
      description: 'Progression of visual field loss from early to advanced glaucoma',
    },
    {
      id: 'drainage-angle-anatomy',
      type: 'diagram',
      filename: 'drainage-angle.svg',
      title: 'Drainage Angle Anatomy',
      description: 'Gonioscopic view of open vs closed drainage angle',
    },
  ],

  citations: [
    {
      id: 'aao-ppp-glaucoma',
      type: 'article',
      title: 'Primary Open-Angle Glaucoma Preferred Practice Pattern',
      source: 'American Academy of Ophthalmology',
      url: 'https://www.aao.org/preferred-practice-pattern/primary-open-angle-glaucoma-ppp',
    },
    {
      id: 'bcsc-glaucoma',
      type: 'textbook',
      title: 'Glaucoma',
      source: 'AAO Basic and Clinical Science Course',
      chapter: 'Section 10',
    },
    {
      id: 'shields-glaucoma',
      type: 'textbook',
      title: 'Shields Textbook of Glaucoma',
      authors: ['Allingham RR', 'Damji KF', 'Freedman SF'],
      source: 'Wolters Kluwer',
    },
  ],

  crossReferences: [
    { targetId: 'structure-eye-anatomy', targetType: 'structure', relationship: 'related', label: 'Eye Anatomy' },
    { targetId: 'condition-cataracts', targetType: 'condition', relationship: 'related', label: 'Cataracts' },
    { targetId: 'condition-diabetic-retinopathy', targetType: 'condition', relationship: 'related', label: 'Diabetic Retinopathy' },
    { targetId: 'process-eye-examination', targetType: 'topic', relationship: 'related', label: 'Eye Examination' },
  ],

  tags: {
    systems: ['visual', 'nervous'],
    topics: ['ophthalmology', 'neurology', 'surgery'],
    keywords: ['glaucoma', 'IOP', 'optic neuropathy', 'visual field', 'trabeculectomy', 'MIGS'],
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

export default glaucoma;
