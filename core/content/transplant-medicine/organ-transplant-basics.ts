/**
 * Organ Transplant Basics - Educational Content
 *
 * Foundational education on organ transplantation including principles,
 * history, indications, and basic concepts for patients and families.
 */

import { EducationalContent } from '../types';

export const organTransplantBasics: EducationalContent = {
  id: 'concept-organ-transplant-basics',
  type: 'concept',
  name: 'Organ Transplant Basics',
  alternateNames: ['Transplantation Fundamentals', 'Organ Transplant Overview'],

  levels: {
    1: {
      level: 1,
      summary: 'An organ transplant is when doctors take a healthy organ from one person and put it in someone whose organ is not working well.',
      explanation: `Sometimes our organs, like the heart, kidneys, or liver, get very sick and stop working the way they should. When medicine cannot fix them, doctors might suggest getting a new organ from someone else. This is called an organ transplant.

**How Does It Work?**
- A healthy organ comes from a donor (the person giving the organ)
- Doctors carefully remove the sick organ and put in the healthy one
- The new organ starts working in the person's body

**Where Do Organs Come From?**
- Sometimes from people who have died and wanted to help others
- Sometimes from living people (like a family member giving a kidney)

**Common Organs That Can Be Transplanted**
- Kidneys (we have two, so someone can give one)
- Liver
- Heart
- Lungs

**After the Transplant**
The person needs to take special medicine every day to help their body accept the new organ. With good care, many people live long, healthy lives after a transplant.`,
      keyTerms: [
        { term: 'transplant', definition: 'Moving an organ from one person to another' },
        { term: 'donor', definition: 'A person who gives an organ to help someone else' },
        { term: 'recipient', definition: 'The person who receives the new organ' },
      ],
      analogies: [
        'An organ transplant is like replacing a broken part in a car with a working one from another car.',
        'Think of it like getting a new battery for a toy when the old one stops working.',
      ],
      examples: [
        'A child with a heart that does not pump well might receive a new heart from a donor.',
        'Someone whose kidneys cannot clean their blood anymore might get a kidney from a family member.',
      ],
    },
    2: {
      level: 2,
      summary: 'Organ transplantation is a surgical procedure where a failing organ is replaced with a healthy organ from a donor, either deceased or living, to restore normal function and save lives.',
      explanation: `**What Is Organ Transplantation?**

Organ transplantation is a medical treatment for people whose organs have failed and cannot recover with other treatments. It involves surgically removing a diseased organ and replacing it with a healthy one from a donor.

**Types of Organ Transplants**
- **Solid organ transplants**: Heart, kidneys, liver, lungs, pancreas, intestines
- **Tissue transplants**: Corneas, skin, bone, heart valves, tendons

**Types of Donors**
1. **Deceased donors**: People who have died and chose to donate
2. **Living donors**: Healthy people who donate an organ or part of one (usually kidney or liver portion)

**Why People Need Transplants**
- Kidney failure from diabetes or high blood pressure
- Heart failure that medicines cannot control
- Liver disease from hepatitis or alcohol
- Lung diseases like cystic fibrosis or COPD
- Type 1 diabetes (pancreas transplant)

**The Basic Process**
1. Doctor determines transplant is needed
2. Patient goes through evaluation testing
3. Patient is placed on the waiting list
4. When an organ becomes available and matches, surgery is performed
5. Patient takes immunosuppression medications for life

**Challenges**
- Not enough organs for everyone who needs them
- Body may try to reject the new organ
- Lifelong medication required`,
      keyTerms: [
        { term: 'deceased donor', definition: 'A person who has died and whose organs are donated for transplantation' },
        { term: 'living donor', definition: 'A healthy person who donates an organ or part of an organ while alive' },
        { term: 'immunosuppression', definition: 'Medications that prevent the body from rejecting the new organ' },
        { term: 'organ failure', definition: 'When an organ can no longer perform its essential functions' },
      ],
      analogies: [
        'The immune system is like a security guard that attacks anything unfamiliar - transplant medications teach it to accept the new organ as friendly.',
      ],
    },
    3: {
      level: 3,
      summary: 'Organ transplantation involves the surgical replacement of a failing organ with a functional allograft from a deceased or living donor, requiring careful immunological matching and lifelong immunosuppressive therapy to prevent rejection.',
      explanation: `## Fundamentals of Organ Transplantation

**Historical Context**
- 1954: First successful kidney transplant (Joseph Murray, between identical twins)
- 1967: First human heart transplant (Christiaan Barnard)
- 1983: Cyclosporine revolutionized immunosuppression
- Modern era: Improved outcomes through better matching, surgical techniques, and medications

**Immunological Principles**

**HLA (Human Leukocyte Antigen) System**
- Major histocompatibility complex proteins on cell surfaces
- Key antigens: HLA-A, HLA-B, HLA-DR
- Better HLA matching = lower rejection risk
- Most critical for kidney transplants

**ABO Blood Type Compatibility**
- Must match blood type (similar to transfusion rules)
- O = universal donor; AB = universal recipient
- ABO-incompatible transplants possible with special protocols

**Crossmatch Testing**
- Tests recipient blood against donor cells
- Positive crossmatch = antibodies present = higher rejection risk
- Negative crossmatch required for most transplants

**Types of Transplants**

| Type | Description | Example |
|------|-------------|---------|
| Autograft | Same person (donor = recipient) | Skin graft |
| Isograft | Identical twin | Kidney from twin |
| Allograft | Same species, different individual | Standard transplant |
| Xenograft | Different species | Pig heart valves |

**Organ-Specific Considerations**

**Kidney**
- Most common transplant
- Can function immediately or have delayed graft function
- Living donor or deceased donor

**Liver**
- Can regenerate; living donor possible (partial liver)
- No HLA matching required
- Allocation by MELD score (disease severity)

**Heart**
- Must function immediately
- Requires brain-dead donor
- Size matching critical

**Lung**
- Highest rejection rate
- Size and blood type matching important
- Often bilateral transplant needed`,
      keyTerms: [
        { term: 'allograft', definition: 'An organ or tissue transplanted from one individual to another of the same species' },
        { term: 'HLA', definition: 'Human Leukocyte Antigens - proteins on cells that the immune system uses to identify self vs. non-self' },
        { term: 'crossmatch', definition: 'Laboratory test mixing recipient serum with donor cells to detect preformed antibodies' },
        { term: 'MELD score', definition: 'Model for End-Stage Liver Disease - numerical score predicting mortality used for liver allocation' },
      ],
      clinicalNotes: 'Transplant evaluation should begin early when organ failure is anticipated. Early referral allows time for complete evaluation, optimization of comorbidities, and living donor identification if applicable.',
    },
    4: {
      level: 4,
      summary: 'Solid organ transplantation requires understanding of alloimmune responses, HLA sensitization, donor-recipient matching algorithms, and the balance between immunosuppression efficacy and toxicity to achieve optimal graft and patient survival.',
      explanation: `## Advanced Transplant Immunobiology

**T-Cell Allorecognition Pathways**

**Direct Pathway**
- Recipient T cells recognize intact donor MHC molecules
- Dominant early post-transplant
- Leads to acute cellular rejection

**Indirect Pathway**
- Recipient APCs process and present donor peptides
- Predominant in chronic rejection
- Drives antibody-mediated rejection

**Semi-Direct Pathway**
- Transfer of donor MHC to recipient APCs
- Emerging understanding of its role

**HLA Sensitization**

**Causes of Sensitization**
- Previous transplants
- Blood transfusions
- Pregnancy
- Ventricular assist devices

**Panel Reactive Antibodies (PRA)**
- Percentage of population against which recipient has antibodies
- Calculated PRA (cPRA) used for allocation
- High cPRA = harder to find compatible donor

**Donor-Specific Antibodies (DSA)**
- Antibodies specifically targeting donor HLA
- Preformed DSA: Present before transplant
- De novo DSA: Develop after transplant
- Associated with antibody-mediated rejection

**Allocation Systems**

**UNOS/OPTN Kidney Allocation**
- Points for: waiting time, PRA, prior living donor, pediatric status
- HLA matching (especially DR)
- Geographic distribution (local, regional, national)
- KDPI/EPTS matching (donor quality to recipient expected survival)

**Liver Allocation**
- MELD/PELD score based (severity of illness)
- Exception points for conditions not reflected in MELD
- Geographic distribution circles

**Heart Allocation**
- Status-based (urgency)
- Status 1-6 with medical criteria
- Geographic circles

**Immunosuppression Principles**

**Induction Therapy**
- Depleting agents: Thymoglobulin, Alemtuzumab
- Non-depleting: Basiliximab (IL-2 receptor antagonist)
- Used at time of transplant for intense initial immunosuppression

**Maintenance Therapy**
- Calcineurin inhibitors: Tacrolimus, Cyclosporine
- Antiproliferative agents: Mycophenolate, Azathioprine
- mTOR inhibitors: Sirolimus, Everolimus
- Corticosteroids

**Therapeutic Drug Monitoring**
- Trough levels for CNI and mTOR inhibitors
- Target ranges vary by time post-transplant and organ type
- Balance efficacy vs. nephrotoxicity/other side effects`,
      keyTerms: [
        { term: 'direct allorecognition', definition: 'T-cell recognition of intact foreign MHC molecules on donor cells' },
        { term: 'cPRA', definition: 'Calculated Panel Reactive Antibody - percentage of donors incompatible due to recipient antibodies' },
        { term: 'donor-specific antibodies', definition: 'Antibodies specifically directed against donor HLA antigens' },
        { term: 'calcineurin inhibitor', definition: 'Immunosuppressant class (tacrolimus, cyclosporine) that blocks T-cell activation via calcineurin pathway' },
        { term: 'KDPI', definition: 'Kidney Donor Profile Index - score estimating donor kidney longevity relative to other donors' },
      ],
      clinicalNotes: 'High-risk immunologic patients (elevated cPRA, DSA, repeat transplant) require specialized protocols including desensitization, enhanced monitoring, and potentially more intensive immunosuppression. Early post-transplant DSA monitoring is increasingly standard of care.',
    },
    5: {
      level: 5,
      summary: 'Contemporary transplantation integrates precision medicine approaches including molecular diagnostics for rejection surveillance, machine perfusion for organ optimization, tolerance induction protocols, and xenotransplantation as emerging solutions to organ shortage.',
      explanation: `## Frontiers in Transplant Medicine

**Molecular Diagnostics**

**Gene Expression Profiling**
- AlloMap: Peripheral blood gene expression for heart rejection surveillance
- TruGraf: Kidney rejection detection
- Advantages: Non-invasive, may detect subclinical rejection

**Donor-Derived Cell-Free DNA (dd-cfDNA)**
- Released from injured graft cells
- Rising levels indicate rejection/injury
- CareDx AlloSure, Natera Prospera
- Complements but does not replace biopsy

**Molecular Microscope (MMDx)**
- Microarray analysis of biopsy tissue
- Objective rejection classification
- Improved diagnostic precision over histology alone

**Machine Perfusion Technology**

**Hypothermic Machine Perfusion (HMP)**
- Standard for kidneys from DCD donors
- Reduces delayed graft function
- Allows viability assessment

**Normothermic Machine Perfusion (NMP)**
- Maintains organ at physiologic temperature
- Allows metabolic assessment and intervention
- Ex-vivo liver NMP enables previously unusable organs
- Lung EVLP (ex-vivo lung perfusion) for marginal donors

**Organ Optimization**
- Repair of ischemia-reperfusion injury
- Reduction of steatosis in fatty livers
- Extended preservation times enabling logistics

**Tolerance and Immune Modulation**

**Clinical Tolerance Protocols**
- Combined kidney-bone marrow transplant (Northwestern, Stanford protocols)
- Chimerism-based approaches
- Some patients achieve medication-free survival

**Regulatory T-Cell Therapy**
- Ex-vivo expanded Tregs
- ONE Study demonstrated safety in kidney transplant
- Potential for reducing maintenance immunosuppression

**Costimulation Blockade**
- Belatacept (CTLA-4-Ig): Approved for kidney transplant
- Avoids CNI nephrotoxicity
- BENEFIT trial: Superior long-term GFR
- Risk: Higher acute rejection, PTLD

**Xenotransplantation**

**Gene-Edited Pig Organs**
- 10-gene edited pigs (eGenesis, Revivicor)
- Knockout: Alpha-gal, Neu5Gc, beta-4GalNT2
- Knockin: Human complement regulators, thrombomodulin

**Recent Milestones**
- 2022: First pig heart transplant (University of Maryland)
- Pig kidneys attached ex-vivo to brain-dead recipients
- Moving toward clinical trials

**Remaining Challenges**
- Porcine endogenous retroviruses (PERVs)
- Long-term function unknown
- Ethical and regulatory frameworks

**Health Equity in Transplantation**

**Disparities**
- Black patients: Lower transplant rates, longer wait times
- Hispanic patients: Lower living donation rates
- Socioeconomic factors affect access and outcomes

**System Improvements**
- Removal of race coefficient from eGFR calculation
- Policy changes for geographic distribution
- Programs to increase living donation in underserved communities

**Regulatory and Policy Evolution**
- OPTN final rule: Continuous distribution framework
- Emphasis on efficiency and equity
- Enhanced living donor protections`,
      keyTerms: [
        { term: 'donor-derived cell-free DNA', definition: 'Fragments of DNA released from the transplanted organ into recipient blood, elevated in rejection or injury' },
        { term: 'normothermic machine perfusion', definition: 'Technology maintaining organs at body temperature with oxygenated perfusate, allowing assessment and repair' },
        { term: 'xenotransplantation', definition: 'Transplantation of organs between different species, typically gene-edited pig to human' },
        { term: 'tolerance induction', definition: 'Achievement of graft acceptance without ongoing immunosuppression' },
        { term: 'EVLP', definition: 'Ex-vivo lung perfusion - technique for assessing and reconditioning marginal donor lungs' },
      ],
      clinicalNotes: `Current research priorities:
1. Biomarker-guided immunosuppression minimization
2. Machine perfusion optimization and expansion to all organs
3. Xenotransplantation clinical trial development
4. Equity initiatives in organ allocation and access
5. Long-term outcome registries and real-world evidence generation`,
    },
  },

  media: [
    {
      id: 'transplant-basics-diagram',
      type: 'diagram',
      filename: 'organ-transplant-process.svg',
      title: 'Organ Transplant Process Overview',
      description: 'Visual representation of the organ transplant journey from evaluation to post-transplant care',
    },
  ],

  citations: [
    {
      id: 'optn-data',
      type: 'website',
      title: 'Organ Procurement and Transplantation Network Data',
      source: 'UNOS/OPTN',
      url: 'https://optn.transplant.hrsa.gov/data/',
    },
    {
      id: 'transplant-guidelines',
      type: 'article',
      title: 'KDIGO Clinical Practice Guideline for the Care of Kidney Transplant Recipients',
      source: 'American Journal of Transplantation',
      url: 'https://www.amjtransplant.org',
    },
  ],

  crossReferences: [
    { targetId: 'process-transplant-evaluation', targetType: 'process', relationship: 'related', label: 'Transplant Evaluation' },
    { targetId: 'process-waitlist-allocation', targetType: 'process', relationship: 'related', label: 'Waitlist and Allocation' },
    { targetId: 'concept-immunosuppression-therapy', targetType: 'concept', relationship: 'related', label: 'Immunosuppression' },
  ],

  tags: {
    systems: ['transplant-medicine'],
    topics: ['organ transplantation', 'transplant fundamentals', 'solid organ transplant'],
    clinicalRelevance: 'critical',
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default organTransplantBasics;
