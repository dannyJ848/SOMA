/**
 * Migraine Educational Module
 * 
 * Comprehensive coverage of migraine: pathophysiology, aura, triggers,
 * acute treatments (triptans, CGRP inhibitors), prevention strategies.
 */

import type { EducationalModule } from '../types.js';

export const migraineModule: EducationalModule = {
  id: 'migraine-comprehensive',
  type: 'specialty',
  specialty: 'neurology',
  
  title: 'Understanding Migraine',
  description: 'A complete guide to migraine: the neurological disease causing severe headaches, visual aura, light and sound sensitivity. Learn about triggers, acute treatments including new CGRP inhibitors, and prevention strategies.',
  version: '1.0.0',
  lastUpdated: '2026-02-06',
  author: 'Biological Self Medical Education Team',
  
  prerequisites: [
    'brain-anatomy-basics',
    'pain-pathways-overview',
    'neurotransmitters-intro',
  ],
  
  learningObjectives: [
    'Understand what causes migraine and how it differs from regular headaches',
    'Learn to identify migraine triggers and warning signs (aura)',
    'Know acute treatment options: triptans, gepants, ditans, and when to use them',
    'Understand preventive treatments including CGRP monoclonal antibodies',
    'Learn lifestyle modifications that can reduce migraine frequency',
  ],
  
  estimatedTime: {
    1: '15 minutes',
    2: '20 minutes',
    3: '30 minutes',
    4: '45 minutes',
    5: '60 minutes',
    6: '85 minutes',
  },
  
  content: {
    // Level 1: Foundation (8th grade)
    1: {
      summary: `Migraine is a neurological disease that causes severe, throbbing headaches, often on one side of the head. It's not just a bad headache - it's a complex condition involving brain chemistry, blood vessels, and nerves. Many people experience warning signs called "aura" like flashing lights or zigzag lines before the headache starts. Migraine attacks can last hours to days and often come with nausea, vomiting, and extreme sensitivity to light and sound.`,
      
      analogy: `Think of your brain as a busy city. Normally, traffic (nerve signals) flows smoothly. In migraine, it's like a traffic jam starts in one neighborhood - blood vessels dilate, nerves become overactive, and inflammation spreads. This creates a storm that affects the whole city.

The "aura" is like seeing warning signs before a storm - flashing lights are like lightning, the zigzag lines are like the storm front approaching. Then the full storm hits with pounding pain, nausea, and the need to hide in a dark, quiet room until it passes.`,
      
      keyPoints: [
        'Migraine is a neurological disease, not just a headache',
        'It causes severe, throbbing pain often on one side of the head',
        'Many people see flashing lights or zigzags before the pain (aura)',
        'Attacks can last 4-72 hours and include nausea and sensitivity to light/sound',
        'About 1 billion people worldwide have migraine; it runs in families',
        'Women are 3 times more likely to have migraine than men',
      ],
      
      visualAid: 'migraine-brain-animation',
      story: 'Lisa, 34, started getting migraines in her teens. At first, she thought they were just stress headaches. But when she began seeing flashing silver crescents before the pain, and had to lie in a dark room for a day, she knew it was different. Learning her triggers (red wine, skipped meals, sleep changes) and having the right medication has reduced her attacks from twice weekly to twice monthly.',
    },
    
    // Level 2: Developing (10th grade)
    2: {
      summary: `Migraine involves complex interactions between the trigeminal nerve (which supplies sensation to the face and head), blood vessels, and brain chemistry. The trigeminal nerve releases chemicals that cause inflammation and dilation of blood vessels surrounding the brain. This activates pain pathways. Serotonin levels drop at the start of a migraine, which may trigger the process. Aura is caused by "cortical spreading depression" - a wave of electrical silence moving across the brain.`,
      
      keyConcepts: [
        {
          term: 'Trigeminal Nerve',
          explanation: 'The fifth cranial nerve that provides sensation to the face, head, and meninges. Its activation is central to migraine pain.',
        },
        {
          term: 'CGRP (Calcitonin Gene-Related Peptide)',
          explanation: 'A neuropeptide released by trigeminal nerves that causes blood vessel dilation and inflammation - a key player in migraine.',
        },
        {
          term: 'Aura',
          explanation: 'Reversible neurological symptoms that precede or accompany headache: visual (most common), sensory, speech, or motor disturbances.',
        },
        {
          term: 'Cortical Spreading Depression (CSD)',
          explanation: 'A wave of decreased electrical activity spreading across the brain cortex at 3-5 mm/minute - the cause of visual aura.',
        },
      ],
      
      keyPoints: [
        'The trigeminal nerve releases CGRP and other substances causing inflammation',
        'Blood vessels around the brain dilate and become inflamed',
        'Serotonin levels decrease during migraine attacks',
        'Aura is caused by a wave of electrical silence moving across the visual cortex',
        'Pain signals are transmitted to the brainstem and thalamus',
        'The trigeminal-autonomic reflex causes tearing, nasal congestion, eyelid swelling',
      ],
      
      howItWorks: `Migraine Attack Phases:

1. Prodrome (hours-days before): Yawning, food cravings, mood changes, neck stiffness

2. Aura (15-60 minutes before headache): Visual disturbances (flashing lights, zigzags, blind spots), sensory changes, speech difficulty

3. Headache (4-72 hours): Throbbing pain, nausea, vomiting, sensitivity to light/sound/smell

4. Postdrome (hours-days after): Fatigue, brain fog, depression, scalp tenderness

Key Mechanism: Trigeminal nerve activation → CGRP release → vasodilation + neurogenic inflammation → pain signal transmission to brainstem → central sensitization`,
    },
    
    // Level 3: Standard (12th grade)
    3: {
      summary: `Migraine is the second most disabling condition globally, affecting approximately 12% of the population. The pathophysiology involves activation of the trigeminovascular system with subsequent release of CGRP, substance P, and neurokinin A. Central sensitization in the trigeminal nucleus caudalis leads to allodynia (pain from normally non-painful stimuli). Migraine without aura is most common (70-80%); migraine with aura affects 20-30%. Chronic migraine is defined as ≥15 headache days/month with ≥8 migraine days for >3 months.`,
      
      mechanisms: [
        {
          name: 'Trigeminovascular System Activation',
          description: 'Sensory fibers from the trigeminal ganglion innervate cerebral blood vessels. Their activation releases vasoactive peptides causing inflammation and pain.',
        },
        {
          name: 'Central Sensitization',
          description: 'Increased responsiveness of second-order neurons in the trigeminal nucleus caudalis. Explains allodynia, photophobia, phonophobia, and cutaneous sensitization.',
        },
        {
          name: 'Brainstem Generator',
          description: 'Imaging studies show activation in the periaqueductal gray (PAG), dorsal pons, and hypothalamus at the earliest stages of attack - suggesting a central origin.',
        },
        {
          name: 'Genetic Factors',
          description: 'Familial hemiplegic migraine (FHM) genes: CACNA1A (FHM1), ATP1A2 (FHM2), SCN1A (FHM3) encode ion channels. Common migraine has polygenic inheritance.',
        },
      ],
      
      clinicalCorrelates: [
        'Migraine without aura: Most common type; diagnostic criteria require 5 attacks lasting 4-72 hours with specific features',
        'Migraine with aura: Fully reversible focal neurological symptoms precede headache',
        'Hemiplegic migraine: Motor weakness as part of aura; can be familial or sporadic',
        'Vestibular migraine: Vertigo associated with migraine features',
        'Menstrual migraine: Attacks occurring ±2 days of menses in ≥2/3 of cycles',
        'Status migrainosus: Debilitating migraine lasting >72 hours',
      ],
      
      normalVsAbnormal: {
        normal: 'Sensory processing occurs without amplification; pain signals require noxious stimuli; light and sound are tolerated normally; blood vessel tone is stable',
        abnormal: 'Trigeminal activation causes sterile neurogenic inflammation; central sensitization amplifies pain signals; sensory stimuli become painful; brainstem dysfunction may initiate attacks',
        whyItMatters: 'Understanding that migraine is a neurological disease involving sensitization helps explain why it requires specific treatments targeting CGRP, serotonin receptors, and inflammation rather than just pain relievers.',
      },
    },
    
    // Level 4: Advanced (College)
    4: {
      summary: `The neurovascular hypothesis posits that migraine originates in the brain with subsequent activation of meningeal nociceptors. Cortical spreading depression (CSD), the biological substrate of aura, can activate trigeminal afferents through release of potassium, nitric oxide, and arachidonic acid metabolites. CGRP receptor antagonists (gepants) and monoclonal antibodies against CGRP or its receptor represent breakthrough targeted therapies. 5-HT1B/1D agonists (triptans) constrict vessels and inhibit trigeminal activation. 5-HT1F agonists (ditans) provide acute treatment without vasoconstriction.`,
      
      molecularMechanisms: [
        {
          pathway: 'CGRP Signaling',
          defect: 'CGRP binds to G-protein coupled receptor (CALCRL/RAMP1 complex) on vascular smooth muscle and mast cells',
          consequence: 'Adenylyl cyclase activation → cAMP → PKA → vasodilation, mast cell degranulation, plasma protein extravasation',
        },
        {
          pathway: 'Serotonin Receptors',
          defect: '5-HT1B receptors on vessels mediate constriction; 5-HT1D receptors on trigeminal nerve terminals inhibit CGRP release',
          consequence: 'Triptans (5-HT1B/1D agonists) abort migraine by both mechanisms; 5-HT1F (lasmiditan) inhibits trigeminal activation without vasoconstriction',
        },
        {
          pathway: 'Cortical Spreading Depression',
          defect: 'Massive depolarization of neurons and glia → ion fluxes (K+ out, Ca2+ and Na+ in) → water movement → transient ischemia',
          consequence: 'Activates meningeal nociceptors; may explain migraine-ischemic stroke link; triggers inflammatory cascade',
        },
        {
          pathway: 'Central Sensitization Molecular Basis',
          defect: 'Increased glutamate release, NMDA receptor activation, reduced GABAergic inhibition in trigeminal nucleus caudalis',
          consequence: 'Expanded receptive fields, wind-up phenomenon, allodynia; explains why treating early is more effective',
        },
      ],
      
      pathways: [
        {
          name: 'CGRP-Mediated Vasodilation',
          steps: [
            'Trigeminal nerve terminal activation',
            'CGRP release from dense-core vesicles',
            'CGRP binds to CALCRL/RAMP1 receptor',
            'Gs protein activation → adenylyl cyclase stimulation',
            'cAMP production → PKA activation',
            'Vascular smooth muscle relaxation → dilation',
          ],
          regulation: 'CGRP receptor antagonists (ubrogepant, rimegepant) and CGRP monoclonal antibodies (erenumab, fremanezumab, galcanezumab, eptinezumab) block this pathway',
        },
        {
          name: 'Triptan Mechanism',
          steps: [
            'Triptan crosses blood-brain barrier (partially)',
            '5-HT1B agonism → cranial vessel constriction',
            '5-HT1D agonism → presynaptic inhibition of CGRP release',
            '5-HT1B/1D agonism in brainstem modulates trigeminal nucleus caudalis',
            'Peripheral and central inhibition of trigeminovascular activation',
          ],
          regulation: 'Contraindicated in cardiovascular disease due to coronary vasoconstriction risk; more effective when taken early before allodynia develops',
        },
      ],
      
      references: [
        'Goadsby PJ, et al. Pathophysiology of Migraine: A Disorder of Sensory Processing. Physiol Rev. 2017;97(2):553-622.',
        'Dodick DW. Migraine. Lancet. 2018;391(10127):1315-1330.',
        'Edvinsson L. The CGRP pathway in migraine as a viable target for therapies. Headache. 2018;58(Suppl 1):33-47.',
      ],
    },
    
    // Level 5: Expert (Graduate)
    5: {
      summary: `The 2018 AHS/AAN guidelines stratify preventive treatments based on evidence level. High-efficacy options include CGRP monoclonal antibodies (erenumab, fremanezumab, galcanezumab, eptinezumab), onabotulinumtoxinA for chronic migraine, and topiramate. CGRP monoclonal antibodies have transformed preventive care with quarterly or monthly dosing and excellent tolerability. For acute treatment, stratified care uses NSAIDs for mild attacks and triptans/gepants/ditans for moderate-severe attacks. The "treat early" principle is supported by evidence that central sensitization makes late treatment less effective. Medication overuse headache complicates management in 1-2% of population.`,
      
      researchFrontiers: [
        'CGRP antagonists for prevention: Atogepant and rimegepant (QD dosing) FDA approved for prevention',
        'Ditans: Lasmiditan (5-HT1F agonist) for acute treatment without cardiovascular contraindications',
        'Neuromodulation: Non-invasive vagus nerve stimulation, single-pulse TMS, external trigeminal stimulation, remote electrical neuromodulation',
        'PACAP pathway: Monoclonal antibodies against PACAP or its receptor in development',
        'Precision medicine: Biomarkers (CGRP levels, imaging phenotypes) to guide treatment selection',
        'Anti-inflammatory approaches: Targeting NLRP3 inflammasome, IL-1β, TNF-α in refractory migraine',
      ],
      
      controversies: [
        {
          topic: 'Patent Foramen Ovale (PFO) Closure for Migraine',
          perspectives: [
            'Observational studies suggested benefit in migraine with aura',
            'MIST trial showed no benefit; PRIMA and studies suggest possible harm',
            'Not recommended for migraine treatment; only close PFO for other indications',
          ],
        },
        {
          topic: 'Triptan Use in Patients with Cardiovascular Risk',
          perspectives: [
            'Triptans contraindicated in coronary artery disease, stroke, uncontrolled hypertension',
            'Some data suggests careful use may be safe in low-risk patients',
            'Ditans (lasmiditan) and gepants provide alternatives without vasoconstriction',
          ],
        },
        {
          topic: 'Medication Overuse Headache Threshold',
          perspectives: [
            'Traditional limits: simple analgesics >15 days/month; triptans/combination analgesics >10 days/month',
            'Individual susceptibility varies; some develop MOH at lower frequencies',
            'Gepants and ditans may have lower MOH risk; CGRP mAbs do not cause MOH',
          ],
        },
      ],
      
      statisticalContext: `CGRP monoclonal antibody trials (STRIVE, ARISE, EVOLVE, REGAIN) showed:
- ≥50% responder rates: 40-60% vs 18-29% placebo
- Mean reduction in migraine days: 2-3 days/month vs placebo
- Discontinuation for adverse events: <3% (excellent tolerability)

Acute treatment efficacy from RCTs:
- Triptans: 2-hour pain freedom ~30%, 2-hour pain relief ~60%
- Gepants: Similar efficacy to triptans without vasoconstriction
- Lasmiditan: 2-hour pain freedom 38-48% (dose-dependent)
- NSAIDs: 2-hour pain relief ~50%

Preventive treatment responder rates:
- Topiramate: ≥50% responder 37% vs 17% placebo
- OnabotulinumtoxinA (chronic migraine): ≥50% responder 32% vs 15% placebo
- CGRP mAbs: 40-60% ≥50% responders`,
      
      references: [
        'Silberstein SD, et al. Evidence-based guideline update: Pharmacologic treatment for episodic migraine prevention in adults. Neurology. 2012;78(17):1337-1345.',
        'Dodick DW, et al. ARISE: A Phase 3 randomized trial of erenumab for episodic migraine. Cephalalgia. 2018;38(6):1026-1037.',
        'Lipton RB, et al. Effect of ubrogepant vs placebo on pain and the most bothersome associated symptom in the acute treatment of migraine. JAMA. 2019;322(19):1887-1898.',
      ],
    },
    
    // Level 6: Clinical (Physician-level)
    6: {
      summary: `Migraine diagnosis requires excluding secondary causes (red flags requiring imaging: thunderclap onset, fever/neck stiffness, new neurologic deficit, new onset after age 50, change in pattern, positional headache, Valsalva-induced, cancer/HIV/immunosuppression). ICHD-3 criteria differentiate migraine from tension-type headache and trigeminal autonomic cephalalgias. Preventive treatment is indicated for ≥4 migraine days/month with disability, ≥8 days/month of any headache, or significant disability despite acute treatment. Acute treatment strategies include stratified care (based on attack severity) vs step care. Calcitonin gene-related peptide (CGRP) plays a central role, making CGRP pathway inhibitors transformative for both acute and preventive therapy.`,
      
      clinicalApproach: [
        'Red flags requiring urgent workup (SNOOP): Systemic symptoms, Neurologic deficits, Onset sudden (thunderclap), Older age onset (>50), Pattern change, Precipitated by Valsalva/sex/exertion',
        'Preventive treatment selection: Consider efficacy, comorbidities (depression, hypertension, obesity), side effect profile, pregnancy plans, route of administration',
        'Acute treatment: NSAIDs for mild; triptans/gepants/ditans for moderate-severe; antiemetic if nausea present',
        'Treat early in attack before central sensitization develops (allodynia indicates sensitization)',
        'Medication overuse headache prevention: Limit triptans to <10 days/month; simple analgesics <15 days/month',
        'Address comorbidities: Depression, anxiety, sleep disorders, obesity all worsen migraine',
      ],
      
      differentialConsiderations: [
        'Tension-type headache: Bilateral, pressing/tightening, mild-moderate, no nausea, no aggravation by routine activity',
        'Cluster headache: Severe unilateral orbital/temporal, 15-180 min, autonomic symptoms, restlessness, circadian pattern',
        'Trigeminal neuralgia: Electric shock-like, seconds duration, V2/V3 distribution, triggers',
        'Sinus headache: Usually migraine; true acute rhinosinusitis causes purulent discharge, fever, facial pain',
        'Medication overuse headache: Daily or near-daily headache in patient using acute medications frequently',
        'New daily persistent headache: Abrupt onset, continuous from onset, recalls exact start date',
      ],
      
      guidelines: [
        'International Classification of Headache Disorders, 3rd edition (ICHD-3)',
        'AHS/AAN 2012 Evidence-based guidelines for migraine prevention',
        'AHS Consensus Statement on integrating new migraine treatments (2019)',
        'European Headache Federation guidelines for migraine management',
      ],
      
      caseExamples: [
        {
          presentation: '32-year-old female with migraine with aura since age 16. Currently having 8 migraine days/month, 2-3 with aura. Acute treatment with sumatriptan 50mg effective but headaches recurring. Taking sumatriptan 10-12 times/month. History of depression, normal BMI.',
          keyFindings: [
            'Meets criteria for preventive therapy (≥4 migraine days/month with disability)',
            'Approaching medication overuse threshold (≥10 triptan days/month risk)',
            'Depression comorbidity - consider preventive that helps both',
          ],
          teachingPoints: [
            'Options: Beta-blocker (propranolol), CGRP mAb (erenumab), onabotulinumtoxinA (if chronic), or oral CGRP antagonist (atogepant)',
            'Given depression history, avoid topiramate (can worsen mood)',
            'Erenumab 70mg monthly or atogepant 10mg daily excellent choices',
            'Set acute medication limits: max 9 sumatriptan days/month',
            'Discuss cardiovascular risk with aura; consider non-vascular acute options (gepants, ditans)',
          ],
        },
        {
          presentation: '58-year-old male with new onset headache. Describes severe unilateral throbbing pain with nausea and photophobia. No prior headache history. Has hypertension and hyperlipidemia.',
          keyFindings: [
            'New onset migraine after age 50 requires workup for secondary causes',
            'Risk factors for vascular disease present',
            'Thunderclap onset or "worst headache" would require urgent imaging',
          ],
          teachingPoints: [
            'MRI brain with and without contrast to exclude tumor, vascular malformation, dissection',
            'If thunderclap: CT head immediately, LP if negative to rule out SAH',
            'Temporal artery biopsy if temporal headache with jaw claudication (GCA)',
            'Consider CADASIL if family history stroke/dementia',
            'If workup negative: Treat as new onset migraine; avoid triptans if cardiovascular risk',
          ],
        },
      ],
      
      references: [
        'Headache Classification Committee of the International Headache Society. The International Classification of Headache Disorders, 3rd edition. Cephalalgia. 2018;38(1):1-211.',
        'Dodick DW, et al. Ubrogepant for the Treatment of Migraine. N Engl J Med. 2019;381(23):2230-2241.',
        'Goadsby PJ, et al. A Controlled Trial of Erenumab for Episodic Migraine. N Engl J Med. 2017;377(22):2123-2132.',
      ],
    },
  },
  
  interactions: {
    anatomyPoints: [
      { structure: 'brain', focus: 'trigeminal-nerve', description: 'Fifth cranial nerve whose activation releases CGRP and causes migraine pain' },
      { structure: 'brain', focus: 'trigeminal-nucleus-caudalis', description: 'Brainstem nucleus where pain signals are processed; site of central sensitization' },
      { structure: 'brain', focus: 'visual-cortex', description: 'Area where cortical spreading depression causes visual aura symptoms' },
      { structure: 'brain', focus: 'hypothalamus', description: 'Controls circadian rhythms and may be the migraine "generator" - shows earliest activation' },
      { structure: 'brain', focus: 'periaqueductal-gray', description: 'Pain modulation center; dysfunction may predispose to migraine' },
    ],
    
    relatedMedications: [
      'sumatriptan',
      'rizatriptan',
      'zolmitriptan',
      'eletriptan',
      'almotriptan',
      'frovatriptan',
      'naratriptan',
      'ubrogepant',
      'rimegepant',
      'lasmiditan',
      'erenumab',
      'fremanezumab',
      'galcanezumab',
      'eptinezumab',
      'atogepant',
      'topiramate',
      'propranolol',
      'amitriptyline',
      'venlafaxine',
      'onabotulinumtoxina',
    ],
    
    relatedConditions: [
      'chronic-migraine',
      'tension-type-headache',
      'cluster-headache',
      'medication-overuse-headache',
      'vestibular-migraine',
      'hemiplegic-migraine',
      'depression',
      'anxiety',
      'insomnia',
    ],
  },
  
  quiz: {
    title: 'Migraine Knowledge Assessment',
    passingScore: 80,
    questions: [
      {
        id: 'migraine-q1',
        type: 'multiple-choice',
        complexity: 1,
        question: 'What is the main difference between a regular headache and a migraine?',
        options: [
          'Migraine only happens in women',
          'Migraine is a neurological disease involving brain chemistry, blood vessels, and nerves',
          'Migraine pain is always on both sides of the head',
          'Migraine only lasts 30 minutes',
        ],
        correctAnswer: 1,
        explanation: 'Migraine is a complex neurological disease, not just a bad headache. It involves activation of the trigeminal nerve, release of inflammatory chemicals like CGRP, blood vessel changes, and often includes symptoms like nausea, sensitivity to light/sound, and sometimes visual aura.',
      },
      {
        id: 'migraine-q2',
        type: 'multiple-choice',
        complexity: 2,
        question: 'What causes the visual symptoms (flashing lights, zigzags) that some people see before a migraine headache?',
        options: [
          'A blood clot in the eye',
          'Cortical spreading depression - a wave of electrical silence moving across the brain',
          'Lack of sleep the night before',
          'Too much caffeine',
        ],
        correctAnswer: 1,
        explanation: 'Visual aura is caused by cortical spreading depression (CSD), a wave of decreased electrical activity that moves across the visual cortex at about 3-5 mm per minute. This explains why visual disturbances often expand gradually across the visual field.',
      },
      {
        id: 'migraine-q3',
        type: 'multiple-choice',
        complexity: 3,
        question: 'A 35-year-old woman has 12 migraine days per month. She takes sumatriptan for each attack. What is the primary concern with her current management?',
        options: [
          'She should be taking aspirin instead',
          'Risk of medication overuse headache from frequent triptan use',
          'Sumatriptan causes addiction',
          'She needs to stop all medications immediately',
        ],
        correctAnswer: 1,
        explanation: 'Using triptans more than 10 days per month can cause medication overuse headache (MOH), a daily or near-daily headache that develops from frequent acute medication use. With 12 migraine days/month, she meets criteria for chronic migraine and should be on preventive therapy to reduce attack frequency.',
      },
      {
        id: 'migraine-q4',
        type: 'case-study',
        complexity: 4,
        question: 'A 28-year-old patient has frequent migraines and a strong family history of early heart disease. Which acute treatment option would be most appropriate to avoid?',
        options: [
          'Ubrogepant (CGRP receptor antagonist)',
          'Sumatriptan (triptan)',
          'Lasmiditan (ditan)',
          'Naproxen (NSAID)',
        ],
        correctAnswer: 1,
        explanation: 'Triptans like sumatriptan are 5-HT1B agonists that cause vasoconstriction. They are contraindicated in patients with cardiovascular disease or significant cardiovascular risk factors due to potential coronary vasoconstriction. Ubrogepant, lasmiditan, and NSAIDs do not have this cardiovascular risk.',
      },
      {
        id: 'migraine-q5',
        type: 'case-study',
        complexity: 6,
        question: 'A 45-year-old female with chronic migraine (20 headache days/month) has failed topiramate and propranolol due to side effects. She has depression but no cardiovascular disease. Which preventive treatment has the strongest evidence for efficacy in chronic migraine and best tolerability profile?',
        options: [
          'Increase propranolol despite side effects',
          'OnabotulinumtoxinA injections',
          'Amitriptyline',
          'Start daily opiates for pain control',
        ],
        correctAnswer: 1,
        explanation: 'OnabotulinumtoxinA (Botox) is FDA-approved for chronic migraine (≥15 days/month) with Level A evidence from the PREEMPT trials. It is well-tolerated with minimal systemic side effects. While CGRP monoclonal antibodies are also excellent options, onabotulinumtoxinA is specifically proven for chronic migraine. Amitriptyline is effective but often poorly tolerated (sedation, weight gain). Opiates are contraindicated in migraine management.',
      },
    ],
  },
  
  references: [
    {
      citation: 'Goadsby PJ, et al. Pathophysiology of Migraine: A Disorder of Sensory Processing. Physiol Rev. 2017;97(2):553-622.',
      doi: '10.1152/physrev.00034.2015',
    },
    {
      citation: 'Dodick DW. Migraine. Lancet. 2018;391(10127):1315-1330.',
      doi: '10.1016/S0140-6736(18)30478-1',
    },
    {
      citation: 'Headache Classification Committee of the International Headache Society. The International Classification of Headache Disorders, 3rd edition. Cephalalgia. 2018;38(1):1-211.',
      doi: '10.1177/0333102417738202',
    },
    {
      citation: 'Goadsby PJ, et al. A Controlled Trial of Erenumab for Episodic Migraine. N Engl J Med. 2017;377(22):2123-2132.',
      doi: '10.1056/NEJMoa1705848',
    },
    {
      citation: 'Dodick DW, et al. Ubrogepant for the Treatment of Migraine. N Engl J Med. 2019;381(23):2230-2241.',
      doi: '10.1056/NEJMoa1813049',
    },
    {
      citation: 'Lipton RB, et al. Effect of ubrogepant vs placebo on pain and the most bothersome associated symptom in the acute treatment of migraine. JAMA. 2019;322(19):1887-1898.',
      doi: '10.1001/jama.2019.16711',
    },
    {
      citation: 'Edvinsson L. The CGRP pathway in migraine as a viable target for therapies. Headache. 2018;58(Suppl 1):33-47.',
      doi: '10.1111/head.13376',
    },
    {
      citation: 'Silberstein SD, et al. Evidence-based guideline update: Pharmacologic treatment for episodic migraine prevention in adults. Neurology. 2012;78(17):1337-1345.',
      doi: '10.1212/WNL.0b013e3182535d1c',
    },
  ],
  
  resources: [
    {
      title: 'American Migraine Foundation',
      type: 'website',
      url: 'https://americanmigrainefoundation.org',
      description: 'Patient education and resources for migraine management',
    },
    {
      title: 'Migraine Trust',
      type: 'website',
      url: 'https://migrainetrust.org',
      description: 'UK charity providing migraine information and support',
    },
    {
      title: 'Association of Migraine Disorders',
      type: 'website',
      url: 'https://www.migrainedisorders.org',
      description: 'Research and education for migraine and related disorders',
    },
    {
      title: 'National Headache Foundation',
      type: 'website',
      url: 'https://headaches.org',
      description: 'Patient education and headache specialist directory',
    },
    {
      title: 'Migraine World Summit',
      type: 'website',
      url: 'https://www.migraineworldsummit.com',
      description: 'Annual online conference with leading migraine experts',
    },
  ],
};

export default migraineModule;
