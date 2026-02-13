import { EducationalContent } from '../types';

export const cancerSupport: EducationalContent = {
  id: 'hematology-cancer-support',
  type: 'concept',
  name: 'Living with Blood Cancer',
  alternateNames: ['Hematologic Cancer Support', 'Blood Cancer Survivorship', 'Cancer Coping Strategies'],
  levels: {
    1: {
      level: 1,
      summary: 'Living with blood cancer involves medical treatment, emotional support, and lifestyle adjustments to maintain quality of life.',
      explanation: 'Blood cancer affects not just your body but your whole life. Living with conditions like leukemia, lymphoma, or myeloma requires coping with treatments, side effects, and emotional challenges. Building a support network of family, friends, and healthcare providers is essential. Many people find help through support groups where they can connect with others facing similar challenges. Managing side effects like fatigue, nausea, and low blood counts is an important part of daily life. Good nutrition, gentle exercise when possible, and adequate rest help maintain strength. Emotional health matters too - feelings of fear, anxiety, or depression are common and deserve attention. Palliative care specialists can help manage symptoms and improve quality of life at any stage. With advances in treatment, many people with blood cancers live long, fulfilling lives.',
      keyTerms: [
        { term: 'Blood cancer', definition: 'Cancers affecting blood cells, bone marrow, or lymphatic system' },
        { term: 'Support group', definition: 'Group of people sharing similar experiences who provide mutual support' },
        { term: 'Palliative care', definition: 'Care focused on relieving symptoms and improving quality of life' },
        { term: 'Quality of life', definition: 'Overall well-being including physical, emotional, and social health' },
      ],
      analogies: [
        'Living with cancer is like running a marathon - pacing and support are essential',
        'Think of your care team as a pit crew helping you stay in the race',
      ],
      examples: [
        'A patient joins an online support group to connect with others who have multiple myeloma',
        'Someone in remission from lymphoma volunteers to support newly diagnosed patients',
      ],
    },
    2: {
      level: 2,
      summary: 'Blood cancer survivorship encompasses physical symptom management, psychosocial support, practical assistance, and coordinated care throughout the treatment journey and beyond.',
      explanation: 'Physical aspects: managing treatment side effects including cytopenias (infection precautions, bleeding precautions), nausea, mucositis, fatigue, neuropathy, and organ toxicities. Neutropenic precautions (hand hygiene, avoiding raw foods, avoiding sick contacts) when ANC low. Cancer-related fatigue is common and persistent - energy conservation, graded exercise, and treating contributing factors (anemia, sleep disturbance, depression) help. Psychosocial support: distress screening recommended at each visit; social work involvement for practical needs; psychology/psychiatry for anxiety, depression, trauma; spiritual care; financial counseling. Care coordination: multidisciplinary team approach (hematology/oncology, nursing, pharmacy, social work, nutrition, rehabilitation); care plans summarizing treatment and follow-up needs; communication between primary care and specialists. Survivorship care: transition to surveillance after treatment; monitoring for late effects (secondary malignancies, cardiac toxicity, endocrine dysfunction, infertility); health promotion and screening; psychosocial support for fear of recurrence.',
      keyTerms: [
        { term: 'Neutropenia', definition: 'Low neutrophil count increasing infection risk' },
        { term: 'Cancer-related fatigue', definition: 'Persistent tiredness not proportional to activity' },
        { term: 'Survivorship', definition: 'Living with and beyond cancer, including physical and emotional health' },
        { term: 'Distress screening', definition: 'Regular assessment of emotional well-being' },
        { term: 'Late effects', definition: 'Health problems that develop months or years after treatment' },
      ],
      analogies: [
        'Survivorship is like entering a new chapter after finishing a long book',
        'Cancer-related fatigue is different from normal tiredness - it\'s not fixed by rest alone',
      ],
      examples: [
        'A leukemia survivor receives regular echocardiograms to monitor for anthracycline cardiotoxicity',
        'A stem cell transplant patient receives vaccines to rebuild immunity',
      ],
    },
    3: {
      level: 3,
      summary: 'Comprehensive blood cancer support requires addressing medical complications, psychosocial needs, functional status, and long-term survivorship planning throughout the care continuum.',
      explanation: 'Medical complications: tumor lysis syndrome prevention and management; prevention of infections during neutropenia (prophylactic antibiotics, antifungals, antivirals); thrombosis prevention and management; management of transfusion needs; graft-versus-host disease in transplant recipients; immunoglobulin replacement for hypogammaglobulinemia. Rehabilitation: physical therapy for deconditioning and neuropathy; occupational therapy for energy conservation and adaptive equipment; speech therapy if indicated; lymphedema management. Cognitive concerns: \'chemo brain\' or cancer-related cognitive impairment affecting memory, attention, processing speed; cognitive rehabilitation strategies; neuropsychological testing if severe. Fertility preservation: sperm banking for men before gonadotoxic therapy; egg/embryo freezing or ovarian tissue preservation for women; fertility counseling essential for all reproductive-age patients. Sexual health: libido changes, erectile dysfunction, vaginal dryness, body image concerns; open communication with partners and providers. Employment and finances: FMLA for job protection; disability applications; patient assistance programs for medication costs; navigation support.',
      keyTerms: [
        { term: 'Tumor lysis syndrome', definition: 'Metabolic emergency from rapid cancer cell breakdown' },
        { term: 'Chemo brain', definition: 'Cognitive impairment during or after cancer treatment' },
        { term: 'Hypogammaglobulinemia', definition: 'Low antibody levels increasing infection risk' },
        { term: 'FMLA', definition: 'Family and Medical Leave Act protecting jobs during treatment' },
        { term: 'Graft-versus-host disease', definition: 'Complication where donor cells attack recipient tissues' },
      ],
    },
    4: {
      level: 4,
      summary: 'Clinical survivorship care involves surveillance protocols, management of treatment sequelae, health promotion, and addressing the unique needs of diverse blood cancer populations.',
      explanation: 'Surveillance: specific to cancer type and treatment; physical exams, laboratory monitoring, imaging; duration varies (5 years for many lymphomas, indefinite for leukemia, myeloma). Late effect monitoring: cardiac (echocardiograms, ECGs for anthracyclines, radiation); pulmonary (PFTs for bleomycin, radiation); endocrine (TSH, cortisol, sex hormones, growth hormone); bone health (DEXA for steroids, hormonal therapy); secondary malignancy screening. Immunizations: often need to repeat childhood vaccines after transplant; avoid live vaccines if immunosuppressed; annual influenza; COVID-19 vaccination. Health promotion: smoking cessation; alcohol moderation; healthy diet; physical activity; stress management; sleep hygiene. Special populations: adolescent and young adult (AYA) patients have unique needs - fertility, education/employment disruption, body image, peer relationships; pediatric survivors transition to adult care; older adults balance cancer treatment with comorbidities; diverse populations may have cultural considerations affecting care. Advanced care planning: discussions about goals of care; advance directives; hospice and palliative care integration when appropriate.',
      keyTerms: [
        { term: 'Surveillance', definition: 'Regular monitoring for cancer recurrence' },
        { term: 'Secondary malignancy', definition: 'Cancer caused by treatment of first cancer' },
        { term: 'Live vaccines', definition: 'Vaccines containing weakened live virus, contraindicated in immunosuppression' },
        { term: 'DEXA scan', definition: 'Bone density test for osteoporosis screening' },
        { term: 'AYA', definition: 'Adolescent and young adult cancer patients (ages 15-39)' },
      ],
      clinicalNotes: 'Survivorship care plans should summarize treatment received and outline recommended follow-up. Cardiac monitoring essential after anthracyclines - baseline echo, then periodic monitoring based on cumulative dose. Pulmonary toxicity from bleomycin may be progressive - monitor indefinitely. Endocrine dysfunction common after cranial or total body irradiation. Screen for secondary MDS/AML in patients who received alkylating agents or topoisomerase inhibitors.',
    },
    5: {
      level: 5,
      summary: 'Expert blood cancer survivorship care integrates personalized surveillance, management of complex late effects, psychosocial oncology, and patient-reported outcomes to optimize long-term wellness.',
      explanation: 'Personalized surveillance: risk-stratified follow-up based on original disease, treatment exposures, and individual risk factors; minimal residual disease monitoring where available; liquid biopsies for early relapse detection emerging. Complex late effects: cardiovascular disease (screening and prevention programs); metabolic syndrome after transplant; endocrinopathies requiring hormone replacement; neurocognitive deficits; secondary malignancy risk counseling. Psychosocial oncology: formal distress screening with intervention protocols; trauma-informed care; family and caregiver support; bereavement services; return to work/school programs; sexual health clinics. Patient-reported outcomes: systematic collection of symptoms, function, and quality of life; integration into clinical care; PRO-guided care improves outcomes. Clinical trials for survivorship interventions: exercise programs, cognitive rehabilitation, symptom management. Care delivery models: dedicated survivorship clinics; primary care involvement with specialized guidance; telehealth for remote monitoring; nurse-led follow-up. Research priorities: understanding long-term trajectory of late effects; interventions to prevent or mitigate sequelae; health disparities in survivorship outcomes; cost-effective care models.',
      keyTerms: [
        { term: 'Liquid biopsy', definition: 'Blood test detecting cancer DNA circulating in bloodstream' },
        { term: 'Patient-reported outcomes', definition: 'Health information coming directly from patients' },
        { term: 'Trauma-informed care', definition: 'Approach recognizing impact of medical trauma' },
        { term: 'Metabolic syndrome', definition: 'Cluster of conditions increasing heart disease risk' },
        { term: 'PRO-guided care', definition: 'Treatment decisions based on patient-reported symptoms' },
      ],
      clinicalNotes: 'Minimal residual disease monitoring guides intensity of surveillance in acute leukemia. Cardio-oncology referral for high-risk patients. Endocrine evaluation annually after transplant. Screen for skin cancer after radiation and immunosuppression. Mental health screening at each visit - suicide risk in cancer patients. Fertility preservation counseling before gonadotoxic therapy. Document all treatment exposures for future reference.',
    },
  },
  media: [],
  citations: [
    'Alfano CM, Leach CR, Smith TG, et al. Equitably improving outcomes for cancer survivors and supporting caregivers: A blueprint for care delivery, research, education, and policy. CA Cancer J Clin. 2019;69(1):35-49.',
    'Children\'s Oncology Group. Long-Term Follow-Up Guidelines for Survivors of Childhood, Adolescent, and Young Adult Cancers. Version 5.0. 2018.',
    'Smith SK, Waters E, Dhillon HM, et al. Health-related quality of life and symptom clusters in hematological cancer survivors. Support Care Cancer. 2020;28(10):4805-4814.',
  ],
  crossReferences: ['hematology-leukemia', 'hematology-lymphoma', 'hematology-multiple-myeloma', 'hematology-stem-cell-transplant'],
  tags: {
    systems: ['hematology', 'oncology'],
    topics: ['survivorship', 'supportive care', 'quality of life', 'late effects', 'patient support'],
    keywords: ['survivorship', 'blood cancer', 'support', 'late effects', 'quality of life'],
  },
  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
