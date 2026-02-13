/**
 * Pneumonia - Comprehensive Educational Content
 *
 * Covers community-acquired, hospital-acquired, ventilator-associated,
 * and atypical pneumonias with pathophysiology, diagnosis, and management.
 */

import { EducationalContent } from '../../types';

export const pneumonia: EducationalContent = {
  id: 'condition-pneumonia',
  type: 'condition',
  name: 'Pneumonia',
  alternateNames: ['Lung Infection', 'CAP', 'HAP', 'VAP', 'Pneumonitis'],

  levels: {
    1: {
      level: 1,
      summary: 'Pneumonia is an infection in your lungs that fills the tiny air sacs with fluid or pus, making it hard to breathe.',
      explanation: `Imagine your lungs are like a sponge made of millions of tiny balloons (air sacs). When you breathe in, these balloons fill with air and oxygen gets into your blood.

**What happens in pneumonia?**
Germs (bacteria, viruses, or fungi) get into your lungs and cause an infection. Your body sends white blood cells to fight the germs, and this battle creates fluid and pus that fills up the air sacs. When these balloons fill with fluid instead of air, it's hard to get enough oxygen.

**Common symptoms:**
- Cough (often with colored mucus - yellow, green, or rusty)
- Fever and chills
- Shortness of breath
- Chest pain when breathing or coughing
- Feeling very tired
- Confusion (especially in older people)

**What causes pneumonia?**
- **Bacteria:** The most common cause in adults (like Streptococcus pneumoniae)
- **Viruses:** Including flu and COVID-19
- **Fungi:** Usually in people with weak immune systems

**Where can you catch pneumonia?**
- **Community-acquired:** Caught in everyday life - school, work, stores
- **Hospital-acquired:** Caught while in the hospital for something else

**How is pneumonia treated?**
- Antibiotics (for bacterial pneumonia)
- Rest and fluids
- Fever medicine
- Some people need to stay in the hospital for oxygen and IV antibiotics

**How to prevent pneumonia:**
- Get vaccinated (pneumonia vaccine, flu shot)
- Wash your hands often
- Don't smoke
- Stay healthy and keep your immune system strong`,
      keyTerms: [
        { term: 'air sacs', definition: 'Tiny balloon-like structures in your lungs where oxygen enters your blood (also called alveoli)' },
        { term: 'bacteria', definition: 'Tiny single-celled germs that can cause infections' },
        { term: 'virus', definition: 'Even tinier germs that need to invade your cells to multiply' },
        { term: 'antibiotics', definition: 'Medicines that kill bacteria but don\'t work against viruses' },
      ],
      analogies: [
        'Pneumonia is like a sponge filling with dirty water - the sponge (lung) can\'t work properly when it\'s clogged.',
        'Air sacs with fluid are like water balloons instead of air balloons - they can\'t do their job of exchanging oxygen.',
      ],
      examples: [
        'An elderly person who develops a fever, cough with green mucus, and confusion after having the flu.',
        'A college student living in a dormitory who gets a sudden high fever and rust-colored sputum.',
      ],
    },
    2: {
      level: 2,
      summary: 'Pneumonia is an infection of the lung parenchyma causing inflammation and consolidation of alveoli, classified by setting (community vs healthcare-associated) and causative pathogen.',
      explanation: `## What is Pneumonia?

Pneumonia is an infection that inflames the air sacs (alveoli) in one or both lungs. The alveoli fill with fluid or pus (purulent material), causing cough with phlegm, fever, chills, and difficulty breathing.

### Types by Setting

**Community-Acquired Pneumonia (CAP):**
- Acquired outside of healthcare settings
- Most common type
- Leading causes: Streptococcus pneumoniae, respiratory viruses

**Hospital-Acquired Pneumonia (HAP):**
- Develops ≥48 hours after hospital admission
- Often caused by drug-resistant bacteria
- More serious, higher mortality

**Ventilator-Associated Pneumonia (VAP):**
- Develops ≥48 hours after intubation
- Related to bacteria from mouth entering airways
- Significant ICU complication

**Aspiration Pneumonia:**
- Caused by inhaling food, liquid, or vomit into lungs
- Common in people with swallowing problems, altered consciousness
- Often involves mouth bacteria (anaerobes)

### Types by Pathogen

**Typical Bacterial Pneumonia:**
- Streptococcus pneumoniae (pneumococcus) - #1 cause
- Haemophilus influenzae
- Staphylococcus aureus
- Klebsiella pneumoniae (alcoholics, diabetics)

**Atypical Pneumonia:**
- Mycoplasma pneumoniae ("walking pneumonia")
- Chlamydophila pneumoniae
- Legionella pneumophila
- Often milder, different presentation

**Viral Pneumonia:**
- Influenza A and B
- COVID-19 (SARS-CoV-2)
- RSV (Respiratory Syncytial Virus)
- Adenovirus

**Fungal Pneumonia:**
- Pneumocystis jirovecii (in HIV/AIDS)
- Histoplasma, Coccidioides, Blastomyces (geographic)
- Aspergillus (immunocompromised)

### Symptoms

**Typical pneumonia:**
- Sudden onset high fever with chills
- Productive cough with purulent sputum
- Pleuritic chest pain (sharp, worse with breathing)
- Shortness of breath
- Signs: Crackles (rales), bronchial breath sounds, dullness to percussion

**Atypical pneumonia:**
- Gradual onset
- Low-grade fever
- Dry cough
- Headache, malaise, muscle aches
- May have extrapulmonary symptoms

### Diagnosis

**Physical exam findings:**
- Fever, tachycardia, tachypnea
- Decreased breath sounds
- Crackles (rales)
- Bronchial breath sounds over consolidation
- Egophony ("E to A" changes)
- Dullness to percussion

**Tests:**
- Chest X-ray: Shows infiltrate or consolidation
- CBC: Elevated white blood cells
- Basic metabolic panel
- Blood cultures (for hospitalized patients)
- Sputum culture and gram stain
- Procalcitonin (helps distinguish bacterial from viral)

### Severity Assessment - CURB-65

Score 1 point for each:
- **C**onfusion
- **U**rea >7 mmol/L (BUN >20)
- **R**espiratory rate ≥30
- **B**lood pressure: Systolic <90 or Diastolic ≤60
- Age **65** or older

| Score | Risk | Management |
|-------|------|------------|
| 0-1 | Low | Outpatient treatment |
| 2 | Moderate | Consider hospitalization |
| 3-5 | High | Hospital, consider ICU |

### Treatment

**Outpatient CAP:**
- Previously healthy: Amoxicillin OR doxycycline OR azithromycin
- Comorbidities: Amoxicillin-clavulanate + azithromycin OR respiratory fluoroquinolone

**Inpatient (non-ICU):**
- β-lactam (ceftriaxone, ampicillin-sulbactam) + macrolide
- OR respiratory fluoroquinolone alone

**ICU CAP:**
- β-lactam + macrolide
- OR β-lactam + respiratory fluoroquinolone
- Add vancomycin/linezolid if MRSA suspected

### Prevention

- **Pneumococcal vaccines:** PCV15, PCV20, or PPSV23
- **Influenza vaccine:** Annual
- **COVID-19 vaccine:** Per current guidelines
- Smoking cessation
- Hand hygiene`,
      keyTerms: [
        { term: 'consolidation', definition: 'When lung tissue becomes solid (filled with fluid/pus) instead of filled with air', pronunciation: 'con-sol-ih-DAY-shun' },
        { term: 'atypical pneumonia', definition: 'Pneumonia caused by organisms like Mycoplasma that have a different, often milder presentation' },
        { term: 'CURB-65', definition: 'A scoring system to assess pneumonia severity using Confusion, Urea, Respiratory rate, Blood pressure, and age 65+' },
        { term: 'crackles', definition: 'Abnormal lung sounds heard with a stethoscope, like crackling or bubbling (also called rales)', pronunciation: 'KRAK-ulz' },
        { term: 'pleuritic', definition: 'Sharp chest pain that worsens with breathing, caused by inflammation of the lung lining', pronunciation: 'plu-RIT-ik' },
      ],
      analogies: [
        'Lobar pneumonia is like one section of a sponge being completely waterlogged while the rest stays dry.',
        'Bronchopneumonia is like having scattered wet spots throughout the sponge rather than one big wet area.',
      ],
    },
    3: {
      level: 3,
      summary: 'Pneumonia encompasses a spectrum of lower respiratory tract infections characterized by alveolar inflammation and consolidation, with pathogen epidemiology, host factors, and clinical syndrome guiding empirical therapy pending microbiological confirmation.',
      explanation: `## Pathophysiology

### Normal Host Defenses
The respiratory tract has multiple defense mechanisms:
1. **Upper airway:** Nasal filtration, mucociliary escalator, cough reflex
2. **Lower airway:** Alveolar macrophages, surfactant proteins (SP-A, SP-D)
3. **Immune response:** IgA secretion, complement activation, cytokine signaling

### Pneumonia Development
Infection occurs when:
- Defenses are overwhelmed by inoculum size or virulence
- Defenses are impaired (smoking, alcohol, immunosuppression)
- Pathogens evade defenses (capsule, intracellular survival)

**Pathogenic mechanisms:**
1. Microaspiration of oropharyngeal contents (most common)
2. Inhalation of aerosolized organisms
3. Hematogenous spread (rare)
4. Direct extension from contiguous infection

### Inflammatory Response
1. Pathogen recognition by alveolar macrophages
2. Cytokine release (IL-1, IL-6, TNF-α, IL-8)
3. Neutrophil recruitment
4. Increased capillary permeability → alveolar fluid
5. Consolidation: Alveoli fill with inflammatory exudate

### Histologic Stages (Lobar Pneumonia)
1. **Congestion (Day 1-2):** Vascular engorgement, serous exudate
2. **Red hepatization (Days 2-4):** RBCs, neutrophils, fibrin fill alveoli
3. **Gray hepatization (Days 4-8):** RBC degradation, persistent neutrophils
4. **Resolution (Day 8+):** Macrophage cleanup, resorption

## Etiology by Setting and Host

### Community-Acquired Pneumonia (CAP)

| Pathogen | Frequency | Clinical Clues |
|----------|-----------|----------------|
| S. pneumoniae | 30-40% | Rust-colored sputum, lobar pattern |
| H. influenzae | 5-15% | COPD, smokers |
| M. pneumoniae | 10-20% | Young adults, gradual onset, extrapulmonary |
| C. pneumoniae | 5-15% | Hoarseness, prolonged cough |
| Respiratory viruses | 10-30% | Seasonal, myalgias |
| Legionella | 2-6% | GI symptoms, hyponatremia, travel/water exposure |
| S. aureus | 2-5% | Post-influenza, cavitation |

### Healthcare-Associated Pneumonia (HAP/VAP)

| Pathogen | Characteristics |
|----------|-----------------|
| P. aeruginosa | MDR risk, biofilm former |
| MRSA | Necrotizing, cavitation |
| Klebsiella | Aspiration, alcoholics |
| Acinetobacter | ICU-acquired, highly resistant |
| Enterobacteriaceae | ESBL-producers increasingly common |

### Atypical Pathogens

**Mycoplasma pneumoniae:**
- "Walking pneumonia"
- Peak age 5-20 years
- Gradual onset, dry cough, headache
- Cold agglutinins, bullous myringitis
- CXR may be worse than clinical appearance

**Legionella pneumophila:**
- Contaminated water sources (cooling towers, hot tubs)
- GI symptoms (diarrhea), hyponatremia, CNS symptoms
- Lobar consolidation
- Urinary antigen test available (serogroup 1)

**Chlamydophila pneumoniae:**
- Hoarseness, pharyngitis
- Often biphasic illness

## Diagnostic Approach

### Risk Stratification

**CURB-65 Score:**
- Mortality correlation: 0-1 (1.5%), 2 (9%), 3 (22%), 4-5 (>30%)
- Outpatient if 0-1, hospitalize if ≥2

**PSI (Pneumonia Severity Index):**
- More complex (20 variables)
- Better validated for identifying low-risk patients
- Class I-III: Outpatient consideration
- Class IV-V: Hospitalization

**IDSA/ATS Criteria for Severe CAP (ICU):**
Major criteria (1 = ICU):
- Septic shock requiring vasopressors
- Respiratory failure requiring mechanical ventilation

Minor criteria (≥3 = ICU):
- RR ≥30, PaO2/FiO2 ≤250, multilobar infiltrates
- Confusion, BUN ≥20, WBC <4000, platelets <100,000
- Temperature <36°C, hypotension requiring fluids

### Microbiologic Testing

**All hospitalized patients:**
- Blood cultures (before antibiotics if possible)
- Sputum gram stain and culture
- Consider urinary antigens (Legionella, pneumococcus)

**Severe CAP or epidemiologic risk:**
- Respiratory viral panel (PCR)
- Legionella urinary antigen
- Procalcitonin (bacterial vs viral)
- Consider bronchoscopy with BAL

**HAP/VAP:**
- Non-invasive sampling (sputum, tracheal aspirate) preferred
- Semi-quantitative cultures guide therapy
- MRSA nares screening

### Imaging

**Chest X-ray patterns:**
| Pattern | Typical Pathogens |
|---------|-------------------|
| Lobar consolidation | S. pneumoniae, Klebsiella |
| Bronchopneumonia (patchy) | S. aureus, H. influenzae, gram-negatives |
| Interstitial | Mycoplasma, viruses, PCP |
| Cavitation | S. aureus, Klebsiella, anaerobes, TB |
| Pleural effusion | S. pneumoniae, S. aureus, anaerobes |

**CT Chest:** Reserved for:
- Immunocompromised hosts
- Suspected complications (abscess, empyema)
- Non-resolving pneumonia
- Unusual presentations

## Treatment

### CAP - ATS/IDSA 2019 Guidelines

**Outpatient, no comorbidities:**
- Amoxicillin 1g TID, OR
- Doxycycline 100mg BID, OR
- Azithromycin 500mg day 1, 250mg days 2-5 (if local resistance <25%)

**Outpatient with comorbidities:**
- Amoxicillin-clavulanate + macrolide, OR
- Cephalosporin + macrolide, OR
- Respiratory fluoroquinolone monotherapy

**Inpatient, non-severe:**
- β-lactam (ceftriaxone 1-2g, ampicillin-sulbactam 3g) + macrolide, OR
- Respiratory fluoroquinolone (levofloxacin 750mg, moxifloxacin 400mg)

**Severe CAP (ICU):**
- β-lactam + macrolide, OR
- β-lactam + fluoroquinolone
- Add vancomycin/linezolid if MRSA risk
- Add anti-pseudomonal coverage if risk factors

### HAP/VAP
- Empiric coverage for MRSA and Pseudomonas until cultures return
- De-escalate based on microbiologic results
- Duration: 7 days typically sufficient

### Duration of Therapy
- Uncomplicated CAP: 5-7 days (minimum 5, afebrile ≥48h)
- HAP/VAP: 7 days
- Complications (abscess, empyema): Extended courses

## Complications

- **Parapneumonic effusion:** Occurs in 20-40%, most resolve
- **Empyema:** Infected pleural fluid, requires drainage
- **Lung abscess:** Cavitary necrosis, often anaerobes
- **ARDS:** Severe cases with diffuse alveolar damage
- **Sepsis/septic shock:** Systemic inflammatory response`,
      keyTerms: [
        { term: 'hepatization', definition: 'Pathologic stage where consolidated lung tissue resembles liver (hepatic) texture due to inflammatory exudate' },
        { term: 'microaspiration', definition: 'Small-volume aspiration of oropharyngeal secretions, the primary mechanism of pneumonia development' },
        { term: 'PSI', definition: 'Pneumonia Severity Index; 20-variable scoring system for risk stratification and disposition decisions' },
        { term: 'respiratory fluoroquinolone', definition: 'Fluoroquinolones with enhanced pneumococcal activity (levofloxacin, moxifloxacin)' },
        { term: 'cold agglutinins', definition: 'IgM antibodies that agglutinate RBCs at cold temperatures; associated with Mycoplasma infection' },
        { term: 'BAL', definition: 'Bronchoalveolar lavage; bronchoscopic sampling of lower respiratory tract for microbiologic diagnosis' },
      ],
      clinicalNotes: 'The ATS/IDSA 2019 guidelines removed "healthcare-associated pneumonia" (HCAP) as a category. Assess MDR risk individually rather than by exposure setting. Procalcitonin <0.25 μg/L makes bacterial pneumonia unlikely.',
    },
    4: {
      level: 4,
      summary: 'Pneumonia diagnosis and management require integration of host factors, exposure history, radiographic patterns, and microbiologic data to optimize pathogen-directed therapy while balancing antimicrobial stewardship and identifying patients at risk for complications or treatment failure.',
      explanation: `## Advanced Pathophysiology

### Host-Pathogen Interactions

**Pneumococcal pathogenesis:**
- Capsular polysaccharide evades phagocytosis
- Pneumolysin pore-forming toxin damages epithelium
- Hydrogen peroxide production causes oxidative damage
- Neuraminidase cleaves sialic acid, exposing receptors
- Autolysis releases inflammatory cell wall components

**Legionella pathogenesis:**
- Survives in amoebae (environmental reservoir)
- Enters macrophages via coiling phagocytosis
- Dot/Icm secretion system prevents phagosome-lysosome fusion
- Replicates intracellularly within Legionella-containing vacuole
- Requires macrolides or fluoroquinolones (intracellular penetration)

**Viral-bacterial synergy:**
- Influenza damages respiratory epithelium
- Exposes receptors for bacterial adherence
- Impairs neutrophil and macrophage function
- Post-influenza S. aureus pneumonia has high mortality

### Immune Response Dysregulation

**Hyperinflammation in severe pneumonia:**
- Excessive cytokine release (IL-6, IL-8, TNF-α)
- Neutrophil extracellular traps (NETs) contribute to alveolar damage
- Complement activation and consumptive coagulopathy
- Progression to ARDS

**Immunoparalysis:**
- HLA-DR downregulation on monocytes
- Lymphocyte apoptosis
- Increased susceptibility to secondary infections
- Poor outcomes in prolonged ICU course

## Microbiologic Diagnosis

### Molecular Diagnostics

**Multiplex PCR panels:**
- Respiratory pathogen panels detect 15-20+ organisms
- Results in hours vs days for culture
- High sensitivity for viruses, atypicals
- Detects fastidious organisms (Legionella, M. pneumoniae)
- Limitations: Cannot assess antibiotic susceptibility, may detect colonization

**Metagenomics:**
- Unbiased sequencing of all nucleic acids
- Detects unexpected pathogens
- Research/specialized use currently

### Biomarkers

| Biomarker | Interpretation | Clinical Use |
|-----------|---------------|--------------|
| Procalcitonin | <0.25: Bacterial unlikely; >0.5: Bacterial likely | Guide antibiotic initiation/discontinuation |
| CRP | Non-specific inflammation | Correlates with severity, guides response |
| Lactate | >2 mmol/L: Tissue hypoperfusion | Sepsis marker |
| Proadrenomedullin | >1.5 nmol/L: High mortality risk | Research use |

### Quantitative Cultures

**VAP diagnosis:**
| Sample | Threshold |
|--------|-----------|
| Endotracheal aspirate | ≥10⁶ CFU/mL |
| BAL | ≥10⁴ CFU/mL |
| Protected specimen brush | ≥10³ CFU/mL |

Below thresholds may represent colonization; clinical correlation required.

## Special Populations

### Immunocompromised Hosts

**Neutropenic patients:**
- Bacterial pneumonia may lack typical infiltrates
- High risk for invasive fungal infection (Aspergillus)
- Consider Galactomannan, β-D-glucan
- Broader empiric coverage including antifungals

**HIV/AIDS (CD4 <200):**
- Pneumocystis jirovecii pneumonia (PCP)
- Bilateral interstitial infiltrates, exertional hypoxemia
- Elevated LDH, β-D-glucan
- TMP-SMX treatment, adjunctive steroids if severe

**Solid organ transplant:**
- CMV pneumonitis (1-4 months post-transplant)
- PCP if not on prophylaxis
- Nocardia, endemic fungi

### Aspiration Syndromes

**Aspiration pneumonitis:**
- Chemical injury from gastric acid
- Develops hours after witnessed aspiration
- Often transient, may not require antibiotics
- Consider antibiotics if symptoms persist >48h

**Aspiration pneumonia:**
- Infection from aspirated oropharyngeal bacteria
- Often anaerobes plus aerobes
- Risk factors: Dysphagia, altered consciousness, GERD
- Treatment: Ampicillin-sulbactam, ertapenem, or clindamycin + β-lactam

### Post-obstructive Pneumonia
- Pneumonia behind an endobronchial lesion
- Consider lung cancer workup if non-resolving
- CT and bronchoscopy if persistent infiltrate

## Treatment Optimization

### Antibiotic Stewardship

**De-escalation strategies:**
- Narrow spectrum based on culture results
- Switch IV to oral when clinically stable
- Stop Pseudomonal/MRSA coverage if cultures negative at 48h

**Duration evidence:**
- CAPE COD: Procalcitonin-guided therapy reduces duration
- Community-acquired: Minimum 5 days, afebrile 48h
- HAP/VAP: 7 days equivalent to longer courses (less resistance)

### Adjunctive Therapies

**Corticosteroids in CAP:**
- CAPE COD trial: Hydrocortisone in severe CAP reduced mortality
- Consider in severe CAP with high inflammatory markers
- Not routine for non-severe CAP

**Macrolides beyond antimicrobial:**
- Immunomodulatory effects
- May benefit even when pathogen not atypical
- Reduced mortality in observational studies

### Treatment Failure

**Definition:** Clinical deterioration or lack of improvement by day 3

**Causes:**
1. Wrong diagnosis (PE, malignancy, vasculitis)
2. Wrong pathogen (resistant organism, fungal, mycobacterial)
3. Wrong antibiotic (inadequate coverage or dose)
4. Complication (empyema, abscess)
5. Host factors (immunocompromise, obstruction)

**Workup:**
- CT chest
- Bronchoscopy with BAL
- Consider fungal, mycobacterial studies
- Echocardiogram if endocarditis suspected

## HAP/VAP Management

### 2016 IDSA/ATS Guidelines

**HAP (non-VAP):**
- If no risk factors for MDR or mortality: Piperacillin-tazobactam OR cefepime OR levofloxacin OR meropenem
- If MDR/mortality risk factors: Above PLUS coverage for MRSA (vancomycin or linezolid)

**VAP:**
- Always cover Pseudomonas and MRSA empirically
- Two anti-pseudomonal agents if:
  - Local Pseudomonal resistance >10%
  - Structural lung disease
  - Prior Pseudomonal infection
  - High mortality risk

### MDR Risk Factors
- IV antibiotics in prior 90 days
- Prior MDR infection/colonization
- Septic shock at onset
- ARDS preceding VAP
- ≥5 days hospitalization prior to VAP
- Acute renal replacement therapy

### VAP Prevention Bundle
- Elevate head of bed 30-45°
- Daily sedation interruption and weaning trials
- DVT prophylaxis
- Stress ulcer prophylaxis (PPI or H2 blocker)
- Daily chlorhexidine oral care
- Subglottic secretion drainage (specialized ETT)

## Complications Management

### Parapneumonic Effusion

**Classification:**
| Category | Appearance | pH | Glucose | LDH | Culture |
|----------|-----------|-----|---------|-----|---------|
| Uncomplicated | Clear | >7.20 | >60 | <1000 | Negative |
| Complicated | Turbid | 7.00-7.20 | 40-60 | >1000 | May be + |
| Empyema | Purulent | <7.00 | <40 | Very high | Usually + |

**Management:**
- Uncomplicated: Antibiotics alone, serial imaging
- Complicated: Chest tube drainage + fibrinolytics consideration
- Empyema: Chest tube drainage, possible surgical decortication

### Lung Abscess
- Typically anaerobic-predominant, mixed flora
- Risk factors: Aspiration, poor dentition, alcoholism
- Treatment: Prolonged antibiotics (4-6 weeks minimum)
- Drainage: Consider if >6 cm, failure to improve, or unable to tolerate antibiotics`,
      keyTerms: [
        { term: 'NETs', definition: 'Neutrophil extracellular traps; web-like DNA structures that trap pathogens but contribute to alveolar damage in severe pneumonia' },
        { term: 'immunoparalysis', definition: 'State of immune dysfunction after severe infection characterized by monocyte deactivation and increased susceptibility to secondary infection' },
        { term: 'CAPE COD trial', definition: 'Landmark trial demonstrating mortality benefit of hydrocortisone in severe community-acquired pneumonia' },
        { term: 'PCP', definition: 'Pneumocystis pneumonia; opportunistic fungal infection in immunocompromised hosts, especially HIV/AIDS' },
        { term: 'de-escalation', definition: 'Strategy of starting broad-spectrum antibiotics then narrowing based on culture results to minimize resistance' },
        { term: 'parapneumonic effusion', definition: 'Pleural fluid accumulation adjacent to pneumonia; may be uncomplicated, complicated, or frank empyema' },
      ],
      clinicalNotes: 'Key clinical pearls: (1) Obtain procalcitonin to guide antibiotic initiation and duration. (2) Consider steroids for severe CAP with CRP >150. (3) De-escalate at 48h based on cultures. (4) Lung abscess requires prolonged therapy until imaging resolution or stability.',
    },
    5: {
      level: 5,
      summary: 'Contemporary pneumonia management integrates precision diagnostics including rapid molecular testing and biomarkers with pathogen-directed therapy, immunomodulation, and evidence-based protocols to optimize outcomes across diverse clinical settings and patient populations.',
      explanation: `## Precision Diagnostics in Pneumonia

### Molecular Rapid Diagnostics

**Multiplex PCR Platforms:**
| Platform | Targets | Turnaround |
|----------|---------|------------|
| FilmArray Pneumonia Panel | 18 bacteria, 9 viruses, 7 resistance genes | ~1 hour |
| BioFire Pneumonia Plus | 15 bacteria, 8 viruses, 7 resistance genes | ~1 hour |
| ePlex Respiratory Panel | Viral/bacterial targets | 90 min |

**Impact on management:**
- Earlier pathogen identification
- Rapid identification of resistance genes (mecA, KPC, NDM)
- Reduction in unnecessary antibiotics (viral detection)
- Limitations: Cost, may detect colonizers, susceptibility not definitive

**Metagenomic next-generation sequencing (mNGS):**
- Unbiased detection of all pathogens
- Detects unexpected organisms (Nocardia, rare viruses)
- Particularly useful in immunocompromised hosts
- Research to clinical transition ongoing

### Advanced Biomarker Strategies

**Procalcitonin-guided therapy:**
- PROACT, ProHOSP, ProREAL trials support PCT-guided duration
- Algorithm: Stop antibiotics when PCT <0.25 or drops >80%
- Reduces antibiotic exposure by 2-4 days
- No increase in adverse outcomes

**Emerging biomarkers:**
| Biomarker | Characteristic | Potential Use |
|-----------|---------------|---------------|
| Mid-regional proadrenomedullin (MR-proADM) | Endothelial dysfunction | Mortality prediction |
| Presepsin (sCD14-ST) | Monocyte activation | Sepsis detection |
| suPAR | Immune activation | Risk stratification |
| Host gene expression signatures | Transcriptomic patterns | Bacterial vs viral discrimination |

**SeptiCyte LAB and other gene expression assays:**
- Differentiate sepsis from non-infectious SIRS
- May guide antibiotic decision-making
- Increasing clinical adoption

### Imaging Innovation

**AI-assisted chest X-ray interpretation:**
- FDA-cleared algorithms for pneumonia detection
- Triage tool for radiologist workflow
- Improved sensitivity in screening settings

**Lung ultrasound:**
- Point-of-care, no radiation
- Consolidation appears as tissue-like echotexture
- Dynamic air bronchograms suggest pneumonia
- May outperform CXR for consolidation detection

## Pathogen-Specific Management

### Drug-Resistant Pathogens

**MRSA pneumonia:**
- Vancomycin 15-20 mg/kg q8-12h (trough 15-20 for pneumonia)
- Linezolid 600 mg q12h (better lung penetration, no renal dosing)
- IDSA CAP guidelines: Add MRSA coverage if prior MRSA infection, empyema, or severe necrotizing pneumonia

**Pseudomonas aeruginosa:**
- Combination empiric therapy if local resistance >10%
- Options: Piperacillin-tazobactam, cefepime, ceftazidime, meropenem
- Add aminoglycoside or fluoroquinolone for severe/MDR
- De-escalate to monotherapy once susceptibilities known

**Carbapenem-resistant Enterobacteriaceae (CRE):**
- KPC-producers: Ceftazidime-avibactam, meropenem-vaborbactam
- MBL-producers (NDM, VIM): Cefiderocol, aztreonam + ceftazidime-avibactam
- Infectious disease consultation recommended

**MDR Acinetobacter baumannii:**
- Ampicillin-sulbactam (high dose), colistin, tigecycline
- Cefiderocol has activity
- Combination therapy for severe infections

### Viral Pneumonia

**Influenza:**
- Oseltamivir 75 mg BID x 5 days (may extend in immunocompromised)
- Baloxavir single dose alternative
- Consider bacterial superinfection coverage if severe

**COVID-19 pneumonia:**
- Remdesivir for hospitalized patients requiring supplemental O2
- Dexamethasone 6 mg daily if hypoxemic
- Baricitinib or tocilizumab for progressive disease
- Avoid antibiotics if low procalcitonin, no bacterial features

**CMV pneumonitis:**
- Ganciclovir IV 5 mg/kg q12h x 14-21 days
- Oral valganciclovir for step-down
- Reduce immunosuppression if possible
- Consider CMV-IVIG in transplant recipients

### Fungal Pneumonia

**Pneumocystis jirovecii (PCP):**
- TMP-SMX (15-20 mg/kg/day TMP component divided q6-8h)
- Adjunctive prednisone if PaO2 <70 or A-a gradient >35
- Duration: 21 days
- Prophylaxis: TMP-SMX DS daily or 3x/week

**Invasive Pulmonary Aspergillosis:**
- Voriconazole 6 mg/kg q12h x2, then 4 mg/kg q12h (therapeutic drug monitoring)
- Alternatives: Isavuconazole, liposomal amphotericin B
- Consider combination therapy in refractory cases
- Reduce immunosuppression, G-CSF if neutropenic

**Endemic mycoses:**
- Histoplasmosis: Itraconazole (mild-moderate), amphotericin B (severe)
- Coccidioidomycosis: Fluconazole or itraconazole
- Blastomycosis: Itraconazole, amphotericin B for severe

## Immunomodulatory Strategies

### Corticosteroids

**Current evidence:**
- CAPE COD trial: Hydrocortisone 200 mg/day x 4-8 days in severe CAP with CRP ≥150 reduced mortality (6.2% vs 11.9%)
- Meta-analyses: Consistent benefit in severe CAP
- Mechanism: Attenuates hyperinflammation, reduces lung injury

**Recommendations:**
- Consider hydrocortisone 200 mg/day (or equivalent) for severe CAP
- Target patients with high inflammatory markers (CRP ≥150)
- Duration: 4-8 days, taper based on response
- Avoid if influenza without bacterial coinfection

### Other Immunomodulatory Approaches

**Macrolides:**
- Immunomodulatory effects independent of antimicrobial activity
- Reduce cytokine production, neutrophil adhesion
- May explain benefit even when pathogen not atypical
- Consider maintaining in regimen even if culture-negative

**Nebulized hypertonic saline:**
- Improves mucociliary clearance
- May reduce ventilator days in VAP
- Limited high-quality evidence

**Statins:**
- Anti-inflammatory, immunomodulatory
- Observational data suggest benefit in pneumonia
- RCTs have not confirmed benefit
- Continue if patient already on statin therapy

## HAP/VAP Prevention and Bundles

### Evidence-Based VAP Prevention

| Intervention | Evidence Level | NNT |
|--------------|---------------|-----|
| Semi-recumbent positioning | Moderate | ~10 |
| Daily sedation vacation + SBT | High | ~12 |
| Subglottic secretion drainage | High | ~8 |
| Oral care with chlorhexidine | Moderate | Variable |
| Early mobilization | Emerging | Unknown |

### Controversial/Unproven
- Selective digestive decontamination (SDD/SOD): Effective but concerns about resistance
- Probiotics: Inconsistent results
- Silver-coated ETTs: Limited benefit, cost concerns

### Post-VAP Surveillance
- 30-day and 90-day mortality
- Duration of mechanical ventilation
- ICU length of stay
- Antibiotic-free days

## Emerging Therapies

### Novel Antibiotics

**Cefiderocol:**
- Siderophore cephalosporin
- Active against CRE, Pseudomonas, Acinetobacter
- Penetrates outer membrane via iron transport
- FDA-approved for HAP/VAP

**Plazomicin:**
- Aminoglycoside resistant to many modifying enzymes
- Activity against CRE, ESBL-producers
- Approved for complicated UTI, studied in pneumonia

**Bacteriophage therapy:**
- Compassionate use for XDR infections
- Early clinical trials ongoing
- Potential for combination with antibiotics

### Immunotherapy

**Checkpoint inhibitors in sepsis:**
- PD-1/PD-L1 blockade may reverse immunoparalysis
- Early phase trials in septic patients
- Potential for pneumonia with immune dysfunction

**Monoclonal antibodies:**
- Anti-Pseudomonas (several in development)
- Anti-S. aureus (limited success to date)
- May be adjunctive to antibiotics in severe infection

## Outcomes and Quality Improvement

### Key Performance Metrics

**Process measures:**
- Door-to-antibiotic time (<4 hours for CAP)
- Blood culture before antibiotics (>80% target)
- Appropriate empiric antibiotic selection
- De-escalation at 48-72 hours

**Outcome measures:**
- 30-day mortality
- Length of stay
- 30-day readmission rate
- Ventilator-free days (for VAP)

### Quality Improvement Strategies

**Pneumonia clinical pathways:**
- Standardized order sets
- Empiric antibiotic guidance based on local antibiogram
- Automatic duration limits (7 days default)
- Stewardship review at 48 hours

**Transitions of care:**
- Criteria for IV to oral switch
- Discharge criteria checklists
- Follow-up imaging for smokers/non-resolving
- Post-discharge clinic appointment

## Clinical Pearls for Practice

1. **Multiplex PCR panels** identify pathogens in 2-3x more cases than conventional testing but should be interpreted clinically (colonization vs infection).

2. **Procalcitonin <0.25** has >95% negative predictive value for bacterial pneumonia - consider stopping antibiotics if clinically stable.

3. **Steroids in severe CAP:** Hydrocortisone 200 mg/day for 4-8 days in patients with CRP ≥150 mg/L based on CAPE COD.

4. **HAP/VAP duration:** 7 days is equivalent to longer courses and reduces resistance emergence (except empyema, lung abscess).

5. **Post-obstructive pneumonia:** Any smoker with persistent infiltrate at 8-12 weeks needs CT and bronchoscopy to evaluate for malignancy.

6. **Aspiration syndromes:** Most witnessed aspiration events are chemical pneumonitis - observe without antibiotics unless symptoms persist >48h.

7. **MRSA coverage in CAP:** Only add if prior MRSA infection, recent influenza with cavitation/empyema, or severe necrotizing presentation.

8. **Legionella urinary antigen** only detects serogroup 1 (~80% of cases). If clinical suspicion is high, also obtain PCR or culture.`,
      keyTerms: [
        { term: 'mNGS', definition: 'Metagenomic next-generation sequencing; unbiased sequencing approach detecting all microbial nucleic acids in a sample' },
        { term: 'cefiderocol', definition: 'Siderophore cephalosporin with activity against carbapenem-resistant gram-negatives via iron transport entry mechanism' },
        { term: 'SeptiCyte LAB', definition: 'FDA-cleared host gene expression assay distinguishing sepsis from non-infectious SIRS' },
        { term: 'CAPE COD trial', definition: 'Pivotal RCT demonstrating hydrocortisone reduces mortality in severe CAP with high inflammatory markers' },
        { term: 'PRMfSAD', definition: 'Parametric response mapping for functional small airway disease; CT-derived biomarker' },
        { term: 'immunoparalysis', definition: 'Post-septic immune dysfunction with HLA-DR downregulation and increased susceptibility to secondary infections' },
      ],
      clinicalNotes: `Key recommendations for 2024:

1. **Molecular diagnostics:** Consider multiplex PCR for severe pneumonia, immunocompromised hosts, and treatment failure. Interpret results in clinical context.

2. **Corticosteroids:** Strong evidence now supports hydrocortisone for severe CAP with CRP ≥150 mg/L. Implement into clinical pathways.

3. **Antibiotic duration:** Default to 5-7 days for CAP, 7 days for HAP/VAP. Use procalcitonin to guide discontinuation.

4. **MDR coverage:** Use local antibiogram data. Consider carbapenemase testing if CRE endemic. ID consultation for XDR pathogens.

5. **Quality metrics:** Track door-to-antibiotic time, de-escalation rates, and antibiotic-free days. Embed stewardship into workflows.`,
    },
  },

  media: [
    {
      id: 'pneumonia-types',
      type: 'diagram',
      filename: 'pneumonia-types.svg',
      title: 'Types of Pneumonia',
      description: 'Classification of pneumonia by setting, pathogen, and pattern',
    },
    {
      id: 'lobar-vs-broncho',
      type: 'diagram',
      filename: 'lobar-bronchopneumonia.svg',
      title: 'Lobar vs Bronchopneumonia',
      description: 'Comparison of consolidation patterns in different pneumonia types',
    },
    {
      id: 'cap-treatment-algorithm',
      type: 'diagram',
      filename: 'cap-treatment-algorithm.svg',
      title: 'CAP Treatment Algorithm',
      description: 'ATS/IDSA guideline-based treatment selection for community-acquired pneumonia',
    },
  ],

  citations: [
    {
      id: 'ats-idsa-cap-2019',
      type: 'article',
      title: 'Diagnosis and Treatment of Adults with Community-acquired Pneumonia',
      authors: ['Metlay JP', 'Waterer GW', 'Long AC', 'et al.'],
      source: 'Am J Respir Crit Care Med',
      url: 'https://doi.org/10.1164/rccm.201908-1581ST',
    },
    {
      id: 'ats-idsa-hap-2016',
      type: 'article',
      title: 'Management of Adults With Hospital-acquired and Ventilator-associated Pneumonia',
      authors: ['Kalil AC', 'Metersky ML', 'Klompas M', 'et al.'],
      source: 'Clin Infect Dis',
      url: 'https://doi.org/10.1093/cid/ciw353',
    },
    {
      id: 'cape-cod-trial',
      type: 'article',
      title: 'Hydrocortisone in Severe Community-Acquired Pneumonia',
      authors: ['Dequin PF', 'Meziani F', 'Quenot JP', 'et al.'],
      source: 'N Engl J Med',
      url: 'https://doi.org/10.1056/NEJMoa2215145',
    },
  ],

  crossReferences: [
    { targetId: 'condition-copd', targetType: 'condition', relationship: 'related', label: 'COPD' },
    { targetId: 'condition-asthma', targetType: 'condition', relationship: 'related', label: 'Asthma' },
    { targetId: 'topic-respiratory-medications', targetType: 'topic', relationship: 'related', label: 'Respiratory Medications' },
    { targetId: 'condition-sepsis', targetType: 'condition', relationship: 'related', label: 'Sepsis' },
  ],

  tags: {
    systems: ['respiratory', 'immune'],
    topics: ['pulmonology', 'infectious disease', 'critical care'],
    keywords: ['pneumonia', 'CAP', 'HAP', 'VAP', 'respiratory infection', 'consolidation', 'antibiotics'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'family medicine', 'surgery'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default pneumonia;
