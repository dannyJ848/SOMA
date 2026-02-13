/**
 * Types of Organ Transplants - Educational Content
 *
 * Comprehensive education on different solid organ transplants
 * including kidney, liver, heart, lung, pancreas, and intestine.
 */

import { EducationalContent } from '../types';

export const typesOfOrganTransplants: EducationalContent = {
  id: 'concept-organ-transplant-types',
  type: 'concept',
  name: 'Types of Organ Transplants',
  alternateNames: ['Solid Organ Transplants', 'Organ Transplant Types'],

  levels: {
    1: {
      level: 1,
      summary: 'Different organs in the body can be transplanted when they stop working, including kidneys, liver, heart, and lungs.',
      explanation: `When an organ in your body stops working well, sometimes doctors can replace it with a healthy organ from another person. Here are the main organs that can be transplanted:

**Kidney Transplant**
- Kidneys clean waste from your blood
- This is the most common transplant
- You can live with just one kidney, so someone can donate one while alive

**Liver Transplant**
- The liver helps digest food and cleans your blood
- The liver can grow back, so part of a liver can be transplanted

**Heart Transplant**
- For people whose hearts are too weak to pump blood
- The new heart comes from someone who has died

**Lung Transplant**
- For people who cannot breathe well on their own
- One or both lungs can be transplanted

**Pancreas Transplant**
- The pancreas makes insulin to control blood sugar
- Helps people with diabetes
- Often done with a kidney transplant

**Intestine Transplant**
- The rarest type of transplant
- For people whose intestines cannot absorb food

Each type of transplant has its own surgery and recovery process, but all require taking medicine to keep the body from rejecting the new organ.`,
      keyTerms: [
        { term: 'kidney', definition: 'An organ that cleans waste from your blood and makes urine' },
        { term: 'liver', definition: 'A large organ that helps digest food and removes toxins from blood' },
        { term: 'heart', definition: 'The muscle that pumps blood through your body' },
        { term: 'lungs', definition: 'Organs that help you breathe and get oxygen into your blood' },
      ],
      analogies: [
        'Transplanting an organ is like replacing a broken part in a machine with a working one.',
      ],
      examples: [
        'Someone with kidneys that no longer clean their blood might receive a kidney transplant from a family member.',
      ],
    },
    2: {
      level: 2,
      summary: 'Solid organ transplants include kidney, liver, heart, lung, pancreas, and intestine transplants, each with specific indications, surgical approaches, and outcomes.',
      explanation: `**Kidney Transplant**
- Most common solid organ transplant
- Indications: End-stage renal disease (kidney failure)
- Sources: Living donor or deceased donor
- Outcomes: 95% one-year survival

**Liver Transplant**
- Second most common transplant
- Indications: Cirrhosis, liver cancer, acute liver failure
- Living donor possible (partial liver)
- Outcomes: 90% one-year survival

**Heart Transplant**
- For end-stage heart failure
- Must come from deceased donor
- Candidates often on mechanical support while waiting
- Outcomes: 85-90% one-year survival

**Lung Transplant**
- Single or double lung transplant
- Indications: COPD, pulmonary fibrosis, cystic fibrosis
- Shortest graft survival of solid organs
- Outcomes: 80-85% one-year survival

**Pancreas Transplant**
- Usually for Type 1 diabetes
- Often combined with kidney (SPK - simultaneous pancreas-kidney)
- Can eliminate need for insulin injections
- Outcomes: 85% one-year survival

**Intestine Transplant**
- Rarest solid organ transplant
- Indications: Short bowel syndrome, intestinal failure
- Highest rejection rates
- Often combined with liver (multivisceral)

**Combined Transplants**
- Heart-kidney
- Liver-kidney
- Heart-lung
- Multivisceral (multiple abdominal organs)`,
      keyTerms: [
        { term: 'end-stage renal disease', definition: 'Kidney failure requiring dialysis or transplant' },
        { term: 'cirrhosis', definition: 'Severe scarring of the liver from long-term damage' },
        { term: 'graft survival', definition: 'How long the transplanted organ continues to function' },
        { term: 'SPK', definition: 'Simultaneous pancreas-kidney transplant' },
      ],
    },
    3: {
      level: 3,
      summary: 'Each organ transplant type has distinct immunological considerations, surgical techniques, complications, and evidence-based management protocols affecting short and long-term outcomes.',
      explanation: `## Kidney Transplantation

**Surgical Technique**
- Heterotopic placement (pelvis)
- Native kidneys usually left in place
- Anastomoses: renal artery, renal vein, ureter to bladder

**Immunology Considerations**
- HLA matching important for outcomes
- Highly sensitized patients (high cPRA) face barriers
- ABO-incompatible transplant protocols available

**Key Complications**
- Delayed graft function (DGF)
- Acute rejection (T-cell or antibody-mediated)
- BK polyomavirus nephropathy
- Recurrent disease

## Liver Transplantation

**Surgical Approach**
- Orthotopic (recipient liver removed)
- Complex vascular reconstruction
- Biliary anastomosis (duct-to-duct or Roux-en-Y)

**Unique Features**
- Less dependent on HLA matching
- Tolerogenic organ (lower rejection rates)
- Can regenerate (enables living donation)

**Complications**
- Primary graft non-function
- Hepatic artery thrombosis
- Biliary strictures and leaks
- Recurrent disease (Hepatitis C, autoimmune)

## Heart Transplantation

**Surgical Technique**
- Orthotopic (bicaval or biatrial technique)
- Denervated heart post-transplant
- Cold ischemia time critical (<4-6 hours)

**Specific Issues**
- Cardiac allograft vasculopathy (chronic rejection)
- Right ventricular dysfunction
- Surveillance endomyocardial biopsies

## Lung Transplantation

**Types**
- Single lung transplant
- Bilateral sequential transplant
- Heart-lung transplant

**Challenges**
- Highest rejection rates
- Chronic lung allograft dysfunction (CLAD)
- Infection risk (airway exposed to environment)
- Bronchiolitis obliterans syndrome (BOS)

## Pancreas Transplantation

**Types**
- SPK (simultaneous pancreas-kidney)
- PAK (pancreas after kidney)
- PTA (pancreas transplant alone)

**Technical Aspects**
- Exocrine drainage: enteric or bladder
- Venous drainage: systemic or portal
- Graft thrombosis major complication

## Intestine Transplantation

**Indications**
- Intestinal failure with TPN complications
- Loss of venous access
- Liver failure from TPN

**Types**
- Isolated intestine
- Combined liver-intestine
- Multivisceral (stomach, duodenum, pancreas, intestine)`,
      keyTerms: [
        { term: 'heterotopic', definition: 'Transplant placed in different location than native organ' },
        { term: 'orthotopic', definition: 'Transplant placed in same anatomical position as native organ' },
        { term: 'CLAD', definition: 'Chronic Lung Allograft Dysfunction - progressive decline in lung function post-transplant' },
        { term: 'cardiac allograft vasculopathy', definition: 'Accelerated coronary artery disease specific to transplanted hearts' },
      ],
      clinicalNotes: 'Choice of transplant type and timing depends on disease-specific factors, patient comorbidities, and donor availability. Multidisciplinary evaluation optimizes organ selection and timing.',
    },
    4: {
      level: 4,
      summary: 'Organ-specific transplant outcomes are influenced by immunological matching strategies, surgical innovations, and evolving protocols for immunosuppression and surveillance.',
      explanation: `## Kidney Transplantation: Advanced Concepts

**Donor Selection Optimization**
- KDPI/KDRI assessment
- Kidney biopsy interpretation
- Machine perfusion for marginal donors
- DCD (donation after circulatory death) outcomes

**Desensitization Protocols**
- Plasmapheresis + IVIG
- Rituximab for HLA-incompatible
- Tocilizumab, imlifidase emerging
- ABO-incompatible protocols (pediatric experience)

**Outcomes by Donor Type**
| Donor Type | 5-Year Graft Survival |
|------------|----------------------|
| Living related | 90% |
| Living unrelated | 88% |
| Deceased (low KDPI) | 85% |
| Deceased (high KDPI) | 75% |

## Liver Transplantation: Advanced Concepts

**Donor Risk Assessment**
- Donor Risk Index (DRI)
- Steatosis assessment
- DCD liver utilization
- Machine perfusion for marginal livers

**Split Liver Transplantation**
- One liver for two recipients
- Right lobe (adult), left lateral segment (pediatric)
- Living donor: Right lobe most common

**Disease-Specific Considerations**
- HCC: Milan criteria, downstaging protocols
- HCV: DAA therapy pre/post-transplant
- Alcohol: Relapse prediction, early transplant debate
- NASH: Growing indication, metabolic management

## Heart Transplantation: Advanced Concepts

**Mechanical Circulatory Support as Bridge**
- LVAD as bridge to transplant
- LVAD as destination therapy
- Biventricular support options
- Total artificial heart

**Antibody-Mediated Rejection**
- DSA monitoring post-transplant
- C4d staining on biopsy
- Treatment: plasmapheresis, IVIG, rituximab

**Ex-Vivo Heart Perfusion**
- Enables DCD heart transplantation
- TransMedics OCS Heart
- Expanding donor pool

## Lung Transplantation: Advanced Concepts

**CLAD Phenotypes**
- BOS (Bronchiolitis Obliterans Syndrome)
- RAS (Restrictive Allograft Syndrome)
- Mixed phenotype
- Different prognosis and treatment approaches

**EVLP (Ex-Vivo Lung Perfusion)**
- Assessment of marginal donors
- Reconditioning potential
- NOVEL trial evidence

**Retransplantation Considerations**
- For CLAD, generally poor outcomes
- Careful patient selection required

## Pancreas Transplantation: Advanced Concepts

**Islet Transplantation Alternative**
- Less invasive than whole organ
- Edmonton Protocol
- Multiple infusions typically needed
- Insulin independence often not permanent

**Technical Innovations**
- Duodenal cuff drainage
- Portal venous drainage (more physiologic)
- Robotic-assisted approaches`,
      keyTerms: [
        { term: 'desensitization', definition: 'Treatments to reduce recipient antibodies enabling transplant across immunologic barriers' },
        { term: 'ex-vivo perfusion', definition: 'Technique for maintaining and assessing organs outside the body before transplant' },
        { term: 'LVAD', definition: 'Left Ventricular Assist Device - mechanical pump supporting heart function' },
        { term: 'split liver', definition: 'Division of one liver for transplantation into two recipients' },
      ],
      clinicalNotes: 'Extended criteria organ utilization requires careful matching to appropriate recipients. Machine perfusion technologies are expanding the usable donor pool across organ types.',
    },
    5: {
      level: 5,
      summary: 'Frontier developments in organ transplantation include tolerance induction protocols, xenotransplantation, bioengineered organs, and precision immunosuppression guided by molecular diagnostics.',
      explanation: `## Tolerance Induction

**Clinical Tolerance Protocols**

Kidney:
- Combined kidney-bone marrow transplant (Northwestern, MGH)
- Non-myeloablative conditioning
- Transient mixed chimerism
- Some patients achieve medication withdrawal

Liver:
- Inherent tolerogenicity allows successful withdrawal in select patients
- Biomarkers predicting tolerance (regulatory T cells, gene signatures)

Mechanistic Approaches:
- Regulatory T-cell infusion
- Costimulation blockade-based regimens
- Thymic transplantation (in DiGeorge syndrome)

## Xenotransplantation

**Gene-Edited Pig Development**

Current Edits:
- Knockout: GGTA1 (alpha-gal), CMAH (Neu5Gc), B4GALNT2
- Knockin: Human CD46, CD55, thrombomodulin, HO-1

Clinical Milestones:
- 2022: University of Maryland - pig heart transplant (survived 2 months)
- 2024: NYU, Mass General - pig kidney xenografts in brain-dead recipients

Remaining Challenges:
- Long-term function unknown
- Coagulation dysregulation
- Immune response evolution
- PERV (porcine endogenous retrovirus) concerns
- Regulatory pathway development

## Bioengineered Organs

**Decellularization/Recellularization**
- Scaffold creation from cadaveric organs
- Repopulation with recipient cells
- Kidney, heart, lung prototypes
- Clinical application still distant

**3D Bioprinting**
- Vascularized tissue constructs
- Organoids for drug testing
- Full organ printing not yet achieved

**Organoid Technology**
- Liver organoids for bridging
- Kidney organoids for disease modeling
- Potential future transplant applications

## Molecular Diagnostics Integration

**Non-Invasive Monitoring**

Donor-Derived Cell-Free DNA (dd-cfDNA):
- Kidney: AlloSure, Prospera
- Heart: AlloSure Heart
- Liver: Ongoing validation
- Rising levels precede clinical rejection

Gene Expression Profiling:
- Heart: AlloMap (reduces surveillance biopsies)
- Kidney: TruGraf, kSORT
- Predicting subclinical rejection

Torque Teno Virus (TTV):
- Marker of immune function
- Low TTV = high immunosuppression
- High TTV = consider intensification

**Molecular Microscope (MMDx)**
- Microarray analysis of biopsy tissue
- Objective rejection classification
- TCMR, ABMR, mixed, injury phenotypes
- Increasingly standard in kidney transplant

## Precision Immunosuppression

**Pharmacogenomics**
- CYP3A5 polymorphisms affect tacrolimus metabolism
- Dosing algorithms incorporating genetics
- Improved target achievement

**Therapeutic Drug Monitoring Evolution**
- Population pharmacokinetic models
- AUC-based dosing vs. trough
- Limited sampling strategies

**Individualized Regimen Selection**
- Risk stratification at transplant
- Biomarker-guided minimization
- Personalized maintenance strategies`,
      keyTerms: [
        { term: 'tolerance', definition: 'State where graft is accepted without ongoing immunosuppression' },
        { term: 'xenotransplantation', definition: 'Transplantation of organs between species, typically gene-edited pig to human' },
        { term: 'decellularization', definition: 'Process removing cellular material to create tissue scaffolds for reseeding' },
        { term: 'molecular microscope', definition: 'Microarray-based biopsy analysis providing objective molecular diagnosis' },
      ],
      clinicalNotes: `Research priorities:
1. Xenotransplantation clinical trial design and long-term monitoring
2. Tolerance biomarker validation and protocol optimization
3. Molecular diagnostic integration into clinical care pathways
4. Bioengineered organ development timeline and milestones
5. Precision immunosuppression with pharmacogenomic guidance`,
    },
  },

  media: [
    {
      id: 'organ-types-infographic',
      type: 'diagram',
      filename: 'organ-transplant-types.svg',
      title: 'Types of Organ Transplants',
      description: 'Visual overview of different organ transplants and their characteristics',
    },
  ],

  citations: [
    {
      id: 'srtr-annual-report',
      type: 'website',
      title: 'SRTR Annual Data Report',
      source: 'Scientific Registry of Transplant Recipients',
      url: 'https://srtr.transplant.hrsa.gov/',
    },
    {
      id: 'ishlt-guidelines',
      type: 'article',
      title: 'ISHLT Guidelines for the Care of Heart and Lung Transplant Recipients',
      source: 'Journal of Heart and Lung Transplantation',
    },
  ],

  crossReferences: [
    { targetId: 'concept-organ-transplant-basics', targetType: 'concept', relationship: 'parent', label: 'Transplant Basics' },
    { targetId: 'concept-immunosuppression-therapy', targetType: 'concept', relationship: 'related', label: 'Immunosuppression' },
    { targetId: 'condition-transplant-rejection', targetType: 'condition', relationship: 'related', label: 'Rejection' },
  ],

  tags: {
    systems: ['transplant-medicine'],
    topics: ['organ transplants', 'kidney transplant', 'liver transplant', 'heart transplant', 'lung transplant'],
    clinicalRelevance: 'critical',
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default typesOfOrganTransplants;
