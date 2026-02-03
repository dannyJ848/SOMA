/**
 * Sinusitis - Comprehensive Educational Content
 *
 * Covers acute bacterial rhinosinusitis (ABRS), chronic rhinosinusitis (CRS),
 * viral vs bacterial causes, diagnosis, and medical and surgical treatment.
 */

import { EducationalContent } from '../../types';

export const sinusitis: EducationalContent = {
  id: 'condition-sinusitis',
  type: 'condition',
  name: 'Sinusitis',
  alternateNames: ['Rhinosinusitis', 'Sinus Infection', 'Acute Rhinosinusitis', 'Chronic Rhinosinusitis', 'ABRS', 'CRS'],
  hpoId: 'HP:0011109',

  levels: {
    1: {
      level: 1,
      summary: 'Sinusitis is swelling and infection of the sinuses, the air-filled spaces in the bones of the face, causing facial pain, nasal congestion, and sometimes fever.',
      explanation: `## What are Sinuses?

**Sinuses are hollow spaces** in the bones of your face and skull. They're lined with soft tissue called mucosa and are normally filled with air, not fluid.

**You have four pairs of sinuses:**
1. **Maxillary sinuses** - In your cheeks, below your eyes (largest)
2. **Frontal sinuses** - In your forehead, above your eyes
3. **Ethmoid sinuses** - Between your eyes, behind the bridge of your nose
4. **Sphenoid sinuses** - Deep behind your nose, near the base of your skull

**What sinuses do:**
- Lighten the weight of your skull
- Help produce mucus to moisten your nasal cavity
- Help give your voice its unique sound
- Protect your brain from facial impacts

## What is Sinusitis?

**Sinusitis** means the lining of your sinuses becomes swollen and inflamed. This swelling can block the normal drainage pathways, causing mucus to get trapped.

**Think of it like this:**
Imagine a room with a door that should open to let air in and let things out. If the door gets stuck shut, the room becomes stuffy and things can't get out. That's what happens in sinusitis - the tiny drainage channels from your sinuses become blocked.

**Two main types:**

**1. Acute sinusitis:**
- Comes on suddenly, often after a cold
- Usually lasts less than 4 weeks
- Most often caused by viruses, not bacteria

**2. Chronic sinusitis:**
- Lasts for 12 weeks or longer
- May be caused by ongoing inflammation, not infection
- Often related to allergies or nasal polyps

## What Causes Sinusitis?

**Most common cause: Viral upper respiratory infections**
- Same viruses that cause the common cold
- Viral sinusitis is much more common than bacterial

**Bacterial sinusitis:**
- Happens when fluid trapped in sinuses gets infected with bacteria
- Usually occurs after a viral cold that doesn't completely improve
- Less common than viral

**Other causes:**
- Allergies (hay fever)
- Nasal polyps (small growths in the nose)
- Deviated septum (crooked wall between nostrils)
- Tooth infections (can spread to maxillary sinuses)

## Signs and Symptoms

**Common symptoms:**
- Stuffy, blocked nose
- Thick yellow or green mucus from nose
- Pain, pressure, or fullness in the face
- Headache
- Reduced sense of smell
- Post-nasal drip (mucus dripping down back of throat)

**Where you feel the pain depends on which sinuses are affected:**
- **Cheeks and upper teeth:** Maxillary sinusitis
- **Forehead:** Frontal sinusitis
- **Between eyes, bridge of nose:** Ethmoid sinusitis
- **Top of head or deep behind nose:** Sphenoid sinusitis

**Fever:**
- More common in bacterial sinusitis
- Rare in viral sinusitis

## When is it Bacterial?

Most sinus infections start with a cold virus and get better in 7-10 days. Bacterial sinusitis is more likely if:

**"Double sickening":** You start to get better from a cold, then suddenly get worse again

**Lasts longer than 10 days** with no improvement

**Severe symptoms:**
- High fever (above 102°F or 39°C)
- Thick, colorful nasal discharge for 3-4 days
- Severe facial pain

## Treatment

**For viral sinusitis (most common):**
- Time - it will get better on its own
- Pain relief: Acetaminophen or ibuprofen
- Decongestants for stuffiness
- Saline nasal sprays or rinses
- Drink plenty of fluids
- Warm compresses on face

**For bacterial sinusitis:**
- Antibiotics (such as amoxicillin)
- Same supportive measures as viral sinusitis
- Usually improves within a few days of starting antibiotics

**For chronic sinusitis:**
- May need nasal steroid sprays
- Saline rinses
- Treatment of allergies
- Sometimes surgery to open blocked sinuses

## Home Remedies

- **Warm compresses:** Apply warm washcloth to face to help with pain
- **Saline nasal rinse:** Use neti pot or squeeze bottle with salt water
- **Steam inhalation:** Breathe in steam from a warm shower
- **Sleep with head elevated:** Use extra pillows to help drainage
- **Stay hydrated:** Drink plenty of water

## Prevention

- **Wash hands often** to prevent colds
- **Avoid cigarette smoke** and other irritants
- **Use a humidifier** if air is dry
- **Treat allergies** if you have them
- **Avoid nasal decongestant sprays** for more than 3 days (can make things worse)

## When to See a Doctor

Seek medical care if:
- Symptoms last more than 10 days without improvement
- You have a high fever
- Severe facial pain or swelling
- Vision changes or double vision
- Stiff neck
- Confusion or severe headache`,
      keyTerms: [
        { term: 'sinusitis', definition: 'Inflammation or infection of the sinuses, the hollow air-filled spaces in the facial bones' },
        { term: 'sinuses', definition: 'Air-filled cavities in the skull bones that produce mucus and help lighten the skull' },
        { term: 'mucus', definition: 'Thick, slippery substance produced by the nose and sinuses that helps trap germs and particles' },
        { term: 'post-nasal drip', definition: 'Mucus flowing down the back of the throat from the nasal cavity' },
      ],
      analogies: [
        'Sinuses are like rooms in your house with tiny doors. When the doors get stuck, air cannot circulate and things get trapped inside.',
        'A sinus infection is like a clogged drain - when the drainage pathway is blocked, fluid backs up and can become infected.',
        'Think of mucus like a conveyor belt that normally carries things out of your sinuses. When it stops working properly, things get stuck.',
      ],
      examples: [
        'A child has had a runny nose for 12 days that is not getting better - this could be bacterial sinusitis.',
        'Someone had a cold, was feeling better for a few days, then suddenly developed fever and facial pain - this is "double sickening."',
      ],
      patientCounselingPoints: [
        'Most sinus infections are viral and do not need antibiotics',
        'It is normal for mucus to be yellow or green during a cold - this does not mean you need antibiotics',
        'If symptoms last more than 10 days or you get worse after initially improving, see your doctor',
        'Saline nasal rinses can help wash out mucus and reduce congestion',
        'Avoid using over-the-counter decongestant sprays for more than 3 days',
        'Finish all antibiotics if prescribed',
      ],
    },
    2: {
      level: 2,
      summary: 'Rhinosinusitis is inflammation of the nasal cavity and paranasal sinuses, classified as acute (symptoms < 4 weeks) or chronic (symptoms ≥ 12 weeks), with viral causes far more common than bacterial, requiring diagnostic criteria to guide antibiotic use.',
      explanation: `## Anatomy of the Paranasal Sinuses

**The four paired sinuses:**

| Sinus pair | Location | Drainage pathway |
|------------|----------|------------------|
| Maxillary | Cheeks, below eyes | Opens into middle meatus |
| Frontal | Forehead, above eyes | Opens into middle meatus |
| Ethmoid | Between eyes | Multiple air cells, anterior drains to middle meatus, posterior drains to superior meatus |
| Sphenoid | Deep behind nose | Opens into sphenoethmoid recess |

**The ostiomeatal complex (OMC):**
- Critical drainage area for maxillary, anterior ethmoid, and frontal sinuses
- Narrow channels where sinus inflammation commonly begins
- Blockage here leads to sinusitis

**Key anatomical concept:**
- The term "rhinosinusitis" is more accurate than "sinusitis" because sinus inflammation almost always occurs with nasal inflammation
- The nasal cavity and sinuses are lined with the same respiratory mucosa

## Classification

### Acute Rhinosinusitis

**Duration:** Less than 4 weeks

**Subtypes:**
- **Acute viral rhinosinusitis (AVRS):** Most common, caused by same viruses as common cold
- **Acute bacterial rhinosinusitis (ABRS):** Bacterial superinfection, less common

### Chronic Rhinosinusitis

**Duration:** 12 weeks or longer with continuous symptoms

**Subtypes:**
- **CRS with nasal polyps (CRSwNP):** Presence of polyps visible on exam or imaging
- **CRS without nasal polyps (CRSsNP):** No polyps, primarily inflammation

### Subacute Rhinosinusitis

**Duration:** 4-12 weeks (intermediate category)

## Etiology

### Viral Causes (80-90% of acute cases)

**Common viruses:**
- Rhinovirus (most common)
- Influenza virus
- Parainfluenza virus
- Respiratory syncytial virus (RSV)
- Adenovirus
- Human coronavirus

### Bacterial Causes

**Common pathogens in ABRS:**
- *Streptococcus pneumoniae* (30-40%)
- *Haemophilus influenzae* (20-30%)
- *Moraxella catarrhalis* (10-15%)
- *Streptococcus pyogenes* (Group A Strep) (2-5%)
- Anaerobes (chronic sinusitis, dental origin)

### Other Contributing Factors

**Anatomic abnormalities:**
- Deviated nasal septum
- Concha bullosa (aerated middle turbinate)
- Nasal polyps
- Enlarged adenoids (especially in children)

**Inflammatory conditions:**
- Allergic rhinitis
- Cystic fibrosis
- Immunodeficiency
- Primary ciliary dyskinesia

**Environmental factors:**
- Tobacco smoke exposure
- Air pollution
- Occupational irritants
- Dry environments

**Dental causes:**
- Odontogenic infection spreading to maxillary sinus
- Periapical abscess from upper teeth

## Clinical Presentation

### Symptoms

**Major symptoms (required for diagnosis):**
- Purulent nasal discharge (may be anterior or posterior)
- Nasal obstruction/congestion
- Facial pain/pressure/fullness
- Decreased sense of smell (hyposmia/anosmia)

**Facial pain location by sinus:**
- Maxillary: Cheek, upper teeth
- Frontal: Forehead
- Ethmoid: Between eyes, temple
- Sphenoid: Vertex of head, occiput

### Physical Examination

**Anterior rhinoscopy findings:**
- Purulent discharge in nasal cavity
- Mucosal edema
- Nasal polyps (in CRS)
- Septal deviation

**Tenderness:**
- Percussion over sinuses may elicit pain
- Palpation of maxillary or frontal sinuses

**Transillumination:**
- Opacification of sinuses suggests fluid/thickening
- Limited sensitivity and specificity

## Diagnosis

### Acute Bacterial Rhinosinusitis Diagnostic Criteria

**IDSA 2012 guidelines: ABRS diagnosed when:**

**1. Acute onset with ANY of:**
- Purulent nasal discharge (anterior or posterior) AND
- Facial pressure/pain (alone or combined with nasal congestion)

**PLUS duration for ≥ 10 days WITHOUT improvement**

**OR**

**2. "Double sickening":** Worsening of symptoms after initial improvement ( viral URI lasting 5-6 days, then worsening)

**OR**

**3. Severe symptoms:**
- Fever ≥ 39°C (102°F) AND
- Purulent nasal discharge for 3-4 consecutive days
- Facial pain for 3-4 consecutive days

### Chronic Rhinosinusitis Diagnosis

** ≥ 12 weeks of symptoms PLUS:**
- Objective evidence of inflammation on:
  - Nasal endoscopy (polyps, edema, discharge) OR
  - CT imaging (mucosal thickening, sinus opacification)

### Imaging

**CT scan (gold standard for CRS):**
- Coronal view shows sinus anatomy and disease
- Not needed for uncomplicated acute sinusitis
- Indications:
  - Chronic sinusitis evaluation
  - Suspected complications
  - Surgical planning
  - Immunocompromised patients

**Radiographs (sinus X-rays):**
- Limited sensitivity and specificity
- Largely replaced by CT
- May be used when CT unavailable

**MRI:**
- Not first-line for sinusitis
- Useful if fungal infection suspected
- Evaluates soft tissue extension or orbital/intracranial complications

### Nasal Endoscopy

**Procedure:**
- Flexible or rigid endoscopy in clinic
- Visualizes nasal cavity and sinus ostia
- Identifies polyps, purulence, structural abnormalities

**Findings:**
- Mucosal edema
- Purulent discharge at osteomeatal complex
- Nasal polyps
- Anatomic variants

## Differential Diagnosis

**Other causes of facial pain:**
- Migraine headache
- Tension headache
- Temporomandibular joint (TMJ) disorders
- Trigeminal neuralgia
- Dental abscess
- Atypical facial pain

**Other causes of nasal congestion:**
- Allergic rhinitis
- Non-allergic rhinitis
- Nasal septal deviation
- Nasal foreign body (children)
- Adenoid hypertrophy

## Treatment

### Acute Viral Rhinosinusitis

**Supportive care only:**
- Analgesics for pain (acetaminophen, NSAIDs)
- Nasal saline irrigation
- Topical decongestants (oxymetazoline) - maximum 3 days
- Oral decongestants (pseudoephedrine)
- Nasal corticosteroids may help with congestion

**No antibiotics indicated**

### Acute Bacterial Rhinosinusitis

**First-line antibiotic therapy:**

| Patient | Recommended antibiotic | Alternative |
|---------|----------------------|-------------|
| Normal risk | Amoxicillin-clavulanate 500/125 mg TID or 875/125 mg BID | Doxycycline or levofloxacin |
| Penicillin allergy | Doxycycline BID OR levofloxacin daily | Clindamycin PLUS cephalosporin |
| High risk* | Same as normal risk | Same as normal risk |

*High risk: Recent antibiotics, treatment failure, severe symptoms

**Treatment duration:**
- 5-7 days for uncomplicated ABRS
- Extend to 10-14 days for severe disease or treatment failure

**Adjunctive therapies:**
- Nasal saline irrigation
- Intranasal corticosteroids
- Pain control

### Chronic Rhinosinusitis

**Medical management:**
- **Intranasal corticosteroids:** Mainstay of treatment (fluticasone, mometasone, budesonide)
- **Saline irrigation:** Daily high-volume irrigation
- **Oral corticosteroids:** Short burst for significant inflammation or polyps
- **Antibiotics:** Only for acute exacerbations
- **Leukotriene modifiers:** Especially if aspirin-exacerbated respiratory disease (AERD)
- **Biologics:** Dupilumab for CRSwNP

**Surgical management (Functional Endoscopic Sinus Surgery - FESS):**
- Failed maximal medical therapy
- Polyp removal
- Ostial enlargement to improve drainage
- Septoplasty if deviated septum contributing

## Complications

**Orbital complications:**
- Preseptal cellulitis
- Orbital cellulitis
- Subperiosteal abscess
- Orbital abscess
- Cavernous sinus thrombosis

**Intracranial complications:**
- Meningitis
- Epidural abscess
- Subdural abscess
- Brain abscess
- Venous thrombosis

**Other complications:**
- Osteomyelitis of frontal bone (Pott puffy tumor)
- Mucocele (mucus retention cyst)`,
      keyTerms: [
        { term: 'rhinosinusitis', definition: 'Inflammation of both the nasal cavity and paranasal sinuses; a more accurate term than sinusitis alone' },
        { term: 'ostiomeatal complex', definition: 'Critical anatomical region where the maxillary, anterior ethmoid, and frontal sinuses drain; common site of obstruction' },
        { term: 'acute bacterial rhinosinusitis', definition: 'Bacterial infection of the sinuses lasting less than 4 weeks with specific diagnostic criteria', pronunciation: 'rye-no-sine-us-EYE-tis' },
        { term: 'chronic rhinosinusitis', definition: 'Sinus inflammation lasting 12 weeks or longer with objective evidence of inflammation' },
        { term: 'nasal polyps', definition: 'Benign growths of inflamed nasal mucosa that can obstruct sinus drainage' },
        { term: 'FESS', definition: 'Functional endoscopic sinus surgery; minimally invasive surgery to open sinus drainage pathways' },
      ],
      analogies: [
        'The ostiomeatal complex is like a busy intersection where several roads meet - when it is blocked, traffic backs up everywhere.',
        'Chronic sinusitis is like having a slow drain that never fully unclogs - water keeps accumulating.',
        'Nasal polyps are like small balloons that grow in the nose and block the sinus drainage pathways.',
      ],
    },
    3: {
      level: 3,
      summary: 'Rhinosinusitis represents a spectrum of inflammatory disorders involving the nasal cavity and paranasal sinuses, with distinct diagnostic criteria distinguishing viral from bacterial etiology, and requiring targeted medical and occasionally surgical intervention.',
      explanation: `## Pathophysiology

### Sinus Ventilation and Drainage

**Normal physiology:**
- Sinuses are aerated cavities lined with ciliated respiratory epithelium
- Ciliary beat frequency: 700-800 beats/minute
- Mucus flows toward natural ostia against gravity (maxillary sinus drains upward)
- Ostia are the only drainage pathways

**Pathogenesis of sinusitis:**
1. **Ostial obstruction** (key event):
   - Mucosal edema from viral URI
   - Anatomic narrowing
   - Polyps or structural variants

2. **Gas absorption:**
   - Blood continues to absorb oxygen and nitrogen from obstructed sinus
   - Creates negative pressure
   - Draws in fluid transudate

3. **Ciliary dysfunction:**
   - Viral damage to cilia
   - Impaired mucus clearance
   - Stasis creates favorable environment for bacterial growth

4. **Bacterial proliferation:**
   - Colonizing bacteria multiply in stagnant fluid
   - Inflammatory response increases
   - Purulent exudate develops

### Host-Microbe Interactions

**Viral-bacterial synergy:**
- Viruses cause epithelial damage and immune dysfunction
- Upregulate bacterial adhesion molecules
- Impair neutrophil function
- Disrupt normal flora balance

**Biofilm formation:**
- Particularly important in chronic sinusitis
- Bacteria embed in extracellular matrix
- Resistant to immune clearance and antibiotics
- Found on mucosal surfaces and within sinus cavities

### Inflammatory Pathways

**Acute sinusitis:**
- Neutrophil-predominant inflammation
- IL-8, TNF-alpha, IL-1beta elevation
- Vascular permeability increased
- Glandular hypersecretion

**Chronic sinusitis:**
- Th2-mediated inflammation (CRSwNP)
- Eosinophilic infiltration
- IL-5, IL-13, IgE elevation
- Tissue remodeling and polyp formation

## Diagnostic Criteria in Detail

### Acute Bacterial Rhinosinusitis (ABRS)

**IDSA 2012 diagnostic criteria:**

**Diagnosis requires:**
1. **Symptoms:** Purulent nasal discharge (may be evidenced by post-nasal drip) AND nasal obstruction/facial pressure/fullness
2. **Duration:** ≥ 10 days without improvement
   OR
3. **Pattern:** Worsening after initial improvement ("double sickening")
   OR
4. **Severity:** Fever ≥ 39°C (102.2°F) plus purulent discharge and facial pain for ≥ 3 consecutive days

**Key diagnostic pearls:**
- Isolated facial pressure without nasal discharge = NOT ABRS
- Facial pain with clear discharge = likely viral or non-infectious
- Duration is critical - most viral URIs improve by day 7-10
- "Double sickening" is highly predictive of bacterial superinfection

**Symptoms that DO NOT predict bacterial etiology:**
- Discharge color (yellow/green common in viral URI)
- Facial pain location
- Headache
- Fever (present in many viral URIs)

### Chronic Rhinosinusitis (CRS)

**EPOS 2020 (European Position Paper) diagnostic criteria:**

**Required:** ≥ 2 symptoms for ≥ 12 weeks, one of which must be nasal obstruction or discharge PLUS facial pressure or smell loss

**PLUS objective evidence:**
- Nasal endoscopy showing:
  - Polyps (middle meatus)
  - Mucopurulent discharge (middle meatus or ethmoid area)
  - Edema/mucosal obstruction (middle meatus)
  OR
- CT imaging showing mucosal changes:
  - Mucosal thickening/osteomeatal complex obstruction
  - Sinus opacification

**CRS phenotypes:**
- **CRS with nasal polyps (CRSwNP):**
  - Th2 inflammation, eosinophilic
  - Often bilateral
  - Associated with asthma, AERD
  - More recalcitrant to treatment

- **CRS without nasal polyps (CRSsNP):**
  - Th1/Th17 inflammation, neutrophilic
  - Often associated with anatomic variants
  - May be unilateral (consider fungal or neoplasm)

## Microbiology

### Acute Bacterial Rhinosinusitis

**Common pathogens:**
| Pathogen | Frequency | Key features |
|----------|-----------|--------------|
| *S. pneumoniae* | 30-40% | Most common, declining with vaccination |
| *H. influenzae* | 20-30% | Beta-lactamase in 30-40% |
| *M. catarrhalis* | 10-15% | Beta-lactamase in >90% |
| *S. pyogenes* | <5% | More common in children |
| *S. aureus* | <5% | Usually in chronic, not acute |
| Anaerobes | <5% | Odontogenic source, chronic |

**Chronic sinusitis microbiology:**
- More diverse, often polymicrobial
- *S. aureus* and coagulase-negative staphylococci more common
- Anaerobes more prevalent
- *Pseudomonas* in post-surgical patients
- Fungal in specific contexts (immunocompromised, AFS)

### Antimicrobial Resistance Patterns

**S. pneumoniae:**
- Penicillin resistance: 20-30% (higher in some regions)
- Macrolide resistance: 30-40%
- Fluoroquinolone resistance: < 5%

**H. influenzae:**
- Beta-lactamase production: 30-40%
- BLNAR (beta-lactamase negative, ampicillin-resistant): Increasing in Asia

**Implications:**
- Amoxicillin-clavulanate preferred over amoxicillin alone
- High-dose regimens overcome intermediate resistance
- Consider local resistance patterns in treatment failures

## Treatment Algorithms

### Acute Bacterial Rhinosinusitis

**First-line: Amoxicillin-clavulanate**
- Augmentin 500/125 mg TID or 875/125 mg BID
- Rationale: Covers beta-lactamase producers (H. influenzae, M. catarrhalis)
- Duration: 5-7 days (extend to 10-14 for severe disease)

**Penicillin allergy:**
- **Type I (anaphylaxis):** Doxycycline 100 mg BID OR levofloxacin 500 mg daily
- **Non-type I rash:** Cefuroxime or cefpodoxime

**Treatment failure (no improvement at 72 hours):**
- Switch to different class or add coverage
- Consider imaging to rule out complications
- Evaluate for alternative diagnoses

**Adjunctive therapies:**
- **High-volume nasal saline irrigation:** Most effective adjunct (Level A evidence)
- **Intranasal corticosteroids:** Moderate benefit, especially if underlying allergic rhinitis
- **Decongestants:** Symptomatic relief only, limit topical to 3 days
- **Mucolytics:** Limited evidence, not routinely recommended

### Chronic Rhinosinusitis

**Medical management:**

**Intranasal corticosteroids (INCS):**
- Mainstay of CRS treatment
- Evidence level: A for CRSsNP, B for CRSwNP
- Options: Fluticasone, mometasone, budesonide, triamcinolone
- Delivery: Spray, drops, or irrigation

**Saline irrigation:**
- High-volume low-pressure (squeeze bottle, neti pot)
- Evidence: Level A for symptom improvement
- Composition: Isotonic or hypertonic solutions
- Additives: Budesonide respules for topical steroid delivery

**Systemic corticosteroids:**
- Indicated for CRSwNP with significant obstruction
- Prednisone 30-40 mg daily x 5-7 days, then taper
- Evidence: Level A for short-term polyp reduction
- Risks: Hyperglycemia, mood changes, adrenal suppression

**Leukotriene modifiers:**
- Montelukast, zafirlukast
- Particularly useful in AERD (Samter triad)
- Evidence: Level B for CRSwNP

**Biologic therapy (CRSwNP):**
- **Dupilumab** (IL-4/IL-13 inhibitor): FDA approved, Level A evidence
- **Omalizumab** (anti-IgE): Approved for CRSwNP with nasal polyps
- **Mepolizumab** (IL-5 inhibitor): FDA approved for CRSwNP

**Antibiotics in CRS:**
- Not routinely recommended
- Consider for acute exacerbations with purulence
- Culture-directed therapy preferred
- Duration: 3-4 weeks (for anti-inflammatory effect)

**Surgical intervention:**

**Indications for FESS:**
- Failed maximal medical therapy (3+ months)
- Complications (orbital, intracranial)
- Nasal polyps causing obstruction
- Anatomic obstruction (septal deviation, concha bullosa)
- Unclear diagnosis (biopsy needed)

**Surgical goals:**
- Remove polyps
- Enlarge sinus ostia
- Improve sinus ventilation
- Remove diseased mucosa
- Preserve mucosa where possible

**Outcomes:**
- Symptom improvement: 70-90%
- Quality of life: Significant improvement in validated instruments
- Revision surgery rate: 10-30% depending on phenotype

**Revision surgery considerations:**
- Evaluate for comorbidities (immune deficiency, CF, AERD)
- Consider tissue eosinophilia as predictor of recurrence
- Biologics may reduce need for revision surgery

## Special Situations

### Odontogenic Sinusitis

**Pathogenesis:**
- Maxillary sinus floor adjacent to tooth roots
- Periapical abscess erodes into sinus
- Usually polymicrobial with anaerobes
- Often unilateral

**Treatment:**
- Dental source management (root canal, extraction) required
- Antibiotics targeting anaerobes (amoxicillin-clavulanate +/- metronidazole)
- Surgical drainage if extensive

### Fungal Sinusitis

**Types:**
- **Acute invasive fulminant:** Immunocompromised, emergency
- **Chronic invasive:** Indolent, immunocompromised
- **Fungal ball (mycetoma):** Non-invasive, maxillary sinus
- **Allergic fungal sinusitis:** Type I hypersensitivity, eosinophilic mucus

**Management varies by type** - surgical debridement common, antifungals for invasive disease

### Recurrent Acute Rhinosinusitis

**Definition:**
- ≥ 4 episodes per year, with complete resolution between episodes

**Evaluation:**
- Consider anatomic variants (concha bullosa, septal deviation)
- Evaluate for immune deficiency
- Assess for allergies, GERD, environmental factors

**Management:**
- Address underlying cause
- Consider prophylactic measures (INCS, saline)
- Surgery if anatomic obstruction`,
      keyTerms: [
        { term: 'ostiomeatal complex', definition: 'Anatomic region where maxillary, anterior ethmoid, and frontal sinuses drain; primary site of obstruction in sinusitis' },
        { term: 'biofilm', definition: 'Structured community of bacteria embedded in extracellular polymeric substance; highly resistant to antibiotics and host defenses' },
        { term: 'double sickening', definition: 'Pattern of initial viral URI improvement followed by sudden worsening; highly predictive of bacterial superinfection' },
        { term: 'AERD', definition: 'Aspirin-exacerbated respiratory disease; triad of asthma, nasal polyps, and aspirin sensitivity', pronunciation: 'Samter triad' },
        { term: 'FESS', definition: 'Functional endoscopic sinus surgery; endoscopic surgery to open sinus ostia and remove diseased tissue' },
        { term: 'concha bullosa', definition: 'Aerated middle turbinate; anatomic variant that can narrow the osteomeatal complex and predispose to sinusitis' },
      ],
      clinicalNotes: 'Duration is the key differentiator between viral and bacterial sinusitis. Isolated facial pain without nasal symptoms is rarely sinusitis - consider migraine or tension headache. Amoxicillin-clavulanate is first-line for ABRS due to high beta-lactamase rates. CRSwNP represents a Th2 inflammatory phenotype with high eosinophilia; surgical recurrence rates are higher and biologics may be beneficial.',
    },
    4: {
      level: 4,
      summary: 'Rhinosinusitis management requires distinguishing viral from bacterial etiology using evidence-based diagnostic criteria, with appropriate use of antibiotics, targeted therapy for chronic disease including biologics, and surgical intervention for refractory cases or complications.',
      explanation: `## Evidence-Based Diagnosis

### The Diagnostic Accuracy Challenge

**Problem:**
- Physical exam findings have poor specificity for bacterial vs viral sinusitis
- Overlap with other causes of facial pain (migraine, tension headache)
- Studies show 50% or more of antibiotic prescriptions for sinusitis are unnecessary

**Evidence on physical findings:**
| Finding | Sensitivity | Specificity | LR+ | LR- |
|---------|-------------|-------------|-----|-----|
| Purulent nasal discharge | 52% | 71% | 1.8 | 0.7 |
| Facial pain | 88% | 18% | 1.1 | 0.7 |
| Double sickening | 50% | 92% | 6.3 | 0.5 |
| Maxillary tooth pain | 15% | 96% | 3.8 | 0.9 |
| Fever > 39°C | 11% | 97% | 3.7 | 0.9 |

**Clinical pearl:** "Double sickening" has the highest likelihood ratio for bacterial infection. Isolated facial pain without nasal symptoms rarely represents sinusitis.

### The Double Sickening Phenomenon

**Definition:**
- Initial viral URI symptoms (days 1-5)
- Transient improvement (days 6-9)
- Sudden worsening with new fever and purulent discharge (days 10+)

**Pathophysiology:**
- Viral damage to respiratory epithelium
- Impaired ciliary clearance
- Secondary bacterial proliferation in stagnant mucus
- New inflammatory response

**Diagnostic value:**
- Positive LR: 6.3 (moderately strong increase in probability)
- Presence of this pattern should increase threshold for antibiotics

### Imaging Indications

**When to image acute sinusitis:**
1. Suspected complications (orbital, intracranial)
2. Immunocompromised host
3. Atypical presentation
4. Failure to respond to appropriate therapy
5. Surgical planning

**CT findings and correlation with infection:**
- Mucosal thickening > 4 mm: Abnormal
- Complete opacification: Suggests effusion
- Air-fluid level: Suggests acute infection (but can be seen in chronic)
- Bone remodeling: Suggests chronic disease

**Limitations:**
- CT cannot distinguish bacterial from viral sinusitis
- Incidental findings common (up to 30% of scans)
- Radiation exposure considerations

## Antibiotic Stewardship

### Overuse and Consequences

**Scope of problem:**
- Sinusitis is 5th leading reason for antibiotic prescriptions in US
- ~80% of patients receive antibiotics, but only ~30% have bacterial infection
- Estimated unnecessary prescriptions: 10-15 million annually

**Consequences:**
- Antibiotic resistance development
- C. difficile infections
- Cost: > \$3 billion annually in US
- Patient exposure to adverse effects

### Appropriate Antibiotic Use

**Guideline concordant care:**
- Reserve antibiotics for confirmed bacterial disease
- Use first-line agents (amoxicillin-clavulanate) before broad-spectrum
- Prescribe appropriate duration (5-7 days for uncomplicated)
- Delayed antibiotic prescription when appropriate

### Amoxicillin-Clavulanate vs Amoxicillin

**Why amoxicillin-clavulanate is preferred:**
- Beta-lactamase production rates:
  - H. influenzae: 30-40%
  - M. catarrhalis: >90%
- Amoxicillin alone covers only ~60-70% of pathogens
- Augmentin covers >90% of bacterial causes

**Dosing:**
- Augmentin 500/125 mg TID or 875/125 mg BID
- High-dose regimens (2000/125 mg ER BID) no longer recommended first-line
- Duration: 5-7 days for uncomplicated

**Alternatives based on resistance:**
- Doxycycline: Good coverage, but resistance increasing in some regions
- Levofloxacin: Excellent coverage but reserve for treatment failures or contraindications
- Clindamycin + cephalosporin: For severe penicillin allergy

## Chronic Rhinosinusitis Management

### Phenotype-Driven Therapy

**CRS with nasal polyps (CRSwNP):**
- Th2 inflammation with eosinophilia
- Associated with: Asthma (50-70%), AERD (15-30%), allergy (60-80%)
- Medical approach: Intranasal steroids, systemic steroids for flares, biologics
- Surgical approach: Polypectomy, extensive ethmoidectomy
- Higher recurrence rates: 40-60% require revision surgery

**CRS without nasal polyps (CRSsNP):**
- Th1/Th17 inflammation, neutrophilic
- Often associated with anatomic issues
- Medical approach: Intranasal steroids, saline, address underlying causes
- Surgical approach: Targeted sinus surgery based on anatomy
- Lower recurrence rates: 10-25% require revision surgery

### Biologics in CRSwNP

**Approved agents and evidence:**

| Agent | Target | Trial results | Key outcomes |
|-------|--------|--------------|--------------|
| Dupilumab | IL-4/IL-13 | SINUS-52 | 33% vs 7% NAS score improvement |
| Omalizumab | IgE | POLYP 1 & 2 | Significant polyp reduction, improved QoL |
| Mepolizumab | IL-5 | SYNAPSE | Reduced need for surgery |

**Patient selection:**
- Bilateral CRSwNP despite prior surgery
- High polyp burden (Nasal Polyp Score ≥ 5)
- Associated with asthma or AERD
- Tissue eosinophilia (>10 eosinophils/HPF)
- Failed maximal medical therapy

**Cost considerations:**
- Annual cost: \$25,000-40,000 per patient
- Cost-effectiveness: May be cost-effective by reducing surgeries and oral steroid use
- Insurance prior authorization typically required

### Surgical Decision-Making

**Failed medical therapy:**
- No standard definition, but typically:
  - ≥ 3 months of maximal medical management
  - Intranasal steroids, saline irrigation
  - Trial of systemic steroids for CRSwNP
  - Appropriate treatment of comorbidities

**Comorbidities that affect outcomes:**
- **Asthma:** Poorer surgical outcomes, higher recurrence
- **AERD:** Higher recurrence, consider aspirin desensitization
- **CF/immune deficiency:** May need earlier surgery, higher recurrence
- **Allergic fungal sinusitis:** Requires surgery plus medical management

**Surgical extent considerations:**
- **Limited:** Maxillary antrostomy (when isolated maxillary disease)
- **Standard:** Maxillary antrostomy + anterior ethmoidectomy
- **Extended:** Posterior ethmoidectomy, sphenoidotomy, frontal sinusotomy

**Outcome predictors:**
- Tissue eosinophilia: Higher recurrence
- Prior surgery: Higher recurrence
- Polyp burden: Higher recurrence with extensive polyps
- Asthma severity: Poorer outcomes with severe asthma

## Complications Management

### Orbital Complications (Chandler Classification)

**Class I - Preseptal cellulitis:**
- Eyelid edema/erythema, normal ocular exam
- Oral antibiotics, close monitoring

**Class II - Orbital cellulitis:**
- Orbital edema, proptosis, possible ophthalmoplegia
- IV antibiotics, possible surgical drainage

**Class III - Subperiosteal abscess:**
- Collection between bone and periorbita
- Urgent surgical drainage + IV antibiotics
- Particularly in children, may resolve with antibiotics alone if small

**Class IV - Orbital abscess:**
- Intraorbital collection
- Urgent surgical drainage + IV antibiotics

**Class V - Cavernous sinus thrombosis:**
- Septic thrombosis of cavernous sinus
- IV antibiotics, anticoagulation controversial

### Intracranial Complications

**Epidural abscess:**
- Most common intracranial complication
- Neurosurgical drainage + IV antibiotics

**Subdural empyema:**
- Neurosurgical emergency
- High mortality if not treated promptly

**Brain abscess:**
- Frontal lobe most common
- Neurosurgical consultation

**Meningitis:**
- IV antibiotics, consider neurosurgical drainage of sinus

**Pott puffy tumor:**
- Frontal bone osteomyelitis with subperiosteal abscess
- Surgical debridement + IV antibiotics

### Antibiotic Selection for Complications

**Empiric coverage (until culture results):**
- Ceftriaxone 2g IV q12h PLUS vancomycin
- Add metronidazole if anaerobic source suspected (odontogenic, chronic)
- Adjust based on cultures and clinical response

**Duration:**
- Orbital cellulitis: 7-14 days
- Intracranial complications: 4-6 weeks (often with oral step-down)`,
      keyTerms: [
        { term: 'likelihood ratio', definition: 'Statistical measure of diagnostic test performance; LR+ increases disease probability, LR- decreases it' },
        { term: 'nasal polyp score', definition: 'Endoscopic scoring system for polyp burden (0-8 per side, higher = more extensive disease)' },
        { term: 'tissue eosinophilia', definition: 'Elevated eosinophils in sinus tissue; biomarker for Th2 inflammation and predictor of surgical recurrence' },
        { term: 'NAS score', definition: 'Nasal endoscopy score; includes polyp size, edema, discharge components in validated outcome measures' },
        { term: 'osteomeatal complex', definition: 'Key anatomical region for sinus drainage; obstruction here predisposes to sinusitis' },
      ],
      clinicalNotes: 'Duration (>10 days) is the most reliable predictor of bacterial sinusitis. Facial pain without nasal symptoms rarely represents sinusitis. Amoxicillin-clavulanate provides coverage against beta-lactamase-producing organisms (H. influenzae, M. catarrhalis) and is preferred over amoxicillin alone. CRSwNP is a Th2/eosinophilic disease with higher surgical recurrence; consider dupilumab for refractory cases with high tissue eosinophilia.',
    },
    5: {
      level: 5,
      summary: 'Contemporary rhinosinusitis management integrates diagnostic precision, evidence-based antibiotic stewardship, phenotype-specific therapy for chronic disease, emerging biologic treatments, and individualized surgical approaches to optimize outcomes while minimizing unnecessary interventions.',
      explanation: `## Current Guidelines and Evidence Synthesis

### Guideline Comparison

| Aspect | IDSA 2012 | EPOS 2020 | AAO-HNS 2015 |
|--------|-----------|-----------|--------------|
| First-line ABRS | Amox-clav | Amox-clav | Amox or Amox-clav |
| Duration | 5-7 days | 5-7 days (adults) | 5-10 days |
| Watchful waiting | Not emphasized | For mild cases | For mild cases |
| Imaging for ABRS | Not recommended | Not recommended | Not recommended |
| CRS medical therapy | Steroids + irrigation | Steroids + irrigation | Steroids + irrigation |
| Biologics (CRSwNP) | Not included | Included | Not included (before approval) |

### Key Trials Shaping Practice

**Amoxicillin-Clavulanate vs Amoxicillin:**
- Comparable efficacy for uncomplicated ABRS
- Higher rates of diarrhea with amox-clav
- Amox-clav preferred in regions with high beta-lactamase rates

**Antibiotic duration:**
- 5 vs 10 days: Non-inferiority shown for mild-moderate ABRS
- Extended courses for severe disease or comorbidities

**Surgical trials:**
- MACS trial: Early surgery vs continued medical therapy
  - No significant difference in QoL at 12 months
  - Suggests extended medical trial before surgery
- Longitudinal outcomes: Surgery provides durable benefit for many, but recurrence common in certain phenotypes

## Diagnostic Precision

### Misdiagnosis Prevention

**Common mimics of sinusitis:**

| Condition | Distinguishing features |
|-----------|------------------------|
| Migraine | Unilateral, throbbing, photophobia, nausea; no nasal discharge |
| Tension headache | Bilateral, band-like, no nasal symptoms |
| TMJ dysfunction | Jaw pain, clicking, worse with chewing |
| Cluster headache | Strictly unilateral, retro-orbital, lacrimation, rhinorrhea |
| Trigeminal neuralgia | Trigger points, electric-shock pain, brief episodes |
| Atypical facial pain | No physical findings, normal imaging |

**Diagnostic checklist:**
1. Nasal obstruction or discharge present? (Required for diagnosis)
2. Duration > 10 days without improvement? (Supports bacterial)
3. Double sickening pattern? (Strongly supports bacterial)
4. Purulent discharge visible? (Required for bacterial diagnosis)
5. Isolated facial pain without nasal symptoms? (Likely not sinusitis)

### Advanced Imaging Interpretation

**CT findings predictive of chronic disease:**
- Osteitis (bone thickening): Correlates with disease severity
- Neo-osteogenesis: New bone formation, predicts surgical difficulty
- Lamina papyracea dehiscence: Risk of orbital complications
- Skull base dehiscence: Risk of intracranial complications

**Mucosal thickening thresholds:**
- < 2 mm: Normal
- 2-4 mm: Indeterminate, clinical correlation required
- > 4 mm: Abnormal

**Sinus opacification patterns:**
- Air-fluid level: Acute process (but non-specific)
- Complete opacification: Advanced disease
- Neo-osteogenesis: Chronic disease

## Antibiotic Optimization

### Biomarker-Guided Therapy

**Procalcitonin:**
- Not routinely recommended for sinusitis
- May have role in differentiating bacterial vs viral in research settings
- Limited clinical utility

**C-reactive protein:**
- Elevated in both bacterial and severe viral sinusitis
- Limited specificity

**Endoscopic-guided culture:**
- Middle meatus swab under endoscopic visualization
- More accurate than nasal swab
- Consider in treatment failure or complicated cases

**Maxillary sinus aspiration:**
- Gold standard for microbiologic diagnosis
- Rarely performed clinically
- Consider in immunocompromised or treatment failures

### Resistance-Driven Decisions

**Local resistance patterns matter:**
- High beta-lactamase region: Amox-clav preferred
- High macrolide resistance: Avoid azithromycin/clarithromycin
- High fluoroquinolone resistance: Reserve for failures

**Regional considerations:**
- International variations in resistance patterns
- Travel history relevant
- Recent antibiotic exposure: Increases resistance risk

## Biologics in CRSwNP

### Patient Selection Algorithm

**Ideal candidates:**
- Bilateral CRSwNP
- Failed prior sinus surgery (≥ 1)
- High tissue eosinophilia (>10/HPF)
- Associated comorbid asthma
- Prior oral steroid use
- High nasal polyp score (≥ 5/8)

**Comparative efficacy:**
- Dupilumab: Strongest evidence, improves both upper and lower airway
- Omalizumab: Particularly beneficial with allergic component
- Mepolizumab: Consider with eosinophilic predominance

**Combination with surgery:**
- Pre-operative biologics: May reduce surgical bleeding, polyp burden
- Post-operative biologics: Delay recurrence
- Concurrent approach: Surgery debulking + biologic for maintenance

### Cost-Effectiveness Considerations

**Break-even analysis:**
- Biologic cost: \$25,000-40,000/year
- Surgery cost: \$15,000-30,000 per procedure
- Revision surgery rate without biologic: 40-60% in CRSwNP
- Break-even: 2-3 prevented surgeries over 3-5 years

## Surgical Decision Optimization

### Timing of Surgery

**Too early:** Unnecessary surgery, higher recurrence
**Too late:** Permanent mucosal damage, lower success rates

**Optimal timing framework:**
- Failed 3 months of appropriate medical therapy
- Failed 1-2 courses of systemic steroids (CRSwNP)
- Addressed comorbidities (allergy, GERD, immune deficiency)
- Appropriate imaging studies
- Patient understands goals and expectations

### Surgical Technique Considerations

**Extent of surgery:**
- **Conservative:** Single sinus surgery when disease isolated
- **Moderate:** Standard FESS (maxillary + anterior ethmoid)
- **Extensive:** Full sphenoethmoidectomy, frontal drill-out

**Balloon sinuplasty:**
- Less invasive, similar short-term outcomes to FESS
- Particularly useful for isolated maxillary disease
- Lower complication rate
- Higher recurrence risk in extensive disease

**Image guidance:**
- Intraoperative CT navigation
- Reduces complications in revision surgery
- Helpful for frontal sinus surgery
- Not required for routine primary cases

### Post-Operative Care

**Debridement:**
- First postoperative visit (1-2 weeks): Critical for scarring prevention
- Second visit (4-6 weeks): Address residual inflammation
- Ongoing as needed based on endoscopic appearance

**Medical therapy after surgery:**
- Intranasal steroids: Universal recommendation
- Saline irrigation: Universal recommendation
- Systemic steroids: Consider for CRSwNP recurrence
- Biologics: Consider for refractory CRSwNP

**Post-operative endoscopy scoring:**
- Periop scoring system (0-10 per side)
- Lundy-Kennedy score
- Modified Lund-Mackay for post-op

## Special Populations

### Cystic Fibrosis

**Unique considerations:**
- Thick mucus, impaired clearance
- Pseudomonas colonization common
- Higher surgical failure rates
- Aggressive post-op care required

**Management:**
- Culture-directed antibiotics
- Consider IV antibiotics for exacerbations
- CFTR modulators may improve sinus disease
- Surgical approach similar but with lower expectations

### Immunodeficiency

**Evaluation:**
- Immunoglobulin levels (IgG, IgA, IgM)
- Specific antibody responses
- HIV testing
- Consider genetic immunodeficiency evaluation

**Management:**
- Aggressive treatment of infections
- Immunoglobulin replacement if deficient
- Surgical intervention earlier in course
- Consider prophylactic antibiotics

### Aspirin-Exacerbated Respiratory Disease (AERD)

**Clinical triad:**
- Asthma
- Nasal polyps
- Aspirin/NSAID sensitivity

**Management:**
- Aspirin desensitization:
  - Reduces polyp recurrence
  - Improves asthma control
  - Requires specialized center
- Consider dupilumab (target for Th2 inflammation)
- Higher recurrence rates after surgery

### Post-Transplant Patients

**Unique considerations:**
- Immunosuppression increases infection risk
- Sinusitis may be source of pulmonary infection in lung transplant
- Aggressive management of exacerbations
- Consider prophylactic measures

## Quality Improvement Metrics

**Appropriate antibiotic prescribing:**
- Percentage of sinusitis visits with antibiotics (goal: < 30%)
- First-line agent selection (amox-clav)
- Appropriate duration (5-7 days)

**Surgical outcomes:**
- Pre- and post-operative SNOT-22 scores
- Revision surgery rates
- Complication rates
- Patient satisfaction

**Chronic disease management:**
- Time to appropriate therapy (steroids, biologics)
- Hospitalization rates for complications
- Oral steroid exposure (reduction goal)`,
      keyTerms: [
        { term: 'SNOT-22', definition: 'Sino-Nasal Outcome Test-22; validated 22-item quality of life instrument for rhinosinusitis' },
        { term: 'Lund-Mackay score', definition: 'CT scoring system for sinus opacification; 0-2 per sinus, total 0-12' },
        { term: 'tissue eosinophilia', definition: 'Elevated eosinophils in sinus tissue; >10/HPF predicts Th2 phenotype and surgical recurrence' },
        { term: 'balloon sinuplasty', definition: 'Minimally invasive sinus surgery using balloon catheter to dilate sinus ostia' },
        { term: 'image guidance', definition: 'Intraoperative CT navigation system for anatomic localization during sinus surgery' },
        { term: 'AERD', definition: 'Aspirin-exacerbated respiratory disease; Samter triad of asthma, nasal polyps, aspirin sensitivity' },
      ],
      clinicalNotes: `Key clinical practice pearls:

1. **Diagnosis matters:** Duration > 10 days without improvement is the most reliable criterion for ABRS. Double sickening has the highest LR+ for bacterial disease.

2. **Avoid misdiagnosis:** Isolated facial pain without nasal symptoms is rarely sinusitis. Consider migraine, tension headache, or other facial pain syndromes.

3. **First-line therapy:** Amoxicillin-clavulanate (not amoxicillin) provides coverage against beta-lactamase producers (H. influenzae, M. catarrhalis).

4. **Duration:** 5-7 days for uncomplicated ABRS in adults. Extend to 10-14 days for severe disease or comorbidities.

5. **CRS phenotypes:** Distinguish CRSwNP (Th2, eosinophilic) from CRSsNP (Th1/Th17, neutrophilic). Different treatment approaches and recurrence rates.

6. **Biologics for CRSwNP:** Dupilumab has strongest evidence. Consider for failed surgery, high tissue eosinophilia, high polyp burden, with comorbid asthma.

7. **Surgery timing:** Failed 3 months maximal medical therapy is appropriate threshold. Earlier surgery for complications or specific situations.

8. **Post-op care is critical:** Debridement at 1-2 weeks prevents scarring. Continued medical therapy (steroids, irrigation) essential.

9. **Odontogenic source:** Consider in unilateral maxillary sinusitis, especially with dental symptoms. Requires dental source management.

10. **Complications:** Low threshold for imaging with orbital or neurologic symptoms. Urgent surgical consultation for most complications.`,
    },
  },

  media: [
    {
      id: 'sinus-anatomy',
      type: 'diagram',
      filename: 'sinus-anatomy.svg',
      title: 'Paranasal Sinus Anatomy',
      description: 'Location of all four paired sinuses and drainage pathways',
    },
    {
      id: 'ostiomeatal-complex',
      type: 'diagram',
      filename: 'ostiomeatal-complex.svg',
      title: 'Ostiomeatal Complex',
      description: 'Detailed anatomy of the critical drainage region for sinusitis',
    },
    {
      id: 'nasal-polyps',
      type: 'diagram',
      filename: 'nasal-polyps.svg',
      title: 'Nasal Polyps',
      description: 'Endoscopic view of nasal polyps in chronic sinusitis',
    },
    {
      id: 'fess-surgery',
      type: 'diagram',
      filename: 'fess-surgery.svg',
      title: 'Functional Endoscopic Sinus Surgery',
      description: 'Surgical approach and extent for FESS',
    },
  ],

  citations: [
    {
      id: 'idsa-sinusitis-2012',
      type: 'article',
      title: 'Executive Summary: IDSA Clinical Practice Guideline for Acute Bacterial Rhinosinusitis in Children and Adults',
      authors: ['Chow AW', 'Benninger MS', 'Brook I', 'et al.'],
      source: 'Clinical Infectious Diseases',
      url: 'https://doi.org/10.1093/cid/cis1047',
    },
    {
      id: 'aao-hns-rs-2015',
      type: 'article',
      title: 'Clinical Practice Guideline: Adult Sinusitis',
      authors: ['Rosenfeld RM', 'Piccirillo JF', 'Chandrasekhar SS', 'et al.'],
      source: 'Otolaryngology-Head and Neck Surgery',
      url: 'https://doi.org/10.1177/0194599815572097',
    },
    {
      id: 'epos-2020',
      type: 'article',
      title: 'European Position Paper on Rhinosinusitis and Nasal Polyps 2020',
      authors: ['Fokkens WJ', 'Lund VJ', 'Hopkins C', 'et al.'],
      source: 'Rhinology',
    },
  ],

  crossReferences: [
    { targetId: 'structure-nasal-cavity', targetType: 'structure', relationship: 'related', label: 'Nasal Cavity' },
    { targetId: 'condition-allergic-rhinitis', targetType: 'condition', relationship: 'related', label: 'Allergic Rhinitis' },
    { targetId: 'condition-otitis-media', targetType: 'condition', relationship: 'sibling', label: 'Otitis Media' },
    { targetId: 'condition-pharyngitis', targetType: 'condition', relationship: 'sibling', label: 'Pharyngitis' },
  ],

  tags: {
    systems: ['ent', 'respiratory'],
    topics: ['otolaryngology', 'infectious disease', 'allergy immunology'],
    keywords: ['sinusitis', 'rhinosinusitis', 'ABRS', 'CRS', 'nasal polyps', 'FESS', 'sinus surgery'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['family medicine', 'otolaryngology'],
    },
  },

  createdAt: '2025-01-26T00:00:00.000Z',
  updatedAt: '2025-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default sinusitis;
