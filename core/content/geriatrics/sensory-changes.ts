/**
 * Sensory Changes with Aging - Educational Content
 *
 * Comprehensive coverage of age-related vision, hearing, taste, smell,
 * and touch changes to help older adults adapt and know when to seek help.
 */

import { EducationalContent } from '../types';

export const sensoryChanges: EducationalContent = {
  id: 'geriatric-sensory-changes',
  type: 'concept',
  name: 'Sensory Changes with Aging',
  alternateNames: ['Vision and Hearing Changes', 'Age-Related Sensory Loss', 'Presbycusis and Presbyopia'],

  levels: {
    1: {
      level: 1,
      summary: 'Our senses of seeing, hearing, tasting, smelling, and touching all change as we get older. Most of these changes are normal, but some need a doctor.',
      explanation: `As we age, our senses change. Understanding these changes helps us stay safe and enjoy life.

**Vision Changes**

Normal changes:
- Needing more light to see clearly
- Trouble reading small print (need reading glasses)
- Taking longer to adjust when going from light to dark
- Colors may look less bright

See a doctor right away if you have:
- Sudden vision loss
- Flashing lights or many new floaters
- Pain in your eyes
- A curtain-like shadow over your vision

**Hearing Changes**

Normal changes:
- Harder to hear in noisy places
- High-pitched sounds are harder to hear
- May need to ask people to repeat things

See a doctor if:
- Sudden hearing loss
- Ringing in ears that bothers you
- Dizziness with hearing problems
- Hearing loss in only one ear

**Taste and Smell Changes**

Normal changes:
- Food may taste less flavorful
- Need more seasoning to taste food
- Smell is not as strong

This matters because:
- You might not smell smoke or gas leaks
- Food may not be as enjoyable
- You might add too much salt or sugar

**Touch Changes**

Normal changes:
- Less sensitive to light touch
- Harder to feel temperature changes
- May not feel small injuries

Stay safe by:
- Checking bath water temperature with a thermometer
- Looking at your feet daily for cuts or sores
- Using night lights to prevent falls

**Helpful Tips**

- Get regular eye and hearing checkups
- Use good lighting at home
- Get hearing aids if recommended
- Keep smoke detectors working
- Tell your doctor about any sudden changes`,
      keyTerms: [
        { term: 'floaters', definition: 'Small spots or shapes that float across your vision' },
        { term: 'hearing aid', definition: 'A small device worn in or behind the ear that makes sounds louder' },
        { term: 'senses', definition: 'How we experience the world - seeing, hearing, tasting, smelling, and touching' },
      ],
      analogies: [
        'Your eyes are like a camera - over time, they need more light to take a good picture, just like an older camera.',
        'Hearing loss is like trying to listen to music through a pillow - some sounds get muffled while others can still be heard.',
      ],
      examples: [
        'Needing brighter light to read the newspaper is normal. Suddenly not being able to see out of one eye is not normal.',
        'Having trouble hearing someone at a noisy party is common. Not hearing your doorbell anymore might mean you need hearing aids.',
      ],
    },
    2: {
      level: 2,
      summary: 'Age-related sensory changes affect vision, hearing, taste, smell, and touch through predictable physiological mechanisms, impacting safety, nutrition, and quality of life while requiring appropriate screening and intervention.',
      explanation: `## Vision Changes (Presbyopia and Beyond)

**Presbyopia** (age-related farsightedness)
- Lens becomes less flexible starting around age 40
- Difficulty focusing on close objects
- Treatment: Reading glasses, bifocals, progressive lenses

**Other Common Vision Changes**
- Reduced pupil size (less light enters eye)
- Yellowing of lens (affects color perception)
- Reduced tear production (dry eyes)
- Slower dark adaptation

**Conditions Requiring Attention**

| Condition | Symptoms | Action Needed |
|-----------|----------|---------------|
| Cataracts | Cloudy/blurry vision, glare | Routine referral |
| Glaucoma | Gradual vision loss, eye pressure | Regular screening |
| Macular degeneration | Central vision loss | Specialist evaluation |
| Retinal detachment | Flashes, floaters, shadow | Emergency |

## Hearing Changes (Presbycusis)

**Characteristics**
- Gradual high-frequency hearing loss
- Affects both ears equally
- Begins around age 50-60
- Difficulty understanding speech, especially with background noise

**Impact on Daily Life**
- Social isolation and withdrawal
- Depression and anxiety
- Safety concerns (alarms, traffic)
- Cognitive load from straining to hear

**Management Options**
- Hearing aids (many styles available)
- Assistive listening devices
- Communication strategies
- Cochlear implants for severe loss

## Taste and Smell (Chemosensory Changes)

**Smell (Olfaction)**
- Begins declining around age 60
- 50% reduced by age 80
- Affects flavor perception significantly

**Taste (Gustation)**
- Relatively preserved compared to smell
- Sweet and salty taste more affected
- Bitter taste relatively preserved

**Consequences**
- Reduced appetite and enjoyment of food
- Risk of malnutrition
- Safety hazards (gas, smoke, spoiled food)
- May over-season food (excess salt)

**Adaptations**
- Enhance food texture and temperature variety
- Use herbs and spices (not just salt)
- Ensure working smoke/gas detectors
- Check food expiration dates carefully

## Touch and Proprioception

**Changes**
- Reduced sensitivity to light touch
- Decreased vibration sense (especially feet)
- Impaired temperature discrimination
- Reduced proprioception (position sense)

**Safety Implications**
- Burn risk from hot water or surfaces
- Foot injuries may go unnoticed
- Increased fall risk
- Pressure ulcer risk

**Prevention Strategies**
- Set water heater to 120F or lower
- Daily foot inspections
- Use assistive devices as needed
- Regular skin checks`,
      keyTerms: [
        { term: 'presbyopia', definition: 'Age-related difficulty focusing on near objects due to lens stiffening', pronunciation: 'prez-bee-OH-pee-uh' },
        { term: 'presbycusis', definition: 'Age-related hearing loss, especially for high frequencies', pronunciation: 'prez-bih-KYOO-sis' },
        { term: 'proprioception', definition: 'The sense of body position and movement in space', pronunciation: 'pro-pree-oh-SEP-shun' },
        { term: 'macular degeneration', definition: 'Disease affecting the central part of the retina, causing central vision loss' },
      ],
    },
    3: {
      level: 3,
      summary: 'Age-related sensory decline involves specific anatomical and physiological changes in each sensory system, with screening recommendations and evidence-based interventions that improve function and reduce associated risks including falls, social isolation, and cognitive decline.',
      explanation: `## Ophthalmologic Changes

### Anatomical Changes
- **Cornea**: Arcus senilis, reduced endothelial cell density
- **Lens**: Increased density, yellowing, decreased elasticity
- **Vitreous**: Liquefaction, posterior vitreous detachment
- **Retina**: Drusen formation, reduced macular pigment
- **Optic nerve**: Axonal loss (~5,000/year after age 50)

### Presbyopia Mechanism
Progressive loss of lens accommodation due to:
- Lens hardening (nuclear sclerosis)
- Reduced ciliary muscle function
- Changed lens-capsule relationship

Amplitude of accommodation:
- Age 10: ~14 diopters
- Age 45: ~4 diopters
- Age 60: ~1 diopter

### Common Pathological Conditions

**Age-Related Macular Degeneration (AMD)**
- Dry AMD: Drusen, RPE changes (90% of cases)
- Wet AMD: Choroidal neovascularization (10%)
- Risk factors: Smoking, family history, light skin/eyes
- Screening: Amsler grid, fundoscopy
- Treatment: AREDS2 supplements, anti-VEGF for wet AMD

**Cataracts**
- Leading cause of reversible blindness
- Types: Nuclear, cortical, posterior subcapsular
- Surgery indicated when impacting function
- Excellent outcomes with IOL implantation

**Glaucoma**
- Open-angle most common (90%)
- Often asymptomatic until advanced
- Risk factors: Age, IOP, family history, race
- Screening: IOP, optic disc exam, visual fields
- Treatment: Drops, laser, surgery

### Screening Recommendations
- Annual comprehensive eye exam after age 65
- Dilated exam for diabetics annually
- AMD screening with Amsler grid

## Audiologic Changes

### Peripheral Presbycusis
**Types by Location**
1. Sensory: Hair cell loss (high frequency)
2. Neural: Spiral ganglion degeneration (speech discrimination)
3. Strial: Stria vascularis atrophy (flat audiogram)
4. Cochlear conductive: Basilar membrane stiffening

### Central Auditory Processing
Age-related changes in:
- Temporal processing
- Speech-in-noise understanding
- Auditory working memory
- Binaural processing

### Audiometric Patterns
- Bilateral, symmetric high-frequency loss
- Sloping configuration
- Speech discrimination worse than pure tone thresholds suggest

### Hearing Aid Considerations
**Types**
- Behind-the-ear (BTE)
- Receiver-in-canal (RIC)
- In-the-ear (ITE)
- Completely-in-canal (CIC)

**Features**
- Digital signal processing
- Directional microphones
- Noise reduction
- Bluetooth connectivity

**Barriers to Adoption**
- Cost (often not covered by insurance)
- Stigma and cosmetic concerns
- Difficulty with manipulation
- Unrealistic expectations

### Impact on Cognition
Evidence suggests hearing loss associated with:
- Accelerated cognitive decline
- Increased dementia risk (Lancet Commission 2020)
- Hearing aid use may modify risk (under study)

## Chemosensory Changes

### Olfactory Decline
**Mechanisms**
- Olfactory epithelium degeneration
- Reduced neurogenesis
- Decreased mucus production
- Central processing changes

**Assessment**
- UPSIT (University of Pennsylvania Smell Identification Test)
- Sniffin Sticks

**Clinical Significance**
- May herald neurodegenerative disease (Parkinson, Alzheimer)
- Safety implications
- Nutritional impact

### Gustatory Changes
- Taste bud density relatively preserved
- Papillae number decreases
- Threshold increases (need stronger stimuli)
- Medications often contribute

## Somatosensory Changes

### Cutaneous Sensation
- Meissner corpuscles decrease 10-30%
- Pacinian corpuscles decrease
- Reduced nerve fiber density
- Slowed conduction velocity

### Proprioception
- Joint mechanoreceptor decline
- Muscle spindle sensitivity reduced
- Vestibular contribution increases
- Contributes to fall risk`,
      keyTerms: [
        { term: 'drusen', definition: 'Yellow deposits beneath the retina, associated with macular degeneration' },
        { term: 'AREDS2', definition: 'Age-Related Eye Disease Study 2 supplement formula for AMD', pronunciation: 'AIR-eds-2' },
        { term: 'cochlea', definition: 'Spiral-shaped inner ear structure responsible for hearing' },
        { term: 'hair cells', definition: 'Specialized sensory cells in the inner ear that convert sound to nerve signals' },
        { term: 'Meissner corpuscles', definition: 'Touch receptors in skin sensitive to light touch' },
      ],
      clinicalNotes: 'Consider dual sensory impairment (vision + hearing) as a significant predictor of functional decline. Patients with both are at markedly higher risk for falls, depression, and dementia.',
    },
    4: {
      level: 4,
      summary: 'Comprehensive sensory assessment in older adults requires understanding pathophysiology, validated screening tools, differential diagnosis, and the bidirectional relationship between sensory loss and cognitive/functional decline, informing targeted interventions.',
      explanation: `## Advanced Visual Assessment

### Quantifying Visual Impairment

**Visual Acuity Standards**
- Legal blindness: Best corrected VA ≤20/200 or VF ≤20 degrees
- Low vision: VA 20/40 to 20/200
- Most age-related loss is in "low vision" range

**Functional Vision Assessment**
- Reading speed (MNREAD chart)
- Contrast sensitivity (Pelli-Robson, MARS)
- Visual field (Humphrey, Goldmann)
- Glare sensitivity

### Differential Diagnosis of Vision Loss

| Pattern | Possible Causes | Workup |
|---------|-----------------|--------|
| Gradual central | AMD, cataract | Dilated exam, OCT |
| Peripheral field loss | Glaucoma | IOP, gonioscopy, VF |
| Acute painless | CRAO, CRVO, vitreous hemorrhage | Urgent referral |
| Acute painful | Angle closure, keratitis | Emergency |
| Transient | TIA, giant cell arteritis | ESR, temporal artery |

### Surgical Considerations
**Cataract Surgery in Elderly**
- Age alone not a contraindication
- Consider functional benefit
- Reduced falls post-surgery
- Cognitive improvement possible

**Anti-VEGF Therapy for Wet AMD**
- Intravitreal injections monthly or treat-and-extend
- Significant benefit in preventing vision loss
- Burden of frequent visits
- Consider goals and life expectancy

## Advanced Audiologic Assessment

### Comprehensive Audiometry
- Pure tone audiometry (air and bone conduction)
- Speech recognition threshold (SRT)
- Word recognition score (WRS)
- Uncomfortable loudness level (UCL)

### Central Auditory Processing
**Tests**
- Dichotic listening
- Temporal processing (gap detection)
- Speech-in-noise (QuickSIN, HINT)
- Auditory brainstem response (ABR)

### Presbycusis vs Other Causes

| Feature | Presbycusis | Meniere's | Acoustic Neuroma |
|---------|-------------|-----------|------------------|
| Onset | Gradual | Episodic | Gradual |
| Symmetry | Bilateral | Unilateral | Unilateral |
| Associated | None | Vertigo, tinnitus, fullness | CN VII symptoms |
| Audiogram | High-freq sloping | Low-freq | Variable |

### Hearing Aid Optimization
**Candidacy Assessment**
- Hearing needs assessment
- Manual dexterity evaluation
- Cognitive screen (affects training)
- Motivation and expectations

**Outcome Measures**
- Abbreviated Profile of Hearing Aid Benefit (APHAB)
- Hearing Handicap Inventory (HHIE)
- Speech-in-noise improvement

### Cochlear Implantation in Elderly
- No upper age limit
- Candidacy: Severe-profound loss, limited hearing aid benefit
- Outcomes: Similar speech perception gains as younger adults
- Considerations: Cognitive status, anesthetic risk, rehabilitation commitment

## Chemosensory Assessment

### Standardized Testing
**Olfaction**
- UPSIT: 40-item scratch-and-sniff (gold standard)
- Sniffin Sticks: Threshold, discrimination, identification
- Brief Smell Identification Test (B-SIT): 12 items

**Gustation**
- Whole mouth testing (drops, strips)
- Regional testing (anterior, posterior)
- Electrogustometry

### Clinical Correlates of Olfactory Loss
- Parkinson disease (often precedes motor symptoms)
- Alzheimer disease (associated with progression)
- Post-viral olfactory loss
- Medication effects
- Sinonasal disease

### Nutritional Intervention
- Enhance flavor through texture, temperature
- Food presentation and social context
- Consider appetite stimulants if severe
- Nutritional supplementation

## Somatosensory Assessment

### Quantitative Sensory Testing
- Monofilament testing (10g for protective sensation)
- Vibration threshold (biothesiometer)
- Thermal thresholds
- Two-point discrimination

### Fall Risk Assessment Integration
Sensory contributions to falls:
- Visual impairment: RR 1.5-2.0
- Hearing impairment: RR 1.3-1.7
- Proprioceptive loss: Major contributor
- Vestibular dysfunction: Significant factor

**Multisensory Integration**
- Older adults more reliant on combined sensory input
- "Sensory reweighting" with impairment
- Rehabilitation can improve integration

## Dual Sensory Impairment

### Prevalence and Impact
- Affects 5-20% of older adults
- Synergistic effect on function
- Highest risk for disability, falls, depression, cognitive decline

### Assessment
- Combined screening at annual visits
- Hearing Handicap Inventory + vision screen
- Functional assessment of combined impact

### Intervention
- Treat each sensory loss optimally
- Environmental modifications
- Communication strategies
- Occupational therapy evaluation`,
      keyTerms: [
        { term: 'OCT', definition: 'Optical Coherence Tomography - imaging of retinal layers' },
        { term: 'dichotic listening', definition: 'Test presenting different sounds to each ear simultaneously' },
        { term: 'QuickSIN', definition: 'Quick Speech-in-Noise test measuring hearing in difficult listening conditions' },
        { term: 'monofilament', definition: 'Calibrated nylon fiber used to test protective sensation' },
        { term: 'sensory reweighting', definition: 'Brain process of adjusting reliance on different senses when one is impaired' },
      ],
      clinicalNotes: 'The Lancet Commission on Dementia (2020) identified hearing loss as the largest modifiable risk factor for dementia. Consider hearing aids as a potential cognitive intervention, though RCT evidence is still emerging (ACHIEVE trial ongoing).',
    },
    5: {
      level: 5,
      summary: 'Management of age-related sensory impairment requires integrating evidence from large cohort studies and RCTs, understanding biological mechanisms of sensory-cognitive links, implementing multidisciplinary care models, and addressing health equity in access to assessment and treatment.',
      explanation: `## Visual Impairment: Evidence-Based Management

### Epidemiology and Risk Factors
- Visual impairment prevalence doubles each decade after age 50
- Leading causes: Uncorrected refractive error, cataract, AMD, glaucoma, diabetic retinopathy
- Racial disparities: Higher rates in Black and Hispanic populations

### AMD Management Update

**Dry AMD**
- AREDS2 formula: Vitamin C, E, zinc, copper, lutein, zeaxanthin
- No beta-carotene (lung cancer risk in smokers)
- Benefit: 25% risk reduction for progression

**Wet AMD Anti-VEGF Agents**
- Bevacizumab (off-label, cost-effective)
- Ranibizumab (FDA approved)
- Aflibercept (FDA approved)
- Brolucizumab (longer duration)
- Faricimab (dual pathway)

**Treatment Regimens**
- Monthly injection (traditional)
- Treat-and-extend (preferred, fewer visits)
- PRN (reactive, may have worse outcomes)

### Low Vision Rehabilitation
**Services**
- Optical devices (magnifiers, telescopes)
- Non-optical aids (large print, talking devices)
- Eccentric viewing training (AMD)
- Environmental modifications

**Evidence**
- Systematic review: Low vision rehabilitation improves reading, daily activities, quality of life
- Medicare covers some services under Part B

## Hearing Loss: Current Evidence

### ACHIEVE Trial (2023)
Landmark RCT of hearing intervention for cognitive decline:
- Hearing intervention vs health education control
- Primary outcome: Cognitive change at 3 years
- Secondary: Dementia incidence

**Key Findings**
- Overall: No significant difference in primary outcome
- Pre-specified subgroup (ARIC cohort, higher risk): 48% reduction in cognitive decline
- Suggests benefit may be greatest in those at higher baseline risk

### Hearing Aid Effectiveness
**Cochrane Review**
- Moderate evidence for improved hearing-specific QOL
- Improved speech perception
- Less clear evidence for general QOL, depression

**Real-World Outcomes**
- Only 20-30% of those who could benefit use hearing aids
- Cost, stigma, access major barriers
- OTC hearing aids (FDA 2022) may improve access

### Cochlear Implants in Older Adults
**Evidence**
- Systematic reviews show benefit across all ages
- Complication rates similar to younger adults
- Rehabilitation may take longer
- Cost-effective over remaining lifespan

### Vestibular Rehabilitation
- Effective for peripheral vestibular dysfunction
- Customized balance exercises
- Reduces fall risk
- Often underutilized in older adults

## Chemosensory Loss: Clinical Implications

### Olfactory Loss as Biomarker
**Neurodegenerative Disease**
- Olfactory dysfunction precedes motor Parkinson by years
- Associated with MCI-to-dementia progression
- B-SIT screening may identify high-risk individuals

**Mortality Prediction**
- Olfactory impairment independently predicts 5-year mortality
- Stronger predictor than some traditional risk factors
- Mechanism unclear (frailty marker vs direct effect)

### Post-COVID Olfactory Dysfunction
- Common complication
- Most recover within months
- Olfactory training may accelerate recovery
- Persistent dysfunction affects significant minority

## Multisensory Interventions

### Dual Sensory Impairment Programs
**Components**
- Coordinated vision and hearing assessment
- Combined rehabilitation approach
- Communication strategies
- Environmental modifications

**Outcomes**
- Improved function
- Reduced depression
- Better quality of life
- Limited RCT evidence

### Technology Solutions
- Smartphone apps for magnification, text-to-speech
- Captioning and visual alerts
- Smart home devices
- Telehealth for rehabilitation

## Health Equity Considerations

### Disparities in Access
**Vision**
- Cataract surgery rates lower in minorities
- Geographic variation in ophthalmology access
- Cost barriers for AMD treatment

**Hearing**
- Hearing aids unaffordable for many
- Limited access in rural areas
- Language barriers in audiologic care

### Potential Solutions
- OTC hearing aids (cost reduction)
- Community-based screening programs
- Integration with primary care
- Teleaudiology expansion
- Policy advocacy for coverage

## Systems of Care

### Integrated Models
- Geriatric assessment includes sensory screening
- Automatic referrals based on screening results
- Hearing and vision incorporated in fall prevention
- Rehabilitation accessible and coordinated

### Quality Metrics
- Sensory screening rates
- Time to hearing aid fitting
- AMD treatment adherence
- Low vision rehabilitation referrals

### Shared Decision-Making Framework
- Goals and values assessment
- Life expectancy consideration
- Treatment burden vs benefit
- Financial impact
- Patient preferences for intervention intensity`,
      keyTerms: [
        { term: 'ACHIEVE trial', definition: 'Aging and Cognitive Health Evaluation in Elders - RCT of hearing intervention for cognition' },
        { term: 'AREDS2', definition: 'Age-Related Eye Disease Study 2 - defined supplement formula for AMD' },
        { term: 'treat-and-extend', definition: 'Anti-VEGF dosing strategy gradually increasing intervals between injections' },
        { term: 'OTC hearing aids', definition: 'Over-the-counter hearing aids available without prescription (FDA 2022)' },
        { term: 'olfactory training', definition: 'Structured smell rehabilitation using repeated exposure to odors' },
      ],
      clinicalNotes: `Clinical priorities for practice:
1. Universal sensory screening at annual wellness visit (hearing, vision minimum)
2. Treat refractive error - most common correctable cause of vision loss
3. Discuss OTC hearing aids as lower-cost entry point
4. Consider sensory rehabilitation referral - underutilized resource
5. Address dual sensory impairment comprehensively - synergistic impact
6. Integrate sensory assessment into fall prevention protocols
7. Follow AMD patients closely - anti-VEGF is highly effective if given`,
    },
  },

  media: [
    {
      id: 'sensory-changes-by-system',
      type: 'diagram',
      filename: 'sensory-changes-overview.svg',
      title: 'Age-Related Sensory Changes Overview',
      description: 'Visual summary of normal sensory changes vs warning signs',
    },
  ],

  citations: [
    {
      id: 'lancet-dementia-2020',
      type: 'article',
      title: 'Dementia prevention, intervention, and care: 2020 report of the Lancet Commission',
      authors: ['Livingston, G.', 'Huntley, J.', 'Sommerlad, A.', 'et al.'],
      source: 'Lancet',
      url: 'https://doi.org/10.1016/S0140-6736(20)30367-6',
    },
    {
      id: 'achieve-2023',
      type: 'article',
      title: 'Hearing Intervention versus Health Education Control to Reduce Cognitive Decline in Older Adults',
      authors: ['Lin, F.R.', 'Pike, J.R.', 'Albert, M.S.', 'et al.'],
      source: 'Lancet',
      url: 'https://doi.org/10.1016/S0140-6736(23)01406-X',
    },
  ],

  crossReferences: [
    { targetId: 'geriatric-falls-prevention', targetType: 'concept', relationship: 'related', label: 'Falls Prevention' },
    { targetId: 'geriatric-dementia-types', targetType: 'concept', relationship: 'related', label: 'Dementia Types' },
    { targetId: 'geriatric-home-safety', targetType: 'concept', relationship: 'related', label: 'Home Safety Assessment' },
  ],

  tags: {
    systems: ['sensory', 'geriatrics', 'ophthalmology', 'audiology'],
    topics: ['vision loss', 'hearing loss', 'presbyopia', 'presbycusis', 'sensory impairment'],
    clinicalRelevance: 'high',
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default sensoryChanges;
