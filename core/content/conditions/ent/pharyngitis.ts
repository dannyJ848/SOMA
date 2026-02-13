/**
 * Pharyngitis - Comprehensive Educational Content
 *
 * Covers acute pharyngitis including viral and bacterial etiologies,
 * Group A Streptococcus (strep throat), diagnostic approaches,
 * and antibiotic treatment considerations.
 */

import { EducationalContent } from '../../types';

export const pharyngitis: EducationalContent = {
  id: 'condition-pharyngitis',
  type: 'condition',
  name: 'Pharyngitis',
  nameEs: 'Faringitis',
  alternateNames: ['Sore Throat', 'Strep Throat', 'Tonsillitis', 'GAS Pharyngitis', 'Streptococcal Pharyngitis'],
  hpoId: 'HP:0000151',

  levels: {
    1: {
      level: 1,
      summary: 'Pharyngitis is inflammation of the throat (pharynx), causing sore throat, pain when swallowing, and swollen glands. Most cases are caused by viruses, but some are caused by bacteria like strep.',
      explanation: `## What is Pharyngitis?

**Pharyngitis** means inflammation of the pharynx - the back of your throat. It's commonly called a "sore throat."

**Your pharynx:**
- Located at the back of the mouth
- Passageway for food, air, and liquids
- Connects the mouth to the esophagus (food pipe) and the nasal cavity

When the pharynx becomes inflamed, it causes:
- Pain or discomfort in the throat
- Difficulty swallowing
- Scratchy feeling when talking
- Swollen glands in the neck

## What Causes Pharyngitis?

**Most common cause: Viruses (70-85% of cases)**
- Same viruses that cause the common cold
- Also flu viruses, mono (Epstein-Barr virus)
- Viral pharyngitis cannot be treated with antibiotics

**Bacterial causes (15-30% of cases):**
- **Group A Streptococcus** - "strep throat" (most common bacterial cause)
- Other bacteria are rare causes

**How do you get it?**
- Breathing in droplets from someone who is sick
- Touching surfaces with germs and then touching your mouth or nose
- Close contact with infected people
- Sharing drinks, utensils, or kissing

## Signs and Symptoms

**Common symptoms of any pharyngitis:**
- Sore throat
- Pain when swallowing
- Red, swollen throat
- Swollen, tender lymph nodes (glands) in the neck

**Viral pharyngitis symptoms:**
- Runny nose
- Cough
- Hoarse voice
- Red, watery eyes
- Sometimes mild fever

**Strep throat symptoms:**
- Sudden sore throat (often starts suddenly)
- Pain when swallowing
- Fever (usually above 101°F or 38.3°C)
- White patches on the tonsils
- Swollen, tender lymph nodes in the neck
- No cough (usually)
- No runny nose (usually)
- Body aches
- Rash (scarlet fever - less common)

## Diagnosing Strep Throat

**Doctors cannot tell just by looking:**
- Many bacterial and viral sore throats look the same
- A test is needed to know for sure

**Rapid strep test:**
- Swab of the back of the throat
- Results in 5-10 minutes
- Very good at finding strep if it is there

**Throat culture:**
- Another type of test done in the lab
- Takes 1-2 days for results
- Sometimes used if rapid test is negative but strep is still suspected

## Treatment

**Viral pharyngitis:**
- NO antibiotics (antibiotics do not kill viruses)
- Treatment focuses on comfort:
  - Acetaminophen or ibuprofen for pain and fever
  - Warm liquids like tea with honey
  - Cold foods like popsicles
  - Saltwater gargle
  - Plenty of rest and fluids
- Goes away on its own in 3-7 days

**Strep throat (bacterial):**
- Antibiotics are needed
- Penicillin or amoxicillin are most common
- Usually taken for 10 days
- IMPORTANT: Finish all the medicine even if feeling better
- Feeling better usually starts within 1-2 days

**Why treat strep throat?**
- Prevent complications like rheumatic fever (heart damage)
- Prevent spread to others
- Faster relief of symptoms

**Contagious period:**
- **With antibiotics:** Can return to school/work after 24 hours of antibiotics and fever-free
- **Without antibiotics:** Can spread for weeks

## Home Remedies

- **Honey:** Soothes sore throat (do not give to children under 1 year)
- **Warm liquids:** Tea, soup, warm water with lemon
- **Cold treats:** Popsicles, ice cream, frozen fruit
- **Saltwater gargle:** 1/2 teaspoon salt in warm water, spit out
- **Humidifier:** Adds moisture to dry air
- **Avoid irritants:** Smoke, chemicals that can irritate the throat

## When to See a Doctor

See a doctor if:
- Sore throat lasts more than a week
- Difficulty breathing or difficulty swallowing
- Blood in saliva or spit
- Lump in the neck
- Joint pain
- Earache
- Rash
- Fever over 101°F (38.3°C)
- Frequent sore throats

**Emergency care if:**
- Difficulty breathing
- Drooling (cannot swallow saliva)
- Extreme difficulty swallowing
- Muffled voice ("hot potato voice")

## Prevention

- Wash hands frequently
- Avoid sharing cups, utensils, lip balm
- Cover coughs and sneezes
- Stay away from sick people when possible
- Clean frequently touched surfaces`,
      keyTerms: [
        { term: 'pharyngitis', definition: 'Inflammation of the pharynx (back of the throat), causing sore throat' },
        { term: 'strep throat', definition: 'Sore throat caused by Group A Streptococcus bacteria; requires antibiotics' },
        { term: 'lymph nodes', definition: 'Small, bean-shaped glands throughout the body that help fight infection; can swell when sick' },
        { term: 'tonsils', definition: 'Two small tissue masses on either side of the back of the throat that help fight infection' },
      ],
      analogies: [
        'Think of your lymph nodes like security checkpoints that can swell up when there is an infection.',
        'The throat is like a busy hallway - when it is inflamed, everything trying to pass through causes irritation.',
      ],
      examples: [
        'A child suddenly develops a sore throat, fever, and swollen glands but has no cough - this could be strep throat.',
        'Someone has a sore throat with runny nose and cough - this is more likely viral.',
      ],
      patientCounselingPoints: [
        'Most sore throats are viral and do not need antibiotics',
        'Finish all antibiotics if prescribed for strep throat',
        'Stay home from school/work until 24 hours after starting antibiotics and fever-free',
        'Honey can help soothe a sore throat (but never give to babies under 1 year)',
        'Saltwater gargles can provide temporary relief',
        'Difficulty breathing or inability to swallow saliva requires emergency care',
      ],
    },
    2: {
      level: 2,
      summary: 'Pharyngitis is inflammation of the pharynx, most commonly viral in etiology. Group A Streptococcus (GAS) causes bacterial pharyngitis requiring antibiotic therapy to prevent complications including acute rheumatic fever.',
      explanation: `## Anatomy

**The pharynx:**
- Muscular tube approximately 12-15 cm long
- Extends from the base of the skull to the esophagus
- Divided into three regions:
  - **Nasopharynx:** Behind the nasal cavity
  - **Oropharynx:** Behind the oral cavity (visible during exam)
  - **Laryngopharynx:** Continues to the esophagus and larynx

**Tonsils:**
- Palatine tonsils: Located in the oropharynx (the "tonsils")
- Pharyngeal tonsils (adenoids): Located in the nasopharynx
- Part of Waldeyer ring - lymphoid tissue ring protecting the upper airway

## Etiology

### Viral Pharyngitis (70-85%)

**Common viral causes:**
- Rhinovirus (common cold)
- Influenza virus
- Adenovirus
- Epstein-Barr virus (infectious mononucleosis)
- Parainfluenza virus
- Respiratory syncytial virus (RSV)
- Coronavirus (including COVID-19)
- Herpes simplex virus (primary infection)
- Cytomegalovirus (CMV)
- HIV (acute seroconversion illness)

### Bacterial Pharyngitis (15-30%)

**Group A Streptococcus (GAS):**
- *Streptococcus pyogenes*
- Most common bacterial cause (15-30% of pediatric pharyngitis, 5-15% of adult)
- Peak incidence: 5-15 years old
- Seasonal: Late winter/early spring
- Spread: Respiratory droplets, direct contact

**Other bacterial causes:**
- Group C and G Streptococcus (similar presentation to GAS)
- *Arcanobacterium haemolyticum* (adolescents, can cause rash)
- *Neisseria gonorrhoeae* (sexually active individuals)
- *Corynebacterium diphtheriae* (rare in vaccinated populations)
- *Mycoplasma pneumoniae*
- *Chlamydia pneumoniae*

## Clinical Presentation

### Viral vs Bacterial Pharyngitis

**Clinical features suggesting VIRAL etiology:**
- Cough
- Rhinorrhea (runny nose)
- Conjunctivitis (red eyes)
- Hoarseness
- Oral ulcers
- Diarrhea

**Clinical features suggesting BACTERIAL (GAS) etiology:**
- Sudden onset of sore throat
- Pain on swallowing (odynophagia)
- Fever (typically > 101°F or 38.3°C)
- Tonsillar exudate (white patches)
- Anterior cervical lymphadenopathy (swollen, tender neck glands)
- Absence of cough
- Absence of rhinorrhea
- Palatal petechiae (small red spots on soft palate)
- Age 5-15 years (more likely GAS)

**Scarlet fever:**
- GAS pharyngitis with characteristic rash
- Sandpaper-like rash, feels rough
- Red cheeks, pale area around mouth (circumoral pallor)
- Red strawberry tongue
- Rash starts in flexor areas, spreads
- Pastia lines (accentuation in skin folds)

## Diagnostic Criteria

### Centor Criteria (Modified)

The Centor criteria help estimate the probability of GAS pharyngitis and guide testing decisions.

| Criteria | Points |
|----------|--------|
| Fever > 100.4°F (38°C) | 1 |
| Absence of cough | 1 |
| Swollen, tender anterior cervical lymph nodes | 1 |
| Tonsillar exudate | 1 |
| Age 15-44 years | 1 |
| Age 45+ years | 0 |
| Age 3-14 years | 1 (add 1 point) |

**Interpretation:**
- **0-1 points:** Low probability (~1-2.5%) - No testing or treatment
- **2 points:** Intermediate probability (~10-28%) - Consider testing
- **3 points:** Intermediate probability (~28-48%) - Test and treat if positive
- **4+ points:** High probability (~52-75%) - Test and treat if positive, or empirically treat

**Notes:**
- Modified McIsaac criteria add age points
- Testing recommended for scores 2-3
- Empiric treatment reasonable for score 4-5 in high prevalence settings

## Diagnosis

### Rapid Antigen Detection Test (RADT)

**Procedure:**
- Throat swab of both tonsils and posterior pharynx
- Avoid tongue, teeth, cheeks (can affect accuracy)
- Results available in 5-10 minutes

**Characteristics:**
- Sensitivity: 70-90%
- Specificity: 90-99%
- Positive predictive value: High when GAS prevalence is high
- Negative predictive value: High but not perfect

**Clinical implication:**
- Positive result: Treat for GAS pharyngitis
- Negative result: Depends on clinical suspicion
  - Low suspicion: No further testing needed
  - High suspicion: Confirm with throat culture

### Throat Culture

**Procedure:**
- Throat swab plated on blood agar
- Incubated for 24-48 hours
- Observes for beta-hemolytic colonies
- Confirmatory tests: Bacitracin sensitivity, PYR test

**Characteristics:**
- Gold standard for GAS diagnosis
- Sensitivity: 90-95%
- Specificity: 95-99%

**Indications:**
- Negative RADT with high clinical suspicion
- When diagnosis uncertainty may affect management
- Follow-up of treatment failure
- Public health surveillance

### Other Tests

**CBC with differential:**
- Limited utility for distinguishing viral vs bacterial
- Lymphocytosis suggests viral (mono)
- Neutrophilia can be viral or bacterial

**Mono spot (heterophile antibody):**
- For suspected infectious mononucleosis
- Positive in 85-90% of teens/adults with EBV
- May be false negative early in illness

**Rapid strep DNA tests:**
- More sensitive than antigen tests
- More expensive
- Results in 10-20 minutes
- May reduce need for confirmatory culture

## Treatment

### Viral Pharyngitis

**Supportive care only:**
- Rest
- Hydration
- Analgesics for pain and fever:
  - Acetaminophen 10-15 mg/kg q4-6h
  - Ibuprofen 10 mg/kg q6-8h (age > 6 months)
- Saltwater gargles
- Throat lozenges (age appropriate)
- Honey for children > 1 year
- Humidified air

**NO antibiotics indicated**

### GAS Pharyngitis

**Primary goals of treatment:**
1. Prevent acute rheumatic fever
2. Prevent suppurative complications (peritonsillar abscess)
3. Reduce symptom duration
4. Reduce contagion

**First-line antibiotics:**

| Antibiotic | Dose (pediatric) | Dose (adult) | Duration |
|------------|------------------|--------------|----------|
| Penicillin V | 250 mg BID/TID | 250 mg QID or 500 mg BID | 10 days |
| Amoxicillin | 50 mg/kg/day divided BID | 500 mg BID | 10 days |
| Benzathine penicillin G | 600,000 units (< 27 kg) 1.2 million units (> 27 kg) IM | 1.2 million units IM | Single dose |

**Penicillin allergy alternatives:**

| Antibiotic | Dose | Duration | Notes |
|------------|------|----------|-------|
| Cephalexin | 50 mg/kg/day divided BID | 10 days | 10% cross-reactivity if type I allergy |
| Clindamycin | 20 mg/kg/day divided TID | 10 days | Taste issues, diarrhea |
| Clarithromycin | 15 mg/kg/day divided BID | 10 days | Higher resistance |
| Azithromycin | 12 mg/kg/day day 1, 6 mg/kg/day days 2-5 | 5 days | Higher resistance, not preferred |

**Supportive care in addition to antibiotics:**
- Analgesics for pain and fever
- Saltwater gargles
- Hydration
- Soft foods

## Complications of GAS Pharyngitis

### Non-Suppurative Complications

**Acute rheumatic fever:**
- Autoimmune reaction to GAS infection
- Occurs 2-4 weeks after untreated GAS
- Affects heart (carditis), joints (arthritis), brain (chorea), skin
- Prevention is the primary reason for treating GAS pharyngitis
- Requires full 10-day course of penicillin to prevent

**Post-streptococcal glomerulonephritis:**
- Kidney inflammation after GAS infection
- More common with skin infections (impetigo)
- Can cause hypertension, hematuria, edema

### Suppurative Complications

**Peritonsillar abscess:**
- Collection of pus between tonsil and pharyngeal muscles
- Severe throat pain, trismus (cannot open mouth), "hot potato voice"
- Unilateral swelling
- Treatment: Drainage + antibiotics

**Retropharyngeal abscess:**
- Infection in space posterior to pharynx
- More common in young children
- Can cause airway compromise
- Treatment: Surgical drainage + antibiotics

**Cervical lymphadenitis:**
- Suppurative infection of lymph nodes
- Tender, enlarged neck nodes
- May require drainage if abscess forms

**Otitis media, sinusitis, mastoiditis:**
- Extension of infection to adjacent sites

## Return to School/Work

**With appropriate antibiotic therapy:**
- May return after 24 hours of antibiotics AND
- Fever-free for 24 hours without fever-reducing medicines AND
- Able to participate in normal activities

**Without antibiotics:**
- Contagious for longer period
- Not recommended due to risk of complications`,
      keyTerms: [
        { term: 'pharyngitis', definition: 'Inflammation of the pharynx or throat, commonly caused by viral or bacterial infection', pronunciation: 'far-in-JIE-tis' },
        { term: 'Group A Streptococcus', definition: 'Bacteria that cause strep throat; also known as Streptococcus pyogenes', pronunciation: 'strep-toh-KOK-us' },
        { term: 'exudate', definition: 'Fluid or pus that leaks from tissues; white patches on tonsils are exudate', pronunciation: 'EKS-oo-dayt' },
        { term: 'Centor criteria', definition: 'Clinical scoring system to estimate probability of strep throat and guide testing decisions' },
        { term: 'odynophagia', definition: 'Painful swallowing', pronunciation: 'oh-din-oh-FAY-jee-uh' },
        { term: 'rheumatic fever', definition: 'Autoimmune disease that can occur after untreated strep throat, affecting heart, joints, and brain' },
      ],
      analogies: [
        'The Centor criteria is like a checklist that helps doctors decide how likely it is that a sore throat is caused by strep bacteria.',
        'Think of the throat culture like planting seeds in a garden - if bacteria are present, they will grow in the special gel over 24-48 hours.',
      ],
    },
    3: {
      level: 3,
      summary: 'Acute pharyngitis presents with sore throat and requires systematic evaluation to distinguish viral from bacterial etiology, primarily Group A Streptococcus. Diagnostic criteria, rapid testing, and throat culture guide appropriate antibiotic therapy to prevent complications.',
      explanation: `## Epidemiology

### Burden of Disease

**Acute pharyngitis accounts for:**
- 12 million outpatient visits annually in the United States
- 1-2% of all emergency department visits
- 2-4% of all primary care visits

**Age distribution:**
- Children: 3-5 episodes per year
- Adults: 1-2 episodes per year

**GAS pharyngitis epidemiology:**
- Peak incidence: 5-15 years (30-40% of sore throats in this age group)
- Uncommon < 3 years (rheumatic fever also rare in this age group)
- Decreasing incidence with age (5-15% of adult sore throats)
- Seasonal: Late winter and early spring peaks

### Transmission

**GAS transmission:**
- Respiratory droplets (coughing, sneezing)
- Direct contact with infected secretions
- Fomites (contaminated objects)
- Incubation period: 2-5 days
- Contagious period:
  - Untreated: Up to several weeks
  - Treated: 24 hours after appropriate antibiotics

**Asymptomatic carriage:**
- 10-20% of school-age children are GAS carriers
- < 5% of adults are carriers
- Carriers have positive throat cultures without symptoms
- Do not require treatment (except in special circumstances)

## Pathophysiology

### Bacterial Pathogenesis

**Group A Streptococcus virulence factors:**
- **M protein:** Inhibits phagocytosis, major virulence determinant
- **Streptococcal pyogenic exotoxins:** Cause scarlet fever rash, toxic shock
- **Streptolysin O and S:** Hemolysins that damage cells
- **Hyaluronidase:** Spreads through tissue
- **DNases:** Degrade DNA

**Inflammatory response:**
- GAS stimulates intense inflammatory response
- Cytokine release causes fever, pain, swelling
- Tissue damage from both bacterial toxins and host response

### Rheumatic Fever Pathogenesis

**Molecular mimicry:**
- GAS M protein shares epitopes with human proteins
- Cardiac myosin, synovium, neuronal tissue
- Cross-reactive antibodies attack host tissues
- Genetic predisposition (HLA-DR7)

**Why 10 days of antibiotics:**
- Eradicates GAS from pharynx
- Prevents rheumatic fever (even if symptoms resolve earlier)
- Shorter courses do not reliably prevent rheumatic fever

## Diagnostic Strategies

### Clinical Decision Rules

**Modified Centor (McIsaac) Criteria:**

| Criteria | Points |
|----------|--------|
| Fever > 38°C | 1 |
| Absence of cough | 1 |
| Swollen tender anterior cervical lymphadenopathy | 1 |
| Tonsillar exudate | 1 |
| Age 3-14 years | 1 |
| Age 15-44 years | 0 |
| Age ≥ 45 years | -1 |

**Probability of GAS by score:**
| Score | Probability | Recommendation |
|-------|-------------|----------------|
| -1, 0, 1 | 1-10% | No testing, no treatment |
| 2 | 11-28% | RADT, treat if positive |
| 3 | 28-48% | RADT, treat if positive |
| 4 | 48-73% | RADT, treat if positive; consider empiric treatment |
| 5 | 51-75% | RADT, treat if positive; empiric treatment reasonable |

**Clinical application:**
- Scores ≤ 1: Very low probability, no testing needed
- Scores 2-3: Test, treat only if positive
- Scores 4-5: High probability; consider empiric treatment
- High prevalence settings (e.g., high GAS prevalence in community): Lower threshold for testing/empiric treatment

### Diagnostic Testing Algorithms

**Adult patients:**
1. Assess Centor/McIsaac score
2. Score ≤ 1: No testing needed
3. Score 2-3: RADT; treat if positive, culture if negative and high suspicion
4. Score ≥ 4: RADT; treat if positive, consider empiric treatment while awaiting results

**Pediatric patients:**
1. All children with sore throat should be evaluated
2. RADT for all children with symptoms compatible with GAS
3. Confirm negative RADT with throat culture (children have higher bacterial load)
4. Do NOT test asymptomatic children (carrier state)

**Pregnant patients:**
- Diagnostic approach similar to general population
- Penicillin safe in pregnancy
- Important to prevent complications

### Testing Pitfalls

**False negatives:**
- Inadequate swab technique
- Early infection (insufficient bacterial load)
- Prior antibiotics

**False positives:**
- Asymptomatic carrier with viral pharyngitis
- Contamination

**Testing asymptomatic patients:**
- Identifies carriers, not true infection
- Generally not recommended
- Exceptions:
  - Outbreak investigations
  - Post-exposure prophylaxis for high-risk individuals
  - Patients with history of rheumatic fever

## Treatment Details

### Antibiotic Selection

**Penicillin V:**
- Narrow spectrum, targeted therapy
- Inexpensive
- No resistance reported
- Requires multiple daily doses
- GI side effects may affect compliance

**Amoxicillin:**
- Similar efficacy to penicillin
- Better taste (important in children)
- Can be dosed twice daily
- Slightly more expensive
- More rash (especially in mono)

**Benzathine penicillin G:**
- Single intramuscular injection
- Ensures compliance
- Preferred when compliance concern
- Painful injection
- Higher cost

**Cephalosporins:**
- First-generation (cephalexin) effective
- 10% cross-reactivity with penicillin in type I allergy
- Better taste than penicillin suspension
- More expensive

**Macrolides:**
- Clarithromycin: Better taste than erythromycin, better bioavailability
- Azithromycin: 5-day course, good compliance
- Increasing resistance rates (up to 25% in some areas)
- Not preferred if alternatives available

**Clindamycin:**
- Reserved for penicillin-allergic patients
- Effective against GAS
- Taste issues (unpalatable suspension)
- Risk of C. difficile with longer courses

### Duration of Therapy

**Why 10 days:**
- Proven to prevent rheumatic fever
- Shorter courses (5-7 days) may not eradicate carriage
- Symptom improvement often occurs within 24-48 hours
- Full 10-day course required regardless of symptom improvement

**Exceptions:**
- Azithromycin: 5 days (long tissue half-life)
- Benzathine penicillin G: Single dose

### Management of Treatment Failure

**Definition:**
- Persistent symptoms > 72 hours of appropriate antibiotics
- Recurrence of symptoms after initial improvement

**Causes:**
- Viral co-infection
- Antibiotic resistance (rare for GAS)
- Compliance issues
- Carrier state with viral etiology
- Alternative diagnosis (e.g., peritonsillar abscess)

**Evaluation:**
- Repeat RADT and culture (if not done initially)
- Consider alternative diagnoses
- If recurrent GAS documented:
  - Treat with alternative antibiotic class
  - Consider clindamycin or amoxicillin-clavulanate

## Complications

### Peritonsillar Abscess

**Pathogenesis:**
- Infection spreads from tonsil to peritonsillar space
- Tissue necrosis, abscess formation
- Usually unilateral

**Clinical features:**
- Severe throat pain, often unilateral
- Trismus (difficulty opening mouth)
- "Hot potato voice" (muffled, whispered speech)
- Deviation of uvula to unaffected side
- Exudative tonsillitis

**Diagnosis:**
- Clinical diagnosis usually sufficient
- CT scan if diagnosis uncertain or to assess extent

**Treatment:**
- Needle aspiration (first-line)
- Incision and drainage
- Quinsy tonsillectomy (immediate tonsillectomy - rarely performed)
- Antibiotics (penicillin + metronidazole or clindamycin)

### Retropharyngeal Abscess

**Anatomy:**
- Potential space posterior to pharynx, anterior to prevertebral fascia
- Contains lymph nodes that regress by age 4-5

**Epidemiology:**
- Most common in children < 5 years
- Can occur in adults

**Clinical features:**
- Fever, sore throat, dysphagia
- Neck stiffness, limited range of motion
- Respiratory distress (airway compromise)
- Muffled voice

**Treatment:**
- Airway management is priority
- Surgical drainage (transoral or external)
- IV antibiotics

### Acute Rheumatic Fever

**Jones Criteria (revised):**

**Major manifestations:**
- Carditis
- Polyarthritis
- Chorea
- Erythema marginatum
- Subcutaneous nodules

**Minor manifestations:**
- Arthralgia
- Fever
- Elevated ESR or CRP
- Prolonged PR interval on ECG

**Diagnosis:**
- 2 major OR 1 major + 2 minor
- Plus evidence of preceding GAS infection

**Prevention:**
- Appropriate antibiotic treatment of GAS pharyngitis
- Duration of treatment: 10 days for pharyngitis
- Secondary prophylaxis after rheumatic fever

### Post-Streptococcal Glomerulonephritis

**Clinical features:**
- Edema (periorbital, peripheral)
- Hypertension
- Hematuria (tea-colored urine)
- Oliguria

**Diagnosis:**
- Low complement (C3)
- ASO and anti-DNase B titers elevated
- Urinalysis: RBC casts, proteinuria

**Treatment:**
- Supportive care
- Blood pressure control
- Dialysis if severe
- Generally self-limited

### Scarlet Fever

**Clinical features:**
- Pharyngitis with characteristic rash
- Sandpaper texture, papular
- Circumoral pallor (pale area around mouth)
- Pastia lines (accentuation in skin folds)
- Strawberry tongue (red, swollen papillae)
- Desquamation of hands and feet during recovery

**Treatment:**
- Same antibiotics as GAS pharyngitis
- No additional treatment needed`,
      keyTerms: [
        { term: 'asymptomatic carrier', definition: 'Person who harbors GAS in pharynx without symptoms; does not require treatment' },
        { term: 'molecular mimicry', definition: 'Mechanism of autoimmune disease where pathogen antigens resemble host proteins, leading to cross-reactive antibodies' },
        { term: 'M protein', definition: 'Major virulence factor of GAS; inhibits phagocytosis; basis for strain typing' },
        { term: 'trismus', definition: 'Inability to open the mouth fully; sign of peritonsillar abscess or other deep neck infection' },
        { term: 'Jones criteria', definition: 'Diagnostic criteria for acute rheumatic fever requiring evidence of preceding GAS infection' },
        { term: 'ASO titer', definition: 'Anti-streptolysin O antibody; elevated after GAS infection, used to diagnose post-streptococcal complications' },
      ],
      clinicalNotes: 'Use modified Centor criteria to guide testing. Score ≤ 1: no testing needed. Score 2-3: test and treat if positive. Score ≥ 4: test or empirically treat. Amoxicillin is preferred in children due to better taste and BID dosing. All positive cases require 10-day course to prevent rheumatic fever, even if symptoms resolve. Do not treat asymptomatic carriers (except in special circumstances).',
    },
    4: {
      level: 4,
      summary: 'Acute pharyngitis management requires systematic evaluation to distinguish viral from bacterial etiology, with evidence-based use of diagnostic criteria, rapid antigen testing, throat culture, and appropriate antibiotic therapy to prevent rheumatic fever and suppurative complications.',
      explanation: `## Evidence-Based Diagnostic Approach

### Validation of Clinical Decision Rules

**Centor criteria validation:**
- Original validation in adult patients
- Sensitivity: 77-82%
- Specificity: 53-57%
- Area under ROC curve: 0.73

**McIsaac (modified Centor) criteria:**
- Added age as a predictor
- Improved sensitivity in children
- Better specificity in older adults
- Most widely validated in primary care

**Limitations:**
- Not validated in immunocompromised
- Not validated in healthcare-associated infections
- Less useful during high GAS prevalence periods
- Over-testing remains common

### Testing Strategies and Outcomes

**Rapid antigen testing alone:**
- Sensitivity: 70-90%
- Miss diagnosis in ~10-30% of GAS cases
- Acceptable in low prevalence settings when pre-test probability is low

**RADT plus culture for negative tests:**
- Sensitivity approaches 98-99% (culture detects missed cases)
- Recommended in children (higher consequence of missed diagnosis)
- Increases cost and turnaround time
- May not be necessary in low-risk adults with negative RADT

**Alternative strategies:**
- Rapid DNA tests: Higher sensitivity than antigen tests, comparable to culture
- Point-of-care PCR: Expensive but high accuracy
- No-test strategies: For very low Centor scores, reduces unnecessary antibiotics

### Antibiotic Stewardship in Pharyngitis

**Scope of unnecessary antibiotic use:**
- ~60-70% of adults with sore throat receive antibiotics
- Only ~10% have GAS (most have viral etiology)
- Estimated unnecessary prescriptions: 8-10 million annually

**Stewardship strategies:**
1. **Appropriate testing:** Only test when likelihood of GAS is meaningful
2. **Treat positives, avoid treating negatives:**
   - Negative RADT in low-risk adult: No further testing, no antibiotics
   - Positive RADT: Treat
   - Negative RADT in high-risk pediatric patient: Confirm with culture
3. **Avoid treating carriers:**
   - Asymptomatic patients: Do not test or treat
   - Post-treatment asymptomatic: Do not retest
4. **Appropriate antibiotic selection:**
   - Penicillin or amoxicillin first-line
   - Avoid broad-spectrum antibiotics

## Comprehensive Treatment Strategies

### First-Line Antibiotic Evidence

**Penicillin vs Amoxicillin:**
- Similar efficacy for GAS eradication
- Amoxicillin:
  - Better palatability → better compliance
  - BID dosing vs QID dosing
  - Slightly more expensive
  - More rash (especially in EBV)
- Penicillin V:
  - Lower cost
  - Narrow spectrum
  - Multiple daily dosing
  - No taste issues

**Recommendation:** Amoxicillin 50 mg/kg/day divided BID for children; Penicillin V for adults (if compliance not a concern)

### Penicillin Allergy Management

**True penicillin allergy prevalence:**
- Self-reported: 10-15%
- True allergy: < 1%
- 90% of labeled allergies are not true allergies

**Management approach:**
1. **Evaluate allergy history:**
   - Type I (anaphylaxis, angioedema, urticaria)
   - Non-type I (rash, nausea)

2. **Type I allergy:**
   - First-generation cephalosporin (cephalexin) if low risk
   - Cross-reactivity: ~10% (not higher than background allergy rate)
   - Clindamycin for confirmed severe allergy
   - Macrolides (clarithromycin preferred over azithromycin due to resistance)

3. **Non-type I allergy:**
   - Cephalosporins appropriate
   - Same efficacy as penicillin

**Penicillin skin testing:**
- Consider in patients with unclear history
- Can delabel most patients
- Allows use of first-line therapy

### Duration Evidence

**10-day course justification:**
- Multiple RCTs show 10 days required for reliable eradication
- Shorter courses: Higher failure rates
- Rheumatic fever prevention proven for 10-day courses

**Exception: Azithromycin**
- 5 days provides equivalent eradication
- Pharmacokinetic properties allow shorter course
- Not first-line due to resistance and cost

## Recurrent Pharyngitis

### Distinguishing Recurrence from Carriage

**Recurrent GAS:**
- Documented positive tests with symptoms
- ASO or anti-DNase B titers rising between episodes
- Response to antibiotics with relapse after completion

**Carrier with viral infections:**
- Positive test persisting despite antibiotics
- Symptoms resolve with antibiotics but return
- No change in antibody titers
- Viral symptoms often present (cough, rhinorrhea)

**Management of carriers:**
- Generally do not require treatment
- Exceptions:
  - Outbreak control
  - Household contacts with history of rheumatic fever
  - During closed outbreaks (military, dormitories)

### Treatment of Recurrent GAS

**First recurrence:**
- Repeat standard course of penicillin/amoxicillin
- Consider alternative antibiotic

**Multiple recurrences:**
- Clindamycin 20 mg/kg/day divided TID for 10 days
- Amoxicillin-clavulanate for 10 days
- Consider penicillin + rifampin combination

**Tonsillectomy for recurrent GAS:**
- AAO-HNS guideline: Consider for ≥ 7 episodes in past year, ≥ 5 episodes in past 2 years, or ≥ 3 episodes in past 3 years
- Reduces future episodes but number needed to treat: 4-5
- Consider individual values and preferences

## Special Populations

### Pediatric Considerations

**Testing approach:**
- Lower threshold for testing than adults
- Confirm negative RADT with throat culture
- Higher consequence of missed diagnosis (rheumatic fever risk)

**Antibiotic selection:**
- Amoxicillin preferred (better taste, BID dosing)
- Avoid cefuroxime, cefpodoxime (taste issues)
- Consider clindamycin suspension (poor taste, may need flavoring)

**Return to school:**
- 24 hours after antibiotics AND fever-free for 24 hours
- May return sooner if treated with benzathine penicillin G

### Pregnancy

**GAS in pregnancy:**
- Same diagnostic approach as non-pregnant
- Penicillin and amoxicillin are category B (safe)
- Erythromycin estolate contraindicated (hepatotoxicity)
- Prompt treatment important to prevent complications

### Immunocompromised Patients

**Considerations:**
- Broader differential (opportunistic infections)
- Lower threshold for further evaluation
- Same treatment for GAS
- Consider prophylactic antibiotics in specific situations

## Complications: Detailed Management

### Peritonsillar Abscess

**Diagnosis:**
- Clinical diagnosis sufficient in most cases
- CT scan indications:
  - Uncertain diagnosis
  - Suspected extension
  - Lack of response to drainage

**Treatment options:**

| Treatment | Advantages | Disadvantages |
|-----------|------------|----------------|
| Needle aspiration | Office procedure, minimally invasive | May need repeat aspiration |
| Incision and drainage | Higher success rate | More painful, may require sedation |
| Quinsy tonsillectomy | Definitive treatment | Requires OR, higher bleeding risk |

**Antibiotics:**
- Penicillin + metronidazole (covers anaerobes)
- Clindamycin monotherapy (if penicillin allergic)
- 10-14 days total

**Follow-up:**
- Re-evaluate in 24-48 hours
- Consider tonsillectomy if recurrence

### Acute Rheumatic Fever

**Primary prevention:**
- Treat GAS pharyngitis with appropriate antibiotics for 10 days
- Reduces risk of rheumatic fever by >80%

**Secondary prevention:**
- Benzathine penicillin G 1.2 million units IM every 4 weeks
- Duration: Based on cardiac involvement
  - No carditis: 5 years or until age 21 (whichever longer)
  - Carditis without residual: 10 years or until age 25
  - Carditis with residual disease: Lifelong

### Post-Streptococcal Glomerulonephritis

**Treatment:**
- Supportive care
- No specific role for antibiotics (infection already resolved)
- Blood pressure control
- Dialysis if indicated

**Prognosis:**
- Generally excellent in children
- Adults may have residual renal dysfunction`,
      keyTerms: [
        { term: 'antibiotic stewardship', definition: 'Coordinated interventions to improve appropriate antibiotic use, minimize resistance, and optimize patient outcomes' },
        { term: 'sensitivity and specificity', definition: 'Measures of test accuracy; sensitivity = ability to detect disease, specificity = ability to identify those without disease' },
        { term: 'false negative', definition: 'Test result is negative when disease is actually present' },
        { term: 'false positive', definition: 'Test result is positive when disease is actually absent' },
        { term: 'ASO titer', definition: 'Anti-streptolysin O antibody; marker of recent GAS infection, peaks 3-6 weeks after infection' },
      ],
      clinicalNotes: 'Modified Centor criteria guide testing: score ≤1 (no test), 2-3 (test, treat if positive), ≥4 (test or empiric treatment). Amoxicillin first-line in children for palatability. All confirmed GAS requires 10-day antibiotics to prevent rheumatic fever. Do not treat asymptomatic carriers. Recurrent GAS: consider clindamycin. Peritonsillar abscess: drainage plus antibiotics (penicillin + metronidazole or clindamycin).',
    },
    5: {
      level: 5,
      summary: 'Contemporary pharyngitis management integrates evidence-based diagnostic criteria, targeted testing strategies, antibiotic stewardship principles, and individualized treatment approaches to optimize outcomes while minimizing unnecessary antibiotic use and preventing complications.',
      explanation: `## Current Guidelines and Evidence Synthesis

### Guideline Comparison

| Aspect | IDSA 2012 | AAO-HNS 2018 | NICE 2018 |
|--------|-----------|--------------|-----------|
| Diagnostic criteria | Centor | Modified Centor | FeverScore |
| Age for testing | All ages with symptoms | All ages with symptoms | ≥ 3 years |
| Confirmatory culture | Not mandatory | Mandatory in children | Not recommended |
| First-line treatment | Penicillin/amoxicillin | Penicillin/amoxicillin | Phenoxymethylpenicillin |
| Duration | 10 days | 10 days | 5-10 days based on agent |

### Key Evidence Updates

**GAS prevalence updates:**
- Adults: ~5-15% (lower than historical estimates)
- Children: ~15-30% (also decreasing possibly due to competition from other organisms)
- Implications: Lower pre-test probability means fewer positive tests, more false positives

**RADT sensitivity evolution:**
- Modern lateral flow immunoassays: 85-95% sensitivity
- Optical immunoassays: >95% sensitivity
- Some assays approach culture sensitivity
- Culture may be unnecessary with newer high-sensitivity assays

**Antibiotic resistance trends:**
- GAS remains universally susceptible to penicillin
- Macrolide resistance: 5-30% (higher in some regions)
- Clindamycin resistance: < 5% in most regions
- Tetracycline resistance: > 50%

## Diagnostic Precision

### Optimizing Pre-Test Probability

**Clinical features with high likelihood ratios:**

| Feature | LR+ | LR- |
|---------|-----|-----|
| Tonsillar exudate | 2.1 | 0.75 |
| Swollen tender anterior nodes | 1.9 | 0.65 |
| Fever by history | 1.5 | 0.78 |
| Absence of cough | 1.4 | 0.64 |
| Age 5-15 | 2.6 | 0.72 |

**Combined assessment:**
- Clinical decision rules perform better than individual features
- Modified Centor has AUC of ~0.75
- FeverScore (NICE) has similar performance
- Clinical judgment remains important

### Biomarker Research

**Procalcitonin:**
- Not useful for distinguishing viral vs bacterial pharyngitis
- Levels overlap significantly
- Not recommended

**CRP and ESR:**
- Limited utility
- Can be elevated in both viral and bacterial etiologies
- May be useful in monitoring complications

**Rapid viral testing:**
- Multiplex PCR panels can identify viral pathogens
- May reduce unnecessary antibiotics
- Cost currently limits widespread use
- May become standard as costs decrease

### When to Relax Testing

**Low-risk scenarios where testing may be omitted:**
- Centor score 0-1 in adults
- Symptoms consistent with viral URI (cough, rhinorrhea, conjunctivitis)
- Low community GAS prevalence (< 5%)
- Alternative clear diagnosis (e.g., herpes gingivostomatitis)

**High-risk scenarios where empiric treatment may be appropriate:**
- Centor score 4-5 with high prevalence
- Close household contact with confirmed GAS
- Personal history of rheumatic fever
- Limited access to follow-up

## Antibiotic Optimization

### Penicillin Allergy: A Major Barrier

**Delabeling strategies:**
1. **Detailed history:**
   - Distinguish true allergy from intolerance
   - >90% of reported allergies are not true IgE-mediated

2. **Skin testing:**
   - Penicillin major and minor determinants
   - Negative predictive value > 95%
   - Graded oral challenge if skin test negative

3. **Direct oral challenge:**
   - In low-risk histories (rash without systemic symptoms)
   - Under observation
   - Safe and cost-effective

**Benefits of delabeling:**
- First-line therapy access
- Reduced resistance pressure
- Lower healthcare costs
- Better outcomes

### Duration Evidence

**10-day standard:**
- Based on decades of evidence preventing rheumatic fever
- Symptom improvement often within 48-72 hours
- Crucial to complete full course

**Exceptions and considerations:**
- Azithromycin 5 days: Pharmacokinetic properties allow shorter course
- Compliance issues: Consider benzathine penicillin G
- Recurrent infections: Consider alternative antibiotic

### Alternative Antibiotics: Evidence Update

**Cephalosporins:**
- First-generation (cephalexin) highly effective
- Cross-reactivity with penicillin:
  - Historically estimated at 10%
  - Contemporary studies suggest < 2%
  - Risk of allergic reaction similar to population without penicillin allergy

**Clindamycin:**
- Excellent tissue penetration
- Effective against GAS including some penicillin-resistant strains
- Taste challenges in pediatric suspension
- C. difficile risk with prolonged courses

**Macrolides:**
- Increasing resistance concerns
- Clarithromycin: Better bioavailability than erythromycin
- Azithromycin: 5-day course, good compliance
- Reserve for penicillin-allergic patients

## Controversies and Evolving Practice

### Culture After Negative RADT

**Current recommendations vary:**
- **Universal culture (children):** AAO-HNS recommendation
- **Selective culture:** Many clinicians use clinical judgment
- **No culture:** When pre-test probability is low and RADT is highly sensitive

**Rational approach:**
- Children < 3: Low GAS prevalence, culture if high clinical suspicion
- Children 3-15: Culture after negative RADT (or use high-sensitivity RADT)
- Adults: Culture optional, use clinical judgment

### Asymptomatic Screening

**Not recommended:**
- Identifies carriers, not infection
- Leads to unnecessary antibiotics
- Does not prevent transmission or complications

**Exceptions:**
- Household contacts of patients with rheumatic fever
- During outbreak investigations
- Patients with personal history of rheumatic fever

### Carrier State Management

**Do not routinely treat:**
- Carriers unlikely to transmit GAS
- Carriers unlikely to develop complications
- Treatment does not eliminate carriage long-term

**Clindamycin for eradication:**
- Consider when elimination of carriage is necessary
- 20 mg/kg/day divided TID for 10 days
- 90%+ eradication rate
- Use sparingly due to resistance concerns

## Post-Streptococcal Complications: Updates

### Rheumatic Fever Epidemiology

**Declining incidence:**
- < 1 case per 100,000 in developed countries
- Remains major problem in resource-limited settings
- Decline likely due to:
  - Improved living conditions
  - Prompt antibiotic treatment
  - GAS strain evolution

### Acute Rheumatic Fever Diagnosis

**Revised Jones Criteria (2015):**

**Diagnosis in low-risk populations:**
- 2 major OR 1 major + 2 minor + evidence of GAS

**Diagnosis in moderate/high-risk populations:**
- 2 major OR 1 major + 2 minor + evidence of GAS
- OR 2 minor + evidence of GAS + Doppler evidence of subclinical carditis

**Subclinical carditis (new category):**
- Doppler echocardiography findings
- No auscultatory findings
- Counts as major criterion in high-risk populations

## Recurrent Pharyngitis: Advanced Management

### Distinguishing Causes

**True recurrent GAS:**
- Rising ASO or anti-DNase B titers between episodes
- Symptomatic with positive tests
- Responds to antibiotics but recurs

**Carrier state with viral infections:**
- Persistent positive tests
- No change in antibody titers
- Interspersed viral symptoms

**Non-GAS recurrent pharyngitis:**
- *Fusobacterium necrophorum* (Lemierre syndrome risk)
- *Arcanobacterium haemolyticum* (rash common)
- EBV (persistent fatigue common)
- HSV (gingivostomatitis)
- *Corynebacterium diphtheriae* (rare)
- Gonococcal pharyngitis

### Management Strategies

**Tonsillectomy:**
- AAO-HNS criteria: ≥ 7 episodes in past year, ≥ 5 in past 2 years, or ≥ 3 in past 3 years
- Number needed to treat: 4-5 to prevent one recurrence
- Consider patient preferences
- Shared decision-making essential

**Alternative approaches:**
- Prophylactic antibiotics (not routinely recommended)
- Clindamycin regimen for chronic carriage
- Biofilm eradication (research stage)

## Quality Improvement

**Appropriate Antibiotic Prescribing Metrics:**
1. Percentage of sore throat visits with antibiotics (goal: < 25%)
2. First-line antibiotic use (penicillin/amoxicillin)
3. Appropriate testing based on clinical criteria
4. Avoidance of antibiotics for viral URIs

**Diagnostic Stewardship:**
- Appropriate use of RADT and culture
- Avoid testing asymptomatic patients
- Avoid testing patients with clear viral symptoms

**Patient Education:**
- Explanation of viral vs bacterial pharyngitis
- Expectations for symptom resolution
- Importance of completing full course
- Signs of complications`,
      keyTerms: [
        { term: 'AUC', definition: 'Area under the receiver operating characteristic curve; measure of diagnostic test accuracy' },
        { term: 'likelihood ratio', definition: 'Statistical measure of how much a test result changes probability of disease' },
        { term: 'pre-test probability', definition: 'Probability of disease before diagnostic testing; guides interpretation of test results' },
        { term: 'subclinical carditis', definition: 'Heart inflammation detectable only by echocardiography, not on physical exam' },
        { term: 'carriage', definition: 'Asymptomatic presence of bacteria; GAS carriage rates 10-20% in children' },
      ],
      clinicalNotes: `Key clinical practice points:

1. **Use clinical decision rules:** Modified Centor criteria guide testing. Score ≤ 1: no testing; 2-3: test and treat if positive; ≥ 4: test or empiric treat. Most adults with sore throat do not need testing.

2. **Penicillin first-line:** Amoxicillin for children (palatability, BID dosing), penicillin V for adults. GAS remains universally susceptible to penicillin. No resistance has emerged despite decades of use.

3. **10-day course mandatory:** Symptom improvement does not indicate cure. Full 10 days required to prevent rheumatic fever. Exceptions: azithromycin 5 days, benzathine penicillin G single dose.

4. **Delabel penicillin allergy:** > 90% of labeled allergies are not true allergies. Consider skin testing or direct challenge in low-risk histories. Enables first-line therapy.

5. **Don't treat carriers:** Asymptomatic patients with positive tests are carriers. Do not treat except in special circumstances (outbreaks, rheumatic fever history).

6. **Culture after negative RADT:** Mandatory in children, optional in adults. Newer high-sensitivity RADTs may obviate need for confirmatory culture.

7. **Recurrent GAS:** Consider clindamycin for penicillin failures. Consider tonsillectomy for frequent recurrences (≥ 7 in 1 year, ≥ 5 in 2 years, ≥ 3 in 3 years) but shared decision-making required.

8. **Complications recognition:** Peritonsillar abscess (trismus, hot potato voice, uvular deviation) requires drainage. Consider rheumatic fever in migratory arthritis, carditis, chorea, or rash with evidence of GAS infection.

9. **Stewardship:** Most sore throats are viral. Avoid antibiotics for cough/rhinorrhea symptoms. Explain expectations for symptom resolution (typically 7-10 days for viral, 2-3 days improvement with GAS treatment).

10. **Special populations:** Pregnancy: penicillin/amoxicillin safe. Children: confirm negative RADT with culture. Immunocompromised: broader differential, same GAS treatment.`,
    },
  },

  media: [
    {
      id: 'centor-criteria',
      type: 'diagram',
      filename: 'centor-criteria.svg',
      title: 'Modified Centor Criteria',
      description: 'Scoring system for evaluating GAS pharyngitis probability',
    },
    {
      id: 'throat-exam',
      type: 'diagram',
      filename: 'throat-exam.svg',
      title: 'Pharyngeal Examination Findings',
      description: 'Normal vs strep throat examination findings',
    },
    {
      id: 'scarlet-fever',
      type: 'diagram',
      filename: 'scarlet-fever.svg',
      title: 'Scarlet Fever Rash',
      description: 'Distribution and characteristics of scarlet fever rash',
    },
    {
      id: 'peritonsillar-abscess',
      type: 'diagram',
      filename: 'peritonsillar-abscess.svg',
      title: 'Peritonsillar Abscess',
      description: 'Anatomy and clinical features of peritonsillar abscess',
    },
  ],

  citations: [
    {
      id: 'idsa-pharyngitis-2012',
      type: 'article',
      title: 'Guideline for the Diagnosis and Management of Group A Streptococcal Pharyngitis',
      authors: ['Shulman ST', 'Bisno AL', 'Clegg HW', 'et al.'],
      source: 'Clinical Infectious Diseases',
      url: 'https://doi.org/10.1093/cid/cis847',
    },
    {
      id: 'aao-hns-tonsillitis-2018',
      type: 'article',
      title: 'Clinical Practice Guideline: Tonsillectomy in Children (Update)',
      authors: ['Mitchell RB', 'Archila LD', 'Owens J', 'et al.'],
      source: 'Otolaryngology-Head and Neck Surgery',
      url: 'https://doi.org/10.1177/0194599818789794',
    },
    {
      id: 'nice-sore-throat-2018',
      type: 'article',
      title: 'Sore throat (acute): antimicrobial prescribing',
      source: 'NICE Guideline NG84',
    },
  ],

  crossReferences: [
    { targetId: 'structure-pharynx', targetType: 'structure', relationship: 'related', label: 'Pharynx' },
    { targetId: 'structure-tonsils', targetType: 'structure', relationship: 'related', label: 'Tonsils' },
    { targetId: 'condition-tonsillitis', targetType: 'condition', relationship: 'related', label: 'Tonsillitis' },
    { targetId: 'condition-sinusitis', targetType: 'condition', relationship: 'sibling', label: 'Sinusitis' },
  ],

  tags: {
    systems: ['ent', 'immune'],
    topics: ['otolaryngology', 'infectious disease', 'primary care'],
    keywords: ['pharyngitis', 'strep throat', 'Group A Strep', 'tonsillitis', 'sore throat', 'Centor criteria'],
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

export default pharyngitis;
