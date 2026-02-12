/**
 * Systemic Lupus Erythematosus - Comprehensive Educational Content
 *
 * Multisystem autoimmune disease with diverse clinical manifestations
 * and complex immunologic features.
 */

import { EducationalContent } from '../../types';

export const systemicLupusContent: EducationalContent = {
  id: 'condition-systemic-lupus',
  type: 'condition',
  name: 'Systemic Lupus Erythematosus',
  alternateNames: ['SLE', 'Lupus', 'Systemic Lupus'],
  hpoId: 'HP:0002725',

  levels: {
    1: {
      level: 1,
      summary: 'Systemic lupus erythematosus (SLE or lupus) is an autoimmune disease where the immune system attacks healthy tissues, causing inflammation and damage in various parts of the body.',
      explanation: `Lupus is a disease where your immune system becomes overactive and attacks your own body.

**What Happens:**
- Your immune system creates antibodies against your own tissues
- This causes inflammation in different body parts
- It can affect skin, joints, kidneys, heart, and other organs

**Common Symptoms:**
- Butterfly-shaped rash across nose and cheeks
- Joint pain and swelling
- Extreme fatigue
- Sun sensitivity (rash after sun exposure)
- Fever without infection
- Hair loss
- Mouth sores

**Who Gets Lupus:**
- Mostly women (9 out of 10 patients)
- Usually starts between ages 15-45
- More common in African American, Hispanic, and Asian women

**Treatment:**
- Medicines to calm the immune system
- Sun protection
- Regular monitoring
- Most people with lupus can live normal lives with treatment`,
      keyTerms: [
        { term: 'autoimmune', definition: 'When the immune system attacks the body' },
        { term: 'butterfly rash', definition: 'Red rash across cheeks and nose, a hallmark of lupus' },
        { term: 'antibodies', definition: 'Proteins that normally fight infections but attack body in lupus' },
      ],
      analogies: [
        'Your immune system is like an army that normally defends against invaders. In lupus, it gets confused and attacks your own territory.',
      ],
      examples: [
        'A young woman gets a rash on her face after a day at the beach and feels extremely tired.',
        'A patient with lupus takes medication daily and sees her doctor regularly to stay healthy.',
      ],
    },
    2: {
      level: 2,
      summary: 'SLE is a multisystem autoimmune disease diagnosed by clinical and laboratory criteria; treatment depends on organ involvement and ranges from NSAIDs to immunosuppressants.',
      explanation: `SLE is a complex autoimmune disease with variable presentation and course.

**Diagnostic Criteria (2019 EULAR/ACR):**
- Entry criterion: ANA ≥1:80
- Clinical criteria: Fever, synovitis, other clinical domains
- Immunologic criteria: Anti-dsDNA, anti-Sm, antiphospholipid, low complement

**Clinical Manifestations:**
- Constitutional: Fatigue, fever, weight loss
- Mucocutaneous: Malar rash, discoid rash, photosensitivity, oral ulcers
- Musculoskeletal: Arthralgias, arthritis, myalgias
- Renal: Lupus nephritis (proteinuria, hematuria)
- Hematologic: Anemia, leukopenia, thrombocytopenia
- Neurologic: Seizures, psychosis, cognitive dysfunction

**Laboratory Findings:**
- ANA: Present in 95-98%
- Anti-dsDNA: Specific, correlates with disease activity
- Anti-Sm: Highly specific
- Low complement (C3, C4): Indicates active disease

**Treatment:**
- Mild disease: NSAIDs, antimalarials (hydroxychloroquine)
- Moderate-severe: Glucocorticoids, immunosuppressants (mycophenolate, azathioprine)
- Organ-threatening: Cyclophosphamide, rituximab, belimumab`,
      keyTerms: [
        { term: 'ANA', definition: 'Antinuclear antibody; screening test for lupus' },
        { term: 'lupus nephritis', definition: 'Kidney inflammation from lupus; major cause of morbidity' },
        { term: 'hydroxychloroquine', definition: 'Antimalarial drug; cornerstone of lupus treatment' },
      ],
    },
    3: {
      level: 3,
      summary: 'SLE management requires monitoring disease activity and adjusting therapy; hydroxychloroquine is foundational; lupus nephritis requires aggressive treatment to prevent renal failure.',
      explanation: `Comprehensive SLE management addresses disease activity and organ-specific manifestations.

**Hydroxychloroquine:**
- Benefits all SLE patients (improves survival)
- Reduces flares, thrombosis, damage accrual
- Monitoring: Annual eye exam after 5 years

**Lupus Nephritis (LN):**
- Class I-VI based on biopsy
- Class III/IV (proliferative): Most aggressive treatment
- Induction: Mycophenolate or cyclophosphamide + steroids
- Maintenance: Mycophenolate or azathioprine
- Goal: Complete renal response (proteinuria <0.5 g/day)

**Neuropsychiatric SLE:**
- Differential diagnosis: Infection, medication, metabolic
- Treatment: High-dose steroids, immunosuppression
- Antiphospholipid syndrome association

**Antiphospholipid Syndrome (APS):**
- Thrombosis, pregnancy morbidity
- Lupus anticoagulant, anticardiolipin, anti-β2GPI
- Treatment: Anticoagulation (warfarin or DOAC debated)`,
      keyTerms: [
        { term: 'mycophenolate', definition: 'Immunosuppressant used for lupus nephritis induction/maintenance' },
        { term: 'belimumab', definition: 'Anti-BLyS monoclonal antibody approved for SLE' },
        { term: 'proliferative nephritis', definition: 'Class III/IV lupus nephritis; requires aggressive treatment' },
      ],
    },
    4: {
      level: 4,
      summary: 'SLE treatment aims for remission or low disease activity; biologics (belimumab, anifrolumab) have expanded options; pregnancy planning requires medication adjustment; comorbidities require proactive management.',
      explanation: `Advanced SLE management integrates disease control with comorbidity management.

**Treatment Targets:**
- Remission: No clinical activity, no immunosuppressants (steroids ≤5 mg)
- Low disease activity: Acceptable alternative target
- Prevent damage accrual

**Biologic Therapies:**
- Belimumab: Anti-BLyS, reduces B cells; mild-moderate disease
- Anifrolumab: Anti-IFN-alpha receptor; FDA approved 2021
- Rituximab: Off-label; for refractory disease
- Voclosporin: Calcineurin inhibitor for lupus nephritis

**Pregnancy in SLE:**
- Plan during quiescent disease
- Continue hydroxychloroquine, azathioprine
- Discontinue mycophenolate, cyclophosphamide, methotrexate
- Monitor for preeclampsia, flare, neonatal lupus
- Anti-Ro/La: Fetal echocardiogram monitoring

**Comorbidities:**
- Cardiovascular disease: Leading cause of death; aggressive risk factor modification
- Osteoporosis: Steroid and disease-related; calcium, vitamin D, bisphosphonates
- Infections: Pneumococcal, influenza, HPV vaccination`,
      keyTerms: [
        { term: 'anifrolumab', definition: 'Anti-IFN-alpha receptor antibody for SLE' },
        { term: 'voclosporin', definition: 'Calcineurin inhibitor approved for lupus nephritis' },
        { term: 'neonatal lupus', definition: 'Passive transfer of anti-Ro/La; can cause heart block' },
      ],
    },
    5: {
      level: 5,
      summary: 'Expert SLE management integrates personalized treatment, pregnancy planning, and aggressive cardiovascular risk reduction; new biologics have expanded treatment options for refractory disease.',
      explanation: `Comprehensive SLE care addresses complex disease manifestations and emerging therapeutics.

**Refractory Disease:**
- Definitions vary; persistent activity despite standard therapy
- Options: Rituximab, obinutuzumab, higher-dose cyclophosphamide
- Clinical trial enrollment
- Consider non-adherence, infection mimicking flare

**Complement Deficiency:**
- Classical pathway (C1q, C4, C2) deficiency: High SLE risk
- Different clinical phenotype: Less renal, more infection risk

**Type I Interferon:**
- Central to SLE pathogenesis
- Anifrolumab blocks IFN-alpha receptor
- Plasmacytoid dendritic cells produce IFN-alpha

**Cardiovascular Disease:**
- 2-5x increased risk of MI, stroke
- Accelerated atherosclerosis
- Screen: Lipids, BP, glucose; treat per guidelines
- Aspirin for high-risk patients

**Mortality:**
- Early: Active disease, infection
- Late: Cardiovascular disease, malignancy
- Improved survival with modern treatment
- Racial disparities persist

**Future Directions:**
- Targeted B-cell therapies
- T-cell directed therapies
- JAK inhibitors
- Complement inhibitors`,
      keyTerms: [
        { term: 'obinutuzumab', definition: 'Anti-CD20 antibody; studied in refractory lupus nephritis' },
        { term: 'type I interferon', definition: 'Key cytokine in SLE pathogenesis' },
        { term: 'plasmacytoid dendritic cell', definition: 'Major source of IFN-alpha in SLE' },
      ],
    },
  },

  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    systems: ['immune', 'multisystem'],
    topics: ['autoimmune', 'lupus', 'connective tissue'],
    keywords: ['lupus', 'SLE', 'autoimmune', 'ANA'],
    clinicalRelevance: 'high',
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default systemicLupusContent;
