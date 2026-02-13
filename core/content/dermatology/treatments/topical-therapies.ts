/**
 * Topical Therapies - Dermatology Treatments
 *
 * Comprehensive coverage of topical medications used in dermatology
 * including corticosteroids, retinoids, antimicrobials, and immunomodulators.
 */

import { EducationalContent } from '../../types';

export const topicalTherapiesContent: EducationalContent = {
  id: 'dermatology-topical-therapies',
  type: 'concept',
  name: 'Topical Therapies',
  alternateNames: ['Topical Medications', 'Topical Dermatologic Agents', 'Skin Medications'],

  levels: {
    1: {
      level: 1,
      summary: 'Topical therapies are medicines applied directly to the skin to treat conditions like rashes, acne, and eczema.',
      explanation: `## What Are Topical Therapies?

Topical therapies are medicines you put directly on your skin. They work right where you apply them.

### Types of Topical Medicines

**Creams and Ointments:**
- Creams are lighter and absorb quickly
- Ointments are thicker and more moisturizing
- Both carry medicine into the skin

**Other Forms:**
- Gels (good for hairy areas)
- Lotions (spread easily on large areas)
- Solutions and sprays
- Foams (easy to apply)

### Common Uses

**Skin Conditions They Treat:**
- Eczema (dry, itchy patches)
- Psoriasis (thick, scaly patches)
- Acne (pimples and breakouts)
- Rashes and allergic reactions
- Skin infections
- Warts and other growths

### Types of Topical Medicines

**Steroids (Corticosteroids):**
- Reduce swelling and redness
- Stop itching
- Come in different strengths
- Should not be used too long or on face without doctor guidance

**Antibiotics:**
- Kill bacteria on skin
- Treat infected cuts or acne
- Prevent infection in wounds

**Antifungals:**
- Kill fungus
- Treat athlete's foot, ringworm
- Often used for 2-4 weeks

**Moisturizers:**
- Keep skin from drying out
- Help other medicines work better
- Used daily for dry skin conditions

### How to Use Them

**General Tips:**
- Wash hands before and after
- Clean the area first
- Apply a thin layer
- Rub in gently
- Use the right amount (often pea-sized)
- Follow the schedule your doctor gives you

**What to Avoid:**
- Using more than prescribed
- Covering with bandages unless told to
- Using near eyes or mouth unless safe
- Sharing medicines with others

### Side Effects

**Common Side Effects:**
- Burning or stinging when applied
- Redness at the site
- Dry skin
- Skin thinning (with long steroid use)

**When to Call Your Doctor:**
- Severe burning or pain
- Rash gets worse
- Signs of infection
- No improvement after treatment`,
      keyTerms: [
        { term: 'topical', definition: 'Applied directly to the skin surface' },
        { term: 'ointment', definition: 'A thick, greasy medicine that stays on the skin longer' },
        { term: 'cream', definition: 'A lighter medicine that absorbs into the skin more easily' },
        { term: 'steroid', definition: 'A medicine that reduces swelling and inflammation' },
        { term: 'antifungal', definition: 'A medicine that kills fungus on the skin' },
      ],
      analogies: [
        'Topical medicines are like targeted treatments - they work right where you put them instead of going through your whole body.',
        'Ointments are like butter - thick and protective, while creams are more like lotion - lighter and easier to spread.',
        'Using the right amount of medicine is like putting the right amount of sauce on food - too much can cause problems.',
      ],
      examples: [
        'Putting hydrocortisone cream on a bug bite to stop the itching.',
        'Applying antifungal cream to athlete\'s foot between your toes twice a day.',
      ],
      patientCounselingPoints: [
        'Use only the amount your doctor tells you to use',
        'Finish the full course of treatment even if you feel better',
        'Keep topical medicines away from your eyes and mouth',
        'Store medicines as directed on the package',
      ],
    },
    2: {
      level: 2,
      summary: 'Topical therapies include corticosteroids, retinoids, antimicrobials, and immunomodulators applied to treat various dermatologic conditions with attention to potency, vehicle, and application technique.',
      explanation: `## Understanding Topical Therapies

### Topical Corticosteroids

**Potency Classes (I-VII):**
- Class I: Super-high potency (clobetasol)
- Class II-III: High potency
- Class IV-V: Medium potency
- Class VI-VII: Low potency (hydrocortisone)

**Selection Factors:**
- Condition being treated
- Body location
- Patient age
- Duration of use needed

**Common Preparations:**
- Clobetasol propionate (super-high)
- Betamethasone dipropionate (high)
- Triamcinolone acetonide (medium)
- Hydrocortisone (low)

**Side Effects:**
- Skin atrophy
- Striae (stretch marks)
- Telangiectasias
- Hypothalamic-pituitary-adrenal suppression (high potency)
- Perioral dermatitis

### Topical Retinoids

**Mechanism:**
- Normalize keratinization
- Reduce inflammation
- Increase cell turnover
- Stimulate collagen

**Common Agents:**
- Tretinoin (Retin-A)
- Adapalene (Differin)
- Tazarotene (Tazorac)

**Uses:**
- Acne
- Photoaging
- Psoriasis
- Keratoses

**Side Effects:**
- Dryness
- Irritation
- Photosensitivity
- Teratogenicity (pregnancy category X)

### Topical Antimicrobials

**Antibacterials:**
- Mupirocin (gram-positive)
- Clindamycin (acne)
- Erythromycin (acne)
- Benzoyl peroxide (acne, reduces resistance)
- Neomycin (wound care)

**Antifungals:**
- Azoles: ketoconazole, clotrimazole, miconazole
- Allylamines: terbinafine
- Ciclopirox

**Antivirals:**
- Acyclovir, penciclovir (HSV)
- Imiquimod (HPV, acts as immunomodulator)

### Topical Immunomodulators

**Calcineurin Inhibitors:**
- Tacrolimus (Protopic)
- Pimecrolimus (Elidel)
- Used for atopic dermatitis
- Face and intertriginous areas
- No steroid side effects

**Other Immunomodulators:**
- Imiquimod (TLR7 agonist)
- 5-Fluorouracil (5-FU)
- Ingenol mebutate

### Vehicle Considerations

**Ointments:**
- Most occlusive
- Best penetration
- Good for dry, thick skin
- Not ideal for hairy or moist areas

**Creams:**
- Water-in-oil or oil-in-water emulsions
- Versatile
- Good cosmetic acceptance
- Less potent than ointments

**Gels and Solutions:**
- Good for scalp and hairy areas
- Quick drying
- May be drying or irritating

**Foams:**
- Easy application
- Good patient acceptance
- Scalp conditions

### Application Techniques

**Fingertip Unit (FTU):**
- Standardized dosing
- One FTU = 0.5 g
- Body region guidelines available

**Occlusion:**
- Increases penetration 10-fold
- Used for resistant conditions
- Risk of increased side effects

### Common Conditions and Treatment

**Atopic Dermatitis:**
- Low-medium potency steroids
- Calcineurin inhibitors for face/folds
- Emollients as maintenance

**Psoriasis:**
- Medium-high potency steroids
- Vitamin D analogs
- Tar preparations
- Combination products

**Acne:**
- Retinoids
- Benzoyl peroxide
- Topical antibiotics
- Combination therapy`,
      keyTerms: [
        { term: 'potency', definition: 'The strength of a topical steroid, classified from Class I (strongest) to VII (weakest)' },
        { term: 'vehicle', definition: 'The base in which the active medication is delivered (cream, ointment, gel, etc.)' },
        { term: 'calcineurin inhibitors', definition: 'Immunomodulators (tacrolimus, pimecrolimus) that reduce inflammation without steroid side effects' },
        { term: 'fingertip unit', definition: 'A standardized measure (0.5g) for topical medication dosing' },
        { term: 'occlusion', definition: 'Covering applied medication to increase absorption' },
      ],
      analogies: [
        'Steroid potency is like spice levels - you use the mildest that works and save the strongest for special situations.',
        'The vehicle is like a delivery truck - different trucks (creams, ointments) deliver the same medicine in different ways.',
        'The fingertip unit is like a measuring spoon for topical medicines.',
      ],
      examples: [
        'Using a medium-potency steroid (triamcinolone) on body psoriasis but low-potency (hydrocortisone) on the face.',
        'Combining adapalene and benzoyl peroxide for more effective acne treatment.',
      ],
    },
    3: {
      level: 3,
      summary: 'Advanced topical therapy requires understanding of drug penetration, vehicle optimization, combination strategies, and steroid-sparing approaches for chronic conditions.',
      explanation: `## Advanced Topical Dermatologic Therapy

### Percutaneous Absorption

**Factors Affecting Penetration:**

**Drug Properties:**
- Molecular weight (<500 Da optimal)
- Lipophilicity (partition coefficient)
- Concentration gradient
- Solubility in vehicle

**Skin Factors:**
- Stratum corneum integrity
- Hydration state
- Skin thickness (varies by site)
- Inflammation (increases absorption)

**Vehicle Effects:**
- Occlusion
- Penetration enhancers
- Release characteristics
- Reservoir effect

### Corticosteroid Pharmacology

**Structure-Activity:**
- Fluorination increases potency
- Esterification affects penetration
- Prodrugs (betamethasone valerate)

**Tachyphylaxis:**
- Reduced response with continued use
- May require drug holidays
- Mechanism incompletely understood

**Steroid-Sparing Strategies:**
- Weekend therapy
- Proactive maintenance
- Combination with calcineurin inhibitors
- Transition to non-steroidal agents

### Topical Retinoid Science

**Retinoid Receptors:**
- RAR (α, β, γ)
- RXR (α, β, γ)
- Tissue-specific expression
- Gene transcription regulation

**Comparative Pharmacology:**
- Tretinoin: pan-RAR agonist
- Adapalene: RAR-β/γ selective, less irritating
- Tazarotene: RAR-β/γ selective, more potent

**Irritation Minimization:**
- Slow titration
- Moisturizer application
- Short contact therapy
- Formulation selection

### Advanced Antimicrobial Concepts

**Antimicrobial Resistance:**
- Increasing with topical antibiotics
- Combination with benzoyl peroxide reduces
- Limit duration of use
- Consider non-antibiotic alternatives

**Biofilm Considerations:**
- Reduced antibiotic efficacy
- Disruption strategies
- Antimicrobial peptides

### Novel Topical Agents

**JAK Inhibitors:**
- Ruxolitinib (atopic dermatitis, vitiligo)
- Reduces inflammation
- Oral bioavailability concerns with large area use

**PDE4 Inhibitors:**
- Crisaborole (atopic dermatitis)
- Non-steroidal anti-inflammatory
- Good for sensitive areas

**Tapinarof:**
- AhR agonist
- Plaque psoriasis
- No steroid side effects
- Folliculitis as side effect

### Vitamin D Analogs

**Mechanism:**
- VDR activation
- Antiproliferative
- Immunomodulatory
- Differentiation-inducing

**Agents:**
- Calcipotriene (calcipotriol)
- Calcitriol
- Combination with betamethasone

**Limitations:**
- Hypercalcemia with large area use
- Irritation
- Limited efficacy as monotherapy

### Specialized Formulations

**Microencapsulation:**
- Controlled release
- Reduced irritation
- Improved stability

**Nanoparticles:**
- Enhanced penetration
- Targeted delivery
- Sustained release

**Fixed-Dose Combinations:**
- Improved adherence
- Synergistic effects
- Examples: adapalene/BP, calcipotriene/betamethasone

### Condition-Specific Approaches

**Atopic Dermatitis:**
- Proactive therapy (maintenance)
- Wet wraps for flares
- Dilute bleach baths
- Barrier repair emollients

**Psoriasis:**
- Combination therapy
- Sequential therapy
- Foam vehicles for scalp
- Nail-specific formulations

**Rosacea:**
- Topical metronidazole, azelaic acid
- Ivermectin (Demodex targeting)
- Brimonidine, oxymetazoline (erythema)
- Avoiding triggers

**Actinic Keratoses:**
- Field therapy approach
- 5-FU, imiquimod, ingenol mebutate
- Diclofenac gel
- PDT combination

### Compounding Considerations

**When Appropriate:**
- Unavailable commercial formulations
- Allergen avoidance
- Concentration adjustments

**Quality Concerns:**
- Stability
- Sterility
- Potency verification
- Regulatory oversight`,
      keyTerms: [
        { term: 'percutaneous absorption', definition: 'The passage of substances through the skin into systemic circulation' },
        { term: 'tachyphylaxis', definition: 'Reduced response to a drug after repeated use' },
        { term: 'proactive therapy', definition: 'Continued intermittent treatment after clearing to prevent relapse' },
        { term: 'JAK inhibitor', definition: 'Janus kinase inhibitors that block inflammatory signaling pathways' },
        { term: 'AhR agonist', definition: 'Aryl hydrocarbon receptor agonist; new mechanism for psoriasis treatment' },
      ],
      clinicalNotes: 'For chronic conditions like atopic dermatitis, proactive maintenance therapy with twice-weekly application of topical corticosteroids or calcineurin inhibitors after clearing reduces relapse rates significantly compared to reactive treatment only.',
    },
    4: {
      level: 4,
      summary: 'Expert topical therapy integrates advanced pharmacokinetics, emerging technologies, personalized formulation strategies, and comprehensive management of complex dermatologic conditions.',
      explanation: `## Expert Topical Dermatologic Therapy

### Advanced Pharmacokinetics

**Skin Pharmacokinetics:**
- Stratum corneum as rate-limiting barrier
- Fick's first law of diffusion
- Partition coefficient optimization
- Supersaturated formulations

**Reservoir Effect:**
- Drug accumulation in stratum corneum
- Sustained release
- Implications for dosing frequency
- Tape stripping studies

**Dermal Microdialysis:**
- In vivo penetration assessment
- Bioequivalence studies
- Research applications

### Formulation Science

**Penetration Enhancement:**
- Chemical enhancers (DMSO, alcohols, fatty acids)
- Physical methods (iontophoresis, phonophoresis)
- Microneedles
- Nanocarriers

**Advanced Delivery Systems:**
- Liposomes
- Solid lipid nanoparticles
- Microemulsions
- Polymeric nanoparticles

**Stability Considerations:**
- Oxidation protection
- pH optimization
- Temperature sensitivity
- Packaging requirements

### Emerging Topical Agents

**Small Molecule Innovations:**
- Roflumilast cream (PDE4, psoriasis)
- Tapinarof (AhR agonist)
- Ruxolitinib cream (JAK1/2)
- Opzelura for vitiligo

**Biologic Considerations:**
- Topical anti-cytokine strategies
- Protein stability challenges
- Novel delivery approaches

**Gene Therapy:**
- Topical siRNA delivery
- miRNA therapeutics
- CRISPR applications (future)

### Complex Condition Management

**Refractory Atopic Dermatitis:**
- Optimize topical regimen
- Wet wrap therapy protocol
- Dilute bleach baths
- Allergen identification
- Transition to systemic therapy indications

**Refractory Psoriasis:**
- Combination topical approaches
- Occlusion techniques
- Intralesional corticosteroids
- Field therapy for photodamage

**Hidradenitis Suppurativa:**
- Topical clindamycin/resorcinol
- Adjunctive role to systemic therapy
- Wound care integration

### Pediatric Considerations

**Age-Specific Absorption:**
- Increased absorption in neonates
- Surface area to weight ratio
- Diaper area occlusion

**Steroid Selection:**
- Lowest effective potency
- Avoid high potency on face
- Monitor for growth effects
- Calcineurin inhibitors (age restrictions)

**Adherence Strategies:**
- Age-appropriate education
- Vehicle selection
- Simplified regimens

### Geriatric Considerations

**Skin Changes:**
- Decreased barrier function
- Thinning epidermis
- Reduced hydration
- Increased sensitivity

**Steroid Caution:**
- Higher atrophy risk
- Purpura susceptibility
- Wound healing impairment

**Polypharmacy:**
- Drug interactions
- Simplification strategies
- Caregiver education

### Special Populations

**Pregnancy and Lactation:**
- Retinoid contraindication
- Steroid potency limitations
- Safer alternatives
- Limited data on new agents

**Immunocompromised:**
- Infection risk
- Modified immunomodulator use
- Malignancy concerns
- Close monitoring

### Quality and Safety

**Contamination Concerns:**
- Multi-use containers
- Pump dispensers preferred
- Proper technique education

**Compounding Quality:**
- USP standards
- PCAB accreditation
- Stability testing
- Potency verification

### Adherence Optimization

**Barriers:**
- Complexity of regimen
- Cosmetic issues
- Time requirements
- Cost

**Strategies:**
- Simplified regimens
- Vehicle selection for preference
- Written instructions
- Follow-up monitoring

### Future Directions

**Smart Delivery:**
- Stimuli-responsive systems
- Targeted release
- Personalized formulations
- 3D-printed medications

**Microbiome Modulation:**
- Probiotic topicals
- Bacteriophage therapy
- Skin ecosystem restoration

**Digital Integration:**
- Adherence monitoring
- Smartphone-connected devices
- Treatment outcome tracking`,
      keyTerms: [
        { term: 'supersaturation', definition: 'Formulation strategy increasing drug thermodynamic activity for enhanced penetration' },
        { term: 'microneedles', definition: 'Minimally invasive devices creating microchannels for enhanced topical drug delivery' },
        { term: 'dermal microdialysis', definition: 'Technique for measuring drug concentrations in the dermis in vivo' },
        { term: 'wet wrap therapy', definition: 'Application of topical medication under wet dressings for enhanced efficacy in severe eczema' },
        { term: 'field therapy', definition: 'Treatment of entire areas of photodamage rather than individual lesions' },
      ],
      clinicalNotes: 'For wet wrap therapy in atopic dermatitis, apply topical corticosteroid, cover with damp gauze or cotton clothing, then dry layer. Leave on for 2-24 hours. Effective for acute flares but monitor for systemic absorption with potent steroids.',
    },
    5: {
      level: 5,
      summary: 'Expert-level topical therapy integrates cutting-edge delivery technologies, personalized medicine approaches, and translational research to optimize dermatologic outcomes.',
      explanation: `## Expert Topical Therapy

### Translational Skin Science

**Barrier Science:**
- Brick and mortar model refinement
- Tight junction function
- Lipid lamellae organization
- Filaggrin role in barrier integrity

**Immunodermatology:**
- Langerhans cell biology
- Skin resident memory T cells
- Innate immune activation
- Cytokine networks

**Skin Pharmacogenomics:**
- Drug metabolizing enzymes (CYP)
- Transporter polymorphisms
- Receptor variants
- Personalized formulation potential

### Advanced Delivery Technologies

**Microneedle Systems:**
- Dissolving microneedles
- Coated microneedles
- Hollow microneedles
- Vaccine delivery applications

**Nanoparticle Engineering:**
- Size optimization (<100nm for follicular delivery)
- Surface modification
- Stimuli-responsive release
- Targeting ligands

**Iontophoresis/Phonophoresis:**
- Enhanced delivery protocols
- Device standardization
- Combination approaches

### Novel Therapeutic Targets

**Inflammatory Pathways:**
- IL-31 (pruritus)
- TSLP pathway
- OX40/OX40L
- Microbiome-immune axis

**Barrier Restoration:**
- Ceramide supplementation
- Filaggrin breakdown products
- Natural moisturizing factor optimization

**Neurogenic Inflammation:**
- TRPV1 modulation
- Substance P antagonism
- NGF pathway

### Personalized Topical Therapy

**Biomarker-Guided:**
- Disease severity markers
- Treatment response prediction
- Microbiome profiling
- Genetic testing integration

**Precision Formulation:**
- Patient-specific compounding
- Vehicle optimization by skin type
- Pharmacokinetic modeling

### Clinical Trial Design

**Topical Drug Development:**
- Vasoconstriction assays
- Tape stripping pharmacokinetics
- Dermatopharmacokinetics
- Pharmacodynamic endpoints

**Outcome Measures:**
- Validated scoring systems
- Patient-reported outcomes
- Digital photography assessment
- AI-assisted evaluation

### Regulatory Considerations

**Bioequivalence:**
- Topical drug complexity
- In vitro release testing
- Residual drug methodology
- Clinical endpoint studies

**New Drug Approval:**
- Phase I-III requirements
- Vehicle selection justification
- Pediatric study requirements
- Long-term safety data

### Global Perspectives

**Access Issues:**
- Formulation simplification
- Essential medicines list
- Local manufacturing
- Training programs

**Regional Variations:**
- Skin type considerations
- Climate effects
- Cultural practices
- Regulatory harmonization

### Emerging Paradigms

**Combination Approaches:**
- Topical-systemic integration
- Sequential therapy
- Multimodal targets
- Synergy optimization

**Digital Therapeutics:**
- App-based adherence support
- Sensor-enabled packaging
- Treatment tracking
- Outcome prediction

**Regenerative Approaches:**
- Growth factor delivery
- Stem cell activation
- Wound healing optimization
- Anti-aging strategies

### Research Frontiers

**Lipid Replacement:**
- Ceramide formulations
- Cholesterol supplementation
- Barrier restoration therapy

**Antimicrobial Strategies:**
- Antimicrobial peptides
- Bacteriophage therapy
- Microbiome transplantation
- Quorum sensing inhibitors

**Immunotherapy:**
- Topical checkpoint inhibitors
- Cancer vaccine adjuvants
- Allergen immunotherapy
- Tolerance induction

### Health Systems Integration

**Value-Based Care:**
- Outcome measurement
- Cost-effectiveness analysis
- Quality metrics
- Treatment algorithms

**Patient Education:**
- Shared decision-making
- Cultural competency
- Health literacy
- Caregiver training

### Future Directions

**3D Bioprinting:**
- Personalized skin grafts
- Drug testing platforms
- Customized dressings

**Artificial Intelligence:**
- Formulation optimization
- Treatment prediction
- Adherence monitoring
- Outcome assessment

**Wearable Technology:**
- Continuous monitoring
- Drug delivery patches
- Biometric integration
- Real-time adjustment`,
      keyTerms: [
        { term: 'dermatopharmacokinetics', definition: 'Study of drug absorption, distribution, and elimination specifically in the skin' },
        { term: 'skin resident memory T cells', definition: 'Long-lived T cells residing in skin providing local immune memory' },
        { term: 'antimicrobial peptides', definition: 'Natural host defense molecules with potential for topical antimicrobial therapy' },
        { term: 'dissolving microneedles', definition: 'Drug-containing needles that dissolve after insertion, releasing medication' },
        { term: 'dermatopharmacokinetics', definition: 'Specialized PK studies measuring drug in different skin compartments' },
      ],
      clinicalNotes: `Key clinical insights in advanced topical therapy:

1. **Vehicle optimization:** For chronic conditions, ointment bases provide best penetration but foam or cream vehicles may improve adherence. Match vehicle to patient preference and skin condition.

2. **Proactive therapy:** Twice-weekly application of mid-potency steroids or tacrolimus after clearing reduces atopic dermatitis relapse by 50-70% compared to reactive treatment alone.

3. **Steroid phobia:** Address patient concerns directly. Fear of topical steroids leads to undertreatment and worse outcomes. Proper education is essential.

4. **Novel agents:** JAK inhibitors (ruxolitinib) and AhR agonists (tapinarof) provide steroid-like efficacy without steroid side effects, valuable for long-term use and sensitive areas.

5. **Combination fixed-dose products:** Single products combining multiple actives (e.g., calcipotriene/betamethasone foam) improve adherence compared to applying agents separately.

6. **Compounding considerations:** Reserve for situations where commercial products are unavailable or contraindicated. Ensure quality through accredited pharmacies.

7. **Fingertip unit guidance:** One FTU treats approximately one adult palm-sized area. This simple metric helps ensure adequate but not excessive application.`,
    },
  },

  media: [],

  citations: [
    {
      id: 'bolognia-topical',
      type: 'textbook',
      title: 'Dermatology',
      authors: ['Bolognia JL', 'Schaffer JV', 'Cerroni L'],
      source: 'Elsevier',
    },
    {
      id: 'aad-topical-steroids',
      type: 'website',
      title: 'Topical Corticosteroid Use in Dermatology',
      authors: ['American Academy of Dermatology'],
      source: 'AAD',
    },
  ],

  crossReferences: [
    { targetId: 'dermatology-atopic-dermatitis', targetType: 'condition', relationship: 'related', label: 'Atopic Dermatitis' },
    { targetId: 'dermatology-psoriasis', targetType: 'condition', relationship: 'related', label: 'Psoriasis' },
    { targetId: 'dermatology-acne', targetType: 'condition', relationship: 'related', label: 'Acne' },
    { targetId: 'pharmacology-corticosteroids', targetType: 'concept', relationship: 'related', label: 'Corticosteroids' },
  ],

  tags: {
    systems: ['dermatology'],
    topics: ['pharmacology', 'therapeutics', 'dermatology'],
    keywords: ['topical', 'corticosteroids', 'retinoids', 'calcineurin inhibitors', 'vehicle', 'formulation'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'dermatology'],
    },
  },

  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};

export default topicalTherapiesContent;
