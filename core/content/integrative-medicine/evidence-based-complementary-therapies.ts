/**
 * Evidence-Based Complementary Therapies - Overview
 *
 * Comprehensive overview of how to evaluate complementary and alternative
 * medicine (CAM) approaches using evidence-based principles.
 */

import { EducationalContent } from '../types';

export const evidenceBasedComplementaryTherapies: EducationalContent = {
  id: 'integrative-medicine-evidence-overview',
  type: 'concept',
  name: 'Evidence-Based Complementary Therapies',
  alternateNames: ['CAM Evidence', 'Integrative Medicine Overview', 'Complementary Medicine Evaluation'],

  levels: {
    1: {
      level: 1,
      summary: 'Some treatments outside of regular medicine can help, but it is important to know which ones have been tested and proven to work.',
      explanation: `When you get sick or want to feel better, there are many options beyond the pills and treatments your doctor usually gives you. These other options are called "complementary" or "alternative" treatments.

**What are complementary therapies?**
These are treatments used alongside regular medicine, like:
- Acupuncture (tiny needles in the skin)
- Massage
- Yoga and meditation
- Herbal medicines
- Vitamins and supplements

**The big question: Do they work?**
Some of these work well for certain problems. Others don't work at all. Some might even be harmful. Scientists study these treatments just like they study regular medicines to find out which ones really help.

**Key points to remember:**
- Just because something is "natural" doesn't mean it's safe
- Just because something is popular doesn't mean it works
- Ask your doctor before trying new treatments
- Look for treatments that have been tested in studies`,
      keyTerms: [
        { term: 'complementary therapy', definition: 'A treatment used together with regular medicine' },
        { term: 'alternative therapy', definition: 'A treatment used instead of regular medicine' },
        { term: 'natural', definition: 'Coming from nature (but natural doesn\'t always mean safe!)' },
        { term: 'evidence', definition: 'Proof from scientific studies that something works' },
      ],
      analogies: [
        'Choosing a complementary therapy is like choosing a path through a forest - some paths are well-marked and tested, while others might lead you astray.',
        'Evidence is like a report card for treatments - it tells you how well they actually perform.',
      ],
      examples: [
        'Ginger has good evidence for helping with nausea during pregnancy.',
        'Many "detox" products have no evidence they work and might just be expensive water.',
      ],
    },
    2: {
      level: 2,
      summary: 'Complementary and alternative medicine (CAM) encompasses diverse therapies, some with strong evidence and others lacking scientific support. Evaluating evidence quality is essential for informed decisions.',
      explanation: `**Categories of Complementary Therapies:**

1. **Mind-Body Practices**
   - Meditation and mindfulness
   - Yoga, tai chi, qigong
   - Hypnotherapy
   - Biofeedback

2. **Natural Products**
   - Herbal supplements
   - Vitamins and minerals
   - Probiotics
   - Essential oils

3. **Manipulative Practices**
   - Chiropractic care
   - Massage therapy
   - Osteopathic manipulation

4. **Traditional Systems**
   - Traditional Chinese Medicine (TCM)
   - Ayurveda
   - Naturopathy
   - Homeopathy

**Understanding Evidence Levels:**
- **Strong evidence**: Multiple well-designed studies show benefit
- **Moderate evidence**: Some good studies show benefit
- **Weak evidence**: Limited studies or mixed results
- **No evidence**: No good studies have been done
- **Negative evidence**: Studies show it doesn't work

**Key Organizations:**
- **NCCIH** (National Center for Complementary and Integrative Health): Part of NIH, funds research
- **Cochrane Reviews**: Summarizes medical research
- **Natural Medicines Database**: Rates supplements for evidence

**Important Considerations:**
- Regulation differs from prescription drugs
- Quality of supplements varies widely
- "Natural" doesn't mean safe or effective
- Interactions with medications can occur`,
      keyTerms: [
        { term: 'CAM', definition: 'Complementary and Alternative Medicine - therapies outside conventional Western medicine' },
        { term: 'integrative medicine', definition: 'Approach that combines conventional medicine with evidence-based complementary therapies' },
        { term: 'NCCIH', definition: 'National Center for Complementary and Integrative Health - NIH agency researching CAM' },
        { term: 'placebo effect', definition: 'Improvement that occurs because of belief in treatment rather than the treatment itself' },
      ],
      analogies: [
        'The evidence hierarchy is like a ladder - randomized controlled trials are near the top, while testimonials are at the bottom.',
      ],
      examples: [
        'Meditation has strong evidence for reducing stress and moderate evidence for lowering blood pressure.',
        'Homeopathy has been studied extensively and consistently shows no benefit beyond placebo.',
      ],
    },
    3: {
      level: 3,
      summary: 'Integrative medicine applies evidence-based methodology to complementary therapies, requiring understanding of study design, effect sizes, and the distinction between biological plausibility and demonstrated efficacy.',
      explanation: `**Evidence Evaluation Framework:**

**Study Design Hierarchy:**
1. Systematic reviews and meta-analyses
2. Randomized controlled trials (RCTs)
3. Controlled trials without randomization
4. Cohort and case-control studies
5. Case series and case reports
6. Expert opinion and mechanistic reasoning

**Challenges in CAM Research:**

*Methodological Issues:*
- Difficulty blinding (especially for physical therapies)
- Placebo control selection (sham acupuncture, sham manipulation)
- Practitioner variability
- Whole-systems research vs. single-intervention studies
- Lack of standardization in herbal products

*Interpretation Challenges:*
- Publication bias (positive results published more)
- Small study effects
- Regression to the mean
- Natural disease course
- Contextual effects vs. specific effects

**Key Evidence Databases:**
- **PubMed/MEDLINE**: Primary literature
- **Cochrane Library**: Systematic reviews
- **Natural Medicines Database**: Supplement evidence ratings
- **NCCIH Research Database**: CAM-specific research

**Evidence for Major Categories:**

*Strongest Evidence (Some Conditions):*
- Mindfulness-based stress reduction for anxiety, depression
- Acupuncture for chronic pain, nausea
- Massage for low back pain
- Yoga for low back pain

*Mixed Evidence:*
- Chiropractic for low back pain (short-term benefit)
- St. John's Wort for mild-moderate depression
- Glucosamine for osteoarthritis

*Weak or Negative Evidence:*
- Homeopathy (consistently no better than placebo)
- Detox and cleansing regimens
- Magnetic therapy
- Most "immune boosters"

**Regulatory Landscape:**
- Supplements regulated as food, not drugs (DSHEA 1994)
- No pre-market efficacy requirements
- Manufacturer responsible for safety
- FDA can act after problems reported`,
      keyTerms: [
        { term: 'meta-analysis', definition: 'Statistical combination of results from multiple studies to increase power' },
        { term: 'sham treatment', definition: 'Placebo control designed to mimic the intervention without the specific active component' },
        { term: 'effect size', definition: 'Magnitude of treatment effect, not just statistical significance' },
        { term: 'DSHEA', definition: 'Dietary Supplement Health and Education Act - regulates supplements differently than drugs' },
        { term: 'contextual effects', definition: 'Therapeutic effects from the treatment setting rather than specific intervention' },
      ],
      clinicalNotes: 'When patients ask about CAM, acknowledge their interest, assess their motivations, review evidence together, discuss potential interactions, and maintain open communication. Dismissing CAM use may lead patients to hide it, missing potential interactions.',
    },
    4: {
      level: 4,
      summary: 'Advanced evaluation of CAM requires understanding of research methodology limitations, neurobiological mechanisms of non-specific effects, regulatory frameworks, and integration of patient values with best available evidence.',
      explanation: `**Methodological Considerations:**

*Specific vs. Non-Specific Effects:*
- Specific effects: Physiological effect of intervention itself
- Non-specific effects: Placebo, therapeutic relationship, expectations, natural history
- Mean response = specific + non-specific + regression to mean
- Some CAM may work primarily through non-specific mechanisms

*Trial Design Issues:*

**Blinding Challenges:**
- Practitioner cannot be blinded
- Patient blinding varies by intervention
- Sham acupuncture may have physiological effects
- Sham manipulation difficult to achieve

**Control Selection:**
- Waitlist controls inflate effect sizes
- Active controls may underestimate effects
- Sham controls may be partially active

**Outcome Measures:**
- Subjective outcomes (pain, well-being) vs. objective (biomarkers)
- Patient-reported outcomes more susceptible to expectation effects
- Minimal clinically important difference (MCID)

**Neurobiological Mechanisms of CAM:**

*Acupuncture:*
- Endogenous opioid release
- Adenosine signaling
- Descending pain modulation
- Connective tissue effects
- Neuroimaging shows brain changes

*Mind-Body Practices:*
- HPA axis modulation
- Inflammatory marker reduction
- Autonomic nervous system balance
- Default mode network changes
- Telomerase activity (meditation)

*Manual Therapies:*
- Gate control theory
- Neuroplastic changes
- Proprioceptive input
- Fascial effects
- Psychosocial context

**Integration Framework:**

*Shared Decision-Making for CAM:*
1. Elicit patient preferences and values
2. Present evidence (including uncertainty)
3. Discuss potential benefits and harms
4. Consider cost and access
5. Agree on monitoring plan

*Risk-Benefit Analysis:*
- Likelihood of benefit (effect size, NNT)
- Probability and severity of harm
- Cost (financial, time, opportunity cost)
- Alternative options
- Disease severity and prognosis`,
      keyTerms: [
        { term: 'non-specific effects', definition: 'Therapeutic effects not attributable to the specific mechanism of intervention' },
        { term: 'MCID', definition: 'Minimal Clinically Important Difference - smallest change patients perceive as important' },
        { term: 'NNT', definition: 'Number Needed to Treat - patients treated for one to benefit' },
        { term: 'therapeutic relationship', definition: 'Healing effects from provider-patient interaction itself' },
      ],
      clinicalNotes: 'For chronic conditions with limited conventional options, CAM with moderate evidence and good safety profile may be reasonable. Key is maintaining therapeutic relationship, monitoring outcomes, and avoiding delay of effective conventional treatment for serious conditions.',
    },
    5: {
      level: 5,
      summary: 'Integrative medicine practice requires synthesis of heterogeneous evidence, understanding of implementation science, pharmacovigilance for natural products, and ethical considerations in recommending unproven therapies.',
      explanation: `**Advanced Evidence Synthesis:**

*Handling Heterogeneous Evidence:*
- Network meta-analysis for comparing interventions
- Mixed-methods research synthesis
- Realist synthesis (what works, for whom, in what context)
- Living systematic reviews for rapidly evolving fields

*Pragmatic vs. Explanatory Trials:*
- Explanatory: Controlled conditions, mechanism focus
- Pragmatic: Real-world effectiveness
- PRECIS-2 framework for trial design
- Whole-systems research challenges

**Research Gaps and Future Directions:**

*Priority Research Areas (NCCIH):*
- Mechanisms of action
- Biomarkers for responders
- Implementation and dissemination
- Multi-component interventions
- Health services research

*Emerging Methodologies:*
- N-of-1 trials for individual patient decisions
- Adaptive platform trials
- Real-world evidence from EHR
- Machine learning for responder identification

**Pharmacovigilance for Natural Products:**

*Regulatory Framework:*
- FDA adverse event reporting (MedWatch)
- Dietary Supplement and Nonprescription Drug Consumer Protection Act
- USP verification program
- ConsumerLab.com third-party testing
- NSF International certification

*Common Quality Issues:*
- Heavy metal contamination
- Microbial contamination
- Adulteration with pharmaceuticals
- Incorrect plant species
- Batch-to-batch variability

**Ethical Considerations:**

*Recommending CAM:*
- Evidence threshold for recommendation
- Patient autonomy vs. paternalism
- Disclosure of uncertainty
- Financial conflicts of interest
- Cultural competency

*Integration Challenges:*
- Conventional provider skepticism
- CAM provider scope of practice
- Communication across systems
- Documentation and liability
- Insurance coverage disparities

**Implementation Science:**

*Facilitators for CAM Integration:*
- Leadership support
- Evidence-based guidelines
- Provider training
- Electronic health record integration
- Outcome monitoring systems

*Barriers:*
- Reimbursement challenges
- Workforce limitations
- Quality assurance
- Patient access disparities
- Credentialing complexity

**Clinical Practice Recommendations:**

*For Patients:*
- Use evidence-based sources
- Disclose all supplements to providers
- Purchase from reputable sources
- Monitor for effects and side effects
- Avoid replacing proven treatments

*For Providers:*
- Create open, non-judgmental environment
- Assess CAM use at every visit
- Know evidence for common therapies
- Check for drug-supplement interactions
- Document CAM use in medical record`,
      keyTerms: [
        { term: 'network meta-analysis', definition: 'Statistical method comparing multiple interventions simultaneously using direct and indirect comparisons' },
        { term: 'N-of-1 trial', definition: 'Crossover trial in a single patient to determine individual treatment response' },
        { term: 'pharmacovigilance', definition: 'Science of detecting, assessing, and preventing adverse effects of drugs or supplements' },
        { term: 'PRECIS-2', definition: 'Framework for designing trials on the pragmatic-explanatory continuum' },
      ],
      clinicalNotes: `Key resources for clinicians:
- Natural Medicines Database (requires subscription)
- NCCIH website for patient handouts
- Cochrane reviews for evidence summaries
- American Board of Integrative Medicine for training

When patients present with CAM interest:
1. Explore reasons (dissatisfaction, values, cultural)
2. Assess current conventional treatment
3. Review evidence together
4. Screen for drug-supplement interactions
5. Establish monitoring plan
6. Document discussion`,
    },
  },

  media: [
    {
      id: 'cam-evidence-pyramid',
      type: 'diagram',
      filename: 'cam_evidence_pyramid.svg',
      title: 'Evidence Hierarchy for CAM Therapies',
      description: 'Visual representation of evidence levels from meta-analyses to anecdotes',
    },
    {
      id: 'integrative-medicine-model',
      type: 'diagram',
      filename: 'integrative_medicine_model.svg',
      title: 'Integrative Medicine Framework',
      description: 'Model showing integration of conventional and evidence-based complementary therapies',
    },
  ],

  citations: [
    {
      id: 'nccih-strategic-plan',
      type: 'website',
      title: 'NCCIH Strategic Plan',
      source: 'National Center for Complementary and Integrative Health',
      url: 'https://www.nccih.nih.gov/about/nccih-strategic-plan',
    },
    {
      id: 'cochrane-cam',
      type: 'website',
      title: 'Cochrane Complementary Medicine',
      source: 'Cochrane Collaboration',
      url: 'https://cam.cochrane.org/',
    },
    {
      id: 'natural-medicines-database',
      type: 'website',
      title: 'Natural Medicines Database',
      source: 'Therapeutic Research Center',
      url: 'https://naturalmedicines.therapeuticresearch.com/',
    },
  ],

  crossReferences: [
    { targetId: 'ebm-hierarchy-of-evidence', targetType: 'concept', relationship: 'related', label: 'Hierarchy of Evidence' },
    { targetId: 'ebm-critical-appraisal', targetType: 'concept', relationship: 'see-also', label: 'Critical Appraisal' },
    { targetId: 'integrative-acupuncture', targetType: 'concept', relationship: 'child', label: 'Acupuncture' },
    { targetId: 'integrative-herbal-supplements', targetType: 'concept', relationship: 'child', label: 'Herbal Supplements' },
  ],

  tags: {
    systems: ['integrative', 'general'],
    topics: ['complementary medicine', 'evidence-based medicine', 'patient education', 'shared decision-making'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'family medicine'],
    },
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default evidenceBasedComplementaryTherapies;
