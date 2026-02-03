/**
 * Hemolytic Anemia - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const hemolyticAnemia: EducationalContent = {
  id: 'condition-hemolytic-anemia',
  type: 'condition',
  name: 'Hemolytic Anemia',
  alternateNames: ['HA', 'Hemolysis', 'Autoimmune Hemolytic Anemia', 'G6PD Deficiency'],
  hpoId: 'HP:0001908',

  levels: {
    1: {
      level: 1,
      summary: 'Hemolytic anemia occurs when red blood cells are destroyed faster than your body can replace them, causing fatigue, jaundice, and an enlarged spleen.',
      explanation: `Red blood cells normally live about 120 days. In hemolytic anemia, red blood cells are destroyed prematurely, before your body can make enough new ones.

**What happens:**
- Red blood cells break open (hemolysis)
- Hemoglobin is released
- Your body cannot make new cells fast enough
- Results in anemia

**Symptoms:**
- Fatigue and weakness
- Pale skin
- Yellowing of skin and eyes (jaundice)
- Dark urine
- Enlarged spleen (felt as fullness in left abdomen)
- Shortness of breath

**Causes:**
- Inherited conditions (like sickle cell, thalassemia)
- Autoimmune conditions (immune system attacks own cells)
- Infections
- Certain medications
- Heart valve problems

**Treatment:**
- Treat the underlying cause
- Stop medications that might be causing it
- Steroids for autoimmune hemolysis
- Blood transfusions if severe
- Sometimes removing the spleen helps`,
      keyTerms: [
        { term: 'hemolysis', definition: 'Breaking open of red blood cells' },
        { term: 'jaundice', definition: 'Yellowing of skin and eyes from bilirubin buildup' },
        { term: 'spleen', definition: 'Organ that filters blood and removes old red blood cells' },
      ],
      analogies: ['In hemolytic anemia, red blood cells are like balloons popping too early—your body cannot make new balloons fast enough to replace them.'],
      examples: ['Someone taking a certain medication who develops dark urine and yellow skin may have drug-induced hemolytic anemia.'],
    },
    2: {
      level: 2,
      summary: 'Hemolytic anemia presents with anemia, reticulocytosis, elevated LDH, indirect hyperbilirubinemia, and haptoglobin depletion; classified by site (intravascular vs extravascular) and etiology (immune vs non-immune).',
      explanation: `## Clinical Features

**Symptoms:**
- Fatigue, weakness
- Jaundice (scleral icterus)
- Dark urine (hemoglobinuria)
- Abdominal fullness (splenomegaly)

**Signs:**
- Pallor
- Jaundice
- Splenomegaly (extravascular hemolysis)
- Gallstones (pigment stones)

## Laboratory Diagnosis

**CBC:**
- Anemia (often moderate to severe)
- Reticulocytosis (increased immature RBCs)
- Spherocytes on peripheral smear (immune hemolysis)
- Schistocytes (microangiopathic hemolysis)

**Hemolysis Markers:**

| Test | Result in Hemolysis |
|------|---------------------|
| LDH | Elevated |
| Indirect bilirubin | Elevated |
| Haptoglobin | Decreased/absent |
| Urine | Hemosiderin, hemoglobin |

## Classification

**By Site of Destruction:**

**Extravascular:**
- RBCs destroyed in spleen/liver
- Spherocytes on smear
- Indirect bilirubin elevated
- Examples: Immune hemolysis, hereditary spherocytosis

**Intravascular:**
- RBCs destroyed in bloodstream
- Hemoglobinuria, hemosiderinuria
- LDH very high
- Examples: TTP, G6PD deficiency, mechanical valves

**By Mechanism:**

**Immune-Mediated:**
- Warm autoimmune hemolytic anemia (IgG, 37°C)
- Cold agglutinin disease (IgM, cold)
- Drug-induced immune hemolysis

**Non-Immune:**
- Membrane defects (hereditary spherocytosis)
- Enzyme defects (G6PD deficiency)
- Hemoglobinopathies (sickle cell, thalassemia)
- Microangiopathic (TTP, HUS, DIC)

## Direct Antiglobulin Test (DAT)

**Positive DAT:**
- Detects antibody or complement on RBC surface
- Confirms immune-mediated hemolysis

**DAT Patterns:**
- DAT positive, C3 only: Cold agglutinin disease
- DAT positive, IgG +/- C3: Warm AIHA`,
      keyTerms: [
        { term: 'reticulocytosis', definition: 'Increased immature red blood cells indicating bone marrow response to anemia' },
        { term: 'spherocyte', definition: 'Sphere-shaped red blood cell without central pallor; seen in immune hemolysis and hereditary spherocytosis' },
        { term: 'DAT', definition: 'Direct antiglobulin test (Coombs test); detects antibodies attached to red blood cells' },
      ],
      clinicalNotes: 'In hemolytic anemia, haptoglobin is typically undetectable because it binds free hemoglobin and gets cleared. Very high LDH (>1000) suggests intravascular hemolysis.',
    },
    3: {
      level: 3,
      summary: 'Hemolytic anemia results from accelerated red cell destruction with compensatory erythropoiesis, classified by site (intravascular vs extravascular) and mechanism (immune vs non-immune), diagnosed with characteristic laboratory patterns and peripheral smear findings.',
      explanation: `## Pathophysiology

**Red Cell Survival:**
- Normal: 120 days
- Hemolysis: Significantly shortened
- Bone marrow compensation: 6-8x increase possible

**Compensated Hemolysis:**
- Increased destruction balanced by increased production
- No anemia but laboratory evidence of hemolysis
- "Hemolytic state without anemia"

**Decompensated Hemolysis:**
- Destruction exceeds production capacity
- Overt anemia develops

## Diagnostic Evaluation

**Essential Tests:**

| Test | Hemolysis Finding |
|------|-------------------|
| Reticulocyte count | Elevated (>2% or >100k) |
| LDH | Elevated |
| Indirect bilirubin | Elevated |
| Haptoglobin | Low/undetectable |
| Urinary urobilinogen | Increased |
| Urine hemoglobin | Positive (intravascular) |

**Peripheral Smear Findings:**
- Spherocytes: Immune hemolysis, HS
- Schistocytes: Microangiopathic (TTP, HUS)
- Bite cells: G6PD deficiency
- Heinz bodies: G6PD (supravital stain)
- Agglutination: Cold agglutinin disease
- Sickle cells: Sickle cell anemia
- Target cells: Thalassemia, liver disease

**Direct Antiglobulin Test (DAT/Coombs):**

| DAT | Pattern | Interpretation |
|-----|---------|----------------|
| Positive | IgG + C3 | Warm AIHA |
| Positive | C3 only | Cold agglutinin disease |
| Positive | IgG only | Warm AIHA or drug-induced |
| Negative | - | Non-immune hemolysis |

## Immune-Mediated Hemolytic Anemia

**Warm AIHA:**
- IgG antibodies, reacts at 37°C
- Extravascular hemolysis (spleen)
- Spherocytes on smear
- DAT positive for IgG

**Causes:**
- Idiopathic (50%)
- SLE, CLL, lymphoma
- Drugs: Penicillins, cephalosporins

**Cold Agglutinin Disease:**
- IgM antibodies, reacts at cold temps
- Intravascular + extravascular
- Acrocyanosis, Raynaud symptoms
- DAT positive for C3 only

**Causes:**
- Mycoplasma pneumonia
- EBV (mononucleosis)
- Waldenstrom macroglobulinemia
- Idiopathic

**Drug-Induced Immune Hemolysis:**
- Penicillins, cephalosporins (hapten mechanism)
- Methyldopa (autoantibody induction)
- Cefotetan, ceftriaxone (innocent bystander)

## Non-Immune Hemolysis

**Hereditary Spherocytosis:**
- Membrane protein defect (ankyrin, spectrin)
- Extravascular hemolysis
- Spherocytes, splenomegaly
- Positive osmotic fragility

**G6PD Deficiency:**
- X-linked enzyme deficiency
- Oxidative stress triggers hemolysis
- Bite cells, Heinz bodies
- Avoid oxidizing drugs, fava beans

**Microangiopathic Hemolytic Anemia (MAHA):**
- Schistocytes on smear
- Thrombocytopenia
- TTP, HUS, DIC, malignant hypertension

## Treatment Approach

**General Measures:**
- Treat underlying cause
- Folate supplementation
- Avoid oxidizing drugs if G6PD

**Warm AIHA:**
- Prednisone 1 mg/kg/day
- Rituximab for refractory cases
- Splenectomy if steroid-refractory

**Cold Agglutinin Disease:**
- Keep warm
- Rituximab
- Avoid cold exposure

**Severe Hemolysis:**
- Transfusion (may be incompatible)
- Urgent splenectomy (rare)`,
      keyTerms: [
        { term: 'compensated hemolysis', definition: 'Increased red cell destruction without anemia due to bone marrow compensation' },
        { term: 'MAHA', definition: 'Microangiopathic hemolytic anemia; schistocytes with thrombocytopenia suggesting TTP, HUS, or DIC' },
        { term: 'heinz bodies', definition: 'Denatured hemoglobin precipitates visible with supravital stain in G6PD deficiency' },
        { term: 'bite cells', definition: 'Red cells with "bites" taken out; appear in G6PD deficiency after oxidative stress' },
      ],
      clinicalNotes: 'Reticulocytosis may be absent in acute hemolysis before marrow response or with concurrent bone marrow disorders. LDH isoenzyme 1 (from RBCs) is disproportionately elevated in hemolysis.',
    },
    4: {
      level: 4,
      summary: 'Complex hemolytic anemia management addresses refractory immune hemolysis, paroxysmal nocturnal hemoglobinuria, complement inhibition with eculizumab, mechanical hemolysis from prosthetic valves, and distinguishing features of various microangiopathic syndromes.',
      explanation: `## Refractory Immune Hemolytic Anemia

**Steroid-Refractory Warm AIHA:**
- Fails to respond after 3 weeks of prednisone
- Relapses during taper
- Second-line options needed

**Treatment Options:**

| Agent | Mechanism | Efficacy | Considerations |
|-------|-----------|----------|----------------|
| Rituximab | Anti-CD20 | 70-80% response | Off-label, HBV reactivation risk |
| Splenectomy | Removes destruction site | Durable | Surgical risk, sepsis risk |
| Mycophenolate | Immunomodulation | Alternative | Steroid-sparing |
| Azathioprine | Immunomodulation | Alternative | Slow onset |
| IVIG | Immunomodulation | Temporary | Expensive, short-lived |

**Rituximab Considerations:**
- 375 mg/m2 weekly × 4 or 1 g × 2 doses
- Screen for hepatitis B
- Consider PJP prophylaxis if combined therapy

## Paroxysmal Nocturnal Hemoglobinuria

**Pathophysiology:**
- Acquired PIGA mutation
- Deficiency of GPI-anchored proteins (CD55, CD59)
- Uncontrolled complement activation
- Intravascular hemolysis, thrombosis

**Diagnosis:**
- Flow cytometry for CD55, CD59
- Clone size predicts complications
- Ham test (historical)

**Clinical Features:**
- Intravascular hemolysis (dark morning urine)
- Thrombosis (abdominal, cerebral)
- Cytopenias (aplastic anemia overlap)
- Smooth muscle dystonia

**Treatment:**
- Eculizumab (anti-C5): 70-80% response
- Ravulizumab (longer acting)
- Prednisone (transient benefit)
- Bone marrow transplant if aplastic
- Anticoagulation for thrombosis

**Vaccination:**
- Meningococcal vaccine REQUIRED before eculizumab
- Also vaccinate against HiB, pneumococcus

## Microangiopathic Hemolysis

**TTP-HUS Distinction:**

| Feature | TTP | HUS |
|---------|-----|-----|
| Neuro symptoms | Prominent | Rare |
| Renal failure | Mild | Severe |
| ADAMTS13 | <5% (inherited) | Normal |
| Treatment | Plasma exchange | Supportive |

**Diagnostic Approach:**
- ADAMTS13 activity if suspected TTP
- Stool culture for STEC-HUS
- Complement studies for atypical HUS

**Treatment Priorities:**
- Suspected TTP: Plasma exchange IMMEDIATELY
- Do not wait for ADAMTS13 results
- Mortality without treatment: >90%

**Secondary MAHA Causes:**
- Malignant hypertension
- Catastrophic antiphospholipid syndrome
- Metastatic cancer (mucin)
- Drugs: quinine, tacrolimus, gemcitabine
- Prosthetic cardiac valves

## Mechanical Hemolysis

**Prosthetic Valve Hemolysis:**
- Intravascular destruction
- LDH often >1000
- Hemosiderinuria
- More common with paravalvular leak

**Evaluation:**
- Echocardiogram for leak
- Hemodynamic assessment
- Rule out other causes

**Treatment:**
- Correct paravalvular leak
- Iron and folate supplementation
- Transfusion if severe

## Drug-Induced Hemolysis

**Mechanisms:**

| Type | Example | Pattern |
|------|---------|---------|
| Hapten | Penicillins | DAT positive IgG |
| Autoantibody | Methyldopa | DAT positive IgG |
| Innocent bystander | Cefotetan | DAT positive C3 |
| Oxidative | Primaquine | DAT negative |

**Oxidant Drugs in G6PD:**
- Dapsone, sulfonamides
- Primaquine, chloroquine
- Nitrofurantoin
- High-dose vitamin C
- Fava beans

**Management:**
- Stop offending drug
- Supportive care
- Avoid rechallenge`,
      keyTerms: [
        { term: 'PIGA', definition: 'Phosphatidylinositol glycan anchor; mutation causes deficiency of GPI-anchored proteins like CD55 and CD59 in PNH' },
        { term: 'ADAMTS13', definition: 'Metalloprotease that cleaves von Willebrand factor; deficiency causes TTP' },
        { term: 'eculizumab', definition: 'Monoclonal antibody against complement protein C5; treatment for PNH and atypical HUS' },
        { term: 'paravalvular leak', definition: 'Gap around prosthetic heart valve causing regurgitation and mechanical hemolysis' },
      ],
      clinicalNotes: 'In suspected TTP, initiate plasma exchange immediately—do not wait for ADAMTS13 results. Delaying plasma exchange increases mortality dramatically. Eculizumab requires meningococcal vaccination at least 2 weeks before first dose due to high risk of meningococcal infection.',
    },
    5: {
      level: 5,
      summary: 'Contemporary management of hemolytic disorders integrates complement inhibition therapies, novel B-cell targeting approaches, ADAMTS13-guided TTP management, next-generation complement inhibitors, and understanding of somatic PIGA mutation clonal expansion in PNH.',
      explanation: `## Precision Therapeutics

**Complement Pathway Targeting:**

**C5 Inhibition (Eculizumab, Ravulizumab):**
- Blocks terminal complement
- PNH: Intravascular hemolysis control
- Atypical HUS: Improves renal outcomes
- Requires meningococcal vaccination

**C3 Inhibition (Pegcetacoplan):**
- Proximal complement blockade
- Approved for PNH (2021)
- Improves anemia in eculizumab suboptimal responders
- Subcutaneous administration

**Factor D Inhibition (Danicopan):**
- Alternative pathway blockade
- Oral agent in development
- May combine with C5 inhibitors

**Factor B Inhibition (Iptacopan):**
- Oral alternative pathway inhibitor
- Phase 3 data in PNH

## B-Cell Targeting in AIHA

**Rituximab:**
- Anti-CD20 monoclonal antibody
- Standard second-line for warm AIHA
- Dose: 375 mg/m2 weekly × 4 or 1 g × 2
- Response in 70-80%

**Novel Anti-CD20:**
- Obinutuzumab: More potent B-cell depletion
- Ofatumumab: Alternative mechanism

**BTK Inhibitors:**
- Ibrutinib: Case reports in CLL-associated AIHA
- Fostamatinib: Syk inhibitor (approved for ITP)

**Proteasome Inhibitors:**
- Bortezomib: Targets plasma cells
- Considered in refractory cases

## TTP and Complement

**Atypical TTP:**
- ADAMTS13 deficiency with complement involvement
- May respond to eculizumab
- Overlap with complement-mediated TMA

**ADAMTS13-Guided Therapy:**
- <10% activity: Confirmatory for TTP
- Monitor activity during remission
- Predicts relapse risk

**Preemptive Treatment:**
- Rising ADAMTS13 antibodies
- Consider rituximab before clinical relapse
- Prevents full-blown TTP episode

## PNH Advances

**Clone Dynamics:**
- Somatic PIGA mutation in hematopoietic stem cell
- Clone expansion due to immune escape (aplastic anemia)
- Clone size correlates with complications

**Risk Stratification:**
- Large clone (>50%): Thrombosis risk
- Small clone: Monitor
- Granulocyte clone most predictive

**Treatment Evolution:**
- Eculizumab: Standard since 2007
- Ravulizumab: Every 8 weeks dosing
- Pegcetacoplan: Subcutaneous, targets C3
- Oral factor D/B inhibitors in trials

## Emerging Therapies

**Sutimlimab (Anti-C1s):**
- Inhibits classical pathway
- Approved for cold agglutinin disease (2022)
- Reduces hemolysis, improves anemia

**Nipocalimab (FcRn blocker):**
- Reduces IgG levels
- Potential for warm AIHA
- Phase 3 trials

**Molecular Therapies for G6PD:**
- Gene therapy trials
- Enzyme replacement (theoretical)
- Gene editing approaches

## Diagnostic Refinements

**High-Sensitivity Flow Cytometry:**
- Detects small PNH clones
- Type II vs III RBCs
- Monitors response to therapy

**ADAMTS13 Functional Assays:**
- FRETS-VWF73 assay
- Rapid turnaround
- Autoantibody profiling

**Complement Biomarkers:**
- sC5b-9 (terminal complement complex)
- CH50, AH50 functional assays
- Guides complement inhibitor selection

## Quality Considerations

**Vaccination Protocols:**
- Meningococcal (conjugate) before complement inhibitors
- Booster every 3-5 years
- Consider prophylactic antibiotics

**Infection Risk:**
- Encapsulated organisms
- PJP prophylaxis with combination therapy
- Hepatitis B screening before rituximab

**Transfusion Considerations:**
- May be "incompatible" in AIHA
- Give slowly, monitor for reaction
- "Least incompatible" units acceptable

## Pregnancy Considerations

**AIHA in Pregnancy:**
- Can worsen or improve
- Prednisone safe
- IVIG can be used
- Rituximab: second trimester

**PNH in Pregnancy:**
- High thrombosis risk
- Continue eculizumab
- Anticoagulation
- Monitor closely

**TTP in Pregnancy:**
- Plasma exchange safe
- High maternal and fetal mortality
- Delivery often definitive treatment

## Future Directions

**Gene Therapy for Hemoglobinopathies:**
- Sickle cell, beta-thalassemia
- Curative potential
- CRISPR-based approaches

**Artificial RBCs:**
- Hemoglobin-based oxygen carriers
- Still experimental
- May reduce transfusion needs`,
      keyTerms: [
        { term: 'C3 inhibition', definition: 'Proximal complement blockade at C3; addresses both intravascular and extravascular hemolysis in PNH' },
        { term: 'sC5b-9', definition: 'Soluble terminal complement complex; biomarker of complement activation' },
        { term: 'FRETS-VWF73', definition: 'Fluorescence resonance energy transfer assay for rapid ADAMTS13 activity measurement' },
        { term: 'FcRn blocker', definition: 'Neonatal Fc receptor blocker; reduces IgG recycling, lowering IgG levels for IgG-mediated diseases' },
      ],
      clinicalNotes: 'Cold agglutinin disease has a new FDA-approved therapy: sutimlimab, an anti-C1s monoclonal antibody that inhibits the classical complement pathway. For PNH, combination therapy with C5 and C3 inhibitors may provide more complete hemolysis control. In TTP, monitoring ADAMTS13 activity during remission can identify patients at high relapse risk who may benefit from preemptive rituximab.',
    },
  },

  media: [],
  citations: [
    { id: 'ash-hemolysis-2020', type: 'article', title: 'ASH Guidelines for Immune Thrombocytopenia and Hemolytic Anemia', source: 'Blood Advances' },
    { id: 'nejm-pnh', type: 'article', title: 'Paroxysmal Nocturnal Hemoglobinuria', source: 'New England Journal of Medicine' },
  ],
  crossReferences: [
    { targetId: 'condition-itp', targetType: 'condition', relationship: 'related', label: 'ITP' },
    { targetId: 'condition-iron-deficiency-anemia', targetType: 'condition', relationship: 'related', label: 'Iron Deficiency Anemia' },
  ],
  tags: { systems: ['hematologic'], topics: ['hematology', 'immunology'], keywords: ['hemolytic anemia', 'AIHA', 'G6PD', 'PNH', 'TTP', 'Coombs', 'DAT'], clinicalRelevance: 'high', examRelevance: { usmle: true, nbme: true, shelf: ['medicine'] } },
  createdAt: '2025-01-26T00:00:00.000Z',
  updatedAt: '2025-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default hemolyticAnemia;
