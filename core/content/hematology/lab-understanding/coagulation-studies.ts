import { EducationalContent } from '../types';

export const coagulationStudies: EducationalContent = {
  id: 'hematology-coagulation-studies',
  type: 'concept',
  name: 'Coagulation Studies',
  alternateNames: ['Coagulation Tests', 'Clotting Studies', 'Hemostasis Testing', 'PT/INR', 'aPTT'],
  levels: {
    1: {
      level: 1,
      summary: 'Coagulation studies are blood tests that check how well your blood clots.',
      explanation: 'Coagulation studies are tests that measure how long it takes for your blood to clot. The most common tests are PT (prothrombin time) and aPTT (activated partial thromboplastin time). These tests help doctors understand if your blood clots too quickly, too slowly, or just right. They are used to check for bleeding disorders, monitor blood thinner medications like warfarin, and assess bleeding risk before surgery. If results are abnormal, more specific tests may be done to find out which clotting factors are affected. The tests involve taking a blood sample and adding chemicals to see how quickly clots form. Results help doctors decide if treatment is needed or if medication doses need adjustment.',
      keyTerms: [
        { term: 'PT', definition: 'Prothrombin time, a test measuring how long blood takes to clot' },
        { term: 'INR', definition: 'International Normalized Ratio, a standardized way to report PT results' },
        { term: 'aPTT', definition: 'Activated partial thromboplastin time, another clotting test' },
        { term: 'Clotting factors', definition: 'Proteins in blood that work together to form clots' },
      ],
      analogies: [
        'Coagulation studies are like timing how long it takes for glue to set',
        'Think of clotting factors as dominoes - the test sees if they all fall in the right order',
      ],
      examples: [
        'A patient on warfarin has regular PT/INR tests to ensure their dose is correct',
        'Someone with unexplained bruising gets coagulation studies to check for bleeding disorder',
      ],
    },
    2: {
      level: 2,
      summary: 'Coagulation studies evaluate the extrinsic (PT/INR), intrinsic (aPTT), and common pathways of coagulation, guiding diagnosis of bleeding disorders and monitoring of anticoagulation therapy.',
      explanation: 'The coagulation cascade has three pathways: extrinsic (tissue factor initiated, measured by PT), intrinsic (contact activation, measured by aPTT), and common (final steps to fibrin formation). PT assesses factors VII, X, V, II (prothrombin), and I (fibrinogen). INR standardizes PT across different laboratories. aPTT assesses factors XII, XI, IX, VIII, X, V, II, and I. PT prolonged by warfarin, vitamin K deficiency, liver disease, DIC; aPTT prolonged by heparin, hemophilia, lupus anticoagulant, specific factor deficiencies. Additional tests include fibrinogen level, thrombin time (TT), D-dimer, and mixing studies. Mixing patient plasma with normal plasma helps distinguish factor deficiency (corrects) from inhibitor (does not correct). Specific factor assays quantify individual factor levels. Bleeding time (now largely replaced by PFA-100) assessed platelet function. Coagulation testing is essential before invasive procedures, in unexplained bleeding, and for anticoagulation monitoring.',
      keyTerms: [
        { term: 'Extrinsic pathway', definition: 'Coagulation pathway initiated by tissue injury, measured by PT' },
        { term: 'Intrinsic pathway', definition: 'Coagulation pathway involving contact factors, measured by aPTT' },
        { term: 'Common pathway', definition: 'Final steps where intrinsic and extrinsic pathways converge' },
        { term: 'Mixing study', definition: 'Test mixing patient and normal plasma to identify deficiency vs inhibitor' },
        { term: 'Lupus anticoagulant', definition: 'Paradoxical antibody causing prolonged aPTT but causing thrombosis' },
      ],
      analogies: [
        'The extrinsic and intrinsic pathways are like two on-ramps merging onto the same highway',
        'A mixing study is like adding fresh ingredients to sourdough to see if it will rise',
      ],
      examples: [
        'Prolonged aPTT that corrects with mixing suggests hemophilia A or B',
        'Prolonged aPTT that does not correct suggests lupus anticoagulant or specific inhibitor',
      ],
    },
    3: {
      level: 3,
      summary: 'Comprehensive coagulation evaluation includes screening tests, mixing studies, specific factor assays, and specialized testing for platelet function, fibrinolysis, and thrombophilia.',
      explanation: 'Extended testing: factor assays for II, V, VII, VIII, IX, X, XI, XII, XIII; von Willebrand factor antigen and activity (ristocetin cofactor); platelet function analyzer (PFA-100) screens for platelet disorders and vWD; platelet aggregation studies for specific platelet defects. Fibrinolysis markers: D-dimer (fibrin degradation products, elevated in thrombosis and DIC), fibrinogen, thrombin time. DIC workup: PT, aPTT, fibrinogen, D-dimer, platelet count. Liver disease affects multiple factors (except VIII). Vitamin K deficiency affects II, VII, IX, X (and proteins C and S). Hemophilia A (factor VIII deficiency) and B (factor IX deficiency) are X-linked bleeding disorders. vWD affects both platelet function (primary hemostasis) and factor VIII levels (secondary hemostasis). Rare factor deficiencies (XI, XIII) have variable bleeding phenotypes. Antiphospholipid antibodies cause prolonged aPTT but thrombotic risk. Thrombophilia testing includes factor V Leiden, prothrombin mutation, protein C, protein S, antithrombin.',
      keyTerms: [
        { term: 'Primary hemostasis', definition: 'Initial platelet plug formation at injury site' },
        { term: 'Secondary hemostasis', definition: 'Coagulation cascade strengthening the platelet plug' },
        { term: 'Fibrinolysis', definition: 'Breakdown of clots after healing' },
        { term: 'Platelet aggregation', definition: 'Platelets clumping together, measured by specialized testing' },
        { term: 'Ristocetin cofactor', definition: 'Assay measuring vWF activity in helping platelets adhere' },
      ],
    },
    4: {
      level: 4,
      summary: 'Clinical application of coagulation testing requires understanding preanalytic variables, test limitations, and systematic interpretation algorithms for bleeding and thrombotic disorders.',
      explanation: 'Preanalytic variables: citrate concentration (3.2% vs 3.8% affects results), hematocrit (high Hct requires adjusted citrate), time to processing, temperature, traumatic draw (tissue factor contamination). Heparin contamination (indwelling lines) prolongs aPTT - heparin-neutralizing agents or thrombin time can identify. Warfarin therapy: target INR 2.0-3.0 for most indications; 2.5-3.5 for mechanical valves or recurrent VTE. Direct oral anticoagulants (DOACs) affect tests variably: dabigatran prolongs TT and aPTT; rivaroxaban/apixaban affect PT and anti-Xa assays. DOACs generally not monitored routinely; specific assays available if needed. Lupus anticoagulant testing: sensitive aPTT, dilute Russell viper venom time (dRVVT), silica clotting time with confirmatory mixing studies and phospholipid dependence. Factor XIII deficiency: normal PT/aPTT but delayed bleeding; urea clot solubility test or specific assay needed. Platelet mapping and TEG/ROTEM for perioperative management and trauma. Therapeutic drug monitoring: anti-Xa levels for LMWH (required in pregnancy, renal impairment, obesity); factor levels for hemophilia.',
      keyTerms: [
        { term: 'Anti-Xa assay', definition: 'Test measuring activity of heparin or factor Xa inhibitors' },
        { term: 'dRVVT', definition: 'Dilute Russell viper venom time, test for lupus anticoagulant' },
        { term: 'TEG/ROTEM', definition: 'Thromboelastography/rotational thromboelastometry, whole blood viscoelastic testing' },
        { term: 'Clot solubility', definition: 'Test for factor XIII deficiency using urea or acetic acid' },
        { term: 'Phospholipid dependence', definition: 'Confirmatory test for lupus anticoagulant' },
      ],
      clinicalNotes: 'Always consider preanalytic issues with unexpected results. Heparin in lines commonly affects aPTT - redraw from peripheral vein if concern. Vitamin K deficiency suspected with PT prolonged more than aPTT. Liver disease affects PT and aPTT; isolated prolonged aPTT suggests specific factor deficiency or lupus anticoagulant. Mixing studies essential for unexplained prolongations. Factor XIII deficiency causes poor wound healing and delayed postoperative bleeding with normal screening tests.',
    },
    5: {
      level: 5,
      summary: 'Expert coagulation testing involves specialized assays, complex interpretation scenarios, management of anticoagulation in special populations, and emerging testing methodologies.',
      explanation: 'Specialized testing: chromogenic factor assays (less affected by lupus anticoagulant); vWF multimer analysis for type 2 vWD classification; platelet electron microscopy for storage pool disorders; genetic testing for hemophilia mutations, factor V Leiden, prothrombin mutation. Acquired inhibitors: factor VIII inhibitors (hemophilia A with inhibitors, postpartum, autoimmune), acquired vWD (aortic stenosis, Wilms tumor), acquired hemophilia A (spontaneous inhibitors in non-hemophiliacs). Bethesda assay quantifies inhibitor titer; Nijmegen modification improves sensitivity. Complex scenarios: bridging anticoagulation for procedures (stop warfarin, bridge with LMWH); heparin-induced thrombocytopenia (HIT) requiring alternative anticoagulation; anticoagulation in pregnancy (LMWH preferred, warfarin contraindicated first trimester); anticoagulation in renal/hepatic impairment (dose adjustments, alternatives). New oral anticoagulant reversal: andexanet alfa (factor Xa inhibitor reversal), idarucizumab (dabigatran reversal), 4-factor PCC for warfarin reversal. Personalized anticoagulation: pharmacogenomics for warfarin dosing; individual risk assessment for VTE prophylaxis.',
      keyTerms: [
        { term: 'Bethesda assay', definition: 'Test measuring strength of factor inhibitors' },
        { term: 'Acquired hemophilia A', definition: 'Spontaneous development of factor VIII inhibitors' },
        { term: 'Andexanet alfa', definition: 'Reversal agent for factor Xa inhibitors' },
        { term: '4-factor PCC', definition: 'Prothrombin complex concentrate for warfarin reversal' },
        { term: 'Chromogenic assay', definition: 'Color-based test measuring factor activity' },
      ],
      clinicalNotes: 'vWD workup requires careful sample handling - refrigerated samples may lose vWF activity. Platelet aggregation requires non-anticoagulated or specific anticoagulated blood processed quickly. Factor VIII and vWF are acute phase reactants - may be elevated in stress, pregnancy, inflammation. Factor assays not reliable when lupus anticoagulant present - chromogenic assays or treatment with phospholipid may help. Inhibitor titer >5 Bethesda units considered high; <5 may respond to immune tolerance induction.',
    },
  },
  media: [],
  citations: [
    'Adcock DM, Gosselin R. Direct oral anticoagulants and the clinical laboratory: what you need to know. Int J Lab Hematol. 2020;42 Suppl 1:67-75.',
    'Kitchen S, McCraw A, Echenagucia M. Diagnosis of Hemophilia and Other Bleeding Disorders: A Laboratory Manual. 2nd ed. Montreal: World Federation of Hemophilia; 2010.',
    'Tripodi A. The laboratory and the direct oral anticoagulants. Blood. 2013;121(20):4032-4035.',
  ],
  crossReferences: ['hematology-hemophilia', 'hematology-von-willebrand', 'hematology-thrombophilia'],
  tags: {
    systems: ['hematology'],
    topics: ['coagulation', 'laboratory medicine', 'clotting tests', 'anticoagulation monitoring'],
    keywords: ['PT', 'INR', 'aPTT', 'coagulation', 'clotting factors', 'bleeding disorder'],
  },
  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
