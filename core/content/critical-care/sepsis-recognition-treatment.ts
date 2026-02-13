import { EducationalContent } from '../types';

export const sepsisRecognitionTreatment: EducationalContent = {
  id: 'critical-care-sepsis-recognition-treatment',
  type: 'concept',
  name: 'Sepsis Recognition and Treatment',
  alternateNames: ['Blood Poisoning', 'Systemic Infection', 'Septicemia', 'Severe Sepsis'],

  levels: {
    1: {
      level: 1,
      summary: 'Sepsis is when an infection spreads through your body and causes it to overreact, making you very sick. It\'s a medical emergency that needs fast treatment.',
      explanation: `Sepsis is a very serious condition that happens when an infection gets out of control and your whole body starts to fight back in a way that can hurt you.

**What Is Sepsis?**
Think of it this way: when you get a small cut and it gets infected, your body sends "fighter cells" to that one spot. But in sepsis, an infection (like pneumonia, a bladder infection, or an infected wound) causes your body to send fighters EVERYWHERE, and this overreaction can damage your own organs.

**Warning Signs to Watch For:**
Someone might have sepsis if they have an infection AND:
- High fever OR unusually low temperature
- Very fast heart rate (racing pulse)
- Fast, shallow breathing
- Confusion or acting differently than normal
- Extreme weakness or pain
- Skin that's pale, mottled, or clammy

**The "SEPSIS" Memory Tool:**
- **S** - Shivering, fever, or very cold
- **E** - Extreme pain or feeling very ill
- **P** - Pale or discolored skin
- **S** - Sleepy, confused, hard to wake up
- **I** - "I feel like I might die" (feeling of doom)
- **S** - Shortness of breath

**Why Is Fast Treatment Important?**
Every hour without treatment makes sepsis more dangerous. That's why doctors and nurses move quickly when they suspect sepsis.

**How Is It Treated?**
1. **Antibiotics** - Strong medicines to kill the infection, given within 1 hour
2. **IV Fluids** - Lots of fluids to help blood pressure and organs
3. **Oxygen** - To help breathing
4. **Finding the Source** - Tests to find where the infection started
5. **Monitoring** - Close watching in the ICU

**What Families Should Know:**
- Sepsis can happen to anyone, but especially:
  - Very young children or elderly
  - People with weak immune systems
  - People with chronic illnesses
- It's the body's response to infection, not a specific germ
- Recovery can take weeks or months
- Survivors may have lasting effects and need follow-up care`,
      keyTerms: [
        { term: 'sepsis', definition: 'A life-threatening condition when your body\'s response to an infection damages its own tissues', pronunciation: 'SEP-sis' },
        { term: 'infection', definition: 'When germs like bacteria get inside your body and start to cause harm' },
        { term: 'antibiotics', definition: 'Medicines that kill bacteria or stop them from growing' },
        { term: 'organ failure', definition: 'When body organs stop working properly' },
      ],
      analogies: [
        'Sepsis is like your body\'s fire department overreacting to a small fire by flooding the entire house - the water damage becomes worse than the original fire.',
        'Think of it as your immune system becoming so panicked by an infection that it accidentally attacks your own body.',
      ],
      examples: [
        'An elderly person with a urinary tract infection might develop sepsis if the bacteria spread to the bloodstream.',
        'Someone with pneumonia could develop sepsis if their body\'s response to the lung infection becomes overwhelming.',
      ],
    },
    2: {
      level: 2,
      summary: 'Sepsis is a dysregulated host response to infection causing life-threatening organ dysfunction, diagnosed by the presence of infection plus signs of systemic inflammation and organ failure, requiring urgent antibiotics and supportive care.',
      explanation: `Sepsis represents a spectrum from infection with systemic response to severe organ dysfunction and shock.

**Definitions (Sepsis-3):**

**Sepsis:**
Infection + organ dysfunction (SOFA score increase ≥ 2)

**Septic Shock:**
Sepsis + vasopressor requirement for MAP ≥ 65 + lactate > 2 mmol/L despite adequate fluid resuscitation

**Recognizing Sepsis:**

**SOFA Score Components:**
- Respiratory: PaO2/FiO2 ratio
- Coagulation: Platelet count
- Liver: Bilirubin
- Cardiovascular: Blood pressure/vasopressors
- Neurological: Glasgow Coma Scale
- Renal: Creatinine, urine output

**qSOFA (Quick Screen):**
≥2 of the following suggests possible sepsis:
- Respiratory rate ≥ 22
- Altered mental status
- Systolic BP ≤ 100 mmHg

**Common Sources of Sepsis:**
1. Lungs (pneumonia) - most common
2. Urinary tract
3. Abdomen (appendicitis, bowel perforation)
4. Skin/soft tissue (cellulitis, wound infections)
5. Central line infections
6. Meningitis

**Hour-1 Bundle (Time Zero = Triage):**
1. Measure lactate (repeat if > 2)
2. Obtain blood cultures before antibiotics
3. Administer broad-spectrum antibiotics
4. Begin 30 mL/kg crystalloid for hypotension or lactate ≥ 4
5. Start vasopressors if hypotensive during/after fluids

**Why Each Step Matters:**

**Blood Cultures:**
- Two sets from different sites
- Identify the organism for targeted therapy
- Must be BEFORE antibiotics, but don't delay antibiotics to obtain

**Antibiotics:**
- Broad-spectrum initially (cover likely pathogens)
- Each hour delay increases mortality ~8%
- Narrow based on culture results

**Fluids:**
- 30 mL/kg of crystalloid (e.g., 2.1 L for 70 kg person)
- May need more based on response
- Too little = persistent shock; too much = fluid overload

**Vasopressors:**
- If MAP < 65 despite fluids
- Norepinephrine is first choice
- Supports blood pressure to maintain organ perfusion

**Source Control:**
- Drain abscesses
- Remove infected devices
- Surgical intervention when needed (appendectomy, debridement)

**Monitoring Response:**
- Lactate should decrease with treatment
- Urine output should improve
- Mental status should clear
- Blood pressure should stabilize`,
      keyTerms: [
        { term: 'SOFA score', definition: 'Sequential Organ Failure Assessment - scoring system to measure organ dysfunction', pronunciation: 'SO-fa' },
        { term: 'lactate', definition: 'A marker in the blood that rises when tissues don\'t get enough oxygen' },
        { term: 'source control', definition: 'Treating or removing the source of infection (drainage, surgery)' },
        { term: 'broad-spectrum antibiotics', definition: 'Antibiotics that work against many types of bacteria' },
        { term: 'vasopressors', definition: 'Medications that raise blood pressure by constricting blood vessels' },
      ],
      analogies: [
        'The Hour-1 Bundle is like a fire drill - specific steps that must happen quickly and in order for the best outcome.',
        'Source control is like putting out the fire before it spreads - you need to eliminate where the infection is coming from.',
      ],
    },
    3: {
      level: 3,
      summary: 'Sepsis represents dysregulated immune responses to infection causing endothelial dysfunction, coagulopathy, and multi-organ failure, managed through rapid source control, antimicrobial optimization, hemodynamic resuscitation, and organ support.',
      explanation: `Sepsis pathophysiology involves complex interactions between host and pathogen with cascading organ dysfunction.

**Pathophysiology:**

**Immune Activation:**
- PAMPs (pathogen-associated molecular patterns) trigger PRRs (pattern recognition receptors)
- TLRs, NOD-like receptors activate inflammatory cascade
- Cytokine release: TNF-α, IL-1, IL-6, IL-8
- Complement activation

**Endothelial Dysfunction:**
- Increased vascular permeability → third-spacing
- Loss of vasomotor tone → vasodilation
- Disrupted glycocalyx
- Capillary leak → tissue edema

**Coagulation Abnormalities:**
- Tissue factor expression
- DIC (disseminated intravascular coagulation)
- Microthrombi formation
- Impaired fibrinolysis

**Cellular Dysfunction:**
- Mitochondrial dysfunction
- Impaired oxygen utilization
- Cellular dysoxia despite adequate DO2

**Organ Failure Mechanisms:**

**Cardiovascular:**
- Septic cardiomyopathy (reversible)
- Vasodilation (decreased SVR)
- Decreased venous return (capillary leak)

**Respiratory:**
- ARDS from capillary leak
- Increased dead space
- V/Q mismatch

**Renal:**
- AKI from hypoperfusion and inflammation
- Tubular injury
- May need RRT

**Hepatic:**
- Cholestasis
- Coagulopathy from decreased factor synthesis
- Impaired lactate clearance

**Neurological:**
- Sepsis-associated encephalopathy
- Delirium
- Long-term cognitive impairment

**Antimicrobial Therapy:**

**Empiric Selection Based on Source:**

| Source | Typical Pathogens | Empiric Therapy |
|--------|------------------|-----------------|
| Lungs (CAP) | Strep pneumo, Legionella | Ceftriaxone + azithromycin |
| Lungs (HAP/VAP) | Pseudomonas, MRSA | Pip-tazo + vanc ± aminoglycoside |
| UTI | E. coli, Klebsiella | Ceftriaxone or fluoroquinolone |
| Abdomen | Gram-negatives, anaerobes | Pip-tazo or meropenem |
| Skin/soft tissue | Strep, Staph | Vancomycin + pip-tazo |
| Unknown | Broad coverage | Meropenem + vancomycin |

**De-escalation:**
- Narrow antibiotics based on culture results
- Daily antibiotic review
- Procalcitonin may guide duration

**Hemodynamic Management:**

**Fluid Resuscitation:**
- Crystalloid first-line (balanced preferred)
- Albumin may be considered
- Assess fluid responsiveness (PPV, PLR)
- Avoid excessive fluid after initial resuscitation

**Vasopressor Algorithm:**
- Norepinephrine first-line
- Add vasopressin at 0.03 units/min
- Consider epinephrine or dobutamine if CO low
- Target MAP ≥ 65 mmHg

**Adjunctive Therapies:**
- Hydrocortisone: Consider if shock refractory to fluids + vasopressors
- Glucose control: Target 144-180 mg/dL
- DVT prophylaxis
- Stress ulcer prophylaxis (if high risk)
- RRT for refractory acidosis, fluid overload, uremia`,
      keyTerms: [
        { term: 'PAMPs', definition: 'Pathogen-Associated Molecular Patterns - microbial molecules recognized by the immune system' },
        { term: 'DIC', definition: 'Disseminated Intravascular Coagulation - widespread clotting and bleeding disorder' },
        { term: 'glycocalyx', definition: 'Endothelial surface layer; damage leads to capillary leak in sepsis' },
        { term: 'septic cardiomyopathy', definition: 'Reversible cardiac dysfunction due to sepsis-related myocardial depression' },
        { term: 'procalcitonin', definition: 'Biomarker elevated in bacterial infection; may guide antibiotic duration' },
      ],
      clinicalNotes: 'Blood cultures before antibiotics is critical but should not delay antibiotic administration more than 45 minutes. In severe sepsis, empiric antibiotics take priority. The goal is "cultures, then antibiotics" within the first hour.',
    },
    4: {
      level: 4,
      summary: 'Sepsis management requires integration of early recognition protocols, precision antimicrobial selection accounting for resistance patterns, goal-directed hemodynamic optimization with dynamic monitoring, and evidence-based adjunctive therapies while planning for source control interventions.',
      explanation: `Advanced sepsis management synthesizes evidence-based bundles with individualized care and emerging therapies.

**Sepsis Phenotypes:**

**Immunological Subtypes:**
- α (alpha): Most common, moderate response
- β (beta): Immunosuppressed, poor baseline
- γ (gamma): Hyperinflammatory
- δ (delta): Multiorgan dysfunction

Clinical implications emerging for phenotype-directed therapy.

**Biomarker Integration:**

**Procalcitonin:**
- Elevated in bacterial > viral infection
- Guides antibiotic duration (reduction when < 0.5 or 80% decrease)
- May reduce antibiotic exposure by 2-3 days

**Lactate:**
- Initial value: Prognosis
- Clearance: Response to therapy
- Serial measurements every 2-4 hours

**Other Biomarkers:**
- Presepsin: Macrophage activation
- Mid-regional proadrenomedullin (MR-proADM): Endothelial dysfunction
- Soluble urokinase plasminogen activator receptor (suPAR): Risk stratification

**Antimicrobial Optimization:**

**Pharmacokinetic/Pharmacodynamic Considerations:**

*Beta-lactams:*
- Time-dependent killing
- Target: 100% fT>MIC (or 100% fT>4×MIC for severe infections)
- Extended/continuous infusions improve target attainment

*Vancomycin:*
- AUC/MIC 400-600 for MRSA
- Trough-only monitoring being replaced by AUC monitoring

*Aminoglycosides:*
- Concentration-dependent
- Once-daily dosing for Cmax/MIC optimization

**Multidrug-Resistant Considerations:**
- ESBL: Carbapenems
- CRE: Ceftazidime-avibactam, meropenem-vaborbactam
- MRSA: Vancomycin, daptomycin, linezolid

**Resuscitation Endpoints:**

**Dynamic Hemodynamic Assessment:**
- Pulse pressure variation (>13% suggests fluid responsive)
- Passive leg raise (10% CO increase = responsive)
- End-expiratory occlusion test

**Tissue Perfusion Markers:**
- Capillary refill time < 3 seconds
- Mottling score improvement
- Central-to-peripheral temperature gradient

**Lactate-Guided vs. CRT-Guided:**
- ANDROMEDA-SHOCK: Similar outcomes
- Both valid endpoints

**Source Control Strategies:**

**Timing:**
- Ideally within 6-12 hours of diagnosis
- Balance: Stabilization vs. early intervention
- Some sources require immediate surgery

**Modalities:**
- Percutaneous drainage (CT-guided)
- Surgical debridement
- Device removal (infected lines, prosthetics)
- Endoscopic intervention

**Steroid Therapy:**

**ADRENAL Trial:**
- Hydrocortisone + fludrocortisone
- Faster shock resolution
- No significant mortality benefit
- Reasonable for refractory shock

**APROCCHSS Trial:**
- Mortality benefit in severe septic shock
- French cohort

**Practical Approach:**
- Consider in septic shock requiring escalating vasopressors
- Hydrocortisone 50 mg IV q6h or 200 mg/day continuous
- Taper when vasopressors weaned

**ARDS Management in Sepsis:**
- Low tidal volume ventilation
- Conservative fluid strategy (after initial resuscitation)
- Prone positioning for P/F < 150
- See mechanical ventilation module

**Nutrition:**
- Early enteral nutrition when feasible
- Avoid overfeeding in acute phase
- Trophic feeds initially acceptable`,
      keyTerms: [
        { term: 'sepsis phenotypes', definition: 'Distinct clinical and biological subgroups within sepsis population with different outcomes and treatment responses' },
        { term: 'antimicrobial stewardship', definition: 'Systematic approach to optimizing antibiotic use to improve outcomes and minimize resistance' },
        { term: 'AUC monitoring', definition: 'Area-under-curve drug level monitoring for vancomycin; more accurate than trough alone' },
        { term: 'source control', definition: 'Physical measures to eliminate focus of infection, drain collections, or remove infected devices' },
        { term: 'mottling score', definition: 'Visual assessment of skin mottling pattern; correlates with microcirculatory dysfunction' },
      ],
      clinicalNotes: 'Extended infusion piperacillin-tazobactam (4-hour infusion) improves pharmacodynamic target attainment compared to traditional 30-minute infusion. For critically ill patients or suspected resistant organisms, this strategy may improve outcomes.',
    },
    5: {
      level: 5,
      summary: 'Precision sepsis medicine integrates immunophenotyping, host transcriptomic signatures, and real-time biomarker kinetics to guide personalized immunomodulation, while emerging therapies target specific dysregulated pathways and machine learning enables predictive analytics for early intervention and outcome optimization.',
      explanation: `Cutting-edge sepsis care moves toward precision medicine with personalized therapies based on individual patient biology.

**Sepsis Immunophenotyping:**

**Transcriptomic Signatures:**
- SRS (Sepsis Response Signature) endotypes
- Mars endotypes (Mars1-4) correlating with mortality
- Gene expression panels for immune state

**Immune Function Assessment:**
- HLA-DR expression on monocytes (immunoparalysis marker)
- Lymphocyte counts and apoptosis
- Cytokine profiles

**Clinical Implications:**
- Hyperinflammatory: May benefit from anti-inflammatory (anti-IL-6?)
- Immunoparalysis: GM-CSF, IFN-γ, IL-7 under investigation

**Host-Directed Therapies:**

**Anti-Cytokine Approaches:**
- Anti-IL-6 (tocilizumab): COVID-19 data, sepsis trials ongoing
- Anti-IL-1 (anakinra): Some signal in macrophage activation
- Anti-TNF: Failed in earlier trials

**Immunostimulation:**
- GM-CSF for immunoparalysis
- IFN-γ for refractory fungal/mycobacterial
- IL-7 for lymphopenia (clinical trials)
- Checkpoint inhibitor reversal (anti-PD-1/PD-L1)

**Metabolic Interventions:**
- Vitamin C: CITRIS-ALI, VITAMINS - mixed results
- Thiamine: Cofactor for lactate metabolism
- Selenium, zinc: Antioxidant cofactors

**Extracorporeal Blood Purification:**

**CytoSorb:**
- Cytokine adsorption device
- Removes inflammatory mediators
- European experience; US studies ongoing

**PMX (Polymyxin B Hemoperfusion):**
- Endotoxin removal
- EUPHRATES trial: Possible benefit in high-endotoxin subgroup
- Targeted use being explored

**Plasma Exchange:**
- DIC with microvascular thrombosis
- TMA-like presentations

**Advanced Hemodynamic Management:**

**Microcirculatory Assessment:**
- Sublingual videomicroscopy
- Perfused vessel density as target
- Gap between macro and micro hemodynamics

**Angiotensin II (Giapreza):**
- ATHOS-3: MAP improvement in catecholamine-resistant shock
- Consider when NE > 0.2-0.3 mcg/kg/min

**Selepressin:**
- V1a-selective vasopressin analog
- Less fluid accumulation
- SEPSIS-ACT results awaited

**Predictive Analytics and AI:**

**Early Warning Systems:**
- Machine learning sepsis prediction (3-6 hours before clinical recognition)
- Electronic health record integration
- Controversy over performance (Epic Sepsis Model critiques)

**Treatment Optimization:**
- Reinforcement learning for vasopressor dosing
- Fluid responsiveness prediction
- Antibiotic selection algorithms

**Decision Support:**
- Real-time bundle compliance monitoring
- Automated lactate order reminders
- Escalation alerts

**Long-Term Outcomes:**

**Post-Sepsis Syndrome:**
- Cognitive dysfunction (30-50% of survivors)
- Physical disability
- Mental health (PTSD, depression, anxiety)
- Immune dysfunction (recurrent infections)

**Survivorship Care:**
- Post-ICU clinic follow-up
- Cognitive rehabilitation
- Mental health screening
- Medication reconciliation
- Secondary prevention

**Research Frontiers:**
- Sepsis vaccines targeting common pathogens
- Trained immunity modulation
- Microbiome-directed therapy
- Personalized antibiotic dosing based on pharmacogenomics`,
      keyTerms: [
        { term: 'SRS endotypes', definition: 'Sepsis Response Signature classifications based on blood transcriptomic profiles predicting outcomes and treatment response' },
        { term: 'CytoSorb', definition: 'Extracorporeal cytokine adsorption device for removal of inflammatory mediators' },
        { term: 'immunoparalysis', definition: 'State of sepsis-induced immune suppression characterized by reduced monocyte HLA-DR expression' },
        { term: 'post-sepsis syndrome', definition: 'Long-term physical, cognitive, and psychological impairments affecting sepsis survivors' },
        { term: 'theragnostics', definition: 'Integration of diagnostic biomarkers with targeted therapeutic selection' },
      ],
      clinicalNotes: `**Emerging Practice Considerations:**
- Low HLA-DR expression may identify candidates for immunostimulation
- High ferritin + low fibrinogen suggests macrophage activation syndrome
- Persistent elevation of PCT despite source control should prompt reassessment

**Research Priorities:**
- Biomarker-guided immunomodulation trials
- Machine learning for phenotype identification
- Long-term outcomes studies
- Implementation science for bundle adherence

**Post-ICU Care:**
- 20% readmission rate within 30 days
- Increased mortality for 2+ years
- Structured survivorship programs improve outcomes`,
    },
  },

  media: [
    {
      id: 'sepsis-pathophysiology',
      type: 'diagram',
      filename: 'sepsis-pathophysiology.svg',
      title: 'Sepsis Pathophysiology',
      description: 'Illustration of the cascade from infection to organ dysfunction',
    },
    {
      id: 'sepsis-bundle',
      type: 'diagram',
      filename: 'sepsis-hour-1-bundle.svg',
      title: 'Hour-1 Bundle',
      description: 'Visual guide to the Surviving Sepsis Campaign Hour-1 Bundle',
    },
  ],
  citations: [
    {
      id: 'surviving-sepsis-2021',
      type: 'article',
      title: 'Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock 2021',
      source: 'Critical Care Medicine',
    },
    {
      id: 'sepsis-3',
      type: 'article',
      title: 'The Third International Consensus Definitions for Sepsis and Septic Shock (Sepsis-3)',
      authors: ['Singer M', 'et al'],
      source: 'JAMA',
    },
  ],
  crossReferences: [
    { targetId: 'critical-care-shock', targetType: 'topic', relationship: 'related', label: 'Shock' },
    { targetId: 'infectious-disease-bacterial', targetType: 'topic', relationship: 'related', label: 'Bacterial Infections' },
    { targetId: 'critical-care-multi-organ-failure', targetType: 'topic', relationship: 'child', label: 'Multi-Organ Failure' },
    { targetId: 'critical-care-mechanical-ventilation', targetType: 'topic', relationship: 'related', label: 'Mechanical Ventilation' },
  ],
  tags: {
    systems: ['immune', 'cardiovascular', 'multisystem'],
    topics: ['critical-care', 'infectious-disease', 'emergency-medicine'],
    keywords: ['sepsis', 'septic shock', 'infection', 'antibiotics', 'resuscitation', 'organ failure'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'surgery', 'emergency-medicine'] },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default sepsisRecognitionTreatment;
