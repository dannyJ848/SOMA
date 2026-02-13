/**
 * Ophthalmology Conditions Database
 *
 * Comprehensive reference of ophthalmology conditions with
 * clinical summaries, patient education, and bilingual support.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type OphthoCategory =
  | 'glaucoma'
  | 'lens'
  | 'retina'
  | 'conjunctiva'
  | 'emergency';

export interface OphthoConditionEntry {
  id: string;
  name: string;
  nameEs: string;
  category: OphthoCategory;
  icd11: string;
  description: string;
  descriptionEs: string;
  riskFactors: string[];
  pathophysiology: string;
  pathophysiologyEs: string;
  symptoms: string[];
  diagnostics: {
    tests: string[];
    imaging: string[];
    criteria: string[];
  };
  treatment: {
    medications: string[];
    procedures: string[];
    lifestyle: string[];
  };
  emergencySigns: string[];
  patientExplanation: string;
  patientExplanationEs: string;
}

// ---------------------------------------------------------------------------
// Database
// ---------------------------------------------------------------------------

export const OPHTHO_CONDITIONS: Record<string, OphthoConditionEntry> = {
  'open-angle-glaucoma': {
    id: 'open-angle-glaucoma',
    name: 'Glaucoma (Open-Angle)',
    nameEs: 'Glaucoma de Ángulo Abierto',
    category: 'glaucoma',
    icd11: '9C61.0',
    description: 'Progressive optic neuropathy characterized by elevated intraocular pressure causing gradual peripheral vision loss. Most common form of glaucoma, often asymptomatic until advanced stages.',
    descriptionEs: 'Neuropatía óptica progresiva caracterizada por presión intraocular elevada que causa pérdida gradual de visión periférica. Forma más común de glaucoma, a menudo asintomática hasta etapas avanzadas.',
    riskFactors: ['Age >60 years', 'African ancestry', 'Family history', 'High intraocular pressure', 'Thin corneas', 'Diabetes', 'Myopia', 'Hypertension'],
    pathophysiology: 'Impaired aqueous humor drainage through trabecular meshwork increases intraocular pressure (IOP). Elevated IOP causes mechanical stress and vascular insufficiency at the optic nerve head, leading to retinal ganglion cell death and progressive optic disc cupping.',
    pathophysiologyEs: 'El drenaje deteriorado del humor acuoso a través de la malla trabecular aumenta la presión intraocular. La presión elevada causa estrés mecánico e insuficiencia vascular en la cabeza del nervio óptico, llevando a muerte de células ganglionares y excavación progresiva del disco óptico.',
    symptoms: ['Gradual peripheral vision loss (tunnel vision)', 'No pain or redness', 'Difficulty with night driving', 'Bumping into objects', 'Late stage: central vision loss'],
    diagnostics: {
      tests: ['Tonometry (IOP measurement)', 'Visual field testing (perimetry)', 'Gonioscopy (angle assessment)', 'Pachymetry (corneal thickness)'],
      imaging: ['Optical coherence tomography (OCT) of optic nerve', 'Fundoscopy (optic disc cupping, cup-to-disc ratio >0.6)', 'Optic nerve head photography'],
      criteria: ['IOP >21 mmHg (but can occur with normal IOP)', 'Open anterior chamber angle on gonioscopy', 'Glaucomatous optic neuropathy', 'Visual field defects consistent with glaucoma'],
    },
    treatment: {
      medications: ['Prostaglandin analogs (latanoprost, bimatoprost) - first-line', 'Beta-blockers (timolol)', 'Alpha agonists (brimonidine)', 'Carbonic anhydrase inhibitors (dorzolamide, acetazolamide)', 'Combination drops as needed'],
      procedures: ['Selective laser trabeculoplasty (SLT)', 'Argon laser trabeculoplasty (ALT)', 'Trabeculectomy (surgical filtration)', 'Tube shunt implantation', 'Minimally invasive glaucoma surgery (MIGS)'],
      lifestyle: ['Regular ophthalmology follow-up every 3-6 months', 'Medication adherence', 'Avoid steroids', 'Maintain healthy blood pressure', 'Moderate exercise'],
    },
    emergencySigns: ['Sudden severe eye pain (suggests angle closure)', 'Rapid vision loss', 'Eye redness with halos around lights', 'Nausea and vomiting with eye pain'],
    patientExplanation: 'Open-angle glaucoma is like a slow drain clog in your eye. Fluid builds up gradually, increasing pressure that damages the optic nerve over months to years. You typically will not notice symptoms until significant damage has occurred, which is why regular eye exams are critical. Eye drops lower the pressure and can prevent further vision loss, but cannot restore what is already lost. Think of it as preventing a dam from overflowing rather than fixing the flood damage.',
    patientExplanationEs: 'El glaucoma de ángulo abierto es como un drenaje lento obstruido en su ojo. El líquido se acumula gradualmente, aumentando la presión que daña el nervio óptico durante meses o años. Típicamente no notará síntomas hasta que haya ocurrido daño significativo, por eso los exámenes oculares regulares son críticos. Las gotas oculares reducen la presión y pueden prevenir más pérdida de visión, pero no pueden restaurar lo ya perdido.',
  },

  'cataracts': {
    id: 'cataracts',
    name: 'Cataracts',
    nameEs: 'Cataratas',
    category: 'lens',
    icd11: '9B10',
    description: 'Progressive clouding of the eye lens causing gradual vision impairment. Most common cause of reversible blindness worldwide, typically age-related.',
    descriptionEs: 'Opacificación progresiva del cristalino del ojo que causa deterioro gradual de la visión. Causa más común de ceguera reversible mundialmente, típicamente relacionada con la edad.',
    riskFactors: ['Age >60 years', 'UV light exposure', 'Smoking', 'Diabetes', 'Prolonged corticosteroid use', 'Eye trauma', 'Family history', 'Alcohol use'],
    pathophysiology: 'Oxidative stress, UV damage, and glycosylation of lens proteins cause denaturation and aggregation of crystallin proteins. The normally transparent lens becomes opaque, scattering light and reducing visual acuity. Nuclear, cortical, and posterior subcapsular variants have distinct pathophysiology.',
    pathophysiologyEs: 'El estrés oxidativo, daño UV y glicosilación de proteínas del cristalino causan desnaturalización y agregación de proteínas cristalinas. El cristalino normalmente transparente se vuelve opaco, dispersando la luz y reduciendo la agudeza visual.',
    symptoms: ['Blurred or cloudy vision', 'Glare and halos around lights', 'Difficulty with night driving', 'Frequent prescription changes', 'Faded color perception', 'Double vision in one eye'],
    diagnostics: {
      tests: ['Visual acuity testing', 'Contrast sensitivity testing', 'Glare testing'],
      imaging: ['Slit-lamp examination (lens opacity)', 'Dilated fundoscopy', 'Optical biometry (for IOL calculation pre-surgery)'],
      criteria: ['Lens opacity visible on slit-lamp', 'Visual symptoms consistent with cataract location', 'Reduced visual acuity not correctable with refraction'],
    },
    treatment: {
      medications: ['No medications reverse cataracts', 'Dilating drops for surgical planning', 'Topical antibiotics and steroids post-surgery'],
      procedures: ['Phacoemulsification with IOL implantation (definitive)', 'Extracapsular cataract extraction (large/dense cataracts)', 'Femtosecond laser-assisted surgery', 'YAG laser capsulotomy (for posterior capsule opacification)'],
      lifestyle: ['UV protection (sunglasses)', 'Smoking cessation', 'Glycemic control in diabetics', 'Updated eyeglass prescription until surgery', 'Adequate lighting for reading'],
    },
    emergencySigns: ['Sudden vision loss (suggests retinal detachment or other complication)', 'Severe eye pain post-surgery', 'Increasing redness or discharge post-surgery', 'Flashes and floaters (retinal concern)'],
    patientExplanation: 'Cataracts are like looking through a foggy window that gets cloudier over time. The lens inside your eye, which should be clear, becomes cloudy due to protein changes with aging. Surgery is highly successful—the cloudy lens is removed and replaced with a clear artificial lens. Most people notice dramatically improved vision within days. Cataracts are very common and surgery is one of the safest and most effective procedures in medicine.',
    patientExplanationEs: 'Las cataratas son como mirar a través de una ventana empañada que se vuelve más turbia con el tiempo. El cristalino dentro de su ojo, que debería ser transparente, se vuelve opaco debido a cambios proteicos con el envejecimiento. La cirugía es muy exitosa: se remueve el cristalino opaco y se reemplaza con un lente artificial transparente. La mayoría de las personas notan visión dramáticamente mejorada en días.',
  },

  'amd': {
    id: 'amd',
    name: 'Age-Related Macular Degeneration',
    nameEs: 'Degeneración Macular Relacionada con la Edad',
    category: 'retina',
    icd11: '9B75',
    description: 'Progressive degeneration of the macula causing central vision loss. Leading cause of irreversible vision loss in adults over 60 in developed countries. Exists in dry (atrophic) and wet (neovascular) forms.',
    descriptionEs: 'Degeneración progresiva de la mácula que causa pérdida de visión central. Causa principal de pérdida de visión irreversible en adultos mayores de 60 años en países desarrollados. Existe en formas seca (atrófica) y húmeda (neovascular).',
    riskFactors: ['Age >60 years', 'Smoking (strongest modifiable risk)', 'Family history', 'Caucasian race', 'Hypertension', 'Obesity', 'High-fat diet', 'Prolonged sun exposure'],
    pathophysiology: 'Dry AMD: Accumulation of drusen (lipid deposits) beneath retinal pigment epithelium causes RPE dysfunction and photoreceptor death in the macula. Wet AMD: VEGF overproduction stimulates abnormal choroidal neovascularization, which leaks fluid and blood, causing rapid macular damage and scarring.',
    pathophysiologyEs: 'AMD seca: Acumulación de drusas (depósitos lipídicos) bajo el epitelio pigmentario retiniano causa disfunción del EPR y muerte de fotorreceptores en la mácula. AMD húmeda: Sobreproducción de VEGF estimula neovascularización coroidea anormal que filtra fluido y sangre, causando daño macular rápido.',
    symptoms: ['Blurred central vision', 'Distorted vision (straight lines appear wavy)', 'Dark or empty area in center of vision', 'Difficulty recognizing faces', 'Need for brighter light when reading', 'Wet AMD: sudden vision loss'],
    diagnostics: {
      tests: ['Amsler grid testing (metamorphopsia)', 'Visual acuity testing', 'Color vision testing'],
      imaging: ['Optical coherence tomography (retinal thickness, fluid, drusen)', 'Fundoscopy (drusen, pigmentary changes, hemorrhage)', 'Fluorescein angiography (neovascularization in wet AMD)', 'OCT angiography'],
      criteria: ['Drusen >63 microns (intermediate AMD)', 'Geographic atrophy (advanced dry AMD)', 'Choroidal neovascularization (wet AMD)', 'Subretinal or intraretinal fluid on OCT'],
    },
    treatment: {
      medications: ['AREDS2 vitamins (vitamins C, E, zinc, copper, lutein, zeaxanthin) for intermediate/advanced dry AMD', 'Anti-VEGF injections for wet AMD: ranibizumab, aflibercept, bevacizumab', 'Intravitreal injections every 4-8 weeks initially'],
      procedures: ['Intravitreal anti-VEGF injections (wet AMD)', 'Photodynamic therapy (PDT) - rarely used', 'Laser photocoagulation (extrafoveal lesions only)'],
      lifestyle: ['Smoking cessation (most important)', 'Mediterranean diet rich in leafy greens and fish', 'UV protection', 'Blood pressure and lipid control', 'Low vision aids (magnifiers, large print)', 'Home Amsler grid monitoring'],
    },
    emergencySigns: ['Sudden central vision loss', 'Sudden increase in distortion', 'New dark spot in central vision', 'Suggests conversion to wet AMD—urgent ophthalmology evaluation within 24-48 hours'],
    patientExplanation: 'Age-related macular degeneration affects the center of your retina, the part responsible for sharp central vision needed for reading and recognizing faces. The dry form progresses slowly with deposits under the retina. The wet form involves abnormal blood vessels that leak, causing rapid vision loss. While there is no cure for dry AMD, vitamins can slow progression. Wet AMD can often be stabilized with regular eye injections that block abnormal blood vessel growth. Early detection is key—report any new distortion or vision changes immediately.',
    patientExplanationEs: 'La degeneración macular relacionada con la edad afecta el centro de su retina, la parte responsable de la visión central nítida necesaria para leer y reconocer caras. La forma seca progresa lentamente con depósitos bajo la retina. La forma húmeda involucra vasos sanguíneos anormales que filtran, causando pérdida rápida de visión. Aunque no hay cura para AMD seca, las vitaminas pueden desacelerar la progresión. La AMD húmeda a menudo puede estabilizarse con inyecciones oculares regulares.',
  },

  'diabetic-retinopathy': {
    id: 'diabetic-retinopathy',
    name: 'Diabetic Retinopathy',
    nameEs: 'Retinopatía Diabética',
    category: 'retina',
    icd11: '9B71.0',
    description: 'Microvascular complication of diabetes causing retinal damage and vision loss. Leading cause of blindness in working-age adults. Severity ranges from mild nonproliferative to proliferative with neovascularization.',
    descriptionEs: 'Complicación microvascular de la diabetes que causa daño retiniano y pérdida de visión. Causa principal de ceguera en adultos en edad laboral. La severidad varía desde no proliferativa leve hasta proliferativa con neovascularización.',
    riskFactors: ['Duration of diabetes', 'Poor glycemic control (high HbA1c)', 'Hypertension', 'Hyperlipidemia', 'Pregnancy', 'Diabetic nephropathy', 'Smoking'],
    pathophysiology: 'Chronic hyperglycemia causes pericyte loss, basement membrane thickening, and endothelial dysfunction in retinal capillaries. Early stages show microaneurysms, hemorrhages, and exudates. Advanced stages involve retinal ischemia triggering VEGF release, causing neovascularization (proliferative DR) and fibrovascular proliferation leading to vitreous hemorrhage and tractional retinal detachment.',
    pathophysiologyEs: 'La hiperglucemia crónica causa pérdida de pericitos, engrosamiento de membrana basal y disfunción endotelial en capilares retinianos. Etapas tempranas muestran microaneurismas, hemorragias y exudados. Etapas avanzadas involucran isquemia retiniana que desencadena liberación de VEGF, causando neovascularización y proliferación fibrovascular llevando a hemorragia vítrea y desprendimiento de retina traccional.',
    symptoms: ['Often asymptomatic in early stages', 'Blurred vision', 'Floaters (blood in vitreous)', 'Dark or empty areas in vision', 'Difficulty with color perception', 'Sudden vision loss (vitreous hemorrhage or retinal detachment)'],
    diagnostics: {
      tests: ['Visual acuity testing', 'Dilated fundoscopic examination', 'HbA1c monitoring'],
      imaging: ['Optical coherence tomography (macular edema, retinal thickness)', 'Fundus photography (7-field standard)', 'Fluorescein angiography (ischemia, neovascularization, leakage)', 'OCT angiography'],
      criteria: ['Microaneurysms (earliest sign)', 'Retinal hemorrhages (dot-blot, flame-shaped)', 'Hard exudates', 'Cotton-wool spots', 'Venous beading and IRMA (intraretinal microvascular abnormalities)', 'Neovascularization of disc or elsewhere (PDR)'],
    },
    treatment: {
      medications: ['Intravitreal anti-VEGF injections for macular edema: ranibizumab, aflibercept', 'Intravitreal corticosteroids (dexamethasone implant) for persistent macular edema', 'Systemic: optimize glycemic control, blood pressure, lipids'],
      procedures: ['Pan-retinal photocoagulation (PRP) for proliferative DR', 'Focal/grid laser for macular edema', 'Vitrectomy for vitreous hemorrhage or tractional detachment', 'Anti-VEGF injections before vitrectomy'],
      lifestyle: ['Strict glycemic control (HbA1c <7%)', 'Blood pressure control (<140/90)', 'Annual dilated eye exams (more frequent if retinopathy present)', 'Lipid management', 'Smoking cessation', 'Pregnancy planning with ophthalmology follow-up'],
    },
    emergencySigns: ['Sudden vision loss (vitreous hemorrhage)', 'Sudden increase in floaters', 'Curtain or shadow across vision (retinal detachment)', 'Severe eye pain with vision loss'],
    patientExplanation: 'Diabetic retinopathy occurs when high blood sugar damages the tiny blood vessels in your retina. Early on, vessels leak fluid and bleed slightly, often without symptoms. In advanced stages, your eye grows abnormal new vessels that are fragile and can cause serious bleeding or retinal detachment. The best prevention is tight blood sugar control. Regular eye exams can catch changes before you notice symptoms. Treatments like laser or injections can preserve vision, but they work best when started early.',
    patientExplanationEs: 'La retinopatía diabética ocurre cuando el azúcar alta en sangre daña los vasos sanguíneos diminutos en su retina. Tempranamente, los vasos filtran fluido y sangran levemente, a menudo sin síntomas. En etapas avanzadas, su ojo desarrolla vasos nuevos anormales que son frágiles y pueden causar sangrado serio o desprendimiento de retina. La mejor prevención es control estricto de azúcar en sangre. Los exámenes oculares regulares pueden detectar cambios antes de que note síntomas.',
  },

  'conjunctivitis': {
    id: 'conjunctivitis',
    name: 'Conjunctivitis (Bacterial/Viral/Allergic)',
    nameEs: 'Conjuntivitis (Bacteriana/Viral/Alérgica)',
    category: 'conjunctiva',
    icd11: '9A60',
    description: 'Inflammation of the conjunctiva causing red, irritated eyes. Bacterial and viral forms are highly contagious. Allergic conjunctivitis is non-infectious and associated with other atopic conditions.',
    descriptionEs: 'Inflamación de la conjuntiva que causa ojos rojos e irritados. Las formas bacteriana y viral son altamente contagiosas. La conjuntivitis alérgica es no infecciosa y está asociada con otras condiciones atópicas.',
    riskFactors: ['Contact lens wear', 'Recent upper respiratory infection (viral)', 'Exposure to infected individuals', 'Allergies (seasonal/perennial)', 'Dry eye disease', 'Immunocompromised state'],
    pathophysiology: 'Bacterial: Direct infection of conjunctiva by bacteria (Staph aureus, Strep pneumoniae, H. influenzae). Viral: Most commonly adenovirus causing epithelial inflammation and immune response. Allergic: Type I hypersensitivity with mast cell degranulation releasing histamine and inflammatory mediators in response to allergens.',
    pathophysiologyEs: 'Bacteriana: Infección directa de la conjuntiva por bacterias. Viral: Más comúnmente adenovirus causando inflamación epitelial y respuesta inmune. Alérgica: Hipersensibilidad tipo I con degranulación de mastocitos liberando histamina y mediadores inflamatorios en respuesta a alérgenos.',
    symptoms: ['Bacterial: purulent yellow-green discharge, matted eyelids in morning, unilateral or bilateral', 'Viral: watery discharge, preauricular lymphadenopathy, often bilateral, may have URI symptoms', 'Allergic: itching (hallmark), watery discharge, bilateral, seasonal pattern', 'All types: redness, foreign body sensation, photophobia'],
    diagnostics: {
      tests: ['Clinical diagnosis based on history and examination', 'Conjunctival cultures (severe, recurrent, or neonatal cases)', 'Gram stain if bacterial suspected'],
      imaging: ['Typically not required', 'Fluorescein staining to rule out corneal involvement'],
      criteria: ['Conjunctival injection (redness)', 'Discharge (purulent, watery, or mucoid)', 'Absence of vision loss', 'Absence of severe pain', 'No corneal involvement on fluorescein staining'],
    },
    treatment: {
      medications: ['Bacterial: topical antibiotics (erythromycin, fluoroquinolones, trimethoprim-polymyxin)', 'Viral: supportive care, cold compresses, artificial tears (usually self-limited in 1-3 weeks)', 'Allergic: antihistamine drops (olopatadine, ketotifen), mast cell stabilizers, oral antihistamines, topical steroids if severe'],
      procedures: ['Warm compresses and lid hygiene for bacterial', 'Cold compresses for viral and allergic', 'Eyelid scrubs', 'Rarely: debridement of pseudomembranes in severe viral cases'],
      lifestyle: ['Frequent handwashing', 'Avoid touching eyes', 'Do not share towels, pillowcases, eye makeup', 'Discard contact lenses and cases during infection', 'Avoid allergen exposure (allergic type)', 'Stay home from work/school until discharge resolves (infectious types)'],
    },
    emergencySigns: ['Severe eye pain', 'Vision changes', 'Pupil abnormalities', 'Corneal opacity', 'No improvement after 3-5 days of treatment', 'Neonatal conjunctivitis (urgent evaluation for gonococcal infection)'],
    patientExplanation: 'Conjunctivitis, or pink eye, is inflammation of the clear membrane covering the white of your eye. Bacterial pink eye produces thick yellow-green discharge and responds to antibiotic drops. Viral pink eye is like a cold in your eye—watery discharge, very contagious, but typically resolves on its own in 1-3 weeks. Allergic conjunctivitis causes intense itching and is not contagious, responding well to allergy drops. Good hygiene prevents spread of infectious types. See a doctor if you have pain, vision changes, or no improvement within a few days.',
    patientExplanationEs: 'La conjuntivitis, u ojo rosado, es inflamación de la membrana transparente que cubre la parte blanca de su ojo. La conjuntivitis bacteriana produce secreción amarillo-verde espesa y responde a gotas antibióticas. La conjuntivitis viral es como un resfriado en su ojo: secreción acuosa, muy contagiosa, pero típicamente se resuelve sola en 1-3 semanas. La conjuntivitis alérgica causa picazón intensa y no es contagiosa. La buena higiene previene la propagación de tipos infecciosos.',
  },

  'retinal-detachment': {
    id: 'retinal-detachment',
    name: 'Retinal Detachment',
    nameEs: 'Desprendimiento de Retina',
    category: 'emergency',
    icd11: '9B73',
    description: 'Separation of the neurosensory retina from the underlying retinal pigment epithelium. Sight-threatening emergency requiring urgent surgical intervention to prevent permanent vision loss.',
    descriptionEs: 'Separación de la retina neurosensorial del epitelio pigmentario retiniano subyacente. Emergencia que amenaza la vista requiriendo intervención quirúrgica urgente para prevenir pérdida de visión permanente.',
    riskFactors: ['High myopia (nearsightedness)', 'Previous eye surgery (especially cataract)', 'Eye trauma', 'Family history', 'Lattice degeneration', 'Previous retinal detachment in other eye', 'Posterior vitreous detachment'],
    pathophysiology: 'Rhegmatogenous (most common): Retinal tear or hole allows vitreous fluid to seep under the retina, separating it from RPE. Photoreceptors lose blood supply and nutrient support from choroid. Tractional: Fibrovascular membranes pull retina away (diabetic retinopathy, sickle cell). Exudative: Fluid accumulation without tear (inflammation, tumors).',
    pathophysiologyEs: 'Regmatógeno (más común): Desgarro o agujero retiniano permite que el fluido vítreo se filtre bajo la retina, separándola del EPR. Los fotorreceptores pierden suministro sanguíneo y soporte nutricional de la coroides. Traccional: Membranas fibrovasculares traccionan la retina. Exudativo: Acumulación de fluido sin desgarro.',
    symptoms: ['Sudden onset of floaters', 'Flashes of light (photopsia)', 'Shadow or curtain across visual field', 'Peripheral vision loss progressing centrally', 'Central vision loss if macula detaches', 'No pain'],
    diagnostics: {
      tests: ['Dilated fundoscopic examination', 'Slit-lamp biomicroscopy with indirect lens', 'Intraocular pressure (may be lower in affected eye)'],
      imaging: ['B-scan ultrasonography (if view obscured by hemorrhage or cataract)', 'Optical coherence tomography (evaluate macula status)', 'Wide-field fundus imaging'],
      criteria: ['Elevation of neurosensory retina', 'Retinal tear or hole (rhegmatogenous)', 'Corrugated or bullous retinal appearance', 'Shafer sign (pigmented cells in anterior vitreous)', 'Relative afferent pupillary defect if extensive'],
    },
    treatment: {
      medications: ['Topical cycloplegics (reduce pain and inflammation)', 'Postoperative antibiotics and steroids', 'Positioning instructions post-surgery (face-down or specific head position)'],
      procedures: ['Pneumatic retinopexy (small detachments, specific tear locations)', 'Scleral buckle (encircling band or segmental)', 'Pars plana vitrectomy with gas or silicone oil tamponade', 'Laser retinopexy or cryotherapy to seal tears', 'Same-day or next-day surgery for macula-on detachments'],
      lifestyle: ['Avoid strenuous activity and heavy lifting until cleared', 'Strict head positioning post-surgery (gas bubble)', 'No air travel with intraocular gas bubble', 'Regular follow-up', 'Prophylactic laser to fellow eye if high-risk features'],
    },
    emergencySigns: ['All retinal detachments are emergencies', 'Macula-on detachments require surgery within 24 hours', 'Macula-off detachments require surgery within days', 'Any sudden vision loss, floaters, flashes warrant immediate evaluation'],
    patientExplanation: 'Retinal detachment is when the light-sensing layer at the back of your eye pulls away from its support tissue, like wallpaper peeling off a wall. This is a true emergency. The retina cannot survive long without its blood supply. Warning signs are sudden flashes, a shower of floaters, or a shadow/curtain in your vision. If the central part (macula) is still attached, surgery within 24 hours gives the best chance of preserving excellent vision. Even if detached longer, surgery can often restore some vision. Never delay seeking care for these symptoms.',
    patientExplanationEs: 'El desprendimiento de retina es cuando la capa sensible a la luz en la parte posterior de su ojo se separa de su tejido de soporte, como papel tapiz despegándose de una pared. Esta es una verdadera emergencia. La retina no puede sobrevivir mucho tiempo sin su suministro sanguíneo. Las señales de advertencia son destellos repentinos, una lluvia de moscas volantes, o una sombra/cortina en su visión. Si la parte central (mácula) aún está adherida, la cirugía dentro de 24 horas da la mejor oportunidad de preservar excelente visión.',
  },
};

// ---------------------------------------------------------------------------
// Utility functions
// ---------------------------------------------------------------------------

/** Get a single condition by ID. */
export function getOphthoConditionById(id: string): OphthoConditionEntry | undefined {
  return OPHTHO_CONDITIONS[id];
}

/** Search conditions by name, category, or any text field (case-insensitive). */
export function searchOphthoConditions(query: string): OphthoConditionEntry[] {
  const q = query.toLowerCase();
  return Object.values(OPHTHO_CONDITIONS).filter(c =>
    c.name.toLowerCase().includes(q) ||
    c.nameEs.toLowerCase().includes(q) ||
    c.category.toLowerCase().includes(q) ||
    c.description.toLowerCase().includes(q) ||
    c.descriptionEs.toLowerCase().includes(q) ||
    c.pathophysiology.toLowerCase().includes(q) ||
    c.pathophysiologyEs.toLowerCase().includes(q) ||
    c.patientExplanation.toLowerCase().includes(q) ||
    c.patientExplanationEs.toLowerCase().includes(q),
  );
}

/** Filter conditions by category. */
export function getOphthoByCategory(category: OphthoCategory): OphthoConditionEntry[] {
  return Object.values(OPHTHO_CONDITIONS).filter(c => c.category === category);
}

/** Return the total number of ophthalmology conditions in the database. */
export function getOphthoConditionCount(): number {
  return Object.keys(OPHTHO_CONDITIONS).length;
}

/** Get all conditions with a specific risk factor (case-insensitive). */
export function getOphthoByRiskFactor(riskFactor: string): OphthoConditionEntry[] {
  const rf = riskFactor.toLowerCase();
  return Object.values(OPHTHO_CONDITIONS).filter(c =>
    c.riskFactors.some(r => r.toLowerCase().includes(rf)),
  );
}
