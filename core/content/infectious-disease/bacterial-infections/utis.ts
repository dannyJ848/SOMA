import { EducationalContent } from '../../types';

export const UTIS: EducationalContent = {
  id: 'infectious-disease-utis',
  type: 'condition',
  name: 'Urinary Tract Infections',
  alternateNames: ['UTI', 'Bladder Infection', 'Cystitis', 'Kidney Infection', 'Pyelonephritis'],
  levels: {
    1: {
      level: 1,
      summary: 'A urinary tract infection (UTI) happens when bacteria get into the urinary system, causing symptoms like painful urination and frequent urges to go to the bathroom.',
      explanation: `Your urinary system includes your kidneys, ureters (tubes connecting kidneys to bladder), bladder, and urethra (the tube that carries urine out of your body). A UTI happens when bacteria - usually from your digestive system - get into this system and multiply.

**Types of UTIs:**
- **Bladder infection (cystitis)**: Most common, bacteria in the bladder
- **Kidney infection (pyelonephritis)**: More serious, bacteria reach the kidneys
- **Urethritis**: Infection of the urethra

**Common Symptoms:**
- Burning or pain when urinating
- Needing to urinate frequently
- Urgent need to urinate
- Urine that looks cloudy or smells bad
- Pain in your lower belly
- Blood in urine (sometimes)

**Kidney infection symptoms also include:**
- Fever and chills
- Back or side pain
- Nausea and vomiting

**Who Gets UTIs More Often:**
- Women (shorter urethra, closer to rectum)
- People who are sexually active
- People who use certain birth control (spermicides)
- Post-menopausal women
- People with diabetes
- People with urinary catheters

**Prevention:**
- Drink plenty of water
- Urinate when you need to (don't hold it)
- Wipe from front to back after using the toilet
- Urinate after sexual activity
- Avoid irritating feminine products

**Treatment:**
Most UTIs are treated with antibiotics for a few days. Drinking lots of water helps flush out bacteria. See a doctor right away if you have symptoms of a kidney infection.`,
      keyTerms: [
        { term: 'UTI', definition: 'Urinary tract infection - bacteria growing in part of the urinary system' },
        { term: 'Bladder', definition: 'The organ that stores urine until you urinate' },
        { term: 'Kidneys', definition: 'Organs that filter waste from blood and make urine' },
        { term: 'Urethra', definition: 'The tube that carries urine from the bladder out of the body' },
      ],
    },
    2: {
      level: 2,
      summary: 'Urinary tract infections are bacterial infections classified by location as cystitis (bladder) or pyelonephritis (kidney), commonly caused by E. coli and treated with targeted antibiotic therapy.',
      explanation: `UTIs are among the most common bacterial infections, particularly affecting women. Understanding the classification and microbiology guides appropriate treatment.

**Classification:**

| Type | Location | Presentation | Severity |
|------|----------|--------------|----------|
| Uncomplicated cystitis | Bladder | Dysuria, frequency, urgency | Mild |
| Complicated UTI | Any level | Various, with risk factors | Moderate-Severe |
| Pyelonephritis | Kidney | Fever, flank pain, systemic symptoms | Moderate-Severe |
| Asymptomatic bacteriuria | Any | No symptoms, positive culture | Usually benign |

**Risk Factors for "Complicated" UTI:**
- Male sex
- Pregnancy
- Diabetes
- Immunocompromised state
- Urinary obstruction or stones
- Indwelling catheter
- Recent urologic procedure
- Antibiotic-resistant organism
- Hospital acquisition

**Microbiology:**

| Organism | Approximate Frequency |
|----------|----------------------|
| *Escherichia coli* | 75-95% (uncomplicated) |
| *Staphylococcus saprophyticus* | 5-10% (young women) |
| *Klebsiella pneumoniae* | 5-10% |
| *Proteus mirabilis* | 5% |
| *Enterococcus* species | Variable |

**Diagnosis:**

*Urinalysis:*
- Pyuria (WBCs in urine): Sensitive but not specific
- Nitrites: Specific for Enterobacteriaceae
- Leukocyte esterase: Indicates WBCs
- Hematuria: Common

*Urine Culture:*
- Not always needed for uncomplicated cystitis
- Obtain for: Complicated UTI, pyelonephritis, treatment failure
- Significant: ≥10³ CFU/mL with symptoms (some use ≥10⁵)

**Treatment:**

*Uncomplicated Cystitis:*
First-line options:
- Nitrofurantoin 100 mg BID x 5 days
- TMP-SMX 160/800 mg BID x 3 days (if local resistance <20%)
- Fosfomycin 3 g single dose

*Pyelonephritis:*
Outpatient (mild):
- Fluoroquinolone x 5-7 days
- TMP-SMX x 14 days (after susceptibility known)

Inpatient (severe):
- IV fluoroquinolone, ceftriaxone, or other depending on local resistance
- Duration 7-14 days total

**Prevention:**

*Non-Antibiotic:*
- Behavioral changes (hydration, urination habits)
- Cranberry products (modest evidence)
- Vaginal estrogen for post-menopausal women
- D-mannose (limited evidence)

*Antibiotic Prophylaxis:*
- Consider for recurrent UTIs (≥3 per year)
- Post-coital: Single dose after intercourse
- Continuous: Low-dose daily or three times weekly`,
      keyTerms: [
        { term: 'Dysuria', definition: 'Pain or burning sensation during urination' },
        { term: 'Pyuria', definition: 'White blood cells in the urine, indicating inflammation' },
        { term: 'Pyelonephritis', definition: 'Infection of the kidney, a more serious form of UTI' },
        { term: 'Asymptomatic bacteriuria', definition: 'Bacteria in the urine without symptoms; treatment usually not needed' },
        { term: 'CFU', definition: 'Colony-forming units - a measure of bacterial quantity in culture' },
      ],
    },
    3: {
      level: 3,
      summary: 'UTI pathogenesis involves bacterial virulence factors enabling adherence and invasion of the urothelium, with clinical management balancing targeted antimicrobial therapy against rising resistance patterns and stewardship principles.',
      explanation: `Understanding UTI pathophysiology and resistance patterns enables evidence-based antimicrobial selection and stewardship.

**Pathogenesis:**

*Bacterial Factors:*
- Type 1 fimbriae: Bind to mannose residues on bladder epithelium
- P fimbriae: Bind to globoseries glycolipids (kidney tropism)
- Hemolysin: Cytolytic toxin
- Aerobactin: Iron acquisition
- Lipopolysaccharide (LPS): Triggers inflammation
- Capsular polysaccharide: Antiphagocytic

*Host Factors:*
- Short female urethra
- Bladder epithelium receptors
- Incomplete voiding
- Genetic polymorphisms affecting susceptibility
- Vaginal microbiome changes (loss of lactobacilli)

*Colonization Cascade:*
1. Periurethral colonization
2. Ascension into bladder
3. Attachment to urothelium via fimbriae
4. Invasion and intracellular bacterial communities (IBCs)
5. For pyelonephritis: Ascension via ureters

**Antimicrobial Resistance:**

*E. coli Resistance Patterns:*
| Agent | Typical Resistance Rate |
|-------|------------------------|
| Ampicillin | 40-50% |
| TMP-SMX | 15-25% (varies regionally) |
| Fluoroquinolones | 10-30% (increasing) |
| Nitrofurantoin | 1-5% |
| Fosfomycin | 1-5% |

*ESBL-Producing Organisms:*
- Extended-spectrum beta-lactamases
- Increasing prevalence globally
- Risk factors: Prior antibiotics, healthcare exposure, travel
- May require carbapenems for serious infections

**Clinical Syndromes:**

*Recurrent UTI:*
- Definition: ≥2 UTIs in 6 months or ≥3 in 12 months
- Relapse: Same organism within 2 weeks (incomplete treatment)
- Reinfection: Different organism or same organism after 2 weeks (more common)
- Evaluation: Consider imaging for structural abnormalities

*Catheter-Associated UTI (CAUTI):*
- Definition: Symptoms + culture ≥10³ CFU/mL with catheter or within 48h of removal
- Biofilm formation on catheters
- Treatment: Remove/change catheter if possible, antibiotics based on culture
- Prevention: Minimize catheter use, aseptic insertion, prompt removal

*Asymptomatic Bacteriuria:*
Treat only in:
- Pregnancy (risk of pyelonephritis, preterm birth)
- Before urologic procedures
Do NOT treat in:
- Non-pregnant women
- Elderly patients
- Diabetic patients
- Patients with indwelling catheters
- Spinal cord injury patients

**Treatment Approach:**

*Guideline-Directed Therapy:*
- IDSA guidelines recommend nitrofurantoin, TMP-SMX, or fosfomycin for uncomplicated cystitis
- Reserve fluoroquinolones for pyelonephritis (concerns about collateral damage)
- Consider local antibiogram for empiric choices

*Duration:*
| Syndrome | Duration |
|----------|----------|
| Uncomplicated cystitis | 3-5 days |
| Uncomplicated pyelonephritis | 5-7 days (FQ) or 14 days (TMP-SMX) |
| Complicated UTI | 7-14 days |
| Male UTI | 7-14 days |

*Pregnancy Considerations:*
- Treat asymptomatic bacteriuria
- Safe agents: Nitrofurantoin (avoid near term), cephalosporins, penicillins
- Avoid: Fluoroquinolones, TMP-SMX (first trimester/near term)`,
      keyTerms: [
        { term: 'Fimbriae', definition: 'Hair-like projections on bacteria that enable attachment to host cells' },
        { term: 'ESBL', definition: 'Extended-spectrum beta-lactamase - enzyme conferring resistance to many antibiotics' },
        { term: 'Intracellular bacterial communities', definition: 'Biofilm-like bacterial aggregates within bladder epithelial cells' },
        { term: 'CAUTI', definition: 'Catheter-associated urinary tract infection' },
        { term: 'Antibiogram', definition: 'Summary of local antimicrobial susceptibility patterns' },
      ],
    },
    4: {
      level: 4,
      summary: 'UTI management integrates understanding of uropathogen virulence, biofilm biology, antimicrobial PK/PD for urinary tract concentrations, and stewardship strategies addressing the challenge of rising resistance including ESBL producers.',
      explanation: `Advanced UTI care requires sophisticated understanding of pathogenesis, pharmacology, and resistance mechanisms.

**Uropathogenic E. coli (UPEC) Biology:**

*Virulence Factors:*
- Type 1 fimbriae (FimH adhesin): Binds uroplakin
- P fimbriae (PapG adhesin): Kidney tropism, G1-3 variants
- Dr family adhesins: Bind decay-accelerating factor
- Iron acquisition: Enterobactin, salmochelin, aerobactin, yersiniabactin
- Toxins: HlyA (hemolysin), CNF1 (cytotoxic necrotizing factor), Sat (secreted autotransporter toxin)

*Intracellular Lifestyle:*
- UPEC invades bladder epithelial cells
- Forms intracellular bacterial communities (IBCs)
- Biofilm-like structures protect from antibiotics and immune clearance
- Quiescent intracellular reservoirs (QIRs) may cause recurrence

*Biofilm Formation:*
- On catheters: Critical for CAUTI
- EPS (extracellular polymeric substance) matrix
- Antibiotic penetration reduced 10-1000x
- Catheter removal often necessary for cure

**Pharmacokinetics in UTI:**

*Urinary Concentration Matters:*
- Nitrofurantoin: Concentrated in urine, not systemic
- Fosfomycin: High urinary levels, limited systemic use
- TMP-SMX: Prostatic penetration (for male UTI)
- Fluoroquinolones: Good tissue and urinary concentrations

*PK/PD Targets:*
- For drugs concentrated in urine, standard breakpoints may underestimate efficacy
- USCAST breakpoints consider urinary concentrations
- Example: Fosfomycin MIC breakpoint higher than for systemic infections

**Resistant Organisms:**

*ESBL Epidemiology:*
- CTX-M enzymes predominant globally
- Community-onset ESBL UTIs increasing
- Risk factors: Travel (South Asia, Mediterranean), prior antibiotics, recurrent UTI

*Treatment of ESBL UTI:*
| Scenario | Approach |
|----------|----------|
| Cystitis, stable | Nitrofurantoin, fosfomycin, TMP-SMX if susceptible |
| Cystitis, relapse | Consider carbapenem |
| Pyelonephritis/complicated | Carbapenem (ertapenem for outpatient) |

*Carbapenem-Resistant Enterobacteriaceae (CRE):*
- Emerging threat
- Limited options: Ceftazidime-avibactam, meropenem-vaborbactam, plazomicin
- Often require ID consultation

**Special Populations:**

*Male UTI:*
- Always considered complicated
- Consider prostatitis
- Longer treatment (7-14 days minimum)
- TMP-SMX or fluoroquinolone for prostatic penetration
- Imaging if recurrent

*Spinal Cord Injury:*
- High rates of bacteriuria
- Don't treat asymptomatic bacteriuria
- Atypical presentations common
- Balance prevention vs. resistance selection

*Renal Transplant:*
- Common in first 6 months
- Immunosuppression complicates management
- Drug interactions (TMP-SMX/calcineurin inhibitors)
- May need prophylaxis

**Stewardship Considerations:**

*Diagnostic Stewardship:*
- Avoid culturing asymptomatic patients
- Don't reflex culture positive UA without symptoms
- Education on appropriate UA ordering

*Treatment Stewardship:*
- Avoid fluoroquinolones for uncomplicated cystitis
- Short courses when appropriate
- De-escalate based on culture
- Avoid treating ASB

*Collateral Damage Concept:*
- Fluoroquinolones: C. difficile risk, tendinopathy, neuropathy, QT prolongation
- TMP-SMX: Hyperkalemia, bone marrow suppression
- Consider ecological impact (resistance selection)`,
      keyTerms: [
        { term: 'UPEC', definition: 'Uropathogenic E. coli - strains with virulence factors enabling urinary tract infection' },
        { term: 'Quiescent intracellular reservoir', definition: 'Dormant bacteria within bladder cells that may cause recurrent infection' },
        { term: 'USCAST', definition: 'United States Committee on Antimicrobial Susceptibility Testing - sets urinary-specific breakpoints' },
        { term: 'Collateral damage', definition: 'Unintended consequences of antibiotic use including resistance selection and adverse effects' },
        { term: 'Diagnostic stewardship', definition: 'Optimizing test ordering to improve antimicrobial use' },
      ],
      clinicalNotes: 'The key clinical challenges in UTI are distinguishing infection from colonization (especially with catheters and in elderly), selecting appropriate empiric therapy given rising resistance, and applying stewardship principles. Nitrofurantoin and fosfomycin have maintained activity and should be preferred for cystitis. Fluoroquinolones should be reserved for pyelonephritis or complicated UTI.',
    },
    5: {
      level: 5,
      summary: 'Expert UTI management integrates precision diagnostics, understanding of host-pathogen molecular interactions, individualized antimicrobial selection considering PK/PD and resistance mechanisms, and implementation of stewardship programs addressing the growing crisis of multidrug-resistant uropathogens.',
      explanation: `Mastery of UTI care requires synthesis of evolving science, complex resistance patterns, and systems-level stewardship implementation.

**Molecular Diagnostics:**

*Rapid Diagnostics:*
- MALDI-TOF: Rapid organism identification from positive cultures
- PCR-based panels: Detect pathogens and resistance genes directly from urine
- Accelerate Pheno: Combines identification with phenotypic susceptibility
- Advantages: Faster targeted therapy, potential for improved outcomes

*Limitations:*
- Distinguishing contamination from infection
- Polymicrobial specimens
- Cost and availability
- Integration with clinical workflow

**Host-Pathogen Interactions:**

*Innate Immune Response:*
- TLR4 recognition of LPS
- NLRP3 inflammasome activation by hemolysins
- Antimicrobial peptides (defensins, cathelicidins)
- Exfoliation of infected epithelium

*Genetic Susceptibility:*
- TLR4 polymorphisms: May increase UTI susceptibility
- CXCR1: Chemokine receptor variants affect neutrophil migration
- IRF3: Interferon regulatory factor polymorphisms
- Blood group antigens: Affect bacterial receptor expression

*Vaginal Microbiome:*
- Lactobacillus dominance protective
- Gardnerella and other BV-associated bacteria increase UTI risk
- Estrogen maintains healthy vaginal ecology
- Probiotic trials (Lactobacillus) show modest benefit

**Advanced Resistance Mechanisms:**

*ESBL Types:*
- CTX-M family: Most common globally (especially CTX-M-15)
- TEM and SHV derivatives: Classic ESBLs
- OXA-type: Some have ESBL phenotype

*Carbapenemases:*
- KPC (Klebsiella pneumoniae carbapenemase): Endemic in US
- NDM (New Delhi metallo-beta-lactamase): Endemic in South Asia
- OXA-48-like: Endemic in Middle East, Mediterranean

*Novel Beta-Lactamase Inhibitors:*
| Agent | Spectrum |
|-------|----------|
| Avibactam | KPC, OXA-48, some ESBLs |
| Vaborbactam | KPC |
| Relebactam | KPC |
| Not active against: NDM and most metallo-beta-lactamases

*Metallo-Beta-Lactamase Treatment Options:*
- Aztreonam-avibactam (in development)
- Cefiderocol: Siderophore cephalosporin
- Older agents: Polymyxins, aminoglycosides if susceptible

**Non-Antibiotic Approaches:**

*Vaccines:*
- Uro-Vaxom (E. coli lysate): Oral immunostimulant, modest efficacy
- Uromune (bacterial lysate): Sublingual, promising data
- FimH adhesin-based vaccines: In development

*Biofilm Disruption:*
- Catheter coatings (silver, antibiotic)
- Enzyme-based degradation of EPS
- Quorum sensing inhibitors
- Bacteriophages (early research)

*FimH Inhibitors:*
- Competitive inhibitors of type 1 fimbriae binding
- Mannosides under development
- Could prevent colonization without resistance selection

**Quality Improvement:**

*CAUTI Prevention Bundles:*
- Avoid unnecessary catheterization
- Nurse-driven removal protocols
- Daily review of catheter necessity
- Aseptic insertion technique
- Closed drainage systems

*Outpatient UTI Management:*
- Delayed prescription strategies
- Symptom-based treatment initiation
- Telephone triage protocols
- Patient education on hydration

**Complicated UTI Research:**

*Imaging in Complicated UTI:*
- CT: Abscesses, obstruction, emphysematous changes
- Ultrasound: Hydronephrosis, stones
- MRI: Selected cases

*Emphysematous Infections:*
- Gas-forming infections (emphysematous pyelonephritis, cystitis)
- Higher mortality
- Often require drainage/intervention
- Risk factors: Diabetes, obstruction

**Stewardship Program Development:**

*UTI-Focused Interventions:*
- Pre-authorization for fluoroquinolones
- Automatic stop dates
- De-escalation alerts from pharmacy
- Culture reflex modification
- ASB non-treatment campaigns

*Metrics:*
- Fluoroquinolone use for uncomplicated cystitis
- Treatment of asymptomatic bacteriuria
- CAUTI rates
- Antibiotic days of therapy for UTI

*Implementation Science:*
- Behavior change techniques
- Audit and feedback
- Clinical decision support
- Provider education and engagement`,
      keyTerms: [
        { term: 'MALDI-TOF', definition: 'Matrix-assisted laser desorption/ionization time-of-flight - rapid bacterial identification technology' },
        { term: 'FimH inhibitor', definition: 'Compounds that block bacterial adhesion to bladder epithelium without antibiotic pressure' },
        { term: 'Emphysematous pyelonephritis', definition: 'Severe necrotizing kidney infection with gas formation, high mortality' },
        { term: 'Cefiderocol', definition: 'Novel siderophore cephalosporin with activity against carbapenemase producers including metallo-beta-lactamases' },
        { term: 'Siderophore', definition: 'Iron-chelating molecule; siderophore antibiotics use bacterial iron uptake for cell entry' },
      ],
      clinicalNotes: 'The UTI landscape is evolving with increasing resistance, particularly ESBL and CRE in complicated infections. Nitrofurantoin and fosfomycin remain reliable for cystitis. For complicated UTI with resistant organisms, novel beta-lactam/beta-lactamase inhibitor combinations or cefiderocol may be required. Non-antibiotic approaches including vaccines and anti-adhesion compounds represent promising future directions. Stewardship interventions targeting UTI can significantly impact antibiotic use.',
    },
  },
  media: [],
  citations: [
    {
      id: 'gupta-idsa-uti-2011',
      type: 'article',
      title: 'International Clinical Practice Guidelines for the Treatment of Acute Uncomplicated Cystitis and Pyelonephritis in Women',
      authors: ['Gupta K', 'Hooton TM', 'Naber KG'],
      source: 'Clinical Infectious Diseases',
      license: 'Copyrighted',
    },
    {
      id: 'hooton-uti-2012',
      type: 'article',
      title: 'Clinical practice. Uncomplicated Urinary Tract Infection',
      authors: ['Hooton TM'],
      source: 'New England Journal of Medicine',
      license: 'Copyrighted',
    },
  ],
  crossReferences: [
    { targetId: 'infectious-disease-sepsis', targetType: 'condition', relationship: 'related', label: 'Sepsis' },
    { targetId: 'infectious-disease-antibiotic-resistance', targetType: 'concept', relationship: 'related', label: 'Antibiotic Resistance' },
    { targetId: 'infectious-disease-appropriate-antibiotic-use', targetType: 'concept', relationship: 'related', label: 'Appropriate Antibiotic Use' },
  ],
  tags: {
    systems: ['infectious-disease', 'urology'],
    topics: ['bacterial-infections', 'antimicrobial-stewardship'],
    keywords: ['UTI', 'cystitis', 'pyelonephritis', 'E. coli', 'ESBL', 'nitrofurantoin'],
  },
  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
