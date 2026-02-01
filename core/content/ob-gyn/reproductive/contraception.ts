import { EducationalContent } from '../../types';

export const contraception: EducationalContent = {
  id: 'obgyn-contraception',
  type: 'topic',
  name: 'Contraception',
  nameEs: 'Anticoncepcion',
  alternateNames: ['Birth Control', 'Family Planning Methods'],
  levels: {
    1: {
      level: 1,
      summary: 'Contraception means methods used to prevent pregnancy, including pills, IUDs, implants, condoms, and other options.',
      explanation:
        'There are many ways to prevent pregnancy, and the best method depends on your health, lifestyle, and future plans. ' +
        'Some methods use hormones (like birth control pills, patches, or implants) to stop the ovary from releasing an egg. ' +
        'Others create a barrier (like condoms) or are placed inside the uterus (IUDs). Some methods are very long-lasting and ' +
        'you do not have to think about them every day. Condoms also protect against sexually transmitted infections (STIs). ' +
        'Talking with a doctor can help you choose the best option for you.',
      keyTerms: [
        { term: 'Contraception', definition: 'Any method used to prevent pregnancy' },
        { term: 'IUD', definition: 'Intrauterine device; a small T-shaped device placed inside the uterus to prevent pregnancy' },
        { term: 'Hormone', definition: 'A chemical messenger that controls body functions; some birth control uses hormones to prevent pregnancy' },
      ],
      patientCounselingPoints: [
        'No method is perfect — effectiveness depends on correct and consistent use.',
        'Only condoms protect against STIs in addition to pregnancy.',
        'You can switch methods at any time if one is not working for you.',
      ],
    },
    2: {
      level: 2,
      summary: 'Contraceptive methods range from LARCs (IUDs, implants) with >99% efficacy to short-acting hormonal methods, barrier methods, and permanent sterilization, chosen based on efficacy, side effects, and patient preference.',
      explanation:
        '**LARC (Long-Acting Reversible Contraception) — Most Effective:**\n' +
        '- Copper IUD (Paragard): non-hormonal, effective 10-12 years, failure rate <1%\n' +
        '- Levonorgestrel IUD (Mirena, Kyleena, Liletta): 3-8 years depending on type, reduces menstrual bleeding\n' +
        '- Etonogestrel implant (Nexplanon): subdermal rod, effective 3-5 years, >99.9% efficacy\n\n' +
        '**Short-Acting Hormonal:**\n' +
        '- Combined oral contraceptives (COCs): estrogen + progestin, 91% typical-use efficacy\n' +
        '- Progestin-only pill (POP): no estrogen, must be taken at the same time daily\n' +
        '- Patch (Xulane), ring (NuvaRing): weekly or monthly alternatives to daily pills\n' +
        '- Depo-Provera injection: every 3 months, 94% typical-use efficacy\n\n' +
        '**Barrier Methods:**\n' +
        '- Male condom: 82% typical use; also STI protection\n' +
        '- Female condom, diaphragm, cervical cap: less commonly used\n\n' +
        '**Permanent:**\n' +
        '- Tubal ligation (female) or vasectomy (male)\n\n' +
        '**Emergency Contraception:**\n' +
        '- Levonorgestrel (Plan B): within 72 hours\n' +
        '- Ulipristal (ella): within 120 hours\n' +
        '- Copper IUD: most effective EC, within 5 days',
      keyTerms: [
        { term: 'LARC', definition: 'Long-acting reversible contraception — IUDs and implants that provide years of protection with a single procedure' },
        { term: 'Typical-use efficacy', definition: 'How well a method works in real life, including occasional mistakes, as opposed to perfect use' },
        { term: 'Emergency contraception', definition: 'Methods used after unprotected sex to prevent pregnancy, most effective when taken as soon as possible' },
      ],
    },
    3: {
      level: 3,
      summary: 'Contraceptive prescribing requires understanding the US MEC (Medical Eligibility Criteria), mechanism of action of each method, and management of side effects and contraindications.',
      explanation:
        '**US Medical Eligibility Criteria (US MEC):**\n' +
        '- Category 1: No restriction\n' +
        '- Category 2: Benefits outweigh risks\n' +
        '- Category 3: Risks generally outweigh benefits\n' +
        '- Category 4: Unacceptable health risk (contraindicated)\n\n' +
        '**Key Contraindications for Estrogen-Containing Methods (Category 4):**\n' +
        '- Migraine with aura, history of VTE/PE, active breast cancer\n' +
        '- Smoking >=15 cigarettes/day AND age >=35\n' +
        '- Uncontrolled HTN (>=160/100), known thrombogenic mutations\n' +
        '- <21 days postpartum (VTE risk), hepatic adenoma/carcinoma\n\n' +
        '**Mechanisms of Action:**\n' +
        '- COCs/progestins: suppress ovulation, thicken cervical mucus, thin endometrium\n' +
        '- Copper IUD: spermicidal copper ions, sterile inflammatory reaction\n' +
        '- LNG-IUD: primarily cervical mucus thickening + endometrial decidualization; some ovulation suppression with higher-dose (52 mg)\n\n' +
        '**Side Effect Management:**\n' +
        '- Breakthrough bleeding on COCs: reassure for 3 months; switch formulation if persistent\n' +
        '- LNG-IUD: irregular spotting common in first 3-6 months, then amenorrhea in ~20%\n' +
        '- Depo-Provera: weight gain (~5 lb over 2 years), bone density loss (reversible); limit use in adolescents\n\n' +
        '**Quick Start Method:**\n' +
        '- Start any method on any day of the cycle (after negative pregnancy test); use backup for 7 days\n' +
        '- Improves initiation rates vs. traditional \"first day of period\" start',
      keyTerms: [
        { term: 'US MEC', definition: 'CDC Medical Eligibility Criteria for Contraceptive Use; 4-category system guiding safe prescribing based on medical conditions' },
        { term: 'Quick start', definition: 'Initiating contraception on any cycle day rather than waiting for menses, improving adherence' },
        { term: 'Breakthrough bleeding', definition: 'Unscheduled bleeding while on hormonal contraception, common in the first 3 months of use' },
      ],
      clinicalNotes: 'The US MEC should guide all contraceptive prescribing decisions. Estrogen is contraindicated in migraine with aura due to stroke risk. The copper IUD is the most effective form of emergency contraception.',
    },
    4: {
      level: 4,
      summary: 'Advanced contraceptive management addresses postpartum and post-abortion initiation, contraception in complex medical conditions, and pharmacokinetic interactions with anticonvulsants, antiretrovirals, and bariatric surgery.',
      explanation:
        '**Postpartum Contraception:**\n' +
        '- Immediate postplacental IUD insertion: safe and cost-effective; expulsion rate ~10-15% (higher with vaginal delivery vs. cesarean)\n' +
        '- Implant: can be placed before hospital discharge\n' +
        '- Estrogen-containing methods: avoid <21 days (VTE risk); Category 2 days 21-42 if no risk factors; unrestricted >=42 days\n' +
        '- Breastfeeding: progestin-only preferred; COCs Category 3 for <1 month postpartum, Category 2 months 1-6\n\n' +
        '**Drug Interactions:**\n' +
        '- CYP3A4 inducers reduce COC efficacy: rifampin (strongest), phenytoin, carbamazepine, phenobarbital, some ARVs (efavirenz)\n' +
        '- LARC methods not affected by enzyme inducers (advantage in epilepsy, HIV)\n' +
        '- Ulipristal (ella) antagonized by concurrent progestins — do not combine\n\n' +
        '**Bariatric Surgery:**\n' +
        '- Malabsorptive procedures (RYGB, BPD-DS) may reduce oral contraceptive absorption\n' +
        '- Non-oral methods preferred; avoid pregnancy for 12-24 months post-surgery\n\n' +
        '**Contraception in Specific Conditions:**\n' +
        '- SLE with antiphospholipid antibodies: Category 4 for estrogen; progestin-only or copper IUD\n' +
        '- Solid organ transplant: LNG-IUD safe and effective; avoid drug interactions with immunosuppressants\n' +
        '- Sickle cell disease: progestins may reduce sickling crises; estrogen Category 2\n\n' +
        '**Same-Day IUD After Abortion:**\n' +
        '- First trimester: immediate insertion safe, lower expulsion than postpartum\n' +
        '- Second trimester: immediate insertion feasible but higher expulsion (~5-10%)',
      keyTerms: [
        { term: 'Postplacental IUD', definition: 'IUD inserted within 10 minutes of placental delivery, safe and convenient but with higher expulsion rate' },
        { term: 'CYP3A4 inducer', definition: 'Medication that accelerates liver metabolism of hormonal contraceptives, reducing their efficacy' },
        { term: 'US MEC Category 4', definition: 'Contraceptive use represents an unacceptable health risk in this condition — method is contraindicated' },
      ],
      clinicalNotes: 'LARC methods are the best choice for patients on CYP3A4 inducers. Immediate postpartum or post-abortion LARC placement is a high-impact intervention to reduce unintended pregnancy.',
    },
    5: {
      level: 5,
      summary: 'Expert-level contraception science encompasses novel hormonal delivery systems, non-hormonal targets, male contraception development, and population-level modeling of contraceptive access on maternal mortality.',
      explanation:
        '**Novel Delivery Systems:**\n' +
        '- Microarray patches: dissolving microneedle patches delivering levonorgestrel (self-administered monthly)\n' +
        '- Intravaginal rings: 1-year segesterone/ethinyl estradiol ring (Annovera) — first patient-controlled annual method\n' +
        '- Long-acting injectable: subcutaneous depot medroxyprogesterone (DMPA-SC, Sayana Press) — self-injectable, 3 months\n\n' +
        '**Non-Hormonal Targets (Preclinical/Phase I-II):**\n' +
        '- Vitamin A pathway: retinoic acid receptor alpha antagonist disrupts spermatogenesis (YCT529 — first male non-hormonal candidate)\n' +
        '- Sperm motility inhibitors: soluble adenylyl cyclase (sAC) inhibitors — rapid onset/offset \"on-demand\" male contraceptive\n' +
        '- Anti-CRISP1 antibodies: prevent sperm capacitation (preclinical)\n' +
        '- Oviductal targets: blocking sperm-egg fusion (IZUMO1-JUNO interaction antibodies)\n\n' +
        '**Male Hormonal Contraception:**\n' +
        '- Combination regimens: testosterone + progestin (DMPA, nestorone, dimethandrolone undecanoate)\n' +
        '- Nestorone/testosterone gel: Phase IIb (NICHD), ~96% suppression of spermatogenesis\n' +
        '- Key barrier: achieving consistent azoospermia or severe oligospermia across populations\n\n' +
        '**Global Health Impact:**\n' +
        '- Satisfying unmet need for family planning could prevent ~70% of unintended pregnancies globally\n' +
        '- Modeling suggests universal contraceptive access could avert ~100,000 maternal deaths annually\n' +
        '- Task-sharing (pharmacists, CHWs) and over-the-counter oral contraceptives (Opill) expand access\n\n' +
        '**Pericoital Contraception:**\n' +
        '- On-demand UPA or LNG before/after intercourse: non-daily oral options under study\n' +
        '- May improve adherence in populations with intermittent sexual activity',
      keyTerms: [
        { term: 'Soluble adenylyl cyclase inhibitors', definition: 'Non-hormonal compounds that rapidly and reversibly impair sperm motility, a leading "on-demand" male contraceptive candidate' },
        { term: 'Annovera', definition: 'Patient-controlled vaginal ring releasing segesterone/ethinyl estradiol for 1 year (13 cycles) without replacement' },
        { term: 'Task-sharing', definition: 'Policy enabling non-physician providers (pharmacists, community health workers) to deliver contraceptive services, expanding global access' },
      ],
      clinicalNotes: 'Male contraception development has been hampered by slow enrollment and pharmaceutical industry hesitance. sAC inhibitors represent a paradigm shift toward on-demand, non-hormonal male methods. OTC oral contraceptives (Opill, norgestrel) represent a landmark in US access.',
    },
  },
  media: [],
  citations: [
    { id: 'cdc-us-mec-2024', type: 'article', title: 'US Medical Eligibility Criteria for Contraceptive Use', source: 'MMWR Recommendations and Reports, CDC', authors: ['Curtis, K.M.', 'Jatlaoui, T.C.', 'Tepper, N.K.'] },
  ],
  crossReferences: [
    { targetId: 'obgyn-fertility', targetType: 'topic', relationship: 'sibling', label: 'Fertility and Infertility' },
    { targetId: 'obgyn-pcos', targetType: 'condition', relationship: 'see-also', label: 'PCOS' },
  ],
  tags: {
    systems: ['reproductive'],
    topics: ['family-planning', 'gynecology', 'preventive-care', 'pharmacology'],
    keywords: ['contraception', 'birth control', 'IUD', 'implant', 'OCP', 'LARC', 'emergency contraception', 'male contraception'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['ob-gyn'] },
  },
  createdAt: '2025-06-01',
  updatedAt: '2025-06-01',
  version: 1,
  status: 'published',
};
