/**
 * Ophthalmology Conditions Database
 *
 * Comprehensive reference of 30+ ophthalmology conditions with
 * clinical findings, diagnostic approach, treatment, and prognosis.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type OphthalmologyConditionCategory =
  | 'anterior-segment'
  | 'posterior-segment'
  | 'glaucoma'
  | 'neuro-ophthalmology'
  | 'pediatric-eye'
  | 'oculoplastics'
  | 'infectious'
  | 'trauma'
  | 'oncologic';

export interface OphthalmologyConditionEntry {
  id: string;
  name: string;
  category: OphthalmologyConditionCategory;
  description: string;
  clinicalFindings: string[];
  diagnosticApproach: string[];
  treatment: string;
  prognosis: string;
  icdCode: string;
}

// ---------------------------------------------------------------------------
// Compact helper
// ---------------------------------------------------------------------------

function oph(
  id: string, name: string,
  category: OphthalmologyConditionCategory, icdCode: string,
  description: string, clinicalFindings: string[],
  diagnosticApproach: string[], treatment: string, prognosis: string,
): OphthalmologyConditionEntry {
  return { id, name, category, icdCode, description, clinicalFindings, diagnosticApproach, treatment, prognosis };
}

// ---------------------------------------------------------------------------
// Database
// ---------------------------------------------------------------------------

export const OPHTHALMOLOGY_CONDITION_ENTRIES: Record<string, OphthalmologyConditionEntry> = {

  // ---- Anterior Segment (7) ------------------------------------------------

  'cataracts': oph(
    'cataracts', 'Cataracts',
    'anterior-segment', 'H25',
    'Opacification of the crystalline lens causing progressive, painless vision loss. Most common cause of reversible blindness worldwide.',
    ['Gradual painless blurring of vision', 'Glare and halos around lights', 'Decreased contrast sensitivity', 'Myopic shift (nuclear sclerosis)', 'Monocular diplopia', 'Lens opacity on slit-lamp exam'],
    ['Visual acuity testing', 'Slit-lamp biomicroscopy', 'Dilated fundus exam to rule out posterior pathology', 'Optical biometry (IOL Master) for surgical planning', 'Potential acuity meter if dense cataract'],
    'Observation with refractive correction for early cataracts. Phacoemulsification with intraocular lens (IOL) implantation when functionally significant. Toric or multifocal IOLs for astigmatism or presbyopia correction.',
    'Excellent. Phacoemulsification achieves 20/40 or better in >95% of uncomplicated cases. Posterior capsular opacification (PCO) may develop in 20-30% within 5 years, treated with Nd:YAG capsulotomy.',
  ),

  'corneal-ulcer': oph(
    'corneal-ulcer', 'Corneal Ulcer (Microbial Keratitis)',
    'anterior-segment', 'H16.0',
    'Infectious corneal stromal defect, commonly bacterial (Pseudomonas, Staphylococcus) but also fungal or Acanthamoeba. Vision-threatening emergency.',
    ['Pain, photophobia, tearing, decreased vision', 'White/yellow stromal infiltrate with overlying epithelial defect', 'Conjunctival injection', 'Anterior chamber reaction or hypopyon', 'Mucopurulent discharge (bacterial)', 'Feathery margins or satellite lesions (fungal)'],
    ['Slit-lamp examination with fluorescein staining', 'Corneal scraping for Gram stain, culture, and sensitivity', 'Confocal microscopy (Acanthamoeba)', 'Consider fungal culture on Sabouraud agar if suspicious'],
    'Empiric fortified topical antibiotics (e.g., fortified tobramycin + cefazolin or fluoroquinolone monotherapy). Adjust based on culture results. Cycloplegic for comfort. Antifungals (natamycin, voriconazole) if fungal. Avoid topical steroids initially. Therapeutic keratoplasty for perforation.',
    'Depends on organism, ulcer size, and proximity to visual axis. Central ulcers often leave visually significant scarring. Early aggressive treatment improves outcomes. Corneal transplant may be needed for dense scars.',
  ),

  'keratoconus': oph(
    'keratoconus', 'Keratoconus',
    'anterior-segment', 'H18.6',
    'Progressive non-inflammatory corneal ectasia with thinning and conical protrusion, causing irregular astigmatism and visual distortion. Typically presents in adolescence.',
    ['Progressive blurring and distortion of vision', 'Frequent changes in spectacle prescription', 'Munson sign (V-shaped indentation of lower lid on downgaze)', 'Vogt striae (fine vertical lines in deep stroma)', 'Fleischer ring (iron deposition at cone base)', 'Scissoring reflex on retinoscopy'],
    ['Corneal topography (Placido-based or Scheimpflug)', 'Corneal pachymetry showing progressive thinning', 'Anterior segment OCT', 'Aberrometry', 'Retinoscopy showing irregular reflex'],
    'Spectacles or RGP contact lenses for mild-to-moderate disease. Corneal collagen cross-linking (CXL) with riboflavin/UVA to halt progression. Intracorneal ring segments (ICRS) for contact lens-intolerant patients. Deep anterior lamellar keratoplasty (DALK) or penetrating keratoplasty (PKP) for advanced disease.',
    'Variable. CXL can stabilize progression in >90% of cases. Most patients manage well with contact lenses. About 10-20% eventually require corneal transplantation, which has high graft survival (>90% at 10 years).',
  ),

  'pterygium': oph(
    'pterygium', 'Pterygium',
    'anterior-segment', 'H11.0',
    'Fibrovascular growth of bulbar conjunctiva encroaching onto the cornea, typically from the nasal side. Associated with UV exposure, dry/windy environments.',
    ['Wing-shaped fleshy growth from nasal conjunctiva onto cornea', 'Irritation, foreign body sensation', 'Induced astigmatism if encroaching on visual axis', 'Redness of the lesion', 'Stocker line (iron line at leading edge)'],
    ['Slit-lamp examination', 'Corneal topography to assess induced astigmatism', 'Document size and encroachment on visual axis with photography'],
    'Observation with artificial tears and UV protection for asymptomatic cases. Surgical excision with conjunctival autograft or amniotic membrane transplant for progressive or visually significant lesions. Mitomycin C adjunct to reduce recurrence.',
    'Good. Recurrence rate 5-15% with conjunctival autograft technique vs 30-50% with bare sclera excision. UV protection reduces recurrence risk.',
  ),

  'blepharitis': oph(
    'blepharitis', 'Blepharitis',
    'oculoplastics', 'H01.0',
    'Chronic inflammation of the eyelid margins. Anterior blepharitis (staphylococcal/seborrheic) involves lash bases; posterior blepharitis (meibomian gland dysfunction) involves meibomian gland orifices.',
    ['Lid margin erythema and crusting', 'Collarettes around lash bases (staphylococcal)', 'Greasy scales (seborrheic)', 'Meibomian gland orifice plugging and turbid secretions', 'Foamy tear film', 'Secondary dry eye symptoms'],
    ['Slit-lamp examination of lid margins', 'Expression of meibomian glands', 'Tear film assessment (TBUT, Schirmer test)', 'Culture of lid margins if recalcitrant'],
    'Lid hygiene: warm compresses, lid scrubs with dilute baby shampoo or commercial preparations. Topical antibiotic ointment (erythromycin, bacitracin) for anterior blepharitis. Oral doxycycline or azithromycin pulse for refractory MGD. LipiFlow or IPL for meibomian gland dysfunction.',
    'Chronic relapsing course. Long-term maintenance lid hygiene required. Complications include chalazia, corneal marginal infiltrates, and chronic dry eye. Manageable with consistent therapy.',
  ),

  'chalazion-hordeolum': oph(
    'chalazion-hordeolum', 'Chalazion / Hordeolum (Stye)',
    'oculoplastics', 'H00',
    'Hordeolum: acute infectious inflammation of eyelid glands (external = Zeis/Moll; internal = meibomian). Chalazion: chronic sterile lipogranulomatous inflammation of a meibomian gland.',
    ['Tender, erythematous eyelid nodule (hordeolum)', 'Non-tender, firm, round lid nodule (chalazion)', 'Pointing abscess near lash line (external hordeolum)', 'Eversion of lid reveals granuloma (chalazion)', 'Preseptal edema in severe cases'],
    ['Clinical examination', 'Evert eyelid to visualize internal lesion', 'Biopsy if recurrent in same location to rule out sebaceous cell carcinoma'],
    'Warm compresses QID, lid hygiene. Topical antibiotic (erythromycin ointment) for hordeolum. Incision and curettage (I&C) for persistent chalazion >4-6 weeks. Intralesional triamcinolone injection as alternative. Oral antibiotics if preseptal cellulitis develops.',
    'Hordeolum usually resolves within 1-2 weeks. Chalazia resolve spontaneously in ~50% within 6 months. I&C is curative in >90%. Recurrent chalazia in elderly warrant biopsy to exclude sebaceous cell carcinoma.',
  ),

  'dry-eye-disease': oph(
    'dry-eye-disease', 'Dry Eye Disease',
    'anterior-segment', 'H04.12',
    'Multifactorial disease of the tear film and ocular surface resulting in symptoms of discomfort, visual disturbance, and tear film instability with potential damage to the ocular surface.',
    ['Burning, stinging, foreign body sensation', 'Fluctuating vision improving with blink', 'Paradoxical tearing (reflex)', 'Punctate epithelial erosions on fluorescein staining', 'Decreased tear breakup time (<10 seconds)', 'Reduced Schirmer test (<10 mm in 5 min)'],
    ['Tear breakup time (TBUT)', 'Schirmer test (with and without anesthesia)', 'Fluorescein and lissamine green staining', 'Tear osmolarity measurement', 'MMP-9 (InflammaDry) testing', 'Meibography'],
    'Stepwise approach: artificial tears (preservative-free for frequent use), gel or ointment at bedtime, anti-inflammatory drops (cyclosporine 0.05%, lifitegrast 5%), punctal plugs, autologous serum tears for severe cases. Address MGD with warm compresses, omega-3 supplements, and lid hygiene.',
    'Chronic condition requiring ongoing management. Most patients achieve adequate symptom control with appropriate therapy. Severe aqueous-deficient dry eye (e.g., Sjogren syndrome) can lead to corneal complications.',
  ),

  // ---- Glaucoma (3) --------------------------------------------------------

  'open-angle-glaucoma': oph(
    'open-angle-glaucoma', 'Primary Open-Angle Glaucoma (POAG)',
    'glaucoma', 'H40.1',
    'Chronic progressive optic neuropathy with characteristic optic disc cupping and visual field loss. The most common form of glaucoma. Aqueous outflow resistance at the trabecular meshwork despite an open angle.',
    ['Asymptomatic until advanced (insidious peripheral field loss)', 'Elevated IOP (>21 mmHg, though normal-tension variant exists)', 'Increased cup-to-disc ratio (>0.5 or asymmetry >0.2)', 'Notching or thinning of neuroretinal rim', 'Disc hemorrhage (Drance hemorrhage)', 'RNFL thinning on OCT'],
    ['Goldmann applanation tonometry', 'Gonioscopy (open angle confirmed)', 'Dilated optic nerve head examination', 'OCT retinal nerve fiber layer (RNFL) and ganglion cell analysis', 'Humphrey visual field (24-2 SITA Standard)', 'Central corneal thickness (pachymetry)'],
    'IOP reduction (target: 20-50% from baseline). Topical prostaglandin analogs (latanoprost, bimatoprost) first-line. Adjuncts: beta-blockers, alpha-agonists, CAIs, Rho kinase inhibitors. SLT (selective laser trabeculoplasty) as first-line or adjunct. Surgical: trabeculectomy, tube shunt, or MIGS procedures for refractory cases.',
    'Lifelong management required. With treatment, most patients maintain functional vision. Risk of progression despite treatment in 15-20%. Early detection is critical as lost vision is irreversible. Normal-tension glaucoma may progress despite low IOP targets.',
  ),

  'angle-closure-glaucoma': oph(
    'angle-closure-glaucoma', 'Acute Angle-Closure Glaucoma',
    'glaucoma', 'H40.2',
    'Ophthalmic emergency caused by sudden obstruction of aqueous outflow from pupillary block, leading to rapid IOP elevation. More common in hyperopes, Asians, and women.',
    ['Severe eye pain, headache, nausea/vomiting', 'Blurred vision with halos around lights', 'Fixed mid-dilated pupil', 'Conjunctival injection', 'Corneal edema (steamy cornea)', 'IOP often 40-80 mmHg', 'Shallow anterior chamber'],
    ['Goldmann applanation tonometry (markedly elevated)', 'Slit-lamp exam (shallow AC, corneal edema, flare)', 'Gonioscopy (appositional or synechial angle closure)', 'Anterior segment OCT or ultrasound biomicroscopy', 'B-scan ultrasound to rule out posterior causes'],
    'Emergency IOP reduction: topical timolol, brimonidine, pilocarpine 1-2%, topical prednisolone. Systemic: acetazolamide IV/PO, IV mannitol if needed. Definitive: laser peripheral iridotomy (LPI) once cornea clears. Prophylactic LPI to fellow eye. Lens extraction if phacomorphic component.',
    'Good if treated promptly. Permanent vision loss correlates with duration and degree of IOP elevation. LPI is curative for pupillary block mechanism. Chronic angle closure may develop synechiae requiring long-term IOP management.',
  ),

  'glaucoma-suspect': oph(
    'glaucoma-suspect', 'Glaucoma Suspect / Ocular Hypertension',
    'glaucoma', 'H40.0',
    'Elevated IOP (>21 mmHg) or suspicious optic disc appearance without definitive glaucomatous damage. Risk factors include thin central corneal thickness, family history, and African descent.',
    ['Elevated IOP on screening', 'Large or asymmetric cup-to-disc ratio', 'No definitive RNFL defect or visual field loss', 'Thin central cornea (<555 microns)', 'May have disc hemorrhage'],
    ['Serial Goldmann applanation tonometry', 'Gonioscopy', 'OCT RNFL and ganglion cell analysis (baseline and serial)', 'Humphrey visual field (baseline and serial)', 'Central corneal thickness', 'Diurnal IOP curve if needed'],
    'Observation with serial monitoring (every 6-12 months) for low-risk patients. Treatment with topical IOP-lowering drops (prostaglandin analog) if high risk per OHTS criteria (IOP >25, thin CCT, large cup, older age). SLT as alternative first-line in select patients.',
    'Approximately 10% of ocular hypertensives develop glaucoma within 5 years without treatment (OHTS data). Treatment reduces conversion by ~50%. Many remain stable without intervention.',
  ),

  // ---- Posterior Segment (7) ------------------------------------------------

  'dry-amd': oph(
    'dry-amd', 'Dry Age-Related Macular Degeneration (Dry AMD)',
    'posterior-segment', 'H35.31',
    'Progressive degeneration of the macula characterized by drusen deposits and RPE atrophy. Accounts for ~85-90% of AMD cases. Leading cause of central vision loss in those over 50.',
    ['Gradual central vision loss', 'Difficulty reading or recognizing faces', 'Drusen (soft > hard, size >125 microns indicates intermediate AMD)', 'RPE pigmentary changes', 'Geographic atrophy (advanced dry AMD)', 'Metamorphopsia if progressing to wet form'],
    ['Dilated fundus exam', 'OCT (drusen volume, RPE atrophy, subretinal drusenoid deposits)', 'Fundus autofluorescence (geographic atrophy mapping)', 'Fluorescein angiography (to exclude choroidal neovascularization)', 'Amsler grid for home monitoring', 'OCT angiography'],
    'AREDS2 supplementation (lutein, zeaxanthin, zinc, vitamins C and E) for intermediate/advanced AMD to reduce progression risk by ~25%. Smoking cessation. Recently approved complement inhibitors (pegcetacoplan, avacincaptad pegol) for geographic atrophy to slow progression. Low-vision rehabilitation for advanced disease.',
    'Variable. Early/intermediate AMD may remain stable for years. Geographic atrophy progresses slowly (~0.5-2 mm²/year). No current treatment restores lost photoreceptors. Risk of conversion to wet AMD requires ongoing monitoring.',
  ),

  'wet-amd': oph(
    'wet-amd', 'Wet (Neovascular) Age-Related Macular Degeneration',
    'posterior-segment', 'H35.32',
    'Choroidal neovascularization (CNV) growing beneath or through the RPE causing exudation, hemorrhage, and rapid central vision loss. Accounts for ~10-15% of AMD but majority of severe vision loss.',
    ['Sudden or rapid central vision loss', 'Metamorphopsia (distortion of straight lines)', 'Central scotoma', 'Subretinal or sub-RPE fluid on OCT', 'Subretinal hemorrhage', 'Lipid exudation', 'Disciform scar (end stage)'],
    ['OCT (subretinal/intraretinal fluid, PED, CNV)', 'Fluorescein angiography (classic vs occult CNV, leakage pattern)', 'ICG angiography (polypoidal choroidal vasculopathy)', 'OCT angiography (non-invasive CNV detection)', 'Amsler grid'],
    'Intravitreal anti-VEGF injections: aflibercept, ranibizumab, bevacizumab (off-label), brolucizumab, or faricimab. Treat-and-extend or monthly dosing regimens. Combination with photodynamic therapy for polypoidal vasculopathy. Port delivery system (ranibizumab) for select patients requiring less frequent visits.',
    'Good visual outcomes with early and consistent anti-VEGF therapy. ANCHOR/MARINA trials showed ~40% gained ≥3 lines of vision. Requires indefinite treatment in most cases. Delayed or inconsistent treatment leads to progressive vision loss and scarring.',
  ),

  'diabetic-retinopathy': oph(
    'diabetic-retinopathy', 'Diabetic Retinopathy',
    'posterior-segment', 'H36.0',
    'Microvascular complication of diabetes mellitus affecting retinal vasculature. Progresses from non-proliferative (NPDR) through proliferative (PDR) stages. Leading cause of blindness in working-age adults.',
    ['Microaneurysms (earliest clinical sign)', 'Dot-blot hemorrhages, hard exudates, cotton-wool spots', 'Venous beading and IRMA (severe NPDR)', 'Neovascularization of disc (NVD) or elsewhere (NVE) in PDR', 'Vitreous hemorrhage', 'Tractional retinal detachment', 'Diabetic macular edema (DME)'],
    ['Dilated fundus exam (annual screening for all diabetics)', 'OCT (macular edema detection and monitoring)', 'Fluorescein angiography (ischemia and neovascularization)', 'Ultra-widefield imaging', 'OCT angiography', 'HbA1c and metabolic panel'],
    'Systemic: optimize glycemic control (HbA1c <7%), blood pressure, and lipids. NPDR: monitoring with stepwise intervals. DME: intravitreal anti-VEGF (first-line), intravitreal steroids (dexamethasone implant, fluocinolone). PDR: panretinal photocoagulation (PRP) or intravitreal anti-VEGF. Vitrectomy for non-clearing vitreous hemorrhage or tractional retinal detachment.',
    'Strongly influenced by glycemic and blood pressure control. Anti-VEGF therapy has improved DME outcomes significantly. PDR with timely PRP has favorable prognosis. Advanced PDR with TRD carries risk of severe irreversible vision loss.',
  ),

  'retinal-detachment': oph(
    'retinal-detachment', 'Retinal Detachment',
    'posterior-segment', 'H33',
    'Separation of the neurosensory retina from the retinal pigment epithelium. Types: rhegmatogenous (most common, from retinal break), tractional (diabetic, proliferative vitreoretinopathy), and exudative (inflammatory or neoplastic).',
    ['Sudden onset of floaters and photopsia (flashes)', 'Progressive visual field loss described as curtain or shadow', 'Decreased visual acuity if macula involved', 'Relative afferent pupillary defect (extensive detachment)', 'Shafer sign (tobacco dust/pigmented cells in anterior vitreous)', 'Elevated or bullous retina on funduscopy'],
    ['Dilated fundus exam with scleral depression', 'B-scan ultrasonography (if media opacity)', 'OCT (macular status, subtle detachments)', 'Careful examination of fellow eye for predisposing lesions'],
    'Rhegmatogenous: pneumatic retinopexy (select cases), scleral buckle, or pars plana vitrectomy (PPV) with gas or silicone oil tamponade. Tractional: PPV with membrane peeling. Exudative: treat underlying cause. Prophylactic laser for symptomatic tears without detachment.',
    'Anatomic success >90% with modern surgical techniques. Visual outcome depends on macula status: macula-on detachments have best prognosis. Macula-off detachments have worse final acuity, with better outcomes if repaired within 7-10 days. PVR is the leading cause of surgical failure.',
  ),

  'central-retinal-artery-occlusion': oph(
    'central-retinal-artery-occlusion', 'Central Retinal Artery Occlusion (CRAO)',
    'posterior-segment', 'H34.1',
    'Acute embolic or thrombotic occlusion of the central retinal artery causing sudden, painless, profound monocular vision loss. Ophthalmologic stroke equivalent and medical emergency.',
    ['Sudden painless loss of vision (often counting fingers or worse)', 'Relative afferent pupillary defect (RAPD)', 'Diffuse pale/whitened retina with cherry-red spot at fovea', 'Attenuated arterioles', 'Box-carring of blood column', 'Emboli may be visible (Hollenhorst plaques)'],
    ['Dilated fundus exam', 'Fluorescein angiography (delayed arterial filling, leading-edge staining)', 'OCT (inner retinal edema acutely, atrophy chronically)', 'Urgent carotid imaging (duplex ultrasound or CTA)', 'Echocardiography', 'ESR/CRP to rule out giant cell arteritis', 'Complete stroke workup'],
    'Time-critical (<4-6 hours): ocular massage, anterior chamber paracentesis, intra-arterial tPA (investigational). Systemic workup mandatory to prevent stroke. Treat underlying etiology: carotid endarterectomy if significant stenosis, anticoagulation for cardiac source. Emergent high-dose IV steroids if GCA suspected. Panretinal anti-VEGF if neovascularization develops.',
    'Poor. Most patients retain counting fingers to hand-motion vision. Spontaneous improvement uncommon. Neovascular glaucoma develops in ~15-20% at 2-3 months. Critical to prevent contralateral eye involvement and systemic stroke.',
  ),

  'central-retinal-vein-occlusion': oph(
    'central-retinal-vein-occlusion', 'Central Retinal Vein Occlusion (CRVO)',
    'posterior-segment', 'H34.8',
    'Thrombotic occlusion of the central retinal vein at or posterior to the lamina cribrosa causing retinal venous congestion, hemorrhage, and macular edema. Associated with hypertension, diabetes, glaucoma, and hypercoagulable states.',
    ['Sudden painless blurred vision (variable severity)', 'Dilated tortuous retinal veins', 'Widespread flame-shaped and dot-blot hemorrhages in all quadrants', 'Cotton-wool spots, macular edema', 'Disc edema', 'RAPD in ischemic type'],
    ['Dilated fundus exam', 'OCT (macular edema quantification)', 'Fluorescein angiography (ischemic vs non-ischemic: >10 disc areas of non-perfusion = ischemic)', 'Blood pressure, fasting glucose, HbA1c, lipid panel', 'Hypercoagulability workup in young patients', 'Check IOP (glaucoma association)'],
    'Macular edema: intravitreal anti-VEGF injections (aflibercept, ranibizumab) first-line; dexamethasone intravitreal implant alternative. Monitor for neovascularization. PRP for neovascular complications (iris, disc, or retinal NV). Treat systemic risk factors aggressively.',
    'Non-ischemic CRVO: ~50% resolve or improve spontaneously; macular edema may require prolonged treatment. Ischemic CRVO: guarded prognosis, ~60% develop neovascular complications within 1 year. Regular monitoring for at least 2-3 years.',
  ),

  'vitreous-hemorrhage': oph(
    'vitreous-hemorrhage', 'Vitreous Hemorrhage',
    'posterior-segment', 'H43.1',
    'Bleeding into the vitreous cavity from retinal vessels, neovascularization, or trauma. Most common causes: diabetic retinopathy, posterior vitreous detachment with retinal tear, retinal vein occlusion.',
    ['Sudden painless vision loss or floaters', 'Vision may range from mild haziness to light-perception only', 'Loss of red reflex on direct ophthalmoscopy', 'Unable to visualize fundus if dense', 'May layer inferiorly with gravity'],
    ['B-scan ultrasonography (essential when fundus not visible to rule out retinal detachment)', 'Dilated fundus exam if view permits', 'OCT if view allows', 'Assess fellow eye for underlying etiology', 'Check blood glucose, HbA1c, blood pressure', 'Coagulation studies if indicated'],
    'Observation with head elevation (allow blood to settle inferiorly) for mild hemorrhage with no retinal detachment. Pars plana vitrectomy for: non-clearing hemorrhage (>1-3 months), associated retinal detachment, or neovascular glaucoma. Treat underlying cause (PRP for PDR/CRVO with NV, repair retinal tear/detachment).',
    'Depends on underlying etiology. Vitreous hemorrhage from PVD with retinal tear has good prognosis if tear is treated. PDR-related hemorrhage tends to recur without adequate PRP. Recurrent vitreous hemorrhage after vitrectomy possible.',
  ),

  // ---- Neuro-Ophthalmology (3) ----------------------------------------------

  'optic-neuritis': oph(
    'optic-neuritis', 'Optic Neuritis',
    'neuro-ophthalmology', 'H46',
    'Inflammatory demyelination of the optic nerve, strongly associated with multiple sclerosis (MS). Typical form: unilateral, young female, pain with eye movement, spontaneous recovery.',
    ['Subacute monocular vision loss over days', 'Pain with eye movements (>90%)', 'RAPD (relative afferent pupillary defect)', 'Dyschromatopsia (impaired color vision, especially red desaturation)', 'Optic disc may be normal (retrobulbar) or swollen (papillitis)', 'Uhthoff phenomenon (worsening with heat/exercise)'],
    ['Clinical diagnosis (no single confirmatory test)', 'Humphrey visual field (central or cecocentral scotoma)', 'MRI brain and orbits with contrast (optic nerve enhancement, demyelinating lesions)', 'OCT (RNFL thinning after acute phase)', 'Lumbar puncture (oligoclonal bands) if MS workup indicated', 'MOG and AQP4 antibodies to exclude NMOSD/MOGAD'],
    'IV methylprednisolone 1 g/day for 3 days followed by oral taper (ONTT protocol) speeds recovery but does not improve final visual outcome. Oral prednisone alone is contraindicated (increased recurrence). Plasma exchange for severe or atypical cases. MS disease-modifying therapy if MRI shows demyelinating lesions.',
    'Good for typical optic neuritis: >90% recover to 20/40 or better within 6-12 months. 50% risk of MS within 15 years if brain MRI lesions present at onset. Atypical features (bilateral, no pain, severe disc edema, no recovery) suggest alternative diagnosis (NMOSD) with worse prognosis.',
  ),

  'papilledema': oph(
    'papilledema', 'Papilledema',
    'neuro-ophthalmology', 'H47.1',
    'Bilateral optic disc swelling secondary to elevated intracranial pressure (ICP). Causes include intracranial mass, idiopathic intracranial hypertension (IIH), cerebral venous sinus thrombosis, and meningitis.',
    ['Headache (worse in morning, with Valsalva)', 'Transient visual obscurations (seconds-long grey-outs)', 'Pulsatile tinnitus', 'Bilateral optic disc edema with blurred margins', 'Peripapillary hemorrhages and cotton-wool spots', 'Enlarged blind spot on visual field testing', 'Diplopia from CN VI palsy (false localizing sign)'],
    ['Dilated fundus exam (bilateral disc edema)', 'OCT (RNFL thickening, subretinal fluid)', 'MRI brain with MRV (rule out mass, hydrocephalus, venous sinus thrombosis)', 'Lumbar puncture with opening pressure (>25 cmH2O) after imaging clears mass', 'Humphrey visual field (enlarged blind spot, arcuate defects)'],
    'Treat underlying cause. IIH: weight loss (5-10% body weight), acetazolamide (up to 4 g/day), topiramate as alternative. Surgical: optic nerve sheath fenestration or CSF shunting (VP or LP shunt) for progressive visual loss despite medical therapy. Venous sinus stenting for selected cases with transverse sinus stenosis.',
    'Variable. IIH with prompt treatment: most preserve vision. Untreated or refractory papilledema can lead to progressive optic atrophy and permanent vision loss. Secondary causes depend on underlying etiology. Long-term monitoring of visual fields essential.',
  ),

  'cranial-nerve-palsy': oph(
    'cranial-nerve-palsy', 'Cranial Nerve III, IV, VI Palsy',
    'neuro-ophthalmology', 'H49',
    'Palsy of ocular motor nerves causing diplopia and strabismus. CN III (oculomotor) palsy is most concerning due to possible aneurysm; CN VI (abducens) most common overall; CN IV (trochlear) most common after trauma.',
    ['Binocular diplopia (horizontal, vertical, or torsional)', 'CN III: ptosis, "down and out" eye, dilated pupil if compressive', 'CN IV: hypertropia worse on contralateral gaze and ipsilateral head tilt (Parks 3-step)', 'CN VI: esotropia, limited abduction', 'Aberrant regeneration (CN III) suggests compressive or chronic etiology'],
    ['Complete neurological and ophthalmic exam', 'Pupil examination (pupil-involving CN III = emergency)', 'MRI/MRA brain (rule out aneurysm, mass, demyelination)', 'CTA if aneurysm suspected and MRA inconclusive', 'Blood glucose, HbA1c, ESR/CRP (microvascular risk factors)', 'LP if CN VI palsy with papilledema (elevated ICP)'],
    'Pupil-involving CN III palsy: emergent neuroimaging (CTA/MRA) to rule out posterior communicating artery aneurysm; neurosurgical consultation. Microvascular palsies (diabetes, hypertension): observation for 3-6 months with prism for diplopia. Strabismus surgery for stable residual deviation. Treat underlying cause (tumor, inflammation, GCA).',
    'Microvascular palsies: spontaneous recovery in >90% within 3-6 months. Compressive CN III (aneurysm) is life-threatening without intervention. Traumatic CN IV palsy may not recover fully. Persistent diplopia can be managed with prism glasses or surgery.',
  ),

  // ---- Infectious (4) -------------------------------------------------------

  'conjunctivitis-bacterial': oph(
    'conjunctivitis-bacterial', 'Bacterial Conjunctivitis',
    'infectious', 'H10.0',
    'Acute infection of the conjunctiva by bacteria (S. aureus, S. pneumoniae, H. influenzae, Moraxella). Hyperacute form caused by N. gonorrhoeae is sight-threatening.',
    ['Mucopurulent discharge (yellow-green)', 'Conjunctival injection', 'Eyelid crusting, especially on waking', 'Papillary reaction on tarsal conjunctiva', 'Usually unilateral, may become bilateral', 'Hyperacute: copious purulent discharge, lid swelling, chemosis'],
    ['Clinical diagnosis in most cases', 'Gram stain and culture for: hyperacute, neonatal, or refractory cases', 'Rule out gonococcal infection in sexually active patients with hyperacute presentation', 'Check for corneal involvement (ulcer, infiltrate)'],
    'Self-limited in many cases (5-7 days). Topical broad-spectrum antibiotic drops (fluoroquinolone, erythromycin ointment, polymyxin/trimethoprim). Hyperacute (gonococcal): systemic ceftriaxone 1 g IM + topical antibiotic + urgent ophthalmology referral. Frequent saline irrigation for gonococcal.',
    'Excellent for common bacterial conjunctivitis; resolves within 1-2 weeks. Hyperacute gonococcal conjunctivitis can cause corneal perforation within 24-48 hours if untreated. Neonatal conjunctivitis (ophthalmia neonatorum) requires systemic treatment.',
  ),

  'conjunctivitis-viral': oph(
    'conjunctivitis-viral', 'Viral Conjunctivitis (Epidemic Keratoconjunctivitis)',
    'infectious', 'H10.1',
    'Highly contagious adenoviral conjunctivitis, often bilateral. Epidemic keratoconjunctivitis (EKC) caused by adenovirus serotypes 8, 19, 37 can cause subepithelial infiltrates (SEIs) and prolonged visual morbidity.',
    ['Watery discharge', 'Follicular reaction on tarsal conjunctiva', 'Preauricular lymphadenopathy', 'Red eye, tearing, foreign body sensation', 'Subepithelial infiltrates (SEIs) developing 2-3 weeks after onset', 'Pseudomembranes in severe cases', 'Often preceded by URI'],
    ['Clinical diagnosis', 'Adenoviral immunoassay (RPS Adeno Detector)', 'Distinguish from bacterial (purulent discharge) and allergic (itching, papillae)', 'Slit-lamp exam for pseudomembranes and SEIs'],
    'Supportive: cold compresses, artificial tears, topical antihistamine/NSAID for comfort. No effective antiviral. Strict hygiene to prevent spread (hand washing, avoid sharing towels). Topical corticosteroid (low-dose loteprednol) only for significant SEIs or pseudomembranes under ophthalmology guidance. Peel pseudomembranes if present.',
    'Self-limited, resolving in 2-3 weeks. SEIs may persist for weeks to months causing decreased vision and glare. SEIs respond to topical steroids but may recur on discontinuation. Highly contagious for 10-14 days.',
  ),

  'uveitis': oph(
    'uveitis', 'Uveitis (Anterior / Intermediate / Posterior / Panuveitis)',
    'infectious', 'H20',
    'Intraocular inflammation involving the uveal tract. Anterior uveitis (iritis) is most common. Etiologies include autoimmune (HLA-B27, sarcoidosis, Behcet), infectious (HSV, CMV, toxoplasmosis, TB, syphilis), and idiopathic.',
    ['Pain, photophobia, redness (anterior)', 'Blurred vision, floaters (posterior/intermediate)', 'Cells and flare in anterior chamber', 'Keratic precipitates (fine = non-granulomatous; mutton-fat = granulomatous)', 'Posterior synechiae', 'Vitreous cells and haze (intermediate/posterior)', 'CME, retinal vasculitis, chorioretinal lesions'],
    ['Slit-lamp exam with detailed grading (SUN criteria)', 'Dilated fundus exam', 'OCT (CME, ERM)', 'Fluorescein angiography (vasculitis, CME, NV)', 'Targeted workup: HLA-B27, ANA, ACE, lysozyme, RPR/FTA-ABS, QuantiFERON-Gold, chest X-ray', 'Aqueous/vitreous sampling for PCR if infectious etiology suspected'],
    'Anterior: topical corticosteroids (prednisolone acetate 1%) with aggressive taper, cycloplegic (cyclopentolate/atropine) to prevent synechiae. Posterior/intermediate/panuveitis: periocular or intravitreal corticosteroid, systemic immunosuppression (methotrexate, mycophenolate, adalimumab) for chronic or sight-threatening disease. Treat specific infectious cause if identified.',
    'Depends on etiology and severity. Acute anterior uveitis (HLA-B27): good with treatment, but recurrences common. Chronic or posterior uveitis: risk of complications (CME, glaucoma, cataract, band keratopathy). Early aggressive treatment and steroid-sparing immunosuppression improve long-term outcomes.',
  ),

  'orbital-cellulitis': oph(
    'orbital-cellulitis', 'Orbital Cellulitis',
    'infectious', 'H05.01',
    'Infection of orbital tissues posterior to the orbital septum. Usually secondary to sinusitis (ethmoid most common in children). Potentially life-threatening due to cavernous sinus thrombosis, meningitis, or brain abscess.',
    ['Proptosis', 'Painful and restricted extraocular motility', 'Ophthalmoplegia', 'Eyelid edema and erythema', 'Decreased visual acuity', 'Fever, leukocytosis', 'RAPD if optic nerve compression', 'Chemosis'],
    ['CT orbits and sinuses with contrast (subperiosteal or orbital abscess)', 'Blood cultures', 'CBC with differential, CRP', 'MRI if intracranial extension suspected', 'Visual acuity, pupil exam, IOP, color vision (optic nerve function monitoring)', 'Distinguish from preseptal cellulitis (no proptosis, no motility restriction)'],
    'IV broad-spectrum antibiotics (ampicillin-sulbactam or ceftriaxone + metronidazole; add vancomycin if MRSA suspected). Surgical drainage of subperiosteal or orbital abscess if: no improvement in 24-48 hours, large abscess, vision loss, or intracranial extension. ENT consultation for sinus drainage. Close monitoring of vision and pupil function.',
    'Good with early IV antibiotics. Subperiosteal abscesses in children may resolve with antibiotics alone. Complications include vision loss (optic nerve compression), cavernous sinus thrombosis (5-10% mortality), and intracranial abscess. Prompt surgical intervention when indicated improves outcomes.',
  ),

  'endophthalmitis': oph(
    'endophthalmitis', 'Endophthalmitis',
    'infectious', 'H44.0',
    'Severe intraocular infection involving the vitreous and/or aqueous humor. Most commonly postoperative (post-cataract surgery), also post-intravitreal injection, post-traumatic, or endogenous (hematogenous spread).',
    ['Rapidly progressive pain and vision loss', 'Hypopyon (layered pus in anterior chamber)', 'Lid edema and conjunctival injection', 'Corneal edema', 'Absent or poor red reflex', 'Vitritis (vitreous opacity)', 'Onset: 2-5 days postop (acute) or weeks-months (chronic/indolent)'],
    ['Clinical diagnosis (high index of suspicion)', 'Vitreous tap/biopsy for Gram stain and culture', 'Aqueous tap', 'B-scan ultrasonography (vitreous opacity, retinal status)', 'Blood cultures if endogenous suspected'],
    'Intravitreal antibiotics: vancomycin (1 mg/0.1 mL) + ceftazidime (2.25 mg/0.1 mL) immediately. Vitrectomy recommended if presenting VA is light perception or worse (EVS criteria). Intravitreal dexamethasone (controversial). Systemic antibiotics for endogenous endophthalmitis. Topical fortified antibiotics and cycloplegic.',
    'Depends on organism and visual acuity at presentation. Coagulase-negative Staphylococcus: ~75% achieve 20/40 or better. Virulent organisms (S. aureus, Streptococcus, gram-negatives): much worse prognosis. EVS showed vitrectomy benefit only when presenting VA was light perception. Endogenous endophthalmitis has poorest outcomes.',
  ),

  // ---- Pediatric Eye (3) ----------------------------------------------------

  'amblyopia': oph(
    'amblyopia', 'Amblyopia (Lazy Eye)',
    'pediatric-eye', 'H53.0',
    'Reduced best-corrected visual acuity in one or both eyes due to abnormal visual development in childhood. Most common cause of monocular vision loss in children. Types: strabismic, refractive (anisometropic or bilateral), and deprivation.',
    ['Decreased visual acuity not correctable to normal with glasses', 'Relative afferent pupillary defect (sometimes subtle)', 'Strabismus may be present', 'Crowding phenomenon (reads line better than single letters)', 'Normal ocular structures on examination', 'History of strabismus, high refractive error, or visual deprivation'],
    ['Visual acuity testing (age-appropriate: Teller acuity cards, HOTV, Snellen)', 'Cycloplegic refraction', 'Cover-uncover and alternate cover test', 'Sensory testing (Worth 4-dot, Titmus stereo)', 'Dilated fundus exam to exclude organic cause', 'Photoscreening in preschool children'],
    'Full-time spectacle correction (refractive error must be corrected first; refractive adaptation for 4-16 weeks). Penalization of sound eye: patching (2-6 hours/day depending on age and severity) or atropine penalization (1% drop to sound eye on weekends or daily). Treatment effective up to age 17 (PEDIG studies). Treat any underlying strabismus or deprivation cause.',
    'Good if detected and treated early. Treatment before age 7 yields best results, but improvement possible up to age 17. Compliance with patching is the main barrier. Recurrence rate ~25% after cessation of treatment; monitor until visual maturity. Deprivation amblyopia has worst prognosis.',
  ),

  'strabismus': oph(
    'strabismus', 'Strabismus (Squint / Ocular Misalignment)',
    'pediatric-eye', 'H50',
    'Misalignment of the visual axes. Types: esotropia (inward), exotropia (outward), hypertropia (upward). May be constant or intermittent. Childhood onset can cause amblyopia and loss of stereopsis.',
    ['Ocular misalignment (observed or reported by parents)', 'Abnormal cover test (tropia or phoria decompensation)', 'Head tilt or turn (compensatory posture)', 'Diplopia (in acquired adult strabismus)', 'Loss of stereopsis', 'Amblyopia in the deviating eye (children)'],
    ['Cover-uncover test, alternate cover test with prism', 'Hirschberg and Krimsky tests', 'Cycloplegic refraction (high hyperopia causes accommodative esotropia)', 'Sensory testing (stereoacuity)', 'Forced ductions and force generation (restrictive vs paralytic)', 'MRI brain if acquired or neurologic cause suspected'],
    'Spectacles for accommodative esotropia (full hyperopic correction). Prism glasses for small stable deviations with diplopia. Strabismus surgery (recession/resection of extraocular muscles) for significant or non-accommodative deviations. Botulinum toxin injection (acute CN VI palsy, small-angle strabismus). Treat amblyopia concurrently.',
    'Good surgical alignment achieved in ~80-90% with one surgery. Binocular vision recovery depends on age at treatment; better outcomes with early alignment (before age 2 for infantile esotropia). Adults benefit from improved alignment but rarely regain stereopsis. Recurrence or consecutive deviation possible.',
  ),

  'retinopathy-of-prematurity': oph(
    'retinopathy-of-prematurity', 'Retinopathy of Prematurity (ROP)',
    'pediatric-eye', 'H35.1',
    'Vasoproliferative disorder of the immature retina in premature infants. Risk factors: low gestational age (<32 weeks), low birth weight (<1500 g), supplemental oxygen therapy. Leading cause of childhood blindness in developed countries.',
    ['Abnormal retinal vascular development on screening exam', 'Demarcation line (stage 1), ridge (stage 2), extraretinal neovascularization (stage 3)', 'Plus disease (tortuous/dilated posterior pole vessels)', 'Partial (stage 4) or total (stage 5) retinal detachment', 'Aggressive posterior ROP (AP-ROP): rapidly progressive form'],
    ['Serial dilated fundus exams with indirect ophthalmoscopy (screening per AAO/AAP guidelines)', 'RetCam wide-field imaging', 'Classification per ICROP system (zone, stage, extent, plus disease)', 'Screening begins at 31 weeks postmenstrual age or 4 weeks chronological age, whichever is later'],
    'Observation for mild disease (>90% regress spontaneously). Treatment threshold (type 1 ROP): laser photocoagulation to avascular retina or intravitreal anti-VEGF (bevacizumab or ranibizumab). Vitrectomy with or without lensectomy for stage 4-5 (retinal detachment). Anti-VEGF increasingly used but requires prolonged follow-up due to late recurrence risk.',
    'Stage 1-2: excellent, >90% spontaneous regression. Type 1 ROP treated with laser: favorable structural outcome in ~85-90%. Anti-VEGF shows promising results but long-term visual and systemic safety data still emerging. Stage 5 (total detachment): poor visual prognosis despite surgery.',
  ),

  // ---- Trauma (2) -----------------------------------------------------------

  'open-globe-injury': oph(
    'open-globe-injury', 'Open Globe Injury',
    'trauma', 'S05.6',
    'Full-thickness wound of the eye wall (cornea and/or sclera). Types: rupture (blunt force), laceration (sharp force), penetrating (single entry wound), perforating (entry + exit wounds), intraocular foreign body (IOFB).',
    ['History of trauma (projectile, assault, fall, blast)', 'Decreased visual acuity', 'Abnormal or peaked pupil (toward wound)', 'Shallow anterior chamber or flat chamber', 'Exposed uveal tissue', 'Positive Seidel test (aqueous leak with fluorescein)', 'Subconjunctival hemorrhage (360 degrees suspicious for scleral rupture)', 'Low IOP'],
    ['Careful external examination (do NOT apply pressure to globe)', 'Visual acuity (even light perception is prognostic)', 'CT orbits without contrast (rule out IOFB, avoid MRI if metallic FB suspected)', 'Seidel test if subtle wound', 'B-scan ONLY if needed and performed gently', 'Tetanus status'],
    'Shield eye (rigid Fox shield, no pressure patch). NPO for surgery. IV broad-spectrum antibiotics (vancomycin + ceftazidime or fluoroquinolone). Emergent surgical repair: primary closure of wound, removal of extruded tissue if necrotic, IOFB removal (primary or delayed vitrectomy). Anti-emetics to prevent Valsalva. Intravitreal antibiotics if high endophthalmitis risk.',
    'Depends on mechanism, wound location, presenting VA, and RAPD. Ocular Trauma Score (OTS) predicts final visual outcome. Posterior zone injuries and initial VA of NLP carry worst prognosis. Sympathetic ophthalmia risk to fellow eye (~0.2-0.5%). Endophthalmitis risk 3-7% (higher with IOFB and rural injuries).',
  ),

  'chemical-burn-eye': oph(
    'chemical-burn-eye', 'Chemical Burn (Ocular)',
    'trauma', 'T26.6',
    'Alkali burns (NaOH, ammonia, lime) are more severe than acid burns due to liquefactive necrosis and deeper penetration. True ocular emergency requiring immediate irrigation.',
    ['Severe pain, tearing, blepharospasm', 'Conjunctival injection or blanching (ischemia = worse)', 'Corneal epithelial defect or opacification', 'Limbal ischemia (blanched limbus = poor prognosis)', 'Elevated IOP', 'Anterior chamber inflammation', 'Roper-Hall classification grades severity (I-IV)'],
    ['Immediate copious irrigation before any exam (at least 30 minutes with balanced saline, NS, or water)', 'Check pH (continue irrigation until pH 7.0-7.4 and stable for 30 minutes)', 'Assess limbal ischemia (clock hours of blanching)', 'Slit-lamp exam after irrigation', 'IOP measurement', 'Document corneal clarity and epithelial defect size'],
    'Immediate copious irrigation (first priority, do not delay for anything). Topical antibiotics (fluoroquinolone). Topical steroids (prednisolone 1% QID for first 7-10 days then taper—avoid prolonged use past day 14 due to stromal melting). Cycloplegic. Vitamin C (topical and oral) and doxycycline (anti-collagenase). Citric acid drops. Amniotic membrane for severe burns. Limbal stem cell transplant and corneal transplant for advanced cases.',
    'Grade I-II: good, full recovery expected. Grade III: moderate, prolonged recovery with risk of scarring. Grade IV: poor, limbal stem cell deficiency leads to conjunctivalization of cornea and chronic inflammation. Alkali burns worse than acid. Limbal ischemia >6 clock hours and dense corneal opacification carry guarded prognosis.',
  ),

  // ---- Oculoplastics (2) ----------------------------------------------------

  'thyroid-eye-disease': oph(
    'thyroid-eye-disease', 'Thyroid Eye Disease (Graves Ophthalmopathy)',
    'oculoplastics', 'H06.2',
    'Autoimmune orbital inflammation associated with Graves disease. Antibodies target TSH receptors on orbital fibroblasts causing adipogenesis, glycosaminoglycan deposition, and extraocular muscle enlargement.',
    ['Proptosis (bilateral, often asymmetric)', 'Lid retraction (most common sign, Dalrymple sign)', 'Lid lag on downgaze (von Graefe sign)', 'Periorbital edema', 'Conjunctival injection and chemosis', 'Restrictive strabismus (inferior rectus most affected → limited upgaze)', 'Exposure keratopathy', 'Compressive optic neuropathy (most serious complication)'],
    ['Clinical Activity Score (CAS) to assess inflammatory activity', 'Thyroid function tests (TSH, free T4, T3)', 'TSH receptor antibodies', 'CT orbits (enlarged extraocular muscles with tendon sparing)', 'MRI orbits (muscle edema = active inflammation)', 'Visual acuity, color vision, visual fields (optic neuropathy assessment)', 'Hertel exophthalmometry'],
    'Active inflammatory phase: smoking cessation (critical), selenium supplementation, IV methylprednisolone pulse therapy (EUGOGO protocol), orbital radiation for moderate-severe active disease. Teprotumumab (IGF-1R inhibitor) for active moderate-to-severe TED. Compressive optic neuropathy: IV steroids + urgent orbital decompression. Stable phase: rehabilitative surgery in sequence: orbital decompression → strabismus surgery → lid surgery.',
    'Self-limited inflammatory phase (12-24 months) followed by stable fibrotic phase. Teprotumumab has shown significant improvement in proptosis and diplopia. Compressive optic neuropathy occurs in ~5% and requires urgent intervention. Smoking is the strongest modifiable risk factor for progression. Most patients achieve functional improvement with appropriate staged management.',
  ),

  'dacryocystitis': oph(
    'dacryocystitis', 'Dacryocystitis',
    'oculoplastics', 'H04.3',
    'Infection of the lacrimal sac due to nasolacrimal duct obstruction (NLDO). Acute form presents with painful medial canthal swelling; chronic form with persistent tearing and mucoid discharge.',
    ['Painful, erythematous swelling at medial canthus (below medial canthal tendon)', 'Epiphora (tearing)', 'Mucopurulent discharge expressed from puncta with pressure over sac', 'May point and drain cutaneously (fistula)', 'Congenital NLDO: tearing and discharge from birth', 'Fever if severe'],
    ['Clinical examination (classic location inferior to medial canthal tendon)', 'Culture of expressed material', 'CT orbits/sinuses if orbital extension or abscess suspected', 'Dacryocystography or lacrimal scintigraphy (chronic, for surgical planning)', 'Probing and irrigation of lacrimal system (not in acute infection)'],
    'Acute: warm compresses, oral antibiotics (amoxicillin-clavulanate or clindamycin), incision and drainage if pointing abscess. IV antibiotics if orbital extension. Definitive treatment: dacryocystorhinostomy (DCR) after acute inflammation resolves (external or endoscopic, >90% success). Congenital NLDO: conservative management (massage, topical antibiotics) for first year; probing if persistent beyond 12 months.',
    'Acute dacryocystitis resolves with antibiotics but recurs without definitive surgery. DCR success rate >90-95%. Congenital NLDO resolves spontaneously in ~90% by age 12 months. Complications of untreated acute dacryocystitis include orbital cellulitis, fistula formation, and lacrimal sac mucocele.',
  ),

  // ---- Oncologic (2) --------------------------------------------------------

  'retinoblastoma': oph(
    'retinoblastoma', 'Retinoblastoma',
    'oncologic', 'C69.2',
    'Most common primary intraocular malignancy of childhood, arising from immature retinal cells. Heritable (40%, bilateral, germline RB1 mutation) or sporadic (60%, unilateral). Presents typically before age 3.',
    ['Leukocoria (white pupillary reflex, most common presenting sign)', 'Strabismus (second most common)', 'White or cream-colored retinal mass (endophytic or exophytic)', 'Vitreous seeding', 'Anterior chamber pseudohypopyon (tumor cells)', 'Secondary glaucoma', 'Orbital inflammation (advanced, mimics cellulitis)', 'Rarely: hyphema, heterochromia'],
    ['Dilated fundus exam under anesthesia (EUA)', 'B-scan ultrasonography (calcification is characteristic)', 'MRI orbits and brain (extent, optic nerve involvement, trilateral retinoblastoma with pinealoblastoma)', 'Avoid CT in heritable form (radiation sensitivity)', 'Genetic testing (RB1 gene)', 'No biopsy (risk of extraocular seeding)', 'Staging: International Classification of Retinoblastoma (ICRB groups A-E)'],
    'Globe salvage when possible: intra-arterial chemotherapy (ophthalmic artery chemosurgery with melphalan), intravitreal chemotherapy (melphalan, topotecan) for vitreous seeds, systemic chemoreduction (carboplatin, etoposide, vincristine) + focal consolidation (laser, cryotherapy). Enucleation for advanced unilateral disease (group E) or failed salvage. External beam radiation avoided due to secondary malignancy risk. Genetic counseling essential.',
    'Excellent survival in developed countries (>95%). Globe salvage rates improving with intra-arterial and intravitreal chemotherapy. Bilateral heritable form has increased lifetime risk of secondary malignancies (osteosarcoma, soft tissue sarcomas). Metastatic disease (optic nerve, CNS, systemic) carries poor prognosis. Screening of siblings and offspring essential.',
  ),

  'ocular-melanoma': oph(
    'ocular-melanoma', 'Uveal Melanoma (Choroidal / Ciliary Body / Iris)',
    'oncologic', 'C69.3',
    'Most common primary intraocular malignancy in adults. Arises from melanocytes of the uveal tract, most commonly choroid (90%). Hematogenous metastasis primarily to liver. BAP1 and other genetic markers determine prognosis.',
    ['Often asymptomatic (incidental finding)', 'Blurred vision, visual field loss, photopsia', 'Dome-shaped or mushroom-shaped pigmented choroidal mass', 'Orange lipofuscin pigment on tumor surface', 'Associated subretinal fluid', 'Sentinel vessels (episcleral)', 'Iris melanoma: visible pigmented iris mass, corectopia'],
    ['Dilated fundus exam', 'B-scan ultrasonography (low-medium internal reflectivity, acoustic hollowing, collar-button shape)', 'Fluorescein and ICG angiography (double circulation pattern)', 'OCT (subretinal fluid, tumor surface features)', 'Ultrasound biomicroscopy (ciliary body tumors)', 'Systemic workup: LFTs, chest X-ray or CT, liver imaging (MRI preferred)', 'Fine needle aspiration biopsy for prognostic genetic testing (GEP, chromosome 3 monosomy, BAP1)'],
    'Small tumors: observation vs treatment based on growth risk factors (TFSOM-DIM mnemonic). Medium tumors: plaque brachytherapy (I-125 or Ru-106) is standard. Large tumors: enucleation. Proton beam radiotherapy as alternative. Transpupillary thermotherapy (TTT) adjunct. Metastatic surveillance lifelong (liver imaging every 6-12 months). Emerging: neoadjuvant/adjuvant immunotherapy and targeted therapy for high-risk tumors.',
    'Local tumor control >95% with plaque brachytherapy. Five-year survival ~80% overall. Chromosome 3 monosomy and BAP1 loss confer ~50% 5-year metastatic mortality. Class 2 GEP profile: ~70% metastatic rate at 5 years. Liver metastasis median survival ~6-12 months. No adjuvant therapy proven to prevent metastasis to date, though clinical trials ongoing.',
  ),

  // ---- Additional Conditions (3) --------------------------------------------

  'herpes-simplex-keratitis': oph(
    'herpes-simplex-keratitis', 'Herpes Simplex Keratitis',
    'infectious', 'H19.1',
    'HSV-1 infection of the cornea. Most common infectious cause of corneal blindness in developed countries. Forms: epithelial (dendritic/geographic ulcer), stromal (immune-mediated or necrotizing), and endothelitis.',
    ['Unilateral pain, photophobia, tearing, decreased vision', 'Classic dendritic ulcer with terminal bulbs on fluorescein staining', 'Geographic ulcer (coalescent dendrites)', 'Decreased corneal sensation (pathognomonic)', 'Stromal haze or neovascularization (stromal keratitis)', 'Keratic precipitates, anterior chamber reaction', 'Wessely immune ring (stromal)'],
    ['Slit-lamp examination with fluorescein and rose bengal staining', 'Corneal sensation testing (cotton wisp or Cochet-Bonnet esthesiometer)', 'Clinical diagnosis usually sufficient', 'PCR of corneal scraping if atypical', 'Confocal microscopy'],
    'Epithelial: topical antivirals (ganciclovir 0.15% gel or trifluridine 1%) for 2-3 weeks. Oral valacyclovir 500 mg TID as alternative. Stromal immune keratitis: topical corticosteroid with antiviral cover. Oral acyclovir/valacyclovir prophylaxis (400 mg/800 mg BID) reduces recurrence by 50% (HEDS trial). Avoid topical steroids in epithelial disease. Corneal transplant for severe scarring.',
    'Epithelial keratitis: >95% resolve with treatment. Stromal keratitis: risk of scarring and recurrence; ~25% recurrence rate per year without prophylaxis. Long-term antiviral prophylaxis significantly reduces recurrence. Multiple recurrences lead to progressive corneal scarring and neovascularization.',
  ),

  'central-serous-chorioretinopathy': oph(
    'central-serous-chorioretinopathy', 'Central Serous Chorioretinopathy (CSC)',
    'posterior-segment', 'H35.7',
    'Idiopathic serous detachment of the neurosensory retina at the macula due to focal RPE leak. Classically affects young males (30-50), associated with Type A personality, stress, and corticosteroid use.',
    ['Unilateral blurred or dim central vision', 'Metamorphopsia, micropsia, relative scotoma', 'Hyperopic shift', 'Well-circumscribed dome-shaped serous retinal detachment at macula', 'PED (pigment epithelial detachment) may be present', 'Positive Amsler grid'],
    ['OCT (subretinal fluid, PED, hyperreflective subretinal deposits in chronic)', 'Fluorescein angiography (classic smokestack or inkblot leak pattern)', 'ICG angiography (choroidal hyperpermeability, helpful in chronic CSC)', 'Fundus autofluorescence (gravitational tracks in chronic CSC)'],
    'Acute: observation for 3-6 months (>80% self-resolve). Discontinue exogenous corticosteroids if possible. Chronic or recurrent (>4-6 months): half-dose verteporfin photodynamic therapy (PDT), subthreshold micropulse laser, oral mineralocorticoid receptor antagonists (eplerenone, off-label). Thermal laser for extrafoveal leaks.',
    'Acute: excellent, >90% resolve spontaneously within 3-6 months with good visual recovery. Chronic: progressive RPE atrophy and photoreceptor damage lead to permanent vision loss. Recurrence rate ~30-50%. Chronic CSC can mimic AMD and requires long-term monitoring.',
  ),

  'retinitis-pigmentosa': oph(
    'retinitis-pigmentosa', 'Retinitis Pigmentosa (RP)',
    'posterior-segment', 'H35.5',
    'Group of inherited retinal dystrophies characterized by progressive rod-cone photoreceptor degeneration. Inheritance: autosomal dominant (least severe), autosomal recessive, X-linked (most severe), mitochondrial.',
    ['Night blindness (nyctalopia, often earliest symptom)', 'Progressive constriction of peripheral visual field (tunnel vision)', 'Bone-spicule pigmentation in mid-peripheral retina', 'Attenuated retinal arterioles', 'Waxy pallor of optic disc', 'Posterior subcapsular cataract', 'CME (cystoid macular edema, 10-20%)'],
    ['Electroretinography (ERG): markedly reduced or extinguished rod responses', 'Humphrey or Goldmann visual field (ring scotoma, progressive constriction)', 'OCT (outer retinal layer disruption, CME)', 'Fundus autofluorescence (hyperautofluorescent ring delineating preserved retina)', 'Genetic testing (>80 associated genes, RPE65, RPGR most common)', 'Dark adaptation testing'],
    'No cure for most forms. Vitamin A palmitate 15,000 IU/day may slow ERG decline (debated). DHA supplementation. RPE65-associated RP: voretigene neparvovec (Luxturna) gene therapy (FDA-approved). Treat CME with topical or oral carbonic anhydrase inhibitors. Low vision rehabilitation, orientation and mobility training. Retinal prosthesis (Argus II, limited availability). Emerging: gene therapy, optogenetics, stem cell therapy in clinical trials.',
    'Progressive over decades. Rate of progression varies by genotype: autosomal dominant slowest, X-linked fastest. Most patients legally blind by age 40-60. Central vision often preserved until late stages. Gene therapy (Luxturna) for RPE65 mutations has shown sustained improvement in functional vision. Genetic counseling essential for family planning.',
  ),
};

// ---------------------------------------------------------------------------
// Utility functions
// ---------------------------------------------------------------------------

/** Get a single condition by ID. */
export function getOphthalmologyCondition(id: string): OphthalmologyConditionEntry | undefined {
  return OPHTHALMOLOGY_CONDITION_ENTRIES[id];
}

/** Search conditions by name, category, or any text field (case-insensitive). */
export function searchOphthalmologyConditions(query: string): OphthalmologyConditionEntry[] {
  const q = query.toLowerCase();
  return Object.values(OPHTHALMOLOGY_CONDITION_ENTRIES).filter(c =>
    c.name.toLowerCase().includes(q) ||
    c.category.toLowerCase().includes(q) ||
    c.description.toLowerCase().includes(q) ||
    c.treatment.toLowerCase().includes(q) ||
    c.prognosis.toLowerCase().includes(q),
  );
}

/** Filter conditions by category. */
export function getOphthalmologyByCategory(category: OphthalmologyConditionCategory): OphthalmologyConditionEntry[] {
  return Object.values(OPHTHALMOLOGY_CONDITION_ENTRIES).filter(c => c.category === category);
}

/** Return the total number of ophthalmology conditions in the database. */
export function getOphthalmologyConditionCount(): number {
  return Object.keys(OPHTHALMOLOGY_CONDITION_ENTRIES).length;
}

/** Get all conditions matching a clinical finding keyword (case-insensitive). */
export function getOphthalmologyByClinicalFinding(finding: string): OphthalmologyConditionEntry[] {
  const f = finding.toLowerCase();
  return Object.values(OPHTHALMOLOGY_CONDITION_ENTRIES).filter(c =>
    c.clinicalFindings.some(cf => cf.toLowerCase().includes(f)),
  );
}

/** Get all unique categories present in the database. */
export function getOphthalmologyCategories(): OphthalmologyConditionCategory[] {
  return [...new Set(Object.values(OPHTHALMOLOGY_CONDITION_ENTRIES).map(c => c.category))];
}
