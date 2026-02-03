/**
 * Dermatology Specialty Database
 *
 * Comprehensive database of dermatological conditions for SOMA medical education.
 * Covers inflammatory, infectious, neoplastic, autoimmune, pigmentary,
 * hair-nail, pediatric-derm, and procedural categories.
 *
 * ~35 entries with ICD-11 codes, clinical features, diagnostics,
 * treatment protocols, and patient-friendly explanations.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type DermCategory =
  | 'inflammatory'
  | 'infectious'
  | 'neoplastic'
  | 'autoimmune'
  | 'pigmentary'
  | 'hair-nail'
  | 'pediatric-derm'
  | 'procedural';

export interface DermatologyEntry {
  id: string;
  name: string;
  nameEs: string;
  category: DermCategory;
  icd11: string;
  description: string;
  pathophysiology: string;
  clinicalFeatures: string[];
  diagnostics: string[];
  treatment: string[];
  complications: string[];
  patientExplanation: string;
}

// ---------------------------------------------------------------------------
// Helper
// ---------------------------------------------------------------------------

const entry = (
  id: string,
  name: string,
  nameEs: string,
  category: DermCategory,
  icd11: string,
  description: string,
  pathophysiology: string,
  clinicalFeatures: string[],
  diagnostics: string[],
  treatment: string[],
  complications: string[],
  patientExplanation: string,
): DermatologyEntry => ({
  id,
  name,
  nameEs,
  category,
  icd11,
  description,
  pathophysiology,
  clinicalFeatures,
  diagnostics,
  treatment,
  complications,
  patientExplanation,
});

// ---------------------------------------------------------------------------
// Database
// ---------------------------------------------------------------------------

export const DERMATOLOGY_ENTRIES: Record<string, DermatologyEntry> = {
  // =========================================================================
  // INFLAMMATORY (6)
  // =========================================================================
  'psoriasis-vulgaris': entry(
    'psoriasis-vulgaris',
    'Psoriasis Vulgaris',
    'Psoriasis Vulgar',
    'inflammatory',
    'EA90.0',
    'Chronic immune-mediated inflammatory dermatosis characterised by well-demarcated erythematous plaques with silvery-white scale, most commonly on extensor surfaces and scalp.',
    'T-cell-mediated autoimmune process with IL-17/IL-23 axis dysregulation leading to keratinocyte hyperproliferation (cell cycle shortened from 28 days to 3-5 days), angiogenesis, and neutrophil recruitment to the epidermis.',
    [
      'Well-demarcated salmon-pink plaques with adherent silvery-white micaceous scale',
      'Symmetrical distribution on elbows, knees, scalp, and lumbosacral area',
      'Auspitz sign: pinpoint bleeding upon scale removal',
      'Koebner phenomenon: lesions at sites of skin trauma',
      'Nail changes: pitting, oil-drop spots, onycholysis, subungual hyperkeratosis',
    ],
    [
      'Clinical diagnosis in most cases',
      'Skin biopsy: regular acanthosis, parakeratosis, Munro microabscesses, dilated dermal capillaries',
      'PASI (Psoriasis Area and Severity Index) for disease scoring',
      'Screen for psoriatic arthritis (CASPAR criteria)',
      'Metabolic panel and lipid profile for comorbidity screening',
    ],
    [
      'Topical: corticosteroids, vitamin D analogues (calcipotriol), calcineurin inhibitors for face/folds',
      'Phototherapy: narrowband UVB 3x/week; PUVA for refractory cases',
      'Conventional systemics: methotrexate, cyclosporine, acitretin, apremilast',
      'Biologics: anti-TNF (adalimumab), anti-IL-17 (secukinumab, ixekizumab), anti-IL-23 (guselkumab, risankizumab)',
      'Lifestyle: smoking cessation, weight reduction, alcohol limitation',
    ],
    [
      'Psoriatic arthritis (up to 30% of patients)',
      'Cardiovascular disease (increased atherosclerosis risk)',
      'Metabolic syndrome and non-alcoholic fatty liver disease',
      'Depression and psychosocial impairment',
      'Erythrodermic or pustular flares with abrupt treatment withdrawal',
    ],
    'Psoriasis is a long-lasting skin condition where your immune system causes skin cells to grow too quickly, forming thick, scaly patches. It is not contagious. Modern treatments can clear or greatly improve the skin for most people.',
  ),

  'atopic-dermatitis': entry(
    'atopic-dermatitis',
    'Atopic Dermatitis',
    'Dermatitis Atopica',
    'inflammatory',
    'EA80',
    'Chronic relapsing pruritic eczematous dermatosis associated with epidermal barrier dysfunction, immune dysregulation, and a personal or family history of atopy.',
    'Filaggrin gene (FLG) loss-of-function mutations impair the stratum corneum barrier, increasing transepidermal water loss and allergen penetration. Th2-skewed immune response produces IL-4, IL-13, and IL-31 (itch cytokine), driving inflammation and further barrier disruption.',
    [
      'Intense pruritus (hallmark symptom) worse at night',
      'Infants: oozing, crusted lesions on face and extensor surfaces',
      'Children/adults: lichenified plaques in flexural areas (antecubital and popliteal fossae, neck)',
      'Xerosis (dry skin) and ichthyosis vulgaris association',
      'Dennie-Morgan infraorbital folds, periorbital darkening, keratosis pilaris',
    ],
    [
      'Clinical diagnosis using Hanifin and Rajka criteria (major + minor criteria)',
      'Elevated serum IgE in ~80% (not required for diagnosis)',
      'Peripheral eosinophilia common',
      'Patch testing to exclude allergic contact dermatitis',
      'SCORAD or EASI for severity scoring',
    ],
    [
      'Skin care: emollients (ceramide-containing) applied immediately after bathing',
      'Topical anti-inflammatories: corticosteroids (class guided by site), calcineurin inhibitors (tacrolimus, pimecrolimus), PDE4 inhibitor (crisaborole)',
      'Phototherapy: narrowband UVB for moderate-severe disease',
      'Systemic: dupilumab (anti-IL-4Ralpha), JAK inhibitors (upadacitinib, abrocitinib), tralokinumab (anti-IL-13)',
      'Trigger avoidance: irritants, known allergens, stress management',
    ],
    [
      'Secondary bacterial infection (Staphylococcus aureus colonisation in >90%)',
      'Eczema herpeticum (disseminated HSV; dermatologic emergency)',
      'Sleep disturbance and impaired quality of life',
      'Atopic march: progression to allergic rhinitis and asthma',
      'Ocular complications: keratoconjunctivitis, anterior subcapsular cataracts',
    ],
    'Atopic dermatitis (eczema) is a common condition that makes the skin itchy, red, and dry. It runs in families with allergies and asthma. Keeping skin moisturised and using prescription creams controls flares. Newer injectable and oral medicines are available for severe cases.',
  ),

  'acne-vulgaris': entry(
    'acne-vulgaris',
    'Acne Vulgaris',
    'Acne Vulgar',
    'inflammatory',
    'ED80.0',
    'Chronic inflammatory disease of the pilosebaceous unit characterised by comedones, papules, pustules, nodules, and potentially scarring.',
    'Four key factors: (1) androgen-driven sebum overproduction, (2) follicular hyperkeratinisation causing microcomedone formation, (3) Cutibacterium acnes colonisation activating TLR2/innate immunity, and (4) perifollicular inflammation with IL-1, TNF-alpha, and matrix metalloproteinase release.',
    [
      'Open comedones (blackheads) and closed comedones (whiteheads)',
      'Inflammatory papules, pustules, and nodules',
      'Predilection for face, chest, upper back, and shoulders',
      'Post-inflammatory hyperpigmentation (especially in skin of colour)',
      'Scarring: ice-pick, boxcar, rolling, and hypertrophic types',
    ],
    [
      'Clinical diagnosis based on lesion morphology and distribution',
      'Grading: comedonal, mild-moderate papulopustular, severe/nodulocystic',
      'Hormonal workup if signs of hyperandrogenism (irregular menses, hirsutism, DHEA-S, free testosterone)',
      'Evaluate for drug-induced acne (corticosteroids, lithium, phenytoin)',
    ],
    [
      'Mild: topical retinoids (adapalene, tretinoin) + benzoyl peroxide +/- topical antibiotic (clindamycin)',
      'Moderate: add oral antibiotics (doxycycline, minocycline) for limited duration; consider hormonal therapy (combined OCP, spironolactone) in females',
      'Severe/nodulocystic: isotretinoin 0.5-1 mg/kg/day for 15-20 weeks (cumulative dose 120-150 mg/kg)',
      'Procedural: comedone extraction, intralesional triamcinolone for nodules, chemical peels',
      'Scar management: microneedling, fractional laser resurfacing, subcision, fillers',
    ],
    [
      'Scarring (atrophic and hypertrophic)',
      'Post-inflammatory hyperpigmentation and erythema',
      'Psychosocial impact: depression, anxiety, social withdrawal',
      'Isotretinoin-related: teratogenicity (iPLEDGE mandatory), mucocutaneous dryness, hypertriglyceridemia',
    ],
    'Acne happens when skin pores become clogged with oil and dead cells, allowing bacteria to thrive and cause inflammation. Mild cases respond to topical creams. Moderate to severe acne may need oral medications. Isotretinoin can produce long-lasting clearance for the most stubborn cases.',
  ),

  'rosacea': entry(
    'rosacea',
    'Rosacea',
    'Rosacea',
    'inflammatory',
    'ED90.0',
    'Chronic inflammatory facial dermatosis characterised by centrofacial erythema, telangiectasias, papulopustules, and phymatous changes.',
    'Neurovascular dysregulation with upregulated cathelicidin (LL-37) processing by kallikrein-5 serine protease, Demodex folliculorum overgrowth, innate immune activation via TLR2, and TRPV1 channel-mediated neurogenic inflammation.',
    [
      'Subtype 1 (erythematotelangiectatic): persistent centrofacial erythema, flushing, telangiectasias',
      'Subtype 2 (papulopustular): inflammatory papules and pustules on erythematous base; no comedones',
      'Subtype 3 (phymatous): skin thickening, irregular surface, rhinophyma',
      'Subtype 4 (ocular): blepharitis, conjunctival hyperaemia, foreign body sensation',
      'Triggers: UV exposure, alcohol, spicy food, heat, exercise, emotional stress',
    ],
    [
      'Clinical diagnosis based on phenotype assessment',
      'Dermoscopy: linear vessels in polygonal network pattern',
      'Skin biopsy rarely needed; shows perivascular/perifollicular lymphocytic infiltrate with Demodex organisms',
      'Ophthalmology referral for ocular involvement',
    ],
    [
      'General measures: sun protection (SPF 30+), trigger avoidance, gentle skincare',
      'Erythema: topical brimonidine (alpha-2 agonist) or oxymetazoline; laser/IPL for telangiectasias',
      'Papulopustular: topical ivermectin (anti-Demodex), metronidazole, azelaic acid; oral doxycycline 40 mg modified-release (sub-antimicrobial)',
      'Phymatous: isotretinoin for early disease; surgical or laser recontouring for established rhinophyma',
      'Ocular: lid hygiene, artificial tears, topical cyclosporine, oral doxycycline',
    ],
    [
      'Progressive rhinophyma without treatment',
      'Ocular complications: corneal neovascularisation, keratitis',
      'Psychosocial distress: perceived stigma (facial redness associated with alcohol use)',
      'Steroid rosacea from misuse of topical corticosteroids',
    ],
    'Rosacea causes facial redness, visible blood vessels, and sometimes bumps or skin thickening on the nose. It is not caused by poor hygiene. Avoiding known triggers, using prescribed creams, and protecting skin from the sun are the foundation of management.',
  ),

  'contact-dermatitis': entry(
    'contact-dermatitis',
    'Contact Dermatitis',
    'Dermatitis de Contacto',
    'inflammatory',
    'EK00',
    'Inflammatory dermatosis resulting from direct skin contact with exogenous substances, classified as allergic (type IV hypersensitivity) or irritant (non-immunologic).',
    'Allergic contact dermatitis: hapten penetrates epidermis, is processed by Langerhans cells, presented to T-lymphocytes in regional nodes (sensitisation phase 10-14 days). Re-exposure triggers Th1/Th17-mediated delayed hypersensitivity within 24-72 hours. Irritant contact dermatitis: direct cytotoxic damage to keratinocytes by the offending agent without immune sensitisation.',
    [
      'Pruritic erythematous papules, vesicles, and oozing in acute phase',
      'Lichenification and fissuring in chronic phase',
      'Geometric or linear pattern corresponding to contactant',
      'Allergic: poison ivy (linear vesicles), nickel (belt buckle, earring distribution), preservatives',
      'Irritant: hand dermatitis in healthcare workers, diaper dermatitis in infants',
    ],
    [
      'Detailed exposure history is key',
      'Patch testing (TRUE test or extended series): gold standard for allergic contact dermatitis identification',
      'Repeat open application test (ROAT) for equivocal results',
      'Skin biopsy: spongiotic dermatitis (nonspecific but supportive)',
    ],
    [
      'Identification and avoidance of the offending agent',
      'Acute: cool compresses, topical mid-high potency corticosteroids, short course oral prednisone for severe/widespread cases',
      'Chronic: emollients, barrier repair creams, topical calcineurin inhibitors for face and folds',
      'Occupational: protective gloves (vinyl or nitrile for nickel-allergic patients), barrier creams',
    ],
    [
      'Secondary bacterial infection from excoriation',
      'Chronic hand dermatitis with functional impairment',
      'Occupational disability',
      'Id reaction (autoeczematisation): generalised eczematous eruption distant from primary site',
    ],
    'Contact dermatitis is a rash caused by something touching your skin. It can be an allergy (like to nickel or poison ivy) or irritation (like from soaps or chemicals). Figuring out what is causing it and avoiding that substance is the most important step in treatment.',
  ),

  'seborrheic-dermatitis': entry(
    'seborrheic-dermatitis',
    'Seborrheic Dermatitis',
    'Dermatitis Seborreica',
    'inflammatory',
    'EA81',
    'Common chronic relapsing dermatitis affecting sebum-rich areas, characterised by greasy yellowish scale on an erythematous base.',
    'Malassezia yeast lipase activity on sebaceous triglycerides produces oleic acid and other unsaturated fatty acids, triggering an abnormal inflammatory response with IL-1alpha/beta, TNF-alpha, and histamine release in genetically susceptible individuals.',
    [
      'Scalp: dandruff ranging from fine flaking to thick adherent scale',
      'Face: erythema and greasy scale on nasolabial folds, eyebrows, glabella, retroauricular areas',
      'Trunk: petaloid or annular lesions on presternal area (flowering-pattern)',
      'Flares with stress, cold weather, and immunosuppression',
      'HIV/AIDS: severe, widespread, refractory seborrheic dermatitis is an AIDS indicator condition',
    ],
    [
      'Clinical diagnosis in most cases',
      'KOH prep to exclude tinea faciei if unilateral',
      'Skin biopsy: spongiotic dermatitis with shoulder parakeratosis and perifollicular accentuation',
      'HIV testing if severe or treatment-resistant in young adults',
    ],
    [
      'Scalp: antifungal shampoos (ketoconazole 2%, selenium sulfide, zinc pyrithione, ciclopirox) alternating with corticosteroid solution/foam',
      'Face and body: ketoconazole 2% cream, low-potency topical corticosteroids (short bursts), topical calcineurin inhibitors for maintenance',
      'Refractory: oral itraconazole pulse therapy, low-dose isotretinoin',
      'Maintenance: antifungal shampoo 1-2x/week indefinitely to prevent relapse',
    ],
    [
      'Frequent relapse requiring long-term maintenance therapy',
      'Secondary bacterial infection',
      'Psychosocial distress from visible facial involvement',
      'Steroid atrophy from chronic topical corticosteroid misuse on the face',
    ],
    'Seborrheic dermatitis causes flaky, scaly patches on the scalp, face, and chest. It is linked to a normal skin yeast growing in oily areas. Medicated shampoos and antifungal creams keep it under control, but it tends to come and go.',
  ),

  // =========================================================================
  // INFECTIOUS (5)
  // =========================================================================
  'tinea-corporis': entry(
    'tinea-corporis',
    'Tinea Corporis',
    'Tina Corporal',
    'infectious',
    '1F28.1',
    'Superficial dermatophyte infection of the glabrous skin (body) caused by Trichophyton, Microsporum, or Epidermophyton species.',
    'Dermatophytes possess keratinases that degrade keratin in the stratum corneum. Host immune response at the advancing border produces the annular inflammatory edge, while central clearing results from acquired partial immunity. Transmission via direct contact, fomites, or zoophilic spread.',
    [
      'Annular or polycyclic erythematous plaque with raised scaly border and central clearing',
      'Pruritic; may be single or multiple lesions',
      'Zoophilic infections (M. canis from cats/dogs) often more inflammatory',
      'Majocchi granuloma: deep dermatophyte folliculitis from shaving or topical steroid use',
      'Tinea incognito: altered morphology from inappropriate corticosteroid application',
    ],
    [
      'KOH preparation: septate branching hyphae',
      'Fungal culture on Sabouraud dextrose agar (species identification)',
      'Wood lamp: blue-green fluorescence for Microsporum species only',
      'Dermoscopy: broken hairs and comma-shaped hairs in tinea capitis',
      'Skin biopsy with PAS stain if clinical uncertainty',
    ],
    [
      'Localised: topical antifungals (terbinafine 1% cream, clotrimazole, ketoconazole) for 2-4 weeks',
      'Extensive, inflammatory, or immunosuppressed: oral terbinafine 250 mg/day for 2-4 weeks or oral itraconazole',
      'Majocchi granuloma requires oral therapy',
      'Treat the source: examine household contacts and pets',
      'Hygiene: avoid sharing towels, keep skin dry, cotton clothing',
    ],
    [
      'Majocchi granuloma (deep follicular invasion)',
      'Tinea incognito from misdiagnosis and corticosteroid use',
      'Widespread infection in immunocompromised hosts',
      'Id reaction: distant dermatophytid (allergic reaction to fungal antigens)',
    ],
    'Ringworm is not caused by a worm; it is a fungal infection that creates ring-shaped, scaly patches on the skin. Antifungal creams applied for a few weeks usually clear it up. If it is widespread or deep, your doctor may prescribe antifungal pills.',
  ),

  'herpes-zoster': entry(
    'herpes-zoster',
    'Herpes Zoster (Shingles)',
    'Herpes Zoster (Culebrilla)',
    'infectious',
    '1E91',
    'Reactivation of latent varicella-zoster virus (VZV) from dorsal root ganglia, producing a painful vesicular eruption in a dermatomal distribution.',
    'VZV remains dormant in sensory ganglia after primary infection (varicella). Declining cell-mediated immunity (aging, immunosuppression, stress) allows viral reactivation. VZV travels anterograde along sensory nerves to the skin, causing neuronal inflammation, necrosis, and the characteristic dermatomal vesicular eruption.',
    [
      'Prodrome: dermatomal pain, burning, or tingling 1-3 days before eruption',
      'Grouped vesicles on an erythematous base in a unilateral dermatomal distribution',
      'Most common dermatomes: thoracic (T3-L2), trigeminal (V1 ophthalmic division)',
      'Hutchinson sign: vesicles on nose tip indicate nasociliary nerve involvement and risk of ocular zoster',
      'Pain often disproportionate to visible skin findings',
    ],
    [
      'Clinical diagnosis in typical presentations',
      'PCR of vesicle fluid (preferred: most sensitive and specific)',
      'Direct fluorescent antibody (DFA) testing',
      'Tzanck smear: multinucleated giant cells (nonspecific, does not distinguish HSV from VZV)',
      'Ophthalmologic examination for V1 involvement',
    ],
    [
      'Antiviral therapy within 72 hours of rash onset: valacyclovir 1 g TID x7 days (preferred) or acyclovir 800 mg 5x/day x7 days',
      'Pain management: NSAIDs, gabapentin/pregabalin for neuropathic pain, short-course opioids if severe',
      'Ophthalmic zoster: add topical antivirals, urgent ophthalmology referral',
      'Immunocompromised: IV acyclovir for disseminated disease',
      'Prevention: recombinant zoster vaccine (Shingrix) for adults >= 50 years (2 doses); also for immunocompromised >= 19 years',
    ],
    [
      'Postherpetic neuralgia (PHN): persistent pain > 90 days; risk increases with age',
      'Herpes zoster ophthalmicus: keratitis, uveitis, secondary glaucoma',
      'Ramsay Hunt syndrome (otic zoster): facial palsy, ear vesicles, hearing loss',
      'Disseminated zoster in immunosuppressed patients',
      'Bacterial superinfection (Staphylococcus, Streptococcus)',
    ],
    'Shingles occurs when the chickenpox virus, which stays dormant in nerve cells, reactivates and causes a painful blistering rash on one side of the body. Starting antiviral medicine within 72 hours speeds healing and reduces the chance of lingering nerve pain. A vaccine is available for adults 50 and older.',
  ),

  'cellulitis': entry(
    'cellulitis',
    'Cellulitis and Erysipelas',
    'Celulitis y Erisipela',
    'infectious',
    '1B70',
    'Acute spreading bacterial infection of the dermis and subcutaneous tissue (cellulitis) or upper dermis and superficial lymphatics (erysipelas).',
    'Portal of entry (skin break, tinea pedis, ulcer) allows pathogen invasion. Streptococcus pyogenes (Group A Strep) causes most erysipelas; Staphylococcus aureus (including MRSA) and GAS cause cellulitis. Bacterial hyaluronidase, streptokinase, and DNases facilitate tissue spread. Host neutrophilic response drives inflammatory signs.',
    [
      'Cellulitis: expanding area of erythema, warmth, swelling, and tenderness with poorly defined borders',
      'Erysipelas: well-demarcated, raised, fiery-red plaque (peau d\'orange texture) often on face or lower legs',
      'Systemic symptoms: fever, chills, malaise, lymphangitis (red streak), regional lymphadenopathy',
      'Risk factors: lymphedema, saphenous vein harvest, obesity, tinea pedis, prior cellulitis',
    ],
    [
      'Clinical diagnosis; blood cultures positive in < 5% of non-purulent cellulitis',
      'Ultrasound to rule out abscess if fluctuance suspected',
      'Culture of purulent drainage if abscess present (guides MRSA coverage)',
      'Bilateral lower extremity involvement suggests stasis dermatitis (not cellulitis)',
      'Mark borders with pen to monitor progression',
    ],
    [
      'Non-purulent cellulitis: oral cephalexin or dicloxacillin (covers strep and MSSA); IV cefazolin for severe',
      'Purulent/MRSA risk: TMP-SMX or doxycycline + incision and drainage of abscess',
      'Erysipelas: penicillin V or amoxicillin (streptococcal coverage)',
      'Elevation of affected limb, treat underlying tinea pedis',
      'Prophylaxis: penicillin V 250 mg BID for recurrent episodes (>=3/year)',
    ],
    [
      'Abscess formation requiring surgical drainage',
      'Necrotising fasciitis (surgical emergency: disproportionate pain, crepitus, rapid spread)',
      'Bacteremia and sepsis',
      'Recurrent cellulitis from chronic lymphedema',
      'Post-inflammatory lymphedema worsening',
    ],
    'Cellulitis is a skin infection that causes a spreading area of redness, warmth, and swelling, usually on the legs. Bacteria enter through small breaks in the skin. Antibiotics are needed, and treating cracked skin between the toes (athlete\'s foot) helps prevent it from coming back.',
  ),

  'impetigo': entry(
    'impetigo',
    'Impetigo',
    'Impetigo',
    'infectious',
    '1B71.0',
    'Highly contagious superficial bacterial skin infection common in children, caused by Staphylococcus aureus or Streptococcus pyogenes.',
    'Bacteria colonise intact or disrupted skin surface. S. aureus produces exfoliative toxins that cleave desmoglein-1 in the superficial epidermis, producing flaccid bullae (bullous impetigo). Non-bullous form involves mixed S. aureus and GAS invasion with neutrophilic inflammation in the superficial epidermis.',
    [
      'Non-bullous (70%): honey-coloured crusted erosions on an erythematous base, typically perioral and perinasal',
      'Bullous: flaccid, clear-to-yellow fluid-filled blisters that rupture leaving shallow erosions with collarette of scale',
      'Ecthyma: deeper ulcerative form with thick crust and purulent base extending into dermis',
      'Regional lymphadenopathy may be present',
      'Highly contagious with spread via direct contact; common in children aged 2-5',
    ],
    [
      'Clinical diagnosis based on characteristic morphology',
      'Bacterial culture and sensitivity of lesion exudate (especially if MRSA suspected or treatment failure)',
      'Gram stain: gram-positive cocci in clusters (staph) or chains (strep)',
    ],
    [
      'Limited disease: topical mupirocin 2% or retapamulin 1% ointment TID x5 days',
      'Extensive or systemic symptoms: oral cephalexin or dicloxacillin x7 days; TMP-SMX or clindamycin if MRSA',
      'Wound care: gentle crusts removal with warm soaks, keep lesions covered',
      'Prevent spread: hand hygiene, separate towels, keep children home until 24 hours on antibiotics',
    ],
    [
      'Post-streptococcal glomerulonephritis (nephritogenic GAS strains; monitor urinalysis)',
      'Ecthyma with scarring',
      'Staphylococcal scalded skin syndrome (neonates/young children)',
      'MRSA spread in households and schools',
    ],
    'Impetigo is a common, very contagious skin infection in children that causes honey-coloured crusty sores, usually around the nose and mouth. It clears up with antibiotic creams or, if widespread, antibiotic pills. Good hand-washing prevents spreading it to others.',
  ),

  'molluscum-contagiosum': entry(
    'molluscum-contagiosum',
    'Molluscum Contagiosum',
    'Molusco Contagioso',
    'infectious',
    '1E80',
    'Common viral skin infection caused by molluscum contagiosum virus (MCV, a poxvirus), producing umbilicated papules; especially prevalent in children and immunocompromised adults.',
    'MCV infects epidermal keratinocytes and suppresses local immune surveillance through viral homologues of MHC-I, chemokine receptors, and apoptosis inhibitors. Intracytoplasmic inclusion bodies (Henderson-Patterson bodies) expand in the stratum spinosum, producing the characteristic dome-shaped papule with central dell.',
    [
      'Firm, dome-shaped, flesh-coloured or pearly papules 2-5 mm with central umbilication',
      'Children: face, trunk, extremities; spread by autoinoculation',
      'Adults: genital and inguinal area (sexually transmitted)',
      'Immunocompromised (HIV): numerous, large (giant molluscum), and treatment-resistant',
      'Molluscum dermatitis: eczematous halo around lesions',
    ],
    [
      'Clinical diagnosis by characteristic umbilicated papules',
      'Dermoscopy: central white-yellow globular structure with peripheral crown vessels',
      'Histopathology: lobulated epidermal proliferation with intracytoplasmic Henderson-Patterson bodies',
      'HIV testing if extensive in adults',
    ],
    [
      'Observation: self-limited in immunocompetent children (resolves in 6-18 months)',
      'Destructive: cryotherapy, curettage, cantharidin (blistering agent)',
      'Topical: imiquimod 5% cream (off-label), tretinoin, potassium hydroxide 10%',
      'Immunocompromised: treat underlying immunosuppression; cidofovir for refractory cases',
    ],
    [
      'Secondary bacterial infection from scratching',
      'Autoinoculation and widespread lesion proliferation',
      'Molluscum dermatitis and scarring from treatment',
      'Psychosocial impact in children; exclusion from swimming pools',
    ],
    'Molluscum contagiosum causes small, painless, round bumps with a dimple in the centre. A virus causes it, and it spreads by skin-to-skin contact. In healthy children it usually goes away on its own, but your doctor can remove bumps if they are bothersome or spreading.',
  ),

  // =========================================================================
  // NEOPLASTIC (5)
  // =========================================================================
  'melanoma': entry(
    'melanoma',
    'Cutaneous Melanoma',
    'Melanoma Cutaneo',
    'neoplastic',
    '2C30',
    'Malignant neoplasm of melanocytes; the most lethal skin cancer with high metastatic potential. Early detection dramatically improves survival.',
    'UV-induced mutations (BRAF V600E in ~50%, NRAS, NF1) drive uncontrolled melanocyte proliferation. Progression from radial growth phase (in situ/thin) to vertical growth phase (invasive, metastatic potential). Immune evasion via PD-L1 expression and regulatory T-cell recruitment.',
    [
      'ABCDEs: Asymmetry, Border irregularity, Colour variegation, Diameter > 6 mm, Evolution/change',
      'Ugly duckling sign: lesion that stands out from patient\'s other moles',
      'Subtypes: superficial spreading (most common), nodular (rapidly growing dome/nodule), lentigo maligna (sun-damaged skin of elderly), acral lentiginous (palms, soles, nails -- most common in darker skin)',
      'Amelanotic melanoma: non-pigmented variant; easily missed',
      'Hutchinson sign (nail): periungual pigment extension in subungual melanoma',
    ],
    [
      'Dermoscopy: atypical pigment network, blue-white veil, irregular streaks/globules, regression structures',
      'Excisional biopsy with 1-3 mm margins (preferred; avoid shave of suspected melanoma)',
      'Histopathology: Breslow thickness (most important prognostic factor), ulceration, mitotic rate, Clark level',
      'Sentinel lymph node biopsy for tumours > 0.8 mm or with ulceration',
      'Staging workup: LDH, CT/PET, brain MRI for stage III-IV',
    ],
    [
      'In situ: wide local excision with 0.5-1 cm margins',
      'Invasive: wide local excision (1-2 cm margins based on Breslow thickness)',
      'Sentinel lymph node positive: completion lymph node dissection vs. observation with adjuvant therapy',
      'Adjuvant: anti-PD-1 (nivolumab, pembrolizumab) for stage III-IV; BRAF/MEK inhibitors (dabrafenib/trametinib) for BRAF-mutant tumours',
      'Metastatic: immune checkpoint inhibitors (anti-PD-1 +/- anti-CTLA-4), BRAF/MEK inhibitors, clinical trials',
    ],
    [
      'Metastasis: lymph nodes, lung, liver, brain, bone',
      'Recurrence: local, in-transit, regional, distant',
      'Immune-related adverse events from checkpoint inhibitors (colitis, hepatitis, endocrinopathies)',
      'Lymphedema after lymph node dissection',
    ],
    'Melanoma is the most serious type of skin cancer. It starts in pigment-producing cells and can spread to other organs if not caught early. Look for moles that are changing, uneven, or different from others. Found early, melanoma is highly curable with surgery. Advanced cases now have effective immunotherapy options.',
  ),

  'basal-cell-carcinoma': entry(
    'basal-cell-carcinoma',
    'Basal Cell Carcinoma',
    'Carcinoma Basocelular',
    'neoplastic',
    '2C32.0',
    'Most common human malignancy. Locally invasive neoplasm of basal keratinocytes; rarely metastasises but causes significant tissue destruction.',
    'UV-induced mutations in the Hedgehog signalling pathway, particularly PTCH1 (Patched) tumour suppressor loss leading to constitutive Smoothened (SMO) activation and downstream GLI transcription factor signalling, driving basal cell proliferation. P53 mutations are co-contributors.',
    [
      'Nodular (most common): pearly, translucent papule or nodule with rolled borders, telangiectasias, and central ulceration (rodent ulcer)',
      'Superficial: thin erythematous scaly plaque with pearly thread-like border, trunk and extremities',
      'Morpheaform/infiltrative: scar-like, ill-defined, waxy plaque (most aggressive subtype)',
      'Pigmented BCC: brown-black nodule mimicking melanoma (more common in skin of colour)',
      'Predilection for sun-exposed areas, especially head and neck',
    ],
    [
      'Dermoscopy: arborising telangiectasias, blue-grey ovoid nests, leaf-like structures, spoke-wheel areas',
      'Shave or punch biopsy for histopathological confirmation',
      'Histology: basaloid cell nests with peripheral palisading and stromal retraction artefact',
      'Assess for high-risk features: site, size, borders, subtype, perineural invasion, recurrence',
    ],
    [
      'Low-risk: standard surgical excision (4 mm margins), electrodesiccation and curettage (ED&C), cryotherapy',
      'High-risk / cosmetically sensitive: Mohs micrographic surgery (highest cure rate > 99%)',
      'Superficial BCC: topical imiquimod 5% or 5-fluorouracil; photodynamic therapy',
      'Locally advanced/metastatic: Hedgehog pathway inhibitors (vismodegib, sonidegib)',
      'Radiation therapy for non-surgical candidates',
    ],
    [
      'Local tissue destruction (nasal cartilage, orbital, auricular involvement)',
      'Recurrence (higher for morpheaform, positive margins)',
      'Basal cell nevus syndrome (Gorlin syndrome): multiple BCCs, odontogenic keratocysts, skeletal anomalies',
      'Very rare metastasis (< 0.1%)',
    ],
    'Basal cell carcinoma is the most common skin cancer. It usually appears as a pearly or waxy bump on sun-exposed skin and grows slowly. It very rarely spreads to other parts of the body, but it can damage nearby tissue if ignored. Surgery removes it with an excellent cure rate.',
  ),

  'squamous-cell-carcinoma': entry(
    'squamous-cell-carcinoma',
    'Cutaneous Squamous Cell Carcinoma',
    'Carcinoma Espinocelular Cutaneo',
    'neoplastic',
    '2C32.1',
    'Second most common skin cancer arising from malignant transformation of epidermal keratinocytes; higher metastatic potential than BCC, especially in immunosuppressed patients.',
    'Cumulative UV-induced DNA damage (cyclobutane pyrimidine dimers) drives TP53 and RAS mutations in epidermal keratinocytes. Progression from actinic keratosis (precursor) through squamous cell carcinoma in situ (Bowen disease) to invasive SCC. Immunosuppression (organ transplant recipients) increases risk 65-250x.',
    [
      'Firm, erythematous, keratotic papule or nodule, often with central ulceration or crust',
      'Actinic keratosis (precursor): rough, sandpaper-textured papule on sun-damaged skin',
      'Bowen disease (SCC in situ): well-defined erythematous scaly plaque',
      'High-risk features: diameter > 2 cm, depth > 6 mm, perineural invasion, poor differentiation, ear/lip location',
      'Organ transplant recipients: aggressive course, multiple lesions, higher metastatic rate',
    ],
    [
      'Shave or punch biopsy with histopathological assessment',
      'Histology: atypical keratinocyte proliferation invading dermis, keratin pearl formation, intercellular bridges',
      'Differentiation grading: well, moderate, poorly differentiated',
      'Staging: AJCC 8th edition; assess perineural/lymphovascular invasion',
      'Imaging (CT/MRI) and sentinel lymph node biopsy for high-risk tumours',
    ],
    [
      'Low-risk: standard excision (4-6 mm margins), ED&C for superficial/small lesions',
      'High-risk: Mohs micrographic surgery',
      'Actinic keratoses (field): topical 5-FU, imiquimod, ingenol mebutate, photodynamic therapy, cryotherapy',
      'Advanced/metastatic: cemiplimab (anti-PD-1), radiation therapy',
      'Transplant patients: reduce immunosuppression if possible, acitretin prophylaxis',
    ],
    [
      'Local recurrence (increased with positive margins, perineural invasion)',
      'Regional lymph node metastasis (2-6% overall; higher for high-risk features)',
      'Distant metastasis (lung, liver, brain, bone)',
      'Marked morbidity in transplant recipients (leading cause of death in long-term survivors)',
    ],
    'Squamous cell carcinoma is the second most common skin cancer. It often starts as a rough, scaly patch (actinic keratosis) on sun-exposed skin and can grow into a firm bump or sore that does not heal. Surgery is the main treatment. Unlike basal cell carcinoma, this type can spread, so early treatment is important.',
  ),

  'actinic-keratosis': entry(
    'actinic-keratosis',
    'Actinic Keratosis',
    'Queratosis Actinica',
    'neoplastic',
    'EK90.0',
    'Premalignant keratinocyte dysplasia of sun-damaged skin representing the earliest stage in the SCC continuum; risk of progression to invasive SCC estimated at 0.025-16% per lesion per year.',
    'Chronic UV exposure induces TP53 mutations and clonal expansion of dysplastic keratinocytes confined to the epidermis. Concept of field cancerisation: surrounding clinically normal skin harbours subclinical UV-damaged keratinocytes predisposing to new lesion development.',
    [
      'Rough, gritty, sandpaper-like papules or patches on sun-exposed skin',
      'Skin-coloured, pink, or erythematous; often easier to feel than see',
      'Common locations: scalp (bald), face, ears, dorsal hands, forearms',
      'Cutaneous horn: hypertrophic keratotic projection (biopsy to exclude SCC)',
      'Field cancerisation: multiple AKs indicating widespread UV damage',
    ],
    [
      'Clinical diagnosis supported by dermoscopy (strawberry pattern: pseudonetwork with keratotic plugs)',
      'Biopsy if: hypertrophic, indurated, rapidly growing, or non-responsive to treatment (to exclude SCC)',
      'Histology: dysplastic keratinocytes in lower epidermis, solar elastosis in dermis',
    ],
    [
      'Lesion-directed: cryotherapy (liquid nitrogen), curettage',
      'Field-directed: topical 5-fluorouracil (Efudex), imiquimod 5%, ingenol mebutate, diclofenac 3% gel',
      'Photodynamic therapy with aminolevulinic acid (ALA-PDT) for extensive field disease',
      'Chemical peels (trichloroacetic acid) and dermabrasion',
      'Sun protection and surveillance every 6-12 months',
    ],
    [
      'Progression to invasive SCC',
      'Treatment-related: erosion, scarring, hypopigmentation from cryotherapy',
      'Cosmetic impact on visible areas',
      'Recurrence and new lesion development requiring ongoing surveillance',
    ],
    'Actinic keratoses are rough, scaly spots caused by years of sun exposure. They are considered pre-cancers because a small percentage can turn into squamous cell carcinoma. Treatment with freezing, prescription creams, or light-based therapy removes them. Consistent sunscreen use helps prevent new ones.',
  ),

  'dermatofibrosarcoma-protuberans': entry(
    'dermatofibrosarcoma-protuberans',
    'Dermatofibrosarcoma Protuberans',
    'Dermatofibrosarcoma Protuberante',
    'neoplastic',
    '2B50.0',
    'Low-grade soft tissue sarcoma of the dermis and subcutis characterised by high local recurrence but low metastatic potential.',
    'Chromosomal translocation t(17;22)(q22;q13) produces COL1A1-PDGFB fusion gene resulting in constitutive PDGF-BB overexpression and autocrine PDGFR-beta signalling driving fibroblast proliferation. Infiltrative growth pattern with tentacle-like extensions into subcutaneous fat.',
    [
      'Slowly enlarging, firm, indurated plaque or nodule on trunk (most common), proximal extremities',
      'Skin-coloured to red-brown; often initially misdiagnosed as scar, keloid, or dermatofibroma',
      'Protuberant nodular growth develops over months to years',
      'Painless; may be present for years before diagnosis',
      'Young to middle-aged adults; equal sex distribution',
    ],
    [
      'Deep punch biopsy or incisional biopsy reaching subcutaneous fat',
      'Histology: storiform (cartwheel) pattern of spindle cells infiltrating subcutaneous fat (honeycomb pattern)',
      'Immunohistochemistry: CD34-positive, factor XIIIa-negative (distinguishes from dermatofibroma)',
      'FISH or RT-PCR for COL1A1-PDGFB fusion gene',
      'MRI for pre-operative margin assessment',
    ],
    [
      'Mohs micrographic surgery: gold standard (recurrence rate 1-2% vs 20-40% standard excision)',
      'Wide local excision with 2-3 cm margins when Mohs not available',
      'Imatinib (PDGFR inhibitor) for unresectable or metastatic disease with confirmed PDGFB translocation',
      'Radiation therapy for positive margins when re-excision not possible',
    ],
    [
      'High local recurrence with inadequate margins',
      'Fibrosarcomatous transformation (15%): higher grade, increased metastatic potential',
      'Rare distant metastasis (< 5%, primarily lung)',
      'Large surgical defect requiring reconstruction',
    ],
    'Dermatofibrosarcoma protuberans (DFSP) is a rare, slow-growing skin tumour that starts as a firm patch or lump, often on the trunk. It rarely spreads to other organs but tends to grow back locally if not fully removed. Mohs surgery, which examines margins under the microscope during the procedure, provides the best chance of complete removal.',
  ),

  // =========================================================================
  // AUTOIMMUNE (5)
  // =========================================================================
  'pemphigus-vulgaris': entry(
    'pemphigus-vulgaris',
    'Pemphigus Vulgaris',
    'Penfigo Vulgar',
    'autoimmune',
    'EB40.0',
    'Potentially life-threatening autoimmune blistering disease characterised by IgG autoantibodies against desmoglein-3 (and desmoglein-1), causing intraepidermal acantholysis and flaccid bullae.',
    'IgG autoantibodies target desmoglein-3 (mucosal and skin desmosomal cadherin) and desmoglein-1 (cutaneous desmosomal cadherin). Antibody binding disrupts desmosomal adhesion, causing suprabasal acantholysis (loss of cell-cell adhesion). The desmoglein compensation theory explains why mucosal involvement precedes skin: mucosae express mainly Dsg-3, whereas skin expresses both Dsg-1 and Dsg-3.',
    [
      'Painful oral erosions (often the first manifestation): buccal mucosa, palate, pharynx',
      'Flaccid bullae on non-inflamed skin that rupture easily leaving painful erosions',
      'Nikolsky sign positive: lateral pressure on normal-appearing skin causes epidermal separation',
      'Asboe-Hansen sign: pressure on intact blister extends it laterally',
      'Any mucosal surface may be involved: oral, nasal, conjunctival, genital',
    ],
    [
      'Skin biopsy (perilesional): suprabasal acantholysis with tombstone pattern (basal cells adherent to basement membrane)',
      'Direct immunofluorescence (DIF): intercellular IgG and C3 in a fishnet pattern (gold standard)',
      'Indirect immunofluorescence: circulating IgG against intercellular substance',
      'ELISA: anti-desmoglein-1 and anti-desmoglein-3 antibody titres (correlate with disease activity)',
    ],
    [
      'First-line: rituximab (anti-CD20) now recommended as initial therapy (RITUX 3 trial) with low-dose prednisone taper',
      'Conventional: systemic corticosteroids (prednisone 1 mg/kg/day) with steroid-sparing immunosuppressant (mycophenolate mofetil, azathioprine)',
      'Refractory: IVIG, cyclophosphamide, or plasmapheresis',
      'Wound care: gentle cleansing, non-adhesive dressings, pain management',
      'Monitor anti-Dsg titres to guide treatment adjustments',
    ],
    [
      'Secondary infection and sepsis (leading cause of mortality historically)',
      'Fluid and electrolyte imbalance from extensive skin loss',
      'Corticosteroid side effects (osteoporosis, diabetes, adrenal suppression)',
      'Rituximab-associated: infusion reactions, infection risk, progressive multifocal leukoencephalopathy (rare)',
      'Untreated mortality historically > 75%; now < 5% with modern therapy',
    ],
    'Pemphigus vulgaris is a rare autoimmune condition where the body\'s immune system attacks the glue holding skin cells together, causing painful blisters and sores in the mouth and on the skin. With modern treatments, including targeted immune therapy, most patients achieve excellent control.',
  ),

  'bullous-pemphigoid': entry(
    'bullous-pemphigoid',
    'Bullous Pemphigoid',
    'Penfigoide Ampolloso',
    'autoimmune',
    'EB40.1',
    'Most common autoimmune blistering disease; characterised by IgG autoantibodies against hemidesmosomal proteins (BP180 and BP230) at the dermal-epidermal junction, causing tense subepidermal bullae predominantly in elderly patients.',
    'IgG autoantibodies (mainly anti-BP180 NC16A domain) bind hemidesmosomes, activate complement, and recruit eosinophils and neutrophils. Proteolytic enzymes from inflammatory cells cleave the dermal-epidermal junction, forming a subepidermal blister. Eosinophil degranulation releases major basic protein contributing to tissue damage.',
    [
      'Prodromal pruritus and urticarial plaques (may precede blisters by weeks/months)',
      'Tense, dome-shaped bullae on erythematous or urticarial base; bullae do not rupture easily',
      'Predilection: flexural areas, lower abdomen, inner thighs',
      'Nikolsky sign negative (unlike pemphigus)',
      'Elderly patients (> 60 years); associated with neurological disease (dementia, stroke, Parkinson)',
    ],
    [
      'Skin biopsy: subepidermal blister with eosinophil-rich infiltrate',
      'DIF (perilesional skin): linear IgG and C3 along the basement membrane zone',
      'Salt-split skin: IgG on epidermal (roof) side (distinguishes from epidermolysis bullosa acquisita)',
      'ELISA: anti-BP180 and anti-BP230 antibodies (titre correlates with disease activity)',
      'Check for drug-induced BP (DPP-4 inhibitors, PD-1 inhibitors, diuretics)',
    ],
    [
      'Mild-moderate: superpotent topical corticosteroids (clobetasol propionate) -- shown equivalent to systemic steroids with fewer side effects',
      'Moderate-severe: systemic prednisone 0.5 mg/kg/day with steroid-sparing agent (doxycycline, dapsone, mycophenolate, azathioprine)',
      'Refractory: rituximab, omalizumab, IVIG',
      'Wound care and fall prevention in elderly patients',
      'Taper guided by clinical response and anti-BP180 titres',
    ],
    [
      'Secondary infection of erosions',
      'Corticosteroid morbidity in elderly (fractures, hyperglycaemia, infections)',
      'Increased 1-year mortality in elderly BP patients (25-40%) related to comorbidities and treatment',
      'Drug-induced BP may not resolve after drug withdrawal',
    ],
    'Bullous pemphigoid is a blistering skin condition that mostly affects older adults. The immune system attacks the layer that anchors the skin, causing large, firm blisters. Strong prescription creams are often the first treatment and can be just as effective as pills with fewer side effects.',
  ),

  'cutaneous-lupus': entry(
    'cutaneous-lupus',
    'Cutaneous Lupus Erythematosus',
    'Lupus Eritematoso Cutaneo',
    'autoimmune',
    'EB10.0',
    'Spectrum of autoimmune dermatoses associated with lupus erythematosus, ranging from localised discoid lupus to acute cutaneous lupus as a manifestation of systemic disease.',
    'UV-induced keratinocyte apoptosis exposes nuclear autoantigens (Ro/SSA, La/SSB, dsDNA). Defective clearance of apoptotic debris triggers innate immune activation via pDCs and type I interferon. Autoantibodies and cytotoxic T-cells target the basal layer causing interface dermatitis with vacuolar degeneration of the basal epidermis.',
    [
      'Acute CLE (ACLE): malar (butterfly) rash sparing nasolabial folds; photosensitive; associated with SLE flares',
      'Subacute CLE (SCLE): annular-polycyclic or papulosquamous photodistributed lesions; strongly Ro/SSA positive',
      'Chronic CLE / Discoid lupus (DLE): well-defined erythematous plaques with follicular plugging, adherent scale, central atrophy, and dyspigmentation',
      'Lupus panniculitis (lupus profundus): deep subcutaneous nodules with overlying DLE',
      'Photosensitivity in all subtypes',
    ],
    [
      'Skin biopsy: interface dermatitis with basal vacuolar change, thickened basement membrane (PAS+), periadnexal/perivascular lymphocytic infiltrate',
      'DIF (lupus band test): granular IgG, IgM, IgA, C3 at the dermal-epidermal junction (in lesional and sun-protected non-lesional skin in SLE)',
      'Serology: ANA, anti-dsDNA, anti-Ro/SSA, anti-La/SSB, complement levels',
      'Screen for systemic involvement: CBC, urinalysis, renal function, ACR/EULAR criteria for SLE',
    ],
    [
      'Photoprotection: broad-spectrum SPF 50+, UVA/UVB; protective clothing',
      'Topical: corticosteroids, calcineurin inhibitors (face)',
      'First-line systemic: hydroxychloroquine 200-400 mg/day (cornerstone of therapy)',
      'Second-line: methotrexate, mycophenolate, dapsone, thalidomide/lenalidomide',
      'Refractory: belimumab (anti-BAFF), anifrolumab (anti-IFNAR1), rituximab',
    ],
    [
      'Scarring alopecia and disfigurement (DLE)',
      'Progression to SLE (5-25% of DLE patients)',
      'Hydroxychloroquine retinal toxicity (annual ophthalmologic screening after 5 years)',
      'Drug-induced SCLE (hydrochlorothiazide, terbinafine, proton pump inhibitors)',
    ],
    'Cutaneous lupus causes skin rashes triggered by sunlight. The mildest form causes coin-shaped scaly patches; the most serious form involves a butterfly rash on the face and signals lupus activity throughout the body. Sun protection and hydroxychloroquine are the foundations of treatment.',
  ),

  'dermatomyositis': entry(
    'dermatomyositis',
    'Dermatomyositis',
    'Dermatomiositis',
    'autoimmune',
    'EB12',
    'Autoimmune inflammatory myopathy with characteristic cutaneous findings; clinically amyopathic dermatomyositis (CADM) affects the skin without detectable muscle disease. Adult-onset DM carries malignancy risk.',
    'Complement-mediated microangiopathy targeting intramuscular capillaries and skin. Autoantibodies (anti-Mi-2, anti-MDA5, anti-TIF1-gamma, anti-NXP2) correlate with clinical phenotype. Type I interferon signature in skin and muscle. Perifascicular atrophy on muscle biopsy reflects ischaemic injury from capillary dropout.',
    [
      'Heliotrope rash: violaceous periorbital erythema and oedema',
      'Gottron papules: violaceous papules over MCPs, PIPs, elbows, knees (pathognomonic)',
      'Shawl sign: erythema over upper back, shoulders, and V-shaped neck distribution',
      'Mechanic\'s hands: hyperkeratotic, fissured skin on lateral and palmar fingers',
      'Proximal muscle weakness: difficulty rising from chair, climbing stairs, raising arms overhead',
      'Periungual erythema with dilated capillary loops (nailfold capillaroscopy)',
    ],
    [
      'Muscle enzymes: CK, aldolase, LDH, AST/ALT (may be normal in CADM)',
      'Myositis-specific antibodies: anti-Mi-2, anti-MDA5 (ILD risk), anti-TIF1-gamma (malignancy risk), anti-NXP2 (calcinosis)',
      'MRI of proximal muscles: oedema pattern on STIR sequences',
      'EMG: myopathic pattern with fibrillations',
      'Skin biopsy: interface dermatitis, mucin deposition in dermis',
      'Malignancy screening: age-appropriate cancer screening plus CT chest/abdomen/pelvis; colonoscopy',
    ],
    [
      'Skin: photoprotection, topical corticosteroids, calcineurin inhibitors, hydroxychloroquine',
      'Muscle disease: prednisone 1 mg/kg/day with steroid-sparing agent (methotrexate, azathioprine, mycophenolate)',
      'Refractory: IVIG (proven in RCT), rituximab',
      'Anti-MDA5 CADM with ILD: aggressive immunosuppression (tacrolimus, cyclophosphamide, tofacitinib)',
      'Malignancy: treat underlying cancer; paraneoplastic DM may resolve',
    ],
    [
      'Interstitial lung disease (especially anti-MDA5; rapidly progressive ILD)',
      'Malignancy: 15-25% of adult DM patients; highest risk in first 3 years',
      'Calcinosis cutis (especially in juvenile DM)',
      'Dysphagia from pharyngeal muscle involvement',
      'Cardiac involvement: cardiomyopathy, conduction abnormalities',
    ],
    'Dermatomyositis is an autoimmune condition that causes a distinctive purplish rash around the eyes and on the knuckles, along with muscle weakness. Adults with this condition need cancer screening because it can sometimes occur alongside an internal malignancy. Treatment involves immune-suppressing medicines.',
  ),

  'morphea': entry(
    'morphea',
    'Morphea (Localised Scleroderma)',
    'Morfea (Esclerodermia Localizada)',
    'autoimmune',
    'EB20',
    'Localised autoimmune fibrotic disorder of the skin and subcutaneous tissue without systemic sclerosis involvement; characterised by sclerotic plaques with a lilac ring indicating active inflammation.',
    'Aberrant fibroblast activation driven by Th2 cytokines (IL-4, IL-13) and TGF-beta signalling leads to excessive collagen deposition (types I and III) in the dermis and subcutis. Endothelial injury and perivascular inflammation precede fibrosis. Distinct from systemic sclerosis (no Raynaud, no anti-centromere or anti-Scl-70 antibodies, no internal organ involvement).',
    [
      'Plaque morphea: oval ivory-white sclerotic plaque with waxy surface and violaceous (lilac) ring border indicating active inflammation',
      'Linear morphea: band-like sclerosis following Blaschko lines; in children may cross joints causing contractures',
      'En coup de sabre: linear morphea of the frontoparietal scalp and forehead with associated alopecia',
      'Pansclerotic morphea (rare severe variant): circumferential involvement of limbs and trunk',
      'Active lesions are firm but not bound down; late lesions show dermal atrophy and dyspigmentation',
    ],
    [
      'Clinical diagnosis in classic plaque morphea',
      'Skin biopsy: early -- perivascular lymphocytic and plasma cell infiltrate; late -- thickened, homogenised collagen with loss of adnexal structures',
      'Autoantibodies: ANA positive in 40-80% (non-specific); anti-ssDNA, anti-histone may be present',
      'MRI for linear morphea to assess depth and musculoskeletal involvement',
      'Rule out systemic sclerosis: no Raynaud, normal nailfold capillaroscopy, no anti-centromere/Scl-70',
    ],
    [
      'Active inflammatory (lilac ring present): topical tacrolimus, topical calcipotriol',
      'Moderate: phototherapy (UVA1 medium-dose is best studied)',
      'Severe/linear/rapidly progressive: methotrexate +/- short-course oral corticosteroids (most evidence in paediatric linear morphea)',
      'Mycophenolate mofetil for refractory disease',
      'Physical and occupational therapy for linear morphea crossing joints',
    ],
    [
      'Joint contractures and limb-length discrepancy (linear morphea in children)',
      'Disfigurement: facial atrophy (en coup de sabre), dyspigmentation',
      'Neurological complications of en coup de sabre: seizures (rare), intracranial calcification',
      'Psychological impact, especially in children with visible facial involvement',
    ],
    'Morphea is a condition where patches of skin become hard and discoloured due to excess collagen. It only affects the skin and tissue underneath -- it is not the same as systemic scleroderma that affects internal organs. Active patches often have a purple ring at the edges. Treatment can slow progression and soften the skin.',
  ),

  // =========================================================================
  // PIGMENTARY (4)
  // =========================================================================
  'vitiligo': entry(
    'vitiligo',
    'Vitiligo',
    'Vitiligo',
    'pigmentary',
    'ED60.0',
    'Acquired autoimmune depigmenting disorder resulting from selective melanocyte destruction, affecting 0.5-2% of the population worldwide.',
    'CD8+ cytotoxic T-cell-mediated melanocyte destruction driven by recognition of melanocyte antigens (tyrosinase, MART-1, gp100). IFN-gamma and CXCL10/CXCR3 chemokine axis recruit autoreactive T-cells. Oxidative stress in melanocytes (elevated H2O2, reduced catalase) generates neoantigens. Strong association with other autoimmune diseases (thyroid disease, type 1 diabetes, pernicious anaemia).',
    [
      'Well-defined, chalk-white depigmented macules and patches',
      'Bilateral symmetric distribution (generalized/non-segmental): periorbital, perioral, dorsal hands, elbows, knees, genital area',
      'Segmental vitiligo: unilateral, dermatomal, rapid onset then stabilisation; less associated with autoimmunity',
      'Koebner phenomenon: depigmentation at sites of trauma',
      'Leukotrichia (white hairs) within patches indicates follicular melanocyte reservoir loss',
    ],
    [
      'Clinical diagnosis; enhanced by Wood lamp (bright white fluorescence of depigmented patches)',
      'Dermoscopy: residual perifollicular pigmentation (good prognostic sign for repigmentation)',
      'Skin biopsy (rarely needed): absence of melanocytes on Fontana-Masson and Melan-A stains',
      'Screen for associated autoimmune conditions: TSH, anti-TPO, fasting glucose, CBC (B12/folate)',
    ],
    [
      'Topical: corticosteroids (first-line for limited disease), calcineurin inhibitors (tacrolimus for face/folds)',
      'Phototherapy: narrowband UVB (gold standard for generalised vitiligo) 2-3x/week for 6-12+ months',
      'Systemic: mini-pulse oral corticosteroids (dexamethasone 2.5 mg on consecutive weekends) to halt progression in active disease',
      'JAK inhibitors: ruxolitinib 1.5% cream (FDA-approved topical for non-segmental vitiligo)',
      'Surgical: autologous melanocyte-keratinocyte transplantation, punch grafting for stable segmental vitiligo',
    ],
    [
      'Psychosocial impact: stigmatisation, depression, anxiety (especially in darker-skinned populations)',
      'Ocular melanocyte involvement: uveitis, retinal depigmentation (ophthalmologic screening)',
      'Koebner phenomenon complicating surgical procedures',
      'Association with autoimmune thyroid disease (check periodically)',
    ],
    'Vitiligo causes white patches on the skin when the immune system destroys pigment-producing cells. It is not contagious. Treatments include prescription creams and light therapy that can help the colour return, especially when started early. A newer topical cream (ruxolitinib) that targets the immune pathway was recently approved.',
  ),

  'melasma': entry(
    'melasma',
    'Melasma',
    'Melasma',
    'pigmentary',
    'ED63.1',
    'Acquired symmetric hyperpigmentation of the face, predominantly affecting women of childbearing age with Fitzpatrick skin types III-V; exacerbated by UV exposure, hormonal factors, and visible light.',
    'Multifactorial: UV and visible light (especially blue light, 400-500 nm) stimulate melanocytes via opsin-3 receptor activation and paracrine signalling from keratinocytes (stem cell factor, endothelin-1). Oestrogen and progesterone upregulate melanogenesis via tyrosinase and MITF. Dermal mast cells and vascular factors contribute to the melanogenic milieu.',
    [
      'Symmetric brown to grey-brown patches on the face',
      'Three patterns: centrofacial (most common -- forehead, cheeks, nose, upper lip), malar, mandibular',
      'Wood lamp classification: epidermal (enhanced), dermal (not enhanced), or mixed',
      'Exacerbated by pregnancy (chloasma), oral contraceptives, hormone therapy, sun exposure',
      'Chronic relapsing course; may partially improve postpartum',
    ],
    [
      'Clinical diagnosis',
      'Wood lamp examination to estimate depth of pigment (epidermal vs dermal/mixed)',
      'Dermoscopy: brown pseudo-network pattern, brown diffuse areas',
      'Skin biopsy (rarely needed): increased melanin in epidermis +/- dermis, solar elastosis, increased mast cells',
    ],
    [
      'Sun protection: critical foundation -- broad-spectrum SPF 50+, visible light protection (iron oxide-containing sunscreens), wide-brimmed hat',
      'First-line topical: triple combination (hydroquinone 4% + tretinoin 0.05% + fluocinolone 0.01%) nightly',
      'Maintenance: azelaic acid 15-20%, tranexamic acid (topical 5% or oral 250 mg BID), vitamin C, arbutin, niacinamide',
      'Chemical peels: superficial glycolic acid peels as adjunct',
      'Laser/light therapy: cautious use; low-fluence Q-switched Nd:YAG can help but risk of rebound hyperpigmentation',
    ],
    [
      'Post-inflammatory hyperpigmentation from aggressive treatments',
      'Ochronosis (paradoxical darkening) from prolonged hydroquinone use',
      'High recurrence rate; requires long-term maintenance therapy and photoprotection',
      'Psychosocial impact affecting quality of life',
    ],
    'Melasma causes brown or grey patches on the face, especially in women during pregnancy or while taking hormones. Sun and visible light make it worse. The most important step is rigorous sun protection. Prescription lightening creams can fade the patches, but consistent use is needed to keep them from returning.',
  ),

  'post-inflammatory-dyspigmentation': entry(
    'post-inflammatory-dyspigmentation',
    'Post-Inflammatory Hyperpigmentation',
    'Hiperpigmentacion Postinflamatoria',
    'pigmentary',
    'ED63.0',
    'Acquired hypermelanosis occurring after cutaneous inflammation or injury, disproportionately affecting darker skin types (Fitzpatrick IV-VI) and a leading reason for dermatology consultation in skin of colour.',
    'Inflammation triggers melanocyte activation via prostaglandins, leukotrienes, and cytokines (IL-1, TNF-alpha, endothelin-1). Epidermal PIH: increased melanin transfer to keratinocytes. Dermal PIH (melanosis): basal layer disruption causes melanin incontinence into the dermis where melanophages phagocytose free melanin (much more persistent).',
    [
      'Darkened macules or patches at sites of prior inflammation or injury',
      'Epidermal PIH: brown colour; enhances on Wood lamp',
      'Dermal PIH (melanosis): blue-grey colour; does not enhance on Wood lamp',
      'Common causes: acne, eczema, insect bites, burns, cosmetic procedures, laser treatments',
      'Distribution mirrors the preceding inflammatory condition',
    ],
    [
      'Clinical diagnosis based on history of preceding inflammation and distribution',
      'Wood lamp: helps differentiate epidermal (enhanced) vs dermal (unchanged) pigment',
      'Dermoscopy: brown structureless areas (epidermal) or blue-grey granularity (dermal melanophages)',
      'Biopsy rarely needed; treat underlying cause and assess PIH depth',
    ],
    [
      'Treat underlying inflammatory condition first (prevent new PIH)',
      'Sun protection: SPF 30+ with visible light protection essential',
      'Topical: hydroquinone 2-4%, azelaic acid 15-20%, tretinoin, vitamin C, niacinamide, tranexamic acid',
      'Chemical peels: superficial (glycolic acid); caution with deeper peels in dark skin (risk worsening)',
      'Time: epidermal PIH improves in months; dermal PIH may persist for years',
    ],
    [
      'Prolonged duration (especially dermal melanosis)',
      'Worsening from aggressive treatments or sun exposure',
      'Significant psychosocial impact in darker skin types',
      'Ochronosis from prolonged use of hydroquinone-containing products',
    ],
    'After skin inflammation or injury (like acne or eczema), darker skin patches can develop. This is caused by the skin producing extra pigment as part of healing. It is not a scar and usually fades over time. Sun protection and lightening creams can speed improvement. The underlying condition should be treated to prevent new dark spots.',
  ),

  'albinism': entry(
    'albinism',
    'Oculocutaneous Albinism',
    'Albinismo Oculocutaneo',
    'pigmentary',
    'EC23',
    'Group of inherited disorders of melanin biosynthesis characterised by reduced or absent melanin in skin, hair, and eyes with associated visual impairment.',
    'Autosomal recessive mutations in melanin synthesis pathway genes: OCA1 (TYR -- tyrosinase, most common worldwide), OCA2 (OCA2/P gene), OCA3 (TYRP1), OCA4 (SLC45A2). Melanocytes are present in normal numbers but produce reduced or absent melanin. Misrouting of optic nerve fibres at the chiasm causes characteristic visual pathway abnormalities.',
    [
      'Hypopigmented to depigmented skin, hair, and eyes (degree varies by type)',
      'OCA1A (tyrosinase-negative): complete absence of melanin, white hair, translucent iris',
      'OCA2 (most common in African populations): yellow-brown hair, some skin pigment, blue-grey irides',
      'Ocular features: nystagmus, photophobia, reduced visual acuity, strabismus, foveal hypoplasia',
      'Extreme UV sensitivity with high risk of photoaging and skin cancer',
    ],
    [
      'Clinical diagnosis based on phenotype and family history',
      'Ophthalmologic examination: foveal hypoplasia, iris transillumination, misrouted visual evoked potentials',
      'Genetic testing for molecular classification (TYR, OCA2, TYRP1, SLC45A2)',
      'Distinguish from Hermansky-Pudlak syndrome (albinism + bleeding diathesis + pulmonary fibrosis) and Chediak-Higashi syndrome (albinism + recurrent infections + giant granules)',
    ],
    [
      'Strict photoprotection: high-SPF broad-spectrum sunscreen, protective clothing, hats, UV-blocking sunglasses',
      'Regular dermatologic surveillance: full-body skin examination every 6-12 months for skin cancer',
      'Ophthalmologic management: corrective lenses, low-vision aids, surgical correction of strabismus',
      'Genetic counselling for families',
      'Psychosocial support: patient communities, education against stigmatisation',
    ],
    [
      'Squamous cell carcinoma (primary cause of mortality in equatorial regions with limited healthcare access)',
      'Basal cell carcinoma and melanoma (amelanotic type)',
      'Severe visual impairment affecting education and employment',
      'Psychosocial: stigma and discrimination (especially in sub-Saharan Africa)',
      'Hermansky-Pudlak syndrome: bleeding diathesis, pulmonary fibrosis, granulomatous colitis',
    ],
    'Albinism is a genetic condition where the body makes little or no melanin pigment, causing very pale skin, light hair, and vision problems. People with albinism need rigorous sun protection to prevent skin cancer and regular eye care. Genetic counselling can help families understand inheritance patterns.',
  ),

  // =========================================================================
  // HAIR-NAIL (4)
  // =========================================================================
  'alopecia-areata': entry(
    'alopecia-areata',
    'Alopecia Areata',
    'Alopecia Areata',
    'hair-nail',
    'ED70.0',
    'Autoimmune non-scarring alopecia characterised by well-circumscribed patches of hair loss; may progress to total scalp (alopecia totalis) or total body (alopecia universalis) hair loss.',
    'Loss of immune privilege of the hair follicle bulb. CD8+NKG2D+ T-cells infiltrate the peribulbar region, targeting melanocyte-associated antigens in anagen (growth phase) follicles. IFN-gamma and IL-15 create an inflammatory milieu. JAK-STAT pathway activation is central to pathogenesis, forming the basis for JAK inhibitor therapy.',
    [
      'Smooth, well-circumscribed, round to oval patches of non-scarring hair loss',
      'Exclamation-point hairs (tapered proximal end) at periphery of active patches',
      'Nail changes in 10-20%: fine pitting (geometric pitting), trachyonychia (rough nails)',
      'Alopecia totalis (entire scalp) and alopecia universalis (entire body)',
      'Ophiasis pattern: band-like loss along temporal and occipital scalp (poor prognosis)',
    ],
    [
      'Clinical diagnosis; pull test positive at margins of active patches',
      'Dermoscopy: exclamation-point hairs, black dots, yellow dots, broken hairs, short vellus hairs (regrowth sign)',
      'Scalp biopsy if uncertain: peribulbar lymphocytic infiltrate (swarm of bees) around anagen follicles',
      'Screen for associated autoimmune conditions: thyroid (anti-TPO), vitiligo',
      'SALT (Severity of Alopecia Tool) score for standardised assessment',
    ],
    [
      'Limited disease: topical corticosteroids (high potency), intralesional triamcinolone 5-10 mg/mL every 4-6 weeks',
      'Topical immunotherapy: diphenylcyclopropenone (DPCP) contact sensitisation',
      'Moderate-severe: oral JAK inhibitors -- baricitinib (FDA-approved for adults), ritlecitinib (FDA-approved for adolescents >= 12 years)',
      'Systemic: oral mini-pulse corticosteroids (limited evidence), methotrexate',
      'Cosmetic: wigs, hairpieces, scalp micropigmentation; psychological support',
    ],
    [
      'Progression to alopecia totalis or universalis (7-10%)',
      'High recurrence rate (50% within 1 year after treatment discontinuation)',
      'Psychosocial impact: depression, anxiety, social withdrawal (especially in children)',
      'Associated autoimmune thyroid disease (8-28%)',
      'Atopic dermatitis association (increased prevalence)',
    ],
    'Alopecia areata is an autoimmune condition that causes round patches of hair loss when the immune system mistakenly attacks hair follicles. Hair can regrow on its own or with treatment. New oral JAK inhibitor medicines have been a breakthrough for people with extensive hair loss.',
  ),

  'androgenetic-alopecia': entry(
    'androgenetic-alopecia',
    'Androgenetic Alopecia',
    'Alopecia Androgenetica',
    'hair-nail',
    'ED70.1',
    'Most common cause of hair loss; progressive, patterned hair thinning driven by androgen action on genetically susceptible hair follicles.',
    'Dihydrotestosterone (DHT, converted from testosterone by 5-alpha reductase type II) binds androgen receptors on follicles in susceptible scalp areas (frontal and vertex), shortening anagen phase and inducing follicular miniaturisation (terminal to vellus hair conversion). Occipital follicles lack this androgen sensitivity. Polygenic inheritance with variable expressivity.',
    [
      'Males (male-pattern baldness): Hamilton-Norwood classification; bitemporal recession and vertex thinning progressing to extensive crown loss with occipital preservation',
      'Females (female-pattern hair loss): Ludwig classification; diffuse thinning over crown with preserved frontal hairline; widening of central part',
      'Gradual onset; may begin in late teens/early twenties in males',
      'Miniaturised hairs (thin, light, short) intermixed with normal hairs',
      'Females: exclude hyperandrogenism if irregular menses, hirsutism, acne',
    ],
    [
      'Clinical diagnosis in classic pattern',
      'Dermoscopy: hair diameter diversity (>20% variability), yellow dots, peripilar sign (brown halo)',
      'Pull test usually negative (chronic telogen effluvium excluded)',
      'Females: hormonal workup if hyperandrogenism suspected (free testosterone, DHEA-S, prolactin, TSH)',
      'Scalp biopsy: increased telogen:anagen ratio, follicular miniaturisation, terminal:vellus ratio < 4:1',
    ],
    [
      'Topical minoxidil 5% (men) or 2-5% (women) once-twice daily (prolongs anagen phase, enhances follicular blood flow)',
      'Oral finasteride 1 mg/day (men): 5-alpha-reductase type II inhibitor reducing DHT; not for premenopausal women',
      'Oral dutasteride 0.5 mg/day (off-label): dual 5-alpha-reductase inhibitor; more potent DHT reduction',
      'Low-dose oral minoxidil (2.5-5 mg/day): increasingly used for convenience and efficacy',
      'Surgical: follicular unit transplantation (FUT) or extraction (FUE) for stable hair loss',
      'Adjunctive: PRP (platelet-rich plasma) injections, low-level laser therapy',
    ],
    [
      'Progressive thinning without treatment',
      'Sexual side effects of finasteride (1-2%: decreased libido, erectile dysfunction; usually reversible)',
      'Minoxidil: initial telogen effluvium (shedding at 2-8 weeks), hypertrichosis, contact dermatitis',
      'Post-finasteride syndrome: controversial; persistent sexual/neurological symptoms reported',
      'Psychological impact on self-esteem and body image',
    ],
    'Androgenetic alopecia (common baldness) is gradual hair thinning caused by hormones and genetics. In men it follows a receding hairline and thinning crown pattern; in women the hair thins across the top. Minoxidil and finasteride can slow or partially reverse hair loss. Hair transplantation offers a permanent option for stable cases.',
  ),

  'onychomycosis': entry(
    'onychomycosis',
    'Onychomycosis',
    'Onicomicosis',
    'hair-nail',
    '1F28.5',
    'Fungal infection of the nail unit (most commonly toenails) caused by dermatophytes, non-dermatophyte moulds, or yeasts; the most common nail disorder.',
    'Dermatophytes (Trichophyton rubrum most common) invade the nail plate through the hyponychium (distal subungual) or proximal nail fold. Fungal keratinases degrade nail keratin. Subungual debris accumulates as the infection spreads. Biofilm formation on the nail plate contributes to treatment resistance.',
    [
      'Distal lateral subungual onychomycosis (DLSO): most common; distal nail plate thickening, yellow-white discolouration, subungual hyperkeratosis, onycholysis',
      'Proximal subungual onychomycosis (PSO): white discolouration at proximal nail fold; suggests immunosuppression (consider HIV)',
      'Superficial white onychomycosis: chalky white patches on dorsal nail plate',
      'Total dystrophic onychomycosis: complete nail destruction (end-stage)',
      'Toenails affected more than fingernails; risk factors: aging, diabetes, tinea pedis, peripheral vascular disease',
    ],
    [
      'Mycological confirmation before treatment: nail clipping for KOH + fungal culture',
      'PAS staining of nail clipping (most sensitive histopathological test)',
      'PCR-based testing available for rapid species identification',
      'Dermoscopy: longitudinal striae, aurora borealis pattern, jagged proximal edge',
      'Rule out nail psoriasis, lichen planus, traumatic dystrophy',
    ],
    [
      'Topical (mild-moderate, <50% nail involvement): efinaconazole 10%, tavaborole 5%, ciclopirox 8% lacquer',
      'Oral terbinafine (preferred): 250 mg/day for 6 weeks (fingernails) or 12 weeks (toenails); cure rate ~70%',
      'Oral itraconazole: pulse dosing 200 mg BID for 1 week/month x3-4 months',
      'Combination: oral + topical antifungal for enhanced efficacy',
      'Mechanical/chemical nail debridement; device-based: laser (adjunctive, limited evidence)',
    ],
    [
      'Recurrence rate 10-50% (re-infection or relapse)',
      'Secondary bacterial infection (cellulitis in diabetic patients)',
      'Pain and difficulty with footwear',
      'Drug interactions: terbinafine (rare hepatotoxicity; LFTs at baseline); itraconazole (CYP3A4 interactions, negative inotrope)',
    ],
    'Onychomycosis is a fungal nail infection causing thickened, discoloured, and crumbly nails, most often on the toes. A nail sample should confirm the diagnosis before starting treatment. Oral antifungal pills (terbinafine) for 3 months are the most effective option. Topical nail lacquers work for mild cases.',
  ),

  'lichen-planopilaris': entry(
    'lichen-planopilaris',
    'Lichen Planopilaris',
    'Liquen Plano Pilar',
    'hair-nail',
    'ED70.5',
    'Lymphocytic scarring alopecia resulting from lichen planus targeting the hair follicle; causes permanent hair loss if not treated in the inflammatory stage.',
    'T-cell-mediated immune attack on the follicular epithelium, particularly the bulge region containing hair follicle stem cells. Destruction of the stem cell niche leads to irreversible follicular loss and fibrosis. Frontal fibrosing alopecia (FFA) is a clinical variant presenting as progressive frontal hairline recession and eyebrow loss predominantly in postmenopausal women.',
    [
      'Multifocal patches of scarring alopecia with perifollicular erythema and keratotic follicular plugging at active margins',
      'Central cicatricial (scarring) area: smooth, shiny, devoid of follicular ostia',
      'Frontal fibrosing alopecia: symmetric recession of frontal and temporal hairline with lonely hairs; eyebrow and body hair loss',
      'Pull test positive at margins of active patches',
      'May coexist with mucocutaneous lichen planus',
    ],
    [
      'Scalp biopsy (critical for diagnosis): lichenoid lymphocytic infiltrate targeting follicular infundibulum and isthmus; perifollicular fibrosis (concentric lamellar pattern)',
      'DIF: may show fibrinogen at the basement membrane zone (fibrin ring)',
      'Dermoscopy: perifollicular scaling (tubular casts), loss of follicular openings in scarred areas, blue-grey dots',
      'LPPAI (Lichen Planopilaris Activity Index) for monitoring disease activity',
    ],
    [
      'Anti-inflammatory to halt progression (cannot regrow destroyed follicles): topical and intralesional corticosteroids',
      'First-line systemic: hydroxychloroquine 200-400 mg/day',
      'Second-line: doxycycline, mycophenolate mofetil, methotrexate, pioglitazone (anti-fibrotic)',
      'Frontal fibrosing alopecia: 5-alpha-reductase inhibitors (finasteride/dutasteride), hydroxychloroquine',
      'Hair transplantation only in completely quiescent disease (burn-out phase, minimum 2 years stable)',
    ],
    [
      'Permanent, irreversible hair loss in scarred areas',
      'Progressive hairline recession (FFA) affecting appearance',
      'Significant psychological impact',
      'Treatment resistance: many patients have incomplete response',
    ],
    'Lichen planopilaris is an inflammatory condition that attacks hair follicles, causing permanent hair loss in affected areas. The goal of treatment is to stop the inflammation early, before more hair follicles are destroyed. Hydroxychloroquine and other immune-modulating medicines can help halt progression.',
  ),

  // =========================================================================
  // PEDIATRIC-DERM (4)
  // =========================================================================
  'hemangioma-of-infancy': entry(
    'hemangioma-of-infancy',
    'Infantile Hemangioma',
    'Hemangioma Infantil',
    'pediatric-derm',
    'LC10.0',
    'Most common benign vascular tumour of infancy, characterised by GLUT-1-positive endothelial cell proliferation with a predictable natural history of rapid growth followed by slow involution.',
    'Clonal proliferation of GLUT-1-positive endothelial progenitor cells, possibly of placental origin. VEGF-A and bFGF drive the proliferative phase (0-12 months). Increased apoptosis, reduced angiogenic factors, and adipocyte replacement characterise involution (1-5+ years). Beta-2 adrenergic receptors on hemangioma endothelial cells explain the mechanism of propranolol.',
    [
      'Precursor lesion at birth: pale macule, telangiectatic patch, or bruise-like area',
      'Proliferative phase (0-9 months): rapidly enlarging bright red (superficial) or bluish (deep) soft compressible mass',
      'Involution phase (1-5+ years): colour fades to dull purple, lesion softens and flattens',
      'Segmental hemangiomas: plaque-like, following developmental segments; higher complication risk',
      'PHACE syndrome: Posterior fossa anomalies, Hemangioma, Arterial anomalies, Cardiac anomalies, Eye anomalies (large segmental facial hemangiomas)',
    ],
    [
      'Clinical diagnosis in most cases (characteristic history and appearance)',
      'Ultrasound with Doppler: high-flow, well-defined soft tissue mass (distinguish from venous malformation)',
      'MRI for deep/segmental hemangiomas and suspected PHACE syndrome',
      'GLUT-1 immunostaining on biopsy: positive (distinguishes from other vascular tumours)',
      'Echocardiography and brain MRI for suspected PHACE syndrome',
    ],
    [
      'Observation: majority involute without intervention (50% near-complete by age 5)',
      'Oral propranolol (first-line for problematic hemangiomas): 2-3 mg/kg/day in divided doses; initiated during proliferative phase; typically continued until 12 months of age',
      'Indications for treatment: functional impairment (periorbital, airway), ulceration, disfigurement risk, PHACE syndrome',
      'Topical timolol 0.5% gel: for small superficial hemangiomas',
      'Surgical excision or pulsed dye laser for residual skin changes after involution',
    ],
    [
      'Ulceration (most common complication): painful, risk of infection and scarring',
      'Visual axis obstruction: amblyopia, astigmatism',
      'Airway compromise (subglottic hemangioma)',
      'Residual changes: fibrofatty tissue, telangiectasias, anetoderma, scarring (in 50-70%)',
      'Propranolol side effects: bradycardia, hypotension, hypoglycaemia, bronchospasm',
    ],
    'Infantile hemangiomas are common birthmarks made of extra blood vessels that typically grow rapidly in the first few months, then slowly shrink over years. Most go away on their own. If a hemangioma threatens vision, breathing, or causes sores, an oral medicine called propranolol can safely shrink it.',
  ),

  'atopic-dermatitis-pediatric': entry(
    'atopic-dermatitis-pediatric',
    'Pediatric Atopic Dermatitis',
    'Dermatitis Atopica Pediatrica',
    'pediatric-derm',
    'EA80',
    'Most common chronic inflammatory skin disease of childhood, typically presenting in the first year of life with age-dependent morphology and distribution.',
    'Same filaggrin barrier dysfunction and Th2-skewed immune pathology as adult atopic dermatitis, with additional considerations: early-life microbial exposures shape immune development (hygiene hypothesis), early onset of atopic march (AD -> food allergy -> asthma -> allergic rhinitis), and epigenetic factors from maternal diet and environment.',
    [
      'Infants (0-2 years): oozing, crusted papules and plaques on cheeks, scalp, and extensor surfaces; diaper area typically spared',
      'Children (2-12 years): lichenified flexural dermatitis (antecubital, popliteal fossae, neck, wrists, ankles)',
      'Intense pruritus causing sleep disturbance, irritability, and scratching damage',
      'Follicular prominence and pityriasis alba (hypopigmented patches) common in darker skin types',
      'Associated food allergy in 30% of moderate-severe cases (especially egg, milk, peanut)',
    ],
    [
      'Clinical diagnosis using modified Hanifin-Rajka or UK Working Party criteria',
      'SCORAD or EASI for severity assessment',
      'Consider food allergy testing (skin prick or specific IgE) if: severe AD < 5 years, AD refractory to appropriate therapy, reliable history of immediate reaction',
      'Avoid unnecessary broad food panel testing (high false-positive rates)',
    ],
    [
      'Foundation: daily bathing followed by immediate emollient application (soak-and-seal)',
      'Mild: low-potency topical corticosteroids (hydrocortisone 2.5% for face/folds)',
      'Moderate: mid-potency TCS for body, calcineurin inhibitors (pimecrolimus 1%, tacrolimus 0.03% for < 16 years) for sensitive areas and maintenance',
      'Severe: dupilumab (approved >= 6 months), upadacitinib (>= 12 years), tralokinumab (>= 12 years)',
      'Bleach baths (0.005% sodium hypochlorite) 2x/week to reduce S. aureus colonisation',
      'Wet wraps for acute flares: emollient + wet layer + dry layer',
    ],
    [
      'Eczema herpeticum: widespread HSV requiring IV acyclovir',
      'Secondary bacterial infection (impetiginised eczema)',
      'Growth faltering from chronic inflammation, sleep disturbance, and dietary restriction',
      'Atopic march progression to food allergy, asthma, allergic rhinitis',
      'Psychosocial: impact on child and family quality of life, sleep, school performance',
    ],
    'Eczema in children causes itchy, red, dry skin that comes and goes. Babies often have it on the face; older children get it in elbow and knee creases. The keys to management are daily moisturising, avoiding irritants, and using prescribed anti-inflammatory creams during flares. Newer medicines are available for children with severe eczema.',
  ),

  'diaper-dermatitis': entry(
    'diaper-dermatitis',
    'Diaper Dermatitis',
    'Dermatitis del Panal',
    'pediatric-derm',
    'EK02',
    'Acute inflammatory dermatitis of the diaper area in infants, most commonly irritant contact dermatitis from prolonged exposure to urine and faeces.',
    'Occlusion, moisture, friction, and elevated pH from urease-producing bacteria (converting urea to ammonia) damage the stratum corneum barrier. Faecal lipases and proteases cause direct irritant injury. Damaged skin is secondarily colonised by Candida albicans (complicating up to 80% of diaper dermatitis lasting >3 days).',
    [
      'Erythema, papules, and maceration on convex surfaces (buttocks, genitalia, lower abdomen, upper thighs)',
      'Sparing of inguinal folds (distinguishes from candidal dermatitis)',
      'Candidal superinfection: beefy-red confluent erythema WITH fold involvement and satellite papulopustules',
      'Erosive (Jacquet) dermatitis: punched-out erosions and ulcers in severe cases',
      'Granuloma gluteale infantum: reddish-purple nodules (reaction to potent topical steroids or candida)',
    ],
    [
      'Clinical diagnosis based on morphology and distribution',
      'KOH preparation if candidal infection suspected: budding yeast and pseudohyphae',
      'Consider other diagnoses if refractory: psoriasis (well-demarcated, glazed), Langerhans cell histiocytosis (petechial, erosive, refractory), seborrheic dermatitis (greasy scale in folds), zinc deficiency (acrodermatitis enteropathica)',
    ],
    [
      'Prevention: frequent diaper changes, superabsorbent diapers, air exposure',
      'Barrier protection: zinc oxide paste or petrolatum with each change',
      'Mild-moderate: low-potency topical corticosteroid (hydrocortisone 1%) for 3-7 days',
      'Candidal superinfection: topical nystatin or clotrimazole cream with each diaper change x7-14 days',
      'Avoid: combination steroid-antifungal products with high-potency steroids, baby powder (aspiration risk)',
    ],
    [
      'Candidal superinfection',
      'Secondary bacterial infection (Staphylococcus, Streptococcus)',
      'Granuloma gluteale infantum from potent topical steroids',
      'Erosive/ulcerative dermatitis requiring wound care',
    ],
    'Diaper rash is caused by moisture and irritation under the diaper. Frequent diaper changes, barrier creams (zinc oxide), and air exposure are the best prevention and treatment. If the rash is bright red and involves the skin folds with tiny spots around it, yeast may be involved and an antifungal cream is needed.',
  ),

  'port-wine-stain': entry(
    'port-wine-stain',
    'Port-Wine Stain (Capillary Malformation)',
    'Mancha en Vino de Oporto (Malformacion Capilar)',
    'pediatric-derm',
    'LA90.0',
    'Congenital capillary vascular malformation present at birth as a flat, pink-to-red patch that persists and darkens with age; caused by somatic GNAQ mutations.',
    'Somatic activating mutation in GNAQ (R183Q) in endothelial cells leads to constitutive Gq-alpha signalling and capillary ectasia (dilation without proliferation). Unlike hemangiomas, these are malformations (structural anomalies) that grow proportionally with the child and do not involute. GLUT-1 negative. Progressive ectasia causes darkening and soft tissue hypertrophy over decades.',
    [
      'Present at birth: flat, sharply demarcated, pink-to-red patch',
      'Most commonly unilateral on the face, following trigeminal nerve distribution',
      'Darkens from pink to red to purple with age; develops cobblestone surface and soft tissue hypertrophy',
      'V1 involvement: screen for Sturge-Weber syndrome (ipsilateral leptomeningeal and ocular vascular malformations)',
      'Lower extremity: consider Klippel-Trenaunay syndrome (capillary-lymphatic-venous malformation with limb hypertrophy)',
    ],
    [
      'Clinical diagnosis at birth',
      'Dermoscopy: well-demarcated area of dilated, ectatic capillaries',
      'Brain MRI with gadolinium for V1 port-wine stains: evaluate for leptomeningeal enhancement (Sturge-Weber)',
      'Ophthalmologic examination: screen for glaucoma (Sturge-Weber)',
      'Limb-length assessment and venous Doppler if lower extremity involvement',
    ],
    [
      'Pulsed dye laser (PDL, 595 nm): gold standard; targets oxyhemoglobin, selectively destroys ectatic vessels; multiple sessions needed; best results when started in infancy',
      'Combination or sequential laser therapy for resistant areas',
      'Topical timolol or sirolimus (rapamycin): investigational adjuncts',
      'Surgical debulking for hypertrophic tissue in advanced cases',
      'Camouflage cosmetics for residual discolouration',
    ],
    [
      'Progressive darkening and soft tissue hypertrophy without treatment',
      'Sturge-Weber syndrome: seizures, glaucoma, stroke-like episodes, intellectual disability',
      'Klippel-Trenaunay syndrome: limb overgrowth, venous thromboembolism',
      'Psychosocial impact of visible facial birthmark',
      'Pyogenic granulomas and nodular changes in long-standing lesions',
    ],
    'A port-wine stain is a flat, red or pink birthmark caused by extra blood vessels in the skin. It is present from birth and does not go away on its own. Laser treatment can lighten the colour significantly, especially when started early. If the birthmark is near the eye, screening for related eye and brain conditions is important.',
  ),

  // =========================================================================
  // PROCEDURAL (5)
  // =========================================================================
  'mohs-surgery': entry(
    'mohs-surgery',
    'Mohs Micrographic Surgery',
    'Cirugia de Mohs',
    'procedural',
    'QEH1',
    'Specialised surgical technique for skin cancer excision with real-time intraoperative margin assessment using frozen section histopathology, providing the highest cure rate while maximising tissue conservation.',
    'Based on the Mohs principle of complete circumferential peripheral and deep margin assessment (CCPDMA). The surgeon excises a thin layer of tissue, maps it, and processes it as horizontal (en face) frozen sections so that 100% of the surgical margin is examined histologically. If residual tumour is identified, additional layers are taken only from the positive margin area. This continues until all margins are clear.',
    [
      'Indicated for: high-risk BCC and SCC (recurrent, morpheaform, perineural invasion), cosmetically/functionally sensitive sites (face, ears, digits, genitalia), DFSP, lentigo maligna, and other select tumours',
      'Performed under local anaesthesia as an outpatient procedure',
      'Average 1.5-2 stages (layers) for primary BCC; more stages for recurrent tumours',
      'Same-day wound reconstruction: primary closure, flap, graft, or secondary intention healing',
      'Cure rate > 99% for primary BCC, > 97% for primary SCC',
    ],
    [
      'Pre-operative: verify diagnosis with biopsy, assess patient fitness for multi-hour outpatient procedure',
      'Intraoperative: complete margin mapping with horizontal frozen sections; tissue processing time ~30-45 minutes per stage',
      'Immunohistochemistry: MART-1/Melan-A for lentigo maligna, cytokeratin for poorly differentiated SCC',
      'Appropriate Use Criteria (AUC) by specialty societies define indications',
    ],
    [
      'Stage 1: excise visible tumour plus 1-2 mm margin; map orientation; process frozen sections',
      'Examine 100% of peripheral and deep margins microscopically',
      'If positive margin: take additional stage from mapped positive area only',
      'Repeat until all margins clear',
      'Reconstruct: direct linear closure, local flap (advancement, rotation, transposition), full-thickness skin graft, or secondary intention',
    ],
    [
      'Surgical: bleeding, infection, nerve injury, flap/graft necrosis',
      'Scarring and cosmetic outcome concerns',
      'Recurrence (rare but possible; 1-2% for primary BCC with Mohs)',
      'Prolonged procedure time if multiple stages needed',
    ],
    'Mohs surgery is a precise technique for removing skin cancer. The surgeon removes one thin layer at a time and checks each layer under the microscope until no cancer cells remain. This gives the highest cure rate while removing the least amount of healthy skin, making it ideal for cancers on the face and other sensitive areas.',
  ),

  'cryotherapy': entry(
    'cryotherapy',
    'Cryotherapy (Cryosurgery)',
    'Crioterapia (Criocirugia)',
    'procedural',
    'QEH4',
    'Controlled application of extreme cold (liquid nitrogen at -196 degrees C) to destroy targeted skin lesions through rapid freezing and thawing cycles.',
    'Rapid freezing creates intracellular ice crystals causing direct cellular damage (membrane disruption, organelle destruction). Slow thawing allows ice recrystallisation maximising cell death. Vascular stasis and thrombosis cause ischaemic necrosis in the hours following treatment. Immune-mediated response contributes to tumour destruction in malignant lesions.',
    [
      'Spray technique (open or confined cone): most common; allows depth and lateral spread control',
      'Cotton-tipped applicator: for small, flat lesions',
      'Cryoprobe: contact technique for well-defined lesions',
      'Treatment endpoints: freeze time, thaw time, number of freeze-thaw cycles (FTCs), lateral spread of ice ball',
      'Benign lesions: single FTC, 5-10 seconds; premalignant/malignant: double FTC, 20-60 seconds with complete thaw between cycles',
    ],
    [
      'Clinical or biopsy-confirmed diagnosis of target lesion',
      'Common indications: actinic keratoses, viral warts, seborrheic keratoses, superficial BCC, small SCC in situ',
      'Thermocouple needle for temperature monitoring in depth (-50 degrees C at deep margin for malignancy)',
      'Caution: avoid over crepitant areas (tendons), digital nerves, and in patients with cryoglobulinaemia or cold urticaria',
    ],
    [
      'Actinic keratoses: single FTC, 5-10 second freeze, 1-2 mm lateral spread',
      'Warts: double FTC, 10-20 seconds each, freeze margin 1-2 mm beyond visible lesion',
      'Superficial BCC/Bowen disease (when surgery declined): double FTC, 30 seconds each, 5 mm lateral margin; not first-line',
      'Post-procedure care: expected blister formation in 24-48 hours, wound care with petrolatum and bandage',
    ],
    [
      'Pain during and after procedure',
      'Blister formation (haemorrhagic blister if deep freeze)',
      'Hypopigmentation (melanocyte destruction) -- especially problematic in darker skin',
      'Hypertrophic scarring',
      'Nerve damage (prolonged freeze near superficial nerves)',
      'Recurrence (no margin control; cure rate inferior to excision for malignancy)',
    ],
    'Cryotherapy uses liquid nitrogen (extreme cold) to freeze and destroy skin growths like warts, precancerous spots, and some superficial skin cancers. The treated area blisters and peels off over 1-2 weeks. It is quick, done in the office, and usually well-tolerated, though the area may be lighter in colour afterward.',
  ),

  'skin-biopsy-techniques': entry(
    'skin-biopsy-techniques',
    'Skin Biopsy Techniques',
    'Tecnicas de Biopsia de Piel',
    'procedural',
    'QEB0',
    'Fundamental dermatologic procedures for obtaining tissue samples for histopathological diagnosis; includes shave, punch, excisional, and incisional techniques.',
    'Selection of biopsy technique depends on the clinical differential diagnosis, lesion morphology, anatomical site, and suspected depth of pathology. Proper technique ensures adequate tissue for diagnosis while minimising complications and scarring. Specimen orientation, fixation, and clinical information provided to the pathologist are critical for accurate interpretation.',
    [
      'Shave biopsy: superficial removal with blade/razor at or above dermal-epidermal junction; best for exophytic or epidermal lesions (seborrheic keratosis, superficial BCC, squamous papilloma)',
      'Punch biopsy (3-8 mm): full-thickness cylindrical specimen through epidermis, dermis, and into subcutis; preferred for inflammatory dermatoses, suspected melanoma depth, and panniculitis',
      'Excisional biopsy: complete removal with margin of normal skin; preferred for suspected melanoma and small neoplasms',
      'Incisional biopsy: partial sampling of larger lesions; appropriate for large tumours, panniculitis, or morphea',
    ],
    [
      'Pre-procedure: informed consent, allergy history (lidocaine, latex), anticoagulation status',
      'Site preparation: chlorhexidine or alcohol prep, local anaesthesia (1% lidocaine +/- epinephrine)',
      'Specimen handling: 10% neutral buffered formalin (routine histology); Michel medium (DIF); fresh tissue (culture)',
      'Submission: clinical history, differential diagnosis, lesion description, anatomical site',
      'Special studies: DIF (autoimmune blistering), culture (infections), flow cytometry (lymphoma)',
    ],
    [
      'Shave: tangential excision with #15 blade or DermaBlade; aluminium chloride haemostasis; heals by secondary intention',
      'Punch: twist disposable punch biopsy tool to subcutis; gentle extraction; close with simple interrupted sutures (or heal by secondary intention if <=3 mm)',
      'Excisional: elliptical excision with 1-3 mm margin (3:1 length-to-width ratio); orient along relaxed skin tension lines; layered closure',
      'Incisional: wedge or punch from most representative area (usually active border); include subcutis for panniculitis',
      'Post-procedure wound care: petrolatum and bandage; suture removal per site (face 5-7 days, trunk 10-14 days, extremities 14 days)',
    ],
    [
      'Bleeding and haematoma (minimised by pressure and haemostatic agents)',
      'Infection (low risk; prophylactic antibiotics not routinely indicated)',
      'Scarring: hypertrophic scar, keloid (especially chest, shoulders, earlobes)',
      'Sampling error: non-diagnostic biopsy from inadequate depth or non-representative site',
      'Shave biopsy of melanocytic lesion: inability to assess Breslow thickness if transected (avoid for suspected melanoma)',
    ],
    'A skin biopsy is a quick office procedure where a small sample of skin is removed for examination under a microscope. Different techniques (shave, punch, or excision) are used depending on the type of skin problem. Local anaesthesia numbs the area, and the small wound usually heals in 1-2 weeks.',
  ),

  'phototherapy': entry(
    'phototherapy',
    'Dermatologic Phototherapy',
    'Fototerapia Dermatologica',
    'procedural',
    'QEA0',
    'Therapeutic use of ultraviolet radiation (narrowband UVB, broadband UVB, UVA with psoralen) for treating inflammatory, autoimmune, and lymphoproliferative skin diseases.',
    'NB-UVB (311 nm): induces T-cell apoptosis, suppresses Langerhans cell function, promotes anti-inflammatory IL-10 and regulatory T-cells, and shifts Th1/Th2 balance. In vitiligo, UVB stimulates melanocyte stem cells in the hair follicle outer root sheath to migrate and repigment. PUVA: psoralen intercalates into DNA, and upon UVA activation forms cyclobutane adducts and monofunctional adducts that arrest cell proliferation.',
    [
      'Narrowband UVB (311 nm): first-line phototherapy; safest profile; suitable for psoriasis, vitiligo, atopic dermatitis, mycosis fungoides, pruritus of various causes',
      'PUVA (psoralen + UVA): more effective but higher side-effect risk; reserved for refractory psoriasis, palmoplantar dermatoses, mycosis fungoides',
      'Excimer laser (308 nm): targeted UVB for localised disease (vitiligo, psoriasis plaques)',
      'UVA1 (340-400 nm): deep-penetrating; for morphea, atopic dermatitis, urticaria pigmentosa',
      'Photodynamic therapy (ALA/MAL + red light): for actinic keratoses, superficial BCC, Bowen disease',
    ],
    [
      'Fitzpatrick skin type assessment for starting dose determination',
      'Minimal erythema dose (MED) testing or fixed protocol based on skin type',
      'Treatment schedule: typically 3x/week (NB-UVB), 2-3x/week (PUVA)',
      'Response assessment: PASI, VASI, mSWAT (mycosis fungoides)',
      'Monitoring: cumulative dose tracking, annual skin examination for PUVA patients',
    ],
    [
      'NB-UVB: start at 70% MED or protocol dose; increase 10-15% per session as tolerated; 20-36 sessions typical course',
      'PUVA: oral 8-MOP (methoxsalen) 0.6 mg/kg 1-2 hours before UVA; start at 70% MPD; increase 0.5-1 J/cm2 per session',
      'Home phototherapy: NB-UVB units for maintenance (improves adherence)',
      'Combination therapy: phototherapy + topical agents (calcipotriol, tacrolimus) enhance response',
      'Maintenance: gradual taper of frequency once clear; transition to topical maintenance',
    ],
    [
      'Acute: erythema/burn (most common), pruritus, xerosis, blistering',
      'Photoageing with long-term cumulative exposure',
      'PUVA-specific: increased risk of SCC (dose-dependent; track cumulative joules), cataracts (UV-protective eyewear mandatory for 24 hours post-8-MOP)',
      'NB-UVB: lower carcinogenesis risk than PUVA; no convincing increase in melanoma',
      'Drug-drug photosensitivity interactions (check medication list)',
    ],
    'Phototherapy uses controlled UV light to treat skin conditions like psoriasis, eczema, and vitiligo. Narrowband UVB is the most commonly used type and is very safe. Sessions are done in the clinic 2-3 times per week. The light calms the overactive immune response in the skin and, for vitiligo, stimulates pigment cells to produce colour.',
  ),

  'patch-testing': entry(
    'patch-testing',
    'Patch Testing',
    'Pruebas Epicutaneas (Prueba del Parche)',
    'procedural',
    'QEB2',
    'Gold-standard diagnostic procedure for identifying type IV delayed hypersensitivity contact allergens responsible for allergic contact dermatitis.',
    'Standardised panels of potential allergens (TRUE test: 36 allergens, or extended series: 80+ allergens) are applied to the upper back under occlusion. During the 48-hour application period, Langerhans cells process hapten-protein conjugates and present them to memory T-cells (in previously sensitised individuals). At reading, a positive reaction manifests as localised eczematous dermatitis at the allergen site, confirming specific sensitisation.',
    [
      'Indicated when allergic contact dermatitis is suspected: dermatitis in contact-pattern distribution, chronic/recurrent eczema unresponsive to treatment, occupational dermatitis',
      'TRUE Test (Thin-layer Rapid Use Epicutaneous Test): FDA-approved 36-allergen panel on pre-loaded strips',
      'Extended series (North American Contact Dermatitis Group or European baseline): 80+ allergens in Finn chambers or IQ Ultra chambers',
      'Supplemental allergen series available: cosmetics, metals, hairdressing, rubber, textiles',
    ],
    [
      'Pre-test requirements: off systemic corticosteroids/immunosuppressants for 1-2 weeks, off topical steroids on test site, no UV exposure to back',
      'Application day (Day 0): allergens applied to upper back; secured with hypoallergenic tape',
      'Day 2 (48 hours): remove patches; wait 30 minutes; perform first reading',
      'Day 4-7 (96-168 hours): delayed reading (critical -- up to 30% of reactions appear late)',
      'Grading: negative, irritant reaction (+/?), 1+ (erythema, papules), 2+ (erythema, papules, vesicles), 3+ (bullous reaction)',
    ],
    [
      'Allergen application technique: standardised concentrations in petrolatum or aqueous vehicle',
      'Proper reading: distinguish allergic reaction (crescendo pattern, extending beyond chamber) from irritant reaction (decrescendo, sharp border)',
      'Clinical relevance determination: correlate positive results with patient exposure history and dermatitis pattern',
      'Patient counselling: provide allergen avoidance handouts, Safe Products lists (ACDS CAMP database)',
      'Consider repeat open application test (ROAT) for equivocal results',
    ],
    [
      'False negatives: concurrent immunosuppression, insufficient occlusion, allergen not in panel',
      'False positives: irritant reactions mimicking allergy (angry back syndrome)',
      'Active sensitisation (extremely rare with standardised concentrations)',
      'Flare of existing dermatitis during test period',
      'Patient discomfort: pruritus, irritation from tape',
    ],
    'Patch testing is a specialised test used to find out what substances cause your skin allergy. Small amounts of common allergens are taped to your back for two days, then the skin is checked for reactions over the following days. This helps identify what to avoid so the rash can be prevented from coming back.',
  ),
};

// ---------------------------------------------------------------------------
// Utility Functions
// ---------------------------------------------------------------------------

/**
 * Search dermatology entries by keyword across name, description,
 * clinical features, and patient explanation fields.
 *
 * @param query - Case-insensitive search string
 * @returns Array of matching DermatologyEntry objects
 */
export function searchDermatologyEntries(query: string): DermatologyEntry[] {
  const normalised = query.toLowerCase().trim();
  if (!normalised) return [];

  return Object.values(DERMATOLOGY_ENTRIES).filter((e) => {
    const searchable = [
      e.name,
      e.nameEs,
      e.id,
      e.description,
      e.pathophysiology,
      e.patientExplanation,
      ...e.clinicalFeatures,
      ...e.diagnostics,
      ...e.treatment,
      ...e.complications,
    ]
      .join(' ')
      .toLowerCase();

    return normalised.split(/\s+/).every((token) => searchable.includes(token));
  });
}

/**
 * Filter dermatology entries by one or more categories.
 *
 * @param categories - Single category or array of categories to filter by
 * @returns Array of matching DermatologyEntry objects
 */
export function filterByDermCategory(
  categories: DermCategory | DermCategory[],
): DermatologyEntry[] {
  const categorySet = new Set(
    Array.isArray(categories) ? categories : [categories],
  );
  return Object.values(DERMATOLOGY_ENTRIES).filter((e) =>
    categorySet.has(e.category),
  );
}

/**
 * Get a single dermatology entry by its unique ID.
 *
 * @param id - The entry identifier (e.g. 'psoriasis-vulgaris')
 * @returns The matching entry or undefined
 */
export function getDermatologyEntry(id: string): DermatologyEntry | undefined {
  return DERMATOLOGY_ENTRIES[id];
}

/**
 * List all available category values with their entry counts.
 *
 * @returns Record mapping each DermCategory to its count of entries
 */
export function getDermCategoryCounts(): Record<DermCategory, number> {
  const counts: Record<DermCategory, number> = {
    inflammatory: 0,
    infectious: 0,
    neoplastic: 0,
    autoimmune: 0,
    pigmentary: 0,
    'hair-nail': 0,
    'pediatric-derm': 0,
    procedural: 0,
  };

  for (const entry of Object.values(DERMATOLOGY_ENTRIES)) {
    counts[entry.category]++;
  }

  return counts;
}

/**
 * Get all dermatology entry IDs as a sorted array.
 */
export function getAllDermatologyIds(): string[] {
  return Object.keys(DERMATOLOGY_ENTRIES).sort();
}
