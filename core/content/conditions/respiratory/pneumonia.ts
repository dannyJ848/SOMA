/**
 * Pneumonia - Comprehensive Educational Content
 *
 * Covers bacterial, viral, and fungal pneumonia pathophysiology and management.
 */

import { EducationalContent } from '../../types';

export const pneumonia: EducationalContent = {
  id: 'condition-pneumonia',
  type: 'condition',
  name: 'Pneumonia',
  nameEs: 'Neumonía',
  alternateNames: ['Lung Infection', 'Lower Respiratory Tract Infection', 'Pneumonitis'],
  hpoId: 'HP:0002090',

  levels: {
    1: {
      level: 1,
      summary: 'Pneumonia is an infection of the lungs that causes the air sacs to fill with fluid or pus, making it hard to breathe.',
      explanation: `Pneumonia is like having a cold that goes deep into your lungs. When you have pneumonia, tiny air sacs in your lungs (called alveoli) get infected and fill up with fluid or pus.

**What happens in your lungs:**
- Germs (bacteria or viruses) enter your lungs
- Your air sacs get inflamed and swollen
- They fill with fluid, pus, or mucus
- This makes it hard for oxygen to get into your blood

**Common symptoms:**
- Cough (may produce phlegm or mucus)
- Fever and chills
- Difficulty breathing
- Chest pain when breathing or coughing
- Feeling very tired

**Who is at higher risk:**
- Older adults (65+)
- Young children
- People with chronic diseases
- Those with weakened immune systems
- People who smoke

**How it is treated:**
- Antibiotics for bacterial pneumonia
- Rest and plenty of fluids
- Fever reducers like acetaminophen
- Sometimes oxygen therapy
- Hospital care for severe cases`,
      keyTerms: [
        { term: 'alveoli', definition: 'Tiny air sacs in the lungs where oxygen enters the blood' },
        { term: 'phlegm', definition: 'Thick mucus that comes up when you cough' },
        { term: 'bacteria', definition: 'Tiny germs that can cause infections' },
        { term: 'virus', definition: 'A very small germ that causes infections like colds and flu' },
      ],
      analogies: [
        'Pneumonia is like a sponge that gets waterlogged - the air sacs fill with fluid instead of air.',
        'Think of your lungs as balloons filled with air; pneumonia fills them with water instead.',
      ],
      examples: [
        'A child with a bad cold that develops a high fever and fast breathing may have pneumonia.',
        'An elderly person who becomes confused and has a cough after being in the hospital may have pneumonia.',
      ],
    },
    2: {
      level: 2,
      summary: 'Pneumonia is an acute infection of the lung parenchyma characterized by inflammation of the alveoli and filling of air spaces with fluid, presenting with cough, fever, and respiratory distress.',
      explanation: `## Understanding Pneumonia

**Types of Pneumonia:**

**Community-Acquired Pneumonia (CAP):**
- Acquired outside of hospitals
- Most common type
- Often caused by Streptococcus pneumoniae

**Hospital-Acquired Pneumonia (HAP):**
- Develops 48+ hours after hospital admission
- More likely to be antibiotic-resistant
- Higher mortality rate

**Ventilator-Associated Pneumonia (VAP):**
- Occurs in patients on mechanical ventilation
- Very serious with high mortality

**Aspiration Pneumonia:**
- Caused by inhaling food, liquid, or vomit
- Common in patients with swallowing problems

## Common Pathogens

**Bacterial:**
- Streptococcus pneumoniae (most common)
- Haemophilus influenzae
- Staphylococcus aureus (including MRSA)
- Klebsiella pneumoniae
- Mycoplasma pneumoniae (atypical)

**Viral:**
- Influenza virus
- RSV (respiratory syncytial virus)
- COVID-19 (SARS-CoV-2)

**Fungal:**
- Pneumocystis jirovecii (in immunocompromised)

## Clinical Presentation

**Typical symptoms:**
- Sudden onset high fever
- Productive cough with rusty or green sputum
- Pleuritic chest pain
- Shortness of breath
- Tachycardia (fast heart rate)

**Atypical pneumonia:**
- Gradual onset
- Dry cough
- Headache and muscle aches
- Gastrointestinal symptoms

## Diagnosis

- **Chest X-ray** - Shows areas of consolidation (whiteness)
- **Blood tests** - Elevated white blood cell count
- **Sputum culture** - Identifies the bacteria causing infection
- **Blood cultures** - For severe cases
- **Pulse oximetry** - Measures blood oxygen levels`,
      keyTerms: [
        { term: 'consolidation', definition: 'When lung tissue fills with fluid or pus instead of air, appearing white on X-ray' },
        { term: 'alveoli', definition: 'Microscopic air sacs at the end of bronchioles where gas exchange occurs' },
        { term: 'pleuritic pain', definition: 'Sharp chest pain that worsens with breathing or coughing' },
        { term: 'sputum', definition: 'Mucus and other material coughed up from the lungs' },
      ],
      analogies: [
        'Pneumonia turns your lungs from light sponges into heavy, water-soaked sponges.',
        'The air sacs are like tiny grapes on a stem; pneumonia causes them to fill with pus instead of air.',
      ],
    },
    3: {
      level: 3,
      summary: 'Pneumonia involves inflammatory exudate filling alveolar spaces due to pathogen invasion, with classification by setting (community vs hospital), pathogen type, and radiographic pattern, requiring targeted antimicrobial therapy and supportive care.',
      explanation: `## Pathophysiology

### Inflammatory Cascade
1. **Pathogen invasion** - Microorganisms reach alveoli via inhalation, aspiration, or hematogenous spread
2. **Innate immune response** - Alveolar macrophages recognize pathogens via PRRs
3. **Cytokine release** - IL-1, IL-6, IL-8, TNF-alpha recruit neutrophils
4. **Exudate formation** - Protein-rich fluid fills alveolar spaces
5. **Consolidation** - Airspaces filled with inflammatory cells and fluid

### Impaired Gas Exchange
- Alveolar filling causes V/Q mismatch
- Shunting of blood through non-ventilated areas
- Hypoxemia results

## Microbiology by Setting

**Community-Acquired:**
| Typical | Atypical |
|---------|----------|
| S. pneumoniae | Mycoplasma pneumoniae |
| H. influenzae | Chlamydophila pneumoniae |
| Moraxella catarrhalis | Legionella pneumophila |
| S. aureus | Viruses |

**Hospital-Acquired:**
- Pseudomonas aeruginosa
- Klebsiella pneumoniae
- Acinetobacter
- MRSA
- Often multidrug-resistant

## Severity Assessment

**CURB-65 Score:**
- **C**onfusion
- **U**rea >7 mmol/L (BUN >20)
- **R**espiratory rate >=30
- **B**lood pressure (SBP <90 or DBP <=60)
- Age >=**65**

Score 0-1: Outpatient
Score 2: Short hospital stay or close outpatient follow-up
Score 3-5: Hospital admission, consider ICU

## Treatment Principles

**Community-Acquired (outpatient):**
- Amoxicillin 1g three times daily
- Doxycycline or macrolide if penicillin-allergic

**Community-Acquired (inpatient):**
- Ceftriaxone + azithromycin
- Respiratory fluoroquinolone (levofloxacin, moxifloxacin)

**Hospital-Acquired:**
- Piperacillin-tazobactam or cefepime
- Add vancomycin or linezolid if MRSA risk
- Consider double coverage for Pseudomonas`,
      keyTerms: [
        { term: 'V/Q mismatch', definition: 'Ventilation-perfusion mismatch; areas of lung receive blood flow but no ventilation' },
        { term: 'PRRs', definition: 'Pattern recognition receptors on immune cells that detect pathogen-associated molecular patterns' },
        { term: 'exudate', definition: 'Protein-rich inflammatory fluid that leaks from blood vessels into tissues' },
        { term: 'CURB-65', definition: 'Clinical prediction rule for mortality in community-acquired pneumonia' },
      ],
      clinicalNotes: 'S. pneumoniae remains the most common cause of community-acquired pneumonia in all age groups. Always consider COVID-19 and influenza in appropriate seasons. Legionella should be suspected in outbreaks or with GI symptoms/diarrhea.',
    },
    4: {
      level: 4,
      summary: 'Pneumonia encompasses complex host-pathogen interactions with diverse clinical presentations based on pathogen virulence factors and host immune status, requiring risk stratification, empiric antimicrobial selection based on likely pathogens, and management of complications including parapneumonic effusions and respiratory failure.',
      explanation: `## Advanced Pathophysiology

### Host Defense Mechanisms
**Upper airway defenses:**
- Nasal filtration and humidification
- Cough reflex
- Mucociliary escalator

**Lower airway defenses:**
- Alveolar macrophages (primary)
- Surfactant proteins (SP-A, SP-D) - opsonization
- Neutrophil recruitment (secondary)
- Adaptive immune response

### Pathogen Virulence Factors

**S. pneumoniae:**
- Polysaccharide capsule (anti-phagocytic)
- Pneumolysin (cytotoxin)
- Autolysin (cell wall degradation)

**Pseudomonas:**
- Biofilm formation
- Type III secretion system
- Multiple antibiotic resistance mechanisms

**Influenza:**
- Hemagglutinin (cell entry)
- Neuraminidase (cell exit)
- Secondary bacterial infection facilitation

## Radiographic Patterns

**Lobar pneumonia:**
- Consolidation of entire lobe
- Classic for S. pneumoniae
- Air bronchograms visible

**Bronchopneumonia:**
- Patchy, multifocal infiltrates
- More common in elderly and debilitated
- S. aureus, gram-negatives

**Interstitial pneumonia:**
- Reticular or reticulonodular pattern
- Typical for viral and atypical

## Complications

**Pleural complications:**
- Parapneumonic effusion (exudative)
- Complicated parapneumonic effusion
- Empyema (pus in pleural space)

**Parenchymal complications:**
- Lung abscess (especially with aspiration or S. aureus)
- Necrotizing pneumonia

**Systemic complications:**
- Sepsis and septic shock
- Acute respiratory distress syndrome (ARDS)
- Metastatic infection (endocarditis, meningitis)

## Special Populations

**Immunocompromised:**
- PCP (Pneumocystis) in HIV with CD4 <200
- CMV, fungal infections
- TB reactivation

**Aspiration risk:**
- Anaerobic coverage (clindamycin, ampicillin-sulbactam)
- Lower lobes and posterior segments
- Higher abscess risk`,
      keyTerms: [
        { term: 'parapneumonic effusion', definition: 'Pleural effusion associated with underlying pneumonia; may progress to empyema' },
        { term: 'empyema', definition: 'Collection of pus in the pleural space' },
        { term: 'air bronchogram', definition: 'Radiographic sign showing air-filled bronchi outlined by consolidated lung tissue' },
        { term: 'mucociliary escalator', definition: 'Coordinated ciliary movement that moves mucus and trapped particles out of airways' },
      ],
      clinicalNotes: 'Look for empyema when fever persists >48-72 hours despite antibiotics. Chest tube drainage is indicated for complicated effusions (pH <7.2, glucose <40, LDH >1000, or positive culture). Consider lung abscess with anaerobic infection, alcoholism, or poor dentition.',
    },
    5: {
      level: 5,
      summary: 'Contemporary pneumonia management integrates molecular diagnostics, biomarker-guided therapy, multidrug-resistant organism risk stratification, and lung-protective ventilation strategies, with emerging approaches in immunomodulation and precision antimicrobial selection.',
      explanation: `## Advanced Diagnostics

### Molecular Testing
**Multiplex PCR panels:**
- Rapid identification of viral and bacterial pathogens
- Detection of antibiotic resistance genes (mecA, vanA)
- Influences empiric therapy decisions
- BioFire FilmArray, ePlex platforms

**Procalcitonin:**
- <0.1 mcg/L: Bacterial infection unlikely
- >0.25 mcg/L: Suggests bacterial infection
- >0.5 mcg/L: Strong bacterial component
- Guides antibiotic discontinuation

**Beta-D-glucan and galactomannan:**
- Fungal infection markers
- PCP, invasive aspergillosis

### Biomarker-Guided Therapy
- CRP trends for treatment response
- Procalcitonin for antibiotic stewardship
- MRSA nasal PCR to de-escalate vancomycin

## Multidrug-Resistant Organisms

**Risk factors for resistant organisms:**
- Prior hospitalization (>2 days within 90 days)
- Antibiotic use within 90 days
- High local resistance rates
- Immunosuppression

**Empiric strategies:**
- Piperacillin-tazobactam + vancomycin (broad coverage)
- Consider adding coverage for ESBL if risk factors
- Newer beta-lactam/beta-lactamase combinations (ceftolozane-tazobactam, meropenem-vaborbactam)

## Critical Care Management

### Severe Pneumonia Criteria
- Septic shock requiring vasopressors
- Respiratory failure requiring mechanical ventilation

### Mechanical Ventilation
**Lung-protective strategy:**
- Low tidal volumes (6 mL/kg predicted body weight)
- Plateau pressure <30 cm H2O
- Appropriate PEEP
- Prone positioning for severe ARDS

**Adjunctive therapies:**
- Conservative fluid strategy
- Corticosteroids (controversial; may help in refractory shock)

## Immunomodulation

**Corticosteroids:**
- Evidence mixed for community-acquired pneumonia
- May reduce mortality in severe cases
- Hydrocortisone for refractory septic shock

**IVIG:**
- Consider for severe S. aureus or streptococcal
- Uncertain benefit

## Novel Therapeutics

**New antibiotics:**
- Lefamulin (pleuromutilin class)
- Omadacycline (tetracycline derivative)
- Delafloxacin (fluoroquinolone)

**Immunotherapy:**
- Anti-inflammatory strategies
- Mesenchymal stem cells (investigational)

## Prevention

**Vaccination:**
- Pneumococcal (PCV20, PPSV23 based on age/risk)
- Annual influenza
- COVID-19 boosters

**Aspiration precautions:**
- Head of bed elevation
- Swallow evaluation
- Oral care protocols`,
      keyTerms: [
        { term: 'procalcitonin', definition: 'Precursor protein to calcitonin; biomarker elevated in bacterial infections, useful for antibiotic stewardship' },
        { term: 'multiplex PCR', definition: 'Molecular diagnostic test detecting multiple pathogens simultaneously from respiratory samples' },
        { term: 'ESBL', definition: 'Extended-spectrum beta-lactamase; enzyme conferring resistance to most beta-lactam antibiotics' },
        { term: 'mecA gene', definition: 'Gene encoding altered penicillin-binding protein conferring methicillin resistance in S. aureus' },
      ],
      clinicalNotes: 'Consider MRSA nasal PCR testing to help de-escalate vancomycin in HAP/VAP. Procalcitonin <0.25 mcg/L or a drop of >80% supports antibiotic discontinuation. For severe CAP requiring ICU admission, always cover atypical pathogens in addition to typical bacteria.',
    },
  },

  media: [
    {
      id: 'pneumonia-chest-xray',
      type: 'image',
      filename: 'pneumonia-consolidation.jpg',
      title: 'Chest X-ray showing lobar pneumonia',
      description: 'Right lower lobe consolidation with air bronchograms',
    },
  ],

  citations: [
    {
      id: 'idsa-cap-2019',
      type: 'article',
      title: 'Diagnosis and Treatment of Adults with Community-acquired Pneumonia',
      authors: ['Metlay JP', 'Waterer GW'],
      source: 'Clinical Infectious Diseases',
    },
  ],

  crossReferences: [
    { targetId: 'condition-copd', targetType: 'condition', relationship: 'related', label: 'COPD' },
    { targetId: 'condition-asthma', targetType: 'condition', relationship: 'related', label: 'Asthma' },
  ],

  tags: {
    systems: ['respiratory', 'immune'],
    topics: ['infectious disease', 'pulmonology', 'critical care'],
    keywords: ['pneumonia', 'infection', 'consolidation', 'alveoli', 'antibiotics'],
    clinicalRelevance: 'critical',
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default pneumonia;
