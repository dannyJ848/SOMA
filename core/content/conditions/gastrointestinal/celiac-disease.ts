/**
 * Celiac Disease - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const celiacDisease: EducationalContent = {
  id: 'condition-celiac',
  type: 'condition',
  name: 'Celiac Disease',
  alternateNames: ['Celiac Sprue', 'Gluten-Sensitive Enteropathy', 'Coeliac Disease'],
  hpoId: 'HP:0002027',

  levels: {
    1: {
      level: 1,
      summary: 'Celiac disease is an autoimmune condition where eating gluten damages the small intestine, causing digestive problems and nutrient deficiencies.',
      explanation: `When someone with celiac disease eats gluten (a protein in wheat, barley, and rye), their body's immune system attacks the small intestine.

**Symptoms:**
- Diarrhea, bloating, gas
- Abdominal pain
- Weight loss
- Fatigue
- Anemia

**In children:**
- Poor growth
- Delayed puberty

**Treatment:** Strict gluten-free diet for life

**Gluten-containing foods:**
- Bread, pasta, cereal
- Beer (made from barley)
- Many processed foods

**Safe foods:**
- Rice, corn, quinoa
- Potatoes
- Fruits, vegetables
- Meat, fish, eggs`,
      keyTerms: [
        { term: 'gluten', definition: 'A protein found in wheat, barley, and rye that triggers celiac disease' },
        { term: 'autoimmune', definition: 'When the immune system mistakenly attacks the body\'s own tissues' },
        { term: 'small intestine', definition: 'The part of the digestive tract where most nutrients are absorbed' },
      ],
      analogies: ['Your small intestine is like a shag carpet with villi. Celiac disease makes it like a flat hardwood floor—less surface area to absorb nutrients.'],
      examples: ['A child who is not growing well and has frequent diarrhea might need testing for celiac disease.'],
    },
    2: {
      level: 2,
      summary: 'Celiac disease is an autoimmune enteropathy triggered by gluten ingestion, diagnosed by serology and intestinal biopsy, and managed with lifelong gluten-free diet to prevent complications.',
      explanation: `## Pathophysiology
- Genetic predisposition (HLA-DQ2 or HLA-DQ8)
- Gluten triggers immune response
- Villous atrophy leads to malabsorption
- Autoantibodies produced

## Diagnosis
**Serology (while on gluten-containing diet):**
- tTG-IgA (tissue transglutaminase) - first-line
- Total IgA level (to rule out deficiency)
- DGP-IgG (if IgA deficient)
- EMA-IgA (confirmatory)

**Intestinal Biopsy:**
- Esophagogastroduodenoscopy (EGD) with duodenal biopsies
- Villous atrophy, crypt hyperplasia, intraepithelial lymphocytes

**Marsh Classification:**
- Type 0: Normal
- Type 1: Increased IELs
- Type 2: Crypt hyperplasia
- Type 3: Villous atrophy (mild, marked, total)

## Treatment
- Strict, lifelong gluten-free diet
- Avoid wheat, barley, rye
- Oats (only certified gluten-free)
- Nutritional support for deficiencies`,
      keyTerms: [
        { term: 'tTG-IgA', definition: 'Tissue transglutaminase antibody; primary screening test for celiac' },
        { term: 'villous atrophy', definition: 'Flattening of intestinal villi, reducing absorption surface' },
        { term: 'HLA-DQ2/DQ8', definition: 'Genetic markers present in nearly all celiac patients' },
      ],
    },
    3: {
      level: 3,
      summary: 'Celiac disease presents with diverse manifestations including classic malabsorption, extraintestinal features, and silent/asymptomatic forms, requiring lifelong gluten avoidance to prevent complications including malignancy.',
      explanation: `## Clinical Presentations
**Classic (children):**
- Diarrhea, failure to thrive, abdominal distension
- typically 6-24 months of age after gluten introduction

**Non-classic (adults):**
- Iron deficiency anemia
- Osteoporosis
- Fatigue, dyspepsia
- Elevated liver enzymes

**Extraintestinal:**
- Dermatitis herpetiformis (blistering rash)
- Neurological: ataxia, peripheral neuropathy
- Reproductive: infertility, recurrent miscarriage
- Arthritis, oral ulcers

**Silent:** Positive serology with minimal symptoms

## Complications
- Osteoporosis (calcium, vitamin D malabsorption)
- Iron deficiency anemia
- Vitamin deficiencies (D, B12, folate)
- Hyposplenism
- Enteropathy-associated T-cell lymphoma (EATL)
- Small intestinal adenocarcinoma
- Ulcerative jejunitis

## Diagnostic Considerations
**Must be on gluten-containing diet:**
- At least 4-6 weeks of gluten equivalent to 2+ slices of bread daily
- False negatives if already gluten-free

**HLA testing:**
- Negative HLA-DQ2/DQ8 rules out celiac (99% NPV)
- Used when already gluten-free or diagnostic uncertainty`,
      keyTerms: [
        { term: 'dermatitis herpetiformis', definition: 'Itchy blistering skin rash associated with celiac disease' },
        { term: 'EATL', definition: 'Enteropathy-associated T-cell lymphoma; rare lymphoma complicating celiac' },
        { term: 'hyposplenism', definition: 'Reduced spleen function seen in some celiac patients' },
      ],
      clinicalNotes: 'Non-responsive celiac: evaluate for dietary indiscretion (most common), refractory celiac, microscopic colitis, or IBD. Consider tTG normalization as treatment goal.',
    },
    4: {
      level: 4,
      summary: 'Celiac disease management requires comprehensive nutritional assessment, dietitian-guided gluten-free education, monitoring for dietary adherence and complications, and evaluation of non-responsive disease.',
      explanation: `## Non-Responsive Celiac Disease
**Definitions:**
- Persistent symptoms despite 6-12 months gluten-free diet
- Persistent villous atrophy on follow-up biopsy

**Evaluate for:**
- Ongoing gluten exposure (most common)
- inadvertent gluten in "gluten-free" foods
- Cross-contamination
- Alternative diagnoses:
  - Microscopic colitis
  - Crohn's disease
  - Small intestinal bacterial overgrowth
  - Pancreatic insufficiency
  - Refractory celiac disease

**Refractory Celiac Disease:**
- Type I: Normal intraepithelial lymphocytes
- Type II: Abnormal clonal IELs (premalignant)
- Treatment: Steroids, immunomodulators, biologics

## Monitoring
**Serology:** tTG-IgA every 6-12 months
- Goal: Normalize within 12-24 months

**Nutritional:**
- Iron studies, ferritin
- Vitamin D, B12, folate
- Calcium, zinc
- DEXA scan (bone density)

**Dietetic:**
- Annual dietitian review
- Assess for nutritional deficiencies
- Evaluate cross-contamination risks

## Associated Conditions
- Type 1 diabetes (5-10%)
- Autoimmune thyroiditis (3-5%)
- Down syndrome (5%)
- Turner syndrome (3-5%)
- Selective IgA deficiency (2-3%)`,
      keyTerms: [
        { term: 'refractory celiac', definition: 'Persistent symptoms/villous atrophy despite strict gluten-free diet' },
        { term: 'clonal IELs', definition: 'Abnormal immune cells in refractory celiac type II, risk of lymphoma' },
        { term: 'DEXA scan', definition: 'Bone density test to assess for osteoporosis' },
      ],
      clinicalNotes: 'Screen first-degree relatives (10-15% prevalence). Consider capsule endoscopy for persistent symptoms with normal EGD.',
    },
    5: {
      level: 5,
      summary: 'Advanced celiac disease care incorporates biomarker monitoring, microbiome-based diagnostics, non-invasive monitoring techniques, and emerging therapies including gluten-digesting enzymes and immunomodulation.',
      explanation: `## Emerging Biomarkers
**Non-invasive monitoring:**
- tTG-IgA titers correlate with mucosal healing
- DGP antibodies for dietary adherence
- Urinary gluten immunogenic peptides (GIP) detect recent exposure

**Microbiome:**
- Altered gut microbiome in untreated celiac
- Potential diagnostic and therapeutic implications

## Emerging Therapies
**Gluten detoxification:**
- ALV003 (glutenase combination)
- AN-PEP (prolyl endopeptidase)
- Latiglutenase (IMGX003)

**Immune modulation:**
- Nexvax2 (vaccine desensitization)
- ZED1227 (transglutaminase inhibitor)
- Larazotide acetate (tight junction modulator)

**Treatments under investigation:**
- Tolerance induction
- HLA-DQ2/DQ8 blocking agents

## Diagnostic Advances
- Point-of-care serologic testing
- Video capsule endoscopy for patchy disease
- Confocal endomicroscopy
- Genetic risk stratification

## Precision Nutrition
- Personalized gluten threshold
- Microbiome-guided dietary recommendations
- Fermented wheat products (reduced immunogenicity)`,
      keyTerms: [
        { term: 'gluten immunogenic peptides', definition: 'Fragments detectable in urine/stool indicating gluten exposure' },
        { term: 'nexvax2', definition: 'Investigational vaccine for celiac immune tolerance' },
        { term: 'larazotide', definition: 'Tight junction modulator preventing gluten passage across epithelium' },
      ],
      clinicalNotes: 'Emerging therapies are adjunctive, not replacements for gluten-free diet. Serology normalization is sufficient for monitoring in most cases; repeat biopsy rarely needed if symptoms resolve and antibodies normalize.',
    },
  },

  media: [],
  citations: [
    { id: 'acg-celiac-2023', type: 'article', title: 'ACG Clinical Guideline: Diagnosis and Management of Celiac Disease', source: 'American Journal of Gastroenterology' },
    { id: 'aap-celiac-2024', type: 'article', title: 'Celiac Disease in Children: Clinical Guidance', source: 'Pediatrics' },
  ],
  crossReferences: [
    { targetId: 'condition-ibd', targetType: 'condition', relationship: 'related', label: 'Inflammatory Bowel Disease' },
    { targetId: 'condition-ibs', targetType: 'condition', relationship: 'related', label: 'Irritable Bowel Syndrome' },
  ],
  tags: { systems: ['gastrointestinal'], topics: ['gastroenterology', 'immunology'], keywords: ['celiac', 'gluten', 'autoimmune', 'malabsorption'], clinicalRelevance: 'high', examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'pediatrics'] } },
  createdAt: '2025-01-26T00:00:00.000Z',
  updatedAt: '2025-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default celiacDisease;
