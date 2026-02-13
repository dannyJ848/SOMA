/**
 * Diagnostic Framework
 *
 * A systematic approach to building differential diagnoses across clinical presentations.
 * Provides structured frameworks for organizing diagnostic thinking.
 */

import { EducationalContent } from '../../types';

export const diagnosticFrameworkContent: EducationalContent = {
  id: 'diagnostic-framework',
  type: 'concept',
  name: 'Diagnostic Framework',
  alternateNames: ['Differential Diagnosis Framework', 'Diagnostic Structure', 'Clinical Framework'],

  levels: {
    1: {
      level: 1,
      summary: 'A diagnostic framework is like organizing your closet - it helps doctors sort possible causes of symptoms into groups to figure out what is wrong.',
      explanation: `When doctors try to figure out what is causing your symptoms, they need a way to organize their thinking. A diagnostic framework is like sorting your clothes into different drawers - one for shirts, one for pants, one for socks. This makes it easier to find what you are looking for!

**Why Do Doctors Need Frameworks?**

When someone has a symptom like chest pain, there are many possible causes. Without a system, doctors might miss something important. A framework helps them:

1. **Think of all possibilities** - Just like checking every drawer when looking for a shirt
2. **Organize by importance** - Some causes are emergencies, others are not
3. **Remember what to check** - Like a checklist to make sure nothing is forgotten

**Common Framework Groups:**

Doctors often sort possible causes into these groups:
- **Dangerous causes** (need immediate attention)
- **Common causes** (happen to many people)
- **Body system causes** (heart, lungs, stomach, etc.)
- **Patient-specific causes** (based on age, history, etc.)

**Example:**
If someone has a headache, dangerous causes include bleeding in the brain. Common causes include tension or migraines. The framework helps doctors check for dangerous causes first, then consider common ones.`,
      keyTerms: [
        { term: 'diagnosis', definition: 'Figuring out what is causing someone\'s symptoms or illness' },
        { term: 'symptom', definition: 'A change in the body that shows something might be wrong, like pain or fever' },
        { term: 'framework', definition: 'A system or plan that helps organize thinking' },
        { term: 'differential diagnosis', definition: 'A list of possible causes for a person\'s symptoms' },
      ],
      analogies: [
        'A diagnostic framework is like a detective using categories to solve a mystery - they consider motives, alibis, and evidence to narrow down suspects.',
        'It is like organizing groceries - you put cold items together, canned goods together, and produce together so you can find what you need quickly.',
      ],
      examples: [
        'A doctor uses a framework to consider that chest pain could come from the heart, lungs, muscles, or stomach before deciding which tests to order.',
        'When a child has a fever, the framework helps the doctor think about infections, inflammatory conditions, and less common causes in order of likelihood.',
      ],
    },
    2: {
      level: 2,
      summary: 'Diagnostic frameworks provide systematic approaches to generating and organizing differential diagnoses, helping clinicians consider all possibilities while prioritizing by urgency and likelihood.',
      explanation: `When healthcare providers evaluate symptoms, they use diagnostic frameworks to organize their thinking systematically. These frameworks ensure that serious conditions are not missed while efficiently arriving at the correct diagnosis.

**Key Frameworks in Clinical Medicine:**

**1. VINDICATE Framework**
A mnemonic that reminds clinicians to consider:
- **V**ascular (blood vessel problems)
- **I**nfectious/Inflammatory (infections and inflammation)
- **N**eoplastic (cancer)
- **D**egenerative/Deficiency (wear-and-tear or nutritional)
- **I**diopathic/Iatrogenic (unknown causes or caused by treatment)
- **C**ongenital (present from birth)
- **A**utoimmune/Allergic (immune system problems)
- **T**raumatic/Toxic (injury or poisoning)
- **E**ndocrine/Environmental (hormone or environmental causes)

**2. Anatomic Framework**
Organizes causes by body location:
- What structures are in the area?
- What could go wrong with each structure?
- Example: For abdominal pain, consider organs in each quadrant

**3. Pathophysiologic Framework**
Organizes by disease mechanism:
- Infection, inflammation, obstruction, ischemia, neoplasm
- Helps understand the underlying process

**4. "Rule Out the Worst Case" Framework**
First consider life-threatening causes, then work down by severity:
- Emergency causes (must rule out first)
- Urgent causes (need attention soon)
- Routine causes (common, less serious)

**Applying Frameworks:**
The best clinicians often use multiple frameworks together. They might start with "worst case" to ensure safety, then use VINDICATE to make sure no category is missed.`,
      keyTerms: [
        { term: 'mnemonic', definition: 'A memory aid, often using letters or phrases to help remember a list', pronunciation: 'nih-MON-ik' },
        { term: 'vascular', definition: 'Related to blood vessels (arteries, veins, capillaries)' },
        { term: 'neoplastic', definition: 'Related to abnormal growth of tissue, including cancerous and non-cancerous tumors' },
        { term: 'iatrogenic', definition: 'A condition caused by medical treatment or examination', pronunciation: 'eye-at-roh-JEN-ik' },
        { term: 'pathophysiology', definition: 'The study of how disease processes affect normal body function' },
      ],
      analogies: [
        'Using a diagnostic framework is like a pilot running through a pre-flight checklist - it ensures nothing important is forgotten before taking action.',
        'Frameworks are like sorting photos by date, location, or event - the same photos organized different ways help you find what you need.',
      ],
      examples: [
        'For chest pain, the VINDICATE framework helps remember to consider: Vascular (heart attack, aortic dissection), Infectious (pneumonia), and Traumatic (rib fracture).',
        'Anatomic frameworks help medical students learn to consider all organs in the right lower abdomen when evaluating appendicitis versus other causes.',
      ],
    },
    3: {
      level: 3,
      summary: 'Diagnostic frameworks provide structured cognitive approaches to differential diagnosis generation, integrating probabilistic reasoning with systematic categorization to optimize diagnostic accuracy and efficiency.',
      explanation: `## Diagnostic Frameworks in Clinical Practice

Diagnostic frameworks are essential cognitive tools that help clinicians organize complex clinical information and generate comprehensive differential diagnoses. These frameworks serve multiple purposes:

### Major Framework Categories

**1. Mnemonic-Based Frameworks**

**VINDICATE:**
- V: Vascular (atherosclerosis, embolism, dissection, vasculitis)
- I: Infectious/Inflammatory (bacterial, viral, fungal, autoimmune)
- N: Neoplastic (primary tumors, metastases, paraneoplastic syndromes)
- D: Degenerative/Deficiency (aging changes, vitamin deficiencies)
- I: Idiopathic/Iatrogenic (unknown etiology, medication effects)
- C: Congenital (genetic disorders, developmental anomalies)
- A: Autoimmune/Allergic (immune-mediated conditions, hypersensitivity)
- T: Traumatic/Toxic (physical injury, chemical exposure, drugs)
- E: Endocrine/Environmental (hormonal disorders, altitude, temperature)

**AEIOU-TIPS** (for altered mental status):
- A: Alcohol, Acidosis
- E: Epilepsy, Electrolytes, Encephalopathy
- I: Insulin (hypoglycemia)
- O: Opiates, Oxygen (hypoxia)
- U: Uremia
- T: Trauma, Temperature
- I: Infection
- P: Psychiatric, Poisoning
- S: Shock, Subarachnoid hemorrhage

**2. Anatomic Frameworks**

Organize by anatomical location:
- What structures occupy this region?
- What pathological processes affect each structure?
- What are the pain referral patterns?

Example for right upper quadrant pain:
- Hepatobiliary: Liver, gallbladder, bile ducts
- Gastrointestinal: Duodenum, hepatic flexure
- Vascular: Hepatic artery, portal vein
- Pleuropulmonary: Right lung base, pleura

**3. Pathophysiologic Frameworks**

Organize by mechanism of disease:
1. Infection (bacterial, viral, fungal, parasitic)
2. Inflammation (infectious vs. sterile)
3. Neoplasm (benign vs. malignant)
4. Degeneration (age-related changes)
5. Immune-mediated (autoimmune, allergic)
6. Metabolic (endocrine, nutritional)
7. Vascular (occlusive, hemorrhagic, vasculitic)
8. Traumatic (acute injury, repetitive stress)
9. Congenital (developmental, genetic)

**4. Temporal Frameworks**

Organize by time course:
- Acute (<24 hours): Trauma, acute coronary syndrome
- Subacute (days to weeks): Infections, inflammatory conditions
- Chronic (months to years): Degenerative diseases, chronic infections
- Episodic/Paroxysmal: Migraine, seizure, arrhythmia

### Integrating Frameworks with Probability

Effective diagnosis combines frameworks with pre-test probability:

1. **Generate broad differential** using frameworks
2. **Estimate pre-test probability** based on:
   - Disease prevalence
   - Patient demographics
   - Risk factors
   - Clinical presentation
3. **Prioritize** by combining:
   - Severity (life-threatening first)
   - Probability (common diseases common)
   - Treatability (reversible causes first)

### Clinical Decision Making

Frameworks help at different stages:
- **History taking:** Ensure all relevant symptoms are explored
- **Physical exam:** Guide focused examination
- **Diagnostic testing:** Select appropriate tests
- **Treatment planning:** Consider mechanisms requiring different approaches`,
      keyTerms: [
        { term: 'pre-test probability', definition: 'The likelihood of disease before diagnostic testing, based on history, exam, and epidemiology' },
        { term: 'paraneoplastic syndrome', definition: 'Symptoms caused by a cancer but not directly by tumor invasion or metastasis', pronunciation: 'pair-uh-nee-oh-PLAS-tik' },
        { term: 'vasculitis', definition: 'Inflammation of blood vessels causing damage to vessel walls', pronunciation: 'vas-kyoo-LIE-tis' },
        { term: 'differential diagnosis', definition: 'The systematic comparison of alternative diagnoses to explain a patient\'s presentation' },
        { term: 'cognitive bias', definition: 'Systematic error in thinking that affects clinical decision making' },
      ],
    },
    4: {
      level: 4,
      summary: 'Advanced diagnostic frameworks integrate Bayesian reasoning, cognitive debiasing strategies, and systematic approach methodologies to optimize diagnostic accuracy while minimizing diagnostic errors.',
      explanation: `## Advanced Diagnostic Frameworks

### Bayesian Integration

Diagnostic frameworks must be applied within a Bayesian framework where pre-test probability is continually updated with new information:

**Likelihood Ratios and Framework Application:**
- Each finding has a likelihood ratio (LR) that modifies probability
- Frameworks help ensure all relevant findings are considered
- Post-test odds = pre-test odds x LR(product of all findings)

Example application:
- Chest pain patient: Pre-test probability of ACS = 15%
- Findings: Radiation to arm (LR+ ~3), diaphoresis (LR+ ~2)
- Post-test probability = 15% -> ~45%

### Cognitive Frameworks for Diagnostic Error Prevention

**1. Metacognitive Strategies**

**Problem Representation:**
- Abstract clinical data into pathophysiologic terms
- Example: "60-year-old with atherosclerosis presents with demand ischemia"
- Facilitates retrieval of appropriate illness scripts

**Structured Reflection:**
- After initial hypothesis generation, explicitly consider:
  - What findings don't fit my leading diagnosis?
  - What other framework categories haven't I explored?
  - What is the worst-case scenario I haven't ruled out?

**2. Differential Revision Framework**

Initial differential -> New data -> Revise probabilities:
- Compatible findings: Increase probability
- Incompatible findings: Decrease or eliminate
- Unexpected findings: Generate new hypotheses

**3. The Dual-Process Framework**

Understanding System 1 (intuitive) vs System 2 (analytical):
- System 1: Pattern recognition, rapid but prone to bias
- System 2: Deliberate analysis, slower but more thorough
- Effective diagnosis requires both:
  - System 1 for pattern recognition (e.g., recognizing STEMI)
  - System 2 for complex cases (e.g., undifferentiated fever)

### Advanced Mnemonic Frameworks

**I'M A HOT CAT** (for fever of unknown origin):
- I: Infection (endocarditis, abscess, TB, occult)
- M: Malignancy (lymphoma, leukemia, solid tumors)
- A: Autoimmune (connective tissue disease, vasculitis)
- H: Hereditary (periodic fever syndromes)
- O: Other (sarcoidosis, drug fever, factitious)
- T: Thrombotic (DVT, PE)
- C: Cardiac (atrial myxoma)
- A: Allergic
- T: Thyroid

**VITAMIN C-D-E** (for peripheral neuropathy):
- V: Vascular/vasculitic
- I: Infectious/Inflammatory
- T: Toxic/Traumatic
- A: Autoimmune/Amyloid
- M: Metabolic (diabetes, uremia, B12 deficiency)
- I: Inherited
- N: Neoplastic/Paraneoplastic
- C: Cryoglobulinemia
- D: Demyelinating
- E: Endocrine

### Specialized Frameworks

**For Diagnostic Testing Decisions:**
1. Will the test change management?
2. What is the pre-test probability?
3. What are the test characteristics (sens/spec)?
4. What are the risks of testing?
5. What are the risks of not testing?

**For Complex Cases:**
- Use multiple frameworks simultaneously
- Consider zebras when horses don't fit
- Involve specialists when expertise needed`,
      keyTerms: [
        { term: 'likelihood ratio', definition: 'The probability of a finding in diseased patients divided by probability in non-diseased; quantifies diagnostic value' },
        { term: 'metacognition', definition: 'Thinking about one\'s own thinking; awareness and regulation of cognitive processes', pronunciation: 'met-ah-cog-NIH-shun' },
        { term: 'illness script', definition: 'Mental representation of a disease including predisposing conditions, pathophysiology, and clinical manifestations' },
        { term: 'zeitgeber', definition: 'External cue that entrains circadian rhythm; in diagnosis, refers to clinical clues that trigger pattern recognition' },
        { term: 'availability bias', definition: 'Overestimating probability of diagnoses that are easily recalled, often due to recent exposure or memorable cases' },
      ],
      clinicalNotes: 'Experienced clinicians often use illness scripts that integrate multiple frameworks automatically. However, when cases are atypical or complex, explicitly applying structured frameworks can prevent diagnostic errors. The key is knowing when to slow down and engage System 2 thinking.',
    },
    5: {
      level: 5,
      summary: 'Expert diagnostic practice employs sophisticated multimodal framework integration, incorporating probabilistic reasoning, cognitive debiasing, and metacognitive strategies while maintaining awareness of uncertainty and the limits of diagnostic certainty.',
      explanation: `## Expert-Level Diagnostic Frameworks

### The Diagnostic Excellence Framework

**Integrating Multiple Cognitive Approaches:**

Expert diagnosticians seamlessly integrate multiple frameworks:
1. **Pattern recognition** (System 1) for familiar presentations
2. **Analytic reasoning** (System 2) for complex cases
3. **Probabilistic reasoning** throughout
4. **Metacognitive monitoring** for error prevention
5. **Uncertainty tolerance** for ambiguous presentations

### Advanced Bayesian Clinical Reasoning

**Precision Pre-test Probability Estimation:**

Combining population epidemiology with individual risk:
---
P(Disease|Presentation) = 
  P(Presentation|Disease) x P(Disease) / P(Presentation)
---

Clinical prediction rules (CPRs) provide objective pre-test probabilities:
- HEART score for ACS
- Wells score for PE
- Ottawa ankle rules

**Sequential Testing Strategies:**
- First test should have high sensitivity (rule-out)
- Subsequent tests may have higher specificity (rule-in)
- Framework helps organize which test for which hypothesis

### Diagnostic Safety Frameworks

**The "Differential Diagnosis Safety Net":**

1. **Life threats first:** Always consider life-threatening causes
2. **Don't anchor prematurely:** Keep alternative diagnoses active
3. **Revisit the differential:** When course is atypical
4. **Cognitive forcing strategies:**
   - The "worst-case scenario" rule
   - The "what else could this be?" question
   - The "disconfirming evidence" search

**The "Blind Spot" Analysis:**

Explicit consideration of:
- Atypical presentations (elderly, immunocompromised, infants)
- Cognitive biases affecting current case
- Knowledge gaps requiring consultation

### Specialized Clinical Frameworks

**For Undifferentiated Symptoms:**

**SNAPPS Method** (for clinical presentations):
- S: Summarize the history
- N: Narrow the differential
- A: Analyze the differential
- P: Probe the preceptor
- P: Plan management
- S: Select case-related issues

**CARE Framework** (for diagnostic decision-making):
- C: Consider all reasonable diagnoses
- A: Assess the probability of each
- R: Rule out serious conditions
- E: Explain the reasoning

**For Diagnostic Errors:**

**The 5 Whys of Diagnostic Error:**
1. What happened? (The error)
2. Why did it happen? (Proximate cause)
3. Why did that happen? (System factors)
4. Why did those exist? (Organizational factors)
5. Why was that possible? (Root causes)

### The Future of Diagnostic Frameworks

**AI-Assisted Differential Generation:**
- Machine learning models for probabilistic differential
- Integration with electronic health records
- Real-time diagnostic suggestions

**Precision Medicine Frameworks:**
- Genomic data integration
- Personalized risk stratification
- Biomarker-guided differential

**Diagnostic Efficiency Frameworks:**
- Value-based diagnostic testing
- Minimizing time to diagnosis
- Balancing thoroughness with efficiency

### Teaching Diagnostic Reasoning

**The One-Minute Preceptor Model:**
1. Get commitment: "What do you think is going on?"
2. Probe for evidence: "What led you to that conclusion?"
3. Teach rules: Apply framework to case
4. Reinforce what was done well
5. Correct errors: Address cognitive biases

**The Think-Aloud Protocol:**
- Expert verbalizes reasoning process
- Reveals framework application
- Helps learners understand expert thinking`,
      keyTerms: [
        { term: 'metacognitive monitoring', definition: 'Ongoing self-assessment of one\'s own diagnostic process and confidence' },
        { term: 'clinical prediction rule', definition: 'Decision tool combining clinical findings to predict probability or outcome (CPR)' },
        { term: 'cognitive forcing strategy', definition: 'Structured approach to counteract cognitive biases in clinical reasoning' },
        { term: 'zeitgeist', definition: 'The defining spirit or mood of a particular period; in medicine, the prevailing diagnostic culture and practices' },
        { term: 'epistemological', definition: 'Related to the theory of knowledge, especially regarding methods, validity, and scope', pronunciation: 'ih-pis-tuh-muh-LOJ-ih-kul' },
      ],
      clinicalNotes: `Expert diagnostic reasoning involves:
1. Knowing when to use structured frameworks vs. pattern recognition
2. Maintaining appropriate skepticism about any single diagnosis
3. Understanding the limits of diagnostic certainty
4. Using "diagnostic time-outs" for complex cases
5. Seeking help when uncertainty exceeds comfort level

The best diagnosticians combine deep knowledge with intellectual humility and systematic approaches.`,
    },
  },

  media: [],

  citations: [
    {
      id: 'graber-diagnostic-error-2005',
      type: 'article',
      title: 'Diagnostic Error in Internal Medicine',
      authors: ['Graber ML', 'et al.'],
      source: 'Archives of Internal Medicine',
      url: 'https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/486228',
      accessedDate: '2026-01-28',
    },
    {
      id: 'croskerry-diagnostic-failure-2003',
      type: 'article',
      title: 'The Importance of Cognitive Errors in Diagnosis and Strategies to Minimize Them',
      authors: ['Croskerry P'],
      source: 'Academic Medicine',
    },
    {
      id: 'mcgee-evidence-based-physical-diagnosis',
      type: 'textbook',
      title: 'Evidence-Based Physical Diagnosis',
      authors: ['McGee S'],
      source: 'Elsevier',
    },
  ],

  crossReferences: [
    { targetId: 'probabilistic-reasoning', targetType: 'concept', relationship: 'related', label: 'Probabilistic Reasoning' },
    { targetId: 'pattern-recognition', targetType: 'concept', relationship: 'related', label: 'Pattern Recognition' },
    { targetId: 'diagnostic-pitfalls', targetType: 'concept', relationship: 'related', label: 'Diagnostic Pitfalls' },
    { targetId: 'cognitive-biases', targetType: 'concept', relationship: 'related', label: 'Cognitive Biases' },
  ],

  tags: {
    systems: ['general'],
    topics: ['clinical-reasoning', 'diagnosis', 'education'],
    keywords: ['differential diagnosis', 'framework', 'clinical reasoning', 'diagnostic error', 'cognition'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery', 'emergency-medicine'],
    },
  },

  createdAt: '2026-01-28T12:00:00.000Z',
  updatedAt: '2026-01-28T12:00:00.000Z',
  version: 1,
  status: 'published',
};

export default diagnosticFrameworkContent;
