/**
 * GERD and Peptic Ulcer Disease - Comprehensive Educational Content
 *
 * Covers gastroesophageal reflux disease, Barrett's esophagus,
 * gastric and duodenal ulcers, H. pylori infection, and NSAID-induced injury.
 */

import { EducationalContent } from '../../../types';

export const gerdAndPepticUlcer: EducationalContent = {
  id: 'condition-gerd-peptic-ulcer',
  type: 'condition',
  name: 'GERD and Peptic Ulcer Disease',
  alternateNames: [
    'Gastroesophageal Reflux Disease',
    'Acid Reflux',
    'Heartburn',
    'Gastric Ulcer',
    'Duodenal Ulcer',
    'PUD',
  ],

  levels: {
    1: {
      level: 1,
      summary: 'GERD is when stomach acid goes back up into your food pipe causing heartburn. Ulcers are sores in your stomach or the first part of your small intestine.',
      explanation: `**What is GERD?**

Have you ever had that burning feeling in your chest after eating? That's called heartburn, and when it happens a lot, doctors call it GERD (Gastroesophageal Reflux Disease - but you can just call it "acid reflux").

Your stomach makes acid to help digest food. Normally, a special muscle at the top of your stomach works like a door - it opens to let food in, then closes tightly. In GERD, this "door" doesn't close properly, so acid splashes up into your food pipe (esophagus) and causes that burning feeling.

**What are Ulcers?**

Ulcers are like sores or wounds that form in the lining of your stomach or the first part of your small intestine (called the duodenum). Think of it like a scrape on your knee, but inside your digestive system.

For a long time, people thought ulcers came from eating spicy food or being too stressed. Now we know that most ulcers are caused by:
1. A tiny germ called H. pylori that can live in your stomach
2. Taking too much pain medicine like ibuprofen or aspirin

**What do they feel like?**

- GERD: Burning in your chest (heartburn), trouble swallowing, coughing at night
- Ulcers: Burning pain in your belly, especially when you're hungry; feeling full quickly

**Can they be fixed?**

Yes! Both can usually be treated with medicine that reduces stomach acid. If you have the H. pylori germ, antibiotics can get rid of it.`,
      keyTerms: [
        { term: 'GERD', definition: 'When stomach acid keeps going back up into your food pipe' },
        { term: 'heartburn', definition: 'A burning feeling in your chest from stomach acid' },
        { term: 'ulcer', definition: 'A sore or wound in the lining of your stomach or intestine' },
        { term: 'H. pylori', definition: 'A tiny germ that can cause stomach ulcers' },
        { term: 'esophagus', definition: 'The tube that carries food from your mouth to your stomach' },
      ],
      analogies: [
        'The muscle at the top of your stomach is like a one-way door - it should only open to let food go down, not let acid come back up.',
        'An ulcer is like a canker sore in your mouth, but in your stomach instead.',
        'Your stomach lining is like the protective coating on a non-stick pan - when it gets damaged, the acid underneath can cause problems.',
      ],
      examples: [
        'Eating a big meal right before lying down can make GERD worse because gravity isn\'t helping keep the acid down.',
        'Someone might feel ulcer pain that gets better after eating because food temporarily protects the sore.',
      ],
    },
    2: {
      level: 2,
      summary: 'GERD occurs when the lower esophageal sphincter fails to prevent gastric contents from refluxing into the esophagus. Peptic ulcers are mucosal breaks in the stomach or duodenum, primarily caused by H. pylori infection or NSAID use.',
      explanation: `## Gastroesophageal Reflux Disease (GERD)

**Mechanism:**
The lower esophageal sphincter (LES) is a ring of muscle at the junction of the esophagus and stomach. In GERD, this sphincter relaxes inappropriately or has reduced baseline pressure, allowing gastric acid and sometimes bile to reflux into the esophagus.

**Risk Factors:**
- Obesity (increases abdominal pressure)
- Hiatal hernia (stomach pushes up through diaphragm)
- Pregnancy
- Smoking
- Certain foods: caffeine, chocolate, fatty foods, alcohol
- Eating large meals or lying down after eating

**Symptoms:**
- Heartburn (burning retrosternal pain)
- Regurgitation (acidic taste in mouth)
- Dysphagia (difficulty swallowing)
- Chronic cough, hoarseness, or asthma symptoms (extra-esophageal manifestations)

**Complications:**
- Esophagitis (inflammation of esophageal lining)
- Esophageal stricture (scarring causing narrowing)
- Barrett's esophagus (precancerous changes)
- Esophageal adenocarcinoma (cancer)

## Peptic Ulcer Disease

**Definition:**
Peptic ulcers are defects in the gastric or duodenal mucosa that extend through the muscularis mucosae layer.

**Causes (in order of frequency):**
1. **H. pylori infection** (~60-70% of gastric ulcers, ~90% of duodenal ulcers)
2. **NSAID use** (aspirin, ibuprofen, naproxen)
3. Rare: Zollinger-Ellison syndrome, Crohn's disease, malignancy

**Gastric vs. Duodenal Ulcers:**

| Feature | Gastric Ulcer | Duodenal Ulcer |
|---------|---------------|----------------|
| Pain timing | Worse with eating | Better with eating, worse 2-3 hours after |
| Weight | May cause weight loss | Weight usually stable |
| Malignancy risk | Higher (need biopsy) | Very low |
| H. pylori | ~70% | ~90% |

**Symptoms:**
- Epigastric burning or gnawing pain
- Nausea, bloating
- Early satiety
- Alarm symptoms: vomiting blood, black tarry stools, weight loss

**Diagnosis:**
- Upper endoscopy (EGD) - can visualize and biopsy
- H. pylori testing: stool antigen, urea breath test, or endoscopic biopsy

**Treatment:**
- Proton pump inhibitors (PPIs) to reduce acid
- H. pylori eradication: triple or quadruple antibiotic therapy
- Stop NSAIDs if possible; use COX-2 selective inhibitors if needed`,
      keyTerms: [
        { term: 'lower esophageal sphincter (LES)', definition: 'Ring of muscle at the gastroesophageal junction that prevents reflux', pronunciation: 'SFINK-ter' },
        { term: 'Barrett\'s esophagus', definition: 'Precancerous condition where normal esophageal lining changes to intestinal-type cells', pronunciation: 'BARE-ets' },
        { term: 'H. pylori', definition: 'Helicobacter pylori - spiral bacterium that colonizes gastric mucosa and causes ulcers', pronunciation: 'HELL-ih-koh-BAK-ter py-LOR-ee' },
        { term: 'NSAID', definition: 'Non-steroidal anti-inflammatory drug - pain relievers that can damage stomach lining', pronunciation: 'EN-sed' },
        { term: 'proton pump inhibitor (PPI)', definition: 'Medications that strongly reduce stomach acid production (e.g., omeprazole)' },
        { term: 'dysphagia', definition: 'Difficulty swallowing', pronunciation: 'dis-FAY-jee-ah' },
      ],
      analogies: [
        'The LES is like a valve in plumbing - when it becomes loose, backflow (reflux) occurs.',
        'H. pylori burrows into the stomach lining like a termite tunneling into wood, weakening the protective barrier.',
      ],
    },
    3: {
      level: 3,
      summary: 'GERD results from transient LES relaxations, impaired esophageal clearance, and mucosal sensitivity. Peptic ulcer disease involves disruption of the mucosal defense barrier by H. pylori-induced inflammation or prostaglandin depletion from NSAIDs.',
      explanation: `## GERD Pathophysiology

**Primary Mechanisms:**

1. **Transient LES Relaxations (tLESRs)**
   - Most common cause of reflux episodes
   - Vagally-mediated relaxation independent of swallowing
   - Triggered by gastric distension
   - Not synonymous with low basal LES pressure

2. **Impaired LES Function**
   - Reduced basal LES tone (<10 mmHg is abnormal)
   - Associated with hiatal hernia
   - Smooth muscle dysfunction

3. **Hiatal Hernia**
   - Separation of the LES from the crural diaphragm
   - Reduces anti-reflux barrier function
   - Creates acid pocket above the diaphragm
   - Types: Sliding (Type I, most common), Paraesophageal (Types II-IV)

4. **Impaired Esophageal Clearance**
   - Peristaltic dysfunction
   - Reduced salivary bicarbonate neutralization
   - Prolonged acid contact time

5. **Mucosal Sensitivity**
   - Dilated intercellular spaces
   - Sensitized sensory neurons
   - Explains symptoms with minimal acid exposure

**Acid Pocket Concept:**
Postprandially, a layer of unbuffered acid floats on top of food in the stomach. With hiatal hernia, this acid pocket can rest above the diaphragm, predisposing to reflux.

**Complications - Barrett's Esophagus:**
- Intestinal metaplasia of esophageal epithelium
- Replacement of squamous epithelium with columnar epithelium containing goblet cells
- Progression: Metaplasia → Low-grade dysplasia → High-grade dysplasia → Adenocarcinoma
- Annual cancer risk: ~0.5% without dysplasia

## Peptic Ulcer Disease Pathophysiology

**The Balance Model:**
Ulcers result from imbalance between:
- **Aggressive factors**: Acid, pepsin, H. pylori, NSAIDs, bile
- **Protective factors**: Mucus-bicarbonate barrier, mucosal blood flow, prostaglandins, epithelial renewal

**H. pylori Mechanisms:**

1. **Colonization:**
   - Urease produces ammonia → neutralizes local acid → survival
   - Flagella enable motility in mucus layer
   - Adhesins attach to gastric epithelium

2. **Injury:**
   - VacA (vacuolating cytotoxin) → epithelial damage
   - CagA (cytotoxin-associated gene A) → inflammation, cancer risk
   - Disrupts tight junctions
   - Induces inflammatory response (IL-8, neutrophils)

3. **Altered Acid Secretion:**
   - Antral-predominant infection → increased gastrin → hyperacidity → duodenal ulcers
   - Corpus-predominant infection → parietal cell loss → hypoacidity → gastric ulcers/cancer

**NSAID Mechanisms:**

1. **COX-1 Inhibition:**
   - Reduces prostaglandin E2 and I2 synthesis
   - Prostaglandins normally:
     - Stimulate mucus/bicarbonate secretion
     - Maintain mucosal blood flow
     - Promote epithelial proliferation

2. **Topical Injury:**
   - NSAIDs are weak acids → concentrated in gastric mucosa
   - Direct epithelial damage

**Ulcer Locations:**
- Gastric: Lesser curvature (antrum), transition zone
- Duodenal: Anterior wall of duodenal bulb (D1)
- Posterior duodenal ulcers → risk of gastroduodenal artery erosion → hemorrhage`,
      keyTerms: [
        { term: 'transient LES relaxation (tLESR)', definition: 'Vagally-mediated relaxation of the LES independent of swallowing; primary mechanism of reflux episodes' },
        { term: 'hiatal hernia', definition: 'Protrusion of stomach through esophageal hiatus of diaphragm; Type I (sliding) most common' },
        { term: 'VacA', definition: 'H. pylori vacuolating cytotoxin that damages epithelial cells' },
        { term: 'CagA', definition: 'H. pylori virulence factor associated with increased cancer risk', pronunciation: 'kag-A' },
        { term: 'prostaglandin', definition: 'Lipid compounds that protect gastric mucosa; depleted by NSAIDs' },
        { term: 'intestinal metaplasia', definition: 'Replacement of esophageal squamous epithelium with intestinal-type columnar epithelium with goblet cells' },
        { term: 'muscularis mucosae', definition: 'Thin smooth muscle layer defining ulcer depth; true ulcers extend through this layer' },
      ],
      clinicalNotes: 'CagA-positive H. pylori strains (more common in East Asia) carry higher gastric cancer risk. NSAID users should receive PPI prophylaxis if they have prior ulcer history, are elderly, or use concurrent anticoagulants/steroids.',
    },
    4: {
      level: 4,
      summary: 'GERD pathogenesis involves complex interactions between anatomical defects, esophageal dysmotility, and mucosal hypersensitivity. H. pylori pathogenicity depends on bacterial virulence factors, host genetics, and environmental cofactors determining clinical outcome.',
      explanation: `## Advanced GERD Pathophysiology

### Anatomical and Physiological Defects

**LES Physiology:**
- Normal LES pressure: 15-35 mmHg
- Length: 2-4 cm (intra-abdominal segment critical)
- Augmented by crural diaphragm during inspiration
- Relaxes with swallowing (receptive relaxation) - normal
- tLESRs triggered by gastric distension via vagal afferents

**Gastroesophageal Valve (GEV) / Flap Valve:**
- Angle of His creates valve mechanism
- Hill classification (endoscopic):
  - Grade I: Normal, prominent fold
  - Grade II: Less prominent
  - Grade III: Absent
  - Grade IV: Open, hiatal hernia

**Esophageal Body Function:**
- Ineffective esophageal motility (IEM): >50% ineffective swallows
- Contributes to impaired acid clearance
- Evaluate with high-resolution manometry

### Mucosal Defense and Injury

**Esophageal Epithelium:**
- Stratified squamous epithelium (minimal barrier function vs. gastric columnar)
- Pre-epithelial defense: Saliva, mucus
- Epithelial defense: Tight junctions, bicarbonate transport
- Post-epithelial defense: Blood flow, acid-base balance

**Dilated Intercellular Spaces (DIS):**
- Early microscopic change in GERD
- Allows acid penetration to sensory nerve endings
- Explains symptoms in non-erosive reflux disease (NERD)
- Reversible with PPI therapy

### GERD Phenotypes

1. **Erosive Esophagitis (ERD):** Los Angeles classification A-D
2. **Non-Erosive Reflux Disease (NERD):** Symptoms with normal endoscopy (~60%)
3. **Barrett's Esophagus:** Intestinal metaplasia ≥1 cm
4. **Reflux Hypersensitivity:** Normal acid exposure, positive symptom-reflux association
5. **Functional Heartburn:** Normal acid exposure, negative symptom association

**Diagnostic Algorithm (Lyon Consensus):**
- 24-hour pH-impedance monitoring (off PPI)
- Acid exposure time (AET) >6% = abnormal, <4% = normal
- DeMeester score >14.7 = abnormal
- Symptom Index (SI) >50%, Symptom Association Probability (SAP) >95%

## Advanced Peptic Ulcer Disease

### H. pylori Pathogenesis - Molecular Mechanisms

**Virulence Factors:**

| Factor | Function | Clinical Significance |
|--------|----------|----------------------|
| Urease | NH3 production, pH neutralization | Essential for colonization |
| CagA | Tyrosine phosphorylation, cell signaling | Gastric cancer risk (1.6-3x) |
| VacA | Vacuolation, apoptosis, immune modulation | Ulcer and cancer risk |
| BabA | Adhesion to Lewis b antigen | Enhanced colonization |
| OipA | Proinflammatory signaling | Increased IL-8, duodenal ulcer |
| DupA | Duodenal ulcer promoting gene | Duodenal ulcer association |

**Host Factors:**
- IL-1β polymorphisms → enhanced inflammatory response → corpus atrophy → cancer
- TNF-α polymorphisms
- HLA associations

**Geographic Variation:**
- East Asian strains: Nearly all CagA+, more virulent
- Western strains: ~60% CagA+, variable VacA

### NSAID Gastropathy - Risk Stratification

**High Risk Factors:**
- Prior ulcer/GI bleeding (greatest predictor)
- Age >65
- High-dose NSAID
- Concurrent anticoagulant/antiplatelet/corticosteroid
- H. pylori positive
- Serious comorbidities

**Prevention Strategies:**
1. PPI co-therapy (preferred)
2. Misoprostol 200 mcg QID (limited by side effects)
3. COX-2 selective inhibitors (less GI risk, CV concerns)
4. Test and treat H. pylori before chronic NSAID therapy

### Zollinger-Ellison Syndrome

**Pathophysiology:**
- Gastrin-secreting tumor (gastrinoma)
- Location: Gastrinoma triangle (duodenum 70%, pancreas 25%)
- Sporadic (75%) vs. MEN1-associated (25%)

**Clinical Features:**
- Severe, multiple, refractory ulcers
- Unusual locations (jejunum)
- Diarrhea, malabsorption (acid inactivates pancreatic enzymes)

**Diagnosis:**
- Fasting serum gastrin (off PPI for 1 week) >1000 pg/mL virtually diagnostic
- Secretin stimulation test: Paradoxical gastrin increase
- Localization: Somatostatin receptor scintigraphy, EUS`,
      keyTerms: [
        { term: 'Lyon Consensus', definition: 'Modern criteria for diagnosing GERD using pH-impedance monitoring; AET >6% confirms, <4% excludes' },
        { term: 'non-erosive reflux disease (NERD)', definition: 'GERD symptoms with normal endoscopy; comprises ~60% of GERD patients' },
        { term: 'ineffective esophageal motility (IEM)', definition: '>50% ineffective swallows on manometry; contributes to impaired acid clearance' },
        { term: 'gastrinoma triangle', definition: 'Anatomical region where most gastrinomas occur: CBD, 2nd/3rd duodenum, pancreatic neck junction' },
        { term: 'secretin stimulation test', definition: 'Provocative test for gastrinoma; paradoxical gastrin rise (>120 pg/mL) is diagnostic' },
        { term: 'Angle of His', definition: 'Acute angle between esophagus and gastric fundus contributing to anti-reflux barrier' },
      ],
      clinicalNotes: 'Before labeling refractory GERD, verify PPI compliance and timing (30-60 min before meals). Consider alternative diagnoses: eosinophilic esophagitis, achalasia, gastroparesis. In PPI non-responders, ambulatory pH-impedance testing differentiates true refractory GERD from functional heartburn.',
    },
    5: {
      level: 5,
      summary: 'Contemporary GERD management integrates phenotype-directed therapy based on objective testing, while peptic ulcer disease requires understanding of evolving H. pylori resistance patterns and individualized bleeding risk assessment for NSAID users.',
      explanation: `## GERD: Evidence-Based Management

### Diagnostic Framework

**Initial Approach:**
1. Typical symptoms (heartburn, regurgitation) → Empiric PPI trial
2. Alarm features → Direct EGD
3. Treatment failure → Objective testing

**Objective Testing Indications:**
- PPI-refractory symptoms
- Pre-operative evaluation for anti-reflux surgery
- Atypical symptoms (chest pain, cough, laryngeal symptoms)
- Evaluating for Barrett's surveillance candidacy

**Testing Modalities:**

| Test | Purpose | Key Metrics |
|------|---------|-------------|
| EGD | Mucosal assessment | LA classification, Barrett's, complications |
| High-resolution manometry | Motility, LES function | IEM, EGJ morphology (Chicago 4.0) |
| pH-impedance (off PPI) | Quantify reflux | AET, reflux episodes, symptom correlation |
| pH monitoring (on PPI) | PPI response, symptom association | AET, SI, SAP |
| Barium swallow | Anatomy | Hernia, stricture |

### Treatment Algorithm

**Step 1: Lifestyle Modifications (adjunctive)**
- Weight loss (strongest evidence)
- Elevate head of bed 6-8 inches
- Avoid eating 2-3 hours before recumbency
- Smoking cessation

**Step 2: Pharmacotherapy**

*PPIs (first-line):*
- Standard dose: Omeprazole 20mg, Pantoprazole 40mg, etc.
- Double dose (BID) for incomplete response
- Best taken 30-60 min before meals
- Long-term safety: C. diff risk, B12/magnesium deficiency, bone fracture (modest associations)

*Alternatives:*
- H2RAs (less potent, tachyphylaxis)
- P-CABs (vonoprazan): Longer-acting, acid-stable, no meal timing requirement
- Alginate-antacid combinations (mechanical raft barrier)
- Baclofen (reduces tLESRs; limited by CNS side effects)

**Step 3: Endoscopic/Surgical Therapy**

*Surgical Options:*
- Laparoscopic fundoplication (Nissen 360°, Toupet 270°)
- Roux-en-Y gastric bypass (for obese patients)
- Magnetic sphincter augmentation (LINX)

*Pre-op Requirements:*
- Confirmed pathologic reflux (pH study)
- Adequate esophageal body motility
- Exclude achalasia/major motility disorder

*Endoscopic Options:*
- Transoral incisionless fundoplication (TIF)
- Radiofrequency ablation (Stretta) - less evidence

### Barrett's Esophagus Management

**Surveillance Protocol (ACG Guidelines):**

| Finding | Interval |
|---------|----------|
| No dysplasia | EGD q3-5 years |
| Low-grade dysplasia | EGD q6-12 months or ablation |
| High-grade dysplasia | Endoscopic eradication therapy |
| Intramucosal carcinoma | Endoscopic eradication therapy |

**Endoscopic Eradication Therapy (EET):**
- Radiofrequency ablation (RFA) - primary modality
- Endoscopic mucosal resection (EMR) - for nodular lesions
- Cryotherapy - salvage therapy

## Peptic Ulcer Disease: Contemporary Management

### H. pylori Eradication

**First-Line Regimens (ACG 2017/Maastricht VI 2022):**

*Bismuth Quadruple Therapy (preferred if local clarithromycin resistance >15%):*
- PPI BID + Bismuth subsalicylate QID + Metronidazole TID-QID + Tetracycline QID × 14 days
- Efficacy: 85-90%

*Concomitant Therapy:*
- PPI BID + Amoxicillin BID + Clarithromycin BID + Metronidazole BID × 14 days
- Overcomes clarithromycin resistance

*Triple Therapy (only if local clarithromycin resistance <15%):*
- PPI BID + Clarithromycin BID + Amoxicillin BID × 14 days
- Declining efficacy globally

**Resistance Considerations:**
- Clarithromycin resistance: 15-20% in US, higher in urban areas
- Metronidazole resistance: ~40% (partially overcome with higher doses)
- Levofloxacin resistance: Rising, limit to salvage therapy
- Amoxicillin resistance: Rare (<2%)
- Rifabutin-based salvage for multi-resistant strains

**Confirm Eradication:**
- Urea breath test or stool antigen ≥4 weeks after therapy, ≥2 weeks off PPI
- Essential after complicated ulcer, persistent symptoms, or MALT lymphoma

### GI Bleeding Risk in NSAID/Antiplatelet Users

**Risk Assessment (HASBLED-type approach):**

| Factor | Points |
|--------|--------|
| Prior GI bleeding | 2 |
| Age ≥65 | 1 |
| Anticoagulant use | 1 |
| Dual antiplatelet therapy | 1 |
| NSAID + aspirin | 1 |
| H. pylori positive | 1 |
| Steroid use | 1 |

**Prevention in High-Risk Patients:**
1. Test and treat H. pylori before initiating therapy
2. PPI co-therapy (superior to H2RAs)
3. Use lowest effective NSAID dose/duration
4. Consider COX-2 selective + PPI
5. If antiplatelet required post-GI bleed, add PPI + eradicate H. pylori

### Refractory/Complicated Ulcers

**Definitions:**
- Refractory: Unhealed after 8-12 weeks adequate therapy
- Giant: Gastric >3 cm, duodenal >2 cm
- Complicated: Bleeding, perforation, obstruction

**Workup for Refractory Ulcer:**
1. Verify H. pylori eradication
2. Confirm medication compliance
3. Identify surreptitious NSAID use
4. Exclude malignancy (biopsy)
5. Consider Zollinger-Ellison syndrome (fasting gastrin)
6. Evaluate for crack cocaine use, mesenteric ischemia

**Surgical Indications (now rare):**
- Intractable bleeding (failed endoscopic hemostasis)
- Perforation
- Obstruction (failed endoscopic dilation)
- Giant, non-healing ulcers (after excluding malignancy)`,
      keyTerms: [
        { term: 'Los Angeles classification', definition: 'Endoscopic grading of erosive esophagitis: A (<5mm), B (>5mm), C (confluent <75% circumference), D (≥75% circumference)' },
        { term: 'P-CAB', definition: 'Potassium-competitive acid blocker (e.g., vonoprazan); acid-stable, no meal timing requirement' },
        { term: 'LINX device', definition: 'Magnetic sphincter augmentation for GERD; laparoscopically placed ring of magnets around LES' },
        { term: 'concomitant therapy', definition: 'H. pylori regimen using PPI + 3 antibiotics simultaneously to overcome resistance' },
        { term: 'radiofrequency ablation (RFA)', definition: 'Endoscopic technique using thermal energy to ablate Barrett\'s epithelium' },
        { term: 'Chicago Classification v4.0', definition: 'Current standard for interpreting high-resolution esophageal manometry' },
      ],
      clinicalNotes: `Key clinical pearls:
1. PPI timing matters: 30-60 min before meals for optimal efficacy (not with vonoprazan)
2. In refractory GERD, obtain pH-impedance OFF PPI to establish diagnosis before escalation
3. All gastric ulcers require biopsy to exclude malignancy; duodenal ulcers rarely malignant
4. H. pylori eradication confirmation is mandatory after treatment of complicated ulcers
5. For patients on DAPT post-ACS with prior GI bleed, PPI co-therapy reduces bleed recurrence by ~50-70%
6. Barrett's with visible lesions: EMR first, then RFA - never ablate nodular lesions without tissue diagnosis
7. Post-fundoplication dysphagia common initially; persistent dysphagia may require dilation or revision`,
    },
  },

  media: [
    {
      id: 'gerd-anatomy',
      type: 'diagram',
      filename: 'gerd-pathophysiology.svg',
      title: 'GERD Pathophysiology',
      description: 'Diagram showing LES dysfunction, hiatal hernia, and reflux mechanisms',
    },
    {
      id: 'peptic-ulcer-locations',
      type: 'diagram',
      filename: 'peptic-ulcer-sites.svg',
      title: 'Peptic Ulcer Locations',
      description: 'Common sites of gastric and duodenal ulcers',
    },
  ],

  citations: [
    {
      id: 'acg-gerd-2022',
      type: 'article',
      title: 'ACG Clinical Guideline: Diagnosis and Management of Gastroesophageal Reflux Disease',
      authors: ['Katz, P.O.', 'Dunbar, K.B.', 'Schnoll-Sussman, F.H.'],
      source: 'American Journal of Gastroenterology',
      url: 'https://journals.lww.com/ajg/fulltext/2022/01000/acg_clinical_guideline_for_the_diagnosis_and.14.aspx',
    },
    {
      id: 'acg-hpylori-2017',
      type: 'article',
      title: 'ACG Clinical Guideline: Treatment of Helicobacter pylori Infection',
      authors: ['Chey, W.D.', 'Leontiadis, G.I.', 'Howden, C.W.'],
      source: 'American Journal of Gastroenterology',
    },
    {
      id: 'lyon-consensus',
      type: 'article',
      title: 'Lyon Consensus: Modern Diagnosis of Gastroesophageal Reflux Disease',
      source: 'Gut',
    },
  ],

  crossReferences: [
    { targetId: 'structure-esophagus', targetType: 'structure', relationship: 'related', label: 'Esophagus Anatomy' },
    { targetId: 'structure-stomach', targetType: 'structure', relationship: 'related', label: 'Stomach Anatomy' },
    { targetId: 'procedure-upper-endoscopy', targetType: 'topic', relationship: 'see-also', label: 'Upper Endoscopy' },
    { targetId: 'condition-gi-bleeding', targetType: 'condition', relationship: 'related', label: 'GI Bleeding' },
  ],

  tags: {
    systems: ['digestive', 'gastrointestinal'],
    topics: ['pathology', 'gastroenterology', 'pharmacology'],
    keywords: ['GERD', 'reflux', 'heartburn', 'peptic ulcer', 'H. pylori', 'PPI', 'Barrett'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default gerdAndPepticUlcer;
