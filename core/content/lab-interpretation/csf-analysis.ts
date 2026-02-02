/**
 * Cerebrospinal Fluid (CSF) Analysis Interpretation Educational Content
 *
 * Comprehensive educational content for understanding and interpreting
 * cerebrospinal fluid studies including cell counts, chemistry, microbiology,
 * and pattern recognition for meningitis, multiple sclerosis, and malignancy.
 *
 * Spanish: Analisis de Liquido Cefalorraquideo (LCR)
 */

import { EducationalContent } from "../types";

export const csfAnalysisContent: EducationalContent = {
  id: "csf-analysis",
  type: "concept",
  name: "Cerebrospinal Fluid Analysis",
  alternateNames: [
    "CSF Analysis",
    "Spinal Fluid Interpretation",
    "Lumbar Puncture Results",
    "Analisis de Liquido Cefalorraquideo",
    "Analisis de LCR",
  ],

  levels: {
    1: {
      level: 1,
      summary:
        "CSF analysis is a test of the fluid around your brain and spinal cord to look for infections, bleeding, and other problems.",
      explanation: `Your brain and spinal cord are surrounded by a clear liquid called **cerebrospinal fluid** (CSF). This fluid protects your brain like a cushion and helps remove waste.

To test this fluid, a doctor performs a procedure called a **lumbar puncture** (also called a "spinal tap"). A small needle is inserted into the lower back to collect a sample of the fluid.

Doctors test the CSF to look for:

1. **Infections** - Like meningitis, which is an infection of the covering of the brain. The test can show which type of germ is causing the infection (bacteria, viruses, or fungi).

2. **Bleeding** - If there is blood in the fluid, it could mean there is bleeding around the brain.

3. **Other diseases** - Like multiple sclerosis or cancer that has spread to the brain or spine.

The tests look at:
- **How clear the fluid is** - Healthy CSF is crystal clear like water. Cloudy fluid may mean infection.
- **Cells** - Healthy CSF has very few cells. Extra white blood cells suggest infection or inflammation.
- **Protein and sugar** - These levels change with different diseases.
- **Germs** - Doctors try to see and grow bacteria or other germs from the fluid.

**Spanish / Espanol:** El analisis de liquido cefalorraquideo es una prueba del liquido que rodea su cerebro y medula espinal para buscar infecciones, sangrado y otros problemas.`,
      keyTerms: [
        {
          term: "cerebrospinal fluid",
          definition:
            "The clear liquid that surrounds and protects your brain and spinal cord",
        },
        {
          term: "lumbar puncture",
          definition:
            "A procedure where a needle is put into the lower back to collect spinal fluid; also called a spinal tap",
        },
        {
          term: "meningitis",
          definition:
            "An infection or inflammation of the protective layers covering the brain and spinal cord",
        },
      ],
      analogies: [
        "CSF is like the water in a snow globe - it surrounds and cushions the brain. Testing it is like checking the water to see if anything unwanted has gotten inside.",
        "A lumbar puncture is like drawing water from a well - you insert a tube into a safe space to collect a small sample of the fluid inside.",
      ],
      patientCounselingPoints: [
        "A lumbar puncture may sound scary, but it is a common and generally safe procedure.",
        "You may have a headache afterward - lying flat and drinking fluids can help.",
        "Let your doctor know right away if you have severe headache, fever, or numbness after the procedure.",
      ],
    },

    2: {
      level: 2,
      summary:
        "CSF analysis evaluates opening pressure, cell counts, protein, glucose, Gram stain, and culture to differentiate bacterial, viral, fungal, and tuberculous meningitis.",
      explanation: `CSF analysis involves multiple tests performed on fluid obtained via lumbar puncture. Understanding the normal values and how they change in disease is essential.

## Normal CSF Values

| Parameter | Normal Value |
|-----------|-------------|
| Opening pressure | 6-20 cm H2O (patient lying on side) |
| Appearance | Clear, colorless |
| WBC count | 0-5 cells/mcL (all lymphocytes or monocytes) |
| RBC count | 0 |
| Protein | 15-45 mg/dL |
| Glucose | 40-70 mg/dL (or >60% of serum glucose) |
| Gram stain | No organisms seen |
| Culture | No growth |

## CSF Patterns in Meningitis

| Feature | Bacterial | Viral | Fungal | TB |
|---------|-----------|-------|--------|-----|
| Opening pressure | Very high (>30) | Normal/mildly elevated | Elevated | Elevated |
| WBC count | 1,000-5,000+ | 10-500 | 10-500 | 10-500 |
| Cell type | Neutrophils | Lymphocytes | Lymphocytes | Lymphocytes |
| Protein | Very high (>250) | Mildly elevated | Elevated | Very high |
| Glucose | Very low (<40) | Normal | Low | Very low |
| Gram stain | Positive 60-80% | Negative | India ink (crypto) | AFB (rarely positive) |

## Other Important CSF Tests

- **Xanthochromia**: Yellow color from broken-down blood; suggests subarachnoid hemorrhage (SAH) that occurred hours to days earlier
- **Oligoclonal bands**: Bands of antibodies found in CSF but not blood; seen in multiple sclerosis (MS)
- **Cytology**: Looking for cancer cells in the fluid

## Key Points
- Always send a simultaneous serum glucose to interpret CSF glucose
- A traumatic tap (blood from the needle) can confuse the results - correction formulas exist
- Tubes are numbered (1-4); compare tube 1 and tube 4 cell counts to distinguish traumatic tap from true hemorrhage

**Spanish / Espanol:** El analisis de LCR evalua la presion de apertura, recuentos celulares, proteinas, glucosa, tincion de Gram y cultivo para diferenciar meningitis bacteriana, viral, fungica y tuberculosa.`,
      keyTerms: [
        {
          term: "opening pressure",
          definition:
            "The pressure of the CSF measured when the needle first enters the spinal fluid space",
          pronunciation: "OH-pen-ing PREH-sher",
        },
        {
          term: "xanthochromia",
          definition:
            "A yellowish color of CSF caused by breakdown of red blood cells, suggesting prior bleeding",
          pronunciation: "zan-tho-CROW-mee-ah",
        },
        {
          term: "oligoclonal bands",
          definition:
            "Bands of antibodies found in CSF that suggest immune activity in the nervous system, commonly seen in multiple sclerosis",
        },
        {
          term: "traumatic tap",
          definition:
            "When the lumbar puncture needle causes bleeding that mixes with the CSF sample, potentially confusing results",
        },
      ],
      analogies: [
        "CSF glucose drops in bacterial meningitis because the bacteria eat the sugar - like an uninvited guest raiding your refrigerator.",
        "Oligoclonal bands are like fingerprints of an immune system attack happening specifically inside the nervous system.",
      ],
    },

    3: {
      level: 3,
      summary:
        "Systematic CSF interpretation requires integration of opening pressure, cell count corrections, protein-glucose ratios, advanced microbiologic studies, and pattern recognition to distinguish infectious, inflammatory, and malignant etiologies.",
      explanation: `## Systematic CSF Interpretation

### Opening Pressure

| Pressure (cm H2O) | Interpretation |
|--------------------|---------------|
| <6 | Low - CSF leak, post-LP, over-drainage of shunt |
| 6-20 | Normal |
| 20-25 | Borderline elevated |
| >25 | Elevated - infection, mass lesion, idiopathic intracranial hypertension |
| >30 | Significantly elevated - bacterial meningitis, cryptococcal meningitis, SAH |

**Critical:** Obtain neuroimaging before LP if papilledema, focal neurologic deficits, altered consciousness, or immunocompromise (to rule out mass lesion).

### Cell Count Analysis

**Traumatic Tap Correction:**
- Subtract 1 WBC per 700-1000 RBCs (based on peripheral blood ratio)
- Formula: Corrected WBC = CSF WBC - (CSF RBC x Peripheral WBC / Peripheral RBC)
- Compare tube 1 to tube 4: traumatic tap shows decreasing RBCs; SAH shows consistent RBCs

**WBC Differential Significance:**
| Predominant Cell | Differential Diagnosis |
|-----------------|----------------------|
| Neutrophils (PMNs) | Bacterial meningitis (early), early viral, chemical meningitis |
| Lymphocytes | Viral meningitis, TB, fungal, partially treated bacterial, syphilis, Lyme, MS |
| Eosinophils (>10%) | Parasitic (cysticercosis, angiostrongylus), coccidioidomycosis, drug reaction |

**Note:** Early viral meningitis may show initial neutrophilic predominance that shifts to lymphocytic within 12-24 hours.

### Protein Analysis

| CSF Protein (mg/dL) | Interpretation |
|---------------------|---------------|
| 15-45 | Normal |
| 45-100 | Mild elevation - viral meningitis, MS, diabetic neuropathy |
| 100-500 | Moderate elevation - TB, fungal, Guillain-Barre, CNS lymphoma |
| >500 | Marked elevation - Bacterial meningitis, spinal block (Froin syndrome), GBS |
| >1000 | Spinal block, meningeal carcinomatosis, severe bacterial meningitis |

### Glucose Interpretation

- CSF:serum glucose ratio normally >0.6
- Ratio <0.4 is abnormal; <0.3 strongly suggests bacterial, TB, or fungal meningitis
- Viral meningitis typically does NOT lower CSF glucose (exception: mumps, LCMV)
- Hypoglycorrhachia differential: bacterial, TB, fungal, carcinomatous meningitis, neurosarcoidosis, SAH

### Advanced Microbiologic Studies

| Test | Target | Sensitivity | Key Points |
|------|--------|-------------|------------|
| Gram stain | Bacteria | 60-80% | Depends on organism burden and species |
| Bacterial culture | Bacteria | 70-85% | Gold standard; blood cultures often positive too |
| Latex agglutination | Bacterial antigens | Varies | S. pneumoniae, N. meningitidis, H. influenzae, GBS, E. coli |
| Multiplex PCR (FilmArray) | Multiple pathogens | >90% | Rapid panel: bacteria, viruses, fungi in ~1 hour |
| HSV PCR | HSV-1, HSV-2 | 96-98% | Can be negative in first 72 hrs; repeat if high suspicion |
| Cryptococcal antigen (CrAg) | Cryptococcus | 95-99% | More sensitive than India ink; also test serum |
| AFB smear/culture | Mycobacterium TB | 10-30% / 50-70% | Culture takes weeks; nucleic acid amplification faster |
| VDRL | Neurosyphilis | 30-70% | Specific but not sensitive; FTA-ABS more sensitive |
| Cytology | Malignant cells | 50-70% (single LP) | Repeat LPs increase yield to ~90% |

### Special Studies

**Oligoclonal Bands (OCBs):**
- Unique to CSF (not present in paired serum): >95% of MS patients
- Also seen in: neurosarcoidosis, CNS vasculitis, CNS infections, paraneoplastic syndromes
- 2+ bands in CSF not in serum considered positive
- IgG index = (CSF IgG / Serum IgG) / (CSF albumin / Serum albumin) - elevated >0.7 suggests intrathecal IgG synthesis

**Xanthochromia:**
- Visual inspection vs spectrophotometry (more sensitive)
- Appears 2-4 hours after SAH onset, persists for 2-4 weeks
- CT head detects SAH within 6 hours with >98% sensitivity; LP needed when CT negative but clinical suspicion high
- Bilirubin in CSF (spectrophotometry) differentiates true SAH from traumatic tap

**Spanish / Espanol:** La interpretacion sistematica del LCR requiere integracion de presion de apertura, correcciones de recuento celular, cocientes de proteinas y glucosa, estudios microbiologicos avanzados y reconocimiento de patrones para distinguir etiologias infecciosas, inflamatorias y malignas.`,
      keyTerms: [
        {
          term: "hypoglycorrhachia",
          definition:
            "Abnormally low CSF glucose; seen in bacterial, tuberculous, and fungal meningitis, and carcinomatous meningitis",
          pronunciation: "HY-po-GLY-ko-RAY-kee-ah",
        },
        {
          term: "Froin syndrome",
          definition:
            "Xanthochromic CSF with very high protein and clotting, caused by spinal block below the obstruction",
        },
        {
          term: "IgG index",
          definition:
            "A calculated ratio comparing IgG production in the CSF to serum; elevated values suggest intrathecal antibody synthesis as in MS",
        },
        {
          term: "multiplex PCR",
          definition:
            "A rapid molecular test that can simultaneously detect DNA/RNA from multiple bacteria, viruses, and fungi in CSF",
        },
      ],
      clinicalNotes:
        "Do not delay empiric antibiotics while awaiting LP results in suspected bacterial meningitis. Prior antibiotics reduce culture sensitivity but Gram stain and PCR may still be positive. Always send simultaneous serum glucose for CSF:serum ratio calculation.",
    },

    4: {
      level: 4,
      summary:
        "Advanced CSF interpretation integrates biomarker panels for neurodegenerative diseases, flow cytometry for CNS lymphoma, next-generation sequencing for atypical infections, and nuanced assessment of post-neurosurgical CSF to differentiate infection from expected changes.",
      explanation: `## Advanced CSF Analysis

### Biomarker Panels for Neurodegenerative Disease

**Alzheimer Disease (AT(N) Framework):**
| Biomarker | Normal | Alzheimer Pattern | Interpretation |
|-----------|--------|-------------------|----------------|
| A-beta-42 | >500 pg/mL | Decreased (<500) | Amyloid deposition in brain (not CSF) |
| A-beta-42/40 ratio | >0.052 | Decreased | More reliable than A-beta-42 alone |
| Total tau (t-tau) | <400 pg/mL | Elevated | Neurodegeneration (nonspecific) |
| Phospho-tau (p-tau 181) | <60 pg/mL | Elevated | Specific for AD-type tangle pathology |

**Other Neurodegenerative Biomarkers:**
- **14-3-3 protein**: Positive in Creutzfeldt-Jakob disease (CJD); also in stroke, encephalitis (limited specificity)
- **RT-QuIC (Real-Time Quaking-Induced Conversion)**: >92% sensitive and >99% specific for prion diseases
- **Neurofilament light chain (NfL)**: Nonspecific axonal damage marker; elevated in MS relapses, ALS, FTD

### Flow Cytometry for CNS Lymphoma

**Indications:** Suspected primary CNS lymphoma (PCNSL) or secondary CNS involvement
- Identifies clonal B-cell population: kappa or lambda light chain restriction
- Immunophenotyping: CD19+, CD20+, CD10+/-, BCL2+
- Sensitivity ~50-80% for PCNSL; improved with repeat sampling and high-volume specimens (>10 mL)
- Cytology + flow cytometry combined > either alone

**MYD88 L265P mutation testing:**
- Present in >85% of PCNSL (DLBCL type)
- Can be detected in CSF cell-free DNA
- Useful when cytology and flow are negative but suspicion remains

### Next-Generation Sequencing (Metagenomic NGS)

**CSF mNGS (e.g., Karius, UCSF clinical mNGS):**
- Unbiased detection of bacteria, viruses, fungi, parasites from CSF
- Does NOT require a priori suspicion for specific organisms
- Particularly valuable for: immunocompromised patients, culture-negative meningitis/encephalitis, atypical presentations
- Turnaround: 24-48 hours (plasma-based) or 48-96 hours (CSF-based)
- Limitations: cannot distinguish colonization from infection, background DNA contamination, cost

### Post-Neurosurgical CSF Interpretation

**Challenge:** Differentiating ventriculitis/meningitis from expected post-operative changes.

**Expected Post-Surgical Changes:**
- Elevated protein (may be >200 mg/dL from blood-brain barrier disruption)
- Elevated WBC (meningeal irritation, blood products)
- RBCs (surgical bleeding)

**Features Suggesting Infection:**
- CSF glucose <50% of serum glucose (most specific single finding)
- Rising CSF lactate (>4 mmol/L highly suggestive)
- CSF procalcitonin (emerging role; >0.075 ng/mL suggests bacterial infection)
- Positive culture (but contamination possible; interpret with clinical picture)
- Rising cell count or protein on serial LPs

**CSF Shunt Infection:**
- Most common: coagulase-negative staphylococci (S. epidermidis)
- CSF from shunt reservoir preferred over lumbar puncture
- Biofilm-associated; often require hardware removal

### Autoimmune Encephalitis CSF Findings

| Antibody | Syndrome | CSF Findings |
|----------|----------|-------------|
| NMDA-R | Anti-NMDA receptor encephalitis | Lymphocytic pleocytosis, OCBs, antibody titer |
| LGI1 | Limbic encephalitis, faciobrachial dystonic seizures | Often normal CSF; serum antibody more sensitive |
| CASPR2 | Morvan syndrome, limbic encephalitis | Normal or mild pleocytosis |
| GABA-B | Limbic encephalitis, seizures | Mild pleocytosis; 50% have cancer |
| DPPX | Encephalitis with hyperekplexia, diarrhea | Mild pleocytosis |

- Antibody testing: send paired CSF AND serum
- CSF more sensitive for NMDA-R; serum more sensitive for LGI1
- Consider paraneoplastic panel when autoimmune encephalitis confirmed

### Leptomeningeal Carcinomatosis

**Diagnostic Approach:**
- CSF cytology: 50-60% sensitivity on first LP; rises to ~90% with 3 LPs
- High-volume specimens (>10 mL) improve yield
- Cell-free tumor DNA (cfDNA) in CSF: emerging; may detect before cytology
- CSF circulating tumor cells (CTCs): experimental but promising
- Elevated CSF protein, low glucose (30-40% of cases), lymphocytic pleocytosis

**Spanish / Espanol:** La interpretacion avanzada del LCR integra paneles de biomarcadores para enfermedades neurodegenerativas, citometria de flujo para linfoma del SNC, secuenciacion de nueva generacion para infecciones atipicas y evaluacion del LCR post-neuroquirurgico para diferenciar infeccion de cambios esperados.`,
      keyTerms: [
        {
          term: "RT-QuIC",
          definition:
            "Real-Time Quaking-Induced Conversion - a highly specific assay for prion diseases that detects misfolded prion protein in CSF",
          pronunciation: "are-tee-KWIK",
        },
        {
          term: "metagenomic next-generation sequencing",
          definition:
            "Unbiased sequencing of all nucleic acids in a CSF sample to identify any pathogen without prior suspicion",
        },
        {
          term: "neurofilament light chain",
          definition:
            "A structural protein released from damaged axons; a nonspecific CSF biomarker of neurodegeneration and axonal injury",
        },
        {
          term: "leptomeningeal carcinomatosis",
          definition:
            "Spread of cancer cells to the meninges and CSF spaces, causing multifocal neurologic deficits",
        },
      ],
      clinicalNotes:
        "Post-neurosurgical CSF interpretation is challenging; serial CSF sampling and trending CSF lactate and glucose ratios are more informative than single values. Consider metagenomic NGS for immunocompromised patients with unexplained CNS inflammation when standard microbiologic testing is negative.",
    },

    5: {
      level: 5,
      summary:
        "Expert CSF interpretation encompasses liquid biopsy techniques for CNS malignancy, high-dimensional immune profiling via mass cytometry, cutting-edge biomarker validation studies, precision diagnostics for rare infections, and the evolving evidence base for CSF-based prognostication.",
      explanation: `## Expert-Level CSF Analysis

### CSF as Liquid Biopsy for CNS Tumors

**Cell-Free DNA (cfDNA) Analysis:**
- CSF cfDNA concentration is orders of magnitude higher than plasma cfDNA for CNS tumors
- Targeted sequencing panels detect actionable mutations (BRAF V600E, IDH1/2, EGFR, TP53)
- Longitudinal cfDNA monitoring: detects molecular relapse before MRI changes
- Clinical utility: avoids repeat stereotactic biopsy for molecular profiling

**CSF Circulating Tumor DNA (ctDNA) Applications:**
| Application | Method | Sensitivity |
|-------------|--------|-------------|
| Glioma IDH status | Digital droplet PCR | 60-80% |
| PCNSL MYD88/CD79B | Targeted NGS | 75-90% |
| Leptomeningeal mets | Targeted panel | 80-95% |
| Treatment monitoring | Serial ctDNA | Emerging data |
| Minimal residual disease | Ultra-deep sequencing | Under investigation |

**Methylation Profiling:**
- CSF cfDNA methylation arrays can classify CNS tumor type without tissue biopsy
- Matches tissue diagnosis in >80% of cases with detectable cfDNA
- Particularly useful for posterior fossa and brainstem tumors (biopsy high risk)

### High-Dimensional CSF Immune Profiling

**Mass Cytometry (CyTOF) and Spectral Flow Cytometry:**
- Simultaneous measurement of 40+ markers per cell
- Reveals immune cell subsets in CSF not identifiable by conventional flow cytometry
- Applications: MS phenotyping, autoimmune encephalitis characterization, checkpoint inhibitor CNS toxicity

**Single-Cell RNA Sequencing (scRNA-seq):**
- CSF cell transcriptomics identifies disease-specific immune signatures
- Differentiates MS subtypes, distinguishes infectious from autoimmune inflammation
- Research-stage; not yet clinical standard

**Intrathecal Immune Activation Metrics:**
- Reiber's quotient diagrams: plots CSF/serum albumin ratio against IgG, IgA, IgM ratios
- Identifies intrathecal synthesis vs blood-brain barrier (BBB) dysfunction
- Pattern recognition: IgG-dominant (MS), three-class (neurosyphilis), IgA-dominant (neurotuberculosis)

### Precision Diagnostics for Rare CNS Infections

**Unbiased Metagenomic Sequencing - Evidence and Limitations:**
- Landmark study (Wilson et al., NEJM 2019): mNGS diagnosed neuroleptospirosis missed by all standard tests
- Prospective studies show ~10-15% diagnostic yield in culture-negative meningitis/encephalitis
- Key limitation: distinguishing pathogen from contaminant requires bioinformatic thresholds (reads per million, z-score >3)
- Environmental DNA contamination: water-borne organisms (Bradyrhizobium, Delftia) are frequent false positives

**CXCL13 as Biomarker:**
- Elevated in neuroborreliosis (Lyme), CNS lymphoma, neurosyphilis
- May serve as treatment response marker in neuroborreliosis
- Not pathognomonic: also elevated in other B-cell rich CSF inflammation

**CSF Adenosine Deaminase (ADA):**
- Elevated (>10 IU/L) in TB meningitis; highly useful in endemic settings
- Meta-analysis: sensitivity 79%, specificity 91% for TB meningitis
- Also elevated in CNS lymphoma, neurosarcoidosis (limits specificity)

### Evolving Prognostic Biomarkers

**Traumatic Brain Injury (TBI):**
- S100B, GFAP, UCH-L1: FDA-cleared blood biomarkers (aid CT decision-making)
- CSF neurofilament light (NfL): correlates with injury severity and long-term outcomes
- CSF tau: elevated acutely; prognostic for chronic sequelae

**Status Epilepticus:**
- CSF neuron-specific enolase (NSE) and tau: correlate with neuronal injury and prognosis
- Help differentiate epileptic brain damage from anoxic injury in post-cardiac arrest patients

**Subarachnoid Hemorrhage:**
- CSF endothelin-1, S100B: early markers of vasospasm risk
- CSF bilirubin spectrophotometry: gold standard for SAH detection when CT is negative
- Ferritin in CSF: elevated after SAH; persists longer than xanthochromia

### Quality and Preanalytic Considerations

**CSF Processing Protocols:**
- Tube 1: Chemistry and immunology (protein, glucose, OCBs, IgG index)
- Tube 2: Microbiology (Gram stain, culture, molecular testing)
- Tube 3: Cell count and differential (cytology if indicated)
- Tube 4: Special studies (reserve/repeat cell count)
- Note: Tube numbering conventions vary by institution

**Preanalytic Variables Affecting Results:**
- Cell lysis: WBCs degrade rapidly; process within 30 minutes for accurate counts
- Protein: stable at 4 degrees C for 72 hours
- Glucose: glycolysis continues ex vivo; process promptly or use fluoride tube
- Cytology: yield drops significantly if not processed immediately; Cytospin within 30 minutes

**Repeat Lumbar Puncture Indications:**
- Clinical worsening despite appropriate therapy
- Confirmation of CSF sterilization (bacterial meningitis, especially neonatal or resistant organisms)
- Increased cytology yield in suspected leptomeningeal disease
- Monitoring treatment response in CNS infections (cryptococcal meningitis: repeat at 2 weeks for clearance)

### Emerging Technologies

**Digital Biomarker Platforms:**
- Simoa (Single Molecule Array): ultrasensitive immunoassay detecting femtomolar concentrations
- Applications: NfL, p-tau 217, GFAP at previously undetectable levels
- May enable blood-based screening before CSF sampling for neurodegenerative diseases

**Artificial Intelligence in CSF Cytology:**
- Deep learning algorithms for automated malignant cell detection
- Potential to reduce interobserver variability and improve sensitivity
- Currently in validation phase across multiple centers

**Spanish / Espanol:** La interpretacion experta del LCR abarca tecnicas de biopsia liquida para malignidad del SNC, perfilado inmunologico de alta dimension mediante citometria de masas, estudios de validacion de biomarcadores de vanguardia, diagnosticos de precision para infecciones raras y la base de evidencia en evolucion para la prognosticacion basada en LCR.`,
      keyTerms: [
        {
          term: "cell-free DNA",
          definition:
            "Fragments of DNA released from tumor or dying cells into CSF; enables molecular profiling without tissue biopsy",
        },
        {
          term: "Reiber quotient diagram",
          definition:
            "A graphical method plotting CSF/serum immunoglobulin ratios against albumin ratios to distinguish intrathecal synthesis from BBB dysfunction",
        },
        {
          term: "Simoa",
          definition:
            "Single Molecule Array - an ultrasensitive immunoassay platform capable of detecting biomarkers at femtomolar concentrations",
          pronunciation: "sih-MOH-ah",
        },
        {
          term: "metagenomic next-generation sequencing",
          definition:
            "Unbiased sequencing of all nucleic acids in CSF to identify any pathogen; 10-15% diagnostic yield in culture-negative encephalitis",
        },
      ],
      clinicalNotes:
        "Expert CSF interpretation requires integration of clinical presentation, neuroimaging, and an expanding portfolio of molecular and immunologic biomarkers. Multidisciplinary collaboration with neuro-oncology, neuroimmunology, infectious disease, and neuropathology is essential. The field is rapidly evolving with liquid biopsy, digital biomarker platforms, and AI-assisted cytology approaching clinical implementation.",
    },
  },

  media: [],
  citations: [
    {
      id: "fishman-csf",
      type: "textbook",
      title: "Fishman's Cerebrospinal Fluid in Diseases of the Nervous System",
      authors: ["Fishman RA"],
      source: "Saunders/Elsevier",
      chapter: "CSF Examination",
    },
    {
      id: "tunkel-meningitis-2017",
      type: "article",
      title: "Practice Guidelines for the Management of Bacterial Meningitis",
      authors: ["Tunkel AR", "Hartman BJ", "Kaplan SL"],
      source: "Clinical Infectious Diseases",
    },
    {
      id: "wilson-mngs-2019",
      type: "article",
      title: "Clinical Metagenomic Sequencing for Diagnosis of Meningitis and Encephalitis",
      authors: ["Wilson MR", "Sample HA", "Zorn KC"],
      source: "New England Journal of Medicine",
    },
  ],
  crossReferences: [
    { targetId: "lab-cbc", targetType: "concept", relationship: "related" },
    { targetId: "lab-glucose", targetType: "concept", relationship: "related" },
    { targetId: "lab-protein", targetType: "concept", relationship: "related" },
  ],
  tags: {
    systems: ["neurologic"],
    topics: ["laboratory", "neurology", "infectious-disease", "diagnosis"],
    clinicalRelevance: "critical",
    examRelevance: { usmle: true, nbme: true, shelf: ["medicine", "neurology", "pediatrics"] },
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: "published",
};
