/**
 * Hoarseness (Dysphonia) - Comprehensive Educational Content
 *
 * Covers causes of voice changes including vocal fold nodules,
 * polyps, paralysis, laryngopharyngeal reflux, and evaluation
 * and treatment of dysphonia.
 */

import { EducationalContent } from '../../types';

export const hoarseness: EducationalContent = {
  id: 'condition-hoarseness',
  type: 'condition',
  name: 'Hoarseness',
  alternateNames: ['Dysphonia', 'Voice Change', 'Vocal Hoarseness', 'Aphonia', 'Laryngitis', 'Vocal Fold Lesions'],
  hpoId: 'HP:0001540',

  levels: {
    1: {
      level: 1,
      summary: 'Hoarseness is when your voice sounds raspy, strained, or lower in pitch than usual. It happens when the vocal cords in your throat are irritated or not working properly.',
      explanation: `## What is Hoarseness?

**Hoarseness** is an abnormal change in your voice. Your voice may sound:
- Raspy or rough
- Breathy or weak
- Strained or tight
- Lower or higher in pitch than usual
- "Crackly" when you try to speak

**What causes hoarseness?**
Your voice is produced by your vocal cords (also called vocal folds). These are two bands of muscle in your throat that vibrate when air passes through them. When the vocal cords are swollen, irritated, or not moving properly, your voice sounds different.

## Common Causes

**Most common causes:**
- **Laryngitis:** Swelling of vocal cords from infection
- **Voice overuse:** Yelling, screaming, or talking too much
- **Acid reflux:** Stomach acid irritating the throat
- **Allergies:** Post-nasal drip irritating vocal cords
- **Smoking:** Irritates and damages vocal cords
- **Dry air:** Vocal cords need moisture

**Other causes:**
- Vocal cord nodules (calluses from overuse)
- Vocal cord polyps (small growths)
- Vocal cord paralysis (cord doesn't move)
- Aging (voice naturally changes with age)
- Thyroid problems
- Lung or throat cancer (rare)

## How Your Voice Works

**The vocal cords:**
- Located in your voice box (larynx) in the throat
- Two bands of muscle that open and close
- When you breathe: They open to let air through
- When you speak: They close and vibrate as air passes

**Normal voice production:**
1. Air comes from lungs
2. Vocal cords close
3. Air pushes through, making cords vibrate
4. Sound is produced
5. Mouth and tongue shape the sound into words

## When to See a Doctor

**See a doctor if hoarseness lasts:**
- Longer than 2-3 weeks
- With no obvious cause (like a cold)
- Keeps coming back
- With pain when speaking
- With difficulty swallowing
- With breathing problems
- With a lump in the neck

**Seek emergency care if:**
- Trouble breathing
- Struggling for air
- Cannot speak at all (sudden)
- Drooling
- High fever with difficulty breathing

## Diagnosis

A doctor can diagnose hoarseness by:
1. **Asking questions** about your symptoms
2. **Listening to your voice**
3. **Examining your throat** with a light
4. **Looking at vocal cords** with a special camera (laryngoscopy)

## Treatment

**Treatment depends on the cause:**

**For voice overuse:**
- Rest your voice (voice rest)
- Avoid whispering (strains vocal cords more)
- Drink plenty of water
- Use a humidifier

**For acid reflux:**
- Avoid spicy and fatty foods
- Don't eat before bedtime
- Elevate head of bed
- Medications to reduce stomach acid

**For infections (laryngitis):**
- Voice rest
- Hydration
- Usually goes away on its own
- Antibiotics only if bacterial (rare)

**For vocal cord nodules:**
- Voice therapy with a speech therapist
- Rest your voice
- Surgery rarely needed

**For smoking-related hoarseness:**
- Stop smoking
- Avoid second-hand smoke

## Voice Care Tips

**To keep your voice healthy:**
- Drink plenty of water
- Avoid yelling or screaming
- Use a microphone when speaking to groups
- Rest your voice when tired
- Avoid clearing your throat (sip water instead)
- Use a humidifier in dry weather
- Don't smoke
- Limit caffeine and alcohol

**When you are sick:**
- Rest your voice
- Don't force yourself to talk
- Stay hydrated
- Avoid singing or straining your voice

## Professional Voice Users

People who use their voice for work (singers, teachers, actors) need to take extra care:
- Warm up your voice before use
- Take voice breaks
- See a voice specialist if problems develop
- Consider voice training

## Prevention

**To prevent hoarseness:**
- Don't smoke
- Limit alcohol and caffeine
- Stay hydrated
- Avoid throat clearing
- Use proper breathing technique
- Rest your voice when tired
- Manage acid reflux
- Avoid yelling or screaming
- Use a microphone for large groups`,
      keyTerms: [
        { term: 'hoarseness', definition: 'Abnormal change in voice quality; voice sounds raspy, strained, or weak' },
        { term: 'vocal cords', definition: 'Two bands of muscle in the throat that vibrate to produce sound; also called vocal folds' },
        { term: 'laryngitis', definition: 'Inflammation of the voice box causing hoarseness; usually from infection or overuse' },
        { term: 'larynx', definition: 'The voice box; contains the vocal cords' },
        { term: 'dysphonia', definition: 'Medical term for difficulty speaking or hoarseness' },
      ],
      analogies: [
        'Your vocal cords are like two rubber bands that vibrate when air passes through them.',
        'Hoarseness is like a musical instrument that is out of tune - the parts aren\'t working together properly.',
      ],
      examples: [
        'A teacher who talks all day might develop hoarseness from voice overuse.',
        'Someone with acid reflux might wake up with a hoarse voice in the morning.',
      ],
      patientCounselingPoints: [
        'Voice rest means not talking at all when possible - whispering can actually strain your voice more',
        'Stay hydrated by drinking plenty of water to keep your vocal cords moist',
        'Avoid throat clearing - sip water instead to clear your throat',
        'Use a humidifier to add moisture to dry air',
        'See a doctor if hoarseness lasts more than 2-3 weeks',
        'If you smoke, quitting is the best thing you can do for your voice',
      ],
    },
    2: {
      level: 2,
      summary: 'Dysphonia (hoarseness) is a symptom characterized by abnormal voice quality resulting from vocal fold dysfunction. Common causes include acute laryngitis, vocal abuse, laryngopharyngeal reflux, and vocal fold lesions, with treatment directed at the underlying etiology.',
      explanation: `## Definition

**Hoarseness (dysphonia):**
- Abnormal voice quality
- May include changes in pitch, volume, or quality
- Results from vocal fold dysfunction
- Symptom, not a specific disease

**Aphonia:**
- Complete loss of voice
- Inability to produce vocal sound
- Most severe form of dysphonia

## Vocal Fold Anatomy

**Location:**
- Within the larynx (voice box)
- At the level of the thyroid cartilage (Adam apple)
- Protected by epiglottis during swallowing

**Structure:**
- Paired folds of muscle and connective tissue
- Vibrate with phonation
- Open for breathing, close for voicing

**Layers:**
- Epithelium (outer layer)
- Superficial lamina propria (Reinke space)
- Vocal ligament
- Vocalis muscle (inner layer)

## Classification

**Duration:**
- **Acute:** < 3 weeks
- **Chronic:** ≥ 3 weeks

**Etiology categories:**
- Inflammatory
- Neoplastic
- Neurologic
- Traumatic
- Iatrogenic

## Common Causes

### Inflammatory Causes

**Acute laryngitis:**
- Viral URI most common
- Bacterial (rare)
- Vocal strain/overuse
- Chemical irritants
- Symptoms: Hoarseness, voice fatigue, throat discomfort
- Treatment: Voice rest, hydration
- Resolution: Usually 1-2 weeks

**Chronic laryngitis:**
- Laryngopharyngeal reflux (LPR)
- Smoking
- Environmental irritants
- Allergic rhinitis with post-nasal drip
- Chronic vocal abuse

### Vocal Abuse and Misuse

**Causes:**
- Excessive talking
- Yelling/screaming
- Throat clearing
- Hard glottal attack
- Poor singing technique
- Professional voice use without proper training

### Laryngopharyngeal Reflux (LPR)

**Pathophysiology:**
- Stomach acid and pepsin reflux to larynx
- Irritates vocal folds
- Causes posterior commissure hypertrophy
- Often without heartburn ("silent reflux")

**Symptoms:**
- Hoarseness (especially morning)
- Throat clearing
- Globus sensation (lump in throat)
- Chronic cough
- Dysphagia

**Risk factors:**
- Obesity
- Hiatal hernia
- Fatty/spicy foods
- Alcohol, caffeine
- Eating before bedtime

### Vocal Fold Lesions

**Vocal fold nodules:**
- Callus-like lesions
- Bilateral
- From chronic vocal abuse
- Common in singers, teachers
- Voice therapy first-line
- Surgery rarely indicated

**Vocal fold polyps:**
- Fluid-filled lesions
- Usually unilateral
- From acute trauma (vocal hemorrhage)
- May require surgery

**Vocal fold cysts:**
- Fluid-filled sacs
- Within the lamina propria
- Usually unilateral
- Often require surgery

**Reinke edema:**
- Fluid accumulation in Reinke space
- From smoking and vocal abuse
- Bilateral
- Associated with smoking

### Neurologic Causes

**Vocal fold paralysis:**
- Unilateral (more common) or bilateral
- From recurrent laryngeal nerve injury
- Causes: Surgery (thyroid, cardiac, neck), tumor, stroke
- Breathy voice, aspiration risk

**Spasmodic dysphonia:**
- Neurologic disorder
- Involuntary vocal cord spasms
- Strained or breathy voice
- Botox injections for treatment

### Neoplastic Causes

**Benign:**
- Papilloma (HPV-related)
- Granuloma
- Contact ulcer

**Malignant:**
- Squamous cell carcinoma
- Risk factors: Smoking, alcohol
- Requires urgent evaluation

## Clinical Presentation

**Voice symptoms:**
- Roughness, breathiness, strain
- Pitch instability
- Reduced vocal endurance
- Voice breaks
- Loss of range

**Associated symptoms:**
- Throat clearing
- Globus sensation
- Throat pain
- Dysphagia
- Cough
- Shortness of breath (severe cases)

## Diagnosis

### History

**Key questions:**
- Duration of hoarseness
- Voice use patterns (professional voice user?)
- Previous episodes
- Associated symptoms
- Medical history (especially surgery)
- Medications
- Smoking and alcohol use
- Reflux symptoms

### Physical Examination

**General examination:**
- Head and neck examination
- Neck palpation for masses
- Lymph node assessment

**Laryngeal examination:**
- **Indirect laryngoscopy:** Mirror examination (limited view)
- **Flexible laryngoscopy:** Office-based procedure
  - Nasal passage of flexible scope
  - Direct visualization of vocal folds
  - Assesses mobility and lesions
- **Stroboscopy:**
  - Assess vocal fold vibration
  - Identify subtle lesions
  - Assess mucosal wave

### Diagnostic Testing

**Laryngoscopy:**
- First-line for hoarseness > 2-3 weeks
- Flexible fiberoptic most common
- Rigid laryngoscopy with stroboscopy for detailed evaluation

**Imaging:**
- CT neck: For masses, thyroid evaluation
- MRI: Soft tissue characterization
- Chest imaging: For lung malignancy

**Laboratory tests:**
- As indicated by history
- Thyroid function tests
- Rheumatologic panel if indicated

## Treatment

### Voice Rest

**Relative voice rest:**
- Reduce vocal demands
- Avoid whispering
- Speak softly but normally when necessary
- Stay hydrated

**Absolute voice rest:**
- No speaking at all
- Written communication
- Indicated for vocal hemorrhage, severe laryngitis
- Short duration only

### Vocal Hygiene

**Principles:**
- Adequate hydration (6-8 glasses water daily)
- Humidification
- Avoid throat clearing
- Avoid irritants (smoke, chemicals)
- Limit caffeine and alcohol
- Proper breath support
- Vocal warm-up before heavy use

### Medical Treatment

**For LPR:**
- Proton pump inhibitor (PPI)
- H2 blockers
- Dietary modifications
- Elevation of head of bed
- Avoid eating 3 hours before bedtime

**For laryngitis:**
- Supportive care为主
- Antibiotics only for bacterial infection (rare)
- Short course of steroids for urgent vocal needs

**For nodules:**
- Voice therapy first-line
- PPI if LPR present
- Surgery rarely indicated

### Voice Therapy

**Indications:**
- Vocal abuse/misuse
- Nodules, polyps
- Muscle tension dysphonia
- Post-surgical rehabilitation
- Professional voice users

**Components:**
- Respiratory support training
- Relaxation techniques
- Resonance therapy
- Pitch and volume control
- Stammering and fluency techniques

### Surgical Treatment

**Indications:**
- Vocal fold hemorrhage
- Suspected malignancy
- Large polyps or cysts
- Airway compromise

**Procedures:**
- Microlaryngoscopy with excision
- Laser surgery
- Vocal fold injection
- Medialization thyroplasty (paralysis)

## Complications

**Airway compromise:**
- Severe bilateral vocal fold paralysis
- Laryngeal papillomatosis
- Large tumors
- May require tracheostomy

**Aspiration risk:**
- Vocal fold paralysis
- Sensory deficits
- May cause pneumonia

**Chronic dysphonia:**
- Permanent voice changes
- Career impact for professional voice users
- Psychological impact

## Prevention

**Vocal hygiene:**
- Stay hydrated
- Avoid vocal abuse
- Use microphone when needed
- Warm up voice before heavy use
- Avoid throat clearing
- Manage acid reflux

**Lifestyle:**
- Don't smoke
- Limit alcohol
- Manage allergies
- Exercise regularly
- Manage stress`,
      keyTerms: [
        { term: 'hoarseness', definition: 'Abnormal voice quality characterized by rough, breathy, or strained voice' },
        { term: 'dysphonia', definition: 'Medical term for difficulty producing sound or abnormal voice quality' },
        { term: 'vocal folds', definition: 'Paired bands of muscle in larynx that vibrate to produce sound; also called vocal cords' },
        { term: 'laryngoscopy', definition: 'Examination of the larynx using a scope' },
        { term: 'Reinke space', definition: 'Superficial layer of vocal folds where fluid accumulates in Reinke edema' },
        { term: 'LPR', definition: 'Laryngopharyngeal reflux; stomach acid irritating the larynx causing hoarseness' },
      ],
      analogies: [
        'The vocal folds are like the strings on a violin - they need proper tension and moisture to work correctly.',
        'LPR is like silent heartburn - the acid goes all the way up to the voice box without causing chest pain.',
      ],
    },
    3: {
      level: 3,
      summary: 'Dysphonia evaluation requires systematic laryngeal examination to identify vocal fold pathology including inflammatory lesions, vocal fold motion abnormalities, and neoplasms. Treatment is directed at the specific etiology and may include voice therapy, medical management, or surgical intervention.',
      explanation: `## Pathophysiology of Phonation

### Vocal Fold Vibration

**Normal phonation:**
- Vocal folds adduct to midline
- Subglottic pressure builds
- Vocal folds separate from bottom to top (mucosal wave)
- Bernoulli effect draws folds together
- Cyclical vibration 100-300 Hz

**Layers of vocal folds (from superficial to deep):**
1. **Epithelium:** Stratified squamous epithelium
2. **Reinke space:** Superficial lamina propria (vibratory layer)
3. **Vocal ligament:** Intermediate and deep lamina propria
4. **Vocalis muscle:** Thyroarytenoid muscle

**Mucosal wave:**
- Critical for normal voice production
- Occurs in superficial layers
- Assessed with stroboscopy
- Absent in scar, fibrosis

### Vocal Fold Dysfunction

**Hyperfunctional dysphonia:**
- Excessive muscular tension
- Muscle tension dysphonia
- Anterior-posterior squeezing
- False vocal cord phonation
- Ventricular phonation

**Hypofunctional dysphonia:**
- Incomplete glottic closure
- Glottic gap
- Breathy voice
- Weakness, fatigue

### Neuromuscular Control

**Innervation:**
- **Recurrent laryngeal nerve (RLN):**
  - Innervates all intrinsic muscles except cricothyroid
  - Left: Loops under aortic arch
  - Right: Loops under subclavian artery
  - Vulnerable during thyroid, cardiac, neck surgery

- **Superior laryngeal nerve (SLN):**
  - Innervates cricothyroid muscle (tenses vocal folds)
  - Provides sensory to supraglottic larynx
  - External branch vulnerable to thyroid surgery

## Vocal Fold Lesions: Pathology

### Vocal Fold Nodules

**Histopathology:**
- Fibrous tissue deposition
- Hyalinization of superficial lamina propria
- Bilateral at junction of anterior and middle thirds
- From chronic vocal trauma

**Clinical features:**
- Voice abuse history
- Bilateral lesions
- Type III or IV lesions (S perce) classification
- Voice therapy first-line
- Surgery rarely indicated (high recurrence)

### Vocal Fold Polyps

**Pathophysiology:**
- Vocal hemorrhage organization
- Vascular lesion
- Usually unilateral
- May be pedunculated or broad-based

**Clinical features:**
- Acute voice change after trauma
- May resolve with voice rest
- Persistent lesions require microlaryngoscopy

### Vocal Fold Cysts

**Types:**
- **Mucus retention cyst:** Obstructed gland
- **Epidermoid inclusion cyst:** Trapped epithelium
- Both located within lamina propria

**Clinical features:**
- Unilateral
- Deep to epithelium
- Require surgical excision
- Recurrence possible if not completely removed

### Reinke Edema

**Pathophysiology:**
- Fluid accumulation in Reinke space
- Smoking is major risk factor
- Also vocal abuse, LPR
- Bilateral, symmetric

**Clinical features:**
- Low, rough voice
- Female-predominant
- Associated with smoking
- May require surgery for severe cases

## Neurologic Causes

### Vocal Fold Paralysis

**Etiology:**
- **Surgical (50%):** Thyroidectomy, cardiac, carotid, cervical spine
- **Malignancy (30%):** Lung, thyroid, esophageal tumors
- **Neurologic (10%):** Stroke, MS, ALS
- **Idiopathic (10%)**

**Classification:**
- **Unilateral:**
  - Breathy voice
  - Aspirates thin liquids
  - Incomplete compensation possible
- **Bilateral:**
  - Stridor, airway distress
  - Aphonia or whispery voice
  - May require tracheostomy

**Evaluation:**
- Laryngoscopy: Immobility or reduced mobility
- Stroboscopy: Absent or reduced vibration
- CT neck/thorax: Identify RLN pathology
- Laryngeal EMG: Prognosis, differentiate neurogenic vs mechanical

**Treatment:**
- Unilateral:
  - Voice therapy (compensatory techniques)
  - Vocal fold injection medialization
  - Medialization thyroplasty (type I)
  - Arytenoid adduction
- Bilateral:
  - Tracheostomy if airway compromise
  - Cordotomy (laser)
  - Arytenoidectomy
  - Medialization procedures (careful to maintain airway)

### Spasmodic Dysphonia

**Types:**
- **Adductor type:** Strained, strangled voice
- **Abductor type:** Breathy voice breaks
- **Mixed:** Features of both

**Pathophysiology:**
- Neurologic disorder
- Dystonia of laryngeal muscles
- Basal ganglia dysfunction
- Task-specific (speaking, singing)

**Treatment:**
- Botox injections (botulinum toxin)
- Voice therapy (adjunct)
- Medications limited efficacy

## Inflammatory Conditions

### Laryngopharyngeal Reflux

**Pathophysiology:**
- Gastroduodenal contents reflux to larynx
- Pepsin and acid cause damage
- Multiple reflux episodes daily
- Upper and lower esophageal sphincter dysfunction

**Laryngeal findings:**
- Posterior commissure hypertrophy
- Pseudosulcus (infraglottic edema)
- Erythema
- Vocal fold edema
- Granuloma formation

**Diagnosis:**
- Clinical diagnosis primarily
- pH monitoring (dual probe)
- Multichannel intraluminal impedance (MII-pH)
- Laryngoscopy findings

**Treatment:**
- PPI therapy (twice daily for 3-6 months)
- Dietary and lifestyle modifications
- Alginate therapy
- Surgical fundoplication (refractory cases)

### Chronic Laryngitis

**Causes:**
- Smoking (most common)
- Alcohol
- Environmental irritants
- Allergic rhinitis (post-nasal drip)
- Chronic LPR

**Histopathology:**
- Epithelial hyperplasia
- Keratosis
- Subepithelial inflammation
- Fibrosis (chronic)

**Precancerous changes:**
- Dysplasia (mild, moderate, severe)
- Carcinoma in situ
- Risk factors: Smoking, alcohol

## Diagnostic Approach

### Laryngeal Examination

**Flexible fiberoptic laryngoscopy:**
- Office-based
- Topical anesthesia
- Dynamic assessment
- Assesses mobility, lesions

**Rigid laryngoscopy:**
- Operating room or office
- Superior visualization
- Stroboscopy possible
- Biopsy capability

**Stroboscopy:**
- Assesses vocal fold vibration
- Mucosal wave assessment
- Identifies subtle lesions
- Essential for professional voice users
- Pre-operative planning

### Imaging

**Indications:**
- Suspected malignancy
- Vocal fold paralysis (evaluate nerve course)
- Thyroid pathology
- Neck masses
- Trauma

**CT neck:**
- Vocal fold paralysis workup
- Thyroid evaluation
- Neck masses
- Cartilage invasion

**MRI:**
- Soft tissue characterization
- Vascular lesions
- Paralaryngeal spaces
- Suspected malignancy

**PET/CT:**
- Malignancy staging
- Unknown primary

### Differential Diagnosis

**Red flag symptoms:**
- Dysphagia
- Odynophagia
- Weight loss
- Hemoptysis
- Neck mass
- Otalgia (referred ear pain)
- Dyspnea
- Smoking history
- Alcohol use

**Urgent evaluation for:**
- Hoarseness > 4 weeks duration
- Any red flag symptoms
- Progressive symptoms

## Treatment Approaches

### Voice Therapy

**Indications:**
- Muscle tension dysphonia
- Vocal nodules
- Post-operative rehabilitation
- Vocal fold paralysis compensation
- Professional voice users

**Techniques:**
- Respiratory retraining
- Relaxation exercises
- Resonance therapy
- Chant speech
- Yawn-sigh technique
- Circumlaryngeal massage

**Expected outcomes:**
- Improved voice quality
- Reduced vocal fatigue
- Increased vocal range
- Prevention of recurrence

### Surgical Intervention

**Microlaryngoscopy:**
- Microsurgical excision
- Cold steel or laser
- Indications:
  - Vocal fold polyps
  - Cysts
  - Granulomas
  - Suspected malignancy

**Laser surgery:**
- CO2 laser most common
- Photoangiolytic lasers (KTP, PDL)
- Angiolytic for vascular lesions

**Injection laryngoplasty:**
- Office-based or operating room
- Materials: Gelfoam, fat, calcium hydroxylapatite
- Indications: Vocal fold paralysis, atrophy, presbyphonia
- Temporary or permanent options

**Medialization thyroplasty:**
- Type I procedure
- Silicone or Gore-Tex implant
- For unilateral paralysis
- Permanent medialization`,
      keyTerms: [
        { term: 'dysphonia', definition: 'Abnormal voice production; includes hoarseness, breathiness, strain, and other voice changes' },
        { term: 'stroboscopy', definition: 'Examination using flashing light to assess vocal fold vibration in slow motion' },
        { term: 'mucosal wave', definition: 'Wave-like movement of vocal fold cover during phonation; critical for normal voice' },
        { term: 'Reinke space', definition: 'Superficial lamina propria; vibratory layer of vocal folds' },
        { term: 'spasmodic dysphonia', definition: 'Focal dystonia causing involuntary vocal cord spasms; treated with Botox' },
        { term: 'microlaryngoscopy', definition: 'Microscopic examination and surgery of the larynx' },
      ],
      clinicalNotes: 'Hoarseness > 2-3 weeks warrants laryngoscopic evaluation. Flexible laryngoscopy first-line; add stroboscopy for professional voice users or subtle findings. Most common causes: acute laryngitis, LPR, vocal abuse. Red flags: dysphagia, weight loss, neck mass, smoking history, hoarseness > 4 weeks (urgent ENT referral). Voice therapy for nodules, muscle tension dysphonia. Surgical excision for polyps, cysts, suspicious lesions.',
    },
    4: {
      level: 4,
      summary: 'Dysphonia management requires systematic evaluation including laryngoscopy with stroboscopy, precise diagnosis of vocal fold pathology, and individualized treatment incorporating voice therapy, medical management, and surgical intervention when indicated.',
      explanation: `## Evidence-Based Evaluation

### Appropriateness of Laryngoscopy

**Clinical guidelines consensus:**
- Hoarseness > 2-3 weeks: Imaging indicated
- Hoarseness > 4 weeks: Urgent evaluation
- Red flag symptoms: Immediate evaluation

**Red flags requiring urgent ENT referral:**
- Dysphagia or odynophagia
- Weight loss
- Hemoptysis
- Neck mass
- referred otalgia
- Dyspnea
- Smoking history > 10 pack-years
- Alcohol use
- Male sex > 50 years with hoarseness

### Imaging Strategies

**Flexible vs rigid laryngoscopy:**
- Flexible: Office-based, dynamic assessment, tolerated well
- Rigid: Superior visualization, stroboscopy capability
- Combined approach often optimal

**Stroboscopy indications:**
- Professional voice users
- Persistent symptoms despite normal flexible exam
- Pre-operative planning
- Post-operative assessment
- Voice therapy planning

**CT/MRI utilization:**
- Not indicated for uncomplicated hoarseness
- Indicated for:
  - Vocal fold paralysis
  - Suspected malignancy
  - Neck masses
  - Trauma
  - Infection tracking

## Treatment Evidence

### Voice Therapy Outcomes

**Meta-analysis data:**
- Nodules: 60-80% improvement with voice therapy alone
- Muscle tension dysphonia: 80-90% improvement
- Vocal fatigue: 70-80% improvement
- Comparable outcomes to surgery for nodules

**Voice therapy vs surgery (nodules):**
- Similar long-term voice outcomes
- Voice therapy lower complication rate
- Surgery reserved for failed therapy
- Recurrence higher without voice therapy after surgery

### Medical Management Evidence

**PPI for LPR:**
- Evidence limited but supports use
- Requires twice-daily dosing
- Minimum 3-month trial
- Better for reflux symptoms than hoarseness alone
- Overutilization in clinical practice

**Steroids for acute laryngitis:**
- Evidence for modest voice improvement
- Reserved for urgent vocal needs
- Not recommended for routine use
- Risks: Delayed healing, masking symptoms

### Surgical Outcomes

**Microlaryngoscopy complications:**
- Minor: 5-10% (granuloma, edema)
- Major: < 2% (scar, web formation)
- Voice outcomes: Good to excellent in 80-90%

**Injection laryngoscopy outcomes:**
- Gelfoam: Temporary (4-6 weeks)
- Fat: Semi-permanent (6-12 months)
- Calcium hydroxylapatite: Permanent
- Voice improvement: 70-80%

**Medialization thyroplasty:**
- Voice improvement: 80-90%
- Airway compromise risk: 5%
- Revision rate: 10-20%
- Patient satisfaction: High

## Special Populations

### Professional Voice Users

**Unique considerations:**
- Greater impact from voice problems
- Higher expectations for voice quality
- May seek evaluation earlier
- Require stroboscopy for subtle findings

**Common issues:**
- Muscle tension dysphonia
- Vocal nodules (singers, teachers)
- Performance anxiety
- Overuse syndromes

**Management:**
- Low threshold for stroboscopy
- Voice therapy first-line for most lesions
- Multidisciplinary team approach
- Consider career implications

### Elderly

**Presbyphonia (aging voice):**
- Vocal fold atrophy
- Mucosal changes
- Reduced respiratory support
- Voice changes: Higher pitch in men, lower in women

**Management:**
- Voice therapy effective
- Injection medialization (office)
- May need repeat treatments
- Quality of life considerations

### Geriatric Hoarseness

**Common causes:**
- Presbylarynx (aging changes)
- Vocal fold atrophy
- Neurologic conditions
- Polymedication effects
- Increased malignancy risk

**Evaluation:**
- Lower threshold for imaging
- Comprehensive medical evaluation
- Medication review
- Functional assessment (swallowing, airway)

## Chronic Dysphonia

### Etiology

**Structural:**
- Vocal fold scar
- Sulcus vocalis
- Vocal fold atrophy
- Pseudocleft
- Web/synechiae

**Neurologic:**
- Parkinson disease
- Essential tremor
- Stroke
- ALS
- Aging

**Functional:**
- Muscle tension dysphonia
- Conversion dysphonia/aphonia
- Psychogenic dysphonia

### Treatment Challenges

**Vocal fold scar:**
- Limited treatment options
- Voice therapy adaptation
- Surgical scar excision
- Laser treatments with limited success
- Research ongoing (stromal cells, biomaterials)

**Presbyphonia:**
- Voice therapy effective
- Injection medialization
- May need repeat treatments
- Exercise compliance essential

## Quality Improvement

**Appropriate evaluation metrics:**
- Laryngoscopy before imaging
- Stroboscopy for professional voice users
- CT/MRI utilization appropriateness
- ENT referral timeliness

**Treatment outcome measures:**
- Voice Handicap Index (VHI-10)
- Patient satisfaction
- Return to normal voice function
- Professional voice users: Return to performance

**Prevention metrics:**
- Voice education for professional users
- Smoking cessation programs
- LPR management adherence`,
      keyTerms: [
        { term: 'presbyphonia', definition: 'Age-related voice changes from vocal fold atrophy and mucosal changes' },
        { term: 'muscle tension dysphonia', definition: 'Hyperfunctional voice disorder from excessive laryngeal muscle tension' },
        { term: 'VHI', definition: 'Voice Handicap Index; validated 10-item questionnaire measuring voice-related quality of life' },
        { term: 'injection laryngoplasty', definition: 'Office-based procedure injecting material into vocal fold for medialization' },
        { term: 'medialization thyroplasty', definition: 'Surgical procedure placing implant medial to vocal fold for paralysis or atrophy' },
      ],
      clinicalNotes: 'Hoarseness > 2-3 weeks warrants laryngoscopy. Red flags: dysphagia, weight loss, neck mass, hemoptysis, smoking, hoarseness > 4 weeks (urgent ENT referral). Flexible laryngoscopy first-line; add stroboscopy for professional voice users or persistent symptoms. Voice therapy first-line for nodules, muscle tension dysphonia (60-80% success). Surgery for polyps, cysts, malignancy. Injection medialization for paralysis/presbyphonia (70-80% improvement).',
    },
    5: {
      level: 5,
      summary: 'Contemporary dysphonia management integrates evidence-based diagnostic protocols, advanced imaging including stroboscopy, individualized treatment pathways incorporating voice therapy, medical management, and minimally invasive surgical techniques with focus on functional outcomes and quality of life.',
      explanation: `## Current Guidelines and Evidence

### AAO-HNS Hoarseness Guidelines (2018)

**Key recommendations:**
- Hoarseness > 2-3 weeks: Laryngoscopy indicated
- No imaging before laryngoscopy
- Anti-reflux medication only if reflux symptoms present
- Steroids only for urgent vocal needs
- Antibiotics only for confirmed bacterial infection
- Voice therapy effective for many causes

**Strong recommendations:**
- Laryngoscopy before imaging
- Evaluate for red flag symptoms
- Voice therapy for nodules, MTD
- Avoid anti-reflux medication without reflux symptoms

### Quality Improvement Initiatives

**Appropriate antibiotic use:**
- Most hoarseness is viral or non-infectious
- Antibiotics rarely indicated
- Only for confirmed bacterial laryngitis
- Audit and feedback reduces inappropriate use

**Appropriate imaging:**
- CT/MRI overutilization common
- Laryngoscopy first, imaging later
- Significant cost savings
- Reduced radiation exposure

**Voice therapy utilization:**
- Underutilized despite evidence
- Cost-effective first-line treatment
- Reduces need for surgery
- Improves patient satisfaction

## Advanced Diagnostic Techniques

### High-Speed Digital Imaging

**Digital kymography:**
- Captures vocal fold vibration at high speed
- Quantitative assessment of mucosal wave
- Identifies subtle asymmetries
- Research tool currently

**Narrow-band imaging:**
- Enhanced visualization of vascular patterns
- Identifies early malignancy
- Distinguishes benign from malignant lesions
- Guiding biopsy site selection

### Laryngeal EMG

**Indications:**
- Vocal fold paralysis prognostication
- Distinguish neurogenic from mechanical
- Differentiate RLN from SLN involvement
- Guide treatment decisions

**Utility:**
- Prognostic information at 6 weeks
- Predicts likelihood of recovery
- Guides timing of permanent medialization

## Treatment Advances

### Office-Based Procedures

**Awake injection laryngoplasty:**
- Topical anesthesia only
- Immediate voice improvement
- No general anesthesia
- Lower cost
- Can be repeated

**KTP laser angiolytic:**
- Office-based procedure
- Treatment of vascular lesions
- Polyps, ectasias, papillomas
- Preserves vocal fold mucosa

### Surgical Innovations

**Robotic surgery:**
- Transoral robotic surgery (TORS)
- Improved access to larynx
- Resection of laryngeal lesions
- Not yet widely adopted

**Cold knife vs laser:**
- Cold knife: Precise, less thermal injury
- Laser: Hemostasis, faster healing
- Choice based on lesion characteristics
- Hybrid approaches common

## Special Situations

### Transgender Voice

**Goals:**
- Pitch elevation for transfeminine
- Pitch lowering for transmasculine
- Resonance modification
- Communication style changes

**Treatment:**
- Voice therapy first-line
- Pitch surgery (type III thyroplasty) for select cases
- Combined hormonal and behavioral approach
- Individualized goals

### Pediatric Dysphonia

**Unique considerations:**
- Vocal nodules common (screaming)
- Papilloma (HPV)
- Respiratory papillomatosis
- Congenital anomalies

**Management:**
- Voice therapy first-line for nodules
- Surgical debulking for papillomatosis
- Multidisciplinary team approach

## Emerging Therapies

### Vocal Fold Scar Treatment

**Stem cell therapy:**
- Autologous stem cell injection
- Research phase
- Promising early results

**Biomaterials:**
- Inject able biomaterials
- Replace lost superficial lamina propria
- Ongoing research

**Laser therapy:**
- Fractionated CO2 laser
- Improves pliability
- Limited data currently

### Neurologic Dysphonia

**New treatments:**
- Selective laryngeal adductor botox
- Bilateral thyroarytenoid injections
- Deep brain stimulation (research)
- Neuromodulation techniques

## Prognostic Factors

**Good voice recovery:**
- Recent onset (< 6 months)
- Younger age
- No smoking
- Prompt treatment
- Good compliance with therapy

**Poor voice recovery:**
- Chronic dysphonia (> 1 year)
- Vocal fold scar
- Advanced age
- Smoking
- Delayed treatment
- Poor compliance

## Quality Metrics

**Process measures:**
- Time to laryngoscopy
- Appropriate use of imaging
- Voice therapy utilization
- Red flag recognition

**Outcome measures:**
- VHI-10 scores
- Patient satisfaction
- Voice-related quality of life
- Professional voice user outcomes

**Cost considerations:**
- Voice therapy cost-effective first-line
- Imaging overuse adds cost
- Appropriate specialist referral
- Value-based care approaches`,
      keyTerms: [
        { term: 'kymography', definition: 'High-speed imaging technique to analyze vocal fold vibration patterns' },
        { term: 'narrow-band imaging', definition: 'Endoscopic technique enhancing vascular visualization to identify early malignancy' },
        { term: 'presbyphonia', definition: 'Age-related voice changes from vocal fold atrophy and mucosal changes' },
        { term: 'KTP laser', definition: 'Potassium titanyl phosphate laser; angiolytic laser for vascular lesions' },
        { term: 'VHI-10', definition: 'Voice Handicap Index-10; validated questionnaire measuring voice-related quality of life' },
      ],
      clinicalNotes: `Key clinical practice points:

1. **Evaluation timeline:** Hoarseness > 2-3 weeks warrants laryngoscopy. Hoarseness > 4 weeks or red flags (dysphagia, weight loss, neck mass, hemoptysis, smoking) = urgent ENT referral. Laryngoscopy BEFORE imaging.

2. **Examination:** Flexible laryngoscopy first-line. Add stroboscopy for professional voice users, subtle findings, or pre-operative planning. Laryngeal EMG for paralysis prognostication at 6 weeks.

3. **Common causes:** Acute laryngitis (viral, self-limited), LPR (treat with PPI BID x 3 months), vocal abuse/misuse (voice therapy), smoking (smoking cessation critical).

4. **Vocal lesions:** Nodules: voice therapy first-line (60-80% success), surgery rarely indicated. Polyps/cysts: surgical excision. Reinke edema: smoking cessation +/ surgery. Granuloma: treat LPR + voice therapy, surgery if persistent.

5. **Neurologic:** Paralysis: evaluate cause, voice therapy for compensation, injection medialization or medialization thyroplasty. Spasmodic dysphonia: Botox injections.

6. **Red flags:** Dysphagia, odynophagia, weight loss, hemoptysis, neck mass, referred otalgia, dyspnea, smoking history, alcohol use. Low threshold for urgent ENT referral and biopsy.

7. **Voice therapy:** First-line for nodules, muscle tension dysphonia, post-op rehab. Reduces need for surgery, 70-90% improvement for appropriate indications.

8. **Medications:** PPIs only if reflux symptoms present (overutilized). Steroids only for urgent vocal needs (not routine). Antibiotics only for confirmed bacterial (rare).

9. **Special populations:** Professional voice users: stroboscopy early, voice therapy first-line, lower surgical threshold. Elderly: presbyphonia, injection medialization effective. Pediatric: nodules common, voice therapy, papilloma (surgical debulking).

10. **Follow-up:** Document response to therapy. Persistent or worsening symptoms: repeat laryngoscopy or biopsy. Malignancy risk increases with smoking, alcohol, age.`,
    },
  },

  media: [
    {
      id: 'vocal-fold-anatomy',
      type: 'diagram',
      filename: 'vocal-fold-anatomy.svg',
      title: 'Vocal Fold Anatomy',
      description: 'Structure and layers of the vocal folds',
    },
    {
      id: 'vocal-fold-lesions',
      type: 'diagram',
      filename: 'vocal-fold-lesions.svg',
      title: 'Vocal Fold Lesions',
      description: 'Comparison of nodules, polyps, cysts, and other vocal fold lesions',
    },
    {
      id: 'laryngoscopy',
      type: 'diagram',
      filename: 'laryngoscopy.svg',
      title: 'Laryngoscopy Examination',
      description: 'Flexible and rigid laryngoscopy procedures',
    },
    {
      id: 'vocal-fold-paralysis',
      type: 'diagram',
      filename: 'vocal-fold-paralysis.svg',
      title: 'Vocal Fold Paralysis',
      description: 'Normal and paralyzed vocal fold positions',
    },
  ],

  citations: [
    {
      id: 'aao-hns-hoarseness-2018',
      type: 'article',
      title: 'Clinical Practice Guideline: Hoarseness (Dysphonia) (Update)',
      authors: ['Stachler RJ', 'Francis DO', 'Schwartz SR', 'et al.'],
      source: 'Otolaryngology-Head and Neck Surgery',
      url: 'https://doi.org/10.1177/0194599818779326',
    },
    {
      id: 'uptodate-hoarseness',
      type: 'article',
      title: 'Evaluation of hoarseness in adults',
      authors: ['Altman KW'],
      source: 'UpToDate',
      accessedDate: '2025-01-26',
    },
  ],

  crossReferences: [
    { targetId: 'structure-larynx', targetType: 'structure', relationship: 'related', label: 'Larynx' },
    { targetId: 'structure-vocal-folds', targetType: 'structure', relationship: 'related', label: 'Vocal Folds' },
    { targetId: 'condition-gerd', targetType: 'condition', relationship: 'related', label: 'GERD' },
    { targetId: 'condition-laryngeal-cancer', targetType: 'condition', relationship: 'related', label: 'Laryngeal Cancer' },
  ],

  tags: {
    systems: ['ent'],
    topics: ['otolaryngology', 'speech pathology', 'professional voice'],
    keywords: ['hoarseness', 'dysphonia', 'vocal cords', 'vocal folds', 'laryngitis', 'nodules', 'polyps', 'voice therapy'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['otolaryngology', 'family medicine'],
    },
  },

  createdAt: '2025-01-26T00:00:00.000Z',
  updatedAt: '2025-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default hoarseness;
