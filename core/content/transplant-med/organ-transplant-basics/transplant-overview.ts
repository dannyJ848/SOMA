import { EducationalContent } from '../../types';

export const transplantOverview: EducationalContent = {
  id: 'transplant-overview',
  type: 'concept',
  name: 'Organ Transplant Overview',
  alternateNames: ['Organ Transplantation', 'Solid Organ Transplant'],

  levels: {
    1: {
      level: 1,
      summary: 'Organ transplantation is surgery to replace a failing organ with a healthy one from a donor, saving thousands of lives each year.',
      explanation: `When an organ fails and cannot be treated with medicine or surgery alone, doctors may replace it with a healthy organ from a donor. This life-saving surgery is called organ transplantation.

**What is Organ Transplantation?**

*The Basic Concept:*
- Remove a diseased or failing organ
- Replace it with a healthy organ from a donor
- The donor can be living or deceased
- The new organ takes over the work of the failed organ

**Organs That Can Be Transplanted**

*Most Common Transplants:*
- **Kidneys** - Filter blood, remove waste
- **Liver** - Processes nutrients, filters toxins
- **Heart** - Pumps blood throughout body
- **Lungs** - Exchange oxygen and carbon dioxide

*Less Common Transplants:*
- **Pancreas** - Makes insulin for blood sugar
- **Intestines** - Absorb nutrients from food

**Sources of Donated Organs**

*Living Donors:*
- Alive when they donate
- Can donate one kidney or part of liver
- Usually family members or close friends
- Also people who want to help strangers

*Deceased Donors:*
- Have died, usually from brain death
- Can donate multiple organs at once
- Can save up to 8 lives with their organs
- Signed up to be an organ donor before death

**Who Needs a Transplant?**

People need transplants when organs fail from:
- Birth defects
- Chronic diseases (diabetes, high blood pressure)
- Infections
- Injuries or accidents
- Genetic conditions

**The Transplant Process**

1. **Evaluation** - Tests to see if you can have a transplant
2. **Waiting List** - Wait for matching donor organ
3. **Surgery** - Operation to put in new organ
4. **Recovery** - Healing and taking medications
5. **Follow-up** - Lifetime check-ups and care

**Important Points:**
- Many more people need organs than are available
- Waiting times vary from months to years
- Transplant requires lifelong medications
- Success rates keep improving with new treatments`,
      keyTerms: [
        { term: 'Organ Transplant', definition: 'Surgical procedure to replace a failing organ with a healthy one from a donor' },
        { term: 'Recipient', definition: 'The person who receives the transplanted organ' },
        { term: 'Donor', definition: 'The person who provides the organ for transplantation' },
        { term: 'Graft', definition: 'The transplanted organ or tissue' },
        { term: 'Organ Failure', definition: 'When an organ can no longer function well enough to keep the body alive' }
      ],
      analogies: [
        'An organ transplant is like replacing a broken part in a machine - when the original can\'t be fixed, you install a new one.',
        'The waiting list is like a long line at a popular restaurant - you wait until your name is called and a table (organ) is available.',
      ],
      examples: [
        'A person with kidney failure from diabetes receives a kidney from their brother.',
        'Someone with liver disease from hepatitis gets part of a liver from a living donor.',
        'A child born with a heart defect receives a new heart from a deceased donor.',
      ],
    },
    2: {
      level: 2,
      summary: 'Transplantation history spans from early failed attempts to successful procedures after immunosuppressive drugs, with UNOS managing organ allocation in the US.',
      explanation: `Understanding organ transplantation requires knowledge of its history, the allocation system, and basic immunology.

**History of Organ Transplantation**

*Early Attempts (1950s):*
- First successful kidney transplant: 1954 (identical twins)
- Joseph Murray and David Hume at Brigham Hospital
- Between identical twins (no rejection)
- Showed transplantation was possible

*Heart Transplant:*
- First successful: 1967 by Christiaan Barnard (South Africa)
- Early results poor due to rejection
- Became routine after better drugs developed

*Liver Transplant:*
- First successful: 1963 by Thomas Starzl
- Technically challenging
- Now standard treatment for liver failure

*Breakthrough - Cyclosporine (1980s):*
- Revolutionized transplantation
- Effective immunosuppression
- Dramatically improved outcomes
- Made multi-organ transplants possible

**Organ Allocation System**

*UNOS (United Network for Organ Sharing):*
- Manages US transplant system
- Maintains waiting lists
- Matches donors to recipients
- Ensures fair distribution

*How Allocation Works:*
- Medical urgency (sickest first)
- Blood/tissue type matching
- Geographic distance
- Time spent waiting
- Size compatibility (for children)

*Waiting List Statistics:*
- Over 100,000 people waiting in US
- About 40,000 transplants per year
- 17 people die each day waiting
- One donor can save up to 8 lives

**Types of Transplants by Donor Type**

*Living Donor Transplants:*
- Kidney (most common)
- Partial liver
- Better outcomes than deceased
- Can be planned electively
- No waiting time (or minimal)

*Deceased Donor Transplants:*
- All organs except partial liver
- Brain dead or circulatory death donors
- Must be transported quickly
- Cold ischemia time limits

**Types of Grafts**

*By genetics:*
- **Isograft**: Identical twins (no rejection)
- **Allograft**: Same species, different person (most transplants)
- **Xenograft**: Different species (experimental)

*By donor source:*
- **Living donor**: Alive at time of donation
- **Deceased donor**: Dead when organs recovered

**Basic Immunology**

*Why Rejection Happens:*
- Immune system recognizes donor organ as foreign
- HLA markers identify "self" vs "non-self"
- Antibodies and T cells attack foreign tissue
- Called "rejection" when transplanted organ is damaged

*ABO Blood Types:*
- Must be compatible between donor and recipient
- O can donate to anyone (universal donor)
- AB can receive from anyone (universal recipient)
- A and B have specific compatibility rules

*HLA Matching:*
- More matching = lower rejection risk
- Important for kidney transplants
- Less important for liver (more tolerogenic)
- Tested before listing`,
      keyTerms: [
        { term: 'Allograft', definition: 'Tissue or organ transplanted from one individual to another of the same species' },
        { term: 'Isograft', definition: 'Tissue transplanted between genetically identical individuals (identical twins)' },
        { term: 'Xenograft', definition: 'Tissue transplanted from one species to another' },
        { term: 'UNOS', definition: 'United Network for Organ Sharing - manages the US organ transplant system' },
        { term: 'OPTN', definition: 'Organ Procurement and Transplantation Network - the national transplant system' }
      ],
      analogies: [
        'HLA matching is like finding someone with a similar fingerprint - the more alike, the less likely the immune system is to notice differences.',
        'UNOS is like a central dispatch system that coordinates emergency calls and sends help where it\'s needed most.',
      ],
      examples: [
        'Identical twin kidney transplant (isograft) doesn\'t require immunosuppression.',
        'A patient with blood type A can receive a kidney from donor types A or O.',
        'UNOS assigns a MELD score to liver patients based on how sick they are.',
      ],
    },
    3: {
      level: 3,
      summary: 'Transplant indications include end-stage organ disease, with contraindications like active infection, cancer, or inability to comply with medications. ABO compatibility and HLA matching affect outcomes.',
      explanation: `Understanding transplant medicine requires knowledge of indications, contraindications, and matching principles.

**Indications for Transplantation**

*Kidney Transplant:*
- End-stage renal disease (GFR <15)
- Diabetic nephropathy
- Hypertensive nephrosclerosis
- Glomerulonephritis
- Polycystic kidney disease
- Better outcomes than dialysis
- Can be pre-emptive (before dialysis)

*Liver Transplant:*
- Acute liver failure (fulminant)
- Cirrhosis with complications
- Hepatocellular carcinoma (within Milan criteria)
- Primary biliary cholangitis
- Primary sclerosing cholangitis
- Metabolic diseases

*Heart Transplant:*
- Ischemic cardiomyopathy
- Dilated cardiomyopathy
- Refractory arrhythmias
- Congenital heart disease (adults)
- LVEF typically <20%

*Lung Transplant:*
- COPD
- Idiopathic pulmonary fibrosis
- Cystic fibrosis
- Pulmonary arterial hypertension

*Pancreas Transplant:*
- Type 1 diabetes with hypoglycemia unawareness
- Type 1 diabetes with renal failure (SPK)
- Quality of life indication

*Intestine Transplant:*
- Intestinal failure with TPN complications
- Short gut syndrome (<5026 small intestine)
- Line-associated infections

**Absolute Contraindications**

*Active infection:*
- Sepsis
- Untreated tuberculosis
- HIV (now relative with control)
- Active hepatitis

*Active malignancy:*
- Most cancers require 2-5 year disease-free period
- Exceptions: some skin cancers, some in situ cancers

*Inability to comply:*
- Cognitive impairment
- Psychosis
- Active substance abuse
- Lack of social support
- History of non-adherence

*Severe comorbidities:*
- Untreatable heart disease (for non-heart transplants)
- Severe lung disease (for non-lung transplants)
- Irreversible pulmonary hypertension

**Relative Contraindications**

*Obesity:*
- BMI >35-40 often requires weight loss
- May be acceptable with lower BMI
- Center-specific protocols

*Age:*
- Physiologic age more important than chronologic
- Frailty assessment important
- Individual decisions

*Diabetes:*
- Not a contraindication if controlled
- End-organ damage assessed
- May need cardiac clearance

*Prior malignancy:*
- Individualized based on cancer type
- Required waiting periods vary
- Some cancers more concerning than others

**ABO Blood Group Compatibility**

*Compatibility Rules:*
- Type O: Universal donor, can only receive O
- Type A: Can receive A or O
- Type B: Can receive B or O
- Type AB: Universal recipient, can receive any type

*Kidney/Liver/Pancreas:* Must be ABO compatible
- ABO-incompatible kidney: possible with desensitization
- ABO-incompatible liver: more tolerogenic, sometimes possible

*Heart/Lung:* Must be ABO compatible
- ABO-incompatible rarely done

**HLA Matching**

*Why HLA Matters:*
- Major histocompatibility complex
- Human leukocyte antigens
- More mismatches = higher rejection risk
- Most important for kidney transplants

*HLA Loci:*
- HLA-A, HLA-B (most important)
- HLA-DR (important for matching)
- HLA-C, HLA-DQ (less critical)

*Matching Benefits:*
- Lower rejection risk
- Better graft survival
- May allow less immunosuppression
- Not as critical for liver

**Panel Reactive Antibody (PRA)**

*What it is:*
- Percentage of population recipient has antibodies against
- Measures sensitization
- Higher PRA = harder to find match
- From pregnancies, transfusions, prior transplants

*Clinical significance:*
- PRA >80%: highly sensitized
- Longer wait times
- May need special protocols
- Desensitization may help

**Crossmatching**

*Final compatibility test:*
- Mixes recipient serum with donor cells
- Tests for pre-formed antibodies
- Positive crossmatch = antibody present
- Negative crossmatch = compatible
- Virtual crossmatch using HLA typing

*Types:*
- Complement-dependent cytotoxicity (CDC)
- Flow cytometry crossmatch (more sensitive)
- Virtual crossmatch (using HLA data)`,
      keyTerms: [
        { term: 'End-Stage Organ Disease', definition: 'Final stage of organ failure when the organ can no longer sustain life without replacement' },
        { term: 'ABO Compatibility', definition: 'Blood type matching between donor and recipient' },
        { term: 'HLA Matching', definition: 'Matching of human leukocyte antigens to reduce rejection risk' },
        { term: 'Panel Reactive Antibody (PRA)', definition: 'Measure of how sensitized a recipient is to donor antigens' },
        { term: 'Cold Ischemia Time', definition: 'Time an organ remains preserved on ice before transplantation' }
      ],
      clinicalNotes: 'Kidney: Pre-emptive transplant has best outcomes. Liver: MELD score determines allocation. Heart: PVR must be <5 Wood units. Lung: LAS score prioritizes. HLA matching most important for kidney. ABO-incompatible kidney possible with desensitization.',
    },
    4: {
      level: 4,
      summary: 'Advances include ex vivo perfusion, HCV-positive donor organs, HLA-incompatible transplantation with desensitization, and emerging tolerance-induction strategies.',
      explanation: `Advanced transplant concepts focus on expanding the donor pool and improving outcomes through new technologies.

**HLA and Immunologic Matching**

*HLA Mismatch Calculations:*
- Count mismatched antigens at A, B, DR loci
- 0-6 mismatch possible (2 at each locus)
- Fewer mismatches = better outcomes
- Less critical for liver transplants

*Eplet Matching:*
- More precise than antigen-level matching
- Considers individual epitopes
- May improve compatibility
- Research ongoing

*Acceptable Mismatch:*
- For highly sensitized patients
- HLA antigens recipient has never formed antibodies against
- Can find compatible donors despite high PRA
- Requires careful HLA antibody identification

**Desensitization Protocols**

*Indications:*
- High PRA (>80%)
- Positive crossmatch
- ABO incompatibility
- Living donor with incompatible blood type

*Protocols:*
- Plasmapheresis: Remove antibodies
- IVIG: Neutralize remaining antibodies
- Rituximab: Destroy B cells
- Bortezomib: Destroy plasma cells
- Often combined

*Success rates:*
- Similar outcomes to compatible transplants
- Enables transplantation for highly sensitized
- Resource-intensive
- Not available everywhere

**Expanded Criteria Donors**

*Standard Criteria Donors (SCD):*
- Age <50
- No hypertension, diabetes
- No significant renal impairment
- No stroke as cause of death

*Extended Criteria Donors (ECD):*
- Age >60 OR 50-59 with risk factors
- Higher KDPI (Kidney Donor Profile Index)
- Increased risk of graft failure
- Still better than remaining on dialysis

*Use of ECD organs:*
- Older recipients
- Informed consent about risks
- Reduces wait time
- Increases donor pool

**Hepatitis C-Positive Organs**

*Historical context:*
- Previously avoided
- High transmission risk to recipient
- Limited treatment options

*Current approach:*
- Direct-acting antiviral (DAA) therapy cures HCV
- Can transplant HCV+ organs to HCV- recipients
- Excellent outcomes with treatment
- Expands donor pool significantly

*Indications:*
- HCV-positive recipients
- HCV-negative recipients with long wait times
- Informed consent required

**HIV-Positive Transplantation**

*HOPE Act (2013):*
- Allows HIV+ to HIV+ transplantation
- Research protocols established
- Outcomes similar to HIV-negative
- Addresses organ shortage for HIV+ population

*Considerations:*
- Controlled HIV required
- No opportunistic infections
- Adequate CD4 count
- Drug interactions assessed

**Machine Perfusion**

*Hypothermic Machine Perfusion (HMP):*
- Kidneys transported at 4-8°C with perfusion
- Reduces delayed graft function
- Improves outcomes for marginal kidneys
- Allows assessment before transplant

*Normothermic Machine Perfusion (NMP):*
- Organ at body temperature
- Metabolically active
- Can assess function
- Enables repair
- More expensive

*Ex Vivo Lung Perfusion (EVLP):*
- Evaluates marginal lungs
- rehabilitates injured lungs
- Increases lung donor pool
- Improves outcomes

**Ischemia-Reperfusion Injury**

*Cold ischemia time:*
- Organ on ice before transplant
- Longer time = more injury
- Limits vary by organ (4-30 hours)
- Key factor in outcomes

*Reperfusion injury:*
- Additional damage when blood flow restored
- Oxidative stress
- Inflammatory response
- Mitigated by machine perfusion

**Recipient Risk Assessment**

*Cardiovascular risk:*
- Stress testing based on age/risk
- Coronary angiography when indicated
- PVR measurement for heart transplant
- Frailty assessment

*Pulmonary risk:*
- PFTs when indicated
- Chest imaging
- ABG for lung candidates
- Right heart catheterization

*Infectious risk:*
- CMV status (donor/recipient)
- EBV status (PTLD risk)
- Tuberculosis screening
- Fungal testing

*Malignancy risk:*
- Age-appropriate screening
- Required waiting periods
- Individualized assessment`,
      keyTerms: [
        { term: 'MHC', definition: 'Major Histocompatibility Complex - cell surface proteins that present antigens to immune cells' },
        { term: 'Sensitization', definition: 'Development of antibodies against HLA antigens, usually from previous transplants, pregnancy, or blood transfusion' },
        { term: 'Crossmatch', definition: 'Test mixing donor and recipient serum/cells to detect pre-formed antibodies' },
        { term: 'Desensitization', definition: 'Treatment to reduce antibody levels in sensitized patients' },
        { term: 'Graft Survival', definition: 'Length of time a transplanted organ continues to function' }
      ],
      clinicalNotes: 'KDPI >85 considered marginal kidneys. ECD organs better than dialysis. HCV+ to HCV- with DAA: excellent outcomes. Machine perfusion reduces DGF. Cold ischemia: kidney 30h, liver 12h, heart 6h, lung 6h. HOPE Act enables HIV+ to HIV+ transplants.',
    },
    5: {
      level: 5,
      summary: 'Xenotransplantation using gene-edited pig organs, tolerance induction through mixed chimerism, and biomarkers like dd-cfDNA represent the frontier of transplant medicine.',
      explanation: `The frontier of transplant medicine includes groundbreaking technologies that may transform the field.

**Tolerance Induction**

*Mixed Chimerism:*
- Donor hematopoietic cells coexist with recipient
- Results in central deletion of alloreactive T cells
- Can achieve operational tolerance
- Some patients off immunosuppression

*Clinical protocols:*
- Combined kidney and bone marrow transplant
- Non-myeloablative conditioning
- Donor-specific transfusion
- Regulatory T cell infusion

*Success rates:*
- Kidney: ~40-60% tolerance in trials
- Liver: Some spontaneous tolerance (operational tolerance)
- Multiple centers worldwide pursuing

*Challenges:*
- Graft-versus-host disease risk
- Engraftment failure
- Complex protocols
- Limited to specialized centers

**Xenotransplantation**

*Genetically modified pig organs:*
- CRISPR/Cas9 gene editing
- Remove alpha-gal (xenoantigen)
- Add human complement regulators
- Add human anti-inflammatory genes
- Multiple modifications (>10 genes)

*First clinical cases:*
- Pig-to-human heart transplant: 2022
- Patient survived 2 months
- Proof of concept established
- Multiple trials ongoing

*Barriers:*
- Physiologic differences (size, lifespan)
- Immune rejection beyond alpha-gal
- Zoonotic disease risk (PERVs)
- Ethical considerations

*Potential impact:*
- Unlimited organ supply
- Elective transplantation possible
- No waiting lists
- Could solve organ shortage

**Biomarkers of Rejection**

*Donor-derived cell-free DNA (dd-cfDNA):*
- Fragmented DNA from dying graft cells
- Detected in recipient blood
- Earlier than clinical dysfunction
- Quantitative measure of injury
- May distinguish rejection from other causes

*Gene expression profiling:*
- AlloMap for heart transplant
- kSORT for kidney transplant
- Peripheral blood testing
- Non-invasive rejection monitoring

*Protein biomarkers:*
- Urinary CXCL9, CXCL10 for kidney
- Serum amyloid A
- Troponin for heart
- Donor-specific HLA antibodies

*Exosomes:*
- Carry proteins, RNA from graft
- Graft-derived exosomes in circulation
- Early injury marker
- Characterize rejection type

**Artificial Organs**

*Current status:*
- Mechanical hearts (LVAD as destination therapy)
- Dialysis machines (kidney replacement)
- ECMO (lung support)
- Bioartificial liver (support)

*Future directions:*
- 3D bioprinting of organs
- Decellularized scaffolds with recipient cells
- Organoids growing into functional organs
- Tissue-engineered bladders (already in use)

**Bioengineering Approaches**

*Decellularization:*
- Remove cells from donor organ
- Leave extracellular matrix scaffold
- Recipient's cells repopulate scaffold
- No rejection (recipient's own cells)
- Early clinical trials

*3D Bioprinting:*
- Layer-by-layer organ construction
- Patient-specific anatomy
- Multiple cell types
- Vascularization challenges
- Years away from clinical use

*Organoids:*
- 3D tissue cultures from stem cells
- Mini-organs with structure/function
- May grow into full organs
- Research stage

**Perfusion Advances**

*Normothermic regional perfusion (NRP):*
- In situ perfusion of DCD donors
- Reduces warm ischemia
- Improves organ quality
- Increases utilization

*Ex vivo perfusion:*
- Portable perfusion devices
- Longer preservation times
- Organ repair before transplant
- Assessment of marginal organs

**Immunomodulation**

*Costimulation blockade:*
- Belatacept (CTLA4-Ig) approved
- CD40 blockade in development
- Avoids nephrotoxicity
- Promotes tolerance?

*Targeted therapies:*
- Anti-IL-6 for antibody-mediated rejection
- Anti-C1s for complement inhibition
- Anti-CD38 for plasma cell depletion
- JAK inhibitors for broad suppression

**Ethical Considerations**

*Resource allocation:*
- How to distribute scarce organs?
- Priority to sickest or most likely to benefit?
- Age considerations
- Social worth criteria (rejected)

*Living donor ethics:*
- Autonomy vs. protection
- Informed consent complexity
- Long-term risk acceptance
- Financial compensation debates

*Xenotransplantation ethics:*
- Animal welfare
- Public health risks (zoonoses)
- Religious/cultural considerations
- Regulatory challenges`,
      keyTerms: [
        { term: 'Tolerance', definition: 'State of immune acceptance of the graft without need for ongoing immunosuppression' },
        { term: 'Normothermic Perfusion', definition: 'Keeping donor organs at body temperature with perfusion to maintain metabolism' },
        { term: 'Marginal Donor', definition: 'Extended criteria donor with factors that may increase risk but expand the donor pool' },
        { term: 'Xenotransplantation', definition: 'Transplantation of organs or tissues between different species' },
        { term: 'CRISPR', definition: 'Gene editing technology used to modify pig organs for xenotransplantation' }
      ],
      clinicalNotes: 'Mixed chimerism can achieve tolerance in kidney recipients. First pig-to-human heart 2022 (survived 2 months). dd-cfDNA detects rejection earlier than clinical markers. EVLP increases lung donor pool. Belatacept avoids nephrotoxicity but may increase PTLD risk.',
    },
  },

  media: [
    {
      id: 'transplant-overview-diagram',
      type: 'diagram',
      filename: 'organ-transplant-overview.svg',
      title: 'Organ Transplantation Overview',
      description: 'Overview of organ transplant process and types',
    },
  ],
  citations: [
    {
      id: 'unos-overview',
      type: 'website',
      title: 'Organ Procurement and Transplantation Network',
      source: 'UNOS',
      url: 'https://unos.org',
    },
  ],
  crossReferences: [
    { targetId: 'donor-types', targetType: 'concept', relationship: 'related', label: 'Donor Types' },
    { targetId: 'immunology-basics', targetType: 'concept', relationship: 'related', label: 'Transplant Immunology' },
  ],
  tags: {
    systems: ['urinary', 'hepatobiliary', 'cardiovascular', 'pulmonary', 'gastrointestinal', 'endocrine'],
    topics: ['transplantation', 'surgery', 'ethics'],
    keywords: ['organ transplant', 'UNOS', 'waiting list', 'immunosuppression', 'donation'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['surgery', 'medicine'] },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};
