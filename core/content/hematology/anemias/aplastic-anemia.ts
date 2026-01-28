import { EducationalContent } from '../types';

export const aplasticAnemia: EducationalContent = {
  id: 'hematology-aplastic-anemia',
  type: 'condition',
  name: 'Aplastic Anemia',
  alternateNames: ['Bone Marrow Failure', 'Pancytopenia', 'Aplastic Crisis'],
  levels: {
    1: {
      level: 1,
      summary: 'Aplastic anemia is a rare but serious condition where the bone marrow stops making enough new blood cells.',
      explanation: 'Your bone marrow is like a factory that makes blood cells. In aplastic anemia, this factory slows down or stops working. This causes low levels of all blood cell types: red blood cells (causing fatigue and weakness), white blood cells (increasing infection risk), and platelets (causing bleeding and bruising). The condition can be caused by the immune system attacking the bone marrow, certain medications, radiation, or chemicals. Sometimes the cause is unknown. Symptoms include extreme tiredness, frequent infections, bleeding gums or nosebleeds, and easy bruising. Treatment depends on severity and age - options include medicines to suppress the immune system, growth factors to stimulate blood cell production, or bone marrow transplant for severe cases.',
      keyTerms: [
        { term: 'Bone marrow', definition: 'The soft tissue inside bones that produces blood cells' },
        { term: 'Pancytopenia', definition: 'Low levels of all three types of blood cells' },
        { term: 'Immune system', definition: 'The body\'s defense system that normally fights infections' },
        { term: 'Stem cells', definition: 'Special cells in bone marrow that can become any type of blood cell' },
      ],
      analogies: [
        'Aplastic anemia is like a factory shutdown where all production lines stop working',
        'Think of bone marrow as a garden - in aplastic anemia, the soil can\'t grow new plants',
      ],
      examples: [
        'A teenager develops aplastic anemia after taking chloramphenicol antibiotic for an infection',
        'An older adult with hepatitis develops aplastic anemia as a rare complication',
      ],
    },
    2: {
      level: 2,
      summary: 'Aplastic anemia is a bone marrow failure syndrome characterized by pancytopenia and hypocellular marrow, caused by autoimmune destruction of hematopoietic stem cells or toxic exposures.',
      explanation: 'Aplastic anemia is defined by peripheral pancytopenia (low ANC, hemoglobin, and platelets) with a hypocellular bone marrow lacking abnormal infiltration or fibrosis. The disease severity is classified as severe (ANC <500, platelets <20,000, reticulocytes <20,000 with >70% marrow cellularity loss) or very severe (ANC <200). The pathophysiology involves T-cell mediated autoimmune attack on hematopoietic stem cells, triggered in some cases by environmental exposures (benzene, radiation), drugs (chloramphenicol, NSAIDs, anticonvulsants), viruses (hepatitis, EBV, HIV), or preceding seronegative hepatitis. Diagnosis requires bone marrow biopsy showing marked hypocellularity with fat replacement. Differential diagnosis includes myelodysplastic syndrome, paroxysmal nocturnal hemoglobinuria (PNH), large granular lymphocytic leukemia, and inherited bone marrow failure syndromes (Fanconi anemia). Treatment options depend on age: immunosuppressive therapy (IST) for older adults; allogeneic stem cell transplant for young patients with matched sibling donors.',
      keyTerms: [
        { term: 'Pancytopenia', definition: 'Deficiency of all three blood cell types in peripheral blood' },
        { term: 'Hypocellular', definition: 'Bone marrow with reduced cellularity, mostly replaced by fat' },
        { term: 'Hematopoietic stem cells', definition: 'Cells that give rise to all blood cell lineages' },
        { term: 'ANC', definition: 'Absolute neutrophil count, measure of infection-fighting cells' },
        { term: 'Reticulocyte', definition: 'Immature red blood cells, typically very low in aplastic anemia' },
      ],
      analogies: [
        'The immune system in aplastic anemia is like overzealous security guards shutting down a factory',
        'Hypocellular marrow is like an empty warehouse where production should be happening',
      ],
      examples: [
        'A 25-year-old with severe aplastic anemia requiring ATG and cyclosporine immunosuppression',
        'A child with Fanconi anemia developing progressive bone marrow failure',
      ],
    },
    3: {
      level: 3,
      summary: 'Aplastic anemia pathophysiology centers on T-cell mediated stem cell destruction, requiring differentiation from clonal and inherited marrow failure syndromes and risk-stratified treatment selection.',
      explanation: 'The immune pathogenesis involves oligoclonal expanded cytotoxic T-cells producing interferon-gamma and TNF-alpha that suppress and kill hematopoietic stem cells. Clonal evolution to MDS or acute leukemia occurs in 10-15% of patients treated with IST alone. PNH clones are detectable by flow cytometry in up to 50% of aplastic anemia patients, and vice versa - these conditions exist on a spectrum of bone marrow failure. Diagnostic workup includes bone marrow biopsy with cytogenetics, flow cytometry for PNH clones, chromosomal breakage testing for Fanconi anemia, and telomere length testing for dyskeratosis congenita. Treatment algorithm: patients <40 years with matched sibling donor undergo allogeneic stem cell transplant upfront (best outcomes, lowest relapse); others receive horse ATG + cyclosporine + eltrombopag IST. Response assessment at 3-4 months; non-responders may receive second course of ATG or alternative donor transplant. Eltrombopag, a thrombopoietin receptor agonist, has transformed outcomes by stimulating residual stem cells, improving response rates to 70-80%.',
      keyTerms: [
        { term: 'Horse ATG', definition: 'Anti-thymocyte globulin from rabbit or horse, main immunosuppressive therapy' },
        { term: 'Eltrombopag', definition: 'Thrombopoietin receptor agonist that stimulates stem cell production' },
        { term: 'Clonal evolution', definition: 'Progression to MDS or leukemia over time' },
        { term: 'Fanconi anemia', definition: 'Inherited DNA repair defect causing bone marrow failure and cancer predisposition' },
        { term: 'PNH clone', definition: 'Population of blood cells lacking GPI-anchored proteins, detected by flow cytometry' },
      ],
    },
    4: {
      level: 4,
      summary: 'Contemporary aplastic anemia management integrates diagnostic precision, immunosuppressive protocols with thrombopoietin agonists, and strategic use of transplantation based on age, donor availability, and disease severity.',
      explanation: 'Immunosuppressive therapy consists of horse ATG 40 mg/kg x 4 days plus cyclosporine starting day 1 with trough levels maintained at 150-250 ng/mL, continued 12 months minimum with slow taper. Eltrombopag 150 mg daily added from day 14 significantly improves response rates. Response criteria: partial (transfusion independence, no longer meeting severity criteria), complete (normal counts for age/sex). Hematologic response typically occurs by 3-4 months; 30-40% achieve CR, 40-50% PR. Transplant approaches: matched sibling donor uses cyclophosphamide + ATG conditioning; unrelated donor transplant reserved for IST failures or severe disease with available donor. Graft rejection and GVHD are major complications. Supportive care is critical: transfusion thresholds (platelets <10,000, Hgb <7-8 g/dL), iron chelation for heavily transfused patients, infection prophylaxis (antifungals, antivirals), and growth factors. Clonal surveillance with annual bone marrow exams and cytogenetics detects evolution to MDS/AML.',
      keyTerms: [
        { term: 'GVHD', definition: 'Graft-versus-host disease, immune attack of recipient by donor cells' },
        { term: 'Cyclophosphamide', definition: 'Chemotherapy drug used in conditioning regimens' },
        { term: 'Transfusion independence', definition: 'Not requiring blood transfusions for at least 6 months' },
        { term: 'Cytogenetics', definition: 'Chromosome analysis of bone marrow cells' },
        { term: 'Clonal surveillance', definition: 'Monitoring for evolution to MDS or acute leukemia' },
      ],
      clinicalNotes: 'Urgent referral to specialized center required for suspected aplastic anemia. Screen for PNH clones in all patients. Young patients (<40) should have HLA typing for sibling donors. Horse ATG preferred over rabbit ATG for first-line therapy. Monitor cyclosporine levels and renal function. Eltrombopag improves response but monitor liver enzymes. Prophylactic antimicrobials important during neutropenia. Transplant evaluation for IST failure or severe disease with donor available. Long-term monitoring for clonal evolution and secondary malignancies.',
    },
    5: {
      level: 5,
      summary: 'Expert aplastic anemia management requires integration of advanced diagnostics, optimized immunosuppression, judicious transplantation timing, and comprehensive long-term surveillance for complications and clonal evolution.',
      explanation: 'Diagnostic precision includes next-generation sequencing panels for somatic mutations (ASXL1, DNMT3A associated with clonal evolution), detailed chromosomal analysis, and comprehensive workup for inherited bone marrow failure (telomere length, chromosomal breakage). Treatment selection balances transplant risks vs IST benefits based on age, donor type, comorbidities, and patient preference. For young patients without matched sibling donor: unrelated donor transplant outcomes approach sibling donor with modern conditioning; consider if severe disease and donor available. Alternative donor transplants (haploidentical, cord blood) reserved for refractory disease. Refractory disease management: second ATG course (rabbit ATG), alemtuzumab, high-dose cyclophosphamide (investigational). Long-term complications: iron overload from transfusions requiring chelation; secondary MDS/AML risk necessitating annual marrow exams; PNH evolution; solid tumors from radiation/cyclophosphamide exposure. Special populations: pregnancy management challenging - supportive care preferred; hepatitis-associated aplastic anemia often responds well to IST; elderly patients may have comorbidities limiting intensive therapy options.',
      keyTerms: [
        { term: 'Haploidentical transplant', definition: 'Half-matched donor transplant, usually parent or child' },
        { term: 'Alemtuzumab', definition: 'Anti-CD52 monoclonal antibody for immunosuppression' },
        { term: 'Dyskeratosis congenita', definition: 'Telomere disorder causing marrow failure and pulmonary fibrosis' },
        { term: 'ASXL1', definition: 'Gene mutation associated with clonal evolution to MDS' },
        { term: 'Conditioning regimen', definition: 'Treatment to prepare patient for stem cell transplant' },
      ],
      clinicalNotes: 'Somatic mutation testing identifies patients at higher risk for clonal evolution. Telomere length testing in young patients with family history or physical anomalies suggests inherited syndrome. Transplant conditioning intensity adjusted by age and comorbidities. Monitor for late effects including secondary malignancies, endocrine dysfunction, and infertility. Document transfusion history for iron load assessment. PNH clone size correlates with hemolysis and thrombosis risk. Quality of life assessment important in long-term survivors. Consider fertility preservation before transplant.',
    },
  },
  media: [],
  citations: [
    'Young NS. Current concepts in the pathophysiology and treatment of aplastic anemia. Hematology Am Soc Hematol Educ Program. 2013;2013:76-81.',
    'Townley DM, Scheinberg P, Winkler T, et al. Eltrombopag added to standard immunosuppression for aplastic anemia. N Engl J Med. 2017;376(16):1540-1550.',
    'Killick SB, Bown N, Cavenagh J, et al. Guidelines for the diagnosis and management of adult aplastic anaemia. Br J Haematol. 2016;172(2):187-207.',
  ],
  crossReferences: ['hematology-pnh', 'hematology-mds', 'hematology-bone-marrow-transplant'],
  tags: {
    systems: ['hematology'],
    topics: ['bone marrow failure', 'pancytopenia', 'immunosuppression', 'stem cell transplant'],
    keywords: ['aplastic anemia', 'pancytopenia', 'bone marrow failure', 'ATG', 'eltrombopag'],
  },
  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
