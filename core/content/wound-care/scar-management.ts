/**
 * Scar Management
 *
 * Comprehensive content on scar formation, prevention strategies,
 * and treatment options for various scar types.
 */

import { EducationalContent } from '../types';

export const scarManagement: EducationalContent = {
  id: 'wound-care-scar-management',
  type: 'topic',
  name: 'Scar Management',
  alternateNames: ['Scar Treatment', 'Scar Prevention', 'Cicatrix Management'],

  levels: {
    1: {
      level: 1,
      summary: 'Scars form when skin heals after injury. To minimize scars: keep wounds clean, avoid sun on healing wounds, and consider silicone products. Some scars may need professional treatment.',
      explanation: `When your skin gets cut, burned, or otherwise injured, your body works to repair the damage. The repaired area is called a scar. Scars look and feel different from normal skin.

## How Scars Form

1. Your body first stops the bleeding
2. Special cells clean up damaged tissue
3. New tissue fills in the wound
4. The wound closes and new skin covers it
5. Over many months, the scar matures (changes)

The final scar depends on:
- How deep and big the injury was
- Where on your body it happened
- Your age and skin type
- How well you cared for the wound

## Types of Scars

### Normal (Flat) Scars
- Flat or slightly raised at first
- May be pink or red initially
- Fade over 1-2 years to pale or skin-colored
- Most common type

### Raised Scars (Hypertrophic)
- Thick and raised above the skin
- Stay within the wound area
- May be red or pink
- Often improve over time
- Common after burns

### Keloid Scars
- Grow beyond the original wound
- Continue to grow even after healing
- More common in darker skin
- Can be itchy or painful
- Don't go away on their own

### Sunken (Atrophic) Scars
- Dip below the surrounding skin
- Common after acne or chickenpox
- Look like small pits or depressions

### Contracture Scars
- Tight, pulling skin
- Common after burns
- Can limit movement if over joints

## Preventing Bad Scars

### During Healing

**Keep the wound clean:**
- Wash gently with soap and water
- Keep it covered and moist
- Change bandages regularly

**Protect from the sun:**
- Healing skin sunburns easily
- Sun exposure can make scars darker
- Use sunscreen or cover the area
- Continue sun protection for 1 year

**Don't pick at scabs:**
- Scabs protect healing skin
- Picking causes more damage and worse scars

**Follow care instructions:**
- Do what your doctor recommends
- Go to follow-up appointments
- Get stitches removed on time

### After Healing

**Massage the scar:**
- Once the wound is fully closed
- Use lotion or vitamin E oil
- Massage in circles for a few minutes daily
- Helps soften and flatten scars

**Use silicone products:**
- Silicone sheets or gel
- Can reduce scar thickness
- Use for several months

**Protect from sun:**
- Use SPF 30+ on scars
- Or cover with clothing
- For at least one year

## Treating Scars

### Over-the-Counter Options

**Silicone sheets/gel:**
- Best evidence for scar treatment
- Wear sheets 12+ hours daily
- Continue for 2-3 months

**Scar creams:**
- Look for silicone-based products
- Onion extract products (limited evidence)
- Vitamin E (may help or not)

### Professional Treatments

**For raised or keloid scars:**
- Steroid injections (flatten scars)
- Pressure therapy
- Laser treatment
- Surgery (in some cases)

**For sunken scars:**
- Fillers
- Laser treatment
- Surgery

**For tight scars:**
- Physical therapy
- Surgery to release tightness

## When to See a Doctor

- Scar is very thick or keeps growing
- Scar limits your movement
- Scar is painful or very itchy
- You're unhappy with how a scar looks
- Scar is from a recent injury and not healing right

## What to Expect

**Scars change over time:**
- New scars are often red and raised
- They fade and flatten over 12-18 months
- Final appearance may take 2 years
- Some scars may need ongoing treatment

**Everyone scars differently:**
- Family history affects scarring
- Some people scar more than others
- Age, skin color, and location matter`,
      keyTerms: [
        { term: 'scar', definition: 'The mark left on skin after a wound heals; made of tissue that\'s different from normal skin' },
        { term: 'keloid', definition: 'A type of raised scar that grows beyond the original wound and doesn\'t stop growing on its own' },
        { term: 'hypertrophic scar', definition: 'A thick, raised scar that stays within the original wound area' },
        { term: 'silicone sheets', definition: 'Flat, sticky patches placed over scars to help them heal flatter and softer' },
      ],
      analogies: [
        'Normal skin is like a neatly woven fabric. A scar is like a patch - it fills the hole, but the threads don\'t line up as perfectly.',
        'Think of a scar maturing like concrete setting - at first it\'s still changing, but over time it becomes more permanent.',
        'Keloids are like a repair crew that doesn\'t know when to stop working - they keep adding more material even after the job is done.',
      ],
      examples: [
        'A paper cut usually heals without any visible scar because it\'s so shallow.',
        'A deep cut on your knee might leave a pale line that\'s visible for years.',
        'After a burn on your arm, a thick raised scar forms that stays red for months - this is a hypertrophic scar.',
      ],
    },

    2: {
      level: 2,
      summary: 'Scar formation involves altered wound healing with excess collagen deposition. Prevention focuses on optimal wound care and early intervention. Treatment options include silicone therapy, pressure, corticosteroids, and procedural interventions based on scar type.',
      explanation: `## Scar Formation Biology

### Normal Wound Healing Review
1. **Hemostasis** (minutes-hours): Blood clotting
2. **Inflammation** (days 1-4): Immune response, debris removal
3. **Proliferation** (days 4-21): New tissue formation, collagen deposition
4. **Remodeling** (21 days-1 year+): Collagen reorganization, scar maturation

### What Makes Scars Different

**Normal Skin:**
- Organized collagen fibers (basket-weave pattern)
- Hair follicles, sweat glands, oil glands
- Normal pigmentation

**Scar Tissue:**
- Collagen in parallel bundles
- No skin appendages (no hair, no sweat glands)
- Often hypo- or hyperpigmented
- Less elastic

## Types of Scars

| Type | Appearance | Cause | Prognosis |
|------|------------|-------|-----------|
| Normotrophic | Flat, pale | Typical healing | Fades over 12-24 months |
| Hypertrophic | Raised, red, within wound | Excess collagen, resolves slowly | May improve over 1-2 years |
| Keloid | Raised, extends beyond wound | Continued growth, genetic tendency | Does not resolve spontaneously |
| Atrophic | Depressed, pitted | Loss of tissue (acne, varicella) | Permanent without treatment |
| Contracture | Tight, restricts motion | Burns, large wounds over joints | Permanent without treatment |
| Widespread | Wide, flat, stretched | Tension on wound | Permanent without treatment |

### Hypertrophic vs. Keloid

| Feature | Hypertrophic | Keloid |
|---------|--------------|--------|
| Boundaries | Within original wound | Extends beyond wound |
| Time course | Develops weeks to months, may regress | Develops months to years, progressive |
| Symptoms | May be itchy | Often itchy, painful |
| Treatment response | Generally good | Often recurs |
| Genetics | Less genetic | Strong genetic component |
| Common sites | Anywhere, especially joints | Earlobes, chest, shoulders, upper back |

## Risk Factors for Abnormal Scarring

### Patient Factors
- Skin type (darker skin → higher keloid risk)
- Age (extremes may scar more)
- Genetics/family history
- Certain conditions (diabetes, immunosuppression)

### Wound Factors
- Location (chest, shoulders, back → worse)
- Wound type (burns, deep wounds)
- Tension on wound
- Infection
- Foreign material

### Treatment Factors
- Wound care quality
- Suture technique
- Timing of closure

## Prevention Strategies

### Optimize Wound Healing

**During Injury:**
- Clean thoroughly
- Remove debris
- Avoid tissue damage

**Closure:**
- Minimize tension
- Proper technique
- Appropriate suture selection

**Aftercare:**
- Keep wound moist
- Protect from sun
- Avoid tension/trauma
- Follow instructions

### Early Intervention

**Immediately After Healing (Wound Closed):**
- Begin silicone therapy
- Consider pressure therapy (burns)
- Sun protection (SPF 30+)
- Massage

**Timing:**
- Earlier intervention = better outcomes
- Start silicone when wound epithelialized
- Continue for 2-3 months minimum

## Treatment Options

### Silicone Therapy

**Mechanism:**
- Hydration of stratum corneum
- Occlusion effects
- Modulates growth factors

**Products:**
- Silicone sheets/strips
- Silicone gel
- Silicone-based creams

**Application:**
- 12-24 hours per day
- 2-3 months minimum
- Works best on new, maturing scars

**Evidence:**
- Best-studied non-invasive treatment
- Reduces scar height and symptoms
- Prevents hypertrophic scars in high-risk wounds

### Pressure Therapy

**Mechanism:**
- Reduces blood flow to scar
- Decreases collagen synthesis
- Increases collagen breakdown

**Application:**
- Custom pressure garments
- 23 hours/day
- 12-18 months
- Primarily for burns

**Evidence:**
- Standard of care for burn scars
- Reduces hypertrophic scarring
- Best when started early

### Corticosteroid Injection

**Mechanism:**
- Anti-inflammatory
- Reduces collagen synthesis
- Increases collagen degradation

**Application:**
- Intralesional triamcinolone (10-40 mg/mL)
- Inject into scar
- Repeat every 4-6 weeks
- For hypertrophic and keloid scars

**Side Effects:**
- Skin atrophy
- Hypopigmentation
- Telangiectasia
- Pain at injection

### Other Medical Treatments

**5-Fluorouracil (5-FU):**
- Antimetabolite
- Intralesional injection
- Often combined with steroids
- For resistant keloids

**Bleomycin:**
- Antitumor antibiotic
- Intralesional injection
- For recalcitrant keloids

### Procedural Treatments

**Laser Therapy:**
| Type | Target | Use |
|------|--------|-----|
| Pulsed dye laser | Blood vessels | Reduce redness, flatten |
| Fractional CO2 | Skin resurfacing | Texture improvement |
| Fractional non-ablative | Stimulate remodeling | Less downtime |

**Surgical Excision:**
- Remove scar tissue
- High recurrence for keloids (50-80%)
- Often combined with adjuvant therapy
- May be option for hypertrophic scars

**Cryotherapy:**
- Freeze scar tissue
- For keloids
- Can cause hypopigmentation

### For Atrophic Scars

**Fillers:**
- Hyaluronic acid
- Collagen-based
- Temporary improvement

**Subcision:**
- Break fibrous bands
- For rolling scars (acne)

**Resurfacing:**
- Chemical peels
- Dermabrasion
- Laser

**Punch techniques:**
- Punch excision
- Punch elevation
- For ice-pick scars

## Management by Scar Type

### Hypertrophic Scars
1. Silicone therapy
2. Massage
3. Pressure (if extensive)
4. Corticosteroid injection if persistent
5. Laser therapy
6. Consider time - may improve spontaneously

### Keloids
1. Prevention in high-risk patients
2. Silicone therapy
3. Intralesional steroids
4. Consider 5-FU or bleomycin if resistant
5. Surgery + adjuvant therapy for large keloids
6. Radiation for recalcitrant cases

### Contracture Scars
1. Physical therapy
2. Splinting/positioning
3. Pressure therapy
4. Surgical release if functional impairment`,
      keyTerms: [
        { term: 'normotrophic scar', definition: 'Normal scar that is flat, pale, and fades appropriately over time' },
        { term: 'intralesional injection', definition: 'Injection of medication directly into a scar or lesion' },
        { term: 'triamcinolone', definition: 'Corticosteroid commonly injected into scars to reduce thickness and symptoms' },
        { term: 'scar remodeling', definition: 'Phase of wound healing where collagen reorganizes and scar matures, lasting months to years' },
        { term: 'subcision', definition: 'Procedure breaking fibrous bands under depressed scars to allow them to rise' },
      ],
      clinicalNotes: 'Silicone therapy is first-line for both prevention and treatment of hypertrophic scars and keloids. Start as soon as the wound has epithelialized. For keloids, expect recurrence with any treatment; combination approaches (surgery + steroids ± radiation) have the best outcomes. Laser therapy can improve color and texture but may require multiple sessions.',
    },

    3: {
      level: 3,
      summary: 'Abnormal scar formation results from dysregulated wound healing with persistent inflammation, excessive fibroblast activity, and imbalanced collagen metabolism. Evidence-based management integrates silicone therapy, pressure, corticosteroids, and procedural interventions in a staged approach based on scar characteristics and patient factors.',
      explanation: `## Molecular Pathophysiology

### Normal Scar Formation

**Fibroblast Activity:**
- Migration into wound
- Collagen synthesis (primarily Type I and III)
- Ratio changes: Type III early → Type I predominates
- Myofibroblast differentiation
- Contraction

**Extracellular Matrix (ECM):**
- Collagen deposition
- Proteoglycan synthesis
- Matrix organization
- Progressive remodeling

**Resolution:**
- Myofibroblast apoptosis
- MMP-mediated matrix degradation
- Collagen reorganization
- Scar maturation (12-24 months)

### Hypertrophic Scar Pathophysiology

**Cellular:**
- Prolonged inflammation
- Increased fibroblast proliferation
- Delayed myofibroblast apoptosis
- Excess collagen deposition

**Molecular:**
- ↑ TGF-β (especially TGF-β1)
- ↑ PDGF
- ↓ Decorin
- Imbalanced MMP/TIMP ratio

**Matrix:**
- Excessive, disorganized collagen
- Type I/III ratio altered
- Parallel collagen bundles
- Increased ground substance

### Keloid Pathophysiology

**Distinguishing Features:**
- Continues beyond wound boundaries
- Persistent growth without resolution
- Genetic predisposition (familial, ethnic)

**Cellular:**
- "Keloid fibroblasts" - distinct phenotype
- Increased proliferation, decreased apoptosis
- Altered response to TGF-β
- Stem cell/progenitor involvement

**Molecular:**
- Even higher TGF-β expression
- Abnormal Smad signaling
- Connective tissue growth factor (CTGF) upregulation
- Dysregulated Wnt/β-catenin pathway

**Genetic:**
- Familial clustering
- Associated with certain HLA types
- Gene expression profiles differ from normal

## Clinical Assessment

### Scar Evaluation Scales

**Vancouver Scar Scale (VSS):**
| Parameter | Score |
|-----------|-------|
| Pigmentation | 0-2 |
| Vascularity | 0-3 |
| Pliability | 0-5 |
| Height | 0-3 |
| **Total** | **0-13** |

Higher score = worse scar

**Patient and Observer Scar Assessment Scale (POSAS):**
- Separate patient and observer components
- More comprehensive
- Includes patient symptoms
- Validated outcome measure

### Assessment Components

**History:**
- Wound/injury details
- Time since injury
- Previous treatments
- Risk factors (family history, ethnicity)
- Symptoms (pain, itch)

**Examination:**
- Size, shape, location
- Color (erythema, pigmentation)
- Texture (smooth, irregular)
- Height (flat, raised, depressed)
- Pliability (soft, firm, hard)
- Symptoms (tenderness, itch)

## Prevention: Evidence Review

### Silicone

**Cochrane Review Findings:**
- Weak evidence for prevention
- May reduce hypertrophic scarring in high-risk populations
- Generally safe

**Clinical Practice:**
- Widely used for prevention in high-risk wounds
- Begin after wound closure
- Continue 2-3+ months

### Pressure Therapy

**Evidence:**
- Limited quality studies
- Standard of care for burns based on clinical experience
- Duration: 12-18 months, 23 hours/day

**Mechanism:**
- Local tissue hypoxia
- Reduced collagen synthesis
- Increased collagenase activity

### Surgical Technique

**Principles:**
- Minimize tension (undermining, deep closure)
- Align with relaxed skin tension lines
- Evert wound edges
- Use appropriate suture material
- Remove sutures at optimal time

## Treatment: Evidence-Based Approach

### Intralesional Corticosteroids

**Mechanism:**
- Inhibit TGF-β
- Reduce fibroblast proliferation
- Decrease collagen synthesis
- Increase collagenase

**Protocol:**
- Triamcinolone acetonide 10-40 mg/mL
- Use 27-30 gauge needle
- Inject into scar dermis until blanching
- Repeat every 4-6 weeks
- Usually 3-6 treatments

**Response Rates:**
- Hypertrophic: 50-100% improvement
- Keloid: 50-80% improvement (higher recurrence)

**Complications:**
- Atrophy (particularly in dark skin)
- Hypopigmentation
- Telangiectasia
- Ulceration (rare)

### Combination Therapies

**Corticosteroid + 5-FU:**
- Synergistic effects
- Reduces steroid side effects
- 5-FU: 50 mg/mL mixed with triamcinolone
- Better for keloids

**Surgery + Adjuvant:**
| Adjuvant | Timing | Evidence |
|----------|--------|----------|
| Steroid injection | Postop, repeat q4-6 weeks | Moderate |
| Radiation | Within 24-48 hours | Strongest |
| 5-FU | Postop series | Moderate |
| Silicone | After healing | Weak-moderate |
| Pressure | After healing | Weak-moderate |

### Radiation Therapy

**Indication:**
- Recurrent keloids after excision
- Must be started within 24-48 hours of surgery

**Evidence:**
- Recurrence reduced to 10-30%
- External beam or brachytherapy

**Considerations:**
- Theoretical malignancy risk
- Generally avoided in children
- Low doses used (12-15 Gy)

### Laser Therapy

**Pulsed Dye Laser (PDL):**
- Target: Hemoglobin
- Effect: Vascular destruction, collagen remodeling
- Use: Erythema, early hypertrophic scars
- Multiple treatments needed

**Fractional Lasers:**

| Type | Mechanism | Use |
|------|-----------|-----|
| Fractional CO2 (ablative) | Columns of ablation | Texture, contracture, atrophic |
| Fractional erbium (ablative) | Less thermal damage | Similar, less downtime |
| Fractional non-ablative | Thermal columns, intact epidermis | Texture, less downtime |

**Evidence:**
- Good for erythema reduction
- Moderate for texture improvement
- May improve hypertrophic scars
- Requires multiple sessions

### Emerging Therapies

**Botulinum Toxin:**
- Reduces muscle tension on wound
- May reduce fibroblast activity
- Promising for facial scars
- Limited evidence

**Cryotherapy:**
- Intralesional cryoprobe
- Vascular destruction and tissue necrosis
- For keloids
- Risk of hypopigmentation

**Microneedling:**
- Collagen induction therapy
- For atrophic scars, texture
- Multiple treatments
- May combine with PRP

**Platelet-Rich Plasma (PRP):**
- Growth factor delivery
- Combined with microneedling or laser
- Limited evidence
- Promising for atrophic scars

## Treatment Algorithm

### Hypertrophic Scars

**Mild/Moderate:**
1. Silicone + massage
2. Add compression if extensive
3. If no improvement at 6 months: steroid injection

**Severe/Symptomatic:**
1. Steroid injection series
2. Consider laser for erythema
3. Silicone ongoing
4. If contracture: surgery

### Keloids

**Small:**
1. Steroid injection series
2. Silicone therapy
3. Consider 5-FU combination

**Large or Resistant:**
1. Surgical excision
2. Immediate adjuvant (radiation or steroids)
3. Long-term silicone
4. Close follow-up for recurrence

### Atrophic Scars

**Mild:**
1. Topical retinoids
2. Chemical peels
3. Microneedling

**Moderate:**
1. Fractional laser
2. Subcision (for rolling scars)
3. Fillers (temporary)

**Severe:**
1. Punch techniques
2. Combination approaches
3. Excision/resurfacing for selected cases`,
      keyTerms: [
        { term: 'TGF-beta', definition: 'Transforming growth factor beta; key cytokine in wound healing and scar formation; overexpression leads to excessive scarring' },
        { term: 'myofibroblast', definition: 'Specialized fibroblast with contractile properties; responsible for wound contraction and excessive in abnormal scars' },
        { term: 'POSAS', definition: 'Patient and Observer Scar Assessment Scale; validated tool measuring both objective findings and patient-reported symptoms' },
        { term: 'fractional laser', definition: 'Laser creating columns of thermal injury surrounded by intact tissue; promotes remodeling with faster healing than fully ablative lasers' },
        { term: 'keloid fibroblast', definition: 'Phenotypically distinct fibroblasts in keloids with increased proliferation, altered apoptosis, and abnormal TGF-beta response' },
      ],
      clinicalNotes: 'For keloids, single-modality treatment has high recurrence rates. Combine excision with adjuvant therapy (radiation within 24-48 hours has best evidence, or steroid injections). Silicone therapy should continue for months after any intervention. Set realistic expectations - keloids are a chronic condition with high recurrence risk.',
    },

    4: {
      level: 4,
      summary: 'Advanced scar management integrates understanding of molecular mechanisms, precision diagnostics, multimodal treatment protocols, and emerging regenerative approaches to optimize outcomes for pathological scarring while addressing the biological differences between hypertrophic scars and keloids.',
      explanation: `## Advanced Pathobiology

### Fibroblast Heterogeneity

**Fibroblast Subtypes:**
- Papillary dermis fibroblasts
- Reticular dermis fibroblasts
- Different wound healing functions
- Keloid fibroblasts show unique transcriptome

**Keloid Fibroblast Characteristics:**
- Increased collagen I, III, VI production
- Altered proteoglycan synthesis
- Reduced apoptosis
- Abnormal TGF-β signaling (Smad3 overexpression)
- Epigenetic changes

### Signaling Pathways

**TGF-β Pathway:**
- TGF-β1, β2: Pro-fibrotic
- TGF-β3: Anti-scarring (fetal wounds)
- Smad2/3: Downstream effectors
- Smad7: Inhibitory

**Wnt/β-Catenin:**
- Active in keloid fibroblasts
- Promotes proliferation
- Therapeutic target

**mTOR Pathway:**
- Autophagy regulation
- Fibroblast survival
- Rapamycin being studied

**Mechanotransduction:**
- Mechanical tension → fibroblast activation
- YAP/TAZ pathway
- Explains location-dependent scarring

### Immune Involvement

**Inflammation:**
- Prolonged in pathological scars
- Mast cells prominent in keloids
- Th2 predominant cytokine profile

**Macrophages:**
- M2 macrophages in scarring
- Produce TGF-β
- Potential therapeutic target

## Advanced Diagnostics

### Imaging

**High-Frequency Ultrasound:**
- Measure scar thickness
- Assess depth
- Monitor treatment response

**Optical Coherence Tomography (OCT):**
- Structural assessment
- Research applications

### Biomarkers

**Research Stage:**
- Serum TGF-β
- Collagen metabolites
- Gene expression profiling
- May guide personalized therapy

## Treatment Advances

### Targeted Molecular Therapy

**Anti-TGF-β:**
- Avotermin (TGF-β3) - Phase III trials completed
- Did not meet primary endpoints
- Other TGF-β modulators in development

**mTOR Inhibitors:**
- Rapamycin (topical, intralesional)
- Reduces fibroblast proliferation
- Case reports, small studies

**Tyrosine Kinase Inhibitors:**
- Nintedanib (anti-fibrotic)
- Being studied for keloids

### Advanced Laser Protocols

**Combination Protocols:**
- PDL + fractional CO2
- Fractional + drug delivery
- Laser-assisted drug delivery (LADD)

**Fractional Laser-Assisted Drug Delivery:**
- Creates channels for medication penetration
- Steroids, 5-FU, TGF-β modulators
- Enhanced efficacy
- Research and clinical use

### Cryotherapy Advances

**Intralesional Cryotherapy:**
- CryoShape, CryoProbe devices
- Direct tissue freezing
- Less surface damage than spray
- Good results for keloids in studies

**Protocol:**
- Two freeze-thaw cycles
- Repeat treatments as needed
- Hypopigmentation risk (especially darker skin)

### Radiation Therapy Refinements

**Brachytherapy:**
- Superficial application
- High-dose rate or low-dose rate
- Post-excision
- Recurrence rates 10-20%

**External Beam:**
- Electron beam therapy
- 12-15 Gy typical total dose
- Within 24-48 hours of surgery

**Safety:**
- Theoretical carcinogenesis risk
- Low with superficial dosing
- Avoid in children, breast area
- Risk-benefit discussion with patient

### Surgical Refinements

**Flap Reconstruction:**
- Reduces tension
- Better cosmesis
- For large or critical location keloids
- Combined with adjuvant therapy

**Z-Plasty and Geometric Closures:**
- Reorient scar lines
- Reduce tension
- Break up straight-line scar
- Useful for contractures

### Regenerative Approaches

**Fat Grafting:**
- Adipose-derived stem cells
- Paracrine effects on scarring
- Improves texture, pliability
- Emerging evidence for burn scars

**Platelet-Rich Plasma (PRP):**
- Growth factor cocktail
- Combined with microneedling or laser
- May enhance scar remodeling
- Variable results in studies

**Stem Cell Therapy:**
- Research stage
- Potential for scar modulation
- Delivery methods under study

## Special Populations

### Pediatric Scarring

**Considerations:**
- Rapid growth may affect scars
- Avoid radiation
- Silicone well-tolerated
- Steroid side effects (growth effects)
- Long-term outcome orientation

### Darker Skin Types

**Keloid Risk:**
- Higher incidence (Fitzpatrick IV-VI)
- More extensive keloid formation
- Prevention critical

**Treatment Considerations:**
- Higher risk of post-inflammatory hyperpigmentation
- Avoid aggressive laser settings
- Cryotherapy hypopigmentation risk
- Intralesional steroids may cause hypopigmentation

### Burns

**Comprehensive Approach:**
- Pressure therapy (standard of care)
- Silicone
- Physical therapy/splinting
- Steroid injection for hypertrophic areas
- Laser for texture and erythema
- Surgical release for contracture

**Timing:**
- Pressure: Start at wound closure
- Silicone: After epithelialization
- Steroid: After scar maturation begins
- Surgery: Usually after scar stabilization (12-24 months)

## Emerging Technologies

### Drug Development

**In Pipeline:**
- Small molecule TGF-β inhibitors
- Anti-CTGF antibodies
- Decorin analogs
- MMP modulators

### Gene Therapy

**Approaches:**
- siRNA targeting TGF-β
- Decorin overexpression
- Smad7 upregulation
- Research stage

### Bioengineered Products

**Dermal Substitutes:**
- May improve scar quality vs. skin graft alone
- Provide dermal template
- Variable clinical results

**Growth Factor Delivery:**
- Controlled release systems
- Target anti-fibrotic factors
- Research applications

### Artificial Intelligence

**Applications:**
- Scar assessment automation
- Treatment response prediction
- Image analysis for clinical trials
- Decision support

## Clinical Protocols

### Burn Scar Protocol

**Phase 1 (Acute, wound healing):**
- Optimize wound care
- Begin positioning/splinting

**Phase 2 (After wound closure):**
- Pressure garments fitted
- Silicone initiated
- Physical therapy

**Phase 3 (Scar maturation, 3-12 months):**
- Continue pressure and silicone
- Steroid injection for hypertrophic areas
- Consider laser

**Phase 4 (Mature scar, >12 months):**
- Surgical reconstruction if indicated
- Ongoing scar management
- Long-term follow-up

### Keloid Treatment Protocol

**First-line:**
1. Intralesional triamcinolone (10-40 mg/mL)
2. + 5-FU (50 mg/mL) for resistant cases
3. Silicone therapy continuous
4. Repeat injections q4-6 weeks × 3-6

**Second-line (if inadequate response):**
1. Surgical excision with intraoperative steroid
2. Radiation within 24-48 hours (if appropriate)
3. Continue silicone
4. Steroid injection series postoperatively

**Maintenance:**
- Silicone long-term
- Monitor for recurrence
- Early treatment of any recurrence`,
      keyTerms: [
        { term: 'mechanotransduction', definition: 'Process by which cells convert mechanical stimuli into biochemical signals; explains why high-tension areas scar more' },
        { term: 'laser-assisted drug delivery', definition: 'Technique using fractional laser channels to enhance penetration of topical medications into scar tissue' },
        { term: 'intralesional cryotherapy', definition: 'Direct freezing of scar tissue via inserted probe; potentially more effective than surface cryotherapy for keloids' },
        { term: 'Smad proteins', definition: 'Intracellular signaling molecules downstream of TGF-beta receptors; dysregulated in pathological scarring' },
        { term: 'adipose-derived stem cells', definition: 'Stem cells from fat tissue with potential to modulate wound healing and scar formation' },
      ],
      clinicalNotes: 'For keloid surgery, plan multimodal approach before operating: radiation suite availability, steroid injections prepared, pressure garment measured. Radiation should begin within 24-48 hours for optimal efficacy. Fat grafting shows promise for mature scars, especially post-burn; mechanism involves paracrine effects of adipose stem cells on scar remodeling.',
    },

    5: {
      level: 5,
      summary: 'Expert scar management integrates evolving understanding of fibrotic biology, precision medicine approaches, novel therapeutics targeting specific pathways, and comprehensive rehabilitation to optimize outcomes while advancing the field through translational research.',
      explanation: `## Systems Biology of Scarring

### Genomics and Transcriptomics

**Keloid Genomics:**
- Genome-wide association studies (GWAS)
- NEDD4 gene associations
- MYO1E polymorphisms
- Ethnic variation in genetic risk

**Expression Profiling:**
- Distinct keloid fibroblast transcriptome
- Upregulated: COL1A1, COL3A1, CTGF, PAI-1
- Downregulated: Decorin, MMP genes
- Pathway analysis identifies therapeutic targets

**Epigenetics:**
- DNA methylation changes in keloid fibroblasts
- Histone modifications
- miRNA dysregulation (miR-21, miR-29 family)
- Potential therapeutic targets

### Single-Cell Analysis

**Fibroblast Heterogeneity:**
- Single-cell RNA sequencing reveals subtypes
- Keloid "super-fibroblasts"
- Therapeutic targeting of specific populations

**Immune Cell Profiling:**
- Mast cell abundance in keloids
- Macrophage polarization
- T-cell populations

### Systems Approach

**Network Analysis:**
- TGF-β as hub in fibrotic network
- Multiple downstream effectors
- Therapeutic nodes identified
- Redundancy challenges single-target therapy

## Precision Medicine Framework

### Biomarker-Guided Therapy

**Predictive Biomarkers:**
- Wound fluid proteomics
- Serum markers
- Genetic testing for keloid risk
- Early identification of high-risk patients

**Treatment Selection:**
- Molecular subtyping of scars
- Personalized treatment protocols
- Response prediction

### Pharmacogenomics

**Drug Metabolism:**
- Steroid response variation
- 5-FU metabolism (DPYD)
- Inform dosing, drug selection

## Novel Therapeutics

### Pipeline Drugs

**TGF-β Pathway:**
- Fresolimumab (anti-TGF-β antibody) - studied in fibrosis
- Galunisertib (TGF-βR1 inhibitor) - studied in cancer/fibrosis
- Pirfenidone - approved for IPF, studied for scars
- Nintedanib - approved for IPF, studied for keloids

**mTOR Inhibitors:**
- Rapamycin/sirolimus topical
- Small studies show promise
- Mechanism: Reduces fibroblast proliferation

**JAK Inhibitors:**
- Ruxolitinib being studied
- Anti-inflammatory and anti-fibrotic potential

### Gene Therapy

**Approaches:**
- siRNA targeting TGF-β, CTGF
- miRNA modulation (miR-29 mimics)
- CRISPR-based editing (research)
- Delivery challenges

**Delivery Systems:**
- Nanoparticle carriers
- Microneedle delivery
- Laser-assisted transfection

### Cell-Based Therapy

**Adipose-Derived Stem Cells (ADSCs):**
- Paracrine effects
- Immunomodulation
- Direct injection or fat grafting
- Clinical evidence growing

**Bone Marrow-Derived Mesenchymal Stem Cells:**
- Anti-fibrotic potential
- Preclinical evidence
- Clinical trials emerging

### Biomaterials

**Smart Dressings:**
- Drug-releasing silicone
- Responsive release systems
- Sensor-integrated monitoring

**Injectable Matrices:**
- Drug-loaded hydrogels
- Sustained release
- Combined with cells

## Surgical Innovation

### Minimally Invasive Approaches

**Percutaneous Treatments:**
- Intralesional cryotherapy
- Radiofrequency ablation
- Laser therapy without excision

**Image-Guided Therapy:**
- Ultrasound guidance for injection
- Precise delivery

### Reconstructive Advances

**Super-Thin Flaps:**
- Perforator-based
- Improved aesthetics
- Complex keloid reconstruction

**Tissue Engineering:**
- Dermal substitutes
- Bioengineered skin
- Future: Full-thickness constructs

## Quality and Outcomes

### Measurement Advances

**Objective Measures:**
- Cutometer (elasticity)
- Colorimetry
- High-frequency ultrasound
- 3D imaging

**Patient-Reported Outcomes:**
- POSAS validation
- Quality of life instruments
- Patient preference measures

### Registry and Database

**Outcomes Tracking:**
- Multi-center registries
- Treatment response databases
- Predictive modeling
- Quality improvement

## Research Frontiers

### Fetal Wound Healing

**Scarless Healing:**
- Different TGF-β isoform ratio (β3>β1)
- Reduced inflammation
- Different fibroblast phenotype
- Unique ECM composition

**Translation Efforts:**
- TGF-β3 trials (Juvista/Avotermin) - did not meet endpoints
- Anti-inflammatory approaches
- New targets from fetal model

### Regenerative Medicine Vision

**Goals:**
- Scar-free healing
- Functional tissue regeneration
- Restoration of appendages (hair, glands)

**Approaches:**
- Developmental biology insights
- Stem cell-based regeneration
- Bioengineered constructs
- Gene and cell therapy combinations

### Microbiome and Scarring

**Emerging Understanding:**
- Skin microbiome affects healing
- Wound microbiome in scarring
- Therapeutic manipulation potential

## Practice Integration

### Multidisciplinary Team

**Members:**
- Dermatologist
- Plastic surgeon
- Radiation oncologist
- Physical/occupational therapist
- Psychologist
- Research coordinator

**Functions:**
- Complex case discussion
- Protocol development
- Outcomes tracking
- Clinical trials

### Care Pathway Development

**Standardization:**
- Assessment protocols
- Treatment algorithms
- Follow-up schedules
- Outcome measurement

**Quality Metrics:**
- Process measures
- Patient-reported outcomes
- Recurrence rates
- Adverse events

### Education and Advocacy

**Patient Education:**
- Realistic expectations
- Self-management
- Support resources
- Treatment options

**Provider Education:**
- Evidence-based updates
- Technique training
- New technology integration

**Advocacy:**
- Research funding
- Insurance coverage
- Patient support organizations

## Ethical Considerations

### Access and Equity

**Challenges:**
- Advanced treatments costly
- Geographic access variation
- Insurance coverage gaps
- Disparities in care

**Considerations:**
- Cost-effectiveness analyses
- Equitable access programs
- Global health perspective

### Research Ethics

**Emerging Therapies:**
- Appropriate trial design
- Informed consent for novel treatments
- Balancing innovation and safety

### Shared Decision-Making

**Patient Autonomy:**
- Individual values and preferences
- Risks and benefits discussion
- Realistic outcome expectations
- Quality of life priorities`,
      keyTerms: [
        { term: 'pirfenidone', definition: 'Anti-fibrotic drug approved for idiopathic pulmonary fibrosis; being studied for skin scarring' },
        { term: 'miRNA', definition: 'MicroRNA; small non-coding RNAs that regulate gene expression; dysregulated in pathological scarring and potential therapeutic targets' },
        { term: 'fresolimumab', definition: 'Monoclonal antibody against TGF-beta; studied in fibrotic conditions' },
        { term: 'super-thin flaps', definition: 'Perforator-based flaps harvested with minimal subcutaneous tissue for improved aesthetic outcomes' },
        { term: 'cutometer', definition: 'Device measuring skin elasticity; used for objective scar assessment' },
      ],
      clinicalNotes: `Expert Practice Points:

1. **Prevention is paramount** - High-risk patients (personal/family history of keloids, darker skin types, high-tension locations) should receive prophylactic treatment starting immediately after wound closure.

2. **Multimodal approach** - Single-modality treatment rarely sufficient for keloids. Combine surgery with adjuvant radiation (best evidence) or steroid injections. Continue silicone long-term.

3. **Timing matters** - Steroid injections most effective in active, maturing scars. Radiation must start within 24-48 hours of keloid excision. Surgical reconstruction typically after scar maturation (12-24 months).

4. **Set realistic expectations** - Keloids are a chronic condition with high recurrence risk. Frame management as control, not cure. Prepare patients for possible multiple treatments.

5. **Consider the whole patient** - Scars impact quality of life, self-esteem, and function. Address psychological aspects. Involve mental health support when needed.

6. **Stay current** - Field is rapidly evolving. Novel therapies (intralesional cryotherapy, laser-assisted drug delivery, biologics) may offer improved options. Participate in clinical trials when appropriate.

7. **Individualize treatment** - Patient preferences, scar characteristics, location, previous treatments, and available resources all inform optimal approach.

8. **Document outcomes** - Systematic outcome tracking with validated measures improves care quality and contributes to evidence base.`,
    },
  },

  media: [
    {
      id: 'scar-types-diagram',
      type: 'diagram',
      filename: 'scar-types-comparison.svg',
      title: 'Types of Scars',
      description: 'Visual comparison of normotrophic, hypertrophic, keloid, and atrophic scars',
    },
    {
      id: 'scar-treatment-algorithm',
      type: 'diagram',
      filename: 'scar-treatment-algorithm.svg',
      title: 'Scar Treatment Algorithm',
      description: 'Decision flowchart for scar management based on type and severity',
    },
  ],

  citations: [
    {
      id: 'scar-prevention-guidelines',
      type: 'article',
      title: 'International Clinical Recommendations on Scar Management',
      authors: ['Mustoe, T.A.', 'et al.'],
      source: 'Plastic and Reconstructive Surgery',
    },
    {
      id: 'keloid-review',
      type: 'article',
      title: 'Keloids: Current and emerging therapies',
      authors: ['Gauglitz, G.G.', 'et al.'],
      source: 'Molecular Medicine',
    },
    {
      id: 'silicone-cochrane',
      type: 'article',
      title: 'Silicone gel sheeting for treating hypertrophic scars',
      authors: ['O\'Brien, L.', 'Jones, D.J.'],
      source: 'Cochrane Database of Systematic Reviews',
    },
  ],

  crossReferences: [
    { targetId: 'wound-care-wound-healing-phases', targetType: 'topic', relationship: 'related', label: 'Wound Healing Phases' },
    { targetId: 'wound-care-burn-care', targetType: 'topic', relationship: 'related', label: 'Burn Care' },
    { targetId: 'wound-care-sutures-staples-glue', targetType: 'topic', relationship: 'related', label: 'Wound Closure Methods' },
  ],

  tags: {
    systems: ['integumentary'],
    topics: ['scarring', 'keloids', 'hypertrophic scars', 'wound healing', 'reconstructive surgery'],
    keywords: ['scar treatment', 'silicone therapy', 'steroid injection', 'laser scar', 'keloid prevention'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      shelf: ['surgery', 'dermatology'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default scarManagement;
