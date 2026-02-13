/**
 * Infectious Emergencies
 *
 * Covers sepsis, meningitis, encephalitis, pneumonia, and other
 * severe infections requiring immediate intervention.
 */

import { EducationalContent } from '../types';

export const infectiousEmergenciesContent: EducationalContent = {
  id: 'emergency-infectious',
  type: 'topic',
  name: 'Infectious Emergencies',
  nameEs: 'Emergencias Infecciosas',
  alternateNames: ['Sepsis', 'Severe Infection', 'Sepsis Emergency', 'Infection Emergency'],

  levels: {
    1: {
      level: 1,
      summary: 'Infectious emergencies happen when harmful germs invade the body and cause a severe reaction called sepsis, which can be deadly if not treated quickly with antibiotics and other medical care.',
      explanation: `Your body fights germs every day. Your immune system works hard to protect you from bacteria, viruses, and fungi. But sometimes, germs are so strong or spread so quickly that the body cannot fight them alone. This is an infectious emergency.

**What is Sepsis?**

Sepsis is the body's overwhelming response to infection. Think of it like your body's alarm system going into overdrive - so much that it starts causing harm itself instead of just fighting the germs.

When someone has sepsis:
- The infection spreads through the body
- The immune system reacts too strongly
- Blood pressure drops dangerously low
- Organs don't get enough blood
- Without treatment, organs can fail

**Sepsis is a Medical Emergency**

Sepsis is just as dangerous as a heart attack or stroke. Every hour without treatment increases the risk of death.

**Types of Severe Infections:**

**Blood Infection (Sepsis from Bacteremia):**
- Bacteria enter the bloodstream
- Can come from any infection (pneumonia, urinary, skin, abdomen)
- Causes fever, rapid heartbeat, low blood pressure
- Can lead to septic shock (life-threatening)

**Meningitis:**
- Infection of the tissues covering the brain and spinal cord
- Causes severe headache, stiff neck, fever, confusion
- Can be caused by bacteria or viruses
- Bacterial meningitis is very dangerous
- Can cause permanent brain damage or death

**Severe Pneumonia:**
- Infection deep in the lungs
- Causes severe difficulty breathing
- Can lead to respiratory failure
- Body may not get enough oxygen

**Skin and Soft Tissue Infections:**
- Cellulitis: Spreading redness, warmth, swelling
- Necrotizing fasciitis: "Flesh-eating bacteria" - very rare but deadly
- Red streaks moving toward the center of the body
- Hot, painful, rapidly spreading

**Sepsis Warning Signs - Remember TIME:**

**T - Temperature:**
- Fever higher than 101°F (38.3°C)
- OR temperature lower than 96.8°F (36°C)

**I - Infection:**
- Signs of infection (cough, painful urination, red skin)
- You may already know you have an infection

**M - Mental Decline:**
- Confusion, difficulty thinking clearly
- Acting differently than usual (especially in elderly)

**E - Extremely Ill:**
- Feeling like you might die
- Severe weakness, extreme shortness of breath

**Who is at Risk?**

Anyone can get sepsis, but some people are at higher risk:
- Babies and young children
- Elderly people (65+)
- People with weakened immune systems (cancer, HIV, transplant)
- People with chronic diseases (diabetes, lung disease, kidney disease)
- Very young or very old

**How Doctors Help:**

**Antibiotics:**
- Powerful medicines that kill bacteria
- Given directly into the bloodstream (IV)
- Must be started as soon as possible (within 1 hour)

**IV Fluids:**
- Large amounts of fluids given through a vein
- Help raise blood pressure
- Replace fluids lost from fever and leaky blood vessels

**Medicines to Support Blood Pressure:**
- Drugs that tighten blood vessels
- Help keep blood flowing to organs

**Oxygen:**
- Extra oxygen if needed
- Helps organs get enough oxygen

**Treating the Source:**
- Drain infected areas
- Remove infected medical devices
- Sometimes surgery to clean out infection

**Prevention:**

**For You:**
- Wash your hands often with soap and water
- Keep cuts and wounds clean and covered
- Get recommended vaccines (flu, pneumonia, others)
- Take antibiotics exactly as prescribed (never save for later)
- Manage chronic conditions well

**For Others:**
- Don't visit sick people if you're sick
- Cover coughs and sneezes
- Stay home when you're contagious

Remember: Sepsis kills more than 250,000 Americans each year. But early recognition and treatment can save lives. If you have an infection and feel like you're getting much worse, especially if you're confused or having trouble breathing, seek emergency care immediately.`,
      keyTerms: [
        { term: 'sepsis', definition: 'Life-threatening response to infection; can cause organ failure and death' },
        { term: 'bacteria', definition: 'Tiny living organisms that can cause infection; treated with antibiotics' },
        { term: 'antibiotics', definition: 'Medicines that kill bacteria or stop them from growing' },
        { term: 'meningitis', definition: 'Infection of the protective tissues covering the brain and spinal cord' },
        { term: 'septic shock', definition: 'Severe sepsis with dangerously low blood pressure; life-threatening' },
        { term: 'IV', definition: 'Into a vein; describes medicines and fluids given directly into bloodstream' },
      ],
      analogies: [
        'Sepsis is like a forest fire that spreads too fast for the firefighters (your immune system) to control.',
        'Your immune system is like an army - when faced with too many enemies, it can get overwhelmed and cause chaos.',
        'Think of sepsis like your car\'s overheating warning - when the engine (your body) works too hard, it can damage itself.',
      ],
      examples: [
        'An elderly person with a urinary tract infection suddenly becomes confused and their blood pressure drops.',
        'Someone with pneumonia gets much worse and needs help breathing.',
        'A person with a red, swollen leg that\'s hot to touch and has red streaks going up toward the body.',
      ],
    },
    2: {
      level: 2,
      summary: 'Sepsis is a life-threatening organ dysfunction caused by a dysregulated host response to infection, requiring rapid recognition, early administration of broad-spectrum antibiotics, aggressive fluid resuscitation, and source control to prevent progression to septic shock and death.',
      explanation: `## Understanding Sepsis

**Definition:**
Sepsis is life-threatening organ dysfunction caused by a dysregulated host response to infection. Previously defined as SIRS (Systemic Inflammatory Response Syndrome) with suspected infection, current definitions focus on organ dysfunction.

**Septic Shock:**
Sepsis with persisting hypotension requiring vasopressors to maintain MAP ≥65 mmHg AND having a serum lactate level >2 mmol/L (18 mg/dL) despite adequate volume resuscitation.

**Sepsis: The Timeline:**
- Infection → Immune response → Systemic inflammation → Organ dysfunction → Shock → Death
- Each hour without effective treatment increases mortality by 7-8%
- This is why the "sepsis bundle" must be started quickly

**SIRS Criteria (Older, Still Useful):**
Two or more of:
- Temperature >38°C (100.4°F) or <36°C (96.8°F)
- Heart rate >90 beats/minute
- Respiratory rate >20 or PaCO2 <32 mmHg
- WBC >12,000 or <4,000 or >10% bands

**qSOFA Score (Quick SOFA):**
One point each for:
- Respiratory rate ≥22
- Altered mental status
- Systolic blood pressure ≤100

Score ≥2: Associated with poor outcome

## Sources of Sepsis

**Common Infection Sources:**

| Source | Percentage | Typical Pathogens |
|--------|------------|-------------------|
| Lung (pneumonia) | 35-40% | S. pneumoniae, H. influenzae, gram-negative |
| Abdominal | 20-25% | E. coli, Bacteroides, Enterococcus |
| Urinary tract | 10-15% | E. coli, Klebsiella, Pseudomonas |
| Skin/soft tissue | 10-15% | Staph aureus (including MRSA), Streptococcus |
| Bloodstream (primary) | 10% | S. aureus, Coagulase-negative staph |
| Unknown | 15-20% | - |

**High-Risk Pathogens:**
- MRSA (Methicillin-resistant S. aureus)
- Pseudomonas aeruginosa
- Extended-spectrum beta-lactamase (ESBL) producers
- Carbapenem-resistant Enterobacteriaceae (CRE)
- Candida species (fungi)

## Clinical Presentation

**Early Signs:**
- Fever, chills
- Rapid heartbeat (>90 bpm)
- Rapid breathing (>20/min)
- Confusion or altered mental status
- Feeling very ill or "worst ever"

**Progression to Septic Shock:**
- Falling blood pressure
- Cool, pale extremities (poor perfusion)
- Decreased urine output
- Mottled skin
- Altered consciousness

**Organ Dysfunction:**
- Lungs: Hypoxia, ARDS
- Kidneys: AKI, oliguria
- Brain: Encephalopathy, confusion
- Heart: Myocardial depression
- Liver: Elevated LFTs, coagulopathy
- Blood: DIC (disseminated intravascular coagulation)

## Emergency Management

**The 1-Hour Sepsis Bundle (Surviving Sepsis Campaign):**

1. **Measure lactate** (and remeasure if initial >2 mmol/L)
2. **Obtain blood cultures** before antibiotics
3. **Administer broad-spectrum antibiotics** (within 1 hour)
4. **Begin rapid fluid resuscitation** (30 mL/kg crystalloid for hypotension or lactate ≥4)
5. **Apply vasopressors** if hypotensive despite fluids (target MAP ≥65)
6. **Reassess frequently** (lactate, vitals, urine output)

**Antibiotic Selection (Empiric):**

**Community-acquired (no special risk factors):**
- Ceftriaxone + azithromycin OR
- Levofloxacin or moxifloxacin
- Add vancomycin if high MRSA risk

**Healthcare-associated or immunocompromised:**
- Piperacillin-tazobactam OR
- Meropenem
- Add vancomycin (MRSA coverage)

**Specific Considerations:**
- Neutropenic: Add antifungal coverage
- IV drug use: Cover for S. aureus
- Intra-abdominal: Cover anaerobes
- Urinary source: Cover for Pseudomonas if recent instrumentation

**Fluid Resuscitation:**
- Crystalloids: Lactated Ringer's or normal saline
- Initial bolus: 30 mL/kg (approximately 2 liters for average adult)
- Reassess after each bolus
- Consider dynamic measures (stroke volume variation, passive leg raise) to guide further fluids
- Avoid excessive fluids (associated with worse outcomes)

**Vasopressors:**
- Norepinephrine: First-line
- Vasopressin: Can be added
- Epinephrine: Second-line
- Dopamine: Alternative in selected patients
- Phenylephrine: Only if arrhythmias with other agents

**Source Control:**
- Drain abscesses
- Remove infected lines/devices
- Debride infected tissue
- Operative intervention for perforated viscus
- Should be accomplished as soon as possible (ideally within 12 hours)

## Other Infectious Emergencies

**Meningitis:**
- Fever, headache, stiff neck, photophobia, altered mental status
- Kernig sign: Pain on knee extension with hip flexed
- Brudzinski sign: Involuntary hip flexion with neck flexion
- Emergent LP + blood cultures
- Empiric antibiotics: Ceftriaxone + vancomycin + ampicillin (>50 years for Listeria)
- Steroids before antibiotics if pneumococcal suspected

**Encephalitis:**
- Brain tissue inflammation (vs meningeal inflammation)
- Viral most common (HSV, West Nile, arboviruses)
- HSV: Acyclovir emergently (don't wait for confirmation)
- Autoimmune encephalitis increasingly recognized

**Severe Pneumonia:**
- Respiratory failure, sepsis
- Community-acquired: Ceftriaxone + azithromycin or respiratory fluoroquinolone
- Healthcare-associated: Vancomycin + piperacillin-tazobactam or carbapenem
- Consider aspiration pneumonia (anaerobic coverage)

**Necrotizing Fasciitis:**
- Rapidly progressive soft tissue infection
- Pain out of proportion to exam
- Crepitus, bullae, skin necrosis
- Surgical debridement emergent
- Broad antibiotics: Vancomycin + pipercillin-tazobactam + clindamycin

**Infective Endocarditis:**
- Fever + new murmur + embolic phenomena
- Duke criteria for diagnosis
- Blood cultures (3 sets from different sites)
- Echocardiography: TTE first, TEE if negative but high suspicion

**Clostridioides difficile Infection:**
- Healthcare-associated diarrhea
- Abdominal pain, leukocytosis, AKI
- Oral vancomycin or fidaxomicin
- Metronidazole only for mild cases

**Key Red Flags:**

**For Sepsis:**
- Infection + hypotension
- Infection + confusion
- Infection + lactate >2

**For Meningitis:**
- Fever + headache + stiff neck
- Fever + confusion
- Fever + seizure

**For Necrotizing Fasciitis:**
- Severe pain with minimal findings
- Rapid progression
- Crepitus, bullae, skin changes

**For Endocarditis:**
- Fever + new murmur
- Fever + embolic signs (stroke, Janeway lesions, splinter hemorrhages)`,
      keyTerms: [
        { term: 'sepsis', definition: 'Life-threatening organ dysfunction from dysregulated host response to infection' },
        { term: 'septic shock', definition: 'Sepsis with hypotension despite fluids and lactate >2' },
        { term: 'lactate', definition: 'Blood marker of tissue hypoperfusion; elevated in shock states' },
        { term: 'SIRS', definition: 'Systemic Inflammatory Response Syndrome; old sepsis definition, still useful' },
        { term: 'qSOFA', definition: 'Quick SOFA score; 3-point bedside sepsis screen' },
        { term: 'empiric antibiotics', definition: 'Best-guess antibiotic choice before organism identified' },
        { term: 'source control', definition: 'Draining infection or removing infected tissue/devices' },
        { term: 'MAP', definition: 'Mean Arterial Pressure; target ≥65 in septic shock' },
      ],
      analogies: [
        'Sepsis is like a factory strike where workers (immune cells) become so angry they destroy the factory they\'re supposed to protect.',
        'Source control is like turning off a broken faucet - you need to stop the leak before you can clean up the mess.',
      ],
    },
    3: {
      level: 3,
      summary: 'Infectious emergencies require rapid integration of clinical suspicion, laboratory and imaging diagnostics, broad-spectrum antimicrobial therapy, aggressive resuscitation, and source control to address life-threatening infections and prevent multi-organ dysfunction.',
      explanation: `## Sepsis Pathophysiology and Management

**Current Definitions (Sepsis-3):**

**Sepsis:**
- Life-threatening organ dysfunction caused by dysregulated host response to infection
- Organ dysfunction defined as increase in SOFA score ≥2

**Septic Shock:**
- Sepsis with persisting hypotension requiring vasopressors to maintain MAP ≥65 mmHg
- Serum lactate >2 mmol/L (18 mg/dL) despite adequate volume resuscitation

**Sepsis-induced Organ Dysfunction:**

| Organ System | Dysfunction Markers |
|--------------|---------------------|
| Cardiovascular | Hypotension, need for vasopressors |
| Respiratory | PaO2/FiO2 <300, need for mechanical ventilation |
| Renal | Creatinine ≥2.0, urine output <0.5 mL/kg/hr |
| Hepatic | Bilirubin >2 mg/dL, transaminases elevated |
| Hematologic | Platelets <100,000, INR prolonged |
| Neurologic | GCS decrease, confusion |
| Metabolic | Lactate >2, pH <7.4 |

**Pathophysiology:**

**Initial Phase (Hyperinflammatory):**
- Pathogen-associated molecular patterns (PAMPs) activate immune system
- Cytokine storm (TNF-alpha, IL-1, IL-6)
- Endothelial activation → capillary leak
- Complement activation
- Coagulation activation

**Immunosuppressive Phase (Later):**
- Lymphocyte apoptosis
- Monocyte deactivation
- Increased risk of secondary infections

**Metabolic Derangements:**
- Mitochondrial dysfunction
- Aerobic glycolysis (Warburg effect)
- Hyperlactatemia (not just hypoperfusion)

## Diagnostic Approach

**Laboratory Evaluation:**
- CBC with differential: Leukocytosis or leukopenia
- CMP: Organ dysfunction (creatinine, LFTs, bilirubin)
- Lactate: Tissue hypoperfusion marker
- Blood cultures: At least 2 sets from different sites
- Inflammatory markers: CRP, procalcitonin
- Coagulation profile: PT/PTT, fibrinogen (DIC evaluation)
- Urinalysis: Urinary source
- CXR: Pulmonary source

**Procalcitonin (PCT):**
- More specific for bacterial infection than CRP
- Helps distinguish bacterial vs viral infection
- Guides antibiotic duration
- Low PCT may support stopping antibiotics

**Source Identification:**
- Chest X-ray: Pneumonia
- Urinalysis/culture: UTI
- Abdominal imaging: Intra-abdominal source
- CT abdomen/pelvis: Abscess, diverticulitis
- Soft tissue ultrasound: Cellulitis vs abscess
- Echocardiogram: Endocarditis

**Microbiology:**
- Blood cultures: 2-3 sets before antibiotics
- Sputum culture: Pneumonia
- Urine culture: UTI
- Wound culture: Soft tissue infection
- CSF studies: Meningitis

## Antibiotic Management

**Empiric Therapy Selection:**

**Community-Onset Sepsis:**

| Source | Coverage | First-line |
|--------|----------|------------|
| Pulmonary | Typical + atypical | Ceftriaxone + azithromycin OR levofloxacin |
| Urinary | Gram-negatives | Ceftriaxone (or cefepime if high risk) |
| Abdominal | Gram-negative + anaerobic | Piperacillin-tazobactam |
| Skin/soft tissue | Gram-positive (including MRSA) | Vancomycin + piperacillin-tazobactam |
| CNS | Meningitic coverage | Ceftriaxone + vancomycin + ampicillin* |

*Add ampicillin for patients >50 years (Listeria coverage)

**Healthcare-Associated Sepsis:**
- Broader coverage needed
- MRSA coverage (vancomycin)
- Pseudomonas coverage (cefepime, piperacillin-tazobactam, or carbapenem)
- ESBL risk factors: Recent antibiotics, recent hospitalization

**De-escalation:**
- Narrow antibiotics based on culture results
- Duration: Typically 7-10 days for most infections
- Shorter courses for uncomplicated infections
- Longer for endocarditis, osteomyelitis, undrained abscess

## Fluid Resuscitation Strategies

**Initial Fluid Challenge:**
- 30 mL/kg crystalloid bolus (Surviving Sepsis Campaign)
- Reassess after each bolus
- Stop when:
  - Blood pressure target achieved
  - Signs of fluid overload develop
  - No further response

**Crystalloid Choices:**
- Balanced crystalloids (LR): Preferred
- Normal saline: Acceptable alternative
- Avoid large volumes of chloride-rich fluids (renal dysfunction)

**Colloids:**
- Albumin: No clear advantage over crystalloids
- Not routinely recommended

**Dynamic Assessment:**
- Passive leg raise: Predicts fluid responsiveness
- Stroke volume variation: Requires mechanical ventilation
- Cardiac output monitoring: Goal-directed therapy

**Fluid Targets:**
- MAP ≥65 mmHg
- ScvO2 ≥70% (if monitored)
- Lactate clearance: 10% decrease per hour (good prognostic sign)

## Vasopressor Therapy

**First-line: Norepinephrine**
- Potent alpha agonist
- Some beta activity
- Improves MAP and organ perfusion

**Second-line:**
- Vasopressin: V1 receptor agonist, spares norepinephrine dose
- Epinephrine: Second-line, can increase lactate
- Dopamine: Alternative in selected patients

**Phenylephrine:**
- Pure alpha agonist
- May decrease cardiac output
- Use only if arrhythmias with other agents

**Vasopressin:**
- Dose: 0.03 units/min (fixed)
- Added to norepinephrine to reduce norepinephrine dose
- Useful in septic shock with high norepinephrine requirements

## Adjunctive Therapies

**Corticosteroids:**
- Consider for refractory shock despite adequate fluids and vasopressors
- Hydrocortisone 50 mg IV q6h
- Taper when vasopressors no longer needed
- Evidence for benefit in refractory shock

**Blood Products:**
- Transfuse RBCs for Hgb <7 g/dL (unless myocardial ischemia)
- FFP for bleeding or planned procedure
- Platelets for <10,000 or <20,000 with bleeding
- Cryoprecipitate for fibrinogen <100 mg/dL with bleeding

**Renal Replacement Therapy:**
- Indicated for severe AKI with volume overload
- Refractory acidosis or hyperkalemia
- Consider for sepsis with AKI

**Insulin Therapy:**
- Target glucose 140-180 mg/dL
- Avoid hypoglycemia
- Continuous insulin infusion in ICU

## Specific Infectious Emergencies

**Meningitis:**

**Bacterial Meningitis Pathogens by Age:**
- <1 month: Group B Strep, E. coli, Listeria
- 1-23 months: S. pneumoniae, N. meningitidis
- 2-50 years: N. meningitidis, S. pneumoniae
- >50 years: S. pneumoniae, Listeria, Gram-negative

**Empiric Regimen:**
- Ceftriaxone 2 g IV q12h
- Vancomycin (for resistant pneumococcus)
- Ampicillin if >50 years (Listeria)
- Dexamethasone before or with antibiotics (pneumococcal)

**Encephalitis:**
- HSV encephalitis: Acyclovir 10 mg/kg IV q8h
- Autoimmune encephalitis: Consider if atypical presentation

**Infective Endocarditis:**
**Duke Criteria (Major):**
- Positive blood culture for typical organism
- Evidence of endocardial involvement on echo

**Treatment:**
- Blood cultures (3 sets) before antibiotics
- Vancomycin + ceftriaxone for native valve (empiric)
- Add gentamicin for certain organisms
- TEE for better sensitivity than TTE

**Necrotizing Fasciitis:**
- Type I: Polymicrobial (diabetic, immunocompromised)
- Type II: Group A Strep (toxic shock)
- Treatment:
  - Surgical debridement (multiple operations often needed)
  - Broad antibiotics: Vancomycin + pip-tazo + clindamycin (toxin inhibition)
  - IVIG for toxic shock syndrome

**Clostridioides difficile:**
- Oral vancomycin 125 mg q6h for severe
- Fidaxomicin for recurrent disease
- Metronidazole only for mild, non-severe cases
- Consider fecal transplant for recurrent disease`,
      keyTerms: [
        { term: 'SOFA score', definition: 'Sequential Organ Failure Assessment; organ dysfunction scoring system' },
        { term: 'PAMPs', definition: 'Pathogen-associated molecular patterns; microbial molecules that activate immune system' },
        { term: 'cytokine storm', definition: 'Massive release of inflammatory mediators causing tissue damage' },
        { term: 'procalcitonin', definition: 'Biomarker specific for bacterial infection; guides antibiotic therapy' },
        { term: 'de-escalation', definition: 'Narrowing antibiotic spectrum once organism identified' },
        { term: 'ScvO2', definition: 'Central venous oxygen saturation; measure of tissue oxygenation' },
        { term: 'TEE', definition: 'Transesophageal echocardiogram; better sensitivity for endocarditis' },
      ],
      clinicalNotes: 'Time to antibiotics is the critical factor in sepsis outcomes. Every hour of delay increases mortality.',
    },
    4: {
      level: 4,
      summary: 'Management of infectious emergencies requires advanced understanding of host-pathogen interactions, antimicrobial pharmacodynamics, fluid-resuscitation physiology, and evidence-based protocols to optimize outcomes in sepsis, meningitis, and other life-threatening infections.',
      explanation: `## Advanced Sepsis Pathophysiology

**Endothelial Dysfunction:**
- Glycocalyx degradation: Increases permeability, edema
- Weibel-Palade body exocytosis: Releases von Willebrand factor
- Loss of vascular barrier: Capillary leak, tissue edema
- Microvascular thrombosis: Contributing to organ dysfunction

**Coagulation abnormalities:**
- Tissue factor expression activates coagulation
- Protein C pathway impairment
- Antithrombin deficiency
- DIC: Consumptive coagulopathy with bleeding and thrombosis
- Thromboembolic complications common

**Mitochondrial Dysfunction:**
- Cytopathic hypoxia: Cells unable to use oxygen despite adequate delivery
- ROS generation: Oxidative stress
- Apoptosis: Programmed cell death
- Explains why lactate may be elevated despite normal macrocirculation

**Immunoparalysis:**
- Lymphocyte apoptosis: Reduced adaptive immunity
- HLA-DR downregulation: Monocyte dysfunction
- Increased PD-1/PD-L1: T-cell exhaustion
- Secondary infections: Re-emergence of normal flora pathogens

**Organ-Specific Dysfunction:**

**Cardiovascular:**
- Myocardial depression: TNF-alpha mediated
- Vasoplegia: Nitric oxide-mediated vasodilation
- Reduced vascular responsiveness to catecholamines
- Circulatory shock: Inadequate tissue perfusion

**Respiratory:**
- ALI/ARDS: Capillary leak, pulmonary edema
- Increased microvascular permeability
- V/Q mismatch: Hypoxemia
- Mechanical ventilation often required

**Renal:**
- ATN: Acute tubular necrosis from hypoperfusion
- Microvascular thrombosis
- Acute kidney injury: Rising creatinine, oliguria
- May require RRT (renal replacement therapy)

**Gastrointestinal:**
- Ileus: Loss of motility
- Stress ulcers: Mucosal ischemia
- Translocation: Bacteria crossing gut barrier
- Non-occlusive mesenteric ischemia

**Hepatic:**
- Cholestasis: Impaired bile flow
- Transaminase elevation: Hepatocellular injury
- Lactate clearance reduced: Impaired metabolism
- Coagulation factor synthesis impaired

**Hematologic:**
- DIC: Lab evidence of coagulation activation
- Thrombocytopenia: Platelet consumption
- Microangiopathic hemolytic anemia
- Schistocytes on peripheral smear

## Advanced Antimicrobial Concepts

**PK/PD Principles:**

**Beta-lactams:**
- Time-dependent killing
- Goal: Time >MIC for 40-70% of dosing interval
- Extended/continuous infusion may improve outcomes
- Therapeutic drug monitoring not routinely available

**Aminoglycosides:**
- Concentration-dependent killing
- Goal: Peak/MIC ratio ≥10
- Single daily dosing optimizes PK/PD
- Monitor for nephrotoxicity, ototoxicity

**Fluoroquinolones:**
- Concentration-dependent killing
- Goal: AUC/MIC ratio ≥125
- Generally well-tolerated
- Tendon rupture, aortic dissection warnings

**Vancomycin:**
- Time-dependent killing
- Goal: AUC/MIC ratio ≥400
- Monitor trough levels (15-20 mg/L for serious infections)
- Nephrotoxicity risk

**Multidrug-Resistant Organisms:**

**ESBL Producers:**
- Beta-lactamase hydrolyzes penicillins, cephalosporins
- Treated with carbapenems
- Consider piperacillin-tazobactam for selected cases

**Carbapenem-Resistant Enterobacteriaceae (CRE):**
- Carbapenemase production (KPC, NDM)
- Treatment options limited: Polymyxins, tigecycline, newer beta-lactam/beta-lactamase inhibitors
- High mortality

**MRSA:**
- PBP2a alteration of penicillin-binding protein
- Resistant to all beta-lactams
- Vancomycin, daptomycin, ceftaroline for treatment
- Vancomycin MIC creep concerns

**VRE:**
- VanA or VanB gene
- Treat based on susceptibility: Daptomycin, linezolid
- Infection control measures critical

**Acinetobacter:**
- Environmental organism
- Carbapenem resistance increasingly common
- Polymyxins often required
- High mortality in ICU infections

**Pseudomonas:**
- Opportunistic pathogen
- Intrinsically resistant to many antibiotics
- Dual therapy often needed for serious infections
- Resistant strains increasing

**Antifungal Therapy:**
**Candida spp:**
- Echinocandins first line for candidemia
- Fluconazole for susceptible species (C. albicans)
- Step-down to oral azole after stabilization
- Remove central lines

**Aspergillus:**
- Voriconazole first line
- Amphotericin B alternatives
- Therapeutic drug monitoring important
- Surgical debridement when possible

**Mucormycosis:**
- Amphotericin B essential
- Aggressive surgical debridement
- High mortality, especially with dissemination

## Host-Directed Therapy

**Corticosteroids:**
**Potential Benefits:**
- Reduced vasopressor requirements
- Shortened shock duration
- Possible mortality benefit in refractory shock

**Risks:**
- Hyperglycemia
- Secondary infection
- Muscle weakness
- Wound healing impairment

**Current Recommendations:**
- Consider for refractory septic shock
- Hydrocortisone 50 mg IV q6h
- Taper when vasopressors discontinued

**IVIG:**
- Theoretical benefit: Immunomodulation
- Evidence inconclusive
- Consider for streptococcal toxic shock
- Not routinely recommended

**Vasopressin:**
- V1 receptor agonist
- Allows norepinephrine sparing
- May improve renal function
- Fixed dose 0.03 units/min

**Ascorbic Acid (Vitamin C):**
- MARINES trial showed no benefit
- Not routinely recommended
- May be considered in selected cases

## Source Control Strategies

**Principles:**
- Drain abscesses percutaneously or surgically
- Remove infected devices (lines, grafts)
- Debride infected tissue
- Control ongoing contamination
- Perform as soon as feasible (within 12-24 hours)

**Specific Approaches:**
- Intra-abdominal: Source control, perioperative antibiotics
- Soft tissue: Surgical debridement, antibiotics
- Endovascular: Remove infected catheters
- Pulmonary: Drain empyema, treat pneumonia

**Antibiotic-impregnated Devices:**
- Consider for high-risk prosthetic infections
- Not routinely recommended

## Special Populations

**Neutropenic Sepsis:**
- High risk for rapid deterioration
- Broad empiric coverage essential
- Antifungal coverage if persistent fever
- Colony-stimulating factors considered

**Obesity:**
- Altered antibiotic pharmacokinetics
- Higher doses may be needed
- Vancomycin dosing based on actual body weight
- Increased difficulty with source control

**Pregnancy:**
- Antibiotic safety considerations
- Avoid fluoroquinolones, tetracyclines
- Physiologic changes affect drug levels
- Obstetric consultation for obstetric sepsis

**Extremes of Age:**
- Pediatric: Weight-based dosing, age-specific pathogens
- Geriatric: Altered renal function, atypical presentations
- Immunosenescence increases infection risk`,
      keyTerms: [
        { term: 'glycocalyx', definition: 'Endothelial surface layer; degradation contributes to capillary leak' },
        { term: 'cytopathic hypoxia', definition: 'Cells unable to use oxygen despite adequate delivery' },
        { term: 'HLA-DR', definition: 'Human Leukocyte Antigen-DR; downregulation indicates immunoparalysis' },
        { term: 'PK/PD', definition: 'Pharmacokinetic/Pharmacodynamic; principles of antibiotic action' },
        { term: 'AUC/MIC', definition: 'Area under curve to minimum inhibitory concentration ratio; PK/PD parameter' },
        { term: 'KPC', definition: 'Klebsiella pneumoniae carbapenemase; resistance mechanism' },
        { term: 'MARINES trial', definition: 'Trial of vitamin C, thiamine, hydrocortisone in sepsis; negative' },
      ],
      clinicalNotes: 'Beta-lactam antibiotics should be infused over extended time (3-4 hours) for critically ill patients to optimize time above MIC.',
    },
    5: {
      level: 5,
      summary: 'Contemporary management of infectious emergencies integrates precision medicine approaches, rapid diagnostic technologies, evidence-based resuscitation protocols, and antimicrobial stewardship principles to optimize outcomes while minimizing resistance and collateral damage.',
      explanation: `## Evidence-Based Sepsis Updates

**2021 Surviving Sepsis Campaign Guidelines:**

**Initial Resuscitation:**
- 30 mL/kg crystalloid bolus (recommendation downgraded)
- Start vasopressors if hypotensive despite fluids
- Target MAP ≥65 mmHg
- Reassess frequently (lactate, capillary refill, skin mottling)

**Antibiotics:**
- Administer within 1 hour for septic shock (within 3 hours for sepsis without shock)
- Broad-spectrum then de-escalate based on cultures
- Consider procalcitonin to guide duration
- Duration: 7-10 days for most infections

**Vasopressors:**
- Norepinephrine first-line
- Add vasopressin second-line
- Avoid dopamine (higher arrhythmia risk)
- Epinephrine as additional agent

**Corticosteroids:**
- Consider for refractory shock
- Not routinely recommended for all patients
- Hydrocortisone 50 mg q6h if used

**Organ Support:**
- Lung-protective ventilation for ARDS
- Renal replacement therapy when indicated
- Nutrition: Enteral preferred, early feeding

## Novel Diagnostics

**Rapid Diagnostic Tests:**
- MALDI-TOF: Rapid organism identification
- Multiplex PCR panels: Respiratory, blood culture, GI pathogens
- Metagenomic NGS: Pathogen identification without prior suspicion
- Phenotypic resistance testing: Faster than traditional methods

**Procalcitonin-Guided Therapy:**
- Helps distinguish bacterial vs non-bacterial infection
- Guides antibiotic initiation and duration
- Reduces antibiotic exposure without increasing mortality
- Consider stopping antibiotics if low PCT and clinical improvement

**Biomarker Combinations:**
- PCT + CRP + clinical judgment improves accuracy
- Presepsin: Soluble CD14 subtype
- Adrenomedullin: Marker of endothelial dysfunction (investigational)

## Precision Antibiotic Therapy

**Pharmacokinetic Optimization:**
- Extended/continuous infusion beta-lactams
- Therapeutic drug monitoring: Vancomycin, aminoglycosides, voriconazole
- Population PK modeling: Individualized dosing
- Consider altered PK in critically ill (augmented renal clearance, fluid overload)

**Antibiotic Stewardship:**
- De-escalation based on cultures
- Shortest effective duration
- Avoid redundant anaerobic coverage
- Optimal dose and interval
- Automatic stop orders for empiric antibiotics

**New Antibiotics:**
- Ceftazidime-avibactam: ESBLs, KPC
- Meropenem-vaborbactam: CRE (KPC)
- Ceftolozane-tazobactam: Pseudomonas
- Cefiderocol: Carbapenem-resistant Gram-negatives
- Oritavancin, dalbavancin: Long-acting MRSA agents

## Sepsis Bundles and Quality Metrics

**SEP-1 CMS Measure:**
- 3-hour bundle (within 3 hours):
  - Measure lactate
  - Obtain blood cultures
  - Administer broad-spectrum antibiotics
  - Begin 30 mL/kg crystalloid for hypotension/lactate ≥4

- 6-hour bundle (within 6 hours):
  - Reassess volume status and tissue perfusion
  - Re-measure lactate if initial elevated
  - Administer vasopressors if hypotensive despite fluids
  - Reassess volume and tissue perfusion

**Performance Metrics:**
- Bundle compliance
- Time to antibiotics
- Lactate clearance
- Mortality
- Readmission rates
- Length of stay

## Long-term Outcomes

**Post-Sepsis Syndrome:**
- Cognitive impairment: Memory, attention deficits
- Functional decline: Difficulty with ADLs
- Mental health: PTSD, depression, anxiety
- Physical deconditioning: Muscle weakness, fatigue
- Increased mortality: Persists for years

**Rehabilitation:**
- Early mobilization in ICU
- Physical therapy
- Occupational therapy
- Cognitive rehabilitation
- Psychological support
- Primary care follow-up critical

**PICS (Post-Intensive Care Syndrome):**
- Affects patients and families
- Cognitive, psychological, physical impairments
- Requires multidisciplinary approach
- ICU diaries may help
- Follow-up clinics beneficial

## Special Pathogen Considerations

**COVID-19 and Sepsis:**
- Viral sepsis with hyperinflammatory phase
- Cytokine storm similar to bacterial sepsis
- Dexamethasone mortality benefit (RECOVERY trial)
- Remdesivir for severe disease
- Immunomodulators: Tocilizumab, baricitinib

**Multidrug-Resistant Gram-Negatives:**
- Increasing global threat
- Limited treatment options
- Combination therapy often required
- Infection control critical

**Candida auris:**
- Emerging multidrug-resistant yeast
- Healthcare-associated outbreaks
- High mortality
- Difficult to eradicate from environment

**Influenza:**
- Viral sepsis with bacterial superinfection common
- Oseltamivir for hospitalized patients
- Vaccination preventive
- Bacterial complications: S. aureus, S. pneumoniae

## Antimicrobial Resistance Crisis

**ESKAPE Pathogens:**
- Enterococcus faecium
- Staphylococcus aureus
- Klebsiella pneumoniae
- Acinetobacter baumannii
- Pseudomonas aeruginosa
- Enterobacter spp.

**Strategies to Combat Resistance:**
- Antimicrobial stewardship
- Infection prevention: Hand hygiene, bundles, checklists
- Rapid diagnostics: Targeted therapy
- De-escalation: Narrow spectrum when possible
- Optimal dosing: Prevent resistance emergence
- Combination therapy: Synergy, prevent resistance
- Novel agents: Pipeline limited but active

## Future Directions

**Immunomodulation:**
- Targeted cytokine blockade (anti-IL-6)
- GM-CSF for immunoparalysis
- Checkpoint inhibitors: PD-1/PD-L1 blockade
- Interferon gamma: Immune enhancement

**Hemoperfusion:**
- CytoSorb: Cytokine removal
- Polymyxin B hemoperfusion
- Evidence inconclusive; trials ongoing

**Artificial Intelligence:**
- Early sepsis prediction
- Automated alerts
- Antibiotic selection support
- Prognostication tools

**Personalized Medicine:**
- Pharmacogenomics: Individual drug response
- Host genome: Sepsis susceptibility
- Microbiome analysis: Dysbiosis patterns
- Metabolomics: Metabolic signatures

**Vaccines:**
- S. pneumoniae: Conjugate vaccines reduced invasive disease
- N. meningitidis: Quadrivalent conjugate vaccine
- Future: Universal influenza, S. aureus vaccine

## Global Health Considerations

**Sepsis in Resource-Limited Settings:**
- Higher mortality rates
- Limited diagnostic capabilities
- Antibiotic access issues
- Infection control challenges
- Vaccine access limited

**One Health Approach:**
- Human-animal-environment connections
- Antibiotic use in agriculture
- Environmental contamination
- Surveillance across sectors

**Tropical Sepsis:**
- Malaria: Consider in endemic areas
- Dengue: Viral hemorrhagic fever sepsis
- Leptospirosis: Spirochetal infection
- Melioidosis: B. pseudomallei (endemic areas)
- Scrub typhus: Orientia tsutsugamushi`,
      keyTerms: [
        { term: 'SEP-1', definition: 'Sepsis SEP-1 CMS bundle; national quality measure for sepsis care' },
        { term: 'PICS', definition: 'Post-Intensive Care Syndrome; long-term sequelae after critical illness' },
        { term: 'post-sepsis syndrome', definition: 'Long-term physical, cognitive, psychological effects after sepsis' },
        { term: 'augmented renal clearance', definition: 'Increased creatinine clearance; affects antibiotic levels' },
        { term: 'ESKAPE', definition: 'Multidrug-resistant pathogens of greatest concern' },
        { term: 'C. auris', definition: 'Candida auris; emerging multidrug-resistant yeast' },
        { term: 'RECOVERY trial', definition: 'UK trial showing dexamethasone benefit in COVID-19' },
      ],
      clinicalNotes: `Key Clinical Pearls for Infectious Emergencies:

1. **Time is tissue:** Antibiotics within 1 hour for septic shock, within 3 hours for sepsis without shock
2. **Cultures first:** At least 2 blood cultures before antibiotics (don't delay antibiotics for cultures)
3. **Source control matters:** You can't sterilize the bloodstream without controlling the source
4. **De-escalate aggressively:** Narrow antibiotics once pathogen identified
5. **Duration matters:** 7-10 days for most infections; longer only for specific indications
6. **Biomarkers help:** Procalcitonin can guide stopping antibiotics
7. **Think of fungi:** Consider candidemia in appropriate clinical contexts
8. **Culture doesn't equal infection:** Colonization common; clinical correlation essential
9. **Host factors matter:** Immunosuppression changes differential and treatment
10. **Long-term follow-up:** Post-sepsis syndrome common; survivors need ongoing support`,
    },
  },

  media: [
    {
      id: 'sepsis-bundle-algorithm',
      type: 'diagram',
      filename: 'sepsis-management-bundle.svg',
      title: 'Sepsis Management Bundle',
      description: '1-hour and 3-hour sepsis bundle components',
    },
    {
      id: 'meningitis-csf-findings',
      type: 'diagram',
      filename: 'meningitis-csf-analysis.svg',
      title: 'CSF Findings in Meningitis',
      description: 'Comparison of CSF findings in bacterial, viral, and fungal meningitis',
    },
    {
      id: 'sepsis-organ-dysfunction',
      type: 'diagram',
      filename: 'sepsis-organ-dysfunction-table.svg',
      title: 'Sepsis-Induced Organ Dysfunction',
      description: 'Organ-specific manifestations of sepsis',
    },
  ],

  citations: [
    {
      id: 'ssc-guidelines-2021',
      type: 'article',
      title: 'Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock 2021',
      authors: ['Evans, L.', 'et al.'],
      source: 'Critical Care Medicine',
      url: 'https://doi.org/10.1097/CCM.0000000000005307',
    },
    {
      id: 'sepsis-3-definition',
      type: 'article',
      title: 'The Third International Consensus Definitions for Sepsis and Septic Shock (Sepsis-3)',
      authors: ['Seymour, C.W.', 'et al.'],
      source: 'JAMA',
      url: 'https://doi.org/10.1001/jama.2016.0287',
    },
    {
      id: 'idsa-guidelines',
      type: 'article',
      title: 'IDSA Guidelines for the Treatment of MRSA',
      source: 'Clinical Infectious Diseases',
    },
  ],

  crossReferences: [
    { targetId: 'emergency-approach-triage', targetType: 'topic', relationship: 'related', label: 'ED Approach and Triage' },
    { targetId: 'emergency-neurologic', targetType: 'topic', relationship: 'related', label: 'Neurologic Emergencies (Meningitis)' },
    { targetId: 'emergency-respiratory', targetType: 'topic', relationship: 'related', label: 'Respiratory Emergencies (Pneumonia)' },
  ],

  tags: {
    systems: ['all'],
    topics: ['emergency medicine', 'infectious disease', 'critical care', 'sepsis'],
    keywords: ['sepsis', 'septic shock', 'meningitis', 'antibiotics', 'source control', 'lactate'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['emergency medicine', 'medicine', 'infectious disease'],
    },
  },

  createdAt: '2026-01-25T00:00:00.000Z',
  updatedAt: '2026-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default infectiousEmergenciesContent;
