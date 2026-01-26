/**
 * Celiac Disease and Malabsorption Syndromes - Comprehensive Educational Content
 *
 * Covers celiac disease pathophysiology, diagnosis, management, and other
 * malabsorption syndromes including lactose intolerance, SIBO, and pancreatic insufficiency.
 */

import { EducationalContent } from '../../../types';

export const celiacAndMalabsorption: EducationalContent = {
  id: 'condition-celiac-malabsorption',
  type: 'condition',
  name: 'Celiac Disease and Malabsorption',
  alternateNames: [
    'Celiac Sprue',
    'Gluten-Sensitive Enteropathy',
    'Non-Tropical Sprue',
    'Malabsorption Syndrome',
    'Intestinal Malabsorption',
  ],

  levels: {
    1: {
      level: 1,
      summary: 'Celiac disease is when your body can\'t handle a protein called gluten found in wheat, barley, and rye. Malabsorption means your intestines have trouble absorbing nutrients from food.',
      explanation: `**What is Celiac Disease?**

Celiac disease is a condition where eating certain foods makes your immune system attack your own intestines. The foods that cause this problem contain a protein called gluten, which is found in:
- Wheat (bread, pasta, most cereals)
- Barley
- Rye

When someone with celiac disease eats gluten, their immune system gets confused and damages the lining of the small intestine. The small intestine is where your body absorbs nutrients from food. When it gets damaged, you can't absorb nutrients well, which can make you feel sick.

**What are the symptoms?**

- Belly pain and bloating
- Diarrhea or constipation
- Feeling very tired
- Losing weight without trying
- Feeling weak
- Skin rashes

**What is Malabsorption?**

Malabsorption is when your intestines can't properly absorb nutrients from food. Celiac disease is one cause, but there are others too:
- Not being able to digest milk (lactose intolerance)
- Problems with the pancreas
- Some infections

**How is it treated?**

The main treatment for celiac disease is avoiding all foods with gluten. This is called a gluten-free diet. When you stop eating gluten, your intestines can heal and you'll feel better.

**Can you outgrow it?**

No, celiac disease is a lifelong condition. But by following a gluten-free diet, most people can live healthy, normal lives.`,
      keyTerms: [
        { term: 'celiac disease', definition: 'A condition where eating gluten damages your intestines', pronunciation: 'SEE-lee-ak' },
        { term: 'gluten', definition: 'A protein found in wheat, barley, and rye', pronunciation: 'GLOO-ten' },
        { term: 'malabsorption', definition: 'When your intestines can\'t properly absorb nutrients from food' },
        { term: 'small intestine', definition: 'The part of your digestive system where nutrients are absorbed' },
        { term: 'nutrients', definition: 'The vitamins, minerals, and other good things in food your body needs' },
      ],
      analogies: [
        'Your small intestine is like a carpet with tiny finger-like projections called villi. In celiac disease, it\'s like the carpet gets flattened, so it can\'t absorb as much.',
        'Gluten is like a key that accidentally sets off a false alarm in your body\'s security system.',
      ],
      examples: [
        'A child with celiac disease might not grow as tall as other kids because their body can\'t absorb enough nutrients.',
        'Someone with lactose intolerance gets a stomachache after drinking milk because they can\'t digest milk sugar properly.',
      ],
    },
    2: {
      level: 2,
      summary: 'Celiac disease is an autoimmune condition triggered by gluten that causes villous atrophy and malabsorption. Other malabsorption syndromes include lactose intolerance, small intestinal bacterial overgrowth, and pancreatic insufficiency.',
      explanation: `## Celiac Disease

**What is it?**
Celiac disease is an autoimmune disorder where the body's immune system reacts abnormally to gluten, a protein found in wheat, barley, and rye. This immune reaction damages the villi (tiny finger-like projections) that line the small intestine and are essential for nutrient absorption.

**Who gets it?**
- Affects about 1% of the population
- More common in people with:
  - Family history of celiac disease
  - Type 1 diabetes
  - Down syndrome
  - Thyroid disorders

**Symptoms:**

*Gastrointestinal:*
- Chronic diarrhea or constipation
- Bloating and gas
- Abdominal pain
- Nausea

*Extra-intestinal (from malabsorption):*
- Iron deficiency anemia
- Fatigue
- Weight loss
- Bone pain (osteoporosis)
- Skin rash (dermatitis herpetiformis)
- Neurological symptoms (numbness, tingling)

**Diagnosis:**
1. Blood tests: Look for specific antibodies (tTG-IgA, EMA)
2. Intestinal biopsy: Confirms villous atrophy
3. Important: Must be eating gluten for tests to be accurate

**Treatment:**
- Strict lifelong gluten-free diet
- Avoid wheat, barley, rye (and usually oats due to cross-contamination)
- Monitor for nutritional deficiencies
- Repeat biopsy to confirm healing

## Other Malabsorption Syndromes

**Lactose Intolerance:**
- Deficiency of lactase enzyme (breaks down milk sugar)
- Symptoms: Bloating, diarrhea, gas after dairy products
- Diagnosis: Lactose breath test or symptom improvement with dairy avoidance
- Treatment: Lactose-free diet, lactase supplements

**Small Intestinal Bacterial Overgrowth (SIBO):**
- Excessive bacteria in the small intestine
- Causes: Slow motility, structural abnormalities, low stomach acid
- Symptoms: Bloating, diarrhea, weight loss
- Diagnosis: Breath test (hydrogen/methane)
- Treatment: Antibiotics (rifaximin)

**Pancreatic Insufficiency:**
- Pancreas doesn't produce enough digestive enzymes
- Causes: Chronic pancreatitis, cystic fibrosis, pancreatic surgery
- Symptoms: Fatty, foul-smelling stools (steatorrhea), weight loss
- Diagnosis: Fecal elastase test
- Treatment: Pancreatic enzyme replacement with meals`,
      keyTerms: [
        { term: 'villous atrophy', definition: 'Flattening of the finger-like projections in the small intestine that absorb nutrients' },
        { term: 'autoimmune', definition: 'When the immune system mistakenly attacks the body\'s own tissues' },
        { term: 'tTG-IgA', definition: 'Tissue transglutaminase antibody; main blood test for celiac disease' },
        { term: 'dermatitis herpetiformis', definition: 'Itchy, blistering skin rash associated with celiac disease', pronunciation: 'der-mah-TY-tis her-PET-ih-FOR-mis' },
        { term: 'steatorrhea', definition: 'Fatty, foul-smelling stools due to fat malabsorption', pronunciation: 'stee-at-oh-REE-ah' },
        { term: 'lactase', definition: 'Enzyme that breaks down lactose (milk sugar)' },
      ],
      analogies: [
        'Villi are like the loops in a shag carpet - they increase surface area for absorption. Villous atrophy is like the carpet getting matted down flat.',
        'SIBO is like having the wrong bacteria in the wrong neighborhood - small intestine bacteria should be minimal, not abundant.',
      ],
    },
    3: {
      level: 3,
      summary: 'Celiac disease is triggered by gliadin-derived peptides that activate both innate and adaptive immune responses in genetically susceptible individuals (HLA-DQ2/DQ8). Comprehensive malabsorption workup requires understanding of intestinal physiology and targeted diagnostic testing.',
      explanation: `## Celiac Disease Pathophysiology

### Genetic Susceptibility
- **HLA-DQ2** (95% of patients) or **HLA-DQ8** (5%)
- Necessary but not sufficient - 30-40% of population carries these alleles
- Additional environmental/genetic factors determine disease expression

### Immunopathogenesis

**The Gliadin Trigger:**
1. Gluten is incompletely digested in the GI tract
2. Gliadin peptides (33-mer is highly immunogenic) cross epithelial barrier
3. Tissue transglutaminase (tTG) deamidates gliadin
4. Deamidated gliadin binds strongly to HLA-DQ2/DQ8 on APCs

**Immune Response:**
- Adaptive: CD4+ T cells recognize deamidated gliadin → Th1 response → IFN-γ → villous damage
- Innate: IL-15 activates intraepithelial lymphocytes (IELs) → epithelial damage

**Histological Changes (Marsh Classification):**

| Stage | Description |
|-------|-------------|
| 0 | Normal mucosa |
| 1 | Increased IELs (>25/100 enterocytes) |
| 2 | IEL increase + crypt hyperplasia |
| 3a | Partial villous atrophy |
| 3b | Subtotal villous atrophy |
| 3c | Total villous atrophy |

### Clinical Presentations

**Classic Celiac:**
- Diarrhea, steatorrhea, weight loss, failure to thrive
- More common in children

**Non-Classic:**
- Predominant extra-intestinal manifestations
- Iron deficiency anemia (most common)
- Osteoporosis
- Elevated transaminases
- Neurological: peripheral neuropathy, ataxia
- Reproductive: infertility, recurrent miscarriage

**Silent Celiac:**
- Positive serology and histology
- No symptoms (or unrecognized symptoms)

**Potential Celiac:**
- Positive serology, normal biopsy
- May progress to celiac disease

### Diagnosis

**Serological Testing (while on gluten-containing diet):**
- **tTG-IgA**: First-line test (sensitivity 93%, specificity 96%)
- **Total IgA**: Rule out IgA deficiency (10-15× more common in celiac)
- If IgA deficient: Check tTG-IgG or DGP-IgG
- **Endomysial antibody (EMA)**: Very specific, used for confirmation

**Small Bowel Biopsy:**
- Gold standard for diagnosis
- Multiple biopsies from duodenal bulb AND distal duodenum
- Look for villous atrophy, crypt hyperplasia, IEL increase

**HLA Testing:**
- Useful for ruling out celiac (high negative predictive value)
- Not useful for diagnosis (30-40% of population carries DQ2/DQ8)

### Complications

**Refractory Celiac Disease (RCD):**
- Persistent symptoms and villous atrophy despite strict GFD for >12 months
- Type I: Normal IEL phenotype (responds to immunosuppression)
- Type II: Aberrant IEL phenotype (precursor to EATL, poor prognosis)

**Associated Malignancies:**
- Enteropathy-associated T-cell lymphoma (EATL)
- Small bowel adenocarcinoma
- Risk decreases with adherent GFD

## Other Malabsorption Conditions

### Lactose Intolerance

**Types:**
- Primary (adult-type hypolactasia): Common, genetic decline in lactase
- Secondary: Due to mucosal injury (celiac, infection, Crohn's)
- Congenital: Rare, autosomal recessive

**Diagnosis:**
- Lactose hydrogen breath test (gold standard)
- Lactose tolerance test (glucose rise <20 mg/dL = positive)
- Genetic testing (LCT gene variants)

### Small Intestinal Bacterial Overgrowth (SIBO)

**Risk Factors:**
- Motility disorders (diabetic gastroparesis, scleroderma)
- Anatomic abnormalities (blind loops, diverticula)
- Achlorhydria (PPI use, atrophic gastritis)
- Immune deficiency

**Mechanisms of Malabsorption:**
- Bacterial deconjugation of bile acids → fat malabsorption
- B12 consumption by bacteria → B12 deficiency
- Carbohydrate fermentation → gas, diarrhea

**Diagnosis:**
- Glucose or lactulose hydrogen breath test
- Jejunal aspirate culture (>10^5 CFU/mL) - gold standard but invasive

### Pancreatic Exocrine Insufficiency (PEI)

**Causes:**
- Chronic pancreatitis (most common)
- Pancreatic cancer
- Cystic fibrosis
- Pancreatic resection

**Diagnosis:**
- Fecal elastase-1 (<200 μg/g = PEI, <100 = severe)
- 72-hour fecal fat (>7 g/day = steatorrhea)

**Treatment:**
- Pancreatic enzyme replacement therapy (PERT)
- Dose: 40,000-50,000 lipase units per meal
- Take with meals, not before or after`,
      keyTerms: [
        { term: 'HLA-DQ2/DQ8', definition: 'Human leukocyte antigen alleles required for celiac disease development' },
        { term: 'tissue transglutaminase (tTG)', definition: 'Enzyme that deamidates gliadin, creating immunogenic peptides; also the target of celiac antibodies' },
        { term: 'Marsh classification', definition: 'Histological staging system for celiac disease severity' },
        { term: 'intraepithelial lymphocytes (IELs)', definition: 'T lymphocytes within the epithelium; increased in celiac disease (>25/100 enterocytes)' },
        { term: 'refractory celiac disease', definition: 'Persistent symptoms despite 12+ months of strict gluten-free diet; type II has poor prognosis' },
        { term: 'EATL', definition: 'Enteropathy-associated T-cell lymphoma; rare but serious complication of celiac disease' },
        { term: 'fecal elastase', definition: 'Pancreatic enzyme measured in stool to assess exocrine function; <200 indicates insufficiency' },
      ],
      clinicalNotes: 'Always check total IgA when ordering tTG-IgA - IgA deficiency is 10-15x more common in celiac patients and causes false negative serology. Patients must be on a gluten-containing diet for accurate testing. If celiac is strongly suspected but serology is negative, still consider biopsy.',
    },
    4: {
      level: 4,
      summary: 'Celiac disease pathogenesis involves both adaptive (CD4+ T cell-mediated) and innate (IL-15-driven cytotoxic IEL) immune responses. Non-responsive celiac disease requires systematic evaluation including dietary adherence, alternative diagnoses, and surveillance for refractory disease and malignancy.',
      explanation: `## Molecular Pathogenesis of Celiac Disease

### Gluten Structure and Immunogenicity
- Gluten proteins: Gliadins (monomeric) and glutenins (polymeric)
- High proline/glutamine content → resistant to complete digestion
- Key immunogenic peptides:
  - 33-mer gliadin peptide: Contains multiple overlapping epitopes
  - 26-mer glutenin peptide

### Transglutaminase 2 (TG2) Role
- Deamidates glutamine → glutamate in gliadin peptides
- Creates negatively charged peptides with enhanced HLA-DQ2/8 binding
- TG2 also forms covalent complexes with gliadin (target of anti-tTG antibodies)

### Adaptive Immune Response
1. **Antigen presentation:**
   - Deamidated gliadin presented by HLA-DQ2/DQ8+ APCs
   - DQ2: α chain (DQA1*05), β chain (DQB1*02)
   - DQ8: DQA1*03, DQB1*0302

2. **T cell activation:**
   - Gluten-specific CD4+ T cells (lamina propria)
   - Th1 response: IFN-γ → macrophage activation
   - Also Th17 response (IL-17, IL-21)

3. **B cell response:**
   - Anti-gliadin, anti-tTG, anti-deamidated gliadin peptide antibodies
   - IgA deposits in subepithelial layer

### Innate Immune Response
- IL-15: Central cytokine in celiac pathogenesis
- Sources: Epithelial cells, dendritic cells, macrophages
- Effects:
  - Activates IELs (CD8+ cytotoxic T lymphocytes)
  - Upregulates NKG2D on IELs
  - Induces MICA/MICB on enterocytes (stress ligands)
  - IELs kill enterocytes via NKG2D-MICA/B interaction

### Tissue Damage Mechanisms
1. **Matrix metalloproteinases (MMPs):** Degrade extracellular matrix
2. **IEL-mediated cytotoxicity:** Perforin, granzyme, Fas-FasL
3. **Epithelial apoptosis:** Caspase activation
4. **Crypt hyperplasia:** Compensatory response, Wnt signaling

## Non-Responsive Celiac Disease (NRCD)

### Definition
- Persistent symptoms, signs, or laboratory abnormalities despite 6-12 months of GFD
- Occurs in 7-30% of celiac patients

### Systematic Evaluation

**Step 1: Verify Celiac Diagnosis**
- Review original serology and histology
- Consider alternative diagnoses (especially if atypical presentation)

**Step 2: Assess Dietary Adherence**
- Dietary interview by experienced dietitian
- Sources of gluten contamination:
  - Cross-contact in food preparation
  - Hidden gluten in medications, supplements
  - Communion wafers, Play-Doh
- Detectable gluten immunogenic peptides (GIP) in urine/stool

**Step 3: Rule Out Associated Conditions**
- Microscopic colitis (30% overlap with celiac)
- Pancreatic insufficiency
- SIBO
- Lactose/fructose intolerance
- Crohn's disease
- Irritable bowel syndrome

**Step 4: Repeat Biopsy**
- Assess for villous recovery vs. persistent damage
- IEL immunophenotyping (for RCD type II)

### Refractory Celiac Disease

**Type I RCD:**
- Persistent villous atrophy, increased IELs
- Normal IEL phenotype (CD3+, CD8+)
- Treatment: Budesonide, azathioprine, potential for anti-IL-15

**Type II RCD:**
- Aberrant IEL phenotype: Surface CD3-, CD8-, intracellular CD3+
- Clonal TCR rearrangement
- Represents intraepithelial lymphoma in situ
- 5-year survival: ~50%
- Treatment: Cladribine, autologous stem cell transplant (investigational)

### Surveillance for Malignancy
- Capsule endoscopy or CT/MR enterography for small bowel evaluation
- PET-CT if lymphoma suspected
- Low threshold for repeat endoscopy with biopsies

## Advanced Malabsorption Topics

### Bile Acid Malabsorption (BAM)

**Classification:**
- Type 1: Ileal disease/resection (Crohn's, surgical)
- Type 2: Primary/idiopathic (30% of "IBS-D")
- Type 3: Secondary (cholecystectomy, SIBO, celiac)

**Diagnosis:**
- SeHCAT scan (not available in US)
- Serum C4 (7α-hydroxy-4-cholesten-3-one) - elevated
- Fecal bile acids
- Empiric trial of bile acid sequestrant

**Treatment:**
- Bile acid sequestrants: Cholestyramine, colesevelam
- Start low dose (GI side effects), titrate

### Protein-Losing Enteropathy

**Causes:**
- Lymphatic obstruction: Lymphangiectasia, lymphoma, constrictive pericarditis
- Mucosal disease: Celiac, IBD, giant hypertrophic gastritis (Ménétrier's)
- Erosive/ulcerative: IBD, NSAID enteropathy

**Diagnosis:**
- Low serum albumin, hypogammaglobulinemia, lymphopenia
- Fecal alpha-1 antitrypsin clearance (gold standard)

**Treatment:**
- Treat underlying cause
- Nutritional support (medium-chain triglycerides for lymphatic)

### Short Bowel Syndrome

**Definition:**
- Functional intestinal length insufficient for adequate absorption
- Usually <200 cm of remaining small bowel

**Management:**
- Optimize diet (small frequent meals, limit simple sugars)
- H2 blockers/PPI (reduce gastric hypersecretion)
- Antidiarrheals
- Parenteral nutrition if needed
- Teduglutide (GLP-2 analog): Promotes intestinal adaptation`,
      keyTerms: [
        { term: 'NKG2D-MICA/B', definition: 'Receptor-ligand interaction mediating IEL-induced epithelial cytotoxicity in celiac disease' },
        { term: 'IL-15', definition: 'Cytokine central to celiac pathogenesis; drives IEL activation and epithelial destruction' },
        { term: 'gluten immunogenic peptides (GIP)', definition: 'Detectable gluten fragments in urine/stool; used to assess dietary adherence' },
        { term: 'aberrant IEL phenotype', definition: 'Surface CD3-, intracellular CD3+ IELs; defines RCD type II and carries malignancy risk' },
        { term: 'SeHCAT scan', definition: 'Nuclear medicine test for bile acid malabsorption; not available in US' },
        { term: 'C4 (7α-hydroxy-4-cholesten-3-one)', definition: 'Bile acid precursor; elevated in bile acid malabsorption' },
        { term: 'alpha-1 antitrypsin clearance', definition: 'Test for protein-losing enteropathy; measures fecal protein loss' },
      ],
      clinicalNotes: 'Non-responsive celiac disease is common - always start with diet assessment before extensive workup. Gluten immunogenic peptides (GIP) in urine can detect inadvertent gluten exposure within days. RCD type II is a lymphoma precursor - early recognition and referral to specialized centers is critical.',
    },
    5: {
      level: 5,
      summary: 'Contemporary celiac disease management integrates serological monitoring, mucosal healing assessment, and novel therapies in development. Precision diagnosis of malabsorption requires integration of clinical presentation, physiological testing, and tissue-based diagnosis.',
      explanation: `## Celiac Disease: State of the Art

### Diagnosis in Special Situations

**Seronegative Celiac Disease:**
- 2-3% of biopsy-proven celiac patients
- Causes: IgA deficiency, immunosuppression, low gluten intake
- Approach:
  - Confirm adequate gluten intake
  - Check IgA level, DGP-IgG, tTG-IgG
  - HLA-DQ2/DQ8 testing (negative excludes celiac)
  - Consider capsule endoscopy for patchy disease

**On Gluten-Free Diet at Presentation:**
- Options:
  1. Gluten challenge: 3g gluten/day × 2-6 weeks before testing
  2. HLA testing: Negative DQ2/DQ8 excludes celiac
  3. Empiric GFD with close monitoring

**Pediatric No-Biopsy Diagnosis (ESPGHAN 2020):**
- Symptomatic child with:
  - tTG-IgA >10× upper limit of normal
  - Positive EMA-IgA (separate sample)
  - HLA-DQ2/DQ8 positive
- Adult guidelines still recommend biopsy confirmation

### Monitoring and Follow-Up

**Serological Response:**
- tTG-IgA normalizes in 6-12 months with GFD
- Persistently elevated: Consider dietary non-adherence

**Mucosal Healing:**
- Histological improvement may lag behind clinical/serological response
- Complete mucosal healing (Marsh 0-1) in ~50% at 1 year
- Persistent villous atrophy: Risk factor for complications

**Bone Health:**
- DEXA at diagnosis if clinical risk factors
- Repeat after 1-2 years of GFD
- Vitamin D optimization

**Micronutrient Assessment:**
- Iron, B12, folate, vitamin D, zinc
- Check at diagnosis, after 3-6 months GFD, then annually

### Emerging Therapies

**Gluten-Degrading Enzymes:**
- Latiglutenase (ALV003): Combination endopeptidase
- Degrades gluten in stomach before small bowel exposure
- Phase 2 trials: Reduced symptoms and histological damage
- Adjunct to GFD, not replacement

**Tight Junction Modulators:**
- Larazotide acetate: Zonulin antagonist
- Prevents gluten-induced intestinal permeability
- Phase 3: Mixed results, symptom improvement but not histology

**Immune Modulators:**
- Anti-IL-15 antibodies: Target innate immune response
- Currently in trials for RCD type II

**Tolerogenic Approaches:**
- Nexvax2: Peptide vaccine for desensitization
- Discontinued after phase 2 failure (2019)
- Other vaccine approaches in development

### Quality of Life and Psychosocial

- GFD burden: Cost, social isolation, dining challenges
- Anxiety about accidental exposure
- Depression more common in celiac patients
- Dietitian and support group involvement improves outcomes

## Advanced Malabsorption Testing

### Carbohydrate Malabsorption Testing

**Hydrogen Breath Tests:**
| Substrate | Target Condition | Positive Criteria |
|-----------|-----------------|-------------------|
| Lactose | Lactase deficiency | H2 rise >20 ppm |
| Fructose | Fructose malabsorption | H2 rise >20 ppm |
| Glucose | SIBO | Early H2 rise (<90 min) |
| Lactulose | SIBO | Double peak or early rise |

**Limitations:**
- 15-20% of population are hydrogen non-producers
- Methane-predominant SIBO may not elevate H2
- Need to measure both H2 and CH4

### Fat Malabsorption

**Quantitative Fecal Fat:**
- Gold standard: 72-hour collection on 100g fat/day diet
- Steatorrhea: >7 g fat/day
- Rarely performed due to patient burden

**Qualitative Stool Testing:**
- Sudan stain: Semiquantitative
- Acid steatocrit

**Serum Markers:**
- Vitamins A, D, E, K (fat-soluble)
- Beta-carotene (low in fat malabsorption)

### Small Bowel Evaluation

**Capsule Endoscopy:**
- Indications: Suspected small bowel pathology (RCD, Crohn's, NSAID enteropathy)
- Assess for ulcers, strictures, tumors, villous atrophy

**Device-Assisted Enteroscopy:**
- Therapeutic capability (biopsy, dilation, hemostasis)
- Used when capsule shows findings requiring intervention

**CT/MR Enterography:**
- Evaluate for Crohn's, tumors, thickening
- Less sensitive for mucosal detail than capsule

### Disaccharidase Assay

**Method:**
- Small bowel biopsy homogenized
- Enzyme activity measured (lactase, sucrase, maltase, isomaltase)
- Useful for congenital disaccharidase deficiencies

### Intestinal Permeability Testing

**Lactulose-Mannitol Test:**
- Lactulose (large, paracellular) / Mannitol (small, transcellular)
- Elevated L/M ratio suggests increased permeability
- Used primarily in research settings

## Precision Approach to Malabsorption

### Clinical Algorithm

1. **Characterize malabsorption:**
   - Fat (steatorrhea): Pancreatic, biliary, mucosal disease
   - Carbohydrate (bloating, diarrhea): Disaccharidase deficiency, SIBO
   - Protein (edema, hypoalbuminemia): Protein-losing enteropathy

2. **Anatomic localization:**
   - Proximal (iron, folate, fat) vs. distal (B12, bile acids)

3. **Targeted testing:**
   - Mucosal disease: Serology, endoscopy, biopsy
   - Pancreatic: Fecal elastase, secretin test
   - Biliary: Bile acid markers, therapeutic trial
   - SIBO: Breath testing, empiric antibiotics

4. **Treat underlying cause**

5. **Nutritional repletion:**
   - Replace deficient micronutrients
   - Consider enteral/parenteral support if severe

### Nutritional Consequences Summary

| Nutrient | Clinical Manifestation | Diagnostic Test |
|----------|----------------------|-----------------|
| Iron | Microcytic anemia, fatigue | Ferritin, iron studies |
| B12 | Macrocytic anemia, neuropathy | B12, MMA, homocysteine |
| Folate | Macrocytic anemia | RBC folate |
| Vitamin D | Osteomalacia, osteoporosis | 25-OH vitamin D, PTH |
| Vitamin K | Coagulopathy | PT/INR |
| Zinc | Dermatitis, dysgeusia | Serum zinc |
| Magnesium | Arrhythmia, tetany | Serum magnesium |`,
      keyTerms: [
        { term: 'latiglutenase', definition: 'Investigational gluten-degrading enzyme combination (ALV003) as adjunct therapy for celiac disease' },
        { term: 'larazotide acetate', definition: 'Zonulin antagonist; prevents gluten-induced intestinal permeability' },
        { term: 'mucosal healing', definition: 'Histological normalization (Marsh 0-1); increasingly recognized as treatment target in celiac disease' },
        { term: 'ESPGHAN criteria', definition: 'European pediatric guidelines allowing no-biopsy diagnosis with high tTG-IgA + EMA + HLA' },
        { term: 'lactulose-mannitol ratio', definition: 'Research test for intestinal permeability; elevated ratio indicates "leaky gut"' },
        { term: 'disaccharidase assay', definition: 'Biopsy-based measurement of brush border enzyme activities' },
        { term: 'methane-predominant SIBO', definition: 'SIBO variant with methane production; associated with constipation; may not elevate hydrogen on breath test' },
      ],
      clinicalNotes: `Key practice points:
1. The no-biopsy pathway is established in pediatrics (ESPGHAN) but most adult guidelines still require biopsy for diagnosis
2. Seronegative celiac disease exists - HLA testing can effectively rule out celiac in uncertain cases
3. Mucosal healing is emerging as a treatment target; persistent villous atrophy correlates with complications
4. Gluten immunogenic peptides (GIP) in urine/stool represent a novel adherence monitoring tool
5. Latiglutenase and larazotide are closest to clinical availability but remain adjunctive, not curative
6. For malabsorption workup, think anatomically: proximal vs. distal, luminal vs. mucosal vs. post-mucosal
7. SIBO breath testing requires measuring both hydrogen AND methane for adequate sensitivity`,
    },
  },

  media: [
    {
      id: 'celiac-villous-atrophy',
      type: 'histology',
      filename: 'celiac-histology-comparison.jpg',
      title: 'Celiac Disease Histology',
      description: 'Comparison of normal villi vs. villous atrophy in celiac disease',
    },
    {
      id: 'celiac-pathogenesis',
      type: 'diagram',
      filename: 'celiac-pathogenesis.svg',
      title: 'Celiac Disease Pathogenesis',
      description: 'Diagram showing gluten processing, tTG deamidation, and immune response',
    },
    {
      id: 'malabsorption-algorithm',
      type: 'diagram',
      filename: 'malabsorption-diagnostic-algorithm.svg',
      title: 'Malabsorption Diagnostic Algorithm',
      description: 'Clinical approach to evaluating malabsorption',
    },
  ],

  citations: [
    {
      id: 'acg-celiac-2023',
      type: 'article',
      title: 'ACG Clinical Guideline: Diagnosis and Management of Celiac Disease',
      authors: ['Rubio-Tapia, A.', 'Hill, I.D.', 'Semrad, C.'],
      source: 'American Journal of Gastroenterology',
    },
    {
      id: 'espghan-2020',
      type: 'article',
      title: 'European Society Paediatric Gastroenterology, Hepatology and Nutrition Guidelines for Diagnosing Coeliac Disease 2020',
      source: 'Journal of Pediatric Gastroenterology and Nutrition',
    },
    {
      id: 'nejm-celiac-review',
      type: 'article',
      title: 'Celiac Disease',
      source: 'New England Journal of Medicine',
    },
  ],

  crossReferences: [
    { targetId: 'condition-inflammatory-bowel-disease', targetType: 'condition', relationship: 'related', label: 'Inflammatory Bowel Disease' },
    { targetId: 'condition-pancreatitis', targetType: 'condition', relationship: 'related', label: 'Chronic Pancreatitis' },
    { targetId: 'structure-small-intestine', targetType: 'structure', relationship: 'related', label: 'Small Intestine Anatomy' },
    { targetId: 'procedure-upper-endoscopy', targetType: 'topic', relationship: 'see-also', label: 'Upper Endoscopy' },
  ],

  tags: {
    systems: ['digestive', 'gastrointestinal', 'immune'],
    topics: ['gastroenterology', 'immunology', 'nutrition', 'pathology'],
    keywords: ['celiac', 'gluten', 'malabsorption', 'villous atrophy', 'SIBO', 'lactose intolerance', 'steatorrhea'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'pediatrics'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default celiacAndMalabsorption;
