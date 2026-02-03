import { EducationalContent } from '../../types';

export const skinInfections: EducationalContent = {
  id: 'infectious-disease-skin-infections',
  type: 'condition',
  name: 'Skin and Soft Tissue Infections',
  alternateNames: ['SSTI', 'Cellulitis', 'Abscess', 'Impetigo', 'Wound Infection'],

  levels: {
    1: {
      level: 1,
      summary: 'Skin infections happen when bacteria get under your skin through cuts, scrapes, or insect bites and cause redness, swelling, and pain.',
      explanation: `Your skin is your body's first line of defense against germs. Sometimes bacteria can get through this barrier and cause an infection.

**Types of Skin Infections:**

1. **Impetigo** - Crusty, honey-colored sores
   - Very common in kids
   - Spreads easily to others
   - Usually around nose and mouth

2. **Cellulitis** - Red, warm, swollen skin
   - Skin feels tender to touch
   - May have fever
   - Usually on legs or arms
   - Needs antibiotics

3. **Abscess (Boil)** - A pocket of pus under the skin
   - Red, painful bump
   - Gets bigger over days
   - May need to be drained
   - Often caused by staph bacteria

4. **Folliculitis** - Infected hair follicles
   - Small red bumps around hairs
   - Can look like pimples
   - Common after shaving or hot tubs

**Warning Signs to See a Doctor:**
- Spreading redness (draw a line to track it)
- Fever or chills
- Red streaks from the infection
- Pus or drainage
- Pain getting worse
- Feeling very sick

**How to Prevent Skin Infections:**
- Wash cuts and scrapes right away with soap and water
- Keep wounds clean and covered
- Don't pick at scabs or bites
- Wash hands often
- Don't share towels, razors, or clothes

**Treatment:**
- Minor infections: Keep clean, watch for spreading
- Abscesses: Usually need drainage (doctor opens it up)
- Cellulitis: Needs antibiotics (pills or IV)
- Always finish your antibiotics!`,
      keyTerms: [
        { term: 'cellulitis', definition: 'A skin infection that causes redness, warmth, and swelling' },
        { term: 'abscess', definition: 'A pocket of pus that forms under the skin, also called a boil' },
        { term: 'impetigo', definition: 'A contagious skin infection with honey-colored crusty sores' },
        { term: 'pus', definition: 'Thick yellow or green fluid made of dead bacteria and white blood cells' },
      ],
      analogies: [
        'Your skin is like a castle wall. When bacteria find a crack (cut or scrape), they sneak in and set up camp. The swelling and pus are signs your immune system army is fighting back!',
      ],
      examples: [
        'A child with honey-colored crusty sores around their nose likely has impetigo.',
        'A red, warm, tender area on the leg that keeps spreading is likely cellulitis.',
      ],
    },
    2: {
      level: 2,
      summary: 'Skin and soft tissue infections (SSTIs) range from superficial impetigo to deep necrotizing fasciitis, primarily caused by Staphylococcus and Streptococcus bacteria, with treatment based on severity and depth.',
      explanation: `Skin and soft tissue infections represent a spectrum of disease severity requiring different management approaches.

**Classification by Depth:**

1. **Superficial Infections:**
   - *Impetigo* - Epidermis only
     * Non-bullous: S. aureus or Group A Strep
     * Bullous: S. aureus toxins
   - *Folliculitis* - Hair follicle infection
   - *Furuncle (boil)* - Deep follicle infection
   - *Carbuncle* - Multiple connected furuncles

2. **Deeper Infections:**
   - *Erysipelas* - Upper dermis and lymphatics
     * Sharp, raised borders
     * Usually Group A Strep
   - *Cellulitis* - Deeper dermis and subcutaneous tissue
     * Indistinct borders
     * S. aureus or Group A Strep
   - *Abscess* - Localized pus collection
     * Fluctuant mass
     * Usually S. aureus (often MRSA)

3. **Severe/Necrotizing Infections:**
   - *Necrotizing fasciitis* - Surgical emergency!
   - *Gas gangrene* - Clostridial muscle infection

**Common Bacteria:**
- *Staphylococcus aureus* - Most common cause
  * MSSA (methicillin-sensitive)
  * MRSA (methicillin-resistant) - increasingly common
- *Streptococcus pyogenes* (Group A Strep)
- *Streptococcus agalactiae* (Group B Strep) - diabetics

**Risk Factors:**
- Breaks in skin (cuts, bites, surgery)
- Diabetes
- Obesity
- Lymphedema or venous insufficiency
- Injection drug use
- Immunosuppression
- Previous cellulitis (damages lymphatics)

**Clinical Features:**

*Cellulitis:*
- Erythema (redness)
- Warmth
- Tenderness
- Swelling
- +/- Fever
- No defined borders

*Abscess:*
- Fluctuant mass (feels like fluid-filled sac)
- Surrounding erythema
- Very tender
- May have visible "point"

**Treatment Approach:**

*Uncomplicated Cellulitis (no purulence):*
- Likely Group A Strep or MSSA
- First-line: Cephalexin or dicloxacillin
- Duration: 5 days usually sufficient

*Purulent Cellulitis or Abscess:*
- Likely S. aureus (often MRSA)
- Abscess: Incision and drainage (I&D) is PRIMARY treatment
- Antibiotics for: Large abscess, surrounding cellulitis, systemic symptoms
- MRSA coverage: TMP-SMX or doxycycline

**When to Hospitalize:**
- Systemic signs (high fever, tachycardia, hypotension)
- Failed outpatient therapy
- Immunocompromised
- Unable to take oral medications
- Rapid progression`,
      keyTerms: [
        { term: 'MRSA', definition: 'Methicillin-resistant Staphylococcus aureus - staph bacteria resistant to common antibiotics', pronunciation: 'MER-sah' },
        { term: 'fluctuant', definition: 'The soft, wave-like feel of a fluid-filled abscess when pressed' },
        { term: 'incision and drainage', definition: 'Procedure to cut open and drain an abscess' },
        { term: 'erysipelas', definition: 'Superficial skin infection with sharply defined raised borders', pronunciation: 'air-ih-SIP-uh-lus' },
      ],
      analogies: [
        'An abscess is like a water balloon filled with pus - antibiotics can not get inside it well, so it needs to be drained.',
      ],
    },
    3: {
      level: 3,
      summary: 'SSTIs are classified by purulent versus non-purulent presentation, guiding empiric antibiotic selection between MRSA-covering agents versus beta-hemolytic streptococcal coverage, with incision and drainage being the cornerstone of purulent infection management.',
      explanation: `Evidence-based SSTI management focuses on clinical presentation, local epidemiology, and appropriate antimicrobial stewardship.

**IDSA Classification (2014 Guidelines):**

*Purulent SSTIs (S. aureus likely):*
- Abscess, furuncle, carbuncle
- Cellulitis with purulent drainage
- Management: I&D ± antibiotics

*Non-purulent SSTIs (Strep likely):*
- Cellulitis without purulence
- Erysipelas
- Management: Antibiotics targeting streptococci

**Severity Classification:**

*Mild:*
- No systemic symptoms
- Healthy host
- Outpatient oral therapy

*Moderate:*
- Systemic symptoms (fever) OR
- Comorbidities OR
- Failed outpatient therapy
- May need initial IV therapy

*Severe:*
- Sepsis, deep infection, or necrotizing
- Failed I&D and antibiotics
- Immunocompromised
- Requires hospitalization and IV therapy

**Microbiologic Considerations:**

*Community-Acquired MRSA (CA-MRSA):*
- Predominant cause of purulent SSTIs
- USA300 strain most common in US
- Carries PVL toxin (Panton-Valentine leukocidin)
- Usually susceptible to: TMP-SMX, doxycycline, clindamycin
- Resistant to: Beta-lactams, often fluoroquinolones

*Beta-Hemolytic Streptococci:*
- Primary cause of non-purulent cellulitis
- Always susceptible to beta-lactams
- Penicillin allergic: Clindamycin, vancomycin

**Special Situations:**

*Bite Wounds:*
- Human bites: S. aureus, Streptococci, Eikenella corrodens
- Dog/cat bites: Pasteurella multocida, Capnocytophaga
- Empiric: Amoxicillin-clavulanate (covers all)

*Diabetic Foot Infections:*
- Polymicrobial: Gram-positives + Gram-negatives + anaerobes
- Mild: Oral agent covering Gram-positives
- Moderate-severe: Broad coverage including Pseudomonas if risk factors
- Always assess for osteomyelitis

*Water Exposure:*
- Fresh water: Aeromonas hydrophila
- Salt water: Vibrio vulnificus (especially with liver disease)
- Cover with fluoroquinolone or doxycycline

**Treatment Duration:**

| Infection | Duration |
|-----------|----------|
| Simple abscess (I&D only) | No antibiotics needed |
| Abscess + cellulitis | 5-7 days |
| Uncomplicated cellulitis | 5 days |
| Severe cellulitis | 7-14 days |
| Bite wounds | 3-5 days prophylaxis |

**Recurrent Furunculosis:**
- Culture to confirm S. aureus
- Decolonization protocol:
  * Mupirocin 2% nasal ointment BID x 5 days
  * Chlorhexidine body wash x 5-14 days
  * Wash linens and towels in hot water
  * Consider household member treatment
- If recurrent despite decolonization: Consider bleach baths`,
      keyTerms: [
        { term: 'PVL (Panton-Valentine leukocidin)', definition: 'Toxin produced by CA-MRSA that destroys white blood cells and causes tissue necrosis' },
        { term: 'purulent', definition: 'Containing or producing pus; indicates S. aureus etiology' },
        { term: 'decolonization', definition: 'Protocol to eliminate S. aureus carriage from skin and nares to prevent recurrent infection' },
        { term: 'polymicrobial', definition: 'Infection caused by multiple different bacterial species' },
      ],
      clinicalNotes: 'For uncomplicated abscesses, I&D alone may be sufficient without antibiotics in healthy patients. RCTs show antibiotics reduce recurrence but are not always necessary for cure. Reserve antibiotics for larger abscesses, surrounding cellulitis, or systemic symptoms.',
    },
    4: {
      level: 4,
      summary: 'SSTI management integrates purulent/non-purulent classification, severity stratification, and MRSA epidemiology, with emerging evidence supporting shorter antibiotic courses and primary I&D without antibiotics for uncomplicated abscesses in appropriate patients.',
      explanation: `Advanced SSTI management requires nuanced clinical decision-making balancing antimicrobial stewardship with patient outcomes.

**Pathophysiology of Key Pathogens:**

*Staphylococcus aureus:*
- Colonizes nares (30% population), perineum, axillae
- Virulence factors:
  * Protein A: Binds IgG Fc, prevents opsonization
  * Coagulase: Promotes clot formation around bacteria
  * Alpha-toxin: Pore-forming, tissue destruction
  * PVL: Leukocyte destruction, associated with CA-MRSA
- Biofilm formation on devices

*Streptococcus pyogenes (GAS):*
- M protein: Major virulence factor, antiphagocytic
- Streptococcal pyrogenic exotoxins (SPEs): Superantigens
- Streptokinase: Dissolves clots, aids spread
- Hyaluronidase: "Spreading factor"

**Evidence-Based Treatment Updates:**

*Abscess Management (IDSA 2014 + subsequent RCTs):*
- I&D remains primary treatment
- TMP-SMX vs placebo after I&D (studies):
  * Increased cure rate with antibiotics
  * Decreased recurrence
  * Benefit most clear for larger abscesses (>5cm)
- Reasonable to omit antibiotics for small abscesses in healthy patients

*Cellulitis Duration:*
- Traditional: 10-14 days
- RCT evidence: 5-6 days non-inferior for uncomplicated
- Continue until clinical improvement (minimum 5 days)
- Longer if slow response

**MRSA Coverage Decision:**

*When to Cover MRSA:*
- Purulent infection
- Failed beta-lactam therapy
- MRSA prevalence >10-15% locally
- Risk factors: Prior MRSA, IVDU, homeless, incarceration

*When Beta-Lactam Alone Acceptable:*
- Non-purulent cellulitis without MRSA risk factors
- Reliable follow-up
- Low local MRSA prevalence

**Necrotizing Fasciitis Recognition:**

*High-Risk Clinical Features (Hard Signs):*
- Pain out of proportion to exam
- Crepitus (gas in tissues)
- Bullae or skin necrosis
- Rapid progression despite antibiotics
- Hemodynamic instability
- Failure to respond to appropriate therapy

*Soft Signs (Concerning):*
- Edema beyond erythema borders
- Wooden-hard induration
- Cutaneous anesthesia
- Systemic toxicity

*LRINEC Score (Laboratory Risk Indicator):*
- CRP, WBC, hemoglobin, sodium, creatinine, glucose
- Score ≥6 concerning (but sensitivity imperfect)
- Clinical suspicion trumps scoring

*Management:*
- Surgical emergency - debridement within hours
- Broad-spectrum antibiotics: Vancomycin + piperacillin-tazobactam + clindamycin
- Clindamycin inhibits toxin production
- ICU admission
- May require multiple debridements

**Special Populations:**

*Injection Drug Users:*
- MRSA common
- Consider unusual organisms: Pseudomonas, fungi
- Evaluate for deep space infections, endocarditis
- Neck abscesses: Internal jugular thrombophlebitis risk

*Immunocompromised:*
- Broader differential: fungi, mycobacteria, Pseudomonas
- Lower threshold for cultures, imaging
- May lack inflammatory response
- Consider empiric broad coverage`,
      keyTerms: [
        { term: 'LRINEC score', definition: 'Laboratory Risk Indicator for Necrotizing Fasciitis; composite score suggesting necrotizing infection' },
        { term: 'crepitus', definition: 'Crackling sensation on palpation due to gas in tissues; suggests necrotizing infection or gas gangrene' },
        { term: 'superantigen', definition: 'Toxin that non-specifically activates T cells, causing massive cytokine release' },
        { term: 'M protein', definition: 'Major virulence factor of S. pyogenes; antiphagocytic and basis for serotyping' },
      ],
      clinicalNotes: 'Necrotizing fasciitis is diagnosed clinically and surgically - do not delay surgery for imaging. CT may show fascial thickening and gas but normal imaging does not rule out necrotizing infection. When in doubt, take the patient to the OR.',
    },
    5: {
      level: 5,
      summary: 'SSTI pathogenesis involves sophisticated bacterial virulence arsenals including toxin-mediated cytolysis, immune evasion through complement and neutrophil interference, and biofilm formation, with contemporary management emphasizing diagnostic stewardship, MRSA epidemiology surveillance, and judicious antibiotic selection based on high-quality RCT evidence.',
      explanation: `Expert SSTI management integrates molecular pathogenesis, clinical trial evidence, and antimicrobial stewardship principles.

**Advanced Virulence Mechanisms:**

*S. aureus Immune Evasion Arsenal:*
1. **Complement Evasion:**
   - SCIN (Staphylococcal complement inhibitor): Blocks C3 convertase
   - Efb (Extracellular fibrinogen-binding protein): Blocks C3b
   - SpA (Staphylococcal protein A): Binds IgG Fc, prevents opsonization

2. **Neutrophil Evasion:**
   - Chemotaxis inhibitory proteins (CHIPS)
   - Formyl peptide receptor antagonists
   - Leukocidin toxins (LukAB, LukED, PVL)
   - Phenol-soluble modulins: Lyse neutrophils

3. **Biofilm Formation:**
   - Polysaccharide intercellular adhesin (PIA)
   - Persister cell formation
   - 100-1000x increased antibiotic tolerance

*GAS Invasion and Toxins:*
- SPE-A, B, C: Superantigens (streptococcal toxic shock)
- Streptococcal cysteine proteases (SpeB, SpyCEP)
- DNases (Sda1): Degrade neutrophil extracellular traps
- M protein types: emm1, emm3 associated with invasive disease

**Landmark Clinical Trials:**

*Abscess - TMP-SMX vs Placebo:*
- Talan et al., NEJM 2016
- 1247 patients with abscess ≥2cm after I&D
- TMP-SMX increased cure rate (80.5% vs 73.6%)
- NNT = 14 for cure
- Decreased recurrence at 30 days
- Conclusion: Antibiotics beneficial for larger abscesses

*Cellulitis Duration:*
- Hepburn et al., JAMA 2004 (5 vs 10 days)
- Thomas et al., Ann Emerg Med 2013 (5 vs 10 days)
- Non-inferiority established for uncomplicated cellulitis
- Shorter duration now standard

*Cephalexin + TMP-SMX vs Cephalexin Alone:*
- Moran et al., NEJM 2017
- Uncomplicated cellulitis without purulence
- No benefit from adding MRSA coverage
- Confirms streptococcal etiology of non-purulent cellulitis

**Diagnostic Considerations:**

*Blood Cultures:*
- Yield: <2-4% for uncomplicated cellulitis
- Higher yield: Immunocompromised, bites, water exposure
- Not routinely recommended for uncomplicated SSTI
- Obtain for: Sepsis, severe infection, unusual host

*Imaging:*
- Not routine for cellulitis
- Indications: Abscess localization, deep space infection concern
- MRI: Best for necrotizing fasciitis, osteomyelitis
- CT with contrast: Gas, fascial enhancement

*Molecular Diagnostics:*
- NAAT for MRSA (nasal screening)
- PCR direct from abscess fluid (research)
- Multiplex panels for sepsis

**Antimicrobial Stewardship Considerations:**

*Appropriate Empiric Selection:*
- Non-purulent: Cephalexin, dicloxacillin (not TMP-SMX)
- Purulent/MRSA risk: TMP-SMX, doxycycline
- Severe: Vancomycin + piperacillin-tazobactam

*Duration Optimization:*
- Default to shorter courses when supported
- Clinical response-guided duration
- Oral step-down when improving

*De-escalation:*
- Narrow based on cultures when available
- MSSA: Switch vancomycin to nafcillin/cefazolin
- Strep: Switch to penicillin/ampicillin

**Emerging Concepts:**

1. **Point-of-Care Ultrasound:**
   - Distinguishes abscess from cellulitis
   - Guides I&D
   - Identifies residual fluid collections
   - Increasingly standard in EDs

2. **Adjunctive Therapies:**
   - Compression/elevation for lower extremity cellulitis
   - Prophylactic antibiotics for recurrent cellulitis (erysipelas)
     * Penicillin VK 250mg BID
     * Erythromycin if allergic
   - Compression stockings for venous insufficiency

3. **Novel Antibiotics:**
   - Delafloxacin: MRSA coverage, oral and IV
   - Omadacycline: Aminomethylcycline, MRSA active
   - Lefamulin: Pleuromutilin, SSTI indication
   - Oritavancin, dalbavancin: Long-acting lipoglycopeptides (single-dose options)

4. **Precision Medicine:**
   - Rapid MRSA PCR to guide therapy
   - Host-response biomarkers
   - Genomic surveillance for outbreak detection`,
      keyTerms: [
        { term: 'phenol-soluble modulins (PSMs)', definition: 'S. aureus cytolytic peptides that lyse neutrophils and contribute to abscess formation' },
        { term: 'persister cells', definition: 'Metabolically dormant bacterial subpopulation within biofilms, tolerant to antibiotics without genetic resistance' },
        { term: 'SCIN', definition: 'Staphylococcal complement inhibitor; blocks C3 convertase to evade complement-mediated killing' },
        { term: 'oritavancin', definition: 'Long-acting lipoglycopeptide antibiotic allowing single-dose treatment of SSTIs' },
      ],
      clinicalNotes: `**Board-Relevant Pearls:**
- Non-purulent cellulitis = Strep until proven otherwise; no MRSA coverage needed
- Purulent = S. aureus/MRSA; TMP-SMX or doxycycline, ensure I&D
- Pain out of proportion, crepitus, bullae, rapid spread = necrotizing fascitis until proven otherwise
- Blood cultures: Low yield in routine cellulitis; obtain for sepsis, immunocompromise
- Duration: 5 days generally sufficient for uncomplicated cellulitis
- Recurrent leg cellulitis: Think venous insufficiency, lymphedema, tinea pedis (treat underlying cause)
- Decolonization for recurrent furunculosis: Nasal mupirocin + chlorhexidine body wash`,
    },
  },

  media: [
    {
      id: 'ssti-classification',
      type: 'diagram',
      filename: 'ssti-depth-classification.svg',
      title: 'SSTI Classification by Depth',
      description: 'Cross-sectional diagram showing impetigo, erysipelas, cellulitis, abscess, and necrotizing fasciitis',
    },
    {
      id: 'abscess-drainage',
      type: 'diagram',
      filename: 'abscess-id-technique.svg',
      title: 'Incision and Drainage Technique',
      description: 'Step-by-step illustration of abscess drainage procedure',
    },
  ],
  citations: [
    {
      id: 'idsa-ssti-2014',
      type: 'article',
      title: 'Practice Guidelines for the Diagnosis and Management of Skin and Soft Tissue Infections',
      authors: ['Stevens DL', 'Bisno AL', 'Chambers HF'],
      source: 'Clinical Infectious Diseases',
      url: 'https://doi.org/10.1093/cid/ciu296',
    },
    {
      id: 'talan-nejm-2016',
      type: 'article',
      title: 'Trimethoprim-Sulfamethoxazole versus Placebo for Uncomplicated Skin Abscess',
      authors: ['Talan DA', 'Mower WR', 'Krishnadasan A'],
      source: 'New England Journal of Medicine',
    },
  ],
  crossReferences: [
    { targetId: 'infectious-disease-mrsa', targetType: 'condition', relationship: 'related', label: 'MRSA' },
    { targetId: 'infectious-disease-staph', targetType: 'topic', relationship: 'parent', label: 'Staphylococcal Infections' },
    { targetId: 'integumentary-anatomy-skin', targetType: 'structure', relationship: 'related', label: 'Skin Anatomy' },
  ],
  tags: {
    systems: ['integumentary', 'immune'],
    topics: ['infectious-disease', 'emergency-medicine', 'primary-care', 'surgery'],
    keywords: ['cellulitis', 'abscess', 'MRSA', 'SSTI', 'staph', 'strep', 'necrotizing fasciitis'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'surgery', 'emergency-medicine'] },
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default skinInfections;
