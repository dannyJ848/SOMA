/**
 * Autoimmune Serology Educational Content
 *
 * Comprehensive educational content for understanding and interpreting
 * autoimmune laboratory tests including ANA, rheumatoid factor, and disease-specific antibodies.
 */

import { EducationalContent } from "../types";

export const autoimmuneSerologyContent: EducationalContent = {
  id: "autoimmune-serology-interpretation",
  type: "concept",
  name: "Autoimmune Serology Interpretation",
  alternateNames: ["Autoantibody Testing", "Rheumatologic Labs", "Immunologic Testing"],

  levels: {
    1: {
      level: 1,
      summary: "Autoimmune tests look for antibodies that attack your own body, which can help diagnose diseases like lupus and rheumatoid arthritis.",
      explanation: `Your immune system normally makes antibodies to fight germs. But sometimes, it makes antibodies that attack your own body by mistake. These are called autoantibodies.

**Common autoimmune tests:**

**ANA (Antinuclear Antibody):**
- Looks for antibodies against your own cell nuclei
- Positive in many autoimmune diseases
- Many healthy people also have a positive ANA
- A positive test alone doesn"t mean you have a disease

**Rheumatoid Factor (RF):**
- An antibody found in many people with rheumatoid arthritis
- Can also be positive in other conditions
- Helps diagnose RA along with symptoms

**Anti-CCP:**
- More specific for rheumatoid arthritis than RF
- Helps confirm RA diagnosis

Doctors order these tests when someone has joint pain, rashes, fatigue, or other symptoms that might be from an autoimmune disease. The results must always be interpreted along with your symptoms - a positive test by itself doesn"t diagnose a disease.`,
      keyTerms: [
        { term: "autoimmune disease", definition: "A condition where your immune system attacks your own body" },
        { term: "antibody", definition: "A protein your immune system makes to fight invaders" },
        { term: "autoantibody", definition: "An antibody that mistakenly attacks your own cells" },
        { term: "ANA", definition: "Antinuclear Antibody - tests for antibodies against cell nuclei" },
      ],
      analogies: [
        "Autoantibodies are like security guards who have gotten confused and started arresting the people they\"re supposed to protect.",
        "An ANA test is like a general alarm - it tells you something might be wrong, but you need more tests to figure out exactly what.",
      ],
    },
    2: {
      level: 2,
      summary: "ANA screening is highly sensitive for connective tissue diseases, while specific antibodies like anti-dsDNA and anti-CCP help confirm particular diagnoses.",
      explanation: `## Overview of Autoimmune Testing

### ANA (Antinuclear Antibody)

**Test Characteristics:**
| Feature | Value |
|---------|-------|
| Method | Immunofluorescence (IFA) or ELISA |
| Positive cutoff | Usually ≥1:40 or ≥1:80 |
| Sensitivity for SLE | ~95% |
| Specificity | Low (many false positives) |

**ANA Patterns (IFA):**
| Pattern | Associated Antibodies | Disease Associations |
|---------|----------------------|---------------------|
| Homogeneous | Anti-dsDNA, anti-histone | SLE, drug-induced lupus |
| Speckled | Anti-Smith, anti-RNP | SLE, MCTD, Sjogren |
| Nucleolar | Anti-RNA polymerase | Scleroderma |
| Centromere | Anti-centromere | Limited scleroderma (CREST) |

### Rheumatoid Arthritis Testing

**Rheumatoid Factor (RF):**
| Positive In | Percentage |
|-------------|------------|
| Rheumatoid arthritis | 70-80% |
| Sjogren syndrome | 75-95% |
| Healthy elderly | 5-25% |

**Anti-CCP (Anti-Cyclic Citrullinated Peptide):**
| Feature | Value |
|---------|-------|
| Sensitivity for RA | 70-80% |
| Specificity for RA | 90-95% |
| Prognostic value | Predicts erosive disease |

### Disease-Specific Antibodies

| Antibody | Disease | Notes |
|----------|---------|-------|
| Anti-dsDNA | SLE | Correlates with disease activity |
| Anti-Smith | SLE | Highly specific, low sensitivity |
| Anti-SSA/Ro | Sjogren, SLE | Associated with photosensitivity |
| Anti-SSB/La | Sjogren | More specific than SSA |
| Anti-Jo-1 | Myositis | Associated with ILD |
| Anti-Scl-70 | Diffuse scleroderma | Associated with ILD |`,
      keyTerms: [
        { term: "ANA pattern", definition: "The appearance of staining on immunofluorescence; suggests specific antibodies" },
        { term: "anti-dsDNA", definition: "Antibody against double-stranded DNA; specific for lupus" },
        { term: "anti-CCP", definition: "Anti-Cyclic Citrullinated Peptide; highly specific for rheumatoid arthritis" },
        { term: "specificity", definition: "How well a test identifies people without the disease (fewer false positives)" },
      ],
      analogies: [
        "ANA patterns are like fingerprints - different patterns point toward different diseases.",
        "Anti-CCP is like a more reliable witness than RF - both can identify RA, but anti-CCP is less likely to be wrong.",
      ],
    },
    3: {
      level: 3,
      summary: "Autoimmune serology interpretation requires understanding of test characteristics, clinical context, and diagnostic criteria for accurate disease classification.",
      explanation: `## Systematic Autoimmune Serology Interpretation

### Pre-Test Probability Matters

**When to Order ANA:**
- Clinical features suggesting connective tissue disease
- Not as a screening test in low-risk populations
- ~20% of healthy women have positive ANA at low titer

### ANA Titer Interpretation

| Titer | Interpretation |
|-------|----------------|
| 1:40 | Low positive, often insignificant |
| 1:80 | Borderline, consider clinical context |
| 1:160 | Moderate, more likely significant |
| ≥1:320 | High, warrants specific antibody testing |

### Lupus Serology

**SLE Classification Criteria (2019 ACR/EULAR):**
- Entry criterion: ANA ≥1:80
- Then score clinical and immunologic criteria
- Immunologic criteria include: Anti-dsDNA, anti-Smith, antiphospholipid, low complement

**Monitoring SLE Activity:**
| Marker | Use |
|--------|-----|
| Anti-dsDNA | Rises with flare, especially lupus nephritis |
| C3, C4 | Fall with active disease |
| ESR | Often elevated with activity |
| CRP | Usually normal unless serositis/infection |

### Scleroderma Antibodies

| Antibody | Phenotype | Clinical Features |
|----------|-----------|-------------------|
| Anti-centromere | Limited (CREST) | Pulmonary hypertension, less ILD |
| Anti-Scl-70 (topoisomerase I) | Diffuse | ILD, worse prognosis |
| Anti-RNA polymerase III | Diffuse | Renal crisis, cancer association |

### Myositis-Specific Antibodies

| Antibody | Syndrome | Features |
|----------|----------|----------|
| Anti-Jo-1 | Antisynthetase | ILD, mechanic hands, arthritis |
| Anti-Mi-2 | Dermatomyositis | Classic skin findings, good prognosis |
| Anti-SRP | Necrotizing myopathy | Severe, treatment-resistant |
| Anti-MDA5 | Dermatomyositis | Rapidly progressive ILD |

### Antiphospholipid Syndrome

**Diagnostic Criteria:**
Clinical: Thrombosis or pregnancy morbidity
Laboratory: Positive on 2 occasions ≥12 weeks apart
- Lupus anticoagulant
- Anticardiolipin IgG or IgM
- Anti-β2 glycoprotein I IgG or IgM

### Vasculitis Serology

**ANCA Testing:**
| ANCA Pattern | Target Antigen | Disease |
|--------------|----------------|---------|
| c-ANCA | PR3 (proteinase 3) | GPA (Wegener) |
| p-ANCA | MPO (myeloperoxidase) | MPA, EGPA |

**False Positive ANCA:**
- Infections, malignancy, IBD, drug-induced`,
      keyTerms: [
        { term: "ANCA", definition: "Anti-Neutrophil Cytoplasmic Antibody; associated with vasculitis" },
        { term: "c-ANCA/PR3", definition: "Cytoplasmic ANCA targeting proteinase 3; associated with GPA" },
        { term: "p-ANCA/MPO", definition: "Perinuclear ANCA targeting myeloperoxidase; associated with MPA" },
        { term: "antiphospholipid syndrome", definition: "Autoimmune condition causing clotting and pregnancy complications" },
      ],
      clinicalNotes: "A positive autoantibody does not equal disease. Clinical manifestations must be present. Many healthy people have positive ANA, RF, or other autoantibodies.",
    },
    4: {
      level: 4,
      summary: "Advanced autoimmune serology interpretation integrates antibody profiles, overlap syndromes, and understanding of assay methodology for complex diagnostic scenarios.",
      explanation: `## Advanced Autoimmune Serology Interpretation

### Assay Methodology Considerations

**ANA Testing Methods:**
| Method | Characteristics |
|--------|-----------------|
| IFA (HEp-2 cells) | Gold standard, provides pattern |
| ELISA | Higher throughput, may miss some positives |
| Multiplex bead | Detects multiple specific antibodies |

**When Methods Disagree:**
- IFA positive, ELISA negative: May have unusual antigen target
- IFA negative, ELISA positive: Check for anti-Ro (may be ANA-negative)

### Complex Antibody Profiles

**SLE Antibody Clusters:**
| Cluster | Antibodies | Clinical Features |
|---------|------------|-------------------|
| Anti-dsDNA/anti-nucleosome | dsDNA, nucleosome | Nephritis, active disease |
| Anti-Sm/RNP | Smith, U1-RNP | MCTD, lupus overlap |
| Anti-Ro/La | SSA, SSB | Sjogren overlap, photosensitivity, neonatal lupus |
| Antiphospholipid | aCL, aβ2GPI, LAC | Thrombosis, pregnancy loss |

### Overlap Syndromes

**Mixed Connective Tissue Disease (MCTD):**
- High-titer anti-U1 RNP (≥1:1600)
- Features of SLE, scleroderma, myositis
- Often spares kidneys

**Overlap Myositis:**
| Pattern | Features |
|---------|----------|
| PM/SSc overlap | Anti-PM/Scl |
| DM/SLE overlap | May have multiple antibodies |
| Antisynthetase | Anti-Jo-1, ILD, arthritis |

### Seroconversion and Prediction

**Pre-clinical Autoimmunity:**
- Autoantibodies may precede clinical disease by years
- Anti-CCP can precede RA by 10+ years
- Anti-Ro precedes Sjogren symptoms

**Risk Factors for Progression:**
- Higher antibody titers
- Multiple autoantibodies
- First-degree relatives with autoimmune disease
- Subclinical inflammation markers

### Refractory/Seronegative Disease

**Seronegative RA:**
- 20-30% of RA is RF and CCP negative
- Diagnosis by clinical criteria
- May develop antibodies over time

**ANA-Negative Lupus:**
- Rare (~5%)
- May have isolated anti-Ro
- Consider alternate diagnoses

### Complement Testing

**Complement Consumption:**
| Pattern | Diseases |
|---------|----------|
| Low C3 and C4 | Active SLE, cryoglobulinemia |
| Low C4, normal C3 | Hereditary C4 deficiency, early SLE |
| Low C3, normal C4 | C3 nephritic factor, alternate pathway |

**CH50:**
- Functional total complement assay
- Very low or undetectable: Complement deficiency
- Moderate decrease: Consumption

### Drug-Induced Autoimmunity

**Drug-Induced Lupus:**
| Feature | DIL vs SLE |
|---------|------------|
| Anti-histone | Often positive | Present in SLE too |
| Anti-dsDNA | Usually negative | Often positive in SLE |
| Renal/CNS involvement | Rare | Common in SLE |
| Common drugs | Hydralazine, procainamide, isoniazid, minocycline |

**Checkpoint Inhibitor Autoimmunity:**
- Can trigger any autoimmune condition
- May unmask pre-existing autoantibodies
- Monitor for new autoantibodies during treatment`,
      keyTerms: [
        { term: "MCTD", definition: "Mixed Connective Tissue Disease - overlap syndrome with high-titer anti-U1 RNP" },
        { term: "seroconversion", definition: "Development of positive antibodies, may precede clinical disease" },
        { term: "anti-histone", definition: "Antibody associated with drug-induced lupus" },
        { term: "CH50", definition: "Total hemolytic complement - functional assay of complete complement pathway" },
      ],
      clinicalNotes: "Antibody profiles evolve over time. A patient initially seronegative may develop antibodies. Conversely, antibodies may wax and wane with disease activity or treatment.",
    },
    5: {
      level: 5,
      summary: "Expert autoimmune serology interpretation encompasses emerging biomarkers, molecular classification, and precision medicine approaches to autoimmune disease diagnosis and management.",
      explanation: `## Expert-Level Autoimmune Serology Interpretation

### Molecular Classification

**Extended Myositis Antibody Panel:**
| Antibody | Clinical Syndrome | Prognosis |
|----------|------------------|-----------|
| Anti-Mi-2 | Classic DM | Good response to treatment |
| Anti-TIF1-γ | Cancer-associated DM | Screen for malignancy |
| Anti-NXP-2 | Calcinosis, cancer risk | Juvenile > adult |
| Anti-MDA5 | CADM, rapidly progressive ILD | Poor, may need aggressive treatment |
| Anti-SAE | DM with dysphagia | Moderate |
| Anti-HMGCR | Statin-associated IMNM | Responds to immunosuppression |
| Anti-SRP | Necrotizing myopathy | Resistant to treatment |

### Emerging Biomarkers

**Interferon Signature:**
- Elevated type I interferon pathway genes
- Present in SLE, DM, SSc
- May predict flares and treatment response

**Plasmablast Counts:**
- Elevated in active SLE
- May predict flare
- Potential monitoring tool

**Autoantibody Isotypes:**
- IgG subclasses have different pathogenicity
- IgG1 and IgG3 fix complement
- Research application, not routine

### Precision Medicine Applications

**Pharmacogenomics in Autoimmunity:**
| Gene | Drug | Clinical Impact |
|------|------|-----------------|
| TPMT/NUDT15 | Azathioprine | Myelosuppression risk |
| HLA-B*58:01 | Allopurinol | Severe drug reaction |
| HLA-B*15:02 | Carbamazepine | Stevens-Johnson syndrome |

**Biomarker-Guided Therapy:**
- Anti-dsDNA titer for lupus nephritis flare prediction
- B-cell depletion monitoring post-rituximab
- Interferon signature for anifrolumab response

### Complex Diagnostic Scenarios

**IgG4-Related Disease:**
| Feature | IgG4-RD |
|---------|---------|
| Serum IgG4 | Often elevated (>135 mg/dL) |
| Sensitivity | ~70% |
| Specificity | Variable |
| Tissue diagnosis | Required for definitive diagnosis |

**Autoinflammatory vs Autoimmune:**
| Feature | Autoinflammatory | Autoimmune |
|---------|------------------|------------|
| Adaptive immunity | Not primary | Primary |
| Autoantibodies | Absent | Present |
| Examples | FMF, gout, CAPS | SLE, RA |
| Genetic testing | Often diagnostic | Less helpful |

### Rare Antibody Syndromes

**Stiff-Person Syndrome:**
- Anti-GAD65 antibodies
- High titers (>10,000 U/mL)
- Lower titers seen in type 1 diabetes

**Neuromyelitis Optica (NMO):**
- Anti-aquaporin-4 (AQP4) antibodies
- Highly specific
- MOG antibodies in AQP4-negative cases

**Paraneoplastic Antibodies:**
| Antibody | Cancer Association | Syndrome |
|----------|-------------------|----------|
| Anti-Hu | SCLC | Sensory neuropathy, encephalitis |
| Anti-Yo | Ovarian, breast | Cerebellar degeneration |
| Anti-NMDAR | Ovarian teratoma | Encephalitis |

### Quality and Standardization

**International Consensus Recommendations:**
- Use IFA for ANA screening
- Report titer and pattern
- Reflex to specific antibodies when appropriate
- Consider clinical context in reporting

**Harmonization Efforts:**
- Reference standards for major autoantibodies
- Proficiency testing programs
- Interlaboratory variation still exists

### Future Directions

**Epitope Spreading:**
- Immune response expands to additional autoantigens
- May predict disease progression
- Research tool currently

**Multiplex/Array Technologies:**
- Simultaneous detection of 100+ autoantibodies
- Research and discovery applications
- Moving toward clinical use

**Machine Learning for Diagnosis:**
- Pattern recognition in autoantibody profiles
- Integration with clinical features
- Decision support tools

### Clinical Decision Support

**Testing Algorithms:**
1. Clinical suspicion for CTD
2. ANA screening (IFA preferred)
3. If positive: Specific antibodies based on pattern and clinical features
4. If negative but high suspicion: Consider anti-Ro, myositis panel

**Red Flags Requiring Urgent Evaluation:**
- Anti-MDA5 with dyspnea (rapidly progressive ILD)
- ANCA with pulmonary hemorrhage
- High-titer anti-dsDNA with declining complement (nephritis)
- New anti-TIF1-γ or anti-NXP-2 (cancer screening)`,
      keyTerms: [
        { term: "interferon signature", definition: "Pattern of type I interferon gene expression associated with active autoimmune disease" },
        { term: "anti-MDA5", definition: "Melanoma Differentiation-Associated gene 5 antibody; associated with rapidly progressive ILD" },
        { term: "epitope spreading", definition: "Expansion of autoimmune response to additional autoantigens over time" },
        { term: "IgG4-related disease", definition: "Fibroinflammatory condition with elevated IgG4; can affect multiple organs" },
      ],
      clinicalNotes: "Expert interpretation requires integration of serologic findings with clinical phenotype, imaging, and sometimes tissue diagnosis. Emerging biomarkers and molecular classification are transforming our understanding of autoimmune disease heterogeneity and guiding precision therapy approaches.",
    },
  },

  media: [],
  citations: [
    {
      id: "acr-eular-sle-2019",
      type: "article",
      title: "2019 ACR/EULAR Classification Criteria for SLE",
      source: "Arthritis & Rheumatology",
      authors: ["Aringer M", "Costenbader K", "Daikh D"],
    },
    {
      id: "acr-ana-guidelines",
      type: "article",
      title: "ANA Testing Guidelines",
      source: "American College of Rheumatology",
      authors: ["ACR Committee"],
    },
  ],
  crossReferences: [
    { targetId: "lab-ana", targetType: "concept", relationship: "child" },
    { targetId: "lab-rf", targetType: "concept", relationship: "child" },
    { targetId: "lab-anti-ccp", targetType: "concept", relationship: "child" },
  ],
  tags: {
    systems: ["immune", "musculoskeletal"],
    topics: ["laboratory", "rheumatology", "immunology", "diagnosis"],
    clinicalRelevance: "high",
    examRelevance: { usmle: true, nbme: true, shelf: ["medicine", "pediatrics"] },
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: "published",
};
