/**
 * Kidney Stone Types - Educational Content
 */

import { EducationalContent } from '../../types';

export const kidneyStoneTypes: EducationalContent = {
  id: 'topic-kidney-stone-types',
  type: 'topic',
  name: 'Kidney Stone Types',
  alternateNames: ['Stone Composition', 'Renal Calculi Classification'],

  levels: {
    1: {
      level: 1,
      summary: 'Kidney stones come in different types based on what minerals they are made of, and knowing the type helps doctors recommend the best prevention.',
      explanation: `Kidney stones are made of different minerals. The most common types are:

**Calcium Stones (Most Common - 80%)**
- Made from calcium combined with oxalate or phosphate
- Caused by too much calcium in urine or diet factors
- Prevention: Drink lots of water, limit salt

**Uric Acid Stones (10%)**
- Form when urine is too acidic
- Related to gout and eating lots of meat
- Prevention: Drink water, limit animal protein

**Struvite Stones (5-10%)**
- Also called "infection stones"
- Form after urinary tract infections
- Can grow very large
- Prevention: Treat and prevent UTIs

**Cystine Stones (Rare - 1%)**
- Caused by a genetic condition
- Run in families
- Prevention: Drink lots of water, special medications`,
      keyTerms: [
        { term: 'calcium oxalate', definition: 'The most common type of kidney stone material' },
        { term: 'uric acid', definition: 'A waste product that can form stones in acidic urine' },
        { term: 'struvite', definition: 'Stones made of magnesium, ammonia, and phosphate' },
      ],
      analogies: [
        'Different stone types are like different recipes - each needs different ingredients (minerals) to form.',
      ],
      examples: [
        'A stone that forms after a bad urinary infection is likely a struvite stone.',
      ],
    },
    2: {
      level: 2,
      summary: 'Kidney stones are classified by composition: calcium oxalate/phosphate, uric acid, struvite (infection), and cystine, each with distinct risk factors and prevention strategies.',
      explanation: `## Calcium Stones (75-80%)

**Calcium Oxalate:**
- Monohydrate (COM): Harder, more adherent
- Dihydrate (COD): Easier to fragment
- Risk factors: Hypercalciuria, hyperoxaluria, low citrate

**Calcium Phosphate:**
- Brushite: Hard, resistant to ESWL
- Apatite: Associated with RTA, UTI
- Risk factors: High urine pH, hypercalciuria

## Uric Acid Stones (10%)

**Characteristics:**
- Radiolucent (invisible on X-ray)
- Form in acidic urine (pH <5.5)
- Can dissolve with alkalinization

**Risk Factors:**
- Gout
- Diabetes, metabolic syndrome
- Chronic diarrhea
- High purine diet

## Struvite Stones (5-10%)

**Also Called:**
- Infection stones
- Triple phosphate (Mg, NH4, PO4)
- Staghorn calculi (when large)

**Characteristics:**
- Require urease-producing bacteria
- Proteus, Klebsiella, some Staph
- Alkaline urine (pH >7.2)

## Cystine Stones (1-3%)

**Genetic Cause:**
- Autosomal recessive
- Defect in cystine transport
- Lifetime of stone disease

**Characteristics:**
- Begin in childhood
- Faintly radiopaque
- Hexagonal crystals on UA`,
      keyTerms: [
        { term: 'COM', definition: 'Calcium oxalate monohydrate - harder stone type' },
        { term: 'radiolucent', definition: 'Not visible on X-ray (appears dark)' },
        { term: 'urease', definition: 'Bacterial enzyme that splits urea, raising urine pH' },
      ],
      analogies: [
        'Struvite stones grow like coral in an infected bladder - they need bacteria to form.',
      ],
    },
    3: {
      level: 3,
      summary: 'Stone composition analysis guides metabolic evaluation and targeted prevention through understanding crystallization kinetics, supersaturation, and specific metabolic abnormalities.',
      explanation: `## Calcium Oxalate

**Monohydrate (Whewellite):**
- Dense, brown-black
- Highly adherent to papilla
- Papillary stone origin

**Dihydrate (Weddellite):**
- Bipyramidal crystals
- Less adherent
- Pelvic stone origin
- Marker of hypercalciuria

**Formation Factors:**
- Supersaturation with calcium and oxalate
- Low inhibitors (citrate, magnesite)
- Randall's plaques (nucleation sites)

## Calcium Phosphate

**Brushite (CaHPO4):**
- Forms at pH 6.5-6.8
- Hard, ESWL-resistant
- Associated with hypercalciuria
- High recurrence

**Apatite (Ca10(PO4)6(OH)2):**
- Forms at pH >7.0
- Associated with RTA type 1
- Infection component common
- May mix with struvite

## Uric Acid

**Pure Uric Acid:**
- pH <5.5 critical
- Low urine volume amplifies
- Radiolucent
- Dissolvable with citrate

**Sodium Urate:**
- May seed calcium oxalate
- Seen in high sodium intake

## Rare Stone Types

**Drug-Induced:**
- Indinavir
- Triamterene
- Sulfadiazine
- Ephedrine

**2,8-Dihydroxyadenine:**
- APRT deficiency
- Radiolucent
- Treat with allopurinol

**Xanthine:**
- Xanthine oxidase deficiency
- Very rare`,
      keyTerms: [
        { term: 'Randall\'s plaques', definition: 'Calcium phosphate deposits on renal papillae serving as nucleation sites for stones' },
        { term: 'brushite', definition: 'Calcium hydrogen phosphate - hard, resistant stone form' },
        { term: 'supersaturation', definition: 'State when dissolved minerals exceed solubility, enabling crystallization' },
      ],
      clinicalNotes: 'Pure calcium phosphate stones (especially brushite) suggest need to evaluate for primary hyperparathyroidism and renal tubular acidosis.',
    },
    4: {
      level: 4,
      summary: 'Advanced stone composition analysis integrates infrared spectroscopy, metabolic correlations, and genetic testing for comprehensive stone disease management.',
      explanation: `## Stone Analysis Methods

**Infrared Spectroscopy:**
- Gold standard
- Identifies mineral composition
- Quantifies mixed stones
- Detects drug stones

**X-ray Diffraction:**
- Crystal structure analysis
- Research applications
- Less commonly available

## Mixed Stone Composition

**Clinical Significance:**
- Majority are mixed (60%)
- Core vs shell differences
- Metabolic implications

**Common Combinations:**
- COM core, COD shell
- Apatite core, COM shell
- Uric acid core, COM shell

## Metabolic Correlations

| Stone Type | Key Metabolic Abnormality |
|------------|--------------------------|
| COM | Hyperoxaluria, low citrate |
| COD | Hypercalciuria |
| Brushite | Hypercalciuria, high pH |
| Apatite | RTA, infection |
| Uric acid | Low pH, low volume |
| Cystine | Cystinuria |

## Genetic Testing Indications

**When to Test:**
- Cystine stones (confirm)
- Pediatric stones
- 2,8-DHA stones
- Family history
- Atypical presentation

**Genes:**
- SLC3A1, SLC7A9: Cystinuria
- APRT: 2,8-DHA
- HPRT: Xanthine
- AGXT, GRHPR, HOGA1: Primary hyperoxaluria

## Imaging Characteristics

**CT Attenuation (HU):**
- Uric acid: 200-450 HU
- Struvite: 600-900 HU
- Calcium oxalate: 1000-1400 HU
- Brushite: 1200-1600 HU

**Dual-Energy CT:**
- Differentiates uric acid from calcium
- Treatment planning
- Emerging standard`,
      keyTerms: [
        { term: 'Hounsfield units', definition: 'CT density measurement helping predict stone composition' },
        { term: 'dual-energy CT', definition: 'Advanced CT technique differentiating stone types' },
        { term: 'infrared spectroscopy', definition: 'Laboratory technique identifying stone mineral composition' },
      ],
      clinicalNotes: 'Always send stones for analysis. Even common calcium stones may reveal unexpected composition (e.g., drug stones, uric acid core) that changes management.',
    },
    5: {
      level: 5,
      summary: 'Expert stone analysis encompasses crystallization theory, papillary pathology, and precision medicine approaches to stone disease.',
      explanation: `## Crystallization Theory

**Nucleation:**
- Homogeneous: Rare, requires extreme supersaturation
- Heterogeneous: Common, uses nucleation sites

**Randall's Plaque Hypothesis:**
- Subepithelial calcium phosphate deposits
- Type 1 collagen matrix
- COM nucleation site
- Papillary erosion and stone attachment

**Crystal Growth:**
- Surface adsorption
- Crystal agglomeration
- Role of matrix proteins

## Papillary Morphology

**Normal Papillae:**
- Minimal plaque
- Low stone risk

**Papillary Calcification Patterns:**
- Randall's plaques (calcium oxalate)
- Tubular plugging (brushite)
- Ductal ectasia

**Endoscopic Assessment:**
- Digital mapping
- Correlation with stone type
- Surgical planning

## Inhibitors and Promoters

**Natural Inhibitors:**
- Citrate
- Magnesium
- Glycosaminoglycans
- Tamm-Horsfall protein
- Osteopontin
- Nephrocalcin

**Promoters:**
- Low urine volume
- High supersaturation
- Matrix proteins (some)

## Precision Medicine

**Pharmacogenomics:**
- CYP enzyme variants
- Thiazide response prediction
- Citrate therapy optimization

**Microbiome:**
- Oxalobacter formigenes
- Oxalate-degrading bacteria
- Probiotic therapy trials

**Personalized Prevention:**
- Genetic risk profiling
- Tailored dietary advice
- Stone type-specific protocols

## Future Directions

**Novel Dissolution Therapy:**
- EDTA analogs
- Phytate derivatives
- Surface modification

**Predictive Modeling:**
- Recurrence risk algorithms
- Treatment response prediction
- Machine learning applications`,
      keyTerms: [
        { term: 'heterogeneous nucleation', definition: 'Crystal formation on pre-existing surfaces like Randall\'s plaques' },
        { term: 'papillary mapping', definition: 'Endoscopic documentation of papillary appearance for stone disease phenotyping' },
        { term: 'Oxalobacter formigenes', definition: 'Gut bacterium that degrades dietary oxalate, potentially protective against stones' },
      ],
      clinicalNotes: 'Endoscopic papillary mapping during surgery provides valuable phenotypic information. Extensive plaque coverage suggests need for aggressive medical prevention.',
    },
  },

  media: [],
  citations: [
    {
      id: 'aua-stones-guidelines',
      type: 'article',
      title: 'Medical Management of Kidney Stones',
      source: 'AUA Guideline',
    },
  ],
  crossReferences: [
    { targetId: 'condition-kidney-stones', targetType: 'condition', relationship: 'parent', label: 'Kidney Stones' },
  ],
  tags: {
    systems: ['urinary', 'renal'],
    topics: ['stones', 'composition'],
    clinicalRelevance: 'high',
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default kidneyStoneTypes;
