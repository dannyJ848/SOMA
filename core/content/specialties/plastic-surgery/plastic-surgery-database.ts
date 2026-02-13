/**
 * Biological Self — Plastic Surgery Specialty Database
 * 27 entries covering reconstructive, hand surgery, craniofacial, burn,
 * microsurgery, cosmetic, wound management, and pediatric plastic surgery.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type PlasticSurgeryCategory =
  | 'reconstructive' | 'hand-surgery' | 'craniofacial' | 'burn'
  | 'microsurgery' | 'cosmetic' | 'wound-management' | 'pediatric-plastic';

export interface PlasticSurgeryEntry {
  id: string;
  name: string;
  category: PlasticSurgeryCategory;
  description: string;
  indications: string[];
  technique: string[];
  complications: string[];
  recovery: string;
  keyPearl: string;
}

// ---------------------------------------------------------------------------
// Compact helper
// ---------------------------------------------------------------------------

const ps = (
  id: string, name: string, category: PlasticSurgeryCategory,
  description: string, indications: string[], technique: string[],
  complications: string[], recovery: string, keyPearl: string,
): PlasticSurgeryEntry => ({
  id, name, category, description, indications, technique,
  complications, recovery, keyPearl,
});

// ---------------------------------------------------------------------------
// Database
// ---------------------------------------------------------------------------

export const PLASTIC_SURGERY_ENTRIES: Record<string, PlasticSurgeryEntry> = {

  // ===== RECONSTRUCTIVE (4) ==================================================

  'split-thickness-skin-graft': ps(
    'split-thickness-skin-graft', 'Split-Thickness Skin Graft (STSG)', 'reconstructive',
    'Harvesting epidermis and partial dermis (0.008-0.018 in) from a donor site for wound coverage; meshing allows expansion up to 6:1.',
    ['Large surface area wounds', 'Burn reconstruction', 'Chronic wounds with adequate vascular bed', 'Temporary biologic coverage', 'Wounds unsuitable for primary closure or flaps'],
    ['Donor site prep with dermatome set to desired thickness', 'Harvest from thigh, buttock, or scalp', 'Mesh graft for larger defects (1.5:1 or 3:1)', 'Sheet graft for cosmetically sensitive areas (face, hands)', 'Bolster dressing or negative-pressure wound therapy to secure graft'],
    ['Graft failure from hematoma, seroma, shear, or infection', 'Donor site pain and delayed healing', 'Hypertrophic scarring and contracture', 'Color and texture mismatch', 'Meshed graft cobblestone appearance'],
    'Donor site heals in 10-14 days; graft vascularization (inosculation then neovascularization) over 48-96 hours. Graft maturation continues for months.',
    'STSGs survive by plasmatic imbibition in the first 24-48h, then inosculation; a well-vascularized wound bed free of infection and hematoma is essential for graft take.',
  ),

  'full-thickness-skin-graft': ps(
    'full-thickness-skin-graft', 'Full-Thickness Skin Graft (FTSG)', 'reconstructive',
    'Transfer of epidermis and entire dermis; provides superior color match, texture, and contracture resistance compared to STSG.',
    ['Small to moderate defects in cosmetically important areas', 'Fingertip injuries', 'Nasal and eyelid reconstruction', 'Areas requiring durable coverage with minimal contracture', 'Post-Mohs defects'],
    ['Design template of defect; select donor site with similar color/texture', 'Common donors: preauricular, postauricular, supraclavicular, groin, hypothenar', 'Harvest full-thickness ellipse, defat meticulously', 'Inset with absorbable sutures and bolster dressing', 'Immobilize graft site for 5-7 days'],
    ['Graft failure (higher metabolic demand than STSG)', 'Color mismatch', 'Pin-cushioning effect', 'Donor site scar (closed primarily)', 'Partial necrosis at graft edges'],
    'Bolster removed at 5-7 days; graft maturation over 6-12 months with gradual color match improvement. Donor site heals as a linear scar.',
    'FTSGs contract less than STSGs because they carry the full dermis; always defat carefully to optimize diffusion in the first 48 hours.',
  ),

  'tissue-expansion': ps(
    'tissue-expansion', 'Tissue Expansion', 'reconstructive',
    'Controlled stretching of adjacent skin using subcutaneous silicone expanders to generate extra tissue that matches donor site color and texture.',
    ['Breast reconstruction', 'Scalp alopecia reconstruction', 'Congenital nevus excision', 'Burn scar contracture release', 'Ear reconstruction (microtia)'],
    ['Stage 1: Expander insertion in a subcutaneous pocket adjacent to defect', 'Serial saline injections (weekly) to inflate the expander', 'Overexpansion by 25-50% to account for tissue recoil', 'Stage 2: Expander removal, flap advancement into defect', 'Internal port or remote port depending on anatomy'],
    ['Expander exposure or extrusion', 'Infection requiring device removal', 'Hematoma or seroma formation', 'Skin necrosis over expander', 'Implant failure or port malfunction'],
    'Expansion phase typically 6-12 weeks with weekly office visits for inflation. Second stage surgery after adequate expansion achieved.',
    'Tissue expansion is the only technique that truly creates "extra" like-for-like tissue; the biologic creep and mechanical creep responses generate new skin with all adnexal structures.',
  ),

  'pressure-injury-reconstruction': ps(
    'pressure-injury-reconstruction', 'Pressure Injury Reconstruction', 'reconstructive',
    'Surgical management of stage III-IV pressure injuries using flap coverage after optimizing patient nutrition, offloading, and wound bed preparation.',
    ['Stage III/IV pressure ulcers refractory to conservative management', 'Osteomyelitis requiring bone debridement and soft tissue coverage', 'Ischial, sacral, and trochanteric pressure injuries', 'Patients with realistic goals and ability to offload postoperatively', 'Recurrent wounds after prior flap failure'],
    ['Aggressive debridement including bursectomy and ostectomy if osteomyelitis present', 'Musculocutaneous or fasciocutaneous flap selection based on location', 'Sacral: gluteus maximus flap; Ischial: posterior thigh, hamstring, or gracilis flap', 'Trochanteric: TFL or vastus lateralis flap', 'Suction drain placement and tension-free closure'],
    ['Flap dehiscence (most common, up to 20%)', 'Recurrence (30-60% due to ongoing risk factors)', 'Hematoma or seroma', 'Wound infection', 'Chronic osteomyelitis persistence'],
    'Strict bed rest and offloading for 4-6 weeks postoperatively. Gradual sitting protocol over additional 4-6 weeks. Lifelong pressure redistribution and skin surveillance.',
    'Recurrence is the rule rather than the exception; surgical success depends on optimizing nutrition (albumin >3.0, prealbumin >15), managing spasticity, and ensuring lifelong pressure redistribution.',
  ),

  // ===== HAND SURGERY (3) ====================================================

  'tendon-repair-hand': ps(
    'tendon-repair-hand', 'Flexor Tendon Repair (Hand)', 'hand-surgery',
    'Primary repair of lacerated flexor tendons in the hand; zone II ("no man\'s land") poses greatest challenge due to tight fibro-osseous sheath.',
    ['Clean sharp lacerations of flexor tendons', 'Zone I-V flexor tendon injuries', 'FDP avulsion (Jersey finger)', 'Tendon injuries with viable soft tissue envelope', 'Delayed repair within 3 weeks of injury'],
    ['Bruner or midaxial incision for exposure', 'Core suture technique: 4- or 6-strand modified Kessler or cruciate repair', 'Epitendinous running suture for smooth gliding surface', 'Repair both FDS and FDP when possible in zone II', 'Sheath repair or venting of A2 and A4 pulleys to prevent bowstringing'],
    ['Adhesion formation (most common, especially zone II)', 'Re-rupture (3-5% with modern protocols)', 'Joint stiffness and contracture', 'Triggering at repaired pulleys', 'Quadrigia effect if FDP repaired too tight'],
    'Early active motion protocol (place-and-hold or Duran) begins within 3-5 days. Protective splinting for 6 weeks. Progressive strengthening at 8-12 weeks. Full activity at 12-16 weeks.',
    'A strong core suture (4+ strands) permits early active motion, which dramatically reduces adhesion formation; the repair must withstand 35 N of force for active motion protocols.',
  ),

  'hand-fracture-fixation': ps(
    'hand-fracture-fixation', 'Hand Fracture Fixation', 'hand-surgery',
    'Operative fixation of unstable metacarpal and phalangeal fractures to restore anatomy and enable early motion.',
    ['Rotational malalignment of any degree', 'Unstable fracture patterns (spiral, oblique, comminuted)', 'Intra-articular fractures with step-off >1 mm', 'Open fractures', 'Multiple metacarpal fractures or polytrauma'],
    ['Closed reduction and percutaneous K-wire fixation for simple patterns', 'Open reduction with lag screws for long oblique/spiral fractures', 'Plate fixation (dorsal or lateral) for unstable transverse or comminuted fractures', 'External fixation for severely comminuted or contaminated injuries', 'Intra-articular fragment-specific fixation with mini screws'],
    ['Stiffness (most common, especially PIP joint)', 'Tendon adhesions or irritation from hardware', 'Malunion or nonunion', 'Infection (higher in open fractures)', 'Hardware failure or migration'],
    'Early protected motion within 1-2 weeks when fixation is stable. Buddy taping and hand therapy for 6-8 weeks. K-wire removal at 3-4 weeks. Full activity at 8-12 weeks.',
    'Rotational malalignment is the absolute indication for surgery in finger fractures; even 5 degrees of malrotation produces 1.5 cm of digital overlap at the fingertips.',
  ),

  'replantation': ps(
    'replantation', 'Digital and Hand Replantation', 'hand-surgery',
    'Microsurgical reattachment of amputated digits or hand segments; success depends on ischemia time, mechanism, and patient factors.',
    ['Thumb amputation (highest priority)', 'Multiple digit amputation', 'Pediatric amputation (any level)', 'Sharp amputation at wrist or mid-hand level', 'Individual digit distal to FDS insertion (controversial, case-by-case)'],
    ['Part preservation in moist saline gauze in plastic bag on ice (not directly on ice)', 'Bone shortening (0.5-1 cm) to allow tension-free vessel and nerve repair', 'Fixation sequence: bone (K-wires or plate), extensor tendon, flexor tendon', 'Vascular repair: 1-2 arteries, 2+ veins (vein-to-artery ratio 2:1 preferred)', 'Nerve repair: digital nerves under microscope'],
    ['Vascular thrombosis (most common cause of failure)', 'Venous congestion (salvage with leeches or heparin-soaked pledgets)', 'Cold intolerance (nearly universal)', 'Stiffness and limited ROM', 'Neuroma or poor sensory recovery'],
    'Strict no-smoking policy. Anticoagulation for 5-7 days. Warm environment. Monitor color, turgor, and capillary refill hourly for 72 hours. Hand therapy at 4-6 weeks. Sensory recovery over 6-18 months.',
    'Warm ischemia time should not exceed 6 hours for digits (12 hours if cold-preserved); always replant the thumb — even partial function is superior to any prosthesis.',
  ),

  // ===== CRANIOFACIAL (2) ====================================================

  'cleft-lip-palate-repair': ps(
    'cleft-lip-palate-repair', 'Cleft Lip and Palate Repair', 'craniofacial',
    'Staged surgical correction of the most common congenital craniofacial anomaly (1:700 births); multidisciplinary approach essential.',
    ['Unilateral or bilateral cleft lip', 'Complete or incomplete cleft palate', 'Submucous cleft palate with velopharyngeal insufficiency', 'Cleft lip nasal deformity', 'Alveolar cleft requiring bone grafting'],
    ['Cleft lip repair (cheiloplasty) at 3 months (Rule of 10s: 10 weeks, 10 lbs, Hgb 10)', 'Rotation-advancement (Millard) or Fisher technique for unilateral cleft lip', 'Palate repair (palatoplasty) at 9-12 months (before speech development)', 'Intravelar veloplasty to reconstruct levator veli palatini muscle sling', 'Secondary procedures: alveolar bone graft (8-10 yrs), rhinoplasty, orthognathic surgery'],
    ['Wound dehiscence', 'Velopharyngeal insufficiency (hypernasality)', 'Oronasal fistula (2-10%)', 'Maxillary growth restriction from palate surgery', 'Poor nasal aesthetics requiring revision'],
    'Lip repair: nasal stent and arm restraints for 2-3 weeks. Palate repair: soft diet for 2-3 weeks, no pacifier or hard utensils. Speech therapy begins at age 2. Ongoing orthodontic care throughout growth.',
    'Timing is critical: lip repair at 3 months allows nasal cartilage molding; palate repair by 12 months optimizes speech development. The levator muscle must be dissected off the hard palate and reconstructed as a functional sling.',
  ),

  'craniofacial-surgery': ps(
    'craniofacial-surgery', 'Craniofacial Surgery (Craniosynostosis)', 'craniofacial',
    'Surgical correction of premature cranial suture fusion to normalize skull shape, prevent elevated intracranial pressure, and allow brain growth.',
    ['Single-suture craniosynostosis (sagittal, coronal, metopic, lambdoid)', 'Syndromic craniosynostosis (Crouzon, Apert, Pfeiffer, Muenke)', 'Elevated intracranial pressure from multisuture fusion', 'Orbital dystopia or facial asymmetry', 'Chiari malformation associated with craniosynostosis'],
    ['Endoscopic strip craniectomy with helmet therapy (<6 months old)', 'Open cranial vault remodeling (CVR) for older infants (6-12 months)', 'Fronto-orbital advancement (FOA) for anterior synostoses', 'Posterior vault distraction osteogenesis for syndromic cases', 'Le Fort III or monobloc advancement for midface hypoplasia (school age)'],
    ['Significant blood loss (often >1 blood volume in infants)', 'Dural tears and CSF leak', 'Infection (epidural abscess, meningitis)', 'Resynostosis requiring reoperation', 'Raised ICP if inadequate correction'],
    'ICU monitoring for 24-48 hours postoperatively. Helmet therapy for 6-12 months after endoscopic procedures. Serial imaging and head circumference monitoring. Syndromic patients require lifelong craniofacial team follow-up.',
    'Sagittal synostosis (scaphocephaly) is the most common type; endoscopic repair before 3-4 months with helmet therapy achieves equivalent results to open CVR with less blood loss and shorter hospital stay.',
  ),

  // ===== BURN (3) =============================================================

  'acute-burn-management': ps(
    'acute-burn-management', 'Acute Burn Management', 'burn',
    'Comprehensive initial assessment and resuscitation of burn injuries based on depth, total body surface area (TBSA), and associated injuries.',
    ['Second-degree (partial-thickness) burns >10% TBSA', 'Third-degree (full-thickness) burns of any size', 'Burns involving face, hands, feet, genitalia, major joints', 'Inhalation injury', 'Electrical and chemical burns'],
    ['Primary survey (ABCs) and assess for inhalation injury (intubate if concern)', 'Estimate TBSA with Rule of 9s or Lund-Browder chart (most accurate)', 'Parkland formula: 4 mL x kg x %TBSA LR in first 24h (half in first 8h)', 'Titrate fluids to urine output 0.5-1 mL/kg/h (adults) or 1-2 mL/kg/h (children)', 'Escharotomy for circumferential full-thickness burns with compartment syndrome'],
    ['Inhalation injury (leading cause of burn mortality)', 'Hypovolemic shock from fluid losses', 'Burn wound sepsis', 'Compartment syndrome (circumferential burns)', 'Over-resuscitation (abdominal compartment syndrome, pulmonary edema)'],
    'Early excision and grafting within 72 hours for full-thickness burns. Aggressive nutritional support (Curreri formula). Rehabilitation begins immediately. Acute phase lasts until all wounds are closed.',
    'The Parkland formula is a starting point, not a rigid protocol; fluid resuscitation should be titrated to urine output, and over-resuscitation is as dangerous as under-resuscitation.',
  ),

  'burn-reconstruction': ps(
    'burn-reconstruction', 'Burn Scar Reconstruction', 'burn',
    'Surgical management of burn sequelae including hypertrophic scars, contractures, and functional deficits after acute wound healing.',
    ['Scar contracture limiting range of motion', 'Hypertrophic or keloid burn scars', 'Aesthetic deformity causing psychological distress', 'Ectropion or microstomia from facial burns', 'Unstable burn scars with recurrent breakdown'],
    ['Contracture release with Z-plasty, W-plasty, or multiple local flaps', 'Full-thickness skin graft after contracture release (preferred over STSG)', 'Local or regional flap coverage for exposed vital structures', 'Tissue expansion for color-matched tissue adjacent to scars', 'Laser therapy (pulsed dye, fractional CO2) for scar remodeling'],
    ['Contracture recurrence', 'Graft or flap failure', 'Hypertrophic scarring of new incisions', 'Loss of skin graft in mobile areas', 'Donor site morbidity'],
    'Scar maturation takes 12-18 months; reconstructive surgery ideally deferred until scars mature. Pressure garments and silicone sheeting during maturation phase. Multiple staged procedures often required.',
    'Burn scar contractures across joints require FTSG or flap coverage after release — never use STSG across joints, as the secondary contracture rate is unacceptably high.',
  ),

  'burn-excision-grafting': ps(
    'burn-excision-grafting', 'Early Burn Excision and Grafting', 'burn',
    'Tangential or fascial excision of burn eschar with immediate autograft or temporary coverage; standard of care within 72 hours for full-thickness burns.',
    ['Full-thickness (third-degree) burns', 'Deep partial-thickness burns unlikely to heal in 3 weeks', 'Burns >20% TBSA requiring staged excision', 'Infected burn wounds', 'Chemical or electrical burns with clearly demarcated necrosis'],
    ['Tangential excision with Watson knife or Goulian blade down to punctate bleeding', 'Fascial excision for massive burns or heavily infected wounds', 'Limit excision to 20% TBSA per operation to minimize blood loss', 'Autograft with meshed STSG (wide mesh for large burns)', 'Temporary coverage: cadaveric allograft, xenograft, or dermal substitutes (Integra) if insufficient autograft'],
    ['Massive blood loss (estimate 1 unit packed RBCs per 1% TBSA excised)', 'Graft loss from inadequate hemostasis or infection', 'Hypothermia during prolonged procedures', 'Scarring at meshed graft sites', 'Need for multiple staged procedures in large burns'],
    'Grafts inspected at 3-5 days. Staple removal at 10-14 days. Donor sites heal in 10-14 days and can be reharvested. Early mobilization with therapy to prevent contractures.',
    'Early excision within 72 hours of injury has reduced burn mortality from 40% to <5% for moderate-sized burns; the key is achieving a viable wound bed with punctate capillary bleeding before grafting.',
  ),

  // ===== MICROSURGERY (3) ====================================================

  'diep-flap': ps(
    'diep-flap', 'DIEP Flap (Deep Inferior Epigastric Perforator)', 'microsurgery',
    'Gold standard autologous breast reconstruction using abdominal skin and fat on a single perforator vessel, sparing the rectus muscle entirely.',
    ['Post-mastectomy breast reconstruction (immediate or delayed)', 'Failed implant-based reconstruction', 'Radiation-damaged chest wall', 'Patient desire for autologous reconstruction with adequate abdominal tissue', 'Bilateral breast reconstruction (sufficient tissue permitting)'],
    ['Preoperative CTA to map perforator anatomy', 'Flap harvest: dissect dominant perforator through rectus muscle preserving all muscle fibers', 'Deep inferior epigastric artery and vein as pedicle (10-15 cm length)', 'Recipient vessels: internal mammary (preferred) or thoracodorsal', 'Microvascular anastomosis under operative microscope; flap shaping and inset'],
    ['Flap failure from arterial or venous thrombosis (2-5%)', 'Fat necrosis (10-15%)', 'Abdominal wall hernia or bulge (rare with true muscle-sparing technique)', 'Donor site seroma', 'Partial flap loss requiring revision'],
    'Hospital stay 4-5 days. Flap monitoring every 1-2 hours for 48-72 hours. No heavy lifting for 6-8 weeks. Revision and nipple reconstruction at 3-6 months.',
    'The DIEP flap is a perforator flap, not a muscle flap — meticulous intramuscular dissection of the perforator is what distinguishes it from a TRAM and preserves abdominal wall integrity.',
  ),

  'alt-flap': ps(
    'alt-flap', 'ALT Flap (Anterolateral Thigh)', 'microsurgery',
    'Versatile perforator flap from the lateral thigh based on descending branch of the lateral circumflex femoral artery; workhorse for head/neck and extremity reconstruction.',
    ['Head and neck reconstruction (oral cavity, pharynx, skull base)', 'Upper and lower extremity soft tissue defects', 'Abdominal wall reconstruction', 'Perineal and vaginal reconstruction', 'Coverage of exposed bone, tendon, or hardware'],
    ['Identify perforators with handheld Doppler along line from ASIS to superolateral patella', 'Suprafascial or subfascial dissection to perforator', 'Flap thinning possible for intraoral or hand reconstruction', 'Pedicle: descending branch of LCFA (8-12 cm pedicle, 2-3 mm vessel caliber)', 'Can include vastus lateralis muscle for composite reconstruction or dead space obliteration'],
    ['Perforator variability (septocutaneous vs. musculocutaneous)', 'Donor site may require skin graft if width >8 cm', 'Flap bulkiness in obese patients', 'Lateral femoral cutaneous nerve injury (thigh numbness)', 'Partial flap necrosis if perforator selection suboptimal'],
    'Donor site closed primarily if width <8 cm. Progressive weight bearing immediately. Flap debulking if needed at 3-6 months. Donor site numbness improves over 6-12 months.',
    'The ALT is the "reconstructive Swiss army knife" — it can be harvested as fasciocutaneous, myocutaneous, adipofascial, or chimeric flap and thinned to 3-4 mm for intraoral reconstruction.',
  ),

  'radial-forearm-flap': ps(
    'radial-forearm-flap', 'Radial Forearm Free Flap', 'microsurgery',
    'Thin, pliable fasciocutaneous flap based on the radial artery; ideal for intraoral, pharyngeal, and hand reconstruction requiring a thin soft tissue paddle.',
    ['Oral cavity and oropharyngeal reconstruction', 'Pharyngoesophageal reconstruction (tubed flap)', 'Hand and digit soft tissue coverage', 'Nasal lining reconstruction', 'Penile (phalloplasty) and urethral reconstruction'],
    ['Allen test mandatory to confirm ulnar artery dominance preoperatively', 'Raise flap on radial artery and venae comitantes (or cephalic vein)', 'Suprafascial dissection preserves paratenon over flexor tendons', 'Can include palmaris longus tendon, brachioradialis, or radius bone (osteocutaneous variant)', 'Donor site covered with FTSG over paratenon'],
    ['Donor site morbidity (cosmetic deformity, skin graft loss)', 'Radial artery sacrifice (hand ischemia if Allen test inadequate)', 'Tendon exposure at donor site if paratenon not preserved', 'Cold intolerance of the hand', 'Radius fracture if bone harvested (osteocutaneous variant)'],
    'Splint forearm donor site for 7-10 days. Skin graft bolster removed at 5-7 days. Hand therapy for grip strength recovery. Monitor for cold intolerance.',
    'The Allen test is non-negotiable before radial forearm flap harvest; the flap is exquisitely thin and pliable, making it ideal for tongue and floor-of-mouth reconstruction where bulk is undesirable.',
  ),

  // ===== LOCAL FLAPS (3) =====================================================

  'rotation-flap': ps(
    'rotation-flap', 'Rotation Flap', 'wound-management',
    'Semicircular local flap that rotates around a pivot point to fill an adjacent triangular defect; useful for scalp, cheek, and trunk reconstruction.',
    ['Triangular defects adjacent to lax tissue', 'Scalp defects (large rotation flaps)', 'Cheek and facial defects', 'Sacral and trunk wounds', 'Post-excision defects where adjacent tissue is abundant'],
    ['Design semicircular arc 4-8x the length of the defect base', 'Incise along arc and undermine widely in the subdermal or subgaleal plane', 'Back-cut or Burow triangle at the base to facilitate rotation (limits blood supply)', 'Rotate flap into defect and close donor site primarily', 'Key suture at the pivot point to distribute tension'],
    ['Distal flap necrosis (tip most vulnerable)', 'Standing cutaneous deformity ("dog ear")', 'Wound dehiscence at pivot point', 'Hematoma under flap', 'Alopecia at suture line in scalp flaps'],
    'Suture removal at 5-7 days (face) or 10-14 days (scalp/trunk). Minimize tension on the repair for 4-6 weeks. Scar maturation over 6-12 months.',
    'The arc length must be at least 4 times the base of the triangular defect; a back-cut increases mobility but shortens the effective pedicle length — never exceed the point of the dominant blood supply.',
  ),

  'advancement-flap': ps(
    'advancement-flap', 'Advancement Flap', 'wound-management',
    'Local flap that moves directly forward into a defect without rotation or lateral movement; V-Y and bilateral advancement (H-plasty) are common subtypes.',
    ['Linear defects amenable to direct advancement', 'Lip and vermilion defects (V-Y mucosal advancement)', 'Forehead and eyebrow defects (A-to-T or H-plasty)', 'Fingertip injuries (V-Y Atasoy or Kutler flaps)', 'Defects with ample tissue laxity along one axis'],
    ['Design parallel incisions (unipedicle) or opposing flaps (bipedicle/H-plasty)', 'V-Y advancement: V-shaped incision advanced into defect and closed as Y', 'Undermine widely beyond the flap base in the appropriate tissue plane', 'Excise Burow triangles to prevent standing cutaneous deformities', 'Advance flap and secure with layered closure'],
    ['Limited reach (advancement typically 1-2 cm)', 'Wound closure tension causing necrosis', 'Standing cutaneous deformities', 'Pin-cushioning of the flap', 'Paresthesia from nerve injury during undermining'],
    'Suture removal at 5-7 days (face) or 10-14 days (extremities/trunk). Activity restriction for 2-4 weeks. Scar massage beginning at 3-4 weeks.',
    'V-Y advancement flaps are "island" flaps that survive on subcutaneous perforators — wide undermining must stop at the flap itself to preserve the subdermal blood supply.',
  ),

  'transposition-flap': ps(
    'transposition-flap', 'Transposition Flap (Rhombic/Limberg, Z-plasty, Bilobed)', 'wound-management',
    'Local flap that moves laterally over intact skin to fill an adjacent defect; includes rhombic, bilobed, and Z-plasty variations.',
    ['Rhombic defects of the face (Limberg flap)', 'Nasal tip and alar defects (bilobed flap)', 'Scar contracture release (Z-plasty, gains 75% length)', 'Web space contractures of the hand', 'Defects requiring redirection of scar lines into relaxed skin tension lines'],
    ['Z-plasty: design 60-degree limbs of equal length; transpose triangular flaps', 'Limberg flap: design rhombus with 60/120 degree angles; 4 possible flap orientations', 'Bilobed flap: primary lobe covers defect, secondary lobe covers donor of primary', 'Transpose flap over intervening skin bridge', 'Close secondary defect primarily or with skin graft'],
    ['Distal flap necrosis (tip is watershed zone)', 'Pin-cushioning and trap-door deformity', 'Standing cutaneous deformity', 'Flap congestion from kinking at pivot point', 'Poor scar orientation if not aligned with RSTL'],
    'Suture removal at 5-7 days (face) or 10-14 days (elsewhere). Avoid sun exposure on healing flaps. Scar revision possible at 6-12 months if needed.',
    'A classic Z-plasty with 60-degree limbs gains 75% in length; the Limberg flap has 4 possible designs — always choose the one that places the maximum tension closure line in a favorable direction.',
  ),

  // ===== BREAST (2) ==========================================================

  'implant-breast-reconstruction': ps(
    'implant-breast-reconstruction', 'Implant-Based Breast Reconstruction', 'reconstructive',
    'Prosthetic breast reconstruction using tissue expanders and/or permanent implants; most common method of breast reconstruction in the US.',
    ['Post-mastectomy reconstruction (immediate or delayed)', 'Patients preferring shorter operative time and recovery', 'Bilateral reconstruction for symmetry', 'Thin patients with insufficient donor tissue for autologous options', 'Prophylactic mastectomy reconstruction'],
    ['Immediate: tissue expander placed in subpectoral or prepectoral pocket at mastectomy', 'Acellular dermal matrix (ADM) or mesh to support inferior pole and lateral coverage', 'Serial expansions in office (60-100 mL per visit, weekly to biweekly)', 'Exchange to permanent implant (silicone or saline) at 3-6 months', 'Direct-to-implant (DTI) in select cases with adequate skin envelope and mastectomy flap perfusion'],
    ['Capsular contracture (Baker grade III/IV, 10-15%)', 'Implant infection requiring explantation (2-5%)', 'Implant malposition or animation deformity (subpectoral)', 'Breast implant-associated anaplastic large-cell lymphoma (BIA-ALCL, rare)', 'Implant rupture or deflation'],
    'Tissue expander fills over 4-8 weeks. Exchange surgery at 3-6 months. Final result at 6-12 months. Implants may require replacement every 10-20 years.',
    'Prepectoral placement with ADM support avoids animation deformity and reduces pain; however, mastectomy skin flap perfusion (assessed with SPY angiography) must be excellent to avoid implant exposure.',
  ),

  'autologous-breast-reconstruction': ps(
    'autologous-breast-reconstruction', 'Autologous Breast Reconstruction', 'reconstructive',
    'Use of patient\'s own tissue (abdomen, thigh, buttock, or back) to reconstruct the breast; provides the most natural long-term result.',
    ['Patient preference for natural-feeling reconstruction', 'Post-radiation chest wall (autologous tissue better tolerates radiation)', 'Failed implant-based reconstruction', 'Adequate donor site tissue available', 'Desire for single definitive reconstruction without future implant exchanges'],
    ['DIEP flap (preferred abdominal option, muscle-sparing)', 'TRAM flap (pedicled or free, higher abdominal morbidity)', 'Latissimus dorsi flap (with or without implant)', 'PAP flap (profunda artery perforator, thigh-based)', 'SGAP/IGAP (superior/inferior gluteal artery perforator, buttock-based)'],
    ['Flap failure requiring salvage or alternative approach (2-5%)', 'Fat necrosis presenting as palpable mass (10-15%)', 'Donor site morbidity (hernia, contour deformity, seroma)', 'Prolonged operative time (6-10 hours for microsurgical)', 'Asymmetry requiring revision'],
    'Hospital stay 4-5 days. Drain management for 1-3 weeks. No heavy lifting for 6-8 weeks. Fat necrosis and flap remodeling over 3-6 months. Nipple reconstruction and tattooing as secondary procedures.',
    'Autologous reconstruction ages naturally with the patient and improves over time; post-radiation reconstruction strongly favors autologous tissue because irradiated tissue lacks the vascularity and compliance needed for successful implant outcomes.',
  ),

  // ===== COSMETIC (4) ========================================================

  'rhinoplasty': ps(
    'rhinoplasty', 'Rhinoplasty', 'cosmetic',
    'Surgical reshaping of the nasal framework (bone and cartilage) for aesthetic improvement or functional correction of nasal obstruction.',
    ['Dorsal hump reduction', 'Tip refinement and rotation', 'Nasal deviation correction (functional + aesthetic)', 'Wide nasal base and alar flare', 'Post-traumatic nasal deformity'],
    ['Open approach: transcolumellar incision + marginal incisions for full exposure', 'Closed (endonasal) approach: all incisions inside the nose', 'Dorsal reduction with osteotome or rasp; lateral osteotomies to close open roof', 'Tip work: cephalic trim, suture techniques (interdomal, transdomal), grafts (shield, cap, strut)', 'Spreader grafts for internal nasal valve reconstruction'],
    ['Asymmetry and irregularity', 'Nasal obstruction (functional worsening)', 'Pollybeak deformity (supratip fullness)', 'Inverted-V deformity (middle vault collapse)', 'Need for revision rhinoplasty (5-15%)'],
    'Cast/splint removed at 1 week. Major swelling resolves by 3-4 weeks. Tip swelling (supratip) takes 12-18 months to fully resolve. Final result at 1-2 years.',
    'Rhinoplasty is 80% tip surgery; the tripod concept (two lateral crura and one conjoined medial crura) governs tip dynamics, and every maneuver that modifies one leg affects the other two.',
  ),

  'blepharoplasty': ps(
    'blepharoplasty', 'Blepharoplasty', 'cosmetic',
    'Surgical rejuvenation of the eyelids by removing excess skin, orbicularis muscle, and/or herniated orbital fat.',
    ['Upper lid dermatochalasis causing visual field obstruction (functional)', 'Upper eyelid hooding and excess skin (cosmetic)', 'Lower lid bags from pseudoherniation of orbital fat', 'Lower lid skin laxity and wrinkles', 'Combined with brow lift for complete periorbital rejuvenation'],
    ['Upper blepharoplasty: skin-only or skin-muscle excision in lid crease', 'Conservative skin excision to preserve at least 20 mm from brow to lash margin', 'Lower transconjunctival approach: access fat compartments (medial, central, lateral) without skin incision', 'Lower transcutaneous approach: skin-muscle flap with fat repositioning', 'Fat transposition to fill tear trough (lower lid)'],
    ['Lagophthalmos (inability to close eye — from over-resection)', 'Retrobulbar hematoma (surgical emergency, can cause blindness)', 'Lower lid retraction or ectropion', 'Dry eye syndrome', 'Asymmetry and need for revision'],
    'Cold compresses and head elevation for 48-72 hours. Sutures removed at 5-7 days. Avoid heavy lifting for 2 weeks. Bruising resolves in 10-14 days. Final result at 3-6 months.',
    'Retrobulbar hematoma is the most feared complication — it presents with proptosis, pain, and vision loss within hours; emergent lateral canthotomy and cantholysis must be performed at bedside without delay.',
  ),

  'rhytidectomy': ps(
    'rhytidectomy', 'Rhytidectomy (Facelift)', 'cosmetic',
    'Surgical rejuvenation of the aging face by repositioning the SMAS (superficial musculoaponeurotic system) and removing excess skin.',
    ['Lower face and neck laxity with jowling', 'Loss of jawline definition', 'Platysmal banding and neck redundancy', 'Deep nasolabial folds (limited improvement)', 'Failed or aging non-surgical facial rejuvenation'],
    ['Incision: preauricular (follows tragal contour) extending postauricularly into hairline', 'Skin flap elevation to nasolabial fold and over mandible', 'SMAS plication, imbrication, or deep-plane SMAS flap elevation', 'Platysma tightening via anterior approach (platysmaplasty) for neck rejuvenation', 'Redraped skin trimmed and closed without tension; drain placement optional'],
    ['Hematoma (most common complication, 1-3%, higher in males and hypertension)', 'Facial nerve injury (temporal and marginal mandibular branches most vulnerable)', 'Skin flap necrosis (especially in smokers)', 'Pixie ear deformity from excessive skin tension on lobule', 'Unnatural "wind-swept" appearance from over-tightening'],
    'Drain removal at 24-48 hours. Sutures/staples removed at 7-10 days. Social downtime 2-3 weeks. Avoid strenuous activity for 4-6 weeks. Results last 7-10 years.',
    'The SMAS is the key to a natural, long-lasting facelift; skin-only facelifts fail because skin does not hold tension — the SMAS, as the fascial support system of the face, must be repositioned for durable results.',
  ),

  'liposuction': ps(
    'liposuction', 'Liposuction', 'cosmetic',
    'Surgical body contouring via suction-assisted removal of subcutaneous fat deposits through small cannula incisions.',
    ['Localized lipodystrophy resistant to diet and exercise', 'Abdomen, flanks, thighs, arms, submental fat', 'Adjunct to abdominoplasty or brachioplasty', 'Gynecomastia (fibrous-fatty type)', 'Lipedema'],
    ['Tumescent technique: infiltrate wetting solution (lidocaine, epinephrine, saline) at 1:1 or more ratio', 'Suction-assisted (SAL) with 3-4 mm cannula through stab incisions', 'Power-assisted (PAL) cannula reduces surgeon fatigue', 'Ultrasound-assisted (VASER) for fibrous areas and gynecomastia', 'Cross-hatching technique from multiple access points for smooth contour'],
    ['Contour irregularity (most common)', 'Seroma and hematoma', 'Lidocaine toxicity (limit 35-55 mg/kg with tumescent)', 'Fat embolism syndrome (rare, large-volume liposuction)', 'Fluid shifts and hypothermia (large-volume >5 L aspirate)'],
    'Compression garment for 4-6 weeks. Swelling peaks at 3-5 days and resolves over 3-6 months. Return to light activity at 1-2 weeks. Final contour visible at 6 months.',
    'The safe upper limit of aspirate is 5 liters in an outpatient setting; large-volume liposuction (>5 L) requires overnight monitoring, and tumescent lidocaine dosing must be calculated carefully as absorption peaks at 12-14 hours post-infiltration.',
  ),

  // ===== ABDOMINOPLASTY (1) ==================================================

  'abdominoplasty': ps(
    'abdominoplasty', 'Abdominoplasty', 'cosmetic',
    'Surgical correction of abdominal wall laxity, diastasis recti, and excess skin/fat; often combined with liposuction for optimal contouring.',
    ['Post-partum abdominal wall laxity with diastasis recti', 'Massive weight loss with excess abdominal skin (panniculectomy variant)', 'Ventral hernia repair requiring component separation', 'Failed non-surgical body contouring', 'Skin redundancy below the umbilicus'],
    ['Low transverse incision from hip to hip (in Pfannenstiel/bikini line)', 'Elevate abdominal flap in supra-Scarpa plane to costal margins and xiphoid', 'Plication of rectus diastasis with running permanent suture (0 or 1 Ethibond)', 'Transpose umbilicus through new opening in the flap', 'Excise excess skin, insert drains, close in layers; progressive tension sutures reduce seroma'],
    ['Seroma (most common, 10-20% without progressive tension sutures)', 'Venous thromboembolism (highest risk aesthetic procedure)', 'Wound dehiscence and skin necrosis (especially in smokers)', 'Umbilical malposition or necrosis', 'Pulmonary embolism (enforce chemical and mechanical DVT prophylaxis)'],
    'Ambulate on day of surgery. Drains removed at 1-3 weeks. Abdominal binder for 6 weeks. No heavy lifting for 6-8 weeks. Final result at 6-12 months after scar maturation.',
    'Abdominoplasty carries the highest VTE risk of any aesthetic procedure; Caprini score assessment and appropriate chemoprophylaxis (enoxaparin) are mandatory, and combining abdominoplasty with other lengthy procedures significantly increases this risk.',
  ),

  // ===== WOUND MANAGEMENT (2) ================================================

  'wound-closure-techniques': ps(
    'wound-closure-techniques', 'Wound Closure Techniques', 'wound-management',
    'Fundamental principles of wound closure spanning primary intention, secondary intention, delayed primary closure, and the reconstructive ladder.',
    ['Traumatic lacerations amenable to primary closure', 'Surgical wound closure planning', 'Contaminated wounds requiring delayed closure', 'Complex wounds requiring application of the reconstructive ladder', 'Chronic wounds transitioning to surgical management'],
    ['Primary closure: layered repair (deep dermal + subcuticular or interrupted cutaneous)', 'Secondary intention: appropriate for concave surfaces (medial canthus, temple, ear concavity)', 'Delayed primary closure (DPC): contaminated wounds closed at 3-5 days', 'Reconstructive ladder: direct closure → skin graft → local flap → regional flap → free flap', 'Reconstructive elevator: skip ladder steps when a higher option gives superior outcome'],
    ['Wound infection (increased with tension, foreign body, dead space)', 'Dehiscence from excessive tension', 'Hypertrophic or keloid scarring', 'Tissue necrosis from strangulating sutures', 'Scar widening from early suture removal or activity'],
    'Face sutures removed 5-7 days. Trunk and extremities 10-14 days. Scar remodeling phase lasts 6-18 months. Sun protection for 12 months to prevent hyperpigmentation.',
    'Wounds heal fastest and with least scarring when closed tension-free along relaxed skin tension lines (RSTL); deep dermal sutures bear the tension and permanent strength — skin sutures merely evert edges.',
  ),

  'scar-revision': ps(
    'scar-revision', 'Scar Revision', 'wound-management',
    'Surgical and non-surgical techniques to improve the appearance, texture, and orientation of unfavorable scars.',
    ['Wide, hypertrophic, or depressed scars', 'Scars crossing relaxed skin tension lines or joint creases', 'Trap-door or pin-cushion deformity', 'Keloid scars', 'Functional contracture from scar tissue'],
    ['Fusiform excision and reorientation along RSTL', 'Z-plasty for reorientation and lengthening (75% gain with 60-degree angles)', 'W-plasty (running W) to break up linear scars into irregular pattern', 'Geometric broken-line closure (GBLC) for long linear scars', 'Adjuncts: dermabrasion, fractional CO2 laser, silicone sheeting, steroid injection (TAC 10-40 mg/mL)'],
    ['Recurrence of hypertrophic scarring or keloid', 'Worse scar than original', 'Skin color or texture mismatch', 'Steroid injection side effects (atrophy, telangiectasia, hypopigmentation)', 'Multiple revision procedures needed'],
    'Wait 12-18 months for scar maturation before surgical revision. Post-revision: silicone sheeting for 3-6 months, sun protection for 12 months. Keloids may require adjuvant radiation within 24 hours of excision.',
    'A scar cannot be erased, only exchanged for a more favorable one; the goal is to reorient scars into RSTL, break up straight lines into irregular patterns, and manage the biologic healing response.',
  ),

  // ===== MOHS (1) ============================================================

  'mohs-reconstruction': ps(
    'mohs-reconstruction', 'Mohs Micrographic Surgery Reconstruction', 'reconstructive',
    'Reconstruction of surgical defects after Mohs excision of skin cancer; defect analysis and reconstructive plan based on location, size, and tissue availability.',
    ['Post-Mohs defects of the nose, eyelid, ear, lip, and scalp', 'Defects requiring restoration of aesthetic subunit integrity', 'Large defects not amenable to secondary intention or primary closure', 'Defects exposing cartilage, bone, or vital structures', 'Functional defects threatening nasal airway, lip competence, or eyelid closure'],
    ['Defect analysis: location, size, depth, adjacent structures, tissue laxity', 'Healing by secondary intention for concave surfaces (medial canthus, ear concavity)', 'Primary closure when defect falls within RSTL and tissue is lax', 'Local flaps: bilobed (nasal tip), rhombic (cheek), V-Y (lip), forehead (paramedian for nose)', 'Skin grafts: FTSG for shallow defects, composite grafts for alar rim'],
    ['Flap necrosis (smoking is major risk factor)', 'Nasal airway compromise', 'Ectropion or eyelid malposition', 'Asymmetry and contour irregularity', 'Tumor recurrence at margins (rare with Mohs, <1%)'],
    'Wound care with ointment and non-adherent dressings. Suture removal at 5-7 days (face). Avoid aspirin/NSAIDs for 48 hours preoperatively. Sun protection for 12 months. Follow-up skin cancer surveillance.',
    'The aesthetic subunit principle guides nasal reconstruction: if >50% of a subunit is involved, excise the remainder and reconstruct the entire subunit for a superior cosmetic result.',
  ),

  // ===== PEDIATRIC PLASTIC (1) ===============================================

  'gender-affirming-surgery': ps(
    'gender-affirming-surgery', 'Gender-Affirming Surgery Principles', 'pediatric-plastic',
    'Spectrum of surgical procedures to align physical characteristics with gender identity; requires multidisciplinary evaluation and adherence to WPATH standards of care.',
    ['Persistent gender dysphoria meeting WPATH criteria', 'Completed appropriate hormone therapy duration per guidelines', 'Mental health professional documentation', 'Age-appropriate consent and evaluation', 'Medical optimization for major surgery'],
    ['Chest masculinization: double incision with free nipple graft or periareolar approach', 'Breast augmentation: subpectoral or prepectoral implant placement after hormonal breast development', 'Vaginoplasty: penile inversion technique with or without peritoneal flap for depth', 'Phalloplasty: radial forearm free flap or ALT flap with urethral lengthening', 'Facial feminization surgery: brow contouring, rhinoplasty, mandible reshaping, tracheal shave'],
    ['Wound healing complications (higher with smoking, diabetes)', 'Urethral stricture or fistula (phalloplasty, up to 25-50%)', 'Vaginal stenosis requiring dilation compliance (vaginoplasty)', 'Flap loss in phalloplasty (2-5%)', 'Need for multiple staged procedures and revisions'],
    'Recovery varies by procedure: 2-4 weeks for chest surgery, 6-12 weeks for genital reconstruction. Lifelong vaginal dilation after vaginoplasty. Staged phalloplasty may require 2-4 procedures over 12-18 months.',
    'Gender-affirming surgery requires a multidisciplinary team and adherence to WPATH criteria; phalloplasty has the highest complication rate in all of plastic surgery, and thorough patient counseling about the staged nature and expected revisions is essential.',
  ),

  // ===== MICROSURGERY PRINCIPLES (1) =========================================

  'microsurgery-principles': ps(
    'microsurgery-principles', 'Microsurgery Principles', 'microsurgery',
    'Foundational principles of microsurgical technique including vessel anastomosis, flap physiology, and monitoring; enables free tissue transfer and replantation.',
    ['Free flap reconstruction of any body region', 'Digital and extremity replantation', 'Lymphovenous bypass for lymphedema', 'Nerve repair and grafting', 'Vascularized bone transfer (fibula, scapula, iliac crest)'],
    ['Operating microscope at 6-25x magnification with 8-0 to 11-0 nylon sutures', 'Arterial anastomosis: end-to-end or end-to-side with interrupted sutures (6-10 sutures per anastomosis)', 'Venous anastomosis: end-to-end with suture or venous coupler device (faster, reliable)', 'Vessel preparation: adventitial stripping, gentle dilation, heparinized saline irrigation', 'No-touch technique: avoid intimal damage, prevent vasospasm with topical papaverine or lidocaine'],
    ['Arterial thrombosis (return to OR for revision within 4-6 hours)', 'Venous thrombosis (most common vascular complication in free flaps)', 'Vasospasm from mechanical or thermal injury', 'Hematoma compressing pedicle', 'Pedicle kink or torsion from malposition'],
    'Hourly flap checks for 48-72 hours (color, temperature, turgor, capillary refill, Doppler). Avoid vasoconstrictors, caffeine, nicotine. Warm room temperature. Systemic anticoagulation per surgeon protocol.',
    'Venous thrombosis is more common than arterial and presents with congestion (purple, turgid, brisk dark bleeding); a venous-to-arterial anastomosis ratio of 2:1 provides a safety margin against single-vein thrombosis.',
  ),
};

// ---------------------------------------------------------------------------
// Utility functions
// ---------------------------------------------------------------------------

export function getPlasticSurgeryEntry(id: string): PlasticSurgeryEntry | undefined {
  return PLASTIC_SURGERY_ENTRIES[id];
}

export function searchPlasticSurgery(query: string): PlasticSurgeryEntry[] {
  const q = query.toLowerCase();
  return Object.values(PLASTIC_SURGERY_ENTRIES).filter(e =>
    e.name.toLowerCase().includes(q) ||
    e.description.toLowerCase().includes(q) ||
    e.category.includes(q) ||
    e.indications.some(i => i.toLowerCase().includes(q)) ||
    e.technique.some(t => t.toLowerCase().includes(q)) ||
    e.keyPearl.toLowerCase().includes(q),
  );
}

export function getPlasticSurgeryByCategory(cat: PlasticSurgeryCategory): PlasticSurgeryEntry[] {
  return Object.values(PLASTIC_SURGERY_ENTRIES).filter(e => e.category === cat);
}

export function getPlasticSurgeryCount(): number {
  return Object.keys(PLASTIC_SURGERY_ENTRIES).length;
}
