/**
 * Rejection Recognition - Educational Content
 *
 * Education on transplant rejection including types (hyperacute,
 * acute, chronic, antibody-mediated), recognition, and management.
 */

import { EducationalContent } from '../types';

export const rejectionRecognition: EducationalContent = {
  id: 'condition-transplant-rejection',
  type: 'condition',
  name: 'Rejection Recognition',
  alternateNames: ['Transplant Rejection', 'Organ Rejection', 'Graft Rejection'],

  levels: {
    1: {
      level: 1,
      summary: 'Rejection happens when the body tries to attack the new organ because it sees it as something that does not belong.',
      explanation: `After a transplant, your body might try to fight the new organ. This is called rejection. It happens because your immune system (the part that fights germs) sees the new organ as a stranger.

**Why Does Rejection Happen?**
- Your body is designed to protect you from things that do not belong
- The new organ has different markers than your own organs
- Without medicine, your body would try to get rid of it

**Warning Signs of Rejection**
Tell your doctor right away if you notice:
- Fever or feeling sick
- Pain or swelling near the transplant
- Feeling very tired
- Changes in how much you urinate (for kidney transplants)
- Shortness of breath (for heart or lung transplants)

**Good News About Rejection**
- Medicines help prevent rejection
- If caught early, rejection can usually be treated
- Many rejection episodes are mild
- Regular check-ups help catch problems early

**How to Prevent Rejection**
- Take your medicines exactly as prescribed
- Never skip doses
- Go to all your appointments
- Tell your doctor about any new symptoms

**Types of Rejection**
- Some happens fast (within days)
- Some happens slowly (over months or years)
- Different treatments work for different types`,
      keyTerms: [
        { term: 'rejection', definition: 'When the body tries to attack and damage the new organ' },
        { term: 'immune system', definition: 'The part of your body that fights germs and things that do not belong' },
        { term: 'symptoms', definition: 'Signs that something might be wrong, like fever or pain' },
      ],
      analogies: [
        'Your immune system is like a security guard who sees everyone as either a friend or a stranger. The transplant medicines teach the guard to recognize the new organ as a friend.',
      ],
      examples: [
        'When Tom developed a fever and swelling after his kidney transplant, his doctors gave him extra medicine to stop rejection and save his kidney.',
      ],
    },
    2: {
      level: 2,
      summary: 'Transplant rejection occurs when the immune system attacks the donated organ. It can be acute (sudden) or chronic (gradual), and early detection allows for effective treatment.',
      explanation: `**What Is Rejection?**

Rejection is the body's immune response against the transplanted organ. The immune system recognizes the organ as "foreign" and attempts to destroy it, similar to how it fights infections.

**Types of Rejection**

**Hyperacute Rejection**
- Happens within minutes to hours
- Caused by pre-existing antibodies
- Very rare with modern testing
- Prevented by crossmatch testing before transplant

**Acute Rejection**
- Happens days to months after transplant
- Most common in first year
- Usually treatable if caught early
- Two main types: cellular and antibody-mediated

**Chronic Rejection**
- Develops slowly over months to years
- Leading cause of long-term graft loss
- Harder to treat than acute rejection
- Gradual decline in organ function

**Warning Signs by Organ**

| Organ | Warning Signs |
|-------|---------------|
| Kidney | Decreased urine, swelling, weight gain, rising creatinine |
| Liver | Jaundice, fatigue, abdominal pain, abnormal liver tests |
| Heart | Fatigue, shortness of breath, swelling, irregular heartbeat |
| Lung | Shortness of breath, cough, decreased lung function |

**Diagnosis**
- Blood tests showing declining organ function
- Imaging studies
- Biopsy (small tissue sample) is the gold standard

**Treatment**
- High-dose steroids (most common first treatment)
- Stronger immunosuppression medicines
- Special treatments for antibody-mediated rejection

**Prevention**
- Take all medications as prescribed
- Attend all follow-up appointments
- Report any symptoms promptly
- Regular monitoring blood tests`,
      keyTerms: [
        { term: 'acute rejection', definition: 'Sudden immune attack on the organ, usually treatable' },
        { term: 'chronic rejection', definition: 'Slow, gradual damage to the organ over time' },
        { term: 'biopsy', definition: 'Taking a small sample of tissue to look at under a microscope' },
        { term: 'crossmatch', definition: 'A test before transplant to check if recipient has antibodies against donor' },
      ],
    },
    3: {
      level: 3,
      summary: 'Transplant rejection is classified by timing, mechanism, and histopathology, with T-cell mediated (cellular) and antibody-mediated rejection requiring different therapeutic approaches.',
      explanation: `## Rejection Classification

**By Timing**
- Hyperacute: Minutes to hours
- Acute: Days to months
- Chronic: Months to years

**By Mechanism**
- T-cell mediated (cellular) rejection (TCMR)
- Antibody-mediated rejection (ABMR)
- Mixed rejection

## T-Cell Mediated Rejection (TCMR)

**Pathophysiology**
- CD4+ and CD8+ T cells infiltrate graft
- Direct and indirect allorecognition
- Cytokine release and cytotoxic killing

**Histopathology (Kidney - Banff Classification)**
- Tubulitis (lymphocytes in tubular epithelium)
- Interstitial inflammation
- Intimal arteritis (in severe cases)

**Grading**
| Grade | Features |
|-------|----------|
| Borderline | Mild tubulitis and/or interstitial inflammation |
| IA | >25% interstitial inflammation, moderate tubulitis |
| IB | >25% interstitial inflammation, severe tubulitis |
| IIA | Mild-moderate intimal arteritis |
| IIB | Severe intimal arteritis |
| III | Transmural arteritis, fibrinoid necrosis |

**Treatment**
- Pulse steroids (methylprednisolone 500-1000mg x 3 days)
- Optimize maintenance immunosuppression
- Thymoglobulin for steroid-resistant rejection

## Antibody-Mediated Rejection (ABMR)

**Pathophysiology**
- Donor-specific antibodies (DSA) bind graft endothelium
- Complement activation
- Endothelial injury and inflammation

**Diagnosis (Banff Criteria)**
1. Histologic evidence of tissue injury
2. Evidence of antibody interaction (C4d, molecular markers)
3. Presence of DSA

**Histopathology**
- Microvascular inflammation (glomerulitis, peritubular capillaritis)
- C4d deposition
- Transplant glomerulopathy (chronic)

**Treatment**
- Plasmapheresis/plasma exchange
- IVIG
- Rituximab (anti-CD20)
- Bortezomib (proteasome inhibitor)
- Limited efficacy, especially for chronic ABMR

## Chronic Rejection

**Kidney**
- Interstitial fibrosis/tubular atrophy (IF/TA)
- Transplant glomerulopathy
- Progressive GFR decline

**Heart**
- Cardiac allograft vasculopathy (CAV)
- Accelerated coronary atherosclerosis
- Detected by coronary angiography or IVUS

**Lung**
- Chronic lung allograft dysfunction (CLAD)
- Bronchiolitis obliterans syndrome (BOS)
- Restrictive allograft syndrome (RAS)

**Liver**
- Vanishing bile duct syndrome
- Chronic ductopenic rejection
- Less common than other organs`,
      keyTerms: [
        { term: 'TCMR', definition: 'T-cell mediated rejection - cellular immune response against the graft' },
        { term: 'ABMR', definition: 'Antibody-mediated rejection - humoral immune response with donor-specific antibodies' },
        { term: 'Banff classification', definition: 'International standardized criteria for kidney allograft pathology' },
        { term: 'C4d', definition: 'Complement split product used as marker of antibody-mediated injury' },
      ],
      clinicalNotes: 'Protocol biopsies at 3-12 months post-transplant can detect subclinical rejection. Early treatment of subclinical TCMR may improve long-term outcomes.',
    },
    4: {
      level: 4,
      summary: 'Contemporary rejection diagnostics integrate molecular pathology, non-invasive biomarkers, and phenotypic classification to guide risk-stratified therapeutic interventions.',
      explanation: `## Advanced Rejection Diagnostics

**Molecular Diagnostics**

Molecular Microscope (MMDx):
- Microarray analysis of biopsy tissue
- Gene expression-based classification
- Objective rejection phenotyping
- Identifies pure TCMR, ABMR, mixed, injury

AlloSure/Prospera (dd-cfDNA):
- Donor-derived cell-free DNA in recipient blood
- Elevated in active rejection
- Sensitivity for ABMR > TCMR
- Negative predictive value useful for ruling out rejection

Gene Expression Profiling:
- kSORT (kidney): Predicts rejection
- AlloMap (heart): Surveillance for rejection

**Antibody Characterization**

Beyond MFI:
- Complement-binding assays (C1q, C3d)
- IgG subclass determination
- Relevance: C1q+ DSA higher rejection risk

Memory B-Cell Assessment:
- ELISPOT for donor-reactive B cells
- Predicts de novo DSA development

**Histopathologic Advances**

Banff 2022 Updates:
- Molecular criteria integration
- ABMR without DSA (possible if molecular positive)
- Updated IF/TA classification

Electron Microscopy:
- Peritubular capillary basement membrane multilayering
- Early transplant glomerulopathy detection

## Risk Stratification

**De Novo DSA Development**

Risk Factors:
- Non-adherence (leading cause)
- HLA mismatch
- Prior sensitization
- Inadequate immunosuppression

Clinical Impact:
- De novo DSA associated with ABMR, graft loss
- Earlier detection enables intervention

**Subclinical Rejection**

Definition:
- Histologic rejection without clinical manifestations
- Detected on protocol biopsies

Significance:
- Predicts worse long-term outcomes
- Treatment may prevent progression

## Therapeutic Strategies

**Acute TCMR Treatment Protocol**
1. Pulse steroids (first-line)
2. Optimize maintenance IS (check levels, adherence)
3. If steroid-resistant: Thymoglobulin
4. Consider belatacept conversion

**Acute ABMR Treatment**
1. Plasmapheresis (5-6 sessions)
2. IVIG (100 mg/kg per session or 2 g/kg total)
3. Rituximab (375 mg/m2)
4. Consider bortezomib for refractory cases
5. Tocilizumab (IL-6 inhibition) emerging

**Chronic ABMR**
- Limited effective therapies
- IVIG + rituximab (modest benefit)
- Tocilizumab (promising early data)
- Focus on preventing progression

**Cardiac Allograft Vasculopathy**
- mTOR inhibitor conversion (sirolimus, everolimus)
- Statin therapy
- Aggressive risk factor management
- Retransplantation for severe cases`,
      keyTerms: [
        { term: 'molecular microscope', definition: 'Microarray-based analysis providing objective molecular phenotyping of biopsy tissue' },
        { term: 'de novo DSA', definition: 'Donor-specific antibodies that develop after transplant, not present initially' },
        { term: 'subclinical rejection', definition: 'Histologic rejection on biopsy without clinical signs or symptoms' },
        { term: 'tocilizumab', definition: 'IL-6 receptor antagonist showing promise for chronic ABMR treatment' },
      ],
      clinicalNotes: 'Non-adherence is the leading modifiable risk factor for de novo DSA and late rejection. All rejection episodes should prompt adherence assessment and intervention.',
    },
    5: {
      level: 5,
      summary: 'Rejection research focuses on molecular phenotyping, biomarker-guided therapy, novel immunomodulation, and understanding the immunologic mechanisms underlying graft accommodation and loss.',
      explanation: `## Evolving Rejection Paradigms

**Molecular Classification Integration**

INTERCOMEX Study:
- Cross-platform molecular validation
- Standardized rejection classifiers
- Foundation for molecular Banff integration

Molecular-Banff Concordance:
- High concordance for ABMR
- TCMR molecular signatures less specific
- Mixed phenotypes better characterized

**Non-Invasive Monitoring**

dd-cfDNA Kinetics:
- Baseline individualization
- Delta changes more informative than absolute values
- Integration with clinical decision-making

TTV as Biomarker:
- Low TTV (high IS) during rejection treatment
- Monitor for over-immunosuppression
- Personalized IS adjustment potential

Urine Biomarkers:
- CXCL9, CXCL10 for TCMR
- Urinary exosomes
- Donor-derived cfDNA in urine

## Novel Therapeutic Targets

**ABMR Therapies in Development**

IL-6 Pathway:
- Tocilizumab (IL-6R antagonist)
- Clazakizumab (IL-6 antagonist)
- IMAGINE trial (clazakizumab for chronic active ABMR)

Complement Inhibition:
- Eculizumab (C5 inhibitor) - disappointing in treatment
- C1 esterase inhibitors
- Novel complement pathway targets

CD38 Targeting:
- Daratumumab (anti-CD38)
- Targets plasma cells (DSA producers)
- Case reports promising

**TCMR Novel Approaches**
- JAK inhibitors (tofacitinib)
- Selective costimulation blockade beyond belatacept
- Treg infusion for steroid-resistant rejection

## Tolerance and Accommodation

**Graft Accommodation**
- Graft survival despite circulating DSA
- Protective gene expression (HO-1, A20, Bcl-2)
- May explain stable patients with DSA

**Operational Tolerance**
- Stable function without IS
- Rare but documented
- Biomarker signatures being characterized

**Mixed Chimerism**
- Donor cell persistence
- Associated with better outcomes
- Tolerance induction protocols

## Risk Prediction and Precision Medicine

**Integrative Risk Models**

Components:
- HLA molecular mismatch (eplet analysis)
- Baseline immunologic risk
- Clinical/demographic factors
- Molecular biomarkers

iBox (Kidney):
- Integrative risk prediction tool
- Time-dependent risk assessment
- Guides individualized management

**Machine Learning Applications**
- Rejection prediction from EHR data
- Biopsy image analysis
- Natural language processing for adherence detection

## Future Directions

**Prevention Strategies**
- Optimized HLA/eplet matching
- Precision induction selection
- Biomarker-guided maintenance

**Treatment Advances**
- Targeted B-cell/plasma cell therapies
- Complement pathway modulation
- Cell-based tolerance induction

**Systems Integration**
- Real-time biomarker monitoring
- AI-assisted clinical decision support
- Personalized rejection risk profiles`,
      keyTerms: [
        { term: 'graft accommodation', definition: 'Graft resistance to antibody-mediated injury despite circulating DSA' },
        { term: 'eplet mismatch', definition: 'Molecular HLA mismatch analysis at the amino acid epitope level' },
        { term: 'clazakizumab', definition: 'IL-6 antibody in trials for chronic active ABMR treatment' },
        { term: 'iBox', definition: 'Integrative Box - risk prediction tool for kidney transplant outcomes' },
      ],
      clinicalNotes: `Research priorities:
1. Validate molecular classifiers for clinical decision-making
2. Develop effective chronic ABMR therapies
3. Integrate biomarkers into standard care pathways
4. Identify tolerance biomarkers for IS minimization trials
5. Machine learning for rejection risk prediction and early detection`,
    },
  },

  media: [
    {
      id: 'rejection-types-diagram',
      type: 'diagram',
      filename: 'rejection-types.svg',
      title: 'Types of Transplant Rejection',
      description: 'Visual overview of hyperacute, acute, and chronic rejection mechanisms',
    },
  ],

  citations: [
    {
      id: 'banff-classification',
      type: 'article',
      title: 'Banff Classification of Renal Allograft Pathology',
      source: 'American Journal of Transplantation',
    },
    {
      id: 'abmr-treatment',
      type: 'article',
      title: 'Treatment of Antibody-Mediated Rejection',
      source: 'Transplantation',
    },
  ],

  crossReferences: [
    { targetId: 'concept-immunosuppression-therapy', targetType: 'concept', relationship: 'related', label: 'Immunosuppression' },
    { targetId: 'process-post-transplant-care', targetType: 'process', relationship: 'related', label: 'Post-Transplant Care' },
    { targetId: 'concept-organ-transplant-basics', targetType: 'concept', relationship: 'parent', label: 'Transplant Basics' },
  ],

  tags: {
    systems: ['transplant-medicine'],
    topics: ['rejection', 'ABMR', 'TCMR', 'graft dysfunction'],
    clinicalRelevance: 'critical',
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default rejectionRecognition;
