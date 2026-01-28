/**
 * Corticosteroids in Transplantation
 *
 * Comprehensive coverage of corticosteroid use in organ transplantation,
 * including mechanisms, dosing strategies, side effects, and steroid-sparing approaches.
 */

import { EducationalContent } from '../../types';

export const corticosteroidsTransplant: EducationalContent = {
  id: 'transplant-corticosteroids',
  type: 'concept',
  name: 'Corticosteroids in Transplantation',
  alternateNames: ['Steroids', 'Prednisone', 'Methylprednisolone', 'Prednisolone', 'Glucocorticoids', 'Cortisone', 'Hydrocortisone'],

  levels: {
    1: {
      level: 1,
      summary: 'Corticosteroids are powerful medications that reduce inflammation and prevent transplant rejection, though they have significant side effects with long-term use.',
      explanation: `**What Are Corticosteroids?**

Corticosteroids (often called "steroids") are medications that reduce inflammation and suppress the immune system. They have been used in transplantation for many years.

**Common Steroids Used:**

1. **Prednisone** (taken by mouth)
   - Most common for long-term use
   - Taken once daily, usually in the morning
   - Eventually may be stopped in some patients

2. **Methylprednisolone** (IV or oral)
   - Given during and right after transplant
   - Stronger than prednisone
   - Used for rejection treatment

**How Steroids Help:**

- Reduce inflammation throughout the body
- Stop immune cells from attacking the new organ
- Treat rejection episodes when they occur
- Work quickly compared to other medications

**Side Effects to Know:**

Short-term (usually temporary):
- Increased appetite and weight gain
- Mood changes or trouble sleeping
- High blood sugar
- Stomach irritation

Long-term (with prolonged use):
- Weight gain (especially face and belly)
- Thinning bones (osteoporosis)
- High blood pressure
- Diabetes
- Cataracts
- Skin changes

**Modern Approach:**

- High doses right after transplant
- Gradual dose reduction over months
- Some patients can stop steroids completely
- Goal: prevent rejection while minimizing side effects`,
      keyTerms: [
        { term: 'prednisone', definition: 'The most commonly used steroid medication for transplant patients' },
        { term: 'methylprednisolone', definition: 'A stronger steroid given during transplant surgery and for rejection treatment' },
        { term: 'steroid taper', definition: 'The gradual reduction of steroid dose over time' },
        { term: 'steroid-sparing', definition: 'Using other medications to reduce or avoid long-term steroid use' },
      ],
      analogies: [
        'Steroids are like a fire extinguisher for inflammation - they put out the fire but leave behind some mess.',
        'Taking steroids is like turning down the volume on your immune system radio.',
      ],
      examples: [
        'A transplant patient takes 30 mg of prednisone daily right after surgery, then gradually reduces to 5 mg over 6 months.',
        'A patient experiences rejection and receives high-dose methylprednisolone to treat it.',
      ],
    },
    2: {
      level: 2,
      summary: 'Corticosteroids exert immunosuppressive effects through genomic and non-genomic pathways, inhibiting transcription of inflammatory cytokines and preventing T-cell activation and proliferation.',
      explanation: `**Mechanism of Action:**

*Genomic Effects (Primary):*

Corticosteroids diffuse into cells and bind glucocorticoid receptors (GR):

1. **Transrepression (anti-inflammatory):**
   - GR complex inhibits NF-kappaB and AP-1
   - Blocks transcription of pro-inflammatory genes
   - Reduces: IL-1, IL-2, IL-6, TNF-alpha, IFN-gamma
   - Decreases COX-2, iNOS, adhesion molecules

2. **Transactivation (side effects):**
   - GR complex binds GREs (glucocorticoid response elements)
   - Increases transcription of various genes
   - Contributes to metabolic side effects

*Non-Genomic Effects:*
- Rapid effects (seconds to minutes)
- Membrane-associated GR interactions
- Second messenger system modulation

**Immunologic Effects:**

*T-cell inhibition:*
- Reduced IL-2 production and signaling
- Blocked T-cell proliferation
- Decreased cytokine gene expression
- Inhibition of T-cell migration

*Innate immune effects:*
- Reduced neutrophil adhesion and migration
- Decreased macrophage function
- Impaired dendritic cell maturation
- Modified B-cell function

**Pharmacokinetics:**

*Prednisone/Prednisolone:*
- Prednisone: prodrug, converted to prednisolone (active)
- Oral bioavailability: ~80%
- Peak concentration: 1-2 hours
- Half-life: 2-4 hours (prednisone), 2-5 hours (prednisolone)
- Duration of action: 12-36 hours
- Hepatic metabolism, renal excretion

*Methylprednisolone:*
- More potent than prednisone (4:5 ratio)
- IV and oral formulations
- Similar pharmacokinetics to prednisolone
- Preferred for IV pulse therapy

**Standard Dosing Regimens:**

*Induction (perioperative):*
- Methylprednisolone 250-500 mg IV intraoperatively
- Rapid taper over 3-7 days
- Convert to oral prednisone

*Maintenance:*
- Initial: 20-30 mg daily
- Taper by 5 mg every 1-2 weeks
- Target: 5-10 mg daily at 3-6 months
- Some protocols: complete withdrawal by 6-12 months

*Rejection Treatment:*
- Methylprednisolone 500-1000 mg IV daily x 3 days
- Return to baseline oral dose
- Often called "pulse steroids"`,
      keyTerms: [
        { term: 'glucocorticoid receptor', definition: 'Intracellular receptor that binds corticosteroids to mediate effects' },
        { term: 'NF-kappaB', definition: 'Pro-inflammatory transcription factor inhibited by steroids' },
        { term: 'AP-1', definition: 'Activator protein-1, transcription factor blocked by glucocorticoids' },
        { term: 'transrepression', definition: 'Inhibition of gene transcription by steroid-receptor complex' },
        { term: 'pulse steroids', definition: 'High-dose IV corticosteroids given for severe rejection' },
        { term: 'GRE', definition: 'Glucocorticoid response element, DNA sequence for steroid-induced gene expression' },
      ],
      analogies: [
        'Steroids work like a dimmer switch for the immune system, turning down the brightness of the inflammatory response.',
        'NF-kappaB is like a master switch for inflammation; steroids flip that switch to OFF.',
      ],
      examples: [
        'Kidney transplant recipient receives methylprednisolone 500 mg intraoperatively, then prednisone tapered from 30 mg to 5 mg over 3 months.',
        'Patient with biopsy-proven acute cellular rejection receives pulse methylprednisolone 500 mg IV daily for 3 days with resolution of rejection.',
      ],
    },
    3: {
      level: 3,
      summary: 'Corticosteroids inhibit multiple inflammatory pathways through glucocorticoid receptor-mediated transrepression of NF-kappaB and AP-1. While highly effective for acute rejection, chronic use causes significant metabolic, cardiovascular, and skeletal complications driving steroid-minimization strategies.',
      explanation: `**Detailed Molecular Mechanism:**

*Glucocorticoid Receptor Structure:*
- Cytoplasmic receptor in inactive state bound to chaperone proteins (hsp90)
- Ligand binding causes conformational change
- Nuclear translocation of GR-ligand complex
- Forms homodimers for DNA binding

*Transrepression Mechanisms:*

1. **Direct protein-protein interaction:**
   - Activated GR binds p65 subunit of NF-kappaB
   - Blocks NF-kappaB DNA binding
   - Prevents transcription of inflammatory genes

2. **Competition for coactivators:**
   - GR and NF-kappaB compete for CBP/p300
   - Limited coactivator availability
   - Reduced NF-kappaB transcriptional activity

3. **Induction of IkappaB-alpha:**
   - GR upregulates NF-kappaB inhibitor
   - Sequesters NF-kappaB in cytoplasm
   - Prevents nuclear translocation

*AP-1 Inhibition:*
- GR binds c-Fos and c-Jun components
- Blocks AP-1 mediated transcription
- Reduces MMP expression, cytokine production

*Anti-inflammatory Gene Induction:*
- Upregulation of annexin-1 (lipocortin-1)
- Inhibits phospholipase A2
- Reduces prostaglandin and leukotriene synthesis
- Induces IL-10 (anti-inflammatory cytokine)

**Clinical Pharmacology:**

*Bioavailability and Metabolism:*
- Prednisone rapidly converted to prednisolone by 11-beta-HSD
- Prednisolone undergoes hepatic metabolism
- Active metabolites contribute to effects
- Renal impairment: minimal effect (prednisolone)

*Drug Interactions:*

| Drug Class | Effect | Mechanism |
|------------|--------|-----------|
| CYP3A4 inducers (phenytoin, rifampin) | Decreased steroid effect | Increased metabolism |
| CYP3A4 inhibitors (ketoconazole) | Increased steroid effect | Decreased metabolism |
| NSAIDs | Increased GI toxicity | Additive ulcer risk |
| Oral hypoglycemics | Reduced efficacy | Steroid-induced hyperglycemia |

**Adverse Effects - Mechanism-Based:**

*Metabolic:*
- Hyperglycemia: increased gluconeogenesis, insulin resistance
- Weight gain: increased appetite, central fat redistribution
- Dyslipidemia: increased VLDL, decreased HDL
- Hypertension: mineralocorticoid effects (prednisone has minimal activity)

*Skeletal:*
- Osteoporosis: decreased osteoblast function, increased osteoclast activity
- Osteonecrosis: impaired blood supply to bone
- Myopathy: protein catabolism in muscle

*Dermatologic:*
- Thin skin: decreased collagen synthesis
- Striae: dermal connective tissue breakdown
- Acne: androgenic effects
- Impaired wound healing: decreased fibroblast function

*Ophthalmologic:*
- Cataracts: posterior subcapsular type
- Glaucoma: increased intraocular pressure

*Neuropsychiatric:*
- Mood changes: altered neurotransmitter function
- Insomnia: altered sleep architecture
- Psychosis: rare, dose-related

*Cardiovascular:*
- Accelerated atherosclerosis
- Fluid retention (with higher mineralocorticoid activity)`,
      keyTerms: [
        { term: 'hsp90', definition: 'Heat shock protein 90, chaperone for unliganded glucocorticoid receptor' },
        { term: 'CBP/p300', definition: 'CREB-binding protein, transcriptional coactivator competed for by GR and NF-kappaB' },
        { term: 'IkappaB-alpha', definition: 'Inhibitor of NF-kappaB, upregulated by steroids' },
        { term: 'annexin-1', definition: 'Anti-inflammatory protein induced by glucocorticoids' },
        { term: '11-beta-HSD', definition: '11-beta-hydroxysteroid dehydrogenase, converts prednisone to prednisolone' },
        { term: 'lipocortin-1', definition: 'Alternative name for annexin-1, inhibits phospholipase A2' },
        { term: 'posterior subcapsular cataract', definition: 'Type of cataract associated with steroid use' },
      ],
    },
    4: {
      level: 4,
      summary: 'Steroid-minimization and steroid-avoidance protocols have become standard in many transplant programs. These strategies require potent alternative immunosuppression and careful patient selection to balance rejection risk against long-term metabolic and cardiovascular complications.',
      explanation: `**Steroid Minimization Strategies:**

*Rationale for Minimization:*
- Cardiovascular disease leading cause of death post-transplant
- Steroids contribute to diabetes, hypertension, dyslipidemia
- Osteoporosis and fractures common
- Cosmetic effects affect quality of life
- Growth impairment in pediatric patients

*Approach Categories:*

1. **Steroid Avoidance (no steroids post-transplant):**
   - Requires potent induction (thymoglobulin, basiliximab)
   - Standard maintenance immunosuppression
   - Higher early rejection rates in some studies
   - Best outcomes with low-risk recipients

2. **Early Steroid Withdrawal (within 7 days):**
   - Brief perioperative steroids only
   - Induction therapy essential
   - Intermediate rejection risk
   - Metabolic benefits apparent

3. **Late Steroid Withdrawal (after 3-6 months):**
   - Standard early post-transplant care
   - Gradual withdrawal if stable
   - Risk of late acute rejection
   - Requires adequate baseline immunosuppression

**Evidence Base:**

*Steroid Avoidance Trials:*

| Study | Population | Rejection Rates | Outcomes |
|-------|------------|-----------------|----------|
| CTOT-09 | Kidney, basiliximab induction | Higher (26% vs 15%) | Similar graft survival |
| FREEDOM | Kidney, thymoglobulin induction | Similar | Better glucose, lipids |
| STN study | Kidney | Variable | Reduced diabetes |

*Meta-analyses:*
- Steroid avoidance/withdrawal: increased acute rejection (RR 1.3-1.5)
- No difference in graft survival at 1-5 years
- Reduced diabetes, improved cardiovascular risk factors
- Variable impact on patient survival

**Induction Agent Selection:**

*Thymoglobulin (rabbit ATG):*
- Most effective for steroid avoidance
- 3-7 day course post-transplant
- Allows steroid-free maintenance
- Higher infection risk (CMV)

*Basiliximab (IL-2 receptor antagonist):*
- Two doses (day 0 and 4)
- Less potent than thymoglobulin
- Lower infection risk
- May need adjunctive steroids early

*Alemtuzumab (anti-CD52):*
- Off-label use in some centers
- Profound lymphocyte depletion
- Allows minimal maintenance immunosuppression
- Increased risk of autoimmune complications

**Patient Selection for Steroid Minimization:**

*Good Candidates:*
- First transplant (not retransplant)
- Low immunologic risk (low PRA, no DSA)
- Standard criteria donor (not extended criteria)
- Adequate kidney function at baseline
- Compliant patient

*Poor Candidates:*
- High PRA or donor-specific antibodies
- Prior transplant
- African American race (higher rejection risk)
- Young pediatric patients
- Severe recipient-donor HLA mismatch

**Managing Steroid Withdrawal:**

*Monitoring:*
- More frequent follow-up during withdrawal
- Protocol biopsies at some centers
- DSA monitoring in high-risk patients
- Vigilance for rejection symptoms

*Rescue Strategies:*
- If rejection occurs: treat and continue steroids
- Consider re-induction with thymoglobulin
- Steroid reintroduction at low dose
- Acceptable if metabolic benefits still achieved

**Comparative Outcomes:**

*Cardiovascular:*
- Reduced diabetes incidence (10-20% absolute reduction)
- Improved lipid profiles
- Lower blood pressure
- Possible reduction in cardiovascular events

*Bone Health:*
- Reduced bone loss
- Lower fracture rates
- Less need for bisphosphonates

*Growth (Pediatrics):*
- Improved linear growth
- Better final adult height
- Critical for adolescent recipients`,
      keyTerms: [
        { term: 'steroid avoidance', definition: 'Protocol using no corticosteroids after transplant' },
        { term: 'steroid withdrawal', definition: 'Planned discontinuation of corticosteroids after transplant' },
        { term: 'induction therapy', definition: 'Intense immunosuppression given at time of transplant' },
        { term: 'thymoglobulin', definition: 'Rabbit anti-thymocyte globulin, polyclonal antibody for induction' },
        { term: 'basiliximab', definition: 'IL-2 receptor antagonist used for induction' },
        { term: 'DSA', definition: 'Donor-specific antibody, predicts rejection risk' },
        { term: 'PRA', definition: 'Panel reactive antibody, measure of sensitization' },
        { term: 'alemtuzumab', definition: 'Anti-CD52 monoclonal antibody used for induction' },
      ],
      clinicalNotes: `Steroid-minimization protocols have gained widespread acceptance, particularly with potent induction therapy. Thymoglobulin induction enables the safest steroid avoidance, while basiliximab may require brief early steroid use. Patient selection is critical - low-risk, first-transplant recipients have the best outcomes. Close monitoring during withdrawal is essential, with readiness to treat rejection and potentially reintroduce steroids if needed. The metabolic benefits of steroid avoidance are significant, particularly for cardiovascular risk reduction, making this an important strategy for long-term patient health.`,
    },
    5: {
      level: 5,
      summary: 'Advanced steroid strategies incorporate genomic screening, biomarker-guided therapy, and personalized risk assessment. Research focuses on selective glucocorticoid receptor modulators (SEGRMs) that dissociate anti-inflammatory effects from metabolic side effects. Tolerance induction protocols aim to eliminate all immunosuppression, including steroids.',
      explanation: `**Advanced Steroid Pharmacology:**

*Glucocorticoid Receptor Polymorphisms:*

ER22/23EK variant:
- Associated with steroid resistance
- May affect glucocorticoid sensitivity
- Potential for genotype-guided dosing

BclI polymorphism:
- Increased glucocorticoid sensitivity
- Greater metabolic side effects
- Variable by population

N363S and intron mutations:
- Modulate receptor function
- May influence outcomes
- Research ongoing

*Selective Glucocorticoid Receptor Modulators (SEGRMs):*

Concept:
- Dissociate transrepression (anti-inflammatory) from transactivation (side effects)
- Goal: maintain efficacy with reduced toxicity
- Target: differential coactivator recruitment

Compounds in development:
- Mapracorat (ophthalmic)
- Fosdagrocorat, AZD5423
- Not yet approved for transplantation

*Potential advantages:*
- Reduced diabetes risk
- Less bone loss
- Maintained immunosuppression
- Clinical trials needed

**Steroid-Resistant Rejection:**

*Definition:*
- Failure to respond to pulse corticosteroids
- Persistent or worsening rejection on biopsy
- Occurs in 10-20% of acute rejections

*Management:*
1. **Re-biopsy:** confirm diagnosis, assess severity
2. **Thymoglobulin:** first-line for steroid-resistant rejection
3. **Alemtuzumab:** alternative lymphocyte depletion
4. **Plasmapheresis + IVIG:** for antibody-mediated rejection
5. **Rituximab:** anti-CD20 for B-cell mediated processes

*Outcomes:*
- Often reversible with appropriate therapy
- Higher risk of chronic allograft injury
- May require intensified maintenance

**Tolerance Induction Research:**

*Operational Tolerance:*
- Stable graft function without immunosuppression
- Rare (<1% of transplant recipients)
- Spontaneous or protocol-driven
- Associated with specific gene expression signatures

*Tolerance Protocols:*

1. **Mixed Chimerism Approaches:**
   - Combined bone marrow and solid organ transplant
   - Induces donor-specific tolerance
   - Investigational for kidney, liver

2. **Regulatory T-cell Therapy:**
   - Ex vivo expanded Tregs infused
   - Promotes immune regulation
   - Phase I/II trials ongoing

3. **Costimulatory Blockade:**
   - Belatacept-based regimens
   - Facilitates steroid-free maintenance
   - May promote tolerance pathways

**Biomarker-Guided Management:**

*Rejection Prediction:*
- Gene expression profiling (AlloMap, similar)
- Donor-derived cell-free DNA
- Cytokine/chemokine panels
- Not yet validated for steroid decisions

*Steroid Sensitivity Prediction:*
- GR polymorphism testing
- In vitro lymphocyte steroid response
- Limited clinical utility currently

**Organ-Specific Considerations:**

*Kidney Transplant:*
- Most steroid-minimization experience
- FDA-approved steroid avoidance protocols with basiliximab
- Long-term metabolic benefits established
- Slightly higher rejection rates acceptable

*Liver Transplant:*
- Steroid avoidance increasingly common
- Lower rejection rates than kidney
- Hepatitis C: steroids worsen viral recurrence
- Autoimmune liver disease: may need steroids

*Heart Transplant:*
- Steroid avoidance less common
- Higher rejection risk
- Some centers use early withdrawal
- Median sternotomy wound healing concerns

*Lung Transplant:*
- Bronchiolitis obliterans risk
- Steroids often maintained longer
- Limited avoidance data
- Airway healing considerations

*Pancreas Transplant:*
- Steroid-free protocols preferred
- Improved glycemic control
- Similar rejection rates with adequate induction
- Enteric vs bladder drainage considerations

**Future Directions:**

*Precision Medicine:*
- Genomic risk stratification
- Personalized steroid dosing
- Biomarker-guided withdrawal

*Novel Formulations:*
- Liposomal delivery for targeted effects
- Organ-specific targeting
- Reduced systemic exposure

*Combination Strategies:*
- Optimal induction + maintenance combinations
- Steroid avoidance with costimulation blockade
- Tolerance-promoting protocols`,
      keyTerms: [
        { term: 'SEGRM', definition: 'Selective glucocorticoid receptor modulator, dissociates therapeutic from side effects' },
        { term: 'transrepression', definition: 'Inhibition of pro-inflammatory gene transcription' },
        { term: 'transactivation', definition: 'Activation of genes causing metabolic side effects' },
        { term: 'steroid-resistant rejection', definition: 'Rejection failing to respond to corticosteroid therapy' },
        { term: 'operational tolerance', definition: 'Stable graft function without ongoing immunosuppression' },
        { term: 'mixed chimerism', definition: 'Coexistence of donor and recipient hematopoietic cells' },
        { term: 'donor-derived cell-free DNA', definition: 'Circulating DNA from graft, marker of injury' },
        { term: 'bronchiolitis obliterans', definition: 'Chronic lung allograft dysfunction, indication for continued steroids' },
      ],
      clinicalNotes: `The field of transplant steroid therapy continues to evolve toward minimization and personalization. Steroid avoidance is now standard for many low-risk recipients, particularly in kidney transplantation. The development of SEGRMs represents a promising avenue for maintaining anti-rejection efficacy while eliminating metabolic toxicity. Research into operational tolerance and biomarker-guided therapy may eventually allow individualized decisions about immunosuppression intensity. Current best practice involves careful patient selection for steroid minimization, potent induction when steroids are avoided, and vigilant monitoring for rejection. The balance between rejection prevention and long-term metabolic health remains the central challenge in steroid management.`,
    },
  },

  media: [
    {
      id: 'steroid-mechanism-diagram',
      type: 'diagram',
      filename: 'steroid-mechanism.png',
      title: 'Glucocorticoid Mechanism of Action',
      description: 'Molecular pathway showing GR-mediated transrepression and transactivation',
    },
    {
      id: 'steroid-side-effects',
      type: 'diagram',
      filename: 'steroid-side-effects.png',
      title: 'Corticosteroid Adverse Effects',
      description: 'Organ system overview of steroid-related complications',
    },
  ],

  citations: [
    {
      id: 'steroid-avoidance-2023',
      type: 'article',
      title: 'Steroid Avoidance in Kidney Transplantation: Current Evidence',
      authors: ['Knight SR', 'Morris PJ'],
      source: 'Transplantation',
      accessedDate: '2026-01-28',
    },
    {
      id: 'ctot-09-study',
      type: 'article',
      title: 'Early Corticosteroid Cessation vs Long-term Steroid Use in Kidney Transplant',
      authors: ['Alloway RR'],
      source: 'Clinical Trials in Organ Transplantation (CTOT-09)',
      accessedDate: '2026-01-28',
    },
    {
      id: 'steroid-moa-review',
      type: 'article',
      title: 'Molecular Mechanisms of Glucocorticoid Action',
      authors: ['Rhen T', 'Cidlowski JA'],
      source: 'New England Journal of Medicine',
      accessedDate: '2026-01-28',
    },
  ],

  crossReferences: [
    {
      targetId: 'transplant-immunosuppression-basics',
      targetType: 'concept',
      relationship: 'parent',
      label: 'Immunosuppression Basics',
    },
    {
      targetId: 'transplant-calcineurin-inhibitors',
      targetType: 'concept',
      relationship: 'related',
      label: 'Calcineurin Inhibitors',
    },
    {
      targetId: 'transplant-antiproliferative-agents',
      targetType: 'concept',
      relationship: 'related',
      label: 'Antiproliferative Agents',
    },
  ],

  tags: {
    systems: ['immune', 'endocrine'],
    topics: ['transplant', 'pharmacology', 'immunosuppression'],
    keywords: ['steroids', 'prednisone', 'methylprednisolone', 'glucocorticoids', 'steroid avoidance', 'steroid withdrawal', 'immunosuppression'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      shelf: ['surgery', 'medicine'],
    },
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};
