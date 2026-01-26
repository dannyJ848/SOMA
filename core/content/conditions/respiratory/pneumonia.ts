/**
 * Pneumonia - Comprehensive Educational Content
 *
 * Covers pathophysiology, classification, diagnosis, and management of pneumonia.
 */

import { EducationalContent } from '../../types';

export const pneumonia: EducationalContent = {
  id: 'condition-pneumonia',
  type: 'condition',
  name: 'Pneumonia',
  alternateNames: ['Community-Acquired Pneumonia', 'CAP', 'Lung Infection'],
  hpoId: 'HP:0002090',

  levels: {
    1: {
      level: 1,
      summary: 'Pneumonia is an infection in your lungs that fills the air sacs with fluid or pus, making it hard to breathe.',
      explanation: `Pneumonia is when germs (usually bacteria or viruses) infect your lungs. The tiny air sacs in your lungs fill up with fluid, making it hard to get oxygen into your blood.

**Common symptoms:**
- Cough (often with mucus)
- Fever and chills
- Shortness of breath
- Chest pain when breathing or coughing
- Feeling very tired
- Confusion (especially in older adults)

**Who gets pneumonia?**
Anyone can get pneumonia, but it's more dangerous for:
- Babies and young children
- Adults over 65
- People with weak immune systems
- People with other lung diseases
- Smokers

**How is it treated?**
- Antibiotics if caused by bacteria
- Rest and fluids
- Fever reducers
- Sometimes hospitalization for severe cases

**Prevention:**
- Get vaccinated (flu shot, pneumonia vaccine)
- Wash hands frequently
- Don't smoke
- Stay healthy with good nutrition and exercise`,
      keyTerms: [
        { term: 'pneumonia', definition: 'An infection that inflames the air sacs in your lungs' },
        { term: 'antibiotics', definition: 'Medicines that kill bacteria' },
        { term: 'vaccine', definition: 'A shot that helps prevent certain diseases' },
      ],
      analogies: [
        'Pneumonia is like your lungs getting flooded - the air sacs fill with fluid so oxygen can\'t get through.',
        'The air sacs in your lungs are like tiny balloons; in pneumonia, they fill with water instead of air.',
      ],
      examples: [
        'An elderly person who develops a cough, fever, and confusion might have pneumonia and need hospitalization.',
        'A child with a bad cold that turns into a high fever and difficulty breathing may have developed pneumonia.',
      ],
    },
    2: {
      level: 2,
      summary: 'Pneumonia is an acute lower respiratory tract infection causing inflammation and consolidation of lung tissue, classified by setting of acquisition (community vs hospital) and causative pathogen, with severity guiding treatment setting.',
      explanation: `## Types of Pneumonia

**By Setting:**
- **Community-Acquired Pneumonia (CAP)** - Acquired outside healthcare settings
- **Hospital-Acquired Pneumonia (HAP)** - Develops ≥48 hours after hospital admission
- **Ventilator-Associated Pneumonia (VAP)** - Develops ≥48 hours after intubation
- **Aspiration Pneumonia** - From inhaling food, liquid, or vomit

**By Cause:**
- Bacterial (most common treatable cause)
- Viral (influenza, COVID-19, RSV)
- Fungal (in immunocompromised patients)
- Atypical bacteria (Mycoplasma, Legionella, Chlamydia)

## Common Pathogens (CAP)

| Pathogen | Characteristics |
|----------|----------------|
| Streptococcus pneumoniae | Most common bacterial cause; "typical" |
| Haemophilus influenzae | Common in COPD patients |
| Mycoplasma pneumoniae | "Walking pneumonia"; younger patients |
| Legionella | Water sources; can cause severe disease |
| Influenza | Seasonal; can lead to bacterial superinfection |

## Clinical Presentation

**Typical Pneumonia:**
- Sudden onset
- High fever with chills
- Productive cough (purulent sputum)
- Pleuritic chest pain
- Consolidation on exam (dullness, bronchial breath sounds)

**Atypical Pneumonia:**
- Gradual onset
- Lower fever
- Dry cough
- Extrapulmonary symptoms (headache, myalgia)
- Often younger patients

## Diagnosis

1. **Chest X-ray** - Shows infiltrates or consolidation
2. **Blood tests** - WBC count, inflammatory markers
3. **Oxygen saturation** - Assess severity
4. **Sputum culture** - If hospitalized
5. **Blood cultures** - If hospitalized
6. **Urinary antigens** - Legionella, pneumococcal

## Severity Assessment (CURB-65)

| Factor | Points |
|--------|--------|
| Confusion | 1 |
| Urea >7 mmol/L (BUN >19) | 1 |
| Respiratory rate ≥30 | 1 |
| Blood pressure (SBP <90 or DBP ≤60) | 1 |
| Age ≥65 | 1 |

- **Score 0-1**: Outpatient treatment
- **Score 2**: Consider hospitalization
- **Score ≥3**: Hospitalization (ICU if 4-5)

## Treatment

**Outpatient (healthy, no risk factors):**
- Amoxicillin OR doxycycline OR macrolide

**Outpatient (comorbidities or recent antibiotics):**
- Respiratory fluoroquinolone OR
- Beta-lactam + macrolide

**Inpatient (non-ICU):**
- Beta-lactam + macrolide OR
- Respiratory fluoroquinolone alone

**Inpatient (ICU):**
- Beta-lactam + macrolide OR
- Beta-lactam + fluoroquinolone

## Prevention
- Pneumococcal vaccines (PCV20 or PCV15 + PPSV23)
- Influenza vaccine annually
- COVID-19 vaccination
- Smoking cessation`,
      keyTerms: [
        { term: 'consolidation', definition: 'Lung tissue filled with fluid or inflammatory material instead of air' },
        { term: 'CAP', definition: 'Community-acquired pneumonia; infection acquired outside healthcare settings' },
        { term: 'atypical pneumonia', definition: 'Pneumonia caused by organisms like Mycoplasma with different presentation than typical bacterial pneumonia' },
        { term: 'CURB-65', definition: 'Severity scoring system to help decide if hospitalization is needed' },
      ],
      analogies: [
        'Consolidation is like a sponge soaked with water instead of air - it becomes heavy and dense.',
        'CURB-65 is like a checklist to see how sick someone is with pneumonia.',
      ],
    },
    3: {
      level: 3,
      summary: 'Pneumonia pathophysiology involves alveolar inflammatory exudate from microbial invasion, with severity assessment (PSI/CURB-65), empiric antibiotic selection based on resistance patterns and patient factors, and attention to complications including empyema and sepsis.',
      explanation: `## Pathophysiology

### Infection Route
1. **Microaspiration** - Most common; oropharyngeal flora reaches lower airways
2. **Inhalation** - Aerosolized pathogens (Legionella, TB, fungi)
3. **Hematogenous spread** - Rare; from distant infection

### Host Defense Failure
- Impaired mucociliary clearance
- Defective alveolar macrophage function
- Reduced immunoglobulin levels
- Viral infection predisposing to bacterial superinfection

### Pathological Stages (Lobar Pneumonia)
1. **Congestion** (Day 1-2): Vascular engorgement, serous exudate
2. **Red hepatization** (Day 2-3): RBCs, fibrin, neutrophils fill alveoli
3. **Gray hepatization** (Day 4-6): RBC degradation, persistent fibrinopurulent exudate
4. **Resolution** (Day 7+): Macrophage clearance, restoration of architecture

## Microbiology

### Community-Acquired Pneumonia

**Most Common:**
- *Streptococcus pneumoniae* (declining due to vaccination)
- *Respiratory viruses* (influenza, SARS-CoV-2, RSV)
- *Haemophilus influenzae*
- *Mycoplasma pneumoniae*

**Atypical Pathogens:**
- *Legionella pneumophila*: Water sources, hyponatremia, GI symptoms
- *Chlamydia pneumoniae*: Sore throat, hoarseness
- *Mycoplasma*: Young adults, bullous myringitis (rare)

**Risk-Specific Pathogens:**
| Risk Factor | Pathogens to Consider |
|-------------|----------------------|
| COPD/smoking | H. influenzae, Moraxella, Pseudomonas |
| Alcoholism | Klebsiella, aspiration flora, TB |
| IV drug use | S. aureus, anaerobes |
| Post-influenza | S. aureus, S. pneumoniae |
| Structural lung disease | Pseudomonas |

### Hospital-Acquired Pneumonia
- MRSA
- *Pseudomonas aeruginosa*
- Gram-negative bacilli (Klebsiella, E. coli, Acinetobacter)
- Considerations for local resistance patterns (antibiogram)

## Severity Assessment

### Pneumonia Severity Index (PSI/PORT)

**Class I**: Age <50, no comorbidities, normal vitals → Outpatient
**Class II-III**: Low mortality risk → Consider outpatient
**Class IV-V**: Higher mortality risk → Hospitalization

### CURB-65 vs PSI
- CURB-65: Simpler, bedside, may underestimate risk in young
- PSI: More comprehensive, better validated, may overtriage elderly

### ICU Admission Criteria (ATS/IDSA)
**Major criteria (any one):**
- Septic shock requiring vasopressors
- Respiratory failure requiring mechanical ventilation

**Minor criteria (≥3):**
- RR ≥30, PaO2/FiO2 ≤250, multilobar infiltrates, confusion
- BUN ≥20, WBC <4000, platelets <100,000, temperature <36°C
- Hypotension requiring aggressive fluid resuscitation

## Empiric Antibiotic Therapy

### Outpatient CAP

**No comorbidities:**
- Amoxicillin 1g TID × 5 days, OR
- Doxycycline 100mg BID × 5 days, OR
- Azithromycin 500mg day 1, 250mg days 2-5

**With comorbidities (chronic disease, recent antibiotics):**
- Amoxicillin-clavulanate + macrolide, OR
- Respiratory fluoroquinolone (levofloxacin 750mg, moxifloxacin 400mg)

### Inpatient (Non-ICU)
- Ceftriaxone 1-2g IV + azithromycin 500mg IV, OR
- Respiratory fluoroquinolone IV

### Inpatient (ICU)
- Ceftriaxone + azithromycin, OR
- Ceftriaxone + fluoroquinolone
- Add vancomycin or linezolid if MRSA risk
- Add antipseudomonal coverage if risk factors

## Complications

- **Parapneumonic effusion**: Fluid in pleural space; may need drainage
- **Empyema**: Pus in pleural space; requires chest tube
- **Lung abscess**: Necrotic cavity; prolonged antibiotics
- **Sepsis/septic shock**: ICU care, vasopressors
- **ARDS**: Severe inflammation; lung-protective ventilation

## Duration of Therapy
- Uncomplicated CAP: 5 days (if afebrile 48-72h, clinically stable)
- Severe/complicated: 7-14 days depending on pathogen and response`,
      keyTerms: [
        { term: 'hepatization', definition: 'Pathological stage where lung tissue becomes liver-like in consistency due to inflammatory exudate' },
        { term: 'PSI', definition: 'Pneumonia Severity Index; validated scoring system for CAP mortality risk and disposition' },
        { term: 'empyema', definition: 'Pus in pleural space; complication of pneumonia requiring drainage' },
        { term: 'respiratory fluoroquinolone', definition: 'Fluoroquinolones with enhanced gram-positive and atypical coverage (levofloxacin, moxifloxacin)' },
        { term: 'parapneumonic effusion', definition: 'Pleural fluid associated with pneumonia; may be simple (resolves with antibiotics) or complicated (requires drainage)' },
      ],
      clinicalNotes: 'Duration of therapy for uncomplicated CAP can be as short as 5 days if patient is afebrile for 48-72 hours and clinically stable (ATS/IDSA 2019). Procalcitonin can guide antibiotic discontinuation but is not required. Always obtain blood cultures before antibiotics in hospitalized patients.',
    },
    4: {
      level: 4,
      summary: 'Pneumonia management requires understanding of evolving resistance patterns, biomarker-guided therapy, severe pneumonia phenotypes, immunomodulation approaches, and recognition of treatment failure and non-resolving pneumonia causes.',
      explanation: `## Advanced Microbiology

### Antimicrobial Resistance

**Streptococcus pneumoniae:**
- Penicillin resistance: MIC-based (high-dose amoxicillin overcomes intermediate resistance)
- Macrolide resistance: 30%+ in many regions; empiric monotherapy controversial
- Fluoroquinolone resistance: Still low but increasing

**MRSA CAP:**
- Risk factors: Recent influenza, injection drug use, prior MRSA, severe necrotizing pneumonia
- Panton-Valentine leukocidin (PVL): Associated with necrotizing pneumonia
- Treatment: Vancomycin or linezolid (linezolid may have better lung penetration)

**Pseudomonas CAP:**
- Risk factors: Structural lung disease, bronchiectasis, severe COPD, recent broad-spectrum antibiotics
- Requires antipseudomonal beta-lactam (piperacillin-tazobactam, cefepime, meropenem)

### Diagnostic Advances

**Molecular Diagnostics:**
- PCR panels for respiratory pathogens
- Rapid results (hours vs days)
- May detect co-infections
- Limitations: Cannot distinguish colonization from infection, no susceptibility data

**Procalcitonin (PCT):**
- Elevated in bacterial infection
- Can guide antibiotic initiation and duration
- <0.25 μg/L: Bacterial infection unlikely
- Serial measurements for de-escalation

**Urinary Antigens:**
- Pneumococcal antigen: Sensitivity ~70-80%
- Legionella antigen: Only detects serogroup 1 (~80% of Legionella cases)

## Severe CAP Phenotypes

### Hyperinflammatory Phenotype
- Elevated cytokines (IL-6, IL-8, TNF-α)
- Higher mortality
- May benefit from immunomodulation (corticosteroids)

### Hypoinflammatory Phenotype
- Lower cytokine levels
- May not benefit from adjunctive steroids

### Biomarker Stratification
| Marker | High Risk Features |
|--------|-------------------|
| CRP | >150 mg/L at 72h predicts treatment failure |
| Procalcitonin | Failure to decline suggests complications |
| Lactate | >4 mmol/L indicates septic shock |
| Pro-adrenomedullin | Emerging prognostic marker |

## Adjunctive Therapies

### Corticosteroids in CAP
**Evidence:**
- Multiple RCTs with mixed results
- Meta-analyses suggest mortality benefit in severe CAP
- Most consistent benefit with CRP >150 mg/L

**Current Recommendations:**
- ATS/IDSA 2019: No routine use, consider in refractory septic shock
- IDSA/ATS severe CAP: Dexamethasone 6mg daily × 4 days may be considered
- COVID-19: Dexamethasone 6mg × 10 days for hypoxic patients

### Macrolides Beyond Antibiotics
- Immunomodulatory effects independent of antimicrobial activity
- May reduce inflammation, improve outcomes even in macrolide-resistant infections
- Explains continued use in combination therapy

## Treatment Failure and Non-Resolving Pneumonia

### Definitions
- **Treatment failure**: Clinical deterioration or failure to improve at 72 hours
- **Non-resolving pneumonia**: Failure of radiographic resolution by expected timeframe (6-8 weeks)

### Causes of Treatment Failure
1. **Pathogen-related**:
   - Resistant organism
   - Wrong empiric spectrum (MRSA, Pseudomonas)
   - Unusual pathogen (fungal, TB, Nocardia)

2. **Host-related**:
   - Immunocompromise
   - Structural abnormality
   - Poor drug penetration (empyema, abscess)

3. **Complication-related**:
   - Empyema
   - Lung abscess
   - Metastatic infection (endocarditis, meningitis)

4. **Wrong diagnosis**:
   - Pulmonary embolism
   - Lung cancer
   - Organizing pneumonia
   - Vasculitis

### Workup for Treatment Failure
- Repeat imaging (CT chest preferred)
- Bronchoscopy with BAL if able
- Thoracentesis if effusion present
- Blood cultures, fungal markers, consider TB testing
- Echocardiogram if endocarditis suspected

## Special Populations

### Immunocompromised Host
- Broad differential: PJP, CMV, Aspergillus, Nocardia, endemic fungi
- Lower threshold for CT and bronchoscopy
- Empiric coverage may need to be broader
- PJP prophylaxis history important

### Aspiration Pneumonia
- Not all aspiration leads to infection
- Chemical pneumonitis vs bacterial infection
- Antibiotics if: severe, not improving at 48h, signs of infection
- Coverage: anaerobic coverage traditionally added (ampicillin-sulbactam, clindamycin), though recent data questions necessity

### Post-Viral Bacterial Pneumonia
- Secondary bacterial infection after influenza, COVID-19
- S. aureus (including MRSA), S. pneumoniae common
- Consider broader empiric coverage in severe cases`,
      keyTerms: [
        { term: 'PVL', definition: 'Panton-Valentine leukocidin; toxin produced by some S. aureus strains causing severe necrotizing pneumonia' },
        { term: 'non-resolving pneumonia', definition: 'Failure of radiographic improvement despite appropriate therapy; requires expanded differential' },
        { term: 'BAL', definition: 'Bronchoalveolar lavage; bronchoscopic sampling for microbiologic diagnosis in pneumonia' },
        { term: 'hyperinflammatory phenotype', definition: 'Severe CAP subtype with elevated cytokines that may benefit from immunomodulation' },
        { term: 'aspiration pneumonitis', definition: 'Chemical inflammation from aspirated gastric contents; not always requiring antibiotics' },
      ],
      clinicalNotes: 'For severe CAP with CRP >150 mg/L, consider dexamethasone 6mg daily for 4 days (recent trial evidence). Macrolides should be included in combination therapy for severe CAP even if pathogen is macrolide-resistant due to immunomodulatory benefits. For non-resolving pneumonia, early CT and bronchoscopy are key to identifying complications or alternative diagnoses.',
    },
    5: {
      level: 5,
      summary: 'Contemporary pneumonia care incorporates precision diagnostics with metagenomic sequencing, host-directed therapies targeting immunopathology, phenotype-guided corticosteroid use, novel antimicrobials for resistant pathogens, and post-pneumonia care addressing long-term sequelae.',
      explanation: `## Precision Diagnostics

### Metagenomic Next-Generation Sequencing (mNGS)
- Unbiased detection of all pathogens (bacteria, viruses, fungi, parasites)
- Particularly valuable in immunocompromised or treatment-refractory cases
- Turnaround time: 24-72 hours
- Limitations: Cost, interpretation complexity, distinguishing pathogen from colonizer

### Host Response Profiling
- Gene expression signatures differentiating bacterial vs viral infection
- Transcriptomic "signatures" may predict severity and outcome
- SeptiCyte: FDA-approved gene expression test for sepsis likelihood
- Emerging application in pneumonia phenotyping

### Multiplex PCR Panels
**BioFire FilmArray Pneumonia Panel:**
- 33 targets including resistance genes
- 1-hour turnaround
- Semi-quantitative results
- mecA/C, KPC, NDM detection
- May improve antibiotic stewardship

## Immunopathology and Host-Directed Therapy

### Immunoparalysis
- Post-sepsis immune suppression
- HLA-DR expression on monocytes as biomarker
- Potential for GM-CSF or IFN-γ as immunostimulants

### Cytokine Storm
- Excessive inflammation causing organ damage
- Therapeutic targets:
  - IL-6 (tocilizumab): Benefit in COVID-19 pneumonia
  - JAK inhibitors (baricitinib): Approved for COVID-19
  - IL-1 (anakinra): Under investigation

### Macrophage-Targeted Therapy
- Macrophage phenotype (M1/M2) influences outcome
- Statins may modulate macrophage response
- Emerging interest in macrophage reprogramming

## Phenotype-Guided Corticosteroid Therapy

### Current Evidence
| Trial | Population | Intervention | Key Finding |
|-------|------------|--------------|-------------|
| CAPE COD | Severe CAP, CRP >150 | Hydrocortisone 200mg/d × 4-8d | Reduced mortality |
| Meduri et al. | Severe CAP | Methylprednisolone | Faster resolution, reduced LOS |
| Stern et al. (meta-analysis) | CAP requiring ICU | Various steroids | Reduced mortality, no increased infection |

### Biomarker Selection
- CRP >150 mg/L: Strongest predictor of steroid benefit
- Procalcitonin >0.5 μg/L: May identify inflammatory phenotype
- Lactate: Combined with CRP for risk stratification

### Practical Application
- Consider dexamethasone 6mg × 4 days in severe CAP with elevated CRP
- Start within 24 hours of admission
- Avoid in influenza (may increase mortality), consider in COVID-19

## Novel Antimicrobials

### For Resistant Gram-Negatives

**Cefiderocol:**
- Siderophore cephalosporin
- Active against carbapenem-resistant organisms
- Penetrates biofilms
- Role in resistant Pseudomonas, Acinetobacter

**Ceftazidime-avibactam:**
- Covers KPC-producing organisms
- Not active against metallo-beta-lactamases

**Meropenem-vaborbactam:**
- KPC coverage
- Preserved carbapenem activity

### For Resistant Gram-Positives

**Lefamulin:**
- First systemic pleuromutilin
- Oral and IV formulations
- FDA approved for CAP
- Alternative for macrolide-resistant or beta-lactam allergic patients

**Delafloxacin:**
- Fluoroquinolone with enhanced MRSA activity
- Approved for CAP
- Consider when MRSA coverage needed

**Omadacycline:**
- Tetracycline derivative
- Oral and IV formulations
- CAP approval
- Alternative for atypical coverage

## Post-Pneumonia Syndrome

### Long-Term Sequelae
- Increased cardiovascular events (30-day to 1-year post-CAP)
- Cognitive decline in elderly
- Functional decline
- Increased all-cause mortality for years

### Mechanisms
- Persistent inflammation
- Endothelial dysfunction
- Accelerated atherosclerosis
- Immune dysregulation

### Management Strategies
- Cardiovascular risk optimization
- Early rehabilitation
- Cognitive assessment
- Follow-up chest imaging (6-8 weeks)
- Smoking cessation

## Emerging Prevention Strategies

### Vaccine Development
**Protein-based pneumococcal vaccines:**
- Antigen-independent of serotype
- Broader coverage potential
- Multiple candidates in development

**RSV Vaccines:**
- Arexvy (GSK), Abrysvo (Pfizer) approved for adults ≥60
- Reduce RSV-associated LRTI

**Universal Influenza Vaccines:**
- Target conserved epitopes
- Eliminate need for annual reformulation
- Stalk-based and neuraminidase-based approaches

### Microbiome Modulation
- Probiotics for CAP prevention (modest evidence)
- Oral microbiome as reservoir for pathogens
- Selective decontamination strategies in ICU

## Hospital-Acquired Pneumonia Innovations

### Inhaled Antibiotics
- Amikacin, colistin for VAP
- Higher lung concentrations
- Adjunct to systemic therapy

### Rapid Diagnostics
- PCR on endotracheal aspirates
- Resistance gene detection within hours
- May enable earlier de-escalation

### Prevention Bundles
- Head-of-bed elevation
- Daily sedation vacation and SBT
- Oral care with chlorhexidine (debated)
- Subglottic secretion drainage ETTs`,
      keyTerms: [
        { term: 'mNGS', definition: 'Metagenomic next-generation sequencing; unbiased detection of all genetic material to identify pathogens' },
        { term: 'immunoparalysis', definition: 'Post-sepsis state of immune suppression increasing susceptibility to secondary infections' },
        { term: 'siderophore cephalosporin', definition: 'Antibiotic (cefiderocol) using bacterial iron uptake system to penetrate resistant organisms' },
        { term: 'post-pneumonia syndrome', definition: 'Long-term cardiovascular, cognitive, and functional sequelae following pneumonia episode' },
        { term: 'lefamulin', definition: 'First systemic pleuromutilin antibiotic; novel mechanism for CAP treatment' },
      ],
      clinicalNotes: `Key clinical pearls for advanced pneumonia management:

1. **Corticosteroids**: For severe CAP with CRP >150 mg/L, consider dexamethasone 6mg × 4 days. Avoid in active influenza. Start within 24h of admission.

2. **Duration**: 5 days sufficient for uncomplicated CAP with clinical stability (afebrile 48h, off vasopressors, able to eat). Longer durations for complications.

3. **Rapid diagnostics**: Multiplex PCR panels can guide de-escalation but may detect colonization. Integrate with clinical picture.

4. **mNGS**: Reserve for immunocompromised, treatment-refractory, or suspected unusual pathogen. Interpretation requires expertise.

5. **Post-pneumonia care**: All CAP patients have elevated CV risk; optimize preventive care. Follow-up CXR at 6-8 weeks to exclude malignancy.

6. **Novel antibiotics**: Lefamulin and omadacycline provide alternatives for CAP when first-line agents contraindicated. Cefiderocol for resistant gram-negative nosocomial infections.

7. **HAP/VAP**: Early empiric therapy based on local antibiogram; rapid diagnostics may enable faster de-escalation.`,
    },
  },

  media: [
    {
      id: 'pneumonia-pathology',
      type: 'diagram',
      filename: 'pneumonia-alveolar-exudate.svg',
      title: 'Alveolar Consolidation in Pneumonia',
      description: 'Cross-section showing normal alveoli vs pneumonia with inflammatory exudate',
    },
    {
      id: 'curb65-chart',
      type: 'diagram',
      filename: 'curb65-algorithm.svg',
      title: 'CURB-65 Severity Assessment',
      description: 'Decision algorithm for pneumonia disposition',
    },
  ],

  citations: [
    {
      id: 'ats-idsa-cap-2019',
      type: 'article',
      title: 'Diagnosis and Treatment of Adults with Community-acquired Pneumonia',
      authors: ['Metlay JP', 'Waterer GW', 'Long AC', 'et al.'],
      source: 'American Journal of Respiratory and Critical Care Medicine',
      url: 'https://doi.org/10.1164/rccm.201908-1581ST',
    },
    {
      id: 'cape-cod-trial',
      type: 'article',
      title: 'Hydrocortisone in Severe Community-Acquired Pneumonia',
      source: 'New England Journal of Medicine',
      url: 'https://doi.org/10.1056/NEJMoa2215145',
    },
  ],

  crossReferences: [
    { targetId: 'condition-sepsis', targetType: 'condition', relationship: 'related', label: 'Sepsis' },
    { targetId: 'condition-copd', targetType: 'condition', relationship: 'related', label: 'COPD' },
    { targetId: 'condition-influenza', targetType: 'condition', relationship: 'related', label: 'Influenza' },
  ],

  tags: {
    systems: ['respiratory'],
    topics: ['infectious disease', 'pulmonology', 'critical care'],
    keywords: ['pneumonia', 'CAP', 'antibiotics', 'respiratory infection', 'consolidation'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'family medicine', 'surgery'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default pneumonia;
