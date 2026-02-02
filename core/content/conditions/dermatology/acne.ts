/**
 * Acne - Comprehensive Educational Content
 *
 * Covers acne vulgaris pathophysiology and treatment.
 */

import { EducationalContent } from '../../types';

export const acne: EducationalContent = {
  id: 'condition-acne',
  type: 'condition',
  name: 'Acne',
  nameEs: 'Acné',
  alternateNames: ['Acne Vulgaris', 'Pimples', 'Zits', 'Breakouts'],
  hpoId: 'HP:0001061',

  levels: {
    1: {
      level: 1,
      summary: 'Acne is a common skin condition that occurs when hair follicles become clogged with oil and dead skin cells, causing pimples.',
      explanation: `Acne is a skin condition that most commonly affects teenagers but can occur at any age. It causes pimples to appear on the face, forehead, chest, upper back, and shoulders.

**What causes acne:**
- Oil glands produce too much oil (sebum)
- Dead skin cells clog hair follicles
- Bacteria grow in the clogged pores
- Hormones increase during puberty
- Inflammation causes redness and swelling

**Types of acne:**
- Whiteheads: Closed clogged pores
- Blackheads: Open clogged pores
- Papules: Small red, tender bumps
- Pimples (pustules): Papules with pus
- Nodules: Large, solid, painful lumps
- Cysts: Deep, painful, pus-filled lumps

**Factors that can worsen acne:**
- Hormonal changes (puberty, menstrual cycle)
- Certain medications
- Stress
- Diet (some studies suggest high glycemic foods)
- Pressure on skin (helmets, tight clothing)

**Treatment:**
- Over-the-counter creams with benzoyl peroxide or salicylic acid
- Prescription medications
- Good skin hygiene
- Do not pick or squeeze pimples

**When to see a doctor:**
- If acne is severe or painful
- If over-the-counter treatments do not work
- If acne causes scarring
- If acne affects self-esteem`,
      keyTerms: [
        { term: 'sebum', definition: 'Oil produced by skin glands that can clog pores' },
        { term: 'follicle', definition: 'Tiny sac from which a hair grows' },
        { term: 'comedone', definition: 'A clogged hair follicle (blackhead or whitehead)' },
        { term: 'pustule', definition: 'A small blister or pimple containing pus' },
      ],
      analogies: [
        'A hair follicle is like a tiny elevator shaft; when clogged with oil and skin cells, it creates a traffic jam.',
        'Acne bacteria are like uninvited guests at a party - they thrive when the environment (clogged pores) is right.',
      ],
      examples: [
        'A teenager with blackheads on their nose and whiteheads on their forehead has mild acne.',
        'Someone with deep, painful cysts on their face that leave scars has severe acne (cystic acne).',
      ],
    },
    2: {
      level: 2,
      summary: 'Acne vulgaris is a chronic inflammatory disease of the pilosebaceous unit characterized by comedones, papules, pustules, nodules, and cysts, with multifactorial etiology involving follicular hyperkeratinization, sebum production, bacterial colonization, and inflammation.',
      explanation: `## Pathophysiology

**Four key factors:**
1. **Follicular hyperkeratinization**
   - Abnormal shedding of keratinocytes
   - Microcomedone formation
   - Blocks sebum outflow

2. **Increased sebum production**
   - Androgen-driven
   - Sebaceous gland hyperplasia
   - Feeds bacterial growth

3. **Cutibacterium acnes (C. acnes) colonization**
   - Formerly Propionibacterium acnes
   - Anaerobic, lipophilic bacteria
   - Triggers inflammation
   - Proliferates in clogged follicles

4. **Inflammation**
   - C. acnes activates innate immunity
   - Cytokine release (IL-1, TNF-alpha)
   - Neutrophil recruitment
   - Inflamed lesions (papules, pustules, nodules)

## Classification

**Mild acne:**
- Comedones (open and closed)
- Few inflammatory papules/pustules
- Limited distribution

**Moderate acne:**
- Multiple inflammatory lesions
- Papules and pustules
- Some nodules
- More widespread

**Severe acne:**
- Numerous nodules and cysts
- Scarring risk high
- Truncal involvement common
- Significant psychological impact

**Special forms:**
- Acne conglobata: Severe with interconnecting abscesses
- Acne fulminans: Sudden severe acne with systemic symptoms
- Acne mechanica: From friction/pressure
- Acne cosmetica: From cosmetic products
- Drug-induced acne: Corticosteroids, lithium, androgens

## Clinical Features

**Non-inflammatory lesions:**
- Open comedones (blackheads) - dilated follicle with oxidized keratin
- Closed comedones (whiteheads) - covered by epithelium

**Inflammatory lesions:**
- Papules - small, raised, red bumps
- Pustules - pus-filled lesions
- Nodules - deep, firm, painful lesions
- Cysts - deep, fluid-filled sacs

**Sequelae:**
- Post-inflammatory hyperpigmentation
- Post-inflammatory erythema
- Atrophic scars (ice pick, boxcar, rolling)
- Hypertrophic/keloid scars

## Triggering Factors

**Hormonal:**
- Puberty
- Menstrual cycle
- Pregnancy
- Polycystic ovary syndrome
- Endocrine disorders

**Genetic:**
- Family history of acne
- Twin studies show strong heritability

**Lifestyle:**
- High glycemic index diet
- Dairy products (skim milk association)
- Stress (cortisol)
- Occlusive cosmetics
- Friction/pressure`,
      keyTerms: [
        { term: 'pilosebaceous unit', definition: 'Hair follicle and attached sebaceous gland' },
        { term: 'microcomedone', definition: 'Precursor lesion; microscopic clogged follicle' },
        { term: 'Cutibacterium acnes', definition: 'Bacteria involved in acne pathogenesis' },
        { term: 'post-inflammatory hyperpigmentation', definition: 'Dark marks left after acne heals' },
      ],
      analogies: [
        'The four factors in acne are like a perfect storm - increased oil production, clogged pores, bacteria, and inflammation all combine.',
        'Androgens are like fertilizer for oil glands - they stimulate growth and increased sebum production during puberty.',
      ],
    },
    3: {
      level: 3,
      summary: 'Acne treatment follows a stepwise approach from topical retinoids and antimicrobials to systemic antibiotics, hormonal therapy, and isotretinoin for severe cases, with attention to antibiotic stewardship and psychological impact.',
      explanation: `## Topical Treatments

**Retinoids (first-line):**
- Tretinoin, adapalene, tazarotene
- Normalize follicular keratinization
- Prevent microcomedone formation
- Side effects: irritation, dryness, photosensitivity
- Start low, gradual increase
- Apply to entire affected area, not just lesions

**Antimicrobials:**
- Benzoyl peroxide (BPO) - bactericidal, reduces resistance
- Clindamycin - antibiotic, anti-inflammatory
- Erythromycin - limited use due to resistance
- Always combine antibiotics with BPO

**Other topicals:**
- Azelaic acid - antibacterial, anti-inflammatory, depigmenting
- Salicylic acid - keratolytic
- Dapsone - anti-inflammatory (especially adult female acne)

## Systemic Treatments

**Oral antibiotics (moderate acne):**
- Tetracyclines: doxycycline, minocycline, sarecycline
- Macrolides: erythromycin, azithromycin (pregnancy/young children)
- Limit duration (3-4 months typically)
- Always use with topical BPO
- Avoid monotherapy to prevent resistance

**Hormonal therapy (females):**
- Combined oral contraceptives
- Anti-androgens (spironolactone)
- For hormonal pattern acne (jawline, premenstrual flares)

**Isotretinoin (severe acne):**
- Oral retinoid (13-cis-retinoic acid)
- Reduces sebum production, normalizes keratinization
- Only treatment that can induce long-term remission
- Requires strict pregnancy prevention (iPLEDGE)
- Side effects: dryness, elevated lipids, teratogenicity
- Monitor LFTs, lipids

## Treatment Algorithm

**Mild acne:**
- Topical retinoid alone OR
- Topical BPO +/- topical antibiotic

**Moderate acne:**
- Topical retinoid + topical BPO +/- topical antibiotic OR
- Topical retinoid + oral antibiotic

**Severe acne:**
- Oral isotretinoin OR
- Topical retinoid + oral antibiotic (if isotretinoin not appropriate)

**Maintenance:**
- Topical retinoid (prevents recurrence)
- Continue for months after clearance

## Antibiotic Stewardship

**Principles:**
- Avoid antibiotic monotherapy
- Limit duration
- Reassess need at 3-4 months
- Discontinue when inflammation controlled
- Continue non-antibiotic topicals

**Rising resistance:**
- C. acnes resistance to erythromycin and clindamycin
- BPO reduces resistance
- Sarecycline (narrow-spectrum tetracycline) - less gut impact

## Special Considerations

**Pregnancy:**
- Avoid: retinoids, tetracyclines, isotretinoin
- Safe: azelaic acid, topical erythromycin, BPO (limited data)

**Post-inflammatory changes:**
- PIH: sun protection, azelaic acid, retinoids, hydroquinone
- Erythema: time, vascular lasers
- Scars: early intervention with retinoids, later procedures

**Scar treatment:**
- Atrophic: resurfacing (laser, chemical peels), microneedling, fillers, subcision
- Hypertrophic: intralesional steroids, silicone gel
- Best prevention: early effective treatment

**Psychological impact:**
- Depression, anxiety, social withdrawal
- Screen for mental health effects
- Quality of life comparable to chronic diseases
- Support groups, counseling`,
      keyTerms: [
        { term: 'isotretinoin', definition: 'Oral retinoid for severe acne; highly teratogenic' },
        { term: 'iPLEDGE', definition: 'Risk management program for isotretinoin' },
        { term: 'antibiotic stewardship', definition: 'Responsible use to prevent resistance' },
        { term: 'sarecycline', definition: 'Narrow-spectrum tetracycline for acne' },
      ],
      clinicalNotes: 'Topical retinoids are foundation of acne therapy. Always combine topical antibiotics with benzoyl peroxide to prevent resistance. Limit oral antibiotics to 3-4 months. Isotretinoin is the only true "cure" for acne. Screen patients for depression. Early treatment prevents scarring.',
    },
    4: {
      level: 4,
      summary: 'Advanced acne management addresses atypical presentations including adult female acne, acne variants, procedural interventions for scarring, and the emerging role of laser, light therapies, and novel systemic agents.',
      explanation: `## Adult Female Acne

**Characteristics:**
- Onset >25 years or persistent from adolescence
- Often inflammatory, along jawline and chin
- Flares with menstrual cycle
- Associated with hormonal imbalances

**Workup:**
- Consider PCOS (irregular periods, hirsutism)
- Androgen levels if signs of hyperandrogenism
- Review medications

**Treatment:**
- Spironolactone (25-200 mg daily)
  - Androgen receptor blocker
  - Highly effective for hormonal acne
  - Monitor potassium
  - Contraception required
- Oral contraceptives
- Topical combination therapy

## Acne Variants

**Gram-negative folliculitis:**
- Complication of long-term antibiotic use
- Sudden flare of pustules/nodules
- Treat with isotretinoin or appropriate antibiotics

**Pyoderma faciale (rosacea fulminans):**
- Sudden onset severe facial eruption
- Young adult women
- Erythema, nodules, abscesses
- No comedones
- Systemic steroids + isotretinoin

**Acne excoriee:**
- Psychogenic picking of acne lesions
- Primarily young women
- Treat underlying anxiety/OCD
- Behavioral therapy

**SAPHO syndrome:**
- Synovitis, acne, pustulosis, hyperostosis, osteitis
- Severe acne or hidradenitis suppurativa
- Bone/joint involvement

## Procedural Treatments

**Comedone extraction:**
- Mechanical removal of comedones
- For resistant lesions
- Sterile technique required

**Intralesional steroids:**
- Triamcinolone 2.5-5 mg/mL
- For large nodules/cysts
- Rapid improvement
- Risk of atrophy if too strong

**Chemical peels:**
- Salicylic acid, glycolic acid, Jessner
- Improve comedonal acne
- Series of treatments
- Post-inflammatory changes

**Light and laser therapy:**
- Blue light: kills C. acnes
- PDT (photodynamic therapy): ALA + light
- Pulsed dye laser: red marks
- Ablative lasers: scarring
- Limited long-term data

**Microneedling:**
- For atrophic scarring
- Stimulates collagen
- Multiple sessions needed

## Scarring - Advanced Approaches

**Treatment matching:**
- Ice pick: TCA CROSS, punch excision
- Boxcar: Resurfacing, punch elevation, fillers
- Rolling: Subcision, microneedling, fillers
- Hypertrophic: Steroids, 5-FU, lasers, silicone

**Combination approaches:**
- Subcision + filler + resurfacing
- Multiple modalities often needed
- Expectations management critical

## Emerging Therapies

**Topical minocycline:**
- FMX102 - foam formulation
- Reduced systemic absorption
- Phase 3 trials

**Clascoterone:**
- Topical androgen receptor inhibitor
- First new mechanism in decades
- Approved for acne
- Safe for males and females

**Laser/light advances:**
- Picosecond lasers
- Combination approaches
- Home devices

**Microbiome modulation:**
- Probiotics
- Phage therapy for C. acnes
- Commensal bacteria transplantation

**Anti-inflammatory agents:**
- Novel topical anti-inflammatories
- Target specific cytokine pathways

## Global Health Perspective

**Epidemiology:**
- Affects 85% of adolescents worldwide
- Increasing in adults
- Higher in Westernized societies

**Access to care:**
- Dermatologist shortage
- Over-the-counter reliance
- Generic medications essential
- Telemedicine potential

**Cultural factors:**
- Different beauty standards
- Treatment seeking behavior
- Scar acceptance varies`,
      keyTerms: [
        { term: 'clascoterone', definition: 'Topical androgen receptor inhibitor for acne' },
        { term: 'TCA CROSS', definition: 'Trichloroacetic acid chemical reconstruction of skin scars' },
        { term: 'subcision', definition: 'Needle technique to break scar tissue under skin' },
        { term: 'SAPHO', definition: 'Syndrome of synovitis, acne, pustulosis, hyperostosis, osteitis' },
      ],
      clinicalNotes: 'Adult female acne often responds well to spironolactone. Clascoterone offers a new mechanism for acne treatment. Scarring is best prevented by early aggressive treatment. Multiple modalities often needed for scar revision. Address psychological impact.',
    },
    5: {
      level: 5,
      summary: 'Frontier acne research includes understanding the skin microbiome beyond C. acnes, precision medicine approaches targeting specific disease endotypes, novel anti-inflammatory agents, and the psychodermatology of acne with integrated care approaches.',
      explanation: `## Skin Microbiome Revolution

**Beyond C. acnes:**
- Diverse bacterial community
- Staphylococcus, Streptococcus, Cutibacterium species
- Fungal and viral components
- Individual variation

**Microbiome in acne:**
- Dysbiosis, not single pathogen
- Specific C. acnes strains may be beneficial
- Commensal bacteria protect
- Phylotypes matter (IA1 associated with acne)

**Therapeutic implications:**
- Targeted antibiotics sparing commensals
- Probiotics and prebiotics
- Microbiome transplantation
- Phage therapy specific to pathogenic strains

## Precision Medicine

**Endotypes:**
- Hormonal acne
- Inflammatory acne
- Comedonal acne
- Microbiome-driven acne
- Barrier dysfunction acne

**Biomarkers:**
- Sebum composition
- Cytokine profiles
- Microbiome signatures
- Genetic risk scores

**Personalized treatment:**
- Match mechanism to patient
- Avoid trial and error
- Predict response
- Minimize side effects

## Advanced Anti-Inflammatory Approaches

**IL-1 pathway:**
- Key in acne inflammation
- Targeting IL-1 or inflammasome

**JAK-STAT inhibitors:**
- Janus kinase inhibitors
- Anti-inflammatory
- Topical formulations

**PPAR modulators:**
- Peroxisome proliferator-activated receptors
- Regulate sebum and inflammation

**Melanocortin system:**
- Alpha-MSH analogs
- Anti-inflammatory, sebum reduction

## Psychodermatology

**Brain-skin axis:**
- Stress-acne connection
- Neurogenic inflammation
- Cortisol effects on sebum

**Mental health integration:**
- Screen for depression/anxiety
- Body dysmorphic disorder screening
- Cognitive behavioral therapy
- Mindfulness-based approaches

**Quality of life:**
- Validate patient concerns
- Acne as chronic disease
- Support groups
- Online communities

## Diet and Lifestyle Research

**Glycemic index:**
- Low GI diet may help
- Insulin/IGF-1 pathways
- Moderate evidence

**Dairy:**
- Association with skim milk
- Hormonal content
- Whey protein supplementation

**Probiotics:**
- Gut-skin axis
- Systemic anti-inflammatory effects
- Topical probiotics

**Omega-3 fatty acids:**
- Anti-inflammatory
- Supplement studies mixed

## Cosmetic and Adjunctive Care

**Skincare science:**
- Non-comedogenic formulations
- Barrier repair
- Gentle cleansing
- Moisturization even in oily skin

**Sun protection:**
- Essential (especially with retinoids)
- Non-comedogenic sunscreens
- Prevents PIH

**Cosmeceuticals:**
- Niacinamide - anti-inflammatory
- Zinc - anti-inflammatory, antimicrobial
- Tea tree oil - natural antimicrobial
- Green tea - antioxidant

## Future Directions

**RNA-based therapeutics:**
- siRNA for targeted gene silencing
- Topical delivery challenges

**Nanotechnology:**
- Targeted drug delivery
- Reduced side effects
- Improved penetration

**Artificial intelligence:**
- Image analysis for severity
- Treatment recommendation algorithms
- Predicting treatment response

**Patient-reported outcomes:**
- Quality of life measures
- Patient-centered care
- Shared decision-making

**Regulatory considerations:**
- Isotretinoin iPLEDGE evolution
- Biosimilar retinoids
- Cosmeceutical regulation

## Education and Prevention

**Early intervention:**
- Treat microcomedones before inflammation
- Prevent scarring
- Myth-busting

**School-based programs:**
- Adolescent education
- Reduce stigma
- Appropriate treatment seeking

**Primary care integration:**
- Dermatology training
- Treatment algorithms
- Referral pathways`,
      keyTerms: [
        { term: 'phylotype', definition: 'Specific strain classification of bacteria' },
        { term: 'endotype', definition: 'Subtype of disease based on mechanism rather than symptoms' },
        { term: 'psychodermatology', definition: 'Field studying psychological factors in skin disease' },
        { term: 'gut-skin axis', definition: 'Connection between gut microbiome and skin health' },
      ],
      clinicalNotes: 'Microbiome research is revolutionizing acne understanding - it is dysbiosis, not just C. acnes infection. Precision medicine approaches may replace trial-and-error treatment. Psychodermatology integration improves outcomes. Early intervention prevents physical and psychological scarring.',
    },
  },

  media: [
    {
      id: 'acne-classification',
      type: 'diagram',
      filename: 'acne-lesion-types.svg',
      title: 'Types of Acne Lesions',
      description: 'Comedones, papules, pustules, nodules, and cysts',
    },
  ],

  citations: [
    {
      id: 'aada-acne-2023',
      type: 'article',
      title: 'Guidelines of Care for the Management of Acne Vulgaris',
      source: 'Journal of the American Academy of Dermatology',
    },
  ],

  crossReferences: [
    { targetId: 'condition-rosacea', targetType: 'condition', relationship: 'related', label: 'Rosacea' },
  ],

  tags: {
    systems: ['integumentary'],
    topics: ['dermatology'],
    keywords: ['acne', 'pimples', 'comedones', 'retinoids', 'isotretinoin'],
    clinicalRelevance: 'medium',
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default acne;
