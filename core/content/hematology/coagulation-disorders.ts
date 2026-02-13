import { EducationalContent } from './types';

// =============================================================================
// COAGULATION DISORDERS - Comprehensive Multi-Level Content
// =============================================================================

export const coagulationDisordersOverview: EducationalContent = {
  id: 'hematology-coagulation-disorders-overview',
  type: 'topic',
  name: 'Coagulation Disorders',
  nameEs: 'Trastornos de la coagulacion',
  alternateNames: ['Clotting Disorders', 'Hemostasis Disorders', 'Bleeding and Thrombotic Disorders'],
  levels: {
    1: {
      level: 1,
      summary: 'Coagulation disorders are problems with how your blood clots - either clotting too much (causing dangerous blood clots) or not enough (causing excessive bleeding).',
      explanation:
        'Your blood has a clotting system that works like a chain reaction to stop bleeding when you get a cut. Special proteins called clotting factors work together in a cascade, like dominoes falling in sequence, to form a strong clot. Platelets (tiny blood cells) first plug the hole, then clotting factors weave a tough net of fibrin to hold everything together. When this system does not work right, two kinds of problems can happen. If your blood clots too easily, dangerous clots can form inside your veins (deep vein thrombosis or DVT in the leg) or travel to your lungs (pulmonary embolism or PE), which can be life-threatening. If your blood does not clot well enough, you can bleed too much from injuries or even bleed spontaneously. Conditions like hemophilia (missing clotting factors) and von Willebrand disease (missing a protein that helps platelets stick) cause bleeding problems. Blood thinners are medicines that help prevent dangerous clots in people at risk.',
      keyTerms: [
        { term: 'Clotting factors', definition: 'Special proteins in your blood that work together to form blood clots' },
        { term: 'DVT', definition: 'Deep vein thrombosis - a blood clot that forms in a deep vein, usually in the leg' },
        { term: 'Pulmonary embolism', definition: 'A blood clot that travels to the lungs and blocks blood flow, which can be life-threatening' },
        { term: 'Hemophilia', definition: 'An inherited condition where blood does not clot properly due to missing clotting factors' },
        { term: 'Blood thinners', definition: 'Medicines that help prevent blood clots from forming or growing' },
      ],
      analogies: [
        'The clotting cascade is like a row of dominoes - each one knocks over the next until a clot forms at the end.',
        'Platelets are like first responders who rush to plug a leak, while clotting factors are the construction crew that builds a permanent patch.',
      ],
      patientCounselingPoints: [
        'Call 911 for sudden chest pain, difficulty breathing, or a swollen painful leg - these could be blood clots.',
        'If you take blood thinners, carry a medical ID card and tell all your doctors.',
        'Blood thinners increase bleeding risk - avoid contact sports and be careful with sharp objects.',
        'If you have hemophilia or VWD, tell your dentist and surgeon before any procedure.',
      ],
    },
    2: {
      level: 2,
      summary: 'Coagulation involves primary hemostasis (platelet plug), secondary hemostasis (coagulation cascade generating fibrin), and fibrinolysis, assessed by PT/INR (extrinsic pathway) and aPTT (intrinsic pathway).',
      explanation:
        'Hemostasis occurs in three overlapping phases. Primary hemostasis: vascular injury exposes subendothelial collagen; von Willebrand factor (vWF) mediates platelet adhesion via GPIb; platelets activate, change shape, release granule contents (ADP, thromboxane A2), and aggregate via GPIIb/IIIa cross-linked by fibrinogen. Assessed by platelet count and bleeding time/PFA-100.\n\nSecondary hemostasis (coagulation cascade): Tissue factor (TF) exposed at injury activates factor VII (extrinsic pathway), generating small amounts of thrombin. Thrombin then amplifies via intrinsic pathway factors (VIII, IX, XI) in the propagation phase, producing a burst of thrombin that converts fibrinogen to fibrin. Factor XIII cross-links fibrin for clot stability. Key lab tests: PT/INR measures extrinsic pathway (factors VII, X, V, II, fibrinogen) - prolonged by warfarin, liver disease, vitamin K deficiency. aPTT measures intrinsic pathway (factors XII, XI, IX, VIII) - prolonged by heparin, hemophilia A (VIII) and B (IX), lupus anticoagulant. Both prolonged: common pathway (X, V, II, fibrinogen) or DIC.\n\nFibrinolysis: plasminogen is converted to plasmin by tissue plasminogen activator (tPA), dissolving fibrin clots and generating fibrin degradation products (FDPs) including D-dimer. Elevated D-dimer indicates recent clot formation and breakdown.\n\nDVT/PE (venous thromboembolism, VTE): Virchow triad (stasis, endothelial injury, hypercoagulability). DVT diagnosed by compression ultrasound; PE by CT pulmonary angiography. Treatment: anticoagulation with DOACs (rivaroxaban, apixaban) preferred over warfarin for most VTE. Duration: provoked VTE 3 months; unprovoked VTE consider extended anticoagulation.',
      keyTerms: [
        { term: 'PT/INR', definition: 'Prothrombin Time/International Normalized Ratio - measures extrinsic and common pathway; monitors warfarin' },
        { term: 'aPTT', definition: 'Activated Partial Thromboplastin Time - measures intrinsic and common pathway; monitors heparin' },
        { term: 'von Willebrand factor', definition: 'Protein bridging platelets to collagen (primary hemostasis) and carrying factor VIII' },
        { term: 'D-dimer', definition: 'Fibrin degradation product; elevated indicates active clot formation and breakdown' },
        { term: 'DOAC', definition: 'Direct Oral Anticoagulant - newer blood thinners (rivaroxaban, apixaban, etc.) targeting specific clotting factors' },
        { term: 'Virchow triad', definition: 'Three factors predisposing to thrombosis: stasis, endothelial injury, hypercoagulability' },
        { term: 'Fibrinolysis', definition: 'Process of dissolving blood clots by plasmin-mediated fibrin degradation' },
      ],
      examples: [
        'A 55-year-old man develops leg swelling after a long flight; ultrasound shows femoral DVT; started on rivaroxaban.',
        'A boy with recurrent hemarthroses (joint bleeds) found to have prolonged aPTT and low factor VIII - hemophilia A.',
      ],
    },
    3: {
      level: 3,
      summary: 'The cell-based model of coagulation replaces the traditional cascade with initiation, amplification, and propagation phases, with coagulation disorders categorized as bleeding diatheses or prothrombotic states requiring tailored pharmacotherapy.',
      explanation:
        'The cell-based coagulation model: (1) Initiation: TF-bearing cells (subendothelial fibroblasts, activated monocytes) bind factor VIIa, generating small amounts of factors Xa and thrombin. (2) Amplification: thrombin activates platelets, factor V, factor VIII, and factor XI on the platelet surface. (3) Propagation: on activated platelet surfaces, the tenase complex (VIIIa-IXa) generates factor Xa, which joins with Va in the prothrombinase complex (Va-Xa) to produce a thrombin burst converting fibrinogen to fibrin.\n\nBleeding disorders by category:\nHemophilia A (factor VIII deficiency, X-linked): severe (<1% activity) causes spontaneous hemarthroses and muscle bleeds; moderate (1-5%) bleeds with minor trauma; mild (5-40%) bleeds with surgery/major trauma. Treatment: factor VIII replacement (recombinant preferred), emicizumab (bispecific antibody mimicking factor VIIIa cofactor function, subcutaneous, revolutionized prophylaxis), desmopressin (DDAVP) for mild hemophilia A. Hemophilia B (factor IX deficiency, X-linked): similar phenotype, treated with factor IX replacement or eftrenonacog alfa.\n\nVon Willebrand disease (VWD): most common inherited bleeding disorder (1% prevalence). Type 1 (80%, quantitative decrease in vWF), Type 2 (qualitative defects: 2A, 2B, 2M, 2N), Type 3 (severe, near-absent vWF). Diagnosis: vWF antigen, vWF activity (ristocetin cofactor), factor VIII level, multimer analysis for type 2 subtyping. Treatment: DDAVP (type 1, some type 2), vWF-containing concentrates (Humate-P), antifibrinolytics (tranexamic acid).\n\nAnticoagulant pharmacology:\nWarfarin: vitamin K antagonist inhibiting gamma-carboxylation of factors II, VII, IX, X and proteins C, S. Monitored by INR (target 2-3 for most indications). Narrow therapeutic index, numerous drug/food interactions, CYP2C9/VKORC1 pharmacogenomics affect dosing. Bridging with heparin needed at initiation (paradoxical protein C depletion causing transient hypercoagulability).\n\nHeparin: unfractionated (UFH) activates antithrombin III, inhibiting thrombin (IIa) and Xa equally. Monitored by aPTT. LMWH (enoxaparin, dalteparin): primarily anti-Xa, predictable kinetics, subcutaneous, no routine monitoring (anti-Xa levels for obesity, renal impairment, pregnancy). Fondaparinux: selective anti-Xa via antithrombin.\n\nDOACs: direct thrombin inhibitor (dabigatran) and direct factor Xa inhibitors (rivaroxaban, apixaban, edoxaban). Predictable pharmacokinetics, fewer interactions, no routine monitoring. Reversal: idarucizumab for dabigatran; andexanet alfa for Xa inhibitors. Not recommended for mechanical heart valves or antiphospholipid syndrome.',
      keyTerms: [
        { term: 'Cell-based model', definition: 'Modern coagulation model emphasizing cellular surfaces (TF-bearing cells, platelets) over traditional cascade pathways' },
        { term: 'Emicizumab', definition: 'Bispecific antibody bridging factors IXa and X, mimicking factor VIIIa cofactor function; subcutaneous prophylaxis for hemophilia A' },
        { term: 'Tenase complex', definition: 'Factor VIIIa-IXa complex on platelet surface generating factor Xa in propagation phase' },
        { term: 'Prothrombinase complex', definition: 'Factor Va-Xa complex converting prothrombin to thrombin on platelet surface' },
        { term: 'vWF multimer analysis', definition: 'Electrophoretic test distinguishing VWD subtypes by vWF polymer size distribution' },
        { term: 'Idarucizumab', definition: 'Monoclonal antibody fragment that reverses dabigatran within minutes' },
        { term: 'Andexanet alfa', definition: 'Modified recombinant factor Xa decoy that reverses direct Xa inhibitors' },
        { term: 'Antithrombin III', definition: 'Serine protease inhibitor activated by heparin; key natural anticoagulant' },
      ],
      clinicalNotes: 'Mixing study: if prolonged aPTT corrects with 1:1 mix of patient + normal plasma, it is a factor deficiency; if it does not correct, suspect an inhibitor (lupus anticoagulant or factor inhibitor). Hemophilia A with inhibitors (anti-factor VIII antibodies): bypass with rFVIIa (NovoSeven) or aPCC (FEIBA); emicizumab works regardless of inhibitor status. VWD type 2B: DDAVP is contraindicated (worsens thrombocytopenia). Warfarin reversal: vitamin K (oral for INR 4.5-10, IV + 4-factor PCC for major bleeding). DOACs and renal function: dabigatran is 80% renally cleared - avoid in CrCl <30; apixaban is safest in renal impairment.',
    },
    4: {
      level: 4,
      summary: 'Advanced coagulation management encompasses DIC pathophysiology, heparin-induced thrombocytopenia, thrombophilia evaluation, and complex anticoagulation scenarios including antiphospholipid syndrome.',
      explanation:
        'Disseminated intravascular coagulation (DIC): pathologic activation of coagulation causing simultaneous thrombosis and bleeding. Triggers: sepsis (most common), trauma, malignancy (acute promyelocytic leukemia, mucin-secreting adenocarcinomas), obstetric emergencies (placental abruption, amniotic fluid embolism, HELLP), and snake envenomation. Pathophysiology: widespread tissue factor expression activates coagulation; excessive thrombin generation consumes clotting factors and platelets while activating fibrinolysis. ISTH DIC score integrates platelet count, PT prolongation, fibrinogen, and D-dimer (score >=5 = overt DIC). Lab: thrombocytopenia, prolonged PT/aPTT, low fibrinogen (<100 mg/dL), markedly elevated D-dimer, schistocytes on smear. Management: treat underlying cause (cornerstone); supportive transfusion (platelets if <10-20K or bleeding, cryoprecipitate for fibrinogen <100, FFP for active bleeding with prolonged PT/aPTT). Heparin anticoagulation only if thrombosis predominates (e.g., purpura fulminans, acral ischemia). In APL-associated DIC, start ATRA immediately.\n\nHeparin-induced thrombocytopenia (HIT): type II HIT is an immune-mediated prothrombotic disorder caused by IgG antibodies against heparin-PF4 complexes. Typically develops 5-10 days after heparin exposure (or earlier with recent prior exposure). Platelet count drops >50% from baseline. Paradoxically causes thrombosis (HITT - HIT with thrombosis) in 30-50% of cases (DVT, PE, limb ischemia, stroke, MI). 4Ts scoring system (Thrombocytopenia, Timing, Thrombosis, oTher causes) guides pre-test probability. Diagnosis: immunoassay (sensitive, poor specificity) followed by functional assay (serotonin release assay or heparin-induced platelet activation - gold standard). Management: immediately stop all heparin; start alternative anticoagulant (argatroban for hepatic metabolism, bivalirudin for short procedures; fondaparinux off-label). DO NOT give warfarin until platelets recover >150K (precipitates venous limb gangrene via protein C depletion). DO NOT transfuse platelets (fuels thrombosis).\n\nThrombophilia evaluation: consider in unprovoked VTE <50 years, unusual sites (cerebral, splanchnic, upper extremity), recurrent VTE, family history, or warfarin-induced skin necrosis. Inherited: factor V Leiden (activated protein C resistance, most common), prothrombin G20210A, protein C deficiency, protein S deficiency, antithrombin deficiency. Acquired: antiphospholipid syndrome (APS). Testing timing: not during acute VTE (protein C/S consumed), not on anticoagulants (warfarin lowers protein C/S; DOACs may affect lupus anticoagulant, dRVVT). APS diagnosis requires clinical criteria (thrombosis or pregnancy morbidity) + persistent positive antiphospholipid antibodies (lupus anticoagulant, anticardiolipin, anti-beta-2 glycoprotein I) on 2 occasions >=12 weeks apart.\n\nAntiphospholipid syndrome management: warfarin (INR 2-3) is standard for thrombotic APS; DOACs showed higher recurrence rates in TRAPS trial (rivaroxaban vs warfarin) - DOACs are NOT recommended, especially in triple-positive APS. Catastrophic APS (CAPS): simultaneous multi-organ thrombosis - treat with anticoagulation + corticosteroids + plasma exchange + IVIG.',
      keyTerms: [
        { term: 'DIC', definition: 'Disseminated Intravascular Coagulation - pathologic systemic coagulation activation with simultaneous thrombosis and consumption coagulopathy' },
        { term: 'ISTH DIC score', definition: 'Validated scoring system using platelet count, PT, fibrinogen, and D-dimer to diagnose overt DIC' },
        { term: 'Heparin-induced thrombocytopenia', definition: 'Immune prothrombotic disorder from anti-heparin-PF4 antibodies causing paradoxical thrombosis' },
        { term: '4Ts score', definition: 'Clinical probability scoring for HIT: Thrombocytopenia, Timing, Thrombosis, oTher causes' },
        { term: 'Serotonin release assay', definition: 'Gold standard functional test for HIT confirming platelet-activating anti-PF4 antibodies' },
        { term: 'Factor V Leiden', definition: 'Most common inherited thrombophilia; point mutation causing resistance to activated protein C' },
        { term: 'Antiphospholipid syndrome', definition: 'Autoimmune prothrombotic disorder with persistent antiphospholipid antibodies causing thrombosis and pregnancy morbidity' },
        { term: 'Catastrophic APS', definition: 'Rapidly progressive multi-organ thrombotic microangiopathy with high mortality' },
      ],
      clinicalNotes: 'DIC: fibrinogen <100 mg/dL is highly specific; check serial fibrinogen levels. Cryoprecipitate (10 units) raises fibrinogen ~70 mg/dL. APL-DIC is unique: start ATRA immediately regardless of molecular confirmation. HIT: if 4Ts score >=4, stop heparin and start argatroban (titrate to aPTT 1.5-3x baseline); transition to warfarin only when platelets >150K, starting with low dose (max 5 mg) and overlapping argatroban for >=5 days with INR >4 on combination (argatroban raises INR). Thrombophilia testing: factor V Leiden and prothrombin gene mutation by DNA testing (unaffected by anticoagulation). APS: triple-positive patients (all 3 antibodies positive) have highest thrombosis risk; use warfarin, NOT DOACs.',
    },
    5: {
      level: 5,
      summary: 'Expert coagulation management integrates novel hemophilia therapies (gene therapy, fitusiran), next-generation anticoagulants, precision thrombophilia management, and emerging DIC biomarkers.',
      explanation:
        'Hemophilia gene therapy: valoctocogene roxaparvovec (Roctavian, AAV5-factor VIII gene therapy for hemophilia A) received conditional approval. Single IV infusion achieves endogenous factor VIII production, eliminating need for prophylaxis in responders. Limitations: pre-existing AAV5 neutralizing antibodies (30-40% of population) preclude treatment; factor VIII levels decline over years; long-term durability uncertain (5+ year data shows 80%+ still off prophylaxis). Etranacogene dezaparvovec (Hemgenix, AAV5-factor IX Padua variant for hemophilia B): single infusion achieves factor IX levels of 30-40%, virtually eliminating bleeds. Fitusiran (alhemo): subcutaneous anti-antithrombin siRNA reducing antithrombin levels to enhance thrombin generation; effective for hemophilia A and B with or without inhibitors. Risk of thrombotic events led to modified dosing protocols.\n\nNovel anticoagulation targets: factor XIa inhibitors (abelacimab monoclonal antibody, milvexian and asundexian small molecules) promise effective anticoagulation with reduced bleeding risk, as factor XI contributes to thrombosis but is dispensable for hemostasis. PACIFIC-AF and OCEANIC-AF trials are evaluating factor XIa inhibitors versus standard anticoagulation in atrial fibrillation. Abelacimab showed 67% reduction in VTE versus enoxaparin in orthopedic prophylaxis.\n\nAdvanced DIC management: thrombomodulin alfa (recombinant soluble thrombomodulin, ART-123) activates protein C and enhances thrombin-mediated activation of TAFI, showing benefit in sepsis-associated DIC in Japanese trials. Antithrombin concentrate replacement is used in some DIC protocols when AT levels <60%. Emerging DIC biomarkers: thrombin-antithrombin complex (TAT), plasmin-alpha2-antiplasmin complex (PAP), soluble fibrin, and protein C activity provide earlier detection than traditional ISTH criteria. The JAAM DIC criteria (Japanese Association for Acute Medicine) emphasize systemic inflammatory response in scoring.\n\nComplex anticoagulation scenarios: heparin-free cardiopulmonary bypass in HIT (bivalirudin protocol), anticoagulation in cirrhosis (rebalanced hemostasis - thromboelastography-guided approach), pregnancy anticoagulation (LMWH only; warfarin teratogenic; DOACs contraindicated), cancer-associated thrombosis (DOAC preferred per CARAVAGGIO and SELECT-D trials unless GI/GU cancer with high bleeding risk, then LMWH), and periprocedural anticoagulation management.\n\nThrombotic microangiopathies (TMAs): TTP (ADAMTS13 <10%) - plasma exchange + caplacizumab (anti-vWF A1 domain nanobody) + rituximab + steroids. Caplacizumab accelerates platelet recovery and reduces refractoriness/death but increases bleeding risk. Complement-mediated HUS (aHUS): eculizumab/ravulizumab. STEC-HUS: supportive care only (antibiotics and anti-complement contraindicated). Pregnancy-associated TMAs require multidisciplinary management differentiating TTP, aHUS, HELLP, and preeclampsia.',
      keyTerms: [
        { term: 'Valoctocogene roxaparvovec', definition: 'AAV5-based gene therapy delivering factor VIII transgene for hemophilia A' },
        { term: 'Fitusiran', definition: 'Anti-antithrombin siRNA that rebalances hemostasis in hemophilia by reducing natural anticoagulant activity' },
        { term: 'Factor XIa inhibitors', definition: 'Next-generation anticoagulants targeting factor XI to separate antithrombotic efficacy from bleeding risk' },
        { term: 'Caplacizumab', definition: 'Anti-vWF A1 domain nanobody that blocks vWF-platelet interaction in TTP' },
        { term: 'Thrombomodulin alfa', definition: 'Recombinant soluble thrombomodulin activating protein C pathway; investigational for DIC' },
        { term: 'Thromboelastography', definition: 'Viscoelastic point-of-care test assessing global hemostasis dynamics (clot formation to fibrinolysis)' },
        { term: 'Etranacogene dezaparvovec', definition: 'AAV5 gene therapy with hyperactive Padua factor IX variant for hemophilia B' },
      ],
      clinicalNotes: 'Gene therapy for hemophilia: screen for AAV5 neutralizing antibodies first (30-40% positive, ineligible). Monitor LFTs closely post-infusion (immune-mediated hepatotoxicity requiring corticosteroids in ~85%). Factor levels peak at weeks 4-12 then stabilize. Long-term cancer surveillance required (AAV integration concern, though risk appears low). Fitusiran: contraindicated with concurrent emicizumab (synergistic thrombotic risk). Factor XIa inhibitors: watch for OCEANIC-AF results (asundexian vs apixaban in AF). Caplacizumab in TTP: start with first plasma exchange, continue 30 days after last PEX; monitor vWF activity (caplacizumab-related) and ADAMTS13 (disease-related). For cancer-associated VTE: edoxaban and rivaroxaban increase GI bleeding in GI malignancies - use apixaban or LMWH.',
    },
  },
  media: [],
  citations: [
    'Hoffman M, Monroe DM. A cell-based model of hemostasis. Thromb Haemost. 2001;85(6):958-965.',
    'Levi M, Scully M. How I treat disseminated intravascular coagulation. Blood. 2018;131(8):845-854.',
    'Greinacher A. Heparin-Induced Thrombocytopenia. N Engl J Med. 2015;373(19):1883-1884.',
    'Pipe SW, et al. Gene Therapy with Etranacogene Dezaparvovec for Hemophilia B. N Engl J Med. 2023;388(8):706-718.',
    'Connors JM, et al. Antiphospholipid Syndrome. N Engl J Med. 2023;389(22):2061-2071.',
    'Kearon C, et al. Antithrombotic Therapy for VTE Disease: CHEST Guideline. Chest. 2016;149(2):315-352.',
    'Srivastava A, et al. WFH Guidelines for the Management of Hemophilia, 3rd edition. Haemophilia. 2020;26(S6):1-158.',
  ],
  crossReferences: [
    'hematology-iron-deficiency-anemia-comprehensive',
    'hematology-hemolytic-anemia-comprehensive',
    'hematology-hematologic-malignancies',
    'hematology-aplastic-anemia-comprehensive',
  ],
  tags: {
    systems: ['hematology', 'vascular'],
    topics: ['coagulation', 'thrombosis', 'bleeding disorders', 'anticoagulation', 'DIC', 'hemophilia', 'VWD'],
    keywords: ['coagulation cascade', 'DVT', 'PE', 'DIC', 'HIT', 'hemophilia', 'VWD', 'warfarin', 'DOAC', 'heparin', 'APS', 'gene therapy'],
    clinicalRelevance: 'critical',
  },
  createdAt: '2025-01-30T00:00:00.000Z',
  updatedAt: '2025-01-30T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['SOMA Content Team'],
};
