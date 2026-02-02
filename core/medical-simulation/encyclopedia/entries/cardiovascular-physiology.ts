/**
 * Cardiovascular Physiology Encyclopedia Entries
 * 
 * Transcribed from OpenStax Anatomy & Physiology (CC BY 4.0)
 */

import type { EncyclopediaEntry } from '../types';

/**
 * Cardiac Conduction System Entry
 */
export const cardiacConductionEntry: EncyclopediaEntry = {
  entryId: 'cardiac-conduction',
  name: 'Cardiac Conduction System',
  entryType: 'physiology',
  category: 'cardiovascular',
  summary: 'The specialized cardiac muscle cells that generate and conduct electrical impulses to coordinate heart contractions.',
  overview: {
    patient: 'The heart has its own electrical wiring system that controls when it beats. This system creates electrical signals that spread through the heart, making it contract in a coordinated way. The SA node acts as the natural pacemaker, creating regular impulses. These signals travel through special pathways, causing the atria to contract first, then the ventricles. This electrical system can be seen on an ECG, which doctors use to check heart health.',
    intermediate: 'The cardiac conduction system generates and conducts electrical impulses that coordinate cardiac contractions. The sinoatrial (SA) node serves as the primary pacemaker, generating impulses at 60-100 bpm. The impulse spreads through atrial myocardium and internodal pathways to the AV node, which delays conduction to allow atrial emptying. The impulse then travels through the bundle of His, right and left bundle branches, and Purkinje fibers to rapidly depolarize the ventricles. This organized spread creates the P wave (atrial depolarization), PR interval (AV conduction), and QRS complex (ventricular depolarization) on the ECG.',
    professional: 'The cardiac conduction system comprises specialized myocardial cells with spontaneous depolarization (automaticity) and rapid conduction properties. SA node (right atrial junction, crista terminalis) - pacemaker cells (P cells), 60-100 bpm intrinsic rate, innervated by autonomic nervous system. Internodal pathways - preferential conduction paths including anterior (Bachmann), middle (Wenckebach), and posterior (Thorel) tracts. AV node - slow conduction (0.02-0.05 m/s) causing physiological delay (~100ms); located in Koch triangle (tendon of Todaro, septal leaflet of tricuspid valve, coronary sinus ostium); blood supply typically from AV nodal artery (90% from RCA). Bundle of His - penetrates fibrous skeleton; bifurcates into bundle branches. Right bundle branch - travels to moderator band, supplies right ventricle; left bundle branch - fan-shaped division into anterior and posterior fascicles supplying left ventricle. Purkinje fibers - rapid conduction (2-4 m/s), subendocardial distribution, terminal activation of ventricular myocardium.',
  },
  content: [
    {
      title: 'Sinoatrial Node (SA Node)',
      content: {
        patient: 'The SA node is the heart\'s natural pacemaker, a small cluster of specialized cells located in the upper right atrium. It generates electrical impulses that make the heart beat, typically 60 to 100 times per minute in a healthy adult at rest. Think of it like a metronome that keeps the heart beating regularly. The SA node responds to signals from the nervous system and hormones, speeding up during exercise and slowing during sleep.',
        intermediate: 'The SA node is located at the junction of the superior vena cava and right atrium near the crista terminalis. It contains pacemaker cells (P cells) that spontaneously depolarize, creating the normal sinus rhythm. The intrinsic rate is 60-100 beats per minute. The SA node is richly innervated by both sympathetic (increases rate) and parasympathetic via vagus nerve (decreases rate) fibers. Impulses spread from the SA node through atrial myocardium and internodal pathways to reach the AV node. The SA node has the fastest intrinsic rate among all cardiac pacemaker cells, establishing its dominance as the primary pacemaker.',
        professional: 'The SA node is located subepicardially at the lateral junction of SVC and right atrium, within the crista terminalis. Histologically, it contains centrally located P cells (pale-staining, small, round pacemaker cells with few myofibrils) surrounded by transitional cells and collagen matrix. Blood supply is from the SA nodal artery (60% from RCA, 40% from LCx). Electrophysiology: Phase 4 spontaneous diastolic depolarization due to funny current (If) through hyperpolarization-activated cyclic nucleotide-gated (HCN) channels (mixed Na+/K+ current), T-type Ca2+ current (ICa-T), and decreased IK1; Phase 0 upstroke via L-type Ca2+ channels (slow response); no stable resting potential. Neural control: sympathetic stimulation increases If and ICa-L, shifting pacemaker to more superior cells and increasing rate; parasympathetic (ACh) activates IK,ACh, hyperpolarizes cells, and decreases If. Adrenaline and thyroxine increase heart rate; hypothermia, hyperkalemia, and certain drugs decrease it.',
      },
    },
    {
      title: 'Atrioventricular Node (AV Node)',
      content: {
        patient: 'The AV node is a relay station located between the atria and ventricles. It slows down the electrical signal slightly, allowing the atria to finish contracting and fill the ventricles with blood before the ventricles contract. This delay is important for efficient heart function. If the SA node fails, the AV node can take over as a backup pacemaker, though at a slower rate of 40-60 beats per minute.',
        intermediate: 'The AV node is located in the Koch triangle of the right atrium. It provides the only normal electrical connection between atria and ventricles (the fibrous skeleton electrically insulates the rest). The AV node slows conduction velocity to approximately 0.02-0.05 m/s, creating a PR interval delay of about 0.1 seconds. This delay ensures atrial contraction contributes to ventricular filling before ventricular systole begins. The AV node has an intrinsic rate of 40-60 bpm and can serve as an escape pacemaker if the SA node fails. The compact AV node gives rise to the bundle of His.',
        professional: 'The AV node is anatomically defined by the triangle of Koch (tendon of Todaro, septal leaflet of tricuspid valve, coronary sinus ostium). It is located at the apex of this triangle near the coronary sinus ostium, extending to the central fibrous body. Histologically: compact node (small cells with interdigitating processes), lower nodal bundle (transitional zone), and penetrating portion entering the fibrous skeleton. Blood supply: AV nodal artery arises from RCA (90%) or LCx (10%) at the U-turn of the respective artery. Conduction delay: decremental conduction properties allow AV node to filter rapid atrial rates; dual AV nodal pathways (fast and slow) explain AV nodal reentrant tachycardia. Electrophysiology: similar to SA node but slower intrinsic rate; action potentials are calcium-dependent. Three functional regions: atrionodal (AN), nodal (N), and nodal-His (NH) with progressively faster conduction.',
      },
    },
    {
      title: 'Bundle Branches and Purkinje System',
      content: {
        patient: 'After passing through the AV node, the electrical signal enters the bundle of His and splits into right and left bundle branches that travel down the septum. These branches then connect to Purkinje fibers - a network of specialized fibers that spread rapidly throughout the ventricles. This system allows the ventricles to contract from the bottom up and from the inside out, pumping blood efficiently into the arteries.',
        intermediate: 'The bundle of His emerges from the AV node, penetrates the fibrous skeleton of the heart, and courses along the membranous interventricular septum before dividing. The right bundle branch is a narrow cord that travels to the moderator band and base of the anterior papillary muscle, then branches to supply the right ventricle. The left bundle branch is a broad, fan-shaped structure that divides into anterior and posterior fascicles to supply the left ventricle. The Purkinje fibers form an extensive subendocardial network that rapidly conducts impulses (2-4 m/s) throughout the ventricles, causing coordinated ventricular depolarization from apex to base and endocardium to epicardium.',
        professional: 'Bundle of His: emerges from compact AV node, penetrates central fibrous body (non-branching portion), then bifurcates on the muscular septum. Length ~10-20mm. Right bundle branch (RBB): cord-like structure, 1-3mm diameter, unifascicular; courses on right side of septum to moderator band (septomarginal trabecula) containing right bundle branch, continues to base of anterior papillary muscle, then branches subendocardially. Left bundle branch (LBB): broad sheet-like structure, 4-8mm thick, divides early into anterior (superior) fascicle and posterior (inferior) fascicle, with possible median/centroseptal fascicle (trifascicular theory); anterior fascicle supplies anterosuperior LV, posterior supplies inferoposterior LV. Blood supply: LBB dual supply from LAD (anterior fascicle) and AV nodal/PDA (posterior fascicle); RBB single supply from LAD. Purkinje fibers: large cells (3-4x contractile cells), extensive gap junctions, minimal myofibrils, abundant glycogen; subendocardial network penetrates 1/3 to 1/2 into myocardium; conduction velocity 2-4 m/s; terminal Purkinje-myocardial junctions have high resistance. Ventricular activation sequence: septal (left-to-right), apical, endocardial-to-epicardial gradient.',
      },
    },
    {
      title: 'Electrocardiogram (ECG)',
      content: {
        patient: 'An ECG is a recording of the heart\'s electrical activity. The P wave shows atrial contraction. The QRS complex (the big spike) shows ventricular contraction. The T wave shows ventricular relaxation. Doctors can diagnose many heart problems by looking at the pattern, timing, and shape of these waves. For example, a long PR interval might indicate a conduction delay, while an abnormal QRS might suggest a heart attack or bundle branch block.',
        intermediate: 'The ECG records the summed electrical activity of the heart from body surface electrodes. The P wave represents atrial depolarization. The PR interval (0.12-0.20s) represents AV conduction time. The QRS complex (<0.12s) represents ventricular depolarization; the Q wave is the initial negative deflection, R wave is the first positive deflection, S wave is the negative deflection after R wave. The ST segment represents the plateau phase of ventricular action potentials; elevation or depression indicates ischemia or injury. The T wave represents ventricular repolarization. The QT interval represents total ventricular activity. Arrhythmias can be identified by abnormalities in rate, rhythm, intervals, and wave morphologies.',
        professional: 'ECG waveform components and intervals: P wave - atrial depolarization (right before left), duration <0.12s, amplitude <2.5mm; abnormal in atrial enlargement or ectopic rhythms. PR interval - onset of P to onset of QRS, normal 0.12-0.20s (3-5 small boxes); represents conduction from atrial activation through AV node, His bundle, and bundle branches; prolonged in AV block. QRS complex - ventricular depolarization, normal duration <0.12s; septal q waves in lateral leads are normal; tall R waves in LVH, deep S in RVH; widened in bundle branch blocks, pre-excitation, ventricular rhythms. ST segment - end of QRS to onset of T, normally isoelectric; elevation in acute injury, pericarditis, early repolarization; depression in ischemia, strain, digitalis effect. T wave - ventricular repolarization, normally upright in leads with positive QRS; inverted in ischemia, ventricular strain, post-tachycardia. QT interval - onset of QRS to end of T, rate-corrected as QTc (Bazett: QT/√RR); normal <440ms (men), <460ms (women); prolonged in congenital/acquired long QT syndrome, electrolyte abnormalities (hypokalemia, hypomagnesemia, hypocalcemia), antiarrhythmics; short in hypercalcemia, digoxin. U wave - after T wave, prominent in hypokalemia, bradycardia, LVH.',
      },
    },
  ],
  anatomyLinks: [
    { structureId: 'sa-node', structureName: 'Sinoatrial Node', linkText: 'SA Node', relevance: 'Primary cardiac pacemaker' },
    { structureId: 'av-node', structureName: 'Atrioventricular Node', linkText: 'AV Node', relevance: 'AV conduction delay' },
    { structureId: 'bundle-branches', structureName: 'Bundle Branches', linkText: 'Bundle Branches', relevance: 'Ventricular conduction' },
  ],
  references: [
    {
      referenceId: 'openstax-ap-19-2',
      type: 'textbook',
      title: 'Anatomy and Physiology - 19.2 Cardiac Muscle and Electrical Activity',
      authors: 'Betts JG, et al.',
      source: 'OpenStax',
      year: 2021,
      url: 'https://openstax.org/books/anatomy-and-physiology/pages/19-2-cardiac-muscle-and-electrical-activity',
      citation: 'Betts JG, et al. Anatomy and Physiology. 19.2 Cardiac Muscle and Electrical Activity. OpenStax; 2021.',
    },
  ],
  relatedEntries: [
    { entryId: 'heart-anatomy', entryType: 'anatomy', name: 'Heart Anatomy', relationship: 'see-also' },
    { entryId: 'cardiac-cycle', entryType: 'physiology', name: 'Cardiac Cycle', relationship: 'see-also' },
  ],
  searchMetadata: {
    primaryKeywords: ['cardiac conduction', 'heart electrical system', 'ECG', 'EKG', 'SA node', 'AV node', 'bundle branch', 'Purkinje'],
    tags: ['cardiology', 'electrophysiology', 'cardiovascular'],
    synonyms: ['heart conduction', 'cardiac electrical system', 'conduction pathway'],
  },
};

/**
 * Cardiac Cycle Entry
 */
export const cardiacCycleEntry: EncyclopediaEntry = {
  entryId: 'cardiac-cycle',
  name: 'Cardiac Cycle',
  entryType: 'physiology',
  category: 'cardiovascular',
  summary: 'The sequence of events in one complete heartbeat, including systole and diastole.',
  overview: {
    patient: 'The cardiac cycle is everything that happens during one complete heartbeat. It includes two main phases: systole (when the heart contracts and pumps blood) and diastole (when the heart relaxes and fills with blood). At normal resting heart rates, the entire cycle takes about 0.8 seconds. The valves opening and closing create the "lub-dub" sounds heard with a stethoscope. Understanding the cardiac cycle helps explain how the heart efficiently pumps blood throughout life.',
    intermediate: 'The cardiac cycle describes the mechanical events of one heartbeat, including ventricular systole (contraction) and diastole (relaxation). At 75 bpm, the cycle lasts 0.8 seconds: 0.3s systole and 0.5s diastole. The cycle begins with atrial systole (atrial kick), adding the final 20-30% of ventricular filling. Ventricular systole includes isovolumetric contraction and ejection phases. Ventricular diastole includes isovolumetric relaxation and filling phases. Pressure changes drive valve opening and closing. The first heart sound (S1) marks mitral/tricuspid closure; the second heart sound (S2) marks aortic/pulmonary closure.',
    professional: 'The cardiac cycle comprises coordinated electrical and mechanical events occurring at 60-100 cycles per minute. Phases of the cycle: 1) Atrial systole - atrial contraction adds 15-25% (atrial kick) to ventricular filling (atrial contribution increases at high heart rates). 2) Isovolumetric contraction - ventricles contract with all valves closed; rapid pressure rise; no volume change. 3) Ventricular ejection - when ventricular pressure exceeds arterial pressure, semilunar valves open; rapid ejection followed by reduced ejection; 60-70% of end-diastolic volume ejected (ejection fraction). 4) Isovolumetric relaxation - ventricles relax with all valves closed; rapid pressure drop. 5) Rapid filling - when ventricular pressure falls below atrial pressure, AV valves open; 70-80% of ventricular filling occurs passively. 6) Diastasis - slow filling phase. Pressure-volume loops graphically represent the cycle. Heart sounds: S1 (mitral/tricuspid closure, onset of systole), S2 (aortic/pulmonary closure, onset of diastole), S3 (rapid filling into non-compliant ventricle, pathologic in adults), S4 (atrial contraction into stiff ventricle, always pathologic).',
  },
  content: [
    {
      title: 'Phases of the Cardiac Cycle',
      content: {
        patient: `The cardiac cycle has several phases: First, the atria contract (atrial systole) to top off the ventricles. Then the ventricles begin to contract (isovolumetric contraction) with all valves closed, building pressure. When ventricular pressure exceeds arterial pressure, the semilunar valves open and blood ejects into the arteries (ventricular ejection). The ventricles then relax (isovolumetric relaxation), pressure drops, and when it falls below atrial pressure, the AV valves open and the ventricles refill. This happens 60-100 times every minute.`,
        intermediate: `Complete cycle phases: Atrial systole - P wave triggers atrial contraction, adding final 15-25% of ventricular filling. Isovolumetric contraction - ventricles contract following QRS; all valves closed; pressure rises rapidly; no blood enters or leaves; ends when ventricular pressure exceeds arterial pressure. Ventricular ejection - semilunar valves open; rapid ejection phase (first 1/3) followed by reduced ejection (last 2/3); ventricular volume decreases from EDV to ESV. Isovolumetric relaxation - ventricles relax; all valves closed; pressure drops rapidly; ends when ventricular pressure falls below atrial pressure. Ventricular filling - AV valves open; rapid filling (first 1/3), slow filling (diastasis, middle 1/3), atrial systole (last 1/3). Heart sounds correlate: S1 at AV valve closure (start of isovolumetric contraction), S2 at semilunar valve closure (start of isovolumetric relaxation).`,
        professional: `Detailed phase analysis (at 75 bpm, cycle = 800ms):

Atrial systole (100ms): Follows P wave; atrial pressure rises (a wave); contributes to v wave decline (x descent); adds 15-25% to ventricular filling (more at high rates); ends with mitral valve closure.

Isovolumetric contraction (50ms): Begins with QRS; ventricular pressure rises rapidly from ~5 to ~80 mmHg without volume change; all valves closed; first heart sound (S1); ends when LV pressure > aortic pressure (~80 mmHg), RV pressure > PA pressure (~25 mmHg).

Rapid ejection (100ms): Semilunar valves open; ventricles eject 50-70% of SV; aortic pressure rises; ventricular volume decreases from EDV (120mL) toward ESV (50mL); ends at peak ventricular pressure.

Reduced ejection (150ms): Ventricular pressure falls below aortic pressure but momentum maintains forward flow; continued emptying to ESV; ends with ventricular relaxation.

Isovolumetric relaxation (60ms): Semilunar valves close (S2); all valves closed; ventricular pressure falls rapidly; no volume change; coronary perfusion occurs primarily during this phase.

Rapid filling (100ms): AV valves open when ventricular pressure < atrial pressure; ventricular pressure briefly falls then rises (y descent of atrial pressure); 70-80% of filling occurs; S3 may be heard.

Diastasis (slow filling) (200ms): Gradual filling; longer at slow heart rates, shorter at fast rates.`,
      },
    },
    {
      title: 'Heart Sounds',
      content: {
        patient: `The "lub-dub" you hear with a stethoscope is the sound of heart valves closing. The first sound (S1, "lub") is the mitral and tricuspid valves closing at the start of ventricular contraction. The second sound (S2, "dub") is the aortic and pulmonary valves closing at the start of ventricular relaxation. Extra sounds like S3 or S4 may indicate heart problems. Splitting of S2 (heard as two parts) can be normal with breathing or indicate certain conditions.`,
        intermediate: `S1 (first heart sound): Mitral (M1) and tricuspid (T1) valve closure; marks beginning of systole; best heard at apex; loud in high cardiac output, short PR interval; soft in long PR interval, poor ventricular function. S2 (second heart sound): Aortic (A2) and pulmonary (P2) valve closure; marks end of systole/beginning of diastole; best heard at left sternal border. Normal physiological splitting of S2 occurs during inspiration (P2 delayed by increased RV filling time); fixed splitting suggests ASD; paradoxical splitting (A2 after P2) suggests aortic stenosis or LBBB. S3 (third heart sound): Early diastolic sound from rapid ventricular filling; normal in children/young adults; pathologic in adults (heart failure, volume overload). S4 (fourth heart sound): Late diastolic sound from atrial contraction into stiff ventricle; always pathologic (hypertension, aortic stenosis, ischemic heart disease, hypertrophic cardiomyopathy).`,
        professional: `Heart sound mechanisms and clinical significance:

S1: Caused by closure of AV valves; mitral closure (M1) precedes tricuspid (T1) by 20-30ms; best heard at apex (mitral area); intensity depends on valve position at closure (proportional to rate of pressure rise), valve mobility, and ventricular function. Wide splitting (>40ms) in RBBB, Ebstein anomaly; single S1 in mitral stenosis (calcified valve), severe MR; variable S1 in atrial fibrillation, AV dissociation.

S2: Caused by closure of semilunar valves; aortic closure (A2) precedes pulmonary (P2); heard best at left upper sternal border. Physiologic splitting: A2-P2 interval increases with inspiration (decreased intrathoracic pressure increases RV filling and delays P2, while increased capacitance delays aortic return and A2); interval narrows with expiration. Fixed wide splitting: ASD (constant volume overload of RV), pulmonary stenosis. Paradoxical splitting (P2 before A2): aortic stenosis, LBBB, WPW with left lateral pathway (delayed aortic closure). Wide aortic splitting: systemic hypertension, aortic regurgitation. Narrow splitting: pulmonary hypertension (P2 loud and early), single S2 in Fallot tetralogy (PS), severe aortic stenosis.

S3 (ventricular gallop): Low-frequency early diastolic sound 120-180ms after S2; caused by sudden deceleration of blood entering ventricle with reduced compliance; normal <40 years or in pregnancy; pathologic >40 years indicating LV dysfunction, MR, VSD, high-output states (anemia, thyrotoxicosis). Right-sided S3 increases with inspiration (Carvallo sign).

S4 (atrial gallop, presystolic gallop): Low-frequency late diastolic sound immediately before S1; caused by atrial contraction against stiff, non-compliant ventricle; absent in atrial fibrillation; indicates decreased ventricular compliance (hypertension, AS, ischemia, HCM, acute MR); may be physiological in elderly athletes.`,
      },
    },
    {
      title: 'Cardiac Output and Regulation',
      content: {
        patient: `Cardiac output is the amount of blood the heart pumps per minute, normally about 5 liters. It's calculated by multiplying heart rate (beats per minute) by stroke volume (blood pumped per beat). The body adjusts cardiac output based on need - increasing it during exercise and decreasing it during rest. Three main factors affect how much blood the heart pumps: how full the heart is before contraction (preload), the resistance the heart pumps against (afterload), and how strong the heart muscle contracts (contractility).`,
        intermediate: `Cardiac output (CO) = heart rate (HR) × stroke volume (SV). Normal CO is 4-8 L/min (average 5.5 L/min). Stroke volume (60-100 mL) is determined by three factors: preload (end-diastolic volume, related to venous return), afterload (arterial pressure/resistance the ventricle must overcome), and contractility (intrinsic pumping strength, independent of preload/afterload). Preload is most commonly indexed by left ventricular end-diastolic pressure (LVEDP) or pulmonary capillary wedge pressure. Afterload for the left ventricle is primarily systemic vascular resistance (SVR). The Frank-Starling law states that stroke volume increases with increased preload (up to a physiological limit), ensuring the heart pumps out what it receives.`,
        professional: `Cardiac output determinants:

CO = HR × SV; normal 4-8 L/min (cardiac index = CO/BSA, normal 2.5-4.0 L/min/m²).

Stroke volume (EDV - ESV; normal 60-100 mL) depends on:
1. Preload (ventricular filling): End-diastolic volume determined by venous return, ventricular compliance, atrial function, heart rate (longer filling at slow rates). Frank-Starling mechanism: active tension (and thus SV) increases with initial sarcomere length (preload), optimizing actin-myosin overlap. Applies to both ventricles. At excessive preload (high LVEDP), SV decreases (descending limb of Starling curve) and pulmonary congestion develops.

2. Afterload (resistance to ejection): For LV - aortic pressure, systemic vascular resistance (SVR = [MAP - CVP]/CO × 80), aortic compliance, ventricular wall stress (Laplace: wall stress = pressure × radius / 2 × thickness). For RV - pulmonary artery pressure, pulmonary vascular resistance (PVR). Increased afterload decreases SV (inverse relationship).

3. Contractility (inotropy): Intrinsic property independent of fiber length; reflects Ca²⁺ handling by cardiomyocytes. Increased contractility increases SV, ESPVR (end-systolic pressure-volume relationship) slope, and ejection fraction; decreases ESV. Regulated by: sympathetic stimulation (β₁ receptors, cAMP, protein kinase A, Ca²⁺ channel phosphorylation), cardiac glycosides (digoxin - Na⁺/K⁺-ATPase inhibition, increased intracellular Na⁺, reduced Ca²⁺ extrusion via Na⁺/Ca²⁺ exchanger), catecholamines, xanthines. Decreased by: hypoxia, acidosis, hypercapnia, β-blockers, calcium channel blockers.

Heart rate effects: CO increases with HR up to ~160-180 bpm (at higher rates, filling time decreases excessively). Tachycardia increases contractility (Bowditch/Treppe effect - staircase phenomenon).

Autonomic regulation: Sympathetic - increases HR (chronotropy), conduction velocity (dromotropy), contractility (inotropy), and relaxation (lusitropy). Parasympathetic - decreases HR (SA node effect) and AV conduction; minimal effect on ventricles.`,
      },
    },
  ],
  anatomyLinks: [
    { structureId: 'mitral-valve', structureName: 'Mitral Valve', linkText: 'Mitral Valve', relevance: 'Left AV valve' },
    { structureId: 'aortic-valve', structureName: 'Aortic Valve', linkText: 'Aortic Valve', relevance: 'Systemic outflow' },
  ],
  references: [
    {
      referenceId: 'openstax-ap-19-3',
      type: 'textbook',
      title: 'Anatomy and Physiology - 19.3 Cardiac Cycle',
      authors: 'Betts JG, et al.',
      source: 'OpenStax',
      year: 2021,
      url: 'https://openstax.org/books/anatomy-and-physiology/pages/19-3-cardiac-cycle',
      citation: 'Betts JG, et al. Anatomy and Physiology. 19.3 Cardiac Cycle. OpenStax; 2021.',
    },
  ],
  relatedEntries: [
    { entryId: 'cardiac-conduction', entryType: 'physiology', name: 'Cardiac Conduction System', relationship: 'see-also' },
    { entryId: 'heart-anatomy', entryType: 'anatomy', name: 'Heart Anatomy', relationship: 'see-also' },
  ],
  searchMetadata: {
    primaryKeywords: ['cardiac cycle', 'heart sounds', 'systole', 'diastole', 'cardiac output', 'stroke volume'],
    tags: ['cardiology', 'physiology', 'cardiovascular'],
    synonyms: ['heart cycle', 'cardiac mechanics', 'heartbeat phases'],
  },
};

// Export all entries
export const cardiovascularPhysiologyEntries: EncyclopediaEntry[] = [
  cardiacConductionEntry,
  cardiacCycleEntry,
];
