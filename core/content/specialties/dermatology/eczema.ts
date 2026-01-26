/**
 * Eczema (Atopic Dermatitis) - Comprehensive Educational Content
 *
 * Covers pathophysiology, clinical presentation, and evidence-based management
 * of atopic dermatitis and related eczematous conditions.
 */

import { EducationalContent } from '../../types';

export const eczemaContent: EducationalContent = {
  id: 'dermatology-eczema',
  type: 'condition',
  name: 'Eczema (Atopic Dermatitis)',
  alternateNames: ['Atopic Eczema', 'Atopic Dermatitis', 'AD'],
  hpoId: 'HP:0000964',

  levels: {
    1: {
      level: 1,
      summary: 'Eczema is a condition that makes your skin dry, itchy, and red - it often runs in families and is very common in children.',
      explanation: `Eczema is one of the most common skin problems, especially in kids. It makes your skin very itchy, dry, and sometimes red or bumpy.

**What Does Eczema Look Like?**
- Dry, rough patches of skin
- Red or brown-gray patches
- Very itchy, especially at night
- Small bumps that may leak fluid when scratched
- Thick, cracked, or scaly skin

**Where Does It Usually Appear?**
- **Babies**: Face, cheeks, and scalp
- **Children**: Inside of elbows and backs of knees
- **Adults**: Hands, feet, and face

**What Causes Eczema?**
Eczema happens when your skin cannot protect itself well from things like:
- Dry air
- Soaps and detergents
- Allergens like dust and pollen
- Stress

**How to Feel Better:**
- Use thick, fragrance-free moisturizers every day
- Take short, lukewarm baths (not hot!)
- Use gentle, soap-free cleansers
- Avoid scratching (keep fingernails short)
- Wear soft, breathable fabrics like cotton

**The Good News:**
Many children outgrow eczema as they get older. Even if it does not go away completely, treatments can help control it.`,
      keyTerms: [
        { term: 'eczema', definition: 'A skin condition that causes dry, itchy, red patches' },
        { term: 'moisturizer', definition: 'A cream or lotion that adds moisture to dry skin' },
        { term: 'flare', definition: 'When eczema suddenly gets worse' },
        { term: 'trigger', definition: 'Something that makes eczema worse' },
        { term: 'sensitive skin', definition: 'Skin that reacts easily to soaps, fabrics, or other things' },
      ],
      analogies: [
        'Your skin is like a brick wall - in eczema, the mortar between the bricks is missing, so things can get through.',
        'Moisturizer acts like a raincoat for your skin, protecting it from things that make it dry.',
        'An eczema flare is like a fire - you need to put it out quickly before it spreads.',
      ],
      examples: [
        'A baby with eczema might have red, scaly cheeks that get worse in dry winter air.',
        'A child might have itchy patches in the creases of their elbows that get scratched until they bleed.',
      ],
    },
    2: {
      level: 2,
      summary: 'Atopic dermatitis is a chronic, relapsing inflammatory skin disease characterized by pruritus, xerosis, and eczematous lesions, associated with barrier dysfunction and immune dysregulation.',
      explanation: `Atopic dermatitis (AD) affects up to 20% of children and 3% of adults, making it one of the most common chronic skin diseases.

## The Atopic Triad

AD is part of the "atopic march":
1. **Atopic dermatitis** (often first, in infancy)
2. **Food allergies**
3. **Allergic rhinitis** (hay fever)
4. **Asthma**

## Clinical Features

**Essential Features**:
- Pruritus (itching) - hallmark symptom
- Eczematous morphology (acute, subacute, chronic)
- Chronic or relapsing course
- Age-appropriate distribution

**Age-Related Distribution**:
| Age Group | Typical Location |
|-----------|------------------|
| Infant (0-2 years) | Face, scalp, extensor surfaces |
| Childhood (2-12 years) | Flexural areas (antecubital, popliteal) |
| Adult | Hands, face, flexures, generalized |

**Lesion Morphology by Phase**:
- **Acute**: Erythema, edema, vesicles, oozing
- **Subacute**: Erythema, scaling, crusting
- **Chronic**: Lichenification (thickened, leathery skin), fissures

## Pathophysiology Overview

**Two Key Problems**:

1. **Barrier Dysfunction**:
   - Decreased filaggrin (structural protein)
   - Reduced ceramides in skin
   - Increased water loss
   - Easy penetration of allergens and irritants

2. **Immune Dysregulation**:
   - Th2-dominant inflammation
   - Elevated IgE in most patients
   - Increased IL-4, IL-13, IL-31

## Treatment Approach

**Basic Skin Care (Everyone)**:
- Moisturizers multiple times daily
- Gentle, fragrance-free cleansers
- Short, lukewarm baths
- Trigger avoidance

**Mild AD**:
- Low-potency topical corticosteroids (hydrocortisone)
- Topical calcineurin inhibitors (pimecrolimus, tacrolimus)

**Moderate AD**:
- Medium-potency topical steroids
- Wet wrap therapy

**Severe AD**:
- Potent topical steroids
- Phototherapy
- Systemic treatments (dupilumab, JAK inhibitors)

## Complications

- Secondary bacterial infection (Staphylococcus aureus colonization common)
- Eczema herpeticum (HSV superinfection - emergency!)
- Psychological impact (sleep disruption, quality of life)`,
      keyTerms: [
        { term: 'atopic dermatitis', definition: 'The medical term for eczema - a chronic inflammatory skin disease', pronunciation: 'ay-TOP-ik der-mah-TY-tis' },
        { term: 'pruritus', definition: 'Medical term for itching', pronunciation: 'proo-RY-tus' },
        { term: 'lichenification', definition: 'Thickening of skin with exaggerated lines from chronic scratching', pronunciation: 'ly-ken-ih-fih-KAY-shun' },
        { term: 'xerosis', definition: 'Abnormally dry skin', pronunciation: 'zee-ROH-sis' },
        { term: 'filaggrin', definition: 'A protein essential for skin barrier function', pronunciation: 'fil-AG-rin' },
        { term: 'atopic march', definition: 'The progression from eczema to food allergies, hay fever, and asthma' },
      ],
      examples: [
        'A 6-month-old with red, weeping patches on the cheeks that started at 3 months likely has infantile atopic dermatitis.',
        'A 10-year-old with thick, leathery patches in the elbow creases has chronic lichenified eczema.',
      ],
    },
    3: {
      level: 3,
      summary: 'Atopic dermatitis involves complex interactions between epidermal barrier defects, type 2 immune polarization, skin microbiome dysbiosis, and neurogenic inflammation, with management targeting multiple pathogenic pathways.',
      explanation: `## Pathophysiology in Detail

### Barrier Dysfunction

**Filaggrin (FLG) Defects**:
- FLG loss-of-function mutations present in 30-50% of AD patients
- FLG mutations are strongest genetic risk factor
- Effects of FLG deficiency:
  - Decreased natural moisturizing factor (NMF)
  - Elevated skin pH
  - Reduced antimicrobial peptides
  - Enhanced allergen penetration

**Lipid Abnormalities**:
- Reduced total ceramides (especially ceramide 1)
- Altered ceramide chain length and composition
- Decreased cholesterol sulfate
- Abnormal lamellar body secretion

**Tight Junction Defects**:
- Reduced claudin-1 expression
- Increased paracellular permeability

### Immune Dysregulation

**Type 2 Immune Axis**:
- Th2 cells: IL-4, IL-13, IL-31
- ILC2s: IL-5, IL-13 (respond to TSLP, IL-33, IL-25)
- Mast cells and basophils
- Eosinophils

**Cytokine Roles**:
| Cytokine | Key Effects |
|----------|-------------|
| IL-4 | IgE class switching, Th2 differentiation, barrier disruption |
| IL-13 | Barrier disruption, fibrosis, itch |
| IL-31 | Major pruritogen (acts on sensory neurons) |
| IL-5 | Eosinophil survival |
| TSLP | DC activation, Th2 promotion |

**Chronic Phase - Th1/Th22 Contribution**:
- Chronic lesions show IFN-gamma (Th1)
- IL-22 promotes epidermal hyperplasia
- Mixed immune phenotype in chronic AD

### Microbiome Dysbiosis

**Staphylococcus aureus**:
- Colonizes >90% of AD skin
- Correlates with disease severity
- Mechanisms of harm:
  - Superantigens trigger T-cell activation
  - Delta-toxin degranulates mast cells
  - Biofilm formation
  - Proteases damage barrier

**Loss of Diversity**:
- Reduced commensal bacteria during flares
- Loss of protective Staphylococcus epidermidis
- Recovery of diversity with treatment

### Neurogenic Inflammation

**Itch Pathways**:
- IL-31 receptor (IL-31RA/OSMR) on sensory neurons
- TSLP receptor on neurons
- Histamine-independent mechanisms predominate
- Substance P, NGF involvement
- Itch-scratch cycle perpetuates inflammation

## Diagnostic Criteria

**Hanifin and Rajka Criteria** (need 3 of 4 major + 3 of 23 minor):
- Major: Pruritus, typical morphology/distribution, chronic relapsing, personal/family atopy
- Minor: Xerosis, elevated IgE, early onset, etc.

**UK Working Party Criteria** (more specific):
- Itchy skin plus 3+ of: History of flexural involvement, visible flexural dermatitis, dry skin, onset <2 years, history of asthma/hay fever

## Treatment Algorithm

### Maintenance Therapy
- Daily emollients (ceramide-containing preferred)
- Proactive topical anti-inflammatory (TCS or TCI twice weekly to healed areas)
- Trigger identification and avoidance

### Flare Treatment

**Topical Corticosteroids**:
- Match potency to location and severity
- Face/folds: Low potency (hydrocortisone)
- Body: Medium (triamcinolone)
- Palms/soles/lichenified: High potency
- Risk of atrophy with prolonged use

**Topical Calcineurin Inhibitors**:
- Tacrolimus 0.03%, 0.1%; pimecrolimus 1%
- No atrophy risk - preferred for face/folds
- Steroid-sparing maintenance
- Burning sensation initially common

**Topical PDE4 Inhibitor**:
- Crisaborole 2% ointment
- Mild-moderate AD
- No black box warning
- Burning/stinging common

**Topical JAK Inhibitor**:
- Ruxolitinib 1.5% cream
- Short-term, mild-moderate AD
- Rapid itch relief

### Systemic Therapy for Moderate-Severe AD

**Dupilumab** (anti-IL-4Ralpha):
- First-line biologic for moderate-severe AD
- Blocks IL-4 and IL-13 signaling
- Subcutaneous every 2 weeks
- Side effects: Conjunctivitis (unique to AD population)

**JAK Inhibitors**:
- Abrocitinib, upadacitinib (oral)
- Rapid onset of action
- Monitor CBC, lipids, liver function
- Risk: Infections, thrombosis (class warning)

**Other Options**:
- Tralokinumab (anti-IL-13)
- Phototherapy (NB-UVB)
- Methotrexate, cyclosporine, azathioprine (older immunosuppressants)`,
      keyTerms: [
        { term: 'TSLP', definition: 'Thymic stromal lymphopoietin - alarmin cytokine from keratinocytes promoting type 2 inflammation', pronunciation: 'T-S-L-P' },
        { term: 'IL-31', definition: 'Major itch-inducing cytokine in atopic dermatitis' },
        { term: 'dupilumab', definition: 'Monoclonal antibody blocking IL-4 receptor alpha, first-line biologic for moderate-severe AD', pronunciation: 'doo-PIL-oo-mab' },
        { term: 'calcineurin inhibitor', definition: 'Topical immunosuppressant (tacrolimus, pimecrolimus) that inhibits T-cell activation' },
        { term: 'proactive therapy', definition: 'Applying topical anti-inflammatory to healed areas twice weekly to prevent flares' },
        { term: 'wet wrap therapy', definition: 'Application of wet bandages over topical medications to increase penetration' },
      ],
      clinicalNotes: 'FLG genotyping is not routine but may guide counseling about prognosis and atopy risk. S. aureus decolonization (bleach baths, mupirocin) can help in colonized patients. Proactive twice-weekly topical therapy significantly reduces flare frequency. Dupilumab-associated conjunctivitis occurs in ~10% and can be managed with lubricants or tacrolimus eye drops.',
    },
    4: {
      level: 4,
      summary: 'Advanced atopic dermatitis management requires understanding genotype-phenotype correlations, emerging biologics, biomarker-driven therapy, and management of AD subtypes and complications.',
      explanation: `## Genetics and Endotyping

### Genetic Architecture

**Barrier Gene Variants**:
- FLG: Strongest effect; R501X, 2282del4 most common in Europeans
- FLG2, SPINK5, CDSN, LOR, SPRR genes
- Tight junction genes (CLDN1)

**Immune Gene Variants**:
- IL-4, IL-13, IL-4RA, IL-13RA1
- IL-31, IL-31RA
- TSLP, IL-33
- Th2 pathway genes

**GWAS Findings**:
- >30 susceptibility loci identified
- Overlap with other atopic diseases
- Many variants in immune regulatory regions

### AD Phenotypes/Endotypes

**Age-Related**:
| Phenotype | Features | Immune Profile |
|-----------|----------|----------------|
| Infant-onset | Face, extensor, food sensitivity | High Th2, ILC2 |
| Childhood | Flexural, bacterial complications | Th2 + S. aureus |
| Adult-onset | Different genetics, occupation | Th2/Th22/Th1 mixed |
| Elderly | Often xerotic, broad distribution | Th22 prominent |

**Ethnic Variations**:
- Asian AD: More Th17, psoriasiform features
- African American AD: Th22-dominant, more papular
- FLG mutations vary by population

**Intrinsic vs Extrinsic AD**:
- Extrinsic (80%): Elevated IgE, FLG mutations, allergic comorbidities
- Intrinsic (20%): Normal IgE, less atopy, may be different disease

### Biomarkers in AD

**Serum Biomarkers**:
| Marker | Correlation |
|--------|-------------|
| Total IgE | Disease severity |
| CCL17/TARC | Most validated severity biomarker |
| CCL22/MDC | Disease activity |
| Periostin | Type 2 inflammation |
| IL-22 | Epidermal hyperplasia |

**Skin Biomarkers** (research):
- SCORAD, EASI (clinical severity)
- TEWL (transepidermal water loss)
- Electrical impedance (barrier function)
- Tape strip proteomics

## Complications Deep Dive

### Eczema Herpeticum (Kaposi Varicelliform Eruption)

**Recognition**:
- Sudden worsening with punched-out erosions/vesicles
- "Monomorphic" clustered vesicles
- Fever, lymphadenopathy
- Face and areas of active AD

**Management**:
- Immediate acyclovir (IV if severe, oral if mild)
- Ophthalmology if periocular
- Continue barrier repair
- Risk of recurrence

### Secondary Bacterial Infection

**S. aureus Complications**:
- Impetiginization (honey-crusted lesions)
- Folliculitis
- Furuncles, abscesses
- Rarely: Sepsis in severe AD

**Management**:
- Bleach baths (1/4-1/2 cup per bathtub, twice weekly)
- Topical mupirocin to nares and lesions
- Systemic antibiotics if widespread
- Consider MRSA coverage empirically

### Ocular Complications

- Allergic conjunctivitis
- Atopic keratoconjunctivitis (can scar)
- Keratoconus (associated with eye rubbing)
- Anterior subcapsular cataracts
- Herpes simplex keratitis
- Dupilumab-associated conjunctivitis

## Advanced Therapeutics

### Biologic Pipeline

**Approved**:
- Dupilumab (IL-4Ralpha)
- Tralokinumab (IL-13)

**Emerging**:
- Lebrikizumab (IL-13) - high affinity
- Nemolizumab (IL-31RA) - targets itch
- Amlitelimab (OX40L) - T-cell modulation
- Rocatinlimab (OX40) - T-cell depletion

### JAK Inhibitor Details

**JAK1-Selective** (Abrocitinib, Upadacitinib):
- Block IL-4, IL-13, IL-31 signaling
- Rapid onset (itch improvement within days)
- Abrocitinib: 100mg, 200mg daily
- Upadacitinib: 15mg, 30mg daily

**Monitoring**:
- Baseline: CBC, LFTs, lipids, viral hepatitis
- Follow-up: CBC at 4-8 weeks, lipids at 12 weeks
- Screen for and treat latent TB
- Avoid live vaccines

**Warnings**:
- Serious infections
- VTE risk (class warning, older patients)
- Malignancy risk (uncertain)
- Avoid in severe immunocompromise

### Phototherapy Protocols

**Narrowband UVB**:
- First-line phototherapy for AD
- 2-3 times weekly
- Gradual dose escalation
- Expect response in 2-3 months

**PUVA** (Psoralen + UVA):
- More effective but more risk
- Reserved for refractory cases
- Long-term: Skin cancer risk

## Comorbidity Management

**Atopic March Prevention**:
- Early emollient use may prevent AD
- Early introduction of allergenic foods (LEAP study)
- Skin barrier repair may reduce sensitization

**Sleep Disturbance**:
- IL-31 causes itch that peaks at night
- Sedating antihistamines may help sleep (not itch)
- Treat underlying AD aggressively

**Psychosocial**:
- Screen for anxiety, depression
- Quality of life assessment (DLQI, POEM)
- Support groups, psychological support`,
      keyTerms: [
        { term: 'CCL17/TARC', definition: 'Chemokine biomarker correlating with AD severity, useful for monitoring response' },
        { term: 'eczema herpeticum', definition: 'Disseminated HSV infection in AD skin - a dermatologic emergency' },
        { term: 'EASI score', definition: 'Eczema Area and Severity Index - standardized clinical severity measure' },
        { term: 'endotype', definition: 'Disease subtype defined by underlying molecular/immune mechanisms' },
        { term: 'OX40/OX40L', definition: 'Costimulatory molecules on T cells targeted by emerging AD biologics' },
        { term: 'intrinsic AD', definition: 'Atopic dermatitis variant without elevated IgE or clear allergic associations' },
      ],
      clinicalNotes: 'CCL17/TARC can be used to monitor treatment response in clinical trials and increasingly in practice. Ethnic differences in AD presentation may reflect underlying endotype differences requiring personalized treatment. JAK inhibitors offer rapid relief but require careful monitoring. Emerging biologics like nemolizumab specifically target itch, which may be valuable for patients with discordant itch and inflammation.',
    },
    5: {
      level: 5,
      summary: 'Expert atopic dermatitis management integrates precision medicine approaches, investigational therapeutics, complex comorbidity networks, and health systems strategies for optimal outcomes.',
      explanation: `## Precision Medicine in AD

### Molecular Stratification

**Biomarker-Guided Therapy**:
| Biomarker Profile | Suggested Approach |
|-------------------|-------------------|
| High CCL17, high IgE | Strong type 2; dupilumab |
| IL-22 dominant | Consider IL-22 targeting agents |
| IL-31 high, severe itch | Nemolizumab |
| Th17 prominent (Asian phenotype) | May benefit from IL-17 targeting |

**Pharmacogenomics**:
- CYP2C19 poor metabolizers: Higher abrocitinib exposure
- Future: Predict responders vs non-responders

### Transcriptomic Studies

**Skin RNA Profiling**:
- AD shows distinct signature vs psoriasis, normal
- Acute vs chronic lesional profiles differ
- Treatment response correlates with transcriptomic normalization
- Future: RNA-based severity scoring

**Single-Cell Analysis**:
- T-cell subset characterization
- ILC2 heterogeneity
- Keratinocyte activation states
- Spatial transcriptomics revealing tissue architecture

## Investigational Therapeutics

### Novel Biologics

**IL-31 Pathway**:
- Nemolizumab (anti-IL-31RA): Phase 3 positive
- Targets itch specifically
- May combine with IL-4/13 blockers

**OX40 Pathway**:
- Rocatinlimab (anti-OX40): Depletes activated T cells
- Amlitelimab (anti-OX40L): Blocks T-cell costimulation
- May provide disease modification

**IL-33 Pathway**:
- Etokimab (anti-IL-33): Early data promising
- Targets upstream "alarmin"

**TSLP Pathway**:
- Tezepelumab: Approved for asthma, studied in AD
- Targets epithelial-derived initiator cytokine

### Small Molecules

**Topical JAK Inhibitors**:
- Ruxolitinib (JAK1/2): FDA approved
- Delgocitinib (pan-JAK): Approved in Japan
- Tapinarof (AhR agonist): Non-JAK, steroid-free option

**Oral Agents in Development**:
- SYK inhibitors
- PDE4 inhibitors (oral)
- Bruton tyrosine kinase (BTK) inhibitors
- Sphingosine-1-phosphate receptor modulators

### Microbiome Therapeutics

**Approaches**:
- Topical probiotics (S. hominis, Roseomonas mucosa)
- Bacteriocin-producing commensal transplant
- Phage therapy targeting S. aureus
- Lysins (enzymes destroying S. aureus wall)

**Rationale**:
- Restore healthy microbiome
- Competitive exclusion of S. aureus
- Reduce antimicrobial peptide deficiency impact

## Complex Disease Management

### Treatment-Refractory AD

**Evaluation**:
1. Confirm diagnosis (biopsy if uncertain)
2. Assess adherence
3. Rule out contact allergy (patch testing)
4. Screen for complications (infection, drug reaction)
5. Consider alternative diagnoses (CTCL, scabies, dermatomyositis)

**Approach**:
- Combination biologic + JAK inhibitor (limited data)
- Cyclosporine bridge while initiating biologic
- Address specific barriers (cost, injection fear)
- Multidisciplinary team (psychology, allergy)

### AD and Systemic Disease

**Cardiovascular Risk**:
- Severe AD associated with CV events
- Chronic inflammation hypothesis
- Traditional risk factor management important
- IL-4/13 blockade may improve vascular biomarkers

**Bone Health**:
- Topical steroid overuse concern
- Chronic inflammation effects
- Vitamin D often low in AD

**Mental Health**:
- 2-3x increased anxiety/depression
- Sleep deprivation contribution
- Itch-depression cycle
- Screen and treat actively

### Health Systems Approaches

**Stepped Care Model**:
- Level 1: Primary care (mild AD, basic therapy)
- Level 2: Dermatology (moderate, topical optimization)
- Level 3: Specialist center (severe, biologics, trials)

**Quality Metrics**:
- Time to dermatology referral
- Achievement of clear/almost clear
- Reduction in flares
- Quality of life improvement (DLQI)
- Appropriate use of biologics vs immunosuppressants

**Cost-Effectiveness**:
- Biologics expensive but reduce hospitalizations
- Proactive therapy prevents flares
- QALY analyses support biologics in moderate-severe AD

## Emerging Concepts

### Disease Modification

**Goals**:
- Prevent AD development (emollient trials in at-risk infants)
- Alter natural history (prevent atopic march)
- Induce sustained remission (tolerogenic approaches)

**Evidence**:
- Early emollient trials mixed
- Dupilumab may prevent food allergy development
- OX40 targeting may provide "disease modification"

### The Neuro-Immune-Barrier Triad

**Integration**:
- Sensory neurons release neuropeptides (SP, CGRP)
- Mast cell-neuron synapses
- Neurogenic inflammation amplifies type 2 response
- TRPV1, TRPA1 on sensory neurons

**Therapeutic Implications**:
- Targeting neural pathways may break itch-scratch cycle
- Potential for topical neural modulators
- Mind-body approaches may have biological basis

### Biomarker Development

**FDA Qualification Pathway**:
- CCL17/TARC pursuing qualification
- May allow biomarker-based endpoints in trials
- Enable adaptive trial designs

**Point-of-Care Testing**:
- TEWL devices for barrier assessment
- Rapid CCL17 tests in development
- Image-based AI severity scoring`,
      keyTerms: [
        { term: 'nemolizumab', definition: 'Anti-IL-31 receptor antibody specifically targeting itch in atopic dermatitis', pronunciation: 'neh-moh-LIZ-oo-mab' },
        { term: 'tapinarof', definition: 'Topical aryl hydrocarbon receptor agonist, non-steroidal anti-inflammatory for AD' },
        { term: 'disease modification', definition: 'Treatment that alters the underlying disease course rather than just controlling symptoms' },
        { term: 'QALY', definition: 'Quality-adjusted life year - metric for cost-effectiveness analysis' },
        { term: 'transcriptomics', definition: 'Study of all RNA transcripts to characterize cellular states and disease phenotypes' },
        { term: 'lysins', definition: 'Enzymes derived from bacteriophages that can destroy specific bacteria like S. aureus' },
      ],
      clinicalNotes: `Expert clinical pearls:
1. Refractory AD requires diagnostic reassessment - always patch test for contact allergy
2. Combination biologic + JAK inhibitor is increasingly used in severe refractory cases
3. CV risk management is important in severe AD - treat as chronic inflammatory disease
4. Ethnic-specific approaches may be needed (Asian AD more Th17-driven)
5. Nemolizumab may be ideal for patients with disproportionate itch vs inflammation
6. Monitor for dupilumab-associated ocular surface disease - can use tacrolimus eye drops
7. Proactive therapy (twice weekly TCI/TCS to healed areas) is underutilized
8. Biomarker monitoring (CCL17) can guide therapy intensity`,
    },
  },

  media: [
    {
      id: 'ad-distribution-age',
      type: 'diagram',
      filename: 'eczema-distribution.svg',
      title: 'Atopic Dermatitis Distribution by Age',
      description: 'Body diagrams showing typical distribution in infants, children, and adults',
    },
    {
      id: 'ad-pathophysiology',
      type: 'diagram',
      filename: 'ad-pathogenesis.svg',
      title: 'AD Pathophysiology Overview',
      description: 'Diagram showing barrier defects, immune dysregulation, and itch pathways',
    },
    {
      id: 'ad-treatment-algorithm',
      type: 'diagram',
      filename: 'ad-treatment-ladder.svg',
      title: 'Atopic Dermatitis Treatment Algorithm',
      description: 'Step-wise approach to AD management by severity',
    },
  ],

  citations: [
    {
      id: 'aad-ad-guidelines',
      type: 'article',
      title: 'Guidelines of care for the management of atopic dermatitis',
      authors: ['Sidbury R', 'et al.'],
      source: 'Journal of the American Academy of Dermatology',
    },
    {
      id: 'bolognia-eczema',
      type: 'textbook',
      title: 'Atopic Dermatitis',
      source: 'Dermatology (Bolognia)',
      chapter: '12',
    },
  ],

  crossReferences: [
    { targetId: 'dermatology-skin-anatomy', targetType: 'structure', relationship: 'related', label: 'Skin Anatomy' },
    { targetId: 'dermatology-allergic-conditions', targetType: 'condition', relationship: 'related', label: 'Allergic Skin Conditions' },
    { targetId: 'dermatology-bacterial-infections', targetType: 'condition', relationship: 'related', label: 'Skin Infections' },
  ],

  tags: {
    systems: ['integumentary', 'immune'],
    topics: ['dermatology', 'eczema', 'atopic dermatitis', 'immunology'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'pediatrics'],
    },
  },

  createdAt: '2025-01-24T00:00:00Z',
  updatedAt: '2025-01-24T00:00:00Z',
  version: 1,
  status: 'published',
};

export default eczemaContent;
