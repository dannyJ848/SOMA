/**
 * Nausea Management - Educational Content
 *
 * Comprehensive content on nausea and vomiting assessment and management
 * in palliative care settings.
 */

import { EducationalContent } from '../../types';

export const nauseaManagement: EducationalContent = {
  id: 'symptom-nausea',
  type: 'concept',
  name: 'Nausea Management',
  alternateNames: ['Anti-Emetic Therapy', 'Nausea and Vomiting Control', 'CINV Management'],

  levels: {
    1: {
      level: 1,
      summary: 'Nausea is feeling like you might throw up. There are many medicines and other ways to help stop this uncomfortable feeling so you can eat and feel better.',
      explanation: `**What Is Nausea?**

Nausea is that queasy, sick feeling in your stomach that makes you feel like you might throw up (vomit). Even if you do not actually throw up, nausea can make you feel terrible.

**Why Does Nausea Happen?**

When you are sick, nausea can happen because of:
- Medicines (especially chemotherapy or pain medicines)
- The illness itself
- Constipation (not being able to go to the bathroom)
- Anxiety or worry
- Smells of food or perfumes
- Motion or movement

**How to Feel Better**

**Medicines That Help**
There are special medicines called anti-nausea medicines that can help you feel better. Your doctor will choose the best one for you.

**Things You Can Do**
- Eat small meals instead of big ones
- Avoid strong smells
- Sip clear liquids like water, broth, or ginger ale
- Eat bland foods (crackers, toast, rice)
- Rest in a comfortable position
- Get fresh air
- Try ginger (ginger tea, ginger candy)

**When to Tell Your Care Team**
- Nausea does not get better with medicine
- You cannot keep food or liquids down
- You are throwing up multiple times a day
- You see blood in your vomit
- You feel very weak or dizzy

**Remember**: Nausea can usually be controlled with the right treatment. Do not suffer in silence - let your care team know so they can help you.`,
      keyTerms: [
        { term: 'nausea', definition: 'The sick feeling in your stomach like you might throw up' },
        { term: 'vomiting', definition: 'Actually throwing up food or liquid from your stomach' },
        { term: 'anti-nausea medicine', definition: 'Medicine that helps stop the feeling of nausea' },
      ],
      analogies: [
        'Nausea is like your stomach sending a false alarm. Anti-nausea medicine helps calm down that alarm so your stomach can relax.',
        'Think of anti-nausea medicine as a referee that tells your upset stomach to settle down.',
      ],
      examples: [
        'Someone getting chemotherapy might take anti-nausea medicine before treatment to prevent feeling sick.',
        'A person taking pain medicine might need a different anti-nausea medicine to help with the side effects.',
      ],
    },
    2: {
      level: 2,
      summary: 'Nausea and vomiting in serious illness have multiple causes requiring systematic assessment and targeted antiemetic therapy based on the underlying mechanism.',
      explanation: `## Understanding Nausea in Serious Illness

### Common Causes

**Medication-Related**
- Opioids (very common - affects 40-70% initially)
- Chemotherapy
- Antibiotics
- NSAIDs

**Disease-Related**
- Bowel obstruction
- Increased intracranial pressure (brain tumors)
- Liver or kidney problems
- Hypercalcemia (high calcium)
- Gastric outlet obstruction

**Other Causes**
- Constipation (very common, often overlooked)
- Anxiety
- Anticipatory nausea (learned response)
- Vestibular problems (motion sensitivity)

### Assessment

**Key Questions**
- When did nausea start? What brings it on?
- Is it constant or intermittent?
- Does vomiting relieve the nausea?
- What does the vomit look like?
- What have you tried? What helps?
- Are you constipated?

**Red Flags**
- Projectile vomiting (may indicate obstruction)
- Fecal vomiting (bowel obstruction)
- Blood in vomit
- Severe abdominal pain
- Signs of dehydration

### Treatment Approach

**Step 1: Identify and Treat the Cause**
- Treat constipation
- Adjust medications
- Address metabolic problems
- Consider bowel obstruction

**Step 2: Choose Appropriate Antiemetic**

*For Chemotherapy-Induced*
- 5-HT3 blockers (ondansetron)
- NK-1 blockers (aprepitant)
- Dexamethasone

*For Opioid-Induced*
- Often improves in 3-5 days
- Dopamine blockers (haloperidol, prochlorperazine)
- Consider opioid rotation if persistent

*For Motion/Vestibular*
- Antihistamines (meclizine)
- Scopolamine patch

*For Anxiety-Related*
- Benzodiazepines (lorazepam)
- Relaxation techniques

**Step 3: Non-Medication Approaches**
- Small, frequent meals
- Avoid trigger smells
- Ginger (tea, candy, capsules)
- Acupressure wristbands
- Relaxation and distraction
- Cool, fresh air

### Prevention

- Start antiemetics BEFORE chemotherapy
- Give bowel regimen with opioids
- Maintain hydration
- Identify and avoid triggers`,
      keyTerms: [
        { term: 'antiemetic', definition: 'Medicine that prevents or treats nausea and vomiting', pronunciation: 'an-tee-eh-MET-ik' },
        { term: 'CINV', definition: 'Chemotherapy-Induced Nausea and Vomiting' },
        { term: 'anticipatory nausea', definition: 'Nausea that happens before treatment, learned from previous bad experiences' },
        { term: 'projectile vomiting', definition: 'Forceful vomiting that travels a distance, may indicate obstruction' },
        { term: 'hypercalcemia', definition: 'Too much calcium in the blood, common cause of nausea in cancer', pronunciation: 'HI-per-kal-SEE-mee-uh' },
      ],
      analogies: [
        'Different antiemetics are like different keys - you need the right key to unlock relief for each type of nausea.',
      ],
    },
    3: {
      level: 3,
      summary: 'Nausea and vomiting management requires understanding the neurophysiology of emesis, receptor-targeted antiemetic selection, and management of specific syndromes including chemotherapy-induced nausea, malignant bowel obstruction, and refractory nausea.',
      explanation: `## Neurophysiology of Nausea and Vomiting

### Emetic Pathways

**Chemoreceptor Trigger Zone (CTZ)**
- Located in area postrema (outside blood-brain barrier)
- Detects blood-borne toxins, medications
- Receptors: D2, 5-HT3, NK-1
- Sends signals to vomiting center

**Vomiting Center (VC)**
- Nucleus tractus solitarius, medulla
- Coordinates emetic reflex
- Integrates signals from multiple sources
- Receptors: H1, M1, 5-HT3

**GI Tract**
- Vagal and splanchnic afferents
- Mechanical and chemical stimulation
- 5-HT3 receptors on vagal afferents

**Vestibular System**
- Motion, position changes
- H1 and M1 receptors

**Higher Cortical Centers**
- Anticipatory nausea
- Emotional and psychological factors

### Receptor-Based Antiemetic Selection

**Dopamine (D2) Antagonists**
- Examples: Haloperidol, prochlorperazine, metoclopramide
- Target: CTZ
- Uses: Opioid-induced, metabolic, general

**Serotonin (5-HT3) Antagonists**
- Examples: Ondansetron, granisetron, palonosetron
- Target: CTZ, GI vagal afferents
- Uses: CINV (acute), radiation-induced, postoperative

**Neurokinin-1 (NK-1) Antagonists**
- Examples: Aprepitant, fosaprepitant, rolapitant
- Target: CTZ, vomiting center
- Uses: CINV (delayed), refractory nausea

**Histamine (H1) Antagonists**
- Examples: Diphenhydramine, meclizine, cyclizine
- Target: Vomiting center, vestibular
- Uses: Vestibular, raised ICP, motion

**Muscarinic (M1) Antagonists**
- Examples: Scopolamine, hyoscine
- Target: Vomiting center, vestibular, GI
- Uses: Motion, vestibular, bowel obstruction

**Corticosteroids**
- Example: Dexamethasone
- Mechanism: Multiple (prostaglandin inhibition, BBB effects)
- Uses: CINV, raised ICP, adjunct

**Benzodiazepines**
- Example: Lorazepam
- Target: Cortical, anticipatory
- Uses: Anticipatory nausea, adjunct

### Specific Syndromes

**Chemotherapy-Induced Nausea and Vomiting (CINV)**

*Risk Stratification*
- High emetogenic: Cisplatin, AC regimen, cyclophosphamide >1500 mg/m2
- Moderate emetogenic: Carboplatin, oxaliplatin, irinotecan
- Low emetogenic: Taxanes, pemetrexed, topotecan

*Antiemetic Regimens*
High emetogenic:
- Day 1: 5-HT3 + NK-1 + dexamethasone + olanzapine
- Days 2-4: NK-1 (if multi-day) + dexamethasone + olanzapine

Moderate emetogenic:
- Day 1: 5-HT3 + dexamethasone
- Days 2-3: Dexamethasone

**Opioid-Induced Nausea**
- Usually resolves in 3-5 days
- D2 antagonist first-line (haloperidol 0.5-1 mg)
- Consider opioid rotation if persistent
- Metoclopramide if gastroparesis component

**Malignant Bowel Obstruction**
- Complete vs. partial obstruction
- Dexamethasone (may reduce edema)
- Octreotide (reduces secretions)
- Anticholinergics for colic
- Avoid prokinetics in complete obstruction

**Refractory Nausea**
- Combine antiemetics from different classes
- Consider olanzapine (multiple receptor activity)
- Cannabinoids (dronabinol, nabilone)
- Levomepromazine (multiple receptors)`,
      keyTerms: [
        { term: 'area postrema', definition: 'Brain region containing CTZ, outside blood-brain barrier', pronunciation: 'AIR-ee-uh poh-STREE-muh' },
        { term: 'NK-1 receptor', definition: 'Neurokinin-1 receptor, target for newer antiemetics' },
        { term: 'palonosetron', definition: 'Long-acting 5-HT3 antagonist with unique receptor binding' },
        { term: 'octreotide', definition: 'Somatostatin analog that reduces GI secretions' },
        { term: 'levomepromazine', definition: 'Antiemetic with activity at multiple receptors for refractory nausea' },
      ],
      clinicalNotes: 'Match antiemetic to likely mechanism. For opioid-induced nausea: D2 antagonist first-line, usually resolves in days. For CINV: follow emetogenic risk-based guidelines. For MBO: octreotide + anticholinergic, avoid prokinetics. For refractory: olanzapine or levomepromazine.',
    },
    4: {
      level: 4,
      summary: 'Advanced nausea management integrates mechanistic understanding, evidence-based antiemetic regimens for specific clinical scenarios, management of refractory symptoms, and emerging therapies.',
      explanation: `## Advanced Antiemetic Therapy

### Olanzapine in CINV

**Mechanism**
- Blocks D1, D2, D3, D4, 5-HT2, 5-HT3, 5-HT6, H1, M1-5
- Broad-spectrum antiemetic activity

**Evidence**
*Navari et al., NEJM 2016*
- Olanzapine vs placebo with standard antiemetics
- Superior for both acute and delayed CINV
- Nausea-free rate 74% vs 45%

**Dosing**
- 10 mg days 1-4 for highly emetogenic chemo
- 5 mg may be effective with less sedation
- Can use 2.5-5 mg for breakthrough

**Adverse Effects**
- Sedation (most common)
- Hyperglycemia
- Weight gain (chronic use)

### Refractory Nausea Management

**Assessment**
- Confirm adequate dosing of current antiemetics
- Identify reversible causes (constipation, medications)
- Consider previously untargeted mechanisms

**Escalation Strategies**

*Add Different Mechanism*
- If on 5-HT3, add D2 antagonist
- If on D2, add 5-HT3 or anticholinergic
- Consider NK-1 antagonist if not used

*Switch Within Class*
- Different 5-HT3 agents have different profiles
- Palonosetron has longer half-life

*Broad-Spectrum Agents*
- Olanzapine: Multiple receptors
- Levomepromazine: D2, H1, 5-HT2, M1, alpha

*Cannabinoids*
- Dronabinol 2.5-5 mg BID-TID
- Nabilone 1-2 mg BID
- CB1 receptor agonist mechanism
- May help when other agents fail

### Malignant Bowel Obstruction

**Medical Management Goals**
- Reduce nausea and vomiting
- Control pain
- Reduce secretions
- Avoid surgery if possible

**Pharmacological Approach**

*Antisecretory*
- Octreotide: 100-600 mcg/day SC (start 100-200 mcg TID)
- Reduces GI secretions
- May improve nausea without NGT

*Antiemetics*
- Haloperidol 0.5-2 mg q4-6h
- Levomepromazine 6.25-12.5 mg q6-12h
- Cyclizine 50 mg q8h

*Anticholinergics*
- Hyoscine butylbromide 60-120 mg/day
- Glycopyrrolate 0.2-0.4 mg q4-6h
- For colicky pain

*Corticosteroids*
- Dexamethasone 8-16 mg/day
- May reduce edema around obstruction
- Evidence limited but commonly used

**Interventional Options**
- Venting gastrostomy
- Endoscopic stenting (selected cases)
- Palliative surgery (selected patients)

### Special Situations

**Anticipatory Nausea**
- Conditioned response from previous CINV
- Occurs before or upon arriving for treatment
- Prevention: Good acute control from first cycle
- Treatment: Benzodiazepines, behavioral therapy, hypnosis

**Radiation-Induced Nausea**
- Risk depends on field (abdomen highest)
- 5-HT3 antagonists effective
- Prophylaxis based on emetogenic risk of RT field

**Nausea at End of Life**
- Common in final days
- May be multifactorial
- Simplify regimen: Often single agent SC
- Comfort is goal, not complete control
- Consider reduced oral intake as natural`,
      keyTerms: [
        { term: 'levomepromazine', definition: 'Broad-spectrum antiemetic blocking multiple receptors, useful in refractory nausea' },
        { term: 'venting gastrostomy', definition: 'Tube placed in stomach for drainage to relieve obstruction symptoms' },
        { term: 'hyoscine butylbromide', definition: 'Anticholinergic used for bowel colic, also called buscopan' },
        { term: 'conditioned response', definition: 'Learned association causing symptoms (like anticipatory nausea)' },
      ],
      clinicalNotes: 'For CINV, add olanzapine 10 mg days 1-4 for highly emetogenic regimens. For refractory nausea, try olanzapine or levomepromazine (broad-spectrum). For MBO: octreotide (start 100 mcg TID) + anticholinergic (glycopyrrolate) + haloperidol. Consider venting G-tube if medical management fails.',
    },
    5: {
      level: 5,
      summary: 'Expert nausea management encompasses evidence synthesis for antiemetic guideline development, emerging therapeutic targets, research in refractory symptoms, quality improvement in CINV management, and leadership in antiemetic stewardship.',
      explanation: `## Evidence Synthesis and Guidelines

### CINV Guidelines Comparison

**ASCO Guidelines (2020)**
High emetogenic:
- 5-HT3 + NK-1 + dexamethasone + olanzapine

Moderate emetogenic:
- 5-HT3 + dexamethasone (+/- NK-1)

**NCCN Guidelines**
Similar to ASCO with more granular recommendations

**MASCC/ESMO Guidelines**
European perspective, similar core recommendations

### Evidence Quality Issues

**Strengths**
- Multiple large RCTs for CINV
- Clear efficacy of 5-HT3 and NK-1 agents

**Limitations**
- Limited research in non-cancer populations
- Refractory nausea poorly studied
- Few comparative effectiveness studies
- Limited palliative care-specific research

## Emerging Therapies

### NEPA (Netupitant/Palonosetron)

**Formulation**
- Fixed combination: Netupitant 300 mg + palonosetron 0.5 mg
- Single dose provides NK-1 + 5-HT3 coverage

**Evidence**
- Non-inferior to aprepitant + palonosetron
- Simplified administration (one capsule)

### Rolapitant

**Properties**
- Long half-life (180 hours)
- Single dose before chemotherapy
- No CYP3A4 interaction (unlike aprepitant)

### Novel Targets

**TRPV1 Antagonists**
- Capsaicin receptor
- Early research for CINV

**Ghrelin Agonists**
- May improve nausea and appetite
- Anamorelin under investigation

**5-HT4 Agonists**
- Prokinetic effect
- Prucalopride for gastroparesis-related nausea

## Quality Improvement

### CINV Quality Metrics

**Process Measures**
- Antiemetic guideline adherence rate
- Prophylaxis prescribing at chemotherapy
- Assessment documentation

**Outcome Measures**
- CINV rates (by emetogenic risk)
- Complete response (no vomiting, no rescue)
- Nausea severity scores

**Improvement Strategies**
- EHR clinical decision support
- Standardized order sets
- Pharmacist review
- Patient education materials

### Antiemetic Stewardship

**Principles**
- Right drug, right dose, right time
- Avoid unnecessary medications
- Cost-effective choices

**Implementation**
- Protocol development
- Education
- Audit and feedback
- Formulary management

## Research Priorities

### Refractory Nausea

**Gaps**
- Poorly defined in literature
- No standardized approach
- Limited evidence base

**Needed Research**
- Definition consensus
- Comparative effectiveness trials
- Novel mechanism exploration
- Palliative population studies

### Non-Cancer Nausea

**Populations**
- Heart failure
- Renal failure
- Neurological disease
- Multi-morbidity

**Challenges**
- Heterogeneous causes
- Multiple concurrent medications
- Limited research investment

### Patient-Reported Outcomes

**Integration**
- Real-time symptom monitoring
- ePRO collection during treatment
- Alert systems for breakthrough symptoms

## Special Considerations

### Nausea at End of Life

**Prevalence**
- 60-70% in final weeks
- Often multifactorial
- May relate to organ failure, medications, reduced intake

**Management Principles**
- Simplify medications
- Consider SC or rectal if unable to swallow
- Focus on comfort over complete control
- Reframe goals with patient/family

**Common Regimens**
- Haloperidol 0.5-1 mg SC q4-6h
- Levomepromazine 6.25-12.5 mg SC q12h
- Metoclopramide 10 mg SC q6-8h (if motility issue)

### Cannabinoid Evidence

**Available Agents**
- Dronabinol (THC)
- Nabilone (synthetic THC analog)
- Medical cannabis (variable formulations)

**Evidence**
- Modest efficacy vs placebo
- May be similar to other antiemetics
- Some patients have strong preference
- Psychoactive effects limit use

**Clinical Use**
- Generally third-line
- May be helpful when other agents fail
- Start low (dronabinol 2.5 mg BID)
- Monitor for CNS effects`,
      keyTerms: [
        { term: 'NEPA', definition: 'Fixed combination of netupitant and palonosetron in single capsule' },
        { term: 'rolapitant', definition: 'Long-acting NK-1 antagonist with 180-hour half-life' },
        { term: 'complete response', definition: 'No vomiting and no rescue antiemetics needed' },
        { term: 'antiemetic stewardship', definition: 'Program to optimize antiemetic use for efficacy and cost-effectiveness' },
        { term: 'ghrelin agonist', definition: 'Drug stimulating ghrelin receptor, may improve appetite and nausea' },
      ],
      clinicalNotes: `Expert-level nausea management considerations:
1. Implement guideline-concordant CINV prophylaxis with EHR decision support
2. For refractory nausea: systematic approach - olanzapine, levomepromazine, cannabinoids
3. MBO: octreotide-based regimen with consideration of venting G-tube
4. Track CINV quality metrics and implement antiemetic stewardship
5. At end of life: simplify to single agent SC (haloperidol or levomepromazine)
6. Contribute to research filling evidence gaps in non-cancer and refractory nausea`,
    },
  },

  media: [
    {
      id: 'emetic-pathways-diagram',
      type: 'diagram',
      filename: 'emetic-pathways.svg',
      title: 'Emetic Pathways',
      description: 'Diagram showing the neural pathways involved in nausea and vomiting',
    },
  ],

  citations: [
    {
      id: 'asco-cinv-guidelines',
      type: 'article',
      title: 'Antiemetics: ASCO Guideline Update',
      authors: ['Hesketh, P.J.', 'Kris, M.G.', 'Basch, E.', 'et al.'],
      source: 'Journal of Clinical Oncology',
      url: 'https://ascopubs.org/doi/10.1200/JCO.20.01296',
    },
    {
      id: 'navari-olanzapine',
      type: 'article',
      title: 'Olanzapine for the Prevention of Chemotherapy-Induced Nausea and Vomiting',
      authors: ['Navari, R.M.', 'Qin, R.', 'Ruddy, K.J.', 'et al.'],
      source: 'New England Journal of Medicine',
      url: 'https://doi.org/10.1056/NEJMoa1515725',
    },
  ],

  crossReferences: [
    { targetId: 'symptom-overview', targetType: 'topic', relationship: 'parent', label: 'Symptom Management Overview' },
    { targetId: 'symptom-pain', targetType: 'topic', relationship: 'sibling', label: 'Pain Management' },
    { targetId: 'concept-quality-of-life', targetType: 'concept', relationship: 'related', label: 'Quality of Life Focus' },
  ],

  tags: {
    systems: ['palliative-care', 'gastrointestinal'],
    topics: ['nausea', 'vomiting', 'antiemetics', 'symptom management', 'CINV'],
    clinicalRelevance: 'critical',
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default nauseaManagement;
