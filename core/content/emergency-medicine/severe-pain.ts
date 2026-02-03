/**
 * Severe Pain Assessment - OPQRST and Emergency Pain Evaluation
 *
 * Comprehensive content on acute severe pain assessment including OPQRST
 * history, red flags, differential diagnosis, and emergency management.
 */

import { EducationalContent } from '../types';

export const severePain: EducationalContent = {
  id: 'emergency-severe-pain',
  type: 'topic',
  name: 'Severe Pain Assessment',
  alternateNames: ['Acute Pain', 'Pain Assessment', 'OPQRST', 'Emergency Pain Evaluation'],

  levels: {
    1: {
      level: 1,
      summary: 'Severe pain is your body\'s way of telling you something is wrong. Learning to describe pain accurately helps doctors find and treat the cause faster.',
      explanation: `## What Is Severe Pain?

Pain is your body's alarm system. When something hurts badly, your body is telling you that something is wrong and needs attention.

**Severe pain:**
- Stops you from doing normal activities
- May be the worst pain you've ever felt
- Needs medical evaluation

**Remember:** Pain is different for everyone. What feels terrible to one person might be bearable to another.

## Describing Your Pain

To help doctors help you, be specific about your pain:

### Where Is It?
- Point to exactly where it hurts
- Does the pain spread (radiate) to other areas?
- Is it in one spot or all over?

### What Does It Feel Like?
- Burning, like fire
- Throbbing, like a heartbeat
- Sharp, like a knife
- Dull, like an ache
- Cramping, like a muscle squeeze
- Pressure, like something squeezing
- Stabbing, like being stuck with a needle

### How Bad Is It?
Use a pain scale from 0-10:
- **0:** No pain at all
- **1-3:** Mild pain (annoying)
- **4-6:** Moderate pain (bothersome)
- **7-10:** Severe pain (can't ignore it)

### When Did It Start?
- Did it come on suddenly or gradually?
- Was there something that caused it?
- How long have you had it?

### What Makes It Better or Worse?
- Does movement make it worse?
- Does resting help?
- Does eating affect it?
- Do medicines help?

## Types of Severe Pain That Need Emergency Care

### Chest Pain
**CALL 911 IMMEDIATELY!**
- Could be heart attack
- May also be: Lung problems, heartburn, muscle strain
- Better safe than sorry!

### Severe Abdominal Pain
- Appendicitis
- Gallbladder problems
- Kidney stones
- Bowel obstruction

### Severe Headache
- "Worst headache of my life"
- Sudden, severe pain
- Could be: Migraine, meningitis, bleeding in brain

### Back Pain with Warning Signs
- After fall or injury
- Weakness or numbness in legs
- Loss of bladder/bowel control

## What To Do

**If someone has severe pain:**

1. **Call 911 if:**
   - Chest pain or pressure
   - Difficulty breathing
   - Sudden, severe headache
   - Abdominal pain with fever
   - Pain after major injury

2. **Keep them comfortable**
   - Don't move them if injured
   - Offer reassurance
   - Apply ice or heat if appropriate

3. **Gather information**
   - When did pain start?
   - What makes it better or worse?
   - Any medical problems?
   - What medications do they take?

4. **Stay with them**
   - Help them stay calm
   - Watch for changes

## Pain Medicines

**Over-the-counter options:**
- Acetaminophen (Tylenol)
- Ibuprofen (Advil, Motrin)
- Naproxen (Aleve)

**Important:**
- Follow dosage directions
- Don't take more than recommended
- Some people shouldn't take certain medicines
- Tell doctor about all medicines you take

**Prescription pain medicines:**
- Only used for severe pain
- Can be addictive
- Take exactly as prescribed
- Never share prescription pain medicine

## Red Flags - When Pain Is an Emergency

**Seek immediate care for:**
- Chest pain or pressure (heart attack?)
- Sudden, severe headache (stroke?)
- Abdominal pain with fever (appendicitis?)
- Pain with shortness of breath
- Pain after injury (broken bone?)
- Pain with loss of consciousness
- Pain that's different from your usual pattern

## Remember

**Pain is a symptom, not the disease.**

Doctors need to find what's causing the pain to treat it properly. Don't just mask the pain - get to the root cause!

**Severe pain is your body's way of asking for help. Listen to it!**`,
      keyTerms: [
        { term: 'pain scale', definition: 'A way to measure pain intensity, usually from 0 (no pain) to 10 (worst possible pain)' },
        { term: 'radiation', definition: 'When pain spreads from one area to another, like arm pain from a heart attack' },
        { term: 'chest pain', definition: 'Pain in the chest area; can be heart attack but also other causes' },
        { term: 'acute pain', definition: 'Pain that starts suddenly and usually lasts a short time; from injury or sudden illness' },
        { term: 'chronic pain', definition: 'Pain that lasts a long time, usually more than 3 months' },
      ],
      analogies: [
        'Pain is like a fire alarm - sometimes it\'s a false alarm, but you need to check to make sure there\'s no fire.',
        'The pain scale is like a volume knob - 0 is silent and 10 is maximum volume.',
        'Radiating pain is like throwing a stone in water - the ripples spread outward from where the stone landed.',
      ],
      examples: [
        'A 45-year-old man has chest pressure that spreads to his left arm. He feels sweaty and nauseous. This could be a heart attack - 911 should be called.',
        'A teenager has sudden severe headache with stiff neck and fever. This could be meningitis - needs emergency care.',
        'A woman has severe pain in her right lower abdomen with fever. This could be appendicitis - needs emergency evaluation.',
      ],
      patientCounselingPoints: [
        'Always tell your doctor about your pain - don\'t try to be tough',
        'Be specific when describing your pain - where, what it feels like, what makes it better or worse',
        'Chest pain is never normal - always get it checked out',
        'Keep a list of your medications and allergies for emergencies',
      ],
    },

    2: {
      level: 2,
      summary: 'Systematic pain assessment using OPQRST helps identify life-threatening causes and guide appropriate management. Recognizing red flags is essential for safe pain evaluation.',
      explanation: `## Pain Assessment Framework

Pain assessment in emergency medicine uses systematic approaches to identify serious causes quickly and safely.

## OPQRST Method

**O - Onset:**
- When did it start?
- Was it sudden or gradual?
- What were you doing when it started?
- Has this happened before?

**P - Provocation/Palliation:**
- What makes it worse?
- What makes it better?
- Does movement affect it?
- Does eating affect it?
- Do medications help?

**Q - Quality:**
- What does the pain feel like?
- Burning, sharp, dull, aching, pressure, cramping?
- Is it constant or does it come and go?

**R - Region/Radiation:**
- Where exactly is the pain?
- Does it move (radiate) to other areas?
- Point to the exact location

**S - Severity:**
- Rate on 0-10 scale (0 = no pain, 10 = worst possible)
- How does this compare to previous pain you've had?
- Is it getting better, worse, or staying the same?

**T - Time:**
- How long have you had this pain?
- Is it constant or intermittent?
- How long does each episode last?

## Pain Assessment Tools

**Numeric Rating Scale (NRS):**
- 0-10 scale
- 0 = no pain, 10 = worst imaginable pain
- Most commonly used in adults

**Faces Pain Scale:**
- 6 faces showing different pain levels
- Used for children, adults with cognitive impairment
- 0 = no hurt, 10 = hurts worst

**FLACC Scale:**
- Used for non-verbal patients
- Assesses: Face, Legs, Activity, Cry, Consolability
- Each scored 0-2, total 0-10

## Chest Pain Assessment

**Immediate assessment (Chest Pain Red Flags):**

| Red Flag | Concern |
|----------|---------|
| Central chest pressure | Cardiac ischemia |
| Radiation to jaw/arm | Cardiac ischemia |
| Shortness of breath | Cardiac or pulmonary |
| Diaphoresis | Cardiac ischemia |
| Nausea/vomiting | Cardiac ischemia |
| Tearing pain | Aortic dissection |
| Pain reproducible by palpation | Musculoskeletal (good sign) |

**Time is muscle!** Chest pain requires rapid assessment to rule out life-threatening causes.

## Abdominal Pain Assessment

**Surgical abdomen red flags:**
- Rigidity (board-like abdomen)
- Rebound tenderness (pain when pressure released)
- Guarding (protecting abdomen)
- Absent bowel sounds
- Fever with abdominal pain

**Location-based differential:**

| Location | Concerns |
|----------|----------|
| Right upper quadrant | Gallbladder, liver |
| Left upper quadrant | Spleen, stomach, pancreas |
| Right lower quadrant | Appendix (especially if fever) |
| Left lower quadrant | Diverticulitis, ovarian |
| Periumbilical | Early appendicitis, small bowel |
| Suprapubic | Bladder, uterus, prostate |

## Headache Assessment

**Red flags (SNNOOP10):**
- **S**ystemic symptoms (fever, weight loss)
- **N**eurologic symptoms (weakness, confusion)
- **N**eck stiffness
- **O**nset (sudden, thunderclap)
- **O**lder (>50 new headache)
- **P**ositional (worse when lying down)
- **P**revious headache history (different pattern)
- **P**apilledema (swelling in back of eye)
- **P**recipitated by valsalva (coughing, sneezing)
- **P**regnancy or postpartum

**"Worst headache of my life" = subarachnoid hemorrhage until proven otherwise**

## Back Pain Assessment

**Red flags:**
- Trauma (fall, accident)
- Fever (infection)
- Unexplained weight loss (cancer)
- Night pain (worse at night, may be cancer)
- Morning stiffness (inflammatory)
- Bowel/bladder problems (cauda equina syndrome)
- Progressive weakness
- History of cancer

**Cauda equina syndrome is a surgical emergency!**

## Pain in Special Populations

**Elderly patients:**
- May present atypically (confusion instead of pain)
- "Silent" heart attacks and MIs more common
- Pain tolerance may be higher
- Multiple medical problems complicate diagnosis

**Pediatric patients:**
- Can't always communicate pain location
- Irritability may be pain
- Changes in behavior may indicate pain
- Abdominal pain common in children

**Pregnant patients:**
- Normal physiologic changes affect examination
- Concerns for fetus with imaging/medications
- PE and DVT risk increased
- Appendicitis appendix moves upward in pregnancy

**Cognitively impaired:**
- May not be able to communicate pain
- Look for behavioral changes
- Facial expressions, restlessness, guarding
- Ask caregivers about baseline

## Documentation

**Pain documentation includes:**
- Location
- Character (quality)
- Severity (0-10)
- Onset and duration
- Radiation
- Provocating and palliating factors
- Associated symptoms
- Previous episodes

**Example documentation:**
"Chest pain, central, pressure-like, 8/10, started 1 hour ago while walking, radiates to left arm, associated with diaphoresis and nausea"

**Include reassessment:**
- After interventions
- With vital sign changes
- Response to medications`,
      keyTerms: [
        { term: 'OPQRST', definition: 'Mnemonic for pain assessment: Onset, Provocation, Quality, Radiation, Severity, Time' },
        { term: 'rebound tenderness', definition: 'Pain when pressure on abdomen is released; sign of peritonitis' },
        { term: 'guarding', definition: 'Tensing abdominal muscles to protect from pain; can be voluntary or involuntary' },
        { term: 'thunderclap headache', definition: 'Sudden, severe headache that reaches maximum intensity within seconds; suggests subarachnoid hemorrhage' },
        { term: 'cauda equina syndrome', definition: 'Compression of nerve roots at lower end of spinal cord; causes bowel/bladder incontinence, leg weakness. Surgical emergency!' },
        { term: 'surgical abdomen', definition: 'Abdominal condition requiring surgery; signs include rigidity, rebound, guarding' },
      ],
      analogies: [
        'Rebound tenderness is like letting go of a stretched rubber band - the snap back hurts more than the stretch itself.',
        'A "thunderclap" headache is called that because it\'s sudden and loud like a thunderclap - not a rumble that builds up.',
        'Cauda equina syndrome is like cutting the power cord to your house - everything below the cut stops working.',
      ],
      examples: [
        'Chest pain assessment: 60-year-old man with central chest pressure 8/10, started 30 minutes ago walking, radiates to left arm, associated with sweating. 911 activated. STEMI protocol initiated.',
        'Abdominal pain: 22-year-old woman with RLQ pain 7/10, started 12 hours ago periumbilical, moved to RLQ. Fever 101°F, rebound positive. Appendicitis suspected. Surgery consulted.',
        'Headache: 45-year-old with "worst headache of my life," started suddenly at peak. Neurologic exam normal. CT ordered to rule out subarachnoid hemorrhage.',
      ],
      patientCounselingPoints: [
        'Be specific about your pain - where, what it feels like, what makes it better or worse',
        'Chest pain should never be ignored - even if you think it might be heartburn',
        'Keep a pain diary noting when pain occurs, what you were doing, and what helps',
        'Don\'t wait to see if severe pain goes away on its own - get it checked out',
      ],
    },

    3: {
      level: 3,
      summary: 'Comprehensive pain assessment requires systematic history taking, recognition of red flags, differential diagnosis based on pain characteristics, and appropriate use of diagnostic testing.',
      explanation: `## Advanced Pain Assessment

Pain is a complex experience with sensory, emotional, and cognitive components. Emergency assessment must rapidly identify life-threatening causes while providing comfort.

## Pain Physiology

**Pain types:**
- **Nociceptive:** Tissue damage (somatic, visceral)
- **Neuropathic:** Nerve damage or dysfunction
- **Nociplastic:** Central sensitization (fibromyalgia)

**Somatic vs visceral pain:**

| Feature | Somatic | Visceral |
|---------|----------|----------|
| Source | Skin, muscle, bone | Organs |
| Quality | Sharp, well-localized | Dull, poorly localized |
| Radiation | Minimal | Common (referred pain) |
| Examples | Fracture, laceration | Appendicitis, cholecystitis |

## Comprehensive Pain History

**SOCRATES alternative to OPQRST:**

**S**ite: Location, radiation
**O**nset: Gradual vs sudden, duration
**C**haracter: Sharp, dull, burning, etc.
**R**adiation: Spread to other areas
**A**ssociated symptoms: Nausea, vomiting, sweating
**T**iming: Constant, intermittent, duration
**E**xacerbating/relieving factors
**S**everity: 0-10 scale

**Additional elements:**
- Previous similar episodes
- Impact on daily activities
- Current medications
- Allergies
- Past medical history
- Social history (smoking, alcohol, drugs)

## Chest Pain Differential

**Life-threatening causes (must rule out):**

**Acute Coronary Syndrome (ACS):**
- Substernal chest pressure/squeezing
- Radiation to jaw, neck, shoulder, arm
- Associated: Diaphoresis, nausea, dyspnea
- Risk factors: HTN, DM, smoking, FHx
- **Time-critical:** "Time is muscle"

**Aortic Dissection:**
- Tearing or ripping sensation
- Radiation to back (between shoulder blades)
- Pulse deficits, blood pressure discrepancies
- **High mortality if missed**

**Pulmonary Embolism:**
- Pleuritic chest pain (worse with breathing)
- Shortness of breath, tachycardia
- Risk factors: DVT, surgery, cancer, immobilization
- Wells score for risk stratification

**Tension Pneumothorax:**
- Sudden sharp chest pain
- Dyspnea, decreased breath sounds
- Tracheal deviation away from affected side
- **Needle decompression is life-saving**

**Esophageal Rupture (Boerhaave syndrome):**
- Severe retching followed by chest pain
- Vomiting, epigastric pain
- Subcutaneous emphysema
- **High mortality if missed**

**Less urgent causes:**
- Pericarditis: Better leaning forward, friction rub
- Costochondritis: Reproducible with palpation
- GERD: Burning, associated with meals
- Musculoskeletal: Reproducible with movement

## Abdominal Pain Differential

**Quadrants and their concerns:**

**Right Upper Quadrant:**
- **Acute cholecystitis:** RUQ pain, fever, +Murphy's sign
- **Biliary colic:** Colicky pain, usually after meals
- **Hepatitis:** Dull RUQ pain, jaundice
- **Pneumonia:** Lower lobe pneumonia can cause RUQ pain
- **Pyelonephritis:** Upper kidney infection

**Left Upper Quadrant:**
- **Splenic infarct/rupture:** Left upper quadrant pain
- **Gastritis:** Burning LUQ pain, worse after eating
- **Pancreatitis:** Epigastric pain radiating to back, relieved sitting forward

**Right Lower Quadrant:**
- **Appendicitis:** Periumbilical to RLQ pain, fever, anorexia
- **Ovarian pathology:** Cyst, torsion, ectopic
- **Kidney stone:** Flank to groin pain, hematuria

**Left Lower Quadrant:**
- **Diverticulitis:** LLQ pain, fever, +LLQ tenderness
- **Ovarian pathology:** Cyst, torsion
- **Kidney stone:** Similar to right side

**Generalized or epigastric:**
- **Mesenteric ischemia:** Pain out of proportion to exam, "pain out of proportion"
- **Bowel obstruction:** Cramping, distension, vomiting
- **Peritonitis:** Diffuse pain, board-like abdomen
- **DKA:** Abdominal pain, vomiting, ketosis

## Headache Differential

**Primary headaches:**
- **Migraine:** Unilateral, throbbing, photophobia/phonophobia, nausea
- **Tension:** Bilateral, band-like, mild-moderate
- **Cluster:** Unilateral orbital, severe, tearing, nasal congestion

**Secondary headaches (red flags):**

**Subarachnoid Hemorrhage:**
- Thunderclap headache
- "Worst headache of my life"
- Meningeal signs (stiff neck)
- Negative CT doesn't rule out (LP if high suspicion)

**Meningitis:**
- Headache + fever + stiff neck
- Photophobia
- Altered mental status

**Giant Cell Arteritis:**
- New headache in patient >50
- Scalp tenderness, jaw claudication
- Visual changes
- **ESR elevated**
- **Treat with steroids to prevent blindness!**

**Temporal arteritis red flags:**
- Age >50
- New localized headache
- Scalp tenderness
- Jaw claudication
- Visual changes
- Elevated ESR/CRP

**Increased Intracranial Pressure:**
- Morning headache
- Worsens with Valsalva
- Nausea, vomiting
- Papilledema
- Focal neurologic deficits

## Back Pain Differential

**Red flags requiring immediate evaluation:**
- Cauda equina syndrome
- Spinal epidural abscess
- Vertebral fracture
- Malignancy

**Cauda Equina Syndrome:**
- Low back pain + bilateral leg weakness
- Saddle anesthesia (perineal numbness)
- Urinary retention or incontinence
- Fecal incontinence
- **Surgical emergency!**

**Spinal Epidural Abscess:**
- Back pain + fever
- Radicular pain
- Progressive weakness
- History of injection, IV drug use

**Vertebral Fracture:**
- Trauma or minimal trauma in osteoporosis
- Point tenderness over vertebra
- Height loss

**Malignancy:**
- Unrelenting pain, worse at night
- Weight loss
- Age >50 or history of cancer

## Diagnostic Testing

**Laboratory:**
- CBC (infection, anemia)
- BMP (electrolytes, kidney function)
- Troponin (cardiac ischemia)
- Lipase (pancreatitis)
- LFTs (gallbladder, liver)
- Urinalysis (kidney stone, infection)
- ESR/CRP (temporal arteritis, infection)

**Imaging:**
- **CXR:** Chest pain, cough, fever
- **CT head:** Headache red flags
- **CT abdomen/pelvis:** Abdominal pain, suspected surgical abdomen
- **US abdomen:** Gallbladder, appendix (especially in children, pregnancy)
- **MRI spine:** Cauda equina, cord compression

**ECG:**
- All chest pain
- May show ischemia, infarction, arrhythmia`,
      keyTerms: [
        { term: 'Murphys sign', definition: 'Inspiratory arrest during RUQ palpation; suggests cholecystitis' },
        { term: 'referred pain', definition: 'Pain perceived at location different from source; due to shared nerve pathways' },
        { term: 'jaw claudication', definition: 'Pain in jaw with chewing; suggests temporal arteritis or jaw ischemia' },
        { term: 'saddle anesthesia', definition: 'Numbness in perineal area; classic sign of cauda equina compression' },
        { term: 'Boerhaave syndrome', definition: 'Esophageal rupture from severe vomiting; presents with chest pain, epigastric pain, subcutaneous emphysema' },
        { term: 'pain out of proportion', definition: 'Severe pain with minimal physical findings; classic for mesenteric ischemia' },
      ],
      analogies: [
        'Referred pain is like a broken wire causing a light to flicker in a different room - the problem is in one place but shows up elsewhere.',
        'Pain out of proportion in mesenteric ischemia is like a house on fire with no visible flames from outside - the devastation inside doesn\'t match what you see on examination.',
        'Cauda equina syndrome is like a garden hose being stepped on at the faucet - nothing beyond that point gets water.',
      ],
      examples: [
        'Chest pain: 55-year-old diabetic with chest pressure, diaphoresis. ECG shows ST elevation V1-V4. STEMI diagnosed. Cath lab activated. Door-to-balloon 45 minutes.',
        'Abdominal pain: 28-year-old with RLQ pain, fever 102°F, rebound positive. WBC 16,000. Appendicitis diagnosed. Appendectomy performed. Pathology confirms acute appendicitis.',
        'Headache: 72-year-old with new headache, scalp tenderness, jaw pain when chewing. ESR 68. Temporal arteritis suspected. Prednisone 60 mg started. ESR confirmed.',
      ],
      patientCounselingPoints: [
        'Always describe your pain completely - don\'t leave out details that seem unimportant',
        'If you have temporal arteritis symptoms (headache over 50, jaw pain), seek care immediately to prevent blindness',
        'Back pain with leg weakness or bladder problems needs emergency evaluation',
        'Keep notes about when pain occurs and what triggers it - this helps your doctor',
      ],
    },

    4: {
      level: 4,
      summary: 'Advanced pain assessment integrates pathophysiology, red flag recognition, risk stratification tools, and targeted diagnostic testing to identify and treat life-threatening causes of severe pain.',
      explanation: `## Advanced Pain Pathophysiology

**Pain pathways:**
- **Transduction:** Nociceptor activation by noxious stimuli
- **Transmission:** A-delta and C fibers to spinal cord
- **Modulation:** Gate control theory, descending inhibition
- **Perception:** Cortical interpretation

**Nociceptor types:**
- **Mechanical:** Respond to pressure, stretch
- **Thermal:** Respond to temperature extremes
- **Chemical:** Respond to inflammatory mediators
- **Polymodal:** Respond to multiple stimuli

**Inflammatory mediators:**
- Bradykinin, histamine, serotonin, prostaglandins
- Potassium, hydrogen ions
- Growth factors
- Sensitize nociceptors → hyperalgesia

**Visceral pain characteristics:**
- Poorly localized (convergence-projection theory)
- Referred to somatic structures (dermatomes)
- Associated with autonomic symptoms (nausea, sweating, diaphoresis)
- Colicky pain: Peristaltic against obstruction

## Advanced Chest Pain Assessment

**Risk Stratification:**

**HEART score:**
| Component | 0 points | 1 point | 2 points |
|-----------|----------|----------|-----------|
| History | Suggestive non-ischemic | Moderately suspicious | Highly suspicious |
| ECG | Normal | Non-specific repolarization | Significant ischemia |
| Age | <45 | 45-64 | >65 |
| Risk factors | No risk factors | 1-2 risk factors | ≥3 risk factors |
| Troponin | Normal | ≤1x normal | >1x normal |

**Interpretation:**
- 0-3: Low risk (0.6% MACE at 6 weeks)
- 4-6: Intermediate risk
- ≥7: High risk (48% MACE at 6 weeks)

**TIMI risk score for UA/NSTEMI:**
- Age ≥65
- ≥3 CAD risk factors
- Prior CAD
- Aspirin use in past 7 days
- Severe angina
- ST deviation ≥0.5mm
- Positive cardiac markers
- Score 0-1: Low risk
- Score ≥2: Consider early invasive strategy

**Wells score for PE:**
| Feature | Points |
|---------|--------|
| DVT symptoms | 3 |
| PE as likely or more likely | 3 |
| Heart rate >100 | 1.5 |
| Immobilization/surgery | 1.5 |
| Previous DVT/PE | 1.5 |
| Hemoptysis | 1 |
| Cancer | 1 |

**Interpretation:**
- 0-1: Low (1.3% PE)
- 2-6: Moderate (16.2% PE)
- ≥7: High (40.7% PE)

## Advanced Abdominal Pain Assessment

**Clinical scoring systems:**

**Appendicitis:**
- **Alvarado score (MANTRELS):**
  - Migration (1), Anorexia (1), N/V (1)
  - Tenderness (2), Rebound (1)
  - Elevated temp (1), Leukocytosis (1)
  - Shift left (1)
  - Score ≥7: 80% probability

- **Pediatric Appendicitis Score:**
  - Similar to Alvarado but pediatric-specific
  - No fever in many children

**Cholecystitis:**
- **Murphy's sign:** 97% specificity
- **Sonographic Murphy's:** Positive on US
- **Rim sign:** Pericholecystic fluid on US

**Pancreatitis:**
- **Ranson criteria:** 11 factors
  - At admission: Age >55, WBC >16,000, glucose >200, LDH >350, AST >250
  - At 48h: Hematocrit drop >10%, Ca++ <8, PaO2 <60, base deficit >4, fluid sequestration >6L
  - 0-2: Mild, 3-5: Moderate, 6-11: Severe

**Mesenteric Ischemia:**
- **Acute arterial embolism:** AFib, atrial thrombus
- **Arterial thrombosis:** Atherosclerosis
- **Venous thrombosis:** Hypercoagulable, mesenteric vein thrombosis
- **Non-occlusive:** Splanchnic vasoconstriction (vasopressors)

**"Pain out of proportion"** is classic but late finding
- Mortality 60-80% if bowel infarction

## Advanced Headache Assessment

**ICHD-3 classification:**

**Migraine with aura:**
- Reversible aura symptoms (visual, sensory, speech)
- At least one aura symptom develops gradually over ≥5 min
- Aura lasts 5-60 min
- Headache follows within 60 min

**Cluster headache:**
- Unilateral orbital/supraorbital/temporal
- 15-180 min untreated
- Autonomic symptoms: Lacrimation, nasal congestion, ptosis, miosis
- Circadian periodicity (often at night)

**Trigeminal neuralgia:**
- Unilateral maxillary or mandibular distribution
- Trigger zones: Light touch, chewing, talking
- Electric shock-like pain
- Carbamazepine is first-line

**Giant Cell Arteritis:**
- **ACR criteria (1990):**
  - Age ≥50 (required)
  - New headache
  - Temporal artery abnormality
  - Elevated ESR
  - Abnormal artery biopsy
  - 3/5 = sensitivity 94%, specificity 91%

**Treatment:**
- **High-dose steroids:** Prednisone 40-60 mg daily
- **Temporal artery biopsy:** Within 1 week of starting steroids
- **Urgent:** To prevent irreversible blindness

**Pseudotumor cerebri (Idiopathic Intracranial Hypertension):**
- Headache, pulsatile tinnitus
- Visual obscurations
- Papilledema
- **Diagnosis:** Elevated opening pressure on LP (>25 cmH2O)
- **Treatment:** Weight loss, acetazolamide, VP shunt if refractory

## Advanced Back Pain Assessment

**Red flags revisited with evidence:**

**Cauda equina syndrome:**
- Sensitivity: ~90% for classic presentation
- Most common cause: Large central disc herniation
- **Time is nerves:** Surgical decompression within 48 hours improves outcomes

**Epidural abscess:**
- **Triad:** Back pain + fever + neurologic deficit (only 13%)
- Most common: Staph aureus
- **Risk factors:** IVDA, diabetes, immunocompromised
- **MRI with gadolinium** is diagnostic

**Vertebral compression fracture:**
- **Risk factors:** Age, osteoporosis, steroid use, cancer
- **Diagnosis:** Vertebral height loss >20%
- **Treatment:** Kyphoplasty/vertebroplasty for symptom relief

**Malignancy:**
- Multiple myeloma, metastases, primary bone tumors
- **Red flags:** Weight loss, age >50, night pain, history of cancer
- **Multiple myeloma workup:** SPEP, UPEP, serum free light chains

**Ankylosing spondylitis:**
- Inflammatory back pain
- Young age, male predominance
- Morning stiffness >30 min, improves with activity
- HLA-B27 positive in 90%

## Pain Assessment in Special Populations

**Elderly:**
- Atypical presentations common
- "Silent" MI (no pain, just dyspnea)
- Delirium may be only sign of severe illness
- Polypharmacy complicates assessment

**Pediatric:**
- Non-verbal children: Crying, irritability, guarding
- TODDLERS: The Objectively Defined Pain Scale
- CHEOPS: Children's Hospital of Eastern Ontario Pain Scale
- Parents/caregivers as historians

**Pregnancy:**
- RLQ pain: Appendicitis vs ectopic vs ovarian pathology
- Imaging: MRI preferred, US first
- Medication safety concerns

**Cognitively impaired:**
- Pain Assessment in Advanced Dementia (PAINAD)
- Pain assessment in non-communicative adults
- Behavioral changes: Agitation, restlessness, guarding

## Pain Management Considerations

**Oligoanalgesia:**
- Undertreatment of pain in ED
- More common in certain populations (elderly, minorities)
- Barriers: Fear of addiction, masking symptoms, respiratory depression

**Balanced analgesia:**
- Multimodal approach
- NSAID + acetaminophen + opioids
- Regional anesthesia when appropriate
- Non-pharmacologic: Ice, elevation, splinting

**Pain as the fifth vital sign:**
- Routine pain assessment
- JCAHO requirement in US hospitals
- Has improved pain management but may have contributed to opioid epidemic`,
      keyTerms: [
        { term: 'HEART score', definition: 'Chest pain risk stratification tool; History, ECG, Age, Risk factors, Troponin. Predicts MACE at 6 weeks' },
        { term: 'MACE', definition: 'Major Adverse Cardiac Events; includes death, MI, emergent revascularization, cardiac arrest' },
        { term: 'Ranson criteria', definition: '11 factors assessed at admission and 48h to predict severity of acute pancreatitis' },
        { term: 'pulsatile tinnitus', definition: 'Ringing in the ears that pulses with heartbeat; associated with intracranial hypertension, vascular abnormalities' },
        { term: 'visual obscurations', definition: 'Transient vision loss or blurring; associated with papilledema from increased intracranial pressure' },
        { term: 'oligoanalgesia', definition: 'Inadequate treatment of pain; common in emergency departments, especially in certain populations' },
      ],
      analogies: [
        'The HEART score is like a checklist for danger - it helps identify which chest pain patients need urgent care.',
        'Pulsatile tinnitus is like hearing your heartbeat in your ears - a sign that pressure in the head might be too high.',
        'Oligoanalgesia is like having a fire extinguisher but not using it when there\'s a fire - the tools exist but aren\'t being used.',
      ],
      examples: [
        'Chest pain: 48-year-old with chest pain. HEART score 3 (low risk). Troponin normal at 0 and 2 hours. Discharged with stress test.',
        'Headache: 68-year-old with new headache, scalp tenderness. ESR 72. Prednisone 60 mg started. Temporal artery biopsy scheduled.',
        'Back pain: 65-year-old with back pain, fever, IVDA history. MRI shows epidural abscess at L4-L5. Neurosurgery consulted. IV antibiotics started.',
      ],
      patientCounselingPoints: [
        'Always report changes in your pain pattern - new symptoms or changes in character matter',
        'Keep a pain diary noting triggers, timing, and what helps',
        'If you have chronic pain, work with your doctor to create a plan for managing pain flares',
        'Mental health affects pain perception - stress and anxiety can worsen pain',
      ],
    },

    5: {
      level: 5,
      summary: 'Expert-level pain assessment integrates advanced understanding of pain physiology, validated risk stratification tools, recognition of subtle presentations, and evidence-based management approaches.',
      explanation: `## State of the Art in Pain Assessment

**Evolution of emergency pain assessment:**

**Historical:**
- Subjective assessment only
- Variable quality
- Missed diagnoses common

**Contemporary:**
- Evidence-based risk stratification
- Standardized assessment tools
- Multimodal management
- Safety focus (preventing opioid crisis impact)

## Advanced Risk Stratification

**Chest Pain Pathways:**
- **High-sensitivity troponin:** Detects myocardial injury earlier
- **0/1 hour protocol:** Rapid rule-out using delta troponin
- **2-hour protocol:** If 0/1 not available
- **CTCA:** For intermediate risk, troponin-negative patients
- **Stress testing:** Less common, selective use

**ADAPT vs HEART vs EDACS:**
- **ADAPT (2-hour):** 97.5% sensitivity
- **HEART:** 97% sensitivity, 57% specificity
- **EDACS (Asian):** 97-99% sensitivity
- All have high NPV for MACE
- Choice depends on local resources and protocols

**Sensitive Troponin Era:**
- **Type 1 MI:** Plaque rupture with thrombosis
- **Type 2 MI:** Supply-demand mismatch
- **Myocardial injury:** Troponin elevation without ischemia (sepsis, PE, stroke)
- **Clinical context essential** for interpretation

## Contemporary Headache Management

**Subarachnoid Hemorrhage:**
- **CT within 6 hours:** Sensitivity ~99%
- **LP after negative CT:** Detects xanthochromia
- **CTA:** Identifies aneurysm
- **Decision rule:** Ottawa SAH rule

**Migraine in ED:**
- **Migraine-specific abortives:** Triptans, ergots
- **Dopamine antagonists:** Metoclopramide, prochlorperazine
  - Treat headache and nausea
  - Akathisia is side effect
- **IV NSAIDs:** Ketorolac, ibuprofen
- **Magnesium:** Evidence mixed, may help
- **Dexamethasone:** Prevents recurrence (controversial)

**Status Migrainosus:**
- Migraine >72 hours
- Treat with IV DHE, magnesium, steroids
- Admit for IV protocol

**New Daily Persistent Headache:**
- Sudden onset, continuous
- No pain-free period
- No secondary cause found
- Often refractory to treatment
- Multimodal management needed

## Advanced Abdominal Pain Concepts

**Mesenteric Ischemia Update:**
- **Acute arterial embolism:** Most common type
- **Diagnosis:** CT angiography (CTA) is gold standard
- **Treatment:** Catheter-directed thrombolysis, surgery
- **Mortality:** Still 50-70% despite advances

**Abdominal Pain in Elderly:**
- Atypical presentations common
- "Silent" appendicitis
- Mortality 5x higher than young adults
- Lower threshold for CT scanning

**Pregnant Patients:**
- **Appendicitis:** Most common non-obstetric surgery
- **Ultrasound first** (sensitivity 67-100%)
- **MRI** if US equivocal (no radiation)
- **Leukocytosis** is normal in pregnancy
- **Surgery** is safe for mother and fetus when indicated

**Right Lower Quadrant Pain Differential:**
- Appendicitis (40%)
- Ovarian pathology (30%)
- UTI/pyelonephritis (15%)
- Gastroenteritis (10%)
- Ectopic pregnancy (critical to rule out)

## Back Pain Updates

**Red Flag Evidence:**

**Cauda Equina:**
- Sensitivity 90% for classic presentation
- MRI is gold standard
- Surgical decompression within 24-48 hours improves outcomes
- Some recovery possible with delayed surgery

**Epidural Abscess:**
- **Classic triad:** Pain, fever, neurologic deficit (only 13%)
- **Staph aureus** most common
- **MRI with gadolinium** diagnostic
- **Treatment:** Urgent neurosurgical drainage + antibiotics

**Cancer Risk:**
- Age >50 + unexplained weight loss
- History of cancer
- Night pain
- Multiple myeloma workup: SPEP, UPEP, serum free light chains
- MRI more sensitive than CT

## Pain in the Era of Opioid Crisis

**Safe Prescribing Practices:**
- **Opioids:** Short course, low dose
- **PDMP:** State prescription drug monitoring programs
- **Urine drug screens:** Baseline, monitoring
- **Opioid agreements:** When long-term opioids needed
- **Naloxone:** Co-prescribe for high-dose opioids

**Multimodal Analgesia:**
- **NSAIDs + acetaminophen:** First-line for most pain
- **Regional anesthesia:** Nerve blocks, epidural
- **Non-pharmacologic:** Ice, elevation, splinting
- **Adjuvants:** Gabapentin, TCAs, muscle relaxants

**Opioid-sparing strategies:**
- **Trigger point injections:** Musculoskeletal pain
- **Facet joint injections:** Back pain
- **Bursa injections:** Bursitis
- **Prolotherapy:** Controversial, limited evidence

## Special Populations

**Geriatric Pain Assessment:**
- **Atypical presentations:** Delirium, falls, functional decline
- **Multiple co-morbidities:** Complicate diagnosis and treatment
- **Polypharmacy:** Drug interactions, cumulative side effects
- **Cognitive impairment:** Communication barriers
- **Tools:** PAINAD, PACSLAC, DOLOPLUS-2

**Pediatric Pain:**
- **Age-appropriate tools:** Faces scale for >3 years
- **Parental report:** Important for young children
- **Distraction:** Effective non-pharmacologic intervention
- **Sucrose:** Effective for infants

**Pregnant Patients:**
- **Acetaminophen:** Safe throughout pregnancy
- **NSAIDs:** Avoid in third trimester
- **Opioids:** Generally safe for short-term use
- **Imaging:** US first, MRI second, CT avoid if possible

## Diagnostic Stewardship

**High-value care:**
- **Avoid unnecessary CT:** Use clinical decision rules
- **Ultrasound first:** For abdominal pain in children, young adults, pregnancy
- **Selective imaging:** Based on risk stratification
- **Follow-up:** When imaging deferred

**Choosing Wisely:**
- **Abdominal pain:** CT not for all abdominal pain
- - **Low back pain:** Imaging only with red flags
- **Headache:** CT not indicated with normal neurologic exam
- **Chest pain:** Observation unit pathway for low risk

## Quality Improvement

**Pain Management Metrics:**
- Time to analgesia
- Pain score reduction
- Patient satisfaction
- Return visits
- Opioid prescribing rates

**Clinical Pathways:**
- Standardized order sets
- Evidence-based protocols
- Reduce variation, improve outcomes

**Electronic Decision Support:**
- Clinical decision rules embedded in EHR
- Risk stratification calculators
- Imaging appropriateness

**Patient Communication:**
- Shared decision-making
- Expectation setting
- Discharge instructions`,
      keyTerms: [
        { term: 'high-sensitivity troponin', definition: 'Troponin assay detecting very low levels; enables earlier MI detection but also detects non-MI cardiac injury' },
        { term: 'type 2 MI', definition: 'Myocardial infarction from supply-demand mismatch without plaque rupture; sepsis, tachyarrhythmia, anemia' },
        { term: 'status migrainosus', definition: 'Debilitating migraine lasting >72 hours; requires IV protocol with DHE, magnesium, steroids' },
        { term: 'new daily persistent headache', definition: 'Sudden onset headache that continues daily without pain-free period; no secondary cause found' },
        { term: 'PDMP', definition: 'Prescription Drug Monitoring Program; state database tracking controlled substance prescriptions to prevent misuse' },
        { term: 'multimodal analgesia', definition: 'Using multiple methods (medication, regional, non-pharmacologic) to manage pain while minimizing opioid use' },
      ],
      analogies: [
        'High-sensitivity troponin is like a very sensitive smoke alarm - it detects more fires but sometimes gives false alarms (non-MI elevation).',
        'Type 2 MI is like engine failure from running too fast, not from a broken part - the heart is damaged but not from plaque rupture.',
        'New daily persistent headache is like a light switch that\'s turned on and stuck - it comes on suddenly and never turns off.',
      ],
      clinicalNotes: `Expert clinical pearls for pain assessment:

1. **Chest pain:** Never rely on a single test. History, exam, ECG, troponin, and risk factors all matter. A normal ECG does NOT rule out ACS.

2. **Thunderclap headache:** Assume SAH until proven otherwise. CT within 6 hours then LP if high suspicion. Normal CT does NOT rule out SAH.

3. **Abdominal pain in elderly:** Their pain is their symptoms but not their pathology. High threshold for CT. Admit for observation if uncertain.

4. **Back pain with red flags:** Cauda equina syndrome is a surgical emergency. MRI needed urgently. Don\'t rely on CT to rule out.

5. **Temporal arteritis:** Consider in any patient >50 with new headache. Check ESR/CRP but start steroids before biopsy if high suspicion. Vision loss is irreversible.

6. **Mesenteric ischemia:** Think of it in elderly with AFib, severe abdominal pain out of proportion to exam. CT angiography is diagnostic. Mortality remains high even with treatment.

7. **Opioid prescribing:** Write for the lowest effective dose, shortest duration. Check PDMP before prescribing. Co-prescribe naloxone for high-risk patients.

8. **Pediatric abdominal pain:** Ultrasound first. Appendicitis is common but atypical presentations are common.

9. **Pregnancy and abdominal pain:** Always rule out ectopic. Ultrasound first, MRI if needed. Don\'t delay necessary surgery.

10. **Mental health:** Pain and depression/anxiety amplify each other. Treating both provides better outcomes than treating either alone.`,
    },
  },

  media: [
    {
      id: 'opqrst-pain-assessment',
      type: 'diagram',
      filename: 'opqrst-pain-assessment.svg',
      title: 'OPQRST Pain Assessment Method',
      description: 'Visual guide to systematic pain assessment using OPQRST mnemonic',
    },
    {
      id: 'abdominal-pain-quadrants',
      type: 'diagram',
      filename: 'abdominal-pain-quadrants.svg',
      title: 'Abdominal Pain by Quadrant',
      description: 'Differential diagnosis of abdominal pain organized by anatomical quadrant',
    },
    {
      id: 'red-flag-pain',
      type: 'diagram',
      filename: 'red-flag-pain.svg',
      title: 'Pain Red Flags',
      description: 'Visual summary of red flags for chest, abdominal, headache, and back pain',
    },
  ],

  citations: [
    {
      id: 'acep-pain-guidelines',
      type: 'article',
      title: 'Management of Pain in the Emergency Department',
      authors: ['ACEP', 'Clinical Policies Committee'],
      source: 'Annals of Emergency Medicine',
      url: 'https://www.annemergmed.com/article/S0196-0644(22)00786-0/fulltext',
      accessedDate: '2026-01-26',
    },
    {
      id: 'heart-score-validation',
      type: 'article',
      title: 'Validation of the HEART Score for Chest Pain Patients at the Emergency Department',
      authors: ['Six, A.J.', 'et al.'],
      source: 'Netherlands Heart Journal',
      url: 'https://pubmed.ncbi.nlm.nih.gov/23269191/',
      accessedDate: '2026-01-26',
    },
    {
      id: 'gca-guidelines',
      type: 'article',
      title: 'Management of Giant Cell Arteritis and Polymyalgia Rheumatica',
      authors: ['EULAR', 'ACR'],
      source: 'Arthritis & Rheumatology',
      url: 'https://onlinelibrary.wiley.com/doi/10.1002/art.40644',
      accessedDate: '2026-01-26',
    },
  ],

  crossReferences: [
    { targetId: 'emergency-cardiac-arrest', targetType: 'condition', relationship: 'related', label: 'Cardiac Arrest' },
    { targetId: 'emergency-shock', targetType: 'condition', relationship: 'related', label: 'Shock Types' },
    { targetId: 'specialties-neurology-headache-disorders', targetType: 'condition', relationship: 'related', label: 'Headache Disorders' },
  ],

  tags: {
    systems: ['all'],
    topics: ['emergency medicine', 'pain management', 'clinical assessment'],
    keywords: ['pain', 'OPQRST', 'chest pain', 'abdominal pain', 'headache', 'back pain', 'red flags', 'pain assessment'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['emergency medicine', 'internal medicine', 'neurology'],
    },
  },

  createdAt: '2026-01-26T00:00:00.000Z',
  updatedAt: '2026-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default severePain;
