/** Lymphoma — EducationalContent */
import { oncEdu } from '../helpers';

export const lymphoma = oncEdu({
  id: 'onc-lymphoma', name: 'Lymphoma', nameEs: 'Linfoma',
  altNames: ['Hodgkin lymphoma', 'Non-Hodgkin lymphoma', 'NHL', 'HL'],
  l1: 'Lymphoma is cancer that starts in the lymphatic system, which is part of your immune system. There are two main types: Hodgkin lymphoma (often curable) and non-Hodgkin lymphoma (many subtypes). Symptoms include painless swollen lymph nodes, night sweats, fevers, and unexplained weight loss (B symptoms).',
  l2: 'Hodgkin lymphoma (HL): bimodal age distribution (20s and >55); Reed-Sternberg cells on biopsy; 85-90% cure rate. Non-Hodgkin lymphoma (NHL): more common; subtypes include diffuse large B-cell lymphoma (DLBCL, most common aggressive), follicular lymphoma (most common indolent), Burkitt lymphoma, mantle cell lymphoma, and marginal zone lymphoma. Staging uses the Lugano classification with PET/CT.',
  l3: 'HL: classical (nodular sclerosis most common, mixed cellularity, lymphocyte-rich, lymphocyte-depleted) and nodular lymphocyte-predominant. Treatment: early favorable: 2 cycles ABVD + 20 Gy IFRT; early unfavorable: 4 ABVD + 30 Gy; advanced: 6 ABVD or BV-AVD (ECHELON-1). DLBCL: R-CHOP x6 is standard; double-hit/triple-hit (MYC + BCL2/BCL6) receive DA-EPOCH-R. Follicular: watch-and-wait for low burden; bendamustine-rituximab or R-CHOP for symptomatic; lenalidomide-rituximab (RELEVANCE).',
  l4: 'HL: PET-adapted therapy (RATHL, GHSG HD18); brentuximab vedotin replaces bleomycin in advanced stage (ECHELON-1: 6-yr PFS 82.3%). Relapsed HL: checkpoint inhibitors (nivolumab, pembrolizumab) achieve 65-70% ORR. DLBCL: polatuzumab vedotin + R-CHP replacing R-CHOP (POLARIX: superior PFS); CAR-T (axi-cel, liso-cel, tisa-cel) for relapsed disease, now moved to second-line (ZUMA-7, TRANSFORM). Follicular: mosunetuzumab (bispecific) for relapsed; PI3K inhibitors largely supplanted by bispecifics due to toxicity.',
  l5: 'DLBCL: glofitamab and epcoritamab (CD20xCD3 bispecifics) active in multiply relapsed disease; loncastuximab tesirine (CD19 ADC) for third-line+. COO classification (GCB vs ABC) by gene expression less prognostic in R-CHOP era but guides trial enrollment. HL: favezelimab + pembrolizumab for checkpoint-refractory HL. T-cell lymphomas: brentuximab vedotin + CHP for CD30+ PTCL (ECHELON-2); romidepsin and belinostat for relapsed. CAR-T manufacturing advances (allogeneic, in vivo CAR-T) aim to improve access. Bispecific antibodies challenging CAR-T in sequencing algorithms due to off-the-shelf availability.',
  tags: { systems: ['hematologic', 'lymphatic'], topics: ['pathology', 'therapeutics', 'immunology'], keywords: ['Hodgkin', 'non-Hodgkin', 'DLBCL', 'follicular', 'Reed-Sternberg', 'R-CHOP', 'CAR-T', 'bispecific'], clinicalRelevance: 'critical', examRelevance: { usmle: true, nbme: true, shelf: ['medicine'] } },
  crossRefs: [
    { targetId: 'onc-leukemia', targetType: 'condition', relationship: 'sibling', label: 'Leukemia' },
    { targetId: 'onc-immunotherapy', targetType: 'topic', relationship: 'related', label: 'Immunotherapy' },
    { targetId: 'onc-chemotherapy-principles', targetType: 'topic', relationship: 'related', label: 'Chemotherapy Principles' },
  ],
});
