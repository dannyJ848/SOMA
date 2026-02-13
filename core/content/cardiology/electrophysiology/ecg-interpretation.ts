import { EducationalContent } from '../../types';

/**
 * ECG Interpretation
 *
 * Comprehensive educational content on electrocardiogram interpretation
 * covering normal sinus rhythm, axis determination, interval analysis,
 * and recognition of common pathological patterns.
 */
export const ecgInterpretation: EducationalContent = {
  id: 'ecg-interpretation',
  type: 'concept',
  name: 'ECG Interpretation',
  nameEs: 'Interpretacion del Electrocardiograma',
  alternateNames: ['EKG Reading', '12-Lead ECG Analysis', 'Electrocardiography'],

  levels: {
    1: {
      level: 1,
      summary:
        'An ECG is a simple, painless test that records the electrical activity of your heart ' +
        'using small stickers placed on your chest.',
      explanation:
        'Your heart beats because of tiny electrical signals that travel through it in a ' +
        'specific pattern. An ECG (electrocardiogram) is a test that picks up these signals ' +
        'through sticky patches called electrodes placed on your skin. The machine draws a ' +
        'line on paper that goes up and down with each heartbeat. Doctors look at the shape ' +
        'of these lines to make sure the heart is working correctly.\n\n' +
        'Think of the ECG like a seismograph for your heart — just as a seismograph records ' +
        'earthquake waves, an ECG records the electrical waves your heart produces every time ' +
        'it beats. A normal ECG shows a repeating pattern with small bumps and one tall spike ' +
        'for each heartbeat. If the pattern looks different from normal, it can tell the doctor ' +
        'what might be wrong.\n\n' +
        'The test usually takes about 10 minutes. You lie still while 10 electrodes are placed ' +
        'on your chest, arms, and legs. The machine records your heart rhythm and prints it on ' +
        'paper for the doctor to read.',
      keyTerms: [
        {
          term: 'Electrocardiogram (ECG/EKG)',
          definition: 'A test that records the electrical signals in your heart',
          pronunciation: 'eh-LEK-tro-KAR-dee-oh-gram',
        },
        {
          term: 'Electrode',
          definition: 'A small sticky patch placed on the skin to detect electrical signals',
        },
        {
          term: 'Heart rhythm',
          definition: 'The pattern of electrical signals that make the heart beat regularly',
        },
      ],
      analogies: [
        'An ECG is like a seismograph for your heart — it records the electrical earthquakes ' +
        'that make your heart pump.',
        'Reading an ECG is like reading sheet music — doctors learn to recognize patterns that ' +
        'tell a story about your heart.',
      ],
      patientCounselingPoints: [
        'The test is completely painless and safe — no electricity goes into your body.',
        'Stay as still as possible during the recording for the clearest results.',
        'The sticky patches may feel cold but are easy to remove afterwards.',
      ],
    },

    2: {
      level: 2,
      summary:
        'A standard 12-lead ECG records the heart\'s electrical activity from 12 different ' +
        'angles using 10 electrodes, producing a waveform with distinct P, QRS, and T waves.',
      explanation:
        'The ECG records voltage changes on the body surface caused by depolarization and ' +
        'repolarization of the heart muscle. A standard 12-lead ECG uses 10 electrodes (4 limb, ' +
        '6 chest) to create 12 different views of the heart\'s electrical activity.\n\n' +
        '**The Normal ECG Waveform:**\n' +
        '- **P wave**: Represents the electrical activity that causes the atria (upper chambers) ' +
        'to contract\n' +
        '- **QRS complex**: Represents the electrical activity that causes the ventricles (lower ' +
        'chambers) to contract; this is the tall spike\n' +
        '- **T wave**: Represents the ventricles recovering and getting ready for the next beat\n\n' +
        '**Key Intervals:**\n' +
        '- **PR interval**: The time from the start of the P wave to the start of the QRS ' +
        'complex (normally 0.12-0.20 seconds)\n' +
        '- **QRS duration**: How long it takes for the ventricles to depolarize (normally less ' +
        'than 0.12 seconds)\n' +
        '- **QT interval**: The total time for ventricular depolarization and repolarization\n\n' +
        '**Heart Rate Calculation:**\n' +
        'On standard ECG paper (speed 25 mm/s), estimate heart rate by counting large boxes ' +
        'between two R waves and dividing 300 by that number. Normal resting heart rate is ' +
        '60-100 beats per minute.\n\n' +
        '**Normal Sinus Rhythm Criteria:**\n' +
        '- Regular rhythm\n' +
        '- Rate 60-100 bpm\n' +
        '- P wave before every QRS\n' +
        '- QRS after every P wave\n' +
        '- Upright P waves in leads I, II, aVF',
      keyTerms: [
        {
          term: 'P wave',
          definition: 'The small upward wave representing atrial depolarization ' +
            '(contraction of the upper chambers)',
        },
        {
          term: 'QRS complex',
          definition: 'The sharp, tall wave representing ventricular depolarization ' +
            '(contraction of the lower chambers)',
        },
        {
          term: 'T wave',
          definition: 'The wave following the QRS complex, representing ventricular ' +
            'repolarization (recovery)',
        },
        {
          term: 'PR interval',
          definition: 'The time between the start of atrial and ventricular ' +
            'depolarization, normally 0.12-0.20 seconds',
        },
        {
          term: 'Sinus rhythm',
          definition: 'Normal heart rhythm originating from the sinoatrial (SA) node',
        },
      ],
      analogies: [
        'The 12 leads are like 12 cameras filming the same event from different angles — ' +
        'each gives a unique perspective on the heart\'s electrical activity.',
      ],
      examples: [
        'A PR interval longer than 0.20 seconds suggests a delay in conduction between ' +
        'the atria and ventricles (heart block).',
        'A heart rate below 60 bpm is called bradycardia; above 100 bpm is called tachycardia.',
      ],
    },

    3: {
      level: 3,
      summary:
        'ECG interpretation involves systematic analysis of rate, rhythm, axis, intervals, ' +
        'and morphology across 12 leads to identify conduction abnormalities, ischemic changes, ' +
        'hypertrophy, and arrhythmias.',
      explanation:
        '**Systematic ECG Interpretation Approach:**\n\n' +
        '1. **Rate**: Count R-R intervals. Regular rhythm: 300 divided by number of large boxes ' +
        'between R waves. Irregular: count QRS complexes in 10 seconds and multiply by 6.\n\n' +
        '2. **Rhythm**: Assess regularity, P wave morphology, P-QRS relationship. Normal sinus ' +
        'rhythm requires upright P waves in II with consistent PR intervals.\n\n' +
        '3. **Axis**: The mean electrical axis indicates the overall direction of ventricular ' +
        'depolarization.\n' +
        '   - Normal axis: -30 to +90 degrees\n' +
        '   - Left axis deviation (LAD): -30 to -90 degrees — seen in left anterior fascicular ' +
        'block, LVH, inferior MI\n' +
        '   - Right axis deviation (RAD): +90 to +180 degrees — seen in RVH, PE, lateral MI\n' +
        '   - Quick method: Lead I positive + Lead aVF positive = normal axis\n\n' +
        '4. **Intervals**:\n' +
        '   - PR interval (0.12-0.20 s): Prolonged = first-degree AV block; Short + delta ' +
        'wave = WPW\n' +
        '   - QRS duration (<0.12 s): Prolonged = bundle branch block or ventricular rhythm\n' +
        '   - QT interval: QTc using Bazett formula. Normal QTc <0.44 s (men), <0.46 s (women)\n\n' +
        '5. **ST Segment and T Wave Analysis**:\n' +
        '   - ST elevation: Acute MI (STEMI) if meeting criteria, pericarditis if diffuse\n' +
        '   - ST depression: Ischemia, reciprocal changes, digoxin effect\n' +
        '   - T wave inversion: Ischemia, strain pattern, normal variant in certain leads\n\n' +
        '6. **Chamber Enlargement**:\n' +
        '   - Left atrial enlargement: Bifid P wave in II (P mitrale), duration >0.12 s\n' +
        '   - Right atrial enlargement: Peaked P wave in II (P pulmonale), amplitude >2.5 mm\n' +
        '   - LVH: Sokolow-Lyon criteria (S in V1 + R in V5 or V6 >= 35 mm)\n' +
        '   - RVH: R > S in V1, right axis deviation\n\n' +
        '7. **Bundle Branch Blocks**:\n' +
        '   - RBBB: QRS >= 0.12 s, rsR\' in V1-V2, wide S in I and V6\n' +
        '   - LBBB: QRS >= 0.12 s, broad notched R in I, aVL, V5-V6, absent septal Q waves',
      keyTerms: [
        {
          term: 'Cardiac axis',
          definition: 'The mean direction of ventricular depolarization in the frontal plane, ' +
            'normally between -30 and +90 degrees',
          relatedTerms: ['Left axis deviation', 'Right axis deviation'],
        },
        {
          term: 'ST elevation',
          definition: 'Elevation of the ST segment above the baseline, indicating transmural ' +
            'ischemia when localized to a coronary territory',
        },
        {
          term: 'Bundle branch block',
          definition: 'Delay or block of conduction through the right or left bundle branch, ' +
            'producing a wide QRS complex',
          relatedTerms: ['RBBB', 'LBBB'],
        },
        {
          term: 'QTc',
          definition: 'Heart rate-corrected QT interval; prolongation increases risk of ' +
            'torsades de pointes',
        },
        {
          term: 'Sokolow-Lyon criteria',
          definition: 'Voltage criteria for LVH: S wave in V1 + R wave in V5 or V6 >= 35 mm',
        },
        {
          term: 'Delta wave',
          definition: 'Slurred upstroke of the QRS complex caused by ventricular pre-excitation ' +
            'via an accessory pathway in WPW',
        },
      ],
      examples: [
        'A patient with chest pain showing ST elevation in leads II, III, aVF with reciprocal ' +
        'depression in I and aVL has an inferior STEMI.',
        'New LBBB in acute chest pain is treated as a STEMI equivalent warranting emergent ' +
        'reperfusion therapy.',
      ],
      clinicalNotes:
        'Always compare with prior ECGs when available. In LBBB, use Sgarbossa criteria ' +
        'for ischemia assessment.',
    },

    4: {
      level: 4,
      summary:
        'Advanced ECG interpretation requires understanding electrophysiological mechanisms ' +
        'including automaticity, triggered activity, and re-entry, as well as recognition of ' +
        'Brugada pattern, Wellens syndrome, and de Winter T waves.',
      explanation:
        '**Ischemic Patterns and Coronary Localization:**\n' +
        '- Anterior wall (LAD): V1-V4\n' +
        '- Lateral wall (LCx): I, aVL, V5-V6\n' +
        '- Inferior wall (RCA/LCx): II, III, aVF\n' +
        '- Posterior wall: Reciprocal in V1-V3 (tall R, ST depression) — confirm with V7-V9\n' +
        '- Right ventricle: ST elevation in V4R\n\n' +
        '**Wellens Syndrome:**\n' +
        'Deeply inverted or biphasic T waves in V2-V3 during pain-free intervals indicate ' +
        'critical proximal LAD stenosis. High risk for anterior MI — do not perform stress ' +
        'testing.\n\n' +
        '**de Winter T Waves:**\n' +
        'Upsloping ST depression at the J point with tall, symmetric T waves in precordial ' +
        'leads — STEMI equivalent for acute LAD occlusion.\n\n' +
        '**Brugada Pattern:**\n' +
        '- Type 1: Coved ST elevation >= 2 mm in V1-V3 with T wave inversion (diagnostic)\n' +
        '- Type 2: Saddleback pattern (requires provocative testing)\n' +
        '- Risk of ventricular fibrillation and sudden cardiac death\n\n' +
        '**Sgarbossa Criteria (STEMI in LBBB):**\n' +
        '- Concordant ST elevation >= 1 mm in any lead (5 points)\n' +
        '- Concordant ST depression >= 1 mm in V1-V3 (3 points)\n' +
        '- Discordant ST elevation >= 5 mm (2 points) — modified: ST/S ratio >= 25%\n' +
        '- Score >= 3 = high specificity for acute MI\n\n' +
        '**Arrhythmia Mechanisms:**\n' +
        '- **Automaticity**: Enhanced normal or abnormal automaticity\n' +
        '- **Triggered activity**: EADs (phase 2/3, linked to long QT); DADs (phase 4, ' +
        'linked to calcium overload)\n' +
        '- **Re-entry**: Two pathways, unidirectional block, slow conduction. Basis for ' +
        'AVNRT, AVRT, flutter, VT\n\n' +
        '**Hyperkalemia ECG Progression:**\n' +
        '1. Peaked T waves (K+ 5.5-6.5 mEq/L)\n' +
        '2. PR prolongation, P wave flattening (K+ 6.5-7.5)\n' +
        '3. QRS widening (K+ 7.0-8.0)\n' +
        '4. Sine wave pattern leading to VF or asystole (K+ >8.0)\n\n' +
        '**J Wave Syndromes:**\n' +
        'J point elevation can represent benign early repolarization or pathological ' +
        'conditions. Inferior/lateral distribution with horizontal ST segments carries ' +
        'higher risk.',
      keyTerms: [
        {
          term: 'Wellens syndrome',
          definition: 'Deeply inverted or biphasic T waves in V2-V3 during pain-free ' +
            'intervals, indicating critical proximal LAD stenosis',
        },
        {
          term: 'Brugada pattern',
          definition: 'Coved or saddleback ST elevation in V1-V3 associated with sudden ' +
            'cardiac death risk',
        },
        {
          term: 'Sgarbossa criteria',
          definition: 'Point-based system for diagnosing acute MI in the presence of LBBB',
        },
        {
          term: 'Early afterdepolarization (EAD)',
          definition: 'Abnormal depolarization during phase 2 or 3, associated with ' +
            'prolonged QT and torsades',
        },
        {
          term: 'Delayed afterdepolarization (DAD)',
          definition: 'Abnormal depolarization after full repolarization, associated with ' +
            'calcium overload',
        },
        {
          term: 'Re-entry circuit',
          definition: 'Arrhythmia mechanism requiring two pathways with different conduction ' +
            'properties and unidirectional block',
        },
      ],
      clinicalNotes:
        'Wellens is a do-not-miss pattern — proceed to catheterization, not stress testing. ' +
        'de Winter is a STEMI equivalent. Always obtain V4R in inferior STEMI to assess RV ' +
        'involvement.',
    },

    5: {
      level: 5,
      summary:
        'Expert ECG interpretation integrates vectorcardiographic principles, advanced ' +
        'electrophysiological mapping, computational analysis, and machine learning for ' +
        'complex rhythm disorders and channelopathies.',
      explanation:
        '**Vectorcardiographic Principles:**\n' +
        'The 12-lead ECG represents projections of the cardiac vector loop. The Frank lead ' +
        'system (X, Y, Z) provides orthogonal representation derivable via Kors or inverse ' +
        'Dower transformation.\n\n' +
        '**Advanced Repolarization Analysis:**\n' +
        '- **T-wave alternans (TWA)**: Beat-to-beat microvolt T wave variation — marker of ' +
        'repolarization instability and arrhythmia risk.\n' +
        '- **QT dispersion**: Max-min QT across 12 leads; >80 ms reflects heterogeneous ' +
        'repolarization. Clinical utility debated.\n' +
        '- **Tp-Te interval**: Transmural repolarization dispersion; >100 ms increases ' +
        'torsades and sudden death risk.\n\n' +
        '**Channelopathies:**\n' +
        '- **Long QT**: LQT1 (KCNQ1, exercise-triggered), LQT2 (KCNH2, auditory-triggered), ' +
        'LQT3 (SCN5A, bradycardia-triggered). Genotype guides therapy — beta-blockers for ' +
        'LQT1/2, mexiletine for LQT3.\n' +
        '- **Short QT**: QTc <340 ms, gain-of-function K+ channel mutations.\n' +
        '- **CPVT**: Normal resting ECG; exercise-induced bidirectional VT pathognomonic. ' +
        'RYR2 mutations in ~60%.\n\n' +
        '**Signal-Averaged ECG (SAECG):**\n' +
        'Detects late potentials indicating slow conduction zones (re-entry substrate). ' +
        'Criteria: filtered QRS >114 ms, RMS40 <20 uV, LAS >38 ms.\n\n' +
        '**Computational and AI Approaches:**\n' +
        '- Deep learning detects reduced EF, HCM, and AF from sinus rhythm ECGs (AUC >0.85).\n' +
        '- ECG age estimation: ECG age exceeding chronological age predicts mortality.\n' +
        '- EAGLE trial: AI-guided screening detected undiagnosed AF with NNS of ~14.\n\n' +
        '**Emerging Technologies:**\n' +
        '- Body surface potential mapping (BSPM) with 64+ electrodes\n' +
        '- Non-invasive ECGi combining BSPM with CT-derived geometry\n' +
        '- Wearable single-lead monitoring validated for AF but limited for ST analysis\n\n' +
        '**Electrode Misplacement Recognition:**\n' +
        '- LA/RA reversal: Inverted P and QRS in lead I with normal aVR\n' +
        '- Precordial misplacement: Abrupt voltage changes between adjacent leads\n' +
        '- Dextrocardia mimics LA/RA reversal with poor precordial R wave progression',
      keyTerms: [
        {
          term: 'T-wave alternans (TWA)',
          definition: 'Microvolt-level beat-to-beat T wave variation reflecting ' +
            'repolarization heterogeneity and arrhythmia risk',
        },
        {
          term: 'Signal-averaged ECG',
          definition: 'High-resolution technique detecting late potentials that indicate ' +
            're-entrant VT substrate',
        },
        {
          term: 'Electrocardiographic imaging (ECGi)',
          definition: 'Non-invasive mapping combining body surface potentials with CT-derived ' +
            'cardiac geometry',
        },
        {
          term: 'Channelopathy',
          definition: 'Genetic disorders of cardiac ion channels predisposing to lethal ' +
            'arrhythmias',
          relatedTerms: ['LQTS', 'Brugada syndrome', 'CPVT', 'Short QT syndrome'],
        },
        {
          term: 'Tp-Te interval',
          definition: 'Peak-to-end T wave interval reflecting transmural dispersion of ' +
            'ventricular repolarization',
        },
      ],
      clinicalNotes:
        'AI-based ECG interpretation shows promise but should not replace clinical judgment. ' +
        'Genotype-phenotype correlations in channelopathies have direct therapeutic ' +
        'implications. Early repolarization risk stratification remains an active research area.',
    },
  },

  media: [
    {
      id: 'ecg-normal-sinus',
      type: 'diagram',
      filename: 'normal-sinus-rhythm.svg',
      title: 'Normal Sinus Rhythm ECG',
      description: 'Labeled 12-lead ECG showing normal sinus rhythm',
    },
    {
      id: 'ecg-stemi-patterns',
      type: 'diagram',
      filename: 'stemi-localization.svg',
      title: 'STEMI Localization by ECG Leads',
      description: 'Coronary artery territories and corresponding ECG lead changes',
    },
  ],

  citations: [
    {
      id: 'dubin-rapid-ecg',
      type: 'textbook',
      title: 'Rapid Interpretation of EKGs',
      authors: ['Dubin, D.'],
      source: 'COVER Publishing',
      license: 'All rights reserved',
    },
    {
      id: 'goldberger-clinical-ecg',
      type: 'textbook',
      title: 'Clinical Electrocardiography: A Simplified Approach',
      authors: ['Goldberger, A.L.', 'Goldberger, Z.D.', 'Shvilkin, A.'],
      source: 'Elsevier',
      license: 'All rights reserved',
    },
  ],

  crossReferences: [
    {
      targetId: 'arrhythmias',
      targetType: 'concept',
      relationship: 'related',
      label: 'Cardiac Arrhythmias',
    },
    {
      targetId: 'echocardiography',
      targetType: 'concept',
      relationship: 'related',
      label: 'Echocardiography',
    },
    {
      targetId: 'coronary-stenting',
      targetType: 'concept',
      relationship: 'see-also',
      label: 'Coronary Stenting',
    },
  ],

  tags: {
    systems: ['cardiovascular'],
    topics: ['electrophysiology', 'diagnostics', 'cardiology'],
    keywords: [
      'ECG',
      'EKG',
      'electrocardiogram',
      '12-lead',
      'ST elevation',
      'arrhythmia detection',
    ],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'emergency-medicine', 'surgery'],
    },
  },

  createdAt: '2025-01-30',
  updatedAt: '2025-01-30',
  version: 1,
  status: 'published',
};
