import { EducationalContent } from '../types';

export const anticoagulation: EducationalContent = {
  id: 'hematology-anticoagulation',
  type: 'concept',
  name: 'Anticoagulation Therapy',
  alternateNames: ['Blood Thinners', 'Anticoagulant Medications', 'Clot Prevention Therapy'],
  levels: {
    1: {
      level: 1,
      summary: 'Anticoagulation therapy uses medications called blood thinners to prevent and treat blood clots.',
      explanation: 'Blood thinners (anticoagulants) are medicines that help prevent blood clots from forming or growing larger. They don\'t actually thin your blood or dissolve existing clots, but they slow down the clotting process. Doctors prescribe them to treat blood clots in the legs or lungs and to prevent strokes in people with irregular heartbeats (atrial fibrillation) or artificial heart valves. There are different types of blood thinners. Some, like heparin, are given by injection. Others, like warfarin or newer pills (DOACs), are taken by mouth. While on these medications, you need to watch for signs of bleeding (unusual bruising, blood in urine or stool, prolonged bleeding from cuts). Some blood thinners require regular blood tests to make sure the dose is right. It\'s important to take your medication as prescribed and tell all your doctors that you\'re on a blood thinner.',
      keyTerms: [
        { term: 'Anticoagulant', definition: 'Medicine that slows blood clotting to prevent or treat clots' },
        { term: 'Blood thinner', definition: 'Common name for anticoagulant medications' },
        { term: 'Heparin', definition: 'An injectable blood thinner used in hospitals' },
        { term: 'Warfarin', definition: 'A pill blood thinner that requires regular blood tests' },
      ],
    },
    2: {
      level: 2,
      summary: 'Anticoagulants work by inhibiting different steps in the coagulation cascade, with drug selection based on indication, patient factors, and need for monitoring or reversibility.',
      explanation: 'Anticoagulants prevent thrombosis by targeting different coagulation factors. Unfractionated heparin (UFH) enhances antithrombin activity, primarily inhibiting thrombin and Factor Xa; given IV, monitored by aPTT, rapidly reversible with protamine. Low-molecular-weight heparins (LMWH) like enoxaparin have more predictable dosing, given subcutaneously, usually don\'t require monitoring. Warfarin inhibits vitamin K-dependent clotting factors (II, VII, IX, X); oral, monitored by INR (target usually 2-3), affected by diet and many drugs, reversed with vitamin K and/or PCC. Direct oral anticoagulants (DOACs) include direct thrombin inhibitor (dabigatran) and Factor Xa inhibitors (rivaroxaban, apixaban, edoxaban); fixed dosing, no routine monitoring, fewer drug interactions than warfarin. Indications include VTE treatment and prevention, atrial fibrillation stroke prevention, and mechanical heart valves (warfarin only). Bleeding is the main risk; severity determines management from holding dose to reversal agents. Patient education covers medication adherence, bleeding signs, and drug/food interactions.',
      keyTerms: [
        { term: 'INR', definition: 'International Normalized Ratio, blood test to monitor warfarin effect' },
        { term: 'DOAC', definition: 'Direct oral anticoagulant, newer blood thinners with fixed dosing' },
        { term: 'Protamine', definition: 'Medication that reverses heparin effect' },
        { term: 'Factor Xa inhibitor', definition: 'Type of DOAC that blocks Factor Xa in clotting cascade' },
        { term: 'Atrial fibrillation', definition: 'Irregular heartbeat that increases stroke risk, often requires anticoagulation' },
      ],
    },
    3: {
      level: 3,
      summary: 'Anticoagulation management integrates drug pharmacology, indication-specific guidelines, bleeding risk assessment, perioperative planning, and reversal strategies for emergent situations.',
      explanation: 'Drug selection follows guidelines: AF stroke prevention uses CHA2DS2-VASc score (2+ in men, 3+ in women warrants anticoagulation); DOACs preferred over warfarin except mechanical valves or moderate-severe mitral stenosis. VTE treatment: DOACs first-line for most; LMWH for cancer-associated VTE (or edoxaban/rivaroxaban); warfarin if DOAC contraindicated. Bleeding risk assessment uses HAS-BLED or similar; high score doesn\'t contraindicate anticoagulation but prompts addressing modifiable factors. DOAC dosing: renal function determines dose adjustments (dabigatran most renally cleared); consider drug interactions (P-gp, CYP3A4). Warfarin management: achieve time in therapeutic range >70%; patient education on vitamin K-containing foods, interacting medications. Perioperative management: hold DOACs 24-48 hours for low-bleed-risk procedures, longer for high-risk; bridging rarely needed with DOACs; warfarin bridging with LMWH based on thrombotic risk (mechanical valve, recent VTE) vs. bleeding risk. Reversal: idarucizumab reverses dabigatran; andexanet alfa reverses Factor Xa inhibitors (costly, not universally available); 4-factor PCC provides nonspecific reversal.',
      keyTerms: [
        { term: 'CHA2DS2-VASc', definition: 'Scoring system for AF stroke risk guiding anticoagulation' },
        { term: 'HAS-BLED', definition: 'Bleeding risk score for patients on anticoagulation' },
        { term: 'Bridging', definition: 'Using injectable anticoagulant when oral agent is held' },
        { term: 'Idarucizumab', definition: 'Specific reversal agent for dabigatran' },
        { term: 'Andexanet alfa', definition: 'Reversal agent for Factor Xa inhibitor DOACs' },
      ],
    },
    4: {
      level: 4,
      summary: 'Advanced anticoagulation practice addresses complex clinical scenarios including renal and hepatic impairment, obesity, drug interactions, and evidence-based periprocedural management.',
      explanation: 'Renal impairment: dabigatran contraindicated if CrCl <30; apixaban and rivaroxaban require dose reduction; edoxaban also dose-adjusted; LMWH requires dose adjustment or UFH in severe impairment; all anticoagulants affected by dialysis differently. Hepatic impairment: avoid DOACs in severe liver disease; warfarin complicated by altered INR and synthesis; LMWH often preferred. Obesity: DOAC efficacy above 120kg debated; consider LMWH or warfarin in extreme obesity (>150kg or BMI >40); if DOAC used, peak/trough levels may guide. Drug interactions: P-gp inducers/inhibitors affect all DOACs; CYP3A4 interactions affect rivaroxaban and apixaban significantly; warfarin has extensive interaction list (CYP2C9 especially). Perioperative management: PAUSE study supports no bridging for AF patients on DOACs; mechanical valve patients need LMWH bridge; LMWH last dose 24 hours before procedure. Triple therapy (anticoagulant plus dual antiplatelet) for ACS/PCI with AF: minimize duration, prefer clopidogrel, consider DOAC over warfarin, dual therapy (anticoagulant plus single antiplatelet) preferred after 1 week to 1 month. Bleeding management: minor bleeding may just require observation; major bleeding requires reversal, hemostatic support, source identification.',
      keyTerms: [
        { term: 'PAUSE study', definition: 'Trial showing safe perioperative DOAC management without bridging in AF' },
        { term: 'P-gp', definition: 'P-glycoprotein, drug transporter affecting DOAC levels' },
        { term: 'Triple therapy', definition: 'Combination of anticoagulant plus two antiplatelet agents' },
        { term: 'DOAC levels', definition: 'Drug concentrations that can guide therapy in select situations' },
        { term: 'CYP2C9', definition: 'Liver enzyme crucial for warfarin metabolism' },
      ],
    },
    5: {
      level: 5,
      summary: 'Expert anticoagulation management integrates pharmacokinetic/pharmacodynamic principles, laboratory assessment of anticoagulant effect, management of treatment failures and complications, and shared decision-making for indefinite therapy.',
      explanation: 'Therapeutic drug monitoring: not routine for DOACs but useful in specific scenarios (bleeding, thrombosis on therapy, perioperative assessment, renal/hepatic dysfunction, extremes of weight); anti-Xa levels for Factor Xa inhibitors, dilute thrombin time for dabigatran; calibrated assays essential. Treatment failures: ensure compliance first; consider drug interactions, malabsorption; switch drug class or increase intensity; exclude cancer, APS, HIT. Anticoagulation clinics improve warfarin outcomes through structured management. Special populations: pregnancy requires LMWH (teratogenic potential of warfarin, insufficient DOAC data); breastfeeding compatible with warfarin, LMWH (DOACs less data); pediatric anticoagulation extrapolated from adults with pharmacokinetic differences. Extended/indefinite therapy decisions: weigh recurrence risk vs. bleeding risk; shared decision-making essential; discuss reduced-dose DOAC options (EINSTEIN-CHOICE, AMPLIFY-EXT trials); regular reassessment as risks evolve. Emerging agents: factor XI inhibitors in trials may provide antithrombotic effect with reduced bleeding. Quality metrics: INR time in therapeutic range; appropriate indication documentation; reversal agent availability; patient education completion.',
      keyTerms: [
        { term: 'Anti-Xa level', definition: 'Laboratory measurement of Factor Xa inhibitor effect' },
        { term: 'Dilute thrombin time', definition: 'Test measuring dabigatran concentration/effect' },
        { term: 'Anticoagulation clinic', definition: 'Specialized service managing warfarin therapy' },
        { term: 'Factor XI inhibitors', definition: 'Emerging anticoagulants potentially with less bleeding risk' },
        { term: 'Time in therapeutic range', definition: 'Quality metric for warfarin control' },
      ],
      clinicalNotes: 'Document indication, planned duration, and follow-up at initiation. DOAC choice: consider renal function (avoid dabigatran if impaired), GI bleeding risk (apixaban may be lower), dosing frequency (rivaroxaban once daily, apixaban twice daily). Warfarin initiation: no loading dose needed; start 5mg daily in most, lower in elderly, hepatic disease, low body weight; bridge with LMWH until INR therapeutic for 24+ hours. Supratherapeutic INR: minor (3-5) may just hold and resume; INR >10 with no bleeding give oral vitamin K; active bleeding requires IV vitamin K plus 4F-PCC. DOAC perioperative: timing based on CrCl and procedure risk; no bridging needed for most AF; document plan clearly. Confirm drug interactions at each visit; supplement pharmacist review. Patient education: carry wallet card; medical alert bracelet for mechanical valves or APS; avoid contact sports; know signs of bleeding/clotting to report. Annual reassessment of need and bleeding risk.',
    },
  },
  media: [],
  citations: [
    'January CT, et al. 2019 AHA/ACC/HRS Focused Update of the 2014 AHA/ACC/HRS Guideline for the Management of Patients With Atrial Fibrillation. Circulation. 2019;140(2):e125-e151.',
    'Kearon C, et al. Antithrombotic Therapy for VTE Disease: CHEST Guideline and Expert Panel Report. Chest. 2016;149(2):315-352.',
    'Douketis JD, et al. Perioperative Management of Patients With Atrial Fibrillation Receiving a Direct Oral Anticoagulant. JAMA Intern Med. 2019;179(11):1469-1478.',
  ],
  crossReferences: ['hematology-dvt-pe', 'hematology-coagulation-studies', 'hematology-hypercoagulable-states'],
  tags: {
    systems: ['hematology', 'cardiology'],
    topics: ['anticoagulation', 'blood thinners', 'VTE', 'atrial fibrillation', 'pharmacology'],
    keywords: ['warfarin', 'heparin', 'DOAC', 'rivaroxaban', 'apixaban', 'dabigatran', 'bleeding'],
  },
  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
