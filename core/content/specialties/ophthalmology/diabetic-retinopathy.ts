/**
 * Diabetic Retinopathy - Comprehensive Educational Content
 *
 * Covers pathophysiology, staging, screening, and treatment
 * of diabetic eye disease including macular edema.
 */

import { EducationalContent } from '../../types';

export const diabeticRetinopathy: EducationalContent = {
  id: 'condition-diabetic-retinopathy',
  type: 'condition',
  name: 'Diabetic Retinopathy',
  alternateNames: ['DR', 'Diabetic Eye Disease', 'Diabetic Macular Edema'],
  hpoId: 'HP:0000488',

  levels: {
    1: {
      level: 1,
      summary: 'Diabetic retinopathy is when high blood sugar damages the tiny blood vessels in your eyes over time, which can lead to vision loss if not caught and treated early.',
      explanation: `If you have diabetes, high blood sugar can damage the small blood vessels throughout your body - including in your eyes. This is called diabetic retinopathy.

**What Happens:**
- High blood sugar weakens tiny blood vessels in the retina
- Damaged vessels can leak blood and fluid
- New, abnormal blood vessels may grow (but they're fragile and cause problems)
- Over time, this can damage your vision

**Two Main Stages:**

**1. Early Stage (Non-Proliferative)**
- Blood vessels weaken and develop tiny bulges
- May leak small amounts
- Usually no symptoms at first!
- Can often be controlled with good diabetes management

**2. Advanced Stage (Proliferative)**
- New abnormal blood vessels grow
- These vessels are fragile and bleed easily
- Can cause sudden severe vision loss
- Scar tissue can pull on the retina
- Needs treatment to prevent blindness

**Diabetic Macular Edema (DME):**
- Swelling in the center of the retina
- Can happen at any stage
- Causes blurry central vision
- Very common cause of vision loss in diabetics

**Risk Factors:**
- How long you've had diabetes (biggest factor)
- Poor blood sugar control
- High blood pressure
- High cholesterol
- Pregnancy (can worsen DR temporarily)

**Prevention:**
- Control blood sugar (most important!)
- Control blood pressure
- Control cholesterol
- Get yearly dilated eye exams
- Don't smoke

**Treatment:**
- Laser treatment to seal leaking vessels
- Eye injections (anti-VEGF) for swelling
- Surgery for severe cases

**Key Message:**
You can have diabetic eye disease with NO SYMPTOMS. That's why regular eye exams are so important - don't wait until you notice a problem!`,
      keyTerms: [
        { term: 'diabetic retinopathy', definition: 'Damage to the retina caused by diabetes affecting blood vessels' },
        { term: 'retina', definition: 'The light-sensitive layer at the back of your eye' },
        { term: 'macular edema', definition: 'Swelling in the center of the retina that causes blurry vision' },
      ],
      analogies: [
        'Think of blood vessels like garden hoses. High blood sugar makes them weak and leaky, like an old hose that drips.',
        'New blood vessels in diabetic eye disease are like weeds - they grow where they shouldn\'t and cause problems.',
        'The macula swelling is like a sponge soaking up water - it gets puffy and can\'t work properly.',
      ],
      examples: [
        'Someone who has had diabetes for 20 years is very likely to have some diabetic eye changes.',
        'A diabetic patient seeing "floaters" or sudden vision loss needs emergency evaluation.',
        'A person with diabetes might not notice any vision changes but have significant retinopathy found on exam.',
      ],
    },
    2: {
      level: 2,
      summary: 'Diabetic retinopathy is a microvascular complication of diabetes characterized by progressive retinal vessel damage, classified as non-proliferative or proliferative, with diabetic macular edema as a vision-threatening component at any stage.',
      explanation: `Diabetic retinopathy is the leading cause of blindness in working-age adults in developed countries.

**Epidemiology:**
- Affects ~1/3 of diabetics
- Risk increases with duration: ~80% after 20 years of diabetes
- Type 1 and Type 2 both affected
- Vision-threatening DR in ~10% of diabetics

**Pathophysiology:**
1. Hyperglycemia damages vessel walls
2. Pericyte loss (supporting cells of capillaries)
3. Basement membrane thickening
4. Increased vascular permeability
5. Capillary occlusion and ischemia
6. VEGF release in response to ischemia
7. Neovascularization

**Classification:**

**Non-Proliferative DR (NPDR):**

*Mild NPDR:*
- Microaneurysms only
- Tiny outpouchings of vessel walls

*Moderate NPDR:*
- Microaneurysms plus other findings
- Dot-blot hemorrhages
- Hard exudates (lipid deposits)
- Cotton-wool spots (nerve fiber layer infarcts)

*Severe NPDR (4-2-1 Rule):*
- Hemorrhages in 4 quadrants, OR
- Venous beading in 2 quadrants, OR
- IRMA (intraretinal microvascular abnormalities) in 1 quadrant
- High risk for progression to PDR

**Proliferative DR (PDR):**
- Neovascularization (new vessel growth)
- NVD: Neovascularization at disc
- NVE: Neovascularization elsewhere
- High-risk PDR: NVD >1/4 disc area OR any NVD with vitreous hemorrhage OR NVE >1/2 disc area with vitreous hemorrhage

**Diabetic Macular Edema (DME):**
- Can occur at any DR stage
- Center-involving vs non-center-involving
- OCT measures central subfield thickness
- Leading cause of vision loss in diabetics

**Screening Guidelines:**
- Type 1: First exam 5 years after diagnosis
- Type 2: At diagnosis
- Annual exams if no DR
- More frequent if DR present
- Pregnancy: Each trimester if diabetic

**Treatment:**

*DME:*
- Anti-VEGF injections (first-line for center-involving)
- Intravitreal steroids (second-line)
- Focal laser (non-center-involving)

*PDR:*
- Panretinal photocoagulation (PRP) - laser
- Anti-VEGF (can be used alone or with PRP)
- Vitrectomy for complications (non-clearing vitreous hemorrhage, tractional detachment)

**Systemic Control:**
- HbA1c reduction: Most important intervention
- Blood pressure control
- Lipid management`,
      keyTerms: [
        { term: 'microaneurysm', definition: 'Tiny bulging pouches in weakened blood vessel walls; earliest sign of DR', pronunciation: 'MY-kroh-AN-yoo-rizm' },
        { term: 'neovascularization', definition: 'Abnormal new blood vessel growth in response to ischemia' },
        { term: 'panretinal photocoagulation', definition: 'Laser treatment destroying peripheral retina to reduce VEGF drive for new vessels', pronunciation: 'PRP' },
        { term: 'vitrectomy', definition: 'Surgery to remove vitreous gel, blood, and scar tissue from the eye' },
        { term: 'cotton-wool spot', definition: 'White fluffy lesion representing nerve fiber layer infarction' },
      ],
      analogies: [
        'Panretinal photocoagulation is like sacrificing the suburbs (peripheral retina) to save downtown (macula).',
        'Neovascularization is like the retina sending out a distress signal (VEGF) for more blood supply, but the response is chaotic.',
        'Hard exudates are like debris left behind after a flood - lipid deposits from leaky vessels.',
      ],
    },
    3: {
      level: 3,
      summary: 'Diabetic retinopathy results from chronic hyperglycemia-induced microvascular damage involving pericyte loss, basement membrane changes, and inflammatory pathways, with VEGF-driven neovascularization in proliferative disease and macular edema from blood-retinal barrier breakdown.',
      explanation: `## Pathophysiology

**Biochemical Pathways:**

1. **Polyol Pathway:**
   - Aldose reductase converts glucose to sorbitol
   - Sorbitol accumulation → Osmotic stress
   - NADPH depletion → Oxidative stress

2. **AGE Formation:**
   - Non-enzymatic glycation of proteins
   - AGE-RAGE receptor activation
   - NF-kB pathway → Inflammation

3. **PKC Activation:**
   - DAG-PKC pathway activation
   - VEGF upregulation
   - Altered blood flow
   - Basement membrane synthesis

4. **Hexosamine Pathway:**
   - Glucosamine production
   - Gene expression changes
   - TGF-beta increase

**Cellular Changes:**
- Pericyte apoptosis (earliest change)
- Endothelial dysfunction
- Basement membrane thickening
- Leukostasis
- Platelet aggregation
- Müller cell dysfunction

**Blood-Retinal Barrier Breakdown:**
- Inner BRB: Retinal vascular endothelium
- Outer BRB: RPE tight junctions
- Both affected in diabetes
- Leads to fluid and lipid leakage

## Staging Systems

**ETDRS Classification (Standard):**
- Level 10-20: No retinopathy
- Level 35: Mild NPDR
- Level 43-47: Moderate NPDR
- Level 53: Severe NPDR
- Level 61+: PDR

**International Clinical Classification:**
- No apparent retinopathy
- Mild/Moderate/Severe NPDR
- PDR

**Diabetic Macular Edema:**
- Absent
- Present: Center-involving (CI-DME) vs Non-center-involving
- CI-DME: CST >300 microns with foveal involvement

## Imaging

**Fundus Photography:**
- Documentation and progression monitoring
- Screening with non-mydriatic cameras
- AI-assisted interpretation emerging

**Fluorescein Angiography:**
- Microaneurysm leakage
- Capillary non-perfusion areas
- Neovascularization confirmation
- Macular ischemia assessment

**OCT:**
- Macular edema quantification (CST)
- Cystoid spaces, SRF
- Vitreomacular traction
- EZ band integrity
- Treatment response monitoring

**OCT Angiography:**
- Foveal avascular zone enlargement
- Capillary non-perfusion
- Microaneurysm detection
- Research applications

## Treatment

**Anti-VEGF for DME:**
- Ranibizumab, aflibercept, bevacizumab, brolucizumab, faricimab
- Protocol T: Aflibercept slightly better for severe cases
- Monthly initially, then extend
- 50-70% gain vision, most stabilize

**Corticosteroids for DME:**
- Dexamethasone implant (Ozurdex): Every 3-6 months
- Fluocinolone implant (Iluvien): 3 years duration
- Second-line (pseudophakic, poor anti-VEGF response)
- Side effects: Cataract, IOP elevation

**Laser Therapy:**

*Focal/Grid Laser for DME:*
- Modified ETDRS technique
- Non-center-involving DME
- Adjunct to anti-VEGF

*Panretinal Photocoagulation (PRP):*
- 1200-1600 spots, 500 micron size
- Spares macula and disc
- Reduces VEGF production
- Complications: Vision loss, night vision, visual field
- Can worsen DME

**Vitrectomy:**
- Non-clearing vitreous hemorrhage (>1 month Type 1, >3 months Type 2)
- Tractional retinal detachment threatening macula
- Combined traction-rhegmatogenous
- Epiretinal membrane with DME

## Systemic Management

**Glycemic Control:**
- DCCT/UKPDS: Every 1% HbA1c reduction = 35-40% reduction in DR risk
- Tight control early prevents progression
- Caution: Rapid improvement can temporarily worsen DR

**Blood Pressure:**
- UKPDS: Tight BP control reduces DR progression
- Target <130/80 mmHg
- ACE inhibitors may have retinal benefits beyond BP

**Lipid Control:**
- Fenofibrate: FIELD, ACCORD Eye studies showed benefit
- May reduce progression independently of lipid levels
- Consider for moderate NPDR

**Pregnancy:**
- DR can progress rapidly
- Exam each trimester
- Usually regresses postpartum
- Not contraindication to pregnancy, but counsel`,
      keyTerms: [
        { term: 'pericyte', definition: 'Supporting cell wrapped around capillaries; early loss is hallmark of diabetic retinopathy' },
        { term: 'IRMA', definition: 'Intraretinal microvascular abnormalities; dilated pre-existing vessels in response to ischemia' },
        { term: 'central subfield thickness', definition: 'OCT measurement of central 1mm macular thickness; key metric for DME' },
        { term: 'ETDRS', definition: 'Early Treatment Diabetic Retinopathy Study; established DR classification and treatment standards' },
        { term: 'fenofibrate', definition: 'Fibric acid derivative shown to reduce DR progression independent of lipid lowering' },
      ],
      clinicalNotes: 'Anti-VEGF is first-line for center-involving DME. PRP reduces severe vision loss risk by 50% but has side effects. Rapid HbA1c improvement can paradoxically worsen DR temporarily. Ischemic maculopathy (capillary non-perfusion) has poor visual prognosis despite treatment.',
    },
    4: {
      level: 4,
      summary: 'Diabetic retinopathy pathogenesis involves complex interactions between metabolic, inflammatory, and neurovascular pathways, with precision medicine approaches emerging based on disease phenotyping and response biomarkers to guide treatment selection between anti-VEGF, steroids, and laser modalities.',
      explanation: `## Advanced Pathophysiology

**Neurovascular Unit:**
- Retina as neurovascular tissue (not just vascular)
- Neurons, glia, and vessels interconnected
- Neural dysfunction may precede vascular changes
- Functional changes detectable before clinical DR

**Inflammation:**
- Leukocyte adhesion and leukostasis
- ICAM-1, VCAM-1 upregulation
- Microglial activation
- Inflammasome activation (NLRP3)
- IL-1beta, IL-6, TNF-alpha elevation

**Epigenetic Changes:**
- DNA methylation alterations
- Histone modifications
- "Metabolic memory" - past hyperglycemia has lasting effects
- Explains continued progression despite improved control

**Retinal Neurodegeneration:**
- RGC loss
- Nerve fiber layer thinning (OCT)
- Functional deficits (multifocal ERG)
- May be independent disease pathway
- Neuroprotection research ongoing

## Clinical Phenotyping

**DME Phenotypes:**

*By Morphology:*
- Diffuse: Generalized thickening
- Focal: Localized from microaneurysm clusters
- Cystoid: Intraretinal cysts (worse prognosis)
- Tractional: Vitreomacular traction component

*By Response:*
- Super-responders
- Moderate responders
- Non-responders (~30%)
- Rebound edema after stopping treatment

**PDR Phenotypes:**
- Florid: Aggressive, rapidly progressive
- Quiescent: May not require treatment
- Treatment-responsive vs resistant

**Biomarkers for Prognosis:**
- Baseline vision (Protocol T)
- Macular ischemia extent
- EZ band disruption
- SRF vs IRF patterns
- Hyperreflective foci

## Treatment Optimization

**Anti-VEGF Comparative Data:**

*Protocol T (DME):*
- Aflibercept, bevacizumab, ranibizumab compared
- At 2 years: Similar for mild baseline deficit
- Aflibercept better for VA 20/50 or worse at baseline
- Bevacizumab: More persistent edema

*Newer Agents:*
- Faricimab: Bispecific, potential longer durability
- Brolucizumab: Caution (IOI, vasculitis risk)
- High-dose aflibercept (8mg) under study

**Steroid Selection:**
- Dexamethasone implant: Shorter acting, reversible IOP elevation
- Fluocinolone implant: Long-acting, significant cataract/glaucoma risk
- Consider: Pseudophakic, poor anti-VEGF response, non-compliant

**Laser Evolution:**
- PASCAL (pattern scanning): Faster, less pain
- Subthreshold micropulse: Preserves tissue
- NAVILAS (navigated): More precise

**PRP vs Anti-VEGF for PDR:**
- Protocol S: Ranibizumab non-inferior to PRP
- Anti-VEGF: Less visual field loss, less DME
- PRP: One-time, durable, lower cost
- Combination may be optimal in some cases

## Special Situations

**Vitrectomy Indications:**
- Non-clearing vitreous hemorrhage
- Tractional retinal detachment
- Combined tractional-rhegmatogenous
- Severe fibrovascular proliferation
- Dense premacular hemorrhage

**Vitrectomy Considerations:**
- Timing: Earlier for Type 1, can wait for Type 2
- Anti-VEGF pre-treatment may reduce bleeding
- Wide-angle viewing systems
- Membrane peeling techniques

**Neovascular Glaucoma:**
- Rubeosis iridis → angle neovascularization
- PRP essential (may need anti-VEGF bridge)
- Glaucoma drainage device if IOP uncontrolled
- Poor visual prognosis

**Pregnancy:**
- Pre-pregnancy counseling and exam
- Can progress rapidly, especially if baseline DR
- PRP if severe NPDR or PDR before/early pregnancy
- Careful BP control
- Usually improves post-delivery

## Screening Advances

**AI and Telemedicine:**
- FDA-approved AI systems (IDx-DR)
- Automated referral decisions
- Remote interpretation
- Increased screening access
- Sensitivity/specificity ~90%

**Widefield Imaging:**
- Optos, Clarus systems
- Peripheral lesions may change staging
- Predominantly peripheral lesions: Worse prognosis
- Standard fields may miss 30% of lesions`,
      keyTerms: [
        { term: 'metabolic memory', definition: 'Phenomenon where prior hyperglycemia effects persist despite subsequent good control; mediated by epigenetics' },
        { term: 'Protocol T', definition: 'DRCR network study comparing anti-VEGF agents for DME' },
        { term: 'Protocol S', definition: 'DRCR study comparing ranibizumab to PRP for PDR' },
        { term: 'hyperreflective foci', definition: 'OCT finding representing lipoprotein extravasation or activated microglia; marker of inflammation' },
        { term: 'predominantly peripheral lesions', definition: 'DR lesions mainly outside standard imaging field; associated with worse prognosis' },
      ],
      clinicalNotes: 'Metabolic memory explains why early good control is crucial. Protocol T guides anti-VEGF selection. Consider steroids for pseudophakic non-responders. Pre-vitrectomy anti-VEGF reduces surgical bleeding. Ischemic maculopathy limits visual potential regardless of treatment.',
    },
    5: {
      level: 5,
      summary: 'Contemporary diabetic retinopathy management integrates multi-modal imaging biomarkers, precision phenotyping, artificial intelligence screening, and evolving treatment paradigms including sustained drug delivery, combination therapy, and emerging neuroprotective strategies targeting the diabetic retinal neurodegeneration component.',
      explanation: `## Molecular Targets and Pathways

**Beyond VEGF:**
- VEGF-A primary target (current therapies)
- VEGF-B, PlGF, VEGF-C also implicated
- Angiopoietin-2/Tie2 pathway (faricimab target)
- PDGF: Pericyte recruitment (failed as target in trials)
- Erythropoietin: Neuroprotection potential
- Kallikrein-kinin system

**Inflammatory Targets:**
- TNF-alpha inhibitors (research)
- IL-6 pathway
- Inflammasome inhibition
- Complement system
- JAK-STAT pathway

**Neuroprotection:**
- BDNF, CNTF
- Somatostatin analogs
- Erythropoietin
- Brimonidine (topical)
- Retinal neurodegeneration as treatment target

## Emerging Therapies

**Sustained Drug Delivery:**
- Port Delivery System with ranibizumab
- Intravitreal implants (corticosteroids)
- Suprachoroidal delivery
- Extended-release anti-VEGF formulations

**Gene Therapy:**
- AAV-delivered VEGF inhibitors
- RGX-314 (anti-VEGF fab expression)
- One-time subretinal injection
- Sustained expression goal
- Phase 1-2 trials for DR ongoing

**Combination Approaches:**
- Anti-VEGF + anti-Ang2 (faricimab)
- Anti-VEGF + steroid
- Anti-VEGF + laser
- Targeting multiple pathways simultaneously

**Novel Small Molecules:**
- Oral integrin antagonists
- Plasma kallikrein inhibitors
- Tie2 activators
- Topical treatments (research)

## Precision Medicine

**Imaging Biomarkers:**

*Predictive:*
- Baseline CST and VA
- Macular perfusion (OCTA)
- EZ band integrity
- Disorganization of retinal inner layers (DRIL)

*Prognostic:*
- SRF vs IRF response patterns
- Hyperreflective foci
- HRF reduction with treatment
- FAZ area on OCTA

**Pharmacogenomics:**
- VEGF-A polymorphisms
- CFH variants
- Research phase
- May guide therapy selection

**Phenotype-Guided Treatment:**
- Inflammatory phenotype → Steroids
- Pure VEGF-driven → Anti-VEGF alone
- Tractional component → Vitrectomy
- Ischemic → Cautious prognosis

## Advanced Imaging

**Widefield OCTA:**
- Non-perfusion area quantification
- Neovascularization detection
- Treatment response assessment
- Peripheral ischemia correlation

**Adaptive Optics:**
- Photoreceptor visualization
- Capillary imaging
- Research tool
- May detect earliest changes

**AI and Deep Learning:**
- Automated grading systems
- Referral recommendations
- Progression prediction
- Treatment response prediction
- Integration with EMR

## Healthcare Delivery

**Screening Programs:**
- Systematic screening proven effective
- Telemedicine models
- AI-assisted reading centers
- Community-based approaches
- Reducing barriers to access

**Treatment Burden:**
- Monthly anti-VEGF injections burdensome
- Treat-and-extend protocols
- Longer-acting agents
- Gene therapy potential

**Global Considerations:**
- DR increasing in developing countries
- Screening infrastructure needed
- Access to anti-VEGF variable
- Laser still mainstay in resource-limited settings

## Future Directions

**Prevention:**
- Fenofibrate use expansion
- Novel oral preventive agents
- Topical neuroprotection
- Earlier intervention paradigms

**Regeneration:**
- RPE cell replacement
- Photoreceptor regeneration
- Retinal organoids for research
- Stem cell approaches

**Biomarkers:**
- Serum/vitreous biomarkers
- Systemic inflammatory markers
- Predictive algorithms
- Personalized monitoring intervals

## Integrated Care Model

**Multidisciplinary Approach:**
- Ophthalmology-primary care coordination
- Endocrine collaboration
- Shared electronic records
- Quality metrics tracking

**Patient Education:**
- Disease understanding
- Treatment rationale
- Lifestyle modification
- Adherence support

**Value-Based Care:**
- Cost-effectiveness considerations
- Biosimilar adoption
- Appropriate imaging utilization
- Outcome-based reimbursement`,
      keyTerms: [
        { term: 'DRIL', definition: 'Disorganization of retinal inner layers; OCT biomarker associated with worse visual outcomes' },
        { term: 'foveal avascular zone', definition: 'Capillary-free area at fovea; enlargement indicates macular ischemia' },
        { term: 'predominantly peripheral lesions', definition: 'DR findings mainly outside standard field; 3-4x higher risk of progression' },
        { term: 'treat-and-extend', definition: 'Treatment protocol extending injection intervals while maintaining disease control' },
        { term: 'diabetic retinal neurodegeneration', definition: 'Neural component of DR that may precede vascular changes; potential therapeutic target' },
      ],
      clinicalNotes: `Key clinical pearls:
1. Early tight glycemic control prevents DR better than late improvement (metabolic memory)
2. AI screening now FDA-approved and effective for DR detection
3. OCTA reveals macular ischemia not seen on clinical exam
4. DRIL on OCT predicts poor visual outcomes despite treatment
5. Faricimab offers potential for extended durability through dual pathway inhibition
6. Gene therapy may eventually provide sustained VEGF suppression
7. Diabetic retinal neurodegeneration emerging as independent treatment target
8. Fenofibrate has DR-specific benefits beyond lipid lowering`,
    },
  },

  media: [
    {
      id: 'dr-stages-fundus',
      type: 'image',
      filename: 'diabetic-retinopathy-stages.jpg',
      title: 'Stages of Diabetic Retinopathy',
      description: 'Fundus photographs showing progression from mild NPDR to PDR',
    },
    {
      id: 'dme-oct',
      type: 'diagram',
      filename: 'dme-oct-types.svg',
      title: 'DME Patterns on OCT',
      description: 'OCT images showing diffuse, cystoid, and tractional DME patterns',
    },
    {
      id: 'prp-pattern',
      type: 'diagram',
      filename: 'prp-treatment-pattern.svg',
      title: 'Panretinal Photocoagulation Pattern',
      description: 'Diagram showing PRP laser spots distribution on retina',
    },
  ],

  citations: [
    {
      id: 'etdrs-1991',
      type: 'article',
      title: 'Early Treatment Diabetic Retinopathy Study Research Group',
      source: 'Ophthalmology',
      url: 'https://doi.org/10.1016/S0161-6420(91)32186-8',
    },
    {
      id: 'protocol-t',
      type: 'article',
      title: 'Aflibercept, Bevacizumab, or Ranibizumab for Diabetic Macular Edema',
      authors: ['DRCR Network'],
      source: 'New England Journal of Medicine',
      url: 'https://doi.org/10.1056/NEJMoa1414264',
    },
    {
      id: 'aao-ppp-dr',
      type: 'article',
      title: 'Diabetic Retinopathy Preferred Practice Pattern',
      source: 'American Academy of Ophthalmology',
    },
  ],

  crossReferences: [
    { targetId: 'structure-eye-anatomy', targetType: 'structure', relationship: 'related', label: 'Eye Anatomy' },
    { targetId: 'condition-macular-degeneration', targetType: 'condition', relationship: 'related', label: 'Macular Degeneration' },
    { targetId: 'condition-glaucoma', targetType: 'condition', relationship: 'related', label: 'Glaucoma' },
    { targetId: 'condition-cataracts', targetType: 'condition', relationship: 'related', label: 'Cataracts' },
  ],

  tags: {
    systems: ['visual', 'endocrine'],
    topics: ['ophthalmology', 'retina', 'diabetes'],
    keywords: ['diabetic retinopathy', 'DME', 'anti-VEGF', 'PRP', 'macular edema', 'PDR', 'NPDR'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['ophthalmology', 'medicine'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default diabeticRetinopathy;
