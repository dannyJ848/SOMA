/**
 * Cataract Surgery
 *
 * Removal of the cloudy lens (cataract) and replacement with an artificial lens (IOL).
 */

import { EducationalContent } from '../../types';

export const cataractSurgeryContent: EducationalContent = {
  id: 'ophthalmology-cataract-surgery',
  type: 'topic',
  name: 'Cataract Surgery',
  alternateNames: ['Phacoemulsification', 'Lens Replacement', 'IOL Surgery'],

  levels: {
    1: {
      level: 1,
      summary: 'Cataract surgery removes a cloudy lens from your eye and replaces it with a clear artificial lens. It restores vision that has become blurry from cataracts.',
      explanation: `## What Is a Cataract?

Your eye has a lens inside that helps focus light, like a camera lens. As we age, this lens can become cloudy, like looking through a foggy window. This is called a cataract.

**Symptoms of Cataracts:**
- Blurry vision, like looking through fog
- Colors seem faded
- Glare from lights (sun, headlights)
- Double vision in one eye
- Frequent glasses prescription changes

## The Surgery

Cataract surgery is very common and very safe:

1. **Eye drops** numb your eye (no needles needed usually)
2. **Tiny cut** is made in your cornea (less than 3mm)
3. **Ultrasound** breaks up the cloudy lens
4. **Lens pieces** are gently suctioned out
5. **New lens** (IOL) is folded and inserted through tiny cut
6. **Lens unfolds** into place - no stitches needed!

## The New Lens (IOL)

The artificial lens (Intraocular Lens) is:
- Made of acrylic or silicone
- Lasts forever
- Can correct your vision (no glasses needed)
- Cannot be rejected by your body
- UV blocking protection included

## Recovery

- Most people see better the next day
- Eye drops for 4 weeks
- No heavy lifting for a week
- New glasses in 3-4 weeks
- Both eyes usually done 1-2 weeks apart`,

      keyTerms: [
        { term: 'Cataract', definition: 'Clouding of the normally clear lens of the eye' },
        { term: 'IOL', definition: 'Intraocular Lens - the artificial lens that replaces your natural lens' },
        { term: 'Cornea', definition: 'Clear front surface of the eye where the incision is made' },
        { term: 'Phacoemulsification', definition: 'Using ultrasound waves to break up the cataract for removal' },
      ],
      analogies: [
        'A cataract is like looking through a dirty windshield - hard to see clearly.',
        'The IOL is like a permanent contact lens inside your eye.',
      ],
      examples: [
        'An elderly person who can\'t read or drive anymore due to blurry vision',
        'Someone who sees halos around lights at night needs cataract surgery',
        'A person whose glasses prescription keeps changing every year',
      ],
    },

    2: {
      level: 2,
      summary: 'Cataract surgery is indicated when visual impairment interferes with daily activities. Phacoemulsification is the standard technique with excellent visual outcomes.',
      explanation: `## Indications for Surgery

**Visual Acuity:**
- 20/40 or worse in most cases
- But functional needs matter more (driver, reader)

**Functional Indications:**
- Glare affecting night driving
- Difficulty with work, hobbies, reading
- Falls or accidents due to poor vision
- Lens opacity visible on exam

**Types of Cataracts:**
- Nuclear sclerosis: Age-related central hardening
- Cortical: Spoke-like opacities
- Posterior subcapsular: "Glare cataract" (younger, diabetics, steroids)

## Surgical Technique

**Phacoemulsification (Standard):**
- 2.2-3.0 mm corneal or scleral incision
- Capsulorhexis: Circular tear in anterior capsule
- Hydrodissection: Separate lens from capsule
- Phaco probe: Ultrasound breaks up nucleus
- Irrigation/Aspiration: Remove cortex
- IOL insertion: Injected through small incision
- Self-sealing incision: Usually no sutures needed

**Extracapsular:**
- Larger incision (10-12 mm)
- Remove nucleus intact
- Sutures required
- Used when phaco not possible

**Femtosecond Laser:**
- Laser makes incisions and breaks up lens
- More expensive, not superior outcomes

## IOL Selection

**Monofocal:**
- Single focal point
- Distance or near
- Glasses for reading if set for distance
- Most common choice (covered by insurance)

**Multifocal/Toric:**
- Multiple focal points (far, intermediate, near)
- Toric corrects astigmatism
- Less reliance on glasses
- Potential for glare, halos at night`,

      keyTerms: [
        { term: 'Capsulorhexis', definition: 'Circular opening in the lens capsule to remove cataract' },
        { term: 'Hydrodissection', definition: 'Injecting fluid to separate lens from its capsule' },
        { term: 'Nucleus', definition: 'The central hard part of the lens that needs to be broken up' },
        { term: 'Cortex', definition: 'Softer outer part of the lens that must be completely removed' },
        { term: 'Toric', definition: 'Corrects astigmatism - irregular corneal curvature' },
      ],
      analogies: [
        'Capsulorhexis is like cutting a perfect circle hole in plastic wrap.',
        'The lens nucleus is like the pit of an avocado - the hard center that needs to be removed.',
      ],
      examples: [
        'Truck driver with night glare needs surgery for safety',
        'Reader who can\'t see words on page anymore',
        'Diabetic with PSC cataract from steroid use',
      ],
      clinicalNotes: 'Preoperative biometry (eye measurements) is critical for correct IOL power. A-scan measures length, keratometry measures curvature. Target: -0.50 to -0.75D (slightly myopic for good distance and near vision).',
    },

    3: {
      level: 3,
      summary: 'Cataract surgery has a >95% success rate. Complications include posterior capsule rupture, endophthalmitis, retinal detachment, and posterior capsule opacification.',
      explanation: `## Complications

**Intraoperative:**

*Posterior Capsule Rupture (PCR):*
- Most common surgical complication
- Vitreous loss occurs
- Can place IOL in sulcus or anterior chamber
- May need vitrectomy referral

*Suprachoroidal Hemorrhage:*
- Blood collects in choroid space
- More common in elderly, on blood thinners
- Can cause expulsive hemorrhage
- May need vitreoretinal surgery

*Zonular Dialysis:*
- Lens support weakness
- Common in PXF (pseudoexfoliation)
- May need capsular tension ring

**Postoperative:**

*Endophthalmitis (<0.1%):*
- Serious intraocular infection
- Usually within first week
- Need intravitreal antibiotics
- Can lead to blindness if untreated

*Posterior Capsule Opacification (PCO):*
- "After-cataract"
- 20-30% develop within 2 years
- Simple YAG laser capsulotomy fixes it
*Retinal Detachment:*
- Vitreous pulls on retina
- Risk: 1% (vs. 0.01% in phakic)
*Corneal Edema:*
- Common in first days-weeks
- Resolves spontaneously in most
- Persistent: May need endothelial cell count

## Special Situations

**Pseudoexfoliation (PXF):**
- Weak zonules, small pupil
- Higher PCR risk
- Needs capsular tension ring
- More challenging surgery

**Floppy Iris Syndrome:**
- Iris prolapses to incisions
- Associated with tamsulosin (Flomax)
- Pharmacologic strategies (atropine, phenylephrine)
- Mechanical devices (iris hooks, rings)

**High Myopia (> -6D):**
- Longer axial length
- Retinal detachment risk
- Stiffer, more fragile zonules
- May need vitreoretal backup`,

      keyTerms: [
        { term: 'Vitreous', definition: 'Jelly-like substance that fills the back of the eye' },
        { term: 'YAG laser', definition: 'Laser treatment to open cloudy posterior capsule (after-cataract)' },
        { term: 'Biometry', definition: 'Measuring the eye to determine IOL power' },
        { term: 'Pseudoexfoliation', definition: 'Condition causing weak lens support and surgical challenges' },
      ],
      analogies: [
        'PCR is like tearing a plastic bag - things spill out that shouldn\'t.',
        'YAG laser is like using a laser pointer to make a new window in the fog.',
      ],
      examples: [
        'Patient on Flomax gets floppy iris during surgery',
        'Highly myopic patient develops retinal detachment 6 months after surgery',
        'Someone with PXF needs capsular tension ring for safe surgery',
      ],
      clinicalNotes: 'Stop Flomax 2 weeks before surgery if possible. Continue blood thinners (aspirin, warfarin, DOAC) in most cases - CV risk worse than bleeding. Postoperative drops: antibiotic (4x/day x 1 week), steroid (4x/day x 4 weeks taper), NSAID (4x/day x 4 weeks).',
    },

    4: {
      level: 4,
      summary: 'Modern cataract surgery uses small-incision phacoemulsification with foldable IOLs. Premium IOLs (multifocal, toric) can reduce spectacle dependence but have tradeoffs.',
      explanation: `## Premium IOLs

**Multifocal:**
- Multiple focal points for far, intermediate, near
- Reduced spectacle dependence
- Potential side effects: glare, halos, reduced contrast
- Not for: truck drivers, pilots (night vision critical)

**Accommodating IOLs:**
- Crystalens, Symfony
- Move with ciliary muscle contraction
- Variable results, controversial longevity
- Some patients still need reading glasses

**Toric:**
- Correct corneal astigmatism >1D
- Correct orientation critical
- May rotate postoperatively
- Excellent results when properly aligned

**Light Adjustable Lens (LAL):**
- Postoperative UV light adjustments
- Fine-tune refraction
- Expensive but highly customizable

## Outcomes

**Visual Acuity:**
- 20/20 or better: >90%
- Within 2 lines of target: 98%
- Unmet refractive expectations: <2%

**Patient Satisfaction:**
- Overall: >95%
- Monofocal: Satisfied if expectations set correctly
- Premium IOL: Lower satisfaction if glare/halos bothersome

**Complications:**
- Posterior capsule rupture: 1-3%
- Endophthalmitis: 0.01-0.1%
- Retinal detachment: 0.5-1%
- CME (cystoid macular edema): 1-3%`,

      keyTerms: [
        { term: 'CME', definition: 'Cystoid Macular Edema - fluid accumulation in macula causing blurry vision' },
        { term: 'Refractive surprise', definition: 'When post-op vision is far from target, usually due to biometry error' },
        { term: 'Unmet refractive expectations', definition: 'Patient dissatisfaction with vision quality despite good acuity' },
      ],
      analogies: [
        'CME is like a water bubble on your camera sensor - blurry center vision.',
        'Premium IOLs are like progressive glasses in your eye - some people love them, others hate them.',
      ],
      examples: [
        'Patient with toric IOL has excellent distance vision without glasses',
        'Multifocal patient complains of halos at night while driving',
        'Someone with unmet refractive expectations despite 20/25 vision',
      ],
      clinicalNotes: 'Second eye surgery 1-2 weeks after first allows neuroadaptation to premium IOL. Discuss expectations: cataract surgery restores vision, it\'s LASIK-like - can choose distance or near focus but not both perfectly with standard IOLs.',
    },

    5: {
      level: 5,
      summary: 'Cataract surgery is one of the most successful procedures in medicine. Ongoing innovations include femtosecond laser, advanced IOL designs, and dropless anesthesia.',
      explanation: `## Advanced Techniques

**Femtosecond Laser-Assisted:**
- Laser creates corneal incisions
- Laser capsulotomy (perfect circle)
- Lens fragmentation
- Higher cost, not proven superior
- May be useful for complex cases

**Dropless Anesthesia:**
- Transscleral depot (dexamethasone/moxifloxacin)
- Intracameral antibiotics (cefuroxime, moxifloxacin)
- Reduced postop drop burden
- Endophthalmitis reduction proven

**Micro-Incision Cataract Surgery (MICS):**
- <1.5mm incision
- Less astigmatism
- Faster recovery
- More challenging, expensive equipment

## Controversies

**Immediate Sequential vs. Delayed:**
- Same-day vs. weeks apart
- Similar safety, outcomes
- Patient preference, convenience
- Insurance considerations

**Combined Procedures:**
- Cataract + glaucoma surgery (MIGS)
- Cataract + retinal surgery (vitreoretinal)
- Combined OR coordination
- One recovery vs. two

## Future Directions

**Accommodating IOLs:**
- Next generation designs
- Better restoration of accommodation
- May eventually make presbyopia a thing of the past

**Light Adjustable Lens:**
- Postoperative customization
- UV light fine-tuning
- Adjustable years later

**Robotics:**
- Precision lens removal
- Exact incision creation
- Experimental currently

**Gene Therapy:**
- Prevent cataracts?
- Prevent posterior capsule opacification
- Theoretical currently`,

      keyTerms: [
        { term: 'MIGS', definition: 'Minimally Invasive Glaucoma Surgery - often combined with cataract surgery' },
        { term: 'Presbyopia', definition: 'Age-related loss of near vision due to lens hardening' },
        { term: 'Neuroadaptation', definition: 'Brain learning to interpret new visual input from premium IOLs' },
      ],
      analogies: [
        'Presbyopia is like your camera\'s autofocus failing with age.',
        'Neuroadaptation is like your brain learning to see through new glasses.',
      ],
      examples: [
        'Patient has cataract surgery combined with iStent for glaucoma',
        'Second eye done 1 week after first for convenience',
        'Femtosecond laser used for dense cataract with weak zonules',
      ],
      clinicalNotes: 'The EVS trial proved intracameral cefuroxime reduces endophthalmitis 5-fold. Dropless anesthesia is gaining acceptance but cost and availability are barriers. Preoperative counseling about glare/halos is essential for premium IOL patients - manage expectations or choose monofocal.',
    },
  },

  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    topics: ['ophthalmology', 'cataract', 'surgery', 'IOL'],
    systems: ['nervous'],
    clinicalRelevance: 'medium',
    examRelevance: { usmle: false, shelf: ['ophthalmology'] },
  },

  createdAt: '2025-01-28',
  updatedAt: '2025-01-28',
  version: 1,
  status: 'published',
};
