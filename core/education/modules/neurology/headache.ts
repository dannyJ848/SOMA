import type { EducationalModule } from '../../types';

export const headacheModule: EducationalModule = {
  id: 'neurology-headache-comprehensive',
  specialty: 'Neurology',
  title: 'Understanding Headaches',
  description: 'Learn about different types of headaches, their causes, and when to seek medical attention.',
  estimatedTime: '25 minutes',
  prerequisites: [],
  complexity: {
    foundation: {
      title: 'Headache Basics',
      readingLevel: 1,
      content: `A headache is pain in your head or face. Almost everyone gets headaches sometimes.

**Common Types:**
- **Tension headache**: Feels like a tight band around your head. Most common type.
- **Migraine**: Severe, throbbing pain, often on one side. May cause nausea and light sensitivity.
- **Cluster headache**: Intense pain around one eye, comes in groups or "clusters."

**What Causes Headaches:**
- Stress and muscle tension
- Not drinking enough water (dehydration)
- Lack of sleep
- Certain foods or drinks (like alcohol or aged cheese)
- Eye strain from screens
- Hormonal changes (especially in women)

**When to Worry:**
Most headaches are not dangerous. But call a doctor if you have:
- "Worst headache of your life" suddenly
- Headache with fever and stiff neck
- Headache after a head injury
- Headache that gets worse over time
- New headache if you're over 50
- Headache with vision changes, weakness, or confusion

**Simple Relief:**
- Rest in a quiet, dark room
- Drink water
- Apply cold or warm compress
- Over-the-counter pain medicine (follow directions)`,
      keyTerms: [
        { term: 'Migraine', definition: 'A severe headache often with throbbing pain, nausea, and sensitivity to light' },
        { term: 'Dehydration', definition: 'Not having enough water in your body' },
        { term: 'Aura', definition: 'Warning signs before a migraine, like seeing flashing lights' },
      ],
    },
    developing: {
      title: 'Headache Types and Triggers',
      readingLevel: 2,
      content: `**Primary vs. Secondary Headaches**

**Primary headaches** are not caused by another medical condition. They include:
- Tension-type headaches (90% of all headaches)
- Migraines (12% of population)
- Cluster headaches (rare but very severe)

**Secondary headaches** are symptoms of another problem:
- Sinus infections
- Concussion or head injury
- High blood pressure (rarely causes headache)
- Brain tumors (very rare cause of headache)

**Understanding Migraines:**
Migraines involve changes in brain activity and blood flow. Many people experience:
- **Prodrome** (hours before): Mood changes, food cravings, yawning
- **Aura** (20-30% of migraineurs): Visual disturbances, tingling, speech difficulty
- **Attack**: Throbbing pain, nausea, vomiting, light/sound sensitivity
- **Postdrome**: Fatigue, confusion for 24-48 hours

**Common Triggers:**
Keep a headache diary to identify your triggers:
- Foods: Chocolate, aged cheese, MSG, alcohol (especially red wine)
- Environment: Bright lights, loud noises, strong smells
- Lifestyle: Irregular sleep, skipping meals, stress, dehydration
- Hormonal: Menstruation, ovulation, pregnancy, menopause
- Weather: Barometric pressure changes

**The "Red Flags" (Seek Immediate Care):**
- Thunderclap headache (peaks in seconds)
- "Worst headache of your life"
- Associated with fever, neck stiffness, rash
- After head trauma
- New onset after age 50
- Progressive worsening
- With neurological symptoms (weakness, vision loss, confusion)`,
      keyTerms: [
        { term: 'Prodrome', definition: 'Early warning symptoms hours before a migraine' },
        { term: 'Thunderclap headache', definition: 'Severe headache reaching maximum intensity within seconds' },
        { term: 'Triptans', definition: 'A class of medications that treat acute migraines' },
      ],
    },
    standard: {
      title: 'Headache Pathophysiology and Classification',
      readingLevel: 3,
      content: `**Classification Systems**

The International Classification of Headache Disorders (ICHD-3) categorizes headaches into:

**Part One: Primary Headaches**
1. Migraine (with/without aura, chronic)
2. Tension-type headache (episodic, chronic)
3. Trigeminal autonomic cephalalgias (cluster, paroxysmal hemicrania)
4. Other primary headache disorders

**Part Two: Secondary Headaches**
Attributed to another disorder: trauma, vascular, infection, substance use, etc.

**Migraine Pathophysiology:**

**Vascular Theory (Classic):**
- Intracranial vasoconstriction → aura
- Vasodilation → headache pain
- Neurogenic inflammation amplifies pain

**Current Understanding (Neurovascular):**
- Cortical spreading depression initiates aura
- Trigeminovascular system activation
- Release of CGRP, substance P → inflammation
- Brainstem generator involvement

**Tension-Type Headache Mechanism:**
- Peripheral sensitization of myofascial nociceptors
- Central sensitization in chronic cases
- Stress-induced muscle contraction
- Possible serotonin dysfunction

**Cluster Headache Pathophysiology:**
- Hypothalamic activation (circadian rhythm involvement)
- Trigeminal-autonomic reflex activation
- Ipsilateral parasympathetic symptoms (tearing, nasal congestion)

**Medication Overuse Headache:**
- Occurs with frequent use of acute headache medications
- Risk: ≥10 days/month for triptans/opioids, ≥15 days/month for simple analgesics
- Paradoxically, treating headache causes more headaches
- Treatment: Withdrawal and preventive therapy

**Diagnostic Workup for Red Flags:**
- Neuroimaging (CT/MRI) for thunderclap or focal neurological signs
- Lumbar puncture for suspected subarachnoid hemorrhage or meningitis
- ESR/CRP for temporal arteritis in patients >50
- Blood pressure assessment (though HTN rarely causes headache)`,
      keyTerms: [
        { term: 'Cortical spreading depression', definition: 'Wave of neuronal depolarization across the cortex, basis of migraine aura' },
        { term: 'CGRP', definition: 'Calcitonin gene-related peptide, key mediator in migraine pathophysiology' },
        { term: 'Trigeminovascular system', definition: 'Network connecting trigeminal nerve to cerebral blood vessels' },
      ],
    },
    advanced: {
      title: 'Headache Neurobiology and Pharmacology',
      readingLevel: 4,
      content: `**Neurotransmitter Systems in Headache**

**Serotonin (5-HT):**
- Migraine: 5-HT₁B/₁D agonists (triptans) abort acute attacks
- Tension-type: 5-HT dysfunction implicated in chronic forms
- Serotonergic pathways modulate trigeminal nociception

**Calcitonin Gene-Related Peptide (CGRP):**
- Potent vasodilator released from trigeminal ganglion
- Levels elevated during migraine, normalized with treatment
- CGRP receptor antagonists (gepants) and monoclonal antibodies (erenumab, fremanezumab) are targeted therapies

**Substance P and Neurokinins:**
- Involved in neurogenic inflammation
- NK1 receptor antagonists have shown limited efficacy

**Glutamate:**
- Cortical spreading depression involves massive glutamate release
- NMDA receptors implicated in central sensitization
- Ketamine (NMDA antagonist) used for refractory headaches

**Genetic Factors:**
- Familial hemiplegic migraine: CACNA1A, ATP1A2, SCN1A mutations
- Channelopathies affecting ion transport
- Common migraine: polygenic with heritability ~40-50%

**Advanced Pharmacology:**

**Acute Treatment:**
- Triptans: 5-HT₁B/₁D agonists, contraindicated in cardiovascular disease
- Gepants (ubrogepant, rimegepant): CGRP receptor antagonists, no vascular constriction
- Ditans (lasmiditan): 5-HT₁F agonist, no vasoconstriction
- Dihydroergotamine: Ergot alkaloid, multiple receptor activity

**Preventive Treatment:**
- Beta-blockers (propranolol): membrane stabilization, reduced cortical excitability
- CCBs (verapamil): cluster headache prevention
- Anticonvulsants (topiramate, valproate): multiple mechanisms
- CGRP monoclonal antibodies: targeted prevention
- OnabotulinumtoxinA: inhibits release of CGRP, substance P

**Special Populations:**
- Pregnancy: Acetaminophen preferred; avoid triptans if possible
- Children: Ibuprofen effective; sumatriptan nasal spray approved
- Elderly: Higher risk of medication overuse; consider temporal arteritis`,
      keyTerms: [
        { term: 'Gepants', definition: 'CGRP receptor antagonists for acute migraine treatment' },
        { term: 'Central sensitization', definition: 'Increased responsiveness of central neurons to normal inputs' },
        { term: 'Channelopathy', definition: 'Disease caused by dysfunction of ion channels' },
      ],
    },
    expert: {
      title: 'Headache: Advanced Mechanisms and Clinical Research',
      readingLevel: 5,
      content: `**Cortical Spreading Depression (CSD):**

The electrophysiological correlate of migraine aura:
- Brief neuronal depolarization followed by prolonged suppression
- Propagates at 3-5 mm/min across cortex
- Involves massive ion fluxes (K+, Ca2+, Na+, Cl-)
- Opens blood-brain barrier via matrix metalloproteinases
- Activates trigeminovascular system

Genetic mutations in FHM affect CSD susceptibility:
- CACNA1A: CaV2.1 calcium channel
- ATP1A2: Na+/K+-ATPase pump
- SCN1A: Voltage-gated sodium channel

**Meningeal Nociception:**
Meningeal afferents are the pain fibers of headache:
- Innervated by ophthalmic division of trigeminal nerve
- C-fibers and A-delta fibers transmit pain
- Release CGRP, substance P, neurokinin A upon activation
- Dural mast cell degranulation contributes

**Central Modulation:**
Periaqueductal gray (PAG) dysfunction in migraine:
- PAG stimulation can trigger migraine
- PAG iron accumulation seen on MRI
- Connection to hypothalamic circuits (sleep, feeding)

**Chronification Mechanisms:**
Transition from episodic to chronic migraine (>15 days/month):
- Central sensitization of trigeminal nucleus caudalis
- Altered descending pain modulation
- Genetic susceptibility (COMT, MTHFR variants)
- Medication overuse accelerating process

**Emerging Therapeutics:**
- PACAP (pituitary adenylate cyclase-activating polypeptide) pathway inhibitors
- Ion channel modulators (TRPV1, TRPA1, acid-sensing channels)
- Glial cell modulators
- Non-invasive neuromodulation (sTMS, nVNS, remote electrical stimulation)

**Clinical Trial Design:**
- Primary endpoint: 50% responder rate (≥50% reduction in migraine days)
- Regulatory requirements: 2 positive Phase 3 trials
- Placebo response: 20-40% in acute, 30-50% in preventive trials
- Patient-reported outcomes: MIDAS, HIT-6 questionnaires`,
      keyTerms: [
        { term: 'Cortical spreading depression', definition: 'Propagating wave of neuronal depolarization underlying migraine aura' },
        { term: 'Periaqueductal gray', definition: 'Midbrain region involved in pain modulation, implicated in migraine pathogenesis' },
        { term: 'Trigeminal nucleus caudalis', definition: 'Brainstem nucleus receiving input from trigeminal and upper cervical nerves' },
      ],
    },
    clinical: {
      title: 'Headache: Clinical Reasoning and Differential Diagnosis',
      readingLevel: 6,
      content: `**Primary Headache Diagnosis (ICHD-3 Criteria):**

**Migraine Without Aura:**
A. At least 5 attacks lasting 4-72 hours
B. At least two of: unilateral, pulsating, moderate-severe, aggravated by routine activity
C. At least one of: nausea/vomiting OR photophobia/phonophobia
D. Not better accounted for by another diagnosis

**Tension-Type Headache:**
A. At least 10 episodes lasting 30 min-7 days
B. At least two of: bilateral, pressing/tightening, mild-moderate, not aggravated by routine activity
C. Both of: no nausea/vomiting, no more than one of photophobia or phonophobia

**Cluster Headache:**
A. At least 5 attacks of severe unilateral orbital/supraorbital/temporal pain lasting 15-180 minutes
B. Either or both of: ipsilateral conjunctival injection/lacrimation, nasal congestion/rhinorrhea, eyelid edema, forehead/facial sweating, miosis/ptosis, restlessness/agitation
C. Frequency: every other day to 8/day

**Thunderclap Headache Differential:**
"Worst headache of life" reaching maximum in <1 minute:
1. Subarachnoid hemorrhage (SAH) - CT negative → LP
2. Reversible cerebral vasoconstriction syndrome (RCVS)
3. Cervical artery dissection
4. Venous sinus thrombosis
5. Pheochromocytoma
6. Acute angle-closure glaucoma
7. Spontaneous intracranial hypotension

**Papilledema Workup:**
Headache with optic disc edema = emergency:
- MRI/MRV brain
- Lumbar puncture with opening pressure
- Evaluation for mass, venous sinus thrombosis, idiopathic intracranial hypertension

**Clinical Pearl: The SNOOP Red Flags**
- **S**ystemic symptoms (fever, weight loss)
- **N**eurologic signs (weakness, confusion)
- **O**nset sudden (thunderclap)
- **O**lder age (new onset >50)
- **P**attern change (progressive, different)
- Plus: Pregnancy, Papilledema, Precipitated by Valsalva/position

**Treatment Algorithms:**

**Acute Migraine (Outpatient):**
1. NSAIDs or acetaminophen (mild)
2. Triptans or gepants (moderate-severe)
3. Antiemetic (metoclopramide, prochlorperazine)
4. Consider dexamethasone to prevent recurrence

**Status Migrainosus (ED):**
- IV fluids
- IV metoclopramide + diphenhydramine
- IV magnesium
- IV dihydroergotamine or valproate
- Refractory: consider IV steroids, propofol, ketamine

**Prevention Indications:**
- ≥4 migraine days/month
- Significant disability
- Frequent use of acute medications
- Patient preference`,
      keyTerms: [
        { term: 'ICHD-3', definition: 'International Classification of Headache Disorders, 3rd edition - diagnostic gold standard' },
        { term: 'RCVS', definition: 'Reversible cerebral vasoconstriction syndrome - thunderclap headache cause' },
        { term: 'Status migrainosus', definition: 'Severe migraine attack lasting >72 hours' },
      ],
    },
  },
  quiz: [
    {
      id: 'neuro-h-1',
      question: 'Which type of headache is characterized by unilateral severe orbital pain with ipsilateral tearing and nasal congestion?',
      options: ['Migraine without aura', 'Tension-type headache', 'Cluster headache', 'Sinus headache'],
      correctAnswer: 2,
      explanation: 'Cluster headaches present with severe unilateral orbital/supraorbital pain accompanied by autonomic symptoms: conjunctival injection, lacrimation, nasal congestion, eyelid edema, and restlessness.',
    },
    {
      id: 'neuro-h-2',
      question: 'A 45-year-old presents with "the worst headache of my life" that peaked in 30 seconds. What is the most important diagnosis to rule out?',
      options: ['Migraine', 'Tension headache', 'Subarachnoid hemorrhage', 'Cluster headache'],
      correctAnswer: 2,
      explanation: 'Thunderclap headache reaching maximum intensity within seconds to a minute requires immediate evaluation for subarachnoid hemorrhage with CT and potentially lumbar puncture.',
    },
    {
      id: 'neuro-h-3',
      question: 'What neurotransmitter system do triptan medications target?',
      options: ['Dopamine', 'Serotonin (5-HT)', 'Norepinephrine', 'GABA'],
      correctAnswer: 1,
      explanation: 'Triptans are 5-HT₁B/₁D receptor agonists that cause vasoconstriction and inhibit trigeminal nerve activation.',
    },
    {
      id: 'neuro-h-4',
      question: 'Which finding is part of the ICHD-3 diagnostic criteria for migraine without aura?',
      options: ['Bilateral pain', 'Aggravation by routine activity', 'Duration 15 minutes to 3 hours', 'Response to NSAIDs'],
      correctAnswer: 1,
      explanation: 'Migraine criteria include: duration 4-72 hours, unilateral location, pulsating quality, moderate-severe intensity, AND aggravation by routine physical activity.',
    },
    {
      id: 'neuro-h-5',
      question: 'What is the mechanism of action of CGRP monoclonal antibodies in migraine prevention?',
      options: ['Vasoconstriction', 'Blocking CGRP or its receptor', 'Increasing serotonin', 'Muscle relaxation'],
      correctAnswer: 1,
      explanation: 'CGRP monoclonal antibodies (erenumab, fremanezumab, galcanezumab, eptinezumab) either block the CGRP receptor or bind CGRP itself, preventing its vasodilatory and inflammatory effects.',
    },
  ],
  references: [
    'Headache Classification Committee of the International Headache Society (IHS). The International Classification of Headache Disorders, 3rd edition. Cephalalgia. 2018.',
    'Goadsby PJ, et al. Pathophysiology of Migraine: A Disorder of Sensory Processing. Physiol Rev. 2017.',
    'Amin FM, et al. Migraine and cluster headache - the evidence. Nat Rev Neurol. 2018.',
    'Dodick DW. Migraine. Lancet. 2018.',
  ],
};
