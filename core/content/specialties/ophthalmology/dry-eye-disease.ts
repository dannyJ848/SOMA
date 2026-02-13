/**
 * Dry Eye Disease - Comprehensive Educational Content
 *
 * Covers the pathophysiology, classification, diagnosis, and management
 * of dry eye disease including aqueous deficient and evaporative subtypes.
 */

import { EducationalContent } from '../../types';

export const dryEyeDisease: EducationalContent = {
  id: 'condition-dry-eye-disease',
  type: 'condition',
  name: 'Dry Eye Disease',
  alternateNames: ['Dry Eye Syndrome', 'Keratoconjunctivitis Sicca', 'DES', 'DED'],

  levels: {
    1: {
      level: 1,
      summary: 'Dry eye disease happens when your eyes do not make enough tears or the tears dry up too quickly, causing discomfort and vision problems.',
      explanation: `Imagine your eyes are like a garden that needs water to stay healthy. Tears are the water that keeps your eyes moist and comfortable. When you don't have enough tears, your eyes feel dry and irritated.

**What Are Tears?**
Tears are not just water! They are like a special smoothie for your eyes with three layers:
- **Oil layer** (on top) - Keeps tears from drying too fast
- **Water layer** (middle) - Moisturizes and cleans the eye
- **Mucus layer** (bottom) - Helps tears stick to the eye surface

**What Causes Dry Eyes?**

**Not Enough Tears:**
- Getting older (tears decrease with age)
- Some medications
- Medical conditions like arthritis
- Damage to tear glands

**Tears Dry Too Fast:**
- Oil glands in eyelids get blocked
- Not blinking enough (staring at screens)
- Wind, smoke, or dry air

**How Does It Feel?**
- Eyes feel gritty or sandy (like something is in them)
- Burning or stinging feeling
- Red, irritated eyes
- Blurry vision that clears when you blink
- Tired eyes
- Watery eyes (seems strange, but eyes water when irritated!)

**What Helps?**
- **Artificial tears**: Eye drops that add moisture
- **Warm compresses**: Help open oil glands
- **Blinking more**: Especially when using screens
- **Drinking water**: Helps your whole body, including eyes
- **Humidifier**: Adds moisture to dry air

**Who Gets Dry Eyes?**
- Older adults (more common after age 50)
- Women (especially during menopause)
- Computer users (blink less often)
- Contact lens wearers
- People in dry or windy climates
- People who have had LASIK eye surgery`,
      keyTerms: [
        { term: 'tears', definition: 'Fluid that keeps eyes moist, clean, and healthy' },
        { term: 'cornea', definition: 'The clear front part of the eye that needs to stay moist' },
        { term: 'artificial tears', definition: 'Eye drops that lubricate dry eyes' },
      ],
      analogies: [
        'Your tears are like windshield wiper fluid - they clean and protect the surface.',
        'Dry eyes are like a car windshield with no washer fluid - things get blurry and smeared.',
        'Blinking is like a windshield wiper - it spreads tears across your eye to keep it clear.',
      ],
      examples: [
        'A student who studies for hours and realizes their eyes feel gritty and sore.',
        'Someone who works in an air-conditioned office and their eyes feel dry by the end of the day.',
        'A person who notices their eyes water when they are in a windy place.',
      ],
    },
    2: {
      level: 2,
      summary: 'Dry eye disease is a multifactorial disorder of the tear film and ocular surface causing symptoms of discomfort, visual disturbance, and tear film instability with potential damage to the ocular surface.',
      explanation: `## Understanding Dry Eye Disease

Dry eye disease (DED) occurs when tears evaporate too quickly or when the eyes don't produce enough tears. It's a common condition affecting millions of people worldwide.

## The Tear Film

The tear film has three important layers:

**1. Lipid (Oil) Layer**
- Produced by meibomian glands in eyelids
- Prevents tear evaporation
- Provides smooth optical surface
- Makes tears spread evenly

**2. Aqueous (Water) Layer**
- Produced by lacrimal glands
- Main volume of tears
- Contains nutrients, antibodies
- Keeps cornea hydrated

**3. Mucin Layer**
- Produced by conjunctival goblet cells
- Binds tear film to cornea
- Makes cornea surface wettable

## Two Main Types of Dry Eye

**1. Aqueous Deficient Dry Eye**
- Not enough watery tears
- Causes: Sjögren syndrome, aging, medications
- Lacrimal glands don't produce enough fluid

**2. Evaporative Dry Eye**
- Tears evaporate too quickly
- Most common type (80-90% of cases)
- Caused by meibomian gland dysfunction (MGD)
- Oil layer is deficient or abnormal

## Risk Factors

**Demographics:**
- Age >50 (natural tear production decreases)
- Female (hormonal changes, especially menopause)

**Environmental:**
- Dry climate, wind, air conditioning
- Smoke, air pollution
- High altitude
- Indoor heating

**Activities:**
- Prolonged screen use (blink rate decreases 60%)
- Reading
- Driving

**Medical:**
- Contact lens wear
- LASIK or eye surgery
- Autoimmune diseases (Sjögren, RA, lupus)
- Diabetes
- Thyroid disorders
- Allergies

**Medications:**
- Antihistamines
- Decongestants
- Antidepressants
- Blood pressure medications
- Hormone replacement therapy

## Symptoms

**Common Symptoms:**
- Burning, stinging, or scratchy sensation
- Feeling like something is in the eye (foreign body sensation)
- Redness
- Difficulty wearing contact lenses
- Blurred vision that improves with blinking
- Eye fatigue
- Watery eyes (reflex tearing from irritation)

**Paradoxical Watery Eyes:**
When eyes are very dry, they may suddenly produce excessive tears as a reflex response. These tears are mostly water and don't lubricate well.

## Diagnosis

**Eye Examination:**
- Slit lamp exam of tear film
- Assessment of eyelid margins
- Evaluation of meibomian glands
- Cornea and conjunctiva examination

**Tests:**
- **Schirmer test**: Measures tear production
- **Tear breakup time (TBUT)**: Measures tear stability
- **Ocular surface staining**: Shows damage to eye surface
- **Meibography**: Images meibomian glands

## Treatment

**Artificial Tears (First Line)**
- Lubricating eye drops
- Use frequently throughout the day
- Preservative-free recommended for frequent use
- Gels and ointments for overnight use

**Lifestyle Changes:**
- Blink regularly (especially during screen use)
- Take breaks when reading or using computer (20-20-20 rule)
- Use a humidifier
- Protect eyes from wind
- Stay hydrated
- Omega-3 supplements may help

**Tear Conservation:**
- Punctal plugs: Block tear drainage
- Warm compresses: Help meibomian glands
- Eyelid massage
- Lid scrubs for blepharitis

**Prescription Options:**
- Anti-inflammatory drops (cyclosporine, lifitegrast)
- Antibiotic doxycycline for meibomian gland issues
- Steroid drops for short-term use`,
      keyTerms: [
        { term: 'meibomian glands', definition: 'Oil glands in eyelids that produce the lipid layer of tears', pronunciation: 'my-BOH-mee-an' },
        { term: 'aqueous deficient', definition: 'Not enough watery tears being produced', pronunciation: 'AY-kwee-us' },
        { term: 'evaporative dry eye', definition: 'Tears dry too quickly due to poor oil layer' },
        { term: 'tear breakup time', definition: 'Test measuring how long tears stay stable on eye surface', pronunciation: 'TBUT' },
        { term: 'punctal plugs', definition: 'Tiny devices that block tear drainage to keep tears in eye longer' },
      ],
      analogies: [
        'The tear film layers are like a layered cake - each layer has a different purpose.',
        'Meibomian gland dysfunction is like having a blocked nozzle on a spray bottle - the oil can\'t get out.',
      ],
    },
    3: {
      level: 3,
      summary: 'Dry eye disease is a multifactorial disorder of the tear film and ocular surface characterized by loss of tear film homeostasis, ocular surface symptoms, inflammation, and neurosensory abnormalities.',
      explanation: `## Pathophysiology

**Tear Film Homeostasis:**
Normal tear film relies on balance between secretion, distribution, and drainage. Disruption at any level causes dry eye.

**Vicious Cycle of Dry Eye:**
1. Initial insult (decreased production or increased evaporation)
2. Tear film hyperosmolarity (increased salt concentration)
3. Ocular surface epithelial damage
4. Inflammatory cytokine release (IL-1, IL-6, TNF-α, MMP-9)
5. Goblet cell loss → mucin deficiency
6. Further tear film instability
7. More epithelial damage (self-perpetuating cycle)

**Neurosensory Abnormalities:**
- Early: Nociceptor activation (pain, burning)
- Chronic: Nerve damage, decreased sensation (paradoxical improvement of symptoms with worsening signs)

## Classification

**DEWS II (Dry Eye Workshop) Classification:**

**Etiologic Categories:**
1. **Aqueous deficient** (Sjögren vs non-Sjögren)
2. **Evaporative** (MGD, exposed ocular surface, others)
3. **Mixed** (most common)

**Severity Grading:**

| Grade | Signs |
|-------|-------|
| 1 | Mild conjunctival hyperemia, loss of meibomian gland secretions |
| 2 | Conjunctival staining, fluorescein staining of cornea |
| 3 | Significant corneal staining, filamentary keratitis |
| 4 | Corneal ulcer, plaque, keratinization |

## Diagnostic Tests

**Tear Film Assessment:**
- **Tear breakup time (TBUT)**: <10 seconds = abnormal
- **Schirmer I** (without anesthesia): <10 mm/5 min = aqueous deficiency
- **Schirmer II** (with anesthesia): <5 mm/5 min = severe deficiency
- **Phenol red thread test**: <10 mm/15 sec = abnormal

**Surface Staining:**
- **Fluorescein**: Corneal epithelial defects (Oxford scale)
- **Lissamine green/Rose Bengal**: Damaged/conjunctival cells (especially goblet cells)

**Osmolarity Testing:**
- Tear osmolarity >308 mOsm/L suggests dry eye
- Inter-eye difference >5 mOsm/L also significant

**Meibomian Gland Assessment:**
- Expression quality: Clear, cloudy, inspissated, no secretion
- Gland dropout: Meibography shows gland loss
- Atrophy: Graded 0-3 based on loss

**Inflammatory Markers:**
- MMP-9: Elevated in dry eye inflammation
- Tear cytokines: IL-1β, IL-6, TNF-α elevated

## Management by Severity

**Level 1 (Mild):**
- Environmental modifications
- Frequent artificial tears (preservative-free if >4x/day)
- Omega-3 fatty acids
- Blink exercises, lid hygiene

**Level 2 (Moderate):**
- All Level 1 interventions
- Anti-inflammatory therapy:
  - Cyclosporine 0.05% or 0.09% (Restasis, Cequa)
  - Lifitegrast 5% (Xiidra)
  - Short-term topical steroids (loteprednol, fluorometholone)
- Punctal plugs (silicone or collagen)
- Liposomal sprays

**Level 3 (Severe):**
- All Level 2 interventions
- Autologous serum eye drops
- Scleral lenses for surface protection
- Systemic anti-inflammatories (doxycycline 100 mg BID, azithromycin)
- Punctal cautery
- Consider secretagogues (pilocarpine, cevimeline) for Sjögren

**Meibomian Gland Dysfunction-Specific:**
- Warm compresses (15 min/day)
- Lid massage (expression of glands)
- Lid scrubs (hypochlorous acid, baby shampoo)
- Thermal pulsation (Lipiflow, iLux)
- Intense pulsed light (IPL) therapy
- Meibomian gland probing

## Special Considerations

**Contact Lens Wearers:**
- Use daily disposables
- Preservative-free rewetting drops
- Consider switching to glasses
- Treating underlying MGD improves tolerance

**Post-LASIK:**
- Temporary nerve damage causes decreased sensation
- Aggressive lubrication required
- Most cases resolve within 6 months

**Computer Vision Syndrome:**
- Blink rate decreases from ~15/min to ~5/min
- 20-20-20 rule: Every 20 min, look 20 ft away for 20 sec
- Position screen below eye level (less lid opening)
- Artificial tears before and after computer use

**Sjögren Syndrome:**
- Systemic autoimmune disease
- Keratoconjunctivitis sicca is hallmark
- Requires rheumatology co-management
- Higher risk of ocular surface complications`,
      keyTerms: [
        { term: 'hyperosmolarity', definition: 'Increased solute concentration in tears; key driver of dry eye inflammation', pronunciation: 'HY-per-oz-muh-LAR-ih-tee' },
        { term: 'MMP-9', definition: 'Matrix metalloproteinase-9; inflammatory enzyme elevated in dry eye tears' },
        { term: 'filamentary keratitis', definition: 'Strands of mucus and cells attached to corneal surface in severe dry eye' },
        { term: 'autologous serum', definition: 'Eye drops made from patient\'s own blood; contains growth factors' },
        { term: 'neuropathic pain', definition: 'Pain from nerve damage; explains symptom-sign discordance in chronic dry eye' },
      ],
      clinicalNotes: 'Most patients have mixed aqueous deficient and evaporative components. Assess for both. MMP-9 point-of-care test (InflammaDry) useful when diagnosis uncertain. Remember to screen for autoimmune disease in unexplained aqueous deficiency.',
    },
    4: {
      level: 4,
      summary: 'Dry eye represents a spectrum of tear film dysfunction with complex inflammatory pathophysiology requiring multimodal treatment addressing both tear deficiency and evaporative components with individualized therapeutic escalation.',
      explanation: `## Advanced Pathophysiology

**Tear Film Osmolarity:**
- Normal: 302 ± 6 mOsm/L
- Dry eye: >308 mOsm/L
- Hyperosmolarity triggers:
  - MAPK signaling pathways
  - NF-κB activation
  - Pro-inflammatory cytokine production
  - Epithelial cell apoptosis
  - Goblet cell death

**Inflammatory Cascade:**
| Mediator | Source | Effect |
|----------|--------|--------|
| IL-1β | Epithelial cells | Inflammation, MMP activation |
| IL-6 | Epithelial, immune cells | Acute phase response |
| IL-8 | Epithelial cells | Neutrophil chemotaxis |
| TNF-α | Immune cells | Inflammation, apoptosis |
| MMP-9 | Epithelial cells | Epithelial barrier breakdown |
| TGF-β | Various | Fibrosis, goblet cell loss |

**Neurogenic Inflammation:**
- Corneal nerves release substance P, CGRP
- Nociceptor sensitization (allodynia)
- Chronic: Nerve fiber damage, decreased density
- Explains paradoxical burning from treatment

**Goblet Cell Dysfunction:**
- Mucin (MUC5AC) production decreases
- Conjunctival squamous metaplasia
- Loss of mucin layer → poor tear adherence
- Increased friction during blinking

**Meibomian Gland Pathology:**
- Ductal hyperkeratinization
- Obstruction by keratinized plugs
- Gland atrophy and dropout (irreversible)
- Altered lipid composition (decreased quality)
- Staph colonization → lipase production

## Comprehensive Diagnostic Approach

**Sign-Symptom Discordance:**
- Early: Symptoms > signs (hyperesthesia)
- Mid: Correlation improves
- Late: Signs > symptoms (neuropathy)
- May have severe signs with minimal symptoms

**Objective Imaging:**
- **TearLab osmolarity**: Inter-eye difference >5 mOsm/L most sensitive
- **InflammaDry (MMP-9)**: 74% sensitivity, 94% specificity
- **Oculus Keratograph**: Non-invasive meibography, NIKBUT
- **LipiView**: Lipid layer thickness (interference patterns)
- **Anterior segment OCT**: Tear meniscus height (<0.2 mm abnormal)

**Staining Grading Systems:**

**Oxford Schema (Fluorescein):**
| Grade | Pattern | Extent |
|-------|---------|--------|
| 0 | None | - |
| I | Minor punctate | <25% |
| II | Punctate | 25-50% |
| III | Confluent | 50-75% |
| IV | Confluent with plaque | >75% |

**Sjögren's International Collaborative Clinical Alliance (SICCA)**
- standardized scoring for clinical trials
- Combines fluorescein, lissamine green, ocular surface staining

## Advanced Therapeutics

**Anti-inflammatory Therapy:**

**Cyclosporine A (Restasis, Cequa):**
- Calcineurin inhibitor → reduces T-cell activation
- Increases tear production (8 weeks for effect)
- Reduces inflammatory markers
- Burning common initially (30-40%)
- New formulations: Nanomicellar (Cequa) better penetration

**Lifitegrast (Xiidra):**
- LFA-1/ICAM-1 antagonist
- Reduces T-cell infiltration
- Faster onset than cyclosporine (2-4 weeks)
- Also causes initial burning

**Topical Corticosteroids:**
- Loteprednol etabonate 0.25% (soft steroid)
- Fluorometholone 0.1%
- Short-term bridge to anti-inflammatory effect
- Monitor IOP, cataract progression

**Meibomian Gland Treatments:**

**Thermal Pulsation (Lipiflow):**
- 12-minute, 42°C inner lid + outer lid heating
- Simultaneous gland expression
- Single treatment lasts 6-12 months
- Cost considerations

**Intense Pulsed Light (IPL):**
- 4-6 treatments, 3-4 weeks apart
- Reduces telangiectasias, inflammatory mediators
- May improve gland function
- Often combined with meibomian gland expression

**Meibomian Gland Probing:**
- For obstructive MGD with dropout
- Opens obstructed orifices
- Provides immediate relief
- May need repeat procedures

**Punctal Occlusion:**
- Collagen plugs (resorb 3-6 months) - trial
- Silicone plugs (permanent/removable)
- Intracanalicular plugs (SmartPlug)
- Thermal or laser cautery (permanent)
- Contra: epiphora, canaliculitis risk

**Advanced Interventions:**
- **Autologous serum**: 20% concentration, hourly use
- **Platelet-rich plasma**: Similar to serum, more growth factors
- **Scleral lenses**: Fluid reservoir protects cornea
- **Amniotic membrane**: For severe surface disease
- **Secretagogues**: Pilocarpine 5 mg TID, cevimeline 30 mg TID

## Special Populations

**Glaucoma Patients:**
- Preserved benzalkonium chloride (BAK) worsens dry eye
- Consider preservative-free drops
- Laser/surgical treatment may reduce drop burden

**Cataract Surgery:**
- Exacerbates pre-existing dry eye
- Corneal nerve damage from incisions
- Optimize dry eye before surgery (planned for 3 months prior)
- Improves IOL calculations and outcomes

**Ocular Graft-vs-Host Disease:**
- Severe dry eye common
- Requires systemic immunosuppression
- Topical cyclosporine compounded (higher concentration)
- Serum drops often needed`,
      keyTerms: [
        { term: 'NIKBUT', definition: 'Non-invasive keratograph tear breakup time; automated measurement of tear stability' },
        { term: 'LFA-1', definition: 'Lymphocyte function-associated antigen-1; target of lifitegrast for T-cell inhibition' },
        { term: 'squamous metaplasia', definition: 'Transformation of mucus-secreting epithelium to dry, keratinized cells' },
        { term: 'telangiectasia', definition: 'Dilated blood vessels; common in lid margin disease' },
        { term: 'amniotic membrane', definition: 'Biological dressing with anti-inflammatory and anti-scarring properties' },
      ],
      clinicalNotes: 'Treatment resistance warrants re-evaluation: check for alternative diagnoses (allergy, neuropathic pain, conjunctivochalasis), consider serum drops, evaluate for systemic autoimmune disease. Punctal plugs before cyclosporine may improve medication retention.',
    },
    5: {
      level: 5,
      summary: 'Contemporary dry eye management integrates evolving understanding of neuropathic pain, tear film osmolarity-driven inflammation, and multimodal therapy targeting both evaporative and aqueous deficient components with personalized treatment algorithms.',
      explanation: `## Current Concepts in Pathophysiology

**Dry Eye as Neuropathic Pain Disorder:**
- Corneal nerve density: 300-600 times more sensitive than skin
- Central sensitization develops in chronic disease
- Explains symptoms despite adequate tear production
- Neuropathic features: Allodynia (light hurts), hyperalgesia
- May require neuromodulators (gabapentin, pregabalin)

**Tear Film as Integrated System:**
DEWS II (2017) framework emphasizes:
- **Tear film instability** is central to diagnosis
- **Hyperosmolarity** is core mechanism
- **Ocular surface inflammation** is self-perpetuating
- **Neurosensory abnormalities** affect symptoms

**Lipid Layer Composition:**
- Polar lipids: Phospholipids, sphingomyelins (interface)
- Non-polar: Wax esters, cholesterol esters (surface)
- MGD alters wax ester:cholesterol ester ratio
- Increased melting point → solid at body temperature
- Compromises barrier function

**Microbiome Considerations:**
- Lid margin: Staphylococcus, Corynebacterium, Propionibacterium
- Dysbiosis contributes to MGD, inflammation
- S. aureus produces lipase → degrades meibum
- Azithromycin topical has antimicrobial + anti-inflammatory effects

## Diagnostic Algorithm (DEWS II)

Diagnostic Flow:
- Symptomatic Patient presents
- Positive questionnaire (OSDI, SPEED) confirmed
- Examination findings - DED diagnosed if any of:
   - Tear film instability (TBUT less than 10 seconds)
   - Ocular surface staining present
   - Tear osmolarity greater than 308 mOsm/L
- Etiology assessment:
   - Aqueous deficient (Schirmer, glands)
   - Evaporative (MGD, exposure)
- Severity grading
- Targeted therapy

**Validated Questionnaires:**
- **OSDI (Ocular Surface Disease Index)**: 0-100, >23 = severe
- **SPEED (Standard Patient Evaluation of Eye Dryness)**: Frequency + severity
- **DEQ-5 (Dry Eye Questionnaire 5)**: Brief, sensitive

## Therapeutic Escalation Algorithm

**Step 1: Lubrication & Environment**
- Artificial tears q2h while awake
- Nightly ointment
- Omega-3 (re-esterified form, 2000-3000 mg/day)
- Environmental modifications
- Blink exercises (complete blink)

**Step 2: Anti-inflammatory + Tear Conservation**
- Add cyclosporine OR lifitegrast
- Short-course steroid bridge (loteprednol QID × 2-4 weeks)
- Punctal plugs (if not contraindicated)
- Lid hygiene + warm compresses
- Doxycycline 50 mg BID (for MGD)

**Step 3: Advanced MGD Treatment**
- Thermal pulsation OR IPL + expression
- Consider meibomian gland probing
- Oral azithromycin (if applicable)
- Clindamycin topical for lid margin

**Step 4: Surgical Options**
- Punctal cautery
- Partial tarsorrhaphy (for exposure)
- Salivary gland transplantation (extreme cases)

**Step 5: Specialty Drops**
- Autologous serum 20% (q2h)
- Platelet-rich plasma
- Ripasudil (ROCK inhibitor) - investigational
- Diquafosol (P2Y2 agonist) - approved in Japan

## Emerging Therapeutics

**Neuroregeneration:**
- Nerve growth factor (NGF) eye drops
- Recombinant human NGF (cenegermin) approved for neurotrophic keratitis
- Being studied for dry eye

**Secretagogues:**
- Diquafosol tetrasodium (P2Y2 receptor agonist)
- Stimulates tear, mucin, lipid secretion
- Available in Japan (Diquas)
- Rebamipide (mucin secretagogue)

**Anti-inflammatory Pipeline:**
- RGN-259 (thymosin beta-4): Anti-inflammatory, healing
- NANIX (nanomicellar cyclosporine): Better penetration
- RT-101 (resolvin D1): Pro-resolution lipid mediator

**Anti-fibrotic:**
- ROCK inhibitors (ripasudil, netarsudil)
- Promote wound healing, reduce scarring
- Also lower IOP

**Microbiome Modulation:**
- Topical azithromycin
- Oral azithromycin for MGD
- Hypochlorous acid for lid hygiene
- Future: Probiotic therapy

## Special Management Scenarios

**Refractory Dry Eye:**
1. Reconfirm diagnosis (check for mimics)
2. Assess compliance
3. Combination therapy
4. Serum drops
5. Consider neurosensory component
6. Scleral lens

**Dry Eye Post-Cataract Surgery:**
- Affects 30-50% of patients
- Optimizing before surgery improves outcomes
- Continue anti-inflammatory through surgery
- Preservative-free drops
- Consider dropless cataract surgery approaches

**Patient with Glaucoma + Dry Eye:**
- Preservative-free glaucoma meds
- Consider laser (SLT) to reduce drop burden
- Minimize BAK exposure
- Treat dry eye aggressively
- Surgical options if uncontrolled

**Pregnancy/Lactation:**
- Hormonal changes may worsen dry eye
- Safe options: Artificial tears, warm compresses
- Avoid: Doxycycline, systemic cyclosporine
- Lifitegrast/cyclosporine: Unknown safety, generally avoid

## Quality of Life Considerations

**Impact on Activities:**
- Reading: Reduced blink rate exacerbates symptoms
- Driving: Visual fluctuation dangerous
- Computer work: Affects productivity
- Social: Chronic discomfort affects mood

**Treatment Burden:**
- Drops q2h = 8+ times/day
- High cost: Prescription drops expensive
- Adhesion decreases over time
- Simplify regimens when possible

**Cost-Effectiveness:**
- Generic cyclosporine: Restasis generic available
- Over-the-counter options first-line
- IPL/thermal pulsation: Upfront cost, may reduce long-term med use
- Punctal plugs: One-time cost, reversible

## Practice Patterns and Controversies

**Punctal Plugs:**
- Before or during anti-inflammatory therapy?
- Silicone vs collagen trial first?
- Risk of epiphora (rare with partial plugs)
- Canalingulitis risk (higher with intracanalicular)

**Topical Steroids:**
- Always bridge with steroids starting anti-inflammatory?
- Duration: 2 weeks vs 4 weeks vs 6 weeks?
- IOP monitoring essential

**Testing:**
- Osmularity, MMP-9: Cost vs clinical value
- Many clinicians diagnose based on clinical exam
- Testing most valuable when diagnosis unclear

**Omega-3 Supplementation:**
- DREAM study showed no benefit overall
- Possible benefit in specific phenotypes
- Re-esterified form may be superior
- Still reasonable low-risk adjunct`,
      keyTerms: [
        { term: 'central sensitization', definition: 'Heightened pain sensitivity in central nervous system; explains chronic dry eye pain' },
        { term: 'allodynia', definition: 'Pain from normally non-painful stimuli (e.g., light, air)' },
        { term: 'DEWS II', definition: 'Dry Eye Workshop II 2017; international consensus on dry eye definition and management' },
        { term: 'P2Y2 agonist', definition: 'Drug that stimulates purinergic receptors to increase tear/mucin secretion' },
        { term: 'ROCK inhibitor', definition: 'Rho-associated kinase inhibitor; promotes healing, anti-fibrotic' },
      ],
      clinicalNotes: `Key clinical pearls:

1. **Most patients have mixed mechanism**: Assess both aqueous and evaporative components. Treat both simultaneously.

2. **Symptom-sign discordance is common**: Neuropathic pain explains symptoms despite adequate tears. Consider pain-modifying agents.

3. **Anti-inflammatory is cornerstone**: Cyclosporine/lifitegrast require 8-12 weeks for full effect. Use steroid bridge for early relief.

4. **Lid hygiene is essential**: Even in aqueous deficiency, MGD contributes. Treat lid disease in all patients.

5. **Before cataract surgery**: Optimize dry eye for 3 months prior. Improves IOL calculations, refractive outcomes, and patient satisfaction.

6. **Refractory cases**: Think beyond drops - IPL, thermal pulsation, serum, scleral lenses. Consider alternative diagnoses (allergy, conjunctivochalasis).

7. **Patient adherence matters**: Complex regimens fail. Simplify to BID dosing when possible. Educate on chronic nature requiring ongoing therapy.`,
    },
  },

  media: [
    {
      id: 'tear-film-layers',
      type: 'diagram',
      filename: 'tear-film-layers.svg',
      title: 'Tear Film Layers',
      description: 'Three-layer structure of the tear film and their functions',
    },
    {
      id: 'dry-eye-cycle',
      type: 'diagram',
      filename: 'dry-eye-vicious-cycle.svg',
      title: 'Dry Eye Vicious Cycle',
      description: 'Self-perpetuating cycle of dry eye inflammation and damage',
    },
    {
      id: 'meibomian-gland-dysfunction',
      type: 'diagram',
      filename: 'meibomian-gland-dysfunction.svg',
      title: 'Meibomian Gland Dysfunction',
      description: 'Normal vs blocked meibomian glands',
    },
  ],

  citations: [
    {
      id: 'dews2-report',
      type: 'article',
      title: 'TFOS DEWS II Report',
      authors: ['Craig JP, Nichols KK, Akpek EK, et al.'],
      source: 'The Ocular Surface',
      url: 'https://doi.org/10.1016/j.jtos.2017.08.003',
    },
    {
      id: 'aao-dry-eye',
      type: 'textbook',
      title: 'Dry Eye Syndrome',
      source: 'AAO Basic and Clinical Science Course',
      chapter: 'Cornea and External Disease',
    },
  ],

  crossReferences: [
    { targetId: 'condition-eye-infections', targetType: 'condition', relationship: 'related', label: 'Eye Infections (Blepharitis)' },
    { targetId: 'process-eye-examination', targetType: 'process', relationship: 'related', label: 'Eye Examination' },
  ],

  tags: {
    systems: ['visual', 'integumentary'],
    topics: ['ophthalmology', 'tear film', 'meibomian glands', 'inflammation'],
    keywords: ['dry eye', 'keratoconjunctivitis sicca', 'meibomian gland dysfunction', 'artificial tears'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['ophthalmology', 'primary care'],
    },
  },

  createdAt: '2026-01-25T00:00:00.000Z',
  updatedAt: '2026-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default dryEyeDisease;
