import { EducationalContent } from '../types';

export const leukemia: EducationalContent = {
  id: 'hematology-leukemia',
  type: 'condition',
  name: 'Leukemia',
  alternateNames: ['Blood Cancer', 'Leukemia Cancer', 'White Blood Cell Cancer'],
  levels: {
    1: {
      level: 1,
      summary: 'Leukemia is a cancer of the blood cells that starts in the bone marrow, where blood cells are made.',
      explanation: 'Leukemia happens when your body makes too many abnormal white blood cells. Normally, white blood cells help fight infections, but leukemia cells don\'t work properly and crowd out the healthy cells. This can make you feel tired, get sick often, bleed or bruise easily, and have fevers. There are different types of leukemia—some grow fast (acute) and need treatment right away, while others grow slowly (chronic). Doctors can find leukemia by looking at your blood and bone marrow. Treatment often includes special medicines called chemotherapy that kill the cancer cells. Many people with leukemia can be cured or live long, healthy lives with treatment.',
      keyTerms: [
        { term: 'White blood cells', definition: 'Cells in your blood that fight infections and disease' },
        { term: 'Bone marrow', definition: 'The soft, spongy tissue inside bones where blood cells are made' },
        { term: 'Chemotherapy', definition: 'Strong medicine that kills cancer cells' },
        { term: 'Acute', definition: 'A fast-growing type of disease that needs treatment quickly' },
        { term: 'Chronic', definition: 'A slow-growing type of disease that develops over time' },
      ],
    },
    2: {
      level: 2,
      summary: 'Leukemia is a malignancy of blood-forming cells characterized by uncontrolled proliferation of abnormal leukocytes, classified by cell lineage (myeloid or lymphoid) and progression rate (acute or chronic).',
      explanation: 'Leukemia originates in the bone marrow when genetic mutations cause white blood cell precursors to multiply uncontrollably. The four main types are: Acute Lymphoblastic Leukemia (ALL), most common in children; Acute Myeloid Leukemia (AML), more common in adults; Chronic Lymphocytic Leukemia (CLL), typically affecting older adults; and Chronic Myeloid Leukemia (CML), associated with a specific chromosome abnormality. Symptoms arise from bone marrow failure (anemia causing fatigue, thrombocytopenia causing bleeding, neutropenia causing infections) and leukemic infiltration (lymphadenopathy, splenomegaly). Diagnosis requires complete blood count, peripheral blood smear examination, and bone marrow biopsy with flow cytometry to characterize the leukemia subtype. Treatment varies by type but may include chemotherapy, targeted therapy, immunotherapy, radiation, and stem cell transplantation. Prognosis depends on leukemia subtype, patient age, and specific genetic abnormalities.',
      keyTerms: [
        { term: 'Malignancy', definition: 'Cancer; cells that grow out of control and can spread' },
        { term: 'Lymphoid', definition: 'Cell lineage that produces lymphocytes (a type of white blood cell)' },
        { term: 'Myeloid', definition: 'Cell lineage that produces granulocytes, monocytes, red cells, and platelets' },
        { term: 'Flow cytometry', definition: 'Lab test identifying cell types by their surface markers' },
        { term: 'Stem cell transplant', definition: 'Procedure replacing diseased bone marrow with healthy stem cells' },
      ],
    },
    3: {
      level: 3,
      summary: 'Leukemia encompasses hematologic malignancies arising from clonal proliferation of hematopoietic precursors, with classification based on lineage commitment and differentiation arrest, each subtype having distinct molecular drivers, treatment paradigms, and prognostic implications.',
      explanation: 'Leukemogenesis involves acquisition of genetic lesions disrupting normal hematopoiesis. In ALL, common abnormalities include t(12;21)/ETV6-RUNX1 (favorable), t(9;22)/BCR-ABL1 (previously poor, improved with TKIs), and MLL rearrangements (poor prognosis). AML classification integrates morphology, cytogenetics, and molecular markers per WHO criteria; favorable-risk includes t(8;21), inv(16), and NPM1 mutation without FLT3-ITD; adverse-risk includes complex karyotype, monosomal karyotype, and TP53 mutations. CML is defined by BCR-ABL1 fusion creating constitutively active tyrosine kinase; tyrosine kinase inhibitors (imatinib, dasatinib, nilotinib) have transformed this from fatal to chronic manageable disease. CLL involves mature B-cell clonal expansion; IGHV mutation status and cytogenetics (del17p, del11q) guide therapy selection between chemoimmunotherapy and targeted agents (BTK inhibitors, BCL2 inhibitors). Treatment response assessment includes minimal residual disease (MRD) testing by flow cytometry or PCR, with MRD negativity associated with improved outcomes.',
      keyTerms: [
        { term: 'Clonal proliferation', definition: 'Uncontrolled multiplication of cells arising from a single mutated precursor' },
        { term: 'BCR-ABL1', definition: 'Fusion gene from Philadelphia chromosome translocation, drives CML' },
        { term: 'Tyrosine kinase inhibitor', definition: 'Targeted drug blocking abnormal signaling proteins in cancer cells' },
        { term: 'Minimal residual disease', definition: 'Small numbers of cancer cells remaining after treatment' },
        { term: 'IGHV mutation', definition: 'Immunoglobulin gene mutation status used to risk-stratify CLL' },
      ],
    },
    4: {
      level: 4,
      summary: 'Leukemia management requires integration of molecular diagnostics for risk stratification, selection among intensive chemotherapy, targeted therapies, immunotherapies, and allogeneic transplantation, with treatment individualization based on disease biology, patient fitness, and measurable residual disease kinetics.',
      explanation: 'Precision medicine has transformed leukemia care. In AML, European LeukemiaNet guidelines stratify patients into favorable, intermediate, and adverse-risk categories guiding intensity of post-remission therapy; FLT3 inhibitors (midostaurin, gilteritinib) added for FLT3-mutated disease; venetoclax-based regimens offer effective lower-intensity options for older/unfit patients; IDH1/2 inhibitors target metabolic vulnerabilities. In ALL, pediatric-inspired protocols improve adult outcomes; blinatumomab (BiTE antibody) and inotuzumab (antibody-drug conjugate) salvage relapsed disease; CAR-T cell therapy (tisagenlecleucel) achieves remissions in multiply relapsed ALL. CML monitoring requires BCR-ABL1 transcript quantification on International Scale; deep molecular responses may allow treatment-free remission attempts. CLL has shifted from FCR chemoimmunotherapy toward continuous targeted therapy with BTK inhibitors (ibrutinib, acalabrutinib) or fixed-duration venetoclax-obinutuzumab; treatment selection considers TP53 status, IGHV, fitness, and preference. Allogeneic transplant remains curative for high-risk disease through graft-versus-leukemia effect but carries transplant-related mortality risk.',
      keyTerms: [
        { term: 'European LeukemiaNet', definition: 'Organization providing standardized AML risk classification and response criteria' },
        { term: 'Venetoclax', definition: 'BCL2 inhibitor inducing apoptosis in leukemia cells' },
        { term: 'CAR-T cells', definition: 'Patient\'s T cells engineered to recognize and kill leukemia cells' },
        { term: 'BiTE antibody', definition: 'Bispecific T-cell engager connecting T cells to tumor targets' },
        { term: 'Graft-versus-leukemia', definition: 'Donor immune cells attacking residual leukemia after transplant' },
      ],
    },
    5: {
      level: 5,
      summary: 'State-of-the-art leukemia management integrates comprehensive genomic profiling, measurable residual disease-directed therapy modifications, novel targeted and immunotherapeutic approaches, and evidence-based allogeneic transplantation decisions, while addressing supportive care complexities and long-term survivorship.',
      explanation: 'Clinical leukemia management demands synthesis of evolving evidence. AML induction: 7+3 remains standard for fit patients; CPX-351 liposomal formulation superior for secondary AML; gemtuzumab ozogamicin added for CD33+ favorable-risk disease; venetoclax + azacitidine now standard for unfit patients. Post-remission: consolidation HiDAC for favorable-risk; allogeneic HCT for intermediate/adverse-risk with suitable donor; MRD by flow cytometry or molecular methods guides transplant urgency. ALL: MRD after induction predicts relapse; blinatumomab consolidation improves survival in MRD+ patients; CNS prophylaxis essential; Philadelphia-positive ALL incorporates TKI throughout. CML: achieving deep molecular response (MR4.5) for 2+ years may allow TKI discontinuation in 40-50%; second-generation TKIs considered first-line for intermediate/high Sokal risk; ponatinib for T315I mutation. CLL: treat only symptomatic/progressive disease; del17p/TP53 mutation mandates BTK inhibitor or venetoclax; Richter transformation requires aggressive chemotherapy ± transplant. Supportive care: tumor lysis syndrome prophylaxis; antimicrobial prophylaxis during neutropenia; transfusion support with appropriate thresholds; growth factor use per guidelines. Survivorship addresses late effects including secondary malignancies, cardiac toxicity, and psychosocial needs.',
      keyTerms: [
        { term: 'CPX-351', definition: 'Liposomal cytarabine-daunorubicin with improved efficacy in secondary AML' },
        { term: 'HiDAC', definition: 'High-dose cytarabine consolidation for favorable-risk AML' },
        { term: 'MR4.5', definition: 'Deep molecular response in CML (BCR-ABL1 ≤0.0032% IS)' },
        { term: 'T315I', definition: 'BCR-ABL1 gatekeeper mutation causing resistance to most TKIs' },
        { term: 'Richter transformation', definition: 'CLL transformation to aggressive large cell lymphoma' },
      ],
      clinicalNotes: 'All acute leukemia patients require urgent hematology consultation; avoid steroids before diagnosis as they obscure lymphoblast detection. AML with WBC >100K needs emergent leukapheresis consideration and tumor lysis prophylaxis. Differentiation syndrome with ATRA/ArsO3 or IDH inhibitors requires prompt steroids. CLL with autoimmune hemolytic anemia may need treatment regardless of other indications. Monitor for leukostasis symptoms (dyspnea, confusion) with high WBC. Central line placement requires platelet transfusion support. Fertility preservation discussion before gonadotoxic therapy. Transfuse irradiated blood products if transplant candidate. Document performance status and comorbidity indices (HCT-CI) for transplant evaluation.',
    },
  },
  media: [],
  citations: [
    'Döhner H, et al. Diagnosis and management of AML in adults: 2022 recommendations from an international expert panel. Blood. 2022;140(12):1345-1377.',
    'Hallek M, et al. iwCLL guidelines for diagnosis, indications for treatment, response assessment, and supportive management of CLL. Blood. 2018;131(25):2745-2760.',
    'Hunger SP, Mullighan CG. Acute Lymphoblastic Leukemia in Children. N Engl J Med. 2015;373(16):1541-1552.',
  ],
  crossReferences: ['hematology-bone-marrow-biopsy', 'hematology-bone-marrow-transplant', 'hematology-cbc-interpretation'],
  tags: {
    systems: ['hematology', 'oncology'],
    topics: ['leukemia', 'blood cancer', 'chemotherapy', 'targeted therapy', 'stem cell transplant'],
    keywords: ['leukemia', 'ALL', 'AML', 'CLL', 'CML', 'bone marrow', 'chemotherapy', 'CAR-T'],
  },
  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
