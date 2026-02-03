/**
 * Rheumatic Fever - Pediatric Condition
 *
 * Comprehensive content on rheumatic fever including diagnosis, Jones criteria,
 * prophylaxis protocols, and valvular heart disease management.
 */

import { EducationalContent } from '../../types';

export const rheumaticFever: EducationalContent = {
  id: 'condition-rheumatic-fever',
  type: 'condition',
  name: 'Rheumatic Fever',
  alternateNames: ['Acute Rheumatic Fever', 'ARF', 'RF'],

  levels: {
    1: {
      level: 1,
      summary: 'Rheumatic fever is a disease that can happen after a strep throat infection that wasn\'t treated. It can cause problems with the heart, joints, and brain. Treating strep throat with antibiotics prevents it.',
      explanation: `## What is Rheumatic Fever?

Rheumatic fever is an illness that can develop after a child has a strep throat infection that wasn't treated properly. Instead of just fighting the strep bacteria, the body's immune system gets confused and starts attacking parts of the body like the heart, joints, and brain.

**Who Gets It?**
- Children ages 5-15 years old most commonly
- Rare in children under 3
- Happens 2-4 weeks after a strep throat infection

**The Good News:**
- It's very rare in places where strep throat is treated with antibiotics
- Most children recover completely
- Treatment is available

## Warning Signs and Symptoms

**Joints:**
- Painful, swollen joints (knees, ankles, elbows, wrists)
- Joints might feel hot and red
- Pain might move from one joint to another
- Usually goes away on its own in a few weeks

**Heart:**
- Heart problems are the most serious part
- The heart valves can be damaged
- Child might feel tired or short of breath
- Some children show no signs at first

**Other Signs:**
- Fever
- Belly pain
- Small bumps under the skin
- Red rash with odd shapes
- Strange jerky movements (arms, legs, face)
- Weak or numb muscles on one side of the face (like Bell's palsy)

## How It's Diagnosed

Doctors look for:
1. Recent strep throat infection (confirmed by tests)
2. Specific signs and symptoms (Jones criteria)

## Treatment

**Antibiotics:**
- To kill any remaining strep bacteria
- Usually penicillin (shot or pills)

**Medicines for Symptoms:**
- Aspirin or ibuprofen for joint pain and fever
- Special medicines for heart problems if needed

**Rest:**
- Important for healing, especially if the heart is affected

## Prevention

**The Best Prevention:**
- Treat strep throat with antibiotics
- Finish all the medicine, even if feeling better
- Don't send children to school with untreated sore throats

**For Children Who've Had Rheumatic Fever:**
- Monthly antibiotic shots for many years
- Or daily antibiotic pills
- This prevents another episode

## Long-term Effects

Most children recover completely, but some may have:
- Heart valve damage (called rheumatic heart disease)
- Need for heart medicine later in life
- Rarely, need for heart valve surgery

**Remember:** Treating strep throat properly is the best way to prevent rheumatic fever!`,
      keyTerms: [
        { term: 'rheumatic fever', definition: 'A disease that can affect the heart, joints, and brain after untreated strep throat' },
        { term: 'strep throat', definition: 'A sore throat caused by streptococcus bacteria' },
        { term: 'antibiotics', definition: 'Medicines that kill bacteria' },
        { term: 'heart valve', definition: 'Flaps in the heart that control blood flow through the heart' },
        { term: 'prophylaxis', definition: 'Treatment given to prevent disease' },
      ],
      analogies: [
        'Rheumatic fever is like friendly fire - the body\'s immune system accidentally attacks its own heart and joints while trying to fight strep.',
        'Heart valves are like one-way doors in the heart - when damaged, they might leak or not open properly.',
        'Antibiotic prevention is like a shield - it keeps strep bacteria from causing problems again.',
      ],
      examples: [
        'A 10-year-old had a sore throat 2 weeks ago that wasn\'t treated. Now their knees are swollen and painful.',
        'A child with rheumatic fever needs penicillin shots every 3-4 weeks for several years.',
        'A teenager who had rheumatic fever as a child now has a heart murmur from valve damage.',
      ],
      patientCounselingPoints: [
        'Always complete the full course of antibiotics for strep throat',
        'Children with rheumatic fever need long-term antibiotic prevention',
        'Keep all follow-up appointments for heart monitoring',
        'Tell any new doctors about past rheumatic fever diagnosis',
      ],
    },

    2: {
      level: 2,
      summary: 'Rheumatic fever is an autoimmune disease that occurs after group A streptococcal pharyngitis. It causes carditis, arthritis, chorea, and other manifestations. Long-term antibiotic prophylaxis prevents recurrence and progression to rheumatic heart disease.',
      explanation: `## What is Rheumatic Fever?

Rheumatic fever (RF) is an inflammatory disease that can develop after a Group A Streptococcus (GAS) pharyngitis infection ("strep throat"). It is an autoimmune condition where antibodies against strep bacteria cross-react with heart, joint, and brain tissues.

**Epidemiology:**
- Age: Most common 5-15 years
- Incidence: Rare in developed countries (<1/100,000), common in developing regions
- Latency: 2-3 weeks after strep throat
- Recurrence: More common with subsequent GAS infections

## Pathogenesis

**Molecular Mimicry:**
- Streptococcal M protein resembles human proteins
- Anti-strep antibodies attack:
  - Heart valves (especially mitral valve)
  - Synovium (joint lining)
  - Basal ganglia (brain movement control)
  - Skin (subcutaneous nodules)

**Risk Factors:**
- Genetic predisposition (certain HLA types)
- Crowded living conditions
- Poor access to healthcare
- Untreated or undertreated strep throat

## Clinical Manifestations

**Major Manifestations (Jones Criteria):**

| Manifestation | Description | Frequency |
|---------------|-------------|-----------|
| Migratory polyarthritis | Large joints, moves from joint to joint | 75% |
| Carditis | Heart inflammation, valve damage | 50% |
| Sydenham chorea | Jerky, involuntary movements | 15% |
| Erythema marginatum | Pink ring-shaped rash | 5% |
| Subcutaneous nodules | Painless lumps under skin | <2% |

**Minor Manifestations:**
- Fever (usually low-grade)
- Arthralgia (joint pain without swelling)
- Elevated inflammatory markers (ESR, CRP)
- Prolonged PR interval on ECG

## Jones Criteria for Diagnosis

**Definite Rheumatic Fever:**
- 2 major criteria OR 1 major + 2 minor
- PLUS evidence of preceding GAS infection

**Evidence of GAS Infection:**
- Positive throat culture or rapid strep test
- Positive anti-streptolysin O (ASO) or anti-DNase B antibodies
- Recent scarlet fever

## Cardiac Involvement

**Rheumatic Carditis:**
- Affects 50% of patients
- Can involve all heart layers (pancarditis)
- Most common: Mitral valve regurgitation
- Second most common: Aortic valve regurgitation

**Heart Valve Damage:**
| Valve | Involvement | Type of Damage |
|-------|-------------|----------------|
| Mitral | 60-90% | Regurgitation most common |
| Aortic | 20-40% | Regurgitation most common |
| Tricuspid | 5% | Usually with mitral disease |
| Pulmonic | Rare | Very uncommon |

**Signs of Carditis:**
- New heart murmur
- Enlarged heart on chest X-ray
- Heart failure symptoms (fatigue, shortness of breath)
- Pericardial friction rub
- Muffled heart sounds

## Sydenham Chorea

**Features:**
- Purposeless, involuntary movements
- Emotional lability (mood swings, crying)
- Muscle weakness
- Speech difficulties
- Usually appears 1-6 months after strep infection
- More common in girls

**Duration:**
- Typically resolves in 2-3 months
- May recur with subsequent pregnancies

## Diagnosis

**Laboratory Tests:**
- ASO titer: Elevated (>200 Todd units in children)
- Anti-DNase B: Elevated
- ESR/CRP: Elevated in acute phase
- Throat culture: Often negative by symptoms appear

**ECG Findings:**
- Prolonged PR interval (first-degree heart block)
- May see other conduction abnormalities

**Echocardiogram:**
- Valve regurgitation
- Chamber enlargement
- Pericardial effusion
- Decreased ventricular function

**Chest X-ray:**
- Cardiomegaly (enlarged heart)
- Pulmonary edema if heart failure

## Treatment

**Eradicate GAS:**
- Penicillin G benzathine: 1.2 million units IM (single dose)
- OR penicillin V: 250 mg BID x 10 days
- OR amoxicillin: 50 mg/kg/day x 10 days

**Anti-inflammatory:**
- Aspirin: 80-100 mg/kg/day divided TID-QID
- Taper over 4-6 weeks as symptoms improve
- Alternative: NSAIDs if aspirin not tolerated

**Severe Carditis:**
- Hospitalization
- Corticosteroids (prednisone 1-2 mg/kg/day)
- Digoxin for heart failure
- Diuretics for fluid overload
- ACE inhibitors

**Chorea Management:**
- Sedation for safety
- Haloperidol, valproic acid, or carbamazepine
- Usually self-limited

## Secondary Prophylaxis

**Purpose:**
- Prevent recurrent GAS infection
- Prevent worsening of heart valve damage
- Recurrences cause more severe cardiac damage

**Duration Based on Cardiac Involvement:**

| Category | Duration |
|----------|----------|
| No carditis | 5 years or until age 21 (whichever longer) |
| Carditis but no residual damage | 10 years |
| Carditis with residual valve damage | 10 years after last episode or at least 40 years |
| Severe valve disease | Lifelong |

**Regimens:**
- Penicillin G benzathine: 1.2 million units IM every 4 weeks
- OR penicillin V: 250 mg BID
- Alternative for penicillin allergy: Erythromycin or sulfadiazine

## Rheumatic Heart Disease

**Definition:**
- Permanent heart valve damage from rheumatic fever
- Most common cause of acquired heart disease worldwide

**Progression:**
- Chronic valve regurgitation
- Valve stenosis (narrowing) years later
- Heart failure
- Arrhythmias (especially atrial fibrillation)
- Increased stroke risk

**Surgical Intervention:**
- Valve repair when possible
- Mechanical valve replacement (requires lifelong anticoagulation)
- Bioprosthetic valve (may need replacement later)
- Commissurotomy for mitral stenosis

## Prevention

**Primary Prevention:**
- Prompt diagnosis and treatment of GAS pharyngitis
- Complete antibiotic course
- Avoid carriers of untreated strep

**Secondary Prevention:**
- Long-term antibiotic prophylaxis after RF
- Important even if asymptomatic
- Prevents disease recurrence and progression`,
      keyTerms: [
        { term: 'Group A Streptococcus', definition: 'Bacteria causing strep throat, triggers rheumatic fever', pronunciation: 'strep-toh-KOK-us' },
        { term: 'molecular mimicry', definition: 'When antibodies against germs attack similar-looking body tissues' },
        { term: 'Sydenham chorea', definition: 'Involuntary movements caused by rheumatic fever affecting the brain', pronunciation: 'ko-REE-ah' },
        { term: 'erythema marginatum', definition: 'Pink ring-shaped rash with clear centers seen in rheumatic fever', pronunciation: 'air-ih-THEE-mah mar-jin-ah-TAY-tum' },
        { term: 'subcutaneous nodules', definition: 'Small painless lumps under the skin over joints' },
        { term: 'rheumatic heart disease', definition: 'Permanent damage to heart valves from rheumatic fever' },
      ],
      analogies: [
        'Molecular mimicry is like a case of mistaken identity - antibodies meant for strep bacteria attack the heart because they look similar.',
        'Heart valves are like one-way doors - rheumatic fever can damage the hinges so they don\'t close properly.',
        'Secondary prophylaxis is like a security system - it keeps strep from coming back and causing more damage.',
      ],
      clinicalNotes: 'Patients with mitral stenosis from prior rheumatic fever are at risk for atrial fibrillation and systemic embolism. Anticoagulation indicated if AF develops or if left atrial thrombus present.',
    },

    3: {
      level: 3,
      summary: 'Rheumatic fever is a post-streptococcal autoimmune disease affecting heart, joints, CNS, and skin. Diagnosis uses modified Jones criteria. Treatment requires GAS eradication, anti-inflammatory therapy, and long-term secondary prophylaxis to prevent rheumatic heart disease progression.',
      explanation: `## Pathophysiology

**Streptococcal M Protein:**
- Rheumatogenic strains have specific M protein types (1, 3, 5, 6, 18, 19, 24)
- M protein shares epitopes with human proteins:
  - Myosin (heart muscle)
  - Laminin (heart valves)
  - Synovium (joints)
  - Neuronal cells (basal ganglia)

**Autoimmune Mechanism:**
1. GAS pharyngitis triggers antibody production
2. Cross-reactive antibodies bind to human tissues
3. T-cell mediated inflammation amplifies damage
4. Complement activation and cytokine release

**Genetic Predisposition:**
- HLA-DR2, HLA-DR4 associated with increased susceptibility
- HLA-DR7 may be protective
- Familial clustering suggests polygenic inheritance

## Jones Criteria (Revised 2015)

**Initial Attack - Low/Moderate Risk Population:**

*Diagnosis: 2 Major OR 1 Major + 2 Minor + Evidence of GAS*

**Major Criteria:**

| Criterion | Clinical Features |
|-----------|-------------------|
| Carditis | | New murmur (mitral or aortic regurgitation), | | Pericarditis, heart failure, cardiomegaly |
| Polyarthritis | Migratory, large joints, responds to aspirin |
| Chorea | Purposeless involuntary movements, emotional lability |
| Erythema marginatum | Serpiginous rash, non-pruritic, trunk/proximal limbs |
| Subcutaneous nodules | Firm, painless, over bony prominences |

**Minor Criteria:**

| Criterion | Clinical Features |
|-----------|-------------------|
| Clinical | Fever, arthralgia (if polyarthritis not present) |
| Labs | Elevated ESR/CRP, leukocytosis |
| ECG | Prolonged PR interval |

**Evidence of Preceding GAS Infection:**
- Positive throat culture or rapid antigen test
- Elevated or rising streptococcal antibody titer (ASO, anti-DNase B)
- Recent scarlet fever

**High-Risk Populations (Aboriginal, Pacific Islander, etc.):**
- Uses echocardiography for subclinical carditis diagnosis
- Lower threshold: 2 Major OR 1 Major + 1 Minor + GAS

## Cardiac Manifestations

**Rheumatic Carditis (50% of patients):**

*Acute Valvulitis:*
- Mitral regurgitation: Most common (90% of carditis)
- Aortic regurgitation: Second most common (30%)
- Tricuspid regurgitation: Usually secondary to pulmonary hypertension
- Rare: Pulmonic regurgitation

*Pathology:*
- Valve edema and inflammation
- Leaflet thickening
- Commissural fusion (later)
- Shortened, thickened chordae tendineae
- Fibrosis and calcification (chronic)

**Acute Carditis Findings:**
- Tachycardia out of proportion to fever
- Gallop rhythm (S3)
- Pericardial friction rub
- New regurgitant murmurs
- Cardiomegaly on CXR
- Heart failure signs

**Echocardiographic Criteria:**
- Pathologic MR: Jet length >1.5 cm, peak velocity >3 m/s
- Color Doppler: Moderate or severe regurgitation
- Valvular thickening >3 mm
- Left ventricular dilation
- Reduced ejection fraction

## Sydenham Chorea

**Pathophysiology:**
- Antibodies bind to caudate nucleus neurons
- Dopamine receptor dysfunction
- Basal ganglia inflammation

**Clinical Features:**
- Onset: 1-6 months after GAS infection (delayed)
- Movements: Purposeless, rapid, jerky
- Muscle weakness: "milkmaid's grip"
- Emotional: Labile mood, obsessive-compulsive behaviors
- Speech: Explosive, halting

**Diagnosis:**
- Clinical diagnosis
- Exclude other causes (Huntington, Wilson, drug-induced)
- ASO titers may be lower (longer latency)

**Treatment:**
- Mild: Observation, safety measures
- Moderate-severe: Haloperidol, valproic acid, carbamazepine
- Usually self-limited (months)

## Rheumatic Recurrence

**Risk Factors:**
- Previous rheumatic fever
- Inadequate antibiotic prophylaxis
- New GAS infection
- Younger age at first episode

**Recurrence Risks:**
- 10-20% without prophylaxis in first 5 years
- <1% with compliant prophylaxis
- Each recurrence increases cardiac damage

**Progression to RHD:**
- 60-70% develop RHD after carditis
- Worse with recurrent episodes
- Latent period: 10-20 years to symptomatic stenosis

## Differential Diagnosis

**Polyarthritis:**
- Juvenile idiopathic arthritis
- Septic arthritis
- Lyme disease
- Serum sickness
- Leukemia

**Carditis:**
- Viral myocarditis
- Infective endocarditis
- Kawasaki disease
- SLE (cardiac involvement)

**Chorea:**
- Huntington disease
- Wilson disease
- Drug-induced (levetiracetam, birth control pills)
- Systemic lupus erythematosus

## Treatment Protocol

**Phase 1: Eradicate GAS**

| Antibiotic | Dose | Duration |
|------------|------|----------|
| Penicillin G benzathine | 1.2M units IM (≤27 kg: 600k units) | Single dose |
| Penicillin V | 250 mg BID (children: 125 mg BID) | 10 days |
| Amoxicillin | 50 mg/kg/day divided BID | 10 days |

*Penicillin allergy:* Cephalexin, clindamycin, or azithromycin

**Phase 2: Anti-inflammatory**

*Aspirin Protocol:*
- Loading: 80-100 mg/kg/day divided q6h
- Maintain: 60-80 mg/kg/day until inflammation subsides
- Taper: Reduce by 25% every 1-2 weeks over 4-6 weeks
- Monitor: Salicylate levels, liver enzymes, tinnitus

*Corticosteroid Protocol (severe carditis):*
- Indication: Heart failure, severe carditis
- Prednisone: 1-2 mg/kg/day divided BID
- Duration: 2-3 weeks, then taper
- Add aspirin at end of taper

**Phase 3: Heart Failure Management**

- Diuretics (furosemide)
- ACE inhibitors (afterload reduction)
- Digoxin (caution - may increase AV block)
- Sodium restriction
- Activity restriction

## Secondary Prophylaxis

**Regimen Options:**

| Option | Dose | Duration | Notes |
|--------|------|----------|-------|
| Penicillin G benzathine | 1.2M units IM q4 weeks | Per risk category | Gold standard, best compliance |
| Penicillin V | 250 mg BID | Per risk category | Daily, good for compliant patients |
| Sulfadiazine | 1 g daily | Per risk category | Penicillin allergy |
| Erythromycin | 250 mg BID | Per risk category | Penicillin allergy |

**High-risk patients:** Consider every 3-week interval for penicillin G benzathine

**Duration by Category:**
- No carditis: 5 years or age 21 (longer)
- Carditis, no residual disease: 10 years
- Carditis, mild-moderate residual: 10 years or age 40
- Carditis, severe valve disease: Lifelong

**Special Situations:**
- Pregnancy: Safe to continue penicillin prophylaxis
- Minor procedures: No additional prophylaxis needed beyond regular regimen
- Major procedures: Consider additional periprocedural antibiotics

## Rheumatic Heart Disease Management

**Medical Management:**
- Diuretics for volume overload
- ACE inhibitors for afterload reduction
- Beta-blockers for rate control if AF
- Anticoagulation for AF or systemic embolism
- Endocarditis prophylaxis: Per current AHA guidelines

**Surgical Indications:**
- Symptomatic severe mitral regurgitation
- Symptomatic mitral stenosis (valve area <1 cm²)
- Symptomatic aortic regurgitation with LV dysfunction

**Surgical Options:**
- Mitral valve repair (commissurotomy, annuloplasty)
- Mitral valve replacement
- Mechanical vs. bioprosthetic choice
- Combined procedures if multiple valves affected

**Pregnancy in RHD:**
- Pre-conception cardiac evaluation
- High-risk if NYHA class III-IV
- Epidural recommended for vaginal delivery
- Cesarean for obstetric indications or severe cardiac compromise`,
      keyTerms: [
        { term: 'rheumatogenic', definition: 'Capable of causing rheumatic fever; specific strains of Group A Strep' },
        { term: 'epitope', definition: 'Part of an antigen that antibodies recognize; cross-reactive epitopes cause autoimmunity in RF' },
        { term: 'commissural fusion', definition: 'Sticking together of valve leaflets at their edges; leads to stenosis' },
        { term: 'milkmaid\'s grip', definition: 'Characteristic weak, alternating hand grip seen in Sydenham chorea' },
        { term: 'NYHA class', definition: 'New York Heart Association functional classification of heart failure symptoms' },
      ],
      clinicalNotes: 'Per 2020 AHA guidelines, infective endocarditis prophylaxis is NOT routinely recommended for patients with rheumatic heart disease undergoing dental procedures. Reserve only for highest risk: prosthetic valves, previous endocarditis, or cyanotic congenital heart disease.',
    },

    4: {
      level: 4,
      summary: 'Advanced management of rheumatic fever requires understanding of molecular mimicry, refined Jones criteria application, echocardiographic surveillance, evidence-based anti-inflammatory regimens, individualized secondary prophylaxis, and surgical timing for rheumatic heart disease.',
      explanation: `## Advanced Immunopathogenesis

**M Protein Cross-reactivity:**

*Rheumatogenic vs. Non-rheumatogenic Strains:*
- Rheumatogenic: M types 1, 3, 5, 6, 18, 19, 24, 27
- Non-rheumatogenic: M types 2, 4, 12
- Surface-exposed epitopes: B-cell targets
- Hidden epitopes: T-cell targets

*Human Tissue Cross-reactivity:*

| Streptococcal Antigen | Human Tissue Homolog | Clinical Effect |
|-----------------------|---------------------|-----------------|
| M5 protein | Cardiac myosin | Myocarditis |
| M6 protein | tropomyosin | Valve damage |
| Group A carbohydrate | Heart valve glycoprotein | Valvulitis |
| N-acetyl-beta-D-glucosamine | Neuronal cells | Chorea |

**Cytokine Cascade:**
- TNF-α, IL-1, IL-6: Drive inflammation
- IFN-γ: T-cell activation
- IL-17: Associated with rheumatic carditis severity

**Complement Activation:**
- Deposition in valve tissue
- Membrane attack complex formation
- Neutrophil recruitment and damage

## Refined Diagnostic Approach

**Modified Jones Criteria (2015 AHA):**

*Population Risk Stratification:*
- Low/moderate risk: <2/100,000 school-age children
- High risk: Aboriginal, Maori, Pacific Islander populations

*Diagnostic Thresholds:*

| Population | Carditis on Echo | Diagnostic Criteria |
|------------|------------------|---------------------|
| Low/moderate | No | 2 Major OR 1 Major + 2 Minor |
| Low/moderate | Yes | 1 Major + 1 Minor (subclinical) |
| High risk | No | 2 Major OR 1 Major + 2 Minor |
| High risk | Yes | 1 Major + 1 Minor OR 2 Minor |

**Echocardiographic Diagnosis of Subclinical Carditis:**

*Revised Criteria (World Heart Federation):*

| Finding | Normal | Abnormal |
|---------|--------|----------|
| MR jet length | <1.5 cm | ≥1.5 cm |
| MR peak velocity | <2.5 m/s | >2.5-2.9 m/s |
| Severe MR criteria | - | Jet >3 cm, peak velocity >3 m/s |
| Anterior mitral leaflet thickness | <3 mm | ≥3 mm |
| Aortic regurgitation | Trace/none | Moderate or severe |

**Antibody Testing:**

| Test | Indication | Interpretation |
|------|------------|----------------|
| ASO titer | Recent GAS (1-4 weeks) | >200 Todd units (children), >240 (adults) |
| Anti-DNase B | Recent GAS (1-6 weeks) | >240 Todd units (children), >320 (adults) |
| Streptozyme | Screen for multiple antibodies | Any significant elevation |

*Rising titers* more specific than single value

## Anti-inflammatory Therapy Evidence

**Corticosteroids vs. Aspirin:**

*Meta-analysis findings:*
- Steroids: Faster symptom resolution
- Steroids: No difference in long-term cardiac outcomes
- Aspirin: Equivalent outcomes at 1 year
- Current consensus: Reserve steroids for severe carditis

**Prednisone Protocol (Severe Carditis):**

| Weight | Dose | Duration |
|--------|------|----------|
| <20 kg | 1 mg/kg/day divided BID | 2-3 weeks |
| ≥20 kg | 40-60 mg/day divided BID | 2-3 weeks |

*Tapering:*
- Reduce by 25% weekly over 4-6 weeks
- Add aspirin (80 mg/kg/day) at end of steroid taper
- Continue aspirin for additional 4-6 weeks

**IVIG Evidence:**
- Limited data, conflicting results
- Some studies: Reduced cardiac involvement
- Not routinely recommended
- Consider in refractory cases

**Biologic Agents:**
- Case reports: Anti-TNF agents for refractory carditis
- No RCT evidence
- Consider in life-threatening carditis unresponsive to standard therapy

## Echocardiographic Surveillance

**Timing of Studies:**

| Timing | Indication |
|--------|-------------|
| Diagnosis | Baseline assessment |
| 4-6 weeks | Reassessment if initial carditis |
| 6-12 months | Document resolution or progression |
| Yearly | For patients with established RHD |
| Pre-conception | Women of childbearing age with RHD |

**Assessment Components:**

*Valve Morphology:*
- Leaflet thickness
- Commissural fusion
- Subvalvular apparatus
- Calcification (chronic disease)

*Hemodynamics:*
- Regurgitant jet characteristics
- Stenosis severity (gradient, valve area)
- Chamber sizes
- Systolic function (LVEF)
- Pulmonary hypertension

**3D Echocardiography:**
- Better valve anatomy assessment
- Surgical planning
- Not yet standard of care

## Secondary Prophylaxis Optimization

**Penicillin G Benzathine:**

| Population | Dose | Interval |
|------------|------|----------|
| ≤27 kg | 600,000 units | Every 4 weeks |
| >27 kg | 1.2 million units | Every 4 weeks |
| High recurrence risk | 1.2 million units | Every 3 weeks |

*Injection Pain Management:*
- Mix with lidocaine (1:1 ratio)
- Use Z-track technique
- Alternate injection sites
- Consider oral regimen if injections not tolerated

**Penicillin Allergy Management:**

*True allergy (anaphylaxis, urticaria, angioedema):*
- Sulfadiazine: 1 g daily (children: 500 mg daily)
- OR erythromycin: 250 mg BID (children: 125 mg BID)

*Skin testing and desensitization:*
- Consider for patients requiring long-term prophylaxis
- Graded oral challenge may be appropriate
- Penicillin remains preferred agent

## Rheumatic Heart Disease Classification

**WHF Echo Classification (2012):**

| Category | Criteria |
|----------|----------|
| Borderline RHD | Morphologic feature AND Doppler feature (not both pathologic) |
| Definite RHD | Pathologic MR plus morphologic feature, OR MS, OR combined MR+AR |
| Severe RHD | Any of: MR jet length >2 cm, severe AR, LVEF <50%, severe MS |

**Morphologic Features:**
- Anterior mitral leaflet thickening ≥3 mm
- Chordal thickening
- Restricted leaflet motion

**Doppler Features:**
- MR jet length ≥1.5 cm
- MR peak velocity >2.5 m/s
- MR seen in two views
- AR jet length ≥1 cm

## Surgical Timing and Outcomes

**Mitral Valve Disease:**

*Mitral Regurgitation:*
- Asymptomatic, LVEF >60%, LVESD <40 mm: Medical management
- Symptomatic OR LVEF 50-60% OR LVESD 40-45 mm: Surgery indicated
- Emergency surgery for acute severe MR with pulmonary edema

*Mitral Stenosis:*
- Valve area >1.5 cm²: Medical management
- Valve area 1-1.5 cm² + symptoms: Consider intervention
- Valve area <1 cm²: Intervention indicated
- Commissurotomy: For pliable valves without calcification
- Valve replacement: For heavily calcified valves

**Aortic Valve Disease:**
- Similar thresholds to mitral disease
- Earlier intervention often needed (more rapid progression)

**Surgical Outcomes:**

| Procedure | 10-year Survival | Complications |
|-----------|------------------|---------------|
| Mitral repair | 85-90% | Recurrent MR (10-20%) |
| Mitral replacement (mechanical) | 80-85% | Anticoagulation required, thrombosis risk |
| Mitral replacement (bioprosthetic) | 70-75% | Structural valve deterioration (10-15 years) |
| Commissurotomy | 70-80% | Restenosis (30-50% at 10 years) |

**Pregnancy Considerations:**
- Mitral stenosis: High-risk if valve area <1.5 cm²
- Severe MR: Usually well-tolerated if NYHA I-II
- Aortic stenosis: Very high risk if severe
- Pre-conception intervention recommended for moderate-severe RHD`,
      keyTerms: [
        { term: 'subclinical carditis', definition: 'Echocardiographic evidence of valvulitis without clinical signs (murmur, heart failure)' },
        { term: 'commissurotomy', definition: 'Surgical procedure to open fused valve commissures; used for mitral stenosis' },
        { term: 'WHF', definition: 'World Heart Federation; developed standardized echocardiographic criteria for RHD diagnosis' },
        { term: 'graded oral challenge', definition: 'Stepwise administration of drug to test for tolerance; used for penicillin allergy assessment' },
      ],
      clinicalNotes: 'Pregnant women with moderate-severe mitral stenosis (valve area <1.5 cm²) have high risk of pulmonary edema. Pre-conception balloon mitral valvuloplasty recommended if valve suitable.',
    },

    5: {
      level: 5,
      summary: 'Expert management integrates molecular pathogenesis understanding, refined diagnostic criteria, personalized anti-inflammatory regimens, optimized secondary prophylaxis strategies, advanced imaging surveillance, and evidence-based surgical decision making for rheumatic heart disease.',
      explanation: `## Molecular Frontiers

**Proteomic Discovery:**

*Autoantigens Identified:*
- Cardiac myosin: Primary target
- Vimentin: Valve interstitial cells
- Collagen: Valve structural protein
- Enolase: Neuronal target (chorea)

*Autoantibody Profiles:*
- Anti-myosin antibodies: Correlate with carditis severity
- Anti-endothelial cell antibodies: Predict coronary involvement
- Anti-neuronal antibodies (caudate): Present in chorea

**Genetic Susceptibility Loci:**

*GWAS Findings:*
- HLA-DRB1*07: Protective (OR 0.4)
- HLA-DRB1*01: Risk (OR 2.5)
- HLA-DQA1, HLA-DQB1: Risk variants
- TNF-α promoter polymorphisms: Higher TNF levels
- IL-1RA, IL-6 gene variants: Modulate inflammation

**Epigenetic Factors:**
- MicroRNA profiling: miR-146a, miR-155 dysregulated
- DNA methylation changes in immune cells
- Environmental influences on gene expression

## Precision Prophylaxis

**Pharmacogenomic Considerations:**

*Penicillin Metabolism:*
- No significant pharmacogenomic variation
- Allergic reactions: IgE-mediated (genetic predisposition)
- HLA-B*55:01: Associated with penicillin allergy

**Penicillin Allergy Management:**

*Evaluation Algorithm:*
1. Detailed allergy history
2. Immediate vs. delayed reaction
3. Skin testing if history unclear
4. Graded challenge if skin test negative
5. Desensitization if positive

*Penicillin Skin Testing:*
- Sensitivity: >95% for immediate reactions
- Negative predictive value: >97%
- Pre-pen penicilloyl for major determinant
- Penicillin G for minor determinant

*Desensitization Protocol:*
- Oral protocol preferred (safer)
- Escalating doses over 4-6 hours
- observation period post-procedure
- Daily dosing maintains desensitized state

## Advanced Cardiac Imaging

**Cardiac MRI in RHD:**

*Indications:*
- Suboptimal echo windows
- Quantification of regurgitant fraction
- Myocardial fibrosis assessment
- Surgical planning

*Techniques:*
- Phase-contrast flow: Quantify regurgitation
- Late gadolinium enhancement: Myocardial fibrosis
- T1 mapping: Diffuse fibrosis
- 4D flow: Complex flow patterns

**CT Coronary Angiography:**
- Pre-operative assessment in adults
- Coronary artery anatomy for surgical planning
- Calcium scoring for valve assessment

**Strain Imaging:**
- Global longitudinal strain (GLS)
- Detects subclinical dysfunction
- Prognostic value in RHD
- May guide timing of intervention

## Controversies and Evolving Practice

**Anti-inflammatory Regimens:**

*Steroid Efficacy Debate:*
- Historical: Studies showed no benefit
- Modern: Re-analysis suggests benefit in severe carditis
- Current consensus: Individualized to severity
- Ongoing trials: DEFINITE RHD trial

**IVIG Evidence:**
- Small RCTs: Reduced cardiac involvement
- Mechanism unclear
- Cost-benefit analysis unfavorable
- Reserve for refractory cases

**Biologics:**
- Anakinra (IL-1 blockade): Case reports of success
- TNF-α inhibitors: Limited evidence
- Rituximab (B-cell depletion): Experimental
- JAK inhibitors: Theoretical, no trials

**Aspirin Dosing:**
- Traditional: High-dose (80-100 mg/kg/day)
- Emerging: Moderate dose (30-50 mg/kg/day)
- Rationale: Fewer side effects, equivalent efficacy
- Monitoring: Salicylate levels not routinely needed

## Global Health Perspective

**RHD Burden:**
- 33 million affected worldwide
- 275,000 deaths annually
- 95% in low- and middle-income countries
- WHO targets: 25% reduction by 2025

**Primary Prevention Barriers:**
- Limited access to healthcare
- Cost of antibiotics
- Cultural beliefs about sore throats
- Competing health priorities

**Secondary Prevention Challenges:**
- Injection adherence
- Supply chain reliability
- Healthcare infrastructure
- Transition to adult care

**Screening Programs:**
- Echocardiographic screening in endemic areas
- School-based programs
- Portable echocardiography
- Telemedicine for remote areas

## Surgical Controversies

**Valve Repair vs. Replacement:**

*Mitral Valve Repair:*
- Advantages: No anticoagulation, better durability, preserved LV function
- Techniques: Annuloplasty, chordal reconstruction, commissurotomy
- Success rate: 70-90% in experienced centers
- Best for: Flexible, non-calcified valves

*Valve Replacement:*
- Mechanical: Excellent durability, anticoagulation required
- Bioprosthetic: No anticoagulation, limited durability
- Ross procedure (pulmonary autograft): Selected patients

**Percutaneous Interventions:**

*Mitral Balloon Valvulotomy:*
- Indication: Symptomatic mitral stenosis
- Wilkins score predicts success
- Complications: MR (5-10%), cardiac tamponade (1-2%)
- Pregnancy: Safe in 2nd trimester

*Transcatheter Valve-in-Valve:*
- Emerging for failed bioprostheses
- Limited data in RHD population
- Future direction

## Pregnancy and RHD

**Risk Stratification:**

| Lesion | Pregnancy Risk | Management |
|--------|----------------|------------|
| Normal/mild RHD | Low | Routine obstetric care |
| Moderate MR | Moderate | Close monitoring, diuretics PRN |
| Severe MR | High | Pre-conception repair if symptomatic |
| MS >1.5 cm² | Moderate | Beta-blockers, diuretics |
| MS <1.5 cm² | High | Pre-conception BMV recommended |
| Severe AR | Moderate | Well-tolerated if LV function normal |
| Severe AS | Very high | Pre-conception intervention |

**Management Principles:**
- Pre-conception cardiac evaluation
- Multidisciplinary team (cardiology, maternal-fetal medicine)
- Serial echocardiograms each trimester
- Vaginal delivery preferred for most
- Epidural recommended (reduces cardiac stress)
- Endocarditis prophylaxis per current guidelines

## Long-term Outcomes

**Natural History:**

*Uncomplicated RF (no carditis):*
- Excellent prognosis
- No long-term cardiac sequelae
- Standard prophylaxis duration

*Carditis with Resolution:*
- Good prognosis
- Low risk of progression (10-15%)
- Extended prophylaxis

*Established RHD:*
- Variable prognosis
- 60% progress over 20 years
- Surgery often required
- Life expectancy reduced with severe disease

**Predictors of Poor Outcome:**
- Multiple recurrences
- Severe carditis at presentation
- Persistent echocardiographic abnormalities
- Younger age at onset
- Male sex
- Inadequate prophylaxis

**Quality of Life:**
- Most patients lead normal lives with mild RHD
- Exercise restrictions only for severe disease
- Pregnancy possible in most with proper care
- Antibiotic prophylaxis: Minimal impact on quality of life`,
      keyTerms: [
        { term: 'proteomic', definition: 'Study of proteins and their functions; used to identify autoantigens in RF' },
        { term: 'GWAS', definition: 'Genome-wide association studies; identify genetic variants associated with disease risk' },
        { term: 'Wilkins score', definition: 'Echocardiographic scoring system predicting success of mitral balloon valvulotomy' },
        { term: 'pre-pen penicilloyl', definition: 'Major determinant skin testing reagent for penicillin allergy evaluation' },
      ],
      clinicalNotes: `Expert Practice Pearls:

1. **Diagnosis:** Use echocardiography liberally in high-risk populations. Subclinical carditis meets diagnostic criteria in 2015 guidelines.

2. **Allergy Management:** Most "penicillin allergies" are not true allergies. Formal evaluation (skin testing, challenge) enables optimal prophylaxis.

3. **Pregnancy Planning:** Women with RHD should have pre-conception cardiac assessment. Moderate-severe mitral stenosis (<1.5 cm²) should be addressed before pregnancy.

4. **Surgical Timing:** Refer for valve surgery before irreversible LV dysfunction. Don't wait for symptoms to develop if echo parameters worsen.

5. **Prophylaxis Duration:** Individualize based on cardiac status, not fixed duration. Lifelong prophylaxis for severe valve disease is reasonable.

6. **Global Health:** RHD remains a major cause of cardiovascular morbidity in developing countries. Primary prevention (treating strep throat) remains the most cost-effective intervention.`,
    },
  },

  media: [
    {
      id: 'jones-criteria-flowchart',
      type: 'diagram',
      filename: 'jones-criteria-flowchart.svg',
      title: 'Jones Criteria Diagnostic Flowchart',
      description: 'Algorithm for diagnosing rheumatic fever using Jones criteria',
    },
    {
      id: 'rheumatic-valve-pathology',
      type: 'diagram',
      filename: 'rheumatic-valve-pathology.svg',
      title: 'Rheumatic Heart Valve Pathology',
      description: 'Changes to mitral valve in rheumatic heart disease',
    },
  ],

  citations: [
    {
      id: 'aha-rf-guidelines-2015',
      type: 'article',
      title: 'Guidelines for the Diagnosis of Rheumatic Fever: Jones Criteria, 2015 Update',
      authors: ['Gerber, M.A.', 'Baltimore, R.S.', 'Chambers, H.F.', 'et al.'],
      source: 'Circulation',
      url: 'https://doi.org/10.1161/CIR.0000000000000205',
      accessedDate: '2026-01-26',
    },
    {
      id: 'whf-rhd-echo-criteria-2012',
      type: 'article',
      title: 'The World Heart Federation Criteria for Echocardiographic Diagnosis of Rheumatic Heart Disease',
      authors: ['Remenyi, B.', 'Wilson, N.', 'Steer, A.', 'et al.'],
      source: 'Nature Reviews Cardiology',
      url: 'https://doi.org/10.1038/nrcardio.2012.174',
      accessedDate: '2026-01-26',
    },
    {
      id: 'aha-endocarditis-guidelines-2020',
      type: 'article',
      title: '2020 AHA Guideline for the Management of Patients With Valvular Heart Disease',
      authors: ['Otto, C.M.', 'Nishimura, R.A.', 'Bonow, R.O.', 'et al.'],
      source: 'Circulation',
      url: 'https://doi.org/10.1161/CIR.0000000000000923',
      accessedDate: '2026-01-26',
    },
  ],

  crossReferences: [
    { targetId: 'system-cardiovascular', targetType: 'system', relationship: 'related', label: 'Cardiovascular System' },
    { targetId: 'system-immune', targetType: 'system', relationship: 'related', label: 'Immune System' },
    { targetId: 'condition-strep-pharyngitis', targetType: 'condition', relationship: 'related', label: 'Strep Pharyngitis' },
  ],

  tags: {
    systems: ['cardiovascular', 'immune', 'nervous'],
    topics: ['pediatrics', 'autoimmune disease', 'infectious disease', 'valvular heart disease'],
    keywords: ['rheumatic fever', 'rheumatic heart disease', 'Jones criteria', 'Sydenham chorea', 'mitral stenosis', 'penicillin prophylaxis'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['pediatrics', 'medicine', 'family-medicine'],
    },
  },

  createdAt: '2026-01-26T00:00:00.000Z',
  updatedAt: '2026-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default rheumaticFever;
