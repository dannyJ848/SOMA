/**
 * Epistaxis (Nosebleed) - Comprehensive Educational Content
 *
 * Covers causes of epistaxis, initial management, cautery techniques,
 * anterior vs posterior bleeding, and management of recurrent nosebleeds.
 */

import { EducationalContent } from '../../types';

export const epistaxis: EducationalContent = {
  id: 'condition-epistaxis',
  type: 'condition',
  name: 'Epistaxis',
  nameEs: 'Epistaxis',
  alternateNames: ['Nosebleed', 'Nasal Hemorrhage', 'Anterior Epistaxis', 'Posterior Epistaxis'],
  hpoId: 'HP:0011881',

  levels: {
    1: {
      level: 1,
      summary: 'Epistaxis, or nosebleed, is bleeding from the nose that most commonly occurs from the front part of the nose and can usually be managed at home with simple first aid measures.',
      explanation: `## What is Epistaxis?

**Epistaxis** is the medical term for a nosebleed. It is very common, with most people experiencing at least one nosebleed in their lifetime.

**Where nosebleeds happen:**
- **Anterior (front):** Most common, bleeding from the front of the nose
- **Posterior (back):** Less common, bleeding from deeper in the nose, usually in older adults

## Common Causes

**Most common causes:**
- Dry air (especially in winter)
- Nose picking
- Injury to the nose
- Blowing nose too hard
- Allergies

**Other causes:**
- Colds and sinus infections
- deviated septum (crooked wall between nostrils)
- Chemical irritants
- Certain medications (blood thinners, aspirin)
- Blood clotting disorders
- High blood pressure (more commonly linked to severity, not cause)
- Foreign objects (especially in children)

## Signs and Symptoms

**Anterior nosebleed (most common):**
- Bleeding from one nostril
- Blood dripping out of the front of the nose
- Usually easy to stop at home

**Posterior nosebleed (more serious):**
- Bleeding down the back of the throat
- Blood when coughing or spitting
- Usually in older adults
- Often harder to stop
- May require medical treatment

## What to Do: First Aid

**Step-by-step for stopping a nosebleed:**

1. **Stay calm** - Most nosebleeds look worse than they are
2. **Sit up straight** and lean slightly forward (not backward)
3. **Pinch the soft part** of your nose (just below the bone)
4. **Hold the pinch** for 10-15 minutes without letting go
5. **Breathe through your mouth** while pinching
6. **Apply ice** to the bridge of the nose (optional)
7. **Check** after 10-15 minutes

**Important:**
- DO NOT lie flat or tilt head back (blood can run down throat)
- DO NOT put tissues or gauze inside the nose
- DO NOT blow your nose immediately after bleeding stops

## After the Bleeding Stops

**To prevent re-bleeding:**
- Don't pick or blow your nose for several hours
- Keep your head higher than your heart
- Use a humidifier if air is dry
- Apply a small amount of petroleum jelly (Vaseline) or nasal saline gel inside the nose
- Avoid heavy lifting or straining for 24 hours

## When to See a Doctor

**Seek medical care if:**
- Bleeding doesn't stop after 20 minutes of pressure
- Bleeding is very heavy or gushing
- You feel faint or dizzy
- Bleeding follows a serious injury to the face or head
- You have trouble breathing
- The nosebleed happened after a fall or accident
- You are on blood-thinning medication

**Call 911 for emergency care if:**
- Bleeding is extremely heavy
- You are having trouble breathing
- You feel faint or are losing consciousness
- There has been a serious injury to the head or face

## Medical Treatment

**What a doctor might do:**

**Nasal packing:**
- Special gauze or sponge placed in the nose
- Applies pressure to stop bleeding
- Usually left in place for 24-48 hours

**Cautery:**
- Using heat or chemicals to seal the blood vessel
- Usually done in the doctor's office

**Medication:**
- Nasal sprays to constrict blood vessels
- Antibiotic ointment to prevent infection

**For posterior nosebleeds:**
- Special balloon catheters
- Sometimes hospital admission
- May require surgery in severe cases

## Prevention

**To prevent future nosebleeds:**
- Use a humidifier, especially in dry winter months
- Keep the inside of your nose moist with saline spray or gel
- Avoid picking your nose
- Keep fingernails short (especially for children)
- Be gentle when blowing your nose
- Avoid irritants like smoke
- Wear protective equipment during sports
- Use a saline nasal spray regularly
- Apply a thin layer of petroleum jelly inside nostrils in dry weather

## Special Considerations

**Children:**
- Very common in ages 2-10
- Often from nose picking or dry air
- Usually anterior nosebleeds
- Often outgrow them

**Older adults:**
- More likely to have posterior nosebleeds
- May be related to blood pressure or blood thinners
- More likely to need medical treatment
- May take blood thinners (heart medications)

**Pregnant women:**
- More common due to increased blood volume and hormonal changes
- Usually not serious
- Usually stop with pressure

**People on blood thinners:**
- More likely to have nosebleeds
- May be harder to stop
- Don't stop blood thinners without talking to your doctor
- Mention nosebleeds to the doctor prescribing blood thinners`,
      keyTerms: [
        { term: 'epistaxis', definition: 'Bleeding from the nose; commonly called a nosebleed' },
        { term: 'anterior epistaxis', definition: 'Nosebleed from the front part of the nose; most common type' },
        { term: 'posterior epistaxis', definition: 'Nosebleed from deeper in the nose; more serious, harder to stop' },
        { term: 'cautery', definition: 'Using heat or chemicals to seal a blood vessel and stop bleeding' },
      ],
      analogies: [
        'The blood vessels in your nose are like tiny hoses that can leak when irritated or dry.',
        'Pinching the soft part of your nose is like putting a kink in a hose to stop water flow.',
      ],
      examples: [
        'A child has a nosebleed after picking their nose - this is a typical anterior nosebleed that can be managed at home.',
        'An older adult on blood thinners has bleeding down the back of the throat - this may be a posterior nosebleed needing medical care.',
      ],
      patientCounselingPoints: [
        'Stay calm and sit up straight, leaning slightly forward',
        'Pinch the soft part of the nose for 10-15 minutes without letting go',
        'Do NOT tilt your head back - blood can run down your throat',
        'After bleeding stops, avoid blowing your nose or picking at it for several hours',
        'Use a humidifier in dry weather to prevent future nosebleeds',
        'Seek medical care if bleeding does not stop after 20 minutes',
      ],
    },
    2: {
      level: 2,
      summary: 'Epistaxis is classified as anterior (most common, Kiesselbach plexus) or posterior (more serious, Woodruff plexus). Management includes direct pressure, vasoconstriction, cautery, or packing based on location and severity.',
      explanation: `## Anatomy

**Vascular supply of the nose:**
- **Anterior:** Kiesselbach plexus (Little area)
  - Located on the anterior nasal septum
  - Convergence of 5 arteries:
    - Anterior ethmoidal artery
    - Sphenopalatine artery
    - Greater palatine artery
    - Superior labial artery
    - Posterior ethmoidal artery
  - Site of 90% of epistaxis

- **Posterior:** Woodruff plexus
  - Located posterior inferior meatus
  - Branches of sphenopalatine artery
  - Site of 10% of epistaxis but more difficult to control

**Nasal septum:**
- Cartilaginous anterior portion (Kiesselbach plexus location)
- Bony posterior portion

## Classification

### Anterior Epistaxis

**Characteristics:**
- 90-95% of cases
- Bleeding from Kiesselbach plexus
- Blood visible exiting nostril
- Usually unilateral
- More common in children and young adults
- Typically easier to control
- Less likely to require intervention

**Common causes:**
- Dry air causing mucosal drying
- Digital trauma (nose picking)
- Foreign body (children)
- Facial trauma
- Allergic rhinitis
- Medication effects (nasal sprays)

### Posterior Epistaxis

**Characteristics:**
- 5-10% of cases
- Bleeding from Woodruff plexus
- Blood may drain posteriorly
- More common in older adults
- Often harder to control
- More likely to require intervention
- Higher rate of complications

**Risk factors:**
- Hypertension
- Atherosclerosis
- Coagulopathy
- Anticoagulant therapy
- Older age

## Etiology

### Local Causes (90%)

**Trauma:**
- Nose picking (most common)
- Foreign body (children)
- Facial injury
- Nasal surgery
- Nasal intubation

**Inflammatory:**
- Allergic rhinitis
- Sinusitis
- Upper respiratory infection
- Irritants (chemicals, smoke)

**Anatomic:**
- Deviated septum (creates turbulent airflow)
- Nasal septal perforation
- Vascular lesions

**Environmental:**
- Dry air (low humidity)
- High altitude
- Temperature changes

**Iatrogenic:**
- Nasal sprays (improper technique)
- Oxygen cannulas
- Nasogastric tubes

### Systemic Causes (10%)

**Coagulation disorders:**
- Hemophilia
- Von Willebrand disease
- Thrombocytopenia
- Liver disease (coagulopathy)

**Medications:**
- Anticoagulants (warfarin, DOACs)
- Antiplatelets (aspirin, clopidogrel)
- NSAIDs

**Vascular:**
- Hereditary hemorrhagic telangiectasia (HHT)
- Hypertension (worsens severity, not primary cause)

**Other:**
- Chronic kidney disease
- Alcohol use
- Pregnancy (increased blood volume, hormonal changes)

## Clinical Presentation

### History

**Key questions:**
- Which side?
- Duration and amount of bleeding?
- What started it?
- Previous episodes?
- Medical problems?
- Medications (especially blood thinners)?
- Family history of bleeding disorders?
- Substance use (cocaine causes nasal damage)?

### Physical Examination

**Anterior epistaxis findings:**
- Visible bleeding point on anterior septum
- Visible vessel (prominent vessel)
- Crusting or ulceration
- Deviated septum

**Posterior epistaxis findings:**
- No anterior source identified
- Blood in posterior pharynx
- Often difficult to visualize bleeding point

**General examination:**
- Vital signs (check for hypovolemia)
- Skin examination (petechiae suggesting coagulopathy)
- Nasal examination (with speculum or endoscope)

## Management

### Initial Management

**Step 1: Stabilization**
- ABCs (Airway, Breathing, Circulation)
- Sit patient upright (decreases venous pressure)
- Lean forward (prevent blood aspiration)
- Protect clothing

**Step 2: Direct Pressure**
- Pinch the soft part of the nose (ala)
- Sustained pressure for 10-15 minutes
- Do not release early to check

**Step 3: Vasoconstriction**
- Oxymetazoline (Afrin) spray
- Phenylephrine spray
- Cocaine (historical, rarely used now)
- Apply before cautery or packing

**Step 4: Visualization**
- Headlight and nasal speculum
- Suction to clear clots
- Identify bleeding source

### Anterior Epistaxis Management

**Chemical cautery:**
- Silver nitrate sticks
- Apply to bleeding vessel
- Avoid touching both sides of septum (risk of perforation)
- Apply antibiotic ointment afterward

**Electrocautery:**
- Heat coagulation
- Requires local anesthesia
- Usually in ENT office

**Anterior packing:**
- If cautery not possible or unsuccessful
- Materials:
  - Gauze with petroleum jelly
  - Merocel (expandable sponge)
  - Rapid Rhino (inflatable balloon)
- Leave in place 3-5 days
- Prophylactic antibiotics (controversial)

### Posterior Epistaxis Management

**Posterior packing:**
- Foley catheter technique
- Commercial posterior packs (Rapid Rhino posterior)
- Requires expertise
- Uncomfortable for patient
- Admission often required

**Surgical options:**
- Endoscopic arterial ligation:
  - Sphenopalatine artery ligation
  - Anterior/posterior ethmoidal artery ligation
- Embolization:
  - Angiographic embolization of maxillary artery
  - Radiology procedure
  - Reserved for refractory cases

## Special Populations

### Children

**Common causes:**
- Digital trauma
- Foreign body
- Dry air
- Allergic rhinitis

**Management:**
- Most respond to pressure and vasoconstriction
- Chemical cautery with silver nitrate
- Rarely requires packing
- Evaluate for foreign body if unilateral foul discharge

### Older Adults

**Considerations:**
- Higher likelihood of posterior epistaxis
- Often on anticoagulants
- May have hypertension
- Higher complication risk

**Management:**
- Lower threshold for posterior packing
- May require arterial ligation or embolization
- Manage anticoagulation in consultation with prescribing physician

### Anticoagulated Patients

**Management principles:**
- Most epistaxis from anterior source
- Local measures usually effective
- Reversal of anticoagulation rarely needed
- Consult with prescribing physician before stopping

**Specific considerations:**
- **Warfarin:** Hold if INR significantly elevated; reversal if life-threatening
- **DOACs:** Hold; specific reversal agents available
- **Antiplatelets:** Hold if severe bleeding; reversal agents limited

## Complications

**Of epistaxis:**
- Hypovolemia (rare but possible with severe bleeding)
- Anemia from repeated episodes
- Aspiration of blood
- Airway compromise

**Of treatment:**
- Septal perforation (from bilateral cautery)
- Toxic shock syndrome (from packing)
- Nasal synechiae (adhesions)
- Pressure necrosis from packing
- Discomfort from packing

## Prevention

**Environmental measures:**
- Humidification (especially in winter)
- Saline nasal spray or gel
- Petroleum jelly for dryness
- Avoid nasal irritants (smoke)

**Medical management:**
- Treat allergic rhinitis
- Control hypertension
- Review medication necessity
- Manage bleeding disorders

**Patient education:**
- Proper nasal spray technique
- Avoid nose picking
- Keep fingernails short (children)
- Humidifier use`,
      keyTerms: [
        { term: 'epistaxis', definition: 'Bleeding from the nose' },
        { term: 'Kiesselbach plexus', definition: 'Vascular plexus on the anterior nasal septum; site of 90% of nosebleeds', pronunciation: 'KEES-el-bakh' },
        { term: 'Woodruff plexus', definition: 'Vascular plexus in the posterior nasal cavity; site of posterior epistaxis' },
        { term: 'cautery', definition: 'Application of heat or chemical to seal blood vessels and stop bleeding' },
        { term: 'anterior packing', definition: 'Placement of material in the anterior nasal cavity to apply pressure and stop bleeding' },
      ],
      analogies: [
        'Kiesselbach plexus is like a busy intersection where several blood vessels meet - making it a common spot for leaks.',
        'Posterior packing is like putting a cork in the back of the nose to stop the bleeding.',
      ],
    },
    3: {
      level: 3,
      summary: 'Epistaxis management requires identification of bleeding source (anterior Kiesselbach plexus vs posterior Woodruff plexus), appropriate application of direct pressure and vasoconstriction, and escalation to cautery, packing, or surgical intervention based on severity and response.',
      explanation: `## Anatomy and Pathophysiology

### Nasal Vascular Anatomy

**Arterial supply:**
- **External carotid branches:**
  - Sphenopalatine artery (terminal branch of maxillary artery)
  - Greater palatine artery
  - Superior labial artery
  - Facial artery branches

- **Internal carotid branches:**
  - Anterior ethmoidal artery
  - Posterior ethmoidal artery

**Kiesselbach plexus (Little area):**
- Anteriorinferior nasal septum
- Confluence of:
  - Anterior ethmoidal artery
  - Sphenopalatine artery
  - Greater palatine artery
  - Superior labial artery
  - Posterior ethmoidal artery
- Highly vascular, relatively exposed mucosa
- Site of > 90% of epistaxis

**Woodruff plexus:**
- Posterior nasal cavity
- Posterior nasal branch of sphenopalatine artery
- Venous plexus more than arterial
- Rich anastomotic network
- Site of most posterior epistaxis

### Hemostasis in the Nasal Cavity

**Normal hemostasis:**
- Vascular spasm (immediate)
- Platelet plug formation
- Coagulation cascade
- Fibrin clot formation

**Disruption leading to epistaxis:**
- Mucosal disruption (dryness, trauma)
- Vascular friability (inflammation, medications)
- Coagulation defects
- Increased arterial pressure (hypertension)

## Diagnostic Approach

### History Taking

**Epistaxis characteristics:**
- Side: Left, right, or bilateral
- Duration: Minutes to hours
- Amount: Estimated blood loss
- Previous episodes: Frequency, severity
- Triggers: Spontaneous vs provoked

**Associated symptoms:**
- Post-nasal drip (posterior bleeding)
- Difficulty swallowing blood
- Shortness of breath
- Dizziness, syncope

**Medical history:**
- Bleeding disorders (personal, family)
- Hypertension
- Liver disease
- Renal disease
- Hereditary hemorrhagic telangiectasia

**Medications:**
- Anticoagulants (warfarin, DOACs, heparin)
- Antiplatelets (aspirin, clopidogrel)
- NSAIDs
- Nasal medications (topical decongestants, corticosteroids)
- Intranasal drug use (cocaine)

**Environmental exposures:**
- Dry air
- Chemical irritants
- High altitude
- Trauma

### Physical Examination

**General assessment:**
- Vital signs (hypotension, tachycardia suggests significant blood loss)
- Skin examination (petechiae, ecchymoses, telangiectasias)
- Lymphadenopathy

**Nasal examination:**
- Anterior rhinoscopy with speculum
- Headlight for adequate illumination
- Suction to remove clots
- Identify bleeding point

**Findings suggesting anterior source:**
- Visible vessel on anterior septum
- Active bleeding from Kiesselbach plexus
- Ulceration or crusting
- Deviated septum

**Findings suggesting posterior source:**
- No anterior bleeding identified
- Blood in posterior pharynx
- Bilateral bleeding
- Often difficult to visualize

**Nasal endoscopy:**
- Indicated when:
  - Posterior source suspected
  - Anterior examination inconclusive
  - Recurrent epistaxis
  - HHT evaluation

## Management Algorithm

### Initial Management

**Step 1: Resuscitation (if needed)**
- ABCs
- IV access for significant bleeding
- Fluid resuscitation for hypovolemia
- Blood products if coagulopathy

**Step 2: Positioning and pressure**
- Upright position (reduces venous pressure)
- Lean forward (prevent aspiration)
- Direct pressure to ala
- Sustained for 10-15 minutes

**Step 3: Vasoconstriction**
- Topical decongestants:
  - Oxymetazoline 0.05%: 2-3 sprays
  - Phenylephrine 0.25%: 2-3 sprays
  - Lidocaine 2-4% for anesthesia
- Allow 5-10 minutes for effect
- Improves visualization

**Step 4: Identify bleeding source**
- Adequate lighting
- Suction
- Nasal speculum
- Endoscopy if needed

### Anterior Epistaxis Treatment

**Chemical cautery:**
- Indications: Visible vessel, accessible bleeding point
- Technique:
  - Anesthetize with lidocaine spray
  - Apply silver nitrate stick circumferentially
  - Avoid bilateral septal cautery (perforation risk)
  - Apply antibiotic ointment post-procedure
- Success rate: 70-90%

**Electrocautery:**
- Indications: Failed chemical cautery, large vessel
- Technique:
  - Local infiltration anesthesia
  - bipolar or monopolar cautery
  - Lower power settings to avoid cartilage damage
- Success rate: > 90%

**Anterior nasal packing:**

| Material | Advantages | Disadvantages |
|----------|------------|---------------|
| Vaseline gauze | Inexpensive | Difficult placement, removal pain |
| Merocel | Easy placement, expansion | Requires saline, removal discomfort |
| Rapid Rhino | Easy placement, balloon | Cost |
| Tamer (PVA) | Excellent hemostasis | Difficult removal |

**Packing technique:**
- Layer posterior to anterior
- Adequate filling to apply pressure
- Keep in place 3-5 days
- Consider prophylactic antibiotics (controversial)

### Posterior Epistaxis Treatment

**Posterior nasal packing:**
- Indications: Failed anterior packing, posterior source
- Options:
  - Foley catheter (10-14 French)
  - Commercial posterior packs (Rapid Rhino posterior)
  - Bivalved splint

**Technique:**
- Pass catheter along floor of nose
- Inflate balloon in nasopharynx
- Pull forward to seal choana
- Anterior packing as backup
- Admission for airway monitoring

**Surgical management:**
- **Endoscopic sphenopalatine artery ligation:**
  - Transnasal endoscopic approach
  - Ligate or clip sphenopalatine artery
  - Success rate: 90-95%

- **Endoscopic ethmoidal artery ligation:**
  - Superior epistaxis
  - Requires external ethmoidectomy or endoscopic approach

**Embolization:**
- Indications: Failed surgical management, poor surgical candidate
- Technique: Angiographic embolization of maxillary artery branches
- Success rate: 70-90%
- Risks: Stroke, facial pain, nasal necrosis

## Special Situations

### Hereditary Hemorrhagic Telangiectasia (HHT)

**Osler-Weber-Rendu syndrome:**
- Autosomal dominant
- Vascular malformations (telangiectasias)
- Epistaxis: Most common manifestation
- Recurrent, often severe

**Management:**
- Laser ablation of telangiectasias
- Septal dermoplasty
- Hormonal therapy (estrogen)
- Anti-angiogenic agents (bevacizumab)
- Surgical closure (Young procedure) - rarely done

### Coagulopathy

**Hemophilia:**
- Factor VIII or IX deficiency
- Epistaxis management:
  - Factor replacement
  - Antifibrinolytics (aminocaproic acid, tranexamic acid)
  - Local measures (pressure, packing)

**Von Willebrand disease:**
- Most common inherited bleeding disorder
- Management:
  - Desmopressin (DDAVP) for type 1
  - Factor VIII concentrate (containing vWF)
  - Antifibrinolytics
  - Local measures

**Thrombocytopenia:**
- Platelet transfusion if very low
- Antifibrinolytics
- Local measures

### Anticoagulated Patients

**Warfarin:**
- Most epistaxis controlled locally
- Reversal for life-threatening bleeding:
  - Vitamin K
  - PCC (prothrombin complex concentrate)
  - FFP (fresh frozen plasma)

**DOACs (apixaban, rivaroxaban, dabigatran):**
- Andexanet alfa for factor Xa inhibitors
- Idarucizumab for dabigatran
- Most bleeding controlled with local measures

**Antiplatelets:**
- Hold aspirin/clopidogrel for severe bleeding
- Platelet transfusion rarely needed
- Desmopressin may help

## Complications

**Of epistaxis:**
- Hypovolemic shock (rare)
- Aspiration pneumonia
- Airway obstruction
- Anemia from recurrent bleeding

**Of treatment:**
- Septal hematoma
- Septal perforation (bilateral cautery)
- Toxic shock syndrome (nasal packing)
- Alar necrosis (packing too tight)
- Nasal synechiae
- Pressure necrosis

**Mortality:**
- Rare with anterior epistaxis
- Higher with posterior epistaxis
- Associated with comorbidities`,
      keyTerms: [
        { term: 'Kiesselbach plexus', definition: 'Vascular plexus on anterior nasal septum; site of > 90% of epistaxis' },
        { term: 'Woodruff plexus', definition: 'Venous plexus in posterior nasal cavity; site of posterior epistaxis' },
        { term: 'sphenopalatine artery', definition: 'Branch of maxillary artery; major contributor to nasal blood supply; target for ligation' },
        { term: 'HHT', definition: 'Hereditary hemorrhagic telangiectasia; autosomal dominant disorder causing vascular malformations and recurrent epistaxis' },
        { term: 'septal perforation', definition: 'Hole in the nasal septum; complication of bilateral cautery or nasal surgery' },
      ],
      clinicalNotes: 'Most epistaxis is anterior from Kiesselbach plexus. Initial management: upright position, lean forward, direct pressure to ala for 10-15 minutes, topical decongestant spray. If bleeding point visible: chemical cautery with silver nitrate (unilateral only). If cautery fails: anterior packing (Merocel, Rapid Rhino). Posterior epistaxis: posterior packing or arterial ligation. Hold anticoagulation reversal for life-threatening bleeding. Always rule out HHT in recurrent, severe epistaxis.',
    },
    4: {
      level: 4,
      summary: 'Epistaxis management requires systematic identification of bleeding source, appropriate escalation from local measures to cautery, packing, and surgical intervention, with special considerations for anticoagulated patients and hereditary hemorrhagic telangiectasia.',
      explanation: `## Evidence-Based Management

### Initial Management Evidence

**Positioning:**
- Head upright vs head back:
  - Upright reduces venous pressure
  - Head back increases aspiration risk
  - Strong recommendation: Sit upright and lean forward

**Direct pressure duration:**
- Studies show 10 minutes effective for most anterior epistaxis
- Early release increases failure rate
- Patient education critical

**Vasoconstrictors:**
- Oxymetazoline vs placebo:
  - Reduces bleeding time
  - Improves visualization
  - Safe in most patients (avoid in uncontrolled hypertension)
- Lidocaine addition:
  - Provides anesthesia
  - Improves patient comfort
  - No contraindications with vasoconstrictor

### Cautery Evidence

**Chemical vs electrocautery:**
- Chemical: Lower cost, office-based
- Electro: Higher success rate, requires equipment
- No significant difference in long-term outcomes
- Choice based on availability and expertise

**Silver nitrate technique:**
- Roll applicator to avoid point pressure
- Apply circumferentially around vessel
- Duration: 5-10 seconds until gray color
- Avoid bilateral septal application (perforation risk)

**Complications:**
- Septal perforation: 0.5-1%
- Most avoidable with proper technique
- Unilateral application only

### Packing Evidence

**Anterior packing materials:**
- Traditional gauze:
  - Lower cost
  - More difficult placement/removal
  - Higher patient discomfort

- Absorbable (Merocel, Tamer):
  - Easier placement
  - Better patient tolerance
  - Higher cost

- Balloon (Rapid Rhino):
  - Easiest placement
  - Good hemostasis
  - Highest cost

**Antibiotic prophylaxis:**
- Meta-analysis: No clear benefit for routine use
- Consider for:
  - Immunocompromised patients
  - Packing left > 48 hours
  - Posterior packing
- Topical antibiotic ointment sufficient for most

### Surgical Management Evidence

**Endoscopic SPA ligation vs embolization:**
- SPA ligation:
  - Success rate: 90-95%
  - Lower complication rate
  - Lower cost
  - Local anesthesia possible

- Embolization:
  - Success rate: 70-90%
  - Higher complication rate
  - Higher cost
  - Requires interventional radiology

**Recommendation:** SPA ligation first-line for refractory posterior epistaxis

## Special Population Management

### Hereditary Hemorrhagic Telangiectasia

**Diagnosis:**
- Curaçao criteria (3 of 4 for definite diagnosis):
  1. Spontaneous recurrent epistaxis
  2. Mucocutaneous telangiectasias
  3. Visceral arteriovenous malformations
  4. Family history (first-degree relative)

**Management options:**
- **Conservative:** Humidification, saline sprays, topical estrogen
- **Laser therapy:** KTP or Nd:YAG laser ablation
- **Septal dermoplasty:** Skin graft to septal surface
- **Young procedure:** Surgical closure (rarely done)
- **Bevacizumab:** Anti-VEGF therapy, emerging evidence

### Anticoagulated Patients

**Reversal decision-making:**
- Most epistaxis controlled with local measures
- Reversal indicated for:
  - Life-threatening bleeding
  - Failed local measures
  - Massive posterior epistaxis

**Warfarin reversal:**
- Mild bleeding: Hold warfarin, local measures
- Moderate: Hold warfarin, vitamin K 2.5-5 mg PO
- Severe: PCC + vitamin K IV

**DOAC reversal:**
- Apixaban/rivaroxaban: Andexanet alfa
- Dabigatran: Idarucizumab
- Most patients managed with local measures only

**Antiplatelet reversal:**
- Hold aspirin/clopidogrel for severe bleeding
- Platelet transfusion rarely needed
- Desmopressin may be beneficial

### Pediatric Considerations

**Common causes:**
- Digital trauma (nose picking)
- Foreign body (unilateral foul discharge)
- Dry air
- Allergic rhinitis

**Management differences:**
- Lower threshold for cautery (smaller anatomy)
- Parents can apply pressure
- Avoid packing in young children (airway concern)
- Rarely requires surgical intervention

### Geriatric Considerations

**Unique factors:**
- Higher likelihood of posterior source
- Often on anticoagulants
- More comorbidities
- Poorer tissue healing

**Management approach:**
- Lower threshold for packing
- Consider posterior packing early
- Admission for monitoring with posterior packing
- Manage anticoagulation carefully

## Complications and Prevention

**Toxic shock syndrome:**
- Rare but serious
- Risk higher with packing
- Prevention:
  - Prophylactic antibiotics for high-risk patients
  - Remove packing as soon as possible
  - Educate patients on warning signs

**Septal perforation:**
- Risk factors:
  - Bilateral cautery
  - Prolonged packing
  - Cocaine use
- Prevention:
  - Unilateral cautery only
  - Proper packing technique
  - Limit packing duration

**Aspiration:**
- Risk with posterior bleeding
- Prevention:
  - Upright positioning
  - Forward lean
  - Protect airway

**Hypovolemic shock:**
- Rare with anterior epistaxis
- More common with posterior
- Risk factors: Anticoagulation, coagulopathy, older age

## Quality Improvement

**Process measures:**
- Appropriate initial management (position, pressure)
- First-pass success rate
- Packing material selection
- Antibiotic use appropriateness

**Outcome measures:**
- Recurrence rate
- Complication rate
- Patient satisfaction
- Hospital admission rate`,
      keyTerms: [
        { term: 'SPA ligation', definition: 'Sphenopalatine artery ligation; endoscopic surgical procedure for refractory epistaxis' },
        { term: 'septal perforation', definition: 'Hole in nasal septum; complication of bilateral cautery, nasal surgery, or cocaine use' },
        { term: 'HHT', definition: 'Hereditary hemorrhagic telangiectasia; autosomal dominant vascular disorder causing recurrent epistaxis' },
        { term: 'Curaçao criteria', definition: 'Diagnostic criteria for HHT: epistaxis, telangiectasias, AVMs, family history' },
      ],
      clinicalNotes: 'Most epistaxis anterior from Kiesselbach plexus. Initial management: upright, lean forward, direct pressure 10 min, oxymetazoline spray. Chemical cautery if vessel visible (unilateral only). Anterior packing if cautery fails. Posterior: posterior packing or SPA ligation. Anticoagulation reversal only for life-threatening bleeding. Avoid bilateral cautery (perforation risk). Consider HHT in recurrent severe cases.',
    },
    5: {
      level: 5,
      summary: 'Contemporary epistaxis management integrates evidence-based protocols from initial local measures through surgical intervention, with individualized approaches for anticoagulated patients, hereditary hemorrhagic telangiectasia, and refractory bleeding requiring multidisciplinary care.',
      explanation: `## Advanced Management Protocols

### Refractory Epistaxis

**Definition:**
- Failed appropriate local measures
- Failed packing
- Recurrence after initial control
- Need for surgical intervention

**Management algorithm for refractory cases:**
1. Re-evaluate for missed anterior source (endoscopy)
2. Consider bleeding disorder workup
3. Posterior packing (if not already done)
4. Surgical ligation (SPA first-line)
5. Embolization (if poor surgical candidate or ligation failed)

### Surgical Options: Evidence Update

**Endoscopic SPA ligation:**
- First-line surgical intervention
- Success rate: 90-95%
- Can be performed under local anesthesia
- Complication rate: < 5%
- Recurrence rate: 5-10%

**Technique tips:**
- Identify crista ethmoidalis (landmark)
- Identify sphenopalatine foramen
- Ligate or clip artery distal to foramen
- Consider posterior nasal neurectomy for chronic rhinitis

**Ethmoidal artery ligation:**
- Indicated for:
  - Superior epistaxis
  - Failed SPA ligation
  - Anterior ethmoidal artery identified as source
- Success rate: 80-90%
- External or endoscopic approach

**Internal maxillary artery ligation:**
- Transantral approach (Caldwell-Luc)
- Historical procedure
- Largely replaced by SPA ligation

### Embolization: Current Role

**Indications:**
- Failed surgical ligation
- Poor surgical candidate
- Contralateral recurrence after ligation
- Life-threatening bleeding

**Technique:**
- Angiographic identification of bleeding vessel
- Embolization of maxillary artery branches
- Sometimes facial artery also embolized

**Outcomes:**
- Immediate success: 80-90%
- Recurrence: 10-20%
- Complications:
  - Stroke: 1-2%
  - Facial pain: 5-10%
  - Nasal necrosis: < 1%

## Special Situations

### Hereditary Hemorrhagic Telangiectasia

**Genetic basis:**
- HHT1: ENG gene (endoglin) - chromosome 9
- HHT2: ACVRL1 (ALK1) - chromosome 12
- HHT3: SMAD4 - chromosome 18 (JP-HHT syndrome)

**Epistaxis in HHT:**
- Most common manifestation (90-95%)
- Often severe and recurrent
- Begins in childhood/adolescence
- Increases with age

**Management algorithm:**
1. **Conservative:**
   - Humidification
   - Saline sprays/gels
   - Topical estrogen (controversial)

2. **Minimally invasive:**
   - Laser ablation (KTP, Nd:YAG, argon)
   - Requires serial treatments
   - Good control in 60-80%

3. **Surgical:**
   - Septal dermoplasty (skin graft)
   - Young procedure (nostril closure) - rarely done
   - Transplantation (rare)

4. **Medical:**
   - Bevacizumab (anti-VEGF)
   - Intranasal: Case reports, topical
   - Systemic: For visceral AVMs, may help epistaxis
   - Tranexamic acid: Antifibrinolytic

### Coagulopathy Management

**Von Willebrand disease:**
- Type 1: DDAVP (desmopressin) 0.3 mcg/kg IV
- Type 2A: DDAVP or vWF concentrate
- Type 2B: vWF concentrate (DDAVP contraindicated)
- Type 3: vWF concentrate
- Tranexamic acid: Adjunctive therapy

**Hemophilia:**
- Hemophilia A (Factor VIII): Recombinant Factor VIII
- Hemophilia B (Factor IX): Recombinant Factor IX
- Tranexamic acid: Adjunctive
- Avoid NSAIDs

**Platelet disorders:**
- Thrombocytopenia: Platelet transfusion if < 50,000
- Glanzmann thrombasthenia: Recombinant Factor VIIa
- Bernard-Soulier: Recombinant Factor VIIa

### Anticoagulation Management

**Decision framework for reversal:**
- Life-threatening: Always reverse
- Severe but not life-threatening: Consider reversal
- Moderate: Usually do not reverse
- Mild: Do not reverse

**Warfarin reversal:**
| Severity | INR | Management |
|----------|-----|------------|
| Mild | < 5 | Hold warfarin, local measures |
| Moderate | 5-9 | Hold warfarin, vitamin K 2.5 mg PO |
| Severe | Any + bleeding | Hold warfarin, PCC, vitamin K 5-10 mg IV |

**DOAC reversal:**
- **Apixaban/rivaroxaban:**
  - Andexanet alfa (FDA approved)
  - 4-factor PCC (off-label)
- **Dabigatran:**
  - Idarucizumab (Praxbind, FDA approved)
  - Hemodialysis (if needed)

**Antiplatelet reversal:**
- Hold aspirin/clopidogrel
- Platelet transfusion for severe bleeding
- Desmopressin 0.3 mcg/kg IV (may help)

## Quality Improvement

**Appropriate management metrics:**
1. Initial management compliance:
   - Upright positioning
   - Forward lean
   - Adequate pressure duration (10+ min)
   - Vasoconstrictor use

2. Escalation appropriateness:
   - Cautery before packing when vessel visible
   - Unilateral cautery only
   - Appropriate packing material selection

3. Anticoagulation management:
   - Avoiding unnecessary reversal
   - Appropriate reversal for life-threatening bleeding

4. Documentation:
   - Bleeding source identified
   - Comorbidities addressed
   - Disposition appropriate

**Patient education:**
- Home management techniques
- When to seek care
- Prevention strategies
- Medication effects`,
      keyTerms: [
        { term: 'SPA ligation', definition: 'Sphenopalatine artery ligation; endoscopic surgery for refractory epistaxis; 90-95% success rate' },
        { term: 'Caldwell-Luc', definition: 'Transantral approach to maxillary sinus; historical approach to internal maxillary artery ligation' },
        { term: 'DDAVP', definition: 'Desmopressin; vasopressin analog that increases vWF and Factor VIII levels' },
        { term: 'septal dermoplasty', definition: 'Surgical placement of skin graft on nasal septum; treatment for severe HHT epistaxis' },
      ],
      clinicalNotes: `Key clinical practice points:

1. **Most epistaxis is anterior** from Kiesselbach plexus (> 90%). Initial management: upright, lean forward, direct pressure 10 min, oxymetazoline spray.

2. **Cautery when vessel visible:** Silver nitrate chemical cautery (unilateral only to avoid perforation). Success 70-90%. Apply circumferentially, 5-10 seconds.

3. **Packing when cautery fails or source not visible:** Anterior packing (Merocel, Rapid Rhino). Remove in 3-5 days. Antibiotic prophylaxis controversial (not routinely recommended).

4. **Posterior epistaxis:** Posterior packing or SPA ligation. SPA ligation preferred over embolization (higher success, lower complications). Consider early in refractory cases.

5. **Anticoagulated patients:** Most bleeding controlled locally. Reversal only for life-threatening or uncontrolled bleeding. Andexanet alfa for factor Xa inhibitors, idarucizumab for dabigatran.

6. **HHT screening:** Recurrent, severe epistaxis with family history, mucocutaneous telangiectasias. Curaçao criteria (3 of 4) for diagnosis. Refer to HHT center.

7. **Complications:** Septal perforation from bilateral cautery (avoid unilateral only). Toxic shock from packing (rare). Aspiration risk with posterior bleeding.

8. **Follow-up:** ENT referral for recurrent epistaxis. Evaluation for bleeding disorder if recurrent without local cause. Endoscopy for posterior source.

9. **Pediatrics:** Most anterior from digital trauma. Cautery effective. Avoid packing in young children (airway risk).

10. **Geriatrics:** Higher posterior rate. Often on anticoagulants. Lower threshold for admission with posterior packing.`,
    },
  },

  media: [
    {
      id: 'nasal-vasculature',
      type: 'diagram',
      filename: 'nasal-vasculature.svg',
      title: 'Nasal Vascular Anatomy',
      description: 'Arterial supply to the nasal cavity showing Kiesselbach and Woodruff plexuses',
    },
    {
      id: 'epistaxis-management',
      type: 'diagram',
      filename: 'epistaxis-management.svg',
      title: 'Epistaxis Management Algorithm',
      description: 'Stepwise approach to epistaxis management',
    },
    {
      id: 'cautery-technique',
      type: 'diagram',
      filename: 'cautery-technique.svg',
      title: 'Chemical Cautery Technique',
      description: 'Proper silver nitrate cautery technique',
    },
  ],

  citations: [
    {
      id: 'aao-hns-epistaxis-2020',
      type: 'article',
      title: 'Clinical Practice Guideline: Nosebleed (Epistaxis)',
      authors: ['Tanner SB', 'Vaezi MF', 'Holy CE', 'et al.'],
      source: 'Otolaryngology-Head and Neck Surgery',
      url: 'https://doi.org/10.1177/0194599820946612',
    },
    {
      id: 'uptodate-epistaxis',
      type: 'article',
      title: 'Evaluation and management of epistaxis in children',
      authors: ['Cotton RT', 'Tunkel DE'],
      source: 'UpToDate',
      accessedDate: '2025-01-26',
    },
  ],

  crossReferences: [
    { targetId: 'structure-nasal-cavity', targetType: 'structure', relationship: 'related', label: 'Nasal Cavity' },
    { targetId: 'condition-coagulation-disorders', targetType: 'condition', relationship: 'related', label: 'Coagulation Disorders' },
    { targetId: 'condition-ht', targetType: 'condition', relationship: 'related', label: 'Hereditary Hemorrhagic Telangiectasia' },
  ],

  tags: {
    systems: ['ent', 'vascular'],
    topics: ['otolaryngology', 'emergency medicine', 'hematology'],
    keywords: ['epistaxis', 'nosebleed', 'Kiesselbach plexus', 'cautery', 'nasal packing', 'SPA ligation'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['otolaryngology', 'emergency medicine'],
    },
  },

  createdAt: '2025-01-26T00:00:00.000Z',
  updatedAt: '2025-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default epistaxis;
