/**
 * Physical Examination Education Database
 *
 * Deep educational content about how to perform physical examinations
 * with attending physician-level understanding.
 */

import type {
  SystemExamEducation,
  ExamSystemId,
} from './types.js';

// ============================================
// Cardiovascular Examination
// ============================================

export const CARDIOVASCULAR_EXAM: SystemExamEducation = {
  id: 'cardiovascular',
  name: 'Cardiovascular Exam',
  fullName: 'Cardiovascular System Examination',

  overview: `The cardiovascular examination assesses the heart and blood vessels through a systematic
approach combining inspection, palpation, and auscultation. It reveals information about cardiac
structure, function, and the adequacy of circulation. A skilled examiner can diagnose many conditions
at the bedside that might otherwise require extensive testing.`,

  clinicalImportance: `Heart disease is the leading cause of death worldwide. The cardiovascular exam
can detect valvular disease, heart failure, arrhythmias, pericardial disease, and vascular problems.
Many findings on physical exam have direct implications for treatment - a new murmur in a patient
with fever suggests endocarditis; elevated JVP indicates volume overload. The exam guides the
urgency and type of further workup needed.`,

  equipmentNeeded: [
    {
      name: 'Stethoscope',
      purpose: 'Auscultation of heart sounds and murmurs',
      howToUse: 'Use the diaphragm for high-pitched sounds (S1, S2, most murmurs) and the bell for low-pitched sounds (S3, S4, mitral stenosis murmur). Apply firm pressure with diaphragm, light pressure with bell.',
      alternatives: 'Tunable stethoscope allows switching by pressure',
      tips: [
        'Warm the stethoscope before placing on patient',
        'Ensure good contact with skin - body hair may cause artifacts',
        'Practice recognizing your own pulse to avoid confusing it with patient sounds',
      ],
    },
    {
      name: 'Penlight',
      purpose: 'Assessment of JVP waveform, capillary refill',
      howToUse: 'Shine tangentially across neck to visualize JVP; press nail bed to assess capillary refill',
      tips: ['Dim room lights when assessing JVP for better visualization'],
    },
    {
      name: 'Blood pressure cuff',
      purpose: 'Measuring blood pressure',
      howToUse: 'Use appropriate cuff size (bladder should encircle 80% of arm). Position at heart level.',
      tips: [
        'Wrong cuff size is the most common source of error',
        'Small cuff = falsely elevated BP; large cuff = falsely low BP',
      ],
    },
  ],

  patientPositioning: [
    {
      position: 'Supine at 45 degrees',
      whenUsed: 'JVP assessment, standard cardiac auscultation',
      howToAchieve: 'Raise head of bed or use pillows to achieve 45-degree angle',
      alternatives: ['Fully supine if patient cannot tolerate elevation'],
      considerations: 'This angle optimizes JVP visualization - if JVP too high to see, increase angle; if too low, decrease angle',
    },
    {
      position: 'Left lateral decubitus',
      whenUsed: 'Accentuating mitral valve sounds, palpating PMI',
      howToAchieve: 'Patient rolls onto left side, left arm under head',
      alternatives: ['Partial left lateral if full position uncomfortable'],
      considerations: 'Brings apex closer to chest wall, makes S3, S4, and mitral stenosis murmur more audible',
    },
    {
      position: 'Sitting up, leaning forward',
      whenUsed: 'Accentuating aortic regurgitation murmur',
      howToAchieve: 'Patient sits at edge of bed, leans forward with arms on knees',
      alternatives: ['Standing and leaning forward against exam table'],
      considerations: 'Brings aortic valve closer to chest wall, ask patient to exhale and hold',
    },
  ],

  approach: {
    sequence: [
      {
        order: 1,
        action: 'Inspection - General appearance',
        rationale: 'Assess overall cardiovascular status before focused exam',
        whatToObserve: [
          'Respiratory distress (suggests heart failure)',
          'Cyanosis (central vs peripheral)',
          'Pallor (anemia, poor perfusion)',
          'Diaphoresis (sympathetic activation)',
          'Cachexia (chronic heart failure)',
        ],
        transitionTip: 'While introducing yourself, observe the patient from the doorway',
      },
      {
        order: 2,
        action: 'Inspect and palpate hands',
        rationale: 'Peripheral signs of cardiac disease',
        whatToObserve: [
          'Clubbing (cyanotic heart disease, endocarditis)',
          'Splinter hemorrhages (endocarditis)',
          'Janeway lesions (endocarditis)',
          'Peripheral cyanosis',
          'Capillary refill',
        ],
      },
      {
        order: 3,
        action: 'Radial pulse',
        rationale: 'Assess rate, rhythm, character, and symmetry',
        whatToObserve: [
          'Rate',
          'Rhythm (regular, irregular, irregularly irregular)',
          'Character (bounding, thready, slow-rising)',
          'Volume',
          'Symmetry (compare both sides)',
        ],
      },
      {
        order: 4,
        action: 'Blood pressure',
        rationale: 'Fundamental cardiovascular parameter',
        whatToObserve: [
          'Systolic and diastolic values',
          'Pulse pressure',
          'Arm-to-arm difference',
          'Orthostatic changes if indicated',
        ],
      },
      {
        order: 5,
        action: 'Carotid pulse',
        rationale: 'Central pulse reflects LV function and aortic valve',
        whatToObserve: [
          'Amplitude',
          'Contour (slow-rising in AS, bisferiens in AR)',
          'Carotid bruits',
        ],
        transitionTip: 'Palpate one carotid at a time to avoid compromising cerebral blood flow',
      },
      {
        order: 6,
        action: 'Jugular venous pressure (JVP)',
        rationale: 'Reflects right atrial pressure and volume status',
        whatToObserve: [
          'Height above sternal angle',
          'Waveform (A wave, V wave)',
          'Hepatojugular reflux',
        ],
      },
      {
        order: 7,
        action: 'Precordial inspection',
        rationale: 'Visible pulsations indicate cardiac enlargement or hyperkinesis',
        whatToObserve: [
          'Apical impulse visibility',
          'Abnormal pulsations',
          'Chest wall deformities',
          'Scars from prior surgery',
        ],
      },
      {
        order: 8,
        action: 'Precordial palpation',
        rationale: 'PMI location and character indicate LV size and function',
        whatToObserve: [
          'PMI location, size, duration',
          'Heaves (RV enlargement)',
          'Thrills (palpable murmurs)',
          'Parasternal lift',
        ],
      },
      {
        order: 9,
        action: 'Auscultation - systematic',
        rationale: 'Heart sounds and murmurs reveal valvular and myocardial disease',
        whatToObserve: [
          'S1 and S2 intensity',
          'S3, S4',
          'Murmurs - timing, location, radiation, grade',
          'Rubs',
          'Clicks',
        ],
      },
      {
        order: 10,
        action: 'Peripheral pulses and edema',
        rationale: 'Assess vascular disease and volume status',
        whatToObserve: [
          'Femoral, popliteal, dorsalis pedis, posterior tibial pulses',
          'Dependent edema',
          'Skin changes of peripheral vascular disease',
        ],
      },
    ],
    adaptations: [
      {
        scenario: 'Acute chest pain',
        modification: 'Prioritize auscultation for new murmurs, friction rub; check for asymmetric pulses',
        rationale: 'New AR murmur suggests aortic dissection; friction rub suggests pericarditis',
      },
      {
        scenario: 'Suspected heart failure',
        modification: 'Focus on JVP, S3, pulmonary exam, peripheral edema',
        rationale: 'These findings guide diagnosis and treatment of volume overload',
      },
      {
        scenario: 'Suspected endocarditis',
        modification: 'Careful search for peripheral stigmata, new murmur, fever',
        rationale: 'Peripheral findings support diagnosis; murmur characterization guides management',
      },
    ],
    typicalDuration: '5-10 minutes for focused exam, 15-20 minutes for comprehensive',
    documentationTemplate: `CV: Regular rate and rhythm. Normal S1/S2, no murmurs/gallops/rubs. JVP not elevated.
PMI nondisplaced. No peripheral edema. Peripheral pulses intact and symmetric.`,
  },

  components: [
    {
      id: 'jvp',
      name: 'Jugular Venous Pressure',
      technique: 'inspection',

      howToPerform: {
        steps: [
          {
            order: 1,
            action: 'Position patient supine at 45 degrees',
            detail: 'Adjust angle to visualize the top of the JVP - increase if too high, decrease if not visible',
            tip: 'Most patients show JVP well at 45 degrees',
          },
          {
            order: 2,
            action: 'Turn patient head slightly to the left',
            detail: 'Exposes the right internal jugular vein, which is more reliable than external',
          },
          {
            order: 3,
            action: 'Identify the internal jugular vein pulsation',
            detail: 'Look for the double pulsation between the two heads of SCM, or just lateral to it',
            tip: 'Internal JV pulsation is not palpable (unlike carotid), varies with respiration, and shows complex waveform',
          },
          {
            order: 4,
            action: 'Find the top of the pulsation',
            detail: 'Identify the highest point of the oscillating column',
          },
          {
            order: 5,
            action: 'Measure vertical height above sternal angle',
            detail: 'Use a ruler or estimate the vertical distance from sternal angle to top of JVP',
          },
          {
            order: 6,
            action: 'Add 5 cm to get RA pressure',
            detail: 'The sternal angle is approximately 5 cm above the right atrium regardless of position',
          },
        ],
        landmarks: [
          {
            name: 'Sternal angle (Angle of Louis)',
            howToFind: 'Ridge at junction of manubrium and body of sternum, at level of 2nd rib',
            significance: 'Reference point for JVP measurement - approximately 5 cm above right atrium in any position',
          },
          {
            name: 'Sternocleidomastoid muscle',
            howToFind: 'Large muscle running from mastoid to sternum and clavicle',
            significance: 'Internal jugular vein runs between or just lateral to its two heads',
          },
        ],
        patientInstructions: 'Please relax and breathe normally. Turn your head slightly to the left.',
        examinerPosition: 'Standing at right side of patient, looking tangentially at neck',
        commonErrors: [
          'Confusing external jugular with internal jugular',
          'Measuring at wrong angle',
          'Confusing carotid pulsation with JVP',
          'Not allowing patient to relax (Valsalva raises JVP)',
        ],
      },

      normalFinding: {
        description: 'JVP ≤3 cm above the sternal angle (or ≤8 cm H2O total RA pressure)',
        variations: ['Slightly higher in supine position', 'Lower when sitting fully upright'],
        ageConsiderations: 'Normal values are the same across ages',
        documentationExample: 'JVP 2 cm above sternal angle at 45 degrees, with normal waveform',
      },

      abnormalFindings: [
        {
          name: 'Elevated JVP',
          description: 'JVP >3 cm above sternal angle',
          appearance: 'Visible pulsation higher in neck than normal',
          mechanism: 'Elevated right atrial pressure from volume overload, RV failure, or obstruction',
          associatedConditions: ['Heart failure', 'Pericardial tamponade', 'Constrictive pericarditis', 'Tricuspid regurgitation', 'PE'],
          severity: 'moderate',
          urgency: 'soon',
          nextSteps: ['Echo', 'CXR', 'BNP'],
          differentialDiagnosis: ['Volume overload', 'RV failure', 'Pericardial disease', 'SVC syndrome'],
          additionalTestsNeeded: ['Echocardiogram', 'BNP', 'CXR'],
          documentationExample: 'JVP elevated to angle of jaw at 45 degrees (>15 cm H2O)',
        },
        {
          name: 'Kussmaul sign',
          description: 'JVP rises with inspiration instead of falling',
          appearance: 'Paradoxical increase in JVP with deep inspiration',
          mechanism: 'Impaired RV filling during inspiration due to constrictive or restrictive physiology',
          associatedConditions: ['Constrictive pericarditis', 'RV infarction', 'Restrictive cardiomyopathy'],
          severity: 'severe',
          urgency: 'urgent',
          nextSteps: ['Echo', 'CT chest', 'Cath'],
          differentialDiagnosis: ['Constrictive pericarditis', 'Restrictive cardiomyopathy', 'RV infarction', 'Severe TR'],
          additionalTestsNeeded: ['Echocardiogram with respirometry', 'CT chest', 'Cardiac catheterization'],
          documentationExample: 'Kussmaul sign present - JVP rises with inspiration',
        },
        {
          name: 'Cannon A waves',
          description: 'Large, visible A waves in JVP',
          appearance: 'Prominent, sometimes explosive pulsations in neck',
          mechanism: 'Atrium contracting against closed tricuspid valve (AV dissociation)',
          associatedConditions: ['Complete heart block', 'Ventricular tachycardia', 'AV nodal reentrant tachycardia', 'Ventricular pacing'],
          severity: 'moderate',
          urgency: 'soon',
          nextSteps: ['ECG', 'Telemetry'],
          differentialDiagnosis: ['Heart block', 'VT', 'AVNRT'],
          additionalTestsNeeded: ['ECG', 'Holter monitor'],
          documentationExample: 'Intermittent cannon A waves visible, correlating with P waves not followed by QRS',
        },
      ],

      whatItAssesses: 'Right atrial pressure, volume status, right ventricular function',
      anatomy: 'The internal jugular vein connects directly to the right atrium via the SVC, creating a continuous fluid column. The JVP reflects RA pressure.',
      pathophysiology: 'Elevated JVP indicates increased RA pressure from volume overload (heart failure, renal failure), obstruction (tamponade, constrictive pericarditis), or RV failure (PE, RV infarct).',
      clinicalSignificance: 'JVP is the most reliable bedside measure of volume status and right heart function. It guides diuretic therapy in heart failure.',

      diagnosticAccuracy: {
        sensitivity: '70%',
        specificity: '79%',
        positiveLR: '3.3',
        negativeLR: '0.38',
        notes: 'For detecting elevated CVP >12 mmHg',
      },

      pitfalls: [
        'External jugular may be distended from local compression even with normal RA pressure',
        'Obese or muscular necks make visualization difficult',
        'Severe TR can cause prominent V waves that are hard to distinguish from arterial pulsation',
      ],

      practiceTips: [
        'Practice on normal patients first to learn normal appearance',
        'Use tangential lighting to better visualize pulsations',
        'Remember: JVP is biphasic (A and V waves) while carotid is monophasic',
        'JVP is not palpable - if you can feel it, it is the carotid',
      ],
    },
    {
      id: 'heart-sounds',
      name: 'Heart Sound Auscultation',
      technique: 'auscultation',

      howToPerform: {
        steps: [
          {
            order: 1,
            action: 'Position stethoscope at aortic area (right 2nd ICS)',
            detail: 'Use diaphragm, listen for S2 (loudest here), aortic murmurs',
            tip: 'S2 should be louder than S1 at the base',
          },
          {
            order: 2,
            action: 'Move to pulmonic area (left 2nd ICS)',
            detail: 'Listen for physiologic splitting of S2 with respiration',
          },
          {
            order: 3,
            action: 'Move to Erb\'s point (left 3rd ICS)',
            detail: 'Transitional area, good for AR murmur',
          },
          {
            order: 4,
            action: 'Move to tricuspid area (left lower sternal border)',
            detail: 'Listen for tricuspid murmurs, may hear VSD',
          },
          {
            order: 5,
            action: 'Move to mitral area (apex, 5th ICS MCL)',
            detail: 'S1 loudest here. Listen for mitral murmurs, S3, S4',
          },
          {
            order: 6,
            action: 'Switch to bell at apex',
            detail: 'Listen for low-pitched S3, S4, diastolic rumble of MS',
            tip: 'Apply light pressure - heavy pressure converts bell to diaphragm',
          },
          {
            order: 7,
            action: 'Roll patient to left lateral decubitus',
            detail: 'Accentuates mitral sounds - S3, S4, mitral stenosis',
          },
          {
            order: 8,
            action: 'Sit patient up and lean forward',
            detail: 'Accentuates AR murmur - listen at left sternal border in end-expiration',
          },
        ],
        landmarks: [
          {
            name: 'Aortic area',
            howToFind: 'Right 2nd intercostal space at sternal border',
            significance: 'Aortic valve sounds radiate here',
          },
          {
            name: 'Pulmonic area',
            howToFind: 'Left 2nd intercostal space at sternal border',
            significance: 'Pulmonic valve sounds heard here, best place for S2 splitting',
          },
          {
            name: 'Apex (mitral area)',
            howToFind: '5th intercostal space at midclavicular line (where PMI is)',
            significance: 'Mitral valve sounds, S3, S4, PMI location',
          },
        ],
        patientInstructions: 'Please breathe normally. I will ask you to hold your breath at times.',
        examinerPosition: 'Standing at right side of patient',
        commonErrors: [
          'Listening through clothing',
          'Not using bell for low-pitched sounds',
          'Rushing - each area needs several cardiac cycles',
          'Not repositioning patient for accentuation maneuvers',
        ],
      },

      normalFinding: {
        description: 'S1 and S2 present and of normal intensity. No S3, S4, murmurs, rubs, or clicks.',
        variations: [
          'Physiologic S2 splitting increases with inspiration',
          'S3 can be normal in children and young adults',
          'S4 may be present in elderly with LVH',
        ],
        ageConsiderations: 'S3 is often normal in patients under 40; S4 common in elderly',
        documentationExample: 'Regular rate and rhythm, normal S1/S2, no murmurs/gallops/rubs',
      },

      abnormalFindings: [
        {
          name: 'S3 gallop',
          description: 'Low-pitched sound in early diastole, after S2',
          appearance: 'Creates "Ken-TUC-ky" cadence (S1-S2-S3)',
          mechanism: 'Rapid ventricular filling hitting a non-compliant or volume-overloaded ventricle',
          associatedConditions: ['Heart failure', 'Dilated cardiomyopathy', 'Significant MR/AR'],
          severity: 'moderate',
          urgency: 'soon',
          nextSteps: ['Echo', 'BNP', 'CXR'],
          differentialDiagnosis: ['Systolic heart failure', 'Volume overload', 'High-output state'],
          additionalTestsNeeded: ['Echocardiogram', 'BNP'],
          documentationExample: 'S3 gallop present at apex, best heard with bell in left lateral position',
        },
        {
          name: 'S4 gallop',
          description: 'Low-pitched sound in late diastole, before S1',
          appearance: 'Creates "TEN-nes-see" cadence (S4-S1-S2)',
          mechanism: 'Atrial contraction forcing blood into stiff, non-compliant ventricle',
          associatedConditions: ['LVH', 'Acute MI', 'Aortic stenosis', 'Hypertensive heart disease'],
          severity: 'mild',
          urgency: 'routine',
          nextSteps: ['ECG', 'Echo if clinical concern'],
          differentialDiagnosis: ['LVH', 'Diastolic dysfunction', 'Ischemia'],
          additionalTestsNeeded: ['ECG', 'Echocardiogram'],
          documentationExample: 'S4 gallop present at apex, consistent with LVH',
        },
        {
          name: 'Pericardial friction rub',
          description: 'Scratchy, high-pitched sound with 1-3 components',
          appearance: 'Sounds like leather rubbing, varies with respiration and position',
          mechanism: 'Inflamed pericardial layers rubbing against each other',
          associatedConditions: ['Pericarditis', 'Post-MI', 'Uremia', 'Post-cardiac surgery'],
          severity: 'moderate',
          urgency: 'urgent',
          nextSteps: ['ECG', 'Echo', 'Troponin'],
          differentialDiagnosis: ['Viral pericarditis', 'Post-MI pericarditis', 'Uremic pericarditis'],
          additionalTestsNeeded: ['ECG (diffuse ST elevation)', 'Echocardiogram (effusion)', 'Inflammatory markers'],
          documentationExample: 'Three-component pericardial friction rub heard at left sternal border, best with patient leaning forward',
        },
      ],

      whatItAssesses: 'Valve function, ventricular compliance, presence of abnormal flow or friction',
      anatomy: 'Heart sounds are produced by valve closure (S1 = mitral/tricuspid; S2 = aortic/pulmonic) and by ventricular filling (S3, S4). Sound radiates through chest wall.',
      pathophysiology: 'Murmurs occur from turbulent flow across stenotic/regurgitant valves or septal defects. Gallops indicate abnormal ventricular compliance. Rubs indicate pericardial inflammation.',
      clinicalSignificance: 'Auscultatory findings guide diagnosis and treatment. New murmurs in fever suggest endocarditis. S3 in heart failure indicates poor prognosis and guides therapy.',

      pitfalls: [
        'Breath sounds or bowel sounds mistaken for cardiac sounds',
        'Missing S3/S4 by not using bell with light pressure',
        'Missing diastolic murmurs by not repositioning patient',
        'Environment too noisy to hear subtle findings',
      ],

      practiceTips: [
        'Listen in a quiet room',
        'Focus on one thing at a time - first S1, then S2, then systole, then diastole',
        'Time murmurs with carotid pulse (carotid upstroke = systole)',
        'Practice on recordings, then on normal patients, then on patients with known findings',
      ],
    },
  ],

  specialTests: [
    {
      id: 'hepatojugular-reflux',
      name: 'Hepatojugular Reflux',
      alternateNames: ['Abdominojugular reflux', 'Hepatojugular test'],
      system: 'cardiovascular',

      purpose: 'Detect occult right heart failure or volume overload',

      indications: [
        'Suspected heart failure with borderline JVP',
        'Dyspnea of unclear etiology',
        'Assessment of volume status',
      ],

      contraindications: [
        'Acute abdominal pathology',
        'Recent abdominal surgery',
        'Hepatic tenderness from acute hepatitis',
      ],

      procedure: {
        patientPosition: 'Supine at 45 degrees, breathing normally, mouth open',
        examinerPosition: 'At right side of patient',
        steps: [
          {
            order: 1,
            action: 'Establish baseline JVP',
            detail: 'Note the height of JVP before applying pressure',
          },
          {
            order: 2,
            action: 'Apply firm pressure over mid-abdomen or RUQ',
            detail: 'Use the palm of hand, apply about 20-35 mmHg pressure',
          },
          {
            order: 3,
            action: 'Maintain pressure for at least 10-15 seconds',
            detail: 'Patient should continue breathing normally through open mouth',
            tip: 'Shorter duration misses delayed response',
          },
          {
            order: 4,
            action: 'Observe JVP during compression',
            detail: 'Watch for sustained rise in JVP',
          },
        ],
        patientInstructions: 'Please keep breathing normally through your mouth. Do not hold your breath.',
        duration: '15-30 seconds',
      },

      interpretation: {
        positiveResult: 'Sustained rise in JVP >3 cm that persists throughout compression',
        negativeResult: 'Transient rise that falls back to baseline within 10 seconds',
        falsePositives: [
          'Valsalva maneuver (patient holding breath)',
          'Painful compression causing tensing',
        ],
        falseNegatives: ['Severe TR (already maximally elevated JVP)'],
        clinicalContext: 'Positive test suggests inability of right heart to handle increased venous return',
      },

      accuracy: {
        sensitivity: '66%',
        specificity: '91%',
        positiveLR: '7.3',
        negativeLR: '0.37',
        notes: 'For detecting PCWP >15 mmHg',
      },

      clinicalUtility: 'Useful when JVP is borderline or difficult to assess. Positive test strongly suggests elevated filling pressures.',

      commonErrors: [
        'Not maintaining pressure long enough',
        'Patient performing Valsalva',
        'Painful compression causing guarding',
      ],

      evidence: 'Originally described by Pasteur in 1885. Multiple studies confirm correlation with elevated filling pressures.',
    },
  ],

  relatedSystems: [
    {
      relatedSystem: 'respiratory',
      relationship: 'Heart failure causes pulmonary congestion; lung disease causes cor pulmonale',
      whenToExamineTogether: 'Always - dyspnea can be cardiac or pulmonary',
      clinicalExample: 'Crackles on lung exam + elevated JVP + S3 = heart failure',
    },
    {
      relatedSystem: 'abdominal',
      relationship: 'Right heart failure causes hepatomegaly, ascites',
      whenToExamineTogether: 'When suspecting right heart failure',
      clinicalExample: 'Pulsatile liver + elevated JVP + TR murmur = severe TR',
    },
  ],

  findingPatterns: [
    {
      name: 'Acute Heart Failure Pattern',
      description: 'Constellation of findings indicating acute decompensation',
      findings: [
        { component: 'JVP', finding: 'Elevated', significance: 'Volume overload' },
        { component: 'Lungs', finding: 'Crackles', significance: 'Pulmonary edema' },
        { component: 'Heart', finding: 'S3 gallop', significance: 'Elevated filling pressures' },
        { component: 'Extremities', finding: 'Peripheral edema', significance: 'Systemic congestion' },
      ],
      suggestsDiagnosis: ['Acute decompensated heart failure'],
      mechanism: 'Volume overload exceeds cardiac output capacity, causing backup into pulmonary and systemic circulations',
      clinicalScenario: '68-year-old with progressive dyspnea, orthopnea, and leg swelling',
      keyLearningPoint: 'The combination of elevated JVP + S3 + crackles is highly specific for heart failure',
    },
    {
      name: 'Aortic Stenosis Pattern',
      description: 'Findings of severe aortic stenosis',
      findings: [
        { component: 'Murmur', finding: 'Crescendo-decrescendo systolic murmur at RUSB radiating to carotids', significance: 'Turbulent flow across stenotic valve' },
        { component: 'Carotid pulse', finding: 'Parvus et tardus (weak and slow-rising)', significance: 'Reduced stroke volume, delayed transmission' },
        { component: 'S2', finding: 'Diminished or absent A2', significance: 'Immobile, calcified valve' },
        { component: 'PMI', finding: 'Sustained, non-displaced', significance: 'Concentric LVH' },
      ],
      suggestsDiagnosis: ['Severe aortic stenosis'],
      mechanism: 'Fixed obstruction to LV outflow causes pressure overload, concentric hypertrophy, and reduced stroke volume',
      clinicalScenario: '75-year-old with exertional dyspnea and syncope',
      keyLearningPoint: 'Parvus et tardus carotid pulse + diminished S2 suggest severe AS even if murmur is not loud (low-flow state)',
    },
  ],

  redFlags: [
    {
      finding: 'New diastolic murmur in patient with chest pain',
      concernFor: 'Aortic dissection with aortic regurgitation',
      mechanism: 'Dissection can extend to aortic root, causing acute AR',
      immediateActions: ['Bilateral arm BP', 'Emergent CT angiogram', 'Surgical consultation'],
      neverMiss: true,
    },
    {
      finding: 'New murmur + fever + petechiae',
      concernFor: 'Infective endocarditis',
      mechanism: 'Bacterial vegetation on valve causes regurgitation and septic emboli',
      immediateActions: ['Blood cultures x3', 'Echocardiogram (TEE if TTE negative)', 'Empiric antibiotics'],
      neverMiss: true,
    },
    {
      finding: 'Pulsus paradoxus >10 mmHg',
      concernFor: 'Cardiac tamponade',
      mechanism: 'Pericardial fluid restricts cardiac filling, exaggerated respiratory variation',
      immediateActions: ['Emergent echocardiogram', 'IV fluids', 'Pericardiocentesis preparation'],
      neverMiss: true,
    },
    {
      finding: 'Absent pulses in one extremity',
      concernFor: 'Acute arterial occlusion or aortic dissection',
      mechanism: 'Thromboembolism or dissection flap occluding arterial flow',
      immediateActions: ['Emergent vascular imaging', 'Anticoagulation consideration', 'Surgical consultation'],
      neverMiss: true,
    },
  ],

  commonMistakes: [
    {
      mistake: 'Listening through clothing',
      consequence: 'Muffled sounds, missed murmurs',
      howToAvoid: 'Always expose the chest completely',
      correctTechnique: 'Stethoscope directly on skin',
    },
    {
      mistake: 'Confusing external jugular with internal jugular',
      consequence: 'Incorrect assessment of JVP',
      howToAvoid: 'Remember external JV can be distended from local causes; use internal JV',
      correctTechnique: 'Look for pulsation between or lateral to SCM heads',
    },
    {
      mistake: 'Pressing too hard with bell',
      consequence: 'Converts bell to diaphragm, miss low-pitched sounds',
      howToAvoid: 'Use light pressure with bell',
      correctTechnique: 'Bell should just make skin contact without indentation',
    },
    {
      mistake: 'Not using maneuvers to accentuate findings',
      consequence: 'Missing subtle murmurs',
      howToAvoid: 'Always use left lateral position and sitting forward when appropriate',
      correctTechnique: 'Left lateral for mitral sounds, sitting forward for AR',
    },
  ],

  clinicalPearls: [
    'The JVP is the most underutilized part of the cardiac exam - it provides invaluable information about volume status and right heart function.',
    'A new murmur in a patient with fever is endocarditis until proven otherwise.',
    'S3 in a patient over 40 is almost always pathologic and indicates elevated filling pressures.',
    'The carotid pulse is a window to the left ventricle - parvus et tardus suggests significant aortic stenosis.',
    'If you can hear a diastolic murmur easily, it is probably significant. Diastolic murmurs are always pathologic.',
    'Timing is everything in murmur identification - use the carotid pulse to identify systole.',
    'In acute MI, a new murmur suggests a mechanical complication (papillary muscle rupture, VSD) requiring emergent evaluation.',
    'Elevated JVP + clear lungs + hypotension = consider RV infarct or PE.',
  ],
};

// ============================================
// Abdominal Examination
// ============================================

export const ABDOMINAL_EXAM: SystemExamEducation = {
  id: 'abdominal',
  name: 'Abdominal Exam',
  fullName: 'Abdominal Examination',

  overview: `The abdominal examination evaluates the gastrointestinal tract, liver, spleen, kidneys,
aorta, and other structures within the abdominal cavity. It requires a systematic approach
using inspection, auscultation, percussion, and palpation. The order differs from other exams
because palpation can alter bowel sounds.`,

  clinicalImportance: `Abdominal complaints are among the most common in medicine. The exam can identify
surgical emergencies (appendicitis, bowel obstruction, perforation), hepatic disease, splenomegaly,
and masses. Physical findings guide the urgency and type of imaging needed and can sometimes
obviate the need for imaging altogether.`,

  equipmentNeeded: [
    {
      name: 'Stethoscope',
      purpose: 'Auscultation of bowel sounds, bruits',
      howToUse: 'Use diaphragm to listen in all quadrants',
      tips: ['Listen before palpating', 'One location for 2-3 minutes if initially silent'],
    },
    {
      name: 'Tape measure',
      purpose: 'Measure liver span, abdominal girth',
      howToUse: 'Measure from right MCL at upper percussion to lower percussion for liver span',
      tips: ['Mark points with pen for accuracy'],
    },
  ],

  patientPositioning: [
    {
      position: 'Supine with knees slightly bent',
      whenUsed: 'Standard abdominal exam',
      howToAchieve: 'Small pillow under knees, arms at sides or crossed on chest',
      alternatives: ['Pillow under head for comfort'],
      considerations: 'Bent knees relax abdominal muscles, facilitating palpation',
    },
    {
      position: 'Right lateral decubitus',
      whenUsed: 'Splenic palpation',
      howToAchieve: 'Patient lies on right side',
      alternatives: ['Supine with legs drawn up'],
      considerations: 'Allows spleen to fall toward midline, making it more palpable',
    },
  ],

  approach: {
    sequence: [
      {
        order: 1,
        action: 'Inspection',
        rationale: 'Observe before touching - many findings visible',
        whatToObserve: [
          'Contour (flat, scaphoid, distended, protuberant)',
          'Symmetry',
          'Scars, striae, skin changes',
          'Visible peristalsis',
          'Hernias (have patient cough)',
          'Pulsations (aorta)',
        ],
        transitionTip: 'Good lighting is essential; ask patient to take deep breath and cough while watching for hernias',
      },
      {
        order: 2,
        action: 'Auscultation',
        rationale: 'Must auscultate before palpation - palpation alters bowel sounds',
        whatToObserve: [
          'Bowel sounds (present, absent, hyperactive)',
          'Bruits (aortic, renal, iliac)',
          'Friction rubs (rare - over liver/spleen)',
        ],
      },
      {
        order: 3,
        action: 'Percussion',
        rationale: 'Maps areas of tympany and dullness',
        whatToObserve: [
          'Tympany over stomach/intestines',
          'Dullness over liver/spleen',
          'Liver span',
          'Shifting dullness (ascites)',
        ],
      },
      {
        order: 4,
        action: 'Light palpation',
        rationale: 'Assess tenderness, guarding before deep palpation',
        whatToObserve: [
          'Tenderness location',
          'Voluntary vs involuntary guarding',
          'Superficial masses',
        ],
        transitionTip: 'Start away from area of pain',
      },
      {
        order: 5,
        action: 'Deep palpation',
        rationale: 'Assess organs, masses',
        whatToObserve: [
          'Liver edge',
          'Spleen',
          'Kidneys',
          'Aorta',
          'Masses',
        ],
      },
      {
        order: 6,
        action: 'Special maneuvers',
        rationale: 'Detect peritoneal irritation, organomegaly',
        whatToObserve: [
          'Rebound tenderness',
          'Murphy sign',
          'Rovsing sign',
          'Psoas sign, obturator sign',
        ],
      },
    ],
    adaptations: [
      {
        scenario: 'Acute abdomen',
        modification: 'Minimize deep palpation in areas of tenderness, assess for peritonitis',
        rationale: 'Avoid causing unnecessary pain; focus on surgical decision-making',
      },
      {
        scenario: 'Suspected ascites',
        modification: 'Focus on shifting dullness, fluid wave',
        rationale: 'These tests specifically detect free fluid',
      },
    ],
    typicalDuration: '5-10 minutes',
    documentationTemplate: `Abdomen: Soft, non-tender, non-distended. No guarding or rebound.
Normoactive bowel sounds. No hepatosplenomegaly. No masses or bruits.`,
  },

  components: [
    {
      id: 'tenderness-assessment',
      name: 'Abdominal Tenderness',
      technique: 'palpation',

      howToPerform: {
        steps: [
          {
            order: 1,
            action: 'Warm hands',
            detail: 'Rub hands together or warm under water',
            tip: 'Cold hands cause guarding',
          },
          {
            order: 2,
            action: 'Start away from area of pain',
            detail: 'Begin palpation in a non-painful quadrant',
            tip: 'Starting on the painful area causes guarding everywhere',
          },
          {
            order: 3,
            action: 'Light palpation systematically through all quadrants',
            detail: 'Use finger pads, depress 1 cm, watch patient face',
          },
          {
            order: 4,
            action: 'Note location and severity of tenderness',
            detail: 'Document specific quadrant(s) and patient response',
          },
          {
            order: 5,
            action: 'Assess for guarding',
            detail: 'Voluntary guarding: relaxes with distraction. Involuntary: persistent despite relaxation attempts',
            tip: 'Engage patient in conversation to distinguish voluntary from involuntary',
          },
          {
            order: 6,
            action: 'Assess for rebound tenderness',
            detail: 'Press slowly then release quickly, noting if pain is worse on release',
            tip: 'Can also assess by gentle percussion or asking patient to cough',
          },
        ],
        landmarks: [
          {
            name: 'McBurney point',
            howToFind: '1/3 distance from ASIS to umbilicus',
            significance: 'Classic location of appendiceal tenderness',
          },
          {
            name: 'Murphy point',
            howToFind: 'Junction of right MCL and costal margin',
            significance: 'Gallbladder location; positive Murphy = cholecystitis',
          },
        ],
        patientInstructions: 'Please tell me if anything hurts. Try to relax your muscles.',
        examinerPosition: 'Standing at right side of patient',
        commonErrors: [
          'Starting at area of maximum pain',
          'Poking with fingertips instead of using flat of fingers',
          'Not watching patient face for grimacing',
        ],
      },

      normalFinding: {
        description: 'Soft, non-tender throughout all quadrants without guarding or rebound',
        variations: ['Mild tenderness over cecum/sigmoid with palpation is normal'],
        ageConsiderations: 'Elderly may have diminished perception; children may guard from fear',
        documentationExample: 'Soft, non-tender, no guarding or rebound',
      },

      abnormalFindings: [
        {
          name: 'Peritonitis',
          description: 'Involuntary guarding with rebound tenderness',
          appearance: 'Board-like rigidity, patient lies still, pain with any movement',
          mechanism: 'Inflammation of parietal peritoneum causes reflex muscle spasm',
          associatedConditions: ['Perforated viscus', 'Appendicitis', 'Pancreatitis', 'Ischemic bowel'],
          severity: 'critical',
          urgency: 'emergent',
          nextSteps: ['Surgical consultation', 'Upright CXR', 'CT abdomen'],
          differentialDiagnosis: ['Perforation', 'Appendicitis', 'Ischemic bowel', 'Severe pancreatitis'],
          additionalTestsNeeded: ['CBC', 'Lactate', 'CT abdomen/pelvis', 'Upright CXR'],
          documentationExample: 'Diffuse tenderness with involuntary guarding and rebound. Board-like rigidity. Peritoneal signs present.',
        },
        {
          name: 'RLQ tenderness (McBurney point)',
          description: 'Focal tenderness at McBurney point',
          appearance: 'Patient winces or guards when this specific area palpated',
          mechanism: 'Inflamed appendix irritates parietal peritoneum',
          associatedConditions: ['Appendicitis', 'Mesenteric adenitis', 'Ovarian pathology', 'Crohn disease'],
          severity: 'moderate',
          urgency: 'urgent',
          nextSteps: ['CBC', 'CT abdomen (or US if pregnant/young female)', 'Surgical consult'],
          differentialDiagnosis: ['Appendicitis', 'Ovarian cyst/torsion', 'Ectopic pregnancy', 'Mesenteric adenitis'],
          additionalTestsNeeded: ['CBC', 'Urinalysis', 'Pregnancy test', 'CT or US'],
          documentationExample: 'Focal tenderness at McBurney point with localized guarding. Positive Rovsing sign.',
        },
      ],

      whatItAssesses: 'Peritoneal inflammation, underlying organ pathology',
      anatomy: 'The parietal peritoneum is innervated by somatic nerves and produces well-localized pain when inflamed. Visceral peritoneum produces vague, poorly localized discomfort.',
      pathophysiology: 'Tenderness indicates inflammation or irritation of underlying structures. Guarding is reflex muscle contraction protecting inflamed peritoneum. Rebound indicates peritoneal inflammation.',
      clinicalSignificance: 'The location and quality of tenderness narrows the differential and guides urgency of workup. Peritoneal signs suggest surgical emergency.',

      pitfalls: [
        'Missing tenderness in elderly/diabetic patients with diminished sensation',
        'Attributing voluntary guarding (from anxiety) to peritonitis',
        'Not examining painful area last, causing global guarding',
      ],

      practiceTips: [
        'Watch the face, not your hands - facial grimace is the most reliable sign of tenderness',
        'Ask patient to rate pain 1-10 in each quadrant to quantify',
        'Engage patient in conversation to help them relax',
        'Have patient lift head off pillow to differentiate abdominal wall pain from intra-abdominal pain',
      ],
    },
  ],

  specialTests: [
    {
      id: 'murphy-sign',
      name: 'Murphy Sign',
      alternateNames: ['Inspiratory arrest'],
      system: 'abdominal',

      purpose: 'Detect cholecystitis',

      indications: ['RUQ pain', 'Suspected biliary disease', 'Fever with abdominal pain'],

      contraindications: ['Diffuse peritonitis (test not interpretable)'],

      procedure: {
        patientPosition: 'Supine',
        examinerPosition: 'At patient right side',
        steps: [
          {
            order: 1,
            action: 'Place fingers under right costal margin at MCL',
            detail: 'Hook fingers under costal margin, applying gentle upward pressure',
          },
          {
            order: 2,
            action: 'Ask patient to take a deep breath',
            detail: 'Diaphragm descends, pushing liver and gallbladder down onto your fingers',
          },
          {
            order: 3,
            action: 'Observe for inspiratory arrest',
            detail: 'Patient catches breath and stops inhaling due to pain when gallbladder contacts fingers',
          },
        ],
        patientInstructions: 'Take a deep breath in',
        duration: '5-10 seconds',
      },

      interpretation: {
        positiveResult: 'Patient abruptly stops inspiration due to pain when inflamed gallbladder contacts examining fingers',
        negativeResult: 'Patient completes full inspiration without pain or pause',
        falsePositives: ['Hepatitis', 'Peptic ulcer', 'RLL pneumonia', 'Fitz-Hugh-Curtis syndrome'],
        falseNegatives: ['Gangrenous cholecystitis (denervated)', 'Elderly with diminished sensation'],
        clinicalContext: 'Most useful when combined with RUQ pain, fever, and leukocytosis',
      },

      accuracy: {
        sensitivity: '65%',
        specificity: '87%',
        positiveLR: '5.0',
        negativeLR: '0.40',
        notes: 'Specificity higher when fever and leukocytosis also present',
      },

      clinicalUtility: 'Combined with clinical features, strongly suggests acute cholecystitis. A positive Murphy sign in the right clinical context often leads directly to surgical consultation.',

      commonErrors: [
        'Not applying enough pressure to reach gallbladder',
        'Patient not taking deep enough breath',
        'Not comparing to LUQ (control)',
      ],

      evidence: 'Named after John Benjamin Murphy (1857-1916). Remains useful bedside test despite advanced imaging.',
    },
    {
      id: 'rovsing-sign',
      name: 'Rovsing Sign',
      alternateNames: ['Indirect tenderness'],
      system: 'abdominal',

      purpose: 'Detect appendicitis through referred pain',

      indications: ['Suspected appendicitis', 'RLQ pain', 'Periumbilical pain migrating to RLQ'],

      contraindications: ['Diffuse peritonitis'],

      procedure: {
        patientPosition: 'Supine',
        examinerPosition: 'At patient side',
        steps: [
          {
            order: 1,
            action: 'Palpate deeply in LLQ',
            detail: 'Apply steady pressure to left lower quadrant',
          },
          {
            order: 2,
            action: 'Observe for RLQ pain',
            detail: 'Ask patient if they feel pain anywhere',
          },
        ],
        patientInstructions: 'Tell me where it hurts',
        duration: '10 seconds',
      },

      interpretation: {
        positiveResult: 'Palpation of LLQ causes pain in RLQ',
        negativeResult: 'No referred pain to RLQ',
        falsePositives: ['Other causes of RLQ inflammation'],
        falseNegatives: ['Early appendicitis', 'Atypical location of appendix'],
        clinicalContext: 'Indicates peritoneal irritation in RLQ',
      },

      accuracy: {
        sensitivity: '22-68%',
        specificity: '58-96%',
        notes: 'Wide variation in studies; most useful when positive',
      },

      clinicalUtility: 'Positive sign supports appendicitis diagnosis, but low sensitivity means negative test does not rule out appendicitis.',

      commonErrors: [
        'Not pressing firmly enough in LLQ',
        'Not specifically asking about RLQ pain',
      ],

      evidence: 'Named after Niels Thorkild Rovsing (1862-1927), Danish surgeon.',
    },
  ],

  relatedSystems: [
    {
      relatedSystem: 'cardiovascular',
      relationship: 'Aortic aneurysm presents with abdominal findings; mesenteric ischemia requires vascular assessment',
      whenToExamineTogether: 'Pulsatile abdominal mass, suspected mesenteric ischemia',
      clinicalExample: 'Pulsatile, expansile mass above umbilicus = AAA',
    },
    {
      relatedSystem: 'respiratory',
      relationship: 'Lower lobe pneumonia can cause abdominal pain; referred pain patterns',
      whenToExamineTogether: 'Upper abdominal pain with pulmonary symptoms',
      clinicalExample: 'RLL pneumonia can mimic acute cholecystitis',
    },
  ],

  findingPatterns: [
    {
      name: 'Acute Appendicitis Pattern',
      description: 'Classic findings of appendicitis',
      findings: [
        { component: 'History', finding: 'Periumbilical pain migrating to RLQ', significance: 'Visceral to somatic pain transition' },
        { component: 'McBurney point', finding: 'Focal tenderness', significance: 'Direct peritoneal irritation' },
        { component: 'Rovsing sign', finding: 'Positive', significance: 'Referred peritoneal irritation' },
        { component: 'Psoas sign', finding: 'Positive', significance: 'Retrocecal appendix' },
      ],
      suggestsDiagnosis: ['Acute appendicitis'],
      mechanism: 'Appendiceal obstruction → distension → inflammation → peritoneal involvement',
      clinicalScenario: '23-year-old with 18 hours of abdominal pain, anorexia, and low-grade fever',
      keyLearningPoint: 'The classic migration from periumbilical to RLQ is pathognomonic but not always present',
    },
    {
      name: 'Bowel Obstruction Pattern',
      description: 'Findings suggesting mechanical obstruction',
      findings: [
        { component: 'Inspection', finding: 'Distention', significance: 'Dilated bowel proximal to obstruction' },
        { component: 'Auscultation', finding: 'High-pitched bowel sounds, rushes', significance: 'Intestinal contents moving against obstruction' },
        { component: 'Palpation', finding: 'Diffuse tenderness without peritoneal signs', significance: 'Bowel distension without ischemia' },
        { component: 'Percussion', finding: 'Tympany', significance: 'Air-filled dilated bowel' },
      ],
      suggestsDiagnosis: ['Small bowel obstruction', 'Large bowel obstruction'],
      mechanism: 'Mechanical blockage causes proximal dilation, increased peristalsis, then exhaustion',
      clinicalScenario: '65-year-old with prior abdominal surgery presenting with vomiting, distension, and obstipation',
      keyLearningPoint: 'High-pitched bowel sounds early; silence late (bowel fatigue or ischemia)',
    },
  ],

  redFlags: [
    {
      finding: 'Rigid abdomen with absent bowel sounds',
      concernFor: 'Perforated viscus, peritonitis',
      mechanism: 'Peritoneal contamination causes reflex ileus and muscle rigidity',
      immediateActions: ['NPO', 'IV access', 'Upright CXR', 'Emergent surgical consultation'],
      neverMiss: true,
    },
    {
      finding: 'Pulsatile abdominal mass with hypotension',
      concernFor: 'Ruptured abdominal aortic aneurysm',
      mechanism: 'Aneurysm rupture causes hemorrhage',
      immediateActions: ['Large-bore IV access', 'Type and crossmatch', 'Emergent vascular surgery', 'Operating room'],
      neverMiss: true,
    },
    {
      finding: 'Severe pain out of proportion to exam findings',
      concernFor: 'Mesenteric ischemia',
      mechanism: 'Visceral pain from ischemia without peritoneal signs (until infarction)',
      immediateActions: ['Lactate', 'CT angiogram', 'Surgical consultation'],
      neverMiss: true,
    },
  ],

  commonMistakes: [
    {
      mistake: 'Palpating before auscultating',
      consequence: 'Altered bowel sounds from manipulation',
      howToAvoid: 'Always follow order: inspect, auscultate, percuss, palpate',
      correctTechnique: 'Complete auscultation of all quadrants before any palpation',
    },
    {
      mistake: 'Starting palpation at area of pain',
      consequence: 'Guarding throughout abdomen, unreliable exam',
      howToAvoid: 'Ask where it hurts and start on opposite side',
      correctTechnique: 'Begin palpation in a non-tender quadrant',
    },
    {
      mistake: 'Cold hands',
      consequence: 'Involuntary guarding from temperature',
      howToAvoid: 'Warm hands before examining',
      correctTechnique: 'Rub hands together or warm under water',
    },
  ],

  clinicalPearls: [
    'Order of abdominal exam: Inspect, Auscultate, Percuss, Palpate (different from other exams).',
    'Pain out of proportion to exam = think mesenteric ischemia until proven otherwise.',
    'Rebound tenderness can be assessed by gentle percussion or having patient cough - less painful than traditional testing.',
    'The rigid, silent abdomen is a surgical emergency.',
    'Always consider extra-abdominal causes: MI, DKA, pneumonia can present with abdominal pain.',
    'In elderly patients, physical exam findings may be diminished - maintain high clinical suspicion.',
    'Carnett sign: tenderness that increases when patient tenses abdominal wall = abdominal wall source, not intra-abdominal.',
    'A normal abdominal exam does not rule out significant pathology, especially in early presentations.',
  ],
};

// ============================================
// Neurological Examination
// ============================================

export const NEUROLOGICAL_EXAM: SystemExamEducation = {
  id: 'neurological',
  name: 'Neurological Exam',
  fullName: 'Neurological System Examination',

  overview: `The neurological examination assesses the central and peripheral nervous systems through
systematic evaluation of mental status, cranial nerves, motor function, sensory function, reflexes,
coordination, and gait. It localizes lesions to specific regions of the nervous system and guides
diagnosis of neurological conditions.`,

  clinicalImportance: `Neurological diseases range from common (headache, neuropathy) to devastating (stroke, brain tumor).
The neurological exam can identify deficits that localize lesions, distinguish central from peripheral disease,
and identify emergencies requiring immediate intervention. A careful exam often provides more diagnostic
information than imaging.`,

  equipmentNeeded: [
    {
      name: 'Reflex hammer',
      purpose: 'Testing deep tendon reflexes',
      howToUse: 'Hold loosely, use a swinging motion from the wrist. Strike tendon, not muscle.',
      alternatives: 'Side of stethoscope in a pinch',
      tips: [
        'Let the hammer swing freely - don\'t force it',
        'Compare sides - asymmetry is key',
        'Patient should be relaxed - reinforce if needed (Jendrassik maneuver)',
      ],
    },
    {
      name: 'Penlight',
      purpose: 'Pupillary reflexes, fundoscopy if ophthalmoscope unavailable',
      howToUse: 'Shine from the side toward the pupil, observe direct and consensual response',
      tips: ['Dim room lights for best visualization', 'Swing test for afferent pupillary defect'],
    },
    {
      name: 'Tuning fork (128 Hz)',
      purpose: 'Vibration sense testing',
      howToUse: 'Strike and place on bony prominence. Ask patient when vibration stops.',
      alternatives: '256 Hz can work but 128 Hz is standard',
      tips: ['Compare to your own sensation if unsure', 'Test distal to proximal'],
    },
    {
      name: 'Cotton wisp / tissue',
      purpose: 'Light touch sensation testing',
      howToUse: 'Lightly brush skin, ask patient to say when they feel it',
      tips: ['Don\'t drag - lift between touches', 'Compare symmetric areas'],
    },
    {
      name: 'Safety pin (disposable)',
      purpose: 'Pain/pinprick sensation testing',
      howToUse: 'Lightly touch with sharp end, compare sharp vs dull',
      tips: ['Never draw blood', 'New pin for each patient'],
    },
    {
      name: 'Ophthalmoscope',
      purpose: 'Fundoscopic examination - papilledema, optic nerve',
      howToUse: 'Dim lights, ask patient to fixate on distant target, approach at 15 degrees from temporal side',
      tips: ['Practice on normal patients first', 'Dilating drops improve view but affect pupil exam'],
    },
  ],

  patientPositioning: [
    {
      position: 'Seated on exam table',
      whenUsed: 'Most of the neurological exam - cranial nerves, reflexes, motor testing',
      howToAchieve: 'Patient sits with legs dangling for reflex testing',
      alternatives: ['Supine if patient unstable'],
      considerations: 'Allows access to most exam components',
    },
    {
      position: 'Standing',
      whenUsed: 'Gait assessment, Romberg test',
      howToAchieve: 'Patient stands independently or with standby assistance',
      alternatives: ['If unsafe, note inability to stand independently'],
      considerations: 'Assess fall risk before having patient stand',
    },
    {
      position: 'Supine',
      whenUsed: 'Detailed strength testing, sensory exam, special tests',
      howToAchieve: 'Patient lies flat on examination table',
      alternatives: ['Semi-reclined if unable to lie flat'],
      considerations: 'Allows relaxation for accurate muscle testing',
    },
  ],

  approach: {
    sequence: [
      {
        order: 1,
        action: 'Mental Status Examination',
        rationale: 'Establishes cognitive baseline, identifies cortical dysfunction',
        whatToObserve: [
          'Level of consciousness',
          'Orientation (person, place, time, situation)',
          'Attention (months backward, serial 7s)',
          'Memory (registration, recall)',
          'Language (naming, repetition, comprehension)',
          'Executive function (similarities, proverbs)',
        ],
        transitionTip: 'Much of this can be assessed during the interview',
      },
      {
        order: 2,
        action: 'Cranial Nerve Examination',
        rationale: 'Tests brainstem and specific nerve functions',
        whatToObserve: [
          'CN I: Smell (often skipped unless relevant)',
          'CN II: Visual acuity, fields, pupils, fundoscopy',
          'CN III, IV, VI: Eye movements, pupil function',
          'CN V: Facial sensation, jaw strength, corneal reflex',
          'CN VII: Facial movement - forehead, smile, eye closure',
          'CN VIII: Hearing (finger rub), Weber/Rinne if indicated',
          'CN IX, X: Palate elevation, gag reflex, voice quality',
          'CN XI: Sternocleidomastoid, trapezius strength',
          'CN XII: Tongue protrusion, symmetry',
        ],
      },
      {
        order: 3,
        action: 'Motor Examination',
        rationale: 'Identifies weakness pattern to localize lesion',
        whatToObserve: [
          'Bulk - atrophy, hypertrophy',
          'Tone - spasticity, rigidity, flaccidity',
          'Strength - graded 0-5, compare sides',
          'Pronator drift',
          'Fine motor movements',
        ],
      },
      {
        order: 4,
        action: 'Sensory Examination',
        rationale: 'Maps sensory loss to dermatomal or peripheral nerve patterns',
        whatToObserve: [
          'Light touch',
          'Pain/pinprick',
          'Vibration sense',
          'Proprioception (joint position sense)',
          'Cortical sensory function (graphesthesia, stereognosis) if indicated',
        ],
      },
      {
        order: 5,
        action: 'Reflexes',
        rationale: 'Differentiates upper vs lower motor neuron lesions',
        whatToObserve: [
          'Deep tendon reflexes: biceps (C5-6), brachioradialis (C5-6), triceps (C7), patellar (L3-4), Achilles (S1)',
          'Grade 0-4+ scale',
          'Pathologic reflexes: Babinski, Hoffmann',
          'Frontal release signs if indicated',
        ],
      },
      {
        order: 6,
        action: 'Coordination',
        rationale: 'Tests cerebellar function',
        whatToObserve: [
          'Finger-to-nose',
          'Heel-to-shin',
          'Rapid alternating movements',
          'Dysmetria, intention tremor, dysdiadochokinesia',
        ],
      },
      {
        order: 7,
        action: 'Gait and Station',
        rationale: 'Integrates motor, sensory, and cerebellar function',
        whatToObserve: [
          'Casual gait',
          'Tandem gait (heel-to-toe)',
          'Heel walking, toe walking',
          'Romberg test',
          'Arm swing, posture, stability',
        ],
      },
    ],
    adaptations: [
      {
        scenario: 'Acute stroke suspected',
        modification: 'Focused exam: facial droop, arm drift, speech (NIH Stroke Scale), note time of onset',
        rationale: 'Time is brain - rapid assessment needed for thrombolysis decision',
      },
      {
        scenario: 'Altered mental status',
        modification: 'Focus on level of consciousness, brainstem reflexes, motor response to stimuli',
        rationale: 'Localizes lesion, identifies herniation signs',
      },
      {
        scenario: 'Peripheral neuropathy suspected',
        modification: 'Detailed sensory exam (stocking-glove pattern), ankle reflexes, vibration sense',
        rationale: 'Characterize the neuropathy - length-dependent, demyelinating vs axonal',
      },
    ],
    typicalDuration: '10-15 minutes screening, 30+ minutes comprehensive',
    documentationTemplate: `Neuro: Alert and oriented x4. Cranial nerves II-XII intact. Motor strength 5/5 throughout.
Sensation intact to light touch. Reflexes 2+ and symmetric. Coordination intact. Gait normal.`,
  },

  components: [
    {
      id: 'mental-status',
      name: 'Mental Status Examination',
      technique: 'inspection',

      howToPerform: {
        steps: [
          {
            order: 1,
            action: 'Assess level of consciousness',
            detail: 'Alert, drowsy, obtunded, stuporous, or comatose',
            tip: 'Use standardized scale (GCS) for altered patients',
          },
          {
            order: 2,
            action: 'Test orientation',
            detail: 'Person (name), Place (where are you), Time (date/day/year), Situation (why are you here)',
          },
          {
            order: 3,
            action: 'Test attention',
            detail: 'Spell WORLD backward, months of year backward, serial 7s',
            tip: 'Digit span: normal is 5-7 forward, 4-5 backward',
          },
          {
            order: 4,
            action: 'Test memory',
            detail: 'Give 3 words, test recall after 5 minutes. Ask about recent events.',
          },
          {
            order: 5,
            action: 'Test language',
            detail: 'Naming (pen, watch), Repetition ("no ifs, ands, or buts"), Comprehension (follow commands)',
          },
        ],
        landmarks: [],
        patientInstructions: 'I\'m going to ask you some questions to test your memory and concentration.',
        examinerPosition: 'Facing patient at eye level',
        commonErrors: [
          'Assuming oriented patient has normal mental status',
          'Not formally testing memory in elderly patients',
          'Missing subtle language deficits',
        ],
      },

      normalFinding: {
        description: 'Alert, oriented to person/place/time/situation, attention and memory intact, language fluent without errors',
        variations: ['Minor word-finding difficulty can be normal with aging', 'Anxiety can impair attention'],
        ageConsiderations: 'Processing speed may slow with age but orientation and memory should remain intact',
        documentationExample: 'Alert and oriented x4. Attention intact (spelled WORLD backward). Recalled 3/3 objects at 5 minutes.',
      },

      abnormalFindings: [
        {
          name: 'Delirium',
          description: 'Acute confusional state with fluctuating attention',
          appearance: 'Inattention, disorientation, altered level of consciousness, often agitation or lethargy',
          mechanism: 'Global cerebral dysfunction from metabolic, infectious, or toxic causes',
          associatedConditions: ['Infection/sepsis', 'Medication effects', 'Metabolic derangement', 'Hypoxia', 'Urinary retention', 'Pain'],
          severity: 'moderate',
          urgency: 'urgent',
          nextSteps: ['Search for underlying cause', 'CBC, CMP, UA, CXR', 'Review medications'],
          differentialDiagnosis: ['Dementia', 'Depression', 'Psychosis'],
          additionalTestsNeeded: ['Basic labs', 'Urinalysis', 'Medication review', 'Consider CT head'],
          documentationExample: 'Patient inattentive, disoriented to time and place, fluctuating alertness. CAM positive for delirium.',
        },
        {
          name: 'Aphasia',
          description: 'Language disorder from cortical lesion',
          appearance: 'Difficulty speaking (Broca), understanding (Wernicke), or both (global)',
          mechanism: 'Damage to language areas - usually left hemisphere',
          associatedConditions: ['Stroke', 'Brain tumor', 'Dementia'],
          severity: 'severe',
          urgency: 'emergent',
          nextSteps: ['Emergent CT/MRI if acute onset', 'Stroke protocol if new'],
          differentialDiagnosis: ['Dysarthria', 'Confusion', 'Psychosis'],
          additionalTestsNeeded: ['CT head emergent', 'MRI brain', 'CTA if stroke suspected'],
          documentationExample: 'Non-fluent aphasia with intact comprehension, consistent with Broca aphasia.',
        },
      ],

      whatItAssesses: 'Cerebral cortex function - frontal, temporal, parietal lobes',
      anatomy: 'Language is lateralized to dominant hemisphere (usually left). Memory involves hippocampus and widespread cortical networks. Attention involves reticular activating system and frontal lobes.',
      pathophysiology: 'Cortical lesions produce specific deficits based on location. Diffuse dysfunction (delirium) suggests metabolic, toxic, or infectious causes.',
      clinicalSignificance: 'Altered mental status is one of the most important vital signs. Distinguishing delirium from dementia or psychiatric illness is crucial.',

      pitfalls: [
        'Assuming "oriented" means intact mental status',
        'Missing early dementia in well-compensated patients',
        'Attributing confusion to "sundowning" without seeking underlying cause',
      ],

      practiceTips: [
        'Screen all elderly patients with at least orientation and 3-word recall',
        'Use standardized tools (MMSE, MoCA) when cognitive impairment suspected',
        'Acute change in mental status is always an emergency',
        'Get collateral history from family - baseline is crucial',
      ],
    },
    {
      id: 'motor-exam',
      name: 'Motor Examination',
      technique: 'palpation',

      howToPerform: {
        steps: [
          {
            order: 1,
            action: 'Inspect for bulk',
            detail: 'Look for atrophy (LMN, disuse) or hypertrophy (rare)',
          },
          {
            order: 2,
            action: 'Assess tone',
            detail: 'Passively move limbs through range of motion. Note spasticity, rigidity, or flaccidity.',
            tip: 'Patient must be relaxed - distract them with conversation',
          },
          {
            order: 3,
            action: 'Test pronator drift',
            detail: 'Arms extended, palms up, eyes closed for 10 seconds. Watch for drift or pronation.',
          },
          {
            order: 4,
            action: 'Test strength systematically',
            detail: 'Grade 0-5. Test major muscle groups: shoulder abduction (C5), elbow flexion (C5-6), elbow extension (C7), wrist extension (C6-7), grip (C8), finger abduction (T1), hip flexion (L1-2), knee extension (L3-4), ankle dorsiflexion (L4-5), ankle plantarflexion (S1-2)',
          },
          {
            order: 5,
            action: 'Test fine motor',
            detail: 'Rapid finger tapping, finger-to-thumb opposition',
          },
        ],
        landmarks: [],
        patientInstructions: 'I\'m going to test your strength. Push/pull against me as hard as you can.',
        examinerPosition: 'Position for maximum mechanical advantage to assess strength',
        commonErrors: [
          'Not comparing sides',
          'Improper positioning giving false weakness',
          'Not testing against gravity first in weak patients',
        ],
      },

      normalFinding: {
        description: 'Normal bulk, tone, and strength (5/5) throughout, no drift',
        variations: ['Mild asymmetry in dominant arm is normal', 'Tone increases slightly with age'],
        ageConsiderations: 'Strength may decline slightly with advanced age but should be symmetric',
        documentationExample: 'Motor: Bulk and tone normal. No pronator drift. Strength 5/5 throughout upper and lower extremities.',
      },

      abnormalFindings: [
        {
          name: 'Upper Motor Neuron Weakness',
          description: 'Weakness pattern from lesion above anterior horn cell',
          appearance: 'Weakness in pyramidal distribution (extensors in arm, flexors in leg), spasticity, hyperreflexia, Babinski present',
          mechanism: 'Loss of descending inhibition leads to spasticity; loss of corticospinal input causes weakness',
          associatedConditions: ['Stroke', 'Multiple sclerosis', 'Spinal cord lesion', 'Brain tumor'],
          severity: 'severe',
          urgency: 'urgent',
          nextSteps: ['Imaging (CT/MRI)', 'Identify level of lesion'],
          differentialDiagnosis: ['LMN weakness', 'Functional weakness'],
          additionalTestsNeeded: ['MRI brain/spine', 'CT head if acute'],
          documentationExample: 'RUE weakness 3/5 in pyramidal distribution, spasticity, hyperreflexia, Babinski positive. UMN pattern.',
        },
        {
          name: 'Lower Motor Neuron Weakness',
          description: 'Weakness from lesion at or below anterior horn cell',
          appearance: 'Weakness with atrophy, fasciculations, hyporeflexia, no Babinski',
          mechanism: 'Direct damage to motor neuron or peripheral nerve',
          associatedConditions: ['Radiculopathy', 'Peripheral neuropathy', 'ALS', 'Guillain-Barré'],
          severity: 'moderate',
          urgency: 'soon',
          nextSteps: ['EMG/NCS', 'MRI of relevant spine level'],
          differentialDiagnosis: ['UMN weakness', 'Myopathy'],
          additionalTestsNeeded: ['EMG/nerve conduction studies', 'MRI spine'],
          documentationExample: 'Weakness in C5-6 distribution with atrophy and hyporeflexia, consistent with LMN/radicular pattern.',
        },
      ],

      whatItAssesses: 'Corticospinal tract (UMN), anterior horn cells, peripheral nerves, neuromuscular junction, muscle',
      anatomy: 'Motor pathway: cortex → internal capsule → brainstem → spinal cord (corticospinal tract) → anterior horn cell → peripheral nerve → neuromuscular junction → muscle',
      pathophysiology: 'UMN lesions cause spasticity and hyperreflexia due to loss of inhibition. LMN lesions cause flaccidity and hyporeflexia due to loss of the reflex arc.',
      clinicalSignificance: 'The pattern of weakness and associated signs (tone, reflexes, Babinski) localize the lesion to UMN or LMN.',

      pitfalls: [
        'Missing subtle weakness - always compare sides',
        'Confusing pain-limited weakness with true weakness',
        'Missing UMN signs in acute lesions (initially flaccid)',
      ],

      practiceTips: [
        'Always test against gravity first, then against resistance',
        'Pronator drift is a sensitive test for subtle UMN weakness',
        'Pattern recognition is key - UMN weakness affects extensors in arms, flexors in legs',
        'Fasciculations suggest LMN disease but can be benign',
      ],
    },
    {
      id: 'reflexes',
      name: 'Deep Tendon Reflexes',
      technique: 'special-test',

      howToPerform: {
        steps: [
          {
            order: 1,
            action: 'Position limb properly',
            detail: 'Joint partially flexed, muscle relaxed',
          },
          {
            order: 2,
            action: 'Locate tendon',
            detail: 'Palpate to find tendon, not muscle belly',
          },
          {
            order: 3,
            action: 'Strike tendon with reflex hammer',
            detail: 'Use quick swing from wrist, let hammer do the work',
          },
          {
            order: 4,
            action: 'Grade the response 0-4+',
            detail: '0=absent, 1+=diminished, 2+=normal, 3+=brisk without clonus, 4+=clonus',
          },
          {
            order: 5,
            action: 'Use reinforcement if needed',
            detail: 'Jendrassik maneuver: have patient clench teeth or hook fingers and pull',
          },
        ],
        landmarks: [
          {
            name: 'Biceps tendon',
            howToFind: 'Antecubital fossa, place thumb on tendon and strike thumb',
            significance: 'Tests C5-6 reflex arc',
          },
          {
            name: 'Patellar tendon',
            howToFind: 'Just below patella, above tibial tuberosity',
            significance: 'Tests L3-4 reflex arc',
          },
          {
            name: 'Achilles tendon',
            howToFind: 'Above calcaneus, dorsiflex foot slightly',
            significance: 'Tests S1-2 reflex arc',
          },
        ],
        patientInstructions: 'Please relax, let your arm/leg be loose.',
        examinerPosition: 'Position to easily access tendon and observe response',
        commonErrors: [
          'Striking muscle instead of tendon',
          'Patient not relaxed',
          'Too forceful - let hammer swing freely',
        ],
      },

      normalFinding: {
        description: '2+ (normal) and symmetric throughout',
        variations: ['Some normal variation (1+ to 3+)', 'Reflexes may diminish with age'],
        ageConsiderations: 'Ankle reflexes often diminish in elderly; can be normal finding',
        documentationExample: 'DTRs 2+ and symmetric bilaterally (biceps, triceps, brachioradialis, patellar, Achilles)',
      },

      abnormalFindings: [
        {
          name: 'Hyperreflexia with clonus',
          description: 'Exaggerated reflexes with repetitive beats',
          appearance: '4+ reflexes, sustained clonus at ankle, crossed adductors',
          mechanism: 'Loss of supraspinal inhibition from UMN lesion',
          associatedConditions: ['Stroke', 'Spinal cord injury', 'MS', 'ALS'],
          severity: 'moderate',
          urgency: 'soon',
          nextSteps: ['Identify UMN lesion', 'MRI brain/spine'],
          differentialDiagnosis: ['Anxiety (brisk but not pathologic)', 'Hyperthyroidism'],
          additionalTestsNeeded: ['MRI brain and/or spine', 'Additional UMN signs'],
          documentationExample: '4+ patellar reflexes bilaterally with sustained ankle clonus, Babinski positive.',
        },
        {
          name: 'Hyporeflexia/Areflexia',
          description: 'Diminished or absent reflexes',
          appearance: '0 to 1+ reflexes, even with reinforcement',
          mechanism: 'Interruption of reflex arc at sensory nerve, motor nerve, or muscle',
          associatedConditions: ['Peripheral neuropathy', 'Radiculopathy', 'Guillain-Barré', 'Hypothyroidism'],
          severity: 'mild',
          urgency: 'routine',
          nextSteps: ['Evaluate for neuropathy', 'Consider EMG/NCS'],
          differentialDiagnosis: ['Normal variant', 'LMN lesion', 'Myopathy'],
          additionalTestsNeeded: ['EMG/NCS', 'B12, TSH, glucose'],
          documentationExample: 'Absent ankle reflexes bilaterally, diminished patellar reflexes. Consistent with peripheral neuropathy.',
        },
        {
          name: 'Babinski sign',
          description: 'Upgoing great toe with fanning of other toes on plantar stimulation',
          appearance: 'Extension of great toe (dorsiflexion) instead of normal flexion',
          mechanism: 'Release of primitive reflex from loss of corticospinal inhibition',
          associatedConditions: ['Stroke', 'Spinal cord lesion', 'MS', 'ALS', 'Any UMN lesion'],
          severity: 'moderate',
          urgency: 'soon',
          nextSteps: ['Identify UMN lesion', 'Imaging indicated'],
          differentialDiagnosis: ['Normal in infants <1 year', 'Voluntary withdrawal'],
          additionalTestsNeeded: ['MRI brain/spine'],
          documentationExample: 'Babinski sign present on right, plantar response flexor on left.',
        },
      ],

      whatItAssesses: 'Integrity of reflex arc (sensory nerve → spinal cord → motor nerve → muscle) and upper motor neuron modulation',
      anatomy: 'Reflex arc: sensory neuron → synapse in spinal cord → motor neuron → muscle. Corticospinal tract normally inhibits reflexes.',
      pathophysiology: 'Hyperreflexia indicates loss of upper motor neuron inhibition. Hyporeflexia indicates interruption of the reflex arc itself.',
      clinicalSignificance: 'Reflexes help distinguish upper from lower motor neuron lesions and localize the level of a spinal cord lesion.',

      diagnosticAccuracy: {
        sensitivity: 'Variable',
        specificity: 'Variable',
        notes: 'Babinski sign is highly specific for UMN lesion when present',
      },

      pitfalls: [
        'Declaring reflexes absent without reinforcement',
        'Not comparing sides',
        'Confusing voluntary withdrawal with Babinski',
      ],

      practiceTips: [
        'Practice technique on many patients to calibrate your grading',
        'Always use Jendrassik if reflexes seem absent',
        'Asymmetry is often more important than absolute grade',
        'Babinski is only pathologic after age ~1 year',
      ],
    },
  ],

  specialTests: [
    {
      id: 'romberg-test',
      name: 'Romberg Test',
      alternateNames: ['Romberg sign'],
      system: 'neurological',

      purpose: 'Assess proprioceptive (posterior column) function vs vestibular/cerebellar function',

      indications: ['Gait instability', 'Suspected neuropathy', 'Dizziness evaluation', 'Posterior column disease'],

      contraindications: ['Patient at high fall risk without standby assistance'],

      procedure: {
        patientPosition: 'Standing with feet together, arms at sides',
        examinerPosition: 'Standing close enough to catch patient if needed',
        steps: [
          {
            order: 1,
            action: 'Have patient stand with feet together, eyes open',
            detail: 'Assess baseline stability',
          },
          {
            order: 2,
            action: 'Ask patient to close eyes',
            detail: 'Remove visual compensation for proprioceptive deficit',
          },
          {
            order: 3,
            action: 'Observe for 30 seconds',
            detail: 'Watch for swaying or loss of balance',
          },
          {
            order: 4,
            action: 'Be ready to catch patient',
            detail: 'Stand close with arms ready',
          },
        ],
        patientInstructions: 'Stand with your feet together. I\'ll ask you to close your eyes. I\'m right here if you start to fall.',
        duration: '30 seconds with eyes closed',
      },

      interpretation: {
        positiveResult: 'Patient stable with eyes open but sways/falls with eyes closed',
        negativeResult: 'Patient remains stable with eyes closed',
        falsePositives: ['Anxiety', 'Inner ear disease (vestibular)', 'Orthostatic hypotension'],
        falseNegatives: ['Mild proprioceptive loss', 'Visual compensation incomplete'],
        clinicalContext: 'Positive Romberg indicates posterior column (proprioceptive) dysfunction - vision is compensating for lost proprioception',
      },

      accuracy: {
        sensitivity: '59%',
        specificity: '86%',
        notes: 'For detecting proprioceptive loss',
      },

      clinicalUtility: 'Distinguishes sensory ataxia (proprioceptive - positive Romberg) from cerebellar ataxia (negative Romberg, but unsteady even with eyes open)',

      commonErrors: [
        'Not standing close enough to catch patient',
        'Feet not actually together',
        'Not waiting long enough',
      ],

      evidence: 'Named after Moritz Heinrich Romberg (1840). Classic test for tabes dorsalis (neurosyphilis) but now used for any posterior column disease.',
    },
    {
      id: 'finger-nose-test',
      name: 'Finger-to-Nose Test',
      alternateNames: ['Finger-nose-finger test', 'FNF'],
      system: 'neurological',

      purpose: 'Assess cerebellar coordination (specifically upper extremity)',

      indications: ['Suspected cerebellar dysfunction', 'Ataxia evaluation', 'Tremor characterization'],

      contraindications: ['Significant weakness limiting movement'],

      procedure: {
        patientPosition: 'Seated or standing',
        examinerPosition: 'In front of patient, holding finger as target',
        steps: [
          {
            order: 1,
            action: 'Hold your finger as target at arm\'s length from patient',
            detail: 'Position so patient must fully extend arm to reach',
          },
          {
            order: 2,
            action: 'Ask patient to touch your finger then their nose',
            detail: 'Alternate between targets repeatedly',
          },
          {
            order: 3,
            action: 'Observe for dysmetria',
            detail: 'Overshooting or undershooting the target',
          },
          {
            order: 4,
            action: 'Watch for intention tremor',
            detail: 'Tremor that increases as finger approaches target',
          },
          {
            order: 5,
            action: 'Move your finger to new positions',
            detail: 'Test ability to adjust to moving target',
          },
        ],
        patientInstructions: 'Touch my finger, then touch your nose. Keep going back and forth.',
        duration: '30 seconds per side',
      },

      interpretation: {
        positiveResult: 'Dysmetria (overshooting/undershooting) or intention tremor',
        negativeResult: 'Smooth, accurate movements',
        falsePositives: ['Weakness', 'Visual impairment', 'Essential tremor (but this is action tremor, not intention)'],
        falseNegatives: ['Mild cerebellar disease', 'Compensated lesion'],
        clinicalContext: 'Cerebellar lesions cause ipsilateral findings (right cerebellar lesion → right-sided dysmetria)',
      },

      accuracy: {
        sensitivity: '68%',
        specificity: '77%',
        notes: 'For detecting cerebellar dysfunction',
      },

      clinicalUtility: 'Identifies cerebellar dysfunction; ipsilateral to lesion. Helps distinguish cerebellar from sensory ataxia.',

      commonErrors: [
        'Target too close - must require full arm extension',
        'Moving target too fast',
        'Not having patient actually touch their nose',
      ],

      evidence: 'Standard test for cerebellar function, highly sensitive for detecting dysmetria from cerebellar lesions.',
    },
  ],

  relatedSystems: [
    {
      relatedSystem: 'cardiovascular',
      relationship: 'Stroke causes neurological deficits; AF causes cardioembolic stroke',
      whenToExamineTogether: 'Any new neurological deficit, especially acute stroke',
      clinicalExample: 'New onset atrial fibrillation with sudden hemiparesis = cardioembolic stroke',
    },
    {
      relatedSystem: 'musculoskeletal',
      relationship: 'Distinguish neurogenic from mechanical weakness/pain',
      whenToExamineTogether: 'Back pain with neurological symptoms, weakness evaluation',
      clinicalExample: 'Back pain + saddle anesthesia + urinary retention = cauda equina syndrome',
    },
  ],

  findingPatterns: [
    {
      name: 'Acute Stroke Pattern',
      description: 'Sudden onset focal neurological deficits',
      findings: [
        { component: 'Onset', finding: 'Sudden, maximal at onset', significance: 'Vascular etiology' },
        { component: 'Motor', finding: 'Hemiparesis or hemiplegia', significance: 'Contralateral hemispheric lesion' },
        { component: 'Face', finding: 'Facial droop (lower face)', significance: 'UMN pattern - forehead spared' },
        { component: 'Speech', finding: 'Aphasia or dysarthria', significance: 'Dominant hemisphere or brainstem' },
      ],
      suggestsDiagnosis: ['Ischemic stroke', 'Hemorrhagic stroke'],
      mechanism: 'Sudden interruption of blood flow → neuronal death in vascular territory',
      clinicalScenario: '68-year-old with sudden onset right-sided weakness and slurred speech',
      keyLearningPoint: 'Time of onset is critical - thrombolysis window is limited. "Time is brain."',
    },
    {
      name: 'Peripheral Neuropathy Pattern',
      description: 'Distal, symmetric, sensory-predominant findings',
      findings: [
        { component: 'Sensory', finding: 'Stocking-glove distribution loss', significance: 'Length-dependent neuropathy' },
        { component: 'Reflexes', finding: 'Absent ankle reflexes', significance: 'LMN involvement' },
        { component: 'Motor', finding: 'Mild distal weakness if present', significance: 'Sensory > motor involvement' },
        { component: 'Vibration', finding: 'Reduced distally', significance: 'Large fiber involvement' },
      ],
      suggestsDiagnosis: ['Diabetic neuropathy', 'B12 deficiency', 'Alcohol-related neuropathy'],
      mechanism: 'Longest nerves affected first → distal symptoms, "dying back" pattern',
      clinicalScenario: 'Diabetic patient with bilateral foot numbness and burning',
      keyLearningPoint: 'Always think of diabetes, B12 deficiency, and alcohol in symmetric polyneuropathy',
    },
    {
      name: 'Radiculopathy Pattern',
      description: 'Dermatomal distribution following single nerve root',
      findings: [
        { component: 'Pain', finding: 'Radiates in dermatomal pattern', significance: 'Nerve root compression' },
        { component: 'Sensory', finding: 'Dermatomal sensory loss', significance: 'Single root distribution' },
        { component: 'Motor', finding: 'Myotomal weakness', significance: 'Root-specific muscles affected' },
        { component: 'Reflexes', finding: 'Single reflex diminished', significance: 'Identifies specific root' },
      ],
      suggestsDiagnosis: ['Herniated disc', 'Foraminal stenosis', 'Spondylosis'],
      mechanism: 'Compression of nerve root as it exits spinal canal',
      clinicalScenario: 'Patient with back pain radiating down posterior leg to foot, weak ankle plantarflexion',
      keyLearningPoint: 'Know your dermatomes and myotomes: L5 = dorsiflexion, S1 = plantarflexion, ankle reflex',
    },
  ],

  redFlags: [
    {
      finding: 'Sudden severe headache with focal neurological deficits',
      concernFor: 'Subarachnoid hemorrhage, intracerebral hemorrhage',
      mechanism: 'Vascular rupture with mass effect or irritation',
      immediateActions: ['Emergent CT head without contrast', 'Neurosurgery consult', 'BP management'],
      neverMiss: true,
    },
    {
      finding: 'Rapidly progressive weakness ascending from legs',
      concernFor: 'Guillain-Barré syndrome',
      mechanism: 'Autoimmune demyelination of peripheral nerves',
      immediateActions: ['Check respiratory function (FVC)', 'ICU admission if respiratory compromise', 'LP, EMG'],
      neverMiss: true,
    },
    {
      finding: 'Back pain + bilateral leg weakness + urinary retention',
      concernFor: 'Cauda equina syndrome',
      mechanism: 'Compression of nerve roots in spinal canal',
      immediateActions: ['Emergent MRI spine', 'Surgical decompression within 48 hours'],
      neverMiss: true,
    },
    {
      finding: 'Dilated pupil + ptosis + "down and out" eye',
      concernFor: 'CN III palsy from posterior communicating artery aneurysm',
      mechanism: 'Aneurysm compression of CN III, pupil fibers on outside of nerve',
      immediateActions: ['Emergent CTA/MRA', 'Neurosurgery consult', 'Aneurysm rupture prevention'],
      neverMiss: true,
    },
  ],

  commonMistakes: [
    {
      mistake: 'Not testing all components systematically',
      consequence: 'Missing localizing findings',
      howToAvoid: 'Use a standard order: mental status → CN → motor → sensory → reflexes → coordination → gait',
      correctTechnique: 'Complete screening exam, then focused exam based on findings',
    },
    {
      mistake: 'Assuming "oriented" means normal mental status',
      consequence: 'Missing delirium or dementia',
      howToAvoid: 'Formally test attention and memory in at-risk patients',
      correctTechnique: 'Use 3-word recall, attention tasks (months backward)',
    },
    {
      mistake: 'Not comparing sides',
      consequence: 'Missing subtle asymmetries',
      howToAvoid: 'Always compare left to right',
      correctTechnique: 'Asymmetry is often more important than absolute findings',
    },
    {
      mistake: 'Incomplete sensory exam',
      consequence: 'Missing important patterns (dermatomal, stocking-glove)',
      howToAvoid: 'Test multiple modalities in a pattern that allows localization',
      correctTechnique: 'Map out the distribution of sensory loss',
    },
  ],

  clinicalPearls: [
    'The neurological exam localizes the lesion. Pattern recognition is everything.',
    'UMN lesion: weakness, spasticity, hyperreflexia, Babinski. LMN: weakness, atrophy, hyporeflexia, fasciculations.',
    'Cerebellar lesions cause ipsilateral findings. Most other brain lesions cause contralateral findings.',
    'In acute stroke, time is brain. Know the NIHSS and thrombolysis criteria.',
    'Pronator drift is one of the most sensitive tests for subtle UMN weakness.',
    'Babinski is always pathologic in adults. Upgoing toe = UMN lesion until proven otherwise.',
    'Cauda equina syndrome (saddle anesthesia, bilateral leg weakness, urinary retention) is a surgical emergency.',
    'A dilated pupil in CN III palsy suggests compression (aneurysm) rather than ischemia.',
    'In altered mental status, delirium is often reversible - always look for the cause.',
    'The neurological exam is still more valuable than imaging for localization and diagnosis.',
  ],
};

// ============================================
// Respiratory Examination
// ============================================

export const RESPIRATORY_EXAM: SystemExamEducation = {
  id: 'respiratory',
  name: 'Respiratory Exam',
  fullName: 'Respiratory System Examination',

  overview: `The respiratory examination assesses the lungs and airways through inspection, palpation,
percussion, and auscultation. It reveals information about gas exchange, airway patency, lung
parenchyma, and pleural space. Combined with vital signs and pulse oximetry, the exam can often
diagnose or narrow the differential for respiratory symptoms.`,

  clinicalImportance: `Respiratory diseases are among the most common reasons for medical visits. The
exam can identify pneumonia, COPD exacerbation, asthma, pneumothorax, pleural effusion, and respiratory
failure. Many findings guide immediate treatment decisions - absent breath sounds may indicate
pneumothorax requiring emergent decompression.`,

  equipmentNeeded: [
    {
      name: 'Stethoscope',
      purpose: 'Auscultation of breath sounds',
      howToUse: 'Use diaphragm for most breath sounds. Listen during deep breathing through open mouth.',
      tips: [
        'Compare symmetric locations side-to-side',
        'Listen to at least 6 locations on posterior chest',
        'Have patient take slow, deep breaths through mouth',
      ],
    },
    {
      name: 'Pulse oximeter',
      purpose: 'Measure oxygen saturation',
      howToUse: 'Place on finger, wait for stable reading',
      tips: ['Cold fingers, nail polish may give inaccurate readings', 'Check pulse matches heart rate'],
    },
    {
      name: 'Peak flow meter',
      purpose: 'Objective measure of airflow obstruction',
      howToUse: 'Patient takes deep breath, exhales as hard and fast as possible',
      tips: ['Best of 3 attempts', 'Compare to predicted or personal best'],
    },
  ],

  patientPositioning: [
    {
      position: 'Seated, leaning slightly forward',
      whenUsed: 'Posterior chest examination (standard)',
      howToAchieve: 'Patient sits on edge of bed, arms crossed in front or hands on knees',
      alternatives: ['Standing if able'],
      considerations: 'This position exposes the posterior lung fields optimally',
    },
    {
      position: 'Supine',
      whenUsed: 'Anterior chest, sick patients',
      howToAchieve: 'Patient lies flat, head slightly elevated',
      alternatives: ['Semi-recumbent if dyspneic'],
      considerations: 'Dyspneic patients may not tolerate lying flat (orthopnea)',
    },
    {
      position: 'Tripod position',
      whenUsed: 'Observed in severe respiratory distress',
      howToAchieve: 'Patient naturally assumes this - sitting forward, hands on knees',
      alternatives: [],
      considerations: 'This is a sign of distress, not a chosen position - accessory muscle use',
    },
  ],

  approach: {
    sequence: [
      {
        order: 1,
        action: 'General inspection',
        rationale: 'Assess work of breathing and distress level',
        whatToObserve: [
          'Respiratory rate (count for 30 seconds)',
          'Work of breathing - accessory muscle use',
          'Tripod positioning',
          'Cyanosis (central vs peripheral)',
          'Pursed lip breathing',
          'Ability to speak in full sentences',
        ],
        transitionTip: 'Assess respiratory rate while appearing to check pulse - patients alter breathing when observed',
      },
      {
        order: 2,
        action: 'Inspect chest',
        rationale: 'Identify structural abnormalities and asymmetry',
        whatToObserve: [
          'Chest shape - barrel chest, kyphoscoliosis',
          'Symmetry of expansion',
          'Intercostal retractions',
          'Scars from prior surgery',
        ],
      },
      {
        order: 3,
        action: 'Palpation',
        rationale: 'Confirm inspection findings, assess chest expansion and fremitus',
        whatToObserve: [
          'Tracheal position (at sternal notch)',
          'Chest expansion symmetry (hands on lower ribs)',
          'Tactile fremitus (vibration with "99")',
          'Tenderness (rib fractures, costochondritis)',
        ],
      },
      {
        order: 4,
        action: 'Percussion',
        rationale: 'Map out lung tissue vs consolidation vs effusion vs air',
        whatToObserve: [
          'Resonance (normal lung)',
          'Dullness (consolidation, effusion)',
          'Hyperresonance (pneumothorax, emphysema)',
          'Diaphragmatic excursion',
        ],
      },
      {
        order: 5,
        action: 'Auscultation',
        rationale: 'Assess air movement and adventitious sounds',
        whatToObserve: [
          'Breath sounds - vesicular, bronchial, or absent',
          'Adventitious sounds - crackles, wheezes, rhonchi',
          'Vocal resonance (egophony, whispered pectoriloquy)',
          'Pleural friction rub',
        ],
      },
    ],
    adaptations: [
      {
        scenario: 'Severe respiratory distress',
        modification: 'Focus on vital signs, oxygen, and life-threatening diagnoses first',
        rationale: 'Stabilization before complete examination',
      },
      {
        scenario: 'Suspected pneumothorax',
        modification: 'Prioritize percussion (hyperresonant), breath sounds (absent), tracheal deviation',
        rationale: 'Tension pneumothorax requires emergent needle decompression',
      },
    ],
    typicalDuration: '5-10 minutes',
    documentationTemplate: `Resp: No respiratory distress, speaking in full sentences. Chest clear to auscultation
bilaterally. No wheezes, crackles, or rhonchi. Normal percussion. Chest expansion symmetric.`,
  },

  components: [
    {
      id: 'breath-sounds',
      name: 'Breath Sound Auscultation',
      technique: 'auscultation',

      howToPerform: {
        steps: [
          {
            order: 1,
            action: 'Position patient properly',
            detail: 'Sitting, leaning forward, arms crossed',
          },
          {
            order: 2,
            action: 'Instruct patient to breathe',
            detail: 'Slow, deep breaths through open mouth',
            tip: 'Breathing through nose filters high-frequency sounds',
          },
          {
            order: 3,
            action: 'Listen to posterior chest systematically',
            detail: 'Compare side-to-side at each level: apex, mid-lung, base',
          },
          {
            order: 4,
            action: 'Listen to anterior/lateral chest',
            detail: 'Upper and lower zones, compare sides',
          },
          {
            order: 5,
            action: 'Note breath sound intensity and character',
            detail: 'Vesicular (normal), bronchial, or diminished/absent',
          },
          {
            order: 6,
            action: 'Note adventitious sounds',
            detail: 'Crackles, wheezes, rhonchi - timing in respiratory cycle',
          },
        ],
        landmarks: [
          {
            name: 'Apex of lung',
            howToFind: 'Above clavicle anteriorly, above scapular spine posteriorly',
            significance: 'Upper lobes, TB predilection',
          },
          {
            name: 'Lower lobe base',
            howToFind: 'Below scapular tip posteriorly, around 6th rib anteriorly',
            significance: 'Dependent portions, aspiration pneumonia',
          },
        ],
        patientInstructions: 'Please breathe slowly and deeply through your mouth.',
        examinerPosition: 'Behind patient for posterior exam, then anterior',
        commonErrors: [
          'Listening through clothing',
          'Not comparing sides systematically',
          'Not having patient breathe deeply enough',
          'Rushing - need full respiratory cycle at each location',
        ],
      },

      normalFinding: {
        description: 'Vesicular breath sounds throughout - soft, low-pitched, inspiration > expiration (3:1 ratio)',
        variations: [
          'Bronchial sounds normal over trachea/large airways',
          'Bronchovesicular over major bronchi (parasternal)',
        ],
        ageConsiderations: 'Breath sounds may be diminished in elderly or obese patients',
        documentationExample: 'Lungs clear to auscultation bilaterally, no adventitious sounds',
      },

      abnormalFindings: [
        {
          name: 'Crackles (Rales)',
          description: 'Discontinuous, popping sounds',
          appearance: 'Fine crackles = high-pitched, brief; Coarse crackles = low-pitched, longer',
          mechanism: 'Opening of collapsed alveoli (fine) or air bubbling through secretions (coarse)',
          associatedConditions: ['Pulmonary edema (fine, bibasilar)', 'Pneumonia', 'Interstitial lung disease', 'Bronchiectasis (coarse)'],
          severity: 'moderate',
          urgency: 'soon',
          nextSteps: ['CXR', 'Consider BNP if heart failure suspected', 'Oxygen if hypoxic'],
          differentialDiagnosis: ['Heart failure', 'Pneumonia', 'IPF', 'Atelectasis'],
          additionalTestsNeeded: ['Chest X-ray', 'BNP', 'CT chest if needed'],
          documentationExample: 'Fine bibasilar crackles, worse on the left, extending 1/3 up lung fields',
        },
        {
          name: 'Wheezes',
          description: 'Continuous, musical, high-pitched sounds',
          appearance: 'Usually expiratory, can be inspiratory if severe',
          mechanism: 'Air flowing through narrowed airways',
          associatedConditions: ['Asthma', 'COPD', 'Bronchospasm', 'Foreign body', 'Tumor'],
          severity: 'moderate',
          urgency: 'urgent',
          nextSteps: ['Bronchodilators', 'Peak flow', 'Consider systemic steroids'],
          differentialDiagnosis: ['Asthma', 'COPD exacerbation', 'Allergic reaction', 'Foreign body'],
          additionalTestsNeeded: ['Peak flow', 'CXR if unclear', 'Spirometry (stable patients)'],
          documentationExample: 'Diffuse expiratory wheezes bilaterally, prolonged expiratory phase',
        },
        {
          name: 'Absent breath sounds',
          description: 'No audible air movement over an area',
          appearance: 'Silence where breath sounds should be heard',
          mechanism: 'No air entering that portion of lung - obstruction, collapse, or pleural process',
          associatedConditions: ['Pneumothorax', 'Large pleural effusion', 'Complete atelectasis', 'Severe COPD (distant)'],
          severity: 'severe',
          urgency: 'emergent',
          nextSteps: ['Immediate assessment for pneumothorax', 'CXR stat', 'Consider needle decompression if tension suspected'],
          differentialDiagnosis: ['Pneumothorax', 'Pleural effusion', 'Atelectasis', 'Main bronchus obstruction'],
          additionalTestsNeeded: ['CXR emergent', 'Chest ultrasound at bedside'],
          documentationExample: 'Absent breath sounds over entire right hemithorax. Hyperresonant to percussion.',
        },
        {
          name: 'Bronchial breath sounds (where abnormal)',
          description: 'Loud, high-pitched, hollow sounds with expiration equal to inspiration',
          appearance: 'Breath sounds that should be vesicular instead sound bronchial',
          mechanism: 'Sound transmitted through consolidated lung tissue',
          associatedConditions: ['Pneumonia (consolidation)', 'Atelectasis with patent bronchus'],
          severity: 'moderate',
          urgency: 'soon',
          nextSteps: ['CXR', 'Check for egophony/whispered pectoriloquy'],
          differentialDiagnosis: ['Pneumonia', 'Lung cancer with post-obstructive consolidation'],
          additionalTestsNeeded: ['Chest X-ray', 'Sputum culture if productive cough'],
          documentationExample: 'Bronchial breath sounds over right lower lobe with egophony',
        },
      ],

      whatItAssesses: 'Air movement through airways, lung parenchyma, pleural space',
      anatomy: 'Sound is generated in larger airways and transmitted through lung parenchyma. Normal lung filters high frequencies, creating vesicular sounds. Consolidated lung transmits sound more directly.',
      pathophysiology: 'Crackles occur when collapsed alveoli pop open or air bubbles through fluid. Wheezes occur from narrowed airways. Bronchial sounds over peripheral lung suggest consolidation.',
      clinicalSignificance: 'Breath sounds are the most important part of the respiratory exam. Findings guide diagnosis and treatment of acute respiratory conditions.',

      pitfalls: [
        'Listening through clothing (especially crackles)',
        'Missing focal findings by not comparing sides',
        'Not recognizing that absence of wheeze in severe asthma (silent chest) is ominous',
      ],

      practiceTips: [
        'Always compare symmetric locations side-to-side',
        'Crackles that clear with coughing are often just atelectasis',
        'Silent chest in asthma = severe obstruction, not improvement',
        'Bronchial sounds in periphery + egophony = consolidation',
      ],
    },
    {
      id: 'percussion',
      name: 'Chest Percussion',
      technique: 'percussion',

      howToPerform: {
        steps: [
          {
            order: 1,
            action: 'Position patient',
            detail: 'Sitting, leaning forward',
          },
          {
            order: 2,
            action: 'Place pleximeter finger',
            detail: 'Middle finger of non-dominant hand firmly on chest wall, parallel to ribs',
          },
          {
            order: 3,
            action: 'Strike with plexor finger',
            detail: 'Middle finger of dominant hand strikes the pleximeter finger with a quick wrist flick',
            tip: 'Motion should come from wrist, not arm',
          },
          {
            order: 4,
            action: 'Compare sides',
            detail: 'Percuss symmetric locations, comparing resonance',
          },
          {
            order: 5,
            action: 'Map borders',
            detail: 'Identify transition from resonance to dullness',
          },
        ],
        landmarks: [
          {
            name: 'Diaphragm level',
            howToFind: 'Percuss from resonance to dullness posteriorly - normally at T10 on expiration',
            significance: 'Elevated in pleural effusion, depressed in hyperinflation',
          },
        ],
        patientInstructions: 'Please remain still. Take a deep breath and hold (for diaphragm excursion).',
        examinerPosition: 'Behind patient for posterior chest',
        commonErrors: [
          'Pressing too hard with pleximeter finger',
          'Striking too hard or too soft',
          'Not comparing sides systematically',
        ],
      },

      normalFinding: {
        description: 'Resonant percussion note throughout lung fields, dull over heart, liver',
        variations: ['More resonant in thin patients', 'Less resonant in obese or muscular patients'],
        ageConsiderations: 'May be hyperresonant in emphysema',
        documentationExample: 'Percussion resonant throughout bilateral lung fields',
      },

      abnormalFindings: [
        {
          name: 'Dullness',
          description: 'Thud-like note, like percussing the thigh',
          appearance: 'Loss of normal resonance over an area',
          mechanism: 'Solid or fluid-filled tissue transmits percussion differently than air-filled lung',
          associatedConditions: ['Pleural effusion', 'Consolidation (pneumonia)', 'Mass', 'Atelectasis'],
          severity: 'moderate',
          urgency: 'soon',
          nextSteps: ['CXR to differentiate effusion from consolidation', 'Thoracentesis if effusion'],
          differentialDiagnosis: ['Pleural effusion', 'Pneumonia', 'Lung mass', 'Hemothorax'],
          additionalTestsNeeded: ['Chest X-ray', 'Chest ultrasound', 'CT chest'],
          documentationExample: 'Dullness to percussion over right lower lung field, extending halfway up hemithorax',
        },
        {
          name: 'Hyperresonance',
          description: 'Drum-like, more resonant than normal',
          appearance: 'Exaggerated hollow sound',
          mechanism: 'Excess air in chest - either in lung (emphysema) or pleural space (pneumothorax)',
          associatedConditions: ['Pneumothorax', 'Emphysema/COPD', 'Large bulla'],
          severity: 'severe',
          urgency: 'emergent',
          nextSteps: ['Assess for pneumothorax immediately', 'CXR stat', 'Needle decompression if tension suspected'],
          differentialDiagnosis: ['Pneumothorax', 'Severe emphysema'],
          additionalTestsNeeded: ['Chest X-ray emergent', 'CT chest if stable'],
          documentationExample: 'Hyperresonance over right hemithorax with absent breath sounds',
        },
      ],

      whatItAssesses: 'Underlying tissue density - air vs solid vs fluid',
      anatomy: 'Normal lung is filled with air, producing resonance. Fluid or consolidation causes dullness. Air trapping or pneumothorax causes hyperresonance.',
      pathophysiology: 'Percussion vibrates underlying tissue; air resonates differently than fluid or solid tissue. Combined with other findings, helps distinguish effusion from consolidation.',
      clinicalSignificance: 'Percussion helps distinguish pneumothorax (hyperresonant) from effusion (dull) - opposite findings with similar symptom presentation.',

      pitfalls: [
        'Missing subtle differences if not comparing sides',
        'Percussing over scapula (bone gives dull note)',
        'Not recognizing hyperresonance as potentially ominous (pneumothorax)',
      ],

      practiceTips: [
        'Practice on your own thigh (dull) vs chest (resonant)',
        'Always compare sides - asymmetry is the key finding',
        'Hyperresonant + absent breath sounds = pneumothorax until proven otherwise',
      ],
    },
  ],

  specialTests: [
    {
      id: 'egophony',
      name: 'Egophony',
      alternateNames: ['E-to-A change'],
      system: 'respiratory',

      purpose: 'Detect consolidation in the lung',

      indications: ['Suspected pneumonia', 'Abnormal percussion/breath sounds', 'Fever with respiratory symptoms'],

      contraindications: [],

      procedure: {
        patientPosition: 'Sitting, same as for auscultation',
        examinerPosition: 'Behind patient',
        steps: [
          {
            order: 1,
            action: 'Place stethoscope over area of suspected consolidation',
            detail: 'Usually over area with bronchial breath sounds or dullness',
          },
          {
            order: 2,
            action: 'Ask patient to say "eee" in a normal voice',
            detail: 'Sustained "eee" sound',
          },
          {
            order: 3,
            action: 'Listen for change in sound quality',
            detail: 'Consolidated lung transmits "eee" as "ay"',
          },
        ],
        patientInstructions: 'Please say "eee" in a normal voice and hold it out.',
        duration: 'A few seconds per location',
      },

      interpretation: {
        positiveResult: '"Eee" heard as "ay" through the stethoscope',
        negativeResult: '"Eee" remains "eee"',
        falsePositives: ['Top of effusion may have some egophony'],
        falseNegatives: ['Small areas of consolidation'],
        clinicalContext: 'Positive egophony strongly suggests consolidation (pneumonia)',
      },

      accuracy: {
        sensitivity: '55%',
        specificity: '80%',
        positiveLR: '2.8',
        notes: 'For detecting pneumonia',
      },

      clinicalUtility: 'When positive, strongly suggests consolidation. Part of the classic triad: bronchial breath sounds, egophony, dullness to percussion.',

      commonErrors: [
        'Not checking area of suspected abnormality',
        'Patient speaking too softly',
      ],

      evidence: 'Named from Greek "voice of a goat." Classic finding in lobar pneumonia.',
    },
  ],

  relatedSystems: [
    {
      relatedSystem: 'cardiovascular',
      relationship: 'Heart failure causes pulmonary edema; PE causes respiratory symptoms',
      whenToExamineTogether: 'Dyspnea evaluation - check JVP, edema along with lung exam',
      clinicalExample: 'Bibasilar crackles + elevated JVP + peripheral edema = heart failure',
    },
  ],

  findingPatterns: [
    {
      name: 'Pneumonia Pattern',
      description: 'Consolidation findings in lung',
      findings: [
        { component: 'Percussion', finding: 'Dullness over affected area', significance: 'Solid tissue replacing air' },
        { component: 'Breath sounds', finding: 'Bronchial over affected area', significance: 'Sound transmitted through consolidation' },
        { component: 'Vocal resonance', finding: 'Egophony positive', significance: 'Confirms consolidation' },
        { component: 'Fremitus', finding: 'Increased', significance: 'Solid tissue transmits vibration' },
      ],
      suggestsDiagnosis: ['Bacterial pneumonia', 'Lobar pneumonia'],
      mechanism: 'Alveoli filled with inflammatory exudate, creating solid lung that transmits sound differently',
      clinicalScenario: '65-year-old with fever, productive cough, and pleuritic chest pain',
      keyLearningPoint: 'The triad of bronchial breath sounds, egophony, and dullness is highly specific for consolidation',
    },
    {
      name: 'Pleural Effusion Pattern',
      description: 'Fluid in pleural space',
      findings: [
        { component: 'Percussion', finding: 'Stony dullness', significance: 'Fluid is dense' },
        { component: 'Breath sounds', finding: 'Absent or markedly decreased', significance: 'Sound doesn\'t travel through fluid' },
        { component: 'Fremitus', finding: 'Decreased or absent', significance: 'Fluid blocks vibration' },
        { component: 'Trachea', finding: 'May deviate away if large', significance: 'Fluid pushes mediastinum' },
      ],
      suggestsDiagnosis: ['Pleural effusion - transudative vs exudative'],
      mechanism: 'Fluid accumulates in pleural space, compressing lung and blocking sound transmission',
      clinicalScenario: 'Patient with heart failure and progressive dyspnea, dullness at right base',
      keyLearningPoint: 'Differentiate from consolidation: effusion has DECREASED fremitus, consolidation has INCREASED',
    },
    {
      name: 'Pneumothorax Pattern',
      description: 'Air in pleural space',
      findings: [
        { component: 'Percussion', finding: 'Hyperresonant', significance: 'Air is highly resonant' },
        { component: 'Breath sounds', finding: 'Absent', significance: 'No lung to generate sounds' },
        { component: 'Fremitus', finding: 'Absent', significance: 'No lung tissue to vibrate' },
        { component: 'Trachea', finding: 'Deviated AWAY if tension', significance: 'Pressure pushing mediastinum' },
      ],
      suggestsDiagnosis: ['Pneumothorax', 'Tension pneumothorax if hypotensive'],
      mechanism: 'Air enters pleural space, collapsing the lung',
      clinicalScenario: 'Tall, thin young man with sudden chest pain and dyspnea',
      keyLearningPoint: 'Tension pneumothorax is clinical diagnosis requiring immediate needle decompression - do not wait for CXR',
    },
  ],

  redFlags: [
    {
      finding: 'Absent breath sounds with hyperresonance and tracheal deviation',
      concernFor: 'Tension pneumothorax',
      mechanism: 'Air under pressure in pleural space compresses heart and great vessels',
      immediateActions: ['Needle decompression 2nd ICS MCL', 'High-flow O2', 'Chest tube'],
      neverMiss: true,
    },
    {
      finding: 'Stridor (inspiratory wheeze from upper airway)',
      concernFor: 'Upper airway obstruction',
      mechanism: 'Obstruction at or above the trachea - anaphylaxis, foreign body, epiglottitis',
      immediateActions: ['Prepare for difficult airway', 'Epinephrine if anaphylaxis', 'ENT/anesthesia backup'],
      neverMiss: true,
    },
    {
      finding: 'Silent chest in asthmatic',
      concernFor: 'Severe airflow obstruction, impending respiratory failure',
      mechanism: 'Air movement so poor that no wheezes generated',
      immediateActions: ['Continuous nebs', 'Systemic steroids', 'Prepare for intubation', 'ICU'],
      neverMiss: true,
    },
  ],

  commonMistakes: [
    {
      mistake: 'Listening through clothing',
      consequence: 'Missing crackles, wheezes, and subtle findings',
      howToAvoid: 'Always listen on bare skin',
      correctTechnique: 'Have patient remove shirt/gown from back',
    },
    {
      mistake: 'Not comparing sides',
      consequence: 'Missing unilateral findings',
      howToAvoid: 'Always compare symmetric locations',
      correctTechnique: 'Listen left apex, then right apex, then left mid-lung, etc.',
    },
    {
      mistake: 'Missing hyperresonance as significant',
      consequence: 'Delayed diagnosis of pneumothorax',
      howToAvoid: 'Recognize hyperresonance + absent breath sounds as emergency',
      correctTechnique: 'If suspected, act before CXR in unstable patient',
    },
  ],

  clinicalPearls: [
    'The respiratory exam starts with observation - count the respiratory rate while pretending to take the pulse.',
    'Speaking in full sentences = not in severe distress. Inability to speak = severe.',
    'Asymmetry is key - always compare sides.',
    'Consolidation: dullness, bronchial sounds, increased fremitus, egophony. Effusion: dullness, decreased/absent sounds, decreased fremitus.',
    'Hyperresonance + absent breath sounds = pneumothorax until proven otherwise.',
    'A silent chest in asthma is ominous - it means no air movement, not improvement.',
    'Bibasilar crackles + elevated JVP = think heart failure, not just lung disease.',
    'Stridor is upper airway; wheezes are lower airway. Stridor is always concerning.',
  ],
};

// ============================================
// HEENT Examination (Head, Eyes, Ears, Nose, Throat)
// ============================================

export const HEENT_EXAM: SystemExamEducation = {
  id: 'heent',
  name: 'HEENT Exam',
  fullName: 'Head, Eyes, Ears, Nose, and Throat Examination',

  overview: `The HEENT examination systematically evaluates the head and face structures, visual system,
auditory system, nasal passages and sinuses, and oropharynx. This examination reveals information
about infections, neurological function, allergies, malignancies, and systemic diseases that manifest
in these accessible structures. Many acute complaints (headache, sore throat, ear pain, red eye)
require focused HEENT examination.`,

  clinicalImportance: `HEENT findings can reveal local disease (otitis media, pharyngitis, conjunctivitis)
as well as systemic conditions (thyroid disease, cranial nerve palsies, signs of increased intracranial
pressure). The eyes provide a window to the vasculature (hypertensive and diabetic retinopathy). The
oropharynx can show signs of infection, malignancy, and immunodeficiency. A thorough HEENT exam
is essential in primary care, emergency medicine, and subspecialty evaluation.`,

  equipmentNeeded: [
    {
      name: 'Otoscope',
      purpose: 'Examination of external auditory canal and tympanic membrane',
      howToUse: 'Hold like a pencil with ulnar hand against patient\'s head for stability. Pull pinna up and back in adults (down and back in children) to straighten canal. Insert speculum gently.',
      alternatives: 'Pneumatic attachment for mobility testing',
      tips: [
        'Use largest speculum that fits comfortably',
        'Brace your hand to prevent injury if patient moves',
        'Good lighting is essential - check batteries',
        'Clean cerumen gently if obstructing view',
      ],
    },
    {
      name: 'Ophthalmoscope',
      purpose: 'Examination of retina, optic disc, and vessels',
      howToUse: 'Dim room lights. Set diopter to 0 initially. Approach patient at 15 degrees from lateral. Use your right eye to examine patient\'s right eye (and vice versa). Focus on red reflex, then optic disc.',
      tips: [
        'Practice on normal eyes to learn landmarks',
        'Dial toward positive (green/black) for hyperopic, negative (red) for myopic',
        'Follow a vessel to find the optic disc',
        'Pupil dilation significantly improves examination',
      ],
    },
    {
      name: 'Penlight',
      purpose: 'Pupil examination, oral inspection, transillumination',
      howToUse: 'Shine directly into pupil for direct response; shine in opposite eye for consensual response. Use for throat visualization with tongue depressor.',
      tips: [
        'Check pupil response in dim lighting',
        'Approach from the side to test accommodation separately from light reflex',
      ],
    },
    {
      name: 'Tongue depressor',
      purpose: 'Visualization of oropharynx and tongue',
      howToUse: 'Press on anterior 2/3 of tongue (avoiding gag reflex). Have patient say "ahh" to elevate soft palate.',
      tips: [
        'Touch posterior tongue triggers gag - press middle of tongue',
        'Have patient open mouth wide before inserting',
        'Good lighting is essential',
      ],
    },
    {
      name: 'Snellen chart (or pocket card)',
      purpose: 'Visual acuity testing',
      howToUse: 'Patient stands 20 feet from chart (or as directed for pocket card). Test each eye separately with other eye covered. Record smallest line read correctly.',
      tips: [
        'Patient should wear corrective lenses if normally used',
        'Pinhole can correct refractive errors',
        'If < 20/200, test finger counting, hand motion, light perception',
      ],
    },
    {
      name: 'Tuning fork (512 Hz)',
      purpose: 'Weber and Rinne tests for hearing assessment',
      howToUse: 'Strike on heel of hand. Weber: place on vertex of skull. Rinne: compare bone (mastoid) to air (near ear canal) conduction.',
      alternatives: '256 Hz can be used but 512 Hz is preferred for hearing tests',
      tips: [
        'Strike firmly enough to produce lasting vibration',
        'For Rinne, ensure firm contact with mastoid process',
      ],
    },
  ],

  patientPositioning: [
    {
      position: 'Seated facing examiner',
      whenUsed: 'Most HEENT examination components',
      howToAchieve: 'Patient sits on exam table or chair, examiner at eye level',
      alternatives: ['Supine with head elevated if patient cannot sit'],
      considerations: 'Ensures examiner can access all structures; patient should be comfortable to avoid excessive movement',
    },
    {
      position: 'Head tilted back',
      whenUsed: 'Nasal examination, anterior rhinoscopy',
      howToAchieve: 'Patient tilts head back slightly; use penlight or otoscope with nasal speculum',
      alternatives: ['Examiner can kneel if patient cannot extend neck'],
      considerations: 'Avoid hyperextension in patients with cervical spine concerns',
    },
    {
      position: 'Head turned 45 degrees',
      whenUsed: 'Otoscopic examination',
      howToAchieve: 'Patient turns head away from side being examined',
      alternatives: ['Supine with head turned for bedbound patients'],
      considerations: 'Straightens external auditory canal for better visualization',
    },
  ],

  approach: {
    sequence: [
      { order: 1, action: 'General head inspection', rationale: 'Identify asymmetry, swelling, skin lesions, or trauma', whatToObserve: ['Facial symmetry', 'Skin color and lesions', 'Obvious swelling or masses'], transitionTip: 'Note any findings before moving closer for detailed exam' },
      { order: 2, action: 'Eye examination', rationale: 'Assess visual function and external/internal eye structures', whatToObserve: ['Visual acuity', 'Visual fields', 'Pupil size, shape, reactivity', 'Eye movements', 'Conjunctiva and sclera', 'Fundoscopy'], transitionTip: 'Complete both eyes before moving to ears' },
      { order: 3, action: 'Ear examination', rationale: 'Evaluate external ear, canal, and tympanic membrane', whatToObserve: ['External ear (pinna) for deformity, lesions', 'Canal for cerumen, inflammation', 'TM for color, landmarks, mobility'], transitionTip: 'Do hearing tests after otoscopy' },
      { order: 4, action: 'Hearing assessment', rationale: 'Screen for hearing loss and localize if present', whatToObserve: ['Whispered voice test or finger rub', 'Weber test lateralization', 'Rinne test (air vs bone)'] },
      { order: 5, action: 'Nose examination', rationale: 'Assess nasal passages and sinus tenderness', whatToObserve: ['External nose', 'Nasal mucosa color', 'Septum position', 'Sinus tenderness'], transitionTip: 'Have patient tip head back slightly' },
      { order: 6, action: 'Oral cavity and throat', rationale: 'Examine teeth, mucosa, tongue, palate, and pharynx', whatToObserve: ['Lips, teeth, gums', 'Tongue movement and appearance', 'Hard and soft palate', 'Tonsils and posterior pharynx', 'Uvula symmetry'] },
    ],
    adaptations: [
      { scenario: 'Pediatric patient', modification: 'Save throat exam for last (most uncomfortable). Use parents for positioning. Use distraction techniques.', rationale: 'Throat exam often causes crying which makes further examination difficult.' },
      { scenario: 'Uncooperative patient', modification: 'Focus on external findings. Defer fundoscopy. Use observation of speech and swallowing to assess oral function.', rationale: 'Safety first; gather what information you can without forcing cooperation.' },
      { scenario: 'Suspected neck injury', modification: 'Do not move head/neck. Examine in neutral position. Defer ear and throat exam if positioning requires movement.', rationale: 'C-spine protection takes priority over complete HEENT exam.' },
    ],
    typicalDuration: '5-10 minutes for complete exam; 2-3 minutes for focused exam',
    documentationTemplate: 'HEAD: Normocephalic, atraumatic. EYES: PERRL, EOMI, conjunctivae clear, fundi with sharp disc margins. EARS: Canals clear, TMs gray with normal landmarks bilaterally. NOSE: Mucosa pink, septum midline. THROAT: Oropharynx clear, no erythema or exudate.',
  },

  components: [
    {
      id: 'pupils',
      name: 'Pupil Examination',
      technique: 'inspection',
      howToPerform: {
        steps: [
          { order: 1, action: 'Observe pupils in ambient light', detail: 'Note size, shape, and symmetry. Normal pupils are round and equal (3-5mm in normal light).' },
          { order: 2, action: 'Direct light reflex', detail: 'Shine light into one eye. Observe ipsilateral pupil constriction.', tip: 'Use bright light, approach from side to avoid accommodation response' },
          { order: 3, action: 'Consensual light reflex', detail: 'While shining light in one eye, observe the OTHER eye constrict.' },
          { order: 4, action: 'Accommodation', detail: 'Have patient look at distant object, then focus on your finger 6 inches away. Pupils should constrict and eyes converge.' },
          { order: 5, action: 'Swinging flashlight test', detail: 'Move light from eye to eye. Abnormal: pupil dilates when light swings to it (RAPD - relative afferent pupillary defect).', tip: 'Keep light moving - about 2 seconds per eye' },
        ],
        landmarks: [
          { name: 'Pupil margin', howToFind: 'Junction of iris and pupil', significance: 'Should be smooth and round' },
        ],
        patientInstructions: 'Look straight ahead at a distant point. Keep both eyes open.',
        examinerPosition: 'Seated in front of patient, at eye level',
        commonErrors: ['Testing in bright room (pupils already constricted)', 'Not separating direct and consensual responses', 'Missing subtle RAPD'],
      },
      normalFinding: {
        description: 'Pupils equal, round, reactive to light and accommodation (PERRLA). Size typically 3-5mm.',
        variations: ['Slight anisocoria (up to 1mm difference) is normal in 20% of population', 'Elderly may have smaller pupils (senile miosis)'],
        ageConsiderations: 'Infants have smaller pupils. Elderly have reduced reactivity.',
        documentationExample: 'PERRLA. No RAPD.',
      },
      abnormalFindings: [
        {
          name: 'Relative Afferent Pupillary Defect (RAPD)',
          description: 'Marcus Gunn pupil - affected pupil paradoxically dilates when light swings to it',
          appearance: 'With swinging flashlight, affected eye pupil dilates instead of maintaining constriction',
          mechanism: 'Damage to optic nerve or retina impairs afferent limb of reflex',
          associatedConditions: ['Optic neuritis', 'Retinal detachment', 'Severe glaucoma', 'Optic nerve compression'],
          severity: 'moderate',
          urgency: 'soon',
          nextSteps: ['Ophthalmology consultation', 'Brain/orbit imaging if optic nerve lesion suspected'],
          differentialDiagnosis: ['Optic neuritis', 'Ischemic optic neuropathy', 'Compressive lesion'],
          additionalTestsNeeded: ['Visual acuity', 'Visual fields', 'Color vision', 'MRI brain/orbits'],
          documentationExample: 'Left RAPD present. Left pupil dilates with swinging flashlight test.',
        },
        {
          name: 'Anisocoria',
          description: 'Unequal pupil sizes',
          appearance: 'One pupil larger or smaller than the other by >1mm',
          mechanism: 'Depends on cause - can be sympathetic (dilator) or parasympathetic (constrictor) dysfunction',
          associatedConditions: ['Horner syndrome (smaller pupil)', 'CN III palsy (larger pupil)', 'Adie pupil', 'Pharmacologic'],
          severity: 'moderate',
          urgency: 'urgent',
          nextSteps: ['Determine which pupil is abnormal (check in dark and light)', 'Evaluate for ptosis, diplopia', 'Emergency imaging if CN III palsy suspected'],
          differentialDiagnosis: ['Physiologic anisocoria', 'Horner syndrome', 'CN III palsy', 'Adie tonic pupil', 'Medications'],
          additionalTestsNeeded: ['Full neurological exam', 'CT/CTA head if CN III palsy'],
          documentationExample: 'Right pupil 5mm, left pupil 3mm. Right pupil poorly reactive. Left PERRLA.',
        },
      ],
      whatItAssesses: 'Function of cranial nerves II and III, optic nerve integrity, and brainstem pupillary centers',
      anatomy: 'Afferent: Optic nerve (CN II) → brainstem (Edinger-Westphal nucleus). Efferent: CN III → ciliary ganglion → constrictor pupillae muscle. Sympathetic system controls dilator pupillae.',
      pathophysiology: 'Light enters one eye → signal via optic nerve to both Edinger-Westphal nuclei → bilateral CN III activation → both pupils constrict (direct and consensual response). Damage at any level disrupts this arc.',
      clinicalSignificance: 'Pupil abnormalities can indicate life-threatening conditions (CN III palsy from aneurysm, herniation) or help localize neurological lesions.',
      pitfalls: ['Forgetting to test consensual response', 'Missing subtle RAPD', 'Testing in too-bright environment', 'Not considering drug effects'],
      practiceTips: ['Master the swinging flashlight test - practice on normals', 'When in doubt, always check for RAPD', 'Asymmetry matters - figure out which pupil is abnormal'],
    },
    {
      id: 'tympanic-membrane',
      name: 'Tympanic Membrane Examination',
      technique: 'inspection',
      howToPerform: {
        steps: [
          { order: 1, action: 'Inspect external ear', detail: 'Look at pinna, tragus, mastoid for swelling, erythema, lesions', tip: 'Tenderness on pinna manipulation suggests otitis externa' },
          { order: 2, action: 'Position the ear', detail: 'Adults: pull pinna up and back. Children: pull down and back. This straightens the external canal.' },
          { order: 3, action: 'Insert otoscope', detail: 'Choose largest speculum that fits. Insert gently while looking through otoscope.', tip: 'Brace hand against patient\'s head for stability' },
          { order: 4, action: 'Examine canal', detail: 'Note cerumen, foreign bodies, discharge, swelling' },
          { order: 5, action: 'Examine tympanic membrane', detail: 'Identify cone of light, umbo, malleus handle, pars flaccida' },
          { order: 6, action: 'Assess mobility (if pneumatic otoscope)', detail: 'Squeeze bulb gently and observe TM movement', tip: 'Good seal required - use appropriate speculum size' },
        ],
        landmarks: [
          { name: 'Umbo', howToFind: 'Central point of TM, most inward - attachment of malleus', significance: 'Reference point for orientation' },
          { name: 'Cone of light', howToFind: 'Triangular reflection, 5 o\'clock position right ear (7 o\'clock left ear)', significance: 'Loss suggests middle ear fluid or TM abnormality' },
          { name: 'Malleus handle', howToFind: 'Superior from umbo, bone visible through TM', significance: 'Prominent malleus suggests retracted TM' },
          { name: 'Pars flaccida', howToFind: 'Superior portion of TM, above lateral process of malleus', significance: 'Site of cholesteatoma, perforations' },
        ],
        patientInstructions: 'Sit still and look straight ahead. You may feel slight pressure.',
        examinerPosition: 'Standing, bracing hand against patient\'s head',
        commonErrors: ['Wrong speculum size', 'Not bracing hand', 'Not pulling pinna correctly', 'Missing anterior perforations'],
      },
      normalFinding: {
        description: 'Pearly gray, translucent tympanic membrane with visible landmarks (cone of light, umbo, malleus handle). Mobile with pneumatic otoscopy.',
        variations: ['Slight retraction common in Eustachian tube dysfunction', 'Tympanosclerosis (white patches) from healed infections'],
        ageConsiderations: 'Infants: more horizontal TM, pink hue normal. Elderly: may have tympanosclerosis.',
        documentationExample: 'TMs gray with normal landmarks bilaterally. Mobile to pneumatic otoscopy.',
      },
      abnormalFindings: [
        {
          name: 'Acute Otitis Media',
          description: 'Middle ear infection causing bulging, erythematous TM',
          appearance: 'Bulging TM, loss of landmarks, erythema, may see purulent fluid behind TM, decreased mobility',
          mechanism: 'Bacterial infection in middle ear space causes inflammation, pus accumulation, and pressure',
          associatedConditions: ['Recent URI', 'Strep pneumoniae infection', 'H. influenzae infection'],
          severity: 'moderate',
          urgency: 'soon',
          nextSteps: ['Antibiotics if severe, bilateral, or age <2', 'Pain management', 'Observation option for mild cases in older children'],
          differentialDiagnosis: ['Otitis externa', 'Otitis media with effusion', 'Bullous myringitis'],
          additionalTestsNeeded: ['Usually clinical diagnosis', 'Tympanocentesis if treatment failure'],
          documentationExample: 'Right TM bulging, erythematous, landmarks obscured. No light reflex. Consistent with acute otitis media.',
        },
        {
          name: 'Tympanic Membrane Perforation',
          description: 'Hole in the tympanic membrane',
          appearance: 'Dark circular or irregular defect in TM. May see middle ear mucosa through it.',
          mechanism: 'Trauma, infection, or barotrauma causes rupture. Can also be from tube placement.',
          associatedConditions: ['Chronic otitis media', 'Cholesteatoma', 'Trauma'],
          severity: 'moderate',
          urgency: 'soon',
          nextSteps: ['Keep ear dry', 'ENT referral if not healing', 'Hearing test'],
          differentialDiagnosis: ['Acute vs chronic perforation', 'Cholesteatoma'],
          additionalTestsNeeded: ['Audiometry', 'ENT evaluation if chronic'],
          documentationExample: 'Central TM perforation, approximately 3mm, dry margins. No discharge.',
        },
      ],
      whatItAssesses: 'External auditory canal and middle ear status. TM appearance reflects middle ear pressure and infection.',
      anatomy: 'External auditory canal (outer 1/3 cartilaginous, inner 2/3 bony) → TM (3 layers: skin, fibrous, mucosal) → middle ear space containing ossicles.',
      pathophysiology: 'Eustachian tube dysfunction traps negative pressure → TM retraction. Infection fills middle ear with pus → bulging TM. Chronic negative pressure or infection can cause perforation.',
      clinicalSignificance: 'TM findings guide treatment of ear infections and help identify causes of hearing loss and vertigo.',
      pitfalls: ['Cerumen blocking view', 'Calling erythema from crying or fever "otitis media"', 'Missing perforations (especially anterior)', 'Not testing mobility'],
      practiceTips: ['Master the landmarks before trying to identify pathology', 'If view is blocked, consider cerumen removal', 'Always document what you DO see, not just "normal"'],
    },
    {
      id: 'oropharynx',
      name: 'Oropharynx Examination',
      technique: 'inspection',
      howToPerform: {
        steps: [
          { order: 1, action: 'Inspect lips', detail: 'Look for color, lesions, cracks, angular cheilitis' },
          { order: 2, action: 'Inspect teeth and gums', detail: 'Note dental caries, missing teeth, gum inflammation, bleeding' },
          { order: 3, action: 'Examine tongue', detail: 'Ask patient to stick out tongue - note deviation, tremor, lesions. Examine dorsum and lateral surfaces.' },
          { order: 4, action: 'Examine oral mucosa', detail: 'Use penlight to inspect buccal mucosa, floor of mouth, hard palate' },
          { order: 5, action: 'Examine throat', detail: 'Use tongue depressor on middle of tongue. Have patient say "ahh." Observe soft palate elevation, uvula, tonsils, posterior pharynx.', tip: 'Press on middle of tongue to avoid gag reflex' },
          { order: 6, action: 'Note any exudate, lesions, asymmetry', detail: 'Describe tonsillar size (1-4+), presence of exudate, peritonsillar fullness' },
        ],
        landmarks: [
          { name: 'Uvula', howToFind: 'Midline, hanging from soft palate', significance: 'Should elevate in midline with "ahh"' },
          { name: 'Tonsils', howToFind: 'Bilateral, between anterior and posterior tonsillar pillars', significance: 'Grade size, note exudate' },
          { name: 'Posterior pharyngeal wall', howToFind: 'Behind uvula and tonsils', significance: 'Cobblestoning suggests postnasal drip; erythema suggests pharyngitis' },
        ],
        patientInstructions: 'Open mouth wide. Stick out tongue. Say "ahh."',
        examinerPosition: 'Facing patient, penlight in one hand, tongue depressor in other',
        commonErrors: ['Pressing on back of tongue (causes gagging)', 'Inadequate lighting', 'Not examining lateral tongue surfaces'],
      },
      normalFinding: {
        description: 'Pink, moist mucosa. Tongue midline, no lesions. Tonsils small (1+ or absent). Uvula midline, elevates symmetrically. Clear posterior pharynx.',
        variations: ['Geographic tongue (benign migratory glossitis)', 'Torus palatinus (bony midline palate growth)', 'Racial pigmentation of mucosa'],
        ageConsiderations: 'Children often have larger tonsils (2-3+) normally. Elderly may have smooth tongue (atrophic glossitis).',
        documentationExample: 'Oropharynx clear. Tonsils 1+ bilaterally without exudate. Uvula midline.',
      },
      abnormalFindings: [
        {
          name: 'Streptococcal Pharyngitis',
          description: 'Bacterial infection of pharynx causing severe sore throat',
          appearance: 'Tonsillar erythema and exudate (white/yellow patches). Palatal petechiae. Tender anterior cervical lymphadenopathy.',
          mechanism: 'Group A Streptococcus infects pharyngeal mucosa, causing intense inflammation and systemic symptoms',
          associatedConditions: ['Scarlet fever', 'Peritonsillar abscess', 'Post-streptococcal complications'],
          severity: 'moderate',
          urgency: 'soon',
          nextSteps: ['Rapid strep test or throat culture', 'Antibiotics if positive (penicillin or amoxicillin)'],
          differentialDiagnosis: ['Viral pharyngitis', 'Mononucleosis', 'Peritonsillar abscess', 'Diphtheria'],
          additionalTestsNeeded: ['Rapid strep antigen test', 'Throat culture if rapid negative', 'Monospot if mononucleosis suspected'],
          documentationExample: 'Tonsillar erythema and exudate bilaterally. Palatal petechiae present. Tender anterior cervical lymphadenopathy.',
        },
        {
          name: 'Peritonsillar Abscess',
          description: 'Collection of pus between tonsil and pharyngeal muscles',
          appearance: 'Unilateral tonsillar swelling pushing uvula to opposite side. "Hot potato" voice. Trismus (difficulty opening mouth).',
          mechanism: 'Extension of tonsillitis with pus collection in peritonsillar space. Creates mass effect.',
          associatedConditions: ['Group A Strep', 'Anaerobic bacteria', 'Mononucleosis'],
          severity: 'severe',
          urgency: 'urgent',
          nextSteps: ['ENT consultation', 'Needle aspiration or I&D', 'IV antibiotics', 'Airway monitoring'],
          differentialDiagnosis: ['Severe tonsillitis', 'Retropharyngeal abscess', 'Parapharyngeal abscess'],
          additionalTestsNeeded: ['CT neck with contrast if concern for deeper space infection'],
          documentationExample: 'Right peritonsillar swelling with uvula deviation to left. Trismus present. "Hot potato" voice. Consistent with peritonsillar abscess.',
        },
      ],
      whatItAssesses: 'Oral health, pharyngeal infection, cranial nerve function (IX, X, XII), signs of systemic disease',
      anatomy: 'Oral cavity includes lips, teeth, gums, tongue (CN XII), hard palate. Oropharynx includes soft palate, uvula, tonsils (palatine between pillars), posterior pharynx.',
      pathophysiology: 'Pharyngitis from viral or bacterial infection causes inflammation, edema, and exudate. Untreated strep can lead to abscess formation or systemic complications.',
      clinicalSignificance: 'Differentiating strep from viral pharyngitis guides antibiotic use. Recognizing peritonsillar abscess prevents airway compromise.',
      pitfalls: ['Calling any red throat "strep"', 'Missing unilateral findings suggesting abscess', 'Not examining tongue carefully for lesions'],
      practiceTips: ['Use Centor/McIsaac criteria to guide strep testing', 'Mononucleosis can look just like strep - consider in teens/young adults', 'Hot potato voice = think abscess'],
    },
  ],

  specialTests: [
    {
      id: 'weber-test',
      name: 'Weber Test',
      alternateNames: ['Weber tuning fork test'],
      system: 'heent',
      purpose: 'Determines if hearing loss is conductive or sensorineural; identifies lateralization',
      indications: ['Asymmetric hearing loss', 'Suspected conductive vs sensorineural hearing loss', 'Unilateral ear complaints'],
      contraindications: ['Skull base fracture (relative)'],
      procedure: {
        patientPosition: 'Seated, quiet room',
        examinerPosition: 'Facing patient',
        steps: [
          { order: 1, action: 'Strike 512 Hz tuning fork on heel of hand', detail: 'Produces consistent vibration' },
          { order: 2, action: 'Place base of tuning fork on vertex of skull', detail: 'Middle of forehead or top of head' },
          { order: 3, action: 'Ask patient: "Do you hear this equally in both ears, or louder in one ear?"', detail: 'Record which ear hears louder, if any' },
        ],
        patientInstructions: 'Tell me if the sound is equal in both ears or louder in one ear.',
        duration: '30 seconds',
      },
      interpretation: {
        positiveResult: 'Sound lateralizes to one ear',
        negativeResult: 'Sound heard equally in both ears (midline)',
        falsePositives: ['Asymmetric environmental noise', 'Patient misunderstanding question'],
        falseNegatives: ['Symmetric bilateral hearing loss'],
        clinicalContext: 'Lateralizes to affected ear in conductive loss (plugged ear hears bone conduction better). Lateralizes AWAY from affected ear in sensorineural loss (damaged cochlea perceives less).',
      },
      accuracy: {
        sensitivity: '~75%',
        specificity: '~80%',
        notes: 'More useful for confirming suspected pathology than screening. Should be combined with Rinne test.',
      },
      clinicalUtility: 'Helps differentiate between conductive and sensorineural hearing loss at bedside without specialized equipment.',
      commonErrors: ['Placing fork off midline', 'Background noise affecting perception', 'Not striking fork hard enough'],
      evidence: 'Named after Ernst Heinrich Weber (1795-1878). Standard component of hearing assessment.',
    },
    {
      id: 'rinne-test',
      name: 'Rinne Test',
      alternateNames: ['Air-bone conduction test'],
      system: 'heent',
      purpose: 'Compares air conduction to bone conduction to differentiate conductive from sensorineural hearing loss',
      indications: ['Suspected hearing loss', 'Complement to Weber test', 'Ear complaints'],
      contraindications: ['Mastoid tenderness (place gently)'],
      procedure: {
        patientPosition: 'Seated, quiet room',
        examinerPosition: 'Beside patient',
        steps: [
          { order: 1, action: 'Strike 512 Hz tuning fork', detail: 'Same as Weber test' },
          { order: 2, action: 'Place base on mastoid process', detail: 'Firmly against bone behind ear' },
          { order: 3, action: 'Ask patient to say when sound stops', detail: 'This tests bone conduction' },
          { order: 4, action: 'Immediately move prongs near external canal', detail: 'Without re-striking, place prongs 1-2 cm from ear canal' },
          { order: 5, action: 'Ask patient if they hear it again', detail: 'This tests air conduction' },
        ],
        patientInstructions: 'Tell me when you can no longer hear the humming. Then tell me if you hear it again when I move it.',
        duration: '1 minute per ear',
      },
      interpretation: {
        positiveResult: 'Rinne NEGATIVE (abnormal): Bone conduction > air conduction. Patient hears longer/louder on mastoid than at ear canal.',
        negativeResult: 'Rinne POSITIVE (normal): Air conduction > bone conduction. Patient hears longer at ear canal after mastoid.',
        falsePositives: ['Severe sensorineural loss can cause false negative Rinne'],
        falseNegatives: ['Mild conductive loss may not be detected'],
        clinicalContext: 'Normal: AC > BC (Rinne positive). Conductive loss: BC > AC (Rinne negative). In sensorineural loss, both reduced but ratio maintained (Rinne positive).',
      },
      accuracy: {
        sensitivity: '~70%',
        specificity: '~85%',
        notes: 'Detects conductive loss of ~25dB or more.',
      },
      clinicalUtility: 'Combined with Weber test, helps localize hearing loss to middle ear (conductive) vs inner ear/nerve (sensorineural).',
      commonErrors: ['Re-striking fork before moving to ear', 'Not placing firmly on mastoid', 'Confusing positive/negative terminology'],
      evidence: 'Named after Heinrich Adolf Rinne (1819-1868). Fundamental bedside hearing test.',
    },
  ],

  relatedSystems: [
    {
      relatedSystem: 'neurological',
      relationship: 'HEENT exam includes cranial nerve assessment (II, III, IV, VI for eyes; VIII for hearing; IX, X for throat; XII for tongue)',
      whenToExamineTogether: 'Headache evaluation, facial weakness, dizziness, suspected stroke',
      clinicalExample: 'Patient with facial droop - HEENT exam shows inability to close eye (CN VII), neurological exam assesses for other deficits.',
    },
    {
      relatedSystem: 'neck',
      relationship: 'Lymphadenopathy often accompanies HEENT infections. Thyroid visible during throat exam.',
      whenToExamineTogether: 'Sore throat (cervical lymphadenopathy), suspected thyroid disease',
      clinicalExample: 'Pharyngitis with tender anterior cervical nodes suggests streptococcal infection.',
    },
  ],

  findingPatterns: [
    {
      name: 'Streptococcal Pharyngitis Pattern',
      description: 'Constellation of findings suggesting Group A Strep infection',
      findings: [
        { component: 'Oropharynx', finding: 'Tonsillar exudate', significance: 'Bacterial infection likely' },
        { component: 'Oropharynx', finding: 'Palatal petechiae', significance: 'Highly suggestive of strep' },
        { component: 'Neck', finding: 'Tender anterior cervical lymphadenopathy', significance: 'Reactive nodes from pharyngeal infection' },
        { component: 'General', finding: 'Fever >38°C', significance: 'Systemic infection' },
      ],
      suggestsDiagnosis: ['Group A streptococcal pharyngitis'],
      mechanism: 'Streptococcal toxins cause intense local inflammation and systemic symptoms. Lymphatic drainage to anterior cervical nodes.',
      clinicalScenario: 'Adolescent with 2-day sore throat, fever 39°C, tonsillar exudate, tender anterior cervical nodes, no cough.',
      keyLearningPoint: 'Absence of cough and presence of exudate and nodes increases likelihood of strep. Use Centor criteria.',
    },
    {
      name: 'Conductive Hearing Loss Pattern',
      description: 'Weber and Rinne findings consistent with middle ear pathology',
      findings: [
        { component: 'Weber test', finding: 'Lateralizes to affected ear', significance: 'Bone conduction better perceived in blocked ear' },
        { component: 'Rinne test', finding: 'Bone > Air (Rinne negative)', significance: 'Air conduction impaired by middle ear pathology' },
        { component: 'Otoscopy', finding: 'Abnormal TM (fluid, perforation, retraction)', significance: 'Visible cause of conductive loss' },
      ],
      suggestsDiagnosis: ['Otitis media', 'Otosclerosis', 'TM perforation', 'Cerumen impaction'],
      mechanism: 'Sound conduction through middle ear is impaired. Bone conduction bypasses this, so is relatively better preserved.',
      clinicalScenario: 'Patient with ear fullness after cold. Weber lateralizes to affected ear. Rinne shows BC > AC. TM shows fluid level.',
      keyLearningPoint: 'Weber lateralizes TO the affected ear in conductive loss, AWAY in sensorineural loss.',
    },
  ],

  redFlags: [
    {
      finding: 'Papilledema on fundoscopy',
      concernFor: 'Increased intracranial pressure',
      mechanism: 'ICP transmitted along optic nerve sheath causes disc swelling',
      immediateActions: ['Do not perform lumbar puncture', 'Urgent CT head', 'Neurosurgery consultation', 'Consider ICP-lowering measures'],
      neverMiss: true,
    },
    {
      finding: 'Fixed dilated pupil with headache and CN III palsy',
      concernFor: 'Posterior communicating artery aneurysm or uncal herniation',
      mechanism: 'CN III compression causes pupil dilation (parasympathetic fibers run on outside of nerve)',
      immediateActions: ['Emergent CT/CTA head', 'Neurosurgery consultation', 'If herniation: mannitol, hyperventilation, elevate head'],
      neverMiss: true,
    },
    {
      finding: 'Peritonsillar bulging with trismus',
      concernFor: 'Peritonsillar abscess with potential airway compromise',
      mechanism: 'Abscess causes mass effect, can obstruct airway. Trismus from pterygoid muscle inflammation.',
      immediateActions: ['Airway assessment', 'ENT consultation for drainage', 'IV antibiotics', 'Prepare for difficult airway'],
      neverMiss: true,
    },
    {
      finding: 'Battle sign or raccoon eyes',
      concernFor: 'Basilar skull fracture',
      mechanism: 'Blood tracking from skull base fracture to mastoid (Battle) or periorbital area (raccoon)',
      immediateActions: ['C-spine precautions', 'CT head/temporal bones', 'Avoid nasal instrumentation', 'Neurosurgery consultation'],
      neverMiss: true,
    },
  ],

  commonMistakes: [
    {
      mistake: 'Calling any red throat "strep" and prescribing antibiotics',
      consequence: 'Unnecessary antibiotics, missing viral cause or mononucleosis',
      howToAvoid: 'Use Centor criteria, perform rapid strep testing, consider mono in adolescents',
      correctTechnique: 'Score clinical findings, test appropriately, treat only confirmed strep',
    },
    {
      mistake: 'Attempting fundoscopy without dilating pupils in complete darkness',
      consequence: 'Incomplete examination, missing pathology',
      howToAvoid: 'Maximize pupil dilation with dark room, consider pharmacologic dilation',
      correctTechnique: 'Dim lights fully, allow time for adaptation, use proper diopter settings',
    },
    {
      mistake: 'Not examining both ears when patient has unilateral complaint',
      consequence: 'Missing bilateral disease, missing comparison',
      howToAvoid: 'Always examine both sides for comparison',
      correctTechnique: 'Complete bilateral examination, document both findings',
    },
  ],

  clinicalPearls: [
    'PERRLA alone doesn\'t rule out serious pathology - always do swinging flashlight test.',
    'Stridor is always concerning - it means upper airway obstruction. Don\'t dismiss it.',
    'Hot potato voice + trismus + unilateral tonsillar swelling = peritonsillar abscess until proven otherwise.',
    'In sudden sensorineural hearing loss, time is critical - audiometry and treatment within 24-48 hours.',
    'Cobblestoning of posterior pharynx suggests postnasal drip, not infection.',
    'Fundi are the only place you can directly visualize blood vessels - don\'t skip fundoscopy in hypertension and diabetes.',
    'The cone of light on TM is a reflection, not a structure - its absence suggests TM abnormality.',
  ],
};

// ============================================
// Musculoskeletal Examination
// ============================================

export const MUSCULOSKELETAL_EXAM: SystemExamEducation = {
  id: 'musculoskeletal',
  name: 'Musculoskeletal Exam',
  fullName: 'Musculoskeletal System Examination',

  overview: `The musculoskeletal examination evaluates bones, joints, muscles, tendons, and ligaments
through systematic inspection, palpation, range of motion testing, and special maneuvers. MSK complaints
are among the most common reasons for medical visits. The examination helps distinguish between
inflammatory, degenerative, traumatic, and referred causes of pain and dysfunction.`,

  clinicalImportance: `MSK conditions cause significant morbidity and disability. Accurate examination
can distinguish between conditions requiring urgent intervention (compartment syndrome, septic joint)
versus those amenable to conservative management. Many MSK diagnoses can be made clinically,
guiding appropriate imaging and treatment decisions. The examination also assesses function, which
is critical for disability evaluation and treatment planning.`,

  equipmentNeeded: [
    {
      name: 'Goniometer',
      purpose: 'Precise measurement of joint range of motion',
      howToUse: 'Align arms of goniometer with bones being measured. Center axis on joint. Record active and passive ROM.',
      alternatives: 'Visual estimation or inclinometer for spine',
      tips: [
        'Consistent technique more important than precision',
        'Compare to contralateral side',
        'Document starting position',
      ],
    },
    {
      name: 'Reflex hammer',
      purpose: 'Testing muscle stretch reflexes',
      howToUse: 'Swing from wrist, let hammer fall on tendon. Observe and grade response.',
      tips: [
        'Patient must be relaxed',
        'If diminished, try reinforcement (Jendrassik maneuver)',
        'Compare sides',
      ],
    },
    {
      name: 'Tape measure',
      purpose: 'Measuring limb circumference, leg length discrepancy',
      howToUse: 'Measure from consistent landmarks. For leg length: ASIS to medial malleolus.',
      tips: [
        'Mark measurement points for reproducibility',
        'Measure both sides at same level',
      ],
    },
  ],

  patientPositioning: [
    {
      position: 'Standing',
      whenUsed: 'Gait assessment, spine inspection, hip/knee alignment',
      howToAchieve: 'Patient stands facing and then away from examiner',
      alternatives: ['Seated for patients with balance issues'],
      considerations: 'Adequate space needed. Patient should have minimal clothing for visualization.',
    },
    {
      position: 'Seated',
      whenUsed: 'Upper extremity examination, cervical spine, shoulder',
      howToAchieve: 'Patient sits on exam table or chair',
      alternatives: ['Supine if unable to sit'],
      considerations: 'Allows access to shoulder and cervical spine from multiple angles.',
    },
    {
      position: 'Supine',
      whenUsed: 'Hip, knee examination, supine straight leg raise',
      howToAchieve: 'Patient lies flat on back on exam table',
      alternatives: ['Lateral decubitus for hip internal rotation'],
      considerations: 'Table should be firm. Pillow under head for comfort.',
    },
    {
      position: 'Prone',
      whenUsed: 'Lumbar spine palpation, hamstring assessment, femoral nerve stretch test',
      howToAchieve: 'Patient lies face down',
      alternatives: ['Lateral decubitus if prone not tolerated'],
      considerations: 'May be difficult for patients with respiratory or cardiac issues.',
    },
  ],

  approach: {
    sequence: [
      { order: 1, action: 'Inspection', rationale: 'Identify deformity, swelling, atrophy, skin changes', whatToObserve: ['Symmetry', 'Muscle bulk', 'Swelling or effusion', 'Skin color and changes', 'Alignment'], transitionTip: 'Observe patient while walking in and during history' },
      { order: 2, action: 'Palpation', rationale: 'Localize tenderness, identify masses, assess temperature', whatToObserve: ['Point tenderness', 'Warmth', 'Crepitus', 'Effusion', 'Muscle tone'] },
      { order: 3, action: 'Range of motion', rationale: 'Assess joint function and detect restrictions', whatToObserve: ['Active ROM first', 'Passive ROM if limited actively', 'Pain location in arc of motion', 'End-feel quality'] },
      { order: 4, action: 'Strength testing', rationale: 'Evaluate motor function and identify weakness', whatToObserve: ['Grade strength 0-5', 'Compare sides', 'Note pain with resistance'] },
      { order: 5, action: 'Special tests', rationale: 'Specific maneuvers for ligament, tendon, or joint pathology', whatToObserve: ['Test specific to suspected diagnosis', 'Compare to contralateral side', 'Note provocation of symptoms'] },
      { order: 6, action: 'Neurovascular assessment', rationale: 'Ensure nerve and vascular integrity, especially post-injury', whatToObserve: ['Pulses', 'Sensation', 'Motor function', 'Capillary refill'] },
    ],
    adaptations: [
      { scenario: 'Acute trauma', modification: 'Minimize movement. Assess neurovascular status first. Splint before extensive examination.', rationale: 'Prevent further injury. Identify vascular emergency.' },
      { scenario: 'Severe pain', modification: 'Examine unaffected areas first. Use minimal movement. Consider examination under analgesia if needed.', rationale: 'Gain patient trust. Obtain maximum information with minimum pain.' },
      { scenario: 'Polyarticular involvement', modification: 'Systematic screening exam of all joints before detailed focus. Look for pattern (symmetric vs asymmetric, large vs small joints).', rationale: 'Pattern recognition helps narrow differential (RA vs OA vs gout, etc.).' },
    ],
    typicalDuration: '5-15 minutes depending on scope',
    documentationTemplate: 'MUSCULOSKELETAL: Gait normal. No joint swelling or deformity. Full active ROM all joints. Strength 5/5 throughout. Joints stable to stress testing.',
  },

  components: [
    {
      id: 'knee-exam',
      name: 'Knee Examination',
      technique: 'palpation',
      howToPerform: {
        steps: [
          { order: 1, action: 'Inspect standing and supine', detail: 'Look for swelling, alignment (varus/valgus), quadriceps atrophy, scars' },
          { order: 2, action: 'Palpate with knee at 90°', detail: 'Palpate joint line medial and lateral. Assess for effusion (bulge sign, patellar tap).' },
          { order: 3, action: 'Test ROM', detail: 'Normal: 0° extension to 135° flexion. Note hyperextension if present.' },
          { order: 4, action: 'Test ligament stability', detail: 'Valgus stress (MCL), varus stress (LCL), anterior drawer (ACL), posterior drawer (PCL).' },
          { order: 5, action: 'Special tests', detail: 'Lachman (ACL), McMurray (meniscus), patellar apprehension, Clarke\'s test (patellofemoral).', tip: 'Always test both knees for comparison' },
        ],
        landmarks: [
          { name: 'Medial joint line', howToFind: 'Follow medial femoral condyle to tibial plateau junction', significance: 'Tenderness suggests meniscal pathology' },
          { name: 'Tibial tubercle', howToFind: 'Anterior prominence below patella', significance: 'Tenderness in Osgood-Schlatter disease' },
          { name: 'Patella', howToFind: 'Mobile bone anterior to femoral condyles', significance: 'Track movement, palpate for tenderness' },
        ],
        patientInstructions: 'Let your leg relax completely. Tell me if anything causes pain.',
        examinerPosition: 'Seated at side of exam table, knee accessible',
        commonErrors: ['Testing ACL with knee at 90° instead of 20-30° (Lachman)', 'Not relaxing patient before ligament testing', 'Confusing effusion with soft tissue swelling'],
      },
      normalFinding: {
        description: 'No swelling, deformity, or erythema. Full ROM (0-135°). Stable to varus/valgus stress. Negative Lachman, negative McMurray. No effusion.',
        variations: ['Mild genu valgum or varum can be normal', 'Hyperextension up to 10° common in women'],
        ageConsiderations: 'Elderly may have crepitus from OA without clinical significance. Children may have physiologic genu valgum.',
        documentationExample: 'Right knee: No effusion. Full ROM. Ligaments stable. McMurray negative.',
      },
      abnormalFindings: [
        {
          name: 'ACL Tear',
          description: 'Anterior cruciate ligament injury causing instability',
          appearance: 'Effusion (often large if acute). Positive Lachman test (increased anterior tibial translation with soft endpoint).',
          mechanism: 'Twisting injury with foot planted. Landing from jump. Hyperextension.',
          associatedConditions: ['Meniscal tear', 'MCL injury', 'Bone bruise'],
          severity: 'moderate',
          urgency: 'soon',
          nextSteps: ['MRI to confirm and assess associated injuries', 'Orthopedic referral', 'Physical therapy', 'Consider reconstruction if active/young'],
          differentialDiagnosis: ['PCL tear', 'Meniscal tear alone', 'Patellar dislocation'],
          additionalTestsNeeded: ['MRI knee', 'X-ray to rule out fracture'],
          documentationExample: 'Large effusion. Lachman positive with soft endpoint. Pivot shift positive. Consistent with ACL tear.',
        },
        {
          name: 'Meniscal Tear',
          description: 'Tear of medial or lateral meniscus causing pain and mechanical symptoms',
          appearance: 'Joint line tenderness. Possible effusion. Positive McMurray test (pain and/or click).',
          mechanism: 'Twisting motion. Squatting injury. Degenerative in older patients.',
          associatedConditions: ['ACL tear', 'Osteoarthritis', 'Cartilage injury'],
          severity: 'mild',
          urgency: 'routine',
          nextSteps: ['MRI if diagnosis uncertain or surgery considered', 'Physical therapy', 'Activity modification', 'NSAIDs'],
          differentialDiagnosis: ['ACL tear', 'Plica syndrome', 'Chondral injury', 'Osteoarthritis'],
          additionalTestsNeeded: ['MRI if conservative management fails'],
          documentationExample: 'Medial joint line tenderness. McMurray positive with external rotation (click and pain). Small effusion.',
        },
      ],
      whatItAssesses: 'Knee joint integrity including bone alignment, ligament stability, meniscal function, and extensor mechanism',
      anatomy: 'Femur-tibia-patella articulation. Stabilized by ACL, PCL, MCL, LCL. Shock absorption by medial and lateral menisci. Extensor mechanism: quadriceps tendon → patella → patellar tendon → tibial tubercle.',
      pathophysiology: 'Ligament injuries from excess stress causing partial or complete tears. Meniscal tears from shear forces. Degenerative changes from wear. Effusions from inflammation or hemarthrosis.',
      clinicalSignificance: 'Knee injuries are extremely common. Accurate diagnosis guides conservative vs surgical management. Missing ACL tear can lead to recurrent instability and meniscal damage.',
      pitfalls: ['Missing ACL tear if not testing Lachman properly', 'Calling all knee pain "arthritis" without examination', 'Not assessing neurovascular status after trauma'],
      practiceTips: ['Master the Lachman test - most sensitive for ACL', 'Feel for endpoint quality, not just translation amount', 'Compare to other knee - some patients have lax ligaments bilaterally'],
    },
    {
      id: 'shoulder-exam',
      name: 'Shoulder Examination',
      technique: 'palpation',
      howToPerform: {
        steps: [
          { order: 1, action: 'Inspect from front, side, and behind', detail: 'Look for asymmetry, atrophy (supraspinatus, infraspinatus), deformity, swelling' },
          { order: 2, action: 'Palpate', detail: 'Sternoclavicular joint, clavicle, AC joint, acromial process, biceps tendon in groove, supraspinatus insertion' },
          { order: 3, action: 'Test active ROM', detail: 'Flexion, extension, abduction, internal/external rotation' },
          { order: 4, action: 'Test passive ROM if active limited', detail: 'If passive = active limitation, frozen shoulder. If passive > active, rotator cuff weakness.' },
          { order: 5, action: 'Strength testing', detail: 'Empty can test (supraspinatus), external rotation (infraspinatus), lift-off test (subscapularis)' },
          { order: 6, action: 'Special tests', detail: 'Neer impingement, Hawkins impingement, Speed\'s test (biceps), cross-arm adduction (AC joint)', tip: 'Note which maneuver reproduces the patient\'s pain' },
        ],
        landmarks: [
          { name: 'AC joint', howToFind: 'Follow clavicle laterally to articulation with acromion', significance: 'Tenderness with shoulder separation or OA' },
          { name: 'Bicipital groove', howToFind: 'Between greater and lesser tuberosities, anterior shoulder', significance: 'Biceps tendon tenderness' },
          { name: 'Greater tuberosity', howToFind: 'Lateral humeral head, rotator cuff insertion', significance: 'Supraspinatus insertion site' },
        ],
        patientInstructions: 'Keep your arm relaxed. Move your arm as far as you can, then I\'ll help move it further.',
        examinerPosition: 'Facing patient for inspection, behind for scapular assessment',
        commonErrors: ['Not comparing active to passive ROM', 'Missing rotator cuff weakness by not isolating muscles', 'Calling impingement signs positive without proper technique'],
      },
      normalFinding: {
        description: 'Symmetric muscle bulk. Full active ROM: forward flexion 180°, abduction 180°, external rotation 90°, internal rotation (thumb to T7 posteriorly). Strength 5/5. Impingement tests negative.',
        variations: ['Athletes may have increased external rotation, decreased internal rotation', 'Elderly may have mildly reduced ROM'],
        ageConsiderations: 'Rotator cuff degeneration increases with age. Asymptomatic tears common over 60.',
        documentationExample: 'Shoulders: Symmetric. Full ROM bilaterally. Strength 5/5. Impingement signs negative. No instability.',
      },
      abnormalFindings: [
        {
          name: 'Rotator Cuff Tear',
          description: 'Partial or complete tear of rotator cuff tendons',
          appearance: 'Weakness with specific testing (empty can, external rotation). May have atrophy. Positive impingement signs. Pain with overhead activity.',
          mechanism: 'Acute: fall on outstretched hand, lifting injury. Chronic: repetitive overhead activity, degeneration.',
          associatedConditions: ['Impingement syndrome', 'Biceps tendinopathy', 'Shoulder OA'],
          severity: 'moderate',
          urgency: 'soon',
          nextSteps: ['X-ray to assess for bone changes', 'MRI or ultrasound to characterize tear', 'Orthopedic referral', 'Physical therapy for partial tears'],
          differentialDiagnosis: ['Impingement syndrome', 'Adhesive capsulitis', 'Cervical radiculopathy', 'AC joint pathology'],
          additionalTestsNeeded: ['MRI shoulder', 'X-ray shoulder'],
          documentationExample: 'Weakness with empty can test (4/5). Positive Neer and Hawkins signs. Full passive ROM. Consistent with rotator cuff pathology.',
        },
        {
          name: 'Adhesive Capsulitis (Frozen Shoulder)',
          description: 'Global restriction of shoulder motion due to capsular contracture',
          appearance: 'Marked loss of both active AND passive ROM, especially external rotation. Pain at end range.',
          mechanism: 'Inflammation leads to capsular fibrosis and contracture. Associated with diabetes, thyroid disease, immobilization.',
          associatedConditions: ['Diabetes mellitus', 'Thyroid disease', 'Post-surgical', 'Post-trauma'],
          severity: 'moderate',
          urgency: 'routine',
          nextSteps: ['Physical therapy (mainstay of treatment)', 'Intra-articular steroid injection', 'NSAIDs', 'Usually self-limited (1-3 years)'],
          differentialDiagnosis: ['Rotator cuff tear', 'Glenohumeral OA', 'Posterior dislocation'],
          additionalTestsNeeded: ['X-ray to rule out OA', 'MRI if diagnosis uncertain'],
          documentationExample: 'Global loss of ROM: flexion 100°, abduction 80°, external rotation 20°. Passive ROM = active ROM. Consistent with adhesive capsulitis.',
        },
      ],
      whatItAssesses: 'Shoulder girdle including glenohumeral joint, rotator cuff function, AC joint, and scapulothoracic motion',
      anatomy: 'Ball-and-socket joint (glenohumeral). Rotator cuff: supraspinatus (abduction), infraspinatus/teres minor (external rotation), subscapularis (internal rotation). AC joint for arm elevation.',
      pathophysiology: 'Rotator cuff impingement under acromion leads to tendinitis and tears. Capsular inflammation causes fibrosis (frozen shoulder). Instability from labral or ligament damage.',
      clinicalSignificance: 'Shoulder pain is common and often diagnostic challenge. Rotator cuff tears increase with age and may or may not require surgery. Frozen shoulder has characteristic course.',
      pitfalls: ['Missing frozen shoulder by not checking passive ROM', 'Calling weakness "pain inhibition" when it\'s true weakness', 'Not examining cervical spine (referred pain)'],
      practiceTips: ['Compare active to passive ROM - key distinguisher', 'External rotation loss is earliest sign of frozen shoulder', 'Examine cervical spine in shoulder pain patients'],
    },
    {
      id: 'spine-exam',
      name: 'Lumbar Spine Examination',
      technique: 'inspection',
      howToPerform: {
        steps: [
          { order: 1, action: 'Observe standing posture', detail: 'Look for scoliosis, kyphosis, lordosis, list (lean to one side)' },
          { order: 2, action: 'Observe gait', detail: 'Note antalgic gait, Trendelenburg gait, foot drop' },
          { order: 3, action: 'Test ROM standing', detail: 'Flexion (touch toes), extension, lateral bending, rotation. Note restriction and pain.' },
          { order: 4, action: 'Palpate spine prone', detail: 'Midline spinous processes, paraspinal muscles. Note step-off (spondylolisthesis).' },
          { order: 5, action: 'Neurological exam supine', detail: 'Test L4 (knee extension, patellar reflex), L5 (great toe extension), S1 (ankle plantarflexion, Achilles reflex)' },
          { order: 6, action: 'Straight leg raise', detail: 'Passively raise leg with knee extended. Positive if radiating leg pain 30-70°. Cross-over SLR (raising unaffected leg causes pain in affected leg) = highly specific for herniation.', tip: 'Note angle at which pain starts and character of pain' },
        ],
        landmarks: [
          { name: 'Spinous processes', howToFind: 'Palpate midline, identify L4 at level of iliac crests', significance: 'Tenderness, step-off' },
          { name: 'Paraspinal muscles', howToFind: 'Lateral to spinous processes', significance: 'Spasm, tenderness' },
          { name: 'Sciatic notch', howToFind: 'Midpoint buttock', significance: 'Tenderness suggests piriformis or sciatic irritation' },
        ],
        patientInstructions: 'Bend forward as far as you can. Let me know if you have pain or numbness going down your leg.',
        examinerPosition: 'Behind patient for standing exam, beside for supine',
        commonErrors: ['Not doing complete neuro exam in radiculopathy', 'Missing red flags in history', 'Confusing SLR interpretation (must be radiating leg pain, not back pain)'],
      },
      normalFinding: {
        description: 'Normal spinal curves. Full ROM in all planes without pain. No paraspinal spasm. Strength 5/5 in lower extremities. Reflexes 2+ and symmetric. SLR negative bilaterally.',
        variations: ['Mild loss of lordosis with age', 'Some loss of flexion with age'],
        ageConsiderations: 'Elderly have reduced flexibility. Degenerative changes common on imaging but often asymptomatic.',
        documentationExample: 'Lumbar spine: Normal curvature. Full ROM. No tenderness. SLR negative bilaterally. Neuro exam normal.',
      },
      abnormalFindings: [
        {
          name: 'Lumbar Disc Herniation with Radiculopathy',
          description: 'Disc protrusion compressing nerve root causing radiating leg pain',
          appearance: 'List away from affected side. Limited flexion. Positive SLR (or cross-over SLR). Dermatomal sensory changes. Weakness and reflex changes at specific root level.',
          mechanism: 'Disc nucleus pulposus herniates through annulus, compressing nerve root. Most common at L4-5 and L5-S1.',
          associatedConditions: ['Degenerative disc disease', 'Spinal stenosis'],
          severity: 'moderate',
          urgency: 'soon',
          nextSteps: ['Conservative management first: NSAIDs, PT, activity modification', 'MRI if symptoms persist >6 weeks or progressive deficit', 'Urgent referral if cauda equina syndrome suspected'],
          differentialDiagnosis: ['Spinal stenosis', 'Piriformis syndrome', 'Hip pathology', 'Peripheral neuropathy'],
          additionalTestsNeeded: ['MRI lumbar spine if conservative fails or red flags', 'EMG if diagnosis uncertain'],
          documentationExample: 'List to right. SLR positive at 40° on left. Decreased sensation left lateral foot. Left ankle dorsiflexion 4/5. Achilles reflex diminished left. Consistent with L5-S1 disc herniation, S1 radiculopathy.',
        },
        {
          name: 'Cauda Equina Syndrome',
          description: 'Compression of multiple nerve roots causing neurological emergency',
          appearance: 'Bilateral leg pain/weakness. Saddle anesthesia (perineal numbness). Bowel/bladder dysfunction (retention or incontinence). Decreased anal tone.',
          mechanism: 'Large central disc herniation or mass compressing cauda equina below L2.',
          associatedConditions: ['Large disc herniation', 'Tumor', 'Epidural abscess', 'Hematoma'],
          severity: 'critical',
          urgency: 'emergent',
          nextSteps: ['Immediate MRI', 'Emergent neurosurgical consultation', 'Surgical decompression within 24-48 hours for best outcomes'],
          differentialDiagnosis: ['Conus medullaris syndrome', 'Bilateral radiculopathy', 'Epidural abscess'],
          additionalTestsNeeded: ['Emergent MRI lumbar spine', 'Post-void residual if bladder symptoms'],
          documentationExample: 'RED FLAG: Saddle anesthesia present. Urinary retention. Bilateral leg weakness. Decreased anal tone. Cauda equina syndrome until proven otherwise - emergent MRI ordered.',
        },
      ],
      whatItAssesses: 'Spinal alignment, mobility, paraspinal structures, and lumbar nerve root function',
      anatomy: 'L1-L5 vertebrae, intervertebral discs, facet joints, paraspinal muscles, nerve roots (L1-S1 exit below same-numbered vertebra).',
      pathophysiology: 'Disc degeneration → herniation → nerve root compression → radiculopathy. Facet arthropathy causes localized pain. Spinal stenosis causes neurogenic claudication.',
      clinicalSignificance: 'Low back pain affects most adults. Differentiate mechanical from neurogenic. Identify red flags (cauda equina, infection, tumor, fracture). Most improves with conservative care.',
      pitfalls: ['Missing cauda equina syndrome', 'Not checking rectal tone when bladder symptoms present', 'Imaging for simple back pain (usually unnecessary <6 weeks)'],
      practiceTips: ['Always ask about bladder function, saddle numbness', 'SLR must produce RADIATING LEG PAIN to be positive', 'Match neurological findings to specific root level'],
    },
  ],

  specialTests: [
    {
      id: 'lachman-test',
      name: 'Lachman Test',
      alternateNames: ['Lachman maneuver'],
      system: 'musculoskeletal',
      purpose: 'Most sensitive test for ACL tear',
      indications: ['Knee injury with concern for ACL tear', 'Knee instability', 'Post-injury evaluation'],
      contraindications: ['Acute fracture', 'Extreme pain preventing relaxation'],
      procedure: {
        patientPosition: 'Supine, knee flexed 20-30 degrees (slight flexion)',
        examinerPosition: 'Standing beside patient, facing knee',
        steps: [
          { order: 1, action: 'Stabilize distal femur with one hand', detail: 'Hand on lateral thigh, fingers wrapped posteriorly' },
          { order: 2, action: 'Grasp proximal tibia with other hand', detail: 'Hand on medial proximal tibia, fingers wrapped posteriorly' },
          { order: 3, action: 'Apply anterior translation force to tibia', detail: 'Pull tibia forward relative to femur', tip: 'Patient must be relaxed - key to accuracy' },
          { order: 4, action: 'Assess degree of translation and endpoint quality', detail: 'Compare to contralateral side' },
        ],
        patientInstructions: 'Let your leg completely relax. This shouldn\'t hurt.',
        duration: '30 seconds',
      },
      interpretation: {
        positiveResult: 'Increased anterior tibial translation (>3mm compared to other side) with soft or absent endpoint',
        negativeResult: 'Minimal translation with firm endpoint',
        falsePositives: ['PCL tear (tibia starts posteriorly subluxed)', 'Generalized ligamentous laxity'],
        falseNegatives: ['Patient guarding/unable to relax', 'Locked bucket handle meniscal tear', 'Partial ACL tear'],
        clinicalContext: 'Positive Lachman with soft endpoint strongly suggests ACL tear. Combined with mechanism and effusion, high diagnostic accuracy.',
      },
      accuracy: {
        sensitivity: '85-95%',
        specificity: '94%',
        notes: 'Most sensitive clinical test for ACL tear. Superior to anterior drawer test.',
      },
      clinicalUtility: 'Primary test for ACL integrity. Can be performed acutely when swelling limits other tests. Guides need for MRI and orthopedic referral.',
      commonErrors: ['Knee at 90° (that\'s anterior drawer, less sensitive)', 'Not stabilizing femur', 'Patient not relaxed', 'Not comparing sides'],
      evidence: 'Named after John Lachman, described 1976. Extensively validated as most sensitive ACL test.',
    },
    {
      id: 'straight-leg-raise',
      name: 'Straight Leg Raise (SLR)',
      alternateNames: ['Lasègue test', 'SLR test'],
      system: 'musculoskeletal',
      purpose: 'Detect lumbar disc herniation causing nerve root compression',
      indications: ['Low back pain with leg symptoms', 'Suspected radiculopathy', 'Sciatica'],
      contraindications: ['Acute hip fracture', 'Recent hip surgery'],
      procedure: {
        patientPosition: 'Supine, legs extended',
        examinerPosition: 'Beside patient at level of legs',
        steps: [
          { order: 1, action: 'Lift patient\'s leg by heel with knee extended', detail: 'Keep leg straight, other leg flat' },
          { order: 2, action: 'Slowly elevate leg', detail: 'Raise to 70° or until pain' },
          { order: 3, action: 'Note angle at which pain occurs and location', detail: 'Key: must be RADIATING LEG PAIN below knee', tip: 'Back pain alone is not a positive test' },
          { order: 4, action: 'If positive, lower leg slightly and dorsiflex ankle', detail: 'Ankle dorsiflexion increases dural tension and should worsen symptoms' },
        ],
        patientInstructions: 'Keep your knee straight. Tell me where you feel pain as I lift your leg.',
        duration: '1 minute per leg',
      },
      interpretation: {
        positiveResult: 'Reproduction of radiating leg pain (not just back pain) at 30-70°. Pain below knee is most significant.',
        negativeResult: 'Hamstring tightness or back pain only. Pain >70° (hamstrings).',
        falsePositives: ['Hip pathology', 'Hamstring tightness', 'Meningeal irritation'],
        falseNegatives: ['Far lateral disc herniation', 'Upper lumbar levels (L1-3)', 'Large patient'],
        clinicalContext: 'Crossed SLR (raising unaffected leg causes pain in affected leg) is highly specific (~90%) for disc herniation.',
      },
      accuracy: {
        sensitivity: '91%',
        specificity: '26%',
        positiveLR: '1.2',
        negativeLR: '0.35',
        notes: 'High sensitivity, low specificity. Negative SLR helps rule out significant disc herniation.',
      },
      clinicalUtility: 'Screening test for disc herniation. Negative SLR makes significant herniation unlikely. Cross-over SLR is highly specific.',
      commonErrors: ['Calling back pain a positive test', 'Not noting angle of pain onset', 'Not testing cross-over SLR', 'Bending knee (invalidates test)'],
      evidence: 'Described by Lasègue in 1864. Extensively validated for lumbar radiculopathy.',
    },
  ],

  relatedSystems: [
    {
      relatedSystem: 'neurological',
      relationship: 'MSK exam requires neurological assessment of affected regions. Radiculopathy combines MSK and neuro findings.',
      whenToExamineTogether: 'Any spine complaint, suspected radiculopathy, trauma, weakness complaints',
      clinicalExample: 'Low back pain with leg numbness requires both lumbar spine MSK exam and lower extremity neurological exam.',
    },
    {
      relatedSystem: 'cardiovascular',
      relationship: 'Vascular assessment important in MSK trauma. Claudication can mimic neurogenic claudication.',
      whenToExamineTogether: 'Extremity trauma (check pulses), leg pain with walking, cold extremity',
      clinicalExample: 'Knee dislocation requires vascular assessment - popliteal artery injury is common.',
    },
  ],

  findingPatterns: [
    {
      name: 'ACL Tear Pattern',
      description: 'Classic constellation of findings after ACL injury',
      findings: [
        { component: 'History', finding: 'Twisting injury with "pop" heard', significance: 'Classic mechanism' },
        { component: 'Inspection', finding: 'Large effusion within hours', significance: 'Hemarthrosis from ACL tear' },
        { component: 'Lachman test', finding: 'Increased translation with soft endpoint', significance: 'Diagnostic of ACL tear' },
        { component: 'Pivot shift', finding: 'Positive (if can perform)', significance: 'Confirms rotational instability' },
      ],
      suggestsDiagnosis: ['ACL tear'],
      mechanism: 'Pivoting on planted foot creates rotational and valgus stress that exceeds ACL strength.',
      clinicalScenario: 'Soccer player lands from header, feels pop in knee, immediate swelling, difficulty walking.',
      keyLearningPoint: 'Hemarthrosis after knee trauma = assume ACL tear until proven otherwise. 70% of traumatic hemarthroses are ACL tears.',
    },
    {
      name: 'Lumbar Radiculopathy Pattern',
      description: 'Findings consistent with nerve root compression',
      findings: [
        { component: 'History', finding: 'Leg pain worse than back pain', significance: 'Radicular pattern' },
        { component: 'SLR', finding: 'Positive at 30-70°', significance: 'Dural tension sign' },
        { component: 'Neurological', finding: 'Dermatomal sensory loss', significance: 'Localizes nerve root' },
        { component: 'Neurological', finding: 'Weakness in myotomal pattern', significance: 'Confirms motor involvement' },
        { component: 'Reflexes', finding: 'Diminished or absent at affected level', significance: 'Objective finding of radiculopathy' },
      ],
      suggestsDiagnosis: ['Lumbar disc herniation', 'Lumbar radiculopathy'],
      mechanism: 'Disc herniation compresses nerve root in lateral recess or foramen, causing pain, sensory loss, and weakness in distribution of that root.',
      clinicalScenario: 'Patient with low back and leg pain, positive SLR at 40°, numbness lateral foot, weak ankle dorsiflexion, diminished ankle jerk = S1 radiculopathy.',
      keyLearningPoint: 'Match findings to specific root: L4 (anterior thigh, knee extension, patellar reflex), L5 (lateral leg/dorsal foot, toe extension), S1 (posterior leg/lateral foot, plantar flexion, Achilles reflex).',
    },
  ],

  redFlags: [
    {
      finding: 'Cauda equina syndrome (saddle anesthesia, bladder dysfunction, bilateral leg weakness)',
      concernFor: 'Cauda equina compression requiring emergent surgery',
      mechanism: 'Large central disc herniation or mass compresses multiple nerve roots',
      immediateActions: ['Emergent MRI lumbar spine', 'Neurosurgical consultation', 'Foley catheter for retention', 'Surgical decompression within 24-48 hours'],
      neverMiss: true,
    },
    {
      finding: 'Compartment syndrome (severe pain, pain with passive stretch, tense compartment)',
      concernFor: 'Elevated compartment pressure causing ischemia',
      mechanism: 'Trauma or reperfusion causes swelling within fascial compartment, compromising blood flow',
      immediateActions: ['Measure compartment pressures', 'Emergent fasciotomy if pressure >30 mmHg or within 30 of diastolic', 'Remove constrictive dressings'],
      neverMiss: true,
    },
    {
      finding: 'Septic joint (hot, red, swollen joint with fever)',
      concernFor: 'Bacterial infection of joint requiring urgent drainage',
      mechanism: 'Hematogenous spread or direct inoculation leads to bacterial proliferation in synovial fluid',
      immediateActions: ['Joint aspiration (do not delay for imaging)', 'Synovial fluid analysis (cell count, gram stain, culture)', 'IV antibiotics after aspiration', 'Orthopedic consultation for drainage'],
      neverMiss: true,
    },
  ],

  commonMistakes: [
    {
      mistake: 'Not testing Lachman properly (knee at 90° instead of 20-30°)',
      consequence: 'Missing ACL tear - anterior drawer at 90° is less sensitive',
      howToAvoid: 'Learn proper Lachman technique with knee slightly flexed',
      correctTechnique: 'Flex knee 20-30°, stabilize femur, translate tibia anteriorly',
    },
    {
      mistake: 'Calling SLR positive when only back pain is produced',
      consequence: 'Overcalling disc herniation, unnecessary imaging',
      howToAvoid: 'SLR is positive ONLY if it reproduces RADIATING LEG PAIN',
      correctTechnique: 'Note location and character of pain - must radiate below knee',
    },
    {
      mistake: 'Missing compartment syndrome by waiting for pulselessness',
      consequence: 'Irreversible muscle necrosis - pulselessness is late finding',
      howToAvoid: 'Pain out of proportion and pain with passive stretch are early signs',
      correctTechnique: 'Measure compartment pressures when suspected - don\'t wait for pulselessness',
    },
  ],

  clinicalPearls: [
    'Pain out of proportion after fracture or crush injury = compartment syndrome until proven otherwise.',
    'Hot, swollen joint + fever = septic joint until proven otherwise. Aspirate BEFORE antibiotics.',
    'Hemarthrosis after knee trauma = 70% chance of ACL tear.',
    'In radiculopathy, leg pain is usually worse than back pain. Back pain worse than leg pain = think mechanical.',
    'Negative SLR has high negative predictive value - makes significant disc herniation unlikely.',
    'Frozen shoulder: loss of PASSIVE external rotation is the earliest and most sensitive sign.',
    'Rotator cuff weakness may be masked by pain inhibition - passive ROM is key.',
  ],
};


// ============================================
// Exam Database Collection
// ============================================

export const PHYSICAL_EXAMS: Record<ExamSystemId, SystemExamEducation> = {
  cardiovascular: CARDIOVASCULAR_EXAM,
  abdominal: ABDOMINAL_EXAM,
  neurological: NEUROLOGICAL_EXAM,
  respiratory: RESPIRATORY_EXAM,
  heent: HEENT_EXAM,
  musculoskeletal: MUSCULOSKELETAL_EXAM,
  // Placeholder entries for future expansion
  skin: {} as SystemExamEducation,
  general: {} as SystemExamEducation,
  neck: {} as SystemExamEducation,
  psychiatric: {} as SystemExamEducation,
};

// ============================================
// Helper Functions
// ============================================

export function getPhysicalExam(systemId: ExamSystemId): SystemExamEducation | undefined {
  const exam = PHYSICAL_EXAMS[systemId];
  // Return undefined if placeholder (empty object)
  if (exam && exam.id) {
    return exam;
  }
  return undefined;
}

export function getAllPhysicalExams(): SystemExamEducation[] {
  return Object.values(PHYSICAL_EXAMS).filter(exam => exam.id);
}

export function getAvailableExamSystems(): ExamSystemId[] {
  return Object.entries(PHYSICAL_EXAMS)
    .filter(([_, exam]) => exam.id)
    .map(([id]) => id as ExamSystemId);
}

export function searchSpecialTests(query: string): SystemExamEducation['specialTests'] {
  const results: SystemExamEducation['specialTests'] = [];
  const queryLower = query.toLowerCase();

  for (const exam of getAllPhysicalExams()) {
    for (const test of exam.specialTests) {
      if (
        test.name.toLowerCase().includes(queryLower) ||
        test.alternateNames.some(n => n.toLowerCase().includes(queryLower)) ||
        test.purpose.toLowerCase().includes(queryLower)
      ) {
        results.push(test);
      }
    }
  }

  return results;
}

export function getRedFlagsBySystem(systemId: ExamSystemId): SystemExamEducation['redFlags'] {
  const exam = getPhysicalExam(systemId);
  return exam?.redFlags || [];
}

export function getAllRedFlags(): Array<SystemExamEducation['redFlags'][0] & { system: ExamSystemId }> {
  const allFlags: Array<SystemExamEducation['redFlags'][0] & { system: ExamSystemId }> = [];

  for (const exam of getAllPhysicalExams()) {
    for (const flag of exam.redFlags) {
      allFlags.push({ ...flag, system: exam.id });
    }
  }

  return allFlags;
}
