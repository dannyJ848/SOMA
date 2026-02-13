import { EducationalContent } from '../../types';

export const ENDOCARDITIS: EducationalContent = {
  id: 'infectious-disease-endocarditis',
  type: 'condition',
  name: 'Endocarditis',
  alternateNames: ['Infective Endocarditis', 'IE', 'Bacterial Endocarditis', 'Heart Valve Infection'],
  levels: {
    1: {
      level: 1,
      summary: 'Endocarditis is an infection of the heart valves that happens when germs get into the bloodstream and stick to the heart.',
      explanation: `Your heart has four valves that act like doors, opening and closing to keep blood flowing in the right direction. Normally, the inside of your heart is very clean because blood flows through quickly. But sometimes, germs (usually bacteria) can get into your bloodstream and stick to these valves, causing a serious infection called endocarditis.

**How Germs Get Into Your Blood:**
- Dental procedures or poor dental hygiene
- Skin infections that spread
- Using needles that aren't sterile
- Surgery or medical procedures
- Some germs from everyday activities

**What Happens:**
When germs stick to a heart valve, they form clumps called "vegetations" (like tiny growths). These clumps can:
- Damage the heart valve so it doesn't close properly
- Break off and travel through the bloodstream to other organs
- Spread infection throughout the body

**Warning Signs:**
- Fever that won't go away
- Feeling very tired
- Night sweats
- Losing weight without trying
- Aches and pains in muscles and joints
- Shortness of breath

**Who Is at Risk:**
- People with damaged or artificial heart valves
- People who inject drugs
- People with certain heart conditions

**Treatment:**
Endocarditis requires weeks of strong antibiotics given through an IV. Sometimes surgery is needed to repair or replace the damaged valve.`,
      keyTerms: [
        { term: 'Heart valve', definition: 'A flap in the heart that opens and closes to control blood flow' },
        { term: 'Endocarditis', definition: 'An infection of the inner lining of the heart, especially the valves' },
        { term: 'Vegetation', definition: 'A clump of germs, blood cells, and proteins that forms on an infected heart valve' },
        { term: 'Bloodstream', definition: 'The blood flowing through your body\'s blood vessels' },
      ],
    },
    2: {
      level: 2,
      summary: 'Infective endocarditis is a microbial infection of the cardiac valves or endocardium, characterized by vegetations and requiring prolonged antibiotic therapy, often with surgery.',
      explanation: `Infective endocarditis (IE) occurs when microorganisms, usually bacteria, infect the endocardial surface of the heart, most commonly the heart valves. The infection forms vegetations composed of platelets, fibrin, inflammatory cells, and bacteria.

**Classification:**

| Type | Characteristics |
|------|-----------------|
| Acute IE | Rapid onset, virulent organisms (S. aureus), high mortality |
| Subacute IE | Gradual onset, less virulent organisms (viridans streptococci) |
| Native valve IE | Infection of patient's own valves |
| Prosthetic valve IE | Infection of artificial valves |
| Right-sided IE | Usually in IV drug users, affects tricuspid valve |

**Common Causative Organisms:**
- *Staphylococcus aureus* (most common overall, especially IVDU)
- Viridans group streptococci (dental origin)
- *Enterococcus* species (GI/GU procedures)
- HACEK organisms (slow-growing, culture may be negative initially)
- Coagulase-negative staphylococci (prosthetic valves)

**Clinical Presentation:**

*Cardiac:*
- New or changing heart murmur
- Heart failure (from valve destruction)

*Systemic:*
- Fever (most common symptom)
- Fatigue, malaise, weight loss
- Night sweats

*Embolic Phenomena:*
- Stroke (septic emboli to brain)
- Splenic infarcts (left upper quadrant pain)
- Kidney infarcts (blood in urine)
- Pulmonary emboli (right-sided IE)

*Immunologic Phenomena:*
- Osler nodes (painful nodules on fingers/toes)
- Janeway lesions (painless red spots on palms/soles)
- Roth spots (retinal hemorrhages)
- Glomerulonephritis

**Diagnosis:**
The modified Duke criteria combine:
- Blood cultures (at least 2 sets from different sites)
- Echocardiography (transthoracic or transesophageal)
- Clinical findings (fever, vascular/immunologic phenomena)

**Treatment:**
- Prolonged IV antibiotics (4-6 weeks typically)
- Surgery if: heart failure, large vegetations, uncontrolled infection, or emboli despite treatment`,
      keyTerms: [
        { term: 'Vegetation', definition: 'An abnormal growth on a heart valve composed of bacteria, fibrin, and blood cells' },
        { term: 'Emboli', definition: 'Pieces of vegetation that break off and travel through the bloodstream to other organs' },
        { term: 'Osler nodes', definition: 'Tender, raised lesions on fingers and toes caused by immune complex deposition' },
        { term: 'Janeway lesions', definition: 'Painless, flat, red lesions on palms and soles caused by septic emboli' },
        { term: 'Duke criteria', definition: 'The diagnostic criteria used to classify probable or definite endocarditis' },
      ],
    },
    3: {
      level: 3,
      summary: 'Infective endocarditis pathophysiology involves valvular endothelial damage, bacterial adherence, and vegetation formation, with diagnosis based on Duke criteria and management requiring prolonged bactericidal therapy with consideration for surgical intervention.',
      explanation: `Infective endocarditis represents a complex interplay between microbial virulence factors, host cardiac abnormalities, and immune responses, requiring multidisciplinary management.

**Pathophysiology:**

*Stage 1 - Endothelial Damage:*
Conditions predisposing to IE cause endothelial injury:
- Turbulent blood flow (valvular disease, congenital defects)
- Degenerative valve disease
- Prosthetic materials
Damage leads to nonbacterial thrombotic endocarditis (NBTE) - sterile fibrin-platelet deposits

*Stage 2 - Bacteremia and Colonization:*
- Transient bacteremia (dental, GI, GU procedures; IV drug use)
- Bacteria with adhesins bind to NBTE
- *S. aureus* can directly invade intact endothelium

*Stage 3 - Vegetation Maturation:*
- Bacterial proliferation within fibrin-platelet matrix
- Protected from immune cells and antibiotics
- Organisms reach concentrations of 10^9-10^10 CFU/g
- Continuous bacterial shedding into bloodstream

**Modified Duke Criteria:**

*Major Criteria:*
1. Blood cultures positive for typical organisms (2 separate cultures) OR persistently positive cultures
2. Echocardiographic evidence: vegetation, abscess, new valve dehiscence, or new regurgitation

*Minor Criteria:*
1. Predisposing heart condition or IVDU
2. Fever > 38°C
3. Vascular phenomena (emboli, Janeway lesions, mycotic aneurysm)
4. Immunologic phenomena (Osler nodes, Roth spots, glomerulonephritis)
5. Microbiologic evidence not meeting major criteria

Definite IE: 2 major, 1 major + 3 minor, or 5 minor criteria

**Echocardiography:**

*Transthoracic (TTE):*
- Sensitivity ~50-60% for native valve IE
- Initial study in low-risk patients
- Better for right-sided lesions

*Transesophageal (TEE):*
- Sensitivity >90%
- Indicated when TTE negative but high suspicion
- Better for prosthetic valves, perivalvular complications
- Should be performed if *S. aureus* bacteremia

**Antimicrobial Therapy:**

*Principles:*
- Bactericidal regimens (vegetations impair host defenses)
- Prolonged duration (4-6 weeks) for vegetation sterilization
- Synergistic combinations when possible (aminoglycosides)
- High-dose IV therapy to achieve adequate tissue levels

*Common Regimens:*
| Organism | Typical Regimen |
|----------|-----------------|
| Viridans strep, penicillin-susceptible | Penicillin G or ceftriaxone x 4 weeks |
| MSSA | Nafcillin/oxacillin + optional gentamicin x 6 weeks |
| MRSA | Vancomycin x 6 weeks |
| Enterococcus | Ampicillin + gentamicin (or ceftriaxone) x 4-6 weeks |

**Surgical Indications:**
- Heart failure due to valve dysfunction
- Uncontrolled infection (persistent bacteremia, abscess)
- Prevention of embolic events (large/mobile vegetations)
- Prosthetic valve IE with complications`,
      keyTerms: [
        { term: 'NBTE', definition: 'Nonbacterial thrombotic endocarditis - sterile fibrin-platelet deposits on damaged endothelium that serve as a nidus for bacterial colonization' },
        { term: 'Dehiscence', definition: 'Separation of a prosthetic valve from the annulus due to infection' },
        { term: 'Mycotic aneurysm', definition: 'An aneurysm caused by infection of the arterial wall, often from septic emboli' },
        { term: 'TEE', definition: 'Transesophageal echocardiography - ultrasound performed from within the esophagus for better cardiac visualization' },
        { term: 'Bactericidal', definition: 'Capable of killing bacteria, as opposed to bacteriostatic which only inhibits growth' },
      ],
    },
    4: {
      level: 4,
      summary: 'Infective endocarditis management requires integration of microbial virulence factors, cardiac imaging modalities, antimicrobial pharmacodynamics, and surgical decision-making within an endocarditis team framework.',
      explanation: `Advanced IE management requires understanding of pathogen-specific virulence, imaging nuances, complex antimicrobial regimens, and surgical timing.

**Microbial Virulence Factors:**

*Staphylococcus aureus:*
- Clumping factor A/B: Binds fibrinogen, promotes adhesion
- Fibronectin-binding proteins: Facilitates valve colonization
- Protein A: Binds IgG Fc, impairs opsonization
- Toxins (PVL, alpha-toxin): Tissue destruction
- Biofilm formation: Antibiotic resistance

*Streptococci:*
- Glucan production: Promotes vegetation formation
- FimA (fimbriae): Adhesion to damaged endothelium
- Lower virulence, subacute presentation

*Enterococci:*
- Ace protein: Collagen adhesin
- Aggregation substance: Biofilm formation
- Intrinsic antibiotic resistance

**Advanced Imaging:**

*18F-FDG PET/CT:*
- Detects metabolically active infection
- Added as major criterion for prosthetic valve IE
- Useful for extracardiac foci, embolic events
- Limited by physiologic myocardial FDG uptake (requires preparation)

*Cardiac CT:*
- Perivalvular complications (abscess, pseudoaneurysm)
- Coronary anatomy pre-surgery
- Prosthetic valve assessment

*Cerebral MRI:*
- Detects silent cerebral emboli (present in ~80% of left-sided IE)
- Mycotic aneurysms
- Influences surgical timing

**Complex Antimicrobial Considerations:**

*MRSA Endocarditis:*
- Vancomycin: Target trough 15-20 mcg/mL, AUC/MIC 400-600
- Daptomycin: Alternative, higher doses (8-10 mg/kg) for IE
- Consider combination therapy: Vancomycin/daptomycin + gentamicin or rifampin
- Duration: 6 weeks minimum

*Enterococcal Endocarditis:*
- Ampicillin + gentamicin (or streptomycin): Synergy required
- High-level aminoglycoside resistance: Use ampicillin + ceftriaxone (double beta-lactam)
- VRE: Daptomycin + ampicillin or linezolid-based regimens

*Culture-Negative Endocarditis:*
- Prior antibiotics most common cause
- Consider: HACEK, Bartonella, Coxiella, Brucella, fungi
- Serologic and molecular testing (16S rRNA PCR)

**Surgical Decision-Making:**

*Timing:*
- Emergency (<24 hours): Refractory pulmonary edema, cardiogenic shock
- Urgent (<7 days): Heart failure, abscess, persistent infection
- Elective: After 1-2 weeks of antibiotics when stable

*Post-Stroke Surgery:*
- Hemorrhagic stroke: Delay surgery 4 weeks if possible
- Ischemic stroke: Risk-benefit analysis; small infarcts may proceed
- Mycotic aneurysm: Secure before cardiac surgery

**Endocarditis Team Approach:**
Multidisciplinary team reduces mortality:
- Cardiology
- Cardiac surgery
- Infectious disease
- Neurology (for CNS complications)
- Radiology/nuclear medicine

Standardized protocols, regular meetings, and shared decision-making improve outcomes.

**Special Populations:**

*IV Drug Users:*
- Right-sided predominance (tricuspid valve)
- *S. aureus* most common
- May complete therapy with oral antibiotics in select cases
- Addiction medicine consultation essential
- Surgery considerations complex (recidivism risk)

*Cardiac Device-Related IE:*
- Pacemakers, ICDs
- Complete device removal required for cure
- Lead extraction techniques
- Prolonged antibiotics post-extraction`,
      keyTerms: [
        { term: 'FDG PET/CT', definition: '18F-fluorodeoxyglucose positron emission tomography - imaging that detects increased metabolic activity in infected tissue' },
        { term: 'High-level aminoglycoside resistance', definition: 'Enterococcal resistance that eliminates the synergistic benefit of aminoglycosides with cell wall agents' },
        { term: 'Double beta-lactam therapy', definition: 'Use of two beta-lactam antibiotics for synergy against enterococci with aminoglycoside resistance' },
        { term: 'Lead extraction', definition: 'Removal of pacemaker or ICD wires, often requiring specialized techniques due to tissue ingrowth' },
        { term: 'Endocarditis team', definition: 'A multidisciplinary group managing complex IE cases, associated with improved outcomes' },
      ],
      clinicalNotes: 'The timing of surgery in IE, especially with neurological complications, requires careful balancing of risks. Delays allow antibiotic therapy to reduce operative risk but may allow further embolization or valve destruction. Endocarditis team decision-making with neurology, cardiac surgery, and infectious disease input is essential.',
    },
    5: {
      level: 5,
      summary: 'Contemporary endocarditis management integrates multimodality imaging including PET/CT, molecular diagnostics for culture-negative cases, optimized antimicrobial pharmacokinetics, and early surgical intervention within dedicated endocarditis programs, while addressing emerging challenges including IVDU-associated disease and prosthetic valve infections.',
      explanation: `Expert-level IE care requires synthesis of evolving diagnostic criteria, complex antimicrobial pharmacology, and integration of interventional approaches within a quality improvement framework.

**Evolving Diagnostic Framework:**

*2023 Duke-ISCVID Criteria Updates:*
- Incorporation of advanced imaging (PET/CT, cardiac CT)
- Addition of CIED-IE criteria
- Recognition of surgical pathology findings
- Expanded microbiological criteria

*Molecular Diagnostics:*
- 16S/18S rRNA gene PCR from blood/tissue
- Metagenomic next-generation sequencing
- Useful for culture-negative cases (30% of IE)
- Limitations: Cannot determine viability, susceptibility testing

*Blood Culture Advances:*
- Extended incubation (up to 21 days for HACEK)
- Lysis-centrifugation for fungi
- Direct-from-blood molecular identification

**Optimized Antimicrobial Therapy:**

*PK/PD Optimization:*
- Beta-lactam continuous infusions: Maximize time > MIC
- Daptomycin high-dose regimens (8-12 mg/kg)
- Therapeutic drug monitoring: Vancomycin (AUC-guided), aminoglycosides, daptomycin

*Novel Agents and Combinations:*
- Dalbavancin: Long half-life allowing weekly dosing, emerging data in IE
- Ceftaroline: MRSA activity, may be combined with daptomycin
- Fosfomycin: Biofilm penetration, combination therapy

*OPAT (Outpatient Parenteral Antimicrobial Therapy):*
- Stable patients may complete therapy at home
- Requires reliable access, monitoring, support
- Cost-effective, reduces nosocomial complications

*Partial Oral Therapy:*
- POET trial: Oral step-down non-inferior in stable patients (left-sided, strep/staph/enterococcus)
- Requires documented source control, clinical stability
- Not applicable to all organisms or complicated cases

**Surgical Considerations:**

*Early Surgery Evidence:*
- EASE trial: Early surgery reduced composite endpoint in severe IE with large vegetations
- Timing critical: Before embolization or hemodynamic deterioration

*Intraoperative Considerations:*
- Radical debridement of infected tissue
- Annular reconstruction techniques
- Homograft vs. prosthetic valve decision
- Role of ongoing antibiotics

*Transcatheter Approaches:*
- Emerging role for tricuspid valve IE in IVDU
- TAVR in degenerative disease complicating IE (highly selected)
- Catheter-based vegetation removal investigational

**IVDU-Associated Endocarditis:**

*Epidemiologic Crisis:*
- Opioid epidemic driving increased IE cases
- Often young patients with no prior cardiac disease
- Recurrent episodes common

*Management Challenges:*
- Initial surgery: Balance of operative risk vs. medical failure
- Repeat surgery ethics: Resource allocation, outcomes, recidivism
- Harm reduction: Medication-assisted treatment, needle exchange
- Long-term antibiotics (oral suppression) investigational

*Proposed Frameworks:*
- Addiction medicine involvement mandatory
- Shared decision-making with patient
- No absolute contraindication to repeat surgery

**Prosthetic Valve Endocarditis:**

*Early PVE (<1 year):*
- Healthcare-associated pathogens: *S. aureus*, coagulase-negative staphylococci, Gram-negatives
- Often surgical emergency
- High mortality

*Late PVE (>1 year):*
- Community-acquired organisms similar to NVE
- Better prognosis than early PVE

*Surgical Approach:*
- Complete explantation when feasible
- Consider homograft in aortic position
- Annular reconstruction for abscess

**Quality Improvement:**

*Endocarditis Centers:*
- Dedicated multidisciplinary programs
- Standardized diagnostic protocols
- Surgical capability
- Associated with lower mortality

*Performance Metrics:*
- Blood cultures before antibiotics
- Echocardiography within 24-48 hours
- ID consultation
- Surgical evaluation when indicated
- Dental evaluation before discharge

**Research Frontiers:**
- Vaccine development (*S. aureus*)
- Biofilm-disrupting agents
- Host immune modulation
- AI-assisted echocardiographic analysis
- Novel oral agents for prolonged therapy`,
      keyTerms: [
        { term: 'Duke-ISCVID criteria', definition: 'Updated diagnostic criteria for IE incorporating advanced imaging and molecular diagnostics' },
        { term: 'POET trial', definition: 'Landmark trial demonstrating non-inferiority of partial oral antibiotic therapy for stable left-sided endocarditis' },
        { term: 'OPAT', definition: 'Outpatient Parenteral Antimicrobial Therapy - administration of IV antibiotics outside the hospital setting' },
        { term: 'Medication-assisted treatment', definition: 'Use of medications (buprenorphine, methadone) combined with counseling for opioid use disorder' },
        { term: 'Homograft', definition: 'A human donor valve used for valve replacement, with advantages in infected fields' },
      ],
      clinicalNotes: 'IE management continues to evolve with new imaging modalities and antibiotic strategies. The partial oral therapy approach from the POET trial represents a paradigm shift but requires careful patient selection. IVDU-associated IE presents profound ethical and practical challenges requiring integrated addiction medicine and surgical approaches. Endocarditis team programs represent the standard of care for complex cases.',
    },
  },
  media: [],
  citations: [
    {
      id: 'baddour-ie-2015',
      type: 'article',
      title: 'Infective Endocarditis in Adults: Diagnosis, Antimicrobial Therapy, and Management of Complications',
      authors: ['Baddour LM', 'Wilson WR', 'Bayer AS'],
      source: 'Circulation',
      license: 'Copyrighted',
    },
    {
      id: 'habib-esc-2015',
      type: 'article',
      title: 'ESC Guidelines for the Management of Infective Endocarditis',
      authors: ['Habib G', 'Lancellotti P', 'Antunes MJ'],
      source: 'European Heart Journal',
      license: 'Copyrighted',
    },
  ],
  crossReferences: [
    { targetId: 'infectious-disease-sepsis', targetType: 'condition', relationship: 'related', label: 'Sepsis' },
    { targetId: 'infectious-disease-skin-infections', targetType: 'condition', relationship: 'related', label: 'Skin Infections' },
    { targetId: 'infectious-disease-antibiotic-resistance', targetType: 'concept', relationship: 'related', label: 'Antibiotic Resistance' },
  ],
  tags: {
    systems: ['infectious-disease', 'cardiology'],
    topics: ['cardiac-infections', 'valvular-disease', 'bacteremia'],
    keywords: ['endocarditis', 'vegetations', 'Duke criteria', 'heart valve', 'bacteremia'],
    clinicalRelevance: 'critical',
  },
  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
