import { EducationalContent } from '../types';

export const lymphoma: EducationalContent = {
  id: 'hematology-lymphoma',
  type: 'condition',
  name: 'Lymphoma',
  alternateNames: ['Lymphatic Cancer', 'Lymph Node Cancer', 'Lymphoid Malignancy'],
  levels: {
    1: {
      level: 1,
      summary: 'Lymphoma is a cancer of the lymphatic system, which is part of your body\'s immune system.',
      explanation: 'Lymphoma is a cancer that starts in lymphocytes, a type of white blood cell that fights infections. These cells are found in lymph nodes, spleen, thymus, bone marrow, and other parts of the body. In lymphoma, these cells grow out of control and can form tumors in lymph nodes and other organs. There are two main types: Hodgkin lymphoma and non-Hodgkin lymphoma. Symptoms often include swollen lymph nodes (usually painless), fever, night sweats, weight loss, and fatigue. Treatment depends on the type and may include chemotherapy, radiation therapy, targeted therapy, or immunotherapy. Many people with lymphoma can be cured or have their disease controlled for many years with treatment.',
      keyTerms: [
        { term: 'Lymphocytes', definition: 'White blood cells that fight infections and are part of the immune system' },
        { term: 'Lymph nodes', definition: 'Small bean-shaped organs that filter lymph fluid and fight infection' },
        { term: 'Lymphatic system', definition: 'Network of vessels, nodes, and organs that helps fight infection' },
        { term: 'Hodgkin lymphoma', definition: 'Type of lymphoma with a specific abnormal cell called Reed-Sternberg cell' },
      ],
      analogies: [
        'Lymphoma is like a security system gone wrong - the guards multiply and take over instead of protecting',
        'Think of lymph nodes as security checkpoints that get clogged with too many cells in lymphoma',
      ],
      examples: [
        'A young adult with painless swelling in the neck from enlarged lymph nodes with Hodgkin lymphoma',
        'An older person with diffuse large B-cell lymphoma causing B symptoms (fever, night sweats, weight loss)',
      ],
    },
    2: {
      level: 2,
      summary: 'Lymphomas are classified as Hodgkin lymphoma (characterized by Reed-Sternberg cells) and non-Hodgkin lymphoma (diverse group of B-cell and T-cell malignancies), with varying behaviors from indolent to aggressive.',
      explanation: 'Hodgkin lymphoma (HL) has two subtypes: classical HL (nodular sclerosis, mixed cellularity, lymphocyte-rich, lymphocyte-depleted) and nodular lymphocyte-predominant HL. Reed-Sternberg cells (large binucleated cells) are pathognomonic. HL typically presents in young adults with contiguous nodal spread. Non-Hodgkin lymphoma (NHL) comprises numerous entities classified by WHO: indolent (follicular, marginal zone, small lymphocytic), aggressive (diffuse large B-cell, mantle cell, Burkitt), and very aggressive. B-cell lymphomas are more common than T-cell. Common presentations include painless lymphadenopathy, B symptoms (fevers, drenching night sweats, unintentional weight loss >10% in 6 months), pruritus, and alcohol-induced nodal pain (rare). Diagnosis requires excisional lymph node biopsy for architecture assessment, immunohistochemistry, and flow cytometry. Staging uses PET/CT (functional assessment) and bone marrow biopsy. Ann Arbor staging (I-IV) modified by E designation (extranodal) and B symptoms.',
      keyTerms: [
        { term: 'Reed-Sternberg cell', definition: 'Large abnormal cell with owl-eye nuclei, diagnostic of Hodgkin lymphoma' },
        { term: 'B symptoms', definition: 'Systemic symptoms of fever, night sweats, and weight loss indicating active disease' },
        { term: 'Indolent', definition: 'Slow-growing lymphoma that may not require immediate treatment' },
        { term: 'Diffuse large B-cell lymphoma', definition: 'Most common aggressive NHL, potentially curable' },
        { term: 'Follicular lymphoma', definition: 'Common indolent NHL with follicular growth pattern' },
      ],
      analogies: [
        'Hodgkin lymphoma spreads like stepping stones - from one node to the next in order',
        'Indolent lymphoma is like a slow leak; aggressive lymphoma is like a burst pipe',
      ],
      examples: [
        'A patient with stage II nodular sclerosis Hodgkin lymphoma involving cervical and mediastinal nodes',
        'An elderly patient with follicular lymphoma managed with watchful waiting approach',
      ],
    },
    3: {
      level: 3,
      summary: 'Lymphoma management requires precise histologic diagnosis, molecular characterization, risk stratification, and selection from diverse treatment modalities including chemotherapy, radiation, targeted agents, and cellular therapy.',
      explanation: 'Molecular diagnostics identify actionable targets: MYC, BCL2, BCL6 rearrangements in double/triple-hit lymphomas; MYD88 and CXCR4 mutations in Waldenstrom macroglobulinemia; ALK rearrangements in anaplastic large cell lymphoma; PD-L1 expression in primary mediastinal large B-cell lymphoma. Risk stratification: International Prognostic Index (IPI) for aggressive NHL; Follicular Lymphoma International Prognostic Index (FLIPI) for follicular lymphoma. Hodgkin lymphoma: ABVD (doxorubicin, bleomycin, vinblastine, dacarbazine) remains standard; PET-adapted therapy allows treatment de-escalation if early complete metabolic response. Radiation for limited stage. Relapsed HL: salvage chemotherapy then autologous transplant; brentuximab vedotin (CD30 antibody-drug conjugate) and checkpoint inhibitors (nivolumab, pembrolizumab) for refractory disease. Diffuse large B-cell lymphoma (DLBCL): R-CHOP (rituximab + CHOP) is standard; addition of polatuzumab vedotin in some settings; CAR-T for refractory/early relapse. Follicular lymphoma: observation for asymptomatic; rituximab with or without chemotherapy when treatment needed; PI3K inhibitors and lenalidomide for relapsed disease.',
      keyTerms: [
        { term: 'R-CHOP', definition: 'Standard chemotherapy regimen: rituximab, cyclophosphamide, doxorubicin, vincristine, prednisone' },
        { term: 'ABVD', definition: 'Standard Hodgkin lymphoma chemotherapy regimen' },
        { term: 'Double-hit lymphoma', definition: 'DLBCL with MYC plus BCL2 and/or BCL6 rearrangements' },
        { term: 'Checkpoint inhibitor', definition: 'Immunotherapy blocking PD-1, effective in Hodgkin lymphoma' },
        { term: 'IPI', definition: 'International Prognostic Index predicting survival in aggressive NHL' },
      ],
    },
    4: {
      level: 4,
      summary: 'Contemporary lymphoma care integrates precision diagnostics, risk-adapted therapy intensification or de-escalation, novel targeted agents, and cellular therapies in a rapidly evolving treatment landscape.',
      explanation: 'PET-adapted therapy: interim PET after 2 cycles of ABVD in HL guides treatment modification (omit bleomycin if negative, intensify if positive). Double-hit and triple-hit lymphomas require intensive regimens (DA-EPOCH-R) and often consolidative transplant. Mantle cell lymphoma: aggressive regimens for fit patients; ibrutinib and other BTK inhibitors for relapsed disease; CAR-T emerging. Burkitt lymphoma: highly aggressive but curable with intensive chemotherapy including CNS prophylaxis. Primary CNS lymphoma: high-dose methotrexate-based therapy; avoid whole-brain radiation if possible due to neurotoxicity. Marginal zone lymphomas: treat H. pylori in gastric MALT; observe others unless symptomatic; ibrutinib for relapsed. Peripheral T-cell lymphomas: generally poor prognosis; CHOEP or similar; brentuximab for CD30+ cases; pralatrexate for relapsed. Cutaneous T-cell lymphomas: skin-directed therapy early; systemic for advanced. CAR-T therapy: axicabtagene ciloleucel and tisagenlecleucel for refractory DLBCL; liso-cel and others expanding indications. Bispecific antibodies (mosunetuzumab, glofitamab) provide off-the-shelf options.',
      keyTerms: [
        { term: 'DA-EPOCH-R', definition: 'Dose-adjusted EPOCH plus rituximab for aggressive lymphomas' },
        { term: 'CAR-T', definition: 'Chimeric antigen receptor T-cell therapy for relapsed lymphoma' },
        { term: 'BTK inhibitor', definition: 'Ibrutinib, acalabrutinib targeting Bruton tyrosine kinase in B-cell lymphomas' },
        { term: 'Deauville score', definition: '5-point scale for PET scan interpretation in lymphoma' },
        { term: 'CNS prophylaxis', definition: 'Preventive treatment to keep lymphoma from spreading to the brain' },
      ],
      clinicalNotes: 'Excisional biopsy preferred over needle biopsy for diagnosis. Bone marrow involvement in HL rare at presentation; more common in NHL. Tumor lysis syndrome risk in bulky or high-grade lymphomas - prophylaxis with hydration and rasburicase/allopurinol. Cardiac assessment before anthracyclines. Pulmonary function tests before bleomycin. Growth factor support with dose-intensive regimens. Vaccinate against encapsulated organisms if splenic irradiation or dysfunction. Monitor for late effects: secondary malignancies, cardiac toxicity, infertility. Fertility preservation discussion before alkylating agent therapy.',
    },
    5: {
      level: 5,
      summary: 'Expert lymphoma management requires mastery of complex diagnostics, individualized treatment pathways, management of refractory disease, and comprehensive survivorship care.',
      explanation: 'Advanced diagnostics: gene expression profiling identifies molecular subtypes of DLBCL (germinal center B-cell vs activated B-cell) with prognostic and therapeutic implications; next-generation sequencing panels detect mutations affecting prognosis and treatment selection (TP53, EZH2, CREBBP, etc.). Frontline clinical trials: addition of novel agents to R-CHOP (lenalidomide, ibrutinib, venetoclax based on subtype) under investigation. Radiation therapy: involved-site radiation therapy (ISRT) preferred; omission in early PET-negative HL being studied. Transplant: autologous for relapsed DLBCL with chemotherapy-sensitive disease; allogeneic for select cases with persistent minimal residual disease. Novel agents: tafasitamab (anti-CD19) plus lenalidomide for transplant-ineligible relapsed DLBCL; selinexor, loncastuximab tesirine for multiply relapsed disease. Hodgkin lymphoma: combination strategies with checkpoint inhibitors in frontline. Mantle cell lymphoma: BTK inhibitors (ibrutinib, acalabrutinib, zanubrutinib), venetoclax, and cellular therapies transforming outcomes.',
      keyTerms: [
        { term: 'Gene expression profiling', definition: 'Analyzing which genes are active to classify lymphoma subtypes' },
        { term: 'Molecular subtype', definition: 'Classification based on genetic activity patterns (GCB vs ABC in DLBCL)' },
        { term: 'Bispecific antibody', definition: 'Antibody engaging T cells against tumor targets' },
        { term: 'Consolidative transplant', definition: 'Transplant after response to therapy to prevent relapse' },
        { term: 'Minimal residual disease', definition: 'Small number of cancer cells remaining after treatment' },
      ],
      clinicalNotes: 'Double-hit lymphomas treated with DA-EPOCH-R have better outcomes than R-CHOP. Test HIV in all lymphoma patients - associated with aggressive subtypes and affects treatment. Primary mediastinal large B-cell lymphoma treated with DA-EPOCH-R or R-CHOP + radiation. Primary CNS lymphoma: high-dose methotrexate essential; whole-brain radiation causes dementia in elderly. Lymphomatous meningitis: intrathecal chemotherapy. Post-transplant lymphoproliferative disorder: reduce immunosuppression first, then rituximab. Late relapse can occur in follicular lymphoma - long-term follow-up essential.',
    },
  },
  media: [],
  citations: [
    'Swerdlow SH, Campo E, Pileri SA, et al. The 2016 revision of the World Health Organization classification of lymphoid neoplasms. Blood. 2016;127(20):2375-2390.',
    'Ansell SM. Hodgkin lymphoma: 2023 update on diagnosis, risk-stratification, and management. Am J Hematol. 2023;98(4):638-651.',
    'Sehn LH, Salles G. Diffuse large B-cell lymphoma. N Engl J Med. 2021;384(9):842-858.',
  ],
  crossReferences: ['hematology-leukemia', 'hematology-multiple-myeloma', 'hematology-bone-marrow-transplant'],
  tags: {
    systems: ['hematology', 'oncology'],
    topics: ['lymphoma', 'Hodgkin lymphoma', 'non-Hodgkin lymphoma', 'lymphatic cancer'],
    keywords: ['lymphoma', 'Hodgkin', 'DLBCL', 'follicular', 'R-CHOP', 'ABVD', 'CAR-T'],
  },
  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
