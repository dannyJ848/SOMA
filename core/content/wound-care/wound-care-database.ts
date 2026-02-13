/**
 * Wound Care Database
 *
 * Comprehensive reference database for wound care education covering
 * acute wounds, chronic wounds, surgical wounds, burns, bites,
 * suturing techniques, dressings, infection management, and special wounds.
 *
 * IMPORTANT: This content is for educational purposes only and does not
 * constitute medical advice.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type WoundCareCategory =
  | 'acute-wound'
  | 'chronic-wound'
  | 'surgical-wound'
  | 'burn'
  | 'bite'
  | 'suturing'
  | 'dressing'
  | 'infection'
  | 'special-wound';

export interface WoundCareEntry {
  id: string;
  name: string;
  category: WoundCareCategory;
  description: string;
  assessment: string[];
  classification: string[];
  management: string[];
  materials: string[];
  complications: string[];
  keyPearls: string[];
  references: string[];
}

// ---------------------------------------------------------------------------
// Database Entries
// ---------------------------------------------------------------------------

export const woundCareDatabase: WoundCareEntry[] = [
  // =========================================================================
  // ACUTE WOUNDS
  // =========================================================================
  {
    id: 'laceration',
    name: 'Laceration',
    category: 'acute-wound',
    description:
      'An irregular tear or cut in the skin caused by blunt or sharp trauma. Lacerations may involve skin, subcutaneous tissue, muscle, or deeper structures.',
    assessment: [
      'Determine mechanism of injury (sharp vs blunt force)',
      'Assess wound depth, length, and involvement of deeper structures',
      'Evaluate neurovascular status distal to wound',
      'Test tendon function across the wound',
      'Check for foreign bodies (consider imaging if suspected)',
      'Document time of injury for closure window (generally <6-8 hours for primary closure, <24 hours on face)',
    ],
    classification: [
      'Clean/sharp: well-defined edges from sharp object',
      'Jagged/irregular: ragged edges from blunt trauma',
      'Stellate: star-shaped from crushing force',
      'Superficial: epidermis and superficial dermis only',
      'Deep: extending into subcutaneous tissue, fascia, or muscle',
    ],
    management: [
      'Irrigate copiously with normal saline or tap water (minimum 250 mL per cm of wound length)',
      'Debride devitalized or contaminated tissue',
      'Achieve hemostasis with direct pressure, cautery, or ligation',
      'Repair deep structures (tendon, nerve) before skin closure',
      'Close with appropriate technique based on wound characteristics',
      'Apply sterile dressing; reassess in 24-48 hours',
      'Update tetanus prophylaxis as indicated',
    ],
    materials: [
      'Irrigation syringe (30-60 mL) with splash guard',
      'Normal saline or sterile water',
      'Local anesthetic (lidocaine 1% with or without epinephrine)',
      'Suture material (nylon, absorbable as indicated)',
      'Tissue adhesive or wound closure strips as alternatives',
      'Sterile drapes, gauze, and non-adherent dressings',
    ],
    complications: [
      'Wound infection (2-5% of clean lacerations)',
      'Dehiscence',
      'Hematoma or seroma formation',
      'Nerve or tendon injury (missed on initial exam)',
      'Foreign body retention',
      'Hypertrophic scarring or keloid formation',
    ],
    keyPearls: [
      'High-pressure irrigation (5-8 PSI) dramatically reduces infection rates',
      'Epinephrine-containing anesthetics are safe on digits (digital blocks preferred)',
      'Facial lacerations can be closed up to 24 hours due to rich vascular supply',
      'Scalp lacerations may cause significant hemorrhage; consider hair apposition technique',
      'Always document a thorough neurovascular and tendon exam before anesthesia',
    ],
    references: [
      'Tintinalli Emergency Medicine, 9th Ed - Ch 44: Wound Management',
      'Roberts & Hedges Emergency Medicine Procedures, 7th Ed',
      'Hollander JE, et al. Acad Emerg Med. 1998;5(11):1065-1070',
    ],
  },
  {
    id: 'abrasion',
    name: 'Abrasion',
    category: 'acute-wound',
    description:
      'Superficial wound caused by friction or scraping that removes the epidermis and may extend into the dermis. Common in falls, road rash, and sports injuries.',
    assessment: [
      'Determine mechanism (fall, road rash, friction)',
      'Assess depth: superficial (epidermis) vs deep (into dermis)',
      'Evaluate for embedded foreign material (gravel, glass, dirt)',
      'Document total body surface area involved for extensive abrasions',
      'Check tetanus immunization status',
    ],
    classification: [
      'First degree: epidermis only, minimal bleeding',
      'Second degree: into papillary dermis, pinpoint bleeding',
      'Third degree: into reticular dermis, significant bleeding',
      'Brush burn: friction-induced thermal component',
      'Road rash: high-energy abrasion with embedded debris',
    ],
    management: [
      'Irrigate thoroughly to remove all debris and particulate matter',
      'Scrub with fine-pore sponge under local or regional anesthesia if needed',
      'Apply topical antibiotic (bacitracin or mupirocin)',
      'Cover with non-adherent dressing (petrolatum gauze or semi-occlusive film)',
      'Change dressings daily or as needed; keep wound moist',
      'Traumatic tattooing from retained debris requires early aggressive debridement',
    ],
    materials: [
      'Fine-pore surgical sponge or soft brush',
      'Normal saline for irrigation',
      'Topical anesthetic (lidocaine 4% or LET gel)',
      'Topical antibiotic ointment',
      'Non-adherent dressings (Adaptic, Xeroform, or transparent film)',
    ],
    complications: [
      'Traumatic tattooing from retained foreign material',
      'Wound infection',
      'Delayed healing in deep abrasions',
      'Hyperpigmentation or hypopigmentation',
      'Contact dermatitis from topical agents',
    ],
    keyPearls: [
      'Traumatic tattooing is permanent if debris is not removed within 24-72 hours',
      'Moist wound healing accelerates epithelialization by 30-50%',
      'Road rash involving the face requires meticulous scrubbing to prevent cosmetic tattooing',
      'Deep abrasions over joints may need splinting to prevent wound disruption',
      'Avoid hydrogen peroxide and povidone-iodine directly in wounds (cytotoxic to fibroblasts)',
    ],
    references: [
      'Roberts & Hedges Emergency Medicine Procedures, 7th Ed',
      'Singer AJ, et al. N Engl J Med. 2008;359:1037-1046',
    ],
  },
  {
    id: 'puncture-wound',
    name: 'Puncture Wound',
    category: 'acute-wound',
    description:
      'Wound caused by a sharp pointed object penetrating the skin, creating a small entry with potentially deep tissue involvement. High risk for retained foreign bodies and deep infection.',
    assessment: [
      'Identify penetrating object (nail, needle, tooth, wood, glass)',
      'Determine depth of penetration and trajectory',
      'Evaluate for foreign body retention (plain radiograph for radiopaque; ultrasound or MRI for radiolucent)',
      'Assess for joint, bone, or vascular involvement',
      'Determine footwear status for plantar punctures',
      'Document time since injury',
    ],
    classification: [
      'Superficial: skin and subcutaneous tissue only',
      'Deep: penetrating fascia, muscle, joint, or bone',
      'Clean: sterile or low-contamination object',
      'Contaminated: soil, organic material, or through footwear',
      'Plantar: through sole of foot (high risk for Pseudomonas)',
    ],
    management: [
      'Do NOT close puncture wounds primarily',
      'Irrigate wound opening; coring technique for plantar wounds (excise small ellipse around wound tract)',
      'Remove foreign bodies when accessible',
      'Fluoroquinolone prophylaxis for plantar punctures through footwear (Pseudomonas coverage)',
      'Update tetanus prophylaxis',
      'Instruct patient on signs of infection; close follow-up in 48-72 hours',
    ],
    materials: [
      'High-pressure irrigation setup',
      'Imaging: plain radiographs, bedside ultrasound',
      'Surgical instruments for foreign body removal',
      'Loose gauze packing if deep',
    ],
    complications: [
      'Deep soft tissue infection or abscess',
      'Septic arthritis if joint penetrated',
      'Osteomyelitis (especially plantar puncture through shoe - Pseudomonas aeruginosa)',
      'Retained foreign body with chronic infection',
      'Cellulitis',
      'Tetanus',
    ],
    keyPearls: [
      'Plantar punctures through sneakers carry high risk for Pseudomonas osteomyelitis',
      'Never primarily close puncture wounds',
      'Bedside ultrasound is highly sensitive for detecting radiolucent foreign bodies',
      'Wooden foreign bodies are not visible on plain radiograph; use ultrasound or MRI',
      'Consider prophylactic antibiotics for immunocompromised patients',
    ],
    references: [
      'Tintinalli Emergency Medicine, 9th Ed - Ch 44',
      'Patzakis MJ, et al. Clin Orthop Relat Res. 1989;(243):36-40',
    ],
  },
  {
    id: 'avulsion',
    name: 'Avulsion',
    category: 'acute-wound',
    description:
      'Traumatic injury in which a portion of skin and subcutaneous tissue is partially or completely torn away from the underlying structures. Ranges from small flap tears to large tissue loss.',
    assessment: [
      'Assess flap viability: color, capillary refill, bleeding from edges',
      'Determine if avulsion is partial (hinged flap) or complete (full separation)',
      'Evaluate blood supply direction relative to flap base',
      'Assess for exposed bone, tendon, or cartilage',
      'Document size and location of tissue defect',
    ],
    classification: [
      'Partial avulsion: tissue flap still attached at base',
      'Complete avulsion: tissue fully separated',
      'Simple avulsion: skin and subcutaneous tissue only',
      'Complex avulsion: involving muscle, tendon, bone, or neurovascular structures',
      'Fingertip avulsion: classified by Allen classification (Types I-IV)',
    ],
    management: [
      'Preserve avulsed tissue (wrap in saline-moistened gauze, place in plastic bag on ice)',
      'Irrigate wound bed thoroughly',
      'Viable partial avulsions: reapproximate flap with minimal tension sutures',
      'Non-viable flaps: debride, apply wound care for secondary intention healing',
      'Complete avulsions may require composite graft, skin graft, or flap reconstruction',
      'Fingertip avulsions <1 cm: conservative management with semi-occlusive dressings',
    ],
    materials: [
      'Saline-moistened gauze for tissue preservation',
      'Irrigation supplies',
      'Suture material (use sparingly to avoid flap ischemia)',
      'Non-adherent dressings, foam dressings',
      'Negative pressure wound therapy for large defects',
    ],
    complications: [
      'Flap necrosis from compromised blood supply',
      'Wound infection',
      'Significant tissue loss requiring reconstructive surgery',
      'Contracture during healing',
      'Chronic pain or neuroma formation',
    ],
    keyPearls: [
      'Flaps with proximal base (toward heart) have better blood supply than distal-based flaps',
      'Avoid excessive sutures in flap edges; they can further compromise blood supply',
      'Fingertip avulsions in children often regenerate remarkably well with conservative care',
      'Negative pressure wound therapy can salvage marginal flaps',
      'Always save avulsed tissue, even if non-viable, as it can serve as a biological dressing',
    ],
    references: [
      'Tintinalli Emergency Medicine, 9th Ed - Wound Management',
      'Strauch B, Vasconez L. Grabb\'s Encyclopedia of Flaps, 3rd Ed',
    ],
  },

  // =========================================================================
  // CHRONIC WOUNDS
  // =========================================================================
  {
    id: 'pressure-ulcer',
    name: 'Pressure Ulcer (Decubitus Ulcer)',
    category: 'chronic-wound',
    description:
      'Localized damage to the skin and/or underlying tissue, usually over a bony prominence, resulting from sustained pressure or pressure in combination with shear. Previously called bedsores or pressure sores.',
    assessment: [
      'Identify location relative to bony prominences (sacrum, heels, ischium, trochanters)',
      'Measure wound dimensions: length, width, depth',
      'Assess wound bed: granulation, slough, eschar, exposed structures',
      'Evaluate undermining and tunneling (document clock position and depth)',
      'Assess periwound skin condition',
      'Evaluate patient nutritional status (albumin, prealbumin)',
      'Perform Braden Scale assessment for risk stratification',
    ],
    classification: [
      'Stage 1: Non-blanchable erythema of intact skin',
      'Stage 2: Partial-thickness loss with exposed dermis; may present as intact or ruptured serum-filled blister',
      'Stage 3: Full-thickness skin loss; subcutaneous fat may be visible; bone/tendon/muscle NOT exposed',
      'Stage 4: Full-thickness tissue loss with exposed bone, tendon, or muscle',
      'Unstageable: Full-thickness loss with base obscured by slough or eschar',
      'Deep Tissue Injury (DTI): Persistent non-blanchable deep red, maroon, or purple discoloration',
    ],
    management: [
      'Pressure redistribution: reposition every 2 hours, use pressure-redistributing surfaces',
      'Stage 1-2: moisture barrier cream, thin foam or hydrocolloid dressings',
      'Stage 3-4: wound bed preparation, debridement of necrotic tissue, appropriate moisture-retentive dressings',
      'Optimize nutrition: protein 1.25-1.5 g/kg/day, vitamin C, zinc supplementation',
      'Manage moisture (incontinence containment), friction, and shear',
      'Consider negative pressure wound therapy for Stage 3-4',
      'Surgical consultation for Stage 4 or non-healing wounds (flap reconstruction)',
    ],
    materials: [
      'Pressure-redistributing mattress or overlay',
      'Hydrocolloid dressings (Stage 1-2)',
      'Foam dressings, alginate dressings (Stage 3-4 with exudate)',
      'Enzymatic or autolytic debriding agents',
      'Negative pressure wound therapy devices',
      'Nutritional supplements (protein, vitamin C, zinc)',
    ],
    complications: [
      'Wound infection and sepsis',
      'Osteomyelitis of underlying bone',
      'Protein-calorie malnutrition',
      'Bacteremia',
      'Amyloidosis (chronic wounds)',
      'Marjolin ulcer (squamous cell carcinoma in chronic wounds - rare)',
    ],
    keyPearls: [
      'Braden Score <=18 indicates increased risk; <=12 is high risk',
      'Heel pressure ulcers are the second most common site; use heel suspension devices',
      'Stable, dry eschar on heels should NOT be debrided (acts as biological cover)',
      'Never stage a pressure ulcer in reverse (a healed Stage 4 does not become Stage 3)',
      'Adequate nutrition is essential; healing is impaired with albumin <3.0 g/dL',
      'Shear force is as damaging as direct pressure',
    ],
    references: [
      'NPUAP/EPUAP/PPPIA International Pressure Ulcer Guidelines, 2019',
      'Berlowitz D. UpToDate: Prevention of pressure-induced skin and soft tissue injury',
      'Braden BJ, Bergstrom N. Nurs Res. 1987;36(4):205-210',
    ],
  },
  {
    id: 'diabetic-foot-ulcer',
    name: 'Diabetic Foot Ulcer',
    category: 'chronic-wound',
    description:
      'Open wound on the foot of a patient with diabetes mellitus, typically resulting from a combination of peripheral neuropathy, peripheral vascular disease, and mechanical stress. Lifetime risk is 15-25% in diabetic patients.',
    assessment: [
      'Perform comprehensive foot exam: sensation (monofilament 5.07/10g), pulses, deformities',
      'Probe wound with sterile instrument (probe-to-bone test for osteomyelitis)',
      'Assess wound depth, presence of sinus tracts',
      'Obtain ABI (ankle-brachial index) to assess perfusion',
      'Order plain radiographs to evaluate for osteomyelitis, gas, foreign body',
      'Check HbA1c, glucose, inflammatory markers (ESR, CRP)',
      'Use Wagner or University of Texas classification',
    ],
    classification: [
      'Wagner Grade 0: At-risk foot, no open lesion',
      'Wagner Grade 1: Superficial ulcer (partial or full thickness)',
      'Wagner Grade 2: Deep ulcer to tendon, capsule, or bone (no abscess/osteomyelitis)',
      'Wagner Grade 3: Deep ulcer with abscess, osteomyelitis, or joint sepsis',
      'Wagner Grade 4: Localized gangrene (forefoot or heel)',
      'Wagner Grade 5: Extensive gangrene requiring foot-level amputation',
    ],
    management: [
      'Offload the wound: total contact cast, removable cast walker, therapeutic footwear',
      'Sharp debridement of callus and necrotic tissue',
      'Moist wound healing with appropriate dressings',
      'Vascular assessment and revascularization if ABI <0.5 or toe pressure <30 mmHg',
      'Glycemic optimization (HbA1c goal <7% if tolerated)',
      'Infection management: culture-directed antibiotics, surgical drainage if abscess',
      'Consider advanced therapies: growth factors, skin substitutes, hyperbaric oxygen',
    ],
    materials: [
      'Total contact cast or offloading device',
      'Monofilament for sensory testing',
      'Wound measurement tools',
      'Foam, alginate, or collagen dressings',
      'Debridement instruments',
    ],
    complications: [
      'Osteomyelitis (present in 20-60% of infected diabetic foot ulcers)',
      'Charcot neuroarthropathy',
      'Gangrene requiring amputation',
      'Sepsis',
      'Contralateral limb ulceration',
      'Recurrence (40% within 1 year, 65% within 5 years)',
    ],
    keyPearls: [
      'Positive probe-to-bone test has 89% positive predictive value for osteomyelitis',
      'Total contact casting is the gold standard for offloading; reduces healing time by 50%',
      'Neuropathy is the primary risk factor; patients may not feel the ulcer',
      'ESR >70 mm/hr with a foot ulcer is highly suggestive of osteomyelitis',
      'Multidisciplinary team approach reduces amputation rates by 50-85%',
    ],
    references: [
      'International Working Group on the Diabetic Foot (IWGDF) Guidelines, 2023',
      'Wagner FW. Foot Ankle. 1981;1(5):277-283',
      'Lavery LA, et al. Diabetes Care. 2006;29(6):1288-1293',
    ],
  },
  {
    id: 'venous-stasis-ulcer',
    name: 'Venous Stasis Ulcer',
    category: 'chronic-wound',
    description:
      'Chronic wound resulting from venous hypertension and incompetent venous valves, most commonly located on the medial lower leg (gaiter area). Accounts for approximately 70% of all leg ulcers.',
    assessment: [
      'Locate ulcer: classically medial malleolar region (gaiter area)',
      'Assess for signs of chronic venous insufficiency: edema, hemosiderin staining, lipodermatosclerosis',
      'Obtain ABI to rule out concurrent arterial disease (must be >0.8 for compression therapy)',
      'Measure wound dimensions and photograph for documentation',
      'Assess for contact dermatitis (common with chronic wound care products)',
      'Evaluate pain character (usually improves with elevation)',
    ],
    classification: [
      'CEAP Classification for chronic venous disease:',
      'C1: Telangiectasias or reticular veins',
      'C2: Varicose veins',
      'C3: Edema',
      'C4a: Pigmentation or eczema',
      'C4b: Lipodermatosclerosis or white atrophy (atrophie blanche)',
      'C5: Healed venous ulcer',
      'C6: Active venous ulcer',
    ],
    management: [
      'Compression therapy is the cornerstone: multilayer bandaging or compression stockings (30-40 mmHg)',
      'Wound bed preparation: gentle debridement, moist wound environment',
      'Leg elevation above heart level when resting',
      'Treat surrounding dermatitis (avoid common sensitizers like neomycin, lanolin)',
      'Pentoxifylline 400 mg TID as adjunct to compression',
      'Consider venous ablation or surgery for refractory cases',
      'Skin grafting for non-healing ulcers >6 months',
    ],
    materials: [
      'Multilayer compression bandages (e.g., Profore or equivalent)',
      'Compression stockings (30-40 mmHg)',
      'Unna boot (zinc oxide-impregnated bandage)',
      'Foam or alginate dressings under compression',
      'Skin substitutes for refractory ulcers',
    ],
    complications: [
      'Contact dermatitis from wound products',
      'Wound infection and cellulitis',
      'Malignant transformation (Marjolin ulcer) in chronic ulcers',
      'Recurrence (70% within 1 year without maintenance compression)',
      'Lipodermatosclerosis and inverted champagne bottle deformity',
    ],
    keyPearls: [
      'Compression is the single most important intervention; without it, healing rates are <20%',
      'ALWAYS check ABI before applying compression (arterial disease is a contraindication if ABI <0.5)',
      'Venous ulcers are typically shallow, irregular, with moderate exudate and granulation base',
      'Hemosiderin staining (brown discoloration) is a classic feature of chronic venous hypertension',
      'Lifelong compression stockings are needed to prevent recurrence',
    ],
    references: [
      'O\'Meara S, et al. Cochrane Database Syst Rev. 2012;11:CD000265',
      'Society for Vascular Surgery and American Venous Forum guidelines, 2014',
      'Lurie F, et al. J Vasc Surg. 2020;72(2S):53S-58S',
    ],
  },
  {
    id: 'arterial-ulcer',
    name: 'Arterial Ulcer',
    category: 'chronic-wound',
    description:
      'Ischemic wound resulting from inadequate arterial blood supply, typically affecting the distal extremities. Characterized by punched-out appearance, minimal granulation, and significant pain.',
    assessment: [
      'Assess peripheral pulses (dorsalis pedis, posterior tibial, popliteal)',
      'Obtain ABI: <0.9 suggests PAD, <0.4 indicates critical limb ischemia',
      'Evaluate wound: usually distal (toes, lateral malleolus, pressure points)',
      'Assess pain pattern (worse with elevation, improved with dependent position)',
      'Examine for signs of chronic ischemia: hair loss, shiny atrophic skin, thickened nails',
      'Consider vascular imaging (duplex ultrasound, CTA, MRA)',
    ],
    classification: [
      'Fontaine Classification:',
      'Stage I: Asymptomatic',
      'Stage II: Intermittent claudication (IIa: >200m, IIb: <200m)',
      'Stage III: Rest pain',
      'Stage IV: Ulceration or gangrene',
      'Rutherford Classification (0-6) provides more granular staging',
    ],
    management: [
      'Urgent vascular surgery referral for revascularization assessment',
      'Do NOT apply compression (impairs already compromised arterial flow)',
      'Keep wound clean with gentle irrigation; avoid aggressive debridement if ischemic',
      'Pain management (often severe; may need opioids)',
      'Cardiovascular risk factor modification: smoking cessation, statin, antiplatelet therapy',
      'Revascularization (angioplasty, stenting, or bypass) is definitive treatment',
      'Amputation if revascularization not possible and tissue non-viable',
    ],
    materials: [
      'Non-adherent, low-compression dressings',
      'Foam dressings to protect from friction',
      'Avoid occlusive dressings over ischemic tissue',
      'Handheld Doppler for pulse assessment',
    ],
    complications: [
      'Gangrene and limb loss',
      'Wound infection with limited host response',
      'Osteomyelitis',
      'Critical limb-threatening ischemia',
      'Cardiovascular events (MI, stroke) due to systemic atherosclerosis',
    ],
    keyPearls: [
      'Arterial ulcers are painful; venous ulcers ache - pain quality helps differentiate',
      'Arterial ulcers have punched-out borders, pale/necrotic base; venous ulcers are shallow with granulation',
      'Compression is CONTRAINDICATED in purely arterial ulcers (ABI <0.5)',
      'ABI may be falsely elevated in diabetic patients due to calcified vessels; use toe pressures instead',
      'Revascularization is the definitive treatment; wound care alone will not heal these wounds',
    ],
    references: [
      'Norgren L, et al. TASC II: Inter-Society Consensus for Management of PAD. J Vasc Surg. 2007;45(Suppl S):S5-67',
      'Conte MS, et al. Global vascular guidelines on management of CLTI. J Vasc Surg. 2019;69(6S):3S-125S',
    ],
  },

  // =========================================================================
  // SURGICAL WOUNDS
  // =========================================================================
  {
    id: 'wound-dehiscence',
    name: 'Wound Dehiscence',
    category: 'surgical-wound',
    description:
      'Partial or complete disruption of a sutured surgical wound. May involve skin only (superficial) or extend through the fascial layer (fascial dehiscence), which can lead to evisceration in abdominal wounds.',
    assessment: [
      'Determine extent: superficial (skin/subcutaneous) vs fascial dehiscence',
      'Assess for evisceration (protrusion of abdominal contents through fascial defect)',
      'Evaluate wound for signs of infection, seroma, hematoma',
      'Identify risk factors: malnutrition, obesity, diabetes, steroid use, increased abdominal pressure',
      'Note timing: most commonly POD 5-8',
      'Check serosanguinous drainage (salmon-colored fluid is hallmark warning sign)',
    ],
    classification: [
      'Superficial: skin and subcutaneous disruption only',
      'Partial: involving some but not all fascial layers',
      'Complete/fascial: full-thickness fascial disruption',
      'Evisceration: protrusion of intra-abdominal contents (surgical emergency)',
      'Early: within 30 days of surgery',
      'Late: beyond 30 days (incisional hernia)',
    ],
    management: [
      'Evisceration: cover with moist sterile saline dressings, NPO, emergent surgical repair',
      'Superficial dehiscence: wound care, secondary intention healing, or delayed closure',
      'Fascial dehiscence without evisceration: surgical consultation, consider operative repair',
      'Address underlying causes (infection, malnutrition, cough, straining)',
      'Abdominal binder for support if not requiring immediate surgery',
      'Negative pressure wound therapy for open management',
    ],
    materials: [
      'Sterile saline-moistened gauze for evisceration coverage',
      'Wound packing materials (wet-to-moist gauze, foam)',
      'Negative pressure wound therapy device',
      'Abdominal binder',
    ],
    complications: [
      'Evisceration (mortality up to 45% if not promptly managed)',
      'Incisional hernia',
      'Prolonged hospital stay and increased healthcare costs',
      'Wound infection',
      'Enterocutaneous fistula',
    ],
    keyPearls: [
      'Serosanguinous (salmon-colored) wound drainage is the classic early warning sign of fascial dehiscence',
      'Evisceration is a surgical emergency - cover exposed viscera with moist saline gauze, NOT dry gauze',
      'Coughing, vomiting, and straining increase risk; prophylactic measures are essential',
      'Fascial dehiscence occurs in 1-3% of abdominal surgeries; mortality is significant',
      'Mass closure with slowly absorbable suture (suture length to wound length ratio 4:1) reduces risk',
    ],
    references: [
      'Sabiston Textbook of Surgery, 21st Ed - Ch 10: Wound Healing',
      'Van Ramshorst GH, et al. World J Surg. 2010;34(1):20-27',
    ],
  },
  {
    id: 'surgical-site-infection',
    name: 'Surgical Site Infection (SSI) Classification',
    category: 'surgical-wound',
    description:
      'Infection occurring within 30 days of surgery (or 90 days if implant placed). SSIs are classified by the contamination level of the surgical wound, which predicts infection risk.',
    assessment: [
      'Classify surgical wound at time of operation (Clean, Clean-contaminated, Contaminated, Dirty)',
      'Monitor for SSI signs: erythema, warmth, edema, purulent drainage, fever',
      'Differentiate superficial incisional, deep incisional, and organ/space SSI',
      'Obtain wound cultures before starting antibiotics (aerobic and anaerobic)',
      'Consider imaging (CT, ultrasound) for deep or organ/space SSI',
      'Review operative report for intraoperative contamination or complications',
    ],
    classification: [
      'Clean (Class I): Uninfected, no inflammation, no entry into respiratory/GI/GU tract. Infection rate: 1-2%',
      'Clean-contaminated (Class II): Controlled entry into respiratory/GI/GU tract without contamination. Infection rate: 3-5%',
      'Contaminated (Class III): Open traumatic wound, major spillage from GI tract, entry into GU/biliary with infected contents. Infection rate: 5-10%',
      'Dirty/Infected (Class IV): Old traumatic wound with devitalized tissue, existing infection, perforated viscus. Infection rate: 15-40%',
    ],
    management: [
      'Superficial SSI: open wound, drain pus, pack with saline-moistened gauze',
      'Deep SSI: operative drainage, debridement, culture-directed antibiotics',
      'Organ/space SSI: percutaneous or operative drainage, IV antibiotics',
      'Prevention bundle: appropriate prophylactic antibiotics, skin prep, normothermia, glycemic control',
      'Do not use prophylactic antibiotics beyond 24 hours postoperatively',
      'Delayed primary closure for contaminated and dirty wounds',
    ],
    materials: [
      'Culture swabs (aerobic and anaerobic)',
      'Wound packing materials',
      'Irrigation supplies',
      'IV antibiotics per culture results',
    ],
    complications: [
      'Necrotizing soft tissue infection',
      'Fascia dehiscence',
      'Intra-abdominal abscess',
      'Bacteremia and sepsis',
      'Implant infection requiring removal',
      'Prolonged hospitalization and increased mortality',
    ],
    keyPearls: [
      'Prophylactic antibiotics should be given within 60 minutes of incision (120 minutes for vancomycin/fluoroquinolones)',
      'Most SSIs are caused by the patient\'s own flora; S. aureus is the most common pathogen',
      'Wound classification is determined at the END of the operation, not the beginning',
      'Razors for hair removal increase SSI risk; use clippers instead',
      'Hyperglycemia (glucose >200 mg/dL) significantly increases SSI risk in all patients',
    ],
    references: [
      'CDC/NHSN Surgical Site Infection Event Criteria, 2023',
      'Ban KA, et al. Surg Infect. 2017;18(4):383-397',
      'Berrios-Torres SI, et al. JAMA Surg. 2017;152(8):784-791',
    ],
  },

  // =========================================================================
  // BURNS
  // =========================================================================
  {
    id: 'burn-degree-classification',
    name: 'Burn Degree Classification',
    category: 'burn',
    description:
      'Classification system for burn depth ranging from superficial epidermal injury to full-thickness destruction of skin and underlying structures. Determines treatment approach and prognosis.',
    assessment: [
      'Assess burn depth by appearance, sensation, and capillary refill',
      'Calculate total body surface area (TBSA) using Rule of Nines or Lund-Browder chart',
      'Patient palm (including fingers) approximates 1% TBSA',
      'Assess for inhalation injury: singed nasal hairs, soot in oropharynx, hoarse voice, stridor',
      'Document circumferential burns (risk of compartment syndrome)',
      'Identify burn etiology: thermal, chemical, electrical, radiation',
    ],
    classification: [
      'Superficial (1st degree): Epidermis only; red, dry, painful; no blisters. Heals 3-7 days. Example: sunburn',
      'Superficial partial-thickness (2nd degree): Into papillary dermis; blisters, weeping, very painful, blanches. Heals 7-21 days. Minimal scarring',
      'Deep partial-thickness (2nd degree): Into reticular dermis; pale, less painful, sluggish capillary refill. Heals 3-8 weeks with scarring. May need grafting',
      'Full-thickness (3rd degree): Through entire dermis; white/brown/black, insensate, leathery. Requires skin grafting',
      'Fourth degree: Extends into muscle, fascia, tendon, or bone. Requires surgical excision and reconstruction',
    ],
    management: [
      'Immediate: stop the burning process, remove clothing and jewelry',
      'Cool with room-temperature water for 20 minutes (within 3 hours of injury)',
      'Superficial: aloe vera, NSAIDs, no dressing required',
      'Superficial partial-thickness: silver sulfadiazine or biosynthetic dressings, leave blisters intact if possible',
      'Deep partial and full-thickness: early excision and skin grafting',
      'Refer to burn center per ABA criteria (>20% TBSA, full-thickness >5%, face/hands/feet/genitalia/joints)',
    ],
    materials: [
      'Silver sulfadiazine cream (avoid on face - use bacitracin)',
      'Non-adherent dressings (Adaptic, Mepitel)',
      'Biosynthetic dressings (Biobrane)',
      'Bulky absorbent dressings for large burns',
      'Aloe vera for superficial burns',
    ],
    complications: [
      'Hypovolemic shock (major burns)',
      'Inhalation injury and airway compromise',
      'Infection and burn wound sepsis',
      'Hypertrophic scarring and contractures',
      'Compartment syndrome from circumferential burns',
      'Hypothermia during resuscitation',
    ],
    keyPearls: [
      'Burn depth may evolve over 48-72 hours (zone of stasis can convert to necrosis)',
      'Do NOT use ice on burns (causes vasoconstriction and can worsen injury)',
      'Rule of Nines: head 9%, each arm 9%, each leg 18%, anterior trunk 18%, posterior trunk 18%, perineum 1%',
      'In children, the head is proportionally larger (18% in infants); use Lund-Browder chart',
      'Full-thickness burns are painless because nerve endings are destroyed',
    ],
    references: [
      'ABA (American Burn Association) Guidelines for Burn Care, 2018',
      'Tintinalli Emergency Medicine, 9th Ed - Ch 210: Thermal Burns',
      'Jeschke MG, et al. Nat Rev Dis Primers. 2020;6(1):11',
    ],
  },
  {
    id: 'parkland-formula',
    name: 'Parkland Formula (Burn Fluid Resuscitation)',
    category: 'burn',
    description:
      'The Parkland (Baxter) formula is the most widely used formula for calculating initial fluid resuscitation requirements in major burn patients. It guides crystalloid administration in the first 24 hours.',
    assessment: [
      'Calculate accurate TBSA of 2nd and 3rd degree burns (exclude 1st degree)',
      'Use Lund-Browder chart for most accurate TBSA in children',
      'Obtain accurate patient weight in kilograms',
      'Assess adequacy of resuscitation: target urine output 0.5-1 mL/kg/hr (adults), 1-2 mL/kg/hr (children)',
      'Monitor for signs of over-resuscitation (fluid creep): abdominal compartment syndrome, pulmonary edema',
      'Place Foley catheter for hourly urine output monitoring',
    ],
    classification: [
      'Parkland Formula: 4 mL x body weight (kg) x %TBSA burned = total crystalloid in 24 hours',
      'First half given in first 8 hours from TIME OF BURN (not arrival to hospital)',
      'Second half given over next 16 hours',
      'Use Lactated Ringer\'s solution (preferred crystalloid)',
      'Modified Brooke Formula (alternative): 2 mL x kg x %TBSA (used at some centers)',
      'Pediatric patients: add maintenance fluids with dextrose to Parkland volume',
    ],
    management: [
      'Initiate fluid resuscitation for burns >20% TBSA in adults, >10% in children',
      'Start Lactated Ringer\'s at calculated rate; titrate to urine output',
      'First 8 hours (from burn time): give 50% of calculated volume',
      'Next 16 hours: give remaining 50% of calculated volume',
      'Titrate fluids based on clinical response, not rigidly to formula',
      'Day 2: transition to colloid (albumin 5%) + D5W to maintain hemodynamics',
      'Watch for abdominal compartment syndrome if >6 mL/kg/%TBSA given',
    ],
    materials: [
      'Lactated Ringer\'s solution (large quantities)',
      'Large-bore IV access (two peripheral or central line)',
      'Foley catheter for urine output monitoring',
      'Fluid balance tracking chart',
      'Lund-Browder chart for TBSA estimation',
    ],
    complications: [
      'Under-resuscitation: hypovolemic shock, renal failure, organ ischemia',
      'Over-resuscitation (fluid creep): pulmonary edema, abdominal compartment syndrome, extremity compartment syndrome',
      'Hypothermia from large-volume room temperature fluids',
      'Electrolyte derangements',
      'Peripheral edema impairing perfusion',
    ],
    keyPearls: [
      'The 8-hour clock starts from the TIME OF BURN, not time of hospital arrival',
      'Parkland formula is a STARTING POINT - always titrate to clinical endpoints',
      'Target urine output: 0.5-1 mL/kg/hr in adults; 1-2 mL/kg/hr in children <30 kg',
      'Inhalation injury increases fluid requirements by 30-50% above calculated volumes',
      '"Fluid creep" (over-resuscitation) is an increasingly recognized problem; monitor closely',
      'Electrical burns require higher fluid volumes due to deep tissue injury not reflected in surface TBSA',
    ],
    references: [
      'Baxter CR, Shires T. Ann Surg. 1968;168(1):49-56',
      'Saffle JR. J Burn Care Res. 2007;28(1):80-86',
      'ISBI Practice Guidelines for Burn Care, 2016',
    ],
  },
  {
    id: 'escharotomy',
    name: 'Escharotomy',
    category: 'burn',
    description:
      'Emergent surgical incision through circumferential full-thickness burn eschar to release constricting tissue and restore perfusion or ventilation. Required when circumferential burns cause compartment syndrome.',
    assessment: [
      'Monitor for signs of vascular compromise in circumferential extremity burns: pain, pallor, pulselessness, paresthesias',
      'Use pulse oximetry and Doppler ultrasound on distal pulses',
      'Assess for decreased chest wall compliance in circumferential thoracic burns',
      'Evaluate compartment pressures if clinical exam equivocal (>30 mmHg is pathological)',
      'Note that full-thickness burns are insensate; may not produce pain',
      'Clinical exam is primary; do not delay for adjunctive monitoring',
    ],
    classification: [
      'Extremity escharotomy: mid-lateral and/or mid-medial incisions along limb',
      'Thoracic escharotomy: bilateral anterior axillary line incisions with transverse connecting incisions',
      'Digital escharotomy: mid-lateral incisions on ulnar side of fingers (radial for thumb and 5th digit)',
      'Combined (multiple locations based on burn distribution)',
    ],
    management: [
      'Escharotomy is a bedside/ED procedure - do not delay for OR availability',
      'Incise through eschar only (into subcutaneous fat); avoid deeper structures',
      'Full-thickness eschar is insensate; minimal anesthesia needed for true full-thickness',
      'Extremities: longitudinal incisions along mid-lateral or mid-medial lines',
      'Chest: bilateral anterior axillary lines connected by transverse incisions at costal margin and clavicle',
      'Expect immediate improvement in perfusion or ventilation',
      'Cover incisions with topical antimicrobial and dressings',
      'If escharotomy fails to restore perfusion, consider fasciotomy',
    ],
    materials: [
      'Scalpel (No. 10 or 15 blade) or electrocautery',
      'Doppler ultrasound for pulse assessment',
      'Pulse oximeter',
      'Hemostatic agents and electrocautery',
      'Topical antimicrobial (silver sulfadiazine, mafenide acetate)',
      'Sterile dressings',
    ],
    complications: [
      'Hemorrhage from incision sites',
      'Injury to underlying nerves, tendons, or vessels if incision too deep',
      'Incomplete release requiring additional incisions or fasciotomy',
      'Infection of escharotomy wounds',
      'Late: hypertrophic scarring along incision lines',
    ],
    keyPearls: [
      'Escharotomy is a LIFE- and LIMB-saving emergency; do not delay for burn center transfer',
      'Incise only through eschar into subcutaneous fat, NOT through fascia (that is fasciotomy)',
      'Chest escharotomy may be needed even if initial ventilation seems adequate; monitor closely',
      'Digital escharotomy incisions should be mid-axial to avoid digital neurovascular bundles',
      'Loss of Doppler signal in a circumferentially burned extremity mandates immediate escharotomy',
    ],
    references: [
      'ABA Burn Center Referral Criteria and Initial Management Guidelines',
      'Orgill DP. N Engl J Med. 2009;360(9):893-901',
      'ATLS (Advanced Trauma Life Support) Manual, 10th Ed',
    ],
  },

  // =========================================================================
  // BITES
  // =========================================================================
  {
    id: 'human-bite',
    name: 'Human Bite',
    category: 'bite',
    description:
      'Wound from human teeth, either occlusal (direct bite) or clenched-fist (fight bite). Human bites carry the highest infection rate of all mammalian bites due to polymicrobial oral flora.',
    assessment: [
      'Determine mechanism: occlusal bite vs clenched-fist injury (fight bite)',
      'Fight bites: examine with MCP joint in flexion (wound may track deeper than it appears in extension)',
      'Assess for tendon, joint capsule, or bone involvement',
      'Obtain radiographs for fight bites (tooth fragments, fractures, joint involvement)',
      'Document wound location, depth, time since injury',
      'Assess hepatitis B, hepatitis C, and HIV risk',
    ],
    classification: [
      'Occlusal bite: direct bite mark from teeth',
      'Clenched-fist injury (fight bite): most serious; laceration over MCP joint from striking teeth',
      'Superficial: skin break without deep structure involvement',
      'Deep: penetrating joint capsule, tendon sheath, or bone',
    ],
    management: [
      'Copious wound irrigation with normal saline',
      'Do NOT close human bite wounds primarily (especially hand wounds)',
      'Fight bites: surgical exploration to assess joint/tendon involvement',
      'Prophylactic antibiotics for ALL human bites: amoxicillin-clavulanate (first-line)',
      'Alternative: moxifloxacin, or clindamycin + fluoroquinolone for penicillin allergy',
      'Update tetanus prophylaxis',
      'Assess need for hepatitis B prophylaxis and HIV PEP',
      'Close follow-up in 24-48 hours',
    ],
    materials: [
      'Irrigation supplies (high-pressure)',
      'Radiograph for fight bites',
      'Culture swabs (aerobic and anaerobic)',
      'Loose gauze packing',
      'Splint for hand injuries',
    ],
    complications: [
      'Wound infection (infection rate 10-50%)',
      'Septic arthritis (fight bites over MCP joint)',
      'Osteomyelitis',
      'Tenosynovitis',
      'Eikenella corrodens infection (pathognomonic for human bites)',
      'Transmission of hepatitis B, hepatitis C, or HIV (rare)',
    ],
    keyPearls: [
      'Fight bites are surgical emergencies when joint penetration is suspected',
      'Always examine clenched-fist injuries with the MCP joint in FLEXION',
      'Eikenella corrodens is resistant to first-generation cephalosporins and clindamycin',
      'Amoxicillin-clavulanate covers Eikenella, streptococci, staphylococci, and anaerobes',
      'Human bites have higher infection rates than dog or cat bites',
    ],
    references: [
      'Tintinalli Emergency Medicine, 9th Ed - Ch 47: Puncture Wounds and Animal Bites',
      'Medeiros I, Saconato H. Cochrane Database Syst Rev. 2001;(2):CD001738',
    ],
  },
  {
    id: 'dog-bite',
    name: 'Dog Bite',
    category: 'bite',
    description:
      'Most common mammalian bite injury. Dog bites produce crush injuries with potential for deep structure damage due to powerful jaw forces. Infection rate is lower than cat or human bites (5-15%).',
    assessment: [
      'Document species, provocation status, vaccination history of the dog',
      'Assess wound type: puncture, laceration, avulsion, crush',
      'Evaluate for deep structure injury (tendons, nerves, vessels, bones)',
      'Obtain radiographs if fracture or foreign body suspected',
      'Determine rabies risk based on geographic area and circumstances',
      'Assess for devitalized tissue requiring debridement',
    ],
    classification: [
      'Superficial: abrasion or minor laceration without deep involvement',
      'Deep: penetrating into muscle, tendon, or bone',
      'Avulsion: tissue torn away',
      'Crush: significant tissue damage from bite pressure',
    ],
    management: [
      'Copious high-pressure irrigation (most important intervention)',
      'Debride devitalized tissue',
      'Primary closure for face wounds (excellent blood supply, cosmetic importance)',
      'Delayed closure or secondary intention for hand and foot wounds',
      'Prophylactic antibiotics for: hand/foot bites, crush injuries, immunocompromised, deep punctures',
      'Amoxicillin-clavulanate is first-line prophylaxis',
      'Update tetanus and evaluate rabies prophylaxis need',
      'Report bite to animal control per local regulations',
    ],
    materials: [
      'High-pressure irrigation setup',
      'Wound exploration instruments',
      'Radiograph if needed',
      'Suture for facial wounds; packing for other locations',
    ],
    complications: [
      'Wound infection (Pasteurella multocida most common pathogen)',
      'Cellulitis and abscess',
      'Septic arthritis or osteomyelitis',
      'Rabies (rare in domestic dogs in developed countries)',
      'Capnocytophaga canimorsus sepsis (especially in asplenic or immunocompromised)',
      'Significant cosmetic deformity',
    ],
    keyPearls: [
      'Dog bites on the face can be closed primarily due to rich facial blood supply',
      'Hand wounds should generally NOT be closed primarily (high infection risk)',
      'Pasteurella multocida is sensitive to amoxicillin-clavulanate and resistant to first-gen cephalosporins',
      'Capnocytophaga canimorsus can cause fulminant sepsis in asplenic patients',
      'Irrigation reduces infection rates more than prophylactic antibiotics',
    ],
    references: [
      'Ellis R, Ellis C. Am Fam Physician. 2014;90(4):239-243',
      'Tintinalli Emergency Medicine, 9th Ed - Ch 47',
    ],
  },
  {
    id: 'cat-bite',
    name: 'Cat Bite',
    category: 'bite',
    description:
      'Cat bites produce deep puncture wounds from narrow, sharp teeth that inoculate bacteria directly into deep tissues and joints. Infection rate is very high (30-50%), primarily due to Pasteurella multocida.',
    assessment: [
      'Assess wound depth: cat teeth penetrate deeply despite small surface wound',
      'Evaluate for joint or tendon sheath penetration (especially hand)',
      'Assess for signs of early infection (may develop within 12-24 hours)',
      'Obtain radiographs of hand injuries to evaluate for joint involvement',
      'Determine rabies risk',
      'Document cat vaccination and health status',
    ],
    classification: [
      'Puncture (most common): small entry with deep penetration',
      'Scratch: superficial linear wound (risk of cat scratch disease - Bartonella)',
      'Combined: puncture with laceration from teeth and claws',
    ],
    management: [
      'Irrigate wound as thoroughly as possible (difficult with puncture wounds)',
      'Do NOT close cat bite wounds primarily (high infection risk)',
      'Prophylactic antibiotics for ALL cat bites: amoxicillin-clavulanate',
      'Hand wound infections often require IV antibiotics and surgical drainage',
      'Update tetanus prophylaxis',
      'Evaluate rabies prophylaxis need',
      'Close follow-up in 24-48 hours mandatory',
    ],
    materials: [
      'Small-gauge irrigation catheter for puncture wounds',
      'Radiograph for hand wounds',
      'Loose gauze; avoid tight closure',
    ],
    complications: [
      'Wound infection (30-50% overall; higher in hand)',
      'Pasteurella multocida cellulitis (rapid onset, within 24 hours)',
      'Septic arthritis and tenosynovitis',
      'Osteomyelitis',
      'Cat scratch disease (Bartonella henselae)',
      'Abscess formation',
    ],
    keyPearls: [
      'Cat bites have the highest infection rate of common mammalian bites (30-50%)',
      'Pasteurella multocida infection can develop within 12-24 hours (faster than other pathogens)',
      'ALL cat bites warrant prophylactic antibiotics, unlike dog bites',
      'Cat bites to the hand are particularly dangerous; infections may require surgical drainage',
      'Erythromycin or azithromycin treats cat scratch disease (Bartonella)',
    ],
    references: [
      'Baddour LM. UpToDate: Animal Bites',
      'Talan DA, et al. N Engl J Med. 1999;340(2):85-92',
    ],
  },
  {
    id: 'snake-bite',
    name: 'Snake Bite (Crotalid/Pit Viper)',
    category: 'bite',
    description:
      'Envenomation by pit vipers (rattlesnakes, copperheads, cottonmouths) accounts for >95% of venomous snake bites in North America. Venom causes local tissue destruction, coagulopathy, and systemic toxicity.',
    assessment: [
      'Identify snake species if safely possible (do NOT capture)',
      'Mark leading edge of swelling with time every 15-30 minutes',
      'Assess for fang marks, swelling, ecchymosis, bullae',
      'Obtain baseline labs: CBC, PT/INR, fibrinogen, CMP, CK, type and screen',
      'Monitor for coagulopathy: repeat labs every 4-6 hours',
      'Grade envenomation severity: minimal, moderate, or severe',
      'Assess for anaphylaxis to venom',
    ],
    classification: [
      'Dry bite (no envenomation): fang marks without local or systemic effects (~25% of bites)',
      'Minimal envenomation: local swelling, pain confined to bite area; normal labs',
      'Moderate envenomation: progressive swelling beyond bite site; mild lab abnormalities',
      'Severe envenomation: rapid progressive swelling, coagulopathy, systemic symptoms (hypotension, vomiting)',
    ],
    management: [
      'Immobilize affected extremity at level of heart',
      'Remove rings, watches, constrictive items',
      'Do NOT use tourniquets, incision/suction, ice, or electric shock (all harmful)',
      'Antivenom (CroFab or Anavip) is definitive treatment for progressive envenomation',
      'CroFab: initial 4-6 vials IV; Anavip: initial 10 vials IV',
      'Repeat antivenom dosing if progression continues',
      'Monitor for serum sickness 7-14 days after antivenom',
      'Tetanus update, wound care, and admission for observation minimum 12-24 hours',
    ],
    materials: [
      'IV access (two large-bore lines)',
      'CroFab (Crotalidae Polyvalent Immune Fab) or Anavip (F(ab\')2 antivenom)',
      'Lab tubes for serial monitoring',
      'Marker for serial circumference measurements',
      'Epinephrine for anaphylaxis management',
    ],
    complications: [
      'Coagulopathy (may be delayed or recurrent up to 2 weeks)',
      'Compartment syndrome (rare; measure pressures before fasciotomy)',
      'Anaphylaxis or anaphylactoid reaction to antivenom',
      'Serum sickness (7-14 days post-antivenom)',
      'Local tissue necrosis',
      'Rhabdomyolysis',
    ],
    keyPearls: [
      'Approximately 25% of pit viper bites are dry bites (no venom injected)',
      'Do NOT perform fasciotomy for swelling alone; most cases respond to antivenom',
      'Recurrent coagulopathy can occur up to 2 weeks after CroFab; check labs at follow-up',
      'CroFab dosing is the same for children and adults (dose is based on venom load, not body weight)',
      'Copperhead bites are generally less severe; antivenom reserved for progressive cases',
    ],
    references: [
      'Lavonas EJ, et al. Ann Emerg Med. 2011;57(2):128-137',
      'Unified Treatment Algorithm for Crotalid Snakebite, 2019',
      'Tintinalli Emergency Medicine, 9th Ed - Ch 211: Reptile Bites',
    ],
  },

  // =========================================================================
  // SUTURING
  // =========================================================================
  {
    id: 'simple-interrupted-suture',
    name: 'Simple Interrupted Suture',
    category: 'suturing',
    description:
      'Most fundamental and commonly used suture technique. Each stitch is individually placed and tied, providing reliable wound closure with excellent control over tension distribution.',
    assessment: [
      'Evaluate wound for suitability: clean, well-approximated edges',
      'Ensure adequate hemostasis before closure',
      'Select suture material and size based on tissue and location',
      'Assess for dead space that may require deep sutures first',
      'Plan suture spacing and distance from wound edge',
    ],
    classification: [
      'Percutaneous: passes through epidermis on both sides',
      'Simple dermal: through dermis only (buried)',
      'Standard spacing: 3-5 mm from wound edge, 3-5 mm between sutures',
      'Close spacing: 2-3 mm (face/cosmetic areas)',
      'Wide spacing: 5-10 mm (scalp, trunk under less tension)',
    ],
    management: [
      'Enter skin at 90 degrees, 3-5 mm from wound edge',
      'Pass needle through dermis with equal depth on both sides',
      'Exit at equal distance from wound edge on opposite side',
      'Tie with instrument tie: 3 throws minimum (square knots)',
      'Approximate skin edges without tension; slight eversion is ideal',
      'Place knots to one side of the wound',
      'Remove face sutures in 3-5 days, trunk/extremity in 7-14 days',
    ],
    materials: [
      'Needle driver, tissue forceps (Adson or toothed), suture scissors',
      'Face: 6-0 nylon or fast-absorbing gut',
      'Extremity: 4-0 or 5-0 nylon',
      'Trunk: 3-0 or 4-0 nylon',
      'Scalp: 3-0 or 4-0 nylon (or staples)',
    ],
    complications: [
      'Wound infection',
      'Suture marks (railroad tracks) if left too long or too tight',
      'Wound inversion (edges tucking inward)',
      'Dehiscence if premature suture removal',
      'Hematoma under closure',
    ],
    keyPearls: [
      'Each suture should be a mirror image: equal bite width and depth on both sides',
      'Slight wound edge eversion is desirable (edges flatten during healing)',
      'Width of bite should equal depth of bite (square stitch principle)',
      'Individual sutures can be removed if infection develops without losing entire closure',
      'This is the most versatile suture technique and should be mastered first',
    ],
    references: [
      'Roberts & Hedges Emergency Medicine Procedures, 7th Ed - Ch 35',
      'Lammers RL, et al. Acad Emerg Med. 2006;13(12):1299-1305',
    ],
  },
  {
    id: 'running-suture',
    name: 'Running (Continuous) Suture',
    category: 'suturing',
    description:
      'Continuous suture technique using a single strand of suture for the entire closure. Faster to place than interrupted sutures but failure of any segment can compromise the entire wound.',
    assessment: [
      'Best for long, linear wounds with minimal tension',
      'Ensure wound edges are well-aligned before starting',
      'Not ideal for irregular wounds or high-tension closures',
      'Consider running locked technique for additional hemostasis',
    ],
    classification: [
      'Simple running: standard continuous overhand passes',
      'Running locked (running interlocking): each pass locked for added hemostasis',
      'Running subcuticular: intradermal continuous technique (see separate entry)',
      'Running horizontal mattress: continuous horizontal bites',
    ],
    management: [
      'Start with a standard simple interrupted knot at one end',
      'Continue with evenly spaced bites at 45-degree angle across wound',
      'Maintain consistent tension throughout (assistant follows behind to maintain)',
      'Each bite should be equidistant from wound edge and from each other',
      'Terminate with a loop knot at the opposite end',
      'Running locked: loop suture through each pass before advancing',
    ],
    materials: [
      'Same instruments as simple interrupted',
      'Monofilament suture preferred (slides through tissue easily)',
      'Typically one size smaller than would be used for interrupted (increased total holding strength)',
    ],
    complications: [
      'Complete wound opening if suture breaks or knot fails',
      'Uneven tension distribution causing puckering',
      'Difficult to adjust individual areas of tension',
      'Air-purse string effect if tension too tight',
    ],
    keyPearls: [
      'Running sutures close wounds approximately 3x faster than interrupted',
      'Total holding strength is equivalent to interrupted due to continuous load distribution',
      'Lock every 3rd or 4th pass in high-tension areas for added security',
      'Failure at any single point can compromise the ENTIRE closure',
      'Ideal for scalp lacerations, long extremity lacerations, and intraoperative closures',
    ],
    references: [
      'Roberts & Hedges Emergency Medicine Procedures, 7th Ed',
      'Adams B, et al. Dermatol Surg. 2003;29(12):1215-1218',
    ],
  },
  {
    id: 'mattress-suture',
    name: 'Mattress Suture (Vertical and Horizontal)',
    category: 'suturing',
    description:
      'Advanced suture techniques that provide wound edge eversion and distribute tension across a wider area. Vertical mattress addresses both deep and superficial layers; horizontal mattress is excellent for high-tension closures.',
    assessment: [
      'Consider for wounds under tension or prone to inversion',
      'Vertical mattress: best for wound edge eversion and depth closure',
      'Horizontal mattress: best for high-tension areas and fragile skin',
      'Assess for skin edge viability (mattress sutures can cause ischemia if too tight)',
    ],
    classification: [
      'Vertical mattress: far-far, near-near pattern (addresses eversion and deep closure)',
      'Horizontal mattress: parallel bites on each side of the wound',
      'Half-buried horizontal mattress (corner stitch): for flap tip repair',
      'Far-near, near-far: modified vertical for maximum eversion',
    ],
    management: [
      'Vertical mattress: Enter 8-10 mm from edge deeply, exit same on opposite side; reverse entering 2-3 mm from edge superficially',
      'Horizontal mattress: Enter 5-10 mm from edge, exit on opposite side; re-enter 5-10 mm lateral to exit, cross back',
      'Use bolsters under horizontal mattress sutures in fragile skin to prevent cutting through',
      'Half-buried mattress: enter through non-flap skin, pass horizontally through flap dermis, exit through non-flap skin',
      'Tie loosely enough to avoid strangulating tissue',
    ],
    materials: [
      'Standard suture instruments',
      'Larger needle (to accommodate deeper/wider bites)',
      'Bolster material for fragile skin (rubber tubing or gauze pledgets)',
      'Nylon or polypropylene suture',
    ],
    complications: [
      'Tissue ischemia and necrosis if tied too tightly',
      'Prominent suture marks (cross-hatching) if left too long',
      'More tissue trauma than simple interrupted',
      'Requires more time to place',
    ],
    keyPearls: [
      'Vertical mattress = "far-far, near-near" - think of it as two concentric bites',
      'Horizontal mattress sutures with bolsters work well on thin, elderly skin',
      'Half-buried (corner) mattress stitch is essential for repairing V-shaped flap tips',
      'Remove mattress sutures early (5 days face, 7 days elsewhere) to minimize track marks',
      'Vertical mattress is the single best technique for achieving wound edge eversion',
    ],
    references: [
      'Roberts & Hedges Emergency Medicine Procedures, 7th Ed',
      'Kantor J. Atlas of Suturing Techniques. 2016',
    ],
  },
  {
    id: 'subcuticular-suture',
    name: 'Subcuticular (Intradermal) Suture',
    category: 'suturing',
    description:
      'Running suture placed within the dermis parallel to the skin surface, producing excellent cosmetic results with no external suture marks. Ideal for low-tension wounds in cosmetically important areas.',
    assessment: [
      'Best for clean, linear wounds with minimal tension',
      'Requires well-approximated wound edges (deep sutures may be needed first)',
      'Ideal for cosmetically sensitive areas: face, neck, anterior chest',
      'Not suitable for contaminated wounds or wounds under significant tension',
    ],
    classification: [
      'Running subcuticular: continuous horizontal dermal bites',
      'Buried subcuticular: interrupted buried dermal sutures',
      'Absorbable: suture does not require removal',
      'Non-absorbable (pull-out): monofilament removed by pulling one end at 7-14 days',
    ],
    management: [
      'Place deep (buried) dermal sutures first to eliminate dead space and reduce tension',
      'Enter dermis at one apex of the wound',
      'Pass horizontally through dermal layer alternating sides',
      'Keep bites at same level in dermis on both sides',
      'Maintain consistent horizontal bite length (3-5 mm)',
      'Secure ends with tape, adhesive, or buried knots',
      'Reinforce surface with wound closure strips (Steri-Strips)',
    ],
    materials: [
      'Absorbable suture: 4-0 or 5-0 Monocryl (poliglecaprone) or Vicryl (polyglactin)',
      'Non-absorbable pull-out: 4-0 or 5-0 Prolene (polypropylene)',
      'Wound closure strips (Steri-Strips) for surface reinforcement',
      'Tissue adhesive may be used over subcuticular closure',
    ],
    complications: [
      'Spitting sutures (absorbable suture fragments extruding through skin)',
      'Wound edge inversion if not combined with everting deep sutures',
      'Dehiscence if too much tension on skin edges',
      'Inclusion cysts along suture track',
    ],
    keyPearls: [
      'Subcuticular closure produces the best cosmetic outcomes with no suture marks',
      'Deep dermal sutures are essential to take tension off the subcuticular layer',
      'Absorbable monofilament (Monocryl) is ideal; braided suture increases spitting risk',
      'This is the preferred closure technique in plastic surgery',
      'Reinforce with Steri-Strips for 1-2 weeks to prevent widening during early healing',
    ],
    references: [
      'Kantor J. Atlas of Suturing Techniques. 2016',
      'Zitelli JA, Moy RL. Dermatologic Surgery. 2005',
    ],
  },

  // =========================================================================
  // DRESSINGS
  // =========================================================================
  {
    id: 'wound-dressing-types',
    name: 'Wound Dressing Types and Indications',
    category: 'dressing',
    description:
      'Comprehensive overview of wound dressing categories, their properties, and appropriate clinical indications. Modern dressings maintain a moist wound environment to promote optimal healing.',
    assessment: [
      'Evaluate wound bed: granulation, slough, eschar, necrotic tissue',
      'Assess exudate level: none, light, moderate, heavy',
      'Determine wound depth: superficial, partial-thickness, full-thickness',
      'Evaluate periwound skin integrity',
      'Consider patient comfort, dressing change frequency, and cost',
      'Assess for infection (infected wounds need specific dressing choices)',
    ],
    classification: [
      'Transparent film: polyurethane; for superficial wounds, IV sites, secondary dressing',
      'Hydrocolloid: occlusive, adhesive wafer; for partial-thickness, low-moderate exudate',
      'Foam: absorbent polyurethane; for moderate-heavy exudate wounds',
      'Alginate: derived from seaweed; for heavily exudative wounds, packing',
      'Hydrogel: water-based; for dry wounds, necrotic tissue (donate moisture)',
      'Hydrofiber: carboxymethylcellulose; for moderate-heavy exudate (Aquacel)',
      'Silver-containing: antimicrobial; for infected or critically colonized wounds',
      'Collagen: promotes matrix formation; for stalled chronic wounds',
      'Negative pressure wound therapy: subatmospheric pressure for complex wounds',
    ],
    management: [
      'Match dressing to wound characteristics (moisture balance is key)',
      'Dry wounds: use moisture-donating dressings (hydrogel)',
      'Wet wounds: use absorptive dressings (alginate, foam, hydrofiber)',
      'Protect periwound skin with barrier cream or film',
      'Change dressings per product specifications or when saturated',
      'Use non-adherent primary contact layer to minimize trauma at changes',
      'Consider negative pressure for large, deep, or complex wounds',
    ],
    materials: [
      'Transparent films: Tegaderm, OpSite',
      'Hydrocolloids: DuoDERM, Comfeel',
      'Foams: Mepilex, Allevyn',
      'Alginates: Kaltostat, Sorbalgon',
      'Hydrogels: IntraSite, Purilon',
      'Hydrofiber: Aquacel, Aquacel Ag',
      'Silver dressings: Acticoat, Silvercel, Aquacel Ag',
      'Collagen: Promogran, Endoform',
    ],
    complications: [
      'Maceration of periwound skin (dressing too occlusive or not changed often enough)',
      'Contact dermatitis from adhesives or dressing materials',
      'Wound desiccation from inappropriate non-occlusive dressing',
      'Retained dressing fibers in wound bed',
      'Odor (especially with hydrocolloids - does not indicate infection)',
    ],
    keyPearls: [
      'Moist wound healing is faster than dry healing; keep the wound bed moist, periwound dry',
      'No single dressing is ideal for all wounds; reassess at each dressing change',
      'Hydrocolloid odor and gel are normal and should not be mistaken for infection',
      'Alginates form a gel when absorbing exudate; ideal for packing cavities',
      'Silver dressings should be used for limited duration (2-4 weeks) to avoid cytotoxicity',
      'NPWT promotes granulation tissue formation and reduces wound volume',
    ],
    references: [
      'Wounds International Best Practice Guidelines: Wound Management',
      'European Wound Management Association (EWMA) Position Documents',
      'Jones V, et al. BMJ. 2006;332(7544):777-780',
    ],
  },
  {
    id: 'negative-pressure-wound-therapy',
    name: 'Negative Pressure Wound Therapy (NPWT)',
    category: 'dressing',
    description:
      'Advanced wound therapy applying controlled subatmospheric pressure to a wound through a sealed dressing system. Promotes granulation tissue, reduces edema, and manages exudate in complex wounds.',
    assessment: [
      'Evaluate wound suitability: open wounds with adequate blood supply',
      'Ensure no exposed vessels, anastomoses, or organs',
      'Assess for necrotic tissue (debride before NPWT application)',
      'Rule out untreated osteomyelitis or malignancy in wound bed',
      'Verify patient can tolerate continuous therapy',
      'Document baseline wound dimensions for progress tracking',
    ],
    classification: [
      'Continuous mode: constant negative pressure (most common for initial therapy)',
      'Intermittent mode: cycles on/off (may promote more granulation)',
      'Standard pressure: -125 mmHg (typical for most wounds)',
      'Low pressure: -75 mmHg (for painful wounds, grafts)',
      'Instillation therapy: combines NPWT with wound irrigation',
    ],
    management: [
      'Debride wound thoroughly before application',
      'Cut foam to fit wound dimensions (do not pack tightly)',
      'Apply adhesive drape to create airtight seal',
      'Connect tubing to suction device',
      'Set pressure per clinical indication (typically -125 mmHg continuous)',
      'Change dressing every 48-72 hours (or per manufacturer guidelines)',
      'Monitor granulation tissue formation; discontinue when wound bed ready for closure or grafting',
    ],
    materials: [
      'NPWT device (KCI V.A.C., Smith+Nephew PICO, etc.)',
      'Polyurethane (black) foam or polyvinyl alcohol (white) foam',
      'Adhesive drape for seal',
      'Non-adherent contact layer over exposed structures',
      'Canister for exudate collection',
    ],
    complications: [
      'Bleeding (most serious complication; can be fatal if over exposed vessels)',
      'Pain at dressing changes',
      'Tissue ingrowth into foam',
      'Skin maceration under drape',
      'Seal failure and therapy interruption',
      'Retained foam in wound (always count foam pieces)',
    ],
    keyPearls: [
      'NEVER place foam directly on exposed blood vessels, anastomoses, or nerves',
      'White (PVA) foam causes less tissue ingrowth and less pain than black foam',
      'Count foam pieces at insertion and removal to avoid retention',
      'NPWT reduces wound volume by approximately 20% per week',
      'Contraindicated in malignant wounds, untreated osteomyelitis, and non-enteric fistulas',
    ],
    references: [
      'Orgill DP, Bayer LR. Plast Reconstr Surg. 2013;131(4):586e-596e',
      'KCI V.A.C. Therapy Clinical Guidelines',
      'Apelqvist J, et al. J Wound Care. 2017;26(Sup3):S1-S154',
    ],
  },

  // =========================================================================
  // INFECTION
  // =========================================================================
  {
    id: 'wound-infection-signs',
    name: 'Wound Infection Signs and Diagnosis',
    category: 'infection',
    description:
      'Clinical recognition and diagnostic approach to wound infections. Early identification of wound infection is critical to prevent progression to systemic sepsis and poor wound outcomes.',
    assessment: [
      'Assess for classic signs: rubor (erythema), calor (warmth), dolor (pain), tumor (swelling), functio laesa (loss of function)',
      'Evaluate for purulent drainage, wound breakdown, or wound deterioration',
      'Check for advancing cellulitis (mark borders with pen and time)',
      'Assess for systemic signs: fever, tachycardia, leukocytosis',
      'Identify risk factors: diabetes, immunosuppression, malnutrition, foreign body',
      'Consider wound biofilm in chronic wounds failing to progress',
    ],
    classification: [
      'Contamination: bacteria present but not proliferating',
      'Colonization: bacteria proliferating but not causing host response',
      'Critical colonization/biofilm: bacteria impairing healing without overt infection',
      'Local infection: signs of infection confined to wound and periwound area',
      'Spreading infection: cellulitis extending beyond wound margin',
      'Systemic infection: SIRS criteria met with wound source (sepsis)',
    ],
    management: [
      'Local infection: increase wound cleaning frequency, consider topical antimicrobials',
      'Spreading infection: systemic antibiotics; empiric coverage based on wound type',
      'Obtain wound culture BEFORE starting antibiotics (quantitative tissue biopsy is gold standard)',
      'Swab cultures: use Levine technique (rotate swab over 1 cm2 area with pressure)',
      'Debride necrotic and infected tissue',
      'Consider biofilm disruption (sharp debridement, surfactant-based cleansers) in chronic wounds',
      'Abscess: incision and drainage is primary treatment; antibiotics alone are insufficient',
    ],
    materials: [
      'Culture swabs (aerobic and anaerobic)',
      'Tissue biopsy punch for quantitative culture',
      'Topical antimicrobials: silver dressings, cadexomer iodine, medical-grade honey',
      'Debridement instruments',
    ],
    complications: [
      'Cellulitis progression',
      'Abscess formation',
      'Necrotizing soft tissue infection',
      'Bacteremia and sepsis',
      'Osteomyelitis',
      'Delayed wound healing and chronic wound development',
    ],
    keyPearls: [
      'Increased pain is often the earliest sign of wound infection',
      'Chronic wounds: subtle signs like friable granulation, wound stalling, or increased exudate may indicate critical colonization',
      'Swab cultures have limitations; quantitative tissue biopsy (>10^5 CFU/g) is definitive',
      'Biofilms reform within 24 hours of debridement; combine with topical antimicrobials',
      'Not all wound infections require systemic antibiotics; many respond to local measures',
    ],
    references: [
      'International Wound Infection Institute (IWII) Wound Infection in Clinical Practice. 2022',
      'Bowler PG, et al. Clin Microbiol Rev. 2001;14(2):244-269',
      'Wounds UK Best Practice Statement: Wound Infection, 2021',
    ],
  },
  {
    id: 'wound-culture-antibiotics',
    name: 'Wound Cultures and Antibiotic Selection',
    category: 'infection',
    description:
      'Approach to obtaining wound cultures and selecting empiric and directed antibiotic therapy for wound infections. Covers common pathogens by wound type and appropriate antibiotic choices.',
    assessment: [
      'Determine if wound culture is indicated (clinical infection, not routine surveillance)',
      'Choose culture method: swab (Levine technique), tissue biopsy, or aspiration',
      'Note wound type to predict likely pathogens',
      'Review patient allergies and renal/hepatic function',
      'Assess severity to determine oral vs IV antibiotics',
      'Check local antibiogram for resistance patterns',
    ],
    classification: [
      'Acute wound infections: usually monomicrobial (S. aureus, Streptococcus)',
      'Chronic wound infections: often polymicrobial (gram-positive, gram-negative, anaerobes)',
      'Bite wound infections: polymicrobial with specific pathogens by species',
      'Surgical site infections: flora depends on surgical classification and site',
      'MRSA risk: prior MRSA, healthcare exposure, injection drug use, recent antibiotics',
    ],
    management: [
      'Empiric therapy for acute wound infection: cephalexin or dicloxacillin (add TMP-SMX or doxycycline for MRSA risk)',
      'Bite wounds: amoxicillin-clavulanate (covers Pasteurella, Eikenella, anaerobes)',
      'Diabetic foot: mild = oral (amoxicillin-clavulanate); moderate-severe = IV (piperacillin-tazobactam or carbapenem)',
      'Necrotizing infection: broad-spectrum IV + surgical debridement (vancomycin + pip-tazo + clindamycin)',
      'Adjust antibiotics based on culture and sensitivity results within 48-72 hours',
      'Duration: typically 5-14 days depending on severity; shorter courses preferred',
    ],
    materials: [
      'Culture swabs with transport media (aerobic and anaerobic)',
      'Tissue biopsy punch (4 mm) for quantitative culture',
      'Blood culture bottles if systemic infection',
    ],
    complications: [
      'Antibiotic resistance from inappropriate use',
      'Clostridioides difficile infection',
      'Allergic reactions',
      'Organ toxicity (renal, hepatic)',
      'Treatment failure requiring escalation or surgical intervention',
    ],
    keyPearls: [
      'S. aureus is the most common pathogen in acute wound infections',
      'Swab cultures after wound cleaning using Levine technique improve accuracy',
      'Tissue biopsy culture is the gold standard; >10^5 organisms/gram confirms infection',
      'Amoxicillin-clavulanate is the workhorse antibiotic for bite wounds of all types',
      'Always consider MRSA in wound infections not responding to first-line beta-lactams',
      'Empiric antibiotics should be narrowed based on culture results (antibiotic stewardship)',
    ],
    references: [
      'IDSA Guidelines for Skin and Soft Tissue Infections, 2014',
      'Lipsky BA, et al. Clin Infect Dis. 2012;54(12):e132-e173',
      'Stevens DL, et al. Clin Infect Dis. 2014;59(2):147-159',
    ],
  },

  // =========================================================================
  // SPECIAL WOUNDS
  // =========================================================================
  {
    id: 'crush-injury',
    name: 'Crush Injury',
    category: 'special-wound',
    description:
      'Injury resulting from prolonged compression of tissue, causing direct mechanical tissue destruction and, upon release, a systemic crush syndrome (rhabdomyolysis) from release of intracellular contents into circulation.',
    assessment: [
      'Determine duration of compression and body area involved',
      'Assess for trapped extremity vs already extricated',
      'Evaluate for compartment syndrome: pain, pressure, paresthesias',
      'Obtain CK, BMP (potassium, creatinine), urinalysis (myoglobin), ECG',
      'Monitor for cardiac arrhythmia from hyperkalemia',
      'Assess for concomitant fractures, vascular injury, nerve injury',
    ],
    classification: [
      'Crush injury: local tissue damage from compression',
      'Crush syndrome: systemic manifestations after release (rhabdomyolysis, hyperkalemia, AKI)',
      'Traumatic rhabdomyolysis: skeletal muscle breakdown with myoglobinemia',
      'Severity correlates with duration of compression and mass of tissue involved',
    ],
    management: [
      'Begin aggressive IV fluid resuscitation BEFORE extrication if possible (1-1.5 L/hr NS)',
      'Treat hyperkalemia emergently: calcium gluconate, insulin/glucose, sodium bicarbonate, kayexalate',
      'Monitor ECG continuously during and after extrication',
      'Target urine output 200-300 mL/hr with IV fluids to prevent myoglobin-induced AKI',
      'Alkalinize urine with sodium bicarbonate (target urine pH >6.5)',
      'Surgical: assess for compartment syndrome; fasciotomy if pressures >30 mmHg',
      'Wound care: debride devitalized tissue; expect significant tissue necrosis',
      'May require hemodialysis for refractory hyperkalemia or renal failure',
    ],
    materials: [
      'Large-bore IV access, crystalloid fluids',
      'Cardiac monitor',
      'Sodium bicarbonate for urine alkalinization',
      'Hyperkalemia treatment medications',
      'Foley catheter for urine output monitoring',
      'Fasciotomy instruments if needed',
    ],
    complications: [
      'Crush syndrome (rhabdomyolysis) upon release',
      'Hyperkalemia causing cardiac arrest',
      'Acute kidney injury from myoglobin deposition',
      'Compartment syndrome',
      'DIC (disseminated intravascular coagulation)',
      'ARDS (acute respiratory distress syndrome)',
      'Limb loss requiring amputation',
    ],
    keyPearls: [
      'Start IV fluids BEFORE releasing the compressive force (reflow of toxic metabolites causes systemic crisis)',
      'Hyperkalemia is the most immediately life-threatening complication upon extrication',
      'CK >5,000 U/L indicates significant rhabdomyolysis; >15,000 high risk for AKI',
      'Urine alkalinization helps prevent myoglobin precipitation in renal tubules',
      'Crush injury >4-6 hours with significant muscle mass virtually guarantees crush syndrome',
    ],
    references: [
      'Sever MS, Vanholder R. N Engl J Med. 2022;386(10):964-972',
      'Better OS, Stein JH. N Engl J Med. 1990;322(8):550-553',
      'ATLS Manual, 10th Ed - Musculoskeletal Trauma',
    ],
  },
  {
    id: 'degloving-injury',
    name: 'Degloving Injury',
    category: 'special-wound',
    description:
      'Traumatic avulsion of skin and subcutaneous tissue from the underlying fascia, disrupting blood supply. Can be open (visible tissue loss) or closed (Morel-Lavallee lesion with internal shearing). Common in industrial and vehicular trauma.',
    assessment: [
      'Classify as open or closed degloving',
      'Open: assess viability of avulsed tissue (color, turgor, capillary refill)',
      'Closed (Morel-Lavallee): fluctuant collection over bony prominence, may be delayed presentation',
      'Evaluate for associated injuries: fractures, vascular injury, nerve damage',
      'Assess TBSA of affected skin for fluid resuscitation needs',
      'Consider angiography for vascular assessment if limb viability in question',
    ],
    classification: [
      'Open degloving: skin and subcutaneous tissue peeled away from underlying structures',
      'Closed degloving (Morel-Lavallee): internal shearing with hematoma/seroma between tissue planes',
      'Single-plane: one tissue layer separated',
      'Multi-plane: multiple tissue layers involved',
      'Circumferential: complete ring avulsion (ring avulsion injuries classified Urbaniak I-IV)',
    ],
    management: [
      'Open degloving: copious irrigation, assess tissue viability',
      'Viable tissue: reattach with minimal sutures, bolster dressings, close monitoring',
      'Non-viable skin: can be defatted and used as full-thickness skin graft',
      'Closed degloving: aspiration or operative drainage, compression',
      'Large defects: staged reconstruction with skin grafts, flaps, or NPWT',
      'Ring avulsion: replantation if Class I-II; amputation revision if Class IV',
      'Close monitoring for tissue necrosis over 48-72 hours',
    ],
    materials: [
      'Irrigation supplies',
      'Dermatome for harvesting graft from non-viable skin',
      'NPWT for wound bed preparation',
      'Bolster dressing materials',
      'Microsurgical instruments for replantation',
    ],
    complications: [
      'Extensive tissue necrosis',
      'Wound infection',
      'Chronic seroma (Morel-Lavallee lesion)',
      'Compartment syndrome',
      'Limb loss',
      'Prolonged reconstructive course',
    ],
    keyPearls: [
      'Non-viable degloved skin can be defatted and reapplied as a full-thickness skin graft',
      'Morel-Lavallee lesions may present days to weeks after injury; MRI is diagnostic',
      'Ring avulsion injuries: Urbaniak Class I = circulation adequate; Class IV = complete amputation',
      'Do NOT discard avulsed tissue before plastic surgery evaluation',
      'Fluorescein angiography or indocyanine green can assess tissue perfusion intraoperatively',
    ],
    references: [
      'Latifi R, et al. World J Emerg Surg. 2010;5:25',
      'Urbaniak JR, et al. J Hand Surg Am. 1981;6(1):33-40',
      'Nickels TJ, Manson PN. Plast Reconstr Surg. 2008;121(6):386e-394e',
    ],
  },

  // =========================================================================
  // ADDITIONAL ENTRIES
  // =========================================================================
  {
    id: 'tetanus-wound-management',
    name: 'Tetanus Prophylaxis in Wound Management',
    category: 'infection',
    description:
      'Guidelines for tetanus immunization and immunoglobulin administration based on wound characteristics and vaccination history. Critical component of all wound care assessments.',
    assessment: [
      'Determine wound type: clean minor wound vs all other wounds (contaminated, puncture, crush, burn)',
      'Obtain vaccination history: number of prior tetanus doses and time since last dose',
      'Assess for tetanus-prone wound features: >6 hours old, crush/avulsion mechanism, devitalized tissue, contamination',
      'Consider patient reliability for follow-up if booster series needed',
    ],
    classification: [
      'Clean, minor wound: low risk',
      'Tetanus-prone wound: >6 hours old, depth >1 cm, contaminated, stellate, avulsion, crush, burn, frostbite',
      'High-risk features: devitalized tissue, soil/feces contamination, denervated or ischemic tissue',
    ],
    management: [
      'Clean minor wound + >=3 prior doses + last dose <10 years: no prophylaxis needed',
      'Clean minor wound + >=3 prior doses + last dose >=10 years: Tdap or Td booster',
      'Clean minor wound + <3 or unknown doses: Tdap or Td + complete series',
      'Tetanus-prone wound + >=3 prior doses + last dose <5 years: no prophylaxis needed',
      'Tetanus-prone wound + >=3 prior doses + last dose >=5 years: Tdap or Td booster',
      'Tetanus-prone wound + <3 or unknown doses: Tdap or Td + TIG (tetanus immune globulin) + complete series',
    ],
    materials: [
      'Tdap (tetanus-diphtheria-acellular pertussis) vaccine',
      'Td (tetanus-diphtheria) vaccine',
      'TIG (tetanus immune globulin) 250 units IM',
    ],
    complications: [
      'Tetanus (Clostridium tetani infection): trismus, opisthotonus, autonomic instability',
      'Injection site reactions from vaccination',
      'Missed prophylaxis leading to preventable tetanus',
    ],
    keyPearls: [
      'Tetanus immune globulin (TIG) provides immediate passive immunity; vaccine provides delayed active immunity',
      'TIG is ONLY needed for tetanus-prone wounds in patients with <3 or unknown prior doses',
      'Administer TIG and vaccine at different sites using different syringes',
      'Prefer Tdap over Td for adults who have not received Tdap previously',
      'Neonatal tetanus can occur through contaminated umbilical stump',
    ],
    references: [
      'CDC Advisory Committee on Immunization Practices (ACIP) Tetanus Guidelines, 2020',
      'Tintinalli Emergency Medicine, 9th Ed - Tetanus',
    ],
  },
  {
    id: 'necrotizing-soft-tissue-infection',
    name: 'Necrotizing Soft Tissue Infection (Necrotizing Fasciitis)',
    category: 'infection',
    description:
      'Life-threatening, rapidly progressive infection of fascia and subcutaneous tissue with secondary necrosis of overlying skin. Mortality ranges from 20-40% even with aggressive treatment. A surgical emergency.',
    assessment: [
      'Assess for "pain out of proportion" to exam findings (hallmark early finding)',
      'Evaluate for rapid progression of erythema, edema, and systemic toxicity',
      'Check for crepitus (subcutaneous gas), bullae, skin necrosis, wooden-hard induration',
      'Calculate LRINEC score (WBC, Hgb, Na, glucose, creatinine, CRP) to aid diagnosis',
      'Obtain CT or MRI if diagnosis uncertain (do NOT delay surgery for imaging)',
      'Identify risk factors: diabetes, immunosuppression, IV drug use, recent surgery, chronic liver disease',
    ],
    classification: [
      'Type I: Polymicrobial (mixed aerobic/anaerobic); most common; typically in diabetic/immunocompromised',
      'Type II: Monomicrobial (Group A Streptococcus or S. aureus); occurs in healthy patients',
      'Type III: Clostridial gas gangrene (Clostridium perfringens); crepitus, rapid progression',
      'Type IV: Fungal (Mucor, Aspergillus); immunocompromised patients',
      'Fournier gangrene: necrotizing fasciitis of the perineum/genitalia',
    ],
    management: [
      'EMERGENT surgical debridement is the cornerstone - do NOT delay for antibiotics or imaging',
      'Broad-spectrum IV antibiotics: vancomycin + piperacillin-tazobactam (or meropenem) + clindamycin',
      'Clindamycin inhibits toxin production (essential in Type II streptococcal)',
      'Plan for serial debridements every 24-48 hours until no further necrosis',
      'Aggressive fluid resuscitation and hemodynamic support',
      'ICU admission for monitoring and organ support',
      'IVIG may be considered for streptococcal toxic shock syndrome',
    ],
    materials: [
      'Broad-spectrum IV antibiotics',
      'Surgical debridement instruments',
      'Operating room availability (emergent)',
      'ICU bed for postoperative management',
      'NPWT for wound management after debridement',
    ],
    complications: [
      'Septic shock and multiorgan failure',
      'Limb loss or large tissue defect',
      'Prolonged ICU stay and reconstructive surgery',
      'Mortality 20-40% (higher with delayed treatment)',
      'Toxic shock syndrome (Type II)',
    ],
    keyPearls: [
      '"Pain out of proportion to exam" is the single most important early diagnostic clue',
      'CT showing fascial gas or stranding is helpful but absence does NOT rule out necrotizing infection',
      'Surgical exploration is both diagnostic and therapeutic; if in doubt, operate',
      'Every hour of delay to surgery increases mortality',
      'Clindamycin is added specifically for toxin suppression, not just antimicrobial coverage',
      'LRINEC score >=6 has ~92% positive predictive value for necrotizing fasciitis',
    ],
    references: [
      'Stevens DL, et al. Clin Infect Dis. 2014;59(2):e10-e52',
      'Wong CH, et al. Crit Care Med. 2004;32(7):1535-1541',
      'Tintinalli Emergency Medicine, 9th Ed - Ch 152: Soft Tissue Infections',
    ],
  },
  {
    id: 'wound-healing-optimization',
    name: 'Wound Healing Optimization',
    category: 'special-wound',
    description:
      'Systematic approach to identifying and correcting factors that impair wound healing. Addresses the modifiable systemic and local factors that contribute to delayed healing.',
    assessment: [
      'Nutritional status: albumin, prealbumin, BMI, dietary intake',
      'Glycemic control: HbA1c, blood glucose levels',
      'Vascular status: peripheral pulses, ABI, tissue oxygenation',
      'Medications: steroids, immunosuppressants, chemotherapy, anticoagulants',
      'Comorbidities: diabetes, renal failure, hepatic disease, autoimmune conditions',
      'Local factors: infection, foreign body, mechanical stress, edema, radiation history',
    ],
    classification: [
      'Systemic factors: nutrition, oxygenation, perfusion, immune function, hormonal',
      'Local factors: infection, desiccation, trauma, ischemia, edema, foreign body',
      'Patient factors: age, smoking, alcohol, compliance, psychosocial',
      'Iatrogenic: medications (steroids, NSAIDs, chemotherapy), radiation',
    ],
    management: [
      'Optimize nutrition: protein 1.25-1.5 g/kg/day, vitamin C 250-500 mg BID, zinc 220 mg daily',
      'Glucose control: target HbA1c <7%, perioperative glucose <180 mg/dL',
      'Smoking cessation: smoking reduces tissue oxygen by 30-40%; counsel aggressively',
      'Correct anemia: maintain hemoglobin >7-8 g/dL for adequate oxygen delivery',
      'Reduce/modify immunosuppressive medications when possible (coordinate with prescribers)',
      'Address local factors: offloading, compression, infection treatment, moisture balance',
      'Consider hyperbaric oxygen for refractory wounds with demonstrated ischemia',
    ],
    materials: [
      'Nutritional supplements (protein, vitamin C, zinc, arginine)',
      'Glucose monitoring supplies',
      'Smoking cessation resources and pharmacotherapy',
      'Hyperbaric oxygen (select indications)',
    ],
    complications: [
      'Chronic non-healing wound',
      'Wound infection and biofilm',
      'Malignant transformation of chronic wounds (Marjolin ulcer)',
      'Functional impairment from prolonged wound',
      'Depression and reduced quality of life',
    ],
    keyPearls: [
      'Smoking is the single most modifiable risk factor for impaired wound healing',
      'Albumin <3.0 g/dL is associated with significantly delayed healing and increased complications',
      'Even a single dose of corticosteroids can impair wound healing; vitamin A can partially reverse this effect',
      'Wound healing requires 20x more oxygen than intact skin; optimize perfusion and oxygenation',
      'A stalled wound (no progress in 2-4 weeks) warrants comprehensive reassessment of all healing factors',
    ],
    references: [
      'Guo S, DiPietro LA. J Dent Res. 2010;89(3):219-229',
      'Stechmiller JK. Nutr Clin Pract. 2010;25(1):61-68',
      'Sorensen LT. Ann Surg. 2012;255(6):1069-1079',
    ],
  },
  {
    id: 'skin-tear',
    name: 'Skin Tear',
    category: 'acute-wound',
    description:
      'Traumatic wound resulting from shear, friction, or blunt force that separates the epidermis from the dermis (partial thickness) or both from underlying structures. Most common in elderly patients with fragile skin.',
    assessment: [
      'Use ISTAP classification system for documentation',
      'Evaluate skin flap viability (color, thickness, perfusion)',
      'Assess for medications contributing to skin fragility (anticoagulants, steroids, antiplatelet agents)',
      'Document wound dimensions, flap size, and percentage of epidermal loss',
      'Identify underlying risk factors: age, malnutrition, dehydration, immobility',
    ],
    classification: [
      'ISTAP Type 1: No skin loss; linear or flap tear that can be repositioned',
      'ISTAP Type 2: Partial flap loss; portion of epidermal flap missing',
      'ISTAP Type 3: Total flap loss; entire epidermal flap missing (exposed wound bed)',
    ],
    management: [
      'Gently irrigate with normal saline or water',
      'Carefully reapproximate skin flap using moist cotton-tipped applicator',
      'Secure flap with skin closure strips (Steri-Strips) or silicone-based adhesive dressings',
      'Do NOT use tissue adhesive (cyanoacrylate) directly on fragile skin tears',
      'Cover with non-adherent silicone dressing (Mepitel, Adaptic Touch)',
      'Avoid adhesive tape directly on surrounding fragile skin',
      'Change dressings gently; consider silicone-based adhesive remover',
    ],
    materials: [
      'Normal saline for irrigation',
      'Moistened cotton-tipped applicators for flap repositioning',
      'Skin closure strips (Steri-Strips)',
      'Silicone-based non-adherent dressings (Mepitel)',
      'Tubular net bandage or self-adherent wrap to secure dressing',
    ],
    complications: [
      'Flap necrosis',
      'Wound infection',
      'Recurrence (skin remains fragile)',
      'Pain and discomfort with dressing changes',
      'Delayed healing in malnourished or debilitated patients',
    ],
    keyPearls: [
      'Skin tears are the most common wound in elderly, institutionalized patients',
      'Never use adhesive tape directly on fragile elderly skin; use tubular bandages or wraps',
      'A repositioned flap acts as a biological dressing even if it does not fully survive',
      'Prevention is key: moisturize skin, pad bed rails, use gentle handling techniques',
      'Long-term corticosteroid use causes dermal thinning, dramatically increasing skin tear risk',
    ],
    references: [
      'LeBlanc K, et al. Adv Skin Wound Care. 2013;26(10):459-476',
      'ISTAP (International Skin Tear Advisory Panel) Best Practice Recommendations, 2018',
    ],
  },
  {
    id: 'wound-irrigation-debridement',
    name: 'Wound Irrigation and Debridement',
    category: 'acute-wound',
    description:
      'Foundational wound care procedures for removing contaminants and devitalized tissue to reduce infection risk and promote healing. Irrigation and debridement are the most evidence-based interventions in wound care.',
    assessment: [
      'Determine level of contamination and devitalized tissue',
      'Assess patient pain and need for anesthesia',
      'Evaluate wound for foreign bodies',
      'Determine debridement method based on tissue type and clinical setting',
      'Assess bleeding risk (anticoagulation status)',
    ],
    classification: [
      'Irrigation pressures: low (<5 PSI, gravity flow), intermediate (5-8 PSI, syringe), high (>8 PSI, pulsatile lavage)',
      'Sharp debridement: scalpel or scissors removal of necrotic tissue',
      'Mechanical debridement: wet-to-dry dressings, pulsatile lavage, hydrotherapy',
      'Enzymatic debridement: topical enzymes (collagenase/Santyl)',
      'Autolytic debridement: moisture-retentive dressings allow body\'s own enzymes to work',
      'Biological debridement: medical-grade maggots (Lucilia sericata)',
    ],
    management: [
      'Irrigate with normal saline or potable tap water (equivalent outcomes)',
      'Use 30-60 mL syringe with 18-gauge needle/catheter for 5-8 PSI pressure',
      'Minimum volume: 50-100 mL per cm of wound length',
      'Sharp debridement for clearly necrotic tissue; performed at bedside or OR',
      'Enzymatic debridement (collagenase) for selective removal of devitalized tissue over days',
      'Autolytic debridement (hydrogel, hydrocolloid) for patients unable to tolerate sharp debridement',
      'Avoid antiseptics in wound bed: povidone-iodine, hydrogen peroxide, Dakin solution are cytotoxic at full strength',
    ],
    materials: [
      '30-60 mL syringe with 18-gauge angiocatheter',
      'Normal saline or sterile/potable water',
      'Splash guard for irrigation',
      'Scalpel, iris scissors, tissue forceps for sharp debridement',
      'Collagenase (Santyl) for enzymatic debridement',
      'Hydrogel or hydrocolloid for autolytic debridement',
    ],
    complications: [
      'Bacteremia from irrigation of infected wounds (rare)',
      'Damage to viable tissue during sharp debridement',
      'Bleeding from debridement',
      'Pain during procedure',
      'Tissue damage from excessive irrigation pressure',
    ],
    keyPearls: [
      'Tap water is equivalent to sterile saline for wound irrigation in acute wounds (Cochrane review)',
      'The solution to pollution is dilution - adequate volume matters more than solution type',
      '5-8 PSI is the optimal irrigation pressure; a 30 mL syringe with 18-ga catheter achieves this',
      'Sharp debridement is the fastest and most effective method; requires trained provider',
      'Never debride stable, dry eschar on ischemic limbs without vascular assessment',
    ],
    references: [
      'Fernandez R, Griffiths R. Cochrane Database Syst Rev. 2012;2:CD003861',
      'Dire DJ, Welsh AP. Ann Emerg Med. 1990;19(6):704-708',
      'Wounds UK Best Practice Statement: Debridement, 2013',
    ],
  },
  {
    id: 'electrical-burn',
    name: 'Electrical Burn',
    category: 'burn',
    description:
      'Injury from electrical current passing through the body. Surface burns often underestimate the extent of deep tissue injury. May cause cardiac arrhythmias, compartment syndrome, and rhabdomyolysis.',
    assessment: [
      'Identify voltage: low (<1000V, household) vs high (>=1000V, industrial/lightning)',
      'Determine current type: AC (alternating, more dangerous) vs DC (direct, lightning)',
      'Locate entry and exit wounds',
      'Obtain 12-lead ECG (all electrical injuries)',
      'Monitor cardiac rhythm for at least 24 hours for high-voltage',
      'Check CK, myoglobin, CMP, CBC, coagulation studies',
      'Assess for associated injuries: falls, blast injuries, spinal injuries',
    ],
    classification: [
      'Low voltage (<1000V): usually local burn at contact points',
      'High voltage (>=1000V): deep tissue destruction along current path',
      'Flash/arc burn: thermal burn from electrical arc (up to 4000 degrees C) without current passage',
      'Lightning: massive DC current, brief duration, unique injury pattern',
      'Oral commissure burn: children biting electrical cords (delayed labial artery bleeding)',
    ],
    management: [
      'Ensure scene safety; do NOT touch patient if still in contact with electrical source',
      'ABCDE approach; cervical spine precautions for high-voltage or falls',
      'Cardiac monitoring: 24 hours for high-voltage; 6-8 hours for low-voltage with abnormal ECG',
      'Aggressive IV fluids targeting urine output 1-2 mL/kg/hr (more than standard burns)',
      'Alkalinize urine if myoglobinuria present',
      'Fasciotomy for compartment syndrome (common in forearm and hand)',
      'Wound care: expect delayed tissue demarcation; serial debridements over days',
      'Oral commissure burns: conservative management; refer to pediatric plastic surgery',
    ],
    materials: [
      'Cardiac monitor and 12-lead ECG',
      'Large-bore IV access, crystalloid fluids',
      'Foley catheter for urine output monitoring',
      'Lab monitoring supplies',
      'Fasciotomy instruments',
    ],
    complications: [
      'Cardiac arrhythmias (VF, asystole, AF)',
      'Compartment syndrome (current follows neurovascular bundles)',
      'Rhabdomyolysis and renal failure',
      'Spinal cord injury (delayed myelopathy)',
      'Cataracts (may develop weeks to years later)',
      'Peripheral neuropathy',
      'Delayed labial artery hemorrhage (oral commissure burns, days 7-21)',
    ],
    keyPearls: [
      'Surface burn area dramatically underestimates the extent of deep tissue injury in electrical burns',
      'AC current is more dangerous than DC because it causes tetanic muscle contraction preventing release',
      'Fluid resuscitation requirements are significantly higher than for thermal burns of equivalent surface area',
      'Oral commissure burns in children: warn parents about delayed labial artery bleeding at 7-21 days',
      'Lightning has the highest mortality when current passes through the heart; survivors may have persistent neurological sequelae',
    ],
    references: [
      'Koumbourlis AC. Pediatr Clin North Am. 2002;49(5):991-1007',
      'Arnoldo BD, Purdue GF. Electrical injuries. In: Total Burn Care, 5th Ed',
      'Tintinalli Emergency Medicine, 9th Ed - Ch 212: Electrical and Lightning Injuries',
    ],
  },
  {
    id: 'chemical-burn',
    name: 'Chemical Burn',
    category: 'burn',
    description:
      'Tissue injury from contact with caustic chemical agents (acids, alkalis, or organic compounds). Alkali burns are generally more severe because they cause liquefactive necrosis with deeper tissue penetration.',
    assessment: [
      'Identify the chemical agent (request SDS/MSDS from workplace)',
      'Determine concentration, volume, duration of contact',
      'Classify as acid, alkali, or organic compound',
      'Assess for systemic toxicity (absorption through skin, inhalation)',
      'Check ocular involvement (emergency if eyes affected)',
      'Assess for airway involvement with inhalation exposure',
    ],
    classification: [
      'Acid burns: coagulative necrosis (limits depth); examples: sulfuric, hydrochloric, hydrofluoric',
      'Alkali burns: liquefactive necrosis (deeper penetration); examples: lye (NaOH), cement, oven cleaner',
      'Organic compound burns: lipophilic agents with systemic toxicity; examples: phenol, formic acid',
      'Hydrofluoric acid: unique - causes hypocalcemia, hypomagnesemia, hyperkalemia (potentially fatal)',
    ],
    management: [
      'Remove contaminated clothing and jewelry immediately',
      'Copious water irrigation for minimum 20-30 minutes (longer for alkali burns)',
      'Check wound pH with litmus paper; irrigate until pH 7.0-7.5',
      'Eye exposure: irrigate with 1-2 liters normal saline, check pH, ophthalmology consult',
      'Hydrofluoric acid: topical calcium gluconate gel; if systemic symptoms, IV calcium and cardiac monitoring',
      'Do NOT attempt neutralization (exothermic reaction causes additional thermal injury)',
      'Dry chemical: brush off powder BEFORE water irrigation',
      'Specific antidotes for select chemicals (e.g., calcium for HF acid, PEG for phenol)',
    ],
    materials: [
      'Copious water/saline for irrigation',
      'pH litmus paper',
      'Calcium gluconate gel 2.5% (for HF acid)',
      'Morgan lens for ocular irrigation',
      'PPE for healthcare providers (chemical-resistant gloves)',
    ],
    complications: [
      'Progressive tissue destruction (especially alkali)',
      'Systemic toxicity and organ damage',
      'Hydrofluoric acid: fatal cardiac arrhythmia from hypocalcemia/hyperkalemia',
      'Ocular burns: corneal opacification, vision loss',
      'Esophageal/airway burns with ingestion or inhalation',
      'Chronic scarring and contractures',
    ],
    keyPearls: [
      'Alkali burns are MORE severe than acid burns due to liquefactive necrosis and deeper penetration',
      'NEVER attempt to neutralize a chemical burn (creates exothermic reaction)',
      'Hydrofluoric acid is uniquely dangerous: can cause fatal hypocalcemia from small skin exposures',
      'Cement (calcium hydroxide) burns are common occupational alkali burns; prolonged irrigation needed',
      'Irrigate FIRST, identify chemical SECOND - do not delay treatment for identification',
    ],
    references: [
      'Palao R, et al. Burns. 2010;36(3):295-304',
      'Hatzifotis M, et al. Burns. 2004;30(2):156-159',
      'Tintinalli Emergency Medicine, 9th Ed - Ch 213: Chemical Burns',
    ],
  },
];

// ---------------------------------------------------------------------------
// Utility Functions
// ---------------------------------------------------------------------------

/** Search entries by matching query against id, name, description, and keyPearls. */
export const searchWoundCareEntries = (query: string): WoundCareEntry[] => {
  const q = query.toLowerCase();
  return woundCareDatabase.filter(
    (e) =>
      e.id.toLowerCase().includes(q) ||
      e.name.toLowerCase().includes(q) ||
      e.description.toLowerCase().includes(q) ||
      e.keyPearls.some((p) => p.toLowerCase().includes(q))
  );
};

/** Filter entries by one or more categories. */
export const filterByCategory = (categories: WoundCareCategory[]): WoundCareEntry[] =>
  woundCareDatabase.filter((e) => categories.includes(e.category));

/** Retrieve a single entry by its id. */
export const getEntryById = (id: string): WoundCareEntry | undefined =>
  woundCareDatabase.find((e) => e.id === id);
