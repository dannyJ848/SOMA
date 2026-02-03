/**
 * GERD and Acid Reflux - Comprehensive Patient Education Content
 *
 * Gastroesophageal reflux disease (GERD) is one of the most common GI conditions,
 * affecting up to 20% of adults. This content covers pathophysiology, symptoms,
 * diagnosis, and management with focus on patient education and compliance.
 */

import { EducationalContent } from '../../types';

export const gerdAcidReflux: EducationalContent = {
  id: 'condition-gerd-acid-reflux',
  type: 'condition',
  name: 'GERD (Gastroesophageal Reflux Disease)',
  alternateNames: ['Acid Reflux', 'Heartburn', 'Reflux', 'GORD'],
  hpoId: 'HP:0002020',

  levels: {
    1: {
      level: 1,
      summary: 'GERD is when stomach acid flows back up into the tube that connects your mouth to your stomach, causing a burning feeling in your chest called heartburn.',
      explanation: `Your stomach makes acid to break down food. Normally, a muscle at the bottom of your food pipe (esophagus) stays closed to keep the acid in your stomach. But sometimes this muscle doesn't work right, and acid splashes up into your food pipe.

**What it feels like:**
- A burning feeling in your chest (heartburn)
- Feeling like food is stuck in your throat
- Sour taste in your mouth
- Burping a lot
- Coughing, especially at night

**What makes it worse:**
- Eating big meals
- Lying down after eating
- Eating spicy, fatty, or acidic foods
- Drinking coffee, soda, or alcohol
- Being overweight
- Smoking

**Simple ways to feel better:**
- Eat smaller meals
- Don't eat for 2-3 hours before bed
- Raise the head of your bed 6-8 inches
- Avoid trigger foods
- Wear loose clothing
- Don't smoke

**When to see a doctor:**
- Heartburn more than twice a week
- Trouble swallowing
- Losing weight without trying
- Vomiting blood or having dark stools`,
      keyTerms: [
        { term: 'heartburn', definition: 'A burning feeling in your chest caused by stomach acid in the wrong place' },
        { term: 'reflux', definition: 'When stomach contents flow backward into the food pipe' },
        { term: 'esophagus', definition: 'The tube that carries food from your mouth to your stomach', pronunciation: 'eh-SOF-uh-gus' },
      ],
      analogies: [
        'Your stomach is like a bottle of soda. The muscle at the top is like the cap - if it\'s loose, the liquid can spill out when you tip the bottle.',
        'Think of heartburn like a volcano - acid is bubbling up from below where it doesn\'t belong.',
      ],
      examples: [
        'Someone might get heartburn after eating a big spicy pizza and then lying down on the couch.',
        'Wearing tight pants after a big meal can push on your stomach and cause acid to flow up.',
      ],
    },
    2: {
      level: 2,
      summary: 'GERD occurs when the lower esophageal sphincter (LES) relaxes inappropriately or weakens, allowing stomach acid and contents to reflux into the esophagus, causing symptoms and potentially damaging the esophageal lining.',
      explanation: `## How GERD Happens

The lower esophageal sphincter (LES) is a ring of muscle where the esophagus meets the stomach. It normally:
- Opens to let food pass into the stomach
- Closes tightly to prevent backflow

In GERD, the LES either:
- Relaxes when it shouldn't (transient LES relaxations)
- Is weakened and can't close properly
- Is displaced due to a hiatal hernia

## Types of Reflux

**Physiologic reflux:** Normal, brief episodes that don't cause symptoms or damage
**Pathologic reflux (GERD):** Excessive reflux causing symptoms or tissue damage

## Symptoms

**Typical symptoms:**
- Heartburn (burning chest pain rising toward throat)
- Regurgitation (sour/bitter taste, food coming back up)
- Dysphagia (difficulty swallowing)

**Atypical symptoms:**
- Chronic cough
- Hoarseness (laryngitis)
- Asthma worsening
- Dental erosion
- Chest pain (can mimic heart attack)

## Risk Factors

- Obesity (increased abdominal pressure)
- Hiatal hernia
- Pregnancy
- Smoking
- Certain medications (calcium channel blockers, anticholinergics)
- Diet: fatty foods, chocolate, caffeine, alcohol, acidic foods

## Diagnosis

Usually based on symptoms, but testing may include:
- Trial of acid-suppressing medication
- Upper endoscopy (EGD) - looking at esophagus with a camera
- pH monitoring - measuring acid levels in esophagus

## Treatment

**Lifestyle modifications:**
- Elevate head of bed 6-8 inches
- Avoid eating 2-3 hours before bedtime
- Weight loss if overweight
- Avoid trigger foods
- Quit smoking

**Medications:**
- Antacids (Tums, Rolaids): Neutralize acid, quick relief
- H2 blockers (famotidine): Reduce acid production
- Proton pump inhibitors/PPIs (omeprazole): Strongest acid reduction`,
      keyTerms: [
        { term: 'lower esophageal sphincter (LES)', definition: 'The ring of muscle between the esophagus and stomach that prevents backflow' },
        { term: 'hiatal hernia', definition: 'When part of the stomach pushes up through the diaphragm into the chest', pronunciation: 'hi-AY-tal HER-nee-uh' },
        { term: 'regurgitation', definition: 'When stomach contents come back up into the mouth or throat' },
        { term: 'dysphagia', definition: 'Difficulty swallowing', pronunciation: 'dis-FAY-jee-uh' },
        { term: 'proton pump inhibitor', definition: 'A type of medication that strongly reduces stomach acid production' },
      ],
      analogies: [
        'The LES is like a one-way valve in plumbing - it should only let things flow in one direction.',
        'A hiatal hernia is like a door that\'s off its hinges - it can\'t close properly anymore.',
      ],
    },
    3: {
      level: 3,
      summary: 'GERD results from disruption of the anti-reflux barrier, including transient LES relaxations, hypotensive LES, and hiatal hernia, leading to pathologic acid exposure that causes esophageal mucosal damage and both typical and extraesophageal symptoms.',
      explanation: `## Pathophysiology

### Anti-Reflux Barrier Components
1. **Lower Esophageal Sphincter (LES)**
   - Intrinsic smooth muscle sphincter (15-35 mmHg resting tone)
   - Tonic contraction prevents reflux
   - Relaxes with swallowing (coordinated with peristalsis)

2. **Diaphragmatic Crura**
   - External sphincter contribution
   - Augments LES during inspiration and straining
   - Disrupted in hiatal hernia

3. **Angle of His**
   - Acute angle between esophagus and gastric fundus
   - Creates flap-valve mechanism
   - Lost with hiatal hernia

### Mechanisms of GERD

**1. Transient LES Relaxations (TLESRs)**
- Primary mechanism in most GERD patients
- Vagally-mediated inappropriate relaxations
- Triggered by gastric distension
- Not associated with swallowing

**2. Hypotensive LES**
- Resting LES pressure <10 mmHg
- More common with severe GERD
- Allows free reflux

**3. Hiatal Hernia**
- Separation of LES from crural diaphragm
- Creates acid pocket above diaphragm
- Impairs esophageal acid clearance
- Larger hernias = more severe GERD

### Esophageal Mucosal Defense

**Luminal factors:**
- Saliva (bicarbonate, EGF)
- Gravity
- Esophageal peristalsis

**Mucosal resistance:**
- Mucus layer
- Cell membrane integrity
- Tight junctions
- Cellular buffering

## Clinical Manifestations

### Esophageal Syndromes
- **Erosive esophagitis (ERD):** Visible mucosal breaks
- **Non-erosive reflux disease (NERD):** Symptoms without erosions
- **Barrett's esophagus:** Intestinal metaplasia
- **Stricture:** Fibrotic narrowing

### Extraesophageal Syndromes
- **Laryngopharyngeal reflux (LPR):** Hoarseness, throat clearing, globus
- **Reflux-related asthma**
- **Chronic cough**
- **Dental erosion**

## Diagnosis

### Clinical Diagnosis
- Typical symptoms (heartburn, regurgitation) → PPI trial
- Response to PPI supports GERD diagnosis

### Endoscopy (EGD)
**Indications:**
- Alarm features (dysphagia, weight loss, anemia, age >60 at onset)
- Inadequate PPI response
- Screening for Barrett's (chronic GERD >5-10 years)

**Los Angeles Classification of Esophagitis:**
- Grade A: Mucosal breaks <5 mm
- Grade B: Mucosal breaks >5 mm, non-confluent
- Grade C: Confluent erosions <75% circumference
- Grade D: Confluent erosions ≥75% circumference

### Ambulatory Reflux Monitoring
- 24-96 hour pH monitoring (catheter or wireless capsule)
- Measures acid exposure time (AET)
- Normal AET <4%, pathologic >6%
- Impedance-pH detects non-acid reflux

### Esophageal Manometry
- Excludes motility disorders (achalasia)
- Characterizes LES function
- Required before anti-reflux surgery`,
      keyTerms: [
        { term: 'transient LES relaxation', definition: 'Inappropriate, vagally-mediated relaxation of the LES not associated with swallowing; primary mechanism of reflux' },
        { term: 'Los Angeles classification', definition: 'Endoscopic grading system for erosive esophagitis severity (Grades A-D)' },
        { term: 'acid exposure time', definition: 'Percentage of time esophageal pH is below 4; >6% is pathologic' },
        { term: 'angle of His', definition: 'Acute angle between esophagus and gastric fundus that creates a flap-valve mechanism' },
        { term: 'laryngopharyngeal reflux', definition: 'Reflux affecting the larynx and pharynx, causing hoarseness and throat symptoms' },
      ],
      clinicalNotes: 'The "PPI test" (empiric PPI trial for 8 weeks) is the most cost-effective initial diagnostic approach for typical GERD symptoms without alarm features. Sensitivity ~80% but lower specificity. Non-response should prompt further testing.',
    },
    4: {
      level: 4,
      summary: 'GERD pathophysiology involves complex interplay between anatomic factors, motility dysfunction, and mucosal susceptibility. Management requires phenotyping patients based on reflux patterns, symptom-reflux association, and mucosal findings to guide targeted therapy.',
      explanation: `## Advanced Pathophysiology

### Esophagogastric Junction (EGJ) Physiology

**High-Resolution Manometry (HRM) Classification:**
- Type I: Normal EGJ (LES-CD separation <2 cm)
- Type II: Small hiatal hernia (LES-CD separation 2-3 cm)
- Type III: Large hiatal hernia (LES-CD separation >3 cm)

**Integrated Relaxation Pressure (IRP):**
- Measures EGJ relaxation
- Elevated IRP suggests outflow obstruction (achalasia, EGJ obstruction)

### Acid Pocket Phenomenon

Post-prandial acid pocket:
- Unbuffered acid pool at EGJ
- Positioned above diaphragm with hiatal hernia
- Source of postprandial reflux episodes
- Target for alginate-based therapies (Gaviscon)

### Reflux Phenotypes

**1. Erosive Reflux Disease (ERD)**
- High acid exposure
- Clear symptom-reflux association
- Responds well to PPI

**2. Non-Erosive Reflux Disease (NERD)**
Subtypes:
- True NERD: Pathologic acid exposure, normal endoscopy
- Hypersensitive esophagus: Normal acid exposure, positive symptom association
- Functional heartburn: Normal acid exposure, no symptom association

**3. Barrett's Esophagus**
- Intestinal metaplasia as adaptive response
- Goblet cells on histology
- Risk for dysplasia and adenocarcinoma

**4. Refractory GERD**
Persistent symptoms despite twice-daily PPI:
- Inadequate acid suppression (non-compliance, metabolism)
- Non-acid reflux (bile, weakly acidic)
- Functional/hypersensitive
- Delayed gastric emptying
- Eosinophilic esophagitis

## Diagnostic Algorithms

### Reflux Monitoring Interpretation

**Metrics:**
- Acid Exposure Time (AET): % time pH <4
- Number of reflux episodes
- DeMeester score (composite)

**Lyon Consensus Thresholds:**
| Parameter | Normal | Inconclusive | Abnormal |
|-----------|--------|--------------|----------|
| AET (%) | <4 | 4-6 | >6 |
| Reflux episodes | <40 | 40-80 | >80 |

**Symptom-Reflux Association:**
- Symptom Index (SI): % symptoms preceded by reflux (positive >50%)
- Symptom Association Probability (SAP): Statistical association (positive >95%)

### Impedance-pH Monitoring

Detects all reflux types:
- Liquid vs gas
- Acid vs weakly acidic vs weakly alkaline
- Proximal extent of reflux

Mean Nocturnal Baseline Impedance (MNBI):
- Marker of mucosal integrity
- <2300 ohms suggests impaired mucosa
- Correlates with microscopic changes

### FLIP (Functional Luminal Imaging Probe)
- Measures EGJ distensibility
- EGJ-DI (distensibility index) <2 mm²/mmHg suggests obstruction
- Useful for detecting subtle achalasia

## Therapeutic Approach

### Medical Management

**First-line: PPI Therapy**
- Once daily, 30-60 min before breakfast
- 8-week initial course
- Step-down to lowest effective dose
- On-demand or intermittent for mild GERD

**PPI Considerations:**
- CYP2C19 metabolism affects efficacy
- Dexlansoprazole: Dual-release formulation
- Esomeprazole/rabeprazole: Less CYP2C19 dependent

**Adjunctive Therapies:**
- H2RAs at bedtime for nocturnal symptoms
- Alginate (Gaviscon Advance): Acid pocket displacement
- Baclofen: GABA-B agonist, reduces TLESRs
- Prokinetics: Limited role (metoclopramide)

**Neuromodulators for functional heartburn:**
- Low-dose tricyclic antidepressants
- SSRIs
- Trazodone

### Surgical/Endoscopic Options

**Anti-Reflux Surgery:**
- Nissen fundoplication (360° wrap)
- Toupet fundoplication (270° posterior)
- LINX magnetic sphincter augmentation

**Selection Criteria:**
- Objectively confirmed GERD (AET >6%)
- PPI-responsive symptoms
- Absence of major motility disorder
- Adequate esophageal body motility

**Endoscopic Treatments:**
- Transoral incisionless fundoplication (TIF)
- Radiofrequency ablation (Stretta)
- Generally less effective than surgery`,
      keyTerms: [
        { term: 'Lyon Consensus', definition: 'International consensus criteria for defining pathologic reflux using modern diagnostic testing' },
        { term: 'acid pocket', definition: 'Postprandial pool of unbuffered acid at the EGJ that serves as reservoir for reflux episodes' },
        { term: 'MNBI', definition: 'Mean Nocturnal Baseline Impedance; marker of esophageal mucosal integrity' },
        { term: 'FLIP', definition: 'Functional Luminal Imaging Probe; measures EGJ distensibility' },
        { term: 'DeMeester score', definition: 'Composite score from pH monitoring; >14.72 indicates pathologic reflux' },
        { term: 'LINX', definition: 'Magnetic sphincter augmentation device placed around LES to prevent reflux' },
      ],
      clinicalNotes: 'When evaluating refractory GERD, ensure PPI compliance and optimal timing (30-60 min before meals). Consider impedance-pH OFF PPI to confirm true GERD vs functional heartburn. If confirmed reflux, surgical referral indicated; if functional, neuromodulators preferred.',
    },
    5: {
      level: 5,
      summary: 'Contemporary GERD management requires integration of symptom phenotyping, modern reflux testing interpretation per Lyon Consensus, risk stratification for Barrett\'s, and evidence-based selection of medical, endoscopic, or surgical interventions based on objective physiologic data.',
      explanation: `## Current Guidelines and Evidence

### Diagnostic Framework (Lyon Consensus 2.0)

**Conclusive Evidence for GERD:**
- High-grade esophagitis (LA grade C/D)
- Long-segment Barrett's (>1 cm)
- Peptic stricture
- AET >6% (on or off PPI)

**Adjunctive Evidence:**
- Low-grade esophagitis (LA grade A/B)
- AET 4-6% with supportive evidence
- >80 reflux episodes
- Low MNBI (<2300 ohms)
- Positive symptom association (SAP >95%)
- Histopathology (dilated intercellular spaces)

**Borderline/Inconclusive:**
- Single parameter abnormal
- Inconsistent findings
- Consider functional overlap

### PPI Optimization

**Pharmacogenomics:**
- CYP2C19 polymorphisms affect PPI metabolism
- Rapid metabolizers: Consider higher doses or vonoprazan
- Poor metabolizers: Standard doses usually adequate

**Vonoprazan (Potassium-Competitive Acid Blocker):**
- Faster onset, longer duration than PPIs
- Less affected by CYP2C19
- Superior healing for severe esophagitis
- Available in some countries (Japan, approved in US 2023)

**On-Demand vs Continuous:**
- NERD patients: On-demand often sufficient
- ERD patients: Maintenance therapy recommended
- Barrett's: Continuous PPI regardless of symptoms

### Anti-Reflux Surgery Evidence

**LOTUS Trial (2011):**
- Laparoscopic Nissen vs esomeprazole
- Comparable remission at 5 years
- Surgery: more dysphagia, bloating
- Medical: more heartburn breakthrough

**REFLUX Trial:**
- Surgery superior to optimized medical management
- Maintained benefit at long-term follow-up

**LINX (Magnetic Sphincter Augmentation):**
- FDA approved 2012
- Less gas bloat than fundoplication
- Easier revision than fundoplication
- Contraindicated with significant hiatal hernia

### Refractory GERD Algorithm

**Step 1: Verify PPI Optimization**
- Correct timing (30-60 min AC)
- Confirm compliance
- Consider twice-daily dosing

**Step 2: Off-PPI Testing (if never done)**
- Impedance-pH monitoring
- Objective GERD confirmation
- Identifies functional overlap

**Step 3: On-PPI Testing (if symptoms persist)**
- Tests if symptoms reflux-related despite acid suppression
- Positive: Reflux-related, consider surgery
- Negative: Functional, consider neuromodulators

**Step 4: Targeted Intervention**
| Finding | Intervention |
|---------|--------------|
| Pathologic reflux, PPI responsive | Optimize PPI or surgery |
| Pathologic reflux, PPI refractory | Anti-reflux surgery |
| Weakly acidic reflux | Baclofen, surgery |
| Functional heartburn | Neuromodulators |
| Hypersensitive esophagus | Neuromodulators ± PPI |

### Barrett's Esophagus Surveillance

**Screening Recommendations (AGA 2022):**
- Consider screening in GERD >5 years with ≥3 risk factors
- Risk factors: male, white, age >50, central obesity, smoking, family history

**Surveillance Intervals:**
- Non-dysplastic: EGD every 3-5 years
- Low-grade dysplasia: 6-12 months, then annually if persistent
- High-grade dysplasia: Endoscopic eradication therapy

**Endoscopic Eradication Therapy:**
- Radiofrequency ablation (RFA) for flat dysplasia
- Endoscopic mucosal resection (EMR) for visible lesions
- >90% complete eradication rates
- Continued surveillance required

### Extraesophageal Reflux

**Diagnostic Challenges:**
- Poor correlation between symptoms and reflux
- pH monitoring less validated for LPR
- Many mimicking conditions

**Management:**
- Aggressive PPI trial (twice daily × 8-12 weeks)
- Limited response → unlikely pure reflux
- Consider laryngeal hypersensitivity, allergy, post-nasal drip

### Emerging Therapies

**Endoscopic Fundoplication:**
- Transoral incisionless fundoplication (TIF 2.0)
- EsophyX device
- Best for small hiatal hernia, no esophagitis
- Less effective than surgical fundoplication

**Novel Medical Targets:**
- GABA-B agonists (lesogaberan - development discontinued)
- mGluR5 antagonists
- Potassium-competitive acid blockers

**Microbiome Considerations:**
- PPIs alter gut microbiome
- Long-term effects under investigation
- C. difficile risk with long-term PPI

### Special Populations

**Pregnancy:**
- Lifestyle modifications first
- Antacids/sucralfate safe
- H2RAs if needed
- PPIs for severe symptoms (omeprazole pregnancy category C, but extensive safety data)

**Elderly:**
- Consider PPI-related risks (fracture, CKD, hypomagnesemia)
- Regular reassessment of need
- Deprescribe when appropriate

**Obesity:**
- GERD prevalence increases with BMI
- Weight loss improves symptoms
- Bariatric surgery considerations (Roux-en-Y reduces reflux, sleeve may worsen)`,
      keyTerms: [
        { term: 'vonoprazan', definition: 'Potassium-competitive acid blocker with faster onset and longer duration than PPIs; less affected by CYP2C19' },
        { term: 'Lyon Consensus 2.0', definition: 'Updated international criteria for defining conclusive evidence of GERD using modern diagnostic methods' },
        { term: 'TIF (Transoral Incisionless Fundoplication)', definition: 'Endoscopic anti-reflux procedure creating a partial fundoplication without incisions' },
        { term: 'endoscopic eradication therapy', definition: 'Combined EMR and RFA for treating Barrett\'s esophagus with dysplasia' },
        { term: 'MNBI', definition: 'Mean nocturnal baseline impedance; low values indicate impaired mucosal integrity' },
      ],
      clinicalNotes: `Key clinical management points:

1. **Diagnosis**: Use Lyon Consensus criteria. Multiple concordant abnormal findings strengthen GERD diagnosis. Single borderline findings require clinical correlation.

2. **PPI Failure**: True failure requires verification of compliance and timing. Most "refractory GERD" is suboptimal PPI use or functional overlap.

3. **Surgery Selection**: Requires objectively confirmed GERD (AET >6%) AND symptom-reflux correlation AND adequate esophageal motility. LINX for smaller hernias; fundoplication for larger.

4. **Barrett's**: Screen high-risk patients, surveil per guidelines, and refer early dysplasia for endoscopic therapy. PPIs long-term regardless of symptom control.

5. **Extraesophageal**: Maintain realistic expectations. If 8-12 week BID PPI trial fails, reflux is unlikely the primary cause.`,
    },
  },

  media: [
    {
      id: 'gerd-anatomy-diagram',
      type: 'diagram',
      filename: 'gerd-anatomy.svg',
      title: 'GERD Anatomy and LES Function',
      description: 'Normal vs dysfunctional lower esophageal sphincter',
    },
    {
      id: 'hiatal-hernia-types',
      type: 'diagram',
      filename: 'hiatal-hernia-types.svg',
      title: 'Types of Hiatal Hernia',
      description: 'Sliding vs paraesophageal hiatal hernias',
    },
    {
      id: 'la-classification',
      type: 'diagram',
      filename: 'la-classification.svg',
      title: 'Los Angeles Classification of Esophagitis',
      description: 'Grades A through D esophagitis',
    },
  ],

  citations: [
    {
      id: 'acg-gerd-2022',
      type: 'article',
      title: 'ACG Clinical Guideline: Treatment of Gastroesophageal Reflux Disease',
      authors: ['Katz, P.O.', 'Dunbar, K.B.', 'et al.'],
      source: 'American Journal of Gastroenterology',
      url: 'https://doi.org/10.14309/ajg.0000000000001538',
    },
    {
      id: 'lyon-consensus-2018',
      type: 'article',
      title: 'Modern diagnosis of GERD: the Lyon Consensus',
      source: 'Gut',
      url: 'https://doi.org/10.1136/gutjnl-2017-314722',
    },
  ],

  crossReferences: [
    { targetId: 'structure-esophagus', targetType: 'structure', relationship: 'related', label: 'Esophagus Anatomy' },
    { targetId: 'condition-barretts-esophagus', targetType: 'condition', relationship: 'related', label: 'Barrett\'s Esophagus' },
    { targetId: 'procedure-upper-endoscopy', targetType: 'topic', relationship: 'related', label: 'Upper Endoscopy' },
    { targetId: 'condition-peptic-ulcer', targetType: 'condition', relationship: 'related', label: 'Peptic Ulcer Disease' },
  ],

  tags: {
    systems: ['digestive'],
    topics: ['gastroenterology', 'upper-gi', 'acid-related'],
    keywords: ['heartburn', 'reflux', 'GERD', 'esophagitis', 'PPI', 'LES'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      shelf: ['medicine'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default gerdAcidReflux;
