/**
 * Psoriasis (In-Depth)
 *
 * Th17/IL-23-driven chronic inflammatory dermatosis with systemic
 * comorbidities, biologic revolution, and modern treat-to-target approaches.
 */

import { EducationalContent } from '../../types';

export const psoriasisContent: EducationalContent = {
  id: 'derm-inflammatory-psoriasis',
  type: 'condition',
  name: 'Psoriasis',
  nameEs: 'Psoriasis',
  alternateNames: ['Plaque Psoriasis', 'Psoriasis Vulgaris'],

  levels: {
    1: {
      level: 1,
      summary: 'Psoriasis is a chronic condition where the immune system causes skin cells to grow too fast, creating thick, scaly patches that can be itchy or painful.',
      explanation: `## What Is Psoriasis?\n\nPsoriasis makes skin cells build up much faster than normal. Instead of shedding, they pile up into thick, red patches covered with silvery scales.\n\n## Common Locations\n- Elbows and knees\n- Scalp\n- Lower back\n- Nails\n\n## Types\n- **Plaque** (most common): raised red patches with silvery scales\n- **Guttate**: small drop-shaped spots, often after a sore throat\n- **Inverse**: smooth red patches in skin folds\n\n## Key Facts\n- Not contagious\n- Comes and goes in flares\n- Stress, cold weather, and infections can trigger flares\n- Treatments range from creams to pills to injections`,
      keyTerms: [
        { term: 'Psoriasis', definition: 'A condition where skin cells grow too fast, forming thick scaly patches' },
        { term: 'Plaque', definition: 'A raised, red patch of skin covered with silvery scales' },
        { term: 'Flare', definition: 'A period when psoriasis gets noticeably worse' },
      ],
      analogies: ['Skin cells normally renew every 28 days; in psoriasis they renew every 3-5 days, like a printer going too fast and jamming.'],
      examples: ['A person notices thick silvery patches on both elbows that itch and flake'],
      patientCounselingPoints: ['Psoriasis is not contagious.', 'Moisturize daily.', 'Many effective treatments are available.', 'Tell your doctor if your joints hurt.'],
    },
    2: {
      level: 2,
      summary: 'Psoriasis is an immune-mediated disease driven by T cells. Diagnosis is clinical, and treatments range from topicals to phototherapy to biologics depending on severity.',
      explanation: `## Clinical Features\n- Well-demarcated erythematous plaques with silvery scale\n- Auspitz sign: pinpoint bleeding when scale is removed\n- Koebner phenomenon: new lesions at sites of trauma\n- Nail changes: pitting, oil-drop discoloration, onycholysis\n\n## Types\n- Plaque (~80%)\n- Guttate (post-streptococcal)\n- Inverse (flexural)\n- Pustular (sterile pustules)\n- Erythrodermic (>90% BSA, medical emergency)\n\n## Comorbidities\n- Psoriatic arthritis (up to 30%)\n- Cardiovascular disease\n- Metabolic syndrome\n- Depression\n\n## Treatment Overview\n1. Topical: corticosteroids, vitamin D analogues, calcipotriol-betamethasone\n2. Phototherapy: narrowband UVB\n3. Systemic: methotrexate, cyclosporine, acitretin\n4. Biologics: anti-TNF, anti-IL-17, anti-IL-23`,
      keyTerms: [
        { term: 'Auspitz sign', definition: 'Pinpoint bleeding when psoriasis scale is removed' },
        { term: 'Koebner phenomenon', definition: 'New psoriasis lesions arising at sites of skin injury' },
        { term: 'Psoriatic arthritis', definition: 'Inflammatory joint disease in up to 30% of psoriasis patients' },
        { term: 'Guttate', definition: 'Small drop-shaped psoriasis often triggered by streptococcal pharyngitis' },
      ],
      analogies: ['Koebner phenomenon is like planting seeds of psoriasis wherever the skin is wounded.'],
      examples: ['A teenager develops widespread small psoriasis spots 2 weeks after strep throat (guttate psoriasis)'],
      clinicalNotes: 'Screen for psoriatic arthritis at every visit using PEST or CASPAR criteria. Erythrodermic psoriasis requires hospitalization.',
    },
    3: {
      level: 3,
      summary: 'Psoriasis is driven by the IL-23/Th17/IL-17 axis. PASI scoring guides therapy, and modern biologics (IL-17i, IL-23i) achieve PASI 90-100 in the majority of patients.',
      explanation: `## Immunopathogenesis\n- Trigger -> dendritic cell activation -> IL-23 production\n- IL-23 drives Th17 cell differentiation and survival\n- Th17 cells release IL-17A, IL-17F, IL-22\n- IL-17 activates keratinocytes: proliferation, chemokine/AMP release\n- TNF-alpha amplifies the inflammatory loop\n- Epidermal turnover: 28 days -> 3-5 days\n\n## PASI Scoring\n- Erythema, induration, desquamation across 4 body regions (0-72)\n- PASI 75: historical benchmark\n- PASI 90/100: achievable with modern biologics\n- BSA and DLQI also used for treatment decisions\n\n## Genetics\n- HLA-Cw6: strongest association (early-onset type I)\n- PSORS1-9 susceptibility loci\n- IL-23R, IL-12B, TNFAIP3 polymorphisms\n\n## Histopathology\n- Acanthosis with regular elongation of rete ridges\n- Absent granular layer\n- Confluent parakeratosis\n- Munro microabscesses (neutrophils in stratum corneum)\n- Dilated tortuous capillaries in dermal papillae`,
      keyTerms: [
        { term: 'IL-23/IL-17 axis', definition: 'Central immune pathway in psoriasis linking dendritic cells to keratinocyte activation' },
        { term: 'PASI', definition: 'Psoriasis Area Severity Index, scored 0-72' },
        { term: 'HLA-Cw6', definition: 'MHC class I allele strongly associated with early-onset psoriasis' },
        { term: 'Munro microabscesses', definition: 'Neutrophil collections in the stratum corneum, pathognomonic of psoriasis' },
      ],
      analogies: ['The IL-23/IL-17 axis is a feedback loop like a microphone too close to a speaker, self-amplifying the inflammatory signal.'],
      examples: ['A biopsy of a psoriatic plaque shows acanthosis, absent granular layer, and Munro microabscesses'],
      clinicalNotes: 'Treat-to-target: aim for PASI 90 or BSA < 1%. IL-23 inhibitors show superior long-term durability versus IL-17 inhibitors.',
    },
    4: {
      level: 4,
      summary: 'Biologic selection in psoriasis depends on comorbidities, speed of onset, and durability. IL-23 inhibitors offer the best durability; bimekizumab (dual IL-17A/F) achieves the highest absolute PASI 90/100 rates.',
      explanation: `## Biologic Classes\n\n**Anti-TNF:** adalimumab, infliximab, etanercept, certolizumab\n- PASI 75 ~60-80%; loss of response common\n\n**Anti-IL-12/23:** ustekinumab (anti-p40)\n- PASI 75 ~70%; every-12-week dosing\n\n**Anti-IL-17:**\n- Secukinumab: PASI 90 ~60-70%\n- Ixekizumab: PASI 90 ~70%; fastest onset\n- Brodalumab (anti-IL-17RA): PASI 100 ~40%; REMS for suicidal ideation\n- Bimekizumab (dual IL-17A/F): PASI 90 ~85%, PASI 100 ~60% (BE READY)\n\n**Anti-IL-23 (p19):**\n- Guselkumab: PASI 90 ~70-80% at week 48; durable off-treatment responses\n- Risankizumab: PASI 90 ~75%; every-12-week dosing; approved for PsA, Crohn\n- Tildrakizumab: PASI 75 ~64%\n\n## Oral Small Molecules\n- Deucravacitinib (TYK2i): PASI 75 ~58%; superior to apremilast; no JAK1/2 boxed warning\n- Apremilast (PDE4i): PASI 75 ~33%; weight loss, GI effects\n\n## Psoriatic Arthritis Considerations\n- IL-17i and anti-TNF approved for both skin and joints\n- IL-23i: guselkumab and risankizumab approved for PsA; axial response debated\n- JAK inhibitors (tofacitinib, upadacitinib) for PsA but carry boxed warning\n\n## Cardiovascular Risk Management\n- Psoriasis = independent CV risk factor\n- Biologic therapy may reduce aortic vascular inflammation (VEGF-Cardia study)\n- Screen lipids, glucose, blood pressure`,
      keyTerms: [
        { term: 'Bimekizumab', definition: 'Dual IL-17A/F inhibitor with highest PASI 90/100 rates; oral candidiasis risk 7-16%' },
        { term: 'Risankizumab', definition: 'Anti-IL-23p19 with every-12-week dosing and durable responses' },
        { term: 'Deucravacitinib', definition: 'First oral TYK2 inhibitor for psoriasis without JAK1/2/3 boxed warning' },
        { term: 'TYK2', definition: 'Tyrosine kinase 2; mediates IL-23 and IL-12 signaling downstream of their receptors' },
      ],
      analogies: ['IL-23 inhibitors cut the head of the snake: blocking the upstream signal silences the entire downstream IL-17 cascade.'],
      examples: ['A patient with psoriasis and Crohn disease is started on risankizumab (approved for both)'],
      clinicalNotes: 'Head-to-head: bimekizumab > secukinumab (BE RADIANT); risankizumab ~= secukinumab at 16 wk but superior at 52 wk (IMMerge). IL-23i show durable responses even after withdrawal.',
    },
    5: {
      level: 5,
      summary: 'Frontier psoriasis research includes oral IL-17 pathway inhibitors, personalized endotyping (HLA-Cw6-guided therapy), tissue-resident memory T-cell (TRM) biology explaining relapse, and emerging bispecifics targeting multiple cytokines simultaneously.',
      explanation: `## Tissue-Resident Memory T Cells (TRM)\n- CD8+ TRM cells persist in resolved psoriasis lesions\n- Express IL-17A and IL-22 upon restimulation\n- Explain fixed-site relapse after treatment cessation\n- Anti-IL-23 may deplete TRM more effectively than anti-IL-17 (explaining durability)\n\n## Oral Pipeline\n- Oral IL-17A inhibitors: izokibep (IL-17A nanobody; SC but exploring oral)\n- JNJ-77242113 (oral peptide IL-23R antagonist): PASI 75 ~79% at 16 wk in phase 2\n- Next-gen TYK2 inhibitors with improved selectivity\n\n## Personalized Medicine\n- HLA-Cw6+ patients respond better to ustekinumab\n- Transcriptomic profiling may identify IL-17- vs IL-23-dominant endotypes\n- Obese patients: weight-based dosing, consider weight loss as adjunct\n\n## Bispecific Approaches\n- Dual IL-17A/TNF bispecifics in preclinical development\n- Rationale: combine rapid onset (IL-17) with joint efficacy (TNF)\n\n## Psoriasis as Systemic Disease\n- Neutrophil extracellular traps (NETs) link psoriasis to atherosclerosis\n- IL-17 promotes vascular endothelial dysfunction\n- Biologic therapy reduces coronary artery plaque burden (VIP-S trial)\n- Liver: non-alcoholic steatohepatitis prevalence increased\n\n## Special Populations\n- Pediatric: secukinumab, ixekizumab, ustekinumab approved for children\n- Pregnancy: certolizumab (no Fc, minimal placental transfer)\n- HIV-associated psoriasis: paradoxical flare during IRIS; biologics with caution`,
      keyTerms: [
        { term: 'TRM cells', definition: 'Tissue-resident memory T cells persisting in healed psoriatic skin, explaining fixed-site relapse' },
        { term: 'JNJ-77242113', definition: 'Oral peptide antagonist of the IL-23 receptor showing high efficacy in phase 2' },
        { term: 'NETs', definition: 'Neutrophil extracellular traps linking psoriatic inflammation to cardiovascular disease' },
        { term: 'Certolizumab', definition: 'PEGylated anti-TNF Fab fragment with minimal placental transfer, preferred in pregnancy' },
      ],
      analogies: ['TRM cells are sleeper agents left behind in healed skin, ready to reignite inflammation when triggered.'],
      examples: ['A psoriasis patient achieving PASI 100 on guselkumab remains clear 6 months after drug withdrawal, attributed to TRM depletion'],
      clinicalNotes: 'TRM biology explains why IL-23 inhibitors produce more durable responses: they may deplete the upstream TRM pool rather than merely blocking effector cytokines. Oral IL-23R antagonists could disrupt the biologic-dominant paradigm.',
    },
  },

  media: [],
  citations: [
    { id: 'pso-ref-1', type: 'textbook', title: 'Dermatology (Bolognia)', authors: ['Bolognia, J.', 'Schaffer, J.', 'Cerroni, L.'], source: 'Elsevier', chapter: 'Psoriasis' },
    { id: 'pso-ref-2', type: 'article', title: 'Bimekizumab vs secukinumab (BE RADIANT)', source: 'NEJM', url: 'https://doi.org/10.1056/NEJMoa2102383' },
  ],
  crossReferences: [
    { targetId: 'derm-inflammatory-eczema-ad', targetType: 'condition', relationship: 'sibling', label: 'Eczema / Atopic Dermatitis' },
    { targetId: 'dermatology-inflammatory-skin', targetType: 'topic', relationship: 'parent', label: 'Inflammatory Skin Conditions' },
  ],
  tags: {
    systems: ['integumentary', 'immune', 'musculoskeletal'],
    topics: ['dermatology', 'psoriasis', 'biologics', 'immunology', 'rheumatology'],
    keywords: ['IL-17', 'IL-23', 'bimekizumab', 'risankizumab', 'TYK2', 'PASI', 'psoriatic arthritis'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, shelf: ['dermatology', 'medicine', 'rheumatology'] },
  },

  createdAt: '2025-01-30',
  updatedAt: '2025-01-30',
  version: 1,
  status: 'published',
};
