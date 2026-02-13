import { EducationalContent } from '../../types';

export const staphInfections: EducationalContent = {
  id: 'infectious-disease-staph-infections',
  type: 'condition',
  name: 'Staphylococcus aureus Infections',
  alternateNames: ['Staph Infections', 'MRSA', 'MSSA', 'Staph aureus'],

  levels: {
    1: {
      level: 1,
      summary: 'Staph infections are caused by common bacteria that live on skin but can cause problems when they get inside the body through cuts or wounds.',
      explanation: `Staphylococcus aureus (often called "staph") is a type of bacteria that many people carry on their skin or in their nose without getting sick. However, if staph gets into the body through a cut, wound, or during surgery, it can cause infections ranging from minor skin problems to serious bloodstream infections.

**Common Types of Staph Infections:**

1. **Skin Infections**
   - Boils: Painful, pus-filled bumps
   - Cellulitis: Red, swollen skin that feels warm
   - Impetigo: Crusty sores, common in children

2. **More Serious Infections**
   - Bloodstream infection (sepsis)
   - Pneumonia (lung infection)
   - Bone infection (osteomyelitis)
   - Heart valve infection (endocarditis)

**MRSA vs Regular Staph:**
- Regular staph (MSSA) can be treated with common antibiotics
- MRSA (Methicillin-resistant Staphylococcus aureus) is harder to treat because it resists many antibiotics
- MRSA is more common in hospitals and nursing homes

**How Staph Spreads:**
- Skin-to-skin contact
- Sharing personal items like towels or razors
- Touching contaminated surfaces
- Through open wounds or cuts

**Prevention:**
- Wash hands frequently
- Keep cuts clean and covered
- Do not share personal items
- Shower after athletic activities`,
      keyTerms: [
        { term: 'bacteria', definition: 'Tiny living organisms that can cause infections' },
        { term: 'MRSA', definition: 'A type of staph bacteria that is resistant to many antibiotics' },
        { term: 'cellulitis', definition: 'A skin infection causing redness, swelling, and warmth' },
        { term: 'colonized', definition: 'Having bacteria living on or in your body without causing illness' },
      ],
      analogies: [
        'Staph bacteria are like seeds that can grow into plants. They sit on your skin like dormant seeds, but if they get into the soil (your body) through a cut, they can sprout and cause infection.',
        'MRSA is like a weed that is resistant to common weed killers - it requires special treatment to get rid of it.',
      ],
      examples: [
        'A high school wrestler gets a boil on his knee from skin-to-skin contact.',
        'A patient develops a wound infection after surgery.',
        'A child has impetigo around the nose and mouth.',
      ],
    },
    2: {
      level: 2,
      summary: 'Staphylococcus aureus is a gram-positive coccus that colonizes human skin and mucosa, causing diverse clinical syndromes from superficial skin infections to life-threatening sepsis and endocarditis.',
      explanation: `Staphylococcus aureus is a spherical, gram-positive bacterium that is a leading cause of both community-acquired and healthcare-associated infections worldwide. Its ability to cause diverse clinical syndromes and develop antibiotic resistance makes it a significant pathogen.

**Microbiology:**
- Gram-positive cocci in clusters (resembling grapes)
- Catalase-positive (distinguishes from streptococci)
- Coagulase-positive (distinguishes from coagulase-negative staph)
- Facultative anaerobe
- Salt-tolerant (can grow in high-salt environments)

**Virulence Factors:**

*Cell Wall Components:*
- Protein A: Binds antibodies, inhibits phagocytosis
- Capsule: Anti-phagocytic
- Peptidoglycan: Triggers inflammation

*Toxins:*
- Panton-Valentine leukocidin (PVL): Necrotizing pneumonia, skin infections
- Alpha toxin: Cell membrane damage
- Enterotoxins: Food poisoning
- Toxic shock syndrome toxin (TSST-1)
- Exfoliative toxins: Scalded skin syndrome

**Clinical Syndromes:**

*Skin and Soft Tissue:*
- Folliculitis: Hair follicle infection
- Furuncles (boils): Deep hair follicle infection
- Carbuncles: Connected clusters of furuncles
- Cellulitis: Deeper skin infection
- Abscesses: Pus collections

*Invasive Infections:*
- Bacteremia and sepsis
- Endocarditis (native and prosthetic valve)
- Osteomyelitis
- Septic arthritis
- Pneumonia (especially post-influenza, necrotizing)
- Deep abscesses

**Epidemiology:**
- 20-30% of population colonized
- Higher rates in healthcare workers, dialysis patients, IV drug users
- MRSA emerged in 1960s (hospital-associated)
- Community-associated MRSA emerged in 1990s
- Livestock-associated MRSA in agricultural workers`,
      keyTerms: [
        { term: 'coccus', definition: 'Spherical-shaped bacterium' },
        { term: 'catalase', definition: 'Enzyme that breaks down hydrogen peroxide' },
        { term: 'coagulase', definition: 'Enzyme that clots plasma' },
        { term: 'virulence factor', definition: 'Bacterial component that helps cause disease' },
        { term: 'bacteremia', definition: 'Bacteria in the bloodstream' },
      ],
      analogies: [
        'Staph aureus is like a versatile army with many weapons (virulence factors) and the ability to adapt (develop resistance).',
      ],
      examples: [
        'A patient with diabetes develops cellulitis on their foot.',
        'An IV drug user presents with fever and new heart murmur (endocarditis).',
        'A healthy athlete develops necrotizing pneumonia after influenza.',
      ],
    },
    3: {
      level: 3,
      summary: 'S. aureus pathogenesis involves multiple virulence factors, biofilm formation, and immune evasion strategies, with clinical management complicated by increasing resistance including MRSA and emerging vancomycin resistance.',
      explanation: `Staphylococcus aureus has evolved sophisticated mechanisms to colonize, invade, and persist in human hosts, making it one of the most successful bacterial pathogens.

**Pathogenesis Mechanisms:**

*Colonization and Adhesion:*
- Surface proteins bind host extracellular matrix
- Clumping factors bind fibrinogen
- Fibronectin-binding proteins
- Nasal colonization facilitated by iron acquisition systems

*Immune Evasion:*
- Protein A binds Fc region of antibodies
- Capsule inhibits phagocytosis
- Catalase neutralizes neutrophil oxidative burst
- Bi-component leukocidins lyse neutrophils
- Golden pigment (staphyloxanthin) resists oxidative killing

*Tissue Invasion:*
- Proteases degrade tissue barriers
- Hyaluronidase spreads infection
- Lipases degrade lipids
- Hemolysins damage cell membranes

*Biofilm Formation:*
- Polysaccharide intercellular adhesin (PIA)
- Adherence to medical devices
- Altered metabolism in biofilm
- Increased antibiotic tolerance

**Antibiotic Resistance:**

*MRSA Mechanisms:*
- mecA gene encodes PBP2a (altered penicillin-binding protein)
- PBP2a has low affinity for all beta-lactams
- SCCmec genetic element carries resistance
- Hospital-acquired (HA-MRSA) vs Community-acquired (CA-MRSA)

*Vancomycin Resistance:*
- VISA: Vancomycin-intermediate S. aureus (thickened cell wall)
- VRSA: Vancomycin-resistant S. aureus (vanA gene)
- Heterogeneous resistance (hVISA)

*Other Resistance:*
- Fluoroquinolone resistance (gyrA, grlA mutations)
- Linezolid resistance (23S rRNA mutations)
- Daptomycin resistance (cell membrane changes)

**Treatment Approaches:**

*MSSA (Methicillin-Susceptible):*
- Beta-lactams preferred (nafcillin, cefazolin, oxacillin)
- Superior to vancomycin (better killing, less toxicity)

*MRSA:*
- Vancomycin: First-line for serious infections
- Daptomycin: Bactericidal alternative (not for pneumonia)
- Linezolid: Good tissue penetration, oral bioavailability
- Ceftaroline: Beta-lactam with MRSA activity
- TMP-SMX or doxycycline: Oral options for outpatient`,
      keyTerms: [
        { term: 'biofilm', definition: 'Community of bacteria encased in protective matrix' },
        { term: 'phagocytosis', definition: 'Process by which immune cells engulf and destroy bacteria' },
        { term: 'PBP2a', definition: 'Altered penicillin-binding protein conferring methicillin resistance' },
        { term: 'SCCmec', definition: 'Staphylococcal cassette chromosome mec - genetic element carrying resistance genes' },
        { term: 'hVISA', definition: 'Heterogeneous vancomycin-intermediate S. aureus' },
      ],
    },
    4: {
      level: 4,
      summary: 'Advanced management of S. aureus infections requires source control, optimized antimicrobial therapy based on pharmacokinetic principles, differentiation of persistent infection from treatment failure, and recognition of toxin-mediated syndromes.',
      explanation: `Complex S. aureus infections require sophisticated clinical reasoning to address source control, antibiotic optimization, and complications including metastatic seeding and toxin-mediated disease.

**Source Control Principles:**

*Abscess Management:*
- Drainage is essential for cure
- Antibiotics alone often inadequate for abscesses >2-3 cm
- Image-guided drainage for deep collections
- Surgical debridement for necrotizing infections

*Device-Related Infections:*
- Remove infected catheters, prosthetic material when possible
- Early removal improves outcomes in endocarditis
- Retention associated with treatment failure

*Osteomyelitis:*
- Surgical debridement of necrotic bone
- Prolonged antibiotic courses (4-6+ weeks)
- Consider oral step-down after initial IV therapy

**Pharmacokinetic Optimization:**

*Vancomycin:*
- AUC/MIC target 400-600 (traditional trough 15-20 mcg/mL)
- Continuous infusion or extended infusions
- Loading doses in critically ill
- Nephrotoxicity monitoring
- "Red man syndrome" - rate-related histamine release

*Daptomycin:*
- Inactivated by pulmonary surfactant (avoid for pneumonia)
- Once-daily dosing
- Monitor CPK for rhabdomyolysis
- Dose by actual body weight

*Linezolid:*
- 100% oral bioavailability
- Myelosuppression with prolonged use (>2 weeks)
- Serotonin syndrome risk
- Peripheral neuropathy

**Clinical Challenges:**

*Persistent Bacteremia:*
- Evaluate for endocarditis (TEE if TTE negative)
- Check for deep foci (spine, joints, abscesses)
- Consider infected thrombophlebitis
- Evaluate prosthetic material

*Toxin-Mediated Syndromes:*

*Toxic Shock Syndrome:*
- TSST-1 superantigen activation
- Fever, hypotension, multi-organ involvement
- Desquamating rash
- Treatment: Source control + clindamycin (toxin suppression) + IVIG

*PVL-Associated Disease:*
- Necrotizing pneumonia (often post-influenza)
- Severe skin/soft tissue infections
- Consider adding clindamycin or linezolid (toxin suppression)

*Scalded Skin Syndrome:*
- Exfoliative toxins A and B
- Superficial skin separation
- Treatable with antibiotics alone`,
      keyTerms: [
        { term: 'superantigen', definition: 'Toxin that causes massive T-cell activation and cytokine release' },
        { term: 'source control', definition: 'Physical removal or drainage of infected material' },
        { term: 'desquamation', definition: 'Shedding of skin' },
        { term: 'TEE', definition: 'Transesophageal echocardiogram' },
        { term: 'thrombophlebitis', definition: 'Inflammation and clotting of a vein' },
      ],
      clinicalNotes: 'For S. aureus bacteremia, always evaluate for endocarditis with echocardiography. Persistent bacteremia beyond 72 hours suggests endocarditis, deep foci, or retained infected material. Beta-lactams are superior to vancomycin for MSSA - always use nafcillin/cefazolin if susceptible.',
    },
    5: {
      level: 5,
      summary: 'Expert management of S. aureus infections integrates molecular diagnostics, combination therapy strategies, adjunctive immunomodulation, and emerging therapies for multidrug-resistant strains within frameworks of antimicrobial stewardship.',
      explanation: `Management of complex S. aureus infections in the modern era requires integration of advanced diagnostics, therapeutic drug monitoring, and emerging treatment modalities.

**Advanced Diagnostics:**

*Rapid Identification:*
- MALDI-TOF MS: Species identification within minutes
- PVL gene detection: Guides toxin-suppressive therapy
- SCCmec typing: Distinguishes HA-MRSA from CA-MRSA
- mecA PCR: Rapid MRSA identification from clinical specimens

*Resistance Detection:*
- vanA/vanB PCR for VRE/VISA
- mecC detection (rare MRSA variant)
- Whole-genome sequencing for outbreak investigation

**Combination Therapy:**

*Rationale:*
- Synergy between beta-lactams and other agents
- Preventing resistance development
- Toxin suppression

*Evidence:*
- Daptomycin + beta-lactam: Improved outcomes in bacteremia
- Vancomycin + anti-staphylococcal beta-lactam: Enhanced killing
- High-inoculum infections may benefit from combination

*Endocarditis:*
- Aminoglycoside synergy (limited to first 3-5 days)
- Rifampin for prosthetic valve (after clearance of bacteremia)

**Adjunctive Therapies:**

*Intravenous Immunoglobulin (IVIG):*
- TSS with shock
- Severe PVL pneumonia
- Neutralizes superantigen effects

*Corticosteroids:*
- Severe sepsis/septic shock
- PVL pneumonia
- Evidence mixed but may reduce inflammation

*Clindamycin for Toxin Suppression:*
- Inhibits protein synthesis (reduces toxin production)
- Add to beta-lactam for severe SSTI with toxin production
- D-test for inducible resistance

**Emerging Therapies:**

*Novel Agents:*
- Ceftaroline: "5th generation" cephalosporin with MRSA activity
- Dalbavancin/Oritavancin: Long-acting lipoglycopeptides
- Tedizolid: Next-generation oxazolidinone
- Delafloxacin: Fluoroquinolone with MRSA activity

*Investigational:*
- Anti-staphylococcal vaccines (previous failures)
- Monoclonal antibodies against virulence factors
- Phage therapy for persistent infections
- Lysins (enzymes that destroy bacterial cell walls)

**Special Populations:**

*Cystic Fibrosis:*
- Chronic S. aureus colonization
- MRSA associated with worse outcomes
- Higher antibiotic doses needed

*Prosthetic Joint Infections:*
- Two-stage revision often required
- Rifampin combination after biofilm penetration
- Chronic suppressive therapy if surgery not possible

*Persistent MRSA Bacteremia:*
- Evaluate for endocarditis thoroughly
- Consider double-covering with vancomycin + daptomycin
- High-dose daptomycin (10-12 mg/kg)
- ID consultation essential`,
      keyTerms: [
        { term: 'lipoglycopeptide', definition: 'Class of antibiotics including vancomycin, telavancin, dalbavancin, oritavancin' },
        { term: 'oxazolidinone', definition: 'Antibiotic class including linezolid and tedizolid' },
        { term: 'D-test', definition: 'Test for inducible clindamycin resistance in staphylococci' },
        { term: 'lysins', definition: 'Enzymes that directly degrade bacterial cell walls' },
        { term: 'two-stage revision', definition: 'Surgical protocol for prosthetic joint infection with interim antibiotic spacer' },
      ],
      clinicalNotes: 'For persistent MRSA bacteremia despite appropriate therapy, consider adding an anti-staphylococcal beta-lactam to vancomycin (combination therapy) or switching to daptomycin. High-dose daptomycin (10-12 mg/kg) is increasingly used for difficult infections. For prosthetic valve endocarditis, add rifampin only after sterilizing the blood (typically day 3-5) to prevent rapid resistance development.',
    },
  },

  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    systems: ['infectious', 'immune', 'integumentary'],
    topics: ['bacterial-infections', 'resistance'],
    keywords: ['staph', 'MRSA', 'MSSA', 'skin infection', 'bacteremia'],
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default staphInfections;
