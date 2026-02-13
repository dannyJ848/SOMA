import type { EducationalContent } from '../../../types';

export const nhlTypes: EducationalContent = {
  id: 'nhl-types',
  type: 'concept',
  name: 'Non-Hodgkin Lymphoma Types',
  alternateNames: ['NHL Classification', 'Lymphoma Subtypes', 'B-cell and T-cell Lymphomas'],
  levels: {
    1: {
      level: 1,
      summary: 'Non-Hodgkin lymphomas are a diverse group of blood cancers that start in lymphocytes, with many different types that vary in how aggressive they are and how they are treated.',
      explanation: `Non-Hodgkin lymphoma, or NHL, is a group of cancers that affect the lymphatic system. Unlike Hodgkin lymphoma, which has one main type with subtypes, NHL includes many different kinds of lymphomas that all behave differently.

The two main categories are B-cell lymphomas and T-cell lymphomas, depending on which type of white blood cell the cancer starts in. B-cell lymphomas are more common, making up about 85% of all NHL cases.

Some types of NHL grow very slowly and may not need treatment right away. Others grow quickly and need immediate treatment. The most common type is called diffuse large B-cell lymphoma, which is an aggressive but often curable lymphoma.

Doctors classify NHL into over 60 different types based on how the cells look under a microscope, what proteins they express, and their genetic makeup. This classification helps determine the best treatment and predict outcomes.`,
      keyTerms: [
        { term: 'non-Hodgkin lymphoma', definition: 'A group of blood cancers affecting lymphocytes that are not Hodgkin lymphoma' },
        { term: 'B-cell lymphoma', definition: 'Cancer of B lymphocytes, the type that makes antibodies' },
        { term: 'T-cell lymphoma', definition: 'Cancer of T lymphocytes, the type that directly attacks infected cells' },
        { term: 'aggressive lymphoma', definition: 'Fast-growing lymphoma that requires immediate treatment' },
        { term: 'indolent lymphoma', definition: 'Slow-growing lymphoma that may not need immediate treatment' }
      ],
      analogies: [
        'Non-Hodgkin lymphomas are like different breeds of dogs - they all belong to the same family but behave very differently',
        'B-cells and T-cells are like two different branches of the military, each with their own specialized roles'
      ],
      examples: [
        'Follicular lymphoma is an indolent B-cell lymphoma that often grows slowly over many years',
        'Diffuse large B-cell lymphoma is an aggressive lymphoma that can double in size within weeks'
      ]
    },
    2: {
      level: 2,
      summary: 'Non-Hodgkin lymphomas are classified by WHO criteria based on cell of origin, molecular features, and clinical behavior, with B-cell lymphomas comprising 85% of cases including both indolent and aggressive subtypes.',
      explanation: `Non-Hodgkin lymphomas represent a heterogeneous group of lymphoid malignancies with diverse clinical presentations, pathologic features, and treatment approaches. The WHO classification system provides a framework based on lineage, molecular genetics, and clinical behavior.

Major categories of B-cell lymphomas:

Precursor B-cell lymphoblastic leukemia/lymphoma:
- Immature B-cells
- Primarily affects children and young adults
- Treated as acute leukemia

Mature B-cell lymphomas:

Indolent B-cell lymphomas:
1. Follicular lymphoma (FL): 20-25% of NHL
   - Germinal center B-cell origin
   - Typically CD10+, BCL6+, BCL2+
   - t(14;18) in 85% (BCL2 rearrangement)
   - Median age 60-65
   - Incurable with standard therapy but long survival

2. Small lymphocytic lymphoma (SLL)/CLL:
   - Same disease as CLL but nodal presentation
   - CD5+, CD23+
   - Indolent, managed with watch-and-wait or targeted therapy

3. Marginal zone lymphomas:
   - Extranodal MALT type: Associated with chronic inflammation/infection
   - Nodal type: Similar to MALT but nodal presentation
   - Splenic type: Associated with hepatitis C
   - Often localized, may be cured with local therapy

4. Lymphoplasmacytic lymphoma:
   - Associated with Waldenstrom macroglobulinemia
   - MYD88 L265P mutation in 90%
   - IgM paraprotein production

Aggressive B-cell lymphomas:
1. Diffuse large B-cell lymphoma (DLBCL): 25-30% of NHL
   - Most common aggressive lymphoma
   - Rapidly growing masses
   - Multiple molecular subtypes (GCB vs ABC)
   - Curable with R-CHOP in 60-70%

2. Burkitt lymphoma:
   - Very aggressive, rapid doubling time
   - Associated with EBV, HIV, malaria
   - Characteristic "starry sky" histology
   - Curable with intensive chemotherapy

3. Mantle cell lymphoma:
   - CD5+, cyclin D1 positive
   - t(11;14) defining genetic lesion
   - Intermediate between indolent and aggressive
   - Currently incurable

4. Primary mediastinal large B-cell lymphoma:
   - Young women
   - Mediastinal mass
   - Molecularly related to classical HL
   - Treated with dose-adjusted R-EPOCH

T-cell and NK-cell lymphomas:
- Represent 10-15% of NHL
- Generally more aggressive than B-cell lymphomas
- Poorer prognosis overall
- Examples: Peripheral T-cell lymphoma NOS, angioimmunoblastic T-cell lymphoma, anaplastic large cell lymphoma, cutaneous T-cell lymphomas

Clinical behavior classification:
- Indolent: Follicular, MALT, SLL, marginal zone (5-10 year survival common)
- Aggressive: DLBCL, Burkitt, mantle cell, most T-cell lymphomas (require immediate treatment)
- Highly aggressive: Lymphoblastic, Burkitt (cell cycle time hours to days)`,
      keyTerms: [
        { term: 'germinal center', definition: 'Area in lymph node where B-cells mature and undergo mutation' },
        { term: 't(14;18)', definition: 'Translocation placing BCL2 gene near immunoglobulin heavy chain; characteristic of follicular lymphoma' },
        { term: 'MALT', definition: 'Mucosa-associated lymphoid tissue; extranodal lymphoma type' },
        { term: 'R-CHOP', definition: 'Chemotherapy regimen: Rituximab, Cyclophosphamide, Doxorubicin, Vincristine, Prednisone' },
        { term: 'MYD88', definition: 'Gene commonly mutated in lymphoplasmacytic lymphoma and some DLBCL' }
      ],
      analogies: [
        'Follicular lymphoma is like a slow-moving train - you can see it coming and manage it over time',
        'Burkitt lymphoma is like a runaway train - you need to stop it immediately with intensive treatment'
      ],
      examples: [
        'A 60-year-old with slowly enlarging neck nodes over 2 years - follicular lymphoma, grade 1-2',
        'A 45-year-old with rapidly growing abdominal mass and elevated LDH - DLBCL requiring urgent treatment'
      ]
    },
    3: {
      level: 3,
      summary: 'NHL molecular classification reveals distinct pathogenic mechanisms, with DLBCL subdivided into germinal center B-cell and activated B-cell types, and indolent lymphomas characterized by specific oncogenic drivers and microenvironment dependencies.',
      explanation: `The molecular understanding of non-Hodgkin lymphomas has revealed distinct pathogenic pathways, enabling refined classification and targeted therapeutic approaches.

Diffuse Large B-cell Lymphoma molecular subtypes:

Gene expression profiling identifies two main subtypes:

Germinal Center B-cell-like (GCB) DLBCL:
- Derived from germinal center B-cells
- Better prognosis with R-CHOP
- Characteristic alterations: BCL2 rearrangements (with t(14;18)), EZH2 mutations, GNA13 mutations
- Ongoing somatic hypermutation
- LMO2, HGAL expression

Activated B-cell-like (ABC) DLBCL:
- Derived from plasmablasts/post-germinal center B-cells
- Worse prognosis with R-CHOP
- Constitutive NF-kappaB activation
- Characteristic alterations: MYD88 L265P, CD79B mutations, CARD11 mutations, TNFAIP3 loss
- IRF4/MUM1 expression

Primary mediastinal large B-cell lymphoma (PMBL):
- Transcriptional signature similar to classical Hodgkin lymphoma
- 9p24 amplification (PD-L1/PD-L2, JAK2)
- CIITA rearrangements
- Excellent prognosis with dose-adjusted R-EPOCH

Double-hit and double-expressor lymphomas:
- Double-hit: MYC rearrangement plus BCL2 and/or BCL6 rearrangement
- Associated with very aggressive behavior
- Poor outcomes with R-CHOP; treated with intensive regimens or clinical trials
- Double-expressor: High MYC and BCL2 protein expression (without rearrangements)
- Also associated with poor prognosis

Follicular lymphoma pathogenesis:

Genetic landscape:
- t(14;18)(q32;q21): BCL2-IgH in 85% (early event)
- Secondary alterations: KMT2D (80%), CREBBP/EP300 (60%), EZH2 (25%), TNFAIP3 (15%)
- Copy number alterations: 1p36 loss, 6q loss, Xq gain

Microenvironment:
- Highly dependent on supportive microenvironment
- Follicular dendritic cells provide survival signals
- T-cell subsets: TFH cells support growth, cytotoxic T-cells may control disease
- Immunosurveillance failure allows progression

Histologic transformation:
- 2-3% per year risk of transformation to DLBCL
- Associated with additional mutations: TP53, MYC, CDKN2A loss
- Presents with rapid nodal growth, elevated LDH, new extranodal sites
- Poor prognosis; treated as DLBCL

Mantle cell lymphoma:

Molecular features:
- t(11;14)(q13;q32): CCND1-IgH (cyclin D1 overexpression)
- SOX11 expression in majority
- Additional mutations: ATM, TP53, CDKN2A

Proliferation signature:
- Ki-67 proliferation index prognostic
- High Ki-67 associated with blastoid/pleomorphic variants
- Gene expression signatures identify indolent vs aggressive subtypes

Therapeutic targets:
- BTK inhibitors highly effective (ibrutinib, acalabrutinib, zanubrutinib)
- BCL2 inhibitors (venetoclax)
- CDK4/6 inhibitors (palbociclib)

Marginal zone lymphoma:

Pathogenesis:
- Associated with chronic antigenic stimulation
- Gastric MALT: H. pylori infection
- Ocular adnexal: Chlamydia psittaci
- Cutaneous: Borrelia burgdorferi (Europe)
- Splenic: Hepatitis C virus

Genetic alterations:
- t(11;18)(q21;q21): API2-MALT1 (gastric, resistant to H. pylori therapy)
- t(1;14)(p22;q32): BCL10-IgH
- t(14;18)(q32;q21): MALT1-IgH
- TNFAIP3 mutations (40%)

T-cell lymphoma molecular landscape:

Peripheral T-cell lymphoma, NOS:
- Heterogeneous group by definition
- Common alterations: TET2, DNMT3A, RHOA G17V
- Poor outcomes with chemotherapy

Angioimmunoblastic T-cell lymphoma:
- TFH cell origin
- RHOA G17V mutation in 60-70%
- TET2, DNMT3A, IDH2 mutations common
- EBV-positive B-cells in microenvironment

Anaplastic large cell lymphoma:
- ALK-positive: t(2;5)(p23;q35), NPM1-ALK fusion, good prognosis
- ALK-negative: DUSP22 rearrangements (better prognosis), TP63 rearrangements (worse prognosis)
- CD30 expression (target for brentuximab)`,
      keyTerms: [
        { term: 'gene expression profiling', definition: 'Analysis of mRNA levels to classify tumors based on transcriptional signatures' },
        { term: 'double-hit lymphoma', definition: 'Lymphoma with MYC plus BCL2 and/or BCL6 rearrangements; very aggressive' },
        { term: 'cyclin D1', definition: 'Cell cycle protein overexpressed in mantle cell lymphoma due to t(11;14)' },
        { term: 'RHOA G17V', definition: 'Recurrent mutation in angioimmunoblastic T-cell lymphoma' },
        { term: 'MALT1', definition: 'Gene involved in NF-kappaB activation; rearranged in some MALT lymphomas' }
      ]
    },
    4: {
      level: 4,
      summary: 'NHL staging uses the Ann Arbor and Lugano systems, with treatment selection based on histology, stage, molecular risk factors, and patient factors, ranging from watchful waiting to intensive chemoimmunotherapy.',
      explanation: `Management of non-Hodgkin lymphoma requires integration of accurate diagnosis, comprehensive staging, risk stratification, and selection of appropriate therapy based on histology and patient factors.

Staging systems:

Ann Arbor/Cotswolds (modified for NHL):
- Stage I: Single nodal region or single extranodal site
- Stage II: Two or more nodal regions on same side of diaphragm
- Stage III: Nodal regions on both sides of diaphragm
- Stage IV: Diffuse or disseminated extranodal involvement

Lugano classification (2014):
- Incorporates PET/CT for response assessment
- Bulky disease defined by 10 cm nodal mass or 1/3 mediastinal widening
- Omission of A/B for most NHL (except limited stage HL)

Initial workup:
- History: B symptoms, performance status, comorbidities
- Physical exam: All lymph node regions, liver, spleen
- Laboratory: CBC, LDH, beta-2 microglobulin, liver/renal function, uric acid
- Imaging: Contrast CT neck/chest/abdomen/pelvis or PET/CT
- Bone marrow biopsy: Required for most aggressive lymphomas, selected indolent cases
- Lumbar puncture: For high risk of CNS involvement (testicular, breast, paranasal sinus, high LDH, multiple extranodal sites)
- Echocardiogram/MUGA (anthracyclines)
- Hepatitis B screening (rituximab risk of reactivation)

Prognostic indices:

IPI (International Prognostic Index) for DLBCL:
- Age >60 years
- Stage III-IV
- Elevated LDH
- ECOG performance status >=2
- Extranodal sites >1
Score 0-1 low risk, 2 low-intermediate, 3 high-intermediate, 4-5 high risk

R-IPI (revised with rituximab era):
- Score 0: Very good (94% 4-year OS)
- Score 1-2: Good (79% 4-year OS)
- Score 3-5: Poor (55% 4-year OS)

NCCN-IPI (more discriminating):
- Age >40, >60, >75 (0-2 points)
- LDH >1-3x, >3x normal (0-2 points)
- Stage III-IV (1 point)
- Extranodal sites (1 point)
- Performance status >=2 (1 point)

FLIPI for follicular lymphoma:
- Age >60
- Stage III-IV
- Hemoglobin <12 g/dL
- Elevated LDH
- Nodal areas >4

Treatment by histology:

Indolent B-cell lymphomas:

Follicular lymphoma:
- Stage I-II: ISRT or observation; radiation curative in some
- Stage III-IV, asymptomatic: Watch-and-wait
- Stage III-IV, symptomatic: Rituximab +/- chemo (bendamustine, CHOP, CVP)
- Maintenance rituximab prolongs remission
- Obinutuzumab alternative to rituximab (GALLIUM trial)
- Lenalidomide + rituximab (R2) effective chemo-free option

Marginal zone lymphoma:
- Gastric MALT: H. pylori eradication (80% cure rate)
- Localized: ISRT
- Advanced: Similar to follicular lymphoma approaches

Aggressive B-cell lymphomas:

DLBCL:
- R-CHOP x 6 cycles (standard)
- DA-R-EPOCH for double-hit, PMBL, high-grade B-cell lymphoma
- CNS prophylaxis for high-risk sites or 4-5 IPI risk factors
- PET-guided: If PET-negative at interim, complete planned therapy
- If PET-positive: Consider biopsy; if persistent disease, change regimen

Burkitt lymphoma:
- Intensive short-course chemotherapy (CODOX-M/IVAC or DA-EPOCH-R)
- CNS prophylaxis mandatory
- High cure rates (>80%) with appropriate therapy

Mantle cell lymphoma:
- Young/fit: Cytarabine-containing regimen + auto-SCT
- Older: BTK inhibitor-based, bendamustine + rituximab, or R-CHOP
- Maintenance rituximab after R-CHOP
- BTK inhibitors (ibrutinib, acalabrutinib) for relapsed disease

T-cell lymphomas:
- CHOP or CHOEP (etoposide added)
- ALCL: Brentuximab + CHP (CHOP without vincristine) for CD30+
- Consolidation with auto-SCT for eligible patients in first remission
- Poor outcomes overall; clinical trials preferred

Relapsed/refractory disease:
- Second-line chemotherapy (R-ICE, R-DHAP, R-GDP) + auto-SCT
- CAR-T cells approved for DLBCL >=2 lines of therapy (axi-cel, tisa-cel, liso-cel)
- Bispecific antibodies (epcoritamab, glofitamab) for multiply relapsed
- Polatuzumab vedotin + bendamustine + rituximab for transplant-ineligible`,
      keyTerms: [
        { term: 'IPI', definition: 'International Prognostic Index; clinical tool predicting outcome in aggressive NHL' },
        { term: 'R-CHOP', definition: 'Standard DLBCL regimen: Rituximab, Cyclophosphamide, Doxorubicin, Vincristine, Prednisone' },
        { term: 'CNS prophylaxis', definition: 'Preventive treatment to prevent lymphoma spread to brain/spinal cord' },
        { term: 'CAR-T cells', definition: 'Chimeric antigen receptor T-cells; engineered immune cells for relapsed lymphoma' },
        { term: 'double-hit lymphoma', definition: 'Aggressive lymphoma with MYC and BCL2/BCL6 rearrangements' }
      ],
      clinicalNotes: `Clinical pearls for NHL management:

1. Core needle biopsy may be insufficient; excisional biopsy preferred for accurate subtyping
2. PET/CT essential for DLBCL staging and response; less reliable for indolent lymphomas
3. Always test hepatitis B before rituximab; reactivation can be fatal
4. Tumor lysis prophylaxis for bulky or high-grade lymphomas (high LDH)

DLBCL specifics:
- R-CHOP remains standard despite many attempts to improve
- DA-R-EPOCH-R for double-hit, PMBL
- CNS prophylaxis: High-dose methotrexate or intrathecal chemo for high-risk
- Interim PET at cycle 2 or 4; Deauville 4-5 requires biopsy

Indolent lymphoma:
- Never treat follicular lymphoma based on scan alone - need symptoms
- Transformation suspected with rapid growth, elevated LDH, new extranodal sites
- Biopsy transformed site; treat as DLBCL

T-cell lymphomas:
- Generally worse outcomes than B-cell
- Consider auto-SCT consolidation in first remission for eligible patients
- Brentuximab approved for CD30+ PTCL and ALCL
- Clinical trials preferred for most subtypes

Special situations:
- HIV-associated: Treat same with HAART; CNS prophylaxis important
- CNS lymphoma: High-dose methotrexate-based therapy
- Testicular lymphoma: CNS prophylaxis mandatory
- Elderly/unfit: Reduced intensity regimens, consider radiation for localized disease`
    },
    5: {
      level: 5,
      summary: 'Advanced concepts include cell of origin-directed therapy, bispecific antibodies, CAR-T optimization, novel agents targeting B-cell receptor and microenvironment, and mechanisms of resistance to targeted therapies.',
      explanation: `Contemporary NHL management increasingly employs precision medicine approaches, novel immunotherapies, and strategies to overcome treatment resistance.

Cell of origin-directed therapy in DLBCL:

ABC DLBCL targeted approaches:
- BTK inhibitors: Ibrutinib + R-CHOP improved outcomes in ABC DLBCL (PHOENIX trial)
- Lenalidomide: Immunomodulatory agent targeting IRF4/MUM1; REVELATE trial with R2-CHOP
- BCL2 inhibitors: Venetoclax combinations under investigation
- NF-kappaB pathway inhibitors: Challenges with toxicity

GCB DLBCL:
- EZH2 inhibitors: Tazemetostat for EZH2-mutated follicular lymphoma and DLBCL
- PI3K inhibitors: Copanlisib, idelalisib (limited by toxicity)
- HDAC inhibitors: Tucidinostat approved in China

Novel immunotherapies:

Bispecific antibodies:
- Epcoritamab (CD3xCD20): Subcutaneous administration, approved for R/R DLBCL
- Glofitamab (CD3xCD20): 2:1 format, higher affinity for CD20, approved for R/R DLBCL
- Mosunetuzumab (CD3xCD20): Approved for R/R follicular lymphoma
- Mechanism: Bridge T-cells to tumor cells, independent of T-cell receptor specificity

CAR-T cell therapy advances:
- Second-generation: CD28 or 4-1BB co-stimulatory domains
- Third-generation: Dual co-stimulation
- Armored CARs: Cytokine-secreting (IL-12, IL-15) to enhance persistence
- Allogeneic "off-the-shelf" CAR-T in development
- Manufacturing improvements: Automated production, faster turnaround

Resistance to CAR-T:
- CD19-negative relapse (50% of relapses)
- Solutions: Dual-targeting CARs (CD19+CD20), CAR-T following CD19-directed therapies

Antibody-drug conjugates:
- Polatuzumab vedotin: CD79b-ADC, approved for R/R DLBCL
- Loncastuximab tesirine: CD19-ADC, approved for R/R DLBCL
- Camidanlumab tesirine: CD25-ADC, for Hodgkin lymphoma and PTCL

Targeted agents:

BTK inhibitors beyond ibrutinib:
- Acalabrutinib, zanubrutinib: More selective, less atrial fibrillation
- Non-covalent inhibitors: Pirtobrutinib for BTK C481S resistance
- BTK degradation: PROTACs in development

BCL2 inhibitors:
- Venetoclax approved for CLL/SLL, mantle cell
- Combination strategies: Venetoclax + rituximab (MURANO), + ibrutinib
- BH3 profiling to predict response

Microenvironment modulation:
- Checkpoint inhibitors: Limited activity in NHL except primary mediastinal LBCL
- IMiDs (lenalidomide): Multiple mechanisms including cereblon binding
- CAR-T and bispecifics overcome immunosuppressive microenvironment

Epigenetic therapies:
- EZH2 inhibitors: Tazemetostat for EZH2-mutant FL
- BET inhibitors: Targeting MYC-driven lymphomas
- HDAC inhibitors: Various agents with modest activity

Mechanisms of resistance:

Chemotherapy resistance:
- Upregulation of drug efflux pumps (MDR1)
- Defects in apoptosis pathways (TP53 mutations)
- DNA repair mechanisms

Targeted therapy resistance:
- BTK inhibitors: BTK C481S mutation, PLCgamma2 mutations, BTK amplification
- BCL2 inhibitors: BCL2 mutations, upregulation of other anti-apoptotic proteins (MCL1, BCL-xL)
- CD19-directed therapies: CD19 loss or mutation, lineage switch

Strategies to overcome resistance:
- Combination therapy targeting multiple pathways
- Sequential therapy to prevent resistance
- Novel targets (MCL1 inhibitors, XPO1 inhibitors)
- Cellular therapies (CAR-T, TILs)

Future directions:
- Genomic-driven first-line therapy selection
- Liquid biopsy for MRD monitoring
- Personalized vaccines
- In situ vaccination approaches
- Microbiome manipulation to enhance immunotherapy`,
      keyTerms: [
        { term: 'bispecific antibody', definition: 'Antibody with two different binding sites linking T-cells to tumor cells' },
        { term: 'CAR-T persistence', definition: 'Duration CAR-T cells remain active in patient; associated with durable responses' },
        { term: 'cereblon', definition: 'E3 ubiquitin ligase substrate receptor; target of immunomodulatory drugs like lenalidomide' },
        { term: 'EZH2 inhibitor', definition: 'Drug blocking enhancer of zeste homolog 2 histone methyltransferase' },
        { term: 'allogeneic CAR-T', definition: 'CAR-T cells from healthy donors rather than patient; "off-the-shelf" approach' }
      ],
      clinicalNotes: `Advanced clinical considerations:

High-grade B-cell lymphoma with rearrangements:
- Formerly "double-hit" and "triple-hit" lymphomas
- R-CHOP inadequate; use intensive regimens or clinical trials
- DA-R-EPOCH-R commonly used but outcomes still suboptimal
- Consider auto-SCT consolidation in first remission
- CAR-T approved for relapsed disease

Primary CNS lymphoma:
- High-dose methotrexate (3.5 g/m2) essential
- Omit whole brain radiation if possible (neurotoxicity)
- Consolidation with auto-SCT or reduced-dose radiation
- Excellent outcomes with modern therapy

Post-transplant lymphoproliferative disorder:
- Often EBV-driven; reduce immunosuppression first
- Rituximab if CD20+, chemotherapy if aggressive
- PTLD following solid organ transplant may regress with IS reduction alone

CAR-T practical considerations:
- Manufacturing time (3-4 weeks)
- Bridging therapy to control disease
- Cytokine release syndrome and neurotoxicity management
- Tocilizumab and steroids for CRS
- Long-term follow-up for B-cell aplasia, hypogammaglobulinemia

Clinical trial enrollment:
- Preferred for most relapsed T-cell lymphomas
- Novel agents (PI3K, EZH2, BCL2 inhibitors) best studied in trials
- Combination strategies being actively explored
- Genomic profiling to guide trial selection`
    }
  },
  media: [],
  citations: [
    { id: '1', type: 'textbook', title: 'Hoffman Hematology: Basic Principles and Practice', authors: ['Hoffman R', 'Benz EJ', 'Silberstein LE'], source: 'Elsevier', chapter: 'Chapters 99-101: Non-Hodgkin Lymphomas' },
    { id: '2', type: 'article', title: 'The 5th edition of the WHO Classification of Haematolymphoid Tumours: Lymphoid Neoplasms', authors: ['Alaggio R', 'Amador C', 'Anagnostopoulos I'], source: 'Leukemia', chapter: '2022' }
  ],
  crossReferences: [
    { targetId: 'hodgkin-lymphoma', targetType: 'condition', relationship: 'sibling' },
    { targetId: 'diffuse-large-b-cell-lymphoma', targetType: 'condition', relationship: 'child' },
    { targetId: 'follicular-lymphoma', targetType: 'condition', relationship: 'child' }
  ],
  tags: {
    systems: ['hematology', 'oncology'],
    topics: ['lymphoma', 'non-Hodgkin lymphoma', 'lymphoid malignancy'],
    keywords: ['NHL', 'B-cell lymphoma', 'T-cell lymphoma', 'DLBCL', 'follicular lymphoma', 'CAR-T'],
    clinicalRelevance: 'high'
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published'
};
