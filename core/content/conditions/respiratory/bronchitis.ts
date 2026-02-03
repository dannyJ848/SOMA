/**
 * Bronchitis (Acute and Chronic) - Comprehensive Educational Content
 *
 * Covers pathophysiology, diagnosis, and management of acute and chronic bronchitis.
 */

import { EducationalContent } from '../../types';

export const bronchitis: EducationalContent = {
  id: 'condition-bronchitis',
  type: 'condition',
  name: 'Bronchitis',
  alternateNames: ['Acute Bronchitis', 'Chronic Bronchitis', 'Chest Cold'],
  hpoId: 'HP:0012463',

  levels: {
    1: {
      level: 1,
      summary: 'Bronchitis is when the tubes that carry air to your lungs become swollen and irritated, causing a cough that often brings up mucus.',
      explanation: `Bronchitis happens when the bronchial tubes (breathing tubes in your lungs) get inflamed. This inflammation causes irritation and leads to coughing.

**There are two main types:**

**Acute Bronchitis (Chest Cold):**
- Comes on suddenly
- Usually caused by a virus (like cold or flu viruses)
- Lasts a few weeks
- Most common type

**Chronic Bronchitis:**
- Keeps coming back or doesn't go away
- Defined as cough with mucus on most days for 3 months a year for 2 years in a row
- Usually caused by smoking
- A type of COPD

**Common symptoms:**
- Cough (often with mucus)
- Chest discomfort
- Mild fever (acute)
- Shortness of breath
- Tiredness
- Wheezing

**What causes acute bronchitis?**
- Same viruses that cause colds and flu
- Sometimes bacteria (less common)
- Breathing in irritants (dust, smoke, pollution)

**Treatment:**
- Most cases get better on their own
- Rest and drink plenty of fluids
- Over-the-counter medicines for fever and cough
- Humidifier or steam
- Time - acute bronchitis usually lasts 10-20 days

**Important:** Antibiotics don't help viral bronchitis, which is most cases. They only help if caused by bacteria.`,
      keyTerms: [
        { term: 'bronchial tubes', definition: 'The breathing tubes that carry air from your windpipe into your lungs' },
        { term: 'acute', definition: 'Something that happens suddenly and usually lasts a short time' },
        { term: 'chronic', definition: 'Something that continues for a long time or keeps coming back' },
        { term: 'mucus', definition: 'Thick, sticky fluid produced in the airways, also called phlegm or sputum' },
      ],
      analogies: [
        'Acute bronchitis is like a sunburn inside your breathing tubes - red, irritated, and uncomfortable until it heals.',
        'Your bronchial tubes are like hoses. When they\'re swollen from bronchitis, air has a harder time getting through, like water through a pinched hose.',
      ],
      examples: [
        'A college student develops a bad cough with mucus after having a cold for a few days - this is typical acute bronchitis.',
        'A smoker who has had a morning cough with mucus for years may have chronic bronchitis.',
      ],
    },
    2: {
      level: 2,
      summary: 'Bronchitis is inflammation of the bronchial tubes causing cough and mucus production. Acute bronchitis is usually viral and self-limited, while chronic bronchitis is defined by productive cough for 3 months in 2 consecutive years, typically from smoking.',
      explanation: `## Acute vs Chronic Bronchitis

| Feature | Acute Bronchitis | Chronic Bronchitis |
|---------|-----------------|-------------------|
| Onset | Sudden | Gradual |
| Duration | Days to weeks | Lifelong/progressive |
| Main cause | Viral infection | Smoking |
| Reversibility | Fully reversible | Not fully reversible |
| Classification | Type of COPD | |

## Acute Bronchitis

**Causes:**
- Viruses (90%): Influenza, parainfluenza, RSV, rhinovirus, adenovirus
- Bacteria (<10%): *Mycoplasma pneumoniae*, *Bordetella pertussis*, *Chlamydia pneumoniae*
- Irritants: Dust, smoke, pollution

**Symptoms:**
- Cough (lasts 10-20 days, can linger 4+ weeks)
- Mucus production (clear, white, yellowish, or green)
- Low-grade fever
- Chest discomfort/soreness
- Mild shortness of breath

**Diagnosis:**
- Clinical diagnosis based on symptoms
- Chest X-ray if pneumonia suspected
- Consider pertussis testing if cough >2 weeks

**Treatment:**
- Supportive care (no antibiotics for most cases)
- Cough suppressants for sleep disturbance
- Beta-agonists if underlying asthma or wheezing
- Antibiotics only if:
  - Pertussis suspected
  - Suspected pneumonia
  - Patient with COPD and increased sputum purulence

## Chronic Bronchitis

**Definition:**
Productive cough for 3 months in each of 2 consecutive years

**Pathophysiology:**
- Chronic airway inflammation
- Goblet cell hyperplasia (more mucus-producing cells)
- Submucosal gland hypertrophy
- Impaired mucociliary clearance

**Risk Factors:**
- Cigarette smoking (primary risk)
- Occupational exposures (dust, chemicals)
- Air pollution
- Recurrent respiratory infections
- Alpha-1 antitrypsin deficiency (rare)
- Genetic predisposition

**Clinical Features:**
- "Blue bloater" appearance (cyanosis, edema)
- Productive cough ("smoker\'s cough")
- Dyspnea on exertion
- Recurrent infections

**Management:**
- Smoking cessation (critical)
- Bronchodilators (LABA, LAMA)
- Inhaled corticosteroids if frequent exacerbations
- Vaccinations (influenza, pneumococcal)
- Pulmonary rehabilitation`,
      keyTerms: [
        { term: 'productive cough', definition: 'A cough that produces mucus or phlegm' },
        { term: 'goblet cell hyperplasia', definition: 'Increase in number of mucus-producing cells in the airways' },
        { term: 'mucociliary clearance', definition: 'The lung\'s cleaning system that uses tiny hairs (cilia) to move mucus and trapped particles out' },
        { term: 'cyanosis', definition: 'Bluish discoloration of the skin from low oxygen in the blood' },
        { term: 'pertussis', definition: 'Whooping cough; bacterial cause of prolonged coughing illness' },
      ],
      analogies: [
        'The cilia in your airways are like tiny brooms sweeping away dust and mucus. In chronic bronchitis, smoking damages these brooms so mucus builds up.',
        'Chronic bronchitis is like a constantly irritated throat that never fully heals because you keep damaging it with smoke.',
      ],
    },
    3: {
      level: 3,
      summary: 'Acute bronchitis is typically viral inflammation of the tracheobronchial tree differentiating from pneumonia by absence of infiltrate on CXR. Chronic bronchitis represents COPD phenotype "blue bloater" with chronic mucus hypersecretion, small airway obstruction, and hypoxemia.',
      explanation: `## Acute Bronchitis - Advanced

### Pathophysiology
- Epithelial injury from viral infection or irritants
- Inflammatory cascade: cytokines, chemokines, bradykinin release
- Stimulation of airway irritant receptors → cough
- Increased mucus production from goblet cells
- Transient bronchial hyperresponsiveness

### Differential Diagnosis
Consider when cough persists >3 weeks:
- Post-infectious cough (airway hyperresponsiveness)
- Post-nasal drip (upper airway cough syndrome)
- Cough variant asthma
- GERD
- Pertussis (whooping cough)
- TB (if risk factors)
- Heart failure (especially in elderly)

### When to Order CXR
- Fever >38°C (100.4°F)
- Heart rate >100 bpm
- Respiratory rate >24/min
- Abnormal lung exam (rales, decreased breath sounds)
- Duration >3 weeks without improvement

### Pertussis (Whooping Cough)
- Consider in any cough lasting >2 weeks
- "Whoop" inspiratory sound (less common in adults)
- Post-tussive emesis
- Lymphocytosis on CBC
- Treatment: Macrolide (azithromycin) within 3 weeks

## Chronic Bronchitis - Advanced

### Anatomic Pathology
**Airway Changes:**
- Reid index >0.4 (gland thickness/wall thickness)
- Goblet cell metaplasia in small airways
- Squamous metaplasia of epithelium
- Submucosal gland hypertrophy
- Smooth muscle hyperplasia

**Small Airway Disease:**
- Fibrosis and narrowing of bronchioles <2mm
- Loss of tethering attachments (alveolar destruction)
- Airway collapse during expiration (air trapping)

### Clinical Phenotype: "Blue Bloater"
- Chronic hypoxemia → polycythemia
- Cor pulmonale (right heart failure from lung disease)
- Peripheral edema
- Cyanosis
- Weight often normal or increased

### Diagnosis
**Clinical:**
- History: Smoking >20 pack-years, chronic productive cough
- Physical: Wheezing, rhonchi, prolonged expiratory phase

**Pulmonary Function Tests:**
- FEV1/FVC <0.70 (obstruction)
- Increased TLC (hyperinflation)
- Decreased DLCO (if emphysema also present)

### Exacerbations of Chronic Bronchitis (AECB)
**Anthonisen Criteria (3 of 3):**
1. Increased dyspnea
2. Increased sputum volume
3. Increased sputum purulence

**Severity Stratification:**
- **Type 1 (all 3)**: Severe, consider antibiotics
- **Type 2 (2 of 3)**: Moderate, consider antibiotics
- **Type 3 (1 of 3)**: Mild, usually no antibiotics

### Treatment
**Bronchodilators:**
- LABA (salmeterol, formoterol, vilanterol)
- LAMA (tiotropium, glycopyrrolate, umeclidinium)
- Combination LABA/LAMA preferred

**Anti-inflammatory:**
- ICS if frequent exacerbations OR elevated eosinophils
- ICS/LABA combination

**Other:**
- Roflumilast for chronic bronchitis with exacerbations
- Azithromycin for frequent exacerbators (if not smoking)
- N-acetylcysteine (limited evidence)`,
      keyTerms: [
        { term: 'Reid index', definition: 'Ratio of submucosal gland thickness to bronchial wall thickness; increased in chronic bronchitis' },
        { term: 'bronchial hyperresponsiveness', definition: 'Excessive bronchoconstriction response to stimuli after viral infection' },
        { term: 'cor pulmonale', definition: 'Right heart failure caused by pulmonary hypertension from lung disease' },
        { term: 'AECB', definition: 'Acute exacerbation of chronic bronchitis; sudden worsening of symptoms' },
        { term: 'Anthonisen criteria', definition: 'Three clinical findings used to determine severity and treatment need for chronic bronchitis exacerbations' },
      ],
      clinicalNotes: 'For acute bronchitis, avoid antibiotics routinely. Overprescribing contributes to antibiotic resistance. For pertussis, treat within 3 weeks of cough onset (or within 6 weeks for high-risk contacts). In chronic bronchitis, blood eosinophils ≥100 cells/μL may predict ICS benefit for exacerbation reduction.',
    },
    4: {
      level: 4,
      summary: 'Bronchitis management requires distinguishing viral acute bronchitis from bacterial pneumonia and other cough etiologies, while chronic bronchitis as a COPD phenotype requires stepwise pharmacotherapy, exacerbation prevention, and recognition of "overlap" syndromes.',
      explanation: `## Acute Cough Illness - Diagnostic Approach

### Clinical Decision Rules

**Bacterial Pneumonia Risk:**
- Fever, tachycardia, tachypnea, abnormal lung exam → CXR indicated
- Absence of these makes pneumonia unlikely

### Procalcitonin-Guided Therapy
- <0.1 μg/L: Antibiotics strongly discouraged
- 0.1-0.25 μg/L: Antibiotics discouraged
- 0.25-0.5 μg/L: Antibiotics possibly indicated
- >0.5 μg/L: Antibiotics strongly indicated

### Post-Infectious Cough
- Can persist 3-8 weeks after acute infection
- Due to persistent airway inflammation and hyperresponsiveness
- Consider inhaled corticosteroids if severe
- Usually self-limited

## Chronic Bronchitis and COPD Phenotypes

### Phenotypic Differences
| Feature | Chronic Bronchitis | Emphysema |
|---------|-------------------|-----------|
| Cough | Prominent, productive | Minimal or absent |
| Sputum | Copious | Scant |
| Body habitus | "Blue bloater" (often overweight) | "Pink puffer" (underweight) |
| Dyspnea | Later manifestation | Early, severe |
| TLC | Normal/mildly increased | Markedly increased |
| DLCO | Normal or mildly decreased | Severely decreased |
| Hematocrit | Polycythemia | Normal |

### Mucus Hypersecretion
- Independent risk factor for mortality and hospitalization
- Associated with accelerated FEV1 decline
- Pathogenesis:
  - EGFR pathway activation
  - Neutrophil elastase stimulation of mucus secretion
  - Impaired mucociliary clearance

### Mucolytic Therapy
**N-acetylcysteine (NAC):**
- Antioxidant and mucolytic properties
- Evidence for exacerbation reduction at high doses (600 mg BID)
- More benefit in patients not on ICS

**Erdosteine:**
- Similar benefits to NAC
- Not available in US

## Overlap Syndromes

### Asthma-COPD Overlap (ACO)
- Features of both asthma and COPD
- Higher eosinophils than typical COPD
- Better response to ICS than pure COPD
- More exacerbations than either condition alone

### Bronchiectasis-COPD Overlap
- Up to 30-50% of COPD patients
- Chronic infection and inflammation
- Frequent exacerbations
- Consider high-resolution CT for diagnosis
- Treatment: Airway clearance, targeted antibiotics

## Exacerbation Management

### Antibiotic Selection
**First-line:**
- Amoxicillin-clavulanate 500/125 mg TID
- Doxycycline 100 mg BID
- Cefuroxime 500 mg BID

**Alternatives:**
- Respiratory fluoroquinolone (levofloxacin 750 mg daily)
- Macrolide only if low pneumococcal resistance risk

### Duration
- 5 days for uncomplicated exacerbation
- Extend if slow response or complicated

### Corticosteroids
- Prednisone 40 mg daily × 5 days
- Improves recovery time and lung function
- Reduces treatment failure

### Novel Prevention Strategies
- Azithromycin 250 mg 3x/week (for frequent exacerbators)
- Roflumilast for chronic bronchitis phenotype
- PDE4 inhibition reduces mucosal inflammation`,
      keyTerms: [
        { term: 'pink puffer', definition: 'Emphysema phenotype characterized by dyspnea, weight loss, and minimal cough' },
        { term: 'bronchiectasis', definition: 'Permanent dilation of bronchi with chronic infection and mucus accumulation' },
        { term: 'EGFR pathway', definition: 'Epidermal growth factor receptor signaling pathway driving mucus production' },
        { term: 'DLCO', definition: 'Diffusing capacity for carbon monoxide; measures gas exchange and decreased in emphysema' },
      ],
      clinicalNotes: 'For COPD patients with frequent exacerbations (≥2/year), consider azithromycin prophylaxis 250 mg three times weekly. Check ECG for QT prolongation and assess hearing. Roflumilast may be considered for chronic bronchitis phenotype with FEV1 <50% and frequent exacerbations, but watch for psychiatric side effects.',
    },
    5: {
      level: 5,
      summary: 'Contemporary bronchitis care incorporates pathogen-specific diagnostics, host response biomarkers, phenotype-directed therapies, and emerging understanding of airway microbiome, chronic mucus hypersecretion mechanisms, and targeted anti-inflammatory strategies.',
      explanation: `## Acute Bronchitis: Precision Diagnostics

### Multiplex Respiratory Panels
- PCR-based detection of multiple pathogens
- Results in 1-2 hours
- May reduce unnecessary antibiotics
- Limitations: Cost, detection of colonizers

### Host Response Biomarkers
- Procalcitonin best validated for bacterial vs viral
- Gene expression signatures (commercially available)
- CRP limited discrimination power

### Viral-Specific Considerations
**Influenza:**
- Oseltamivir if within 48 hours of symptoms
- Baloxavir for influenza A (single dose)

**COVID-19:**
- Distinct from acute bronchitis but may present similarly
- Consider in differential with prolonged cough

## Chronic Mucus Hypersecretion: Pathobiology

### Mucin Production Pathways
**MUC5AC and MUC5B:**
- Primary airway mucins
- EGFR signaling upregulates MUC5AC
- IL-13 signaling contributes to mucus production
- IL-1β and TNF-α induce mucin genes

### Neutrophil Elastase
- Potent stimulator of mucus secretion
- Generates EGFR ligands
- Impairs mucociliary clearance
- Self-perpetuating cycle

### Potential Therapeutic Targets
- EGFR inhibitors (investigational)
- Neutrophil elastase inhibitors (alvelestat)
- MARCKS protein inhibitors (nebulized)

## Airway Microbiome in Chronic Bronchitis

### Dysbiosis
- Reduced diversity compared to healthy airways
- *Haemophilus*, *Moraxella*, *Streptococcus* dominance
- *Proteobacteria* enrichment associated with inflammation

### Clinical Implications
- Microbiome composition predicts exacerbations
- Persistent colonization with *Pseudomonas* indicates worse prognosis
- Antibiotics may shift but don't normalize microbiome
- Probiotic approaches under investigation

## Novel Therapeutic Approaches

### PDE4 Inhibition
**Roflumilast:**
- Reduces COPD exacerbations in chronic bronchitis phenotype
- Anti-inflammatory effects beyond mucus
- GI and psychiatric side effects limit use
- Benefits more pronounced in patients with hospitalizations

### PDE3/4 Inhibition
- Ensifentrine (nebulized)
- Dual bronchodilator and anti-inflammatory
- Phase 3 data positive for COPD
- May have role in chronic bronchitis

### Anti-inflammatory Approaches
- CXCR2 antagonists (reduce neutrophilic inflammation)
- Macrolides independent of antimicrobial effects
- Statins (mixed data for COPD benefit)

## Exacerbation Prevention Bundle

### Multimodal Strategy
1. Pharmacologic optimization
2. Vaccinations (influenza, pneumococcal, COVID-19, RSV)
3. Airway clearance techniques
4. Smoking cessation
5. Pulmonary rehabilitation
6. Self-management education
7. Early treatment of exacerbations

### Airway Clearance
**Techniques:**
- Active cycle of breathing technique (ACBT)
- Positive expiratory pressure (PEP) devices
- Oscillatory PEP (Flutter, Acapella)
- High-frequency chest wall oscillation

**Evidence:**
- Reduces exacerbations in bronchiectasis
- Limited data in pure chronic bronchitis
- May benefit patients with copious secretions

## Prognosis and Natural History

### Chronic Mucus Hypersecretion
- Independent risk factor for COPD hospitalization and death
- Accelerated FEV1 decline
- More common in men and smokers

### Acute to Chronic Transition
- Some acute bronchitis may lead to persistent airway inflammation
- Post-viral airway hyperresponsiveness can persist months
- Potential window for intervention to prevent chronicity`,
      keyTerms: [
        { term: 'MUC5AC', definition: 'Gel-forming mucin primarily produced in airway surface epithelium, upregulated in inflammation' },
        { term: 'airway dysbiosis', definition: 'Disruption of normal airway microbial community composition with loss of diversity' },
        { term: 'CXCR2 antagonists', definition: 'Agents blocking neutrophil chemotaxis to reduce neutrophilic airway inflammation' },
        { term: 'MARCKS', definition: 'Myristoylated alanine-rich C kinase substrate; protein involved in mucus secretion' },
      ],
      clinicalNotes: `Key clinical considerations:

1. **Acute bronchitis**: Antibiotics rarely indicated. Consider procalcitonin if uncertain. PIVC panels don't change management in most cases but may reassure patients.

2. **Chronic bronchitis exacerbations**: Use Anthonisen criteria. Two or three criteria merit antibiotics. Five-day duration sufficient for uncomplicated cases.

3. **Prevention**: Azithromycin 250 mg three times weekly reduces exacerbations in chronic bronchitis but monitor for QT prolongation, hearing loss, and macrolide resistance.

4. **Pseudomonas colonization**: Consider if frequent exacerbations with sputum purulence despite appropriate therapy. Requires targeted treatment approach.

5. **Overlap with bronchiectasis**: Consider high-resolution CT if patients have copious daily sputum (>30 mL), frequent infections, or history of childhood pneumonia.

6. **Future directions**: PDE3/4 inhibitors (ensifentrine) show promise. EGFR pathway inhibitors may reduce mucus production if safety established.`,
    },
  },

  media: [
    {
      id: 'bronchitis-airway',
      type: 'diagram',
      filename: 'bronchitis-airway-inflammation.svg',
      title: 'Bronchitis Airway Changes',
      description: 'Cross-section showing normal vs inflamed bronchial airway with goblet cell hyperplasia',
    },
    {
      id: 'acute-vs-chronic-bronchitis',
      type: 'diagram',
      filename: 'acute-chronic-bronchitis-comparison.svg',
      title: 'Acute vs Chronic Bronchitis Comparison',
      description: 'Comparison table and visual differences between acute and chronic bronchitis',
    },
  ],

  citations: [
    {
      id: 'ginasthma-2023',
      type: 'website',
      title: 'Global Initiative for Asthma (GINA)',
      source: 'Global Initiative for Asthma',
      url: 'https://ginasthma.org',
    },
    {
      id: 'gold-2024',
      type: 'website',
      title: 'Global Strategy for Diagnosis, Management, and Prevention of COPD',
      source: 'Global Initiative for Chronic Obstructive Lung Disease',
      url: 'https://goldcopd.org',
    },
    {
      id: 'whooping-cough-cdc',
      type: 'website',
      title: 'Clinical Practice Guidelines for Pertussis',
      source: 'Centers for Disease Control and Prevention',
      url: 'https://www.cdc.gov/pertussis/clinical/index.html',
    },
  ],

  crossReferences: [
    { targetId: 'condition-asthma', targetType: 'condition', relationship: 'related', label: 'Asthma' },
    { targetId: 'condition-copd', targetType: 'condition', relationship: 'parent', label: 'COPD' },
    { targetId: 'condition-pneumonia', targetType: 'condition', relationship: 'related', label: 'Pneumonia' },
    { targetId: 'condition-influenza', targetType: 'condition', relationship: 'related', label: 'Influenza' },
  ],

  tags: {
    systems: ['respiratory'],
    topics: ['pulmonology', 'primary care', 'infectious disease'],
    keywords: ['bronchitis', 'cough', 'COPD', 'mucus', 'acute', 'chronic', 'smoking'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'family medicine', 'pediatrics'],
    },
  },

  createdAt: '2025-01-26T00:00:00.000Z',
  updatedAt: '2025-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default bronchitis;
