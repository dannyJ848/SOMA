import { EducationalContent } from '../../types';

export const SEPSIS: EducationalContent = {
  id: 'infectious-disease-sepsis',
  type: 'condition',
  name: 'Sepsis',
  alternateNames: ['Septicemia', 'Blood Poisoning', 'Systemic Inflammatory Response'],
  levels: {
    1: {
      level: 1,
      summary: 'Sepsis happens when an infection spreads through your body and causes dangerous problems with how your organs work.',
      explanation: `Normally when you get an infection - like a cut that gets red and swollen - your body fights it in just that one spot. But sometimes, germs can spread into your bloodstream and travel throughout your entire body. When this happens, your body's defense system goes into overdrive, and this can actually hurt your own organs.

**What Happens in Sepsis:**
Think of your immune system like a fire department. If there's a small fire (infection), firefighters come and put it out with just the right amount of water. But in sepsis, it's like the fire department panics and floods the entire building with water, causing damage everywhere - not just where the fire was.

**Warning Signs:**
- Very high fever or feeling very cold and shivery
- Heart beating very fast
- Breathing very quickly
- Confusion or feeling very sleepy
- Severe pain or feeling "the worst you've ever felt"
- Skin that looks mottled, pale, or bluish

**Why It's Serious:**
Sepsis is a medical emergency. Without fast treatment, organs like the kidneys, lungs, and heart can stop working. The good news is that if caught early and treated quickly with antibiotics and IV fluids, most people recover.

**How to Prevent Sepsis:**
- Keep cuts and wounds clean
- Get recommended vaccines
- Wash hands frequently
- See a doctor if an infection seems to be getting worse instead of better`,
      keyTerms: [
        { term: 'Sepsis', definition: 'A life-threatening condition where the body\'s response to infection damages its own organs' },
        { term: 'Bloodstream', definition: 'The blood flowing through your body that carries oxygen and nutrients everywhere' },
        { term: 'Organs', definition: 'Important body parts like the heart, lungs, and kidneys that keep you alive' },
        { term: 'Infection', definition: 'When germs get into your body and multiply, making you sick' },
      ],
    },
    2: {
      level: 2,
      summary: 'Sepsis is a life-threatening organ dysfunction caused by a dysregulated host response to infection, requiring rapid recognition and treatment.',
      explanation: `Sepsis occurs when the body's immune response to infection becomes uncontrolled, leading to widespread inflammation that damages tissues and organs far from the original infection site.

**The Progression of Sepsis:**
1. **Infection** - Bacteria, viruses, or fungi enter the body
2. **Immune Response** - The body releases chemicals to fight infection
3. **Dysregulation** - The immune response becomes excessive and harmful
4. **Organ Dysfunction** - Blood pressure drops, organs don't get enough oxygen
5. **Septic Shock** - Severe low blood pressure despite IV fluids, very high mortality

**Common Sources of Infection:**
- Lungs (pneumonia) - most common
- Urinary tract infections
- Abdominal infections
- Skin and soft tissue infections
- Bloodstream infections from IV lines

**Recognizing Sepsis (qSOFA Criteria):**
Warning signs that suggest sepsis:
- Respiratory rate ≥ 22 breaths per minute
- Altered mental status (confusion)
- Systolic blood pressure ≤ 100 mmHg

Two or more of these in a patient with suspected infection suggests sepsis.

**Treatment - The "Sepsis Bundle":**
Time is critical. The "Hour-1 Bundle" includes:
- Measure lactate level (indicates tissue oxygen deprivation)
- Obtain blood cultures before antibiotics
- Administer broad-spectrum antibiotics
- Give IV fluids rapidly if blood pressure is low
- Start vasopressors if blood pressure remains low despite fluids

**Who Is at Higher Risk:**
- Very young and very old patients
- People with weakened immune systems
- Patients with chronic diseases (diabetes, kidney disease)
- Those with invasive devices (IV lines, urinary catheters)`,
      keyTerms: [
        { term: 'Organ dysfunction', definition: 'When an organ is not working properly due to disease or injury' },
        { term: 'Dysregulated', definition: 'Not properly controlled; in sepsis, the immune response is excessive' },
        { term: 'Septic shock', definition: 'The most severe form of sepsis with dangerous low blood pressure despite treatment' },
        { term: 'Vasopressor', definition: 'A medication that raises blood pressure by constricting blood vessels' },
        { term: 'Lactate', definition: 'A chemical produced when tissues don\'t get enough oxygen; elevated in sepsis' },
      ],
    },
    3: {
      level: 3,
      summary: 'Sepsis represents a syndrome of life-threatening organ dysfunction resulting from dysregulated host responses to infection, characterized by complex immunological, metabolic, and cardiovascular derangements requiring time-sensitive intervention.',
      explanation: `The Sepsis-3 definitions (2016) established sepsis as "life-threatening organ dysfunction caused by a dysregulated host response to infection," moving away from the previous SIRS-based criteria that lacked specificity.

**Pathophysiology:**

*Immune Dysregulation:*
- Initial hyperinflammatory phase with cytokine release (TNF-α, IL-1, IL-6)
- Pattern recognition receptors (TLRs) activated by pathogen-associated molecular patterns (PAMPs)
- Damage-associated molecular patterns (DAMPs) from tissue injury amplify response
- Subsequent immunosuppression phase with lymphocyte apoptosis and exhaustion

*Endothelial Dysfunction:*
- Loss of vascular barrier function causing edema
- Impaired vasoregulation leading to distributive shock
- Glycocalyx degradation
- Microvascular thrombosis

*Coagulation Abnormalities:*
- Activation of coagulation cascade
- Suppression of anticoagulant pathways (protein C, antithrombin)
- Disseminated intravascular coagulation (DIC) in severe cases

*Cellular Metabolic Dysfunction:*
- Mitochondrial dysfunction and impaired oxygen utilization
- Lactate accumulation from anaerobic metabolism and clearance impairment
- "Cytopathic hypoxia" - cells unable to use oxygen even when present

**Diagnostic Criteria:**

*SOFA Score (Sequential Organ Failure Assessment):*
Assesses dysfunction in six organ systems:
- Respiratory (PaO2/FiO2 ratio)
- Coagulation (platelet count)
- Liver (bilirubin)
- Cardiovascular (mean arterial pressure, vasopressor requirement)
- Central nervous system (Glasgow Coma Scale)
- Renal (creatinine, urine output)

Sepsis: Suspected infection + SOFA score increase ≥ 2 points

*Septic Shock Definition:*
Sepsis with:
- Vasopressor requirement to maintain MAP ≥ 65 mmHg
- Lactate > 2 mmol/L despite adequate fluid resuscitation

**Management:**

*Resuscitation:*
- Crystalloid fluid bolus (30 mL/kg within 3 hours)
- Target MAP ≥ 65 mmHg
- Norepinephrine as first-line vasopressor
- Consider vasopressin as second-line agent

*Antimicrobial Therapy:*
- Broad-spectrum antibiotics within 1 hour of recognition
- Source control (drainage of abscesses, removal of infected devices)
- De-escalation based on culture results

*Supportive Care:*
- Lung-protective ventilation if ARDS develops
- Conservative fluid management after initial resuscitation
- Stress ulcer and VTE prophylaxis
- Glucose control (target 144-180 mg/dL)`,
      keyTerms: [
        { term: 'SOFA score', definition: 'Sequential Organ Failure Assessment - a scoring system measuring dysfunction in six organ systems' },
        { term: 'PAMPs', definition: 'Pathogen-associated molecular patterns - conserved microbial molecules recognized by the immune system' },
        { term: 'DAMPs', definition: 'Damage-associated molecular patterns - molecules released from injured host cells that trigger inflammation' },
        { term: 'Distributive shock', definition: 'Shock caused by vasodilation and abnormal blood flow distribution, despite normal or high cardiac output' },
        { term: 'DIC', definition: 'Disseminated intravascular coagulation - widespread activation of clotting leading to both clots and bleeding' },
      ],
    },
    4: {
      level: 4,
      summary: 'Sepsis pathophysiology involves complex host-pathogen interactions, immunothrombosis, endothelial dysfunction, and metabolic reprogramming, with management guided by evolving evidence on resuscitation strategies, antimicrobial optimization, and organ support.',
      explanation: `Advanced understanding of sepsis requires integration of molecular immunology, cardiovascular physiology, and critical care principles.

**Molecular Pathophysiology:**

*Innate Immune Activation:*
- TLR4 recognition of LPS initiates NF-κB signaling cascade
- Inflammasome activation (NLRP3) leads to IL-1β and IL-18 release
- Pyroptosis and NETosis contribute to tissue damage
- Complement activation amplifies inflammation

*Cytokine Networks:*
- TNF-α: Early mediator, induces fever, activates endothelium
- IL-1β: Synergizes with TNF-α, promotes fever and acute phase response
- IL-6: Acute phase protein synthesis, B cell differentiation
- IL-10: Anti-inflammatory, associated with immunoparalysis
- Type I interferons: Important in viral sepsis

*Immunosuppression Phase:*
- Lymphocyte apoptosis (T cells, B cells, dendritic cells)
- Expansion of regulatory T cells and myeloid-derived suppressor cells
- Monocyte/macrophage deactivation (reduced HLA-DR expression)
- Increased susceptibility to secondary infections

**Hemodynamic Considerations:**

*Septic Cardiomyopathy:*
- Biventricular systolic and diastolic dysfunction
- Reduced contractility due to circulating myocardial depressant factors
- Usually reversible within 7-10 days
- Associated with better prognosis (possibly due to adequate preload)

*Fluid Responsiveness:*
- Static parameters (CVP) poor predictors of fluid responsiveness
- Dynamic parameters: Pulse pressure variation, stroke volume variation
- Passive leg raise test for spontaneously breathing patients
- Goal: Avoid both under-resuscitation and fluid overload

*Vasopressor Selection:*
- Norepinephrine: First-line (α1 > β1 effects)
- Vasopressin: V1 receptor agonist, catecholamine-sparing, potential survival benefit
- Epinephrine: Alternative first-line, increases lactate independently
- Phenylephrine: Pure α1, may reduce cardiac output
- Angiotensin II: For refractory vasodilatory shock

**Antimicrobial Stewardship in Sepsis:**

*Optimizing Empiric Therapy:*
- Local antibiogram-guided selection
- Prior cultures and resistance patterns
- Risk factors for resistant organisms (prior antibiotics, healthcare exposure)
- Pharmacokinetic considerations (altered Vd, renal clearance)

*PK/PD Optimization:*
- Time-dependent antibiotics: Extended or continuous infusions (β-lactams)
- Concentration-dependent: Higher doses with extended intervals
- Loading doses for critically ill patients
- Therapeutic drug monitoring (vancomycin, aminoglycosides)

**Adjunctive Therapies:**

*Corticosteroids:*
- Hydrocortisone 200 mg/day for refractory septic shock
- ADRENAL trial: No mortality benefit, faster shock reversal
- APROCCHSS trial: Mortality benefit with hydrocortisone + fludrocortisone
- Consider in vasopressor-dependent shock

*Other Investigational Therapies:*
- Vitamin C combinations (VITAMINS trial negative)
- Extracorporeal blood purification (limited evidence)
- β-blockers for heart rate control (esmolol)
- Immunomodulatory therapies (IL-7, checkpoint inhibitors for immunoparalysis)`,
      keyTerms: [
        { term: 'Immunoparalysis', definition: 'A state of profound immunosuppression following initial hyperinflammation, characterized by reduced monocyte HLA-DR and susceptibility to secondary infections' },
        { term: 'NETosis', definition: 'Neutrophil extracellular trap formation - a form of cell death where neutrophils release chromatin and antimicrobial proteins' },
        { term: 'Pyroptosis', definition: 'Inflammatory programmed cell death mediated by inflammasomes and gasdermin D' },
        { term: 'Septic cardiomyopathy', definition: 'Reversible myocardial dysfunction occurring in sepsis, characterized by biventricular dilation with reduced ejection fraction' },
        { term: 'Fluid responsiveness', definition: 'The likelihood that a patient will increase cardiac output in response to fluid administration' },
      ],
      clinicalNotes: 'Recognition of the immunosuppression phase has shifted focus toward restoring immune function in some patients. Biomarkers like procalcitonin can guide antibiotic duration. The pendulum on fluid resuscitation has swung toward more conservative approaches after initial resuscitation.',
    },
    5: {
      level: 5,
      summary: 'Contemporary sepsis management integrates precision phenotyping, PK/PD-optimized antimicrobial therapy, goal-directed hemodynamic management, and emerging immunomodulatory strategies within a framework of early recognition, source control, and organ support.',
      explanation: `Expert sepsis care requires synthesis of evolving evidence, individualized assessment, and systems-level optimization of care delivery.

**Sepsis Phenotyping:**

*Clinical Phenotypes:*
The SENECA study identified distinct sepsis phenotypes with different outcomes:
- α (33%): Minimal organ dysfunction, lowest mortality
- β (27%): Older, chronic illness, renal dysfunction
- γ (27%): Inflammation/coagulation markers, respiratory failure
- δ (13%): Liver dysfunction, septic shock, highest mortality

*Transcriptomic Signatures:*
- SRS1 (immunosuppressed): Higher mortality, may benefit from immunostimulation
- SRS2 (immunocompetent): Standard management appropriate
- Mars classifications showing prognostic utility
- Moving toward rapid molecular phenotyping for personalized therapy

**Advanced Hemodynamic Management:**

*Comprehensive Monitoring:*
- Echocardiography for ventricular function and fluid responsiveness
- Pulmonary artery catheterization in selected patients
- Microcirculatory assessment (sublingual capillaroscopy)
- Tissue perfusion markers (ScvO2, venoarterial CO2 gap)

*Hemodynamic Coherence:*
- Macro-hemodynamics (MAP, cardiac output) may not reflect tissue perfusion
- Microcirculatory dysfunction can persist despite normalized macro-parameters
- Targeting microcirculatory recruitment under investigation

*Personalized BP Targets:*
- Chronic hypertension may require higher MAP targets
- SEPSISPAM trial: No overall benefit of MAP 80-85 vs 65-70 mmHg
- Individualized targets based on tissue perfusion assessment

**Antimicrobial Optimization:**

*Rapid Diagnostics:*
- Blood culture systems with rapid AST (8-12 hours)
- PCR-based pathogen identification (1-2 hours from positive culture)
- Metagenomic next-generation sequencing
- β-lactam therapeutic drug monitoring increasingly adopted

*De-escalation and Duration:*
- Procalcitonin-guided discontinuation reduces antibiotic exposure
- Short-course therapy (7 days) non-inferior for many infections
- Daily assessment for de-escalation opportunities

**Immunomodulation:**

*Targeting Immunosuppression:*
- IFN-γ for monocyte reactivation (case series data)
- IL-7 to reverse lymphopenia (phase II trials)
- GM-CSF for monocyte function (limited evidence)
- Checkpoint inhibitors (anti-PD-1) under investigation

*Timing and Patient Selection:*
- Biomarkers of immunoparalysis (HLA-DR < 8000 molecules/cell)
- Risk of rebound hyperinflammation
- Precision approaches to identify responders

**Organ Support Considerations:**

*Mechanical Ventilation:*
- ARDS develops in ~50% of sepsis patients
- Low tidal volume (6 mL/kg PBW) mandatory
- Prone positioning for P/F < 150
- ECMO for refractory hypoxemia in selected patients

*Renal Replacement Therapy:*
- ~50% of septic shock patients develop AKI
- Timing: STARRT-AKI suggests no benefit of early initiation
- Modality: No difference between continuous and intermittent
- Dose: 20-25 mL/kg/hr effluent

**Quality Improvement:**

*Surviving Sepsis Campaign Bundles:*
- Hour-1 Bundle elements
- Electronic alert systems for early identification
- Sepsis response teams
- Performance feedback and audit

*Post-Sepsis Syndrome:*
- Cognitive impairment, psychological morbidity, physical disability
- Increased mortality and healthcare utilization post-discharge
- Need for rehabilitation and follow-up
- Patient and family education

**Emerging Research:**

*Novel Biomarkers:*
- Presepsin (sCD14-ST): Early sepsis detection
- Mid-regional proadrenomedullin (MR-proADM): Prognostication
- Pancreatic stone protein: Infection identification
- Combinations may improve diagnostic accuracy

*Therapeutic Innovations:*
- Nangibotide (TREM-1 inhibitor): Phase II trials
- Selepressin (selective V1A agonist): Development discontinued
- Extracorporeal cytokine removal: Inconclusive evidence
- Mesenchymal stem cells: Preclinical promise`,
      keyTerms: [
        { term: 'Hemodynamic coherence', definition: 'The alignment between systemic hemodynamic parameters and tissue/microcirculatory perfusion' },
        { term: 'Sepsis phenotypes', definition: 'Distinct clinical or molecular subgroups of sepsis patients with different pathophysiology and treatment responses' },
        { term: 'Post-sepsis syndrome', definition: 'Long-term physical, psychological, and cognitive impairments affecting sepsis survivors' },
        { term: 'TREM-1', definition: 'Triggering receptor expressed on myeloid cells-1, an amplifier of inflammatory responses and therapeutic target' },
        { term: 'ScvO2', definition: 'Central venous oxygen saturation, a marker of the balance between oxygen delivery and consumption' },
      ],
      clinicalNotes: 'The heterogeneity of sepsis has led to numerous failed clinical trials of targeted therapies. Precision medicine approaches using rapid phenotyping may enable better patient selection for specific interventions. Quality improvement efforts focusing on early recognition and bundle compliance continue to demonstrate mortality reductions. Long-term outcomes and survivor quality of life are increasingly recognized as important endpoints.',
    },
  },
  media: [],
  citations: [
    {
      id: 'singer-sepsis3-2016',
      type: 'article',
      title: 'The Third International Consensus Definitions for Sepsis and Septic Shock (Sepsis-3)',
      authors: ['Singer M', 'Deutschman CS', 'Seymour CW'],
      source: 'JAMA',
      license: 'Copyrighted',
    },
    {
      id: 'ssc-guidelines-2021',
      type: 'article',
      title: 'Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock 2021',
      authors: ['Evans L', 'Rhodes A', 'Alhazzani W'],
      source: 'Critical Care Medicine',
      license: 'Copyrighted',
    },
  ],
  crossReferences: [
    { targetId: 'infectious-disease-pneumonia', targetType: 'condition', relationship: 'related', label: 'Pneumonia' },
    { targetId: 'infectious-disease-utis', targetType: 'condition', relationship: 'related', label: 'Urinary Tract Infections' },
    { targetId: 'infectious-disease-antibiotic-resistance', targetType: 'concept', relationship: 'related', label: 'Antibiotic Resistance' },
  ],
  tags: {
    systems: ['infectious-disease', 'critical-care'],
    topics: ['sepsis', 'shock', 'organ-failure', 'emergency'],
    keywords: ['septic shock', 'SOFA', 'organ dysfunction', 'vasopressors', 'resuscitation'],
    clinicalRelevance: 'critical',
  },
  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
