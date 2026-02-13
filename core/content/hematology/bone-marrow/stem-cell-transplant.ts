import { EducationalContent } from '../types';

export const stemCellTransplant: EducationalContent = {
  id: 'hematology-stem-cell-transplant',
  type: 'procedure',
  name: 'Hematopoietic Stem Cell Transplantation',
  alternateNames: ['Bone Marrow Transplant', 'BMT', 'HSCT', 'Stem Cell Transplant'],
  levels: {
    1: {
      level: 1,
      summary: 'Stem cell transplant is a procedure that replaces damaged bone marrow with healthy stem cells.',
      explanation: 'A stem cell transplant is a medical procedure used to treat certain blood cancers and other diseases. First, doctors give strong doses of chemotherapy and sometimes radiation to destroy the diseased bone marrow. Then, healthy stem cells are given through an IV, like a blood transfusion. These stem cells travel to the bone marrow and begin making new, healthy blood cells. The stem cells can come from the patient themselves (autologous), from a matching donor (allogeneic), or from umbilical cord blood. Recovery takes time as the new cells grow and the immune system rebuilds. There are risks including infections and other complications, but transplants can cure or significantly improve many serious conditions.',
      keyTerms: [
        { term: 'Stem cells', definition: 'Special cells that can grow into different types of blood cells' },
        { term: 'Autologous transplant', definition: 'Using your own stem cells for the transplant' },
        { term: 'Allogeneic transplant', definition: 'Using stem cells from a donor' },
        { term: 'Chemotherapy', definition: 'Strong medicine that kills cancer cells and bone marrow' },
        { term: 'Engraftment', definition: 'When transplanted stem cells begin producing new blood cells' },
      ],
      analogies: [
        'A stem cell transplant is like replanting a garden after clearing out all the weeds',
        'Think of stem cells as seeds that grow into a new blood cell factory in your bones',
      ],
      examples: [
        'A patient with leukemia receives a transplant from a matching sibling donor',
        'Someone with lymphoma uses their own stem cells collected before chemotherapy',
      ],
    },
    2: {
      level: 2,
      summary: 'Hematopoietic stem cell transplantation involves high-dose chemotherapy and/or radiation conditioning followed by infusion of hematopoietic stem cells to reconstitute bone marrow function.',
      explanation: 'HSCT is classified by stem cell source: autologous (patient\'s own cells collected before conditioning), allogeneic (from HLA-matched related or unrelated donor, or haploidentical half-match), or umbilical cord blood. Conditioning regimens may be myeloablative (destroying bone marrow), reduced intensity (RIC), or non-myeloablative (minimal toxicity, relying on graft-versus-tumor effect). Indications include hematologic malignancies (leukemia, lymphoma, myeloma), bone marrow failure syndromes, hemoglobinopathies (sickle cell, thalassemia), and immunodeficiencies. The process includes: stem cell mobilization (G-CSF), collection by apheresis, conditioning, stem cell infusion, and supportive care until engraftment (typically 10-28 days). Allogeneic transplants provide graft-versus-tumor effect where donor immune cells attack residual cancer, but risk graft-versus-host disease (GVHD) where donor cells attack recipient tissues.',
      keyTerms: [
        { term: 'HLA matching', definition: 'Testing for human leukocyte antigen compatibility between donor and recipient' },
        { term: 'Graft-versus-host disease', definition: 'Condition where donor immune cells attack recipient tissues' },
        { term: 'Graft-versus-tumor', definition: 'Beneficial effect of donor cells attacking cancer cells' },
        { term: 'Apheresis', definition: 'Procedure to collect stem cells from blood' },
        { term: 'Conditioning', definition: 'Chemotherapy and/or radiation preparing body for transplant' },
      ],
      analogies: [
        'Graft-versus-tumor is like bringing in outside security guards who recognize criminals the locals have gotten used to',
        'GVHD is when the new security guards attack the residents as well as the criminals',
      ],
      examples: [
        'A patient with acute myeloid leukemia receives matched unrelated donor transplant after chemotherapy',
        'A patient with multiple myeloma has autologous transplant as consolidation after initial therapy',
      ],
    },
    3: {
      level: 3,
      summary: 'HSCT requires careful patient selection, donor matching, conditioning regimen selection, and comprehensive management of complications including infections, GVHD, and organ toxicity.',
      explanation: 'Patient evaluation includes disease status, comorbidities (HCT-CI score), organ function, performance status, and psychosocial support. HLA typing: siblings have 25% chance of match; unrelated donors identified through registries (NMDP); haploidentical parents/children available when no match found; cord blood banks provide alternative. Conditioning: myeloablative for young/fit patients; RIC for older patients or those with comorbidities. Reduced toxicity conditioning (fludarabine-based) reduces organ damage. GVHD prophylaxis: calcineurin inhibitors (tacrolimus, cyclosporine) plus methotrexate or mycophenolate; ATG or alemtuzumab for unrelated/haploidentical transplants. Infection prophylaxis: antiviral (acyclovir), antifungal (posaconazole, voriconazole), and PJP prophylaxis (TMP-SMX) during neutropenia and immunosuppression. Supportive care: blood product support, growth factors, nutrition, and psychosocial support. Engraftment syndrome, sinusoidal obstruction syndrome (SOS/VOD), and idiopathic pneumonia syndrome are early complications.',
      keyTerms: [
        { term: 'HCT-CI', definition: 'Hematopoietic cell transplant-comorbidity index predicting outcomes' },
        { term: 'Reduced intensity conditioning', definition: 'Less toxic conditioning relying on graft-versus-tumor effect' },
        { term: 'SOS/VOD', definition: 'Sinusoidal obstruction syndrome/veno-occlusive disease of the liver' },
        { term: 'Calcineurin inhibitor', definition: 'Immunosuppressive drug preventing GVHD' },
        { term: 'Engraftment syndrome', definition: 'Fever, rash, diarrhea during neutrophil recovery' },
      ],
    },
    4: {
      level: 4,
      summary: 'Modern HSCT integrates advances in donor selection, conditioning optimization, GVHD management, cellular therapies, and long-term survivorship care.',
      explanation: 'Donor selection balances HLA matching (10/10 alleles optimal), age (younger preferred), CMV status, and donor-specific antibodies. Haploidentical transplant with post-transplant cyclophosphamide has expanded donor availability by preventing GVHD despite HLA mismatch. Cord blood transplant: slower engraftment but lower GVHD; double cord units improve outcomes. GVHD acute (first 100 days): grades I-IV based on skin, liver, GI involvement; first-line steroids; second-line options include ruxolitinib, extracorporeal photopheresis, and clinical trials. Chronic GVHD (after 100 days): multisystem involvement resembling autoimmune disease; ibrutinib, belumosudil, and rituximab for steroid-refractory disease. Relapse management: donor lymphocyte infusion (DLI) for allogeneic, second transplant for selected patients, CAR-T for CD19+ disease. Cellular therapies: virus-specific T-cells for refractory viral infections; regulatory T-cells for GVHD prevention. Long-term follow-up addresses endocrine dysfunction, infertility, secondary malignancies, cardiovascular disease, and psychosocial issues.',
      keyTerms: [
        { term: 'Post-transplant cyclophosphamide', definition: 'High-dose cyclophosphamide after haploidentical transplant to prevent GVHD' },
        { term: 'Donor lymphocyte infusion', definition: 'Giving donor white cells to treat relapse after allogeneic transplant' },
        { term: 'Extracorporeal photopheresis', definition: 'Treatment for GVHD involving UV light exposure of blood cells' },
        { term: 'CMV status', definition: 'Cytomegalovirus serology important for infection risk stratification' },
        { term: 'Belumosudil', definition: 'Rho kinase inhibitor for chronic GVHD' },
      ],
      clinicalNotes: 'Pre-transplant evaluation must rule out active infection and assess organ function. CMV-negative recipients with CMV-positive donors have high reactivation risk - require intensive monitoring. BK virus can cause hemorrhagic cystitis post-transplant. TA-TMA (transplant-associated TMA) is serious complication of endothelial injury. G-CSF may exacerbate GVHD. Steroid-refractory GVHD has poor prognosis - early escalation to second-line therapy important. Long-term survivors need cancer screening, endocrine evaluation, and bone health monitoring.',
    },
    5: {
      level: 5,
      summary: 'Expert HSCT management requires mastery of complex decision-making, novel cellular therapies, refractory complication management, and comprehensive long-term survivorship programs.',
      explanation: 'Risk stratification tools beyond HCT-CI include disease risk indices, genetic markers, and measurable residual disease status. Conditioning innovation: targeted radioimmunotherapy, antibody-based conditioning reducing toxicity. GVHD biomarkers (ST2, REG3alpha) predict severity and guide therapy. Mesenchymal stromal cells for steroid-refractory GVHD. Novel approaches: TCR-alpha/beta depletion preventing GVHD while preserving anti-pathogen immunity; CAR-T bridge to transplant for refractory leukemia. Relapse prediction and preemptive intervention: donor chimerism monitoring, MRD testing, preemptive DLI. Second allogeneic transplant for relapse: consider different donor if available; reduced toxicity conditioning; outcomes improving with better patient selection. Late effects management: endocrine replacement, cardiopulmonary rehabilitation, neurocognitive assessment, psychosocial support, fertility preservation counseling, and secondary cancer surveillance. Quality of life and return to work/school are important outcomes. Telemedicine follow-up expanding access. Clinical trials in transplantation: novel GVHD prophylaxis, expansion of transplant to older patients through safer conditioning, and gene-modified cellular therapies.',
      keyTerms: [
        { term: 'TCR-alpha/beta depletion', definition: 'Removing T-cell receptor-bearing cells to prevent GVHD' },
        { term: 'Donor chimerism', definition: 'Percentage of blood cells from donor vs recipient' },
        { term: 'Radioimmunotherapy', definition: 'Radiation delivered by antibodies targeting specific cells' },
        { term: 'ST2', definition: 'Biomarker predicting GVHD severity and treatment response' },
        { term: 'TA-TMA', definition: 'Transplant-associated thrombotic microangiopathy' },
      ],
      clinicalNotes: 'MRD-negative status pre-transplant improves outcomes in acute leukemia. Mixed chimerism may predict relapse - consider DLI or immunosuppression reduction. Viral infections (CMV, EBV, adenovirus, BK) remain major threats - preemptive monitoring essential. CNS relapse rare but devastating - consider CNS prophylaxis in high-risk patients. Oral chronic GVHD requires specialized dental care. Bone health: avascular necrosis risk from steroids; DEXA screening recommended. Document all exposures for long-term cancer risk assessment.',
    },
  },
  media: [],
  citations: [
    'Copelan EA. Hematopoietic stem-cell transplantation. N Engl J Med. 2006;354(17):1813-1826.',
    'Gratwohl A, Brand R, Frassoni F, et al. Cause of death after allogeneic haematopoietic stem cell transplantation (HSCT) in early leukaemias: an EBMT analysis of lethal infectious complications and changes over calendar time. Bone Marrow Transplant. 2005;36(9):757-769.',
    'Kanate AS, Mussetti A, Kharfan-Dabaja MA, et al. Reduced-intensity conditioning allogeneic hematopoietic cell transplantation in older patients with AML. Blood. 2021;138(19):1836-1846.',
  ],
  crossReferences: ['hematology-hematopoiesis', 'hematology-leukemia', 'hematology-lymphoma', 'hematology-multiple-myeloma'],
  tags: {
    systems: ['hematology'],
    topics: ['stem cell transplant', 'bone marrow transplant', 'GVHD', 'cellular therapy'],
    keywords: ['HSCT', 'BMT', 'transplant', 'GVHD', 'engraftment', 'allogeneic'],
  },
  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
