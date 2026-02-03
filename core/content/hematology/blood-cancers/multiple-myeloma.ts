import { EducationalContent } from '../types';

export const multipleMyeloma: EducationalContent = {
  id: 'hematology-multiple-myeloma',
  type: 'condition',
  name: 'Multiple Myeloma',
  alternateNames: ['Myeloma', 'Plasma Cell Myeloma', 'Kahler Disease'],
  levels: {
    1: {
      level: 1,
      summary: 'Multiple myeloma is a blood cancer that starts in plasma cells, a type of white blood cell found in bone marrow.',
      explanation: 'Multiple myeloma is a cancer of plasma cells, which are white blood cells that normally make antibodies to fight infections. In myeloma, these cells become abnormal, multiply out of control, and crowd out healthy blood cells in the bone marrow. The abnormal plasma cells produce harmful proteins that can damage bones, kidneys, and other organs. Common symptoms include bone pain (especially in the back or ribs), frequent infections, fatigue, high calcium levels in blood, and kidney problems. Treatment may include chemotherapy, targeted therapy, steroids, and sometimes stem cell transplant. While there is no cure, treatments can help control the disease and improve quality of life.',
      keyTerms: [
        { term: 'Plasma cells', definition: 'White blood cells that make antibodies to fight infections' },
        { term: 'Antibodies', definition: 'Proteins that help your body fight germs and infections' },
        { term: 'Bone marrow', definition: 'The soft tissue inside bones where blood cells are made' },
        { term: 'M protein', definition: 'Abnormal protein made by myeloma cells' },
      ],
      analogies: [
        'Myeloma is like a factory producing defective products that take over the whole production line',
        'Think of plasma cells as security guards - in myeloma, they multiply but forget how to do their job',
      ],
      examples: [
        'A person with back pain that won\'t go away, later diagnosed with myeloma bone lesions',
        'Someone with frequent infections due to myeloma crowding out normal immune cells',
      ],
    },
    2: {
      level: 2,
      summary: 'Multiple myeloma is a clonal plasma cell malignancy characterized by bone destruction, monoclonal protein production, and end-organ damage summarized by the CRAB criteria.',
      explanation: 'Myeloma is defined by clonal bone marrow plasma cells >=10% or biopsy-proven plasmacytoma plus CRAB features: HyperCalcemia, Renal insufficiency, Anemia, Bone lesions. The malignant plasma cells produce monoclonal immunoglobulin (M protein) detectable in serum and/or urine by protein electrophoresis. Light chains (Bence Jones protein) may be present without intact immunoglobulin. Free light chain assay quantitates kappa and lambda production. The disease spectrum includes monoclonal gammopathy of undetermined significance (MGUS, <10% plasma cells, no CRAB), smoldering myeloma (10-59% plasma cells, no CRAB), and symptomatic multiple myeloma. Bone disease occurs through activation of osteoclasts and suppression of osteoblasts via RANKL and DKK1 pathways, causing lytic lesions and pathologic fractures. Diagnosis requires bone marrow biopsy, serum/urine protein electrophoresis with immunofixation, serum free light chains, skeletal survey or PET/CT, and comprehensive metabolic panel.',
      keyTerms: [
        { term: 'Monoclonal protein', definition: 'Abnormal antibody produced by single clone of plasma cells' },
        { term: 'CRAB criteria', definition: 'Features requiring treatment: Calcium elevation, Renal failure, Anemia, Bone lesions' },
        { term: 'MGUS', definition: 'Monoclonal gammopathy of undetermined significance, precursor condition' },
        { term: 'Bence Jones protein', definition: 'Free light chains in urine, named after the physician who described them' },
        { term: 'Free light chain', definition: 'Unbound immunoglobulin light chains produced by plasma cells' },
      ],
      analogies: [
        'MGUS to myeloma progression is like a traffic light changing from green to yellow to red',
        'M protein is like a single song playing on repeat while normal music stops',
      ],
      examples: [
        'A 65-year-old with pathologic rib fracture from lytic bone lesion due to myeloma',
        'A patient presenting with kidney failure from light chain cast nephropathy',
      ],
    },
    3: {
      level: 3,
      summary: 'Multiple myeloma diagnosis requires differentiation from related plasma cell disorders, risk stratification by cytogenetics and ISS staging, and selection from evolving treatment paradigms.',
      explanation: 'Differential diagnosis includes MGUS (1% per year progression risk), smoldering myeloma (10% per year risk), solitary plasmacytoma, AL amyloidosis, and lymphoplasmacytic lymphoma. The Revised International Staging System (R-ISS) incorporates beta-2 microglobulin, albumin, LDH, and cytogenetics: Stage I (beta-2 <3.5, albumin >=3.5, normal LDH, standard-risk FISH); Stage II (neither I nor III); Stage III (beta-2 >=5.5, high LDH or high-risk FISH). High-risk cytogenetics include del(17p), t(4;14), t(14;16), and 1q gain. Initial therapy for transplant-eligible patients: induction with bortezomib-based triplet (VRd - bortezomib, lenalidomide, dexamethasone), stem cell mobilization and collection, autologous stem cell transplant, then lenalidomide maintenance. For transplant-ineligible patients: continuous VRd or DRd (daratumumab-based) therapy. Novel agents include immunomodulatory drugs (thalidomide, lenalidomide, pomalidomide), proteasome inhibitors (bortezomib, carfilzomib, ixazomib), monoclonal antibodies (daratumumab, elotuzumab, isatuximab), and histone deacetylase inhibitors.',
      keyTerms: [
        { term: 'R-ISS', definition: 'Revised International Staging System incorporating cytogenetics' },
        { term: 'Bortezomib', definition: 'Proteasome inhibitor that causes plasma cell death' },
        { term: 'Daratumumab', definition: 'Anti-CD38 monoclonal antibody for myeloma treatment' },
        { term: 'Lenalidomide', definition: 'Immunomodulatory drug used in induction and maintenance' },
        { term: 'Autologous transplant', definition: 'Using patient\'s own stem cells for transplant after high-dose chemotherapy' },
      ],
    },
    4: {
      level: 4,
      summary: 'Contemporary myeloma management integrates risk-adapted therapy, novel targeted agents, cellular therapies, and comprehensive supportive care for bone disease and complications.',
      explanation: 'Risk-adapted approaches: high-risk cytogenetics may warrant more intensive therapy including tandem transplant or novel combinations. Relapsed disease management: retreat if response lasted >6 months; sequencing through different drug classes; carfilzomib (irreversible proteasome inhibitor) for bortezomib-exposed patients; pomalidomide for lenalidomide-refractory disease. Anti-CD38 antibodies (daratumumab, isatuximab) improve outcomes in relapsed settings. CAR-T cell therapy (idecabtagene vicleucel, ciltacabtagene autoleucel) for multiply relapsed disease. Bispecific antibodies (teclistamab) provide off-the-shelf T-cell engagement. Supportive care: bisphosphonates or denosumab for bone disease (reduce fractures, inhibit tumor growth); prophylaxis against infections (antivirals for herpes zoster, PJP prophylaxis with high-dose steroids); thrombosis prophylaxis with immunomodulatory drugs; kyphoplasty/vertebroplasty for painful compression fractures. Renal support: avoid NSAIDs, maintain hydration, plasmapheresis for severe hyperviscosity.',
      keyTerms: [
        { term: 'CAR-T cells', definition: 'Patient\'s T cells engineered to target myeloma cells' },
        { term: 'Bispecific antibody', definition: 'Antibody engaging both T cells and myeloma targets' },
        { term: 'Denosumab', definition: 'RANKL inhibitor preventing bone destruction' },
        { term: 'Hyperviscosity', definition: 'Thick blood from high immunoglobulin levels causing poor circulation' },
        { term: 'Light chain cast nephropathy', definition: 'Kidney damage from light chain precipitation in tubules' },
      ],
      clinicalNotes: 'Screen patients >50 with unexplained anemia, bone pain, or elevated protein with SPEP/UPEP and free light chain assay. Bone survey may miss lesions - consider whole-body low-dose CT or PET/CT. MGUS patients need annual monitoring for progression. Smoldering myeloma risk stratification identifies high-risk patients who may benefit from early intervention. For transplant-eligible patients, collect stem cells early as lenalidomide exposure may impair mobilization. Maintain bisphosphonate/denosumab for 2 years minimum. Monitor for secondary primary malignancies with lenalidomide. Vaccinate against influenza, pneumococcus, and COVID.',
    },
    5: {
      level: 5,
      summary: 'Expert myeloma care requires mastery of risk stratification, individualized treatment sequencing, management of complex complications, and integration of emerging therapies in clinical trials.',
      explanation: 'Minimal residual disease (MRD) negativity by next-generation flow cytometry or sequencing predicts superior outcomes and is being incorporated into trial endpoints. Quadruplet induction (daratumumab + VRd or similar) increasingly used upfront. Transplant timing: early vs delayed transplant under investigation; second transplant considered for high-risk or suboptimal response. Relapsed/refractory strategies: drug class switching, clinical trials with novel agents (XPO1 inhibitors, BCL-2 inhibitors, antibody-drug conjugates like belantamab mafodotin), CAR-T and bispecific antibodies for later lines. Cytogenetic risk assessment: double-hit and triple-hit myelomas (multiple high-risk abnormalities) have poor outcomes and may warrant aggressive approaches. POEMS syndrome (polyneuropathy, organomegaly, endocrinopathy, M protein, skin changes) is a distinct plasma cell disorder requiring different management. AL amyloidosis often co-occurs with myeloma - evaluate for organ dysfunction suggesting amyloid. Waldenstrom macroglobulinemia (lymphoplasmacytic lymphoma with IgM) treated differently from IgM myeloma.',
      keyTerms: [
        { term: 'MRD', definition: 'Minimal residual disease, undetectable cancer cells after treatment' },
        { term: 'POEMS syndrome', definition: 'Paraneoplastic syndrome associated with plasma cell disorder' },
        { term: 'XPO1 inhibitor', definition: 'Selinexor, nuclear export inhibitor for relapsed myeloma' },
        { term: 'BCL-2 inhibitor', definition: 'Venetoclax, effective in t(11;14) myeloma' },
        { term: 'Double-hit myeloma', definition: 'Two high-risk cytogenetic abnormalities present' },
      ],
      clinicalNotes: 'MRD assessment by NGF or NGS at day 100 post-transplant and annually thereafter provides prognostic information. Myeloma with t(11;14) responds particularly well to venetoclax (investigational). CNS myeloma rare but carries poor prognosis - treat with intrathecal therapy. Plasma cell leukemia (circulating plasma cells >20% or >2x10^9/L) is aggressive requiring intensive therapy. Extramedullary disease at relapse suggests more aggressive biology. Infection risk high - prophylactic antibiotics, antivirals, IVIG for hypogammaglobulinemia with recurrent infections. Consider fertility preservation before melphalan-based transplant.',
    },
  },
  media: [],
  citations: [
    'Rajkumar SV. Multiple myeloma: 2020 update on diagnosis, risk-stratification and management. Am J Hematol. 2020;95(5):548-567.',
    'Kumar SK, Callander NS, Adekola K, et al. Multiple myeloma, version 3.2021, NCCN clinical practice guidelines in oncology. J Natl Compr Canc Netw. 2020;18(12):1681-1701.',
    'Munshi NC, Anderson LD, Shah N, et al. Idecabtagene vicleucel in relapsed and refractory multiple myeloma. N Engl J Med. 2021;384(8):705-716.',
  ],
  crossReferences: ['hematology-leukemia', 'hematology-lymphoma', 'hematology-bone-marrow-transplant'],
  tags: {
    systems: ['hematology', 'oncology'],
    topics: ['multiple myeloma', 'plasma cell disorder', 'bone disease', 'monoclonal protein'],
    keywords: ['myeloma', 'M protein', 'plasma cells', 'bortezomib', 'daratumumab', 'CAR-T'],
  },
  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
