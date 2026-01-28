/**
 * Topical Corticosteroids
 *
 * Anti-inflammatory medications applied to the skin for various dermatologic conditions.
 */

import { EducationalContent } from '../../types';

export const topicalSteroidsContent: EducationalContent = {
  id: 'dermatology-treatment-steroids',
  type: 'concept',
  name: 'Topical Corticosteroids',
  alternateNames: ['Steroid Creams', 'Hydrocortisone', 'Corticosteroid Ointments'],

  levels: {
    1: {
      level: 1,
      summary: 'Steroid creams are medicines you put on your skin to reduce redness, itching, and swelling from rashes and skin problems.',
      explanation: `## What Are Steroid Creams?

Steroid creams are medicines you apply to your skin. They help with:
- Redness
- Itching
- Swelling
- Rashes

## Common Uses

- Eczema
- Psoriasis
- Allergic reactions
- Bug bites
- Contact dermatitis (rash from touching something)

## How to Use

1. Wash hands before applying
2. Use a small amount (pea-sized)
3. Apply to affected area only
4. Wash hands after applying
5. Do not use on face unless doctor says so

## Safety Tips

- Use only as directed
- Do not use too long
- Do not use on broken skin
- Tell doctor if skin gets worse`,

      keyTerms: [
        { term: 'Steroid', definition: 'A type of medicine that reduces inflammation' },
        { term: 'Inflammation', definition: 'Redness, swelling, and irritation in the body' },
        { term: 'Dermatitis', definition: 'Medical word for skin rash or irritation' },
        { term: 'Apply', definition: 'To put on the skin' },
      ],
      analogies: [
        'Steroid cream is like a fire extinguisher - it puts out the fire of inflammation on your skin.',
        'Using too much steroid cream is like using too much fertilizer - it can damage the plant (skin).',
      ],
      examples: [
        'Child with eczema uses hydrocortisone cream on arm rash',
        'Adult applies steroid cream for poison ivy rash',
        'Patient uses prescription cream for psoriasis patches',
      ],
    },

    2: {
      level: 2,
      summary: 'Topical corticosteroids are anti-inflammatory medications that reduce immune responses in the skin. They vary in strength from mild to very potent.',
      explanation: `## How They Work

Topical corticosteroids work by:
- Reducing blood flow to the area
- Decreasing immune cell activity
- Reducing inflammatory chemicals
- Shrinking swollen tissues

## Potency Levels

**Low Potency (Mild):**
- Hydrocortisone 1-2.5%
- Safe for face, children, thin skin areas
- Available over-the-counter

**Medium Potency:**
- Triamcinolone 0.1%
- Mometasone 0.1%
- For body areas, short-term use

**High Potency:**
- Fluocinonide 0.05%
- For thick skin areas (palms, soles)
- Limited duration

**Very High Potency:**
- Clobetasol 0.05%
- Reserved for severe, thick plaques
- Short-term only

## Application Tips

- Thin layer is sufficient
- Apply to damp skin for better absorption
- Use fingertip unit for measurement
- Once or twice daily typically`,

      keyTerms: [
        { term: 'Potency', definition: 'Strength of the medication' },
        { term: 'Fingertip unit', definition: 'Amount from fingertip to first crease, covers 2 adult hand areas' },
        { term: 'Corticosteroid', definition: 'Medicine similar to natural body hormone cortisol' },
        { term: 'Plaque', definition: 'Thick, raised area of skin' },
      ],
      analogies: [
        'Potency levels are like different grades of sandpaper - you need the right strength for the job.',
        'Fingertip unit is like a measuring spoon for skin medicine.',
      ],
      examples: [
        'Hydrocortisone used for facial dermatitis',
        'Triamcinolone prescribed for body eczema',
        'Clobetasol used for thick palm psoriasis',
      ],
      clinicalNotes: 'Start with lowest effective potency. Avoid high-potency steroids on face, genitals, and skin folds. Use emollients along with steroids. Taper frequency rather than stopping abruptly for chronic conditions.',
    },

    3: {
      level: 3,
      summary: 'Topical corticosteroids are first-line treatment for inflammatory dermatoses. Selection depends on potency, vehicle, body site, and patient factors.',
      explanation: `## Vehicle Selection

**Ointments:**
- Most occlusive, best penetration
- Good for dry, thick, scaly lesions
- Not for hairy or weeping areas

**Creams:**
- Cosmetically acceptable
- Good for moist or weeping areas
- Less greasy than ointments

**Lotions/Gels:**
- Best for hairy areas
- Good for large surface areas
- Cooling effect for hot, inflamed skin

**Foams/Solutions:**
- Scalp applications
- Easy to spread
- Quick drying

## Site-Specific Considerations

**Face/Intertriginous areas:**
- Low potency only
- Risk of atrophy and striae
- Short courses

**Eyelids:**
- Very low potency
- Risk of glaucoma and cataracts
- Ophthalmology consult if needed

**Palms/Soles:**
- Higher potency required
- Thick stratum corneum barrier
- Occlusion may enhance effect

## Side Effects

**Local:**
- Skin atrophy
- Striae (stretch marks)
- Telangiectasia
- Purpura
- Perioral dermatitis
- Steroid acne

**Systemic (rare with appropriate use):**
- HPA axis suppression
- Growth retardation in children
- Cushing syndrome',`,

      keyTerms: [
        { term: 'Vehicle', definition: 'Base substance that carries the medication (ointment, cream, lotion)' },
        { term: 'Occlusive', definition: 'Sealing in moisture by preventing evaporation' },
        { term: 'Atrophy', definition: 'Thinning of skin tissue' },
        { term: 'Striae', definition: 'Stretch marks caused by skin tearing' },
        { term: 'Telangiectasia', definition: 'Visible small blood vessels on skin surface' },
        { term: 'HPA axis', definition: 'Hypothalamic-pituitary-adrenal axis - body stress hormone system' },
      ],
      analogies: [
        'Vehicle is like the delivery truck - different types work better for different roads.',
        'Occlusion is like putting a lid on a pot - keeps moisture and medicine in.',
      ],
      examples: [
        'Betamethasone ointment used for chronic plaque psoriasis',
        'Desonide cream for facial seborrheic dermatitis',
        'Clobetasol foam for scalp psoriasis',
      ],
      clinicalNotes: 'Fingertip unit: 0.5g covers 2 adult hand areas. For acute flares, apply twice daily for 2 weeks then taper. Weekend therapy (Saturday/Sunday application) can maintain remission in chronic conditions.',
    },

    4: {
      level: 4,
      summary: 'Topical corticosteroids act through genomic and non-genomic pathways. Appropriate use requires balancing efficacy with risk of local and systemic adverse effects.',
      explanation: `## Mechanism of Action

**Genomic Effects (Hours to days):**
- Bind to glucocorticoid receptors
- Translocation to nucleus
- Gene transcription modulation
- Anti-inflammatory protein synthesis
- Pro-inflammatory protein suppression

**Non-Genomic Effects (Minutes):**
- Membrane-associated receptor effects
- Phospholipase A2 inhibition
- Rapid anti-inflammatory effects

## Pharmacokinetics

**Penetration factors:**
- Anatomic site (scalp vs forearm)
- Skin thickness
- Integrity of stratum corneum
- Occlusion
- Vehicle choice

**Metabolism:**
- First-pass skin metabolism
- Systemic absorption varies 1-30%
- Hepatic metabolism if absorbed

## Special Populations

**Children:**
- Higher surface area to volume ratio
- Increased systemic absorption risk
- Monitor growth with prolonged use
- Prefer lower potency

**Pregnancy:**
- Category C (most)
- Lowest effective potency
- Limited use preferred
- Risk of fetal growth restriction with systemic absorption

**Elderly:**
- Thinner skin
- Higher atrophy risk
- Drug interactions with systemic absorption

**Combination Therapies:**
- Steroid + calcipotriene for psoriasis
- Steroid + antifungal for fungal infections
- Steroid + antibiotic for infected dermatitis`,

      keyTerms: [
        { term: 'Glucocorticoid receptor', definition: 'Cellular receptor that corticosteroids bind to' },
        { term: 'Phospholipase A2', definition: 'Enzyme that releases inflammatory mediators' },
        { term: 'First-pass metabolism', definition: 'Drug breakdown before reaching systemic circulation' },
        { term: 'Calcipotriene', definition: 'Vitamin D analog used for psoriasis' },
      ],
      analogies: [
        'Genomic effects are like rewriting a recipe - takes time to see the results.',
        'First-pass metabolism is like a security checkpoint - the drug gets checked before entering the body.',
      ],
      examples: [
        'Child with widespread eczema - monitoring height on chronic low-potency steroid',
        'Pregnant patient with severe dermatitis - using minimal effective treatment',
        'Psoriasis patient on combination calcipotriene/betamethasone dipropionate',
      ],
      clinicalNotes: 'Consider patch testing if failure to respond to appropriate potency steroid - may indicate allergic contact dermatitis to steroid or vehicle. Steroid-sparing alternatives: topical calcineurin inhibitors, crisaborole, ruxolitinib for long-term management.',
    },

    5: {
      level: 5,
      summary: 'Topical corticosteroids remain cornerstone of dermatologic therapy. Understanding receptor biology, structure-activity relationships, and evidence-based prescribing optimizes outcomes.',
      explanation: `## Structure-Activity Relationships

**Fluorination:**
- Increases potency and duration
- Enhances lipophilicity
- Example: fluocinonide, clobetasol

**Esterification:**
- Improves percutaneous absorption
- Modifies metabolism rate
- Double esters most potent

**Halogenation:**
- Increases anti-inflammatory activity
- Associated with more side effects
- Modern trend toward non-halogenated

## Receptor Biology

**Glucocorticoid Receptor Alpha:**
- Mediates anti-inflammatory effects
- Nuclear translocation
- Transactivation and transrepression

**Glucocorticoid Receptor Beta:**
- Dominant negative isoform
- May contribute to steroid resistance
- Upregulated in chronic inflammation

**Resistance Mechanisms:**
- Receptor downregulation
- Increased receptor beta expression
- Enhanced drug metabolism
- Multidrug resistance proteins

## Advanced Applications

**Intralesional Steroids:**
- Triamcinolone acetonide 2.5-10 mg/mL
- Keloids, hypertrophic scars
- Alopecia areata
- Psoriatic nails

**Pulsed Therapy:**
- High potency for limited duration
- Reduces cumulative exposure
- Maintains efficacy

**Proactive Therapy:**
- Twice-weekly application to previously affected sites
- Prevents relapse in atopic dermatitis
- Evidence-based strategy

## Evidence-Based Prescribing

- Vehicle choice affects outcomes
- Patient education crucial
- Monitor for adverse effects
- Consider steroid-sparing alternatives for maintenance
- Documentation of potency and duration`,

      keyTerms: [
        { term: 'Lipophilicity', definition: 'Affinity for lipid/fat - affects skin penetration' },
        { term: 'Percutaneous', definition: 'Through the skin' },
        { term: 'Transrepression', definition: 'Gene suppression by steroid-receptor complex' },
        { term: 'Intralesional', definition: 'Injection directly into skin lesion' },
        { term: 'Keloid', definition: 'Excessive scar tissue beyond original wound' },
      ],
      analogies: [
        'Fluorination is like adding a turbocharger to an engine - more powerful but needs careful handling.',
        'Receptor alpha and beta are like accelerator and brake - balance determines response.',
      ],
      examples: [
        'Intralesional triamcinolone for keloid scar treatment',
        'Proactive twice-weekly maintenance preventing eczema flares',
        'Steroid-resistant patient with elevated GR-beta expression',
      ],
      clinicalNotes: 'The Corticosteroid Phobia (Topical Corticosteroid Phobia - TCS phobia) is real and impacts adherence. Address concerns, provide written action plans, and emphasize benefits of controlled inflammation vs risks of uncontrolled disease. Consider shared decision-making with visual aids.',
    },
  },

  media: [],
  citations: [],
  crossReferences: [
    { targetId: 'dermatology-eczema', targetType: 'topic', relationship: 'related', label: 'Eczema treatment' },
    { targetId: 'dermatology-psoriasis', targetType: 'topic', relationship: 'related', label: 'Psoriasis treatment' },
  ],
  tags: {
    systems: ['integumentary'],
    topics: ['dermatology', 'treatments', 'anti-inflammatory', 'medications'],
    keywords: ['steroids', 'corticosteroids', 'topical', 'eczema', 'psoriasis', 'inflammation'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, shelf: ['dermatology', 'family-medicine'] },
  },

  createdAt: '2025-01-28',
  updatedAt: '2025-01-28',
  version: 1,
  status: 'published',
};
