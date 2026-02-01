/**
 * Ophthalmic Conditions Database
 *
 * Comprehensive structured database of ophthalmic conditions
 * for SOMA medical education app. Covers cataracts, glaucoma,
 * macular degeneration, diabetic retinopathy, retinal detachment,
 * conjunctivitis, dry eye, strabismus, amblyopia, corneal ulcer,
 * uveitis, blepharitis, presbyopia, optic neuritis, and
 * retinal vascular occlusions.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type OphthalmicCategory =
  | 'lens'
  | 'glaucoma'
  | 'retina'
  | 'cornea-surface'
  | 'uvea'
  | 'neuro-ophthalmic'
  | 'pediatric-strabismus'
  | 'eyelid'
  | 'refractive';

export interface OphthalmicConditionEntry {
  id: string;
  name: string;
  nameEs: string;
  category: OphthalmicCategory;
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
// Helper
// ---------------------------------------------------------------------------

const o = (
  id: string,
  name: string,
  nameEs: string,
  category: OphthalmicCategory,
  icd11: string,
  description: string,
  pathophysiology: string,
  clinicalFeatures: string[],
  diagnostics: string[],
  treatment: string[],
  complications: string[],
  patientExplanation: string,
  emergencySigns: string[],
): OphthalmicConditionEntry => ({
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
  emergencySigns,
});

// ---------------------------------------------------------------------------
// Database
// ---------------------------------------------------------------------------

export const OPHTHALMIC_CONDITIONS: Record<string, OphthalmicConditionEntry> = {

  // ===== LENS =====

  'cataracts': o(
    'cataracts',
    'Cataracts',
    'Cataratas',
    'lens',
    '9B10',
    'Opacification of the crystalline lens causing progressive painless visual loss; leading cause of reversible blindness worldwide.',
    'Cumulative oxidative damage denatures crystallin proteins in the lens, causing protein aggregation, light scatter, and loss of transparency. Nuclear sclerosis yellows the lens, cortical cataracts form spoke-like opacities, and posterior subcapsular cataracts impair near vision and cause glare. UV radiation, diabetes, and corticosteroid use accelerate lens changes.',
    ['Gradual painless blurred vision', 'Glare and halos around lights', 'Decreased contrast sensitivity', 'Myopic shift (nuclear cataract)', 'Monocular diplopia', 'Faded color perception'],
    ['Visual acuity testing (Snellen chart)', 'Slit-lamp examination with pupil dilation', 'Red reflex assessment (diminished or absent)', 'Glare testing', 'Contrast sensitivity testing', 'Optical biometry for IOL calculation pre-surgery'],
    ['Observation and refractive correction for early cataracts', 'Anti-glare lenses and increased lighting', 'Phacoemulsification with intraocular lens (IOL) implantation', 'Extracapsular cataract extraction for very dense cataracts', 'Multifocal or toric IOLs for refractive correction', 'Post-operative topical antibiotics and steroids'],
    ['Posterior capsule opacification (secondary cataract)', 'Endophthalmitis (rare, post-surgical)', 'Cystoid macular edema post-surgery', 'Retinal detachment (increased risk post-surgery)', 'Lens-induced glaucoma if hypermature'],
    'A cataract is a clouding of the lens inside your eye, like looking through a foggy window. As it grows, colors seem faded and night driving becomes harder. Surgery removes the cloudy lens and replaces it with a clear artificial lens, restoring vision in most cases.',
    ['Sudden vision loss (suggests other pathology)', 'Lens-induced acute glaucoma (red painful eye with mature cataract)', 'Signs of endophthalmitis post-surgery (pain, redness, vision loss within days)'],
  ),

  // ===== GLAUCOMA =====

  'open-angle-glaucoma': o(
    'open-angle-glaucoma',
    'Primary Open-Angle Glaucoma',
    'Glaucoma primario de angulo abierto',
    'glaucoma',
    '9A61.0',
    'Chronic progressive optic neuropathy with characteristic optic disc cupping and visual field loss, typically associated with elevated intraocular pressure (IOP) and an open anterior chamber angle.',
    'Impaired aqueous humor outflow through the trabecular meshwork increases IOP, causing mechanical compression and ischemia of retinal ganglion cell axons at the lamina cribrosa. Ganglion cell apoptosis leads to progressive optic nerve fiber layer thinning, optic disc cupping, and corresponding arcuate visual field defects. Genetics, vascular dysregulation, and oxidative stress contribute.',
    ['Gradual peripheral visual field loss (often unnoticed)', 'Elevated IOP (> 21 mmHg, though normal-tension glaucoma exists)', 'Increased cup-to-disc ratio (> 0.5 or asymmetric)', 'Nerve fiber layer thinning on OCT', 'Open angle on gonioscopy', 'Typically bilateral and asymptomatic until advanced'],
    ['Tonometry (Goldmann applanation standard)', 'Gonioscopy to assess angle', 'Fundoscopy: optic disc cupping, rim thinning, disc hemorrhage', 'Optical coherence tomography (OCT) of RNFL and ganglion cell layer', 'Visual field testing (Humphrey 24-2 perimetry)', 'Central corneal thickness (pachymetry)'],
    ['Prostaglandin analogs (latanoprost, first-line) to increase uveoscleral outflow', 'Beta-blockers (timolol) or alpha-agonists (brimonidine) topical', 'Carbonic anhydrase inhibitors (dorzolamide topical, acetazolamide oral)', 'Selective laser trabeculoplasty (SLT) as first- or second-line', 'Trabeculectomy or tube shunt for refractory cases', 'Minimally invasive glaucoma surgery (MIGS) for mild-moderate disease'],
    ['Irreversible blindness if untreated', 'Visual field progression despite treatment', 'Medication side effects (prostaglandin: iris color change, eyelash growth; beta-blocker: bradycardia, bronchospasm)', 'Bleb-related infection after trabeculectomy', 'Hypotony after surgical or laser treatment'],
    'Glaucoma is sometimes called the "silent thief of sight" because it slowly damages the nerve in the back of your eye without symptoms until vision is lost. Eye drops lower the pressure inside your eye to slow the damage. Regular eye exams catch it early.',
    ['Sudden severe eye pain with vision loss (suggests angle closure)', 'Rapid visual field loss on serial testing', 'Post-surgical signs of infection or hypotony'],
  ),

  'closed-angle-glaucoma': o(
    'closed-angle-glaucoma',
    'Primary Angle-Closure Glaucoma',
    'Glaucoma primario de angulo cerrado',
    'glaucoma',
    '9A60',
    'Acute or chronic elevation of IOP caused by physical obstruction of the trabecular meshwork by the peripheral iris, constituting an ophthalmic emergency in its acute form.',
    'Pupillary block occurs when the iris apposes the lens, preventing aqueous flow from the posterior to anterior chamber. Rising posterior chamber pressure bows the peripheral iris forward (iris bombe), mechanically closing the drainage angle. Acute IOP spikes (often > 40-60 mmHg) cause corneal edema, ischemic optic nerve damage, and retinal vascular compromise. Risk factors include hyperopia, shallow anterior chamber, thick lens, and pharmacologic pupil dilation.',
    ['Acute: sudden severe ocular pain and headache', 'Blurred vision with halos around lights', 'Red eye with conjunctival injection', 'Fixed mid-dilated pupil', 'Nausea and vomiting (vagal response)', 'Chronic: may be asymptomatic with progressive angle narrowing'],
    ['Slit-lamp exam: shallow anterior chamber, corneal edema', 'Tonometry: markedly elevated IOP (40-80 mmHg in acute attack)', 'Gonioscopy: closed or narrow angle', 'Anterior segment OCT to assess angle', 'Ultrasound biomicroscopy for plateau iris', 'Fellow eye evaluation (often anatomically predisposed)'],
    ['Acute: immediate IOP-lowering drops (timolol, brimonidine, pilocarpine)', 'IV acetazolamide 500 mg and oral glycerol or IV mannitol', 'Definitive: laser peripheral iridotomy (LPI) in both eyes', 'Lens extraction (phacoemulsification) for lens-related mechanism', 'Chronic: topical IOP-lowering agents and possible surgical intervention', 'Prophylactic LPI in fellow eye and anatomically at-risk eyes'],
    ['Permanent vision loss from optic nerve ischemia', 'Peripheral anterior synechiae (PAS) from chronic closure', 'Cataract acceleration', 'Iris atrophy and fixed pupil', 'Malignant glaucoma (aqueous misdirection) after surgery'],
    'In angle-closure glaucoma, the drainage channel in your eye gets physically blocked, causing a sudden dangerous rise in eye pressure. This is an emergency -- you may feel severe eye pain, headache, nausea, and see halos. Laser treatment creates a tiny hole in the iris to restore drainage.',
    ['Acute onset severe eye pain with nausea and vision loss', 'IOP > 40 mmHg with closed angle', 'Fixed mid-dilated pupil with red eye', 'Seek emergency care immediately -- permanent vision loss within hours'],
  ),

  // ===== RETINA =====

  'amd-dry': o(
    'amd-dry',
    'Age-Related Macular Degeneration (Dry)',
    'Degeneracion macular seca relacionada con la edad',
    'retina',
    '9B75.0',
    'Progressive degeneration of the macula characterized by drusen and RPE atrophy, causing gradual central vision loss. Accounts for 85-90% of AMD cases.',
    'Accumulation of lipofuscin and drusen (extracellular deposits between the retinal pigment epithelium and Bruch membrane) reflects failure of RPE metabolic waste clearance. Complement dysregulation and chronic inflammation contribute to RPE cell death and photoreceptor degeneration. Geographic atrophy represents end-stage dry AMD with confluent RPE and photoreceptor loss.',
    ['Gradual blurring of central vision', 'Difficulty reading or recognizing faces', 'Drusen visible on fundoscopy', 'RPE pigmentary changes', 'Scotomas corresponding to geographic atrophy', 'Peripheral vision preserved'],
    ['Dilated fundus exam: drusen, pigmentary changes, geographic atrophy', 'OCT: drusen, RPE disruption, outer retinal atrophy', 'Fundus autofluorescence: hypo-autofluorescence in atrophic areas', 'Amsler grid: metamorphopsia or scotomas', 'Fluorescein angiography to exclude wet AMD', 'Genetic testing for complement variants (research setting)'],
    ['AREDS2 supplements (vitamins C, E, zinc, lutein, zeaxanthin) for intermediate AMD', 'Smoking cessation', 'Pegcetacoplan (complement C3 inhibitor) for geographic atrophy', 'Avacincaptad pegol (complement C5 inhibitor) for geographic atrophy', 'Low-vision aids and rehabilitation', 'Monitor for conversion to wet AMD with Amsler grid'],
    ['Conversion to wet (neovascular) AMD', 'Progressive geographic atrophy leading to legal blindness', 'Central scotoma impairing daily activities', 'Depression and social isolation from vision loss'],
    'Dry macular degeneration affects the center of your retina, slowly making it harder to see fine details like reading or faces. It happens as waste products build up under the retina. Special vitamin supplements can slow it down. Regular monitoring helps catch any worsening early.',
    ['Sudden distortion or loss of central vision (may indicate conversion to wet AMD)', 'New dark spot in central vision', 'Rapid change in Amsler grid testing'],
  ),

  'amd-wet': o(
    'amd-wet',
    'Age-Related Macular Degeneration (Wet/Neovascular)',
    'Degeneracion macular humeda/neovascular relacionada con la edad',
    'retina',
    '9B75.1',
    'Severe form of AMD characterized by choroidal neovascularization (CNV) with subretinal fluid, hemorrhage, and rapid central vision loss. Accounts for 10-15% of AMD but causes 90% of severe vision loss.',
    'VEGF-driven angiogenesis produces abnormal choroidal blood vessels that penetrate Bruch membrane and proliferate beneath or within the retina. These fragile vessels leak serosanguinous fluid, causing macular edema, subretinal hemorrhage, and lipid exudation. Without treatment, fibrovascular scarring (disciform scar) permanently destroys central vision.',
    ['Sudden or rapid central vision loss', 'Metamorphopsia (distortion of straight lines)', 'Central scotoma', 'Subretinal fluid or hemorrhage on exam', 'Lipid exudates in the macula', 'May present as sudden onset vs. conversion from dry AMD'],
    ['OCT: subretinal fluid, intraretinal fluid, pigment epithelial detachment', 'Fluorescein angiography: leaking choroidal neovascularization', 'Indocyanine green angiography for occult CNV or polypoidal lesions', 'OCT angiography: non-invasive CNV detection', 'Amsler grid: metamorphopsia', 'Visual acuity testing'],
    ['Intravitreal anti-VEGF injections (aflibercept, ranibizumab, bevacizumab, faricimab)', 'Treat-and-extend or pro re nata injection regimen', 'Monthly monitoring with OCT during active disease', 'Photodynamic therapy with verteporfin (adjunctive, select cases)', 'Anti-VEGF + port delivery system (ranibizumab refillable implant)', 'Low-vision rehabilitation for advanced cases'],
    ['Subretinal hemorrhage and vitreous hemorrhage', 'Disciform macular scar (end-stage)', 'RPE tear during treatment', 'Endophthalmitis from intravitreal injection (rare)', 'Sustained IOP elevation from repeated injections', 'Geographic atrophy progression with long-term anti-VEGF'],
    'Wet macular degeneration is when abnormal blood vessels grow under the retina and leak fluid or blood, causing rapid central vision loss. Injections of medicine directly into the eye stop these leaky vessels. Early treatment can save and even improve vision.',
    ['Sudden distortion or loss of central vision', 'Large subretinal hemorrhage', 'Flash of new floaters or dark curtain over vision', 'Seek urgent ophthalmologic evaluation within 24-48 hours'],
  ),

  'diabetic-retinopathy': o(
    'diabetic-retinopathy',
    'Diabetic Retinopathy',
    'Retinopatia diabetica',
    'retina',
    '9B71.0',
    'Microvascular complication of diabetes causing progressive retinal damage; leading cause of new blindness in working-age adults.',
    'Chronic hyperglycemia damages retinal capillary pericytes and endothelial cells via polyol pathway, AGE accumulation, PKC activation, and hexosamine flux. Pericyte loss weakens capillary walls, forming microaneurysms and increasing permeability. Progressive capillary dropout causes retinal ischemia, upregulating VEGF and driving neovascularization in proliferative disease. Macular edema results from breakdown of the inner blood-retinal barrier.',
    ['Often asymptomatic in early stages', 'Microaneurysms (earliest clinical sign)', 'Dot-blot and flame hemorrhages', 'Hard exudates and cotton-wool spots', 'Venous beading and intraretinal microvascular abnormalities (IRMA)', 'Neovascularization (disc or elsewhere) in proliferative stage'],
    ['Dilated fundus exam: classify NPDR (mild, moderate, severe) vs PDR', 'OCT: diabetic macular edema (central subfield thickness)', 'Fluorescein angiography: capillary non-perfusion, neovascularization, leakage', 'Ultra-widefield retinal imaging', 'HbA1c and metabolic assessment', 'AI-assisted retinal screening for primary care settings'],
    ['Strict glycemic control (HbA1c < 7%)', 'Blood pressure and lipid management', 'Anti-VEGF injections for diabetic macular edema (aflibercept, ranibizumab, faricimab)', 'Panretinal laser photocoagulation (PRP) for proliferative DR', 'Intravitreal corticosteroids (dexamethasone implant) for refractory macular edema', 'Vitrectomy for non-clearing vitreous hemorrhage or tractional retinal detachment'],
    ['Vitreous hemorrhage', 'Tractional retinal detachment', 'Neovascular glaucoma', 'Permanent macular ischemia', 'Legal blindness despite treatment'],
    'Diabetes can damage the tiny blood vessels in the back of your eye. Over time, these vessels leak or become blocked, and abnormal new vessels may grow. Controlling blood sugar, blood pressure, and getting yearly eye exams are key. Eye injections or laser treatment can prevent severe vision loss.',
    ['Sudden severe vision loss (vitreous hemorrhage)', 'New floaters or dark curtain (possible retinal detachment)', 'Painful red eye with elevated IOP (neovascular glaucoma)', 'Rapidly worsening vision despite treatment'],
  ),

  'retinal-detachment': o(
    'retinal-detachment',
    'Retinal Detachment',
    'Desprendimiento de retina',
    'retina',
    '9B60',
    'Separation of the neurosensory retina from the underlying retinal pigment epithelium, constituting an ophthalmic emergency that requires urgent surgical intervention.',
    'Rhegmatogenous (most common): a retinal tear or hole allows vitreous fluid to enter the subretinal space, progressively separating the retina. Posterior vitreous detachment (PVD) creates traction that causes the tear. Tractional: fibrovascular proliferation (e.g., proliferative diabetic retinopathy) physically pulls the retina away. Exudative: fluid accumulates beneath the retina from inflammation, tumors, or vascular abnormalities without a break.',
    ['Sudden onset of floaters (often described as shower of spots)', 'Photopsia (flashing lights) from vitreo-retinal traction', 'Progressive curtain or shadow over visual field', 'Painless vision loss', 'Relative afferent pupillary defect if extensive', 'Decreased visual acuity if macula involved'],
    ['Dilated fundus exam: elevated retina, retinal breaks, subretinal fluid', 'Indirect ophthalmoscopy with scleral depression', 'B-scan ultrasonography if media opacity (vitreous hemorrhage)', 'OCT for subtle macular detachment', 'Visual field defect corresponding to detachment area', 'Fellow eye exam (risk of bilateral involvement)'],
    ['Pneumatic retinopexy (gas bubble + cryotherapy) for superior breaks', 'Scleral buckle (silicone band) for rhegmatogenous detachments', 'Pars plana vitrectomy with gas or silicone oil tamponade', 'Laser retinopexy or cryotherapy for retinal breaks without detachment', 'Tractional: vitrectomy with membrane peeling', 'Exudative: treat underlying cause (anti-inflammatories, anti-VEGF, or radiation)'],
    ['Proliferative vitreoretinopathy (PVR) causing re-detachment', 'Permanent vision loss if macula-off detachment persists > 72 hours', 'Cataract development after vitrectomy', 'Elevated IOP from gas or oil tamponade', 'Hypotony and phthisis bulbi in severe cases'],
    'The retina is like the film in a camera -- it lines the back of your eye and captures light. If it peels away, you may see flashes of light, floating spots, or a dark curtain over your vision. This is an emergency. Surgery reattaches the retina, and early treatment gives the best chance of saving sight.',
    ['Sudden shower of floaters or flashing lights', 'Progressive curtain or shadow over visual field', 'Sudden painless vision loss', 'Seek emergency ophthalmology evaluation immediately'],
  ),

  'central-retinal-artery-occlusion': o(
    'central-retinal-artery-occlusion',
    'Central Retinal Artery Occlusion',
    'Oclusion de la arteria central de la retina',
    'retina',
    '9B65.0',
    'Acute embolic or thrombotic occlusion of the central retinal artery causing sudden painless monocular blindness; an ophthalmic stroke equivalent.',
    'Emboli (most commonly from carotid atherosclerosis or cardiac source) lodge at the lamina cribrosa where the artery narrows. Complete ischemia causes retinal infarction within 90-100 minutes. The inner retina (supplied by the central retinal artery) becomes edematous and pale, while the fovea remains red (cherry-red spot) because it is supplied by the choroidal circulation.',
    ['Sudden painless monocular vision loss (count fingers or worse)', 'Cherry-red spot on fundoscopy (classic finding)', 'Pale edematous retina with attenuated arterioles', 'Afferent pupillary defect', 'Emboli visible in retinal arterioles (Hollenhorst plaques)', 'Cattle-trucking (segmentation of blood column)'],
    ['Fundoscopy: pale retina with cherry-red spot, attenuated arteries', 'Fluorescein angiography: delayed arterial filling', 'OCT: inner retinal edema acutely, thinning chronically', 'Carotid duplex ultrasound', 'Echocardiography (TTE/TEE) for cardiac source', 'ESR and CRP to exclude giant cell arteritis (age > 50)'],
    ['Emergent ocular massage and anterior chamber paracentesis (within 4-6 hours)', 'Intraarterial tPA (investigational, within 4.5 hours)', 'Hyperbaric oxygen therapy (limited evidence)', 'Lower IOP with acetazolamide and timolol', 'Stroke workup and secondary prevention (antiplatelet, statin)', 'High-dose IV methylprednisolone if giant cell arteritis suspected'],
    ['Permanent severe vision loss (most common outcome)', 'Neovascular glaucoma (develops weeks later)', 'Optic atrophy', 'Contralateral eye or cerebral vascular events', 'Iris neovascularization (rubeosis iridis)'],
    'A central retinal artery occlusion is like a stroke in the eye -- a blood clot blocks the main artery feeding the retina, causing sudden blindness in one eye. Time is critical. An emergency evaluation is needed to try to restore blood flow and to check for causes like carotid disease or heart problems.',
    ['Sudden painless loss of vision in one eye', 'This is an ophthalmic emergency -- seek care within minutes to hours', 'Must rule out giant cell arteritis in patients over 50', 'Stroke workup mandatory'],
  ),

  'central-retinal-vein-occlusion': o(
    'central-retinal-vein-occlusion',
    'Central Retinal Vein Occlusion',
    'Oclusion de la vena central de la retina',
    'retina',
    '9B65.1',
    'Obstruction of venous outflow from the retina causing hemorrhagic retinopathy, macular edema, and variable vision loss; most common retinal vascular occlusion.',
    'Thrombus formation at or near the lamina cribrosa where the central retinal artery and vein share an adventitial sheath. Venous obstruction increases intraluminal pressure, causing widespread retinal hemorrhages, edema, and capillary non-perfusion. VEGF upregulation from ischemia drives macular edema and neovascularization. Non-ischemic (perfused) type has better prognosis than ischemic (non-perfused) type.',
    ['Sudden or subacute painless blurred vision', 'Widespread flame-shaped and dot-blot hemorrhages in all quadrants (blood and thunder fundus)', 'Dilated tortuous veins', 'Cotton-wool spots and macular edema', 'Disc edema', 'Afferent pupillary defect in ischemic type'],
    ['Dilated fundoscopy: diffuse retinal hemorrhages, disc edema, venous dilation', 'OCT: macular edema (central subfield thickness)', 'Fluorescein angiography: capillary non-perfusion areas, delayed venous filling', 'Visual acuity (prognostic factor)', 'Blood pressure, glucose, lipid panel, CBC, coagulation studies', 'Thrombophilia workup in young patients'],
    ['Intravitreal anti-VEGF for macular edema (aflibercept, ranibizumab)', 'Intravitreal dexamethasone implant (Ozurdex) for macular edema', 'Panretinal photocoagulation if neovascularization develops', 'Manage systemic risk factors (hypertension, diabetes, hyperlipidemia)', 'Anti-VEGF for neovascular glaucoma', 'Observation for mild non-ischemic CRVO'],
    ['Macular edema (most common cause of vision loss)', 'Neovascularization of iris, disc, or retina', 'Neovascular glaucoma', 'Vitreous hemorrhage', 'Chronic macular ischemia'],
    'A vein occlusion in your eye happens when the main vein draining blood from the retina gets blocked. This causes bleeding and swelling in the retina, making vision blurry. Injections into the eye reduce the swelling and prevent further damage. Managing blood pressure and diabetes is also important.',
    ['Sudden or rapidly worsening vision', 'New onset pain with red eye (neovascular glaucoma)', 'Worsening vision despite treatment'],
  ),

  // ===== CORNEA & SURFACE =====

  'conjunctivitis-viral': o(
    'conjunctivitis-viral',
    'Viral Conjunctivitis',
    'Conjuntivitis viral',
    'cornea-surface',
    '9A60.0',
    'Highly contagious adenoviral infection of the conjunctiva; most common cause of infectious conjunctivitis.',
    'Adenovirus (serotypes 8, 19, 37 most common) infects conjunctival epithelium, triggering innate and adaptive immune responses. Viral replication causes epithelial cell lysis and inflammatory mediator release. Follicular lymphoid hyperplasia produces characteristic follicles on the tarsal conjunctiva. Subepithelial corneal infiltrates (immune complexes) may develop 1-2 weeks after onset. Highly contagious via hand-to-eye contact and fomites; viral shedding persists up to 2 weeks.',
    ['Watery or mucoid discharge', 'Red eye with follicular conjunctival reaction', 'Bilateral involvement (often sequential)', 'Preauricular lymphadenopathy (hallmark)', 'Foreign body sensation and tearing', 'Subepithelial infiltrates on cornea (late finding)'],
    ['Clinical diagnosis based on history and exam', 'Slit-lamp exam: follicles, papillae, subepithelial infiltrates', 'Rapid adenoviral antigen test (point-of-care immunoassay)', 'Viral culture if atypical presentation', 'Rule out herpes simplex (dendritic ulcer on fluorescein)', 'Assess for pseudomembrane formation'],
    ['Supportive: cold compresses, artificial tears, hygiene measures', 'Strict hand hygiene and infection control (contagious 10-14 days)', 'Topical povidone-iodine (emerging evidence)', 'Topical corticosteroids only for severe subepithelial infiltrates (ophthalmologist supervised)', 'Avoid topical antibiotics (ineffective and promote resistance)', 'Limit contact lens wear until resolved'],
    ['Subepithelial corneal infiltrates causing prolonged glare and blur', 'Pseudomembrane formation with conjunctival scarring', 'Symblepharon (adhesion of conjunctiva to lid)', 'Dry eye syndrome following inflammation', 'Epidemic keratoconjunctivitis (EKC) outbreaks'],
    'Viral conjunctivitis (pink eye) is a very contagious eye infection that makes your eyes red, watery, and uncomfortable. It usually clears on its own in 1-2 weeks. Washing your hands often and not touching your eyes helps prevent spreading it to others.',
    ['Severe pain suggesting corneal involvement', 'Vision changes beyond mild blurring', 'Photophobia (light sensitivity)', 'Worsening after 7-10 days or signs of bacterial superinfection'],
  ),

  'conjunctivitis-bacterial': o(
    'conjunctivitis-bacterial',
    'Bacterial Conjunctivitis',
    'Conjuntivitis bacteriana',
    'cornea-surface',
    '9A60.1',
    'Bacterial infection of the conjunctiva producing purulent discharge; often self-limited but may require topical antibiotics.',
    'Bacterial colonization (S. aureus, S. pneumoniae, H. influenzae, Moraxella most common) breaches conjunctival epithelium defenses. Neutrophilic infiltration produces mucopurulent exudate. Papillary reaction predominates over follicles. Hyperacute form (N. gonorrhoeae) produces copious purulent discharge with risk of corneal perforation. Chlamydial conjunctivitis (inclusion conjunctivitis) causes chronic follicular reaction.',
    ['Mucopurulent or purulent discharge', 'Red eye with papillary conjunctival reaction', 'Matting of eyelids on waking', 'Often unilateral initially, may become bilateral', 'Mild discomfort or foreign body sensation', 'Chemosis (conjunctival edema) in severe cases'],
    ['Clinical exam: purulent discharge, papillary reaction', 'Gram stain and culture for severe or hyperacute cases', 'Rule out gonococcal conjunctivitis (copious purulent discharge, rapid onset)', 'Chlamydia PCR if chronic follicular conjunctivitis', 'Fluorescein staining to rule out corneal ulcer', 'Assess for preseptal or orbital cellulitis'],
    ['Topical fluoroquinolone (moxifloxacin, ofloxacin) or aminoglycoside', 'Erythromycin ointment for mild cases or children', 'Hyperacute (gonococcal): IM ceftriaxone 1g + topical fluoroquinolone + saline irrigation', 'Chlamydial: oral azithromycin 1g + treat sexual partner', 'Warm compresses and lid hygiene', 'Contact lens holiday until fully resolved'],
    ['Corneal ulcer or perforation (especially gonococcal)', 'Preseptal or orbital cellulitis', 'Chronic conjunctivitis if chlamydial infection missed', 'Neonatal ophthalmia neonatorum (gonococcal or chlamydial)', 'Scarring and symblepharon in severe cases'],
    'Bacterial pink eye causes thick yellow or green discharge that may glue your eyelids shut in the morning. Antibiotic eye drops or ointment usually clear it up within a few days. Keep your hands clean and avoid sharing towels to prevent spreading it.',
    ['Copious purulent discharge (suspect gonococcal -- urgent)', 'Vision loss or severe pain', 'Lid swelling suggesting orbital involvement', 'Newborn with eye discharge (ophthalmia neonatorum -- emergent)'],
  ),

  'conjunctivitis-allergic': o(
    'conjunctivitis-allergic',
    'Allergic Conjunctivitis',
    'Conjuntivitis alergica',
    'cornea-surface',
    '9A60.2',
    'IgE-mediated hypersensitivity reaction of the conjunctiva to environmental allergens, causing bilateral itching, tearing, and redness.',
    'Type I hypersensitivity: allergens cross-link IgE on conjunctival mast cells, triggering degranulation with release of histamine, prostaglandins, and leukotrienes. Early phase (minutes): vasodilation, increased permeability, itching. Late phase (hours): eosinophilic and lymphocytic infiltration. Chronic forms (vernal and atopic keratoconjunctivitis) involve Th2-mediated inflammation with papillary hypertrophy and can cause corneal damage.',
    ['Bilateral intense itching (hallmark symptom)', 'Watery or stringy mucoid discharge', 'Conjunctival edema (chemosis) and redness', 'Papillary reaction on tarsal conjunctiva', 'Periorbital edema and dark circles', 'Seasonal pattern or perennial with flares'],
    ['Clinical diagnosis based on itching, bilateral involvement, allergic history', 'Slit-lamp: papillae (not follicles), chemosis, Horner-Trantas dots (vernal)', 'Giant papillae on upper tarsal conjunctiva (vernal/atopic)', 'Conjunctival scraping: eosinophils', 'Skin prick testing or serum-specific IgE for allergen identification', 'Rule out other causes of red eye'],
    ['Allergen avoidance and cold compresses', 'Topical antihistamine/mast cell stabilizer (olopatadine, ketotifen) -- first-line', 'Oral antihistamines for systemic allergic symptoms', 'Topical NSAIDs (ketorolac) for supplemental relief', 'Short-course topical corticosteroids for severe flares', 'Immunotherapy for refractory cases with identified allergens'],
    ['Shield ulcer and corneal scarring (vernal keratoconjunctivitis)', 'Corneal neovascularization in atopic keratoconjunctivitis', 'Steroid-induced glaucoma and cataract from chronic use', 'Keratoconus association with atopic disease and chronic eye rubbing', 'Impaired quality of life and school/work performance'],
    'Allergic conjunctivitis makes both eyes itch, water, and look red, usually during allergy season or around pet dander and dust. Over-the-counter antihistamine eye drops provide quick relief. Avoiding your allergy triggers and using cold compresses also help.',
    ['Significant vision changes (suspect corneal involvement)', 'Severe pain beyond typical irritation', 'Unilateral symptoms (consider other diagnoses)', 'Signs of corneal ulcer in atopic or vernal subtypes'],
  ),

  'dry-eye-syndrome': o(
    'dry-eye-syndrome',
    'Dry Eye Syndrome',
    'Sindrome de ojo seco',
    'cornea-surface',
    '9A70',
    'Multifactorial disease of the ocular surface characterized by loss of tear film homeostasis causing symptoms of discomfort, visual disturbance, and potential corneal damage.',
    'Two main mechanisms: aqueous-deficient (reduced lacrimal gland production) and evaporative (meibomian gland dysfunction with lipid layer deficiency, most common). Tear film instability increases osmolarity, triggering inflammatory cascades (IL-1, TNF-alpha, MMP-9) that damage corneal and conjunctival epithelium. Goblet cell loss reduces mucin production, perpetuating a vicious cycle. Neurosensory abnormalities may dissociate symptoms from signs.',
    ['Foreign body sensation or grittiness', 'Burning and stinging', 'Intermittent blurred vision that clears with blinking', 'Reflex tearing (paradoxical watering)', 'Photophobia and eye fatigue', 'Worse with screen use, air conditioning, low humidity, and contact lenses'],
    ['Symptom questionnaires (OSDI, DEQ-5, SPEED)', 'Tear breakup time (TBUT < 10 seconds abnormal)', 'Schirmer test (< 5 mm in 5 minutes = aqueous deficiency)', 'Corneal and conjunctival staining (fluorescein, lissamine green)', 'Meibomian gland expression and meibography', 'Tear osmolarity (> 308 mOsm/L) and MMP-9 (InflammaDry)'],
    ['Artificial tears (preservative-free for frequent use)', 'Warm compresses, lid hygiene, and meibomian gland expression', 'Cyclosporine 0.05% (Restasis) or lifitegrast 5% (Xiidra) topical', 'Punctal plugs to reduce tear drainage', 'Omega-3 fatty acid supplementation', 'Intense pulsed light (IPL) or thermal pulsation (LipiFlow) for meibomian gland dysfunction'],
    ['Corneal epithelial erosion and filamentary keratitis', 'Bacterial keratitis from compromised surface defense', 'Contact lens intolerance', 'Corneal scarring and neovascularization in severe cases', 'Reduced quality of life and work productivity'],
    'Dry eye happens when your tears do not keep the surface of your eye moist enough. This can make your eyes feel gritty, burn, or look red. Using artificial tears, taking screen breaks, and treating eyelid gland problems can bring lasting relief.',
    ['Sudden severe pain with vision change (corneal erosion or ulcer)', 'White spot on cornea (possible infectious keratitis)', 'Worsening despite treatment over several weeks'],
  ),

  'corneal-ulcer': o(
    'corneal-ulcer',
    'Corneal Ulcer (Infectious Keratitis)',
    'Ulcera corneal (queratitis infecciosa)',
    'cornea-surface',
    '9A13',
    'Infectious ulcerative defect of the corneal epithelium and stroma, most commonly bacterial, representing an ophthalmic urgency that can cause permanent scarring and vision loss.',
    'Corneal epithelial disruption (contact lens wear, trauma, dry eye) allows microbial invasion. Bacterial keratitis (Pseudomonas, Staphylococcus most common) produces neutrophilic infiltration, stromal necrosis, and collagenolysis via matrix metalloproteinases. Fungal keratitis (Fusarium, Aspergillus) causes feathery infiltrates. Acanthamoeba keratitis (contact lens-related) produces severe pain and ring infiltrate. Herpes simplex keratitis causes dendritic ulcers.',
    ['Severe ocular pain and photophobia', 'Decreased vision', 'Corneal infiltrate with overlying epithelial defect', 'Mucopurulent discharge', 'Conjunctival injection and lid edema', 'Hypopyon (layered white cells in anterior chamber) in severe cases'],
    ['Slit-lamp exam: size, depth, and location of infiltrate/ulcer', 'Fluorescein staining: epithelial defect', 'Corneal scraping for Gram stain, culture, and sensitivity', 'KOH prep and calcofluor white for fungal elements', 'Confocal microscopy for Acanthamoeba', 'Contact lens and case culture'],
    ['Empiric fortified topical antibiotics (fluoroquinolone or cefazolin + tobramycin) hourly', 'Cycloplegic agents (atropine) for pain and to prevent synechiae', 'Fungal: topical natamycin 5% or voriconazole 1%', 'Acanthamoeba: PHMB + propamidine for months', 'Herpes simplex: oral valacyclovir + topical ganciclovir', 'Corneal transplant (penetrating keratoplasty) for perforation or non-healing scars'],
    ['Corneal scarring with permanent vision loss', 'Corneal perforation', 'Endophthalmitis (intraocular infection)', 'Secondary glaucoma from inflammation or synechiae', 'Corneal neovascularization'],
    'A corneal ulcer is an open sore on the clear front window of your eye, usually from infection. It is very painful and threatens vision. It requires urgent antibiotic eye drops, sometimes given every hour. Contact lens wearers are most at risk -- never sleep in lenses or use tap water with them.',
    ['White spot on cornea with pain and vision loss -- seek same-day ophthalmic care', 'Hypopyon visible (white layer in eye)', 'Worsening despite 48 hours of treatment', 'Corneal perforation or descemetocele (thinning)'],
  ),

  // ===== UVEA =====

  'uveitis': o(
    'uveitis',
    'Uveitis',
    'Uveitis',
    'uvea',
    '9A40',
    'Inflammation of the uveal tract (iris, ciliary body, choroid) with various etiologies including autoimmune, infectious, and idiopathic; a significant cause of preventable blindness.',
    'Anterior uveitis (iritis/iridocyclitis, most common): T-cell-mediated inflammation of the iris and ciliary body causes blood-aqueous barrier breakdown, protein and cell exudation into the anterior chamber. Associated with HLA-B27, ankylosing spondylitis, sarcoidosis. Intermediate uveitis: inflammatory cells in the vitreous (pars planitis). Posterior uveitis: choroiditis and retinitis from infections (toxoplasmosis, CMV, TB) or autoimmune disease. Panuveitis involves all segments.',
    ['Pain, redness, and photophobia (anterior)', 'Blurred vision and floaters', 'Circumlimbal (ciliary) flush', 'Cells and flare in anterior chamber on slit-lamp', 'Posterior synechiae (iris adhering to lens)', 'Vitreous cells and snowbanking (intermediate)'],
    ['Slit-lamp biomicroscopy: cells, flare, keratic precipitates (KP)', 'Dilated fundoscopy: vitritis, chorioretinal lesions, vasculitis', 'OCT: cystoid macular edema, subretinal fluid', 'Fluorescein angiography for retinal vasculitis', 'Workup based on pattern: HLA-B27, ACE, chest X-ray, RPR, FTA-ABS, quantiferon-gold', 'Anterior chamber tap for PCR in suspected infectious etiology'],
    ['Topical corticosteroids (prednisolone acetate 1%) -- mainstay for anterior uveitis', 'Cycloplegics (cyclopentolate, atropine) for pain and synechiae prevention', 'Periocular or intravitreal corticosteroids for intermediate/posterior uveitis', 'Systemic corticosteroids for severe bilateral disease', 'Steroid-sparing immunomodulatory therapy (methotrexate, mycophenolate, adalimumab)', 'Treat underlying infectious cause (antitoxoplasmosis, antivirals, anti-TB)'],
    ['Cystoid macular edema (most common cause of vision loss)', 'Band keratopathy from chronic calcium deposition', 'Posterior synechiae and seclusio pupillae', 'Secondary glaucoma (inflammatory or steroid-induced)', 'Cataract formation from chronic inflammation or steroids'],
    'Uveitis is inflammation inside the eye that causes pain, redness, light sensitivity, and blurry vision. It can come from infections, autoimmune diseases, or unknown causes. Anti-inflammatory eye drops and sometimes pills are needed. Regular follow-up is important to prevent complications that can harm vision.',
    ['Sudden severe vision loss', 'Suspected infectious cause in immunocompromised patient', 'Hypopyon or fibrin in anterior chamber', 'Suspected endophthalmitis following surgery or trauma', 'Bilateral severe presentation'],
  ),

  // ===== EYELID =====

  'blepharitis': o(
    'blepharitis',
    'Blepharitis',
    'Blefaritis',
    'eyelid',
    '9A80',
    'Chronic inflammatory condition of the eyelid margins causing irritation, crusting, and tearing; among the most common ophthalmic conditions encountered in primary care.',
    'Anterior blepharitis: staphylococcal colonization or seborrheic dermatitis causes inflammation of the lash follicles and anterior lid margin. Bacterial lipase activity produces toxic free fatty acids. Posterior blepharitis: meibomian gland dysfunction (MGD) leads to abnormal lipid secretion, gland orifice obstruction, and evaporative dry eye. Demodex mite infestation contributes to both forms. Chronic blepharitis creates a cycle of lid margin inflammation, tear film instability, and ocular surface disease.',
    ['Eyelid margin redness and swelling', 'Crusting and flaking at base of eyelashes', 'Burning, itching, and foreign body sensation', 'Foamy tears and meibomian gland plugging', 'Mild conjunctival injection', 'Symptoms worse in the morning; chronic relapsing course'],
    ['Clinical exam: lid margin inspection, collarettes (Demodex), sleeves, crusting', 'Slit-lamp: lid margin telangiectasia, meibomian gland capping, turbid secretions', 'Meibomian gland expression quality assessment', 'Meibography (infrared imaging of gland structure)', 'Rule out sebaceous gland carcinoma if unilateral recalcitrant blepharitis', 'Demodex assessment (lash epililation and microscopy)'],
    ['Daily lid hygiene: warm compresses (10 min) and lid scrubs', 'Baby shampoo scrubs or commercial lid wipes (hypochlorous acid-based)', 'Topical antibiotic ointment (erythromycin, bacitracin) for anterior staphylococcal', 'Oral doxycycline or azithromycin for moderate-severe MGD (anti-inflammatory dose)', 'Tea tree oil-based products for Demodex blepharitis', 'Intense pulsed light (IPL) and thermal pulsation for refractory MGD'],
    ['Chronic dry eye syndrome', 'Recurrent chalazia and hordeola (styes)', 'Corneal marginal infiltrates and phlyctenulosis', 'Trichiasis (misdirected eyelashes)', 'Madarosis (eyelash loss)'],
    'Blepharitis is chronic inflammation of the eyelid edges that causes crusty, red, irritated lids. It is very common and tends to come and go. Daily cleaning of the eyelids with warm compresses and gentle scrubbing keeps it under control. It is manageable but rarely cured completely.',
    ['Unilateral persistent lid nodule not responding to treatment (rule out malignancy)', 'Significant vision change or corneal involvement', 'Preseptal cellulitis (lid swelling, warmth, fever)'],
  ),

  // ===== PEDIATRIC & STRABISMUS =====

  'strabismus': o(
    'strabismus',
    'Strabismus',
    'Estrabismo',
    'pediatric-strabismus',
    '9C80',
    'Ocular misalignment in which the visual axes do not intersect at the point of fixation; affects 2-4% of children and may cause amblyopia if untreated.',
    'Disruption of the binocular vision system from imbalance in extraocular muscle control, abnormal innervation, or anatomic restriction. Esotropia (inward deviation) may be congenital, accommodative (uncorrected hyperopia drives convergence), or acquired. Exotropia (outward deviation) is often intermittent. In children, the brain suppresses the deviating eye image to avoid diplopia, leading to amblyopia. In adults, acute strabismus causes diplopia.',
    ['Visible ocular misalignment', 'Esotropia (eye turns inward), exotropia (outward), hypertropia (upward)', 'Diplopia in adult-onset strabismus', 'Head tilting or turning to compensate', 'Amblyopia in the deviating eye (children)', 'Abnormal corneal light reflex (Hirschberg test)'],
    ['Cover-uncover test and alternate cover test', 'Hirschberg corneal light reflex test', 'Prism and alternate cover test for quantification (prism diopters)', 'Cycloplegic refraction (detect hyperopia in accommodative esotropia)', 'Assessment of extraocular motility and ductions/versions', 'Sensory testing (Worth 4-dot, stereoacuity) for binocular function'],
    ['Correct refractive error (full hyperopic correction for accommodative esotropia)', 'Amblyopia treatment: patching or atropine penalization of the better eye', 'Extraocular muscle surgery (recession/resection) for large or non-accommodative deviations', 'Prism glasses for small deviations or fusion potential', 'Botulinum toxin injection to extraocular muscles (selected cases)', 'Vision therapy for convergence insufficiency'],
    ['Amblyopia if untreated in childhood', 'Loss of stereopsis (depth perception)', 'Psychosocial impact (appearance, self-esteem)', 'Consecutive strabismus after surgery (overcorrection/undercorrection)', 'Diplopia after adult strabismus surgery'],
    'Strabismus means the eyes do not point in the same direction. One eye may turn in, out, up, or down. In children, early treatment with glasses, patching, or surgery is important to develop normal vision in both eyes and prevent lazy eye.',
    ['New-onset strabismus in an adult (may indicate neurological cause)', 'Acute onset diplopia with headache', 'Pupil involvement (suspect cranial nerve III palsy with aneurysm)', 'Progressive worsening alignment in a child'],
  ),

  'amblyopia': o(
    'amblyopia',
    'Amblyopia',
    'Ambliopia',
    'pediatric-strabismus',
    '9D00',
    'Reduced best-corrected visual acuity in one or both eyes due to abnormal visual development, without structural ocular abnormality; most common cause of monocular vision loss in children.',
    'During the critical period of visual development (birth to age 7-8 years), unequal or absent visual input causes abnormal development of the visual cortex. Competitive interactions between ocular dominance columns favor the normal eye, and neural connections from the amblyopic eye are pruned. Three main causes: strabismic (misaligned eyes), refractive (unequal refractive error/anisometropia), and deprivation (visual axis obstruction by cataract or ptosis).',
    ['Reduced visual acuity in one eye not correctable with refraction', 'May be asymptomatic (often detected on screening)', 'Strabismus may or may not be present', 'Difficulty with depth perception', 'Crowding phenomenon (can read isolated letters better than line)', 'Neutral density filter test does not reduce acuity further'],
    ['Visual acuity testing (age-appropriate: Teller cards, LEA symbols, Snellen)', 'Two-line or greater interocular difference with best correction', 'Cycloplegic refraction to detect anisometropia', 'Cover test for strabismus', 'Pupil examination (normal -- no APD in pure amblyopia)', 'Slit-lamp and fundus exam to rule out organic pathology'],
    ['Optical correction of refractive error (glasses) -- first step for all types', 'Occlusion therapy: patching of the better eye (2-6 hours/day depending on severity)', 'Atropine penalization of the better eye (alternative to patching)', 'Treat underlying cause (strabismus surgery, cataract extraction)', 'Compliance strategies: reward charts, supervised patching', 'Treatment most effective before age 7 but beneficial up to teenage years'],
    ['Permanent vision loss if untreated beyond critical period', 'Increased vulnerability of the good eye (functional monocular patient)', 'Recurrence after discontinuation of treatment', 'Reverse amblyopia from over-patching the good eye', 'Psychosocial impact of patching compliance'],
    'Amblyopia (lazy eye) happens when one eye does not develop normal vision during childhood, even though the eye itself looks healthy. The brain learns to favor the other eye. Wearing glasses and patching the stronger eye forces the weaker eye to work harder and develop better vision. Early treatment works best.',
    ['Newly detected amblyopia in a child -- refer promptly (time-sensitive)', 'Leukocoria (white pupil reflex) -- rule out retinoblastoma urgently', 'Sudden vision loss in the good eye of an amblyopic patient'],
  ),

  // ===== NEURO-OPHTHALMIC =====

  'optic-neuritis': o(
    'optic-neuritis',
    'Optic Neuritis',
    'Neuritis optica',
    'neuro-ophthalmic',
    '9C40',
    'Inflammatory demyelination of the optic nerve causing acute unilateral vision loss, pain with eye movement, and color desaturation; often a first presentation of multiple sclerosis.',
    'Autoimmune-mediated demyelination of the optic nerve, most commonly associated with multiple sclerosis. T-cell and macrophage infiltration causes perivascular inflammation and myelin destruction. Conduction block through demyelinated segments produces acute vision loss. Anti-aquaporin-4 antibodies (neuromyelitis optica/NMOSD) and anti-MOG antibodies cause distinct variants with different prognoses. Recovery occurs with remyelination and sodium channel redistribution.',
    ['Acute unilateral vision loss (over hours to days)', 'Retrobulbar pain worsened by eye movement', 'Dyschromatopsia (impaired color vision, especially red desaturation)', 'Relative afferent pupillary defect (Marcus Gunn pupil)', 'Visual field defect (central or cecocentral scotoma)', 'Uhthoff phenomenon (vision worsens with heat/exercise)'],
    ['Visual acuity and color vision testing', 'RAPD assessment (swinging flashlight test)', 'Visual field testing: central or cecocentral scotoma', 'MRI brain and orbits with gadolinium: optic nerve enhancement', 'MRI brain for demyelinating lesions (MS risk stratification)', 'OCT: RNFL thinning after acute phase; anti-AQP4 and anti-MOG antibodies'],
    ['IV methylprednisolone 1g/day for 3 days (speeds recovery, does not change final outcome)', 'Oral prednisone taper (optional, controversial)', 'Disease-modifying therapy for MS if brain lesions present', 'Plasma exchange for severe cases not responding to steroids', 'Evaluate for NMOSD (anti-AQP4+) -- requires long-term immunosuppression', 'Neurology referral for long-term MS management'],
    ['Progression to clinically definite MS (50% at 15 years if brain lesions)', 'Permanent optic disc pallor and RNFL thinning', 'Recurrence (especially NMOSD -- severe and bilateral)', 'Persistent visual field defects', 'Chronic pain syndrome'],
    'Optic neuritis is inflammation of the nerve that connects your eye to your brain. It causes sudden blurry vision in one eye and pain when you move the eye. Most people recover good vision. It can be an early sign of multiple sclerosis, so MRI and follow-up with a neurologist are important.',
    ['Severe vision loss (no light perception) or bilateral involvement', 'Symptoms of NMOSD (bilateral optic neuritis, transverse myelitis)', 'Progressive worsening beyond 2 weeks (consider alternative diagnosis)', 'New neurological symptoms suggesting MS relapse'],
  ),

  // ===== REFRACTIVE =====

  'presbyopia': o(
    'presbyopia',
    'Presbyopia',
    'Presbicia',
    'refractive',
    '9D00.0',
    'Age-related loss of accommodative ability causing difficulty with near-vision tasks; universal in adults over 40 and the most common refractive condition.',
    'The crystalline lens grows continuously throughout life, adding fiber layers that increase its diameter and rigidity. Progressive sclerosis of the lens nucleus reduces its ability to change shape during accommodation. Simultaneously, ciliary muscle contraction becomes less effective at releasing zonular tension. The net result is a progressive decline in accommodative amplitude: from ~15 diopters at age 10 to < 2 diopters by age 50, making near focusing impossible without optical correction.',
    ['Difficulty reading small print at normal distance', 'Need to hold reading material farther away', 'Eyestrain and headaches with near work', 'Blurred near vision worse in dim lighting', 'Onset typically between ages 40-45', 'Progressive worsening through mid-50s then stabilizes'],
    ['Near visual acuity testing (Jaeger chart)', 'Measurement of accommodative amplitude (push-up method)', 'Refraction for near and distance correction', 'Assessment of add power needed (typically +1.00 to +3.00 D)', 'Rule out other causes of blurred near vision', 'Assess for concurrent refractive errors (myopia, hyperopia, astigmatism)'],
    ['Reading glasses (single-vision near correction)', 'Bifocal or progressive addition lenses', 'Multifocal contact lenses', 'Monovision contact lenses (one eye for distance, one for near)', 'Corneal inlays (KAMRA, Raindrop -- limited adoption)', 'Refractive lens exchange with multifocal or extended-depth-of-focus IOL'],
    ['Progressive need for stronger reading correction over 10-15 years', 'Reduced quality of life from spectacle dependence', 'Occupational limitations for near-task-dependent workers', 'Difficulty with intermediate-distance tasks (computers)', 'Falls risk if bifocal adaptation is poor'],
    'Presbyopia is the normal age-related loss of the ability to focus on close-up objects. Around age 40-45, the lens in your eye becomes less flexible, making reading and phone use harder. Reading glasses or progressive lenses solve the problem. Everyone gets presbyopia eventually -- it is a natural part of aging.',
    ['Sudden near-vision loss at any age (consider other pathology)', 'Accompanying distance vision changes (need comprehensive exam)', 'Headaches not relieved by appropriate correction'],
  ),
};

// ---------------------------------------------------------------------------
// Access helpers
// ---------------------------------------------------------------------------

/** All ophthalmic conditions as an array */
export const OPHTHALMIC_CONDITIONS_LIST: OphthalmicConditionEntry[] =
  Object.values(OPHTHALMIC_CONDITIONS);

/** Lookup by ID */
export function getOphthalmicCondition(id: string): OphthalmicConditionEntry | undefined {
  return OPHTHALMIC_CONDITIONS[id];
}

/** Filter by category */
export function getOphthalmicConditionsByCategory(
  category: OphthalmicCategory,
): OphthalmicConditionEntry[] {
  return OPHTHALMIC_CONDITIONS_LIST.filter((c) => c.category === category);
}

/** Total count */
export const OPHTHALMIC_CONDITIONS_COUNT = OPHTHALMIC_CONDITIONS_LIST.length;
