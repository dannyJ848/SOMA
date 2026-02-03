/** Leukemia — EducationalContent */
import { oncEdu } from '../helpers';

export const leukemia = oncEdu({
  id: 'onc-leukemia', name: 'Leukemia', nameEs: 'Leucemia',
  altNames: ['Blood cancer', 'Acute and chronic leukemia'],
  l1: 'Leukemia is cancer of the blood and bone marrow. The bone marrow makes too many abnormal white blood cells that do not work properly. There are fast-growing (acute) and slow-growing (chronic) types. Symptoms include fatigue, frequent infections, easy bruising, and fevers.',
  l2: 'Four main types: Acute Lymphoblastic Leukemia (ALL, most common childhood cancer), Acute Myeloid Leukemia (AML, most common acute leukemia in adults), Chronic Lymphocytic Leukemia (CLL, most common adult leukemia), and Chronic Myeloid Leukemia (CML, associated with the Philadelphia chromosome). Diagnosis requires CBC, peripheral smear, bone marrow biopsy, and flow cytometry.',
  l3: 'ALL: classified as B-cell or T-cell; Philadelphia chromosome (BCR-ABL) in 25% of adults portends worse prognosis but is targetable with TKIs. AML: classified by WHO 2022 using genetic abnormalities (t(8;21), inv(16), t(15;17) APL, NPM1, FLT3-ITD, TP53). CLL: Rai/Binet staging; 17p deletion and TP53 mutation predict poor response to chemoimmunotherapy. CML: defined by BCR-ABL1 fusion; three phases (chronic, accelerated, blast crisis).',
  l4: 'ALL: MRD-guided therapy; blinatumomab (BiTE) and inotuzumab ozogamicin for relapsed B-ALL; CAR-T (tisagenlecleucel) for refractory disease; Ph+ ALL treated with TKI + reduced-intensity chemo. AML: midostaurin or gilteritinib for FLT3+; venetoclax + azacitidine for unfit patients (VIALE-A); CPX-351 for secondary AML; enasidenib/ivosidenib for IDH-mutated. CLL: BTK inhibitors (ibrutinib, acalabrutinib, zanubrutinib) and venetoclax + obinutuzumab as first-line options; fixed-duration venetoclax-based regimens preferred. CML: imatinib, dasatinib, nilotinib, or bosutinib; TFR attempts after deep molecular response.',
  l5: 'ALL: CD19-directed CAR-T (KTE-X19 for adults, tisagenlecleucel for pediatric/YA) with 70-90% CR rates; bispecific antibodies expanding; MRD negativity by NGS (<10^-6) predicts superior outcomes. AML: menin inhibitors (revumenib, ziftomenib) for KMT2A-rearranged and NPM1-mutated; magrolimab (CD47) + azacitidine under investigation; flotetuzumab for primary refractory. CLL: pirtobrutinib (non-covalent BTK inhibitor) for BTK-resistant disease (BRUIN); MRD-guided treatment duration. CML: asciminib (STAMP inhibitor) for resistant T315I and third-line; treatment-free remission achievable in 40-60% after sustained DMR.',
  tags: { systems: ['hematologic'], topics: ['pathology', 'therapeutics', 'molecular biology'], keywords: ['ALL', 'AML', 'CLL', 'CML', 'BCR-ABL', 'FLT3', 'venetoclax', 'CAR-T', 'BTK inhibitor'], clinicalRelevance: 'critical', examRelevance: { usmle: true, nbme: true, shelf: ['medicine'] } },
  crossRefs: [
    { targetId: 'onc-lymphoma', targetType: 'condition', relationship: 'sibling', label: 'Lymphoma' },
    { targetId: 'onc-chemotherapy-principles', targetType: 'topic', relationship: 'related', label: 'Chemotherapy Principles' },
    { targetId: 'onc-immunotherapy', targetType: 'topic', relationship: 'related', label: 'Immunotherapy' },
  ],
});
