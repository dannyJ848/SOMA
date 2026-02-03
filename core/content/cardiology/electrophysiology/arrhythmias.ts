import { EducationalContent } from '../../types';

/**
 * Cardiac Arrhythmias
 *
 * Comprehensive educational content on cardiac rhythm disturbances
 * including supraventricular and ventricular arrhythmias, conduction
 * disorders, and their mechanisms, diagnosis, and management.
 */
export const arrhythmias: EducationalContent = {
  id: 'cardiac-arrhythmias',
  type: 'concept',
  name: 'Cardiac Arrhythmias',
  nameEs: 'Arritmias Cardiacas',
  alternateNames: ['Dysrhythmias', 'Heart Rhythm Disorders', 'Cardiac Rhythm Disturbances'],

  levels: {
    1: {
      level: 1,
      summary: 'An arrhythmia means your heart is beating in an unusual pattern — too fast, too slow, or irregularly.',
      explanation:
        'Your heart normally beats in a steady rhythm, like a clock ticking. An arrhythmia is when the heart\'s rhythm becomes ' +
        'abnormal. There are different types:\n\n' +
        '- **Too fast** (tachycardia): The heart beats more than 100 times per minute at rest. You might feel your heart racing or fluttering.\n' +
        '- **Too slow** (bradycardia): The heart beats fewer than 60 times per minute. You might feel dizzy or tired.\n' +
        '- **Irregular**: The heart skips beats or adds extra beats. You might feel a fluttering or flip-flop sensation in your chest.\n\n' +
        'Some arrhythmias are harmless and many people have occasional extra heartbeats. Others can be serious and need treatment. ' +
        'The most common arrhythmia is atrial fibrillation (AFib), where the upper chambers of the heart quiver instead of beating properly.\n\n' +
        'Doctors use an ECG test to record the heart\'s rhythm and figure out what type of arrhythmia a person has. Treatment depends on the type ' +
        'and can include medications, procedures, or implantable devices like pacemakers.',
      keyTerms: [
        { term: 'Arrhythmia', definition: 'An abnormal heart rhythm — the heart beats too fast, too slow, or irregularly', pronunciation: 'ah-RITH-mee-ah' },
        { term: 'Tachycardia', definition: 'A heart rate faster than 100 beats per minute at rest', pronunciation: 'tak-ih-KAR-dee-ah' },
        { term: 'Bradycardia', definition: 'A heart rate slower than 60 beats per minute', pronunciation: 'brad-ih-KAR-dee-ah' },
        { term: 'Atrial fibrillation', definition: 'A common arrhythmia where the upper heart chambers beat irregularly and often too fast', pronunciation: 'AY-tree-al fib-rih-LAY-shun' },
      ],
      analogies: [
        'Think of your heart like a drummer keeping time in a band. An arrhythmia is when the drummer misses a beat, plays too fast, or plays too slow.',
        'The heart has its own natural pacemaker — like a conductor leading an orchestra. An arrhythmia happens when the conductor loses control.',
      ],
      patientCounselingPoints: [
        'Not all arrhythmias are dangerous — occasional extra beats are very common and usually harmless.',
        'Caffeine, stress, and lack of sleep can trigger some arrhythmias.',
        'Seek immediate medical attention if you experience fainting, severe dizziness, or chest pain with irregular heartbeat.',
      ],
    },

    2: {
      level: 2,
      summary: 'Arrhythmias are classified by origin (supraventricular vs. ventricular) and rate (tachycardia vs. bradycardia), with mechanisms including abnormal automaticity, re-entry, and triggered activity.',
      explanation:
        '**Classification of Arrhythmias:**\n\n' +
        '**By Origin:**\n' +
        '- **Supraventricular** (above the ventricles): Originate in the atria or AV node\n' +
        '  - Atrial fibrillation (AFib): Irregular, rapid atrial activity; irregularly irregular ventricular response\n' +
        '  - Atrial flutter: Organized atrial re-entry at ~300 bpm with sawtooth flutter waves; commonly 2:1 block = 150 bpm\n' +
        '  - Supraventricular tachycardia (SVT): Includes AVNRT (most common), AVRT, and atrial tachycardia\n' +
        '  - Premature atrial complexes (PACs): Early beats from the atria\n\n' +
        '- **Ventricular** (from the ventricles): More dangerous due to hemodynamic compromise risk\n' +
        '  - Premature ventricular complexes (PVCs): Wide, bizarre-looking early beats\n' +
        '  - Ventricular tachycardia (VT): Three or more consecutive ventricular beats at >100 bpm\n' +
        '  - Ventricular fibrillation (VF): Chaotic ventricular activity — cardiac arrest rhythm\n\n' +
        '**By Rate:**\n' +
        '- **Tachyarrhythmias** (>100 bpm): AFib, atrial flutter, SVT, VT, VF\n' +
        '- **Bradyarrhythmias** (<60 bpm): Sinus bradycardia, AV blocks, sick sinus syndrome\n\n' +
        '**AV Blocks:**\n' +
        '- **1st degree**: Prolonged PR interval (>0.20 s), all P waves conducted\n' +
        '- **2nd degree Type I (Wenckebach)**: Progressive PR prolongation until a dropped QRS; generally benign\n' +
        '- **2nd degree Type II (Mobitz II)**: Constant PR with sudden dropped QRS; high risk of progression to complete block\n' +
        '- **3rd degree (Complete)**: No relationship between P waves and QRS; atria and ventricles beat independently\n\n' +
        '**Common Symptoms:** Palpitations, dizziness, syncope, dyspnea, chest pain, fatigue, or may be asymptomatic.',
      keyTerms: [
        { term: 'Supraventricular tachycardia (SVT)', definition: 'Rapid heart rhythm originating above the ventricles, typically with a narrow QRS complex' },
        { term: 'Ventricular tachycardia (VT)', definition: 'Rapid heart rhythm from the ventricles, appearing as wide QRS complexes on ECG' },
        { term: 'Ventricular fibrillation (VF)', definition: 'Life-threatening rhythm with chaotic ventricular activity and no effective cardiac output' },
        { term: 'AV block', definition: 'Impaired conduction from the atria to the ventricles through the AV node or His-Purkinje system' },
        { term: 'Premature ventricular complex (PVC)', definition: 'An early heartbeat originating from the ventricles, appearing as a wide QRS on ECG' },
      ],
      examples: [
        'A patient with irregularly irregular rhythm and no discernible P waves most likely has atrial fibrillation.',
        'A regular narrow complex tachycardia at exactly 150 bpm should raise suspicion for atrial flutter with 2:1 block.',
      ],
    },

    3: {
      level: 3,
      summary: 'Understanding arrhythmia mechanisms (automaticity, re-entry, triggered activity), ECG differentiation of narrow vs. wide complex tachycardias, and evidence-based management strategies.',
      explanation:
        '**Arrhythmia Mechanisms:**\n\n' +
        '1. **Enhanced Automaticity**: Spontaneous depolarization of cells with pacemaker activity (SA node, AV node) or ' +
        'abnormal automaticity in working myocardial cells. Examples: sinus tachycardia, accelerated idioventricular rhythm.\n\n' +
        '2. **Re-entry**: Most common mechanism for sustained tachyarrhythmias. Requires:\n' +
        '   - Two functionally distinct pathways\n' +
        '   - Unidirectional block in one pathway\n' +
        '   - Slow conduction through the alternate pathway\n' +
        '   Examples: AVNRT, AVRT/WPW, atrial flutter, typical VT post-MI\n\n' +
        '3. **Triggered Activity**:\n' +
        '   - Early afterdepolarizations (EADs): Phase 2/3, prolonged QT leads to torsades de pointes\n' +
        '   - Delayed afterdepolarizations (DADs): Phase 4, calcium overload leads to digitalis toxicity, CPVT\n\n' +
        '**Narrow Complex Tachycardia (QRS < 120 ms):**\n' +
        '- Sinus tachycardia: Gradual onset/offset, normal P waves\n' +
        '- AVNRT: Sudden onset/offset, pseudo-r\' in V1, pseudo-S in II/III/aVF\n' +
        '- AVRT (orthodromic): Uses accessory pathway retrogradely; retrograde P waves after QRS\n' +
        '- Atrial flutter: Sawtooth waves at ~300/min, typically 2:1 or 4:1 block\n' +
        '- AFib: No organized P waves, irregularly irregular\n\n' +
        '**Wide Complex Tachycardia (QRS >= 120 ms):**\n' +
        'Three possibilities: VT, SVT with aberrancy (BBB), or SVT with pre-excitation\n' +
        '- **Brugada criteria** for VT: Absence of RS in all precordial leads, R-to-S >100 ms, AV dissociation, morphology criteria\n' +
        '- If in doubt, treat as VT (safer assumption)\n\n' +
        '**Atrial Fibrillation Management:**\n' +
        '- **Rate control**: Beta-blockers, non-DHP calcium channel blockers, digoxin. Target HR <110 bpm (lenient) or <80 bpm (strict)\n' +
        '- **Rhythm control**: Cardioversion (electrical or chemical). Antiarrhythmics: flecainide, amiodarone, sotalol\n' +
        '- **Anticoagulation**: CHA2DS2-VASc score guides decision. Score >= 2 (men) or >= 3 (women): DOAC recommended\n' +
        '- **Catheter ablation**: Pulmonary vein isolation is cornerstone. Supported by CASTLE-AF and CABANA trials for HFrEF\n\n' +
        '**Bradycardia Management:**\n' +
        '- Atropine for symptomatic sinus bradycardia or nodal-level AV block\n' +
        '- Temporary pacing for hemodynamically unstable bradycardia\n' +
        '- Permanent pacemaker: symptomatic sinus node dysfunction, Mobitz II, complete heart block',
      keyTerms: [
        { term: 'AVNRT', definition: 'Atrioventricular nodal re-entrant tachycardia — most common SVT, caused by re-entry within or near the AV node using fast and slow pathways', pronunciation: 'A-V-N-R-T' },
        { term: 'CHA2DS2-VASc score', definition: 'Stroke risk stratification for AFib: Congestive HF, Hypertension, Age >= 75 (2 pts), Diabetes, Stroke/TIA (2 pts), Vascular disease, Age 65-74, Sex (female)' },
        { term: 'Pulmonary vein isolation', definition: 'Catheter ablation technique creating electrical isolation around pulmonary vein ostia to eliminate AF triggers' },
        { term: 'Brugada criteria', definition: 'Stepwise algorithm for differentiating VT from SVT with aberrancy in wide complex tachycardia' },
        { term: 'Torsades de pointes', definition: 'Polymorphic VT in prolonged QT setting with twisting morphology; treated with IV magnesium and overdrive pacing', pronunciation: 'tor-SAHD deh PWANT' },
        { term: 'Chronotropic incompetence', definition: 'Inability to appropriately increase heart rate with physiological demand' },
      ],
      examples: [
        'A 28-year-old with sudden palpitations at 180 bpm, narrow QRS and pseudo-r\' in V1 — classic AVNRT. Vagal maneuvers or IV adenosine first-line.',
        'A 72-year-old on amiodarone with QTc of 560 ms and polymorphic VT — torsades de pointes. Immediate IV magnesium 2g and stop offending drug.',
      ],
      clinicalNotes: 'The EAST-AFNET 4 trial demonstrated that early rhythm control (within 1 year of AFib diagnosis) improved outcomes, shifting practice toward earlier rhythm control strategies.',
    },

    4: {
      level: 4,
      summary: 'Advanced arrhythmia management integrates invasive electrophysiology study findings, advanced mapping, ablation strategies, cardiac implantable electronic devices, and genetic arrhythmia syndromes.',
      explanation:
        '**Electrophysiology Study (EPS):**\n' +
        'Invasive study using intracardiac catheters to record and stimulate the heart\'s electrical system.\n' +
        '- **Diagnostic EPS**: Measures conduction intervals (AH, HV), assesses SA/AV node function, induces arrhythmias\n' +
        '- **AH interval** (55-125 ms): Reflects AV nodal conduction\n' +
        '- **HV interval** (35-55 ms): Reflects His-Purkinje conduction; prolonged HV (>70 ms) predicts progression to advanced block\n' +
        '- **Programmed stimulation**: Extrastimuli assess VT/VF inducibility for risk stratification\n\n' +
        '**Advanced Mapping and Ablation:**\n' +
        '- **3D electroanatomic mapping** (CARTO, EnSite): Voltage and activation maps\n' +
        '  - Voltage mapping: Dense scar <0.5 mV, border zone 0.5-1.5 mV in ventricle\n' +
        '  - Activation mapping: Traces wavefront propagation to identify re-entry circuits\n' +
        '  - Entrainment mapping: Pacing during tachycardia confirms circuit involvement\n' +
        '- **Ablation energy**: RF (standard), cryoablation (near AV node), pulsed field ablation (PFA, emerging with tissue selectivity)\n\n' +
        '**Specific Ablation Approaches:**\n' +
        '- **AFib**: Wide-area circumferential ablation (WACA) around PV ostia. Additional targets: posterior wall, LAA isolation, non-PV triggers\n' +
        '- **VT**: Substrate-based approach targeting scar border zone channels; epicardial access when endocardial ablation fails\n' +
        '- **Typical atrial flutter**: Cavotricuspid isthmus ablation; >95% acute success\n\n' +
        '**Cardiac Implantable Electronic Devices (CIEDs):**\n' +
        '- **ICD indications**: Secondary prevention (survived VF/sustained VT) or primary prevention (LVEF <= 35% on optimal therapy >= 3 months)\n' +
        '- **CRT**: LVEF <= 35%, LBBB, QRS >= 150 ms, NYHA II-IV on GDMT. LBBB with QRS >= 150 ms has strongest evidence\n' +
        '- **Leadless pacemakers**: Micra — single-chamber VVIR; transcatheter delivery avoids lead complications\n' +
        '- **Subcutaneous ICD (S-ICD)**: No transvenous leads; preferred for younger patients or prior device infections\n\n' +
        '**Inherited Arrhythmia Syndromes:**\n' +
        '- **LQTS**: 17+ genetic subtypes. Risk stratification by genotype, QTc, sex, and history\n' +
        '- **Brugada syndrome**: SCN5A mutations in ~20-25%. Ajmaline/procainamide challenge for unmasking\n' +
        '- **ARVC**: Revised Task Force criteria. Desmosomal mutations (PKP2 most common). Exercise restriction critical',
      keyTerms: [
        { term: 'Electroanatomic mapping', definition: '3D reconstruction of cardiac chambers with voltage and activation data for guiding ablation' },
        { term: 'Pulsed field ablation (PFA)', definition: 'Non-thermal ablation using irreversible electroporation with tissue selectivity for cardiomyocytes' },
        { term: 'Entrainment mapping', definition: 'Pacing during tachycardia to determine if a site is within the re-entry circuit; PPI-TCL <30 ms confirms' },
        { term: 'CRT-D', definition: 'Cardiac resynchronization therapy defibrillator — biventricular pacing with defibrillation for HFrEF with conduction delay' },
        { term: 'Subcutaneous ICD (S-ICD)', definition: 'Entirely extravascular defibrillator avoiding transvenous lead complications' },
      ],
      clinicalNotes: 'VANISH trial showed catheter ablation superior to escalated antiarrhythmic therapy for recurrent VT in ischemic cardiomyopathy. PFA is transforming AFib ablation with near elimination of esophageal and phrenic nerve injury (ADVENT trial).',
    },

    5: {
      level: 5,
      summary: 'Expert-level arrhythmia management encompasses computational modeling, optogenetics, gene therapy, AI-driven risk prediction, and novel device technologies redefining electrophysiology.',
      explanation:
        '**Computational Modeling and Digital Twins:**\n' +
        'Patient-specific models integrating cardiac MRI fibrosis data with electrophysiological simulations predict VT circuits and ' +
        'guide ablation strategy. VARP study demonstrated virtual heart models identify optimal ablation targets comparable to conventional mapping.\n\n' +
        '**Molecular Mechanisms and Targets:**\n' +
        '- **Gap junction remodeling**: Connexin43 lateralization creates conduction heterogeneity. Rotigaptide enhances coupling in preclinical models.\n' +
        '- **Calcium handling**: RyR2 leak, SERCA2a dysfunction, calmodulin mutations drive DAD-mediated arrhythmias. Dantrolene stabilizes RyR2 for CPVT.\n' +
        '- **Fibrosis signaling**: TGF-beta, galectin-3, periostin drive arrhythmogenic substrate. Anti-fibrotic therapies under investigation for AF.\n\n' +
        '**Gene Therapy:**\n' +
        '- AAV9-SERCA2a gene transfer (CUPID 2) — proof of concept for arrhythmia substrate modification\n' +
        '- Allele-specific silencing (siRNA/shRNA) for dominant-negative mutations in inherited arrhythmias\n' +
        '- Biological pacemakers: TBX18 gene transfer converts cardiomyocytes to pacemaker cells in preclinical models\n\n' +
        '**Optogenetics:**\n' +
        '- Channelrhodopsin-2 in cardiomyocytes enables light-based pacing and arrhythmia termination experimentally\n' +
        '- Could theoretically replace painful electrical shocks\n' +
        '- Challenges: gene delivery efficiency, immunogenicity, implantable light sources\n\n' +
        '**AI in Arrhythmia Management:**\n' +
        '- Deep learning for automated arrhythmia detection (>95% sensitivity for AF and VT)\n' +
        '- Reinforcement learning for real-time ICD programming optimization\n' +
        '- EAGLE trial: AI-guided ECG screening detected undiagnosed AF with NNS ~14\n\n' +
        '**Emerging Device Technologies:**\n' +
        '- **Conduction system pacing (CSP)**: Left bundle branch area pacing (LBBAP) as physiological alternative to BiV-CRT\n' +
        '- **Extravascular ICD (EV-ICD)**: Substernal lead provides defibrillation and ATP without transvenous access\n' +
        '- **WiSE-CRT**: Wireless LV endocardial pacing via acoustic energy\n' +
        '- **SBRT for VT**: 25 Gy to VT substrate. ENCORE-VT and RADIATE trials show promise for refractory cases\n\n' +
        '**Active Controversies:**\n' +
        '- Early vs. delayed ICD post-MI (PROTECT-ICD investigating)\n' +
        '- Empiric ICD programming (MADIT-RIT: high-rate/prolonged detection reduces inappropriate shocks)\n' +
        '- AF ablation as first-line: STOP AF First and EARLY-AF support cryoablation over drugs initially',
      keyTerms: [
        { term: 'Computational cardiac modeling', definition: 'Patient-specific digital twin using MRI anatomy and fibrosis data with EP simulations to predict arrhythmia circuits' },
        { term: 'Conduction system pacing', definition: 'His bundle or left bundle branch pacing to maintain physiological ventricular activation, alternative to BiV pacing' },
        { term: 'SBRT for VT', definition: 'Non-invasive focused radiation (25 Gy) to arrhythmogenic substrate for refractory ventricular tachycardia' },
        { term: 'Biological pacemaker', definition: 'Gene therapy using TBX18 or ion channel genes to create cells with spontaneous pacemaker activity' },
        { term: 'Optogenetic defibrillation', definition: 'Experimental use of light-sensitive channels in cardiomyocytes to terminate arrhythmias with light instead of electricity' },
      ],
      clinicalNotes: 'Conduction system pacing (LBBAP) is increasingly adopted as a more physiological CRT alternative. SBRT for VT should be reserved for patients who have failed catheter ablation given uncertain long-term safety. Stay current with rapidly evolving HRS/EHRA/ACC/AHA device and AF management guidelines.',
    },
  },

  media: [
    { id: 'arrhythmia-classification', type: 'diagram', filename: 'arrhythmia-classification.svg', title: 'Classification of Cardiac Arrhythmias', description: 'Flowchart classifying arrhythmias by origin, rate, and mechanism' },
    { id: 'wide-complex-algorithm', type: 'diagram', filename: 'wide-complex-tachycardia-algorithm.svg', title: 'Wide Complex Tachycardia Algorithm', description: 'Stepwise approach to differentiating VT from SVT with aberrancy' },
  ],
  citations: [
    { id: 'zipes-braunwald', type: 'textbook', title: 'Braunwald\'s Heart Disease', authors: ['Zipes, D.P.', 'Libby, P.', 'Bonow, R.O.'], source: 'Elsevier', license: 'All rights reserved' },
    { id: 'hindricks-2020-afib', type: 'article', title: '2020 ESC Guidelines for AF management', authors: ['Hindricks, G.', 'Potpara, T.'], source: 'European Heart Journal' },
  ],
  crossReferences: [
    { targetId: 'ecg-interpretation', targetType: 'concept', relationship: 'related', label: 'ECG Interpretation' },
    { targetId: 'heart-failure-classification', targetType: 'concept', relationship: 'related', label: 'Heart Failure Classification' },
    { targetId: 'echocardiography', targetType: 'concept', relationship: 'see-also', label: 'Echocardiography' },
  ],
  tags: {
    systems: ['cardiovascular'],
    topics: ['electrophysiology', 'arrhythmia', 'cardiology', 'pharmacology'],
    keywords: ['arrhythmia', 'atrial fibrillation', 'ventricular tachycardia', 'SVT', 'ablation', 'pacemaker', 'ICD', 'AV block'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'emergency-medicine'] },
  },
  createdAt: '2025-01-30',
  updatedAt: '2025-01-30',
  version: 1,
  status: 'published',
};
