/**
 * Upper GI Disorders - GERD, Gastritis, PUD, Dyspepsia
 *
 * Covers gastroesophageal reflux disease, gastritis, peptic ulcer disease,
 * and functional dyspepsia.
 */

import { EducationalContent } from '../types';

export const upperGIContent: EducationalContent = {
  id: 'gi-upper-gi-disorders',
  type: 'condition',
  name: 'Upper GI Disorders',
  alternateNames: [
    'GERD',
    'Gastroesophageal Reflux Disease',
    'Gastritis',
    'Peptic Ulcer Disease',
    'PUD',
    'Functional Dyspepsia',
    'Dyspepsia',
  ],

  levels: {
    1: {
      level: 1,
      summary: 'Upper GI problems affect the esophagus and stomach, causing heartburn, stomach pain, and indigestion.',
      explanation: `**What is the Upper GI Tract?**

The upper GI (gastrointestinal) tract includes your esophagus (the tube from your mouth to stomach) and your stomach. These organs help break down food and move it to your intestines.

**Common Upper GI Problems:**

1. **GERD (Acid Reflux)**
   - When stomach acid flows back up into the esophagus
   - Causes burning chest pain called heartburn
   - Happens when the muscle "door" between esophagus and stomach is weak

2. **Gastritis**
   - Inflammation (redness and swelling) of the stomach lining
   - Can cause stomach pain, nausea, and feeling full
   - Often caused by infections or certain pain medicines

3. **Peptic Ulcers**
   - Open sores in the lining of the stomach or upper small intestine
   - Feel like a burning pain in your belly
   - Most are caused by a bacteria called H. pylori or from taking pain pills

4. **Dyspepsia (Indigestion)**
   - General term for stomach discomfort, bloating, and feeling full
   - Can happen even when tests look normal
   - Often related to stress, eating too fast, or certain foods

**What Helps?**
- Eating smaller meals
- Not lying down right after eating
- Avoiding spicy or acidic foods
- Medicines that reduce stomach acid`,
      keyTerms: [
        { term: 'esophagus', definition: 'The tube that carries food from your mouth to your stomach' },
        { term: 'GERD', definition: 'When stomach acid flows back up into the food pipe, causing heartburn' },
        { term: 'gastritis', definition: 'When the stomach lining gets red and swollen' },
        { term: 'ulcer', definition: 'A sore or hole in the lining of the stomach or intestine' },
        { term: 'dyspepsia', definition: 'Indigestion - discomfort in the upper belly area', pronunciation: 'dis-PEP-see-ah' },
      ],
      analogies: [
        'The valve between your esophagus and stomach is like a one-way door - food goes down, but acid should not come back up.',
        'An ulcer is like a canker sore inside your stomach.',
        'Your stomach lining is like a protective shield - when it gets damaged, acid can hurt the tissue underneath.',
      ],
      examples: [
        'Eating a large pizza before bed might cause GERD symptoms because the stomach is full when you lie flat.',
        'Someone taking aspirin daily for arthritis might develop gastritis because aspirin can irritate the stomach lining.',
        'A person who feels full after only a few bites and has upper belly pain might have dyspepsia.',
      ],
      patientCounselingPoints: [
        'Take your acid medicine 30-60 minutes before breakfast for best effect',
        'Raise the head of your bed by 6 inches if you have nighttime reflux',
        'Avoid alcohol, tobacco, and foods that trigger your symptoms',
        'Eat smaller, more frequent meals instead of large ones',
      ],
    },

    2: {
      level: 2,
      summary: 'Upper GI disorders include GERD (acid reflux), gastritis (stomach inflammation), peptic ulcer disease, and functional dyspepsia. These conditions share overlapping symptoms but have different causes and treatments.',
      explanation: `## Gastroesophageal Reflux Disease (GERD)

**What happens in GERD:**
The lower esophageal sphincter (LES) is a ring of muscle between the esophagus and stomach. In GERD, this muscle relaxes too much or is too weak, allowing stomach contents to flow backward (reflux) into the esophagus.

**Symptoms:**
- Heartburn (burning behind the breastbone)
- Regurgitation (sour taste in mouth)
- Difficulty swallowing
- Chronic cough or hoarseness
- Chest pain (can mimic heart problems)

**Risk Factors:**
- Obesity, pregnancy, hiatal hernia
- Smoking, alcohol, caffeine
- Fatty/fried foods, chocolate, peppermint
- Eating before lying down

**Complications:**
- Esophagitis (inflammation of the esophagus)
- Esophageal strictures (narrowing from scarring)
- Barrett's esophagus (precancerous changes)
- Esophageal cancer

## Gastritis

**Types:**
- Acute gastritis: Sudden inflammation, often from alcohol, NSAIDs, or illness
- Chronic gastritis: Long-term inflammation, often from H. pylori infection or autoimmune disease

**Causes:**
- H. pylori bacterial infection
- NSAID medications (aspirin, ibuprofen)
- Alcohol, smoking
- Severe stress, burns, trauma
- Autoimmune attack on stomach lining

**Symptoms:**
- Upper abdominal pain or burning
- Nausea, vomiting
- Bloating, feeling full quickly
- Loss of appetite

## Peptic Ulcer Disease

**What is an ulcer:**
A break in the mucosal lining of the stomach (gastric ulcer) or duodenum (duodenal ulcer) that extends deeper than the muscularis mucosa.

**Causes:**
- H. pylori infection (most common)
- NSAID use
- Rare: Zollinger-Ellison syndrome (gastrin-secreting tumor)

**Gastric vs. Duodenal Ulcers:**

| Feature | Gastric Ulcer | Duodenal Ulcer |
|---------|---------------|----------------|
| Pain | Worse WITH eating | Better WITH eating, worse 2-3 hours after |
| Location | Epigastrum, may radiate to back | Epigastrum, may radiate to back |
| Weight loss | Common | Rare |
| H. pylori | 70% | 90% |

**Alarm Symptoms (need immediate evaluation):**
- Vomiting blood (red or coffee-ground material)
- Black, tarry stools
- Unintentional weight loss
- Difficulty swallowing
- Anemia

## Functional Dyspepsia

**Definition:**
Chronic upper abdominal symptoms with no identifiable structural cause on endoscopy.

**Rome IV Criteria (must have at least one):**
- Bothersome postprandial fullness
- Early satiation (feeling full too soon)
- Epigastric pain
- Epigastric burning

**Types:**
- Postprandial distress syndrome (fullness, early satiety)
- Epigastric pain syndrome (pain, burning)`,
      keyTerms: [
        { term: 'lower esophageal sphincter (LES)', definition: 'Muscle ring at the esophagus-stomach junction that prevents reflux', pronunciation: 'SFINK-ter' },
        { term: 'hiatal hernia', definition: 'When part of the stomach pushes up through the diaphragm into the chest' },
        { term: 'Barrett esophagus', definition: 'Precancerous change where esophageal lining becomes intestinal-type cells' },
        { term: 'H. pylori', definition: 'Bacteria that causes most gastric and duodenal ulcers', pronunciation: 'py-LOR-ee' },
        { term: 'NSAID', definition: 'Non-steroidal anti-inflammatory drugs like ibuprofen, naproxen, aspirin' },
        { term: 'postprandial', definition: 'After a meal', pronunciation: 'post-PRAN-dee-ul' },
        { term: 'early satiation', definition: 'Feeling full after eating only a small amount' },
      ],
      analogies: [
        'The LES is like a valve that only should open one way - when it fails, backflow occurs.',
        'H. pylori burrows into the mucus layer of the stomach, like termites in wood.',
      ],
      examples: [
        'A patient with burning chest pain that worsens when lying down likely has GERD.',
        'Someone who takes daily ibuprofen for arthritis and develops stomach pain may have NSAID-induced gastritis.',
        'A person with stomach pain that improves when they eat might have a duodenal ulcer.',
      ],
    },

    3: {
      level: 3,
      summary: 'Upper GI disorders involve disruption of normal mucosal protection and acid balance. GERD results from LES dysfunction and impaired esophageal clearance, while PUD arises from H. pylori-induced inflammation or NSAID-mediated prostaglandin depletion.',
      explanation: `## GERD Pathophysiology

**Normal Anti-Reflux Mechanisms:**
1. **Lower Esophageal Sphincter (LES):**
   - Basal pressure of 15-35 mmHg prevents reflux
   - Transient LES relaxations (tLESRs) are the primary mechanism of reflux events
   - tLESRs are vagally-mediated, triggered by gastric distension

2. **Esophageal Clearance:**
   - Peristalsis clears refluxed acid
   - Salivary bicarbonate neutralizes residual acid
   - Gravity helps keep acid below the diaphragm

3. **Hiatal Hernia:**
   - Sliding (Type I) - most common
   - Reduces LES pressure and impairs esophageal clearance
   - Creates an acid pocket above the diaphragm

**Pathologic Reflux Occurs When:**
- LES pressure is too low or relaxes inappropriately
- Esophageal clearance is impaired
- Refluxate is overly acidic or contains bile
- Mucosal resistance is compromised

**GERD Phenotypes:**
- Non-erosive reflux disease (NERD) - symptoms with normal endoscopy
- Erosive esophagitis - visible mucosal breaks
- Barrett's esophagus - intestinal metaplasia
- Reflux hypersensitivity - normal acid exposure, symptom association present

## Gastritis Pathophysiology

**Mucosal Defense Mechanisms:**
- Mucus-bicarbonate barrier
- Prostaglandin-mediated blood flow
- Epithelial cell restitution and renewal
- Acid suppression via negative feedback

**Acute Gastritis Mechanisms:**
- NSAIDs inhibit COX-1, reducing protective prostaglandins
- Alcohol directly damages mucosal cells
- Stress reduces mucosal blood flow (ischemia)
- Bile reflux causes chemical injury

**Chronic Gastritis Types:**

| Type | Cause | Location | Consequences |
|------|-------|----------|--------------|
| H. pylori | Bacterial infection | Antrum-predominant | Increased acid, duodenal ulcer |
| Autoimmune | Autoantibodies | Corpus-predominant | Achlorhydria, B12 deficiency, cancer risk |

## Peptic Ulcer Disease Pathophysiology

**The Balance Concept:**
Ulcers occur when aggressive factors exceed defensive factors:

*Aggressive Factors:*
- Acid and pepsin
- H. pylori infection
- NSAIDs
- Bile salts
- Free radicals

*Defensive Factors:*
- Mucus-bicarbonate barrier
- Surface epithelial cells
- Mucosal blood flow
- Prostaglandins
- Growth factors

**H. pylori Pathogenicity:**
- Urease: produces ammonia, neutralizes acid
- Flagella: motility through mucus layer
- Adhesins: attach to epithelial cells
- CagA and VacA: cause tissue damage and inflammation
- Induces IL-8 production → neutrophil recruitment → gastritis

**NSAID Injury Mechanism:**
- COX-1 inhibition → decreased PGE2 and PGI2
- Reduced mucus and bicarbonate secretion
- Reduced mucosal blood flow
- Impaired epithelial repair
- Topical irritation by acidic drug molecules

## Functional Dyspepsia

**Proposed Mechanisms:**
- Visceral hypersensitivity
- Impaired gastric accommodation
- Delayed gastric emptying (gastroparesis)
- Low-grade inflammation
- Psychosocial factors
- Altered gut-brain axis

**Rome IV Diagnostic Criteria:**
- At least 3 months of symptoms, with onset 6+ months before diagnosis
- No evidence of structural disease on endoscopy
- One or more: bothersome postprandial fullness, early satiation, epigastric pain, or epigastric burning`,
      keyTerms: [
        { term: 'transient LES relaxation (tLESR)', definition: 'Vagally-mediated LES relaxation not associated with swallowing; primary cause of reflux' },
        { term: 'Barrett esophagus', definition: 'Intestinal metaplasia of esophageal squamous epithelium; premalignant condition' },
        { term: 'CagA', definition: 'H. pylori virulence factor associated with increased inflammation and cancer risk' },
        { term: 'VacA', definition: 'H. pylori vacuolating cytotoxin causing epithelial cell damage' },
        { term: 'prostaglandin E2', definition: 'Protective lipid compound that maintains mucosal blood flow and mucus secretion' },
        { term: 'visceral hypersensitivity', definition: 'Increased perception of stimuli from internal organs' },
        { term: 'gastric accommodation', definition: 'Relaxation of proximal stomach to accommodate food without increased pressure' },
      ],
      clinicalNotes: 'PPIs are most effective when taken 30-60 minutes before meals. All gastric ulcers require biopsy to rule out malignancy. H. pylori testing should be done after a 2-week washout from PPIs and 4 weeks from antibiotics/bismuth.',
    },

    4: {
      level: 4,
      summary: 'Upper GI disorders encompass complex interactions between physiological, anatomical, and microbiological factors. Understanding the pathophysiology of LES dysfunction, H. pylori virulence factors, and mucosal defense mechanisms is essential for targeted therapy.',
      explanation: `## Advanced GERD Pathophysiology

**LES Complex:**
The gastroesophageal junction high-pressure zone comprises:
- Intrinsic LES (smooth muscle)
- Crural diaphragm (skeletal muscle)
- Phrenoesophageal ligament
- Angle of His (flap valve mechanism)

**Transient LES Relaxations (tLESRs):**
- Mediated by vagal pathways via nucleus tractus solitarius
- Triggered by gastric distension (mechanoreceptors)
- Normal phenomenon, but increased frequency and duration in GERD
- Unaffected by PPI therapy (explains PPI non-response)

**Esophageal Defense:**
- Pre-epithelial: Salivary bicarbonate, mucus
- Epithelial: Tight junctions, ion transporters
- Post-epithelial: Blood flow, neutralization

**Dilated Intercellular Spaces (DIS):**
- Electron microscopic finding in NERD
- Allows acid penetration to sensory nerves
- Causes symptoms without visible erosions
- Reversible with PPI therapy

**PPI Non-Response Evaluation:**
1. Verify diagnosis (pH-impedance monitoring)
2. Assess adherence and timing
3. Consider non-erosive reflux with hypersensitivity
4. Rule out eosinophilic esophagitis, achalasia
5. Evaluate for functional heartburn

## H. pylori: Molecular Pathogenesis

**Bacterial Factors:**

| Virulence Factor | Function | Clinical Impact |
|------------------|----------|-----------------|
| Urease (UreA/B) | Ammonia production, pH buffering | Essential for colonization |
| Flagella | Motility through mucus | Reaches epithelial surface |
| BabA | Adhesion to Lewis b antigen | Enhanced colonization |
| SabA | Adhesion to sialyl-Lewis x | Chronic inflammation |
| CagA | Injected via Type IV secretion system | Gastric cancer risk 2-3x |
| VacA | Forms pores, apoptosis | Ulcer formation, immune evasion |
| OipA | Proinflammatory signaling | IL-8 induction |
| DupA | DU promoting gene | Duodenal ulcer association |

**Host Factors:**
- IL-1β and TNF-α polymorphisms → increased inflammation
- TLR variants → altered immune recognition
- MUC1/MUC5AC polymorphisms → mucosal defense

**Gastric Physiologic Changes:**
- Antral-predominant: Hypergastrinemia → increased acid → duodenal ulcer
- Corpus-predominant: Atrophic gastritis → hypochlorhydria → gastric cancer risk

**CagA Pathogenesis:**
1. Cag injected via Type IV secretion system
2. Src-family kinases phosphorylate CagA
3. Altered cell signaling (SHp2/MAPK pathway)
4. Cytoskeletal rearrangement (hummingbird phenotype)
5. Pro-inflammatory gene activation
6. Apoptosis inhibition → malignant transformation

## NSAID Gastropathy: Mechanisms and Risk

**Topical Injury:**
- Weak acids accumulate in epithelial cells (ion trapping)
- Direct mitochondrial damage
- Increased permeability

**Systemic Effects:**
- COX-1 inhibition → PGE2 depletion
- Reduced mucosal blood flow (up to 70% decrease)
- Impaired bicarbonate secretion
- Decreased mucus production
- Reduced epithelial proliferation and migration

**Risk Stratification:**
- Prior ulcer complication: OR 13.5
- Age >65: OR 5.5
- High-dose NSAID: OR 4.5
- Concurrent anticoagulant: OR 12.7
- Concurrent corticosteroid: OR 4.4
- H. pylori positive: OR 2-4

**Chemoprevention Options:**
- PPI: Relative risk reduction 60-80%
- Misoprostol: Similar efficacy, limited by diarrhea
- COX-2 selective: Lower GI risk, higher CV risk

## Functional DyspEPSia: Subtypes and Pathophysiology

**Postprandial Distress Syndrome (PDS):**
- Meal-related symptoms
- Impaired gastric accommodation (fundic relaxation failure)
- Distal gastric hypersensitivity
- Delayed gastric emptying in 30-40%

**Epigastric Pain Syndrome (EPS):**
- Epigastric pain/burning not meal-related
- Visceral hypersensitivity (lower pain thresholds)
- Central sensitization
- Overlap with IBS common

**Therapeutic Implications:**
- PDS: Prokinetics, fundic relaxants (buspirone, acotiamide)
- EPS: Low-dose TCAs, SSRIs, neuromodulators
- Overlap: Combination approaches`,
      keyTerms: [
        { term: 'crural diaphragm', definition: 'Skeletal muscle component of the EGJ that augments LES pressure during inspiration' },
        { term: 'dilated intercellular spaces (DIS)', definition: 'Electron microscopic finding in NERD allowing acid penetration to nerves' },
        { term: 'Type IV secretion system', definition: 'H. pylori apparatus for injecting CagA into gastric cells' },
        { term: 'Lewis b antigen', definition: 'Blood group antigen on gastric cells that BabA binds to' },
        { term: 'ion trapping', definition: 'Accumulation of weak acids in epithelial cells due to pH gradient' },
        { term: 'visceral hypersensitivity', definition: 'Enhanced perception of stimuli from internal organs due to peripheral and central sensitization' },
        { term: 'fundic accommodation', definition: 'Vagally-mediated relaxation of proximal stomach to accommodate meals' },
      ],
      clinicalNotes: `Refractory GERD workup:
1. Verify PPI adherence (30-60 min before meals)
2. Consider switching PPI (metabolism differences)
3. Add H2RA at night for nocturnal acid breakthrough
4. pH-impedance OFF PPI to confirm pathologic reflux
5. Consider psychosocial factors, anxiety/depression

All gastric ulcers require biopsy - 2-5% of gastric ulcers are malignant. Biopsy both ulcer edge and base to increase yield.`,
    },

    5: {
      level: 5,
      summary: 'Management of upper GI disorders requires evidence-based, guideline-directed approaches incorporating risk stratification, endoscopic evaluation when indicated, and tailored therapy based on pathophysiology and clinical presentation.',
      explanation: `## GERD: Evidence-Based Management

**ACG 2022 Guideline Approach:**

*Diagnostic Strategy:*
1. Typical symptoms → Empiric PPI trial (8 weeks)
2. Alarm features → Direct to EGD
3. PPI non-response → pH-impedance monitoring (off PPI)

*Alarm Features:*
- Dysphagia, odynophagia
- GI bleeding, anemia
- Unintentional weight loss
- Family history of esophageal cancer
- Persistent vomiting
- Epigastric mass, lymphadenopathy

**Lifestyle Modifications (Evidence-Based):**
- Weight loss (Grade A, strong recommendation)
- Head of bed elevation 6-8 inches (Grade A)
- Avoid recumbency 2-3 hours postprandial (Grade A)
- Meal size reduction (Grade B)
- Smoking cessation (Grade B)
- Alcohol moderation (Grade C)

**Pharmacologic Therapy:**

*Proton Pump Inhibitors (PPIs):*
- First-line for GERD (Grade A, strong)
- Standard dose: Omeprazole 20mg, Pantoprazole 40mg, Esomeprazole 20mg, Lansoprazole 30mg daily
- Double dose (BID) for incomplete response
- Take 30-60 minutes before breakfast (and dinner if BID)

*PPI Safety Considerations:*
- C. difficile infection: RR 1.4-2.0
- Pneumonia: RR 1.3
- Hip fracture: RR 1.2-1.6
- B12 deficiency (long-term use)
- Hypomagnesemia (rare)
- Acute interstitial nephritis (rare)

*Alternatives:*
- H2RAs: Less effective, tachyphylaxis develops
- P-CABs (vonoprazan): Longer-acting, acid-stable
- Alginate-antacid: Mechanical barrier effect

**Refractory GERD Evaluation:**

*Stepwise Approach:*
1. Confirm adherence and proper timing
2. Optimize PPI (switch agent, dose to BID)
3. Off-PPI pH-impedance to confirm pathologic reflux
4. Manometry if surgery considered

*Diagnostic Criteria (Lyon Consensus):*
- Acid exposure time (AET): >6% abnormal, <4% normal
- DeMeester score: >14.7 abnormal
- Symptom association probability (SAP): >95% positive

**Barrett's Esophagus Management:**

*Surveillance Intervals (ACG 2020):*
- No dysplasia: EGD every 3-5 years
- Low-grade dysplasia: EGD every 6-12 months OR endoscopic eradication
- High-grade dysplasia: Endoscopic eradication therapy (EET)
- Intramucosal carcinoma: EET

*Endoscopic Eradication Therapy:*
- Radiofrequency ablation (RFA) for flat Barrett's
- Endoscopic mucosal resection (EMR) for visible lesions
- Cryotherapy as salvage therapy
- Complete remission achieved in >90% with EET

## Peptic Ulcer Disease: Contemporary Management

**H. pylori Eradication (ACG 2017, Maastricht VI):**

*First-Line Options:*

1. **Bismuth Quadruple Therapy (Preferred):**
   - PPI BID + Bismuth subsalicylate QID + Tetracycline QID + Metronidazole QID/TID
   - 14 days
   - Efficacy: >90% in compliant patients

2. **Concomitant Therapy:**
   - PPI BID + Clarithromycin BID + Amoxicillin BID + Metronidazole BID
   - 14 days
   - Good efficacy despite clarithromycin resistance

3. **Triple Therapy (only if resistance <15%):**
   - PPI BID + Clarithromycin BID + Amoxicillin BID
   - 14 days
   - Declining efficacy due to resistance

*Salvage Therapy:*
- Levofloxacin-based: PPI BID + Amoxicillin BID + Levofloxacin QD
- Rifabutin-based: PPI BID + Amoxicillin BID + Rifabutin QD
- High-dose dual therapy: PPI QID + Amoxicillin QID

**Resistance Patterns (US):**
- Clarithromycin: 15-20% (higher in certain regions)
- Metronidazole: 40-50%
- Levofloxacin: 20-30% and rising
- Amoxicillin: <2%
- Tetracycline: Rare
- Rifabutin: Very rare

**Testing Considerations:**
- Urea breath test or stool antigen for initial diagnosis
- Serology only for epidemiologic studies
- Test of cure: 4+ weeks post-treatment, 2+ weeks off PPI
- Mandatory for complicated ulcers, MALT lymphoma, persistent symptoms

**NSAID Ulcer Prevention:**
- High-risk patients: PPI co-therapy (Grade A)
- Test and treat H. pylori before starting NSAIDs (Grade A)
- Consider COX-2 selective + PPI for highest risk (Grade B)
- Misoprostol alternative (limited by side effects)

**Refractory Ulcer Evaluation:**
1. Confirm H. pylori eradication
2. Verify NSAID cessation
3. Repeat EGD with biopsies to rule out malignancy
4. Consider fasting gastrin for Zollinger-Ellison
5. Evaluate for alternative causes: CMV, HSV, Crohn's, ischemia

## Functional Dyspepsia Management

**Rome IV Diagnostic Criteria:**
- bothersome postprandial fullness, early satiation, epigastric pain, OR epigastric burning
- symptoms 3+ months, onset 6+ months ago
- no evidence of structural disease on EGD

**Subtype-Directed Therapy:**

*Postprandial Distress Syndrome:*
- PPI trial (Grade B)
- Prokinetic agents (itopride, domperidone - availability varies)
- Acotiamide (available in Japan/Asia)
- Buspirone (fundic relaxant)
- Tricyclic antidepressants (low dose for hypersensitivity)

*Epigastric Pain Syndrome:*
- PPI trial (lower efficacy than PDS)
- Low-dose TCAs (amitriptyline 10-50 mg)
- SSRIs if comorbid anxiety/depression
- Gabapentinoids for neuropathic component

*General Approach:*
- Address H. pylori (small subset benefits)
- Dietary modifications: low FODMAP for some
- Cognitive behavioral therapy
- Hypnotherapy (emerging evidence)`,
      keyTerms: [
        { term: 'DeMeester score', definition: 'Composite score measuring acid exposure; >14.7 indicates pathologic reflux' },
        { term: 'acid exposure time (AET)', definition: 'Percentage of time esophageal pH <4; >6% abnormal per Lyon Consensus' },
        { term: 'symptom association probability (SAP)', definition: 'Statistical measure linking symptoms to reflux events; >95% considered positive' },
        { term: 'bismuth quadruple therapy', definition: 'First-line H. pylori regimen: PPI + bismuth + tetracycline + metronidazole for 14 days' },
        { term: 'concomitant therapy', definition: 'H. pylori regimen: PPI + clarithromycin + amoxicillin + metronidazole taken simultaneously' },
        { term: 'test of cure', definition: 'Confirmatory testing 4+ weeks after H. pylori treatment to document eradication' },
        { term: 'MALT lymphoma', definition: 'B-cell lymphoma of the stomach associated with chronic H. pylori infection' },
      ],
      clinicalNotes: `Clinical Pearls:
1. PPI timing is critical - must be taken 30-60 min before first meal for optimal effect
2. All gastric ulcers must be biopsied to rule out malignancy; duodenal ulcers rarely malignant
3. H. pylori test of cure is mandatory after treatment of complicated ulcers and MALT lymphoma
4. In refractory GERD, obtain pH-impedance OFF PPI before escalating therapy
5. Barrett's with visible lesions: EMR first, never ablate without tissue diagnosis
6. Low-dose TCAs (10-50 mg) more effective than high dose for functional dyspepsia
7. Consider eosinophilic esophagitis in PPI-refractory dysphagia or food impaction
8. Zollinger-Ellison: fasting gastrin >1000 pg/mL virtually diagnostic; order secretin stimulation test if 100-1000`,
    },
  },

  media: [
    {
      id: 'gerd-pathophysiology-diagram',
      type: 'diagram',
      filename: 'gerd-pathophysiology.svg',
      title: 'GERD Pathophysiology Diagram',
      description: 'Illustration of LES dysfunction and reflux mechanisms',
    },
    {
      id: 'peptic-ulcer-comparison',
      type: 'diagram',
      filename: 'gastric-vs-duodenal-ulcer.svg',
      title: 'Gastric vs Duodenal Ulcer',
      description: 'Comparison of gastric and duodenal ulcer locations and characteristics',
    },
  ],

  citations: [
    {
      id: 'acg-gerd-2022',
      type: 'article',
      title: 'ACG Clinical Guideline: Diagnosis and Management of Gastroesophageal Reflux Disease',
      authors: ['Katz PO', 'Dunbar KB', 'Schnoll-Sussman FH'],
      source: 'American Journal of Gastroenterology 2022',
    },
    {
      id: 'acg-hpylori-2017',
      type: 'article',
      title: 'ACG Clinical Guideline: Treatment of Helicobacter pylori Infection',
      authors: ['Chey WD', 'Leontiadis GI', 'Howden CW'],
      source: 'American Journal of Gastroenterology 2017',
    },
    {
      id: 'lyon-consensus',
      type: 'article',
      title: 'Modern Diagnosis of GERD: The Lyon Consensus',
      authors: ['Kahrilas PJ', 'Bredenoord AJ', 'Fox M'],
      source: 'Gut 2018',
    },
    {
      id: 'barrett-acg-2020',
      type: 'article',
      title: 'ACG Clinical Guideline: Diagnosis and Management of Barrett Esophagus',
      authors: ['Srivastava A', 'Lauwers GY', 'Triadafilopoulos G'],
      source: 'American Journal of Gastroenterology 2020',
    },
  ],

  crossReferences: [
    { targetId: 'condition-hpylori', targetType: 'condition', relationship: 'related', label: 'H. pylori Infection' },
    { targetId: 'condition-gi-bleeding', targetType: 'condition', relationship: 'related', label: 'GI Bleeding' },
    { targetId: 'procedure-egd', targetType: 'topic', relationship: 'see-also', label: 'Upper Endoscopy' },
  ],

  tags: {
    systems: ['gastrointestinal'],
    topics: ['gastroenterology', 'pathology', 'pharmacology'],
    keywords: ['GERD', 'reflux', 'ulcer', 'gastritis', 'dyspepsia', 'H. pylori', 'PPI'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery'],
    },
  },

  createdAt: '2026-01-25T00:00:00.000Z',
  updatedAt: '2026-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
};
