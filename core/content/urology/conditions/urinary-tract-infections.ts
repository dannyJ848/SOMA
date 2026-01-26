/**
 * Urinary Tract Infections - Educational Content
 */

import { EducationalContent } from '../../types';

export const urinaryTractInfections: EducationalContent = {
  id: 'condition-urinary-tract-infections',
  type: 'condition',
  name: 'Urinary Tract Infections',
  alternateNames: ['UTI', 'Bladder Infection', 'Cystitis'],

  levels: {
    1: {
      level: 1,
      summary: 'A urinary tract infection (UTI) happens when germs get into your bladder or kidneys and cause an infection.',
      explanation: `A UTI is an infection in any part of your urinary system - the kidneys, bladder, or the tubes connecting them.

**Common Symptoms:**
- Burning or pain when you pee
- Needing to pee very often
- Feeling like you need to pee but only a little comes out
- Cloudy or smelly urine
- Pain in your lower belly

**Why UTIs Happen:**
- Bacteria (tiny germs) enter through the urethra
- Women get UTIs more often because their urethra is shorter
- Not drinking enough water can increase risk

**What Helps:**
- Drink plenty of water
- Don't hold your urine too long
- Wipe front to back after using the bathroom
- See a doctor if symptoms persist`,
      keyTerms: [
        { term: 'UTI', definition: 'Urinary tract infection - an infection in your bladder or kidneys' },
        { term: 'bacteria', definition: 'Tiny germs that can cause infections' },
        { term: 'urethra', definition: 'The tube that carries urine out of your body' },
      ],
      analogies: [
        'A UTI is like uninvited guests (bacteria) entering your house (urinary system) and causing trouble.',
      ],
      examples: [
        'Many people notice burning when they urinate as the first sign of a UTI.',
      ],
    },
    2: {
      level: 2,
      summary: 'UTIs are bacterial infections of the urinary tract, classified as lower (cystitis) or upper (pyelonephritis), most commonly caused by E. coli.',
      explanation: `## Types of UTIs

**Lower UTI (Cystitis):**
- Infection of the bladder
- Symptoms: Dysuria, frequency, urgency
- Usually uncomplicated in healthy women

**Upper UTI (Pyelonephritis):**
- Infection of the kidney
- Symptoms: Fever, flank pain, nausea
- More serious, may require hospitalization

## Risk Factors

**Women:**
- Short urethra (3-4 cm)
- Proximity to vagina and rectum
- Sexual activity
- Diaphragm/spermicide use

**Both Sexes:**
- Urinary retention
- Catheter use
- Kidney stones
- Diabetes

## Diagnosis

**Urinalysis:**
- Leukocyte esterase: White blood cells
- Nitrites: Bacterial conversion
- Pyuria: >10 WBC/hpf

**Urine Culture:**
- >100,000 CFU/mL confirms infection
- Identifies bacteria and antibiotic sensitivities`,
      keyTerms: [
        { term: 'cystitis', definition: 'Infection of the bladder', pronunciation: 'sis-TY-tis' },
        { term: 'pyelonephritis', definition: 'Infection of the kidney', pronunciation: 'py-el-oh-nef-RY-tis' },
        { term: 'dysuria', definition: 'Pain or burning during urination', pronunciation: 'dis-YUR-ee-ah' },
        { term: 'pyuria', definition: 'White blood cells in the urine' },
      ],
      analogies: [
        'Cystitis is like a fire in the lobby (bladder), while pyelonephritis is when it spreads to the upper floors (kidneys).',
      ],
    },
    3: {
      level: 3,
      summary: 'UTIs involve bacterial colonization of the urinary tract, with pathogenesis dependent on virulence factors, host defenses, and anatomical considerations.',
      explanation: `## Pathogenesis

**Uropathogenic E. coli (UPEC):**
- 80-90% of community-acquired UTIs
- Type 1 fimbriae: Bladder colonization
- P fimbriae: Kidney ascending
- Toxins: Hemolysin, cytotoxic necrotizing factor

**Other Pathogens:**
- Klebsiella pneumoniae
- Proteus mirabilis (struvite stones)
- Staphylococcus saprophyticus (young women)
- Enterococcus species

## Host Defenses

**Mechanical:**
- Urine flow washout
- Urothelial shedding
- Bladder mucus layer

**Chemical:**
- Acidic urine pH
- High urea concentration
- Tamm-Horsfall protein

**Immunologic:**
- Secretory IgA
- Toll-like receptor signaling
- Neutrophil recruitment

## Classification

**Uncomplicated:**
- Healthy, non-pregnant woman
- Normal urinary tract

**Complicated:**
- Structural abnormalities
- Obstruction
- Immunocompromised
- Male (always complicated)
- Pregnancy
- Recent instrumentation

## Treatment Principles

**Uncomplicated Cystitis:**
- Nitrofurantoin 100mg BID x 5 days
- TMP-SMX DS BID x 3 days
- Fosfomycin 3g single dose

**Pyelonephritis:**
- Fluoroquinolone x 7 days (outpatient)
- IV antibiotics (hospitalized)`,
      keyTerms: [
        { term: 'UPEC', definition: 'Uropathogenic Escherichia coli - the most common cause of UTIs' },
        { term: 'fimbriae', definition: 'Hair-like bacterial appendages for adherence to urothelium' },
        { term: 'Tamm-Horsfall protein', definition: 'Glycoprotein in urine that binds bacteria and prevents adherence' },
      ],
      clinicalNotes: 'Fluoroquinolones should be avoided for uncomplicated cystitis due to resistance and side effect concerns. Reserve for pyelonephritis or complicated infections.',
    },
    4: {
      level: 4,
      summary: 'Advanced UTI management includes recognition of complicated infections, antimicrobial stewardship, recurrent UTI prophylaxis, and catheter-associated UTI prevention.',
      explanation: `## Complicated UTI Considerations

**Risk Factors for Resistance:**
- Healthcare-associated infection
- Recent antibiotic use
- Prior resistant organism
- Travel to endemic areas

**Extended-Spectrum Beta-Lactamase (ESBL):**
- Increasing prevalence
- Often requires carbapenems
- Nitrofurantoin and fosfomycin may retain activity

## Recurrent UTI

**Definition:**
- ≥2 infections in 6 months, or
- ≥3 infections in 12 months

**Prophylaxis Options:**
- Continuous: Low-dose TMP-SMX or nitrofurantoin
- Post-coital: Single dose after intercourse
- Patient-initiated: Self-start at symptom onset

**Non-Antimicrobial Prevention:**
- Cranberry products (modest evidence)
- Vaginal estrogen (postmenopausal)
- D-mannose (limited evidence)
- Methenamine hippurate

## Catheter-Associated UTI (CAUTI)

**Epidemiology:**
- Most common healthcare-associated infection
- 3-7% per day catheterized

**Prevention Bundle:**
- Avoid unnecessary catheters
- Aseptic insertion
- Closed drainage system
- Daily review for removal
- Nurse-driven removal protocols

**Diagnosis Criteria:**
- Signs/symptoms of UTI
- ≥1000 CFU/mL from catheter specimen
- No other infection source

## Special Populations

**Pregnancy:**
- Screen for asymptomatic bacteriuria
- Treat all positive cultures
- Avoid fluoroquinolones, TMP (first trimester)

**Spinal Cord Injury:**
- High rates of colonization
- Treat only symptomatic infections
- Consider bladder management options`,
      keyTerms: [
        { term: 'ESBL', definition: 'Extended-spectrum beta-lactamase producing organisms resistant to most penicillins and cephalosporins' },
        { term: 'CAUTI', definition: 'Catheter-associated urinary tract infection' },
        { term: 'asymptomatic bacteriuria', definition: 'Bacteria in urine without symptoms - screen only in pregnancy and before urologic procedures' },
      ],
      clinicalNotes: 'Asymptomatic bacteriuria should NOT be treated in most populations (elderly, diabetics, catheterized patients) as treatment does not improve outcomes and promotes resistance.',
    },
    5: {
      level: 5,
      summary: 'Expert UTI management encompasses novel pathogenesis research, emerging therapeutics, antimicrobial resistance patterns, and precision medicine approaches.',
      explanation: `## Emerging Pathogenesis Concepts

**Intracellular Bacterial Communities:**
- UPEC invades urothelial cells
- Forms biofilm-like communities
- Evades host immunity and antibiotics
- May explain recurrence patterns

**Quiescent Intracellular Reservoirs:**
- Dormant bacteria in bladder tissue
- Can reactivate causing recurrence
- May require longer treatment courses

## Advanced Resistance Patterns

**Carbapenem-Resistant Enterobacteriaceae:**
- KPC, NDM, OXA enzymes
- Limited treatment options
- May require combination therapy

**Treatment Options for MDR UTI:**
- Ceftazidime-avibactam
- Meropenem-vaborbactam
- Plazomicin
- Eravacycline
- Fosfomycin (for susceptible organisms)

## Novel Therapeutics

**Vaccines in Development:**
- FimH adhesin-based vaccines
- Whole-cell vaccines
- Uromune sublingual vaccine (available in Europe)

**Alternative Approaches:**
- Intravesical instillation (GAG replenishment)
- Competitive probiotics
- Phage therapy (experimental)
- FimH antagonists

## Precision Medicine

**Biomarkers:**
- Urinary IL-6, IL-8 for severity
- Procalcitonin for pyelonephritis
- Urine transcriptomics

**Microbiome Considerations:**
- Female urinary microbiome exists
- Lactobacillus dominance protective
- Antibiotic impact on microbiome

## Surgical Considerations

**When to Investigate:**
- Recurrent pyelonephritis
- Unusual organisms
- Poor treatment response
- Male UTI

**Imaging Indications:**
- CT urography for stones/obstruction
- Voiding cystourethrogram for reflux
- Cystoscopy for bladder pathology`,
      keyTerms: [
        { term: 'intracellular bacterial communities', definition: 'Biofilm-like clusters of bacteria within urothelial cells evading immunity' },
        { term: 'FimH', definition: 'Bacterial adhesin on type 1 fimbriae - target for vaccine and therapeutic development' },
        { term: 'quiescent intracellular reservoirs', definition: 'Dormant bacteria persisting in bladder tissue causing recurrent infections' },
      ],
      clinicalNotes: 'The discovery of intracellular bacterial communities has changed our understanding of recurrent UTI. Traditional culture-based diagnosis may miss these reservoirs.',
    },
  },

  media: [],
  citations: [
    {
      id: 'aua-uti-guidelines',
      type: 'article',
      title: 'Recurrent Uncomplicated Urinary Tract Infections in Women',
      source: 'AUA/CUA/SUFU Guideline',
    },
  ],
  crossReferences: [
    { targetId: 'prevention-uti-prevention', targetType: 'topic', relationship: 'related', label: 'UTI Prevention' },
  ],
  tags: {
    systems: ['urinary'],
    topics: ['infection', 'urology'],
    clinicalRelevance: 'critical',
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default urinaryTractInfections;
