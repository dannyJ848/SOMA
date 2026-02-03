/**
 * Celiac Disease (Autoimmune Aspects) - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const celiacAutoimmuneContent: EducationalContent = {
  id: 'condition-celiac-disease-autoimmune',
  type: 'condition',
  name: 'Celiac Disease',
  alternateNames: ['Celiac Sprue', 'Coeliac Disease', 'Gluten-Sensitive Enteropathy', 'Non-Tropical Sprue'],
  hpoId: 'HP:0002608',

  levels: {
    1: {
      level: 1,
      summary: 'Celiac disease is an autoimmune condition where eating gluten damages the small intestine. Gluten is a protein found in wheat, barley, and rye.',
      explanation: `In celiac disease, your body reacts to gluten as if it were harmful. This reaction damages the lining of your small intestine, preventing proper absorption of nutrients.

**What happens:**
- The immune system attacks the intestine when gluten is eaten
- The finger-like projections (villi) that absorb nutrients get damaged
- The body can\'t absorb nutrients properly

**Common symptoms:**
- Diarrhea, bloating, gas
- Abdominal pain
- Weight loss
- Fatigue and weakness
- Anemia (low blood count)
- Gas and constipation
- Nausea and vomiting

**Symptoms in children:**
- Poor growth
- Delayed puberty
- Irritability
- Dental problems
- Failure to thrive

**Treatment:**
- Strict gluten-free diet for life
- Avoid wheat, barley, rye
- Read food labels carefully
- Nutritional supplements if needed

**Why treatment matters:**
- Prevents further intestinal damage
- Allows healing of the intestine
- Prevents complications like weak bones, infertility
- Reduces risk of certain cancers

**Hidden sources of gluten:**
- Soy sauce
- Beer
- Some processed foods
- Medications and supplements`,
      keyTerms: [
        { term: 'gluten', definition: 'Protein found in wheat, barley, and rye that triggers celiac disease' },
        { term: 'villi', definition: 'Tiny finger-like projections in the small intestine that absorb nutrients' },
        { term: 'autoimmune', definition: 'When the immune system attacks the body\'s own tissues' },
        { term: 'malabsorption', definition: 'Inability to properly absorb nutrients from food' },
      ],
      analogies: [
        'The villi in your small intestine are like a shag carpet - gluten flattens them like a worn-down rug, reducing surface area for absorption.',
        'Think of celiac disease like an "allergic" reaction in your intestine to gluten, causing damage every time you eat it.',
      ],
      examples: [
        'A 25-year-old woman with chronic diarrhea, bloating after eating bread or pasta, and iron deficiency anemia.',
        'A child who is not growing well, has a large belly but thin arms and legs, and frequent diarrhea.',
        'Someone who develops itchy blisters on their skin (dermatitis herpetiformis) and has digestive issues.',
      ],
      patientCounselingPoints: [
        'Follow a strict gluten-free diet for life - even small amounts of gluten can cause damage',
        'Read all food labels carefully - gluten can hide in many products',
        'Be careful at restaurants - cross-contamination can occur',
        'Take a daily multivitamin until your intestine heals and you absorb nutrients properly',
        'Join a celiac support group for help with gluten-free living',
      ],
    },
    2: {
      level: 2,
      summary: 'Celiac disease is an autoimmune enteropathy triggered by gluten ingestion, causing villous atrophy and malabsorption, diagnosed by serology and intestinal biopsy, requiring lifelong gluten-free diet.',
      explanation: `## Epidemiology
- Global prevalence ~1%
- Female:male ratio ~2:1
- Can present at any age
- Higher risk in first-degree relatives (10-15%)
- Associated with HLA-DQ2 and HLA-DQ8

## Pathogenesis
- Gluten peptides (gliadin) cross intestinal barrier
- Tissue transglutaminase (tTG) deamidates gliadin
- Deamidated gliadin presented by HLA-DQ2/DQ8
- T-cell mediated immune response
- Autoantibody production (anti-tTG, anti-DGP)
- Villous atrophy, crypt hyperplasia
- Intraepithelial lymphocytes

## Clinical Presentation

**Classic Presentation:**
- Diarrhea, steatorrhea
- Abdominal pain, bloating
- Weight loss
- Malabsorption findings

**Non-Classical:**
- Iron deficiency anemia
- Osteoporosis
- Fatigue, dyspepsia
- Elevated liver enzymes
- Neurologic symptoms

**Silent Celiac:**
- Asymptomatic
- Detected by screening
- Positive serology, villous atrophy

**Potential Celiac:**
- Positive serology
- No villous atrophy
- May develop classic disease later

**Extraintestinal Manifestations:**
- **Dermatitis Herpetiformis:** intensely pruritic blistering rash
- **Anemia:** Iron, B12, folate deficiency
- **Osteopenia/Osteoporosis:** Calcium, vitamin D malabsorption
- **Neurologic:** Ataxia, peripheral neuropathy, migraine
- **Reproductive:** Infertility, miscarriage, IUGR
- **Hepatic:** Elevated transaminases ("celiac hepatitis")
- **Oral:** Dental enamel defects, recurrent aphthous ulcers

## Associated Conditions
- Type 1 diabetes (3-6%)
- Autoimmune thyroiditis (2-5%)
- Down syndrome (5%)
- Turner syndrome (5%)
- Williams syndrome (10%)
- Selective IgA deficiency (2-3%)
- Autoimmune liver disease (PSC, AIH)
- Sjogren syndrome, SLE, RA

## Diagnostic Approach

**Serologic Tests:**
- **IgA anti-tTG:** First-line test, high sensitivity and specificity
- **IgA anti-DGP:** Alternative if tTG negative, high suspicion
- **Total IgA:** Check for IgA deficiency (2-3% of celiac patients)
- **IgG-based tests:** If IgA deficient (IgG anti-tTG, IgG anti-DGP)

**Diagnostic Criteria:**
- Positive serology + characteristic biopsy
- Symptomatic: Must have biopsy before gluten-free diet
- Asymptomatic children: ESPGHAN criteria (biopsy may be avoided if very high titer)

**Intestinal Biopsy:**
- Multiple biopsies from duodenum and bulb
- Findings:
  - Villous atrophy (flattening)
  - Crypt hyperplasia
  - Intraepithelial lymphocytes (>25/100 enterocytes)
  - Mononuclear infiltrate in lamina propria

**Marsh Classification:**
- Type 0: Normal
- Type 1: Increased IELs only
- Type 2: Crypt hyperplasia
- Type 3: Villous atrophy (3a partial, 3b subtotal, 3c total)

## Treatment: Gluten-Free Diet

**Strict Avoidance:**
- Wheat (all varieties: spelt, kamut, farro, semolina)
- Barley (including malt)
- Rye
- Triticale

**Safe Grains:**
- Rice, corn, quinoa
- Buckwheat, millet, amaranth
- Potatoes, tapioca
- Gluten-free oats (certified)

**Label Reading:**
- Look for "gluten-free" label
- Avoid: malt, brewer\'s yeast, modified food starch (specify source)
- Watch for cross-contamination

**Nutritional Considerations:**
- Iron, folate, B12 supplementation if deficient
- Calcium and vitamin D
- Monitor bone density
- Dietitian referral important

## Non-Responsive Celiac
- Persistent symptoms despite gluten-free diet
- Common: 10-30% of patients
- Causes:
  - Ongoing gluten exposure (intentional or inadvertent)
  - Refractory celiac disease
  - Microscopic colitis, IBS overlap
  - Small intestinal bacterial overgrowth
  - Pancreatic insufficiency`,
      keyTerms: [
        { term: 'gliadin', definition: 'Alcohol-soluble fraction of gluten that triggers celiac immune response' },
        { term: 'tissue transglutaminase (tTG)', definition: 'Enzyme that modifies gluten; major autoantigen in celiac disease' },
        { term: 'DGP', definition: 'Deamidated gliadin peptide; target for celiac autoantibodies' },
        { term: 'dermatitis herpetiformis', definition: 'Blistering skin rash associated with celiac disease; responds to gluten-free diet' },
        { term: 'villous atrophy', definition: 'Flattening of intestinal villi; hallmark of celiac disease' },
      ],
      analogies: [
        'tTG is like the "matchmaker" that introduces gluten to your immune system, triggering the autoimmune attack.',
      ],
      examples: [
        'IgA anti-tTG positive with villous atrophy on biopsy confirms celiac disease.',
        'IgA deficiency requires IgG-based testing (IgG anti-tTG or IgG anti-DGP).',
        'Type 1 diabetic with iron deficiency anemia should be screened for celiac.',
      ],
    },
    3: {
      level: 3,
      summary: 'Celiac disease involves HLA-DQ2/DQ8-restricted T-cell response to deamidated gliadin, with autoantibody production against tissue transglutaminase, causing villous atrophy and requiring lifelong gluten avoidance.',
      explanation: `## Immunopathogenesis

**Genetic Susceptibility:**
- **HLA-DQ2 (DQA1*05/DQB1*02):** 90-95% of patients
- **HLA-DQ8 (DQA1*03/DQB1*0302):** 5-10% of patients
- HLA-DQ2/DQ8 necessary but not sufficient
- First-degree relatives: 10-15% risk
- 30-40% of general population has DQ2/DQ8 but only 1% develop celiac

**Gluten Proteins:**
- **Gliadin:** Wheat (alpha, beta, gamma, omega)
- **Hordein:** Barley
- **Secalin:** Rye
- Rich in proline and glutamine (resistant to digestion)

**Immune Response:**
1. **Innate phase:** Gliadin increases intestinal permeability (zonulin)
2. **Deamidation:** tTG converts glutamine to glutamic acid
3. **Antigen presentation:** Deamidated gliadin bound to HLA-DQ2/DQ8
4. **Adaptive response:** CD4+ T-cell activation
5. **B-cell activation:** Anti-tTG and anti-DGP production
6. **Cytotoxicity:** Intraepithelial lymphocytes cause epithelial damage

**Autoantibodies:**
- **Anti-tTG IgA:** Highly sensitive and specific
- **Anti-DGP IgA/IgG:** Useful in children <2 years, IgA deficiency
- **Anti-EMA IgA:** Endomysial antibody; very specific, technical

## Diagnostic Algorithm

**Who to Screen:**
- Classic GI symptoms
- Unexplained iron deficiency anemia
- Osteoporosis at young age
- Type 1 diabetes (at diagnosis)
- First-degree relatives of celiac patients
- Associated autoimmune diseases
- Down, Turner, Williams syndromes
- Unexplained elevated liver enzymes
- Infertility, recurrent miscarriage

**Screening Tests:**
1. **IgA anti-tTG** (first line)
2. **Total IgA** (exclude deficiency)
3. If IgA deficient: IgG anti-tTG or IgG anti-DGP
4. If negative but high suspicion: IgA anti-DGP

**Confirmatory Testing:**
- **Intestinal biopsy:** Required for adults before gluten-free diet
- **Gluten challenge:** If already on gluten-free diet, 2-4 weeks of gluten before testing
- **ESPGHAN criteria (children):** May skip biopsy if:
  - Symptomatic
  - tTG IgA >10x ULN
  - Positive EMA
  - HLA-DQ2/DQ8 positive

## Histopathology: Marsh Classification

| Type | Villi | Crypts | IELs | Description |
|------|-------|--------|------|-------------|
| 0 | Normal | Normal | Normal | Pre-celiac or treated |
| 1 | Normal | Normal | ↑25/100 | Intraepithelial lymphocytosis |
| 2 | Normal | Hyperplasia | ↑25/100 | Crypt hyperplasia |
| 3a | Mild atrophy | Hyperplasia | ↑25/100 | Partial villous atrophy |
| 3b | Moderate atrophy | Hyperplasia | ↑25/100 | Subtotal villous atrophy |
| 3c | Severe atrophy | Hyperplasia | ↑25/100 | Total villous atrophy |

**Biopsy Considerations:**
- Minimum 4 biopsies (including duodenal bulb)
- Villous atrophy can be patchy
- Repeat biopsy if high suspicion but initial negative

## Differential Diagnosis

**Other Causes of Villous Atrophy:**
- Tropical sprue
- Whipple disease
- Giardiasis
- Crohn disease
- Autoimmune enteropathy
- Common variable immunodeficiency
- Lymphoma/enteropathy-associated T-cell lymphoma (EATL)

**Non-Celiac Gluten Sensitivity:**
- Similar symptoms to celiac
- Negative serology and biopsy
- No villous atrophy
- No autoimmune features
- FODMAP intolerance may explain some cases

## Complications

**Intestinal:**
- Refractory celiac disease (type I, II)
- Ulcerative jejunitis
- Small intestinal obstruction (strictures)
- Enteropathy-associated T-cell lymphoma (EATL)

**Systemic:**
- Osteoporosis (malabsorption of Ca, Vit D)
- Iron deficiency anemia
- B12, folate deficiency
- Hyposplenism (functional)
- Elevated liver enzymes
- Neurologic: Ataxia, peripheral neuropathy, epilepsy

**Pregnancy:**
- Infertility
- Recurrent miscarriage
- Intrauterine growth restriction (IUGR)
- Low birth weight`,
      keyTerms: [
        { term: 'zonulin', definition: 'Protein that modulates intestinal tight junctions; increased by gluten in celiac' },
        { term: 'EATL', definition: 'Enteropathy-associated T-cell lymphoma; rare complication of refractory celiac' },
        { term: 'refractory celiac disease', definition: 'Persistent symptoms/villous atrophy despite gluten-free diet' },
        { term: 'EMA', definition: 'Endomysial antibody; highly specific for celiac but technically demanding' },
        { term: 'non-celiac gluten sensitivity', definition: 'Gluten-related symptoms without autoimmune features or villous atrophy' },
      ],
      clinicalNotes: 'Board pearls: Screen with IgA anti-tTG. Check total IgA (2-3% IgA deficient). Biopsy before gluten-free diet (adults). HLA-DQ2/DQ8 present in 99% (negative rules out). Associated with type 1 diabetes, Down syndrome. Complications: osteoporosis, EATL (rare lymphoma), hyposplenism.',
    },
    4: {
      level: 4,
      summary: 'Advanced celiac management incorporates strict gluten-free diet adherence, monitoring for complications, management of non-responsive and refractory disease, and screening for associated conditions.',
      explanation: `## Gluten-Free Diet (GFD) Implementation

**Comprehensive Education:**
- Dietitian referral essential
- Label reading training
- Cross-contamination avoidance
- Dining out strategies
- Travel planning
- Psychological support

**Hidden Gluten Sources:**
- Modified food starch (check source)
- Malt vinegar, malt flavoring
- Soy sauce (use tamari)
- Beer, ale
- Communion wafers
- Medications, supplements (check fillers)
- Lipstick, lip balm
- Play-Doh (for children)

**Certified Gluten-Free:**
- FDA: <20 ppm gluten allowed
- Look for "certified gluten-free" label
- GFCO (Gluten-Free Certification Organization)
- Dedicated facilities

**Cross-Contamination Prevention:**
- Separate toaster, colander
- Clean cutting boards, surfaces
- Separate butter, spreads
- Avoid bulk bins
- Fryer cross-contamination (restaurants)

## Monitoring Response

**Clinical Response:**
- Most improve within weeks
- Complete healing: 6-24 months in adults
- Children: Faster response (3-6 months)

**Serologic Monitoring:**
- Repeat tTG IgA at 6-12 months after GFD
- Normalization indicates adherence
- Persistently elevated: Assess gluten exposure

**Histologic Recovery:**
- Repeat biopsy not routinely needed
- Consider if:
  - Non-response to GFD
  - Atypical presentation
  - Diagnostic uncertainty

**Nutrient Monitoring:**
- Iron studies (ferritin, iron, TIBC)
- B12, folate
- 25-OH vitamin D
- Calcium, parathyroid hormone
- Complete blood count
- Liver enzymes

## Non-Responsive Celiac Disease

**Definition:**
- Persistent symptoms or villous atrophy despite 6-12 months of strict GFD
- Affects 10-30% of patients

**Evaluation:**
1. **Confirm GFD adherence:** Dietitian review
2. **Repeat serology:** tTG, DGP
3. **Repeat biopsy:** Assess villous recovery
4. **Exclude alternative diagnoses:**
   - Small bowel bacterial overgrowth (breath test)
   - Microscopic colitis (colonoscopy with biopsy)
   - Pancreatic insufficiency (fecal elastase)
   - IBS overlap
   - Inflammatory bowel disease
   - Refractory celiac disease

**Refractory Celiac Disease (RCD):**
- **Type I:** Normal intraepithelial lymphocytes (IELs)
  - Responds to steroids, immunosuppressants
  - Better prognosis

- **Type II:** Abnormal IELs (clonal)
  - Poor response to therapy
  - High risk of EATL (30-60%)
  - Require aggressive therapy

**Treatment for RCD:**
- Corticosteroids (budesonide, prednisone)
- Azathioprine, 6-MP
- Mycophenolate mofetil
- Anti-TNF agents (infliximab)
- Autologous stem cell transplant (experimental)

## Dermatitis Herpetiformis

**Clinical Features:**
- Intensely pruritic, grouped vesicles
- Symmetric: Elbows, knees, buttocks, scalp
- Associated with celiac (90% have intestinal findings)
- May be only manifestation

**Diagnosis:**
- Skin biopsy: Direct immunofluorescence
- IgA deposition in dermal papillary tips
- tTG serology (may be positive)

**Treatment:**
- Gluten-free diet (slow response for skin)
- Dapsone 50-100 mg daily (rapid relief)
- Monitor for hemolysis, methemoglobinemia
- Sulfapyridine alternative

## Osteoporosis Management

**Risk Factors:**
- Malabsorption of Ca, Vit D
- Chronic inflammation
- Delayed diagnosis
- Hypogonadism

**Screening:**
- DEXA scan at diagnosis
- Repeat every 2-3 years
- Treat per osteoporosis guidelines

**Prevention/Treatment:**
- Calcium 1000-1200 mg/day
- Vitamin D 1000-2000 IU/day (target 30-50 ng/mL)
- Weight-bearing exercise
- Consider bisphosphonates if osteoporosis

## Associated Conditions Screening

**At Diagnosis:**
- **Type 1 diabetes:** Screen at diagnosis
- **Thyroid:** TSH, anti-TPO
- **Liver enzymes:** AST, ALT
- **Anemia:** CBC, iron, B12, folate
- **Bone density:** DEXA in adults

**Ongoing:**
- Annual: CBC, iron studies, liver enzymes
- Every 2-3 years: DEXA
- Monitor for other autoimmune diseases

## Hyposplenism
- Functional hyposplenism in 30%
- Howell-Jolly bodies on blood smear
- Increased encapsulated bacteria risk
- Vaccinations:
  - Pneumococcal (PCV20 or PCV15 + PPSV23)
  - Meningococcal (MenACWY, MenB)
  - Hib (if not previously vaccinated)`,
      keyTerms: [
        { term: 'EATL', definition: 'Enteropathy-associated T-cell lymphoma; rare lymphoma complicating refractory celiac' },
        { term: 'RCD type I', definition: 'Refractory celiac with normal IELs; responds to immunosuppression' },
        { term: 'RCD type II', definition: 'Refractory celiac with abnormal clonal IELs; high EATL risk, poor prognosis' },
        { term: 'Howell-Jolly bodies', definition: 'Nuclear remnants in RBCs on blood smear; indicate hyposplenism' },
      ],
      clinicalNotes: 'Board pearls: Screen with IgA anti-tTG. Check total IgA (2-3% IgA deficient). Biopsy before gluten-free diet (adults). HLA-DQ2/DQ8 present in 99% (negative rules out). Associated with type 1 diabetes, Down syndrome. Complications: osteoporosis, EATL (rare lymphoma), hyposplenism. Dermatitis herpetiformis treated with dapsone + GFD. Non-responsive: evaluate for gluten exposure, SIBO, microscopic colitis, pancreatic insufficiency.',
    },
    5: {
      level: 5,
      summary: 'Contemporary celiac care incorporates novel diagnostic biomarkers, advanced non-invasive monitoring techniques, management of refractory disease, and precision nutrition while addressing long-term outcomes and quality of life.',
      explanation: `## Precision Medicine in Celiac

**Genetic Testing:**
- **HLA-DQ2/DQ8 testing:**
  - Negative result excludes celiac (99% NPV)
  - Useful when GFD already started
  - Helps in ambiguous cases

**Risk Stratification:**
- First-degree relatives: 10-15% risk
- HLA-DQ2 homozygosity: Higher risk, earlier onset
- Multiple autoimmune conditions: Higher risk

**Biomarker Development:**
- **Anti-DGP IgA/IgG:**
  - May be more sensitive in children <2
  - Useful for monitoring in some patients

- **tTG IgA titers:**
  - Correlate with dietary adherence
  - May not normalize despite histologic remission

- **Novel biomarkers:**
  - Anti-actin IgA (intestinal damage)
  - IL-15, IFN-gamma signatures
  - MicroRNA profiles
  - Metabolomic signatures

## Novel Therapeutic Approaches

**Enzyme Therapy:**
- **Glutenases:** Oral enzymes that degrade gluten
  - ALV003 (latiglutenase)
  - Mixed results in trials
  - Not currently recommended

- **Pyloric enzyme supplementation:**
  - Break down gluten in stomach
  - Adjunct to GFD, not replacement

**Tight Junction Modulators:**
- **Larazotide acetate:**
  - Zonulin inhibitor
  - Reduces intestinal permeability
  - Phase 3 trials: Improved symptoms, reduced inflammation
  - Adjunct to GFD for accidental exposure

**Immunomodulation:**
- **Nexvax2:**
  - Peptide-based immunotherapy
  - Desensitization to gluten
  - Phase 2 trials ongoing

- **TAK-062:**
  - Engineered tTG enzyme
  - Degrades gluten in stomach
  - Early phase trials

**Vaccines:**
- **Celiac vaccine:**
  - Nexvax2 (peptide-based)
  - Aim: Induce gluten tolerance
  - Years from clinical use

## Non-Responsive Celiac Management

**Systematic Approach:**
1. **Confirm adherence:**
   - Dietitian expert review
   - Food diaries
   - Assess hidden gluten, cross-contamination

2. **Re-evaluate diagnosis:**
   - Review original biopsies
   - Consider serology mimics
   - HLA testing if not done

3. **Exclude alternatives:**
   - SIBO: Glucose breath test, trial of rifaximin
   - Microscopic colitis: Colonoscopy with biopsies
   - Pancreatic insufficiency: Fecal elastase
   - IBS: Rome IV criteria
   - IBD: Calprotectin, colonoscopy

4. **Assess for complications:**
   - Refractory celiac disease
   - Ulcerative jejunitis
   - EATL (urgent if suspected)

**Refractory Celiac Disease:**
- **Type I:** Normal IEL phenotype
  - Budesonide 9 mg daily
  - Azathioprine 2-2.5 mg/kg
  - Mycophenolate mofetil
  - Switch to different immunosuppressant if refractory

- **Type II:** Abnormal IEL phenotype (clonal)
  - High risk of EATL
  - Aggressive immunosuppression
  - Consider cladribine, alemtuzumab
  - Autologous stem cell transplant (select cases)
  - Enter CT surveillance for lymphoma

## Complications Management

**Enteropathy-Associated T-Cell Lymphoma (EATL):**
- Rare but serious (0.5-1% of celiac)
- Risk factors: RCD type II, persistent symptoms
- Presentation: Worsening symptoms, obstruction, bleeding
- Diagnosis: PET-CT, capsule endoscopy, surgery
- Treatment: Chemotherapy (CHOP-like), stem cell transplant
- Prognosis: Poor (median survival ~10 months)

**Ulcerative Jejunitis:**
- Chronic ulcerations in small intestine
- Refractory to GFD
- May precede EATL
- Treated with steroids, immunosuppressants

**Hyposplenism Management:**
- Vaccination per CDC guidelines
- Pneumococcal: PCV15 or PCV20
- Meningococcal: MenACWY + MenB
- Hib: If not previously vaccinated
- Revaccination per schedule

## Pregnancy and Celiac

**Pre-conception:**
- Ensure strict GFD adherence
- Nutritional optimization
- Screen for deficiencies

**Pregnancy:**
- Continue strict GFD
- Monitor nutritional status
- Iron, folic acid supplementation
- DEXA not indicated during pregnancy
- Obstetrics: High-risk consideration if untreated

**Postpartum:**
- Continue GFD (breastfeeding doesn\'t modify need)
- Monitor for postpartum thyroiditis

## Quality of Life Considerations

**Psychosocial Impact:**
- Social isolation (dining out challenges)
- Increased food costs (gluten-free products expensive)
- Anxiety about cross-contamination
- Travel difficulties
- School challenges for children

**Support Resources:**
- Celiac support groups
- Dietitian with celiac expertise
- Mental health support
- School accommodations (504 plan)
- Travel planning resources

## Future Directions

**Vaccines:**
- Nexvax2 (immunotherapy)
- Tolerance induction strategies

**Enzyme Therapies:**
- Improved glutenases
- Combination approaches

**Microbiome Modulation:**
- Probiotics (limited evidence)
- Fecal microbiota transplant (experimental)
- Microbiome signatures for diagnosis

**Non-Invasive Monitoring:**
- Video capsule endoscopy
- Serologic panels
- Intestinal permeability testing

**Biomarker Development:**
- Anti-actin antibodies
- Cytokine profiles
- MicroRNA signatures
- Metabolomics

**Gene Therapy:**
- HLA modification (theoretical)
- T regulatory cell therapy`,
      keyTerms: [
        { term: 'larazotide acetate', definition: 'Zonulin inhibitor that reduces intestinal permeability; adjunct therapy for celiac' },
        { term: 'Nexvax2', definition: 'Peptide-based immunotherapy aiming to induce gluten tolerance in celiac' },
        { term: 'glutenases', definition: 'Oral enzymes that degrade gluten; investigational adjunct to GFD' },
        { term: 'capsule endoscopy', definition: 'Camera pill that visualizes entire small intestine; useful in refractory celiac' },
      ],
      clinicalNotes: 'Board pearls: Screen with IgA anti-tTG. Check total IgA. Biopsy before GFD (adults). HLA-DQ2/DQ8 negative rules out. Associated: T1DM, Down, Turner, Williams. Complications: osteoporosis, EATL, hyposplenism, RCD. Dermatitis herpetiformis: dapsone + GFD. Non-responsive: assess adherence, SIBO, microscopic colitis, pancreatic insufficiency, RCD. Vaccinate for encapsulated bacteria if hyposplenism.',
    },
  },

  media: [
    {
      id: 'celiac-villous-atrophy',
      type: 'image',
      filename: 'celiac-villous-atrophy-histology.jpg',
      title: 'Villous Atrophy in Celiac Disease',
      description: 'Flattened intestinal villi compared to normal finger-like projections',
    },
    {
      id: 'dermatitis-herpetiformis',
      type: 'image',
      filename: 'dermatitis-herpetiformis.jpg',
      title: 'Dermatitis Herpetiformis',
      description: 'Intensely pruritic vesicles on elbows and knees characteristic of celiac disease',
    },
  ],
  citations: [
    {
      id: 'rubio-tapia-2013',
      type: 'article',
      title: 'Diagnosis and management of celiac disease',
      authors: ['Rubio-Tapia A', 'Hill ID', 'Kelly CP', 'et al.'],
      source: 'American Journal of Gastroenterology',
      url: 'https://doi.org/10.1038/ajg.2013.104',
    },
    {
      id: 'husby-2020',
      type: 'article',
      title: 'European Society Paediatric Gastroenterology, Hepatology and Nutrition guidelines for the diagnosis of coeliac disease',
      authors: ['Husby S', 'Koletzko S', 'Korponay-Szabo IR', 'et al.'],
      source: 'Journal of Pediatric Gastroenterology and Nutrition',
    },
  ],
  crossReferences: [
    { targetId: 'condition-crohn-disease', targetType: 'condition', relationship: 'related', label: 'Crohn Disease' },
    { targetId: 'condition-type1-diabetes', targetType: 'condition', relationship: 'related', label: 'Type 1 Diabetes' },
    { targetId: 'topic-autoimmune-serology', targetType: 'topic', relationship: 'related', label: 'Autoimmune Serology' },
  ],
  tags: {
    systems: ['immune', 'gastrointestinal', 'integumentary', 'hematologic'],
    topics: ['gastroenterology', 'autoimmunity', 'nutrition', 'dermatology'],
    keywords: ['celiac', 'coeliac', 'gluten', 'gliadin', 'tTG', 'anti-tTG', 'villous atrophy', 'gluten-free', 'dermatitis herpetiformis'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine'] },
  },

  createdAt: '2026-01-26T00:00:00.000Z',
  updatedAt: '2026-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default celiacAutoimmuneContent;
