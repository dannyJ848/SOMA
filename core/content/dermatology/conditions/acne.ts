/**
 * Acne
 *
 * Inflammatory skin condition affecting pilosebaceous units.
 */

import { EducationalContent } from '../../types';

export const acneContent: EducationalContent = {
  id: 'dermatology-acne',
  type: 'topic',
  name: 'Acne',
  alternateNames: ['Acne Vulgaris', 'Pimples', 'Breakouts', 'Zits'],

  levels: {
    1: {
      level: 1,
      summary: "Acne is a common skin condition that happens when hair follicles get clogged with oil and dead skin cells. It causes pimples, blackheads, and whiteheads.",
      explanation: `## What Is Acne?

Acne is a skin condition that occurs when your hair follicles become plugged with oil and dead skin cells. It causes whiteheads, blackheads or pimples.

## Who Gets Acne?

- Teenagers going through puberty (very common)
- Young adults in their 20s
- Women before their period
- Pregnant women
- People under high stress

## Types of Acne

**Whiteheads:** Small, round bumps that stay under the skin

**Blackheads:** Dark spots on the surface of skin

**Pimples:** Red bumps with white tops

**Cysts:** Large, painful lumps under the skin

## What Causes Acne?

- Too much oil on skin
- Dead skin cells clogging pores
- Bacteria growing in pores
- Hormones (especially during puberty)
- Stress

## Treatment

- Wash face gently twice a day
- Over-the-counter creams with benzoyl peroxide
- Don't squeeze or pop pimples
- See doctor if severe`,

      keyTerms: [
        { term: 'Follicles', definition: 'Tiny holes in skin where hair grows out' },
        { term: 'Whiteheads', definition: 'Small bumps under skin from clogged pores' },
        { term: 'Blackheads', definition: 'Dark spots from oil and dead skin in pores' },
        { term: 'Hormones', definition: 'Chemicals in body that control growth and changes' },
      ],
      analogies: [
        'A pimple is like a balloon filled with pus under the skin.',
        'Pores are like tiny tunnels that can get clogged with debris.',
      ],
      examples: [
        'Teenager with pimples on forehead and chin',
        'Woman who gets breakouts before her period',
        'Someone with painful cystic acne on their back',
      ],
    },

    2: {
      level: 2,
      summary: 'Acne vulgaris is a chronic inflammatory disease of pilosebaceous units. Treatment depends on severity and includes topical retinoids, antibiotics, and systemic agents.',
      explanation: `## Pathophysiology

**Four Key Factors:**
1. Increased sebum production
2. Follicular hyperkeratinization
3. Cutibacterium acnes colonization
4. Inflammatory response

**Types of Acne Lesions:**
- Comedonal: Open (blackheads) and closed (whiteheads)
- Inflammatory: Papules, pustules
- Nodulocystic: Deep nodules, cysts

## Treatment by Severity

**Mild Acne:**
- Benzoyl peroxide
- Topical retinoids (tretinoin, adapalene)
- Salicylic acid

**Moderate Acne:**
- Topical antibiotics (clindamycin)
- Oral antibiotics (doxycycline)
- Combination therapy
- Benzoyl peroxide + antibiotic

**Severe/Refactory Acne:**
- Oral isotretinoin (Accutane)
- Hormonal therapy (birth control pills)
- Spironolactone (for women)

## Contraindications

**Isotretinoin:**
- Pregnancy (teratogenic)
- Breastfeeding
- Liver disease

**Tetracyclines:**
- Pregnancy, children <8 years (tooth discoloration)`,

      keyTerms: [
        { term: 'Sebum', definition: 'Oily substance produced by sebaceous glands' },
        { term: 'Comedonal', definition: 'Non-inflammatory acne (blackheads, whiteheads)' },
        { term: 'Hyperkeratinization', definition: 'Excessive production of keratin blocking follicles' },
        { term: 'Teratogenic', definition: 'Causing birth defects if taken during pregnancy' },
      ],
      analogies: [
        'Sebum is like the oil that keeps skin from drying out.',
        'Teratogenic is like a warning label - dangerous for developing babies.',
      ],
      examples: [
        'Teenager with mild comedonal acne starts topical retinoid',
        'Woman with hormonal acne gets birth control pills',
        'Patient with severe cystic acne starts isotretinoin',
      ],
      clinicalNotes: 'Topical retinoids should be applied to entire affected area, not just spots. Benzoyl peroxide can bleach clothing. Oral antibiotics should be combined with benzoyl peroxide to prevent resistance. Isotretinoin requires iPLEDGE program registration.',
    },

    3: {
      level: 3,
      summary: 'Acne treatment escalates from topical agents to systemic therapy based on severity. Isotretinoin is the only treatment that alters the natural course of disease.',
      explanation: `## Treatment Algorithm

**Step 1: First-Line Mild Acne**
1. Topical retinoid nightly
   - Tretinoin 0.025% cream
   - Adapalene 0.1% gel
2. Benzoyl peroxide morning
   - 4-5% wash or gel
3. Consider adding topical antibiotic if inflammatory

**Step 2: Moderate Acne**
1. Continue topical retinoid + benzoyl peroxide
2. Add oral antibiotic (3-6 months)
   - Doxycycline 100mg BID
   - Minocycline 100mg BID
3. Consider hormonal therapy in females

**Step 3: Severe/Refactory**
1. Oral isotretinoin
   - 0.5-1.0 mg/kg/day
   - 15-20 week course
   - Cumulative dose 120-150 mg/kg
2. Monitor for side effects
   - Lipid panel, LFTs
   - Depression screening
   - Pregnancy prevention

## Isotretinoin Monitoring

**Required:**
- Negative pregnancy test (women)
- Two forms of contraception
- Monthly pregnancy tests
- Lipid panel at baseline, 2 months
- LFTs at baseline, monthly

**Side Effects:**
- Cheilitis (90%)
- Dry skin, mucosa
- Hypertriglyceridemia
- Teratogenicity
- Rare: depression, pseudotumor cerebri`,

      keyTerms: [
        { term: 'Cheilitis', definition: 'Inflammation and cracking of lips' },
        { term: 'Pseudotumor cerebri', definition: 'Increased intracranial pressure causing headaches and vision changes' },
        { term: 'iPLEDGE', definition: 'Risk management program for isotretinoin to prevent pregnancy' },
        { term: 'Cumulative dose', definition: 'Total amount of medication taken over entire treatment course' },
      ],
      analogies: [
        'Cheilitis is like when lips get so dry they crack and hurt.',
        'Pseudotumor cerebri is like having too much pressure in your head.',
      ],
      examples: [
        'Patient on isotretinoin develops elevated triglycerides, needs dose reduction',
        'Woman taking isotretinoin must use two forms of birth control',
        'Teenager fails multiple courses of antibiotics, starts isotretinoin',
      ],
      clinicalNotes: 'Topical retinoids may cause "purge" period (worsening before improvement). Can take 8-12 weeks to see results. Continue topical therapy while on oral antibiotics. Consider oral contraceptive for women with flare-ups premenstrually.',
    },

    4: {
      level: 4,
      summary: 'Acne scarring and post-inflammatory hyperpigmentation are common sequelae. Early aggressive treatment may prevent long-term cosmetic sequelae.',
      explanation: `## Acne Sequelae

**Post-Inflammatory Erythema (PIE):**
- Red marks after lesions heal
- Vascular dilation
- Can last months

**Post-Inflammatory Hyperpigmentation (PIH):**
- Dark marks after lesions heal
- More common in darker skin
- Melanin deposition
- fades over months to years

**Scarring:**
- Ice pick: Deep, narrow pits
- Boxcar: Round depressions with sharp edges
- Rolling: Wavy, undulating
- Hypertrophic: Raised scars
- Keloid: Overgrown scar beyond original site

**Management of Sequelae:**
- PIE: Vascular lasers, brimonidine
- PIH: Hydroquinone, retinoids, chemical peels
- Scarring: Fractional CO2 laser, microneedling, subcision
- Hypertrophic/Keloid: Intralesional steroids

## Special Populations

**Pregnancy:**
- Avoid: Retinoids, tetracyclines, spironolactone
- Safe: Azelaic acid, glycolic acid, benzoyl peroxide (limited)
- Usually: Delay treatment until postpartum

**Infants/Children:**
- Neonatal acne: Self-limited, observe
- Infantile acne: May need topical therapy
- Early-onset severe acne: Evaluate for androgen excess

**Darker Skin Types:**
- Higher risk of PIH and keloids
- Lower concentration retinoids initially
- Aggressive early treatment to prevent scarring`,

      keyTerms: [
        { term: 'PIE', definition: 'Post-Inflammatory Erythema - red marks after acne' },
        { term: 'PIH', definition: 'Post-Inflammatory Hyperpigmentation - dark marks after acne' },
        { term: 'Subcision', definition: 'Breaking scar tissue under skin using needle' },
        { term: 'Microneedling', definition: 'Creating tiny injuries to stimulate collagen production' },
      ],
      analogies: [
        'PIH is like a stain on the skin that takes a long time to fade.',
        'Microneedling is like pricking the skin with tiny needles to help it heal better.',
      ],
      examples: [
        'Patient with darker skin develops PIH after picking at pimples',
        'Teenager with severe acne develops ice pick scarring',
        'Pregnant woman with acne flare - switched to azelaic acid',
      ],
      clinicalNotes: 'Diet may influence acne: high glycemic foods and dairy (especially skim milk) may worsen acne. Stress management can help. Avoid overly aggressive products that damage skin barrier. Sun protection essential to prevent PIH.',
    },

    5: {
      level: 5,
      summary: 'Acne is a multifactorial disease with genetic predisposition. Treatment aims to address pathogenic factors while preventing scarring and psychological sequelae.',
      explanation: `## Emerging Therapies

**Hormonal Treatments:**
- Combined oral contraceptives (estrogen + progestin)
- Spironolactone (antiandrogen)
- Clascoterone (topical androgen receptor inhibitor)
- Finasteride (off-label)

**Newer Agents:**
- Topical dapsone (anti-inflammatory)
- Topical minocycline
- Salicylic acid derivatives
- Photodynamic therapy

## Controversies

**Diet and Acne:**
- High glycemic load: Strong evidence
- Dairy products: Moderate evidence (skim milk worse)
- Chocolate: Limited/inconsistent evidence
- No specific "acne diet" proven

**Antibiotic Stewardship:**
- Limit duration to 3-6 months
- Always combine with benzoyl peroxide
- Avoid concurrent topical + oral antibiotics
- Resistance: growing concern

**Microbiome Considerations:**
- C. acnes is part of normal skin flora
- Dysbiosis may contribute to disease
- Probiotics: limited evidence currently

## Treatment-Resistant Acne

**Causes:**
- Non-adherence (most common)
- Inadequate duration
- Wrong diagnosis
- Hormonal factors not addressed
- Antibiotic resistance
- Mechanical factors (friction, pressure)

**Approach:**
- Reassess diagnosis
- Evaluate adherence
- Consider isotretinoin earlier
- Hormonal workup in women
- Screen for SAPHO syndrome (if severe + joint pain)`,

      keyTerms: [
        { term: 'Dysbiosis', definition: 'Imbalance in normal microorganism population' },
        { term: 'SAPHO syndrome', definition: 'Rare condition with synovitis, acne, pustulosis, hyperostosis, osteitis' },
        { term: 'Clascoterone', definition: 'Topical medication that blocks androgen receptors' },
      ],
      analogies: [
        'Dysbiosis is like having an unbalanced ecosystem in your gut or on your skin.',
        'Antibiotic stewardship is like using antibiotics carefully to prevent them from becoming useless.',
      ],
      examples: [
        'Patient on antibiotics for 12 months without improvement - switched to isotretinoin',
        'Woman with treatment-resistant acne found to have PCOS',
        'Teenager with acne and joint pain diagnosed with SAPHO syndrome',
      ],
      clinicalNotes: 'Acne significantly impacts quality of life and mental health. Screen for depression, especially with isotretinoin. Early effective treatment prevents scarring. Consider psychological impact when choosing treatment duration and intensity.',
    },
  },

  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    topics: ['dermatology', 'acne', 'skin', 'adolescent-health'],
    systems: ['integumentary'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, shelf: ['dermatology'] },
  },

  createdAt: '2025-01-28',
  updatedAt: '2025-01-28',
  version: 1,
  status: 'published',
};
