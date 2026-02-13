/**
 * Headache Algorithm
 * Based on ICHD-3 (International Classification of Headache Disorders)
 *
 * RED FLAGS (SNOOP4 mnemonic):
 * S - Systemic symptoms (fever, weight loss) or Secondary risk factors (HIV, cancer)
 * N - Neurologic symptoms or abnormal signs
 * O - Onset: sudden, abrupt, or thunderclap
 * O - Older: new onset/progressive after age 50
 * P - Pattern change: positional, precipitated by sneezing/coughing, Valsalva
 * P - Papilledema
 * 4 - Posterior circulation
 */

export interface HeadacheAssessment {
  painLocation: 'unilateral' | 'bilateral' | 'periorbital' | 'temporal' | 'occipital' | 'diffuse';
  painQuality: 'throbbing' | 'stabbing' | 'pressure' | 'explosive' | 'burning' | 'aching';
  painSeverity: number; // 1-10 scale
  painDuration: string; // "minutes", "hours", "days"
  painOnset: 'gradual' | 'sudden' | 'thunderclap' | 'wakingFromSleep';
  painFrequency: 'single' | 'episodic' | 'chronicDaily';
  associatedSymptoms: HeadacheAssociatedSymptoms;
  relievingFactors: string[];
  exacerbatingFactors: string[];
  aura: boolean;
  auraDescription?: string;
  riskFactors: HeadacheRiskFactors;
  redFlags: string[];
}

export interface HeadacheAssociatedSymptoms {
  nausea: boolean;
  vomiting: boolean;
  photophobia: boolean;
  phonophobia: boolean;
  osmophobia: boolean;
  visualChanges: boolean;
  visualChangesDescription?: string;
  neckStiffness: boolean;
  fever: boolean;
  focalNeuroDeficit: boolean;
  seizure: boolean;
  alteredMentalStatus: boolean;
  lacrimation: boolean;
  nasalCongestion: boolean;
  ptosis: boolean;
  miosis: boolean;
  eyelidEdema: boolean;
  scalpTenderness: boolean;
  jawClaudication: boolean;
  weightLoss?: boolean;
}

export interface HeadacheRiskFactors {
  age: number;
  hypertension: boolean;
  anticoagulation: boolean;
  cancerHistory: boolean;
  hiv: boolean;
  recentHeadTrauma: boolean;
  pregnancy: boolean;
  postpartum: boolean;
  familyHistoryMigraine: boolean;
  familyHistoryAneurysm: boolean;
  oralContraceptives: boolean;
  smoking: boolean;
  cocaineUse: boolean;
}

export interface HeadacheResult {
  urgency: 'emergent' | 'urgent' | 'nonUrgent';
  likelyEtiology: string[];
  recommendations: string[];
  testsToConsider: string[];
  specialtyConsult: string[];
  warning: string;
}

/**
 * Main headache assessment algorithm
 */
export function assessHeadache(assessment: HeadacheAssessment): HeadacheResult {
  // FIRST: Check RED FLAGS (SNOOP4)
  const redFlagCheck = evaluateRedFlags(assessment);
  if (redFlagCheck !== null) {
    return redFlagCheck;
  }

  // THUNDERCLAP HEADACHE - SAH until proven otherwise
  if (assessment.painOnset === 'thunderclap' ||
      (assessment.painOnset === 'sudden' && assessment.painSeverity >= 8)) {
    return {
      urgency: 'emergent',
      likelyEtiology: ['Subarachnoid Hemorrhage', 'Aneurysm Rupture', 'Arterial Dissection', 'Pituitary Apoplexy', 'Reversible Cerebral Vasoconstriction Syndrome'],
      recommendations: [
        'IMMEDIATE Emergency Department evaluation via 911',
        'DO NOT delay - this is a true emergency',
        'Keep patient calm, minimize activity',
        'Do NOT give anything by mouth',
        'Neurosurgical intervention may be time-sensitive'
      ],
      testsToConsider: [
        'Non-contrast Head CT (within 6 hours sensitivity >98%)',
        'Lumbar Puncture if CT negative (xanthochromia)',
        'CT Angiography Head/Neck',
        'MRI/MRA if CT/LP negative but high suspicion',
        'CBC, CMP, Coagulation studies',
        'Type and Screen'
      ],
      specialtyConsult: ['Neurology', 'Neurosurgery', 'Neurocritical Care'],
      warning: 'Thunderclap headache is SAH until proven otherwise. Normal CT does NOT rule out SAH after 6 hours.'
    };
  }

  // GIANT CELL ARTERITIS - Visual loss is irreversible
  if (assessment.riskFactors.age >= 50 &&
      (assessment.associatedSymptoms.scalpTenderness ||
       assessment.associatedSymptoms.jawClaudication ||
       assessment.painLocation === 'temporal')) {
    return {
      urgency: 'emergent',
      likelyEtiology: ['Giant Cell Arteritis (Temporal Arteritis)', 'Polymyalgia Rheumatica'],
      recommendations: [
        'EMERGENT evaluation (within 24-48 hours)',
        'HIGH-dose steroids should NOT be delayed for testing if suspicion high',
        'Permanent vision loss can occur without treatment',
        'Ophthalmology evaluation if visual symptoms'
      ],
      testsToConsider: [
        'ESR (usually >50, often >100)',
        'CRP (more sensitive than ESR)',
        'Platelet count (often elevated)',
        'Temporal artery biopsy (after starting steroids)',
        'Consider TAB even if ESR normal if clinical suspicion high'
      ],
      specialtyConsult: ['Rheumatology', 'Ophthalmology (if visual changes)'],
      warning: 'Do NOT delay steroids for biopsy. Vision loss is permanent. If high suspicion, start prednisone 40-60mg daily immediately.'
    };
  }

  // MIGRANE with AURA
  if (assessment.aura && assessment.painLocation === 'unilateral') {
    return {
      urgency: 'nonUrgent',
      likelyEtiology: ['Migraine with Aura', 'Complex Migraine'],
      recommendations: [
        'Medical evaluation appropriate but not emergent',
        'Keep headache diary',
        'Identify and avoid triggers',
        'Consider prophylactic therapy if frequent',
        'Abortive therapy: NSAIDs, triptans, antiemetics'
      ],
      testsToConsider: [
        'Usually no imaging needed if typical presentation',
        'Neuroimaging if atypical features, change in pattern, or red flags',
        'MRI if focal neurologic deficits',
        'EEG if seizure-like activity'
      ],
      specialtyConsult: ['Neurology', 'Primary Care'],
      warning: 'Aura lasting >60 minutes or with motor weakness warrants urgent evaluation. Pregnancy caution with triptans.'
    };
  }

  // MIGRANE without AURA
  if (assessment.painLocation === 'unilateral' &&
      assessment.painQuality === 'throbbing' &&
      (assessment.associatedSymptoms.nausea ||
       assessment.associatedSymptoms.photophobia ||
       assessment.associatedSymptoms.phonophobia)) {
    return {
      urgency: 'nonUrgent',
      likelyEtiology: ['Migraine without Aura', 'Tension-type Headache'],
      recommendations: [
        'Outpatient management appropriate',
        'Identify triggers (stress, sleep deprivation, foods, hormonal)',
        'Acute treatment: NSAIDs, triptans, combination agents',
        'Rescue medications for refractory headaches',
        'Consider prophylaxis if >4 headaches/month'
      ],
      testsToConsider: [
        'No imaging required for typical migraine',
        'Imaging if change in pattern or new red flags develop',
        'CBC, CMP if starting preventive medications'
      ],
      specialtyConsult: ['Neurology', 'Primary Care'],
      warning: 'Return immediately if headache pattern changes, becomes sudden/thunderclap, or neurological deficits develop.'
    };
  }

  // CLUSTER HEADACHE
  if (assessment.painLocation === 'periorbital' &&
      (assessment.associatedSymptoms.lacrimation ||
       assessment.associatedSymptoms.nasalCongestion ||
       assessment.associatedSymptoms.ptosis ||
       assessment.associatedSymptoms.miosis) &&
      assessment.painQuality === 'stabbing' &&
      (assessment.painDuration.includes('minutes') || assessment.painOnset === 'wakingFromSleep')) {
    return {
      urgency: 'nonUrgent',
      likelyEtiology: ['Cluster Headache', 'Trigeminal Autonomic Cephalalgia'],
      recommendations: [
        'Neurology referral recommended',
        'Acute treatment: High-flow oxygen (100%, 12-15 L/min)',
        'Sumatriptan SC or nasal',
        'Avoid alcohol and tobacco during cluster period',
        'Consider preventive therapy (verapamil)'
      ],
      testsToConsider: [
        'Neuroimaging to rule out secondary causes',
        'MRI brain with pituitary views',
        'Consider MR Angiography',
        'CBC, CMP for medication monitoring'
      ],
      specialtyConsult: ['Neurology (Headache Specialist)'],
      warning: 'Cluster headaches are excruciating but not life-threatening. Oxygen is highly effective acute treatment.'
    };
  }

  // TENSION HEADACHE
  if (assessment.painLocation === 'bilateral' &&
      assessment.painQuality === 'pressure' &&
      !assessment.associatedSymptoms.nausea &&
      !assessment.associatedSymptoms.photophobia &&
      assessment.painSeverity <= 6) {
    return {
      urgency: 'nonUrgent',
      likelyEtiology: ['Tension-Type Headache', 'Cervicogenic Headache'],
      recommendations: [
        'Outpatient management appropriate',
        'Stress management, relaxation techniques',
        'Regular sleep schedule, hydration',
        'NSAIDs or acetaminophen for acute treatment',
        'Physical therapy, massage may help',
        'Consider trigger point injections'
      ],
      testsToConsider: [
        'Usually no imaging needed',
        'Cervical spine imaging if neck pain predominates',
        'Evaluation for sleep apnea if chronic'
      ],
      specialtyConsult: ['Primary Care', 'Physical Therapy', 'Pain Management'],
      warning: 'Recurring headaches that interfere with daily life warrant neurology evaluation.'
    };
  }

  // SINUSITIS
  if (assessment.painLocation === 'periorbital' || assessment.painLocation === 'temporal') {
    if (assessment.associatedSymptoms.fever &&
        (assessment.associatedSymptoms.nasalCongestion || assessment.exacerbatingFactors.includes('bending forward'))) {
      return {
        urgency: 'nonUrgent',
        likelyEtiology: ['Acute Sinusitis', 'Chronic Sinusitis'],
        recommendations: [
          'Outpatient evaluation appropriate',
          'Saline nasal irrigation',
          'Decongestants may provide symptomatic relief',
          'Antibiotics if bacterial features present',
          'ENT referral if chronic (>12 weeks) or recurrent'
        ],
        testsToConsider: [
          'CT Sinuses if diagnosis unclear or complications suspected',
          'Nasal endoscopy if chronic',
          'Culture if recurrent'
        ],
        specialtyConsult: ['Primary Care', 'ENT (Otolaryngology)'],
        warning: 'Eye swelling, visual changes, or altered mental status suggest orbital/cranial complication - EMERGENT.'
      };
    }
  }

  // SPONTANEOUS INTRACRANIAL HYPOTENSION
  if (assessment.painOnset === 'wakingFromSleep' &&
      assessment.exacerbatingFactors.includes('upright') &&
      assessment.relievingFactors.includes('supine')) {
    return {
      urgency: 'urgent',
      likelyEtiology: ['Spontaneous Intracranial Hypotension', 'CSF Leak', 'Post-LP Headache'],
      recommendations: [
        'Urgent neurology/neurosurgery evaluation',
        'Bed rest and hydration',
        'Caffeine may help',
        'Epidural blood patch may be required',
        'Identify site of leak if possible'
      ],
      testsToConsider: [
        'MRI Brain with contrast (pachymeningeal enhancement)',
        'MRI Spine',
        'CT Myelography',
        'Radionuclide Cisternography'
      ],
      specialtyConsult: ['Neurology', 'Neurosurgery'],
      warning: 'Untreated can lead to subdural hematoma. Seek evaluation.'
    };
  }

  // MEDICATION OVERUSE HEADACHE
  if (assessment.painFrequency === 'chronicDaily') {
    return {
      urgency: 'nonUrgent',
      likelyEtiology: ['Medication Overuse Headache', 'Chronic Migraine', 'New Daily Persistent Headache'],
      recommendations: [
        'Neurology referral recommended',
        'Discontinue overused medications',
        'Bridge therapy during withdrawal',
        'Consider preventive medications',
        'Keep detailed headache diary'
      ],
      testsToConsider: [
        'MRI Brain if not previously done',
        'CBC, CMP, LFTs if on multiple medications',
        'Review all medications'
      ],
      specialtyConsult: ['Neurology (Headache Specialist)'],
      warning: 'Rebound from analgesic overuse (>10-15 days/month) must be addressed. Withdrawal may temporarily worsen headaches.'
    };
  }

  // CERVICOGENIC HEADACHE
  if (assessment.painLocation === 'occipital' &&
      assessment.exacerbatingFactors.includes('neck movement')) {
    return {
      urgency: 'nonUrgent',
      likelyEtiology: ['Cervicogenic Headache', 'Occipital Neuralgia'],
      recommendations: [
        'Outpatient evaluation appropriate',
        'Physical therapy for cervical spine',
        'Posture correction, ergonomic assessment',
        'NSAIDs',
        'Consider occipital nerve block'
      ],
      testsToConsider: [
        'Cervical spine imaging (X-ray, MRI)',
        'Diagnostic nerve block',
        'EMG if radiculopathy suspected'
      ],
      specialtyConsult: ['Neurology', 'Pain Management', 'Physical Therapy'],
      warning: 'Red flags must still be ruled out.'
    };
  }

  // Post-Traumatic Headache
  if (assessment.riskFactors.recentHeadTrauma) {
    return {
      urgency: 'urgent',
      likelyEtiology: ['Post-Traumatic Headache', 'Concussion', 'Intracranial Hemorrhage', 'Post-Concussive Syndrome'],
      recommendations: [
        'Urgent medical evaluation',
        'Neuroimaging usually indicated',
        'Cognitive and physical rest',
        'Gradual return to activity protocol',
        'Neurocognitive testing'
      ],
      testsToConsider: [
        'Non-contrast Head CT (if within 24-48 hours or red flags)',
        'MRI if persistent symptoms',
        'Neuropsychological testing',
        'Vestibular/ocular assessment'
      ],
      specialtyConsult: ['Neurology', 'Sports Medicine', 'Neuropsychology'],
      warning: 'Worsening symptoms, vomiting, altered mental status, or focal deficits require IMMEDIATE evaluation for bleed.'
    };
  }

  // Pregnant patient - special considerations
  if (assessment.riskFactors.pregnancy) {
    return {
      urgency: 'urgent',
      likelyEtiology: ['Preeclampsia/Eclampsia', 'Pregnancy-Associated Migraine', 'Cerebral Venous Sinus Thrombosis', 'Pituitary Apoplexy', 'Post-Dural Puncture Headache'],
      recommendations: [
        'Urgent OB/GYN evaluation',
        'Check blood pressure',
        'Rule out preeclampsia',
        'Neuroimaging if any red flags or atypical features',
        'Avoid teratogenic medications'
      ],
      testsToConsider: [
        'Blood pressure monitoring',
        'Labs: CBC, CMP, Uric Acid, LFTs, LDH',
        'Urinalysis (protein)',
        'Non-contrast Head CT',
        'MR Venography',
        'MRI Brain'
      ],
      specialtyConsult: ['Obstetrics', 'Maternal-Fetal Medicine', 'Neurology'],
      warning: 'Pregnant women with headache need blood pressure checked immediately. Preeclampsia can develop postpartum.'
    };
  }

  // Postpartum - special considerations
  if (assessment.riskFactors.postpartum) {
    return {
      urgency: 'urgent',
      likelyEtiology: ['Post-Dural Puncture Headache (if epidural)', 'Preeclampsia', 'CVST', 'Pituitary Apoplexy (Sheehan syndrome)', 'Migraine'],
      recommendations: [
        'Urgent medical evaluation',
        'Multiple serious etiologies possible',
        'Check blood pressure',
        'Neuroimaging usually indicated'
      ],
      testsToConsider: [
        'Blood pressure',
        'Labs: CBC, CMP, LFTs',
        'Non-contrast Head CT',
        'MR Venography',
        'MRI Brain with pituitary views',
        'Coagulation studies'
      ],
      specialtyConsult: ['Neurology', 'Obstetrics'],
      warning: 'Postpartum headache has multiple serious causes. Prompt evaluation required.'
    };
  }

  // Default - needs evaluation
  return {
    urgency: 'urgent',
    likelyEtiology: ['Undifferentiated Headache'],
    recommendations: [
      'Medical evaluation required',
      'Document pattern, triggers, associated symptoms',
      'Keep headache diary',
      'Seek immediate care if any red flags develop'
    ],
    testsToConsider: [
      'CBC, CMP',
      'ESR/CRP if age >50',
      'Neuroimaging based on clinical suspicion'
    ],
    specialtyConsult: ['Primary Care', 'Neurology'],
    warning: 'Monitor for development of red flag symptoms.'
  };
}

/**
 * Evaluate red flags using SNOOP4 mnemonic
 */
function evaluateRedFlags(assessment: HeadacheAssessment): HeadacheResult | null {
  const redFlags: string[] = [];

  // S - Systemic symptoms & Secondary risk factors
  if (assessment.associatedSymptoms.fever) {
    redFlags.push('Fever - meningitis, abscess, systemic infection');
  }
  if (assessment.riskFactors.cancerHistory) {
    redFlags.push('Cancer history - metastasis, meningeal carcinomatosis');
  }
  if (assessment.riskFactors.hiv) {
    redFlags.push('HIV - opportunistic infection, lymphoma');
  }
  if (assessment.associatedSymptoms.weightLoss !== undefined) {
    redFlags.push('Weight loss - malignancy, systemic illness');
  }

  // N - Neurologic symptoms
  if (assessment.associatedSymptoms.focalNeuroDeficit) {
    redFlags.push('Focal neurologic deficit - stroke, mass lesion, hemorrhage');
  }
  if (assessment.associatedSymptoms.alteredMentalStatus) {
    redFlags.push('Altered mental status - encephalitis, metabolic, ICP');
  }
  if (assessment.associatedSymptoms.visualChanges) {
    redFlags.push('Visual changes - GCA, pituitary, optic pathology, increased ICP');
  }
  if (assessment.associatedSymptoms.seizure) {
    redFlags.push('Seizure - mass lesion, vascular, infection');
  }

  // O - Onset
  if (assessment.painOnset === 'sudden' || assessment.painOnset === 'thunderclap') {
    redFlags.push('Sudden/thunderclap onset - SAH, arterial dissection, pituitary apoplexy');
  }

  // O - Older
  if (assessment.riskFactors.age >= 50 && assessment.painFrequency === 'single') {
    redFlags.push('New onset > age 50 - GCA, mass lesion, secondary headache');
  }

  // P - Pattern change
  if (assessment.exacerbatingFactors.includes('coughing') ||
      assessment.exacerbatingFactors.includes('sneezing') ||
      assessment.exacerbatingFactors.includes('valsalva')) {
    redFlags.push('Valsalva-induced - Chiari, posterior fossa lesion, SAH');
  }
  if (assessment.exacerbatingFactors.includes('position change') ||
      assessment.exacerbatingFactors.includes('upright') ||
      assessment.exacerbatingFactors.includes('supine')) {
    redFlags.push('Positional - SIH, posterior fossa lesion, sinus thrombosis');
  }

  // P - Papilledema (inferred from visual changes)
  if (assessment.associatedSymptoms.visualChanges &&
      assessment.painDuration.includes('weeks') &&
      assessment.painDuration.includes('months')) {
    redFlags.push('Chronic headache with visual changes - increased ICP, papilledema, tumor');
  }

  // 4 - Posterior circulation
  if (assessment.painLocation === 'occipital' && assessment.painOnset === 'sudden') {
    redFlags.push('Sudden occipital pain - vertebral artery dissection, SAH');
  }

  // Additional red flags
  if (assessment.associatedSymptoms.neckStiffness && assessment.associatedSymptoms.fever) {
    redFlags.push('Meningeal signs - meningitis, SAH');
  }

  if (assessment.riskFactors.anticoagulation && assessment.painOnset === 'sudden') {
    redFlags.push('Anticoagulation + sudden headache - intracranial hemorrhage');
  }

  if (assessment.riskFactors.recentHeadTrauma && assessment.painOnset === 'sudden') {
    redFlags.push('Recent trauma + sudden headache - epidural/subdural hemorrhage');
  }

  // If any red flags present, emergent evaluation needed
  if (redFlags.length > 0) {
    return {
      urgency: 'emergent',
      likelyEtiology: ['Secondary Headache - Multiple Possible Etiologies'],
      recommendations: [
        'IMMEDIATE Emergency Department evaluation',
        'Neuroimaging required',
        'Do NOT delay - serious causes must be ruled out'
      ],
      testsToConsider: [
        'Non-contrast Head CT',
        'CT Angiography',
        'MRI Brain with and without contrast',
        'MR Venography',
        'CBC, CMP, ESR, CRP',
        'Lumbar Puncture if infection or SAH suspected'
      ],
      specialtyConsult: ['Neurology', 'Neurosurgery', 'Infectious Disease (if meningitis)'],
      warning: `RED FLAGS PRESENT: ${redFlags.join('; ')}`
    };
  }

  return null;
}

/**
 * SNOOP4 Red Flag Checklist
 */
export const HEADACHE_RED_FLAGS = {
  systemic: {
    flags: [
      'Fever, chills',
      'Weight loss',
      'Night sweats',
      'HIV/AIDS',
      'Cancer history',
      'Immunosuppression'
    ],
    concerns: ['Meningitis', 'Encephalitis', 'Brain abscess', 'Metastasis', 'Meningeal carcinomatosis']
  },
  neurologic: {
    flags: [
      'Focal weakness',
      'Sensory changes',
      'Visual field deficits',
      'Diplopia',
      'Dysarthria',
      'Ataxia',
      'Altered mental status',
      'Seizure',
      'Papilledema'
    ],
    concerns: ['Stroke', 'Tumor', 'Abscess', 'Hemorrhage', 'Increased ICP']
  },
  onset: {
    flags: [
      'Thunderclap (seconds)',
      'Sudden (minutes)',
      'Waking from sleep',
      'Exertional'
    ],
    concerns: ['SAH', 'Arterial dissection', 'Pituitary apoplexy', 'Colloid cyst']
  },
  older: {
    flags: [
      'New onset after age 50',
      'Progressive pattern'
    ],
    concerns: ['GCA', 'Mass lesion', 'Secondary headache']
  },
  pattern: {
    flags: [
      'Positional changes',
      'Valsalva-induced (cough, sneeze)',
      'Worse with bending',
      'Morning worsening',
      'Progressive over weeks/months'
    ],
    concerns: ['Increased ICP', 'Chiari malformation', 'Posterior fossa lesion', 'SIH', 'Sinus thrombosis']
  },
  posterior: {
    flags: [
      'Occipital location',
      'Neck pain',
      'Posterior circulation symptoms'
    ],
    concerns: ['Vertebral dissection', 'Chiari', 'Posterior fossa tumor', 'SAH']
  }
};

/**
 * Primary Headache Diagnostic Criteria Summary
 */
export const PRIMARY_HEADACHE_CRITERIA = {
  migraine: {
    location: 'Unilateral (bilateral in children)',
    quality: 'Throbbing/pulsating',
    severity: 'Moderate to severe',
    associated: ['Nausea/vomiting', 'Photophobia + phonophobia'],
    duration: '4-72 hours (untreated)',
    aggravation: 'Routine physical activity'
  },
  tension: {
    location: 'Bilateral, band-like',
    quality: 'Pressing/tightening (non-pulsating)',
    severity: 'Mild to moderate',
    associated: ['No nausea/vomiting', 'No more than one of photophobia/phonophobia'],
    duration: '30 minutes to 7 days',
    aggravation: 'Neither aggravated nor routine activity'
  },
  cluster: {
    location: 'Unilateral, periorbital/temporal',
    quality: 'Severe, sharp, boring',
    severity: 'Very severe',
    associated: ['Lacrimation', 'Nasal congestion', 'Ptosis', 'Miosis', 'Eyelid edema', 'Restlessness'],
    duration: '15-180 minutes',
    frequency: 'Daily to every other day for weeks-months (cluster period)'
  }
};
