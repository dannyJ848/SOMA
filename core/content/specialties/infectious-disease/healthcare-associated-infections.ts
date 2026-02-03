/**
 * Healthcare-Associated Infections - Comprehensive Educational Content
 *
 * Covers HAIs including CLABSI, CAUTI, VAP, and SSI.
 */

import { EducationalContent } from '../../types';

export const healthcareAssociatedInfections: EducationalContent = {
  id: 'infectious-disease-hai',
  type: 'topic',
  name: 'Healthcare-Associated Infections',
  alternateNames: ['HAI', 'Nosocomial Infections', 'Hospital-Acquired Infections'],

  levels: {
    1: {
      level: 1,
      summary: 'Healthcare-associated infections are infections that people get while receiving medical care in hospitals or other healthcare facilities.',
      explanation: `When you go to a hospital or clinic for treatment, you expect to get better. But sometimes, people can catch new infections while they are being cared for. These are called healthcare-associated infections (HAIs).

**Why Do HAIs Happen?**
- Hospitals have many sick people with germs
- Medical devices like tubes and catheters can let germs in
- Some germs in hospitals are very strong (antibiotic-resistant)
- Sick people have weaker defenses against germs

**Common Types of HAIs:**

1. **Catheter Infections:**
   - Tubes in your bladder (urinary catheter)
   - Tubes in your veins for medicine (IV lines)

2. **Breathing Tube Infections:**
   - When people need machines to help them breathe

3. **Surgical Wound Infections:**
   - Germs getting into the cut from surgery

4. **C. diff Infections:**
   - A germ that causes bad diarrhea, often after antibiotics

**How Hospitals Prevent HAIs:**
- Hand washing (most important!)
- Cleaning equipment and rooms
- Removing tubes as soon as they are not needed
- Using antibiotics carefully
- Wearing gloves and gowns when needed

**What You Can Do:**
- Ask visitors and healthcare workers to wash their hands
- Keep your own hands clean
- Ask your doctor if you still need that catheter or IV`,
      keyTerms: [
        { term: 'healthcare-associated infection', definition: 'An infection you get while receiving medical care that you did not have before' },
        { term: 'catheter', definition: 'A tube placed in your body for medicine or to drain fluids' },
        { term: 'antibiotic-resistant', definition: 'Germs that are not killed by antibiotics' },
        { term: 'hand hygiene', definition: 'Washing or sanitizing hands to prevent spread of germs' },
      ],
      analogies: [
        'A catheter is like a door into your body - if germs get on it, they can walk right in.',
        'Hand washing is like the security guard at the hospital entrance - it stops germs from getting through.',
      ],
      examples: [
        'A patient gets a urinary tract infection from a catheter that was left in too long.',
        'Someone catches C. diff after taking antibiotics for another infection.',
      ],
    },
    2: {
      level: 2,
      summary: 'Healthcare-associated infections are infections occurring in patients during healthcare delivery, including central line-associated bloodstream infections, catheter-associated UTIs, ventilator-associated pneumonia, and surgical site infections.',
      explanation: `HAIs affect millions of patients yearly, causing significant morbidity, mortality, and healthcare costs. Prevention is a core quality measure.

**Major HAI Categories:**

**1. Central Line-Associated Bloodstream Infection (CLABSI):**
- Occurs with central venous catheters
- Common organisms: Coagulase-negative staph, S. aureus, Candida, Enterococcus
- Diagnosis: Positive blood cultures with no other source
- Prevention: Sterile insertion, hand hygiene, daily necessity assessment

**2. Catheter-Associated Urinary Tract Infection (CAUTI):**
- Most common HAI
- Due to indwelling urinary catheters
- Common organisms: E. coli, Klebsiella, Enterococcus, Candida
- Prevention: Avoid unnecessary catheters, remove early

**3. Ventilator-Associated Pneumonia (VAP):**
- Occurs >48 hours after intubation
- Common organisms: Pseudomonas, S. aureus, Acinetobacter, Enterobacterales
- High mortality (20-50%)
- Prevention: Head of bed elevation, oral care, sedation vacation

**4. Surgical Site Infection (SSI):**
- Occurs within 30 days of surgery (or 90 days for implants)
- Classification: Superficial, deep incisional, organ/space
- Prevention: Surgical antibiotic prophylaxis, normothermia, glucose control

**5. Clostridioides difficile Infection (CDI):**
- Antibiotic-associated diarrhea
- Toxin-producing bacteria
- Treatment: Vancomycin oral or fidaxomicin
- Prevention: Antibiotic stewardship, contact precautions

**Risk Factors:**
- Prolonged hospitalization
- Invasive devices
- Immunosuppression
- Antibiotic exposure
- Advanced age
- Chronic diseases

**Prevention Bundles:**
Bundles are groups of evidence-based interventions performed together:
- Central line insertion bundle (maximal barrier precautions, chlorhexidine, etc.)
- CAUTI prevention bundle (assessment of need, aseptic insertion)
- VAP prevention bundle (oral care, HOB elevation, DVT prophylaxis)

**Surveillance:**
- Hospital infection control tracks HAI rates
- Reported to CDC NHSN (National Healthcare Safety Network)
- Public reporting incentivizes improvement`,
      keyTerms: [
        { term: 'CLABSI', definition: 'Central line-associated bloodstream infection: BSI attributable to central venous catheter' },
        { term: 'CAUTI', definition: 'Catheter-associated urinary tract infection: UTI in patient with urinary catheter' },
        { term: 'VAP', definition: 'Ventilator-associated pneumonia: pneumonia developing >48 hours after intubation' },
        { term: 'SSI', definition: 'Surgical site infection: infection occurring at or near surgical incision' },
        { term: 'prevention bundle', definition: 'Group of evidence-based practices implemented together to prevent HAIs' },
      ],
      analogies: [
        'A prevention bundle is like a multi-lock security system - each lock adds protection, but they work best together.',
        'Indwelling catheters are highways for bacteria - the longer they stay, the more traffic (germs) can travel.',
      ],
    },
    3: {
      level: 3,
      summary: 'HAI prevention integrates evidence-based bundles, antimicrobial stewardship, surveillance with standardized definitions, and infection control practices including isolation precautions for multidrug-resistant organisms.',
      explanation: `Comprehensive HAI management requires understanding of pathogenesis, evidence-based prevention, and healthcare systems.

**CLABSI Prevention (Central Line Bundle):**

*Insertion Bundle:*
- Hand hygiene
- Maximal barrier precautions (cap, mask, gown, sterile gloves, large drape)
- Chlorhexidine skin antisepsis (2% CHG)
- Optimal site selection (avoid femoral in adults)
- Daily review of line necessity

*Maintenance Bundle:*
- Hand hygiene before access
- Scrub the hub (15 seconds with alcohol)
- Aseptic technique for dressing changes
- Chlorhexidine-impregnated dressings
- Daily necessity assessment with prompt removal

**CAUTI Prevention:**

*Avoid Unnecessary Catheterization:*
- Appropriate indications only (acute urinary retention, perioperative, accurate I/O in critical illness)
- NOT for incontinence, nursing convenience, or routine monitoring

*Bundle Elements:*
- Aseptic insertion
- Maintain closed drainage system
- Keep bag below bladder level
- Daily assessment for removal
- Consider nurse-driven removal protocols

**VAP Prevention Bundle:**

*Core Elements:*
- Head of bed elevation (30-45 degrees)
- Daily sedation vacation and readiness-to-wean assessment
- DVT prophylaxis
- Stress ulcer prophylaxis (controversial)
- Oral care with chlorhexidine

*Additional Measures:*
- Subglottic secretion drainage (specialized ETT)
- Avoid gastric overdistension
- Early enteral nutrition
- Prone positioning (ARDS)

**SSI Prevention:**

*Preoperative:*
- Nasal decolonization (mupirocin for S. aureus carriers)
- CHG bathing
- Appropriate hair removal (clippers, not razors)
- Antibiotic prophylaxis (within 60 minutes of incision)

*Intraoperative:*
- Maintain normothermia (>36°C)
- Glucose control (<180 mg/dL)
- Adequate oxygenation
- Antimicrobial re-dosing for long cases

*Postoperative:*
- Incision care
- Avoid prolonged prophylaxis (usually ≤24 hours)
- Early mobilization

**Multidrug-Resistant Organisms (MDROs):**

*Key MDROs:*
- MRSA (methicillin-resistant S. aureus)
- VRE (vancomycin-resistant Enterococcus)
- ESBL-producing Enterobacterales
- CRE (carbapenem-resistant Enterobacterales)
- C. difficile (spore-forming)

*Isolation Precautions:*
- Contact precautions: Gown and gloves
- Droplet: Surgical mask
- Airborne: N95 respirator, negative pressure room (TB, measles, varicella)

**Surveillance and Reporting:**

*CDC NHSN Definitions:*
- Standardized criteria for HAI identification
- Allows benchmarking across facilities
- Public reporting in many states

*Outcome Metrics:*
- Standardized infection ratio (SIR): Observed/expected
- Goal: SIR <1.0`,
      keyTerms: [
        { term: 'maximal barrier precautions', definition: 'Full sterile technique for central line insertion including cap, mask, gown, sterile gloves, and large drape' },
        { term: 'scrub the hub', definition: 'Disinfecting catheter connection ports for 15 seconds before access' },
        { term: 'nurse-driven protocol', definition: 'Evidence-based guidelines allowing nurses to remove catheters without physician order' },
        { term: 'standardized infection ratio', definition: 'Ratio of observed to expected HAIs, used for benchmarking' },
        { term: 'contact precautions', definition: 'Isolation requiring gown and gloves for MDROs and C. diff' },
      ],
      clinicalNotes: 'Daily necessity assessment is the most impactful CLABSI and CAUTI prevention measure. "Line rounds" with explicit justification for every catheter day dramatically reduce infections.',
    },
    4: {
      level: 4,
      summary: 'Advanced HAI management addresses biofilm-associated infections, emerging resistance mechanisms, environmental decontamination technologies, and systems-based approaches to prevention including human factors engineering.',
      explanation: `Contemporary HAI prevention integrates microbiology, technology, and implementation science.

**Biofilm Biology:**

*Formation:*
1. Attachment: Planktonic bacteria adhere to surface
2. Microcolony: Multiply and produce extracellular matrix
3. Maturation: Complex 3D structure with channels
4. Dispersal: Cells released to colonize new sites

*Clinical Implications:*
- 1000x increased antibiotic resistance in biofilm
- Host immune evasion
- Chronic/recurrent infections
- Device removal often required

*Prevention Strategies:*
- Antimicrobial-impregnated catheters (minocycline/rifampin, chlorhexidine/silver sulfadiazine)
- Antibiotic lock solutions
- Taurolidine locks
- Ethanol locks

**Carbapenem-Resistant Enterobacterales (CRE):**

*Mechanisms:*
- Carbapenemases: KPC (endemic US), NDM, OXA-48
- Porin loss + AmpC or ESBL

*Detection:*
- Modified carbapenem inactivation method (mCIM)
- Molecular testing (PCR for resistance genes)

*Treatment:*
- Ceftazidime-avibactam (KPC, OXA-48)
- Meropenem-vaborbactam (KPC)
- Cefiderocol (multiple mechanisms)
- Combination therapy for serious infections

*Infection Control:*
- Contact precautions
- Active surveillance (rectal swabs)
- Cohorting of colonized patients
- Enhanced environmental cleaning

**Environmental Decontamination:**

*UV-C Light:*
- Whole-room disinfection
- Effective against C. diff spores
- Adjunct to manual cleaning
- Reduced transmission in studies

*Hydrogen Peroxide Vapor:*
- Aerosolized H2O2
- Sporicidal
- Terminal cleaning after MDRO patients
- Requires room evacuation

*Copper Surfaces:*
- Antimicrobial properties
- Continuously active
- Reduces bioburden on high-touch surfaces

**Clostridioides difficile Management:**

*Prevention:*
- Antibiotic stewardship (reduce fluoroquinolones, clindamycin)
- Contact precautions with gowns/gloves
- Hand washing (alcohol doesn't kill spores)
- Environmental cleaning with sporicidal agents

*Treatment:*
- Stop inciting antibiotics if possible
- Mild-moderate: Vancomycin 125 mg QID or fidaxomicin
- Severe: Vancomycin oral, consider rectal if ileus
- Fulminant: Vancomycin + IV metronidazole, surgical consult
- Recurrent: Fidaxomicin, bezlotoxumab, FMT

**Human Factors Engineering:**

*Applying to HAI Prevention:*
- Checklist implementation (with empowerment to stop if violated)
- Standardized kit placement
- Design out error (forcing functions)
- Feedback loops

*Implementation Science:*
- Champion identification
- Culture change
- Leadership engagement
- Audit and feedback
- Sustainability planning

**Antimicrobial Stewardship Integration:**

*Impact on HAIs:*
- Reduced C. diff
- Less selection for MDROs
- Preserved antibiotic efficacy

*Stewardship + IC Collaboration:*
- Antibiotic days contribute to CDI risk
- Duration optimization
- Appropriate empiric therapy then de-escalation`,
      keyTerms: [
        { term: 'biofilm', definition: 'Structured bacterial community in extracellular matrix, highly resistant to antibiotics' },
        { term: 'carbapenemase', definition: 'Enzyme that hydrolyzes carbapenem antibiotics, conferring resistance' },
        { term: 'UV-C disinfection', definition: 'Ultraviolet light for whole-room environmental decontamination' },
        { term: 'bezlotoxumab', definition: 'Monoclonal antibody against C. diff toxin B, prevents recurrence' },
        { term: 'human factors engineering', definition: 'Designing systems to account for human error and improve safety' },
      ],
      clinicalNotes: 'CRE colonization on admission screening identifies patients needing contact precautions and empiric carbapenem-sparing regimens. Antibiotic-impregnated catheters reduce CLABSI by ~50% in high-risk populations.',
    },
    5: {
      level: 5,
      summary: 'Frontier HAI research encompasses microbiome-based interventions, precision infection prevention, artificial intelligence for surveillance, and health economics informing prevention investment.',
      explanation: `State-of-the-art HAI prevention integrates emerging science with healthcare systems optimization.

**Microbiome-Based Interventions:**

*Colonization Resistance:*
- Intact microbiome prevents pathogen establishment
- Antibiotics disrupt this protection
- Restoration approaches emerging

*Fecal Microbiota Transplant (FMT):*
- Established for recurrent C. diff
- 80-90% success rate
- SER-109 (oral spore-based): FDA approved
- Future: Defined consortia, next-gen products

*Probiotics/Live Biotherapeutics:*
- Mixed evidence for HAI prevention
- More targeted products in development
- Regulatory pathway evolving

**Precision Infection Prevention:**

*Genomic Surveillance:*
- Whole-genome sequencing (WGS) of isolates
- Identify transmission clusters
- Faster than traditional epidemiology
- Real-time outbreak detection

*Targeted Decolonization:*
- Universal vs. targeted approaches
- MRSA: Mupirocin + CHG bathing
- Identify high-risk patients for interventions

**Artificial Intelligence in HAI:**

*Surveillance Automation:*
- NLP algorithms scan charts for HAI
- Reduce manual chart review burden
- Improve sensitivity and consistency

*Predictive Analytics:*
- Machine learning predicts HAI risk
- Identify patients for enhanced prevention
- Resource allocation optimization

*Challenges:*
- Algorithm validation across settings
- Bias in training data
- Integration with clinical workflow

**Device Innovation:**

*Anti-Biofilm Technologies:*
- Surface modifications (nanostructured, hydrophobic)
- Nitric oxide-releasing catheters
- Bacteriophage-coated devices

*Smart Catheters:*
- Sensors detect early infection
- Alert before clinical symptoms
- Personalized removal timing

**Health Economics:**

*Cost of HAIs:*
- CLABSI: $45,000+ per episode
- VAP: $40,000+
- SSI: $20,000-$90,000 depending on type
- CDI: $15,000-$30,000

*Return on Investment:*
- Prevention programs are cost-effective
- HAI reduction → shorter LOS, less antibiotic use
- Quality improvement pays for itself

*Value-Based Purchasing:*
- CMS HAI reduction program
- Penalties for poor performance
- Incentive for improvement

**Global HAI Challenges:**

*LMIC Settings:*
- Higher HAI rates
- Limited resources for prevention
- Emerging resistance (NDM, MCR-1)
- Adapted guidelines needed

*Antimicrobial Resistance:*
- HAIs drive resistance development
- ICU as amplifier of resistance
- International spread of clones

**Emerging Infections:**

*COVID-19 Lessons:*
- Surge in HAIs during pandemic
- Reduced elective surgery SSI surveillance
- Increased CLABSI with proning, extended ICU stays
- Preparedness for next pandemic

*Candida auris:*
- Highly transmissible
- Environmental persistence
- Multidrug resistance common
- Enhanced infection control required`,
      keyTerms: [
        { term: 'whole-genome sequencing', definition: 'Complete DNA sequencing of pathogen isolates to identify transmission chains' },
        { term: 'SER-109', definition: 'FDA-approved oral spore-based microbiome therapeutic for recurrent C. diff' },
        { term: 'Candida auris', definition: 'Emerging multidrug-resistant fungal pathogen with high transmissibility' },
        { term: 'value-based purchasing', definition: 'Payment model linking reimbursement to quality metrics including HAI rates' },
        { term: 'NLP surveillance', definition: 'Natural language processing of medical records for automated HAI detection' },
      ],
      clinicalNotes: `**Clinical Pearls:**
1. Daily assessment of device necessity is the single most impactful HAI prevention measure
2. Antibiotic stewardship reduces C. diff more effectively than contact precautions alone
3. CHG bathing in ICU reduces MRSA BSI; universal decolonization debated
4. UV-C and H2O2 vapor are adjuncts, not replacements, for manual cleaning
5. WGS can resolve outbreaks faster than traditional epi - advocate for its use
6. Candida auris: Requires enhanced contact precautions and specialized disinfection
7. FMT for recurrent C. diff: 85% success; SER-109 is FDA-approved option`,
    },
  },

  media: [
    {
      id: 'hai-types',
      type: 'diagram',
      filename: 'hai-types.svg',
      title: 'Types of Healthcare-Associated Infections',
      description: 'Overview of CLABSI, CAUTI, VAP, SSI, and CDI',
    },
    {
      id: 'central-line-bundle',
      type: 'diagram',
      filename: 'central-line-bundle.svg',
      title: 'Central Line Insertion Bundle',
      description: 'Elements of CLABSI prevention bundle',
    },
  ],

  citations: [
    {
      id: 'cdc-hai-prevention',
      type: 'website',
      title: 'Healthcare-Associated Infections',
      source: 'CDC',
      url: 'https://www.cdc.gov/hai/',
    },
    {
      id: 'shea-guidelines',
      type: 'article',
      title: 'SHEA/IDSA Practice Recommendations',
      source: 'Infection Control & Hospital Epidemiology',
    },
  ],

  crossReferences: [
    { targetId: 'infectious-disease-antibiotic-stewardship', targetType: 'topic', relationship: 'related', label: 'Antibiotic Stewardship' },
    { targetId: 'infectious-disease-bacterial-overview', targetType: 'topic', relationship: 'related', label: 'Bacterial Infections' },
    { targetId: 'infectious-disease-sepsis', targetType: 'condition', relationship: 'related', label: 'Sepsis' },
  ],

  tags: {
    systems: ['immune'],
    topics: ['infectious-disease', 'infection-control', 'quality-improvement'],
    keywords: ['HAI', 'CLABSI', 'CAUTI', 'VAP', 'SSI', 'MRSA', 'C. diff'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default healthcareAssociatedInfections;
