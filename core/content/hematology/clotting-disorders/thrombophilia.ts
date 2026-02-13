import { EducationalContent } from '../types';

export const thrombophilia: EducationalContent = {
  id: 'hematology-thrombophilia',
  type: 'condition',
  name: 'Thrombophilia',
  alternateNames: ['Hypercoagulable State', 'Hereditary Thrombophilia', 'Clotting Disorder', 'Prothrombotic State'],
  levels: {
    1: {
      level: 1,
      summary: 'Thrombophilia is a condition that increases your risk of developing abnormal blood clots.',
      explanation: 'Thrombophilia means you have a tendency to form blood clots more easily than normal. Some people are born with this condition (inherited), while others develop it later in life (acquired). Inherited thrombophilia is caused by genetic changes that affect proteins involved in blood clotting. Common types include factor V Leiden and prothrombin gene mutation. Acquired causes include prolonged immobility, certain medications, cancer, and autoimmune disorders. Having thrombophilia doesn\'t mean you will definitely get a blood clot, but your risk is higher. You may need to take blood thinners during high-risk situations like surgery or pregnancy. Many people with mild forms live normal lives with simple precautions like staying active and maintaining a healthy weight.',
      keyTerms: [
        { term: 'Thrombophilia', definition: 'A tendency to form blood clots more easily than normal' },
        { term: 'Inherited', definition: 'Passed from parents to children through genes' },
        { term: 'Factor V Leiden', definition: 'The most common inherited form of thrombophilia' },
        { term: 'Blood clot', definition: 'A clump of blood that forms in a blood vessel' },
      ],
      analogies: [
        'Thrombophilia is like having a car with overactive brakes - they work too well and stop the flow',
        'Think of your clotting system as a balance scale - thrombophilia tips it toward making clots',
      ],
      examples: [
        'A young person with factor V Leiden develops a blood clot after a long plane flight',
        'Someone with antiphospholipid syndrome has recurrent miscarriages before diagnosis',
      ],
    },
    2: {
      level: 2,
      summary: 'Thrombophilia comprises inherited and acquired conditions predisposing to venous thromboembolism through alterations in the coagulation cascade, natural anticoagulants, or fibrinolytic system.',
      explanation: 'Inherited thrombophilias include factor V Leiden (activated protein C resistance, most common), prothrombin G20210A mutation, protein C deficiency, protein S deficiency, and antithrombin deficiency. These affect approximately 5-8% of the population but account for only a minority of VTE cases. Acquired thrombophilias include antiphospholipid syndrome (autoimmune antibodies against phospholipid-binding proteins), cancer, pregnancy, oral contraceptives, hormone replacement therapy, and nephrotic syndrome. The pathophysiology involves imbalances in the hemostatic system: increased procoagulant activity, decreased natural anticoagulants, or impaired fibrinolysis. Clinical manifestations include venous thromboembolism (DVT, PE), superficial thrombophlebitis, and recurrent pregnancy loss (especially with antiphospholipid syndrome). Testing indications remain controversial: generally considered after unprovoked VTE at young age, recurrent VTE, thrombosis at unusual sites (portal, cerebral), or strong family history. Testing during acute thrombosis or while on anticoagulation can be misleading.',
      keyTerms: [
        { term: 'Factor V Leiden', definition: 'Mutation making factor V resistant to protein C inhibition' },
        { term: 'Protein C deficiency', definition: 'Lack of natural anticoagulant protein, inherited or acquired' },
        { term: 'Antiphospholipid syndrome', definition: 'Autoimmune condition causing thrombosis and pregnancy loss' },
        { term: 'Antithrombin', definition: 'Natural anticoagulant that inhibits thrombin and factor Xa' },
        { term: 'Unusual site thrombosis', definition: 'Clots in portal vein, mesenteric veins, or cerebral sinuses' },
      ],
      analogies: [
        'Natural anticoagulants are like safety valves - when deficient, pressure builds dangerously',
        'Factor V Leiden is like a stuck accelerator - the clotting system keeps going when it should stop',
      ],
      examples: [
        'A patient with protein S deficiency has recurrent DVTs starting in their 20s',
        'A woman with antiphospholipid syndrome experiences multiple miscarriages before diagnosis',
      ],
    },
    3: {
      level: 3,
      summary: 'Thrombophilia evaluation requires appropriate timing of testing, understanding of results implications, and individualized management based on thrombosis history and specific disorder.',
      explanation: 'Testing considerations: many tests affected by acute thrombosis, inflammation, pregnancy, or anticoagulation. Best to test at least 2 weeks after completing anticoagulation when clinically stable. Genetic tests (factor V Leiden, prothrombin mutation) remain valid anytime. Functional assays (protein C, S, antithrombin) unreliable during acute events and with warfarin (lowers C and S) or heparin (raises antithrombin). Interpretation: heterozygous factor V Leiden increases VTE risk 3-8 fold; homozygous increases risk 50-80 fold. Prothrombin mutation heterozygotes have 2-5 fold increased risk. Protein C, S, and antithrombin deficiencies carry higher risks, especially when levels <50%. Antiphospholipid syndrome requires clinical criteria (thrombosis or pregnancy morbidity) plus laboratory criteria (lupus anticoagulant, anticardiolipin, or anti-beta2 glycoprotein I antibodies on 2 occasions 12 weeks apart). Management: provoked VTE treated standard duration; unprovoked VTE often extended therapy in high-risk thrombophilia.',
      keyTerms: [
        { term: 'Heterozygous', definition: 'Having one copy of a mutation, usually milder effect' },
        { term: 'Homozygous', definition: 'Having two copies of a mutation, usually more severe' },
        { term: 'Lupus anticoagulant', definition: 'Paradoxically named antibody causing thrombosis' },
        { term: 'Functional assay', definition: 'Test measuring protein activity rather than amount' },
        { term: 'Beta-2 glycoprotein I', definition: 'Protein target of antibodies in antiphospholipid syndrome' },
      ],
    },
    4: {
      level: 4,
      summary: 'Clinical thrombophilia management integrates test interpretation, risk stratification, family counseling, and evidence-based strategies for VTE prevention and treatment duration.',
      explanation: 'Family screening of asymptomatic relatives controversial; may identify individuals needing prophylaxis during high-risk periods. Pregnancy management: LMWH prophylaxis for high-risk thrombophilia with prior VTE; antiphospholipid syndrome with pregnancy loss history receives heparin plus low-dose aspirin. Hormonal contraception: avoid estrogen-containing methods with known thrombophilia; progestin-only methods safer but some risk. Surgical prophylaxis: mechanical plus pharmacologic for most thrombophilic patients. Cancer-associated thrombosis and thrombophilia: search for occult cancer in unprovoked VTE, especially with other red flags. Testing cost-effectiveness: routine testing after first VTE not generally recommended; may be considered for young patients, recurrent events, unusual sites, or strong family history. Counseling points: most people with thrombophilia never clot; lifestyle modifications (weight control, smoking cessation, activity) important; know when to seek evaluation for symptoms.',
      keyTerms: [
        { term: 'Prophylaxis', definition: 'Preventive treatment to stop clots from forming' },
        { term: 'Mechanical prophylaxis', definition: 'Compression stockings or devices to prevent DVT' },
        { term: 'Occult cancer', definition: 'Hidden cancer that may present with blood clots' },
        { term: 'Sapporo criteria', definition: 'Classification criteria for antiphospholipid syndrome' },
        { term: 'Catastrophic APS', definition: 'Rare severe form with multiple organ thrombosis' },
      ],
      clinicalNotes: 'Antiphospholipid syndrome requires warfarin (not DOAC) due to increased events with DOACs in trials. Recurrent VTE on warfarin: ensure therapeutic INR; consider LMWH; check for cancer or antiphospholipid syndrome. Thrombophilia testing in children with VTE similar to adults. Pregnancy with prior VTE: antepartum and postpartum prophylaxis based on thrombophilia type and history. Heparin-induced thrombocytopenia (HIT) is an acquired thrombophilia requiring immediate heparin cessation and alternative anticoagulation.',
    },
    5: {
      level: 5,
      summary: 'Expert thrombophilia management requires nuanced interpretation of complex testing, management of rare disorders, antiphospholipid syndrome expertise, and personalized counseling for lifelong management.',
      explanation: 'Rare thrombophilias: dysfibrinogenemia (abnormal fibrinogen), plasminogen deficiency, homozygous protein C/S deficiency (purpura fulminans in neonates), and combined defects carry very high risks. Antithrombin deficiency: heparin resistance may occur; antithrombin concentrate available for surgery or childbirth. Antiphospholipid syndrome subtypes: vascular (arterial and venous thrombosis) vs obstetric; triple positivity (lupus anticoagulant plus anticardiolipin plus anti-beta2 GPI) carries highest risk. Catastrophic APS: multi-organ failure from widespread thrombosis; treat with anticoagulation, steroids, IVIG, plasmapheresis, rituximab. DOACs in thrombophilia: generally effective but avoid in antiphospholipid syndrome with triple positivity or arterial events; consider for factor V Leiden or prothrombin mutation with VTE. Thrombophilia and arterial thrombosis: antiphospholipid syndrome causes strokes; other inherited thrombophilias weakly associated. Recurrent VTE on adequate anticoagulation: consider cancer screening, myeloproliferative neoplasms, PNH, and acquired C1 inhibitor deficiency. Genetic counseling for inherited thrombophilia: autosomal dominant inheritance for most; family members may want testing before pregnancy or hormonal therapy.',
      keyTerms: [
        { term: 'Purpura fulminans', definition: 'Severe skin necrosis from microvascular thrombosis' },
        { term: 'Dysfibrinogenemia', definition: 'Abnormal fibrinogen causing clotting or bleeding' },
        { term: 'Triple positivity', definition: 'All three antiphospholipid antibodies positive, highest risk' },
        { term: 'Heparin resistance', definition: 'Inadequate anticoagulation despite therapeutic heparin doses' },
        { term: 'Arterial thrombosis', definition: 'Clots in arteries causing stroke, MI, or limb ischemia' },
      ],
      clinicalNotes: 'Homozygous protein C deficiency presents in neonates with purpura fulminans; requires protein C concentrate, heparin, and eventual liver transplant. Neonatal purpura fulminans is a medical emergency. Thrombophilia testing cost-effectiveness poor for routine post-VTE testing; selective testing based on age, recurrence, site, and family history. DOACs appear safe for factor V Leiden and prothrombin mutation; avoid in antiphospholipid with arterial events or triple positivity. Document all thrombophilia testing results and implications for patient and family counseling.',
    },
  },
  media: [],
  citations: [
    'Baglin T, Gray E, Greaves M, et al. Clinical guidelines for testing for heritable thrombophilia. Br J Haematol. 2010;149(2):209-220.',
    'Miyakis S, Lockshin MD, Atsumi T, et al. International consensus statement on an update of the classification criteria for definite antiphospholipid syndrome (APS). J Thromb Haemost. 2006;4(2):295-306.',
    'Kearon C, Akl EA. Duration of anticoagulant therapy for deep vein thrombosis and pulmonary embolism. Blood. 2014;123(12):1794-1801.',
  ],
  crossReferences: ['hematology-dvt-pe', 'hematology-anticoagulation', 'hematology-hypercoagulable-states'],
  tags: {
    systems: ['hematology'],
    topics: ['thrombophilia', 'hypercoagulable state', 'inherited thrombosis', 'antiphospholipid syndrome'],
    keywords: ['thrombophilia', 'factor V Leiden', 'protein C', 'antiphospholipid', 'APS'],
  },
  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
