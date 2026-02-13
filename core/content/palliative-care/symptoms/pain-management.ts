/**
 * Pain Management - Educational Content
 *
 * Comprehensive content on pain assessment and management
 * in palliative care settings, with compassionate approach
 * to helping patients achieve comfort.
 */

import { EducationalContent } from '../../types';

export const painManagement: EducationalContent = {
  id: 'symptom-pain',
  type: 'concept',
  name: 'Pain Management',
  alternateNames: ['Pain Control', 'Analgesia', 'Pain Relief'],

  levels: {
    1: {
      level: 1,
      summary: 'Pain management means using medicines and other methods to help reduce or stop pain so you can feel more comfortable and do the things that matter to you.',
      explanation: `**Understanding Pain**

Pain is your body's way of telling you something is wrong. Everyone feels pain differently, and your pain is real even if others cannot see it.

**Types of Pain**
- **Sharp pain**: Sudden and intense, like a cut or injury
- **Aching pain**: Deep, dull discomfort
- **Burning or tingling**: Unusual feelings, often from nerve problems
- **Cramping**: Tight, squeezing feelings

**How We Measure Pain**

Doctors often ask you to rate your pain on a scale:
- **0** = No pain at all
- **1-3** = Mild pain (annoying but can still do things)
- **4-6** = Moderate pain (hard to ignore, affects activities)
- **7-10** = Severe pain (hard to do anything, very distressing)

**Ways to Treat Pain**

**Medicines**
- Over-the-counter medicines like Tylenol or ibuprofen
- Prescription pain medicines for stronger pain
- Medicines for specific types of pain (like nerve pain)

**Other Helpful Methods**
- Ice or heat on sore areas
- Gentle massage
- Deep breathing and relaxation
- Distraction (music, TV, talking with loved ones)
- Comfortable positioning

**Important Things to Remember**

- It is okay to ask for pain medicine - you deserve to be comfortable
- Tell your care team honestly how much pain you have
- Pain medicine works best when taken regularly, not just when pain is bad
- There are many options - if one does not work, others might help`,
      keyTerms: [
        { term: 'pain scale', definition: 'A way to measure pain using numbers from 0 (no pain) to 10 (worst pain)' },
        { term: 'pain medicine', definition: 'Medicine that helps reduce or stop pain' },
        { term: 'nerve pain', definition: 'Pain caused by damaged or irritated nerves, often burning or tingling' },
      ],
      analogies: [
        'Pain is like an alarm going off - pain medicine helps turn down the volume so you can function better.',
        'Managing pain is like adjusting a thermostat - we work together to find the right setting where you feel comfortable.',
      ],
      examples: [
        'Someone with back pain might use a combination of pain medicine, a heating pad, and gentle stretches to feel better.',
        'A person with nerve pain might need a special type of medicine that works differently from regular pain medicine.',
      ],
    },
    2: {
      level: 2,
      summary: 'Pain management involves systematic assessment of pain characteristics, selection of appropriate medications based on pain type and severity, and integration of non-pharmacological approaches to optimize comfort and function.',
      explanation: `## Understanding Pain in Serious Illness

### Pain Assessment

**Key Questions**
- Location: Where does it hurt?
- Quality: What does it feel like? (sharp, dull, burning, aching)
- Intensity: How severe? (0-10 scale)
- Timing: When does it occur? Constant or intermittent?
- Aggravating/relieving factors: What makes it better or worse?
- Impact: How does it affect daily life, sleep, mood?

**Pain Types**
- **Nociceptive pain**: From tissue damage
  - Somatic: Well-localized, aching (bones, muscles)
  - Visceral: Deep, crampy (organs)
- **Neuropathic pain**: From nerve damage
  - Burning, shooting, tingling, electric

### Medication Approaches

**The Pain Ladder**
Traditionally, treatment follows a stepwise approach:
1. Mild pain: Acetaminophen, NSAIDs
2. Moderate pain: Weak opioids (codeine, tramadol) or low-dose strong opioids
3. Severe pain: Strong opioids (morphine, oxycodone, hydromorphone, fentanyl)

**Key Principles**
- By mouth (oral) when possible
- By the clock (scheduled, not just "as needed")
- By the ladder (match treatment to pain level)
- Individualized (everyone responds differently)

**Common Pain Medications**

*Non-Opioids*
- Acetaminophen: Safe, good for mild pain
- NSAIDs (ibuprofen, naproxen): Good for inflammation

*Opioids*
- Morphine: Standard strong opioid
- Oxycodone: Similar to morphine
- Hydromorphone: More potent, less metabolites
- Fentanyl: Available as patch for constant pain

*Adjuvants* (helpers for specific pain types)
- Gabapentin/pregabalin: For nerve pain
- Antidepressants: For nerve pain and mood
- Steroids: For inflammation and swelling

### Non-Medication Approaches

- Heat and cold therapy
- Physical therapy and gentle exercise
- Massage and touch therapy
- Relaxation techniques
- Mindfulness and meditation
- Distraction and engaging activities
- Acupuncture

### Side Effects of Pain Medications

**Opioid Side Effects**
- Constipation (very common - needs prevention)
- Nausea (usually improves)
- Drowsiness (usually improves)
- Confusion (watch in elderly)

**Managing Side Effects**
- Constipation: Start bowel regimen with opioid
- Nausea: Often temporary, antiemetics help
- Drowsiness: May need dose adjustment`,
      keyTerms: [
        { term: 'opioid', definition: 'Strong pain medicine that works on specific receptors in the brain to reduce pain signals', pronunciation: 'OH-pee-oyd' },
        { term: 'NSAID', definition: 'Non-steroidal anti-inflammatory drug - reduces pain and inflammation', pronunciation: 'EN-said' },
        { term: 'adjuvant', definition: 'A helper medication that enhances pain relief or treats specific pain types', pronunciation: 'AD-juh-vant' },
        { term: 'nociceptive', definition: 'Pain from actual tissue damage', pronunciation: 'NO-sih-SEP-tiv' },
        { term: 'neuropathic', definition: 'Pain from nerve damage or dysfunction', pronunciation: 'noor-oh-PATH-ik' },
      ],
      analogies: [
        'Opioids are like volume control for pain signals - they turn down the messages going to your brain.',
        'Adjuvant medications are like specialized tools - a screwdriver for one type of screw, a wrench for another. Different pain types need different treatments.',
      ],
    },
    3: {
      level: 3,
      summary: 'Comprehensive pain management requires mechanistic classification, multimodal pharmacotherapy targeting specific receptors and pathways, opioid pharmacology understanding, and integration of interventional and psychological approaches.',
      explanation: `## Pain Classification and Mechanism

### Mechanistic Classification

**Nociceptive Pain**
*Somatic*
- Activation of peripheral nociceptors in skin, bone, muscle
- Well-localized
- Described as aching, throbbing, gnawing
- Examples: Bone metastases, surgical incisions

*Visceral*
- Nociceptors in organs and viscera
- Poorly localized, referred patterns
- Described as pressure, cramping, deep ache
- Examples: Liver capsule distension, bowel obstruction

**Neuropathic Pain**
- Damage or dysfunction of nervous system
- Peripheral: Nerve compression, chemotherapy-induced
- Central: Spinal cord involvement, stroke
- Described as burning, shooting, electric, tingling
- Associated with allodynia and hyperalgesia

**Mixed Pain**
Many patients have components of both nociceptive and neuropathic pain

### Opioid Pharmacology

**Mechanism**
- Agonists at mu, kappa, delta opioid receptors
- Primarily mu receptor for analgesia
- Inhibit ascending pain pathways
- Activate descending inhibitory pathways

**Key Pharmacokinetic Concepts**
- Onset: IV immediate, oral 30-60 minutes
- Duration: Short-acting 4 hours, long-acting 8-24 hours
- Metabolism: Hepatic (CYP450 enzymes)
- Elimination: Renal (morphine-6-glucuronide accumulation in renal failure)

**Equianalgesic Dosing**
Approximate equivalents to morphine 30 mg PO:
- Oxycodone: 20 mg PO
- Hydromorphone: 6 mg PO
- Fentanyl: 100 mcg IV (NOT directly equivalent for chronic dosing)

**Opioid Selection**
- Morphine: Standard first-line
- Oxycodone: Less histamine release
- Hydromorphone: Better in renal impairment
- Fentanyl: Patch for stable pain, renal failure
- Methadone: NMDA activity, complex dosing

### Adjuvant Analgesics

**Anticonvulsants (Gabapentinoids)**
- Gabapentin, pregabalin
- Bind alpha-2-delta calcium channels
- First-line for neuropathic pain
- Start low, titrate slowly

**Antidepressants**
- TCAs (amitriptyline, nortriptyline): Norepinephrine and serotonin
- SNRIs (duloxetine, venlafaxine): Preferred, fewer side effects
- First-line for neuropathic pain

**Corticosteroids**
- Reduce inflammation and edema
- Useful for nerve compression, bone pain, visceral distension
- Consider side effects with prolonged use

**Topical Agents**
- Lidocaine patch: Localized neuropathic pain
- Capsaicin: Peripheral neuropathy (substance P depletion)

### Multimodal Analgesia

**Rationale**
- Target multiple pain mechanisms
- Additive or synergistic effects
- Lower doses of each drug
- Reduced side effects

**Components**
1. Opioid (mu agonist)
2. Non-opioid (acetaminophen or NSAID)
3. Neuropathic agent (gabapentinoid, SNRI)
4. +/- Interventional approach
5. +/- Non-pharmacological

### Breakthrough Pain

**Definition**: Transient flare of moderate-severe pain despite controlled baseline

**Types**
- Spontaneous: Unpredictable
- Incident: Related to activity (movement, coughing)
- End-of-dose failure: Before next scheduled dose

**Treatment**
- Immediate-release opioid
- Dose: 10-15% of 24-hour opioid dose
- Onset: Oral 30-60 min, buccal/IV faster
- Frequency: Available every 1-2 hours`,
      keyTerms: [
        { term: 'equianalgesic', definition: 'Doses of different opioids that provide equivalent pain relief' },
        { term: 'breakthrough pain', definition: 'Transient flare of pain despite controlled baseline pain' },
        { term: 'allodynia', definition: 'Pain from a stimulus that normally does not cause pain' },
        { term: 'hyperalgesia', definition: 'Increased sensitivity to painful stimuli' },
        { term: 'multimodal analgesia', definition: 'Using multiple medications and approaches targeting different pain mechanisms' },
      ],
      clinicalNotes: 'Always assess pain type (nociceptive vs. neuropathic) before selecting treatment. Use multimodal approach for most patients with moderate-severe pain. Prescribe breakthrough medication with all long-acting opioids. Start bowel regimen with all opioid prescriptions. Reduce opioid doses 25-50% in renal failure.',
    },
    4: {
      level: 4,
      summary: 'Expert pain management involves understanding opioid pharmacogenomics, managing complex pain syndromes, appropriate use of interventional techniques, addressing opioid tolerance and opioid-induced hyperalgesia, and managing pain in special populations.',
      explanation: `## Advanced Opioid Pharmacology

### Pharmacogenomics

**CYP2D6 Polymorphisms**
- Metabolizes codeine to morphine, tramadol to active metabolite
- Poor metabolizers (5-10%): Codeine/tramadol ineffective
- Ultra-rapid metabolizers (1-7%): Increased toxicity risk
- Clinical implications: Consider genotyping for unexpected responses

**OPRM1 Polymorphisms**
- Mu opioid receptor gene
- 118A>G variant associated with altered opioid requirements
- May affect postoperative opioid needs

**Transporter Genes**
- ABCB1 (P-glycoprotein) affects opioid CNS penetration
- Polymorphisms may affect opioid response

### Complex Pain Syndromes

**Bone Metastases**
- Mixed nociceptive/neuropathic
- NSAID + opioid backbone
- Consider bisphosphonates/denosumab
- Palliative radiation highly effective (50-80% response)
- Radionuclides for diffuse bone pain

**Malignant Bowel Obstruction**
- Visceral + colicky components
- Opioids for continuous pain
- Anticholinergics for colic (hyoscine, glycopyrrolate)
- Consider octreotide for secretions
- Avoid prokinetics if complete obstruction

**Plexopathies**
- Mixed nociceptive/neuropathic
- Brachial plexus (lung, breast)
- Lumbosacral plexus (GYN, GI, GU)
- Aggressive multimodal approach required
- Consider interventional approaches early

**Central Pain**
- Thalamic stroke, spinal cord involvement
- Often refractory to opioids
- TCAs, gabapentinoids, cannabinoids
- May require ketamine or palliative sedation

### Interventional Pain Management

**Indications**
- Refractory to medical management
- Dose-limiting side effects
- Localized pain amenable to regional technique
- Patient preference

**Techniques**

*Nerve Blocks*
- Celiac plexus block: Pancreatic cancer, upper GI
- Superior hypogastric plexus: Pelvic cancer
- Intercostal blocks: Chest wall pain
- Peripheral nerve blocks: Localized pain

*Neuraxial Techniques*
- Epidural analgesia: Localized pain
- Intrathecal drug delivery: Refractory cancer pain
- Benefits: Better analgesia, fewer systemic effects

*Neurolytic Techniques*
- Chemical neurolysis (alcohol, phenol)
- Radiofrequency ablation
- Permanent nerve destruction

*Vertebral Augmentation*
- Vertebroplasty, kyphoplasty
- For painful vertebral compression fractures

### Challenging Situations

**Opioid Tolerance**
- Diminished response requiring dose increase
- Cross-tolerance incomplete between opioids
- Management: Opioid rotation, adjuvants, interventional

**Opioid-Induced Hyperalgesia (OIH)**
- Paradoxical increased pain sensitivity
- Distinguish from tolerance
- Diffuse pain, often hyperalgesia
- Treatment: Opioid reduction, rotation, NMDA antagonists

**Pain in Opioid Use Disorder**
- Do not undertreat pain
- Higher opioid requirements expected (tolerance)
- Consider buprenorphine for dual treatment
- Addiction medicine consultation

### Special Populations

**Renal Impairment**
- Avoid morphine (M6G accumulates)
- Prefer hydromorphone, fentanyl
- Reduce doses, extend intervals
- Monitor closely for toxicity

**Hepatic Impairment**
- Prolonged half-lives
- Avoid prodrugs (codeine, tramadol)
- Start low, titrate slowly
- Fentanyl relatively safe

**Elderly**
- Increased sensitivity
- Start at 25-50% usual dose
- Longer dose intervals
- Watch for delirium, falls

**Pediatric**
- Weight-based dosing
- Age-appropriate assessment
- Same medications, appropriate formulations
- Family-centered approach`,
      keyTerms: [
        { term: 'opioid-induced hyperalgesia', definition: 'Paradoxical increase in pain sensitivity from opioid therapy' },
        { term: 'neurolysis', definition: 'Destruction of nerve tissue to provide pain relief', pronunciation: 'noor-OL-ih-sis' },
        { term: 'intrathecal', definition: 'Medication delivered directly into the spinal fluid', pronunciation: 'in-truh-THEE-kul' },
        { term: 'celiac plexus block', definition: 'Injection to block nerves supplying upper abdominal organs' },
        { term: 'M6G', definition: 'Morphine-6-glucuronide, active metabolite that accumulates in renal failure' },
      ],
      clinicalNotes: 'Consider pharmacogenomic testing for patients with unexpected opioid responses. Recognize OIH: diffuse pain, allodynia, worsening with dose increases. Refer for interventional pain management when: 1) refractory to medical management, 2) localized pain amenable to regional technique, 3) dose-limiting side effects. Always adjust opioid dosing in renal/hepatic impairment and elderly.',
    },
    5: {
      level: 5,
      summary: 'Cutting-edge pain management integrates precision medicine approaches, novel therapeutic targets, advanced interventional techniques, system-level quality initiatives, and leadership in pain research and education.',
      explanation: `## Precision Pain Medicine

### Pharmacogenomic Implementation

**Testing Panels**
- CYP2D6, CYP2C19, CYP3A4
- OPRM1, COMT, ABCB1
- UGT2B7 (morphine glucuronidation)

**Clinical Decision Support**
- EHR-integrated alerts
- Dosing recommendations based on genotype
- CPIC guidelines for opioid prescribing

**Evidence Base**
- Limited prospective trials
- Retrospective associations established
- Implementation studies ongoing

### Novel Therapeutic Targets

**NMDA Receptor Antagonists**
- Ketamine: Subanesthetic dosing for refractory pain
- Routes: IV, SC, oral, intranasal
- Protocols: 0.1-0.5 mg/kg/hr IV
- Monitor for dissociation, hypertension

**Sodium Channel Blockers**
- Lidocaine IV infusion
- 1-5 mg/kg/hr with cardiac monitoring
- Effective for neuropathic pain
- Oral mexiletine for maintenance

**Cannabinoids**
- Endocannabinoid system modulation
- CB1, CB2 receptor targets
- Modest evidence for cancer pain
- Opioid-sparing potential
- Dosing standardization challenges

**Emerging Targets**
- NGF inhibitors (tanezumab)
- TrkA inhibitors
- Nav1.7 selective blockers
- Biased opioid agonists (reduced side effects)

## Advanced Interventional Techniques

### Intrathecal Drug Delivery Systems (IDDS)

**Indications**
- Refractory pain despite optimized oral/transdermal
- Dose-limiting side effects
- Life expectancy >3-6 months

**Medications**
- Morphine: FDA-approved, standard
- Hydromorphone: Off-label, common
- Ziconotide: Non-opioid N-type calcium channel blocker
- Combinations: Opioid + local anesthetic + clonidine

**Complications**
- Catheter complications (10-15%)
- Infection (2-3%)
- Granuloma formation (rare, high-dose morphine)
- Respiratory depression (dose-related)

### Neuromodulation

**Spinal Cord Stimulation**
- Traditional SCS for neuropathic pain
- High-frequency and burst paradigms
- Cancer pain: Limited but emerging evidence

**Peripheral Nerve Stimulation**
- For localized peripheral neuropathic pain
- Ultrasound-guided placement

### Minimally Invasive Ablative Techniques

**Percutaneous Cordotomy**
- Interrupts spinothalamic tract
- For unilateral pain below C5
- CT-guided or fluoroscopic
- Mesothelioma, lung cancer

**Radiofrequency Ablation**
- Thermal nerve destruction
- Facet joint denervation
- Tumor ablation for pain

## System-Level Quality Initiatives

### Pain Management Quality Metrics

**Structure Measures**
- Pain management protocols available
- Interventional pain access
- Palliative care availability

**Process Measures**
- Pain assessment documentation
- Pain reassessment after intervention
- Multimodal approaches used

**Outcome Measures**
- Pain scores over time
- Functional improvement
- Patient satisfaction

### Opioid Stewardship

**Principles**
- Risk assessment (ORT, SOAPP)
- Treatment agreements
- PDMP checking
- Urine drug testing
- Naloxone coprescription
- Safe storage/disposal

**Balancing Access and Safety**
- Patients with serious illness need adequate pain control
- Regulatory burden can impede appropriate prescribing
- Education and advocacy needed

### Research Priorities

**Clinical Trial Challenges**
- Heterogeneous populations
- Dropout due to illness progression
- Ethical considerations
- Outcome measure selection

**Priority Areas**
- Comparative effectiveness of opioids
- Opioid-sparing interventions
- Cannabinoids in cancer pain
- Precision medicine approaches
- Non-pharmacological interventions
- Implementation and dissemination

### Education and Workforce

**Competencies**
- Pain assessment across populations
- Multimodal management
- Opioid prescribing safety
- Interventional pain basics
- Communication about pain

**Training Programs**
- Palliative medicine fellowships
- Pain medicine fellowships
- Primary palliative care training
- IPE with nursing, pharmacy, psychology

## Ethical Considerations

### Pain at End of Life

**Principle of Double Effect**
- Intent is symptom relief
- Foreseeable but unintended life shortening
- Proportionality of benefit vs. risk
- No more effective alternative

**Palliative Sedation for Refractory Pain**
- Last resort for truly refractory symptoms
- Proportional sedation first
- Informed consent
- Documentation of refractoriness

### Opioid Access and Equity

**Global Disparities**
- 80% of world lacks adequate pain treatment
- Opioid availability varies dramatically
- Regulatory barriers in many countries

**Domestic Disparities**
- Racial disparities in pain assessment
- Socioeconomic barriers to treatment
- Rural access challenges

**Advocacy Role**
- Policy engagement
- Reducing stigma
- Education to reduce disparities`,
      keyTerms: [
        { term: 'CPIC', definition: 'Clinical Pharmacogenetics Implementation Consortium - provides guidelines for pharmacogenomic prescribing' },
        { term: 'ziconotide', definition: 'Non-opioid intrathecal analgesic, synthetic cone snail toxin blocking N-type calcium channels' },
        { term: 'percutaneous cordotomy', definition: 'Procedure interrupting spinothalamic tract for unilateral refractory pain' },
        { term: 'double effect', definition: 'Ethical principle where foreseeable harm is permissible if intent is to relieve suffering' },
        { term: 'IDDS', definition: 'Intrathecal Drug Delivery System - implanted pump for spinal medication delivery' },
      ],
      clinicalNotes: `Expert-level pain management considerations:
1. Consider IDDS for patients with refractory pain and life expectancy >3-6 months
2. Ketamine infusion for opioid-refractory pain (0.1-0.5 mg/kg/hr)
3. Implement pharmacogenomic testing for CYP2D6 at minimum
4. Engage in opioid stewardship while ensuring access for serious illness
5. Address pain disparities through education and advocacy
6. Apply principle of double effect and document intent for high-dose opioids at end of life
7. Lead research and quality improvement in pain management`,
    },
  },

  media: [
    {
      id: 'pain-ladder-diagram',
      type: 'diagram',
      filename: 'who-pain-ladder.svg',
      title: 'WHO Pain Ladder',
      description: 'Modified WHO analgesic ladder for cancer pain management',
    },
    {
      id: 'pain-assessment-tool',
      type: 'diagram',
      filename: 'pain-assessment-scale.svg',
      title: 'Pain Assessment Scale',
      description: 'Visual analog and numeric rating scales for pain assessment',
    },
  ],

  citations: [
    {
      id: 'who-cancer-pain',
      type: 'website',
      title: 'WHO Guidelines for the Pharmacological and Radiotherapeutic Management of Cancer Pain',
      source: 'World Health Organization',
      url: 'https://www.who.int/publications/i/item/9789241550390',
    },
    {
      id: 'nccn-adult-cancer-pain',
      type: 'website',
      title: 'NCCN Clinical Practice Guidelines in Oncology: Adult Cancer Pain',
      source: 'National Comprehensive Cancer Network',
      url: 'https://www.nccn.org/professionals/physician_gls/pdf/pain.pdf',
    },
  ],

  crossReferences: [
    { targetId: 'symptom-overview', targetType: 'topic', relationship: 'parent', label: 'Symptom Management Overview' },
    { targetId: 'concept-comfort-care', targetType: 'concept', relationship: 'related', label: 'Comfort Care Measures' },
    { targetId: 'concept-quality-of-life', targetType: 'concept', relationship: 'related', label: 'Quality of Life Focus' },
  ],

  tags: {
    systems: ['palliative-care', 'nervous-system'],
    topics: ['pain', 'symptom management', 'opioids', 'analgesia'],
    clinicalRelevance: 'critical',
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default painManagement;
