/**
 * Staphylococcal Infections - Comprehensive Educational Content
 *
 * Covers Staphylococcus aureus (MSSA and MRSA), coagulase-negative
 * staphylococci, and clinical syndromes from skin infections to
 * invasive disease including endocarditis and toxic shock syndrome.
 */

import { EducationalContent } from '../../types';

export const staphylococcalInfections: EducationalContent = {
  id: 'condition-staphylococcal-infections',
  type: 'condition',
  name: 'Staphylococcal Infections',
  alternateNames: ['Staph Infections', 'MRSA', 'MSSA', 'S. aureus Infections', 'Staph aureus'],

  levels: {
    1: {
      level: 1,
      summary: 'Staph infections are caused by bacteria that live on our skin and can cause problems ranging from minor skin infections to serious bloodstream infections.',
      explanation: `Staphylococcus (or "staph" for short) bacteria live on the skin and in the nose of many healthy people without causing any problems. But when these bacteria get inside the body through a cut, wound, or medical device, they can cause infections.

**Types of Staph Bacteria:**

1. **Regular Staph (MSSA)**
   - Can be treated with common antibiotics like penicillin-type drugs
   - Still can cause serious infections

2. **MRSA (Methicillin-Resistant Staphylococcus aureus)**
   - "Superbug" that resists many common antibiotics
   - Requires special antibiotics for treatment
   - Can be found in hospitals (HA-MRSA) or the community (CA-MRSA)

**Common Staph Skin Infections:**

- **Boils (Furuncles)**: Painful, red bumps filled with pus
- **Cellulitis**: Red, swollen, warm skin that spreads
- **Impetigo**: Crusty, honey-colored sores, common in children
- **Wound Infections**: Infections in cuts, scrapes, or surgical sites

**More Serious Staph Infections:**

- Blood infections (bacteremia/sepsis)
- Heart valve infections (endocarditis)
- Bone infections (osteomyelitis)
- Lung infections (pneumonia)
- Joint infections (septic arthritis)

**How Staph Spreads:**

- Skin-to-skin contact
- Sharing personal items (towels, razors, sports equipment)
- Touching contaminated surfaces
- Through medical devices (catheters, IV lines)

**Prevention:**

- Wash hands frequently with soap and water
- Keep cuts and scrapes clean and covered
- Do not share personal items
- Shower after exercise or sports
- Clean shared gym equipment before use

**When to See a Doctor:**

- Skin infection that does not improve or gets worse
- Fever with a skin infection
- Red streaks spreading from an infected area
- Infection around a wound or medical device`,
      keyTerms: [
        { term: 'staphylococcus', definition: 'A type of bacteria that normally lives on skin but can cause infections', pronunciation: 'staf-ih-loh-KOK-us' },
        { term: 'MRSA', definition: 'A type of staph that is resistant to many common antibiotics', pronunciation: 'MER-suh' },
        { term: 'boil', definition: 'A painful, pus-filled bump under the skin caused by staph infection' },
        { term: 'cellulitis', definition: 'A spreading skin infection causing redness, warmth, and swelling' },
      ],
      analogies: [
        'Staph bacteria on your skin are like seeds in a garden - usually harmless, but if they get into the wrong place, they can grow and cause problems.',
        'MRSA is like a lock that common antibiotic "keys" cannot open - you need a special key (antibiotic) to fight it.',
        'A boil is like a volcano under your skin - pressure builds up from pus until it needs to drain.',
      ],
      examples: [
        'A high school football player develops a boil on his thigh from sharing equipment with teammates.',
        'A diabetic patient gets cellulitis on her foot after a small cut becomes infected.',
        'A hospital patient develops MRSA at their IV catheter site.',
      ],
      patientCounselingPoints: [
        'Keep all wounds clean, dry, and covered until healed',
        'Do not try to squeeze or pop boils - this can spread the infection',
        'Finish all prescribed antibiotics even if you feel better',
        'Wash hands frequently, especially after touching infected areas',
        'Do not share personal items like towels, razors, or clothing',
      ],
    },
    2: {
      level: 2,
      summary: 'Staphylococcus aureus is a gram-positive coccus causing diverse infections from skin abscesses to life-threatening bacteremia and endocarditis, with MRSA strains requiring alternative antibiotics due to beta-lactam resistance.',
      explanation: `## Understanding Staphylococcal Infections

Staphylococcus aureus is one of the most important bacterial pathogens in humans. It colonizes about 30% of people (usually in the nose) without causing problems, but can cause serious infections when it enters tissues or the bloodstream.

## Microbiology

**Characteristics:**
- Gram-positive cocci in clusters (grape-like appearance)
- Catalase-positive (distinguishes from streptococci)
- Coagulase-positive (distinguishes from coagulase-negative staph)
- Golden pigment (staphyloxanthin) - hence "aureus" meaning golden

**MSSA vs MRSA:**
| Feature | MSSA | MRSA |
|---------|------|------|
| Methicillin/oxacillin | Susceptible | Resistant |
| Beta-lactam treatment | Yes | No |
| Alternative treatment | N/A | Vancomycin, daptomycin, others |
| Setting | Any | Hospital-acquired or community-acquired |

## Clinical Syndromes

### Skin and Soft Tissue Infections (Most Common)

**Purulent (with pus):**
- Folliculitis: Superficial hair follicle infection
- Furuncle (boil): Deeper hair follicle infection
- Carbuncle: Cluster of connected furuncles
- Abscess: Walled-off collection of pus

**Non-purulent:**
- Cellulitis: Spreading skin infection
- Erysipelas: Superficial cellulitis (usually strep)

**Treatment Principles:**
- Small abscesses: Incision and drainage alone may be sufficient
- Larger abscesses: I&D plus antibiotics
- Cellulitis: Antibiotics (cover MRSA if purulent or risk factors)

### Invasive Infections

**Bacteremia:**
- Bacteria in the bloodstream
- Can be primary (no clear source) or secondary (from another infection)
- Always evaluate for endocarditis

**Endocarditis:**
- Infection of heart valves
- Native valve or prosthetic valve
- Presents with fever, new heart murmur, embolic phenomena

**Osteomyelitis:**
- Bone infection
- Often from bloodstream spread or adjacent soft tissue infection
- Requires prolonged antibiotic courses (4-6 weeks)

**Pneumonia:**
- Can follow influenza (post-viral bacterial pneumonia)
- Necrotizing pneumonia with PVL-producing strains
- Often severe with high mortality

## Toxin-Mediated Diseases

**Toxic Shock Syndrome (TSS):**
- TSST-1 toxin causes massive immune activation
- High fever, rash, hypotension, multi-organ involvement
- Associated with tampon use (historical) or wound infections

**Scalded Skin Syndrome:**
- Exfoliative toxins cause skin to blister and peel
- Mainly affects infants and young children
- Looks like a burn but is caused by toxin, not direct infection

**Food Poisoning:**
- Enterotoxins cause rapid-onset vomiting and diarrhea
- From contaminated food (improperly stored)
- Symptoms begin 1-6 hours after eating

## Risk Factors for MRSA

- Previous MRSA infection or colonization
- Healthcare exposure (hospitalization, dialysis, nursing home)
- Injection drug use
- Athletes in contact sports
- Crowded living conditions
- Chronic skin conditions`,
      keyTerms: [
        { term: 'coagulase', definition: 'Enzyme that clots blood plasma; S. aureus is coagulase-positive' },
        { term: 'bacteremia', definition: 'Presence of bacteria in the bloodstream' },
        { term: 'endocarditis', definition: 'Infection of the heart valves, often from bloodstream bacteria' },
        { term: 'incision and drainage', definition: 'Surgical procedure to open and drain an abscess' },
        { term: 'TSST-1', definition: 'Toxic shock syndrome toxin-1; causes toxic shock syndrome' },
        { term: 'PVL', definition: 'Panton-Valentine leukocidin; toxin associated with severe infections' },
      ],
      analogies: [
        'Coagulase is like the bacteria\'s shield - it causes a clot to form around the bacteria, protecting them from the immune system.',
        'Endocarditis is like barnacles growing on the heart valves - the bacteria form clumps called vegetations.',
        'Toxic shock syndrome is like a fire alarm that won\'t stop - the immune system overreacts to toxins.',
      ],
    },
    3: {
      level: 3,
      summary: 'S. aureus pathogenesis involves multiple virulence factors including adhesins, toxins, and immune evasion mechanisms, with clinical management guided by infection source, MRSA status, and severity, requiring attention to source control and appropriate antibiotic selection.',
      explanation: `## Pathogenesis and Virulence

### Adhesion and Colonization

**Surface Proteins (MSCRAMMs):**
- Fibronectin-binding proteins (FnBPs): Bind extracellular matrix
- Clumping factors (ClfA, ClfB): Bind fibrinogen
- Collagen-binding protein: Facilitates bone and cartilage infection
- Protein A: Binds IgG Fc region, inhibits opsonization

**Biofilm Formation:**
- Polysaccharide intercellular adhesin (PIA)
- Important in device-related infections
- Protects bacteria from antibiotics and immune system
- Requires device removal for cure in most cases

### Toxins and Immune Evasion

**Cytolytic Toxins:**
| Toxin | Target | Clinical Association |
|-------|--------|---------------------|
| Alpha-toxin (Hla) | Multiple cell types | Tissue damage, pneumonia |
| PVL | Neutrophils | Necrotizing pneumonia, severe SSTI |
| Gamma-toxin | Leukocytes | Tissue invasion |
| Delta-toxin | Cell membranes | Various |

**Superantigens:**
- TSST-1: Toxic shock syndrome
- Enterotoxins (SE A-E): Food poisoning, TSS
- Activate T cells non-specifically (up to 20% vs 0.01% normal)
- Massive cytokine release

**Exfoliative Toxins:**
- ETA, ETB: Cleave desmoglein-1
- Cause superficial skin separation
- Staphylococcal scalded skin syndrome

**Immune Evasion:**
- Protein A: Blocks phagocytosis
- Capsule: Anti-phagocytic
- Catalase: Neutralizes oxidative burst
- Staphyloxanthin (golden pigment): Antioxidant

### Antibiotic Resistance Mechanisms

**Beta-Lactam Resistance:**
- MSSA: May produce beta-lactamase (need beta-lactamase-stable penicillin)
- MRSA: mecA gene encodes PBP2a with low beta-lactam affinity
- SCCmec element carries mecA (different types in HA-MRSA vs CA-MRSA)

**Other Resistance:**
| Resistance | Mechanism | Antibiotic Affected |
|------------|-----------|---------------------|
| VISA/VRSA | Cell wall thickening / vanA gene | Vancomycin |
| erm genes | Ribosomal methylation | Macrolides, clindamycin |
| Fluoroquinolone | Topoisomerase mutations | Ciprofloxacin, levofloxacin |

## Clinical Management

### Skin and Soft Tissue Infections

**Purulent SSTI (abscess):**
1. Incision and drainage (I&D) - essential for cure
2. Culture wound drainage
3. Antibiotics if:
   - Large abscess (>2 cm)
   - Multiple lesions
   - Surrounding cellulitis
   - Systemic symptoms
   - Immunocompromised host

**Empiric Antibiotic Selection:**
| Clinical Setting | MRSA Coverage | Options |
|-----------------|---------------|---------|
| Purulent, outpatient | Yes | TMP-SMX, doxycycline |
| Non-purulent cellulitis | Usually no | Cephalexin, dicloxacillin |
| Severe SSTI | Yes | Vancomycin |

### S. aureus Bacteremia (SAB)

**Evaluation:**
1. Remove any infected focus (catheter, abscess)
2. Repeat blood cultures to document clearance
3. Echocardiogram (TEE preferred) for endocarditis evaluation
4. Evaluate for metastatic infection (spine, joints)

**Treatment Principles:**
- MSSA: Nafcillin or cefazolin (beta-lactams superior to vancomycin)
- MRSA: Vancomycin or daptomycin
- Duration: Minimum 2 weeks (uncomplicated) to 4-6 weeks (complicated)

**Complicated vs Uncomplicated SAB:**
| Uncomplicated | Complicated |
|---------------|-------------|
| Removable focus | Endocarditis |
| Negative follow-up cultures (2-4 days) | Persistent bacteremia |
| Afebrile within 72 hours | Metastatic infection |
| No endocarditis or metastatic foci | Retained intravascular device |

### Device-Related Infections

- Removal generally required for cure
- Biofilm prevents antibiotic penetration
- Salvage therapy with rifampin (only after blood sterile)
- Duration depends on device type and ability to remove`,
      keyTerms: [
        { term: 'MSCRAMM', definition: 'Microbial surface components recognizing adhesive matrix molecules; bacterial adhesins' },
        { term: 'PBP2a', definition: 'Altered penicillin-binding protein encoded by mecA; confers MRSA resistance' },
        { term: 'superantigen', definition: 'Toxin that activates T cells non-specifically, causing massive cytokine release' },
        { term: 'VISA', definition: 'Vancomycin-intermediate S. aureus; reduced vancomycin susceptibility' },
        { term: 'TEE', definition: 'Transesophageal echocardiogram; more sensitive than TTE for detecting endocarditis' },
      ],
      clinicalNotes: 'For S. aureus bacteremia: Always perform echocardiography to evaluate for endocarditis. Beta-lactams are superior to vancomycin for MSSA - de-escalate when susceptibilities return. Infectious disease consultation for SAB is associated with improved outcomes. Source control (removing infected devices, draining abscesses) is essential.',
    },
    4: {
      level: 4,
      summary: 'Advanced management of staphylococcal infections requires optimization of source control, selection of appropriate agents based on MIC and PK/PD principles, management of complications including persistent bacteremia and metastatic infection, and recognition of toxin-mediated syndromes requiring adjunctive therapies.',
      explanation: `## Pharmacokinetic/Pharmacodynamic Optimization

### Beta-Lactam Therapy for MSSA

**Agent Selection:**
- Nafcillin: Hepatic metabolism, high protein binding
- Oxacillin: Similar to nafcillin
- Cefazolin: Renal excretion, better tolerated, increasingly preferred

**PK/PD Target:**
- Time above MIC (fT>MIC) drives efficacy
- Goal: >50% fT>MIC for killing, higher for severe infections
- Continuous infusion may optimize exposure

**Cefazolin vs Nafcillin:**
- MSSA bloodstream infection studies show non-inferiority
- Cefazolin: Better tolerated, less phlebitis, once-daily dosing in some cases
- Concern about inoculum effect largely theoretical

### Vancomycin Therapy for MRSA

**Dosing:**
- Loading dose: 25-30 mg/kg in severe infection
- Maintenance: 15-20 mg/kg q8-12h
- AUC/MIC 400-600 target (replaces trough-based dosing)
- Bayesian software for individualized dosing

**Monitoring:**
- AUC-guided dosing reduces nephrotoxicity vs trough-only
- Monitor renal function
- Consider alternative for MIC ≥2 (treatment failure more likely)

**Limitations:**
- Slow bactericidal activity
- Poor lung penetration
- Nephrotoxicity
- Red man syndrome (histamine release)

### Alternative MRSA Agents

| Agent | Advantages | Disadvantages |
|-------|------------|---------------|
| Daptomycin | Bactericidal, once-daily | Inactivated by surfactant (not for pneumonia), CPK monitoring |
| Linezolid | Oral bioavailability, lung penetration | Myelosuppression, serotonin syndrome, neuropathy |
| Ceftaroline | Beta-lactam with MRSA activity | Limited experience, cost |
| Dalbavancin | Weekly dosing | Cost, limited experience in complex infections |

## Complicated Clinical Scenarios

### Persistent Bacteremia

**Definition:** Positive blood cultures >72 hours despite appropriate therapy

**Evaluation:**
1. Reassess source control (remove devices, drain abscesses)
2. Repeat imaging for metastatic foci
3. TEE if not already done
4. Consider vancomycin MIC and serum levels
5. ID consultation

**Management Options:**
- Add rifampin (only if blood sterile - prevents resistance)
- Switch to daptomycin (consider high-dose 10-12 mg/kg)
- Add beta-lactam to vancomycin or daptomycin (synergy)
- Combination therapy: daptomycin + ceftaroline

### Infective Endocarditis

**Native Valve:**
- MSSA: Nafcillin/cefazolin 6 weeks
- MRSA: Vancomycin or daptomycin 6 weeks
- Surgery for: Heart failure, uncontrolled infection, embolic risk

**Prosthetic Valve:**
- Higher mortality
- Often requires surgical intervention
- Triple therapy: Vancomycin + rifampin + gentamicin
- Rifampin added after bacteremia cleared (day 3-5)
- Minimum 6 weeks of therapy

### Toxic Shock Syndrome

**Recognition:**
- Fever, hypotension, diffuse rash
- Multi-organ involvement
- May occur with minor soft tissue infection

**Management:**
1. Aggressive fluid resuscitation
2. Vasopressors as needed
3. Source control (debridement, removal of tampons/packing)
4. Antibiotics: Clindamycin (inhibits toxin production) + beta-lactam/vancomycin
5. IVIG (neutralizes superantigen)

### Necrotizing Fasciitis

**Clinical Features:**
- Pain out of proportion to exam
- Rapid progression
- Systemic toxicity, shock
- May have crepitus, hemorrhagic bullae

**Management:**
- Emergent surgical exploration and debridement
- Do not delay surgery for imaging
- Broad-spectrum antibiotics: Vancomycin + piperacillin-tazobactam + clindamycin
- Serial debridements until infection controlled
- High mortality without prompt surgery

## Special Populations

### Injection Drug Users

- High rates of S. aureus bacteremia
- Often MRSA
- Tricuspid valve endocarditis common
- Right-sided endocarditis: Consider shorter course (2 weeks) if uncomplicated

### Dialysis Patients

- Frequent catheter-related infections
- High MRSA colonization rates
- Consider vancomycin loading and maintenance dosing adjusted for dialysis schedule

### Prosthetic Joint Infection

**Two-Stage Exchange:**
1. Remove prosthesis, debride, place antibiotic spacer
2. Prolonged IV antibiotics (4-6 weeks)
3. Repeat surgery to place new prosthesis

**Debridement and Retention:**
- Selected cases (acute infection, <3 weeks, stable implant)
- Rifampin-based combination therapy
- Lower success rates for S. aureus

**Chronic Suppression:**
- When surgery not possible
- Oral antibiotics indefinitely
- Controls but does not cure infection`,
      keyTerms: [
        { term: 'AUC/MIC', definition: 'Area under the curve divided by MIC; pharmacodynamic target for vancomycin dosing' },
        { term: 'inoculum effect', definition: 'Reduced antibiotic efficacy at high bacterial density; theoretical concern with some beta-lactams' },
        { term: 'necrotizing fasciitis', definition: 'Rapidly progressive deep soft tissue infection requiring emergent surgical debridement' },
        { term: 'two-stage exchange', definition: 'Surgical approach to prosthetic joint infection with prosthesis removal, antibiotics, then reimplantation' },
        { term: 'chronic suppression', definition: 'Long-term oral antibiotic therapy to control (not cure) device-associated infection' },
      ],
      clinicalNotes: 'Key management principles: 1) Beta-lactams are superior to vancomycin for MSSA - always de-escalate. 2) For persistent MRSA bacteremia, consider combination therapy (daptomycin + beta-lactam) and high-dose daptomycin. 3) Add clindamycin for toxin-mediated disease. 4) ID consultation for SAB improves outcomes. 5) Source control is paramount - no antibiotic overcomes inadequate source control.',
    },
    5: {
      level: 5,
      summary: 'Expert management of staphylococcal infections integrates molecular diagnostics for rapid identification and resistance detection, optimized combination therapy strategies, novel therapeutic approaches including IVIG and phage therapy, and antimicrobial stewardship within evolving resistance patterns.',
      explanation: `## Advanced Diagnostics

### Rapid Molecular Methods

**PCR-Based Identification:**
- Direct detection of mecA/mecC from blood cultures
- Results in 1-2 hours vs 24-48 hours for traditional methods
- Enables earlier targeted therapy

**MALDI-TOF Mass Spectrometry:**
- Species identification within minutes from colony
- Resistance detection evolving

**Whole Genome Sequencing:**
- Complete resistance profile
- Virulence gene detection (PVL, TSST-1)
- Outbreak investigation and transmission tracking
- Emerging in clinical practice

### Biomarkers

**Procalcitonin:**
- Helps distinguish bacteremia from colonization
- May guide duration of therapy
- Lower values support shorter courses in some studies

**D-dimer:**
- Elevated in endocarditis with embolic events
- Part of risk stratification

## Combination Therapy Strategies

### Beta-Lactam + Daptomycin/Vancomycin

**Rationale:**
- Beta-lactams alter cell wall, enhance daptomycin/vancomycin binding
- "Seesaw effect": Daptomycin resistance associated with increased beta-lactam susceptibility
- PBP inhibition depletes cell wall precursors that sequester daptomycin

**Evidence:**
- Observational studies show improved outcomes
- No large RCT
- Consider for persistent bacteremia, high-risk endocarditis

### Daptomycin + Ceftaroline

**Mechanism:**
- Ceftaroline active against MRSA (binds PBP2a)
- Synergy demonstrated in vitro
- May overcome daptomycin non-susceptibility

**Clinical Use:**
- Refractory MRSA bacteremia
- Consider high-dose daptomycin (10-12 mg/kg) plus ceftaroline
- Limited evidence base but growing experience

### Rifampin Combinations

**Role:**
- Biofilm penetration
- Excellent for prosthetic device infections
- Must be used with second active agent (rapid resistance development)

**Timing:**
- Add only after blood cultures negative
- Adding to positive cultures selects resistance

**Combinations:**
- With vancomycin, daptomycin, or fluoroquinolone
- For prosthetic joint infection, prosthetic valve endocarditis

## Novel and Adjunctive Therapies

### Intravenous Immunoglobulin (IVIG)

**Indications:**
- Toxic shock syndrome
- Necrotizing fasciitis with systemic toxicity
- Severe PVL pneumonia

**Mechanism:**
- Contains antibodies that neutralize superantigens and other toxins
- Anti-inflammatory effects

**Dosing:**
- 1-2 g/kg, may repeat
- Timing: Early administration likely more effective

### Monoclonal Antibodies

**In Development:**
- Anti-alpha toxin antibodies
- Anti-clumping factor antibodies
- Limited success to date in clinical trials
- Challenge: Multiple virulence factors to target

### Bacteriophage Therapy

**Current Status:**
- Compassionate use for refractory infections
- Individualized phage selection
- FDA emergency IND pathway

**Potential Applications:**
- Prosthetic device infections
- Persistent bacteremia despite standard therapy
- Endocarditis with contraindication to surgery

### Vaccines

**Historical Failures:**
- Multiple vaccine candidates have failed in trials
- StaphVax (capsular polysaccharide): Phase III failure
- V710 (IsdB): Increased mortality in subgroup, stopped

**Ongoing Research:**
- Multi-component vaccines targeting multiple antigens
- Alternative endpoints (colonization reduction)

## Antimicrobial Stewardship Considerations

### MSSA De-escalation

**Importance:**
- Beta-lactams superior to vancomycin for MSSA
- Vancomycin associated with higher treatment failure rates
- Cost and toxicity benefits of de-escalation

**Implementation:**
- Prospective audit and feedback
- Automatic alerts when MSSA identified
- Stewardship metrics for de-escalation rates

### Duration Optimization

**S. aureus Bacteremia:**
- Traditional: Complex 4-6 weeks, uncomplicated 2 weeks
- Emerging evidence: Shorter courses may be safe in select patients
- Risk stratification tools under development

**Skin and Soft Tissue:**
- 5-7 days for uncomplicated SSTI
- Shorter than historical practice
- Based on clinical response

### Vancomycin AUC-Based Dosing

**Benefits:**
- Reduced nephrotoxicity compared to trough-only
- More precise target attainment
- Consensus guidelines (2020) recommend AUC-guided dosing

**Implementation:**
- Bayesian software
- Population PK models
- Two-level sampling strategies

## Emerging Threats

### VISA and VRSA

**VISA:**
- Thickened cell wall traps vancomycin
- MIC 4-8 mcg/mL
- Associated with vancomycin exposure

**VRSA:**
- vanA gene acquired from enterococci
- MIC ≥16 mcg/mL
- Rare but concerning

**Management:**
- Daptomycin, linezolid, ceftaroline
- Combination therapy often used
- ID consultation essential

### mecC MRSA

- Novel mecC gene (formerly mecALGA251)
- May test MSSA by some methods
- Livestock-associated
- Requires awareness of limitations in detection

### Daptomycin Non-Susceptibility

**Mechanisms:**
- Cell membrane alterations
- mprF mutations
- May emerge during therapy

**Risk Factors:**
- Prior daptomycin exposure
- Deep-seated infections with high bacterial burden
- Underdosing

**Management:**
- Increase daptomycin dose
- Add beta-lactam (seesaw effect)
- Consider ceftaroline or linezolid`,
      keyTerms: [
        { term: 'seesaw effect', definition: 'Phenomenon where development of daptomycin resistance is associated with increased beta-lactam susceptibility' },
        { term: 'mecC', definition: 'Novel mecA homolog conferring MRSA phenotype; may be missed by some detection methods' },
        { term: 'Bayesian dosing', definition: 'Software-assisted individualized dosing using population pharmacokinetics and patient data' },
        { term: 'phage therapy', definition: 'Use of bacteriophages (viruses that infect bacteria) to treat bacterial infections' },
        { term: 'VRSA', definition: 'Vancomycin-resistant S. aureus; rare but highly resistant, acquired vanA from enterococci' },
      ],
      clinicalNotes: `Key expert-level principles:

1. **Rapid diagnostics**: mecA PCR from blood enables earlier optimal therapy
2. **Combination therapy**: Daptomycin + ceftaroline or daptomycin/vancomycin + beta-lactam for refractory cases
3. **AUC-guided vancomycin**: Reduces toxicity while maintaining efficacy (target 400-600)
4. **De-escalation**: MSSA with beta-lactam has better outcomes than vancomycin
5. **Rifampin**: Only add after blood sterile; essential for prosthetic infections
6. **Source control**: No antibiotic compensates for inadequate drainage or device removal
7. **Adjunctive IVIG**: Consider for toxic shock and severe PVL pneumonia
8. **Duration**: Evidence supports shorter courses for many infections with adequate source control`,
    },
  },

  media: [
    {
      id: 'staph-virulence-factors',
      type: 'diagram',
      filename: 'staph-virulence-factors.svg',
      title: 'S. aureus Virulence Factors',
      description: 'Surface proteins, toxins, and immune evasion mechanisms',
    },
    {
      id: 'mrsa-resistance-mechanism',
      type: 'diagram',
      filename: 'mrsa-resistance.svg',
      title: 'MRSA Resistance Mechanism',
      description: 'PBP2a and SCCmec element conferring beta-lactam resistance',
    },
    {
      id: 'sab-algorithm',
      type: 'diagram',
      filename: 'sab-management.svg',
      title: 'S. aureus Bacteremia Management',
      description: 'Algorithm for evaluation and treatment of SAB',
    },
  ],

  citations: [
    {
      id: 'liu-ssti-2011',
      type: 'article',
      title: 'Clinical Practice Guidelines by the Infectious Diseases Society of America for the Treatment of Methicillin-Resistant Staphylococcus aureus Infections in Adults and Children',
      authors: ['Liu C', 'et al.'],
      source: 'Clinical Infectious Diseases',
    },
    {
      id: 'vancomycin-guidelines-2020',
      type: 'article',
      title: 'Therapeutic Monitoring of Vancomycin for Serious Methicillin-Resistant Staphylococcus aureus Infections: A Revised Consensus Guideline',
      authors: ['Rybak MJ', 'et al.'],
      source: 'American Journal of Health-System Pharmacy',
    },
    {
      id: 'mandell-staph',
      type: 'textbook',
      title: 'Mandell, Douglas, and Bennett\'s Principles and Practice of Infectious Diseases',
      source: 'Elsevier',
      chapter: 'Staphylococcus aureus',
    },
  ],

  crossReferences: [
    { targetId: 'condition-streptococcal-infections', targetType: 'condition', relationship: 'related', label: 'Streptococcal Infections' },
    { targetId: 'topic-antibiotic-resistance', targetType: 'topic', relationship: 'related', label: 'Antibiotic Resistance' },
    { targetId: 'condition-endocarditis', targetType: 'condition', relationship: 'related', label: 'Infective Endocarditis' },
    { targetId: 'condition-cellulitis', targetType: 'condition', relationship: 'related', label: 'Cellulitis' },
  ],

  tags: {
    systems: ['infectious-disease', 'integumentary', 'cardiovascular'],
    topics: ['bacteriology', 'antimicrobial-therapy', 'critical-care'],
    keywords: ['MRSA', 'MSSA', 'staph aureus', 'bacteremia', 'endocarditis', 'skin infection', 'vancomycin'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery', 'infectious disease'],
    },
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default staphylococcalInfections;
