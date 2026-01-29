/**
 * Headache Evaluation - Clinical Educational Content
 *
 * Comprehensive headache assessment including primary headache disorders,
 * secondary causes, and recognition of red flags requiring urgent evaluation.
 */

import { EducationalContent } from '../../types';

export const headacheEvaluation: EducationalContent = {
  id: 'clinical-headache-evaluation',
  type: 'concept',
  name: 'Headache Evaluation',
  alternateNames: ['Cephalgia Assessment', 'Headache Diagnosis', 'Headache Workup'],

  levels: {
    1: {
      level: 1,
      summary: 'Headaches are very common and usually not dangerous, but certain warning signs mean you should see a doctor right away.',
      explanation: `Headaches are one of the most common health complaints. Most headaches are not serious, but some can be warning signs of dangerous problems.

**Types of Headaches:**

**1. Tension Headaches (Most Common)**
- Feel like a tight band around your head
- Mild to moderate pain on both sides
- Often related to stress, poor posture, or lack of sleep
- Usually get better with rest and over-the-counter pain medicine

**2. Migraines**
- Often on one side of the head
- Throbbing or pounding pain
- Can be severe
- May have warning signs called "aura" (seeing lights or spots)
- Often causes nausea, sensitivity to light and sound
- Can last hours to days

**3. Cluster Headaches**
- Severe pain around one eye
- Eye may water and nose may run on that side
- Happen in "clusters" - many headaches over weeks, then none for months
- More common in men

**When to Worry - Red Flags:**

**See a Doctor RIGHT AWAY if you have:**

1. **"Thunderclap" headache**
   - Worst headache of your life
   - Comes on suddenly like a thunderclap
   - Could be bleeding in the brain

2. **Headache with fever and stiff neck**
   - Could be meningitis (infection around brain)
   - Especially if you cannot touch your chin to your chest

3. **Headache with confusion or weakness**
   - Could be stroke or brain problem
   - Especially if face droops or arm is weak

4. **Headache after head injury**
   - Could be bleeding inside the skull
   - Especially if you lost consciousness

5. **New headache if you're over 50**
   - Could be giant cell arteritis (blood vessel inflammation)
   - Could be tumor or other serious cause

6. **Headache that wakes you from sleep**
   - Could be increased pressure in brain
   - Needs evaluation

7. **Headache that's getting worse over time**
   - Normal headaches don't keep getting worse
   - Needs investigation

**What You Can Do:**
- Keep a headache diary (when, how long, what helps)
- Get enough sleep
- Stay hydrated
- Manage stress
- Know your triggers (certain foods, weather, hormones)

Most headaches are not emergencies, but trust your instincts - if something feels very wrong, seek medical care.`,
      keyTerms: [
        { term: 'migraine', definition: 'A type of headache often with throbbing pain, nausea, and sensitivity to light' },
        { term: 'aura', definition: 'Warning signs like seeing spots or zigzag lines before a migraine' },
        { term: 'tension headache', definition: 'The most common headache type, feeling like pressure around the head' },
        { term: 'red flag', definition: 'A warning sign that suggests a headache might be serious' },
        { term: 'thunderclap headache', definition: 'A sudden severe headache that is a medical emergency' },
      ],
      analogies: [
        'A tension headache feels like wearing a hat that is too tight.',
        'A migraine is like a storm in your head - it builds up and can be overwhelming.',
        'Red flags in headaches are like warning lights on a car dashboard - they mean stop and get checked.',
      ],
      examples: [
        'A student gets headaches during exam week from stress and poor sleep - these are likely tension headaches.',
        'A woman sees zigzag lines in her vision, then 30 minutes later gets a throbbing headache with nausea - this is a migraine with aura.',
        'A man has the worst headache of his life that started suddenly during exercise - this is a thunderclap headache and needs emergency care.',
      ],
    },
    2: {
      level: 2,
      summary: 'Headache evaluation requires distinguishing primary headache disorders (migraine, tension-type, cluster) from secondary headaches caused by underlying conditions, using red flag identification and appropriate workup.',
      explanation: `**Primary vs Secondary Headaches:**

**Primary Headaches (90% of presentations):**
- Migraine
- Tension-type headache (TTH)
- Cluster headache
- Other trigeminal autonomic cephalalgias (TACs)

**Secondary Headaches (10%):**
- Headache attributed to another disorder
- May be benign (medication overuse) or serious (SAH)

**Primary Headache Disorders:**

**Migraine (ICHD-3 Criteria):**
| Feature | Migraine without Aura |
|---------|----------------------|
| Duration | 4-72 hours |
| Location | Unilateral (60%) |
| Quality | Pulsating |
| Intensity | Moderate to severe |
| Aggravation | Physical activity |
| Associated | Nausea/vomiting, photophobia, phonophobia |

**Migraine with Aura:**
- Visual: Scintillating scotoma, fortification spectra
- Sensory: Paresthesias (face, arm)
- Speech: Aphasia
- Duration: 5-60 minutes
- Aura precedes or accompanies headache

**Tension-Type Headache:**
| Feature | TTH |
|---------|-----|
| Duration | 30 minutes to 7 days |
| Location | Bilateral |
| Quality | Pressing/tightening |
| Intensity | Mild to moderate |
| Aggravation | Not aggravated by activity |
| Associated | No nausea, maybe photophobia OR phonophobia |

**Cluster Headache:**
| Feature | Cluster |
|---------|---------|
| Duration | 15-180 minutes |
| Location | Unilateral orbital/supraorbital |
| Intensity | Severe to very severe |
| Frequency | 1-8 attacks per day |
| Autonomic | Lacrimation, conjunctival injection, rhinorrhea, ptosis, miosis |
| Behavior | Restlessness, pacing |

**Red Flags - "SNOOP":**

| Letter | Red Flag | Concern |
|--------|----------|---------|
| S | Systemic symptoms (fever, weight loss) | Infection, malignancy |
| S | Secondary risk factors (HIV, cancer) | Opportunistic infection, metastasis |
| N | Neurological symptoms | Mass lesion, stroke |
| O | Onset sudden (thunderclap) | SAH, dissection, CVT |
| O | Older age (new headache >50) | GCA, mass lesion |
| P | Pattern change | Progressive mass |
| P | Positional | Increased/decreased ICP |
| P | Precipitated by Valsalva | Chiari, posterior fossa lesion |
| P | Papilledema | Increased ICP |
| P | Pregnancy/postpartum | Pre-eclampsia, CVT |

**Secondary Headache Causes:**

**Life-threatening:**
- Subarachnoid hemorrhage
- Meningitis/encephalitis
- Cerebral venous thrombosis
- Arterial dissection
- Carbon monoxide poisoning
- Acute glaucoma

**Serious:**
- Giant cell arteritis
- Brain tumor
- Subdural hematoma
- Idiopathic intracranial hypertension
- Hypertensive emergency

**Initial Workup:**
- Detailed history (character, timing, triggers)
- Complete neurological examination
- Fundoscopy
- Blood pressure measurement
- Consider: CT/MRI, LP (if SAH suspected with negative CT)`,
      keyTerms: [
        { term: 'ICHD-3', definition: 'International Classification of Headache Disorders, 3rd edition' },
        { term: 'trigeminal autonomic cephalalgias', definition: 'Headache group including cluster headache with autonomic features' },
        { term: 'thunderclap headache', definition: 'Severe headache reaching maximum intensity within 1 minute' },
        { term: 'fortification spectra', definition: 'Zigzag visual pattern seen in migraine aura' },
        { term: 'SNOOP', definition: 'Mnemonic for headache red flags' },
      ],
      analogies: [
        'Primary headaches are like recurring mechanical problems - annoying but not dangerous. Secondary headaches are warning lights for engine problems.',
        'Cluster headaches come in waves like storms during a "cluster period" followed by calm.',
        'The SNOOP mnemonic helps you "sniff out" dangerous headaches.',
      ],
    },
    3: {
      level: 3,
      summary: 'Comprehensive headache evaluation integrates detailed history-taking, recognition of specific headache phenotypes, appropriate use of neuroimaging and lumbar puncture, and differentiation of mimics.',
      explanation: `**Detailed History Framework:**

**SOCRATES for Headache:**
| Element | Questions |
|---------|-----------|
| Site | Unilateral vs bilateral, location |
| Onset | Acute vs gradual, circumstances |
| Character | Throbbing, pressure, stabbing |
| Radiation | Neck, face, eye |
| Associated | Nausea, photophobia, autonomic |
| Time | Duration, frequency, pattern |
| Exacerbating | Activity, position, Valsalva |
| Severity | Pain scale, functional impact |

**Trigeminal Autonomic Cephalalgias (TACs):**

| Feature | Cluster | Paroxysmal Hemicrania | SUNCT/SUNA | Hemicrania Continua |
|---------|---------|----------------------|------------|---------------------|
| Duration | 15-180 min | 2-30 min | 1-600 sec | Continuous |
| Frequency | 1-8/day | 5-40/day | 3-200/day | Continuous |
| Gender | M > F | F > M | M = F | F > M |
| Response | O2, triptans | Indomethacin | Lamotrigine | Indomethacin |

**Neuroimaging Indications:**

**CT Head (Emergent):**
- Thunderclap headache
- New neurological deficits
- Altered mental status
- Fever with meningism
- Head trauma

**MRI Brain (Preferred Non-Emergent):**
- New headache with red flags
- Atypical presentation
- Treatment-refractory headache
- Papilledema
- Suspected pituitary lesion

**Specific Imaging Protocols:**
| Clinical Concern | Imaging |
|------------------|---------|
| SAH | CT head -> LP if negative |
| Aneurysm | CTA or MRA |
| Venous thrombosis | MRV or CT venogram |
| Dissection | MRA with fat saturation |
| Pituitary apoplexy | MRI with contrast |
| Giant cell arteritis | Temporal artery ultrasound, MRI |

**Lumbar Puncture Indications:**

**Indicated:**
- Suspected SAH with negative CT
- Meningitis/encephalitis
- Idiopathic intracranial hypertension (IIH)
- Low-pressure headache confirmation

**LP Findings:**
| Condition | Opening Pressure | CSF Findings |
|-----------|------------------|--------------|
| SAH | May be elevated | Xanthochromia, RBCs |
| Bacterial meningitis | Elevated | High WBC, low glucose |
| IIH | > 25 cm H2O | Normal composition |
| Low-pressure | Low | May be normal |

**Secondary Headache Syndromes:**

**Giant Cell Arteritis (GCA):**
- Age > 50, new headache
- Scalp tenderness, jaw claudication
- Visual symptoms (amaurosis fugax, diplopia)
- Elevated ESR (often > 50), CRP
- Treatment: Immediate high-dose steroids
- Temporal artery biopsy for confirmation

**Idiopathic Intracranial Hypertension:**
- Young obese women
- Headache worse lying down
- Pulsatile tinnitus
- Visual obscurations
- Papilledema
- LP: Opening pressure > 25 cm H2O

**Cerebral Venous Thrombosis:**
- Headache (90%), often progressive
- Risk factors: OCP, pregnancy, prothrombotic states
- Seizures, focal deficits
- CT may show cord sign, MRV definitive

**Medication Overuse Headache:**
- Chronic daily headache from analgesic overuse
- Simple analgesics: > 15 days/month
- Triptans/opioids: > 10 days/month
- Treatment: Withdrawal with bridge therapy

**Cervicogenic Headache:**
- Referred from cervical spine
- Unilateral, starts in neck
- Triggered by neck movement
- Associated neck symptoms
- Treatment: Physical therapy, nerve blocks`,
      keyTerms: [
        { term: 'xanthochromia', definition: 'Yellow CSF discoloration from RBC breakdown, confirming SAH' },
        { term: 'SUNCT', definition: 'Short-lasting unilateral neuralgiform headache with conjunctival injection and tearing' },
        { term: 'idiopathic intracranial hypertension', definition: 'Elevated ICP without mass or hydrocephalus; formerly pseudotumor cerebri' },
        { term: 'medication overuse headache', definition: 'Chronic headache from excessive analgesic use' },
        { term: 'cord sign', definition: 'Hyperdense thrombus in cerebral vein on CT' },
      ],
      clinicalNotes: 'CT sensitivity for SAH is 98% within 6 hours but drops to 50% at 1 week. LP is mandatory if clinical suspicion for SAH with negative CT. Xanthochromia takes 12 hours to develop and persists 2-4 weeks. Indomethacin response is diagnostic for paroxysmal hemicrania and hemicrania continua - consider therapeutic trial.',
    },
    4: {
      level: 4,
      summary: 'Advanced headache evaluation incorporates pathophysiological understanding, recognition of rare syndromes, specialized investigations, evidence-based treatment strategies, and management of refractory cases.',
      explanation: `**Migraine Pathophysiology:**

**Cortical Spreading Depression:**
\`\`\`
Wave of neuronal depolarization
↓
Propagates across cortex at 2-3 mm/min
↓
Correlates with aura
↓
Trigeminal activation
↓
Trigeminovascular system activation
↓
CGRP release
↓
Neurogenic inflammation
↓
Pain
\`\`\`

**Key Mediators:**
| Molecule | Role | Therapeutic Target |
|----------|------|-------------------|
| CGRP | Vasodilation, sensitization | Gepants, anti-CGRP mAbs |
| Serotonin | Modulation | Triptans (5-HT1B/1D) |
| Glutamate | Excitability | Topiramate |
| Dopamine | Prodrome symptoms | Antiemetics |

**Rare Headache Syndromes:**

**Primary Stabbing Headache (Ice-Pick):**
- Brief (3 seconds), stabbing pain
- Single or series
- Variable location
- Treatment: Indomethacin

**Hypnic Headache:**
- "Alarm clock" headache
- Awakens from sleep at consistent time
- Age > 50
- Bilateral, 15 minutes - 4 hours
- Treatment: Caffeine, lithium

**New Daily Persistent Headache (NDPH):**
- Sudden onset, continuous from day one
- Patients remember exact onset date
- Often follows viral illness or stressor
- Poor prognosis subset
- Exclude secondary causes

**Nummular Headache:**
- Coin-shaped area of pain
- Fixed location
- May have sensory changes in area
- Exclude structural lesion

**Specialized Investigations:**

**Transcranial Doppler:**
- Cerebral vasoreactivity
- Right-to-left shunt detection (PFO)
- Migraine research

**Visual Evoked Potentials:**
- Habituation patterns in migraine
- Visual pathway assessment

**Caloric Testing:**
- Vestibular migraine evaluation
- Differentiate from peripheral vertigo

**Indomethacin Trial:**
\`\`\`
Diagnostic Protocol:
- 25 mg TID x 3 days
- 50 mg TID x 3 days
- 75 mg TID x 3 days

Positive Response:
- Complete or near-complete relief
- Diagnostic for: Paroxysmal hemicrania,
  hemicrania continua, Valsalva-induced
\`\`\`

**Preventive Treatment Selection:**

**First-Line Preventives:**
| Agent | Evidence | Considerations |
|-------|----------|----------------|
| Propranolol | Level A | Contraindicated in asthma |
| Topiramate | Level A | Cognitive effects, weight loss |
| Valproate | Level A | Teratogenic |
| Amitriptyline | Level A | Sedation, weight gain |

**CGRP-Targeting Medications:**
| Agent | Type | Dosing |
|-------|------|--------|
| Erenumab | Anti-CGRP receptor mAb | 70-140 mg monthly |
| Fremanezumab | Anti-CGRP mAb | 225 mg monthly or 675 mg quarterly |
| Galcanezumab | Anti-CGRP mAb | 120 mg monthly after loading |
| Eptinezumab | Anti-CGRP mAb | 100-300 mg IV quarterly |

**Gepants (Small Molecule CGRP Antagonists):**
| Agent | Use |
|-------|-----|
| Ubrogepant | Acute treatment |
| Rimegepant | Acute and preventive |
| Atogepant | Preventive |

**Refractory Headache Management:**

**Definition:**
- Failure of >= 3 preventive classes
- At adequate dose and duration (>= 2 months)
- Significant disability despite treatment

**Interventional Approaches:**
| Procedure | Indication |
|-----------|------------|
| Occipital nerve block | Occipital neuralgia, migraine |
| Sphenopalatine ganglion block | Cluster, migraine |
| Trigger point injections | Cervicogenic, myofascial |
| Botox (onabotulinumtoxinA) | Chronic migraine (PREEMPT protocol) |

**Neuromodulation:**
| Device | Target | Indication |
|--------|--------|------------|
| sTMS | Cortex | Migraine acute/preventive |
| eVNS | Vagus | Cluster acute, migraine |
| REN | Trigeminal | Migraine acute |
| SPG stimulation | SPG | Cluster (implantable) |

**Medication Overuse Headache Treatment:**
\`\`\`
Approach:
1. Education and buy-in
2. Abrupt vs gradual withdrawal
3. Bridge therapy (steroids, DHE, nerve blocks)
4. Prophylaxis initiation
5. Limit acute medications
6. Monitor for relapse
\`\`\``,
      keyTerms: [
        { term: 'cortical spreading depression', definition: 'Wave of neuronal depolarization underlying migraine aura' },
        { term: 'CGRP', definition: 'Calcitonin gene-related peptide; key mediator in migraine' },
        { term: 'gepants', definition: 'Small molecule CGRP receptor antagonists for migraine' },
        { term: 'PREEMPT', definition: 'Protocol for Botox injection sites in chronic migraine' },
        { term: 'new daily persistent headache', definition: 'Sudden-onset chronic daily headache with exact date of onset recalled' },
      ],
      clinicalNotes: 'CGRP-targeting therapies have transformed migraine prevention with good tolerability. Consider anti-CGRP mAbs after failure of 2-3 traditional preventives. Gepants offer the advantage of combined acute and preventive use. Botox for chronic migraine requires >= 15 headache days/month with >= 8 migraine features. Refractory cases may benefit from multidisciplinary headache centers.',
    },
    5: {
      level: 5,
      summary: 'Expert headache evaluation encompasses emerging neuroscientific understanding, precision medicine approaches, advanced neuromodulation, management of complex comorbidities, and direction of multidisciplinary headache programs.',
      explanation: `**Migraine Neuroscience Updates:**

**Brainstem and Hypothalamic Involvement:**
\`\`\`
Migraine as Brain State Dysfunction:

Hypothalamus:
- Prodrome generation
- Circadian regulation
- Dopaminergic symptoms

Brainstem:
- Periaqueductal gray modulation failure
- Rostral ventromedial medulla
- Nucleus raphe magnus

Trigeminal Nucleus Caudalis:
- Central sensitization
- Cutaneous allodynia
\`\`\`

**Glymphatic System:**
- Sleep-dependent brain clearance
- Migraine association with sleep
- Potential therapeutic implications

**Neuroimaging Biomarkers:**
| Finding | Interpretation |
|---------|----------------|
| Hypothalamic activation | Prodrome/premonitory phase |
| Brainstem activation | Attack initiation |
| Cortical thickness changes | Chronic migraine |
| White matter hyperintensities | Long-term migraine |

**Precision Medicine Approaches:**

**Genetic Considerations:**
\`\`\`
Familial Hemiplegic Migraine:
- FHM1: CACNA1A (calcium channel)
- FHM2: ATP1A2 (Na/K-ATPase)
- FHM3: SCN1A (sodium channel)

GWAS Findings:
- 40+ susceptibility loci
- Vascular, neuronal, metal homeostasis pathways
- Potential for risk stratification
\`\`\`

**Pharmacogenomics:**
| Gene | Drug | Impact |
|------|------|--------|
| CYP2C19 | Amitriptyline | Metabolism |
| CYP2D6 | Propranolol | Metabolism |
| MTHFR | Riboflavin | Response prediction |
| HLA variants | Carbamazepine | Stevens-Johnson risk |

**Biomarker Development:**
\`\`\`
Research Biomarkers:
- CGRP levels (controversial utility)
- Inflammatory markers
- Metabolomic profiles
- MicroRNA signatures
- Brain-derived markers (NfL)

Challenges:
- Peripheral vs central levels
- State vs trait markers
- Standardization
\`\`\`

**Advanced Neuromodulation:**

**Invasive Approaches:**
| Device | Mechanism | Indication |
|--------|-----------|------------|
| ONS | Occipital nerve stimulation | Refractory chronic migraine |
| SPG stimulation | Sphenopalatine ganglion | Refractory cluster |
| DBS | Deep brain stimulation | Experimental |
| VNS | Vagus nerve (implanted) | Refractory cluster |

**Non-Invasive Devices:**
\`\`\`
Evidence Summary:

sTMS (Spring TMS):
- Class I evidence for acute migraine
- Moderate evidence for prevention

eVNS (gammaCore):
- FDA cleared for cluster and migraine
- Acute and preventive use

REN (Cefaly):
- Supraorbital nerve stimulation
- Preventive use well-supported
\`\`\`

**Complex Comorbidity Management:**

**Psychiatric Comorbidity:**
\`\`\`
Bidirectional Relationships:
- Depression: 2-3x increased risk
- Anxiety: 2-5x increased risk
- PTSD: 1.5x increased risk

Treatment Implications:
- Select treatments addressing both
- Amitriptyline, venlafaxine dual benefit
- Avoid topiramate if cognitive concerns
- Consider integrated mental health care
\`\`\`

**Cardiovascular Risk:**
| Factor | Management |
|--------|------------|
| Migraine with aura + OCP | Contraindicated, increased stroke risk |
| Migraine + vascular disease | Avoid triptans, use gepants |
| Patent foramen ovale | Controversial, closure not recommended |

**Medication Sensitivities:**
- Triptan contraindications in vascular disease
- CGRP mAbs: Theoretical cardiac concerns
- Gepants: Liver monitoring
- Ergots: Avoid in vascular disease

**Headache Center Direction:**

**Multidisciplinary Model:**
\`\`\`
Team Composition:
- Headache specialists (neurology)
- Behavioral health (psychology, psychiatry)
- Physical therapy
- Nursing/patient education
- Interventional specialists
- Pharmacy

Integrated Approach:
- Comprehensive assessment
- Individualized treatment plans
- Biopsychosocial model
- Patient self-management training
\`\`\`

**Outcomes and Metrics:**
| Metric | Target |
|--------|--------|
| Headache days reduction | >= 50% |
| MIDAS score improvement | >= 30% |
| HIT-6 reduction | >= 6 points |
| ED utilization | Reduction |
| Medication overuse | Elimination |

**Research Frontiers:**

**Emerging Targets:**
| Target | Mechanism | Status |
|--------|-----------|--------|
| PACAP | Neuropeptide | Phase 2 trials |
| Glutamate receptor | NMDA, AMPA | Research |
| Orexin | Hypothalamic | Early research |
| Acid-sensing channels | Dural pain | Preclinical |

**Novel Delivery Systems:**
\`\`\`
Innovations:
- Microneedle patches
- Intranasal CGRP antagonists
- Extended-release formulations
- Implantable drug delivery

Benefits:
- Improved bioavailability
- Reduced systemic exposure
- Patient convenience
- Consistent drug levels
\`\`\`

**Digital Health Integration:**
- Headache diary apps
- AI-assisted pattern recognition
- Remote patient monitoring
- Telemedicine headache care
- Digital therapeutics (behavioral)`,
      keyTerms: [
        { term: 'glymphatic system', definition: 'Brain waste clearance system active during sleep' },
        { term: 'PACAP', definition: 'Pituitary adenylate cyclase-activating peptide; emerging migraine target' },
        { term: 'ONS', definition: 'Occipital nerve stimulation; invasive neuromodulation for refractory headache' },
        { term: 'MIDAS', definition: 'Migraine Disability Assessment; measures functional impact' },
        { term: 'familial hemiplegic migraine', definition: 'Rare genetic migraine with motor aura due to ion channel mutations' },
      ],
      clinicalNotes: 'Expert headache care requires integration of latest neuroscience with practical management. CGRP pathway targeting has provided mechanism-based treatment for the first time. Precision medicine approaches are emerging with genetic and biomarker stratification. Complex patients benefit from multidisciplinary care addressing biological, psychological, and social factors. Quality metrics should guide program development and demonstrate value.',
    },
  },

  media: [
    {
      id: 'headache-algorithm',
      type: 'diagram',
      filename: 'headache-evaluation-algorithm.png',
      title: 'Headache Evaluation Algorithm',
      description: 'Decision tree for headache workup including red flags',
    },
    {
      id: 'migraine-pathophysiology',
      type: 'diagram',
      filename: 'migraine-mechanisms.png',
      title: 'Migraine Pathophysiology',
      description: 'Diagram showing cortical spreading depression and trigeminovascular activation',
    },
  ],

  citations: [
    {
      id: 'ichd3',
      type: 'article',
      title: 'The International Classification of Headache Disorders, 3rd edition',
      authors: ['Headache Classification Committee of the International Headache Society'],
      source: 'Cephalalgia',
    },
    {
      id: 'silberstein-preventive',
      type: 'article',
      title: 'Practice Guideline Update: Pharmacologic Treatment for Episodic Migraine Prevention in Adults',
      authors: ['Silberstein, S.D.'],
      source: 'Neurology',
    },
  ],

  crossReferences: [
    { targetId: 'clinical-neurological-exam', targetType: 'concept', relationship: 'related', label: 'Neurological Examination' },
    { targetId: 'clinical-stroke-assessment', targetType: 'concept', relationship: 'related', label: 'Stroke Assessment' },
    { targetId: 'physiology-neurotransmitters', targetType: 'process', relationship: 'see-also', label: 'Neurotransmitters' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['clinical', 'neurology', 'pain'],
    keywords: ['headache', 'migraine', 'tension headache', 'cluster headache', 'CGRP', 'red flags'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['neurology', 'medicine', 'family medicine'],
    },
  },

  createdAt: '2026-01-28T12:00:00.000Z',
  updatedAt: '2026-01-28T12:00:00.000Z',
  version: 1,
  status: 'published',
};

export default headacheEvaluation;
