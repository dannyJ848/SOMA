/**
 * Massage Therapy - Educational Content
 *
 * Comprehensive content covering massage therapy benefits,
 * limitations, contraindications, and evidence base.
 */

import { EducationalContent } from "../types";

export const massageTherapyContent: EducationalContent = {
  id: "integrative-medicine-massage-therapy",
  type: "concept",
  name: "Massage Therapy",
  alternateNames: [
    "Therapeutic Massage",
    "Manual Therapy",
    "Bodywork",
    "Soft Tissue Manipulation",
  ],

  levels: {
    1: {
      level: 1,
      summary:
        "Massage therapy is when a trained person uses their hands to press, rub, and move your muscles and soft tissues to help reduce pain and help you relax.",
      explanation: `**What is massage therapy?**
Massage therapy is a treatment where someone uses their hands (and sometimes elbows or special tools) to work on your muscles and the soft parts of your body. It has been used for thousands of years to help people feel better.

**How can massage help?**
- Reduces muscle pain and soreness
- Helps you relax and feel less stressed
- Can help with headaches
- May help you sleep better
- Improves blood flow to your muscles

**Different types of massage:**
- **Swedish massage**: Gentle, relaxing strokes
- **Deep tissue massage**: Firmer pressure for tight muscles
- **Sports massage**: Helps athletes before and after exercise
- **Trigger point massage**: Focuses on tight spots in muscles

**Is it safe?**
Massage is very safe for most people. However, you should not get a massage if you have:
- A fever or infection
- A skin rash or open wounds
- Just had surgery
- Certain medical conditions (your doctor can advise you)

**What to expect:**
- Sessions usually last 30-90 minutes
- You may feel relaxed or a little sore afterward
- Drink water after your massage
- Tell the therapist if anything hurts too much`,
      keyTerms: [
        {
          term: "massage therapy",
          definition: "Using hands to press and rub muscles to reduce pain and stress",
        },
        {
          term: "licensed massage therapist",
          definition: "A person trained and approved to give massages safely",
        },
        {
          term: "muscle tension",
          definition: "When muscles are tight and may cause discomfort",
        },
      ],
      analogies: [
        "Massage is like kneading bread dough - it softens and relaxes the tight parts.",
        "Tense muscles are like tangled shoelaces - massage helps work out the knots.",
      ],
      examples: [
        "Someone with a stiff neck from sitting at a computer might get a massage to loosen those muscles.",
        "An athlete might get a sports massage after a big game to help their muscles recover.",
      ],
    },
    2: {
      level: 2,
      summary:
        "Massage therapy involves systematic manipulation of soft tissues to reduce muscle tension, improve circulation, decrease pain, and promote relaxation through various techniques adapted to individual needs.",
      explanation: `**Types of Massage Therapy:**

*Swedish Massage:*
- Most common type in Western countries
- Uses long strokes, kneading, and circular movements
- Light to medium pressure
- Promotes relaxation and general wellness

*Deep Tissue Massage:*
- Targets deeper muscle layers and connective tissue
- Uses slower, more forceful strokes
- Addresses chronic muscle tension
- May cause temporary soreness

*Myofascial Release:*
- Focuses on fascia (connective tissue surrounding muscles)
- Gentle sustained pressure
- Addresses restrictions and adhesions

*Trigger Point Therapy:*
- Targets specific tight spots in muscles
- These spots can refer pain to other areas
- Direct pressure to release tension

*Sports Massage:*
- Tailored for athletes
- Pre-event, post-event, and maintenance types
- Focuses on muscles used in specific sports

**Evidence for Massage:**

*Conditions with Good Evidence:*
- Low back pain (short-term relief)
- Neck and shoulder pain
- Tension headaches
- Anxiety and stress
- Delayed onset muscle soreness (DOMS)

*Conditions with Some Evidence:*
- Fibromyalgia
- Osteoarthritis
- Cancer-related fatigue
- Depression (mild to moderate)

**How Massage Works:**

*Mechanical Effects:*
- Increases blood and lymph flow
- Reduces muscle tension
- Improves tissue flexibility
- Breaks up adhesions

*Neurological Effects:*
- Activates relaxation response
- Reduces cortisol (stress hormone)
- Increases serotonin and dopamine
- Decreases pain signals

**Contraindications (When to Avoid):**

*Absolute:*
- Active infection or fever
- Blood clots (deep vein thrombosis)
- Severe bleeding disorders
- Unstable fractures

*Relative (Need Caution):*
- Pregnancy (certain techniques)
- Cancer (need specialized training)
- Osteoporosis
- Recent surgery
- Skin conditions in treatment area`,
      keyTerms: [
        {
          term: "fascia",
          definition: "Connective tissue that surrounds and supports muscles throughout the body",
        },
        {
          term: "trigger points",
          definition: "Tight, painful spots in muscles that can cause pain elsewhere in the body",
        },
        {
          term: "contraindication",
          definition: "A condition that makes a treatment inadvisable or potentially harmful",
        },
        {
          term: "deep vein thrombosis",
          definition: "A blood clot in a deep vein, usually in the leg - massage could dislodge it",
        },
      ],
      analogies: [
        "Fascia is like plastic wrap around your muscles - sometimes it gets stuck and needs to be loosened.",
        "Trigger points are like speed bumps in your muscles - they interrupt the smooth flow of movement.",
      ],
      examples: [
        "A person with chronic low back pain might benefit from weekly massage combined with stretching exercises.",
        "Someone with anxiety might find regular Swedish massage helps reduce their stress levels.",
      ],
    },
    3: {
      level: 3,
      summary:
        "Massage therapy produces therapeutic effects through mechanical tissue manipulation, neurophysiological responses, and psychological mechanisms, with evidence supporting efficacy for specific musculoskeletal and stress-related conditions.",
      explanation: `**Physiological Mechanisms:**

*Mechanical Effects:*
- Tissue deformation and viscoelastic changes
- Increased muscle compliance and range of motion
- Enhanced venous and lymphatic return
- Reduced muscle spasm through mechanical interruption
- Thixotropic effects on ground substance

*Neurophysiological Effects:*
- Activation of cutaneous mechanoreceptors
- Gate control mechanism reducing pain transmission
- Decreased H-reflex amplitude (reduced muscle excitability)
- Autonomic nervous system modulation
- Hypothalamic-pituitary-adrenal axis effects

*Biochemical Changes:*
- Reduced cortisol levels
- Increased oxytocin
- Elevated serotonin and dopamine
- Decreased substance P
- Reduced inflammatory markers in some studies

**Evidence Base by Condition:**

*Low Back Pain:*
- Cochrane reviews support short-term benefit
- Comparable to other conservative treatments
- Effects may not persist long-term without maintenance
- Most effective when combined with exercise

*Neck Pain:*
- Moderate evidence for short-term relief
- May be more effective than some medications
- Combination with exercise improves outcomes

*Headaches:*
- Good evidence for tension-type headaches
- Reduces frequency and intensity
- Less evidence for migraines

*Anxiety and Depression:*
- Consistent reduction in anxiety measures
- Moderate effect sizes
- Single sessions produce acute effects
- Series of sessions for lasting benefit

*Cancer-Related Symptoms:*
- Evidence for fatigue, anxiety, pain
- Requires oncology-trained therapists
- Light pressure techniques for safety
- Does NOT treat cancer itself

**Research Challenges:**

*Methodological Issues:*
- Blinding impossible for therapist
- Difficult to create credible sham
- Practitioner variability
- Dose (duration, frequency, technique) varies
- Patient expectations affect outcomes

*Comparison Groups:*
- Light touch controls
- Relaxation controls
- Usual care comparisons
- Active treatment comparisons

**Clinical Considerations:**

*Dosing Parameters:*
- Session length: 30-60 minutes typical
- Frequency: Weekly to monthly depending on condition
- Duration of treatment course varies
- Maintenance sessions may be needed

*Integration with Other Treatments:*
- Complements physical therapy
- Can reduce medication needs
- Part of multimodal pain management
- Stress management component`,
      keyTerms: [
        {
          term: "thixotropy",
          definition: "Property of tissues becoming more fluid with sustained pressure or movement",
        },
        {
          term: "H-reflex",
          definition: "Electrical measure of motor neuron excitability, reduced by massage",
        },
        {
          term: "gate control theory",
          definition: "Theory that non-painful input can reduce pain signal transmission in spinal cord",
        },
        {
          term: "substance P",
          definition: "Neurotransmitter involved in pain transmission and inflammation",
        },
      ],
      clinicalNotes:
        "For patients with chronic musculoskeletal pain, massage therapy can be a useful adjunct. Best evidence exists for low back pain and neck pain. Recommend licensed massage therapists (LMT) and consider combining with active exercise. Patients with cancer should seek oncology massage specialists.",
    },
    4: {
      level: 4,
      summary:
        "Massage therapy research demonstrates effects on tissue biomechanics, neuromuscular function, and psychoneuroimmunology, with clinical guidelines incorporating massage for specific pain conditions while acknowledging limitations in evidence quality and long-term outcomes.",
      explanation: `**Advanced Mechanistic Understanding:**

*Tissue-Level Effects:*
- Mechanical loading induces fibroblast responses
- Cytoskeletal remodeling in connective tissue
- Reduced passive stiffness of muscle-tendon units
- Altered viscoelastic properties of fascia
- Potential effects on myofascial force transmission

*Neuromuscular Effects:*
- Decreased electromyographic activity post-massage
- Altered motor unit recruitment patterns
- Changes in muscle spindle sensitivity
- Reduced resting muscle tension
- Improved proprioceptive acuity

*Central Nervous System Effects:*
- fMRI studies show cortical processing changes
- Altered insula and cingulate activity
- Default mode network modulation
- Reduced amygdala reactivity
- Changes in interoceptive processing

*Immunological Effects:*
- Reduced circulating inflammatory cytokines
- Increased natural killer cell activity (some studies)
- Altered leukocyte trafficking
- Effects on wound healing parameters
- Potential immune enhancement in cancer patients

**Evidence Synthesis:**

*Systematic Review Findings (Cochrane, etc.):*

Low Back Pain:
- Moderate quality evidence for short-term benefit
- Effect sizes similar to other conservative treatments
- Limited evidence for long-term outcomes
- Recommend as part of multimodal approach

Neck Pain:
- Low to moderate quality evidence
- Beneficial compared to placebo
- Uncertain compared to other active treatments

Shoulder Pain:
- Limited evidence, mostly low quality
- May reduce pain in short-term
- Insufficient evidence for function

Fibromyalgia:
- Low quality evidence for temporary symptom relief
- Myofascial release techniques may be preferable
- Part of multidisciplinary approach

**Comparative Effectiveness:**

*Massage vs. Other Treatments:*
- Similar to exercise for low back pain
- May be equivalent to spinal manipulation
- Additive benefit when combined with exercise
- Cost-effectiveness data limited

*Optimal Treatment Parameters:*
- Higher dose (60 vs 30 min) may be more effective
- Multiple sessions superior to single session
- Weekly frequency commonly used
- Maintenance treatments prolong benefits

**Special Populations:**

*Oncology Massage:*
- Modified pressure and techniques
- Avoid areas of active disease
- Consider platelet count, lymphedema risk
- Evidence for quality of life improvement
- Specialized training required

*Pregnancy:*
- Generally safe in uncomplicated pregnancy
- Avoid certain pressure points
- Side-lying positioning
- Evidence for labor pain reduction
- Prenatal massage certification available

*Pediatric:*
- Evidence for infant massage and development
- Potential benefits for childhood anxiety
- Requires parental involvement
- Age-appropriate techniques

**Practice Standards:**

*Credentialing:*
- State licensure requirements vary
- National certification (NCBTMB)
- Specialized certifications (oncology, prenatal)
- Continuing education requirements

*Documentation:*
- Intake assessment and health history
- Treatment goals and plan
- Session notes (SOAP format)
- Outcome measures when appropriate`,
      keyTerms: [
        {
          term: "fibroblasts",
          definition: "Cells in connective tissue that respond to mechanical loading by remodeling tissue",
        },
        {
          term: "interoception",
          definition: "Perception of internal body states, which massage may influence",
        },
        {
          term: "NCBTMB",
          definition: "National Certification Board for Therapeutic Massage and Bodywork",
        },
        {
          term: "myofascial force transmission",
          definition: "Transfer of muscle force through fascial connections beyond tendon attachments",
        },
      ],
      clinicalNotes:
        "When referring for massage therapy, specify treatment goals (pain relief, stress reduction, mobility). For chronic pain, recommend a series of sessions rather than single treatment. Patients with complex medical conditions need therapists trained in their specific population. Consider massage as part of multimodal pain management to potentially reduce medication needs.",
    },
    5: {
      level: 5,
      summary:
        "Contemporary massage therapy research addresses mechanisms through mechanotransduction and psychoneuroimmunological frameworks, while implementation science examines integration into healthcare systems, optimal delivery models, and personalized treatment approaches.",
      explanation: `**Mechanistic Research Frontiers:**

*Mechanotransduction:*
- Cellular responses to mechanical force
- Integrin-mediated signaling pathways
- Focal adhesion kinase activation
- NF-kB pathway modulation
- Potential epigenetic effects

*Fascial Research:*
- Hyaluronan concentration and viscosity
- Fascial innervation density (free nerve endings)
- Fascia as sensory organ concept
- Biotensegrity models
- Fasciacyte cell biology

*Psychoneuroimmunology:*
- Touch and social bonding circuits
- Oxytocin system activation
- Vagal afferent pathways
- C-tactile fiber stimulation
- Affective touch processing

*Neuroimaging Advances:*
- Pre/post treatment brain changes
- Predictors of treatment response
- Neural correlates of specific techniques
- Comparison of different massage types

**Implementation Science:**

*Healthcare System Integration:*
- VA healthcare massage programs
- Integrative pain management clinics
- Primary care integration models
- Hospital-based massage services
- Hospice and palliative care

*Coverage and Reimbursement:*
- Limited insurance coverage
- Workers compensation in some states
- FSA/HSA eligible
- Advocacy for expanded coverage
- Cost-effectiveness research needed

*Workforce Considerations:*
- Variable state regulations
- Training standards inconsistency
- Specialization pathways
- Interprofessional collaboration
- Burnout and self-care for therapists

**Personalized Approaches:**

*Responder Identification:*
- Patient characteristics predicting response
- Baseline severity as predictor
- Psychological factors
- Previous treatment experience
- Expectation effects

*Treatment Matching:*
- Technique selection for condition
- Pressure adaptation
- Session frequency optimization
- Integration with other treatments
- Patient preferences

**Emerging Applications:**

*Post-Surgical Recovery:*
- Reduced opioid use post-surgery
- Improved patient satisfaction
- Shorter hospital stays in some studies
- Cost-effectiveness analysis needed

*Critical Care:*
- ICU massage protocols
- Family-delivered massage training
- Anxiety and agitation reduction
- Sleep improvement

*Mental Health:*
- Trauma-informed massage
- Eating disorder populations
- Addiction treatment integration
- PTSD symptom reduction

**Research Priorities:**

*Methodological Advances:*
- Better control conditions
- Standardized interventions
- Longer follow-up periods
- Real-world effectiveness studies
- Implementation outcomes

*Clinical Questions:*
- Optimal dosing parameters
- Mechanism-based treatment matching
- Long-term maintenance strategies
- Comparative effectiveness
- Health economic analyses

**Clinical Practice Integration:**

*Evidence-Based Guidelines:*
- ACP guidelines for low back pain include massage
- Pain management multimodal frameworks
- Oncology supportive care guidelines
- Limited high-quality guideline recommendations overall

*Referral Considerations:*
1. Identify treatment goals and condition
2. Screen for contraindications
3. Select appropriate practitioner (credentials, specialty)
4. Communicate with therapist
5. Monitor outcomes

*Patient Education:*
- Realistic expectations
- Active participation importance
- Self-massage techniques
- Integration with exercise
- Maintenance planning

*Documentation Standards:*
- Treatment plan with goals
- Progress notes
- Outcome measures
- Communication with referring provider
- Informed consent`,
      keyTerms: [
        {
          term: "mechanotransduction",
          definition: "Process by which cells convert mechanical signals into biochemical responses",
        },
        {
          term: "C-tactile fibers",
          definition: "Unmyelinated nerve fibers that respond to gentle, stroking touch and mediate affective touch",
        },
        {
          term: "biotensegrity",
          definition: "Model of body structure as continuous tension network with compression elements",
        },
        {
          term: "fasciacytes",
          definition: "Specialized cells in fascia that produce hyaluronan and respond to mechanical stimulation",
        },
      ],
      clinicalNotes: `Integration recommendations for clinical practice:

For chronic low back pain:
- Massage recommended in ACP guidelines as non-pharmacological option
- Combine with exercise for best outcomes
- 60-minute sessions, weekly, 6-10 session course
- Consider maintenance for chronic conditions

For cancer patients:
- Refer to oncology-certified massage therapists
- Modify pressure based on treatment status
- Evidence supports quality of life benefits
- Coordinate with oncology team

For anxiety/stress-related conditions:
- Regular massage sessions reduce anxiety measures
- Consider as part of stress management plan
- Swedish massage techniques generally appropriate
- May reduce reliance on anxiolytic medications

Resources:
- NCBTMB for credential verification
- AMTA for practitioner search
- Hospital integrative medicine programs
- State licensing board databases`,
    },
  },

  media: [
    {
      id: "massage-techniques-diagram",
      type: "diagram",
      filename: "massage_techniques_overview.svg",
      title: "Common Massage Techniques",
      description:
        "Illustration of different massage strokes and their applications",
    },
    {
      id: "massage-contraindications",
      type: "diagram",
      filename: "massage_contraindications.svg",
      title: "Massage Therapy Contraindications",
      description: "Visual guide to conditions requiring caution or avoidance",
    },
  ],

  citations: [
    {
      id: "cochrane-massage-lbp",
      type: "article",
      title: "Massage therapy for low-back pain",
      source: "Cochrane Database of Systematic Reviews",
      url: "https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.CD001929.pub3/full",
    },
    {
      id: "nccih-massage",
      type: "website",
      title: "Massage Therapy: What You Need To Know",
      source: "National Center for Complementary and Integrative Health",
      url: "https://www.nccih.nih.gov/health/massage-therapy-what-you-need-to-know",
    },
  ],

  crossReferences: [
    {
      targetId: "integrative-medicine-evidence-overview",
      targetType: "concept",
      relationship: "parent",
      label: "Evidence-Based Complementary Therapies",
    },
    {
      targetId: "chronic-pain-management",
      targetType: "concept",
      relationship: "related",
      label: "Chronic Pain Management",
    },
    {
      targetId: "stress-management",
      targetType: "concept",
      relationship: "related",
      label: "Stress Management",
    },
  ],

  tags: {
    systems: ["integrative", "musculoskeletal"],
    topics: [
      "massage therapy",
      "pain management",
      "stress reduction",
      "manual therapy",
    ],
    clinicalRelevance: "high",
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ["medicine", "family medicine"],
    },
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: "published",
};

export default massageTherapyContent;
