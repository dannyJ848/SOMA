/**
 * Rheumatoid Arthritis
 *
 * Chronic autoimmune inflammatory arthritis affecting joints and systemic organs.
 */

import { EducationalContent } from '../../types';

export const raContent: EducationalContent = {
  id: 'rheumatology-rheumatoid-arthritis',
  type: 'topic',
  name: 'Rheumatoid Arthritis',
  alternateNames: ['RA', 'Rheumatoid Disease'],

  levels: {
    1: {
      level: 1,
      summary: "Rheumatoid arthritis is a disease that causes pain, swelling, and stiffness in your joints. It happens when your immune system mistakenly attacks your joints.",
      explanation: `## What Is Rheumatoid Arthritis?

RA is an autoimmune disease where your body's defense system attacks your joints instead of protecting them. This causes inflammation that can damage joints over time.

## What Does It Feel Like?

- Joint pain and swelling
- Stiffness, especially in the morning
- Warm, red joints
- Same joints on both sides affected
- Fatigue (feeling very tired)
- Low-grade fever

## Which Joints Are Affected?

**Most Common:**
- Hands (knuckles, middle joints)
- Wrists
- Feet
- Knees
- Ankles

**Can Also Affect:**
- Shoulders
- Elbows
- Hips
- Neck

## What Causes It?

- Immune system mistake
- Genetics (runs in families)
- Smoking increases risk
- More common in women
- Usually starts between 30-60 years old

## Treatment

- Medications to reduce inflammation
- Medications to slow disease
- Exercise to keep joints moving
- Rest during flare-ups
- Joint protection techniques
- Sometimes surgery for damaged joints`,

      keyTerms: [
        { term: 'Autoimmune', definition: "When immune system attacks body's own healthy cells" },
        { term: 'Inflammation', definition: 'Redness, swelling, heat, and pain in affected area' },
        { term: 'Flare-up', definition: 'Period when symptoms get worse suddenly' },
        { term: 'Stiffness', definition: 'Joints feel tight and hard to move' },
      ],
      analogies: [
        "RA is like your body's security system turning against you.",
        'Morning stiffness is like your joints being frozen when you wake up.',
      ],
      examples: [
        'Woman with swollen, painful hand joints in the morning',
        'Person with fatigue and joint pain on both sides',
        'Someone whose knuckles are swollen and warm to touch',
      ],
    },

    2: {
      level: 2,
      summary: 'RA is a chronic inflammatory arthritis causing symmetric joint destruction. Early diagnosis and treatment with DMARDs is essential to prevent irreversible damage.',
      explanation: `## Clinical Features

**Typical Presentation:**
- Insidious onset (weeks to months)
- Symmetric, small joint polyarthritis
- Morning stiffness >1 hour
- Improvement with activity
- Constitutional symptoms: fatigue, malaise, low fever

**Joint Distribution:**
- Hands: MCP, PIP joints (spares DIP)
- Wrists
- Knees, ankles, MTP joints
- May involve: shoulders, hips, cervical spine

**Extra-Articular Manifestations:**
- Rheumatoid nodules (extensor surfaces)
- Pulmonary nodules, interstitial lung disease
- Pericarditis, myocarditis
- Scleritis, episcleritis
- Felty syndrome (RA + splenomegaly + neutropenia)

## Diagnosis

**ACR/EULAR 2010 Criteria:**
- ≥6 points classified as definite RA
- Joint involvement (0-5 points)
- Serology (RF, anti-CCP) (0-3 points)
- Acute phase reactants (CRP, ESR) (0-1 point)
- Duration of symptoms (0-1 point)

**Labs:**
- Rheumatoid factor (RF): 70-80% positive
- Anti-CCP: More specific, predicts erosions
- ESR, CRP: Elevated in active disease
- Anemia of chronic disease
- Positive ANA in 30-40%

**Imaging:**
- X-rays: Periarticular osteopenia, erosions
- Ultrasound/MRI: Earlier detection of synovitis`,

      keyTerms: [
        { term: 'MCP', definition: 'Metacarpophalangeal joints - knuckles' },
        { term: 'PIP', definition: 'Proximal interphalangeal joints - middle finger joints' },
        { term: 'DIP', definition: 'Distal interphalangeal joints - joints closest to fingernails' },
        { term: 'Anti-CCP', definition: 'Antibody highly specific for RA - predicts severe disease' },
      ],
      analogies: [
        'Anti-CCP is like a fingerprint that confirms RA is the culprit.',
        'Morning stiffness >1 hour is like your joints need time to "warm up" to work.',
      ],
      examples: [
        'Woman with MCP/PIP swelling and morning stiffness for 2 hours',
        'Patient with subcutaneous nodules on elbows (rheumatoid nodules)',
        'Anti-CCP positive patient develops erosions faster than CCP-negative',
      ],
      clinicalNotes: 'Treat-to-target approach: aim for remission or low disease activity. Measure with DAS28, CDAI, or SDAI scores every 3 months. Early aggressive treatment prevents joint damage. Window of opportunity: first 3-6 months.',
    },

    3: {
      level: 3,
      summary: 'DMARD therapy is cornerstone of RA treatment. Methotrexate is first-line. Biologics and targeted synthetic DMARDs for refractory disease.',
      explanation: `## Pharmacologic Treatment

**NSAIDs (Symptomatic Relief):**
- Naproxen, ibuprofen, celecoxib
- Bridge until DMARDs work
- Do not prevent joint damage

**Glucocorticoids:**
- Prednisone 5-10mg daily
- Bridge therapy
- Lowest effective dose
- Avoid long-term if possible

**Conventional Synthetic DMARDs:**

*Methotrexate (First-Line):*
- 15-25mg weekly
- Folic acid supplementation
- Monitor: CBC, LFTs, renal
- Contraindicated in pregnancy

*Leflunomide:*
- 20mg daily
- Alternative if MTX intolerant
- Teratogenic - washout with cholestyramine

*Hydroxychloroquine:*
- Mild disease
- Safe in pregnancy
- Regular eye exams (retinopathy risk)

*Sulfasalazine:*
- Mild-moderate disease
- Can combine with MTX

**Biologic DMARDs:**

*TNF Inhibitors:*
- Etanercept, adalimumab, infliximab, golimumab, certolizumab
- Used with MTX (better response)
- Screen for TB, hepatitis B before starting

*Non-TNF Biologics:*
- Abatacept (CTLA4-Ig)
- Rituximab (anti-CD20)
- Tocilizumab (anti-IL-6)
- Sarilumab (anti-IL-6)

**Targeted Synthetic DMARDs:**
- Tofacitinib (JAK inhibitor)
- Upadacitinib (JAK1 selective)`,

      keyTerms: [
        { term: 'DMARD', definition: 'Disease-Modifying Antirheumatic Drug - slows RA progression' },
        { term: 'Treat-to-target', definition: 'Adjusting treatment until remission or low disease activity' },
        { term: 'DAS28', definition: 'Disease Activity Score using 28 joints - measures RA severity' },
        { term: 'Washout', definition: 'Removing drug from body with special procedures' },
      ],
      analogies: [
        'DMARDs are like hitting the brakes on disease progression.',
        'Treat-to-target is like adjusting the thermostat until the temperature is right.',
      ],
      examples: [
        'Patient started on MTX 20mg weekly with folic acid',
        'Anti-TNF started after MTX fails to control disease',
        'Patient with positive TB screening needs TB treatment before biologic',
      ],
      clinicalNotes: 'MTX is anchor drug - 70% achieve adequate response. Add hydroxychloroquine and sulfasalazine (triple therapy) before biologics. Biologics are contraindicated in active infection. Live vaccines avoided on biologics. Screen for hepatitis B before starting.',
    },

    4: {
      level: 4,
      summary: 'RA increases cardiovascular mortality similar to diabetes. Aggressive cardiovascular risk reduction is essential. Comorbidities include osteoporosis, infections, and lung disease.',
      explanation: `## Cardiovascular Risk

**Risk in RA:**
- 2x increased CV mortality
- Similar risk as diabetes
- Inflammation drives atherosclerosis

**Risk Reduction:**
- Aggressive inflammation control
- Statin therapy (lower threshold)
- Blood pressure control
- Smoking cessation
- Diabetes screening
- Aspirin consideration

## Osteoporosis Management

**Risk Factors:**
- Glucocorticoid use
- Inflammation itself
- Reduced physical activity
- Postmenopausal status

**Prevention/Treatment:**
- Calcium 1200mg + Vitamin D daily
- Bisphosphonates (alendronate)
- Consider steroids >3 months
- DEXA monitoring

## Infection Risk

**Increased Risk:**
- Biologics (especially TNF inhibitors)
- High-dose steroids
- Disease activity itself

**Vaccinations:**
- Give BEFORE biologics if possible
- Inactivated: Safe (flu, pneumonia, shingles)
- Live: Avoid on biologics (MMR, Zostavax)
- Hepatitis B: Screen before biologics
- Pneumocystis prophylaxis: Consider with high-dose steroids

## Pregnancy Considerations

**Safe in Pregnancy:**
- Sulfasalazine
- Hydroxychloroquine
- Azathioprine
- Low-dose prednisone

**Contraindicated:**
- Methotrexate (teratogenic)
- Leflunomide (teratogenic)
- Mycophenolate
- Most biologics (limited data, generally avoid)

**Planning:**
- Stop teratogenic drugs 3+ months before conception
- Continue safe DMARDs to control disease
- Active disease worse than most meds`,

      keyTerms: [
        { term: 'DEXA', definition: 'Dual-energy X-ray absorptiometry - bone density scan' },
        { term: 'Teratogenic', definition: 'Causes birth defects' },
        { term: 'Inactivated vaccine', definition: 'Killed vaccine - safe in immunocompromised' },
        { term: 'Live vaccine', definition: 'Weakened but live germ - dangerous in immunocompromised' },
      ],
      analogies: [
        'Inflammation is like fire that damages your arteries from the inside.',
        'Live vaccines are like bringing fire into a fireworks factory.',
      ],
      examples: [
        'RA patient with chest pain needs cardiac workup (high CV risk)',
        'Woman on MTX planning pregnancy - stop 3 months before trying',
        'Patient on high-dose steroids gets PJP prophylaxis',
      ],
      clinicalNotes: 'RA-associated lung disease: ILD most common. Present with dyspnea, cough. High-resolution CT for diagnosis. Methotrexate can cause pneumonitis - distinguish from infection. MTX lung: rare but potentially serious.',
    },

    5: {
      level: 5,
      summary: 'RA treatment has evolved from symptom control to remission induction. Combination therapy and biologics have transformed outcomes. Personalized medicine approaches emerging.',
      explanation: `## Treatment Evolution

**Pre-DMARD Era:**
- NSAIDs, rest, splinting
- Joint deformities common
- High disability rates

**MTN Era (1980s-1990s):**
- Methotrexate as anchor drug
- Better outcomes but many still progressed

**Biologic Era (1998+):**
- TNF inhibitors revolutionized care
- Combination therapy possible
- Remission achievable

**Current Era:**
- Treat-to-target standard
- Multiple biologic classes
- JAK inhibitors (oral)
- Personalized approaches

## Refractory RA

**Definition:**
- Failure of 2+ TNF inhibitors
- OR failure of TNF + non-TNF biologic
- OR failure of JAK inhibitor

**Approach:**
- Reconfirm diagnosis
- Assess adherence
- Consider comorbidities
- Switch mechanism of action
- Combination therapy (investigational)

## Emerging Therapies

**Targeted Synthetic:**
- Upadacitinib (JAK1 selective)
- Filgotinib (JAK1 selective)
- BMS-986165 (TYK2 inhibitor)

**Biologics:**
- Sarilumab (IL-6 inhibitor)
- Rituximab (B-cell depletion)
- New targets in development

**Biosimilars:**
- Less expensive versions of biologics
- Same mechanism, similar efficacy
- Improving access globally

## Controversies

**TNF Inhibitor Discontinuation:**
- Can stop if in remission?
- Some maintain remission
- Others flare - unpredictable
- Tapering vs. stopping completely

**Glucocorticoids:**
- Lowest effective dose
- Bridge therapy
- Some advocate never using steroids
- Others accept for certain situations`,

      keyTerms: [
        { term: 'Biosimilar', definition: 'Copy of biologic drug - cheaper but similar' },
        { term: 'Adherence', definition: 'Taking medications as prescribed' },
        { term: 'Comorbidities', definition: 'Other medical conditions happening at same time' },
      ],
      analogies: [
        'Biosimilars are like generic versions of expensive brand-name biologics.',
        'Tapering is like slowly walking down a hill instead of jumping off.',
      ],
      examples: [
        'Patient in remission for 2 years - attempt taper of biologic',
        'Refractory RA treated with rituximab after TNF failure',
        'Biosimilar adalimumab reduces cost while maintaining efficacy',
      ],
      clinicalNotes: 'ACR/EULAR remission criteria: Tender/swollen joints ≤1, CRP ≤1 mg/dL, patient global assessment ≤1 (0-10 scale). Boolean vs. index-based definitions. Remission associated with better long-term outcomes and less radiographic progression.',
    },
  },

  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    topics: ['rheumatology', 'arthritis', 'autoimmune', 'DMARD', 'inflammation'],
    systems: ['musculoskeletal', 'immune'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, shelf: ['rheumatology'] },
  },

  createdAt: '2025-01-28',
  updatedAt: '2025-01-28',
  version: 1,
  status: 'published',
};
