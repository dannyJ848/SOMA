import { EducationalContent } from '../types';

export const boneMarrowTransplant: EducationalContent = {
  id: 'hematology-bone-marrow-transplant',
  type: 'concept',
  name: 'Bone Marrow Transplant',
  alternateNames: ['Hematopoietic Stem Cell Transplant', 'HSCT', 'Stem Cell Transplant', 'BMT'],
  levels: {
    1: {
      level: 1,
      summary: 'A bone marrow transplant replaces unhealthy bone marrow with healthy blood-forming stem cells to treat certain cancers and blood diseases.',
      explanation: 'When someone\'s bone marrow is diseased or damaged, a transplant can give them a fresh start with healthy cells. First, patients receive strong chemotherapy (and sometimes radiation) to destroy the diseased marrow. Then they receive healthy stem cells through an IV, just like a blood transfusion. These new cells travel to the bones and start making healthy blood cells. The stem cells can come from the patient themselves (collected before treatment and given back—called autologous transplant) or from a donor (called allogeneic transplant). Finding a donor requires matching special markers called HLA. Family members, especially siblings, are most likely to match. If no family member matches, doctors can search registries of volunteer donors. Recovery takes months, during which patients must be very careful about infections because their immune system is weak.',
      keyTerms: [
        { term: 'Stem cells', definition: 'Special cells that can develop into all types of blood cells' },
        { term: 'Autologous transplant', definition: 'Using your own stem cells collected before treatment' },
        { term: 'Allogeneic transplant', definition: 'Using stem cells from another person (donor)' },
        { term: 'HLA matching', definition: 'Comparing special markers to find a compatible donor' },
        { term: 'Conditioning', definition: 'Treatment before transplant to prepare the body for new cells' },
      ],
    },
    2: {
      level: 2,
      summary: 'Hematopoietic stem cell transplantation replaces a patient\'s hematopoietic system using stem cells from self or donor, employed to cure hematologic malignancies, bone marrow failure states, and certain genetic disorders.',
      explanation: 'HSCT provides high-dose therapy for malignancies (autologous) or replaces the hematopoietic system with donor cells providing both normal hematopoiesis and immunologic anti-tumor effect (allogeneic). Stem cell sources include bone marrow (harvested from iliac crest), peripheral blood (mobilized with G-CSF), and umbilical cord blood. Autologous transplant supports recovery after high-dose chemotherapy for multiple myeloma and lymphomas. Allogeneic transplant is potentially curative for leukemia through graft-versus-leukemia (GVL) effect—donor immune cells recognizing and eliminating residual malignant cells. HLA matching is critical; the best outcomes occur with HLA-matched sibling donors, but matched unrelated donors and haploidentical (half-matched family) donors are increasingly used with modern protocols. Conditioning intensity ranges from myeloablative (complete marrow destruction) to reduced-intensity (relying more on GVL). Major complications include graft-versus-host disease (donor cells attacking patient tissues), infections during immune reconstitution, and organ toxicity from conditioning.',
      keyTerms: [
        { term: 'Graft-versus-leukemia', definition: 'Beneficial immune attack by donor cells on residual cancer' },
        { term: 'Graft-versus-host disease', definition: 'Complication where donor immune cells attack patient\'s normal tissues' },
        { term: 'Myeloablative', definition: 'Intensive conditioning that completely destroys existing marrow' },
        { term: 'HLA', definition: 'Human leukocyte antigens, proteins used for immune matching' },
        { term: 'G-CSF', definition: 'Growth factor used to mobilize stem cells into the blood for collection' },
      ],
    },
    3: {
      level: 3,
      summary: 'HSCT involves complex pre-transplant evaluation, conditioning regimen selection based on disease and patient factors, stem cell source optimization, and management of engraftment, GVHD, and immune reconstitution phases.',
      explanation: 'Transplant decisions integrate disease characteristics, patient fitness, and donor availability. Indications vary by disease: allogeneic HSCT for high-risk AML in first remission, ALL with high-risk features or MRD positivity, MDS, and severe aplastic anemia; autologous for chemosensitive lymphomas and myeloma. Pre-transplant evaluation assesses organ function (cardiac, pulmonary, hepatic, renal), infection serologies, and psychosocial readiness. HLA typing identifies A, B, C, DR, DQ loci; 10/10 matching is ideal, though mismatched and haploidentical approaches are expanding. Conditioning options: myeloablative (busulfan/cyclophosphamide, TBI/cyclophosphamide) for younger patients and aggressive disease; reduced-intensity (fludarabine-based) extends transplant to older patients relying on GVL. Post-transplant care addresses engraftment (neutrophils >500 days 14-21), acute GVHD (skin, liver, GI; graded I-IV), infection prophylaxis (bacterial, viral, fungal, PJP), and long-term complications including chronic GVHD, secondary malignancies, and endocrine dysfunction.',
      keyTerms: [
        { term: 'Engraftment', definition: 'Establishment of donor cell production, typically ANC >500 for 3 days' },
        { term: 'Acute GVHD', definition: 'Early-onset donor-vs-host reaction affecting skin, liver, GI tract' },
        { term: 'Chronic GVHD', definition: 'Later-onset GVHD resembling autoimmune disorders, can be disabling' },
        { term: 'TBI', definition: 'Total body irradiation, used in some conditioning regimens' },
        { term: 'HCT-CI', definition: 'Hematopoietic cell transplant comorbidity index, predicts outcomes' },
      ],
    },
    4: {
      level: 4,
      summary: 'Advanced HSCT practice requires donor selection optimization, disease-specific conditioning adaptation, GVHD prophylaxis personalization, and management of complex post-transplant complications while balancing GVL effect against toxicity.',
      explanation: 'Modern transplant strategies optimize outcomes through multiple approaches. Donor selection hierarchy: matched sibling, matched unrelated donor, haploidentical, cord blood—but haploidentical with post-transplant cyclophosphamide (PTCy) now yields comparable results to MUD. MRD status pre-transplant impacts outcomes; intensification or novel agents may clear MRD before proceeding. Conditioning tailoring: myeloablative with targeted busulfan dosing (pharmacokinetic monitoring); reduced-intensity for older/frailer patients; non-myeloablative relying heavily on immune-mediated effects. GVHD prophylaxis evolution: standard calcineurin inhibitor plus methotrexate or mycophenolate; PTCy revolutionizing haploidentical outcomes; abatacept and sirolimus-based approaches; T-cell depletion techniques (CD34 selection, TCRαβ/CD19 depletion) reduce GVHD but may impair GVL. Relapse post-transplant management: withdraw immunosuppression, donor lymphocyte infusion (DLI) to enhance GVL, second transplant in select cases. Infection management requires understanding of immune reconstitution kinetics: bacterial prophylaxis early, CMV monitoring and preemptive therapy, late encapsulated organism risk in chronic GVHD. Supportive care advances include veno-occlusive disease prophylaxis with ursodiol, defibrotide for established VOD.',
      keyTerms: [
        { term: 'Post-transplant cyclophosphamide', definition: 'GVHD prophylaxis enabling safe haploidentical transplantation' },
        { term: 'Donor lymphocyte infusion', definition: 'Additional donor cells given to treat relapse, enhancing GVL' },
        { term: 'VOD/SOS', definition: 'Veno-occlusive disease/sinusoidal obstruction syndrome, serious liver complication' },
        { term: 'CMV reactivation', definition: 'Common viral complication requiring monitoring and preemptive treatment' },
        { term: 'T-cell depletion', definition: 'Techniques removing T cells from graft to prevent GVHD' },
      ],
    },
    5: {
      level: 5,
      summary: 'Clinical mastery of HSCT encompasses evidence-based transplant indication decisions, nuanced donor and platform selection, individualized GVHD management, sophisticated supportive care, and long-term survivorship attention.',
      explanation: 'Transplant expertise requires integration of complex factors. Indication refinement: ELN risk for AML, cytogenetics/IPSS-R for MDS, MRD status guiding transplant urgency; balancing transplant-related mortality (TRM) against relapse risk using disease risk indices (DRI). Platform selection: peripheral blood provides faster engraftment but more chronic GVHD than marrow; cord blood acceptable for small adults lacking other donors, supports 4-6/6 matching; haploidentical with PTCy now first choice when MSD unavailable at many centers. Conditioning: reduced-intensity (RIC) vs. myeloablative debate ongoing; FLAMSA-RIC for active disease; treosulfan increasingly used. GVHD management: prophylaxis per disease (higher GVL need may favor less intensive prophylaxis); acute GVHD treatment with steroids, ruxolitinib for steroid-refractory; chronic GVHD management includes ibrutinib, ruxolitinib, belumosudil, photopheresis. Relapse: preventive DLI maintenance, checkpoint inhibitors under investigation. Late effects: cardiovascular disease, secondary cancers, endocrine failure, cataracts, avascular necrosis, restrictive lung disease in chronic GVHD—require lifelong surveillance. Fertility preservation pre-transplant; vaccination post-transplant per guidelines. Transplant registries (CIBMTR) inform evidence and outcomes benchmarking.',
      keyTerms: [
        { term: 'DRI', definition: 'Disease Risk Index, classifies disease risk for transplant outcome prediction' },
        { term: 'FLAMSA-RIC', definition: 'Fludarabine, amsacrine, cytarabine conditioning for active leukemia' },
        { term: 'Ruxolitinib', definition: 'JAK inhibitor effective for steroid-refractory GVHD' },
        { term: 'CIBMTR', definition: 'Center for International Blood and Marrow Transplant Research, outcomes registry' },
        { term: 'Belumosudil', definition: 'ROCK2 inhibitor for chronic GVHD treatment' },
      ],
      clinicalNotes: 'Pre-transplant workup: ECHO/MUGA (EF>40-45%), PFTs (DLCO >50-60%), creatinine clearance, LFTs, infectious serologies (CMV, EBV, HSV, VZV, HBV, HCV, HIV, toxoplasma). Fertility discussion mandatory. HCT-CI scoring predicts NRM. Central venous access required. Transplant timing: proceed in CR for AML, MRD negativity preferred; active disease increases TRM and relapse. Conditioning day nomenclature: day 0 = stem cell infusion. Monitor for engraftment syndrome (fever, rash, pulmonary infiltrates around engraftment). CMV-seronegative recipients with seronegative donors should receive CMV-safe blood products. GVHD staging/grading standardized (MAGIC criteria for acute, NIH criteria for chronic). Vaccinations resume at 6-12 months post-transplant. Long-term follow-up guidelines from CIBMTR/EBMT. Document transplant details meticulously for future care providers.',
    },
  },
  media: [],
  citations: [
    'Appelbaum FR. Hematopoietic-Cell Transplantation at 50. N Engl J Med. 2007;357(15):1472-1475.',
    'Luznik L, et al. HLA-haploidentical bone marrow transplantation for hematologic malignancies using nonmyeloablative conditioning and high-dose, posttransplantation cyclophosphamide. Biol Blood Marrow Transplant. 2008;14(6):641-650.',
    'Zeiser R, Blazar BR. Acute Graft-versus-Host Disease - Biologic Process, Prevention, and Therapy. N Engl J Med. 2017;377(22):2167-2179.',
  ],
  crossReferences: ['hematology-bone-marrow-anatomy', 'hematology-leukemia', 'hematology-lymphoma'],
  tags: {
    systems: ['hematology', 'oncology', 'immunology'],
    topics: ['transplant', 'stem cells', 'GVHD', 'immunotherapy', 'cancer treatment'],
    keywords: ['bone marrow transplant', 'HSCT', 'allogeneic', 'autologous', 'GVHD', 'engraftment'],
  },
  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
