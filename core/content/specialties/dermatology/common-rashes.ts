/**
 * Common Rashes and Their Causes - Educational Content
 *
 * Comprehensive coverage of common dermatologic presentations including
 * morphology, distribution patterns, and differential diagnosis.
 */

import { EducationalContent } from '../../types';

export const rashesContent: EducationalContent = {
  id: 'dermatology-common-rashes',
  type: 'condition',
  name: 'Common Rashes and Their Causes',
  alternateNames: ['Skin Eruptions', 'Cutaneous Rashes', 'Dermatitis'],

  levels: {
    1: {
      level: 1,
      summary: 'A rash is any change in your skin that makes it look or feel different - it might be red, bumpy, itchy, or scaly.',
      explanation: `A rash is when your skin looks or feels different than normal. Rashes come in many forms and have many causes.

**Common Types of Rashes**

**Red and Itchy Rashes:**
- **Allergic reaction**: When your skin touches something it does not like (like poison ivy or certain soaps)
- **Eczema**: Dry, itchy patches that often run in families
- **Hives**: Raised, itchy bumps that come and go quickly

**Bumpy Rashes:**
- **Acne**: Pimples on face, chest, or back
- **Heat rash**: Tiny bumps when you get too hot
- **Keratosis pilaris**: Rough bumps on arms (called "chicken skin")

**Scaly Rashes:**
- **Ringworm**: Not actually a worm! It is a fungus that makes circular scaly patches
- **Psoriasis**: Thick, silvery scales on elbows, knees, or scalp
- **Dandruff**: Flaky, scaly scalp

**When to See a Doctor:**
- Rash is spreading quickly
- You have fever with the rash
- The rash is very painful
- The rash has blisters
- The rash is around your eyes or mouth`,
      keyTerms: [
        { term: 'rash', definition: 'Any change in the skin that makes it look or feel different' },
        { term: 'itchy', definition: 'A feeling that makes you want to scratch' },
        { term: 'hives', definition: 'Raised, itchy bumps that appear suddenly' },
        { term: 'blister', definition: 'A bubble of fluid under the skin' },
        { term: 'scaly', definition: 'When skin has dry, flaky patches' },
      ],
      analogies: [
        'Hives pop up and disappear like bubbles in water.',
        'Scaly skin is like dry, cracked mud.',
        'A rash is your skin\'s way of saying something is wrong.',
      ],
      examples: [
        'Poison ivy causes a blistering, itchy rash where the plant oil touched your skin.',
        'A diaper rash happens when wet diapers irritate a baby\'s sensitive skin.',
      ],
    },
    2: {
      level: 2,
      summary: 'Rashes are classified by their morphology (macules, papules, vesicles, etc.) and distribution, helping determine whether they are allergic, infectious, inflammatory, or systemic in origin.',
      explanation: `Understanding rashes requires knowledge of skin lesion terminology and pattern recognition.

## Primary Skin Lesions (Initial Lesions)

**Flat Lesions:**
- **Macule**: Flat, color change <1cm (freckle)
- **Patch**: Flat, color change >1cm (vitiligo)

**Raised Solid Lesions:**
- **Papule**: Raised, solid <1cm (wart, insect bite)
- **Plaque**: Raised, flat-topped >1cm (psoriasis)
- **Nodule**: Solid lesion 1-2cm, extends into dermis
- **Tumor**: Solid lesion >2cm

**Fluid-Filled Lesions:**
- **Vesicle**: Clear fluid-filled <1cm (herpes simplex)
- **Bulla**: Clear fluid-filled >1cm (bullous pemphigoid)
- **Pustule**: Pus-filled lesion (acne)

**Other:**
- **Wheal**: Transient, edematous papule/plaque (hive)
- **Petechiae**: Pinpoint bleeding (<3mm)
- **Purpura**: Larger bleeding (3mm-1cm)

## Secondary Lesions (Result from Primary)
- **Scale**: Dry, flaking dead skin
- **Crust**: Dried serum, blood, or pus
- **Erosion**: Superficial skin loss (not into dermis)
- **Ulcer**: Full-thickness skin loss
- **Fissure**: Linear crack in skin
- **Lichenification**: Thickened skin with exaggerated lines (chronic rubbing)

## Distribution Patterns

**Localized:**
- Contact dermatitis (area of exposure)
- Herpes zoster (dermatomal)

**Bilateral/Symmetric:**
- Atopic dermatitis
- Psoriasis (extensor surfaces)

**Photo-distributed:**
- Sun-exposed areas
- Lupus, drug photosensitivity

**Generalized:**
- Drug eruptions
- Viral exanthems

## Common Categories of Rashes

| Category | Examples | Key Features |
|----------|----------|--------------|
| Allergic | Contact dermatitis, urticaria | Pruritic, edematous |
| Infectious | Impetigo, cellulitis, viral exanthems | Fever, localized or diffuse |
| Inflammatory | Psoriasis, eczema | Chronic, relapsing |
| Autoimmune | Lupus, dermatomyositis | Systemic symptoms |`,
      keyTerms: [
        { term: 'papule', definition: 'A small, raised solid lesion less than 1cm in diameter', pronunciation: 'PAP-yool' },
        { term: 'vesicle', definition: 'A small fluid-filled blister less than 1cm', pronunciation: 'VES-ih-kul' },
        { term: 'plaque', definition: 'A raised, flat-topped lesion greater than 1cm', pronunciation: 'plak' },
        { term: 'lichenification', definition: 'Thickening of skin with exaggerated lines from chronic rubbing', pronunciation: 'ly-ken-ih-fih-KAY-shun' },
        { term: 'dermatomal', definition: 'Following the distribution of a spinal nerve', pronunciation: 'der-mah-TOH-mal' },
        { term: 'exanthem', definition: 'A widespread rash, often from viral infection', pronunciation: 'eg-ZAN-them' },
      ],
    },
    3: {
      level: 3,
      summary: 'Systematic evaluation of rashes requires assessment of primary and secondary morphology, configuration, distribution, and associated symptoms to formulate a differential diagnosis and guide workup.',
      explanation: `## Approach to the Patient with a Rash

### History
- **Timeline**: Acute (<6 weeks) vs chronic
- **Symptoms**: Pruritus, pain, burning
- **Triggers**: New medications, exposures, illness
- **Systemic symptoms**: Fever, malaise, joint pain
- **Past history**: Atopy, autoimmune disease
- **Family history**: Psoriasis, atopic dermatitis

### Physical Examination

**Configuration Patterns**:
- **Annular**: Ring-shaped (tinea, granuloma annulare)
- **Arcuate**: Arc-shaped
- **Linear**: Line-shaped (contact, Koebner phenomenon)
- **Grouped/herpetiform**: Clustered vesicles (herpes)
- **Reticulated**: Net-like pattern (livedo reticularis)
- **Serpiginous**: Snake-like (cutaneous larva migrans)
- **Targetoid**: Concentric rings (erythema multiforme)

**Distribution Analysis**:
- Exposed vs covered areas
- Flexural vs extensor
- Intertriginous
- Acral (hands/feet)
- Dermatomal

### Key Clinical Syndromes

**Eczematous Dermatitis** (Eczema Pattern):
- Erythematous, edematous, vesicular (acute)
- Lichenified, dry, scaly (chronic)
- Pruritic
- Types: Atopic, contact, nummular, stasis, dyshidrotic

**Papulosquamous Eruptions**:
- Papules and plaques with scale
- Psoriasis, seborrheic dermatitis, pityriasis rosea, lichen planus
- Secondary syphilis (consider in any papulosquamous rash)

**Vesiculobullous Disorders**:
- Blisters: Intraepidermal vs subepidermal
- HSV, VZV, bullous impetigo
- Autoimmune: Pemphigus, pemphigoid

**Purpuric Eruptions**:
- Non-blanching (extravasated blood)
- Palpable: Vasculitis
- Non-palpable: Thrombocytopenia, coagulopathy

**Morbilliform (Measles-like)**:
- Erythematous macules and papules
- Viral exanthems
- Drug eruptions (most common pattern)

### Diagnostic Studies

**Bedside Tests**:
- KOH preparation (fungal elements)
- Tzanck smear (multinucleated giant cells in herpes)
- Scabies prep (mites, eggs, feces)
- Diascopy (blanching vs non-blanching)
- Nikolsky sign (epidermal fragility in pemphigus)

**Laboratory Studies**:
- CBC (eosinophilia in drug reaction, atopy)
- Complete metabolic panel
- ANA, anti-dsDNA (lupus)
- RPR/VDRL (syphilis)

**Histopathology**:
- Punch biopsy for H&E
- Direct immunofluorescence for blistering diseases
- Special stains (PAS for fungi)`,
      keyTerms: [
        { term: 'annular', definition: 'Ring-shaped lesion with central clearing', pronunciation: 'AN-yoo-lar' },
        { term: 'serpiginous', definition: 'Snake-like or wavy-bordered pattern', pronunciation: 'ser-PIJ-in-us' },
        { term: 'Koebner phenomenon', definition: 'Development of lesions at sites of skin trauma', pronunciation: 'KEB-ner' },
        { term: 'targetoid', definition: 'Concentric ring pattern like a bullseye or target' },
        { term: 'Nikolsky sign', definition: 'Epidermal separation with lateral pressure indicating fragile skin' },
        { term: 'morbilliform', definition: 'Measles-like rash with confluent macules and papules' },
      ],
      clinicalNotes: 'Always consider secondary syphilis in the differential of any papulosquamous eruption. Drug eruptions typically appear 7-14 days after starting medication but can occur within hours on re-exposure. Palpable purpura indicates vasculitis until proven otherwise.',
    },
    4: {
      level: 4,
      summary: 'Advanced rash evaluation integrates dermatopathological patterns, immunological mechanisms, and systemic associations to distinguish among mimics and guide appropriate management.',
      explanation: `## Histopathological Patterns

### Epidermal Patterns

**Spongiotic Dermatitis**:
- Intercellular edema (spongiosis)
- Eczematous dermatitis pattern
- Conditions: Atopic dermatitis, allergic contact, nummular, dyshidrotic
- Acute: Vesicles; Chronic: Acanthosis, hyperkeratosis

**Psoriasiform Dermatitis**:
- Regular elongation of rete ridges
- Parakeratosis (retained nuclei in stratum corneum)
- Suprapapillary thinning
- Munro microabscesses (neutrophils in stratum corneum)
- Conditions: Psoriasis, PRP, inflammatory fungal infections

**Interface Dermatitis**:
- Basal layer damage with lymphocyte infiltration
- Vacuolar degeneration of basal keratinocytes
- Dyskeratotic (apoptotic) keratinocytes
- Conditions: Lichen planus, lupus, dermatomyositis, drug reactions, GVHD

**Lichenoid Interface**:
- Band-like lymphocytic infiltrate hugging epidermis
- Saw-tooth rete ridge pattern
- Civatte bodies (colloid/apoptotic bodies)
- Conditions: Lichen planus, lichenoid drug eruption

### Dermal Patterns

**Perivascular Dermatitis**:
- Superficial: Most inflammatory dermatoses
- Superficial and deep: Lupus, polymorphous light eruption
- Lymphocytic vs mixed infiltrate

**Diffuse Dermatitis**:
- Interstitial pattern: Granuloma annulare, drug reactions
- Nodular pattern: Infections, lymphoma

**Vasculitis**:
- Neutrophilic infiltrate in/around vessel walls
- Fibrinoid necrosis
- Leukocytoclasia (nuclear dust)
- RBC extravasation

### Blister Level Determination

| Level | Findings | Conditions |
|-------|----------|------------|
| Subcorneal | Stratum corneum roof | Impetigo, pemphigus foliaceus, SSSS |
| Intraepidermal | Acantholysis, spongiosis | Pemphigus vulgaris, eczema |
| Subepidermal | Intact epidermis on roof | Bullous pemphigoid, EBA, DH |

## Immunopathogenic Mechanisms

### Type I Hypersensitivity (Immediate)
- IgE-mediated mast cell degranulation
- Urticaria, angioedema
- Minutes to hours after exposure

### Type IV Hypersensitivity (Delayed)
- T-cell mediated
- Contact dermatitis, drug eruptions, GVHD
- 48-72 hours for contact dermatitis
- 7-14 days for drug eruptions

### Autoantibody-Mediated
- Pemphigus: Anti-desmoglein (Dsg1, Dsg3)
- Bullous pemphigoid: Anti-BP180, BP230
- Epidermolysis bullosa acquisita: Anti-type VII collagen
- Dermatitis herpetiformis: Anti-tissue transglutaminase (IgA)

### Immune Complex-Mediated
- Type III hypersensitivity
- Cutaneous vasculitis
- Serum sickness-like reaction

## Critical Dermatologic Emergencies

**Stevens-Johnson Syndrome / Toxic Epidermal Necrolysis**:
- SJS: <10% BSA; TEN: >30% BSA; Overlap: 10-30%
- Drug-induced (most common): Sulfonamides, anticonvulsants, allopurinol, NSAIDs
- Nikolsky sign positive
- Mucosal involvement
- Mortality: SJS 10%, TEN 30%

**Drug Reaction with Eosinophilia and Systemic Symptoms (DRESS)**:
- Fever, rash (morbilliform), eosinophilia, lymphadenopathy
- Internal organ involvement (liver, kidney, heart)
- Onset 2-8 weeks after drug initiation
- HHV-6 reactivation common
- Mortality 10%

**Acute Generalized Exanthematous Pustulosis (AGEP)**:
- Acute onset pustular eruption on erythematous base
- Fever, neutrophilia
- Rapid resolution after drug withdrawal
- Mortality 1-2%`,
      keyTerms: [
        { term: 'spongiosis', definition: 'Intercellular edema in the epidermis causing stretched bridges between keratinocytes', pronunciation: 'spon-jee-OH-sis' },
        { term: 'acantholysis', definition: 'Loss of intercellular connections between keratinocytes', pronunciation: 'ak-an-THOL-ih-sis' },
        { term: 'parakeratosis', definition: 'Retention of nuclei in stratum corneum, indicating abnormal differentiation' },
        { term: 'interface dermatitis', definition: 'Pattern with lymphocyte attack on basal keratinocytes at DEJ' },
        { term: 'leukocytoclasia', definition: 'Nuclear dust from fragmented neutrophils, seen in vasculitis' },
        { term: 'DRESS syndrome', definition: 'Drug Reaction with Eosinophilia and Systemic Symptoms - severe drug hypersensitivity' },
      ],
      clinicalNotes: 'In suspected SJS/TEN, immediately discontinue all potential culprits and transfer to burn unit if extensive. DRESS can have delayed organ damage even after drug withdrawal - monitor liver function for weeks. Skin biopsy with DIF is essential for distinguishing autoimmune blistering diseases.',
    },
    5: {
      level: 5,
      summary: 'Expert-level rash evaluation synthesizes clinical-pathological correlation, advanced immunologic diagnostics, genetic associations, and evidence-based management of complex inflammatory and drug-induced dermatoses.',
      explanation: `## Advanced Immunodiagnostics

### Direct Immunofluorescence (DIF) Patterns

| Disease | DIF Pattern | Antigens |
|---------|-------------|----------|
| Pemphigus vulgaris | ICS (chicken-wire), IgG | Dsg3 +/- Dsg1 |
| Pemphigus foliaceus | ICS, superficial | Dsg1 |
| Bullous pemphigoid | Linear BMZ, IgG, C3 | BP180, BP230 |
| Dermatitis herpetiformis | Granular IgA at papillary tips | Tissue transglutaminase |
| Linear IgA dermatosis | Linear BMZ, IgA | BP180, LAD-1 |
| Epidermolysis bullosa acquisita | Linear BMZ, IgG (salt-split: dermal) | Type VII collagen |
| Lupus | Granular BMZ (lupus band) | Multiple antigens |
| Porphyria cutanea tarda | Vessel walls, BMZ | Non-specific |

### Serology Interpretation

**Pemphigus**:
- Anti-Dsg1 ELISA: Correlates with skin involvement
- Anti-Dsg3 ELISA: Correlates with mucosal involvement
- Titers correlate with disease activity

**Bullous Pemphigoid**:
- Anti-BP180 NC16A ELISA: Most disease-specific
- Anti-BP230 ELISA: Less sensitive
- Titers correlate with disease activity

### Salt-Split Skin Technique
- 1M NaCl separates epidermis at lamina lucida
- Epidermal binding: Pemphigoid, LAD
- Dermal binding: EBA, bullous SLE
- Essential for distinguishing subepidermal blistering diseases

## Pharmacogenomics in Drug Reactions

### HLA Associations

| Drug | HLA Allele | Population | Risk |
|------|------------|------------|------|
| Carbamazepine | HLA-B*15:02 | Han Chinese, SE Asian | SJS/TEN |
| Carbamazepine | HLA-A*31:01 | All populations | DRESS, MPE |
| Allopurinol | HLA-B*58:01 | Han Chinese, Korean | SJS/TEN, DRESS |
| Abacavir | HLA-B*57:01 | All populations | Hypersensitivity |
| Phenytoin | HLA-B*15:02 | Asian | SJS/TEN |

**Clinical Application**:
- FDA recommends HLA-B*15:02 screening before carbamazepine in high-risk populations
- HLA-B*58:01 screening recommended for allopurinol in certain populations
- HLA-B*57:01 screening mandatory before abacavir

### Drug Metabolism Pathways
- CYP450 polymorphisms affecting drug levels
- Slow acetylators: Increased sulfonamide reactions
- Arene oxide detoxification pathway variants

## Severe Cutaneous Adverse Reactions (SCARs)

### SJS/TEN Pathophysiology
- Drug-reactive CD8+ T cells
- Cytotoxic T-cell mediated keratinocyte apoptosis
- FasL/Fas interaction
- Granulysin: Major mediator (secreted by CTLs and NK cells)
- Perforin/granzyme B contribution

### SJS/TEN Management Algorithm

**Acute Phase**:
1. Immediate drug withdrawal
2. SCORTEN calculation for prognosis
3. Supportive care in burn unit/ICU
4. Wound care: Non-adhesive dressings
5. Temperature regulation
6. Fluid/electrolyte management
7. Nutritional support
8. Ophthalmology consultation (corneal scarring prevention)

**Controversial Treatments**:
- Systemic corticosteroids: Early, short-course may help
- Cyclosporine: Some evidence for benefit
- IVIG: Mixed evidence
- Anti-TNF (etanercept): Limited data

### SCORTEN Prognostic Score

| Factor | Points |
|--------|--------|
| Age >40 years | 1 |
| Heart rate >120/min | 1 |
| Cancer/hematologic malignancy | 1 |
| BSA involved >10% | 1 |
| BUN >28 mg/dL | 1 |
| Glucose >252 mg/dL | 1 |
| Bicarbonate <20 mEq/L | 1 |

**Mortality by SCORTEN**: 0-1: 3.2%; 2: 12.1%; 3: 35.3%; 4: 58.3%; 5+: 90%

## Complex Inflammatory Dermatoses

### Neutrophilic Dermatoses

**Sweet Syndrome (Acute Febrile Neutrophilic Dermatosis)**:
- Painful, erythematous plaques/nodules
- Fever, neutrophilia
- Associations: Infections, IBD, malignancy (MDS), drugs
- Pathology: Dense neutrophilic infiltrate without vasculitis
- Treatment: Systemic corticosteroids, dapsone

**Pyoderma Gangrenosum**:
- Pathergy (trauma-induced)
- Undermined, violaceous borders
- Associations: IBD, arthritis, hematologic disorders
- Avoid debridement (pathergy)
- Treatment: Corticosteroids, cyclosporine, biologics (infliximab)

### Granulomatous Dermatoses

**Sarcoidosis**:
- Non-caseating granulomas
- Variable morphology (papules, plaques, nodules, lupus pernio)
- Screen for systemic involvement (lungs, eyes, heart)

**Granuloma Annulare**:
- Interstitial/palisading granulomas
- Mucin deposition
- Localized: Self-limited; Generalized: Consider diabetes screening

### Autoinflammatory Syndromes
- Periodic fevers with rashes
- Examples: Familial Mediterranean fever, CAPS, PAPA syndrome
- Inflammasome pathway dysregulation
- IL-1 inhibitors often effective`,
      keyTerms: [
        { term: 'granulysin', definition: 'Cytotoxic protein secreted by T cells and NK cells, major mediator of keratinocyte death in TEN', pronunciation: 'GRAN-yoo-lis-in' },
        { term: 'SCORTEN', definition: 'Severity-of-illness score for TEN predicting mortality', pronunciation: 'SCORE-ten' },
        { term: 'salt-split skin', definition: 'Technique using NaCl to separate skin at BMZ for DIF localization' },
        { term: 'pathergy', definition: 'Exaggerated skin response to minor trauma, seen in pyoderma gangrenosum and Behcet disease' },
        { term: 'lupus pernio', definition: 'Violaceous plaques on face in cutaneous sarcoidosis, associated with chronic systemic disease' },
        { term: 'CAPS', definition: 'Cryopyrin-Associated Periodic Syndrome - autoinflammatory disease with urticarial rash' },
      ],
      clinicalNotes: `Clinical pearls for complex cases:
1. HLA screening before carbamazepine/phenytoin in Asian patients (B*15:02) and before allopurinol in high-risk populations (B*58:01)
2. Calculate SCORTEN within 24 hours of admission for TEN - guides prognosis and level of care
3. Salt-split skin DIF distinguishes EBA (dermal) from BP (epidermal) - critical for treatment decisions
4. Never debride pyoderma gangrenosum - pathergy worsens disease
5. Granulomatous dermatoses always require systemic workup (sarcoidosis, TB, fungal)
6. Sweet syndrome/pyoderma gangrenosum: Screen for underlying malignancy, especially MDS`,
    },
  },

  media: [
    {
      id: 'primary-lesions-chart',
      type: 'diagram',
      filename: 'primary-lesions.svg',
      title: 'Primary Skin Lesion Morphology',
      description: 'Visual guide to macule, papule, vesicle, pustule, nodule, and plaque',
    },
    {
      id: 'rash-distribution-patterns',
      type: 'diagram',
      filename: 'rash-distribution.svg',
      title: 'Rash Distribution Patterns',
      description: 'Body diagrams showing common distribution patterns',
    },
  ],

  citations: [
    {
      id: 'bolognia-approach-dermatology',
      type: 'textbook',
      title: 'Approach to Dermatologic Diagnosis',
      source: 'Dermatology (Bolognia)',
      chapter: '1',
    },
    {
      id: 'fitzpatrick-morphology',
      type: 'textbook',
      title: 'Principles of Dermatologic Diagnosis',
      source: 'Fitzpatrick\'s Dermatology',
      chapter: '2',
    },
  ],

  crossReferences: [
    { targetId: 'dermatology-eczema', targetType: 'condition', relationship: 'related', label: 'Eczema' },
    { targetId: 'dermatology-psoriasis', targetType: 'condition', relationship: 'related', label: 'Psoriasis' },
    { targetId: 'dermatology-allergic-conditions', targetType: 'condition', relationship: 'related', label: 'Allergic Skin Conditions' },
  ],

  tags: {
    systems: ['integumentary'],
    topics: ['diagnosis', 'dermatology', 'clinical reasoning'],
    clinicalRelevance: 'critical',
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

export default rashesContent;
