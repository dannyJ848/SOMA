import { EducationalContent } from '../../types';

/**
 * Coronary Stenting
 *
 * Educational content on percutaneous coronary intervention (PCI)
 * and coronary stenting including indications, technique, stent types,
 * dual antiplatelet therapy, and management of complications.
 */
export const coronaryStenting: EducationalContent = {
  id: 'coronary-stenting',
  type: 'concept',
  name: 'Coronary Stenting',
  nameEs: 'Implante de Stent Coronario',
  alternateNames: ['PCI', 'Percutaneous Coronary Intervention', 'Coronary Angioplasty with Stenting'],

  levels: {
    1: {
      level: 1,
      summary: 'Coronary stenting is a procedure where a tiny metal mesh tube (stent) is placed inside a blocked or narrowed heart artery to hold it open and restore blood flow.',
      explanation:
        'The coronary arteries are the blood vessels that supply blood to the heart muscle itself. When these arteries become blocked ' +
        'by fatty deposits (plaque), the heart muscle does not get enough blood and oxygen. This can cause chest pain (angina) or even a heart attack.\n\n' +
        'Coronary stenting is a procedure to open up blocked arteries:\n\n' +
        '1. **A thin, flexible tube (catheter)** is inserted through an artery in the wrist or groin\n' +
        '2. **The catheter is guided** to the blocked coronary artery using X-ray imaging\n' +
        '3. **A tiny balloon** at the tip of the catheter is inflated to push the plaque against the artery wall\n' +
        '4. **A stent** (small metal mesh tube) is placed to keep the artery open\n' +
        '5. **The balloon is deflated** and removed, leaving the stent permanently in place\n\n' +
        'The stent acts like a scaffold, holding the artery open so blood can flow freely to the heart muscle.\n\n' +
        'After the procedure, patients take blood-thinning medications to prevent blood clots from forming on the stent. ' +
        'Most patients can go home the next day and return to normal activities within a week.',
      keyTerms: [
        { term: 'Stent', definition: 'A tiny metal mesh tube placed inside an artery to hold it open', pronunciation: 'stent' },
        { term: 'Coronary artery', definition: 'Blood vessels that supply oxygen-rich blood to the heart muscle', pronunciation: 'KOR-oh-nair-ee AR-tuh-ree' },
        { term: 'Catheter', definition: 'A thin, flexible tube inserted into a blood vessel to reach the heart' },
        { term: 'Plaque', definition: 'Fatty deposits that build up inside artery walls and can block blood flow' },
      ],
      analogies: [
        'A stent is like a tiny scaffolding tube placed inside a collapsed tunnel to hold it open and let traffic (blood) flow through.',
        'The procedure is like using a tiny balloon to push aside a blockage in a pipe, then leaving a sleeve inside to keep it from collapsing again.',
      ],
      patientCounselingPoints: [
        'Take your blood-thinning medications exactly as prescribed — they protect the stent from clotting.',
        'Do NOT stop your medications without talking to your doctor first, even for dental work or other procedures.',
        'You can resume most normal activities within a week. Your doctor will tell you when it is safe to exercise.',
        'Call 911 immediately if you develop chest pain, shortness of breath, or feel faint after going home.',
      ],
    },

    2: {
      level: 2,
      summary: 'PCI with coronary stenting involves balloon angioplasty with drug-eluting stent (DES) deployment, requires dual antiplatelet therapy (DAPT), and is indicated for acute coronary syndromes and symptomatic coronary artery disease.',
      explanation:
        '**Indications for PCI:**\n' +
        '- **ST-elevation myocardial infarction (STEMI)**: Primary PCI is the preferred reperfusion strategy if available within 120 minutes of first medical contact\n' +
        '- **Non-ST-elevation ACS (NSTEMI/UA)**: Early invasive strategy (within 24 hours) for high-risk patients\n' +
        '- **Stable angina**: PCI for persistent symptoms despite optimal medical therapy, or for significant stenosis in prognostically important territories\n\n' +
        '**Stent Types:**\n' +
        '- **Bare-metal stents (BMS)**: Metallic scaffold without drug coating. Higher rates of in-stent restenosis (~20-30% at 1 year). Rarely used now.\n' +
        '- **Drug-eluting stents (DES)**: Coated with antiproliferative drugs (everolimus, zotarolimus) that prevent smooth muscle cell growth and restenosis. ' +
        'Current standard of care. Restenosis rate ~5-10% at 1 year.\n\n' +
        '**The PCI Procedure:**\n' +
        '1. Arterial access: Radial (wrist — preferred for lower bleeding risk) or femoral (groin)\n' +
        '2. Guide catheter engagement with coronary ostium\n' +
        '3. Guidewire crossed through the stenosis\n' +
        '4. Lesion preparation: Pre-dilation with balloon or specialty devices\n' +
        '5. Stent deployment: Balloon-expandable stent delivered to the lesion and deployed at target pressure\n' +
        '6. Post-dilation: High-pressure balloon to ensure full stent expansion\n' +
        '7. Final angiography to assess result\n\n' +
        '**Dual Antiplatelet Therapy (DAPT):**\n' +
        '- Aspirin (indefinitely) + P2Y12 inhibitor (clopidogrel, prasugrel, or ticagrelor)\n' +
        '- **After ACS**: DAPT for 12 months (minimum 6 months)\n' +
        '- **After elective PCI**: DAPT for 6 months (can shorten to 1-3 months if high bleeding risk)\n' +
        '- **P2Y12 inhibitor choice**: Prasugrel or ticagrelor preferred over clopidogrel in ACS (TRITON-TIMI 38, PLATO trials)\n\n' +
        '**Complications:**\n' +
        '- Access site bleeding or hematoma\n' +
        '- Coronary dissection or perforation\n' +
        '- Stent thrombosis (acute, subacute, late, or very late)\n' +
        '- In-stent restenosis (neointimal hyperplasia)\n' +
        '- Contrast-induced nephropathy',
      keyTerms: [
        { term: 'Drug-eluting stent (DES)', definition: 'Coronary stent coated with antiproliferative medication to prevent restenosis; current standard of care for PCI' },
        { term: 'DAPT', definition: 'Dual antiplatelet therapy with aspirin plus a P2Y12 inhibitor to prevent stent thrombosis after PCI' },
        { term: 'Primary PCI', definition: 'Emergent PCI performed for STEMI as the preferred reperfusion strategy within 120 minutes of first medical contact' },
        { term: 'In-stent restenosis', definition: 'Re-narrowing of a stented coronary artery due to neointimal tissue growth; occurs in 5-10% of DES at 1 year' },
        { term: 'Stent thrombosis', definition: 'Blood clot formation within a coronary stent, a potentially catastrophic complication presenting as acute MI' },
      ],
      examples: [
        'A 58-year-old presents with acute chest pain and ST elevation in V1-V4. Door-to-balloon time goal is <90 minutes for primary PCI.',
        'After elective PCI with DES, the patient is prescribed aspirin 81 mg daily + ticagrelor 90 mg BID for 6 months.',
      ],
    },

    3: {
      level: 3,
      summary: 'PCI decision-making requires integration of coronary anatomy assessment, physiological lesion evaluation (FFR/iFR), appropriate use criteria, comparison with CABG for multivessel disease, and optimization of DAPT duration based on ischemic and bleeding risk.',
      explanation:
        '**Physiological Assessment of Lesion Significance:**\n' +
        '- **Fractional flow reserve (FFR)**: Ratio of pressure distal to stenosis / aortic pressure during maximal hyperemia (adenosine). FFR <= 0.80 = functionally significant. FAME trials established FFR-guided PCI superiority over angiography-guided.\n' +
        '- **Instantaneous wave-free ratio (iFR)**: Resting index measured during the wave-free period of diastole. iFR <= 0.89 = significant. DEFINE-FLAIR and iFR-SWEDEHEART: iFR non-inferior to FFR.\n' +
        '- Advantages of physiological assessment: Reduces unnecessary stenting, improves outcomes, identifies functionally significant intermediate lesions (40-70% stenosis)\n\n' +
        '**PCI vs. CABG — Multivessel Disease:**\n' +
        '- **SYNTAX trial**: Developed SYNTAX score to grade anatomic complexity. Low SYNTAX score (0-22): PCI equivalent to CABG. High SYNTAX (>32): CABG superior.\n' +
        '- **Left main disease**: PCI acceptable alternative to CABG for low-intermediate SYNTAX score (EXCEL, NOBLE trials — results debated).\n' +
        '- **Diabetic patients**: CABG preferred for multivessel disease (FREEDOM trial — CABG reduced mortality and MI vs. PCI).\n' +
        '- Heart Team discussion recommended for complex coronary anatomy.\n\n' +
        '**Lesion Preparation and Complex PCI:**\n' +
        '- **Calcified lesions**: Rotational atherectomy (Rotablator), orbital atherectomy (Diamondback), intravascular lithotripsy (Shockwave)\n' +
        '- **Chronic total occlusions (CTOs)**: Specialized techniques — antegrade wire escalation, antegrade dissection re-entry (ADR), retrograde approach. Success rates 85-90% at experienced centers.\n' +
        '- **Bifurcation lesions**: Provisional stenting (main vessel only) is default strategy; two-stent techniques (DK crush, culotte, TAP) for complex bifurcations.\n\n' +
        '**Intravascular Imaging:**\n' +
        '- **IVUS (Intravascular Ultrasound)**: Cross-sectional ultrasound of coronary artery. Assesses vessel size, plaque burden, stent expansion, and apposition. ADAPT-DES: IVUS-guided PCI associated with lower MACE.\n' +
        '- **OCT (Optical Coherence Tomography)**: 10x higher resolution than IVUS (~10 um). Superior for stent strut assessment, plaque morphology (thin-cap fibroatheroma identification), and dissection evaluation. Limited by blood clearing requirement.\n\n' +
        '**DAPT Optimization:**\n' +
        '- **DAPT Score**: Integrates age, smoking, diabetes, MI at presentation, prior PCI/MI, stent diameter, HF, saphenous vein graft. Score >= 2: prolonged DAPT (30 months). Score < 2: standard or shortened DAPT.\n' +
        '- **High bleeding risk (HBR)**: Shortened DAPT (1-3 months) then P2Y12 monotherapy. TWILIGHT, TICO, STOPDAPT-2 support de-escalation strategies.\n' +
        '- **Triple therapy** (anticoagulant + DAPT) in AF patients: Minimize to 1 week DAPT then OAC + P2Y12 for 12 months, then OAC alone. (AUGUSTUS trial: apixaban + P2Y12 = lowest bleeding.)',
      keyTerms: [
        { term: 'FFR', definition: 'Fractional flow reserve — invasive pressure-based physiological assessment of coronary stenosis significance. FFR <= 0.80 indicates functional significance' },
        { term: 'iFR', definition: 'Instantaneous wave-free ratio — resting physiological index for stenosis assessment without hyperemia. iFR <= 0.89 indicates significance' },
        { term: 'SYNTAX score', definition: 'Angiographic scoring system grading coronary anatomy complexity to guide PCI vs. CABG decision-making in multivessel disease' },
        { term: 'OCT', definition: 'Optical coherence tomography — high-resolution (~10 um) intravascular imaging using near-infrared light for detailed plaque and stent assessment' },
        { term: 'IVUS', definition: 'Intravascular ultrasound — catheter-based ultrasound providing cross-sectional coronary artery imaging for vessel sizing and stent optimization' },
        { term: 'Intravascular lithotripsy', definition: 'Catheter-based shockwave technology to fracture calcified plaque and facilitate stent expansion' },
      ],
      examples: [
        'A patient with 60% LAD stenosis has FFR of 0.75 — functionally significant, proceed with PCI. If FFR were 0.85, defer PCI and continue medical therapy.',
        'A diabetic with three-vessel disease and SYNTAX score 35 should be referred for CABG based on FREEDOM trial evidence.',
      ],
      clinicalNotes: 'Intravascular imaging (IVUS or OCT) during PCI is associated with improved outcomes and should be routinely used, especially for complex lesions, left main PCI, and in-stent restenosis. The RENOVATE-COMPLEX-PCI trial confirmed benefit of imaging-guided PCI for complex lesions.',
    },

    4: {
      level: 4,
      summary: 'Advanced interventional cardiology encompasses complex PCI techniques for CTOs and bifurcations, hemodynamic support during high-risk PCI, coronary physiology beyond FFR, and management of PCI complications.',
      explanation:
        '**Chronic Total Occlusion (CTO) PCI:**\n' +
        '- **Hybrid algorithm**: Antegrade wire escalation (AWE) first for favorable anatomy; antegrade dissection re-entry (ADR) for long segments; retrograde approach when antegrade fails.\n' +
        '- **ADR technique**: Knuckle wire creates subintimal space; Stingray balloon and wire for controlled re-entry into true lumen.\n' +
        '- **Retrograde approach**: Access via collateral channels (septal or epicardial) to cross CTO from the distal cap.\n' +
        '- Success rates: >85% at experienced centers. Complications: perforation (~3%), periprocedural MI, radiation injury. J-CTO score predicts difficulty.\n\n' +
        '**Hemodynamic Support During High-Risk PCI:**\n' +
        '- **Protected PCI**: Mechanical support for patients with severely depressed EF, left main disease, or last remaining vessel.\n' +
        '- **Impella CP/5.5**: Most commonly used. Unloads LV and maintains forward flow during balloon inflations.\n' +
        '- **IABP**: Modest support; BCIS-1 trial showed no mortality benefit but used as first-line in some centers.\n' +
        '- **VA-ECMO**: Full cardiopulmonary support for highest-risk cases.\n' +
        '- **Patient selection**: PROTECT III trial evaluating Impella-supported high-risk PCI vs. standard PCI.\n\n' +
        '**Beyond FFR — Advanced Coronary Physiology:**\n' +
        '- **Coronary flow reserve (CFR)**: Ratio of hyperemic to resting flow. CFR < 2.0 abnormal. Reflects both epicardial and microvascular disease. Prognostically powerful.\n' +
        '- **Index of microcirculatory resistance (IMR)**: Thermodilution-based measure of microvascular function. IMR > 25 = microvascular dysfunction. High IMR post-STEMI predicts worse recovery.\n' +
        '- **Angiography-based physiology**: QFR (quantitative flow ratio) and vFFR derived from angiographic images without pressure wire. 90% agreement with invasive FFR.\n' +
        '- **CT-FFR**: Non-invasive FFR from coronary CTA using computational fluid dynamics (HeartFlow). PLATFORM, ADVANCE trials show reduced unnecessary catheterization.\n\n' +
        '**Stent Optimization:**\n' +
        '- **MSA (minimum stent area)**: Most powerful predictor of stent failure. Left main >= 8 mm2, LAD >= 5 mm2 by IVUS.\n' +
        '- **Edge dissection management**: Small dissections (<2 mm by OCT) with no flow limitation can be observed; larger dissections require additional stent coverage.\n' +
        '- **Malapposition**: Stent struts not in contact with vessel wall. Acute malapposition common and usually resolves; persistent/late-acquired malapposition may predispose to late stent thrombosis.\n\n' +
        '**Complication Management:**\n' +
        '- **Coronary perforation**: Ellis classification. Type I (crater): observe. Type II (pericardial blush): prolonged balloon inflation, possible covered stent. Type III (free perforation): emergent covered stent (PK Papyrus or Graftmaster), pericardiocentesis, possible surgery.\n' +
        '- **No-reflow**: Distal embolization causing microvascular obstruction. Treatment: intracoronary adenosine, nitroprusside, verapamil, or nicorandil.\n' +
        '- **Side branch loss**: Accept if small branch (<1.5 mm). Rewire and balloon/stent if significant territory affected.',
      keyTerms: [
        { term: 'CTO', definition: 'Chronic total occlusion — complete blockage of a coronary artery lasting > 3 months. CTO PCI requires specialized techniques and expertise' },
        { term: 'Protected PCI', definition: 'High-risk PCI performed with mechanical circulatory support (Impella, IABP) to maintain hemodynamic stability' },
        { term: 'IMR', definition: 'Index of microcirculatory resistance — thermodilution measure of coronary microvascular function. Elevated IMR post-STEMI predicts poor recovery' },
        { term: 'CT-FFR', definition: 'Non-invasive computation of FFR from coronary CT angiography using computational fluid dynamics, avoiding invasive pressure measurement' },
        { term: 'Covered stent', definition: 'PTFE-covered coronary stent used to seal coronary perforations, functioning as a vascular graft within the artery' },
      ],
      clinicalNotes: 'CTO PCI should only be performed at experienced centers with operators trained in the hybrid algorithm. The benefit of CTO PCI on hard endpoints remains debated (DECISION-CTO negative for MACE), but quality-of-life improvements are well-documented (EURO-CTO). Routine use of intravascular imaging during PCI improves long-term outcomes and should be standard practice.',
    },

    5: {
      level: 5,
      summary: 'Expert interventional cardiology encompasses bioresorbable scaffolds, drug-coated balloons, nanotechnology-enhanced stents, computational coronary physiology, robotics, and the evolving paradigm of plaque modification vs. stenting.',
      explanation:
        '**Bioresorbable Vascular Scaffolds (BVS):**\n' +
        '- Concept: Temporary scaffolding that dissolves after vessel healing, restoring vasomotion and eliminating permanent implant complications.\n' +
        '- **Absorb BVS (Abbott)**: Polylactic acid scaffold. Initially promising but ABSORB III/IV showed higher scaffold thrombosis (especially in small vessels) and non-inferior at 5 years. Withdrawn from market.\n' +
        '- **Next generation**: Thinner struts (< 100 um), magnesium-based (Magmaris), sirolimus-eluting (Fantom). Ongoing trials.\n' +
        '- Lessons learned: Thick struts, inadequate expansion, and use in small vessels contributed to failure. Optimal implantation technique (PSP: Prepare, Size, Post-dilate) is critical.\n\n' +
        '**Drug-Coated Balloons (DCBs):**\n' +
        '- Paclitaxel-coated balloons deliver antiproliferative drug without permanent implant.\n' +
        '- Established indication: In-stent restenosis (BASKET-SMALL 2, DARE trial).\n' +
        '- Emerging: De novo small vessel disease (DCB-only strategy). BASKET-SMALL 2 showed DCB non-inferior to DES in small vessels.\n' +
        '- Sirolimus-coated balloons: Next generation with potentially superior drug profile. Early trials promising.\n\n' +
        '**Nanotechnology and Advanced Stent Platforms:**\n' +
        '- Nanoporous hydroxyapatite coatings: Promote endothelialization while delivering drug\n' +
        '- CD34 antibody-coated stents: Capture endothelial progenitor cells for accelerated healing\n' +
        '- Polymer-free DES: Drug in microreservoir on stent surface; avoids polymer-related inflammation and late thrombosis\n' +
        '- Self-healing polymers: Stimuli-responsive coatings that release drug in response to local inflammation\n\n' +
        '**Computational Coronary Physiology:**\n' +
        '- **Virtual PCI**: FFR simulation predicting post-stent FFR from pre-PCI data. Identifies optimal stent landing zone and whether stenting will normalize physiology.\n' +
        '- **CFD modeling of coronary hemodynamics**: Wall shear stress analysis predicting plaque progression and neoatherosclerosis development.\n' +
        '- **AI-based coronary segmentation and stenosis quantification**: Automated angiographic analysis approaching expert-level accuracy.\n' +
        '- **Radiomics**: Extracting quantitative features from CCTA for non-invasive plaque characterization (high-risk plaque features: low-attenuation plaque, positive remodeling, spotty calcification, napkin-ring sign).\n\n' +
        '**Robotic PCI:**\n' +
        '- CorPath GRX (Siemens/Corindus): Robotic system for remote catheter and guidewire manipulation.\n' +
        '- Advantages: Reduced operator radiation exposure, precise millimeter-level control, potential for remote telestenting.\n' +
        '- First-in-human long-distance telestenting demonstrated. Future: AI-guided autonomous robotic PCI.\n\n' +
        '**Paradigm Shift — Plaque Modification:**\n' +
        '- Moving from vessel opening to plaque stabilization and regression:\n' +
        '  - High-intensity statin therapy: Plaque regression documented on serial IVUS (GLAGOV, ASTEROID trials)\n' +
        '  - PCSK9 inhibitors + statins: Greater regression with lower LDL (FOURIER sub-studies)\n' +
        '  - Colchicine: Anti-inflammatory reducing CRP and events (COLCOT, LoDoCo2)\n' +
        '  - IL-1beta inhibition: CANTOS trial — canakinumab reduced MACE independent of lipid lowering\n' +
        '- Concept of "optimal PCI" evolving: Combine mechanical intervention with aggressive systemic plaque stabilization\n\n' +
        '**Future Directions:**\n' +
        '- Intracoronary gene therapy: Local delivery of growth factors for therapeutic angiogenesis\n' +
        '- Photodynamic therapy: Photosensitizer-activated plaque ablation\n' +
        '- Intravascular brachytherapy revival for refractory restenosis\n' +
        '- AI-guided real-time PCI optimization using intravascular imaging',
      keyTerms: [
        { term: 'Bioresorbable vascular scaffold', definition: 'Temporary coronary scaffolding that dissolves over 2-3 years, designed to restore vasomotion and eliminate permanent implant risks' },
        { term: 'Drug-coated balloon', definition: 'Angioplasty balloon coated with antiproliferative drug for lesion treatment without permanent implant; established for in-stent restenosis' },
        { term: 'Virtual PCI', definition: 'Computational simulation predicting hemodynamic outcome of stenting from pre-PCI physiological data, enabling optimized procedure planning' },
        { term: 'Robotic PCI', definition: 'Robotic catheter manipulation system (CorPath) enabling precise remote-controlled coronary intervention with reduced radiation exposure' },
        { term: 'Radiomics', definition: 'Computational extraction of quantitative imaging features from CCTA for non-invasive plaque characterization and risk prediction' },
      ],
      clinicalNotes: 'The failure of first-generation BVS underscores that innovation requires long-term outcome data before adoption. Drug-coated balloons are a promising stent-free strategy for specific indications. The convergence of aggressive medical therapy (PCSK9 inhibitors, anti-inflammatories) with interventional approaches represents a comprehensive strategy for CAD management. AI and robotics are poised to transform procedural planning and execution.',
    },
  },

  media: [
    { id: 'pci-procedure', type: 'diagram', filename: 'pci-procedure-steps.svg', title: 'PCI Procedure Steps', description: 'Step-by-step illustration of coronary angioplasty and stent deployment' },
    { id: 'stent-types', type: 'diagram', filename: 'stent-types-comparison.svg', title: 'Stent Types Comparison', description: 'Comparison of BMS, DES, DCB, and BVS technologies' },
  ],
  citations: [
    { id: 'neumann-2019-pci', type: 'article', title: '2018 ESC/EACTS Guidelines on Myocardial Revascularization', authors: ['Neumann, F.J.', 'Sousa-Uva, M.'], source: 'European Heart Journal' },
    { id: 'lawton-2022-revascularization', type: 'article', title: '2021 ACC/AHA/SCAI Guideline for Coronary Artery Revascularization', authors: ['Lawton, J.S.', 'Tamis-Holland, J.E.'], source: 'Circulation' },
  ],
  crossReferences: [
    { targetId: 'ecg-interpretation', targetType: 'concept', relationship: 'related', label: 'ECG Interpretation' },
    { targetId: 'echocardiography', targetType: 'concept', relationship: 'related', label: 'Echocardiography' },
    { targetId: 'heart-failure-management', targetType: 'concept', relationship: 'see-also', label: 'Heart Failure Management' },
  ],
  tags: {
    systems: ['cardiovascular'],
    topics: ['interventional-cardiology', 'cardiology', 'procedures'],
    keywords: ['PCI', 'stent', 'coronary intervention', 'DAPT', 'FFR', 'drug-eluting stent', 'CTO'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'surgery'] },
  },
  createdAt: '2025-01-30',
  updatedAt: '2025-01-30',
  version: 1,
  status: 'published',
};
