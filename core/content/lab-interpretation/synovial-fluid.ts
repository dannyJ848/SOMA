/**
 * Synovial Fluid Analysis Interpretation Educational Content
 *
 * Comprehensive educational content for understanding and interpreting
 * synovial fluid analysis including appearance, cell counts, crystal
 * analysis, microbiology, and pattern recognition.
 *
 * Spanish translations: Liquido sinovial / Analisis de liquido sinovial
 */

import { EducationalContent } from "../types";

export const synovialFluidContent: EducationalContent = {
  id: "synovial-fluid-analysis",
  type: "concept",
  name: "Synovial Fluid Analysis",
  alternateNames: [
    "Joint Fluid Analysis",
    "Arthrocentesis Fluid Interpretation",
    "Analisis de Liquido Sinovial",
    "Estudio de Liquido Articular",
  ],

  levels: {
    1: {
      level: 1,
      summary:
        "Synovial fluid analysis is a test on fluid taken from a joint to find out why it is swollen or painful.",
      explanation: `When a joint (like a knee or wrist) becomes swollen, red, or painful, doctors may use a needle to take out some of the fluid inside it. This fluid is called **synovial fluid**, and testing it helps figure out what is causing the problem.

The test looks at:

1. **How the fluid looks** - Normal joint fluid is clear and yellowish, like cooking oil. Cloudy or bloody fluid can mean a problem.

2. **Cells in the fluid** - Doctors count the white blood cells. Lots of white blood cells usually means the joint is inflamed or infected.

3. **Tiny crystals** - Special crystals in the fluid can cause gout (a type of arthritis). The doctor uses a microscope with special light to see them.

4. **Germs** - If an infection is suspected, the fluid is tested for bacteria.

5. **Other chemicals** - Sugar (glucose) and protein levels in the fluid help tell apart different problems.

This test is important because a joint infection is a medical emergency that needs treatment right away.`,
      keyTerms: [
        { term: "synovial fluid", definition: "The slippery liquid inside your joints that helps them move smoothly" },
        { term: "arthrocentesis", definition: "Using a needle to take fluid out of a joint" },
        { term: "gout", definition: "A painful type of arthritis caused by tiny crystals building up in a joint" },
        { term: "crystal", definition: "A tiny solid particle that can form inside a joint and cause pain" },
        { term: "joint infection", definition: "When germs get inside a joint, causing pain, swelling, and fever" },
      ],
      analogies: [
        "Joint fluid is like the oil in a car engine - when the engine is running smoothly, the oil is clean and clear. When something goes wrong, the oil gets dirty and changes color.",
        "Testing joint fluid is like being a detective - you gather clues (color, cells, crystals, germs) to solve the mystery of why the joint hurts.",
      ],
      patientCounselingPoints: [
        "El liquido sinovial es el liquido dentro de sus articulaciones que las ayuda a moverse suavemente.",
        "El doctor usara una aguja para sacar un poco de liquido de la articulacion hinchada.",
        "Este examen ayuda a saber si tiene gota, infeccion u otro problema en la articulacion.",
        "Si se encuentra una infeccion, necesitara tratamiento de inmediato.",
      ],
    },
    2: {
      level: 2,
      summary:
        "Synovial fluid analysis evaluates appearance, cell count, crystal presence, and microbiology to differentiate non-inflammatory, inflammatory, septic, and hemorrhagic joint conditions.",
      explanation: `## Synovial Fluid Analysis Overview

**What is synovial fluid?**
Synovial fluid is produced by the synovial membrane lining the joints. It lubricates and nourishes articular cartilage. Normal fluid is viscous, clear, and pale yellow with very few white blood cells.

### Key Components of Analysis

**1. Gross Appearance**
| Feature | Normal | Abnormal |
|---------|--------|----------|
| Color | Pale yellow | Yellow, green, white, red/brown |
| Clarity | Transparent | Translucent or opaque |
| Viscosity | High (forms a string >4 cm) | Low (drips like water) |

**2. Cell Count and Differential**
- Normal: <200 WBC/mcL, <25% neutrophils
- Non-inflammatory: 200-2,000 WBC/mcL
- Inflammatory: 2,000-50,000 WBC/mcL with >50% neutrophils
- Septic: Often >50,000 WBC/mcL with >75% neutrophils

**3. Crystal Analysis**
- **Monosodium urate (MSU)**: Needle-shaped, negatively birefringent = gout
- **Calcium pyrophosphate (CPPD)**: Rhomboid-shaped, positively birefringent = pseudogout

**4. Microbiology**
- Gram stain and culture to rule out septic arthritis
- Positive in ~75% of non-gonococcal septic arthritis

**5. Chemistry**
- Glucose: Low in infection (difference >25 mg/dL from serum)
- Protein and LDH: Elevated in inflammation and infection`,
      keyTerms: [
        { term: "viscosity", definition: "How thick and sticky a fluid is; normal joint fluid is highly viscous", pronunciation: "vis-KOS-ih-tee" },
        { term: "birefringent", definition: "A property of crystals that makes them glow under polarized light in a microscope", pronunciation: "by-ree-FRIN-jent" },
        { term: "MSU crystals", definition: "Monosodium urate crystals found in gout - needle-shaped and negatively birefringent" },
        { term: "CPPD crystals", definition: "Calcium pyrophosphate dihydrate crystals found in pseudogout - rhomboid-shaped and positively birefringent" },
        { term: "septic arthritis", definition: "A joint infection, usually bacterial, requiring urgent treatment" },
      ],
      analogies: [
        "Crystal analysis under polarized light is like using a special flashlight to find hidden clues - MSU crystals glow yellow when parallel (negatively birefringent) while CPPD crystals glow blue (positively birefringent).",
        "The viscosity string test is like pulling taffy - healthy joint fluid stretches into a long string, but inflamed fluid breaks apart quickly.",
      ],
    },
    3: {
      level: 3,
      summary:
        "Systematic synovial fluid analysis integrates gross inspection, quantitative cell counts, compensated polarized microscopy for crystal identification, microbiological studies, and biochemical markers to classify joint effusions and guide management.",
      explanation: `## Systematic Synovial Fluid Interpretation

### Classification of Joint Effusions

| Parameter | Normal | Non-inflammatory | Inflammatory | Septic | Hemorrhagic |
|-----------|--------|-----------------|--------------|--------|-------------|
| Volume (knee) | <3.5 mL | Often large | Variable | Variable | Large |
| Color | Clear, pale yellow | Yellow | Yellow-green | Yellow-green, opaque | Red/brown |
| Clarity | Transparent | Transparent | Translucent-opaque | Opaque | Bloody |
| Viscosity | High | High | Low | Low | Variable |
| WBC/mcL | <200 | 200-2,000 | 2,000-50,000 | >50,000 (often >100K) | Variable (RBCs present) |
| PMN % | <25% | <25% | >50% | >75% | Variable |
| Culture | Negative | Negative | Negative | Often positive | Negative |
| Glucose | Near serum | Near serum | Lower than serum | Much lower (>25 mg/dL difference) | Near serum |

### Crystal Analysis (Compensated Polarized Microscopy)

**Monosodium Urate (MSU) - Gout:**
- Shape: Needle-shaped
- Birefringence: Strongly negatively birefringent
- Appearance: Yellow when parallel to compensator axis, blue when perpendicular
- Found intracellularly (within neutrophils) during acute attacks
- Sensitivity: 85-95% for gout

**Calcium Pyrophosphate Dihydrate (CPPD) - Pseudogout:**
- Shape: Rhomboid or rod-shaped
- Birefringence: Weakly positively birefringent
- Appearance: Blue when parallel to compensator axis, yellow when perpendicular
- Associated with chondrocalcinosis on X-ray

**Other Crystals:**
- Cholesterol crystals: Flat, notched plates (chronic effusions)
- Hydroxyapatite: Not visible on standard polarized microscopy; requires special stains
- Corticosteroid crystals: Post-injection, can mimic gout flare

### Microbiological Assessment

- **Gram stain**: Sensitivity ~50-75% for non-gonococcal, ~25% for gonococcal
- **Culture**: Gold standard; sensitivity ~75-95% for non-gonococcal septic arthritis
- **Most common organisms**: S. aureus (adults), N. gonorrhoeae (young sexually active adults), Streptococcus spp.

### Important Caveats
- Crystals and infection can coexist - always send culture even if crystals are found
- Cell counts overlap between categories; no single cutoff is definitive
- Traumatic tap: Uneven blood distribution across tubes (clears with serial tubes)`,
      keyTerms: [
        { term: "compensated polarized microscopy", definition: "Microscopy technique using polarizing filters and a first-order red compensator to identify crystals by their birefringence" },
        { term: "negatively birefringent", definition: "Crystal appears yellow when aligned parallel to the slow axis of the compensator; characteristic of MSU (gout)" },
        { term: "positively birefringent", definition: "Crystal appears blue when aligned parallel to the slow axis of the compensator; characteristic of CPPD (pseudogout)" },
        { term: "chondrocalcinosis", definition: "Calcification of articular cartilage seen on X-ray, associated with CPPD deposition" },
        { term: "PMN", definition: "Polymorphonuclear leukocytes (neutrophils); predominance suggests infection or crystal arthropathy" },
      ],
      clinicalNotes:
        "Always send synovial fluid for both crystal analysis AND culture, as crystals and infection can coexist in the same joint. A WBC count >50,000/mcL with >90% PMNs strongly suggests septic arthritis but is not pathognomonic. Clinical correlation is essential.",
    },
    4: {
      level: 4,
      summary:
        "Advanced synovial fluid interpretation requires integration of immunologic markers, molecular diagnostics for fastidious organisms, recognition of atypical crystal arthropathies, and nuanced differentiation of overlapping inflammatory and septic patterns.",
      explanation: `## Advanced Synovial Fluid Interpretation

### Diagnostic Performance Characteristics

**WBC Count Thresholds for Septic Arthritis:**
| Threshold | Sensitivity | Specificity | +LR | -LR |
|-----------|-------------|-------------|-----|-----|
| >25,000/mcL | 77% | 73% | 2.9 | 0.32 |
| >50,000/mcL | 62% | 92% | 7.7 | 0.42 |
| >100,000/mcL | 29% | 99% | 28 | 0.71 |

- No single cutoff reliably rules in or rules out septic arthritis
- Pretest probability (clinical gestalt) remains crucial

### Atypical and Challenging Scenarios

**Low-virulence Septic Arthritis:**
- Prosthetic joints, immunosuppressed patients, partially treated infections
- May have WBC <50,000/mcL with lower PMN percentage
- Require extended culture (14 days for slow growers)
- Consider sonication of explanted prosthetic material

**Crystal-Proven Gout WITH Concurrent Infection:**
- Prevalence of coexistent crystal disease and sepsis: ~1.5-5%
- Always culture fluid regardless of crystal presence
- Suspect if response to anti-inflammatory therapy is inadequate

**Reactive Arthritis / Reiter Syndrome:**
- Inflammatory fluid but culture-negative
- Synovial fluid PCR for Chlamydia trachomatis may be positive
- HLA-B27 association

### Advanced Molecular and Immunologic Testing

**Synovial Fluid Biomarkers:**
- Lactate: >10 mmol/L suggests septic arthritis (sensitivity ~56-100%, specificity ~69-98%)
- Leukocyte esterase (urine dipstick on synovial fluid): Rapid bedside test for infection
- Procalcitonin: Elevated in synovial fluid in bacterial arthritis
- Alpha-defensin: High sensitivity/specificity for periprosthetic joint infection

**Molecular Diagnostics:**
- 16S rRNA PCR: Detects bacterial DNA in culture-negative cases
- Multiplex PCR panels for prosthetic joint infections
- Next-generation sequencing for polymicrobial or unusual infections

### Synovial Fluid in Systemic Diseases

| Disease | Characteristic Findings |
|---------|------------------------|
| Rheumatoid arthritis | Inflammatory fluid, low complement (C3, C4), elevated RF |
| SLE | Inflammatory fluid, LE cells (rare), low complement, positive ANA |
| Amyloidosis | Congo red positive fragments |
| Hemochromatosis | CPPD crystals, iron stain positive |
| Pigmented villonodular synovitis | Hemorrhagic, hemosiderin-laden macrophages |
| Tumor (synovial sarcoma) | Hemorrhagic, malignant cells on cytology |

### Prosthetic Joint Infection (PJI) Criteria (MSIS/ICM)

Major criteria (either is diagnostic):
1. Two positive periprosthetic cultures with identical organism
2. Sinus tract communicating with joint

Minor criteria (combined scoring):
- Elevated serum CRP and ESR
- Elevated synovial WBC or PMN%
- Positive alpha-defensin
- Elevated synovial CRP
- Positive single culture`,
      keyTerms: [
        { term: "alpha-defensin", definition: "Antimicrobial peptide with high sensitivity and specificity for periprosthetic joint infection" },
        { term: "16S rRNA PCR", definition: "Molecular technique amplifying bacterial ribosomal RNA gene to detect organisms in culture-negative specimens" },
        { term: "leukocyte esterase", definition: "Enzyme released by neutrophils; urine dipstick applied to synovial fluid as rapid bedside test for infection" },
        { term: "sonication", definition: "Ultrasound technique to dislodge biofilm organisms from explanted prosthetic material for culture" },
      ],
      clinicalNotes:
        "In the setting of prosthetic joints, standard WBC thresholds for septic arthritis do not apply. PJI is defined by lower thresholds (WBC >3,000/mcL, PMN >80% for chronic PJI). Alpha-defensin lateral flow assay provides rapid, high-accuracy diagnosis at the bedside.",
    },
    5: {
      level: 5,
      summary:
        "Expert-level synovial fluid interpretation integrates multi-omics biomarker panels, machine learning-assisted crystal detection, evolving PJI diagnostic criteria, and evidence-based arthrocentesis practice in the context of anticoagulation, immunocompromise, and rare crystal arthropathies.",
      explanation: `## Expert-Level Synovial Fluid Interpretation

### Evolving Diagnostic Paradigms

**Multi-Omics Synovial Fluid Profiling:**
- Proteomics: Identification of novel biomarkers (e.g., S100A8/A9 calprotectin) for differentiating crystal from septic arthritis
- Metabolomics: Synovial fluid metabolite panels may distinguish RA subtypes and predict erosive disease
- Transcriptomics: Synovial tissue gene expression profiling guides biologic therapy selection in RA

**Machine Learning in Crystal Detection:**
- Automated polarized microscopy with AI-assisted crystal identification
- Sensitivity and specificity approaching expert microscopists
- Reduces inter-observer variability in crystal identification
- Potential for point-of-care crystal analysis

### Rare and Complex Crystal Arthropathies

**Basic Calcium Phosphate (BCP/Hydroxyapatite):**
- Not visible on standard compensated polarized microscopy
- Identified by alizarin red S stain, TEM, or Raman spectroscopy
- Associated with Milwaukee shoulder syndrome, calcific tendinitis
- May cause severe destructive arthropathy

**Calcium Oxalate:**
- Bipyramidal crystals, positively birefringent
- Associated with primary oxalosis, chronic dialysis, ethylene glycol poisoning
- Often overlooked on routine analysis

**Lipid Crystals:**
- Maltese cross pattern under polarized light
- Seen in pancreatic panniculitis with joint involvement
- Can be confused with other crystal types

### Evidence-Based Arthrocentesis Practice

**Anticoagulation and Arthrocentesis:**
- INR <1.5: Generally safe for arthrocentesis of large joints
- INR 1.5-3.0: Benefit typically outweighs risk for suspected septic arthritis
- DOACs: No absolute contraindication for diagnostic arthrocentesis
- Thrombocytopenia: Platelet count >20,000/mcL generally acceptable for large joint aspiration
- Evidence level: Largely expert consensus; no RCTs

**Immunocompromised Host Considerations:**
- Lower WBC thresholds for concern (>2,000/mcL may be significant)
- Expanded microbiologic workup: AFB culture, fungal culture
- Consider atypical organisms: Mycobacteria, Nocardia, fungi (Cryptococcus, Sporothrix)
- Prolonged culture protocols (hold cultures for 14+ days)

### 2023 ICM PJI Diagnostic Criteria Update

**Preoperative Scoring (minor criteria):**
| Test | Score |
|------|-------|
| Serum CRP >1 mg/dL | 2 |
| D-dimer >860 ng/mL | 2 |
| ESR >30 mm/hr | 1 |
| Synovial WBC >3,000 | 3 |
| Synovial PMN >80% | 2 |
| Synovial alpha-defensin positive | 3 |
| Synovial CRP >6.9 mg/L | 1 |
- Score >= 6: Infected; 4-5: Inconclusive; <= 3: Not infected

### Quality Assurance and Pitfalls

**Pre-analytic Variables:**
- Oxalate anticoagulant tubes produce artifactual crystals mimicking CPPD
- Use heparin (green top) or EDTA (lavender top) tubes for crystal analysis
- Delay in processing reduces crystal detection sensitivity
- Refrigeration may cause ex vivo crystal precipitation

**Diagnostic Pitfalls:**
- Steroid crystals (post-injection) mimic MSU - obtain history of prior injection
- Talc or starch granules from gloves may appear birefringent
- Hemarthrosis from coagulopathy vs traumatic tap: xanthochromia and hemosiderin-laden macrophages suggest chronic hemarthrosis
- Low-grade PJI: Negative cultures in up to 15% of cases even with optimal technique

### Synovial Biopsy and Advanced Tissue Analysis

**Indications for Synovial Biopsy:**
- Chronic monoarthritis of unclear etiology
- Suspected granulomatous disease (TB, sarcoidosis)
- Suspected malignancy (synovial sarcoma, PVNS)
- Research: Synovial tissue analysis to guide RA treatment (STRAP, R4RA trials)

**Emerging Synovial Tissue Pathotypes (RA):**
- Lymphoid-rich: B-cell aggregates, responds to rituximab
- Myeloid-rich: Macrophage dominant, responds to TNF inhibitors
- Pauci-immune/fibroid: Poor response to biologics`,
      keyTerms: [
        { term: "alizarin red S stain", definition: "Histochemical stain for calcium-containing crystals (BCP/hydroxyapatite) not visible on standard polarized microscopy" },
        { term: "Raman spectroscopy", definition: "Advanced technique for crystal identification based on molecular vibration signatures; gold standard for ambiguous crystals" },
        { term: "synovial pathotype", definition: "Classification of synovial tissue inflammation pattern guiding biologic therapy selection in rheumatoid arthritis" },
        { term: "ICM criteria", definition: "International Consensus Meeting criteria for diagnosing periprosthetic joint infection using weighted scoring" },
      ],
      clinicalNotes:
        "Expert synovial fluid interpretation demands integration of clinical context, advanced laboratory techniques, and awareness of pre-analytic pitfalls. Emerging multi-omics approaches and AI-assisted crystal detection are redefining diagnostic accuracy. For prosthetic joints, always apply PJI-specific criteria rather than native joint thresholds. Synovial biopsy with tissue pathotyping is an emerging paradigm for precision rheumatology.",
    },
  },

  media: [],
  citations: [
    {
      id: "kelley-textbook-synovial",
      type: "textbook",
      title: "Firestein & Kelley's Textbook of Rheumatology",
      authors: ["Firestein GS", "Budd RC", "Gabriel SE"],
      source: "Elsevier",
      chapter: "Synovial Fluid Analysis",
    },
    {
      id: "shmerling-synovial-review",
      type: "article",
      title: "Synovial fluid analysis: A critical reappraisal",
      authors: ["Shmerling RH"],
      source: "Rheumatic Disease Clinics of North America",
    },
  ],
  crossReferences: [
    { targetId: "cbc-interpretation", targetType: "concept", relationship: "related" },
    { targetId: "inflammatory-markers", targetType: "concept", relationship: "related" },
  ],
  tags: {
    systems: ["musculoskeletal"],
    topics: ["laboratory", "rheumatology", "orthopedics", "diagnosis", "emergency-medicine"],
    clinicalRelevance: "critical",
    examRelevance: { usmle: true, nbme: true, shelf: ["medicine", "surgery", "emergency-medicine"] },
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: "published",
};
