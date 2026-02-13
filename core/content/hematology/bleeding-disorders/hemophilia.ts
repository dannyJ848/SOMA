import { EducationalContent } from '../types';

export const hemophilia: EducationalContent = {
  id: 'hematology-hemophilia',
  type: 'condition',
  name: 'Hemophilia',
  alternateNames: ['Hemophilia A', 'Hemophilia B', 'Factor VIII Deficiency', 'Factor IX Deficiency', 'Christmas Disease'],
  levels: {
    1: {
      level: 1,
      summary: 'Hemophilia is a condition where your blood doesn\'t clot properly because it\'s missing an important protein needed for clotting.',
      explanation: 'When you get a cut, your blood normally forms a clot to stop the bleeding. This happens because of special proteins called clotting factors that work together. In hemophilia, one of these factors is missing or doesn\'t work right. There are two main types: Hemophilia A (missing Factor VIII) is more common, and Hemophilia B (missing Factor IX) is also called Christmas disease. Hemophilia is usually inherited, passed from parents to children, and mostly affects boys. People with hemophilia may bleed longer after injuries and can have bleeding inside their body, especially into joints and muscles. With proper treatment—including medicine that replaces the missing factor—people with hemophilia can live healthy, active lives.',
      keyTerms: [
        { term: 'Clotting factors', definition: 'Proteins in your blood that work together to form clots and stop bleeding' },
        { term: 'Factor VIII', definition: 'The clotting protein missing in Hemophilia A' },
        { term: 'Factor IX', definition: 'The clotting protein missing in Hemophilia B' },
        { term: 'Inherited', definition: 'Passed from parents to children through genes' },
      ],
    },
    2: {
      level: 2,
      summary: 'Hemophilia is an X-linked inherited bleeding disorder caused by deficiency of coagulation Factor VIII (Hemophilia A) or Factor IX (Hemophilia B), classified by severity based on factor activity levels.',
      explanation: 'Hemophilia results from mutations in genes encoding Factor VIII (F8 gene) or Factor IX (F9 gene) located on the X chromosome. Since males have only one X chromosome, a single defective gene causes disease; females with one affected X are usually carriers with mild or no symptoms. Disease severity correlates with factor activity: severe (<1% activity) causes spontaneous bleeding, particularly into joints (hemarthrosis) and muscles; moderate (1-5%) causes bleeding with minor trauma; mild (5-40%) causes bleeding mainly with surgery or significant injury. Hemarthrosis is the hallmark of severe hemophilia—repeated bleeding into joints causes synovitis and progressive arthropathy. Diagnosis involves prolonged activated partial thromboplastin time (aPTT) with normal PT, followed by specific factor assays. Treatment centers on factor replacement: on-demand for bleeding episodes or prophylactic infusions to prevent bleeding. Complications include joint damage, inhibitor development (antibodies against replacement factor), and historically, transfusion-transmitted infections.',
      keyTerms: [
        { term: 'X-linked', definition: 'Inheritance pattern involving genes on the X chromosome, mainly affecting males' },
        { term: 'Carrier', definition: 'Female with one normal and one affected X chromosome, can pass to children' },
        { term: 'Hemarthrosis', definition: 'Bleeding into a joint, characteristic of hemophilia' },
        { term: 'aPTT', definition: 'Blood test measuring intrinsic clotting pathway, prolonged in hemophilia' },
        { term: 'Inhibitor', definition: 'Antibody against clotting factor that makes treatment less effective' },
      ],
    },
    3: {
      level: 3,
      summary: 'Hemophilia pathophysiology involves disruption of the intrinsic coagulation pathway, with clinical manifestations determined by residual factor activity, and management evolving from on-demand therapy to prophylaxis and novel non-factor therapies.',
      explanation: 'Factor VIII and IX are essential components of the intrinsic coagulation pathway, forming the tenase complex that activates Factor X. Factor VIII serves as a cofactor to Factor IXa; their deficiency impairs thrombin generation and clot formation. Genotype-phenotype correlations exist: F8 intron 22 inversions cause severe Hemophilia A; large deletions and nonsense mutations generally cause severe disease with higher inhibitor risk. Joint bleeding pathophysiology involves iron-induced synovial inflammation and cartilage degradation from blood exposure. Prophylaxis aims to maintain trough factor levels >1% (standard) or higher (individualized based on bleeding phenotype and activity level). Extended half-life (EHL) products (PEGylated, Fc-fusion, albumin-fusion) reduce infusion frequency. Emicizumab, a bispecific antibody mimicking Factor VIIIa cofactor function, provides prophylaxis via subcutaneous injection, effective even with inhibitors. Gene therapy trials using AAV vectors show sustained factor expression. Inhibitor management includes immune tolerance induction or bypassing agents (aPCC, rFVIIa).',
      keyTerms: [
        { term: 'Tenase complex', definition: 'Factor VIIIa-IXa complex that activates Factor X in coagulation' },
        { term: 'Intron 22 inversion', definition: 'Most common mutation causing severe Hemophilia A' },
        { term: 'Extended half-life products', definition: 'Modified factor concentrates requiring less frequent infusion' },
        { term: 'Emicizumab', definition: 'Bispecific antibody mimicking Factor VIII function for prophylaxis' },
        { term: 'Immune tolerance induction', definition: 'Protocol to eliminate inhibitors through repeated factor exposure' },
      ],
    },
    4: {
      level: 4,
      summary: 'Contemporary hemophilia care integrates pharmacokinetic-tailored prophylaxis, novel hemostatic agents rebalancing coagulation, FVIII/FIX gene therapy approaches, and comprehensive musculoskeletal and psychosocial management.',
      explanation: 'Precision hemophilia management individualizes therapy based on pharmacokinetic modeling (population PK programs like myPKFiT, WAPPS) to optimize dosing intervals and trough levels. Target trough levels have evolved: standard >1%, but higher targets (3-5% or 8-12%) considered for active patients or those with target joints. Emicizumab dosing achieves steady-state levels providing continuous prophylaxis; importantly, aPTT cannot monitor efficacy, and breakthrough bleeding still requires factor or bypassing agents (avoid aPCC combination due to thrombotic microangiopathy risk). Emerging therapies rebalance hemostasis: fitusiran (siRNA reducing antithrombin), concizumab and marstacimab (anti-TFPI antibodies). Gene therapy (valoctocogene roxaparvovec for HA, etranacogene dezaparvovec for HB) achieves sustained factor expression, though durability and hepatotoxicity management remain questions. Inhibitor prevention strategies include starting prophylaxis early, avoiding immunologic danger signals, and possibly using plasma-derived products with VWF. Comprehensive care at Hemophilia Treatment Centers (HTCs) improves outcomes through multidisciplinary teams addressing joint health, psychosocial needs, and transition to adult care.',
      keyTerms: [
        { term: 'Pharmacokinetic modeling', definition: 'Using drug clearance data to optimize individual dosing' },
        { term: 'Fitusiran', definition: 'siRNA therapy reducing antithrombin to rebalance hemostasis' },
        { term: 'Anti-TFPI', definition: 'Antibodies blocking tissue factor pathway inhibitor to enhance coagulation' },
        { term: 'Hemophilia Treatment Center', definition: 'Specialized center providing comprehensive multidisciplinary care' },
        { term: 'Target joint', definition: 'Joint with recurrent bleeds requiring intensified management' },
      ],
    },
    5: {
      level: 5,
      summary: 'Expert hemophilia management requires integration of established and novel therapies, evidence-based inhibitor prevention and treatment, surgical and procedural hemostatic planning, and navigation of the rapidly evolving therapeutic landscape.',
      explanation: 'Clinical excellence in hemophilia demands comprehensive expertise. Diagnosis: prolonged aPTT with normal PT prompts mixing study (corrects) then factor assays; confirm with genetic testing for mutation characterization and family counseling. Severity classification guides approach: severe requires prophylaxis from early childhood (ideally before first joint bleed); moderate/mild may use on-demand treatment. Product selection: standard half-life vs. EHL based on pharmacokinetics, adherence, and venous access; plasma-derived vs. recombinant (PD may have lower inhibitor rates in PUPs, SIPPET trial). Emicizumab: highly effective, weekly to monthly dosing; recognize aPTT is unreliable, use chromogenic factor assays or bovine reagent-based aPTT; manage breakthrough bleeds with rFVIIa first-line, aPCC at reduced doses with caution. Gene therapy evaluation: assess AAV immunity, liver function, patient understanding of unknowns; monitoring protocols for transaminitis requiring steroids. Perioperative management: target factor levels by procedure type, continuous infusion vs. bolus dosing, monitor levels closely. Inhibitor management: ITI protocols (high-dose, low-dose) with success predictors (titer <200 BU, good-risk mutations); emicizumab for prophylaxis in inhibitor patients. Women and carriers: may have bleeding symptoms, require factor levels and individualized management.',
      keyTerms: [
        { term: 'Mixing study', definition: 'Test distinguishing factor deficiency (corrects) from inhibitor (does not correct)' },
        { term: 'SIPPET trial', definition: 'Study suggesting plasma-derived FVIII may have lower inhibitor rates' },
        { term: 'Bethesda assay', definition: 'Test quantifying inhibitor strength in Bethesda Units' },
        { term: 'Chromogenic factor assay', definition: 'Alternative assay not affected by emicizumab interference' },
        { term: 'Continuous infusion', definition: 'Method maintaining steady factor levels for surgery' },
      ],
      clinicalNotes: 'Initial bleeding episode workup: CBC, PT, aPTT, mixing study, factor VIII and IX levels. Genetic testing confirms diagnosis and identifies carriers. Inhibitor screening: Bethesda assay at defined intervals (every 3-4 exposures initially, then annually). Joint assessment: physical exam scoring (HJHS), ultrasound, MRI for subclinical damage. Emergency management: treat first, test later—give factor for significant bleeding before labs return. Head trauma: always treat, then image. Surgery: admit to HTC or facility with hematology support; have factor or bypassing agents available; factor levels guide dosing (major surgery: peak 80-100%, trough 50%+). Gene therapy considerations: hepatitis can occur requiring immunosuppression; fertility counseling as viral shedding occurs; avoid live vaccines post-therapy. Transition care: critical period for adherence; engage adolescents in self-management. Documentation: maintain treatment logs, share emergency protocols with local hospitals.',
    },
  },
  media: [],
  citations: [
    'Srivastava A, et al. WFH Guidelines for the Management of Hemophilia, 3rd edition. Haemophilia. 2020;26(Suppl 6):1-158.',
    'Mahlangu J, et al. Emicizumab Prophylaxis in Patients Who Have Hemophilia A without Inhibitors. N Engl J Med. 2018;379(9):811-822.',
    'Peyvandi F, et al. A Randomized Trial of Factor VIII and Neutralizing Antibodies in Hemophilia A. N Engl J Med. 2016;374(21):2054-2064.',
  ],
  crossReferences: ['hematology-coagulation-studies', 'hematology-living-with-hemophilia', 'hematology-von-willebrand'],
  tags: {
    systems: ['hematology'],
    topics: ['hemophilia', 'bleeding disorders', 'coagulation', 'gene therapy', 'inherited disease'],
    keywords: ['hemophilia', 'factor VIII', 'factor IX', 'bleeding', 'clotting', 'inhibitor', 'prophylaxis'],
  },
  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
