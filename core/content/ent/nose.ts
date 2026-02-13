import { EducationalContent } from '../types';

export const noseContent: EducationalContent = {
  id: 'ent-nose',
  type: 'topic',
  name: 'Nose and Sinus Disorders',
  alternateNames: ['Rhinology', 'Nasal Disorders', 'Sinusitis'],

  levels: {
    1: {
      level: 1,
      summary: 'Your nose helps you breathe, smell, and filters the air you breathe. Nose problems like stuffy nose, runny nose, and nosebleeds are very common.',
      explanation: `Your nose does many important jobs. It warms and moistens the air you breathe, helps you smell, and filters out dust and germs. When your nose isn't working right, it can make you uncomfortable.

**Common Nose Problems:**

1. **Stuffy Nose (Congestion)** - Your nose feels blocked and it's hard to breathe through. This happens when the tissues inside your nose swell up.

2. **Runny Nose** - Mucus keeps dripping from your nose. This is your nose's way of washing out germs and dust.

3. **Nosebleeds (Epistaxis)** - Blood coming from your nose. This can happen from dry air, picking your nose, or getting hit in the nose.

4. **Sinus Problems** - Your sinuses are hollow spaces behind your nose and cheeks. When they get infected or blocked, you can feel pressure and pain in your face.

**Keeping Your Nose Healthy:**
- Use saline spray if your nose is dry
- Don't pick your nose
- Stay hydrated to keep mucus thin
- Use a humidifier in dry weather

**When to See a Doctor:**
- Nosebleeds that won't stop after 10-15 minutes
- Trouble breathing through your nose for weeks
- Facial pain or pressure with fever
- Unusual smell or discharge from your nose`,
      keyTerms: [
        { term: 'congestion', definition: 'When your nose feels stuffed up and it is hard to breathe through' },
        { term: 'mucus', definition: 'The sticky substance made by your nose that traps dirt and germs' },
        { term: 'sinuses', definition: 'Hollow spaces in the bones of your face that are connected to your nose' },
        { term: 'nosebleed', definition: 'When blood comes out of your nose, also called epistaxis' },
        { term: 'saline spray', definition: 'A salt water spray that helps moisten a dry nose' },
      ],
      analogies: [
        'Your nose is like an air conditioner for your lungs - it warms, humidifies, and filters the air you breathe.',
        'Sinuses are like rooms off a hallway - when they get blocked, pressure builds up like a balloon.',
      ],
      examples: [
        'When you have a cold, your nose makes extra mucus to wash out the germs, which gives you a runny nose.',
        'In winter, indoor heating can dry out your nose, making nosebleeds more common.',
      ],
      patientCounselingPoints: [
        'For a nosebleed, pinch the soft part of your nose and lean forward slightly for 10 minutes.',
        'Saline sprays and humidifiers can help prevent nosebleeds in dry weather.',
        'Avoid picking your nose or putting objects in it.',
      ],
    },

    2: {
      level: 2,
      summary: 'Nasal and sinus disorders include rhinitis (inflammation of the nose), sinusitis (sinus infection), epistaxis (nosebleeds), and nasal polyps. These conditions cause symptoms like congestion, runny nose, facial pain, and loss of smell.',
      explanation: `The nose and sinuses work together to filter, warm, and humidify the air we breathe. Problems in this area are very common and can significantly affect quality of life.

## Rhinitis (Nasal Inflammation)

**Allergic Rhinitis:**
- Caused by allergens like pollen, dust mites, pet dander, or mold
- Symptoms: Sneezing, itchy nose/eyes, runny nose, congestion
- Can be seasonal (hay fever) or year-round (perennial)
- Often associated with other allergic conditions like asthma or eczema

**Non-Allergic Rhinitis:**
- Not caused by allergies
- Triggers: Changes in temperature/humidity, strong odors, medications, certain foods
- Symptoms similar to allergic rhinitis but without itching

## Sinusitis (Rhinosinusitis)

**Acute Sinusitis:**
- Usually follows a cold or upper respiratory infection
- Symptoms lasting less than 4 weeks
- Facial pain or pressure, nasal congestion, thick discharge, reduced smell
- May cause headache, tooth pain, or fever

**Chronic Sinusitis:**
- Symptoms lasting more than 12 weeks
- Ongoing inflammation even with treatment
- May require different treatment approaches

## Epistaxis (Nosebleeds)

**Common Causes:**
- Dry air (most common cause)
- Nose picking or trauma
- Allergies causing irritation
- Certain medications (blood thinners, nasal sprays)
- Bleeding disorders

**Types:**
- Anterior nosebleeds: More common, from front of nose, easier to treat
- Posterior nosebleeds: Less common, from back of nose, more serious, often needs medical care

## Nasal Polyps

**What They Are:**
- Noncancerous growths in the nose or sinuses
- Associated with chronic inflammation, especially in people with asthma or allergies
- Can cause congestion, reduced sense of smell, sinus infections

**Symptoms:**
- Stuffy or blocked nose
- Runny nose
- Postnasal drip
- Loss of smell and taste
- Facial pressure or pain

## Septal Deviation

**Description:**
- The nasal septum is the wall between the two sides of the nose
- Deviation means it's shifted to one side
- Can be present from birth or from injury

**Effects:**
- One nostril more blocked than the other
- Can make sinus problems worse
- May contribute to nosebleeds

## Smell Disorders

**Anosmia:**
- Complete loss of smell
- Can be caused by nasal polyps, sinus infections, head injuries, viral infections, aging

**Hyposmia:**
- Reduced sense of smell
- Common with colds, allergies, and sinus infections

**Dysosmia:**
- Distorted sense of smell
- Things smell different than they should`,
      keyTerms: [
        { term: 'rhinitis', definition: 'Inflammation of the lining of the nose causing sneezing, congestion, and runny nose', pronunciation: 'rye-NYE-tis' },
        { term: 'sinusitis', definition: 'Inflammation or infection of the sinuses causing facial pain and congestion', pronunciation: 'sine-yoo-SYE-tis' },
        { term: 'epistaxis', definition: 'The medical term for a nosebleed', pronunciation: 'ep-ih-STAK-sis' },
        { term: 'nasal polyps', definition: 'Noncancerous growths in the nose that can block airflow and reduce smell' },
        { term: 'septal deviation', definition: 'When the wall between the nostrils is shifted to one side' },
        { term: 'anosmia', definition: 'Complete loss of the sense of smell', pronunciation: 'an-OZ-mee-uh' },
        { term: 'postnasal drip', definition: 'Mucus dripping down the back of your throat from your nose' },
      ],
      analogies: [
        'Nasal polyps are like little grapes growing in your nose that block the airflow.',
        'A deviated septum is like a crooked wall in a hallway - it makes it hard for traffic (air) to pass through.',
      ],
      patientCounselingPoints: [
        'Most nosebleeds can be treated at home by pinching the soft part of the nose for 10 minutes.',
        'Saline nasal sprays are safe for regular use and help keep nasal passages moist.',
        'If you have allergies, avoiding triggers and using allergy medications can prevent sinus problems.',
        'See a doctor if you have frequent sinus infections or if symptoms last more than 10 days.',
      ],
    },

    3: {
      level: 3,
      summary: 'Rhinologic disorders encompass a spectrum of conditions affecting the nasal cavity and paranasal sinuses, including inflammatory diseases like allergic and non-allergic rhinitis, acute and chronic rhinosinusitis, nasal polyposis, epistaxis, and structural abnormalities. These conditions require systematic evaluation and evidence-based management approaches.',
      explanation: `## Rhinitis

**Allergic Rhinitis Pathophysiology:**
- IgE-mediated hypersensitivity reaction
- Allergen exposure triggers mast cell degranulation
- Release of histamine, leukotrienes, prostaglandins
- Early phase: Sneezing, itching, rhinorrhea within minutes
- Late phase: Nasal congestion 4-8 hours later

**Classification:**
- Seasonal (intermittent): Pollens (tree, grass, weed)
- Perennial (persistent): Dust mites, pet dander, mold, cockroach allergens
- Severity: Mild (sleep/activities unaffected) vs moderate-severe

**Diagnosis:**
- History: Atopy, triggers, symptom patterns, environmental exposures
- Physical exam: Turbinate edema, pale/blue mucosa, allergic shiners
- Allergy testing: Skin prick testing or specific IgE (RAST)
- Nasal cytology: Eosinophils suggest allergic rhinitis

**Treatment - Stepwise Approach:**
1. Allergen avoidance (primary intervention)
2. Second-generation oral antihistamines (loratadine, cetirizine, fexofenadine)
3. Intranasal corticosteroids (first-line for moderate-severe disease)
4. Intranasal antihistamines (azelastine, olopatadine)
5. Leukotriene receptor antagonists (montelukast)
6. Nasal saline irrigation
7. Immunotherapy (subcutaneous or sublingual) for refractory cases

**Non-Allergic Rhinitis:**
- Vasomotor rhinitis: Autonomic imbalance, triggered by environmental changes
- Hormonal: Pregnancy, hypothyroidism, oral contraceptives
- Drug-induced: Topical decongestant overuse (rhinitis medicamentosa), alpha blockers, beta blockers
- Occupational: Irritants like chemicals, dust, fumes

## Rhinosinusitis

**Anatomy of Paranasal Sinuses:**
- Maxillary: Largest, below eyes, drains into middle meatus
- Ethmoid: Between eyes, multiple air cells, drains into middle/superior meatus
- Frontal: Above eyes, drains into middle meatus
- Sphenoid: Deep behind ethmoid, drains into sphenoethmoidal recess

**Acute Bacterial Rhinosinusitis (ABRS):**
- Usually follows viral upper respiratory infection (0.5-2% bacterial superinfection)
- Typical pathogens: Streptococcus pneumoniae, Haemophilus influenzae, Moraxella catarrhalis
- Diagnosis: Symptoms >10 days without improvement OR severe symptoms OR double sickening (worsening after initial improvement)
- Facial pain, purulent nasal discharge, nasal obstruction

**Chronic Rhinosinusitis (CRS):**
- Symptoms >12 weeks with specific findings
- Two major OR one major + two minor criteria required
- Major: Purulent discharge, nasal obstruction, facial pain/pressure, decreased smell
- Minor: Headache, fever, halitosis, dental pain, cough, ear pain

**CRS Subtypes:**
- CRS with nasal polyps (CRSwNP): Th2 inflammation, associated with asthma, aspirin sensitivity
- CRS without nasal polyps (CRSsNP): Th1 inflammation, often associated with anatomical issues

**Complications of Acute Sinusitis:**
- Orbital: Preseptal cellulitis, orbital cellulitis, subperiosteal abscess, orbital abscess, cavernous sinus thrombosis
- Intracranial: Meningitis, epidural abscess, subdural empyema, brain abscess
- Osseous: Osteomyelitis (especially frontal bone - Pott puffy tumor)

## Epistaxis

**Nasal Vascular Anatomy:**
- Kiesselbach's plexus (Little's area): Anterior septal location where most nosebleeds occur
- Woodruff's plexus: Posterior septal location, source of posterior bleeds

**Causes:**
- Local: Trauma, dry air, deviated septum, irritants, tumors, foreign bodies
- Systemic: Anticoagulants, antiplatelets, coagulopathies, liver disease, hypertension
- Iatrogenic: Nasal surgery, nasal cannula, repeated nasal sprays

**Management:**
- Direct pressure: Squeeze soft part of nose against septum for 10-15 minutes
- Position: Upright, leaning forward (to prevent swallowing blood)
- Topical vasoconstrictors: Oxymetazoline, phenylephrine
- Nasal packing: Anterior (gauze, balloon, tampon) or posterior (Foley, specialized packs)
- Cautery: Chemical (silver nitrate) or electrical for visible vessels
- Embolization or surgical ligation for refractory cases

## Nasal Polyps

**Pathophysiology:**
- Chronic inflammation causing edematous masses of sinonasal mucosa
- Associated with eosinophilic infiltration
- Common findings: CRSwNP, aspirin-exacerbated respiratory disease (AERD), cystic fibrosis

**Clinical Presentation:**
- Nasal obstruction (most common)
- Decreased or loss of smell (hyposmia/anosmia)
- Postnasal drip, rhinorrhea
- Facial pressure/headache
- Associated conditions: Asthma, ASA triad (polyps, asthma, aspirin sensitivity)

**Grading Systems:**
- Endoscopic appearance (0-4 scale)
- LM grading (left/right, each scored 0-3)
- Provides objective measure of polyp burden

**Treatment:**
- Intranasal corticosteroids: First-line, can shrink small polyps
- Oral corticosteroids: For moderate-severe polyps, short courses
- Surgical: Endoscopic sinus surgery (ESS) for medical failure
- Biologics: Dupilumab, omalizumab, mepolizumab for recalcitrant CRSwNP

## Nasal Septal Deviation

**Etiology:**
- Developmental: Asymmetric facial growth
- Traumatic: Nasal fractures, birth trauma

**Clinical Impact:**
- Nasal obstruction, often asymmetric
- Contributing factor to sinusitis (middle meatus obstruction)
- May interfere with nasal ventilation and humidification

**Management:**
- Medical: Nasal steroids, decongestants for symptom relief
- Surgical: Septoplasty for symptomatic patients not responding to medical therapy

## Olfactory Disorders

**Assessment:**
- UPSIT (University of Pennsylvania Smell Identification Test)
- Sniffin' Sticks test
- Threshold, discrimination, and identification testing

**Causes:**
- Conductive: Polyps, septal deviation, rhinitis (reversible)
- Sensorineural: Viral, head trauma, neurodegenerative (often permanent)
- Congenital: Kallmann syndrome (hypogonadotropic hypogonadism with anosmia)

**Treatment:**
- Olfactory training: Repeated exposure to odors
- Treat underlying cause (polyps, inflammation)
- Limited treatment options for sensorineural loss`,
      keyTerms: [
        { term: 'allergic rhinitis', definition: 'IgE-mediated nasal inflammation triggered by allergen exposure' },
        { term: 'Kiesselbach\'s plexus', definition: 'Vascular plexus on anterior nasal septum, most common site of nosebleeds', pronunciation: 'KEE-sel-baks' },
        { term: 'rhinosinusitis', definition: 'Inflammation of nasal cavity and paranasal sinuses; preferred term over sinusitis alone' },
        { term: 'nasal polyps', definition: 'Benign inflammatory growths of sinonasal mucosa, associated with chronic inflammation' },
        { term: 'septoplasty', definition: 'Surgical correction of deviated nasal septum' },
        { term: 'endoscopic sinus surgery', definition: 'Minimally invasive surgery using endoscope to open sinuses and remove disease' },
        { term: 'aspirin-exacerbated respiratory disease', definition: 'Triad of asthma, nasal polyps, and aspirin sensitivity; also called Samter\'s triad' },
      ],
      clinicalNotes: `Acute bacterial rhinosinusitis should be treated with amoxicillin-clavulanate as first-line therapy to cover resistant organisms. CRSwNP demonstrates a Type 2 inflammatory phenotype with eosinophilia, distinguishing it from CRSsNP. Topical decongestants (oxymetazoline) should never be used more than 3 days due to risk of rhinitis medicamentosa.`,
      patientCounselingPoints: [
        'Nasal saline irrigation is one of the most effective treatments for both acute and chronic sinus problems.',
        'Topical nasal steroids are safe for long-term use and are the mainstay of treatment for chronic nasal inflammation.',
        'Allergen avoidance is the first-line treatment for allergic rhinitis but is often difficult to achieve completely.',
        'If you have recurrent sinus infections, consider evaluation for anatomical factors or immune deficiency.',
      ],
    },

    4: {
      level: 4,
      summary: 'Rhinologic disorders involve complex interactions between anatomical structures, inflammatory pathways, microbiome influences, and systemic conditions. Understanding these pathophysiological mechanisms, from osteomeatal complex obstruction to Type 2 inflammation, guides targeted therapeutic interventions.',
      explanation: `## Nasal and Sinus Physiology

**Nasal Cycle:**
- Congestion-decongestion cycle alternating between nasal sides
- Controlled by autonomic nervous system
- Duration: 2-7 hours per side
- Autonomic modulation: Sympathetic causes decongestion, parasympathetic causes congestion
- Total nasal resistance remains relatively constant despite cycle

**Nasal Airflow Resistance:**
- Nasal airway accounts for ~50% of total airway resistance
- Laminar vs turbulent flow regions
- Nasal valve: Narrowest point, major site of resistance
- Turbinates: Increase surface area for conditioning and flow resistance

**Mucociliary Clearance:**
- Ciliary beat frequency: 8-15 Hz
- Mucus layer: Sol layer (periciliary) and gel layer (transport)
- Mucus transport: 5-10 mm/minute toward nasopharynx
- Optimal temperature and humidity required for function
- Impaired by: Smoking, dry air, infection, certain medications

**Sinus Ventilation and Drainage:**
- Ostia size varies: Maxillary (small), sphenoid (large)
- Gravity dependent drainage patterns
- Gas exchange through ostia: Nitrogen washout theory vs gas diffusion theory
- Ostial obstruction leads to hypoxia, acidosis, ciliary dysfunction

## Allergic Rhinitis Pathogenesis

**Sensitization Phase:**
- Allergen presentation by dendritic cells to T cells
- Th2 differentiation with IL-4, IL-5, IL-13 production
- B cell class switching to IgE production
- IgE binding to FcεRI receptors on mast cells and basophils

**Effector Phase:**
- Re-exposure causes cross-linking of mast cell-bound IgE
- Immediate phase: Mast cell degranulation (histamine, tryptase, chymase, prostaglandin D2, leukotriene C4)
- Late phase: Recruitment of eosinophils, basophils, Th2 cells
- Chronic inflammation: Tissue remodeling, hyperresponsiveness

**Local Allergic Rhinitis:**
- Negative systemic allergy testing but positive nasal allergen challenge
- Local IgE production in nasal mucosa
- May explain some "non-allergic" rhinitis cases

**United Airway Concept:**
- Nasal and lower airway inflammation linked
- Allergic rhinitis: Risk factor for asthma development
- Treating allergic rhinitis may improve asthma control

## Chronic Rhinosinusitis Pathogenesis

**Inflammatory Endotypes:**
- Type 2 (Th2): CRSwNP, eosinophils, IL-4, IL-5, IL-13, IgE
- Non-Type 2: CRSsNP, neutrophils, IFN-γ, IL-17
- Mixed: Features of both types

**CRSwNP Pathophysiology:**
- Epithelial barrier dysfunction with increased permeability
- Staphylococcus aureus enterotoxins act as superantigens
- Polyclonal IgE production
- Tissue eosinophilia: IL-5 driven survival and recruitment
- Basal cell hyperplasia and goblet cell metaplasia
- Extracellular matrix remodeling with edema

**CRSsNP Pathophysiology:**
- Th1/Th17 mediated inflammation
- Neutrophil predominance
- Fibrosis and osteitis more prominent
- Associated with anatomical variants or biofilms

**Biofilms in CRS:**
- Bacterial communities in extracellular matrix
- Resistant to antibiotics and host defenses
- Found in up to 50% of CRS patients undergoing revision surgery
- Staphylococcus aureus and Pseudomonas aeruginosa common

**Fungal Rhinosinusitis:**
- Allergic fungal sinusitis: IgE-mediated, thick allergic mucin
- Chronic indolent: Invasive in immunocompetent but slowly progressive
- Acute invasive: Aggressive, immunocompromised patients
- Saprophytic: Fungal debris in sinus without invasion

## Olfactory Dysfunction Mechanisms

**Conductive Loss:**
- Airflow obstruction preventing odorants reaching olfactory cleft
- Polyps, septal deviation, turbinate hypertrophy
- Often reversible with treatment

**Sensorineural Loss:**
- Olfactory epithelium damage: Viral, toxic, inflammatory
- Olfactory nerve injury: Head trauma, surgery
- Central pathways: Neurodegenerative disease

**Post-viral Olfactory Loss:**
- SARS-CoV-2: Support cell infection causing secondary neuronal damage
- Other viruses: Influenza, parainfluenza, rhinovirus
- Recovery: Variable, may take months or be permanent

**COVID-19 Related Olfactory Loss:**
- Sudden onset, often severe
- May occur without other respiratory symptoms
- Recovery in most but not all patients
- Olfactory training recommended

## Nasal Polyps: Advanced Considerations

**Histopathology:**
- Edematous stroma with loose connective tissue
- Inflammatory cell infiltrate (eosinophils, lymphocytes, plasma cells)
- Thickened basement membrane
- Pseudostratified columnar epithelium
- Glandular hyperplasia

**Samter's Triad (AERD):**
- Aspirin-exacerbated respiratory disease
- Components: Asthma, nasal polyps, aspirin/NSAID sensitivity
- Pathogenesis: COX-1 inhibition causes shunting to leukotriene pathway
- Leukotriene overproduction: LTC4, LTD4, LTE4
- Treatment: Leukotriene modifiers, aspirin desensitization, surgery

**Biologic Therapies for CRSwNP:**
- Dupilumab: IL-4 receptor alpha antagonist (blocks IL-4 and IL-13)
- Omalizumab: Anti-IgE
- Mepolizumab: Anti-IL-5
- Benralizumab: Anti-IL-5 receptor

## Surgical Anatomy and Approaches

**Osteomeatal Complex:**
- Critical region for sinus ventilation and drainage
- Components: Uncinate process, ethmoid bulla, hiatus semilunaris, maxillary ostium
- Obstruction leads to maxillary, anterior ethmoid, and frontal sinus disease

**Functional Endoscopic Sinus Surgery (FESS) Principles:**
- Remove disease at osteomeatal complex
- Restore natural sinus drainage patterns
- Preserve mucosa and physiological function
- Create adequate sinus openings

**Surgical Staging:**
- Maxillary antrostomy: Remove uncinate, open maxillary ostium
- Anterior ethmoidectomy: Remove ethmoid bulla and anterior cells
- Posterior ethmoidectomy: Open posterior cells to skull base
- Sphenoidotomy: Open sphenoid sinus
- Draf procedures: Frontal sinusotomy (I-III)

**Complications of Endoscopic Sinus Surgery:**
- Orbital: Hemorrhage, hematoma, optic nerve injury, extraocular muscle injury
- Intracranial: CSF leak, meningitis, brain injury
- Vascular: Anterior/posterior ethmoid artery injury
- Nasolacrimal duct injury: Epiphora

## Septoplasty and Turbinate Surgery

**Septoplasty Technique:**
- Mucosal flap elevation
- Cartilage and bone removal or reshaping
- Septal cartilage preservation where possible
- Reconstruction to maintain support

**Turbinate Hypertrophy Management:**
- Medical: Nasal steroids, antihistamines first
- Surgical: Turbinate reduction when medical fails
- Techniques: Radiofrequency ablation, submucosal resection, outfracture, turbinoplasty
- Risk: Empty nose syndrome with over-resection`,
      keyTerms: [
        { term: 'nasal cycle', definition: 'Physiologic alternating congestion and decongestion between nasal sides mediated by autonomic nervous system' },
        { term: 'osteomeatal complex', definition: 'Key anatomic region for sinus drainage; includes uncinate process, ethmoid bulla, and maxillary ostium' },
        { term: 'Type 2 inflammation', definition: 'Th2-mediated immune response characterized by eosinophilia, IgE production, and IL-4/5/13' },
        { term: 'biofilm', definition: 'Structured bacterial community encased in extracellular matrix, resistant to immune clearance and antibiotics' },
        { term: 'empty nose syndrome', definition: 'Iatrogenic condition with paradoxical nasal congestion despite patent airway from turbinate over-resection' },
        { term: 'AERD', definition: 'Aspirin-exacerbated respiratory disease; triad of asthma, nasal polyps, and aspirin sensitivity' },
        { term: 'mucociliary clearance', definition: 'Cilia-driven transport of mucus from sinuses and nasal cavity to nasopharynx' },
      ],
      clinicalNotes: `The osteomeatal complex is the critical anatomical bottleneck where anterior ethmoid, maxillary, and frontal sinuses drain. Obstruction at this site is the final common pathway in most cases of chronic sinusitis. The COVID-19 pandemic has uniquely highlighted post-viral olfactory dysfunction, with SARS-CoV-2 having tropism for sustentacular cells of the olfactory epithelium rather than direct neuronal infection.`,
    },

    5: {
      level: 5,
      summary: 'Contemporary rhinology practice integrates evidence-based guidelines, advanced endoscopic techniques, biologic therapies, and personalized medicine approaches. Optimal management requires understanding of inflammatory endotypes, comorbidity management, and utilization of validated outcome measures.',
      explanation: `## Clinical Practice Guidelines (AAO-HNS)

**Adult Sinusitis (2015 Update):**
- Diagnosis based on symptom duration and pattern
- Acute bacterial rhinosinusitis: Persistent symptoms >10 days without improvement OR severe symptoms OR double sickening
- Imaging not recommended for uncomplicated ABRS
- Amoxicillin-clavulanate first-line (covers resistant pathogens)
- Symptomatic relief: Analgesics, topical nasal steroids, nasal saline irrigation
- Re-evaluate if no improvement within 7 days

**Chronic Rhinosinusitis (Selected Points):**
- Diagnosis requires ≥12 weeks symptoms plus objective findings
- Topical nasal steroids recommended for all patients
- Nasal saline irrigation strongly recommended
- Long-term macrolide antibiotics may be considered for non-Type 2 CRS
- Surgery indicated for failed medical management or complications

**Allergic Rhinitis (AR) Guidelines:**
- Intranasal corticosteroids most effective monotherapy
- Second-generation antihistamines for mild disease or as add-on
- Immunotherapy for moderate-severe disease not controlled with pharmacotherapy
- Allergen avoidance recommended but evidence limited

**Nosebleed (Epistaxis) Guideline (2020):**
- Most nosebleeds are anterior and self-limited
- Topical vasoconstrictors and direct pressure as first-line
- Nasal packing if direct pressure fails
- Cautery for visible bleeding vessels
- Embolization or surgery for refractory cases

## Diagnostic Advances

**Nasal Endoscopy:**
- Essential for CRS diagnosis and polyp assessment
- Grading systems: Lund-Kennedy, Lildholdt
- Office-based procedure with topical anesthesia
- Allows visualization of osteomeatal complex, sphenoethmoidal recess
- Detection of structural abnormalities, tumors, cerebrospinal fluid leaks

**Imaging:**
- Sinus CT: Gold standard for bony anatomy and sinus opacification
- MRI: Soft tissue characterization, distinguishing polyps from secretions
- Contrast-enhanced: Suspected fungal infection, tumor extension
- Protocol: Cone beam CT for intraoperative guidance, reduced radiation

**Olfactory Testing:**
- UPSIT (University of Pennsylvania Smell Identification Test)
- Sniffin' Sticks: TDI score (threshold, discrimination, identification)
- Threshold: Detection limit
- Discrimination: Distinguishing between odors
- Identification: Naming specific odors

**Allergy Testing:**
- Skin prick testing: Most sensitive, immediate results
- Intradermal testing: For specific allergens with negative prick testing
- Specific IgE (sIgE): In vitro testing, useful when skin testing contraindicated
- Component resolved diagnostics: Identifies specific sensitizing proteins

## Therapeutic Advances

**Intranasal Corticosteroids (INS):**
- First-line for allergic rhinitis and CRS
- Multiple formulations: Mometasone, fluticasone, budesonide, triamcinolone
- Systemic absorption minimal with proper technique
- Onset: 12-24 hours for symptom relief, 1-2 weeks for full effect
- Safe for long-term use with monitoring

**Biologic Therapies for CRSwNP:**

| Biologic | Target | Indications | Outcomes |
|----------|--------|-------------|----------|
| Dupilumab | IL-4Rα | Severe CRSwNP | Polyp size ↓, smell ↑, QoL ↑ |
| Omalizumab | IgE | Moderate-severe CRSwNP | Polyp score ↓, symptoms ↓ |
| Mepolizumab | IL-5 | Severe eosinophilic CRSwNP | Polyp size ↓, oral steroid sparing |
| Benralizumab | IL-5R | Eosinophilic CRSwNP | Under investigation |

**Aspirin Desensitization (AERD):**
- Protocol: Graded aspirin challenge leading to tolerance
- Maintenance: Daily aspirin 325-650mg BID
- Outcomes: Reduced polyp recurrence, improved asthma control, decreased steroid need
- Indications: AERD with recurrent polyps despite surgery

**Nasal Irrigation:**
- Evidence for large volume, low pressure irrigation
- Solutions: Isotonic vs hypertonic (data mixed)
- Delivery: Squeeze bottle, neti pot, powered devices
- Safety: Use distilled, boiled, or filtered water
- Additives: Xylitol, baby shampoo (limited evidence)

## Surgical Management

**Endoscopic Sinus Surgery (ESS) Indications:**
- Failed maximal medical therapy (typically 3+ months)
- Complications of sinusitis
- Suspected neoplasm
- Anatomic abnormalities contributing to disease
- Adjunct to other surgeries (e.g., dacryocystorhinostomy, orbital decompression)

**Extended Endoscopic Approaches:**
- Draf IIa/IIb/III: Frontal sinus drill-out
- Endoscopic modified Lothrop: Median frontal sinus drainage
- Transpterygoid approaches: Pterygopalatine and infratemporal fossa access
- Endoscopic skull base: Cribriform plate, planum sphenoidale, clivus
- Orbital decompression: Thyroid eye disease

**Image-Guided Surgery:**
- CT navigation in complex cases
- Indications: Revision surgery, distorted anatomy, skull base, frontal/sphenoid disease
- Improves safety and reduces complications

**Postoperative Care:**
- Debridement schedule: Weekly initially, then as needed
- Nasal saline irrigation starting day 1
- Topical steroids: Critical for preventing recurrence
- Endoscopic surveillance for polyp regrowth

## Outcome Measures

**Patient-Reported Outcome Measures:**
- SNOT-22 (22-item Sino-Nasal Outcome Test): Most widely used
- RSDI (Rhinosinusitis Disability Index)
- CSS (Chronic Sinusitis Survey)
- NOSE (Nasal Obstruction Symptom Evaluation)

**Objective Measures:**
- Endoscopic grading: Lund-Kennedy, polyp scoring
- CT scoring: Lund-Mackay system
- Olfaction testing
- Nasal peak inspiratory flow

## Comorbidities and Systemic Associations

**Asthma and Sinusitis:**
- Up to 50% of severe asthmatics have CRS
- Treating CRS improves asthma outcomes
- Shared inflammatory pathways
- Unified airway concept

**Primary Ciliary Dyskinesia:**
- Congenital ciliary dysfunction
- Chronic sino-pulmonary infections
- Kartagener syndrome (situs inversus, sinusitis, bronchiectasis)
- Diagnosis: Electron microscopy, genetic testing

**Cystic Fibrosis:**
- CFTR mutation causing thick secretions
- Nasal polyps common in pediatric CF
- Pan-sinus disease characteristic
- Chronic infection with Pseudomonas and Staph aureus

**Immunodeficiency:**
- Humoral deficiencies: CVID, IgG subclass deficiency, specific antibody deficiency
- Recurrent/chronic sinusitis as presenting feature
- Evaluation: Immunoglobulin levels, vaccine response testing
- Treatment: Immunoglobulin replacement if indicated

**Granulomatosis with Polyangiitis:**
- Necrotizing granulomatous inflammation
- Sinus involvement common (ulcerations, septal perforation)
- Pulmonary and renal involvement
- ANCA positive (c-ANCA, PR3-ANCA)
- Biopsy required for diagnosis

## Special Populations

**Pediatric Rhinosinusitis:**
- Diagnosis challenging: Upper respiratory infection symptoms overlap
- Adenoiditis as contributing factor
- Adenoidectomy often first-line surgical intervention
- Maxillary irrigation less commonly performed

**Pregnancy:**
- Pregnancy rhinitis: Hormonal edema, resolves postpartum
- Medication safety: Category B antihistamines, topical steroids generally safe
- Imaging: MRI preferred if needed, avoid CT radiation

**Geriatric:**
- Atypical presentations common
- Multiple comorbidities impact treatment choices
- Polypharmacy considerations
- Reduced olfactory function with age common

**Anticoagulated Patients:**
- Epistaxis management challenges
- Reversal of anticoagulation may be necessary for severe bleeds
- Topical therapies preferred over systemic when possible

## Quality and Safety

**Preoperative Optimization:**
- Smoking cessation
- Optimize comorbidities (asthma, diabetes)
- Preoperative imaging review
- Patient education and expectations

**Informed Consent:**
- Risks: Bleeding, CSF leak, orbital injury, vision loss, intracranial injury
- Benefits: Symptom improvement, reduced infections, improved smell
- Alternatives: Continued medical therapy
- Realistic expectations: Control vs cure

**Surgical Outcomes:**
- Symptom improvement: 80-90% success rate
- Revision surgery rates: 10-30% depending on indication
- Complication rates: 1-5% overall, higher for revision/extended surgery
- QoL improvements: SNOT-22 MCID 8.9 points

**Antibiotic Stewardship:**
- Limit antibiotics to confirmed bacterial disease
- Duration: 5-10 days for uncomplicated ABRS
- Culture-directed therapy for treatment failures
- Avoid prophylactic antibiotics for surgery`,
      keyTerms: [
        { term: 'SNOT-22', definition: '22-item Sino-Nasal Outcome Test, validated patient-reported outcome measure for CRS' },
        { term: 'Lund-Mackay score', definition: 'CT scoring system for sinus opacification, each sinus scored 0-2, total 0-12' },
        { term: 'Draf procedure', definition: 'Frontal sinusotomy classification (I-III) based on extent of frontal sinus drainage created' },
        { term: 'image-guided surgery', definition: 'Use of CT navigation for real-time localization during endoscopic sinus surgery' },
        { term: 'primary ciliary dyskinesia', definition: 'Genetic disorder of ciliary structure/function causing chronic sino-pulmonary infections' },
        { term: 'Kartagener syndrome', definition: 'PCD with situs inversus, sinusitis, and bronchiectaxis' },
        { term: 'aspirin desensitization', definition: 'Graded aspirin challenge to induce tolerance in AERD, reduces polyp recurrence' },
      ],
      clinicalNotes: `AAO-HNS 2015 Sinusitis Guideline Key Recommendations:

Strong Recommendations:
- Clinicians should distinguish presumed ABRS from acute rhinosinusitis caused by viral upper respiratory infections
- Clinicians should confirm ABRS diagnosis with 3 days of worsening symptoms after initial improvement OR symptoms >10 days

Recommendations:
- Amoxicillin with or without clavulanate as first-line
- Reserved antibiotics for patients with acute bacterial rhinosinusitis
- Symptomatic relief with analgesics, topical steroids, nasal saline irrigation

Against:
- Routine imaging for uncomplicated ABRS
- Adjunctive therapies (mucolytics, antihistamines, decongestants)

For Chronic Rhinosinusitis:
- Diagnosis requires ≥12 weeks symptoms with 2+ major OR 1 major + 2 minor criteria
- Topical nasal steroids recommended
- Nasal saline irrigation recommended
- Surgery for failed medical management`,
    },
  },

  media: [
    {
      id: 'nasal-anatomy-diagram',
      type: 'diagram',
      filename: 'nasal-anatomy-overview.svg',
      title: 'Nasal and Sinus Anatomy',
      description: 'Anatomy of nasal cavity and paranasal sinuses',
    },
    {
      id: 'osteo-meatal-complex',
      type: 'diagram',
      filename: 'osteo-meatal-complex-endo-view.svg',
      title: 'Osteomeatal Complex Endoscopic View',
      description: 'Endoscopic view of osteomeatal complex anatomy',
    },
    {
      id: 'sinusitis-ct-comparison',
      type: 'diagram',
      filename: 'normal-vs-sinusitis-ct.svg',
      title: 'Normal vs Sinusitis CT',
      description: 'CT comparison of normal sinuses and sinusitis',
    },
  ],

  citations: [
    {
      id: 'aao-hns-sinusitis-guideline-2015',
      type: 'article',
      title: 'Clinical Practice Guideline: Adult Sinusitis (2015)',
      source: 'Otolaryngology-Head and Neck Surgery',
      authors: ['Rosenfeld, R.M.', 'Piccirillo, J.F.', 'Chandrasekhar, S.S.', 'et al.'],
    },
    {
      id: 'aao-hns-epistaxis-guideline-2020',
      type: 'article',
      title: 'Clinical Practice Guideline: Nosebleed (Epistaxis) (2020)',
      source: 'Otolaryngology-Head and Neck Surgery',
      authors: ['McGarry, G.W.', 'Ojuri, H.', 'Milas, M.', 'et al.'],
    },
    {
      id: 'eaaci-ar-guideline',
      type: 'article',
      title: 'EAACI Guidelines on Allergic Rhinitis',
      source: 'Allergy',
      authors: ['Brozek, J.L.', 'Bousquet, J.', 'Agache, I.', 'et al.'],
    },
    {
      id: 'cummings-rhinology',
      type: 'textbook',
      title: 'Rhinology and Sinus Disease',
      source: 'Cummings Otolaryngology: Head and Neck Surgery',
      chapter: 'Section II',
    },
    {
      id: 'epos-2020',
      type: 'article',
      title: 'EPOS 2020: European Position Paper on Rhinosinusitis and Nasal Polyps',
      source: 'Rhinology',
      authors: ['Fokkens, W.J.', 'Lund, V.J.', 'Hopkins, C.', 'et al.'],
    },
  ],

  crossReferences: [
    { targetId: 'ent-ear', targetType: 'topic', relationship: 'sibling', label: 'Ear Disorders' },
    { targetId: 'ent-throat', targetType: 'topic', relationship: 'sibling', label: 'Throat Disorders' },
    { targetId: 'ent-allergy', targetType: 'topic', relationship: 'related', label: 'ENT Allergy' },
    { targetId: 'respiratory-upper', targetType: 'system', relationship: 'related', label: 'Upper Respiratory System' },
    { targetId: 'immune-allergy', targetType: 'topic', relationship: 'related', label: 'Allergic Disorders' },
  ],

  tags: {
    systems: ['respiratory', 'upper-airway'],
    structures: ['FMA:46690', 'FMA:52740', 'FMA:46689'],
    topics: ['rhinology', 'sinusitis', 'allergic-rhinitis', 'epistaxis', 'nasal-polyps'],
    keywords: ['rhinitis', 'sinusitis', 'epistaxis', 'nasal polyps', 'septal deviation', 'endoscopic sinus surgery'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['surgery', 'family-medicine', 'emergency'],
    },
  },

  createdAt: '2026-01-25T00:00:00.000Z',
  updatedAt: '2026-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default noseContent;
