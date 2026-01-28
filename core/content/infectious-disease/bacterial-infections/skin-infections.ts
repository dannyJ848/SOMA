import { EducationalContent } from '../../types';

export const SKIN_INFECTIONS: EducationalContent = {
  id: 'infectious-disease-skin-infections',
  type: 'condition',
  name: 'Skin and Soft Tissue Infections',
  alternateNames: ['SSTI', 'Cellulitis', 'Abscess', 'Wound Infection'],
  levels: {
    1: {
      level: 1,
      summary: 'Skin infections happen when bacteria get through a break in the skin, causing redness, swelling, and sometimes pus.',
      explanation: `Your skin is like a protective wall that keeps germs out. When that wall is broken - through a cut, scrape, insect bite, or dry cracked skin - bacteria can get in and cause an infection.

**Common Types of Skin Infections:**

**Cellulitis:**
A skin infection that makes an area red, warm, swollen, and tender. It spreads through the skin but doesn't have pus inside.

**Abscess (Boil):**
A pocket of pus under the skin. It feels like a painful, swollen lump. The skin over it may turn red or even look like it has a head or point.

**Impetigo:**
A very contagious infection that causes crusty, honey-colored sores. Common in children.

**Signs of a Skin Infection:**
- Redness spreading on the skin
- Warmth and swelling
- Pain or tenderness
- Pus or drainage
- Fever
- Red streaks spreading from the area

**When to See a Doctor Right Away:**
- Fever with skin infection
- Rapidly spreading redness
- Severe pain
- Signs of infection near your eyes or on your face
- Diabetes or weakened immune system
- Infection not improving with home care

**Treatment:**
- Abscesses usually need to be drained (opened to let pus out)
- Cellulitis is treated with antibiotics
- Keep the area clean and dry
- Elevate the affected area if possible

**Prevention:**
- Clean cuts and scrapes right away
- Keep wounds covered until healed
- Don't share towels, razors, or personal items
- Wash hands frequently
- Keep skin moisturized to prevent cracks`,
      keyTerms: [
        { term: 'Cellulitis', definition: 'A skin infection causing redness, warmth, and swelling without pus' },
        { term: 'Abscess', definition: 'A collection of pus under the skin' },
        { term: 'Pus', definition: 'A thick fluid containing dead bacteria, white blood cells, and tissue' },
        { term: 'Impetigo', definition: 'A contagious skin infection with crusty sores, common in children' },
      ],
    },
    2: {
      level: 2,
      summary: 'Skin and soft tissue infections range from simple superficial infections to life-threatening necrotizing infections, commonly caused by Staphylococcus and Streptococcus bacteria.',
      explanation: `Skin and soft tissue infections (SSTIs) are classified by depth, severity, and the presence of purulent (pus-containing) material.

**Classification:**

| Type | Depth | Features |
|------|-------|----------|
| Impetigo | Epidermis | Superficial, crusty sores |
| Erysipelas | Upper dermis | Sharply demarcated, raised borders |
| Cellulitis | Dermis, subcutaneous | Spreading redness, no clear borders |
| Abscess | Localized | Fluctuant, pus collection |
| Necrotizing fasciitis | Deep fascia/muscle | Life-threatening, requires surgery |

**Common Causative Organisms:**

*Non-Purulent (Cellulitis):*
- Beta-hemolytic streptococci (Groups A, B, C, G)
- *Staphylococcus aureus* (less common)

*Purulent (Abscess, Furuncle):*
- *Staphylococcus aureus* (including MRSA)

**MRSA (Methicillin-Resistant S. aureus):**
Community-acquired MRSA (CA-MRSA) is now a common cause of skin abscesses. Risk factors include:
- Close contact settings (sports teams, prisons)
- IV drug use
- Crowded living conditions
- Recent antibiotic use

**Clinical Assessment:**

*Purulent vs. Non-Purulent:*
This distinction guides treatment:
- **Purulent**: Abscess, fluctuance, pus drainage
- **Non-Purulent**: Diffuse redness without pus collection

*Severity Assessment:*
- Mild: No systemic symptoms
- Moderate: Systemic symptoms OR comorbidities
- Severe: Failed oral therapy, sepsis, deep infection suspected

**Treatment:**

*Purulent SSTI:*
- Primary treatment: Incision and drainage (I&D)
- Antibiotics added for moderate/severe cases or surrounding cellulitis
- MRSA coverage: TMP-SMX, doxycycline, or clindamycin

*Non-Purulent SSTI (Cellulitis):*
- Mild: Oral antibiotics covering streptococci
  - Cephalexin, dicloxacillin, or penicillin
- Moderate/Severe: IV antibiotics
  - Cefazolin, or vancomycin if MRSA suspected

**When to Suspect Necrotizing Infection:**
- Severe pain out of proportion to appearance
- Rapidly progressing
- Bullae (blisters) or skin necrosis
- Crepitus (gas in tissues)
- Systemic toxicity
- **Surgical emergency - requires immediate debridement**`,
      keyTerms: [
        { term: 'Purulent', definition: 'Containing or producing pus' },
        { term: 'Fluctuance', definition: 'A wave-like feel under the skin indicating fluid (pus) collection' },
        { term: 'MRSA', definition: 'Methicillin-resistant Staphylococcus aureus - bacteria resistant to many common antibiotics' },
        { term: 'Incision and drainage', definition: 'Surgical opening of an abscess to release pus' },
        { term: 'Necrotizing fasciitis', definition: 'A rapidly spreading, life-threatening infection of deep tissue' },
      ],
    },
    3: {
      level: 3,
      summary: 'SSTI classification distinguishes purulent from non-purulent infections to guide therapy, with MRSA coverage indicated for purulent infections and streptococcal coverage for cellulitis, while necrotizing infections require emergent surgical debridement.',
      explanation: `SSTI management requires understanding pathogen microbiology, infection depth, and appropriate empiric therapy based on clinical presentation and local resistance patterns.

**Pathogenesis:**

*Bacterial Entry:*
- Breaks in skin barrier (trauma, dermatitis, tinea pedis)
- Hematogenous seeding (rare)
- Extension from adjacent infection

*S. aureus Virulence:*
- Surface proteins (protein A, clumping factors)
- Panton-Valentine leukocidin (PVL): Associated with CA-MRSA, necrotizing infections
- Biofilm formation
- Staphylococcal enterotoxins/superantigens

*Streptococcal Virulence:*
- M protein: Antiphagocytic
- Streptolysin: Hemolysis, tissue damage
- Hyaluronidase: Facilitates spread
- Superantigens: Toxic shock syndrome

**Detailed Classification:**

*Superficial:*
- **Impetigo**: Non-bullous (crusted) vs. bullous (blisters)
- **Folliculitis**: Infection of hair follicles
- **Furuncle (boil)**: Deep follicular abscess
- **Carbuncle**: Coalesced furuncles with multiple drainage points

*Deep:*
- **Erysipelas**: Upper dermal lymphatics, sharp borders, facial involvement common
- **Cellulitis**: Deeper dermis/subcutaneous, ill-defined borders
- **Abscess**: Localized pus collection with fibrous wall

*Necrotizing:*
- **Necrotizing fasciitis Type I**: Polymicrobial (aerobic + anaerobic)
- **Necrotizing fasciitis Type II**: Monomicrobial (usually Group A Strep)
- **Fournier's gangrene**: Necrotizing infection of perineum/genitalia

**Diagnostic Considerations:**

*Imaging:*
- Ultrasound: Distinguishes cellulitis from abscess
- CT/MRI: Deep infections, necrotizing fasciitis, myonecrosis
- Gas in soft tissues highly concerning

*Laboratory:*
- Cultures: Blood (if systemic), wound/drainage
- CBC: Leukocytosis; leukopenia concerning for severe infection
- CK: Elevated in myonecrosis
- Lactate: Marker of tissue hypoperfusion

*LRINEC Score (Laboratory Risk Indicator for Necrotizing Fasciitis):*
- WBC, hemoglobin, sodium, glucose, creatinine, CRP
- Score ≥6 suggests necrotizing fasciitis
- Clinical judgment more important; don't delay surgery for score

**Treatment Guidelines (IDSA 2014):**

*Non-Purulent SSTI:*
| Severity | Treatment |
|----------|-----------|
| Mild | Oral: Penicillin, cephalexin, dicloxacillin |
| Moderate | IV: Penicillin, ceftriaxone, cefazolin |
| Severe | Vancomycin + piperacillin-tazobactam |

*Purulent SSTI:*
| Severity | Treatment |
|----------|-----------|
| Mild | I&D alone (no antibiotics) |
| Moderate | I&D + oral antibiotics (TMP-SMX or doxycycline) |
| Severe | I&D + IV vancomycin or daptomycin |

*Necrotizing SSTI:*
- Surgical emergency: Aggressive debridement
- Broad-spectrum antibiotics: Vancomycin + piperacillin-tazobactam + clindamycin
- Clindamycin: Toxin suppression (superantigens)
- May require serial debridements
- Hyperbaric oxygen: Adjunctive, controversial

**Prevention:**
- MRSA decolonization: Mupirocin nasal, chlorhexidine washes
- Household member treatment in recurrent cases
- Wound care education`,
      keyTerms: [
        { term: 'Panton-Valentine leukocidin', definition: 'A toxin produced by some S. aureus strains that destroys white blood cells and is associated with severe skin infections' },
        { term: 'LRINEC score', definition: 'A laboratory scoring system to help identify necrotizing fasciitis' },
        { term: 'Carbuncle', definition: 'A cluster of connected boils (furuncles) with multiple drainage openings' },
        { term: 'Crepitus', definition: 'A crackling sensation felt under the skin due to gas in the tissues' },
        { term: 'Decolonization', definition: 'Process of eliminating bacteria (usually MRSA) from a carrier without symptoms' },
      ],
    },
    4: {
      level: 4,
      summary: 'SSTI management integrates clinical phenotyping, MRSA epidemiology, understanding of bacterial toxins and virulence factors, and surgical principles for necrotizing infections, with antimicrobial selection guided by local resistance patterns and PK/PD optimization.',
      explanation: `Advanced SSTI care requires nuanced understanding of pathogen virulence, complex resistance patterns, and critical decision-making in severe infections.

**Staphylococcal Virulence and Resistance:**

*CA-MRSA vs. HA-MRSA:*
| Feature | CA-MRSA | HA-MRSA |
|---------|---------|---------|
| SCCmec type | IV, V (smaller) | I, II, III (larger) |
| PVL | Usually positive | Usually negative |
| Non-beta-lactam resistance | Limited | Multidrug-resistant |
| Presentation | Skin abscesses | Healthcare-associated |

*Toxin-Mediated Disease:*
- PVL: Neutrophil lysis, tissue necrosis, necrotizing pneumonia
- Phenol-soluble modulins (PSMs): Cytolysis, inflammation
- Toxic shock syndrome toxin (TSST-1): Superantigen
- Exfoliative toxins: Scalded skin syndrome

*Resistance Mechanisms:*
- mecA gene: Encodes PBP2a (altered penicillin-binding protein)
- Inducible clindamycin resistance: D-test positive (erm genes)
- Vancomycin-intermediate S. aureus (VISA): Thickened cell wall
- Vancomycin-resistant S. aureus (VRSA): vanA gene (rare)

**Streptococcal Pathogenesis:**

*Group A Streptococcus (GAS):*
- Streptococcal pyrogenic exotoxins (SpeA, SpeB, SpeC): Superantigens
- Streptococcal toxic shock syndrome (STSS)
- Post-infectious sequelae: Rheumatic fever, glomerulonephritis
- Invasive GAS: Necrotizing fasciitis, bacteremia, STSS

*emm typing:*
- Over 200 emm types based on M protein
- Certain types associated with invasive disease
- Vaccine development targets common emm types

**Antibiotic Selection:**

*MRSA-Active Oral Options:*
| Agent | Considerations |
|-------|----------------|
| TMP-SMX | Good tissue penetration, no strep coverage |
| Doxycycline | Broad coverage, no strep guarantee |
| Clindamycin | Check D-test, covers strep |
| Linezolid | Reserve for failures, toxicity with prolonged use |

*IV Options for Severe MRSA:*
| Agent | Considerations |
|-------|----------------|
| Vancomycin | Standard, requires levels, nephrotoxicity |
| Daptomycin | Bactericidal, not for pneumonia, weekly CK |
| Linezolid | Oral/IV equivalent, myelosuppression |
| Ceftaroline | Anti-MRSA cephalosporin, may be used for endocarditis |

*Beta-Lactams for Streptococci:*
- Penicillin: Drug of choice for GAS (no resistance)
- Cephalexin: Oral alternative
- Clindamycin added for toxin suppression in invasive GAS

**Necrotizing Fasciitis Deep Dive:**

*Clinical Features:*
- Pain out of proportion to exam (early)
- Rapidly progressing (hours)
- Skin changes: Bullae, ecchymosis, necrosis (late)
- Systemic toxicity: Fever, tachycardia, hypotension
- "Dishwater" gray drainage
- Wooden-hard induration

*Surgical Principles:*
- Emergent exploration if suspected
- Finger test: Lack of tissue resistance on blunt dissection
- Wide debridement until healthy bleeding tissue
- Serial debridements typically required
- Wound vac or frequent dressing changes
- May require amputation, diverting ostomy

*Adjunctive Therapies:*
- IVIG: For streptococcal toxic shock (neutralizes superantigens)
- Hyperbaric oxygen: Theoretical benefit, shouldn't delay surgery
- Negative pressure wound therapy: Granulation, closure

**Diabetic Foot Infections:**

*Classification (IDSA/IWGDF):*
- Uninfected, mild, moderate, severe
- Osteomyelitis consideration

*Microbiology:*
- Mild: Gram-positive cocci (similar to other SSTI)
- Moderate-Severe: Polymicrobial including anaerobes, gram-negatives
- Chronic wounds: Pseudomonas, enterococci

*Management:*
- Wound care and offloading critical
- Debridement of necrotic tissue
- Antibiotics guided by culture
- Assess for osteomyelitis (probe to bone, MRI)
- Vascular assessment`,
      keyTerms: [
        { term: 'SCCmec', definition: 'Staphylococcal cassette chromosome mec - mobile genetic element carrying mecA resistance gene' },
        { term: 'D-test', definition: 'Laboratory test detecting inducible clindamycin resistance in staphylococci' },
        { term: 'emm typing', definition: 'Classification of Group A Streptococcus based on M protein gene sequence' },
        { term: 'IVIG', definition: 'Intravenous immunoglobulin - used adjunctively in streptococcal toxic shock to neutralize toxins' },
        { term: 'Probe-to-bone test', definition: 'Using a sterile probe to assess if bone is exposed in a diabetic foot wound, suggesting osteomyelitis' },
      ],
      clinicalNotes: 'Clinical decision-making in SSTI hinges on accurate assessment of purulence, depth, and severity. I&D is the primary treatment for abscesses; antibiotics are secondary. Necrotizing fasciitis is a clinical diagnosis - do not delay surgery for imaging or labs if clinical suspicion is high. Clindamycin for toxin suppression is important in invasive GAS.',
    },
    5: {
      level: 5,
      summary: 'Expert SSTI management integrates precision diagnostics, understanding of staphylococcal and streptococcal virulence factor biology, surgical principles for complex and necrotizing infections, and stewardship approaches addressing MRSA epidemiology and decolonization strategies.',
      explanation: `Mastery of SSTI care requires synthesis of molecular microbiology, surgical judgment, and population-level infection prevention.

**Advanced Diagnostics:**

*Molecular Methods:*
- PCR for mecA/mecC: Rapid MRSA identification
- PVL gene detection: Associated with necrotizing infections
- Typing: spa typing, MLST, whole-genome sequencing for outbreaks

*Imaging Applications:*
- Ultrasound: Abscess vs. cellulitis, depth measurement, I&D guidance
- CT: Gas detection, extent of necrotizing infection, foreign bodies
- MRI: Myonecrosis, osteomyelitis in diabetic foot
- CT angiography: Vascular assessment for diabetic/ischemic ulcers

**Bacterial Genomics and Epidemiology:**

*S. aureus Clonal Complexes:*
- USA300: Predominant CA-MRSA in US, PVL-positive
- USA100/USA200: Hospital-associated MRSA
- CC398: Livestock-associated MRSA
- CC1/CC5: Globally distributed clones

*Surveillance and Control:*
- Active surveillance cultures for MRSA
- Contact precautions
- Decolonization protocols
- Environmental cleaning

**Severe SSTI and Toxic Shock:**

*Staphylococcal Toxic Shock Syndrome:*
- Criteria: Fever, rash, desquamation, hypotension, multiorgan involvement
- Toxin-mediated (TSST-1, enterotoxins)
- Treatment: Source control, anti-toxin antibiotics (clindamycin, linezolid)

*Streptococcal Toxic Shock Syndrome (STSS):*
- GAS bacteremia with hypotension and organ failure
- Often associated with necrotizing fasciitis
- IVIG for toxin neutralization
- Penicillin + clindamycin

*Empiric Toxin Suppression:*
- Clindamycin or linezolid: Inhibit protein synthesis, reduce toxin production
- Mechanism distinct from bactericidal effect
- Added to beta-lactam (for strep) or vancomycin (for staph)

**Surgical Considerations:**

*Necrotizing Fasciitis Surgery:*
- Resuscitation concurrent with surgical planning
- Bedside finger test if uncertain
- Intraoperative: Fasciotomies, debridement to bleeding tissue
- Second-look surgery within 24-48 hours
- Average 3-4 debridements needed
- Reconstructive surgery after infection controlled

*Wound Management:*
- Negative pressure wound therapy (wound vac)
- Split-thickness skin grafting
- Flap coverage for complex defects
- Hyperbaric oxygen: Evidence weak, logistically challenging

**Complex Populations:**

*Injection Drug Use:*
- Polymicrobial infections common
- Unusual organisms: Pseudomonas, anaerobes, Serratia
- Vascular complications: Septic thrombophlebitis, mycotic aneurysm
- Vertebral osteomyelitis/epidural abscess consideration
- Harm reduction strategies

*Immunocompromised:*
- Atypical presentations: Ecthyma gangrenosum (Pseudomonas)
- Fungal SSTI: Mucormycosis, aspergillosis
- Neutropenic patients: Broader coverage needed
- Delayed wound healing

**Decolonization Strategies:**

*MRSA Decolonization Protocol:*
- Intranasal mupirocin 2% BID x 5 days
- Chlorhexidine body washes daily x 5 days
- Household contacts included
- Environmental cleaning
- Personal item replacement (razors, towels)

*Evidence:*
- Reduced recurrence in patients with recurrent SSTI
- REDUCE MRSA trial: ICU universal decolonization reduced bloodstream infections
- Duration of effect limited; may need repeated courses

**Quality Improvement:**

*SSTI Pathways:*
- Emergency department algorithms
- Risk stratification tools
- Ultrasound utilization
- Antibiotic stewardship (avoid fluoroquinolones, narrow spectrum when possible)

*Metrics:*
- I&D rates for abscesses
- Appropriate antibiotic selection
- Surgical timing for necrotizing infections
- Readmission rates

**Research Frontiers:**

*Vaccines:*
- S. aureus vaccine development challenging (failed trials)
- GAS vaccine targeting conserved antigens
- Passive immunization (monoclonal antibodies) under study

*Novel Therapeutics:*
- Anti-virulence strategies targeting toxins
- Bacteriophage therapy
- Antimicrobial peptides
- Immunomodulators

*Microbiome:*
- Skin microbiome disruption and S. aureus colonization
- Probiotic approaches to prevent colonization
- Coagulase-negative staphylococci competition`,
      keyTerms: [
        { term: 'spa typing', definition: 'Molecular typing of S. aureus based on protein A gene sequence' },
        { term: 'USA300', definition: 'The predominant CA-MRSA clone in the United States, typically PVL-positive' },
        { term: 'Ecthyma gangrenosum', definition: 'A necrotic skin lesion classically associated with Pseudomonas bacteremia in immunocompromised patients' },
        { term: 'REDUCE MRSA trial', definition: 'Study showing ICU universal decolonization with chlorhexidine and mupirocin reduced MRSA bloodstream infections' },
        { term: 'Anti-virulence strategy', definition: 'Therapeutic approach targeting bacterial toxins or virulence mechanisms rather than bacterial survival' },
      ],
      clinicalNotes: 'Expert SSTI management combines rapid clinical assessment with appropriate imaging to distinguish abscess from cellulitis and identify necrotizing infections. Surgical timing is critical for necrotizing fasciitis - mortality increases with each hour of delay. Decolonization strategies reduce recurrence in MRSA carriers. Stewardship efforts should focus on limiting fluoroquinolone use and avoiding unnecessary antibiotics after adequate I&D of abscesses.',
    },
  },
  media: [],
  citations: [
    {
      id: 'stevens-idsa-ssti-2014',
      type: 'article',
      title: 'Practice Guidelines for the Diagnosis and Management of Skin and Soft Tissue Infections: 2014 Update by the Infectious Diseases Society of America',
      authors: ['Stevens DL', 'Bisno AL', 'Chambers HF'],
      source: 'Clinical Infectious Diseases',
      license: 'Copyrighted',
    },
    {
      id: 'liu-mrsa-2011',
      type: 'article',
      title: 'Clinical Practice Guidelines by the Infectious Diseases Society of America for the Treatment of Methicillin-Resistant Staphylococcus Aureus Infections',
      authors: ['Liu C', 'Bayer A', 'Cosgrove SE'],
      source: 'Clinical Infectious Diseases',
      license: 'Copyrighted',
    },
  ],
  crossReferences: [
    { targetId: 'infectious-disease-sepsis', targetType: 'condition', relationship: 'related', label: 'Sepsis' },
    { targetId: 'infectious-disease-endocarditis', targetType: 'condition', relationship: 'related', label: 'Endocarditis' },
    { targetId: 'infectious-disease-antibiotic-resistance', targetType: 'concept', relationship: 'related', label: 'Antibiotic Resistance' },
  ],
  tags: {
    systems: ['infectious-disease', 'dermatology'],
    topics: ['bacterial-infections', 'surgical-infections'],
    keywords: ['cellulitis', 'abscess', 'MRSA', 'necrotizing fasciitis', 'skin infection'],
    clinicalRelevance: 'high',
  },
  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
