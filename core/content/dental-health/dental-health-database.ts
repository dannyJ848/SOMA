/**
 * Dental Health Procedures & Treatments Database
 *
 * Comprehensive reference covering preventive, restorative, periodontal,
 * orthodontic, surgical, pediatric, emergency, and cosmetic dental care.
 * Educational content for the SOMA medical education platform.
 */

export type DentalCategory =
  | 'preventive'
  | 'restorative'
  | 'periodontal'
  | 'orthodontic'
  | 'surgical'
  | 'pediatric'
  | 'emergency'
  | 'cosmetic';

export interface DentalHealthEntry {
  id: string;
  name: string;
  nameEs: string;
  category: DentalCategory;
  description: string;
  indications: string[];
  procedure: string[];
  risks: string[];
  aftercare: string[];
  patientExplanation: string;
}

// Compact helper
const dh = (
  id: string,
  name: string,
  nameEs: string,
  category: DentalCategory,
  description: string,
  indications: string[],
  procedure: string[],
  risks: string[],
  aftercare: string[],
  patientExplanation: string,
): DentalHealthEntry => ({
  id, name, nameEs, category, description, indications, procedure, risks, aftercare, patientExplanation,
});

// Database — 30 entries
export const DENTAL_HEALTH_ENTRIES: Record<string, DentalHealthEntry> = {

  // === PREVENTIVE (4) ===

  'prophylaxis-cleaning': dh(
    'prophylaxis-cleaning',
    'Dental Prophylaxis (Professional Cleaning)',
    'Profilaxis Dental (Limpieza Profesional)',
    'preventive',
    'Routine professional cleaning performed by a dental hygienist to remove plaque, calculus (tarite), and superficial stains from tooth surfaces above the gumline. Typically recommended every six months for patients with healthy gums.',
    ['Routine maintenance for patients with healthy periodontium', 'Mild plaque or calculus build-up', 'Stain removal from dietary or lifestyle factors', 'Patients completing orthodontic treatment'],
    ['Ultrasonic or hand-scaling instruments remove calculus from all tooth surfaces.', 'Polishing paste is applied with a rotating rubber cup to remove residual plaque and stains.', 'Interdental areas are flossed.', 'Fluoride varnish or rinse is applied.', 'Oral hygiene instruction is provided.'],
    ['Temporary gingival sensitivity or minor bleeding', 'Rare enamel micro-abrasion from overly aggressive polishing', 'Transient tooth sensitivity to cold after cleaning'],
    ['Avoid eating or drinking for 30 minutes after fluoride application.', 'Brush twice daily with fluoride toothpaste.', 'Floss daily.', 'Schedule next prophylaxis in six months.'],
    'A professional cleaning removes hardened build-up that regular brushing cannot. It helps prevent cavities and gum disease and keeps your smile fresh. Most people benefit from a cleaning every six months.',
  ),

  'dental-sealants': dh(
    'dental-sealants',
    'Dental Sealants',
    'Selladores Dentales',
    'preventive',
    'Thin, protective resin coatings applied to the occlusal (chewing) surfaces of premolars and molars to seal deep pits and fissures, significantly reducing caries risk in those areas.',
    ['Newly erupted permanent molars and premolars in children and adolescents', 'Deep pits and fissures prone to food impaction', 'High caries-risk patients of any age', 'Primary molars in high-risk pediatric patients'],
    ['The tooth is cleaned and dried thoroughly.', 'An acid-etch solution is applied for 15–30 seconds to roughen the enamel surface.', 'The etchant is rinsed and the tooth is dried again.', 'Sealant resin is painted onto the pits and fissures.', 'A curing light is applied for 20–40 seconds to polymerize the material.', 'Occlusion is checked and adjusted if necessary.'],
    ['Loss or partial loss of sealant material over time', 'Potential for decay underneath an improperly placed sealant', 'Rare allergic reaction to resin components'],
    ['Avoid chewing sticky or hard foods on sealed teeth for 24 hours.', 'Continue brushing and flossing normally.', 'Have sealants checked at regular dental visits and reapplied if worn.'],
    'Sealants are a thin protective coating painted onto the grooves of back teeth. They act as a barrier against cavity-causing bacteria. The procedure is quick, painless, and can prevent most cavities on chewing surfaces.',
  ),

  'fluoride-treatment': dh(
    'fluoride-treatment',
    'Professional Fluoride Treatment',
    'Tratamiento Profesional con Flúor',
    'preventive',
    'Topical application of high-concentration fluoride (varnish, gel, or foam) to tooth surfaces to enhance remineralization of enamel, inhibit bacterial acid production, and reduce demineralization. Provides substantially higher fluoride exposure than over-the-counter products.',
    ['Children and adolescents during tooth development', 'Adults with high caries risk or active decay', 'Patients with xerostomia (dry mouth)', 'Exposed root surfaces in older adults', 'Post-orthodontic treatment to strengthen enamel'],
    ['Teeth are cleaned and dried.', 'Fluoride varnish is painted on all tooth surfaces with a small brush, or fluoride gel/foam is placed in trays and held against teeth for 1–4 minutes.', 'Excess material is removed.', 'Patient is instructed not to eat, drink, or rinse for 30 minutes.'],
    ['Nausea if excessive fluoride is ingested', 'Temporary white spots in cases of overexposure (rare in professional settings)', 'Mild discomfort from tray application'],
    ['Do not eat, drink, brush, or floss for at least 30 minutes.', 'Spit out any residual material rather than swallowing.', 'Continue normal oral hygiene routine after the waiting period.', 'Apply every 3–6 months depending on risk level.'],
    'Fluoride treatments strengthen the outer layer of your teeth and help reverse very early signs of decay. Think of it as a protective shield that makes your enamel harder and more resistant to cavity-causing acids.',
  ),

  'oral-cancer-screening-exam': dh(
    'oral-cancer-screening-exam',
    'Oral Cancer Screening',
    'Detección de Cáncer Oral',
    'preventive',
    'Systematic visual and tactile examination of the oral cavity, oropharynx, head, and neck to detect potentially malignant lesions at the earliest possible stage. May include adjunctive aids such as autofluorescence or cytologic brushing.',
    ['Routine screening during dental check-ups', 'Patients with tobacco or alcohol use history', 'Prior history of oral or head and neck cancer', 'Persistent oral lesions lasting more than two weeks', 'Patients over age 40 with additional risk factors'],
    ['Extraoral examination of head, neck, and lymph nodes by visual inspection and palpation.', 'Intraoral examination of lips, buccal mucosa, gingiva, hard and soft palate, tongue (dorsal, ventral, lateral), and floor of mouth.', 'Suspicious lesions are documented with photography and measurements.', 'Adjunctive screening tools (autofluorescence, toluidine blue) may be used.', 'Biopsy is arranged for any suspicious lesion.'],
    ['False positives causing patient anxiety', 'False negatives if exam is incomplete or lesion is in a difficult location', 'Minimal physical risk from the screening itself'],
    ['Report any changes in oral tissues between visits.', 'Cease tobacco and limit alcohol use.', 'Maintain follow-up schedule for any monitored lesions.', 'Perform monthly self-examinations of the oral cavity.'],
    'During your visit, the dentist carefully checks your mouth, tongue, throat, and neck for any unusual lumps, sores, or color changes. Finding problems early greatly improves treatment success. This quick, painless check could save your life.',
  ),

  // === RESTORATIVE (4) ===

  'composite-filling': dh(
    'composite-filling',
    'Composite Resin Filling',
    'Obturación de Resina Compuesta',
    'restorative',
    'Tooth-colored resin material bonded directly to prepared tooth structure to restore teeth affected by caries, fracture, or wear. The material is sculpted, light-cured, and polished to mimic natural tooth anatomy and color.',
    ['Small to moderate-sized cavities', 'Anterior teeth requiring aesthetic restoration', 'Replacement of defective or discolored amalgam restorations', 'Minor chipped or fractured teeth', 'Closing small diastemas'],
    ['Local anesthesia is administered if needed.', 'Decayed or damaged tooth structure is removed with a bur.', 'The cavity is cleaned and an adhesive bonding agent is applied.', 'Composite resin is placed in incremental layers, each cured with a light for 20–40 seconds.', 'The restoration is shaped to match natural tooth anatomy.', 'Occlusion is checked and the filling is polished.'],
    ['Post-operative sensitivity, especially to cold', 'Potential for microleakage at the tooth-restoration interface', 'Composite may stain or discolor over time', 'Lower longevity than amalgam in high-stress posterior areas', 'Secondary caries at margins if hygiene is poor'],
    ['Sensitivity may persist for several days to weeks; contact your dentist if it worsens.', 'Avoid very hard foods on the restoration for 24 hours.', 'Brush and floss normally.', 'Limit staining beverages (coffee, tea, red wine) for 48 hours.'],
    'A tooth-colored filling blends in with your natural teeth and restores the tooth after a cavity is removed. It bonds directly to your tooth, so less healthy tooth structure needs to be removed compared to older metal fillings.',
  ),

  'dental-crown': dh(
    'dental-crown',
    'Dental Crown (Cap)',
    'Corona Dental (Funda)',
    'restorative',
    'Full-coverage restoration that encases the entire visible portion of a tooth above the gumline. Made from porcelain, ceramic, metal alloy, or porcelain-fused-to-metal (PFM), crowns restore structural integrity, function, and appearance to severely damaged teeth.',
    ['Extensive caries that cannot be restored with a direct filling', 'Tooth fracture or cracking compromising structural integrity', 'Post-root canal therapy on posterior teeth', 'Replacement of a failing large restoration', 'Abutment tooth for a fixed bridge', 'Cosmetic improvement of a severely discolored or misshapen tooth'],
    ['Local anesthesia is administered.', 'The tooth is prepared by reducing 1–2 mm of structure on all surfaces.', 'An impression or digital scan is taken.', 'A shade is selected to match adjacent teeth.', 'A temporary crown is fabricated and cemented.', 'The permanent crown is fabricated in a dental lab (or same-day with CAD/CAM).', 'At the second visit, the temporary is removed and the permanent crown is tried in, adjusted, and cemented.'],
    ['Sensitivity to heat and cold after preparation', 'Potential for nerve damage requiring future root canal', 'Crown loosening or debonding', 'Porcelain chipping or fracture', 'Gingival recession around the crown margin', 'Allergic reaction to metal alloys (rare)'],
    ['Avoid sticky or very hard foods until permanent crown is placed.', 'Keep temporary crown clean; brush gently.', 'Do not floss aggressively around a temporary crown to avoid dislodging it.', 'After permanent cementation, resume normal oral hygiene.', 'Contact dentist if bite feels high or if persistent pain develops.'],
    'A crown is a custom-made cap that fits over your entire tooth to restore its shape, strength, and appearance. When a tooth is too damaged for a filling, a crown holds everything together and lets you chew normally again.',
  ),

  'root-canal-therapy': dh(
    'root-canal-therapy',
    'Root Canal Therapy (Endodontic Treatment)',
    'Tratamiento de Conducto Radicular (Endodoncia)',
    'restorative',
    'Removal of infected or necrotic pulp tissue from within the root canal system of a tooth, followed by cleaning, shaping, disinfection, and obturation (filling) of the canals. Preserves the natural tooth and eliminates infection.',
    ['Irreversible pulpitis (severe, spontaneous toothache)', 'Pulp necrosis from deep caries or trauma', 'Periapical abscess or granuloma', 'Tooth required as an abutment for a prosthesis', 'Traumatic pulp exposure in a mature tooth'],
    ['Local anesthesia and rubber dam isolation.', 'Access cavity is created through the crown of the tooth.', 'Pulp tissue is removed with endodontic files.', 'Canals are measured with an apex locator and radiographs.', 'Canals are cleaned and shaped with rotary or hand files using irrigation (sodium hypochlorite).', 'Canals are dried and filled with gutta-percha and sealer.', 'The access cavity is sealed with a temporary or permanent restoration.', 'A crown is typically recommended for posterior teeth.'],
    ['Post-treatment pain or swelling (usually self-limiting)', 'Instrument fracture within the canal', 'Incomplete removal of infected tissue leading to persistent infection', 'Root perforation during instrumentation', 'Tooth fracture if crown placement is delayed', 'Re-infection if coronal seal is compromised'],
    ['Take prescribed analgesics as directed; ibuprofen is often effective.', 'Avoid chewing on the treated tooth until a permanent restoration is placed.', 'Complete any prescribed antibiotic course.', 'Return for the crown or permanent restoration promptly.', 'Contact dentist if swelling increases, pain intensifies, or temporary filling dislodges.'],
    'A root canal saves a badly infected tooth by removing the inflamed nerve inside and sealing the space. Despite its reputation, modern root canal treatment is comparable to getting a filling. Keeping your natural tooth is almost always better than extracting it.',
  ),

  'inlay-onlay': dh(
    'inlay-onlay',
    'Inlay / Onlay (Indirect Restoration)',
    'Incrustación / Onlay (Restauración Indirecta)',
    'restorative',
    'Lab-fabricated or CAD/CAM-milled restorations made from porcelain, composite resin, or gold that fit within (inlay) or over (onlay) the prepared cavity of a tooth. They are more conservative than crowns and stronger than direct fillings for moderate-to-large restorations.',
    ['Moderate to large cavities where a direct filling may lack durability', 'Replacement of a large, failing amalgam or composite restoration', 'Cuspal fracture where full crown coverage is not yet necessary', 'Patient preference for a more conservative alternative to a crown'],
    ['Local anesthesia is administered and decay or old restorative material is removed.', 'The preparation is refined with smooth, divergent walls.', 'An impression or digital scan is taken.', 'A provisional restoration is placed.', 'The lab fabricates the inlay or onlay.', 'At the second visit, the provisional is removed, the restoration is tried in, and occlusion is verified.', 'The restoration is bonded or cemented in place and polished.'],
    ['Post-operative sensitivity', 'Fracture of porcelain material under excessive force', 'Debonding of the restoration', 'Secondary caries at margins', 'Requires two appointments (unless using same-day CAD/CAM)'],
    ['Avoid hard or sticky foods for 24 hours.', 'Sensitivity to temperature is normal for the first week.', 'Maintain thorough oral hygiene around the restoration margins.', 'Attend regular check-up appointments for the restoration to be evaluated.'],
    'An inlay or onlay is a custom-made piece that fits into or over the damaged area of your tooth like a puzzle piece. It is stronger than a regular filling but removes less healthy tooth structure than a full crown — a great middle-ground option.',
  ),

  // === PERIODONTAL (4) ===

  'scaling-root-planing': dh(
    'scaling-root-planing',
    'Scaling and Root Planing (Deep Cleaning)',
    'Raspado y Alisado Radicular (Limpieza Profunda)',
    'periodontal',
    'Non-surgical periodontal therapy involving removal of plaque, calculus, and bacterial toxins from tooth surfaces and root surfaces below the gumline, followed by smoothing (planing) of root surfaces to promote gingival reattachment.',
    ['Chronic periodontitis with probing depths of 4 mm or greater', 'Calculus deposits detected subgingivally on radiographs', 'Bleeding on probing with clinical attachment loss', 'Initial therapy before periodontal surgery evaluation'],
    ['Local anesthesia is administered to the treatment quadrant(s).', 'Ultrasonic scalers break up heavy calculus deposits.', 'Hand curettes remove remaining calculus and diseased cementum from root surfaces.', 'Root surfaces are planed smooth to remove bacterial endotoxins.', 'The area is irrigated with antimicrobial solution.', 'The procedure may be completed in 1–4 visits depending on severity.'],
    ['Post-procedure sensitivity and soreness lasting several days', 'Gingival recession may become more apparent as inflammation resolves', 'Temporary tooth sensitivity to temperature', 'Rarely, bacteremia requiring antibiotic prophylaxis in at-risk patients'],
    ['Use a soft-bristled toothbrush for 1–2 weeks.', 'Rinse with prescribed chlorhexidine mouthwash for two weeks.', 'Take analgesics as needed for discomfort.', 'Avoid hard, crunchy, or spicy foods for 48 hours.', 'Return for re-evaluation in 4–6 weeks.'],
    'A deep cleaning goes below the gumline to remove hardened bacteria that regular cleaning cannot reach. By smoothing the root surfaces, your gums can reattach more tightly, shrinking the pockets where bacteria hide. This is the first step in treating gum disease.',
  ),

  'periodontal-maintenance': dh(
    'periodontal-maintenance',
    'Periodontal Maintenance',
    'Mantenimiento Periodontal',
    'periodontal',
    'Ongoing supportive care for patients who have been treated for periodontal disease. Performed at intervals of 3–4 months, it includes thorough debridement, assessment of periodontal status, and reinforcement of oral hygiene. It replaces routine prophylaxis for periodontitis patients.',
    ['History of treated periodontitis', 'Post-scaling and root planing follow-up', 'Post-periodontal surgery maintenance', 'Patients with controlled but persistent periodontal pocketing'],
    ['Periodontal probing depths are measured and recorded.', 'Bleeding on probing and mobility are assessed.', 'Radiographs are taken periodically to evaluate bone levels.', 'Supra- and subgingival scaling and debridement are performed.', 'Localized site-specific therapy is applied to any recurring pockets.', 'Oral hygiene instruction is reinforced.'],
    ['Disease recurrence if maintenance intervals are not kept', 'Continued bone loss despite maintenance (in refractory cases)', 'Gingival discomfort during subgingival debridement'],
    ['Maintain meticulous daily oral hygiene (brush, floss, interdental aids).', 'Keep all scheduled maintenance appointments — intervals should not exceed 4 months.', 'Report any signs of recurrence: bleeding, swelling, or loose teeth.', 'Cease tobacco use, which significantly impairs periodontal healing.'],
    'Once gum disease has been treated, regular maintenance visits every 3–4 months help keep it from coming back. Think of it like ongoing care for a chronic condition — consistent attention prevents further damage to the bone and gums that support your teeth.',
  ),

  'gingival-graft': dh(
    'gingival-graft',
    'Gingival (Gum) Graft',
    'Injerto Gingival (de Encía)',
    'periodontal',
    'Surgical procedure to augment areas of gingival recession by transplanting soft tissue — typically from the palate (connective tissue graft or free gingival graft) or from an allograft/xenograft matrix — to cover exposed root surfaces and increase the width of attached gingiva.',
    ['Root sensitivity from gingival recession', 'Progressive recession threatening tooth longevity', 'Aesthetic concerns from uneven gumline', 'Inadequate width of keratinized (attached) gingiva', 'Pre-prosthetic preparation'],
    ['Local anesthesia is administered at both the recipient and donor sites.', 'A recipient bed is prepared at the recession site.', 'Donor tissue is harvested from the palate or an allograft material is prepared.', 'The graft is positioned over the exposed root and sutured in place.', 'A periodontal dressing may be applied to protect the site.'],
    ['Post-operative pain and swelling at both donor and recipient sites', 'Graft failure or partial necrosis', 'Scarring at the palatal donor site', 'Temporary altered sensation or numbness', 'Infection at the surgical site', 'Incomplete root coverage'],
    ['Apply ice packs to the face over the surgical area for 24–48 hours.', 'Eat soft, cool foods for 1–2 weeks; avoid the surgical side.', 'Do not brush or floss the grafted area for 2–4 weeks.', 'Use prescribed chlorhexidine rinse.', 'Take analgesics and antibiotics as prescribed.', 'Avoid strenuous physical activity for 1 week.'],
    'A gum graft rebuilds tissue where your gums have receded. Tissue from the roof of your mouth (or a donor source) is placed over the exposed root. This protects the root from sensitivity and decay and improves the appearance of your smile.',
  ),

  'pocket-reduction-surgery': dh(
    'pocket-reduction-surgery',
    'Pocket Reduction Surgery (Osseous Surgery)',
    'Cirugía de Reducción de Bolsas (Cirugía Ósea)',
    'periodontal',
    'Surgical access to root surfaces and underlying alveolar bone to eliminate deep periodontal pockets that have not responded to non-surgical therapy. Diseased tissue is removed, bone defects are recontoured or grafted, and the gingiva is repositioned to reduce pocket depth.',
    ['Persistent periodontal pockets ≥ 5 mm after scaling and root planing', 'Angular bone defects amenable to regenerative procedures', 'Furcation involvement in multi-rooted teeth', 'Areas inaccessible to non-surgical instrumentation'],
    ['Local anesthesia is administered.', 'A flap incision is made and the gingiva is reflected to expose bone and root surfaces.', 'Granulation tissue is debrided and root surfaces are thoroughly scaled and planed.', 'Bone defects are recontoured (osteoplasty/ostectomy) or filled with bone graft material.', 'Guided tissue regeneration membranes may be placed.', 'The flap is repositioned and sutured.', 'A periodontal dressing is placed.'],
    ['Post-surgical pain, swelling, and bruising', 'Increased tooth sensitivity from root exposure', 'Gingival recession resulting in longer-appearing teeth', 'Infection or delayed healing', 'Transient or permanent paresthesia if nerves are affected', 'Root resorption (rare)'],
    ['Apply ice packs for the first 48 hours.', 'Take prescribed pain medications and antibiotics.', 'Maintain a soft diet for 1–2 weeks.', 'Avoid brushing or flossing the surgical site for 2 weeks; use chlorhexidine rinse instead.', 'Avoid smoking, which severely compromises healing.', 'Return for suture removal in 7–10 days and follow-up at 4–6 weeks.'],
    'Pocket reduction surgery lets your dentist access areas deep under the gums that cleaning alone cannot reach. By reshaping the bone and reducing pocket depth, bacteria have fewer places to hide, and your daily home care becomes much more effective at keeping gum disease controlled.',
  ),

  // === ORTHODONTIC (4) ===

  'traditional-braces': dh(
    'traditional-braces',
    'Traditional Metal Braces',
    'Brackets Metálicos Tradicionales',
    'orthodontic',
    'Fixed orthodontic appliances consisting of metal brackets bonded to each tooth and connected by archwires. Controlled forces move teeth progressively into ideal alignment, correcting malocclusion, crowding, spacing, and bite relationships over 12–36 months.',
    ['Class I, II, or III malocclusion', 'Dental crowding or spacing', 'Overbite, underbite, crossbite, or open bite', 'Impacted teeth requiring guided eruption', 'Pre-surgical orthodontic alignment'],
    ['Brackets are bonded to the labial surface of each tooth with composite adhesive.', 'An initial archwire is placed and secured with elastic or metal ligatures.', 'Periodic appointments (every 4–8 weeks) include wire changes and adjustments.', 'Elastics, springs, or auxiliary appliances are added as treatment progresses.', 'Brackets are debonded at the completion of treatment.', 'Retainers are fabricated and delivered.'],
    ['Tooth soreness after adjustments (typically 2–5 days)', 'Enamel demineralization (white spots) with poor oral hygiene', 'Root resorption from prolonged force application', 'Bracket or wire breakage', 'Soft tissue irritation from brackets or wires', 'Relapse without consistent retainer use'],
    ['Use orthodontic wax on brackets causing irritation.', 'Take over-the-counter analgesics for soreness after adjustments.', 'Avoid hard, sticky, and chewy foods.', 'Brush after every meal using an orthodontic toothbrush and floss threaders.', 'Wear elastics as prescribed.', 'Wear retainers as directed after debonding.'],
    'Metal braces use brackets and wires to gradually move your teeth into proper alignment. While adjustments may cause temporary soreness, the end result is a healthier bite and straighter smile. Good oral hygiene during treatment is essential to avoid white spots on your teeth.',
  ),

  'clear-aligners': dh(
    'clear-aligners',
    'Clear Aligners (e.g., Invisalign)',
    'Alineadores Transparentes (ej., Invisalign)',
    'orthodontic',
    'Series of custom-fabricated, removable, clear thermoplastic trays that sequentially reposition teeth in small increments. Each aligner is worn for 1–2 weeks before advancing to the next. Suitable for mild to moderate malocclusion with the advantage of near-invisibility.',
    ['Mild to moderate crowding or spacing', 'Minor rotations and tipping corrections', 'Relapse after previous orthodontic treatment', 'Adult patients prioritizing aesthetics during treatment', 'Some cases of open bite, overbite, or crossbite'],
    ['Digital impressions or PVS impressions and photographs are taken.', 'A virtual treatment plan (ClinCheck or equivalent) is designed and approved.', 'A series of custom aligners is manufactured.', 'Tooth-colored composite attachments are bonded to specific teeth to facilitate movement.', 'Patient wears each aligner for 20–22 hours per day, changing every 1–2 weeks.', 'Progress is monitored every 6–10 weeks.', 'Refinement aligners are ordered if needed.', 'Retainers are provided at treatment completion.'],
    ['Treatment may take longer than braces for complex cases', 'Non-compliance (not wearing aligners enough) leads to poor results', 'Attachments may be visible and occasionally debond', 'Mild speech alteration during initial adaptation', 'Temporary tooth soreness when changing to a new aligner'],
    ['Wear aligners 20–22 hours per day — only remove for eating, drinking (anything other than water), and oral hygiene.', 'Clean aligners with lukewarm water and a soft toothbrush; avoid hot water.', 'Brush and floss after every meal before reinserting aligners.', 'Store aligners in their case when not in use.', 'Advance to the next set on schedule.', 'Wear retainers as directed after completion.'],
    'Clear aligners are custom-made, nearly invisible trays that gently shift your teeth over time. You can remove them to eat and brush, which makes oral hygiene easier. Success depends on wearing them at least 20 hours every day.',
  ),

  'palatal-expander': dh(
    'palatal-expander',
    'Palatal Expander (Rapid Maxillary Expansion)',
    'Expansor Palatino (Expansión Maxilar Rápida)',
    'orthodontic',
    'Fixed or removable orthodontic appliance placed across the palate to widen the upper jaw (maxilla) by separating the midpalatal suture. Most effective in growing children and adolescents whose suture has not yet fused.',
    ['Maxillary transverse deficiency (narrow upper jaw)', 'Posterior crossbite', 'Crowding caused by inadequate arch width', 'Mouth-breathing related to narrow nasal passages', 'Early intervention in mixed dentition to create space'],
    ['Bands or bonded components are fitted to the upper first premolars and/or first molars.', 'The expansion screw is connected across the palate.', 'The patient or parent activates the screw with a key (typically 1–2 quarter-turns daily).', 'Active expansion continues for 2–4 weeks until desired width is achieved.', 'The appliance remains passively in place for 3–6 months to allow bone to fill the expanded suture.', 'The expander is removed and orthodontic treatment continues as needed.'],
    ['Midpalatal discomfort and pressure during activation', 'Temporary diastema (gap) between the upper central incisors', 'Difficulty speaking and swallowing initially', 'Tissue irritation from the appliance', 'Relapse if retention period is insufficient', 'Rare asymmetric expansion'],
    ['Activate the screw exactly as prescribed — do not skip or add extra turns.', 'Maintain excellent oral hygiene around the appliance; use a water flosser if needed.', 'Eat soft foods during the initial days.', 'Use orthodontic wax for any areas of irritation.', 'The gap between front teeth is expected and will close naturally or with braces.', 'Keep all follow-up appointments.'],
    'A palatal expander gently widens your upper jaw over a few weeks. A small key is turned daily to activate the device. You may feel pressure and notice a gap between your front teeth — both are normal signs it is working. The gap will close once expansion is complete.',
  ),

  'orthodontic-retainer': dh(
    'orthodontic-retainer',
    'Orthodontic Retainer',
    'Retenedor Ortodóntico',
    'orthodontic',
    'Appliance worn after active orthodontic treatment to maintain teeth in their corrected positions while surrounding bone and soft tissue stabilize. Types include removable (Hawley, clear/Essix) and fixed (bonded lingual wire) retainers.',
    ['Completion of orthodontic treatment with braces or aligners', 'Post-surgical orthodontic stabilization', 'Prevention of relapse from residual growth or periodontal forces'],
    ['Final records (impressions or digital scans, photographs, radiographs) are taken.', 'For removable retainers: an impression or scan is taken and the retainer is fabricated and fitted.', 'For fixed retainers: a stainless-steel wire is bonded to the lingual surfaces of the anterior teeth.', 'The patient is instructed on wear schedule — typically full-time initially, transitioning to nighttime only.', 'Follow-up appointments confirm fit and retention.'],
    ['Relapse if retainer wear instructions are not followed', 'Retainer breakage or loss', 'Calculus accumulation around fixed retainers if hygiene is inadequate', 'Speech alteration during initial wear', 'Allergic reaction to retainer material (very rare)'],
    ['Wear the retainer exactly as instructed — full-time for the first 3–6 months, then nightly for years (or indefinitely).', 'Clean removable retainers daily with a soft brush and mild soap; avoid hot water.', 'Floss carefully around fixed retainers using threaders or a water flosser.', 'Store removable retainers in their case — never wrap them in a napkin.', 'Contact your orthodontist immediately if the retainer breaks or teeth begin shifting.'],
    'Retainers keep your teeth in their new positions after braces or aligners are removed. Without consistent retainer wear, teeth tend to drift back to their original positions. Most people need to wear a retainer at night for many years — or even for life — to maintain their results.',
  ),

  // === SURGICAL (4) ===

  'simple-extraction': dh(
    'simple-extraction',
    'Simple Tooth Extraction',
    'Extracción Dental Simple',
    'surgical',
    'Removal of a fully erupted, visible tooth using forceps and elevators without the need for surgical flap creation or bone removal. Performed under local anesthesia on teeth that are accessible and have intact root morphology.',
    ['Severe caries rendering a tooth non-restorable', 'Advanced periodontal disease with significant bone loss', 'Orthodontic treatment requiring space (e.g., premolar extraction)', 'Fractured tooth with sufficient clinical crown for forceps engagement', 'Supernumerary (extra) teeth'],
    ['Local anesthesia is administered.', 'A periosteal elevator loosens the gingival attachment.', 'An elevator (straight or paired) luxates the tooth within the socket.', 'Forceps appropriate to the tooth morphology grasp the tooth at the cervical line.', 'Controlled rotational and buccolingual movements expand the socket and deliver the tooth.', 'The socket is examined and irrigated; sharp bone edges are smoothed if present.', 'Hemostasis is achieved with gauze and pressure.'],
    ['Post-extraction pain and swelling', 'Dry socket (alveolar osteitis) — incidence 2–5% in routine extractions', 'Bleeding or hematoma', 'Infection of the extraction site', 'Damage to adjacent teeth or restorations', 'Root tip fracture requiring surgical retrieval'],
    ['Bite on gauze for 30–45 minutes to establish a blood clot.', 'Avoid spitting, straws, and smoking for 48–72 hours to protect the clot.', 'Apply ice packs to the face for 20 minutes on/off during the first 24 hours.', 'Take prescribed analgesics before anesthesia wears off.', 'Eat soft foods and avoid the extraction site when chewing.', 'Begin gentle saltwater rinses the day after extraction.', 'Contact dentist if pain worsens after 3 days (possible dry socket).'],
    'During a simple extraction, the dentist numbs the area and gently loosens and removes the tooth. Most patients feel pressure but no sharp pain. The key to smooth healing is protecting the blood clot that forms in the socket — avoid straws, smoking, and spitting for a few days.',
  ),

  'surgical-wisdom-tooth': dh(
    'surgical-wisdom-tooth',
    'Surgical Wisdom Tooth Extraction',
    'Extracción Quirúrgica de Muela del Juicio',
    'surgical',
    'Surgical removal of impacted or partially erupted third molars that cannot be extracted with simple forceps technique. Involves soft tissue flap elevation, possible bone removal, and occasionally tooth sectioning to facilitate extraction.',
    ['Partial or complete bony impaction of third molars', 'Pericoronitis (infection of the gum tissue overlying a partially erupted wisdom tooth)', 'Caries or pathology affecting the wisdom tooth or adjacent second molar', 'Cyst or tumor associated with an impacted third molar', 'Orthodontic treatment planning', 'Prophylactic removal to prevent future complications'],
    ['Anesthesia is administered (local with sedation, or general anesthesia).', 'A mucoperiosteal flap is raised.', 'Bone overlying the impacted tooth is removed with a handpiece and bur.', 'The tooth may be sectioned into fragments for easier removal.', 'The tooth and fragments are elevated and delivered.', 'The socket is curetted and irrigated thoroughly.', 'The flap is repositioned and sutured.'],
    ['Swelling, bruising, and trismus (limited jaw opening) lasting 5–10 days', 'Dry socket (higher incidence than simple extractions)', 'Paresthesia of the inferior alveolar nerve or lingual nerve (numbness of lip, chin, or tongue)', 'Infection or abscess formation', 'Damage to the adjacent second molar', 'Oroantral communication if upper wisdom tooth roots are near the maxillary sinus', 'Mandibular fracture (very rare)'],
    ['Apply ice packs to the face for 48 hours (20 minutes on, 20 minutes off).', 'Bite on gauze for 30–45 minutes; replace if bleeding continues.', 'Take prescribed antibiotics and pain medications as directed.', 'Eat soft, cool foods (yogurt, smoothies, mashed potatoes) for 5–7 days.', 'Do not use straws, smoke, or spit for at least 72 hours.', 'Begin gentle saltwater rinses on day two.', 'Sleep with head elevated for 2–3 nights.', 'Return for suture removal in 7–10 days if non-resorbable sutures were placed.'],
    'Wisdom tooth surgery removes teeth that are stuck (impacted) under the gum or bone. You will be numb or sedated so you do not feel pain during the procedure. Expect swelling and a restricted diet for about a week. Following the aftercare instructions carefully is the best way to prevent complications.',
  ),

  'dental-implant-placement': dh(
    'dental-implant-placement',
    'Dental Implant Placement',
    'Colocación de Implante Dental',
    'surgical',
    'Surgical insertion of a titanium or zirconia fixture into the alveolar bone to serve as an artificial tooth root. After a healing period of 3–6 months (osseointegration), an abutment and prosthetic crown are attached to restore the missing tooth.',
    ['Single tooth replacement where adjacent teeth are healthy', 'Multiple missing teeth (implant-supported bridge)', 'Edentulous arch restoration (All-on-4, overdenture)', 'Patients who cannot tolerate removable dentures', 'Preservation of alveolar bone volume after extraction'],
    ['Pre-operative imaging (CBCT scan) and treatment planning.', 'Local anesthesia (with or without sedation) is administered.', 'A mid-crestal or slightly palatal incision is made and a flap is raised.', 'An osteotomy is prepared with sequential drills at low speed and copious irrigation.', 'The implant fixture is threaded into the osteotomy to the planned depth and torque.', 'A cover screw or healing abutment is placed.', 'The flap is sutured.', 'After 3–6 months of osseointegration, a second-stage procedure (if submerged) exposes the implant.', 'An impression is taken for fabrication of the abutment and crown.', 'The final prosthesis is delivered and occlusion is verified.'],
    ['Implant failure or non-integration (2–5% failure rate)', 'Infection (peri-implantitis)', 'Nerve damage (paresthesia of the inferior alveolar or mental nerve)', 'Sinus perforation for maxillary posterior implants', 'Damage to adjacent tooth roots', 'Bone loss around the implant over time', 'Prosthetic component fracture'],
    ['Apply ice packs for 48 hours and keep head elevated.', 'Take prescribed antibiotics and analgesics.', 'Eat soft foods for 1–2 weeks.', 'Do not smoke — smoking dramatically increases implant failure risk.', 'Rinse gently with chlorhexidine or saltwater starting the day after surgery.', 'Avoid disturbing the surgical site with your tongue or fingers.', 'Attend all follow-up appointments for healing assessment.', 'Maintain impeccable oral hygiene around the implant for its lifetime.'],
    'A dental implant is a small titanium post placed in your jawbone to replace a missing tooth root. Over several months, the bone fuses to the implant, creating a strong foundation. A custom crown is then attached, giving you a replacement that looks, feels, and functions like a natural tooth.',
  ),

  'apicoectomy': dh(
    'apicoectomy',
    'Apicoectomy (Root-End Surgery)',
    'Apicectomía (Cirugía Endodóntica)',
    'surgical',
    'Surgical endodontic procedure in which the apex (tip) of a tooth root is resected and a retrograde filling is placed after conventional root canal treatment has failed to resolve a periapical lesion. Preserves the tooth when retreatment is not feasible.',
    ['Persistent periapical pathology after adequate root canal treatment', 'Retreatment not possible due to post, core, or crown that cannot be removed', 'Suspected root fracture at the apex', 'Perforation or procedural error near the root tip', 'Biopsy of a periapical lesion for histopathologic diagnosis'],
    ['Local anesthesia is administered.', 'A surgical flap is elevated to expose the root apex and surrounding bone.', 'Bone overlying the apex is removed to expose the periapical lesion.', 'The lesion is curetted and sent for biopsy if indicated.', 'The root tip (approximately 3 mm) is resected with a perpendicular cut.', 'A retrograde cavity is prepared with ultrasonic tips.', 'A biocompatible retrograde filling (MTA or bioceramic) is placed.', 'The flap is repositioned and sutured.'],
    ['Post-operative swelling and bruising', 'Infection of the surgical site', 'Damage to adjacent anatomical structures (mental nerve, maxillary sinus)', 'Root fracture', 'Failure to resolve the periapical lesion', 'Tooth loss if the procedure is unsuccessful'],
    ['Apply ice packs for 48 hours.', 'Take prescribed antibiotics and analgesics.', 'Avoid brushing the surgical area for 1 week; use chlorhexidine rinse.', 'Eat soft foods for several days.', 'Do not lift the lip to inspect the site — this can disrupt healing.', 'Return for suture removal in 5–7 days.', 'Follow-up radiographs at 6 and 12 months to confirm healing.'],
    'An apicoectomy is a minor surgical procedure to treat a persistent infection at the tip of a tooth root, usually after a root canal has not fully resolved the problem. The infected tip is removed and sealed from the bottom. This can save a tooth that would otherwise need to be extracted.',
  ),

  // === PEDIATRIC (4) ===

  'pediatric-first-visit': dh(
    'pediatric-first-visit',
    'Pediatric First Dental Visit',
    'Primera Visita Dental Pediátrica',
    'pediatric',
    'Introductory dental appointment for infants and toddlers, recommended by age one or within six months of the first tooth erupting. Focused on oral examination, risk assessment, caregiver education, and establishing a dental home.',
    ['First tooth eruption (typically 6–12 months of age)', 'By the child\'s first birthday at the latest', 'Parental concern about oral development', 'High caries-risk family history'],
    ['The child is seated in the parent\'s lap or on the dental chair with parental support.', 'A visual and tactile examination of the teeth, gums, and oral soft tissues is performed.', 'Caries risk assessment is completed (diet history, fluoride exposure, oral hygiene habits).', 'Teeth are counted and eruption pattern is evaluated.', 'Gentle prophylaxis is performed if the child is cooperative.', 'Fluoride varnish is applied.', 'Caregiver education covers brushing, diet, bottle/pacifier use, and teething.'],
    ['Child anxiety or crying (expected and managed with tell-show-do techniques)', 'Minimal clinical risk from the examination itself', 'Nausea if fluoride is inadvertently ingested (very rare at varnish doses)'],
    ['Begin brushing with a rice-grain-sized smear of fluoride toothpaste twice daily.', 'Avoid putting the child to bed with a bottle of milk, juice, or formula.', 'Limit sugary snacks and drinks between meals.', 'Schedule the next visit in six months.', 'Wean from pacifier and bottle by age 12–18 months if possible.'],
    'Your child\'s first dental visit is a gentle introduction to the dental office. The dentist will check your baby\'s teeth and gums, look for any early concerns, and apply a fluoride treatment. Parents will receive guidance on brushing, diet, and habits to help keep those first teeth healthy.',
  ),

  'pulpotomy': dh(
    'pulpotomy',
    'Pulpotomy (Baby Tooth Nerve Treatment)',
    'Pulpotomía (Tratamiento de Nervio en Diente Temporal)',
    'pediatric',
    'Removal of the inflamed coronal pulp tissue of a primary (baby) tooth while preserving the vital radicular (root) pulp. A medicament (MTA, formocresol, or ferric sulfate) is placed over the remaining pulp, and the tooth is restored with a stainless-steel crown.',
    ['Deep caries in a primary molar with vital pulp exposure', 'Mechanical pulp exposure during caries removal in a primary tooth', 'Primary tooth with reversible pulpitis and no signs of radicular pathology', 'Tooth is needed as a space maintainer until natural exfoliation'],
    ['Local anesthesia and rubber dam isolation.', 'Caries is removed and the pulp chamber is accessed.', 'Coronal pulp tissue is removed with a spoon excavator or slow-speed bur.', 'Hemostasis of the radicular pulp is achieved with a cotton pellet and light pressure.', 'A medicament (MTA, ferric sulfate, or formocresol) is applied over the radicular pulp stumps.', 'The pulp chamber is filled with reinforced zinc oxide eugenol or glass ionomer.', 'The tooth is restored with a stainless-steel crown.'],
    ['Post-operative discomfort (usually mild)', 'Internal resorption (rare)', 'Infection if radicular pulp was non-vital', 'Premature exfoliation of the treated tooth', 'Discoloration of the treated tooth'],
    ['Give the child appropriate over-the-counter pain medication as needed.', 'The child should eat soft foods for 24 hours.', 'Resume normal brushing the next day.', 'Monitor for signs of infection: swelling, persistent pain, or a gum bubble (fistula).', 'Return for follow-up as scheduled.'],
    'A pulpotomy removes the infected part of the nerve inside your child\'s baby tooth while keeping the healthy root portion alive. A protective cap (stainless-steel crown) is placed to keep the tooth strong until it naturally falls out. This saves the tooth and holds space for the adult tooth growing underneath.',
  ),

  'space-maintainer': dh(
    'space-maintainer',
    'Space Maintainer',
    'Mantenedor de Espacio',
    'pediatric',
    'Fixed or removable orthodontic appliance placed after premature loss of a primary tooth to preserve the space needed for the permanent successor to erupt properly. Prevents adjacent teeth from drifting into the gap and causing crowding or impaction.',
    ['Premature loss of a primary molar before the permanent tooth is ready to erupt', 'Extraction of a primary tooth due to infection or trauma', 'Congenitally missing primary teeth', 'Loss of space already observed on radiograph'],
    ['Radiographs are taken to assess the developing permanent tooth.', 'An impression or scan is taken for appliance fabrication.', 'For a band-and-loop: a band is fitted on the adjacent tooth and a wire loop extends across the edentulous space.', 'The appliance is cemented with glass ionomer or resin cement.', 'The child is monitored at regular intervals until the permanent tooth erupts.', 'The space maintainer is removed once the permanent tooth begins to erupt.'],
    ['Cement washout and appliance dislodgment', 'Plaque accumulation around the band', 'Soft tissue irritation from the wire loop', 'Interference with eruption of the permanent tooth if not monitored', 'Swallowing or aspiration of a loose appliance (very rare)'],
    ['Avoid sticky foods (gum, caramels, taffy) that can dislodge the appliance.', 'Brush around the space maintainer carefully.', 'Do not push on the appliance with fingers or tongue.', 'Contact the dentist if the appliance becomes loose.', 'Keep all follow-up appointments so the appliance can be removed at the right time.'],
    'A space maintainer is a small metal device that holds the gap open after a baby tooth falls out too early. Without it, other teeth can drift into the space, blocking the adult tooth from coming in straight. It stays in place until the permanent tooth is ready to arrive.',
  ),

  'stainless-steel-crown': dh(
    'stainless-steel-crown',
    'Stainless Steel Crown (Pediatric)',
    'Corona de Acero Inoxidable (Pediátrica)',
    'pediatric',
    'Prefabricated metal crown adapted and cemented over a primary (baby) molar to restore a tooth with extensive caries, developmental defects, or after pulpotomy. Provides full-coverage protection until the tooth naturally exfoliates.',
    ['Extensive caries on multiple surfaces of a primary molar', 'Post-pulpotomy or pulpectomy restoration', 'Developmental enamel defects (hypoplasia, amelogenesis imperfecta) on primary teeth', 'Primary tooth fracture', 'High caries-risk child requiring durable restoration'],
    ['Local anesthesia is administered.', 'Caries is removed and the tooth is prepared by reducing the occlusal surface by 1–1.5 mm and proximal surfaces minimally.', 'An appropriately sized stainless-steel crown is selected and tried in.', 'The crown is trimmed and crimped to achieve a snug fit at the gingival margin.', 'The crown is cemented with glass ionomer cement.', 'Occlusion is verified.'],
    ['Gingival irritation if the crown margin is over-extended', 'Bite interference until adjustment', 'Cement failure requiring recementation', 'Nickel allergy (rare; zirconia crowns are an alternative)', 'Aesthetic concern due to silver color (not typically an issue for molars)'],
    ['The child may have mild gingival soreness for 1–2 days.', 'Resume normal brushing around the crowned tooth.', 'Floss normally on both sides of the crown.', 'Avoid sticky foods that could pull the crown off.', 'The crown will fall out naturally when the baby tooth exfoliates.'],
    'A stainless-steel crown is a silver cap placed over a baby tooth that has a large cavity or has had nerve treatment. It is strong enough to last until the baby tooth falls out on its own. Even though it looks metallic, it protects the tooth and keeps the space for the permanent tooth coming in behind it.',
  ),

  // === EMERGENCY (4) ===

  'avulsed-tooth-management': dh(
    'avulsed-tooth-management',
    'Avulsed (Knocked-Out) Tooth Management',
    'Manejo de Diente Avulsionado (Arrancado)',
    'emergency',
    'Emergency reimplantation protocol for a permanent tooth that has been completely displaced from its socket due to trauma. Time is critical — the best outcomes occur when the tooth is reimplanted within 30 minutes of avulsion.',
    ['Complete avulsion of a permanent tooth due to trauma', 'Tooth is intact and patient presents within 60 minutes'],
    ['Locate the tooth and handle it only by the crown — never touch the root surface.', 'If the root is visibly contaminated, gently rinse with saline or milk for no more than 10 seconds — do not scrub.', 'Attempt immediate reimplantation: gently push the tooth back into the socket with finger pressure.', 'If reimplantation is not possible, store the tooth in Hank\'s Balanced Salt Solution, cold milk, or the patient\'s saliva (inside the cheek).', 'Transport the patient to a dental office immediately.', 'The dentist repositions and splints the tooth to adjacent teeth with a flexible wire and composite for 2 weeks.', 'Root canal treatment is initiated 7–10 days after reimplantation.', 'Follow-up radiographs are taken at regular intervals to monitor for resorption.'],
    ['Pulp necrosis (expected; hence root canal treatment)', 'External root resorption (inflammatory or replacement)', 'Ankylosis (fusion of tooth root to bone)', 'Loss of the tooth despite treatment', 'Infection of the reimplanted tooth'],
    ['Take analgesics and antibiotics as prescribed.', 'Eat soft foods for 2 weeks.', 'Avoid biting directly on the splinted tooth.', 'Brush other teeth normally; use chlorhexidine rinse around the injured area.', 'Return for splint removal and root canal initiation as scheduled.', 'Attend all follow-up appointments — long-term monitoring is essential.'],
    'If a permanent tooth is knocked out, time is everything. Pick it up by the top (crown), not the root. If possible, push it gently back into the socket right away. If you cannot, place it in cold milk and get to a dentist within 30 minutes. Quick action gives the best chance of saving the tooth.',
  ),

  'dental-abscess-management': dh(
    'dental-abscess-management',
    'Dental Abscess Management',
    'Manejo de Absceso Dental',
    'emergency',
    'Urgent treatment of a localized collection of pus originating from a tooth (periapical abscess) or the gingiva (periodontal abscess). Involves establishing drainage, controlling infection, managing pain, and addressing the underlying cause.',
    ['Acute periapical abscess with swelling, pain, and/or fever', 'Acute periodontal abscess with purulent exudate', 'Swelling progressing toward fascial spaces (urgent referral required)', 'Immunocompromised patient with dental infection'],
    ['Clinical assessment and radiographic evaluation to identify the source.', 'Incision and drainage is performed if a fluctuant swelling is present.', 'For periapical abscess: emergency pulpotomy (opening the tooth) or extraction to establish drainage.', 'For periodontal abscess: subgingival debridement and irrigation.', 'Antibiotics are prescribed (amoxicillin first-line; clindamycin if penicillin-allergic).', 'Analgesics are prescribed or recommended.', 'Definitive treatment (root canal or extraction) is scheduled.'],
    ['Spread of infection to fascial spaces (Ludwig angina, orbital cellulitis, brain abscess)', 'Sepsis in immunocompromised patients', 'Airway compromise from rapidly progressing swelling', 'Antibiotic resistance or adverse reactions', 'Chronic fistula formation if untreated'],
    ['Take all prescribed antibiotics for the full course even if symptoms improve.', 'Use warm saltwater rinses (1 teaspoon salt in 8 oz warm water) several times daily.', 'Take analgesics on a scheduled basis (ibuprofen and acetaminophen can be alternated).', 'Keep head elevated when sleeping.', 'Return immediately if swelling worsens, fever increases, or difficulty swallowing or breathing develops.', 'Follow through with definitive treatment (root canal or extraction).'],
    'A dental abscess is a pocket of infection that causes severe pain and swelling. The most important step is draining the infection — either through the tooth or through the gum. Antibiotics help control the spread, but they cannot cure the abscess alone. You will need follow-up treatment to address the underlying cause.',
  ),

  'dental-trauma-fracture': dh(
    'dental-trauma-fracture',
    'Dental Trauma: Tooth Fracture Management',
    'Trauma Dental: Manejo de Fractura Dentaria',
    'emergency',
    'Emergency assessment and treatment of traumatic tooth fractures, ranging from minor enamel chips to extensive crown-root fractures exposing the pulp. Classification follows the Ellis system or the WHO/Andreasen classification.',
    ['Enamel fracture (Ellis I) — cosmetic concern or sharp edge', 'Enamel-dentin fracture without pulp exposure (Ellis II) — sensitivity and pain', 'Enamel-dentin fracture with pulp exposure (Ellis III) — bleeding from the tooth', 'Crown-root fracture extending below the gumline', 'Sports injuries, falls, or motor vehicle accidents'],
    ['Clinical and radiographic evaluation to classify the fracture and rule out root fracture or alveolar bone injury.', 'Ellis I: smooth sharp edges and apply bonding or composite if aesthetic.', 'Ellis II: cover exposed dentin with calcium hydroxide or glass ionomer and place composite restoration.', 'Ellis III: direct pulp cap (if exposure is small and recent) or pulpotomy/pulpectomy, followed by composite or crown.', 'Crown-root fractures may require crown lengthening surgery, orthodontic extrusion, or extraction depending on extent.', 'All trauma cases require follow-up radiographs to assess pulp vitality.'],
    ['Pulp necrosis (delayed, may occur weeks to years after trauma)', 'Root resorption', 'Discoloration of the injured tooth', 'Loss of tooth vitality requiring future root canal treatment', 'Aesthetic compromise'],
    ['Avoid biting on the injured tooth.', 'Eat soft foods for 1–2 weeks.', 'Take analgesics as needed.', 'Apply ice externally for swelling during the first 24 hours.', 'Attend all follow-up appointments — vitality testing at 3, 6, and 12 months is essential.', 'Wear a custom mouthguard during sports after healing.'],
    'A broken tooth needs prompt attention. Small chips can often be smoothed or repaired with bonding. If the break is deep enough to expose the nerve (you may see pink or red and feel sharp pain), treatment to protect the nerve is needed the same day. Follow-up visits are important because problems can develop even months later.',
  ),

  'emergency-toothache': dh(
    'emergency-toothache',
    'Emergency Toothache Management',
    'Manejo de Urgencia por Dolor de Muelas',
    'emergency',
    'Acute management of severe dental pain requiring urgent evaluation. Differential diagnosis includes irreversible pulpitis, periapical abscess, cracked tooth, periodontal abscess, and referred pain. Treatment is directed at the underlying etiology.',
    ['Severe, spontaneous dental pain disrupting sleep or daily function', 'Pain unresponsive to over-the-counter analgesics', 'Pain accompanied by swelling, fever, or trismus', 'Pain radiating to the ear, temple, or eye'],
    ['Comprehensive history of the pain (onset, location, character, aggravating/relieving factors).', 'Clinical examination including percussion, palpation, thermal testing, and transillumination.', 'Periapical and/or panoramic radiographs.', 'Pulp vitality testing (electric or cold test).', 'Definitive diagnosis is established.', 'Immediate treatment: pulpotomy for irreversible pulpitis, incision and drainage for abscess, occlusal adjustment for cracked tooth.', 'Analgesic and antibiotic prescriptions as indicated.', 'Definitive treatment (root canal, extraction, etc.) is scheduled.'],
    ['Misdiagnosis if referred pain, sinusitis, or cardiac pain mimics dental pathology', 'Risk of infection spread if treatment is delayed', 'Adverse reaction to analgesics or antibiotics', 'Progression to facial space infection or systemic sepsis'],
    ['Take prescribed medications on schedule — do not wait for pain to return before taking the next dose.', 'Alternate ibuprofen (400–600 mg) and acetaminophen (500–1000 mg) every 3–4 hours for synergistic pain control.', 'Rinse with warm salt water 3–4 times daily.', 'Avoid extremely hot, cold, or sweet foods on the affected side.', 'Return to the dentist promptly for definitive care.', 'Go to the emergency department if swelling worsens rapidly, fever exceeds 101 F, or difficulty breathing or swallowing develops.'],
    'Severe tooth pain usually means the nerve is inflamed or infected. While pain medication provides temporary relief, you need dental treatment to fix the underlying problem. Alternating ibuprofen and acetaminophen works well for dental pain. If swelling spreads to your face or you develop a fever, seek care immediately.',
  ),

  // === COSMETIC (6) ===

  'teeth-whitening': dh(
    'teeth-whitening',
    'Professional Teeth Whitening (Bleaching)',
    'Blanqueamiento Dental Profesional',
    'cosmetic',
    'Controlled application of hydrogen peroxide or carbamide peroxide to lighten the shade of natural teeth. In-office treatment uses higher concentrations with light or heat activation; take-home trays use lower concentrations over several weeks.',
    ['Extrinsic staining from coffee, tea, wine, or tobacco', 'Generalized intrinsic yellowing due to aging', 'Pre-cosmetic treatment to establish the lightest achievable shade', 'Patient desire for an improved smile appearance'],
    ['Dental examination and cleaning are completed first.', 'Soft tissues are isolated with a gingival barrier (in-office).', 'Whitening gel (25–40% hydrogen peroxide) is applied to tooth surfaces.', 'Light or heat activation may be used for 15–20 minutes per cycle; 2–3 cycles per session.', 'For take-home: custom trays are fabricated and the patient applies 10–22% carbamide peroxide gel for 30 minutes to overnight daily.', 'Shade comparison is performed before and after.'],
    ['Transient tooth sensitivity (most common side effect)', 'Gingival irritation from peroxide contact', 'Uneven whitening if restorations are present (crowns and fillings do not bleach)', 'Over-whitening creating an unnatural translucency', 'Relapse of color over time'],
    ['Use a desensitizing toothpaste for 2 weeks before and after treatment.', 'Avoid dark-colored food and beverages for 48 hours after treatment (white diet).', 'Do not smoke for at least 48 hours.', 'For take-home trays: follow the prescribed wearing schedule.', 'Touch-up treatments may be needed every 6–12 months.'],
    'Professional whitening uses a safe bleaching gel to lighten stains and yellowing. In-office treatment can brighten your teeth several shades in one visit, while take-home trays work more gradually. Some sensitivity is normal and temporary. Results last longer if you limit staining foods and beverages.',
  ),

  'porcelain-veneers': dh(
    'porcelain-veneers',
    'Porcelain Veneers',
    'Carillas de Porcelana',
    'cosmetic',
    'Thin, custom-fabricated shells of dental porcelain bonded to the facial surfaces of anterior teeth to correct color, shape, size, alignment, and surface texture. They provide a natural, durable, and stain-resistant cosmetic result.',
    ['Discolored teeth unresponsive to whitening', 'Chipped, worn, or irregularly shaped teeth', 'Minor crowding or spacing in the aesthetic zone', 'Diastema closure', 'Peg-shaped lateral incisors', 'Comprehensive smile makeover'],
    ['Diagnostic photographs, impressions, and a digital smile design or wax-up are completed.', 'Teeth are prepared by removing 0.3–0.7 mm of enamel from the facial surface.', 'An impression or digital scan is taken.', 'Provisional veneers are placed.', 'The dental laboratory fabricates the porcelain veneers.', 'At the bonding appointment, provisionals are removed and veneers are tried in for fit and shade.', 'Teeth are etched, bonding agent is applied, and veneers are cemented with light-cure resin cement.', 'Margins are finished and occlusion is verified.'],
    ['Irreversible enamel removal (the tooth will always need a veneer or crown)', 'Porcelain chipping or fracture from trauma or bruxism', 'Debonding of the veneer', 'Post-preparation sensitivity', 'Color mismatch if shade selection is inaccurate', 'Veneer failure requiring replacement'],
    ['Avoid biting hard objects (ice, pens, fingernails).', 'Wear a nightguard if you clench or grind your teeth.', 'Brush and floss normally — porcelain margins must be kept clean.', 'Avoid using teeth to open packages.', 'Veneers can last 10–20 years with proper care.', 'Report any rough edges or changes to your dentist.'],
    'Veneers are thin porcelain shells custom-designed to fit over the front of your teeth, transforming their color, shape, and alignment. A small amount of enamel is removed so they fit naturally. With proper care, veneers provide a beautiful, long-lasting smile.',
  ),

  'dental-bonding': dh(
    'dental-bonding',
    'Dental Bonding (Cosmetic)',
    'Adhesión Dental (Cosmética)',
    'cosmetic',
    'Direct application of tooth-colored composite resin to repair or improve the appearance of a tooth. A conservative and cost-effective cosmetic procedure that can be completed in a single visit without laboratory fabrication.',
    ['Small chips or cracks in anterior teeth', 'Minor gaps (diastemas) between teeth', 'Irregularly shaped teeth', 'Discolored teeth that do not respond to whitening', 'Exposed root surfaces from gingival recession', 'Alternative to veneers for patients seeking a reversible option'],
    ['A shade guide is used to select a resin color matching the natural tooth.', 'The tooth surface is lightly roughened with a conditioning solution.', 'A bonding agent is applied.', 'Composite resin is sculpted onto the tooth in layers to achieve the desired shape.', 'Each layer is light-cured.', 'The bonded surface is shaped, contoured, and polished to match surrounding teeth.'],
    ['Composite can chip or break with excessive force', 'Material is more susceptible to staining than porcelain', 'Longevity is shorter than veneers or crowns (typically 5–10 years)', 'Color match may degrade over time'],
    ['Avoid biting on hard foods or objects with bonded teeth.', 'Minimize staining foods and beverages for 48 hours.', 'Brush and floss normally.', 'Avoid habits such as nail biting or pen chewing.', 'Schedule regular check-ups so the bonding can be polished or repaired as needed.'],
    'Dental bonding uses tooth-colored resin sculpted directly onto your tooth to fix chips, gaps, or discoloration — all in one visit and usually without anesthesia. It is one of the most affordable cosmetic treatments, though it may need to be touched up or replaced after several years.',
  ),

  'gum-contouring': dh(
    'gum-contouring',
    'Gum Contouring (Gingivectomy / Crown Lengthening)',
    'Contorno de Encías (Gingivectomía / Alargamiento de Corona)',
    'cosmetic',
    'Surgical reshaping of the gingival margin to improve the symmetry and proportion of the gumline. A gingivectomy removes excess gum tissue, while crown lengthening also involves bone recontouring. Addresses "gummy smile" and uneven gum levels.',
    ['Excessive gingival display (gummy smile)', 'Uneven gum margins creating asymmetric tooth appearance', 'Short clinical crowns due to altered passive eruption', 'Pre-prosthetic crown lengthening to expose more tooth structure'],
    ['Local anesthesia is administered.', 'The new gingival margin is marked with a probe or tissue marker.', 'Excess gingival tissue is removed with a diode laser, electrosurgery, or scalpel.', 'If bone recontouring is needed, a flap is elevated and bone is recontoured.', 'The tissue is sutured if a flap was raised.', 'A periodontal dressing may be applied.'],
    ['Post-operative pain and swelling', 'Bleeding during and after the procedure', 'Infection of the surgical site', 'Sensitivity of exposed root or tooth surface', 'Uneven healing requiring additional correction', 'Relapse of gum tissue growth (more common without bone recontouring)'],
    ['Apply ice packs for the first 24–48 hours.', 'Take prescribed pain medications as directed.', 'Eat soft, cool foods for the first week.', 'Avoid brushing the surgical area for 1–2 weeks; use chlorhexidine rinse instead.', 'Do not smoke — this impairs healing.', 'Return for follow-up and suture removal.', 'Allow 6–8 weeks for tissue maturation before placing final restorations.'],
    'Gum contouring reshapes your gumline to create a more balanced, symmetrical smile. If you feel too much gum shows when you smile, this procedure removes excess tissue (and sometimes a small amount of bone) to reveal more of your natural tooth. Healing takes a few weeks, and the results are long-lasting.',
  ),

  'smile-makeover': dh(
    'smile-makeover',
    'Comprehensive Smile Makeover',
    'Diseño de Sonrisa Integral',
    'cosmetic',
    'Coordinated treatment plan combining multiple cosmetic and restorative procedures to achieve an optimal aesthetic outcome for the entire smile zone. May include whitening, veneers, bonding, crowns, gum contouring, orthodontics, and implants.',
    ['Multiple aesthetic concerns affecting confidence and quality of life', 'Worn, damaged, or missing teeth in the smile zone', 'Desire for comprehensive improvement in tooth color, shape, alignment, and gumline', 'Upcoming life milestone (wedding, career change) motivating treatment'],
    ['Comprehensive examination, photographs, radiographs, and impressions or digital scans.', 'A digital smile design (DSD) or diagnostic wax-up is created to preview the final result.', 'A phased treatment plan is developed, addressing periodontal health, orthodontics, and structural issues first.', 'Cosmetic procedures (whitening, veneers, bonding, gum contouring) are performed in a coordinated sequence.', 'Missing teeth are replaced with implants or bridges as needed.', 'Final adjustments and polishing are completed.', 'Maintenance and retention plan is established.'],
    ['Complexity increases risk of unexpected complications during any individual procedure', 'Extended treatment timeline (months to over a year)', 'Higher overall cost', 'Results depend on patient compliance with each phase', 'Potential for patient dissatisfaction if expectations are not thoroughly discussed'],
    ['Follow specific aftercare instructions for each procedure performed.', 'Wear nightguard if prescribed to protect cosmetic work.', 'Maintain excellent oral hygiene to protect the investment.', 'Attend regular maintenance visits.', 'Avoid habits that could damage restorations (nail biting, ice chewing, using teeth as tools).'],
    'A smile makeover is a customized plan that combines several treatments to transform your entire smile. Using a digital design, your dentist can show you a preview of the expected result before starting. Treatment is done in phases, and the final outcome can be life-changing for both appearance and confidence.',
  ),

  'composite-edge-bonding': dh(
    'composite-edge-bonding',
    'Composite Edge Bonding (Tooth Reshaping)',
    'Remodelación Dental con Resina Compuesta',
    'cosmetic',
    'Minimally invasive cosmetic procedure combining enameloplasty (selective reshaping by removing small amounts of enamel) and composite resin addition to refine the edges, proportions, and symmetry of anterior teeth. Often used to correct minor irregularities without preparing the tooth for a veneer.',
    ['Slightly uneven or rough incisal edges', 'Minor length discrepancies between adjacent teeth', 'Small chips that affect smile symmetry', 'Mild canine reshaping for a softer smile line', 'Conservative alternative to veneers for minor imperfections'],
    ['Photographs and measurements of tooth proportions are taken.', 'Minimal enamel is selectively removed with fine diamond burs to improve contour.', 'Composite resin is applied and sculpted to refine edges and proportions.', 'The material is light-cured.', 'Final shaping, contouring, and polishing to match the luster of natural enamel.'],
    ['Over-reduction of enamel if excessive reshaping is performed', 'Composite discoloration over time', 'Chipping of composite at thin incisal edges', 'Patient dissatisfaction if subtle changes do not meet expectations'],
    ['Avoid biting hard objects with the bonded edges.', 'Use a non-abrasive toothpaste.', 'Have the bonding polished at regular cleaning appointments.', 'Report any rough spots or chips.', 'Composite may need touch-up or replacement every 5–8 years.'],
    'Edge bonding is a quick, painless way to refine the shape of your front teeth. By smoothing rough edges and adding tiny amounts of tooth-colored resin, your dentist can create a more symmetrical, polished smile in a single visit — with no drilling and no anesthesia needed.',
  ),
};

// ---------------------------------------------------------------------------
// Utility Functions
// ---------------------------------------------------------------------------

/** All dental health categories. */
export const DENTAL_CATEGORIES: DentalCategory[] = [
  'preventive', 'restorative', 'periodontal', 'orthodontic',
  'surgical', 'pediatric', 'emergency', 'cosmetic',
];

/**
 * Returns all entries belonging to a given category.
 */
export function getDentalEntriesByCategory(category: DentalCategory): DentalHealthEntry[] {
  return Object.values(DENTAL_HEALTH_ENTRIES).filter(
    (entry) => entry.category === category,
  );
}

/**
 * Case-insensitive search across id, name, nameEs, description, indications,
 * procedure steps, risks, aftercare, and patientExplanation.
 */
export function searchDentalEntries(query: string): DentalHealthEntry[] {
  const q = query.toLowerCase();
  return Object.values(DENTAL_HEALTH_ENTRIES).filter((entry) => {
    const searchable = [
      entry.id,
      entry.name,
      entry.nameEs,
      entry.description,
      entry.patientExplanation,
      ...entry.indications,
      ...entry.procedure,
      ...entry.risks,
      ...entry.aftercare,
    ].join(' ').toLowerCase();
    return searchable.includes(q);
  });
}

/**
 * Retrieves a single entry by its id. Returns undefined if not found.
 */
export function getDentalEntryById(id: string): DentalHealthEntry | undefined {
  return DENTAL_HEALTH_ENTRIES[id];
}

/**
 * Returns all entry ids grouped by category.
 */
export function getDentalEntriesGroupedByCategory(): Record<DentalCategory, DentalHealthEntry[]> {
  const grouped = {} as Record<DentalCategory, DentalHealthEntry[]>;
  for (const cat of DENTAL_CATEGORIES) {
    grouped[cat] = [];
  }
  for (const entry of Object.values(DENTAL_HEALTH_ENTRIES)) {
    grouped[entry.category].push(entry);
  }
  return grouped;
}
