/**
 * Conjunctivitis (Pink Eye) - Comprehensive Educational Content
 *
 * Covers viral, bacterial, allergic, and other forms of conjunctivitis
 * with diagnosis and treatment approaches.
 */

import { EducationalContent } from '../../types';

export const conjunctivitis: EducationalContent = {
  id: 'condition-conjunctivitis',
  type: 'condition',
  name: 'Conjunctivitis',
  alternateNames: ['Pink Eye', 'Pinkeye', 'Red Eye'],
  hpoId: 'HP:0000504',

  levels: {
    1: {
      level: 1,
      summary: 'Conjunctivitis, commonly called "pink eye," is inflammation of the clear tissue that covers the white part of the eye and lines the inside of the eyelids. It causes redness, itching, and sometimes discharge.',
      explanation: `Think of conjunctivitis like getting a rash on the white part of your eye. The conjunctiva is a clear, thin layer of tissue that covers the white of your eye and lines your eyelids. When it gets irritated or infected, it becomes red and swollen.

**Types of conjunctivitis:**

1. **Viral Conjunctivitis (most common):**
   - Caused by a virus (like the common cold)
   - Very contagious, like a cold
   - Spreads easily in schools and daycares
   - Clear, watery discharge
   - Often starts in one eye, then spreads to both
   - Goes away on its own in 1-2 weeks

2. **Bacterial Conjunctivitis:**
   - Caused by bacteria
   - Contagious
   - Yellow or green sticky discharge
   - Eyelids may be stuck together in the morning
   - Often treated with antibiotic eye drops

3. **Allergic Conjunctivitis:**
   - Caused by allergies (pollen, dust, pet dander)
   - NOT contagious
   - Both eyes usually affected
   - Very itchy, watery eyes
   - Often with sneezing and stuffy nose
   - Happens during allergy season

**What causes conjunctivitis?**

**Viral:**
- Same viruses that cause colds
- spreads by coughing, sneezing, touching
- spreads by sharing towels, pillowcases, makeup

**Bacterial:**
- Bacteria that live on skin or in respiratory tract
- spreads by touching infected eye then touching other objects
- poor hand washing

**Allergic:**
- Pollen from trees, grass, weeds
- Dust mites
- Pet dander
- Mold

**Symptoms:**
- Red or pink color in the white of the eye
- Swollen eyelids
- Itching (especially allergies)
- Burning or gritty feeling
- Watery or sticky discharge
- Crusty eyelids in the morning
- Increased sensitivity to light

**How is it treated?**

**Viral:**
- No specific treatment
- Cool compresses for comfort
- Artificial tears for discomfort
- Goes away on its own in 1-2 weeks

**Bacterial:**
- Antibiotic eye drops or ointment
- Improves in 2-3 days with treatment

**Allergic:**
- Avoid the allergen if possible
- Antihistamine eye drops
- Oral antihistamines
- Cold compresses

**How to prevent spreading:**
- Wash hands often with soap and water
- Don't touch or rub your eyes
- Don't share towels, pillowcases, or makeup
- Change pillowcases daily
- Clean eyeglasses regularly
- Stay home from school or work until no longer contagious

**When to see a doctor:**
- Vision changes or blurring
- Eye pain (not just irritation)
- Sensitivity to light
- Symptoms not improving after a week
- Symptoms in a newborn baby
- Weakened immune system

**Remember:**
- Most pink eye is mild and goes away on its own
- Good hygiene prevents spreading
- Bacterial conjunctivitis needs antibiotics
- Allergic conjunctivitis is not contagious`,
      keyTerms: [
        { term: 'conjunctiva', definition: "The clear, thin layer of tissue that covers the white part of the eye and lines the inside of the eyelids" },
        { term: 'discharge', definition: "Fluid that comes out of the eye; can be watery (viral) or thick and sticky (bacterial)" },
        { term: 'contagious', definition: "Able to spread from one person to another" },
      ],
      analogies: [
        'Conjunctivitis is like a cold in your eye - viral pink eye spreads just like a cold and goes away on its own.',
        'The conjunctiva is like a clear wrap protecting the eye - when it gets inflamed, the blood vessels show through, making the eye look red.',
      ],
      examples: [
        'A child wakes up with eyelids stuck together with yellow crust - likely bacterial conjunctivitis.',
        'Someone with spring allergies has itchy, red, watery eyes along with sneezing - allergic conjunctivitis.',
      ],
      patientCounselingPoints: [
        'Wash hands frequently and avoid touching your eyes to prevent spreading pink eye.',
        "Don't share towels, washcloths, pillowcases, or eye makeup.",
        'Use a clean towel and washcloth daily.',
        "Discard eye makeup and contact lenses used when you had symptoms.",
        'See a doctor if you have eye pain, vision changes, or light sensitivity.',
      ],
    },
    2: {
      level: 2,
      summary: 'Conjunctivitis is inflammation of the conjunctiva, the transparent membrane covering the sclera and lining the eyelids. The main types are viral (adenovirus most common), bacterial (Staph, Strep, H. influenzae), and allergic (IgE-mediated hypersensitivity). Diagnosis is based on clinical findings and differentiation guides appropriate management.',
      explanation: `## Anatomy

**The Conjunctiva:**
- Thin, transparent mucous membrane
- Covers anterior sclera (bulbar conjunctiva)
- Lines inner eyelids (palpebral conjunctiva)
- Reflects at fornix to form conjunctival sac
- Contains goblet cells (mucus production) and accessory lacrimal glands
- Rich vascular supply (for redness when inflamed)

## Types of Conjunctivitis

**1. Viral Conjunctivitis:**

**Causes:**
- Adenovirus (most common, 65-90% of viral cases)
- Other viruses: HSV, VZV, enterovirus, coxsackie (hemorrhagic)
- COVID-19 (conjunctivitis in 1-3%)

**Clinical Features:**
- Sudden onset, usually unilateral then bilateral
- Watery discharge
- Redness, mild discomfort
- Preauricular lymphadenopathy
- Follicles on palpebral conjunctiva
- Often associated with URTI
- Highly contagious

**Adenoviral Types:**
- Epidemic keratoconjunctivitis (EKC): adenovirus 8, 19, 37
  - Severe, prolonged course
  - Corneal infiltrates (subepithelial)
  - Highly contagious
- Pharyngoconjunctival fever: adenovirus 3, 7
  - Fever, sore throat, conjunctivitis
  - Common in children

**2. Bacterial Conjunctivitis:**

**Common Pathogens:**
- Staphylococcus aureus (most common in adults)
- Streptococcus pneumoniae
- Haemophilus influenzae (common in children)
- Moraxella catarrhalis

**Clinical Features:**
- Purulent (thick, sticky) discharge
- Matting of eyelids (especially in morning)
- Redness, mild discomfort
- Usually unilateral but can spread
- Less itching than allergic

**Special Types:**
- **Hyperacute bacterial:** Gonorrhea or chlamydia
  - Profuse purulent discharge
  - Rapid onset (<24 hours)
  - Can cause perforation
  - STD evaluation required

**3. Allergic Conjunctivitis:**

**Types:**
- **Seasonal allergic conjunctivitis (SAC):** Pollen
- **Perennial allergic conjunctivitis (PAC):** Dust mites, pet dander
- **Vernal keratoconjunctivitis (VKC):** Young males, warm weather
- **Atopic keratoconjunctivitis (AKC):** Atopic dermatitis patients

**Clinical Features:**
- Bilateral involvement
- Severe itching (hallmark)
- Watery or stringy (mucoid) discharge
- Redness, chemosis (swelling)
- Papillae on palpebral conjunctiva ("cobblestone")
- Associated allergic rhinitis symptoms
- Not contagious

## Clinical Differentiation

| Feature | Viral | Bacterial | Allergic |
|---------|-------|-----------|----------|
| Discharge | Watery | Mucopurulent | Watery/mucoid |
| Itching | Minimal | Minimal | Severe |
| Preauricular node | Yes | No | No |
| Laterality | Starts unilateral | Often unilateral | Bilateral |
| Pain | Mild | Mild | None |
| Matting | No | Yes | No |
| Papillae | Follicles | Mixed | Large (cobblestone) |
| Atopy | No | No | Often present |
| Contagious | Yes | Yes | No |

## Diagnosis

**History:**
- Onset and duration
- Discharge character
- Itching (allergic)
- Recent URTI (viral)
- Contact with infected person
- Allergy history
- Contact lens use
- Eye drops (medication reaction)

**Physical Examination:**
- Visual acuity (should be normal in simple conjunctivitis)
- Inspection for:
  - Discharge character
  - Conjunctival injection
  - Chemosis (conjunctival swelling)
  - Follicles vs papillae
  - Preauricular lymphadenopathy
  - Corneal involvement (fluorescein stain)
  - Foreign body (everting eyelids)

**Diagnostic Tests:**
- Usually not needed for uncomplicated cases
- Conjunctival swab for culture if:
  - Hyperacute bacterial suspected
  - Not responding to treatment
  - Atypical presentation
- Giemsa stain (viral: lymphocytes; bacterial: neutrophils)
- Allergy testing if allergic conjunctivitis suspected

## Treatment

**Viral Conjunctivitis:**
- Supportive care only
- Cold compresses
- Artificial tears
- Strict hygiene to prevent spread
- No school/work until no longer contagious (typically 3-7 days)
- Topical steroids for severe adenoviral subepithelial infiltrates (ophthalmology)
- Avoid steroid use by generalist (risk of worsening HSV)

**Bacterial Conjunctivitis:**

**Antibiotic Options:**
- **Fluoroquinolones:** Moxifloxacin, besifloxacin, ofloxacin
  - Broad spectrum, good coverage
  - TID-QID dosing
  - Low resistance

- **Aminoglycosides:** Tobramycin, gentamicin
  - Effective against gram-negative
  - QID dosing
  - Can be toxic to epithelium with prolonged use

- **Macrolides:** Erythromycin ointment
  - Good for children
  - BID dosing
  - Can blur vision

- **Sulfonamides:** Sulfacetamide
  - inexpensive
  - Allergy in sulfa-allergic patients

- **Polymyxin B/trimethoprim:** BID-TID
  - Combination, broad coverage
  - Good for pediatric use

**Treatment Duration:** 5-7 days

**Allergic Conjunctivitis:**

**Antihistamine/Mast Cell Stabilizers:**
- Olopatadine (Patanol): BID
- Ketotifen (Zaditor): BID-QID (OTC)
- Azelastine (Optivar): BID
- Epinastine (Elestat): BID

**Mast Cell Stabilizers:**
- Cromolyn (Crolom): QID
- Nedocromil (Alocril): BID-QID

**NSAIDs:**
- Ketorolac (Acular): QID
- For allergic and postoperative inflammation

**Corticosteroids:**
- Only for severe cases under ophthalmology care
- Loteprednol (Alrex, Lotemax): QID
- Fluorometholone (FML): QID
- Prednisolone acetate: QID
- **Never use steroids if HSV possible**

**Supportive Measures:**
- Cold compresses
- Avoid allergen when possible
- Oral antihistamines (loratadine, cetirizine)
- Nasal steroids for concurrent rhinitis

## Special Circumstances

**Contact Lens Wearers:**
- Remove contacts immediately
- Pseudomonas and other gram-negatives possible
- More aggressive coverage (fluoroquinolones)
- Discard current lenses, case
- Wait 1-2 weeks before restarting contacts

**Neonatal Conjunctivitis (Ophthalmia Neonatorum):**
- Gonococcal: Presents day 2-5, copious purulent discharge
- Chlamydial: Presents day 5-14, mild-moderate discharge
- Chemical: Silver nitrate irritation (day 1)
- Treatment: Ceftriaxone IM for gonorrhea, azithromycin for chlamydia

**Hyperacute Bacterial:**
- Emergency ophthalmology referral
- Systemic treatment required
- Gonorrhea: ceftriaxone IM + azithromycin PO
- Chlamydia: azithromycin or doxycycline PO

**Herpes Simplex Virus (HSV) Conjunctivitis:**
- Unilateral, injected eye
- Dendritic ulcers on fluorescein stain
- Preauricular lymphadenopathy
- Skin vesicles may be present
- Treatment: oral acyclovir, valacyclovir, or famciclovir
- **NO topical steroids** (causes worsening)
- Ophthalmology referral

**Molluscum Contagiosum:**
- Viral skin lesion on eyelid
- Causes chronic follicular conjunctivitis
- Treat skin lesion (curettage, cryotherapy)
- Conjunctivitis resolves after skin treatment

**Toxic Conjunctivitis:**
- Medication reaction (drops, cosmetics)
- Red eye with burning/stinging
- Discontinue offending agent
- No infection present

## Prevention

**Hygiene Measures:**
- Frequent hand washing
- Avoid touching/rubbing eyes
- Separate towels, pillowcases
- Discard eye makeup and replace after infection
- Clean contact lenses properly
- Disinfect contact lens case regularly

**Reducing Allergens:**
- Air purifiers
- Dust mite covers for bedding
- Keep windows closed during pollen season
- Bathe pets regularly
- Remove carpet if possible`,
      keyTerms: [
        { term: 'conjunctiva', definition: "Transparent mucous membrane covering sclera and lining eyelids" },
        { term: 'follicles', definition: "Small, round elevations on palpebral conjunctiva; characteristic of viral conjunctivitis" },
        { term: 'papillae', definition: "Cobblestone-like elevations on palpebral conjunctiva; seen in allergic conjunctivitis" },
        { term: 'chemosis', definition: "Edema or swelling of the conjunctiva" },
        { term: 'preauricular lymphadenopathy', definition: "Enlarged lymph node in front of the ear; suggests viral conjunctivitis" },
      ],
      analogies: [
        'Follicles are like small pimples on the inside of the eyelid - they suggest viral infection.',
        'Bacterial discharge is like thick glue that sticks eyelids together overnight.',
      ],
      patientCounselingPoints: [
        'Most viral pink eye is contagious for 7-14 days; stay home until discharge stops.',
        'Apply warm compresses for bacterial, cold compresses for viral/allergic conjunctivitis.',
        'Always wash hands before and after applying eye drops.',
        "Don't wear contact lenses until symptoms completely resolve.",
        'Discard eye makeup used within a week before symptoms started.',
      ],
    },
    3: {
      level: 3,
      summary: 'Conjunctivitis is inflammation of the conjunctiva caused by viral infection (most commonly adenovirus), bacterial infection, or allergic hypersensitivity. Clinical features including discharge character, lymphadenopathy, and laterality help differentiate types. Treatment ranges from supportive care for viral to antibiotics for bacterial to antihistamine/mast cell stabilizers for allergic.',
      explanation: `## Detailed Pathophysiology

**Viral Conjunctivitis:**

**Adenovirus Pathogenesis:**
- Non-enveloped double-stranded DNA virus
- Serotypes 8, 19, 37 cause EKC (epidemic keratoconjunctivitis)
- Serotypes 3, 7 cause pharyngoconjunctival fever
- Direct inoculation to eye via respiratory droplets or fomites
- Incubation: 5-12 days
- Infectious for 10-14 days

**Clinical Course:**
- Day 1-3: Acute onset, watery discharge, injection
- Day 4-7: Peak symptoms, possible subepithelial infiltrates
- Day 8-14: Resolution, infiltrates may persist for months
- Can be unilateral or bilateral (sequential)

**Subepithelial Infiltrates (SEIs):**
- Immune-mediated response to viral antigen
- Appear in second week
- Cause glare, light sensitivity, decreased vision
- Can persist for months to years
- Treat with topical steroids under ophthalmology

**HSV Conjunctivitis:**
- Primary infection: usually children
- Recurrent infection: with immune suppression or stress
- Dendritic ulcers pathognomonic
- Can cause keratitis and scarring
- Needs systemic antivirals + possible topical

**Bacterial Conjunctivitis:**

**Pathogenesis:**
- Colonization of conjunctival surface
- Direct inoculation from respiratory tract, skin, or genital tract
- Disruption of normal flora defenses
- Inflammatory response with purulent exudate
- Incubation: 1-3 days for most bacteria

**Specific Pathogens:**

**Staphylococcus aureus:**
- Most common in adults
- Chronic lid disease (blepharitis) often present
- Can cause marginal infiltrates at limbus
- Methicillin-resistant strains (MRSA) increasing

**Streptococcus pneumoniae:**
- Common in children
- Can cause severe purulent conjunctivitis
- Associated with otitis media

**Haemophilus influenzae:**
- Common in children
- Type b (Hib) vaccine reduced incidence
- Can cause concurrent otitis media

**Gonococcal (Neisseria gonorrhoeae):**
- Hyperacute, copious purulent discharge
- Can perforate cornea within 24-48 hours
- Treat with systemic antibiotics
- Report to public health

**Chlamydial (Chlamydia trachomatis):**
- Less acute than gonococcal
- Inclusion conjunctivitis
- Associated with genital infection
- Treat with systemic antibiotics
- Test and treat partner

**Allergic Conjunctivitis:**

**Type I Hypersensitivity:**
- Allergen exposure → sensitization
- IgE production by B cells
- IgE binds to mast cells and basophils
- Re-exposure → allergen cross-links IgE
- Mast cell degranulation
- Histamine, leukotrienes, prostaglandins release
- Itching, redness, swelling, tearing

**Chronic Inflammation:**
- Eosinophil infiltration
- Epithelial damage from proteases
- Tissue remodeling in chronic cases
- Papillary hypertrophy (giant papillae in VKC)

**Vernal Keratoconjunctivitis (VKC):**
- Atopic children, males > females
- Spring/summer exacerbation
- Giant cobblestone papillae on tarsal conjunctiva
- Limbal form: Trantas dots (eosinophil deposits at limbus)
- Shield ulcer formation (corneal ulcer)
- Risk of amblyopia in children

**Atopic Keratoconjunctivitis (AKC):**
- Adults with atopic dermatitis
- Year-round symptoms
- Eyelid eczema
- Corneal scarring, neovascularization
- Cataract formation possible

## Diagnostic Approach

**Key Distinguishing Features:**

**Preauricular Lymphadenopathy:**
- Viral: present (especially adenovirus)
- Bacterial: usually absent
- Allergic: absent
- Molluscum: present

**Discharge Characteristics:**
- **Watery/mucoid:** Viral, allergic
- **Mucopurulent:** Bacterial
- **Profuse purulent:** Gonococcal
- **Stringy/mucoid:** Allergic

**Palpebral Conjunctiva Appearance:**
- **Follicles:** Small, round, translucent
  - Viral, chlamydia, molluscum, toxic reaction
- **Papillae:** Cobblestone appearance, red with vascular core
  - Allergic, contact lens, bacterial

**Chemosis:**
- Conjunctival swelling
- More prominent in allergic and viral
- Can be marked in angioedema

**Laterality:**
- **Unilateral then bilateral:** Viral
- **Bilateral simultaneously:** Allergic, toxic
- **Unilateral:** Bacterial, HSV, foreign body

**Pain:**
- Mild discomfort: viral, bacterial, allergic
- Severe pain: consider other diagnoses (uveitis, glaucoma, corneal ulcer)

**Visual Acuity:**
- Should be normal in simple conjunctivitis
- Decreased vision suggests keratitis, uveitis, or other pathology

**Red Flags Requiring Ophthalmology Referral:**
- Decreased visual acuity
- Severe pain
- Photophobia
- Corneal involvement
- No improvement after 1 week
- Recurrent episodes
- Contact lens wearers
- Neonates
- History of HSV keratitis

## Treatment Pharmacology

**Antibiotic Classes:**

**Fluoroquinolones:**
- **Moxifloxacin (Vigamox):** 4th generation, excellent coverage
- **Besifloxacin (Besivance):** 4th generation, low resistance
- **Gatifloxacin (Zymar):** 3rd generation
- **Ofloxacin (Ocuflox):** 3rd generation
- Mechanism: Inhibit DNA gyrase and topoisomerase IV
- BID-QID dosing
- Good ocular penetration
- Low toxicity

**Aminoglycosides:**
- **Tobramycin (Tobrex):** Excellent gram-negative coverage
- **Gentamicin (Garamycin):** Similar
- Mechanism: Inhibit bacterial protein synthesis
- QID dosing
- Can cause epithelial toxicity with prolonged use

**Macrolides:**
- **Erythromycin (Ilotycin):** Ointment form
- **Azithromycin (Azasite):** Dosing QD
- Mechanism: Inhibit bacterial protein synthesis
- Good for children (ointment)
- Can blur vision (ointment)

**Sulfonamides:**
- **Sulfacetamide (Bleph-10):** Inexpensive
- Mechanism: PABA antagonist
- BID-QID dosing
- Sulfa allergy contraindication

**Combination Products:**
- **Polymyxin B/trimethoprim (Polytrim):** BID
- **Neomycin/polymyxin B/dexamethasone:** steroid combination (avoid)

**Antihistamine/Mast Cell Stabilizers:**

**Mechanism:**
- H1 receptor blockade
- Mast cell stabilization (prevents histamine release)

**Agents:**
- **Olopatadine (Patanol):** BID, first-line
- **Ketotifen (Zaditor):** BID-QID, OTC
- **Azelastine (Optivar):** BID
- **Epinastine (Elestat):** BID
- **Bepotastine (Bepreve):** BID

**Mast Cell Stabilizers:**
- **Cromolyn (Crolom):** QID, takes 2 weeks to work
- **Nedocromil (Alocril):** BID-QID
- Lodoxamide (Alomide): QID

**Corticosteroids:**

**Indications:**
- Severe allergic conjunctivitis
- VKC/AKC
- Adenoviral subepithelial infiltrates
- **Never for undiagnosed red eye**

**Agents:**
- **Loteprednol (Alrex, Lotemax):** Low IOP rise risk
- **Fluorometholone (FML):** Low potency, good for surface
- **Prednisolone acetate:** Moderate potency
- **Difluprednate:** High potency

**Risks:**
- Glaucoma (IOP elevation)
- Cataract formation
- Worsens HSV infection
- Delayed wound healing

**Antivirals:**

**HSV:**
- **Oral:** Acyclovir 400 mg TID, valacyclovir 500 mg BID
- **Topical:** Trifluridine (Viroptic) QID, ganciclovir gel
- Treatment: 10-14 days

**Adenovirus:**
- No approved antiviral
- Supportive care
- Steroids for SEIs (ophthalmology)

## Complications and Prognosis

**Viral Complications:**
- Subepithelial infiltrates (SEIs)
- Chronic dry eye
- Symblepharon (conjunctival adhesion)
- Bacterial superinfection

**Bacterial Complications:**
- Keratitis (corneal involvement)
- Conjunctival scarring
- Chronic conjunctivitis
- Spread to other eye

**Allergic Complications:**
- Giant papillae (VKC)
- Corneal ulcer (shield ulcer)
- Limbal stem cell deficiency
- Corneal neovascularization
- Amblyopia in children

**Prognosis:**
- Viral: Excellent, self-limited
- Bacterial: Excellent with treatment
- Allergic: Good with allergen avoidance
- Neonatal: Guarded (risk of vision loss)

**Return to School/Work:**
- Viral: 3-7 days, when discharge resolves
- Bacterial: 24 hours after starting antibiotics
- Allergic: No restriction`,
      keyTerms: [
        { term: 'EKC', definition: "Epidemic keratoconjunctivitis; severe adenoviral conjunctivitis with corneal involvement" },
        { term: 'SEIs', definition: "Subepithelial infiltrates; immune-mediated corneal lesions appearing in later stages of adenoviral conjunctivitis" },
        { term: 'dendritic ulcer', definition: "Branching corneal ulcer pathognomonic for HSV keratitis; stains with fluorescein" },
        { term: 'Trantas dots', definition: "Eosinophil-filled limbal nodules characteristic of vernal keratoconjunctivitis" },
      ],
      analogies: [
        'Dendritic ulcers look like tree branches on the cornea - this finding is specific to herpes simplex.',
        'Giant papillae in VKC are like cobblestones on a street - they can be large enough to cause mechanical irritation.',
      ],
      clinicalNotes: 'Always perform fluorescein staining when evaluating red eye. Corneal involvement changes diagnosis and management. HSV keratitis can be missed without fluorescein staining, and steroids can be devastating if HSV is present.',
    },
    4: {
      level: 4,
      summary: 'Conjunctivitis requires distinguishing between viral, bacterial, allergic, and other causes based on clinical features. Red flags including vision loss, pain, and photophobia suggest more serious conditions requiring ophthalmology referral. Treatment is tailored to etiology, with supportive care for viral, antibiotics for bacterial, and antihistamine/mast cell stabilizers for allergic disease.',
      explanation: `## Differential Diagnosis of Red Eye

**Critical Distinctions:**

| Condition | Vision | Pain | Photophobia | Discharge | Pupil |
|-----------|--------|-------|-------------|-----------|-------|
| Conjunctivitis | Normal | Mild | Minimal | Present | Normal |
| Episcleritis | Normal | Mild | No | None | Normal |
| Scleritis | May ↓ | Severe | Mild | None | Normal |
| Uveitis (iritis) | May ↓ | Moderate-severe | Yes | Mucoid | Small/irregular |
| Acute Angle Closure | ↓ | Severe | Yes | None | Mid-dilated fixed |
| Keratitis | ↓ | Severe | Yes | Mucopurulent | Normal |
| Foreign Body | Variable | Moderate | Yes | Tearing | Normal |

## Detailed Clinical Assessment

**History Elements:**

**Onset and Duration:**
- Hyperacute (<24 hours): Gonococcal, chemical
- Acute (1-7 days): Bacterial, viral
- Chronic (>4 weeks): Allergic, chlamydial, toxic, blepharitis

**Discharge Characteristics:**
- Watery: Viral, allergic
- Mucopurulent: Bacterial
- Profuse purulent: Gonococcal
- Stringy: Allergic

**Symptoms:**
- Itching: Allergic
- Gritty/sandy: Viral, bacterial, dry eye
- Foreign body sensation: Foreign body, dry eye, keratitis
- Pain: Consider non-conjunctival causes

**Laterality:**
- Unilateral then bilateral: Viral
- Bilateral simultaneous: Allergic, toxic
- Unilateral: Bacterial, HSV, foreign body

**Epidemiology:**
- Recent URTI: Viral
- Sick contacts: Viral, bacterial
- Allergy history: Allergic
- Contact lens use: Bacterial (Pseudomonas), Acanthamoeba
- HSV history: HSV recurrence
- Sexual activity: Gonococcal, chlamydial

**Medications:**
- Eye drops: Toxic conjunctivitis
- Glaucoma meds: Allergic reaction
- Recent antibiotic: Allergic or superinfection

**Physical Examination:**

**Visual Acuity:**
- Essential first test
- Should be normal in simple conjunctivitis
- Decreased VA suggests more serious pathology

**Inspection:**

**Conjunctival Injection Pattern:**
- **Diffuse:** Conjunctivitis
- **Ciliary flush (circumcorneal):** Uveitis, keratitis, angle closure
- **Sectoral:** Episcleritis

**Discharge:**
- Character and amount
- Matting of eyelids
- Crusting on lashes

**Palpebral Conjunctiva:**
- Follicles vs papillae
- Symblepharon (conjunctival adhesions)
- Foreign body (everting eyelids)

**Chemosis:**
- Mild: Viral, allergic
- Marked: Allergic, angioedema

**Lymphadenopathy:**
- Preauricular: Viral (adenovirus), molluscum
- Submandibular: Bacterial, dental

**Corneal Examination:**
- Fluorescein staining essential
- Look for:
  - Dendritic ulcers (HSV)
  - Punctate epithelial erosions (viral, dry eye, toxic)
  - Infiltrates (SEIs, marginal)

**Anterior Chamber:**
- Cell and flare (slit lamp): Uveitis
- Hypopyon: Serious pathology

**Pupil:**
- Size, shape, reactivity
- Small/irregular: Uveitis
- Mid-dilated fixed: Angle closure

## Red Flags Requiring Referral

**Immediate Ophthalmology Referral:**
- Decreased visual acuity
- Severe pain
- Photophobia
- Ciliary flush present
- Corneal involvement (fluorescein uptake)
- Anterior chamber cell/flare
- Hypopyon
- Abnormal pupil
- No improvement after 1 week
- Contact lens wearer with red eye
- History of HSV keratitis
- Neonate with conjunctivitis
- Hyperacute purulent discharge (gonorrhea)

## Special Situations

**Contact Lens-Related Red Eye:**

**Causes:**
- Bacterial conjunctivitis (Pseudomonas, Serratia)
- Acanthamoeba keratitis (pain out of proportion)
- Giant papillary conjunctivitis (GPC)
- Corneal ulcer (pain, decreased vision)

**Management:**
- Remove contacts immediately
- Culture if corneal infiltrate
- Fluoroquinolone coverage (Pseudomonas)
- If Acanthamoeba suspected: urgent ophthalmology
- Discard lenses and case
- Wait 2 weeks before restarting contacts

**Neonatal Conjunctivitis:**

**Time Course and Etiology:**
- Day 0-1: Chemical conjunctivitis (silver nitrate, erythromycin)
- Day 2-5: Gonococcal ophthalmia neonatorum
- Day 5-14: Chlamydial conjunctivitis
- Day 6-14: Other bacterial (Staph, Strep, H. influenzae)
- Anytime: HSV, chemical

**Gonococcal:**
- Copious purulent discharge
- Corneal perforation risk
- Treat: Ceftriaxone 25-50 mg/kg IM (max 125 mg)
- Also treat for possible chlamydia

**Chlamydial:**
- Mucopurulent discharge
- Pneumonia risk
- Treat: Azithromycin 20 mg/kg PO daily × 3 days
  OR Erythromycin 50 mg/kg/day divided QID × 14 days
- Treat mother and partner

**HSV:**
- Keratitis possible
- Treat: Oral acyclovir
- Ophthalmology consultation

**Ophthalmia Neonatorum Prophylaxis:**
- Erythromycin 0.5% ointment (standard in US)
- Applied within 1 hour of birth
- Prevents gonococcal (not chlamydial)

**Chronic Conjunctivitis:**

**Causes:**
- Allergic (perennial)
- Blepharitis/meibomianitis
- Dry eye syndrome
- Toxic (medications)
- Molluscum contagiosum
- Chlamydia
- Lacrimal drainage obstruction

**Evaluation:**
- Complete history (medications, allergies, lid hygiene)
- Slit lamp examination
- Eyelid eversion (foreign body, molluscum)
- Consider chlamydial testing if sexually active
- Consider biopsy if atypical

## Treatment Nuances

**Antibiotic Selection:**

**Factors to Consider:**
- Age (pediatric vs adult)
- Contact lens use (fluoroquinolone)
- Cost
- Compliance (BID vs QID dosing)
- Allergy history
- Prior treatments

**Duration:**
- Uncomplicated bacterial: 5-7 days
- Continue 48 hours after resolution
- Chlamydial: 14 days systemic
- Gonococcal: Single dose IM + conjunctival irrigation

**Allergic Treatment Approach:**

**Step-wise:**
1. Avoid allergen when possible
2. Cold compresses
3. Artificial tears (wash out allergen)
4. Antihistamine/mast cell stabilizer
5. Short course low-potency steroid if severe (ophthalmology)

**VKC/AKC:**
- Topical antihistamine/mast cell stabilizer
- Topical cyclosporine or tacrolimus for steroid-sparing
- Topical steroids for flares (ophthalmology)
- Treat shield ulcer aggressively

**Viral Conjunctivitis Management:**

**Supportive:**
- Cold compresses
- Artificial tears (preservative-free)
- Good hygiene

**For Subepithelial Infiltrates:**
- Topical fluorometholone or loteprednol
- Taper over weeks
- Monitor for steroid complications
- Ophthalmology management

**For HSV:**
- Oral antiviral preferred (better penetration)
- Topical antiviral (trifluridine, ganciclovir)
- Consider topical steroid (ophthalmology) after antiviral started
- Treat for 10-14 days`,
      keyTerms: [
        { term: 'ciliary flush', definition: "Circumcorneal injection; redness radiating from limbus; suggests uveitis, keratitis, or angle closure" },
        { term: 'GPC', definition: "Giant papillary conjunctivitis; large papillae from contact lens intolerance or suture reaction" },
        { term: 'hypopyon', definition: "White blood cell layer in anterior chamber; indicates severe intraocular inflammation" },
        { term: 'symblepharon', definition: "Adhesion between palpebral and bulbar conjunctiva; complication of severe conjunctivitis" },
      ],
      clinicalNotes: `Key clinical pearls for conjunctivitis:

1. **Never use steroids for undiagnosed red eye** - Can worsen HSV, fungal keratitis, and mask symptoms. Steroids are reserved for ophthalmology-managed cases.

2. **Always check visual acuity** - Decreased vision in "conjunctivitis" is a red flag suggesting more serious pathology.

3. **Don't miss HSV** - Dendritic ulcers on fluorescein staining are pathognomonic. Look for preauricular lymphadenopathy and skin vesicles.

4. **Contact lens wearers get special bugs** - Pseudomonas can rapidly destroy an eye. Remove lenses immediately, use fluoroquinolone, and consider ophthalmology referral.

5. **Gonococcal is an emergency** - Can perforate cornea in 24-48 hours. Treat with systemic ceftriaxone and urgent ophthalmology referral.

6. **Neonates need special care** - Different pathogens and time course. Treat empirically based on age of onset while awaiting culture results.

7. **Chronic conjunctivitis has many causes** - Think blepharitis, dry eye, allergy, chlamydia, molluscum. Everting eyelids is essential to look for foreign body and molluscum.

8. **Allergic itching is distinctive** - Severe itching is the hallmark of allergic conjunctivitis. Antihistamine/mast cell stabilizers are first-line.`,
    },
    5: {
      level: 5,
      summary: 'Conjunctivitis management requires accurate clinical diagnosis based on key distinguishing features, identification of red flag symptoms requiring urgent referral, and appropriate etiology-directed therapy. Understanding complications, special populations (neonates, contact lens wearers), and steroid precautions optimizes outcomes and prevents vision-threatening complications.',
      explanation: `## Evidence-Based Diagnostic Algorithms

**Clinical Decision Rules:**

**Conjunctivitis vs. Other Red Eye Causes:**

1. **Normal vision + no pain + watery discharge = Viral conjunctivitis**
2. **Normal vision + no pain + purulent discharge = Bacterial conjunctivitis**
3. **Normal vision + itching + bilateral = Allergic conjunctivitis**
4. **Decreased vision OR pain OR photophobia = Red flag, refer**

**Predictive Value of Signs and Symptoms:**

| Finding | LR+ for Bacterial | LR+ for Viral |
|---------|-------------------|----------------|
| Purulent discharge | 4.1 | 0.18 |
| Matting eyelids | 3.0 | 0.25 |
| Preauricular node | 0.28 | 5.6 |
| Itching | 0.27 | 0.48 |

**Diagnostic Accuracy:**
- Purulent discharge: PPV 78% for bacterial
- Preauricular node: PPV 88% for viral
- Combined findings improve diagnostic accuracy

**When to Culture:**
- Hyperacute bacterial suspected
- Neonates
- Not responding to treatment
- Recurrent episodes
- Atypical presentation
- Contact lens wearers with corneal involvement

## Special Populations

**Pediatric Considerations:**

**Age-Specific Etiologies:**
- Neonate (0-4 weeks): Gonorrhea, chlamydia, chemical, HSV
- Infant (1-12 months): Nasolacrimal duct obstruction, bacterial
- Child (1-18 years): Viral, bacterial, allergic (H. influenzae common)

**Treatment Challenges:**
- Ointment preferred (easier administration)
- Family education needed
- School/daycare exclusion policies
- Monitor for amblyopia (VKC with shield ulcer)

**Geriatric Considerations:**
- Atypical presentations more common
- Dry eye masquerading as conjunctivitis
- Medication-induced (topical drops)
- More vulnerable to complications
- Consider systemic illness

**Immunocompromised Patients:**
- HSV/VZV more severe and disseminated
- Fungal infections possible
- Atypical organisms
- May have minimal symptoms despite severe disease
- Lower threshold for referral

**Pregnant Patients:**
- Gonorrhea/chlamydia screening important
- Treat with pregnancy-safe antibiotics
- Avoid systemic fluoroquinolones, tetracyclines
- HSV: Acyclovir considered safe in pregnancy

## Emerging Therapies

**New Antibiotic Options:**
- Besifloxacin (4th gen fluoroquinolone)
- Azithromycin 1% (dosing QD)
- Fusidic acid (not available in US)

**Anti-Inflammatory Options:**
- Cyclosporine ophthalmic (Restasis, Cequa)
  - Chronic dry eye and allergic
  - Steroid-sparing
- Tacrolimus ophthalmic
  - VKC, AKC
  - Steroid-sparing

**Combination Products:**
- Antibiotic + steroid combinations
  - Generally avoid (can mask infection)
  - Only for ophthalmology use with close follow-up

## Prevention and Public Health

**Reducing Transmission:**

**Viral Conjunctivitis:**
- Highly contagious (adenovirus)
- Incubation: 5-12 days
- Infectious: 10-14 days
- Hand washing most effective prevention
- Isolation precautions in healthcare settings
- Disinfect equipment (hopkins lens)

**Outbreak Management:**
- Identify source
- Exclude cases until no longer contagious
- Disinfect shared equipment
- Education on hygiene

**Antibiotic Stewardship:**
- Viral conjunctivitis does not need antibiotics
- Delayed prescriptions for uncertain cases
- Reserve antibiotics for clear bacterial cases
- Avoid combination antibiotic/steroid

**Chemoprophylaxis:**
- Ophthalmia neonatorum prophylaxis (erythromycin)
- Gonorrhea/chlamydia treatment of patient and partners

## Complications

**Conjunctival Scarring:**
- Cicatricial pemphigoid
- Stevens-Johnson syndrome
- Severe viral (adenovirus, EKC)
- Chemical burns
- Can cause lid malposition, tear film dysfunction

**Dry Eye Syndrome:**
- Post-viral
- Chronic allergic
- Medication-induced
- May require long-term management

**Corneal Complications:**
- Subepithelial infiltrates (adenoviral)
- Corneal neovascularization (chronic inflammation)
- Corneal ulcer (bacterial, HSV, VKC shield ulcer)
- Perforation (gonococcal, VKC)

**Lacrimal System Involvement:**
- Punctal scarring
- Canaliculitis
- Dacryocystitis

## Controversies and Evolving Concepts

**Prophylactic Antibiotics for Viral:**
- No evidence of benefit
- Increases resistance
- Adds cost and side effects
- Not recommended

**Topical Steroids for Viral:**
- Subepithelial infiltrates benefit
- Controversial timing and duration
- Risk of steroid response
- Ophthalmology management essential

**Treatment Duration:**
- Traditional: 7-10 days
- Emerging evidence: 3-5 days may be sufficient
- Continue until resolved (not fixed duration)

**School/Work Exclusion:**
- Viral: Until discharge resolves (usually 7-10 days)
- Bacterial: 24 hours after antibiotics started
- Allergic: No exclusion needed

**Pink Eye vs. Red Eye Terminology:**
- "Pink eye" is a patient term, not diagnosis
- Medical providers should use specific terminology
- "Pink eye" trivializes potentially serious conditions`,
      keyTerms: [
        { term: 'LR+', definition: "Positive likelihood ratio; how much a finding increases the probability of a condition" },
        { term: 'PPV', definition: "Positive predictive value; probability that a positive test result truly has the disease" },
        { term: 'antibiotic stewardship', definition: "Efforts to ensure appropriate antibiotic use to reduce resistance" },
      ],
      clinicalNotes: `Advanced clinical pearls:

1. **The three-question red eye screen:** (1) Is vision normal? (2) Is there significant pain? (3) Is there photophobia? Any "yes" = red flag requiring referral. This simple screen prevents missing vision-threatening conditions.

2. **Don't trust the diagnosis "pink eye"** - It's not a diagnosis, it's a symptom. Always categorize as viral, bacterial, allergic, or other. Use specific terminology in documentation.

3. **Fluorescein staining is essential** - Never send a red eye patient home without fluorescein staining. Dendritic ulcers (HSV) and punctate erosions change management completely.

4. **Steroids can blind** - Never prescribe topical steroids for undiagnosed red eye. HSV with steroids can cause devastating corneal melt. Even ophthalmologists are cautious with steroids.

5. **Contact lens emergencies** - Pseudomonas can destroy a cornea in 24-48 hours. Any contact lens wearer with pain, decreased vision, or corneal involvement needs urgent ophthalmology and fluoroquinolone coverage.

6. **Neonates are different** - Time course determines etiology (day 2-5 = gonorrhea, day 5-14 = chlamydia). Treat empirically based on age while awaiting cultures. Systemic treatment essential for gonorrhea and chlamydia.

7. **Chronic conjunctivitis needs thorough workup** - Don't keep treating with antibiotics. Think blepharitis, dry eye, allergy, chlamydia, molluscum, tumor. Everting eyelids is mandatory.

8. **Viral is most common but no antibiotics needed** - Most "pink eye" is viral adenovirus. Antibiotics don't help. Focus on supportive care, hygiene, and preventing spread.`,
    },
  },

  media: [
    {
      id: 'conjunctivitis-types',
      type: 'diagram',
      filename: 'conjunctivitis-types.svg',
      title: 'Types of Conjunctivitis',
      description: 'Comparison of viral, bacterial, and allergic conjunctivitis clinical features',
    },
    {
      id: 'follicle-vs-papilla',
      type: 'diagram',
      filename: 'follicle-vs-papilla.svg',
      title: 'Follicle vs Papilla',
      description: 'Illustration of follicles and papillae on palpebral conjunctiva',
    },
    {
      id: 'eye-fluorescein-stain',
      type: 'diagram',
      filename: 'fluorescein-staining-patterns.svg',
      title: 'Fluorescein Staining Patterns',
      description: 'Common fluorescein staining patterns including dendritic ulcers',
    },
  ],

  citations: [
    {
      id: 'aao-conjunctivitis',
      type: 'article',
      title: 'Conjunctivitis Preferred Practice Pattern',
      authors: ['American Academy of Ophthalmology'],
      source: 'Ophthalmology',
    },
    {
      id: 'aap-red-eye',
      type: 'article',
      title: 'The Red Eye in Clinical Practice',
      authors: ['American Academy of Pediatrics'],
      source: 'Pediatrics in Review',
    },
  ],

  crossReferences: [
    { targetId: 'condition-dry-eye', targetType: "condition", relationship: "related", label: "Dry Eye Syndrome" },
    { targetId: 'condition-blepharitis', targetType: "condition", relationship: "related", label: "Blepharitis" },
  ],

  tags: {
    systems: ['visual'],
    topics: ['ophthalmology', 'infectious disease', 'allergy', 'pediatrics'],
    keywords: ['conjunctivitis', 'pink eye', 'adenovirus', 'allergic conjunctivitis'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['family medicine', 'pediatrics'],
    },
  },

  createdAt: '2025-01-26T00:00:00.000Z',
  updatedAt: '2025-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default conjunctivitis;
