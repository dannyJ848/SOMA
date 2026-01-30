/**
 * Dermatology Conditions Database
 *
 * Comprehensive reference of 30 skin conditions across 8 categories.
 * Educational content for patient guidance and clinical reference.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface DermConditionEntry {
  id: string;
  name: string;
  nameEs: string;
  category: 'inflammatory' | 'infectious' | 'autoimmune' | 'neoplastic' | 'pigmentary' | 'hair-nail' | 'vascular' | 'allergic';
  icd11: string;
  appearance: string;
  distribution: string;
  symptoms: string[];
  diagnosis: string;
  treatment: string;
  otcOptions: string;
  whenToSeeDoctor: string;
  prevention: string;
  patientTip: string;
}

// ---------------------------------------------------------------------------
// Helper
// ---------------------------------------------------------------------------

const derm = (
  id: string, name: string, nameEs: string,
  category: DermConditionEntry['category'], icd11: string,
  appearance: string, distribution: string, symptoms: string[],
  diagnosis: string, treatment: string, otcOptions: string,
  whenToSeeDoctor: string, prevention: string, patientTip: string,
): DermConditionEntry => ({ id, name, nameEs, category, icd11, appearance, distribution, symptoms, diagnosis, treatment, otcOptions, whenToSeeDoctor, prevention, patientTip });

// ---------------------------------------------------------------------------
// Database
// ---------------------------------------------------------------------------

export const DERM_CONDITIONS: Record<string, DermConditionEntry> = {

  // ── Inflammatory (6) ────────────────────────────────────────────────────

  'acne-vulgaris': derm(
    'acne-vulgaris', 'Acne Vulgaris', 'Acne vulgar', 'inflammatory', 'ED80',
    'Comedones (blackheads/whiteheads), papules, pustules, nodules, or cysts on oily skin',
    'Face, forehead, chest, upper back, shoulders',
    ['Pimples and blemishes', 'Oily skin', 'Painful nodules in severe cases', 'Post-inflammatory dark marks'],
    'Clinical examination; grading by lesion type and severity',
    'Topical retinoids + benzoyl peroxide first-line; oral antibiotics for moderate; isotretinoin for severe/scarring acne',
    'Benzoyl peroxide wash or gel, salicylic acid cleanser, adapalene 0.1% gel (Differin)',
    'Painful cysts, scarring, no improvement after 8 weeks of OTC treatment, or significant emotional distress',
    'Non-comedogenic products, gentle cleansing, avoid picking; low-glycemic diet may help',
    'Apply retinoids at night to the entire affected area, not just individual pimples. Expect mild irritation for the first 2-4 weeks.',
  ),

  'rosacea': derm(
    'rosacea', 'Rosacea', 'Rosácea', 'inflammatory', 'ED90.0',
    'Persistent facial redness, visible blood vessels, small red bumps/pustules; may include rhinophyma',
    'Central face: cheeks, nose, chin, forehead',
    ['Facial flushing and redness', 'Burning or stinging', 'Visible blood vessels', 'Eye irritation (ocular rosacea)'],
    'Clinical diagnosis based on pattern; no specific test; rule out lupus if uncertain',
    'Topical metronidazole, azelaic acid, or ivermectin; oral doxycycline for moderate; laser for telangiectasia',
    'Azelaic acid 15% gel, gentle mineral sunscreen SPF 30+, green-tinted primer to mask redness',
    'Eye involvement, progressive redness unresponsive to gentle care, or thickening of nose skin',
    'Identify and avoid triggers (sun, alcohol, spicy food, heat); daily sunscreen; gentle fragrance-free skincare',
    'Keep a trigger diary for two weeks. Most patients find 2-3 specific triggers they can avoid to reduce flares significantly.',
  ),

  'psoriasis': derm(
    'psoriasis', 'Psoriasis', 'Psoriasis', 'inflammatory', 'EA90',
    'Well-demarcated, salmon-pink plaques with silvery-white scales; Auspitz sign (pinpoint bleeding on scale removal)',
    'Elbows, knees, scalp, lower back, nails; can be widespread',
    ['Itching and burning', 'Thick silvery scales', 'Dry cracked skin that may bleed', 'Nail pitting or separation'],
    'Clinical appearance; skin biopsy if uncertain; check for psoriatic arthritis (joint pain/swelling)',
    'Topical corticosteroids and vitamin D analogs first-line; phototherapy; systemic biologics for moderate-severe',
    'Coal tar shampoo, salicylic acid shampoo, 1% hydrocortisone for mild patches, thick emollients',
    'Widespread plaques, joint pain or stiffness, failure of OTC treatments, or impact on daily activities',
    'Moisturize daily, avoid skin trauma (Koebner phenomenon), manage stress, limit alcohol',
    'Apply moisturizer within 3 minutes of bathing to lock in hydration. Thick ointments work better than lotions for plaques.',
  ),

  'seborrheic-dermatitis': derm(
    'seborrheic-dermatitis', 'Seborrheic Dermatitis', 'Dermatitis seborreica', 'inflammatory', 'ED10.0',
    'Greasy yellowish scales on an erythematous base; flaky patches (dandruff is the mild scalp form)',
    'Scalp, eyebrows, nasolabial folds, ears, central chest',
    ['Flaking and dandruff', 'Itching', 'Redness under scales', 'Waxing-waning course'],
    'Clinical diagnosis by distribution and appearance; consider HIV testing if severe/refractory in young adults',
    'Antifungal shampoos (ketoconazole), low-potency topical steroids for flares, calcineurin inhibitors for face',
    'Ketoconazole 1% shampoo, zinc pyrithione shampoo, selenium sulfide shampoo, 1% hydrocortisone cream',
    'Spreading beyond scalp, no response to OTC antifungal shampoos after 4 weeks, or severe facial involvement',
    'Regular use of antifungal shampoo 2-3x/week even when clear; manage stress; avoid harsh products',
    'Alternate between two different medicated shampoos to prevent the yeast from developing resistance to either one.',
  ),

  'perioral-dermatitis': derm(
    'perioral-dermatitis', 'Perioral Dermatitis', 'Dermatitis perioral', 'inflammatory', 'ED14',
    'Clusters of small red papules and pustules with fine scaling around the mouth; periorbital variant exists',
    'Around mouth (sparing vermilion border), nasolabial folds; may extend around nose and eyes',
    ['Burning or stinging', 'Mild itching', 'Skin tightness', 'Flares with topical steroids'],
    'Clinical pattern recognition; key clue is worsening with topical corticosteroids',
    'Discontinue all topical steroids (expect flare); topical metronidazole or pimecrolimus; oral tetracycline if needed',
    'Zero therapy approach (stop all products), gentle cleanser only, non-comedogenic moisturizer',
    'If rash appeared after using a steroid cream, or if it persists beyond 6 weeks of simplified skincare',
    'Avoid fluoridated toothpaste (try non-fluoride), topical steroids on face, and heavy face creams',
    'The rash often gets temporarily worse when you stop steroid cream. This rebound is expected and means you are on the right track.',
  ),

  'hidradenitis-suppurativa': derm(
    'hidradenitis-suppurativa', 'Hidradenitis Suppurativa', 'Hidradenitis supurativa', 'inflammatory', 'ED92',
    'Deep painful nodules, abscesses, draining sinus tracts, and scarring in skin folds',
    'Axillae (armpits), groin, under breasts, buttocks, inner thighs',
    ['Painful recurrent boils', 'Foul-smelling drainage', 'Sinus tracts connecting lesions', 'Progressive scarring'],
    'Clinical diagnosis (recurrent nodules/abscesses in typical locations at least twice in 6 months); Hurley staging',
    'Topical clindamycin for mild; oral antibiotics (doxycycline, clindamycin-rifampin); adalimumab biologic; surgery for severe',
    'Benzoyl peroxide wash, antiseptic washes (chlorhexidine), zinc supplements (anecdotal support)',
    'Any recurrent painful boils in skin folds; early treatment slows progression and prevents scarring',
    'Loose-fitting clothing, avoid shaving affected areas, weight management if applicable, smoking cessation',
    'This is not caused by poor hygiene. It is an inflammatory condition. Seeking treatment early can prevent tunneling and scarring.',
  ),

  // ── Infectious (6) ──────────────────────────────────────────────────────

  'cellulitis': derm(
    'cellulitis', 'Cellulitis', 'Celulitis', 'infectious', '1B70',
    'Expanding area of redness, warmth, swelling, and tenderness with poorly defined borders; no pus on surface',
    'Lower legs most common; face, arms, or any area with skin break',
    ['Spreading redness', 'Pain and tenderness', 'Warmth and swelling', 'Fever and chills in severe cases'],
    'Clinical diagnosis; blood cultures if systemic symptoms; ultrasound to rule out abscess; outline the border with marker to track spread',
    'Oral antibiotics (cephalexin or dicloxacillin) for uncomplicated; IV antibiotics if systemic signs; incision & drainage if abscess',
    'None for active cellulitis (requires prescription); wound care supplies for prevention of recurrence',
    'Immediately if spreading redness, fever, red streaks toward lymph nodes, or worsening despite treatment',
    'Promptly clean and cover all cuts/wounds; manage edema with compression; moisturize to prevent skin cracks; treat athletes foot',
    'Draw a line around the edge of the redness with a pen. If redness spreads beyond the line within hours, seek urgent medical care.',
  ),

  'herpes-simplex': derm(
    'herpes-simplex', 'Herpes Simplex', 'Herpes simple', 'infectious', '1F00',
    'Grouped vesicles on an erythematous base that crust over; prodromal tingling before outbreak',
    'HSV-1: lips and perioral area; HSV-2: genital region; either type can occur at either site',
    ['Tingling or burning prodrome', 'Painful clustered blisters', 'Crusting over 7-10 days', 'Recurrent episodes'],
    'Clinical appearance; Tzanck smear; PCR of vesicle fluid (gold standard); type-specific serology',
    'Oral antivirals (valacyclovir, acyclovir) shorten episodes; daily suppressive therapy reduces recurrences and transmission',
    'Docosanol 10% cream (Abreva) for cold sores, lip balm with SPF (sun is a trigger)',
    'First episode (for proper diagnosis), frequent recurrences (>6/year), eye involvement, or immunocompromised',
    'Avoid contact during active lesions, sunscreen on lips, stress management, adequate sleep',
    'Starting antiviral medication during the tingling prodrome (before blisters appear) can significantly reduce outbreak severity.',
  ),

  'herpes-zoster': derm(
    'herpes-zoster', 'Herpes Zoster (Shingles)', 'Herpes zóster (culebrilla)', 'infectious', '1E91',
    'Painful grouped vesicles on an erythematous base in a dermatomal distribution, not crossing midline',
    'Single dermatome (band-like); thoracic dermatomes most common; trigeminal nerve (face) is concerning',
    ['Severe burning/stabbing pain', 'Unilateral vesicular rash', 'Allodynia (pain from light touch)', 'Postherpetic neuralgia risk'],
    'Clinical pattern (dermatomal); PCR or DFA of vesicle fluid if uncertain; consider in any unilateral painful rash',
    'Oral antivirals (valacyclovir) within 72 hours of rash; pain management (gabapentin, lidocaine patches); Shingrix vaccine prevention',
    'Calamine lotion, cool compresses, OTC analgesics (acetaminophen, ibuprofen), capsaicin cream for post-herpetic pain',
    'Immediately at first sign (treatment within 72 hours is critical); always if face/eye involved or immunocompromised',
    'Shingrix vaccine (2 doses) for adults 50+; also recommended for immunocompromised adults 19+',
    'Shingles is reactivation of childhood chickenpox virus. The Shingrix vaccine reduces risk by over 90%. Ask your doctor at age 50.',
  ),

  'tinea': derm(
    'tinea', 'Tinea (Ringworm)', 'Tiña', 'infectious', '1F28',
    'Annular (ring-shaped) scaly plaque with raised active border and central clearing; may have pustules',
    'Body (corporis), feet (pedis/athletes foot), groin (cruris/jock itch), scalp (capitis), nails (unguium)',
    ['Itchy ring-shaped rash', 'Scaly border', 'Central clearing', 'Cracking between toes (tinea pedis)'],
    'KOH preparation showing hyphae; fungal culture; Woods lamp (some species fluoresce); clinical pattern',
    'Topical antifungals (terbinafine, clotrimazole) for skin; oral antifungals required for scalp and nails',
    'Clotrimazole 1% cream, terbinafine 1% cream, miconazole spray for feet, antifungal powder for prevention',
    'Scalp involvement (especially in children), no response to 2-4 weeks of topical treatment, or nail involvement',
    'Keep skin dry, avoid sharing towels/clothing, wear sandals in locker rooms, change socks daily, treat pets if infected',
    'Not a worm. Ringworm is a fungal infection. Apply topical antifungal cream 1-2 cm beyond the visible edge of the rash for best results.',
  ),

  'warts-hpv': derm(
    'warts-hpv', 'Warts (HPV)', 'Verrugas (VPH)', 'infectious', '1A95',
    'Flesh-colored rough papules with black pinpoint dots (thrombosed capillaries); various morphologies by type',
    'Common: hands/fingers; plantar: soles of feet; flat: face/legs; genital: anogenital area',
    ['Rough-textured bumps', 'Black dots in lesion', 'Pain with pressure (plantar)', 'Cosmetic concern'],
    'Clinical appearance; dermoscopy shows disrupted skin lines and dot vessels; biopsy rarely needed',
    'Cryotherapy, salicylic acid, cantharidin, immunotherapy (candida antigen injection); many resolve spontaneously',
    'Salicylic acid 17% liquid or 40% pads, freeze kits (dimethyl ether), duct tape occlusion method',
    'Genital warts (need proper evaluation), rapidly growing or changing lesions, painful plantar warts affecting walking',
    'HPV vaccination, avoid walking barefoot in communal areas, do not bite nails, cover existing warts',
    'Wart treatment requires patience. Soak the wart, file down dead skin, then apply salicylic acid nightly. Most respond within 12 weeks.',
  ),

  'molluscum-contagiosum': derm(
    'molluscum-contagiosum', 'Molluscum Contagiosum', 'Molusco contagioso', 'infectious', '1E80',
    'Dome-shaped, pearly flesh-colored papules 2-5mm with central umbilication (dimple); waxy surface',
    'Children: trunk, extremities, face; adults: genital area (sexually transmitted); widespread if immunocompromised',
    ['Painless bumps', 'Central dimple visible', 'Surrounding eczema (molluscum dermatitis)', 'Autoinoculation spread'],
    'Clinical appearance (central umbilication is key); dermoscopy; biopsy rarely needed',
    'Often self-resolving in 6-12 months; curettage, cryotherapy, cantharidin, or topical retinoids to speed resolution',
    'None highly effective OTC; some use tea tree oil; avoid picking (spreads virus)',
    'Genital lesions in adults, widespread lesions in immunocompromised, or persistent lesions causing distress',
    'Avoid sharing towels, do not scratch or pick lesions, cover lesions during contact sports',
    'In healthy children, these bumps almost always go away on their own. Treatment is optional and mainly to prevent spread or for cosmetic reasons.',
  ),

  // ── Autoimmune (4) ──────────────────────────────────────────────────────

  'vitiligo': derm(
    'vitiligo', 'Vitiligo', 'Vitiligo', 'autoimmune', 'ED63',
    'Well-defined, chalky-white depigmented macules and patches; enhanced under Woods lamp; hair may turn white',
    'Periorbital, perioral, hands, wrists, axillae, groin; often symmetric; segmental type follows dermatome',
    ['White patches on skin', 'Hair whitening in affected areas', 'Koebner phenomenon at trauma sites', 'Psychosocial impact'],
    'Clinical exam with Woods lamp; thyroid function tests (associated autoimmune thyroiditis); consider autoimmune panel',
    'Topical corticosteroids or calcineurin inhibitors; narrowband UVB phototherapy; JAK inhibitors (ruxolitinib cream); surgical grafting',
    'High-SPF sunscreen (depigmented skin burns easily), cosmetic camouflage creams, self-tanner for blending',
    'New or spreading white patches (early treatment is more effective), or for screening associated thyroid disease',
    'Sun protection of depigmented areas, avoid skin trauma; no proven dietary prevention',
    'Newer JAK inhibitor creams (ruxolitinib) have shown promising repigmentation. Early treatment of new patches yields the best results.',
  ),

  'alopecia-areata': derm(
    'alopecia-areata', 'Alopecia Areata', 'Alopecia areata', 'autoimmune', 'ED70.0',
    'Smooth, round, well-circumscribed patches of complete hair loss; exclamation-point hairs at margins',
    'Scalp most common; can affect beard, eyebrows, eyelashes; alopecia totalis (all scalp) or universalis (all body)',
    ['Sudden smooth bald patches', 'No scarring', 'Nail pitting (10-20%)', 'Emotional distress'],
    'Clinical pattern; pull test; dermoscopy shows exclamation-point hairs and yellow dots; biopsy if uncertain',
    'Intralesional corticosteroid injections; topical immunotherapy (DPCP); oral JAK inhibitors (baricitinib) for severe; minoxidil adjunct',
    'Minoxidil 5% solution or foam (supports regrowth), biotin supplements (limited evidence)',
    'Rapidly expanding patches, total scalp or body hair loss, or nail involvement',
    'No proven prevention; manage stress (possible trigger); screen for thyroid disease and other autoimmune conditions',
    'Hair regrowth is possible at any time, even after years. The hair follicle is preserved, not destroyed. New JAK inhibitor pills offer hope for extensive cases.',
  ),

  'pemphigus-vulgaris': derm(
    'pemphigus-vulgaris', 'Pemphigus Vulgaris', 'Pénfigo vulgar', 'autoimmune', 'EB40.0',
    'Flaccid blisters that rupture easily leaving painful erosions; positive Nikolsky sign (skin peels with lateral pressure)',
    'Oral mucosa (often first), scalp, face, trunk, skin folds; mucosal involvement is hallmark',
    ['Painful mouth erosions', 'Fragile blisters that break easily', 'Non-healing erosions', 'Difficulty eating'],
    'Skin biopsy with direct immunofluorescence (IgG intercellular); serum anti-desmoglein antibodies (ELISA)',
    'Systemic corticosteroids with steroid-sparing agents (rituximab now first-line, mycophenolate, azathioprine)',
    'None (requires prescription management); gentle oral rinses for mouth pain; soft diet',
    'Urgently if non-healing mouth sores or skin blisters that peel easily; this is a potentially life-threatening condition',
    'No known prevention; early diagnosis and treatment improve outcomes significantly',
    'This is a serious autoimmune condition but highly treatable. Rituximab has transformed outcomes. Adherence to immunosuppressive therapy is critical.',
  ),

  'dermatomyositis': derm(
    'dermatomyositis', 'Dermatomyositis', 'Dermatomiositis', 'autoimmune', 'EB41',
    'Heliotrope (violaceous) rash on eyelids; Gottron papules over knuckles; V-sign on chest; shawl sign',
    'Eyelids, knuckles (MCP/PIP joints), upper chest (V-sign), upper back (shawl sign), lateral thighs',
    ['Purple-red rash on eyelids', 'Muscle weakness (proximal)', 'Scaly papules over knuckles', 'Fatigue'],
    'Skin biopsy, muscle enzymes (CK, aldolase), myositis-specific antibodies (anti-Mi-2, anti-MDA5), EMG, MRI; cancer screening',
    'Systemic corticosteroids, steroid-sparing immunosuppressants (methotrexate, IVIG); age-appropriate cancer screening mandatory',
    'Sunscreen SPF 50+ (photosensitive condition), gentle skincare',
    'Any purple rash on eyelids with muscle weakness; associated with internal malignancy in adults and requires cancer screening',
    'Sun protection (condition is photosensitive); no other known prevention',
    'Adult-onset dermatomyositis requires thorough cancer screening, as it can be a paraneoplastic condition. Report any new symptoms to your doctor promptly.',
  ),

  // ── Neoplastic (4) ──────────────────────────────────────────────────────

  'basal-cell-carcinoma': derm(
    'basal-cell-carcinoma', 'Basal Cell Carcinoma', 'Carcinoma basocelular', 'neoplastic', '2C30',
    'Pearly or translucent papule with rolled borders and telangiectasia; may ulcerate centrally (rodent ulcer)',
    'Sun-exposed areas: face (especially nose), ears, neck, scalp; rarely metastasizes but locally destructive',
    ['Slowly growing pearly bump', 'Non-healing sore', 'Bleeding with minor trauma', 'Rolled translucent borders'],
    'Skin biopsy (shave or punch); dermoscopy shows arborizing vessels, leaf-like structures',
    'Surgical excision or Mohs micrographic surgery (face); electrodessication and curettage; topical imiquimod or 5-FU for superficial',
    'Broad-spectrum SPF 50+ sunscreen, sun-protective clothing, lip balm with SPF',
    'Any new pearly bump, non-healing sore, or sore that bleeds repeatedly; most curable when caught early',
    'Daily sunscreen, avoid tanning beds, sun-protective clothing and hats, regular skin checks',
    'BCC is the most common cancer worldwide but also one of the most treatable. It almost never spreads to other organs. Early removal is curative.',
  ),

  'squamous-cell-carcinoma': derm(
    'squamous-cell-carcinoma', 'Squamous Cell Carcinoma', 'Carcinoma epidermoide', 'neoplastic', '2C31',
    'Firm, red, scaly plaque or nodule; may ulcerate or develop a cutaneous horn; arises on sun-damaged skin',
    'Sun-exposed areas: face, ears, scalp, dorsal hands, lower lip; can develop in scars or chronic wounds',
    ['Firm scaly or crusted bump', 'Tender to touch', 'Rapid growth', 'Non-healing ulceration'],
    'Skin biopsy; assess for perineural invasion and depth; lymph node exam for high-risk lesions',
    'Surgical excision (standard or Mohs); radiation for non-surgical candidates; staging and sentinel node biopsy for high-risk',
    'SPF 50+ sunscreen, lip balm with SPF, self-examination supplies',
    'Any rapidly growing, firm, scaly bump, especially on sun-damaged skin; non-healing sore lasting over 3 weeks',
    'Sun protection, treat actinic keratoses (precursors), avoid tanning beds, regular dermatology checks if history of skin cancer',
    'Unlike BCC, SCC can occasionally spread. High-risk features include size >2cm, depth, location on lip/ear, and immunosuppression. Follow-up is important.',
  ),

  'melanoma': derm(
    'melanoma', 'Melanoma (ABCDE Warning Signs)', 'Melanoma (signos ABCDE)', 'neoplastic', '2C43',
    'Asymmetric pigmented lesion with irregular Borders, Color variation, Diameter >6mm, and Evolving over time (ABCDE)',
    'Any skin surface; back in men, legs in women most common; can arise in existing moles or de novo; check soles, nails, mucosa',
    ['Changing mole (size, shape, color)', 'New pigmented lesion in adult', 'Itching or bleeding mole', 'Ugly duckling sign (looks different from other moles)'],
    'Full-thickness excisional biopsy (never shave a suspected melanoma); Breslow depth staging; sentinel lymph node biopsy if >0.8mm',
    'Wide local excision with margins based on depth; sentinel node biopsy; immunotherapy (checkpoint inhibitors) and targeted therapy for advanced',
    'Monthly self-skin exams, broad-spectrum SPF 50+, body mole map photos for tracking changes',
    'Immediately for any ABCDE features, rapidly changing mole, or new dark streak under a nail; melanoma is curable when caught early',
    'Avoid sunburns (especially in childhood), daily sunscreen, avoid tanning beds, annual professional skin exams',
    'Take photos of your moles annually. The "ugly duckling" sign (a mole that looks different from all your others) is as important as ABCDE criteria.',
  ),

  'actinic-keratosis': derm(
    'actinic-keratosis', 'Actinic Keratosis', 'Queratosis actínica', 'neoplastic', 'EK90',
    'Rough, sandpaper-textured, scaly patch on sun-damaged skin; often felt before seen; flesh-colored to reddish-brown',
    'Sun-exposed areas: face, scalp (bald), ears, forearms, dorsal hands',
    ['Rough scaly patches', 'Gritty sandpaper texture', 'Intermittent tenderness', 'Slow growth over years'],
    'Clinical examination (felt more than seen); biopsy if thick, indurated, or not responding to treatment (rule out SCC)',
    'Cryotherapy (liquid nitrogen), topical 5-fluorouracil, imiquimod, ingenol mebutate; photodynamic therapy for field treatment',
    'SPF 50+ sunscreen (prevents new lesions), moisturizers with urea for rough texture',
    'Any rough persistent scaly patch on sun-exposed skin; thickening or rapid growth may indicate progression to SCC',
    'Rigorous sun protection, wide-brimmed hats, regular skin checks; treating AKs prevents potential progression to SCC',
    'Actinic keratoses are precancerous. About 5-10% may progress to squamous cell carcinoma if untreated. Treatment is straightforward and highly effective.',
  ),

  // ── Pigmentary (3) ──────────────────────────────────────────────────────

  'melasma': derm(
    'melasma', 'Melasma', 'Melasma (cloasma)', 'pigmentary', 'ED60',
    'Symmetric brown to gray-brown patches with irregular borders; three patterns: centrofacial, malar, mandibular',
    'Forehead, cheeks, upper lip, chin, nose (centrofacial most common); more apparent in Fitzpatrick III-V',
    ['Brown facial patches', 'Symmetric distribution', 'Darkens with sun exposure', 'Worsens during pregnancy or with hormonal changes'],
    'Clinical appearance and Woods lamp (epidermal vs dermal); rule out post-inflammatory hyperpigmentation',
    'Strict sun protection (critical); topical triple combination (hydroquinone, tretinoin, corticosteroid); tranexamic acid; chemical peels',
    'SPF 50+ broad-spectrum sunscreen (tinted with iron oxide blocks visible light), vitamin C serum, azelaic acid 10%',
    'If patches are darkening despite sun protection, or for prescription-strength treatments to accelerate fading',
    'Daily broad-spectrum sunscreen including visible light protection, wide-brimmed hat, avoid hormonal triggers if possible',
    'Sunscreen is the single most important treatment. Tinted sunscreens with iron oxide protect against visible light, a key melasma trigger that standard sunscreens miss.',
  ),

  'post-inflammatory-hyperpigmentation': derm(
    'post-inflammatory-hyperpigmentation', 'Post-Inflammatory Hyperpigmentation', 'Hiperpigmentación postinflamatoria', 'pigmentary', 'ED61',
    'Flat darkened macules or patches at sites of prior inflammation or injury; color ranges from brown to blue-gray',
    'Anywhere prior inflammation occurred; face (acne), legs (insect bites), any injury site; more pronounced in darker skin',
    ['Dark spots after skin injury', 'Flat discoloration (not raised)', 'Slow to fade', 'Cosmetic concern'],
    'Clinical history of prior inflammation at same site; Woods lamp differentiates epidermal (enhanced) from dermal (unchanged)',
    'Sun protection (essential); topical hydroquinone, retinoids, azelaic acid, vitamin C; chemical peels; patience (months to years)',
    'Vitamin C serum, niacinamide 5% serum, azelaic acid 10%, broad-spectrum SPF 50+, alpha-arbutin',
    'If spots are worsening, new spots without clear cause, or if treating the underlying condition (e.g., acne) needs attention',
    'Treat the underlying inflammation promptly, strict sun protection, avoid picking or scratching skin lesions',
    'PIH fades with time, but sun exposure resets the clock. Consistent SPF use is the most important step. Niacinamide and vitamin C are gentle, effective lightening agents.',
  ),

  'solar-lentigines': derm(
    'solar-lentigines', 'Age Spots (Solar Lentigines)', 'Manchas de la edad (léntigos solares)', 'pigmentary', 'ED62',
    'Uniformly tan to dark brown, well-circumscribed flat macules with sharp borders; homogeneous color throughout',
    'Sun-exposed areas: face, dorsal hands, shoulders, upper back, forearms',
    ['Flat brown spots', 'Uniform color', 'Painless', 'Slowly increase in number with age'],
    'Clinical exam; dermoscopy shows regular pattern; biopsy if irregular color/border to rule out lentigo maligna melanoma',
    'Cryotherapy, laser (Q-switched, IPL), topical retinoids, chemical peels; mainly cosmetic treatment',
    'Broad-spectrum SPF 50+, vitamin C serum, retinol cream, alpha-hydroxy acid products',
    'If any spot develops irregular borders, multiple colors, or changes rapidly (rule out melanoma/lentigo maligna)',
    'Lifelong sun protection, wide-brimmed hats, avoid peak UV hours; sun damage is cumulative',
    'Age spots are harmless signs of sun exposure. However, have a dermatologist check any new dark spot to distinguish from lentigo maligna melanoma.',
  ),

  // ── Hair/Nail (3) ──────────────────────────────────────────────────────

  'androgenetic-alopecia': derm(
    'androgenetic-alopecia', 'Androgenetic Alopecia', 'Alopecia androgénica', 'hair-nail', 'ED70.1',
    'Progressive miniaturization of hair follicles; men: bitemporal recession and vertex thinning; women: diffuse thinning with preserved frontal hairline',
    'Men: temples and crown (Hamilton-Norwood pattern); women: diffuse top of scalp (Ludwig pattern)',
    ['Gradual hair thinning', 'Widening part line (women)', 'Receding hairline (men)', 'Visible scalp through hair'],
    'Clinical pattern; pull test; dermoscopy shows hair diameter variability; labs (ferritin, thyroid, hormones) to exclude other causes',
    'Minoxidil (topical or oral low-dose); finasteride or dutasteride (men; women off-label); spironolactone (women); hair transplant surgery',
    'Minoxidil 5% foam or solution (applied daily), biotin supplements, volumizing shampoos, scalp massage',
    'Rapid or patchy hair loss (may not be androgenetic), female pattern hair loss (rule out hormonal causes), or desire for prescription treatment',
    'No true prevention for genetic hair loss; early treatment with minoxidil slows progression; manage modifiable factors',
    'Minoxidil works best when started early. Expect initial increased shedding for 2-8 weeks (a positive sign). Results take 4-6 months. It must be continued indefinitely.',
  ),

  'onychomycosis': derm(
    'onychomycosis', 'Onychomycosis (Nail Fungus)', 'Onicomicosis (hongo de uñas)', 'hair-nail', '1F2D',
    'Thickened, discolored (yellow-white), brittle, crumbly nail with subungual debris; distal and lateral subungual type most common',
    'Toenails (especially great toe) far more common than fingernails; associated with tinea pedis',
    ['Thickened nails', 'Yellow or white discoloration', 'Nail crumbling or brittleness', 'Separation from nail bed'],
    'KOH prep, fungal culture, or PAS stain of nail clipping (confirm before systemic treatment); not all dystrophic nails are fungal',
    'Oral terbinafine (first-line, 12 weeks for toenails); oral itraconazole; topical efinaconazole or ciclopirox for mild cases',
    'Ciclopirox 8% nail lacquer, Vicks VapoRub (limited evidence), tea tree oil, nail files to debulk',
    'If nails are painful, ingrown, or you have diabetes or immunosuppression; oral medication is much more effective than topical',
    'Keep feet dry, wear moisture-wicking socks, alternate shoes, treat athletes foot promptly, disinfect nail tools',
    'Oral terbinafine is far more effective than topical treatments for toenails. Even after successful treatment, the nail takes 9-12 months to grow out completely.',
  ),

  'ingrown-toenail': derm(
    'ingrown-toenail', 'Ingrown Toenail', 'Uña encarnada', 'hair-nail', 'FB40',
    'Nail edge growing into lateral nail fold causing erythema, swelling, and tenderness; may develop granulation tissue',
    'Great toe most common; lateral nail fold; can occur on any toe',
    ['Pain along nail edge', 'Redness and swelling', 'Drainage or pus if infected', 'Difficulty wearing shoes'],
    'Clinical examination; assess for infection (purulent drainage, granulation tissue); consider X-ray if recurrent (subungual exostosis)',
    'Conservative: cotton wedge, taping, warm soaks; partial nail avulsion with phenol matrixectomy for recurrent cases',
    'Warm Epsom salt soaks, cotton or dental floss under nail edge, antibiotic ointment, protective toe bandages',
    'Signs of infection (pus, increasing redness), diabetes, peripheral vascular disease, or recurrent ingrown nails',
    'Cut nails straight across (not curved), proper-fitting shoes, avoid tight socks, do not tear nails',
    'Cut toenails straight across, not rounded at corners. Soak the foot in warm water for 15 minutes and gently lift the nail edge with dental floss to redirect growth.',
  ),

  // ── Vascular (2) ────────────────────────────────────────────────────────

  'spider-veins': derm(
    'spider-veins', 'Spider Veins / Telangiectasia', 'Arañas vasculares / Telangiectasias', 'vascular', 'ED80.1',
    'Fine red, blue, or purple thread-like vessels visible through skin surface; may form web or star pattern',
    'Legs (especially thighs and calves), face (nose, cheeks); associated with venous insufficiency on legs',
    ['Visible fine vessels', 'Occasional mild aching or burning in legs', 'Cosmetic concern', 'Worsening over time'],
    'Clinical examination; duplex ultrasound if concern for underlying venous insufficiency; rule out rosacea on face',
    'Sclerotherapy (legs, gold standard), laser therapy (face and small leg veins), VPL/IPL; compression stockings as adjunct',
    'Compression stockings (15-20 mmHg), leg elevation, horse chestnut extract (limited evidence)',
    'If associated with leg swelling, pain, or skin changes suggesting venous insufficiency; cosmetic treatment is elective',
    'Regular exercise, maintain healthy weight, avoid prolonged standing, elevate legs, compression stockings for at-risk individuals',
    'Spider veins are usually cosmetic but can indicate underlying venous insufficiency. Sclerotherapy is the most effective treatment for leg spider veins.',
  ),

  'cherry-angioma': derm(
    'cherry-angioma', 'Cherry Angioma', 'Angioma cereza', 'vascular', '2F21',
    'Bright red to violaceous, dome-shaped, well-circumscribed papule 1-5mm; blanches partially with pressure; smooth surface',
    'Trunk most common; can appear anywhere; increase in number with age',
    ['Small bright red bumps', 'Painless', 'May bleed if traumatized', 'Cosmetic concern only'],
    'Clinical appearance; dermoscopy shows red-blue lacunae; biopsy only if atypical (darkly pigmented or bleeding frequently)',
    'Electrodesiccation, laser (pulsed dye or KTP), shave excision; treatment is purely cosmetic',
    'No treatment needed; adhesive bandage if traumatized and bleeding',
    'Only if a lesion changes color rapidly, bleeds repeatedly, or looks different from other cherry angiomas (rule out amelanotic melanoma)',
    'No known prevention; they are benign and increase naturally with age',
    'Cherry angiomas are completely harmless and extremely common after age 30. Treatment is only needed if they bother you cosmetically or bleed from trauma.',
  ),

  // ── Allergic (2) ────────────────────────────────────────────────────────

  'contact-dermatitis': derm(
    'contact-dermatitis', 'Contact Dermatitis', 'Dermatitis de contacto', 'allergic', 'EK00',
    'Erythematous, vesicular, or scaly rash in shape/pattern matching the contactant; weeping in acute, lichenified in chronic',
    'Distribution matches exposure: hands (occupational), wrist (watch), earlobes (jewelry), linear streaks (poison ivy)',
    ['Intense itching', 'Redness in pattern of contact', 'Blisters and weeping (acute)', 'Dry cracked skin (chronic)'],
    'History of exposure; patch distribution pattern; patch testing (gold standard for identifying allergen); irritant vs allergic distinction',
    'Remove the allergen/irritant; topical corticosteroids; oral prednisone taper for severe; emollients; patch testing for identification',
    'Hydrocortisone 1% cream, calamine lotion, colloidal oatmeal baths, cool compresses, barrier creams',
    'Widespread or facial rash, eyelid swelling, blistering, not improving after 2 weeks, or recurrent episodes needing allergen identification',
    'Identify and avoid trigger substances, wear protective gloves, use barrier creams, choose hypoallergenic products',
    'The rash pattern tells the story. Linear streaks suggest plant contact (poison ivy). Ring-shaped rash under jewelry suggests nickel allergy. Patch testing can identify the exact trigger.',
  ),

  'urticaria': derm(
    'urticaria', 'Urticaria (Hives)', 'Urticaria (ronchas)', 'allergic', 'EB05',
    'Erythematous, raised, well-circumscribed wheals (hives) that are transient; individual lesions last <24 hours; dermatographism',
    'Any body surface; may migrate; acute (<6 weeks) vs chronic (>6 weeks); angioedema may accompany (lips, eyelids)',
    ['Itchy raised welts', 'Wheals that come and go', 'Worsening with heat, stress, or pressure', 'Possible lip/eye swelling (angioedema)'],
    'Clinical diagnosis; acute: identify trigger (food, medication, infection); chronic: usually idiopathic; check CBC, ESR, thyroid; biopsy if fixed >24h',
    'Second-generation antihistamines first-line (cetirizine, loratadine); up-dose x4 if needed; omalizumab for refractory chronic urticaria',
    'Cetirizine 10mg, loratadine 10mg, fexofenadine 180mg (non-drowsy antihistamines), cool compresses',
    'Throat tightness or difficulty breathing (anaphylaxis - call 911), chronic hives lasting >6 weeks, or hives with fever',
    'Identify triggers (keep a diary), avoid known allergens, manage stress, avoid tight clothing and overheating',
    'For chronic hives, take a daily non-drowsy antihistamine (cetirizine or fexofenadine) consistently, not just during flares. Up to 4x the standard dose may be used under medical guidance.',
  ),
};

// ---------------------------------------------------------------------------
// Utility Functions
// ---------------------------------------------------------------------------

/** Look up a single condition by ID */
export function getDermCondition(id: string): DermConditionEntry | undefined {
  return DERM_CONDITIONS[id];
}

/** Search conditions by keyword across name, appearance, symptoms, and treatment fields */
export function searchDermConditions(query: string): DermConditionEntry[] {
  const q = query.toLowerCase();
  return Object.values(DERM_CONDITIONS).filter(c =>
    c.name.toLowerCase().includes(q) ||
    c.nameEs.toLowerCase().includes(q) ||
    c.appearance.toLowerCase().includes(q) ||
    c.symptoms.some(s => s.toLowerCase().includes(q)) ||
    c.treatment.toLowerCase().includes(q) ||
    c.distribution.toLowerCase().includes(q),
  );
}

/** Get all conditions for a given category */
export function getDermByCategory(category: DermConditionEntry['category']): DermConditionEntry[] {
  return Object.values(DERM_CONDITIONS).filter(c => c.category === category);
}

/** Return total number of conditions in the database */
export function getDermConditionCount(): number {
  return Object.keys(DERM_CONDITIONS).length;
}
