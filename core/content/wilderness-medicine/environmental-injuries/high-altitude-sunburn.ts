/**
 * High Altitude Sunburn and UV Exposure - Comprehensive Educational Content
 *
 * Covers UV exposure at altitude, prevention, treatment, and snow blindness.
 *
 * IMPORTANT: This content is for educational purposes only. In any
 * wilderness emergency, prioritize evacuation to medical care when needed.
 */

import { EducationalContent } from '../../types';

export const highAltitudeSunburn: EducationalContent = {
  id: 'wilderness-high-altitude-sunburn',
  type: 'condition',
  name: 'High Altitude Sunburn and UV Exposure',
  alternateNames: ['Mountain Sunburn', 'Alpine Sunburn', 'Snow Blindness', 'Photokeratitis'],

  levels: {
    1: {
      level: 1,
      summary: 'The sun is much stronger in the mountains because you are closer to it and snow reflects the light back up at you. You can get badly sunburned or hurt your eyes if you do not protect yourself with sunscreen, sunglasses, and hats.',
      explanation: `## Why Is the Sun Stronger in Mountains?

When you climb up a mountain, you get closer to the sun. The air up high is thinner, so it cannot block as much of the sun's harmful rays. These rays are called ultraviolet or UV rays - they are invisible but can burn your skin and eyes.

## Double Trouble: Snow Reflection

Snow acts like a giant mirror! It bounces the sun's rays back up at you. This means you get hit by sunlight from above AND below. That is why mountain climbers can get sunburned in places that normally do not burn - like under their chin and inside their nose!

## What Can Happen?

**Sunburn:**
- Red, painful skin
- Skin that feels hot to touch
- Peeling skin later
- Very bad burns can have blisters

**Snow Blindness (Eye Sunburn):**
- Eyes feel gritty, like sand is in them
- Eyes water a lot
- Hard to look at light
- Everything looks red or blurry
- This is like getting sunburn on your eyes!

## How to Stay Safe

**Protect Your Skin:**
- Wear strong sunscreen (SPF 50 or higher)
- Put on lip balm with sunscreen
- Reapply every 2 hours and after sweating
- Cover up with long sleeves and a hat

**Protect Your Eyes:**
- Wear sunglasses that block UV rays
- In snow, use glacier glasses or goggles
- Side shields block light from the edges

## The Golden Rule

If you can see snow, wear sunglasses! Even on cloudy days, UV rays get through. It only takes a few hours without eye protection to get snow blindness.`,
      keyTerms: [
        { term: 'ultraviolet rays', definition: 'Invisible rays from the sun that can burn your skin and eyes, also called UV rays' },
        { term: 'SPF', definition: 'Sun Protection Factor - a number that tells you how strong the sunscreen is' },
        { term: 'snow blindness', definition: 'When UV rays burn your eyes, making them hurt and hard to see' },
        { term: 'reflection', definition: 'When light bounces off something like a mirror or snow' },
      ],
      analogies: [
        'Snow reflecting UV rays is like standing between two mirrors - the light hits you from all directions.',
        'The thin mountain air lets UV through like a window with no curtains.',
        'Getting snow blindness is like getting a sunburn on your eyeballs.',
      ],
      examples: [
        'A skier forgot their goggles and had painful, watery eyes by lunchtime.',
        'A hiker put sunscreen on their face but forgot under their chin and got burned from snow reflection.',
        'Mountain climbers on snowy peaks wear special goggles with side shields.',
      ],
    },
    2: {
      level: 2,
      summary: 'UV radiation intensity increases approximately 10-12% per 1,000 meters of elevation gain, and snow reflects up to 80% of UV rays. This creates extreme sun exposure risk causing severe sunburn and photokeratitis (snow blindness). Prevention through SPF 50+ sunscreen, UV-blocking eyewear, and physical barriers is essential.',
      explanation: `## Understanding UV at Altitude

### Why UV Is More Intense

UV radiation increases with altitude for several reasons:
- Less atmosphere to filter UV rays
- Approximately 10-12% increase per 1,000m (3,300 ft) of elevation
- At 3,000m (10,000 ft): ~35% more UV than sea level
- Thinner ozone layer at altitude provides less protection

### The Reflection Factor

Different surfaces reflect different amounts of UV:
| Surface | UV Reflection |
|---------|--------------|
| Fresh snow | 80-90% |
| Old snow | 50-60% |
| Sand | 15-25% |
| Water | 5-10% |
| Grass | 2-5% |

This reflection means you receive UV from above AND below, dramatically increasing total exposure.

## High Altitude Sunburn

### Risk Factors
- Higher altitude = more UV
- Snow or ice environments
- Clear days (though clouds do not block all UV)
- Early spring (snow + strong sun)
- Midday exposure (10 AM - 4 PM)

### Unusual Burn Patterns
- Under chin and jaw (snow reflection)
- Inside nostrils and ears
- Lips (often forgotten)
- Behind ears
- Under eyebrows

### Severity
Mountain sunburns are often more severe than lowland burns due to:
- Higher UV intensity
- Longer exposure during activities
- Missed reapplication (cold/wind)
- Reflection exposure

## Snow Blindness (Photokeratitis)

### What Is It?
Photokeratitis is essentially sunburn of the cornea and conjunctiva. The cornea absorbs UV radiation, causing inflammation and cell damage.

### Symptoms
**Early (2-12 hours after exposure):**
- Sensation of grit or sand in eyes
- Excessive tearing
- Eye redness
- Pain with blinking

**Progressive:**
- Severe pain
- Photophobia (light sensitivity)
- Blurred vision
- Swelling of eyelids
- Temporary vision loss in severe cases

### Timeline
- Symptoms appear 2-12 hours after exposure
- Peak severity at 6-12 hours
- Usually resolves in 24-72 hours
- No permanent damage in most cases

## Prevention Strategies

### Sunscreen Protocol
- Use SPF 50+ broad-spectrum sunscreen
- Apply 15-30 minutes before exposure
- Reapply every 2 hours (more often if sweating)
- Cover often-missed areas: lips, ears, under chin, back of hands
- Use lip balm with SPF 30+

### Eye Protection
- Sunglasses must block 99-100% UV-A and UV-B
- Side shields or wrap-around styles for high exposure
- Glacier glasses for snow environments (category 4 lenses)
- Goggles for skiing/climbing in bright conditions
- Keep backup eyewear

### Physical Protection
- Wide-brimmed hat or cap with neck flap
- Long sleeves and pants when practical
- Neck gaiter can protect lower face
- Gloves protect hands

## Treatment

### Sunburn
- Get out of sun immediately
- Cool compresses
- Aloe vera gel
- Stay hydrated
- Ibuprofen for pain and inflammation
- Do not pop blisters
- Seek medical care for severe burns

### Snow Blindness
- Remove contact lenses if worn
- Rest in dark environment
- Cool, wet compresses
- Lubricating eye drops (artificial tears)
- Pain relief (oral NSAIDs)
- Do NOT rub eyes
- Usually resolves 24-72 hours
- Seek medical attention if symptoms severe or worsening`,
      keyTerms: [
        { term: 'photokeratitis', definition: 'Inflammation of the cornea caused by UV exposure, commonly called snow blindness', pronunciation: 'foh-toh-ker-uh-TY-tis' },
        { term: 'UV-A', definition: 'Long-wave ultraviolet rays that penetrate deep into skin and contribute to aging and cancer' },
        { term: 'UV-B', definition: 'Medium-wave ultraviolet rays that cause sunburn and direct DNA damage' },
        { term: 'broad-spectrum', definition: 'Sunscreen that protects against both UV-A and UV-B radiation' },
        { term: 'glacier glasses', definition: 'Specialized sunglasses with side shields and very dark lenses (category 4) for high-altitude snow environments' },
      ],
      analogies: [
        'Being in snow without eye protection is like staring at a dim lightbulb for hours - the damage adds up.',
        'Snow reflection creating "double exposure" is like being in a photography studio with lights above and a reflector below.',
      ],
    },
    3: {
      level: 3,
      summary: 'High altitude UV exposure causes accelerated photodamage due to reduced atmospheric UV filtration and high surface reflectance. Photokeratitis results from UV-B absorption by the corneal epithelium causing acute keratocyte apoptosis and inflammatory response. Management is supportive, with prevention through appropriate UV barriers being paramount.',
      explanation: `## Atmospheric Physics of Altitude UV

### UV Spectrum at Altitude

The solar UV spectrum relevant to human tissue:
- **UV-C (100-280nm):** Absorbed by ozone, does not reach surface
- **UV-B (280-315nm):** Partially filtered, causes acute damage (sunburn, photokeratitis)
- **UV-A (315-400nm):** Minimally filtered, causes chronic damage

### Altitude Effects on UV

**Reduced Rayleigh Scattering:**
- Atmospheric scattering decreases with altitude
- UV-B increases 10-12% per 1000m
- UV-A increases ~5% per 1000m

**Reduced Ozone Column:**
- Total ozone decreases at higher altitudes
- Stratospheric UV absorption reduced
- Greatest effect on UV-B

**Reduced Aerosol Scattering:**
- Less particulate matter at altitude
- Cleaner air transmits more UV

### Quantitative UV Increase

| Altitude | UV-B Increase | UV Index Factor |
|----------|---------------|-----------------|
| Sea level | Baseline | 1.0 |
| 1,500m (5,000 ft) | +18% | 1.18 |
| 3,000m (10,000 ft) | +36% | 1.36 |
| 4,500m (15,000 ft) | +54% | 1.54 |
| 6,000m (20,000 ft) | +75% | 1.75 |

### Snow Reflectance (Albedo)

**Fresh snow albedo: 0.80-0.95**
- Reflects 80-95% of incident UV
- Creates bidirectional exposure
- Effective UV dose nearly doubled

**Comparison of albedo values:**
- Fresh powder: 0.90-0.95
- Packed snow: 0.75-0.85
- Ice: 0.50-0.65
- Wet sand: 0.20-0.25
- Water (high sun): 0.05-0.10

## Cutaneous Photodamage at Altitude

### Acute Response (Sunburn)

**Molecular mechanism:**
1. UV-B causes direct DNA damage (cyclobutane pyrimidine dimers)
2. UV-A generates reactive oxygen species
3. Keratinocyte apoptosis (sunburn cells)
4. Release of inflammatory mediators (PGE2, IL-1, IL-6, TNF-alpha)
5. Vasodilation and vascular permeability increase
6. Edema and erythema development

**Timeline:**
- DNA damage: immediate
- Erythema onset: 2-6 hours
- Peak erythema: 12-24 hours
- Resolution: 72+ hours

### Minimal Erythema Dose (MED)

The MED varies with skin type and is reduced at altitude:
- Sea level MED for skin type II: ~20-35 mJ/cm2
- At 3000m with snow: effective MED reduced by ~50%
- Results in faster, more severe burns

## Photokeratitis (Snow Blindness)

### Pathophysiology

**UV-B absorption:**
- Cornea absorbs UV-B wavelengths (especially 280-320nm)
- Epithelial cells most affected
- Bowman's layer provides some protection

**Cellular damage:**
1. Direct DNA damage in epithelial cells
2. Protein cross-linking
3. Membrane lipid peroxidation
4. Keratocyte apoptosis
5. Release of inflammatory cytokines
6. Epithelial sloughing

**Why delayed onset:**
- UV exposure is painless
- Damage accumulates over hours
- Symptoms appear as inflammatory response develops
- Similar to sunburn delay

### Clinical Presentation

**Lake Louise Photokeratitis Grading:**
- Mild: Foreign body sensation, lacrimation
- Moderate: Pain, photophobia, blepharospasm
- Severe: Severe pain, inability to open eyes, temporary blindness

**Examination findings:**
- Conjunctival injection
- Punctate keratitis on fluorescein staining
- Corneal epithelial defects
- Lid edema

### Differential Diagnosis

Consider other causes of acute painful red eye:
- Corneal abrasion/foreign body
- Acute angle-closure glaucoma
- Uveitis
- Chemical injury
- Infectious keratitis

## Management

### Photokeratitis Treatment

**Supportive care:**
- Rest in dark environment
- Cold compresses
- Oral NSAIDs (ibuprofen 400-600mg q6h)
- Artificial tears (preservative-free q1-2h)
- Topical NSAIDs (ketorolac 0.5% QID) if available

**Do NOT use:**
- Topical anesthetics (delay healing, risk of abuse)
- Topical steroids (risk of infection)

**Patching:**
- Controversial; may be useful for comfort
- Bilateral patching requires assistance
- Usually unnecessary

**Prognosis:**
- Complete recovery within 24-72 hours
- No permanent sequelae typical
- Rarely, recurrent erosion syndrome

### Prevention Protocol

**Sunscreen:**
- SPF 50+ broad-spectrum
- Water/sweat resistant formulation
- Reapply every 90-120 minutes
- Physical blockers (zinc oxide, titanium dioxide) superior

**Eye protection:**
- Category 3-4 lens (VLT 3-18%)
- 100% UV-A and UV-B blocking
- Side shields essential in snow
- Backup eyewear critical

**Environmental considerations:**
- Cloud cover reduces visible light more than UV
- Fog can increase scattering and exposure
- Morning/evening safer but still require protection`,
      keyTerms: [
        { term: 'Rayleigh scattering', definition: 'Atmospheric scattering of light by molecules, which decreases with altitude allowing more UV to reach the surface' },
        { term: 'albedo', definition: 'The fraction of incident radiation reflected by a surface; snow albedo is 0.80-0.95', pronunciation: 'al-BEE-doh' },
        { term: 'cyclobutane pyrimidine dimers', definition: 'DNA lesions formed by UV-B absorption, causing adjacent pyrimidines to covalently link' },
        { term: 'minimal erythema dose', definition: 'The smallest UV dose that produces visible redness at 24 hours; varies by skin type' },
        { term: 'blepharospasm', definition: 'Involuntary tight closure of the eyelids, seen in severe photokeratitis', pronunciation: 'BLEF-uh-roh-spazm' },
      ],
      clinicalNotes: 'Photokeratitis is often bilateral and symmetric. Unilateral presentation should prompt consideration of other diagnoses. Patients with photokeratitis should not drive or navigate terrain until symptoms resolve. Prevention is far easier than treatment in wilderness settings.',
    },
    4: {
      level: 4,
      summary: 'High-altitude UV exposure creates a unique photobiological challenge through combined atmospheric and reflective amplification. Corneal UV-B absorption triggers epithelial apoptosis, keratocyte death, and inflammatory cascades producing the clinical syndrome of photokeratitis. Cutaneous photodamage follows accelerated kinetics with implications for both acute morbidity and cumulative carcinogenic risk. Management emphasizes barrier protection and supportive care.',
      explanation: `## Advanced Photobiology at Altitude

### Solar Spectrum and Atmospheric Filtration

**Sea level UV filtration:**
- UV-C: 100% absorbed (O3, O2)
- UV-B: 90-95% absorbed (primarily O3)
- UV-A: 50-80% absorbed (O3, aerosols)

**Altitude modifications:**
\`\`\`
Ozone column optical depth (DO3) decreases ~1-2% per 1000m
Total UV transmission: T = exp(-tau * sec(theta))
Where tau = scattering + absorption coefficients
\`\`\`

**Erythemal UV (action spectrum weighted):**
- 280nm: ~10x more erythemally effective than 320nm
- UV-B contribution to erythema: 80-90%
- UV-A contribution: 10-20%

### Bidirectional Reflectance Distribution Function (BRDF)

Snow reflectance is not uniform:
- Forward scattering predominates
- Angular dependence of albedo
- Fresh snow approximates Lambertian surface
- Aged snow shows more specular reflection

**Total irradiance calculation:**
\`\`\`
E_total = E_direct + E_diffuse + E_reflected
E_reflected = E_incident * albedo * geometric_factor
In snow: E_total can approach 2x E_incident
\`\`\`

### Action Spectra for Tissue Damage

**Corneal absorption spectrum:**
- Peak absorption: 270-290nm
- 50% absorption at 310nm
- Corneal transmission begins at 295nm (UV-B cutoff)
- Lens absorbs remaining UV-A

**Skin erythemal action spectrum (CIE):**
- Peaks at 297nm
- Logarithmic decrease 298-328nm
- Minimal erythemogenic effect >330nm

## Corneal Photobiology

### Cellular Targets

**Epithelium:**
- 5-6 cell layers
- High mitotic activity
- UV-B absorption causes:
  - Thymidine dimer formation
  - Strand breaks
  - Protein cross-linking
  - Membrane disruption

**Bowman's layer:**
- Acellular collagen
- Provides some UV attenuation
- No repair capacity

**Stroma:**
- Keratocytes (modified fibroblasts)
- UV-induced apoptosis at higher doses
- Cytokine production

### Molecular Damage Cascades

**Immediate effects (seconds to minutes):**
1. UV-B photon absorption by DNA, proteins, lipids
2. Formation of cyclobutane pyrimidine dimers (CPDs)
3. 6-4 photoproduct formation
4. Reactive oxygen species generation
5. Protein carbonylation

**Early response (minutes to hours):**
1. p53 pathway activation
2. Cell cycle arrest
3. Nucleotide excision repair initiation
4. If damage > repair: apoptosis activation
5. Caspase cascade engagement

**Inflammatory phase (hours):**
1. IL-1alpha/beta release from damaged epithelia
2. Keratocyte activation
3. PMN infiltration
4. Prostaglandin synthesis
5. Substance P release (pain)

### Repair Mechanisms

**Nucleotide excision repair (NER):**
- Recognizes bulky DNA lesions
- XPC complex identifies damage
- TFIIH unwinds DNA
- XPF-ERCC1 and XPG excise lesion
- DNA polymerase delta/epsilon fill gap

**Epithelial regeneration:**
- Limbal stem cells provide reserve
- Migration rate: 60-80 microm/hour
- Complete re-epithelialization: 24-72 hours
- Mitotic activity increases

## Cutaneous Photodamage Mechanisms

### Acute Response Pathways

**DNA damage response:**
\`\`\`
UV-B -> CPDs + 6-4PP -> ATR activation -> Chk1
                    -> p53 stabilization -> p21 -> arrest
                    -> Apoptosis if damage severe
\`\`\`

**Inflammatory cascade:**
\`\`\`
UV -> Membrane damage -> Arachidonic acid release
                      -> COX-2 induction
                      -> PGE2, PGF2a (vasodilation)
UV -> Keratinocyte activation -> IL-1, IL-6, TNF-alpha
                              -> Chemokine release
                              -> PMN infiltration
\`\`\`

### Chronic/Cumulative Effects

**Relevance to mountain workers:**
- Mountain guides, ski patrol have high cumulative exposure
- Photoaging accelerated
- Increased SCC/BCC risk
- Melanoma risk with intermittent intense exposure

**Immunosuppressive effects:**
- UV-induced immunosuppression
- Langerhans cell depletion
- Regulatory T cell induction
- May impact wound healing

## Clinical Assessment

### Photokeratitis Grading (Modified Dua)

| Grade | Epithelial Loss | Clinical Features |
|-------|-----------------|-------------------|
| 1 | Punctate | Mild grit sensation |
| 2 | Patchy | Pain, photophobia |
| 3 | Confluent <50% | Severe pain, tearing |
| 4 | Confluent >50% | Blepharospasm |
| 5 | Total | Cannot open eyes |

### Fluorescein Examination

**Technique:**
- Apply fluorescein strip with saline
- Cobalt blue light examination
- Damaged epithelium stains bright green

**Findings:**
- Punctate epithelial erosions (early)
- Confluent epithelial defects (severe)
- Geographic pattern typical

### Differential Considerations

**Red flags suggesting other pathology:**
- Unilateral presentation
- Asymmetric severity
- Purulent discharge
- Hypopyon
- Fixed dilated pupil
- History inconsistent with UV exposure

## Management Refinements

### Pharmacological Options

**Topical NSAIDs:**
- Ketorolac 0.5% QID
- Diclofenac 0.1% QID
- Reduce inflammation and pain
- May delay epithelial healing (controversial)

**Oral analgesics:**
- NSAIDs: ibuprofen 400-600mg Q6H
- Acetaminophen adjunct
- Opioids rarely necessary

**Artificial tears:**
- Preservative-free essential for frequent use
- Carboxymethylcellulose or hyaluronic acid
- Gel formulations at night

**Topical antibiotics:**
- Not routinely indicated for UV keratitis
- Consider if significant epithelial defect
- Erythromycin ointment or fluoroquinolone drop

### Bandage Contact Lens

**Indications:**
- Severe pain uncontrolled with drops
- Large epithelial defects
- Must have antibiotic coverage

**Contraindications:**
- Wilderness setting (infection risk without follow-up)
- Unable to maintain lens hygiene

## Prevention: Technical Considerations

### Eyewear Specifications

**Lens categories (ISO 8980-3):**
| Category | VLT | Use |
|----------|-----|-----|
| 0 | 80-100% | Indoor/cloudy |
| 1 | 43-80% | Overcast |
| 2 | 18-43% | Medium sun |
| 3 | 8-18% | Strong sun |
| 4 | 3-8% | Glacier/high altitude |

**UV specifications:**
- Must block 100% UV-A and UV-B
- Look for UV400 rating
- Category 4 mandatory for snow at altitude
- Side shields essential (30-50% exposure from sides)

### Emergency Improvisation

**When eyewear lost/broken:**
- Cardboard/duct tape goggles with narrow slit
- Charcoal under eyes (reduces reflection)
- Travel only during low sun (dawn/dusk)
- Use any available tinted material`,
      keyTerms: [
        { term: 'action spectrum', definition: 'The wavelength-dependent effectiveness of radiation in producing a biological response' },
        { term: 'nucleotide excision repair', definition: 'DNA repair mechanism that removes bulky UV-induced lesions' },
        { term: '6-4 photoproducts', definition: 'DNA lesions formed by UV, causing covalent bonds between adjacent bases at 6-4 positions' },
        { term: 'BRDF', definition: 'Bidirectional Reflectance Distribution Function - describes how light is reflected from a surface at different angles' },
        { term: 'limbal stem cells', definition: 'Stem cells at the cornea-sclera junction that regenerate corneal epithelium' },
      ],
      clinicalNotes: 'Category 4 lenses are too dark for driving or low-light conditions but essential for high-altitude snow. Always carry backup eyewear. Topical anesthetics provide immediate relief but delay healing and risk epithelial toxicity with repeated use - do not dispense for self-administration. Systemic pain control is preferred.',
    },
    5: {
      level: 5,
      summary: 'High-altitude UV pathophysiology involves complex interactions between atmospheric physics, surface reflectance, and tissue photobiology. Corneal damage follows well-characterized molecular cascades from photon absorption through DNA damage, apoptotic signaling, and inflammatory response. Current evidence supports conservative management with emphasis on prevention. Emerging research addresses photoadaptation, repair kinetics, and long-term ocular consequences of cumulative altitude UV exposure.',
      explanation: `## Atmospheric Radiative Transfer at Altitude

### Quantitative UV Modeling

**UV irradiance calculation:**
\`\`\`
E(lambda, z) = E0(lambda) * T_ozone(lambda) * T_rayleigh(lambda, z) * T_aerosol(z) * T_clouds
Where:
E0 = extraterrestrial solar irradiance
T = transmission factors
z = altitude
\`\`\`

**Ozone transmission:**
\`\`\`
T_O3 = exp(-sigma_O3(lambda) * [O3] * m)
sigma_O3 = ozone absorption cross-section
m = air mass factor
[O3] decreases ~0.5 DU per 100m altitude
\`\`\`

**Net UV increase at altitude:**
- UV-B at 5000m: 50-70% higher than sea level
- UV-A at 5000m: 20-30% higher than sea level
- Erythemal weighted UV: 45-60% higher

### Radiative Amplification Factor (RAF)

The UV amplification factor for altitude:
\`\`\`
RAF = dln(E) / dln(O3)
For erythemal UV: RAF approximately 1.1-1.4
1% decrease in ozone -> 1.1-1.4% increase in erythemal UV
\`\`\`

### Snow Surface Optics

**Mie scattering in snowpack:**
- Snow grains act as Mie scatterers
- Multiple scattering increases path length
- Absorption by ice minimal in UV
- Result: high diffuse reflectance

**Angular distribution:**
- Fresh snow: quasi-Lambertian
- Aged/metamorphosed snow: forward scattering bias
- Implications for eye exposure:
  - Upward reflected radiation enters eye from below
  - Bypasses brow ridge protection
  - Sunglasses without side shields inadequate

## Molecular Photobiology of UV Keratitis

### Chromophore Interactions

**Primary corneal chromophores:**
- DNA (absorption peak 260nm)
- Aromatic amino acids (Trp 280nm, Tyr 275nm)
- NAD/NADH (260, 340nm)
- Riboflavin (375, 450nm)
- Ascorbate (265nm)

**Photosensitization reactions:**
\`\`\`
Type I: Direct H-atom or electron transfer
Chromophore* + Substrate -> Free radicals -> Damage

Type II: Oxygen-mediated
Chromophore* + O2 -> Singlet oxygen (1O2) -> Oxidative damage
\`\`\`

### DNA Damage and Repair Kinetics

**CPD formation kinetics:**
\`\`\`
Rate = phi * epsilon * I * [DNA]
phi = quantum yield (~0.01 for CPD)
Half-time for repair: 12-24 hours in corneal epithelium
\`\`\`

**NER pathway components in cornea:**
- XPA, XPC: damage recognition
- XPB, XPD (TFIIH): helicase activity
- XPG, XPF-ERCC1: endonucleases
- PCNA, RFC: replication factors

**Repair capacity limitations:**
- Corneal epithelium has lower NER than epidermis
- Faster cell turnover compensates
- Complete epithelial renewal: 7-10 days

### Apoptotic Signaling

**Intrinsic pathway activation:**
\`\`\`
UV -> DNA damage -> ATM/ATR activation
                 -> p53 phosphorylation (Ser15, Ser20)
                 -> p53 stabilization
                 -> Bax/Bak activation
                 -> Cytochrome c release
                 -> Caspase-9 -> Caspase-3
                 -> Apoptosis
\`\`\`

**Role of TRAIL:**
- UV upregulates TRAIL expression
- Autocrine/paracrine apoptosis induction
- May explain delayed cell death wave

### Inflammatory Mediator Profile

**Cytokine temporal sequence:**
| Time | Mediators | Effect |
|------|-----------|--------|
| 0-2h | IL-1alpha (preformed) | Immediate release |
| 2-6h | PGE2, LTB4 | Vasodilation, PMN chemotaxis |
| 6-12h | IL-6, IL-8 | Amplification |
| 12-24h | TNF-alpha | Sustained inflammation |
| 24-48h | IL-10, TGF-beta | Resolution |

## Clinical Evidence and Management

### Epidemiological Data

**High-altitude UV exposure studies:**
- Swiss Alps research: Cumulative UV doubles per 1000m elevation
- Mountaineering surveys: 35-50% report sun-related eye symptoms
- Antarctic expeditions: Photokeratitis despite protocols
- Everest data: Corneal changes documented post-expedition

### Treatment Evidence Base

**Systematic review findings:**
- No RCTs specifically for altitude photokeratitis
- Evidence extrapolated from welding flash, tanning bed studies
- Supportive care remains standard

**Topical NSAIDs:**
- Cochrane review: May delay epithelial healing
- Provide symptomatic relief
- Consider risk-benefit in wilderness setting

**Autologous serum tears:**
- Growth factors may accelerate healing
- Not practical in wilderness
- Consider for refractory cases post-evacuation

### Long-term Ocular Considerations

**Cumulative UV effects on eye:**
- Pterygium (UV exposure strongest risk factor)
- Pinguecula
- Climatic droplet keratopathy
- Cortical cataract (UV-B implicated)
- AMD (UV-A may contribute)

**Mountaineer ocular health:**
- Studies show increased pterygium in high-altitude guides
- Lens optical changes in Everest climbers
- Recommend career-long UV protection

## Prevention: Evidence-Based Recommendations

### Eyewear Efficacy

**Required specifications:**
- UV-A blocking to 400nm (not just 380nm)
- Category 4 lens for glacier travel
- Side protection or wrap design
- Impact resistance for climbing

**Contact lens UV blocking:**
- Class 1 (>90% UV-A, >99% UV-B) provides supplement
- NOT sufficient alone
- May reduce but not prevent photokeratitis
- Still require sunglasses over contacts

### Sunscreen Periocular Application

**Challenges:**
- Eye irritation from sunscreen migration
- Often avoided around eyes
- Result: periorbital sparing, increased reflection

**Solutions:**
- Stick formulations less likely to migrate
- Physical blockers (ZnO, TiO2) less irritating
- Apply to orbital rim, not eyelid margin

### Wilderness Protocol

**Pre-expedition preparation:**
- UV-filtering eyewear (primary + backup)
- Sunscreen with high SPF, broad spectrum
- Hat with brim
- Education on early symptoms

**Daily protocol:**
- Eyewear on before leaving shelter
- Sunscreen reapplication Q2H
- Midday rest in shade when possible
- Monitor companions for eye symptoms

**Emergency measures:**
- Improvised snow goggles (cardboard with slits)
- Charcoal stripe under eyes
- Retreat to shelter if symptoms develop
- Do not continue ascent with photokeratitis

## Research Frontiers

### Photoadaptation

**Corneal UV adaptation:**
- Some evidence for increased antioxidant capacity
- Upregulation of repair enzymes with chronic low-dose exposure
- Practical implications uncertain

**Genetic susceptibility:**
- Polymorphisms in XPC, XPA affect repair capacity
- GSTM1 null genotype may increase risk
- Future personalized prevention?

### Novel Protective Approaches

**Blue-light filtering:**
- High-energy visible (HEV) light may contribute
- Some evidence for retinal effects
- Next-generation eyewear addresses HEV

**Topical UV filters:**
- Sunscreen for eyes (experimental)
- UV-absorbing eye drops in development
- Challenges: optical clarity, safety

### Biomarkers for Exposure

**Potential markers:**
- Tear film CPD levels
- Inflammatory cytokines in tears
- Conjunctival cell DNA damage
- Applications: exposure monitoring, research`,
      keyTerms: [
        { term: 'radiative amplification factor', definition: 'The relationship between changes in ozone and resulting UV irradiance changes' },
        { term: 'chromophore', definition: 'Molecule that absorbs light at specific wavelengths, initiating photochemical reactions' },
        { term: 'climatic droplet keratopathy', definition: 'Corneal degeneration associated with chronic UV exposure, seen in high-altitude populations', pronunciation: 'ker-uh-TOP-uh-thee' },
        { term: 'XPC', definition: 'Xeroderma pigmentosum complementation group C - key DNA damage recognition protein in NER' },
        { term: 'Mie scattering', definition: 'Light scattering by particles similar in size to the wavelength, responsible for snow optical properties' },
      ],
      clinicalNotes: `Clinical Pearls for High-Altitude UV Management:
1. Category 4 lenses are mandatory for glacier travel - Category 3 insufficient
2. Contact lens UV blockers are adjunctive only, not protective alone
3. Periorbital sunscreen application is often inadequate - use stick formulations
4. Photokeratitis symptoms appear hours after exposure is complete
5. Topical anesthetics contraindicated for self-administration
6. Career mountaineers should have regular ophthalmologic screening
7. Snow blindness is a clinical diagnosis - fluorescein confirms but is not required
8. Improvised slit goggles effective in emergencies - use any opaque material
9. Bilateral symptoms support UV etiology; unilateral suggests alternative diagnosis
10. Long-term cumulative UV exposure increases cataract and pterygium risk`,
    },
  },

  media: [
    {
      id: 'uv-altitude-diagram',
      type: 'diagram',
      filename: 'uv-altitude-exposure.svg',
      title: 'UV Exposure Increase with Altitude',
      description: 'Graph showing UV intensity increase with elevation gain',
    },
    {
      id: 'snow-reflection-diagram',
      type: 'diagram',
      filename: 'snow-reflection-uv.svg',
      title: 'Snow Reflection and Bidirectional UV Exposure',
      description: 'Illustration of UV reflection from snow creating exposure from multiple angles',
    },
    {
      id: 'photokeratitis-fluorescein',
      type: 'image',
      filename: 'photokeratitis-fluorescein.jpg',
      title: 'Photokeratitis Fluorescein Staining',
      description: 'Clinical image showing punctate epithelial erosions under cobalt blue light',
    },
  ],

  citations: [
    {
      id: 'auerbach-wilderness-uv',
      type: 'textbook',
      title: 'Wilderness Medicine',
      authors: ['Auerbach, P.S.', 'Cushing, T.A.', 'Harris, N.S.'],
      source: 'Elsevier',
      chapter: 'Solar and UV Radiation',
    },
    {
      id: 'who-uv-guidelines',
      type: 'article',
      title: 'Global Solar UV Index: A Practical Guide',
      authors: ['World Health Organization'],
      source: 'WHO',
      url: 'https://www.who.int/publications/i/item/9241590076',
    },
    {
      id: 'wms-sun-guidelines',
      type: 'article',
      title: 'Wilderness Medical Society Practice Guidelines for Prevention and Treatment of Sun-Related Skin Injury',
      source: 'Wilderness & Environmental Medicine',
    },
  ],

  crossReferences: [
    { targetId: 'wilderness-altitude-sickness-overview', targetType: 'condition', relationship: 'related', label: 'Altitude Sickness Overview' },
    { targetId: 'wilderness-burn-care', targetType: 'topic', relationship: 'related', label: 'Burn Care' },
    { targetId: 'wilderness-survival-first-aid-kit', targetType: 'topic', relationship: 'see-also', label: 'Survival First Aid Kit' },
  ],

  tags: {
    systems: ['integumentary', 'ophthalmologic'],
    topics: ['environmental-injuries', 'wilderness-medicine', 'prevention'],
    keywords: ['UV exposure', 'sunburn', 'photokeratitis', 'snow blindness', 'altitude', 'sunscreen', 'eye protection'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['emergency-medicine', 'ophthalmology', 'dermatology'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default highAltitudeSunburn;
