/**
 * Tonsillitis - Comprehensive Educational Content
 *
 * Covers acute and chronic tonsillitis, recurrent tonsillitis,
 * tonsillectomy indications, and post-tonsillectomy care.
 */

import { EducationalContent } from '../../types';

export const tonsillitis: EducationalContent = {
  id: 'condition-tonsillitis',
  type: 'condition',
  name: 'Tonsillitis',
  alternateNames: ['Acute Tonsillitis', 'Chronic Tonsillitis', 'Recurrent Tonsillitis', 'Tonsillar Hypertrophy', 'Peritonsillar Abscess'],
  hpoId: 'HP:0000180',

  levels: {
    1: {
      level: 1,
      summary: 'Tonsillitis is inflammation of the tonsils, two oval-shaped pads of tissue at the back of the throat, causing sore throat, difficulty swallowing, and swollen glands. It is common in children and usually caused by viruses.',
      explanation: `## What are Tonsils?

**Your tonsils are:**
- Two small, oval-shaped pads of tissue
- Located at the back of your throat, one on each side
- Part of your body's immune system
- Help trap germs that come in through your mouth and nose

**Types of tonsils:**
1. **Palatine tonsils:** The "tonsils" you can see at the back of the throat
2. **Adenoids:** Located higher in the throat, behind the nose
3. **Lingual tonsils:** At the base of the tongue (cannot be seen easily)

## What is Tonsillitis?

**Tonsillitis** means the tonsils become inflamed, red, and swollen. This usually happens when fighting an infection.

**Think of your tonsils like guards at a gate:**
- They stop germs from entering further into your body
- Sometimes they get overwhelmed and become swollen while fighting
- The swelling and redness are signs they are working hard

## Types of Tonsillitis

**Acute tonsillitis:**
- Happens suddenly
- Usually lasts 3-7 days
- Often caused by viruses or bacteria

**Recurrent tonsillitis:**
- Multiple episodes per year
- May require surgery if frequent enough

**Chronic tonsillitis:**
- Persistent sore throat
- Tonsils remain enlarged
- May cause ongoing problems

## What Causes Tonsillitis?

**Viral causes (most common):**
- Same viruses that cause colds
- Flu viruses
- Epstein-Barr virus (causes mono)

**Bacterial causes:**
- Group A Streptococcus (strep throat) - most common bacterial cause
- Other bacteria are less common

**How it spreads:**
- Droplets from coughing or sneezing
- Close contact with someone who is sick
- Sharing drinks, utensils, or kissing

## Signs and Symptoms

**Common symptoms:**
- Sore throat
- Pain when swallowing
- Red, swollen tonsils
- White or yellow patches on tonsils
- Fever
- Swollen, tender glands in the neck
- Bad breath
- Scratchy voice

**In young children, also watch for:**
- Refusing to eat
- Drooling (if swallowing is very painful)
- Fussiness or irritability
- Stomach upset

## Diagnosis

A doctor can diagnose tonsillitis by:
1. **Looking at the throat** with a light
2. **Feeling the neck** for swollen glands
3. **Swabbing the throat** to test for strep bacteria

## Treatment

**For viral tonsillitis:**
- Antibiotics do NOT help (viruses do not respond to antibiotics)
- Treatment focuses on comfort:
  - Acetaminophen or ibuprofen for pain and fever
  - Plenty of rest and fluids
  - Warm liquids or cold foods
  - Saltwater gargle
  - Throat lozenges (for older children and adults)
- Goes away on its own in 3-7 days

**For bacterial tonsillitis (strep throat):**
- Antibiotics (usually penicillin or amoxicillin)
- Important to finish ALL medicine, even when feeling better
- Feeling better usually starts within 1-2 days

## When is Tonsil Removal Needed?

**Tonsillectomy (tonsil removal) may be recommended if:**

**1. Recurrent tonsillitis:**
- 7 or more episodes in 1 year
- 5 or more episodes per year for 2 years
- 3 or more episodes per year for 3 years

**2. Enlarged tonsils causing:**
- Difficulty breathing
- Snoring or pauses in breathing during sleep (sleep apnea)
- Difficulty swallowing
- Speech problems

**3. Complications:**
- Peritonsillar abscess (infection around the tonsil)
- Difficulty breathing due to very large tonsils

## About Tonsillectomy

**What to expect:**
- Surgery to remove the tonsils
- Usually takes about 20 minutes
- Done under general anesthesia (completely asleep)
- Usually go home the same day

**Recovery:**
- Throat pain for 7-14 days
- May have ear pain
- Soft foods for several days
- Avoid crunchy or spicy foods
- Stay hydrated
- Return to normal activities in about 2 weeks

**Risks of surgery:**
- Bleeding (1-3% of patients)
- Infection
- Reaction to anesthesia
- Voice changes (rare)

**After tonsil removal:**
- Still get sore throats, but usually less often
- Body's immune system still works well
- Most children feel better overall

## Home Care for Tonsillitis

**For comfort:**
- Rest the voice
- Drink plenty of fluids
- Warm tea with honey
- Cold popsicles or ice chips
- Soft, cool foods
- Saltwater gargle (for older children)

**Avoid:**
- Irritants like smoke
- Acidic foods (orange juice, tomato juice)
- Crunchy foods like chips
- Very hot foods

## When to See a Doctor

**Seek medical care if:**
- Sore throat lasts more than a week
- Difficulty breathing
- Difficulty swallowing saliva (drooling)
- Extreme difficulty swallowing
- Blood in saliva or spit
- Lump in the neck that doesn't go away
- Very high fever

**Emergency care if:**
- Difficulty breathing
- Drooling (cannot swallow own saliva)
- Muffled voice (sounds like talking with hot potato in mouth)`,
      keyTerms: [
        { term: 'tonsils', definition: 'Two oval pads of tissue at the back of the throat that help fight infection' },
        { term: 'tonsillitis', definition: 'Inflammation of the tonsils, usually from infection, causing sore throat and swollen glands' },
        { term: 'tonsillectomy', definition: 'Surgery to remove the tonsils' },
        { term: 'adenoids', definition: 'Tissue located behind the nose; similar to tonsils but higher in the throat' },
      ],
      analogies: [
        'Your tonsils are like guards at a castle gate - they catch germs trying to enter your body.',
        'Tonsillitis is like the guards being overwhelmed by too many invaders - they swell up while fighting.',
        'Recovering from tonsillectomy is like having a bad sunburn in your throat - everything hurts for about 2 weeks.',
      ],
      examples: [
        'A child has had 8 episodes of tonsillitis in one year - they may benefit from tonsillectomy.',
        'A child snores loudly and stops breathing during sleep - enlarged tonsils could be the cause.',
      ],
      patientCounselingPoints: [
        'Most tonsillitis is viral and does not need antibiotics',
        'Finish all antibiotics if prescribed for bacterial tonsillitis',
        'Tonsillectomy recovery takes about 2 weeks',
        'Stay hydrated after tonsillectomy - this helps healing',
        'Call the doctor if bleeding occurs after tonsillectomy',
        'Avoid crunchy or spicy foods during recovery',
      ],
    },
    2: {
      level: 2,
      summary: 'Tonsillitis is inflammation of the palatine tonsils, most commonly viral in etiology, with Group A Streptococcus being the primary bacterial cause. Tonsillectomy may be indicated for recurrent infections, sleep-disordered breathing, or complications.',
      explanation: `## Anatomy

**Palatine tonsils:**
- Located in the oropharynx between the anterior and posterior pillars
- Part of Waldeyer ring (circular band of lymphoid tissue)
- Largest and most commonly recognized tonsils
- Visible on oral examination

**Waldeyer ring components:**
1. **Palatine tonsils:** In lateral oropharynx
2. **Pharyngeal tonsil (adenoids):** Posterior nasopharynx
3. **Tubal tonsils:** Around Eustachian tube orifices
4. **Lingual tonsils:** Base of tongue

**Tonsillar crypts:**
- Deep invaginations in tonsillar surface
- Trap debris and bacteria
- Can harbor bacteria (biofilm formation)
- Contribute to recurrent infections

## Etiology

### Viral Tonsillitis (70-85%)

**Common viral causes:**
- Rhinovirus (most common)
- Adenovirus
- Influenza virus
- Parainfluenza virus
- Epstein-Barr virus (infectious mononucleosis)
- Cytomegalovirus (CMV)
- Herpes simplex virus (HSV)
- Coxsackievirus (herpangina)

### Bacterial Tonsillitis (15-30%)

**Group A Streptococcus (GAS):**
- *Streptococcus pyogenes*
- Most common bacterial cause
- Peak incidence: 5-15 years old
- Important to treat to prevent rheumatic fever

**Other bacterial causes:**
- Group C and G Streptococcus
- *Arcanobacterium haemolyticum* (adolescents)
- *Neisseria gonorrhoeae* (sexually active individuals)
- *Corynebacterium diphtheriae* (rare with vaccination)
- Anaerobes (in tonsillar abscess)

## Clinical Presentation

### Symptoms of Acute Tonsillitis

**Common symptoms:**
- Sore throat (odynophagia)
- Difficulty swallowing
- Fever
- Malaise, fatigue
- Reduced appetite

**Physical examination findings:**
- Erythematous, edematous tonsils
- Tonsillar exudate (white or yellow patches)
- Enlarged, tender cervical lymphadenopathy
- Hypertrophy (enlargement)
- Possible follicular exudate

**Viral vs bacterial features:**

| Feature | Viral | Bacterial (GAS) |
|---------|-------|-----------------|
| Cough | Common | Rare |
| Rhinorrhea | Common | Rare |
| Conjunctivitis | Possible | Rare |
| Hoarseness | Common | Rare |
| Exudate | Variable | Common |
| Cervical adenopathy | Mild | Marked |
| Age | All ages | 5-15 years peak |

### Infectious Mononucleosis

**Caused by Epstein-Barr virus (EBV)**
- Adolescents and young adults
- Prominent tonsillar hypertrophy
- Severe exudative tonsillitis
- Palatal petechiae
- Posterior cervical adenopathy
- Hepatosplenomegaly
- Fatigue prominent

**Complication:**
- Airway obstruction from tonsillar hypertrophy
- May require corticosteroids or urgent tonsillectomy

## Diagnosis

### Clinical Evaluation

**History:**
- Duration and severity of symptoms
- Number of previous episodes
- Associated symptoms (cough, rhinorrhea)
- Exposure to sick contacts
- History of rheumatic fever

**Physical examination:**
- Throat examination with light
- Tonsil size grading (0-4 scale)
- Cervical lymph node palpation
- Assessment for airway compromise
- Look for peritonsillar swelling

### Tonsil Size Grading

**Brooks scale:**
- **Grade 0:** Tonsils within tonsillar pillars
- **Grade 1:** Tonsils just outside pillars, occupying ≤ 25% of oropharynx
- **Grade 2:** Tonsils occupying 25-50% of oropharynx
- **Grade 3:** Tonsils occupying 50-75% of oropharynx
- **Grade 4:** Tonsils occupying > 75% of oropharynx (kissing tonsils)

### Diagnostic Testing

**Rapid strep test:**
- Throat swab for Group A Strep antigen
- Results in 5-10 minutes
- Sensitivity: 70-90%
- Specificity: 90-99%

**Throat culture:**
- Gold standard for GAS diagnosis
- 24-48 hours for results
- Confirm negative rapid tests in children

**Monospot test:**
- Heterophile antibody test for EBV
- Positive in 85-90% of teens with mono
- May be negative early in illness

**CBC:**
- Lymphocytosis with atypical lymphocytes suggests EBV
- Neutrophilia may suggest bacterial etiology

## Treatment

### Viral Tonsillitis

**Supportive care:**
- Rest and hydration
- Analgesics for pain and fever:
  - Acetaminophen 10-15 mg/kg q4-6h
  - Ibuprofen 10 mg/kg q6-8h (age > 6 months)
- Saltwater gargles
- Throat lozenges (age appropriate)
- Cool, soft foods

**NO antibiotics indicated**

### Bacterial Tonsillitis

**Antibiotics:**

| Antibiotic | Dose (pediatric) | Dose (adult) | Duration |
|------------|------------------|--------------|----------|
| Penicillin V | 250 mg BID/TID | 250-500 mg BID/QID | 10 days |
| Amoxicillin | 50 mg/kg/day BID | 500 mg BID | 10 days |
| Benzathine penicillin G | Single IM dose | Single IM dose | Single dose |

**Penicillin allergy alternatives:**
- Cephalexin 50 mg/kg/day divided BID
- Clindamycin 20 mg/kg/day divided TID
- Clarithromycin 15 mg/kg/day divided BID

**Supportive care:**
- Same measures as viral tonsillitis
- Hydration especially important

### Infectious Mononucleosis

**Supportive care:**
- Rest
- Acetaminophen/ibuprofen for pain and fever
- Avoid contact sports if splenomegaly present (rupture risk)
- Corticosteroids for airway compromise

**Avoid amoxicillin/amoxicillin-clavulanate:**
- Causes characteristic rash in 90% of patients with mono
- Not a true penicillin allergy

## Complications

### Peritonsillar Abscess

**Collection of pus between tonsil and pharyngeal muscles**

**Clinical features:**
- Severe unilateral throat pain
- Trismus (difficulty opening mouth)
- "Hot potato voice" (muffled)
- Deviation of uvula to unaffected side
- Drooling
- Difficulty swallowing

**Treatment:**
- Needle aspiration or incision and drainage
- Antibiotics (penicillin + metronidazole or clindamycin)

### Tonsillar Hypertrophy Complications

**Sleep-disordered breathing:**
- Snoring
- Obstructive sleep apnea
- Poor sleep quality
- Daytime fatigue
- Behavioral issues in children
- Enuresis

**Other complications:**
- Dysphagia (difficulty swallowing)
- Speech changes (muffled voice)
- Dental malocclusion
- Craniofacial changes (rare, long-standing)

### Other Complications

**Acute rheumatic fever:**
- Autoimmune complication of untreated GAS
- Affects heart, joints, brain, skin
- Prevention is main reason for treating GAS

**Post-streptococcal glomerulonephritis:**
- Kidney inflammation
- Edema, hypertension, hematuria

**Retropharyngeal abscess:**
- More common in young children
- Airway compromise risk

**Cervical lymphadenitis:**
- Suppurative infection of neck nodes

## Tonsillectomy Indications

### AAO-HNS 2019 Guidelines

**Recurrent acute tonsillitis:**
- ≥ 7 episodes in past year
- ≥ 5 episodes per year for 2 years
- ≥ 3 episodes per year for 3 years

**Documentation criteria:**
- Each episode with:
  - Sore throat plus one or more of:
    - Temperature > 100.4°F (38°C)
    - Cervical lymphadenopathy
    - Tonsillar exudate
    - Positive GAS test

**Sleep-disordered breathing:**
- Documented obstructive sleep apnea
- Failure to thrive
- Neurobehavioral abnormalities
- Cor pulmonale (right heart failure from lung disease)

**Other indications:**
- Peritonsillar abscess (consider tonsillectomy)
- Tonsillar hypertrophy causing dysphagia
- Suspected malignancy
- Recurrent strep despite antibiotic treatment

## Tonsillectomy Procedure and Recovery

**Procedure:**
- Performed under general anesthesia
- Techniques: Electrocautery, coblation, scalpel, laser
- Duration: 20-30 minutes
- Usually outpatient

**Recovery timeline:**
- **Days 1-3:** Most painful period
- **Days 4-7:** Pain may increase (healing phase)
- **Days 8-14:** Gradual improvement
- **2 weeks:** Return to normal activities

**Post-operative care:**
- Pain management
- Hydration (critical)
- Soft, cool foods
- Avoid citrus, spicy, crunchy foods
- No strenuous activity for 2 weeks

**Bleeding risks:**
- Primary bleeding (within 24 hours): 0.2-2%
- Secondary bleeding (days 5-10): 1-3%
- Immediate medical evaluation for any bleeding`,
      keyTerms: [
        { term: 'tonsillitis', definition: 'Inflammation of the palatine tonsils, usually from viral or bacterial infection' },
        { term: 'tonsillar crypts', definition: 'Deep pits in tonsil surface that trap debris and can harbor bacteria' },
        { term: 'tonsillectomy', definition: 'Surgical removal of the palatine tonsils' },
        { term: 'peritonsillar abscess', definition: 'Collection of pus between tonsil and pharyngeal muscles; complication of tonsillitis' },
        { term: 'sleep-disordered breathing', definition: 'Abnormal breathing during sleep ranging from snoring to obstructive sleep apnea' },
        { term: 'trismus', definition: 'Inability to open the mouth fully; sign of peritonsillar abscess' },
      ],
      analogies: [
        'The tonsillar crypts are like small caves where bacteria can hide and cause recurrent infections.',
        'Recovering from tonsillectomy is like having a severe burn in the throat - the pain often increases around day 5 as the healing tissue forms a scab.',
      ],
    },
    3: {
      level: 3,
      summary: 'Tonsillitis is inflammation of the palatine tonsils with predominantly viral etiology. Recurrent bacterial infections, tonsillar hypertrophy causing obstructive symptoms, or complications may necessitate tonsillectomy based on evidence-based criteria.',
      explanation: `## Pathophysiology

### Tonsillar Immunologic Function

**Waldeyer ring as immunologic organ:**
- First line of defense against inhaled/oral pathogens
- Antigen sampling and presentation
- B-cell activation and antibody production
- Memory B-cell formation

**Tonsillar crypts:**
- Increase surface area for antigen exposure
- Trap and concentrate pathogens
- Contain biofilm-forming bacteria in chronic/recurrent disease
- Can harbor persistent bacterial reservoirs

### Pathogenesis of Infection

**Viral tonsillitis:**
- Direct viral invasion of tonsillar epithelium
- Cytotoxic T-cell response
- Release of inflammatory cytokines (IL-1, IL-6, TNF-alpha)
- Clinical symptoms from inflammatory response

**Bacterial tonsillitis (GAS):**
- Colonization of tonsillar epithelium
- M protein inhibits phagocytosis
- Streptococcal pyrogenic exotoxins
- Intense inflammatory response with neutrophil infiltration
- Potential for systemic complications (rheumatic fever)

**Biofilm formation:**
- Bacteria embed in extracellular matrix
- Protects from immune clearance and antibiotics
- More common in chronic/recurrent tonsillitis
- Contributes to treatment failure

### Tonsillar Hypertrophy Pathophysiology

**Reactive hyperplasia:**
- Repeated antigenic stimulation
- Lymphoid follicular hyperplasia
- Increased size of germinal centers
- Can persist after infection resolution

**Genetic factors:**
- Familial predisposition to large tonsils
- Associated with HLA markers

**Obstructive consequences:**
- Upper airway obstruction
- Sleep-disordered breathing
- Altered craniofacial development
- Pulmonary hypertension (severe cases)

## Clinical Assessment

### Differentiating Viral vs Bacterial Tonsillitis

**Clinical prediction rules:**

| Finding | Viral likelihood | Bacterial likelihood |
|---------|-----------------|---------------------|
| Cough present | High | Low |
| Rhinorrhea present | High | Low |
| Conjunctivitis | High | Low |
| Hoarseness | High | Low |
| Exudate | Variable | High |
| Cervical adenopathy | Mild | Marked/tender |
| Palatal petechiae | Rare | GAS (common) |
| Age < 3 | Viral common | GAS rare |
| Age 5-15 | Viral common | GAS peak incidence |

**Centor criteria modified for tonsillitis:**
- Fever > 100.4°F (38°C) = 1 point
- Absence of cough = 1 point
- Swollen tender anterior cervical nodes = 1 point
- Tonsillar exudate = 1 point
- Age 15-44 = 1 point, 45+ = 0 points, 3-14 = add 1 point

**Interpretation:**
- 0-1 points: Viral most likely, no testing needed
- 2-3 points: Test for GAS, treat if positive
- 4+ points: High probability, consider empiric treatment

### Infectious Mononucleosis Considerations

**EBV tonsillitis features:**
- Severe tonsillar hypertrophy
- Exudative tonsillitis
- Palatal petechiae
- Posterior cervical adenopathy
- Fatigue prominent
- Hepatosplenomegaly

**Complications:**
- Airway obstruction from tonsillar hypertrophy
- Splenic rupture (avoid contact sports)
- Agranulocytosis (rare)

**Management considerations:**
- Corticosteroids for airway compromise
- Avoid amoxicillin/amoxicillin-clavulanate (causes "ampicillin rash")
- Supportive care为主

## Surgical Indications: Evidence-Based

### Recurrent Tonsillitis Criteria

**AAO-HNS 2019 absolute indications:**

**"Paradise criteria" (original studies):**
- ≥ 7 episodes in past year OR
- ≥ 5 episodes per year for 2 years OR
- ≥ 3 episodes per year for 3 years

**Documentation requirements:**
- Each episode must include:
  - Oral temperature > 100.4°F (38°C) OR
  - Cervical lymphadenopathy OR
  - Tonsillar exudate OR
  - Positive GAS culture/rapid test

**Evidence base:**
- RCTs showing reduction in sore throat episodes
- NNT = 4-5 to prevent one episode
- Quality of life improvements
- Cost-effectiveness for ≥ 3 episodes/year

### Sleep-Disordered Breathing

**Indications:**
- Documented obstructive sleep apnea (AHI > 1/hour in children)
- Failure to thrive
- Neurobehavioral abnormalities
- Pulmonary hypertension
- Cor pulmonale

**Evidence:**
- Adenotonsillectomy first-line for pediatric OSA
- AHI reduction in 70-80% of patients
- Behavioral improvements
- Cognitive improvements
- Catch-up growth

**Special considerations:**
- Polysomnography for children with comorbidities
- Children < 2 years: Higher post-op respiratory complications
- Obesity: Lower cure rates

### Other Indications

**Peritonsillar abscess:**
- First episode: Drainage, consider interval tonsillectomy
- Recurrence: Tonsillectomy indicated
- Bilateral PTA: Tonsillectomy indicated

**Asymmetric tonsils:**
- Possible malignancy
- Surgical excision for diagnosis

**Chronic tonsillitis:**
- Persistent symptoms ≥ 3 months
- Failed medical management
- Tonsillar debris causing halitosis

## Surgical Techniques

### Tonsillectomy Approaches

**Cold knife (steel) dissection:**
- Traditional method
- Lower post-op bleeding risk
- Longer operative time
- Less thermal injury

**Electrocautery:**
- Most common in US
- Hemostasis during dissection
- Faster operative time
- More postoperative pain (thermal injury)

**Coblation (radiofrequency ablation):**
- Lower temperature than electrocautery
- Potentially less pain
- Faster recovery
- Higher equipment cost

**Harmonic scalpel (ultrasound):**
- Precise dissection
- Hemostasis
- Less thermal spread
- Equipment cost

**Microdebrider:**
- Partial/intracapsular tonsillectomy
- Preserves capsule
- Less pain, faster recovery
- Higher recurrence risk

**Partial (intracapsular) vs total tonsillectomy:**

| Feature | Total | Intracapsular |
|---------|-------|---------------|
| Tissue removed | Complete | Most, capsule remains |
| Pain | Higher | Lower |
| Recovery | Longer | Shorter |
| Bleeding risk | Higher | Lower |
| Recurrence | Rare | 3-10% |

### Adenoidectomy

**Indications:**
- Adenoidal hypertrophy with nasal obstruction
- Chronic sinusitis
- Otitis media with effusion
- OSA (often combined with tonsillectomy)

**Procedure:**
- Transoral or transnasal approach
- Curettage, electrocautery, coblation, or microdebrider
- Often combined with tonsillectomy

## Post-Operative Management

### Pain Management

**Multimodal approach:**
- Acetaminophen scheduled
- NSAIDs (ibuprofen) - safe, reduces opioid use
- Oxycodone for breakthrough pain
- Avoid codeine (CYP2D6 variability)

**Hydration critical:**
- Prevents dehydration
- Promotes healing
- Reduces bleeding risk

### Bleeding Complications

**Primary bleeding (< 24 hours):**
- Inadequate hemostasis
- Vascular injury
- Treatment: Observation, cautery, or return to OR

**Secondary bleeding (days 5-10):**
- Sloughing of eschar
- Exposed vessel
- Treatment: Cautery, packing, or reoperation
- Hospital admission for observation

**Risk factors:**
- Age > 12 years
- Chronic tonsillitis indication
- Cold technique (controversial)
- Coagulopathy

### Dietary Recommendations

**Immediate post-op:**
- Clear liquids initially
- Advance to soft foods
- Avoid citrus, spicy, hot, or crunchy foods

**Common recommendations:**
- Popsicles, ice cream
- Jello, pudding
- Applesauce, mashed potatoes
- Pasta, soft bread
- Avoid red foods (can't distinguish from blood)

**Activity restrictions:**
- No strenuous activity 2 weeks
- No travel for 2 weeks
- School absence: 7-10 days typically

## Outcomes

### Tonsillectomy for Recurrent Tonsillitis

**Expected outcomes:**
- 70-80% reduction in sore throat episodes
- Reduced antibiotic use
- Fewer medical visits
- Improved quality of life

**Residual symptoms:**
- May still get sore throats
- Usually less severe
- Usually less frequent

### Tonsillectomy for Sleep-Disordered Breathing

**Expected outcomes:**
- AHI normalization: 70-80%
- Behavioral improvements
- Cognitive improvements
- Growth catch-up
- Enuresis resolution

**Non-responders:**
- Obesity
- Neuromuscular weakness
- Craniofacial anomalies
- Severe OSA preoperatively`,
      keyTerms: [
        { term: 'Waldeyer ring', definition: 'Circular band of lymphoid tissue in pharynx including palatine tonsils, adenoids, tubal tonsils, and lingual tonsils' },
        { term: 'biofilm', definition: 'Structured community of bacteria embedded in extracellular matrix; contributes to recurrent tonsillitis' },
        { term: 'intracapsular tonsillectomy', definition: 'Partial tonsil removal preserving capsule; less pain but higher recurrence' },
        { term: 'Paradise criteria', definition: 'Evidence-based criteria for tonsillectomy in recurrent tonsillitis; specific episode frequency requirements' },
        { term: 'AHI', definition: 'Apnea-hypopnea index; measure of sleep apnea severity; events per hour' },
        { term: 'secondary bleeding', definition: 'Post-tonsillectomy bleeding occurring days 5-10 during eschar sloughing' },
      ],
      clinicalNotes: 'Use Centor criteria to guide testing for GAS. Document episode frequency and characteristics for tonsillectomy consideration. Paradise criteria: ≥7 in 1 year, ≥5/year for 2 years, or ≥3/year for 3 years with documented fever, adenopathy, exudate, or positive GAS test. Sleep-disordered breathing is now the most common indication. Avoid codeine postoperatively (CYP2D6 variability). Use multimodal analgesia with acetaminophen and NSAIDs. Secondary bleeding (days 5-10) requires immediate evaluation.',
    },
    4: {
      level: 4,
      summary: 'Tonsillectomy decisions require evidence-based application of specific criteria for recurrent infections and obstructive symptoms. Contemporary surgical techniques and post-operative care optimize outcomes while minimizing complications including bleeding and pain.',
      explanation: `## Evidence-Based Surgical Indications

### Recurrent Tonsillitis: The Evidence

**Paradise criteria validation:**
- Developed from RCTs in 1970s-80s
- ≥ 7 episodes/year, or ≥ 5/year for 2 years, or ≥ 3/year for 3 years
- Each episode requires: Fever > 100.4°F, adenopathy, exudate, OR positive GAS test

**Recent evidence (2010s):**
- Threshold may be lower than Paradise criteria
- Quality of life improves with fewer episodes
- Cost-effectiveness at ≥ 3 episodes/year in some analyses
- Shared decision-making increasingly emphasized

**Documentation critical:**
- Each episode should be documented
- Temperature recorded
- Physical findings noted
- Testing results recorded

### Pediatric Sleep-Disordered Breathing

**Adenotonsillectomy as first-line:**
- Childhood OSA pathophysiology: Adenotonsillar hypertrophy primary cause
- Cure rates: 70-80% with normalization of AHI
- Behavioral and cognitive improvements
- Catch-up growth in underweight children

**Polysomnography indications:**
- Children with comorbidities:
  - Obesity
  - Neuromuscular disorders
  - Craniofacial abnormalities
  - Down syndrome
  - Sickl cell disease
  - Genetic syndromes

**Age considerations:**
- Children < 2 years: Higher post-op respiratory complication rate
- Consider overnight observation for < 3 years or severe OSA

### Complications Driving Surgery

**Peritonsillar abscess:**
- Incidence: 10-30 per 100,000
- Management controversy:
  - Drainage + interval tonsillectomy
  - Immediate tonsillectomy (quinsy tonsillectomy)
  - Drainage alone

**Evidence:**
- Recurrence after PTA: 10-15%
- Bilateral PTA recurrence: Higher
- Most advocate interval tonsillectomy after PTA

**Asymmetric tonsils:**
- Malignancy risk: ~1-2% in adults
- Lymphoma more common than carcinoma
- Excisional biopsy indicated for significant asymmetry

## Surgical Technique Selection

### Total vs Intracapsular Tonsillectomy

**Intracapsular (partial) outcomes:**
- RCTs show reduced pain and faster recovery
- Bleeding risk: Lower
- Recurrence: 3-10% (varies by technique)
- Reoperation rate: 1-5%

**Patient selection:**
- Intracapsular: SDB primary indication, minimal recurrent tonsillitis
- Total: Recurrent tonsillitis, higher recurrence concern

**Technique comparison:**

| Technique | Pain | Bleeding risk | Cost | Recovery |
|-----------|------|---------------|------|----------|
| Cold steel | Lower | Lower | Low | Longer |
| Electrocautery | Higher | Variable | Low | Moderate |
| Coblation | Lower | Lower | Higher | Shorter |
| Harmonic | Lower | Lower | Higher | Moderate |
| Intracapsular | Lowest | Lowest | Higher | Shortest |

### Adenoidectomy Decision-Making

**Adenoidectomy alone indications:**
- Nasal obstruction without tonsillar hypertrophy
- Chronic sinusitis
- Otitis media with effusion (with tube placement)

**Adenoidectomy + tonsillectomy:**
- Obstructive sleep apnea
- Recurrent tonsillitis with nasal obstruction

**Adenoidectomy techniques:**
- Curettage: Traditional, bleeding risk higher
- Microdebrider: Precise, hemostasis
- Coblation: Less pain, faster recovery
- Electrocautery: Hemostasis, more pain

## Post-Operative Management Evidence

### Pain Management Protocols

**Multimodal analgesia standard:**
1. **Scheduled acetaminophen:**
   - 15 mg/kg/dose q6h around the clock
   - Safe, effective

2. **Scheduled NSAIDs:**
   - Ibuprofen 10 mg/kg/dose q6h
   - Safe in children
   - Reduces opioid requirements
   - May reduce bleeding (antiplatelet effect controversial)

3. **Rescue opioids:**
   - Oxycodone preferred over codeine
   - Short course (3-5 days)
   - Avoid codeine (CYP2D6 ultra-rapid metabolizers)

**Evidence against codeine:**
- FDA black box warning (2013)
- Deaths reported in children post-tonsillectomy
- CYP2D6 genetic variability
- Unpredictable metabolism

### Bleeding Prevention and Management

**Primary prevention:**
- Meticulous intraoperative hemostasis
- Avoid NSAIDs in bleeding history (controversial)
- Preoperative coagulation screening only if indicated

**Secondary bleeding management:**
- Any bleeding: Immediate evaluation
- Mild: Observation, oral hydration, antibiotics
- Moderate: Cautery under anesthesia
- Severe: Return to OR, control bleeding site

**Hospital admission criteria:**
- Active bleeding
- Hemodynamic instability
- Inability to tolerate oral intake
- Distance from emergency care

### Dietary Recommendations Evidence

**Traditional vs evidence-based:**
- No strict diet restrictions necessary
- Advance as tolerated
- Maintain hydration (most important)
- Avoid highly acidic or very hot foods (pain)

**Hydration critical:**
- Prevents dehydration
- Promotes healing
- Reduces bleeding risk
- Improves pain control

## Special Populations

### Children Under Age 2

**Indications:**
- Obstructive sleep apnea with significant desaturation
- Failure to thrive
- Pulmonary hypertension
- Cor pulmonale

**Special considerations:**
- Higher respiratory complication rate
- Overnight observation recommended
- ICU admission for severe OSA

### Obese Children

**Outcomes:**
- Lower cure rates for OSA
- Higher complication rates
- May need additional treatment (CPAP, weight loss)

**Preoperative evaluation:**
- Polysomnography mandatory
- Cardiac evaluation if severe OSA

### Children with Comorbidities

**Down syndrome:**
- Small upper airway
- Hypotonia
- Higher respiratory complications
- Mandatory PSG preoperatively
- Consider overnight observation

**Craniofacial abnormalities:**
- Pierre Robin sequence
- Treacher Collins syndrome
- Higher airway complications
- Multidisciplinary management

**Bleeding disorders:**
- Hemophilia, von Willebrand disease
- Factor replacement preoperatively
- Close postoperative monitoring

### Adults

**Differences from children:**
- Higher complication rates
- Longer recovery
- Higher bleeding risk
- More comorbidities

**Indications:**
- Recurrent tonsillitis (same criteria as children)
- Peritonsillar abscess
- Asymmetric tonsil (malignancy concern)
- Tonsillar hypertrophy with OSA (less common indication)

**Special considerations:**
- Higher malignancy risk
- Carcinoma more common than lymphoma
- Excisional biopsy indicated for asymmetry`,
      keyTerms: [
        { term: 'Paradise criteria', definition: 'Evidence-based criteria for tonsillectomy in recurrent tonsillitis; specific frequency and documentation requirements' },
        { term: 'intracapsular tonsillectomy', definition: 'Partial tonsillectomy preserving capsule; reduced pain but higher recurrence risk' },
        { term: 'shared decision-making', definition: 'Collaborative process where clinician and patient make decisions based on evidence and patient values' },
        { term: 'multimodal analgesia', definition: 'Using two or more analgesic agents with different mechanisms to optimize pain control' },
        { term: 'CYP2D6', definition: 'Liver enzyme that metabolizes codeine; genetic variation causes unpredictable effects' },
      ],
      clinicalNotes: 'Tonsillectomy for recurrent tonsillitis: Paradise criteria (≥7 in 1 year, ≥5/year for 2 years, ≥3/year for 3 years) with documented episodes (fever, adenopathy, exudate, or positive GAS). Sleep-disordered breathing now most common indication. Intracapsular technique reduces pain but has recurrence risk. Avoid codeine (FDA black box warning). Use multimodal analgesia with scheduled acetaminophen and NSAIDs. Any post-op bleeding requires immediate evaluation.',
    },
    5: {
      level: 5,
      summary: 'Contemporary tonsillectomy practice integrates evidence-based indications, individualized surgical technique selection, standardized post-operative protocols, and careful consideration of special populations to optimize outcomes while minimizing complications.',
      explanation: `## Current Guidelines and Evidence Evolution

### Guideline Comparison

| Topic | AAO-HNS 2019 | ENT UK 2021 | ASPO 2022 |
|-------|--------------|-------------|-----------|
| Recurrent episodes (1 year) | ≥ 7 | ≥ 5 | ≥ 7 |
| Recurrent episodes (2 years) | ≥ 5/year | ≥ 3/year | ≥ 5/year |
| Episode documentation | Required | Recommended | Required |
| PSG for SDB | Case-by-case | Routine > 3 yo | Case-by-case |
| Pain management | Multimodal | Multimodal | Multimodal |
| Antibiotics post-op | Not recommended | Case-by-case | Not recommended |

### Key Evidence Updates

**Recurrent tonsillitis threshold:**
- Original Paradise criteria: Strict episode counts
- Recent RCTs: Benefit at lower thresholds
- Quality of life improvement even with fewer episodes
- Shared decision-making emphasized

**PSG for sleep-disordered breathing:**
- Routine PSG not required for uncomplicated cases
- Required for children with comorbidities (obesity, Down syndrome, craniofacial anomalies)
- AHI threshold for surgery: > 1/hour (children), > 5/hour (adults)

## Diagnostic and Therapeutic Precision

### Identifying Surgical Candidates

**Recurrent tonsillitis documentation checklist:**

For each episode, document:
- [ ] Sore throat complaint
- [ ] Temperature > 100.4°F (38°C) OR
- [ ] Cervical lymphadenopathy (> 1 cm, tender) OR
- [ ] Tonsillar exudate OR
- [ ] Positive GAS test (rapid or culture)
- [ ] Treatment provided
- [ ] Resolution

**Red flags for alternative diagnoses:**
- Prolonged symptoms (> 2 weeks) - consider EBV, HIV, malignancy
- Unilateral symptoms - consider peritonsillar abscess
- Weight loss - consider malignancy, HIV
- Night sweats - consider lymphoma, TB
- Dysphagia progressing - consider malignancy

### Peritonsillar Abscess Management Algorithm

**First PTA:**
- Drainage (needle aspiration or incision and drainage)
- Culture pus (if available)
- Antibiotics (penicillin + metronidazole OR clindamycin)
- Interval tonsillectomy discussion

**Recurrent PTA:**
- Tonsillectomy indicated
- Can be done during acute presentation (quinsy tonsillectomy) or after resolution

**Bilateral or recurrent PTA:**
- Strong indication for tonsillectomy

**Technique selection:**
- Needle aspiration: Office procedure, lower morbidity
- Incision and drainage: Higher success rate, may need sedation
- Immediate tonsillectomy: Definitive treatment, higher bleeding risk

## Surgical Technique Optimization

### Technique Selection Framework

**Clinical decision factors:**

| Factor | Favors total | Favors intracapsular |
|--------|--------------|---------------------|
| Indication | Recurrent tonsillitis | SDB |
| Age | Any | Pediatric |
| Comorbidities | Any | Healthy |
| Bleeding risk acceptability | N/A | Minimize |
| Recurrence risk acceptability | N/A | Accept 5-10% |
| Pain tolerance | Standard | Minimize |

### Energy-Based Device Comparison

**Electrocautery:**
- Most common in US
- Monopolar: More tissue injury, more pain
- Bipolar: Less thermal spread, less pain
- Cost-effective, widely available

**Coblation:**
- Lower temperature (60-100°C vs 400-600°C)
- Less thermal injury
- Reduced postoperative pain
- Faster recovery (1-2 days)
- Higher equipment cost
- Learning curve

**Harmonic scalpel:**
- Ultrasound energy
- Precise dissection
- Good hemostasis
- Less thermal spread than electrocautery
- Equipment cost

**Cold steel:**
- Traditional technique
- Lowest thermal injury
- Lower postoperative pain
- Longer operative time
- Higher primary bleeding risk
- Requires more surgical skill

**Evidence summary:**
- All techniques effective when performed by experienced surgeons
- Choice depends on surgeon experience, availability, cost
- Patient factors should guide selection

### Partial Tonsillectomy Evidence

**Indications:**
- Sleep-disordered breathing
- Tonsillar hypertrophy without recurrent infections
- Concern about postoperative pain

**Contraindications:**
- Recurrent tonsillitis
- History of peritonsillar abscess
- Need for tonsillar biopsy

**Outcomes:**
- Pain: Reduced by 30-50%
- Recovery: 2-3 days faster
- Bleeding: Lower rates
- Recurrence: 3-10% (higher than total)

**Long-term data:**
- 5-year recurrence: 5-8%
- Reoperation rate: 1-3%
- Patient satisfaction: High (when counselled about recurrence risk)

## Post-Operative Care Protocols

### Standardized Recovery Protocols

**Pain management protocol:**

| Time | Medication |
|------|------------|
| q6h scheduled | Acetaminophen 15 mg/kg |
| q6h scheduled | Ibuprofen 10 mg/kg (alternating with acetaminophen q3h) |
| PRN | Oxycodone 0.1-0.15 mg/kg (max 4 doses/day) |

**Hydration goals:**
- Day 0-1: 30-40 mL/kg
- Day 2-3: 40-50 mL/kg
- Day 4+: Normal intake

**Activity progression:**
- Day 1-3: Quiet activities at home
- Day 4-7: Light activity, no school
- Day 8-14: Return to school, no PE/sports
- Day 15+: Full activity

### Bleeding Protocols

**Primary bleeding (< 24 hours):**
- Immediate evaluation
- Treatment based on severity:
  - Mild: Observation, oral hydration
  - Moderate: Cautery under anesthesia
  - Severe: Return to OR

**Secondary bleeding (days 5-10):**
- Immediate evaluation
- Higher risk of severe bleeding
- Lower threshold for operative intervention
- Admission for observation after intervention

**Parent education:**
- Any bleeding: Immediate evaluation
- Bring child to ED if:
  - Active bleeding
  - Blood in saliva
  - Weakness, dizziness
  - Vomiting blood

## Special Populations: Advanced Considerations

### Children with Complex Medical Conditions

**Down syndrome:**
- Airway: Small, collapsible, hypotonic
- OSA: 50-80% prevalence
- PSG mandatory
- Higher respiratory complication rate (up to 20%)
- Consider ICU admission
- May need CPAP postoperatively

**Obesity:**
- OSA: Higher prevalence
- Cure rates: Lower (50-70%)
- Comorbidities: More common
- PSG mandatory
- Higher respiratory complications
- May require additional therapies (CPAP, weight loss)

**Bleeding disorders:**
- Preoperative: Hematology consult
- Factor replacement as indicated
- Von Willebrand disease: Desmopressin or factor
- Hemophilia: Factor VIII/IX replacement
- Close postoperative monitoring

### Adult Tonsillectomy

**Indications:**
- Recurrent tonsillitis (same criteria as pediatric)
- Peritonsillar abscess
- Asymmetric tonsil (malignancy workup)
- Tonsillar hypertrophy with OSA

**Differences from pediatric:**
- Higher complication rates
- Longer recovery (often 3+ weeks)
- Higher bleeding risk
- More comorbidities
- Higher malignancy risk

**Malignancy evaluation:**
- Unilateral tonsillar enlargement
- Constitutional symptoms
- Cervical lymphadenopathy
- Excisional biopsy indicated

## Quality Improvement Metrics

**Process measures:**
- Appropriate indication documentation
- Surgical technique selection
- Postoperative protocol adherence
- Pain management regimen

**Outcome measures:**
- Bleeding rate (target: < 2%)
- Emergency department visits
- Readmission rate
- Patient-reported outcomes
- Satisfaction scores

**Benchmarking:**
- Compare to national averages
- Track complications over time
- Patient age distribution
- Indication distribution`,
      keyTerms: [
        { term: 'Paradise criteria', definition: 'Evidence-based tonsillectomy criteria for recurrent tonsillitis: ≥7 in 1 year, ≥5/year for 2 years, ≥3/year for 3 years' },
        { term: 'intracapsular tonsillectomy', definition: 'Partial tonsil removal preserving capsule; 30-50% less pain, 5-10% recurrence' },
        { term: 'AHI', definition: 'Apnea-hypopnea index; events per hour; pediatric OSA threshold > 1/hour, adult > 5/hour' },
        { term: 'shared decision-making', definition: 'Collaborative decision process incorporating evidence, clinician expertise, and patient values' },
        { term: 'multimodal analgesia', definition: 'Combination analgesic regimen using agents with different mechanisms for optimal pain control' },
      ],
      clinicalNotes: `Key clinical practice points:

1. **Recurrent tonsillitis criteria:** Paradise criteria still reference standard (≥7 in 1 year, ≥5/year for 2 years, ≥3/year for 3 years) with documented episodes. Recent evidence suggests lower thresholds may be justified based on quality of life impact.

2. **SDB now most common indication:** Adenotonsillectomy is first-line for pediatric OSA. PSG indicated for children with comorbidities (obesity, Down syndrome, craniofacial anomalies). Cure rates 70-80% with significant QOL improvements.

3. **Technique selection:** Intracapsular tonsillectomy for SDB (less pain, faster recovery, 5-10% recurrence). Total tonsillectomy for recurrent tonsillitis. Choice depends on indication, patient factors, surgeon experience.

4. **Post-op analgesia:** Multimodal approach standard. Scheduled acetaminophen (15 mg/kg q6h) AND ibuprofen (10 mg/kg q6h). Avoid codeine (FDA black box warning due to CYP2D6 variability). Reserve oxycodone for breakthrough pain.

5. **Bleeding education:** Any post-op bleeding requires immediate evaluation. Secondary bleeding (days 5-10) during eschar sloughing is particularly dangerous. Educate parents on red flags.

6. **Special populations:** Children < 2 years, obese, or with comorbidities need PSG and may need overnight observation. Higher complication rates in these groups.

7. **PTA management:** First episode: drainage + interval tonsillectomy discussion. Recurrence: tonsillectomy indicated. Bilateral PTA: tonsillectomy indicated.

8. **Asymmetric tonsils:** Malignancy risk ~1-2% in adults, higher than children. Excisional biopsy indicated for significant asymmetry.

9. **Hydration critical:** Prevents dehydration, promotes healing, reduces bleeding risk. Set daily goals: 30-40 mL/kg day 1-3.

10. **Adult considerations:** Higher complication rates, longer recovery (3+ weeks), higher malignancy risk. Lower threshold for biopsy with asymmetry.`,
    },
  },

  media: [
    {
      id: 'tonsil-anatomy',
      type: 'diagram',
      filename: 'tonsil-anatomy.svg',
      title: 'Tonsil Anatomy',
      description: 'Anatomy of palatine tonsils and Waldeyer ring',
    },
    {
      id: 'tonsil-grading',
      type: 'diagram',
      filename: 'tonsil-grading.svg',
      title: 'Tonsil Size Grading Scale',
      description: 'Brooks scale for grading tonsillar hypertrophy (0-4)',
    },
    {
      id: 'peritonsillar-abscess',
      type: 'diagram',
      filename: 'peritonsillar-abscess.svg',
      title: 'Peritonsillar Abscess',
      description: 'Anatomy and clinical features of peritonsillar abscess',
    },
    {
      id: 'tonsillectomy-techniques',
      type: 'diagram',
      filename: 'tonsillectomy-techniques.svg',
      title: 'Tonsillectomy Techniques',
      description: 'Comparison of total vs intracapsular tonsillectomy',
    },
  ],

  citations: [
    {
      id: 'aao-hns-tonsillectomy-2019',
      type: 'article',
      title: 'Tonsillectomy in Children: Update to Clinical Practice Guideline',
      authors: ['Mitchell RB', 'Archila LD', 'Owens J', 'et al.'],
      source: 'Otolaryngology-Head and Neck Surgery',
      url: 'https://doi.org/10.1177/0194599819845279',
    },
    {
      id: 'paradise-criteria',
      type: 'article',
      title: 'Efficacy of Tonsillectomy for Recurrent Throat Infection in Severely Affected Children',
      authors: ['Paradise JL', 'Bluestone CD', 'Bachman RZ', 'et al.'],
      source: 'New England Journal of Medicine',
    },
    {
      id: 'uptodate-tonsillitis',
      type: 'article',
      title: 'Treatment and prevention of acute tonsillopharyngitis',
      authors: ['Wald ER', 'Chow AW'],
      source: 'UpToDate',
      accessedDate: '2025-01-26',
    },
  ],

  crossReferences: [
    { targetId: 'structure-tonsils', targetType: 'structure', relationship: 'related', label: 'Palatine Tonsils' },
    { targetId: 'condition-pharyngitis', targetType: 'condition', relationship: 'related', label: 'Pharyngitis' },
    { targetId: 'condition-sleep-apnea', targetType: 'condition', relationship: 'related', label: 'Obstructive Sleep Apnea' },
  ],

  tags: {
    systems: ['ent', 'immune'],
    topics: ['otolaryngology', 'infectious disease', 'surgery', 'pediatrics'],
    keywords: ['tonsillitis', 'tonsillectomy', 'peritonsillar abscess', 'sleep apnea', 'Paradise criteria'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['pediatrics', 'otolaryngology'],
    },
  },

  createdAt: '2025-01-26T00:00:00.000Z',
  updatedAt: '2025-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default tonsillitis;
