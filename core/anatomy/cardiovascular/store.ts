/**
 * Cardiovascular System Data Store
 *
 * Contains heart anatomy, conduction system, arteries, and veins
 * with educational content at 5 complexity levels.
 */

import type {
  HeartChamber,
  CardiacValve,
  ConductionNode,
  BloodVessel,
  CardiovascularRegion,
  CardiacCyclePhase,
  CoronaryTerritory,
  ECGCorrelation,
  CardiovascularStatistics,
} from './types';

// In-memory stores
const chambers = new Map<string, HeartChamber>();
const valves = new Map<string, CardiacValve>();
const conductionNodes = new Map<string, ConductionNode>();
const vessels = new Map<string, BloodVessel>();

// Indexes
const vesselsByRegion = new Map<CardiovascularRegion, string[]>();
const vesselsByName = new Map<string, string>();

/**
 * Initialize heart chambers
 */
function initializeChambers(): void {
  const rightAtrium: HeartChamber = {
    id: 'right-atrium',
    name: 'Right Atrium',
    latinName: 'Atrium dextrum',
    fmaId: 'FMA:7096',
    location: 'Upper right portion of the heart',
    function: 'Receives deoxygenated blood from the body via the SVC and IVC',
    receivesFrom: ['superior-vena-cava', 'inferior-vena-cava', 'coronary-sinus'],
    drainsTo: ['right-ventricle'],
    wallThickness: '2 mm',
    normalPressure: { systolic: 6, diastolic: 3, unit: 'mmHg' },
    explanations: {
      level1: 'The right atrium is like a waiting room for blood coming back from your body. Blood that has delivered oxygen to your muscles and organs comes here first. Then it gets passed down to the right ventricle.',
      level2: 'The right atrium receives deoxygenated blood from two large veins: the superior vena cava (from the upper body) and inferior vena cava (from the lower body). It pumps blood into the right ventricle through the tricuspid valve.',
      level3: 'The right atrium receives systemic venous return via the SVC, IVC, and coronary sinus. It contains the sinoatrial node (pacemaker) and interatrial septum with the fossa ovalis (remnant of foramen ovale). The crista terminalis separates the smooth and trabeculated portions.',
      level4: 'The right atrium wall includes pectinate muscles anteriorly and a smooth posterior sinus venarum derived from the sinus venosus. The SA node is located at the junction of the SVC and right atrium. Right atrial pressure monitoring (CVP) reflects systemic venous pressure and right heart function.',
      level5: 'RA pressure waveform shows a, c, and v waves corresponding to atrial contraction, tricuspid closure, and venous filling. Elevated RAP suggests right heart failure, tricuspid disease, or pericardial constriction. RA myxoma is the most common primary cardiac tumor. AF often originates from pulmonary vein-LA junction but affects RA conduction.',
    },
    keyFacts: [
      'Receives blood from SVC, IVC, and coronary sinus',
      'Contains the SA node (pacemaker)',
      'Low-pressure chamber (3-6 mmHg)',
      'Thin wall compared to ventricles',
      'Fossa ovalis marks former foramen ovale',
    ],
    clinicalNotes: [
      'CVP monitoring catheter tip positioned here',
      'Right heart catheterization access point',
      'Atrial septal defects occur in interatrial septum',
    ],
  };

  const leftAtrium: HeartChamber = {
    id: 'left-atrium',
    name: 'Left Atrium',
    latinName: 'Atrium sinistrum',
    fmaId: 'FMA:7097',
    location: 'Upper left and posterior portion of the heart',
    function: 'Receives oxygenated blood from the lungs via four pulmonary veins',
    receivesFrom: ['pulmonary-vein-right-superior', 'pulmonary-vein-right-inferior', 'pulmonary-vein-left-superior', 'pulmonary-vein-left-inferior'],
    drainsTo: ['left-ventricle'],
    wallThickness: '3 mm',
    normalPressure: { systolic: 12, diastolic: 6, unit: 'mmHg' },
    explanations: {
      level1: 'The left atrium receives fresh, oxygen-rich blood coming from your lungs. Think of it as collecting all that good blood before sending it down to the strongest part of your heart - the left ventricle.',
      level2: 'The left atrium receives oxygenated blood from four pulmonary veins (two from each lung). It has slightly thicker walls than the right atrium because it works against higher pressure. Blood flows through the mitral valve into the left ventricle.',
      level3: 'The left atrium forms the posterior heart base and receives the four pulmonary veins. Its wall is slightly thicker than the right atrium. The left atrial appendage (LAA) is a common site of thrombus formation in atrial fibrillation. The interatrial septum shows the valve of the foramen ovale.',
      level4: 'The pulmonary vein ostia are common foci for atrial fibrillation, which is why pulmonary vein isolation is an effective ablation strategy. LA enlargement (dilated LAP) occurs with mitral valve disease and is assessed by LA diameter and volume on echo. PCWP approximates LAP.',
      level5: 'LA appendage exclusion/occlusion (Watchman device, LARIAT, surgical) reduces stroke risk in AF patients who cannot tolerate anticoagulation. LA strain on speckle tracking echo predicts outcomes. 3D echo and CT assess LA volumes and LAA morphology (chicken wing, cactus, windsock, cauliflower) for procedural planning.',
    },
    keyFacts: [
      'Receives oxygenated blood from 4 pulmonary veins',
      'Most posterior cardiac chamber',
      'Left atrial appendage is thrombus formation site in AF',
      'LA pressure approximated by PCWP',
      'Enlargement indicates mitral valve disease',
    ],
    clinicalNotes: [
      'AF ablation targets pulmonary vein ostia',
      'LA appendage occlusion for stroke prevention',
      'Enlarged LA visible on lateral CXR',
    ],
  };

  const rightVentricle: HeartChamber = {
    id: 'right-ventricle',
    name: 'Right Ventricle',
    latinName: 'Ventriculus dexter',
    fmaId: 'FMA:7098',
    location: 'Anterior heart, behind the sternum',
    function: 'Pumps deoxygenated blood to the lungs via the pulmonary artery',
    receivesFrom: ['right-atrium'],
    drainsTo: ['pulmonary-trunk'],
    wallThickness: '3-5 mm',
    normalPressure: { systolic: 25, diastolic: 4, unit: 'mmHg' },
    explanations: {
      level1: 'The right ventricle is like a pump that pushes blood to your lungs. It sits at the front of your heart, right behind your breastbone. It doesn\'t need to be as strong as the left ventricle because the lungs are close by.',
      level2: 'The right ventricle pumps blood through the pulmonary valve into the pulmonary artery, sending it to the lungs to pick up oxygen. It has thinner walls than the left ventricle because it only needs to pump blood a short distance to the lungs.',
      level3: 'The right ventricle has a crescent-shaped cavity with heavy trabeculation. The moderator band (septomarginal trabecula) carries conduction fibers to the anterior papillary muscle. Inflow and outflow tracts are separated by the supraventricular crest. The pulmonary valve is at the superoanterior aspect.',
      level4: 'RV function is dependent on LV function via ventricular interdependence. The RV free wall derives from the secondary heart field. RV pressure overload (pulmonary hypertension) causes RVH and eventual failure. TAPSE and RV fractional area change assess RV function.',
      level5: 'RV failure is the leading cause of death in pulmonary arterial hypertension. Arrhythmogenic RV cardiomyopathy (ARVC) presents with RV dilation and ventricular arrhythmias. RV infarction (from RCA occlusion) requires preload optimization - avoid nitrates and diuretics. Congenital lesions like Ebstein anomaly and RVOT obstruction affect RV.',
    },
    keyFacts: [
      'Pumps blood to pulmonary circulation',
      'Thinner wall than LV (low-pressure circuit)',
      'Contains moderator band with conduction tissue',
      'Crescent-shaped in cross-section',
      'Most anterior cardiac chamber',
    ],
    clinicalNotes: [
      'RV failure in pulmonary hypertension',
      'RV infarction: preload-dependent',
      'ARVC: fibro-fatty replacement of RV',
    ],
  };

  const leftVentricle: HeartChamber = {
    id: 'left-ventricle',
    name: 'Left Ventricle',
    latinName: 'Ventriculus sinister',
    fmaId: 'FMA:7101',
    location: 'Left posterior heart, forming the cardiac apex',
    function: 'Pumps oxygenated blood to the entire body via the aorta',
    receivesFrom: ['left-atrium'],
    drainsTo: ['aorta'],
    wallThickness: '10-15 mm',
    normalPressure: { systolic: 120, diastolic: 8, unit: 'mmHg' },
    explanations: {
      level1: 'The left ventricle is the strongest part of your heart - it\'s like the main engine! It has thick, muscular walls because it needs to push blood all the way from your heart to your toes and back up to your head.',
      level2: 'The left ventricle pumps oxygen-rich blood through the aortic valve into the aorta, which distributes it throughout the body. Its walls are 3-4 times thicker than the right ventricle because it must generate much higher pressure.',
      level3: 'The left ventricle is conical with fine trabeculation. The interventricular septum (muscular and membranous portions) separates it from the RV. Two papillary muscles (anterolateral and posteromedial) attach to mitral valve leaflets via chordae tendineae. The apex forms the PMI.',
      level4: 'LV function is assessed by ejection fraction (normal >55%). The LV develops from the primary heart field. The aortomitral continuity (fibrous skeleton) connects valves. LV pressure-volume loops illustrate cardiac physiology. Diastolic function assessment includes E/A ratio, e\' velocity, and E/e\' ratio.',
      level5: 'LV remodeling post-MI involves thinning, dilation, and scar formation. HFrEF (EF<40%) vs HFpEF (EF>50%) have different pathophysiology and treatments. LV assist devices (LVAD) support failing LV. Cardiac MRI with late gadolinium enhancement detects fibrosis. Global longitudinal strain is a sensitive marker of LV dysfunction.',
    },
    keyFacts: [
      'Pumps blood to systemic circulation',
      'Thickest wall of all chambers (10-15mm)',
      'Forms the cardiac apex',
      'Assessed by ejection fraction',
      'Two papillary muscles for mitral valve',
    ],
    clinicalNotes: [
      'MI location mapped by ECG leads and coronary territory',
      'LVH from hypertension or aortic stenosis',
      'LVAD for end-stage heart failure',
    ],
  };

  chambers.set('right-atrium', rightAtrium);
  chambers.set('left-atrium', leftAtrium);
  chambers.set('right-ventricle', rightVentricle);
  chambers.set('left-ventricle', leftVentricle);
}

/**
 * Initialize cardiac valves
 */
function initializeValves(): void {
  const mitralValve: CardiacValve = {
    id: 'mitral-valve',
    name: 'Mitral Valve',
    latinName: 'Valva mitralis',
    fmaId: 'FMA:7235',
    type: 'atrioventricular',
    location: 'Between left atrium and left ventricle',
    cusps: 2,
    cuspNames: ['Anterior (aortic) leaflet', 'Posterior (mural) leaflet'],
    function: 'Prevents backflow of blood from LV to LA during systole',
    auscultationPoint: 'Cardiac apex, 5th intercostal space, midclavicular line',
    normalSounds: 'S1 (closure sound)',
    explanations: {
      level1: 'The mitral valve is like a door between the upper and lower left chambers of your heart. It has two flaps (that\'s why it\'s also called the bicuspid valve) that open to let blood through, then snap shut to keep it from flowing backwards.',
      level2: 'The mitral valve has two leaflets that open during diastole to allow blood to flow from the left atrium to the left ventricle. When the ventricle contracts, the valve closes to prevent backflow. Thin cords (chordae tendineae) attached to papillary muscles prevent the leaflets from prolapsing.',
      level3: 'The mitral valve apparatus includes the annulus, anterior and posterior leaflets, chordae tendineae, and papillary muscles. The anterior leaflet is larger and continuous with the aortic valve (aortomitral continuity). Mitral annular plane systolic excursion (MAPSE) reflects longitudinal LV function.',
      level4: 'Mitral valve anatomy is critical for repair vs replacement decisions. P1-P2-P3 and A1-A2-A3 designate scallops. Prolapse commonly affects P2. Barlow disease involves myxomatous degeneration. Carpentier classification guides repair strategy. 3D echo and TEE are essential for procedural planning.',
      level5: 'MitraClip provides transcatheter edge-to-edge repair for high-surgical-risk patients. Functional MR from LV dilation has worse prognosis than primary MR. Severe MR criteria: regurgitant volume >60mL, EROA >0.4cm². Post-MI MR from papillary muscle rupture is a surgical emergency.',
    },
    keyFacts: [
      'Two leaflets (bicuspid valve)',
      'Most commonly affected valve in rheumatic heart disease',
      'Best heard at cardiac apex',
      'Attached to papillary muscles via chordae',
      'Mitral valve prolapse affects 2-3% of population',
    ],
    pathologies: [
      {
        name: 'Mitral stenosis',
        description: 'Narrowing of mitral valve orifice',
        murmurCharacteristics: 'Low-pitched diastolic rumble with opening snap',
        etiology: ['Rheumatic heart disease', 'Calcification'],
        symptoms: ['Dyspnea', 'Fatigue', 'Hemoptysis', 'Atrial fibrillation'],
        relevantTests: ['Echo', 'Cardiac catheterization'],
      },
      {
        name: 'Mitral regurgitation',
        description: 'Incompetence allowing backflow to LA',
        murmurCharacteristics: 'Holosystolic murmur at apex radiating to axilla',
        etiology: ['MVP', 'Rheumatic', 'Ischemic', 'Endocarditis'],
        symptoms: ['Dyspnea', 'Fatigue', 'Palpitations'],
        relevantTests: ['Echo', 'Cardiac MRI'],
      },
      {
        name: 'Mitral valve prolapse',
        description: 'Leaflet prolapse into LA during systole',
        murmurCharacteristics: 'Mid-systolic click, late systolic murmur',
        etiology: ['Myxomatous degeneration', 'Connective tissue disorders'],
        symptoms: ['Usually asymptomatic', 'Palpitations', 'Chest pain'],
        relevantTests: ['Echo'],
      },
    ],
  };

  const aorticValve: CardiacValve = {
    id: 'aortic-valve',
    name: 'Aortic Valve',
    latinName: 'Valva aortae',
    fmaId: 'FMA:7236',
    type: 'semilunar',
    location: 'Between left ventricle and aorta',
    cusps: 3,
    cuspNames: ['Right coronary cusp', 'Left coronary cusp', 'Non-coronary cusp'],
    function: 'Prevents backflow from aorta to LV during diastole',
    auscultationPoint: 'Right 2nd intercostal space, parasternal',
    normalSounds: 'A2 component of S2',
    explanations: {
      level1: 'The aortic valve is the exit door from your heart to your body. It has three little pockets that fill with blood and snap shut to keep blood from leaking back into the heart. The coronary arteries that feed your heart muscle branch off just above this valve.',
      level2: 'The aortic valve has three cusps that open when the left ventricle contracts, allowing blood to enter the aorta. During relaxation, the cusps close to prevent backflow. The coronary arteries arise from sinuses just above the valve.',
      level3: 'The aortic valve cusps are named for the coronary arteries arising from their corresponding sinuses (right, left, non-coronary). The sinuses of Valsalva create space for the coronary ostia. A bicuspid aortic valve (1-2% prevalence) is the most common congenital heart defect and predisposes to stenosis and aortic disease.',
      level4: 'Aortic valve area (normal >2cm²) is calculated by continuity equation or planimetry. Severe AS: AVA <1cm², mean gradient >40mmHg, Vmax >4m/s. Low-flow, low-gradient AS requires dobutamine stress echo. Bicuspid morphology includes anterior-posterior and right-left fusion patterns.',
      level5: 'TAVR has transformed severe AS management for high/intermediate-risk patients and is expanding to lower-risk populations. Aortic regurgitation may be chronic (compensated LV dilation) or acute (emergency). Ross procedure uses pulmonary autograft. Bicuspid aortic valve surveillance includes aorta imaging for aortopathy.',
    },
    keyFacts: [
      'Three cusps (tricuspid semilunar valve)',
      'Coronary arteries arise just above',
      'Bicuspid valve is most common congenital defect',
      'Stenosis most common in elderly (calcific)',
      'TAVR revolutionized treatment',
    ],
    pathologies: [
      {
        name: 'Aortic stenosis',
        description: 'Narrowing of aortic valve orifice',
        murmurCharacteristics: 'Harsh crescendo-decrescendo systolic murmur, radiates to carotids',
        etiology: ['Calcific degeneration', 'Bicuspid valve', 'Rheumatic'],
        symptoms: ['Angina', 'Syncope', 'Heart failure (SAD triad)'],
        relevantTests: ['Echo', 'CT calcium scoring', 'Cardiac catheterization'],
      },
      {
        name: 'Aortic regurgitation',
        description: 'Incompetent valve allowing diastolic backflow',
        murmurCharacteristics: 'Decrescendo diastolic murmur at left sternal border',
        etiology: ['Bicuspid valve', 'Endocarditis', 'Aortic root dilation', 'Rheumatic'],
        symptoms: ['Dyspnea', 'Wide pulse pressure', 'Bounding pulses'],
        relevantTests: ['Echo', 'Cardiac MRI', 'Aortography'],
      },
    ],
  };

  const tricuspidValve: CardiacValve = {
    id: 'tricuspid-valve',
    name: 'Tricuspid Valve',
    latinName: 'Valva tricuspidalis',
    fmaId: 'FMA:7234',
    type: 'atrioventricular',
    location: 'Between right atrium and right ventricle',
    cusps: 3,
    cuspNames: ['Anterior leaflet', 'Posterior leaflet', 'Septal leaflet'],
    function: 'Prevents backflow from RV to RA during systole',
    auscultationPoint: 'Left lower sternal border, 4th intercostal space',
    normalSounds: 'T1 component of S1',
    explanations: {
      level1: 'The tricuspid valve is between the upper and lower right chambers of your heart. It has three flaps (tri = three) that let blood flow one way - from the right atrium down to the right ventricle.',
      level2: 'The tricuspid valve has three leaflets that control blood flow from the right atrium to the right ventricle. It operates at lower pressures than the mitral valve. Tricuspid regurgitation is often "functional" - caused by RV dilation rather than intrinsic valve disease.',
      level3: 'The tricuspid valve is the largest cardiac valve by annular diameter. The septal leaflet attaches to the interventricular septum. The AV node is located near the septal leaflet attachment - relevant for surgical repair. Ebstein anomaly involves apical displacement of the septal leaflet.',
      level4: 'Functional TR from RV/annular dilation is far more common than primary TR. Severe TR with preserved RV function may benefit from repair. Tricuspid annuloplasty is performed during left-sided valve surgery if annulus is dilated >40mm. Carcinoid syndrome causes characteristic TV thickening/retraction.',
      level5: 'Transcatheter tricuspid interventions are emerging (TTVR, edge-to-edge repair). Isolated TR surgery timing is debated - earlier intervention may prevent irreversible RV damage. Lead-related TR from pacemaker/ICD leads affects management. Infective endocarditis of TV common in IVDU.',
    },
    keyFacts: [
      'Three leaflets (largest AV valve)',
      'AV node near septal leaflet',
      'Functional TR common with RV dilation',
      'Ebstein anomaly: apically displaced',
      'TV endocarditis in IV drug users',
    ],
    pathologies: [
      {
        name: 'Tricuspid regurgitation',
        description: 'Backflow from RV to RA',
        murmurCharacteristics: 'Holosystolic murmur at LLSB, increases with inspiration (Carvallo sign)',
        etiology: ['Functional (RV dilation)', 'Rheumatic', 'Endocarditis', 'Carcinoid', 'Ebstein'],
        symptoms: ['Peripheral edema', 'Hepatomegaly', 'JVD', 'Fatigue'],
        relevantTests: ['Echo', 'Right heart cath'],
      },
    ],
  };

  const pulmonaryValve: CardiacValve = {
    id: 'pulmonary-valve',
    name: 'Pulmonary Valve',
    latinName: 'Valva trunci pulmonalis',
    fmaId: 'FMA:7237',
    type: 'semilunar',
    location: 'Between right ventricle and pulmonary trunk',
    cusps: 3,
    cuspNames: ['Anterior cusp', 'Right cusp', 'Left cusp'],
    function: 'Prevents backflow from pulmonary artery to RV during diastole',
    auscultationPoint: 'Left 2nd intercostal space, parasternal',
    normalSounds: 'P2 component of S2',
    explanations: {
      level1: 'The pulmonary valve is the door between your heart and the blood vessels going to your lungs. When your heart squeezes, this valve opens to let blood flow to your lungs to get fresh oxygen.',
      level2: 'The pulmonary valve has three cusps that open during right ventricular contraction, sending blood to the lungs. It operates at lower pressures than the aortic valve. Congenital abnormalities are more common than acquired disease.',
      level3: 'The pulmonary valve is anterior and superior to the aortic valve. Congenital pulmonary stenosis may be valvular, subvalvular, or supravalvular. Post-stenotic pulmonary artery dilation is common. The valve is often involved in tetralogy of Fallot (RVOT obstruction).',
      level4: 'Pulmonic regurgitation is common after TOF repair and balloon valvuloplasty. Severe PR leads to RV dilation and eventual failure. Timing of pulmonary valve replacement in post-TOF PR is guided by RV volumes on MRI. Ross procedure creates new PR in the pulmonary position.',
      level5: 'Transcatheter pulmonary valve replacement (Melody, SAPIEN) revolutionized management of RVOT dysfunction in congenital heart disease. Native RVOT TPVR is more challenging due to variable anatomy. Carcinoid involvement causes valve thickening. Infective endocarditis of PV is rare.',
    },
    keyFacts: [
      'Three cusps (anterior, right, left)',
      'Most anterior cardiac valve',
      'Congenital stenosis more common than acquired',
      'Regurgitation common post-TOF repair',
      'Transcatheter replacement available',
    ],
    pathologies: [
      {
        name: 'Pulmonary stenosis',
        description: 'Obstruction of RVOT at valvular level',
        murmurCharacteristics: 'Crescendo-decrescendo systolic murmur at LUSB with ejection click',
        etiology: ['Congenital', 'Carcinoid'],
        symptoms: ['Often asymptomatic', 'Dyspnea', 'Fatigue', 'RV failure if severe'],
        relevantTests: ['Echo', 'Cardiac MRI'],
      },
    ],
  };

  valves.set('mitral-valve', mitralValve);
  valves.set('aortic-valve', aorticValve);
  valves.set('tricuspid-valve', tricuspidValve);
  valves.set('pulmonary-valve', pulmonaryValve);
}

/**
 * Initialize conduction system
 */
function initializeConductionSystem(): void {
  const saNode: ConductionNode = {
    id: 'sa-node',
    name: 'Sinoatrial Node',
    latinName: 'Nodus sinuatrialis',
    fmaId: 'FMA:9477',
    location: 'Junction of SVC and right atrium, in sulcus terminalis',
    function: 'Primary cardiac pacemaker, initiates each heartbeat',
    intrinsicRate: '60-100 bpm',
    cellType: 'Pacemaker cells with automaticity',
    bloodSupply: 'SA nodal artery (55% from RCA, 45% from LCx)',
    explanations: {
      level1: 'The SA node is your heart\'s natural pacemaker! It sends out electrical signals that tell your heart when to beat. Without it, your heart wouldn\'t know when to pump. It creates about 60-100 heartbeats every minute.',
      level2: 'The sinoatrial (SA) node is a small cluster of specialized cells in the right atrium that generates electrical impulses automatically. These impulses spread through the atria, causing them to contract. It\'s the reason your heart beats rhythmically without you having to think about it.',
      level3: 'The SA node contains pacemaker cells with automaticity - they spontaneously depolarize to threshold and generate action potentials. The intrinsic rate is 60-100 bpm, the fastest of all pacemaker tissues, so it normally dominates cardiac rhythm. Sympathetic and parasympathetic inputs modulate its rate.',
      level4: 'SA nodal cells have a unique action potential: Phase 4 is not flat but shows spontaneous depolarization via "funny" (If) currents and calcium currents. HCN channels (targeted by ivabradine) conduct If current. The autonomic nervous system modulates SA rate via chronotropic effects.',
      level5: 'Sinus node dysfunction (sick sinus syndrome) may cause sinus bradycardia, sinus arrest, or tachy-brady syndrome. SA nodal artery occlusion rarely causes infarction due to collateral supply. Sinus node reentrant tachycardia is a rare SVT. SA node function is assessed by SNRT on EP study.',
    },
    keyFacts: [
      'Primary cardiac pacemaker',
      'Intrinsic rate 60-100 bpm',
      'Located at SVC-RA junction',
      'Blood supply: SA nodal artery',
      'Modulated by autonomic nervous system',
    ],
    clinicalNotes: [
      'Sick sinus syndrome causes bradycardia',
      'Ivabradine targets If current to slow rate',
      'Pacemaker insertion for symptomatic sinus node dysfunction',
    ],
  };

  const avNode: ConductionNode = {
    id: 'av-node',
    name: 'Atrioventricular Node',
    latinName: 'Nodus atrioventricularis',
    fmaId: 'FMA:9478',
    location: 'Posteroinferior interatrial septum, in triangle of Koch',
    function: 'Delays impulse transmission to allow atrial contraction before ventricular',
    intrinsicRate: '40-60 bpm',
    cellType: 'Transitional cells with slow conduction',
    bloodSupply: 'AV nodal artery (90% from RCA, 10% from LCx)',
    explanations: {
      level1: 'The AV node is like a gatekeeper between the upper and lower chambers of your heart. It slows down the electrical signal just a little bit, giving your atria time to finish pumping blood before your ventricles start.',
      level2: 'The atrioventricular (AV) node receives impulses from the atria and delays them briefly before passing them to the ventricles. This delay allows the atria to finish contracting and emptying blood into the ventricles before the ventricles contract.',
      level3: 'The AV node provides the only normal electrical pathway between atria and ventricles (the fibrous skeleton insulates them otherwise). It has an intrinsic rate of 40-60 bpm if SA node fails. The PR interval on ECG reflects AV conduction time.',
      level4: 'AV nodal conduction is slow due to calcium-dependent action potentials rather than sodium-dependent. The AV node has decremental conduction - faster input rates cause slower conduction (protects ventricles from rapid atrial rates in AF). Dual AV nodal pathways can cause AVNRT.',
      level5: 'AV node ablation with permanent pacing is a rate control strategy for refractory AF. AVNRT is ablated at the slow pathway near the coronary sinus os. First-degree AV block (PR>200ms) is usually benign. Inferior MI often causes AV nodal dysfunction due to RCA supply. AV node anatomy is critical for His bundle pacing.',
    },
    keyFacts: [
      'Delays conduction for atrial contraction',
      'Intrinsic rate 40-60 bpm',
      'Located in triangle of Koch',
      'Blood supply: AV nodal artery (usually RCA)',
      'Decremental conduction protects ventricles',
    ],
    clinicalNotes: [
      'AV block classified as first, second, or third degree',
      'AVNRT due to dual pathways',
      'Inferior MI may cause AV block',
    ],
  };

  const bundleOfHis: ConductionNode = {
    id: 'bundle-of-his',
    name: 'Bundle of His',
    latinName: 'Fasciculus atrioventricularis',
    fmaId: 'FMA:9484',
    location: 'Penetrates central fibrous body, runs along membranous septum',
    function: 'Transmits impulses from AV node to bundle branches',
    intrinsicRate: '40-60 bpm',
    cellType: 'Fast-conducting Purkinje-like cells',
    bloodSupply: 'Dual supply: AV nodal artery and septal perforators of LAD',
    explanations: {
      level1: 'The Bundle of His is like an electrical highway that carries signals from the AV node down to the two sides of your heart. It\'s named after a scientist named Wilhelm His who discovered it!',
      level2: 'The Bundle of His carries electrical impulses from the AV node through the fibrous tissue separating atria from ventricles. It then splits into right and left bundle branches that deliver signals to each ventricle.',
      level3: 'The Bundle of His is the only muscular connection between atria and ventricles, penetrating the central fibrous body. It bifurcates into right and left bundle branches at the top of the muscular septum. It can serve as a pacemaker (40-60 bpm) if AV node fails.',
      level4: 'His bundle recordings on EP study allow measurement of AH (AV nodal) and HV (His-Purkinje) intervals. His bundle pacing provides physiologic ventricular activation for patients requiring pacing. The His bundle is adjacent to the membranous septum - relevant for septal defect repair.',
      level5: 'HV interval >55ms or intra-His block predicts progression to complete heart block. His bundle pacing is an alternative to biventricular pacing for CRT. LBBB pattern can result from proximal left bundle disease or septal MI. Conduction system pacing (His and left bundle area pacing) is evolving.',
    },
    keyFacts: [
      'Only muscular atrial-ventricular connection',
      'Bifurcates into right and left bundle branches',
      'Intrinsic rate 40-60 bpm',
      'HV interval measured on EP study',
      'His bundle pacing emerging technique',
    ],
    clinicalNotes: [
      'HV interval prolongation predicts heart block',
      'His bundle pacing for physiologic CRT',
      'Surgical risk during septal procedures',
    ],
  };

  conductionNodes.set('sa-node', saNode);
  conductionNodes.set('av-node', avNode);
  conductionNodes.set('bundle-of-his', bundleOfHis);
}

/**
 * Initialize major blood vessels
 */
function initializeVessels(): void {
  // Helper function for creating basic vessel entries
  const createBasicVessel = (
    id: string,
    name: string,
    vesselType: 'artery' | 'vein',
    region: CardiovascularRegion,
    origin: string,
    termination: string,
    paired: boolean,
    side: 'left' | 'right' | 'midline' | undefined,
    fmaId: string
  ): BloodVessel => ({
    id,
    name,
    fmaId,
    vesselType,
    region,
    paired,
    side,
    location: `${region.replace(/-/g, ' ')} region`,
    origin,
    termination,
    explanations: {
      level1: `The ${name.toLowerCase()} is a blood vessel that carries blood ${vesselType === 'artery' ? 'away from your heart' : 'back to your heart'}.`,
      level2: `The ${name.toLowerCase()} is a ${vesselType} in the ${region.replace(/-/g, ' ')} region. It ${vesselType === 'artery' ? 'branches from ' + origin + ' and supplies blood to ' + termination : 'drains blood from ' + origin + ' and returns it to ' + termination}.`,
      level3: `The ${name.toLowerCase()} (${fmaId}) is ${paired ? 'a paired' : 'an unpaired'} ${vesselType} that ${vesselType === 'artery' ? 'originates from the ' + origin + ' and distributes to the ' + termination : 'receives drainage from ' + origin + ' and empties into ' + termination}.`,
      level4: `Anatomical considerations for the ${name.toLowerCase()} include its relationship to surrounding structures, normal diameter, and clinical significance.`,
      level5: `Clinical correlations for the ${name.toLowerCase()} include common pathologies, interventional approaches, and surgical considerations.`,
    },
    keyFacts: [
      `Type: ${vesselType}`,
      `Region: ${region.replace(/-/g, ' ')}`,
      `Origin: ${origin}`,
      `Termination: ${termination}`,
    ],
    relatedVessels: [],
    relevantLabs: ['Lipid panel', 'HbA1c', 'CRP'],
  });

  // Aorta and branches
  vessels.set('aorta', createBasicVessel('aorta', 'Aorta', 'artery', 'great-vessels', 'Left ventricle', 'Common iliac arteries', false, 'midline', 'FMA:3734'));

  // Coronary arteries
  vessels.set('rca', createBasicVessel('rca', 'Right Coronary Artery', 'artery', 'coronary', 'Right aortic sinus', 'Posterior descending artery', false, 'right', 'FMA:50039'));
  vessels.set('lmca', createBasicVessel('lmca', 'Left Main Coronary Artery', 'artery', 'coronary', 'Left aortic sinus', 'LAD and LCx', false, 'left', 'FMA:50040'));
  vessels.set('lad', createBasicVessel('lad', 'Left Anterior Descending Artery', 'artery', 'coronary', 'Left main', 'Apex', false, 'left', 'FMA:50041'));
  vessels.set('lcx', createBasicVessel('lcx', 'Left Circumflex Artery', 'artery', 'coronary', 'Left main', 'Posterolateral territory', false, 'left', 'FMA:50042'));

  // Great vessels
  vessels.set('pulmonary-trunk', createBasicVessel('pulmonary-trunk', 'Pulmonary Trunk', 'artery', 'great-vessels', 'Right ventricle', 'Right and left pulmonary arteries', false, 'midline', 'FMA:8610'));
  vessels.set('superior-vena-cava', createBasicVessel('superior-vena-cava', 'Superior Vena Cava', 'vein', 'great-vessels', 'Brachiocephalic veins', 'Right atrium', false, 'midline', 'FMA:4720'));
  vessels.set('inferior-vena-cava', createBasicVessel('inferior-vena-cava', 'Inferior Vena Cava', 'vein', 'great-vessels', 'Common iliac veins', 'Right atrium', false, 'midline', 'FMA:10951'));

  // Head and neck arteries
  vessels.set('common-carotid-left', createBasicVessel('common-carotid-left', 'Left Common Carotid Artery', 'artery', 'head-neck-arteries', 'Aortic arch', 'Carotid bifurcation', true, 'left', 'FMA:3939'));
  vessels.set('common-carotid-right', createBasicVessel('common-carotid-right', 'Right Common Carotid Artery', 'artery', 'head-neck-arteries', 'Brachiocephalic trunk', 'Carotid bifurcation', true, 'right', 'FMA:3940'));
  vessels.set('internal-carotid-left', createBasicVessel('internal-carotid-left', 'Left Internal Carotid Artery', 'artery', 'head-neck-arteries', 'Carotid bifurcation', 'Middle cerebral artery', true, 'left', 'FMA:3954'));
  vessels.set('internal-carotid-right', createBasicVessel('internal-carotid-right', 'Right Internal Carotid Artery', 'artery', 'head-neck-arteries', 'Carotid bifurcation', 'Middle cerebral artery', true, 'right', 'FMA:3955'));
  vessels.set('external-carotid-left', createBasicVessel('external-carotid-left', 'Left External Carotid Artery', 'artery', 'head-neck-arteries', 'Carotid bifurcation', 'Superficial temporal artery', true, 'left', 'FMA:10635'));
  vessels.set('external-carotid-right', createBasicVessel('external-carotid-right', 'Right External Carotid Artery', 'artery', 'head-neck-arteries', 'Carotid bifurcation', 'Superficial temporal artery', true, 'right', 'FMA:10636'));
  vessels.set('vertebral-left', createBasicVessel('vertebral-left', 'Left Vertebral Artery', 'artery', 'head-neck-arteries', 'Subclavian artery', 'Basilar artery', true, 'left', 'FMA:3956'));
  vessels.set('vertebral-right', createBasicVessel('vertebral-right', 'Right Vertebral Artery', 'artery', 'head-neck-arteries', 'Subclavian artery', 'Basilar artery', true, 'right', 'FMA:3957'));

  // Upper limb arteries
  vessels.set('subclavian-left', createBasicVessel('subclavian-left', 'Left Subclavian Artery', 'artery', 'upper-limb-arteries', 'Aortic arch', 'Axillary artery', true, 'left', 'FMA:3951'));
  vessels.set('subclavian-right', createBasicVessel('subclavian-right', 'Right Subclavian Artery', 'artery', 'upper-limb-arteries', 'Brachiocephalic trunk', 'Axillary artery', true, 'right', 'FMA:3952'));
  vessels.set('axillary-left', createBasicVessel('axillary-left', 'Left Axillary Artery', 'artery', 'upper-limb-arteries', 'Subclavian artery', 'Brachial artery', true, 'left', 'FMA:22654'));
  vessels.set('axillary-right', createBasicVessel('axillary-right', 'Right Axillary Artery', 'artery', 'upper-limb-arteries', 'Subclavian artery', 'Brachial artery', true, 'right', 'FMA:22655'));
  vessels.set('brachial-left', createBasicVessel('brachial-left', 'Left Brachial Artery', 'artery', 'upper-limb-arteries', 'Axillary artery', 'Radial and ulnar arteries', true, 'left', 'FMA:22689'));
  vessels.set('brachial-right', createBasicVessel('brachial-right', 'Right Brachial Artery', 'artery', 'upper-limb-arteries', 'Axillary artery', 'Radial and ulnar arteries', true, 'right', 'FMA:22690'));
  vessels.set('radial-left', createBasicVessel('radial-left', 'Left Radial Artery', 'artery', 'upper-limb-arteries', 'Brachial artery', 'Palmar arches', true, 'left', 'FMA:22730'));
  vessels.set('radial-right', createBasicVessel('radial-right', 'Right Radial Artery', 'artery', 'upper-limb-arteries', 'Brachial artery', 'Palmar arches', true, 'right', 'FMA:22731'));

  // Abdominal arteries
  vessels.set('celiac-trunk', createBasicVessel('celiac-trunk', 'Celiac Trunk', 'artery', 'abdomen-arteries', 'Abdominal aorta', 'Splenic, hepatic, gastric arteries', false, 'midline', 'FMA:14813'));
  vessels.set('superior-mesenteric', createBasicVessel('superior-mesenteric', 'Superior Mesenteric Artery', 'artery', 'abdomen-arteries', 'Abdominal aorta', 'Intestinal branches', false, 'midline', 'FMA:14814'));
  vessels.set('inferior-mesenteric', createBasicVessel('inferior-mesenteric', 'Inferior Mesenteric Artery', 'artery', 'abdomen-arteries', 'Abdominal aorta', 'Sigmoid and rectal branches', false, 'midline', 'FMA:14815'));
  vessels.set('renal-left', createBasicVessel('renal-left', 'Left Renal Artery', 'artery', 'abdomen-arteries', 'Abdominal aorta', 'Left kidney', true, 'left', 'FMA:14813'));
  vessels.set('renal-right', createBasicVessel('renal-right', 'Right Renal Artery', 'artery', 'abdomen-arteries', 'Abdominal aorta', 'Right kidney', true, 'right', 'FMA:14814'));

  // Lower limb arteries
  vessels.set('common-iliac-left', createBasicVessel('common-iliac-left', 'Left Common Iliac Artery', 'artery', 'pelvis-arteries', 'Aortic bifurcation', 'Internal and external iliac', true, 'left', 'FMA:18803'));
  vessels.set('common-iliac-right', createBasicVessel('common-iliac-right', 'Right Common Iliac Artery', 'artery', 'pelvis-arteries', 'Aortic bifurcation', 'Internal and external iliac', true, 'right', 'FMA:18804'));
  vessels.set('femoral-left', createBasicVessel('femoral-left', 'Left Femoral Artery', 'artery', 'lower-limb-arteries', 'External iliac', 'Popliteal artery', true, 'left', 'FMA:70248'));
  vessels.set('femoral-right', createBasicVessel('femoral-right', 'Right Femoral Artery', 'artery', 'lower-limb-arteries', 'External iliac', 'Popliteal artery', true, 'right', 'FMA:70249'));
  vessels.set('popliteal-left', createBasicVessel('popliteal-left', 'Left Popliteal Artery', 'artery', 'lower-limb-arteries', 'Femoral artery', 'Tibial arteries', true, 'left', 'FMA:22532'));
  vessels.set('popliteal-right', createBasicVessel('popliteal-right', 'Right Popliteal Artery', 'artery', 'lower-limb-arteries', 'Femoral artery', 'Tibial arteries', true, 'right', 'FMA:22533'));

  // Head and neck veins
  vessels.set('internal-jugular-left', createBasicVessel('internal-jugular-left', 'Left Internal Jugular Vein', 'vein', 'head-neck-veins', 'Sigmoid sinus', 'Brachiocephalic vein', true, 'left', 'FMA:4724'));
  vessels.set('internal-jugular-right', createBasicVessel('internal-jugular-right', 'Right Internal Jugular Vein', 'vein', 'head-neck-veins', 'Sigmoid sinus', 'Brachiocephalic vein', true, 'right', 'FMA:4725'));
  vessels.set('external-jugular-left', createBasicVessel('external-jugular-left', 'Left External Jugular Vein', 'vein', 'head-neck-veins', 'Retromandibular vein', 'Subclavian vein', true, 'left', 'FMA:13110'));
  vessels.set('external-jugular-right', createBasicVessel('external-jugular-right', 'Right External Jugular Vein', 'vein', 'head-neck-veins', 'Retromandibular vein', 'Subclavian vein', true, 'right', 'FMA:13111'));

  // Portal system
  vessels.set('portal-vein', createBasicVessel('portal-vein', 'Portal Vein', 'vein', 'portal-system', 'Splenic and superior mesenteric veins', 'Liver', false, 'midline', 'FMA:50735'));

  // Build indexes
  vessels.forEach((vessel, id) => {
    const regionList = vesselsByRegion.get(vessel.region) || [];
    regionList.push(id);
    vesselsByRegion.set(vessel.region, regionList);

    vesselsByName.set(vessel.name.toLowerCase(), id);
    if (vessel.latinName) {
      vesselsByName.set(vessel.latinName.toLowerCase(), id);
    }
  });
}

// Initialize all data
initializeChambers();
initializeValves();
initializeConductionSystem();
initializeVessels();

// ============================================
// ECG Correlations
// ============================================

export const ECG_CORRELATIONS: ECGCorrelation[] = [
  { wave: 'P', structure: 'Atrial depolarization', normalValue: '<120ms, <2.5mm', abnormalities: ['P mitrale (LA enlargement)', 'P pulmonale (RA enlargement)', 'Absent P (AF)'] },
  { wave: 'PR-interval', structure: 'AV conduction time', normalValue: '120-200ms', abnormalities: ['First-degree AV block (>200ms)', 'Short PR (WPW, Lown-Ganong-Levine)'] },
  { wave: 'Q', structure: 'Septal depolarization', normalValue: '<40ms, <1/3 R height', abnormalities: ['Pathological Q (MI)', 'Q in aVR is normal'] },
  { wave: 'R', structure: 'Ventricular depolarization', normalValue: 'Progressive increase V1-V6', abnormalities: ['Poor R progression (anterior MI, LBBB)', 'Tall R in V1 (RVH, posterior MI)'] },
  { wave: 'QRS-complex', structure: 'Ventricular activation', normalValue: '<120ms', abnormalities: ['LBBB (>120ms with specific pattern)', 'RBBB (>120ms with rSR\' in V1)'] },
  { wave: 'ST-segment', structure: 'Ventricular repolarization plateau', normalValue: 'Isoelectric', abnormalities: ['ST elevation (STEMI)', 'ST depression (ischemia, NSTEMI)'] },
  { wave: 'T', structure: 'Ventricular repolarization', normalValue: 'Upright in most leads', abnormalities: ['T inversion (ischemia)', 'Peaked T (hyperkalemia)', 'Flat T (hypokalemia)'] },
  { wave: 'QT-interval', structure: 'Total ventricular activity', normalValue: 'QTc 350-450ms (men), 350-460ms (women)', abnormalities: ['Long QT (drug, congenital)', 'Short QT (rare syndrome)'] },
];

// ============================================
// Cardiac Cycle
// ============================================

export const CARDIAC_CYCLE_PHASES: CardiacCyclePhase[] = [
  {
    name: 'Atrial systole',
    duration: '~100ms',
    valveStates: { mitral: 'open', tricuspid: 'open', aortic: 'closed', pulmonary: 'closed' },
    heartSounds: ['S4 (if present)'],
    pressureChanges: 'Atrial pressure rises, "a" wave in venous waveform',
    description: 'Atrial contraction completes ventricular filling (atrial kick provides ~20% of filling)',
  },
  {
    name: 'Isovolumetric contraction',
    duration: '~50ms',
    valveStates: { mitral: 'closed', tricuspid: 'closed', aortic: 'closed', pulmonary: 'closed' },
    heartSounds: ['S1'],
    pressureChanges: 'Ventricular pressure rises rapidly, all valves closed',
    description: 'Ventricles contract with all valves closed, pressure builds until exceeding arterial pressure',
  },
  {
    name: 'Rapid ejection',
    duration: '~100ms',
    valveStates: { mitral: 'closed', tricuspid: 'closed', aortic: 'open', pulmonary: 'open' },
    heartSounds: [],
    pressureChanges: 'Ventricular pressure exceeds arterial, ~70% of SV ejected',
    description: 'Semilunar valves open, blood rapidly ejected into aorta and pulmonary artery',
  },
  {
    name: 'Reduced ejection',
    duration: '~150ms',
    valveStates: { mitral: 'closed', tricuspid: 'closed', aortic: 'open', pulmonary: 'open' },
    heartSounds: [],
    pressureChanges: 'Ejection slows as ventricular pressure begins to fall',
    description: 'Remaining stroke volume ejected as ventricle begins to relax',
  },
  {
    name: 'Isovolumetric relaxation',
    duration: '~80ms',
    valveStates: { mitral: 'closed', tricuspid: 'closed', aortic: 'closed', pulmonary: 'closed' },
    heartSounds: ['S2'],
    pressureChanges: 'Ventricular pressure falls rapidly, all valves closed',
    description: 'Ventricles relax with all valves closed, pressure drops until below atrial pressure',
  },
  {
    name: 'Rapid filling',
    duration: '~100ms',
    valveStates: { mitral: 'open', tricuspid: 'open', aortic: 'closed', pulmonary: 'closed' },
    heartSounds: ['S3 (if present)'],
    pressureChanges: 'Atrial pressure exceeds ventricular, ~70% of filling occurs',
    description: 'AV valves open, blood rapidly fills ventricles passively',
  },
  {
    name: 'Diastasis',
    duration: '~200ms (varies with HR)',
    valveStates: { mitral: 'open', tricuspid: 'open', aortic: 'closed', pulmonary: 'closed' },
    heartSounds: [],
    pressureChanges: 'Pressures equilibrate, minimal flow',
    description: 'Slow filling phase, shortened with tachycardia',
  },
];

// ============================================
// Coronary Territories
// ============================================

export const CORONARY_TERRITORIES: CoronaryTerritory[] = [
  {
    arteryId: 'lad',
    arteryName: 'LAD',
    myocardialRegions: ['Anterior wall', 'Anteroseptal', 'Apex'],
    ecgLeads: ['V1', 'V2', 'V3', 'V4'],
    clinicalSignificance: 'Anterior MI - large territory, higher mortality, risk of LV aneurysm',
  },
  {
    arteryId: 'lcx',
    arteryName: 'LCx',
    myocardialRegions: ['Lateral wall', 'Posterolateral (if dominant)'],
    ecgLeads: ['I', 'aVL', 'V5', 'V6'],
    clinicalSignificance: 'Lateral MI - often "silent" with nonspecific ECG changes if LCx non-dominant',
  },
  {
    arteryId: 'rca',
    arteryName: 'RCA',
    myocardialRegions: ['Inferior wall', 'Posterior wall', 'RV', 'SA/AV nodes'],
    ecgLeads: ['II', 'III', 'aVF'],
    clinicalSignificance: 'Inferior MI - may cause AV block, RV infarct; check right-sided leads',
  },
];

// ============================================
// API Functions
// ============================================

export function getChamber(id: string): HeartChamber | undefined {
  return chambers.get(id);
}

export function getAllChambers(): HeartChamber[] {
  return Array.from(chambers.values());
}

export function getValve(id: string): CardiacValve | undefined {
  return valves.get(id);
}

export function getAllValves(): CardiacValve[] {
  return Array.from(valves.values());
}

export function getConductionNode(id: string): ConductionNode | undefined {
  return conductionNodes.get(id);
}

export function getAllConductionNodes(): ConductionNode[] {
  return Array.from(conductionNodes.values());
}

export function getVessel(id: string): BloodVessel | undefined {
  return vessels.get(id);
}

export function getAllVessels(): BloodVessel[] {
  return Array.from(vessels.values());
}

export function getVesselsByRegion(region: CardiovascularRegion): BloodVessel[] {
  const ids = vesselsByRegion.get(region) || [];
  return ids.map(id => vessels.get(id)!).filter(Boolean);
}

export function getArteries(): BloodVessel[] {
  return Array.from(vessels.values()).filter(v => v.vesselType === 'artery');
}

export function getVeins(): BloodVessel[] {
  return Array.from(vessels.values()).filter(v => v.vesselType === 'vein');
}

export function searchVessels(query: string): BloodVessel[] {
  const lowerQuery = query.toLowerCase();
  return Array.from(vessels.values()).filter(v =>
    v.name.toLowerCase().includes(lowerQuery) ||
    (v.latinName && v.latinName.toLowerCase().includes(lowerQuery))
  );
}

export function getStatistics(): CardiovascularStatistics {
  return {
    totalVessels: vessels.size,
    arteries: Array.from(vessels.values()).filter(v => v.vesselType === 'artery').length,
    veins: Array.from(vessels.values()).filter(v => v.vesselType === 'vein').length,
    heartStructures: chambers.size + valves.size,
    conductionNodes: conductionNodes.size,
  };
}

export function getExplanation(
  structure: HeartChamber | CardiacValve | ConductionNode | BloodVessel,
  level: 1 | 2 | 3 | 4 | 5
): string {
  const levelKey = `level${level}` as keyof typeof structure.explanations;
  if (structure.explanations[levelKey]) {
    return structure.explanations[levelKey];
  }
  for (let l = level - 1; l >= 1; l--) {
    const fallbackKey = `level${l}` as keyof typeof structure.explanations;
    if (structure.explanations[fallbackKey]) {
      return structure.explanations[fallbackKey];
    }
  }
  return 'No explanation available.';
}
