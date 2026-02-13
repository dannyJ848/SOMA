/**
 * Signs of Wound Infection
 *
 * Comprehensive content on recognizing wound infection, from subtle
 * signs of critical colonization to overt wound infection and systemic sepsis.
 */

import { EducationalContent } from '../types';

export const signsOfInfection: EducationalContent = {
  id: 'wound-care-signs-of-infection',
  type: 'concept',
  name: 'Signs of Wound Infection',
  alternateNames: ['Wound Infection Signs', 'Infected Wound Recognition', 'Wound Infection Symptoms'],

  levels: {
    1: {
      level: 1,
      summary: 'Infected wounds have warning signs like increased pain, redness spreading from the wound, pus, fever, and bad smell.',
      explanation: `Sometimes wounds don't heal normally because germs (bacteria) get inside and cause an infection. Knowing the warning signs helps you get help before it becomes serious.

## Normal Healing vs. Infection

**Normal healing looks like:**
- Some redness right around the wound that gets better each day
- Mild pain that decreases over time
- Clear or slightly yellow fluid that isn't a lot
- The wound slowly getting smaller

**Infection looks different:**
- Redness that spreads outward from the wound
- Pain that gets worse instead of better
- Thick, colored, or smelly discharge
- The wound getting bigger or not healing

## Warning Signs of Infection

### 1. Increasing Redness
- Red area grows larger around the wound
- Red streaks spreading from the wound toward your heart
- Redness that feels warm or hot to touch

### 2. Swelling Getting Worse
- The area around the wound puffs up more
- The skin feels tight
- Normal: Some swelling for 2-3 days that goes down

### 3. More Pain
- Pain gets worse over time, not better
- The wound becomes very tender to touch
- Throbbing pain

### 4. Pus or Discharge
- Thick, cloudy, or colored fluid (yellow, green, brown)
- Bad smell from the wound
- More drainage than before

### 5. Fever
- Body temperature over 100.4°F (38°C)
- Feeling sick all over
- Chills or sweating

### 6. Not Healing
- Wound stays the same size or gets bigger
- Takes much longer to heal than expected
- Scab falls off and wound looks raw again

## Red Flags - Seek Care Immediately

Call a doctor or go to the emergency room if you have:
- High fever (over 101°F/38.3°C)
- Red streaks spreading from the wound
- The infected area is large or growing fast
- Numbness or tingling around the wound
- You feel confused or very sick
- The wound is near a joint or on your face

## Who Is at Higher Risk?

Some people are more likely to get wound infections:
- People with diabetes
- Older adults
- People with weak immune systems
- People with poor circulation
- Smokers
- People who are very overweight

## Prevention Tips

- Keep wounds clean and covered
- Change bandages as directed
- Don't touch or pick at wounds
- Wash your hands before wound care
- Watch for warning signs daily
- Keep diabetes and other conditions controlled`,
      keyTerms: [
        { term: 'pus', definition: 'Thick, cloudy fluid that forms when your body fights infection; may be white, yellow, or green' },
        { term: 'fever', definition: 'Body temperature higher than normal (over 100.4°F/38°C)' },
        { term: 'infection', definition: 'When germs get into a wound and multiply, causing harmful effects' },
        { term: 'red streaks', definition: 'Lines of redness spreading from a wound, following blood vessels; a sign of spreading infection' },
      ],
      analogies: [
        'Your body fighting infection is like firefighters battling a fire - some smoke and damage is normal, but if the fire spreads, you need more help.',
        'Red streaks from an infected wound are like watching a wildfire spread - that means the infection is moving and you need medical help fast.',
      ],
      examples: [
        'A cut that was healing well suddenly becomes more painful after 3 days, with yellow pus - this is likely infected and needs medical attention.',
        'A scraped knee looks red around the edges for a few days, then the redness shrinks - this is normal healing, not infection.',
      ],
    },

    2: {
      level: 2,
      summary: 'Wound infections are identified by cardinal signs of inflammation (rubor, calor, tumor, dolor) that progress rather than resolve, along with purulent drainage, delayed healing, and systemic symptoms like fever.',
      explanation: `## Understanding Wound Infection

### Normal Inflammatory Response vs. Infection

Every wound triggers inflammation - this is normal and necessary for healing. The key is recognizing when inflammation becomes infection.

| Finding | Normal Inflammation | Infection |
|---------|---------------------|-----------|
| Timeline | Peaks day 2-4, then resolves | Persists or worsens after day 4-5 |
| Redness | Limited to wound edges | Spreading, >1-2 cm from wound |
| Pain | Decreasing over time | Increasing over time |
| Warmth | Mild | Pronounced, increasing |
| Swelling | Limited, resolving | Increasing, may have fluctuance |
| Drainage | Clear to slightly yellow | Purulent (thick, cloudy, colored) |

### Classic Signs of Infection

**The Five Cardinal Signs (Plus Function Loss):**
1. **Rubor (Redness):** Spreading erythema beyond wound margin
2. **Calor (Heat):** Increased warmth compared to surrounding skin
3. **Tumor (Swelling):** Induration, edema, fluctuance (if abscess)
4. **Dolor (Pain):** Increasing tenderness, disproportionate pain
5. **Functio laesa (Loss of function):** Difficulty using affected area

### Types of Drainage

| Type | Appearance | Significance |
|------|------------|--------------|
| Serous | Clear, watery, thin | Normal healing |
| Serosanguineous | Pink, thin | Normal, some blood mixing |
| Sanguineous | Red, bloody | May indicate tissue injury |
| Purulent | Thick, opaque, yellow/green/brown | Indicates infection |

**Odor:** Foul smell suggests bacterial infection, particularly anaerobes

### Systemic Signs of Infection

**When infection spreads beyond the wound:**
- Fever (>100.4°F / 38°C)
- Chills or rigors
- Malaise, feeling unwell
- Fatigue
- Increased heart rate
- Decreased appetite

**Severe Signs (Sepsis):**
- High fever or hypothermia
- Confusion or altered mental status
- Rapid breathing
- Low blood pressure
- Skin mottling

### Specific Infection Patterns

**Cellulitis:**
- Spreading erythema, warmth
- Poorly defined borders
- May have lymphangitis (red streaks)
- Tender induration

**Abscess:**
- Localized collection of pus
- Fluctuant (squishy) swelling
- May need drainage

**Necrotizing Infection (Emergency!):**
- Rapidly spreading
- Severe pain out of proportion
- Skin discoloration (dusky, purple, black)
- Crepitus (crackling under skin)
- Bullae (large blisters)
- Systemic toxicity

**Lymphangitis:**
- Red streaks extending from wound
- Follows lymphatic vessels toward regional lymph nodes
- Tender lymph nodes (lymphadenopathy)

### Risk Factors for Wound Infection

**Wound Factors:**
- Deep or large wounds
- Crush injuries
- Puncture wounds
- Contaminated wounds (dirt, debris)
- Presence of foreign body
- Delayed treatment
- Bite wounds

**Patient Factors:**
- Diabetes
- Immunocompromised state (HIV, chemotherapy, steroids)
- Peripheral vascular disease
- Malnutrition
- Obesity
- Advanced age
- Smoking

### When to Seek Medical Care

**See a healthcare provider if:**
- Signs of infection are present
- Wound not improving after 5-7 days
- New pain, redness, or swelling develops
- Fever develops
- Red streaks from wound
- Foul-smelling drainage

**Seek emergency care for:**
- Fever with confusion
- Rapidly spreading redness
- Severe pain out of proportion to wound size
- Signs of necrotizing infection
- Symptoms of sepsis

### Prevention

- Proper wound cleaning and care
- Appropriate dressing selection
- Tetanus prophylaxis when indicated
- Prophylactic antibiotics for high-risk wounds (bite wounds, heavy contamination)
- Optimize underlying conditions (diabetes, nutrition)`,
      keyTerms: [
        { term: 'erythema', definition: 'Medical term for redness of the skin caused by increased blood flow', pronunciation: 'air-ih-THEE-mah' },
        { term: 'purulent', definition: 'Containing or consisting of pus', pronunciation: 'PYOOR-uh-lent' },
        { term: 'fluctuance', definition: 'A wave-like motion felt when pressing on a fluid-filled area like an abscess', pronunciation: 'FLUK-choo-ents' },
        { term: 'cellulitis', definition: 'Bacterial infection of the skin and underlying tissue, causing spreading redness and warmth', pronunciation: 'sel-yoo-LY-tis' },
        { term: 'lymphangitis', definition: 'Inflammation of lymphatic vessels, appearing as red streaks extending from an infected area', pronunciation: 'lim-fan-JY-tis' },
        { term: 'crepitus', definition: 'A crackling or popping sensation under the skin, often indicating gas produced by bacteria', pronunciation: 'KREP-ih-tus' },
      ],
      clinicalNotes: 'Pain out of proportion to wound appearance is a red flag for necrotizing soft tissue infection (NSTI). Crepitus, rapid progression, and bullae require emergent surgical evaluation. Do not delay antibiotics or imaging for suspected NSTI.',
    },

    3: {
      level: 3,
      summary: 'Wound infection exists on a continuum from contamination to colonization to critical colonization to overt infection, each requiring different management strategies based on clinical and microbiological findings.',
      explanation: `## The Wound Infection Continuum

### Stages of Microbial Involvement

| Stage | Bacterial Load | Host Response | Healing Impact |
|-------|---------------|---------------|----------------|
| Contamination | Low, transient | None | None |
| Colonization | Moderate, multiplying | Minimal | Minimal |
| Critical colonization | High, biofilm likely | Subtle | Delayed healing |
| Localized infection | High, tissue invasion | Local inflammatory response | Stopped/worsened |
| Spreading infection | Variable | Regional/systemic response | Tissue destruction |
| Sepsis | Variable | Systemic inflammatory response | Life-threatening |

### Contamination
- Presence of microorganisms without proliferation
- All wounds are contaminated initially
- Host defenses clear organisms
- No intervention needed beyond standard wound care

### Colonization
- Bacteria multiply on wound surface
- No penetration into viable tissue
- No host immune response
- No impairment of healing
- Common in chronic wounds

### Critical Colonization (Covert Infection)

**Definition:** Bacterial burden or biofilm presence that impairs healing without classic infection signs

**Clinical Features:**
- Delayed or stalled healing
- Wound bed changes (friable granulation, hypergranulation)
- Increased exudate
- Subtle color changes
- Malodor (may be subtle)
- Wound breakdown after initial improvement

**Biofilm Indicators:**
- Failure to respond to appropriate therapy
- Slimy surface
- Recurrence after apparent healing
- Low-grade persistent inflammation

### Localized Wound Infection

**Classic Signs:**
- Erythema extending >0.5-2 cm from wound margin
- Increasing local warmth
- Increasing local pain/tenderness
- Induration
- Purulent exudate
- Wound enlargement or breakdown
- Delayed healing beyond expected timeframe

**Additional Signs in Chronic Wounds:**
- New/increasing pain
- New/changing odor
- Increased friable granulation
- Pocketing at wound base
- Bridging of soft tissue/epithelium

**Tissue Types and Infection Signs:**

| Tissue | Specific Signs |
|--------|---------------|
| Skin/soft tissue | Cellulitis, abscess formation |
| Bone | Pain, drainage, non-healing wound, exposed bone |
| Surgical site | Incisional drainage, dehiscence, deep infection |
| Burn wounds | Conversion of partial to full thickness |

### Spreading Infection

**Cellulitis:**
- Poorly demarcated erythema
- Warmth, tenderness
- May progress rapidly
- Commonly Streptococcus, Staphylococcus

**Lymphangitis:**
- Erythematous streaking toward regional nodes
- Tender lymphadenopathy
- Fever common

**Necrotizing Soft Tissue Infection (NSTI):**
- Severe pain (may be out of proportion early)
- Rapid progression
- Cutaneous signs: Edema beyond erythema, bullae, necrosis
- Crepitus (gas in tissue)
- Systemic toxicity
- Surgical emergency

### Laboratory Assessment

**Wound Culture Indications:**
- Signs of spreading infection
- Suspected NSTI
- Chronic wound not responding to empiric therapy
- Immunocompromised patient
- Pre-operative wound assessment

**Culture Technique:**
- Clean wound before sampling
- Tissue biopsy preferred (>10^5 CFU/g indicates infection)
- Swab culture less reliable (samples surface organisms)
- Levine technique: Rotate swab over 1 cm² for 5 seconds

**Additional Studies:**
- CBC: Leukocytosis, left shift
- CRP/ESR: Elevated inflammatory markers
- Procalcitonin: Elevated in bacterial infection/sepsis
- Blood cultures: If systemic signs present
- Imaging: X-ray (foreign body, gas, osteomyelitis), CT, MRI

### Osteomyelitis Considerations

**Risk with Deep/Chronic Wounds:**
- Diabetic foot ulcers
- Pressure injuries
- Post-traumatic wounds

**Probe-to-Bone Test:**
- Sterile probe inserted into wound
- Contact with bone (hard, gritty surface)
- High positive predictive value in at-risk populations

**Imaging:**
- X-ray: Changes may take 2-3 weeks to appear
- MRI: Most sensitive and specific
- Bone scan: Sensitive but less specific

### Sepsis Recognition

**SIRS Criteria (now less emphasized):**
- Temperature >38°C or <36°C
- Heart rate >90 bpm
- Respiratory rate >20 or PaCO2 <32 mmHg
- WBC >12,000 or <4,000 or >10% bands

**qSOFA (Quick Sepsis-Related Organ Failure Assessment):**
- Respiratory rate ≥22
- Altered mental status
- Systolic BP ≤100 mmHg

≥2 points suggests possible sepsis; requires urgent evaluation

### Management Principles

| Stage | Intervention |
|-------|-------------|
| Contamination | Standard wound care |
| Colonization | Optimize wound bed, monitor |
| Critical colonization | Aggressive debridement, topical antimicrobials |
| Local infection | Debridement, topical antimicrobials, consider systemic |
| Spreading infection | Systemic antibiotics, debridement, wound care |
| NSTI | Emergent surgery, broad-spectrum antibiotics, ICU |`,
      keyTerms: [
        { term: 'critical colonization', definition: 'Bacterial burden that impairs wound healing without classic signs of infection; often associated with biofilm' },
        { term: 'Levine technique', definition: 'Standardized wound culture method rotating swab over 1 cm² with sufficient pressure for 5 seconds' },
        { term: 'probe-to-bone test', definition: 'Clinical test for osteomyelitis; inserting sterile probe through wound to feel for bone contact' },
        { term: 'qSOFA', definition: 'Quick Sequential Organ Failure Assessment; screening tool for sepsis using respiratory rate, mental status, and blood pressure' },
        { term: 'NSTI', definition: 'Necrotizing soft tissue infection; rapidly progressive infection requiring emergent surgical debridement' },
      ],
      clinicalNotes: 'LRINEC score (Laboratory Risk Indicator for Necrotizing Fasciitis) uses WBC, hemoglobin, sodium, glucose, creatinine, and CRP to risk stratify suspected NSTI. Score ≥6 has PPV >92% for NSTI. However, clinical suspicion should not be delayed for laboratory results.',
    },

    4: {
      level: 4,
      summary: 'Advanced wound infection assessment integrates clinical evaluation, molecular diagnostics, imaging modalities, and understanding of microbial pathogenesis including biofilm formation to guide targeted antimicrobial therapy and surgical intervention.',
      explanation: `## Microbiology of Wound Infection

### Common Wound Pathogens

**Acute Wounds:**
- *Staphylococcus aureus* (including MRSA)
- *Streptococcus pyogenes* (Group A Strep)
- *Streptococcus* spp. (other beta-hemolytic)
- *Pseudomonas aeruginosa* (especially puncture, water exposure)

**Chronic Wounds:**
- Polymicrobial (average 5-6 species)
- *S. aureus* (most common)
- *Pseudomonas aeruginosa*
- *Enterococcus* spp.
- Coagulase-negative staphylococci
- *Proteus* spp.
- Anaerobes: *Peptostreptococcus*, *Bacteroides*, *Clostridium*

**Special Situations:**

| Situation | Associated Pathogens |
|-----------|---------------------|
| Human bites | *Eikenella corrodens*, oral flora, MRSA |
| Cat bites | *Pasteurella multocida*, anaerobes |
| Dog bites | *Pasteurella*, *Capnocytophaga*, anaerobes |
| Water exposure (fresh) | *Aeromonas hydrophila* |
| Water exposure (salt) | *Vibrio vulnificus* |
| Puncture through shoe | *Pseudomonas aeruginosa* |
| Diabetic foot | Polymicrobial, deep tissue anaerobes |

### Biofilm Microbiology

**Biofilm Formation Stages:**
1. Initial attachment (reversible)
2. Irreversible attachment
3. Maturation (EPS production, quorum sensing)
4. Dispersion (seeding new sites)

**Biofilm Characteristics:**
- Extracellular polymeric substance (EPS) matrix
- Altered gene expression
- Metabolic heterogeneity
- Antibiotic tolerance (not resistance)
- Immune evasion

**Quorum Sensing:**
- Cell-to-cell communication
- Density-dependent gene regulation
- Coordinates virulence factor production
- Targets for anti-biofilm strategies

### Diagnostic Approaches

**Culture-Based Methods:**

| Method | Sensitivity | Specificity | Notes |
|--------|------------|-------------|-------|
| Swab culture | Lower | Lower | Samples surface only |
| Tissue biopsy | Higher | Higher | Gold standard |
| Curettage | Moderate | Moderate | Alternative to biopsy |
| Aspiration | Variable | Higher | For deep infection/abscess |

**Quantitative Culture:**
- Tissue: >10^5 CFU/g indicates infection
- Helps distinguish colonization from infection

**Molecular Diagnostics:**
- 16S rRNA sequencing: Identifies unculturable organisms
- PCR panels: Rapid identification including resistance genes
- Metagenomics: Complete microbial community profiling

**Fluorescence Imaging:**
- Point-of-care bacterial detection
- Porphyrin-producing bacteria fluoresce red
- Guides debridement
- Cannot speciate organisms

### Imaging Modalities

**Plain Radiography:**
- Foreign bodies
- Subcutaneous gas (NSTI)
- Osteomyelitis (late findings)
- Soft tissue swelling

**Computed Tomography:**
- Gas tracking along fascial planes (NSTI)
- Abscess identification
- Extent of deep infection
- Foreign body localization

**MRI:**
- Most sensitive for osteomyelitis
- T1: Low marrow signal
- STIR/T2: High signal (edema)
- Gadolinium enhancement
- Differentiates osteomyelitis from reactive bone changes

**Ultrasound:**
- Fluid collections/abscess
- Guides aspiration
- Portable, no radiation
- Limited for deep structures

**Nuclear Medicine:**
- WBC scan: Localizes infection
- Bone scan: Sensitive but not specific
- PET/CT: Emerging role in chronic osteomyelitis

### Necrotizing Soft Tissue Infection

**Classification:**
- Type I: Polymicrobial (most common, often diabetics)
- Type II: Monomicrobial (usually Group A Strep, S. aureus)
- Type III: Gas gangrene (*Clostridium perfringens*)
- Type IV: Fungal (immunocompromised)

**Risk Factors:**
- Diabetes mellitus
- Peripheral vascular disease
- Immunosuppression
- IV drug use
- Chronic renal failure
- Malnutrition
- Alcohol abuse

**LRINEC Score:**

| Variable | Value | Points |
|----------|-------|--------|
| CRP | ≥150 mg/L | 4 |
| WBC | 15-25 k/μL | 1 |
| WBC | >25 k/μL | 2 |
| Hemoglobin | 11-13.5 g/dL | 1 |
| Hemoglobin | <11 g/dL | 2 |
| Sodium | <135 mEq/L | 2 |
| Creatinine | >1.6 mg/dL | 2 |
| Glucose | >180 mg/dL | 1 |

Score ≥6: High suspicion (PPV 92%)
Score ≥8: Strong suspicion for NSTI

**Management:**
- Surgical emergency: Early, aggressive debridement
- Serial operations (daily or every other day)
- Broad-spectrum antibiotics (vancomycin + piperacillin-tazobactam or carbapenem)
- Add clindamycin (toxin suppression for GAS)
- IVIG for streptococcal toxic shock syndrome
- Hyperbaric oxygen (adjunctive, controversial)

### Antimicrobial Selection

**Empiric Therapy by Situation:**

| Clinical Scenario | Empiric Regimen |
|-------------------|-----------------|
| Simple cellulitis | Cephalexin or dicloxacillin |
| Cellulitis with MRSA risk | TMP-SMX or doxycycline |
| Purulent cellulitis (abscess) | I&D + anti-MRSA coverage |
| Diabetic foot (mild) | Amoxicillin-clavulanate or fluoroquinolone |
| Diabetic foot (moderate-severe) | Piperacillin-tazobactam or carbapenem + vancomycin |
| NSTI | Vancomycin + piperacillin-tazobactam + clindamycin |
| Water exposure (fresh) | Fluoroquinolone or TMP-SMX |
| Water exposure (salt) | Doxycycline + 3rd gen cephalosporin |

**Duration:**
- Simple cellulitis: 5-7 days
- Complicated SSTI: 7-14 days
- Osteomyelitis: 4-6 weeks (may be longer)

### Topical Antimicrobials

| Agent | Spectrum | Use | Notes |
|-------|----------|-----|-------|
| Silver (ionic) | Broad | General antimicrobial | Various formulations |
| Cadexomer iodine | Broad | Critical colonization, biofilm | Slow release, less toxic |
| Medical-grade honey | Broad | Biofilm, wound healing | Manuka preferred |
| PHMB | Broad | Wound irrigation, dressings | Low cytotoxicity |
| Mupirocin | Gram-positive | MRSA colonization | Limited use for wounds |
| Metronidazole | Anaerobes | Malodorous wounds | Gel formulation |`,
      keyTerms: [
        { term: 'quorum sensing', definition: 'Bacterial cell-to-cell communication system coordinating virulence and biofilm formation in a density-dependent manner' },
        { term: 'LRINEC score', definition: 'Laboratory Risk Indicator for Necrotizing Fasciitis; uses CRP, WBC, hemoglobin, sodium, creatinine, glucose to predict NSTI' },
        { term: 'Fournier gangrene', definition: 'Necrotizing fasciitis of perineum and genitalia; polymicrobial, high mortality, surgical emergency' },
        { term: 'metagenomics', definition: 'Culture-independent genetic analysis of entire microbial community from clinical samples' },
        { term: 'EPS', definition: 'Extracellular polymeric substance; matrix produced by biofilm bacteria providing protection and structure' },
      ],
      clinicalNotes: 'Finger-test: Making a 2 cm incision under local anesthesia; lack of bleeding and tissue separation along fascial planes is diagnostic for necrotizing fasciitis. Do not delay surgery for imaging if clinical suspicion is high. Gas on imaging is a late finding.',
    },

    5: {
      level: 5,
      summary: 'Expert wound infection management integrates emerging microbiome science, antimicrobial stewardship principles, novel diagnostics, and multidisciplinary care pathways to optimize outcomes while addressing antimicrobial resistance challenges.',
      explanation: `## The Wound Microbiome Paradigm

### Beyond Koch's Postulates

**Traditional Approach:**
- Single pathogen causes disease
- Isolate, identify, target with antibiotics

**Microbiome Perspective:**
- Wound harbors complex community
- Dysbiosis (imbalanced community) may impair healing
- Community composition matters
- Shift from eradication to balance

### Molecular Characterization

**16S rRNA Profiling:**
- Identifies bacterial taxa
- Culture-independent
- Reveals "unculturable" organisms
- Research tool becoming clinical

**Shotgun Metagenomics:**
- Complete genetic content
- Functional capabilities (virulence, resistance genes)
- Strain-level resolution
- Highest information yield

**Transcriptomics:**
- Gene expression patterns
- Active metabolic processes
- Virulence gene expression
- Research applications

### Wound Microbiome Signatures

**Healing vs Non-Healing Wounds:**
- Non-healing: Lower diversity
- Non-healing: Higher Pseudomonas, Staphylococcus relative abundance
- Healing: More diverse, anaerobe presence
- Temporal changes correlate with healing trajectory

**Biofilm Molecular Markers:**
- EPS gene expression
- Quorum sensing molecules
- Persister cell signatures

### Point-of-Care Diagnostics

**Fluorescence Imaging (MolecuLight):**
- Real-time bacterial detection
- Porphyrin fluorescence (red = bacteria)
- Sensitivity ~87%, specificity ~72%
- Guides debridement extent

**Rapid Molecular Panels:**
- PCR-based identification
- Results in hours vs. days
- Resistance gene detection
- Examples: BioFire, GeneXpert

**Emerging Technologies:**
- Volatile organic compound detection
- Biosensors for wound monitoring
- Smartphone-based diagnostics
- AI-assisted image analysis

### Antimicrobial Stewardship in Wound Care

**Principles:**
- Right drug, right dose, right duration, right route
- Avoid unnecessary antibiotic exposure
- Topical antimicrobials for bioburden control
- Systemic antibiotics for tissue-invasive infection

**Stewardship Challenges in Wounds:**
- Pressure to treat visible wounds
- Distinguishing colonization from infection
- Chronic wound culture interpretation
- Empiric therapy necessity

**Guidelines-Based Approach:**
- IDSA diabetic foot infection guidelines
- IDSA skin and soft tissue infection guidelines
- Wound care society recommendations

### Antimicrobial Resistance Considerations

**Common Resistant Pathogens:**
- MRSA: Community and healthcare-associated
- VRE: Especially in chronic wound patients
- ESBL-producing Enterobacteriaceae
- Carbapenem-resistant organisms (CRE, CRPA)
- MDR Pseudomonas

**Risk Factors for Resistance:**
- Prior antibiotic exposure
- Healthcare facility residence
- Chronic wounds
- History of MDR infection/colonization

**Management Implications:**
- Culture before empiric therapy when possible
- De-escalate based on susceptibilities
- Consider ID consultation for complex cases
- Infection control measures

### Novel Therapeutic Approaches

**Anti-Biofilm Strategies:**
- Quorum sensing inhibitors
- Biofilm-dispersing enzymes (DNase, dispersin B)
- Surfactant-based disruption
- Electrical stimulation

**Bacteriophage Therapy:**
- Viruses that kill specific bacteria
- Overcome antibiotic resistance
- Personalized phage cocktails
- Compassionate use, clinical trials ongoing

**Antimicrobial Peptides:**
- Host defense peptides
- Broad-spectrum activity
- Immunomodulatory effects
- In development

**Photodynamic Therapy:**
- Photosensitizer + light
- Generates reactive oxygen species
- Kills bacteria, may promote healing
- Requires further validation

**Cold Atmospheric Plasma:**
- Ionized gas treatment
- Antimicrobial and wound healing effects
- Non-contact application
- Emerging clinical use

### Adjunctive Therapies

**Hyperbaric Oxygen Therapy:**
- Increases tissue oxygen tension
- Enhances neutrophil killing
- Promotes angiogenesis
- Evidence for diabetic foot ulcer, chronic refractory osteomyelitis

**Negative Pressure Wound Therapy with Instillation:**
- Combines NPWT with antiseptic instillation
- Enhanced biofilm disruption
- Reduced wound bioburden
- Growing evidence base

### Multidisciplinary Approach

**Team Composition:**
- Wound care specialist
- Infectious disease
- Vascular surgery (for arterial assessment)
- Plastic/reconstructive surgery
- Podiatry (diabetic foot)
- Clinical pharmacist
- Microbiology laboratory

**Care Pathway Elements:**
- Standardized assessment
- Culture protocols
- Antibiotic selection guidelines
- Escalation criteria
- Outcome tracking

### Quality Metrics and Outcomes

**Process Measures:**
- Appropriate culture collection
- Empiric antibiotic appropriateness
- De-escalation rates
- Duration of therapy

**Outcome Measures:**
- Clinical cure rates
- Recurrence rates
- Time to healing
- Amputation rates (diabetic foot)
- Mortality (NSTI)

**Benchmarking:**
- NSQIP surgical site infection rates
- Diabetic foot infection outcomes
- Pressure injury incidence

### Emerging Research Directions

**Microbiome-Based Therapeutics:**
- Probiotic application to wounds
- Fecal/wound microbiome transplant (theoretical)
- Microbiome-targeted treatments

**Personalized Medicine:**
- Host response profiling
- Pharmacogenomic-guided therapy
- Patient-specific phage therapy

**Artificial Intelligence:**
- Image-based infection detection
- Predictive modeling for outcomes
- Antibiotic resistance prediction
- Clinical decision support

### Ethical Considerations

**Antimicrobial Stewardship Tension:**
- Individual patient benefit vs. resistance prevention
- Empiric coverage needs vs. narrow-spectrum goals
- Resource limitations and access

**Novel Therapy Access:**
- Phage therapy availability
- Compassionate use pathways
- Equity in access to advanced care

**End-of-Life Decisions:**
- Infected wounds in terminal illness
- Comfort-focused wound care
- Antimicrobial de-escalation at end of life`,
      keyTerms: [
        { term: 'dysbiosis', definition: 'Imbalanced microbial community composition associated with disease states; in wounds, correlates with impaired healing' },
        { term: 'persister cells', definition: 'Dormant bacterial cells within biofilm that survive antibiotic exposure through metabolic inactivity rather than resistance' },
        { term: 'bacteriophage therapy', definition: 'Use of viruses that specifically infect and kill bacteria; alternative approach for antibiotic-resistant infections' },
        { term: 'photodynamic therapy', definition: 'Treatment combining photosensitizing agents with specific light wavelengths to generate antimicrobial reactive oxygen species' },
        { term: 'antimicrobial stewardship', definition: 'Coordinated interventions to improve appropriate antimicrobial use, optimize outcomes, and reduce resistance development' },
      ],
      clinicalNotes: `Expert Practice Points:

1. **Clinical judgment remains paramount** - LRINEC score, imaging, and labs support but do not replace clinical assessment for NSTI.

2. **Biofilm is ubiquitous in chronic wounds** - Assume it is present. Combine debridement with topical antimicrobials; single interventions are insufficient.

3. **Culture interpretation requires context** - Wound cultures identify organisms present but do not diagnose infection. Clinical signs + culture = informed treatment.

4. **Stewardship in wound care** - Not every wound needs antibiotics. Topical antimicrobials for bioburden control; systemic antibiotics for tissue-invasive infection.

5. **Multidisciplinary approach** - Complex wound infections benefit from ID consultation, vascular assessment, and coordinated care pathways.

6. **Emerging therapies** - Phage therapy, antimicrobial peptides, and microbiome modulation are on the horizon but require further validation before routine clinical use.

7. **Documentation and surveillance** - Track wound infection outcomes and antibiotic use to identify improvement opportunities and benchmark against standards.`,
    },
  },

  media: [
    {
      id: 'infection-signs-diagram',
      type: 'diagram',
      filename: 'wound-infection-signs.svg',
      title: 'Signs of Wound Infection',
      description: 'Visual guide showing cardinal signs of wound infection',
    },
    {
      id: 'infection-continuum',
      type: 'diagram',
      filename: 'wound-infection-continuum.svg',
      title: 'Wound Infection Continuum',
      description: 'Diagram showing progression from contamination to sepsis',
    },
  ],

  citations: [
    {
      id: 'idsa-ssti-2014',
      type: 'article',
      title: 'Practice Guidelines for the Diagnosis and Management of Skin and Soft Tissue Infections',
      authors: ['Stevens, D.L.', 'et al.'],
      source: 'Clinical Infectious Diseases',
    },
    {
      id: 'cutting-wound-infection',
      type: 'article',
      title: 'Clinical identification of wound infection: a Delphi approach',
      authors: ['Cutting, K.F.', 'White, R.'],
      source: 'European Wound Management Association Journal',
    },
    {
      id: 'wound-biofilm-review',
      type: 'article',
      title: 'Biofilms and chronic wound inflammation',
      authors: ['James, G.A.', 'et al.'],
      source: 'Journal of Wound Care',
    },
  ],

  crossReferences: [
    { targetId: 'wound-care-cleaning-dressing', targetType: 'topic', relationship: 'related', label: 'Wound Cleaning and Dressing' },
    { targetId: 'wound-care-when-to-seek-care', targetType: 'topic', relationship: 'related', label: 'When to Seek Care' },
    { targetId: 'wound-care-chronic', targetType: 'topic', relationship: 'related', label: 'Chronic Wounds' },
  ],

  tags: {
    systems: ['integumentary', 'immune'],
    topics: ['wound infection', 'cellulitis', 'NSTI', 'antimicrobials'],
    keywords: ['infection', 'pus', 'cellulitis', 'abscess', 'MRSA', 'biofilm'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      shelf: ['surgery', 'medicine', 'emergency medicine'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default signsOfInfection;
