import { EducationalContent } from '../../types';

/**
 * Echocardiography
 *
 * Comprehensive educational content on echocardiographic assessment
 * including TTE, TEE, stress echo, advanced modalities (strain, 3D),
 * and clinical applications across cardiac pathology.
 */
export const echocardiography: EducationalContent = {
  id: 'echocardiography',
  type: 'concept',
  name: 'Echocardiography',
  nameEs: 'Ecocardiografia',
  alternateNames: ['Cardiac Ultrasound', 'Echo', 'Cardiac Echocardiography'],

  levels: {
    1: {
      level: 1,
      summary: 'An echocardiogram (echo) uses sound waves to create a moving picture of your heart, showing how well it pumps and whether the valves are working properly.',
      explanation:
        'An echocardiogram is an ultrasound of the heart. Just like the ultrasound used to see a baby during pregnancy, ' +
        'it uses sound waves that bounce off the heart to create pictures on a screen.\n\n' +
        '**What it shows:**\n' +
        '- The size of the heart chambers\n' +
        '- How well the heart muscle pumps (squeezes and relaxes)\n' +
        '- Whether the heart valves are opening and closing properly\n' +
        '- Whether there is fluid around the heart\n\n' +
        '**Types of echocardiograms:**\n' +
        '- **Transthoracic echo (TTE)**: The most common type. A technician places a probe on your chest and moves it around to get different views. Takes about 30-45 minutes.\n' +
        '- **Transesophageal echo (TEE)**: A small probe is passed down your throat (like a thin tube) to get clearer pictures from behind the heart. Used when TTE pictures are not clear enough or before certain procedures.\n' +
        '- **Stress echo**: An echo done during exercise or after medication that makes the heart beat faster. Helps detect problems that only show up when the heart is working hard.\n\n' +
        'The test is painless (for TTE) and uses no radiation, making it very safe.',
      keyTerms: [
        { term: 'Echocardiogram', definition: 'An ultrasound test that creates pictures of the heart using sound waves', pronunciation: 'EK-oh-kar-dee-oh-gram' },
        { term: 'Transthoracic echo (TTE)', definition: 'An echo done from outside the chest using a probe placed on the skin' },
        { term: 'Transesophageal echo (TEE)', definition: 'An echo done using a small probe placed in the esophagus for clearer heart images' },
      ],
      analogies: [
        'An echo is like sonar on a submarine — it sends out sound waves that bounce back to create a picture of what is inside.',
        'The difference between TTE and TEE is like looking at a building from the street (TTE) versus from inside through a window (TEE) — the inside view is often clearer.',
      ],
      patientCounselingPoints: [
        'TTE is painless and takes about 30-45 minutes. You may feel slight pressure from the probe on your chest.',
        'For TEE, your throat will be numbed and you will receive sedation to stay comfortable.',
        'The test uses no radiation and is very safe — it can be repeated as often as needed.',
      ],
    },

    2: {
      level: 2,
      summary: 'Echocardiography provides real-time assessment of cardiac structure and function using 2D imaging, M-mode, Doppler (spectral and color flow), and is the primary imaging modality for evaluating ventricular function, valvular disease, and pericardial conditions.',
      explanation:
        '**Imaging Modes:**\n\n' +
        '- **2D (B-mode)**: Real-time cross-sectional images of the heart. Standard views include parasternal long axis (PLAX), parasternal short axis (PSAX), apical 4-chamber (A4C), apical 2-chamber (A2C), and subcostal.\n' +
        '- **M-mode**: Ice-pick view showing motion over time along a single line. Used for precise measurements (LV dimensions, aortic root, mitral valve excursion).\n' +
        '- **Doppler Ultrasound**:\n' +
        '  - **Pulsed-wave (PW) Doppler**: Measures blood flow velocity at a specific location. Limited by aliasing at high velocities.\n' +
        '  - **Continuous-wave (CW) Doppler**: Measures peak velocities along the entire beam path. Used for high-velocity jets (aortic stenosis, MR).\n' +
        '  - **Color flow Doppler**: Overlays color on 2D image showing direction and turbulence of blood flow. Red = toward probe, Blue = away.\n' +
        '  - **Tissue Doppler imaging (TDI)**: Measures myocardial velocities (e\', a\', s\') at the mitral annulus for diastolic function assessment.\n\n' +
        '**Key Measurements:**\n' +
        '- **LVEF (Left Ventricular Ejection Fraction)**: Percentage of blood ejected per beat. Normal >= 55%. Measured by biplane Simpson method (A4C + A2C views).\n' +
        '- **LV dimensions**: LVEDD (normal < 56 mm), LVESD (normal < 40 mm), wall thickness (normal 6-11 mm)\n' +
        '- **Left atrial volume index**: Normal < 34 mL/m2; enlargement indicates chronic pressure/volume overload\n' +
        '- **Aortic root dimensions**: Important for aneurysm surveillance (normal < 40 mm)\n\n' +
        '**Diastolic Function Assessment:**\n' +
        '- **Grade I (impaired relaxation)**: E/A < 0.8, e\' reduced, normal LA volume\n' +
        '- **Grade II (pseudonormal)**: E/A 0.8-2.0, elevated E/e\', enlarged LA\n' +
        '- **Grade III (restrictive)**: E/A > 2.0, markedly elevated E/e\', markedly enlarged LA\n\n' +
        '**Stress Echocardiography:**\n' +
        'Exercise (treadmill or bicycle) or pharmacological (dobutamine) stress to detect:\n' +
        '- Ischemia: New wall motion abnormalities in coronary territories\n' +
        '- Viability: Dobutamine-induced improvement in akinetic segments suggests hibernating myocardium\n' +
        '- Dynamic valvular disease: Exercise-induced MR or gradient changes',
      keyTerms: [
        { term: 'Biplane Simpson method', definition: 'Gold standard for LVEF calculation using manual tracing of LV endocardium in apical 4-chamber and 2-chamber views' },
        { term: 'Doppler ultrasound', definition: 'Technique measuring blood flow velocity by detecting frequency shift of reflected sound waves' },
        { term: 'Tissue Doppler imaging (TDI)', definition: 'Echo technique measuring myocardial velocities at the mitral annulus for diastolic function assessment (e\', a\', s\')' },
        { term: 'Color flow Doppler', definition: 'Echo mode overlaying color on 2D images to show blood flow direction and detect regurgitation or shunts' },
        { term: 'Diastolic dysfunction', definition: 'Impaired ventricular relaxation and/or compliance graded I-III by echo parameters including E/A ratio and E/e\' ratio' },
      ],
      examples: [
        'A patient with dyspnea has echo showing LVEF 25% by biplane Simpson, confirming systolic heart failure.',
        'Dobutamine stress echo in a patient with an akinetic inferior wall shows contractile improvement — viable (hibernating) myocardium that may benefit from revascularization.',
      ],
    },

    3: {
      level: 3,
      summary: 'Advanced echocardiography incorporates speckle-tracking strain, 3D echo, hemodynamic calculations (cardiac output, valve area, intracardiac pressures), and protocol-driven assessments for specific pathologies.',
      explanation:
        '**Speckle-Tracking Echocardiography (STE):**\n' +
        '- Tracks acoustic speckle patterns frame-to-frame to measure myocardial deformation\n' +
        '- **Global Longitudinal Strain (GLS)**: Normal < -18% (more negative = better function). Detects subclinical LV dysfunction before EF drops.\n' +
        '- Clinical applications: Chemotherapy cardiotoxicity surveillance (GLS drop >15% relative = significant), HCM risk stratification, infiltrative cardiomyopathy detection\n' +
        '- Regional strain patterns: Apical sparing in cardiac amyloidosis ("cherry on top" or "bull\'s eye" pattern), base-to-apex gradient\n' +
        '- Layer-specific strain: Endocardial vs. epicardial deformation; subendocardial dysfunction in early ischemia\n\n' +
        '**3D Echocardiography:**\n' +
        '- More accurate LV volumes and LVEF than 2D (less foreshortening and geometric assumptions)\n' +
        '- Essential for: Mitral valve surgical planning (en-face view), LAA assessment before closure, complex CHD\n' +
        '- 3D color Doppler for accurate vena contracta area measurement in MR\n\n' +
        '**Hemodynamic Calculations:**\n' +
        '- **Stroke volume (SV)**: LVOT diameter squared x 0.785 x LVOT VTI\n' +
        '- **Cardiac output**: SV x Heart rate\n' +
        '- **Aortic valve area (continuity equation)**: AVA = (LVOT area x LVOT VTI) / Aortic VTI\n' +
        '- **Estimated RVSP**: 4 x (TR velocity)^2 + RAP\n' +
        '- **E/e\' ratio**: Estimates LV filling pressure. E/e\' > 14 = elevated; < 8 = normal; 8-14 = indeterminate\n' +
        '- **PISA method for regurgitant orifice**: EROA = 2 x pi x r^2 x Va / Vmax (where r = aliasing radius)\n\n' +
        '**Protocol-Driven Assessments:**\n' +
        '- **Pre-TAVR echo**: Aortic valve morphology, annular sizing, LVOT dimensions, LV function, concomitant MR/AR\n' +
        '- **Intraoperative TEE**: Guide surgical repair (MV repair adequacy, residual regurgitation, air removal)\n' +
        '- **Focused cardiac ultrasound (FoCUS/POCUS)**: Rapid bedside assessment for pericardial effusion, LV function, volume status. Not a comprehensive echo.\n' +
        '- **Right heart assessment**: TAPSE (< 17 mm = RV dysfunction), RV FAC (< 35% = abnormal), RV free wall strain (< -20% = abnormal)\n\n' +
        '**Contrast Echocardiography:**\n' +
        '- Agitated saline (bubble study): Detects intracardiac shunts (ASD, PFO). Bubbles appearing in LA within 3-5 beats = intracardiac shunt.\n' +
        '- Ultrasound enhancing agents (Definity, Lumason): Improve endocardial border detection for accurate LVEF when image quality is poor.',
      keyTerms: [
        { term: 'Global longitudinal strain (GLS)', definition: 'Speckle-tracking measure of longitudinal myocardial deformation; normal < -18%. More sensitive than EF for detecting early dysfunction' },
        { term: 'Continuity equation', definition: 'Principle of conservation of mass used to calculate aortic valve area from LVOT and aortic Doppler velocities' },
        { term: 'PISA method', definition: 'Proximal isovelocity surface area method using color Doppler aliasing radius to calculate effective regurgitant orifice area' },
        { term: '3D echocardiography', definition: 'Real-time volumetric echo providing more accurate LV volumes, EF, and en-face valve visualization' },
        { term: 'TAPSE', definition: 'Tricuspid annular plane systolic excursion — simple M-mode measure of RV longitudinal function; < 17 mm indicates RV dysfunction' },
        { term: 'Bubble study', definition: 'Injection of agitated saline to detect intracardiac shunts by observing bubble passage between cardiac chambers' },
      ],
      examples: [
        'A patient on doxorubicin chemotherapy with baseline GLS of -21% drops to -17% at follow-up (>15% relative reduction) — hold chemotherapy and reassess.',
        'Suspected cardiac amyloidosis: GLS bull\'s eye plot shows preserved apical strain with severely reduced basal/mid strain — pathognomonic "apical sparing" pattern.',
      ],
      clinicalNotes: 'GLS is increasingly incorporated into routine practice for early detection of cardiotoxicity and infiltrative diseases. Vendor-dependent variability in strain values remains a limitation — serial studies should use the same platform. POCUS is a screening tool, not a replacement for comprehensive echocardiography.',
    },

    4: {
      level: 4,
      summary: 'Expert echocardiography encompasses advanced hemodynamic assessment, intracardiac echo for structural interventions, multimodality integration, and quantitative analysis of complex pathologies.',
      explanation:
        '**Advanced Hemodynamic Assessment:**\n' +
        '- **Non-invasive estimation of LV dP/dt**: From the MR CW Doppler signal, measuring time from 1 m/s to 3 m/s. Normal > 1200 mmHg/s; reduced in systolic dysfunction.\n' +
        '- **Myocardial performance index (Tei index)**: (IVCT + IVRT) / ET. Reflects combined systolic and diastolic function. Normal < 0.40 (PW Doppler).\n' +
        '- **Pulmonary vein flow analysis**: S/D ratio, A-wave reversal duration. A-reversal > mitral A duration by >30 ms indicates elevated LVEDP.\n' +
        '- **Hepatic vein Doppler**: Systolic flow reversal indicates severe tricuspid regurgitation.\n' +
        '- **Constrictive vs. restrictive physiology**: Respiratory variation in mitral inflow (>25% E velocity variation in constriction vs. <15% in restriction), ' +
        'annulus paradoxus (preserved e\' in constriction), septal bounce, and IVC plethora.\n\n' +
        '**Intracardiac Echocardiography (ICE):**\n' +
        'Catheter-based ultrasound (AcuNav, ViewFlex) providing real-time guidance for:\n' +
        '- Transseptal puncture: Visualizing interatrial septum and tenting\n' +
        '- LAA closure (Watchman): Device deployment and leak assessment\n' +
        '- PFO/ASD closure: Sizing and device positioning\n' +
        '- Electrophysiology: Catheter positioning, ablation lesion monitoring\n' +
        '- Advantages over TEE: No general anesthesia needed, single operator can image and intervene\n\n' +
        '**Strain Beyond GLS:**\n' +
        '- **Right ventricular free wall strain**: Normal < -20%. More sensitive than TAPSE for RV dysfunction.\n' +
        '- **Left atrial strain**: Reservoir strain (normal > 39%) declining before structural changes — early diastolic dysfunction marker\n' +
        '- **Mechanical dispersion**: Standard deviation of time-to-peak strain across segments; increased dispersion predicts ventricular arrhythmias\n' +
        '- **Layer-specific strain**: Endo/epi ratio altered early in ischemia, hypertrophy, and infiltrative disease\n\n' +
        '**Multimodality Integration:**\n' +
        '- Echo-CT fusion: Real-time overlay of CT-derived anatomy on echo for structural interventions\n' +
        '- Echo-guided CMR: Using echo findings to direct CMR sequences (LGE patterns, T1/T2 mapping targets)\n' +
        '- 4D echo + CFD: Combining 3D echo volumes with computational fluid dynamics for flow visualization\n\n' +
        '**Artificial Intelligence in Echo:**\n' +
        '- Automated view classification and quality assessment\n' +
        '- AI-guided LVEF measurement (AutoEF) with near-expert accuracy\n' +
        '- Automated valve assessment and severity grading\n' +
        '- Deep learning for detection of rare conditions (cardiac amyloidosis, HCM) from standard echo views',
      keyTerms: [
        { term: 'Intracardiac echocardiography (ICE)', definition: 'Catheter-based ultrasound providing real-time imaging during structural heart and EP procedures without general anesthesia' },
        { term: 'Left atrial strain', definition: 'Speckle-tracking measure of LA deformation; reservoir strain is an early marker of diastolic dysfunction and AF substrate' },
        { term: 'Mechanical dispersion', definition: 'Variation in timing of peak myocardial contraction across segments; increased dispersion predicts ventricular arrhythmias' },
        { term: 'Annulus paradoxus', definition: 'Preserved or elevated e\' velocity in constrictive pericarditis despite elevated filling pressures, helping differentiate from restriction' },
        { term: 'dP/dt', definition: 'Rate of LV pressure rise estimated from MR CW Doppler; reflects LV contractility independent of loading conditions' },
      ],
      clinicalNotes: 'LA strain is emerging as a powerful biomarker that predicts AF development, stroke risk beyond CHA2DS2-VASc, and outcomes in HFpEF. ICE has largely replaced TEE for many structural procedures, reducing anesthesia requirements. AI-powered echo interpretation is approaching expert-level performance for standard measurements but still requires human oversight for complex pathology.',
    },

    5: {
      level: 5,
      summary: 'Cutting-edge echocardiography research encompasses ultrafast imaging, shear wave elastography, photoacoustic imaging, advanced AI applications, and the integration of echo with computational modeling for precision cardiovascular medicine.',
      explanation:
        '**Ultrafast Echocardiography:**\n' +
        '- Plane wave imaging achieves frame rates >1000 fps (vs. conventional ~30-80 fps)\n' +
        '- Enables: Electromechanical wave imaging (EWI) tracking depolarization propagation non-invasively; ' +
        'pulse wave velocity measurement for arterial stiffness; transient shear wave elastography for myocardial stiffness\n' +
        '- EWI has been used to map ectopic foci and accessory pathways non-invasively in research settings\n\n' +
        '**Myocardial Shear Wave Elastography:**\n' +
        '- Measures myocardial stiffness (shear modulus in kPa) using acoustic radiation force-induced shear waves\n' +
        '- Direct measurement of diastolic stiffness — could transform HFpEF diagnosis by providing a non-invasive surrogate for LVEDP\n' +
        '- Current limitations: Cardiac motion artifact, limited depth penetration, lack of standardization\n\n' +
        '**Photoacoustic Imaging:**\n' +
        '- Combines ultrasound detection with pulsed laser excitation for molecular contrast\n' +
        '- Potential applications: Myocardial oxygenation mapping, inflammation imaging (macrophage targeting), thrombus detection\n' +
        '- Currently limited to superficial structures; intravascular photoacoustic (IVPA) imaging characterizes coronary plaque composition\n\n' +
        '**Advanced AI Applications:**\n' +
        '- **Foundation models**: Large vision-language models trained on millions of echo studies for automated comprehensive interpretation\n' +
        '- **Phenotyping**: Unsupervised learning on echo features identifies novel disease clusters beyond traditional diagnostic categories\n' +
        '- **Prognosis**: Video-level deep learning predicting mortality, HF hospitalization, and sudden death from routine echo\n' +
        '- **Federated learning**: Multi-center model training without sharing patient data, addressing privacy while improving generalizability\n' +
        '- **Digital twins**: Patient-specific computational heart models calibrated to echo data for treatment simulation\n\n' +
        '**Contrast-Enhanced Ultrasonics (CEUS):**\n' +
        '- Myocardial contrast perfusion imaging: Real-time assessment of microvascular perfusion during stress testing\n' +
        '- Targeted microbubbles: Conjugated with antibodies against VCAM-1, P-selectin, or fibrin for molecular imaging of inflammation, endothelial activation, and thrombus\n' +
        '- Therapeutic ultrasound: Microbubble-enhanced drug delivery (sonoporation) for targeted cardiac therapy; sonothrombolysis for coronary thrombosis\n\n' +
        '**Integration with Computational Modeling:**\n' +
        '- Echo-derived patient-specific biomechanical models for surgical simulation\n' +
        '- 3D echo + FEM for predicting CRT response based on mechanical dyssynchrony\n' +
        '- 4D flow reconstruction from 2D color Doppler (no MRI needed) using physics-informed neural networks\n\n' +
        '**Emerging Hardware:**\n' +
        '- CMUT (capacitive micromachined ultrasonic transducers): Semiconductor-manufactured probes with wider bandwidth and potential for wearable form factors\n' +
        '- Wearable continuous echocardiography: Patch-based ultrasound for ambulatory monitoring of EF, strain, and cardiac output\n' +
        '- Handheld AI-powered devices: Democratizing echo access in resource-limited settings with automated interpretation',
      keyTerms: [
        { term: 'Ultrafast echocardiography', definition: 'Plane wave imaging at >1000 fps enabling shear wave elastography and electromechanical wave imaging of the heart' },
        { term: 'Shear wave elastography', definition: 'Technique measuring tissue stiffness using acoustic radiation force-induced shear waves; potential non-invasive measure of diastolic stiffness' },
        { term: 'Electromechanical wave imaging (EWI)', definition: 'Non-invasive mapping of cardiac electrical activation by tracking ultrasound-derived mechanical waves at ultrafast frame rates' },
        { term: 'Targeted microbubbles', definition: 'Contrast agents conjugated with molecular ligands for imaging specific pathological processes (inflammation, thrombosis) by ultrasound' },
        { term: 'Physics-informed neural networks', definition: 'AI models incorporating physical laws (Navier-Stokes equations) to reconstruct 4D flow from limited 2D echo data' },
      ],
      clinicalNotes: 'Wearable continuous echo monitoring could transform ambulatory HF management by providing real-time hemodynamic data. Myocardial shear wave elastography has the potential to replace invasive hemodynamic assessment for HFpEF diagnosis but requires significant technical development. AI-powered handheld echo devices are being validated for screening in low-resource settings, potentially democratizing access to cardiac imaging worldwide.',
    },
  },

  media: [
    { id: 'echo-standard-views', type: 'diagram', filename: 'echo-standard-views.svg', title: 'Standard Echo Views', description: 'Illustration of standard echocardiographic imaging windows and views' },
    { id: 'strain-bullseye', type: 'diagram', filename: 'gls-bullseye-patterns.svg', title: 'GLS Bull\'s Eye Patterns', description: 'Characteristic strain patterns in normal, ischemic, and amyloidosis' },
  ],
  citations: [
    { id: 'mitchell-ase-guidelines', type: 'article', title: 'ASE Guidelines for Chamber Quantification', authors: ['Lang, R.M.', 'Badano, L.P.'], source: 'JASE' },
    { id: 'nagueh-diastolic', type: 'article', title: 'ASE/EACVI Recommendations for Diastolic Function Evaluation', authors: ['Nagueh, S.F.'], source: 'JASE' },
  ],
  crossReferences: [
    { targetId: 'ecg-interpretation', targetType: 'concept', relationship: 'related', label: 'ECG Interpretation' },
    { targetId: 'aortic-stenosis', targetType: 'condition', relationship: 'related', label: 'Aortic Stenosis' },
    { targetId: 'heart-failure-classification', targetType: 'concept', relationship: 'related', label: 'Heart Failure Classification' },
  ],
  tags: {
    systems: ['cardiovascular'],
    topics: ['imaging', 'diagnostics', 'cardiology'],
    keywords: ['echocardiography', 'TTE', 'TEE', 'strain', 'Doppler', 'LVEF', 'diastolic function'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine'] },
  },
  createdAt: '2025-01-30',
  updatedAt: '2025-01-30',
  version: 1,
  status: 'published',
};
