/**
 * Suture Techniques and Wound Closure Methods
 *
 * Comprehensive content on wound closure including suturing techniques,
 * alternative closure methods, and post-closure care.
 */

import { EducationalContent } from '../types';

export const sutureTechniquesContent: EducationalContent = {
  id: 'wound-care-sutures',
  type: 'topic',
  name: 'Suture Techniques and Closure Methods',
  alternateNames: ['Wound Closure', 'Suturing', 'Laceration Repair'],

  levels: {
    1: {
      level: 1,
      summary: 'Doctors use different methods to close wounds and help them heal properly. These include stitches, staples, glue, and special tapes. The best method depends on the wound type and location.',
      explanation: `## How Wounds Are Closed

When you have a cut that needs medical help to close, doctors have several options. The goal is to bring the edges of the wound together so it can heal with minimal scarring.

## Methods of Closing Wounds

**1. Stitches (Sutures)**
- Thread used to sew skin together
- Can be dissolvable (disappear on their own) or removable
- Good for cuts on the face, hands, and other visible areas
- Takes 5-15 minutes to place
- Removed after 5-14 days depending on location

**2. Staples**
- Metal clips that hold wound edges together
- Very fast to apply
- Used on scalp, torso, and some limbs
- Not usually used on the face
- Removed after 7-14 days

**3. Skin Glue (Dermabond)**
- Special medical glue for skin
- Painless to apply
- Waterproof (can shower with it)
- Falls off on its own in 5-10 days
- Best for small, clean cuts
- Cannot use near eyes or on very deep wounds

**4. Steri-Strips (Tape Closures)**
- Special tape strips that pull wound edges together
- Painless and easy to use
- Good for small cuts or after stitches removed
- Fall off on their own or can be removed after 5-7 days

## How Do Doctors Choose Which Method?

| Consideration | Affects Choice |
|---------------|----------------|
| **Wound location** | Face = stitches or glue; Scalp = staples |
| **Wound size** | Small = glue or strips; Large = stitches |
| **How deep** | Deep wounds need stitches in layers |
| **Bleeding** | Staples help stop bleeding better |
| **Child's age** | Glue or strips avoid needle fear |
| **Doctor's skill** | Some methods need more training |

## Stitches - What to Expect

**Before Stitches:**
- Numbing medicine (anesthetic) injected
- May sting briefly, then area goes numb
- Cleaning of the wound
- Checking for deep damage

**During Stitches:**
- You shouldn't feel pain (area is numb)
- May feel tugging or pressure
- Takes 5-20 minutes depending on size
- Doctor may ask you to hold still

**After Stitches:**
- Keep clean and dry for 24 hours
- Light cleaning after that
- May have antibiotic ointment applied
- Bandage to protect area
- Return for removal in 5-14 days

## Dissolvable vs. Removable Stitches

**Dissolvable (Absorbable) Stitches:**
- Made from materials that break down in body
- Don't need to be removed
- Used inside the wound or in mouth
- Can take weeks to months to fully disappear
- Sometimes you can see them on surface

**Removable (Non-absorbable) Stitches:**
- Made of nylon, polypropylene, or silk
- Stronger and more precise
- Must be removed after healing
- Removed in 5-14 days depending on location
- Removal is quick and only slightly uncomfortable

## Getting Stitches Removed

**What to expect:**
- Quick procedure (1-5 minutes)
- Small scissors and tweezers used
- May feel a slight pinch or tug
- No numbing needed (not painful)
- May have small strips applied after removal

## Staples Removal

**What to expect:**
- Special removal tool (like a small staple remover)
- Quick and not usually painful
- Small marks where staples were
- May have Steri-strips applied after

## Caring for Your Wound After Closure

**Do:**
- Keep the wound clean and dry for 24 hours
- After 24 hours, gently clean with soap and water
- Apply thin layer of antibiotic ointment if recommended
- Keep covered with bandage as directed
- Protect from sun (scar can darken)
- Follow up for stitch/staple removal

**Don't:**
- Don't pull at stitches or staples
- Don't submerge in water (baths, pools) until healed
- Don't apply makeup or lotions near wound
- Don't scratch if it itches (tap instead)
- Don't pick at scabs

## Signs of Problems After Closure

**Call your doctor if:**
- Redness spreading around wound
- Increased pain after 24-48 hours
- Pus or yellow/green discharge
- Fever over 100.4°F (38°C)
- Wound edges opening up (dehiscence)
- Bleeding that won't stop with pressure

## Will I Have a Scar?

**Almost all wounds leave some scar, but:**
- Good closure technique minimizes scarring
- Face and scalp tend to heal with minimal scars
- Some areas (chest, back) tend to scar more
- Scars fade over 6-12 months
- Sun protection helps scars fade better

**Scar appearance depends on:**
- How the wound happened
- How it was closed
- Your healing ability
- Your age (younger skin scars more)
- Genetics (some people scar more easily)`,
      keyTerms: [
        { term: 'sutures', definition: 'Medical stitches used to hold wound edges together while healing' },
        { term: 'staples', definition: 'Metal clips used to close wounds, especially on the scalp and body' },
        { term: 'Dermabond', definition: 'Medical skin glue that seals wounds and falls off on its own' },
        { term: 'Steri-Strips', definition: 'Special adhesive tape strips used to close small wounds or reinforce stitches' },
        { term: 'absorbable', definition: 'Sutures that dissolve on their own and don\'t need to be removed' },
        { term: 'numbing medicine', definition: 'Medicine (anesthetic) injected to make an area numb before procedures' },
      ],
      analogies: [
        'Stitches are like sewing fabric - the thread holds edges together while "woven" new tissue forms.',
        'Staples are like paper clips holding papers together - quick and effective.',
        'Skin glue is like superglue for skin, but made specially for medical use.',
      ],
      examples: [
        'A cut on the face from a fall might be closed with tiny stitches for the best cosmetic result.',
        'A cut on the scalp might be closed with staples because hair will hide any marks and it\'s quick.',
        'A small cut on a finger might be closed with skin glue so the finger can still be used.',
      ],
      patientCounselingPoints: [
        'Keep the wound dry for 24 hours after closure, then gentle washing is okay.',
        'Don\'t pick at scabs or pull at stitches - let them come out naturally.',
        'Protect the wound from sun for the first year to help the scar fade.',
        'Come back for stitch removal on the scheduled date.',
        'Call the doctor if you see signs of infection: spreading redness, pus, fever.',
      ],
    },

    2: {
      level: 2,
      summary: 'Wound closure options include sutures (absorbable and non-absorbable), staples, tissue adhesive (glue), and adhesive strips. Selection depends on wound characteristics, location, and patient factors.',
      explanation: `## Wound Closure Methods

### Indications for Wound Closure

**Primary Intention Closure (bring edges together):**
- Clean, fresh wounds (<6-8 hours old, <24 on face/scalp)
- Wounds with minimal tissue loss
- No significant contamination
- Good blood supply
- Can be achieved with minimal tension

**Benefits of Primary Closure:**
- Faster healing
- Better cosmetic result
- Lower infection risk (closed vs. open)
- Less pain during healing
- No need for dressing changes in many cases

**Contraindications:**
- Infected wounds
- Heavily contaminated wounds
- Old wounds (>24 hours most locations, >24-48 hours for face)
- Significant tissue loss
- Crush injuries
- Animal or human bites (often left open initially)

### Suture Materials

**Absorbable Sutures (dissolve over time):**

| Material | Dissolve Time | Common Uses |
|----------|---------------|-------------|
| **Vicryl (Polyglactin 910)** | 56-70 days | Deep layers, subcuticular |
| **Monocryl (Poliglecaprone 25)** | 90-120 days | Subcuticular, facial |
| **Chromic Gut** | 7-10 days | Mucosa, pediatrics |
| **PDS (Polydioxanone)** | 180-210 days | Deep fascia, long-term support |
| **Fast-absorbing Gut** | 5-7 days | Facial skin, children |

**Non-absorbable Sutures (require removal):**

| Material | Removal Time | Common Uses |
|----------|--------------|-------------|
| **Nylon (Ethilon)** | 5-14 days | Most skin closure |
| **Prolene (Polypropylene)** | 5-14 days | Skin, running closure |
| **Silk** | 3-5 days | Mucosa, hand (rarely used now) |
| **Stainless steel wire** | 7-14 days | Abdominal wall, sternum |

**Monofilament vs. Braided:**
- **Monofilament (Nylon, Prolene):** Less infection risk, easier to handle, less tissue reaction
- **Braided (Vicryl, Silk):** Better knot security, more tissue reaction, higher infection risk

### Suture Techniques

**Simple Interrupted:**
- Most common technique
- Individual stitches placed independently
- If one breaks, others remain
- Precise approximation
- Takes more time

**Simple Running (Continuous):**
- One continuous suture
- Faster placement
- Distributes tension evenly
- If breaks at one point, may loosen

**Vertical Mattress:**
- Provides wound edge eversion
- Good for high-tension areas
- Strong closure
- Uses more suture material

**Horizontal Mattress:**
- Excellent eversion
- Good for high-tension areas
- Can leave prominent marks

**Running Subcuticular (Hidden):**
- Suture placed in dermis layer
- No external suture marks
- Excellent cosmetic result
- Requires removal (unless absorbable)

**Percutaneous (Buried) Horizontal Mattress:**
- Knots buried under surface
- Excellent cosmesis
- No suture marks
- More technically challenging

### Staple Closure

**Indications:**
- Scalp lacerations (hair hides marks)
- Truncal wounds (torso)
- Limb wounds where cosmesis less critical
- Wounds under tension
- Patients with bleeding risk (faster, less needle sticks)

**Advantages:**
- Very fast (3-5 minutes for most wounds)
- Low infection risk
- Minimal tissue reaction
- Easy to remove
- Cost-effective

**Disadvantages:**
- Less precise than sutures
- Poor cosmetic result on face
- Staples can be uncomfortable
- Can't evert edges well

**Removal:**
- Scalp: 7-10 days
- Trunk: 10-14 days
- Extremities: 10-14 days

### Tissue Adhesive (Dermabond, Octylseal)

**Composition:** 2-Octyl cyanoacrylate

**Ideal Wounds for Glue:**
- Small (<5 cm)
- Clean edges
- Low tension
- Not over joints
- Not on mucous membranes
- Not in hair-bearing areas

**Advantages:**
- Painless application
- No needle fear for children
- Waterproof (can shower)
- No removal needed
- Good cosmetic result
- Fast

**Disadvantages:**
- Can't use on deep wounds (need deeper sutures first)
- Can't use on high-tension wounds
- Expensive
- Can't use near eyes or ears
- Not for infected wounds
- Weaker than sutures

**Technique:**
1. Approximate edges with fingers or forceps
2. Apply at least 3 thin layers
3. Allow 30 seconds to dry between layers
4. No dressing needed (optional)

**Patient Instructions:**
- Don't apply ointment or liquids
- Don't pick at it
- Let it fall off naturally (5-10 days)

**Removal:** Can be removed with petroleum jelly or acetone if needed

### Adhesive Strips (Steri-Strips)

**Indications:**
- Small, superficial lacerations
- Approximation of wounds after suture removal
- Reinforcement of sutured wounds
- Patients who refuse sutures

**Advantages:**
- No needles
- Quick application
- No removal needed (fall off)
- Low cost
- Good for children

**Disadvantages:**
- Weakest closure method
- Can't close deep wounds
- Fall off if wet
- Less precise than sutures

**Application Technique:**
1. Clean and dry skin thoroughly
2. Apply tincture of benzoin or adhesive enhancer
3. Start from middle, work outward
4. Leave small gaps between strips
5. Reinforce with tape if needed

**Removal:** Fall off in 5-7 days or can be peeled off

### Suture Removal Timing

| Location | Removal Time | Reasoning |
|----------|--------------|-----------|
| **Face, eyelids** | 3-5 days | Minimize scarring, rapid healing |
| **Scalp** | 7-10 days | Good blood supply, tension |
| **Ear, nose** | 5-7 days | Cartilage, cosmesis |
| **Trunk** | 7-10 days | Moderate tension |
| **Arm, leg** | 7-10 days | Moderate tension, mobility |
| **Hand, foot** | 10-14 days | High tension, mobility |
| **Palm, sole** | 14 days | High tension, thick skin |
| **Over joints** | 10-14 days | Motion stress |

**Factors Affecting Timing:**
- Wound length and depth
- Tension on wound
- Patient age (children heal faster)
- Medical conditions (diabetes, steroids slow healing)
- Location on body

**After Removal:**
- Steri-strips may be applied for reinforcement
- Continue protecting wound for 1-2 weeks
- Avoid stretching the area`,
      keyTerms: [
        { term: 'absorbable suture', definition: 'Suture material that breaks down in tissue over time and doesn\'t require removal' },
        { term: 'non-absorbable suture', definition: 'Suture material that remains in tissue indefinitely until removed' },
        { term: 'monofilament', definition: 'Single-strand suture material with lower infection risk and tissue reaction' },
        { term: 'braided suture', definition: 'Multiple strands twisted together; better knot security but higher infection risk' },
        { term: 'subcuticular', definition: 'Suture placement within the dermis layer, creating invisible closure' },
        { term: 'eversion', definition: 'Turning wound edges outward; proper technique to prevent depressed scars' },
        { term: 'dehiscence', definition: 'Partial or complete separation of wound edges after closure' },
      ],
      analogies: [
        'The subcuticular stitch is like a hidden zipper - it closes the wound from underneath.',
        'Mattress stitches are like when you use two buttons instead of one - extra security.',
        'Staples are like industrial staples for cardboard - quick and strong but not pretty.',
      ],
      clinicalNotes: 'Clean wounds closed within 6-8 hours (up to 24 on face) have lowest infection risk. Always consider tetanus status for any traumatic wound. High-tension wounds may require layered closure or referral for specialty management.',
      patientCounselingPoints: [
        'Keep the wound dry for 24 hours after closure, then gentle washing is okay.',
        'Don\'t submerge in baths, pools, or hot tubs until healed.',
        'Protect from sun for the first year - scars darken with sun exposure.',
        'Watch for signs of infection: increasing redness, warmth, swelling, or drainage.',
        'Return for stitch/staple removal on the scheduled date.',
      ],
    },

    3: {
      level: 3,
      summary: 'Suture selection and technique are determined by wound characteristics, tissue type, and cosmetic goals. Proper wound closure requires attention to tension, eversion, and layer-by-layer approximation.',
      explanation: `## Advanced Suture Techniques and Wound Closure

### Suture Selection Principles

**Tensile Strength Requirements:**

| Tissue | Required Duration | Recommended Suture |
|--------|------------------|-------------------|
| **Muscle fascia** | 2-3 weeks | PDS, Maxon (long-term absorbable) |
| **Subcutaneous fat** | 1-2 weeks | Vicryl, Monocryl |
| **Dermis** | 1-2 weeks | Monocryl, PDS (buried) |
| **Epidermis** | 5-14 days | Nylon, Prolene (removed) |
| **Mucosa** | 5-7 days | Chromic gut, Vicryl rapide |

**Suture Size Selection:**
- **Face, eyelids:** 6-0 or 7-0 (smallest)
- **Hand, foot:** 4-0 or 5-0
- **Trunk, scalp:** 3-0 or 4-0
- **Fascia:** 0 or 1-0 (largest)
- **General principle:** Use smallest size that provides adequate strength

**Suture Material Properties:**

| Material | Strength Retention | Absorption | Tissue Reaction | Best Use |
|----------|-------------------|------------|-----------------|----------|
| **Nylon** | High | None | Minimal | Skin (removable) |
| **Prolene** | High | None | Minimal | Running closures |
| **Vicryl** | High (2-3 weeks) | 56-70 days | Moderate | Deep layers |
| **Monocryl** | Moderate (2 weeks) | 90-120 days | Minimal | Subcuticular |
| **PDS** | Moderate (2-3 weeks) | 180 days | Minimal | Fascia |
| **Chromic** | Low (few days) | 7-10 days | Moderate | Mucosa |
| **Gut** | Low (days) | 5-7 days | Moderate | Mucosa, peds |

### Suture Techniques - Detailed

**Simple Interrupted:**

*Technique:*
1. Enter skin 2-5 mm from wound edge (90° angle)
2. Exit opposite side at same distance
3. Cross needle (always) to create proper knot orientation
4. Tie square knot (2 throws opposite direction, 1 locking throw)
5. Cut 3-5 mm from knot
6. Space sutures 3-5 mm apart (face: 2-3 mm)

*Key Points:*
- Bite depth equal or slightly greater than distance from edge
- Evert edges (turn outward)
- Do not tie too tight (tissue strangulation)
- Place at equal distances and intervals

**Simple Running:**

*Technique:*
1. Start with anchor (simple interrupted or buried knot)
2. Continue parallel to wound edge
3. Maintain equal bite depth and distance
4. Finish with several locking throws
5. Can use slip knot for easier removal

*Advantages:*
- Fast (50% faster than interrupted)
- Distributes tension evenly
- Less suture material

*Disadvantages:*
- If one portion breaks, entire line may loosen
- Harder to adjust placement

**Vertical Mattress:**

*Technique:*
1. Far bite: Enter 4-8 mm from edge, exit opposite
2. Near bite: Reverse direction 2-3 mm from edge
3. Tie knot on side of near bite

*Indications:*
- High-tension wounds
- Need for eversion
- Edge undermining

Provides both deep and superficial approximation

**Horizontal Mattress:**

*Technique:*
1. Enter 4-8 mm from edge
2. Exit opposite at same distance
3. Reverse direction on same side
4. Exit 4-8 mm from original entry
5. Complete on opposite side
6. Tie knot

*Indications:*
- Edge eversion needed
- High-tension areas
- Reducing dead space

Note: Can leave prominent "railroad track" marks

**Running Subcuticular:**

*Technique:*
1. Start at one end, place buried knot
2. Pass needle horizontally through dermis
3. Alternating sides, advancing along wound
4. Keep needle within dermis (not too superficial)
5. End with exit at distal end, tie or use absorbable

*Advantages:*
- No external suture marks
- Excellent cosmetic result
- No removal needed (if absorbable)

*Requires:*
- Wound with minimal tension
- Longer wound (hard on short wounds)
- Practice to master

**Buried Horizontal Mattress:**

*Technique:*
1. Start deep in dermis on one side
2. Exit superficial on same side
3. Cross to opposite side, enter superficial
4. Exit deep on opposite side
5. Tie knot deep (buried)

*Advantages:*
- No external knots
- No suture marks
- Excellent eversion

*Disadvantages:*
- Technically challenging
- Takes time

### Layered Closure

**When Needed:**
- Full-thickness wounds
- Wounds with dead space
- High-tension wounds
- Wounds over joints or mobile areas

**Layers:**
1. **Deep fascia/muscle:** If entered (rare in skin closure)
2. **Subcutaneous fat:** Vicryl/Monocryl 3-0 or 4-0
   - Absorb dead space
   - Reduce tension on skin
   - Bury knots deep
3. **Dermmis:** If needed for extra strength
4. **Epidermis:** Final visible layer

**Dead Space Closure:**
- Prevents fluid collection (seroma, hematoma)
- Reduces infection risk
- Absorb sutures in base of wound
- Don't over-tight (can cause necrosis)

### Wound Edge Preparation

**Debridement of Ragged Edges:**
- Remove minimally viable tissue
- Create fresh, clean edges
- Don't over-excise (increases tension)

**Wound Edge Freshening:**
- Use scalpel or scissors
- Remove 1-2 mm of edge if crushed
- Creates clean, bleeding edges for better healing

**Undermining:**
- Separating skin from subcutaneous tissue
- Reduces tension on closure
- 1-2 cm undermining usually sufficient
- Careful with structures in area (nerves, vessels)

### Local Anesthesia

**Agents:**
- **Lidocaine 1%:** Standard, most common
- **Lidocaine 2%:** Longer duration, more stinging
- **Bupivacaine (Marcaine):** Long-acting (6-8 hours)
- **Lidocaine with epinephrine:** Vasoconstriction, longer anesthesia

**Buffering:**
- Add 1 mL sodium bicarb to 10 mL lidocaine
- Reduces stinging on injection
- Same effectiveness

**Injection Technique:**
1. Use small needle (27-30 gauge)
2. Insert through wound edge (not intact skin when possible)
3. Inject slowly
4. Wait 3-5 minutes for full effect
5. Max dose: 4.5 mg/kg lidocaine without epi, 7 mg/kg with epi

**Field Block:**
- Inject around wound, not into wound
- Better for large areas
- Less distortion of wound edges

### Special Considerations

**High-Tension Wounds:**
- Undermine to reduce tension
- Consider layered closure
- May need referral for specialty closure (plastic surgery)
- Consider closure by secondary intention

**Wounds Over Joints:**
- Splint in extension during healing
- Consider tension-relieving incisions (relaxing incisions)
- May need delayed closure after edema resolves

**Stellate (Star-shaped) Wounds:**
- Convert to elliptical or fusiform shape
- Remove "dog ears" (excess tissue at ends)
- May create longer but more cosmetically pleasing closure

**Dog-Ear Repair:**
- Excess tissue at wound ends
- Excise in fusiform fashion
- Extend wound length if needed
- Better than leaving protrusion

**V-Shaped Wounds (Flap):**
- May need specialized closure techniques
- Consider referral for plastic surgery

### Contraindications to Primary Closure

**Absolute:**
- Infected wounds (pus, cellulitis)
- Necrotizing soft tissue infection (emergent debridement, not closure)
- Animal bites (generally left open or delayed closure)

**Relative:**
- Heavily contaminated wounds
- Crush injuries (more damage than visible)
- Wounds >8-12 hours old (face >24 hours may be例外)
- Significant tissue loss`,
      keyTerms: [
        { term: 'tensile strength', definition: 'Force required to break suture material; affects selection for different tissues' },
        { term: 'dead space', definition: 'Potential space within wound where fluid can collect; requires closure to prevent seroma/hematoma' },
        { term: 'dog ear', definition: 'Skin protrusion at ends of closed wound due to unequal tissue lengths; may require revision' },
        { term: 'undermining', definition: 'Separation of skin from subcutaneous tissue to reduce wound tension' },
        { term: 'field block', definition: 'Local anesthesia injected around, not into, wound to minimize distortion' },
        { term: 'stellate wound', definition: 'Star-shaped irregular wound requiring conversion to fusiform shape for proper closure' },
        { term: 'eversion', definition: 'Wound edges turned outward; proper technique prevents depressed scar' },
      ],
      clinicalNotes: `Key Technical Principles:

1. **Eversion is critical**
   - Slightly raised edges heal better than flat/depressed
   - Use vertical mattress or subcuticular techniques

2. **Suture spacing:**
   - General rule: distance between sutures = 2-3 x distance from edge
   - Face: closer spacing (2-3 mm apart, 2 mm from edge)
   - Other areas: 4-5 mm apart, 3-5 mm from edge

3. **Tension management:**
   - Deep sutures absorb tension, skin sutures approximate
   - If visible tension on skin sutures, need more deep sutures
   - Undermining reduces tension (1-2 cm usually enough)

4. **Cosmetic priorities:**
   - Face: Use finest sutures, remove early (3-5 days)
   - Consider subcuticular for optimal appearance
   - Place sutures parallel to relaxed skin tension lines`,
    },

    4: {
      level: 4,
      summary: 'Advanced wound closure integrates biomechanical principles, tissue-specific suture selection, layered closure techniques, and management of complex wounds including high-tension areas and special locations.',
      explanation: `## Advanced Wound Closure: Biomechanics and Complex Techniques

### Biomechanics of Wound Closure

**Skin Tension Lines (Relaxed Skin Tension Lines - RSTL):**
- **Kraissl's lines:** Direction of maximum skin tension
- **Borges's lines:** Updated understanding, incorporate dynamic tension
- **Principle:** Incisions parallel to RSTL produce minimal scarring
- **Application:**
  - Face: Parallel to RSTL for best cosmesis
  - Extremities: Longitudinal incisions preferred
  - Wounds perpendicular to RSTL: Greater tension, wider scars

**Wound Edge Forces:**
- **Static tension:** Skin elasticity at rest
- **Dynamic tension:** Muscle pull, movement
- **Resident strains:** Pre-existing tissue tension
- **Deformation:** Stretch to achieve closure

**Suture Mechanics:**
- **Stress distribution:** Multiple sutures distribute force
- **Stress concentration:** Points of high force at suture entry
- **Creep:** Tissue elongation under constant tension
- **Stress relaxation:** Reduced tension over time at fixed length

**Conventional vs. Undermining:**
- Undermining reduces tension by:
  - Mobilizing tissue
  - Advancing edges
  - Reducing static tension
- **Risks:** Bleeding, nerve damage, increased dead space

### Complex Closure Techniques

** advancement Flaps:**
- **Indications:** Wounds that cannot be closed primarily without tension
- **Types:**
  - **V-Y advancement:** For finger tip, distal extremities
  - **Bilateral advancement:** For rectangular defects
  - **Island advancement:** Detached on all sides but pedicle
- **Technique:**
  - Incise releasing lines on one or both sides
  - Undermine to mobilize
  - Advance flap to close defect
  - Close donor site primarily

**Rotation Flaps:**
- **Indications:** Triangular or circular defects
- **Mechanism:** Rotate adjacent tissue into defect
- **Planning:** Flap length 2-3x width of defect
- **Applications:**
  - Scalp (rotation flap for moderate defects)
  - Trunk (adjacent tissue transfer)
  - Extremities (when primary closure not possible)

**Transposition Flaps:**
- **Indications:** Wounds needing adjacent specialized tissue
- **Mechanism:** Move tissue from donor site over intervening tissue
- **Examples:**
  - **Limberg flap:** Rhomboid defect, 60° angles
  - **Dufourmentel flap:** Rhomboid, modified angles
  - **Note:** Often beyond basic scope; referral consideration

**Z-Plasty:**
- **Indications:**
  - Wound contracture release
  - Scar lengthening (re-alignment along RSTL)
  - Changing scar direction
  - Releasing webs or bands
- **Mechanism:** Transposition of triangular flaps
- **Geometry:** 60° angles typical; each angle produces length gain
- **Applications:**
  - Web contractures (finger, axilla, neck)
  - Constricted scars
  - Wound revision

**M-Plasty and V-Plasty:**
- **Indications:** Wound end revision
- **Purpose:** Reduce length while maintaining closure
- **Technique:**
  - M-plasty: Small M-shaped excision at wound end
  - V-plasty: V-shaped closure at tip

### High-Tension Closure Techniques

**Tension-Relieving Sutures:**
- **Far-near-far-near (horizontal mattress):**
  - Far bites 8-10 mm from edge
  - Near bites 2-3 mm from edge
  - Relieves tension on central wound
  - Placed first (before interrupted sutures)

**Retention Sutures:**
- **Purpose:** Absorb deep tension
- **Material:** Large absorbable (0 or 1-0 Vicryl/PDS)
- **Placement:** Deep fascia or dermis
- **Removed/absorb:** Do not remove (buried, absorbable)

**Progressive Tension Sutures:**
- **Technique:**
  - Multiple sutures placed with incremental tension
  - Prevents dog-ears
  - Distributes tension evenly
- **Applications:** Large defects, undermining

**Dermal (Buried) Sutures:**
- **Monocryl 4-0 or 5-0:**
  - Placed in dermis
  - Provides tensile strength
  - Absorbs over 90-120 days
  - Allows surface sutures to be removed early

### Specialized Anatomic Considerations

**Facial Wounds:**
- **Cosmetic priority:** Maximal effort for best scar
- **RSTL knowledge:** Essential for planning
- **Suture selection:** 6-0 or 7-0 Nylon or Prolene
- **Layered closure:**
  - Deep: Absorbable (5-0 Monocryl or Vicryl)
  - Surface: Non-absorbable (6-0 or 7-0)
- **Removal:** Early (3-5 days) to minimize suture marks
- **Post-op:**
  - Sun protection (SPF 30+) for 1 year
  - Silicone sheeting for scar management
  - Consider scar revision after 6-12 months

**Lip Wounds:**
- **Vermilion border:** Must align precisely (<0.5 mm error)
- **Muscle layer:** Orbicularis oris closure important
- **Layered closure essential:** Prevents notching
- **Marking:** Mark vermilion border before anesthesia

**Eyelid Wounds:**
- **Precise alignment:** Critical for function
- **Marginal sutures:** 6-0 or 7-0 silk or nylon
- **Avoid tension:** Can cause ectropion
- **Specialist referral:** Often indicated

**Ear Wounds:**
- **Cartilage exposure:** If exposed, closure urgent
- **Perichondrium:** Preserve if possible
- **Chondritis risk:** High if cartilage exposed

**Nose Wounds:**
- **Cartilage:** Often requires specialist
- **Internal lining:** May need flap
- **External alignment:** Critical cosmesis

**Scalp Wounds:**
- **Galea:** If lacerated, close with absorbable
- **Staples preferred:** Fast, hair hides marks
- **Shave around wound:** For sutures if needed
- **Hair ties:** Can be used to approximate

**Hand Wounds:**
- **Function over cosmesis:** Alignment critical
- **Neurovascular bundle:** Assess before anesthesia
- **Tendon examination:** Test function before closure
- **High-risk area:** Specialist referral often indicated

**Fingertip Amputations:**
- **<1 cm:** Can heal by secondary intention
- **Larger:** Consider V-Y advancement flap
- **Specialist:** Hand surgery referral

### Pediatric Considerations

**Differences from Adults:**
- More subcutaneous fat
- Less collagen (more tearing)
- Faster healing (consider earlier suture removal)
- Needle anxiety (consider glue, sedation)

**Age-Specific Approaches:**
- **Infants <1 year:**
  - Consider absorbable sutures for face
  - Fast-absorbing gut (5-7 days)
  - Avoid general anesthesia when possible

- **Toddlers 1-3 years:**
  - High distress with needles
  - Glue or absorbable sutures preferred
  - Consider papoose board, distraction
  - Sedation sometimes needed

- **Children >3 years:**
  - Cooperative with preparation
  - Can have standard closure
  - Involve child in process (choice of dressings)

**Suture Removal Timing - Pediatrics:**
- Face: 3-4 days
- Scalp: 5-7 days
- Trunk: 7-10 days
- Extremities: 7-10 days
- Hand/foot: 10-12 days

### Wound Closure Complications

**Dehiscence (Wound Separation):**
- **Causes:**
  - Too much tension
  - Early suture removal
  - Infection
  - Patient factors (steroids, diabetes)
- **Treatment:**
  - Clean, debride if needed
  - Reclose if <24 hours and clean
  - Secondary intention if infected or late

**Hypergranulation:**
- Excessive granulation above wound level
- Treatment: Silver nitrate cautery, topical steroids

**Hypertrophic Scarring:**
- Raised scar within wound boundaries
- Risk factors: Wound tension, infection, genetics
- Prevention: Minimal tension, early removal (face)

**Keloid Formation:**
- Scar extends beyond wound boundaries
- More common in darker skin types
- High-risk areas: Earlobe, sternum, shoulder
- Treatment: Steroids, pressure therapy, referral

**Suture Marks:**
- Cross-hatching from sutures
- Prevention: Early removal, minimal tension

**Infection:**
- Signs: Erythema, warmth, purulence
- Treatment: Debridement, antibiotics
- May require opening (secondary intention)`,
      keyTerms: [
        { term: 'RSTL', definition: 'Relaxed skin tension lines; directional lines of minimal skin tension used to plan incisions for optimal cosmesis' },
        { term: 'advancement flap', definition: 'Flap moved directly forward to cover adjacent defect without rotation' },
        { term: 'rotation flap', definition: 'Flap moved in an arc around a pivot point to cover adjacent defect' },
        { term: 'transposition flap', definition: 'Flap moved over intervening tissue to reach defect, donor site closed separately' },
        { term: 'Z-plasty', definition: 'Transposition of two triangular flaps to realign scar, lengthen contracture, or change direction' },
        { term: 'vermilion border', definition: 'Sharp demarcation between lip skin and mucosa; critical landmark for lip closure' },
        { term: 'ectropion', definition: 'Outward turning of eyelid; complication of eyelid wound closure with tension' },
      ],
      clinicalNotes: `Complex Closure Decision Points:

1. **When to refer:**
   - Wounds requiring flaps or grafts
   - Facial lacerations with tissue loss
   - Lip, eyelid, ear, nasal injuries involving cartilage/mucosa
   - Hand wounds with tendon/nerve involvement
   - Animal bites (consider infectious disease)
   - Large defects (>3 cm) on face

2. **When to use specialty techniques:**
   - High tension wounds (consider undermining, flaps)
   - Wounds across RSTL (consider Z-plasty revision later)
   - Dog-ears (excise or plan revision)

3. **Documentation essentials:**
   - Time of injury
   - Neurovascular status before and after closure
   - Tetanus status
   - Structures involved (tendon, nerve, bone, joint)
   - Photographs (with consent)`,
    },

    5: {
      level: 5,
      summary: 'Contemporary wound closure integrates biomechanical principles, evidence-based suture selection, specialized flap techniques, and emerging technologies including tissue adhesives and barbed sutures for optimal outcomes.',
      explanation: `## State-of-the-Art Wound Closure and Reconstruction

### Advanced Suture Materials and Technologies

**Barbed Sutures (Knotless):**
- **Materials:**
  - Monocryl (V-Loc): Absorbable, 120 days
  - PDS (Quill): Long-term absorbable
  - Nylon (Stratafix): Non-absorbable
- **Mechanism:**
  - Unidirectional or bidirectional barbs
  - Distribute tension along entire suture line
  - No knots needed (self-anchoring)
- **Advantages:**
  - Faster closure (30-50% time savings)
  - More even tension distribution
  - Less foreign body material (no knots)
  - Good for minimally invasive surgery
- **Disadvantages:**
  - Higher cost
  - Learning curve
  - Can cause tissue trauma if not placed correctly
  - Difficult to remove (if non-absorbable)

**Rapid-Absorbing Sutures:**
- **Fast-Absorbing Gut:** 5-7 days
- **Vicryl Rapide:** 14 days
- **Monomacs:** 7-10 days
- **Indications:** Pediatric facial wounds, mucosal closures

**Monocryl (Poliglecaprone 25):**
- **Advantages:**
  - Monofilament (low infection risk)
  - Minimal tissue reaction
  - High initial tensile strength
  - Smooth passage through tissue
- **Best uses:** Subcuticular closure, facial dermis

**Long-Term Absorbables:**
- **PDS (Polydioxanone):** 180 days
  - Fascia, long-term support
  - Minimal tissue reaction
- **Maxon (Polytrimethylene carbonate):** 180 days
  - Similar to PDS
  - Less stiff

### Evidence-Based Suture Techniques

**Meta-Analyses Findings:**

**Continuous vs. Interrupted:**
- Similar cosmetic outcomes
- Continuous faster (30-50% time)
- Continuous: higher risk of complete dehiscence if one portion fails
- Patient satisfaction similar

**Absorbable vs. Non-absorbable for Facial Lacerations:**
- Similar cosmetic outcomes
- Absorbable eliminates removal visit
- May have higher rate of suture track formation
- Cost: Absorbable higher material cost, lower visit cost

**Tissue Adhesive vs. Sutures:**
- Similar cosmetic outcomes for small, low-tension wounds
- Faster application (adhesive)
- Higher patient satisfaction (adhesive)
- Non-inferior for appropriately selected wounds

**Staples vs. Sutures for Scalp Lacerations:**
- Staples faster
- Similar cosmetic outcomes (hair hides marks)
- Lower infection risk with staples (some studies)
- Less pain with removal (staples)

**Adhesive Strips vs. Sutures:**
- Strips adequate for small, low-tension wounds
- Lower cost
- Higher failure rate for larger wounds
- Best for augmentation or small lacerations

### Flap Reconstruction - Advanced Concepts

**Random Pattern Flaps:**
- **Blood supply:** Subdermal plexus
- **Length-to-width ratio:** 2:1 or 3:1 maximum
- **Delay phenomenon:** Flap can be lengthened with surgical delay
- **Types:**
  - Rotation
  - Advancement
  - Transposition
  - Interpolation (pedicle passes over/under tissue)

**Axial Pattern Flaps:**
- **Blood supply:** Named artery
- **Length-to-width ratio:** Can exceed 3:1
- **Reliable blood supply**
- **Examples:**
  - Median forehead flap (based on supratrochlear artery)
  - Nasolabial flap (facial artery)
  - Deltopectoral flap (perforators from internal mammary)

**Free Flaps:**
- **Definition:** Tissue with artery and vein completely detached and re-anastomosed
- **Indications:** Large defects, reconstruction requiring specialized tissue
- **Examples:** ALT (anterolateral thigh), fibula, radial forearm
- **Beyond scope of basic wound care; plastic surgery referral**

### Local Anesthesia Advances

**Buffered Lidocaine:**
- **Formula:** 9 parts lidocaine + 1 part sodium bicarbonate (8.4%)
- **Benefit:** Significantly reduces injection pain
- **Onset:** Slightly faster
- **Duration:** No significant difference

**Liposomal Bupivacaine (Exparel):**
- **Long-acting:** Up to 72 hours
- **Uses:** Surgical site infiltration
- **Cost:** High
- **Considerations:** May not be cost-effective for routine laceration repair

**Topical Anesthetics:**
- **LET (Lidocaine-Epinephrine-Tetracaine):**
  - Applied 20-30 minutes before repair
  - Effective for small face/scalp lacerations (<3 cm)
  - No injection needed
  - Contraindications: >10 kg weight, areas of compromised circulation
- **LAT (Lidocaine-Adrenaline-Tetracaine):**
  - Alternative without epinephrine
  - Similar application

### Pediatric Sedation and Distraction

**Distraction Techniques:**
- **Age-appropriate videos, games, toys**
- **Bubbling blowing**
- **Parent involvement**
- **Child life specialists**

**Nitrous Oxide:**
- **Conscious sedation**
- **Anxiolysis and analgesia**
- **Rapid onset/offset**
- **Safe for appropriate procedures**

**Oral Sedation:**
- **Midazolam:** Common choice
- **Onset:** 20-30 minutes
- **Duration:** 30-60 minutes
- **Monitoring required**

### Post-Closure Scar Management

**Early Intervention (0-2 weeks):**
- Wound protection
- Hygiene
- Sun avoidance

**Intermediate (2-12 weeks):**
- Silicone gel or sheeting
- Massage (after epithelialization complete)
- Sun protection

**Late (>12 weeks):**
- Continue silicone for hypertrophic/keloid-prone
- Consider scar revision if indicated
- Laser therapy for erythema

**Evidence-Based Scar Interventions:**
- **Silicone gel/sheeting:** Strong evidence for prevention/treatment of hypertrophic scars
- **Pressure therapy:** Effective for burns, hypertrophic scars
- **Corticosteroid injection:** First-line for keloids, hypertrophic scars
- **Laser therapy:** Pulsed-dye laser for erythema, texture
- **Surgical revision:** For unfavorable scars after matured (>6-12 months)

### Emerging Technologies

**Laser-Assisted Wound Closure:**
- **Tissue welding:** Using laser to "weld" tissue
- **Limited availability**
- **Research phase**

**Nanotechnology:**
- **Nanofiber scaffolds:** Provide structure for healing
- **Antimicrobial nanoparticles:** Incorporated into closure materials

**3D Printing:**
- **Custom templates for complex closures**
- **Surgical planning for reconstruction**

### Quality Metrics and Outcomes

**Patient-Reported Outcomes:**
- **POSAS (Patient and Observer Scar Assessment Scale):** Validated scar assessment
- **Scar VAS:** Visual analog scale for satisfaction
- **Wound Healing Questionnaire:** Patient-centered outcomes

**Objective Measures:**
- **Scar width:** Measured at standardized intervals
- **Colorimetry:** Objective scar color measurement
- **Elasticity:** Cutometer measurements
- **Surface topography:** 3D surface analysis

**Cost-Effectiveness Considerations:**
- **Material cost vs. time savings:** Barbed sutures, staples
- **Return visits:** Absorbable vs. removable sutures
- **Specialist referral:** When cost-effective vs. primary closure
- **Complications:** Costs of infection, dehiscence, revision

### Clinical Guidelines and Recommendations

**American College of Emergency Physicians (ACEP) 2023:**
- Tissue adhesive equivalent to sutures for small, low-tension wounds
- Staples appropriate for scalp, trunk
- Absorbable sutures reasonable alternative to non-absorbable for facial lacerations
- Early removal (3-5 days) for facial sutures to minimize tracks

**American Academy of Pediatrics (AAP) 2022:**
- Consider tissue adhesives for children to reduce distress
- Child life specialists beneficial
- Topical anesthetics effective for small wounds
- Parental presence can be helpful or disruptive (individualized)

**Specialty Society Consensus:**
- Wounds requiring flaps/grafts: Plastic surgery referral
- Hand wounds with structural involvement: Hand surgery referral
- Facial wounds with tissue loss: Facial plastic surgery consideration`,
      keyTerms: [
        { term: 'barbed suture', definition: 'Suture with unidirectional or bidirectional barbs that anchor in tissue without knots; distributes tension evenly' },
        { term: 'delay phenomenon', definition: 'Surgical delay increases flap survival by inducing vasodilation and opening choke vessels' },
        { term: 'axial pattern flap', definition: 'Flap based on named artery with consistent blood supply; higher length-to-width ratio possible' },
        { term: 'LET', definition: 'Lidocaine-epinephrine-tetracaine topical anesthetic applied before wound repair' },
        { term: 'POSAS', definition: 'Patient and Observer Scar Assessment Scale; validated scar assessment tool incorporating both patient and observer perspectives' },
        { term: 'cutometer', definition: 'Device measuring skin elasticity and deformation for objective scar assessment' },
      ],
      clinicalNotes: `Practice-Changing Evidence:

1. **Tissue adhesives are first-line for appropriately selected wounds**
   - Small (<5 cm), clean-edged, low tension
   - Similar cosmetic outcomes to sutures
   - Faster, less painful, higher patient satisfaction
   - Cost savings when accounting for removal visits

2. **Absorbable sutures increasingly used for facial lacerations**
   - Eliminates removal visit
   - Similar cosmetic outcomes in studies
   - May have slightly higher track formation
   - Consider for pediatric population

3. **Early suture removal (3-5 days) for facial wounds**
   - Reduces suture track marks
   - Acceptable dehiscence risk
   - Adhesive strips can be applied after removal

4. **Barbed sutures show promise**
   - Faster closure
   - More even tension distribution
   - Higher material cost, potential time savings
   - Learning curve required

5. **Scar management begins at closure**
   - Proper technique minimizes scarring
   - Early silicone therapy for at-risk scars
   - Sun protection critical for pigmentation
   - Consider scar revision after 6-12 months if needed`,
    },
  },

  media: [
    {
      id: 'suture-techniques-diagram',
      type: 'diagram',
      filename: 'suture-techniques.svg',
      title: 'Common Suture Techniques',
      description: 'Illustration of interrupted, running, and mattress sutures',
    },
    {
      id: 'suture-removal-timing',
      type: 'diagram',
      filename: 'suture-removal-timing.svg',
      title: 'Suture Removal Timing by Body Location',
      description: 'Recommended timing for suture removal at different anatomical locations',
    },
    {
      id: 'wound-closure-methods',
      type: 'image',
      filename: 'wound-closure-methods.jpg',
      title: 'Wound Closure Methods Comparison',
      description: 'Sutures, staples, glue, and adhesive strips',
    },
  ],

  citations: [
    {
      id: 'acep-laceration-2023',
      type: 'article',
      title: 'Clinical Policy: Management of Lacerations in the Emergency Department',
      authors: ['ACEP Clinical Policies Committee'],
      source: 'Annals of Emergency Medicine',
    },
    {
      id: 'tissue-adhesive-review-2022',
      type: 'article',
      title: 'Tissue Adhesives for Wound Closure: A Systematic Review and Meta-Analysis',
      source: 'Journal of Emergency Medicine',
    },
    {
      id: 'scar-management-guidelines-2021',
      type: 'article',
      title: 'International Clinical Recommendations on Scar Management',
      authors: ['Gold, M.H.', 'Berman, B.'],
      source: 'Dermatologic Surgery',
    },
  ],

  crossReferences: [
    { targetId: 'wound-care-basics', targetType: 'topic', relationship: 'related', label: 'Wound Basics' },
    { targetId: 'wound-care-assessment', targetType: 'topic', relationship: 'related', label: 'Wound Assessment' },
    { targetId: 'wound-care-cleaning', targetType: 'topic', relationship: 'related', label: 'Wound Cleaning' },
  ],

  tags: {
    systems: ['integumentary'],
    topics: ['wound closure', 'suturing', 'laceration repair', 'surgical techniques'],
    keywords: ['sutures', 'staples', 'tissue adhesive', 'Dermabond', 'Steri-Strips', 'wound closure', 'barbed sutures'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      shelf: ['surgery', 'emergency medicine'],
    },
  },

  createdAt: '2026-01-25T00:00:00.000Z',
  updatedAt: '2026-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default sutureTechniquesContent;
