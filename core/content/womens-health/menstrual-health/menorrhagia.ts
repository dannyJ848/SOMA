import { WomensHealthContent, LegacyWomensHealthContent } from '../types';

export const menorrhagia: WomensHealthContent = {
  id: 'menorrhagia',
  title: 'Menorrhagia (Heavy Menstrual Bleeding)',
  category: 'Menstrual Health',
  complexityLevels: [
    {
      level: 1,
      title: 'Understanding Heavy Periods',
      content: `Menorrhagia (men-oh-RAY-jah) is the medical term for heavy or prolonged menstrual bleeding. It's a common problem that affects many women.

**What is Heavy Bleeding?**

You might have menorrhagia if:
- You need to change your pad or tampon every hour for several hours
- You need to use double protection (pad + tampon)
- You bleed for more than 7 days
- You pass large blood clots (larger than a quarter)
- You're tired, weak, or short of breath (signs of anemia)
- Your bleeding interferes with your daily activities

**Normal vs. Heavy Bleeding:**

| Normal Period | Heavy Period (Menorrhagia) |
|---------------|---------------------------|
| Lose 2-3 tablespoons (30-40 mL) of blood | Lose 5+ tablespoons (80 mL+) of blood |
| Lasts 3-7 days | Lasts longer than 7 days |
| Change pad/tampon every 3-4 hours | Need to change every hour or more |
| Small clots sometimes | Large clots frequently |

**Common Causes:**
- Hormone imbalance
- Uterine fibroids
- Polyps (growths in the uterus)
- Problems with ovulation
- Bleeding disorders
- Certain medications (like blood thinners)
- Thyroid problems

**When to Call a Doctor:**
- You soak through a pad/tampon every hour for 2-3 hours
- You pass large clots
- You feel dizzy, weak, or very tired
- You have bleeding between periods
- Your periods suddenly become much heavier than normal

**Remember:** Heavy periods are very common and treatable. You don't have to suffer through them.`,
      keyPoints: [
        'Menorrhagia means heavy or prolonged menstrual bleeding',
        'Losing more than 80 mL of blood or bleeding >7 days is considered heavy',
        'Anemia (low iron) is a common complication',
        'Most causes are treatable'
      ],
      vocabulary: [
        { term: 'Menorrhagia', definition: 'Medical term for heavy menstrual bleeding' },
        { term: 'Fibroids', definition: 'Non-cancerous growths in the uterus' },
        { term: 'Anemia', definition: 'Condition where you lack enough healthy red blood cells' },
        { term: 'Polyps', definition: 'Growths on the lining of the uterus' }
      ],
      quiz: [
        {
          question: 'What amount of blood loss defines menorrhagia?',
          options: [
            'More than 30 mL per period',
            'More than 80 mL per period',
            'More than 150 mL per period',
            'More than 200 mL per period'
          ],
          correctAnswer: 1,
          explanation: 'Menorrhagia is defined as blood loss exceeding 80 mL per menstrual cycle, compared to the normal 30-40 mL (2-3 tablespoons).',
        },
        {
          question: 'What is a common complication of heavy menstrual bleeding?',
          options: [
            'Weight gain',
            'Anemia (iron deficiency)',
            'High blood pressure',
            'Diabetes'
          ],
          correctAnswer: 1,
          explanation: 'Anemia from iron deficiency is a very common complication of heavy menstrual bleeding. Symptoms include fatigue, weakness, pale skin, and shortness of breath.',
        }
      ]
    },
    {
      level: 2,
      title: 'Causes and Evaluation of Heavy Menstrual Bleeding',
      content: `Heavy menstrual bleeding (HMB), previously called menorrhagia, requires systematic evaluation to identify the underlying cause and guide appropriate treatment.

**Modern Terminology:**

The term "menorrhagia" has been replaced with more specific descriptions:
- **Heavy menstrual bleeding (HMB):** Excessive blood loss
- **Abnormal uterine bleeding (AUB):** Any bleeding pattern outside normal
- **Menorrhagia:** HMB at regular intervals (older term, still used)

**Causes of Heavy Menstrual Bleeding:**

**Structural Causes (Approximately 50%):**

| Condition | Description | Prevalence |
|-----------|-------------|------------|
| Uterine fibroids | Benign smooth muscle tumors | 30-40% |
| Endometrial polyps | Overgrowths of lining tissue | 10-30% |
| Adenomyosis | Endometrium in muscle wall | 10-20% |
| Archimedean uterus | Structural abnormality | <5% |

**Hormonal Causes:**
- **Anovulation:** No progesterone to stabilize lining
- **PCOS:** Irregular ovulation, androgen excess
- **Thyroid disorders:** Hypo- or hyperthyroidism
- **Perimenopause:** Irregular cycles, hormonal shifts

**Bleeding and Clotting Disorders:**
- **von Willebrand disease:** Most common (13% of HMB)
- **Platelet function disorders**
- **Hemophilia carriers**
- **Factor deficiencies**

**Medical and Iatrogenic Causes:**
- Anticoagulants (warfarin, heparin, DOACs)
- Antiplatelet agents (aspirin, clopidogrel)
- Copper IUD (can increase flow 50%)
- Chemotherapy/radiation

**Other Causes:**
- Endometrial hyperplasia
- Endometrial cancer (rare, but must rule out)
- Infection (endometritis, PID)
- Chronic medical conditions (liver, kidney disease)

**PALM-COEIN Classification System:**

**Structural (PALM):**
- **P**olyps
- **A**denomyosis
- **L**eiomyoma (fibroids)
- **M**alignancy/hyperplasia

**Non-Structural (COEIN):**
- **C**oagulopathy
- **O**vulatory dysfunction
- **E**ndometrial
- **I**atrogenic
- **N**ot yet classified

**Diagnostic Evaluation:**

**History:**
- Detailed bleeding history (duration, amount)
- Impact on quality of life
- Family history of bleeding disorders
- Medical and surgical history
- Medication review

**Physical Examination:**
- Signs of anemia (pallor, fatigue)
- Thyroid examination
- Abdominal and pelvic exam
- Signs of androgen excess

**Laboratory Tests:**
- **CBC:** Check for anemia
- **Iron studies:** Ferritin (iron stores)
- **TSH:** Thyroid function
- **Pap test:** Cervical screening
- **Bleeding studies:** If indicated (vWD testing)

**Imaging:**
- **Pelvic ultrasound:** First-line imaging
- **Saline infusion sonography:** Better visualizes cavity
- **MRI:** For complex cases

**Subjective vs. Objective Assessment:**

**Subjective Tools:**
- Pictorial Blood Loss Assessment Chart (PBAC)
- Patient-reported impact on quality of life
- Menstrual bleeding questionnaires

**Objective Measures:**
- Hemoglobin and hematocrit
- Iron studies (ferritin most sensitive)
- Ultrasound findings
- In rare cases, alkaline hematin test (measures actual blood loss)`,
      keyPoints: [
        'Heavy bleeding can result from structural, hormonal, or systemic causes',
        'PALM-COEIN classification system provides systematic categorization',
        'Bleeding disorders should be considered, especially in younger women',
        'Objective measures complement subjective assessment'
      ],
      vocabulary: [
        { term: 'AUB', definition: 'Abnormal Uterine Bleeding - any bleeding outside normal patterns' },
        { term: 'Adenomyosis', definition: 'Condition where endometrial tissue grows into uterine muscle' },
        { term: 'Ferritin', definition: 'Protein that stores iron in cells' },
        { term: 'Anovulation', definition: 'Menstrual cycle without ovulation' }
      ],
      quiz: [
        {
          question: 'What is the most common inherited bleeding disorder in women with heavy menstrual bleeding?',
          options: [
            'Hemophilia A',
            'von Willebrand disease',
            'Factor XIII deficiency',
            'Platelet storage pool disorder'
          ],
          correctAnswer: 1,
          explanation: 'von Willebrand disease is the most common inherited bleeding disorder, affecting approximately 13% of women with heavy menstrual bleeding referred for evaluation.',
        },
        {
          question: 'What does the PALM-COEIN classification system categorize?',
          options: [
            'Severity of bleeding',
            'Causes of abnormal uterine bleeding',
            'Treatment options',
            'Laboratory values'
          ],
          correctAnswer: 1,
          explanation: 'PALM-COEIN is a classification system developed by FIGO that categorizes causes of abnormal uterine bleeding into structural causes (PALM) and non-structural causes (COEIN).',
        }
      ]
    },
    {
      level: 3,
      title: 'Medical and Surgical Management',
      content: `Treatment of heavy menstrual bleeding should be individualized based on the underlying cause, patient's reproductive goals, severity of symptoms, and medical history.

**Treatment Considerations:**

Key questions in treatment planning:
- Desire for future fertility
- Severity of bleeding and anemia
- Underlying cause (if identified)
- Patient preferences and values
- Contraindications to specific therapies
- Cost and accessibility

**Medical Management:**

**First-Line Medical Treatments:**

**1. Tranexamic Acid (TXA)**
- **Mechanism:** Antifibrinolytic
- **Dose:** 1300 mg 3x daily during menses
- **Efficacy:** 30-50% reduction in blood loss
- **Advantages:** Non-hormonal, taken only during menses
- **Contraindications:** History of blood clots, thrombophilia

**2. Combined Hormonal Contraceptives (CHC)**
- **Options:** Pills, patch, ring
- **Efficacy:** 40-60% reduction in blood loss
- **Benefits:** Cycle regulation, contraceptive effect
- **Contraindications:** Migraine with aura, smoking >35, history of thrombosis
- **Special formulations:** Extended cycle to reduce frequency

**3. Levonorgestrel Intrauterine System (LNG-IUD)**
- **Dose:** 52 mg (Mirena, Liletta, others)
- **Efficacy:** 70-90% reduction, 20% amenorrhea
- **Duration:** 5-8 years depending on product
- **Benefits:** Long-acting, reversible, effective contraception
- **Side effects:** Irregular bleeding first 3-6 months

**4. Oral Progestins**
- **Options:** Norethindrone, medroxyprogesterone
- **Regimens:** Cyclic (days 5-26) or continuous
- **Efficacy:** 20-30% reduction
- **Advantages:** Minimal contraindications

**5. NSAIDs**
- **Options:** Ibuprofen, naproxen, mefenamic acid
- **Mechanism:** Reduce prostaglandin production
- **Efficacy:** 20-40% reduction in blood loss
- **Added benefit:** Pain relief

**Combination Therapy:**
- NSAIDs + TXA
- CHC + NSAIDs
- Multiple options can be combined

**Surgical Management:**

**Uterine-Sparing Procedures:**

**1. Endometrial Ablation**
- Indications: Completed childbearing, failed medical therapy
- Techniques: Thermal, radiofrequency, cryoablation, microwave
- Success rates: 70-80% satisfaction, 40-60% amenorrhea
- Contraindications: Desire future fertility, uterine cavity abnormalities

**2. Myomectomy**
- Indications: Submucosal or cavity-distorting fibroids
- Approaches:
  - Hysteroscopic (through vagina/cervix)
  - Laparoscopic (small incisions)
  - Abdominal (larger incision)
- Preserves fertility

**3. Polypectomy**
- Hysteroscopic removal of polyps
- High success rates
- Low recurrence (10-15%)

**Definitive Surgery:**

**Hysterectomy:**
- Removal of uterus (cervix may be kept or removed)
- Indications: Failed other treatments, severe symptoms, patient preference
- Approaches:
  - Vaginal: Least invasive
  - Laparoscopic: Minimally invasive
  - Robotic: Advanced laparoscopic
  - Abdominal: Most invasive, larger incision
- 100% effective for bleeding
- Permanent infertility

**Condition-Specific Approaches:**

**Bleeding Disorders:**
- TXA first-line
- Desmopressin (DDAVP) for vWD
- Factor replacement as needed
- Avoid NSAIDs (can worsen bleeding)

**Fibroids:**
- LNG-IUD (smaller fibroids)
- Myomectomy (fertility preservation)
- Uterine artery embolization (not if fertility desired)
- MRI-guided focused ultrasound

**Adenomyosis:**
- LNG-IUD first-line
- CHC (less effective)
- Uterine-sparing surgery (limited success)
- Hysterectomy (definitive)

**Ovulatory Dysfunction:**
- CHC or progestins
- Lifestyle modifications if PCOS
- Metformin if insulin resistant

**Follow-Up and Monitoring:**

**For Medical Management:**
- Reassess after 3 months
- Repeat CBC if initially anemic
- Monitor iron stores

**After Surgical Management:**
- Ablation: Report any return of heavy bleeding
- Hysterectomy: Standard postoperative care

**Iron Supplementation:**
- Ferrous sulfate 325 mg 2-3x daily
- Consider IV iron if severe anemia or malabsorption
- Continue until ferritin normalizes`,
      keyPoints: [
        'LNG-IUD is most effective medical treatment (70-90% reduction)',
        'Tranexamic acid is effective non-hormonal option',
        'Surgical options range from uterine-sparing to definitive',
        'Treatment choice depends on fertility desires and underlying cause'
      ],
      vocabulary: [
        { term: 'Antifibrinolytic', definition: 'Medication that prevents breakdown of blood clots' },
        { term: 'Hysteroscopic', definition: 'Procedure using a scope to view inside uterus' },
        { term: 'Myomectomy', definition: 'Surgical removal of fibroids while preserving uterus' },
        { term: 'Uterine Artery Embolization', definition: 'Procedure that blocks blood flow to fibroids' }
      ],
      quiz: [
        {
          question: 'What is the most effective medical treatment for heavy menstrual bleeding?',
          options: [
            'NSAIDs',
            'Levonorgestrel IUD',
            'Oral progestins',
            'Combined oral contraceptives'
          ],
          correctAnswer: 1,
          explanation: 'The levonorgestrel intrauterine system is the most effective medical treatment, reducing bleeding by 70-90% and causing amenorrhea in approximately 20% of users.',
        },
        {
          question: 'What is the primary contraindication for endometrial ablation?',
          options: [
            'Previous cesarean section',
            'Desire for future fertility',
            'History of PCOS',
            'Allergy to anesthesia'
          ],
          correctAnswer: 1,
          explanation: 'Endometrial ablation is contraindicated for women who desire future fertility, as it significantly impairs the ability to become pregnant and increases the risk of complications if pregnancy occurs.',
        }
      ]
    },
    {
      level: 4,
      title: 'Advanced Management and Special Considerations',
      content: `Complex cases of heavy menstrual bleeding require nuanced understanding of coagulation disorders, pharmacogenomics, and individualized treatment strategies.

**Bleeding Disorders in HMB:**

**von Willebrand Disease (vWD):**
- Most common inherited bleeding disorder (1% population)
- Types: Type 1 (quantitative, 70%), Type 2 (qualitative, 25%), Type 3 (severe, 5%)
- Diagnosis: vWF antigen, vWF activity, Factor VIII
- Treatment: TXA first-line, DDAVP for Type 1, vWF concentrate for Type 3

**Platelet Function Disorders:**
- Storage pool disorders
- Receptor abnormalities
- Aspirin/NSAID-induced
- Diagnosis: Platelet function assay

**Factor Deficiencies:**
- Factor XI deficiency (Ashkenazi Jews)
- Factor VII deficiency
- Rare factor deficiencies

**Approach to Suspected Bleeding Disorder:**

1. **Screening questions:**
   - Excessive bleeding with dental work?
   - Bruising without trauma?
   - Family history of bleeding issues?
   - Postpartum hemorrhage?

2. **Initial lab workup:**
   - CBC with platelet count
   - PT/INR
   - aPTT
   - vWF panel if indicated

3. **Hematology consultation** for abnormal results

**Pharmacologic Considerations:**

**Tranexamic Acid Details:**
- Mechanism: competitively inhibits plasminogen activation
- Dose: 1300 mg orally three times daily during menses
- Maximum duration: 5 days per cycle
- Contraindications: Active thrombosis, thrombophilia
- Caution: Combined with hormonal contraception

**Hormonal Therapy Considerations:**

**Contraceptive Selection in Bleeding Disorders:**
- Avoid estrogen-containing methods with certain factor deficiencies
- Progestin-only methods generally safer
- IUDs don't affect coagulation
- Risk-benefit assessment crucial

**Estrogen-containing methods:**
- Increase thrombotic risk 3-5 fold
- Contraindicated with history of VTE
- Caution in known thrombophilia
- May be used with anticoagulation in selected cases

**Emerging Medical Therapies:**

**Selective Progesterone Receptor Modulators (SPRMs):**
- Ulipristal acetate (liver toxicity concerns limit use)
- Vilaprisan (in development)
- Telapristone (in development)

**GnRH Antagonists:**
- Elagolix (Oriahnn)
- Relugolix combination therapy (Myfembree)
- Short-term use due to bone loss

**Special Populations:**

**Adolescents with HMB:**
- Higher likelihood of bleeding disorder (~20%)
- vWD most common
- PCOS also common
- Treatment: TXA, NSAIDs, CHC
- Avoid LNG-IUD as first choice (nulliparity)

**Perimenopausal Women:**
- Rule out endometrial hyperplasia/cancer
- Consider endometrial sampling if risk factors
- LNG-IUD also provides endometrial protection
- Transition to menopause considerations

**Women with Bleeding Disorders on Anticoagulation:**
- Factor V Leiden, Prothrombin gene mutation
- Antiphospholipid syndrome
- Mechanical heart valves
- Combine TXA with other therapies
- Hematology co-management

**Obesity and HMB:**
- Higher estrogen production
- Increased risk of endometrial hyperplasia
- May mask bleeding patterns
- LNG-IUD highly effective

**Iron Management:**

**Iron Deficiency Assessment:**
- CBC may miss early deficiency
- Ferritin <30 ng/mL = deficient
- Iron studies when ferritin equivocal

**Iron Replacement:**
| Route | Indication | Dose |
|-------|------------|------|
| Oral | Mild deficiency | Ferrous sulfate 325mg 2-3x daily |
| IV | Severe anemia, malabsorption | Various preparations |
| IM | Rarely used | Historical |

**IV Iron Formulations:**
- Iron sucrose (multiple doses)
- Iron dextran (single dose, anaphylaxis risk)
- Ferric carboxymaltose (large single dose)
- Iron isomaltoside (large single dose)

**Surgical Decision-Making:**

**Endometrial Ablation vs. Hysterectomy:**
- Success rates: Ablation 70-80%, Hysterectomy ~100%
- Complications: Hysterectomy higher
- Recovery: Ablation days, Hysterectomy weeks
- Cost: Ablation significantly less
- Satisfaction: Both high when appropriate candidates selected

**Predictors of Ablation Failure:**
- Large uterine cavity (>10 cm)
- Prior ablation
- Significant submucosal fibroids
- Adenomyosis
- Age <40

**Managing Failed Ablation:**
- Repeat ablation (lower success)
- Hysterectomy (definitive)
- LNG-IUD (may help some)`,
      keyPoints: [
        'Bleeding disorders should be ruled out in all women with HMB',
        'Tranexamic acid is first-line non-hormonal treatment',
        'IV iron may be necessary for severe iron deficiency',
        'Ablation success depends on careful patient selection'
      ],
      vocabulary: [
        { term: 'VTE', definition: 'Venous thromboembolism - blood clots in veins' },
        { term: 'Thrombophilia', definition: 'Increased tendency to develop blood clots' },
        { term: 'IV Iron', definition: 'Intravenous iron supplementation' },
        { term: 'SPRM', definition: 'Selective Progesterone Receptor Modulator' }
      ],
      quiz: [
        {
          question: 'What is the approximate prevalence of bleeding disorders in adolescents with heavy menstrual bleeding?',
          options: [
            '5%',
            '20%',
            '40%',
            '60%'
          ],
          correctAnswer: 1,
          explanation: 'Approximately 20% of adolescents with heavy menstrual bleeding have an underlying bleeding disorder, most commonly von Willebrand disease. This is much higher than in the general adult population.',
        },
        {
          question: 'What ferritin level indicates iron deficiency?',
          options: [
            '<50 ng/mL',
            '<30 ng/mL',
            '<10 ng/mL',
            '<100 ng/mL'
          ],
          correctAnswer: 1,
          explanation: 'A ferritin level below 30 ng/mL indicates iron deficiency. CBC alone may miss early iron deficiency, making ferritin a more sensitive marker.',
        }
      ]
    },
    {
      level: 5,
      title: 'Pathophysiology and Emerging Therapies',
      content: `Heavy menstrual bleeding involves complex dysregulation of local uterine hemostasis, systemic coagulation factors, and angiogenic pathways. Understanding these mechanisms guides targeted therapy development.

**Pathophysiology of HMB:**

**Local Uterine Factors:**

**Endometrial Angiogenesis:**
- VEGF overexpression in HMB
- Increased microvessel density
- Abnormal vessel architecture
- Enhanced permeability

**Fibrinolytic Activity:**
- Increased tissue-type plasminogen activator (tPA)
- Decreased plasminogen activator inhibitor (PAI)
- Enhanced local fibrinolysis
- Impaired clot stability

**Prostaglandin Imbalance:**
- Increased PGE2 (vasodilatory, anti-platelet)
- Decreased PGF2α (vasoconstrictive, pro-platelet)
- Result: Poor platelet aggregation and vasoconstriction

**Matrix Metalloproteinases (MMPs):**
- MMP-1, -3, -9 elevated
- Enhanced tissue breakdown
- Increased endometrial shedding

**Systemic Factors:**

**Primary Hemostasis:**
- Platelet adhesion and aggregation
- von Willebrand factor bridging
- Glycoprotein IIb/IIIa interactions

**Secondary Hemostasis:**
- Coagulation cascade activation
- Fibrin cross-linking (Factor XIII)
- Feedback inhibition mechanisms

**Fibrinolysis:**
- tPA and urokinase activity
- Plasmin generation
- Fibrin degradation products

**Gene Expression and Signaling:**

**Estrogen Signaling:**
- ERα and ERβ differential expression
- Genomic vs. non-genomic pathways
- Crosstalk with growth factor pathways
- Epigenetic modifications

**Progesterone Resistance:**
- PR-A:PR-B ratio alterations
- Reduced receptor sensitivity
- Impaired decidualization
- Increased matrix metalloproteinases

**Inflammatory Pathways:**
- NF-κB activation
- Cytokine production (IL-6, IL-8, TNF-α)
- Leukocyte infiltration
- Oxidative stress

**Biomarkers and Diagnostics:**

**Potential Biomarkers:**
- Circulating endothelial cells
- VEGF levels
- Microparticles
- Inflammatory markers

**Novel Diagnostic Approaches:**
- Point-of-care ultrasound
- Menstrual blood collection devices
- Mobile health apps for quantification
- At-home hemoglobin testing

**Emerging Therapeutic Approaches:**

**Targeted Anti-Angiogenic Therapy:**
- Anti-VEGF compounds
- Tyrosine kinase inhibitors
- Research phase for HMB

**MMP Inhibitors:**
- Doxycycline (non-specific MMP inhibition)
- Specific MMP inhibitors in development

**Inflammatory Modulation:**
- NF-κB inhibitors
- Cytokine blockers
- Antioxidant therapies

**Novel Drug Delivery:**
- Local intrauterine drug delivery
- Nanoparticle-based systems
- Sustained-release formulations
- Vaginal rings with multiple agents

**Precision Medicine Approaches:**

**Pharmacogenomics:**
- CYP450 variants affecting drug metabolism
- Estrogen receptor polymorphisms
- Individualized drug selection based on genotype

**Predictive Testing:**
- Genetic risk for bleeding disorders
- Fibroid subtype prediction
- Treatment response prediction

**Specialized Surgical Techniques:**

**Minimally Invasive Hysterectomy:**
- Natural orifice surgery (NOTES)
- Mini-laparoscopic approaches
- Robotic advances

**Fibroid-Specific Procedures:**
- High-intensity focused ultrasound (HIFU)
- Radiofrequency ablation (Acessa)
- Laparoscopic ultrasound-guided ablation

**Fertility Considerations in Advanced Management:**

**Ovarian Reserve Preservation:**
- AMH and antral follicle count monitoring
- Fertility-sparing myomectomy techniques
- GnRH antagonist use for surgical planning

**Pregnancy After HMB Treatment:**
- Post-ablation pregnancy risks
- Myomectomy and uterine rupture risk
- Cesarean delivery planning

**Quality of Life and Economic Impact:**

**Economic Burden:**
- Direct healthcare costs
- Work productivity losses
- Educational impact
- Healthcare resource utilization

**Quality of Life Metrics:**
- Menstrual bleeding-specific scales
- General QOL instruments
- Sexual health assessment
- Mental health screening

**Future Research Directions:**
- Microbiome-gut-uterine axis
- Stem cell therapies for endometrial regeneration
- Gene therapy for bleeding disorders
- Personalized medicine protocols
- Non-hormonal male contraceptive impact on female bleeding patterns`,
      keyPoints: [
        'Local uterine factors include angiogenesis, fibrinolysis, and prostaglandin imbalance',
        'MMPs and inflammatory pathways contribute to tissue breakdown',
        'Targeted therapies against VEGF and MMPs are in development',
        'Precision medicine approaches may optimize treatment selection'
      ],
      vocabulary: [
        { term: 'VEGF', definition: 'Vascular Endothelial Growth Factor - promotes blood vessel formation' },
        { term: 'tPA', definition: 'Tissue-type Plasminogen Activator - enzyme that dissolves clots' },
        { term: 'MMPs', definition: 'Matrix Metalloproteinases - enzymes that break down tissue' },
        { term: 'Pharmacogenomics', definition: 'Study of how genes affect drug response' }
      ],
      quiz: [
        {
          question: 'What is the prostaglandin imbalance pattern observed in heavy menstrual bleeding?',
          options: [
          'Increased PGF2α, decreased PGE2',
          'Increased PGE2, decreased PGF2α',
          'Both prostaglandins decreased',
          'Both prostaglandins increased equally'
          ],
          correctAnswer: 1,
          explanation: 'In HMB, there is typically increased PGE2 (a vasodilator that inhibits platelet aggregation) and decreased PGF2α (a vasoconstrictor that promotes platelet aggregation), resulting in impaired hemostasis.',
        },
        {
          question: 'What is the role of matrix metalloproteinases (MMPs) in HMB pathophysiology?',
          options: [
          'They promote blood clot formation',
          'They enhance tissue breakdown and endometrial shedding',
          'They inhibit angiogenesis',
          'They increase progesterone receptor expression'
          ],
          correctAnswer: 1,
          explanation: 'MMPs, particularly MMP-1, -3, and -9, are elevated in HMB and enhance the breakdown of endometrial tissue and supporting matrix, contributing to excessive menstrual bleeding.',
        }
      ]
    }
  ],
  relatedTopics: [
    'menstrual-disorders',
    'fibroids',
    'endometriosis',
    'anemia'
  ],
  lastUpdated: '2025-01-25',
  references: [
    'FIGO Menstrual Disorders Classification System',
    'ACOG Practice Bulletin No. 220',
    'Cochrane Reviews on Heavy Menstrual Bleeding treatments'
  ]
};
