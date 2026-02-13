/**
 * Bacterial Skin Infections - Comprehensive Educational Content
 *
 * Covers impetigo, cellulitis, folliculitis, abscesses, necrotizing fasciitis,
 * and other bacterial skin infections.
 */

import { EducationalContent } from '../../../types';

export const bacterialSkinInfectionsContent: EducationalContent = {
  id: 'dermatology-bacterial-infections',
  type: 'condition',
  name: 'Bacterial Skin Infections',
  alternateNames: ['Skin and Soft Tissue Infections', 'SSTI', 'Pyoderma'],

  levels: {
    1: {
      level: 1,
      summary: 'Bacterial skin infections happen when germs get into your skin through cuts, scrapes, or hair follicles - they can cause redness, swelling, and pus.',
      explanation: `Bacteria are tiny germs that can cause skin infections when they get past your skin's natural defenses. These infections can range from minor to serious.

**Common Types of Bacterial Skin Infections:**

**Impetigo** (School Sores):
- Very common in children
- Starts as small blisters that break open and form honey-colored crusts
- Spreads easily to other people
- Usually on face, arms, or legs

**Folliculitis** (Infected Hair Follicles):
- Small red bumps around hair follicles
- May have a white center (pus)
- Often from shaving or tight clothing
- Common on face, scalp, legs, or buttocks

**Boils** (Furuncles):
- Larger, deeper, painful lumps
- Start around a hair follicle
- Fill with pus and can burst
- Common on face, neck, armpits, thighs

**Cellulitis**:
- Deeper skin infection
- Area becomes red, warm, swollen, and tender
- Skin may look shiny
- Often on legs
- Can make you feel sick with fever

**How Do These Infections Happen?**
- Cuts, scrapes, or bug bites that break the skin
- Skin conditions like eczema that weaken the skin barrier
- Sharing towels, razors, or sports equipment
- Not cleaning wounds properly

**When to See a Doctor:**
- Red area is spreading
- You have fever or feel very sick
- The infected area is very painful
- Red streaks coming from the infected area
- Infection is on your face

**Prevention Tips:**
- Clean cuts and scrapes with soap and water
- Keep wounds covered until healed
- Don't share personal items (towels, razors)
- Wash your hands often`,
      keyTerms: [
        { term: 'bacteria', definition: 'Tiny germs that can cause infections' },
        { term: 'impetigo', definition: 'A skin infection that causes crusty sores, common in children' },
        { term: 'boil', definition: 'A painful, pus-filled lump that forms around a hair follicle' },
        { term: 'cellulitis', definition: 'A deeper skin infection causing redness, warmth, and swelling' },
        { term: 'pus', definition: 'Thick, yellowish liquid that forms when the body fights infection' },
      ],
      analogies: [
        'Bacteria on your skin are usually harmless, like visitors outside your house. An infection happens when they get inside through a door (a cut).',
        'A boil is like a balloon filling with pus that eventually pops.',
        'Cellulitis spreads under the skin like water spreading under a carpet.',
      ],
      examples: [
        'A child with honey-colored crusts around their nose and mouth after having a cold likely has impetigo.',
        'A red, warm, swollen area on the leg after a bug bite might be cellulitis.',
      ],
    },
    2: {
      level: 2,
      summary: 'Bacterial skin infections are classified by depth and severity, with Staphylococcus aureus and Streptococcus pyogenes being the most common pathogens, requiring appropriate antibiotic selection and wound care.',
      explanation: `## Classification by Depth

**Superficial Infections**:
| Condition | Description | Common Cause |
|-----------|-------------|--------------|
| Impetigo | Honey-crusted erosions | S. aureus, GAS |
| Bullous impetigo | Large flaccid blisters | S. aureus (exfoliative toxin) |
| Ecthyma | Deeper crusted ulcers | GAS > S. aureus |
| Folliculitis | Pustules at hair follicles | S. aureus |

**Deeper Soft Tissue Infections**:
| Condition | Description |
|-----------|-------------|
| Furuncle (boil) | Abscess involving hair follicle |
| Carbuncle | Coalescence of multiple furuncles |
| Cellulitis | Infection of dermis/subcutaneous tissue |
| Erysipelas | Superficial cellulitis with lymphatic involvement |
| Abscess | Localized collection of pus |

## Common Pathogens

**Staphylococcus aureus**:
- Most common cause of skin infections
- MRSA: Methicillin-resistant strains
  - Community-associated (CA-MRSA): Often USA300 strain
  - Healthcare-associated (HA-MRSA)
- Produces toxins: Exfoliative toxin, Panton-Valentine leukocidin (PVL)

**Streptococcus pyogenes (Group A Strep)**:
- Common in cellulitis, erysipelas
- Can cause post-streptococcal glomerulonephritis
- Produces erythrogenic toxins

## Clinical Features

### Impetigo
- **Non-bullous**: Starts as vesicles, ruptures to form honey-colored crusts
- **Bullous**: Flaccid blisters with clear then turbid fluid
- Face, extremities common
- Highly contagious

### Cellulitis vs Erysipelas
| Feature | Cellulitis | Erysipelas |
|---------|-----------|------------|
| Depth | Deep dermis, subcutis | Superficial dermis |
| Border | Indistinct | Sharp, elevated |
| Surface | May be normal | Peau d'orange |
| Cause | S. aureus or GAS | Usually GAS |

### Abscess
- Fluctuant, tender nodule
- May have surrounding cellulitis
- Requires incision and drainage

## Treatment Approach

**Impetigo**:
- Limited: Topical mupirocin or retapamulin
- Extensive: Oral antibiotics (cephalexin, dicloxacillin)

**Cellulitis (non-purulent)**:
- Mild: Oral cephalexin or dicloxacillin
- Moderate-severe: IV cefazolin or nafcillin
- Cover GAS primarily

**Abscess/Purulent Cellulitis (suspect MRSA)**:
- Abscess: I&D is primary treatment
- Antibiotics if: Extensive cellulitis, systemic symptoms, immunocompromised
- Cover MRSA: TMP-SMX, doxycycline, clindamycin

**MRSA Coverage Options**:
| Oral | IV |
|------|-----|
| TMP-SMX | Vancomycin |
| Doxycycline | Daptomycin |
| Clindamycin | Linezolid |

## Prevention

**Recurrent Infections**:
- Decolonization: Mupirocin nares, chlorhexidine body washes
- Treat underlying conditions (eczema, diabetes)
- Household decolonization if needed

**Wound Care**:
- Clean with soap and water
- Keep covered until healed
- Watch for signs of infection`,
      keyTerms: [
        { term: 'MRSA', definition: 'Methicillin-resistant Staphylococcus aureus - a resistant bacterial strain', pronunciation: 'MER-sah' },
        { term: 'erysipelas', definition: 'Superficial skin infection with sharp, raised borders', pronunciation: 'air-ih-SIP-eh-las' },
        { term: 'furuncle', definition: 'An abscess originating from a hair follicle (boil)', pronunciation: 'FUR-unk-ul' },
        { term: 'incision and drainage', definition: 'Surgical opening of an abscess to release pus (I&D)' },
        { term: 'decolonization', definition: 'Treatment to remove bacteria from the skin and nose' },
        { term: 'Group A Strep', definition: 'Streptococcus pyogenes - common cause of strep throat and skin infections' },
      ],
      examples: [
        'A wrestler with a tender, fluctuant nodule on the thigh likely has a MRSA abscess needing I&D.',
        'A patient with a sharply demarcated, raised, red facial plaque has erysipelas.',
      ],
    },
    3: {
      level: 3,
      summary: 'Bacterial skin infections require systematic evaluation of severity, appropriate microbiological considerations including MRSA risk, and recognition of serious or necrotizing infections requiring urgent intervention.',
      explanation: `## Risk Stratification

### IDSA Severity Classification

**Mild** (outpatient, oral antibiotics or topical):
- Impetigo
- Folliculitis
- Minor wound infection

**Moderate** (oral or initial IV antibiotics):
- Cellulitis with systemic symptoms
- Deeper abscess
- Significant comorbidities

**Severe** (hospitalization, IV antibiotics):
- Systemic signs of sepsis
- Rapidly spreading
- Deep tissue involvement
- Immunocompromised host
- Failed oral therapy

### MRSA Risk Assessment

**Factors Favoring CA-MRSA**:
- Purulent/abscess-forming infection
- Prior MRSA infection
- Contact sports, incarceration, IV drug use
- Community with high MRSA prevalence
- Failure of beta-lactam antibiotics

**Non-Purulent Cellulitis**:
- Usually streptococcal
- MRSA coverage not routine unless high risk

## Specific Conditions

### Necrotizing Fasciitis

**Life-threatening emergency!**

**Clinical Features**:
- Pain out of proportion to examination
- Rapidly spreading
- Skin changes: Bullae, necrosis, crepitus
- Systemic toxicity
- May appear deceptively superficial initially

**Types**:
| Type | Microbiology | Association |
|------|--------------|-------------|
| Type I | Polymicrobial | Diabetes, surgery, perineal |
| Type II | Monomicrobial (GAS, S. aureus) | Healthy individuals |
| Type III | Vibrio vulnificus | Saltwater exposure, liver disease |

**LRINEC Score** (Laboratory Risk Indicator):
- CRP >150 mg/L: 4 points
- WBC >15,000: 1 point; >25,000: 2 points
- Hemoglobin <13.5: 1 point; <11: 2 points
- Sodium <135: 2 points
- Creatinine >1.6: 2 points
- Glucose >180: 1 point
- Score >= 6: High suspicion

**Management**:
- Emergent surgical debridement
- Broad-spectrum IV antibiotics
- ICU support

### Staphylococcal Scalded Skin Syndrome (SSSS)

**Pathophysiology**:
- Exfoliative toxins A and B from S. aureus
- Cleave desmoglein 1 (in stratum granulosum)
- Similar mechanism to pemphigus foliaceus

**Clinical**:
- Primarily affects neonates and young children
- Diffuse erythema, then superficial blistering
- Nikolsky sign positive
- Mucous membranes SPARED (distinguishes from TEN)

**Management**:
- IV antistaphylococcal antibiotics
- Wound care
- Fluid/electrolyte management

### Toxic Shock Syndrome

**Staphylococcal TSS**:
- TSST-1 (superantigen)
- Fever, diffuse erythematous rash, hypotension
- Desquamation 1-2 weeks later (palms/soles)
- Multi-organ involvement

**Streptococcal TSS**:
- Usually associated with invasive soft tissue infection
- Higher mortality than staph TSS
- GAS produces multiple superantigens

## Antibiotic Selection Details

### Non-Purulent Cellulitis

**Outpatient**:
- Cephalexin 500mg QID or
- Dicloxacillin 500mg QID

**Inpatient**:
- Cefazolin 1-2g IV q8h or
- Nafcillin 1-2g IV q4-6h

**With MRSA Risk**:
- Add TMP-SMX or doxycycline to above, or
- Vancomycin IV

### Purulent Infection (Cover MRSA)

**Outpatient**:
| Agent | Dose |
|-------|------|
| TMP-SMX | 1-2 DS tabs BID |
| Doxycycline | 100mg BID |
| Clindamycin | 300-450mg TID |

**Inpatient**:
| Agent | Dose |
|-------|------|
| Vancomycin | 15-20 mg/kg q8-12h (adjust to trough) |
| Daptomycin | 4-6 mg/kg daily |
| Linezolid | 600mg BID |

### Duration

- Uncomplicated cellulitis: 5-7 days
- Abscess with cellulitis: 5-7 days after I&D
- Severe: 7-14 days
- Necrotizing fasciitis: Until debridements complete + clinical improvement

## Special Populations

**Diabetic Foot Infections**:
- Often polymicrobial
- Consider Pseudomonas, anaerobes
- Deep cultures from base of wound
- Assess for osteomyelitis (probe-to-bone)

**Bite Wounds**:
- Dog/cat bites: Pasteurella multocida common
- Human bites: Eikenella, anaerobes
- Prophylaxis and treatment: Amoxicillin-clavulanate`,
      keyTerms: [
        { term: 'necrotizing fasciitis', definition: 'Rapidly progressive, life-threatening infection of deep fascia requiring emergent surgery', pronunciation: 'NEK-roh-tye-zing fash-ee-EYE-tis' },
        { term: 'LRINEC score', definition: 'Laboratory scoring system to help identify necrotizing fasciitis' },
        { term: 'SSSS', definition: 'Staphylococcal Scalded Skin Syndrome - toxin-mediated superficial skin loss' },
        { term: 'TSST-1', definition: 'Toxic Shock Syndrome Toxin-1 - superantigen causing staphylococcal TSS' },
        { term: 'superantigen', definition: 'Toxin that activates large numbers of T cells, causing cytokine storm' },
        { term: 'desmoglein', definition: 'Cell adhesion protein targeted by SSSS toxins and pemphigus antibodies' },
      ],
      clinicalNotes: 'Pain out of proportion is the key early sign of necrotizing fasciitis - do not delay surgical consultation. SSSS spares mucous membranes (Dsg1 not expressed there), unlike TEN which involves mucosa. Non-purulent cellulitis is usually streptococcal; purulent/abscess infections should be assumed MRSA until proven otherwise.',
    },
    4: {
      level: 4,
      summary: 'Advanced bacterial skin infection management requires understanding molecular pathogenesis, optimal surgical timing, antimicrobial stewardship, and management of recurrent and complicated infections.',
      explanation: `## Molecular Pathogenesis

### Staphylococcus aureus Virulence

**Surface Proteins**:
- Protein A: Binds Fc region, inhibits opsonization
- Clumping factors: Fibrinogen binding
- Fibronectin-binding proteins: Tissue adherence
- Collagen adhesin: Tissue invasion

**Secreted Toxins**:
| Toxin | Mechanism | Disease |
|-------|-----------|---------|
| Alpha-toxin | Pore formation in cells | Dermonecrosis |
| PVL | Leukocyte lysis | CA-MRSA abscesses |
| Exfoliative toxins | Dsg1 cleavage | SSSS |
| TSST-1 | Superantigen (Vbeta2) | TSS |
| Enterotoxins | Superantigens, emesis | Food poisoning, TSS |

**Panton-Valentine Leukocidin (PVL)**:
- Bi-component pore-forming toxin
- Associated with CA-MRSA
- Controversial role in virulence
- May explain necrotic, abscess-forming phenotype

### Group A Streptococcus Virulence

**Surface Factors**:
- M protein: Anti-phagocytic, serotype-specific
- Hyaluronic acid capsule: Camouflage (similar to host)
- Lipoteichoic acid: Adhesion

**Secreted Factors**:
- Streptolysin O, S: Hemolysis, cytotoxicity
- Streptococcal pyrogenic exotoxins (Spe): Superantigens
- Streptococcal cysteine protease (SpeB): Tissue degradation
- Streptokinase: Plasmin activation
- Hyaluronidase: Tissue spreading

### MRSA Epidemiology Evolution

**CA-MRSA Emergence**:
- USA300 clone dominant in US
- SCCmec type IV (smaller, faster spread)
- Often PVL+
- Community spread: Sports, prisons, households

**Molecular Resistance**:
- mecA gene encodes PBP2a
- Low affinity for beta-lactams
- Carried on SCCmec mobile element

## Surgical Principles

### Abscess Management

**I&D Technique**:
1. Prep, local anesthesia (field block)
2. Linear incision over fluctuance
3. Express all purulent material
4. Break up loculations with hemostat
5. Irrigate cavity
6. Loose packing (controversial, may not improve outcomes)
7. Follow-up in 48 hours

**Antibiotics Post-I&D**:
- TMP-SMX or doxycycline if:
  - Multiple abscesses
  - Extensive surrounding cellulitis
  - Systemic symptoms
  - High-risk location (face, hands, genitals)
  - Immunocompromised
  - Inadequate initial drainage

### Necrotizing Fasciitis Surgery

**Principles**:
- Emergent debridement (don't wait for imaging!)
- Wide debridement to bleeding tissue
- Repeat debridements q24-48h until complete
- May require multiple returns to OR
- Negative pressure wound therapy
- Delayed reconstruction

**Finger Test**:
- Bedside diagnostic aid
- Local anesthesia, small incision to fascia
- Finger easily separates fascia from tissue = positive
- Proceed to OR immediately

## Antimicrobial Stewardship

### Optimal Duration

**IDSA Guidelines**:
- Uncomplicated cellulitis: 5 days (can extend if not improving)
- Abscess after I&D: 5-7 days (or no antibiotics if uncomplicated)
- Avoid prolonged courses

### When NOT to Prescribe Antibiotics

- Small abscess, completely drained, no risk factors
- Mild folliculitis
- Stasis dermatitis mimicking cellulitis
- Inflammatory conditions (not infectious)

### IV-to-Oral Transition

Criteria for switch:
- Afebrile >24 hours
- Improving erythema/swelling
- WBC normalizing
- Tolerating oral intake
- Reliable outpatient follow-up

## Recurrent Infections

### Evaluation

**Consider**:
- Decolonization status
- Household contacts
- Underlying conditions (diabetes, HIV, atopy)
- Persistent source (hidradenitis, pilonidal)
- Immunodeficiency workup if appropriate

### Decolonization Protocols

**Patient Decolonization**:
- Mupirocin 2% ointment to nares BID x 5 days
- Chlorhexidine 4% body wash daily x 5-14 days
- Clean towels, linens daily during treatment
- Repeat monthly x 3-6 months if recurrent

**Household Decolonization**:
- All household members simultaneously
- Same protocol
- Environmental cleaning

### Chronic Suppression

For severe recurrent MRSA:
- Long-term low-dose TMP-SMX
- Monthly bleach baths
- Optimize underlying conditions

## Complicated Infections

### Diabetic Foot Infection

**Classification (IWGDF/IDSA)**:
| Grade | Description | Treatment |
|-------|-------------|-----------|
| 1 | Uninfected | None |
| 2 | Mild (superficial, limited) | Oral antibiotics |
| 3 | Moderate (deeper, larger) | Oral or IV, possible surgery |
| 4 | Severe (systemic signs, limb-threatening) | IV antibiotics, surgery, consider amputation |

**Microbiology**:
- Mild, antibiotic-naive: S. aureus, streptococci
- Chronic/severe: Polymicrobial (gram-positives, gram-negatives, anaerobes)
- Pseudomonas: If macerated, prior broad-spectrum antibiotics

**Osteomyelitis Evaluation**:
- Probe-to-bone test: High specificity if positive
- MRI: Sensitive and specific
- Bone biopsy: Gold standard for culture

### Injection Drug Use-Related

**Special Considerations**:
- Unusual organisms: Pseudomonas, Serratia
- Consider spinal epidural abscess
- Often present late with advanced disease
- Social factors affect disposition`,
      keyTerms: [
        { term: 'PVL', definition: 'Panton-Valentine Leukocidin - toxin associated with CA-MRSA, causes leukocyte destruction' },
        { term: 'SCCmec', definition: 'Staphylococcal Cassette Chromosome mec - mobile element carrying mecA resistance gene' },
        { term: 'USA300', definition: 'Dominant CA-MRSA clone in the United States' },
        { term: 'mecA', definition: 'Gene encoding altered penicillin-binding protein conferring methicillin resistance' },
        { term: 'probe-to-bone', definition: 'Physical exam test for osteomyelitis using sterile probe through ulcer' },
        { term: 'finger test', definition: 'Bedside surgical test for necrotizing fasciitis' },
      ],
      clinicalNotes: 'PVL positivity is associated with CA-MRSA but its direct role in virulence remains debated. Household decolonization is often necessary for recurrent infections - test and treat all close contacts. For diabetic foot infections, always assess for osteomyelitis - probe-to-bone is specific. Duration of antibiotics for uncomplicated skin infections should be 5-7 days; longer courses have not shown benefit.',
    },
    5: {
      level: 5,
      summary: 'Expert management of bacterial skin infections integrates genomic epidemiology, novel therapeutic approaches, antimicrobial resistance patterns, and systems-based strategies for infection prevention.',
      explanation: `## Genomic Epidemiology

### Whole-Genome Sequencing Applications

**Outbreak Investigation**:
- SNP-based phylogenetics to trace transmission
- Identify index cases and transmission chains
- Distinguish relapse from reinfection

**Virulence Prediction**:
- PVL, TSST-1, other toxin genes
- May guide clinical management intensity
- Arginine catabolic mobile element (ACME) in USA300

### MRSA Population Dynamics

**Global Clones**:
| Clone | SCCmec | PVL | Epidemiology |
|-------|--------|-----|--------------|
| USA300 | IV | + | North America CA-MRSA |
| USA400 | IV | + | Early CA-MRSA |
| ST80 | IV | + | European CA-MRSA |
| ST59 | IV/V | +/- | Asian CA-MRSA |
| ST5 | II | - | Typical HA-MRSA |

**Resistance Beyond Methicillin**:
- Mupirocin resistance emerging (mupA, mupB)
- Fluoroquinolone resistance
- Inducible clindamycin resistance (D-test)
- Daptomycin non-susceptibility (rare)

## Novel Therapeutics

### New Antibiotics

**Anti-MRSA Agents**:
| Agent | Class | Notes |
|-------|-------|-------|
| Dalbavancin | Lipoglycopeptide | Once weekly dosing |
| Oritavancin | Lipoglycopeptide | Single dose for ABSSSI |
| Tedizolid | Oxazolidinone | Once daily, shorter course |
| Delafloxacin | Fluoroquinolone | Good MRSA activity |
| Omadacycline | Aminomethylcycline | Oral and IV |

**Long-Acting Glycopeptides**:
- Dalbavancin: 1500mg single dose or 1000mg + 500mg week 2
- Oritavancin: 1200mg single dose
- Outpatient management of ABSSSI
- Cost-effective for OPAT-eligible patients

### Anti-Virulence Strategies

**Approaches in Development**:
- Anti-PVL antibodies
- Anti-alpha toxin antibodies (MEDI4893)
- Quorum sensing inhibitors
- Biofilm disrupting agents
- Decolonization vaccines (in trials)

### Phage Therapy

**Concept**:
- Bacteriophages specifically target bacteria
- Self-amplifying at infection site
- Narrow spectrum (less collateral damage)

**Current Status**:
- Compassionate use for MDR infections
- Clinical trials ongoing
- Regulatory framework evolving
- May combine with antibiotics

## Infection Prevention Systems

### Hospital-Acquired MRSA Prevention

**Bundled Approach**:
1. Active surveillance cultures (high-risk units)
2. Contact precautions for carriers
3. Hand hygiene compliance
4. Environmental cleaning
5. Decolonization (targeted or universal)

**Universal Decolonization**:
- All ICU patients: Daily chlorhexidine bathing
- Reduces bloodstream infections by 44% (REDUCE MRSA trial)
- Nasal mupirocin in high-risk or MRSA-positive

### Community Prevention

**Sports Settings**:
- No sharing of towels, razors, equipment
- Shower immediately after activity
- Cover wounds
- Clean shared equipment
- Report skin infections early

**Outbreak Response**:
- Case finding and treatment
- Environmental cleaning
- Mass decolonization if needed
- Education

## Complex Case Management

### Necrotizing Fasciitis: Advanced Concepts

**Adjunctive Therapies**:
- IVIG: Neutralizes superantigens (streptococcal NF)
- Hyperbaric oxygen: Controversial, limited access
- Clindamycin: Add for toxin suppression (protein synthesis inhibitor)

**Prognostic Factors**:
- Delay to surgery
- Number of debridements
- Organ failure
- Age, comorbidities

### Pyomyositis

**Clinical Features**:
- Primary muscle abscess
- Often S. aureus
- Historically tropical; now seen with HIV, IVDU
- Imaging: MRI most sensitive

**Stages**:
1. Invasive: Crampy pain, no abscess yet
2. Suppurative: Abscess formation, systemic symptoms
3. Late: Sepsis, multifocal abscesses

**Management**:
- IV antibiotics
- Percutaneous or surgical drainage
- Multiple muscles may be involved

### Infections in Immunocompromised Hosts

**Considerations**:
- Broader differential (fungi, atypical mycobacteria)
- May have blunted inflammatory response
- More severe presentations
- Consider empiric broader coverage

**Neutropenic Skin Infections**:
- Ecthyma gangrenosum: Pseudomonas
- Fungal nodules: Aspergillus, Mucorales
- May need biopsy for diagnosis

## Quality Metrics and Stewardship

### Performance Measures

**Hospital Quality**:
- MRSA bacteremia rates (NHSN)
- Surgical site infection rates
- Hand hygiene compliance
- Antibiotic days per patient

**Outpatient Quality**:
- Appropriate antibiotic selection for SSTI
- Avoidance of fluoroquinolones for uncomplicated SSTI
- Duration of therapy

### Stewardship Interventions

**Clinical Decision Support**:
- EMR alerts for drug-bug mismatch
- Duration prompts
- Automatic stop orders

**Prospective Audit**:
- Infectious disease/pharmacy review
- Feedback to prescribers
- Real-time intervention

**Education**:
- SSTI treatment guidelines
- I&D training for providers
- When NOT to prescribe antibiotics`,
      keyTerms: [
        { term: 'dalbavancin', definition: 'Long-acting lipoglycopeptide antibiotic allowing once-weekly or single-dose treatment', pronunciation: 'dal-BAV-an-sin' },
        { term: 'oritavancin', definition: 'Single-dose lipoglycopeptide antibiotic for skin infections', pronunciation: 'or-it-ah-VAN-sin' },
        { term: 'ACME', definition: 'Arginine Catabolic Mobile Element - genetic factor enhancing USA300 MRSA fitness' },
        { term: 'phage therapy', definition: 'Use of bacteriophages (viruses that infect bacteria) to treat bacterial infections' },
        { term: 'pyomyositis', definition: 'Primary bacterial infection of skeletal muscle forming abscess' },
        { term: 'ecthyma gangrenosum', definition: 'Necrotic skin lesion characteristic of Pseudomonas sepsis in neutropenic patients' },
      ],
      clinicalNotes: `Expert clinical pearls:
1. Long-acting lipoglycopeptides (dalbavancin, oritavancin) allow outpatient treatment of SSTI requiring IV antibiotics
2. Add clindamycin to necrotizing fasciitis regimens for toxin suppression (suppresses protein synthesis)
3. IVIG may be beneficial in streptococcal toxic shock/necrotizing fasciitis
4. Mupirocin resistance is increasing - monitor local resistance patterns
5. Universal chlorhexidine bathing in ICUs reduces healthcare-associated infections
6. Phage therapy emerging as option for MDR infections - currently compassionate use
7. Whole-genome sequencing can trace outbreaks and identify virulence factors
8. Antibiotic stewardship: 5-day courses are sufficient for uncomplicated SSTI`,
    },
  },

  media: [
    {
      id: 'ssti-classification',
      type: 'diagram',
      filename: 'ssti-depth.svg',
      title: 'Skin and Soft Tissue Infection Classification',
      description: 'Diagram showing depth of involvement for different infection types',
    },
    {
      id: 'cellulitis-algorithm',
      type: 'diagram',
      filename: 'cellulitis-treatment.svg',
      title: 'Cellulitis Treatment Algorithm',
      description: 'Flowchart for cellulitis management based on purulence and severity',
    },
  ],

  citations: [
    {
      id: 'idsa-ssti-guidelines',
      type: 'article',
      title: 'Practice Guidelines for the Diagnosis and Management of Skin and Soft Tissue Infections',
      authors: ['Stevens DL', 'et al.'],
      source: 'Clinical Infectious Diseases',
    },
    {
      id: 'bolognia-bacterial',
      type: 'textbook',
      title: 'Bacterial Infections',
      source: 'Dermatology (Bolognia)',
      chapter: '74',
    },
  ],

  crossReferences: [
    { targetId: 'dermatology-wound-management', targetType: 'topic', relationship: 'related', label: 'Wound Management' },
    { targetId: 'dermatology-skin-anatomy', targetType: 'structure', relationship: 'related', label: 'Skin Anatomy' },
  ],

  tags: {
    systems: ['integumentary', 'immune'],
    topics: ['dermatology', 'infectious disease', 'antibiotics'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery'],
    },
  },

  createdAt: '2025-01-24T00:00:00Z',
  updatedAt: '2025-01-24T00:00:00Z',
  version: 1,
  status: 'published',
};

export default bacterialSkinInfectionsContent;
