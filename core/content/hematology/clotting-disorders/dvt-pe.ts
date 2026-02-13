import { EducationalContent } from '../types';

export const dvtPe: EducationalContent = {
  id: 'hematology-dvt-pe',
  type: 'condition',
  name: 'Deep Vein Thrombosis and Pulmonary Embolism',
  alternateNames: ['DVT', 'PE', 'Venous Thromboembolism', 'VTE', 'Blood Clots'],
  levels: {
    1: {
      level: 1,
      summary: 'Deep vein thrombosis (DVT) is a blood clot in a deep vein, usually in the leg, and pulmonary embolism (PE) is when a clot travels to the lungs.',
      explanation: 'Deep vein thrombosis (DVT) happens when a blood clot forms in a deep vein, most often in your leg. This can cause pain, swelling, warmth, and redness in the affected area. Sometimes part of the clot can break off and travel through your bloodstream to your lungs, causing a pulmonary embolism (PE). This is a medical emergency because it can block blood flow to the lungs and cause serious problems or even death. Risk factors include long periods of sitting or bed rest, surgery, pregnancy, certain medications, and inherited clotting disorders. Treatment typically involves blood thinners to prevent the clot from growing and new clots from forming. Prevention includes moving around regularly, wearing compression stockings, and sometimes medication for high-risk situations.',
      keyTerms: [
        { term: 'Deep vein thrombosis', definition: 'A blood clot that forms in a deep vein, usually in the leg' },
        { term: 'Pulmonary embolism', definition: 'A blood clot that travels to and blocks blood vessels in the lungs' },
        { term: 'Blood thinner', definition: 'Medicine that helps prevent blood clots from forming or growing' },
        { term: 'Embolus', definition: 'A blood clot or other material that travels through the bloodstream' },
      ],
      analogies: [
        'A DVT is like a traffic jam in a major highway - blood can\'t flow properly past the clot',
        'Think of a PE as a blockage in the air vents of a building - oxygen can\'t get through',
      ],
      examples: [
        'A traveler on a long flight develops leg swelling and pain from a DVT',
        'A patient after surgery develops sudden chest pain and shortness of breath from a PE',
      ],
    },
    2: {
      level: 2,
      summary: 'Venous thromboembolism (VTE) encompasses DVT and PE, caused by Virchow\'s triad of stasis, endothelial injury, and hypercoagulability, with diagnosis confirmed by imaging and D-dimer testing.',
      explanation: 'VTE is a major cause of morbidity and mortality. Virchow\'s triad explains pathophysiology: venous stasis (immobility, heart failure), vascular injury (surgery, trauma, catheter), and hypercoagulability (genetic thrombophilia, cancer, pregnancy, oral contraceptives). DVT most commonly affects lower extremities (calf, popliteal, femoral, iliac veins). Symptoms include unilateral leg swelling, pain, warmth, and tenderness; however, 50% are asymptomatic. PE symptoms include dyspnea, pleuritic chest pain, tachypnea, tachycardia, and hypoxia; massive PE causes hemodynamic collapse. Diagnosis: D-dimer (high sensitivity, low specificity) useful for exclusion in low-probability patients; compression ultrasound for DVT (non-compressible vein diagnostic); CT pulmonary angiography (CTPA) for PE; V/Q scan when CTPA contraindicated. Wells score and other clinical prediction rules help pre-test probability assessment. Treatment: anticoagulation is mainstay; duration depends on provoking factors (3 months if transient, indefinite if unprovoked or persistent risk).',
      keyTerms: [
        { term: 'Virchow\'s triad', definition: 'Three factors contributing to thrombosis: stasis, injury, hypercoagulability' },
        { term: 'D-dimer', definition: 'Breakdown product of clots, elevated when thrombus present' },
        { term: 'Wells score', definition: 'Clinical prediction rule for DVT or PE probability' },
        { term: 'Compression ultrasound', definition: 'Imaging test using pressure to identify DVT' },
        { term: 'CTPA', definition: 'CT pulmonary angiography, imaging test for PE' },
      ],
      analogies: [
        'Virchow\'s triad is like the perfect storm - three conditions that together make clots likely',
        'D-dimer is like debris from a collapsed building - it proves something was destroyed but not what',
      ],
      examples: [
        'A cancer patient with immobility develops extensive iliofemoral DVT',
        'A young woman on oral contraceptives presents with acute PE',
      ],
    },
    3: {
      level: 3,
      summary: 'VTE management involves risk stratification, anticoagulant selection, appropriate duration of therapy, and special considerations for cancer-associated thrombosis and pregnancy.',
      explanation: 'Anticoagulation options: direct oral anticoagulants (DOACs - apixaban, rivaroxaban, edoxaban, dabigatran) preferred for most patients due to ease of use and safety; warfarin (requires monitoring and bridging); parenteral options (LMWH, fondaparinux) for initial therapy or when oral agents contraindicated. Duration: provoked VTE (transient risk factor) - 3 months; unprovoked VTE - consider extended therapy based on bleeding risk and patient preference; active cancer - LMWH or DOACs for at least 6 months or as long as cancer active. Cancer-associated thrombosis: LMWH historically preferred; DOACs now acceptable but higher GI/genitourinary bleeding risk. Pregnancy: LMWH throughout pregnancy and at least 6 weeks postpartum (minimum 3 months total); warfarin contraindicated (teratogenic). Thrombolysis considered for massive PE with hemodynamic compromise; catheter-directed thrombolysis for extensive iliofemoral DVT in select cases. IVC filters for acute DVT/PE when anticoagulation absolutely contraindicated; retrievable filters preferred.',
      keyTerms: [
        { term: 'DOAC', definition: 'Direct oral anticoagulant, newer class of blood thinners' },
        { term: 'LMWH', definition: 'Low molecular weight heparin, injectable anticoagulant' },
        { term: 'Provoked VTE', definition: 'Clot associated with temporary risk factor like surgery' },
        { term: 'Unprovoked VTE', definition: 'Clot without clear temporary trigger' },
        { term: 'IVC filter', definition: 'Device placed in vena cava to catch clots before they reach lungs' },
      ],
    },
    4: {
      level: 4,
      summary: 'Contemporary VTE care integrates risk stratification for PE, individualized anticoagulation strategies, management of complex scenarios, and prevention of post-thrombotic syndrome.',
      explanation: 'PE severity classification: massive (sustained hypotension, cardiogenic shock), submassive (RV dysfunction or biomarker elevation without hypotension), low-risk (PESI or sPESI score). Massive PE: systemic thrombolysis (alteplase 100 mg) if no contraindications; surgical embolectomy or catheter-directed therapy if contraindicated to lysis. Submassive PE: anticoagulation primary therapy; consider thrombolysis if deterioration risk high. DVT anatomical extent: proximal (popliteal and above) vs distal (calf). Isolated distal DVT may be monitored with serial ultrasound if low risk; treat if extension risk high. Post-thrombotic syndrome (PTS): chronic venous insufficiency after DVT causing pain, swelling, skin changes, ulcers; prevented by early anticoagulation and compression stockings. Chronic thromboembolic pulmonary hypertension (CTEPH): rare complication of PE causing progressive dyspnea; pulmonary thromboendarterectomy or Riociguat therapy. Thrombophilia testing: not routinely recommended with first provoked VTE; consider with unprovoked VTE at young age, strong family history, or unusual sites (mesenteric, cerebral).',
      keyTerms: [
        { term: 'Post-thrombotic syndrome', definition: 'Chronic complications after DVT including pain and swelling' },
        { term: 'CTEPH', definition: 'Chronic thromboembolic pulmonary hypertension, rare PE complication' },
        { term: 'sPESI', definition: 'Simplified Pulmonary Embolism Severity Index predicting mortality' },
        { term: 'RV dysfunction', definition: 'Right ventricle strain seen on echocardiogram or CT' },
        { term: 'Thrombophilia', definition: 'Inherited or acquired tendency to form blood clots' },
      ],
      clinicalNotes: 'Always assess hemodynamic status in PE - massive PE is an emergency. D-dimer less useful in hospitalized or pregnant patients (often elevated). Do not delay anticoagulation for imaging if high suspicion and low bleeding risk. LMWH preferred in severe renal impairment. DOACs generally avoided in mechanical heart valves or antiphospholipid syndrome with triple positivity. Extended anticoagulation reduces recurrence but increases bleeding - shared decision-making. Compression stockings for 2 years reduce PTS risk.',
    },
    5: {
      level: 5,
      summary: 'Expert VTE management encompasses complex clinical scenarios, advanced therapies for massive PE, cancer and pregnancy-related thrombosis, and personalized long-term management strategies.',
      explanation: 'Advanced PE management: ECMO (extracorporeal membrane oxygenation) for massive PE as bridge to therapy; ultrasound-assisted catheter-directed thrombolysis (EKOS) delivering tPA directly to clot; AngioVac system for aspiration thrombectomy in select centers. Submassive PE thrombolysis remains controversial - PEITHO trial showed reduced hemodynamic decompensation but more bleeding; consider if RV dysfunction plus positive troponin and low bleeding risk. Cancer-associated thrombosis: CATCH trial showed non-inferiority of edoxaban to dalteparin with higher GI/GU bleeding; CARROT trial addressing optimal duration. DOACs appear safe in brain metastases without active bleeding. Pregnancy: adjusted-dose LMWH throughout pregnancy; anti-Xa monitoring in extremes of weight or renal function; switch to UFH near delivery if neuraxial anesthesia planned; warfarin safe postpartum. Thrombophilia: antiphospholipid syndrome requires warfarin (not DOAC); homozygous factor V Leiden or prothrombin mutation with unprovoked VTE suggests extended therapy. Recurrent VTE on therapeutic anticoagulation: assess adherence, drug interactions, cancer screening, consider increasing dose or switching class.',
      keyTerms: [
        { term: 'ECMO', definition: 'Extracorporeal membrane oxygenation, life support for cardiopulmonary failure' },
        { term: 'AngioVac', definition: 'Suction device for removing large clot burden' },
        { term: 'Anti-Xa monitoring', definition: 'Measuring LMWH activity by factor Xa inhibition' },
        { term: 'Neuraxial anesthesia', definition: 'Spinal or epidural anesthesia for delivery' },
        { term: 'Antiphospholipid syndrome', definition: 'Autoimmune thrombophilia requiring warfarin therapy' },
      ],
      clinicalNotes: 'Systemic thrombolysis for massive PE: absolute contraindications include intracranial hemorrhage history, ischemic stroke within 3 months, active bleeding; relative contraindications include surgery within 3 weeks, BP >180/110. Catheter-directed therapies reduce bleeding risk compared to systemic lysis. Extended anticoagulation decisions balance recurrence risk (HERDOO2, DASH scores) vs bleeding risk (HAS-BLED). Compression ultrasound for recurrent symptoms compares to prior imaging. Post-thrombotic syndrome risk factors: proximal DVT, obesity, poor INR control.',
    },
  },
  media: [],
  citations: [
    'Stevens SM, Woller SC, Kreuziger LB, et al. Antithrombotic therapy for VTE disease: second update of the CHEST guideline and expert panel report. Chest. 2021;160(6):e545-e608.',
    'Konstantinides SV, Meyer G, Becattini C, et al. 2019 ESC guidelines for the diagnosis and management of acute pulmonary embolism. Eur Heart J. 2020;41(4):543-603.',
    'Kearon C, Akl EA, Ornelas J, et al. Antithrombotic therapy for VTE disease: CHEST guideline and expert panel report. Chest. 2016;149(2):315-352.',
  ],
  crossReferences: ['hematology-thrombophilia', 'hematology-anticoagulation', 'hematology-hypercoagulable-states'],
  tags: {
    systems: ['hematology', 'cardiovascular'],
    topics: ['venous thromboembolism', 'DVT', 'PE', 'blood clots', 'anticoagulation'],
    keywords: ['DVT', 'PE', 'VTE', 'blood clot', 'pulmonary embolism', 'anticoagulation'],
  },
  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
