/**
 * Sickle Cell Disease - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const sickleCell: EducationalContent = {
  id: 'condition-sickle-cell',
  type: 'condition',
  name: 'Sickle Cell Disease',
  alternateNames: ['SCD', 'Sickle Cell Anemia', 'HbSS', 'Sickle Cell-Hemoglobin C Disease', 'Sickle Beta-Thalassemia'],
  hpoId: 'HP:0001878',

  levels: {
    1: {
      level: 1,
      summary: 'Sickle cell disease is an inherited blood disorder where red blood cells become shaped like a sickle or crescent moon, causing pain, anemia, infections, and organ damage.',
      explanation: `Sickle cell disease (SCD) is a genetic condition that affects hemoglobin, the protein in red blood cells that carries oxygen throughout the body.

**What happens in SCD:**
- Red blood cells become stiff and curved like a sickle
- Sickle cells die early, causing anemia
- Cells get stuck in blood vessels, blocking blood flow
- Blocked vessels cause pain crises and organ damage

**Types of SCD:**
- Sickle cell anemia (HbSS): Most severe
- Other types are generally milder

**Symptoms:**
- Pain crises (severe pain in bones, chest, abdomen)
- Anemia (fatigue, pale skin)
- Frequent infections
- Swollen hands and feet (in babies)
- Yellowing of eyes and skin (jaundice)
- Delayed growth and puberty

**Triggers of Pain Crises:**
- Dehydration
- Cold weather
- Stress
- Infection
- High altitude
- Intense exercise

**Treatment:**
- Pain medications during crises
- Hydroxyurea to reduce crises
- Daily antibiotics to prevent infections
- Drinking plenty of water
- Regular checkups

**Prevention:**
- Stay well hydrated
- Avoid extreme temperatures
- Take medications as prescribed
- Get vaccinated`,
      keyTerms: [
        { term: 'hemoglobin', definition: 'Protein in red blood cells that carries oxygen' },
        { term: 'sickle cell', definition: 'Red blood cell shaped like a crescent moon instead of round' },
        { term: 'anemia', definition: 'Condition where the body lacks enough healthy red blood cells' },
        { term: 'pain crisis', definition: 'Episode of severe pain caused by blocked blood flow in sickle cell disease' },
      ],
      analogies: [
        'Normal red blood cells are like flexible donuts that can squeeze through tiny blood vessels. Sickle cells are like stiff, crescent-shaped cookies that get stuck and block the flow.',
        'Think of blood vessels like highways. Sickle cells are like broken-down cars that block traffic, causing problems downstream.',
      ],
      examples: [
        'A child with SCD experiences severe pain in their leg bones after playing in cold weather—this is a vaso-occlusive crisis.',
        'A baby with SCD develops swollen hands and feet (dactylitis) at 6 months old, often the first sign of the disease.',
      ],
      patientCounselingPoints: [
        'Drink plenty of water every day to prevent sickling.',
        'Take penicillin (or other prescribed antibiotic) daily until at least age 5 to prevent serious infections.',
        'Get all recommended vaccinations, especially pneumococcal, meningococcal, and hepatitis B.',
        'Take folic acid daily to help make new red blood cells.',
        'Learn to recognize early signs of pain crisis or infection and seek care quickly.',
        'Avoid smoking and secondhand smoke.',
        'Wash hands frequently to prevent infections.',
      ],
    },
    2: {
      level: 2,
      summary: 'Sickle cell disease is an autosomal recessive disorder caused by a point mutation in the beta-globin gene (HbS), leading to hemolytic anemia, vaso-occlusive crises, and chronic organ damage.',
      explanation: `## Genetics and Inheritance

**Molecular Defect:**
- Point mutation in beta-globin gene (HBB)
- Glutamic acid → Valine at position 6
- Produces hemoglobin S (HbS)
- Autosomal recessive inheritance

**Genotypes:**
- HbSS: Sickle cell anemia (most severe)
- HbSC: Sickle-hemoglobin C disease (milder)
- HbS beta-thalassemia: Variable severity
- HbS beta+ thal: Milder
- HbS beta0 thal: Similar to HbSS

**Carrier State:**
- HbAS: Sickle cell trait
- Generally asymptomatic
- Protection against malaria
- 1 in 12 African Americans is a carrier

## Pathophysiology

**Polymerization:**
- Deoxygenated HbS forms polymers
- Red cells become rigid and sickled
- Sickling is reversible initially
- Eventually becomes permanent

**Hemolysis:**
- Sickled cells destroyed in spleen
- Chronic hemolytic anemia
- Elevated bilirubin (jaundice)
- Pigment gallstones

**Vaso-occlusion:**
- Sickled cells obstruct microvasculature
- Ischemia and infarction
- Pain crises
- Organ damage over time

## Clinical Manifestations

**Vaso-occlusive Crises:**
- Bone pain (most common)
- Acute chest syndrome
- Splenic sequestration
- Priapism
- Stroke

**Hemolytic Anemia:**
- Fatigue, pallor
- Jaundice
- Pigment gallstones
- Leg ulcers

**Infection Susceptibility:**
- Encapsulated bacteria
- Autosplenectomy (by adulthood)
- Overwhelming sepsis risk

**Chronic Complications:**
- Pulmonary hypertension
- Renal dysfunction
- Avascular necrosis of hip
- Retinopathy
- Cardiomegaly

## Diagnosis

**Newborn Screening:**
- All US states screen
- Hemoglobin electrophoresis
- Early diagnosis improves outcomes

**Laboratory Findings:**
- Hemoglobin: 6-9 g/dL
- Reticulocytosis: 10-20%
- Elevated LDH
- Indirect hyperbilirubinemia
- Peripheral smear: sickle cells, target cells

**Confirmatory Testing:**
- Hemoglobin electrophoresis
- HPLC or isoelectric focusing
- DNA testing if needed`,
      keyTerms: [
        { term: 'vaso-occlusive crisis', definition: 'Painful episode caused by sickled red blood cells blocking blood vessels' },
        { term: 'hemolysis', definition: 'Destruction of red blood cells, releasing hemoglobin' },
        { term: 'autosplenectomy', definition: 'Shrunken, nonfunctional spleen due to repeated infarction in sickle cell disease' },
        { term: 'acute chest syndrome', definition: 'Leading cause of death in SCD; presents with chest pain, fever, and respiratory distress' },
      ],
      clinicalNotes: 'Newborn screening allows early intervention with penicillin prophylaxis and vaccination, dramatically reducing childhood mortality. Acute chest syndrome is a medical emergency requiring prompt treatment with oxygen, antibiotics, and possibly transfusion.',
    },
    3: {
      level: 3,
      summary: 'Sickle cell disease management includes hydroxyurea therapy, chronic transfusion protocols, prevention of complications with penicillin and vaccination, and acute management of vaso-occlusive crises, acute chest syndrome, and other emergencies.',
      explanation: `## Hydroxyurea Therapy

**Mechanism of Action:**
- Increases HbF production
- Reduces leukocyte count
- Decreases adhesion molecules
- Reduces hemolysis

**Indications:**
- Frequent pain crises (>3/year)
- History of acute chest syndrome
- Severe anemia
- Starting as early as 9 months

**Dosing:**
- Start: 15-20 mg/kg/day
- Increase to MTD or 35 mg/kg/day
- Take once daily with food
- Monitor CBC, reticulocyte count

**Benefits:**
- 50% reduction in pain crises
- 50% reduction in ACS
- Reduced transfusion needs
- Improved survival

**Monitoring:**
- CBC every 4 weeks during titration
- Every 8-12 weeks once stable
- Monitor for myelosuppression

## Acute Management

**Vaso-occlusive Crisis:**
- Aggressive hydration (3-4 L/m2/day)
- Parenteral opioids (morphine, hydromorphone)
- Patient-controlled analgesia preferred
- NSAIDs as adjunct
- Incentive spirometry

**Acute Chest Syndrome:**
- Medical emergency
- Oxygen for hypoxia
- Broad-spectrum antibiotics
- Simple or exchange transfusion
- Consider bronchoscopy if no improvement

**Splenic Sequestration:**
- Acute anemia, splenomegaly
- Hypovolemic shock possible
- Emergency transfusion
- Recurrence → chronic transfusion or splenectomy

**Stroke:**
- Exchange transfusion
- MRI to evaluate
- Start chronic transfusion if not already
- Consider stem cell transplant

**Priapism:**
- Urgent (<4 hours): Aspiration + irrigation
- Non-urgent: Oral medications, exchange transfusion
- Prevention: Pseudoephedrine, transfusions

## Chronic Transfusion Therapy

**Indications:**
- Primary stroke prevention (abnormal TCD)
- Secondary stroke prevention
- Recurrent ACS
- Severe anemia with complications
- Pregnancy

**Protocol:**
- Target HbS <30%
- Transfuse every 3-4 weeks
- Iron overload monitoring (ferritin, MRI)
- Iron chelation when indicated

**Iron Chelation:**
- Deferoxamine (IV/subq)
- Deferasirox (oral)
- Deferiprone (oral)

## Infection Prophylaxis

**Penicillin Prophylaxis:**
- Start by 2-3 months of age
- Continue until at least age 5
- Lifelong for asplenic patients
- Penicillin V potassium 125 mg BID

**Vaccinations:**
- All routine vaccines
- Pneumococcal conjugate (PCV13)
- Pneumococcal polysaccharide (PPSV23)
- Meningococcal (MenACWY, MenB)
- Annual influenza vaccine
- Hepatitis B series

## Other Pharmacologic Therapy

**L-Glutamine:**
- Reduces oxidative stress
- Reduces pain crises
- Oral powder twice daily

**Crizanlizumab:**
- Anti-P-selectin monoclonal antibody
- Monthly IV infusion
- Reduces vaso-occlusive crises

**Voxelotor:**
- HbS polymerization inhibitor
- Increases hemoglobin
- Reduces hemolysis

## Pregnancy Considerations

**Risks:**
- Increased pain crises
- ACS, preeclampsia
- VTE, miscarriage
- Maternal mortality

**Management:**
- High-risk obstetrics
- Continue hydroxyurea? (generally stopped)
- Transfusion as needed
- Close monitoring`,
      keyTerms: [
        { term: 'HbF', definition: 'Fetal hemoglobin; interferes with HbS polymerization and reduces sickling' },
        { term: 'TCD', definition: 'Transcranial Doppler; ultrasound to assess stroke risk in children with SCD' },
        { term: 'MTD', definition: 'Maximum tolerated dose; highest dose of hydroxyurea without causing myelosuppression' },
      ],
      clinicalNotes: 'Hydroxyurea is underutilized but should be offered to all patients with HbSS, HbS beta0 thal, and HbS beta+ thal. Children with abnormal TCD (>200 cm/s) should start chronic transfusion for primary stroke prevention. Acute chest syndrome requires urgent transfusion.',
    },
    4: {
      level: 4,
      summary: 'Advanced SCD management includes stroke risk stratification with transcranial Doppler, management of cardiopulmonary complications, renal dysfunction, avascular necrosis, and hematopoietic stem cell transplantation as curative therapy.',
      explanation: `## Stroke Prevention and Management

**Primary Stroke Prevention:**
- TCD screening annually from ages 2-16
- Conditional: 170-199 cm/s (repeat in 3 months)
- Abnormal: ≥200 cm/s (start chronic transfusion)
- Transfusion reduces stroke risk by >90%

**Silent Cerebral Infarcts:**
- Detected on MRI
- Cognitive impairment
- Associated with anemia, hypertension
- Consider transfusion or transplant

**Management after Stroke:**
- Immediate exchange transfusion
- Chronic transfusion to maintain HbS <30%
- Lifelong transfusion unless transplanted
- Rehabilitation services

## Pulmonary Hypertension

**Pathophysiology:**
- Chronic hemolysis → NO scavenging
- Pulmonary vascular remodeling
- Right ventricular strain
- Poor prognostic sign

**Diagnosis:**
- Echocardiogram screening annually
- TR jet velocity >2.5 m/s concerning
- Confirm with right heart catheterization

**Treatment:**
- Optimize SCD therapy
- Consider hydroxyurea if not on it
- Chronic transfusion
- Pulmonary vasodilators? (controversial)

## Renal Complications

**Manifestations:**
- Microscopic hematuria (common)
- Papillary necrosis
- Hyposthenuria (inability to concentrate urine)
- Proteinuria
- Progressive CKD

**Management:**
- ACE inhibitor or ARB for proteinuria
- Avoid nephrotoxins
- Aggressive hydration
- Consider kidney transplant

## Avascular Necrosis (AVN)

**Sites:**
- Femoral head most common
- Humeral head
- Multiple joints possible

**Diagnosis:**
- MRI for early detection
- X-rays for advanced disease
- Bone scan alternative

**Management:**
- Conservative: NSAIDs, limited weight-bearing
- Core decompression (early)
- Total joint replacement (advanced)
- Physical therapy

## Hematopoietic Stem Cell Transplant (HSCT)

**Indications:**
- Stroke or abnormal TCD despite transfusion
- Recurrent ACS despite therapy
- Frequent pain crises
- Sickle nephropathy
- Red cell alloimmunization

**Donor Types:**
- HLA-matched sibling: Best outcomes
- Matched unrelated donor
- Haploidentical (parent/child)
- Cord blood

**Outcomes:**
- Matched sibling: >90% cure rate
- Survival: >95% for matched sibling
- Graft-versus-host disease risk
- Fertility preservation needed

**Conditioning:**
- Myeloablative (children)
- Reduced-intensity (adults)
- Busulfan, cyclophosphamide, fludarabine

**Transplant-Related Mortality:**
- 5-10% for matched sibling
- Higher for alternative donors
- Better at experienced centers

## Cholecystitis

**Pigment Gallstones:**
- Calcium bilirubinate stones
- Symptomatic in 30-40%
- Cholecystectomy if symptomatic
- Laparoscopic preferred

**Considerations:**
- Perioperative transfusion
- Increased complication rate
- Preoperative hydration`,
      keyTerms: [
        { term: 'silent cerebral infarct', definition: 'Brain injury without clinical stroke symptoms; causes cognitive problems' },
        { term: 'TR jet', definition: 'Tricuspid regurgitation jet velocity; measured on echocardiogram to estimate pulmonary pressure' },
        { term: 'haploidentical', definition: 'Half-matched donor (usually parent) for stem cell transplant' },
        { term: 'alloimmunization', definition: 'Development of antibodies against foreign red blood cell antigens from transfusions' },
      ],
      clinicalNotes: 'All children with SCD should have annual TCD screening. Stroke risk is highest in ages 2-5. HSCT is the only curative therapy and should be offered early, before organ damage becomes irreversible. Matched sibling transplant has >90% cure rate with low mortality.',
    },
    5: {
      level: 5,
      summary: 'Contemporary SCD care integrates disease-modifying therapies (hydroxyurea, L-glutamine, crizanlizumab, voxelotor), curative hematopoietic stem cell transplantation, and emerging gene therapy approaches using lentiviral vectors and gene editing.',
      explanation: `## Disease-Modifying Therapies

**Hydroxyurea Optimization:**
- Maximum tolerated dose (MTD) approach
- Pharmacogenomic considerations
- Earlier initiation (infancy)
- Combining with other agents
- Long-term safety established

**Crizanlizumab (Adakveo):**
- Anti-P-selectin monoclonal antibody
- Reduces vaso-occlusive crises by 45%
- Monthly IV infusion (5 mg/kg)
- Cost/access issues
- Role in combination therapy?

**Voxelotor (Oxbryta):**
- HbS polymerization inhibitor
- Increases Hb by 1-2 g/dL
- Reduces hemolysis markers
- Daily oral (1500 mg)
- Long-term effects on organ damage?

**L-Glutamine (Endari):**
- Reduces oxidative stress
- Modest reduction in crises
- Twice daily oral powder
- Palatability issues
- Adherence challenges

## Gene Therapy for SCD

**LentiGlobin (betibeglogene autotemcel):**
- Lentiviral vector with anti-sickling beta-globin
- Autologous stem cell transplant
- No graft-versus-host disease
- 94% resolution of severe crises
- FDA approved (2023)

**Exagamglogene autotemcel (exa-cel):**
- CRISPR-Cas9 gene editing
- Reactivates fetal hemoglobin (BCL11A disruption)
- High rates of transfusion independence
- FDA approved (2023)

**Procedure:**
- Stem cell mobilization and collection
- Ex vivo gene modification
- Myeloablative conditioning (busulfan)
- Reinfusion of modified cells
- Hospitalization 4-6 weeks

**Outcomes:**
- High rates of transfusion independence
- Marked reduction in vaso-occlusive events
- Improved quality of life
- Potential cure

**Concerns:**
- Infertility from conditioning
- Very high cost
- Limited availability
- Long-term safety unknown
- Insertional mutagenesis (lentiviral)

## Curative Options Evolution

**Allogeneic HSCT:**
- Matched sibling: Standard of care
- MUD: Improved with better supportive care
- Haploidentical: PTCy platform
- Cord blood: Alternative

**Gene Therapy vs Transplant:**
- Gene therapy: No GVHD, no donor needed
- Transplant: Established, cheaper
- Both require myeloablation
- Both cause infertility

**Fertility Preservation:**
- Cryopreservation of sperm, oocytes
- Experimental ovarian tissue
- Important counseling

## Precision Medicine in SCD

**Pharmacogenomics:**
- Hydroxyurea response variability
- BCL11A variants affecting HbF
- Alpha-thalassemia co-inheritance (ameliorates)
- UGT1A1 and bilirubin metabolism

**Biomarker Development:**
- Hemolysis markers (LDH, bilirubin, arginase)
- Endothelial dysfunction (NO metabolites)
- Inflammatory markers (CRP, IL-6)
- MicroRNA profiles

**Risk Stratification:**
- TCD velocity for stroke
- NT-proBNP for pulmonary hypertension
- Proteinuria for kidney disease
- Triage of therapy intensity

## Global Health Perspectives

**Burden of Disease:**
- 300,000+ births annually with SCD
- Majority in sub-Saharan Africa
- High childhood mortality
- Limited resources for treatment

**Challenges:**
- Newborn screening availability
- Hydroxyurea access and cost
- Transfusion infrastructure
- Vaccination programs
- Pain management resources

**WHO Initiatives:**
- SCD designated global health priority
- Screening and early treatment programs
- Hydroxyurea for Africa initiatives

## Transition of Care

**Pediatric to Adult:**
- High-risk period
- Adherence often declines
- Insurance issues
- Reproductive counseling
- Psychosocial support

**Models:**
- Structured transition programs
- Joint clinics
- Patient navigation
- Digital health tools`,
      keyTerms: [
        { term: 'lentiviral vector', definition: 'Modified virus used to deliver therapeutic genes into cells' },
        { term: 'BCL11A', definition: 'Transcription factor that represses fetal hemoglobin; target for gene therapy' },
        { term: 'insertional mutagenesis', definition: 'Risk of gene therapy activating oncogenes at insertion site' },
        { term: 'PTCy', definition: 'Post-transplant cyclophosphamide; GVHD prophylaxis in haploidentical transplant' },
      ],
      clinicalNotes: 'Gene therapy has revolutionized SCD care, offering cure without need for matched donor. Both lentiviral and CRISPR-based approaches are FDA approved with excellent results. However, cost, infrastructure, and infertility from conditioning remain barriers. HSCT remains the most accessible curative option in many regions.',
    },
  },

  media: [],
  citations: [
    { id: 'ash-scd-2020', type: 'article', title: 'ASH Guidelines for Sickle Cell Disease', source: 'Blood Advances' },
    { id: 'nih-consensus', type: 'website', title: 'NIH Consensus Development Conference on Sickle Cell Disease', source: 'National Institutes of Health' },
    { id: 'cdc-scd', type: 'website', title: 'Sickle Cell Disease: Data and Statistics', source: 'Centers for Disease Control and Prevention' },
  ],
  crossReferences: [
    { targetId: 'condition-anemia', targetType: 'condition', relationship: 'related', label: 'Anemia' },
    { targetId: 'condition-pulmonary-embolism', targetType: 'condition', relationship: 'related', label: 'Pulmonary Embolism' },
  ],
  tags: {
    systems: ['hematologic'],
    topics: ['hematology', 'genetics'],
    keywords: ['sickle cell', 'hemoglobinopathy', 'vaso-occlusive crisis', 'hydroxyurea', 'acute chest syndrome', 'gene therapy'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'pediatrics'] },
  },
  createdAt: '2025-01-26T00:00:00.000Z',
  updatedAt: '2025-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default sickleCell;
