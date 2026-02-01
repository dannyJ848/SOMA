import { EducationalContent } from '../../types';

export const generalizedAnxietyDisorder: EducationalContent = {
  id: 'psychiatry-gad',
  type: 'condition',
  name: 'Generalized Anxiety Disorder',
  nameEs: 'Trastorno de Ansiedad Generalizada',
  alternateNames: ['GAD', 'Chronic Worry Disorder'],

  levels: {
    1: {
      level: 1,
      summary: 'Generalized anxiety disorder is when a person worries excessively about many different things nearly every day for months, and the worry feels impossible to control.',
      explanation:
        '## The Worry Machine That Will Not Turn Off\n\n' +
        'Everyone worries sometimes. But with **GAD**, the worry is constant and covers almost everything -- school, health, money, family, ' +
        'the future -- even when things are going well. The worry machine runs 24/7.\n\n' +
        '**Physical symptoms often include:**\n' +
        '- Muscle tension (especially neck, shoulders, jaw)\n' +
        '- Trouble sleeping or restless sleep\n' +
        '- Feeling restless, keyed up, or on edge\n' +
        '- Getting tired easily\n' +
        '- Difficulty concentrating -- mind going blank\n' +
        '- Irritability\n\n' +
        'GAD is very treatable with therapy (especially CBT) and/or medication.',
      keyTerms: [
        { term: 'Generalized anxiety disorder', definition: 'A condition where excessive, uncontrollable worry about many topics occurs most days for at least 6 months', pronunciation: 'JEN-er-al-ized ang-ZY-eh-tee' },
      ],
      analogies: ['GAD is like a car alarm that goes off constantly -- not because of real danger, but because the sensor is set too sensitive.'],
      patientCounselingPoints: [
        'GAD is not just "being a worrier" -- it is a medical condition with effective treatments.',
        'Therapy (CBT) teaches skills to manage worry that last a lifetime.',
        'Regular exercise, good sleep habits, and limiting caffeine all help reduce anxiety.',
      ],
    },

    2: {
      level: 2,
      summary: 'GAD requires excessive worry for 6+ months with 3+ somatic symptoms. First-line treatment is SSRIs/SNRIs and CBT. Buspirone is an alternative without dependence risk. Benzodiazepines are reserved for short-term bridge therapy.',
      explanation:
        '## DSM-5 Criteria & Pharmacotherapy\n\n' +
        '**DSM-5 Criteria:**\n' +
        '- Excessive anxiety/worry about multiple domains, more days than not, for >= 6 months\n' +
        '- Difficulty controlling the worry\n' +
        '- 3+ of: restlessness, fatigue, concentration difficulty, irritability, muscle tension, sleep disturbance\n' +
        '- Causes significant distress or functional impairment\n\n' +
        '**Epidemiology:** Lifetime prevalence ~6%; F:M 2:1; median onset late 20s-30s; chronic course.\n\n' +
        '**Pharmacotherapy:**\n' +
        '- **SSRIs:** Sertraline, escitalopram, paroxetine. Start low (half typical dose). Full response 8-12 weeks.\n' +
        '- **SNRIs:** Venlafaxine XR, duloxetine. FDA-approved for GAD.\n' +
        '- **Buspirone:** 5-HT1A partial agonist. No dependence/tolerance. Takes 2-4 weeks. Good augmentation option.\n' +
        '- **Benzodiazepines:** Rapid relief but reserve for short-term use. Risk of dependence, cognitive impairment. ' +
        'Clonazepam preferred over alprazolam (longer half-life, lower abuse potential).\n' +
        '- **Hydroxyzine:** Antihistamine for acute anxiety; non-addictive.\n\n' +
        '**CBT for GAD:** Cognitive restructuring (challenging catastrophizing), worry exposure, relaxation training, behavioral activation.',
      keyTerms: [
        { term: 'Buspirone', definition: '5-HT1A partial agonist for GAD; no dependence risk but requires 2-4 weeks for effect', pronunciation: 'byoo-SPYE-rone' },
        { term: 'Catastrophizing', definition: 'Cognitive distortion of assuming the worst possible outcome; a primary CBT target in GAD' },
        { term: 'GAD-7', definition: 'Seven-item screening questionnaire for generalized anxiety; score >= 10 suggests moderate anxiety' },
      ],
      clinicalNotes: 'Start SSRIs/SNRIs at half the typical antidepressant dose -- GAD patients are more sensitive to activating side effects. Benzodiazepines should be time-limited (2-4 weeks) and avoided in patients with substance use history. GAD has high comorbidity with MDD (~60%), other anxiety disorders, and somatic symptom disorders.',
    },

    3: {
      level: 3,
      summary: 'GAD neurobiology involves amygdala-PFC circuit imbalance with prefrontal hypoactivation, GABAergic deficits, excessive cortico-limbic threat processing, and worry as a cognitive avoidance strategy that paradoxically maintains anxiety.',
      explanation:
        '## Neurocircuitry & Cognitive Models\n\n' +
        '**Amygdala-PFC Imbalance:**\n' +
        'Amygdala hyperactivation to uncertain/ambiguous stimuli (not just explicit threats). ' +
        'Reduced vmPFC and dlPFC top-down inhibition of amygdala. Impaired discrimination between safe and threatening contexts.\n\n' +
        '**GABAergic Deficits:**\n' +
        'MRS studies show reduced GABA levels in occipital and prefrontal cortex. Reduced benzodiazepine binding on PET. ' +
        'Alpha-2/3 GABA-A subunit-selective agents under development for anxiolysis without sedation.\n\n' +
        '**Intolerance of Uncertainty Model (Dugas):**\n' +
        'GAD is driven by intolerance of uncertainty (IU) -- the tendency to react negatively to uncertain situations. ' +
        'Worry serves as a maladaptive coping strategy for uncertainty. IU is the strongest predictor of GAD severity.\n\n' +
        '**Cognitive Avoidance Theory (Borkovec):**\n' +
        'Worry is predominantly verbal-linguistic (abstract) rather than imagistic. This suppresses autonomic arousal, ' +
        'providing negative reinforcement. But it prevents emotional processing of feared outcomes, maintaining the anxiety cycle. ' +
        'Explains why relaxation paradoxically increases anxiety initially ("relaxation-induced anxiety").\n\n' +
        '**HPA Axis:** Flatter diurnal cortisol curve (elevated evening cortisol) rather than the acute HPA activation seen in MDD.',
      keyTerms: [
        { term: 'Intolerance of uncertainty', definition: 'Dispositional tendency to react negatively to uncertain situations; the core cognitive vulnerability in GAD that drives excessive worry', relatedTerms: ['IU'] },
        { term: 'Cognitive avoidance', definition: 'Theory that worry is a verbal-linguistic strategy that suppresses emotional processing, providing temporary relief but maintaining anxiety long-term' },
        { term: 'Relaxation-induced anxiety', definition: 'Paradoxical increase in anxiety during relaxation; occurs in GAD patients whose worry suppresses arousal, making its absence distressing' },
      ],
      clinicalNotes: 'GAD patients often present to primary care with somatic complaints (headaches, GI symptoms, muscle pain) rather than reporting anxiety. Comorbid MDD is the rule rather than the exception. The IU model has strong empirical support and has led to targeted CBT protocols (Dugas protocol) that specifically address uncertainty tolerance.',
    },

    4: {
      level: 4,
      summary: 'Advanced GAD understanding includes default mode network hyperconnectivity driving worry, neuroinflammatory contributions, predictive processing models of aberrant uncertainty estimation, and emerging therapies including glutamate modulators and digital CBT.',
      explanation:
        '## Advanced Neurobiology & Novel Interventions\n\n' +
        '**Default Mode Network in GAD:**\n' +
        'DMN hyperconnectivity correlates with self-referential worry. Impaired DMN deactivation during external task engagement. ' +
        'Failure to shift from internal rumination to external task-focused processing.\n\n' +
        '**Predictive Processing Framework:**\n' +
        'GAD reflects biased precision weighting: overestimation of threat probability, excessive prediction error for ambiguous stimuli, ' +
        'and high confidence in negative priors. Computational modeling reveals elevated learning rates for threat cues ' +
        'and impaired extinction of threat associations.\n\n' +
        '**Neuroinflammation:**\n' +
        'Elevated peripheral inflammatory markers (IL-6, TNF-alpha) in GAD. Microglial activation in PFC and amygdala on TSPO-PET. ' +
        'Inflammation may impair GABA synthesis and reduce neuroplasticity.\n\n' +
        '**Emerging Pharmacotherapies:**\n' +
        '- **Pregabalin:** Alpha-2-delta calcium channel ligand. FDA-approved for GAD in Europe (not US). Anxiolytic without SSRI side effects.\n' +
        '- **TAAR1 agonists:** Ulotaront showed promise for GAD in Phase II trials.\n' +
        '- **Psilocybin:** Phase II trials for GAD; may reset rigid threat-focused cognitive patterns.\n' +
        '- **Digital therapeutics:** FDA-authorized prescription digital CBT apps (Freespira for panic; others in development for GAD).\n' +
        '- **Neurofeedback:** Amygdala downregulation via real-time fMRI feedback.',
      keyTerms: [
        { term: 'Precision weighting', definition: 'Computational parameter reflecting the brain\'s confidence in sensory signals vs. prior expectations; aberrantly elevated for threat signals in GAD' },
        { term: 'Pregabalin', definition: 'Alpha-2-delta calcium channel ligand with anxiolytic properties; approved for GAD in Europe; binds voltage-gated calcium channels to reduce glutamate release', pronunciation: 'preh-GAB-ah-lin' },
        { term: 'TAAR1 agonist', definition: 'Trace amine-associated receptor 1 agonist -- novel mechanism modulating monoamine neurotransmission; ulotaront under investigation for GAD' },
      ],
      clinicalNotes: 'Pregabalin has abuse potential and is a Schedule V controlled substance in the US. Its mechanism is distinct from benzodiazepines and may be useful for SSRI non-responders. Computational psychiatry approaches are identifying predictive biomarkers for CBT vs. pharmacotherapy response. Digital CBT has comparable efficacy to face-to-face CBT for mild-moderate anxiety in clinical trials.',
    },

    5: {
      level: 5,
      summary: 'Frontier GAD research encompasses genetic architecture (GWAS identifying SATB1, neural development genes), transdiagnostic network models, gut-brain axis interventions (psychobiotics), closed-loop anxiolytic neuromodulation, and RDoC dimensional frameworks for anxiety.',
      explanation:
        '## Frontier Research\n\n' +
        '**Genetics:**\n' +
        'GAD GWAS (Levey et al., 2020) identifies loci near SATB1 (chromatin remodeling), ESR1 (estrogen receptor), and neurodevelopmental genes. ' +
        'Significant genetic correlation with MDD (r~0.8), suggesting shared biological substrate. ' +
        'SNP heritability ~20% (much lower than bipolar or schizophrenia).\n\n' +
        '**Network Theory of Psychopathology:**\n' +
        'GAD symptoms viewed as causally interconnected nodes rather than reflections of a latent disease. ' +
        'Central symptoms (uncontrollability of worry, muscle tension) are high-connectivity "hub" nodes. ' +
        'Personalized network models identify individual-specific treatment targets.\n\n' +
        '**Gut-Brain Axis:**\n' +
        'Altered microbiome composition in GAD (reduced Lachnospiraceae diversity). ' +
        'Psychobiotics (Lactobacillus helveticus, Bifidobacterium longum) show modest anxiolytic effects. ' +
        'Vagal tone (heart rate variability) as a biomarker of autonomic flexibility and treatment response.\n\n' +
        '**Closed-Loop Neuromodulation:**\n' +
        'Wearable transcutaneous vagus nerve stimulation (tVNS) triggered by physiological anxiety markers (heart rate, skin conductance). ' +
        'Just-in-time adaptive interventions combining digital phenotyping with on-demand micro-interventions.\n\n' +
        '**RDoC Integration:** GAD maps primarily to "Potential Threat" (sustained anxiety) construct within the Negative Valence Systems domain.',
      keyTerms: [
        { term: 'Network theory of psychopathology', definition: 'Framework viewing symptoms as causally interconnected nodes rather than passive indicators of a latent disease; identifies hub symptoms as priority treatment targets' },
        { term: 'Psychobiotics', definition: 'Probiotic organisms (Lactobacillus, Bifidobacterium) that produce mental health benefits via gut-brain axis modulation', pronunciation: 'SY-koh-by-AH-tiks' },
        { term: 'Transcutaneous vagus nerve stimulation', definition: 'Non-invasive wearable device stimulating the auricular branch of the vagus nerve; emerging anxiolytic with closed-loop adaptive applications', relatedTerms: ['tVNS'] },
      ],
      clinicalNotes: 'The high genetic correlation between GAD and MDD supports transdiagnostic treatment approaches. Heart rate variability (HRV) is emerging as a clinically accessible biomarker -- low HRV predicts poorer treatment response and may guide treatment intensity. Psychobiotic evidence is preliminary; large RCTs are needed before clinical recommendation.',
    },
  },

  media: [],
  citations: [
    { id: 'dsm5-tr-gad', type: 'textbook', title: 'DSM-5-TR: Generalized Anxiety Disorder', authors: ['American Psychiatric Association'], source: 'American Psychiatric Publishing', license: 'Proprietary' },
    { id: 'dugas-2004', type: 'article', title: 'Role of intolerance of uncertainty in the etiology of GAD', authors: ['Michel J. Dugas', 'Mark H. Freeston'], source: 'Cognitive Therapy and Research' },
  ],
  crossReferences: [
    { targetId: 'psychiatry-panic-disorder', targetType: 'condition', relationship: 'related', label: 'Panic Disorder (comorbidity)' },
    { targetId: 'psychiatry-mdd', targetType: 'condition', relationship: 'related', label: 'Major Depressive Disorder (60% comorbidity)' },
    { targetId: 'psychiatry-antidepressants', targetType: 'topic', relationship: 'related', label: 'Antidepressants (SSRIs/SNRIs for GAD)' },
  ],
  tags: {
    systems: ['nervous'],
    topics: ['psychiatry', 'psychopharmacology', 'behavioral science'],
    keywords: ['GAD', 'generalized anxiety', 'worry', 'buspirone', 'SSRI', 'CBT', 'intolerance of uncertainty', 'GABA'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['psychiatry', 'medicine'] },
  },
  createdAt: '2025-01-30',
  updatedAt: '2025-01-30',
  version: 1,
  status: 'published',
  contributors: ['SOMA Medical Education Team'],
};
