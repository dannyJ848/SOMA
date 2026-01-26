/**
 * Urinary Tract Infections (UTIs) - Comprehensive Educational Content
 *
 * Covers epidemiology, pathophysiology, diagnosis, and management of
 * urinary tract infections from uncomplicated cystitis to urosepsis.
 */

import { EducationalContent } from '../../types';

export const urinaryTractInfections: EducationalContent = {
  id: 'condition-urinary-tract-infections',
  type: 'condition',
  name: 'Urinary Tract Infections',
  alternateNames: ['UTI', 'Bladder Infection', 'Cystitis', 'Pyelonephritis', 'Kidney Infection'],

  levels: {
    1: {
      level: 1,
      summary: 'A urinary tract infection (UTI) is when germs get into your urinary system and cause an infection, usually making it painful to pee.',
      explanation: `A urinary tract infection, or UTI, happens when bacteria (tiny germs) get into your urinary system - the parts of your body that make and release urine (pee).

**What Parts Can Get Infected?**
- **Bladder infection (most common)**: Called cystitis - the bladder is the bag that holds your pee
- **Kidney infection (more serious)**: Called pyelonephritis - the kidneys filter your blood to make urine
- **Urethra infection**: The tube that carries pee out of your body

**Common Symptoms:**
- Burning or pain when you pee
- Needing to pee very often, even when little comes out
- Pee that looks cloudy or has a strong smell
- Pain in your lower belly (bladder area)
- Blood in your urine (pink or red pee)
- For kidney infections: fever, back pain, feeling very sick

**Who Gets UTIs?**
- Girls and women get UTIs much more often than boys and men (shorter urethra)
- Anyone can get a UTI, but some things increase risk
- Holding your pee for too long can increase risk

**Prevention Tips:**
- Drink plenty of water
- Pee when you need to - don't hold it
- Wipe front to back (for girls)
- Pee after sex
- Wear cotton underwear

**Treatment:**
UTIs are treated with antibiotics (medicine that kills bacteria). Most bladder infections clear up in a few days with the right medicine.`,
      keyTerms: [
        { term: 'urinary tract infection (UTI)', definition: 'An infection caused by germs in any part of your urinary system' },
        { term: 'cystitis', definition: 'An infection of the bladder', pronunciation: 'sis-TY-tis' },
        { term: 'pyelonephritis', definition: 'An infection of the kidney', pronunciation: 'py-uh-loh-nef-RY-tis' },
        { term: 'bacteria', definition: 'Tiny germs that can cause infections' },
      ],
      analogies: [
        'Your urinary system is like plumbing in a house - when bacteria get in, it is like getting gunk in the pipes that causes problems.',
        'Drinking water helps flush out bacteria like using water to clean out a clogged drain.',
      ],
      examples: [
        'A woman notices burning when she pees and has to go to the bathroom every 30 minutes - this is a typical bladder UTI.',
        'A child with high fever and back pain might have a kidney infection, which is more serious than a bladder infection.',
      ],
    },
    2: {
      level: 2,
      summary: 'UTIs are bacterial infections of the urinary tract, classified by location (lower vs upper tract) and complexity, with E. coli being the most common causative organism.',
      explanation: `## Classification of UTIs

**By Location:**
- **Lower UTI (cystitis)**: Infection of bladder and urethra
- **Upper UTI (pyelonephritis)**: Infection of kidneys and/or ureters

**By Complexity:**
- **Uncomplicated**: Occurs in healthy, non-pregnant women with normal urinary tract anatomy
- **Complicated**: Occurs with factors that increase infection risk or treatment failure
  - Male gender
  - Pregnancy
  - Urinary tract abnormalities
  - Kidney stones
  - Catheter use
  - Diabetes or immunosuppression

## Pathophysiology

**How Bacteria Cause UTIs:**
1. Bacteria from the gut (especially E. coli) colonize the periurethral area
2. Bacteria ascend the urethra into the bladder
3. Bacteria adhere to bladder wall using special proteins (adhesins)
4. Bacteria multiply faster than the bladder can flush them out
5. In pyelonephritis, bacteria ascend ureters to reach kidneys

**Risk Factors:**
- Female anatomy (shorter urethra, 4cm vs 20cm in males)
- Sexual activity ("honeymoon cystitis")
- Menopause (loss of protective estrogen effects)
- Urinary retention or obstruction
- Catheter use
- Diabetes mellitus

## Clinical Presentation

**Cystitis (Lower UTI):**
- Dysuria (painful urination)
- Frequency and urgency
- Suprapubic pain/pressure
- Cloudy or foul-smelling urine
- Hematuria (blood in urine)
- No fever (distinguishes from pyelonephritis)

**Pyelonephritis (Upper UTI):**
- All cystitis symptoms PLUS:
- Fever and chills
- Flank pain (costovertebral angle tenderness)
- Nausea and vomiting
- Systemic illness

## Diagnosis

**Urinalysis Findings:**
- Pyuria: White blood cells in urine (>10 WBC/hpf)
- Bacteriuria: Bacteria visible on microscopy
- Positive nitrites: Indicates Gram-negative bacteria
- Positive leukocyte esterase: Indicates WBCs

**Urine Culture:**
- Identifies specific bacteria
- Provides antibiotic susceptibilities
- Positive: ≥10^5 CFU/mL (or lower in symptomatic patients)

## Treatment

**Uncomplicated Cystitis:**
- Nitrofurantoin (5-7 days)
- Trimethoprim-sulfamethoxazole (3 days)
- Fosfomycin (single dose)
- Avoid fluoroquinolones for uncomplicated UTI (save for serious infections)

**Pyelonephritis:**
- Fluoroquinolones (ciprofloxacin or levofloxacin)
- Ceftriaxone followed by oral antibiotics
- Duration: 7-14 days
- May require hospitalization if severe`,
      keyTerms: [
        { term: 'dysuria', definition: 'Pain or burning sensation during urination', pronunciation: 'dis-YOO-ree-ah' },
        { term: 'pyuria', definition: 'Presence of white blood cells in urine, indicating infection or inflammation', pronunciation: 'py-YOO-ree-ah' },
        { term: 'bacteriuria', definition: 'Presence of bacteria in urine', pronunciation: 'bak-teer-ee-YOO-ree-ah' },
        { term: 'hematuria', definition: 'Blood in the urine', pronunciation: 'hee-mah-TOO-ree-ah' },
        { term: 'costovertebral angle', definition: 'The area where the lowest rib meets the spine; tender in kidney infections' },
      ],
      analogies: [
        'The urethra is like a short hallway that bacteria must travel - shorter in women means easier access for bacteria.',
        'Pyuria is like finding white blood cell "soldiers" in the urine, showing the immune system is fighting an invader.',
      ],
    },
    3: {
      level: 3,
      summary: 'UTIs represent a spectrum from asymptomatic bacteriuria to urosepsis, with uropathogenic E. coli (UPEC) employing specific virulence factors including type 1 fimbriae and P pili to establish infection against host defenses.',
      explanation: `## Microbiology

**Common Uropathogens:**
| Organism | Frequency | Notes |
|----------|-----------|-------|
| E. coli | 75-95% | Most common, especially UPEC strains |
| Klebsiella pneumoniae | 5-10% | Second most common Gram-negative |
| Proteus mirabilis | 3-5% | Associated with struvite stones |
| Staphylococcus saprophyticus | 5-15% (young women) | Second most common in young women |
| Enterococcus species | 2-5% | More common with catheter use |
| Pseudomonas aeruginosa | 2-5% | Healthcare-associated UTIs |

**Uropathogenic E. coli (UPEC) Virulence Factors:**
1. **Type 1 fimbriae (FimH adhesin)**: Binds uroplakin on bladder epithelium
2. **P pili (PapG adhesin)**: Binds globoseries glycolipids; associated with pyelonephritis
3. **Alpha-hemolysin**: Cytotoxin causing tissue damage
4. **Siderophores**: Iron acquisition systems (e.g., aerobactin, enterobactin)
5. **Capsule**: Antiphagocytic K antigens
6. **Flagella**: Motility for ascending infection

## Host Defense Mechanisms

**Innate Defenses:**
- Urine flow (washout effect)
- Uroepithelial shedding (exfoliation of infected cells)
- Tamm-Horsfall protein (uromodulin): Binds type 1 fimbriae
- Secretory IgA
- Antimicrobial peptides (defensins, cathelicidin)
- Toll-like receptors (TLR4 recognizes LPS)

**Why Women Are More Susceptible:**
- Shorter urethra (4cm vs 20cm)
- Proximity of urethral meatus to vagina and anus
- Lack of prostatic secretions (contain antimicrobial zinc)
- Sexual activity facilitates bacterial inoculation
- Hormonal effects on vaginal flora

## Diagnostic Workup

**Urinalysis Interpretation:**
- Pyuria: >10 WBC/hpf (or >10 WBC/μL by automated count)
- Bacteriuria: Any bacteria on Gram stain suggests ≥10^5 CFU/mL
- Nitrite: Positive indicates nitrate-reducing bacteria (most Gram-negatives)
- Leukocyte esterase: Enzyme released by WBCs; ~75% sensitivity

**Urine Culture Thresholds:**
- Classic threshold: ≥10^5 CFU/mL
- Symptomatic women: ≥10^2 CFU/mL may be significant
- Catheter specimens: ≥10^3 CFU/mL
- Suprapubic aspirate: Any growth significant

**Imaging Indications:**
- Recurrent UTIs in children (rule out reflux, anatomic abnormalities)
- Complicated pyelonephritis not responding to antibiotics
- Suspected abscess, obstruction, or emphysematous pyelonephritis
- CT with contrast is imaging modality of choice for adults

## Complicated UTI Considerations

**Catheter-Associated UTI (CAUTI):**
- Biofilm formation on catheter surface
- Polymicrobial infections common
- Remove or replace catheter before treatment
- Only treat if symptomatic (not asymptomatic bacteriuria)

**UTI in Pregnancy:**
- Screen all pregnant women for asymptomatic bacteriuria
- Treat asymptomatic bacteriuria (risk of pyelonephritis, preterm labor)
- Safe antibiotics: Nitrofurantoin (avoid at term), cephalosporins, amoxicillin
- Avoid: Fluoroquinolones, trimethoprim (first trimester)

**UTI in Men:**
- All UTIs in men considered complicated
- Evaluate for underlying cause (BPH, stones, stricture)
- Longer treatment duration (7-14 days)
- Consider prostatitis in recurrent cases`,
      keyTerms: [
        { term: 'UPEC', definition: 'Uropathogenic E. coli - strains with specific virulence factors enabling urinary tract colonization' },
        { term: 'P pili', definition: 'Pyelonephritis-associated pili that bind to kidney epithelium via PapG adhesin', pronunciation: 'P PIE-lie' },
        { term: 'type 1 fimbriae', definition: 'Bacterial appendages with FimH adhesin binding mannose residues on uroepithelium' },
        { term: 'Tamm-Horsfall protein', definition: 'Abundant urinary glycoprotein that binds type 1 fimbriae, providing defense against UTI' },
        { term: 'asymptomatic bacteriuria', definition: 'Bacteria in urine without UTI symptoms; treat only in pregnancy and before urologic procedures' },
      ],
      clinicalNotes: 'Treat asymptomatic bacteriuria only in pregnancy and before urologic procedures. Catheter-associated bacteriuria without symptoms should not be treated with antibiotics. Proteus UTIs are associated with struvite stone formation due to urease production.',
    },
    4: {
      level: 4,
      summary: 'UTI pathogenesis involves dynamic host-pathogen interactions at the uroepithelial interface, with intracellular bacterial communities enabling persistence, and host genetic polymorphisms in innate immune receptors influencing susceptibility to recurrent infections.',
      explanation: `## Advanced Pathogenesis

**Intracellular Bacterial Communities (IBCs):**
1. UPEC invade superficial umbrella cells via type 1 fimbriae-mediated endocytosis
2. Bacteria replicate in membrane-bound compartments
3. Form biofilm-like IBCs (10^4-10^5 bacteria/cell)
4. Bacteria flux out, re-invade deeper transitional cells
5. Form quiescent intracellular reservoirs (QIRs)
6. QIRs can persist for months, causing recurrent UTIs

**Immune Evasion Mechanisms:**
- K capsule: Inhibits complement deposition, phagocytosis
- O-antigen modification: Serum resistance
- LPS modifications: Evade TLR4 recognition
- Suppression of cytokine responses via type III secretion effectors
- Antibiotic tolerance in IBCs (biofilm-like phenotype)

**Host Genetic Susceptibility:**
| Gene | Polymorphism | Effect |
|------|--------------|--------|
| TLR4 | Asp299Gly | Decreased LPS recognition, increased UTI risk |
| TLR1, TLR2 | Various SNPs | Altered Gram-positive recognition |
| CXCR1 | Low expression | Impaired neutrophil chemotaxis |
| IRF3 | Loss of function | Impaired interferon response |
| NLRP3 | Gain of function | Excessive inflammation |

## Recurrent UTI Management

**Definitions:**
- Recurrent UTI: ≥2 infections in 6 months OR ≥3 in 12 months
- Relapse: Same organism within 2 weeks (treatment failure)
- Reinfection: Different organism or same organism >2 weeks later

**Evaluation for Recurrent UTI:**
1. Confirm diagnosis (cultures, not just symptoms)
2. Identify modifiable risk factors
3. Imaging rarely indicated unless complicated features
4. Cystoscopy if hematuria persists or atypical presentation

**Prophylaxis Strategies:**
1. **Continuous prophylaxis:**
   - Nitrofurantoin 50-100mg nightly
   - TMP-SMX 40/200mg nightly
   - Duration: 6-12 months

2. **Post-coital prophylaxis:**
   - Single dose after intercourse
   - Effective for sexually active women

3. **Patient-initiated therapy:**
   - Self-start antibiotics at symptom onset
   - Appropriate for motivated patients with reliable diagnosis

4. **Non-antibiotic approaches:**
   - Vaginal estrogen (postmenopausal women)
   - Cranberry products (modest evidence)
   - D-mannose (binds FimH)
   - Methenamine hippurate (urinary antiseptic)
   - Lactobacillus probiotics

## Antibiotic Resistance Patterns

**Current Resistance Concerns:**
- ESBL-producing E. coli: ~10-20% of UTIs in some regions
- Fluoroquinolone resistance: 20-30% in many areas
- TMP-SMX resistance: ~20% (check local antibiogram)

**Treatment of Resistant Organisms:**
- ESBL producers: Carbapenems (severe), fosfomycin, nitrofurantoin (uncomplicated)
- Fluoroquinolone-resistant: Use alternative agents based on susceptibilities
- MDR organisms: ID consultation, consider combination therapy

**Antibiogram Principles:**
- Use local susceptibility data to guide empiric therapy
- Hospital vs community antibiograms differ
- Outpatient UTI antibiograms may differ from inpatient data

## Complicated Pyelonephritis

**Emphysematous Pyelonephritis:**
- Gas-forming infection, usually in diabetics
- E. coli, Klebsiella most common
- CT shows intrarenal gas
- High mortality (20-40%)
- Management: IV antibiotics + drainage/nephrectomy

**Renal Abscess:**
- Usually from ascending infection or hematogenous spread
- <3cm: IV antibiotics, may resolve
- ≥3cm: Percutaneous drainage + antibiotics
- Risk factors: Diabetes, obstruction, prior instrumentation

**Pyonephrosis:**
- Infected, obstructed collecting system (surgical emergency)
- Requires urgent decompression (nephrostomy or stent)
- Antibiotics alone insufficient`,
      keyTerms: [
        { term: 'intracellular bacterial community (IBC)', definition: 'Biofilm-like clusters of bacteria within bladder epithelial cells that enable persistence and recurrence' },
        { term: 'quiescent intracellular reservoir (QIR)', definition: 'Dormant bacteria in deeper uroepithelial cells serving as source for recurrent UTIs' },
        { term: 'emphysematous pyelonephritis', definition: 'Severe, gas-forming necrotizing infection of kidney, associated with diabetes and high mortality' },
        { term: 'pyonephrosis', definition: 'Infected, obstructed urinary collecting system requiring emergent drainage' },
        { term: 'ESBL', definition: 'Extended-spectrum beta-lactamase - enzyme conferring resistance to most cephalosporins' },
      ],
      clinicalNotes: 'Pyonephrosis requires emergent decompression - antibiotics alone will not resolve an infected, obstructed system. In ESBL UTI, nitrofurantoin and fosfomycin retain activity for uncomplicated cases. Always remove/replace urinary catheters when treating CAUTI.',
    },
    5: {
      level: 5,
      summary: 'Contemporary UTI management integrates understanding of uroepithelial cell biology, IBC-mediated persistence mechanisms, host-microbiome interactions, pharmacogenomic considerations, and antimicrobial stewardship principles to address rising resistance while optimizing outcomes.',
      explanation: `## Molecular Pathogenesis and Persistence

**Uroepithelial Cell Biology:**
- Umbrella cells: Highly differentiated, uroplakin-covered apical surface
- Intermediate cells: Less differentiated, serve as reservoir target
- Basal cells: Stem cell population, regenerate epithelium
- Exfoliation: Host defense mechanism triggered by infection (caspase activation)

**IBC Lifecycle (Mulvey Model):**
1. **Binding and invasion**: FimH binds uroplakin/α3β1 integrin → endocytosis
2. **Escape from endosome**: Bacteria escape to cytoplasm
3. **Early IBC**: Loose bacterial clusters, rapid replication
4. **Biofilm-like IBC**: Dense, organized communities with matrix
5. **Filamentation and dispersal**: Bacteria flux out in filamentous forms
6. **Re-invasion**: Secondary infection cycle or QIR formation

**Implications for Treatment:**
- Antibiotics may clear planktonic bacteria but not IBCs
- Intracellular penetration important (fluoroquinolones vs beta-lactams)
- QIRs explain asymptomatic periods between recurrences
- FimH adhesin-based vaccines in clinical trials

## Microbiome Considerations

**Urinary Microbiome:**
- Historically thought sterile; now known to harbor low-biomass community
- "Urotypes" identified: Lactobacillus-dominant (protective?), Gardnerella-dominant, diverse
- Dysbiosis may predispose to UTI
- Antibiotics disrupt urinary and vaginal microbiomes

**Vaginal Microbiome and UTI:**
- Lactobacillus dominance protective
- H2O2-producing strains inhibit uropathogens
- Vaginal estrogen restores Lactobacillus in postmenopausal women
- Intravaginal lactobacillus probiotics show modest efficacy

## Advanced Diagnostics

**Point-of-Care Testing:**
- Dipstick: 75-90% sensitivity (pyuria + nitrite combined)
- POCT UTI panels: PCR-based, results in 30 minutes
- Limitations: Cannot provide susceptibilities

**Molecular Diagnostics:**
- Multiplex PCR panels detect pathogens and resistance genes
- Direct from urine (no culture wait)
- Identify ESBL, carbapenemase genes rapidly
- Emerging: Sequencing-based pathogen identification

**Biomarkers for Pyelonephritis:**
- Procalcitonin: Elevated in upper tract infection
- IL-6, IL-8: Correlate with severity
- Distinguish cystitis from pyelonephritis in ambiguous cases

## Antimicrobial Stewardship in UTI

**Guideline-Based Treatment:**
1. **Uncomplicated cystitis (IDSA/ESCMID):**
   - First-line: Nitrofurantoin 100mg BID × 5 days
   - First-line: TMP-SMX 160/800mg BID × 3 days (if resistance <20%)
   - First-line: Fosfomycin 3g single dose
   - Second-line: Fluoroquinolones (avoid for uncomplicated UTI)

2. **Uncomplicated pyelonephritis:**
   - Outpatient: Ciprofloxacin 500mg BID × 7 days or levofloxacin 750mg daily × 5 days
   - Alternative: TMP-SMX × 14 days (if susceptible)
   - Inpatient: Ceftriaxone, fluoroquinolone, or aminoglycoside initially

3. **Complicated UTI:**
   - Broader spectrum initially
   - Narrow based on culture results
   - Address underlying factors (obstruction, catheter, stones)

**Duration Optimization:**
- Cystitis: 3-5 days for most agents
- Pyelonephritis: 5-7 days with fluoroquinolones may be sufficient
- CAUTI: 7 days (remove catheter)
- Male UTI: 7-14 days (varies by prostate involvement)

## Emerging Therapeutics and Vaccines

**FimH Inhibitors:**
- Mannosides that block FimH adhesion
- Prevent colonization without killing bacteria (no resistance pressure)
- Phase 2 trials ongoing

**Vaccine Development:**
- Uromune (sublingual E. coli extract): Promising European data
- FimCH vaccine: Target adhesin complex
- ExPEC4V: Four-antigen E. coli vaccine
- Challenge: Serotype diversity of uropathogens

**Bacteriophage Therapy:**
- Phages targeting E. coli, Klebsiella in development
- Compassionate use for MDR infections
- PhagoBurn trial: Results mixed, delivery challenges

**Anti-Biofilm Strategies:**
- Dispersin B: Degrades biofilm matrix
- Quorum sensing inhibitors
- Catheter coatings (silver, antimicrobial)

## Special Populations

**Renal Transplant Recipients:**
- High UTI incidence (30-60% in first year)
- Immunosuppression, urologic complications (reflux, obstruction)
- Higher risk of pyelonephritis and urosepsis
- May require longer treatment courses
- Screen and treat asymptomatic bacteriuria (controversial)

**Spinal Cord Injury:**
- Neurogenic bladder requires catheterization
- Chronic bacteriuria universal; treat only symptomatic UTI
- Atypical symptoms: Increased spasticity, autonomic dysreflexia
- Intermittent catheterization preferred over indwelling

**Diabetes Mellitus:**
- 2-3× increased UTI risk
- Impaired neutrophil function
- Higher risk of complications (emphysematous pyelonephritis)
- Glycosuria may promote bacterial growth`,
      keyTerms: [
        { term: 'FimH adhesin', definition: 'Mannose-binding tip protein of type 1 fimbriae; vaccine and drug target for UTI prevention' },
        { term: 'urotype', definition: 'Characteristic urinary microbiome composition that may influence UTI susceptibility' },
        { term: 'mannosides', definition: 'Mannose-derived compounds that competitively inhibit FimH-mediated bacterial adhesion' },
        { term: 'autonomic dysreflexia', definition: 'Potentially life-threatening sympathetic response to noxious stimuli (including UTI) in spinal cord injury patients' },
        { term: 'PhagoBurn', definition: 'Clinical trial of bacteriophage therapy for burn wound infections; demonstrates challenges of phage delivery' },
      ],
      clinicalNotes: `**Clinical Pearls for Board Exams:**
- Nitrofurantoin achieves high urinary concentrations but inadequate tissue/blood levels - not for pyelonephritis
- Fosfomycin is effective against ESBL-producing organisms for uncomplicated cystitis
- In spinal cord injury patients, increased spasticity or autonomic dysreflexia may be only UTI sign
- Emphysematous pyelonephritis: CT shows gas, usually diabetic, requires drainage
- FimH vaccines target the most critical UPEC virulence factor for bladder colonization
- Treat asymptomatic bacteriuria only in: pregnancy, before urologic procedures`,
    },
  },

  media: [
    {
      id: 'uti-pathogenesis',
      type: 'diagram',
      filename: 'uti-pathogenesis.svg',
      title: 'UTI Pathogenesis Pathway',
      description: 'Ascending infection from periurethral colonization to bladder and kidney',
    },
    {
      id: 'upec-virulence-factors',
      type: 'diagram',
      filename: 'upec-virulence-factors.svg',
      title: 'UPEC Virulence Factors',
      description: 'Type 1 fimbriae, P pili, and other factors enabling urinary tract colonization',
    },
    {
      id: 'urinalysis-interpretation',
      type: 'diagram',
      filename: 'urinalysis-interpretation.svg',
      title: 'Urinalysis Interpretation Guide',
      description: 'Key findings in UTI: pyuria, bacteriuria, nitrites, leukocyte esterase',
    },
  ],

  citations: [
    {
      id: 'idsa-uti-guidelines',
      type: 'article',
      title: 'International Clinical Practice Guidelines for the Treatment of Acute Uncomplicated Cystitis and Pyelonephritis in Women',
      authors: ['Gupta K', 'Hooton TM', 'Naber KG', 'et al.'],
      source: 'Clinical Infectious Diseases',
      chapter: '52(5):e103-e120',
      url: 'https://doi.org/10.1093/cid/ciq257',
    },
    {
      id: 'campbell-walsh-uti',
      type: 'textbook',
      title: 'Infections of the Urinary Tract',
      source: 'Campbell-Walsh-Wein Urology',
      chapter: '55-57',
      license: 'Elsevier',
    },
    {
      id: 'mulvey-ibc-review',
      type: 'article',
      title: 'Establishment of a Persistent Escherichia coli Reservoir during the Acute Phase of a Bladder Infection',
      authors: ['Mulvey MA', 'Schilling JD', 'Hultgren SJ'],
      source: 'Infection and Immunity',
      chapter: '69(7):4572-4579',
    },
  ],

  crossReferences: [
    { targetId: 'structure-urinary-tract-anatomy', targetType: 'structure', relationship: 'related', label: 'Urinary Tract Anatomy' },
    { targetId: 'condition-kidney-stones', targetType: 'condition', relationship: 'related', label: 'Kidney Stones' },
    { targetId: 'condition-benign-prostatic-hyperplasia', targetType: 'condition', relationship: 'related', label: 'BPH' },
    { targetId: 'infectious-disease-bacterial-overview', targetType: 'topic', relationship: 'parent', label: 'Bacterial Infections' },
  ],

  tags: {
    systems: ['urinary', 'renal'],
    topics: ['infectious-disease', 'urology', 'nephrology'],
    keywords: ['UTI', 'cystitis', 'pyelonephritis', 'E. coli', 'antibiotics', 'UPEC'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery', 'family-medicine', 'ob-gyn'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default urinaryTractInfections;
