/**
 * Celiac Disease - Comprehensive Educational Content
 *
 * Covers gluten-sensitive enteropathy pathophysiology and management.
 */

import { EducationalContent } from '../../types';

export const celiac: EducationalContent = {
  id: 'condition-celiac',
  type: 'condition',
  name: 'Celiac Disease',
  alternateNames: ['Celiac Sprue', 'Gluten-Sensitive Enteropathy', 'Coeliac Disease'],
  hpoId: 'HP:0002608',

  levels: {
    1: {
      level: 1,
      summary: 'Celiac disease is a condition where eating gluten damages the small intestine and prevents proper nutrient absorption.',
      explanation: `Celiac disease is a digestive disorder where the immune system reacts to gluten, a protein found in wheat, barley, and rye. This reaction damages the small intestine.

**What is gluten:**
- Protein found in wheat, barley, and rye
- Found in bread, pasta, beer, and many processed foods
- Acts like glue helping food maintain shape

**What happens in celiac disease:**
- Gluten triggers an immune response
- The immune system attacks the small intestine
- Tiny finger-like projections (villi) become damaged
- Nutrients cannot be absorbed properly
- Can cause digestive problems and other symptoms

**Common symptoms:**
- Diarrhea or constipation
- Bloating and gas
- Stomach pain
- Weight loss
- Fatigue
- Skin rash (dermatitis herpetiformis)

**Who is at risk:**
- Family history of celiac disease
- Type 1 diabetes
- Autoimmune thyroid disease
- Down syndrome

**Treatment:**
- Strict gluten-free diet for life
- Symptoms improve within weeks
- Intestine heals over months to years
- No medications needed`,
      keyTerms: [
        { term: 'gluten', definition: 'Protein in wheat, barley, and rye that triggers celiac disease' },
        { term: 'villi', definition: 'Tiny finger-like projections in the small intestine that absorb nutrients' },
        { term: 'small intestine', definition: 'Part of the digestive system where nutrients are absorbed' },
        { term: 'gluten-free', definition: 'Diet excluding all sources of gluten' },
      ],
      analogies: [
        'Celiac disease is like a weed killer that accidentally kills the grass - the immune system attacking gluten also damages the intestine.',
        'Think of villi as shag carpet; celiac disease wears it down to flat carpet, reducing absorption surface.',
      ],
      examples: [
        'A child with poor growth, diarrhea, and irritability may have undiagnosed celiac disease.',
        'An adult with iron deficiency anemia that does not respond to supplements may have celiac disease.',
      ],
    },
    2: {
      level: 2,
      summary: 'Celiac disease is an immune-mediated systemic disorder triggered by gluten in genetically susceptible individuals, characterized by small intestinal mucosal damage, malabsorption, and variable clinical presentations.',
      explanation: `## Pathophysiology

**Gluten proteins:**
- Gliadin (wheat), hordein (barley), secalin (rye)
- Resistant to digestive enzymes
- Cross intestinal barrier and undergo deamidation

**Immune response:**
- Deamidated gliadin presented by HLA-DQ2 or HLA-DQ8
- Activation of CD4+ T cells
- Production of autoantibodies (tTG, EMA)
- Inflammation and villous atrophy

**Genetic susceptibility:**
- HLA-DQ2 (90% of patients)
- HLA-DQ8 (5-10% of patients)
- HLA typing has high negative predictive value

## Clinical Presentations

**Classic (intestinal):**
- Chronic diarrhea
- Steatorrhea (fatty stools)
- Failure to thrive (children)
- Weight loss, malnutrition

**Non-classic:**
- Iron deficiency anemia
- Osteoporosis
- Dermatitis herpetiformis
- Neurological symptoms (ataxia, neuropathy)
- Infertility

**Asymptomatic (silent):**
- Identified by screening
- Positive serology and biopsy
- No obvious symptoms

**Potential:**
- Positive genetics and serology
- Normal biopsy
- May progress to celiac disease

## Associated Conditions

- Type 1 diabetes (3-8%)
- Autoimmune thyroid disease
- Down syndrome
- Turner syndrome
- Selective IgA deficiency
- Primary biliary cholangitis

## Diagnosis

**Serology (on gluten-containing diet):**
- tTG-IgA (first-line, sensitivity >90%)
- EMA-IgA (high specificity)
- DGP-IgA/IgG (useful if IgA deficient)
- Total IgA (to identify IgA deficiency)

**Endoscopy with biopsy:**
- Villous atrophy
- Crypt hyperplasia
- Intraepithelial lymphocytosis
- Marsh classification

**HLA typing:**
- DQ2/DQ8 negative makes celiac unlikely
- Useful for ruling out disease`,
      keyTerms: [
        { term: 'tTG', definition: 'Tissue transglutaminase; autoantigen in celiac disease' },
        { term: 'EMA', definition: 'Anti-endomysial antibodies; highly specific for celiac disease' },
        { term: 'villous atrophy', definition: 'Flattening of intestinal villi seen on biopsy' },
        { term: 'HLA-DQ2', definition: 'Human leukocyte antigen genetic marker associated with celiac disease' },
      ],
      analogies: [
        'The HLA molecules in celiac disease act like a docking station that only fits gluten peptides when they are modified a certain way.',
        'The immune response in celiac is like friendly fire - attacking what it thinks is an invader but damaging the body instead.',
      ],
    },
    3: {
      level: 3,
      summary: 'Celiac disease involves HLA-restricted presentation of deamidated gluten peptides leading to Th1 immune responses, villous atrophy with crypt hyperplasia, and systemic manifestations, diagnosed by serology and histology, managed by strict gluten-free diet.',
      explanation: `## Immunopathogenesis

### Gluten Processing
1. Gluten peptides resist gastric and pancreatic proteases
2. Cross epithelial barrier via transcellular/transcellular routes
3. Tissue transglutaminase (tTG) deamidates glutamine to glutamic acid
4. Increases binding affinity to HLA-DQ2/DQ8

### Adaptive Immune Response
- CD4+ T cells recognize deamidated gliadin
- Th1 response: IFN-gamma, TNF-alpha
- Cytotoxic T cells damage enterocytes
- B cells produce anti-tTG and anti-gliadin antibodies

### Innate Immune Response
- IL-15 upregulation
- Intraepithelial lymphocyte expansion
- NK cell activation
- Epithelial cell killing

### Tissue Damage
- Villous blunting and atrophy
- Crypt hyperplasia (compensatory)
- Increased IELs (intraepithelial lymphocytes)
- Reduced absorptive surface area

## Marsh Classification

**Stage 0 (Pre-infiltrative):**
- Normal mucosa
- Increased IELs only

**Stage 1 (Infiltrative):**
- Increased IELs
- Normal villi

**Stage 2 (Hyperplastic):**
- Increased IELs
- Crypt hyperplasia
- Normal villi

**Stage 3 (Destructive):**
- Increased IELs
- Crypt hyperplasia
- Villous atrophy (partial, subtotal, total)

## Complications

**Nutritional deficiencies:**
- Iron, folate, B12 deficiency
- Fat-soluble vitamins (A, D, E, K)
- Calcium and magnesium

**Gastrointestinal:**
- Small intestinal bacterial overgrowth
- Ulcerative jejunitis
- Enteropathy-associated T-cell lymphoma

**Other:**
- Refractory celiac disease
- Neurological complications
- Reduced quality of life

## Management

**Gluten-free diet:**
- Lifelong strict adherence
- Avoid wheat, barley, rye, triticale
- Oats generally safe if uncontaminated
- Nutritionist consultation essential

**Follow-up:**
- Symptom assessment
- Serology normalization (6-12 months)
- Nutritional monitoring
- Bone density screening

**Refractory celiac disease:**
- Persistent symptoms despite GFD
- Type I: Normal IEL immunophenotype
- Type II: Aberrant IELs (poor prognosis)
- May require immunosuppression`,
      keyTerms: [
        { term: 'refractory celiac disease', definition: 'Persistent villous atrophy despite strict gluten-free diet' },
        { term: 'IELs', definition: 'Intraepithelial lymphocytes; increased in celiac disease' },
        { term: 'deamidation', definition: 'Conversion of glutamine to glutamic acid by tissue transglutaminase' },
        { term: 'enteropathy-associated T-cell lymphoma', definition: 'Rare complication of long-standing celiac disease' },
      ],
      clinicalNotes: 'Diagnosis requires serology while on gluten-containing diet. AGA recommends 4-6 weeks of gluten challenge (1-2 slices bread daily) if already on GFD. Always check total IgA; if deficient, use IgG-based tests. Screen first-degree relatives.',
    },
    4: {
      level: 4,
      summary: 'Advanced celiac disease understanding encompasses the spectrum of gluten-related disorders, extra-intestinal manifestations including neurological and dermatologic, complex diagnostic scenarios, and emerging therapies beyond the gluten-free diet.',
      explanation: `## Gluten-Related Disorders Spectrum

**Celiac disease:**
- Autoimmune
- HLA-DQ2/DQ8 dependent
- Genetic predisposition
- Mucosal damage
- Autoantibodies present

**Wheat allergy:**
- IgE-mediated (immediate) or non-IgE-mediated
- Not HLA-dependent
- Can affect any organ
- Avoidance of wheat only (not all gluten)

**Non-celiac gluten sensitivity (NCGS):**
- Symptoms improve on GFD
- No celiac-specific antibodies
- Normal biopsy
- HLA-DQ2/DQ8 not required
- Pathophysiology unclear

## Extra-Intestinal Manifestations

**Dermatitis herpetiformis:**
- IgA deposition in dermal papillae
- Papulovesicular rash on extensor surfaces
- Almost all have enteropathy
- Responds to GFD and dapsone

**Neurological:**
- Gluten ataxia: Purkinje cell antibodies
- Peripheral neuropathy
- Epilepsy with cerebral calcifications
- Encephalopathy

**Hepatic:**
- Elevated transaminases
- Autoimmune hepatitis overlap
- Primary biliary cholangitis association

**Reproductive:**
- Infertility
- Recurrent miscarriage
- Intrauterine growth restriction

## Complex Diagnostic Scenarios

**IgA deficiency:**
- 10-15x more common in celiac patients
- Use IgG-tTG or IgG-DGP
- May need biopsy if serology equivocal

**Already on GFD:**
- Gluten challenge required
- 4-6 weeks minimum, up to 8 weeks if needed
- 10-15g gluten daily
- Monitor symptoms and serology

**Potential celiac:**
- Positive serology
- Normal biopsy (Marsh 0-1)
- Monitor for progression
- Consider HLA testing

## Refractory Celiac Disease

**Definition:**
- Persistent symptoms
- Persistent villous atrophy (Marsh 3)
- After 12 months strict GFD
- Excluding other causes

**Type I RCD:**
- Normal IEL immunophenotype (CD3+, CD8+)
- Better prognosis
- May respond to steroids, immunosuppressants

**Type II RCD:**
- Aberrant IELs (CD3+, CD8-)
- Clonal T-cell population
- High risk of EATL
- Poor prognosis
- May need cladribine, autologous stem cell transplant

**Differential:**
- Hidden gluten exposure (most common)
- Microscopic colitis
- SIBO
- Pancreatic insufficiency
- Lactose intolerance
- IBS

## Emerging Therapies

**Enzyme therapy:**
- ALV003 (latiglutenase) - glutenases
- Break down gluten before it reaches intestine
- For accidental exposure, not replacement for GFD

**Sequestrants:**
- Polymer binds gluten
- Prevents absorption

**Immunotherapy:**
- Nexvax2 (peptide immunotherapy)
- Desensitization to immunodominant peptides
- Trials ongoing

**Barrier agents:**
- Larazotide acetate (zonulin antagonist)
- Tightens intestinal junctions
- Prevents gluten crossing barrier

**Vaccine:**
- Early development
- Would induce tolerance to gluten`,
      keyTerms: [
        { term: 'NCGS', definition: 'Non-celiac gluten sensitivity; symptoms with gluten without celiac markers' },
        { term: 'EATL', definition: 'Enteropathy-associated T-cell lymphoma; complication of refractory celiac' },
        { term: 'latiglutenase', definition: 'Enzyme combination to break down gluten peptides' },
        { term: 'larazotide', definition: 'Zonulin antagonist that tightens intestinal tight junctions' },
      ],
      clinicalNotes: 'Always test for celiac before starting GFD. Dermatitis herpetiformis is the skin manifestation of celiac disease. Type II RCD carries poor prognosis with high mortality. New therapies aim to protect against accidental gluten exposure, not replace GFD.',
    },
    5: {
      level: 5,
      summary: 'Cutting-edge celiac research includes single-cell analysis of intestinal mucosa, biomarkers for monitoring gluten-free diet adherence, microbiome interactions, and the immunological intersection of innate and adaptive responses in the pathogenesis of gluten-triggered enteropathy.',
      explanation: `## Advanced Immunology

### Single-Cell Sequencing Insights
**Intraepithelial lymphocyte subsets:**
- CD4+ and CD8+ T cells
- Gamma-delta T cells
- NK cells
- Receptor repertoire analysis

**Epithelial cell responses:**
- Stress molecules (MICA, MICB)
- IL-15 production
- Tight junction protein alterations

**Cytokine networks:**
- IL-15 central role
- IL-21 production by T cells
- Type I interferon signatures

### Gluten Peptide Immunology
**Immunodominant peptides:**
- Alpha-gliadin 33-mer (most immunogenic)
- Omega-gliadin peptides
- Barley and rye homologs

**HLA-DQ2/DQ8 binding:**
- Deamidation at specific positions
- Anchor residues for binding pockets
- Why only 2-3% of HLA-positive develop disease

## Novel Biomarkers

**Gluten immunogenic peptides (GIP):**
- Detectable in stool, urine
- Indicate recent gluten ingestion
- Objective measure of GFD adherence
- Commercial tests available

**Cytokine release assays:**
- IFN-gamma release to gluten peptides
- Potential for diagnosis and monitoring
- Not yet standardized for clinical use

**MicroRNA profiling:**
- miRNA signatures in tissue and blood
- Potential diagnostic/prognostic markers

## Microbiome Interactions

**Dysbiosis in celiac disease:**
- Reduced Bifidobacterium, Lactobacillus
- Increased Bacteroides, E. coli
- Reduced diversity

**Role in pathogenesis:**
- Gluten processing by bacteria
- Immune modulation
- Barrier function effects

**Probiotic potential:**
- Bifidobacterium strains
- Enzymatic gluten degradation
- Anti-inflammatory effects

## Epidemiology and Triggers

**Prevalence:**
- 1% worldwide (increasing)
- Varies by region and screening approach
- More common in females (2:1)

**Environmental factors:**
- Infant feeding practices
- Timing of gluten introduction
- Infections (rotavirus, adenovirus)
- Antibiotic use
- Cesarean delivery
- Hygiene hypothesis

**Protective factors:**
- Breastfeeding
- Timing of gluten introduction (4-6 months)
- High gluten dose at weaning

## Quality of Life and Burden

**Gluten-free diet challenges:**
- Cost (3x more expensive)
- Social restrictions
- Cross-contamination risk
- Travel difficulties
- Persistent symptoms despite GFD (30%)

**Psychological impact:**
- Anxiety, depression
- Eating disorders
- Reduced quality of life
- Support groups valuable

**Long-term outcomes:**
- Increased mortality in undiagnosed/active disease
- Normal life expectancy with strict GFD
- Cancer risk normalizes

## Future Directions

**Personalized medicine:**
- Genetic risk scoring
- Predictive modeling
- Individualized monitoring

**Prevention:**
- High-risk infant studies
- Gluten introduction strategies
- Microbiome modulation

**Therapeutics:**
- Multi-target approaches
- Combination therapies
- Restoration of tolerance`,
      keyTerms: [
        { term: 'GIP', definition: 'Gluten immunogenic peptides; detectable markers of gluten ingestion' },
        { term: 'MICA/MICB', definition: 'Stress-induced molecules recognized by gamma-delta T cells and NK cells' },
        { term: 'cytokine release assay', definition: 'Test measuring T-cell response to gluten peptides' },
        { term: '33-mer peptide', definition: 'Most immunogenic gluten peptide resistant to digestion' },
      ],
      clinicalNotes: 'GIP testing can objectively assess GFD adherence when serology negative but symptoms persist. Single-cell transcriptomics are revealing new therapeutic targets. Prevention trials in high-risk infants are ongoing. Multi-omics approaches may enable personalized management.',
    },
  },

  media: [
    {
      id: 'celiac-biopsy',
      type: 'image',
      filename: 'celiac-villous-atrophy.jpg',
      title: 'Small Intestinal Biopsy in Celiac Disease',
      description: 'Comparison of normal villi and villous atrophy',
    },
  ],

  citations: [
    {
      id: 'aga-celiac-2023',
      type: 'article',
      title: 'ACG Clinical Guidelines: Diagnosis and Management of Celiac Disease',
      source: 'American Journal of Gastroenterology',
    },
  ],

  crossReferences: [
    { targetId: 'condition-dermatitis-herpetiformis', targetType: 'condition', relationship: 'related', label: 'Dermatitis Herpetiformis' },
  ],

  tags: {
    systems: ['gastrointestinal', 'immune'],
    topics: ['gastroenterology', 'autoimmune', 'nutrition'],
    keywords: ['celiac', 'gluten', 'gliadin', 'villous atrophy', 'gluten-free'],
    clinicalRelevance: 'high',
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default celiac;
