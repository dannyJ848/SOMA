/**
 * Viral Skin Infections - Comprehensive Educational Content
 *
 * Covers herpes simplex, varicella-zoster, warts (HPV), molluscum contagiosum,
 * and other viral skin conditions.
 */

import { EducationalContent } from '../../../types';

export const viralSkinInfectionsContent: EducationalContent = {
  id: 'dermatology-viral-infections',
  type: 'condition',
  name: 'Viral Skin Infections',
  alternateNames: ['Cutaneous Viral Infections', 'Viral Exanthems'],

  levels: {
    1: {
      level: 1,
      summary: 'Viral skin infections are caused by viruses and include common conditions like cold sores, chickenpox, shingles, warts, and water warts.',
      explanation: `Viruses are tiny germs that can infect your skin and cause different problems. Some viral skin infections are very common.

**Cold Sores (Herpes Simplex)**
- Small, painful blisters usually on lips or around mouth
- Feel tingling or burning before blisters appear
- Blisters break open, crust over, and heal in 1-2 weeks
- Once you have the virus, it stays in your body and can come back
- Spread by kissing or sharing drinks when sores are present

**Chickenpox and Shingles**
- Chickenpox: Itchy rash with many small blisters all over the body
- Shingles: Painful blisters on ONE side of the body, usually in a stripe
- Shingles happens when the chickenpox virus "wakes up" later in life
- There are vaccines to prevent both!

**Warts**
- Rough, bumpy growths caused by HPV (human papillomavirus)
- Usually on hands and feet
- Can spread to other parts of your body or to other people
- Often go away on their own, but can be treated if bothersome

**Molluscum Contagiosum (Water Warts)**
- Small, shiny, dome-shaped bumps with a dimple in the center
- Very common in children
- Spread by touching or sharing towels
- Usually go away on their own in 6-12 months

**When to See a Doctor:**
- Cold sores near your eyes
- Shingles (especially on the face)
- Warts that spread rapidly or are painful
- Rash with fever and feeling very sick
- Weakened immune system

**Prevention Tips:**
- Get vaccinated for chickenpox and shingles
- Don't touch other people's blisters or warts
- Don't share towels, razors, or drinks
- Wash hands often`,
      keyTerms: [
        { term: 'virus', definition: 'A very tiny germ that causes infections' },
        { term: 'cold sore', definition: 'A blister on or around the lips caused by herpes virus' },
        { term: 'chickenpox', definition: 'An itchy rash with many small blisters caused by varicella virus' },
        { term: 'shingles', definition: 'Painful blisters in a stripe on one side of the body' },
        { term: 'wart', definition: 'A rough bump on the skin caused by HPV' },
        { term: 'vaccine', definition: 'A shot that protects you from getting sick' },
      ],
      analogies: [
        'The herpes virus hides in your nerve cells like someone hiding in a closet, coming out when conditions are right.',
        'Warts are like weeds in a garden - they can spread and come back if not fully removed.',
        'Shingles follows a nerve path like a train following its track.',
      ],
      examples: [
        'A child with itchy blisters all over their body after being exposed at school has chickenpox.',
        'An adult with painful blisters on one side of their chest likely has shingles.',
      ],
    },
    2: {
      level: 2,
      summary: 'Viral skin infections are categorized by viral family (herpesviruses, HPV, poxviruses) with characteristic clinical presentations, natural history, and treatment options.',
      explanation: `## Herpesvirus Infections

### Herpes Simplex Virus (HSV)

**HSV-1 vs HSV-2**:
| Feature | HSV-1 | HSV-2 |
|---------|-------|-------|
| Common site | Oral (cold sores) | Genital |
| Transmission | Saliva, contact | Sexual contact |
| Reactivation | More frequent oral | More frequent genital |

**Primary Herpes**:
- First infection, often more severe
- Grouped vesicles on erythematous base
- Painful, may have systemic symptoms
- Heals in 2-4 weeks

**Recurrent Herpes**:
- Prodrome: Tingling, burning
- Fewer lesions, less severe
- Heals in 7-10 days
- Triggers: Stress, sun, illness, menstruation

**Herpetic Whitlow**: HSV infection of finger
**Herpes Gladiatorum**: HSV from contact sports

### Varicella-Zoster Virus (VZV)

**Primary (Chickenpox)**:
- Pruritic vesicular rash
- "Dewdrop on a rose petal" appearance
- Lesions in different stages simultaneously
- Centripetal distribution (trunk > extremities)

**Reactivation (Herpes Zoster/Shingles)**:
- Dermatomal distribution (unilateral)
- Pain often precedes rash
- Grouped vesicles, become pustular, then crust
- Postherpetic neuralgia is major complication

**Complications**:
- Herpes zoster ophthalmicus (V1 dermatome)
- Ramsay Hunt syndrome (facial nerve, ear)
- Disseminated zoster (immunocompromised)

## Human Papillomavirus (HPV)

**Wart Types**:
| Type | Location | HPV Types |
|------|----------|-----------|
| Common warts (verruca vulgaris) | Hands | 1, 2, 4 |
| Plantar warts | Soles | 1, 2 |
| Flat warts (verruca plana) | Face, hands | 3, 10 |
| Genital warts (condyloma) | Anogenital | 6, 11 |

**Treatment Options**:
- Observation (many resolve spontaneously)
- Salicylic acid (OTC)
- Cryotherapy
- Cantharidin ("beetle juice")
- Immunotherapy (candida antigen)

## Poxvirus Infections

### Molluscum Contagiosum

- Poxvirus infection
- Pearly, dome-shaped papules with central umbilication
- Common in children, sexually transmitted in adults
- Self-limited (6-12 months)
- Treatment if desired: Curettage, cryotherapy, cantharidin

### Orf and Milker's Nodule

- Parapoxviruses from sheep/goats (orf) or cattle
- Occupational exposure
- Self-limited nodule

## Viral Exanthems

**Classic Childhood Exanthems**:
| Disease | Virus | Features |
|---------|-------|----------|
| Measles | Rubeola | Koplik spots, 3 C's, descending rash |
| Rubella | Rubella | Postauricular nodes, mild rash |
| Fifth disease | Parvovirus B19 | "Slapped cheek," lacy rash |
| Roseola | HHV-6 | High fever, then rash appears as fever breaks |

## Treatment Summary

**HSV**:
- Oral acyclovir, valacyclovir, or famciclovir
- Start early for best effect
- Suppressive therapy for frequent recurrences

**VZV (Shingles)**:
- Antivirals within 72 hours of rash onset
- Valacyclovir, famciclovir preferred
- Vaccination for prevention (Shingrix)

**Warts**:
- Often conservative management
- Destruction: Cryo, salicylic acid
- HPV vaccine prevents high-risk types`,
      keyTerms: [
        { term: 'HSV', definition: 'Herpes simplex virus - causes cold sores and genital herpes', pronunciation: 'H-S-V' },
        { term: 'VZV', definition: 'Varicella-zoster virus - causes chickenpox and shingles' },
        { term: 'dermatome', definition: 'Area of skin supplied by a single spinal nerve' },
        { term: 'postherpetic neuralgia', definition: 'Persistent nerve pain after shingles resolves' },
        { term: 'condyloma', definition: 'Genital warts caused by HPV', pronunciation: 'kon-dih-LOH-mah' },
        { term: 'umbilication', definition: 'Central dimple or depression in a skin lesion' },
      ],
      examples: [
        'A wrestler with grouped blisters on the forehead has herpes gladiatorum.',
        'A 70-year-old with painful vesicles in a band on one side of the chest has shingles.',
      ],
    },
    3: {
      level: 3,
      summary: 'Viral skin infections involve specific viral pathogenesis, latency mechanisms, host immune responses, and targeted therapeutic interventions including antivirals and immunomodulation.',
      explanation: `## Herpesvirus Biology and Disease

### HSV Pathogenesis

**Primary Infection**:
- Entry through mucosa or abraded skin
- Local replication in epithelium
- Vesicle formation (cytopathic effect)
- Virus travels retrograde via sensory nerves
- Establishes latency in sensory ganglia (trigeminal, sacral)

**Latency and Reactivation**:
- Viral genome persists as episome in neuron nuclei
- Latency-associated transcripts (LATs) expressed
- Triggers cause reactivation: UV, stress, immunosuppression
- Virus travels anterograde back to skin
- Recurrent lesion in same dermatome

**Clinical Spectrum**:
| Condition | Description |
|-----------|-------------|
| Orolabial herpes | Lip/perioral vesicles |
| Genital herpes | Anogenital vesicles/ulcers |
| Herpetic whitlow | Finger infection |
| Herpes gladiatorum | Contact sports transmission |
| Eczema herpeticum | HSV in atopic dermatitis |
| HSV encephalitis | CNS infection, temporal lobe |
| Neonatal herpes | Severe, life-threatening |

### VZV-Specific Considerations

**Postherpetic Neuralgia (PHN)**:
- Persistent pain >90 days after rash
- Risk factors: Age >50, severe acute pain, ophthalmic zoster
- Prevention: Early antivirals, vaccination
- Treatment: Gabapentin, pregabalin, TCAs, lidocaine patch, capsaicin

**Herpes Zoster Ophthalmicus**:
- V1 dermatome involvement
- Hutchinson sign: Nasociliary nerve (tip of nose) = high eye risk
- Complications: Keratitis, uveitis, vision loss
- Urgent ophthalmology referral

**Vaccination**:
- Shingrix (recombinant): 2 doses, >90% effective
- Recommended for adults >=50
- Also for immunocompromised (discuss with specialist)

### Cytomegalovirus (CMV) Skin Manifestations

- Usually in immunocompromised
- Ulcers (perianal, oral)
- Morbilliform rash
- Vasculitis
- Often systemic disease

### EBV and Skin

- Infectious mononucleosis rash (often after amoxicillin)
- Oral hairy leukoplakia (HIV/immunocompromised)
- Association with lymphoproliferative disorders

## HPV Biology

### Viral Life Cycle

**Infection of Basal Cells**:
- HPV infects basal keratinocytes
- Early genes (E1, E2) regulate replication
- E6 and E7 are oncoproteins (high-risk types)
- Virus replicates as keratinocytes differentiate

**Oncogenic Potential**:
- High-risk HPV: 16, 18, 31, 33, 45, etc.
- E6: Degrades p53 (tumor suppressor)
- E7: Inactivates Rb (cell cycle control)
- Cervical, anal, oropharyngeal cancers

### Clinical HPV Types

| Manifestation | HPV Types | Oncogenic Risk |
|---------------|-----------|----------------|
| Common warts | 1, 2, 4 | Low |
| Plantar warts | 1, 2, 4 | Low |
| Flat warts | 3, 10 | Low |
| Genital warts | 6, 11 | Low |
| Cervical dysplasia/cancer | 16, 18 | High |
| Bowenoid papulosis | 16, 18 | High |
| Epidermodysplasia verruciformis | 5, 8 | Moderate (SCC risk) |

### Wart Treatment Strategies

**First-line**:
- Salicylic acid (keratolytic)
- Cryotherapy (liquid nitrogen)
- Paring/debulking

**Second-line**:
- Cantharidin (blistering agent)
- Immunotherapy: Intralesional Candida antigen
- Topical imiquimod (TLR7 agonist)

**Refractory**:
- Intralesional bleomycin
- Laser ablation
- Photodynamic therapy
- Immunotherapy (HPV vaccine for recurrent warts)

## Poxvirus Infections

### Molluscum Contagiosum

**Pathology**:
- Poxvirus family (MCV types 1-4)
- Infection of keratinocytes
- Characteristic "molluscum bodies" (Henderson-Paterson bodies)
- Large, eosinophilic cytoplasmic inclusions

**Clinical Features**:
- 2-5mm papules, pearly, umbilicated
- May have surrounding dermatitis (molluscum dermatitis)
- Self-resolving but can take 6-18 months
- May be extensive in atopic dermatitis, immunocompromised

**Treatment Options**:
- Benign neglect (will resolve)
- Curettage (scarring possible)
- Cryotherapy
- Cantharidin
- Imiquimod (off-label)
- Tretinoin (off-label)

### Monkeypox (Mpox)

**Clinical Features**:
- Vesiculopustular rash
- Often starts as macules, progresses through stages
- Lymphadenopathy prominent
- Can be painful
- Lesions may be in different stages (unlike varicella)

**Management**:
- Supportive care
- Tecovirimat (TPOXX) for severe/high-risk
- Isolation precautions
- Vaccination (JYNNEOS) for contacts/high-risk`,
      keyTerms: [
        { term: 'latency-associated transcripts', definition: 'HSV RNA transcribed during latency in neurons' },
        { term: 'Hutchinson sign', definition: 'Zoster lesions on nose tip indicating nasociliary nerve involvement' },
        { term: 'E6/E7', definition: 'HPV oncoproteins that inactivate p53 and Rb tumor suppressors' },
        { term: 'Henderson-Paterson bodies', definition: 'Intracytoplasmic inclusion bodies diagnostic of molluscum' },
        { term: 'imiquimod', definition: 'Topical TLR7 agonist that stimulates antiviral immune response' },
        { term: 'tecovirimat', definition: 'Antiviral medication for monkeypox/smallpox', pronunciation: 'teh-KOV-ir-ih-mat' },
      ],
      clinicalNotes: 'Start herpes zoster antivirals within 72 hours of rash onset for best efficacy and PHN prevention. Hutchinson sign (tip of nose involvement) warrants urgent ophthalmology evaluation. HPV vaccination can help reduce recurrent warts even in patients who already have warts. Molluscum in adults should prompt HIV testing.',
    },
    4: {
      level: 4,
      summary: 'Advanced viral dermatology encompasses immunopathogenesis, antiviral resistance, management in immunocompromised hosts, and emerging viral threats.',
      explanation: `## Advanced Herpesvirus Concepts

### HSV Immunopathogenesis

**Host Immune Response**:
- Innate: IFN-alpha, IFN-beta, NK cells
- Adaptive: CD8+ T cells critical for control
- HSV evades via: ICP47 (blocks TAP), glycoprotein C (complement evasion)

**Reactivation Triggers - Mechanisms**:
- UV: DNA damage, local immunosuppression
- Stress: Cortisol effects on immune function
- Fever: Direct viral gene activation
- Local trauma: Cytokine release, neuron stress

### Antiviral Resistance

**Acyclovir Resistance**:
- Usually thymidine kinase (TK) mutations
- Virus cannot phosphorylate acyclovir
- Seen in immunocompromised patients
- ~5% of HIV+ patients on long-term suppression

**Management of Resistant HSV**:
- IV foscarnet (pyrophosphate analog)
- IV cidofovir
- Topical cidofovir gel (compounded)
- Topical imiquimod (immune stimulation)

### HSV in Immunocompromised Hosts

**Clinical Features**:
- Atypical presentations
- Chronic, non-healing ulcers
- Extensive involvement
- Dissemination risk
- Drug-resistant strains more common

**Management Principles**:
- Low threshold for empiric treatment
- Consider resistant virus if not improving
- Culture and sensitivity testing
- May need IV antivirals

### Eczema Herpeticum

**Recognition**:
- Sudden worsening of atopic dermatitis
- Monomorphic punched-out erosions/vesicles
- Fever, lymphadenopathy
- Dermatomal pattern may be absent

**Management**:
- Immediate acyclovir (IV if severe, oral if mild)
- Continue emollients
- Ophthalmology if facial
- Rule out secondary bacterial infection

## Advanced VZV Topics

### Immunocompromised Host

**Patterns**:
- Disseminated zoster (>2 dermatomes)
- Chronic verrucous VZV
- Visceral zoster (pneumonia, hepatitis, encephalitis)
- Atypical presentation (may not follow dermatome)

**Treatment**:
- IV acyclovir for severe/disseminated
- May need longer courses
- Consider maintenance suppression

### Zoster Vaccine Considerations

**Shingrix (Recombinant)**:
- Adjuvanted glycoprotein E vaccine
- 2-dose series (0, 2-6 months)
- Efficacy >90% across age groups
- Can give to immunocompromised (not live)

**Zostavax (Live-attenuated)** - less used:
- Single dose
- Contraindicated in immunocompromised
- Efficacy wanes over time

**Special Populations**:
- Can vaccinate after zoster episode (wait until rash resolved)
- Immunocompromised: Shingrix okay, timing depends on situation
- Prior Zostavax: Can give Shingrix

## HPV Advanced Topics

### Oncogenesis

**Molecular Mechanisms**:
- E6 + E6AP → p53 ubiquitination and degradation
- E7 binds Rb → E2F release → Cell cycle progression
- Integration of viral genome → Loss of E2 → Uncontrolled E6/E7 expression
- Accumulation of mutations → Cancer

**Progression Timeline**:
- HPV infection → CIN1 (low-grade) → CIN2/3 (high-grade) → Invasive cancer
- Takes 10-20+ years typically
- Most infections clear spontaneously

### Therapeutic HPV Vaccines

**Concept**:
- Elicit immune response against E6/E7 (oncoproteins)
- Treatment of existing lesions/cancer
- Multiple approaches in trials

**Types in Development**:
- DNA vaccines
- Peptide vaccines
- Viral vector vaccines
- Cell-based vaccines

### Epidermodysplasia Verruciformis (EV)

**Genetics**:
- Rare, autosomal recessive
- EVER1/EVER2 gene mutations
- Defect in zinc transport in keratinocytes
- Predisposes to beta-HPV infections

**Clinical Features**:
- Widespread flat warts and pityriasis versicolor-like lesions
- High risk of SCC in sun-exposed areas
- Begins in childhood

**Management**:
- Strict sun protection
- Regular skin cancer screening
- Treat SCCs surgically
- Retinoids may help (limited evidence)

## Emerging Viral Infections

### Monkeypox (Mpox)

**Epidemiology Shift**:
- Historically endemic in Africa
- 2022 outbreak: Global spread, MSM community primarily affected
- Different clinical presentation than classic disease

**Clinical Features (2022 Outbreak)**:
- Often anogenital/perianal lesions
- May have few lesions
- Lesions may start at different sites simultaneously
- Painful proctitis common
- Lymphadenopathy

**Management**:
| Severity | Treatment |
|----------|-----------|
| Mild | Supportive care |
| Moderate-Severe | Tecovirimat (TPOXX) |
| Immunocompromised | Tecovirimat, consider vaccinia immune globulin |

**Prevention**:
- JYNNEOS vaccine (2 doses)
- Post-exposure prophylaxis within 4 days
- Contact precautions

### Other Emerging/Re-emerging

- Measles resurgence (vaccine hesitancy)
- Chikungunya, Zika (viral exanthems)
- Enterovirus D68 (respiratory, rash)`,
      keyTerms: [
        { term: 'ICP47', definition: 'HSV immune evasion protein that blocks TAP antigen presentation' },
        { term: 'foscarnet', definition: 'Pyrophosphate analog antiviral for acyclovir-resistant herpes' },
        { term: 'epidermodysplasia verruciformis', definition: 'Rare genetic condition with widespread HPV and high SCC risk' },
        { term: 'EVER genes', definition: 'Genes mutated in epidermodysplasia verruciformis affecting zinc transport' },
        { term: 'JYNNEOS', definition: 'Non-replicating orthopoxvirus vaccine for smallpox and mpox' },
        { term: 'Shingrix', definition: 'Recombinant zoster vaccine with adjuvant, >90% effective' },
      ],
      clinicalNotes: 'Acyclovir-resistant HSV should be suspected in immunocompromised patients not improving on standard therapy - test with culture and sensitivity. Eczema herpeticum requires immediate treatment - any atopic patient with acute worsening and punched-out erosions should be treated presumptively. HPV vaccination may help recurrent warts through broad immune stimulation. Mpox clinical presentation has shifted - consider in appropriate clinical context.',
    },
    5: {
      level: 5,
      summary: 'Expert viral dermatology integrates viral evolution, host genetics, novel therapeutics, vaccine science, and public health considerations for comprehensive viral skin disease management.',
      explanation: `## Viral Evolution and Drug Resistance

### HSV Drug Resistance Mechanisms

**Thymidine Kinase (TK) Mutations**:
- Most common resistance mechanism (~95%)
- TK-negative: Cannot phosphorylate acyclovir
- TK-altered: Reduced affinity for acyclovir

**DNA Polymerase Mutations**:
- Less common (~5%)
- May confer resistance to multiple agents
- Foscarnet, cidofovir may retain activity

**Emerging Therapies for Resistant HSV**:
| Agent | Mechanism | Status |
|-------|-----------|--------|
| Pritelivir | Helicase-primase inhibitor | Phase 3 trials |
| Amenamevir | Helicase-primase inhibitor | Approved (Japan) |
| Brincidofovir | Cidofovir prodrug (oral) | Investigational |

### HPV Evolutionary Considerations

**Phylogenetics**:
- Alpha-papillomaviruses: Mucosal (anogenital, oral)
- Beta-papillomaviruses: Cutaneous (EV-associated)
- Gamma, mu, nu: Various warts

**Vaccine Coverage**:
- 9-valent: 6, 11, 16, 18, 31, 33, 45, 52, 58
- Covers ~90% of cervical cancers
- Does not cover EV-associated types

## Host Genetics in Viral Susceptibility

### HSV Susceptibility

**TLR3 Mutations**:
- TLR3 pathway defects predispose to HSV encephalitis
- Affects interferon production
- Usually present as childhood HSV encephalitis

**STAT1 Deficiency**:
- Impaired IFN-gamma signaling
- Severe viral and mycobacterial infections

### VZV and Genetics

**Severe Varicella Genetic Risk**:
- MST1R mutations
- IRF8 deficiency
- Various primary immunodeficiencies

### HPV Susceptibility

**EVER Gene Function**:
- EVER1 (TMC6), EVER2 (TMC8)
- Regulate zinc transporters
- Zinc inhibits HPV viral functions
- Mutations → EV phenotype

**IRF3 and Related**:
- May affect clearance vs persistence

## Novel Therapeutic Strategies

### Helicase-Primase Inhibitors

**Pritelivir**:
- Targets HSV helicase-primase complex
- Active against TK-negative strains
- Effective for genital herpes suppression
- Reduced shedding
- Phase 3 for immunocompromised HSV

**Amenamevir**:
- Approved in Japan (2017)
- Once daily dosing
- No renal dose adjustment
- Effective for zoster

### Therapeutic Vaccines

**HSV Therapeutic Vaccines**:
- GEN-003: Glycoprotein D + ICP4 + Matrix-M adjuvant
- HerpV: Peptide vaccine
- Goal: Reduce recurrences, shedding

**HPV Therapeutic Vaccines**:
- Target E6/E7 to treat existing lesions
- VGX-3100: DNA vaccine for CIN2/3
- ISA101: Synthetic long-peptide vaccine

### Gene Editing Approaches

**CRISPR for Latent HSV**:
- Target viral genes in latently infected neurons
- Meganuclease approaches
- Challenge: Delivery to ganglia
- Preclinical studies promising

### Oncolytic Viruses

**Talimogene Laherparepvec (T-VEC)**:
- Modified HSV-1 for melanoma
- Expresses GM-CSF
- Intralesional injection
- FDA approved for melanoma

## Public Health and Vaccination

### HPV Vaccination Landscape

**Global Elimination Goal**:
- WHO goal: Cervical cancer elimination
- 90% vaccination coverage target
- Screen and treat strategies

**Implementation Challenges**:
- Vaccine hesitancy
- Resource limitations
- Gender-neutral vaccination
- Catch-up vaccination in adults

### Herpes Vaccine Development

**Challenges**:
- Viral immune evasion
- Latency establishment
- Need for both antibody and T-cell responses

**Approaches**:
| Strategy | Example | Status |
|----------|---------|--------|
| Subunit | Glycoprotein D-based | Failed phase 3 (incomplete protection) |
| Live-attenuated | HSV529 (replication-defective) | Phase 1 |
| mRNA | Moderna HSV vaccine | Preclinical |
| Trivalent | gC, gD, gE combination | Preclinical |

### Mpox Vaccine Strategy

**JYNNEOS (MVA-BN)**:
- Modified vaccinia Ankara
- Non-replicating
- 2-dose series
- Can give post-exposure (within 4 days ideal)

**ACAM2000**:
- Replicating vaccinia
- More side effects
- Contraindicated in immunocompromised
- Reserved for high-risk laboratory workers

## Complex Clinical Scenarios

### Viral Infections in Transplant Recipients

**Timeline-Based Risks**:
| Time Post-Transplant | Major Viral Risks |
|---------------------|-------------------|
| 0-1 month | HSV reactivation |
| 1-6 months | CMV, VZV, HPV (if not on prophylaxis) |
| >6 months | Late CMV, HPV-related neoplasia |

**Management Principles**:
- Prophylaxis per protocol
- Monitor viral loads
- Balance immunosuppression
- Reduce immunosuppression for severe infection

### Viral Infections and Biologics

**TNF Inhibitor-Associated**:
- Increased zoster risk (2-3x)
- VZV vaccination before starting
- Zoster may present atypically

**JAK Inhibitor-Associated**:
- Higher zoster risk than TNF inhibitors
- VZV vaccination before starting
- May need antiviral prophylaxis in some settings

### Chronic Viral Skin Conditions

**Chronic HSV in HIV**:
- AIDS-defining if >1 month
- May be verrucous/hypertrophic
- Culture for resistance testing
- Often need IV antivirals

**Chronic VZV in Immunocompromised**:
- Verrucous VZV
- May look like warts
- Biopsy to diagnose
- Prolonged antivirals`,
      keyTerms: [
        { term: 'pritelivir', definition: 'Novel helicase-primase inhibitor for treatment-resistant HSV', pronunciation: 'prih-TEL-ih-vir' },
        { term: 'helicase-primase inhibitor', definition: 'New class of antivirals targeting HSV replication machinery' },
        { term: 'T-VEC', definition: 'Talimogene laherparepvec - oncolytic HSV-1 approved for melanoma' },
        { term: 'MVA-BN', definition: 'Modified vaccinia Ankara - non-replicating orthopoxvirus vaccine platform' },
        { term: 'therapeutic vaccine', definition: 'Vaccine designed to treat existing infection rather than prevent new infection' },
        { term: 'CRISPR gene editing', definition: 'Technology being explored to target latent viral genomes' },
      ],
      clinicalNotes: `Expert clinical pearls:
1. Helicase-primase inhibitors (pritelivir) offer hope for acyclovir-resistant HSV
2. Consider HSV encephalitis workup for TLR3 pathway defects in children with HSV encephalitis
3. HPV vaccination reduces recurrent warts through broad immune stimulation
4. Zoster risk is elevated with JAK inhibitors - vaccinate before starting
5. Chronic verrucous lesions in immunocompromised should be biopsied (may be VZV)
6. Gene editing approaches for latent HSV are in preclinical development
7. Mpox management has evolved - tecovirimat for severe cases
8. Therapeutic HPV vaccines targeting E6/E7 are in clinical trials`,
    },
  },

  media: [
    {
      id: 'hsv-lifecycle',
      type: 'diagram',
      filename: 'hsv-latency.svg',
      title: 'HSV Life Cycle and Latency',
      description: 'Diagram showing primary infection, latency, and reactivation',
    },
    {
      id: 'viral-skin-lesions',
      type: 'diagram',
      filename: 'viral-morphology.svg',
      title: 'Viral Skin Lesion Morphology',
      description: 'Visual comparison of HSV, VZV, HPV, and molluscum lesions',
    },
  ],

  citations: [
    {
      id: 'cdc-herpes-zoster',
      type: 'website',
      title: 'Shingles (Herpes Zoster) Clinical Overview',
      source: 'Centers for Disease Control and Prevention',
    },
    {
      id: 'bolognia-viral',
      type: 'textbook',
      title: 'Viral Infections',
      source: 'Dermatology (Bolognia)',
      chapter: '80',
    },
  ],

  crossReferences: [
    { targetId: 'dermatology-eczema', targetType: 'condition', relationship: 'related', label: 'Eczema (Eczema Herpeticum)' },
    { targetId: 'dermatology-skin-cancer-warning-signs', targetType: 'topic', relationship: 'related', label: 'Skin Cancer (HPV-related)' },
  ],

  tags: {
    systems: ['integumentary', 'immune'],
    topics: ['dermatology', 'infectious disease', 'virology'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine'],
    },
  },

  createdAt: '2025-01-24T00:00:00Z',
  updatedAt: '2025-01-24T00:00:00Z',
  version: 1,
  status: 'published',
};

export default viralSkinInfectionsContent;
