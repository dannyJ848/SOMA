import { EducationalContent } from '../types';

export const hypercoagulableStates: EducationalContent = {
  id: 'hematology-hypercoagulable-states',
  type: 'condition',
  name: 'Hypercoagulable States',
  alternateNames: ['Thrombophilia', 'Clotting Disorders', 'Prothrombotic States', 'Inherited Thrombophilia'],
  levels: {
    1: {
      level: 1,
      summary: 'Hypercoagulable states are conditions that make your blood more likely to form clots than normal, increasing your risk for blood clots.',
      explanation: 'Some people have blood that clots too easily, which can lead to dangerous blood clots in veins or arteries. This can be something you\'re born with (inherited from your parents) or something that develops later in life. Inherited conditions include Factor V Leiden and prothrombin gene mutation—changes in genes that affect how your blood clots. Acquired conditions (ones you develop) include taking certain medications, having cancer, being pregnant, or having an autoimmune disease called antiphospholipid syndrome. People with these conditions may never have a problem, but some develop blood clots in their legs (DVT), lungs (PE), or other areas. If you or family members have had unexplained blood clots, especially at a young age, your doctor might test for these conditions. Treatment depends on the specific condition and whether you\'ve already had a clot.',
      keyTerms: [
        { term: 'Hypercoagulable', definition: 'Blood that clots more easily than normal' },
        { term: 'Thrombophilia', definition: 'A condition that increases the risk of blood clots' },
        { term: 'Factor V Leiden', definition: 'An inherited gene change that increases clotting risk' },
        { term: 'Inherited', definition: 'Passed down from parents through genes' },
      ],
    },
    2: {
      level: 2,
      summary: 'Thrombophilias are inherited or acquired conditions that increase venous and/or arterial thrombotic risk, with varying clinical significance and management implications.',
      explanation: 'Inherited thrombophilias affect the coagulation balance. Factor V Leiden (FVL, most common) causes activated protein C resistance; heterozygotes have 3-8x increased VTE risk, homozygotes 80x. Prothrombin G20210A mutation causes elevated prothrombin levels; 2-3x increased VTE risk. Protein C, protein S, and antithrombin deficiencies impair natural anticoagulation; generally stronger risk factors. Acquired thrombophilias include antiphospholipid syndrome (lupus anticoagulant, anticardiolipin, anti-beta2-glycoprotein I antibodies causing venous/arterial thrombosis and pregnancy complications) and malignancy (cancer increases risk through various mechanisms). Testing indications are debated: generally not recommended for provoked VTE or routine screening; consider in unprovoked VTE especially if young, strong family history, or unusual site. Results rarely change management in acute setting. Anticoagulation duration is primarily guided by clinical factors (provoked vs. unprovoked), not thrombophilia status, except antiphospholipid syndrome requiring long-term anticoagulation after thrombosis.',
      keyTerms: [
        { term: 'Activated protein C resistance', definition: 'Defect causing Factor V Leiden, impairs clot regulation' },
        { term: 'Antiphospholipid syndrome', definition: 'Autoimmune disorder causing clots and pregnancy loss' },
        { term: 'Lupus anticoagulant', definition: 'Antibody paradoxically causing clotting despite prolonging aPTT' },
        { term: 'Natural anticoagulants', definition: 'Proteins C, S, and antithrombin that limit clot formation' },
        { term: 'Unprovoked VTE', definition: 'Blood clot without an identifiable trigger' },
      ],
    },
    3: {
      level: 3,
      summary: 'Thrombophilia evaluation requires understanding of test limitations, timing considerations, and clinical application of results within the context of overall recurrence risk assessment.',
      explanation: 'Inherited thrombophilia testing includes: FVL by DNA-based testing or APC resistance assay; prothrombin G20210A by DNA testing; functional assays for protein C, protein S (total and free), and antithrombin activity. Testing limitations: acute thrombosis consumes anticoagulant proteins (false-low results); heparin lowers antithrombin; warfarin lowers proteins C and S; DOACs can affect various assays; pregnancy lowers protein S. Optimal testing: 4-6 weeks after acute event, off anticoagulation for 2-4 weeks (warfarin) or 2-3 days (DOACs); genetic tests not affected. Antiphospholipid syndrome diagnosis requires clinical criteria (thrombosis or pregnancy morbidity) plus laboratory criteria (positive anticardiolipin, anti-beta2-glycoprotein I, or lupus anticoagulant on two occasions 12 weeks apart). Risk stratification in APS: triple-positive (all three tests) has highest recurrence risk. Management implications: single inherited thrombophilia rarely changes anticoagulation duration; combined defects or strong family history may favor extended therapy; APS mandates indefinite anticoagulation with warfarin (DOACs inferior per TRAPS trial).',
      keyTerms: [
        { term: 'APC resistance assay', definition: 'Functional test for Factor V Leiden' },
        { term: 'Functional assay', definition: 'Test measuring protein activity rather than amount' },
        { term: 'Triple-positive APS', definition: 'Antiphospholipid syndrome positive for all three antibody types' },
        { term: 'TRAPS trial', definition: 'Study showing warfarin superior to rivaroxaban in APS' },
        { term: 'Laboratory criteria', definition: 'Test requirements for APS diagnosis' },
      ],
    },
    4: {
      level: 4,
      summary: 'Advanced thrombophilia management integrates risk assessment models, family counseling, pregnancy management, and addresses rare thrombophilias and complex clinical scenarios.',
      explanation: 'Risk stratification: thrombophilia testing rarely changes management in isolation; clinical factors (unprovoked, male sex, residual thrombosis, elevated D-dimer) more predictive of recurrence. Family screening: generally not recommended unless affects immediate management (pregnancy planning, surgery, strong family history); genetic counseling important. Pregnancy management: FVL/prothrombin heterozygotes without personal VTE may use prophylactic-dose LMWH antepartum and 6 weeks postpartum; homozygotes or compound heterozygotes warrant prophylaxis; prior VTE typically receives therapeutic-dose LMWH. Rare thrombophilias: dysfibrinogenemia (abnormal fibrinogen), elevated factor VIII (reproducibly >150% increases risk), hyperhomocysteinemia (folate may help, role controversial). Arterial thrombosis: standard thrombophilia testing has limited role; consider APS, hyperhomocysteinemia, myeloproliferative neoplasms (JAK2). Unusual site thrombosis (cerebral venous sinus, splanchnic, upper extremity): broader workup including JAK2, PNH screen, occult malignancy. Catastrophic APS: acute multi-organ thrombosis requires anticoagulation plus steroids plus plasma exchange and/or IVIG.',
      keyTerms: [
        { term: 'Compound heterozygote', definition: 'Carrying two different thrombophilia mutations' },
        { term: 'Hyperhomocysteinemia', definition: 'Elevated homocysteine associated with thrombosis' },
        { term: 'Catastrophic APS', definition: 'Acute life-threatening multi-organ thrombosis in APS' },
        { term: 'Splanchnic thrombosis', definition: 'Clots in abdominal veins (portal, mesenteric, hepatic)' },
        { term: 'PNH', definition: 'Paroxysmal nocturnal hemoglobinuria, causing venous thrombosis' },
      ],
    },
    5: {
      level: 5,
      summary: 'Expert thrombophilia management requires nuanced application of testing, integration with clinical decision-making tools, and individualized counseling addressing uncertainty in a rapidly evolving field.',
      explanation: 'Clinical expertise recognizes thrombophilia testing limitations. Absolute risk matters: FVL heterozygote has ~0.5% annual VTE risk (vs. 0.1% general population)—still low absolute risk. Testing utility scenarios: useful in young unprovoked VTE informing extended therapy discussion; useful for family counseling when strong history; useful in pregnancy management; rarely useful in provoked VTE, elderly, or when management unchanged regardless of result. Antiphospholipid syndrome complexities: isolated low-titer positivity has unclear significance; triple-positive patients have highest recurrence risk and worse pregnancy outcomes; warfarin superior to DOACs per TRAPS; target INR 2-3 for first VTE, consider 3-4 for recurrent events or arterial thrombosis; some advocate adding aspirin. Emerging concepts: elevated factor VIII as risk factor for recurrence (not routinely tested); lipoprotein(a) association with venous and arterial thrombosis. Genetic counseling essential when testing positive: discuss implications for family members, insurance considerations, and psychological impact of diagnosis. Avoid over-testing: negative results don\'t eliminate recurrence risk; positive results may cause unwarranted anxiety or overtreatment. Shared decision-making for extended anticoagulation incorporates thrombophilia status as one factor among many.',
      keyTerms: [
        { term: 'Absolute risk', definition: 'Actual probability of event occurring, not relative increase' },
        { term: 'Lipoprotein(a)', definition: 'Emerging thrombotic risk factor with genetic determination' },
        { term: 'Target INR', definition: 'Goal anticoagulation intensity on warfarin' },
        { term: 'Genetic counseling', definition: 'Specialized counseling for inherited condition implications' },
        { term: 'Shared decision-making', definition: 'Patient-provider collaboration on treatment choices' },
      ],
      clinicalNotes: 'Do not test during acute thrombosis (except genetic tests) or on anticoagulation. Protein S particularly affected by acute illness, inflammation, pregnancy—consider repeating if low. LA testing requires specialized coagulation lab; false positives on anticoagulation common. Family testing: only if will change management (e.g., pregnancy planning, major surgery); genetic counseling recommended. Asymptomatic carriers: no routine prophylaxis; situational prophylaxis for high-risk situations (surgery, immobilization, long travel); counsel about symptoms and when to seek care. Pregnancy with thrombophilia: multidisciplinary care with hematology and maternal-fetal medicine. Document testing circumstances and results clearly for future reference. Negative testing does not exclude thrombophilia (limited panel) or future VTE risk. Cost-effectiveness of routine testing unproven; selective testing based on clinical judgment preferred.',
    },
  },
  media: [],
  citations: [
    'Connors JM. Thrombophilia Testing and Venous Thrombosis. N Engl J Med. 2017;377(12):1177-1187.',
    'Tektonidou MG, et al. EULAR recommendations for the management of antiphospholipid syndrome in adults. Ann Rheum Dis. 2019;78(10):1296-1304.',
    'Middeldorp S. Inherited thrombophilia: a double-edged sword. Hematology Am Soc Hematol Educ Program. 2016;2016(1):1-9.',
  ],
  crossReferences: ['hematology-dvt-pe', 'hematology-anticoagulation', 'hematology-coagulation-studies'],
  tags: {
    systems: ['hematology'],
    topics: ['thrombophilia', 'hypercoagulable', 'VTE', 'inherited disorders', 'antiphospholipid syndrome'],
    keywords: ['Factor V Leiden', 'prothrombin mutation', 'protein C', 'protein S', 'antithrombin', 'APS'],
  },
  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
