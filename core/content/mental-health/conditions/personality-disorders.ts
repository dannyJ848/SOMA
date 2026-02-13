/**
 * Personality Disorders - Patient Education Content
 *
 * Comprehensive education about personality disorders including
 * clusters A, B, and C, with emphasis on treatability and recovery.
 */

import { EducationalContent } from '../../types';

export const personalityDisordersContent: EducationalContent = {
  id: 'mental-health-personality-disorders',
  type: 'condition',
  name: 'Personality Disorders',
  alternateNames: ['Borderline Personality Disorder', 'BPD', 'Antisocial Personality Disorder', 'Narcissistic Personality Disorder'],

  levels: {
    1: {
      level: 1,
      summary: 'Personality disorders are conditions that affect how people think about themselves and others, leading to problems in relationships and daily life. They are treatable with the right help.',
      explanation: `**What Are Personality Disorders?**

Everyone has a personality - the way we think, feel, and behave. Personality disorders happen when these patterns become rigid and cause significant problems in life.

**Key Points:**
- These are real medical conditions, not character flaws
- They usually start in adolescence or early adulthood
- They affect relationships, work, and self-image
- They are TREATABLE

**Types of Personality Disorders:**

**Cluster A (Odd/Eccentric):**
- Paranoid: Deep distrust of others
- Schizoid: Preference for being alone, limited emotions
- Schizotypal: Unusual beliefs, odd behavior, discomfort with closeness

**Cluster B (Dramatic/Emotional):**
- Antisocial: Disregard for rules and others' rights
- Borderline: Unstable relationships, emotions, and self-image
- Histrionic: Excessive emotion-seeking, need for attention
- Narcissistic: Need for admiration, lack of empathy

**Cluster C (Anxious/Fearful):**
- Avoidant: Extreme shyness and fear of rejection
- Dependent: Excessive need to be taken care of
- Obsessive-Compulsive: Rigid rules, perfectionism (different from OCD)

**Borderline Personality Disorder (Most Common):**
- Intense and unstable relationships
- Fear of abandonment
- Rapidly changing emotions
- Impulsive behaviors
- Unstable sense of self
- Self-harm or suicidal thoughts

**Treatment:**
- **Therapy**: Especially DBT for borderline personality disorder
- **Medication**: Can help with specific symptoms
- **Support**: Family education, support groups

Recovery is possible. Many people with personality disorders learn to manage their symptoms and build fulfilling lives.`,
      keyTerms: [
        { term: 'personality disorder', definition: 'A condition where patterns of thinking and behaving cause significant problems in life' },
        { term: 'borderline personality disorder', definition: 'A condition involving unstable emotions, relationships, and self-image' },
        { term: 'DBT', definition: 'Dialectical Behavior Therapy - an effective treatment for borderline personality disorder' },
        { term: 'cluster', definition: 'A grouping of personality disorders with similar features' },
      ],
      analogies: [
        'Personality patterns in personality disorders are like deeply worn paths in a forest - hard to change but not impossible.',
        'DBT is like learning a new language for emotions and relationships.',
        'Recovery is like building new paths while the old ones gradually become overgrown.',
      ],
      examples: [
        'Someone with borderline personality disorder might have intense relationships that quickly shift between idealizing and devaluing the other person.',
        'A person with avoidant personality disorder might desperately want friends but avoid social situations due to fear of rejection.',
        'Someone with narcissistic personality disorder might react very strongly to criticism that others would shrug off.',
      ],
    },
    2: {
      level: 2,
      summary: 'Personality disorders involve enduring patterns of inner experience and behavior that deviate from cultural norms, causing distress and impairment. BPD is most common and most treatable. DBT is first-line for BPD; other therapies effective for different personality disorders.',
      explanation: `**Understanding Personality Disorders:**

Personality disorders are characterized by enduring, inflexible patterns of thinking, feeling, and behaving that deviate from cultural expectations and cause significant problems in functioning and relationships.

**General Criteria:**
- Pattern affects cognition, affectivity, interpersonal functioning, and impulse control
- Pattern is inflexible and pervasive across situations
- Leads to significant distress or impairment
- Pattern is stable and of long duration (adolescence or early adulthood onset)
- Not better explained by another mental disorder, substance, or medical condition

**Cluster A (Odd/Eccentric):**

*Paranoid PD:*
- Pervasive distrust and suspicion
- Interprets others' motives as malicious
- Reluctant to confide due to fear of betrayal

*Schizoid PD:*
- Detachment from social relationships
- Limited emotional expression
- Prefers solitary activities

*Schizotypal PD:*
- Social and interpersonal deficits
- Odd beliefs, magical thinking
- Unusual perceptions
- Eccentric behavior

**Cluster B (Dramatic/Emotional):**

*Antisocial PD:*
- Disregard for and violation of others' rights
- Deceitfulness, impulsivity
- Lack of remorse
- Requires evidence of conduct disorder before age 15

*Borderline PD:*
- Unstable relationships, self-image, and affect
- Fear of abandonment
- Impulsivity
- Chronic emptiness
- Self-harm, suicidal behavior
- Dissociation or paranoia under stress

*Histrionic PD:*
- Excessive emotionality and attention-seeking
- Uncomfortable when not center of attention
- Rapidly shifting emotions

*Narcissistic PD:*
- Grandiosity, need for admiration
- Lack of empathy
- Sense of entitlement
- Exploitative relationships

**Cluster C (Anxious/Fearful):**

*Avoidant PD:*
- Social inhibition
- Feelings of inadequacy
- Hypersensitivity to criticism

*Dependent PD:*
- Excessive need to be taken care of
- Submissive, clinging behavior
- Fear of separation

*Obsessive-Compulsive PD:*
- Preoccupation with orderliness, perfectionism, control
- Rigid and stubborn
- Different from OCD

**Treatment:**

*Borderline PD (Most Evidence):*
- Dialectical Behavior Therapy (DBT): Gold standard
- Mentalization-Based Treatment (MBT)
- Transference-Focused Psychotherapy (TFP)
- Schema Therapy

*Other Personality Disorders:*
- Psychodynamic therapy
- Cognitive behavioral approaches
- Schema therapy
- Group therapy

*Medications:*
- No FDA-approved medications for personality disorders
- Treat target symptoms (mood instability, impulsivity, psychotic features)
- SSRIs, mood stabilizers, low-dose antipsychotics`,
      keyTerms: [
        { term: 'DBT', definition: 'Dialectical Behavior Therapy - combines CBT with mindfulness, emotional regulation' },
        { term: 'mentalization', definition: 'Understanding behavior in terms of mental states (thoughts, feelings)' },
        { term: 'splitting', definition: 'Viewing people as all good or all bad, common in BPD' },
        { term: 'schema', definition: 'Deep-seated patterns of thinking about self and others' },
        { term: 'affective instability', definition: 'Rapid, intense mood changes' },
      ],
      analogies: [
        'Splitting is like seeing the world in black and white without grays.',
        'DBT skills are like tools in a toolbox - the more you have, the better you can handle different situations.',
      ],
    },
    3: {
      level: 3,
      summary: 'Personality disorders involve stable patterns across cognition, affectivity, interpersonal functioning, and impulse control. BPD is best understood as emotion dysregulation disorder. DBT, MBT, and TFP have RCT evidence for BPD. Alternative DSM-5 model offers dimensional approach.',
      explanation: `**DSM-5 Diagnostic Framework:**

**General Personality Disorder Criteria:**
A. Enduring pattern of inner experience and behavior deviating from culture in 2+ areas:
   1. Cognition
   2. Affectivity
   3. Interpersonal functioning
   4. Impulse control
B. Pattern is inflexible and pervasive
C. Leads to distress or impairment
D. Pattern is stable and long-standing
E. Not better explained by another mental disorder
F. Not due to substances or medical condition

**Borderline Personality Disorder:**
Five or more of:
1. Frantic efforts to avoid abandonment
2. Unstable, intense interpersonal relationships (idealization/devaluation)
3. Identity disturbance
4. Impulsivity in 2+ potentially damaging areas
5. Recurrent suicidal behavior or self-harm
6. Affective instability
7. Chronic emptiness
8. Inappropriate, intense anger
9. Transient paranoid ideation or dissociation

**Neurobiological Basis (BPD Focus):**

*Emotion Dysregulation Model:*
- Core deficit in emotion regulation
- Biological vulnerability + invalidating environment
- Biosocial theory (Linehan)

*Neural Correlates:*
- Amygdala hyperreactivity
- Reduced prefrontal regulation
- Altered anterior cingulate function
- HPA axis dysregulation

*Genetics:*
- Heritability ~40-60%
- Polygenic
- Gene-environment interaction

**Evidence-Based Treatments:**

*Dialectical Behavior Therapy (DBT):*
- Standard DBT: Individual therapy + skills group + phone coaching + consultation team
- Skills modules: Mindfulness, distress tolerance, emotion regulation, interpersonal effectiveness
- 12-month treatment typical
- Strong evidence: Reduces self-harm, hospitalizations, depression

*Mentalization-Based Treatment (MBT):*
- Focus on understanding mental states
- Addresses attachment difficulties
- Individual and group components
- Evidence for BPD

*Transference-Focused Psychotherapy (TFP):*
- Psychodynamic approach
- Works with in-session relationship patterns
- Addresses identity diffusion
- Evidence for BPD

*Schema Therapy:*
- Identifies early maladaptive schemas
- Limited reparenting
- Evidence for BPD and other PDs
- Good for Cluster C

**Pharmacotherapy:**

*Approach:*
- Target symptoms, not disorder
- No FDA-approved medications
- Use cautiously
- Avoid polypharmacy

*Evidence-Based Targets:*
- Affective dysregulation: SSRIs, mood stabilizers
- Impulsivity: Mood stabilizers, naltrexone
- Cognitive-perceptual: Low-dose antipsychotics
- Limited benefit overall; psychotherapy primary

**Alternative DSM-5 Model:**

*Dimensional Approach:*
- Level of personality functioning (self, interpersonal)
- Pathological personality traits (negative affectivity, detachment, antagonism, disinhibition, psychoticism)
- In Section III for further study

**Prognosis:**

*BPD:*
- Better than historically thought
- Many achieve remission (85% by 10 years)
- Functional recovery slower
- Suicide risk decreases with age`,
      keyTerms: [
        { term: 'biosocial theory', definition: 'Linehan\'s model of BPD as biology + invalidating environment' },
        { term: 'mentalization', definition: 'Capacity to understand behavior in terms of mental states' },
        { term: 'identity diffusion', definition: 'Unstable sense of self, core feature of BPD' },
        { term: 'limited reparenting', definition: 'Schema therapy technique addressing unmet childhood needs' },
        { term: 'alternative model', definition: 'DSM-5 dimensional approach to personality pathology' },
      ],
      clinicalNotes: 'BPD has best treatment evidence. DBT is gold standard but requires trained therapists. Medications target symptoms only - avoid polypharmacy. Suicide risk is real but prognosis better than previously thought. Treat comorbidities (PTSD common in BPD).',
    },
    4: {
      level: 4,
      summary: 'Personality disorder pathophysiology involves gene-environment interactions affecting attachment, emotion regulation, and identity development. Treatment mechanisms include improving mentalizing capacity, emotion regulation, and interpersonal patterns. Research supports dimensional models and transdiagnostic approaches.',
      explanation: `**Pathophysiology - Integrated Model:**

*Developmental Factors:*
- Attachment disruption
- Childhood adversity (trauma, neglect)
- Invalidating environments
- Temperamental vulnerability
- Gene-environment interplay

*Genetic Architecture:*
- Heritability: 40-60% across PDs
- Polygenic; no specific genes
- Shared genetics with other disorders
- Epigenetic mechanisms
- Temperament heritability

*Neurobiological Findings (BPD):*

Amygdala:
- Hyperactivation to emotional stimuli
- Especially negative/ambiguous faces
- May not normalize with treatment

Prefrontal Cortex:
- Reduced regulation of amygdala
- Impaired emotion regulation
- Target of therapies

Anterior Cingulate:
- Altered function
- Pain and emotional processing
- Social cognition

HPA Axis:
- Altered cortisol response
- Early adversity effects
- Stress sensitization

*Psychological Mechanisms:*
- Emotion dysregulation (Linehan)
- Impaired mentalization (Fonagy)
- Identity diffusion (Kernberg)
- Maladaptive schemas (Young)
- Different theories, overlapping constructs

**Treatment Mechanisms:**

*DBT:*
- Dialectical philosophy (acceptance + change)
- Skills acquisition and generalization
- Increases distress tolerance
- Improves interpersonal effectiveness
- Reduces therapy-interfering behaviors

*MBT:*
- Improves mentalizing capacity
- Attachment-informed
- Addresses epistemic trust
- Stabilizes affect through understanding

*TFP:*
- Works with transference in session
- Integrates split representations
- Addresses identity diffusion
- Psychodynamic interpretation

*General Therapy Principles for PDs:*
- Strong therapeutic alliance
- Clear frame and limits
- Validation + change strategies
- Address ruptures
- Long-term treatment often needed

**Research Directions:**

*Dimensional Models:*
- DSM-5 Alternative Model (AMPD)
- Five-factor model mapping
- HiTOP framework
- Better captures personality pathology

*Transdiagnostic Approaches:*
- Emotion dysregulation across disorders
- Interpersonal dysfunction
- Identity disturbance
- Shared mechanisms

*Biomarkers:*
- fMRI patterns
- HPA axis measures
- No clinical biomarkers yet

**Special Populations:**

*Adolescents:*
- BPD can be diagnosed
- DBT-A developed
- Early intervention important
- Good prognosis

*Forensic Settings:*
- Antisocial PD prevalent
- Treatment challenges
- Risk assessment
- Limited evidence for treatment

*Medical Settings:*
- Comorbidity common
- Staff splitting
- Consultation-liaison role
- Brief interventions

**Comorbidity:**

*Common Comorbidities:*
- Depression
- Anxiety disorders
- PTSD (especially BPD)
- Substance use disorders
- Eating disorders

*Treatment Approach:*
- Treat PD to improve comorbidity
- Address safety first
- Integrated treatment when possible`,
      keyTerms: [
        { term: 'epistemic trust', definition: 'Ability to trust others as sources of knowledge about the world' },
        { term: 'therapy-interfering behaviors', definition: 'Actions that disrupt treatment (DBT target)' },
        { term: 'identity diffusion', definition: 'Kernberg\'s concept of unstable, fragmented sense of self' },
        { term: 'AMPD', definition: 'Alternative Model of Personality Disorders in DSM-5 Section III' },
        { term: 'transference', definition: 'Patient\'s relational patterns enacted in therapy relationship' },
      ],
      clinicalNotes: 'Therapeutic alliance is crucial - expect ruptures and address them. BPD patients often highly treatment-seeking despite reputation. PTSD comorbidity very common in BPD - may need phased treatment. Avoid polypharmacy trap. Consider DBT-A for adolescents.',
    },
    5: {
      level: 5,
      summary: 'Contemporary personality disorder research focuses on dimensional models, neuroimaging biomarkers, and precision treatment matching. Network and developmental approaches reconceptualize personality pathology. Digital interventions and brief treatments aim to improve access. ICD-11 adopts dimensional system.',
      explanation: `**Reconceptualizing Personality Pathology:**

*Dimensional Shift:*
- Categorical model limitations
- DSM-5 Alternative Model (Section III)
- ICD-11: Severity levels + trait qualifiers
- HiTOP integrative framework
- Trait-based assessment

*ICD-11 Model:*
- Personality Disorder: Mild, Moderate, Severe
- Trait Qualifiers: Negative affectivity, Detachment, Dissociality, Disinhibition, Anankastia
- Borderline pattern specifier retained
- Implemented globally

*Network Approaches:*
- Symptoms as interconnected network
- Central symptoms as targets
- Dynamic systems perspective
- Personalized intervention

**Neurobiological Research:**

*Neuroimaging Advances:*
- Task-based fMRI: Emotion processing
- Resting-state connectivity
- Structural differences
- Machine learning classification
- Potential for prediction

*Biomarker Development:*
- HPA axis markers
- Inflammation
- Oxytocin system
- Polygenic risk scores
- Not yet clinical

*Pharmacological Targets:*
- Oxytocin augmentation (research)
- Glutamate modulation
- Opioid system (rejection sensitivity)
- No breakthrough medications

**Treatment Innovations:**

*Shorter-Term Treatments:*
- Good Psychiatric Management (GPM)
- STEPPS (group skills)
- Brief MBT
- Improving access

*Digital Interventions:*
- Online DBT skills
- App-based monitoring
- Telehealth delivery
- Adjunctive use

*Transdiagnostic Approaches:*
- Unified Protocol
- Emotion regulation focus
- Interpersonal interventions
- Across personality pathology

**Precision Medicine:**

*Treatment Matching:*
- Which patient for which therapy?
- Baseline severity considerations
- Comorbidity profiles
- Research ongoing

*Personalized Approaches:*
- Network analysis for targets
- Ecological momentary assessment
- Feedback-informed treatment
- Adaptive interventions

**Special Topics:**

*Narcissistic PD:*
- Less treatment-seeking
- Transference-focused approach
- Mentalization perspective
- Limited RCT evidence

*Antisocial PD:*
- Treatment challenges
- Risk reduction focus
- Therapeutic communities
- Criminal justice interface

*Complex/Severe Cases:*
- Multicomorbidity
- Chronic suicidality
- Long-term management
- Harm reduction approach

**Implementation Science:**

*Dissemination:*
- Training in evidence-based treatments
- Fidelity measurement
- Sustainability
- Cost-effectiveness

*Access:*
- Specialty treatment scarcity
- Stepped care models
- Generalist training
- Teletherapy expansion

**Future Directions:**

*Developmental Prevention:*
- Early intervention in at-risk youth
- Attachment-based programs
- School-based interventions
- Breaking intergenerational patterns

*Integration:*
- Primary care screening
- Collaborative care
- Medical comorbidity attention
- Reducing stigma

*Advocacy:*
- Parity for personality disorders
- Research funding
- Stigma reduction
- Recovery model adoption`,
      keyTerms: [
        { term: 'HiTOP', definition: 'Hierarchical Taxonomy of Psychopathology - dimensional framework' },
        { term: 'Good Psychiatric Management', definition: 'Brief, generalizable approach to BPD treatment' },
        { term: 'STEPPS', definition: 'Systems Training for Emotional Predictability and Problem Solving - group treatment' },
        { term: 'network approach', definition: 'Viewing symptoms as interconnected network rather than disease categories' },
        { term: 'ICD-11 model', definition: 'New dimensional personality disorder classification' },
      ],
      clinicalNotes: `Current best practices:
- DBT gold standard for BPD
- MBT, TFP also evidence-based
- Treat target symptoms if medication
- Long-term treatment often needed
- Address comorbidities

Emerging developments:
- ICD-11 dimensional model
- Shorter-term treatments (GPM)
- Digital adjuncts
- Precision matching

Key challenges:
- Treatment access
- Training availability
- Stigma (both patient and provider)
- Severe/complex presentations`,
    },
  },

  media: [
    {
      id: 'pd-clusters-diagram',
      type: 'diagram',
      filename: 'personality_disorder_clusters.svg',
      title: 'Personality Disorder Clusters',
      description: 'Visual overview of Cluster A, B, and C personality disorders',
    },
  ],

  citations: [
    {
      id: 'dsm5-pd',
      type: 'textbook',
      title: 'Diagnostic and Statistical Manual of Mental Disorders, 5th Edition',
      authors: ['American Psychiatric Association'],
      source: 'American Psychiatric Publishing',
      chapter: 'Personality Disorders',
    },
  ],

  crossReferences: [
    { targetId: 'mental-health-depression', targetType: 'condition', relationship: 'related', label: 'Depression' },
    { targetId: 'mental-health-ptsd', targetType: 'condition', relationship: 'related', label: 'PTSD' },
    { targetId: 'mental-health-psychotherapy', targetType: 'topic', relationship: 'see-also', label: 'Psychotherapy Types' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['mental-health', 'psychiatry', 'personality-disorders'],
    keywords: ['personality disorder', 'borderline', 'BPD', 'DBT', 'narcissistic', 'antisocial'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['psychiatry'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default personalityDisordersContent;
