import { EducationalContent } from '../types';

export const livingWithHemophilia: EducationalContent = {
  id: 'hematology-living-with-hemophilia',
  type: 'concept',
  name: 'Living with Hemophilia',
  alternateNames: ['Managing Hemophilia', 'Hemophilia Self-Care', 'Life with a Bleeding Disorder'],
  levels: {
    1: {
      level: 1,
      summary: 'Hemophilia is a condition where your blood doesn\'t clot properly, so you have to be careful to avoid injuries and take special medicine to help your blood clot.',
      explanation: 'When you have hemophilia, your body is missing something it needs to stop bleeding. This means if you get a cut or bump yourself, you might bleed longer than other people. Living with hemophilia means being careful about activities that could cause injuries. You\'ll work with special doctors who help treat bleeding disorders. Many people with hemophilia take medicine that gives their body what it needs to clot properly. It\'s important to wear a medical ID bracelet so doctors know about your condition in emergencies. With proper care, people with hemophilia can do most activities and live full lives. Your family and school should know about your condition so they can help keep you safe.',
      keyTerms: [
        { term: 'Blood clot', definition: 'A thick lump of blood that forms to stop bleeding when you\'re injured' },
        { term: 'Bleeding disorder', definition: 'A condition where your blood doesn\'t clot the way it should' },
        { term: 'Factor', definition: 'A special protein your blood needs to form clots' },
        { term: 'Medical ID', definition: 'A bracelet or necklace that tells doctors about your health condition' },
      ],
    },
    2: {
      level: 2,
      summary: 'Living with hemophilia requires understanding your specific type and severity, maintaining prophylactic treatment schedules, recognizing bleeding signs, and balancing physical activity with injury prevention.',
      explanation: 'Hemophilia is classified by which clotting factor is missing (Factor VIII in Hemophilia A, Factor IX in Hemophilia B) and severity level based on factor activity (severe <1%, moderate 1-5%, mild 5-40%). Treatment has evolved from on-demand therapy to prophylaxis—regular infusions of clotting factor to maintain levels high enough to prevent spontaneous bleeds. People with hemophilia learn to recognize early signs of bleeding, especially into joints (warmth, tingling, swelling) and muscles, and treat promptly. Joint bleeds are particularly concerning because repeated bleeding causes permanent damage called hemophilic arthropathy. Physical activity is encouraged—strong muscles protect joints—but contact sports carry higher risks. Many patients learn self-infusion at home. A comprehensive hemophilia treatment center (HTC) provides specialized care from a multidisciplinary team including hematologists, nurses, physical therapists, and social workers.',
      keyTerms: [
        { term: 'Factor VIII', definition: 'The clotting protein missing in Hemophilia A, the most common type' },
        { term: 'Factor IX', definition: 'The clotting protein missing in Hemophilia B (Christmas disease)' },
        { term: 'Prophylaxis', definition: 'Regular preventive treatment to keep factor levels stable' },
        { term: 'Hemophilic arthropathy', definition: 'Joint damage caused by repeated bleeding into joints' },
        { term: 'Self-infusion', definition: 'Administering your own IV factor treatment at home' },
      ],
    },
    3: {
      level: 3,
      summary: 'Comprehensive hemophilia management involves personalized prophylactic regimens, pharmacokinetic-guided dosing, monitoring for inhibitor development, musculoskeletal preservation strategies, and navigation of psychosocial challenges inherent to chronic illness.',
      explanation: 'Modern hemophilia care emphasizes individualized treatment. Pharmacokinetic studies determine each patient\'s factor half-life and clearance, allowing personalized dosing to maintain trough levels above target (typically >1% to prevent spontaneous bleeds, higher for active individuals). Extended half-life factor products reduce infusion frequency. The most serious treatment complication is inhibitor development—alloantibodies against infused factor, occurring in 25-30% of severe Hemophilia A patients. Inhibitor management involves immune tolerance induction (ITI) protocols or bypassing agents (activated prothrombin complex concentrate, recombinant Factor VIIa). Joint health requires regular assessment, physical therapy, and sometimes synovectomy for target joints. Chronic pain management is complex given opioid risks. Psychosocial support addresses the burden of chronic illness, treatment adherence challenges, career considerations, and family planning discussions. Gene therapy trials show promise for long-term factor expression without regular infusions.',
      keyTerms: [
        { term: 'Pharmacokinetics', definition: 'Study of how the body absorbs, distributes, and eliminates medications' },
        { term: 'Inhibitor', definition: 'Antibody that neutralizes infused clotting factor, making treatment ineffective' },
        { term: 'Immune tolerance induction', definition: 'Protocol to eliminate inhibitors through repeated high-dose factor exposure' },
        { term: 'Bypassing agent', definition: 'Medication that promotes clotting through alternative pathways when inhibitors are present' },
        { term: 'Target joint', definition: 'Joint with repeated bleeds that becomes prone to further bleeding and damage' },
      ],
    },
    4: {
      level: 4,
      summary: 'Advanced hemophilia management integrates molecular characterization, novel therapeutic modalities including non-factor therapies and gene therapy, comprehensive inhibitor management, and optimization of long-term musculoskeletal and quality-of-life outcomes.',
      explanation: 'Hemophilia care has transformed with novel therapies. Emicizumab, a bispecific antibody mimicking Factor VIIIa cofactor function, provides prophylaxis via subcutaneous injection regardless of inhibitor status. Fitusiran (siRNA targeting antithrombin) and anti-TFPI antibodies rebalance hemostasis through alternative mechanisms. Gene therapy using AAV vectors achieves sustained factor expression in clinical trials, potentially offering functional cure, though durability and liver safety require ongoing study. For patients with inhibitors, ITI success depends on historical peak titer and time to initiation. Monitoring now includes thrombin generation assays for global hemostatic assessment, particularly relevant with non-factor therapies where traditional assays don\'t apply. Musculoskeletal management utilizes MRI protocols (IPSG scoring) for subclinical joint disease detection, enabling intervention before irreversible damage. Transition from pediatric to adult care is a vulnerable period requiring deliberate planning. Reproductive counseling addresses carrier status, prenatal diagnosis options, and delivery planning to minimize neonatal risk.',
      keyTerms: [
        { term: 'Emicizumab', definition: 'Bispecific antibody bridging Factor IXa and X, mimicking Factor VIII function' },
        { term: 'Gene therapy', definition: 'Treatment delivering functional gene copies to enable endogenous factor production' },
        { term: 'AAV vector', definition: 'Adeno-associated virus modified to deliver therapeutic genes safely' },
        { term: 'Thrombin generation assay', definition: 'Test measuring overall clotting capacity, useful with novel therapies' },
        { term: 'IPSG', definition: 'International Prophylaxis Study Group MRI scoring system for hemophilic joints' },
      ],
    },
    5: {
      level: 5,
      summary: 'Clinical excellence in hemophilia requires mastery of evolving therapeutic landscapes including gene therapy and non-factor treatments, evidence-based inhibitor prevention and eradication strategies, comprehensive musculoskeletal surveillance, and integration of patient-reported outcomes into individualized care plans.',
      explanation: 'Contemporary hemophilia management demands integration of multiple therapeutic options. Factor product selection considers half-life (standard vs. extended), immunogenicity risk (plasma-derived with VWF may have lower inhibitor rates in PUPs), and patient preference. Emicizumab prophylaxis achieves excellent bleed protection with weekly to monthly subcutaneous dosing; however, clinicians must understand its interaction with bypassing agents (thrombotic microangiopathy risk with aPCC) and the need for factor products in breakthrough bleeds requiring hemostatic levels. Gene therapy evaluation requires assessment of AAV serotype immunity, liver function, and patient understanding of uncertainties regarding durability and potential late effects. Inhibitor management decisions balance ITI (70% success in good-risk patients) against long-term non-factor therapy; recent data suggest ITI remains valuable for factor access during procedures and emergencies. Perioperative management requires meticulous factor replacement plans with post-operative monitoring levels. Comprehensive care includes assessment of bone health (increased osteoporosis risk), cardiovascular disease in aging populations, and HIV/HCV management in those infected through blood products. Patient-reported outcomes (Haemo-QoL, PROBE) should guide shared decision-making.',
      keyTerms: [
        { term: 'PUPs', definition: 'Previously untreated patients, highest inhibitor development risk period' },
        { term: 'aPCC', definition: 'Activated prothrombin complex concentrate (FEIBA), bypassing agent for inhibitor patients' },
        { term: 'Thrombotic microangiopathy', definition: 'Serious complication from combined emicizumab and aPCC therapy' },
        { term: 'VWF', definition: 'Von Willebrand Factor, may be protective against inhibitors in plasma-derived products' },
        { term: 'PROBE', definition: 'Patient Reported Outcomes Burdens and Experiences questionnaire for hemophilia' },
      ],
      clinicalNotes: 'Inhibitor screening should occur at defined intervals, especially in the first 50 exposure days and after intensive treatment. Bethesda assay with Nijmegen modification is standard; chromogenic factor assays needed with emicizumab. Surgery requires careful planning with hematology: target peak factor levels vary by procedure (major surgery 80-100%, minor 50-80%). Document all bleeds in a treatment log. Hepatitis and HIV status affect management—direct-acting antivirals have revolutionized HCV treatment in this population. Dental care requires coordination; antifibrinolytics (tranexamic acid) valuable for oral procedures. Emergency room guidance letters should be current. For gene therapy candidates, informed consent must address unknown long-term outcomes including malignancy risk and immunosuppression requirements.',
    },
  },
  media: [],
  citations: [
    'Srivastava A, et al. WFH Guidelines for the Management of Hemophilia, 3rd edition. Haemophilia. 2020;26(Suppl 6):1-158.',
    'Oldenburg J, et al. Emicizumab Prophylaxis in Hemophilia A with Inhibitors. N Engl J Med. 2017;377(9):809-818.',
    'Pipe SW, et al. Gene Therapy with Etranacogene Dezaparvovec for Hemophilia B. N Engl J Med. 2023;388(8):706-718.',
  ],
  crossReferences: ['hematology-hemophilia', 'hematology-coagulation-studies', 'hematology-bleeding-disorders'],
  tags: {
    systems: ['hematology'],
    topics: ['hemophilia', 'bleeding disorders', 'chronic disease management', 'gene therapy', 'patient education'],
    keywords: ['hemophilia', 'factor VIII', 'factor IX', 'prophylaxis', 'inhibitors', 'self-infusion', 'emicizumab'],
  },
  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
