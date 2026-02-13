/**
 * Body Dysmorphic Disorder (BDD)
 *
 * Comprehensive educational content on body dysmorphic disorder,
 * its diagnosis, and treatment.
 */

import { EducationalContent } from '../../../types';

export const bodyDysmorphicDisorderContent: EducationalContent = {
  id: 'psychiatry-body-dysmorphic-disorder',
  type: 'condition',
  name: 'Body Dysmorphic Disorder',
  alternateNames: ['BDD', 'Dysmorphophobia'],

  levels: {
    1: {
      level: 1,
      summary: 'Body Dysmorphic Disorder is a condition where a person is very worried about a flaw in their appearance that others cannot see or see as minor.',
      explanation: `BDD is when someone is extremely worried about how they look, focusing on a "flaw" that:
- Others can't see at all, or
- Others see as very small and unimportant

**What It Feels Like:**

- Spending hours looking in mirrors (or avoiding mirrors)
- Constantly comparing yourself to others
- Seeking reassurance about your looks
- Trying to hide the "flaw" with makeup, clothes, or posture
- Feeling very upset about your appearance
- Avoiding social situations because of how you look

**Common Concerns:**

- Skin (acne, scars, wrinkles, color)
- Nose (size, shape)
- Hair (thinning, too much)
- Face shape
- Body size or shape
- Any body part

**Important to Know:**

- The person truly believes there is something wrong
- Telling them "you look fine" usually doesn't help
- This is NOT vanity - it causes real suffering
- BDD is a real medical condition
- Treatment works!

**Getting Help:**

- A special kind of therapy (CBT) helps people challenge their beliefs
- Medications can reduce the worry and repetitive behaviors
- Cosmetic surgery usually does NOT help and may make things worse`,
      keyTerms: [
        { term: 'perceived flaw', definition: 'A defect in appearance that the person sees but others don\'t notice or see as minor' },
        { term: 'body image', definition: 'How you see and feel about your own appearance' },
        { term: 'reassurance seeking', definition: 'Repeatedly asking others if you look okay' },
      ],
      analogies: [
        'BDD is like looking at yourself through a distorted funhouse mirror that only you can see.',
        'The perceived flaw is like a tiny spot on a photo that only the person with BDD can see, even though the rest of the photo is fine.',
      ],
      examples: [
        'Someone might avoid leaving their house because they think their nose is too big, even though friends say it looks normal.',
        'A person might check their skin in the mirror 100 times a day looking for imperfections.',
      ],
    },
    2: {
      level: 2,
      summary: 'BDD involves preoccupation with perceived appearance defects not observable by others, accompanied by repetitive behaviors, causing significant distress and often leading to cosmetic treatment seeking.',
      explanation: `**Diagnostic Features:**

- Preoccupation with perceived defects in appearance
- The flaws are not observable or appear slight to others
- Repetitive behaviors or mental acts in response
- Causes significant distress or impairment

**Common Repetitive Behaviors:**

- Mirror checking (or avoidance)
- Excessive grooming
- Skin picking
- Reassurance seeking
- Comparing to others
- Camouflaging (makeup, clothing, posture)
- Touching/measuring the perceived flaw

**Areas of Concern (most common):**

- Skin (acne, scars, color, wrinkles)
- Hair (head or body)
- Nose
- Eyes
- Face (shape, size, asymmetry)
- Body weight or size
- Any body part can be involved
- Multiple areas often affected

**Insight Specifier:**

- Good/fair insight: Recognizes beliefs are probably not true
- Poor insight: Thinks beliefs are probably true
- Absent insight/delusional: Completely convinced

**Muscle Dysmorphia:**

A subtype primarily in males:
- Preoccupation that body is too small/not muscular enough
- Even when very muscular
- Excessive weightlifting
- Diet concerns
- Steroid use risk

**Impact:**

- Social avoidance
- Depression (very common)
- Low self-esteem
- Employment/relationship problems
- High rates of suicidal ideation

**Treatment:**

*First-line:*
- CBT for BDD (modified from OCD)
- SSRIs at high doses

*Not Helpful:*
- Cosmetic procedures (usually worsen or shift focus)
- Reassurance

*Key Treatment Components:*
- Psychoeducation
- Cognitive restructuring
- Exposure and response prevention
- Perceptual retraining`,
      keyTerms: [
        { term: 'muscle dysmorphia', definition: 'BDD subtype focused on not being muscular enough' },
        { term: 'camouflaging', definition: 'Hiding perceived flaws with makeup, clothing, hair, or body position' },
        { term: 'perceptual retraining', definition: 'Learning to see your whole appearance rather than focusing on "flaws"' },
      ],
    },
    3: {
      level: 3,
      summary: 'BDD is characterized by preoccupation with non-existent or minimal appearance flaws, repetitive behaviors, and often delusional insight. It shares neurobiology with OCD and responds to similar treatments: high-dose SSRIs and CBT with exposure/response prevention.',
      explanation: `**DSM-5 Diagnostic Criteria:**

A. Preoccupation with perceived defects or flaws in physical appearance that are not observable or appear slight to others

B. Repetitive behaviors (mirror checking, grooming, skin picking, reassurance seeking) or mental acts (comparing) in response to appearance concerns

C. Clinically significant distress or functional impairment

D. Not better explained by eating disorder body image concerns

**Specifiers:**
- With muscle dysmorphia
- Insight: Good/fair, poor, or absent/delusional

**Epidemiology:**
- Prevalence: 1-2% in community
- Higher in dermatology (9-15%) and cosmetic surgery settings (7-15%)
- Slight female predominance
- Onset typically adolescence
- Often chronic without treatment

**Neurobiology:**

*Visual Processing:*
- Abnormal face processing
- Focus on details vs. holistic perception
- Enhanced perception of asymmetry
- Similar patterns to OCD

*Brain Regions:*
- Orbitofrontal cortex dysfunction
- Caudate abnormalities
- Visual cortex alterations
- Overlap with OCD circuitry

*Neuroimaging:*
- Reduced gray matter in OFC, ACC
- Altered visual cortex activation
- Abnormal face processing (detail-focused)

**Relationship to OCD:**

Similarities:
- Intrusive, distressing thoughts
- Repetitive behaviors
- Response to SSRIs and CBT/ERP
- Overlapping neurobiology
- High comorbidity

Differences:
- Specific content (appearance)
- More likely delusional insight
- Higher suicide risk
- Cosmetic seeking behavior

**Treatment:**

*Pharmacotherapy:*
- SSRIs: High doses (fluoxetine 60-80mg, escitalopram 30-40mg)
- Response takes 12-16 weeks
- Higher doses than depression
- Clomipramine if SSRI failure
- Antipsychotic augmentation: Limited evidence (unlike OCD)

*CBT for BDD:*
- Psychoeducation about BDD
- Cognitive restructuring (challenge beliefs about appearance)
- Exposure: Approaching avoided situations
- Response prevention: Reducing rituals
- Perceptual retraining: Seeing whole self
- 16-24 sessions

*Cosmetic Treatment:*
- Usually not helpful (78% no improvement)
- May worsen symptoms or shift focus to new area
- Not recommended
- Some improvement possible if realistic expectations

**Suicidality:**
- Very high rates (78% lifetime ideation)
- 25% attempt
- 4x higher completed suicide
- Always assess
- Consider hospitalization if severe`,
      keyTerms: [
        { term: 'delusional insight', definition: 'Complete conviction that appearance beliefs are true, occurs in ~30% of BDD' },
        { term: 'holistic processing', definition: 'Seeing the "whole" face/body; impaired in BDD, which focuses on details' },
        { term: 'perceptual retraining', definition: 'CBT technique to broaden visual attention from details to whole appearance' },
      ],
    },
    4: {
      level: 4,
      summary: 'BDD pathophysiology involves visual processing abnormalities with detail-focused perception, fronto-striatal dysfunction, and often delusional conviction. Treatment requires specialized CBT addressing perceptual and cognitive components, with high-dose serotonergic medications.',
      explanation: `**Pathophysiology:**

*Visual Processing Abnormalities:*
- Detail-focused rather than holistic processing
- Abnormal fusiform face area activation
- Enhanced local vs. global processing
- May misperceive actual appearance
- "Seeing" flaws that aren't objectively present

*Neuroimaging:*

Structural:
- Reduced OFC and ACC volume
- Caudate abnormalities
- Visual cortex alterations
- White matter differences

Functional:
- Abnormal face perception circuits
- Detail-focused processing in visual cortex
- OFC hyperactivity to faces
- Amygdala hyperreactivity

*Neurochemistry:*
- Serotonergic dysfunction (SSRI response)
- Glutamate involvement (less studied than OCD)
- Dopamine: Role unclear

**Cognitive Features:**

- Selective attention to appearance
- Biased interpretation (assuming others notice/judge)
- Overvaluation of appearance for self-worth
- Perfectionism
- Low self-esteem
- Mentalization deficits

**Delusional vs. Nondelusional:**

- ~30% have absent insight (delusional)
- Same disorder on spectrum
- Both respond to SSRIs (not antipsychotics alone)
- DSM-5 uses specifier, not separate diagnosis

**Treatment Details:**

*CBT for BDD Components:*

1. Psychoeducation:
- Normalize BDD as disorder
- Explain visual processing issues
- Rationale for treatment

2. Cognitive Restructuring:
- Challenge appearance beliefs
- Address thought distortions
- Core beliefs about self-worth

3. Exposure:
- Gradually face avoided situations
- Without camouflaging/rituals
- Social situations, bright lighting, etc.

4. Response Prevention:
- Reduce checking, reassurance seeking
- Eliminate camouflaging gradually
- Mirror restriction

5. Perceptual Retraining:
- Mirror exercises (whole body focus)
- Non-judgmental observation
- Reduce selective attention

*Pharmacotherapy:*

SSRIs:
- Higher doses than depression
- Fluoxetine: 60-80mg
- Sertraline: 200-300mg
- 12-16 weeks for response
- Partial response common

Clomipramine:
- If SSRI failure
- 150-250mg
- Monitoring required (ECG, anticholinergic effects)

Augmentation:
- Evidence limited (unlike OCD)
- Buspirone: Some evidence
- Antipsychotics: Not well-supported

**Cosmetic Treatment Considerations:**

- 78% report no improvement after procedures
- Many get multiple procedures
- Focus often shifts to new area
- Rarely satisfied
- Can worsen symptoms
- Advise against in active BDD
- Screen in cosmetic settings

**Suicide Risk:**

- Highest of any mental disorder
- 78% lifetime suicidal ideation
- 25% attempt
- Complete suicide: Elevated rate
- Always assess
- Risk factors: Poor insight, greater severity, comorbidity`,
      keyTerms: [
        { term: 'fusiform face area', definition: 'Brain region for face processing; shows abnormal activation in BDD' },
        { term: 'mentalization', definition: 'Understanding others\' perspectives; may be impaired in BDD regarding others\' perceptions' },
        { term: 'cosmetic screening', definition: 'Assessing for BDD before procedures; many cosmetic patients have undiagnosed BDD' },
      ],
      clinicalNotes: 'High suicide risk - always assess. CBT for BDD is specialized. High-dose SSRIs needed. Cosmetic procedures not recommended. Antipsychotics alone don\'t help even with delusional beliefs. Address comorbid depression. Muscle dysmorphia: Consider steroid use.',
    },
    5: {
      level: 5,
      summary: 'Contemporary BDD research focuses on visual processing neuroscience, perceptual interventions, and understanding the spectrum from overvalued ideas to delusions. Treatment development targets cognitive, perceptual, and emotional processing components.',
      explanation: `**Visual Processing Research:**

*Experimental Findings:*
- Impaired configural/holistic processing
- Enhanced local/detail processing
- Abnormal inversion effects for faces
- Similar patterns in own vs. others' faces
- May extend to non-face stimuli

*Neural Correlates:*
- Left-lateralized visual processing (abnormal)
- Fusiform face area dysfunction
- Abnormal fronto-striatal connectivity
- Early visual cortex differences

*Implications:*
- Patients may "see" differently
- Not just cognitive distortion
- Perceptual interventions warranted
- Explains discrepancy with observers

**Insight Spectrum:**

*Continuum Model:*
- Good insight → Poor insight → Delusional
- Not categorical distinction
- Same underlying disorder
- Insight fluctuates

*Treatment Implications:*
- SSRIs effective across insight levels
- Antipsychotics alone not effective
- More work needed for delusional patients
- Motivational approaches for poor insight

**Treatment Advances:**

*CBT Optimization:*

Perceptual Interventions:
- Holistic processing training
- Eye-tracking biofeedback
- Mirror retraining protocols
- Reduce detail-focused viewing

Metacognitive Approaches:
- Noticing "BDD mode" of seeing
- Stepping back from perceptions
- Mindfulness components

Compassion-Focused:
- Self-compassion training
- Shame reduction
- Inner critic work

*Pharmacological:*

Novel Targets:
- Glutamate modulators (as in OCD)
- Psilocybin (preliminary interest)
- Ketamine (case reports only)

Optimization:
- Longer trials before switching
- Clomipramine underutilized
- Combination approaches

*Digital/Remote:*
- Internet CBT for BDD (effective)
- App-based components
- Telehealth delivery

**Special Populations:**

*Adolescents:*
- Onset typically in adolescence
- Developmental considerations
- Family involvement
- School accommodations

*Muscle Dysmorphia:*
- Male-predominant
- Gym culture factors
- Steroid use risk
- Eating disorder overlap
- Modified treatment focus

*Cosmetic Settings:*
- Screening important
- Brief interventions
- Referral pathways
- Multidisciplinary approach

**Research Directions:**

1. Visual processing-targeted interventions
2. Neuroimaging biomarkers
3. Genetic studies
4. Treatment matching
5. Prevention in high-risk groups
6. Long-term outcomes
7. Novel pharmacotherapies
8. Technology-delivered treatment

**Public Health Considerations:**

*Social Media:*
- Appearance focus
- Filters and editing
- Social comparison
- Potential role in BDD
- Research needed

*Prevention:*
- Media literacy
- Self-esteem programs
- Early intervention
- Screening in schools/clinics

*Cosmetic Industry:*
- Screening protocols
- Training for providers
- Ethical considerations
- Collaboration with mental health`,
      keyTerms: [
        { term: 'configural processing', definition: 'Processing spatial relationships between features; impaired in BDD' },
        { term: 'inversion effect', definition: 'Difficulty recognizing upside-down faces; reduced in BDD suggesting abnormal processing' },
        { term: 'holistic processing training', definition: 'Intervention to help patients see their whole appearance rather than focusing on parts' },
      ],
      clinicalNotes: `Current practice:
- CBT for BDD (specialized) is first-line
- High-dose SSRIs (higher and longer than depression)
- Avoid cosmetic procedures
- High suicide risk - always assess
- Treat comorbid conditions

Emerging:
- Perceptual retraining techniques
- Digital delivery of CBT
- Holistic processing interventions
- Understanding insight spectrum

Special considerations:
- Screen in cosmetic/dermatology settings
- Muscle dysmorphia: steroid risk
- Social media impact
- Family involvement for adolescents
- Delusional cases still respond to SSRIs`,
    },
  },

  media: [
    {
      id: 'bdd-visual-processing',
      type: 'diagram',
      filename: 'bdd_visual_processing.svg',
      title: 'Visual Processing in BDD',
      description: 'Detail-focused vs. holistic processing',
    },
  ],

  citations: [
    {
      id: 'dsm-5-bdd',
      type: 'textbook',
      title: 'Diagnostic and Statistical Manual of Mental Disorders, 5th Edition',
      authors: ['American Psychiatric Association'],
      source: 'American Psychiatric Publishing',
      chapter: 'Obsessive-Compulsive and Related Disorders',
    },
  ],

  crossReferences: [
    { targetId: 'psychiatry-ocd', targetType: 'condition', relationship: 'related', label: 'OCD' },
    { targetId: 'psychiatry-anorexia-nervosa', targetType: 'condition', relationship: 'related', label: 'Anorexia Nervosa' },
    { targetId: 'psychiatry-ssris', targetType: 'topic', relationship: 'see-also', label: 'SSRIs' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['psychiatry', 'obsessive-compulsive disorders'],
    keywords: ['BDD', 'body image', 'appearance', 'dysmorphia', 'cosmetic'],
    clinicalRelevance: 'high',
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

export default bodyDysmorphicDisorderContent;
