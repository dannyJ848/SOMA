/**
 * Pneumonia Pathology - Respiratory Pathology
 *
 * Pathological features of various types of pneumonia including bacterial,
 * viral, fungal, and aspiration pneumonia.
 */

import { EducationalContent } from '../../types';

export const pneumoniaPathologyContent: EducationalContent = {
  id: 'pathology-pneumonia',
  type: 'condition',
  name: 'Pneumonia Pathology',
  alternateNames: ['Lung Inflammation Pathology', 'Pneumonitis', 'Pulmonary Infection Pathology'],

  levels: {
    1: {
      level: 1,
      summary: 'Pneumonia is an infection in the lungs that causes the air sacs to fill with fluid or pus, seen under the microscope as inflammation and consolidation of lung tissue.',
      explanation: `## What Is Pneumonia Pathology?

Pneumonia pathology is what doctors see when they look at lung tissue affected by pneumonia under a microscope. It helps them understand what type of infection is causing the problem.

### What Happens in the Lungs?

**Normal Alveoli:**
- Tiny air sacs with thin walls
- Filled with air
- Clear and open
- Allow oxygen to enter blood

**In Pneumonia:**
- Alveoli fill with fluid or pus
- Walls become inflamed and thickened
- Air spaces get blocked
- Harder for oxygen to get through

### Main Types Seen Under Microscope

**Lobar Pneumonia:**
- Affects a large section (lobe) of the lung
- Usually caused by bacteria
- Whole lobe becomes solid
- Like liver tissue (hepatization)

**Bronchopneumonia:**
- Scattered patches around airways
- Multiple small areas affected
- Common in elderly and young children
- Starts around bronchi

**Interstitial Pneumonia:**
- Affects the walls between alveoli
- Usually caused by viruses
- Makes walls thick and inflamed
- More diffuse pattern

### What You See Under the Microscope

**In Bacterial Pneumonia:**
- Many neutrophils (pus cells)
- Bacteria may be visible
- Fibrin (protein strands)
- Red blood cells
- Fluid filling spaces

**In Viral Pneumonia:**
- Lymphocytes (different white cells)
- Thickened alveolar walls
- Sometimes giant cells
- Less pus than bacterial

**Healing Phase:**
- Macrophages (cleanup cells)
- Breaking down debris
- Tissue repair beginning
- Gradual return to normal`,
      keyTerms: [
        { term: 'consolidation', definition: 'When lung tissue becomes solid instead of air-filled' },
        { term: 'alveoli', definition: 'Tiny air sacs in the lungs' },
        { term: 'neutrophils', definition: 'White blood cells that fight bacterial infection' },
        { term: 'hepatization', definition: 'When lung tissue looks like liver due to consolidation' },
        { term: 'interstitial', definition: 'The tissue and spaces around the alveoli' },
      ],
      analogies: [
        'Pneumonia consolidation is like a sponge getting soaked with water - it becomes heavy and cannot hold air.',
        'Neutrophils are like firefighters rushing to put out a fire - they come in large numbers to fight bacteria.',
        'Lobar pneumonia is like painting a whole wall, while bronchopneumonia is like small spots of paint scattered around.',
      ],
      examples: [
        'In Streptococcus pneumoniae infection, the alveoli fill with fibrin and neutrophils, creating red hepatization then gray hepatization.',
        'In COVID-19 pneumonia, the interstitial spaces become thickened with inflammation and the alveoli fill with protein-rich fluid.',
      ],
    },
    2: {
      level: 2,
      summary: 'Pneumonia pathology shows characteristic patterns including lobar consolidation, bronchopneumonia, and interstitial pneumonitis. The inflammatory infiltrate and distribution help identify the causative agent.',
      explanation: `## Pathological Patterns of Pneumonia

### Lobar Pneumonia

**Characteristics:**
- Involves entire lobe or segment
- Uniform consolidation
- Bacterial origin (typically S. pneumoniae)
- Air bronchograms visible radiographically

**Stages of Lobar Pneumonia:**

**Congestion (24 hours):**
- Engorged vessels
- Serous exudate
- Few neutrophils
- Bacteria present

**Red Hepatization (2-3 days):**
- Alveoli filled with fibrin, neutrophils, RBCs
- Solid consistency
- Gross appearance like liver
- Active infection

**Gray Hepatization (4-6 days):**
- RBCs lysed
- Fibrin and neutrophils persist
- Macrophages appear
- Bacteria decreasing

**Resolution (7+ days):**
- Enzymatic digestion of exudate
- Macrophage clearance
- Restoration of architecture
- May leave organization if delayed

### Bronchopneumonia (Lobular Pneumonia)

**Characteristics:**
- Patchy distribution
- Centered on bronchioles
- Multifocal, bilateral
- Common in children and elderly

**Microscopic Features:**
- Acute bronchiolitis
- Surrounding alveolar suppuration
- Patchy consolidation
- Abscess formation possible

### Interstitial Pneumonia

**Characteristics:**
- Alveolar walls thickened
- Intra-alveolar exudate minimal
- Viral or atypical bacterial
- Diffuse involvement

**Microscopic Features:**
- Lymphocytic infiltrate
- Alveolar wall edema
- Type II pneumocyte hyperplasia
- Hyaline membranes in severe cases

### Community-Acquired vs Hospital-Acquired

**Community-Acquired:**
- S. pneumoniae most common
- Often lobar pattern
- Single pathogen typical

**Hospital-Acquired:**
- Gram-negative rods common
- Aspiration component
- Often polymicrobial
- Bronchopneumonia pattern

### Special Stains for Pathogens

**Gram Stain:**
- Bacterial classification
- Gram-positive vs gram-negative
- Morphology (cocci, rods)

**Silver Stains:**
- Fungi (GMS)
- Pneumocystis jirovecii
- Legionella (Dieterle)

**Immunohistochemistry:**
- Viral antigens
- Specific bacterial detection
- Fungal markers

**Molecular Methods:**
- PCR on tissue
- In situ hybridization
- 16S rRNA sequencing`,
      keyTerms: [
        { term: 'lobar pneumonia', definition: 'Pneumonia affecting an entire lobe with uniform consolidation' },
        { term: 'bronchopneumonia', definition: 'Patchy pneumonia centered on bronchioles' },
        { term: 'hepatization', definition: 'Liver-like appearance of consolidated lung' },
        { term: 'suppuration', definition: 'Pus formation with neutrophil accumulation' },
        { term: 'hyaline membranes', definition: 'Proteinaceous material lining alveoli in diffuse damage' },
      ],
      analogies: [
        'Lobar pneumonia is like a flood covering an entire room uniformly, while bronchopneumonia is like puddles scattered around.',
        'Red hepatization is like the lung turning into raw liver in color and consistency.',
        'The stages of lobar pneumonia are like phases of cleanup after a disaster - first congestion, then cleanup, then restoration.',
      ],
      examples: [
        'Klebsiella pneumonia often shows bulging fissures and can lead to lung abscess formation with tissue destruction.',
        'Staphylococcal pneumonia frequently results in pneumatocele formation and abscesses due to tissue necrosis.',
      ],
    },
    3: {
      level: 3,
      summary: 'Detailed pneumonia pathology covers specific organisms and their patterns, necrotizing infections, organizing pneumonia, and the differential diagnosis of acute lung injury patterns.',
      explanation: `## Specific Pathogen Patterns

### Streptococcus pneumoniae

**Typical Features:**
- Lobar consolidation
- Fibrinosuppurative exudate
- Capsular swelling visible
- Rapid progression through stages

**Variants:**
- Confluent bronchopneumonia in children/elderly
- Sympathetic effusions common
- Empyema in 2-3%

### Staphylococcus aureus

**Necrotizing Features:**
- Abscess formation
- Pneumatoceles
- Bronchopleural fistulas
- Hemorrhagic necrosis

**Coagulase Effect:**
- Tissue destruction
- Panton-Valentine leukocidin (PVL)
- Necrotizing pneumonia
- Cavitation

### Klebsiella pneumoniae

**Characteristics:**
- Thick, mucoid sputum
- "Currant jelly" appearance
- Bulging fissure sign
- Abscess formation
- Frequent necrosis

### Pseudomonas aeruginosa

**Features:**
- Necrotizing vasculitis
- Hemorrhagic nodules
- Blue-green pigment
- Biofilm formation
- Hospital-acquired typical

### Legionella pneumophila

**Pathology:**
- Fibrinopurulent pneumonia
- Dieterle silver stain positive
- Organisms in macrophages
- Vasculitis present
- Microabscesses

### Mycoplasma pneumoniae

**Features:**
- Bronchopneumonia pattern
- Interstitial prominence
- Bronchiolitis
- Mucosal ulceration
- Diffuse alveolar damage possible

### Viral Pneumonia Patterns

**Influenza:**
- Diffuse alveolar damage
- Hyaline membranes
- Hemorrhage
- Secondary bacterial common

**COVID-19:**
- Diffuse alveolar damage
- Organizing pneumonia pattern
- Microthrombi
- Multinucleated syncytial cells
- Type II pneumocyte hyperplasia

**CMV:**
- Cytomegaly (enlarged cells)
- Owl\'s eye inclusions
- Microscopic infarcts
- Immunocompromised hosts

**RSV:**
- Syncytia formation
- Bronchiolitis
- Intracellular inclusions
- Infants and elderly

### Fungal Pneumonias

**Pneumocystis jirovecii:**
- Foamy alveolar exudate
- Interstitial inflammation
- GMS stain positive
- Cysts visible

**Aspergillus:**
- Angioinvasion
- Necrosis
- Septate hyphae
- 45-degree branching

**Histoplasma:**
- Granulomatous inflammation
- Macrophage predilection
- Yeast forms
- Calcification in chronic

### Necrotizing Pneumonia

**Features:**
- Tissue destruction
- Abscess cavities
- Putrid smell (anaerobes)
- Gangrene possible
- Common organisms:
  - S. aureus
  - Klebsiella
  - Anaerobes
  - Type III pneumococcus

### Organizing Pneumonia (COP)

**Pattern:**
- Loose fibrous plugs in alveoli
- Masson bodies
- Patchy distribution
- Peribronchiolar
- Preserved architecture
- Response to steroids

### Differential Diagnosis

**ARDS:**
- Diffuse alveolar damage
- Non-infectious triggers
- Similar to severe pneumonia

**Pulmonary Hemorrhage:**
- Blood-filled alveoli
- Hemosiderin-laden macrophages
- Vasculitis features

**Acute Eosinophilic Pneumonia:**
- Eosinophil-rich exudate
- Diffuse alveolar damage
- No organisms

**Drug-Induced Pneumonitis:**
- Pattern depends on drug
- Eosinophils possible
- Clinical correlation needed`,
      keyTerms: [
        { term: 'pneumatocele', definition: 'Thin-walled air-filled cyst in the lung' },
        { term: 'diffuse alveolar damage', definition: 'Pattern of acute lung injury with hyaline membranes and inflammation' },
        { term: ' organizing pneumonia', definition: 'Pattern with fibroblastic plugs in alveolar spaces and bronchioles' },
        { term: 'Masson body', definition: 'Fibroblastic plug in organizing pneumonia' },
        { term: 'vasculitis', definition: 'Inflammation and necrosis of blood vessel walls' },
      ],
      clinicalNotes: 'Organizing pneumonia pattern (previously called bronchiolitis obliterans organizing pneumonia or BOOP) is a histologic pattern with multiple etiologies including infection, drugs, radiation, and collagen vascular disease. It is important to identify the underlying cause rather than just the pattern.',
    },
    4: {
      level: 4,
      summary: 'Advanced pneumonia pathology includes granulomatous infections, aspiration syndromes, immunocompromised host patterns, complications like empyema and abscess, and the pathology of emerging infections.',
      explanation: `## Granulomatous Pneumonias

### Tuberculosis

**Primary TB:**
- Ghon focus (peripheral lung)
- Hilar lymphadenopathy
- Caseating granulomas
- May heal with calcification

**Secondary (Reactivation) TB:**
- Upper lobe predilection
- Cavitation
- Caseous necrosis
- Endobronchial spread
- "Tree-in-bud" pattern

**Microscopic Features:**
- Central caseation
- Epithelioid histiocytes
- Langhans giant cells
- Lymphocyte rim
- Acid-fast bacilli (Ziehl-Neelsen)

### Atypical Mycobacteria

**M. kansasii:**
- Similar to TB histologically
- Less virulent
- Cavitary disease

**M. avium complex:**
- Non-cavitary (immunocompetent)
- Hot tub lung (hypersensitivity)
- Granulomas with less necrosis

**Immunocompromised pattern:**
- Poorly formed granulomas
- Foamy macrophages
- Minimal necrosis
- Organisms abundant

### Fungal Granulomas

**Coccidioidomycosis:**
- Spherules with endospores
- Mixed granulomatous reaction
- Eosinophils common
- Desert Southwest endemic

**Blastomycosis:**
- Broad-based budding yeasts
- Suppurative granulomas
- Ohio/Mississippi River valleys

**Cryptococcosis:**
- Encapsulated yeasts
- India ink negative in tissue
- Mucicarmine positive
- Gelatinous or granulomatous

### Aspiration Pneumonia

**Acute Aspiration:**
- Foreign material in airways
- Chemical pneumonitis
- Acute inflammation
- Often resolves without infection

**Infectious Aspiration:**
- Mixed oral flora
- Anaerobes predominant
- Necrosis common
- Abscess formation
- Putrid odor

**Distribution:**
- Dependent segments
- Right > left
- Posterior segments upper lobes
- Superior segments lower lobes

### Immunocompromised Host

**Neutropenia:**
- Angioinvasive fungi
- Hemorrhagic infarcts
- Minimal inflammatory response
- Hyphal organisms

**HIV/AIDS:**
- Pneumocystis pneumonia
- CMV
- TB (atypical patterns)
- MAC
- Fungal infections

**Transplant:**
- CMV
- Community pathogens
- Opportunistic infections
- Post-transplant lymphoproliferative disorder

**Corticosteroid Therapy:**
- Pneumocystis
- Aspergillus
- Nocardia
- TB reactivation

### Complications

**Pleural Effusion:**
- Parapneumonic (exudative)
- Complicated (loculated, pH <7.2)
- Empyema (pus)
- Fibrinopurulent stage
- Organization stage

**Lung Abscess:**
- Necrosis with cavitation
- Cavity with pus
- Fibrous wall
- Chronic inflammation
- May be sterile

**Necrotizing Pneumonia:**
- Widespread destruction
- Multiple abscesses
- Gangrene
- Bronchopleural fistula
- Mortality high

**ARDS:**
- Diffuse alveolar damage
- Progression from pneumonia
- Hyaline membranes
- Organization phase

### Emerging Infections

**SARS-CoV-2:**
- Diffuse alveolar damage
- Organizing pneumonia
- Thrombotic microangiopathy
- Syncytial cells
- Viral cytopathic effect

**MERS-CoV:**
- Similar to SARS
- Multinucleated cells
- Severe DAD
- High mortality

**Novel Influenza:**
- Severe DAD
- Hemorrhage
- Secondary bacterial

### Special Techniques

**Immunohistochemistry:**
- Pneumocystis (Dako monoclonal)
- CMV, HSV
- Influenza antigens
- Fungal markers

**In Situ Hybridization:**
- EBV (EBER)
- CMV
- HPV

**Electron Microscopy:**
- Viral particles
- Rarely needed
- Research applications

**Molecular Diagnostics:**
- 16S rRNA sequencing
- Panfungal PCR
- Viral PCR panels
- Metagenomic sequencing`,
      keyTerms: [
        { term: 'caseation', definition: 'Cheese-like necrosis characteristic of TB granulomas' },
        { term: 'angioinvasion', definition: 'Invasion of blood vessel walls by fungi or other organisms' },
        { term: 'parapneumonic effusion', definition: 'Pleural effusion associated with pneumonia' },
        { term: 'empyema', definition: 'Collection of pus in the pleural space' },
        { term: 'spherule', definition: 'Round fungal structure containing endospores (Coccidioides)' },
      ],
      clinicalNotes: 'In immunocompromised patients, the inflammatory response may be minimal despite severe infection. Look for organisms even when inflammation is scant. Special stains and molecular methods are essential in this population.',
    },
    5: {
      level: 5,
      summary: 'Expert pneumonia pathology integrates molecular diagnostics, biomarker studies, understanding of host-pathogen interactions, drug resistance mechanisms, and autopsy findings in fatal cases.',
      explanation: `## Molecular Pathology of Pneumonia

**Microbiome Analysis:**
- 16S rRNA sequencing
- Shotgun metagenomics
- Bacterial communities
- Dysbiosis in disease

**Host Response Profiling:**
- Gene expression signatures
- Cytokine patterns
- Innate immune markers
- Prognostic indicators

### Antimicrobial Resistance

**MRSA Pneumonia:**
- mecA gene detection
- PVL toxin presence
- Necrotizing features
- SCCmec typing

**Drug-Resistant TB:**
- Rifampin resistance (rpoB)
- Isoniazid (katG, inhA)
- XDR-TB definition
- Whole genome sequencing

**ESBL and Carbapenemase:**
- Beta-lactam resistance
- KPC, NDM, VIM, IMP
- Plasmid-mediated
- Infection control implications

### Viral Pathogenesis

**SARS-CoV-2 Variants:**
- Spike protein mutations
- Delta, Omicron pathology
- Severity differences
- Tissue tropism

**Influenza Pathogenesis:**
- Hemagglutinin binding
- Neuraminidase release
- Cytokine storm
- Secondary bacterial synergy

**HIV-Associated:**
- CD4 depletion
- Opportunistic patterns
- IRIS (immune reconstitution)
- Viral reservoir

### Biomarkers in Pneumonia

**Diagnosis:**
- Procalcitonin (bacterial)
- CRP (inflammation)
- Viral PCR panels
- Pneumococcal antigen

**Prognosis:**
- MR-proADM
- Procalcitonin kinetics
- Lactate
- Endothelial markers

### Host-Pathogen Interactions

**Innate Immunity:**
- Pattern recognition receptors
- TLR signaling
- Inflammasome activation
- NET formation

**Adaptive Immunity:**
- T cell responses
- Humoral immunity
- Memory formation
- Vaccine development

**Genetic Susceptibility:**
- IFN-gamma pathway
- Mannose-binding lectin
- CFTR (cystic fibrosis)
- Alpha-1 antitrypsin

### Autopsy Pathology

**Fatal Pneumonia:**
- Extent of involvement
- Complications
- Secondary changes
- Treatment effects

**COVID-19 Autopsy Findings:**
- Diffuse alveolar damage
- Microthrombi
- Organizing pneumonia
- Viral persistence
- Multisystem involvement

**SUDI (Sudden Unexpected Death in Infancy):**
- Occult infection
- Viral identification
- Immune response
- Risk factors

### Research Frontiers

**Single-Cell Analysis:**
- Alveolar macrophage subtypes
- Epithelial responses
- Endothelial activation
- Immune cell infiltration

**Spatial Transcriptomics:**
- Regional differences
- Infection gradients
- Host response mapping
- Therapy targets

**Organoid Models:**
- Air-liquid interface
- Infection modeling
- Drug testing
- Personalized medicine

**Artificial Intelligence:**
- Pattern recognition
- Quantitative pathology
- Predictive algorithms
- Automated screening

### Forensic Aspects

**Aspiration Evidence:**
- Food particles
- Foreign material
- Gastric contents markers
- Distribution patterns

**Timing of Infection:**
- Acute vs chronic changes
- Organization stage
- Healing indicators
- Antemortem vs postmortem

### Quality and Standards

**Tissue Handling:**
- Rapid fixation
- Microbiology coordination
- Molecular preservation
- Biosafety considerations

**Reporting Standards:**
- Structured templates
- Synoptic reports
- Grading systems
- Molecular integration

### Global Health Considerations

**TB Burden:**
- Developing world patterns
- HIV co-infection
- Drug resistance
- Diagnostic challenges

**Tropical Pathogens:**
- Paragonimiasis
- Melioidosis
- Leptospirosis
- Histoplasmosis

**Emerging Zoonoses:**
- Hantavirus
- Avian influenza
- Nipah virus
- Preparedness needs`,
      keyTerms: [
        { term: 'metagenomics', definition: 'Sequencing of all genetic material in a sample to identify pathogens' },
        { term: 'PVL', definition: 'Panton-Valentine leukocidin; toxin produced by some MRSA causing necrosis' },
        { term: 'cytokine storm', definition: 'Excessive immune response with high cytokine levels' },
        { term: 'IRIS', definition: 'Immune reconstitution inflammatory syndrome; paradoxical worsening with treatment' },
        { term: 'spatial transcriptomics', definition: 'Mapping gene expression while preserving tissue location' },
      ],
      clinicalNotes: `Key insights in pneumonia pathology:

1. **Molecular diagnostics:** Rapid identification of pathogens and resistance genes is transforming pneumonia diagnosis, especially in critical illness.

2. **COVID-19 pathology:** The combination of diffuse alveolar damage, organizing pneumonia, and thrombotic microangiopathy distinguishes severe COVID-19 from other viral pneumonias.

3. **Immunocompromised patterns:** Recognition of specific patterns (angioinvasion in neutropenia, granuloma quality in HIV) guides appropriate workup even with minimal inflammation.

4. **Antimicrobial resistance:** Molecular detection of resistance mechanisms (mecA, ESBL genes, rpoB mutations) guides therapy and infection control.

5. **Host factors:** Understanding genetic susceptibility and host response patterns enables personalized approaches to prevention and treatment.

6. **Organizing pneumonia:** This histologic pattern has many causes; thorough clinical-pathologic correlation is essential to identify the etiology.

7. **Autopsy value:** Despite advances in antemortem diagnosis, autopsy remains the gold standard for understanding fatal pneumonia and identifying complications.`,
    },
  },

  media: [],

  citations: [
    {
      id: 'katzenstein-pneumonia',
      type: 'textbook',
      title: 'Katzenstein and Askin\'s Surgical Pathology of Non-Neoplastic Lung Disease',
      authors: ['Katzenstein AL'],
      source: 'Saunders',
    },
    {
      id: 'covid-pathology',
      type: 'article',
      title: 'Pulmonary Pathology of Early-Phase 2019 Novel Coronavirus (COVID-19) Pneumonia',
      authors: ['Tian S', 'Hu W', 'Niu L', 'et al.'],
      source: 'Journal of Thoracic Oncology',
    },
  ],

  crossReferences: [
    { targetId: 'condition-pneumonia', targetType: 'condition', relationship: 'related', label: 'Pneumonia' },
    { targetId: 'pathology-copd-pathology', targetType: 'condition', relationship: 'related', label: 'COPD Pathology' },
    { targetId: 'histology-alveolar-structure', targetType: 'structure', relationship: 'related', label: 'Alveolar Structure' },
  ],

  tags: {
    systems: ['respiratory'],
    topics: ['pathology', 'infectious-disease', 'pulmonology'],
    keywords: ['pneumonia', 'infection', 'consolidation', 'inflammation', 'pathology'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'pathology'],
    },
  },

  createdAt: '2026-01-28T12:00:00.000Z',
  updatedAt: '2026-01-28T12:00:00.000Z',
  version: 1,
  status: 'published',
};

export default pneumoniaPathologyContent;
