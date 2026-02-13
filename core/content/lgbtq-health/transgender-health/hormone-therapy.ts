import { EducationalContent } from '../../types';

export const hormoneTherapy: EducationalContent = {
  id: 'hormone-therapy',
  type: 'concept',
  name: 'Gender-Affirming Hormone Therapy',
  alternateNames: ['Hormone Replacement Therapy', 'Cross-Sex Hormone Therapy', 'GAHT'],
  levels: {
    1: {
      level: 1,
      summary: 'Hormone therapy helps transgender people develop physical characteristics that match their gender identity using medications like estrogen or testosterone.',
      explanation: `Gender-affirming hormone therapy uses hormones to help transgender people\'s bodies develop characteristics that match their gender identity.

**What is Hormone Therapy:**
Hormone therapy involves taking medications that change how the body looks and functions. For transgender people, this helps their appearance match who they are inside.

**Types of Hormone Therapy:**

**Feminizing Hormones (for transgender women and some non-binary people):**
- Estrogen: The main female hormone that develops breasts, softer skin, and changes fat distribution
- Anti-androgens: Block testosterone effects like facial hair and deep voice
- Taken as pills, patches, or injections

**Masculinizing Hormones (for transgender men and some non-binary people):**
- Testosterone: The main male hormone that deepens voice, grows facial hair, and builds muscle
- Taken as injections or gel applied to skin

**What Changes to Expect:**

**Feminizing Changes:**
- Breast growth (takes 2-3 years to complete)
- Softer skin and less body hair
- Fat moves to hips and thighs
- Reduced muscle strength
- Emotional changes
- Sexual changes

**Masculinizing Changes:**
- Voice becomes deeper (permanent change)
- Facial and body hair growth
- More muscle and strength
- Fat moves to stomach area
- Periods stop
- Clitoral enlargement

**Timeline:**
Changes happen gradually over months and years. Most people see first changes within 3-6 months, with full effects taking 2-5 years.

**Safety and Monitoring:**
- Regular doctor visits to check blood work
- Monitoring for side effects
- Managing any health risks
- Most people take hormones for life

**Important Considerations:**
- Some changes are permanent (like voice deepening)
- Fertility may be affected
- Regular medical check-ups are important
- Hormones require a prescription from a doctor

Hormone therapy has been used safely for decades and is supported by major medical organizations.`,
      keyTerms: [
        { term: 'estrogen', definition: 'The primary female sex hormone' },
        { term: 'testosterone', definition: 'The primary male sex hormone' },
        { term: 'anti-androgen', definition: 'Medication that blocks male hormones' },
        { term: 'hormone', definition: 'A chemical messenger that controls body functions' }
      ],
      analogies: [
        'Hormone therapy is like adjusting the settings on your body to match your identity',
        'Taking hormones is like watering a plant - changes happen gradually over time'
      ],
      examples: [
        'A transgender woman takes estrogen pills daily and notices breast development after 3 months',
        'A transgender man uses testosterone gel every morning and his voice deepens over 6 months',
        'A non-binary person takes low-dose testosterone to achieve a more neutral appearance'
      ]
    },
    2: {
      level: 2,
      summary: 'Gender-affirming hormone therapy uses exogenous hormones to develop secondary sex characteristics consistent with gender identity, requiring medical supervision and ongoing monitoring.',
      explanation: `Gender-affirming hormone therapy (GAHT) is a cornerstone of medical transition for transgender individuals, using exogenous hormones to induce physical changes aligning the body with gender identity.

**Hormone Regimens:**

**Feminizing Hormone Therapy:**
Components include:
- Estrogen: Promotes breast development, fat redistribution, skin changes
- Anti-androgens: Block testosterone effects (facial hair growth, muscle mass)

**Routes of Administration:**
- Oral: estradiol tablets (most common)
- Transdermal: patches or gel (fewer clotting risks)
- Parenteral: intramuscular or subcutaneous injections

**Monitoring:**
- Target estradiol levels: 100-200 pg/mL
- Monitor liver function, lipids, prolactin
- Assess for venous thromboembolism risk

**Masculinizing Hormone Therapy:**
- Testosterone: Induces virilization effects

**Routes of Administration:**
- Intramuscular injections (weekly or biweekly)
- Subcutaneous injections
- Transdermal gel or patches (daily)

**Monitoring:**
- Target testosterone levels: 400-700 ng/dL (male reference range)
- Monitor hematocrit, lipids, liver enzymes
- Assess cardiovascular risk factors

**Expected Physical Changes:**

**Feminizing Effects:**
- Breast development (begins 3-6 months, maximum 2-3 years)
- Decreased libido and erectile function
- Redistribution of body fat (hips, thighs, buttocks)
- Decreased muscle mass and strength
- Softer, less oily skin
- Reduced body hair growth
- Emotional changes
- Testicular atrophy

**Masculinizing Effects:**
- Voice deepening (begins 3-12 months, permanent)
- Facial and body hair growth (begins 3-6 months, continues years)
- Increased muscle mass and strength
- Redistribution of body fat (abdominal)
- Cessation of menstruation (3-6 months)
- Clitoral enlargement
- Increased libido
- Possible male-pattern baldness

**Irreversible Changes:**
- Feminizing: breast growth
- Masculinizing: voice deepening, facial hair growth, clitoral enlargement, male-pattern baldness

**Fertility Considerations:**
- Hormone therapy typically impairs fertility
- Fertility preservation (sperm/egg banking) should be discussed before starting
- Cessation of hormones may restore fertility but not guaranteed
- Pregnancy possible for trans men who retain uterus/ovaries

**Long-term Management:**
- Lifelong therapy required to maintain effects
- Regular monitoring for cardiovascular, metabolic, and bone health
- Cancer screening based on organs present
- Bone density monitoring especially important`,
      keyTerms: [
        { term: 'exogenous hormones', definition: 'Hormones taken from outside the body as medication' },
        { term: 'virilization', definition: 'Development of male secondary sex characteristics' },
        { term: 'secondary sex characteristics', definition: 'Physical features distinguishing males and females but not directly involved in reproduction' },
        { term: 'transdermal', definition: 'Administration through the skin' },
        { term: 'parenteral', definition: 'Administration by injection rather than digestive tract' },
        { term: 'thromboembolism', definition: 'Blood clot formation that can travel to lungs or brain' }
      ],
      analogies: [
        'Hormone therapy is like gradually shifting the lighting in a room from one color to another',
        'The hormone level monitoring is like checking the temperature when cooking - it needs to be just right'
      ],
      examples: [
        'A patient on feminizing hormones has estradiol levels checked every 3 months and dose adjusted to 4mg daily',
        'A trans man on testosterone monitors hematocrit which rises from 42% to 50%, requiring dose adjustment',
        'A patient banks sperm before starting estrogen therapy to preserve fertility options'
      ]
    },
    3: {
      level: 3,
      summary: 'Gender-affirming hormone therapy involves evidence-based protocols for estrogen or testosterone administration with established monitoring parameters, expected timelines, and risk management strategies.',
      explanation: `Gender-affirming hormone therapy requires comprehensive medical management including appropriate patient selection, evidence-based dosing protocols, systematic monitoring, and management of potential adverse effects.

**Clinical Assessment:**

**Pre-Treatment Evaluation:**
- Confirmed diagnosis of gender dysphoria (when required by insurance/guidelines)
- Assessment of medical comorbidities and risk factors
- Discussion of expected effects, timelines, and irreversible changes
- Fertility counseling and preservation options
- Informed consent process
- Baseline laboratory evaluation

**Contraindications and Precautions:**
- Absolute: hormone-sensitive cancers, severe liver disease, thromboembolic disorders (estrogen)
- Relative: cardiovascular disease, smoking (estrogen), uncontrolled psychiatric conditions
- Risk stratification for individual patients

**Hormone Protocols:**

**Feminizing Therapy:**

**Estrogen Options:**
- Oral estradiol: 2-6 mg daily (start low, titrate up)
- Transdermal estradiol: 0.025-0.1 mg/day patch
- Injectable estradiol: 5-20 mg every 1-2 weeks

**Anti-Androgen Options:**
- Spironolactone: 100-400 mg daily (most common in US)
- Bicalutamide: 50 mg daily
- Cyproterone acetate (not available in US)
- GnRH agonists (leuprolide) - more expensive but effective

**Target Levels:**
- Estradiol: 100-200 pg/mL (premenopausal female range)
- Testosterone: <50 ng/dL

**Masculinizing Therapy:**

**Testosterone Options:**
- Injectable testosterone cypionate/enanthate: 50-100 mg weekly or 100-200 mg every 2 weeks
- Transdermal gel 1%: 25-100 mg daily
- Transdermal patch: 2.5-7.5 mg daily

**Target Levels:**
- Testosterone: 400-700 ng/dL (male reference range)
- Estradiol: <50 pg/mL

**Monitoring Protocol:**

**First Year (every 3 months):**
- Physical examination (document changes)
- Vital signs, weight
- Laboratory: estradiol/testosterone, CBC, CMP, lipids
- Feminizing: prolactin (if on spironolactone)
- Masculinizing: hematocrit/hemoglobin

**After First Year (every 6-12 months):**
- Annual comprehensive metabolic panel
- Lipid panel
- Bone density if risk factors
- Continue hormone level monitoring

**Adverse Effect Management:**

**Feminizing Therapy:**
- Venous thromboembolism: lowest risk with transdermal route
- Elevated prolactin: monitor, reduce dose if symptomatic
- Liver enzyme elevation: usually mild, monitor
- Cardiovascular risk: manage modifiable risk factors

**Masculinizing Therapy:**
- Erythrocytosis (elevated hematocrit): most common dose-limiting effect
  - If hematocrit >54%: reduce dose or switch to transdermal
  - Therapeutic phlebotomy if severe
- Acne: common, treat with standard acne therapies
- Dyslipidemia: monitor lipids, treat per guidelines
- Sleep apnea: screen for symptoms, especially with weight gain

**Long-term Considerations:**

**Cardiovascular Health:**
- Limited long-term data; monitor standard risk factors
- Estrogen may increase clot risk (lower with transdermal)
- Testosterone effects on cardiovascular risk unclear

**Bone Health:**
- Maintain adequate calcium (1200 mg/day) and vitamin D (1000 IU/day)
- Weight-bearing exercise
- Bone density screening for those with risk factors
- Particularly important if puberty was suppressed

**Cancer Screening:**
- Screen based on organs present regardless of hormone use
- Breast tissue requires screening (mammography)
- Prostate screening for retained prostate
- Cervical screening for retained cervix

**Drug Interactions:**
- Estrogen: may affect warfarin, thyroid hormone levels
- Spironolactone: potassium monitoring with ACE inhibitors
- Testosterone: potential interactions with anticoagulants
- Always review medication list comprehensively`,
      keyTerms: [
        { term: 'GnRH agonist', definition: 'Gonadotropin-releasing hormone agonist that suppresses sex hormone production' },
        { term: 'erythrocytosis', definition: 'Abnormal increase in red blood cell count' },
        { term: 'risk stratification', definition: 'Process of categorizing patients by their risk level' },
        { term: 'therapeutic phlebotomy', definition: 'Controlled blood removal to reduce hematocrit' },
        { term: 'dyslipidemia', definition: 'Abnormal levels of lipids in the blood' },
        { term: 'comprehensive metabolic panel', definition: 'Blood test measuring glucose, electrolytes, kidney and liver function' }
      ]
    },
    4: {
      level: 4,
      summary: 'Gender-affirming hormone therapy requires individualized protocols with careful monitoring for efficacy and adverse effects, informed by endocrine society guidelines and specialized clinical experience.',
      explanation: `The medical management of gender-affirming hormone therapy integrates endocrinological principles with specialized knowledge of transgender health. Evidence-based protocols emphasize patient safety, individualized care, and systematic monitoring.

**Pharmacological Considerations:**

**Estrogen Pharmacokinetics:**
Different routes have distinct absorption, metabolism, and risk profiles:
- Oral: First-pass hepatic metabolism increases clotting factor synthesis
- Transdermal: Avoids first-pass effect, lower VTE risk, preferred in smokers >35
- Injectable: Higher peak levels, variable troughs, patient convenience considerations

**Anti-Androgen Mechanisms:**
- Spironolactone: Androgen receptor antagonist with mineralocorticoid effects (potassium sparing)
- Bicalutamide: Pure androgen receptor antagonist without mineralocorticoid effects
- GnRH agonists: Suppress gonadal hormone production entirely

**Testosterone Preparations:**
- Esterified formulations (cypionate, enanthate) require hepatic cleavage
- Transdermal provides most physiologic levels but compliance variable
- Pellet implants available but less commonly used

**Clinical Monitoring:**

**Efficacy Assessment:**
- Physical examination documenting expected changes
- Patient-reported satisfaction and goal attainment
- Hormone level achievement within target ranges
- Timeline-appropriate progression of effects

**Safety Surveillance:**

**Hematologic (Masculinizing):**
- Hematocrit elevation most common dose-limiting factor
- Mechanism: testosterone stimulates erythropoietin
- Management: dose reduction, route change, phlebotomy
- Polycythemia vera must be excluded if severe

**Metabolic:**
- Lipid changes (feminizing: improvement; masculinizing: variable)
- Glucose metabolism generally unchanged or improved
- Weight changes require monitoring

**Cardiovascular:**
- Blood pressure monitoring (spironolactone lowers; testosterone may elevate)
- VTE risk stratification (estrogen route dependent)
- Smoking cessation counseling particularly important with estrogen

**Hepatic:**
- Oral estrogens: monitor transaminases
- Rare hepatic adenoma case reports
- Injectable testosterone: rarely associated with hepatic effects

**Special Populations:**

**Adolescents:**
- Cross-sex hormones typically initiated age 16
- Lower starting doses, gradual titration
- Bone health surveillance essential
- Fertility counseling before any hormone treatment

**Older Adults:**
- Cardiovascular risk stratification paramount
- Lower starting doses may be prudent
- Consider drug interactions with age-related medications
- Bone health already concerning in this population

**Non-Binary Individuals:**
- Lower target hormone levels possible
- Partial transition goals require individualized protocols
- Some changes irreversible regardless of dose
- May alternate or discontinue hormones after desired effects

**Perioperative Management:**
- Elective surgery: hold estrogen 2-4 weeks pre-op (VTE prevention)
- Testosterone generally continued (risk of anemia, fatigue if stopped)
- Coordinate with surgeons regarding optimal timing
- Resume post-operatively when ambulatory

**Fertility Considerations:**
- Hormone therapy typically suppresses spermatogenesis and oogenesis
- Fertility preservation before initiation strongly advised
- Cessation may restore fertility but not guaranteed
- Duration of hormone exposure inversely correlates with fertility recovery

**Drug Interactions:**
- Estrogens: may increase thyroid hormone requirements, decrease warfarin metabolism
- Spironolactone: additive hyperkalemia with ACE inhibitors, ARBs, potassium supplements
- Testosterone: may enhance anticoagulant effects, interact with antidiabetic agents

**Patient Education:**
- Expected timelines for changes (psychological preparation)
- Irreversible changes requiring understanding
- Importance of adherence for effect maintenance
- Recognition of warning symptoms requiring medical attention
- Lifetime commitment implications`,
      keyTerms: [
        { term: 'first-pass metabolism', definition: 'Drug metabolism that occurs in the liver after absorption from digestive tract' },
        { term: 'erythropoietin', definition: 'Hormone stimulating red blood cell production' },
        { term: 'mineralocorticoid', definition: 'Steroid hormone regulating salt and water balance' },
        { term: 'polycythemia vera', definition: 'Blood cancer causing overproduction of red blood cells' },
        { term: 'spermatogenesis', definition: 'Process of sperm cell development' },
        { term: 'oogenesis', definition: 'Process of egg cell development' }
      ],
      clinicalNotes: `**Clinical Protocol Implementation:**

**Initial Visit:**
- Comprehensive history including goals, timeline, fertility desires
- Physical exam with baseline documentation
- Laboratory: CBC, CMP, lipids, hormone levels, HbA1c
- Feminizing: also prolactin, consider VTE risk assessment
- Discussion of expected effects, timelines, irreversible changes
- Informed consent documentation
- Fertility preservation referral if desired

**Follow-up Schedule:**
- Month 1, 3, 6, 9, 12 (then every 6-12 months)
- At each visit: vitals, brief exam, labs, satisfaction assessment
- Dose titration based on levels and effects
- Address side effects and concerns

**Laboratory Interpretation:**
- Target range achievement more important than specific dose
- Individual variation in hormone metabolism
- Symptom correlation with levels sometimes discordant
- Cost considerations in monitoring frequency

**Managing Side Effects:**
- Erythrocytosis: first-line dose reduction; consider route change
- Acne: standard dermatologic therapies, often improves with time
- Mood changes: evaluate for underlying depression, adjust if severe
- Injection site reactions: rotate sites, consider route change

**Coordinating Care:**
- Mental health provider involvement as indicated
- Endocrinology referral for complex cases
- Surgical coordination when applicable
- Primary care maintenance (cancer screening, etc.)

**Documentation:**
- Baseline and serial physical findings
- Hormone regimens and level responses
- Adverse effects and interventions
- Patient education provided`
    },
    5: {
      level: 5,
      summary: 'Gender-affirming hormone therapy requires advanced clinical expertise in endocrine management, with individualized protocols addressing pharmacokinetic variations, monitoring for long-term effects, and managing complex clinical scenarios.',
      explanation: `The provision of gender-affirming hormone therapy represents a specialized domain within endocrinology requiring comprehensive knowledge of pharmacology, monitoring protocols, and management of complex clinical scenarios including comorbidities and special populations.

**Advanced Pharmacological Considerations:**

**Estrogen Formulation Selection:**
Decision-making considers:
- VTE risk stratification (transdermal preferred in high-risk patients)
- Hepatic considerations (avoid oral in liver disease)
- Patient preference and adherence factors
- Cost and insurance coverage
- Injection tolerance and skill

**Alternative Anti-Androgen Approaches:**
- 5-alpha reductase inhibitors (finasteride, dutasteride) for hair-specific effects
- Progestogens: limited evidence but sometimes used for breast development
- Orchiectomy consideration for patients on spironolactone long-term

**Testosterone Microdosing:**
- Emerging practice for non-binary individuals seeking partial masculinization
- Target levels in lower male range or upper female range
- Limited evidence base; individualized approach required

**Monitoring Beyond Standard Protocols:**

**Cardiovascular Risk Assessment:**
- Baseline and periodic lipid panels
- Consider coronary artery calcium scoring in high-risk patients
- Blood pressure monitoring and management
- Smoking cessation counseling (critical with estrogen)

**Bone Health Surveillance:**
- DXA scanning for those with risk factors or prior pubertal suppression
- Monitor vitamin D levels, supplement as needed
- Ensure adequate calcium intake
- Weight-bearing exercise counseling

**Cancer Surveillance:**
- Evidence base limited; extrapolate from cisgender populations
- Breast imaging for transfeminine patients with breast tissue
- Prostate considerations for aging trans feminine patients
- Cervical screening for retained cervix

**Complex Clinical Scenarios:**

**Hormone Therapy with HIV:**
- Drug interactions between hormones and antiretrovirals
- Estradiol levels may be affected by certain ARVs
- Coordinate with HIV provider for monitoring

**Hormone Therapy with Mental Health Conditions:**
- Bipolar disorder: monitor for mood destabilization
- Eating disorders: body changes may trigger or relieve symptoms
- Psychosis: ensure psychiatric stability before/during treatment
- Continue mental health care coordination

**Surgical Considerations:**

**Pre-Operative Optimization:**
- Hold estrogen 2-4 weeks before major surgery (VTE risk)
- Testosterone generally continued perioperatively
- Optimize hemoglobin if erythrocytosis present
- Coordinate timing with surgical team

**Post-Operative Adjustments:**
- Orchiectomy allows estrogen dose reduction, discontinuation of anti-androgen
- Hysterectomy/oophorectomy: no change in testosterone dose required
- Monitor for hormone level changes after gonadectomy

**Adolescent-Specific Considerations:**

**Pubertal Suppression to Hormone Therapy Transition:**
- Continue GnRH agonist while adding cross-sex hormones initially
- Gradual transition to hormone monotherapy
- Bone density surveillance essential
- Monitor growth and development appropriately

**Fertility Considerations in Youth:**
- Sperm banking increasingly feasible in adolescents
- Oocyte preservation more complex but possible
- Ethical considerations in assent/consent
- Discuss before any gonadal suppressive treatment

**Long-term Outcomes Research:**

**Cardiovascular Data:**
- Limited long-term prospective studies
- Dutch cohort: some increased cardiovascular risk in trans women
- Trans men: data less concerning but continued monitoring needed
- Methodological challenges in existing research

**Cancer Risk:**
- Breast cancer cases reported in trans women (rare)
- Cervical cancer in trans men who avoid screening
- Standard screening based on organs present recommended
- No clear evidence of hormone-induced cancer risk

**Cognitive and Functional Outcomes:**
- Limited data on cognitive effects
- Quality of life consistently improved
- Sexual function generally preserved or improved
- Long-term satisfaction rates high

**Emerging Areas:**

**Pellet Implants:**
- Subcutaneous hormone pellets provide sustained release
- Variable availability and insurance coverage
- Limited transgender-specific data

**SERM Development:**
- Selective estrogen receptor modulators for tissue-specific effects
- Potential for feminization without breast development
- Not currently available for this purpose

**Future Directions:**
- Precision medicine approaches based on pharmacogenomics
- Improved delivery systems for better adherence
- Long-term outcome studies with improved methodology
- Reproductive technologies advancing fertility options

**Ethical Considerations:**
- Informed consent for lifelong therapy
- Balancing access with safety monitoring
- Fertility counseling and preservation options
- Advocacy for insurance coverage and reduced barriers`,
      keyTerms: [
        { term: '5-alpha reductase inhibitor', definition: 'Medication blocking conversion of testosterone to dihydrotestosterone' },
        { term: 'microdosing', definition: 'Using lower-than-standard hormone doses for partial effects' },
        { term: 'pharmacogenomics', definition: 'Study of how genes affect drug response' },
        { term: 'SERM', definition: 'Selective estrogen receptor modulator' },
        { term: 'gonadectomy', definition: 'Surgical removal of testes or ovaries' },
        { term: 'DXA', definition: 'Dual-energy x-ray absorptiometry for bone density measurement' }
      ],
      clinicalNotes: `**Advanced Clinical Management:**

**Difficult Cases:**
- Suboptimal response to standard regimens: evaluate adherence, absorption, metabolism
- Persistent dysphoria despite adequate hormones: assess expectations, mental health
- Medical contraindications developing: risk-benefit reassessment
- Complex drug interactions: coordinate with pharmacists, specialists

**Non-Adherence Management:**
- Explore barriers: cost, side effects, life circumstances
- Simplify regimen when possible
- Address concerns about permanent changes
- Reaffirm goals and decision-making

**Coordinating Multidisciplinary Care:**
- Regular communication with mental health providers
- Pre- and post-surgical coordination
- Fertility clinic collaboration
- Primary care integration

**Research Participation:**
- Encourage enrollment in longitudinal studies
- Document outcomes systematically
- Publish case series and clinical observations
- Contribute to evolving evidence base

**Teaching and Mentoring:**
- Educate trainees on hormone management
- Precept nurse practitioners and PAs
- Develop institutional protocols
- Advocate for curriculum inclusion`
    }
  },
  media: [],
  citations: [
    {
      id: 'endocrine-guidelines',
      type: 'article',
      title: 'Endocrine Treatment of Gender-Dysphoric/Gender-Incongruent Persons: An Endocrine Society Clinical Practice Guideline',
      authors: ['Hembree WC', 'Cohen-Kettenis PT', 'Gooren L', 'et al.'],
      source: 'Journal of Clinical Endocrinology and Metabolism'
    },
    {
      id: 'wpath-soc8',
      type: 'textbook',
      title: 'Standards of Care for the Health of Transgender and Gender Diverse People, Version 8',
      source: 'World Professional Association for Transgender Health'
    }
  ],
  crossReferences: [
    { targetId: 'gender-affirming-care', targetType: 'concept', relationship: 'parent', label: 'Gender-Affirming Care' },
    { targetId: 'surgical-options', targetType: 'concept', relationship: 'related', label: 'Surgical Options' },
    { targetId: 'transgender-youth', targetType: 'concept', relationship: 'related', label: 'Transgender Youth' }
  ],
  tags: {
    systems: ['endocrine', 'reproductive'],
    topics: ['lgbtq-health', 'transgender-health', 'endocrinology', 'pharmacology'],
    keywords: ['hormone therapy', 'estrogen', 'testosterone', 'transition', 'gender-affirming care']
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published'
};

export default hormoneTherapy;
