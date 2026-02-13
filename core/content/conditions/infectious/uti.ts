/**
 * Urinary Tract Infection - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const uti: EducationalContent = {
  id: 'condition-urinary-tract-infection',
  type: 'condition',
  name: 'Urinary Tract Infection',
  nameEs: 'Infección del Tracto Urinario',
  alternateNames: ['UTI', 'Bladder Infection', 'Cystitis'],
  hpoId: 'HP:0000010',

  levels: {
    1: {
      level: 1,
      summary: 'A urinary tract infection is when bacteria get into your bladder or kidneys, causing pain with urination and the urge to urinate frequently.',
      explanation: `UTIs are very common, especially in women. They happen when bacteria (usually from the gut) enter the urinary tract.

**Symptoms:**
- Burning or pain when urinating
- Frequent urge to urinate
- Cloudy or strong-smelling urine
- Pelvic pain
- Blood in urine

**Treatment:** Antibiotics prescribed by a doctor

**Prevention:**
- Drink plenty of water
- Urinate after sex
- Wipe front to back
- Avoid holding urine too long`,
      keyTerms: [
        { term: 'UTI', definition: 'Infection in the bladder, urethra, or kidneys' },
        { term: 'cystitis', definition: 'Infection of the bladder' },
      ],
      analogies: ['Bacteria traveling up the urethra is like unwanted guests walking through an open door into your house.'],
      examples: ['A woman with burning urination, frequency, and urgency likely has a UTI.'],
    },
    2: {
      level: 2,
      summary: 'UTIs are classified as uncomplicated (cystitis in healthy women) or complicated (associated with structural/functional abnormalities or host factors), with treatment duration and agent selection based on classification.',
      explanation: `## Classification

**Uncomplicated UTI:**
- Healthy non-pregnant women
- Lower tract (cystitis)

**Complicated UTI:**
- Men, pregnant women, children
- Structural abnormalities
- Catheter-associated
- Pyelonephritis (kidney infection)

## Diagnosis
- Symptoms: Dysuria, frequency, urgency
- Urinalysis: Pyuria, bacteriuria, nitrites, leukocyte esterase
- Urine culture: ≥10^5 CFU/mL (or ≥10^3 in symptomatic)

## Treatment (Uncomplicated Cystitis)
- Nitrofurantoin 100mg BID x 5 days (first-line)
- TMP-SMX DS BID x 3 days (if resistance <20%)
- Fosfomycin 3g single dose

## Pyelonephritis
- Outpatient: Fluoroquinolone x 5-7 days
- Inpatient: IV antibiotics, imaging if not improving`,
      keyTerms: [
        { term: 'dysuria', definition: 'Painful or difficult urination' },
        { term: 'pyelonephritis', definition: 'Kidney infection; upper UTI' },
        { term: 'pyuria', definition: 'White blood cells in urine indicating inflammation/infection' },
      ],
    },
    3: {
      level: 3,
      summary: 'UTI pathogenesis involves uropathogenic E. coli virulence factors, host susceptibility, and biofilm formation on catheters, with antibiotic stewardship balancing empiric coverage and resistance concerns.',
      explanation: `## Pathogenesis
- **UPEC (Uropathogenic E. coli):** 80% of community UTI
- **Virulence factors:** Type 1 pili (FimH), P fimbriae, toxins
- **Host factors:** Short urethra, sexual activity, menopause, obstruction
- **Biofilms:** Catheter colonization, treatment resistance

## Microbiology
| Setting | Common Pathogens |
|---------|------------------|
| Community | E. coli (80%), K. pneumoniae, Proteus |
| Healthcare | E. coli, Enterococcus, Pseudomonas, Candida |
| Complicated | Mixed flora, resistant organisms |

## Resistance Considerations
- Fluoroquinolone resistance increasing
- ESBL-producing organisms
- Regional antibiograms guide empiric therapy

## Catheter-Associated UTI (CAUTI)
- Symptomatic + catheter >2 days
- Remove/replace catheter before treatment
- Do not treat asymptomatic bacteriuria in catheterized patients`,
      keyTerms: [
        { term: 'UPEC', definition: 'Uropathogenic E. coli; primary cause of community UTI' },
        { term: 'ESBL', definition: 'Extended-spectrum beta-lactamase; enzyme causing resistance to many antibiotics' },
        { term: 'CAUTI', definition: 'Catheter-associated urinary tract infection' },
      ],
      clinicalNotes: 'Asymptomatic bacteriuria should NOT be treated except in pregnancy or before urologic procedures. Nitrofurantoin is preferred for uncomplicated cystitis to preserve broader agents.',
    },
    4: {
      level: 4,
      summary: 'Complex UTI management addresses recurrent infections, multidrug resistance, special populations (pregnancy, transplant), and non-antibiotic prevention strategies.',
      explanation: `## Recurrent UTI
**Definition:** ≥2 UTIs in 6 months or ≥3 in 12 months

**Prophylaxis Options:**
- Postcoital prophylaxis (nitrofurantoin, TMP-SMX)
- Continuous low-dose prophylaxis
- Patient-initiated therapy (self-start)

**Non-Antibiotic Prevention:**
- Cranberry products (modest evidence)
- D-mannose
- Vaginal estrogen (postmenopausal)
- Methenamine

## Resistant Organisms
- ESBL: Carbapenems, fosfomycin, nitrofurantoin may retain activity
- Carbapenem-resistant: Ceftazidime-avibactam, meropenem-vaborbactam

## Special Populations
**Pregnancy:**
- Screen and treat asymptomatic bacteriuria
- Safe agents: Nitrofurantoin (avoid near term), cephalosporins, amoxicillin

**Transplant:**
- Higher risk of pyelonephritis
- Consider prophylaxis`,
      keyTerms: [
        { term: 'methenamine', definition: 'Non-antibiotic urinary antiseptic for prophylaxis' },
        { term: 'D-mannose', definition: 'Sugar supplement that may prevent bacterial adhesion' },
        { term: 'postcoital prophylaxis', definition: 'Single antibiotic dose after intercourse to prevent UTI' },
      ],
      clinicalNotes: 'Vaginal estrogen is underutilized for recurrent UTI in postmenopausal women—consider before long-term antibiotics.',
    },
    5: {
      level: 5,
      summary: 'Future UTI management explores vaccines, microbiome-targeted approaches, novel antivirulence strategies, and understanding of intracellular bacterial reservoirs driving recurrence.',
      explanation: `## Vaccine Development
- FimH-based vaccines (targeting adhesion)
- Bioconjugate vaccines
- Challenge: Antigenic diversity

## Microbiome Approaches
- Urinary microbiome ("urobiome") discovery
- Probiotic instillation
- Vaginal microbiome optimization

## Novel Targets
**Antivirulence:**
- FimH antagonists (prevent adhesion)
- Toxin inhibitors
- Quorum sensing inhibitors

**Biofilm Disruption:**
- DNase, dispersin B
- Phage therapy

## Intracellular Bacterial Communities (IBCs)
- UPEC can form reservoirs inside bladder cells
- May explain recurrence despite adequate treatment
- Target for future therapies

## Diagnostics
- Rapid molecular testing for resistance genes
- Point-of-care UTI diagnosis
- Distinguish colonization from infection`,
      keyTerms: [
        { term: 'IBC', definition: 'Intracellular bacterial communities; protected reservoirs within bladder cells' },
        { term: 'urobiome', definition: 'Microbiome of the urinary tract' },
        { term: 'antivirulence', definition: 'Therapy targeting bacterial virulence factors rather than killing bacteria' },
      ],
      clinicalNotes: 'Intracellular bacterial reservoirs may explain why some women have frequent recurrence despite appropriate treatment. Vaccine development continues with FimH as leading target.',
    },
  },

  media: [],
  citations: [{ id: 'idsa-uti-2011', type: 'article', title: 'IDSA Guidelines for Uncomplicated UTI', source: 'Clinical Infectious Diseases' }],
  crossReferences: [{ targetId: 'condition-pyelonephritis', targetType: 'condition', relationship: 'related', label: 'Pyelonephritis' }],
  tags: { systems: ['renal', 'urinary'], topics: ['infectious disease', 'urology'], keywords: ['UTI', 'cystitis', 'bladder infection', 'dysuria'], clinicalRelevance: 'high', examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'family medicine'] } },
  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default uti;
