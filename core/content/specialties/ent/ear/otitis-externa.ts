/**
 * Otitis Externa - Comprehensive Educational Content
 *
 * Covers external ear canal infections including acute otitis externa
 * (swimmer's ear), chronic otitis externa, and malignant otitis externa.
 */

import { EducationalContent } from '../../../types';

export const otitisExterna: EducationalContent = {
  id: 'ent-otitis-externa',
  type: 'condition',
  name: 'Otitis Externa',
  alternateNames: ["Swimmer's Ear", 'External Ear Infection', 'AOE'],
  hpoId: 'HP:0000389',

  levels: {
    1: {
      level: 1,
      summary: "Swimmer's ear is an infection in the ear canal (the tube leading to your eardrum) that causes pain, itching, and sometimes drainage.",
      explanation: `Have you ever had your ear hurt after swimming? That might have been swimmer's ear!

**What Is Swimmer's Ear?**

Swimmer's ear is an infection in the ear canal - the tube that goes from the outside of your ear to your eardrum. It's different from a regular ear infection, which happens behind the eardrum.

**Why Is It Called "Swimmer's Ear"?**

Water that gets trapped in your ear canal after swimming creates a warm, wet environment where germs (bacteria) love to grow. But you don't have to swim to get it - anything that irritates or damages the ear canal can cause swimmer's ear.

**What Causes Swimmer's Ear?**

- Swimming or showering (water in the ear)
- Putting things in your ear (cotton swabs, fingers, earbuds)
- Scratching inside your ear
- Earwax buildup or trying to remove earwax
- Skin conditions like eczema

**Symptoms:**

- Ear pain that gets worse when you touch your ear or pull on it
- Itching inside the ear
- Feeling like the ear is blocked or full
- Redness and swelling
- Drainage from the ear (may be clear, yellow, or smelly)
- Temporary hearing loss (from swelling or drainage blocking the canal)

**Treatment:**

- **Ear drops**: Special drops that kill germs and reduce swelling
- **Keep the ear dry**: No swimming until it heals
- **Pain medicine**: Like ibuprofen to help with pain
- **Wick**: Sometimes the doctor puts a small sponge in the ear to help drops get deep inside

**Prevention:**

- Dry your ears well after swimming or bathing
- Don't put cotton swabs or other objects in your ears
- Use earplugs or a swim cap when swimming
- Tilt your head to let water drain out after swimming
- Some people use special drops after swimming to help dry the ear`,
      keyTerms: [
        { term: "swimmer's ear", definition: 'An infection in the ear canal, the tube that goes from outside your ear to your eardrum' },
        { term: 'ear canal', definition: 'The tube that leads from the outside of your ear to your eardrum' },
        { term: 'ear drops', definition: 'Medicine in liquid form that goes directly into the ear' },
        { term: 'drainage', definition: 'Fluid that leaks out of the ear during an infection' },
      ],
      analogies: [
        'The ear canal is like a tiny tunnel that needs to stay dry. When it gets too wet, it is like leaving a wet towel in a bag - germs start to grow.',
        'Earwax is like a natural shield that protects your ear canal - removing too much can leave your ear unprotected.',
      ],
      examples: [
        'A child who swims every day during summer vacation might develop swimmer\'s ear if water keeps getting trapped in the ear canal.',
        'Someone who uses cotton swabs to clean their ears might scratch the ear canal, allowing germs to cause an infection.',
      ],
    },
    2: {
      level: 2,
      summary: 'Otitis externa is inflammation of the external auditory canal, most commonly bacterial, presenting with otalgia, pruritus, and otorrhea, treated primarily with topical antimicrobial therapy.',
      explanation: `## Definition and Classification

**Otitis Externa (OE)**: Inflammation of the external auditory canal (EAC), with or without infection of the pinna or tympanic membrane.

### Types of Otitis Externa

| Type | Description |
|------|-------------|
| Acute diffuse | Most common; bacterial infection of entire canal |
| Acute localized | Furuncle (boil) in hair-bearing portion |
| Chronic | Persists >3 months; often eczematous |
| Necrotizing (malignant) | Severe infection spreading to bone; elderly/diabetic |
| Fungal (otomycosis) | Candida or Aspergillus; often after antibiotic use |

## Epidemiology

- Lifetime prevalence: ~10% of population
- Peak incidence: Ages 7-12 and warm summer months
- Risk increases with swimming, humidity, trauma

## Causes and Risk Factors

### Common Causes
**Bacterial (90%+):**
- Pseudomonas aeruginosa (most common)
- Staphylococcus aureus
- Often polymicrobial

**Fungal (10%):**
- Aspergillus species (black/gray debris)
- Candida species (white debris)

### Risk Factors
- Water exposure (swimming, bathing)
- Trauma (cotton swabs, hearing aids, earbuds)
- Skin conditions (eczema, psoriasis, seborrhea)
- Allergies (hair products, earrings)
- Diabetes mellitus
- Immunocompromise
- Narrow ear canals
- Excessive cerumen or cerumen removal

## Pathophysiology

Normal EAC Protection:
1. **Cerumen (earwax)**: Creates acidic environment (pH 6.1), repels water
2. **Intact skin barrier**: Prevents bacterial invasion
3. **Self-cleaning**: Migration of epithelium outward

Breakdown of Defenses:
1. Water exposure → maceration of skin
2. Trauma → breaks in epithelium
3. Loss of cerumen → pH changes, loss of protection
4. Bacterial colonization → inflammation → edema and discharge

## Clinical Presentation

### Symptoms
- Otalgia (ear pain) - hallmark symptom
- Pruritus (itching)
- Aural fullness (blocked sensation)
- Otorrhea (discharge)
- Hearing loss (conductive, from swelling/debris)

### Physical Examination Signs

**Tragal Tenderness:**
- Pain when pushing on tragus
- Classic finding that distinguishes OE from otitis media

**Pinna Tenderness:**
- Pain when pulling on auricle
- Another distinguishing feature

**Otoscopy:**
- Erythema of canal skin
- Edema (may narrow or occlude canal)
- Debris/discharge in canal
- Intact tympanic membrane (usually)

### Severity Classification

| Severity | Features |
|----------|----------|
| Mild | Pruritus, mild discomfort, minimal edema |
| Moderate | Partial canal occlusion, moderate pain |
| Severe | Complete occlusion, intense pain, fever, adenopathy |

## Treatment

### Topical Therapy (First-Line)

**Ear Drop Options:**
- Acetic acid (restores pH)
- Antibiotic drops (ciprofloxacin, ofloxacin, neomycin/polymyxin)
- Combination drops (antibiotic + steroid)

**Application:**
- 3-4 drops, 3-4 times daily for 7-10 days
- Patient lies on side with affected ear up
- Gentle tragal pumping helps drops penetrate

### Aural Toilet
- Gentle cleaning/debridement of canal
- Removes debris allowing drops to penetrate
- May require suction by clinician

### Ear Wick
- For significantly swollen canals
- Expandable wick placed in canal
- Drops applied to wick
- Removed in 2-3 days

### Pain Management
- Analgesics (acetaminophen, ibuprofen)
- Warm compress externally
- Drops with anesthetic (rarely used)

### When to Consider Oral Antibiotics
- Extension beyond EAC
- Concurrent otitis media
- Immunocompromise
- Failed topical therapy

## Prevention

- Keep ears dry (dry with towel, hair dryer on low)
- Use earplugs or swim molds
- Avoid ear canal trauma (no cotton swabs)
- Acidifying drops after swimming (dilute vinegar or commercial products)
- Treat underlying skin conditions`,
      keyTerms: [
        { term: 'tragal tenderness', definition: 'Pain when pressing on the tragus (small cartilage flap in front of ear canal); classic sign of otitis externa' },
        { term: 'cerumen', definition: 'Earwax; protective substance that creates acidic environment and repels water' },
        { term: 'aural toilet', definition: 'Cleaning and debridement of the ear canal to remove debris' },
        { term: 'ear wick', definition: 'Expandable sponge placed in swollen ear canal to deliver medication' },
        { term: 'otomycosis', definition: 'Fungal infection of the ear canal, often caused by Aspergillus or Candida' },
        { term: 'furuncle', definition: 'A boil; localized infection in hair follicle', pronunciation: 'FYOOR-ung-kul' },
      ],
      analogies: [
        'Earwax is like a natural raincoat for your ear canal - it keeps water out and maintains the right environment.',
        'An ear wick is like a sponge that soaks up medicine and holds it against the infected area.',
      ],
    },
    3: {
      level: 3,
      summary: 'Otitis externa encompasses a spectrum from uncomplicated acute diffuse infection to life-threatening necrotizing disease, requiring systematic assessment of risk factors, severity, and appropriate selection of topical versus systemic therapy.',
      explanation: `## Microbiology in Depth

### Bacterial Pathogens

**Pseudomonas aeruginosa (60-70%):**
- Gram-negative rod, obligate aerobe
- Thrives in moist environment
- Produces biofilm, exotoxins
- Intrinsically resistant to many antibiotics
- Associated with water exposure

**Staphylococcus aureus (15-30%):**
- Gram-positive cocci
- Can cause localized furuncle
- MRSA increasingly reported
- May require systemic therapy if extensive

**Others:**
- Streptococcus species
- Enterobacteriaceae
- Anaerobes (chronic OE)

### Fungal Pathogens

**Aspergillus niger:**
- Most common fungal cause
- Black spores visible ("wet newspaper" appearance)
- Typically follows bacterial OE treatment

**Aspergillus fumigatus:**
- Gray-white appearance
- Can be invasive in immunocompromised

**Candida albicans:**
- White, cheesy debris
- Associated with hearing aid use

## Differential Diagnosis

### Must Distinguish From:

| Condition | Distinguishing Features |
|-----------|------------------------|
| Acute otitis media | No tragal/pinna tenderness; bulging TM |
| Contact dermatitis | Itching predominant; involves pinna; history of new products |
| Herpes zoster oticus | Vesicles on pinna/canal; facial paralysis |
| Furunculosis | Localized painful nodule in lateral canal |
| Foreign body | Often children; visible on otoscopy |
| Carcinoma of EAC | Chronic, bloody drainage; granulation tissue |
| Necrotizing OE | Severe pain, granulation tissue at bone-cartilage junction |

## Clinical Subtypes

### Acute Localized Otitis Externa (Furuncle)

**Characteristics:**
- Infection of hair follicle (lateral 1/3 of canal)
- Usually S. aureus
- Painful localized nodule
- May point and drain spontaneously

**Treatment:**
- Warm compresses
- Incision and drainage if fluctuant
- Oral antibiotics if cellulitis extends (antistaphylococcal)

### Chronic Otitis Externa

**Characteristics:**
- Duration >3 months
- Often less painful than acute
- Pruritus predominant
- Thickened skin, narrowed canal
- Associated with eczema, psoriasis

**Treatment:**
- Address underlying dermatitis
- Topical steroid drops
- Intermittent topical antibiotics for flares
- Avoid precipitants

### Otomycosis

**Clinical Features:**
- Often follows antibiotic treatment
- Intense pruritus
- Characteristic fungal debris
- Aspergillus: Black/gray spores, "wet newspaper"
- Candida: White, cottage cheese-like

**Treatment:**
- Thorough debridement essential
- Antifungal drops (clotrimazole, miconazole)
- Keep canal dry
- May require repeated debridement
- Duration: 3+ weeks often needed

## Evidence-Based Treatment

### AAO-HNSF Clinical Practice Guideline (2014)

**Strong Recommendations:**
1. Assess for factors modifying treatment (perforated TM, tubes, immunocompromise)
2. Use topical preparations as initial therapy for uncomplicated AOE
3. Do NOT prescribe systemic antibiotics as initial therapy (unless extension beyond canal)

**Recommendations:**
- Distinguish OE from other causes of otalgia
- Perform aural toilet (if debris present and equipment/skill available)
- Prescribe topical drops applied 3-4 times daily × 7 days
- Instruct on proper drop administration

### Topical Agent Selection

**Acetic Acid (2%):**
- Restores acidic pH
- Mild antiseptic
- Inexpensive
- May cause stinging

**Antibiotic-Steroid Combinations:**
- Most commonly prescribed
- Ciprofloxacin/dexamethasone (Ciprodex)
- Ciprofloxacin/fluocinolone (Otovel)
- Ofloxacin (no steroid)

**Aminoglycoside-Containing:**
- Neomycin/polymyxin B/hydrocortisone
- Effective but contact sensitization risk (neomycin)
- Avoid if TM perforation (ototoxicity potential)

### Treatment Duration
- Standard: 7-10 days
- Continue 3 days after symptom resolution
- Fungal: 3-4 weeks often required

## Complications

### Local Extension
- Perichondritis of pinna
- Cellulitis of periauricular skin
- Auricular hematoma (secondary trauma)

### Necrotizing (Malignant) Otitis Externa

**Definition:** Invasive infection extending beyond ear canal to temporal bone and skull base

**Risk Factors:**
- Diabetes mellitus (>90% of cases)
- Advanced age
- Immunocompromise (HIV, chemotherapy)

**Clinical Features:**
- Severe, unrelenting otalgia (out of proportion to exam)
- Granulation tissue at bone-cartilage junction (pathognomonic)
- Facial nerve palsy (30-50%)
- Other cranial neuropathies (IX, X, XI, XII)
- May progress to meningitis, brain abscess

**Diagnosis:**
- CT temporal bone: Bone erosion
- MRI: Soft tissue extent
- Technetium-99m bone scan: Osteomyelitis detection
- Gallium-67 scan: Activity/response monitoring

**Treatment:**
- Prolonged IV antibiotics (6+ weeks): Antipseudomonal
- Surgical debridement of necrotic tissue
- Hyperbaric oxygen (adjunctive)
- Mortality: 10-20% despite treatment`,
      keyTerms: [
        { term: 'necrotizing otitis externa', definition: 'Invasive infection spreading from ear canal to temporal bone; seen in diabetics/immunocompromised; also called malignant OE' },
        { term: 'bone-cartilage junction', definition: 'Area where bony and cartilaginous portions of ear canal meet; site of granulation tissue in necrotizing OE' },
        { term: 'contact sensitization', definition: 'Development of allergic reaction to medication (e.g., neomycin) with repeated exposure' },
        { term: 'perichondritis', definition: 'Infection of the tissue surrounding ear cartilage; can cause auricular deformity' },
        { term: 'gallium-67 scan', definition: 'Nuclear medicine study using gallium-67 to detect infection/inflammation; useful for monitoring necrotizing OE treatment' },
      ],
      clinicalNotes: 'Distinguish from otitis media: OE has tragal/pinna tenderness; OM does not. Granulation tissue at bone-cartilage junction in a diabetic patient should raise concern for necrotizing OE - obtain imaging and start empiric antipseudomonal therapy urgently.',
    },
    4: {
      level: 4,
      summary: 'Advanced management of otitis externa requires understanding of biofilm pathogenesis, treatment of refractory and complicated disease, early recognition of necrotizing OE, and management of special populations including hearing aid users and immunocompromised patients.',
      explanation: `## Advanced Pathophysiology

### Biofilm Formation in OE

**Pseudomonas Biofilm:**
- Attached bacterial communities in extracellular matrix
- Alginate and exopolysaccharides form protective layer
- 10-1000x increased antibiotic resistance
- Explains recurrent/chronic OE
- Present on hearing aids, ear molds

**Clinical Implications:**
- Standard antibiotics may not penetrate biofilm
- Mechanical debridement essential
- Prolonged treatment often required
- Biofilm disruption strategies being researched

### Immune Response

**Local Immunity:**
- Innate: Cerumen with lysozyme, defensins
- Pattern recognition: TLRs on keratinocytes
- Cytokine cascade: IL-1, TNF-α, IL-6

**Immunocompromise Impact:**
- Diabetes: Impaired neutrophil function, microangiopathy
- HIV: T-cell deficiency, opportunistic fungi
- Chemotherapy: Neutropenia, mucosal damage

## Complicated Otitis Externa

### Definition of Complicated Cases

- Extension beyond EAC (periauricular cellulitis)
- Concurrent perforated TM or tympanostomy tube
- Immunocompromised patient
- Failed initial topical therapy
- Necrotizing otitis externa

### Treatment Modifications

**Perforated TM/Tympanostomy Tubes:**
- Avoid potentially ototoxic drops
- Safe: Fluoroquinolones (ciprofloxacin, ofloxacin)
- Avoid: Aminoglycosides (neomycin), acidic preparations

**Periauricular Cellulitis:**
- Oral antibiotics: Coverage for Pseudomonas and Staph
- Options: Fluoroquinolone + antistaphylococcal coverage
- Consider MRSA coverage (TMP-SMX, doxycycline) if risk factors

**Immunocompromised:**
- Lower threshold for systemic antibiotics
- Consider fungal etiology
- Close follow-up
- Lower threshold for imaging

## Necrotizing Otitis Externa: Comprehensive Management

### Early Recognition

**Clinical Triad (Classic):**
1. Severe, persistent otalgia in diabetic/elderly
2. Granulation tissue at bone-cartilage junction
3. Failed response to standard OE treatment

**Cranial Neuropathies:**
- VII (facial): Most common (30-50%)
- IX-XII: Skull base progression
- VI: Petrous apex involvement

### Staging

| Stage | Features |
|-------|----------|
| Stage I | Soft tissue involvement only |
| Stage II | Bone involvement (CT changes) |
| Stage III | Cranial nerve involvement |
| Stage IV | Intracranial extension |

### Imaging Protocol

**CT Temporal Bone:**
- First-line for bone evaluation
- Findings: Soft tissue in EAC, bone erosion, skull base involvement
- May be normal early in disease

**MRI:**
- Superior soft tissue evaluation
- Dural enhancement, intracranial extension
- Marrow signal changes

**Nuclear Medicine:**
- Technetium-99m bone scan: Sensitive for osteomyelitis
- Gallium-67 scan: Reflects disease activity
- Combined use: Assess response to treatment
- Gallium normalizes before technetium

### Antibiotic Therapy

**Initial Empiric Therapy:**
- IV antipseudomonal coverage
- Options:
  - Ciprofloxacin IV/PO (if susceptible)
  - Piperacillin-tazobactam
  - Ceftazidime or cefepime
  - Meropenem (if resistant)

**Duration:**
- Minimum 6-8 weeks
- Until clinical resolution AND normalized gallium scan
- May require 3-6 months

**Oral Step-Down:**
- High-dose ciprofloxacin (750 mg BID)
- Only if organism susceptible and clinical improvement

### Surgical Role

**Indications:**
- Abscess drainage
- Removal of necrotic bone/cartilage
- Biopsy (exclude carcinoma)
- Facial nerve decompression (controversial)

**Procedures:**
- Local debridement
- Mastoidectomy (if mastoid involved)
- Extensive debridement rarely needed with modern antibiotics

### Hyperbaric Oxygen Therapy

**Mechanism:**
- Enhances neutrophil killing
- Promotes angiogenesis
- Inhibits anaerobic bacteria
- Potentiates antibiotics

**Evidence:**
- Limited RCT data
- Often used as adjunct in refractory cases
- Typical: 20-30 sessions

## Special Populations

### Hearing Aid Users

**Increased OE Risk:**
- Occlusion increases humidity
- Trauma from insertion
- Biofilm on mold surfaces

**Prevention:**
- Proper fit
- Regular cleaning of molds
- Remove at night
- Treat promptly

**Management:**
- Continue hearing aid use if possible
- May need wick to deliver drops
- Consider mold modification

### Swimmers

**Prevention Protocol:**
- Acidifying drops post-swim (acetic acid, isopropyl alcohol)
- Earplugs (custom fit preferred)
- Dry ears thoroughly

**During Treatment:**
- No swimming until resolved (typically 7-10 days)
- No water in ear

### Immunocompromised Patients

**HIV/AIDS:**
- Increased fungal OE
- May have unusual pathogens
- Lower threshold for culture
- Longer treatment courses

**Chemotherapy/Transplant:**
- Neutropenic precautions
- Avoid water exposure
- Early systemic therapy if concern for spread

## Refractory OE Algorithm

1. Verify diagnosis (exclude other conditions)
2. Ensure medication compliance and proper technique
3. Perform thorough aural toilet
4. Consider wick if canal edematous
5. Culture discharge
6. Exclude fungal infection (examine debris carefully)
7. Consider contact dermatitis (neomycin sensitivity)
8. Evaluate for necrotizing OE if diabetic/immunocompromised
9. Extended treatment course
10. Address underlying factors (dermatitis, diabetes control)`,
      keyTerms: [
        { term: 'bone-cartilage junction granulation', definition: 'Characteristic finding in necrotizing OE where granulation tissue appears at the transition between bony and cartilaginous canal' },
        { term: 'antipseudomonal', definition: 'Antibiotics with activity against Pseudomonas aeruginosa, required for necrotizing OE' },
        { term: 'gallium scan normalization', definition: 'Return of gallium-67 scan to normal, indicating resolution of active infection; used to guide treatment duration' },
        { term: 'hyperbaric oxygen therapy', definition: 'Treatment with 100% oxygen at elevated pressure; adjunctive therapy for necrotizing OE' },
        { term: 'ototoxic drops', definition: 'Ear drops that can damage inner ear structures; avoided when TM perforation present' },
      ],
      clinicalNotes: 'Any diabetic patient with severe ear pain unresponsive to standard OE treatment should be evaluated for necrotizing OE. Obtain CT temporal bone and start empiric antipseudomonal therapy while awaiting imaging. Gallium scan is useful for monitoring treatment response.',
    },
    5: {
      level: 5,
      summary: 'Expert management of otitis externa integrates understanding of antimicrobial resistance patterns, biofilm-targeted therapies, optimized imaging protocols for necrotizing disease, and evidence-based prevention strategies for high-risk populations.',
      explanation: `## Antimicrobial Resistance and Selection

### Pseudomonas Resistance Patterns

**Mechanisms:**
- Efflux pumps (MexAB-OprM, MexXY-OprM)
- AmpC beta-lactamase induction
- Porin mutations (OprD loss)
- Biofilm-mediated phenotypic resistance

**Clinical Implications:**
- Fluoroquinolone resistance increasing (5-15% regionally)
- Culture for complicated cases
- Combination therapy for resistant strains

### MRSA Considerations

**Risk Factors for MRSA OE:**
- Healthcare exposure
- Prior MRSA infection
- Antibiotic use
- Diabetes

**Treatment:**
- Topical: Mupirocin, dilute acetic acid
- Systemic: TMP-SMX, doxycycline, vancomycin (severe)

### Antifungal Resistance

**Azole Resistance:**
- Increasing in Aspergillus
- Consider voriconazole for refractory cases
- Topical amphotericin B compounded solution

## Advanced Diagnostics

### Microbiological Techniques

**Culture Optimization:**
- Transport in appropriate medium
- Specify fungal culture request
- Consider anaerobic culture (chronic OE)

**Molecular Methods:**
- PCR for pathogen identification
- 16S rRNA sequencing (research)
- May identify fastidious organisms

### Imaging Optimization

**CT Temporal Bone Protocol:**
- Thin-slice (0.6-1mm) axial images
- Coronal and sagittal reconstructions
- Bone and soft tissue algorithms

**MRI Protocol:**
- T1, T2, FLAIR sequences
- Fat-suppressed post-gadolinium T1
- DWI for abscess detection

**PET-CT:**
- Emerging for necrotizing OE monitoring
- FDG uptake correlates with activity
- May replace gallium scanning

### Histopathology

**Indications for Biopsy:**
- Exclude squamous cell carcinoma
- Granulation tissue unresponsive to therapy
- Atypical presentation

**Findings in Necrotizing OE:**
- Acute and chronic inflammation
- Vasculitis
- Bone necrosis
- No malignant cells (excludes carcinoma)

## Necrotizing OE: Current Evidence

### Outcome Predictors

**Poor Prognostic Factors:**
- Cranial nerve involvement
- Intracranial extension
- Multiple cranial neuropathies
- Delay in treatment initiation
- Poor diabetes control

**Mortality:**
- Overall: 10-20%
- With intracranial extension: >50%
- Improved with early diagnosis and prolonged treatment

### Treatment Duration Controversy

**Historical:**
- 6 weeks minimum IV antibiotics
- Prolonged courses based on case series

**Current Evidence:**
- Gallium-guided therapy may allow earlier cessation
- Some protocols use 4-week IV with oral step-down
- No RCT data on optimal duration

### Facial Nerve Management

**Natural History:**
- Often present at diagnosis or develops during treatment
- May progress despite therapy initially
- Recovery: 50-80% with treatment

**Surgical Decompression:**
- Controversial
- No RCT evidence
- Consider if no improvement with prolonged antibiotics
- Some advocate early decompression

## Novel Therapeutic Approaches

### Anti-Biofilm Strategies

**Physical Disruption:**
- Mechanical debridement remains cornerstone
- Pulsed irrigation under investigation

**Chemical/Enzymatic:**
- DNase to disrupt biofilm matrix
- Dispersin B
- N-acetylcysteine (mucolytic properties)

**Antimicrobial Adjuncts:**
- Bacteriophage therapy (preclinical)
- Antimicrobial peptides
- Photodynamic therapy

### Immunomodulation

**GM-CSF:**
- Granulocyte-macrophage colony stimulating factor
- Case reports in refractory necrotizing OE
- Enhances neutrophil function

**Interferon-gamma:**
- Used in chronic granulomatous disease
- Potential for refractory invasive infections

## Prevention Strategies

### Evidence-Based Prevention

**Swimming/Water Exposure:**
- Post-swim acidifying drops: 1:1 white vinegar:isopropyl alcohol
- Custom earplugs superior to generic
- Dry ears immediately after water exposure

**Hearing Aid Users:**
- Daily cleaning of molds
- Periodic professional cleaning
- Remove overnight
- Consider open-fit aids

### Population-Level Interventions

**Public Pools:**
- Adequate chlorination
- Shower before swimming
- Avoid swimming with ear infection

**Athletic Programs:**
- Education on ear care
- Access to drying agents
- Prompt treatment protocols

## Quality Metrics and Guidelines

### Appropriate Prescribing

**Measure:**
- Topical therapy as first-line for uncomplicated OE
- Avoid systemic antibiotics for uncomplicated cases

**AAO-HNSF Quality Statements:**
- Topical therapy initial treatment (strong)
- No systemic therapy without complicating factors (strong)

### Documentation Requirements

**Initial Visit:**
- Severity classification
- Presence/absence of complicating factors
- Treatment plan with duration
- Instructions on drop administration

**Follow-up:**
- Response assessment
- Treatment modification if needed
- Plan for prevention

## Medicolegal Considerations

### High-Risk Scenarios

**Necrotizing OE:**
- Delay in diagnosis common allegation
- Document assessment for warning signs
- Low threshold for imaging in diabetics

**Ototoxicity:**
- Document TM status before aminoglycoside drops
- Use non-ototoxic drops if perforation or tubes

**Chronic OE:**
- Evaluate for underlying conditions
- Consider biopsy to exclude malignancy
- Document patient education on prevention`,
      keyTerms: [
        { term: 'phenotypic resistance', definition: 'Antibiotic resistance due to bacterial growth state (e.g., biofilm) rather than genetic mutation' },
        { term: 'FDG PET-CT', definition: 'Imaging using fluorodeoxyglucose to detect metabolically active infection; emerging alternative to gallium scanning' },
        { term: 'antimicrobial peptides', definition: 'Host defense molecules with broad-spectrum antimicrobial activity; potential novel therapeutics' },
        { term: 'photodynamic therapy', definition: 'Use of photosensitizing agents activated by light to kill bacteria; under investigation for OE' },
        { term: 'gallium-guided therapy', definition: 'Using serial gallium-67 scans to determine when to stop antibiotics for necrotizing OE' },
      ],
      clinicalNotes: `Expert management considerations:

1. **Necrotizing OE diagnosis**: Any diabetic with severe otalgia and granulation tissue at bone-cartilage junction should be started on empiric antipseudomonal therapy pending imaging. Do not wait for imaging to initiate treatment.

2. **Culture**: Obtain culture in complicated cases, treatment failures, and necrotizing OE. Specify fungal culture if clinically suspected.

3. **Treatment duration**: For necrotizing OE, treat until clinical resolution AND normalized gallium (or PET-CT). This often requires 6-8+ weeks.

4. **Facial nerve**: Counsel that facial weakness may worsen initially despite appropriate treatment. Most recover with medical therapy alone.

5. **Prevention**: For recurrent OE in swimmers/hearing aid users, emphasize prophylactic drops and proper hygiene. Custom ear molds for swimmers.

6. **Malignancy exclusion**: Chronic granulation tissue unresponsive to therapy requires biopsy to exclude squamous cell carcinoma of the EAC.`,
    },
  },

  media: [
    {
      id: 'otitis-externa-otoscopy',
      type: 'image',
      filename: 'swollen-ear-canal-oe.jpg',
      title: 'Acute Otitis Externa',
      description: 'Otoscopic view showing edematous, erythematous ear canal',
    },
    {
      id: 'otomycosis-aspergillus',
      type: 'image',
      filename: 'aspergillus-otomycosis.jpg',
      title: 'Otomycosis',
      description: 'Fungal debris with Aspergillus spores',
    },
    {
      id: 'ear-wick-placement',
      type: 'diagram',
      filename: 'ear-wick-technique.svg',
      title: 'Ear Wick Placement',
      description: 'Proper technique for placing expandable wick',
    },
  ],

  citations: [
    {
      id: 'rosenfeld-2014',
      type: 'article',
      title: 'Clinical Practice Guideline: Acute Otitis Externa',
      authors: ['Rosenfeld, R.M.', 'et al.'],
      source: 'Otolaryngology-Head and Neck Surgery',
    },
    {
      id: 'carfrae-2008',
      type: 'article',
      title: 'Malignant Otitis Externa',
      authors: ['Carfrae, M.J.', 'Kesser, B.W.'],
      source: 'Otolaryngologic Clinics of North America',
    },
    {
      id: 'cummings-ent',
      type: 'textbook',
      title: 'Otitis Externa',
      source: 'Cummings Otolaryngology: Head and Neck Surgery',
      chapter: '138',
    },
  ],

  crossReferences: [
    { targetId: 'ent-ear-anatomy', targetType: 'structure', relationship: 'related', label: 'Ear Anatomy' },
    { targetId: 'ent-otitis-media', targetType: 'condition', relationship: 'sibling', label: 'Otitis Media' },
    { targetId: 'endo-diabetes', targetType: 'condition', relationship: 'related', label: 'Diabetes Mellitus' },
    { targetId: 'id-pseudomonas', targetType: 'topic', relationship: 'related', label: 'Pseudomonas Infections' },
  ],

  tags: {
    systems: ['auditory', 'integumentary'],
    topics: ['infection', 'dermatology', 'emergency'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['surgery', 'family-medicine', 'emergency-medicine'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default otitisExterna;
