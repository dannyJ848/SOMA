/**
 * Immunosuppression Basics
 *
 * Fundamental concepts of immunosuppressive therapy for organ transplantation
 * including drug classes, mechanisms, and principles of immune modulation.
 */

import { EducationalContent } from '../../types';

export const IMMUNOSUPPRESSION_BASICS: EducationalContent = {
  id: 'transplant-immunosuppression-basics',
  type: 'concept',
  name: 'Immunosuppression Basics',
  alternateNames: ['Anti-rejection therapy', 'Transplant immunotherapy', 'Immunosuppressive medications'],

  levels: {
    1: {
      level: 1,
      summary: 'After receiving an organ transplant, patients need medications to prevent their immune system from attacking the new organ.',
      explanation: `**Why Immunosuppression Is Needed:**

When you receive an organ from another person (like a kidney, liver, or heart), your immune system sees it as "foreign" - like a germ or infection. Your body wants to attack and destroy it. This is called rejection.

To prevent rejection, transplant patients take special medications called immunosuppressants. These medications weaken the immune system just enough to accept the new organ while still fighting infections.

**Types of Immunosuppressive Medications:**

1. **Calcineurin Inhibitors** (tacrolimus, cyclosporine)
   - Most important anti-rejection drugs
   - Taken daily for life
   - Need blood level monitoring

2. **Antimetabolites** (mycophenolate, azathioprine)
   - Block immune cell growth
   - Usually combined with other drugs

3. **Steroids** (prednisone)
   - Reduce inflammation
   - Often used early after transplant
   - May be reduced over time

4. **Other medications**
   - Used in special situations
   - For strong rejection episodes

**Important Things to Know:**

- Must take medications exactly as prescribed
- Missing doses can cause rejection
- Regular blood tests to check drug levels
- Side effects are common but manageable
- Higher risk of infections and some cancers

**Living with Immunosuppression:**

- Take medications at the same time each day
- Avoid sick contacts when possible
- Get recommended vaccines (some are not safe)
- Report any illness promptly
- Regular follow-up appointments`,
      keyTerms: [
        { term: 'rejection', definition: 'When the immune system attacks a transplanted organ' },
        { term: 'immunosuppression', definition: 'Medications that weaken the immune system to prevent organ rejection' },
        { term: 'tacrolimus', definition: 'The most commonly used anti-rejection medication' },
      ],
      analogies: [
        'Immunosuppression is like putting your immune system soldiers to sleep so they do not attack the new organ guest in your body.',
        'Taking anti-rejection medications is like paying rent to keep your new organ - you have to do it regularly or you lose it.',
      ],
      examples: [
        'A kidney transplant patient takes tacrolimus every morning and evening at the same time.',
        'After a heart transplant, a patient needs to avoid crowded places during flu season because of increased infection risk.',
      ],
    },
    2: {
      level: 2,
      summary: 'Transplant immunosuppression involves induction therapy at the time of transplant followed by maintenance therapy with multiple drug classes targeting different immune pathways to prevent acute and chronic rejection.',
      explanation: `**Phases of Immunosuppression:**

*Induction Therapy (perioperative):*
- Given at time of transplant
- Most intense immunosuppression
- Depletes or blocks T cells
- Reduces early rejection risk

*Maintenance Therapy (lifelong):*
- Triple or dual drug regimens
- Balanced to prevent rejection while minimizing side effects
- Tailored to individual risk

**Major Drug Classes:**

*Calcineurin Inhibitors (CNIs):*
| Drug | Features |
|------|----------|
| Tacrolimus | More potent, first-line for most transplants |
| Cyclosporine | Older, still used in some cases |

Mechanism: Block calcineurin → prevent T cell activation

*Antimetabolites:*
| Drug | Mechanism |
|------|-----------|
| Mycophenolate | Blocks purine synthesis in lymphocytes |
| Azathioprine | Older, less commonly used now |

*Corticosteroids:*
- Multiple anti-inflammatory effects
- High doses early, often tapered
- Some protocols aim for steroid withdrawal

*mTOR Inhibitors:*
| Drug | Features |
|------|----------|
| Sirolimus | Blocks cell proliferation |
| Everolimus | Similar to sirolimus |

Used in CNI-sparing or for specific indications

*Induction Agents:*
| Agent | Type |
|-------|------|
| Thymoglobulin (ATG) | T cell depleting |
| Basiliximab | IL-2 receptor blocking |
| Alemtuzumab | Lymphocyte depleting |

**Standard Maintenance Regimens:**

*Triple Therapy (most common):*
- CNI (usually tacrolimus)
- Antimetabolite (usually mycophenolate)
- Low-dose prednisone

*CNI-Sparing Protocols:*
- When CNI toxicity is concern
- Use mTOR inhibitor instead
- Higher rejection risk

**Monitoring:**

| Test | Purpose | Frequency |
|------|---------|-----------|
| CNI trough level | Ensure therapeutic range | Regular |
| Renal function | Detect CNI nephrotoxicity | Regular |
| CBC | Drug toxicity monitoring | Regular |
| Glucose | Steroid/CNI-induced diabetes | Periodic |

**Side Effects by Drug Class:**

| Class | Common Side Effects |
|-------|---------------------|
| CNIs | Nephrotoxicity, tremor, hyperglycemia, hypertension |
| Mycophenolate | GI upset, bone marrow suppression |
| Steroids | Weight gain, diabetes, osteoporosis, mood changes |
| mTOR inhibitors | Hyperlipidemia, mouth ulcers, poor wound healing |`,
      keyTerms: [
        { term: 'induction therapy', definition: 'Intensive immunosuppression given around the time of transplant' },
        { term: 'maintenance therapy', definition: 'Ongoing immunosuppression taken long-term after transplant' },
        { term: 'calcineurin inhibitor', definition: 'Class of drugs (tacrolimus, cyclosporine) that block T cell activation' },
        { term: 'trough level', definition: 'Drug level measured just before the next dose to ensure proper dosing' },
      ],
      analogies: [
        'Induction therapy is like a shock-and-awe campaign against the immune system, while maintenance is the peacekeeping force.',
        'Multiple immunosuppressants work like a team - each player covers different aspects of the immune response.',
      ],
    },
    3: {
      level: 3,
      summary: 'Immunosuppression requires understanding of T cell activation pathways, mechanism-specific drug selection, therapeutic drug monitoring, and management of drug interactions and complications while balancing rejection versus infection risk.',
      explanation: `**T Cell Activation - Immunosuppression Targets:**

*Three-Signal Model:*
\`\`\`
Signal 1: Antigen Recognition
- TCR binds MHC-peptide complex
- Target: Calcineurin (blocked by CNIs)

Signal 2: Costimulation
- CD28-B7 interaction
- Target: Belatacept blocks CD28

Signal 3: Proliferation
- IL-2 and other cytokines drive proliferation
- Target: mTOR (blocked by sirolimus)
         IL-2R (blocked by basiliximab)
\`\`\`

**Calcineurin Inhibitors - Detailed:**

*Tacrolimus:*
| Property | Details |
|----------|---------|
| Binding protein | FKBP-12 |
| Target | Calcineurin → blocks IL-2 transcription |
| Therapeutic trough | 5-15 ng/mL (varies by time post-transplant) |
| Metabolism | CYP3A4, P-glycoprotein |
| Food effect | Take consistently with or without food |

*Cyclosporine:*
| Property | Details |
|----------|---------|
| Binding protein | Cyclophilin |
| Target | Calcineurin (same as tacrolimus) |
| Therapeutic trough | 100-300 ng/mL (varies) |
| Metabolism | CYP3A4, P-glycoprotein |
| C2 monitoring | Some centers use 2-hour post-dose level |

**Mycophenolate:**

*Mechanism:*
\`\`\`
Mycophenolic acid (MPA) → Inhibits IMPDH
→ Blocks de novo purine synthesis
→ Selective for lymphocytes (require de novo pathway)
\`\`\`

*Formulations:*
| Form | Features |
|------|----------|
| MMF | Mycophenolate mofetil (prodrug) |
| MPA-EC | Enteric-coated mycophenolic acid sodium |

*Monitoring:*
- Routine MPA levels not usually done
- AUC monitoring sometimes used
- Dose adjusted for GI toxicity, cytopenias

**mTOR Inhibitors:**

*Mechanism:*
\`\`\`
Binds FKBP-12 → mTORC1 inhibition
→ Blocks S6K and 4E-BP1
→ Cell cycle arrest (G1 phase)
\`\`\`

*Clinical Features:*
- CNI-sparing potential
- Antitumor effects (useful in skin cancer, PTLD)
- Wound healing impairment
- Potentiates CNI nephrotoxicity at high doses

**Drug Interactions:**

*CYP3A4 Inducers (decrease CNI/mTORi levels):*
- Rifampin (very strong)
- Phenytoin, phenobarbital
- St. John's wort

*CYP3A4 Inhibitors (increase CNI/mTORi levels):*
- Azole antifungals (fluconazole, voriconazole)
- Diltiazem, verapamil
- Grapefruit juice
- Clarithromycin

*Management:*
- Anticipate interactions
- Monitor levels more frequently
- Empiric dose adjustments

**Complications of Immunosuppression:**

*Infections:*
| Timeline | Common Infections |
|----------|-------------------|
| 0-1 month | Donor-derived, surgical site, hospital-acquired |
| 1-6 months | Opportunistic (CMV, PJP, fungal) |
| >6 months | Community-acquired, late opportunistic |

*Malignancy:*
- Skin cancer (SCC > BCC) - very common
- PTLD (EBV-related lymphoma)
- Other solid tumors (increased risk)

*Other:*
- Diabetes (CNIs, steroids)
- Cardiovascular disease
- Osteoporosis
- Kidney disease (CNI nephrotoxicity)`,
      keyTerms: [
        { term: 'three-signal model', definition: 'Conceptual framework of T cell activation: antigen recognition, costimulation, and proliferation' },
        { term: 'IMPDH', definition: 'Inosine monophosphate dehydrogenase; enzyme blocked by mycophenolate' },
        { term: 'PTLD', definition: 'Post-transplant lymphoproliferative disorder; EBV-associated malignancy' },
        { term: 'CYP3A4', definition: 'Liver enzyme that metabolizes CNIs and mTOR inhibitors' },
      ],
      clinicalNotes: 'CNI trough targets vary by organ type, time post-transplant, and institutional protocol. Drug interactions are extremely common and require vigilance. Any new medication should prompt consideration of immunosuppressant level monitoring. PJP prophylaxis is standard for at least 6-12 months post-transplant.',
    },
    4: {
      level: 4,
      summary: 'Advanced immunosuppression management encompasses individualized regimen design, pharmacogenomics, biomarker-guided therapy, desensitization protocols, and emerging strategies for tolerance induction and targeted immunomodulation.',
      explanation: `**Pharmacogenomics:**

*CYP3A5 Polymorphism:*
| Genotype | Phenotype | Tacrolimus Dosing |
|----------|-----------|-------------------|
| CYP3A5*1/*1 | Expresser | Need higher doses |
| CYP3A5*1/*3 | Intermediate | Intermediate |
| CYP3A5*3/*3 | Non-expresser | Standard doses |

*Clinical Implementation:*
- CPIC guidelines available
- Pre-transplant genotyping in some centers
- Helps predict initial dose
- Still need level monitoring

**Biomarker-Guided Therapy:**

*Donor-Derived Cell-Free DNA (dd-cfDNA):*
\`\`\`
Concept:
- Transplant releases donor DNA into circulation
- Elevated levels indicate graft injury

Application:
- Surveillance for subclinical rejection
- Guide biopsy timing
- May reduce protocol biopsies

Cutoffs:
- Kidney: >1% concerning
- Heart: Different thresholds
- Commercial tests: AlloSure, Prospera
\`\`\`

*Gene Expression Profiling:*
| Test | Application |
|------|-------------|
| AlloMap (heart) | Rule out acute cellular rejection |
| TruGraf (kidney) | Assess immune quiescence |

**Desensitization Protocols:**

*For Sensitized Patients (high PRA):*
\`\`\`
Components:
1. Plasmapheresis/plasma exchange
   - Remove circulating antibodies

2. IVIG
   - Immunomodulation
   - Neutralize antibodies

3. Rituximab
   - B cell depletion
   - Reduce antibody production

4. Bortezomib (sometimes)
   - Plasma cell depletion

5. Eculizumab (for C5 blockade)
   - Prevent complement activation
\`\`\`

*ABO-Incompatible Transplant:*
- Possible with protocol modifications
- Plasmapheresis to reduce anti-ABO titers
- Close monitoring post-transplant

**Belatacept-Based Regimens:**

*Mechanism:*
- CTLA4-Ig fusion protein
- Blocks CD28-B7 costimulation (Signal 2)

*Advantages:*
- No CNI nephrotoxicity
- Better long-term kidney function
- Monthly IV infusion (adherence aid)

*Limitations:*
- Higher acute rejection rates
- PTLD risk in EBV-negative recipients
- Requires IV administration
- Cannot use in EBV-seronegative patients

**Tolerance Induction:**

*Operational Tolerance:*
- Graft acceptance without immunosuppression
- Rare naturally occurring cases
- Active research goal

*Approaches Under Study:*
| Strategy | Mechanism |
|----------|-----------|
| Mixed chimerism | Donor bone marrow + organ |
| Treg infusion | Regulatory T cell therapy |
| Donor-specific tolerance | Targeted approaches |

*Current Status:*
- Clinical trials ongoing
- Not yet standard of care
- Some success in selected cases

**Management of Specific Complications:**

*BK Virus Nephropathy:*
\`\`\`
Strategy:
1. Reduce immunosuppression
   - Lower CNI target
   - Reduce/hold mycophenolate

2. Monitor BK viral load

3. Consider:
   - IVIG (some centers)
   - Cidofovir (limited data)
   - Leflunomide (limited data)
\`\`\`

*CNI Nephrotoxicity:*
| Type | Features | Management |
|------|----------|------------|
| Acute | Vasoconstriction, reversible | Dose reduction |
| Chronic | Fibrosis, irreversible | CNI minimization, mTORi conversion |

*PTLD:*
- First step: Reduce immunosuppression
- Rituximab for B cell PTLD
- Chemotherapy if needed
- May need to sacrifice graft in severe cases`,
      keyTerms: [
        { term: 'dd-cfDNA', definition: 'Donor-derived cell-free DNA; non-invasive biomarker of graft injury' },
        { term: 'belatacept', definition: 'CTLA4-Ig fusion protein blocking T cell costimulation; alternative to CNIs' },
        { term: 'desensitization', definition: 'Protocols to enable transplant in patients with preformed antibodies' },
        { term: 'BK virus', definition: 'Polyomavirus causing nephropathy in kidney transplants; managed by immunosuppression reduction' },
      ],
      clinicalNotes: 'Pharmacogenomic testing for CYP3A5 is increasingly available and can guide initial tacrolimus dosing but does not replace therapeutic drug monitoring. dd-cfDNA is changing surveillance paradigms but interpretation requires clinical context. Belatacept offers renal protection but PTLD risk limits use to EBV-seropositive recipients.',
    },
    5: {
      level: 5,
      summary: 'Expert-level immunosuppression integrates precision medicine approaches, novel biological agents, strategies for immune monitoring and tolerance, and management of highly sensitized and complex patients in the evolving transplant landscape.',
      explanation: `**Precision Immunosuppression:**

*Multi-Dimensional Assessment:*
\`\`\`
Patient Factors:
- Immunologic risk (PRA, DSA, prior transplants)
- Infection history
- Comorbidities
- Adherence capacity
- Pharmacogenomics

Donor Factors:
- Matching (HLA, eplet)
- Donor type (living, deceased)
- Quality metrics (KDPI)

Integrating for Individualized Regimens:
- Higher risk → More intense induction
- Lower risk → Potential for minimization
- Continuous reassessment
\`\`\`

**Advanced Immune Monitoring:**

*Donor-Specific Antibody (DSA) Surveillance:*
| Timing | Purpose |
|--------|---------|
| Pre-transplant | Risk stratification |
| Post-transplant | Detect de novo DSA |
| With graft dysfunction | Diagnose AMR |

*Complement-Fixing DSA:*
- C1q-binding or C3d-binding assays
- Higher risk than non-fixing DSA
- Guides treatment intensity

*Eplet Analysis:*
\`\`\`
Concept:
- Epitopes on HLA molecules
- Eplet mismatch predicts immunogenicity

Application:
- Better than HLA mismatch alone
- Guides organ allocation
- Emerging for DSA risk prediction
\`\`\`

**Novel Biological Agents:**

*In Clinical Use or Trials:*
| Agent | Target | Status |
|-------|--------|--------|
| Imlifidase (IdeS) | Cleaves IgG | Approved (EU) for desensitization |
| Clazakizumab | IL-6 | Phase 3 for AMR |
| Tocilizumab | IL-6R | Off-label for AMR |
| Carfilzomib | Proteasome | Trials for AMR |
| Daratumumab | CD38 | Trials for AMR |
| Obinutuzumab | CD20 | Trials for sensitization |

**Highly Sensitized Patients:**

*Definition:*
- cPRA >80-98%
- Limited compatible donors
- High risk of rejection

*Strategies:*
\`\`\`
Expand Donor Pool:
1. Kidney paired donation
2. ABO-incompatible
3. Accept less-matched organs with desensitization
4. Deceased donor desensitization protocols

Reduce Antibody:
1. Plasmapheresis
2. IVIG
3. Rituximab
4. Bortezomib/carfilzomib
5. Imlifidase (rapid IgG removal)
\`\`\`

**Tolerance Research Frontiers:**

*Mixed Chimerism:*
\`\`\`
Protocol:
- Bone marrow or stem cells from donor
- Given with organ transplant
- Conditioning regimen

Results:
- Some patients achieved IS-free survival
- ITN studies, Stanford protocols
- Not yet standard practice
\`\`\`

*Regulatory T Cell Therapy:*
| Approach | Status |
|----------|--------|
| Donor-specific Tregs | Phase 1/2 trials |
| Polyclonal Tregs | Phase 1 trials |
| CAR-Tregs | Preclinical |

*Mesenchymal Stem Cells:*
- Immunomodulatory properties
- Safety demonstrated
- Efficacy trials ongoing

**Management Challenges:**

*Chronic Active AMR:*
\`\`\`
Features:
- DSA positive
- Microvascular inflammation
- Transplant glomerulopathy (kidney)
- Progressive graft loss

Treatment (limited evidence):
- Optimize adherence
- Intensify CNI
- IVIG + rituximab
- Consider experimental agents
- Prognosis guarded
\`\`\`

*Medication Non-Adherence:*
| Strategy | Evidence |
|----------|----------|
| Identification tools | Adherence questionnaires |
| Electronic monitoring | Pill bottles with sensors |
| Interventions | Reminder apps, simplification |
| Belatacept | Monthly monitored infusion |

*Pregnancy Post-Transplant:*
| Drug | Safety |
|------|--------|
| Tacrolimus | Acceptable, adjust levels |
| Azathioprine | Acceptable |
| Prednisone | Acceptable, low dose |
| MMF | CONTRAINDICATED (teratogenic) |
| mTOR inhibitors | Limited data, avoid if possible |

**Future Directions:**

*Xenotransplantation:*
- Genetically modified pig organs
- First human trials (heart, kidney)
- May address organ shortage
- Unique immunosuppression challenges

*Regenerative Medicine:*
- Decellularized scaffolds
- 3D printed organs
- Stem cell-derived organs
- Would reduce IS need

*Artificial Intelligence:*
- Predict rejection risk
- Optimize drug dosing
- Early warning systems
- Personalized protocols`,
      keyTerms: [
        { term: 'eplet', definition: 'HLA epitope; functional unit of antibody recognition, better predicts immunogenicity than HLA mismatch' },
        { term: 'imlifidase', definition: 'IgG-degrading enzyme enabling rapid desensitization for highly sensitized patients' },
        { term: 'chronic active AMR', definition: 'Antibody-mediated rejection with ongoing microvascular inflammation; poor prognosis' },
        { term: 'xenotransplantation', definition: 'Transplantation of organs between species (e.g., pig to human)' },
      ],
      clinicalNotes: 'The highly sensitized patient requires multidisciplinary management with transplant nephrology/cardiology, HLA laboratory, and potentially paired kidney donation coordinators. Chronic active AMR remains a major cause of late graft loss with limited treatment options. Tolerance induction protocols remain investigational but represent the holy grail of transplantation. Xenotransplantation trials have begun and may transform organ availability.',
    },
  },

  media: [
    {
      id: 'immunosuppression-1',
      type: 'diagram',
      filename: 'immunosuppression-mechanisms.svg',
      title: 'Immunosuppression Mechanisms',
      description: 'Drug targets in T cell activation pathway',
    },
  ],

  citations: [
    {
      id: 'kdigo-transplant',
      type: 'article',
      title: 'KDIGO Clinical Practice Guideline for the Care of Kidney Transplant Recipients',
      source: 'American Journal of Transplantation',
      license: 'Copyrighted',
    },
  ],

  crossReferences: [
    { targetId: 'transplant-rejection-prevention', targetType: 'concept', relationship: 'related', label: 'Rejection Prevention' },
    { targetId: 'transplant-post-transplant-monitoring', targetType: 'concept', relationship: 'see-also', label: 'Post-Transplant Monitoring' },
  ],

  tags: {
    systems: ['immune'],
    topics: ['transplant', 'immunology', 'pharmacology'],
    keywords: ['immunosuppression', 'transplant', 'rejection', 'tacrolimus', 'cyclosporine', 'mycophenolate'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery', 'pharmacology'],
    },
  },

  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
