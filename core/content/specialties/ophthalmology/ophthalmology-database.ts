/**
 * Biological Self — Ophthalmology Specialty Database
 * 38 entries covering anterior segment, posterior segment, glaucoma,
 * neuro-ophthalmology, pediatric, oculoplastics, refractive, infectious, and trauma.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type OphthalmologyDatabaseCategory =
  | 'anterior-segment' | 'posterior-segment' | 'glaucoma'
  | 'neuro-ophthalmology' | 'pediatric' | 'oculoplastics'
  | 'refractive' | 'infectious' | 'trauma';

export interface OphthalmologyEntry {
  id: string;
  name: string;
  nameEs: string;
  category: OphthalmologyDatabaseCategory;
  icd11: string;
  description: string;
  pathophysiology: string;
  clinicalFeatures: string[];
  diagnostics: string[];
  treatment: string[];
  complications: string[];
  patientExplanation: string;
  emergencySigns: string[];
}

// ---------------------------------------------------------------------------
// Compact helper
// ---------------------------------------------------------------------------

const oph = (
  id: string, name: string, nameEs: string, category: OphthalmologyDatabaseCategory,
  icd11: string, description: string, pathophysiology: string,
  clinicalFeatures: string[], diagnostics: string[], treatment: string[],
  complications: string[], patientExplanation: string, emergencySigns: string[],
): OphthalmologyEntry => ({
  id, name, nameEs, category, icd11, description, pathophysiology,
  clinicalFeatures, diagnostics, treatment, complications, patientExplanation, emergencySigns,
});

// ---------------------------------------------------------------------------
// Database
// ---------------------------------------------------------------------------

export const OPHTHALMOLOGY_ENTRIES: Record<string, OphthalmologyEntry> = {

  // ===== ANTERIOR SEGMENT (9) ================================================

  'cataracts': oph(
    'cataracts', 'Cataracts', 'Cataratas', 'anterior-segment',
    '9B10', 'Opacification of the crystalline lens causing progressive vision loss.',
    'Oxidative damage and protein aggregation in lens fibers cause loss of transparency. Age-related nuclear sclerosis is most common; cortical and posterior subcapsular types also occur. UV exposure, diabetes, and corticosteroids accelerate formation.',
    ['Gradual painless vision loss', 'Glare and halos around lights', 'Reduced contrast sensitivity', 'Myopic shift (nuclear type)', 'Monocular diplopia'],
    ['Slit-lamp biomicroscopy', 'Snellen visual acuity', 'Dilated fundus exam to rule out posterior pathology', 'A-scan biometry / IOL Master for surgical planning'],
    ['Observation with updated refraction for mild cases', 'Phacoemulsification with IOL implantation', 'Choice of monofocal, multifocal, or toric IOL', 'Topical NSAID and steroid post-op'],
    ['Posterior capsule opacification (PCO)', 'Endophthalmitis', 'Cystoid macular edema', 'Retinal detachment', 'IOL dislocation'],
    'A cataract is a clouding of the natural lens inside your eye, like looking through a foggy window. Surgery replaces the cloudy lens with a clear artificial one and is one of the safest operations performed.',
    ['Sudden vision loss after surgery', 'Severe eye pain and redness post-op', 'Floaters and flashes suggesting retinal detachment'],
  ),

  'corneal-ulcer': oph(
    'corneal-ulcer', 'Corneal Ulcer', 'Ulcera corneal', 'anterior-segment',
    '9A77.1', 'Infectious or sterile epithelial defect with stromal infiltration and necrosis.',
    'Disruption of the corneal epithelium allows pathogen invasion (bacteria, fungi, Acanthamoeba). Contact lens wear is the leading risk factor. Neutrophilic infiltration causes stromal necrosis and thinning.',
    ['Eye pain, redness, and photophobia', 'White/gray corneal infiltrate with overlying epithelial defect', 'Mucopurulent discharge', 'Decreased vision', 'Hypopyon (layered WBCs in anterior chamber)'],
    ['Slit-lamp exam with fluorescein staining', 'Corneal scraping for Gram stain, culture, and sensitivity', 'Confocal microscopy if Acanthamoeba suspected', 'PCR for viral or atypical organisms'],
    ['Empiric fortified topical antibiotics (vancomycin + ceftazidime or fluoroquinolone)', 'Culture-guided therapy adjustment', 'Cycloplegic for pain (atropine 1%)', 'Avoid patching', 'Corneal transplant for perforation or non-healing ulcers'],
    ['Corneal scarring and irregular astigmatism', 'Corneal perforation', 'Endophthalmitis', 'Permanent vision loss'],
    'A corneal ulcer is an open sore on the clear front surface of the eye, often from infection. It requires urgent antibiotic drops, sometimes given every hour. Never sleep in contact lenses to reduce risk.',
    ['Worsening pain or vision despite treatment', 'Hypopyon visible', 'Suspected perforation (sudden watery discharge)'],
  ),

  'bacterial-keratitis': oph(
    'bacterial-keratitis', 'Bacterial Keratitis', 'Queratitis bacteriana', 'infectious',
    '9A77.0', 'Bacterial infection of the corneal stroma, most commonly caused by Pseudomonas or Staphylococcus.',
    'Contact lens wear, trauma, or ocular surface disease allows bacterial invasion through epithelial defects. Pseudomonas aeruginosa is the most common organism in contact lens wearers; Staphylococcus aureus in non-lens wearers.',
    ['Rapid-onset eye pain and redness', 'Dense stromal infiltrate, often central', 'Mucopurulent discharge', 'Corneal edema and thinning', 'Anterior chamber reaction with possible hypopyon'],
    ['Slit-lamp exam with fluorescein', 'Corneal scraping for culture (blood agar, chocolate agar, Sabouraud)', 'Gram stain', 'Consider PCR for atypical cases'],
    ['Fortified topical antibiotics hourly (tobramycin + cefazolin or moxifloxacin monotherapy)', 'Adjust based on culture results', 'Cycloplegic for comfort', 'No patching or topical steroids initially'],
    ['Corneal scarring', 'Corneal melting and perforation', 'Endophthalmitis', 'Irregular astigmatism requiring rigid contact lens or transplant'],
    'This is a serious infection of the front of the eye usually linked to contact lenses. Frequent antibiotic drops are needed around the clock initially. Prompt treatment prevents permanent damage.',
    ['Vision worsening despite 48h of treatment', 'Enlarging infiltrate', 'Perforation signs'],
  ),

  'viral-keratitis': oph(
    'viral-keratitis', 'Herpes Simplex / Zoster Keratitis', 'Queratitis viral (herpes simple/zoster)', 'infectious',
    '9A77.2', 'Corneal inflammation caused by HSV-1 or varicella-zoster virus, may be epithelial, stromal, or endothelial.',
    'HSV-1 establishes latency in the trigeminal ganglion and reactivates causing dendritic epithelial ulcers. Stromal keratitis is immune-mediated. VZV keratitis follows herpes zoster ophthalmicus (V1 dermatome).',
    ['Dendritic or geographic ulcer on fluorescein staining (HSV)', 'Decreased corneal sensation', 'Unilateral red eye with pain', 'Vesicular rash in V1 distribution (VZV)', 'Stromal haze or Descemet folds'],
    ['Slit-lamp with fluorescein and rose bengal staining', 'Corneal esthesiometry (reduced sensation)', 'PCR of corneal swab or aqueous for HSV/VZV', 'Anterior chamber evaluation for uveitis'],
    ['Topical ganciclovir 0.15% or trifluridine for epithelial HSV', 'Oral valacyclovir 500mg TID for 7-10 days', 'Topical corticosteroids for stromal keratitis (only with antiviral cover)', 'Long-term oral acyclovir 400mg BID prophylaxis for recurrences', 'Oral valacyclovir 1g TID for VZV'],
    ['Recurrent keratitis', 'Corneal scarring and neovascularization', 'Corneal anesthesia and neurotrophic keratopathy', 'Secondary glaucoma', 'Postherpetic neuralgia (VZV)'],
    'Herpes virus can infect the front of the eye and come back multiple times. Antiviral medication treats the active infection and a daily low-dose pill can reduce future episodes.',
    ['Rapid vision loss', 'Perforation of thinned cornea', 'Elevated eye pressure'],
  ),

  'fungal-keratitis': oph(
    'fungal-keratitis', 'Fungal Keratitis', 'Queratitis micótica', 'infectious',
    '9A77.3', 'Corneal infection by filamentous fungi (Fusarium, Aspergillus) or yeast (Candida).',
    'Fungal invasion follows vegetative trauma (branches, soil) or chronic corticosteroid use. Filamentous fungi penetrate intact epithelium. Slow, indolent course with deep stromal involvement and satellite lesions.',
    ['Gradual onset pain and redness after plant/soil trauma', 'Gray-white infiltrate with feathery borders', 'Satellite lesions around main infiltrate', 'Endothelial plaque', 'Mild anterior chamber reaction'],
    ['Corneal scraping for KOH prep and fungal culture (Sabouraud dextrose agar)', 'Confocal microscopy showing hyphae', 'Gram stain (to rule out bacteria)', 'Culture takes 1-3 weeks'],
    ['Topical natamycin 5% (first-line for filamentous)', 'Topical voriconazole 1% or amphotericin B 0.15% for yeast', 'Oral voriconazole for deep or non-responding infections', 'Therapeutic keratoplasty for perforation', 'Discontinue topical steroids'],
    ['Corneal perforation', 'Endophthalmitis', 'Dense corneal scarring', 'Loss of the eye in severe cases'],
    'Fungal eye infections often start after an injury with plant material. They progress slowly and require weeks of antifungal drops. Early diagnosis is key to saving vision.',
    ['Worsening infiltrate despite treatment', 'Perforation or descemetocele', 'Endophthalmitis signs'],
  ),

  'dry-eye-disease': oph(
    'dry-eye-disease', 'Dry Eye Disease', 'Enfermedad del ojo seco', 'anterior-segment',
    '9A74', 'Multifactorial disease of the tear film and ocular surface causing symptoms of discomfort and visual disturbance.',
    'Tear film instability results from aqueous deficiency (lacrimal gland dysfunction, Sjogren syndrome) or excessive evaporation (meibomian gland dysfunction, blink abnormalities). Hyperosmolarity triggers inflammation and apoptosis of epithelial cells.',
    ['Burning, stinging, or gritty sensation', 'Fluctuating blurred vision improving with blink', 'Reflex tearing (paradoxical)', 'Redness', 'Worsened by screen use, wind, and low humidity'],
    ['Tear break-up time (TBUT < 10s abnormal)', 'Schirmer test (< 5mm in 5 min = aqueous deficiency)', 'Ocular surface staining (fluorescein, lissamine green)', 'Meibography for meibomian gland assessment', 'Tear osmolarity (> 308 mOsm/L)'],
    ['Artificial tears (preservative-free for frequent use)', 'Warm compresses and lid hygiene for meibomian gland dysfunction', 'Topical cyclosporine 0.05% or lifitegrast 5%', 'Punctal plugs for aqueous deficiency', 'Omega-3 fatty acid supplementation', 'Autologous serum tears for severe cases'],
    ['Corneal epithelial erosion', 'Bacterial keratitis superinfection', 'Corneal scarring', 'Reduced quality of life'],
    'Dry eye means your tears are not keeping your eyes adequately lubricated. It is very common and manageable with regular drops and simple lifestyle changes like taking screen breaks and using a humidifier.',
    [],
  ),

  'anterior-uveitis': oph(
    'anterior-uveitis', 'Anterior Uveitis (Iritis)', 'Uveitis anterior (Iritis)', 'anterior-segment',
    '9A81.0', 'Inflammation of the iris and/or ciliary body; the most common form of uveitis.',
    'Immune-mediated (HLA-B27 association, sarcoidosis, Behcet) or infectious (herpetic, syphilitic). T-cell-driven inflammation causes protein and cell leakage into the aqueous humor. May be granulomatous or non-granulomatous.',
    ['Unilateral eye pain and photophobia', 'Perilimbal (ciliary) injection', 'Miotic pupil', 'Cells and flare in anterior chamber on slit-lamp', 'Decreased vision'],
    ['Slit-lamp exam (cells, flare, keratic precipitates)', 'IOP measurement (may be low or high)', 'HLA-B27, ACE, RPR/VDRL, chest X-ray for recurrent cases', 'Sacroiliac joint imaging if ankylosing spondylitis suspected'],
    ['Topical prednisolone acetate 1% (frequent taper)', 'Cycloplegic (cyclopentolate or atropine) to prevent synechiae and reduce pain', 'Treat underlying systemic disease', 'Periocular or intravitreal steroid for refractory cases', 'Steroid-sparing immunosuppression for chronic recurrence'],
    ['Posterior synechiae (iris adhesion to lens)', 'Secondary glaucoma', 'Cataract from chronic inflammation or steroid use', 'Cystoid macular edema', 'Band keratopathy'],
    'Uveitis is inflammation inside the eye that causes pain, light sensitivity, and blurry vision. Steroid drops calm the inflammation. Recurrent episodes may need blood tests to find the cause.',
    ['Sudden severe vision loss', 'Hypopyon', 'Elevated eye pressure with pain'],
  ),

  'pterygium': oph(
    'pterygium', 'Pterygium', 'Pterigion', 'anterior-segment',
    '9A60.2', 'Wing-shaped fibrovascular growth of conjunctiva extending onto the cornea, typically from the nasal side.',
    'Chronic UV exposure, wind, and dust stimulate limbal stem cell dysfunction and fibrovascular proliferation. Epithelial-mesenchymal transition, matrix metalloproteinases, and growth factors (VEGF) drive the progressive corneal invasion.',
    ['Triangular fleshy growth from nasal conjunctiva onto cornea', 'Redness and irritation', 'Foreign body sensation', 'Astigmatism if encroaching on visual axis', 'Decreased vision in advanced cases'],
    ['Slit-lamp examination', 'Corneal topography to assess induced astigmatism', 'Document progression with serial photos', 'Rule out conjunctival neoplasia (biopsy if atypical)'],
    ['Observation with lubricating drops and UV protection for mild cases', 'Surgical excision with conjunctival autograft (preferred)', 'Intraoperative mitomycin C to reduce recurrence', 'Amniotic membrane graft as alternative'],
    ['Recurrence (up to 50% without graft)', 'Corneal scarring at excision site', 'Diplopia from scar-related restriction (rare)', 'Graft necrosis'],
    'A pterygium is a benign growth on the white of the eye that can creep onto the clear window. Sunglasses help prevent it. If it affects your vision, a short surgery can remove it.',
    [],
  ),

  'allergic-conjunctivitis': oph(
    'allergic-conjunctivitis', 'Conjunctivitis (Allergic / Viral / Bacterial)', 'Conjuntivitis (alérgica / viral / bacteriana)', 'anterior-segment',
    '9A60.0', 'Inflammation of the conjunctiva, classified as allergic, viral (adenoviral), or bacterial.',
    'Allergic: IgE-mediated mast cell degranulation releasing histamine. Viral: adenovirus (most common) causes follicular response and lymphoid hyperplasia. Bacterial: direct infection (S. aureus, S. pneumoniae, H. influenzae, N. gonorrhoeae) with neutrophilic exudate.',
    ['Allergic: bilateral itching, watery discharge, chemosis', 'Viral: watery discharge, follicles, preauricular lymphadenopathy', 'Bacterial: purulent discharge, matting of eyelids', 'Red eye with conjunctival injection', 'Normal vision (usually)'],
    ['Clinical diagnosis based on history and exam', 'Viral: follicles on lower fornix, pharyngoconjunctival fever', 'Bacterial: purulent discharge; culture if hyperacute (gonococcal)', 'Allergic: papillae on upper tarsal conjunctiva'],
    ['Allergic: topical antihistamine/mast cell stabilizer (olopatadine), cool compresses, avoid allergens', 'Viral: supportive care, cold compresses, artificial tears; hygiene to prevent spread', 'Bacterial: topical antibiotics (erythromycin ointment, fluoroquinolone drops)', 'Hyperacute (gonococcal): IM ceftriaxone + topical erythromycin + systemic treatment'],
    ['Allergic: giant papillary conjunctivitis, corneal shield ulcer (vernal)', 'Viral: subepithelial infiltrates, pseudomembrane', 'Bacterial: corneal ulcer, orbital cellulitis (H. influenzae in children)', 'Neonatal: ophthalmia neonatorum if untreated gonococcal'],
    'Conjunctivitis ("pink eye") has several causes. Allergic pink eye itches; viral is watery and very contagious; bacterial produces thick pus. Most cases resolve but some need prescription drops.',
    ['Copious purulent discharge in a newborn (gonococcal emergency)', 'Vision loss', 'Contact lens wearer with worsening symptoms (rule out keratitis)'],
  ),

  'blepharitis': oph(
    'blepharitis', 'Blepharitis', 'Blefaritis', 'anterior-segment',
    '9A80.0', 'Chronic inflammation of the eyelid margins, classified as anterior (staphylococcal, seborrheic) or posterior (meibomian gland dysfunction).',
    'Anterior: bacterial colonization (S. aureus) and seborrheic dermatitis cause collarette formation. Posterior: meibomian gland obstruction causes abnormal lipid secretion, tear film instability, and secondary inflammation. Demodex mites contribute in some patients.',
    ['Burning and itching of lid margins', 'Crusting at base of lashes (anterior)', 'Foamy tears and lid margin thickening (posterior)', 'Red and swollen eyelids', 'Foreign body sensation and dry eye symptoms'],
    ['Slit-lamp exam of lid margin, lashes, and meibomian gland orifices', 'Express meibomian glands to assess secretion quality', 'Demodex exam (epilated lash under microscopy)', 'Tear film assessment (TBUT)'],
    ['Lid hygiene: warm compresses and lid scrubs (baby shampoo or commercial wipes)', 'Topical antibiotic ointment (erythromycin) for anterior blepharitis', 'Oral doxycycline 50-100mg daily for posterior/refractory cases', 'Topical azithromycin 1% for meibomian gland dysfunction', 'Tea tree oil-based lid scrubs for Demodex', 'LipiFlow or IPL therapy for MGD'],
    ['Chalazion and hordeolum', 'Corneal erosion and marginal keratitis', 'Chronic dry eye', 'Trichiasis and madarosis'],
    'Blepharitis is a common, chronic irritation of the eyelids. Daily warm compresses and gentle lid cleaning keep it under control. It cannot be cured but flare-ups are manageable.',
    [],
  ),

  // ===== POSTERIOR SEGMENT (9) ================================================

  'dry-amd': oph(
    'dry-amd', 'Age-Related Macular Degeneration (Dry)', 'Degeneracion macular seca', 'posterior-segment',
    '9B75.0', 'Progressive atrophic maculopathy with drusen accumulation and geographic atrophy.',
    'Accumulation of lipofuscin and drusen (extracellular deposits) between the RPE and Bruch membrane. Complement-mediated inflammation and oxidative stress lead to progressive RPE and photoreceptor atrophy (geographic atrophy).',
    ['Gradual central vision loss', 'Difficulty reading and recognizing faces', 'Drusen seen on fundoscopy', 'Geographic atrophy (advanced dry AMD)', 'Metamorphopsia may herald conversion to wet AMD'],
    ['Dilated fundus exam (drusen, RPE changes, atrophy)', 'OCT (drusen volume, RPE loss, outer retinal thinning)', 'Fundus autofluorescence (hypo-AF in atrophy)', 'Amsler grid for self-monitoring', 'Fluorescein angiography to rule out wet AMD'],
    ['AREDS2 supplementation (vitamins C, E, zinc, lutein, zeaxanthin)', 'Smoking cessation', 'Pegcetacoplan (intravitreal complement inhibitor) for geographic atrophy', 'Low-vision rehabilitation', 'Monitor for conversion to wet AMD'],
    ['Geographic atrophy with legal blindness', 'Conversion to wet (neovascular) AMD', 'Depression from vision loss', 'Charles Bonnet syndrome (visual hallucinations)'],
    'Dry macular degeneration slowly damages the central part of your retina. AREDS2 vitamins slow progression. Use the Amsler grid daily: if lines look wavy, see your eye doctor immediately as it could mean the wet form.',
    ['New metamorphopsia (wavy lines)', 'Sudden scotoma (dark spot in center)', 'Rapid vision decline suggesting wet conversion'],
  ),

  'wet-amd': oph(
    'wet-amd', 'Age-Related Macular Degeneration (Wet/Neovascular)', 'Degeneracion macular humeda/neovascular', 'posterior-segment',
    '9B75.1', 'Neovascular AMD with choroidal neovascularization (CNV) causing subretinal fluid and hemorrhage.',
    'VEGF-driven choroidal neovascularization breaks through Bruch membrane into the subretinal space. Leaky new vessels cause subretinal/intraretinal fluid, hemorrhage, and lipid exudation. Untreated, it leads to disciform scar.',
    ['Sudden or rapid central vision loss', 'Metamorphopsia (distortion of straight lines)', 'Central scotoma', 'Subretinal hemorrhage and fluid on fundoscopy', 'Macular edema on OCT'],
    ['OCT (subretinal fluid, intraretinal fluid, PED)', 'Fluorescein angiography (classic or occult CNV, leakage)', 'OCT angiography (non-invasive CNV detection)', 'Indocyanine green angiography for polypoidal vasculopathy'],
    ['Intravitreal anti-VEGF injections (aflibercept, ranibizumab, bevacizumab, faricimab)', 'Treat-and-extend or monthly injection protocol', 'PDT (photodynamic therapy) for polypoidal choroidal vasculopathy', 'Low-vision aids and rehabilitation'],
    ['Submacular hemorrhage', 'Disciform scar with permanent central vision loss', 'RPE tear', 'Endophthalmitis from injections (rare)', 'Sustained IOP elevation'],
    'Wet macular degeneration is caused by abnormal leaky blood vessels under the retina. Regular injections of medicine into the eye can stop the leaking and preserve vision. Missing injections allows the disease to worsen.',
    ['Sudden vision loss or new distortion', 'Large subretinal hemorrhage', 'Pain or redness after injection (endophthalmitis)'],
  ),

  'npdr': oph(
    'npdr', 'Non-Proliferative Diabetic Retinopathy', 'Retinopatia diabetica no proliferativa', 'posterior-segment',
    '9B71.0', 'Microvascular retinal changes from diabetes without neovascularization.',
    'Chronic hyperglycemia damages retinal capillary pericytes and endothelial cells. Basement membrane thickening, loss of autoregulation, and microaneurysm formation lead to leakage (edema) and ischemia. Classified as mild, moderate, or severe based on findings.',
    ['Often asymptomatic in early stages', 'Microaneurysms (earliest clinical sign)', 'Dot-blot and flame hemorrhages', 'Hard exudates (lipid deposits)', 'Cotton-wool spots and venous beading in severe NPDR'],
    ['Dilated fundus exam (gold standard screening)', 'Fundus photography and grading', 'OCT for diabetic macular edema', 'Fluorescein angiography for macular ischemia or unclear edema'],
    ['Optimize glycemic control (HbA1c < 7%)', 'Blood pressure and lipid management', 'Anti-VEGF injections for center-involving diabetic macular edema', 'Focal/grid laser for non-center-involving macular edema', 'Annual screening (mild), 6-month (moderate), 3-month (severe) follow-up'],
    ['Progression to proliferative diabetic retinopathy', 'Diabetic macular edema causing central vision loss', 'Macular ischemia'],
    'Diabetes can damage tiny blood vessels in the back of the eye. Early changes may have no symptoms, so regular eye exams are essential. Good blood sugar and blood pressure control are the best protection.',
    ['Sudden vision loss', 'New floaters suggesting vitreous hemorrhage from progression'],
  ),

  'pdr': oph(
    'pdr', 'Proliferative Diabetic Retinopathy', 'Retinopatia diabetica proliferativa', 'posterior-segment',
    '9B71.1', 'Advanced diabetic retinopathy with neovascularization of the disc or retina.',
    'Severe retinal ischemia triggers VEGF upregulation causing neovascularization at the disc (NVD) or elsewhere (NVE). Fragile new vessels grow along the vitreoretinal interface, prone to hemorrhage. Fibrovascular proliferation causes tractional retinal detachment.',
    ['Neovascularization visible on dilated exam', 'Vitreous hemorrhage (sudden floaters or vision loss)', 'Tractional retinal detachment', 'Neovascular glaucoma (rubeosis iridis)', 'Pre-retinal hemorrhage'],
    ['Dilated fundus exam with attention to disc and arcades', 'Fluorescein angiography (NVD/NVE, capillary non-perfusion)', 'OCT for macular edema and vitreoretinal traction', 'B-scan ultrasound if media opaque from hemorrhage', 'Gonioscopy for neovascular glaucoma'],
    ['Panretinal photocoagulation (PRP) — mainstay', 'Intravitreal anti-VEGF (adjunct to PRP or pre-surgical)', 'Pars plana vitrectomy for non-clearing vitreous hemorrhage or tractional RD involving macula', 'Treat concurrent macular edema'],
    ['Vitreous hemorrhage', 'Tractional and combined rhegmatogenous-tractional retinal detachment', 'Neovascular glaucoma', 'Permanent vision loss'],
    'Proliferative diabetic retinopathy means new fragile blood vessels have grown in the eye because of poor blood supply. Laser treatment and injections can prevent bleeding and blindness. Keeping blood sugar controlled is critical.',
    ['Sudden dense floaters or vision loss (vitreous hemorrhage)', 'Curtain-like visual field loss (retinal detachment)', 'Eye pain with elevated pressure (neovascular glaucoma)'],
  ),

  'retinal-detachment': oph(
    'retinal-detachment', 'Retinal Detachment', 'Desprendimiento de retina', 'posterior-segment',
    '9B60', 'Separation of the neurosensory retina from the retinal pigment epithelium.',
    'Rhegmatogenous (most common): retinal break allows liquefied vitreous to enter subretinal space. Tractional: fibrovascular membranes pull retina off RPE (diabetic, sickle cell). Exudative: fluid accumulates without a break (tumors, inflammation, hypertension).',
    ['Sudden onset of floaters and photopsia (flashes)', 'Progressive peripheral visual field loss (curtain or shadow)', 'Reduced central vision if macula detached', 'Relative afferent pupillary defect if extensive', 'Tobacco dust (Shafer sign) in anterior vitreous'],
    ['Dilated fundus exam with scleral depression', 'OCT to assess macular status (on vs off)', 'B-scan ultrasound if media opaque', 'Visual field testing', 'Document extent and location of detachment'],
    ['Pneumatic retinopexy (gas bubble + cryo for superior breaks)', 'Scleral buckle (silicone band for inferior/multiple breaks)', 'Pars plana vitrectomy with gas or silicone oil tamponade', 'Laser retinopexy for flat retinal tears without detachment'],
    ['Proliferative vitreoretinopathy (PVR) — most common cause of failure', 'Re-detachment requiring repeat surgery', 'Cataract from vitrectomy with gas', 'Permanent vision loss if macula-off'],
    'A retinal detachment is when the light-sensing layer peels away from the back of the eye. This is an emergency: if you see a sudden shower of floaters, flashes, or a shadow in your vision, go to the ER immediately.',
    ['Sudden shower of floaters', 'Flashes of light', 'Shadow or curtain in peripheral vision', 'Rapid loss of central vision'],
  ),

  'crao': oph(
    'crao', 'Central Retinal Artery Occlusion', 'Oclusion de arteria central de la retina', 'posterior-segment',
    '9B64.0', 'Acute occlusion of the central retinal artery causing sudden painless monocular vision loss.',
    'Embolic (most common: carotid atherosclerosis, cardiac), thrombotic, or vasculitic (giant cell arteritis) occlusion. Retinal ischemia occurs within minutes; irreversible damage after 90-120 minutes. Inner retina supplied by CRA becomes edematous and opaque.',
    ['Sudden painless monocular vision loss (count fingers or worse)', 'Cherry-red spot at fovea', 'Pale, edematous retina', 'Attenuated arterioles with boxcar segmentation', 'Relative afferent pupillary defect'],
    ['Dilated fundus exam (cherry-red spot, pallor)', 'Fluorescein angiography (delayed arterial filling)', 'ESR, CRP, and platelet count (rule out GCA)', 'Carotid duplex ultrasound', 'Echocardiography and cardiac monitoring', 'OCT (inner retinal edema acutely, atrophy later)'],
    ['Emergent: ocular massage, anterior chamber paracentesis to lower IOP', 'Intra-arterial tPA within 4-6 hours (investigational)', 'Systemic workup and stroke protocol', 'Treat underlying cause (carotid endarterectomy, anticoagulation)', 'Giant cell arteritis: immediate high-dose IV methylprednisolone if suspected'],
    ['Permanent severe vision loss in most cases', 'Neovascularization of iris/retina (15-20%)', 'Neovascular glaucoma', 'Contralateral eye or cerebral infarction'],
    'This is a "stroke of the eye" where the main artery to the retina is blocked. Vision loss is usually severe and permanent. It is an emergency that also signals risk for brain stroke, so a full vascular workup is essential.',
    ['Any sudden painless vision loss', 'Jaw claudication or headache (GCA)', 'Fellow eye symptoms'],
  ),

  'brvo-crvo': oph(
    'brvo-crvo', 'Retinal Vein Occlusion (BRVO/CRVO)', 'Oclusion venosa retiniana (ORVR/OVCR)', 'posterior-segment',
    '9B65', 'Occlusion of the central retinal vein (CRVO) or its branches (BRVO), causing retinal hemorrhage and edema.',
    'Thrombus at the lamina cribrosa (CRVO) or AV crossing (BRVO). Risk factors: hypertension, diabetes, glaucoma, hyperviscosity. Increased venous pressure causes hemorrhage, edema, and capillary non-perfusion. Ischemic CRVO has worse prognosis.',
    ['Sudden painless blurred vision', 'Flame and dot-blot hemorrhages in affected sector (BRVO) or all quadrants (CRVO)', 'Disc edema and venous dilation/tortuosity', 'Cotton-wool spots', 'Macular edema'],
    ['Dilated fundus exam', 'OCT (macular edema quantification)', 'Fluorescein angiography (ischemic vs non-ischemic, non-perfusion area)', 'Blood pressure measurement', 'Labs: CBC, glucose, lipids, thrombophilia workup in young patients'],
    ['Intravitreal anti-VEGF for macular edema (first-line)', 'Intravitreal dexamethasone implant (Ozurdex) as alternative', 'PRP for neovascularization (ischemic CRVO/BRVO)', 'Treat underlying risk factors (hypertension, diabetes)', 'Monitor for neovascular complications'],
    ['Chronic macular edema', 'Neovascularization (disc, retina, iris)', 'Neovascular glaucoma (ischemic CRVO)', 'Vitreous hemorrhage', 'Permanent vision loss'],
    'A retinal vein occlusion is a blood clot in the veins that drain the retina. It causes bleeding and swelling in the retina. Eye injections reduce the swelling and help preserve vision. Controlling blood pressure is crucial.',
    ['Sudden vision loss', 'New floaters (neovascularization or hemorrhage)', 'Eye pain with redness (neovascular glaucoma)'],
  ),

  'macular-hole': oph(
    'macular-hole', 'Macular Hole', 'Agujero macular', 'posterior-segment',
    '9B76.0', 'Full-thickness defect in the foveal neuroretina, typically from vitreomacular traction.',
    'Anomalous posterior vitreous detachment with persistent foveal attachment generates anteroposterior and tangential traction. Progressive stages (1-4) lead to full-thickness hole. Bilateral in 10-15%.',
    ['Central blurred or distorted vision', 'Central scotoma', 'Decreased reading ability', 'Watzke-Allen sign (gap in slit beam across fovea)', 'Positive Amsler grid distortion'],
    ['OCT (gold standard — stages, vitreomacular traction, hole diameter)', 'Watzke-Allen test', 'Amsler grid', 'Visual acuity testing'],
    ['Observation for stage 1 (vitreomacular traction without hole)', 'Ocriplasmin (enzymatic vitreolysis) for small holes with VMT', 'Pars plana vitrectomy with ILM peel and gas tamponade (C3F8)', 'Face-down positioning post-surgery for 1-2 weeks'],
    ['Failure to close (10-15%)', 'Re-opening of hole', 'Cataract progression post-vitrectomy', 'Retinal detachment (rare)', 'Visual field defect from ILM peel'],
    'A macular hole is a small break in the center of the retina that blurs central vision. Surgery can close the hole and improve vision in most patients. You may need to keep your head face-down for a week after surgery.',
    ['Rapid vision decline', 'New retinal detachment symptoms'],
  ),

  'epiretinal-membrane': oph(
    'epiretinal-membrane', 'Epiretinal Membrane', 'Membrana epirretiniana', 'posterior-segment',
    '9B76.1', 'Fibrocellular membrane on the inner retinal surface causing macular distortion.',
    'Glial cells (Muller cells, astrocytes), RPE cells, and fibroblasts proliferate on the internal limiting membrane. May be idiopathic (post-PVD) or secondary (uveitis, trauma, retinal detachment surgery). Contraction causes retinal distortion and edema.',
    ['Metamorphopsia (distortion of straight lines)', 'Mild decreased visual acuity', 'Cellophane maculopathy (early) or macular pucker (advanced)', 'Macular thickening and striae on fundoscopy', 'Monocular diplopia'],
    ['OCT (membrane thickness, retinal distortion, foveal contour)', 'Visual acuity', 'Amsler grid', 'Fluorescein angiography if associated retinal pathology suspected'],
    ['Observation for mild asymptomatic cases', 'Pars plana vitrectomy with membrane peel for symptomatic cases (VA < 20/40 or bothersome distortion)', 'ILM peel to reduce recurrence'],
    ['Cataract formation post-vitrectomy', 'Recurrence of membrane', 'Retinal break or detachment during surgery', 'Phototoxicity', 'Persistent metamorphopsia'],
    'An epiretinal membrane is a thin layer of scar tissue on the retina surface that wrinkles the retina and distorts your vision. If it significantly affects your sight, surgery to peel off the membrane can help.',
    [],
  ),

  'vitreous-hemorrhage': oph(
    'vitreous-hemorrhage', 'Vitreous Hemorrhage', 'Hemorragia vitrea', 'posterior-segment',
    '9B80', 'Bleeding into the vitreous cavity from retinal or uveal vessels.',
    'Most common causes: proliferative diabetic retinopathy, posterior vitreous detachment with retinal tear, retinal vein occlusion. Blood from neovascularization or torn retinal vessels fills the vitreous gel, blocking light from reaching the retina.',
    ['Sudden painless decrease in vision', 'Floaters and cobwebs', 'Red haze or complete loss of vision', 'Loss of red reflex', 'May obscure fundus view'],
    ['B-scan ultrasonography (if fundus not visible — rule out retinal detachment)', 'Dilated fundus exam if hemorrhage allows', 'OCT if possible', 'Check fellow eye for clues to etiology', 'Labs: glucose, HbA1c, CBC, PT/INR'],
    ['Observation with head elevation (mild, non-recurrent)', 'Urgent vitrectomy if retinal detachment suspected or hemorrhage non-clearing at 1-3 months', 'Treat underlying cause (PRP for PDR, repair retinal tear)', 'Intravitreal anti-VEGF as adjunct for neovascular cause'],
    ['Retinal detachment (underlying or secondary)', 'Ghost cell glaucoma', 'Hemosiderosis of retina', 'Recurrent hemorrhage'],
    'Bleeding inside the eye blocks your vision like looking through a red or dark cloud. The cause must be identified urgently with ultrasound. Many cases clear on their own, but surgery may be needed if the blood does not clear or the retina is in danger.',
    ['Complete sudden vision loss', 'Associated flashes or curtain (retinal detachment)', 'Pain suggesting glaucoma'],
  ),

  // ===== GLAUCOMA (5) =========================================================

  'open-angle-glaucoma': oph(
    'open-angle-glaucoma', 'Primary Open-Angle Glaucoma', 'Glaucoma primario de angulo abierto', 'glaucoma',
    '9C61.0', 'Chronic progressive optic neuropathy with open anterior chamber angle and characteristic visual field loss.',
    'Impaired aqueous outflow through the trabecular meshwork (despite appearing open) increases IOP. Mechanical compression and vascular insufficiency damage retinal ganglion cell axons at the lamina cribrosa. Elevated IOP is the major modifiable risk factor.',
    ['Usually asymptomatic until advanced', 'Peripheral visual field loss (arcuate scotomas)', 'Increased cup-to-disc ratio (>0.5 or asymmetry >0.2)', 'Nerve fiber layer thinning', 'Elevated IOP (>21 mmHg, but not always)'],
    ['Tonometry (Goldmann applanation)', 'Gonioscopy (open angle confirmed)', 'Optic nerve assessment (stereoscopic exam, photography)', 'OCT RNFL and ganglion cell analysis', 'Visual field testing (Humphrey 24-2)', 'Central corneal thickness (pachymetry)'],
    ['Prostaglandin analogue eye drops (latanoprost) — first-line', 'Beta-blocker (timolol), alpha-agonist (brimonidine), or CAI (dorzolamide) as adjuncts', 'Selective laser trabeculoplasty (SLT) — can be first-line or adjunct', 'Trabeculectomy or tube shunt surgery for refractory cases', 'MIGS (minimally invasive glaucoma surgery) for mild-moderate disease'],
    ['Progressive irreversible visual field loss', 'Legal blindness', 'Hypotony and bleb-related complications post-surgery', 'Medication side effects (PGA: lash growth, iris darkening)'],
    'Glaucoma is called the "silent thief of sight" because it slowly damages your peripheral vision without pain. Eye drops lower the pressure to protect your optic nerve. Regular follow-up is lifelong.',
    ['Sudden significant visual field loss', 'Post-surgical hypotony or infection'],
  ),

  'acute-angle-closure': oph(
    'acute-angle-closure', 'Acute Angle-Closure Glaucoma', 'Glaucoma agudo de angulo cerrado', 'glaucoma',
    '9C61.1', 'Ophthalmic emergency with sudden IOP elevation from complete pupillary block and angle closure.',
    'Pupillary block: aqueous humor trapped behind the iris bows the iris forward (iris bombe), physically closing the trabecular meshwork. Triggered by mid-dilation (dim light, anticholinergics, sympathomimetics). Risk factors: hyperopia, shallow anterior chamber, Asian descent.',
    ['Sudden severe eye pain and headache', 'Nausea and vomiting', 'Blurred vision with halos around lights', 'Fixed mid-dilated pupil', 'Conjunctival injection and corneal edema', 'IOP often 40-80 mmHg'],
    ['Tonometry (markedly elevated IOP)', 'Slit-lamp: shallow AC, corneal edema, mid-dilated non-reactive pupil', 'Gonioscopy (appositional or synechial angle closure)', 'Fellow eye gonioscopy (often narrow angle)', 'Anterior segment OCT or UBM'],
    ['Emergent IOP-lowering: topical timolol 0.5%, apraclonidine 1%, pilocarpine 2%', 'IV acetazolamide 500mg', 'IV mannitol 1-2 g/kg if refractory', 'Laser peripheral iridotomy (LPI) — definitive treatment once cornea clears', 'Prophylactic LPI in fellow eye', 'Lens extraction if persistent or lens-related mechanism'],
    ['Peripheral anterior synechiae (PAS)', 'Chronic angle-closure glaucoma', 'Optic nerve damage and permanent vision loss', 'Iris atrophy', 'Cataract (glaukomflecken)'],
    'Acute angle-closure glaucoma is an emergency where pressure inside the eye spikes suddenly. It causes severe pain, nausea, and blurred vision. Go to the ER immediately. A quick laser procedure (iridotomy) prevents it from happening again.',
    ['Severe eye pain with blurred vision', 'Nausea/vomiting with eye symptoms', 'Halos around lights', 'Red eye with fixed dilated pupil'],
  ),

  'chronic-angle-closure': oph(
    'chronic-angle-closure', 'Chronic Angle-Closure Glaucoma', 'Glaucoma cronico de angulo cerrado', 'glaucoma',
    '9C61.2', 'Gradual angle closure with peripheral anterior synechiae causing progressive IOP elevation and optic neuropathy.',
    'Repeated subclinical angle-closure episodes cause progressive peripheral anterior synechiae (PAS), permanently fusing iris to trabecular meshwork. Gradual IOP elevation damages the optic nerve. Often asymptomatic until advanced.',
    ['Often asymptomatic (no acute attacks)', 'Elevated IOP', 'Optic disc cupping and RNFL thinning', 'Peripheral visual field loss', 'Narrow angle with PAS on gonioscopy'],
    ['Gonioscopy (PAS, narrow angle)', 'Tonometry', 'OCT RNFL and optic nerve', 'Visual field testing', 'Anterior segment OCT or UBM'],
    ['Laser peripheral iridotomy', 'IOP-lowering medications (aqueous suppressants preferred)', 'Lens extraction (cataract surgery widens the angle)', 'Goniosynechialysis if recent PAS', 'Filtering surgery if uncontrolled'],
    ['Progressive optic neuropathy', 'Conversion to refractory glaucoma', 'Vision loss despite treatment'],
    'Chronic angle-closure glaucoma quietly narrows the drainage angle of your eye over time, raising pressure without the dramatic symptoms of an acute attack. Regular monitoring and treatment protect your vision.',
    ['Sudden IOP spike', 'Acute symptoms (pain, halos, nausea)'],
  ),

  'normal-tension-glaucoma': oph(
    'normal-tension-glaucoma', 'Normal Tension Glaucoma', 'Glaucoma de tension normal', 'glaucoma',
    '9C61.3', 'Glaucomatous optic neuropathy with consistently normal IOP (< 21 mmHg).',
    'IOP-independent mechanisms: vascular dysregulation (vasospasm, nocturnal hypotension), oxidative stress, and increased susceptibility of the lamina cribrosa. More common in Japanese populations. Associated with migraines, Raynaud phenomenon, and sleep apnea.',
    ['Progressive optic disc cupping', 'Visual field defects (often closer to fixation than POAG)', 'IOP consistently < 21 mmHg', 'Disc hemorrhages more common than POAG', 'Peripapillary atrophy'],
    ['24-hour IOP measurement (to exclude nocturnal spikes)', 'Visual field testing', 'OCT RNFL and ganglion cell analysis', 'Neuroimaging (MRI brain/orbits) to exclude compressive lesion', 'Blood pressure monitoring (nocturnal dips)', 'Carotid Doppler and cardiovascular workup'],
    ['IOP lowering to 30% below baseline (proven benefit)', 'Prostaglandin analogues first-line', 'SLT or surgery if progression despite medications', 'Address vascular risk factors (avoid nocturnal hypotension)', 'Sleep apnea treatment if present'],
    ['Progressive visual field loss despite treatment', 'Blindness', 'Misdiagnosis (compressive optic neuropathy mimics NTG)'],
    'Normal tension glaucoma means your optic nerve is damaged even though eye pressure is normal. Lowering the pressure further with drops or laser still helps. Your doctor may also check for blood flow and sleep issues.',
    ['Rapid visual field progression', 'Neurological symptoms suggesting compressive lesion'],
  ),

  'secondary-glaucoma': oph(
    'secondary-glaucoma', 'Secondary Glaucoma', 'Glaucoma secundario', 'glaucoma',
    '9C62', 'Elevated IOP and glaucomatous optic neuropathy caused by an identifiable ocular or systemic condition.',
    'Mechanisms include trabecular meshwork obstruction (pigment dispersion, pseudoexfoliation, inflammation), neovascularization of the angle (diabetic, CRVO), steroid-induced aqueous outflow reduction, or lens-related (phacomorphic, phacolytic) angle narrowing.',
    ['Elevated IOP with identifiable cause', 'Optic disc cupping', 'Visual field loss', 'Signs of underlying etiology (pigment on endothelium, pseudoexfoliation, rubeosis)', 'May present acutely or chronically'],
    ['Tonometry and gonioscopy', 'Slit-lamp for pigment, pseudoexfoliation, neovascularization', 'Dilated exam (lens status, posterior segment)', 'Visual field and OCT', 'Review medication history (steroids)'],
    ['Treat underlying cause (discontinue steroids, anti-VEGF for NVG, cataract extraction for lens-related)', 'IOP-lowering medications', 'Laser trabeculoplasty or cyclophotocoagulation', 'Tube shunt or trabeculectomy', 'PRP for neovascular glaucoma'],
    ['Permanent optic nerve damage', 'Refractory IOP elevation', 'Phthisis bulbi in end-stage NVG', 'Need for multiple surgeries'],
    'Secondary glaucoma means another eye condition is raising the pressure inside your eye. Treating that underlying problem is the first step. Additional pressure-lowering drops or surgery may also be needed.',
    ['Sudden painful vision loss (neovascular glaucoma)', 'IOP spikes > 40 mmHg', 'New rubeosis iridis'],
  ),

  // ===== NEURO-OPHTHALMOLOGY (5) ==============================================

  'optic-neuritis': oph(
    'optic-neuritis', 'Optic Neuritis', 'Neuritis optica', 'neuro-ophthalmology',
    '9C40', 'Inflammatory demyelination of the optic nerve, strongly associated with multiple sclerosis.',
    'Autoimmune demyelination of the optic nerve (retrobulbar most common). T-cell-mediated inflammation causes axonal conduction block. Strong association with MS (50% develop MS within 15 years). Aquaporin-4 (NMO) and MOG antibodies define separate entities.',
    ['Unilateral painful vision loss (worse with eye movement)', 'Dyschromatopsia (impaired color vision, especially red desaturation)', 'Relative afferent pupillary defect (RAPD)', 'Optic disc may appear normal (retrobulbar) or swollen', 'Uhthoff phenomenon (worsening with heat/exercise)'],
    ['Clinical diagnosis (pain, RAPD, dyschromatopsia)', 'MRI brain and orbits with gadolinium (optic nerve enhancement, white matter lesions)', 'OCT (RNFL thinning in chronic phase)', 'Visual field (central or cecocentral scotoma)', 'CSF: oligoclonal bands if MS workup', 'Aquaporin-4 and MOG antibodies'],
    ['IV methylprednisolone 1g/day x3 days then oral taper (speeds recovery, no change in final outcome)', 'Disease-modifying therapy if MS diagnosed', 'Plasma exchange for NMO or severe non-responsive cases', 'Long-term MS monitoring'],
    ['Permanent optic atrophy and vision loss', 'Conversion to MS (50%)', 'NMO spectrum disorder (severe bilateral vision loss)', 'Recurrence'],
    'Optic neuritis is inflammation of the nerve that connects the eye to the brain. It causes painful vision loss in one eye. Most people recover well with steroid treatment. Your doctor may check for multiple sclerosis with an MRI.',
    ['Bilateral simultaneous vision loss (NMO emergency)', 'Severe vision loss < 20/200', 'No improvement after 2 weeks of steroids'],
  ),

  'papilledema': oph(
    'papilledema', 'Papilledema', 'Papiledema', 'neuro-ophthalmology',
    '9C41', 'Bilateral optic disc edema secondary to raised intracranial pressure.',
    'Elevated ICP transmitted through the optic nerve sheath impedes axoplasmic flow in retinal ganglion cell axons, causing axonal swelling and disc edema. Causes: space-occupying lesion, idiopathic intracranial hypertension (IIH), venous sinus thrombosis, meningitis.',
    ['Bilateral disc edema (may be asymmetric)', 'Transient visual obscurations (seconds)', 'Headache worse in morning or with Valsalva', 'Pulsatile tinnitus', 'Enlarged blind spot on visual field', 'Diplopia from CN VI palsy (false localizing sign)'],
    ['Dilated fundus exam (disc edema, peripapillary hemorrhages, obscured vessels)', 'OCT (RNFL thickening)', 'Visual field (enlarged blind spot, constriction)', 'MRI brain with MRV (rule out mass, venous sinus thrombosis)', 'Lumbar puncture with opening pressure (>25 cm H2O)', 'MRI orbits for optic nerve sheath distension'],
    ['Treat underlying cause (tumor resection, anticoagulation for VST)', 'IIH: weight loss, acetazolamide 500mg-2g/day', 'Topiramate (weight loss + ICP reduction)', 'Optic nerve sheath fenestration for progressive vision loss', 'VP or LP shunt for refractory IIH', 'Serial visual field and OCT monitoring'],
    ['Progressive visual field loss and blindness', 'Optic atrophy', 'CN VI palsy with diplopia', 'Chronic headache'],
    'Papilledema means the nerves in both eyes are swollen because of high pressure inside the head. This needs urgent investigation with brain imaging. Treatment targets the underlying cause and protects your vision.',
    ['Rapidly progressive vision loss', 'New neurological symptoms (weakness, seizure)', 'Sudden severe headache (rule out hemorrhage)', 'Altered consciousness'],
  ),

  'cn-iii-iv-vi-palsy': oph(
    'cn-iii-iv-vi-palsy', 'Cranial Nerve Palsies (III, IV, VI)', 'Paralisis de nervios craneales (III, IV, VI)', 'neuro-ophthalmology',
    '9C50', 'Dysfunction of oculomotor (III), trochlear (IV), or abducens (VI) nerves causing diplopia and strabismus.',
    'CN III: controls superior/medial/inferior recti, inferior oblique, levator, and pupil. Palsy from compression (aneurysm, uncal herniation — pupil involved) or microvascular (diabetes — pupil spared). CN IV: trochlear nerve; trauma most common cause. CN VI: abducens; most common palsy; elevated ICP, microvascular disease.',
    ['CN III: ptosis, "down and out" eye, dilated pupil (compressive) or spared pupil (microvascular)', 'CN IV: vertical/torsional diplopia, head tilt to opposite side', 'CN VI: horizontal diplopia worse at distance, esotropia', 'Pain may be present', 'Variable pupil involvement'],
    ['Complete motility and alignment exam (cover test, Maddox rod)', 'Pupil examination (critical for CN III)', 'MRI/MRA brain (rule out aneurysm, mass, demyelination)', 'CTA or conventional angiography for suspected PCOM aneurysm (CN III with pupil involvement)', 'Labs: glucose, HbA1c, ESR, CRP (microvascular, GCA)', 'LP if CN VI with papilledema'],
    ['CN III with pupil involvement: emergent imaging for PCOM aneurysm', 'Microvascular palsies: observe 3 months (most resolve)', 'Prism glasses for stable diplopia', 'Strabismus surgery for persistent deviation', 'Treat underlying cause (GCA, tumor, IIH)'],
    ['Ruptured aneurysm (CN III)', 'Permanent diplopia', 'Amblyopia in children', 'Aberrant regeneration (CN III)'],
    'A cranial nerve palsy means one of the nerves controlling eye movement is not working. This causes double vision. The most important step is finding the cause, especially for CN III which can signal a brain aneurysm.',
    ['CN III palsy with dilated pupil (aneurysm until proven otherwise)', 'Bilateral CN VI palsy (raised ICP)', 'Associated neurological deficits', 'Progressive palsy'],
  ),

  'horner-syndrome': oph(
    'horner-syndrome', 'Horner Syndrome', 'Sindrome de Horner', 'neuro-ophthalmology',
    '8D89', 'Disruption of the oculosympathetic pathway causing miosis, ptosis, and anhidrosis.',
    'Three-neuron sympathetic chain: first-order (hypothalamus to ciliospinal center C8-T2), second-order (preganglionic, exits T1, over lung apex, to superior cervical ganglion), third-order (postganglionic, along ICA to orbit). Lesion at any level causes ipsilateral findings.',
    ['Ipsilateral miosis (constricted pupil)', 'Mild ptosis (1-2mm, Muller muscle dysfunction)', 'Apparent enophthalmos', 'Facial anhidrosis (first/second-order only)', 'Dilation lag in dim light'],
    ['Cocaine drop test (fails to dilate Horner pupil)', 'Apraclonidine test (reverses anisocoria — denervation supersensitivity)', 'Hydroxyamphetamine test (localizes to third-order if pupil fails to dilate)', 'MRI brain/neck/chest based on localization', 'CTA neck if carotid dissection suspected', 'Chest imaging (Pancoast tumor for second-order)'],
    ['Urgent imaging based on localization', 'Carotid dissection: anticoagulation or antiplatelet therapy', 'Pancoast tumor: oncology referral', 'Pediatric: workup for neuroblastoma', 'No treatment needed if benign/idiopathic'],
    ['Missed carotid dissection leading to stroke', 'Undiagnosed malignancy (neuroblastoma, Pancoast tumor)', 'Delayed treatment'],
    'Horner syndrome is a set of signs (small pupil, droopy eyelid) caused by interruption of a nerve pathway. While sometimes harmless, it can indicate serious conditions like a torn artery or tumor, so imaging is important.',
    ['Acute onset with neck/face pain (carotid dissection)', 'In a child (neuroblastoma)', 'With arm/hand weakness (Pancoast tumor)', 'Associated with stroke symptoms'],
  ),

  'homonymous-hemianopia': oph(
    'homonymous-hemianopia', 'Homonymous Hemianopia', 'Hemianopsia homonima', 'neuro-ophthalmology',
    '9D90.1', 'Loss of the same visual field half in both eyes due to a retrochiasmal lesion.',
    'Lesion of the optic tract, lateral geniculate nucleus, optic radiation, or occipital cortex causes loss of the contralateral visual field in both eyes. Most common cause is posterior cerebral artery stroke. Tumors, trauma, and demyelination are other causes.',
    ['Patient may not notice (anosognosia)', 'Bumping into objects on affected side', 'Reading difficulty (right hemianopia)', 'Congruent field loss (more congruent posteriorly)', 'Optic tract lesion: RAPD contralateral to lesion, incongruent'],
    ['Confrontation visual field testing', 'Humphrey or Goldmann perimetry (congruent homonymous defect)', 'MRI brain (stroke, tumor, demyelination)', 'CT angiography or MRA for vascular etiology', 'OCT: retrograde RNFL thinning (chronic optic tract lesions)'],
    ['Treat underlying cause (stroke protocol, tumor resection)', 'Visual rehabilitation and scanning training', 'Prism glasses (Fresnel or Peli prisms for field expansion)', 'Driving assessment and restriction counseling', 'Occupational therapy'],
    ['Permanent visual field loss', 'Inability to drive (legal implications)', 'Falls and injuries', 'Reading difficulty', 'Reduced quality of life'],
    'Homonymous hemianopia means you have lost the same half of vision in both eyes because of damage in the brain (often a stroke). Therapy can teach you scanning techniques to compensate, and special prism glasses may help.',
    ['Acute onset (stroke until proven otherwise)', 'Progressive field loss (tumor)', 'Associated neurological deficits'],
  ),

  // ===== PEDIATRIC (4) ========================================================

  'amblyopia': oph(
    'amblyopia', 'Amblyopia ("Lazy Eye")', 'Ambliopia ("ojo perezoso")', 'pediatric',
    '9D90.0', 'Reduced best-corrected visual acuity in one or both eyes due to abnormal visual development in childhood.',
    'During the critical period (birth to ~8 years), visual cortex requires clear, aligned images from both eyes. Deprivation (cataract, ptosis), strabismus, or unequal refractive error causes cortical suppression of the weaker eye. Neurons in V1 lose responsiveness to the amblyopic eye.',
    ['Reduced visual acuity not correctable by glasses alone', 'Often asymptomatic (detected on screening)', 'Crowding phenomenon (reads single letters better than a line)', 'Strabismus may be present', 'Relative afferent pupillary defect (severe cases)'],
    ['Age-appropriate visual acuity testing', 'Cycloplegic refraction (identify refractive error)', 'Cover/uncover test for strabismus', 'Red reflex (rule out media opacity)', 'Dilated fundus exam'],
    ['Full spectacle correction (first step for all types)', 'Patching of the better eye (2-6 hours/day based on severity)', 'Atropine penalization of better eye (alternative to patching)', 'Treat underlying cause (cataract surgery, strabismus surgery)', 'Continue treatment until vision stabilizes or age 10-12'],
    ['Permanent vision loss if untreated past critical period', 'Recurrence after discontinuing treatment', 'Reverse amblyopia from over-patching', 'Psychosocial impact on child'],
    'Amblyopia means one eye did not learn to see well during childhood. The brain favors the stronger eye. Patching the good eye forces the weaker eye to work harder. Treatment works best when started early.',
    [],
  ),

  'strabismus': oph(
    'strabismus', 'Strabismus', 'Estrabismo', 'pediatric',
    '9C80', 'Misalignment of the visual axes; eyes do not point in the same direction simultaneously.',
    'Imbalance between extraocular muscles, abnormal innervation, or sensory deprivation causes ocular misalignment. May be congenital (infantile esotropia) or acquired. Esotropia (inward), exotropia (outward), hyper/hypotropia (vertical). Risk factors: family history, prematurity, refractive error.',
    ['One eye deviates while the other fixates', 'Esotropia: inward deviation (most common in children)', 'Exotropia: outward deviation (intermittent common in older children)', 'Head tilt or turn to compensate', 'Diplopia in acquired adult strabismus'],
    ['Cover/uncover and alternate cover test', 'Prism and cover measurement of deviation', 'Cycloplegic refraction', 'Motility examination in all positions of gaze', 'Sensory testing (Worth 4-dot, stereoacuity)'],
    ['Correct refractive error (accommodative esotropia resolves with hyperopic glasses)', 'Amblyopia treatment (patching/atropine)', 'Strabismus surgery (recession/resection of extraocular muscles)', 'Botulinum toxin injection (temporary or diagnostic)', 'Prism glasses for small stable deviations'],
    ['Amblyopia (most important)', 'Loss of binocular vision and stereopsis', 'Abnormal head posture', 'Psychosocial effects', 'Diplopia after late surgery'],
    'Strabismus means the eyes are not aligned properly. In children, this can lead to a "lazy eye" if untreated. Glasses fix some types; others need surgery to reposition the eye muscles. Early treatment gives the best results.',
    ['New-onset strabismus in an adult (rule out neurological cause)', 'Sudden esotropia in a child > 6 months (rule out CN VI palsy)'],
  ),

  'retinoblastoma': oph(
    'retinoblastoma', 'Retinoblastoma', 'Retinoblastoma', 'pediatric',
    '2D01', 'Most common primary intraocular malignancy of childhood, arising from immature retinal cells.',
    'Biallelic inactivation of the RB1 tumor suppressor gene (13q14). Heritable (40%): germline mutation + somatic second hit; bilateral, younger age, risk of second malignancies. Non-heritable (60%): both somatic mutations in one cell; unilateral. Tumor arises from cone precursor cells.',
    ['Leukocoria (white pupillary reflex — most common presentation)', 'Strabismus (second most common)', 'Red, painful eye with secondary glaucoma', 'Pseudohypopyon from tumor seeding', 'Orbital inflammation mimicking cellulitis (advanced)'],
    ['Red reflex testing (absent or white)', 'Dilated fundus exam under anesthesia (EUA)', 'B-scan ultrasound (calcification)', 'MRI orbits and brain (no CT — avoid radiation in RB1 carriers)', 'Genetic testing for RB1 mutation', 'Staging: International Classification of Retinoblastoma (ICRB)'],
    ['Intra-arterial chemotherapy (melphalan via ophthalmic artery)', 'Systemic chemoreduction (carboplatin, etoposide, vincristine) + focal consolidation', 'Focal therapy: laser photocoagulation, cryotherapy, brachytherapy', 'Intravitreal chemotherapy (melphalan) for vitreous seeds', 'Enucleation for advanced unilateral disease', 'External beam radiation avoided if possible (second malignancy risk)'],
    ['Metastasis (CNS, bone) if untreated', 'Second primary malignancy (osteosarcoma — heritable RB)', 'Vision loss or enucleation', 'Pinealoblastoma (trilateral retinoblastoma)'],
    'Retinoblastoma is an eye cancer in young children. A white pupil in photos is often the first sign. Modern treatment can save both life and vision in most cases. Genetic testing helps identify siblings at risk.',
    ['White pupillary reflex (leukocoria)', 'Rapid eye swelling', 'New strabismus in an infant', 'Family history of retinoblastoma'],
  ),

  'retinopathy-of-prematurity': oph(
    'retinopathy-of-prematurity', 'Retinopathy of Prematurity', 'Retinopatia del prematuro', 'pediatric',
    '9B72', 'Vasoproliferative retinal disorder affecting premature infants due to incomplete retinal vascularization.',
    'Retinal vessels grow centrifugally from the optic disc, completing vascularization at ~40 weeks gestation. Premature birth and supplemental oxygen disrupt this process. Phase 1: hyperoxia causes vasocessation. Phase 2: relative hypoxia triggers VEGF-driven neovascularization. Risk factors: <32 weeks GA, <1500g birth weight.',
    ['Demarcation line between vascular and avascular retina (Stage 1)', 'Ridge with volume (Stage 2)', 'Extraretinal neovascularization (Stage 3)', 'Partial retinal detachment (Stage 4)', 'Total retinal detachment (Stage 5)', 'Plus disease: dilated, tortuous posterior vessels'],
    ['Dilated retinal exam at 31 weeks PMA or 4 weeks postnatal age', 'Serial screening every 1-2 weeks until retina mature', 'RetCam wide-field imaging', 'Classification by zone, stage, and plus disease'],
    ['Observation for Stage 1-2 without plus (most regress spontaneously)', 'Laser photocoagulation to avascular retina (Type 1 ROP)', 'Intravitreal anti-VEGF (bevacizumab) for zone I or aggressive posterior ROP', 'Vitrectomy for Stage 4B-5 retinal detachment', 'Long-term monitoring for late complications'],
    ['Retinal detachment and blindness', 'High myopia', 'Strabismus and amblyopia', 'Late-onset retinal detachment', 'Recurrence after anti-VEGF (requires extended follow-up)'],
    'Retinopathy of prematurity (ROP) affects blood vessel growth in premature babies\' eyes. Regular screening exams in the NICU detect it early. Laser or injection treatments can prevent blindness when needed.',
    ['Stage 3 with plus disease (Type 1 ROP — needs treatment within 72 hours)', 'Aggressive posterior ROP', 'Any retinal detachment'],
  ),

  // ===== TRAUMA (4) ===========================================================

  'chemical-burn': oph(
    'chemical-burn', 'Chemical Eye Burn', 'Quemadura quimica ocular', 'trauma',
    'NF06', 'Ocular injury from acid or alkali exposure; alkali burns are more severe due to tissue penetration.',
    'Alkali (pH >11): saponifies cell membranes, penetrates rapidly into anterior chamber (lye, ammonia, cement). Acid (pH <4): coagulates surface proteins, limiting penetration (except hydrofluoric acid). Damage classified by Roper-Hall/Dua classification based on limbal ischemia and corneal clarity.',
    ['Severe eye pain and blepharospasm', 'Tearing and blurred vision', 'Conjunctival blanching (ischemia — worse sign than redness)', 'Corneal haze or opacification', 'Limbal stem cell damage (whitening of limbus)', 'Elevated IOP from trabeculitis'],
    ['Check pH of conjunctival fornix immediately (before and after irrigation)', 'Slit-lamp: corneal clarity, epithelial defect, limbal ischemia assessment', 'IOP measurement', 'Evert lids to remove particulate matter', 'Classify severity (Roper-Hall grade I-IV)'],
    ['IMMEDIATE copious irrigation with saline or water for 30+ minutes until pH 7.0-7.4', 'Double evert lids and sweep fornices for particulate matter', 'Topical antibiotic (moxifloxacin), cycloplegic (atropine), preservative-free lubrication', 'Topical steroid (prednisolone) for first 7-10 days (then taper to avoid melting)', 'Vitamin C (topical and oral) and doxycycline (anti-collagenase)', 'Limbal stem cell transplant and amniotic membrane for severe cases'],
    ['Corneal scarring and neovascularization', 'Limbal stem cell deficiency', 'Symblepharon (conjunctival adhesions)', 'Secondary glaucoma', 'Corneal perforation', 'Permanent vision loss'],
    'Chemical burns to the eye are emergencies. The single most important step is to rinse the eye with water immediately and continuously for at least 30 minutes. Do this BEFORE going to the hospital.',
    ['Any chemical splash to the eye', 'pH not normalizing after irrigation', 'Corneal opacification', 'Limbal blanching'],
  ),

  'globe-rupture': oph(
    'globe-rupture', 'Open Globe Injury (Globe Rupture)', 'Ruptura de globo ocular', 'trauma',
    'NA06', 'Full-thickness defect of the cornea and/or sclera from blunt or penetrating trauma.',
    'Penetrating: single full-thickness wound (sharp object). Perforating: through-and-through injury (entrance and exit wound). Rupture: blunt force causes globe to burst at weakest point (typically limbus or at sites of prior surgery). Intraocular foreign body (IOFB) may be present.',
    ['Irregular or peaked pupil (teardrop pointing to wound)', 'Reduced visual acuity (often severe)', 'Shallow anterior chamber', 'Positive Seidel test (fluorescein streaming from wound)', 'Subconjunctival hemorrhage (may hide scleral laceration)', 'Low IOP', 'Hyphema, vitreous hemorrhage, lens dislocation'],
    ['Slit-lamp exam (avoid pressure on globe)', 'Seidel test (fluorescein over suspected wound)', 'CT orbits (NO MRI until IOFB ruled out)', 'B-scan ultrasound only if surgeon deems safe', 'Visual acuity (even light perception is important prognostically)'],
    ['Protect eye with rigid shield (NO pressure patch)', 'NPO, tetanus prophylaxis, antiemetics to prevent Valsalva', 'IV antibiotics (vancomycin + ceftazidime for endophthalmitis prophylaxis)', 'Urgent surgical repair in the OR', 'IOFB removal (vitrectomy)', 'Assess for and repair retinal detachment'],
    ['Endophthalmitis', 'Sympathetic ophthalmia (autoimmune inflammation of fellow eye)', 'Retinal detachment', 'Phthisis bulbi (globe shrinkage)', 'Permanent vision loss or enucleation'],
    'An open globe injury means the wall of the eye has been broken. Do NOT press on the eye. Cover it with a rigid shield and go to the ER immediately. Surgery is needed to repair the eye and prevent infection.',
    ['Any suspected open globe (peaked pupil, low IOP, visible wound)', 'Severe blunt trauma with decreased vision', 'History of high-velocity projectile or hammering'],
  ),

  'hyphema': oph(
    'hyphema', 'Hyphema', 'Hipema', 'trauma',
    'NA06.1', 'Blood in the anterior chamber of the eye, typically from blunt ocular trauma.',
    'Blunt trauma causes tearing of iris or ciliary body blood vessels (most common). Non-traumatic causes: rubeosis iridis, blood dyscrasias, anticoagulants, iris melanoma. Blood layers inferiorly in the anterior chamber. Re-bleeding risk peaks at days 3-5.',
    ['Visible blood layering in anterior chamber', 'Eye pain and photophobia', 'Blurred vision (proportional to amount of blood)', 'Elevated IOP from trabecular meshwork obstruction', 'History of blunt eye trauma (sports, assault)'],
    ['Slit-lamp exam (grade: I = <1/3 AC, II = 1/3-1/2, III = >1/2, IV = total "8-ball" hyphema)', 'IOP measurement', 'Dilated fundus exam if view permits (rule out retinal detachment)', 'B-scan if fundus not visible', 'Sickle cell screen (in at-risk populations)', 'CT orbits if associated fracture or globe rupture suspected'],
    ['Head elevation 30-45 degrees and bed rest', 'Rigid eye shield', 'Topical cycloplegic (atropine 1%) and topical prednisolone', 'Avoid aspirin/NSAIDs and anticoagulants', 'Topical timolol or oral acetazolamide for elevated IOP (avoid CAIs in sickle cell)', 'Surgical evacuation (anterior chamber washout) for total hyphema, persistent IOP elevation, or corneal bloodstaining'],
    ['Re-bleed (15-20% at days 3-5, higher in sickle cell)', 'Secondary glaucoma', 'Corneal blood staining', 'Optic atrophy from sustained IOP elevation', 'Amblyopia in children'],
    'Hyphema is bleeding inside the front of the eye, usually from an injury. Rest with your head elevated and wear a protective shield. Avoid straining or blood-thinning medicines. A re-bleed can occur in the first week.',
    ['Total (8-ball) hyphema', 'IOP > 30 mmHg', 'Sickle cell disease with hyphema', 'Suspected open globe injury'],
  ),

  'orbital-fracture': oph(
    'orbital-fracture', 'Orbital Fracture', 'Fractura orbitaria', 'trauma',
    'NA02', 'Fracture of the orbital bones, most commonly the floor (blowout) and medial wall.',
    'Blunt force to orbit increases intraorbital hydraulic pressure, fracturing the thinnest walls (floor over maxillary sinus, medial wall/lamina papyracea). Orbital contents may herniate into the sinus. Trapdoor fracture in children entraps muscle causing oculocardiac reflex. Zygomatic fractures displace the lateral wall.',
    ['Periorbital ecchymosis and edema', 'Enophthalmos (globe sinks)', 'Infraorbital nerve hypoesthesia (cheek numbness)', 'Restricted upgaze with diplopia (floor fracture with tissue entrapment)', 'Subcutaneous emphysema on nose blowing', 'Epistaxis'],
    ['CT orbits and sinuses (thin cuts, coronal and sagittal reconstructions)', 'Forced duction test (distinguish entrapment from edema)', 'Hertel exophthalmometry (enophthalmos measurement)', 'Full ophthalmic exam (rule out globe injury, hyphema, retinal detachment)', 'Visual acuity and pupil exam (rule out optic neuropathy)'],
    ['Ice, head elevation, avoid nose blowing and straining', 'Oral antibiotics (amoxicillin-clavulanate) for sinus communication', 'Urgent surgical repair for: muscle entrapment (especially pediatric trapdoor), oculocardiac reflex, large fracture with enophthalmos >2mm, persistent diplopia', 'Implant placement (titanium mesh, porous polyethylene) to reconstruct orbital floor', 'Observation for small asymptomatic fractures'],
    ['Persistent diplopia', 'Cosmetically significant enophthalmos', 'Infraorbital nerve hypoesthesia (may be permanent)', 'Implant infection or migration', 'Optic neuropathy (rare, retrobulbar hemorrhage)'],
    'An orbital fracture is a break in the bone around the eye, usually from a direct blow. Avoid blowing your nose as this pushes air into the tissues around the eye. Surgery is needed if eye movement is restricted or the eye sinks back.',
    ['Decreased vision (optic nerve compression / retrobulbar hemorrhage)', 'Proptosis with tight orbit (compartment syndrome)', 'White-eyed blowout in a child with nausea/vomiting (entrapment emergency)'],
  ),

  // ===== REFRACTIVE (4) =======================================================

  'myopia': oph(
    'myopia', 'Myopia (Nearsightedness)', 'Miopia', 'refractive',
    '9D00.0', 'Refractive error where parallel light focuses in front of the retina, causing blurry distance vision.',
    'Eye too long (axial myopia) or cornea/lens too steep (refractive myopia). Axial elongation is the primary mechanism. Genetic predisposition plus environmental factors (prolonged near work, reduced outdoor time). High myopia (> -6.00 D) associated with pathologic complications. Prevalence rising globally.',
    ['Blurry distance vision', 'Squinting to see far objects', 'Eye strain and headaches', 'Good near vision', 'Early onset in school-age children'],
    ['Manifest and cycloplegic refraction', 'Visual acuity testing', 'Keratometry and corneal topography', 'Axial length measurement (biometry)', 'Dilated fundus exam (peripheral retina, disc, macula)'],
    ['Spectacle correction (concave/minus lenses)', 'Contact lenses (soft, RGP)', 'Myopia control in children: low-dose atropine 0.01-0.05%, orthokeratology, peripheral defocus lenses', 'LASIK, PRK, or SMILE for adults with stable refraction', 'ICL (implantable collamer lens) for high myopia'],
    ['Retinal detachment (higher risk in high myopia)', 'Myopic macular degeneration', 'Glaucoma', 'Choroidal neovascularization', 'Posterior staphyloma'],
    'Myopia means you see near objects clearly but distance is blurry. Glasses or contacts correct it. In children, special drops or lenses can slow progression. High myopia needs regular retinal checks.',
    ['Sudden floaters or flashes (retinal tear/detachment)', 'Rapid change in prescription'],
  ),

  'hyperopia': oph(
    'hyperopia', 'Hyperopia (Farsightedness)', 'Hipermetropia', 'refractive',
    '9D00.1', 'Refractive error where parallel light focuses behind the retina, requiring accommodation for clear vision.',
    'Eye too short (axial hyperopia) or cornea/lens too flat (refractive hyperopia). Children have physiologic hyperopia that decreases with growth. Accommodation can compensate in young patients but causes strain. Uncorrected hyperopia is the most common cause of accommodative esotropia in children.',
    ['Difficulty with near tasks (reading, computer)', 'Eye strain and frontal headaches after near work', 'Good distance vision in mild cases (accommodated)', 'Blurry vision at all distances in high hyperopia', 'Accommodative esotropia in children'],
    ['Manifest and cycloplegic refraction (cycloplegic essential in children)', 'Visual acuity at distance and near', 'Cover test for accommodative esotropia', 'Keratometry'],
    ['Spectacle correction (convex/plus lenses)', 'Contact lenses', 'LASIK, PRK for stable adults', 'Refractive lens exchange for high hyperopia or presbyopic patients', 'Full hyperopic correction in children with esotropia'],
    ['Accommodative esotropia and amblyopia (children)', 'Angle-closure glaucoma (short eye with shallow anterior chamber)', 'Asthenopia (eye strain)'],
    'Hyperopia means your eye is slightly shorter than average, so it has to work harder to focus, especially up close. Glasses relax the focusing effort and relieve eye strain. Children need careful testing with dilating drops.',
    ['New-onset esotropia in a child', 'Acute angle-closure symptoms in a hyperopic patient'],
  ),

  'astigmatism': oph(
    'astigmatism', 'Astigmatism', 'Astigmatismo', 'refractive',
    '9D00.2', 'Refractive error from unequal curvature of the cornea or lens, causing directional blur.',
    'Cornea or lens has different refractive power along different meridians (like a football rather than a basketball). Regular astigmatism: principal meridians are 90 degrees apart (with-the-rule, against-the-rule, oblique). Irregular astigmatism: keratoconus, corneal scarring, or post-surgical.',
    ['Blurred or distorted vision at all distances', 'Eye strain and headache', 'Difficulty with night driving (ghosting of lights)', 'Squinting and tilting head', 'Often coexists with myopia or hyperopia'],
    ['Manifest refraction (cylinder component)', 'Keratometry (corneal astigmatism)', 'Corneal topography (regular vs irregular, keratoconus screening)', 'Autorefraction', 'Visual acuity with and without correction'],
    ['Spectacle correction (cylindrical lenses)', 'Toric contact lenses', 'LASIK, PRK, or SMILE (corrects up to ~6D cylinder)', 'Toric IOL at time of cataract surgery', 'Rigid gas permeable lenses for irregular astigmatism', 'Cross-linking if keratoconus suspected'],
    ['Uncorrected amblyopia (unilateral high astigmatism in children)', 'Missed keratoconus progressing to hydrops', 'Residual astigmatism after refractive surgery'],
    'Astigmatism means the front of your eye is curved more like a football than a basketball, causing blur in one direction. Glasses, special contact lenses, or laser surgery can correct it.',
    ['Rapidly changing astigmatism in a young person (keratoconus)'],
  ),

  'presbyopia': oph(
    'presbyopia', 'Presbyopia', 'Presbicia', 'refractive',
    '9D00.3', 'Age-related loss of accommodative ability causing difficulty with near vision, typically after age 40.',
    'Crystalline lens hardens and loses elasticity with age, reducing its ability to change shape (accommodate). Ciliary muscle contracts but cannot increase lens curvature. Progressive loss begins in childhood but becomes symptomatic around age 40-45. Universal condition.',
    ['Difficulty reading small print (holds reading material farther away)', 'Eye strain and headache with near work', 'Need for brighter light when reading', 'Normal distance vision (if no other refractive error)', 'Progressive worsening until ~age 65'],
    ['Near visual acuity testing (Jaeger or Rosenbaum chart)', 'Amplitude of accommodation measurement', 'Manifest refraction (distance and near add)', 'Assess for underlying refractive error'],
    ['Reading glasses (plus lenses for near)', 'Progressive (multifocal) or bifocal spectacles', 'Multifocal contact lenses or monovision contact lenses', 'Refractive surgery: monovision LASIK, corneal inlays', 'Refractive lens exchange with multifocal IOL'],
    ['Reduced quality of life without correction', 'Falls risk in elderly with multifocals on stairs', 'Eye strain and headaches'],
    'Presbyopia is a normal part of aging where the lens in your eye becomes less flexible, making close-up reading difficult. Reading glasses are the simplest solution. It happens to everyone, usually around age 40-45.',
    [],
  ),

};

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** All entry IDs */
export const OPHTHALMOLOGY_ENTRY_IDS = Object.keys(OPHTHALMOLOGY_ENTRIES);

/** Entries filtered by category */
export const getOphthalmologyByCategory = (
  category: OphthalmologyDatabaseCategory,
): OphthalmologyEntry[] =>
  Object.values(OPHTHALMOLOGY_ENTRIES).filter((e) => e.category === category);

/** Lookup a single entry (returns undefined if not found) */
export const getOphthalmologyEntry = (id: string): OphthalmologyEntry | undefined =>
  OPHTHALMOLOGY_ENTRIES[id];

/** All unique categories present in the database */
export const OPHTHALMOLOGY_DATABASE_CATEGORIES: OphthalmologyDatabaseCategory[] = [
  'anterior-segment', 'posterior-segment', 'glaucoma',
  'neuro-ophthalmology', 'pediatric', 'oculoplastics',
  'refractive', 'infectious', 'trauma',
];

/** Count of entries by category */
export const getOphthalmologyCategoryCounts = (): Record<OphthalmologyDatabaseCategory, number> => {
  const counts = {} as Record<OphthalmologyDatabaseCategory, number>;
  for (const cat of OPHTHALMOLOGY_DATABASE_CATEGORIES) {
    counts[cat] = getOphthalmologyByCategory(cat).length;
  }
  return counts;
};
