/**
 * Stool Studies Interpretation Educational Content
 *
 * Comprehensive educational content for understanding and interpreting
 * stool studies including fecal occult blood, calprotectin, stool culture,
 * C. difficile testing, ova and parasites, fecal elastase, fecal fat,
 * lactoferrin, and stool pH.
 *
 * Spanish translations: Estudios de heces / Coprologico
 */

import { EducationalContent } from "../types";

export const stoolStudiesContent: EducationalContent = {
  id: "stool-studies",
  type: "concept",
  name: "Stool Studies Interpretation",
  nameEs: 'Estudios de Heces',
  alternateNames: [
    "Stool Analysis",
    "Fecal Studies",
    "Coprology",
    "Estudios de Heces",
    "Coprologico",
    "Analisis de Materia Fecal",
  ],

  levels: {
    1: {
      level: 1,
      summary:
        "Stool studies are tests done on a bowel movement sample to check for bleeding, infections, inflammation, or problems with digestion.",
      explanation: `Doctors sometimes ask for a sample of your bowel movement (stool or poop) to run tests on. This might sound unpleasant, but these tests give important information about your digestive system.

Here are the main things stool tests can look for:

1. **Hidden blood** - A test called FOBT or FIT looks for tiny amounts of blood you cannot see. This is important for catching colon cancer early.

2. **Inflammation** - A test called calprotectin checks if your intestines are inflamed (red and swollen inside). This helps doctors find conditions like Crohn's disease or ulcerative colitis.

3. **Infections** - Stool cultures look for harmful bacteria. A special test checks for a germ called *C. difficile* that can cause severe diarrhea, especially after taking antibiotics.

4. **Parasites** - The "ova and parasites" test looks for worms or other tiny organisms that can live in your gut.

5. **Digestion problems** - Tests like fecal elastase check if your pancreas is working properly to digest food. Fecal fat tests check if your body is absorbing fat from food.

6. **Stool pH** - Measures how acidic your stool is, which can point to problems absorbing sugars.

These tests help doctors figure out why you might have diarrhea, stomach pain, weight loss, or other digestive symptoms.`,
      keyTerms: [
        { term: "stool", definition: "The solid waste (poop) that comes out when you have a bowel movement" },
        { term: "FOBT", definition: "Fecal occult blood test - checks for hidden blood in stool" },
        { term: "calprotectin", definition: "A protein in stool that shows if the intestines are inflamed" },
        { term: "C. difficile", definition: "A germ that can cause severe diarrhea, often after taking antibiotics" },
        { term: "parasite", definition: "A tiny organism that lives inside your body and can make you sick" },
      ],
      analogies: [
        "Stool tests are like checking the exhaust from a car - by examining what comes out, mechanics (doctors) can figure out what is going wrong inside the engine (your digestive system).",
        "A fecal occult blood test is like using a special detector to find invisible clues at a crime scene - the blood is there, but you cannot see it with your eyes.",
      ],
      patientCounselingPoints: [
        "Los estudios de heces son pruebas que se hacen con una muestra de su excremento para buscar sangre oculta, infecciones o problemas digestivos.",
        "La prueba de sangre oculta en heces ayuda a detectar el cancer de colon tempranamente.",
        "Si tiene diarrea severa despues de tomar antibioticos, el doctor puede buscar una bacteria llamada C. difficile.",
        "Estas pruebas no duelen - solo necesita recoger una muestra en un recipiente especial.",
      ],
    },
    2: {
      level: 2,
      summary:
        "Stool studies encompass screening tests (FOBT/FIT), inflammatory markers (calprotectin, lactoferrin), infectious workup (culture, C. difficile, O&P), and malabsorption assessments (fecal elastase, fecal fat, pH).",
      explanation: `## Stool Studies Overview

### Screening Tests

**Fecal Occult Blood Testing:**
- **gFOBT (guaiac-based)**: Detects heme peroxidase activity; requires dietary restrictions (no red meat, vitamin C, NSAIDs for 3 days)
- **FIT (fecal immunochemical test)**: Uses antibodies specific to human hemoglobin; no dietary restrictions needed; preferred method
- Purpose: Colorectal cancer screening in average-risk adults starting at age 45
- Positive result requires colonoscopy follow-up

### Inflammatory Markers

**Fecal Calprotectin:**
- Normal: <50 mcg/g
- Borderline: 50-200 mcg/g
- Elevated: >200 mcg/g (suggests IBD)
- Helps distinguish IBD from irritable bowel syndrome (IBS)

**Fecal Lactoferrin:**
- Iron-binding glycoprotein released by activated neutrophils
- Elevated in inflammatory diarrhea (IBD, bacterial infection)
- Normal in non-inflammatory diarrhea (IBS, viral gastroenteritis)

### Infectious Workup

| Test | Target | Key Points |
|------|--------|------------|
| Stool culture | Salmonella, Shigella, Campylobacter, E. coli | Standard bacterial pathogens |
| C. difficile toxin | Toxin A and B | PCR or GDH + toxin EIA; most accurate |
| Ova and parasites (O&P) | Protozoa, helminths | 3 samples improve sensitivity; travel history important |

### Malabsorption Studies

**Fecal Elastase:**
- Normal: >200 mcg/g
- Moderate pancreatic insufficiency: 100-200 mcg/g
- Severe pancreatic insufficiency: <100 mcg/g

**72-Hour Fecal Fat:**
- Normal: <7 g/day on 100 g fat diet
- Elevated: Suggests fat malabsorption (pancreatic insufficiency, celiac disease, bile salt deficiency)

**Stool pH:**
- Normal: 6.5-7.5
- Acidic (<5.5): Carbohydrate malabsorption (lactose intolerance)
- Very acidic: Suggests disaccharidase deficiency`,
      keyTerms: [
        { term: "FIT", definition: "Fecal Immunochemical Test - uses antibodies to detect human hemoglobin in stool; preferred colon cancer screening test" },
        { term: "fecal calprotectin", definition: "A protein released by neutrophils in the gut; elevated levels suggest inflammatory bowel disease", pronunciation: "kal-pro-TEK-tin" },
        { term: "fecal elastase", definition: "A pancreatic enzyme measured in stool to assess pancreatic exocrine function", pronunciation: "ee-LAS-tays" },
        { term: "O&P", definition: "Ova and parasites examination - microscopic exam of stool for parasitic eggs and organisms" },
        { term: "GDH", definition: "Glutamate dehydrogenase - enzyme used in C. difficile screening algorithms" },
      ],
      analogies: [
        "Fecal calprotectin is like a smoke alarm for your intestines - when the level is high, it signals that there is inflammation (fire) inside, even before you see the flames.",
        "Fecal elastase is like checking the output of a factory (pancreas) - if the enzyme level in stool is low, the factory is not producing enough digestive enzymes.",
      ],
    },
    3: {
      level: 3,
      summary:
        "Systematic stool analysis integrates immunochemical screening, inflammatory biomarkers for IBD monitoring, multi-step C. difficile diagnostic algorithms, parasitology protocols, and quantitative malabsorption testing with clinical correlation.",
      explanation: `## Systematic Stool Studies Interpretation

### Colorectal Cancer Screening: FOBT vs FIT

| Feature | gFOBT | FIT |
|---------|-------|-----|
| Mechanism | Peroxidase activity of heme | Antibody to human globin |
| Specificity for lower GI | No (detects any heme) | Yes (globin degraded in upper GI) |
| Dietary restrictions | Yes (red meat, peroxidase-rich foods) | No |
| Medication restrictions | Avoid NSAIDs, vitamin C | Avoid NSAIDs |
| Sensitivity for CRC | 50-75% | 75-85% |
| Specificity for CRC | 85-95% | 90-95% |
| Samples required | 3 consecutive | 1 |
| Recommended frequency | Annual | Annual |

**Important**: A positive FOBT/FIT must be followed by diagnostic colonoscopy. Repeating the stool test is inappropriate and delays cancer diagnosis.

### Fecal Calprotectin in Clinical Practice

**Diagnostic Utility:**
- Distinguishes IBD from IBS with ~93% sensitivity and ~96% specificity at cutoff 50 mcg/g
- Correlates with endoscopic disease activity in IBD
- Used to monitor treatment response and predict relapse

**Limitations:**
- Elevated in: NSAIDs use, infections, colorectal cancer, cirrhosis, microscopic colitis
- Age-dependent: Higher baseline in infants and young children
- Diurnal variation: Morning samples preferred

### C. difficile Infection (CDI) Diagnostic Algorithm

**Recommended Multi-Step Approach (IDSA/SHEA 2017):**

Step 1: **GDH screening** (high sensitivity) OR **NAAT/PCR** (high sensitivity)
Step 2: If GDH positive, confirm with **toxin EIA** (high specificity)

| Approach | GDH | Toxin EIA | Interpretation |
|----------|-----|-----------|----------------|
| Two-step | + | + | CDI confirmed |
| Two-step | + | - | Possible carrier; clinical correlation |
| Two-step | - | N/A | CDI unlikely |

**Key Principle**: Only test formed stool if there is strong clinical suspicion. The test should be ordered on **unformed stool** (Bristol 5-7) in patients with >= 3 episodes of diarrhea in 24 hours.

### Ova and Parasites (O&P) Examination

**Three-specimen protocol** maximizes sensitivity:
- Collect on alternate days over 10 days
- Sensitivity: ~60% (single), ~85-90% (three specimens)

**Common findings by exposure history:**
| Exposure | Organisms to Consider |
|----------|-----------------------|
| US daycare / institutional | Giardia, Cryptosporidium |
| Travel to developing countries | Entamoeba histolytica, Giardia, Cyclospora |
| HIV/immunocompromised | Cryptosporidium, Isospora, Microsporidium, Cyclospora |
| Raw/undercooked fish | Diphyllobothrium, Anisakis |
| Pork | Taenia solium, Trichinella |

**Special stains:**
- Modified acid-fast: Cryptosporidium, Cyclospora, Isospora
- Trichrome: Entamoeba histolytica
- Weber modified trichrome: Microsporidium

### Quantitative Malabsorption Testing

**72-Hour Fecal Fat Collection:**
- Patient on 100 g fat/day diet for 3 days prior and during collection
- Normal: <7 g/day (coefficient of fat absorption >95%)
- Steatorrhea: >7 g/day
- Severe: >20 g/day (usually pancreatic insufficiency)

**Sudan III stain (qualitative):** Quick screening for fecal fat; less precise than quantitative

**Fecal Elastase-1 (Pancreatic Function):**
- Enzyme resistant to intestinal degradation
- Single random stool sample; not affected by enzyme replacement therapy
- Cannot differentiate chronic pancreatitis from other causes of exocrine insufficiency

### Stool pH and Reducing Substances

- pH <5.5 with positive reducing substances: Carbohydrate malabsorption
- Sucrose is NOT a reducing sugar; requires acid hydrolysis before testing
- Used primarily in pediatric evaluation of chronic diarrhea`,
      keyTerms: [
        { term: "NAAT", definition: "Nucleic Acid Amplification Test - molecular detection of C. difficile toxin genes; highly sensitive but may detect colonization" },
        { term: "GDH", definition: "Glutamate dehydrogenase - common C. difficile antigen present in both toxigenic and non-toxigenic strains; used as screening step" },
        { term: "coefficient of fat absorption", definition: "Percentage of dietary fat absorbed; calculated as (fat intake - fecal fat) / fat intake x 100; normal >95%" },
        { term: "reducing substances", definition: "Sugars that can reduce copper reagent; positive in stool when carbohydrates are malabsorbed (e.g., lactose intolerance)" },
        { term: "steatorrhea", definition: "Excess fat in stool (>7 g/day); indicates fat malabsorption from pancreatic, biliary, or mucosal disease" },
      ],
      clinicalNotes:
        "C. difficile testing should only be performed on unformed stool from symptomatic patients. Do not test asymptomatic patients or use as 'test of cure.' Fecal calprotectin is most useful as a non-invasive tool to differentiate IBD from IBS and to monitor IBD disease activity.",
    },
    4: {
      level: 4,
      summary:
        "Advanced stool interpretation integrates molecular pathogen panels, quantitative IBD biomarker monitoring, pancreatic function testing algorithms, and nuanced evaluation of malabsorption etiologies including rare and overlap conditions.",
      explanation: `## Advanced Stool Studies Interpretation

### Multiplex Molecular Stool Panels (GI PCR Panels)

**BioFire FilmArray / Luminex xTAG / Similar Panels:**

Detect 20+ pathogens simultaneously:

| Category | Targets |
|----------|---------|
| Bacteria | Campylobacter, C. difficile toxin, Plesiomonas, Salmonella, Yersinia, Vibrio, E. coli (ETEC, EPEC, STEC, EAEC, EIEC), Shigella |
| Viruses | Adenovirus F40/41, Astrovirus, Norovirus, Rotavirus, Sapovirus |
| Parasites | Cryptosporidium, Cyclospora, Entamoeba histolytica, Giardia |

**Advantages:**
- Rapid turnaround (1-2 hours vs 2-4 days for culture)
- Higher sensitivity for fastidious organisms
- Detects co-infections

**Limitations and Controversies:**
- Over-detection: Identifies colonization, not just infection
- Cannot provide antibiotic susceptibility data
- High cost ($400-800)
- Detects non-viable organisms (post-treatment)
- Clinical significance of some detected organisms is uncertain
- IDSA recommends against routine use; reserve for hospitalized, immunocompromised, or returning travelers

### Advanced Fecal Calprotectin Applications

**Therapeutic Drug Monitoring in IBD:**
- Calprotectin <150 mcg/g correlates with mucosal healing (endoscopic remission)
- Serial calprotectin every 3-6 months predicts relapse 2-3 months before symptoms
- Rising calprotectin >250 mcg/g: Consider dose escalation or therapy change
- Post-surgical monitoring: Rising calprotectin predicts endoscopic recurrence after ileocecal resection

**Point-of-Care Calprotectin:**
- Lateral flow rapid tests available (results in 15-30 minutes)
- Semi-quantitative; useful for IBD flare assessment in clinic
- Correlation with ELISA-based assays: r = 0.85-0.92

### C. difficile: Beyond Standard Diagnostics

**Strain Typing and Virulence:**
- NAP1/BI/027 (ribotype 027): Hypervirulent strain with binary toxin (CDT), fluoroquinolone resistance
- Produces 16-23x more toxin A and toxin B
- Associated with severe CDI, higher mortality, and community-acquired CDI

**Recurrent CDI Evaluation:**
- Consider stool microbiome analysis (16S rRNA sequencing) for recurrent CDI
- Low diversity predicts recurrence
- Guides fecal microbiota transplantation (FMT) candidacy

### Pancreatic Exocrine Function: Comprehensive Approach

**Testing Algorithm:**
1. **Screening**: Fecal elastase-1 (FE-1)
2. **Confirmation**: 72-hour fecal fat OR 13C-mixed triglyceride breath test
3. **Etiology**: Secretin-stimulated MRI/MRCP, EUS

**Comparative Performance:**
| Test | Sensitivity (severe PEI) | Sensitivity (mild PEI) | Specificity |
|------|--------------------------|------------------------|-------------|
| Fecal elastase-1 | 85-100% | 35-65% | 85-95% |
| 72-hour fecal fat | 85-95% | 50-75% | 90-95% |
| Secretin-pancreozymin | 90-95% | 75-85% | 90-95% |
| 13C-MTG breath test | 80-90% | 60-70% | 85-90% |

**Pitfalls:**
- FE-1 is falsely low with watery diarrhea (dilution effect); repeat with formed stool
- FE-1 does not differentiate chronic pancreatitis from other causes of PEI
- 72-hour fecal fat requires strict dietary compliance

### Stool Electrolytes and Osmotic Gap

**Stool Osmotic Gap Calculation:**
- Measured stool osmolality = 290 mOsm/kg (assumed)
- Stool osmotic gap = 290 - 2 x (stool Na+ + stool K+)

| Osmotic Gap | Interpretation | Common Causes |
|-------------|---------------|---------------|
| >125 mOsm/kg | Osmotic diarrhea | Lactose intolerance, sorbitol, Mg-containing laxatives, celiac |
| <50 mOsm/kg | Secretory diarrhea | VIPoma, carcinoid, bile acid malabsorption, microscopic colitis |
| 50-125 mOsm/kg | Mixed or indeterminate | Various |

**Stool pH in Differential Diagnosis:**
- pH <5.5: Carbohydrate malabsorption (lactose, fructose)
- pH 6.0-6.5: Normal infant on breast milk
- pH >7.5: Secretory diarrhea, laxative abuse (alkaline cathartics)`,
      keyTerms: [
        { term: "stool osmotic gap", definition: "Calculated value distinguishing osmotic from secretory diarrhea; osmotic gap >125 suggests osmotic etiology" },
        { term: "NAP1/BI/027", definition: "Hypervirulent C. difficile strain producing binary toxin with higher morbidity and mortality" },
        { term: "mucosal healing", definition: "Endoscopic absence of inflammation in IBD; increasingly used as therapeutic target and correlated with calprotectin <150" },
        { term: "fecal microbiota transplantation", definition: "Transfer of donor stool to restore gut microbiome diversity; evidence-based treatment for recurrent C. difficile infection" },
      ],
      clinicalNotes:
        "Multiplex GI PCR panels increase pathogen detection but may lead to over-diagnosis and unnecessary treatment. Results must be interpreted in clinical context - detection does not equal infection. For IBD monitoring, serial fecal calprotectin is the most practical non-invasive biomarker for assessing mucosal healing and predicting relapse.",
    },
    5: {
      level: 5,
      summary:
        "Expert stool analysis integrates gut microbiome profiling, precision IBD biomarker strategies, evolving FMT evidence, molecular resistance testing, and emerging technologies including volatile organic compound analysis and multi-omics stool diagnostics.",
      explanation: `## Expert-Level Stool Studies Interpretation

### Gut Microbiome Analysis in Clinical Practice

**16S rRNA Sequencing and Shotgun Metagenomics:**
- 16S rRNA: Identifies bacteria to genus level; cost-effective but limited resolution
- Shotgun metagenomics: Species-level identification plus functional gene analysis
- Clinical applications emerging but not yet standard of care

**Dysbiosis Patterns Associated with Disease:**
| Condition | Microbiome Signature |
|-----------|---------------------|
| IBD (Crohn's) | Decreased Firmicutes, increased Gammaproteobacteria, decreased F. prausnitzii |
| C. difficile infection | Severely reduced diversity, loss of Bacteroidetes |
| Colorectal cancer | Enrichment of Fusobacterium nucleatum, decreased butyrate producers |
| IBS | Variable; decreased Bifidobacterium, altered Firmicutes/Bacteroidetes ratio |

**Commercial Microbiome Tests:**
- Not recommended for routine clinical use (AGA 2024 guidelines)
- Insufficient evidence linking profiles to actionable interventions
- Research tool with translational potential

### Precision IBD Monitoring

**Multi-Biomarker Panel Approach:**
- Fecal calprotectin + lactoferrin + serum CRP: Composite scores improve predictive accuracy
- STRIDE-II targets: Clinical remission + endoscopic healing + biomarker normalization
- Tight control strategy: Calprotectin-guided dose optimization improves long-term outcomes (CALM trial evidence)

**Novel Stool Biomarkers Under Investigation:**
- Fecal S100A12: More specific for neutrophilic inflammation than calprotectin
- Fecal osteoprotegerin: Correlates with endoscopic severity in UC
- Fecal microRNA panels: Potential for IBD subtype classification
- Volatile organic compounds (VOC): Metabolomic stool fingerprint detectable by electronic nose

### Fecal Microbiota Transplantation (FMT): Current Evidence

**Established Indications:**
- Recurrent CDI (>= 3 episodes): ~85-90% cure rate (RCTs: PUNCH CD3, SER-109)
- FDA-approved live biotherapeutics: RBX2660 (Rebyota), SER-109 (Vowst) for recurrent CDI

**Investigational Applications:**
- Ulcerative colitis: Moderate evidence for induction of remission (pooled RCTs, NNT ~5)
- Hepatic encephalopathy: Emerging RCT evidence for reduction in recurrence
- Metabolic syndrome, obesity: Early-phase trials; not clinically actionable

**Safety Considerations:**
- Donor screening: Extended panel including MDRO, SARS-CoV-2, monkeypox
- Risk of transmitting antibiotic-resistant organisms
- Rare serious adverse events: Bacteremia (immunocompromised), E. coli bacteremia (FDA safety alert 2019)
- Long-term safety data still limited

### Advanced Molecular Resistance Testing

**Stool-Based Antimicrobial Resistance Profiling:**
- Metagenomic detection of resistance genes (resistome analysis)
- Identifies ESBL, carbapenemase, vancomycin resistance genes
- Applications: ICU screening, pre-transplant MDRO assessment
- Surveillance tool for antimicrobial stewardship programs

**C. difficile Molecular Epidemiology:**
- Whole-genome sequencing for outbreak investigation
- SNP-based phylogenetics determine transmission chains
- Identifies hypervirulent ribotypes and emerging resistance patterns

### Emerging Technologies

**Volatile Organic Compound (VOC) Analysis:**
- Electronic nose (eNose) technology detects disease-specific stool odor fingerprints
- Pilot studies: 85-95% accuracy distinguishing IBD from IBS
- Potential point-of-care application; non-invasive, rapid (<1 minute)

**Stool-Based DNA Testing (Cologuard / mt-sDNA):**
- Multi-target: Methylated BMP3 and NDRG4, mutant KRAS, fecal hemoglobin
- CRC sensitivity: 92%, specificity: 87% (DeeP-C study)
- Advanced adenoma sensitivity: 42%
- Recommended screening interval: Every 3 years (USPSTF)
- Second-generation (Cologuard Plus): Improved advanced adenoma detection under investigation

**Fecal Metabolomics:**
- Short-chain fatty acid profiling (butyrate, propionate, acetate)
- Bile acid profiling (primary vs secondary; 7-alpha-dehydroxylation status)
- Amino acid metabolites (tryptophan pathway, p-cresol)
- Potential for personalized dietary and probiotic interventions

### Quality and Pre-Analytic Considerations

**Specimen Handling Best Practices:**
- Calprotectin: Stable at room temperature for 7 days; minimal diurnal variation
- C. difficile toxin (EIA): Degrade within 2 hours at room temperature; transport on ice
- O&P: Fix in formalin or PVA within 30 minutes; SAF fixative for permanent stains
- Fecal fat: Requires complete 72-hour collection; incomplete collection is the most common source of error

**Interpretive Pitfalls:**
- Calprotectin elevated by NSAIDs, PPIs, and enteric infections (not specific for IBD)
- FIT false-negative with proximal colonic lesions (globin degraded in transit)
- C. difficile NAAT detects toxin genes, not free toxin - does not distinguish colonization from active disease
- Fecal elastase falsely low with dilute (watery) stool specimens
- Stool osmolality >350 mOsm/kg suggests specimen contamination or evaporation`,
      keyTerms: [
        { term: "resistome", definition: "The collection of all antimicrobial resistance genes in a microbial community, detectable by metagenomic sequencing of stool" },
        { term: "volatile organic compounds", definition: "Gaseous metabolites in stool detectable by electronic nose technology; disease-specific signatures under investigation" },
        { term: "mt-sDNA", definition: "Multi-target stool DNA test (Cologuard) combining methylated DNA markers, mutant KRAS, and hemoglobin for colorectal cancer screening" },
        { term: "tight control strategy", definition: "IBD management approach using biomarker-guided therapy optimization; CALM trial demonstrated superiority of calprotectin-driven escalation" },
      ],
      clinicalNotes:
        "Expert stool interpretation requires awareness of evolving diagnostic paradigms. Microbiome analysis is a powerful research tool but not yet ready for routine clinical decision-making. FMT has moved from experimental to FDA-regulated therapy for recurrent CDI, with standardized biotherapeutic products now available. Multi-target stool DNA testing represents a complementary CRC screening strategy but has lower specificity than FIT, leading to more follow-up colonoscopies.",
    },
  },

  media: [],
  citations: [
    {
      id: "sleisenger-gi-stool",
      type: "textbook",
      title: "Sleisenger and Fordtran's Gastrointestinal and Liver Disease",
      authors: ["Feldman M", "Friedman LS", "Brandt LJ"],
      source: "Elsevier",
      chapter: "Evaluation of Gastrointestinal Diseases by Stool Tests",
    },
    {
      id: "idsa-cdiff-guidelines",
      type: "article",
      title: "Clinical Practice Guidelines for Clostridium difficile Infection in Adults and Children: 2017 Update by IDSA and SHEA",
      authors: ["McDonald LC", "Gerding DN", "Johnson S"],
      source: "Clinical Infectious Diseases",
    },
    {
      id: "aga-calprotectin",
      type: "article",
      title: "AGA Clinical Practice Guideline on the Role of Biomarkers for the Management of IBD",
      authors: ["Singh S", "Ananthakrishnan AN", "Engel T"],
      source: "Gastroenterology",
    },
  ],
  crossReferences: [
    { targetId: "cbc-interpretation", targetType: "concept", relationship: "related" },
    { targetId: "inflammatory-markers", targetType: "concept", relationship: "related" },
  ],
  tags: {
    systems: ["gastrointestinal"],
    topics: ["laboratory", "gastroenterology", "infectious-disease", "diagnosis", "screening"],
    clinicalRelevance: "high",
    examRelevance: { usmle: true, nbme: true, shelf: ["medicine", "surgery", "pediatrics"] },
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: "published",
};
