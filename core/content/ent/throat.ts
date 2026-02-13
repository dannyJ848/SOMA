import { EducationalContent } from '../types';

export const throatContent: EducationalContent = {
  id: 'ent-throat',
  type: 'topic',
  name: 'Throat Disorders',
  alternateNames: ['Pharyngology', 'Oropharyngeal Disorders', 'Tonsillar Disease'],

  levels: {
    1: {
      level: 1,
      summary: 'Your throat is the passage that connects your mouth to your esophagus and windpipe. Throat problems like sore throat, tonsillitis, and difficulty swallowing are very common.',
      explanation: `Your throat does important work every day. It helps you swallow food and liquids, lets air pass through to your lungs, and contains your voice box. When your throat hurts or is infected, it can make eating, drinking, and talking uncomfortable.

**Common Throat Problems:**

1. **Sore Throat (Pharyngitis)** - Pain, scratchiness, or irritation in the throat that often gets worse when swallowing. Usually caused by viruses but can be from bacteria.

2. **Tonsillitis** - Inflammation of the tonsils, the two oval-shaped pads of tissue at the back of your throat. Your tonsils help fight infection but can get infected themselves.

3. **Strep Throat** - A bacterial throat infection caused by Streptococcus bacteria. Needs antibiotic treatment.

4. **Difficulty Swallowing (Dysphagia)** - Feeling like food is stuck in your throat or having pain when swallowing.

5. **Snoring and Sleep Problems** - Throat tissues can relax and block your airway during sleep, causing snoring or sleep apnea.

**Keeping Your Throat Healthy:**
- Wash your hands frequently to avoid germs
- Stay hydrated
- Avoid sharing cups, utensils, or toothbrushes
- Don't smoke or breathe secondhand smoke

**When to See a Doctor:**
- Sore throat lasting more than a week
- Difficulty breathing or swallowing
- Blood in saliva or phlegm
- Lump in the neck
- Hoarseness lasting more than 2 weeks`,
      keyTerms: [
        { term: 'pharyngitis', definition: 'The medical term for a sore throat or inflammation of the throat' },
        { term: 'tonsils', definition: 'Two small pads of tissue at the back of the throat that help fight infections' },
        { term: 'strep throat', definition: 'A sore throat caused by Streptococcus bacteria that needs antibiotics' },
        { term: 'swallowing', definition: 'Moving food or drink from your mouth through your throat to your stomach' },
        { term: 'sleep apnea', definition: 'When breathing stops and starts during sleep due to blocked airway' },
      ],
      analogies: [
        'Your tonsils are like security guards at the back of your throat - they catch germs before they can go further.',
        'A sore throat is like a sunburn inside your throat - the tissues get red and painful from irritation.',
      ],
      examples: [
        'When you have a cold, you might wake up with a scratchy throat that hurts when you swallow.',
        'Kids with enlarged tonsils may snore loudly or have problems breathing at night.',
      ],
      patientCounselingPoints: [
        'Most sore throats are caused by viruses and get better on their own in about a week.',
        'Warm liquids like tea with honey can soothe a sore throat.',
        'If you have strep throat, finish all your antibiotics even if you feel better.',
        'See a doctor if you have trouble swallowing or breathing.',
      ],
    },

    2: {
      level: 2,
      summary: 'Throat disorders include pharyngitis (sore throat), tonsillitis, peritonsillar abscess, dysphagia (swallowing difficulty), and sleep-disordered breathing. These conditions range from minor viral infections to serious conditions requiring urgent intervention.',
      explanation: `The throat (pharynx) serves as a passageway for air, food, and liquids. Disorders in this region are common and can significantly affect breathing, swallowing, and speaking.

## Pharyngitis (Sore Throat)

**Viral Pharyngitis:**
- Most common cause of sore throat (70-85% of cases)
- Caused by: Common cold viruses, influenza, mononucleosis, COVID-19
- Symptoms: Sore throat, runny nose, cough, hoarseness, mild fever
- Treatment: Symptomatic relief only

**Bacterial Pharyngitis:**
- Group A Streptococcus (Strep throat) most common bacterial cause
- Symptoms: Sudden sore throat, painful swallowing, fever, swollen glands, white patches on tonsils
- Absence of cough and cold symptoms
- Requires antibiotic treatment to prevent complications

**Diagnosis:**
- Rapid strep test: Results in minutes
- Throat culture: More accurate, takes 1-2 days
- Centor criteria helps determine likelihood of strep

## Tonsillitis

**Acute Tonsillitis:**
- Infection of tonsils
- Can be viral or bacterial
- Symptoms: Sore throat, swollen tonsils, white coating, fever, swollen lymph nodes

**Chronic Tonsillitis:**
- Recurrent infections
- Persistent sore throat
- Bad breath
- Tonsil stones (tonsilloliths)

**Tonsillectomy Indications:**
- Frequent tonsil infections (7+ in 1 year, 5+ yearly for 2 years, 3+ yearly for 3 years)
- Large tonsils causing breathing or swallowing problems
- Recurrent peritonsillar abscess
- Suspicion of tonsillar cancer

## Peritonsillar Abscess (Quinsy)

**Description:**
- Collection of pus behind the tonsil
- Complication of untreated tonsillitis
- Medical emergency requiring drainage

**Symptoms:**
- Severe sore throat (usually one side)
- Difficulty swallowing
- Drooling
- Muffled voice (hot potato voice)
- Trismus (difficulty opening mouth)

## Dysphagia (Swallowing Difficulty)

**Types:**
- Oropharyngeal: Problem in mouth or throat
- Esophageal: Problem in food pipe

**Symptoms:**
- Feeling of food getting stuck
- Coughing or choking when swallowing
- Pain when swallowing
- Regurgitation of food
- Weight loss

**Causes:**
- Stroke or neurological disorders
- Muscle disorders
- Narrowing of the throat (strictures)
- Tumors
- GERD (acid reflux)

## Sleep-Disordered Breathing

**Snoring:**
- Noisy breathing during sleep
- Caused by vibration of relaxed throat tissues
- Can be a sign of sleep apnea

**Obstructive Sleep Apnea:**
- Breathing stops repeatedly during sleep
- Throat tissues collapse and block airway
- Causes poor sleep quality and health problems

**Symptoms:**
- Loud snoring
- Pauses in breathing during sleep
- Gasping or choking at night
- Daytime sleepiness
- Morning headache

**Treatment:**
- Weight loss
- Avoiding alcohol before bed
- CPAP machine
- Oral appliances
- Surgery (UPPP, tonsillectomy) in some cases

## Epiglottitis

**Description:**
- Infection of the epiglottis (flap that covers windpipe)
- Medical emergency - can block airway completely

**Symptoms:**
- Severe sore throat
- Difficulty swallowing
- Drooling
- Sitting forward and unable to lie down
- Muffled voice

**Note:** Since Hib vaccine, this is much less common in children but still occurs in adults.

## Other Throat Conditions

**Laryngopharyngeal Reflux (LPR):**
- Acid from stomach comes up to throat
- Causes: Chronic cough, throat clearing, hoarseness, lump in throat sensation
- Similar to GERD but acid reaches higher

**Throat Cancer:**
- Risk factors: Tobacco, alcohol, HPV infection
- Symptoms: Persistent sore throat, difficulty swallowing, lump in neck, voice changes
- Early detection improves outcomes`,
      keyTerms: [
        { term: 'pharyngitis', definition: 'Inflammation of the pharynx causing sore throat', pronunciation: 'far-in-JYE-tis' },
        { term: 'tonsillitis', definition: 'Inflammation of the tonsils', pronunciation: 'ton-sih-LYE-tis' },
        { term: 'strep throat', definition: 'Sore throat caused by Group A Streptococcus bacteria' },
        { term: 'peritonsillar abscess', definition: 'Pocket of pus behind the tonsil, complication of tonsillitis', pronunciation: 'pair-ih-ton-sih-ler' },
        { term: 'dysphagia', definition: 'Difficulty swallowing', pronunciation: 'dis-FAY-jee-uh' },
        { term: 'obstructive sleep apnea', definition: 'Sleep disorder where breathing repeatedly stops due to blocked airway' },
        { term: 'epiglottitis', definition: 'Infection of epiglottis causing airway emergency', pronunciation: 'ep-ih-glah-TYE-tis' },
        { term: 'tonsillectomy', definition: 'Surgical removal of the tonsils', pronunciation: 'ton-sih-LEK-tuh-mee' },
      ],
      analogies: [
        'The epiglottis works like a trapdoor, closing over your windpipe when you swallow so food goes to your stomach.',
        'Peritonsillar abscess is like a pimple behind your tonsil that needs to be drained.',
      ],
      patientCounselingPoints: [
        'Not all sore throats need antibiotics - most are viral and will resolve with supportive care.',
        'If you have recurrent tonsil infections, keep a diary to discuss with your doctor whether tonsillectomy might help.',
        'For snoring or suspected sleep apnea, a sleep study can diagnose the problem and guide treatment.',
        'See a doctor immediately if you have drooling, difficulty breathing, or significant difficulty swallowing.',
      ],
    },

    3: {
      level: 3,
      summary: 'Oropharyngeal disorders encompass a spectrum from common viral pharyngitis to life-threatening airway emergencies. Understanding the anatomy, microbiology, and clinical patterns enables accurate diagnosis and appropriate management of conditions including pharyngitis, tonsillitis, peritonsillar abscess, and sleep-disordered breathing.',
      explanation: `## Pharyngeal Anatomy

**Regions of the Pharynx:**
- Nasopharynx: Behind nasal cavity, contains adenoids
- Oropharynx: Behind oral cavity, contains tonsils and base of tongue
- Hypopharynx: Continuation to larynx and esophagus

**Lymphoid Tissue (Waldeyer's Ring):**
- Pharyngeal tonsil (adenoid)
- Tubal tonsils (around Eustachian tubes)
- Palatine tonsils (tonsils)
- Lingual tonsil (base of tongue)
- Forms protective ring of immune tissue

**Key Structures:**
- Soft palate: Separates nasopharynx from oropharynx
- Uvula: Midline projection from soft palate
- Posterior pharyngeal wall
- Lateral pharyngeal walls
- Piriform recesses: Vallecullae where food collects before swallowing
- Epiglottis: Elastic cartilage guarding laryngeal inlet

## Pharyngitis

**Viral Etiologies:**
- Rhinovirus: Most common, associated with URI symptoms
- Influenza: Sudden onset, body aches, seasonal
- Adenovirus: Conjunctivitis may be present
- Epstein-Barr virus (Mononucleosis): Fatigue, splenomegaly, atypical lymphocytes
- Cytomegalovirus: Similar to mono but heterophile antibody negative
- Herpes simplex: Vesicles, painful
- HIV: Acute retroviral syndrome
- SARS-CoV-2: Wide range of presentations, loss of taste/smell

**Bacterial Etiologies:**
- Group A Streptococcus (GAS): Most common bacterial cause
- Group C and G Streptococcus: Similar presentation to GAS
- Arcanobacterium haemolyticum: Adolescent rash
- Gonococcus: Pharyngeal gonorrhea, often asymptomatic
- Corynebacterium diphtheriae: Rare due to vaccination, pseudomembrane
- Fusobacterium necrophorum: Lemierre syndrome (septic thrombophlebitis)

**Centor Criteria (Modified) for GAS:**
| Criteria | Points |
|----------|--------|
| Fever | 1 |
| Absence of cough | 1 |
| Swollen/tender anterior cervical nodes | 1 |
| Tonsillar exudate | 1 |
| Age 3-14 years | 1 |
| Age 15-44 years | 0 |
| Age 45+ years | -1 |

Interpretation: 0-1 (no test/treat), 2-3 (rapid test), 4-5 (empiric treatment)

**Complications of Untreated GAS:**
- Suppurative: Peritonsillar abscess, retropharyngeal abscess, suppurative cervical lymphadenitis
- Nonsuppurative: Acute rheumatic fever, post-streptococcal glomerulonephritis

## Tonsillitis

**Diagnosis:**
- Clinical: Exudative tonsillitis with lymphadenopathy
- Throat culture: Gold standard for GAS diagnosis
- Rapid antigen detection test (RADT): High specificity but sensitivity ~70-90%
- If negative RADT and high suspicion: Confirm with culture

**Recurrent Acute Tonsillitis:**
- Definition: Multiple episodes per year
- Paradise criteria for tonsillectomy: 7+ episodes in 1 year, 5+/year for 2 years, 3+/year for 3 years
- Documentation of each episode important
- Considerations: Severity, missed school/work, complications

**Chronic Tonsillitis:**
- Persistent sore throat
- Tonsillar hypertrophy
- Tonsilloliths (tonsil stones): Actinomyces, debris accumulation
- Halitosis

**Tonsil Hypertrophy:**
- Common in children
- Can cause upper airway obstruction
- Sleep-disordered breathing
- Speech problems (velopharyngeal insufficiency)
- Cor pulmonale in severe cases

**Tonsil Grading:**
- Grade 0: Tonsils within tonsillar pillars
- Grade 1+: Tonsils just outside pillars
- Grade 2+: Midline
- Grade 3+: Past midline
- Grade 4+: Kissing tonsils

## Peritonsillar Abscess

**Pathogenesis:**
- Progression from tonsillitis to cellulitis to abscess
- Usually unilateral
- Most common deep neck space infection
- Peak incidence: adolescents and young adults

**Clinical Features:**
- Severe odynophagia
- Trismus (difficulty opening mouth due to pterygoid muscle involvement)
- Hot potato voice (muffled, thick)
- Drooling
- Uvular deviation: AWAY from affected side
- Tender cervical lymphadenopathy

**Diagnosis:**
- Clinical diagnosis usually sufficient
- Intraoral ultrasound: Increasingly used
- CT scan: If diagnosis uncertain or complications suspected

**Treatment:**
- Needle aspiration: Diagnostic and therapeutic
- Incision and drainage: More definitive
- Tonsillectomy: In same setting (quinsy tonsillectomy) vs delayed
- Antibiotics: Penicillin +/- metronidazole or clindamycin

## Deep Neck Space Infections

**Peritonsillar Space:**
- Between tonsil and superior constrictor muscle
- Infection: Peritonsillar abscess

**Retropharyngeal Space:**
- Potential space posterior to pharynx
- Important in children (nodes regress by age 4-5)
- Infection: Retropharyngeal abscess
- Danger: Extension to mediastinum

**Lateral Pharyngeal Space:**
- Contains internal carotid, jugular, cranial nerves IX-XII
- Infection: Lateral pharyngeal abscess
- Danger: Vascular compression, thrombosis

## Dysphagia

**Normal Swallowing Phases:**
1. Oral preparatory: Chewing, mixing with saliva
2. Oral propulsive: Tongue propels bolus posterior
3. Pharyngeal: Soft palate elevates, airway protected, bolus moves to esophagus
4. Esophageal: Peristalsis to stomach

**Oropharyngeal Dysphagia:**
- Problem in mouth or throat phase
- Causes: Stroke, Parkinson's, ALS, myasthenia gravis, muscular dystrophy
- Symptoms: Coughing/choking during swallow, nasal regurgitation, wet voice
- Silent aspiration: No cough response

**Esophageal Dysphagia:**
- Problem in esophagus
- Causes: Strictures, rings, webs, tumors, motility disorders
- Symptoms: Food sticking at specific level, regurgitation

**Evaluation:**
- Bedside swallow evaluation: Water test, different consistencies
- Modified barium swallow (videofluoroscopy)
- Fiberoptic endoscopic evaluation of swallowing (FEES)
- Esophagram/Upper GI series
- Esophagogastroduodenoscopy (EGD)
- Manometry: Motility assessment

## Obstructive Sleep Apnea

**Pathophysiology:**
- Upper airway collapse during sleep
- Anatomic factors: Large tonsils, macroglossia, retrognathia, obesity
- Neuromuscular factors: Loss of muscle tone during REM
- Arousal threshold: Brain's response to airway obstruction
- Loop gain: Instability of respiratory control system

**Types:**
- Obstructive: Airway blocked despite effort
- Central: No respiratory effort
- Mixed: Combination

**Diagnosis:**
- Polysomnography (sleep study): Gold standard
- Home sleep apnea testing: For uncomplicated cases
- Apnea-Hypopnea Index (AHI): Events per hour
  - Normal: <5
  - Mild: 5-15
  - Moderate: 15-30
  - Severe: >30

**Treatment:**
- Conservative: Weight loss, positional therapy, avoid alcohol/sedatives
- Positive airway pressure: CPAP first-line for moderate-severe
- Oral appliances: For mild-moderate or CPAP intolerant
- Surgery: UPPP, MMA, tonsillectomy, hypoglossal nerve stimulation
- Tracheostomy: Last resort for severe cases

## Epiglottitis

**Etiology Shift:**
- Pre-Hib vaccine: Haemophilus influenzae type B in children
- Post-Hib vaccine: Adults, diverse pathogens (Strep, Staph, H. influenzae non-type B)

**Clinical Presentation:**
- Toxic appearance
- Severe sore throat
- Odynophagia to point of refusing liquids
- Drooling
- Muffled voice
- Preference for sitting upright, leaning forward (tripod position)
- Distress but quiet (stridor may be absent as airway progressively compromised)

**Imaging:**
- Lateral neck X-ray: Thumb sign (swollen epiglottis)
- CT: If diagnosis uncertain or complications suspected
- CAUTION: Do not agitate patient; airway should be secured in controlled setting

**Management:**
- Airway security: Highest priority, may require intubation or tracheostomy
- Antibiotics: Ceftriaxone + vancomycin or cefuroxime
- ICU admission`,
      keyTerms: [
        { term: 'Waldeyer\'s ring', definition: 'Ring of lymphoid tissue in pharynx including adenoids, palatine tonsils, lingual tonsil, and tubal tonsils' },
        { term: 'Centor criteria', definition: 'Clinical scoring system to estimate probability of Group A Streptococcal pharyngitis' },
        { term: 'peritonsillar abscess', definition: 'Collection of pus between tonsil and superior pharyngeal constrictor' },
        { term: 'retropharyngeal abscess', definition: 'Pus collection in retropharyngeal space, more common in children under 5' },
        { term: 'AHI', definition: 'Apnea-Hypopnea Index; measures sleep apnea severity by events per hour' },
        { term: 'velopharyngeal insufficiency', definition: 'Inadequate closure of velopharynx during speech, causing nasal speech' },
        { term: 'trismus', definition: 'Restricted mouth opening due to muscle spasm, often from infection' },
        { term: 'Lemierre syndrome', definition: 'Septic thrombophlebitis of internal jugular vein from oropharyngeal infection' },
      ],
      clinicalNotes: `The most important decision in pharyngitis management is distinguishing viral from bacterial (GAS) etiology to avoid unnecessary antibiotic use while treating GAS to prevent complications. Rapid strep testing has high specificity but sensitivity is only 70-90%, meaning a negative result in a high-risk patient should be confirmed with culture. Peritonsillar abscess is a clinical diagnosis - uvular deviation AWAY from the affected side is a key distinguishing feature.`,
      patientCounselingPoints: [
        'GAS pharyngitis requires full course of antibiotics even if symptoms improve to prevent rheumatic fever.',
        'Wait 24 hours after starting antibiotics before returning to school/work to prevent spread.',
        'Chronic tonsil problems affecting sleep or breathing may benefit from tonsillectomy - discuss with ENT.',
        'If you have chronic snoring and daytime sleepiness, ask your doctor about sleep apnea screening.',
      ],
    },

    4: {
      level: 4,
      summary: 'Oropharyngeal pathology involves complex interactions between anatomical structures, microbiological factors, and host immune responses. From molecular mechanisms of bacterial adherence to neuromuscular control of swallowing and upper airway patency, understanding these processes guides precise diagnosis and targeted interventions.',
      explanation: `## Molecular Pathogenesis of Pharyngitis

**Streptococcus pyogenes (GAS) Virulence Factors:**
- M protein: Anti-phagocytic, >100 serotypes
- Hyaluronic acid capsule: Mimics host tissue
- Streptococcal pyrogenic exotoxins: Superantigens causing rash (scarlet fever)
- Streptolysin O and S: Hemolysis, tissue damage
- C5a peptidase: Impairs neutrophil chemotaxis
- DNases: Spread through tissue

**Adhesion Mechanisms:**
- M protein binding to fibronectin and keratin
- Lipoteichoic acid receptors on epithelial cells
- Fimbriae-mediated attachment

**Host Response:**
- Local inflammation: Cytokine release (IL-1, IL-6, TNF-alpha)
- Systemic effects: Fever, malaise from inflammatory mediators
- Adaptive immune response: Anti-streptolysin O (ASO) antibodies
- Molecular mimicry: Mechanism of rheumatic fever (M protein similar to cardiac myosin)

**Viral Pathogenesis:**
- EBV: CD21 receptor on B cells, latency with reactivation
- HSV: Latent in trigeminal ganglion, reactivation with stress
- Adenovirus: Viral proteins block apoptosis
- HPV: Integration into host genome, oncogenic types 16/18

## Sleep Apnea Pathophysiology

**Airway Collapse Dynamics:**
- Starling resistor model: Critical closing pressure (Pcrit)
- Pcrit more negative in normal, approaches atmospheric in OSA
- Anatomy vs physiology contributions:
  - Anatomic: Fixed narrowing (enlarged tonsils, retrognathia)
  - Physiologic: Dilator muscle responsiveness, loop gain, arousal threshold

**Neuromuscular Compensation:**
- Genioglossus: Main tongue protrusor, critical for airway patency
- Negative pressure reflex: Afferent from mechanoreceptors, efferent to hypoglossal
- Reflex failure during sleep: Loss of compensatory muscle activity
- REM atonia: Exacerbated obstruction

**Loop Gain Concept:**
- High loop gain: Unstable ventilatory control
- Controller gain: Ventilatory response to disturbances
- Plant gain: Effect of ventilation on PaCO2
- Stimulus: CO2 fluctuations causing ventilatory overshoot-undershoot
- High loop gain predicts CPAP failure and success of hypoglossal nerve stimulation

**Inflammatory Consequences:**
- Intermittent hypoxia: Oxidative stress, sympathetic activation
- Sleep fragmentation: Disrupted architecture
- Systemic inflammation: CRP, TNF-alpha, IL-6 elevation
- Endothelial dysfunction: Cardiovascular risk
- Metabolic consequences: Insulin resistance

## Swallowing Physiology and Pathophysiology

**Brainstem Swallowing Centers:**
- Nucleus tractus solitarius (NTS): Sensory integration
- Nucleus ambiguus: Motor output to CN IX, X, XII
- Central pattern generator: Coordinates sequential muscle activation

**Cortical Control:**
- Primary motor cortex: Oral and pharyngeal muscles
- Insula: Taste and sensory integration
- Supplementary motor area: Swallowing initiation
- Asymmetry: Left hemisphere dominant for prandial swallowing

**Airway Protection Mechanisms:**
- Laryngeal elevation: Epiglottis inversion, glottic closure
- Vocal fold adduction: True and false cords
- Breath holding: Brief respiratory pause
- Cough reflex: Clearing of aspirated material

**Aspiration Pathways:**
- Pre-deglutitive: Before swallow, often due to residue in valleculae
- Deglutitive: During swallow, impaired airway closure
- Post-deglutitive: After swallow, residue in pyriform sinuses

**Neurological Dysphagia Patterns:**
- Stroke: Unilateral weakness, delayed swallow trigger
- Parkinson's: Rigidity, bradykinesia, silent aspiration
- ALS: Progressive bulbar and pseudobulbar patterns
- Myasthenia gravis: Fatigable weakness, variable symptoms
- Multiple sclerosis: Discoordination, reduced sensation

## Tonsil and Adenoid Immunology

**Antigen Presentation:**
- M cells: Transport antigens to lymphoid follicles
- Dendritic cells: Present to T cells
- B cell activation: Within germinal centers
- Plasma cell formation: Local antibody production

**Immunoglobulin Production:**
- IgA predominates: Secretory component resistant to proteolysis
- IgG and IgM: Systemic immunity
- Memory B cells: Long-term immunity

**Adenoid Hypertrophy:**
- Childhood peak: Ages 3-7
- Lymphoid hyperplasia: Response to antigenic stimulation
- Regression after childhood: Involution with age
- Obstructive effects: Nasal obstruction, hyponasal speech, sleep apnea

## Peritonsillar Abscess Pathogenesis

**Progression:**
1. Acute tonsillitis: Infection of tonsillar crypts
2. Peritonsillar cellulitis: Inflammation spreads to loose tissue
3. Abscess formation: Pus accumulation between capsule and superior constrictor

**Microbiology:**
- Polymicrobial: Aerobic and anaerobic
- Common isolates: Streptococcus (GAS, milleri group), Fusobacterium, Prevotella
- Anaerobic overgrowth in abscess environment

**Anatomic Considerations:**
- Superior constrictor muscle: Forms lateral boundary
- Palatopharyngeus and palatoglossus: Medial arches
- Pterygoid muscles: Involved causing trismus
- Carotid sheath: Posterolateral, at risk

## Imaging in Throat Disorders

**Radiographic Evaluation:**
- Lateral neck soft tissue: Epiglottitis, retropharyngeal abscess
- CT with contrast: Deep neck infections, foreign bodies
- MRI: Soft tissue characterization, vascular involvement
- Ultrasound: Peritonsillar abscess, cervical lymphadenopathy

**Videofluoroscopic Swallow Study (VFSS):**
- Real-time fluoroscopy with barium
- Different consistencies: Thin, nectar, honey, pudding
- Assesses: Oral prep, oral phase, pharyngeal clearance, aspiration
- Modified barium swallow (MBS) protocol standardization

**Fiberoptic Endoscopic Evaluation of Swallowing (FEES):**
- Nasopharyngoscopy during swallow
- Direct visualization: Secretions, residue, spillage
- Sensory testing: Air pulse stimulation
- Advantages: Bedside, no radiation, assesses secretions

## Surgical Anatomy

**Tonsillectomy Anatomy:**
- Capsule: Surrounds tonsil, key dissection plane
- Anterior pillar: Palatoglossus muscle
- Posterior pillar: Palatopharyngeus muscle
- Superior constrictor: Lateral to capsule
- Glossopharyngeal nerve: Sensory, near lower pole
- Spinal accessory nerve: Motor to palate, near upper pole

**Uvulopalatopharyngoplasty (UPPP):**
- Remove: Uvula, part of soft palate, tonsils
- Excise: Lateral pharyngeal wall tissue
- Suture: Anterior and posterior pillars together
- Mechanism: Expand and stabilize retropalatal airway
- Success: ~40-60% cure rate, better for AHI <40

**Adenoidectomy:**
- Transoral or transnasal approach
- Curette or suction cautery
- Landmarks: Choanae posteriorly, eustachian tubes laterally
- Avoid: Torus tubarius, damage to pharyngeal musculature`,
      keyTerms: [
        { term: 'M protein', definition: 'Major Streptococcus pyogenes virulence factor that inhibits phagocytosis' },
        { term: 'critical closing pressure', definition: 'Pressure at which airway collapses; more positive in obstructive sleep apnea' },
        { term: 'loop gain', definition: 'Ventilatory control stability; high loop gain causes unstable breathing in sleep' },
        { term: 'central pattern generator', definition: 'Brainstem network coordinating rhythmic swallowing' },
        { term: 'silent aspiration', definition: 'Aspiration of material into airway without cough or overt symptoms' },
        { term: 'tonsillar capsule', definition: 'Fibrous layer surrounding tonsil, surgical dissection plane for tonsillectomy' },
        { term: 'Pcrit', definition: 'Critical closing pressure of pharyngeal airway; marker for OSA severity' },
      ],
      clinicalNotes: `GAS pharyngitis is overdiagnosed and over-treated. In adults, the positive predictive value of clinical diagnosis is only about 50-70%. Strict adherence to Centor criteria and confirmatory testing reduces unnecessary antibiotic use. UPPP success for OSA is limited by failure at multiple levels - many patients have hypopharyngeal obstruction not addressed by palatal surgery.`,
    },

    5: {
      level: 5,
      summary: 'Advanced oropharyngeal practice integrates evidence-based guidelines, advanced surgical techniques, sleep medicine principles, and multidisciplinary care. Contemporary management emphasizes precision in diagnosis, appropriate use of technology, and outcomes-based decision making for conditions ranging from recurrent tonsillitis to complex sleep-disordered breathing.',
      explanation: `## Clinical Practice Guidelines

**Acute Otitis Media and Tonsillitis:**

*American Academy of Otolaryngology-Head and Neck Surgery (AAO-HNS) Tonsillectomy in Children (2019):*
- Indications: 7+ episodes/year, 5+/year for 2 years, 3+/year for 3 years
- Documentation: Each episode with appropriate medical documentation
- Consider modifying factors: Sleep-disordered breathing, PFAPA, multiple antibiotic allergies
- Watchful waiting: Appropriate for less frequent episodes
- Perioperative care: Pain management, education, postoperative instructions
- STRICT CAUTION: Codeine contraindicated in children <12 (ultra-rapid metabolizers)

**Recurrent Pharyngitis:**
- Distinguish viral vs bacterial: Clinical criteria + testing
- Consider tonsillectomy: Documented recurrent GAS, not URI symptoms
- PFAPA syndrome: Periodic fever, aphthous stomatitis, pharyngitis, adenitis
- Steroid responsiveness: Diagnostic for PFAPA

**Obstructive Sleep Apnea (AAO-HNS 2021 Update):**
- Diagnosis: Polysomnography gold standard, home testing acceptable for uncomplicated moderate-high pretest probability
- CPAP first-line: For moderate-severe OSA
- Surgery considerations: Anatomic abnormalities, CPAP intolerance
- Weight management: Essential component
- Follow-up: Objective assessment of treatment efficacy

## Diagnostic Advances

**Rapid Diagnostic Testing:**
- Molecular point-of-care tests: PCR-based, higher sensitivity
- Biofire FilmArray: Multiple pathogen detection
- Emerging: Host response biomarkers to distinguish viral/bacterial

**Sleep Diagnostics:**
- Level I: In-lab polysomnography (gold standard)
- Level II: Home sleep apnea testing (HSAT)
- Level III: Limited channel HSAT
- Actigraphy: Sleep-wake patterns
- WatchPAT: Peripheral arterial tone technology

**Drug-Induced Sleep Endoscopy (DISE):**
- Sedation-induced sleep to visualize airway collapse
- Identifies: Retropalatal, retroglossal, epiglottic collapse
- Patterns: Concentric, anteroposterior, lateral
- Guides surgical planning: UPPP, genioglossus advancement, hyoid suspension

**Advanced Swallowing Assessment:**
- High-resolution manometry: Pressure topography
- 24-hour pH-impedance: Reflux detection
- Electromyography: Muscle activity assessment
- Functional MRI: Central processing research

## Therapeutic Advances

**Antibiotic Stewardship:**
- GAS pharyngitis: Amoxicillin or penicillin VK first-line
- Penicillin allergy: Cephalexin, clindamycin, or macrolides
- Duration: 10 days (ensures eradication)
- Avoid: Antibiotics for viral URIs, treat based on scores not testing alone

**Pain Management After Tonsillectomy:**
- Preferred: Ibuprofen + acetaminophen combination
- Avoid: Codeine in children <12 (FDA black box warning)
- Consider: Dexamethasone for anti-inflammatory effect
- Hydration: Critical to prevent dehydration

**Obstructive Sleep Apnea Therapies:**

| Therapy | Indication | Success Rate | Notes |
|---------|------------|--------------|-------|
| CPAP | All severity | 70-80% adherence issues | Gold standard |
| Oral appliance | Mild-moderate | 50-70% | Mandibular advancement |
| UPPP | Retropalatal collapse | 40-60% | Requires careful selection |
| MMA | Severe, craniofacial | 90%+ | Major surgery |
| HGNS | Moderate OSA, CPAP fail | 65-75% | Hypoglossal nerve stim |
| Positional therapy | Positional OSA | Variable | Simple, low cost |

**Biologics for Chronic Tonsillitis:**
- Limited data currently
- Research: Anti-inflammatory modulation
- Future: Targeted immunotherapy

## Surgical Techniques

**Coblation Tonsillectomy:**
- Radiofrequency ablation at lower temperature
- Potential benefits: Less pain, faster healing
- Evidence: Mixed compared to electrocautery
- Cost: Higher equipment expense

**Microdebrider Intracapsular Tonsillectomy:**
- Partial tonsil removal, capsule preserved
- Indication: OSA, large tonsils with minimal infection history
- Benefits: Reduced pain, less bleeding risk
- Risk: Tonsillar regrowth

**Transoral Robotic Surgery (TORS):**
- Obstructive sleep apnea: Tongue base reduction
- Oropharyngeal cancer: Resection
- Advantages: Improved visualization, precise dissection
- Learning curve: Significant training required

**Expansion Sphincter Pharyngoplasty:**
- Relocating palatopharyngeus muscles laterally
- Expands retropalatal airway
- Alternative to UPPP with less velopharyngeal insufficiency
- Combined with tonsillectomy for OSA

**Hypoglossal Nerve Stimulation:**
- Fully implanted system
- Sensor detects inspiration, stimulates tongue protrusion
- Indication: Moderate OSA, CPAP intolerant, AHI 20-50
- Contraindications: Central sleep apnea, concentric collapse on DISE
- Outcomes: AHI reduction ~68%, significant improvement in QoL

## Evidence-Based Practice

**Tonsillectomy Indications:**
- Infection: Paradise criteria (modified per clinical judgment)
- Obstruction: PSG-confirmed OSA, documented sleep disturbance
- Neoplasia: Biopsy or excision indicated
- Asymptomatic tonsils: Surgery not indicated

**Antibiotic Duration:**
- GAS pharyngitis: 10 days (prevents rheumatic fever)
- Peritonsillar abscess: 5-7 days post-drainage
- Deep neck infection: Until clinical improvement + afebrile x48h

**Perioperative Considerations:**
- Bleeding risk: 1-5% delayed hemorrhage (days 5-10)
- Dehydration: Most common cause of readmission
- Pain management: Multimodal approach
- Return to activity: 2 weeks for normal activities, 2 weeks for contact sports

## Complications and Management

**Post-Tonsillectomy Bleeding:**
- Primary: <24 hours (surgical technique issue)
- Secondary: 5-10 days (slough of fibrin clot)
- Management: Observation, fluid resuscitation, cautery, packing, or return to OR
- Transfusion: Rare but may be needed for severe bleeding

**Velopharyngeal Insufficiency:**
- Hypernasal speech after tonsillectomy
- Risk factors: Submucosal cleft, short palate, adenoidectomy
- Assessment: Speech evaluation, nasopharyngoscopy
- Treatment: Speech therapy, surgical intervention

**Nasopharyngeal Stenosis:**
- Scar tissue between soft palate and posterior pharynx
- Risk factor: Simultaneous tonsillectomy and adenoidectomy
- Prevention: Meticulous surgical technique
- Treatment: Revision surgery, laser, Z-plasty

**Otitis Media with Effusion:**
- Adenoidectomy helps with tonsil hypertrophy component
- Consider adenoidectomy if recurrent OME after tube extrusion

## Quality Measures

**SNOT-20 (Sino-Nasal Outcome Test modified for Throat):**
- Assesses throat-specific quality of life
- 20 items covering throat symptoms, swallowing, sleep, social impact

**OSA-18 (Obstructive Sleep Apnea-18):**
- Pediatric quality of life instrument
- Sleep disturbance, physical symptoms, emotional symptoms
- Daytime functioning, caregiver concerns

**Epworth Sleepiness Scale:**
- Subjective daytime sleepiness
- Score >10 suggests excessive daytime sleepiness
- Used to assess treatment response

**Polysomnography Metrics:**
- AHI: Primary measure of disease severity
- Oxygen desaturation index: Hypoxemic burden
- Sleep architecture: REM/Stage distribution
- Arousal index: Sleep fragmentation

## Multidisciplinary Care

**Sleep Medicine:**
- Pulmonology collaboration for complex sleep apnea
- Cardiology evaluation: Pulmonary hypertension, arrhythmias
- Endocrinology: Metabolic consequences
- Nutrition: Weight management

**Swallowing Disorders:**
- Speech-language pathology: Bedside evaluation, therapy
- Radiology: VFSS interpretation
- GI: Esophageal evaluation
- Neurology: Underlying neurological conditions

**Head and Neck Cancer:**
- Multidisciplinary tumor board
- Surgery, radiation, oncology
- Rehabilitation: Speech, swallowing
- Psychological support

**Pediatric Considerations:**
- Growth and development: Impact of sleep-disordered breathing
- Behavior: Hyperactivity, poor school performance
- Enuresis: Associated with OSA
- Exclusion of other causes: Adenoid hypertrophy, craniofacial abnormalities`,
      keyTerms: [
        { term: 'PFAPA', definition: 'Periodic Fever, Aphthous stomatitis, Pharyngitis, Adenitis syndrome; periodic fever syndrome in children' },
        { term: 'drug-induced sleep endoscopy', definition: 'Sedated endoscopic airway examination to identify collapse patterns in OSA' },
        { term: 'hypoglossal nerve stimulation', definition: 'Implanted device stimulating hypoglossal nerve for OSA treatment' },
        { term: 'expansion sphincter pharyngoplasty', definition: 'Surgical repositioning of palatopharyngeal muscles to expand airway' },
        { term: 'transoral robotic surgery', definition: 'Robotic approach to oropharyngeal surgery including tonsil/base of tongue' },
        { term: 'SNOT-20', definition: 'Sino-Nasal Outcome Test modified for throat symptom assessment' },
        { term: 'AHI', definition: 'Apnea-Hypopnea Index; standard measure of sleep apnea severity' },
      ],
      clinicalNotes: `AAO-HNS Clinical Practice Guideline: Tonsillectomy in Children (2019)

Key Recommendations:
1. Watchful waiting for recurrent throat infection if fewer than 7 episodes in previous year, 5/year for 2 years, or 3/year for 3 years
2. Assess quality of life, caregiver burden, documentation of each episode
3. Recommend tonsillectomy if child meets Paradise criteria
4. Ask about sleep-disordered breathing as indication
5. Counsel caregivers about risks (anesthesia, bleeding, dehydration)
6. Recommend ibuprofen/acetaminophen for pain
7. AVOID codeine in children <12 years (Black Box Warning)

Remember: OSA is now the most common indication for tonsillectomy in children, surpassing recurrent infection.`,
    },
  },

  media: [
    {
      id: 'throat-anatomy-overview',
      type: 'diagram',
      filename: 'throat-anatomy-overview.svg',
      title: 'Throat Anatomy Overview',
      description: 'Anatomy of pharynx, tonsils, and related structures',
    },
    {
      id: 'tonsil-grading-scale',
      type: 'diagram',
      filename: 'tonsil-grading-scale.svg',
      title: 'Tonsil Grading Scale',
      description: 'Visual grading scale for tonsillar hypertrophy (grades 0-4)',
    },
    {
      id: 'peritonsillar-abscess',
      type: 'diagram',
      filename: 'peritonsillar-abscess-illustration.svg',
      title: 'Peritonsillar Abscess',
      description: 'Anatomical relationship of peritonsillar abscess',
    },
  ],

  citations: [
    {
      id: 'aao-hns-tonsillectomy-guideline-2019',
      type: 'article',
      title: 'Clinical Practice Guideline: Tonsillectomy in Children (Update)',
      source: 'Otolaryngology-Head and Neck Surgery',
      authors: ['Mitchell, R.B.', 'Pereira, K.D.', 'Friedman, N.R.', 'et al.'],
    },
    {
      id: 'aao-hns-osa-guideline-2021',
      type: 'article',
      title: 'Clinical Practice Guideline: Obstructive Sleep Apnea (Update)',
      source: 'Otolaryngology-Head and Neck Surgery',
      authors: ['Patel, M.M.', 'Rosen, G.M.', 'Schwartz, S.R.', 'et al.'],
    },
    {
      id: 'infectious-diseases-society-pharyngitis',
      type: 'article',
      title: 'Guideline for the Diagnosis and Management of Group A Streptococcal Pharyngitis',
      source: 'Clinical Infectious Diseases',
      authors: ['Shulman, S.T.', 'Bisno, A.L.', 'Clegg, H.W.', 'et al.'],
    },
    {
      id: 'cummings-oropharynx',
      type: 'textbook',
      title: 'Oropharynx and Aerodigestive Tract',
      source: 'Cummings Otolaryngology: Head and Neck Surgery',
      chapter: 'Section IV',
    },
  ],

  crossReferences: [
    { targetId: 'ent-ear', targetType: 'topic', relationship: 'sibling', label: 'Ear Disorders' },
    { targetId: 'ent-nose', targetType: 'topic', relationship: 'sibling', label: 'Nose and Sinus Disorders' },
    { targetId: 'ent-voice', targetType: 'topic', relationship: 'sibling', label: 'Voice and Larynx' },
    { targetId: 'ent-pediatric', targetType: 'topic', relationship: 'related', label: 'Pediatric ENT' },
    { targetId: 'sleep-medicine', targetType: 'topic', relationship: 'related', label: 'Sleep Medicine' },
  ],

  tags: {
    systems: ['respiratory', 'upper-airway', 'digestive'],
    structures: ['FMA:54816', 'FMA:60691', 'FMA:54779'],
    topics: ['pharyngitis', 'tonsillitis', 'sleep-apnea', 'dysphagia', 'peritonsillar-abscess'],
    keywords: ['pharyngitis', 'tonsillitis', 'tonsillectomy', 'sleep apnea', 'dysphagia', 'epiglottitis', 'peritonsillar abscess'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['surgery', 'pediatrics', 'family-medicine', 'emergency'],
    },
  },

  createdAt: '2026-01-25T00:00:00.000Z',
  updatedAt: '2026-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default throatContent;
