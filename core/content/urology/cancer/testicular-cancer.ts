/**
 * Testicular Cancer - Educational Content
 */

import { EducationalContent } from '../../types';

export const testicularCancer: EducationalContent = {
  id: 'cancer-testicular-cancer',
  type: 'condition',
  name: 'Testicular Cancer',
  alternateNames: ['Testicular Germ Cell Tumor', 'GCT', 'Seminoma', 'Nonseminoma'],

  levels: {
    1: {
      level: 1,
      summary: 'Testicular cancer is the most common cancer in young men but is highly curable, especially when found early.',
      explanation: `Testicular cancer most often affects men between ages 15 and 35.

**Finding It:**
- Usually discovered as a painless lump
- Monthly self-exams are recommended
- Any hard lump should be checked immediately

**Risk Factors:**
- Undescended testicle (even if corrected)
- Family history
- Previous testicular cancer

**Great News About Treatment:**
- Over 95% cure rate overall
- Even advanced cases are often curable
- One of the most treatable cancers

**Treatment May Include:**
- Surgery to remove affected testicle
- Surveillance (watching carefully)
- Chemotherapy if needed
- Radiation for certain types

**Fertility:**
- Most men can still father children
- Sperm banking offered before treatment
- The remaining testicle produces enough testosterone`,
      keyTerms: [
        { term: 'testicular cancer', definition: 'Cancer starting in the testicle, most common in young men' },
        { term: 'lump', definition: 'Abnormal mass - the main warning sign of testicular cancer' },
        { term: 'sperm banking', definition: 'Freezing sperm before treatment to preserve fertility' },
      ],
      analogies: [
        'Finding testicular cancer early is like catching a small fire before it spreads - much easier to treat.',
      ],
      examples: [
        'A painless, firm lump on the testicle is the classic finding that should prompt immediate medical evaluation.',
      ],
    },
    2: {
      level: 2,
      summary: 'Testicular germ cell tumors are classified as seminoma or nonseminoma, staged by extent of disease, and treated with surgery, surveillance, chemotherapy, or radiation.',
      explanation: `## Types

**Seminoma (40-45%):**
- Pure seminoma
- Radiosensitive
- Slower growing
- Peak age: 30s

**Nonseminoma (55-60%):**
- Embryonal carcinoma
- Yolk sac tumor
- Choriocarcinoma
- Teratoma
- Mixed GCT

## Tumor Markers

**AFP (Alpha-fetoprotein):**
- Elevated in nonseminoma (not pure seminoma)
- Half-life: 5-7 days

**hCG (Beta-hCG):**
- Elevated in choriocarcinoma
- Can be elevated in seminoma
- Half-life: 24-36 hours

**LDH:**
- Reflects tumor burden
- Less specific

## Staging

**Stage I:** Tumor limited to testis
**Stage II:** Retroperitoneal lymph node involvement
- IIA: <2 cm nodes
- IIB: 2-5 cm nodes
- IIC: >5 cm nodes
**Stage III:** Distant metastases or markedly elevated markers

## Treatment by Stage/Type

**Stage I Seminoma:**
- Surveillance (preferred)
- Adjuvant carboplatin
- Adjuvant radiation (less common now)

**Stage I Nonseminoma:**
- Surveillance (if risk factors low)
- RPLND
- Adjuvant chemotherapy (1 cycle BEP)

**Advanced Disease:**
- BEP chemotherapy (3-4 cycles)
- Post-chemo RPLND for residual mass
- Salvage chemotherapy if needed`,
      keyTerms: [
        { term: 'seminoma', definition: 'Type of testicular cancer that responds well to radiation' },
        { term: 'nonseminoma', definition: 'Group of testicular cancer types with different behavior' },
        { term: 'RPLND', definition: 'Retroperitoneal lymph node dissection - surgery for spread' },
      ],
      analogies: [
        'Tumor markers are like a dashboard - they tell you how the cancer is responding to treatment.',
      ],
    },
    3: {
      level: 3,
      summary: 'Testicular cancer management requires understanding of IGCCCG risk classification, chemotherapy protocols, and surgical management of residual masses.',
      explanation: `## IGCCCG Risk Classification

**Good Risk (90% 5-year survival):**
- Seminoma: Any primary, no NPVM, AFP normal
- Nonseminoma: Testis/retroperitoneal primary, no NPVM, markers good

**Intermediate Risk (80%):**
- Seminoma: Any primary, NPVM, AFP normal
- Nonseminoma: Testis/RP primary, no NPVM, intermediate markers

**Poor Risk (50%):**
- Nonseminoma only: Mediastinal primary, NPVM, or poor markers
- Seminoma cannot be poor risk

**NPVM:** Non-pulmonary visceral metastases

## Chemotherapy

**BEP (Standard):**
- Bleomycin
- Etoposide
- Cisplatin
- 3 cycles (good risk) or 4 cycles (intermediate/poor)

**EP (Bleomycin Contraindicated):**
- 4 cycles
- Older patients, lung disease

**VIP (Salvage):**
- Etoposide, Ifosfamide, Cisplatin

## Post-Chemotherapy Management

**Seminoma Residual:**
- <3 cm: Surveillance
- >3 cm: PET scan
- PET positive: Surgery or radiation

**Nonseminoma Residual:**
- Any size: RPLND indicated
- Viable GCT: Additional chemo
- Teratoma: Surgery alone curative
- Necrosis: No further treatment

## RPLND Considerations

**Template:**
- Modified (nerve-sparing) for low-stage
- Full bilateral for post-chemo

**Nerve-Sparing:**
- Preserve ejaculation in 95%
- Preserve fertility

**Surgical Outcomes:**
- Complete resection goal
- Teratoma can grow (growing teratoma syndrome)`,
      keyTerms: [
        { term: 'IGCCCG', definition: 'International Germ Cell Cancer Collaborative Group - risk classification' },
        { term: 'BEP', definition: 'Bleomycin, Etoposide, Cisplatin - standard chemotherapy regimen' },
        { term: 'growing teratoma syndrome', definition: 'Enlarging teratoma despite treatment, requires surgery' },
      ],
      clinicalNotes: 'Bleomycin pulmonary toxicity risk increases with cumulative dose and age. Monitor pulmonary function and limit cumulative dose in higher-risk patients.',
    },
    4: {
      level: 4,
      summary: 'Advanced testicular cancer care includes salvage regimens, fertility preservation, and management of late effects.',
      explanation: `## Salvage Therapy

**Standard Salvage:**
- TIP: Paclitaxel, Ifosfamide, Cisplatin
- VeIP: Vinblastine, Ifosfamide, Cisplatin

**High-Dose Chemotherapy:**
- Carboplatin + Etoposide with stem cell rescue
- Used in refractory disease
- Select patients may achieve cure

**Late Relapse (>2 years):**
- Often chemo-resistant
- Surgery primary treatment
- May contain teratoma or somatic transformation

## Fertility Considerations

**Pre-Treatment:**
- Sperm banking strongly recommended
- Two samples if possible
- May have baseline oligospermia

**Post-Treatment:**
- Most recover fertility (2-5 years)
- Chemotherapy: Temporary azoospermia
- RPLND: Retrograde ejaculation if not nerve-sparing
- Sperm retrieval options if azoospermic

## Late Effects

**Second Malignancies:**
- Increased risk of solid tumors
- Contralateral testicular cancer (2-3%)
- Leukemia (rare, chemotherapy-related)

**Cardiovascular:**
- Metabolic syndrome
- Increased CV disease
- Long-term monitoring needed

**Ototoxicity:**
- Cisplatin-related
- Permanent high-frequency hearing loss

**Nephrotoxicity:**
- GFR decline
- Baseline and follow-up monitoring

**Neurotoxicity:**
- Peripheral neuropathy
- Raynaud phenomenon

## Follow-Up

**Surveillance Schedule:**
- Frequent first 2 years
- Imaging: CT abdomen/pelvis, CXR
- Markers: AFP, hCG, LDH
- Physical exam

**Long-Term:**
- Annual follow-up lifelong
- Cardiovascular risk management
- Hypogonadism screening`,
      keyTerms: [
        { term: 'TIP regimen', definition: 'Salvage chemotherapy: Paclitaxel, Ifosfamide, Cisplatin' },
        { term: 'late relapse', definition: 'Recurrence more than 2 years after treatment' },
        { term: 'somatic transformation', definition: 'Teratoma evolving into non-germ cell malignancy' },
      ],
      clinicalNotes: 'Late relapse (>2 years) is often chemo-resistant and managed surgically. Complete resection is critical. Multidisciplinary approach essential.',
    },
    5: {
      level: 5,
      summary: 'Expert testicular cancer care encompasses molecular classification, clinical trial integration, and optimizing long-term survivorship.',
      explanation: `## Molecular Classification

**Seminoma vs Nonseminoma:**
- OCT4 expression (seminoma)
- AFP, GPC3 (yolk sac)
- CD30 (embryonal)
- HCG (syncytiotrophoblasts)

**Genomic Features:**
- 12p amplification (isochromosome 12p)
- KIT mutations (some seminomas)
- TP53 wild-type (distinguishes from other cancers)

## Rare Presentations

**Extragonadal GCT:**
- Mediastinal (poor prognosis)
- Retroperitoneal primary
- May have burned-out testicular primary

**Burned-Out Primary:**
- Metastatic GCT with scarred testis
- Orchiectomy still indicated
- Primary site may show scar only

**Bilateral Tumors:**
- Synchronous or metachronous
- Consider genetic counseling
- Fertility preservation critical

## Clinical Trial Landscape

**Active Areas:**
- Marker decline and early switch
- Omission of bleomycin
- Immunotherapy role
- Reducing late effects

**Survivorship Research:**
- Cardiovascular prevention
- Second cancer surveillance
- Quality of life optimization

## Quality Metrics

**Outcomes:**
- Cure rates by risk group
- Marker normalization timing
- Complication rates

**Process:**
- Tumor board discussion
- Fertility preservation offered
- Surveillance compliance

## Multidisciplinary Care

**Centers of Excellence:**
- High-volume experienced centers
- Complex case management
- Clinical trial access

**Team:**
- Urologic oncology
- Medical oncology
- Reproductive medicine
- Survivorship program

## Survivorship Care Plan

**Components:**
- Treatment summary
- Surveillance schedule
- Risk for late effects
- Healthy lifestyle recommendations
- Psychological support resources

**Transition:**
- Oncology to primary care
- Shared care models
- Patient education`,
      keyTerms: [
        { term: 'isochromosome 12p', definition: 'Characteristic genetic abnormality in germ cell tumors' },
        { term: 'burned-out primary', definition: 'Testicular scar from regressed primary tumor with metastatic GCT' },
        { term: 'survivorship care plan', definition: 'Document summarizing treatment and long-term follow-up needs' },
      ],
      clinicalNotes: 'Testicular cancer cure rates make survivorship care critical. Young men cured of GCT will live decades with potential late effects. Proactive management improves long-term outcomes.',
    },
  },

  media: [],
  citations: [
    {
      id: 'nccn-testicular',
      type: 'article',
      title: 'Testicular Cancer',
      source: 'NCCN Guidelines',
    },
  ],
  crossReferences: [
    { targetId: 'topic-testicular-conditions', targetType: 'topic', relationship: 'related', label: 'Testicular Conditions' },
  ],
  tags: {
    systems: ['male reproductive'],
    topics: ['cancer', 'oncology'],
    clinicalRelevance: 'critical',
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default testicularCancer;
