import { EducationalContent } from '../types';

export const anticoagulationSafety: EducationalContent = {
  id: 'hematology-anticoagulation-safety',
  type: 'concept',
  name: 'Anticoagulation Safety',
  alternateNames: ['Blood Thinner Safety', 'Anticoagulation Management', 'Safe Use of Blood Thinners'],
  levels: {
    1: {
      level: 1,
      summary: 'Anticoagulation safety means taking blood thinners correctly and knowing how to prevent and recognize bleeding problems.',
      explanation: 'Blood thinners (anticoagulants) are important medications that prevent dangerous blood clots, but they require careful use because they increase bleeding risk. Taking your medication exactly as prescribed, at the same time each day, is essential. Never skip doses or double up if you miss one - ask your doctor what to do. Watch for signs of bleeding: unusual bruising, nosebleeds, bleeding gums, blood in urine or stool, or cuts that won\'t stop bleeding. Avoid activities with high injury risk, and use a soft toothbrush and electric razor. Tell all healthcare providers you take blood thinners before any procedure. Keep emergency contact numbers handy. Wear a medical alert bracelet. Regular blood tests may be needed for some blood thinners. With proper precautions, blood thinners are safe and lifesaving.',
      keyTerms: [
        { term: 'Anticoagulant', definition: 'Medicine that prevents blood clots from forming or growing' },
        { term: 'Bleeding risk', definition: 'The chance of having bleeding problems while on blood thinners' },
        { term: 'Medical alert', definition: 'Bracelet or necklace indicating important medical information' },
        { term: 'INR', definition: 'Blood test result for patients taking warfarin' },
      ],
      analogies: [
        'Taking blood thinners is like adjusting the thickness of paint - too thick clots form, too thin it runs',
        'Think of anticoagulants as delicate instruments - they work great when used correctly',
      ],
      examples: [
        'A person on warfarin gets regular blood tests to check their INR level',
        'Someone taking a blood thinner avoids contact sports to reduce injury risk',
      ],
    },
    2: {
      level: 2,
      summary: 'Safe anticoagulation requires medication adherence, monitoring, dietary consistency, drug interaction awareness, and recognizing when to seek urgent care.',
      explanation: 'Medication management: take at the same time daily; use pill organizers; set alarms; never run out - refill early. Warfarin requires INR monitoring (target usually 2.0-3.0, 2.5-3.5 for mechanical valves), frequency varies from weekly to monthly depending on stability. DOACs (apixaban, rivaroxaban, edoxaban, dabigatran) don\'t require routine monitoring but need renal function assessment periodically. Dietary considerations: warfarin interacts with vitamin K - keep intake consistent rather than avoiding; green leafy vegetables contain vitamin K. Drug interactions: many medications affect warfarin (antibiotics, antifungals, amiodarone); some affect DOACs (strong CYP3A4 or P-gp inhibitors). Herbal supplements can interact - discuss with provider. Alcohol affects anticoagulation and increases bleeding risk - limit or avoid. Fall risk assessment important for elderly - balance training, home safety modifications. Minor bleeding management: nosebleeds - lean forward, pinch soft part for 10-15 minutes; cuts - apply pressure; bruises - ice, rest.',
      keyTerms: [
        { term: 'DOAC', definition: 'Direct oral anticoagulant, newer class of blood thinners' },
        { term: 'Vitamin K', definition: 'Nutrient affecting warfarin, found in green leafy vegetables' },
        { term: 'CYP3A4', definition: 'Liver enzyme that metabolizes many drugs including some DOACs' },
        { term: 'P-glycoprotein', definition: 'Drug transporter affecting DOAC absorption and elimination' },
        { term: 'Therapeutic range', definition: 'Desired INR range for safe warfarin anticoagulation' },
      ],
      analogies: [
        'Warfarin and vitamin K are like opposing forces - balance is key, not elimination',
        'Drug interactions are like traffic jams - they slow down or speed up drug processing',
      ],
      examples: [
        'A patient on warfarin maintains consistent vegetable intake rather than avoiding them completely',
        'Someone starting antibiotics contacts their anticoagulation clinic for INR check',
      ],
    },
    3: {
      level: 3,
      summary: 'Comprehensive anticoagulation safety encompasses structured monitoring programs, patient education, perioperative management, and evidence-based reversal strategies for bleeding.',
      explanation: 'Anticoagulation clinics (anticoagulation management services) improve outcomes through systematic monitoring, dose adjustment, and patient education. Patient self-testing (PST) and patient self-management (PSM) of warfarin with home INR monitors improve time in therapeutic range for motivated, trained patients. Perioperative management: timing of discontinuation based on agent and procedure bleeding risk; bridging with LMWH for high thromboembolic risk patients on warfarin; DOACs generally stopped without bridging. Trauma and bleeding: minor bleeding managed conservatively; major bleeding requires reversal. Warfarin reversal: vitamin K (oral preferred over IV for non-urgent, IV for urgent); 4-factor prothrombin complex concentrate (PCC) for urgent reversal; fresh frozen plasma if PCC unavailable. DOAC reversal: andexanet alfa for factor Xa inhibitors; idarucizumab for dabigatran; PCC if specific reversal agents unavailable. Hemodialysis removes dabigatran but not factor Xa inhibitors.',
      keyTerms: [
        { term: 'Patient self-testing', definition: 'Home INR monitoring by patients' },
        { term: 'Bridging', definition: 'Temporary switch to short-acting anticoagulant around procedures' },
        { term: '4-factor PCC', definition: 'Concentrate of clotting factors II, VII, IX, X for reversal' },
        { term: 'Andexanet alfa', definition: 'Specific reversal agent for factor Xa inhibitors' },
        { term: 'Idarucizumab', definition: 'Specific reversal agent for dabigatran' },
      ],
    },
    4: {
      level: 4,
      summary: 'Clinical anticoagulation management requires balancing thrombosis prevention with bleeding risk, individualizing therapy, and managing complex scenarios including renal impairment, drug interactions, and thrombocytopenia.',
      explanation: 'Agent selection: warfarin preferred for mechanical heart valves, severe renal impairment, antiphospholipid syndrome with arterial events; DOACs preferred for most other indications due to ease of use and safety. DOAC dosing: standard vs reduced dose based on age, weight, creatinine; verify correct dose as errors common. Renal impairment: all DOACs renally cleared to varying degrees; dose adjustment required; warfarin preferred in severe impairment (CrCl <15-30). Hepatic impairment: avoid or reduce DOACs in severe liver disease; warfarin can be used with careful monitoring. Thrombocytopenia: increased bleeding risk; generally continue anticoagulation if platelets >50,000; hold if <30,000-50,000 depending on indication. Drug interactions: azole antifungals, HIV protease inhibitors increase DOAC levels; rifampin, carbamazepine, phenytoin decrease levels; amiodarone, dronedarone increase levels. Adherence crucial - DOACs have short half-lives, missed doses mean no protection. Surgery timing: warfarin stopped 5 days pre-op; DOACs stopped 1-3 days based on renal function and bleeding risk.',
      keyTerms: [
        { term: 'Time in therapeutic range', definition: 'Percentage of time INR is within target range' },
        { term: 'Creatinine clearance', definition: 'Measure of kidney function for drug dosing' },
        { term: 'Mechanical heart valve', definition: 'Artificial valve requiring warfarin anticoagulation' },
        { term: 'Thrombocytopenia', definition: 'Low platelet count increasing bleeding risk' },
        { term: 'High bleeding risk', definition: 'Procedures where bleeding would be serious' },
      ],
      clinicalNotes: 'Assess adherence before assuming treatment failure. TTR >70% associated with good outcomes on warfarin. Document indication and expected duration clearly. Review all medications for interactions at each visit. For procedures, coordinate timing with proceduralist. Emergency surgery on anticoagulation requires multidisciplinary approach. Document bleeding events and their management.',
    },
    5: {
      level: 5,
      summary: 'Expert anticoagulation management integrates pharmacogenomics, complex perioperative planning, management of catastrophic bleeding, and quality improvement programs.',
      explanation: 'Pharmacogenomics: CYP2C9 and VKORC1 variants affect warfarin dosing; FDA label includes pharmacogenomic guidance; clinical utility varies, may help in difficult-to-dose patients. Complex scenarios: anticoagulation in pregnancy (LMWH throughout, avoid warfarin); anticoagulation in cancer (LMWH or DOACs, risk of bleeding vs VTE recurrence); HIT requiring non-heparin anticoagulation; DIC with thrombosis requiring careful anticoagulation. Catastrophic bleeding: intracranial hemorrhage is most feared; immediate reversal, neurosurgical consultation, blood pressure control; restart anticoagulation timing based on thrombosis risk vs rebleeding risk. Quality metrics: time in therapeutic range for warfarin; major bleeding rates; thromboembolic event rates; patient satisfaction; adherence measures. Clinical decision support and computerized dosing algorithms improve outcomes. Shared decision-making for duration: extended therapy for unprovoked VTE balances recurrence prevention vs bleeding. Left atrial appendage occlusion (Watchman device) alternative to lifelong anticoagulation in selected atrial fibrillation patients.',
      keyTerms: [
        { term: 'CYP2C9', definition: 'Gene affecting warfarin metabolism' },
        { term: 'VKORC1', definition: 'Vitamin K epoxide reductase gene affecting warfarin sensitivity' },
        { term: 'Left atrial appendage occlusion', definition: 'Device closing off area where clots form in atrial fibrillation' },
        { term: 'Clinical decision support', definition: 'Computerized tools aiding clinical decisions' },
        { term: 'HIT', definition: 'Heparin-induced thrombocytopenia requiring alternative anticoagulation' },
      ],
      clinicalNotes: 'Anticoagulation in pregnancy: LMWH does not cross placenta; warfarin teratogenic first trimester, safe second trimester if mechanical valve; vitamin K safe in pregnancy. Cancer-associated thrombosis: LMWH standard for years; SELECT-D and Hokusai trials showed DOACs effective but more GI/GU bleeding. Restart anticoagulation after ICH: generally safe after 2-4 weeks if high thrombosis risk; earlier for subdural vs intraparenchymal; discuss risks with patient and family.',
    },
  },
  media: [],
  citations: [
    'Ansell J, Hirsh J, Hylek E, et al. Pharmacology and management of the vitamin K antagonists: American College of Chest Physicians Evidence-Based Clinical Practice Guidelines (8th Edition). Chest. 2008;133(6 Suppl):160S-198S.',
    'Heidbuchel H, Verhamme P, Alings M, et al. Updated European Heart Rhythm Association Practical Guide on the use of non-vitamin K antagonist anticoagulants in patients with atrial fibrillation. Europace. 2015;17(10):1467-1507.',
    'Tomaselli GF, Mahaffey KW, Cuker A, et al. 2020 ACC/AHA guideline for the management of patients with atrial fibrillation. Circulation. 2021;143(2):e54-e93.',
  ],
  crossReferences: ['hematology-dvt-pe', 'hematology-thrombophilia', 'hematology-coagulation-studies'],
  tags: {
    systems: ['hematology'],
    topics: ['patient safety', 'anticoagulation', 'blood thinners', 'medication management'],
    keywords: ['anticoagulation', 'warfarin', 'DOAC', 'bleeding', 'safety', 'INR'],
  },
  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
