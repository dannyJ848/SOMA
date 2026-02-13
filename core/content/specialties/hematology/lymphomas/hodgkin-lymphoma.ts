import type { EducationalContent } from '../../../types';

export const hodgkinLymphoma: EducationalContent = {
  id: 'hodgkin-lymphoma',
  type: 'condition',
  name: 'Hodgkin Lymphoma',
  alternateNames: ['Hodgkin Disease', 'Classical Hodgkin Lymphoma', 'Nodular Lymphocyte-Predominant Hodgkin Lymphoma'],
  levels: {
    1: {
      level: 1,
      summary: 'Hodgkin lymphoma is a type of cancer that starts in white blood cells called lymphocytes and usually begins in lymph nodes, most commonly affecting young adults.',
      explanation: `Hodgkin lymphoma is a cancer of the lymphatic system, which is part of your body is immune system. It starts in white blood cells called lymphocytes, specifically in cells called Reed-Sternberg cells that look very distinctive under a microscope.

The most common first sign is a painless lump or swelling in the neck, armpit, or groin. This is usually an enlarged lymph node. Other symptoms can include fever, night sweats, unexplained weight loss, and feeling very tired.

Hodgkin lymphoma is one of the most curable forms of cancer, especially when found early. Treatment usually involves chemotherapy and sometimes radiation therapy. Many people, particularly young adults, are completely cured of this disease.

Doctors classify Hodgkin lymphoma into different types based on how the cells look under a microscope. The most common type is called classical Hodgkin lymphoma, which has several subtypes. There is also a rarer type called nodular lymphocyte-predominant Hodgkin lymphoma.`,
      keyTerms: [
        { term: 'lymphoma', definition: 'A cancer of the lymphatic system, which includes lymph nodes and white blood cells' },
        { term: 'lymphocytes', definition: 'White blood cells that are part of the immune system' },
        { term: 'Reed-Sternberg cells', definition: 'Large abnormal cells that are characteristic of Hodgkin lymphoma' },
        { term: 'lymph nodes', definition: 'Small bean-shaped organs that filter lymph fluid and help fight infection' }
      ],
      analogies: [
        'Hodgkin lymphoma is like having a security checkpoint where some guards have gone rogue and multiplied',
        'Reed-Sternberg cells are like troublemakers that send out signals calling more cells to join them'
      ],
      examples: [
        'A 20-year-old college student notices a painless lump in their neck that does not go away - diagnosed with classical Hodgkin lymphoma',
        'A 35-year-old with drenching night sweats and weight loss over 3 months - found to have stage II Hodgkin lymphoma'
      ]
    },
    2: {
      level: 2,
      summary: 'Hodgkin lymphoma is a B-cell lymphoid malignancy characterized by Reed-Sternberg cells in an inflammatory background, with excellent cure rates exceeding 80% with modern therapy.',
      explanation: `Hodgkin lymphoma (HL) is a distinct lymphoid neoplasm accounting for approximately 10% of all lymphomas. It has unique epidemiologic, pathologic, and clinical features that distinguish it from non-Hodgkin lymphomas.

Pathology:
The hallmark is the Reed-Sternberg (RS) cell, a large binucleated cell with prominent nucleoli, often described as "owl-eye" appearance. RS cells typically comprise only 1-2% of the cellular infiltrate, surrounded by a mixed inflammatory background.

Classification (WHO 2022):

Classical Hodgkin Lymphoma (95% of cases):
1. Nodular sclerosis (most common, 70%): Bands of fibrosis, lacunar variant RS cells, affects younger patients, often mediastinal involvement
2. Mixed cellularity (20-25%): Classic RS cells, mixed inflammatory infiltrate, associated with EBV, more common in older patients and HIV
3. Lymphocyte-rich (5%): Abundant small lymphocytes, few RS cells, good prognosis
4. Lymphocyte-depleted (<1%): Numerous RS cells, few lymphocytes, aggressive, associated with HIV

Nodular Lymphocyte-Predominant Hodgkin Lymphoma (NLPHL, 5%):
- "Popcorn" cells (lymphocyte-predominant cells) variant of RS cells
- CD20 positive (unlike classical HL)
- Nodular pattern with reactive background
- Male predominance, indolent course, late relapses common
- Different treatment approach from classical HL

Epidemiology:
- Bimodal age distribution: young adults (15-35) and older adults (>55)
- Slight male predominance
- Associated with Epstein-Barr virus (EBV) in 40-50% of cases
- Increased risk with infectious mononucleosis history
- Rare familial clustering

Clinical presentation:
- Painless lymphadenopathy (cervical, supraclavicular most common)
- B symptoms: fevers, drenching night sweats, unintentional weight loss (>10% in 6 months)
- Mediastinal mass (especially nodular sclerosis)
- Pruritus, alcohol-induced nodal pain (rare)
- Extralymphatic involvement less common than NHL

Prognosis:
- Stage I-II: 90-95% cure rate
- Stage III-IV: 70-85% cure rate
- Relapsed disease often salvageable with high-dose therapy and stem cell transplant`,
      keyTerms: [
        { term: 'classical Hodgkin lymphoma', definition: 'The main type of Hodgkin lymphoma with four subtypes, characterized by CD30+, CD15+ RS cells' },
        { term: 'nodular sclerosis', definition: 'Most common subtype of classical HL with collagen bands dividing lymph node into nodules' },
        { term: 'B symptoms', definition: 'Systemic symptoms of fever, night sweats, and weight loss; affect staging and prognosis' },
        { term: 'mediastinal mass', definition: 'Enlargement of lymph nodes in the center of the chest; common in nodular sclerosis HL' },
        { term: 'nodular lymphocyte-predominant HL', definition: 'Distinct subtype with different RS cell variant, CD20 positivity, and indolent course' }
      ],
      analogies: [
        'Reed-Sternberg cells are like bad influencers that attract a crowd of inflammatory cells around them',
        'Hodgkin lymphoma is like a small spark (rare RS cells) that creates a big inflammatory response'
      ],
      examples: [
        'A 22-year-old woman with mediastinal mass and neck nodes - nodular sclerosis classical Hodgkin lymphoma',
        'A 50-year-old man with isolated cervical node, NLPHL subtype - managed with involved site radiation'
      ]
    },
    3: {
      level: 3,
      summary: 'Hodgkin lymphoma pathogenesis involves EBV infection in many cases, with RS cells derived from germinal center B-cells that have lost B-cell receptor expression but maintained survival through NF-kappaB activation.',
      explanation: `Hodgkin lymphoma represents a unique model of lymphomagenesis where malignant Reed-Sternberg cells rely heavily on the microenvironment for survival and proliferation signals.

Cell of origin:
Reed-Sternberg cells are derived from germinal center B-cells that have undergone somatic hypermutation but failed to express functional B-cell receptors. In normal B-cell development, cells without functional BCR undergo apoptosis. RS cells have escaped this fate through genetic alterations.

Molecular pathogenesis:

NF-kappaB pathway activation:
- Constitutive NF-kappaB activation is essential for RS cell survival
- Mechanisms include amplification of REL, mutations in NFKBIA (IkappaB-alpha), TNFAIP3 (A20)
- Viral LMP1 in EBV-positive cases activates NF-kappaB
- Provides proliferation signals and anti-apoptotic effects

JAK-STAT signaling:
- Copy gains of JAK2 on chromosome 9p24
- Activating mutations in STAT6
- Contributes to proliferation and survival

Epigenetic alterations:
- Aberrant DNA methylation patterns
- Mutations in histone-modifying enzymes (KDM6B, EP300, CREBBP)
- Altered transcriptional programs

EBV association:
- EBV present in RS cells of 40-50% of classical HL
- Viral latency pattern II: LMP1, LMP2A, EBNA1 expressed
- LMP1 mimics CD40 signaling, providing survival signals
- More common in mixed cellularity, immunocompromised, older and younger patients
- Associated with specific epidemiologic patterns

Genetic alterations by subtype:

Nodular sclerosis:
- 9p24.1 amplification (PD-L1, PD-L2, JAK2) - 60% of cases
- CIITA rearrangements affecting MHC class II expression
- Chromosome 4p and 16p abnormalities

Mixed cellularity:
- Higher frequency of EBV association
- Less 9p24 amplification
- More diverse genetic profile

NLPHL:
- Distinct from classical HL
- Lymphocyte-predominant (LP) cells are CD20+, CD30-, CD15-
- B-cell receptor functional and often clonally related to preceding/progressing DLBCL
- Mutations in DUSP2, SGK1, TNFRSF14, sixq gains

Microenvironment:
The RS cell constitutes less than 1% of the tumor mass. The surrounding inflammatory infiltrate provides essential survival signals:
- CD4+ T-cells (Th2 and Treg phenotypes)
- Eosinophils (IL-5 production)
- Plasma cells
- Macrophages (tumor-associated macrophages may be prognostic)
- Fibroblasts in nodular sclerosis subtype

Immune evasion:
- RS cells express PD-L1 and PD-L2 (especially with 9p24 amplification)
- Downregulation of MHC class I and II
- Secretion of immunosuppressive cytokines (TGF-beta, IL-10)
- Recruitment of regulatory T-cells

This microenvironment dependency explains both the inflammatory symptoms (cytokine production) and the success of immunotherapy approaches targeting the microenvironment (checkpoint inhibitors).`,
      keyTerms: [
        { term: 'NF-kappaB', definition: 'Transcription factor regulating inflammation, immunity, and cell survival; constitutively active in RS cells' },
        { term: 'germinal center', definition: 'Site in lymph nodes where B-cells undergo maturation and somatic hypermutation' },
        { term: 'somatic hypermutation', definition: 'Process introducing mutations into antibody genes to increase affinity' },
        { term: 'PD-L1', definition: 'Programmed death ligand 1; immune checkpoint molecule often expressed in HL' },
        { term: 'LMP1', definition: 'Latent membrane protein 1 of EBV; mimics CD40 signaling to promote survival' }
      ]
    },
    4: {
      level: 4,
      summary: 'Hodgkin lymphoma staging uses the Ann Arbor system with Cotswolds modifications, combined with risk stratification to guide treatment selection between chemotherapy, radiation, and combined modality therapy.',
      explanation: `The management of Hodgkin lymphoma requires accurate staging, risk stratification, and treatment selection to maximize cure rates while minimizing long-term toxicity.

Ann Arbor Staging (Cotswolds modifications):

Stage I: Single lymph node region or single extralymphatic site (IE)
Stage II: Two or more lymph node regions on same side of diaphragm
Stage III: Lymph node regions on both sides of diaphragm
Stage IV: Diffuse involvement of one or more extralymphatic organs

Modifiers:
- A: No B symptoms
- B: Presence of B symptoms (fevers, night sweats, weight loss >10%)
- E: Involvement of single extralymphatic site contiguous to known nodal site
- S: Spleen involvement
- X: Bulky disease (mediastinal mass >1/3 chest diameter or nodal mass >10cm)

Initial workup:
- History and physical examination (lymph node regions, spleen, liver)
- Laboratory: CBC, ESR, LDH, albumin, liver/renal function
- Imaging: FDG-PET/CT (standard of care)
- Bone marrow biopsy: Only if PET-negative and cytopenias present (PET has replaced routine BMB)
- Echocardiogram or MUGA (baseline cardiac function for anthracyclines)
- Pulmonary function tests (baseline for bleomycin)
- Fertility counseling and preservation

Risk stratification:

Early-stage favorable:
- Stage I-II without bulky disease or B symptoms
- ESR <50 (or <30 if B symptoms)
- Fewer than 3 nodal sites involved

Early-stage unfavorable:
- Stage I-II with bulky disease or B symptoms or ESR >50 or >3 nodal sites

Advanced stage:
- Stage III-IV

International Prognostic Score (IPS) for advanced HL:
- Serum albumin <4 g/dL
- Hemoglobin <10.5 g/dL
- Male sex
- Age >=45 years
- Stage IV disease
- Leukocytosis >=15,000
- Lymphocytopenia <600 or <8% of WBC
Score 0-7 predicts freedom from progression

Treatment approaches:

Early-stage favorable:
- ABVD x 2 cycles + involved site radiation therapy (ISRT)
- Or ABVD x 4-6 cycles alone (PET-guided de-escalation)
- German approach: 2+2 (2 ABVD + 2 ABVD if PET-negative after 2)

Early-stage unfavorable:
- ABVD x 4-6 cycles + ISRT
- Or escalated BEACOPP x 2 + ABVD x 2 + ISRT (European approach)
- PET-adapted therapy increasingly used

Advanced stage:
- ABVD x 6 cycles (standard in US)
- Escalated BEACOPP x 6-8 cycles (European approach for high IPS)
- PET-adapted: Switch to escalated BEACOPP if PET-positive after 2 cycles

Refractory/relapsed:
- Second-line chemotherapy (ICE, DHAP, GVD) followed by autologous stem cell transplant
- Brentuximab vedotin + nivolumab for transplant-ineligible or as bridge to transplant
- Checkpoint inhibitors (nivolumab, pembrolizumab) for post-transplant relapse

PET-adapted therapy:
- Deauville score (1-5) on interim PET after 2 cycles
- Score 1-2 (negative): Continue planned therapy
- Score 3-5 (positive): Consider intensification or switch regimen
- RATHL trial: PET-negative patients can omit bleomycin (AVD only)

Response criteria:
- Complete metabolic response (CMR): Deauville 1-3 at end of treatment
- Partial response: Greater than 50% reduction
- Progressive disease: New lesions or increase in size`,
      keyTerms: [
        { term: 'Deauville score', definition: '5-point scale for interpreting PET scans in lymphoma; 1-2 negative, 4-5 positive' },
        { term: 'ABVD', definition: 'Chemotherapy regimen: Adriamycin, Bleomycin, Vinblastine, Dacarbazine' },
        { term: 'BEACOPP', definition: 'Intensive chemotherapy regimen used in Europe for advanced HL' },
        { term: 'involved site radiation therapy', definition: 'Targeted radiation to initially involved lymph node regions with margin' },
        { term: 'PET-adapted therapy', definition: 'Treatment modification based on interim PET scan results' }
      ],
      clinicalNotes: `Clinical pearls for Hodgkin lymphoma:

1. PET/CT is essential for staging and response assessment; bone marrow biopsy rarely needed if PET performed
2. Mediastinal bulk is defined as mass >1/3 of chest diameter on chest X-ray, or >10 cm on CT
3. Pruritus and alcohol-induced pain are uncommon but specific symptoms
4. NLPHL is managed differently - often localized radiation or rituximab-based approaches

Treatment toxicities:
- ABVD: Pulmonary toxicity (bleomycin), cardiac (doxorubicin), neuropathy (vinblastine), myelosuppression
- Monitor pulmonary function if considering bleomycin continuation
- Neutropenia is common but G-CSF not routinely used with ABVD

Fertility preservation:
- Sperm banking for men before chemotherapy
- Oocyte/embryo cryopreservation for women
- Oophoropexy if pelvic radiation planned
- Discuss risk of premature ovarian failure

Long-term follow-up:
- Secondary malignancies (breast cancer in women with chest radiation, lung cancer, AML/MDS)
- Cardiovascular disease (accelerated coronary disease, cardiomyopathy)
- Thyroid dysfunction (neck radiation)
- Infertility
- Screening guidelines based on treatment received

Relapsed disease management:
- Confer relapse if PET-positive within 3 months of treatment completion
- Late relapse (>12 months) has better prognosis than early relapse
- Transplant-eligible patients: Second-line chemo + auto-SCT
- Brentuximab + nivolumab for transplant-ineligible or as bridge
- Checkpoint inhibitors effective in multiply relapsed disease

Special situations:
- Elderly/unfit: ABVD or AVD (no bleomycin), or brentuximab-based regimens
- HIV-associated HL: Treat same with HAART; CD4 >100 for full-dose therapy
- Pregnancy: Can delay treatment if early stage; if advanced, consider ABVD after first trimester`
    },
    5: {
      level: 5,
      summary: 'Advanced concepts include checkpoint inhibitor therapy, antibody-drug conjugates, CAR-T cell approaches, late effects monitoring, and novel strategies to reduce therapy-related complications in this curable disease.',
      explanation: `Contemporary Hodgkin lymphoma management focuses on maintaining high cure rates while reducing treatment toxicity, developing novel immunotherapies for relapsed disease, and understanding long-term survivorship issues.

Immunotherapy in Hodgkin lymphoma:

Checkpoint inhibitors:
The 9p24.1 amplification common in classical HL leads to high PD-L1/PD-L2 expression, making HL exceptionally responsive to PD-1 blockade.

Nivolumab and pembrolizumab:
- Approved for relapsed/refractory HL after autologous transplant and brentuximab
- High response rates (65-70%) even in heavily pretreated patients
- Many responses are durable
- Consider for consolidation after transplant (checkmate 205)

Mechanisms of response and resistance:
- Primary resistance: Low PD-L1 expression, deficient antigen presentation
- Acquired resistance: Mutations in JAK/STAT pathway, antigen presentation machinery
- Combining with other agents to overcome resistance under investigation

Brentuximab vedotin:
- Anti-CD30 antibody-drug conjugate with monomethyl auristatin E (MMAE)
- Approved for relapsed HL and frontline in combination with AVD
- ECHELON-1 trial: Brentuximab-AVD superior to ABVD, less pulmonary toxicity
- Peripheral neuropathy is dose-limiting toxicity

Novel combination strategies:
- Brentuximab + nivolumab (Transplant-ineligible and relapsed)
- Checkpoint inhibitor + chemotherapy for previously untreated elderly
- Bispecific antibodies targeting CD30

CAR-T cell therapy:
- CD30-directed CAR-T cells in development
- Challenges: CD30 shedding, target antigen heterogeneity
- Early clinical trials show promise in multiply relapsed disease

Treatment de-escalation:

Given excellent cure rates, focus on reducing toxicity:

PET-guided therapy:
- RATHL trial: PET-negative after 2 ABVD cycles can omit bleomycin (AVD)
- Reduces pulmonary toxicity without compromising efficacy
- FDA approved PET-adapted AVD approach

Radiation reduction:
- Involved site radiation (ISRT) replaces involved field radiation
- Smaller fields reduce late toxicity
- Ongoing trials evaluating if radiation can be omitted in PET-negative patients

Omission of alkylators:
- AVD (no dacarbazine) being studied
- Gemcitabine-based regimens for elderly/unfit

Late effects and survivorship:

Secondary malignancies:
- Breast cancer: Women treated with chest radiation before age 30 have 20-40% lifetime risk
- Screening: Annual mammogram/MRI starting 8 years post-treatment or age 40
- Lung cancer: Smoking cessation crucial; CT screening for high-risk
- AML/MDS: Risk increased with alkylator exposure, especially with radiation

Cardiovascular disease:
- Mediastinal radiation accelerates coronary disease
- Anthracycline cardiomyopathy
- Screening: Stress testing 10 years post-treatment or age 30
- Aggressive cardiovascular risk factor modification

Endocrine:
- Hypothyroidism common after neck radiation (50% at 20 years)
- Annual TSH monitoring
- Premature menopause with alkylating agents

Pulmonary:
- Bleomycin toxicity: Reduced diffusion capacity, pulmonary fibrosis
- Risk increased with older age, renal dysfunction, oxygen exposure
- Baseline and follow-up PFTs

Reproductive health:
- Bank sperm/oocytes before therapy
- Sperm banking success lower if already lymphoma-involved testes
- Pregnancy possible after treatment; no increased fetal malformation risk

Psychosocial:
- Fatigue persists in 30-40% of survivors
- Anxiety about recurrence
- Employment and insurance discrimination
- Survivorship care plans essential

Research directions:

Genomic risk stratification:
- Beyond IPS, incorporating tumor genomics
- Identifying patients who need more or less therapy

Immunotherapy in earlier lines:
- Checkpoint inhibitors in first-line for elderly/unfit
- Replacing chemotherapy entirely in selected patients

Biomarkers:
- Circulating tumor DNA for early relapse detection
- Predictive biomarkers for therapy selection
- Immune profiling to predict checkpoint inhibitor response

Pediatric and AYA considerations:
- Different chemotherapy approaches (OEPA, COPP)
- Reduced radiation fields
- Fertility preservation crucial
- Late effects monitoring from young age`,
      keyTerms: [
        { term: 'checkpoint inhibitor', definition: 'Antibody blocking PD-1 or PD-L1 to enhance anti-tumor immunity' },
        { term: 'brentuximab vedotin', definition: 'Anti-CD30 antibody-drug conjugate approved for HL' },
        { term: 'survivorship', definition: 'Care of patients after cancer treatment; focuses on late effects and quality of life' },
        { term: 'treatment de-escalation', definition: 'Reducing therapy intensity based on favorable early response to minimize toxicity' },
        { term: 'circulating tumor DNA', definition: 'Cell-free DNA from tumor detectable in blood; potential biomarker' }
      ],
      clinicalNotes: `Advanced clinical considerations:

Refractory disease patterns:
- Primary refractory: No response to initial therapy
- Early relapse: Within 12 months of completing treatment
- Late relapse: Greater than 12 months after treatment
- Each has different prognosis and management approach

Salvage therapy selection:
- No standard second-line regimen
- Consider prior therapy, toxicity, transplant eligibility
- Brentuximab + nivolumab emerging as option for transplant-ineligible
- Checkpoint inhibitors can reinduce response to subsequent chemotherapy

Nodular lymphocyte-predominant HL:
- CD20 positive; rituximab effective
- Stage IA often treated with radiation alone
- Late relapses (decades later) characteristic
- Risk of transformation to DLBCL (3-5%)
- Different natural history than classical HL

HIV-associated HL:
- More aggressive histology (mixed cellularity)
- Higher stage at presentation
- CD4 >100 for standard chemotherapy
- Continue HAART; watch drug interactions
- Similar cure rates with appropriate therapy

Elderly HL:
- Less tolerance for ABVD
- Consider AVD, brentuximab-based, or gemcitabine regimens
- IPS may not predict as well
- Focus on quality of life and symptom control

Clinical trials:
- Many current trials focus on treatment de-escalation
- Immunotherapy combinations
- Novel agents for relapsed disease
- Biomarker-driven therapy selection`
    }
  },
  media: [],
  citations: [
    { id: '1', type: 'textbook', title: 'Hoffman Hematology: Basic Principles and Practice', authors: ['Hoffman R', 'Benz EJ', 'Silberstein LE'], source: 'Elsevier', chapter: 'Chapter 98: Hodgkin Lymphoma' },
    { id: '2', type: 'article', title: 'NCCN Clinical Practice Guidelines: Hodgkin Lymphoma Version 3.2023', authors: ['National Comprehensive Cancer Network'], source: 'NCCN Guidelines' }
  ],
  crossReferences: [
    { targetId: 'nhl-types', targetType: 'concept', relationship: 'sibling' },
    { targetId: 'lymphoma-staging', targetType: 'concept', relationship: 'related' },
    { targetId: 'non-hodgkin-lymphoma', targetType: 'condition', relationship: 'see-also' }
  ],
  tags: {
    systems: ['hematology', 'oncology'],
    topics: ['lymphoma', 'Hodgkin lymphoma', 'lymphoid malignancy'],
    keywords: ['Hodgkin lymphoma', 'Reed-Sternberg', 'ABVD', 'PET scan', 'checkpoint inhibitor'],
    clinicalRelevance: 'high'
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published'
};
