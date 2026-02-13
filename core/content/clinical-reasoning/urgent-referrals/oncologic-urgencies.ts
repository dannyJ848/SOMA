/**
 * Oncologic Urgencies
 *
 * Cancer-related conditions requiring urgent or emergent evaluation and management
 * to prevent serious complications or death.
 */

import { EducationalContent } from '../../types';

export const oncologicUrgenciesContent: EducationalContent = {
  id: 'oncologic-urgencies',
  type: 'concept',
  name: 'Oncologic Urgencies',
  alternateNames: ['Cancer Emergencies', 'Oncology Emergencies', 'Malignancy Urgencies'],

  levels: {
    1: {
      level: 1,
      summary: 'Oncologic urgencies are serious problems related to cancer that need immediate medical attention to prevent severe complications.',
      explanation: `Cancer can sometimes cause serious problems that need immediate medical care. These are called oncologic urgencies. Knowing when to seek help quickly can prevent severe complications.

**Call 911 or Go to Emergency Room For:**

**Trouble Breathing**
If you cannot catch your breath, or if your face, neck, or chest is swelling.

**Signs of Infection With Fever**
If you have a fever of 100.4 F (38 C) or higher while getting chemotherapy, you need immediate care.

**Severe Headache or Confusion**
Sudden severe headache, confusion, or trouble speaking could mean cancer has affected the brain.

**Severe Back Pain With Weakness**
Sudden severe back pain, especially with numbness or trouble moving your legs.

**Blood in Vomit or Stool**
Vomiting blood or black, tarry stools means bleeding inside your body.

**Severe Constipation With Belly Pain**
If you cannot pass gas or stool and have severe belly pain and bloating.

**Call Your Cancer Doctor Urgently For:**

**New Severe Pain**
Pain that is not controlled by your current medications.

**Nausea and Vomiting**
You cannot keep down food or fluids.

**Signs of Blood Clots**
Swelling, redness, or pain in one leg, or sudden chest pain and shortness of breath.

**Mouth Sores**
Sores that make it hard to eat or drink.

**Why Quick Action Matters:**
- Infections can become life-threatening quickly in cancer patients
- Early treatment prevents permanent damage
- Some complications can be treated if caught early
- Never wait to see if serious symptoms get better on their own`,
      keyTerms: [
        { term: 'oncology', definition: 'The branch of medicine that deals with the prevention, diagnosis, and treatment of cancer' },
        { term: 'chemotherapy', definition: 'Treatment for cancer using powerful medicines that kill cancer cells' },
        { term: 'neutropenia', definition: 'A condition where you have low white blood cells, making it hard to fight infections' },
        { term: 'spinal cord compression', definition: 'Pressure on the spinal cord, usually from a tumor, that can cause paralysis' },
      ],
      analogies: [
        'Oncologic urgencies are like smoke detectors in a house - they warn you of danger that needs immediate attention before it becomes a disaster.',
        'They are like warning lights on a car dashboard - they indicate problems that could cause serious damage if ignored.',
      ],
      examples: [
        'A person getting chemotherapy who develops a fever must go to the emergency room immediately because their body cannot fight infection well.',
        'Someone with cancer who suddenly cannot move their legs needs emergency help because a tumor may be pressing on their spinal cord.',
      ],
    },
    2: {
      level: 2,
      summary: 'Oncologic urgencies are acute, potentially life-threatening complications of cancer or its treatment requiring immediate medical intervention.',
      explanation: `Oncologic urgencies encompass a range of conditions that can occur in patients with cancer. Early recognition and prompt treatment are essential to prevent severe morbidity or mortality.

**Major Oncologic Emergencies:**

**1. Febrile Neutropenia**
- Fever >38.3 C (101 F) or >38.0 C sustained for 1 hour
- Absolute neutrophil count (ANC) <500 cells/microL
- Risk of rapid bacterial infection progression
- Requires immediate broad-spectrum antibiotics

**2. Spinal Cord Compression**
- Back pain (often precedes neurologic symptoms)
- Motor weakness, sensory changes
- Bowel/bladder dysfunction
- Medical emergency requiring immediate imaging and treatment

**3. Superior Vena Cava (SVC) Syndrome**
- Facial/neck swelling
- Dyspnea, cough
- Distended neck veins
- Often from lung cancer or lymphoma

**4. Tumor Lysis Syndrome**
- Occurs after starting chemotherapy
- Metabolic abnormalities: high potassium, phosphate, uric acid; low calcium
- Can cause kidney failure and cardiac arrhythmias
- Prevention with hydration and allopurinol/rasburicase

**5. Hypercalcemia of Malignancy**
- Confusion, constipation, polyuria
- Dehydration
- Cardiac arrhythmias
- Most common in breast cancer, lung cancer, multiple myeloma

**6. Neutropenic Enterocolitis (Typhlitis)**
- Right lower quadrant pain in neutropenic patient
- Fever, abdominal distension
- Requires broad-spectrum antibiotics

**7. Malignant Pericardial Effusion/Tamponade**
- Dyspnea, chest discomfort
- Signs of cardiac compression
- May require urgent pericardiocentesis

**Urgent (Non-Emergent) Oncologic Issues:**

- Severe uncontrolled pain
- Intractable nausea/vomiting
- Significant bleeding
- Deep vein thrombosis
- New neurologic symptoms (without cord compression)
- Severe mucositis`,
      keyTerms: [
        { term: 'febrile neutropenia', definition: 'Fever in a patient with low neutrophil count, indicating high risk for serious infection' },
        { term: 'superior vena cava syndrome', definition: 'Obstruction of blood flow through the SVC causing facial swelling and breathing difficulty (SVC syndrome)' },
        { term: 'tumor lysis syndrome', definition: 'Metabolic derangements caused by rapid breakdown of cancer cells after treatment' },
        { term: 'pericardial tamponade', definition: 'Accumulation of fluid around the heart that impairs pumping function' },
        { term: 'ANC', definition: 'Absolute Neutrophil Count - measure of infection-fighting white blood cells' },
      ],
      analogies: [
        'Managing oncologic emergencies is like having a specialized fire department for cancer patients - they need unique equipment and protocols because standard approaches may not work.',
        'It is like maintaining a race car - the high-performance treatments need constant monitoring for problems that would not occur in regular vehicles.',
      ],
      examples: [
        'A lymphoma patient starting chemotherapy develops high potassium and low calcium - this is tumor lysis syndrome requiring immediate intervention.',
        'A lung cancer patient with facial swelling and difficulty breathing likely has SVC syndrome and needs urgent radiation therapy.',
      ],
    },
    3: {
      level: 3,
      summary: 'Oncologic urgencies require systematic assessment using established criteria, rapid diagnostic workup, and evidence-based interventions to optimize patient outcomes in the oncology population.',
      explanation: `## Oncologic Emergency Management

### Febrile Neutropenia

**Diagnostic Criteria:**
- Single oral temperature >38.3 C (101 F)
- Temperature >38.0 C (100.4 F) sustained over 1 hour
- ANC <500 cells/microL or expected to fall below 500

**Risk Stratification (MASCC Score):**
- Low risk: Score >=21 (outpatient management possible)
- High risk: Score <21 (requires hospitalization)

**Management:**
- Immediate blood cultures (peripheral and central line)
- Broad-spectrum antibiotics within 1 hour
- Piperacillin-tazobactam or cefepime standard
- Add vancomycin if MRSA risk, line infection, or hemodynamic instability
- Granulocyte colony-stimulating factor (G-CSF) if not already on prophylaxis

### Spinal Cord Compression

**Clinical Presentation:**
- Back pain (95% of cases) - precedes neurologic deficits
- Motor weakness (progressive)
- Sensory level
- Autonomic dysfunction (urinary retention, constipation)

**Diagnostic Workup:**
- MRI of entire spine (preferred) or CT myelogram
- Plain films may show vertebral destruction

**Treatment:**
- Dexamethasone 10 mg IV immediately (reduce edema)
- Radiation therapy (most common)
- Surgical decompression (if: unknown primary, spinal instability, prior radiation, progressive deficits)

### Superior Vena Cava Syndrome

**Etiology:**
- Lung cancer (75% of cases)
- Non-Hodgkin lymphoma
- Thrombosis (indwelling catheters)

**Management:**
- Elevate head of bed
- Oxygen if hypoxic
- Diuretics (limited benefit)
- Tissue diagnosis if unknown primary
- Radiation or chemotherapy based on tumor type
- Stenting for severe cases

### Tumor Lysis Syndrome

**Cairo-Bishop Criteria:**
| Parameter | Laboratory TLS | Clinical TLS |
|-----------|---------------|--------------|
| Uric acid | >8 mg/dL or 25% increase | Lab criteria plus |
| Potassium | >6 mEq/L or 25% increase | Creatinine >1.5x ULN |
| Phosphorus | >4.5 mg/dL (children 6.5) | or cardiac arrhythmia |
| Calcium | <7 mg/dL or 25% decrease | or seizure |

**Prevention:**
- Hydration (2-3 L/m2/day)
- Allopurinol (reduces uric acid production)
- Rasburicase (recombinant urate oxidase) for high risk
- Urine alkalinization (controversial)

### Hypercalcemia of Malignancy

**Mechanisms:**
- PTHrP secretion (most common - 80%)
- Osteolytic metastases
- Vitamin D-mediated (lymphoma)
- Ectopic PTH (rare)

**Treatment:**
- IV normal saline (4-6 L/day, monitor for fluid overload)
- Loop diuretics after hydration
- Bisphosphonates (zoledronic acid, pamidronate) - onset 2-4 days
- Denosumab (if refractory to bisphosphonates)
- Calcitonin (rapid onset, short duration)

### Malignant Pericardial Effusion

**Diagnosis:**
- Echocardiography (confirm and assess hemodynamics)
- ECG (electrical alternans, low voltage)
- Chest X-ray (enlarged cardiac silhouette)

**Management:**
- Pericardiocentesis if tamponade physiology
- Pericardial window for recurrent effusions
- Systemic therapy based on tumor type
- Consider radiation for lymphoma`,
      keyTerms: [
        { term: 'MASCC score', definition: 'Multinational Association for Supportive Care in Cancer risk index for febrile neutropenia' },
        { term: 'PTHrP', definition: 'Parathyroid Hormone-related Peptide - causes hypercalcemia in many cancers' },
        { term: 'pericardiocentesis', definition: 'Procedure to drain fluid from the pericardial sac' },
        { term: 'myelogram', definition: 'Imaging study using contrast dye injected into the spinal canal' },
        { term: 'electrical alternans', definition: 'Beat-to-beat variation in QRS amplitude seen in pericardial effusion' },
      ],
    },
    4: {
      level: 4,
      summary: 'Advanced management of oncologic urgencies requires integration of supportive care principles, understanding of chemotherapeutic toxicities, and coordination with multidisciplinary oncology teams for optimal patient-centered outcomes.',
      explanation: `## Advanced Oncologic Emergency Management

### Complex Febrile Neutropenia Scenarios

**Persistent Fever:**
- Reassess at 48-72 hours
- Add antifungal coverage if risk factors present
- Consider CT chest/abdomen/sinus to evaluate for fungal infection
- Empiric antifungal options: Micafungin, caspofungin, voriconazole, liposomal amphotericin

**Antimicrobial Selection:**
| Scenario | Empiric Regimen |
|----------|-----------------|
| Standard risk | Piperacillin-tazobactam OR Cefepime |
| MRSA risk | Add vancomycin or linezolid |
| PCN allergy | Aztreonam + vancomycin |
| Anaerobic concern | Add metronidazole |
| Fungal risk | Add echinocandin |

**Breakthrough Fungal Infections:**
- Mold-active azoles (voriconazole, isavuconazole, posaconazole)
- Liposomal amphotericin B
- Echinocandins for candidemia

### Radiation Emergencies

**Radiation Pneumonitis:**
- Occurs 1-3 months post-radiation
- Symptoms: Dry cough, dyspnea, fever
- Imaging: Ground-glass opacities within radiation field
- Treatment: Corticosteroids (prednisone 1 mg/kg)

**Radiation Enteritis:**
- Acute: During or shortly after treatment
- Chronic: Months to years later
- Management: Dietary modifications, anti-diarrheals, steroids for severe cases

**Radiation Cystitis:**
- Hemorrhagic cystitis may require bladder irrigation
- Hyperbaric oxygen for refractory cases
- Intravesical therapy (alum, formalin for severe bleeding)

### Chemotherapy Toxicities

**Anthracycline Cardiotoxicity:**
- Cumulative dose-dependent
- Acute: Arrhythmias, pericarditis-myocarditis
- Chronic: Cardiomyopathy, heart failure
- Prevention: Dexrazoxane, liposomal formulations
- Monitoring: Echocardiography, biomarkers (BNP, troponin)

**Platinum Nephrotoxicity:**
- Acute kidney injury
- Electrolyte abnormalities (hypomagnesemia)
- Prevention: Aggressive hydration

**Vinca Alkaloid Neurotoxicity:**
- Peripheral neuropathy
- Autonomic dysfunction (constipation, ileus)
- Severe: Paralytic ileus requiring bowel rest

**5-FU Cardiotoxicity:**
- Chest pain, vasospastic angina
- ECG changes mimicking ischemia
- Management: Calcium channel blockers, nitrates

### Oncologic Pain Crisis

**WHO Analgesic Ladder:**
1. Non-opioids (acetaminophen, NSAIDs)
2. Weak opioids (tramadol, codeine)
3. Strong opioids (morphine, oxycodone, fentanyl)

**Opioid Rotation:**
- Consider when inadequate analgesia or side effects
- Calculate equianalgesic doses
- Reduce dose by 25-50% when rotating

**Adjuvant Analgesics:**
- Corticosteroids (dexamethasone for bone pain, neuropathic pain)
- Anticonvulsants (gabapentin, pregabalin for neuropathic pain)
- Antidepressants (duloxetine, amitriptyline)
- Bisphosphonates/denosumab for bone metastases

### Malignant Bowel Obstruction

**Etiology:**
- Tumor infiltration
- Adhesions
- Constipation (opioid-induced)
- Paralytic ileus

**Management:**
- Conservative: NPO, NG tube decompression, IV fluids
- Corticosteroids (reduce peritumoral edema)
- Octreotide (reduce secretions)
- Surgery (selected patients with good performance status, single level obstruction)
- Venting gastrostomy (palliative)

### End-of-Life Emergencies

**Terminal Hemorrhage:**
- Dark towels to reduce distress
- Sedation (midazolam, morphine)
- Supportive care for family

**Acute Confusion/Delirium:**
- Reversible causes: Infection, medication, metabolic
- Non-pharmacologic interventions first
- Haloperidol or atypical antipsychotics if needed`,
      keyTerms: [
        { term: 'echinocandin', definition: 'Class of antifungal medications that inhibit beta-glucan synthesis in fungal cell walls' },
        { term: 'dexrazoxane', definition: 'Cardioprotective agent used with anthracyclines to reduce cardiotoxicity' },
        { term: 'equianalgesic', definition: 'Doses of different opioids that provide equivalent pain relief' },
        { term: 'venting gastrostomy', definition: 'Surgically placed tube to decompress the stomach in bowel obstruction' },
        { term: 'WHO analgesic ladder', definition: 'Stepwise approach to pain management developed by the World Health Organization' },
      ],
      clinicalNotes: 'Cancer patients often present with atypical symptoms due to immunosuppression and altered physiology. A high index of suspicion for infection is essential in febrile neutropenia - do not wait for definitive evidence of infection before starting antibiotics. Time to antibiotics is a critical quality metric.',
    },
    5: {
      level: 5,
      summary: 'Expert-level oncologic emergency management encompasses precision oncology approaches, recognition of novel immunotherapy toxicities, advanced supportive care interventions, and quality improvement initiatives in cancer care delivery.',
      explanation: `## Expert-Level Oncologic Emergency Management

### Immunotherapy-Related Emergencies

**Immune Checkpoint Inhibitor Toxicities:**

**Myocarditis (Highest Fatality Rate):**
- Incidence: 0.1-1%
- Fatality: Up to 50%
- Presentation: Arrhythmia, heart failure, conduction block
- Management: High-dose steroids (methylprednisolone 1 g/day), cardiac monitoring

**Pneumonitis:**
- Incidence: 3-5% (higher with PD-1/PD-L1 inhibitors)
- Grading: Grade 1 (asymptomatic) to Grade 4 (life-threatening)
- Grade >=2: Hold immunotherapy, high-dose steroids
- Grade >=3: Permanent discontinuation

**Colitis:**
- Diarrhea, abdominal pain
- Endoscopic findings: Diffuse erythema, ulcerations
- Management: Steroids; infliximab if refractory
- Rule out infection (C. difficile, CMV)

**Encephalitis:**
- Headache, confusion, seizures
- MRI: Limbic encephalitis pattern
- CSF: Pleocytosis, elevated protein
- Management: High-dose steroids; consider IVIG, plasmapheresis

**Adrenal Insufficiency:**
- Fatigue, hypotension, electrolyte abnormalities
- AM cortisol and ACTH stimulation testing
- Lifelong hydrocortisone replacement

### CAR-T Cell Therapy Toxicities

**Cytokine Release Syndrome (CRS):**
- Grading system (Lee/ASTCT criteria)
- Fever, hypotension, hypoxia
- Elevated ferritin, CRP
- Management: Tocilizumab (IL-6 receptor blocker) + steroids for severe

**Immune Effector Cell-Associated Neurotoxicity Syndrome (ICANS):**
- Encephalopathy, aphasia, tremor, seizures
- Grading: ICE score (Immune Effector Cell-Associated Encephalopathy)
- Management: Steroids; consider anakinra for refractory cases

**Hemophagocytic Lymphohistiocytosis (HLH/MAS):**
- Elevated ferritin, triglycerides; cytopenias
- High mortality if not recognized
- Treatment: Etoposide-based protocols, anakinra

### Chimeric Antigen Receptor T-Cell Complications

**B-cell Aplasia/Hypogammaglobulinemia:**
- Persistent if CAR-T targets CD19/CD20
- IVIG replacement if severe infections

**Prolonged Cytopenias:**
- May last months post-infusion
- G-CSF support
- Transfusion support as needed

### Biomarker-Guided Management

**ctDNA Monitoring:**
- Early detection of progression
- Treatment response assessment
- Molecular profiling without tissue biopsy

**Pharmacogenomics:**

**DPD Deficiency (Fluoropyrimidines):**
- DPYD variants predict toxicity
- Testing before 5-FU/capecitabine
- Dose reduction or alternative therapy if variant present

**TPMT/NUDT15 (Thiopurines):**
- Variants increase toxicity risk
- Dose adjustment based on genotype

### Advanced Supportive Care

**Bone Metastases Management:**

**Oligometastatic Disease:**
- SBRT (Stereotactic Body Radiation Therapy)
- Ablative approaches
- Potential for prolonged survival

**Skeletal-Related Event Prevention:**
- Zoledronic acid or denosumab
- Calcium and vitamin D supplementation
- Dental evaluation before starting (osteonecrosis risk)

**Malignant Pleural Effusions:**
- Pleurodesis (talc, doxycycline)
- Indwelling pleural catheter
- Pleurex catheter for recurrent effusions

**Malignant Ascites:**
- Paracentesis for symptom relief
- Peritoneal drainage catheter
- Intraperitoneal chemotherapy (selected cases)

### Quality Metrics in Oncologic Emergencies

**Time to Antibiotics (Febrile Neutropenia):**
- Goal: <60 minutes from presentation
- Quality measure for oncology programs
- Impact on mortality

**Radiation Therapy Planning:**
- Urgent palliation: <24 hours from simulation
- Emergency palliation: Same day if possible

**Multidisciplinary Tumor Boards:**
- Complex case review
- Treatment planning
- Coordination of care

### Clinical Trials in Emergency Oncology

**Emergency Department-Based Trials:**
- Trial enrollment in acute presentations
- Informed consent challenges
- Regulatory considerations

**Palliative Care Integration:**
- Early referral improves outcomes
- Symptom management
- Goals of care discussions

### Future Directions

**AI in Oncologic Emergency Detection:**
- Early sepsis prediction
- Deterioration warning systems
- Imaging interpretation

**Liquid Biopsy Applications:**
- Rapid molecular profiling
- Treatment selection in emergencies
- Resistance mechanism identification

**Precision Emergency Oncology:**
- Genotype-directed therapy
- Targeted agents for oncologic emergencies
- Personalized supportive care`,
      keyTerms: [
        { term: 'CAR-T cell therapy', definition: 'Treatment using genetically modified T-cells to attack cancer cells' },
        { term: 'tocilizumab', definition: 'Monoclonal antibody against IL-6 receptor used for CRS management' },
        { term: 'ICANS', definition: 'Immune Effector Cell-Associated Neurotoxicity Syndrome' },
        { term: 'ctDNA', definition: 'Circulating tumor DNA - DNA fragments from cancer cells found in blood' },
        { term: 'SBRT', definition: 'Stereotactic Body Radiation Therapy - highly focused radiation treatment' },
      ],
      clinicalNotes: `The landscape of oncologic emergencies is rapidly evolving with the advent of immunotherapy and cellular therapies. Key principles:
1. High index of suspicion for uncommon toxicities with new therapies
2. Early consultation with oncology for complex cases
3. Multidisciplinary approach involving palliative care, infectious disease, critical care
4. Understanding that cancer patients may present atypically due to immunosuppression
5. Integration of quality metrics to drive improved outcomes

Immune-related adverse events (irAEs) can occur weeks to months after immunotherapy initiation and require prompt recognition and high-dose steroid management.`,
    },
  },

  media: [],

  citations: [
    {
      id: 'nccn-febrile-neutropenia',
      type: 'article',
      title: 'NCCN Clinical Practice Guidelines: Prevention and Treatment of Cancer-Related Infections',
      source: 'National Comprehensive Cancer Network',
      url: 'https://www.nccn.org/professionals/physician_gls/pdf/infections.pdf',
    },
    {
      id: 'mascc-guidelines',
      type: 'article',
      title: 'The MASCC Risk Index Score for Febrile Neutropenia',
      authors: ['Klastersky J', 'et al.'],
      source: 'Annals of Oncology',
    },
    {
      id: ' Cairo-bishop-tls',
      type: 'article',
      title: 'Tumor Lysis Syndrome: New Therapeutic Strategies and Classification',
      authors: ['Cairo MS', 'Bishop M'],
      source: 'British Journal of Haematology',
    },
  ],

  crossReferences: [
    { targetId: 'cardiac-referral-criteria', targetType: 'concept', relationship: 'sibling', label: 'Cardiac Referral Criteria' },
    { targetId: 'neurological-referrals', targetType: 'concept', relationship: 'sibling', label: 'Neurological Referrals' },
    { targetId: 'psychiatric-emergencies', targetType: 'concept', relationship: 'sibling', label: 'Psychiatric Emergencies' },
  ],

  tags: {
    systems: ['oncology', 'immune'],
    topics: ['emergency-medicine', 'oncology', 'clinical-reasoning'],
    keywords: ['cancer', 'oncology', 'emergency', 'neutropenia', 'tumor lysis', 'immunotherapy'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'emergency-medicine', 'oncology'],
    },
  },

  createdAt: '2026-01-28T12:00:00.000Z',
  updatedAt: '2026-01-28T12:00:00.000Z',
  version: 1,
  status: 'published',
};

export default oncologicUrgenciesContent;
