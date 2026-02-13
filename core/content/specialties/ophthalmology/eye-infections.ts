/**
 * Eye Infections - Comprehensive Educational Content
 *
 * Covers common ocular infections including conjunctivitis, keratitis,
 * blepharitis, hordeolum, chalazion, and endophthalmitis.
 */

import { EducationalContent } from '../../types';

export const eyeInfections: EducationalContent = {
  id: 'condition-eye-infections',
  type: 'condition',
  name: 'Eye Infections',
  alternateNames: ['Ocular Infections', 'Conjunctivitis', 'Pink Eye', 'Ocular Inflammation'],

  levels: {
    1: {
      level: 1,
      summary: 'Eye infections happen when germs like bacteria or viruses get into your eyes, causing redness, discharge, and discomfort.',
      explanation: `Your eyes can get infected just like other parts of your body. Eye infections are usually caused by germs like bacteria or viruses.

**Common Eye Infections**

**Pink Eye (Conjunctivitis)**
This is the most common eye infection. The clear covering of your eye (conjunctiva) gets inflamed.
- **Viral**: Like a cold in your eye - very contagious, watery discharge
- **Bacterial**: Sticky discharge, eyelids stuck together in the morning
- **Allergic**: Not an infection, but looks similar - both eyes usually itchy

**Stye (Hordeolum)**
A red, painful bump near the edge of your eyelid, like a pimple. It's an infection of an eyelash follicle.

**Chalazion**
A bump further back on the eyelid that's not usually painful. It's a blocked oil gland, not exactly an infection but can get infected.

**Symptoms of Eye Infections**
- Red or pink eye (white part looks red)
- Discharge (watery, yellow, or green)
- Eyelids stuck together when waking up
- Itching or burning
- Feeling like something is in your eye
- Crusty eyelashes
- Swollen eyelids
- Light sensitivity

**How Eye Infections Spread**
- Touching your eyes with unwashed hands
- Sharing towels, pillowcases, or makeup
- Close contact with someone who has pink eye
- Viral pink eye spreads VERY easily

**What to Do**
- **See a doctor** to figure out what type it is
- **Don't rub** your eyes
- **Wash hands** often, especially after touching your eyes
- **Use clean towels** and wash them frequently
- **Don't share** eye makeup or drops
- **Stay home** if contagious (especially children)
- **Throw away** eye makeup and contacts used during infection
- **Warm compresses** may help styes

**Prevention Tips**
- Wash hands before touching eyes
- Don't share eye makeup or drops
- Replace eye makeup every 3-6 months
- Clean contact lenses properly
- Don't wear contacts if eyes are infected`,
      keyTerms: [
        { term: 'conjunctivitis', definition: 'Inflammation or infection of the clear covering of the eye', pronunciation: 'kon-junk-tih-VYE-tis' },
        { term: 'discharge', definition: 'Fluid or pus that comes out of the eye during an infection' },
        { term: 'stye', definition: 'A red, painful bump on the eyelid caused by an infected eyelash follicle' },
        { term: 'contagious', definition: 'Can spread from person to person' },
      ],
      analogies: [
        'Pink eye is like a cold in your eye - it\'s caused by similar viruses and spreads just as easily.',
        'A stye is like a pimple on your eyelid - it\'s a blocked, infected pore.',
      ],
      examples: [
        'A child wakes up with eyes stuck together and has to stay home from school.',
        'Someone with pink eye who wears contacts must switch to glasses until the infection clears.',
        'A person who wears eye makeup gets an infection and has to throw away all their old makeup.',
      ],
    },
    2: {
      level: 2,
      summary: 'Ocular infections encompass a spectrum of conditions from mild conjunctivitis to sight-threatening keratitis and endophthalmitis, requiring accurate diagnosis and appropriate antimicrobial therapy.',
      explanation: `## Overview of Eye Infections

Eye infections can affect different structures of the eye, from the eyelids to the internal eye. Prompt recognition and treatment prevent complications and vision loss.

## Conjunctivitis (Pink Eye)

**Viral Conjunctivitis**
- Most common cause (70-80% of infectious cases)
- Adenovirus is the most common virus
- Highly contagious for 10-14 days
- Symptoms: Watery discharge, redness, preauricular node
- Usually starts in one eye, spreads to the other
- Treatment: Supportive care, cool compresses
- Resolves in 1-3 weeks

**Bacterial Conjunctivitis**
- More common in children than adults
- Symptoms: Purulent (pus-like) discharge, matting of eyelids
- Common bacteria: Staph aureus, Strep pneumoniae, H. influenzae
- Treatment: Topical antibiotics (erythromycin, polymyxin B-trimethoprim)
- Resolves in 5-7 days with treatment

**Allergic Conjunctivitis**
- Not an infection, but important differential
- Symptoms: Itching (key feature), bilateral, stringy discharge
- Treatment: Antihistamines, mast cell stabilizers, avoid allergens

## Blepharitis

**Anterior Blepharitis**
- Inflammation of eyelid margin (eyelash follicles)
- Staphylococcal or seborrheic
- Symptoms: Red lid margins, crusting, scales on lashes
- Treatment: Lid hygiene, warm compresses, topical antibiotics

**Posterior Blepharitis**
- Inflammation of meibomian glands
- Associated with dry eye
- Symptoms: Blocked oil glands, chalazia, tear film issues
- Treatment: Warm compresses, lid massage, oral doxycycline

## Hordeolum (Stye)

**External Hordeolum**
- Infection of eyelash follicle (staph aureus)
- Red, painful nodule at lid margin
- Treatment: Warm compresses, topical antibiotics
- Resolves in 1-2 weeks

**Internal Hordeolum**
- Infection of meibomian gland
- More painful, deeper within lid
- Treatment: Warm compresses, may need incision and drainage

## Chalazion

- Chronic granuloma of meibomian gland (not acute infection)
- Painless, firm nodule away from lid margin
- May start as hordeolum
- Treatment: Warm compresses, steroid injection, or incision and drainage

## Keratitis (Corneal Infection)

**Bacterial Keratitis**
- Vision-threatening emergency
- Risk factors: Contact lenses, trauma, dry eye
- Symptoms: Pain, redness, decreased vision, discharge
- Common organisms: Pseudomonas (contacts), Staph aureus
- Treatment: Fortified antibiotics (every hour initially)

**Viral Keratitis**
- HSV keratitis: Dendritic ulcers on fluorescein stain
- VZV: Associated with shingles
- Treatment: Antiviral therapy (acyclovir, ganciclovir)

**Fungal Keratitis**
- Rare, associated with trauma/vegetable matter
- Treatment: Antifungal drops

**Acanthamoeba Keratitis**
- Contact lens-related, especially with tap water exposure
- Extremely resistant to treatment
- Severe pain out of proportion to findings

## Endophthalmitis

- Infection INSIDE the eye (vitreous)
- Vision-threatening emergency
- Types: Postoperative (most common), post-traumatic, endogenous
- Symptoms: Severe pain, vision loss, hypopyon
- Treatment: Vitreous tap/injection, vitrectomy, IV/intravitreal antibiotics

## Differential Diagnosis

| Condition | Discharge | Itching | Pain | Vision |
|-----------|-----------|---------|------|--------|
| Viral conj | Watery | Mild | Mild | Normal |
| Bacterial conj | Mucopurulent | No | Mild | Normal |
| Allergic conj | Stringy | Severe | No | Normal |
| Keratitis | Variable | Variable | Severe | Decreased |
| Dry eye | Mucous | Burning | Mild | Variable |

## Prevention

- Hand hygiene before touching eyes
- Don't share eye makeup, towels, drops
- Replace contact lens case every 3 months
- Never sleep in contact lenses (unless extended wear)
- Avoid tap water with contacts
- Remove eye makeup before sleeping
- Treat blepharitis to prevent styes/chalazia`,
      keyTerms: [
        { term: 'preauricular node', definition: 'Lymph node in front of the ear that enlarges with viral conjunctivitis', pronunciation: 'pre-aw-RIK-yoo-lar' },
        { term: 'purulent', definition: 'Containing or forming pus', pronunciation: 'PYUR-oo-lent' },
        { term: 'keratitis', definition: 'Inflammation or infection of the cornea', pronunciation: 'ker-ah-TYE-tis' },
        { term: 'hypopyon', definition: 'Pus layer in the anterior chamber of the eye', pronunciation: 'hi-po-PIE-on' },
        { term: 'fluorescein stain', definition: 'Yellow dye that highlights damage to corneal surface', pronunciation: 'floor-oh-SIN-een' },
      ],
      analogies: [
        'The cornea is like a windshield - when it gets scratched (abrasion) or infected (keratitis), you can\'t see through it clearly.',
      ],
    },
    3: {
      level: 3,
      summary: 'Ocular infections require precise anatomical diagnosis, appropriate microbiological testing, and targeted antimicrobial therapy, with urgent referral for vision-threatening conditions like infectious keratitis and endophthalmitis.',
      explanation: `## Clinical Approach to Eye Infections

**Key Questions:**
1. Visual symptoms? (Vision decreased = urgent)
2. Pain severity? (Severe pain = keratitis/endophthalmitis)
3. Contact lens use? (Higher risk for pseudomonas, acanthamoeba)
4. Recent eye surgery or trauma? (Endophthalmitis risk)
5. Systemic symptoms? (May indicate systemic illness)

## Conjunctivitis Details

**Viral Conjunctivitis:**
- **Adenovirus**: Most common, highly contagious
  - Follicular reaction on tarsal conjunctiva
  - Preauricular lymphadenopathy
  - May have pharyngitis, fever (pharyngoconjunctival fever)
  - No specific treatment; supportive care only
  - Contagious for 10-14 days
  - May cause subepithelial infiltrates (SEIs) causing glare

- **HSV conjunctivitis**:
  - Vesicular lid lesions
  - Dendritic ulcer on fluorescein stain
  - unilateral, recurrent
  - Treatment: Oral acyclovir + topical antiviral

- **VZN (herpes zoster ophthalmicus)**:
  - Follows trigeminal (V1) distribution
  - Hutchinson sign (nasal tip involvement) = ocular involvement
  - Treat with oral antivirals

**Bacterial Conjunctivitis:**
- **Hyperacute (gonococcal)**:
  - Discharge in hours, severe
  - Sexually transmitted
  - Treat with systemic ceftriaxone + topical erythromycin

- **Acute bacterial**:
  - Staph aureus, Strep pneumoniae, H. influenzae
  - Treatment: Fluoroquinolone (ofloxacin, moxifloxacin) or trimethoprim-polymyxin

- **Chronic**:
  - Staph epidermidis, Propionibacterium
  - Consider lacrimal system obstruction

## Keratitis Management

**Diagnostic Approach:**
1. **Slit lamp examination** with fluorescein staining
2. **Scrape for culture** (if vision affected, large ulcer, or atypical)
   - Chocolate agar (for Neisseria)
   - Blood agar (most bacteria)
   - Sabouraud agar (fungus)
   - PCR for viruses

**Bacterial Keratitis:**
- **Pseudomonas**: Contact lens wearers, greenish discharge, rapid progression
  - Treatment: Fortified tobramycin or cefazolin + fluoroquinolone
  - Admission for hourly drops

- **Staph aureus**: More common, slower progression
  - Treatment: Fluoroquinolone monotherapy often adequate

- **Mycobacterial**: Chronic, indolent, resistant to standard therapy
  - Treatment: Amikacin + clarithromycin

**Viral Keratitis:**
- **HSV epithelial**: Dendritic ulcer (branching with terminal bulbs)
  - Treatment: Ganciclovir gel OR oral acyclovir/valacyclovir
  - Avoid steroids in active epithelial disease

- **HSV stromal**: Immune reaction in stroma
  - Treatment: Topical steroids + antiviral (to prevent recurrence)

- **VZN**: May involve all ocular layers
  - Treatment: Oral antivirals + steroids for inflammation

**Acanthamoeba Keratitis:**
- Ring infiltrate, radial keratoneuritis
- Severe pain out of proportion
- Confocal microscopy for diagnosis
- Treatment: Polyhexamethylene biguanide (PHMB) + propamidine
- Duration: months to a year

**Fungal Keratitis:**
- Trauma with vegetable matter
- Feathery margins, satellite lesions
- Treatment: Natamycin, amphotericin B, voriconazole
- Poor prognosis, often requires corneal transplant

## Eyelid Infections

**Preseptal Cellulitis:**
- Infection anterior to orbital septum
- Eyelid redness, swelling, warmth
- No proptosis, no ophthalmoplegia, normal vision
- Treatment: Oral antibiotics (amoxicillin-clavulanate)

**Orbital Cellulitis:**
- Infection posterior to orbital septum
- Proptosis, ophthalmoplegia, decreased vision, pain with EOMs
- Medical emergency
- CT orbit to confirm
- Treatment: IV antibiotics (vancomycin + ceftriaxone)

**Lid Abscess:**
- Incision and drainage after antibiotic coverage

**Canaliculitis:**
- Actinomyces or Staph epidermidis
- Punctal swelling, discharge, tearing
- Treatment: Express concretions + penicillin-based antibiotics

## Endophthalmitis

**Postoperative (most common):**
- Onset: Days to weeks after surgery
- Organisms: Coagulase-negative Staph, Staph aureus
- Treatment: Tap/inject (vancomycin + ceftazidime) or vitrectomy

**Post-traumatic:**
- Higher risk for Bacillus, fungi
- Worse prognosis
- Vitrectomy + intravitreal antibiotics

**Endogenous:**
- Hematogenous spread (IVDU, sepsis)
- Candida common

## Special Populations

**Contact Lens Wearers:**
- NEVER use tap water for cleaning/storing
- Remove before swimming/showering
- Use daily disposables if recurrent infections
- "Rub and rinse" cleaning method
- Replace case every 3 months

**Neonates:**
- Ophthalmia neonatorum (gonorrhea, chlamydia)
- prophylaxis: Erythromycin or povidone-iodine at birth`,
      keyTerms: [
        { term: 'follicular reaction', definition: 'Small bumps on conjunctiva caused by lymphoid hyperplasia' },
        { term: 'dendritic ulcer', definition: 'Branching corneal ulcer with terminal bulbs, pathognomonic for HSV' },
        { term: 'Hutchinson sign', definition: 'Nasal tip vesicles in zoster - predicts ocular involvement' },
        { term: 'preseptal cellulitis', definition: 'Eyelid infection anterior to orbital septum' },
        { term: 'orbital cellulitis', definition: 'Infection posterior to orbital septum; sight-threatening emergency' },
        { term: 'EOMs', definition: 'Extraocular muscles; restricted movement suggests orbital process' },
      ],
      clinicalNotes: 'Any corneal ulcer with vision loss is an emergency - refer immediately. Pain out of proportion suggests acanthamoeba or fungal keratitis. Always consider herpes simplex in recurrent unilateral conjunctivitis.',
    },
    4: {
      level: 4,
      summary: 'Ocular infections require precise anatomical localization, appropriate microbiologic identification, and targeted antimicrobial therapy guided by clinical features, risk factors, and response to treatment.',
      explanation: `## Advanced Diagnostic Considerations

**Microbiologic Testing Indications:**
- Corneal infiltrate: Central, large (>2mm), atypical appearance, vision affected
- Contact lens wearer (higher acanthamoeba risk)
- Immunocompromised host
- Treatment failure
- Endophthalmitis (always tap)

**Culture Techniques:**

| Specimen | Media | Organisms Detected |
|-----------|-------|-------------------|
| Corneal scrape | Blood/chocolate agar | Bacteria |
| | Sabouraud agar | Fungi |
| | Non-nutrient agar | Acanthamoeba |
| | Viral transport media | HSV, adenovirus |
| Vitreous | Blood/chocolate | Bacteria |
| | Fungal media | Fungi |
| | PCR | Viral, fastidious |

**PCR Applications:**
- HSV/VZV detection (faster than culture)
- Adenovirus (high sensitivity, prevents inappropriate antibiotics)
- Acanthamoeba (may be negative on culture)

**In Vivo Confocal Microscopy:**
- Non-invasive, real-time imaging
- Direct visualization of Acanthamoeba cysts, fungi
- Useful for deep stromal infections

## Antimicrobial Therapy

**Topical Antibiotics for Conjunctivitis:**

| Agent | Coverage | Dosing |
|-------|----------|--------|
| Erythromycin | Gram-positive | QID |
| Azithromycin | Broad | BID |
| Bacitracin | Gram-positive | QID |
| Polymyxin B-trimethoprim | Gram-negative, some gram-positive | QID |
| Fluoroquinolones | Broad | BID-TID |
| Moxifloxacin | Broad (including atypicals) | TID |

**Fortified Antibiotics for Keratitis:**
- Prepared in pharmacy
- Concentrated formulations
- Hourly administration initially
- **Cefazolin 50 mg/mL**: Gram-positive
- **Tobramycin 15 mg/mL**: Gram-negative (especially pseudomonas)
- **Vancomycin 50 mg/mL**: MRSA, resistant organisms
- **Ceftazidime 50 mg/mL**: Pseudomonas, resistant gram-negative

**Treatment Algorithm:**
\`\`\`
          Corneal Infiltrate
                |
         Is vision affected? Or contact lens?
         /                    \
       Yes                      No
        |                        |
    Culture immediately      Consider culture
        |                        if atypical
   Fortified antibiotics     or not improving
   (hourly initially)            |
        |                  Fluoroquinolone
   Follow closely             monotherapy
   (daily if severe)            |
        |                  Re-evaluate in 2-3 days
   De-escalate based              |
on culture results         If improving: continue
                           If not improving: culture
\`\`\`

**Steroid Use in Keratitis:**
- **Generally contraindicated** in active infectious keratitis
- **HSV stromal keratitis**: Steroid + antiviral (to prevent recurrence)
- **Post-infectious**: After infection controlled, for scarring
- Rule of thumb: Never start steroids until organism identified and covered

## Ophthalmia Neonatorum

**Prevention:**
- Erythromycin 0.5% ointment or povidone-iodine 2.5% drops
- Within 24 hours of birth

**Etiologies:**

| Cause | Onset | Appearance | Treatment |
|-------|-------|------------|-----------|
| Chemical | Day 1 | Mild irritation | Observation |
| Gonorrhea | Day 2-5 | Hyperacute, purulent | Ceftriaxone 25-50 mg/kg IV/IM |
| Chlamydia | Day 5-14 | Mucopurulent | Oral erythromycin |
| HSV | Variable | Vesicles, keratitis | Acyclovir IV + topical |
| Bacterial | Variable | Purulent | Erythromycin ointment |

## Orbital Cellulitis: Preseptal vs Orbital

| Feature | Preseptal | Orbital |
|---------|-----------|---------|
| Inflammation | Eyelid only | Eyelid + orbit |
| Proptosis | No | Yes |
| Ophthalmoplegia | No | Yes |
| Vision | Normal | May be decreased |
| Pain | Mild | Severe |
| CT findings | Eyelid swelling | Orbital fat stranding, abscess |
| Treatment | PO antibiotics | IV antibiotics ± surgery |

**CT Findings in Orbital Cellulitis:**
- Increased orbital fat density
- Enlarged extraocular muscles
- Subperiosteal abscess (common in children)
- Orbital abscess

**Surgical Indications:**
- Subperiosteal or orbital abscess
- Vision loss or deterioration
- No improvement on IV antibiotics
- Frontal sinus involvement (risk of intracranial extension)

## Endophthalmitis Management

**Diagnostic Tap:**
- Anterior chamber tap (0.1 mL)
- Vitreous tap (0.3 mL via pars plana)
- Send for Gram stain, culture, PCR

**Empiric Treatment:**
- Vancomycin 1 mg/0.1 mL intravitreal
- Ceftazidime 2.25 mg/0.1 mL intravitreal
- Consider amphotericin B if fungal risk
- Systemic antibiotics for post-traumatic, endogenous

**Vitrectomy vs Tap/Inject (EVRS Trial):**
- Vitrectomy better for: Light perception only vision, or fungal infection
- Tap/inject adequate for: Hand motions or better

## Treatment Failure

**Definitions:**
- Conjunctivitis: No improvement after 7 days
- Keratitis: Worsening infiltrate, no improvement after 48 hours
- Orbital cellulitis: No improvement after 24-48 hours IV antibiotics

**Approach:**
1. Re-examine for alternate diagnosis
2. Check compliance
3. Check for resistant organism (culture)
4. Consider steroid effect (may improve signs but worsen infection)
5. Look for complications (abscess, perforation)

**Resistant Organisms:**
- MRSA: Vancomycin fortified or trimethoprim-polymyxin
- MRSE: Vancomycin fortified
- Pseudomonas resistant: Fortified tobramycin or ceftazidime
- Acanthamoeba: Double therapy (PHMB + propamidine or chlorhexidine)
- Mycobacteria: Amikacin + clarithromycin (long duration)

## Complications

**Corneal Ulcer Complications:**
- Perforation: Tissue adhesive, patch graft, keratoplasty
- Descemetocele: Thinned cornea with only Descemet's remaining
- Corneal scarring: Vision loss, may need transplant
- Glaucoma: Steroid response or trabeculitis
- Cataract: From inflammation or steroids
- Synechiae: Iris adheres to cornea or lens

**Orbital Complications:**
- Cavernous sinus thrombosis
- Intracranial abscess
- Meningitis
- Vision loss from optic nerve compression
- Permanent ophthalmoplegia

**Systemic Spread:**
- Preseptal can extend to orbital
- Orbital can extend to cavernous sinus, brain
- Endogenous from systemic infection`,
      keyTerms: [
        { term: 'fortified antibiotics', definition: 'High-concentration topical antibiotics prepared by pharmacy' },
        { term: 'descemetocele', definition: 'Corneal ulcer with only Descemet\'s membrane remaining; high perforation risk' },
        { term: 'subperiosteal abscess', definition: 'Pus collection between bone and periosteum in orbital cellulitis' },
        { term: 'synechiae', definition: 'Adhesions between iris and other ocular structures' },
        { term: 'EVRS', definition: 'Endophthalmitis Vitrectomy Study; established standard of care' },
      ],
      clinicalNotes: 'Always culture before starting fortified antibiotics for corneal ulcers. For contact lens wearers with keratitis, ask about tap water exposure and add acanthamoeba coverage if risk factors present.',
    },
    5: {
      level: 5,
      summary: 'Contemporary management of ocular infections integrates rapid diagnostic testing, targeted antimicrobial therapy, and surgical intervention when indicated, with emphasis on preventing vision loss and managing complications.',
      explanation: `## Current Evidence and Controversies

**Viral vs Bacterial Conjunctivitis:**
- Clinical differentiation has limited accuracy
- Up to 80% of antibiotic prescriptions may be unnecessary
- Adenovirus PCR (AdenoPlus) has 85-90% sensitivity
- Rapid testing reduces inappropriate antibiotics
- Watchful waiting acceptable in mild cases

**Prophylactic Antibiotics for Vitrectomy:**
- Standard: Preoperative povidone-iodine, postoperative injections
- Evidence: Reduces endophthalmitis from 0.1% to <0.05%
- Intracameral cefuroxime: Standard in Europe, gaining acceptance in US
- Controversy: Which patients need prophylaxis?

**Acanthamoeba: Diagnostic Challenge:**
- Culture sensitivity ~50%
- Confocal microscopy: Operator-dependent, ~70% sensitivity
- PCR: Improving, not yet widely available
- High index of suspicion essential
- Early diagnosis dramatically improves outcomes

## Antimicrobial Resistance Trends

**MRSA/MRSE in Ocular Infections:**
- Increasing prevalence (up to 40% in some regions)
- More common in healthcare-associated infections
- Fluoroquinolone resistance also increasing
- Culture-guided therapy essential

**Pseudomonas Resistance:**
- Multidrug-resistant strains emerging
- Higher rates in contact lens wearers
- May require combination therapy

**Resistance Patterns by Region:**
- Geographic variation significant
- Local antibiograms guide empiric therapy
- Some centers now avoid empiric fluoroquinolones

## Emerging Therapies

**Topical Agents:**
- **Besifloxacin**: New-generation fluoroquinolone, developed solely for ophthalmic use
- **Azithromycin 1%**: Dosing advantage BID, anti-inflammatory properties
- **Besifloxacin**: No systemic absorption, good resistance profile

**New Delivery Systems:**
- **Nanoparticle delivery**: Prolonged drug contact time
- **Contact lens drug delivery**: Therapeutic lenses for sustained release
- **Intraocular implants**: For endophthalmitis prophylaxis

**Antiviral Advances:**
- **Ganciclovir gel**: First topical antiviral for HSV
- **Famciclovir/valacyclovir**: Better bioavailability than acyclovir
- **Foscarnet**: For acyclovir-resistant HSV

**Anti-Acanthamoeba:**
- **Chlorhexidine 0.02%**: Alternative to PHMB
- **Miltefosine**: Oral agent for resistant cases
- **Combination therapy**: Standard of care

## Special Situations

**COVID-19 and Ocular Manifestations:**
- Conjunctivitis in ~1-3% of COVID patients
- Virus detected in tear film
- Eye protection recommended for healthcare workers
- Consider COVID in differential of viral conjunctivitis

**Post-Vaccine Conjunctivitis:**
- Rare, usually self-limited
- Adenoviral vectors (J&J, AstraZeneca) may cause conjunctivitis

**Contact Lens-Related Infections:**
- Daily disposables reduce infection risk by 12x
- "No rub" cleaning associated with higher acanthamoeba risk
- Multipurpose solutions must rub and rinse
- Overnight wear: 5-10x higher risk of keratitis

**Systemic Disease Associations:**
- **HSV keratitis**: Atopy, stress, UV exposure, immunosuppression
- **Molluscum contagiosum**: Immunocompromised
- **Chalazion**: Acne rosacea, blepharitis, meibomian dysfunction

## Surgical Considerations

**Corneal Perforation Management:**
- Small (<2mm): Cyanoacrylate glue + bandage contact lens
- Medium (2-4mm): Patch graft (corneal or scleral)
- Large (>4mm): Emergency keratoplasty
- Evisceration: Endophthalmitis with no light perception

**Orbital Abscess Drainage:**
- Indications: Large abscess, vision compromise, no IV response
- Approaches: Transnasal endoscopic (for medial lesions), external orbitotomy
- Culture-directed antibiotics post-drainage

**Evisceration vs Enucleation:**
- **Evisceration**: Faster, simpler, leaves some intraocular tissue
- **Enucleation**: Removes all eye tissue, better for malignancy
- Consider for: Endophthalmitis with NLP, painful blind eye

## Quality Improvement

**Appropriate Antibiotic Use:**
- Diagnostic stewardship: Use AdenoPlus before prescribing
- Delayed prescribing: Fill prescription only if worse in 3 days
- Avoid broad-spectrum agents for simple conjunctivitis

**Contact Lens Safety:**
- Educate on "top three" risks: Sleeping in contacts, tap water, old cases
- Daily disposables increasingly recommended
- "No water" education critical

**Prevention Strategies:**
- Hand hygiene remains most effective
- Disinfect equipment between patients
- Single-use drops when possible
- Remove makeup before sleep
- Replace mascara every 3 months

## Prognosis Factors

**Corneal Ulcer Outcomes:**
| Poor Prognosis | Better Prognosis |
|----------------|------------------|
| Central location | Peripheral |
| Large size (>3mm) | Small size |
| Vision affected | Vision normal |
| Delayed presentation | Early presentation |
| Resistant organism | Susceptible organism |
| Older patient | Younger patient |
| Systemic illness | Healthy |

**Endophthalmitis Outcomes:**
- Presenting vision best predictor
- NLP: <10% achieve ≥20/200
- HM or better: ~50% achieve ≥20/40
- Culture-positive: Worse outcomes
- Gram-negative: Worse than gram-positive`,
      keyTerms: [
        { term: 'delayed prescribing', definition: 'Prescribing antibiotics only if symptoms worsen; reduces unnecessary antibiotic use' },
        { term: 'diagnostic stewardship', definition: 'Using diagnostic testing to guide appropriate treatment' },
        { term: 'antibiogram', definition: 'Summary of antimicrobial susceptibilities for local bacterial isolates' },
        { term: 'NLP', definition: 'No light perception; worst visual acuity' },
        { term: 'HM', definition: 'Hand motions; measure of very low visual acuity' },
      ],
      clinicalNotes: `Key practice recommendations:

1. **Conjunctivitis**: Viral most common in adults; consider AdenoPlus testing before antibiotics. Bacterial more common in children.

2. **Contact lens wearers**: Any red eye = stop contacts immediately. Consider pseudomonas and acanthamoeba. Culture large ulcers.

3. **HSV keratitis**: Recurrent is common. Consider oral prophylaxis for frequent recurrences. Never use steroids without antiviral coverage.

4. **Orbital cellulitis**: CT scan to distinguish preseptal from orbital. Admit for IV antibiotics. ENT consultation for sinus drainage if needed.

5. **Endophthalmitis**: Ophthalmic emergency. Immediate referral. Tap and inject or vitrectomy based on presenting vision.

6. **Prevention**: Hand hygiene, avoid sharing eye products, proper contact lens care, prompt treatment of eyelid inflammation.`,
    },
  },

  media: [
    {
      id: 'conjunctivitis-types',
      type: 'diagram',
      filename: 'conjunctivitis-types.svg',
      title: 'Types of Conjunctivitis',
      description: 'Comparison of viral, bacterial, and allergic conjunctivitis',
    },
    {
      id: 'herpes-simplex-dendritic-ulcer',
      type: 'diagram',
      filename: 'dendritic-ulcer.svg',
      title: 'HSV Dendritic Ulcer',
      description: 'Classic dendritic appearance of HSV keratitis on fluorescein stain',
    },
    {
      id: 'eyelid-infections',
      type: 'diagram',
      filename: 'eyelid-infections.svg',
      title: 'Eyelid Infections',
      description: 'Anatomy of hordeolum, chalazion, and cellulitis',
    },
  ],

  citations: [
    {
      id: 'aao-ocular-infection',
      type: 'textbook',
      title: 'External Disease and Cornea',
      source: 'AAO Basic and Clinical Science Course',
      chapter: 'Section 8',
    },
    {
      id: 'red-eye-algorithm',
      type: 'article',
      title: 'Evaluation and Management of the Red Eye',
      authors: ['Vaughan D', 'Asbury T'],
      source: 'American Family Physician',
    },
  ],

  crossReferences: [
    { targetId: 'condition-dry-eye-disease', targetType: 'condition', relationship: 'related', label: 'Dry Eye Disease' },
    { targetId: 'process-eye-examination', targetType: 'process', relationship: 'related', label: 'Eye Examination' },
  ],

  tags: {
    systems: ['visual', 'integumentary'],
    topics: ['ophthalmology', 'infectious disease', 'cornea', 'eyelid'],
    keywords: ['conjunctivitis', 'pink eye', 'keratitis', 'cellulitis', 'hordeolum', 'chalazion'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['ophthalmology', 'primary care', 'emergency medicine'],
    },
  },

  createdAt: '2026-01-25T00:00:00.000Z',
  updatedAt: '2026-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default eyeInfections;
