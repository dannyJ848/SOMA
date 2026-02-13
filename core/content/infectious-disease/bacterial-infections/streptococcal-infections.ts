/**
 * Streptococcal Infections - Comprehensive Educational Content
 *
 * Covers Group A Streptococcus (GAS), Group B Streptococcus (GBS),
 * Streptococcus pneumoniae, and other clinically important streptococci.
 */

import { EducationalContent } from '../../types';

export const streptococcalInfections: EducationalContent = {
  id: 'condition-streptococcal-infections',
  type: 'condition',
  name: 'Streptococcal Infections',
  alternateNames: ['Strep Infections', 'GAS Infections', 'GBS Infections', 'Pneumococcal Infections'],

  levels: {
    1: {
      level: 1,
      summary: 'Strep infections are caused by bacteria called streptococci and can range from mild throat infections to serious diseases affecting the heart and other organs.',
      explanation: `Streptococcus (or "strep" for short) is a type of bacteria that can cause different kinds of infections. Some strep infections are mild, while others can be very serious.

**Common Types of Strep Infections:**

**1. Strep Throat**
- Very common, especially in children ages 5-15
- Causes a severe sore throat, fever, and swollen glands
- Does NOT cause cough, runny nose, or hoarse voice (those suggest a cold instead)
- Treated with antibiotics to prevent complications

**2. Skin Infections**
- Impetigo: Crusty, honey-colored sores, often around the mouth or nose
- Cellulitis: Red, swollen, warm skin that spreads
- Treated with antibiotic pills or creams

**3. Scarlet Fever**
- Strep throat plus a sandpaper-like red rash
- The tongue looks like a strawberry
- Treated with antibiotics, usually clears up well

**Why Treating Strep Is Important:**

If strep throat is not treated, it can lead to:
- **Rheumatic fever**: Can damage the heart valves
- **Kidney problems**: Inflammation of the kidneys
- **Abscess**: Pocket of pus near the tonsils

**How Strep Spreads:**
- Coughing and sneezing (respiratory droplets)
- Sharing food or drinks
- Touching surfaces with strep germs

**Prevention:**
- Wash hands frequently
- Do not share cups, utensils, or food
- Cover coughs and sneezes
- Stay home when sick

**When to See a Doctor:**
- Severe sore throat lasting more than 2 days
- Difficulty swallowing or breathing
- Fever over 101F (38.3C)
- Rash with sore throat
- Joint pain or swelling after a throat infection`,
      keyTerms: [
        { term: 'streptococcus', definition: 'A type of bacteria that causes strep throat and other infections', pronunciation: 'strep-toh-KOK-us' },
        { term: 'strep throat', definition: 'A painful throat infection caused by strep bacteria' },
        { term: 'rheumatic fever', definition: 'A serious illness that can damage the heart if strep throat is not treated' },
        { term: 'scarlet fever', definition: 'Strep throat with a red sandpaper-like rash' },
      ],
      analogies: [
        'Strep bacteria are like unwanted guests that can cause trouble if you do not ask them to leave (treat with antibiotics).',
        'A rapid strep test is like a quick ID check to see if strep bacteria are causing your sore throat.',
        'Treating strep throat is like fixing a small leak before it causes water damage - preventing bigger problems later.',
      ],
      examples: [
        'Tommy had a sore throat, fever, and white spots on his tonsils but no cough. The rapid strep test was positive, so he started antibiotics and felt better in 2 days.',
        'Maria noticed honey-colored crusty sores around her child\'s nose. The doctor said it was impetigo from strep bacteria and prescribed an antibiotic cream.',
      ],
    },
    2: {
      level: 2,
      summary: 'Streptococcal infections range from pharyngitis and skin infections to invasive diseases like necrotizing fasciitis, with Group A Strep (GAS), Group B Strep (GBS), and S. pneumoniae being the most clinically important species.',
      explanation: `## Classification of Streptococci

Streptococci are classified by their hemolysis pattern on blood agar:

**Beta-hemolytic (complete lysis):**
- Group A Streptococcus (S. pyogenes) - most common pathogenic strep
- Group B Streptococcus (S. agalactiae) - important in newborns and pregnant women

**Alpha-hemolytic (partial lysis):**
- Streptococcus pneumoniae - causes pneumonia, meningitis
- Viridans group streptococci - normal mouth flora, causes endocarditis

## Group A Streptococcus (GAS) Infections

### Pharyngitis (Strep Throat)

**Clinical Features:**
- Sudden onset sore throat
- Fever, headache
- Tonsillar exudates (white patches)
- Tender anterior cervical lymph nodes
- Absence of cough, rhinorrhea, hoarseness

**Centor Criteria (1 point each):**
| Finding | Points |
|---------|--------|
| Fever | 1 |
| Tonsillar exudates | 1 |
| Tender anterior cervical nodes | 1 |
| Absence of cough | 1 |
| Age 3-14 | 1 |
| Age >45 | -1 |

Score 0-1: No testing needed
Score 2-3: Test with rapid strep or culture
Score 4+: Consider empiric treatment

**Treatment:**
- Penicillin V 500 mg BID x 10 days (drug of choice)
- Amoxicillin 50 mg/kg once daily x 10 days (children, better taste)
- Azithromycin if penicillin allergic

### Skin Infections

**Impetigo:**
- Honey-crusted lesions, often perioral
- Treat with topical mupirocin or oral antibiotics

**Cellulitis:**
- Red, warm, swollen skin
- Usually strep (not MRSA) if no purulence
- Treat with cephalexin or penicillin

**Erysipelas:**
- Superficial cellulitis with sharply demarcated, raised borders
- Classic "St. Anthony's fire"

### Invasive GAS Disease

**Necrotizing Fasciitis ("flesh-eating bacteria"):**
- Severe pain out of proportion to exam
- Rapidly progressive
- Surgical emergency
- High mortality

**Streptococcal Toxic Shock Syndrome:**
- Shock, organ failure
- Often associated with soft tissue infection
- Treat with clindamycin + penicillin + IVIG

## Group B Streptococcus (GBS)

**Risk Groups:**
- Neonates (early and late-onset sepsis)
- Pregnant women (colonization, chorioamnionitis)
- Elderly and immunocompromised (UTI, skin, pneumonia)

**Neonatal Prevention:**
- Screen pregnant women at 36-37 weeks
- Intrapartum penicillin if positive

## Streptococcus pneumoniae

**Infections:**
- Community-acquired pneumonia (most common bacterial cause)
- Bacterial meningitis (adults)
- Otitis media (children)
- Sinusitis

**Prevention:**
- PCV13/PCV15/PCV20 (conjugate vaccines)
- PPSV23 (polysaccharide vaccine)

## Post-Streptococcal Complications

**Acute Rheumatic Fever:**
- Occurs 2-4 weeks after untreated pharyngitis
- Jones Criteria: Carditis, arthritis, chorea, erythema marginatum, subcutaneous nodules
- Prevention: Treat strep throat with antibiotics

**Post-Streptococcal Glomerulonephritis:**
- Occurs 1-2 weeks after pharyngitis or 3-6 weeks after skin infection
- Hematuria, edema, hypertension
- Antibiotics do not prevent (unlike rheumatic fever)`,
      keyTerms: [
        { term: 'Group A Streptococcus', definition: 'S. pyogenes; causes strep throat, skin infections, invasive disease; beta-hemolytic' },
        { term: 'Centor criteria', definition: 'Clinical scoring system to predict likelihood of strep pharyngitis and guide testing' },
        { term: 'necrotizing fasciitis', definition: 'Rapidly progressive deep soft tissue infection requiring emergent surgical debridement' },
        { term: 'rheumatic fever', definition: 'Inflammatory complication of untreated GAS pharyngitis; can cause permanent heart valve damage' },
        { term: 'Group B Streptococcus', definition: 'S. agalactiae; causes neonatal sepsis; pregnant women screened at 36-37 weeks' },
      ],
      analogies: [
        'Hemolysis on blood agar is like the bacteria\'s signature - beta strep completely destroys red blood cells like erasing writing completely.',
        'Rheumatic fever is like friendly fire - your immune system attacks your own heart while trying to fight strep.',
      ],
    },
    3: {
      level: 3,
      summary: 'Streptococcal pathogenesis involves surface proteins, toxins, and immune evasion mechanisms, with disease manifestations ranging from localized infections to toxin-mediated syndromes and post-infectious immune complications requiring specific diagnostic and therapeutic approaches.',
      explanation: `## Microbiology and Virulence

### Group A Streptococcus (S. pyogenes)

**Surface Structures:**

| Component | Function |
|-----------|----------|
| M protein | Anti-phagocytic, adhesion; >200 emm types |
| Hyaluronic acid capsule | Immune evasion (mimics host tissue) |
| Lipoteichoic acid | Adhesion to epithelial cells |
| F protein | Fibronectin binding, invasion |

**Secreted Toxins:**

| Toxin | Disease Association |
|-------|---------------------|
| Streptococcal pyrogenic exotoxins (SpeA, SpeB, SpeC) | Scarlet fever, toxic shock |
| Streptolysin O | Tissue damage; anti-ASO titers used diagnostically |
| Streptolysin S | Hemolysis on agar |
| Streptokinase | Fibrinolysis, tissue spread |
| Hyaluronidase | "Spreading factor" |
| C5a peptidase | Inhibits neutrophil chemotaxis |

### Streptococcus pneumoniae

**Virulence Factors:**
- Polysaccharide capsule (>90 serotypes) - primary virulence factor
- Pneumolysin - pore-forming toxin
- Autolysin - releases cell wall components, inflammatory
- IgA protease - cleaves mucosal IgA

## Diagnostic Approaches

### GAS Pharyngitis

**Rapid Antigen Detection Test (RADT):**
- Sensitivity: 70-90%
- Specificity: >95%
- Negative test in children should be confirmed with culture

**Throat Culture:**
- Gold standard
- 24-48 hour turnaround
- Detects carriers (may not reflect active infection)

**When NOT to Test:**
- Centor score 0-1
- Clinical features suggestive of viral infection
- Asymptomatic contacts (except in outbreak)

### Invasive GAS

**Diagnostic Criteria (CDC):**
- Isolation of GAS from normally sterile site, OR
- Isolation from non-sterile site with necrotizing fasciitis, streptococcal toxic shock, or other severe illness

### Pneumococcal Disease

**Sputum Gram Stain:**
- Gram-positive lancet-shaped diplococci
- Quellung reaction (capsular swelling with antisera)

**Urinary Antigen:**
- Detects C-polysaccharide (cell wall)
- Sensitivity 60-80% in bacteremic pneumonia
- May remain positive for weeks

## Post-Streptococcal Syndromes

### Acute Rheumatic Fever

**Pathogenesis:**
- Molecular mimicry: M protein epitopes cross-react with cardiac myosin, tropomyosin
- Occurs only after pharyngitis (not skin infection)
- Latency: 2-4 weeks

**Jones Criteria (2015 revision):**

Major criteria:
- Carditis (clinical or subclinical on echo)
- Arthritis (migratory polyarthritis or monoarthritis in endemic populations)
- Chorea (Sydenham's)
- Erythema marginatum
- Subcutaneous nodules

Minor criteria:
- Fever
- Polyarthralgia (or monoarthralgia in endemic)
- Elevated ESR/CRP
- Prolonged PR interval

**Diagnosis:** Evidence of preceding GAS + 2 major OR 1 major + 2 minor

**Treatment:**
- Acute: Penicillin, anti-inflammatory therapy
- Secondary prophylaxis: Monthly IM benzathine penicillin (duration based on carditis severity)

### Post-Streptococcal Glomerulonephritis

**Pathogenesis:**
- Immune complex deposition
- Can follow pharyngitis OR skin infection
- Nephritic syndrome: hematuria, RBC casts, HTN, edema

**Laboratory:**
- Low C3 (normalizes in 6-8 weeks)
- Normal C4
- Elevated ASO or anti-DNase B titers

**Prognosis:**
- Excellent in children (95% recover)
- Adults: variable, some develop CKD

### PANDAS (Pediatric Autoimmune Neuropsychiatric Disorders Associated with Strep)

- Controversial entity
- Sudden onset OCD, tics following GAS infection
- Autoimmune mechanism proposed
- No consensus on treatment

## Treatment Principles

### GAS Pharyngitis

**First-line:**
- Penicillin V 250-500 mg BID-TID x 10 days
- Amoxicillin 50 mg/kg/day (max 1g) x 10 days

**Penicillin Allergy:**
- Cephalexin (if not anaphylaxis history)
- Azithromycin 12 mg/kg/day x 5 days
- Clindamycin

**Treatment Benefits:**
- Reduces symptom duration by 1-2 days
- Prevents rheumatic fever
- Reduces transmission
- Prevents suppurative complications

### Invasive GAS

**Necrotizing Fasciitis:**
1. Emergent surgical debridement (definitive treatment)
2. Penicillin + clindamycin (inhibits toxin production)
3. IVIG for toxic shock

**Streptococcal Toxic Shock:**
- Supportive care
- Penicillin + clindamycin
- IVIG (controversial but often used)`,
      keyTerms: [
        { term: 'M protein', definition: 'Major GAS surface virulence factor; over 200 types; target of molecular mimicry in rheumatic fever' },
        { term: 'Jones criteria', definition: 'Diagnostic criteria for acute rheumatic fever requiring evidence of GAS plus major/minor criteria' },
        { term: 'ASO titer', definition: 'Anti-streptolysin O; serologic evidence of recent GAS infection' },
        { term: 'molecular mimicry', definition: 'Mechanism where pathogen antigens resemble host tissues, causing autoimmune damage' },
        { term: 'Quellung reaction', definition: 'Capsular swelling of S. pneumoniae with type-specific antisera; used for serotyping' },
      ],
      clinicalNotes: 'For suspected necrotizing fasciitis, do not delay surgery for imaging - clinical suspicion warrants exploration. Pain out of proportion to exam, crepitus, rapid progression, and systemic toxicity are red flags. Add clindamycin to penicillin to inhibit toxin production.',
    },
    4: {
      level: 4,
      summary: 'Advanced management of streptococcal infections requires understanding of emm typing and epidemiology, antimicrobial resistance patterns, optimal treatment of invasive disease including antibiotic and adjunctive therapies, and prevention strategies including vaccines and chemoprophylaxis.',
      explanation: `## Molecular Epidemiology

### emm Typing

**Clinical Relevance:**
- emm types associated with different clinical syndromes
- emm1 and emm3: Associated with invasive disease
- emm28: Associated with puerperal sepsis
- Guides vaccine development (M protein-based vaccines)

**Global Epidemiology:**
- emm1 predominates in high-income countries
- Greater emm diversity in low-income settings
- Emerging emm types with enhanced virulence

### Recent Epidemiology

**iGAS Surge (2022-2023):**
- Increased invasive GAS in multiple countries
- Particularly in children
- Thought related to reduced strep circulation during COVID-19 pandemic
- Predominant strains: emm1 (M1UK sublineage)

## Antimicrobial Resistance

### GAS Resistance

**Penicillin:**
- No documented resistance (MIC remains low)
- Penicillin remains drug of choice

**Macrolides:**
- Resistance varies by region (1-30%)
- Two mechanisms:
  - erm genes (inducible/constitutive MLSB)
  - mef genes (efflux)
- Consider local resistance when choosing empiric therapy

**Tetracyclines:**
- Variable resistance
- Not first-line for GAS

### Pneumococcal Resistance

**Mechanism-Based Resistance:**
| Antibiotic | Mechanism | Clinical Impact |
|------------|-----------|-----------------|
| Beta-lactams | Altered PBPs | High-dose amoxicillin/penicillin overcomes |
| Macrolides | Efflux, ribosomal modification | Treatment failures |
| Fluoroquinolones | Topoisomerase mutations | Emerging concern |

**Dosing Implications:**
- Respiratory infections: High-dose amoxicillin (90 mg/kg/day) effective against most PRSP
- Meningitis: Requires ceftriaxone + vancomycin pending susceptibilities

## Treatment of Invasive GAS

### Necrotizing Soft Tissue Infection

**Surgical Management:**
- Emergent exploration and debridement
- Serial debridements often required
- Amputation may be necessary
- Delay in surgery increases mortality

**Antimicrobial Therapy:**

| Regimen | Rationale |
|---------|-----------|
| Penicillin G + Clindamycin | Clindamycin inhibits toxin synthesis; effective even at high inoculum |
| Alternative: Vancomycin + Clindamycin | If MRSA concern |

**Adjunctive IVIG:**
- Neutralizes superantigens
- Observational data suggest benefit in toxic shock
- Dose: 1-2 g/kg
- Controversial, no RCT evidence

### Streptococcal Toxic Shock Syndrome

**STSS Definition:**
- Isolation of GAS from sterile or non-sterile site
- Hypotension (SBP <90 or >2 SD below normal for age)
- Plus 2 of: Renal impairment, coagulopathy, liver involvement, ARDS, rash, soft tissue necrosis

**Management:**
1. Aggressive fluid resuscitation
2. Source control (surgical debridement)
3. Penicillin + clindamycin
4. Consider IVIG
5. ICU care

## GBS Prevention and Treatment

### Intrapartum Prophylaxis

**Indications for GBS Prophylaxis:**
- Positive GBS screening (36-37 weeks)
- GBS bacteriuria in current pregnancy
- Previous infant with GBS disease
- Unknown GBS status with: <37 weeks, ROM >18 hours, maternal fever

**Regimen:**
- Penicillin G 5 million units IV load, then 2.5-3 million units q4h until delivery
- Alternative: Ampicillin 2g IV then 1g q4h
- Penicillin allergy: Cefazolin, clindamycin (if susceptible), or vancomycin

### Neonatal GBS Disease

**Early-Onset (0-6 days):**
- Acquired during delivery
- Sepsis, pneumonia, meningitis
- Mortality: 2-3%
- Treatment: Ampicillin + gentamicin

**Late-Onset (7-89 days):**
- May be nosocomial or community
- Meningitis more common
- Treatment: Ampicillin + gentamicin (add cefotaxime if meningitis)

## Pneumococcal Vaccines

### Vaccine Types

| Vaccine | Type | Serotypes | Indications |
|---------|------|-----------|-------------|
| PCV13 | Conjugate | 13 | Infants, immunocompromised |
| PCV15 | Conjugate | 15 | Newer, infants |
| PCV20 | Conjugate | 20 | Adults, simplified schedule |
| PPSV23 | Polysaccharide | 23 | Supplements conjugate in adults |

### Adult Vaccination Strategy (2023 ACIP)

**Pneumococcal vaccine-naive adults 65+:**
- Single dose PCV20 OR
- PCV15 followed by PPSV23 (1 year later)

**Adults 19-64 with risk conditions:**
- Same as above
- Risk conditions: immunocompromising, CSF leak, cochlear implant, chronic illness

## Chemoprophylaxis

### Close Contacts of Invasive GAS

**CDC Guidance:**
- Chemoprophylaxis not routinely recommended
- Consider for household contacts in outbreak settings
- Options: Penicillin, cephalosporin, or azithromycin

### Rheumatic Fever Secondary Prophylaxis

**Duration:**

| Category | Duration |
|----------|----------|
| RF without carditis | 5 years or until age 21 |
| RF with carditis, no valvular disease | 10 years or until age 21 |
| RF with persistent valvular disease | 10 years or until age 40, sometimes lifelong |

**Regimen:**
- Benzathine penicillin G 1.2 million units IM q4 weeks (q3 weeks in high-risk)
- Penicillin V 250 mg PO BID
- Sulfadiazine or azithromycin if penicillin allergic`,
      keyTerms: [
        { term: 'emm typing', definition: 'Molecular classification of GAS based on M protein gene; correlates with clinical syndromes' },
        { term: 'M1UK', definition: 'Hypervirulent GAS sublineage associated with recent surge in invasive disease' },
        { term: 'STSS', definition: 'Streptococcal toxic shock syndrome; GAS infection with hypotension and multi-organ involvement' },
        { term: 'PCV20', definition: '20-valent pneumococcal conjugate vaccine; now preferred single-vaccine strategy for adults' },
        { term: 'intrapartum prophylaxis', definition: 'IV penicillin during labor to prevent neonatal GBS disease in colonized mothers' },
      ],
      clinicalNotes: 'For necrotizing fasciitis: surgery should not be delayed for imaging. CT/MRI cannot rule out NSTI - if clinical suspicion is high, proceed to OR. Use penicillin + clindamycin for invasive GAS. IVIG is reasonable for STSS despite limited RCT evidence. GBS prophylaxis requires adequate antibiotic duration (at least 4 hours before delivery for optimal protection).',
    },
    5: {
      level: 5,
      summary: 'Contemporary streptococcal disease management integrates molecular epidemiology, advanced diagnostics, evolving treatment paradigms for invasive disease, prevention strategies including next-generation vaccines, and recognition of emerging threats including antibiotic resistance and hypervirulent clones.',
      explanation: `## Molecular Pathogenesis and Genomics

### GAS Virulence Regulators

**Two-Component Regulatory Systems:**
- **CovR/S (CsrR/S):** Global negative regulator; inactivation leads to hypervirulence
- **Mga:** Regulates M protein, C5a peptidase
- **RofA/Nra:** Regulate adhesins

**Hypervirulent Clones:**

| Clone | Features |
|-------|----------|
| emm1 M1UK | Increased SpeA production; dominant in recent surges |
| emm89 | Enhanced hyaluronic acid capsule |
| emm3 | High invasive potential |

### Superantigen Biology

**Mechanism:**
- Direct binding of MHC II and T-cell receptor (no antigen processing)
- Massive T-cell activation (up to 20% of T cells vs 0.01% in normal response)
- Cytokine storm: TNF-alpha, IL-1, IL-6, IFN-gamma

**Clinical Correlation:**
- Superantigen genes (speA, speC, ssa, smeZ) correlate with STSS risk
- Clindamycin inhibits toxin transcription and translation
- IVIG contains neutralizing antibodies to superantigens

## Advanced Diagnostics

### Molecular Methods

**PCR-Based Diagnostics:**
- Rapid GAS detection from throat swab (higher sensitivity than RADT)
- Multiplex panels detect multiple respiratory pathogens
- Consider syndromic testing when diagnosis uncertain

**Whole Genome Sequencing:**
- Outbreak investigation (transmission networks)
- Resistance gene detection
- Virulence gene profiling
- Public health surveillance (PulseNet)

### Invasive GAS Surveillance

**CDC Surveillance Definition:**
Isolation of GAS from normally sterile site (blood, CSF, pleural fluid, peritoneal fluid, bone, joint, surgical wound, deep tissue)

**Reportable Conditions:**
- iGAS (nationally notifiable in US)
- Toxic shock syndrome
- Necrotizing fasciitis

## Optimizing Invasive GAS Treatment

### Antibiotic Pharmacodynamics

**Penicillin Considerations:**
- High inoculum effect: Stationary phase bacteria less susceptible
- Eagle effect: Reduced killing at high concentrations
- Clinical relevance debated, but combination therapy addresses

**Clindamycin Rationale:**
- Inhibits toxin synthesis at ribosomal level
- Effective independent of bacterial growth phase
- Penetrates abscesses better than beta-lactams
- Observational data: Mortality reduction in STSS

**Combination Therapy:**
- Standard of care: Penicillin G + clindamycin
- Synergistic activity in vitro
- Addresses inoculum effect and toxin production

### Adjunctive Therapies

**IVIG:**

| Evidence | Details |
|----------|---------|
| Mechanism | Superantigen neutralization, opsonic activity |
| Observational studies | Mortality reduction in STSS |
| RCT (Swedish study) | Underpowered, trend toward benefit |
| Current practice | Often used for severe STSS |
| Dose | 1-2 g/kg, may repeat |

**Hyperbaric Oxygen:**
- Limited evidence
- May improve tissue oxygenation in NSTI
- Logistical challenges
- Not widely recommended

### Surgical Principles

**Debridement Timing:**
- Every hour of delay increases mortality
- Initial debridement should be aggressive
- Planned re-exploration at 24-48 hours
- Continue until healthy tissue margins

**Wound Management:**
- Negative pressure wound therapy
- Delayed primary closure or skin grafting
- Multidisciplinary approach

## Vaccine Development

### Current Landscape

**Challenges:**
- M protein diversity (>250 types)
- Geographic variation in prevalent types
- Molecular mimicry concerns (rheumatic fever)

**Vaccine Candidates:**

| Approach | Target | Status |
|----------|--------|--------|
| 30-valent M protein | N-terminal M protein | Phase 2 |
| J8 vaccine | Conserved C-repeat region | Phase 1 |
| Combo vaccine | Multiple antigens | Preclinical |
| Carbohydrate-based | Group A carbohydrate | Preclinical |

### Pneumococcal Vaccine Evolution

**Serotype Replacement:**
- Introduction of PCV7 led to rise of non-vaccine serotypes
- PCV13 addressed some replacement serotypes
- PCV15 and PCV20 provide broader coverage
- Continued surveillance essential

**Adult Vaccine Simplification:**
- PCV20 as single-vaccine strategy (2023 ACIP)
- Improved uptake expected
- Ongoing evaluation of effectiveness

## Special Populations

### Pregnancy

**GBS Colonization:**
- 20-30% of pregnant women colonized
- Universal screening at 36-37 weeks
- Culture-based or NAAT-based screening

**Intrapartum Antibiotic Prophylaxis:**
- Adequate prophylaxis: At least 4 hours before delivery
- Reduces early-onset disease by 80%
- Does not prevent late-onset disease

### Immunocompromised Hosts

**Asplenia:**
- High risk for overwhelming pneumococcal infection
- Requires PCV15/PCV20 + PPSV23
- Some advocate for prophylactic antibiotics

**HIV:**
- Increased risk of pneumococcal disease
- Vaccine response may be impaired
- PCV followed by PPSV23 recommended

**Complement Deficiency:**
- Increased susceptibility to encapsulated organisms
- Vaccination and prophylactic antibiotics

## Emerging Concerns

### Macrolide Resistance

**GAS:**
- Increasing in some regions
- Impacts empiric treatment of pharyngitis
- Surveillance essential

**Pneumococcus:**
- High-level resistance (MLSB phenotype) common
- Treatment failures reported
- Respiratory fluoroquinolones as alternative

### M1UK Emergence

**Features:**
- Increased SpeA expression (23-fold higher)
- Acquisition of prophages carrying speA
- Rapid global spread
- Associated with severe disease, particularly in children

**Clinical Implications:**
- Heightened awareness for invasive disease
- Consider earlier aggressive treatment
- Report iGAS cases for surveillance

## Public Health Considerations

### Outbreak Response

**Cluster Investigation:**
- Threshold varies by jurisdiction
- WGS for transmission linkage
- Contact tracing
- Targeted chemoprophylaxis in some settings

### Antibiotic Stewardship

**Pharyngitis:**
- Test-treat approach to reduce unnecessary antibiotics
- Watchful waiting option in some guidelines
- 5-day amoxicillin non-inferior to 10 days (some studies)

**Duration Evidence:**
- Traditional 10 days based on rheumatic fever prevention
- Emerging data supporting shorter courses for pharyngitis
- Guidelines evolving`,
      keyTerms: [
        { term: 'CovR/S', definition: 'Two-component regulator of GAS virulence; inactivating mutations lead to hypervirulence' },
        { term: 'Eagle effect', definition: 'Paradoxical decrease in bactericidal activity at high beta-lactam concentrations' },
        { term: 'inoculum effect', definition: 'Reduced antibiotic efficacy in high bacterial burden infections; rationale for combination therapy' },
        { term: 'serotype replacement', definition: 'Emergence of non-vaccine pneumococcal serotypes following vaccine introduction' },
        { term: 'J8 vaccine', definition: 'GAS vaccine candidate targeting conserved C-repeat region of M protein' },
      ],
      clinicalNotes: `Key clinical pearls for streptococcal infections:

1. **Invasive GAS**: Penicillin + clindamycin is standard; clindamycin inhibits toxin production
2. **NSTI surgical timing**: Every hour delay increases mortality; don't wait for imaging
3. **IVIG for STSS**: Evidence limited but reasonable for severe cases
4. **M1UK surveillance**: Be aware of hypervirulent clone driving recent iGAS surge
5. **GBS prophylaxis**: Needs at least 4 hours before delivery for optimal protection
6. **Pneumococcal vaccines**: PCV20 simplifies adult strategy; serotype replacement ongoing
7. **Macrolide resistance**: Know local GAS resistance patterns for pharyngitis treatment
8. **ARF prophylaxis**: Duration determined by carditis severity; adherence critical`,
    },
  },

  media: [
    {
      id: 'gas-virulence-factors',
      type: 'diagram',
      filename: 'gas-virulence-factors.svg',
      title: 'Group A Streptococcus Virulence Factors',
      description: 'M protein, toxins, and other virulence mechanisms',
    },
    {
      id: 'jones-criteria-diagram',
      type: 'diagram',
      filename: 'jones-criteria.svg',
      title: 'Jones Criteria for Rheumatic Fever',
      description: 'Major and minor criteria for diagnosis',
    },
    {
      id: 'strep-classification',
      type: 'diagram',
      filename: 'strep-classification.svg',
      title: 'Streptococcal Classification',
      description: 'Hemolysis patterns and Lancefield grouping',
    },
  ],

  citations: [
    {
      id: 'idsa-pharyngitis',
      type: 'article',
      title: 'Clinical Practice Guideline for the Diagnosis and Management of Group A Streptococcal Pharyngitis',
      authors: ['Shulman ST', 'et al.'],
      source: 'Clinical Infectious Diseases',
    },
    {
      id: 'stevens-gas',
      type: 'article',
      title: 'Practice Guidelines for the Diagnosis and Management of Skin and Soft Tissue Infections',
      authors: ['Stevens DL', 'et al.'],
      source: 'Clinical Infectious Diseases',
    },
    {
      id: 'mandell-strep',
      type: 'textbook',
      title: 'Mandell, Douglas, and Bennett\'s Principles and Practice of Infectious Diseases',
      source: 'Elsevier',
      chapter: 'Streptococcus pyogenes',
    },
  ],

  crossReferences: [
    { targetId: 'condition-pharyngitis', targetType: 'condition', relationship: 'related', label: 'Pharyngitis' },
    { targetId: 'condition-cellulitis', targetType: 'condition', relationship: 'related', label: 'Cellulitis' },
    { targetId: 'condition-pneumonia', targetType: 'condition', relationship: 'related', label: 'Pneumonia' },
    { targetId: 'topic-antibiotic-prescribing', targetType: 'topic', relationship: 'related', label: 'Appropriate Antibiotic Prescribing' },
  ],

  tags: {
    systems: ['infectious-disease', 'respiratory', 'integumentary'],
    topics: ['bacteriology', 'pediatrics', 'preventive-medicine'],
    keywords: ['GAS', 'GBS', 'pneumococcus', 'strep throat', 'rheumatic fever', 'necrotizing fasciitis', 'STSS'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'pediatrics', 'infectious disease'],
    },
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default streptococcalInfections;
