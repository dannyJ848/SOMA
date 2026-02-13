/**
 * Lymphoma - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const lymphoma: EducationalContent = {
  id: 'condition-lymphoma',
  type: 'condition',
  name: 'Lymphoma',
  nameEs: 'Linfoma',
  alternateNames: ['Lymphatic Cancer', 'Lymphosarcoma'],
  hpoId: 'HP:0002716',

  levels: {
    1: {
      level: 1,
      summary: 'Lymphoma is cancer of the lymphatic system, part of the immune system. The two main types are Hodgkin lymphoma (highly treatable) and non-Hodgkin lymphoma.',
      explanation: `Lymphoma is cancer that begins in cells of the lymphatic system, which is part of the body's immune system. The lymphatic system includes lymph nodes, spleen, and other organs that fight infection.

**What are lymph nodes?**
- Small bean-shaped structures throughout the body
- Filter harmful substances
- Part of the immune system
- Found in neck, armpits, groin, chest, abdomen

**Common symptoms:**
- Swollen lymph nodes (often in neck, armpit, or groin)
- Unexplained fever
- Night sweats (drenching)
- Unexplained weight loss
- Fatigue
- Itching

**Two Main Types:**
- Hodgkin lymphoma: Very treatable, has Reed-Sternberg cells
- Non-Hodgkin lymphoma: More common, many subtypes

**Treatment:**
- Chemotherapy
- Radiation therapy
- Immunotherapy
- Stem cell transplant for some cases`,
      keyTerms: [
        { term: 'lymphoma', definition: 'Cancer that starts in the lymphatic system' },
        { term: 'lymph nodes', definition: 'Small glands that filter lymph fluid and help fight infection' },
        { term: 'immune system', definition: 'The body system that fights infection and disease' },
      ],
      analogies: ['Lymph nodes are like security checkpoints in your body. In lymphoma, the security guards start growing uncontrollably.'],
      examples: ['A 30-year-old notices a painless lump in their neck that has been growing for weeks. A biopsy reveals Hodgkin lymphoma, which is successfully treated with chemotherapy.'],
    },
    2: {
      level: 2,
      summary: 'Lymphoma is classified as Hodgkin ( Reed-Sternberg cells, orderly spread) or non-Hodgkin (diverse B and T-cell types), with staging (Ann Arbor) guiding treatment decisions.',
      explanation: `## Hodgkin vs Non-Hodgkin Lymphoma

| Feature | Hodgkin | Non-Hodgkin |
|---------|---------|-------------|
| Reed-Sternberg cells | Present | Absent |
| Spread | Orderly (node to node) | Unpredictable |
| Age groups | Bimodal (20s, 50s+) | Usually older adults |
| Curability | High | Variable by subtype |

## Common Subtypes

**Hodgkin Lymphoma:**
- Classical HL (95%): Nodular sclerosis, mixed cellularity
- Nodular lymphocyte-predominant HL (5%)

**Non-Hodgkin Lymphoma (NHL):**
- Indolent: Follicular, marginal zone, lymphoplasmacytic
- Aggressive: Diffuse large B-cell (DLBCL), Burkitt, mantle cell
- T-cell: Peripheral T-cell, anaplastic large cell

## Ann Arbor Staging
- Stage I: Single lymph node region
- Stage II: Two regions on same side of diaphragm
- Stage III: Nodes on both sides of diaphragm
- Stage IV: Extranodal involvement (liver, bone marrow)
- Add A (no symptoms) or B (fever, night sweats, weight loss)

## Treatment Principles
- Early-stage HL: Chemotherapy +/- radiation
- Advanced HL: Chemotherapy (ABVD)
- Aggressive NHL: R-CHOP (rituximab + chemo)
- Indolent NHL: Observation or single-agent chemo`,
      keyTerms: [
        { term: 'Reed-Sternberg cell', definition: 'Large abnormal cell that identifies Hodgkin lymphoma' },
        { term: 'DLBCL', definition: 'Diffuse large B-cell lymphoma; most common aggressive NHL' },
        { term: 'B symptoms', definition: 'Fever, night sweats, weight loss; indicates systemic symptoms' },
      ],
    },
    3: {
      level: 3,
      summary: 'Lymphoma diagnosis requires excisional biopsy with immunohistochemistry and molecular studies, with treatment guided by histology, stage, and biomarkers including CD20, CD30, and PD-1.',
      explanation: `## Diagnostic Approach
**Essential Studies:**
- Excisional lymph node biopsy (preferred over core)
- Immunohistochemistry: CD15, CD30 (HL); CD20, CD3 (NHL)
- Flow cytometry for cell surface markers
- FISH for translocations (t(14;18), MYC, BCL2, BCL6)
- Bone marrow biopsy for staging
- PET/CT for staging and response assessment

## Hodgkin Lymphoma Treatment
**Early-stage (I-II favorable):**
- ABVD x 2 cycles + IFRT (20 Gy)
- OR ABVD alone (avoiding radiation)

**Early-stage (I-II unfavorable):**
- ABVD x 4 cycles +/- IFRT

**Advanced-stage (III-IV):**
- ABVD x 6-8 cycles
- BEACOPP for high-risk (more toxic)

**Relapsed/Refractory:**
- Salvage chemo + autologous stem cell transplant
- Brentuximab vedotin (CD30-directed)
- Nivolumab/pembrolizumab (PD-1 inhibitors)

## DLBCL Treatment
**First-line:**
- R-CHOP x 6 cycles (rituximab, cyclophosphamide, doxorubicin, vincristine, prednisone)
- CNS prophylaxis for high-risk sites (testicular, breast, sinus)

**Double-Hit (MYC + BCL2/BCL6):**
- More aggressive
- Consider DA-EPOCH-R
- Consider clinical trial

## Follicular Lymphoma
- Grade 1-2: Indolent, may observe
- Grade 3: Treat like DLBCL
- Rituximab maintenance after induction
- Transform to DLBCL in 2-3% per year`,
      keyTerms: [
        { term: 'IHC', definition: 'Immunohistochemistry; staining for cell surface proteins' },
        { term: 'R-CHOP', definition: 'Rituximab, cyclophosphamide, doxorubicin, vincristine, prednisone' },
        { term: 'double-hit', definition: 'Lymphoma with MYC and BCL2/BCL6 rearrangements; aggressive' },
      ],
      clinicalNotes: 'Deauville scoring on PET (1-5) guides treatment duration in Hodgkin lymphoma. Complete metabolic response (Deauville 1-3) after 2 cycles predicts excellent outcome.',
    },
    4: {
      level: 4,
      summary: 'Lymphoma management incorporates CAR-T cell therapy for refractory DLBCL, novel agents for indolent lymphomas, and biomarker-directed therapy including PD-1 inhibition for relapsed Hodgkin lymphoma.',
      explanation: `## CAR-T Cell Therapy
**Indications (DLBCL):**
- Second-line (ZUMA-7, TRANSFORM, BELINDA)
- Third-line and beyond (axicabtagene ciloleucel, tisagenlecleucel, lisocabtagene maraleucel)

**Process:**
- Leukapheresis
- T-cell genetic modification to express anti-CD19 CAR
- Lymphodepletion chemotherapy
- CAR-T infusion

**Toxicities:**
- Cytokine release syndrome (CRS)
- Immune effector cell-associated neurotoxicity (ICANS)
- Management: Tocilizumab for CRS, steroids for severe cases

## Novel Agents in Indolent NHL
- PI3K inhibitors (idelalisib, copanlisib)
- BTK inhibitor (ibrutinib)
- BCL-2 inhibitor (venetoclax)
- EZH2 inhibitor (tazemetostat)
- Lenalidomide

## Relapsed Hodgkin Lymphoma
- Brentuximab vedotin (anti-CD30 antibody-drug conjugate)
- Nivolumab, pembrolizumab (PD-1 inhibitors)
- High response rates due to 9p24.1 amplification (PD-L1/PD-L2)

## CNS Prophylaxis
- High-risk DLBCL: testicular, breast, kidney, adrenal
- Intrathecal methotrexate or systemic high-dose methotrexate
- Consider for high IPI, double-hit, MYC-rearranged`,
      keyTerms: [
        { term: 'CAR-T', definition: 'Chimeric antigen receptor T-cell therapy; genetically engineered T cells' },
        { term: 'CRS', definition: 'Cytokine release syndrome; systemic inflammatory response from CAR-T' },
        { term: 'ICANS', definition: 'Immune effector cell-associated neurotoxicity syndrome' },
      ],
      clinicalNotes: 'CAR-T is moving to second-line for DLBCL based on ZUMA-7 and TRANSFORM trials showing superiority to stem cell transplant. PD-1 inhibitors have remarkable activity in relapsed Hodgkin lymphoma.',
    },
    5: {
      level: 5,
      summary: 'Lymphoma therapeutics advances include bispecific antibodies, CAR-T expansion, novel targets (CD19, CD20, CD22), and molecular classification guiding precision therapy across diverse subtypes.',
      explanation: `## Emerging Therapies

**Bispecific Antibodies:**
- Mosunetuzumab (CD20 x CD3): Follicular lymphoma
- Glofitamab (CD20 x CD3 with 2:1 binding): DLBCL
- Epcoritamab (subcutaneous CD20 x CD3): DLBCL
- Tebentafusp (gp100 x CD3): Uveal melanoma

**Next-Generation CAR-T:**
- Allogeneic (off-the-shelf) CAR-T
- Dual-target CARs
- Armored CARs (secrete cytokines)
- CAR-NK cells

**Molecular Classification:**
- Cell of origin (GCB vs ABC) in DLBCL
- Double-hit and triple-hit lymphomas
- MYD88 and CD79B mutations in lymphoplasmacytic
- EZH2 mutations in follicular lymphoma

## T-Cell Lymphomas
- Peripheral T-cell lymphoma, NOS
- Angioimmunoblastic T-cell lymphoma
- Anaplastic large cell (ALCL): ALK+ vs ALK-
- Adult T-cell leukemia/lymphoma (HTLV-1 associated)
- Brentuximab for CD30+ T-cell lymphomas

## Special Situations
- HIV-associated lymphomas: DA-EPOCH, cART
- Post-transplant lymphoproliferative disorder (PTLD): Reduce immunosuppression, rituximab
- Primary CNS lymphoma: High-dose methotrexate-based therapy

## Molecular Monitoring
- ctDNA for minimal residual disease
- Early prediction of relapse
- Guiding treatment duration`,
      keyTerms: [
        { term: 'bispecific antibody', definition: 'Drug binding two antigens; brings T cells to lymphoma cells' },
        { term: 'cell of origin', definition: 'GCB (germinal center B-cell) vs ABC (activated B-cell) DLBCL subtype' },
        { term: 'PTLD', definition: 'Post-transplant lymphoproliferative disorder; lymphoma after transplant' },
      ],
      clinicalNotes: 'Bispecific antibodies are bridging the gap between standard therapy and CAR-T. The molecular era is redefining lymphoma classification beyond histology alone.',
    },
  },

  media: [],
  citations: [
    { id: 'nccn-lymphoma-2024', type: 'website', title: 'NCCN Guidelines for Hodgkin and Non-Hodgkin Lymphomas', source: 'National Comprehensive Cancer Network' },
    { id: 'esmo-lymphoma-2024', type: 'website', title: 'ESMO Guidelines for Lymphomas', source: 'European Society for Medical Oncology' },
  ],
  crossReferences: [
    { targetId: 'condition-cll', targetType: 'condition', relationship: 'related', label: 'CLL/SLL' },
  ],
  tags: { systems: ['hematologic', 'immune'], topics: ['oncology', 'hematology'], keywords: ['lymphoma', 'Hodgkin', 'non-Hodgkin', 'DLBCL', 'R-CHOP', 'CAR-T'], clinicalRelevance: 'critical', examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'hematology'] } },
  createdAt: '2025-01-26T00:00:00.000Z',
  updatedAt: '2025-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default lymphoma;
