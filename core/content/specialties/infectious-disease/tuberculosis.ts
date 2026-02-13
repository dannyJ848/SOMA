import { EducationalContent } from '../../types';

export const tuberculosis: EducationalContent = {
  id: 'infectious-disease-tuberculosis',
  type: 'concept',
  name: 'Tuberculosis',
  alternateNames: ['TB', 'Mycobacterium tuberculosis', 'Consumption'],

  levels: {
    1: {
      level: 1,
      summary: 'Tuberculosis (TB) is a bacterial infection that usually affects the lungs, spread through the air when an infected person coughs or sneezes, and can be cured with antibiotics taken for several months.',
      explanation: `Tuberculosis (TB) is an infection caused by bacteria called Mycobacterium tuberculosis. It has affected humans for thousands of years and remains one of the leading causes of death from infection worldwide.

**How TB Spreads:**
- Through tiny droplets in the air when someone with active TB coughs, sneezes, speaks, or sings
- You have to breathe in the bacteria
- It does NOT spread by shaking hands, sharing food, or touching surfaces

**Two Types of TB:**

*Latent TB:*
- Bacteria are in your body but "sleeping"
- You do not feel sick
- You cannot spread TB to others
- May "wake up" later, especially if immune system weakens

*Active TB:*
- Bacteria are multiplying and making you sick
- Usually affects the lungs (pulmonary TB)
- Can spread to others
- Needs treatment right away

**Symptoms of Active TB:**
- Cough lasting more than 3 weeks
- Coughing up blood
- Chest pain
- Night sweats
- Fever
- Weight loss and loss of appetite
- Feeling very tired

**Who Is at Risk?**
- Close contacts of someone with active TB
- People with weakened immune systems (HIV, diabetes, certain medications)
- People from countries where TB is common
- Healthcare workers
- People in crowded living conditions

**Treatment:**
- Latent TB: Usually 3-9 months of antibiotics
- Active TB: Multiple antibiotics for 6 months or longer
- Must take ALL medications for the entire time to be cured
- Stopping early can create drug-resistant TB

**Prevention:**
- BCG vaccine (given in many countries, but not the US)
- Good ventilation
- Testing and treating latent TB before it becomes active`,
      keyTerms: [
        { term: 'tuberculosis', definition: 'An infection caused by Mycobacterium tuberculosis bacteria, usually affecting the lungs' },
        { term: 'latent TB', definition: 'TB infection where bacteria are present but not causing symptoms or spreading' },
        { term: 'active TB', definition: 'TB disease where bacteria are multiplying, causing symptoms, and potentially spreading' },
        { term: 'drug-resistant TB', definition: 'TB that does not respond to some of the standard antibiotics' },
      ],
      analogies: [
        'Latent TB is like a campfire that has been covered with dirt - the embers are still there, but not burning or spreading. If you remove the dirt (weaken the immune system), the fire can start up again.',
        'Taking TB medicine is like running a marathon - you have to finish the whole race, not just run until you feel better.',
      ],
      examples: [
        'Someone with HIV is more likely to have latent TB "wake up" and become active disease because their immune system is weakened.',
        'A healthcare worker who is exposed to a patient with TB should be tested to see if they need treatment for latent TB.',
      ],
    },
    2: {
      level: 2,
      summary: 'Tuberculosis is a granulomatous infection caused by Mycobacterium tuberculosis, characterized by primary infection, latent infection, and potential reactivation, requiring prolonged multidrug therapy.',
      explanation: `Tuberculosis (TB) remains a major global health challenge. Understanding its pathophysiology and treatment is essential for medical practice.

**Mycobacterium tuberculosis Characteristics:**
- Acid-fast bacillus (retains carbolfuchsin stain)
- Slow-growing (doubling time 15-24 hours)
- Aerobic, non-spore forming
- Cell wall rich in mycolic acids (waxy, resistant)
- Intracellular pathogen (survives in macrophages)

**Transmission:**
- Respiratory droplet nuclei (1-5 micrometers)
- Require prolonged exposure typically
- Infectivity depends on cavitary disease, cough frequency, ventilation
- Not transmitted by fomites

**Pathogenesis:**

*Primary Infection:*
1. Inhaled bacteria reach alveoli
2. Engulfed by alveolar macrophages
3. Bacteria replicate within macrophages
4. Spread to hilar lymph nodes
5. Cell-mediated immunity develops (2-8 weeks)
6. Granuloma formation contains bacteria

*Ghon Complex:* Primary focus + hilar lymphadenopathy
*Ranke Complex:* Calcified Ghon complex

*Latent TB Infection (LTBI):*
- Bacteria contained in granulomas
- Positive TST or IGRA
- No symptoms, no transmission
- Lifetime reactivation risk: 5-10%

*Reactivation/Active TB:*
- Occurs when immunity fails to contain infection
- Upper lobes most common (high oxygen tension)
- Cavitary disease highly infectious

**Clinical Manifestations:**

*Pulmonary TB (Most Common):*
- Chronic cough (>2-3 weeks)
- Hemoptysis
- Night sweats, fever
- Weight loss, anorexia
- Upper lobe infiltrates, cavitation

*Extrapulmonary TB:*
- Lymph node TB (scrofula)
- Pleural TB
- Skeletal TB (Pott disease - spine)
- Miliary TB (disseminated)
- TB meningitis
- Genitourinary TB

**Diagnosis:**

*For LTBI:*
- Tuberculin skin test (TST/PPD)
- Interferon-gamma release assays (IGRAs): QuantiFERON, T-SPOT

*For Active TB:*
- Chest X-ray
- Sputum smear (acid-fast stain)
- Sputum culture (gold standard, takes weeks)
- Nucleic acid amplification tests (Xpert MTB/RIF)
- Histopathology: Caseating granulomas

**Treatment Basics:**
- Active TB: 4 drugs initially (RIPE: Rifampin, Isoniazid, Pyrazinamide, Ethambutol)
- Duration: 6-9 months typically
- LTBI: Various regimens (3-9 months)
- Directly Observed Therapy (DOT) often used`,
      keyTerms: [
        { term: 'acid-fast', definition: 'Staining property of mycobacteria that resist decolorization by acid-alcohol due to mycolic acid in cell wall' },
        { term: 'granuloma', definition: 'Organized collection of immune cells (macrophages, T cells) that walls off infection' },
        { term: 'caseating', definition: 'Cheese-like necrosis in center of TB granuloma; characteristic of tuberculosis' },
        { term: 'TST (tuberculin skin test)', definition: 'Intradermal injection of purified protein derivative (PPD); measures delayed hypersensitivity' },
        { term: 'IGRA', definition: 'Interferon-gamma release assay; blood test measuring T cell response to TB antigens' },
      ],
      analogies: [
        'A granuloma is like a prison for bacteria - your immune system builds a wall around them, but they are not killed, just contained.',
        'The waxy coat of TB bacteria is like armor that makes them hard to kill and hard to stain in the lab.',
      ],
    },
    3: {
      level: 3,
      summary: 'TB pathogenesis involves complex host-pathogen interactions including macrophage survival, granuloma formation, and cell-mediated immunity, with diagnosis requiring integration of clinical, radiographic, and microbiologic data.',
      explanation: `Understanding TB requires integration of immunology, microbiology, and clinical medicine.

**Immunopathogenesis:**

*Innate Immunity:*
- Alveolar macrophages: First line, ingest bacteria
- M. tuberculosis survives by inhibiting phagosome-lysosome fusion
- Cord factor (trehalose dimycolate): Virulence factor
- Pattern recognition: TLRs, NOD-like receptors

*Adaptive Immunity:*
- CD4+ T cells critical (explains HIV susceptibility)
- Th1 response: IFN-gamma activates macrophages
- TNF-alpha essential for granuloma maintenance
- CD8+ T cells contribute to bacterial killing

*Granuloma Structure:*
- Center: Infected macrophages, Langhans giant cells
- Surrounding: T lymphocytes
- Fibrotic capsule
- Caseation: Hypoxic, lipid-rich necrosis

*Failure of Containment:*
- HIV infection (CD4 depletion)
- TNF inhibitors (infliximab, etc.)
- Malnutrition
- Diabetes mellitus
- Chronic kidney disease
- Immunosuppressive therapy

**Diagnostic Testing:**

*Tuberculin Skin Test (TST):*
- 0.1 mL PPD intradermal
- Read at 48-72 hours (induration, not erythema)
- Interpretation by risk category:
  - ≥5 mm: HIV+, recent contacts, immunosuppressed
  - ≥10 mm: High-risk groups, healthcare workers
  - ≥15 mm: Low-risk individuals
- False positive: BCG, NTM
- False negative: Anergy, recent infection

*IGRAs (QuantiFERON-TB, T-SPOT):*
- Measure IFN-gamma to TB antigens (ESAT-6, CFP-10)
- Not affected by BCG vaccination
- Preferred in BCG-vaccinated individuals
- Less useful in immunocompromised (may be false negative)

*Microbiologic Diagnosis:*
- Smear: Acid-fast (Ziehl-Neelsen), fluorochrome
- Culture: Lowenstein-Jensen (solid), BACTEC (liquid) - 2-8 weeks
- NAAT: Xpert MTB/RIF (detects TB and rifampin resistance in 2 hours)
- Drug susceptibility testing (DST)

**Radiology:**

*Primary TB:*
- Lower or middle lobe consolidation
- Hilar/paratracheal lymphadenopathy
- Pleural effusion
- Ghon focus

*Reactivation TB:*
- Upper lobe infiltrates (apical/posterior)
- Cavitation
- Tree-in-bud pattern (endobronchial spread)

*Miliary TB:*
- Diffuse small nodules (millet seeds)
- Hematogenous dissemination

**Treatment Principles:**

*Why Multidrug Therapy:*
- Different bacterial populations (rapidly dividing, semi-dormant, intracellular)
- Prevent resistance emergence
- Each drug targets different population

*Drug Mechanisms:*
- Isoniazid: Mycolic acid synthesis (bactericidal)
- Rifampin: RNA polymerase inhibition (bactericidal)
- Pyrazinamide: Unknown (active at low pH, sterilizing)
- Ethambutol: Arabinogalactan synthesis (bacteriostatic)

*Standard Regimen (Drug-Susceptible TB):*
- Intensive phase: RIPE x 2 months
- Continuation phase: RI x 4 months
- Total: 6 months (longer for some extrapulmonary)`,
      keyTerms: [
        { term: 'Th1 response', definition: 'T helper cell response characterized by IFN-gamma production; critical for TB control' },
        { term: 'TNF-alpha', definition: 'Cytokine essential for granuloma formation; TNF inhibitors increase TB risk' },
        { term: 'ESAT-6/CFP-10', definition: 'TB-specific antigens absent from BCG; used in IGRA testing' },
        { term: 'Xpert MTB/RIF', definition: 'Rapid molecular test detecting TB and rifampin resistance in ~2 hours' },
        { term: 'tree-in-bud', definition: 'CT pattern of centrilobular nodules with branching; indicates endobronchial spread of TB' },
      ],
      clinicalNotes: 'Before starting TNF inhibitors, screen for LTBI with IGRA or TST. If positive, treat LTBI before or concurrent with biologic. Rifampin is a potent CYP450 inducer - check all drug interactions. Monitor LFTs on therapy (INH and RIF hepatotoxic).',
    },
    4: {
      level: 4,
      summary: 'TB management requires understanding of drug-resistant strains, treatment monitoring, and special population considerations, with drug-resistant TB requiring prolonged individualized regimens based on susceptibility.',
      explanation: `Advanced TB management requires expertise in drug resistance, special situations, and complex treatment decisions.

**Drug-Resistant TB:**

*Definitions:*
- Isoniazid-resistant: Resistant to INH only
- Rifampin-resistant (RR-TB): Resistant to rifampin +/- others
- Multidrug-resistant (MDR-TB): Resistant to INH + rifampin
- Pre-extensively drug-resistant (pre-XDR): MDR + fluoroquinolone OR injectable resistance
- Extensively drug-resistant (XDR-TB): MDR + fluoroquinolone + bedaquiline/linezolid

*Resistance Mechanisms:*
- katG mutation: High-level INH resistance
- inhA mutation: Low-level INH resistance
- rpoB mutation: Rifampin resistance
- pncA mutation: Pyrazinamide resistance

*Detection:*
- Xpert MTB/RIF: Detects rifampin resistance
- Line probe assays: INH and rifampin mutations
- Full DST: Gold standard

**MDR-TB Treatment:**

*WHO 2022 Regimen (BPaLM):*
- Bedaquiline (Bdq)
- Pretomanid (Pa)
- Linezolid (Lzd)
- Moxifloxacin (Mfx)
- Duration: 6 months (if susceptible)

*Longer Regimens (18-20 months):*
- Based on susceptibility
- Include: Fluoroquinolone, bedaquiline, linezolid, clofazimine, cycloserine
- Injectables (amikacin, streptomycin) now second-line due to toxicity

*Monitoring for Toxicity:*
- Bedaquiline: QTc prolongation
- Linezolid: Myelosuppression, peripheral neuropathy, optic neuritis
- Fluoroquinolones: QTc, tendinopathy
- Aminoglycosides: Ototoxicity, nephrotoxicity

**Treatment of LTBI:**

*Regimens (all options evidence-based):*
| Regimen | Duration | Notes |
|---------|----------|-------|
| INH + rifapentine weekly | 3 months (12 doses) | DOT; 3HP |
| Rifampin daily | 4 months | Good tolerability |
| INH daily | 6-9 months | Traditional; hepatotoxicity |
| INH + rifampin daily | 3 months | Alternative |

*Who to Treat:*
- Recent converters
- Close contacts of active TB
- HIV+ with positive test
- Before immunosuppression (TNF inhibitors, transplant)
- Fibrotic changes on CXR without prior treatment

**Special Situations:**

*TB-HIV Coinfection:*
- Start ART within 2 weeks if CD4 <50; within 8 weeks otherwise
- Rifampin + efavirenz; OR use rifabutin with PIs/INSTIs
- IRIS common (paradoxical TB-IRIS in 15-20%)
- Higher pill burden, drug interactions

*TB Meningitis:*
- Duration: 12 months
- Adjunctive dexamethasone reduces mortality
- Rifampin CSF penetration is adequate
- Consider fluoroquinolone (good CNS penetration)

*Pregnancy:*
- Active TB: Treat immediately with RIPE (avoid streptomycin)
- LTBI: Can treat with INH or defer until postpartum
- Pyrazinamide: WHO recommends; CDC historically avoided (limited data)

*Renal Impairment:*
- Adjust INH, pyrazinamide, ethambutol
- Rifampin not renally cleared

**Monitoring on Treatment:**

*Clinical:*
- Sputum smear and culture monthly until conversion
- Symptoms, weight, drug tolerance
- Most patients convert by 2 months

*Laboratory:*
- Baseline and monthly LFTs (especially if risk factors)
- Hold drugs if AST/ALT >5x ULN or symptomatic >3x ULN
- Recheck after resolution; reintroduce sequentially

*Visual Acuity:*
- Baseline before ethambutol
- Monthly if on >2 months or high dose

**Infection Control:**
- Airborne precautions (N95, negative pressure room)
- Continue until smear-negative or on effective therapy 2+ weeks with clinical improvement
- Public health notification and contact investigation`,
      keyTerms: [
        { term: 'MDR-TB', definition: 'Multidrug-resistant TB; resistant to at least isoniazid and rifampin' },
        { term: 'XDR-TB', definition: 'Extensively drug-resistant TB; MDR plus resistance to fluoroquinolone and bedaquiline/linezolid' },
        { term: 'bedaquiline', definition: 'Diarylquinoline targeting ATP synthase; key drug for MDR-TB (QTc monitoring)' },
        { term: '3HP', definition: 'Once-weekly INH + rifapentine for 12 weeks; preferred LTBI regimen' },
        { term: 'TB-IRIS', definition: 'Paradoxical worsening of TB after ART initiation due to immune reconstitution' },
      ],
      clinicalNotes: `**Clinical Pearls:**
- Rifampin turns body fluids orange (tears, urine) - warn patients
- Contact lenses may be permanently stained
- Rifampin interactions: Contraceptives, warfarin, many others
- Bedaquiline: Avoid with other QTc-prolonging drugs; get baseline and periodic ECG
- Linezolid: Limit duration if possible; monitor CBC weekly initially
- LTBI before biologics: Can start biologic 1-2 months into LTBI treatment`,
    },
    5: {
      level: 5,
      summary: 'Contemporary TB management integrates molecular epidemiology, novel drug regimens, host-directed therapies, and global elimination strategies addressing drug resistance, HIV coinfection, and diagnostic challenges.',
      explanation: `Expert-level TB medicine requires integration of emerging science, complex treatment decisions, and global health considerations.

**Molecular Epidemiology:**

*Strain Typing:*
- Whole genome sequencing (WGS)
- Spoligotyping, MIRU-VNTR (older methods)
- Outbreak investigation
- Transmission dynamics

*Lineages and Clinical Implications:*
- L1-L7 global lineages
- Beijing lineage (L2): Associated with drug resistance, virulence
- Geographic distribution varies

*Drug Resistance Genomics:*
- Comprehensive resistance gene panels
- Target sequencing for rapid DST
- Phenotype-genotype correlations
- Detection of emerging resistance

**Novel Therapeutic Approaches:**

*New and Repurposed Drugs:*
| Drug | Mechanism | Role |
|------|-----------|------|
| Bedaquiline | ATP synthase | First-line MDR |
| Pretomanid | Multiple | BPaL/BPaLM regimen |
| Delamanid | Mycolic acid synthesis | MDR-TB |
| Linezolid | Protein synthesis | MDR-TB (toxicity limits) |
| Clofazimine | DNA binding | MDR-TB |

*Novel Regimens:*
- BPaL: Bedaquiline + pretomanid + linezolid (6 months)
- BPaLM: Adding moxifloxacin (if susceptible)
- Nix-TB, ZeNix trials: Optimizing linezolid dosing

*Shortening Drug-Susceptible TB Treatment:*
- SHINE trial: 4 months with high-dose rifampin
- TBTC Study 31: 4 months rifapentine-moxifloxacin (non-inferior)
- Moving toward shorter regimens

**Host-Directed Therapies:**

*Rationale:*
- Enhance immune response
- Reduce inflammation and tissue damage
- Shorten treatment

*Agents Under Investigation:*
- Vitamin D: Mixed results
- Metformin: Immune modulation
- Statin therapy: Anti-inflammatory
- Cyclooxygenase inhibitors
- Phosphodiesterase inhibitors

*Adjunctive Steroids:*
- TB meningitis: Proven mortality benefit
- TB pericarditis: Benefit uncertain
- Severe pulmonary: Not routinely recommended

**Vaccine Development:**

*BCG Limitations:*
- Variable efficacy (0-80%)
- Protects against disseminated/meningeal TB in children
- Poor protection against adult pulmonary TB
- Cannot be given to immunocompromised

*Vaccine Candidates:*
- M72/AS01E: Subunit vaccine, ~50% efficacy in infected adults
- VPM1002: Recombinant BCG
- MTBVAC: Live attenuated
- Revaccination strategies

**Diagnostics Advances:**

*Point-of-Care Tests:*
- Lateral flow urine LAM (TB-LAM): HIV+ with advanced disease
- Next-generation LAM assays (higher sensitivity)
- Breath tests (investigational)

*Molecular Platforms:*
- Xpert MTB/RIF Ultra: Improved sensitivity
- Xpert XDR: Broader resistance detection
- Truenat: Near-patient testing

*AI/Machine Learning:*
- Chest X-ray interpretation
- DST prediction from genomics

**Global TB Strategy:**

*WHO End TB Strategy Goals (2035):*
- 95% reduction in deaths
- 90% reduction in incidence
- Zero catastrophic costs

*Challenges:*
- HIV-TB syndemic
- MDR-TB: 500,000 cases annually
- Diagnostic gaps
- Funding shortfalls
- COVID-19 impact on TB services

*Innovations for Elimination:*
- Preventive treatment scale-up
- Digital health tools
- Shorter regimens improving adherence
- Private sector engagement

**Complex Clinical Scenarios:**

*Subclinical TB:*
- Positive Xpert, no symptoms
- Increasingly recognized
- May contribute to transmission
- Treatment approach under study

*Paradoxical Reactions:*
- Worsening despite appropriate therapy
- Most common in HIV+ (IRIS)
- Also in immunocompetent
- Management: Continue TB treatment, steroids if severe

*Recurrent TB:*
- Relapse vs. reinfection
- WGS can distinguish
- Implications for retreatment regimen

*NTM vs. TB:*
- Nontuberculous mycobacteria increasingly common
- May colonize or cause disease
- Different treatment approach
- Molecular methods distinguish`,
      keyTerms: [
        { term: 'pretomanid', definition: 'Nitroimidazole drug used in BPaL/BPaLM regimens for MDR-TB' },
        { term: 'LAM (lipoarabinomannan)', definition: 'Mycobacterial cell wall component; urine detection as point-of-care test for HIV-associated TB' },
        { term: 'M72/AS01E', definition: 'Subunit TB vaccine candidate showing ~50% efficacy in preventing disease in latently infected adults' },
        { term: 'subclinical TB', definition: 'Microbiologically confirmed TB in absence of symptoms; increasingly recognized' },
        { term: 'WGS', definition: 'Whole genome sequencing; enables comprehensive resistance prediction and transmission tracking' },
      ],
      clinicalNotes: `**Expert Pearls:**
- BPaL regimen: Transforms MDR-TB from 18-24 months to 6 months; linezolid toxicity is rate-limiting
- 4-month regimen (rifapentine-moxifloxacin): Now CDC/IDSA option for drug-susceptible non-cavitary, smear-negative
- LAM testing: Use in HIV+ with CD4 <200 or seriously ill; rapid, but not replacement for Xpert
- M72/AS01E: First vaccine to show efficacy in infected adults; phase 3 underway
- Subclinical TB: Treat if Xpert positive; contributes to transmission
- NTM on smear: Does not rule out TB; need culture and clinical context`,
    },
  },

  media: [
    {
      id: 'tb-granuloma',
      type: 'histology',
      filename: 'tb-granuloma.jpg',
      title: 'Caseating Granuloma in Tuberculosis',
      description: 'Histological image showing granuloma with central caseation',
    },
    {
      id: 'tb-chest-xray',
      type: 'image',
      filename: 'tb-chest-xray.jpg',
      title: 'TB Chest X-ray Findings',
      description: 'Comparison of primary, reactivation, and miliary TB radiographic patterns',
    },
  ],
  citations: [
    {
      id: 'who-tb-guidelines',
      type: 'website',
      title: 'WHO consolidated guidelines on tuberculosis',
      source: 'World Health Organization',
      url: 'https://www.who.int/publications/i/item/9789240063129',
    },
    {
      id: 'idsa-tb-guidelines',
      type: 'article',
      title: 'Official American Thoracic Society/CDC/IDSA Clinical Practice Guidelines: Treatment of Drug-Susceptible Tuberculosis',
      source: 'Clinical Infectious Diseases',
      url: 'https://doi.org/10.1093/cid/ciw376',
    },
  ],
  crossReferences: [
    { targetId: 'infectious-disease-hiv', targetType: 'topic', relationship: 'related', label: 'HIV/AIDS' },
    { targetId: 'infectious-disease-bacterial-overview', targetType: 'topic', relationship: 'parent', label: 'Bacterial Infections' },
    { targetId: 'system-respiratory', targetType: 'system', relationship: 'related', label: 'Respiratory System' },
  ],
  tags: {
    systems: ['respiratory', 'immune'],
    topics: ['infectious-disease', 'pulmonology', 'global-health'],
    keywords: ['tuberculosis', 'TB', 'mycobacterium', 'MDR-TB', 'LTBI', 'granuloma', 'rifampin'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'pulmonary'] },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default tuberculosis;
