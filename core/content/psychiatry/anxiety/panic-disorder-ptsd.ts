import { EducationalContent } from '../../types';

export const panicDisorderAndPtsd: EducationalContent = {
  id: 'psychiatry-panic-ptsd',
  type: 'condition',
  name: 'Panic Disorder & PTSD',
  nameEs: 'Trastorno de Panico y TEPT',
  alternateNames: ['Panic Attacks', 'Post-Traumatic Stress Disorder', 'Trauma-Related Disorders'],

  levels: {
    1: {
      level: 1,
      summary: 'Panic disorder causes sudden, unexpected waves of intense fear with physical symptoms like a racing heart and shortness of breath. PTSD happens after a terrifying event and causes flashbacks, nightmares, and constant vigilance.',
      explanation:
        '## When Fear Takes Over\n\n' +
        '### Panic Disorder\n' +
        'A **panic attack** is a sudden wave of intense fear that hits without warning. Your heart pounds, you cannot breathe, ' +
        'you feel dizzy, and you might think you are having a heart attack or dying. It peaks in about 10 minutes and usually passes within 30 minutes.\n\n' +
        'People with **panic disorder** have repeated panic attacks and live in constant fear of the next one. ' +
        'They may start avoiding places where attacks have occurred.\n\n' +
        '### PTSD\n' +
        'After experiencing something truly terrifying (violence, an accident, combat, assault), ' +
        'the brain can get "stuck" on the event:\n' +
        '- **Flashbacks:** Feeling like the event is happening again\n' +
        '- **Nightmares** about the event\n' +
        '- **Avoidance:** Staying away from anything that reminds you of what happened\n' +
        '- **Hypervigilance:** Always feeling on edge, startling easily\n\n' +
        'Both conditions are very treatable with therapy and medication.',
      keyTerms: [
        { term: 'Panic attack', definition: 'A sudden episode of intense fear with physical symptoms like pounding heart, shortness of breath, and dizziness, peaking within 10 minutes' },
        { term: 'PTSD', definition: 'Post-Traumatic Stress Disorder -- a condition where the brain stays stuck on a terrifying event, causing flashbacks, nightmares, and constant vigilance' },
        { term: 'Flashback', definition: 'A vivid re-experiencing of a traumatic event where you feel like it is happening all over again' },
      ],
      analogies: [
        'A panic attack is like a false fire alarm in your body -- all the alarm bells ring at maximum volume even though there is no fire.',
        'PTSD is like having a movie of the worst moment of your life playing on an endless loop you cannot pause.',
      ],
      patientCounselingPoints: [
        'Panic attacks feel terrifying but are not dangerous -- your body is having a false alarm.',
        'PTSD is not a sign of weakness; it is a normal brain response to an abnormal event.',
        'Effective treatments exist -- you do not have to suffer in silence.',
      ],
    },

    2: {
      level: 2,
      summary: 'Panic disorder requires recurrent unexpected panic attacks plus persistent concern or behavioral change. PTSD requires trauma exposure plus symptoms in 4 clusters (intrusion, avoidance, negative cognition, arousal) for >1 month. SSRIs are first-line for both.',
      explanation:
        '## DSM-5 Criteria & Treatment\n\n' +
        '**Panic Disorder:**\n' +
        'Recurrent unexpected panic attacks (4+ symptoms: palpitations, sweating, trembling, dyspnea, choking, chest pain, ' +
        'nausea, dizziness, chills/heat, paresthesias, derealization, fear of losing control, fear of dying). ' +
        'Plus 1+ month of persistent concern about future attacks OR maladaptive behavioral change.\n' +
        'Often comorbid with **agoraphobia** (fear of situations where escape is difficult).\n\n' +
        '**PTSD:**\n' +
        'Exposure to actual/threatened death, serious injury, or sexual violence. Four symptom clusters:\n' +
        '1. Intrusion: flashbacks, nightmares, distressing memories\n' +
        '2. Avoidance: of trauma-related thoughts/situations\n' +
        '3. Negative cognitions/mood: distorted blame, persistent negative emotions, detachment\n' +
        '4. Arousal: hypervigilance, exaggerated startle, sleep disturbance, irritability\n' +
        'Duration > 1 month. Specify delayed onset if > 6 months post-trauma.\n\n' +
        '**Treatment:**\n' +
        '- **Panic:** SSRIs (sertraline, paroxetine), CBT with interoceptive exposure, short-term benzodiazepines\n' +
        '- **PTSD:** SSRIs (sertraline, paroxetine -- only FDA-approved medications), trauma-focused CBT, ' +
        'Prolonged Exposure (PE), Cognitive Processing Therapy (CPT), EMDR. Prazosin for nightmares.',
      keyTerms: [
        { term: 'Agoraphobia', definition: 'Fear of situations where escape is difficult; often comorbid with panic disorder', pronunciation: 'AG-or-ah-FOH-bee-ah' },
        { term: 'Interoceptive exposure', definition: 'CBT technique deliberately inducing feared physical sensations (hyperventilation, spinning) to extinguish the conditioned fear response in panic disorder' },
        { term: 'Prolonged Exposure', definition: 'Evidence-based PTSD therapy involving repeated revisiting of trauma memory (imaginal exposure) and approaching avoided situations (in vivo exposure)' },
        { term: 'EMDR', definition: 'Eye Movement Desensitization and Reprocessing -- structured therapy using bilateral stimulation during trauma memory processing', pronunciation: 'E-M-D-R' },
      ],
      clinicalNotes: 'Sertraline and paroxetine are the only FDA-approved pharmacotherapies for PTSD. Benzodiazepines are contraindicated in PTSD (impair fear extinction and worsen outcomes). Prazosin (alpha-1 antagonist, 1-15 mg at bedtime) is effective for trauma-related nightmares. Always screen for comorbid substance use and suicidality.',
    },

    3: {
      level: 3,
      summary: 'Panic disorder involves a hypersensitive brainstem suffocation alarm (CO2 chemoreceptors), interoceptive conditioning via the insular cortex, and aberrant noradrenergic signaling from the locus coeruleus. PTSD involves amygdala hyperactivation, vmPFC hypoactivation, hippocampal-dependent context processing deficits, and noradrenergic memory consolidation.',
      explanation:
        '## Neurocircuitry\n\n' +
        '**Panic Disorder:**\n' +
        '- Suffocation false alarm theory (Klein): Hypersensitive brainstem CO2/pH chemoreceptors trigger panic\n' +
        '- Insular cortex hyperactivation: Misprocesses interoceptive signals as dangerous\n' +
        '- Interoceptive conditioning: Body sensations (tachycardia) become conditioned stimuli for panic\n' +
        '- Locus coeruleus: Excessive NE release drives autonomic activation\n' +
        '- Periaqueductal gray activation: Generates freezing and respiratory changes\n\n' +
        '**PTSD:**\n' +
        '- Amygdala hyperactivation to trauma cues (and generalized threat)\n' +
        '- vmPFC hypoactivation: Impaired top-down fear extinction\n' +
        '- Hippocampal volume reduction and dysfunction: Impaired contextual discrimination (fear generalizes beyond trauma context)\n' +
        '- LC-NE hyperactivity: Drives hyperarousal, hypervigilance, enhanced fear memory consolidation via beta-adrenergic receptors\n' +
        '- Noradrenergic facilitation of amygdala memory consolidation explains why trauma memories are so vivid and intrusive\n\n' +
        '**Fear Extinction (basis of exposure therapy):**\n' +
        'Creates a new inhibitory memory (vmPFC -> amygdala) rather than erasing the original fear. Context-dependent and sleep-dependent. ' +
        'D-cycloserine (partial NMDA agonist) given before sessions enhances extinction learning in some trials.',
      keyTerms: [
        { term: 'Suffocation false alarm', definition: 'Klein\'s theory that panic attacks result from hypersensitive brainstem CO2 chemoreceptors triggering a suffocation alarm response' },
        { term: 'Fear extinction', definition: 'Formation of a new inhibitory memory that suppresses conditioned fear; requires vmPFC-mediated amygdala inhibition; the neural basis of exposure therapy' },
        { term: 'Locus coeruleus', definition: 'Brainstem NE nucleus hyperactive in both panic disorder and PTSD; drives autonomic arousal and enhances fear memory consolidation', pronunciation: 'LOH-kus seh-ROO-lee-us' },
      ],
      clinicalNotes: 'PTSD neuroimaging consistently shows the triad: amygdala hyperactivation, vmPFC hypoactivation, hippocampal volume reduction. D-cycloserine augmentation of exposure therapy shows mixed results -- timing relative to exposure session is critical (must be given before, not after). Sleep deprivation impairs extinction consolidation, which may explain why insomnia worsens PTSD.',
    },

    4: {
      level: 4,
      summary: 'Advanced PTSD neurobiology includes memory reconsolidation as a therapeutic target, neuroimmune mechanisms (NLRP3 inflammasome, microglial priming), the endocannabinoid system in fear regulation, and epigenetic transmission of trauma vulnerability (NR3C1 methylation).',
      explanation:
        '## Advanced Mechanisms & Therapeutics\n\n' +
        '**Memory Reconsolidation:**\n' +
        'Retrieved memories enter a labile state requiring protein synthesis for restabilization (~6-hour window). ' +
        'Propranolol during reactivation can weaken emotional intensity of trauma memories (Brunet protocol). ' +
        'Prediction error during retrieval is required to trigger reconsolidation. ' +
        'MDMA-assisted therapy may facilitate reconsolidation with reduced amygdala reactivity.\n\n' +
        '**Neuroimmune Mechanisms:**\n' +
        'Trauma activates NLRP3 inflammasome via DAMPs -> IL-1beta/IL-18 release -> microglial priming. ' +
        'Primed microglia produce exaggerated inflammatory responses to subsequent stress. ' +
        'PTSD associated with shortened telomeres and accelerated epigenetic aging (GrimAge).\n\n' +
        '**Endocannabinoid System:**\n' +
        'CB1 signaling in BLA is required for fear extinction. PTSD shows reduced anandamide tone. ' +
        'FAAH inhibitors enhance extinction. CBD acts via 5-HT1A and FAAH inhibition.\n\n' +
        '**Epigenetics:**\n' +
        'Early-life trauma increases NR3C1 (glucocorticoid receptor) promoter methylation in hippocampus, ' +
        'reducing GR expression and impairing HPA negative feedback. Replicated in suicide victims with childhood abuse. ' +
        'Transgenerational transmission of epigenetic marks.\n\n' +
        '**Stellate Ganglion Block:**\n' +
        'Local anesthetic injection at the cervical sympathetic chain. Reduces NE-mediated arousal. ' +
        'Emerging evidence for rapid PTSD symptom reduction. Mechanism may involve resetting sympathetic tone.',
      keyTerms: [
        { term: 'Memory reconsolidation', definition: 'Process by which reactivated memories become labile and require restabilization; provides a therapeutic window to modify traumatic memories' },
        { term: 'NLRP3 inflammasome', definition: 'Multiprotein complex activated by stress-related DAMPs that triggers IL-1beta/IL-18 neuroinflammatory cascades in PTSD', pronunciation: 'N-L-R-P-three' },
        { term: 'Stellate ganglion block', definition: 'Injection of local anesthetic at cervical sympathetic chain; emerging treatment for PTSD that may reset autonomic hyperactivation' },
        { term: 'NR3C1 methylation', definition: 'Epigenetic silencing of the glucocorticoid receptor gene by childhood trauma; impairs HPA axis regulation and increases PTSD vulnerability' },
      ],
      clinicalNotes: 'MDMA-assisted therapy Phase III (MAPP1/MAPP2): 67-71% no longer met PTSD criteria at follow-up, but the 2024 FDA advisory committee raised methodological concerns (functional unblinding). Stellate ganglion block is being adopted at VA centers with promising open-label data. The reconsolidation window requires strict timing protocols not yet standardized for clinical practice.',
    },

    5: {
      level: 5,
      summary: 'Frontier research encompasses MDMA-assisted therapy regulatory considerations, closed-loop neuromodulation for PTSD (tFUS, adaptive DBS), psilocybin-enhanced extinction, biomarker-driven prevention (neuropeptide Y, cortisol trajectory), and CRISPR-based epigenetic reversal of stress-induced gene silencing.',
      explanation:
        '## Frontier Research\n\n' +
        '**MDMA-Assisted Therapy:**\n' +
        'Mechanism: serotonin/NE/DA release + oxytocin -> reduced amygdala reactivity + enhanced vmPFC-amygdala connectivity. ' +
        'Creates optimal conditions for trauma processing and reconsolidation. If approved, requires specialized training, ' +
        'certified settings, 3 sessions with preparation/integration. Regulatory pathway uncertain after 2024 FDA advisory vote.\n\n' +
        '**Closed-Loop Neuromodulation:**\n' +
        'Transcranial focused ultrasound (tFUS) can target amygdala with millimeter precision (TMS cannot reach deep structures). ' +
        'Adaptive DBS: first-in-human studies at UCSF using biomarker-driven stimulation of ventral capsule. ' +
        'Real-time fMRI neurofeedback for amygdala downregulation training.\n\n' +
        '**Biomarker-Driven Prevention:**\n' +
        'Low neuropeptide Y (NPY) in combat soldiers predicts PTSD development. ' +
        'Acute cortisol trajectory post-trauma: low cortisol acutely paradoxically predicts PTSD (impaired containment of stress response). ' +
        'Machine learning on emergency department biomarker panels predicts PTSD risk within 24 hours of trauma.\n\n' +
        '**Epigenetic Therapies:**\n' +
        'CRISPR-dCas9 fused with demethylation enzymes (TET1) to reverse NR3C1 methylation at FKBP5 and GR promoters. ' +
        'HDAC inhibitors (vorinostat) enhance fear extinction in animal models. ' +
        'Preclinical only but represents the ultimate precision approach.',
      keyTerms: [
        { term: 'MDMA-assisted therapy', definition: 'Therapeutic paradigm combining MDMA with structured psychotherapy for PTSD; 67-71% clinically meaningful response in Phase III trials', pronunciation: 'M-D-M-A' },
        { term: 'Transcranial focused ultrasound', definition: 'Non-invasive neuromodulation targeting deep brain structures (amygdala) with millimeter precision; emerging for anxiety and PTSD', relatedTerms: ['tFUS'] },
        { term: 'Neuropeptide Y', definition: 'Endogenous anxiolytic neuropeptide; low pre-deployment levels predict PTSD development; a potential preventive biomarker and therapeutic target' },
      ],
      clinicalNotes: 'NPY-based risk stratification could enable targeted prevention in high-risk populations (military, first responders). MDMA-assisted therapy, if approved, will require new clinical infrastructure (trained therapist dyads, 8-hour session capacity). tFUS is in early trials but represents a paradigm shift for non-invasive deep-brain targeting. CRISPR epigenetic editing for psychiatric conditions is at least a decade from clinical application.',
    },
  },

  media: [],
  citations: [
    { id: 'dsm5-tr-panic-ptsd', type: 'textbook', title: 'DSM-5-TR: Panic Disorder and PTSD', authors: ['American Psychiatric Association'], source: 'American Psychiatric Publishing', license: 'Proprietary' },
    { id: 'maps-2021', type: 'article', title: 'MDMA-assisted therapy for severe PTSD', authors: ['Jennifer M. Mitchell et al.'], source: 'Nature Medicine', url: 'https://doi.org/10.1038/s41591-021-01336-3' },
  ],
  crossReferences: [
    { targetId: 'psychiatry-gad', targetType: 'condition', relationship: 'related', label: 'Generalized Anxiety Disorder (comorbidity)' },
    { targetId: 'psychiatry-mdd', targetType: 'condition', relationship: 'related', label: 'Major Depressive Disorder (comorbidity)' },
    { targetId: 'psychiatry-antidepressants', targetType: 'topic', relationship: 'related', label: 'Antidepressants (SSRIs for panic/PTSD)' },
  ],
  tags: {
    systems: ['nervous', 'endocrine', 'immune'],
    topics: ['psychiatry', 'psychopharmacology', 'neuroscience', 'trauma'],
    keywords: ['panic disorder', 'PTSD', 'panic attack', 'agoraphobia', 'trauma', 'EMDR', 'exposure therapy', 'MDMA', 'fear extinction', 'prazosin'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['psychiatry', 'medicine', 'emergency-medicine'] },
  },
  createdAt: '2025-01-30',
  updatedAt: '2025-01-30',
  version: 1,
  status: 'published',
  contributors: ['SOMA Medical Education Team'],
};
