import type { EducationalModule } from '../../types';

export const gerdModule: EducationalModule = {
  id: 'gastro-gerd-comprehensive',
  specialty: 'Gastroenterology',
  title: 'Understanding Acid Reflux (GERD)',
  description: 'Learn about gastroesophageal reflux disease, its causes, complications, and management strategies.',
  estimatedTime: '30 minutes',
  prerequisites: [],
  complexity: {
    foundation: {
      title: 'Acid Reflux Basics',
      readingLevel: 1,
      content: `**What is Acid Reflux?**

Acid reflux happens when stomach acid flows back up into your esophagus (the tube connecting your mouth to your stomach). When this happens often, it's called GERD (Gastroesophageal Reflux Disease).

**Common Symptoms:**
- Heartburn: burning feeling in your chest, often after eating
- Sour or bitter taste in your mouth
- Regurgitation: food or liquid coming back up
- Difficulty swallowing
- Chronic cough or hoarseness
- Feeling like there's a lump in your throat

**What Causes It:**
- The muscle at the bottom of your esophagus (LES) is weak or relaxes when it shouldn't
- Being overweight puts pressure on your stomach
- Certain foods: spicy, fatty, acidic (tomatoes, citrus), chocolate, caffeine, alcohol
- Eating large meals or lying down right after eating
- Smoking
- Pregnancy
- Hiatal hernia (part of stomach pushes up through diaphragm)

**Simple Ways to Feel Better:**
- Eat smaller meals
- Don't lie down for 2-3 hours after eating
- Elevate the head of your bed 6-8 inches
- Lose weight if overweight
- Avoid trigger foods
- Quit smoking
- Wear loose clothing

**When to See a Doctor:**
- Symptoms more than twice a week
- Heartburn that doesn't go away with antacids
- Trouble swallowing or painful swallowing
- Unexplained weight loss
- Vomiting blood or black, tarry stools`,
      keyTerms: [
        { term: 'Esophagus', definition: 'The tube that carries food from your mouth to your stomach' },
        { term: 'Heartburn', definition: 'Burning feeling in your chest caused by stomach acid' },
        { term: 'LES', definition: 'Lower Esophageal Sphincter - the muscle that keeps stomach acid from flowing back up' },
      ],
    },
    developing: {
      title: 'GERD: Causes and Complications',
      readingLevel: 2,
      content: `**How GERD Develops:**

The lower esophageal sphincter (LES) acts like a valve between your esophagus and stomach. When working properly, it opens to let food in and closes to keep acid out. In GERD, this valve:
- Relaxes inappropriately (transient LES relaxations)
- Has reduced pressure (hypotensive LES)
- Is affected by a hiatal hernia

**The Role of the Diaphragm:**
Your diaphragm normally helps the LES stay closed. A hiatal hernia occurs when part of your stomach pushes up through the diaphragm opening. This:
- Weakens the barrier between stomach and esophagus
- Allows easier acid reflux
- Affects up to 60% of adults over 60

**What Makes Reflux Worse:**

**Dietary Triggers:**
- High-fat meals (slow stomach emptying)
- Chocolate (relaxes LES)
- Caffeine and alcohol (irritate lining, relax LES)
- Peppermint (relaxes LES)
- Acidic foods (tomatoes, citrus)
- Carbonated beverages (increase stomach pressure)

**Lifestyle Factors:**
- Obesity (increases abdominal pressure)
- Large meals (overfill stomach)
- Lying down after eating (gravity no longer helps)
- Smoking (reduces saliva, relaxes LES)
- Tight clothing (increases pressure)

**Complications to Know About:**
- **Esophagitis**: Inflammation of the esophagus lining
- **Esophageal stricture**: Narrowing from scarring, causing difficulty swallowing
- **Barrett's esophagus**: Precancerous change in esophageal lining (from chronic exposure to acid)
- **Respiratory issues**: Asthma, chronic cough, laryngitis from acid reaching airways

**Over-the-Counter Options:**
- Antacids (Tums, Rolaids): Neutralize existing acid (fast but short-acting)
- H2 blockers (famotidine/Pepcid): Reduce acid production (last longer)
- Proton pump inhibitors (omeprazole/Prilosec OTC): Strongest acid suppression`,
      keyTerms: [
        { term: 'Esophagitis', definition: 'Inflammation or irritation of the esophagus lining' },
        { term: 'Hiatal hernia', definition: 'When part of the stomach pushes up through the diaphragm' },
        { term: 'Barrett\'s esophagus', definition: 'Changes in esophageal cells that can increase cancer risk' },
      ],
    },
    standard: {
      title: 'GERD Pathophysiology and Diagnosis',
      readingLevel: 3,
      content: `**Pathophysiology of GERD:**

**The Antireflux Barrier:**
Three components maintain gastroesophageal junction integrity:
1. **LES tone**: Resting pressure (normally 10-30 mmHg above gastric pressure)
2. **Crural diaphragm**: External sphincter function during inspiration
3. **Anatomical configuration**: Angle of His, mucosal rosette

**Mechanisms of Reflux:**
- **Transient LES relaxations (TLESRs)**: Most common cause (~90% of reflux episodes)
- **Hypotensive LES**: Resting pressure <6 mmHg
- **Anatomical disruption**: Hiatal hernia impairs flap valve

**The Chemistry of Acid:**
- Normal gastric pH: 1.5-3.5
- Normal esophageal pH: 6-7
- Reflux events drop esophageal pH <4
- Pepsin (activated at pH <4) causes tissue damage
- Bile acids (duodenogastroesophageal reflux) contribute

**Defense Mechanisms:**
- **Salivary bicarbonate**: Neutralizes acid (1-2 mL/min production)
- **Esophageal motility**: Primary peristalsis clears refluxate
- **Tissue resistance**: Stratified squamous epithelium with tight junctions

**Diagnostic Approaches:**

**Empiric Treatment Trial:**
- PPI twice daily for 4-8 weeks
- Response supports GERD diagnosis
- Cost-effective initial approach

**Upper Endoscopy (EGD):**
- Indicated: Alarm symptoms, screening for Barrett's, failed empiric therapy
- Findings: Esophagitis grades (Los Angeles A-D), strictures, Barrett's metaplasia
- Normal in 50-70% of GERD patients (non-erosive reflux disease - NERD)

**pH Monitoring:**
- **Wireless capsule (Bravo)**: 48-96 hour monitoring
- **Catheter-based**: 24-hour pH-impedance testing
- **Metrics**: Total acid exposure time (<4.2% normal), symptom association probability

**Impedance Testing:**
- Detects all reflux events (acidic, weakly acidic, non-acidic)
- Identifies proximal extent (laryngopharyngeal reflux)
- Evaluates correlation with symptoms

**Manometry:**
- Rules out achalasia, scleroderma esophagus
- Evaluates LES pressure and relaxation
- Required before anti-reflux surgery`,
      keyTerms: [
        { term: 'TLESR', definition: 'Transient lower esophageal sphincter relaxation - inappropriate sphincter opening' },
        { term: 'NEXD', definition: 'Non-erosive reflux disease - GERD symptoms without visible esophageal damage' },
        { term: 'Impedance testing', definition: 'Measures flow of liquid and gas in the esophagus regardless of pH' },
      ],
    },
    advanced: {
      title: 'GERD: Advanced Pathophysiology and Management',
      readingLevel: 4,
      content: `**Molecular Mechanisms of Mucosal Injury:**

**Acid-Related Damage:**
- Proton diffusion through epithelial tight junctions
- Intracellular acidification disrupts cell function
- Increased pro-inflammatory cytokines (IL-8, IL-1β)
- Oxidative stress pathways activated
- Impaired epithelial restitution

**Role of Pepsin:**
- Active at pH <4, stable up to pH 6.5
- Causes proteolytic damage to epithelial proteins
- Taken up by epithelial cells, reactivated by acidic environment
- Implicated in laryngopharyngeal reflux (LPR)

**Bile Acid Contribution:**
- Duodenogastroesophageal reflux (DGER)
- More damaging than acid alone
- Disrupts mucosal barrier
- Impairs epithelial healing

**Refractory GERD Mechanisms:**
1. **Inadequate acid suppression**: Non-adherence, rapid metabolizers (CYP2C19)
2. **Non-acid reflux**: Continues despite PPI (impedance positive)
3. **Visceral hypersensitivity**: Lower threshold for symptom perception
4. **Functional heartburn**: No correlation with reflux events
5. **Alternative diagnoses**: Eosinophilic esophagitis, achalasia, gastroparesis

**Pharmacogenomics of PPIs:**
- CYP2C19 polymorphisms affect metabolism
- Poor metabolizers: ↑ efficacy, ↑ side effects
- Rapid metabolizers: ↓ efficacy, may need higher doses

**Surgical Considerations:**

**Fundoplication:**
- Nissen (360°) vs Toupet (270°) vs Dor (anterior 180-200°)
- Restores LES pressure and eliminates TLESRs
- Success rate: 85-90% at 5 years
- Risks: Dysphagia, gas-bloat, inability to belch/vomit

**LINX Device:**
- Magnetic sphincter augmentation
- Preserves physiological function
- Less gas-bloat than fundoplication
- MRI considerations post-implantation

**Transoral Incisionless Fundoplication (TIF):**
- Endoscopic approach
- Reconstructs gastroesophageal valve
- For patients with small hiatal hernias

**Barrett's Esophagus Management:**
- Surveillance endoscopy every 1-3 years (depending on dysplasia)
- PPI therapy to control reflux
- Endoscopic eradication therapy for dysplasia:
  - Radiofrequency ablation (RFA)
  - Endoscopic mucosal resection (EMR) for visible lesions
  - Cryotherapy
- Risk of adenocarcinoma: 0.1-0.5% per year`,
      keyTerms: [
        { term: 'Refractory GERD', definition: 'Persistent symptoms despite twice-daily PPI therapy' },
        { term: 'Functional heartburn', definition: 'Typical heartburn symptoms without correlation to reflux events' },
        { term: 'Fundoplication', definition: 'Surgical procedure wrapping stomach fundus around esophagus' },
      ],
    },
    expert: {
      title: 'GERD: Research Frontiers and Complex Cases',
      readingLevel: 5,
      content: `**Novel Pathophysiological Concepts:**

**The Dilated Intercellular Space (DIS):**
- Ultrastructural marker of epithelial damage
- Seen even in NERD patients
- Reflects impaired barrier function
- Correlates with symptom severity
- Reversible with acid suppression

**Role of Tight Junctions:**
- Claudins, occludins, ZO-1
- Acid exposure disrupts tight junction proteins
- Increases paracellular permeability
- Target for novel therapies

**Neuroimmune Interactions:**
- Submucosal mast cells sensitize sensory nerves
- Peripheral sensitization in chronic GERD
- Central sensitization in refractory cases
- Overlap with functional dyspepsia

**Microbiome Considerations:**
- Esophageal microbiome changes in GERD
- Oral bacteria in esophageal mucosa
- Potential role in inflammation and carcinogenesis
- PPI effects on gut microbiome

**Emerging Pharmacotherapies:**

**Novel Targets:**
- GABA-B agonists (baclofen, lesogaberan): Reduce TLESRs
- mGluR5 antagonists: Reduce TLESRs
- TRPV1 antagonists: Block acid-sensitive ion channels
- Potassium-competitive acid blockers (P-CABs): Faster onset than PPIs
- Bile acid sequestrants: For bile reflux

**Mucosal Protective Agents:**
- Alginate-based therapies (raft-forming)
- Rebamipide: Enhances mucosal defense
- Sucralfate: Mucosal coating

**Complex Clinical Scenarios:**

**GERD Post-Bariatric Surgery:**
- Sleeve gastrectomy: May worsen or improve
- RYGB: Generally improves due to anatomy
- New "acid pocket" dynamics
- Medication absorption issues

**Eosinophilic Esophagitis (EoE) Overlap:**
- May coexist with GERD
- PPI-responsive esophageal eosinophilia (PPI-REE)
- Different histological patterns
- Treatment implications

**Scleroderma Esophagus:**
- Smooth muscle atrophy → aperistalsis
- LES incompetence
- Severe reflux often asymptomatic
- High risk of complications
- Fundoplication generally contraindicated`,
      keyTerms: [
        { term: 'Dilated intercellular space', definition: 'Ultrastructural marker of esophageal barrier dysfunction' },
        { term: 'P-CABs', definition: 'Potassium-competitive acid blockers - newer acid suppression agents' },
        { term: 'PPI-REE', definition: 'PPI-responsive esophageal eosinophilia - EoE variant responding to PPIs' },
      ],
    },
    clinical: {
      title: 'GERD: Clinical Decision-Making and Management Algorithms',
      readingLevel: 6,
      content: `**Diagnostic Algorithm:**

**Patient with Typical Symptoms:**
1. **Initial assessment**: Alarm symptoms? (dysphagia, weight loss, bleeding, anemia)
   - Yes → Endoscopy
   - No → Proceed to step 2

2. **Empiric PPI trial**: Standard dose PPI 30 min before breakfast, daily × 4-8 weeks
   - Response → GERD diagnosis confirmed, step-down therapy
   - Partial response → Optimize therapy (timing, twice daily, different PPI)
   - No response → Step 3

3. **Refractory evaluation**:
   - Compliance assessment
   - Endoscopy with biopsies
   - pH-impedance testing on PPI
   - Manometry if surgical candidate

**Treatment Algorithm:**

**Step 1: Lifestyle Modification (All patients)**
- Weight loss if BMI >25
- Elevate head of bed
- Avoid meals within 3 hours of lying down
- Identify and avoid trigger foods
- Smoking cessation
- Avoid tight clothing

**Step 2: Pharmacologic Therapy**
- **Mild/intermittent**: Antacids or H2 receptor antagonist
- **Moderate/severe**: PPI once daily
- **Severe/poorly controlled**: PPI twice daily

**Step 3: Refractory Management**
- Optimize PPI (timing, dose, switch class)
- Add bedtime H2RA (tachyphylaxis develops)
- Consider baclofen for TLESRs
- Evaluate for non-GERD causes
- Surgical referral if confirmed refractory reflux

**Surgical Indications:**
- Patient preference (long-term PPI avoidance)
- Complications (Barrett's, stricture)
- Volume regurgitation
- Medical therapy failure with proven reflux
- Cost consideration (surgery vs lifetime PPI)

**Contraindications to Surgery:**
- Poorly controlled psychiatric disorder
- Untreated major depression
- Unrealistic expectations
- Inadequate preoperative evaluation
- Severe esophageal dysmotility

**Surveillance Endoscopy:**
- **Barrett's without dysplasia**: Every 1-3 years
- **Low-grade dysplasia**: Every 6-12 months or treat
- **High-grade dysplasia**: Treat (ablation/resection)

**Long-Term PPI Safety:**
- Generally safe for chronic use
- Considerations: B12, magnesium, calcium, C. difficile risk, fracture risk
- Reassess need periodically
- Step-down to lowest effective dose

**Atypical Presentation Workup:**
- **Chronic cough**: pH monitoring, treat reflux, rule out asthma/ACEI
- **Laryngitis**: ENT evaluation, pH monitoring, PPI trial
- **Chest pain**: Cardiac workup first, then GERD evaluation
- **Dental erosion**: Dental evaluation, GERD treatment`,
      keyTerms: [
        { term: 'Alarm symptoms', definition: 'Red flag symptoms requiring endoscopic evaluation: dysphagia, weight loss, bleeding, anemia' },
        { term: 'Tachyphylaxis', definition: 'Rapid development of tolerance to H2 receptor antagonists' },
        { term: 'Step-down therapy', definition: 'Reducing medication to lowest effective dose once symptoms controlled' },
      ],
    },
  },
  quiz: [
    {
      id: 'gerd-1',
      question: 'What is the primary mechanism causing most GERD symptoms?',
      options: ['Excess stomach acid production', 'Transient lower esophageal sphincter relaxations', 'Hiatal hernia', 'Delayed gastric emptying'],
      correctAnswer: 1,
      explanation: 'Transient LES relaxations (TLESRs) account for approximately 90% of reflux episodes in GERD patients. These are inappropriate relaxations of the sphincter not associated with swallowing.',
    },
    {
      id: 'gerd-2',
      question: 'A patient with chronic GERD undergoes endoscopy. What finding is most concerning for progression to cancer?',
      options: ['Grade A esophagitis', 'Barrett\'s esophagus', 'Hiatal hernia', 'Esophageal stricture'],
      correctAnswer: 1,
      explanation: 'Barrett\'s esophagus is intestinal metaplasia of the esophageal lining caused by chronic acid exposure. It is the primary risk factor for esophageal adenocarcinoma.',
    },
    {
      id: 'gerd-3',
      question: 'What is the mechanism of action of proton pump inhibitors (PPIs)?',
      options: ['Neutralize existing acid', 'Block histamine H2 receptors', 'Irreversibly inhibit H+/K+ ATPase pump', 'Strengthen LES tone'],
      correctAnswer: 2,
      explanation: 'PPIs covalently bind to the H+/K+ ATPase proton pump on parietal cells, irreversibly blocking the final step of acid production.',
    },
    {
      id: 'gerd-4',
      question: 'A patient has typical GERD symptoms but normal endoscopy. What is this called?',
      options: ['Erosive esophagitis', 'Non-erosive reflux disease (NERD)', 'Barrett\'s esophagus', 'Functional dyspepsia'],
      correctAnswer: 1,
      explanation: 'Non-erosive reflux disease (NERD) is characterized by typical GERD symptoms without visible esophageal mucosal injury at endoscopy. It represents 50-70% of GERD patients.',
    },
    {
      id: 'gerd-5',
      question: 'Which test is most appropriate to evaluate for ongoing reflux in a patient with persistent symptoms on PPI therapy?',
      options: ['Upper GI series', 'Gastric emptying study', 'pH-impedance testing', 'CT scan'],
      correctAnswer: 2,
      explanation: 'pH-impedance testing measures all reflux events (acidic and non-acidic) and correlates them with symptoms. It is the gold standard for evaluating refractory GERD.',
    },
  ],
  references: [
    'Katz PO, et al. ACG Clinical Guideline for the Diagnosis and Management of Gastroesophageal Reflux Disease. Am J Gastroenterol. 2022.',
    'Vakil N, et al. The Montreal Definition and Classification of Gastroesophageal Reflux Disease. Am J Gastroenterol. 2006.',
    'Pandolfino JE, Gawron AJ. Achalasia: A Systematic Review. JAMA. 2015.',
    'Gyawali CP, et al. Modern diagnosis of GERD: the Lyon Consensus. Gut. 2018.',
  ],
};
