/**
 * Acupuncture - Educational Content
 *
 * Comprehensive content covering acupuncture mechanisms, evidence,
 * and appropriate clinical use.
 */

import { EducationalContent } from "../types";

export const acupunctureContent: EducationalContent = {
  id: "integrative-medicine-acupuncture",
  type: "concept",
  name: "Acupuncture",
  alternateNames: [
    "Needle Therapy",
    "Traditional Chinese Acupuncture",
    "Medical Acupuncture",
  ],

  levels: {
    1: {
      level: 1,
      summary:
        "Acupuncture uses very thin needles placed in specific spots on your body to help reduce pain and treat certain health problems.",
      explanation: `**What is acupuncture?**
Acupuncture is a treatment where a trained person puts very thin needles into your skin at special points on your body. These needles are much thinner than the ones used for shots - most people barely feel them go in.

**Where did it come from?**
Acupuncture started in China thousands of years ago. It is one of the oldest medical treatments in the world. Today, doctors and trained practitioners use it all around the world.

**How might it help?**
- Reducing pain (like headaches, back pain, or knee pain)
- Helping with nausea (feeling like you might throw up)
- Reducing stress
- Helping with some other health problems

**Is it safe?**
When done by a trained professional using clean needles, acupuncture is very safe. The most common side effects are minor, like small bruises where the needles went in.

**Important to know:**
- Always go to a licensed acupuncturist
- Tell them about all your health conditions
- It does not work for everything - ask your doctor if it might help you`,
      keyTerms: [
        {
          term: "acupuncture",
          definition:
            "A treatment using thin needles placed in specific body points",
        },
        {
          term: "acupuncture points",
          definition:
            "Special spots on the body where needles are placed during treatment",
        },
        {
          term: "licensed acupuncturist",
          definition:
            "A person who has been trained and approved to do acupuncture safely",
        },
      ],
      analogies: [
        "Acupuncture points are like buttons on a remote control - pressing the right ones can change how your body feels.",
        "The thin needles are like tiny keys that can help unlock your body's natural ability to feel better.",
      ],
      examples: [
        "Someone with frequent headaches might try acupuncture to reduce how often they get them.",
        "A person feeling sick from chemotherapy might use acupuncture to feel less nauseous.",
      ],
    },
    2: {
      level: 2,
      summary:
        "Acupuncture involves inserting thin needles at specific anatomical points to stimulate the nervous system and potentially relieve pain and other symptoms through various physiological mechanisms.",
      explanation: `**Traditional vs Modern Understanding:**

*Traditional Chinese Medicine (TCM) View:*
- Based on concept of "qi" (vital energy) flowing through meridians
- Disease occurs when qi is blocked or imbalanced
- Needles restore proper flow of qi
- 361 classical acupuncture points on 14 main meridians

*Modern Scientific View:*
- Needles stimulate sensory nerves in skin and muscles
- Triggers release of natural pain-relieving chemicals
- Activates parts of the brain involved in pain processing
- May reduce inflammation

**Conditions with Research Support:**
- Chronic low back pain
- Neck pain
- Osteoarthritis (especially knee)
- Chronic headaches and migraines
- Chemotherapy-induced nausea
- Post-operative nausea

**Types of Acupuncture:**
- Traditional body acupuncture
- Auricular (ear) acupuncture
- Electroacupuncture (adds mild electrical stimulation)
- Dry needling (focuses on muscle trigger points)

**What to Expect:**
- Initial consultation about health history
- Practitioner selects acupuncture points based on symptoms
- Needles left in place for 15-30 minutes
- May feel tingling, warmth, or heaviness (called "de qi")
- Usually 6-12 sessions recommended

**Safety Considerations:**
- Must use sterile, single-use needles
- Avoid certain points during pregnancy
- Tell practitioner about bleeding disorders or pacemakers
- Mild side effects: bruising, soreness, temporary fatigue`,
      keyTerms: [
        {
          term: "qi",
          definition:
            "In TCM, the vital energy that flows through the body along meridians",
        },
        {
          term: "meridians",
          definition:
            "Pathways in the body through which qi is believed to flow",
        },
        {
          term: "de qi",
          definition:
            "The sensation of heaviness, tingling, or warmth felt during acupuncture",
        },
        {
          term: "electroacupuncture",
          definition:
            "Acupuncture with mild electrical current applied to the needles",
        },
      ],
      analogies: [
        "Meridians are like highways for energy in the body - acupuncture points are the on-ramps and off-ramps.",
        "The de qi sensation is like the feeling when you hit a \"sweet spot\" during a stretch.",
      ],
      examples: [
        "A patient with chronic knee osteoarthritis might receive needles around the knee and in points on the leg thought to affect knee pain.",
        "For migraines, needles might be placed in the hands, feet, and head areas.",
      ],
    },
    3: {
      level: 3,
      summary:
        "Acupuncture produces physiological effects through peripheral and central nervous system mechanisms, including endogenous opioid release, adenosine signaling, and modulation of pain processing networks, with varying evidence across different conditions.",
      explanation: `**Proposed Mechanisms of Action:**

*Peripheral Mechanisms:*
- Needle insertion stimulates A-delta and C fiber afferents
- Local tissue effects including increased blood flow
- Adenosine release at needle sites (demonstrated in animal studies)
- Connective tissue mechanical signaling
- Local anti-inflammatory effects

*Central Mechanisms:*
- Activation of descending pain inhibitory pathways
- Release of endogenous opioids (endorphins, enkephalins)
- Modulation of limbic system activity
- Default mode network deactivation
- Changes in autonomic nervous system tone

*Neuroimaging Evidence:*
- fMRI studies show reproducible brain activation patterns
- Deactivation of pain matrix components
- Changes persist beyond needle stimulation
- Real vs sham acupuncture shows different patterns

**Evidence by Condition:**

*Strong Evidence (Cochrane/NICE Supported):*
- Chronic low back pain: Moderate benefit
- Chronic neck pain: Short-term relief
- Knee osteoarthritis: Clinically meaningful improvement
- Tension-type headache: Comparable to medications
- Migraine prophylaxis: Effective, similar to drugs

*Moderate Evidence:*
- Chemotherapy-induced nausea/vomiting
- Postoperative nausea
- Fibromyalgia (short-term)
- Lateral elbow pain (tennis elbow)

*Limited/Mixed Evidence:*
- Depression (as adjunct)
- Insomnia
- Irritable bowel syndrome
- Allergic rhinitis

**Methodological Challenges:**

*Blinding Issues:*
- Practitioner cannot be blinded
- Sham acupuncture may have physiological effects
- Penetrating vs non-penetrating sham needles
- Expectation effects significant

*Control Selection:*
- Sham acupuncture at "wrong" points
- Sham acupuncture with retractable needles
- Usual care comparison
- Waitlist controls (inflate effect sizes)

**Practice Considerations:**
- Point selection varies by tradition and condition
- Standardized vs individualized protocols in research
- Dose-response relationship (number, frequency of sessions)
- Practitioner experience effects`,
      keyTerms: [
        {
          term: "A-delta fibers",
          definition:
            "Fast-conducting nerve fibers that carry sharp, localized pain signals",
        },
        {
          term: "descending pain inhibitory pathways",
          definition:
            "Brain circuits that can suppress pain signals traveling up the spinal cord",
        },
        {
          term: "sham acupuncture",
          definition:
            "Placebo control using non-penetrating needles or wrong points",
        },
        {
          term: "endogenous opioids",
          definition:
            "Natural pain-relieving chemicals produced by the body, like endorphins",
        },
      ],
      clinicalNotes:
        "For chronic pain conditions unresponsive to conventional treatment, acupuncture offers a reasonable option with favorable safety profile. Effects may be partly mediated by non-specific factors but clinically meaningful improvements are documented. Insurance coverage varies; check before referring.",
    },
    4: {
      level: 4,
      summary:
        "Acupuncture research reveals complex interactions between peripheral tissue stimulation, segmental and extrasegmental spinal mechanisms, and supraspinal modulatory networks, with ongoing debate about specific versus contextual therapeutic effects.",
      explanation: `**Detailed Mechanistic Framework:**

*Peripheral Transduction:*
- Needle manipulation causes mechanical deformation
- Activation of mechanoreceptors and nociceptors
- Purinergic signaling: adenosine and ATP release
- Mast cell degranulation and histamine release
- Local cytokine modulation
- Collagen and fibroblast responses to mechanical stress

*Spinal Segmental Effects:*
- Stimulation of A-beta fibers activates inhibitory interneurons
- Gate control mechanism at dorsal horn
- Segmental analgesia corresponding to dermatomes
- Wide dynamic range neuron modulation

*Supraspinal Integration:*
- Periaqueductal gray (PAG) activation
- Rostral ventromedial medulla involvement
- Opioidergic and serotonergic descending pathways
- Hypothalamic-pituitary axis modulation
- Prefrontal cortex deactivation (default mode network)

**Neuroimaging Research:**

*Consistent Findings:*
- Limbic system deactivation (amygdala, hippocampus)
- Insula modulation (interoceptive processing)
- Anterior cingulate cortex changes
- Somatosensory cortex activation at needle sites

*Point Specificity Debate:*
- Some studies show point-specific brain activation
- Others find similar patterns regardless of point
- May depend on condition being treated
- Network effects versus localized responses

**Advanced Research Methodologies:**

*Addressing Limitations:*
- Single-blinded (patient only) designs
- Validated sham devices (Park sham, Streitberger needle)
- Penetrating sham at non-acupuncture points
- Crossover designs with adequate washout

*Current Trial Designs:*
- Four-arm trials: real acupuncture, sham acupuncture, usual care, waitlist
- Allows parsing of specific vs contextual effects
- Acupuncture-specific effect = real minus sham
- Total therapeutic effect = real minus waitlist

**Effect Size Interpretation:**

*Meta-analysis Findings (Vickers et al., JAMA):*
- Chronic pain: standardized mean difference ~0.5
- Real vs sham: smaller effect (~0.2) but statistically significant
- Real vs no treatment: larger effect
- Clinically meaningful but modest specific effects

*Implications:*
- Much of acupuncture benefit may be contextual
- Specific effects exist but are smaller
- "Enhanced placebo" with meaningful outcomes
- Cost-effectiveness considerations

**Integration Considerations:**

*When to Consider Referral:*
- Chronic pain unresponsive to first-line treatments
- Patient preference for non-pharmacological options
- Desire to reduce medication use
- Chemotherapy-related nausea

*Credentialing and Quality:*
- Licensed Acupuncturist (L.Ac.) - most common
- Medical acupuncturists (physician training)
- Physical therapists with dry needling certification
- NCCAOM certification standards`,
      keyTerms: [
        {
          term: "periaqueductal gray (PAG)",
          definition:
            "Midbrain region crucial for pain modulation and descending inhibition",
        },
        {
          term: "wide dynamic range neurons",
          definition:
            "Spinal cord neurons that respond to both innocuous and noxious stimuli",
        },
        {
          term: "contextual effects",
          definition:
            "Therapeutic benefits arising from treatment setting, expectations, and therapeutic relationship",
        },
        {
          term: "NCCAOM",
          definition:
            "National Certification Commission for Acupuncture and Oriental Medicine",
        },
      ],
      clinicalNotes:
        "The distinction between specific and contextual effects is clinically less important than total therapeutic benefit and safety profile. For patients with chronic pain seeking non-pharmacological options, acupuncture offers meaningful benefit with minimal risk. Optimal integration involves clear outcome goals, defined treatment course, and reassessment.",
    },
    5: {
      level: 5,
      summary:
        "Contemporary acupuncture research integrates mechanistic neuroscience, comparative effectiveness methodology, and implementation science to position acupuncture within evidence-based integrative care frameworks, while ongoing investigations address responder characteristics and optimal treatment parameters.",
      explanation: `**State of the Science:**

*Mechanistic Research Frontiers:*
- Optogenetic studies in animal models identifying neural circuits
- Calcium imaging of spinal cord responses
- Identification of TRPV1 and ASIC channels in needle effects
- Fascia research and tensegrity models
- Gut-brain axis effects (especially auricular acupuncture)

*Biomarker Development:*
- Inflammatory markers (IL-6, CRP, TNF-alpha)
- Cortisol and HPA axis measures
- Heart rate variability changes
- Quantitative sensory testing
- Potential for responder prediction

**Comparative Effectiveness Research:**

*Landmark Trials:*
- GERAC trials (German Acupuncture Trials): Large pragmatic trials
- ART trials (Acupuncture Randomized Trials): Specific conditions
- Acupuncture Trialists Collaboration: Individual patient data meta-analyses

*Key Findings from IPD Meta-analyses:*
- Clear superiority over no acupuncture controls
- Modest but significant superiority over sham
- Effects durable at 12-month follow-up
- Similar efficacy across pain conditions

**Implementation Considerations:**

*Health System Integration:*
- VA healthcare system has integrated acupuncture
- Military pain management (Battlefield Acupuncture)
- Academic integrative medicine centers
- Primary care integration models

*Coverage and Access:*
- Medicare coverage for chronic low back pain (2020)
- Variable private insurance coverage
- Out-of-pocket costs remain barrier
- Workforce availability varies by region

**Quality and Safety Monitoring:**

*Adverse Event Data:*
- Serious events rare (<1:10,000 treatments)
- Pneumothorax from thoracic needling
- Infection (essentially eliminated with disposable needles)
- Cardiac tamponade (extremely rare)

*Quality Indicators:*
- Clean needle technique certification
- State licensing requirements vary
- Continuing education requirements
- Malpractice data

**Current Research Priorities:**

*NCCIH Strategic Plan Alignment:*
- Mechanistic studies to identify active components
- Optimization of treatment parameters
- Responder/non-responder characterization
- Real-world effectiveness studies
- Health services research

*Emerging Applications Under Investigation:*
- Addiction treatment (auricular acupuncture protocols)
- Mental health integration (depression, anxiety)
- Peri-operative applications
- Post-COVID symptoms
- Cancer survivorship symptoms

**Clinical Practice Synthesis:**

*Evidence-Based Recommendations:*
1. Chronic musculoskeletal pain: Reasonable option, NICE/ACP guidelines support
2. Migraine/headache prophylaxis: Effective alternative to medications
3. CINV and PONV: Adjunct to antiemetics
4. Other conditions: Case-by-case, shared decision-making

*Practical Integration:*
- Define treatment goals and timeframe
- Typically 6-12 sessions initial course
- Reassess at 6 sessions for response
- Maintenance sessions for chronic conditions
- Coordinate with other treatments

*Communication with Patients:*
- Explain evidence base honestly (including limitations)
- Discuss mechanism uncertainty
- Set appropriate expectations
- Monitor outcomes systematically
- Address both specific and contextual effects`,
      keyTerms: [
        {
          term: "individual patient data meta-analysis",
          definition:
            "Meta-analysis using raw data from each trial participant rather than summary statistics",
        },
        {
          term: "pragmatic trial",
          definition:
            "Clinical trial designed to test effectiveness in real-world practice conditions",
        },
        {
          term: "Battlefield Acupuncture",
          definition:
            "Auricular acupuncture protocol developed for military acute pain management",
        },
        {
          term: "TRPV1",
          definition:
            "Transient receptor potential vanilloid 1, an ion channel involved in pain and heat sensation",
        },
      ],
      clinicalNotes: `Evidence-based integration approach:

For chronic low back pain, neck pain, knee OA:
- Consider after inadequate response to first-line treatments
- Particularly for patients preferring non-pharmacological options
- Document baseline pain scores and function
- 6-12 session trial with defined reassessment

For migraine prophylaxis:
- Evidence comparable to pharmacological prophylaxis
- Consider for medication intolerance or patient preference
- Assess headache frequency before and during treatment

Key resources:
- Acupuncture Trialists Collaboration publications
- NICE guidelines on low back pain and headaches
- VA/DoD clinical practice guidelines
- State licensing board verification for providers`,
    },
  },

  media: [
    {
      id: "acupuncture-points-diagram",
      type: "diagram",
      filename: "acupuncture_points_overview.svg",
      title: "Common Acupuncture Points",
      description:
        "Diagram showing frequently used acupuncture points and meridians",
    },
    {
      id: "acupuncture-mechanism",
      type: "diagram",
      filename: "acupuncture_mechanism.svg",
      title: "Proposed Mechanisms of Acupuncture",
      description:
        "Illustration of peripheral and central nervous system effects",
    },
  ],

  citations: [
    {
      id: "vickers-acupuncture-meta",
      type: "article",
      title:
        "Acupuncture for Chronic Pain: Individual Patient Data Meta-analysis",
      authors: ["Vickers AJ", "Cronin AM", "Maschino AC"],
      source: "Archives of Internal Medicine",
      url: "https://pubmed.ncbi.nlm.nih.gov/22965186/",
    },
    {
      id: "nccih-acupuncture",
      type: "website",
      title: "Acupuncture: In Depth",
      source: "National Center for Complementary and Integrative Health",
      url: "https://www.nccih.nih.gov/health/acupuncture-in-depth",
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
  ],

  tags: {
    systems: ["integrative", "nervous"],
    topics: [
      "acupuncture",
      "pain management",
      "complementary medicine",
      "traditional Chinese medicine",
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

export default acupunctureContent;
