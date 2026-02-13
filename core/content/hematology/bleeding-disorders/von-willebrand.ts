import { EducationalContent } from '../../types';

export const vonWillebrandDisease: EducationalContent = {
  id: 'hematology-von-willebrand',
  type: 'condition',
  name: 'von Willebrand Disease',
  alternateNames: ['vWD', 'VWD', 'Pseudohemophilia', 'Angiohemophilia'],
  levels: {
    1: {
      level: 1,
      summary: 'von Willebrand disease is a common bleeding disorder caused by a problem with a protein that helps blood clot.',
      explanation: 'von Willebrand disease is the most common bleeding disorder. It happens when you don\'t have enough von Willebrand factor (vWF), or it doesn\'t work properly. vWF is a protein that helps platelets stick together to form clots and carries clotting factor VIII in the blood. When vWF is missing or defective, you may bleed longer than normal. Symptoms include frequent nosebleeds, easy bruising, heavy periods, bleeding gums, and prolonged bleeding after cuts or surgery. The condition is usually inherited from a parent. There are different types - some are milder, some more severe. Treatment depends on the type and may include a special medication that helps release vWF from the body\'s stores, or replacement products containing vWF. Many people with mild forms live normal lives with minimal treatment.',
      keyTerms: [
        { term: 'von Willebrand factor', definition: 'A protein that helps platelets stick together and carries factor VIII' },
        { term: 'Platelets', definition: 'Small cell fragments that help stop bleeding by forming clots' },
        { term: 'Factor VIII', definition: 'A clotting protein that works with vWF to stop bleeding' },
        { term: 'Inherited', definition: 'Passed down from parents to children through genes' },
      ],
      analogies: [
        'vWF is like glue that helps blood cells stick together to plug holes',
        'Think of vWF as a delivery truck that carries factor VIII where it\'s needed',
      ],
      examples: [
        'A woman with heavy menstrual periods discovers she has type 1 vWD',
        'A child who bruises easily and has frequent nosebleeds is diagnosed with vWD',
      ],
    },
    2: {
      level: 2,
      summary: 'von Willebrand disease is the most common inherited bleeding disorder, caused by quantitative (types 1 and 3) or qualitative (type 2) defects in von Willebrand factor, affecting both platelet adhesion and factor VIII stability.',
      explanation: 'vWD is classified into three types: Type 1 (70-80% of cases) is partial quantitative deficiency with mild to moderate bleeding; Type 2 (15-20%) is qualitative defects with four subtypes (2A, 2B, 2M, 2N) affecting vWF function differently; Type 3 is severe complete deficiency with autosomal recessive inheritance and severe bleeding. vWF has two main functions: mediating platelet adhesion to injured endothelium (requires high molecular weight multimers) and stabilizing factor VIII in circulation. Symptoms include mucocutaneous bleeding: epistaxis, menorrhagia, gingival bleeding, easy bruising, and prolonged bleeding with surgery or dental procedures. Diagnosis involves screening with aPTT (may be prolonged due to low factor VIII), platelet count (may be low in type 2B), and specific assays: vWF antigen (amount), vWF activity (function, measured by ristocetin cofactor activity or collagen binding), and factor VIII level. vWF levels vary with blood type (15-20% lower in type O), stress, pregnancy, and estrogen.',
      keyTerms: [
        { term: 'vWF antigen', definition: 'Measures the amount of von Willebrand factor protein' },
        { term: 'Ristocetin cofactor', definition: 'Test measuring vWF activity in helping platelets clump' },
        { term: 'Multimers', definition: 'Different sizes of vWF protein, large multimers most active' },
        { term: 'Mucocutaneous bleeding', definition: 'Bleeding from skin and mucous membranes like nose and gums' },
        { term: 'Menorrhagia', definition: 'Abnormally heavy or prolonged menstrual bleeding' },
      ],
      analogies: [
        'vWF multimers are like different sized glue sticks - the biggest ones work best for large repairs',
        'Type 1 is like having fewer glue sticks; Type 2 is like having glue sticks that don\'t stick well',
      ],
      examples: [
        'A 16-year-old with type 2A vWD has prolonged bleeding after wisdom teeth removal',
        'A patient with type 3 vWD experiences joint bleeding similar to hemophilia',
      ],
    },
    3: {
      level: 3,
      summary: 'vWD diagnosis requires specialized testing with vWD panel, multimer analysis for type 2 classification, and individualized treatment based on type, bleeding severity, and clinical context.',
      explanation: 'The vWD diagnostic panel includes vWF antigen, vWF activity (ristocetin cofactor activity or collagen binding), and factor VIII. The vWF activity/antigen ratio helps identify type 2 (ratio <0.7 suggests qualitative defect). Type 2A shows decreased high molecular weight multimers; 2B shows increased platelet aggregation with low-dose ristocetin; 2M has decreased platelet binding with normal multimers; 2N has decreased factor VIII binding. Multimer analysis on agarose gel electrophoresis identifies loss of large multimers. Treatment options: DDAVP (desmopressin) releases endogenous vWF from endothelial stores, effective for type 1 and some type 2; given IV or intranasally with peak effect at 30-90 minutes. vWF concentrates (plasma-derived with factor VIII) for types 2B, 2N, 3, or when DDAVP contraindicated. Antifibrinolytics (tranexamic acid, aminocaproic acid) for mucosal bleeding. Recombinant vWF now available. Adjunctive therapies include hormonal suppression of menses for women with menorrhagia.',
      keyTerms: [
        { term: 'DDAVP', definition: 'Desmopressin, synthetic hormone that releases vWF from storage' },
        { term: 'vWF concentrate', definition: 'Purified vWF product for replacement therapy' },
        { term: 'Antifibrinolytic', definition: 'Medication that prevents breakdown of blood clots' },
        { term: 'Ristocetin-induced platelet agglutination', definition: 'Test to identify type 2B vWD' },
        { term: 'Tranexamic acid', definition: 'Antifibrinolytic drug that reduces bleeding' },
      ],
    },
    4: {
      level: 4,
      summary: 'Clinical management of vWD requires accurate phenotypic classification, tailored therapeutic strategies, and specialized approaches for surgical prophylaxis and women\'s health issues.',
      explanation: 'DDAVP trial testing determines individual response before relying on it for procedures. DDAVP tachyphylaxis occurs with repeated dosing. vWF concentrates: Humate-P, Alphanate, Wilate; dosing 20-40 IU/kg for minor procedures, 40-60 IU/kg for major procedures. Recombinant vWF (Vonvendi) available without factor VIII, useful when avoiding thrombosis risk. Type 2B requires vWF concentrate as DDAVP may worsen thrombocytopenia. Type 2N may be mistaken for hemophilia A - important to test vWF activity. Type 3 patients may develop inhibitors. Perioperative management: obtain baseline vWD panel; DDAVP or vWF concentrate 30-60 minutes pre-procedure; maintain vWF activity >50% for 3-7 days post-op depending on procedure; antifibrinolytics as adjunct. Women with menorrhagia: tranexamic acid during menses, hormonal therapy (combined contraceptives, levonorgestrel IUD), vWF concentrate if severe. Pregnancy management: vWF rises during pregnancy usually adequate for delivery; check levels at 34-36 weeks; vWF concentrate if levels inadequate.',
      keyTerms: [
        { term: 'Tachyphylaxis', definition: 'Decreased response to repeated doses of medication' },
        { term: 'Inhibitor', definition: 'Antibody against vWF that develops in some type 3 patients' },
        { term: 'Wilate', definition: 'High-purity vWF concentrate with low factor VIII content' },
        { term: 'Vonvendi', definition: 'Recombinant vWF product' },
        { term: 'Levonorgestrel IUD', definition: 'Hormonal intrauterine device that reduces menstrual bleeding' },
      ],
      clinicalNotes: 'vWD levels fluctuate - repeat testing if initial results borderline. Type O blood has 20-30% lower vWF levels. Always test vWF activity with antigen to calculate ratio. Type 2B can cause thrombocytopenia - check platelet count. For surgery: vWF activity target >50% for minor, >100% for major procedures. DDAVP contraindicated in type 2B, some cardiovascular conditions, and hyponatremia risk. Women with vWD commonly present with menorrhagia - consider vWD in workup of heavy periods.',
    },
    5: {
      level: 5,
      summary: 'Expert vWD management integrates precise molecular diagnosis, individualized pharmacokinetic-guided therapy, complex perioperative planning, and multidisciplinary care for specialized populations.',
      explanation: 'Genetic testing identifies mutations in VWF gene: type 1 (missense mutations); type 2A (defective multimerization); type 2B (gain-of-function mutations increasing platelet binding); type 2M (decreased platelet binding); type 2N (defective factor VIII binding); type 3 (large deletions). Genetic counseling for family planning. Pharmacokinetic studies determine individual vWF half-life and recovery, optimizing dosing intervals. Complex cases: acquired vWD occurs in aortic stenosis (Heyde syndrome), Wilms tumor, autoimmune disorders, hypothyroidism - treat underlying condition plus vWF replacement. Inhibitor management: high-dose vWF concentrate, bypassing agents, or immune tolerance. Pediatric considerations: early diagnosis important for procedure planning; intranasal DDAVP effective in older children. Emergency management: for severe bleeding, use vWF concentrate with factor VIII; avoid cryoprecipitate if possible (no viral inactivation). Gene therapy under investigation. Hemostasis laboratory involvement for monitoring during major procedures.',
      keyTerms: [
        { term: 'Acquired vWD', definition: 'Develops later in life due to underlying condition' },
        { term: 'Heyde syndrome', definition: 'Acquired vWD in aortic stenosis causing GI bleeding' },
        { term: 'Gain-of-function', definition: 'Mutation causing increased rather than decreased activity' },
        { term: 'Cryoprecipitate', definition: 'Blood product containing vWF but less preferred due to infection risk' },
        { term: 'Pharmacokinetics', definition: 'Study of drug absorption, distribution, metabolism, and elimination' },
      ],
      clinicalNotes: 'Molecular diagnosis confirms type and aids genetic counseling. Acquired vWD diagnosis requires ruling out inherited form. For major surgery, maintain vWF activity >100% initially, then >50% for 7-10 days. Monitor factor VIII levels too - can rise excessively with vWF replacement causing thrombosis risk. Type 2N heterozygotes may have normal vWF but low factor VIII - important distinction from hemophilia A. Women planning pregnancy should have vWD assessment. Dental procedures may only need antifibrinolytics. Document all procedures and response to treatment.',
    },
  },
  media: [],
  citations: [
    { id: 'neff-vwd-2020', type: 'article', title: 'Current controversies in the diagnosis and treatment of von Willebrand disease', authors: ['Neff AT'], source: 'Hematology Am Soc Hematol Educ Program' },
    { id: 'james-vwd-guidelines-2021', type: 'article', title: 'ASH ISTH NHF WFH 2021 guidelines on the diagnosis of von Willebrand disease', authors: ['James PD', 'Connell NT', 'Ameer B'], source: 'Blood Adv' },
    { id: 'james-vwd-women-2009', type: 'article', title: 'von Willebrand disease and other bleeding disorders in women: consensus on diagnosis and management', authors: ['James AH', 'Kouides PA', 'Abdul-Kadir R'], source: 'Am J Obstet Gynecol' },
  ],
  crossReferences: [
    { targetId: 'hematology-hemophilia', targetType: 'condition', relationship: 'related', label: 'Hemophilia' },
    { targetId: 'hematology-platelet-disorders', targetType: 'condition', relationship: 'related', label: 'Platelet Disorders' },
    { targetId: 'hematology-coagulation-studies', targetType: 'concept', relationship: 'related', label: 'Coagulation Studies' },
  ],
  tags: {
    systems: ['hematology'],
    topics: ['bleeding disorders', 'von Willebrand', 'coagulation', 'inherited disease'],
    keywords: ['vWD', 'von Willebrand', 'bleeding', 'vWF', 'DDAVP', 'menorrhagia'],
  },
  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
