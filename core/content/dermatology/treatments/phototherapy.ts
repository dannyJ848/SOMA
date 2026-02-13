/**
 * Phototherapy
 *
 * Treatment of skin conditions using ultraviolet light.
 */

import { EducationalContent } from '../../types';

export const phototherapyContent: EducationalContent = {
  id: 'dermatology-treatment-phototherapy',
  type: 'concept',
  name: 'Phototherapy',
  alternateNames: ['Light Therapy', 'UV Therapy', 'Ultraviolet Treatment'],

  levels: {
    1: {
      level: 1,
      summary: 'Phototherapy uses special light to treat skin problems like eczema and psoriasis. It is done under medical supervision.',
      explanation: `## What Is Phototherapy?

Phototherapy is a treatment that uses special lights to help skin get better. Doctors use it for people who have skin problems that do not improve with creams.

## How It Works

The light helps by:
- Reducing inflammation
- Slowing down skin cell growth
- Helping the immune system
- Killing bacteria on skin

## Conditions Treated

- Psoriasis
- Eczema
- Vitiligo (white patches)
- Itchy skin
- Some types of skin lymphoma

## Types of Light Used

**UVB:** Most common type
**UVA:** Used with special medicine
**Excimer laser:** Targets small areas

## What to Expect

- Stand in light booth or cabinet
- Wear protective goggles
- Treatment takes a few minutes
- Usually 2-3 times per week
- May take several weeks to see results

## Safety

- Increases sunburn risk
- May increase skin aging
- Small risk of skin cancer with long-term use
- Always done under doctor supervision`,

      keyTerms: [
        { term: 'Phototherapy', definition: 'Treatment using light' },
        { term: 'UVB', definition: 'Type of ultraviolet light used for treatment' },
        { term: 'UVA', definition: 'Another type of ultraviolet light' },
        { term: 'Inflammation', definition: 'Redness and swelling in skin' },
        { term: 'Vitiligo', definition: 'Condition causing white patches on skin' },
      ],
      analogies: [
        'Phototherapy is like giving your skin a controlled sunbath - just enough to help, not hurt.',
        'Light therapy works like a dimmer switch - it calms down an overactive immune system.',
      ],
      examples: [
        'Patient with psoriasis stands in light booth 3 times weekly',
        'Child with eczema gets narrowband UVB treatment',
        'Adult with vitiligo uses excimer laser on face patches',
      ],
    },

    2: {
      level: 2,
      summary: 'Phototherapy uses controlled ultraviolet light to treat inflammatory skin conditions. Different wavelengths and delivery methods target specific diseases.',
      explanation: `## Types of Phototherapy

**Narrowband UVB (NB-UVB):**
- Wavelength: 311-313 nm
- Most common first-line phototherapy
- Effective for psoriasis, eczema, vitiligo
- Fewer side effects than broadband

**Broadband UVB:**
- Wavelength: 290-320 nm
- Older technology
- More burning risk
- Less commonly used now

**PUVA (Psoralen + UVA):**
- UVA (320-400 nm) + oral psoralen
- More effective but more side effects
- Used for severe cases
- Requires eye protection for 24 hours

**Excimer Laser:**
- 308 nm targeted delivery
- For small, stubborn plaques
- Higher doses to specific areas
- Fewer treatments needed

**Excimer Lamp:**
- 308 nm non-laser delivery
- Larger treatment areas than laser
- Good for scalp and other areas

## Treatment Protocols

**Starting Dose:**
- Based on skin type or MED test
- Increases gradually
- Prevents burns

**Frequency:**
- Typically 2-3 times weekly
- Not daily (allows skin recovery)
- Takes 20-30 treatments for response

**Response Assessment:**
- Photographs track progress
- PASI score for psoriasis
- Repigmentation for vitiligo

## Contraindications

- Photosensitivity disorders
- History of skin cancer
- Certain medications (tetracyclines, thiazides)
- Pregnancy (PUVA specifically)`,

      keyTerms: [
        { term: 'Wavelength', definition: 'Distance between light waves - determines type of UV' },
        { term: 'Psoralen', definition: 'Medicine that makes skin more sensitive to UVA' },
        { term: 'MED', definition: 'Minimal erythema dose - smallest amount causing redness' },
        { term: 'PASI', definition: 'Psoriasis Area and Severity Index - scoring system' },
        { term: 'Photosensitivity', definition: 'Abnormal skin reaction to light' },
      ],
      analogies: [
        'Different wavelengths are like different radio stations - each tuned for different effects.',
        'MED testing is like finding your limit - how much light before you burn.',
      ],
      examples: [
        'Narrowband UVB 3x weekly for plaque psoriasis',
        'PUVA therapy for severe palmoplantar psoriasis',
        'Excimer laser for localized vitiligo patches',
      ],
      clinicalNotes: 'Narrowband UVB has replaced broadband as first-line due to better efficacy and safety. Home NB-UVB units available for patients with difficulty traveling. PUVA reserved for refractory cases due to higher malignancy risk.',
    },

    3: {
      level: 3,
      summary: 'Phototherapy provides targeted immunomodulation for inflammatory skin diseases. Treatment protocols balance efficacy with cumulative dose limitations.',
      explanation: `## Mechanisms of Action

**Immunommodulation:**
- Reduces T-cell activation
- Decreases inflammatory cytokines
- Induces T-cell apoptosis
- Modulates antigen presentation

**Effects on Keratinocytes:**
- Slows proliferation
- Promotes differentiation
- Reduces scaling and thickness

**Other Effects:**
- Stimulates melanocyte migration (vitiligo)
- Antipruritic effects
- Antimicrobial effects (atopic dermatitis)

## Treatment Guidelines

**Psoriasis:**
- NB-UVB first-line for extensive disease
- Initial dose: 70-80% MED or 200-300 mJ/cm2
- Increments: 10-20% per treatment
- Clearance in 20-30 treatments
- Maintenance may prolong remission

**Atopic Dermatitis:**
- NB-UVB for widespread disease
- Often combined with topical therapy
- Effective for acute flares and maintenance
- Reduces need for systemic steroids

**Vitiligo:**
- NB-UVB for widespread disease
- Excimer laser for localized patches
- Face and neck respond best
- Hands and feet respond poorly
- Long treatment courses (6-12 months)

**Cutaneous T-cell Lymphoma:**
- PUVA or NB-UVB for patch/plaque stage
- Part of multimodality treatment
- Maintenance therapy important

## Side Effects

**Acute:**
- Erythema, burning
- Dryness
- Pruritus
- Koebner phenomenon in psoriasis

**Chronic:**
- Photoaging
- Lentigines
- Skin cancer risk (dose-dependent)
- Cataracts (PUVA)`,

      keyTerms: [
        { term: 'T-cell', definition: 'Type of immune cell involved in skin inflammation' },
        { term: 'Apoptosis', definition: 'Programmed cell death' },
        { term: 'Keratinocyte', definition: 'Main cell type in outer layer of skin' },
        { term: 'Cytokines', definition: 'Proteins that signal immune responses' },
        { term: 'Melanocyte', definition: 'Cells that produce skin pigment' },
        { term: 'Koebner phenomenon', definition: 'New lesions forming at sites of skin injury' },
        { term: 'Lentigines', definition: 'Small brown spots on sun-exposed skin' },
      ],
      analogies: [
        'T-cell apoptosis is like turning off noisy alarms - the immune response quiets down.',
        'Keratinocyte slowing is like taking foot off the gas pedal - skin growth normalizes.',
      ],
      examples: [
        'Patient with guttate psoriasis clearing after 24 NB-UVB treatments',
        'Child with severe eczema requiring phototherapy to reduce steroid dependence',
        'Vitiligo patient with facial repigmentation after 6 months NB-UVB',
      ],
      clinicalNotes: 'Goeckerman regimen combines coal tar with UVB for enhanced efficacy. Ingram regimen uses dithranol with UVB. Both require specialized centers. Monitor cumulative UV dose and skin cancer history. Eye protection mandatory.',
    },

    4: {
      level: 4,
      summary: 'Phototherapy requires careful patient selection and monitoring. Understanding photocarcinogenesis risk and optimizing treatment protocols improves outcomes.',
      explanation: `## Photocarcinogenesis

**Risk Factors:**
- Cumulative UV dose
- Skin phototype (fair skin higher risk)
- History of skin cancer
- Immunosuppression
- Previous PUVA therapy

**Data:**
- NB-UVB: modest risk with extensive use
- PUVA: higher risk, dose-dependent
- Squamous cell carcinoma > basal cell
- Melanoma risk controversial

**Prevention Strategies:**
- Limit total lifetime sessions
- Regular skin examinations
- Sun protection counseling
- Avoid in high-risk patients

## Home Phototherapy

**Indications:**
- Stable disease
- Motivated patients
- Difficulty accessing office
- Previous successful response

**Training Required:**
- Proper use of equipment
- Dosing protocols
- Side effect recognition
- When to contact physician

**Monitoring:**
- Regular follow-up visits
- Treatment logs
- Photographs
- Safety checks

## Combination Therapies

**With Topicals:**
- Vitamin D analogs + UVB (synergistic)
- Steroids + UVB
- Tar preparations (Goeckerman)
- Dithranol (Ingram)

**With Systemics:**
- Methotrexate + UVB
- Retinoids + UVB (Re-PUVA)
- Biologics + UVB (caution)

## Special Populations

**Children:**
- Often well-tolerated
- Parental education crucial
- School schedule coordination
- Long-term monitoring essential

**Pregnancy:**
- NB-UVB generally safe
- PUVA contraindicated
- Folate supplementation recommended

**Elderly:**
- Increased skin cancer baseline risk
- Multiple medications (photosensitivity)
- Skin fragility considerations`,

      keyTerms: [
        { term: 'Photocarcinogenesis', definition: 'Cancer development from UV exposure' },
        { term: 'Phototype', definition: 'Skin type classification based on sun reaction' },
        { term: 'Goeckerman regimen', definition: 'Coal tar plus UVB therapy' },
        { term: 'Ingram regimen', definition: 'Dithranol plus UVB therapy' },
        { term: 'Re-PUVA', definition: 'Retinoid plus PUVA combination' },
      ],
      analogies: [
        'Cumulative UV dose is like a bank account - deposits add up over time.',
        'Combination therapy is like a team approach - multiple players working together.',
      ],
      examples: [
        'Patient on home NB-UVB with monthly dermatology follow-up',
        'Psoriasis patient on calcipotriene plus NB-UVB achieving faster clearance',
        'Elderly patient requiring careful monitoring due to history of SCC',
      ],
      clinicalNotes: 'The 1000-session threshold often cited as high-risk for NB-UVB, though data limited. Consider non-UV alternatives (biologics, systemic agents) for patients approaching high cumulative doses. Document baseline skin examination and photo-distribution of lesions.',
    },

    5: {
      level: 5,
      summary: 'Phototherapy continues to evolve with targeted delivery systems and optimized protocols. Understanding molecular mechanisms guides personalized treatment approaches.',
      explanation: `## Molecular Mechanisms

**DNA Effects:**
- Pyrimidine dimer formation
- Activation of p53 pathway
- Cell cycle arrest
- Regulated cell death

**Immune Effects:**
- Regulatory T-cell induction
- IL-10 upregulation
- Th1/Th2 cytokine modulation
- Langerhans cell depletion

**Antioxidant Responses:**
- Nrf2 pathway activation
- Heme oxygenase-1 induction
- Reduced oxidative stress

## Advanced Modalities

**308 nm Excimer Light:**
- Monochromatic delivery
- Targeted high-dose therapy
- Reduced cumulative exposure
- Monocyte apoptosis mechanism

**UVA1 Therapy:**
- 340-400 nm wavelength
- Deep penetration
- Fibroblast effects
- Scleroderma and morphea applications

**Balneophototherapy:**
- Bath PUVA (soak in psoralen bath)
- Dead Sea salt baths + UVB
- Enhanced efficacy
- Reduced systemic effects

**Targeted Phototherapy:**
- Laser delivery systems
- Precise dosing to lesions
- Sparing of surrounding skin
- Reduced total UV burden

## Research Directions

**Personalized Dosing:**
- Genetic polymorphisms
- Minimal erythema dose optimization
- Response prediction
- Biomarker development

**LED-Based Systems:**
- Narrowband delivery
- Home use potential
- Cost reduction
- Safety improvements

**Photodynamic Therapy (PDT):**
- Photosensitizer + light
- Actinic keratosis treatment
- Non-melanoma skin cancer
- Cosmetic applications

## Quality of Life Considerations

**Treatment Burden:**
- Time commitment (2-3x weekly)
- Travel requirements
- Cost considerations
- Work/school impact

**Shared Decision-Making:**
- Risk-benefit discussions
- Patient preferences
- Alternative options
- Long-term planning`,

      keyTerms: [
        { term: 'Pyrimidine dimer', definition: 'DNA damage caused by UV light' },
        { term: 'Nrf2 pathway', definition: 'Cellular antioxidant defense system' },
        { term: 'Balneophototherapy', definition: 'Combining baths with phototherapy' },
        { term: 'Photodynamic therapy', definition: 'Light-activated treatment using photosensitizers' },
        { term: 'Langerhans cell', definition: 'Immune cells in skin affected by UV' },
      ],
      analogies: [
        'Pyrimidine dimers are like stuck zippers in DNA - UV causes the problem, repair mechanisms fix it.',
        'Balneophototherapy is like a spa treatment with medical benefits - relaxation plus healing.',
      ],
      examples: [
        'Patient with morphea responding to UVA1 therapy',
        'Genetic testing guiding personalized phototherapy dosing',
        'Photodynamic therapy for field cancerization in transplant patient',
      ],
      clinicalNotes: 'Consider VITAL (Vitiligo Impact and Treatment Assessment) or DLQI (Dermatology Life Quality Index) to assess treatment impact. Document cumulative UV exposure across all sources (phototherapy, sunlight, tanning). Coordinate with primary care for total body skin examinations, especially in high-risk patients.',
    },
  },

  media: [],
  citations: [],
  crossReferences: [
    { targetId: 'dermatology-treatment-steroids', targetType: 'concept', relationship: 'related', label: 'Often combined with phototherapy' },
    { targetId: 'dermatology-psoriasis', targetType: 'topic', relationship: 'related', label: 'Common indication' },
  ],
  tags: {
    systems: ['integumentary'],
    topics: ['dermatology', 'treatments', 'phototherapy', 'UV', 'light-therapy'],
    keywords: ['phototherapy', 'UVB', 'PUVA', 'psoriasis', 'eczema', 'vitiligo', 'light'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, shelf: ['dermatology'] },
  },

  createdAt: '2025-01-28',
  updatedAt: '2025-01-28',
  version: 1,
  status: 'published',
};
