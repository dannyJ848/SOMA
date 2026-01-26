/**
 * Sepsis and Septic Shock - Comprehensive Educational Content
 *
 * Covers sepsis pathophysiology, diagnosis, and management.
 */

import { EducationalContent } from '../../types';

export const sepsisAndSepticShock: EducationalContent = {
  id: 'infectious-disease-sepsis',
  type: 'condition',
  name: 'Sepsis and Septic Shock',
  alternateNames: ['Septicemia', 'Systemic Inflammatory Response to Infection', 'Severe Sepsis'],

  levels: {
    1: {
      level: 1,
      summary: 'Sepsis is when an infection spreads through your blood and makes your whole body very sick, causing your organs to not work properly.',
      explanation: `When you get a small cut that gets infected, your body usually fights it off in just that one spot. But sometimes, an infection can spread into your blood and travel all through your body. This is called sepsis, and it is very serious.

**What Happens in Sepsis:**
- Germs get into your blood
- Your body tries to fight them everywhere at once
- This fight can damage your own organs
- Your heart, lungs, kidneys, and other organs may stop working well

**Warning Signs:**
- Very high fever or very low temperature
- Fast heartbeat and fast breathing
- Feeling confused or very sleepy
- Skin that looks blotchy or blue
- Not urinating much

**Why Sepsis Is Dangerous:**
- It can happen quickly, within hours
- Without fast treatment, organs can fail
- It is a medical emergency

**Who Gets Sepsis:**
- Anyone can get sepsis from any infection
- More common in very young children and elderly people
- More common in people with weak immune systems

**Treatment:**
- Quick antibiotics through an IV
- Fluids to help blood pressure
- Sometimes medicine to help the heart pump
- Hospital care, often in an intensive care unit

The most important thing is getting treatment fast!`,
      keyTerms: [
        { term: 'sepsis', definition: 'When an infection spreads through your blood and makes your whole body sick' },
        { term: 'infection', definition: 'When germs like bacteria get into your body and make you sick' },
        { term: 'antibiotics', definition: 'Medicines that kill bacteria' },
        { term: 'organ failure', definition: 'When parts of your body like your heart or kidneys stop working properly' },
      ],
      analogies: [
        'Sepsis is like a fire that starts in one room but spreads to burn down the whole house.',
        'Your immune system fighting sepsis is like firefighters using so much water that they flood the house while trying to put out the fire.',
      ],
      examples: [
        'A urinary tract infection that is not treated can sometimes lead to sepsis if the bacteria get into the blood.',
        'Pneumonia is one of the most common infections that can lead to sepsis.',
      ],
    },
    2: {
      level: 2,
      summary: 'Sepsis is a life-threatening organ dysfunction caused by a dysregulated host response to infection, requiring rapid identification and treatment with antibiotics and fluid resuscitation.',
      explanation: `Sepsis is one of the leading causes of hospital deaths worldwide. Understanding its progression is key to early recognition and treatment.

**Definitions (Sepsis-3, 2016):**

**Sepsis:**
- Life-threatening organ dysfunction
- Caused by dysregulated host response to infection
- Identified by increase in SOFA score ≥2

**Septic Shock:**
- Sepsis with circulatory and metabolic abnormalities
- Requires vasopressors to maintain MAP ≥65 mmHg
- Lactate >2 mmol/L despite adequate fluid resuscitation

**Common Sources of Infection:**
1. Pneumonia (most common)
2. Intra-abdominal infections
3. Urinary tract infections
4. Skin/soft tissue infections
5. Bloodstream infections (central line, endocarditis)

**Pathophysiology Overview:**
1. Infection triggers immune response
2. Pro-inflammatory cytokines released (TNF, IL-1, IL-6)
3. Endothelial dysfunction and capillary leak
4. Coagulation activated (microthrombi)
5. Organ hypoperfusion and failure

**Screening: qSOFA (Quick SOFA):**
- Respiratory rate ≥22
- Altered mental status
- Systolic BP ≤100 mmHg
- (2+ points suggests sepsis, prompts further evaluation)

**Key Laboratory Findings:**
- Lactate elevation (tissue hypoperfusion)
- Leukocytosis or leukopenia
- Thrombocytopenia
- Elevated creatinine (kidney injury)
- Elevated bilirubin (liver dysfunction)
- Coagulopathy (PT/INR prolonged)

**Treatment Principles (Hour-1 Bundle):**

Within 1 hour of suspected sepsis:
1. **Measure lactate** (re-measure if >2)
2. **Obtain blood cultures** before antibiotics
3. **Administer broad-spectrum antibiotics**
4. **Begin fluid resuscitation** (30 mL/kg crystalloid)
5. **Start vasopressors** if hypotensive despite fluids

**Prognosis:**
- Hospital mortality: 15-25% for sepsis
- 30-40% for septic shock
- Early treatment significantly improves outcomes`,
      keyTerms: [
        { term: 'sepsis', definition: 'Life-threatening organ dysfunction caused by dysregulated host response to infection' },
        { term: 'septic shock', definition: 'Sepsis with persistent hypotension requiring vasopressors and lactate >2 despite fluid resuscitation' },
        { term: 'lactate', definition: 'Marker of tissue hypoperfusion and anaerobic metabolism, elevated in sepsis' },
        { term: 'qSOFA', definition: 'Quick SOFA score: screening tool for sepsis using respiratory rate, mental status, and blood pressure' },
        { term: 'vasopressor', definition: 'Medication that increases blood pressure by constricting blood vessels' },
      ],
      analogies: [
        'Sepsis is like the immune system going to DEFCON 1 - an overreaction that causes collateral damage to your own organs.',
        'The Hour-1 bundle is like the first hour of a firefighting response - delay makes everything worse.',
      ],
    },
    3: {
      level: 3,
      summary: 'Sepsis represents dysregulated host immunity with concurrent hyperinflammation and immunosuppression, leading to organ dysfunction through endothelial injury, microcirculatory failure, and cellular metabolic derangements.',
      explanation: `Understanding sepsis pathobiology guides therapeutic strategies and explains treatment targets.

**Pathophysiology in Detail:**

**1. Recognition and Immune Activation:**
- PAMPs (pathogen-associated molecular patterns) recognized by PRRs (TLRs, NOD)
- DAMPs (damage-associated) from host tissue injury
- NF-κB activation → cytokine production

**2. Cytokine Response:**
- Pro-inflammatory: TNF-α, IL-1β, IL-6, IL-8
- Anti-inflammatory: IL-10, TGF-β
- Imbalance leads to tissue damage or immunoparalysis

**3. Endothelial Dysfunction:**
- Glycocalyx shedding
- Increased permeability (capillary leak)
- Loss of vasomotor tone (NO overproduction)
- Activated coagulation, impaired fibrinolysis

**4. Coagulation Abnormalities:**
- Tissue factor expression → thrombin generation
- Microthrombi formation
- DIC (disseminated intravascular coagulation)
- Protein C depletion

**5. Mitochondrial Dysfunction:**
- Cytopathic hypoxia
- Impaired oxygen utilization
- Cellular metabolic failure

**Organ Dysfunction (SOFA Score Components):**

| Organ | Parameter | Score 0 → 4 |
|-------|-----------|-------------|
| Respiratory | PaO2/FiO2 | ≥400 → <100 |
| Coagulation | Platelets | ≥150 → <20 |
| Liver | Bilirubin | <1.2 → ≥12 |
| Cardiovascular | MAP/vasopressors | No hypotension → High-dose pressors |
| CNS | GCS | 15 → <6 |
| Renal | Creatinine/UOP | <1.2 → ≥5 or <200 mL/day |

**Source Control:**
- Identify and treat source of infection
- Drain abscesses, remove infected devices
- Debride necrotic tissue
- Aim within first 6-12 hours

**Antimicrobial Therapy:**

*Empiric Coverage:*
- Broad-spectrum, covering likely pathogens
- Consider local resistance patterns
- De-escalate when culture data available

*Common Regimens:*
- Community-acquired: Ceftriaxone + azithromycin (pneumonia)
- Hospital-acquired/ICU: Piperacillin-tazobactam or carbapenem + vancomycin
- Intra-abdominal: Broad gram-negative + anaerobic coverage

**Fluid Resuscitation:**
- Initial: 30 mL/kg crystalloid (balanced preferred)
- Assess fluid responsiveness before additional boluses
- Dynamic parameters: Pulse pressure variation, passive leg raise

**Vasopressors:**
- First-line: Norepinephrine (target MAP ≥65)
- Second-line: Vasopressin
- Consider epinephrine or dobutamine if cardiac output low

**Adjunctive Therapies:**
- Corticosteroids: Hydrocortisone for refractory shock
- Blood products: Transfuse if Hgb <7 (or <10 if ischemia)
- Glycemic control: Target 140-180 mg/dL
- DVT/stress ulcer prophylaxis`,
      keyTerms: [
        { term: 'SOFA score', definition: 'Sequential Organ Failure Assessment: quantifies organ dysfunction in sepsis' },
        { term: 'PAMPs', definition: 'Pathogen-associated molecular patterns: microbial molecules recognized by immune receptors' },
        { term: 'DIC', definition: 'Disseminated intravascular coagulation: widespread coagulation with consumption of factors' },
        { term: 'source control', definition: 'Elimination of the focus of infection (drainage, debridement, device removal)' },
        { term: 'fluid responsiveness', definition: 'Whether a patient will increase cardiac output with additional fluid' },
      ],
      clinicalNotes: 'Lactate clearance (>10% decrease at 2-6 hours) predicts better outcomes. Source control within 6-12 hours is critical. Delay in antibiotics increases mortality ~7% per hour in septic shock.',
    },
    4: {
      level: 4,
      summary: 'Advanced sepsis management requires precision phenotyping, hemodynamic optimization using dynamic assessment, tailored antimicrobial strategies including pharmacokinetic considerations, and recognition of immunoparalysis for potential immunomodulation.',
      explanation: `Contemporary sepsis care integrates personalized approaches based on emerging evidence and physiological principles.

**Sepsis Phenotypes:**

*Cluster Analysis Subtypes (Seymour 2019):*
- α (Alpha): Low vasopressor/ventilator needs, low mortality
- β (Beta): Older, chronic disease, moderate mortality
- γ (Gamma): More inflammation, high respiratory failure
- δ (Delta): Liver dysfunction, high shock, highest mortality

*Clinical Relevance:*
- Different response to therapies (e.g., early goal-directed therapy)
- Future: Phenotype-directed treatment

**Hemodynamic Management:**

*Assessment of Fluid Responsiveness:*
- Static parameters (CVP) are poor predictors
- Dynamic parameters:
  - Pulse pressure variation (PPV) >12%
  - Stroke volume variation (SVV) >12%
  - Passive leg raise (PLR) test
  - Respiratory variation in IVC diameter

*Echocardiography in Sepsis:*
- Assess LV/RV function
- Septic cardiomyopathy (reversible)
- Estimate cardiac output
- Guide vasopressor selection

**Advanced Vasopressor Therapy:**

| Agent | Mechanism | Indication |
|-------|-----------|------------|
| Norepinephrine | α1 > β1 | First-line |
| Vasopressin | V1 receptor | Add to NE (NE-sparing) |
| Epinephrine | β > α | Low cardiac output |
| Phenylephrine | Pure α1 | Tachyarrhythmias |
| Angiotensin II | AT1 receptor | Refractory shock |

**Antimicrobial Pharmacokinetics in Sepsis:**

*Altered PK in Critical Illness:*
- Increased volume of distribution (capillary leak, fluid resuscitation)
- Augmented renal clearance (early sepsis)
- Decreased clearance (AKI)
- Protein binding changes

*Dosing Strategies:*
- Beta-lactams: Extended or continuous infusion
- Aminoglycosides: High-dose, extended interval
- Vancomycin: AUC-guided dosing
- Therapeutic drug monitoring when available

**Corticosteroids:**

*Evidence:*
- ADRENAL (2018): No mortality benefit, faster shock reversal
- APROCCHSS (2018): Mortality benefit (combination with fludrocortisone)
- Current use: Refractory septic shock (NE >0.25 mcg/kg/min)

*Regimen:*
- Hydrocortisone 200 mg/day (50 mg q6h or infusion)
- Duration: Until shock resolved or 7 days

**Immunoparalysis:**

*Concept:*
- Following hyperinflammation, immune suppression occurs
- Reduced HLA-DR on monocytes
- T-cell exhaustion
- Increased secondary infections

*Potential Therapies (Investigational):*
- GM-CSF
- IFN-γ
- IL-7
- Checkpoint inhibitors

**Blood Purification:**

*Modalities:*
- Hemoadsorption (CytoSorb)
- Coupled plasma filtration and adsorption
- High-volume hemofiltration

*Evidence:*
- Not recommended routinely
- Ongoing research for specific indications

**Surviving Sepsis Guidelines (2021) Updates:**

*Hour-1 Bundle:*
- Lactate, cultures, antibiotics, fluids, vasopressors (if needed)

*Key Recommendations:*
- Balanced crystalloids preferred
- Albumin for large-volume resuscitation
- Vitamin C not recommended (LOVIT trial)
- Restrictive transfusion (Hgb <7)
- Low-dose corticosteroids for refractory shock`,
      keyTerms: [
        { term: 'septic cardiomyopathy', definition: 'Reversible myocardial dysfunction in sepsis with reduced ejection fraction' },
        { term: 'augmented renal clearance', definition: 'Increased drug clearance in hyperdynamic early sepsis, may cause sub-therapeutic levels' },
        { term: 'immunoparalysis', definition: 'Post-sepsis immune suppression with reduced monocyte HLA-DR and T-cell dysfunction' },
        { term: 'angiotensin II', definition: 'Vasopressor acting on AT1 receptors, used for refractory septic shock' },
        { term: 'hemoadsorption', definition: 'Extracorporeal blood purification technique to remove cytokines' },
      ],
      clinicalNotes: 'Hour-1 bundle adherence is key: each hour delay in antibiotics increases mortality. Dynamic fluid assessment prevents over-resuscitation. Septic cardiomyopathy is common (up to 60%) and reversible - dobutamine or epinephrine may be needed.',
    },
    5: {
      level: 5,
      summary: 'Frontier sepsis research addresses precision immunomodulation, metabolic resuscitation, artificial intelligence for early detection, and systems-based approaches to improve sepsis outcomes across the healthcare continuum.',
      explanation: `Cutting-edge sepsis science integrates molecular medicine, biomarker discovery, and healthcare systems innovation.

**Precision Immunomodulation:**

*Biomarker-Guided Therapy:*
- HLA-DR expression: <30% predicts immunoparalysis
- Ferritin/IL-18 ratio: Identifies hyperinflammatory subset
- Procalcitonin-guided antibiotic duration

*Immunostimulation Trials:*
| Agent | Target | Status |
|-------|--------|--------|
| GM-CSF | Monocyte activation | Phase II positive |
| IFN-γ | Macrophage activation | Case series |
| IL-7 | T-cell restoration | Phase II (IRIS-7) |
| Thymosin-α1 | T-cell maturation | Mixed results |
| PD-1 inhibitors | Reverse T-cell exhaustion | Phase I |

**Metabolic Resuscitation:**

*Mitochondrial Dysfunction:*
- Key driver of organ failure
- Oxygen delivery may be adequate but utilization impaired
- Target for novel therapies

*Investigational Approaches:*
- Vitamin C (high-dose IV): VITAMINS, LOVIT trials negative
- Thiamine: Lactate clearance in deficient patients
- Selenium, zinc: Antioxidant
- Metformin: Autophagy, controversial

**Artificial Intelligence:**

*Early Detection:*
- Machine learning algorithms on EHR data
- Predict sepsis hours before clinical recognition
- Examples: TREWS (targeted real-time early warning score)
- Epic Sepsis Model (mixed real-world performance)

*Challenges:*
- Alert fatigue
- Implementation science
- Equity concerns (training data bias)

*Precision Treatment:*
- Reinforcement learning for vasopressor dosing
- Optimal antibiotic selection
- Personalized resuscitation strategies

**Microbiome in Sepsis:**

*Dysbiosis:*
- ICU-acquired gut dysbiosis
- Loss of protective anaerobes
- Pathobiont overgrowth
- Contributes to secondary infections

*Interventions:*
- Selective digestive decontamination (SDD): Controversial
- Probiotics: Insufficient evidence in ICU
- Fecal microbiota transplant: Investigational

**Long-Term Outcomes:**

*Post-Sepsis Syndrome:*
- Cognitive impairment (50%)
- Physical disability
- Mental health issues (depression, PTSD)
- Increased mortality for years after

*Survivorship Research:*
- ICU diaries
- Early rehabilitation
- Transition care
- Chronic disease management

**Healthcare Systems Improvement:**

*Quality Metrics:*
- SEP-1 bundle compliance (CMS)
- Time to antibiotics
- Lactate measurement
- Mortality benchmarking

*Implementation Science:*
- Sepsis teams and rapid response
- Nurse-driven screening protocols
- Telemedicine for rural hospitals
- Handoff from ICU to floor

*Sepsis Prevention:*
- Vaccination (pneumococcal, influenza)
- Catheter-associated infection prevention
- Surgical site infection bundles

**Emerging Therapies:**

*Organ Support:*
- Extracorporeal CO2 removal
- Renal replacement therapy timing (STARRT-AKI: no early benefit)
- ECMO for refractory shock (selected cases)

*Targeted Therapies:*
- Adrenomedullin-targeting (adrecizumab)
- Nangibotide (TREM-1 inhibitor)
- Recombinant thrombomodulin (Japan)

**Sepsis in Special Populations:**

*Immunocompromised:*
- Broader empiric coverage
- Consider atypical pathogens (fungi, viruses, PJP)
- Modify immunosuppression

*Pregnancy:*
- Leading cause of maternal death
- Modified physiological parameters
- Fetal considerations for medications

*Children:*
- Different sepsis definitions
- Fluid resuscitation more conservative now
- Higher survival rates than adults`,
      keyTerms: [
        { term: 'TREWS', definition: 'Targeted real-time early warning score: AI-based sepsis prediction algorithm' },
        { term: 'post-sepsis syndrome', definition: 'Long-term cognitive, physical, and mental health impairments after sepsis' },
        { term: 'SEP-1', definition: 'CMS quality measure for severe sepsis and septic shock management bundle' },
        { term: 'adrecizumab', definition: 'Investigational antibody targeting adrenomedullin for septic shock' },
        { term: 'selective digestive decontamination', definition: 'Prophylactic antibiotics to prevent ICU-acquired infections, controversial practice' },
      ],
      clinicalNotes: `**Clinical Pearls:**
1. Hour-1 bundle: Each hour of delayed antibiotics increases mortality; draw cultures but don't wait for results
2. Dynamic fluid assessment: CVP is unreliable; use PPV, PLR, or echo to guide resuscitation
3. Norepinephrine first-line: Start early if hypotensive despite fluids; don't delay for more fluid
4. Source control: Often neglected; undrained abscess = ongoing sepsis
5. De-escalation: Once cultures back, narrow antibiotics if possible
6. Steroid indication: Refractory shock (NE >0.25 for >4 hours); not proven to reduce mortality
7. Post-sepsis: 30-40% of survivors die within 1 year; long-term follow-up essential`,
    },
  },

  media: [
    {
      id: 'sepsis-pathophysiology',
      type: 'diagram',
      filename: 'sepsis-pathophysiology.svg',
      title: 'Sepsis Pathophysiology',
      description: 'Cascade of inflammation, coagulation, and organ dysfunction',
    },
    {
      id: 'sepsis-bundles',
      type: 'diagram',
      filename: 'sepsis-bundles.svg',
      title: 'Sepsis Treatment Bundles',
      description: 'Hour-1 bundle components and timeline',
    },
  ],

  citations: [
    {
      id: 'surviving-sepsis-2021',
      type: 'article',
      title: 'Surviving Sepsis Campaign: International Guidelines 2021',
      source: 'Intensive Care Medicine',
    },
    {
      id: 'sepsis-3',
      type: 'article',
      title: 'Third International Consensus Definitions for Sepsis and Septic Shock (Sepsis-3)',
      authors: ['Singer M', 'et al.'],
      source: 'JAMA',
    },
  ],

  crossReferences: [
    { targetId: 'infectious-disease-bacterial-overview', targetType: 'topic', relationship: 'related', label: 'Bacterial Infections' },
    { targetId: 'infectious-disease-antibiotic-stewardship', targetType: 'topic', relationship: 'related', label: 'Antibiotic Stewardship' },
    { targetId: 'system-immune', targetType: 'system', relationship: 'related', label: 'Immune System' },
  ],

  tags: {
    systems: ['immune', 'cardiovascular'],
    topics: ['infectious-disease', 'critical-care', 'emergency-medicine'],
    keywords: ['sepsis', 'septic shock', 'SOFA', 'antibiotics', 'vasopressors'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery', 'pediatrics'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default sepsisAndSepticShock;
