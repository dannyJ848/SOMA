/**
 * Pneumonia
 *
 * Infection of the lung parenchyma causing consolidation.
 */

import { EducationalContent } from '../../types';

export const pneumoniaContent: EducationalContent = {
  id: 'pulmonology-pneumonia',
  type: 'topic',
  name: 'Pneumonia',
  alternateNames: ['Lower Respiratory Tract Infection', 'LRTI', 'Pneumonitis'],

  levels: {
    1: {
      level: 1,
      summary: "Pneumonia is an infection of the lungs. The air sacs fill with fluid or pus, causing cough with phlegm, fever, chills, and trouble breathing.",
      explanation: `## What Is Pneumonia?

Pneumonia is an infection that inflames the air sacs in one or both lungs. The air sacs may fill with fluid or pus, causing cough with phlegm, fever, chills, and difficulty breathing.

## Types of Pneumonia

**Community-Acquired (CAP):**
- Caught outside of hospital
- Most common type
- Caused by bacteria, viruses, fungi

**Hospital-Acquired (HAP):**
- Developed 48+ hours after admission
- Different, often resistant bacteria

**Aspiration:**
- From inhaling food, drink, or vomit
- Stomach contents damage lungs

## Common Symptoms

- Cough (with phlegm)
- Fever, chills
- Shortness of breath
- Chest pain (worse when breathing)
- Fatigue
- Nausea, vomiting
- Confusion (especially in older adults)

## Who Is at Risk?

- Age 65+ or young children
- Chronic lung disease
- Weakened immune system
- Smoking
- Recent illness or hospitalization

## Treatment

- Antibiotics for bacterial pneumonia
- Rest and fluids
- Fever reducers
- Hospitalization for severe cases
- Oxygen if needed`,

      keyTerms: [
        { term: 'Air sacs', definition: 'Tiny balloon-like structures in lungs where gas exchange happens' },
        { term: 'Phlegm', definition: 'Thick mucus produced in lungs during infection' },
        { term: 'CAP', definition: 'Community-Acquired Pneumonia - caught outside hospital' },
        { term: 'Aspiration', definition: 'Breathing in foreign material like food or vomit' },
      ],
      analogies: [
        'Pneumonia is like your lungs are filled with water instead of air.',
        'The air sacs are like balloons filled with fluid instead of air.',
      ],
      examples: [
        'Person with fever, cough, and chest pain diagnosed with pneumonia',
        'Elderly patient with confusion found to have pneumonia',
        'Child with fast breathing and fever has pneumonia',
      ],
    },

    2: {
      level: 2,
      summary: 'Pneumonia classification includes CAP, HAP, VAP, and HCAP. Diagnosis by clinical syndrome plus infiltrate on chest imaging. CURB-65 and PSI guide disposition.',
      explanation: `## Classification

**Community-Acquired (CAP):**
- Acquired outside hospital
- Typical pathogens: S. pneumoniae, H. influenzae, M. catarrhalis
- Atypical: M. pneumoniae, C. pneumoniae, L. pneumophila

**Hospital-Acquired (HAP):**
- Developed ≥48h after admission
- Pseudomonas, MRSA, Enterobacteriaceae
- Higher mortality

**Ventilator-Associated (VAP):**
- Developed ≥48h after intubation
- Multi-drug resistant organisms common

**Healthcare-Associated (HCAP):**
- Hospitalized within 90 days
- Hemodialysis
- Home wound care
- Similar to HAP pathogens

## Diagnostic Approach

**Clinical Syndrome:**
- Fever, cough, dyspnea
- Crackles, bronchial breath sounds
- Egophony, whispered pectoriloquy

**Imaging:**
- CXR: Infiltrate/consolidation
- May be multifocal
- Effusion possible

**Labs:**
- CBC: Leukocytosis or leukopenia
- BMP: Hyponatremia, renal dysfunction
- Lactate: Tissue hypoperfusion
- Blood cultures: Before antibiotics (if admitted)
- Sputum: Gram stain and culture
- Urinary antigens: S. pneumoniae, L. pneumophila

## Severity Assessment

**CURB-65:**
- C: Confusion
- U: Urea >19 mg/dL
- R: Respiratory rate ≥30
- B: BP <90/60
- 65: Age ≥65

**PSI (Pneumonia Severity Index):**
- 20 variables
- Classes I-V
- More complex than CURB-65`,

      keyTerms: [
        { term: 'Consolidation', definition: 'Air sacs filled with fluid instead of air' },
        { term: 'Egophony', definition: 'EGO sound when speaking over consolidated lung' },
        { term: 'PSI', definition: 'Pneumonia Severity Index - score to assess pneumonia severity' },
        { term: 'CRB-65', definition: 'Simplified severity score (CURB-65 without urea)' },
      ],
      analogies: [
        'Consolidation is like when a sponge becomes solid instead of airy.',
        'Egophony is like the letter "E" sounding like "A" when spoken over the lung.',
      ],
      examples: [
        'Patient with CURB-65 3 admitted to hospital',
        'CXR shows right lower lobe consolidation',
        'Legionella urinary antigen positive for atypical pneumonia',
      ],
      clinicalNotes: 'Blood cultures have low yield (~10%) but guide therapy if positive. Obtain 2 sets before antibiotics. Sputum Gram stain/culture low yield but may identify pathogen. Urinary antigens rapid, specific for pneumococcus and Legionella.',
    },

    3: {
      level: 3,
      summary: 'CAP treatment based on patient comorbidities and risk stratification. Healthcare-associated pneumonia managed similarly to HAP. Atypical pathogens require macrolides or fluoroquinolones.',
      explanation: `## CAP Treatment

**Outpatient (Healthy):**
- Amoxicillin OR doxycycline
- Alternative: Macrolide (if resistance low)

**Outpatient (Comorbidities):**
- Amoxicillin-clavulanate OR cephalosporin
- PLUS macrolide OR doxycycline
- Alternative: Respiratory fluoroquinolone

**Inpatient (Non-severe):**
- Beta-lactam + macrolide
- OR respiratory fluoroquinolone

**Inpatient (Severe/ICU):**
- Beta-lactam + macrolide OR fluoroquinolone
- Add MRSA coverage if risk factors
- Add Pseudomonas coverage if risk factors

**MRSA Risk Factors:**
- Prior MRSA colonization/infection
- Recent antibiotics
- IV drug use
- High local prevalence

**Pseudomonas Risk Factors:**
- Prior Pseudomonas
- Structural lung disease (bronchiectasis)
- Prolonged antibiotics/steroids
- Malnutrition

## Duration of Therapy

**Uncomplicated:**
- 5 days for clinically stable patients
- Extending beyond 7 days adds no benefit

**Complicated:**
- Empyema: 2-3 weeks (plus drainage)
- Bacteremia: 7-14 days
- Pseudomonas/MRSA: 7-14 days

## Clinical Stability Criteria

- Temperature ≤37.8°C
- Heart rate ≤100
- Respiratory rate ≤24
- BP ≥90/60
- SaO2 ≥90% on room air
- Ability to take oral meds`,

      keyTerms: [
        { term: 'Empyema', definition: 'Infected fluid in pleural space - complication of pneumonia' },
        { term: 'Bacteremia', definition: 'Bacteria in bloodstream - severe infection' },
        { term: 'Respiratory fluoroquinolone', definition: 'Levofloxacin or moxifloxacin - covers atypical pathogens' },
        { term: 'Beta-lactam', definition: 'Antibiotic class including penicillins, cephalosporins' },
      ],
      analogies: [
        'Empyema is like a pocket of infection in the space around the lung.',
        'Clinical stability criteria are like a checklist to see if you can go home.',
      ],
      examples: [
        'Healthy outpatient treated with amoxicillin',
        'ICU patient with prior MRSA gets vancomycin',
        'Pneumonia complicated by empyema requires chest tube',
      ],
      clinicalNotes: 'Macrolide resistance increasing. Consider local resistance patterns. Fluoroquinolones have serious side effects (tendon rupture, aortic dissection). Reserve for patients who cannot take beta-lactams or have true contraindications.',
    },

    4: {
      level: 4,
      summary: 'HAP and VAP require coverage for resistant organisms. De-escalation based on cultures improves outcomes. Aspiration pneumonia requires anaerobic coverage.',
      explanation: `## HAP/VAP Treatment

**Empiric Coverage:**
- Anti-pseudomonal beta-lactam
  - Cefepime, piperacillin-tazobactam, meropenem
- PLUS anti-MRSA agent
  - Vancomycin, linezolid
- Consider anti-pseudomonal fluoroquinolone if not using aminoglycoside

**De-escalation:**
- Narrow based on culture results
- Stop MRSA coverage if negative
- Stop double pseudomonas coverage
- Duration: 7 days (no benefit longer)

**Aspiration Pneumonia:**
- Anaerobic coverage: Amoxicillin-clavulanate, clindamycin
- Chemical pneumonitis from acidic gastric contents
- May not need antibiotics initially
- Culture often shows anaerobes

## Complications

**Parapneumonic Effusion/Empyema:**
- Light criteria: Exudative if meets 1 of
  - Pleural fluid/serum protein >0.5
  - Pleural fluid/serum LDH >0.6
  - Pleural fluid LDH >2/3 upper limit normal
- Empyema: pH <7.2, positive Gram stain
- Treatment: Chest tube ± fibrinolytics ± surgery

**Lung Abscess:**
- Cavitation with air-fluid level
- Anaerobes common
- Treatment: Prolonged antibiotics (4-6 weeks)
- Consider intervention if large or not responding

**Respiratory Failure:**
- Hypoxemic: Oxygen, high-flow nasal cannula, NIV
- Hypercapnic: NIV, consider intubation
- ARDS: Low tidal volume ventilation

**Metastatic Infection:**
- Brain abscess, empyema
- Endocarditis
- Septic emboli (especially S. aureus)`,

      keyTerms: [
        { term: 'De-escalation', definition: 'Changing to narrower antibiotics once cultures identify specific bacteria' },
        { term: 'Anti-pseudomonal', definition: 'Antibiotic effective against Pseudomonas aeruginosa' },
        { term: 'Light criteria', definition: 'Tests to determine if pleural fluid is exudate or transudate' },
        { term: 'Lung abscess', definition: 'Pus-filled cavity in lung from infection' },
      ],
      analogies: [
        'De-escalation is like using a sniper instead of a shotgun when you know the target.',
        'A lung abscess is like a pus pocket forming in the lung tissue.',
      ],
      examples: [
        'HAP patient started on cefepime + vancomycin, de-escalated based on cultures',
        'Aspiration pneumonia treated with clindamycin for anaerobic coverage',
        'Empyema treated with chest tube and tPA',
      ],
      clinicalNotes: 'Multidrug-resistant (MDR) pathogens increasing in HAP/VAP. Consider local antibiogram. Duration of antibiotics for VAP: 7 days if good clinical response. Longer courses not beneficial and may increase resistance.',
    },

    5: {
      level: 5,
      summary: 'Pneumonia remains a leading cause of death worldwide. Vaccination reduces incidence of invasive pneumococcal disease. Procalcitonin-guided therapy may reduce antibiotic duration.',
      explanation: `## Prevention

**Pneumococcal Vaccination:**
- PCV15 (Prevnar 15): Then PPSV23 one year later
- OR PCV20 (Prevnar 20) alone
- Ages: 65+ OR chronic medical conditions
- Reduces invasive pneumococcal disease

**Other Vaccines:**
- Influenza: Annually
- COVID-19: Stay current
- Hib: For high-risk adults
- Pertussis: Tdap every 10 years

**Other Prevention:**
- Smoking cessation
- Dental hygiene (aspiration risk)
- Early ambulation post-surgery
- Incentive spirometry post-op

## Emerging Topics

**Procalcitonin:**
- Biomarker for bacterial infection
- May differentiate bacterial vs viral
- Low procalcitonin: Stop antibiotics
- Not for routine use but helpful in uncertain cases

** Biomarkers:**
- Procalcitonin-guided duration
- Reduces antibiotic exposure
- No mortality difference

**Controversies:**
- Steroids for CAP: Some benefit in severe pneumonia
- Combination vs monotherapy for severe CAP
- HCAP concept: Some favor individualizing over empiric MRSA/Pseudomonas coverage

**Quality Metrics:**
- Antibiotics within 4-6 hours
- Blood cultures before antibiotics
- Appropriate empiric therapy
- Duration <7 days for uncomplicated`,

      keyTerms: [
        { term: 'Procalcitonin', definition: 'Biomarker elevated in bacterial infections, helps guide antibiotic use' },
        { term: 'MDR', definition: 'Multi-Drug Resistant - bacteria resistant to multiple antibiotics' },
        { term: 'Empiric therapy', definition: 'Starting antibiotics before knowing the exact bacteria' },
        { term: 'Incentive spirometry', definition: 'Breathing exercise device to prevent pneumonia after surgery' },
      ],
      analogies: [
        'Procalcitonin is like a test that tells you if antibiotics are really needed.',
        'Empiric therapy is like casting a wide net to catch the bacteria.',
      ],
      examples: [
        'Low procalcitonin allows stopping antibiotics in non-bacterial pneumonia',
        'Patient receives PCV20 instead of PCV15 + PPSV23',
        'Steroids considered for severe CAP with septic shock',
      ],
      clinicalNotes: 'Viral pneumonia increasing: Influenza, RSV, COVID-19, adenovirus. Consider viral testing during season. Oseltamivir for influenza if <48 hours of symptoms. Respiratory viral panel PCR testing available.',
    },
  },

  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    topics: ['pulmonology', 'pneumonia', 'infection', 'CAP', 'antibiotics'],
    systems: ['respiratory', 'immune'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, shelf: ['pulmonology'] },
  },

  createdAt: '2025-01-28',
  updatedAt: '2025-01-28',
  version: 1,
  status: 'published',
};
