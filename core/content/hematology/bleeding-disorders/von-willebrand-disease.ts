import { EducationalContent } from '../types';

export const vonWillebrandDisease: EducationalContent = {
  id: 'hematology-von-willebrand-disease',
  type: 'condition',
  name: 'von Willebrand Disease',
  alternateNames: ['vWD', 'VWD', 'Pseudohemophilia', 'Angiohemophilia', 'von Willebrand Factor Deficiency'],
  levels: {
    1: {
      level: 1,
      summary: 'von Willebrand disease is the most common inherited bleeding disorder, caused by a problem with a protein that helps blood clot properly.',
      explanation: `von Willebrand disease is the most common bleeding disorder people are born with. It happens when you don't have enough von Willebrand factor (vWF), or when it doesn't work properly.

**What does vWF do?**
von Willebrand factor is a protein in your blood that does two important jobs:
1. It helps platelets (tiny blood cells) stick together to plug holes in blood vessels
2. It carries and protects another clotting protein called factor VIII

**What are the symptoms?**
People with vWD may experience:
- Frequent or long-lasting nosebleeds
- Easy bruising
- Heavy or prolonged menstrual periods in women
- Bleeding gums
- Longer than normal bleeding after cuts, surgery, or dental work

**Who gets it?**
- It affects both males and females equally
- It's usually inherited (passed from parents to children)
- About 1 in 100 people may have some form of vWD

**Types of vWD:**
- Type 1 (most common): You have less vWF than normal
- Type 2: Your vWF doesn't work properly
- Type 3 (rarest): You have very little or no vWF

**Treatment:**
Many people with mild vWD may not need regular treatment. When treatment is needed, doctors may use:
- A medicine called DDAVP that helps release more vWF from your body
- Products that replace the missing vWF
- Medications that help clots stay in place

With proper management, most people with vWD live normal, active lives.`,
      keyTerms: [
        { term: 'von Willebrand factor', definition: 'A protein that helps platelets stick together and carries factor VIII in the blood' },
        { term: 'Platelets', definition: 'Tiny cell fragments in blood that help form clots to stop bleeding' },
        { term: 'Factor VIII', definition: 'Another clotting protein that works with vWF to stop bleeding' },
        { term: 'Inherited', definition: 'Passed down from parents to children through genes' },
        { term: 'DDAVP', definition: 'A medication that helps release stored vWF from the body' },
      ],
      analogies: [
        'vWF is like glue that helps blood cells stick together to plug holes in blood vessels',
        'Think of vWF as a delivery truck that carries and protects factor VIII where it is needed',
        'Platelets are like repair workers, and vWF is the tool belt that helps them do their job',
      ],
      examples: [
        'A teenage girl discovers she has type 1 vWD after experiencing very heavy periods',
        'A child who bruises easily and has frequent nosebleeds is diagnosed with vWD',
        'A man learns he has vWD after prolonged bleeding following dental surgery',
      ],
    },
    2: {
      level: 2,
      summary: 'von Willebrand disease is the most common inherited bleeding disorder, caused by quantitative (types 1 and 3) or qualitative (type 2) defects in von Willebrand factor, affecting both platelet adhesion and factor VIII stability.',
      explanation: `von Willebrand disease (vWD) affects approximately 1% of the population and results from deficiency or dysfunction of von Willebrand factor (vWF).

**Function of vWF:**
1. **Primary hemostasis**: vWF mediates platelet adhesion to damaged blood vessel walls
2. **Secondary hemostasis**: vWF stabilizes factor VIII in circulation, extending its half-life

**Classification:**

*Type 1 (70-80% of cases):*
- Partial quantitative deficiency
- vWF levels reduced but protein functions normally
- Usually mild to moderate bleeding

*Type 2 (15-20% of cases):*
Qualitative defects with four subtypes:
- **Type 2A**: Decreased platelet-binding function, loss of high molecular weight multimers
- **Type 2B**: Increased platelet binding, causes spontaneous platelet clumping (gain-of-function)
- **Type 2M**: Decreased platelet binding despite normal multimers
- **Type 2N**: Decreased factor VIII binding (may be confused with hemophilia A)

*Type 3 (rare, <5%):*
- Near-complete vWF deficiency
- Autosomal recessive inheritance
- Severe bleeding similar to hemophilia

**Clinical Presentation:**
- Mucocutaneous bleeding (epistaxis, menorrhagia, gingival bleeding)
- Easy bruising
- Prolonged bleeding with surgery or dental procedures
- GI bleeding (especially with 2A due to angiodysplasia)

**Diagnosis:**
- Screening: aPTT may be prolonged (due to low factor VIII)
- vWD panel: vWF antigen (amount), vWF activity (ristocetin cofactor activity), factor VIII level
- vWF activity/antigen ratio helps identify type 2 (ratio <0.7 suggests qualitative defect)
- Multimer analysis for type 2 subtyping

**Important considerations:**
- vWF levels vary with blood type (15-30% lower in type O blood)
- vWF is an acute phase reactant (increases with stress, inflammation, pregnancy)
- Repeat testing often needed to confirm diagnosis`,
      keyTerms: [
        { term: 'vWF antigen', definition: 'Test measuring the amount of von Willebrand factor protein present' },
        { term: 'Ristocetin cofactor activity', definition: 'Test measuring how well vWF helps platelets clump together' },
        { term: 'Multimers', definition: 'Different sized forms of vWF protein; larger multimers are most effective' },
        { term: 'Mucocutaneous bleeding', definition: 'Bleeding from skin and mucous membranes like nose, gums, and GI tract' },
        { term: 'Menorrhagia', definition: 'Abnormally heavy or prolonged menstrual bleeding' },
        { term: 'Acute phase reactant', definition: 'A substance whose levels increase in response to inflammation or stress' },
      ],
      analogies: [
        'vWF multimers are like different sized bandages - the biggest ones work best for large wounds',
        'Type 1 is like having fewer tools in the toolbox; Type 2 is like having tools that do not work properly',
        'The vWF activity/antigen ratio is like comparing how many workers you have vs. how much work they actually do',
      ],
      examples: [
        'A 16-year-old with type 2A vWD has prolonged bleeding after wisdom teeth removal',
        'A patient with type 3 vWD experiences joint bleeding similar to hemophilia',
        'A woman with type O blood has borderline low vWF levels that drop further during illness',
      ],
    },
    3: {
      level: 3,
      summary: 'vWD diagnosis requires specialized testing with a complete vWD panel, multimer analysis for type 2 classification, and individualized treatment based on type, bleeding severity, and clinical context.',
      explanation: `**Diagnostic Algorithm:**

*Initial Testing:*
- CBC with platelet count (may be low in type 2B)
- aPTT (may be prolonged)
- vWD panel: vWF antigen, vWF activity, factor VIII

*Interpretation:*
- All low proportionally: Type 1
- Activity/antigen ratio <0.7: Type 2 (qualitative defect)
- Factor VIII disproportionately low vs. vWF: Consider type 2N
- Very low/undetectable vWF: Type 3

*Additional Testing:*
- Multimer analysis: Identifies loss of high molecular weight multimers (type 2A)
- Ristocetin-induced platelet agglutination (RIPA): Low-dose aggregation in type 2B
- vWF:Factor VIII binding assay: Decreased in type 2N
- Genetic testing: Confirms diagnosis and aids family counseling

**Treatment Options:**

*DDAVP (Desmopressin):*
- Releases endogenous vWF from endothelial Weibel-Palade bodies
- Effective for type 1 and some type 2 variants
- Administration: IV (0.3 mcg/kg) or intranasal (150-300 mcg)
- Peak effect at 30-90 minutes
- Tachyphylaxis occurs with repeated dosing (depletes stores)
- **Contraindicated in type 2B** (worsens thrombocytopenia)

*vWF Concentrates:*
- Plasma-derived products containing vWF +/- factor VIII
- Humate-P, Alphanate, Wilate
- Used when DDAVP contraindicated or ineffective
- Essential for types 2B, 2N, and 3
- Dosing: 40-60 IU/kg for major procedures

*Recombinant vWF (Vonvendi):*
- Pure vWF without factor VIII
- May reduce thrombotic risk in situations requiring high factor VIII
- Endogenous factor VIII rises after vWF administration

*Antifibrinolytics:*
- Tranexamic acid, aminocaproic acid
- Prevent clot breakdown
- Useful adjunct for mucosal bleeding
- Avoid in urologic procedures (clot retention risk)

**DDAVP Trial:**
- Administer test dose before relying on it for procedures
- Measure vWF and factor VIII at baseline, 1 hour, and 4 hours
- Adequate response: 3-5x increase in vWF activity and levels >50%

**Perioperative Management:**
- Baseline vWD panel
- DDAVP or vWF concentrate 30-60 minutes pre-procedure
- Target vWF activity: >50% for 3-5 days (minor), >50% for 7-14 days (major)
- Antifibrinolytics as adjunct`,
      keyTerms: [
        { term: 'DDAVP', definition: 'Desmopressin; synthetic vasopressin analog that releases stored vWF from endothelial cells' },
        { term: 'Weibel-Palade bodies', definition: 'Storage granules in endothelial cells containing vWF' },
        { term: 'vWF concentrate', definition: 'Purified vWF product for replacement therapy in vWD' },
        { term: 'Antifibrinolytic', definition: 'Medication that prevents breakdown of blood clots (e.g., tranexamic acid)' },
        { term: 'Tachyphylaxis', definition: 'Decreased response to repeated doses of medication' },
        { term: 'RIPA', definition: 'Ristocetin-induced platelet aggregation; test identifying type 2B vWD' },
      ],
      clinicalNotes: 'vWF levels fluctuate significantly - repeat testing if initial results borderline. Type O blood has 20-30% lower vWF levels physiologically. Always test vWF activity alongside antigen to calculate ratio. For surgery: target vWF activity >50% for minor procedures, >100% initially for major procedures. DDAVP contraindicated in type 2B and in patients with cardiovascular disease or hyponatremia risk.',
    },
    4: {
      level: 4,
      summary: 'Clinical management of vWD requires accurate phenotypic and genotypic classification, tailored therapeutic strategies, and specialized approaches for surgical prophylaxis, women\'s health issues, and complex clinical scenarios.',
      explanation: `**Advanced Diagnostics:**

*Phenotypic Classification Refinement:*
- vWF:GPIbM assay: Alternative to ristocetin cofactor, may have advantages
- vWF:CB (collagen binding): Assesses another functional aspect
- vWF propeptide: Elevated ratio (propeptide/antigen) suggests increased clearance
- Low vWF diagnosis: Levels 30-50 IU/dL with bleeding symptoms but not meeting vWD criteria

*Molecular Genetics:*
- VWF gene: Large (178 kb), complex with pseudogene complicating analysis
- Type 1: Often missense mutations affecting protein stability
- Type 2A: Mutations affecting multimerization
- Type 2B: Gain-of-function mutations in GPIb binding domain
- Type 2M: Mutations reducing GPIb binding without affecting multimers
- Type 2N: Mutations in factor VIII binding domain (D' and D3 domains)
- Type 3: Null alleles (large deletions, nonsense mutations)

**Treatment Protocols:**

*Product Selection:*
- DDAVP: Type 1, type 2A (if responsive), type 2M
- vWF/FVIII concentrates: Types 2B, 2N, 3; DDAVP failures
- Recombinant vWF: When avoiding FVIII accumulation desired

*Pharmacokinetic Considerations:*
- vWF half-life: ~12 hours (shorter in type 1 variant Vicenza)
- Factor VIII rises after vWF infusion (stabilization)
- In type 3 and 2N, factor VIII may rise excessively causing thrombosis risk

*Perioperative Protocols:*
| Procedure Type | Target vWF:RCo | Duration |
|----------------|----------------|----------|
| Minor surgery | >50 IU/dL | 3-5 days |
| Major surgery | >100 IU/dL initially, then >50 | 7-14 days |
| Dental procedures | >50 IU/dL | 1-3 days |

**Special Populations:**

*Women with vWD:*
- Heavy menstrual bleeding in ~90% of affected women
- Treatment options:
  - Tranexamic acid during menses
  - Combined hormonal contraceptives (raise vWF)
  - Levonorgestrel IUD (local effect)
  - DDAVP for acute bleeding
  - vWF concentrate for severe bleeding

*Pregnancy Management:*
- vWF and factor VIII rise naturally during pregnancy
- Often adequate for delivery by third trimester
- Check levels at 28-34 weeks
- Target vWF >50 IU/dL for delivery
- vWF concentrate if levels inadequate
- Postpartum hemorrhage risk highest 3-5 days post-delivery (levels drop rapidly)
- Consider antifibrinolytics for 2 weeks postpartum

*Inhibitor Development:*
- Occurs in ~5-10% of type 3 patients
- Antibodies neutralize infused vWF
- May cause anaphylaxis with subsequent infusions
- Management: immune tolerance, bypassing agents`,
      keyTerms: [
        { term: 'vWF propeptide', definition: 'Cleaved portion of vWF precursor; elevated ratio suggests increased clearance' },
        { term: 'Low vWF', definition: 'Diagnostic category for vWF 30-50 IU/dL with bleeding symptoms' },
        { term: 'Vicenza variant', definition: 'Type 1 vWD with accelerated vWF clearance and shorter half-life' },
        { term: 'Levonorgestrel IUD', definition: 'Hormonal intrauterine device effective for menorrhagia in vWD' },
        { term: 'Inhibitor', definition: 'Antibody against vWF that develops in some type 3 patients after treatment' },
      ],
      clinicalNotes: 'Type 2B can cause thrombocytopenia - check platelet count. Monitor factor VIII levels during prolonged vWF replacement - excessive levels may increase thrombotic risk. Women with vWD commonly present first with menorrhagia - consider vWD in workup of heavy periods, especially if bleeding score elevated. Postpartum surveillance critical as vWF drops rapidly after delivery. Document DDAVP response testing before relying on it for procedures. Genetic testing increasingly valuable for family counseling and distinguishing vWD subtypes.',
    },
    5: {
      level: 5,
      summary: 'Expert vWD management integrates precise molecular diagnosis, individualized pharmacokinetic-guided therapy, complex perioperative planning, management of acquired forms, and multidisciplinary care for specialized populations.',
      explanation: `**Molecular Diagnostics and Genotype-Phenotype Correlations:**

*VWF Mutations:*
- >750 reported mutations
- Type 1: Heterogeneous; dominant-negative, clearance mutations, or haploinsufficiency
- Type 2A group 1: Defective intracellular multimerization
- Type 2A group 2: Increased ADAMTS13 susceptibility
- Type 2B: Exon 28 mutations (R1306W, R1308C, R1341Q most common)
- Type 2N: Factor VIII binding site (R816W, R854Q common)
- Type 3: Often compound heterozygotes with null alleles

*Genetic Testing Applications:*
- Confirms diagnosis in borderline cases
- Distinguishes type 2N from mild hemophilia A
- Predicts response to DDAVP
- Facilitates prenatal diagnosis and family counseling
- Identifies carriers in type 3 families

**Acquired von Willebrand Disease:**

*Mechanisms:*
- Mechanical destruction: Aortic stenosis (Heyde syndrome), LVAD, ECMO
- Antibody-mediated: Autoimmune, lymphoproliferative disorders
- Increased clearance: Hypothyroidism, myeloproliferative neoplasms
- Adsorption: Monoclonal gammopathies, Wilms tumor

*Diagnosis:*
- New onset bleeding symptoms
- Low vWF in absence of family history
- Loss of high molecular weight multimers (mechanical/AVWS)
- Presence of anti-vWF antibodies (immune-mediated)

*Management:*
- Treat underlying condition (valve replacement cures Heyde syndrome)
- vWF concentrates (may have shortened half-life)
- IVIG for immune-mediated forms
- Recombinant factor VIIa for refractory cases

**Complex Clinical Scenarios:**

*Pharmacokinetic-Guided Dosing:*
- Individual half-life determination for surgical coverage
- Continuous infusion vs. intermittent bolus for major surgery
- Population PK models emerging

*Perioperative Management Protocol:*
1. Preoperative: Complete vWD workup, DDAVP trial if applicable
2. Day of surgery: Administer treatment 30-60 min pre-procedure
3. Verify levels achieved target before incision
4. Post-operative: Daily levels initially, then based on procedure/response
5. Target maintenance: Major surgery 50-80 IU/dL x 7-14 days

*Emergency/Trauma:*
- Empiric vWF concentrate if known vWD patient
- Initial dose 50-60 IU/kg
- Monitor and maintain levels >50 IU/dL
- Consider factor VIIa if massive hemorrhage

**Laboratory Monitoring Pearls:**
- vWF is labile - proper sample handling essential
- Refrigerated samples lose large multimers
- Time-sensitive processing for accurate results
- Factor VIII may not track with vWF during treatment

**Emerging Therapies:**
- Gene therapy: AAV-mediated VWF gene transfer under investigation
- Novel vWF concentrates: Improved half-life products
- Bioengineered vWF: Enhanced stability profiles`,
      keyTerms: [
        { term: 'Acquired vWD (AVWS)', definition: 'von Willebrand disease developing later in life due to underlying condition' },
        { term: 'Heyde syndrome', definition: 'Acquired vWD in aortic stenosis causing GI bleeding from angiodysplasia' },
        { term: 'ADAMTS13', definition: 'Enzyme that cleaves vWF multimers; increased susceptibility causes type 2A' },
        { term: 'Haploinsufficiency', definition: 'Single functional gene copy insufficient for normal protein levels' },
        { term: 'Population PK', definition: 'Pharmacokinetic modeling using population data to predict individual dosing' },
      ],
      clinicalNotes: `**Diagnostic Approach:**
- Molecular diagnosis confirms type and aids genetic counseling
- Acquired vWD should be suspected in new-onset bleeding without family history
- Multimer analysis processed immediately - samples cannot be batched

**Treatment Protocols:**
- Type 2N heterozygotes may have normal vWF but low factor VIII - important distinction from hemophilia A carriers
- Major surgery: maintain vWF >100 IU/dL initially, then >50% for 7-10 days
- Monitor factor VIII during prolonged replacement - can rise excessively causing thrombosis
- Dental procedures may only need antifibrinolytics in mild cases

**Special Populations:**
- Women planning pregnancy should have complete vWD assessment
- Neuraxial anesthesia requires vWF/FVIII levels >50 IU/dL
- Document all procedures and response to treatment for future reference
- Transition planning for adolescents moving to adult care

**Quality Indicators:**
- Annual comprehensive visit at hemophilia treatment center
- Documented DDAVP trial results
- Genetic testing completed
- Bleeding assessment tool scores tracked`,
    },
  },
  media: [
    {
      id: 'vwd-multimer-analysis',
      type: 'diagram',
      filename: 'vwd-multimer-patterns.svg',
      title: 'vWD Multimer Patterns by Type',
      description: 'Comparison of multimer patterns in different vWD types',
    },
    {
      id: 'vwd-diagnostic-algorithm',
      type: 'diagram',
      filename: 'vwd-diagnosis-algorithm.svg',
      title: 'vWD Diagnostic Algorithm',
      description: 'Step-by-step approach to vWD diagnosis and classification',
    },
  ],
  citations: [
    'James PD, Connell NT, Ameer B, et al. ASH ISTH NHF WFH 2021 guidelines on the diagnosis of von Willebrand disease. Blood Adv. 2021;5(1):280-300.',
    'Connell NT, Flood VH, Brber A, et al. ASH ISTH NHF WFH 2021 guidelines on the management of von Willebrand disease. Blood Adv. 2021;5(1):301-325.',
    'Leebeek FWG, Eikenboom JCJ. Von Willebrand\'s Disease. N Engl J Med. 2016;375(21):2067-2080.',
    'James AH, Kouides PA, Abdul-Kadir R, et al. Von Willebrand disease and other bleeding disorders in women: consensus on diagnosis and management. Am J Obstet Gynecol. 2009;201(1):12.e1-12.e8.',
  ],
  crossReferences: [
    'hematology-hemophilia',
    'hematology-platelet-disorders',
    'hematology-coagulation-studies',
  ],
  tags: {
    systems: ['hematology'],
    topics: ['bleeding disorders', 'von Willebrand disease', 'coagulation', 'inherited disease', 'women\'s health'],
    keywords: ['vWD', 'von Willebrand', 'vWF', 'bleeding', 'DDAVP', 'menorrhagia', 'factor VIII'],
    clinicalRelevance: 'high',
  },
  createdAt: '2026-01-28T00:00:00.000Z',
  updatedAt: '2026-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};

export default vonWillebrandDisease;
