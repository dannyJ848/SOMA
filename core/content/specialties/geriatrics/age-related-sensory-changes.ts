/**
 * Age-Related Sensory Changes - Comprehensive Educational Content
 *
 * Covers vision, hearing, taste, smell, and touch changes with aging,
 * including assessment, management, and impact on quality of life.
 */

import { EducationalContent } from '../../types';

export const ageRelatedSensoryChanges: EducationalContent = {
  id: 'concept-age-related-sensory-changes',
  type: 'concept',
  name: 'Age-Related Sensory Changes',
  alternateNames: ['Sensory Aging', 'Presbycusis and Presbyopia', 'Sensory Impairment in Elderly'],

  levels: {
    1: {
      level: 1,
      summary: 'As people get older, their senses of vision, hearing, taste, smell, and touch naturally change, but many of these changes can be managed.',
      explanation: `Our five senses - sight, hearing, taste, smell, and touch - help us experience the world around us. As we age, all of these senses change somewhat. Understanding these changes can help older adults and their families adapt and stay safe.

**Vision Changes**

**What Happens:**
- Harder to see things up close (need reading glasses)
- Need more light to see clearly
- More sensitive to glare
- Harder to tell some colors apart
- Takes longer to adjust from dark to light

**Common Eye Conditions:**
- **Cataracts**: The lens becomes cloudy, like looking through a foggy window
- **Glaucoma**: Pressure in the eye damages vision, starting at the edges
- **Macular degeneration**: The center of vision becomes blurry

**What Helps:**
- Regular eye exams (every 1-2 years)
- Brighter lights in the home
- Large-print books and phones
- Sunglasses outside
- Treating cataracts with surgery when needed

**Hearing Changes**

**What Happens:**
- Harder to hear high-pitched sounds
- Harder to hear conversations in noisy places
- Need the TV or radio louder
- May have ringing in the ears (tinnitus)

**Signs Someone May Have Hearing Loss:**
- Asking people to repeat themselves often
- Saying "what?" frequently
- Turning up the TV very loud
- Withdrawing from conversations

**What Helps:**
- Hearing tests
- Hearing aids (work very well for most people)
- Face the person you are talking to
- Reduce background noise
- Speak clearly, not necessarily louder

**Taste and Smell Changes**

**What Happens:**
- Food may seem less flavorful
- Sweet and salty tastes often decrease first
- Harder to smell things, including spoiled food or gas leaks

**Why This Matters:**
- People may add too much salt or sugar to food
- May not eat enough because food is less enjoyable
- Safety concern - may not smell smoke or gas

**What Helps:**
- Use herbs and spices instead of more salt
- Make food colorful and appealing
- Have working smoke and gas detectors
- Check expiration dates on food

**Touch and Balance Changes**

**What Happens:**
- Hands and feet may be less sensitive
- Harder to feel temperature differences (risk of burns)
- May not feel small injuries
- Balance becomes less steady

**What Helps:**
- Check bath water temperature with a thermometer
- Inspect feet daily, especially if diabetic
- Wear proper footwear
- Use handrails and be careful on stairs

**Why Sensory Changes Matter**

These changes can affect:
- **Safety**: Not hearing alarms, not seeing steps, not feeling burns
- **Social life**: Difficulty with conversations, embarrassment about hearing loss
- **Nutrition**: Not enjoying food, eating less
- **Independence**: Difficulty driving, reading, using phones

**Encouraging Adaptation**

- Regular check-ups for eyes and ears
- Use assistive devices (glasses, hearing aids) - they really help!
- Modify the home for safety
- Stay socially connected
- Ask for help when needed`,
      keyTerms: [
        { term: 'cataracts', definition: 'Clouding of the lens in the eye that causes blurry vision', pronunciation: 'KAT-uh-rakts' },
        { term: 'glaucoma', definition: 'An eye condition where pressure damages the nerve, causing vision loss', pronunciation: 'glaw-KOH-muh' },
        { term: 'macular degeneration', definition: 'When the center part of the retina breaks down, causing central vision loss', pronunciation: 'MAK-yoo-lar' },
        { term: 'hearing aid', definition: 'A small electronic device worn in or behind the ear that makes sounds louder' },
        { term: 'tinnitus', definition: 'Ringing, buzzing, or other sounds in the ear when there is no external sound', pronunciation: 'tin-EYE-tus' },
      ],
      analogies: [
        'Cataracts are like looking through a dirty windshield - cleaning (surgery) makes everything clear again.',
        'The aging eye needs more light, like an older camera that needs better lighting to take good pictures.',
        'Hearing loss at high frequencies is like losing the treble on a stereo - voices sound muffled.',
        'Taste buds are like grass on a lawn - over time some die and are not replaced.',
      ],
      examples: [
        'A grandfather who got hearing aids and can now enjoy family conversations again.',
        'A grandmother who had cataract surgery and said it was like seeing in color again after years of fog.',
        'An older man who uses a magnifying glass with a light to read his mail.',
        'A family that installed brighter lights throughout their mother\'s home to help her see better.',
      ],
    },
    2: {
      level: 2,
      summary: 'Age-related sensory changes involve progressive decline in vision (presbyopia, cataracts), hearing (presbycusis), and chemosensory function, significantly impacting quality of life, safety, and social engagement.',
      explanation: `## Vision Changes with Aging

### Normal Age-Related Changes

**Presbyopia:**
- Loss of lens flexibility
- Difficulty focusing on near objects
- Begins around age 40-45
- Requires reading glasses or bifocals

**Pupil Changes:**
- Smaller pupil size (senile miosis)
- Slower pupil response
- Need more light (60-year-old needs 3x more light than 20-year-old)
- Difficulty adapting to darkness

**Other Changes:**
| Change | Impact |
|--------|--------|
| Lens yellowing | Color perception altered (blue-yellow) |
| Vitreous changes | Floaters more common |
| Tear production | Dry eyes |
| Depth perception | Judging distances harder |

### Common Eye Diseases

**Cataracts:**
- Lens opacification
- Prevalence: 50% by age 75
- Symptoms: Blurry vision, glare, dim colors
- Treatment: Surgical lens replacement (highly effective)

**Age-Related Macular Degeneration (AMD):**
- Central vision loss
- Leading cause of vision loss >65
- Two types:
  - Dry (90%): Gradual, drusen deposits
  - Wet (10%): Rapid, abnormal blood vessels
- Treatment: Dry - antioxidant vitamins (AREDS2), Wet - anti-VEGF injections

**Glaucoma:**
- Optic nerve damage, often with elevated eye pressure
- Peripheral vision loss first ("tunnel vision")
- Usually asymptomatic until advanced
- Treatment: Eye drops, laser, surgery

**Diabetic Retinopathy:**
- Microvascular damage from diabetes
- Leading cause of blindness in working-age adults
- Regular screening essential for diabetics

### Vision Screening

**Recommended:**
- Comprehensive eye exam every 1-2 years after age 65
- Earlier/more frequent with diabetes, glaucoma history, symptoms
- Includes visual acuity, pressure, dilated exam

## Hearing Changes with Aging

### Presbycusis

**Definition:**
Age-related hearing loss; affects 30-40% of adults over 65, 50% over 85.

**Characteristics:**
- Bilateral, symmetric
- High frequencies affected first
- Difficulty understanding speech (consonants are high-pitched)
- Difficulty in background noise

**Types:**
| Type | Affected Structure | Pattern |
|------|-------------------|---------|
| Sensory | Hair cells (cochlea) | High-frequency loss |
| Neural | Spiral ganglion neurons | Speech discrimination poor |
| Strial (metabolic) | Stria vascularis | Flat audiogram |
| Cochlear conductive | Basilar membrane stiffening | High-frequency loss |

### Impact of Hearing Loss

**Communication:**
- Difficulty following conversations
- Social withdrawal
- Depression

**Cognitive:**
- Associated with cognitive decline (possibly causally)
- Increased dementia risk (2-5x depending on severity)
- Cognitive load from straining to hear

**Safety:**
- May not hear alarms, warnings
- Traffic awareness reduced

### Hearing Assessment

**Screening:**
- Whispered voice test (simple but less sensitive)
- Audioscope (handheld device)
- Questionnaires (Hearing Handicap Inventory)

**Full Evaluation:**
- Pure tone audiometry (air and bone conduction)
- Speech audiometry (word recognition)
- Tympanometry (middle ear function)

### Hearing Intervention

**Hearing Aids:**
- Amplify sound
- Modern digital aids: Programmable, directional microphones
- Effectiveness: Significant improvement in quality of life
- Barriers: Cost, stigma, adjustment period

**Cochlear Implants:**
- For severe-profound loss not helped by aids
- Surgically implanted
- Increasingly used in older adults with good outcomes

**Communication Strategies:**
- Face the speaker
- Reduce background noise
- Speak clearly, slightly slower (not shouting)
- Rephrase rather than repeat

## Taste and Smell Changes

### Taste (Gustation)

**Age-Related Changes:**
- Taste bud number decreases (especially after 60)
- Threshold for detection increases
- Sweet and salty affected more than bitter and sour
- Medications often impair taste

**Contributing Factors:**
- Reduced saliva production (dry mouth)
- Medications (many cause dysgeusia)
- Zinc deficiency
- Dental problems

### Smell (Olfaction)

**Age-Related Changes:**
- Significant decline begins around age 60
- 50% of adults 65-80 have some impairment
- 75% of adults >80 have impairment

**Causes:**
- Loss of olfactory neurons
- Reduced mucus production
- Changes in olfactory bulb
- Cumulative environmental damage

**Impact:**
| Effect | Consequence |
|--------|-------------|
| Food enjoyment | Reduced appetite, weight loss |
| Food safety | Can't detect spoiled food |
| Gas detection | Safety hazard |
| Smoke detection | Safety hazard |
| Quality of life | Reduced pleasure |

### Assessment and Management

**Assessment:**
- University of Pennsylvania Smell Identification Test (UPSIT)
- Taste testing (threshold and identification)

**Management:**
- Emphasize food texture and temperature
- Use herbs, spices (not just salt/sugar)
- Ensure food safety (dates, proper storage)
- Working smoke/gas detectors
- Consider nutritional consultation if weight loss

## Touch, Vibration, and Proprioception

### Changes

**Skin Receptors:**
- Decreased density of Meissner corpuscles
- Reduced tactile sensitivity
- Higher thresholds for detecting stimuli

**Proprioception:**
- Reduced joint position sense
- Contributes to balance problems
- Affects fine motor coordination

**Vibration Sense:**
- Declines, especially in lower extremities
- Often affected by comorbidities (diabetes, B12 deficiency)

### Clinical Implications

**Safety Concerns:**
- May not feel minor injuries
- Burns from hot water or heating pads
- Frostbite risk
- Foot ulcers (especially with diabetes)

**Recommendations:**
- Check bath water temperature (thermometer or elbow)
- Inspect feet daily
- Proper footwear
- Regular foot care, especially for diabetics`,
      keyTerms: [
        { term: 'presbyopia', definition: 'Age-related loss of ability to focus on near objects due to lens stiffening', pronunciation: 'prez-bee-OH-pee-ah' },
        { term: 'presbycusis', definition: 'Age-related hearing loss, typically affecting high frequencies first', pronunciation: 'prez-bee-KYOO-sis' },
        { term: 'AMD', definition: 'Age-related Macular Degeneration; progressive disease affecting central vision' },
        { term: 'senile miosis', definition: 'Age-related decrease in pupil size, reducing light entering the eye' },
        { term: 'dysgeusia', definition: 'Distortion of taste sensation, often medication-induced', pronunciation: 'dis-GOO-zee-ah' },
        { term: 'UPSIT', definition: 'University of Pennsylvania Smell Identification Test; standardized smell testing' },
      ],
      analogies: [
        'Presbyopia happens because the lens loses flexibility like a rubber band that has been stretched too many times.',
        'Hair cells in the cochlea are like grass - once damaged, they don\'t grow back.',
        'Age-related hearing loss is like listening to music with the treble turned down - high-pitched sounds are lost first.',
      ],
    },
    3: {
      level: 3,
      summary: 'Age-related sensory decline involves specific pathophysiological mechanisms in each sensory system, with standardized assessment tools and evidence-based interventions that can significantly improve function and quality of life.',
      explanation: `## Vision: Pathophysiology and Management

### Lens and Accommodation

**Presbyopia Mechanism:**
- Lens continues growing throughout life
- Progressive increase in lens stiffness
- Ciliary muscle contraction cannot change lens shape
- Loss of accommodation (near focusing ability)

**Lens Changes:**
| Change | Mechanism | Clinical Effect |
|--------|-----------|-----------------|
| Increased density | Protein aggregation | Presbyopia |
| Yellowing | Chromophore accumulation | Color shift |
| Opacification | Protein crystallization | Cataract |

### Cataract Pathophysiology

**Types:**
- Nuclear: Central lens, brown discoloration
- Cortical: Wedge-shaped opacities from periphery
- Posterior subcapsular: Posterior lens, rapid onset

**Risk Factors:**
- Age (primary)
- UV exposure
- Diabetes
- Corticosteroids
- Smoking
- Trauma

**Surgical Management:**
- Phacoemulsification (ultrasound to break up lens)
- Intraocular lens (IOL) implantation
- Options: Monofocal, multifocal, toric (astigmatism)
- Success rate: >95% improved vision

### Age-Related Macular Degeneration

**Pathophysiology:**
- Drusen: Lipid-protein deposits under retina
- RPE dysfunction and atrophy (dry AMD)
- Choroidal neovascularization (wet AMD)
- Complement system involvement (genetic variants)

**Staging:**
| Stage | Features | Vision |
|-------|----------|--------|
| Early | Small drusen, no symptoms | Normal |
| Intermediate | Medium drusen, pigment changes | Mild changes |
| Late dry | Geographic atrophy | Central vision loss |
| Late wet | Neovascularization, fluid | Rapid vision loss |

**Treatment:**
- Dry AMD:
  - AREDS2 supplements (vitamins C, E, zinc, copper, lutein, zeaxanthin)
  - Low vision rehabilitation
  - Pegcetacoplan (complement inhibitor) for geographic atrophy
- Wet AMD:
  - Anti-VEGF injections (ranibizumab, aflibercept, faricimab)
  - Monthly or treat-and-extend regimens
  - Photodynamic therapy (less common now)

### Glaucoma

**Types:**
| Type | Mechanism | Presentation |
|------|-----------|--------------|
| Primary open-angle | Trabecular meshwork dysfunction | Gradual, asymptomatic |
| Angle-closure | Iris blocks drainage | Acute or chronic |
| Normal-tension | Optic nerve vulnerability | Normal IOP |

**Treatment Ladder:**
1. Topical medications (prostaglandins, beta-blockers, alpha-agonists)
2. Laser trabeculoplasty (SLT)
3. Minimally invasive glaucoma surgery (MIGS)
4. Traditional surgery (trabeculectomy, tube shunt)

## Hearing: Pathophysiology and Intervention

### Cochlear Aging

**Hair Cell Loss:**
- Outer hair cells most vulnerable
- Begin at base of cochlea (high frequencies)
- Progress apically (lower frequencies)
- No regeneration in mammals

**Stria Vascularis:**
- Maintains endocochlear potential (battery of cochlea)
- Atrophies with age
- Affects all frequencies (flat audiogram)

**Neural:**
- Spiral ganglion neuron loss
- Affects speech discrimination disproportionately
- Central auditory processing changes

### Audiometric Patterns

**Classic Presbycusis:**
- Bilateral, symmetric
- High-frequency sloping loss
- Air-bone gap absent (sensorineural)
- Poor word recognition relative to pure tones

**Audiogram Configurations:**
| Pattern | Characteristics | Etiology |
|---------|-----------------|----------|
| High-frequency sloping | Loss > 2kHz | Sensory, noise |
| Flat | All frequencies | Strial |
| Steeply sloping | Severe high-frequency | Combined |

### Hearing Aid Technology

**Types:**
| Style | Features | Candidates |
|-------|----------|------------|
| Behind-the-ear (BTE) | Versatile, powerful | All levels |
| Receiver-in-canal (RIC) | Discreet, natural sound | Mild-severe |
| In-the-ear (ITE) | Custom molded | Moderate-severe |
| Completely-in-canal (CIC) | Nearly invisible | Mild-moderate |

**Advanced Features:**
- Digital signal processing
- Directional microphones
- Bluetooth connectivity
- Rechargeable batteries
- AI-driven scene classification
- Tinnitus masking programs

### Cochlear Implants in Elderly

**Indications:**
- Severe-profound bilateral hearing loss
- Limited benefit from hearing aids
- Adequate speech recognition (varies by criteria)

**Outcomes in Older Adults:**
- Significant hearing improvement
- Quality of life improvement
- Cognitive benefits (reduced isolation)
- Age alone not a contraindication
- Complication rates similar to younger adults

### Central Auditory Processing

**Age-Related Changes:**
- Temporal processing deficits
- Difficulty understanding speech in noise
- Reduced binaural processing
- May contribute to "hidden hearing loss"

**Implications:**
- Hearing aids may not fully compensate
- Central auditory processing testing available
- Auditory training programs may help

## Chemosensory Aging

### Olfactory Pathophysiology

**Peripheral Changes:**
- Olfactory epithelium atrophy
- Decreased olfactory receptor neurons
- Slower neuronal turnover
- Mucus changes affecting odor binding

**Central Changes:**
- Olfactory bulb volume decreases
- Mitral cell loss
- Altered connectivity

**Testing:**
| Test | Format | Measures |
|------|--------|----------|
| UPSIT | 40 scratch-and-sniff | Identification |
| Sniffin' Sticks | Pen-like odor dispensers | Threshold, discrimination, identification |
| B-SIT | 12-item brief version | Screening |

**Clinical Correlations:**
- Olfactory loss precedes Parkinson's by years
- Predicts cognitive decline and dementia
- Associated with mortality in some studies

### Gustatory Changes

**Mechanisms:**
- Taste bud turnover slows
- Papillae density decreases
- Saliva composition changes
- Medication effects common

**Medications Affecting Taste:**
| Drug Class | Effect |
|------------|--------|
| ACE inhibitors | Metallic taste, reduced salt |
| Metformin | Metallic taste |
| Antibiotics (macrolides, quinolones) | Dysgeusia |
| Chemotherapy | Profound dysgeusia |
| Antithyroid drugs | Loss of taste |

### Nutritional Impact

**Consequences:**
- Reduced food enjoyment
- Decreased appetite
- Malnutrition risk
- Compensatory behaviors (excess salt, sugar)

**Interventions:**
- Flavor enhancement (herbs, spices, MSG)
- Texture variety
- Temperature contrasts
- Presentation improvements
- Medication review
- Zinc supplementation (if deficient)
- Artificial saliva (if dry mouth)`,
      keyTerms: [
        { term: 'drusen', definition: 'Yellow deposits under the retina; hallmark of age-related macular degeneration', pronunciation: 'DROO-zen' },
        { term: 'anti-VEGF', definition: 'Vascular Endothelial Growth Factor inhibitors; injected treatments for wet AMD' },
        { term: 'SLT', definition: 'Selective Laser Trabeculoplasty; laser treatment to lower eye pressure in glaucoma' },
        { term: 'spiral ganglion', definition: 'Cell bodies of auditory nerve fibers in the cochlea' },
        { term: 'endocochlear potential', definition: 'Electrical potential in cochlea essential for hearing; maintained by stria vascularis' },
        { term: 'word recognition score', definition: 'Percentage of words correctly identified; may be disproportionately affected in neural presbycusis' },
      ],
      clinicalNotes: 'Anti-VEGF injections have revolutionized wet AMD treatment - early detection and treatment preserves vision. Hearing aid technology has improved dramatically - encourage trial even in reluctant patients. Olfactory testing may have value in predicting Parkinson\'s and dementia. Always review medications when patients report taste changes.',
    },
    4: {
      level: 4,
      summary: 'Advanced understanding of sensory aging integrates molecular mechanisms, emerging therapeutic approaches including gene therapy and regenerative medicine, and comprehensive management strategies addressing the cognitive and social impacts of sensory decline.',
      explanation: `## Vision: Advanced Concepts

### Retinal Aging Biology

**Oxidative Stress:**
- High metabolic demand of photoreceptors
- Lipid peroxidation
- Reduced antioxidant defenses
- Lipofuscin accumulation (A2E compound)

**Complement Dysregulation:**
- Genetic variants in CFH, C3, C2/CFB associated with AMD
- Drusen contain complement components
- Complement inhibitors in development

**Autophagy and Proteostasis:**
- Impaired clearance of damaged proteins
- RPE dysfunction
- Aggregate accumulation

### Emerging AMD Therapies

**Dry AMD:**
| Agent | Mechanism | Status |
|-------|-----------|--------|
| Pegcetacoplan | C3 inhibitor | FDA approved |
| Avacincaptad pegol | C5 inhibitor | Phase 3 |
| Zimura | C5 inhibitor | Phase 3 |
| Stem cell therapy | RPE replacement | Trials |
| Gene therapy | Express complement regulators | Early trials |

**Wet AMD:**
| Agent | Mechanism | Advantage |
|-------|-----------|-----------|
| Faricimab | Anti-VEGF + Ang-2 | Longer duration |
| Port Delivery System | Ranibizumab refillable implant | Every 6 months |
| Gene therapy (RGX-314) | Express anti-VEGF in eye | One-time treatment |
| Brolucizumab | Small molecule anti-VEGF | May be longer acting |

### Vision Rehabilitation

**Low Vision Services:**
- Magnification devices (optical, electronic)
- Lighting optimization
- Contrast enhancement
- Eccentric viewing training (for AMD)
- OrCam and similar AI-based devices

**Assistive Technology:**
- Screen readers
- Voice-activated devices
- Smart home integration
- Navigation apps for blind/low vision

## Hearing: Advanced Management

### Molecular Biology of Cochlear Aging

**Hair Cell Loss:**
- Terminal mitotic cells (no regeneration)
- Noise and age synergistic damage
- Genetic susceptibility (CDH23, GJB2, others)
- Oxidative damage to stereocilia

**Potential Regeneration Strategies:**
| Approach | Mechanism | Status |
|----------|-----------|--------|
| Atoh1 gene therapy | Transcription factor for hair cell | Trials |
| Notch inhibition | Release supporting cell inhibition | Trials |
| Lgr5+ cell stimulation | Expand progenitor population | Research |
| Stem cell transplantation | Replace lost cells | Research |

**Pharmacological Protection:**
- Antioxidants (variable results)
- Neurotrophins (protect spiral ganglion)
- Sound conditioning (moderate results)

### Hidden Hearing Loss

**Concept:**
- Normal audiogram but difficulty understanding speech
- Synaptopathy (loss of synapses between hair cells and neurons)
- Not detected by standard audiometry

**Evidence:**
- Noise exposure causes synapse loss before hair cell loss
- May explain "auditory processing disorder"
- Auditory brainstem response may detect

**Implications:**
- Audiogram underestimates hearing dysfunction
- May explain hearing aid dissatisfaction
- Research into diagnostic tests and treatments ongoing

### Hearing and Cognition

**Association:**
- Each 10 dB hearing loss = 1.27x increased dementia risk
- Linear relationship with cognition
- Largest potentially modifiable dementia risk factor (Lancet Commission)

**Mechanisms:**
| Hypothesis | Explanation |
|------------|-------------|
| Cognitive load | Effortful listening depletes resources |
| Social isolation | Reduced enrichment and engagement |
| Common cause | Shared vascular/degenerative pathology |
| Sensory deprivation | Reduced auditory input → brain atrophy |

**ACHIEVE Trial:**
- Randomized trial of hearing intervention for cognition
- Results: Slowed cognitive decline in high-risk subgroup
- Supports hearing treatment for brain health

### Advanced Hearing Technology

**Over-the-Counter Hearing Aids:**
- FDA regulation (2022) for mild-moderate loss
- Lower cost, self-fitting
- May improve access
- Quality varies

**Brain-Computer Interfaces:**
- Direct auditory cortex stimulation (research)
- For profound loss not helped by cochlear implant
- Very early stage

## Chemosensory Decline: Deeper Understanding

### Olfactory Dysfunction as Biomarker

**Parkinson's Disease:**
- Olfactory loss precedes motor symptoms by 5-10 years
- Present in 90% at diagnosis
- Olfactory testing in research for early detection

**Alzheimer's Disease:**
- Olfactory identification impaired early
- Correlates with cognitive decline
- Potential screening tool

**COVID-19:**
- Olfactory loss common
- Usually recovers but persistent in some
- May cause lasting anosmia in vulnerable elderly

### Olfactory Training

**Protocol:**
- Exposure to 4 odors, twice daily, for months
- Rose, lemon, eucalyptus, clove (standard set)
- 30-40% of patients show improvement

**Evidence:**
- Multiple RCTs show benefit
- Neuroplasticity underlies improvement
- MRI shows olfactory bulb volume increase
- Recommend for post-viral and age-related loss

### Taste Receptor Biology

**Taste Receptor Types:**
- T1R (sweet, umami)
- T2R (bitter - ~25 genes)
- ENaC (salt)
- PKD (sour)

**Age-Related Changes:**
- Receptor expression changes
- Signal transduction alterations
- Turnover rate decreases (normally 10-14 days)

**Emerging Therapies:**
- Taste receptor agonists/modulators
- Gene therapy approaches
- Stem cell regeneration
- All research stage

## Multi-Sensory Integration and Falls

### Sensory Contributions to Balance

**Visual:**
- Provides environmental orientation
- Especially important when proprioception impaired
- Visual field loss (glaucoma) increases fall risk

**Vestibular:**
- Head position and acceleration
- Age-related decline (hair cell loss)
- Vestibular rehabilitation effective

**Somatosensory:**
- Proprioception from joints, muscles
- Plantar sensation important
- Declines with neuropathy, age

### Multi-Sensory Decline

**Combined Impact:**
- Single sensory loss: Compensation by others
- Multi-sensory loss: Compensation fails
- Substantially increased fall risk with combined vision + hearing loss

**Assessment Approach:**
- Screen all senses in fall risk evaluation
- Visual acuity, field testing
- Hearing screening
- Monofilament/vibration testing feet
- Vestibular assessment if indicated

### Intervention Integration

**Multi-Sensory Rehabilitation:**
- Address multiple deficits together
- Optimize all correctable impairments (glasses, hearing aids)
- Balance training emphasizes sensory reweighting
- Environmental modifications for all senses`,
      keyTerms: [
        { term: 'synaptopathy', definition: 'Loss of synapses between hair cells and auditory neurons; underlying "hidden hearing loss"' },
        { term: 'ACHIEVE trial', definition: 'Randomized trial demonstrating hearing intervention slows cognitive decline in high-risk elderly' },
        { term: 'eccentric viewing', definition: 'Technique using peripheral retina for central tasks when macula is damaged' },
        { term: 'Atoh1', definition: 'Transcription factor required for hair cell development; target for hearing regeneration' },
        { term: 'olfactory training', definition: 'Repeated exposure to specific odors to improve olfactory function through neuroplasticity' },
        { term: 'Port Delivery System', definition: 'Refillable implant for sustained anti-VEGF delivery in wet AMD' },
      ],
      clinicalNotes: 'The ACHIEVE trial provides evidence that treating hearing loss may slow cognitive decline - a compelling reason to address hearing in all elderly patients. Olfactory training is simple, safe, and modestly effective - recommend for post-viral and age-related smell loss. Multi-sensory assessment should be standard in falls evaluation. OTC hearing aids may improve access but quality varies.',
    },
    5: {
      level: 5,
      summary: 'State-of-the-art sensory aging research encompasses regenerative medicine approaches, multi-omic biomarker development, precision medicine for sensory preservation, and systems-level interventions addressing the complex interplay between sensory decline, cognition, and overall health.',
      explanation: `## Regenerative Approaches to Sensory Restoration

### Hair Cell Regeneration

**Biological Basis:**
- Non-mammalian vertebrates (birds, fish) regenerate hair cells
- Notch signaling maintains supporting cells
- Atoh1 transcription factor drives hair cell fate
- Mammalian supporting cells retain latent capacity

**Current Approaches:**

*Gene Therapy:*
| Program | Strategy | Status |
|---------|----------|--------|
| Frequency Therapeutics (FX-322) | Small molecule, progenitor activation | Phase 2a (mixed results) |
| Decibel Therapeutics | Notch inhibition + Atoh1 | Trials |
| Akouos (AK-OTOF) | Gene replacement (otoferlin) | Phase 1/2 |
| Sensorion (SENS-401) | Neuroprotection | Phase 2 |

*Stem Cell Approaches:*
- Inner ear organoids from iPSCs
- Hair cell-like cells generated
- Challenge: Integration and function
- Cochlear delivery methods in development

**Timeline:**
- First gene therapy approvals possible within 5-10 years
- Full hair cell regeneration: Longer term goal

### Retinal Regeneration

**RPE Replacement:**
| Program | Cell Source | Status |
|---------|-------------|--------|
| OpRegen | hESC-derived RPE | Phase 2 |
| CPCB-RPE1 | hESC-derived RPE | Phase 1/2 |
| iPSC-derived RPE | Patient-specific | Trials |

**Photoreceptor Replacement:**
- More challenging than RPE
- Requires neural connectivity
- Optogenetics as alternative (gene therapy to make surviving cells light-sensitive)
- Clinical trials with optogenetics underway

### Olfactory Neurogenesis

**Unique Feature:**
- Olfactory epithelium has lifelong neurogenesis
- Basal cells are stem cells
- Yet still declines with age

**Research Directions:**
- Understand why regeneration fails to compensate
- Enhance endogenous neurogenesis
- Growth factor delivery
- Anti-inflammatory approaches

## Precision Medicine in Sensory Aging

### Pharmacogenomics

**Anti-VEGF Response:**
- VEGF-A, VEGF-R2 polymorphisms affect response
- CFH genotype may influence
- Personalized dosing regimens emerging

**Hearing:**
- Genetic susceptibility to noise damage (GSTM1, CAT)
- Pharmacogenomics of ototoxicity (aminoglycosides, cisplatin)
- Personalized protection strategies

### Multi-Omic Biomarkers

**Retinal Imaging as Biomarker:**
- Retina is "window to the brain"
- OCT-angiography shows microvascular changes
- Retinal changes correlate with:
  - Alzheimer's pathology
  - Cardiovascular risk
  - Systemic aging

**Proteomic Signatures:**
- Aqueous humor proteomics in AMD
- Identify progression risk
- Guide treatment intensity

**Metabolomics:**
- Lipid profiles in AMD
- Oxidative stress markers
- Potential therapeutic targets

### Risk Prediction

**Glaucoma Polygenic Risk:**
- Large GWAS identify 127+ loci
- Polygenic risk scores being developed
- May identify high-risk individuals for early screening

**AMD Risk Prediction:**
- Genetic (CFH, ARMS2) + environmental (smoking) + phenotypic (drusen)
- Integrated models predict progression
- Guide AREDS2 supplementation, monitoring intervals

## Systems Integration

### Sensory-Cognitive Interactions

**Mechanistic Research:**
- Hearing loss → reduced auditory cortex input
- Gray matter volume changes
- Compensation or atrophy?
- Enrichment through sensory restoration

**Clinical Implications:**
- Early sensory intervention may preserve cognition
- Hearing aids prescribed for "brain health"
- Vision correction for cognitive function
- Multi-sensory rehabilitation programs

### Multi-Sensory Assessment Protocols

**Comprehensive Approach:**
\`\`\`
Comprehensive Sensory Assessment Protocol:

Vision:
- High-contrast visual acuity
- Low-contrast sensitivity
- Visual field testing
- AMD evaluation (OCT, fundoscopy)
- Cataract assessment
- Functional vision (mobility, reading)

Hearing:
- Pure tone audiometry
- Speech-in-noise testing
- Self-reported disability (HHIE-S)
- Central auditory processing (selected patients)
- Functional hearing assessment

Chemosensory:
- UPSIT or Sniffin' Sticks (smell)
- Taste assessment if indicated
- Nutrition status

Somatosensory:
- Monofilament testing (feet)
- Vibration sense
- Proprioception
- Foot examination

Vestibular:
- Dix-Hallpike (BPPV)
- Head impulse test (VOR)
- Dynamic visual acuity
- Referral for vestibulography if indicated

Integration:
- Multi-sensory fall risk
- Compensatory strategies assessment
- Environmental modification needs
- Assistive technology evaluation
\`\`\`

### Health System Integration

**Care Models:**
| Model | Components | Evidence |
|-------|------------|----------|
| Integrated sensory clinic | Vision, hearing, balance together | Emerging |
| Primary care screening | Standardized sensory assessment | Guidelines |
| Home-based intervention | Environmental modification + devices | Falls prevention |
| Telehealth monitoring | Remote vision/hearing tracking | COVID accelerated |

**Policy Implications:**
- Medicare coverage for hearing aids (advocacy ongoing)
- OTC hearing aids (2022 FDA rule)
- Integration of sensory assessment in cognitive evaluations
- Value-based care incentivizing sensory intervention

## Emerging Technologies

### Artificial Intelligence

**Retinal Imaging:**
- Automated AMD/DR detection
- Risk stratification
- Treatment response prediction
- FDA-cleared devices available

**Hearing:**
- AI-powered hearing aids (scene classification)
- Predictive algorithms for hearing aid fitting
- Speech enhancement beyond traditional amplification

### Smart Home and Assistive Technology

**Vision:**
- AI description (OrCam, Aira service)
- Navigation systems
- Smart displays with magnification

**Hearing:**
- Real-time captioning (AI-powered)
- Smart home alerts (flashing lights, vibration)
- Hearing loop technology in public spaces

**Multi-Sensory:**
- Integrated smart home (voice control, visual cues)
- Wearables for fall detection
- Continuous monitoring

### Future Directions

**Next-Generation Prosthetics:**
- Retinal implants with higher resolution
- Cortical visual prosthetics
- Fully implantable hearing systems
- Brain-computer interfaces for sensory restoration

**Bioelectronic Medicine:**
- Vagus nerve stimulation for hearing (research)
- Electrical stimulation for taste
- Neuromodulation approaches

**Longevity Integration:**
- Sensory aging shares mechanisms with systemic aging
- Senolytics for sensory tissues
- NAD+ precursors for mitochondrial support
- Exercise and nutrition for sensory health`,
      keyTerms: [
        { term: 'optogenetics', definition: 'Gene therapy approach making cells light-sensitive; potential for vision restoration in degenerative disease' },
        { term: 'iPSC-derived RPE', definition: 'Retinal pigment epithelium generated from induced pluripotent stem cells for transplantation' },
        { term: 'synaptopathy', definition: 'Loss of synapses between hair cells and auditory nerve; underlying "hidden hearing loss" and cognitive effects' },
        { term: 'retina as window', definition: 'Concept that retinal imaging reveals systemic and brain health beyond eye disease' },
        { term: 'polygenic risk score', definition: 'Composite genetic risk based on multiple variants; being developed for glaucoma and other sensory conditions' },
        { term: 'bioelectronic medicine', definition: 'Using electrical stimulation to treat disease; emerging applications in sensory systems' },
      ],
      clinicalNotes: `State-of-the-art practice integration:

1. **Sensory-cognitive link** is now well-established - treat hearing and vision for brain health, not just sensory function
2. **Comprehensive sensory assessment** should be standard in geriatric evaluation, falls risk, and cognitive assessment
3. **Regenerative therapies** are coming - first hair cell and retinal gene therapies may be approved within 5-10 years
4. **AI-powered devices** (retinal imaging, hearing aids) are already clinical reality
5. **OTC hearing aids** may improve access - guide patients to quality devices
6. **Olfactory testing** has value as biomarker for neurodegeneration - consider in appropriate patients
7. **Multi-sensory rehabilitation** is more effective than single-modality approaches
8. **Retinal imaging** is emerging as systemic health biomarker - may have role beyond ophthalmology`,
    },
  },

  media: [
    {
      id: 'presbycusis-audiogram',
      type: 'diagram',
      filename: 'presbycusis-audiogram.svg',
      title: 'Typical Presbycusis Audiogram',
      description: 'High-frequency sloping hearing loss pattern characteristic of age-related hearing loss',
    },
    {
      id: 'amd-progression',
      type: 'diagram',
      filename: 'amd-stages.svg',
      title: 'Age-Related Macular Degeneration Progression',
      description: 'Staging of AMD from early drusen to late dry and wet forms',
    },
  ],

  citations: [
    {
      id: 'lancet-dementia-commission',
      type: 'article',
      title: 'Dementia prevention, intervention, and care: 2020 report of the Lancet Commission',
      authors: ['Livingston G', 'Huntley J', 'Sommerlad A', 'et al.'],
      source: 'Lancet',
    },
    {
      id: 'achieve-trial',
      type: 'article',
      title: 'Hearing intervention versus health education control to reduce cognitive decline in older adults',
      authors: ['Lin FR', 'Pike JR', 'Albert MS', 'et al.'],
      source: 'Lancet',
    },
    {
      id: 'areds2',
      type: 'article',
      title: 'Age-Related Eye Disease Study 2 Research Group',
      source: 'JAMA',
    },
  ],

  crossReferences: [
    { targetId: 'concept-aging-physiology', targetType: 'concept', relationship: 'parent', label: 'Aging Physiology' },
    { targetId: 'concept-falls-prevention', targetType: 'concept', relationship: 'related', label: 'Falls Prevention' },
    { targetId: 'concept-cognitive-impairment-assessment', targetType: 'concept', relationship: 'related', label: 'Cognitive Assessment' },
    { targetId: 'concept-geriatric-syndromes', targetType: 'concept', relationship: 'sibling', label: 'Geriatric Syndromes' },
  ],

  tags: {
    systems: ['sensory', 'neurological', 'ophthalmology', 'otolaryngology'],
    topics: ['geriatrics', 'sensory impairment', 'rehabilitation', 'assistive technology'],
    keywords: ['presbycusis', 'presbyopia', 'macular degeneration', 'cataracts', 'hearing loss', 'vision loss'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'family medicine', 'ophthalmology', 'ENT'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default ageRelatedSensoryChanges;
