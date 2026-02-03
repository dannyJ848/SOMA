/**
 * Immunosuppression Therapy - Educational Content
 *
 * Education on immunosuppressive medications used in transplantation
 * including induction, maintenance, and protocol considerations.
 */

import { EducationalContent } from '../types';

export const immunosuppressionTherapy: EducationalContent = {
  id: 'concept-immunosuppression-therapy',
  type: 'concept',
  name: 'Immunosuppression Therapy',
  alternateNames: ['Anti-Rejection Medications', 'Transplant Medications', 'Immunosuppressive Drugs'],

  levels: {
    1: {
      level: 1,
      summary: 'After a transplant, special medicines help your body accept the new organ instead of trying to fight it.',
      explanation: `When you get a new organ, your body might think it is something bad that does not belong. This is because your immune system (the part of your body that fights germs) cannot tell the difference between bad germs and the new helpful organ.

**Why Are These Medicines Important?**
- They teach your body to be friends with the new organ
- They stop your body from attacking the transplant
- They help the new organ work well for a long time

**Taking Your Medicines**

**Every Day**
- You must take these medicines every day, at the same times
- Missing doses can hurt your new organ
- Set reminders to help you remember

**For Your Whole Life**
- Unlike other medicines, you take these forever
- Never stop taking them without talking to your doctor

**Side Effects**
Because these medicines calm down your immune system:
- You might get sick more easily
- You need to be extra careful about germs
- Wash your hands often
- Tell your doctor if you feel sick

**Doctor Visits**
- Regular blood tests check if the medicine is working right
- Your doctor may adjust how much medicine you take
- Always tell your doctor about any problems`,
      keyTerms: [
        { term: 'immune system', definition: 'The part of your body that fights germs and sickness' },
        { term: 'immunosuppression', definition: 'Calming down the immune system so it does not attack the new organ' },
        { term: 'rejection', definition: 'When the body tries to fight the new organ like it fights germs' },
      ],
      analogies: [
        'Your immune system is like a guard dog that protects your house. The medicines teach the guard dog that the new organ is a friend, not an intruder.',
      ],
      examples: [
        'Sarah takes her transplant medicines every morning and night. She uses a pill box to make sure she never misses a dose.',
      ],
    },
    2: {
      level: 2,
      summary: 'Immunosuppressive medications prevent the body from rejecting transplanted organs by reducing immune system activity, requiring lifelong use with careful monitoring for side effects.',
      explanation: `**What Is Immunosuppression?**

Immunosuppression means using medicines to reduce the activity of the immune system. This prevents the body from recognizing and attacking the transplanted organ.

**Types of Immunosuppressive Medicines**

**Induction Medicines**
- Given at the time of transplant
- Provide strong initial suppression
- Help prevent early rejection

**Maintenance Medicines**
Taken daily for life, typically including:
1. **Tacrolimus or Cyclosporine** - Main immunosuppressive agents
2. **Mycophenolate** - Prevents immune cell multiplication
3. **Prednisone** - Steroid that reduces inflammation

**Common Side Effects**

| Medicine | Common Side Effects |
|----------|-------------------|
| Tacrolimus | Tremor, high blood sugar, kidney effects |
| Mycophenolate | Upset stomach, low blood counts |
| Prednisone | Weight gain, mood changes, bone weakening |

**Important Precautions**
- Higher infection risk (avoid sick people, wash hands)
- Higher skin cancer risk (use sunscreen)
- Some foods and medicines can interact
- Regular blood tests to check medicine levels

**What Happens If You Miss Doses?**
- Rejection can start within days
- Take the dose as soon as remembered
- Never take double doses
- Tell your transplant team if you miss doses

**Blood Level Monitoring**
- Regular blood tests measure medicine levels
- Levels must be in the right range
- Too low = rejection risk
- Too high = side effect risk`,
      keyTerms: [
        { term: 'induction therapy', definition: 'Strong immunosuppression given at the time of transplant' },
        { term: 'maintenance therapy', definition: 'Daily medications taken long-term to prevent rejection' },
        { term: 'tacrolimus', definition: 'A common anti-rejection medicine that prevents T-cell activation' },
        { term: 'drug levels', definition: 'Amount of medicine in the blood, checked regularly' },
      ],
    },
    3: {
      level: 3,
      summary: 'Immunosuppressive regimens combine agents with different mechanisms to prevent rejection while minimizing toxicity, requiring therapeutic drug monitoring and adjustment based on clinical status.',
      explanation: `## Immunosuppression Mechanisms

**T-Cell Activation and Immunosuppressant Targets**

Signal 1: T-cell receptor recognition of antigen/MHC
- Calcineurin inhibitors block downstream signaling

Signal 2: Costimulation (CD28-B7 interaction)
- Belatacept blocks costimulation

Signal 3: Cytokine-driven proliferation
- mTOR inhibitors block IL-2 signaling
- Antimetabolites prevent DNA synthesis

## Drug Classes

**Calcineurin Inhibitors (CNI)**

Tacrolimus:
- Binds FKBP12, inhibits calcineurin
- Prevents IL-2 production
- Target trough: 8-12 ng/mL (early), 5-8 ng/mL (late)

Cyclosporine:
- Binds cyclophilin, inhibits calcineurin
- Less potent than tacrolimus
- Target trough varies by formulation

**Antimetabolites**

Mycophenolate (MMF, MPA):
- Inhibits IMPDH (inosine monophosphate dehydrogenase)
- Blocks purine synthesis in lymphocytes
- GI side effects common

Azathioprine:
- Older agent, less selective
- 6-MP metabolite blocks purine synthesis
- TPMT polymorphisms affect metabolism

**mTOR Inhibitors**

Sirolimus/Everolimus:
- Bind FKBP12, inhibit mTOR
- Block IL-2-driven proliferation
- Non-nephrotoxic (unlike CNI)
- Wound healing impairment, hyperlipidemia

**Corticosteroids**
- Multiple anti-inflammatory mechanisms
- Used in induction and maintenance
- Metabolic side effects with long-term use
- Steroid minimization/withdrawal protocols

**Induction Agents**

Depleting Antibodies:
- Thymoglobulin (rabbit ATG): T-cell depletion
- Alemtuzumab: CD52 (pan-lymphocyte) depletion

Non-Depleting:
- Basiliximab: IL-2 receptor antagonist
- Lower risk profile, moderate intensity

## Therapeutic Drug Monitoring

**CNI Monitoring**
- Trough levels standard practice
- Target ranges vary by time post-transplant
- Consider C0/C2 monitoring for cyclosporine

**Factors Affecting Levels**
- CYP3A4/5 interactions (azole antifungals, macrolides)
- Food effects (grapefruit)
- Genetic polymorphisms (CYP3A5)
- Diarrhea (increased tacrolimus absorption)

## Common Protocols

**Standard Triple Therapy**
- CNI (tacrolimus) + Antimetabolite (MMF) + Steroid

**Steroid Avoidance/Withdrawal**
- Low immunologic risk recipients
- Reduce metabolic side effects
- Requires careful patient selection

**CNI Minimization**
- Add mTOR inhibitor, reduce CNI
- Preserve kidney function
- Not in early post-transplant period`,
      keyTerms: [
        { term: 'calcineurin', definition: 'Enzyme in T-cells required for IL-2 production; target of tacrolimus and cyclosporine' },
        { term: 'IMPDH', definition: 'Inosine monophosphate dehydrogenase - enzyme inhibited by mycophenolate' },
        { term: 'mTOR', definition: 'Mammalian target of rapamycin - kinase inhibited by sirolimus/everolimus' },
        { term: 'therapeutic drug monitoring', definition: 'Regular measurement of drug levels to optimize dosing' },
      ],
      clinicalNotes: 'Drug interactions are common with CNIs. All new medications should be reviewed for potential interactions. Azole antifungals and macrolide antibiotics significantly increase CNI levels.',
    },
    4: {
      level: 4,
      summary: 'Individualized immunosuppression balances rejection prevention against infection, malignancy, and drug toxicity, increasingly guided by immune monitoring biomarkers and pharmacogenomics.',
      explanation: `## Pharmacokinetic Considerations

**Tacrolimus Pharmacogenomics**

CYP3A5 Polymorphisms:
- CYP3A5*1/*1 (expressers): Higher doses needed
- CYP3A5*3/*3 (non-expressers): Standard doses
- More common in African ancestry
- Dosing algorithms incorporating genetics

Population Pharmacokinetics:
- Bayesian estimators for AUC prediction
- Limited sampling strategies
- More precise than trough-only monitoring

**Intra-Patient Variability**
- High variability associated with worse outcomes
- Measured by coefficient of variation of trough levels
- May indicate non-adherence or absorption issues

## Rejection Risk Stratification

**High Immunologic Risk Factors**
- HLA-sensitized (high cPRA)
- Repeat transplant
- DSA present
- African ancestry
- Young age
- Prior rejection episodes

**Immunosuppression by Risk**

| Risk Level | Induction | Maintenance |
|------------|-----------|-------------|
| Low | Basiliximab | Standard triple |
| Moderate | Thymoglobulin | Standard triple |
| High | Thymoglobulin | Intensified, consider belatacept |

## Emerging Agents and Approaches

**Belatacept**
- Selective costimulation blocker (CTLA4-Ig)
- Monthly IV infusion
- BENEFIT trial: Superior GFR at 7 years
- Higher acute rejection rate (primarily Banff 1A)
- PTLD risk in EBV-seronegative recipients

**Other Novel Agents**
- Voclosporin: Modified CNI with more predictable PK
- Imlifidase (IdeS): IgG-degrading enzyme for desensitization

## Immunosuppression-Related Complications

**Infections**
- Opportunistic: CMV, BK virus, PJP
- Prophylaxis protocols (valganciclovir, TMP-SMX)
- Timing: Different risks at different time periods

**Malignancy**
- Skin cancer: 10-20x increased risk
- PTLD: EBV-driven lymphoproliferation
- Solid tumors: Increased incidence

**Metabolic Effects**
- New-onset diabetes (NODAT)
- Hypertension
- Dyslipidemia
- Osteoporosis

**Nephrotoxicity**
- CNI nephrotoxicity limits long-term graft survival
- Histology: Striped interstitial fibrosis
- CNI minimization strategies

## Adherence Considerations

**Non-Adherence Consequences**
- Leading cause of late graft loss
- De novo DSA development
- Chronic rejection

**Interventions**
- Pill boxes and reminders
- Simplified regimens
- Electronic monitoring
- Motivational interviewing
- Addressing barriers (cost, side effects)`,
      keyTerms: [
        { term: 'intra-patient variability', definition: 'Fluctuation in drug levels over time within an individual patient' },
        { term: 'belatacept', definition: 'Costimulation blocker (CTLA4-Ig) that avoids CNI nephrotoxicity' },
        { term: 'NODAT', definition: 'New-onset diabetes after transplant - metabolic complication of immunosuppression' },
        { term: 'PTLD', definition: 'Post-transplant lymphoproliferative disorder - EBV-associated malignancy' },
      ],
      clinicalNotes: 'Non-adherence should be suspected in patients with unexplained rejection or highly variable drug levels. Multi-disciplinary approaches including pharmacy, social work, and psychology are often needed.',
    },
    5: {
      level: 5,
      summary: 'Precision immunosuppression integrates pharmacogenomics, immune monitoring biomarkers, and risk stratification algorithms to optimize the therapeutic index while advancing toward tolerance induction.',
      explanation: `## Precision Immunosuppression

**Biomarker-Guided Therapy**

Torque Teno Virus (TTV):
- Ubiquitous virus, replication correlates with immunosuppression
- Low TTV load = high immunosuppression
- High TTV load = low immunosuppression/rejection risk
- Prospective trials ongoing (TRANQUIL study)

Donor-Derived Cell-Free DNA:
- Rising dd-cfDNA suggests graft injury
- May guide intensification decisions
- Integrate with clinical context

Gene Expression Profiling:
- AlloMap: Heart rejection surveillance
- kSORT: Kidney rejection prediction
- May reduce surveillance biopsies

**Pharmacogenomic Implementation**

Clinical Pharmacogenomics Implementation Consortium (CPIC):
- CYP3A5 dosing guidelines for tacrolimus
- Starting dose adjustments based on genotype
- Not universally implemented

Beyond CYP3A5:
- ABCB1 polymorphisms (P-glycoprotein)
- UGT polymorphisms (MPA metabolism)
- Polygenic risk scores in development

## Immunosuppression Minimization Trials

**Belatacept Studies**

BENEFIT/BENEFIT-EXT:
- Superior renal function at 7 years
- Higher rejection rate (mostly mild)
- No increase in graft loss
- PTLD risk in EBV-seronegative

Nu.Margin (Belatacept Conversion):
- Conversion from CNI in stable patients
- Renal function improvement
- Protocol for CNI avoidance

**Regulatory T-Cell Therapy**

ONE Study:
- Safety established
- Multiple cell products tested
- Potential for IS reduction

ThRIL (Treg Therapy in Liver Transplant):
- Combined Treg + standard IS
- Potential for weaning

**Tolerance Induction Protocols**

Combined Kidney-Bone Marrow:
- Northwestern, Stanford protocols
- Transient chimerism approach
- Some patients off immunosuppression

Operational Tolerance Studies:
- Biomarkers of tolerance (gene signatures)
- Identifying candidates for IS withdrawal
- LITMUS, ITN studies

## Systems-Level Considerations

**Cost and Access**
- Generic tacrolimus availability
- Belatacept cost considerations
- Insurance coverage variability

**Quality Metrics**
- Rejection rates
- Graft survival
- Medication adherence
- Infection rates

**Adherence Technology**
- Smart pill bottles
- Wearable medication reminders
- Telehealth monitoring
- AI-based risk prediction

## Future Directions

**Cell-Based Therapies**
- CAR-Treg development
- Donor-specific Treg expansion
- Tolerogenic dendritic cells

**Targeted Immunosuppression**
- Tissue-specific immunomodulation
- Nanoparticle drug delivery
- Local tolerance induction

**Artificial Intelligence Applications**
- Optimal dosing algorithms
- Rejection risk prediction
- Personalized protocol selection`,
      keyTerms: [
        { term: 'Torque teno virus', definition: 'Commensal virus whose load inversely correlates with immune function' },
        { term: 'CPIC', definition: 'Clinical Pharmacogenomics Implementation Consortium - guidelines for genetic-based drug dosing' },
        { term: 'operational tolerance', definition: 'Stable graft function without immunosuppression, not actively induced' },
        { term: 'CAR-Treg', definition: 'Chimeric antigen receptor regulatory T cells - engineered Tregs for targeted tolerance' },
      ],
      clinicalNotes: `Research priorities:
1. Validation of TTV and dd-cfDNA for immunosuppression guidance
2. Tolerance biomarker identification for withdrawal trials
3. Cell therapy manufacturing and regulatory approval
4. AI integration for personalized immunosuppression
5. Health equity in access to advanced therapies`,
    },
  },

  media: [
    {
      id: 'immunosuppression-mechanisms',
      type: 'diagram',
      filename: 'immunosuppression-mechanisms.svg',
      title: 'Immunosuppression Drug Mechanisms',
      description: 'Diagram showing T-cell signaling and where different immunosuppressive drugs act',
    },
  ],

  citations: [
    {
      id: 'kdigo-transplant',
      type: 'article',
      title: 'KDIGO Clinical Practice Guideline for the Care of Kidney Transplant Recipients',
      source: 'American Journal of Transplantation',
      url: 'https://kdigo.org',
    },
    {
      id: 'ast-handbook',
      type: 'textbook',
      title: 'AST Handbook of Transplant Infections',
      source: 'American Society of Transplantation',
    },
  ],

  crossReferences: [
    { targetId: 'concept-organ-transplant-basics', targetType: 'concept', relationship: 'parent', label: 'Transplant Basics' },
    { targetId: 'condition-transplant-rejection', targetType: 'condition', relationship: 'related', label: 'Rejection' },
    { targetId: 'process-post-transplant-care', targetType: 'process', relationship: 'related', label: 'Post-Transplant Care' },
  ],

  tags: {
    systems: ['transplant-medicine'],
    topics: ['immunosuppression', 'tacrolimus', 'anti-rejection', 'transplant medications'],
    clinicalRelevance: 'critical',
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default immunosuppressionTherapy;
