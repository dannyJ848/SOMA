/**
 * Cardiac Electrophysiology - Comprehensive Educational Content
 *
 * Covers cardiac action potentials, the conduction system, ECG basics,
 * ion channel physiology, and arrhythmia mechanisms.
 */

import { EducationalContent } from '../../types';

export const cardiacElectrophysiology: EducationalContent = {
  id: 'physiology-cardiac-electrophysiology',
  type: 'process',
  name: 'Cardiac Electrophysiology',
  alternateNames: ['Heart Electrical System', 'Cardiac Conduction', 'ECG Physiology'],

  levels: {
    1: {
      level: 1,
      summary: 'Your heart has its own electrical system that sends signals telling the heart muscle when to squeeze, creating a rhythm that keeps blood pumping steadily.',
      explanation: `## Your Heart's Electrical System

### The Heart Has Its Own "Spark Plug"

Your heart does not need your brain to tell it when to beat. It has its own built-in electrical system, like a pacemaker, that creates electrical signals to make the heart muscle squeeze in the right order.

### The Electrical Pathway

The electrical signal follows a specific path through your heart:

1. **SA Node (the natural pacemaker)**: A small group of cells at the top of your heart starts each heartbeat by creating an electrical signal
2. **Atria contract**: The signal spreads across the upper chambers (atria), making them squeeze
3. **AV Node (the relay station)**: The signal pauses briefly at a checkpoint between the upper and lower chambers
4. **Bundle of His and Purkinje fibers**: The signal travels quickly down special wires to the lower chambers (ventricles)
5. **Ventricles contract**: The lower chambers squeeze powerfully to pump blood to your body and lungs

### What Is an ECG?

An **ECG** (electrocardiogram) is a test that records the electrical activity of your heart. Small stickers (electrodes) are placed on your skin, and they detect the electrical signals as they move through your heart.

**What the squiggly lines mean:**
- **P wave**: Electrical signal spreading through the upper chambers (atria)
- **QRS complex**: The big spike -- electrical signal spreading through the lower chambers (ventricles)
- **T wave**: The ventricles resetting their electrical charge to get ready for the next beat

### When Things Go Wrong

Sometimes the electrical system does not work properly:
- **Too fast** (tachycardia): Heart beats more than 100 times per minute
- **Too slow** (bradycardia): Heart beats less than 60 times per minute
- **Irregular** (arrhythmia): The rhythm becomes uneven or chaotic

### How Ion Channels Work (Simple Version)

Heart cells have tiny doors called **ion channels**. These doors open and close to let electrically charged particles (ions) flow in and out of the cell. This flow of charged particles creates the electrical signals that make your heart beat.`,
      keyTerms: [
        { term: 'SA node', definition: 'The heart\'s natural pacemaker -- a small group of cells that starts each heartbeat with an electrical signal', pronunciation: 'S-A node' },
        { term: 'AV node', definition: 'The relay station between the upper and lower chambers that briefly delays the electrical signal', pronunciation: 'A-V node' },
        { term: 'ECG', definition: 'Electrocardiogram -- a test that records the electrical activity of your heart using stickers on your skin' },
        { term: 'arrhythmia', definition: 'An abnormal heart rhythm -- the heart beats too fast, too slow, or irregularly', pronunciation: 'ah-RITH-mee-ah' },
        { term: 'ion channel', definition: 'A tiny door in heart cells that opens and closes to let electrically charged particles flow in and out' },
      ],
      analogies: [
        'The SA node is like a drum major leading a marching band -- it sets the beat and everyone else follows.',
        'The electrical pathway is like a row of dominoes -- each one triggers the next in an orderly chain.',
        'An ECG is like a seismograph for your heart -- instead of detecting earthquakes, it detects the electrical waves of your heartbeat.',
        'Ion channels are like gates at a stadium -- they open to let people (ions) flow in and close to keep them out.',
      ],
      examples: [
        'When a doctor puts stickers on your chest and you see waves on a screen, that is an ECG showing your heart\'s electrical activity.',
        'A pacemaker is a small device that doctors can implant when the SA node is not working properly, to send electrical signals and keep the heart beating regularly.',
        'Caffeine can make some people\'s hearts beat faster or feel like it skips a beat by affecting the electrical system.',
      ],
      patientCounselingPoints: [
        'An ECG is painless and takes only a few minutes.',
        'Feeling your heart skip a beat occasionally is common and usually not dangerous.',
        'If you ever feel your heart racing for no reason, feel dizzy, or faint, tell a doctor right away.',
      ],
    },
    2: {
      level: 2,
      summary: 'The cardiac conduction system generates and propagates electrical impulses through the SA node, AV node, His bundle, and Purkinje fibers, creating coordinated contraction recorded as P waves, QRS complexes, and T waves on the ECG.',
      explanation: `## Cardiac Conduction System

### Components and Conduction Velocity

| Structure | Function | Rate (bpm) | Conduction Velocity |
|-----------|----------|-----------|-------------------|
| SA node | Primary pacemaker | 60-100 | Slow (~0.05 m/s) |
| Atrial muscle | Conducts through atria | -- | Moderate (~1 m/s) |
| AV node | Delays signal | 40-60 | Very slow (~0.05 m/s) |
| Bundle of His | Connects atria to ventricles | 40-60 | Fast (~2 m/s) |
| Bundle branches | Left and right pathways | 20-40 | Fast (~2 m/s) |
| Purkinje fibers | Distributes to ventricles | 20-40 | Very fast (~4 m/s) |

**Hierarchy of pacemakers:**
- SA node: 60-100 bpm (dominant pacemaker)
- AV node/junction: 40-60 bpm (backup if SA fails)
- Ventricular (His/Purkinje): 20-40 bpm (last resort backup)

### The Cardiac Action Potential

Heart cells have two types of action potentials:

**Fast-response cells (atrial and ventricular muscle, Purkinje):**
- Phase 0: Rapid depolarization (Na+ rushes in)
- Phase 1: Early repolarization (K+ starts going out)
- Phase 2: Plateau (Ca2+ comes in, K+ goes out -- balanced)
- Phase 3: Repolarization (K+ goes out, Ca2+ channels close)
- Phase 4: Resting potential (-90 mV)

**Slow-response cells (SA and AV nodes):**
- Phase 0: Slow depolarization (Ca2+ comes in, not Na+)
- Phase 3: Repolarization (K+ goes out)
- Phase 4: Spontaneous depolarization ("funny current" -- slow leak of Na+ makes these cells automatically fire)

The SA node fires fastest because its Phase 4 slope is steepest, so it reaches threshold first.

### ECG Basics

**The 12-Lead ECG:**
- 6 limb leads (I, II, III, aVR, aVL, aVF): View heart in frontal plane
- 6 chest leads (V1-V6): View heart in horizontal plane

**Normal ECG Components:**

| Component | Duration | What It Represents |
|-----------|---------|-------------------|
| P wave | <0.12 sec | Atrial depolarization |
| PR interval | 0.12-0.20 sec | Atrial depolarization + AV delay |
| QRS complex | <0.12 sec | Ventricular depolarization |
| ST segment | -- | Early ventricular repolarization |
| T wave | -- | Ventricular repolarization |
| QT interval | <0.44 sec (corrected) | Total ventricular electrical activity |

### ECG Interpretation: A Systematic Approach

1. **Rate**: Count R-R intervals (300/large boxes between R waves)
2. **Rhythm**: Regular or irregular? P before every QRS?
3. **Axis**: Normal (0 to +90 degrees), left (-30 to -90), right (+90 to +180)
4. **P waves**: Present? Upright in II? One per QRS?
5. **PR interval**: 0.12-0.20 sec? Constant?
6. **QRS**: Narrow (<0.12 sec) or wide (>=0.12 sec)?
7. **ST segment/T wave**: Elevation? Depression? T-wave changes?

### Common Arrhythmia Mechanisms

**1. Abnormal automaticity:**
- Enhanced normal pacemaker activity (sinus tachycardia)
- Abnormal focus fires faster than SA node (ectopic beats)

**2. Triggered activity:**
- Extra heartbeats triggered by afterdepolarizations
- Early afterdepolarizations (during repolarization): Long QT syndrome
- Delayed afterdepolarizations (after repolarization): Digoxin toxicity

**3. Re-entry:**
- Most common mechanism for sustained arrhythmias
- Requires: Two pathways, unidirectional block, slow conduction
- Examples: AVNRT, atrial flutter, many ventricular tachycardias

### Autonomic Effects on the Heart

| Effect | Sympathetic | Parasympathetic |
|--------|------------|-----------------|
| Heart rate | Increases (chronotropy) | Decreases (chronotropy) |
| Conduction speed | Increases (dromotropy) | Decreases (dromotropy) |
| Contractility | Increases (inotropy) | Minimal effect |
| Receptor | Beta-1 adrenergic | Muscarinic (M2) |
| Neurotransmitter | Norepinephrine | Acetylcholine |`,
      keyTerms: [
        { term: 'depolarization', definition: 'When the inside of a heart cell becomes more positive due to ions flowing in, triggering contraction', pronunciation: 'dee-POH-lar-ih-ZAY-shun' },
        { term: 'repolarization', definition: 'When a heart cell returns to its resting electrical state after depolarization, preparing for the next beat' },
        { term: 'action potential', definition: 'The rapid change in electrical charge across a heart cell membrane that triggers contraction' },
        { term: 'refractory period', definition: 'Period after depolarization when the cell cannot fire again; protects the heart from beating too fast' },
        { term: 'Purkinje fibers', definition: 'Specialized fast-conducting fibers that rapidly distribute the electrical signal throughout the ventricles', pronunciation: 'pur-KIN-jee' },
        { term: 're-entry', definition: 'An abnormal electrical circuit where a signal loops back on itself, causing rapid repetitive firing; the most common mechanism of sustained arrhythmias' },
      ],
      analogies: [
        'The SA node is like the conductor of an orchestra -- it sets the tempo. If the conductor is absent, the first violinist (AV node) takes over, but at a slower pace.',
        'The AV node delay is like a traffic light at an intersection -- it pauses traffic (electrical signals) so the atria finish emptying before the ventricles contract.',
        'Re-entry is like a car stuck in a roundabout -- it keeps going in circles instead of exiting, causing the heart to beat rapidly.',
        'The plateau phase (Phase 2) of the action potential is like two teams in a tug-of-war -- calcium pulling one way and potassium the other, keeping things balanced.',
      ],
      examples: [
        'Caffeine and stress increase sympathetic tone, which increases SA node firing rate and heart rate -- this is why your heart races when you are nervous.',
        'A first-degree AV block (PR interval >0.20 sec) means the electrical signal is delayed at the AV node but still gets through every time.',
        'Atrial fibrillation is the most common arrhythmia -- the atria fire chaotically instead of in an organized wave, producing an irregular heartbeat.',
      ],
    },
    3: {
      level: 3,
      summary: 'Cardiac electrophysiology encompasses the ionic basis of pacemaker and non-pacemaker action potentials, conduction system properties, autonomic modulation, and the mechanisms of arrhythmogenesis (automaticity, triggered activity, and re-entry), with the surface ECG providing a clinical window into these electrical events.',
      explanation: `## Ionic Basis of Cardiac Electrophysiology

### Non-Pacemaker Action Potential (Ventricular Myocyte)

**Phase 0: Rapid Depolarization**
- Fast Na+ channels (INa) open at threshold (~-70 mV)
- Massive Na+ influx → rapid depolarization to ~+20 mV
- Duration: 1-2 ms
- Conduction velocity determined by Phase 0 upstroke velocity (dV/dt)
- Blocked by Class I antiarrhythmics (lidocaine, flecainide)

**Phase 1: Early Repolarization**
- Transient outward K+ current (Ito) → brief repolarization
- More prominent in epicardium than endocardium (contributes to J wave)
- Na+ channels inactivate

**Phase 2: Plateau**
- L-type Ca2+ channels (ICa-L) open → Ca2+ influx (triggers contraction)
- Balanced by delayed rectifier K+ currents (IKr, IKs) → K+ efflux
- Duration: 200-300 ms (long compared to neurons -- prevents tetany)
- Effective refractory period encompasses this phase
- Ca2+ channel blockers (verapamil, diltiazem) affect this phase

**Phase 3: Final Repolarization**
- Ca2+ channels inactivate
- K+ efflux dominates (IKr, IKs, IK1)
- Rapid return to resting potential
- IKr blocked by Class III antiarrhythmics (amiodarone, sotalol) → QT prolongation

**Phase 4: Resting Membrane Potential**
- Maintained at ~-90 mV by IK1 (inward rectifier K+)
- Na+/K+ ATPase maintains ionic gradients (3 Na+ out, 2 K+ in)
- Stable in working myocardium (no spontaneous depolarization)

### Pacemaker Action Potential (SA Node)

**Phase 4: Spontaneous Depolarization**
- "Funny current" (If): Mixed Na+/K+ current activated by hyperpolarization
- T-type Ca2+ channels: Contribute to late Phase 4
- Ca2+ clock: Spontaneous SR Ca2+ release → NCX activation → depolarization
- Slope of Phase 4 determines heart rate

**Phase 0: Slow Depolarization**
- L-type Ca2+ channels (not fast Na+ channels)
- Slower upstroke → slower conduction
- Maximum diastolic potential: ~-60 mV (above Na+ channel activation threshold)

**Phase 3: Repolarization**
- K+ efflux via delayed rectifiers

**Autonomic modulation of pacemaker rate:**

| Factor | Current Affected | Phase 4 Slope | Rate Effect |
|--------|-----------------|--------------|-------------|
| Sympathetic (NE) | ↑If, ↑ICa-L | Steeper | ↑Rate |
| Parasympathetic (ACh) | ↑IK-ACh, ↓If | Flatter | ↓Rate |
| Sympathetic | ↑ICa-L | Higher MDP | ↑Rate |
| Parasympathetic | Hyperpolarization | Lower MDP | ↓Rate |

### Conduction System Physiology

**AV node properties:**
- Decremental conduction: Faster atrial rates → progressively slower AV conduction
- Concealed conduction: Impulses that enter but do not exit still alter refractoriness
- Dual AV nodal physways:
  - Fast pathway: Short refractory period, fast conduction
  - Slow pathway: Long refractory period, slow conduction
  - Basis for AVNRT (AV nodal re-entrant tachycardia)

**His-Purkinje system:**
- Insulated from surrounding myocardium by fibrous skeleton
- Rapid conduction ensures near-simultaneous ventricular activation
- Left bundle divides into anterior and posterior fascicles
- Trifascicular block: RBBB + LAHB or LPHB + prolonged PR (high risk of complete block)

### Refractoriness

| Period | Definition | Clinical Significance |
|--------|-----------|----------------------|
| Absolute refractory (ARP) | No stimulus can produce AP | Prevents tetany |
| Effective refractory (ERP) | No propagated AP possible | Determines minimum cycle length |
| Relative refractory (RRP) | Strong stimulus can produce AP | Aberrant conduction possible |
| Supernormal period | Subthreshold stimulus can trigger AP | Rare, clinically relevant in His-Purkinje |

### ECG: Detailed Wave Analysis

**P Wave:**
- Duration: <120 ms; Amplitude: <2.5 mm (lead II)
- Right atrial enlargement: Tall, peaked P (>2.5 mm in II) -- P pulmonale
- Left atrial enlargement: Wide, notched P (>120 ms in II) or deep negative in V1 -- P mitrale

**QRS Complex:**
- Normal duration: <120 ms
- RBBB (>=120 ms): RSR' in V1, wide S in I and V6
- LBBB (>=120 ms): Broad notched R in I and V6, absent septal Q
- Left anterior fascicular block: Left axis deviation (-45 to -90)
- Left posterior fascicular block: Right axis deviation (>+120) with no other cause

**QT Interval:**
- Corrected QT (Bazett): QTc = QT / sqrt(RR)
- Normal QTc: <440 ms (men), <460 ms (women)
- Prolonged QTc risks: Torsades de pointes (polymorphic VT)
- Causes of prolongation: Drugs (sotalol, haloperidol, erythromycin), electrolytes (hypoK, hypoMg, hypoCa), congenital (LQTS)

**ST Segment:**
- Elevation: Acute MI (STEMI), pericarditis, Brugada, early repolarization
- Depression: Ischemia, digoxin effect, LVH strain pattern
- Morphology matters: Convex up (tombstone) = MI; concave up (saddle shape) = pericarditis

### Arrhythmia Mechanisms: Detailed

**Re-entry requirements:**
1. Two functionally distinct pathways
2. Unidirectional block in one pathway
3. Slow conduction in the other (allows recovery of blocked pathway)
4. Sufficient path length to sustain circuit

**Types of re-entry:**
| Type | Circuit | Example |
|------|---------|---------|
| Anatomic | Fixed circuit around a scar | Post-MI VT |
| Functional | Dynamic, wavelength-dependent | Atrial fibrillation rotors |
| Micro-reentry | Very small circuit | Some atrial tachycardias |
| Macro-reentry | Large circuit | Atrial flutter (cavotricuspid isthmus) |

**Triggered activity:**
- EADs (early afterdepolarizations): During Phase 2 or 3
  - Mechanism: Reactivation of ICa-L during prolonged repolarization
  - Associated with long QT, hypokalemia, bradycardia
  - Produces Torsades de pointes
- DADs (delayed afterdepolarizations): During Phase 4
  - Mechanism: Intracellular Ca2+ overload → NCX current
  - Associated with digoxin toxicity, catecholamines, heart failure
  - Produces triggered VT/VF`,
      keyTerms: [
        { term: 'funny current (If)', definition: 'Mixed Na+/K+ current activated by hyperpolarization in pacemaker cells; produces spontaneous Phase 4 depolarization; target of ivabradine' },
        { term: 'L-type calcium channel', definition: 'Long-lasting calcium channel responsible for Phase 2 plateau in myocytes and Phase 0 upstroke in nodal cells; target of non-dihydropyridine calcium blockers' },
        { term: 'delayed rectifier potassium current (IKr)', definition: 'Rapid component of delayed rectifier K+ current responsible for Phase 3 repolarization; blocked by Class III antiarrhythmics; IKr block causes QT prolongation' },
        { term: 'decremental conduction', definition: 'Progressive slowing of conduction velocity with increasing rate; characteristic of AV node; provides rate control during atrial tachyarrhythmias' },
        { term: 'early afterdepolarization (EAD)', definition: 'Abnormal depolarization during Phase 2 or 3, caused by reactivation of L-type Ca2+ channels during prolonged repolarization; mechanism of Torsades de pointes' },
        { term: 'delayed afterdepolarization (DAD)', definition: 'Abnormal depolarization during Phase 4, caused by intracellular calcium overload activating NCX; mechanism of digoxin-toxic arrhythmias' },
        { term: 'concealed conduction', definition: 'Incomplete penetration of the AV node by an impulse that fails to conduct but alters refractoriness and subsequent conduction' },
      ],
      clinicalNotes: 'Understanding the ionic basis of the action potential directly maps to antiarrhythmic drug therapy (Vaughan-Williams classification): Class I drugs block Na+ channels (Phase 0), Class II block beta-receptors (slow Phase 4), Class III block K+ channels (prolong Phase 3), and Class IV block Ca2+ channels (Phase 0 in nodal tissue, Phase 2 in myocytes). QT prolongation from any cause (drugs, electrolytes, genetics) increases EAD risk and predisposes to Torsades de pointes -- always check QTc before prescribing QT-prolonging medications.',
    },
    4: {
      level: 4,
      summary: 'Advanced cardiac electrophysiology encompasses the molecular biology of ion channels, calcium signaling cascades, mechanisms of congenital and acquired channelopathies, intracardiac mapping techniques, and the pathophysiological basis of complex arrhythmias including atrial fibrillation and ventricular tachycardia.',
      explanation: `## Advanced Cardiac Electrophysiology

### Ion Channel Molecular Biology

**Voltage-gated Na+ channel (Nav1.5, SCN5A):**
- Alpha subunit: 4 homologous domains (DI-DIV), each with 6 transmembrane segments
- S4 segments: Voltage sensor (positively charged amino acids)
- Activation gate: Opens at threshold
- Inactivation gate: DIII-DIV linker ("ball and chain" model)
- SCN5A mutations:
  - Brugada syndrome (loss of function)
  - Long QT type 3 (gain of function -- impaired inactivation)
  - Conduction disease (loss of function)

**L-type Ca2+ channel (Cav1.2, CACNA1C):**
- Alpha-1C subunit with beta, alpha-2/delta subunits
- Activated by depolarization and beta-adrenergic stimulation (PKA phosphorylation)
- Timothy syndrome (CACNA1C mutation): Severe QT prolongation, syndactyly

**Potassium channels:**

| Channel | Gene | Current | Function | Associated Syndrome |
|---------|------|---------|----------|-------------------|
| Kv11.1 (hERG) | KCNH2 | IKr | Phase 3 repolarization | LQT2 (loss of function) |
| KvLQT1 | KCNQ1 | IKs | Phase 3 repolarization | LQT1 (loss of function), SQT (gain of function) |
| Kir2.1 | KCNJ2 | IK1 | Resting potential | Andersen-Tawil (LQT7) |
| Kir3.1/3.4 | KCNJ3/5 | IK-ACh | Vagal response | Familial AF |
| HCN4 | HCN4 | If | Pacemaker | Sick sinus syndrome |

### Calcium Signaling: Excitation-Contraction Coupling

**Calcium-induced calcium release (CICR):**
1. L-type Ca2+ channel opens during Phase 2 → Ca2+ entry (~20% of total)
2. Ca2+ triggers ryanodine receptor (RyR2) opening on SR
3. Massive Ca2+ release from SR (~80% of total)
4. Ca2+ binds troponin C → crossbridge cycling → contraction
5. Relaxation: SERCA2a pumps Ca2+ back into SR, NCX extrudes Ca2+

**Ca2+ removal (relative contributions):**
- SERCA2a (SR reuptake): 70%
- NCX (Na+/Ca2+ exchanger): 28%
- Sarcolemmal Ca2+ ATPase: 1%
- Mitochondrial Ca2+ uptake: 1%

**SR Ca2+ leak and arrhythmia:**
- RyR2 mutations → Ca2+ leak during diastole
- Catecholaminergic polymorphic VT (CPVT)
- PKA phosphorylation of RyR2 during heart failure → leak → DADs → arrhythmia

### Congenital Channelopathies

**Long QT Syndrome (LQTS):**

| Type | Gene | Channel | Trigger | ECG Pattern |
|------|------|---------|---------|-------------|
| LQT1 | KCNQ1 | IKs (↓) | Exercise (swimming) | Broad-based T |
| LQT2 | KCNH2 | IKr (↓) | Auditory startle | Low amplitude, notched T |
| LQT3 | SCN5A | INa (↑ late) | Rest/sleep | Late-onset, peaked T |

**Treatment principles:**
- LQT1: Beta-blockers highly effective
- LQT2: Beta-blockers + avoid triggers; ICD for high risk
- LQT3: Mexiletine (Na+ channel blocker); ICD preferred

**Brugada Syndrome:**
- SCN5A mutation (25% of cases, most genetically heterogeneous)
- Coved ST elevation in V1-V3 (Type 1 pattern)
- Risk of VF, especially during fever, sleep, vagotonia
- Management: ICD for survivors of cardiac arrest; quinidine as adjunct
- Mechanism: Transmural voltage gradient between epicardium (prominent Ito) and endocardium

**Short QT Syndrome:**
- Gain-of-function K+ channel mutations
- QTc <340 ms
- Risk of AF and VF
- Quinidine may normalize QT

### Atrial Fibrillation: Electrophysiological Basis

**Initiation:**
- Pulmonary vein triggers (ectopic foci)
- Sleeves of atrial myocardium extending into PVs
- Short refractory periods, abrupt changes in fiber orientation
- Basis for pulmonary vein isolation (PVI) ablation

**Maintenance mechanisms:**
- Multiple wavelet hypothesis (Moe): Multiple re-entrant circuits
- Focal driver hypothesis: Localized rotors with fibrillatory conduction
- Current understanding: Both mechanisms contribute

**Substrate:**
- Atrial fibrosis (structural remodeling)
- Shortened refractory periods (electrical remodeling)
- Abnormal calcium handling
- "AF begets AF": Remodeling promotes AF perpetuation

**Autonomic triggers:**
- Vagal AF: Bradycardia-dependent, nighttime, post-prandial
- Adrenergic AF: Stress, exercise-triggered
- Different pharmacologic approaches for each phenotype

### Ventricular Tachycardia: Substrate and Mechanisms

**Scar-related re-entry (most common sustained VT):**
- Border zone of myocardial infarction
- Surviving myocyte bundles within scar create slow conduction channels
- Isthmus: Critical narrow channel sustaining the circuit
- Ablation target: Identification and elimination of the isthmus

**Mapping techniques:**
- Activation mapping: Identifies earliest activation site
- Entrainment mapping: Confirms re-entry, localizes circuit
- Substrate mapping: Voltage maps identify scar (<0.5 mV = dense scar, 0.5-1.5 mV = border zone)
- Pace mapping: Matches QRS morphology to identify exit site

**Non-ischemic VT mechanisms:**
| Substrate | Mechanism | Location |
|-----------|-----------|----------|
| ARVC | Fibro-fatty replacement | RV free wall |
| DCM | Patchy fibrosis | Basal, septal |
| HCM | Myocardial disarray | Septum |
| Cardiac sarcoidosis | Granulomatous inflammation | Variable |

### Clinical Electrophysiology Study (EPS)

**Indications:**
- Risk stratification (post-MI, HCM, Brugada)
- Tachycardia mechanism diagnosis
- Accessory pathway mapping (WPW)
- Ablation guidance

**Programmed stimulation protocol:**
- Drive train (8 beats at fixed CL) + extrastimuli
- Up to 3 extrastimuli from 2 RV sites
- Induction of sustained VT = positive study
- VF induction with aggressive protocol = less specific

### Antiarrhythmic Drug Classification (Vaughan-Williams)

| Class | Mechanism | Examples | Primary Effect |
|-------|-----------|---------|---------------|
| Ia | Na+ block (moderate), K+ block | Procainamide, quinidine | ↓ Phase 0, ↑ APD |
| Ib | Na+ block (weak) | Lidocaine, mexiletine | ↓ Phase 0 (ischemic tissue) |
| Ic | Na+ block (strong) | Flecainide, propafenone | ↓↓ Phase 0 |
| II | Beta-blockade | Metoprolol, atenolol | ↓ Phase 4 slope |
| III | K+ block | Amiodarone, sotalol, dofetilide | ↑ Phase 3, ↑ APD |
| IV | Ca2+ block | Verapamil, diltiazem | ↓ Phase 0 (nodal) |

**Amiodarone is unique: Has properties of all four classes.**`,
      keyTerms: [
        { term: 'SCN5A', definition: 'Gene encoding the cardiac sodium channel Nav1.5; mutations cause Brugada syndrome (loss-of-function), Long QT type 3 (gain-of-function), and cardiac conduction disease' },
        { term: 'hERG (KCNH2)', definition: 'Gene encoding the rapid delayed rectifier potassium channel (IKr); loss-of-function mutations cause LQT2; many drugs block hERG causing acquired QT prolongation' },
        { term: 'calcium-induced calcium release', definition: 'Process where Ca2+ entry via L-type channels triggers massive Ca2+ release from sarcoplasmic reticulum via ryanodine receptors; fundamental to excitation-contraction coupling' },
        { term: 'ryanodine receptor (RyR2)', definition: 'SR calcium release channel; mutations cause CPVT; phosphorylation-dependent leak contributes to heart failure arrhythmias' },
        { term: 'pulmonary vein isolation', definition: 'Catheter ablation procedure creating electrical isolation of pulmonary veins from left atrium; cornerstone of AF ablation based on PV trigger elimination' },
        { term: 'entrainment mapping', definition: 'Pacing technique during tachycardia to confirm re-entry mechanism and localize circuit components; used to identify ablation targets in VT' },
        { term: 'substrate mapping', definition: 'Voltage mapping of the ventricular myocardium to identify scar and border zone tissue; guides VT ablation targeting the re-entrant isthmus' },
      ],
      clinicalNotes: 'Drug-induced QT prolongation is one of the most common reasons for drug withdrawal from the market. The hERG (IKr) channel has a uniquely promiscuous drug-binding pocket that accepts diverse chemical structures. Pre-clinical hERG screening is now mandatory for all new drugs. Clinically, always check baseline QTc, correct electrolytes (K+ >4.0, Mg2+ >2.0), and avoid combining QT-prolonging agents. In CPVT, exercise testing is critical for diagnosis because the arrhythmia is adrenergically mediated and may not appear on resting ECG.',
    },
    5: {
      level: 5,
      summary: 'Cutting-edge cardiac electrophysiology integrates optogenetics, computational modeling, high-density mapping technologies, genetic testing paradigms, and novel ablation energy sources to advance mechanistic understanding and precision treatment of complex arrhythmias.',
      explanation: `## Precision Cardiac Electrophysiology

### High-Density Mapping and Imaging

**Ultra-high-density mapping systems:**
- Rhythmia (Boston Scientific): 64-electrode basket, automated annotation
- CARTO (Biosense Webster): Thermocool SmartTouch, contact force sensing
- EnSite X (Abbott): Omnipolar technology, direction-independent voltage

**Omnipolar mapping:**
- Calculates wavefront direction and velocity independent of catheter orientation
- True bipolar voltage: Eliminates directional voltage artifacts
- Improves scar delineation and conduction channel identification

**Ripple mapping:**
- Displays activation as moving wavefront rather than static color
- Visualizes entire electrogram, not just local activation time
- Identifies fractionated signals, double potentials, and late potentials
- Improves identification of re-entrant circuits in complex VT

**Cardiac MRI-guided ablation:**
- Late gadolinium enhancement defines scar architecture
- Identifies ablation targets pre-procedure (channels, isthmuses)
- Real-time MRI-guided catheter navigation (experimental)
- Integration with electroanatomical mapping systems (ADAS/MUSIC software)

### Novel Ablation Technologies

**Pulsed field ablation (PFA):**
- Irreversible electroporation: Creates nanopores in cell membranes
- Tissue selectivity: Cardiomyocytes more susceptible than esophagus, phrenic nerve, coronary arteries
- Eliminates thermal injury risk to adjacent structures
- Rapid application time
- ADVENT trial: Non-inferior to thermal ablation for AF
- PULSED AF trial: High acute PVI success with excellent safety

**Stereotactic body radiation therapy (SBRT) for VT:**
- Non-invasive ablation using targeted radiation (25 Gy single fraction)
- ENCORE-VT trial: 94% reduction in VT episodes at 6 months
- Mechanism: Radiation-induced fibrosis over weeks to months
- Late effects: Pneumonitis, pericarditis (rare)
- Reserved for refractory VT patients not candidates for catheter ablation

**High-power short-duration (HPSD) RF ablation:**
- 50W for 5-10 seconds vs. traditional 30W for 30-60 seconds
- Creates wider, shallower lesions (more resistive heating, less conductive)
- Faster procedure times
- Potentially safer (less steam pop, less collateral damage)
- Q-DOT MICRO catheter: Contact force + local impedance + temperature monitoring

### Genetic Testing and Precision Medicine

**Next-generation sequencing panels:**
- Comprehensive channelopathy panels: 50-100+ genes
- Yield: ~30% for LQTS, ~25% for Brugada, ~50% for CPVT
- Variants of uncertain significance (VUS): Major challenge
- Functional characterization required for novel variants (patch clamp, iPSC-CMs)

**Pharmacogenomics:**
- LQT1 (KCNQ1): Excellent response to beta-blockers (nadolol preferred)
- LQT2 (KCNH2): Beta-blockers helpful; mexiletine if late Na+ current component
- LQT3 (SCN5A): Mexiletine shortens QT; beta-blockers less protective
- Brugada: Quinidine (Ito blocker); ajmaline/procainamide for diagnosis
- CPVT: Flecainide in addition to beta-blockers (blocks RyR2)

**iPSC-derived cardiomyocyte modeling:**
- Patient-specific iPSC-CMs recapitulate disease phenotype
- Drug screening on patient's own cells
- Identify patient-specific triggers and therapies
- Limitations: Immature phenotype, lack of 3D architecture

### Computational Electrophysiology

**Patient-specific cardiac models:**
- CT/MRI-derived ventricular geometry
- Fiber architecture from diffusion tensor imaging
- Ionic models (ten Tusscher, O'Hara-Rudy) simulate action potentials
- Predict arrhythmia circuits and ablation targets

**Virtual heart applications:**
- Personalized in silico drug testing
- Ablation lesion optimization
- CRT lead placement optimization
- Arrhythmia risk stratification
- SILICOFCM project (EU): Validated for HCM risk prediction

**Machine learning in EP:**
- ECG-based deep learning:
  - Detects AF from sinus rhythm ECG (Mayo/Apple, AUC >0.87)
  - Predicts EF from ECG (AI-EF algorithm)
  - Identifies hypertrophic cardiomyopathy (AUC 0.96)
- Intracardiac signal analysis:
  - Automated rotor detection in AF
  - Scar classification from electrograms
  - Real-time ablation lesion assessment

### Mechanisms: Emerging Concepts

**AF pathobiology update:**
- Epicardial-endocardial dissociation: Different activation patterns on endo vs. epi surfaces
- Endo-epi breakthrough drives fibrillatory conduction
- Implications: Trans-mural ablation strategies, combined endo-epi approach

**Cardiac fat pad modulation:**
- Ganglionated plexi (GP): Autonomic ganglia on epicardial surface
- GP ablation reduces AF trigger/maintenance
- Botulinum toxin injection into GP: Under investigation (AFACT trial -- mixed results)

**Purkinje fiber role in VF:**
- PF triggers in idiopathic VF (Haissaguerre studies)
- PF-mediated maintenance of VF
- Targeted PF ablation for recurrent VF
- Short-coupled PVCs from Purkinje as a specific syndrome

### Device Therapy: Advanced Concepts

**Subcutaneous ICD (S-ICD):**
- No transvenous leads
- Eliminates lead-related complications (fracture, infection, extraction)
- Cannot pace (no anti-tachycardia pacing, no bradycardia pacing, no CRT)
- Screening required (ECG template matching)

**Leadless pacemaker (Micra):**
- Self-contained device implanted directly in RV
- No pocket, no lead
- Micra AV: Can sense atrial contraction via accelerometer → AV synchrony
- Limitations: Single-chamber, retrieval challenging

**Conduction system pacing:**
- His bundle pacing: Engages native conduction for physiologic activation
- Left bundle branch area pacing (LBBAP): More reliable threshold, wider capture area
- HOT-CRT: His-optimized CRT for non-responders
- Emerging as preferred alternative to traditional BiV pacing

### Future Directions

**Optogenetics:**
- Light-sensitive ion channels (channelrhodopsins) expressed in cardiomyocytes
- Precise spatial and temporal control of cardiac activation
- Potential for biological pacemakers, defibrillation, arrhythmia termination
- Current status: Animal models; human translation requires gene therapy advances

**Gene therapy for arrhythmias:**
- SERCA2a gene therapy for heart failure (CUPID2 -- negative, but optimization ongoing)
- KCNH2 gene delivery for acquired LQT2 (preclinical)
- Targeted suppression of pathogenic variants (RNA interference, antisense)
- AAV vectors: Cardiac tropism but immunogenicity challenges

**Biological pacemakers:**
- TBX18 gene delivery converts ventricular myocytes to pacemaker cells
- HCN channel overexpression creates pacemaker activity
- iPSC-derived pacemaker cells: In vitro proof of concept
- Bridge to device or permanent biological replacement`,
      keyTerms: [
        { term: 'pulsed field ablation', definition: 'Non-thermal ablation using irreversible electroporation to selectively destroy cardiomyocytes while sparing adjacent structures; transformative safety advance for AF ablation' },
        { term: 'stereotactic body radiation therapy (SBRT)', definition: 'Non-invasive radiation-based ablation for refractory VT; delivers targeted 25 Gy single fraction to arrhythmia substrate identified by electroanatomical mapping and imaging' },
        { term: 'omnipolar mapping', definition: 'Direction-independent electrogram analysis that calculates true local activation regardless of catheter orientation; improves voltage mapping accuracy and conduction velocity assessment' },
        { term: 'iPSC-derived cardiomyocytes', definition: 'Patient-specific induced pluripotent stem cell-derived heart cells used for disease modeling, drug screening, and functional characterization of genetic variants' },
        { term: 'conduction system pacing', definition: 'Pacing strategy that engages the native His-Purkinje system (His bundle or left bundle branch area pacing) for physiologic ventricular activation; emerging alternative to biventricular CRT' },
        { term: 'epicardial-endocardial dissociation', definition: 'Concept that AF involves distinct activation patterns on inner and outer atrial surfaces with transmural breakthroughs driving fibrillatory conduction' },
        { term: 'optogenetics', definition: 'Technique using light-sensitive ion channels expressed in cardiomyocytes to control cardiac electrical activity with light; preclinical platform for biological pacing and arrhythmia termination' },
      ],
      clinicalNotes: `Key clinical practice points:

1. **Pulsed field ablation** is rapidly becoming the preferred energy source for PVI in AF ablation. Its tissue selectivity dramatically reduces the risk of esophageal injury, phrenic nerve palsy, and coronary artery damage compared to radiofrequency and cryoablation.

2. **Genetic testing** should be considered for all patients with unexplained cardiac arrest, young-onset arrhythmias, and family history of sudden death. Cascade screening of first-degree relatives is critical when a pathogenic variant is identified.

3. **Conduction system pacing** (His bundle pacing and LBBAP) is challenging the paradigm of biventricular CRT. LBBAP offers more reliable thresholds and narrower paced QRS than His pacing, with emerging RCT data supporting non-inferiority to traditional CRT.

4. **AI-based ECG interpretation** is approaching clinical deployment for screening (AF detection, LV dysfunction, HCM), but requires careful validation across diverse populations and clinical integration workflows.

5. **SBRT for VT** represents a paradigm shift for patients with refractory VT who have failed or are not candidates for catheter ablation. Long-term safety data are still accumulating, but early results are promising.`,
    },
  },

  media: [
    {
      id: 'conduction-system-diagram',
      type: 'diagram',
      filename: 'cardiac-conduction-system.svg',
      title: 'Cardiac Conduction System',
      description: 'SA node, AV node, His bundle, bundle branches, and Purkinje fiber network',
    },
    {
      id: 'action-potential-phases',
      type: 'diagram',
      filename: 'cardiac-action-potentials.svg',
      title: 'Cardiac Action Potentials',
      description: 'Comparison of pacemaker (SA node) and non-pacemaker (ventricular) action potentials with ion currents labeled',
    },
    {
      id: 'ecg-normal-tracing',
      type: 'diagram',
      filename: 'ecg-normal-tracing.svg',
      title: 'Normal ECG Tracing',
      description: 'Labeled ECG showing P wave, QRS complex, T wave, and key intervals',
    },
  ],

  citations: [
    {
      id: 'klabunde-cv-physiology',
      type: 'textbook',
      title: 'Cardiovascular Physiology Concepts',
      authors: ['Klabunde RE'],
      source: 'Wolters Kluwer',
      chapter: '2-3',
    },
    {
      id: 'zipes-electrophysiology',
      type: 'textbook',
      title: 'Cardiac Electrophysiology: From Cell to Bedside',
      authors: ['Zipes DP', 'Jalife J', 'Stevenson WG'],
      source: 'Elsevier',
      chapter: '1-10',
    },
    {
      id: 'dubin-ecg',
      type: 'textbook',
      title: 'Rapid Interpretation of EKG\'s',
      authors: ['Dubin D'],
      source: 'Cover Publishing',
    },
  ],

  crossReferences: [
    { targetId: 'physiology-cardiac-cycle', targetType: 'topic', relationship: 'sibling', label: 'Cardiac Cycle' },
    { targetId: 'physiology-hemodynamics', targetType: 'topic', relationship: 'sibling', label: 'Hemodynamics' },
    { targetId: 'condition-arrhythmia', targetType: 'condition', relationship: 'see-also', label: 'Arrhythmias' },
    { targetId: 'condition-sudden-cardiac-death', targetType: 'condition', relationship: 'see-also', label: 'Sudden Cardiac Death' },
  ],

  tags: {
    systems: ['cardiovascular'],
    topics: ['physiology', 'cardiology', 'electrophysiology'],
    keywords: ['ECG', 'action potential', 'conduction system', 'arrhythmia', 'ion channels', 'SA node', 'AV node', 'ablation', 'channelopathy', 'long QT'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery'],
    },
  },

  createdAt: '2026-01-30T00:00:00.000Z',
  updatedAt: '2026-01-30T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default cardiacElectrophysiology;
