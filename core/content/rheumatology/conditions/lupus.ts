/**
 * Systemic Lupus Erythematosus (Lupus)
 *
 * Chronic autoimmune disease affecting multiple organ systems.
 */

import { EducationalContent } from '../../types';

export const sleContent: EducationalContent = {
  id: 'rheumatology-lupus',
  type: 'topic',
  name: 'Systemic Lupus Erythematosus (SLE)',
  alternateNames: ['Lupus', 'SLE', 'Lupus Erythematosus'],

  levels: {
    1: {
      level: 1,
      summary: "Lupus is a disease where your immune system attacks healthy tissue in your body. It can affect many parts of your body including skin, joints, kidneys, heart, and brain.",
      explanation: `## What Is Lupus?

Lupus is an autoimmune disease where your body's defense system attacks your own healthy tissues. It can affect many different parts of the body.

## What Are the Symptoms?

**Common Symptoms:**
- Extreme fatigue
- Joint pain and swelling
- Fever without known cause
- Butterfly-shaped rash on face
- Sun sensitivity (rash from sun)
- Hair loss
- Mouth sores

**Can Also Affect:**
- Kidneys
- Heart and lungs
- Brain and nerves
- Blood cells

## Who Gets Lupus?

- Women (90% of cases)
- Ages 15-44 most common
- More common in:
  - African Americans
  - Hispanics/Latinos
  - Asians
  - Native Americans

## What Causes It?

- Genetics (runs in families)
- Hormones (estrogen)
- Environment (sunlight, stress, infections)
- Triggered by something that starts the immune problem

## Treatment

- Medicines to calm immune system
- Anti-inflammatory medicines (NSAIDs)
- Steroids for severe flares
- Hydroxychloroquine (Plaquenil) for most patients
- Protect from sun
- Regular check-ups important`,

      keyTerms: [
        { term: 'Autoimmune', definition: "Immune system attacks body's own healthy cells" },
        { term: 'Butterfly rash', definition: 'Red rash across nose and cheeks - classic lupus sign' },
        { term: 'Flare', definition: 'Period when symptoms suddenly get worse' },
        { term: 'Hydroxychloroquine', definition: 'Medicine that helps control lupus symptoms' },
      ],
      analogies: [
        "Lupus is like your body's defense system turning against you.",
        'A flare is like a storm - symptoms come on strong and then settle.',
      ],
      examples: [
        'Young woman with rash across nose and cheeks',
        'Person with joint pain and extreme fatigue',
        'Someone who gets rash whenever in the sun',
      ],
    },

    2: {
      level: 2,
      summary: 'SLE is a multisystem autoimmune disease with diverse manifestations. Diagnosis requires 4 of 11 ACR criteria or positive ANA plus 2 clinical criteria.',
      explanation: `## Clinical Manifestations

**Constitutional:**
- Fatigue (90%)
- Fever, weight loss
- Malaise

**Musculoskeletal:**
- Arthralgias, arthritis (90%)
- Jaccoud arthropathy (reversible deformity)
- Myalgias, myositis

**Cutaneous:**
- Malar rash (butterfly) - 50%
- Discoid lesions (scarring)
- Photosensitivity
- Oral ulcers
- Alopecia
- Raynaud phenomenon

**Renal:**
- Lupus nephritis (50%)
- Can be asymptomatic initially
- Proteinuria, hematuria
- Can progress to renal failure

**Hematologic:**
- Leukopenia, lymphopenia
- Anemia of chronic disease
- Thrombocytopenia
- Antiphospholipid antibodies

**Neurologic:**
- Headaches
- Cognitive dysfunction
- Seizures, psychosis
- Peripheral neuropathy

**Cardiopulmonary:**
- Pleuritis, pericarditis
- Pleural effusion
- Libman-Sacks endocarditis
- Myocarditis (rare)

## Diagnosis

**2019 EULAR/ACR Criteria:**
- Positive ANA (entry criterion)
- 10 clinical domains + 6 immunologic domains
- ≥10 points = definite SLE

**1987 ACR Criteria (older):**
- 4 of 11 criteria
- Malar rash, discoid rash, photosensitivity
- Oral ulcers, arthritis
- Serositis, renal disorder
- Neurologic disorder
- Hematologic disorder
- Immunologic disorder
- Positive ANA`,

      keyTerms: [
        { term: 'Malar rash', definition: 'Butterfly-shaped rash across nose and cheeks' },
        { term: 'Photosensitivity', definition: 'Abnormal sensitivity to sunlight' },
        { term: 'Proteinuria', definition: 'Protein in urine - sign of kidney involvement' },
        { term: 'Serositis', definition: 'Inflammation of lining around lungs or heart' },
      ],
      analogies: [
        'Photosensitivity is like your skin being allergic to sunlight.',
        'Proteinuria is like your kidneys are leaking protein into your urine.',
      ],
      examples: [
        'Woman with malar rash, joint pain, positive ANA diagnosed with SLE',
        'Patient with proteinuria found to have lupus nephritis',
        'Person with pleuritic chest pain from lupus serositis',
      ],
      clinicalNotes: 'Discoid lupus can exist without systemic disease. Biopsy shows interface dermatitis. ANA sensitivity: 95% but specificity low. dsDNA specific for SLE. Low complement (C3, C4) indicates active disease, especially renal.',
    },

    3: {
      level: 3,
      summary: 'Treatment depends on organ involvement and severity. Hydroxychloroquine is foundation. Immunosuppressants for major organ involvement. Antiphospholipid syndrome requires anticoagulation.',
      explanation: `## Treatment by Severity

**Mild Disease (skin, joints, fatigue):**
- Hydroxychloroquine 200-400mg daily
- NSAIDs for arthritis, serositis
- Sun protection
- Topical steroids for rash

**Moderate-Severe Disease:**
- Glucocorticoids (prednisone)
- Immunosuppressants:
  - Methotrexate (arthritis, skin)
  - Azathioprine (maintenance)
  - Mycophenolate (renal, severe)
  - Cyclophosphamide (severe renal, CNS)

**Refractory Disease:**
- Belimumab (anti-BLyS)
- Rituximab (anti-CD20) - off-label
- Voclosporin (lupus nephritis)

## Lupus Nephritis

**Classes (ISN/RPS):**
- Class I-II: Minimal/mesangial (mild)
- Class III: Focal (<50% glomeruli)
- Class IV: Diffuse (>50% glomeruli)
- Class V: Membranous
- Class VI: Advanced sclerosis

**Treatment:**
- Class III/IV: Mycophenolate OR cyclophosphamide
- Class V: Mycophenolate or cyclosporine
- Maintenance: Mycophenolate or azathioprine
- All need: ACE inhibitor or ARB

## Antiphospholipid Syndrome

**Diagnosis:**
- Clinical (thrombosis, pregnancy morbidity)
- Laboratory (anticardiolipin, B2-glycoprotein, lupus anticoagulant)
- Must be positive on 2 occasions 12+ weeks apart

**Treatment:**
- Anticoagulation (warfarin)
- INR target: 2-3 (first event)
- INR target: 3-4 (recurrent)
- Aspirin for obstetric APS
- Low-dose aspirin for asymptomatic aPL`,

      keyTerms: [
        { term: 'Mycophenolate', definition: 'Immunosuppressant used for lupus nephritis' },
        { term: 'Anticardiolipin', definition: 'Antibody associated with blood clots in APS' },
        { term: 'Lupus anticoagulant', definition: 'Antibody that causes abnormal clotting tests' },
        { term: 'ACE inhibitor', definition: 'Blood pressure medication that protects kidneys' },
      ],
      analogies: [
        'Lupus nephritis classes are like stages of kidney damage.',
        'Antiphospholipid syndrome is like your blood is too "sticky" and clots too easily.',
      ],
      examples: [
        'Patient with Class IV lupus nephritis started on mycophenolate',
        'Woman with SLE and DVT diagnosed with antiphospholipid syndrome',
        'Patient on hydroxychloroquine needs annual eye exam for retinopathy',
      ],
      clinicalNotes: 'Hydroxychloroquine retinopathy: Rare but serious. Annual screening after 5 years. Do NOT exceed 5mg/kg/day. Dose by actual body weight, not ideal weight. Cyclophosphamide: Hemorrhagic cystitis risk - use mesna and hydration. Fertility preservation important.',
    },

    4: {
      level: 4,
      summary: 'SLE increases cardiovascular risk significantly. Pregnancy requires careful planning. Flares can mimic pregnancy symptoms. Neonatal lupus is distinct from maternal lupus.',
      explanation: `## Cardiovascular Risk

**Risk in SLE:**
- 10-50x increased risk of MI
- Premature atherosclerosis
- Inflammation + traditional risk factors

**Risk Reduction:**
- Aggressive disease control
- Statin therapy (lower threshold)
- Blood pressure control
- Diabetes screening
- Smoking cessation (critical!)

## Pregnancy Considerations

**Planning:**
- Disease stable 6+ months before conception
- Continue: Hydroxychloroquine, azathioprine
- Stop: Mycophenolate, cyclophosphamide
- Low-dose aspirin starting at 12 weeks

**Flare vs. Preeclampsia:**
- Can be difficult to distinguish
- Both: Hypertension, proteinuria, edema
- Flare: Complement low, dsDNA high
- Preeclampsia: Normal labs

**Neonatal Lupus:**
- NOT SLE in baby
- Caused by maternal anti-Ro/SSA antibodies
- Rash (photodistributed), thrombocytopenia
- Congenital heart block (serious!)
- Usually resolves by 6 months
- Heart block is permanent

## Osteoporosis Prevention

**Risk Factors:**
- Glucocorticoids
- Premature ovarian failure
- Reduced activity from arthritis

**Prevention:**
- Calcium 1200mg + Vitamin D
- DEXA monitoring
- Bisphosphonates if indicated
- Minimize steroid dose

## Infection Risk

**Increased Risk:**
- Disease itself
- Immunosuppressants
- Asplenia (functional)
- Hypocomplementemia

**Vaccinations:**
- Give BEFORE immunosuppression if possible
- Inactivated: Safe
- Live: Avoid on immunosuppression
- Pneumococcal, influenza, hepatitis B recommended
- Avoid live vaccines if on >20mg prednisone`,

      keyTerms: [
        { term: 'Anti-Ro/SSA', definition: 'Antibody associated with neonatal lupus and congenital heart block' },
        { term: 'Congenital heart block', definition: "Baby's heart block caused by maternal antibodies" },
        { term: 'Premature atherosclerosis', definition: 'Early hardening of arteries from chronic inflammation' },
        { term: 'Hypocomplementemia', definition: 'Low complement levels - markers of disease activity' },
      ],
      analogies: [
        "Neonatal lupus is like the baby having a temporary reaction to mom's antibodies.",
        "Congenital heart block is like the baby's electrical system is damaged before birth.",
      ],
      examples: [
        'Pregnant SLE patient with anti-Ro antibodies - baby monitored for heart block',
        'Woman with active lupus deferred pregnancy until disease controlled',
        'Patient on chronic steroids develops osteoporosis - started on bisphosphonate',
      ],
      clinicalNotes: 'SLEDAI-2K measures disease activity. Damage measured by SLICC/ACR DI. QOL measured by LupusQoL or SF-36. Aim for low disease activity or remission (LLDAS). Damage accrual predicts mortality.',
    },

    5: {
      level: 5,
      summary: 'SLE management has evolved from symptomatic to targeted therapy. Belimumab was first FDA-approved biologic for SLE. Voclosporin improves renal outcomes in lupus nephritis.',
      explanation: `## Emerging Therapies

**Belimumab (Benlysta):**
- Anti-BLyS (B-cell activating factor)
- Subcutaneous or IV
- Indicated for autoantibody-positive SLE
- Reduces flares, steroid-sparing

**Voclosporin:**
- Calcineurin inhibitor
- Approved for lupus nephritis
- Better remission rates when added to MMF
- Kidney-specific benefit

**Anifrolumab:**
- Type I interferon receptor antagonist
- FDA-approved 2021
- Shows efficacy in SLE with skin/joint manifestations

**Rituximab:**
- Anti-CD20 (B-cell depletion)
- Widely used off-label
- Negative RCTs but clinical experience positive
- May work in specific phenotypes

## Treatment Targets

**Remission Definitions:**
- Clinical remission: No clinical activity
- Serologic remission: No activity + normal labs
- Complete remission: No activity on no treatment

**LLDAS (Lupus Low Disease Activity State):**
- SLEDAI-2K ≤4
- No new flares
- Physician PGA <1 (0-3 scale)
- Daily prednisone ≤7.5mg
- Well-tolerated immunosuppression

## Prognosis

**Improved Outcomes:**
- 5-year survival: >95%
- 10-year survival: >90%
- Better due to:
  - Earlier diagnosis
  - Better treatments
  - Dialysis/transplant for renal failure
  - Cardiovascular risk awareness

**Poor Prognostic Factors:**
- Renal involvement (especially Class IV)
- CNS involvement
- Hypocomplementemia
- High anti-dsDNA
- Low socioeconomic status
- Non-white race (healthcare access)`,

      keyTerms: [
        { term: 'BLyS', definition: 'B-Lymphocyte Stimulator - promotes B-cell survival' },
        { term: 'Type I interferon', definition: 'Inflammatory protein elevated in lupus' },
        { term: 'LLDAS', definition: 'Lupus Low Disease Activity State - treatment target' },
        { term: 'PGA', definition: "Physician Global Assessment - doctor's rating of disease activity" },
      ],
      analogies: [
        'BLyS is like fertilizer that helps problematic B-cells grow.',
        'Type I interferon is like a siren that keeps the immune system alarm blaring.',
      ],
      examples: [
        'Patient with frequent flares started on belimumab',
        'Lupus nephritis treated with voclosporin + MMF achieves remission',
        'Anti-dsDNA and low complement predict renal flare',
      ],
      clinicalNotes: 'Damage accrual is major determinant of mortality. SLICC/ACR Damage Index tracks irreversible organ damage. Every effort to prevent damage: minimize steroids, control disease, manage CV risk. Early diagnosis and treatment critical.',
    },
  },

  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    topics: ['rheumatology', 'lupus', 'SLE', 'autoimmune', 'connective-tissue'],
    systems: ['immune', 'musculoskeletal'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, shelf: ['rheumatology'] },
  },

  createdAt: '2025-01-28',
  updatedAt: '2025-01-28',
  version: 1,
  status: 'published',
};
