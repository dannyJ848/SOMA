/**
 * Oncologic Emergencies Educational Content
 *
 * Critical presentations requiring urgent management including:
 * - Tumor lysis syndrome
 * - Hypercalcemia of malignancy
 * - Spinal cord compression
 * - Superior vena cava syndrome
 * - Febrile neutropenia
 * - Brain metastases with increased ICP
 */

import { EducationalContent } from '../../types';

export const oncologicEmergenciesContent: EducationalContent = {
  id: 'oncology-oncologic-emergencies',
  type: 'concept',
  name: 'Oncologic Emergencies',
  alternateNames: ['Cancer emergencies', 'Oncology emergencies', 'Malignancy-related emergencies'],

  levels: {
    1: {
      level: 1,
      summary: 'Some cancer-related problems need emergency treatment because they can become life-threatening very quickly.',
      explanation: `Cancer can sometimes cause sudden, serious problems that need to be treated right away. These are called oncologic emergencies.

**Common Cancer Emergencies:**

*Fever with Low White Blood Cells (Febrile Neutropenia):*
- Cancer treatment can lower white blood cells
- White blood cells fight infection
- A fever with low white blood cells is dangerous
- Need antibiotics immediately

*Too Much Calcium in the Blood (Hypercalcemia):*
- Some cancers release substances that raise calcium
- Can cause confusion, thirst, constipation
- Severe cases cause heart problems
- Treated with IV fluids and medications

*Pressure on the Spinal Cord (Spinal Cord Compression):*
- Cancer can press on the spine
- Causes back pain, weakness, numbness
- Can lead to paralysis if not treated quickly
- Usually needs steroids and radiation

*Blocked Blood Vessel in Chest (Superior Vena Cava Syndrome):*
- Cancer blocks the main vein returning blood from the head
- Face and arms swell
- Hard to breathe
- Treated with radiation or stent

*Tumor Lysis Syndrome:*
- When cancer cells die quickly (from treatment), they release their contents
- This can damage the kidneys and heart
- Need IV fluids and medications to prevent

**When to Get Help:**
- Fever over 100.4°F (38°C) during cancer treatment
- Sudden severe back pain with leg weakness
- Face swelling with difficulty breathing
- Confusion or extreme thirst
- Unable to urinate`,
      keyTerms: [
        { term: 'emergency', definition: 'A medical situation that needs immediate treatment' },
        { term: 'neutropenia', definition: 'Having very low white blood cells that fight infection' },
        { term: 'calcium', definition: 'A mineral in the blood that can become dangerously high in some cancers' },
        { term: 'spinal cord', definition: 'The bundle of nerves running through the spine that controls movement and feeling' },
      ],
      analogies: [
        'Febrile neutropenia is like having a fire (fever) when all the firefighters (white blood cells) are away.',
        'Spinal cord compression is like a hose being stepped on - if the pressure isn\'t relieved, everything downstream stops working.',
      ],
      examples: [
        'A patient on chemotherapy develops a fever of 101°F and needs to go to the emergency room for antibiotics.',
        'A person with lung cancer develops severe back pain and leg weakness, needing urgent radiation to prevent paralysis.',
      ],
    },
    2: {
      level: 2,
      summary: 'Oncologic emergencies are urgent conditions caused by cancer or its treatment requiring immediate intervention to prevent serious complications or death.',
      explanation: `**Major Oncologic Emergencies:**

**1. Febrile Neutropenia**
*Definition:* Fever (≥38.3°C or ≥38.0°C sustained for 1 hour) with absolute neutrophil count (ANC) <500/mm³

*Causes:*
- Chemotherapy-induced bone marrow suppression
- Highest risk 7-14 days after chemotherapy

*Management:*
- Blood cultures before antibiotics
- Broad-spectrum antibiotics within 1 hour
- Hospital admission for high-risk patients
- Antifungals if fever persists

**2. Hypercalcemia of Malignancy**
*Definition:* Elevated calcium (typically >12 mg/dL) due to cancer

*Mechanisms:*
- PTHrP secretion (squamous cell cancers, breast, renal)
- Bone metastases with osteolysis
- Vitamin D production (lymphomas)

*Symptoms:* "Stones, bones, groans, moans, and psychiatric overtones"
- Kidney stones, bone pain, constipation, abdominal pain, confusion

*Management:*
- IV fluids (aggressive hydration)
- Bisphosphonates (zoledronic acid)
- Calcitonin (for rapid reduction)
- Treat underlying cancer

**3. Malignant Spinal Cord Compression**
*Definition:* Tumor causing compression of spinal cord or cauda equina

*Red Flags:*
- Back pain (often first symptom)
- Leg weakness
- Sensory level
- Bowel/bladder dysfunction (late sign)

*Management:*
- High-dose steroids immediately (dexamethasone)
- Emergency MRI of entire spine
- Radiation therapy or surgery
- Time is critical - paralysis can be permanent

**4. Superior Vena Cava Syndrome (SVCS)**
*Definition:* Obstruction of SVC causing impaired venous return from head/arms

*Symptoms:*
- Face/neck swelling (worse when lying down)
- Arm swelling
- Dyspnea, cough
- Headache, visual changes

*Causes:* Lung cancer, lymphoma, mediastinal masses

*Management:*
- Elevate head of bed
- Steroids if lymphoma suspected
- Radiation therapy
- SVC stent for severe symptoms
- Emergency only if airway compromise

**5. Tumor Lysis Syndrome (TLS)**
*Definition:* Release of cell contents when cancer cells die rapidly

*Lab Findings:*
- High potassium, phosphorus, uric acid
- Low calcium
- Can cause kidney failure, arrhythmias

*Risk Factors:*
- Large, rapidly proliferating tumors
- High white blood cell count (leukemia/lymphoma)
- High LDH
- Starting chemotherapy

*Prevention/Management:*
- Aggressive IV fluids
- Allopurinol or rasburicase
- Monitor labs frequently
- Dialysis if severe`,
      keyTerms: [
        { term: 'febrile neutropenia', definition: 'Fever with very low infection-fighting white blood cells, usually from chemotherapy' },
        { term: 'hypercalcemia', definition: 'Dangerously high calcium levels in the blood' },
        { term: 'PTHrP', definition: 'Parathyroid hormone-related protein; secreted by some cancers causing high calcium' },
        { term: 'tumor lysis syndrome', definition: 'Release of cell contents when tumor cells die rapidly, causing metabolic problems' },
        { term: 'spinal cord compression', definition: 'Pressure on the spinal cord from tumor, causing neurological problems' },
      ],
      analogies: [
        'Tumor lysis syndrome is like a dam bursting - all the contents of the cells flood out at once and overwhelm the body\'s cleanup systems.',
        'Superior vena cava syndrome is like a clogged drain - blood backs up because it can\'t get through.',
      ],
    },
    3: {
      level: 3,
      summary: 'Oncologic emergencies require rapid recognition and protocolized management, with specific interventions determined by the underlying mechanism and patient factors.',
      explanation: `**Febrile Neutropenia - Detailed Management:**

*Risk Stratification (MASCC Score):*
- High risk: MASCC <21, expected prolonged neutropenia, comorbidities
- Low risk: MASCC ≥21, expected short duration, no comorbidities

*Initial Management:*
- Blood cultures (peripheral and line if present)
- Empiric antibiotics within 60 minutes
- High-risk: IV antipseudomonal beta-lactam (piperacillin-tazobactam, cefepime, meropenem)
- Low-risk: Oral ciprofloxacin + amoxicillin-clavulanate (outpatient possible)

*Additional Considerations:*
- Add vancomycin if: Hemodynamic instability, skin/soft tissue infection, pneumonia, catheter infection
- Add antifungal if fever persists >4-7 days (amphotericin or echinocandin)
- G-CSF not routinely recommended for treatment

**Hypercalcemia - Stepwise Approach:**

*Severity Classification:*
- Mild: 10.5-12 mg/dL (often asymptomatic)
- Moderate: 12-14 mg/dL (symptoms common)
- Severe: >14 mg/dL (emergency)

*Treatment Algorithm:*
1. IV saline (200-300 mL/hr initially, adjust for fluid status)
2. Bisphosphonate (zoledronic acid 4mg IV over 15 min)
   - Onset 2-4 days, duration 2-4 weeks
3. Calcitonin 4 units/kg q12h (for rapid reduction, tachyphylaxis in 48h)
4. Denosumab if refractory or renal impairment
5. Dialysis for refractory cases

*Loop diuretics: Only after adequate rehydration, not routine*

**Malignant Spinal Cord Compression:**

*Clinical Assessment:*
- Level of compression: Determines sensory level
- Motor function: Grade 0-5 strength
- Urgency: Ambulatory status at diagnosis predicts outcome

*Imaging:*
- MRI whole spine (compression may be at multiple levels)
- If MRI contraindicated: CT myelography

*Treatment:*
- Dexamethasone 10mg IV bolus, then 4mg q6h (controversial high-dose regimens)
- Radiation therapy: Standard for radiosensitive tumors, poor surgical candidates
- Surgery: Indicated for unknown primary, radioresistant tumors, spinal instability, single site, good prognosis

**Superior Vena Cava Syndrome:**

*Diagnostic Approach:*
- CT chest with contrast: Identifies site/extent, guides biopsy
- Tissue diagnosis before treatment (usually can wait)
- Exception: Airway compromise, stridor - treat first

*Treatment by Etiology:*
- SCLC: Chemotherapy/radiation (highly responsive)
- NSCLC: Radiation, concurrent chemoradiation
- Lymphoma: Chemotherapy
- Thrombus: Anticoagulation

*SVC Stenting:*
- Rapid symptom relief
- Bridge to definitive treatment
- Increasingly used upfront

**Tumor Lysis Syndrome:**

*Cairo-Bishop Classification:*
- Laboratory TLS: ≥2 of: Uric acid >8, K >6, Phos >4.5, Ca <7
- Clinical TLS: Laboratory TLS + creatinine >1.5x ULN, arrhythmia, seizure, death

*Prevention:*
- Risk stratify (high: aggressive NHL, ALL, high WBC)
- Hydration 2-3 L/m²/day starting 24-48h before
- Allopurinol 100-300mg/m²/day (prevents new uric acid)
- Rasburicase 0.2mg/kg if high risk (degrades existing uric acid)

*Monitoring:*
- Labs q6-8h during high-risk period
- Urine output, fluid balance
- ECG for arrhythmias`,
      keyTerms: [
        { term: 'MASCC score', definition: 'Multinational Association for Supportive Care in Cancer score; predicts risk in febrile neutropenia' },
        { term: 'rasburicase', definition: 'Recombinant urate oxidase enzyme that rapidly degrades uric acid in tumor lysis syndrome' },
        { term: 'bisphosphonate', definition: 'Drug that inhibits bone resorption, used for hypercalcemia and bone metastases' },
        { term: 'denosumab', definition: 'RANKL inhibitor; alternative to bisphosphonates for hypercalcemia' },
      ],
      clinicalNotes: 'Time to treatment is critical: Antibiotics within 60 minutes for febrile neutropenia, steroids immediately for suspected cord compression. Always get tissue diagnosis before treating SVC syndrome unless airway is compromised.',
    },
    4: {
      level: 4,
      summary: 'Management of oncologic emergencies requires understanding pathophysiology, evidence-based protocols, and multidisciplinary coordination to optimize outcomes.',
      explanation: `**Advanced Febrile Neutropenia Management:**

*Antibiotic Selection Nuances:*
- Local resistance patterns guide choice
- Consider colonization (ESBL, VRE, MRSA)
- Prior infections and antibiotics
- Penicillin allergy: Aztreonam + vancomycin or fluoroquinolone + clindamycin

*When to Add Gram-Positive Coverage:*
- Hemodynamic instability
- Pneumonia (especially if MRSA risk)
- Soft tissue infection
- Catheter-related infection suspected
- Mucositis with fluoroquinolone prophylaxis

*Antifungal Escalation:*
- Persistent fever day 4-7: Add empiric antifungal
- Mold-active: Voriconazole, posaconazole, or amphotericin
- Candida coverage: Echinocandin (caspofungin, micafungin)
- High-risk patients: Consider prophylaxis during neutropenia

*G-CSF Use:*
- Primary prophylaxis if regimen has >20% FN risk
- Secondary prophylaxis after FN episode
- Treatment: Not routine, consider if sepsis, prolonged neutropenia expected

**Hypercalcemia Pathophysiology:**

*PTHrP-Mediated (Humoral Hypercalcemia of Malignancy):*
- PTHrP mimics PTH actions
- Increases bone resorption
- Increases renal calcium reabsorption
- Common in squamous cell carcinomas, breast, renal cell

*Osteolytic:*
- Direct bone destruction by tumor
- Local cytokine production (RANKL, IL-6)
- Multiple myeloma, breast cancer bone metastases

*Calcitriol-Mediated:*
- Tumor produces 1,25-(OH)2 vitamin D
- Lymphomas, some granulomatous diseases
- Increases intestinal calcium absorption

*Treatment Considerations:*
- Zoledronic acid: Preferred, adjust for renal function
- Pamidronate: Alternative, longer infusion
- Denosumab: Useful if bisphosphonate-refractory or severe renal impairment
- May need to hold if dental procedures planned (osteonecrosis risk)

**Spinal Cord Compression - Surgical Considerations:**

*Patchell Trial Criteria for Surgery:*
- Single site of cord compression
- Paraplegia <48 hours
- Radiosensitive tumor (surgery may not add benefit)
- Expected survival >3 months
- Medically operable

*SINS Score (Spinal Instability):**
- Location, pain, bone lesion quality, alignment, vertebral body collapse, posterolateral involvement
- Score ≥7: Surgical consultation for stabilization

*Radiation Techniques:*
- Conventional external beam: Standard approach
- SBRT/SRS: For oligometastatic disease, reirradiation, radioresistant histologies

**Additional Emergencies:**

*Brain Metastases with Increased ICP:*
- Symptoms: Headache, nausea, papilledema, decreased LOC
- Management: Dexamethasone 10mg IV then 4mg q6h, mannitol for acute herniation
- Definitive: SRS, WBRT, surgery depending on number/size/status

*Cardiac Tamponade:*
- Malignant pericardial effusion (lung, breast common)
- Beck's triad: Hypotension, JVD, muffled heart sounds
- Pulsus paradoxus
- Echo-guided pericardiocentesis
- Pericardial window for recurrence

*Leukostasis:*
- WBC >100,000 with symptoms (dyspnea, confusion, headache)
- Most common in AML, ALL
- Emergent cytoreduction: Hydroxyurea, leukapheresis
- Avoid RBC transfusion before cytoreduction (increases viscosity)

*Hyperviscosity Syndrome:*
- Waldenstrom macroglobulinemia, multiple myeloma
- Visual changes, bleeding, neurologic symptoms
- Plasmapheresis urgent
- Avoid RBC transfusion`,
      keyTerms: [
        { term: 'SINS score', definition: 'Spinal Instability Neoplastic Score; assesses need for surgical stabilization' },
        { term: 'leukostasis', definition: 'Symptomatic hyperviscosity from extremely elevated WBC count' },
        { term: 'pulsus paradoxus', definition: 'Exaggerated fall in blood pressure during inspiration; sign of tamponade' },
        { term: 'leukapheresis', definition: 'Procedure to rapidly remove white blood cells from circulation' },
      ],
      clinicalNotes: 'For spinal cord compression, ambulatory status at presentation is the strongest predictor of outcome. Patients ambulatory at diagnosis have >80% chance of remaining ambulatory; non-ambulatory patients have <40% chance of regaining ambulation.',
    },
    5: {
      level: 5,
      summary: 'Optimal management of oncologic emergencies integrates evidence-based medicine, institutional protocols, and emerging therapies while considering patient goals and overall prognosis.',
      explanation: `**Evidence and Controversies:**

*Febrile Neutropenia:*
- Outpatient management: Safe in low-risk patients (MASCC ≥21, CISNE 0-2)
- Fluoroquinolone prophylaxis: Reduces FN but increases resistance
- Procalcitonin: May help identify bacterial infection
- Novel approaches: Anti-pseudomonal coverage duration, de-escalation strategies

*Hypercalcemia:*
- Denosumab vs bisphosphonates: Faster, deeper response with denosumab
- Rebound hypercalcemia with denosumab discontinuation
- Gallium nitrate: Alternative for refractory cases
- Cinacalcet: For parathyroid carcinoma

*Spinal Cord Compression:*
- High-dose vs conventional steroids: High-dose (100mg dex) not clearly superior, more toxicity
- SCORAD trial: Examining radiation dose/fractionation
- Role of MRI within 24 hours: May change management in 20-40%

**Rare but Critical Emergencies:**

*Hemophagocytic Lymphohistiocytosis (HLH):*
- Can be triggered by malignancy or immunotherapy
- Fever, cytopenias, hyperferritinemia (>10,000), high triglycerides
- H-score for diagnosis
- Treatment: Etoposide-based regimens, treat underlying cause

*Adrenal Crisis:*
- Bilateral adrenal metastases (lung, breast, melanoma)
- Checkpoint inhibitor-induced hypophysitis
- Abrupt steroid discontinuation in chronic users
- Management: Stress-dose hydrocortisone 100mg IV q8h

*Differentiation Syndrome:*
- Occurs with ATRA, arsenic (APL), IDH inhibitors
- Fever, respiratory distress, pulmonary infiltrates, weight gain
- Management: Dexamethasone 10mg IV q12h

*Cytokine Release Syndrome:*
- Post CAR-T, bispecific antibodies
- Grading: Fever, hypotension, hypoxia severity
- Management: Tocilizumab (IL-6R blocker), steroids

**Immunotherapy-Related Emergencies:**

*Severe Immune-Related Adverse Events:*
- Colitis: Grade 3-4 requires hospitalization, IV steroids, infliximab if refractory
- Pneumonitis: Grade ≥2 hold therapy, steroids
- Hepatitis: AST/ALT >5x ULN needs steroids
- Myocarditis: High mortality, early steroids, consider additional immunosuppression

*Hyperprogression:*
- Rapid disease progression after checkpoint inhibitor
- May represent true emergency
- Incidence 10-30% (definition-dependent)

**Goals of Care Considerations:**

*Prognostic Factors:*
- Performance status
- Tumor type and stage
- Availability of effective systemic therapy
- Prior therapies and response
- Patient goals and preferences

*When to Shift Focus:*
- Progressive disease on multiple lines
- Poor functional status (ECOG 3-4)
- Irreversible complications (complete paralysis)
- Patient preference for comfort

*Communication:*
- Discuss prognosis openly
- Define goals: Cure, life extension, symptom control
- Advanced care planning
- Hospice referral when appropriate

**Quality Metrics and Systems:**

*Time-Sensitive Interventions:*
- Door-to-antibiotic <60 minutes for febrile neutropenia
- MRI within 24 hours for suspected cord compression
- Oncology involvement within 24 hours for new diagnosis

*Institutional Protocols:*
- Standardized order sets
- Clinical pathways
- Rapid response teams
- 24/7 oncology coverage

**Emerging Approaches:**

*Precision Medicine in Emergencies:*
- Rapid molecular profiling for treatment decisions
- ctDNA for disease burden assessment
- Pharmacogenomics for drug selection

*Novel Therapeutics:*
- New antifungal agents for resistant infections
- Targeted therapies with rapid responses
- Immunotherapy combinations

*Technology:*
- AI for early warning (sepsis prediction)
- Telemedicine for remote monitoring
- Decision support tools`,
      keyTerms: [
        { term: 'HLH', definition: 'Hemophagocytic lymphohistiocytosis; severe hyperinflammatory syndrome' },
        { term: 'differentiation syndrome', definition: 'Inflammatory response to maturing leukemic cells during treatment of APL' },
        { term: 'cytokine release syndrome', definition: 'Systemic inflammatory response to immunotherapy causing fever and multiorgan dysfunction' },
        { term: 'hyperprogression', definition: 'Paradoxical acceleration of tumor growth after immunotherapy' },
        { term: 'MASCC score', definition: 'Risk stratification tool for febrile neutropenia (score ≥21 is low risk)' },
      ],
      clinicalNotes: `**Board-Relevant Points:**
- Know MASCC criteria and low-risk definition
- Hypercalcemia treatment order: Hydration first, then bisphosphonates
- Steroids immediately for suspected cord compression
- Tissue diagnosis before treating SVC syndrome (unless airway emergency)
- Know Cairo-Bishop criteria for TLS

**Practice Pearls:**
- Always consider goals of care in oncologic emergencies
- Time-sensitive conditions require institutional protocols
- Multidisciplinary involvement improves outcomes
- Document discussions about prognosis and goals
- Consider palliative care consultation for complex cases`,
    },
  },

  media: [
    {
      id: 'oncologic-emergencies-overview',
      type: 'diagram',
      filename: 'oncologic-emergencies-algorithm.svg',
      title: 'Oncologic Emergencies Recognition and Management',
      description: 'Flowchart for rapid assessment and treatment of common oncologic emergencies',
    },
  ],
  citations: [
    {
      id: 'nccn-febrile-neutropenia',
      type: 'website',
      title: 'NCCN Guidelines: Prevention and Treatment of Cancer-Related Infections',
      source: 'National Comprehensive Cancer Network',
    },
    {
      id: 'asco-hypercalcemia',
      type: 'article',
      title: 'Hypercalcemia of Malignancy and New Treatment Options',
      source: 'Journal of Clinical Oncology',
    },
  ],
  crossReferences: [
    { targetId: 'oncology-chemotherapy', targetType: 'topic', relationship: 'related', label: 'Chemotherapy' },
    { targetId: 'oncology-immunotherapy', targetType: 'topic', relationship: 'related', label: 'Immunotherapy' },
    { targetId: 'oncology-palliative-care', targetType: 'topic', relationship: 'related', label: 'Palliative Care' },
  ],
  tags: {
    systems: ['oncology', 'emergency-medicine'],
    topics: ['emergencies', 'critical-care', 'supportive-care'],
    keywords: ['febrile neutropenia', 'hypercalcemia', 'tumor lysis', 'spinal cord compression', 'SVC syndrome'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'emergency-medicine'] },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};
