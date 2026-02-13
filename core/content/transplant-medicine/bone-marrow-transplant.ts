/**
 * Bone Marrow Transplant - Educational Content
 *
 * Education on hematopoietic stem cell transplantation including
 * autologous, allogeneic, and management of GVHD.
 */

import { EducationalContent } from '../types';

export const boneMarrowTransplant: EducationalContent = {
  id: 'process-bone-marrow-transplant',
  type: 'process',
  name: 'Bone Marrow Transplant',
  alternateNames: ['Hematopoietic Stem Cell Transplant', 'HSCT', 'Stem Cell Transplant', 'BMT'],

  levels: {
    1: {
      level: 1,
      summary: 'A bone marrow transplant replaces unhealthy blood-making cells with healthy ones to treat certain cancers and blood diseases.',
      explanation: `Bone marrow is the soft, spongy part inside your bones that makes blood cells. Sometimes the bone marrow gets sick or has cancer. A bone marrow transplant gives you new, healthy cells to make blood.

**Why Would Someone Need This?**
- To treat certain types of cancer (like leukemia)
- When bone marrow is not working properly
- To help after very strong cancer treatment

**Where Do the New Cells Come From?**

**Your Own Cells (Autologous)**
- Healthy cells are collected from you before treatment
- Stored and given back to you after treatment
- No risk of your body fighting the cells

**Someone Else's Cells (Allogeneic)**
- Cells come from a donor (family member or stranger)
- The donor must be a good match
- Your body might try to fight the new cells

**The Process**
1. Getting ready: Treatment to kill sick cells
2. The transplant: New cells given through an IV (like a blood transfusion)
3. Recovery: New cells start making blood (takes weeks)
4. Going home: Careful monitoring and medicines

**What to Expect**
- Stay in the hospital for several weeks
- Feel tired and maybe sick during treatment
- Need to avoid germs because immune system is weak
- Takes months to a year to fully recover

**The Good News**
For many people, bone marrow transplant can:
- Cure their cancer
- Give them healthy blood cells
- Let them live normal lives after recovery`,
      keyTerms: [
        { term: 'bone marrow', definition: 'The soft tissue inside bones where blood cells are made' },
        { term: 'stem cells', definition: 'Special cells that can become different types of blood cells' },
        { term: 'donor', definition: 'A person who gives their healthy cells to help someone else' },
      ],
      analogies: [
        'Think of bone marrow like a factory that makes blood cells. If the factory is broken, a transplant gives you a new factory to start making healthy blood again.',
      ],
      examples: [
        'Eight-year-old Maya had leukemia. Her brother was a match, and he donated bone marrow cells that helped cure her cancer.',
      ],
    },
    2: {
      level: 2,
      summary: 'Hematopoietic stem cell transplantation (HSCT) replaces diseased bone marrow with healthy stem cells, either from the patient (autologous) or a donor (allogeneic), to treat blood cancers and bone marrow disorders.',
      explanation: `**What Is Bone Marrow Transplant?**

Bone marrow transplant, or hematopoietic stem cell transplant (HSCT), is a procedure that replaces unhealthy blood-making cells with healthy ones. These stem cells can develop into red blood cells, white blood cells, and platelets.

**Types of Transplants**

**Autologous (Your Own Cells)**
- Cells collected from you before treatment
- Stored frozen, then given back
- Used for: Multiple myeloma, lymphoma, some solid tumors
- Lower complication risk
- No graft-versus-host disease (GVHD)

**Allogeneic (Donor Cells)**
- Cells from a matched donor
- Types of donors: Sibling, unrelated donor, cord blood
- Used for: Leukemia, bone marrow failure, immune disorders
- Has graft-versus-tumor effect
- Risk of GVHD

**The Transplant Process**

**1. Stem Cell Collection**
- Bone marrow harvest: Cells collected from hip bones
- Peripheral blood: Medication stimulates cells, collected from blood
- Cord blood: Collected from umbilical cord at birth

**2. Conditioning (Preparation)**
- High-dose chemotherapy and/or radiation
- Kills cancer cells and makes room for new cells
- Can be intensive or reduced intensity

**3. Transplant Day (Day 0)**
- Stem cells given through IV
- Cells travel to bone marrow and start growing

**4. Engraftment (2-4 weeks)**
- New cells begin making blood
- Counts start to rise
- Still very vulnerable to infection

**5. Recovery (months to years)**
- Immune system rebuilds
- Gradual return to normal activities
- Ongoing monitoring for complications

**Major Complications**
- Infection (immune system very weak)
- Graft-versus-host disease (GVHD) - allogeneic only
- Organ damage from conditioning
- Graft failure (new cells do not grow)`,
      keyTerms: [
        { term: 'autologous', definition: 'Using your own stem cells for transplant' },
        { term: 'allogeneic', definition: 'Using stem cells from a donor' },
        { term: 'engraftment', definition: 'When transplanted cells start making new blood cells' },
        { term: 'GVHD', definition: 'Graft-versus-host disease - when donor cells attack your body' },
        { term: 'conditioning', definition: 'Treatment given before transplant to kill cancer and prepare the body' },
      ],
    },
    3: {
      level: 3,
      summary: 'HSCT involves conditioning regimens, stem cell infusion, and management of engraftment, with allogeneic transplant complicated by GVHD requiring immunosuppressive prophylaxis and treatment.',
      explanation: `## Transplant Types and Indications

**Autologous HSCT Indications**
- Multiple myeloma (most common)
- Relapsed Hodgkin lymphoma
- Relapsed non-Hodgkin lymphoma
- Germ cell tumors
- Autoimmune diseases (emerging)

**Allogeneic HSCT Indications**
- Acute myeloid leukemia (AML)
- Acute lymphoblastic leukemia (ALL)
- Myelodysplastic syndromes (MDS)
- Bone marrow failure syndromes
- Thalassemia major
- Sickle cell disease
- Severe combined immunodeficiency (SCID)

## Donor Selection and Matching

**HLA Matching**
- HLA-A, B, C, DRB1 (8/8 match ideal)
- Mismatched transplants have higher GVHD risk
- DQ and DP matching also considered

**Donor Hierarchy**
1. Matched sibling donor (MSD)
2. Matched unrelated donor (MUD)
3. Haploidentical (half-matched, usually parent or child)
4. Umbilical cord blood

**Stem Cell Sources**
| Source | Advantages | Disadvantages |
|--------|------------|---------------|
| Bone marrow | Lower chronic GVHD | Requires surgery |
| Peripheral blood | Faster engraftment | Higher chronic GVHD |
| Cord blood | Lower GVHD | Slower engraftment, limited cell dose |

## Conditioning Regimens

**Myeloablative Conditioning (MAC)**
- High-dose chemotherapy +/- total body irradiation
- Examples: Bu/Cy, Cy/TBI
- Complete bone marrow ablation
- Higher toxicity, better disease control

**Reduced Intensity Conditioning (RIC)**
- Lower-dose chemotherapy
- Examples: Flu/Mel, Flu/Bu
- Less toxicity, allows older patients
- Relies more on graft-versus-tumor effect

**Non-Myeloablative**
- Minimal conditioning
- Relies on donor immune system for disease control
- Lowest toxicity

## Graft-Versus-Host Disease (GVHD)

**Acute GVHD (Day 0-100)**

Target Organs:
- Skin (rash)
- Liver (elevated bilirubin)
- GI tract (diarrhea, nausea)

Grading (I-IV):
- Based on organ involvement and severity
- Grade III-IV: Poor prognosis

**Chronic GVHD (>Day 100)**

Manifestations:
- Sclerodermatous skin changes
- Sicca syndrome (dry eyes/mouth)
- Bronchiolitis obliterans
- Fasciitis, joint contractures

**GVHD Prophylaxis**
- Calcineurin inhibitor (tacrolimus or cyclosporine)
- Methotrexate or mycophenolate
- Post-transplant cyclophosphamide (haploidentical)

**GVHD Treatment**
- First-line: Corticosteroids
- Steroid-refractory: Ruxolitinib, ECP, other agents`,
      keyTerms: [
        { term: 'myeloablative', definition: 'Conditioning intensive enough to completely eliminate bone marrow function' },
        { term: 'haploidentical', definition: 'Half-matched donor, typically parent or child, sharing one HLA haplotype' },
        { term: 'graft-versus-tumor', definition: 'Beneficial effect of donor immune cells attacking residual cancer' },
        { term: 'acute GVHD', definition: 'GVHD occurring typically within first 100 days affecting skin, liver, GI tract' },
        { term: 'chronic GVHD', definition: 'GVHD after day 100 with autoimmune-like features affecting multiple organs' },
      ],
      clinicalNotes: 'GVHD prophylaxis selection depends on donor type. Haploidentical transplants typically use post-transplant cyclophosphamide (PTCy) with excellent results.',
    },
    4: {
      level: 4,
      summary: 'Contemporary HSCT incorporates MRD-directed therapy, advanced GVHD prevention strategies, and targeted therapies for post-transplant relapse and complications.',
      explanation: `## Pre-Transplant Assessment

**Disease Status**

Minimal Residual Disease (MRD):
- Flow cytometry or molecular testing
- MRD-negative status associated with better outcomes
- May guide conditioning intensity

Risk Stratification:
- Disease Risk Index (DRI)
- Hematopoietic Cell Transplantation-Specific Comorbidity Index (HCT-CI)
- Guides transplant approach

**Comorbidity Assessment**

HCT-CI Components:
- Cardiac, pulmonary, hepatic, renal function
- Prior malignancy
- Infection history
- Predicts non-relapse mortality

## Advanced Donor Selection

**Donor Optimization**

Unrelated Donor Selection:
- High-resolution HLA typing (10/10)
- Young donors preferred
- CMV matching when possible
- ABO compatibility considerations

Haploidentical Expansion:
- PTCy-based platforms (Baltimore approach)
- T-cell depletion strategies
- Outcomes approaching matched unrelated

**Alternative Donors**
- Double umbilical cord blood transplant
- Ex vivo expanded cord blood
- Rapid access when urgent

## GVHD Prevention Advances

**Post-Transplant Cyclophosphamide (PTCy)**
- Standard for haploidentical
- Expanding to matched donors (BMT CTN 1703)
- Reduces GVHD without increasing relapse

**Abatacept (CTLA4-Ig)**
- Added to standard prophylaxis
- Reduces severe acute GVHD
- FDA approved for URD transplant

**T-Cell Depletion**
- ATG addition reduces GVHD
- Ex vivo TCD (CD34 selection)
- Alpha/beta TCD preserves gamma/delta T cells

## GVHD Treatment

**Acute GVHD**

First-Line:
- Methylprednisolone 2 mg/kg/day
- 50-60% response rate

Steroid-Refractory:
- Ruxolitinib (JAK inhibitor) - FDA approved
- ECP (extracorporeal photopheresis)
- Other: vedolizumab (GI), ATG

**Chronic GVHD**

First-Line:
- Prednisone + calcineurin inhibitor

Steroid-Refractory:
- Ibrutinib (FDA approved)
- Ruxolitinib (FDA approved)
- Belumosudil (FDA approved)
- ECP

## Post-Transplant Relapse

**Prevention Strategies**
- Maintenance therapy post-transplant
- Donor lymphocyte infusion (DLI)
- Early immunosuppression tapering

**Treatment Approaches**
| Strategy | Mechanism |
|----------|-----------|
| DLI | Graft-versus-tumor enhancement |
| Targeted therapy | Disease-specific (FLT3i, venetoclax) |
| Hypomethylating agents | Azacitidine, decitabine |
| Second transplant | Selected patients |

## Late Complications

**Non-Relapse Mortality**
- Infections (CMV, fungal)
- Organ toxicity
- Secondary malignancies
- GVHD-related mortality

**Long-Term Effects**
- Endocrine dysfunction (thyroid, gonadal)
- Cardiovascular disease
- Cataracts
- Avascular necrosis
- Cognitive effects`,
      keyTerms: [
        { term: 'MRD', definition: 'Minimal residual disease - trace cancer remaining after treatment' },
        { term: 'HCT-CI', definition: 'Hematopoietic Cell Transplant Comorbidity Index - predicts non-relapse mortality' },
        { term: 'PTCy', definition: 'Post-transplant cyclophosphamide - GVHD prophylaxis enabling haploidentical transplant' },
        { term: 'DLI', definition: 'Donor lymphocyte infusion - immune cells to enhance graft-versus-tumor effect' },
        { term: 'ruxolitinib', definition: 'JAK inhibitor approved for steroid-refractory acute and chronic GVHD' },
      ],
      clinicalNotes: 'MRD status pre-transplant is increasingly important for treatment planning. MRD-positive patients may benefit from additional therapy or intensified conditioning.',
    },
    5: {
      level: 5,
      summary: 'HSCT research advances include CAR-T bridging, cellular therapy integration, biomarker-guided GVHD management, and precision approaches to conditioning and relapse prevention.',
      explanation: `## Evolving Transplant Paradigms

**CAR-T and HSCT Integration**

CAR-T as Bridge to Transplant:
- Enables remission for relapsed/refractory disease
- Transplant consolidation after CAR-T
- Optimal sequencing under investigation

CAR-T vs. Transplant:
- ALL: CAR-T achieving durable remissions
- Role of allo-HSCT after CAR-T debated
- Cost and access considerations

**Post-CAR-T Transplant Outcomes**
- Feasibility demonstrated
- Outcomes depend on disease status at transplant
- Novel conditioning considerations (lymphodepleted state)

## Biomarker-Guided GVHD Management

**Acute GVHD Biomarkers**

Ann Arbor Score:
- ST2 and REG3alpha
- Predicts steroid response
- Predicts mortality

Clinical Application:
- Risk stratification at GVHD onset
- High-risk may benefit from intensified initial therapy
- Low-risk may avoid over-treatment

**Chronic GVHD Biomarkers**
- CXCL9, ST2
- BAFFy, soluble CD13
- Development ongoing

## Advanced Cellular Therapies

**Regulatory T-Cell Therapy**
- Adoptive transfer of Tregs
- GVHD prevention/treatment
- Early trials promising

**Virus-Specific T Cells**
- CMV, EBV, adenovirus
- Adoptive immunotherapy
- Off-the-shelf products available

**Mesenchymal Stem Cells**
- Immunomodulatory properties
- GVHD treatment applications
- Variable results, ongoing optimization

## Conditioning Optimization

**Targeted Conditioning**

Treosulfan-Based:
- Alternative to busulfan
- Potentially better toxicity profile
- Non-inferior outcomes in some settings

Targeted Busulfan:
- AUC-based dosing
- Improved precision
- Reduced toxicity

**TBI Innovations**
- Total marrow and lymphoid irradiation (TMLI)
- Spares normal tissues
- May improve therapeutic index

## Relapse Prevention Strategies

**Maintenance Therapy**

AML:
- Oral azacitidine (QUAZAR)
- FLT3 inhibitors for FLT3+ disease
- IDH inhibitors

ALL:
- TKIs for Ph+ disease
- Blinatumomab post-transplant

**Preemptive DLI**
- MRD-guided intervention
- Rising mixed chimerism
- Before frank relapse

**Immune Checkpoint Inhibitors**
- PD-1 inhibitors post-transplant
- Careful GVHD risk management
- Selected disease types

## Outcomes and Survivorship

**Improving Outcomes**

Trends:
- Decreasing non-relapse mortality
- Better GVHD management
- Expanding donor access
- Older patients increasingly eligible

Challenges:
- Relapse remains leading cause of failure
- Chronic GVHD quality of life impact
- Late effects of conditioning

**Long-Term Survivorship**

Screening Recommendations:
- Cardiovascular risk assessment
- Endocrine monitoring
- Secondary malignancy surveillance
- Bone health

Survivorship Programs:
- Structured follow-up protocols
- Multidisciplinary care
- Quality of life focus

## Future Directions

**Precision Transplant**
- Germline and somatic profiling
- Personalized conditioning
- Risk-adapted prophylaxis

**Novel Approaches**
- Gene-edited cell therapies
- In vivo gene therapy (avoiding HSCT)
- Universal donor platforms

**Equity Considerations**
- Donor diversity
- Access to advanced therapies
- Global transplant capacity`,
      keyTerms: [
        { term: 'Ann Arbor score', definition: 'Biomarker-based risk score for acute GVHD prognosis using ST2 and REG3alpha' },
        { term: 'CAR-T', definition: 'Chimeric antigen receptor T-cell therapy - engineered T cells targeting cancer' },
        { term: 'TMLI', definition: 'Total marrow and lymphoid irradiation - targeted radiation sparing normal tissues' },
        { term: 'preemptive DLI', definition: 'Donor lymphocyte infusion given at early signs of relapse before clinical manifestation' },
      ],
      clinicalNotes: `Research priorities:
1. Optimal integration of CAR-T and HSCT
2. Biomarker validation for clinical GVHD management
3. Relapse prevention strategies (maintenance, DLI)
4. Survivorship and late effects management
5. Donor access and equity improvements`,
    },
  },

  media: [
    {
      id: 'bmt-process-diagram',
      type: 'diagram',
      filename: 'bone-marrow-transplant-process.svg',
      title: 'Bone Marrow Transplant Process',
      description: 'Step-by-step visualization of the HSCT process from conditioning to recovery',
    },
  ],

  citations: [
    {
      id: 'cibmtr-data',
      type: 'website',
      title: 'CIBMTR Summary Slides',
      source: 'Center for International Blood and Marrow Transplant Research',
      url: 'https://cibmtr.org',
    },
    {
      id: 'bmt-guidelines',
      type: 'article',
      title: 'ASTCT/EBMT Guidelines',
      source: 'Blood Advances',
    },
  ],

  crossReferences: [
    { targetId: 'concept-organ-transplant-basics', targetType: 'concept', relationship: 'related', label: 'Transplant Basics' },
    { targetId: 'concept-immunosuppression-therapy', targetType: 'concept', relationship: 'related', label: 'Immunosuppression' },
    { targetId: 'condition-transplant-rejection', targetType: 'condition', relationship: 'related', label: 'Rejection' },
  ],

  tags: {
    systems: ['transplant-medicine'],
    topics: ['bone marrow transplant', 'HSCT', 'stem cell transplant', 'GVHD', 'leukemia'],
    clinicalRelevance: 'critical',
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default boneMarrowTransplant;
