import { EducationalContent } from '../../types';

export const PNEUMONIA: EducationalContent = {
  id: 'infectious-disease-pneumonia',
  type: 'condition',
  name: 'Pneumonia',
  alternateNames: ['Lung Infection', 'Lower Respiratory Tract Infection', 'Community-Acquired Pneumonia', 'CAP'],
  levels: {
    1: {
      level: 1,
      summary: 'Pneumonia is an infection that inflames the air sacs in the lungs, causing cough, fever, and difficulty breathing.',
      explanation: `Pneumonia is an infection deep in your lungs. Your lungs have millions of tiny air sacs called alveoli, where oxygen enters your blood. When you have pneumonia, these air sacs fill with fluid and pus, making it hard to breathe.

**What Causes Pneumonia:**
- **Bacteria** - The most common cause in adults
- **Viruses** - Including flu and COVID-19
- **Fungi** - Rare, mostly in people with weak immune systems

**Common Symptoms:**
- Cough (often with mucus)
- Fever, sweating, and chills
- Shortness of breath
- Chest pain when breathing or coughing
- Fatigue and weakness
- Confusion (especially in older adults)

**Who Gets Pneumonia More Easily:**
- Young children and older adults
- People with chronic diseases (asthma, COPD, diabetes)
- Smokers
- People with weakened immune systems
- People recently hospitalized

**When to See a Doctor:**
See a doctor right away if you have:
- Difficulty breathing
- Chest pain
- High fever that won't go away
- Cough with pus-like or bloody mucus
- Confusion

**Treatment:**
- Bacterial pneumonia is treated with antibiotics
- Viral pneumonia usually improves with rest and fluids
- Severe cases may need hospital treatment with oxygen or IV fluids

**Prevention:**
- Get vaccinated (pneumonia vaccine and flu shot)
- Wash hands frequently
- Don't smoke
- Stay healthy with good nutrition and exercise`,
      keyTerms: [
        { term: 'Pneumonia', definition: 'An infection causing inflammation and fluid in the lung air sacs' },
        { term: 'Alveoli', definition: 'Tiny air sacs in the lungs where oxygen exchange happens' },
        { term: 'Antibiotics', definition: 'Medicines that kill bacteria or stop them from growing' },
        { term: 'Immune system', definition: 'The body\'s defense against infections' },
      ],
    },
    2: {
      level: 2,
      summary: 'Pneumonia is an infection of the lung parenchyma causing alveolar inflammation and consolidation, classified by setting of acquisition and managed with antibiotics targeting likely pathogens.',
      explanation: `Pneumonia involves infection and inflammation of the lung tissue, particularly the alveoli. Understanding the classification and common causes helps guide diagnosis and treatment.

**Classification:**

| Type | Definition | Common Pathogens |
|------|------------|------------------|
| Community-Acquired (CAP) | Acquired outside healthcare settings | S. pneumoniae, H. influenzae, atypicals, viruses |
| Hospital-Acquired (HAP) | Develops >48 hours after admission | P. aeruginosa, S. aureus (including MRSA), Enterobacteriaceae |
| Ventilator-Associated (VAP) | Develops >48 hours after intubation | Similar to HAP, often drug-resistant |
| Aspiration | From inhaling oral/gastric contents | Anaerobes, gram-negatives |

**Common Bacterial Causes:**
- **Streptococcus pneumoniae (pneumococcus)**: Most common cause of CAP
- **Haemophilus influenzae**: Common in COPD patients
- **Staphylococcus aureus**: Post-influenza, healthcare exposure
- **Atypical organisms**: Mycoplasma, Chlamydophila, Legionella (often in younger adults, unique features)

**Clinical Presentation:**

*Typical Pneumonia:*
- Sudden onset high fever, shaking chills
- Productive cough with purulent sputum
- Pleuritic chest pain
- Physical exam: Crackles, decreased breath sounds, dullness to percussion

*Atypical Pneumonia:*
- Gradual onset
- Dry cough
- Extrapulmonary symptoms (headache, myalgias)
- Less severe initially but can progress

**Diagnosis:**
- Chest X-ray: Shows infiltrate/consolidation
- Pulse oximetry: Assesses oxygenation
- Labs: CBC, metabolic panel
- Sputum culture (if possible)
- Blood cultures (for hospitalized patients)
- Urinary antigen tests: Pneumococcus, Legionella

**Severity Assessment (CURB-65):**
One point each for:
- **C**onfusion
- **U**rea > 7 mmol/L
- **R**espiratory rate ≥ 30
- **B**lood pressure (systolic < 90 or diastolic ≤ 60)
- Age ≥ **65**

Score 0-1: Outpatient treatment
Score 2: Consider hospitalization
Score 3-5: Hospital, consider ICU

**Treatment:**

*Outpatient CAP:*
- Healthy adults: Amoxicillin OR doxycycline OR macrolide
- With comorbidities: Amoxicillin-clavulanate + macrolide, OR respiratory fluoroquinolone

*Inpatient CAP (non-ICU):*
- Beta-lactam (ceftriaxone or ampicillin-sulbactam) + macrolide
- OR respiratory fluoroquinolone alone

*Severe/ICU CAP:*
- Beta-lactam + macrolide OR fluoroquinolone
- Consider MRSA coverage if risk factors
- Consider Pseudomonas coverage if risk factors

**Duration**: Usually 5-7 days (minimum 5 days, afebrile 48-72 hours)`,
      keyTerms: [
        { term: 'Consolidation', definition: 'When lung tissue becomes dense and solid due to fluid and inflammatory cells filling the alveoli' },
        { term: 'Atypical pneumonia', definition: 'Pneumonia caused by organisms like Mycoplasma or Legionella with a different clinical presentation' },
        { term: 'CURB-65', definition: 'A scoring system to assess pneumonia severity and guide treatment setting' },
        { term: 'Infiltrate', definition: 'Abnormal substance (fluid, cells) accumulating in lung tissue visible on X-ray' },
        { term: 'Respiratory fluoroquinolone', definition: 'Antibiotics like levofloxacin or moxifloxacin that cover respiratory pathogens including atypicals' },
      ],
    },
    3: {
      level: 3,
      summary: 'Pneumonia pathophysiology involves microbial invasion, innate immune response, and alveolar consolidation, with management guided by severity indices, likely pathogens based on risk factors, and antimicrobial stewardship principles.',
      explanation: `Understanding pneumonia requires integration of pulmonary physiology, microbiology, and evidence-based treatment algorithms.

**Pathophysiology:**

*Defense Mechanisms:*
- Upper airway filtering and mucociliary clearance
- Cough reflex
- Alveolar macrophages (first-line defense)
- Surfactant proteins (SP-A, SP-D) with opsonizing function
- Neutrophil recruitment via chemokines

*Pathogen Entry:*
- Microaspiration of oropharyngeal secretions (most common)
- Inhalation of aerosolized organisms (Legionella)
- Hematogenous spread (S. aureus from endocarditis)
- Direct extension from adjacent infection

*Inflammatory Cascade:*
1. Pathogen recognition by alveolar macrophages (TLRs, NLRs)
2. Cytokine release (IL-1, IL-6, TNF-alpha)
3. Neutrophil recruitment and degranulation
4. Increased capillary permeability
5. Alveolar flooding with exudate
6. Impaired gas exchange

*Stages of Lobar Pneumonia (Classic):*
1. Congestion: Vascular engorgement, serous exudate
2. Red hepatization: RBCs, neutrophils, fibrin fill alveoli
3. Gray hepatization: RBC lysis, persistent fibrin
4. Resolution: Enzymatic digestion, macrophage clearance

**Microbiological Considerations:**

*Streptococcus pneumoniae:*
- Polysaccharide capsule: Antiphagocytic
- Pneumolysin: Cytotoxin, activates complement
- 90+ serotypes; vaccines target most virulent
- Penicillin resistance: Altered PBPs

*Atypical Pathogens:*
- **Mycoplasma pneumoniae**: Lacks cell wall (beta-lactams ineffective), damages respiratory epithelium
- **Chlamydophila pneumoniae**: Obligate intracellular, chronic infection possible
- **Legionella pneumophila**: Environmental (water systems), intracellular in macrophages

*Viral Pneumonia:*
- Influenza: Can be primary or predispose to bacterial superinfection
- SARS-CoV-2: Variable severity, ARDS in severe cases
- RSV: Important in children and elderly
- Difficult to distinguish from bacterial clinically

**Diagnostic Approach:**

*Imaging:*
- CXR: First-line, may lag behind clinical symptoms
- CT chest: More sensitive, useful when CXR unclear or for complications
- Patterns: Lobar, bronchopneumonia, interstitial

*Microbiological Testing:*
- Sputum gram stain/culture: Useful if quality specimen (>25 PMNs, <10 epithelial cells per LPF)
- Blood cultures: Positive in 5-14% of CAP, helps guide narrow therapy
- Urinary antigens: S. pneumoniae, L. pneumophila serogroup 1
- PCR panels: Rapid identification of respiratory pathogens
- Procalcitonin: May help distinguish bacterial from viral

**Severity Assessment Tools:**

*PSI/PORT Score:*
- Complex, 20 variables
- Validated for mortality prediction
- Risk classes I-V

*CURB-65 and CRB-65:*
- Simpler, 5 or 4 variables
- CRB-65 doesn't require labs (community use)

*ATS/IDSA Severe CAP Criteria:*
Minor criteria (need 3+):
- RR ≥ 30, PaO2/FiO2 ≤ 250, multilobar infiltrates, confusion, uremia, leukopenia, thrombocytopenia, hypothermia, hypotension requiring fluids

Major criteria (need 1):
- Septic shock requiring vasopressors
- Respiratory failure requiring mechanical ventilation

**Treatment Optimization:**

*Biomarker-Guided Therapy:*
- Procalcitonin: Can guide antibiotic initiation and duration
- Serial measurement helps with de-escalation decisions

*Duration:*
- Most CAP: 5 days minimum (if afebrile 48-72h, clinically stable)
- Severe CAP: May require 7 days
- Pseudomonas or MRSA: Often 7 days
- Longer for complications (empyema, lung abscess)`,
      keyTerms: [
        { term: 'Hepatization', definition: 'Stage of lobar pneumonia where lung tissue becomes liver-like in consistency due to inflammatory infiltration' },
        { term: 'PSI', definition: 'Pneumonia Severity Index - a validated prognostic tool for CAP using 20 variables' },
        { term: 'Procalcitonin', definition: 'A biomarker elevated in bacterial infections, used to guide antibiotic decisions' },
        { term: 'Empyema', definition: 'Collection of pus in the pleural space, a complication of pneumonia' },
        { term: 'Bronchopneumonia', definition: 'Patchy pneumonia affecting bronchi and surrounding lung tissue' },
      ],
    },
    4: {
      level: 4,
      summary: 'Pneumonia management integrates pathogen-directed therapy based on host risk factors, optimization using PK/PD principles, management of complications including parapneumonic effusions and ARDS, and antimicrobial stewardship to minimize resistance.',
      explanation: `Advanced pneumonia care requires nuanced understanding of microbiology, pharmacology, and complications management.

**Risk Stratification for Resistant Organisms:**

*Pseudomonas aeruginosa Risk Factors:*
- Structural lung disease (bronchiectasis, severe COPD)
- Prior Pseudomonas isolation
- Chronic corticosteroid use
- Recent hospitalization or IV antibiotics
- If present: Antipseudomonal beta-lactam (piperacillin-tazobactam, cefepime, meropenem)

*MRSA Risk Factors:*
- Prior MRSA infection or colonization
- Recent hospitalization or antibiotics
- Hemodialysis
- Post-influenza pneumonia
- Cavitary/necrotizing pneumonia
- If present: Add vancomycin or linezolid

**Pharmacokinetic/Pharmacodynamic Optimization:**

*Beta-Lactams:*
- Time-dependent killing: Maximize %T>MIC
- Consider extended infusions (cefepime, piperacillin-tazobactam, meropenem) in severe disease
- Continuous infusion may improve outcomes in critically ill

*Fluoroquinolones:*
- Concentration-dependent with time component (AUC/MIC)
- Once-daily dosing appropriate
- High lung penetration

*Aminoglycosides (if used):*
- Concentration-dependent (Cmax/MIC)
- Extended interval dosing
- Limited role in pulmonary infections (poor lung penetration except in bronchiectasis)

**Hospital-Acquired Pneumonia (HAP) and VAP:**

*Empiric Coverage:*
- Activity against S. aureus (including MRSA if risk factors)
- Activity against Pseudomonas (if risk factors)
- Activity against gram-negative bacilli
- Double coverage for Pseudomonas only if high mortality risk + risk factors

*De-escalation:*
- Culture results guide narrowing
- 7 days duration for most HAP/VAP
- Procalcitonin-guided discontinuation may reduce antibiotic exposure

*VAP Prevention:*
- Elevate head of bed
- Daily sedation vacation and spontaneous breathing trials
- Oral care with chlorhexidine
- Subglottic secretion drainage
- VTE and stress ulcer prophylaxis

**Complications:**

*Parapneumonic Effusions and Empyema:*
Staging:
- Simple parapneumonic: Exudative, sterile, responds to antibiotics
- Complicated parapneumonic: Low pH (<7.2), low glucose, positive gram stain
- Empyema: Frank pus, positive culture

Management:
- Thoracentesis: Diagnostic and therapeutic
- Chest tube drainage for complicated effusions/empyema
- Consider intrapleural fibrinolytics (tPA + DNase)
- VATS or surgical decortication for loculated collections

*Lung Abscess:*
- More common with aspiration, periodontal disease
- Anaerobic and mixed infections
- Prolonged antibiotics (4-6 weeks or until resolved)
- Drainage if fails to resolve or > 6 cm

*ARDS:*
- Can develop in severe pneumonia
- Lung-protective ventilation (6 mL/kg PBW)
- PEEP titration
- Prone positioning for P/F < 150
- Conservative fluid management

**Special Populations:**

*Aspiration Pneumonia vs. Pneumonitis:*
- Aspiration pneumonitis: Chemical inflammation, may not need antibiotics
- Aspiration pneumonia: Infection, antibiotics indicated
- Anaerobic coverage debated; not needed for most community aspiration
- Prolonged aspiration with poor dentition: Consider anaerobic coverage

*Immunocompromised Hosts:*
- Broader differential: PCP, CMV, fungal, Nocardia
- More aggressive diagnostic workup (BAL)
- Empiric coverage may include TMP-SMX for PCP
- Consult infectious disease

*Influenza-Associated:*
- Primary viral pneumonia vs. bacterial superinfection
- Antivirals indicated
- Cover S. aureus (including MRSA) empirically
- S. pneumoniae also common`,
      keyTerms: [
        { term: '%T>MIC', definition: 'Percentage of time drug concentration exceeds minimum inhibitory concentration, key for beta-lactam efficacy' },
        { term: 'Extended infusion', definition: 'Administering beta-lactams over 3-4 hours to optimize time above MIC' },
        { term: 'Decortication', definition: 'Surgical removal of fibrous tissue encasing the lung in chronic empyema' },
        { term: 'Pneumonitis', definition: 'Lung inflammation from non-infectious causes such as chemical aspiration' },
        { term: 'BAL', definition: 'Bronchoalveolar lavage - a diagnostic procedure to sample lower respiratory tract' },
      ],
      clinicalNotes: 'In clinical practice, distinguishing viral from bacterial pneumonia remains challenging. Procalcitonin can help but is not definitive. For severe CAP, early appropriate antibiotics improve outcomes. Always consider MRSA and Pseudomonas risk factors in treatment decisions. Duration can often be shortened to 5 days with clinical stability.',
    },
    5: {
      level: 5,
      summary: 'Expert pneumonia management encompasses precision diagnostics including rapid molecular testing, individualized antimicrobial selection based on local epidemiology and PK/PD principles, adjunctive therapies, and integration with antimicrobial stewardship and quality improvement programs.',
      explanation: `Mastery of pneumonia care requires synthesis of evolving diagnostics, complex therapeutics, and systems-level quality improvement.

**Advanced Diagnostics:**

*Molecular Testing:*
- Multiplex PCR panels: Rapid identification of pathogens and resistance genes
- BioFire FilmArray Pneumonia Panel: 18 bacteria, 9 viruses, 7 resistance genes
- Turnaround <2 hours vs. 24-72 hours for culture
- Semiquantitative results help distinguish colonization from infection

*Metagenomic Next-Generation Sequencing:*
- Unbiased pathogen detection
- Useful for culture-negative pneumonia
- Can identify unexpected pathogens
- Cost and availability limitations

*Biomarker Integration:*
- CRP: Non-specific but tracks response
- Procalcitonin: 0.25-0.5 ng/mL cutoffs for antibiotic decisions
- Combination approaches under investigation (e.g., CRP + procalcitonin + TRAIL)

**Precision Antimicrobial Therapy:**

*Local Antibiogram Use:*
- Hospital-specific resistance patterns guide empiric choices
- Unit-level antibiograms for HAP/VAP
- Community antibiograms when available

*Therapeutic Drug Monitoring:*
- Vancomycin: AUC-guided dosing (target 400-600)
- Beta-lactams in critically ill: Consider TDM for MIC coverage
- Population PK models improve dosing

*Novel Agents and Indications:*
- Lefamulin: First-in-class pleuromutilin for CAP
- Omadacycline: Novel tetracycline for CAP
- Delafloxacin: Favorable MRSA activity
- Ceftobiprole: Anti-MRSA cephalosporin (approved in some countries for CAP/HAP)

**Adjunctive Therapies:**

*Corticosteroids in CAP:*
- Meta-analyses suggest mortality benefit in severe CAP
- Controversial; not universally recommended
- May reduce time to clinical stability
- Concern for hyperglycemia, superinfection
- CAPE COD trial: Hydrocortisone reduced mortality in severe CAP

*Immunomodulation in Severe Pneumonia:*
- Macrolides: Anti-inflammatory effects beyond antibacterial
- May explain benefit in CAP even when pathogen not susceptible
- Optimal duration of immunomodulatory benefit unclear

**Quality Improvement:**

*Core Measures and Metrics:*
- Blood cultures before antibiotics
- Appropriate empiric antibiotic selection
- Time to first antibiotic dose (ideally within 4-6 hours)
- Pneumococcal and influenza vaccination before discharge
- Smoking cessation counseling

*Pneumonia Care Bundles:*
- Standardized order sets
- Pharmacist involvement
- De-escalation protocols
- IV to oral conversion criteria
- Early mobility

**Outcomes and Transitions:**

*30-Day Readmission:*
- Pneumonia high-risk for readmission
- Comorbidity management
- Follow-up appointments
- Patient education on warning signs

*Long-Term Sequelae:*
- Increased cardiovascular events post-pneumonia
- Functional decline in elderly
- Post-infectious bronchiectasis
- Importance of rehabilitation

**Antimicrobial Stewardship:**

*Diagnostic Stewardship:*
- Right test for right patient
- Avoid over-reliance on positive respiratory cultures in colonized patients
- Integration of rapid diagnostics with treatment algorithms

*Treatment Stewardship:*
- Audit and feedback on antibiotic choices
- Automatic stop dates
- De-escalation alerts
- Duration standardization (5-7 days for most)

**Emerging Challenges:**

*Antimicrobial Resistance:*
- Carbapenem-resistant Enterobacteriaceae (CRE) in HAP
- MDR Pseudomonas and Acinetobacter
- Limited pipeline for Gram-negative infections

*Pandemic Preparedness:*
- COVID-19 lessons: Distinguishing viral from bacterial
- Stewardship during respiratory virus outbreaks
- Antibiotic overuse concerns in pandemic

**Research Frontiers:**

*Host-Directed Therapies:*
- Targeting excessive inflammation without impairing pathogen clearance
- GM-CSF for immune enhancement
- Mesenchymal stem cells for ARDS

*Precision Medicine:*
- Transcriptomic signatures distinguishing bacterial from viral
- Biomarker-guided antibiotic selection
- Pharmacogenomics for dosing optimization

*Prevention Advances:*
- Expanded pneumococcal vaccines (PCV15, PCV20)
- Universal influenza vaccines in development
- RSV vaccines for adults approved`,
      keyTerms: [
        { term: 'Multiplex PCR panel', definition: 'Molecular test detecting multiple pathogens and resistance genes simultaneously' },
        { term: 'AUC-guided dosing', definition: 'Dosing strategy optimizing total drug exposure over 24 hours' },
        { term: 'Pleuromutilin', definition: 'Novel antibiotic class with activity against CAP pathogens including drug-resistant S. pneumoniae' },
        { term: 'Diagnostic stewardship', definition: 'Optimizing test selection to improve antimicrobial prescribing' },
        { term: 'Transcriptomic signature', definition: 'Gene expression patterns in host cells that may distinguish infection types' },
      ],
      clinicalNotes: 'Expert pneumonia management balances rapid initiation of appropriate therapy with stewardship principles. Molecular diagnostics are transforming our ability to identify pathogens quickly, but interpretation requires clinical judgment. Severe CAP benefits from early appropriate antibiotics, possible corticosteroids, and aggressive supportive care. The CAP mortality benefit of macrolides may extend beyond antibacterial effects. Long-term outcomes including cardiovascular risk warrant attention.',
    },
  },
  media: [],
  citations: [
    {
      id: 'metlay-ats-idsa-2019',
      type: 'article',
      title: 'Diagnosis and Treatment of Adults with Community-acquired Pneumonia. An Official Clinical Practice Guideline of the American Thoracic Society and Infectious Diseases Society of America',
      authors: ['Metlay JP', 'Waterer GW', 'Long AC'],
      source: 'American Journal of Respiratory and Critical Care Medicine',
      license: 'Copyrighted',
    },
    {
      id: 'kalil-idsa-hap-vap-2016',
      type: 'article',
      title: 'Management of Adults With Hospital-acquired and Ventilator-associated Pneumonia: 2016 Clinical Practice Guidelines',
      authors: ['Kalil AC', 'Metersky ML', 'Klompas M'],
      source: 'Clinical Infectious Diseases',
      license: 'Copyrighted',
    },
  ],
  crossReferences: [
    { targetId: 'infectious-disease-sepsis', targetType: 'condition', relationship: 'related', label: 'Sepsis' },
    { targetId: 'infectious-disease-influenza', targetType: 'condition', relationship: 'related', label: 'Influenza' },
    { targetId: 'infectious-disease-covid-19', targetType: 'condition', relationship: 'related', label: 'COVID-19' },
    { targetId: 'infectious-disease-antibiotic-resistance', targetType: 'concept', relationship: 'related', label: 'Antibiotic Resistance' },
  ],
  tags: {
    systems: ['infectious-disease', 'respiratory'],
    topics: ['bacterial-infections', 'respiratory-infections', 'hospital-infections'],
    keywords: ['pneumonia', 'CAP', 'HAP', 'VAP', 'respiratory infection', 'antibiotics'],
    clinicalRelevance: 'critical',
  },
  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
