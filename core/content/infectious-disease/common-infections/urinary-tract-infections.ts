import { EducationalContent } from '../../types';

export const urinaryTractInfections: EducationalContent = {
  id: 'infectious-disease-uti',
  type: 'condition',
  name: 'Urinary Tract Infections',
  alternateNames: ['UTI', 'Bladder Infection', 'Cystitis', 'Kidney Infection', 'Pyelonephritis'],

  levels: {
    1: {
      level: 1,
      summary: 'A urinary tract infection (UTI) is when bacteria get into your bladder or kidneys and cause an infection, making it painful to pee.',
      explanation: `A urinary tract infection, or UTI, happens when bacteria that normally live on your skin or in your gut get into your urinary system (bladder and kidneys).

**Parts of the Urinary Tract:**
- **Urethra** - the tube that carries urine out of your body
- **Bladder** - the organ that stores urine
- **Ureters** - tubes connecting kidneys to bladder
- **Kidneys** - organs that filter blood and make urine

**Common Symptoms:**
- Burning or pain when you pee
- Needing to pee very often
- Feeling like you need to pee urgently
- Cloudy or smelly urine
- Pain or pressure in your lower belly
- Blood in urine (pink or red color)

**If the Infection Spreads to Kidneys:**
- Fever and chills
- Back or side pain
- Nausea and vomiting
- Feeling very sick
- **This is more serious - see a doctor right away!**

**Who Gets UTIs More Often:**
- Women (because their urethra is shorter)
- Older adults
- People with diabetes
- People who use catheters

**Prevention Tips:**
- Drink plenty of water
- Don't hold your urine for too long
- Wipe from front to back (for women)
- Pee after sex
- Wear cotton underwear

**Treatment:**
- UTIs need **antibiotics** to kill the bacteria
- Take all your medicine, even if you feel better
- Drink lots of fluids to flush out bacteria`,
      keyTerms: [
        { term: 'UTI', definition: 'Urinary tract infection - when bacteria infect your bladder or kidneys' },
        { term: 'bladder', definition: 'The organ that holds urine until you pee' },
        { term: 'urethra', definition: 'The tube that carries urine from your bladder out of your body' },
        { term: 'kidney', definition: 'Organs that filter your blood and make urine' },
      ],
      analogies: [
        'Your urinary tract is like plumbing - UTIs happen when bacteria swim upstream and clog the system.',
        'Drinking water when you have a UTI is like flushing a drain to wash away the germs.',
      ],
      examples: [
        'A woman notices burning when she pees and has to go every 20 minutes - this is a classic bladder UTI.',
        'A fever with back pain and UTI symptoms suggests the infection has spread to the kidneys.',
      ],
    },
    2: {
      level: 2,
      summary: 'Urinary tract infections are bacterial infections of the urinary system, classified as lower (cystitis) or upper (pyelonephritis), with treatment guided by infection location and patient factors.',
      explanation: `UTIs are among the most common bacterial infections, affecting millions of people each year. Understanding their classification and management is essential.

**Classification:**

1. **By Location:**
   - **Cystitis** - infection of the bladder (lower UTI)
   - **Pyelonephritis** - infection of the kidney (upper UTI)
   - **Urethritis** - infection of the urethra

2. **By Complexity:**
   - **Uncomplicated UTI** - infection in a healthy, non-pregnant woman with normal urinary tract
   - **Complicated UTI** - infection with factors that make treatment harder:
     * Male patient
     * Pregnancy
     * Anatomical abnormalities
     * Catheter use
     * Recent hospitalization
     * Diabetes or immunosuppression

**Common Bacteria:**
- *E. coli* causes 80-85% of UTIs
- *Staphylococcus saprophyticus* (young women)
- *Klebsiella* species
- *Proteus* species
- *Enterococcus* species

**Cystitis (Bladder Infection) Symptoms:**
- Dysuria (painful urination)
- Urinary frequency (going often)
- Urgency (sudden need to go)
- Suprapubic pain (lower abdomen)
- Hematuria (blood in urine)
- Cloudy or foul-smelling urine

**Pyelonephritis (Kidney Infection) Symptoms:**
- All cystitis symptoms PLUS:
- Fever (often >38.3°C/101°F)
- Flank pain (side/back pain)
- Costovertebral angle tenderness
- Nausea and vomiting
- Possible sepsis if severe

**Diagnosis:**
- Urinalysis: look for white blood cells, bacteria, nitrites
- Urine culture: identifies the bacteria and guides antibiotic choice
- Culture especially important for complicated UTI or treatment failure

**Treatment Principles:**

*Uncomplicated Cystitis:*
- Nitrofurantoin 5-7 days (first-line)
- Trimethoprim-sulfamethoxazole 3 days
- Fosfomycin single dose

*Pyelonephritis:*
- Fluoroquinolones 7 days
- Or trimethoprim-sulfamethoxazole 14 days
- May need IV antibiotics if severe

**Prevention:**
- Increased fluid intake
- Urinate after intercourse
- Cranberry products (modest evidence)
- Avoid spermicides/diaphragms
- Post-menopausal: vaginal estrogen may help`,
      keyTerms: [
        { term: 'cystitis', definition: 'Infection of the bladder, causing painful urination and frequency', pronunciation: 'sis-TY-tis' },
        { term: 'pyelonephritis', definition: 'Kidney infection, more serious than bladder infection', pronunciation: 'PY-lo-nef-RY-tis' },
        { term: 'dysuria', definition: 'Pain or burning sensation during urination', pronunciation: 'dis-YUR-ee-ah' },
        { term: 'uncomplicated UTI', definition: 'UTI in a healthy, non-pregnant woman with normal urinary anatomy' },
      ],
      analogies: [
        'Think of cystitis as a fire in the basement (bladder), while pyelonephritis is when the fire spreads upstairs (kidneys).',
      ],
    },
    3: {
      level: 3,
      summary: 'UTIs result from uropathogenic bacterial colonization and invasion, with E. coli virulence factors enabling bladder epithelial adherence, and clinical management stratified by anatomical level, host factors, and local resistance patterns.',
      explanation: `Urinary tract infections demonstrate specific host-pathogen interactions and require evidence-based management approaches.

**Pathogenesis:**

1. **Bacterial Entry and Colonization**
   - Periurethral colonization precedes infection
   - Ascending infection from urethra to bladder
   - Further ascent to kidneys possible

2. **Uropathogenic E. coli (UPEC) Virulence Factors:**
   - **Type 1 pili (FimH)**: Bind mannose on bladder epithelium
   - **P pili (PapG)**: Bind kidney epithelium (associated with pyelonephritis)
   - **Hemolysin**: Lyses host cells
   - **Siderophores**: Iron acquisition
   - **Capsule (K antigen)**: Resists phagocytosis

3. **Host Defense Mechanisms:**
   - Urine flow (washout effect)
   - Tamm-Horsfall protein (binds bacteria)
   - Secretory IgA
   - Innate immune recognition (TLR4)
   - Epithelial desquamation

**Diagnostic Approach:**

*Urinalysis:*
- **Pyuria**: >10 WBC/hpf (or positive leukocyte esterase)
- **Bacteriuria**: Bacteria on microscopy (or positive nitrites)
- Nitrites: Converted from nitrates by Enterobacteriaceae
  - False negative: Enterococcus, Pseudomonas (don't convert nitrates)
- Hematuria: Common but non-specific

*Urine Culture Interpretation:*
- ≥10^5 CFU/mL: Traditional threshold
- ≥10^3 CFU/mL: Significant in symptomatic women
- ≥10^2 CFU/mL: May be significant with catheter

*When to Culture:*
- Complicated UTI
- Treatment failure
- Recurrent UTI
- Pyelonephritis
- Male patients
- Pregnant patients

**Treatment by Category:**

*Uncomplicated Cystitis (IDSA Guidelines):*
| Agent | Duration | Notes |
|-------|----------|-------|
| Nitrofurantoin | 5 days | Avoid if creatinine clearance <30 |
| TMP-SMX | 3 days | Only if local resistance <20% |
| Fosfomycin | Single dose | Good for MDR; slightly less effective |

*Avoid fluoroquinolones for uncomplicated cystitis* (reserve for serious infections)

*Acute Pyelonephritis:*
- Outpatient (mild): Ciprofloxacin 7 days or TMP-SMX 14 days
- Inpatient: IV ceftriaxone, fluoroquinolone, or aminoglycoside
- Switch to oral when clinically improved

**Special Populations:**

*Pregnancy:*
- Screen and treat asymptomatic bacteriuria
- Nitrofurantoin safe (avoid at term)
- Cephalosporins safe
- Avoid fluoroquinolones, TMP-SMX (first trimester, late pregnancy)

*Men:*
- Always consider complicated
- Longer treatment (7-14 days)
- Evaluate for prostatitis
- Consider urological workup

*Catheter-Associated (CAUTI):*
- Remove or replace catheter
- Culture from new catheter
- Treat 7 days (or 10-14 if slow response)`,
      keyTerms: [
        { term: 'UPEC', definition: 'Uropathogenic E. coli; strains with virulence factors enabling urinary tract colonization' },
        { term: 'type 1 pili', definition: 'Bacterial appendages (FimH) that bind mannose residues on bladder epithelium' },
        { term: 'pyuria', definition: 'White blood cells in urine, indicating inflammation/infection' },
        { term: 'asymptomatic bacteriuria', definition: 'Bacteria in urine without UTI symptoms; treat only in pregnancy or before urologic procedures' },
      ],
      clinicalNotes: 'Do NOT treat asymptomatic bacteriuria (ASB) in most patients - only treat in pregnancy and before invasive urologic procedures. Treating ASB in elderly or catheterized patients drives resistance without benefit.',
    },
    4: {
      level: 4,
      summary: 'UTI pathophysiology involves complex UPEC-host epithelial interactions, intracellular bacterial community formation, and immune evasion strategies, with optimal antibiotic selection requiring integration of pharmacokinetics, local antibiograms, and resistance mechanism awareness.',
      explanation: `Advanced UTI management requires understanding of bacterial pathobiology, antimicrobial pharmacology, and resistance patterns.

**Advanced Pathogenesis:**

1. **Intracellular Bacterial Communities (IBCs)**
   - UPEC invades bladder epithelial cells
   - Forms biofilm-like intracellular communities
   - Protected from antibiotics and immune system
   - May explain recurrent UTI
   - Dispersal → reinvasion cycle

2. **Quiescent Intracellular Reservoirs (QIRs)**
   - Dormant bacteria in deeper urothelial layers
   - Survive epithelial turnover
   - Reactivation causes recurrence
   - Explain culture-negative symptomatic UTI

3. **Host Susceptibility Factors:**
   - Blood group antigens (P1 phenotype increases pyelonephritis risk)
   - TLR4 polymorphisms
   - CXCR1 expression levels
   - Vaginal microbiome (Lactobacillus-dominant protective)

**Antimicrobial Pharmacology:**

*Nitrofurantoin:*
- Mechanism: Multiple - inhibits bacterial enzymes
- Achieves high bladder concentrations
- Inadequate renal parenchymal levels → don't use for pyelonephritis
- Active against most E. coli including many ESBL producers

*Fosfomycin:*
- Mechanism: Inhibits MurA (cell wall synthesis)
- Single 3g dose achieves prolonged urinary levels
- Excellent activity against ESBL producers
- Resistance via chromosomal mutations (rare)

*Fluoroquinolones:*
- Excellent urinary AND tissue penetration
- Concentration-dependent killing
- Reserve for pyelonephritis or resistant organisms
- Black box warnings: tendon rupture, neuropathy, aortic dissection

*TMP-SMX:*
- Sequential folate pathway inhibition
- Time-dependent killing
- Increasing resistance limits empiric use
- Check local antibiogram

**Resistance Considerations:**

1. **ESBL-Producing Enterobacteriaceae**
   - Resistance to cephalosporins, many penicillins
   - Risk factors: recent antibiotics, healthcare exposure, travel
   - Treatment options: carbapenems, fosfomycin, nitrofurantoin (if cystitis)

2. **Fluoroquinolone Resistance**
   - Increasing globally (>20% in many areas)
   - Mutations in gyrA, parC
   - Plasmid-mediated qnr genes
   - Impacts empiric pyelonephritis treatment

3. **Carbapenem-Resistant Enterobacteriaceae (CRE)**
   - Limited treatment options
   - Ceftazidime-avibactam, meropenem-vaborbactam
   - Infectious disease consultation recommended

**Recurrent UTI Management:**

Definition: ≥2 UTIs in 6 months OR ≥3 in 12 months

*Evaluation:*
- Urine culture each episode
- Post-void residual assessment
- Consider imaging if unusual organisms or treatment failure
- Cystoscopy if hematuria or atypical features

*Prevention Strategies:*
| Strategy | Evidence |
|----------|----------|
| Behavioral (fluids, post-coital voiding) | Limited but reasonable |
| Cranberry products | Modest effect; A-PAC concentration matters |
| Vaginal estrogen (postmenopausal) | Strong evidence; restores Lactobacilli |
| D-mannose | Emerging evidence; competes with FimH binding |
| Methenamine hippurate | May reduce recurrence; avoid with renal impairment |
| Prophylactic antibiotics | Effective but promotes resistance |

*Antibiotic Prophylaxis Options:*
- Post-coital: single dose after intercourse
- Continuous: daily low-dose
- Self-start: patient-initiated treatment at symptom onset`,
      keyTerms: [
        { term: 'intracellular bacterial community (IBC)', definition: 'Biofilm-like clusters of bacteria within bladder epithelial cells, protected from antibiotics' },
        { term: 'ESBL', definition: 'Extended-spectrum beta-lactamase; enzyme conferring resistance to cephalosporins' },
        { term: 'antibiogram', definition: 'Local laboratory data on antibiotic susceptibility patterns in a healthcare setting' },
        { term: 'D-mannose', definition: 'Sugar that competitively inhibits type 1 pili binding, potentially preventing UTI' },
      ],
      clinicalNotes: 'Nitrofurantoin and fosfomycin retain excellent activity against ESBL-producing E. coli for cystitis. However, neither achieves adequate kidney tissue levels - do not use for pyelonephritis. Culture before treating any complicated or recurrent UTI.',
    },
    5: {
      level: 5,
      summary: 'UTI represents a paradigm of host-microbe co-evolution, with UPEC utilizing sophisticated virulence arsenals including phase-variable adhesins and type 3 secretion, while host genetic polymorphisms and microbiome composition determine susceptibility, informing precision prevention and novel therapeutic strategies.',
      explanation: `Contemporary UTI science integrates molecular pathogenesis, pharmacogenomics, and microbiome medicine for optimized patient outcomes.

**Molecular Pathogenesis - Cutting Edge:**

1. **UPEC Pathogenicity Islands**
   - PAI I-VII carry clustered virulence genes
   - Horizontal acquisition from other pathogens
   - Genomic islands: 10-200kb with different GC content
   - Key loci: fim (type 1 pili), pap (P pili), hly (hemolysin)

2. **Phase Variation and Antigenic Switching**
   - Type 1 pili expression oscillates (on/off)
   - FimB/FimE recombinases control fimS promoter orientation
   - Bladder environment favors "on" state
   - Kidney environment may favor P pili expression

3. **Immune Evasion and Modulation**
   - Capsule prevents complement-mediated killing
   - TcpC (TIR-containing protein): Suppresses TLR signaling
   - CNF1: Activates Rho GTPases, inhibits apoptosis
   - Mast cell manipulation → bacterial persistence

4. **Biofilm Formation in UTI**
   - Catheter-associated biofilms
   - IBC maturation resembles biofilm development
   - Cyclic di-GMP regulation
   - Quorum sensing molecules

**Host Genetic Susceptibility:**

1. **Innate Immunity Genes:**
   - TLR4 polymorphisms: Asp299Gly, Thr399Ile
   - TLR5 stop codon (impaired flagellin recognition)
   - CXCR1/2 chemokine receptor variants
   - MBL2 mutations (mannose-binding lectin)

2. **ABO Blood Group:**
   - P1 blood group: Increased pyelonephritis risk
   - P fimbriae bind Galα(1-4)Galβ (P antigen)
   - Secretor status affects vaginal glycosylation

3. **Epithelial Defense:**
   - Uroplakin expression patterns
   - Defensin gene copy number variation
   - Cathelicidin (LL-37) polymorphisms

**Microbiome Medicine:**

1. **Urinary Microbiome**
   - Healthy bladder is NOT sterile
   - Dominant genera: Lactobacillus, Gardnerella, Streptococcus
   - Dysbiosis precedes UTI
   - Antibiotic disruption promotes uropathogen colonization

2. **Vaginal Microbiome Connection**
   - Lactobacillus-dominant CST-I, CST-II protective
   - Produces lactic acid, H2O2, bacteriocins
   - BV (bacterial vaginosis) increases UTI risk
   - Vaginal estrogen restores Lactobacillus

3. **Gut Reservoir**
   - GI tract harbors UPEC strains
   - Antibiotic selection of resistant gut flora
   - Strain-specific gut-bladder axis
   - Fecal-perineal-urethral ascending route

**Emerging Therapeutics:**

1. **Anti-Adhesion Strategies**
   - Mannosides: FimH antagonists (phase II trials)
   - Pilicides: Inhibit pilus assembly
   - Receptor decoys

2. **Immunomodulation**
   - OM-89 (Uro-Vaxom): Bacterial lysate immunostimulant
   - ExPEC4V vaccine: Targets 4 O-antigens (trials ongoing)
   - Live attenuated UPEC strains

3. **Bacteriophage Therapy**
   - Phage cocktails for MDR UTI
   - Compassionate use reports
   - Regulatory pathway challenges

4. **CRISPR-Based Approaches**
   - CRISPR-Cas delivery for resistance gene targeting
   - Preclinical development

**Clinical Decision Support - Evidence Synthesis:**

*Asymptomatic Bacteriuria (ASB):*
- DO treat: Pregnancy, before urologic procedures
- Do NOT treat: Elderly, diabetics, spinal cord injury, indwelling catheter
- No survival benefit; drives resistance

*Diagnostic Stewardship:*
- Don't culture if no symptoms
- Don't treat positive cultures without symptoms (except above)
- Pyuria alone is not indication for treatment

*Antibiotic Duration Optimization:*
- Uncomplicated cystitis: 3-5 days (not 7-14)
- CAUTI: 7 days (not longer)
- Pyelonephritis: 5-7 days fluoroquinolone (not 14)

*Special Scenarios:*
- Male UTI: Always culture; evaluate prostate; 7-14 days
- Pregnancy: First-generation cephalosporins, nitrofurantoin (not at term)
- Renal transplant: Longer courses; cover for opportunistic pathogens
- Spinal cord injury: Treat only symptomatic (fever, autonomic dysreflexia)`,
      keyTerms: [
        { term: 'phase variation', definition: 'Reversible high-frequency switching of gene expression (e.g., pili on/off) enabling bacterial adaptation' },
        { term: 'community state type (CST)', definition: 'Classification of vaginal microbiome composition; Lactobacillus-dominant types are protective against UTI' },
        { term: 'pilicide', definition: 'Small molecule that inhibits bacterial pilus assembly, preventing adhesion' },
        { term: 'mannoside', definition: 'FimH receptor antagonist that competitively inhibits type 1 pili binding to bladder epithelium' },
      ],
      clinicalNotes: `**Board-Relevant Clinical Pearls:**
- ESBL UTI: Oral options = nitrofurantoin, fosfomycin (cystitis only); carbapenems for pyelonephritis
- Fluoroquinolone resistance >20% in most communities - don't use empirically without culture
- Pyuria without symptoms = contamination or ASB; never treat pyuria alone
- Urine culture "contaminated" with 3+ organisms usually means poor collection technique
- Post-menopausal recurrent UTI: Vaginal estrogen is underutilized, evidence-based prevention
- Duration matters: Shorter courses are noninferior and reduce resistance selection`,
    },
  },

  media: [
    {
      id: 'uti-anatomy',
      type: 'diagram',
      filename: 'urinary-tract-anatomy.svg',
      title: 'Urinary Tract Anatomy',
      description: 'Diagram showing kidneys, ureters, bladder, and urethra',
    },
    {
      id: 'uti-pathogenesis',
      type: 'diagram',
      filename: 'uti-pathogenesis.svg',
      title: 'UTI Pathogenesis',
      description: 'UPEC adherence, invasion, and intracellular bacterial community formation',
    },
  ],
  citations: [
    {
      id: 'idsa-uti-guidelines',
      type: 'article',
      title: 'International Clinical Practice Guidelines for the Treatment of Acute Uncomplicated Cystitis and Pyelonephritis in Women',
      authors: ['Gupta K', 'Hooton TM', 'Naber KG'],
      source: 'Clinical Infectious Diseases',
      url: 'https://doi.org/10.1093/cid/ciq257',
    },
    {
      id: 'aua-recurrent-uti',
      type: 'article',
      title: 'AUA/CUA/SUFU Guideline on the Management of Recurrent Uncomplicated Urinary Tract Infections',
      source: 'Journal of Urology',
    },
  ],
  crossReferences: [
    { targetId: 'infectious-disease-pyelonephritis', targetType: 'condition', relationship: 'related', label: 'Pyelonephritis' },
    { targetId: 'renal-anatomy-nephron', targetType: 'structure', relationship: 'related', label: 'Nephron Structure' },
    { targetId: 'infectious-disease-antibiotic-resistance', targetType: 'topic', relationship: 'see-also', label: 'Antibiotic Resistance' },
  ],
  tags: {
    systems: ['renal', 'immune'],
    topics: ['infectious-disease', 'urology', 'primary-care', 'antibiotic-stewardship'],
    keywords: ['UTI', 'cystitis', 'pyelonephritis', 'E. coli', 'UPEC', 'dysuria'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'surgery', 'family-medicine'] },
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default urinaryTractInfections;
