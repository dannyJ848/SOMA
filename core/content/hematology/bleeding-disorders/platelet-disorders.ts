import { EducationalContent } from '../types';

export const plateletDisorders: EducationalContent = {
  id: 'hematology-platelet-disorders',
  type: 'condition',
  name: 'Platelet Disorders',
  alternateNames: ['Thrombocytopenia', 'Thrombocytosis', 'Platelet Dysfunction', 'ITP'],
  levels: {
    1: {
      level: 1,
      summary: 'Platelet disorders occur when you have too few platelets, too many platelets, or platelets that don\'t work properly, affecting your blood\'s ability to clot.',
      explanation: 'Platelets are tiny blood cells that help stop bleeding by clumping together to form clots. Problems can happen when you have too few platelets (called thrombocytopenia), too many platelets (thrombocytosis), or when platelets don\'t work right even if you have enough of them. With too few platelets, you might bruise easily, have nosebleeds, see tiny red spots on your skin, or bleed more than usual from cuts. With too many platelets, you could be at risk for blood clots. Platelet disorders can be inherited (passed from parents) or acquired (develop later in life). Treatment depends on the cause and might include medicines, removing the spleen in some cases, or platelet transfusions.',
      keyTerms: [
        { term: 'Platelets', definition: 'Tiny blood cells that help stop bleeding by forming clots' },
        { term: 'Thrombocytopenia', definition: 'Having too few platelets in your blood' },
        { term: 'Thrombocytosis', definition: 'Having too many platelets in your blood' },
        { term: 'Petechiae', definition: 'Tiny red or purple spots on the skin from bleeding under the surface' },
      ],
    },
    2: {
      level: 2,
      summary: 'Platelet disorders encompass quantitative abnormalities (thrombocytopenia or thrombocytosis) and qualitative defects affecting platelet function, each with distinct causes, presentations, and treatments.',
      explanation: 'Thrombocytopenia (platelets <150,000/mcL) results from decreased production (bone marrow disorders, nutritional deficiencies), increased destruction (immune-mediated like ITP, TTP, drug-induced), or sequestration (enlarged spleen). Immune thrombocytopenia (ITP) occurs when antibodies attack platelets; it presents with mucocutaneous bleeding and is often treated with steroids, IVIG, or thrombopoietin receptor agonists. Thrombocytosis can be reactive (infection, inflammation, iron deficiency) or primary (myeloproliferative neoplasms). Qualitative platelet disorders include inherited conditions (Glanzmann thrombasthenia, Bernard-Soulier syndrome) and acquired dysfunction (medications like aspirin, uremia). Bleeding symptoms correlate with platelet count: <50,000 increases surgical risk; <20,000 causes spontaneous mucosal bleeding; <10,000 causes severe hemorrhage risk. Diagnosis starts with CBC and peripheral blood smear review, followed by targeted testing based on clinical context.',
      keyTerms: [
        { term: 'ITP', definition: 'Immune thrombocytopenia, destruction of platelets by immune system' },
        { term: 'TTP', definition: 'Thrombotic thrombocytopenic purpura, causing clots and low platelets' },
        { term: 'Sequestration', definition: 'Trapping of platelets in enlarged spleen reducing circulating count' },
        { term: 'Thrombopoietin', definition: 'Hormone stimulating platelet production in bone marrow' },
        { term: 'Peripheral smear', definition: 'Microscopic examination of blood cells for abnormalities' },
      ],
    },
    3: {
      level: 3,
      summary: 'Platelet disorder evaluation integrates clinical context, laboratory findings, and often bone marrow assessment to distinguish production defects, consumptive processes, and functional abnormalities, guiding targeted management.',
      explanation: 'Systematic thrombocytopenia evaluation considers: pseudothrombocytopenia (platelet clumping in EDTA, verify with citrate tube); production failure (marrow infiltration, aplasia, MDS, chemotherapy, nutritional deficiency—check B12, folate); destruction/consumption (immune—ITP, SLE, drug-induced; non-immune—TTP/HUS, DIC, sepsis); and sequestration (splenomegaly). ITP diagnosis is exclusionary; treatment indicated for bleeding or very low counts; first-line includes corticosteroids; second-line options include rituximab, TPO-agonists (romiplostim, eltrombopag), or splenectomy. TTP is a medical emergency requiring plasma exchange; suspect with thrombocytopenia plus MAHA; PLASMIC score aids diagnosis; ADAMTS13 activity confirms. Drug-induced thrombocytopenia (heparin, quinine, many others) requires drug cessation; HIT (heparin-induced thrombocytopenia) is uniquely thrombotic, requiring alternative anticoagulation. Inherited platelet function disorders: test with platelet function analyzer (PFA-100), light transmission aggregometry; specific genetic testing increasingly available. Acquired dysfunction from uremia may respond to DDAVP or dialysis.',
      keyTerms: [
        { term: 'Pseudothrombocytopenia', definition: 'Falsely low platelet count from in-vitro clumping' },
        { term: 'MAHA', definition: 'Microangiopathic hemolytic anemia, fragmented red cells with low platelets' },
        { term: 'ADAMTS13', definition: 'Enzyme deficient in TTP, cleaves von Willebrand factor' },
        { term: 'HIT', definition: 'Heparin-induced thrombocytopenia, paradoxically causes clots' },
        { term: 'Light transmission aggregometry', definition: 'Gold standard test for platelet function disorders' },
      ],
    },
    4: {
      level: 4,
      summary: 'Advanced platelet disorder management requires nuanced diagnostic interpretation, understanding of underlying pathophysiology, and individualized treatment incorporating emerging therapies while managing complex clinical scenarios.',
      explanation: 'ITP management has evolved with multiple effective agents. Corticosteroids achieve initial response in 60-80% but often not durable. TPO-RAs (romiplostim SC weekly, eltrombopag/avatrombopag oral daily) stimulate platelet production; thrombosis risk requires attention, especially in older patients or those with thrombophilia. Rituximab offers durable response in 40%; splenectomy effective in 60-70% long-term but infectious risks warrant vaccination. Fostamatinib (SYK inhibitor) provides additional option. Refractory ITP may require combination therapy or immunosuppressants (mycophenolate, azathioprine). Thrombocytosis evaluation: reactive thrombocytosis common and benign; primary thrombocytosis in MPNs (ET, PV, PMF, CML) requires JAK2, CALR, MPL mutation testing. Essential thrombocythemia management stratifies by thrombosis risk; high-risk receives cytoreduction (hydroxyurea first-line) plus aspirin. Perioperative platelet management: bleeding risk varies by surgery and baseline count; guidelines inform transfusion thresholds (usually <50K for major surgery, <100K for CNS/ophthalmologic). Platelet refractoriness may indicate HLA alloimmunization requiring matched platelets.',
      keyTerms: [
        { term: 'TPO-RA', definition: 'Thrombopoietin receptor agonists stimulating platelet production' },
        { term: 'Essential thrombocythemia', definition: 'MPN with elevated platelet count, thrombosis/bleeding risk' },
        { term: 'JAK2 mutation', definition: 'Common mutation in myeloproliferative neoplasms' },
        { term: 'Platelet refractoriness', definition: 'Failure to achieve expected count increment after transfusion' },
        { term: 'SYK inhibitor', definition: 'Fostamatinib class, blocks signaling in platelet destruction' },
      ],
    },
    5: {
      level: 5,
      summary: 'Expert management of platelet disorders requires integration of comprehensive diagnostic evaluation, evidence-based therapeutic sequencing, management of treatment-related complications, and navigation of special populations including pregnancy and critical illness.',
      explanation: 'Clinical excellence in platelet disorders demands systematic approach. ITP diagnosis: exclude secondary causes (HIV, HCV, H. pylori, autoimmune disease, CVID, lymphoproliferative disorders, drug-induced); bone marrow not routinely needed but consider in older adults or atypical features. Treatment goals: prevent bleeding rather than normalize count; target differs by clinical context (often >30K for stable patients, higher for procedures). Treatment sequencing: corticosteroids first-line (dexamethasone 40mg x4 days or prednisone 1mg/kg); if no response or relapse, choose among TPO-RA, rituximab based on patient factors, preference; splenectomy deferred until chronic refractory. ITP in pregnancy: target >30K routinely, >50K for delivery, >80K for neuraxial; IVIG preferred for rapid rise; avoid TPO-RA (limited safety data); neonatal thrombocytopenia possible. TTP management: immediate plasma exchange; caplacizumab (anti-VWF nanobody) reduces time to response and recurrence; rituximab for immune TTP; monitor ADAMTS13 for relapse prediction. HIT: 4T score guides testing; immediately discontinue heparin, start alternative anticoagulant (argatroban, fondaparinux, DOACs depending on context); do not transfuse platelets. Inherited disorders: consider DDAVP trial, platelet transfusion for severe bleeding, recombinant VIIa in refractory cases.',
      keyTerms: [
        { term: 'Secondary ITP', definition: 'ITP occurring with underlying disorder requiring specific treatment' },
        { term: '4T score', definition: 'Clinical probability score for heparin-induced thrombocytopenia' },
        { term: 'Caplacizumab', definition: 'Anti-VWF nanobody for TTP treatment' },
        { term: 'CVID', definition: 'Common variable immunodeficiency, can cause secondary ITP' },
        { term: 'Neonatal alloimmune thrombocytopenia', definition: 'Fetal/newborn platelet destruction from maternal antibodies' },
      ],
      clinicalNotes: 'Always review peripheral smear personally in unexplained thrombocytopenia—clumping, giant platelets, schistocytes, blasts all alter diagnosis. In TTP, do not delay plasma exchange for ADAMTS13 results; mortality high without treatment. HIT antibodies can persist; document in medical record for future heparin avoidance. ITP patients on TPO-RA: monitor for thrombosis, especially with other risk factors; discontinuation may cause rebound severe thrombocytopenia. In pregnancy, gestational thrombocytopenia (mild, third trimester, no bleeding) is most common cause of low platelets—observe. Platelet transfusion thresholds: 10K prophylactic in stable patients; 50K for most procedures; 100K for CNS surgery. Drug-induced thrombocytopenia: onset typically 5-10 days after drug exposure or immediate if prior sensitization; recovery expected within 1-2 weeks of cessation. Document platelet count trends, all medications, and transfusion history.',
    },
  },
  media: [],
  citations: [
    'Neunert C, et al. American Society of Hematology 2019 guidelines for immune thrombocytopenia. Blood Adv. 2019;3(23):3829-3866.',
    'Cuker A, et al. American Society of Hematology 2018 guidelines for management of venous thromboembolism: heparin-induced thrombocytopenia. Blood Adv. 2018;2(22):3360-3392.',
    'Scully M, et al. Caplacizumab Treatment for Acquired Thrombotic Thrombocytopenic Purpura. N Engl J Med. 2019;380(4):335-346.',
  ],
  crossReferences: ['hematology-cbc-interpretation', 'hematology-blood-smear', 'hematology-von-willebrand'],
  tags: {
    systems: ['hematology'],
    topics: ['platelet disorders', 'ITP', 'TTP', 'thrombocytopenia', 'bleeding disorders'],
    keywords: ['platelets', 'thrombocytopenia', 'ITP', 'TTP', 'HIT', 'bleeding', 'transfusion'],
  },
  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
