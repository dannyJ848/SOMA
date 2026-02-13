/**
 * Hashimoto Thyroiditis - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const hashimotoContent: EducationalContent = {
  id: 'condition-hashimoto-thyroiditis',
  type: 'condition',
  name: 'Hashimoto Thyroiditis',
  nameEs: 'Tiroiditis de Hashimoto',
  alternateNames: ['Hashimoto\'s Disease', 'Chronic Lymphocytic Thyroiditis', 'Autoimmune Thyroiditis'],
  hpoId: 'HP:0000873',

  levels: {
    1: {
      level: 1,
      summary: 'Hashimoto thyroiditis is an autoimmune disease where the immune system attacks the thyroid gland, causing it to become underactive (hypothyroidism).',
      explanation: `In Hashimoto thyroiditis, your immune system mistakenly attacks your thyroid gland, gradually damaging it. Over time, the thyroid can\'t produce enough hormones, leading to hypothyroidism.

**Common symptoms:**
- Fatigue and sluggishness
- Weight gain despite eating normally
- Feeling cold when others are comfortable
- Dry skin and hair
- Constipation
- Depression or low mood
- Muscle aches and weakness
- Heavy or irregular menstrual periods
- Difficulty concentrating ("brain fog")

**Physical signs:**
- Enlarged thyroid (goiter) - a swelling in the neck
- Puffy face
- Slow heart rate
- Hoarse voice

**Who gets Hashimoto:**
- More common in women (7-10 times more)
- Usually ages 30-50
- Can run in families
- Associated with other autoimmune diseases

**Treatment:**
- Thyroid hormone replacement (levothyroxine)
- Daily pill taken on empty stomach
- Regular blood tests to adjust dose
- Treatment is usually lifelong

**Important to know:**
- Symptoms develop slowly over years
- Early stages may have no symptoms
- Blood tests confirm the diagnosis
- Proper treatment returns life to normal`,
      keyTerms: [
        { term: 'hypothyroidism', definition: 'Underactive thyroid that doesn\'t produce enough thyroid hormone' },
        { term: 'goiter', definition: 'Enlarged thyroid gland causing swelling in the front of the neck' },
        { term: 'thyroid hormone', definition: 'Chemical messengers that control metabolism, energy, and many body functions' },
        { term: 'levothyroxine', definition: 'Synthetic thyroid hormone medication used to treat hypothyroidism' },
      ],
      analogies: [
        'Hashimoto is like your thyroid factory being slowly destroyed by your own immune system, so it can\'t make enough product (hormone).',
        'Think of thyroid hormone like fuel for a car - when you run low, the engine slows down and doesn\'t work as well.',
      ],
      examples: [
        'A 35-year-old woman feels tired all the time, has gained weight without changing her diet, and feels cold when others are comfortable.',
        'Blood tests showing high TSH and low thyroid hormone indicate Hashimoto thyroiditis.',
        'Someone notices a swelling in their neck along with fatigue and constipation.',
      ],
      patientCounselingPoints: [
        'Take your levothyroxine on an empty stomach, at least 30-60 minutes before breakfast',
        'Wait 4 hours after taking levothyroxine before taking calcium or iron supplements',
        'Take your medication at the same time every day for consistent levels',
        'Don\'t stop your medication without talking to your doctor - the benefits go away quickly',
        'Pregnancy may require dose adjustment - tell your doctor if you become pregnant',
      ],
    },
    2: {
      level: 2,
      summary: 'Hashimoto thyroiditis is an autoimmune disorder causing lymphocytic infiltration of the thyroid, leading to progressive hypothyroidism, diagnosed by elevated TSH, low free T4, and positive thyroid autoantibodies.',
      explanation: `## Epidemiology
- Most common cause of hypothyroidism in iodine-sufficient areas
- Female:male ratio ~7-10:1
- Peak onset 30-50 years
- Genetic predisposition (familial clustering)
- Associated with other autoimmune diseases

## Pathogenesis
- Autoimmune destruction of thyroid
- Lymphocytic infiltration (T-cell mediated)
- Autoantibodies to thyroid antigens
- Gradual loss of functioning thyroid tissue
- Compensatory hypertrophy (goiter) initially

## Clinical Features

**Symptoms of Hypothyroidism:**
- **Metabolic:** Fatigue, weight gain, cold intolerance
- **Dermatologic:** Dry skin, hair loss, brittle nails
- **Gastrointestinal:** Constipation
- **Neuropsychiatric:** Depression, "brain fog", poor concentration
- **Reproductive:** Menorrhagia, infertility, decreased libido
- **Musculoskeletal:** Myalgias, arthralgias, proximal weakness
- **Cardiovascular:** Bradycardia, diastolic hypertension

**Physical Examination:**
- **Goiter:** Diffuse enlargement (may be firm/nodular)
- **Delayed reflexes:** Prolonged relaxation phase
- **Puffiness:** Periorbital edema, non-pitting edema
- **Skin:** Cool, dry, rough
- **Hair:** Dry, coarse; hair loss
- **Face:** Dull expression, hoarse voice

## Laboratory Findings

**Thyroid Function Tests:**
- **TSH:** Elevated (primary hypothyroidism)
- **Free T4:** Low or low-normal
- **Free T3:** May be low later in disease

**Autoantibodies:**
- **Anti-TPO (TPO Ab):** Positive in 90-95%
- **Anti-thyroglobulin (TG Ab):** Positive in 60-80%
- **TSH receptor antibodies:** Usually negative (vs Graves)

**Other Labs:**
- Hyperlipidemia (elevated LDL)
- Anemia (normocytic or macrocytic)
- Hyponatremia (mild)
- Elevated CK (from myopathy)

## Natural History

**Progressive Tissue Destruction:**
- Early: Thyroid enlargement (compensatory)
- Middle: Normal TSH, subclinical hypothyroidism
- Late: Overt hypothyroidism
- Atrophy: "End-stage" fibrotic thyroid

**Subclinical Hypothyroidism:**
- Elevated TSH, normal free T4
- Progression to overt: 2-4% per year
- Higher risk if TSH >10 mIU/L or antibodies positive

**Postpartum Thyroiditis:**
- Transient form of autoimmune thyroiditis
- Hyperthyroid phase → hypothyroid phase
- Usually resolves, but 20-30% develop permanent hypothyroidism
- Higher risk of developing classic Hashimoto later

## Diagnosis

**Diagnostic Criteria:**
- Elevated TSH
- Low free T4
- Positive thyroid antibodies (confirmatory)
- Goiter (not always present)

**Ultrasound Findings:**
- Hypoechoic thyroid tissue
- Heterogeneous echotexture
- May have pseudonodular appearance
- Increased vascularity on Doppler

**Differential Diagnosis:**
- Other causes of hypothyroidism
- Subacute (de Quervain) thyroiditis (painful, transient)
- Silent thyroiditis (painless, transient)
- Drug-induced thyroid dysfunction`,
      keyTerms: [
        { term: 'anti-TPO', definition: 'Antithyroid peroxidase antibody; highly sensitive marker for Hashimoto' },
        { term: 'anti-thyroglobulin', definition: 'Antibody against thyroglobulin; supports Hashimoto diagnosis' },
        { term: 'subclinical hypothyroidism', definition: 'Elevated TSH with normal free T4; early or mild Hashimoto' },
        { term: 'myxedema', definition: 'Severe hypothyroidism with non-pitting edema from glycosaminoglycan accumulation' },
      ],
      analogies: [
        'Anti-TPO antibodies are like "footprints" showing the immune system has been attacking the thyroid.',
      ],
      examples: [
        'TSH of 15 mIU/L with low free T4 and positive anti-TPO confirms overt hypothyroidism from Hashimoto.',
        'TSH of 6 mIU/L with normal free T4 is subclinical hypothyroidism.',
        'A patient with goiter, fatigue, and elevated TSH likely has Hashimoto if antibodies are positive.',
      ],
    },
    3: {
      level: 3,
      summary: 'Hashimoto thyroiditis involves T-cell mediated destruction of thyrocytes with autoantibody production, causing progressive hypothyroidism, with variable clinical presentation requiring lifelong thyroid hormone replacement.',
      explanation: `## Pathophysiology

**Immune Mechanisms:**
- **T-cell mediated:** CD4+ and CD8+ T-cell infiltration
- **Cytotoxic attack:** Apoptosis of thyrocytes
- **B-cell activation:** Autoantibody production
- **Cytokine release:** IFN-γ, IL-2, TNF-α
- **Fibrosis:** End-stage atrophic thyroid

**Autoantigens:**
- **Thyroid peroxidase (TPO):** Enzyme for thyroid hormone synthesis
- **Thyroglobulin (TG):** Protein precursor of T3/T4
- **TSH receptor:** Less common target (vs Graves)

**Genetic Susceptibility:**
- **HLA associations:** HLA-DR3, HLA-DR4, HLA-DR5
- **CTLA-4 polymorphisms:** Affects T-cell regulation
- **PTPN22 variants:** Autoimmunity gene
- **FOXP3 mutations:** Regulatory T-cell dysfunction

**Environmental Triggers:**
- Iodine excess (controversial)
- Selenium deficiency
- Radiation exposure
- Pregnancy (postpartum thyroiditis)
- Stress, infection (possible triggers)

## Clinical Spectrum

**Overt Hypothyroidism:**
- TSH >10 mIU/L, low free T4
- Clear symptoms
- Always requires treatment

**Subclinical Hypothyroidism:**
- TSH 4.5-10 mIU/L, normal free T4
- May have minimal or no symptoms
- Progression risk: TSH-dependent
- Treatment individualized

**Hashimoto Encephalopathy (Rare):**
- Cognitive dysfunction, confusion
- Myoclonus, seizures
- High anti-thyroid antibodies
- Responds to steroids

**Hashimoto Thyroiditis Variants:**
- **Fibrous variant:** Rapid enlargement, woody hard
- **Juvenile form:** Children/adolescents
- **Postpartum thyroiditis:** Transient form

## Treatment: Levothyroxine Therapy

**Formulation:**
- Synthetic T4 (levothyroxine)
- Long half-life (~7 days)
- Converted to T3 peripherally

**Dosing:**
- **Full replacement:** ~1.6 mcg/kg/day
- **Young, healthy:** Start at or near full dose
- **Elderly/heart disease:** Start 25-50 mcg, titrate slowly
- **Pregnancy:** Increase dose by 30-50%

**Administration:**
- Empty stomach, 30-60 minutes before breakfast
- Separate from calcium, iron, PPIs by 4 hours
- Consistent timing daily
- Switch between brands cautiously

**Monitoring:**
- Check TSH 6-8 weeks after starting/changing dose
- Target TSH: 0.5-4.5 mIU/L (age-dependent)
- Once stable, check every 6-12 months

## Subclinical Hypothyroidism Management

**Treat if:**
- TSH >10 mIU/L (progression high)
- TSH 4.5-10 with symptoms
- Pregnancy or planning pregnancy
- Goiter present
- Young age (<65)
- Positive antibodies (higher progression risk)

**Observation if:**
- TSH 4.5-10 without symptoms
- Elderly (>65-70) - fewer benefits, more risks
- Asymptomatic, negative antibodies
- Monitor TSH every 6-12 months

## Pregnancy Considerations

**Maternal Thyroid Requirements:**
- Increased by 30-50% during pregnancy
- TSH target: <2.5 mIU/L (1st trimester), <3.0 (2nd/3rd)
- Check TFTs each trimester

**Fetal Effects:**
- Thyroid hormone critical for fetal brain development
- Maternal hypothyroidism: Lower IQ in offspring
- Preterm birth, low birth weight risk
- Miscarriage risk increased

**Treatment Goals:**
- Pre-conception: TSH <2.5
- Pregnancy: Increase dose immediately when pregnant
- Postpartum: Return to pre-pregnancy dose

## Associated Autoimmune Conditions
- Type 1 diabetes
- Celiac disease
- Addison disease (Schmidt syndrome)
- Pernicious anemia
- Vitiligo
- Alopecia areata
- Sjogren syndrome
- SLE, RA`,
      keyTerms: [
        { term: 'CTLA-4', definition: 'Cytotoxic T-lymphocyte antigen 4; regulates T-cell activation, polymorphisms increase Hashimoto risk' },
        { term: 'Schmidt syndrome', definition: 'Autoimmune polyglandular syndrome type 2; Addison + thyroid + diabetes' },
        { term: 'myxedema coma', definition: 'Life-threatening severe hypothyroidism with altered mental status' },
        { term: 'postpartum thyroiditis', definition: 'Transient thyroiditis after delivery; hyper- then hypothyroid phases' },
      ],
      clinicalNotes: 'Board pearls: Anti-TPO positive in 90-95% of Hashimoto. Treat overt hypothyroidism (TSH >10, low free T4). Subclinical: treat if TSH >10 or symptomatic with TSH 4.5-10. Elderly: higher treatment threshold. Pregnancy: TSH target <2.5 first trimester, <3.0 second/third. Increase levothyroxine dose by 30-50% in pregnancy.',
    },
    4: {
      level: 4,
      summary: 'Advanced Hashimoto management incorporates individualized levothyroxine dosing, special population considerations, management of refractory symptoms, and screening for associated conditions.',
      explanation: `## Levothyroxine Optimization

**Dosing Nuances:**
- **Weight-based:** 1.6 mcg/kg/day
- **Elderly (>65):** Start 25-50 mcg, titrate slowly
- **Heart disease:** Start 12.5-25 mcg, very slow titration
- **Obesity:** Dose based on ideal body weight
- **Pregnancy:** Immediate 30-50% increase when pregnant

**Persistent Symptoms Despite Normal TSH:**
- Check free T3 (may be low)
- Consider malabsorption
- Evaluate for other conditions (iron deficiency, anemia, depression)
- Some patients benefit from combination T4/T3 (off-label)

**Malabsorption Issues:**
- Celiac disease
- Atrophic gastritis, H. pylori
- PPI use
- Bariatric surgery
- Switch to liquid levothyroxine or increase dose

**Drug Interactions:**
- Decrease absorption: Calcium, iron, PPIs, sucralfate, cholestyramine
- Increase metabolism: Rifampin, carbamazepine, phenytoin
- Increase requirement: Estrogen (pregnancy, OCPs)

## Special Populations

**Pregnancy:**
- **Pre-conception:** TSH <2.5 mIU/L
- **1st trimester:** TSH <2.5, increase dose 30-50%
- **2nd/3rd trimester:** TSH <3.0
- **Postpartum:** Return to pre-pregnancy dose
- Check TFTs: Preconception, each trimester, postpartum

**Infertility:**
- Treat subclinical hypothyroidism (TSH >2.5)
- May improve ovulation, conception rates
- Reduce miscarriage risk

**Children:**
- Higher mcg/kg dose (2-4 mcg/kg/day)
- Monitor growth and development
- Ensure adherence (liquid formulations available)

**Elderly (>65-70):**
- Higher TSH target (3-5 mIU/L acceptable)
- Start low, go slow
- Lower risk of progression to overt hypothyroidism
- Avoid overtreatment (atrial fibrillation risk)

**Heart Disease:**
- Start 12.5-25 mcg
- Monitor for angina, arrhythmias
- Consider cardiology consultation

## Subclinical Hypothyroidism Decision Tool

**Treat if:**
- TSH >10 mIU/L (all ages)
- TSH 4.5-10 + symptoms
- TSH 4.5-10 + goiter
- TSH 4.5-10 + positive antibodies
- TSH >2.5 in pregnancy/infertility

**Monitor (no treatment) if:**
- TSH 4.5-10, no symptoms, elderly
- TSH <4.5, low risk
- Short life expectancy
- High risk of overtreatment

**Monitoring untreated:**
- TSH every 6-12 months
- More frequent if TSH rising
- Educate about symptoms

## Myxedema Coma

**Precipitants:**
- Infection, cold exposure
- Trauma, surgery
- Medication non-adherence
- Cerebrovascular accident

**Clinical Features:**
- Altered mental status
- Hypothermia (<35°C)
- Bradycardia, hypotension
- Hyponatremia, hypoglycemia
- Pericardial/pleural effusions

**Treatment:**
1. **IV levothyroxine:** 200-400 mcg loading, then 50-100 mcg daily
   - OR IV liothyronine (T3) for rapid effect
2. **Glucocorticoids:** Hydrocortisone 100 mg IV q8h (until adrenal insufficiency excluded)
3. **Passive rewarming:** No active rewarming (vasodilation risk)
4. **Treat precipitant:** Antibiotics for infection
5. **Supportive care:** Ventilation, pressors, glucose

## Associated Condition Screening

**Autoimmune Polyglandular Syndromes:**
- Screen for diabetes (fasting glucose, HbA1c)
- Screen for celiac (tTG IgA) if symptoms
- Screen for pernicious anemia (B12, MMA)
- Screen for adrenal insufficiency if indicated

**Other Considerations:**
- Lipid management (elevated LDL common)
- Bone health (overtreatment risk)
- Cognitive function
- Depression screening

## Combination Therapy (T4 + T3)

**Indications (Controversial):**
- Persistent symptoms despite normal TSH
- Low free T3 despite normal free T4
- DIO2 polymorphism (impaired conversion)

**Approach:**
- Reduce levothyroxine by 15-25 mcg
- Add liothyronine (T3) 5-10 mcg in divided doses
- OR use desiccated thyroid (Armour, Nature-throid)
- Monitor symptoms, free T4/T3
- Not standard of care, consider endocrinology referral

**Evidence:**
- Some studies show symptom improvement
- No clear QoL benefit in meta-analyses
- Potential risks: arrhythmias, bone loss

## Thyroid Nodules in Hashimoto

**Increased Risk:**
- Hashimoto associated with thyroid cancer (especially lymphoma)
- Nodules common in Hashimoto

**Evaluation:**
- Same FNA criteria as non-Hashimoto
- Ultrasound follow-up per TI-RADS
- Consider repeat FNA if growing

**Primary Thyroid Lymphoma:**
- Rare complication
- Rapidly enlarging thyroid
- Hoarseness, compression symptoms
- Diagnosis: Core biopsy (FNA may miss)`,
      keyTerms: [
        { term: 'DIO2 polymorphism', definition: 'Deiodinase 2 gene variant; may impair T4-to-T3 conversion' },
        { term: 'myxedema coma', definition: 'Life-threatening severe hypothyroidism requiring IV levothyroxine' },
        { term: 'TI-RADS', definition: 'Thyroid Imaging Reporting and Data System; risk stratification for thyroid nodules' },
        { term: 'desiccated thyroid', definition: 'Porcine thyroid extract containing both T4 and T3; alternative to levothyroxine' },
      ],
      clinicalNotes: 'Board pearls: Treat overt hypothyroidism (TSH >10, low free T4). Subclinical: treat if TSH >10 or symptomatic TSH 4.5-10. Elderly: higher treatment threshold. Pregnancy: TSH <2.5 first trimester. Myxedema coma: IV levothyroxine + steroids. Screen for associated autoimmune diseases. Persistent symptoms: check T3, consider malabsorption.',
    },
    5: {
      level: 5,
      summary: 'Contemporary Hashimoto care incorporates personalized levothyroxine dosing, novel therapeutic approaches, biomarker monitoring, and precision medicine while addressing long-term outcomes, comorbidities, and quality of life.',
      explanation: `## Precision Medicine Approaches

**Pharmacogenomics:**
- **DIO2 polymorphisms:** May require combination therapy
  - Thr92Ala variant common
  - Impaired T4-to-T3 conversion in tissues
  - May explain persistent symptoms

- **MCT8 (Monocarboxylate transporter 8):**
  - Thyroid hormone transport into cells
  - Mutations cause Allan-Herndon-Dudley syndrome
  - Polymorphisms may affect tissue delivery

**Biomarker Development:**
- **Thyroglobulin antibodies:**
  - Higher titers predict faster progression
  - May guide monitoring interval

- **TSH receptor blocking antibodies:**
  - Rarely present in Hashimoto
  - Cause transient hypothyroidism in newborns

- **MicroRNA signatures:**
  - Research stage
  - May predict disease course

## Novel Therapeutic Approaches

**Selenium Supplementation:**
- Reduces anti-TPO titers in some studies
- May improve ultrasound appearance
- Most benefit in postpartum thyroiditis
- Dose: 200 mcg daily
- Evidence not strong enough for routine use

**Low-Dose Naltrexone (LDN):**
- Anti-inflammatory properties
- Small studies show reduced anti-TPO
- Anecdotal symptom improvement
- Not standard of care

**Immunomodulation:**
- **B-cell depletion:** Rituximab (investigational)
- **CTLA-4-Ig:** Abatacept (theoretical)
- **Treg therapy:** Regulatory T cell enhancement
- **Peptide immunotherapy:** Antigen-specific tolerance

## Thyroid Hormone Analogues

**Liothyronine (T3) Formulations:**
- Immediate-release: Short half-life, BID dosing
- Sustained-release: Compounded, variable quality
- Under investigation: Controlled-release T3

**Thyromimetic Agents:**
- **Eprotirome:** Selective hepatic uptake (lipid lowering)
- **Resmetirom:** Selective TR-beta activation (NAFLD)
- **Not for hypothyroidism replacement**

## Pregnancy and Fetal Development

**Pre-conception Optimization:**
- TSH target: <2.5 mIU/L
- Check both anti-TPO and anti-TG
- Counsel on early dose increase

**First Trimester Critical Period:**
- Fetal thyroid not functional until ~12 weeks
- Dependent on maternal T4 transfer
- Placental deiodinases convert T4 to T3
- Even mild maternal hypothyroidism affects fetal brain

**Newborn Screening:**
- Detects congenital hypothyroidism
- Transient hypothyroidism if maternal blocking antibodies
- May require temporary treatment

**Long-Term Child Outcomes:**
- Lower IQ if untreated maternal hypothyroidism
- Language delays
- Attention problems
- Emphasizes importance of treatment

## Hashimoto Encephalopathy

**Pathogenesis:**
- Anti-TPO antibodies cross-react with brain antigens
- Cerebral vasculitis or autoantibody effects
- Not directly related to thyroid hormone levels

**Clinical Presentation:**
- Cognitive decline, confusion
- Memory problems
- Myoclonus, tremor
- Seizures, stroke-like episodes
- Psychiatric symptoms

**Diagnosis:**
- High anti-TPO titers
- EEG: Generalized slowing
- MRI: May be normal or show nonspecific changes
- Exclusion of other causes

**Treatment:**
- High-dose steroids (prednisone 1 mg/kg)
- IVIG or plasmapheresis for refractory
- Most patients respond well
- May relapse when steroids tapered

## Long-Term Management

**Monitoring Strategy:**
- Stable patient: TSH every 6-12 months
- Change in symptoms: Repeat TFTs
- Pregnancy: Each trimester, postpartum
- Elderly: More frequent monitoring

**Overtreatment Risks:**
- Atrial fibrillation
- Osteoporosis
- Fractures in elderly
- Palpitations, anxiety

**Undertreatment Risks:**
- Progression to myxedema coma (rare)
- Dyslipidemia, accelerated atherosclerosis
- Cognitive impairment
- Depression, fatigue
- Infertility, pregnancy complications

## Cardiovascular Considerations

**Hypothyroid Heart Disease:**
- Bradycardia
- Diastolic hypertension
- Pericardial effusion
- Reduced contractility

**Lipid Abnormalities:**
- Elevated LDL, total cholesterol
- Improves with levothyroxine
- Screen lipids, treat per guidelines

**Arrhythmia Risk:**
- Overtreatment increases AF risk
- TSH <0.1 associated with AF
- Especially in elderly

## Quality of Life Considerations

**Persistent Symptoms:**
- Fatigue, weight issues
- Cognitive symptoms
- Mood disturbances
- May not fully resolve with normalization

**Non-THryoid Factors:**
- Sleep apnea evaluation
- Iron deficiency screening
- Depression screening
- Vitamin D deficiency
- Other autoimmune conditions

**Patient Education:**
- Lifelong medication adherence
- Importance of consistent timing
- Pregnancy planning
- Recognition of over/under-treatment
- Family screening (first-degree relatives)

## Future Directions

**Oral Levothyronine:**
- Better bioavailability
- More consistent levels
- May reduce dose requirements

**Alternative Delivery Systems:**
- Transdermal formulations
- Long-acting injectable

**Tolerance Induction:**
- Antigen-specific immunotherapy
- Peptide-based tolerance
- Regulatory T cell therapy

**Biomarker-Guided Therapy:**
- Individualized TSH targets
- Genetic-based dosing
- Free T3 monitoring`,
      keyTerms: [
        { term: 'DIO2 polymorphism', definition: 'Deiodinase 2 gene variant affecting T4-to-T3 conversion; may explain persistent symptoms' },
        { term: 'Hashimoto encephalopathy', definition: 'Rare neurologic condition with high anti-TPO antibodies; responds to steroids' },
        { term: 'thyromimetic agents', definition: 'Selective thyroid hormone receptor agonists; investigational for non-thyroid indications' },
        { term: 'MCT8', definition: 'Monocarboxylate transporter 8; transports thyroid hormone into cells' },
      ],
      clinicalNotes: 'Board pearls: Anti-TPO positive in >90% of Hashimoto. Treat overt hypothyroidism. Subclinical: treat if TSH >10 or symptomatic with TSH 4.5-10. Elderly: higher threshold. Pregnancy: TSH <2.5 first trimester, increase dose 30-50%. Myxedema coma: IV levothyroxine + steroids. Screen for associated autoimmune diseases.',
    },
  },

  media: [
    {
      id: 'hashimoto-goiter',
      type: 'image',
      filename: 'diffuse-goiter-hashimoto.jpg',
      title: 'Diffuse Goiter in Hashimoto Thyroiditis',
      description: 'Enlarged thyroid gland with diffuse swelling',
    },
  ],
  citations: [
    {
      id: 'garber-2012',
      type: 'article',
      title: 'Clinical Practice Guidelines for Hypothyroidism in Adults: Cosponsored by the American Association of Clinical Endocrinologists and the American Thyroid Association',
      authors: ['Garber JR', 'Cobin RH', 'Gharib H', 'et al.'],
      source: 'Endocrine Practice',
      url: 'https://doi.org/10.4158/EP.12.1.G.1',
    },
    {
      id: 'alexander-2017',
      type: 'article',
      title: '2017 Guidelines for Diagnosis and Management of Thyroid Disease During Pregnancy and the Postpartum',
      authors: ['Alexander EK', 'Pearce EN', 'Brent GA', 'et al.'],
      source: 'Thyroid',
      url: 'https://doi.org/10.1089/thy.2016.0457',
    },
  ],
  crossReferences: [
    { targetId: 'condition-graves-disease', targetType: 'condition', relationship: 'related', label: 'Graves Disease' },
    { targetId: 'condition-hypothyroidism', targetType: 'condition', relationship: 'related', label: 'Hypothyroidism' },
    { targetId: 'condition-celiac-disease', targetType: 'condition', relationship: 'related', label: 'Celiac Disease' },
  ],
  tags: {
    systems: ['endocrine', 'immune'],
    topics: ['endocrinology', 'autoimmunity'],
    keywords: ['Hashimoto', 'hypothyroidism', 'goiter', 'anti-TPO', 'levothyroxine', 'thyroiditis', 'autoimmune thyroiditis'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine'] },
  },

  createdAt: '2026-01-26T00:00:00.000Z',
  updatedAt: '2026-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default hashimotoContent;
