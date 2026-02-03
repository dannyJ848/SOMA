/**
 * Long-Term Outcomes - Educational Content
 *
 * Education on transplant outcomes including survival rates,
 * quality of life, and long-term complications.
 */

import { EducationalContent } from '../types';

export const longTermOutcomes: EducationalContent = {
  id: 'concept-long-term-outcomes',
  type: 'concept',
  name: 'Long-Term Outcomes',
  alternateNames: ['Transplant Outcomes', 'Graft Survival', 'Post-Transplant Survival'],

  levels: {
    1: {
      level: 1,
      summary: 'Most people do very well after transplant and can live long, healthy lives with their new organ.',
      explanation: `Getting a transplant can give you many more years of life. Most people who get transplants do very well and can enjoy life with their families and friends.

**How Long Do Transplanted Organs Last?**
- Kidney transplants often work for 15-20 years or longer
- Heart transplants can last 10-15 years or more
- Liver transplants can last for decades
- Many people outlive their transplants and get another one

**What Is Life Like After Transplant?**
Most people can:
- Go back to work or school
- Exercise and play sports
- Travel
- Spend time with family and friends
- Feel much better than before the transplant

**What Helps People Do Well?**
- Taking all medicines exactly as prescribed
- Going to all doctor appointments
- Eating healthy and staying active
- Not smoking
- Telling doctors about any problems right away

**Things to Watch For**
Over many years, some people may develop:
- Side effects from medicines
- Infections
- Other health problems like diabetes or heart disease
- The organ slowly working less well

**The Good News**
- Treatment keeps getting better
- Many transplant recipients live long, full lives
- Doctors know more now about preventing problems
- You are not alone - there is support available`,
      keyTerms: [
        { term: 'graft', definition: 'The transplanted organ' },
        { term: 'survival', definition: 'How long the transplant continues to work' },
        { term: 'quality of life', definition: 'How good your daily life feels - being able to do things you enjoy' },
      ],
      analogies: [
        'A transplanted organ is like a gift that needs care - the better you take care of it, the longer it will last and help you.',
      ],
      examples: [
        'John received a kidney transplant 15 years ago. He works full-time, travels with his family, and runs in charity races.',
      ],
    },
    2: {
      level: 2,
      summary: 'Transplant survival continues to improve, with most recipients experiencing improved quality of life, though long-term management of complications remains important.',
      explanation: `**Transplant Survival Rates**

| Organ | 1-Year Survival | 5-Year Survival |
|-------|-----------------|-----------------|
| Kidney (living donor) | 99% | 90% |
| Kidney (deceased donor) | 96% | 80% |
| Liver | 90% | 75% |
| Heart | 90% | 75% |
| Lung | 85% | 55% |

**What Affects Long-Term Outcomes?**

**Positive Factors**
- Taking medications as prescribed
- Regular follow-up care
- Healthy lifestyle
- Good match between donor and recipient
- Early detection of problems

**Negative Factors**
- Missing medication doses
- Rejection episodes
- Infections
- Other health conditions (diabetes, heart disease)
- Smoking

**Quality of Life After Transplant**

Most recipients report:
- Better energy levels
- Improved physical function
- Better emotional well-being
- Return to normal activities
- Improved family and social relationships

**Compared to Dialysis (Kidney)**
- Better survival
- Better quality of life
- More freedom
- Fewer dietary restrictions

**Long-Term Challenges**

**Medication Side Effects**
- High blood sugar/diabetes
- High blood pressure
- High cholesterol
- Bone thinning

**Chronic Rejection**
- Slow decline in organ function over years
- May eventually need another transplant

**Infections**
- Ongoing risk due to immunosuppression
- Require prevention and monitoring

**Cancer Risk**
- Higher than general population
- Skin cancer most common
- Regular screening important`,
      keyTerms: [
        { term: 'graft survival', definition: 'How long the transplanted organ continues to function' },
        { term: 'patient survival', definition: 'How long the transplant recipient lives' },
        { term: 'chronic rejection', definition: 'Slow damage to the transplant over time' },
        { term: 'adherence', definition: 'Taking medications and following care instructions as prescribed' },
      ],
    },
    3: {
      level: 3,
      summary: 'Long-term transplant outcomes are measured by graft and patient survival, quality of life metrics, and complication rates, with modifiable factors including adherence and cardiovascular risk management.',
      explanation: `## Survival Metrics

**Kidney Transplant (SRTR Data)**
- Living donor: 10-year graft survival ~65%
- Deceased donor: 10-year graft survival ~50%
- Patient survival typically exceeds graft survival

**Death-Censored Graft Survival**
- Measures graft function excluding deaths with functioning graft
- Better metric of immunological outcomes
- Living donor: 10-year DCGS ~75%

**Liver Transplant**
- 10-year survival: 60-70%
- Cause-specific variation (HCC vs. alcoholic vs. autoimmune)
- Recurrent disease affects outcomes

**Heart Transplant**
- Median survival: ~12 years
- Cardiac allograft vasculopathy (CAV) limits long-term survival
- Surveillance and prevention critical

**Lung Transplant**
- Median survival: ~6 years
- CLAD (chronic rejection) major limiter
- Improving with refined protocols

## Causes of Late Graft Loss

**Kidney**
1. Death with functioning graft (~40%)
2. Chronic antibody-mediated rejection
3. Recurrent disease
4. BK nephropathy
5. Non-adherence

**Liver**
1. Recurrent disease (HCV, alcoholic, NASH)
2. Chronic rejection (less common)
3. Biliary complications
4. De novo malignancy

**Heart**
1. Cardiac allograft vasculopathy
2. Malignancy
3. Infection
4. Chronic rejection

## Quality of Life Assessment

**Instruments**
- SF-36/SF-12 (general health)
- Kidney Disease Quality of Life (KDQOL)
- Functional Assessment of Chronic Illness Therapy (FACIT)

**Outcomes**
- QOL improves significantly post-transplant
- Most domains normalize or near-normal
- Physical function and energy improve most
- Persistent concerns: medication burden, anxiety about rejection

## Long-Term Complications

**Cardiovascular Disease**
- Leading cause of death post-kidney transplant
- Risk factors: hypertension, diabetes, dyslipidemia
- Aggressive risk factor management essential

**Chronic Kidney Disease (Non-Kidney Transplant)**
- CNI nephrotoxicity cumulative
- GFR decline over time common
- May require kidney transplant

**Malignancy**
- 2-4x increased overall risk
- Skin cancer: 10-20x increased
- PTLD: EBV-associated lymphoma
- Annual screening essential

**Metabolic Bone Disease**
- Osteoporosis from steroids
- Fracture risk increased
- DEXA monitoring and treatment

**Infections**
- Ongoing opportunistic infection risk
- Community-acquired infections
- Hepatitis B/C reactivation concerns`,
      keyTerms: [
        { term: 'death-censored graft survival', definition: 'Graft survival rate calculated excluding deaths with functioning graft' },
        { term: 'DCGS', definition: 'Death-censored graft survival - immunological outcome measure' },
        { term: 'CAV', definition: 'Cardiac allograft vasculopathy - chronic rejection of heart transplant' },
        { term: 'CLAD', definition: 'Chronic lung allograft dysfunction - chronic rejection of lung transplant' },
      ],
      clinicalNotes: 'Cardiovascular disease prevention is critical for long-term survival, particularly in kidney transplant recipients. Aggressive management of traditional risk factors should begin immediately post-transplant.',
    },
    4: {
      level: 4,
      summary: 'Long-term transplant outcomes research identifies modifiable risk factors, validates prediction models, and informs interventions targeting the leading causes of late graft loss and mortality.',
      explanation: `## Outcome Prediction Models

**Kidney Transplant**

iBox Score:
- Integrative prediction tool
- Components: eGFR, proteinuria, DSA, rejection history
- Dynamic risk assessment
- Guides intervention intensity

KDPI/EPTS:
- Donor quality (KDPI) matched to recipient expected survival (EPTS)
- Longevity matching principle
- Policy implications for allocation

**Liver Transplant**
- Risk Estimation Following Liver Transplant (REFT)
- Donor Risk Index
- D-MELD (donor age + recipient MELD)

## Mortality Analysis

**Kidney Transplant Mortality**

Causes of Death:
| Cause | Proportion |
|-------|------------|
| Cardiovascular | 30-40% |
| Malignancy | 15-20% |
| Infection | 15-20% |
| Other | 20-30% |

Cardiovascular Risk:
- Traditional risk factors amplified
- ASCVD risk 3-5x general population
- Need for aggressive management

**Modifiable Factors Affecting Survival**
- Medication adherence
- Smoking cessation
- Blood pressure control
- Diabetes management
- Lipid management
- Obesity/weight management

## Late Graft Loss Mechanisms

**Chronic Antibody-Mediated Rejection**
- De novo DSA development (often non-adherence related)
- Transplant glomerulopathy
- Limited treatment options
- Prevention focus essential

**Interstitial Fibrosis/Tubular Atrophy**
- Multifactorial: CNI toxicity, rejection, infection
- Progressive decline in function
- Some reversible, some not
- Biopsy helps differentiate causes

**Recurrent Disease**
- Focal segmental glomerulosclerosis (FSGS): High recurrence
- IgA nephropathy: Common but usually benign
- MPGN: Variable recurrence
- Disease-specific monitoring needed

## Retransplantation

**Kidney**
- ~15% of transplants are repeat
- Sensitization challenges
- Generally good outcomes

**Liver**
- Less common
- Primary non-function
- Hepatic artery thrombosis
- Recurrent disease

**Heart**
- CAV primary indication
- Outcomes improving
- Limited by organ availability

## Emerging Interventions

**Immunosuppression Minimization**
- Biomarker-guided withdrawal
- Tolerance protocols
- Improving quality of life

**Cardiovascular Prevention**
- SGLT2 inhibitors (cardioprotection + nephroprotection)
- GLP-1 agonists
- Aggressive statin therapy

**Cancer Prevention**
- mTOR inhibitor conversion
- Immunosuppression reduction
- Chemoprevention strategies`,
      keyTerms: [
        { term: 'iBox', definition: 'Integrative Box - validated kidney transplant risk prediction tool' },
        { term: 'longevity matching', definition: 'Allocating higher-quality organs to recipients with longer expected survival' },
        { term: 'SGLT2 inhibitors', definition: 'Sodium-glucose cotransporter 2 inhibitors - emerging cardioprotective agents for transplant recipients' },
        { term: 'transplant glomerulopathy', definition: 'Histologic manifestation of chronic antibody-mediated rejection in kidney transplant' },
      ],
      clinicalNotes: 'De novo DSA development, often associated with non-adherence, is a leading cause of late graft loss. Every rejection episode should prompt adherence assessment and intervention.',
    },
    5: {
      level: 5,
      summary: 'Contemporary outcomes research leverages registry data, machine learning, and biomarker integration to develop precision approaches to long-term transplant management addressing graft loss, mortality, and quality of life.',
      explanation: `## Registry-Based Outcomes Research

**SRTR/OPTN Data**

Capabilities:
- National outcomes tracking
- Center-specific reporting
- Risk-adjusted comparisons
- Policy impact assessment

Limitations:
- Limited granularity
- Missing long-term follow-up
- Variable data quality
- Selection bias

**International Registries**
- ANZDATA (Australia/New Zealand)
- ERA-EDTA (Europe)
- Collaborative Transplant Study
- Enable cross-national comparisons

**Specialized Registries**
- DeKAF (Deterioration of Kidney Allograft Function)
- CTOT (Clinical Trials in Organ Transplantation)
- Biobank linkages

## Machine Learning in Outcomes Prediction

**Applications**

Graft Loss Prediction:
- Electronic health record data mining
- Integration of clinical and molecular data
- Improved discrimination vs. traditional models

Mortality Prediction:
- Cardiovascular risk modeling
- Infection risk stratification
- Malignancy risk assessment

**Challenges**
- Validation in diverse populations
- Interpretability (black box concerns)
- Integration into clinical workflows
- Avoiding algorithmic bias

## Biomarker-Integrated Outcomes

**Surveillance Biomarkers**

dd-cfDNA:
- Elevated levels predict graft loss
- Trajectory more informative than single values
- Integration with clinical decision-making

Molecular Biopsy Scores:
- iBox integration with molecular data
- Improved prediction vs. histology alone
- Guides intervention intensity

**Novel Biomarkers in Development**
- Urinary exosomes
- Single-cell RNA sequencing signatures
- Proteomic markers
- Metabolomic profiles

## Long-Term Complications: Advanced Management

**Cardiovascular Disease**

SGLT2 Inhibitors:
- EMPA-KIDNEY showed benefit in CKD
- Emerging data in transplant
- Cardioprotection and nephroprotection

GLP-1 Receptor Agonists:
- Weight loss benefit
- Cardiovascular protection
- Drug-drug interaction considerations

PCSK9 Inhibitors:
- For statin-intolerant patients
- Aggressive LDL lowering

**Chronic Kidney Disease in Non-Kidney Transplant**

CNI Minimization:
- Belatacept conversion
- mTOR inhibitor-based regimens
- Improved renal outcomes

Kidney Transplant After Other Transplant:
- Heart-kidney, liver-kidney sequences
- Immunologic considerations
- Outcomes data

## Quality of Life and Patient-Reported Outcomes

**PRO Integration**

PROMIS Measures:
- NIH-developed item banks
- Physical function, fatigue, social health
- Computerized adaptive testing

Transplant-Specific PROs:
- Basel Assessment of Adherence to Immunosuppressive Medications Scale (BAASIS)
- Transplant symptom burden tools

**PROs as Outcomes**
- CMS quality measures incorporating PROs
- Value-based care implications
- Patient-centered research priorities

## Future Directions

**Xenotransplantation Impact**
- Eliminating waitlist mortality
- Long-term outcome implications unknown
- New complication profiles

**Bioengineered Organs**
- Personalized organs (no rejection?)
- Timeline uncertain
- Regulatory considerations

**Tolerance Induction**
- Eliminating immunosuppression complications
- Long-term monitoring needs
- Operational tolerance identification

**Precision Long-Term Management**
- Individualized surveillance intensity
- Biomarker-guided IS adjustment
- Personalized prevention strategies`,
      keyTerms: [
        { term: 'PROMIS', definition: 'Patient-Reported Outcomes Measurement Information System - NIH-developed measures' },
        { term: 'precision medicine', definition: 'Tailored medical approaches based on individual patient characteristics' },
        { term: 'algorithmic bias', definition: 'Systematic errors in machine learning models affecting certain populations disproportionately' },
        { term: 'value-based care', definition: 'Healthcare delivery model rewarding quality outcomes rather than volume' },
      ],
      clinicalNotes: `Research priorities:
1. Validate ML-based prediction models in diverse populations
2. Integrate biomarkers into standard long-term surveillance
3. Develop PRO-based quality measures for transplant
4. Address disparities in long-term outcomes
5. Prepare for xenotransplantation/bioengineering outcomes assessment`,
    },
  },

  media: [
    {
      id: 'survival-curves',
      type: 'diagram',
      filename: 'transplant-survival-curves.svg',
      title: 'Transplant Survival Outcomes',
      description: 'Kaplan-Meier survival curves for different organ transplants',
    },
  ],

  citations: [
    {
      id: 'srtr-annual',
      type: 'website',
      title: 'SRTR Annual Data Report',
      source: 'Scientific Registry of Transplant Recipients',
      url: 'https://srtr.transplant.hrsa.gov/',
    },
    {
      id: 'ishlt-registry',
      type: 'website',
      title: 'ISHLT Transplant Registry',
      source: 'International Society for Heart and Lung Transplantation',
      url: 'https://ishlt.org/registries',
    },
  ],

  crossReferences: [
    { targetId: 'process-post-transplant-care', targetType: 'process', relationship: 'related', label: 'Post-Transplant Care' },
    { targetId: 'condition-transplant-rejection', targetType: 'condition', relationship: 'related', label: 'Rejection' },
    { targetId: 'concept-immunosuppression-therapy', targetType: 'concept', relationship: 'related', label: 'Immunosuppression' },
  ],

  tags: {
    systems: ['transplant-medicine'],
    topics: ['outcomes', 'survival', 'quality of life', 'long-term complications'],
    clinicalRelevance: 'high',
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default longTermOutcomes;
