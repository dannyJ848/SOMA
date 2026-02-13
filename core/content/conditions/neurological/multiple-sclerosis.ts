/**
 * Multiple Sclerosis - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const multipleSclerosis: EducationalContent = {
  id: 'condition-multiple-sclerosis',
  type: 'condition',
  name: 'Multiple Sclerosis',
  nameEs: 'Esclerosis Múltiple',
  alternateNames: ['MS', 'Disseminated Sclerosis', 'Demyelinating Disease'],
  hpoId: 'HP:0002345',

  levels: {
    1: {
      level: 1,
      summary: 'Multiple sclerosis is a condition where the immune system mistakenly attacks the protective covering of nerves, causing problems with movement, sensation, and thinking.',
      explanation: `Multiple sclerosis (MS) is a disease that affects the central nervous system—the brain and spinal cord. It happens when the body's immune system attacks the protective coating around nerves.

**What happens in MS:**
- Immune system attacks myelin (protective nerve coating)
- Nerves cannot send signals properly
- Scarring (sclerosis) forms in damaged areas

**Common symptoms:**
- Vision problems (blurry vision, double vision)
- Numbness or tingling
- Weakness in arms or legs
- Difficulty walking
- Fatigue (extreme tiredness)
- Balance problems

**Types of MS:**
- **Relapsing-remitting:** Symptoms come and go
- **Primary progressive:** Symptoms get worse over time
- **Secondary progressive:** Starts with relapses, then progresses

**Who gets MS:**
- Usually diagnosed between ages 20-40
- More common in women
- More common in cooler climates
- Not directly inherited but genes play a role`,
      keyTerms: [
        { term: 'myelin', definition: 'The protective fatty coating around nerve fibers' },
        { term: 'relapse', definition: 'When MS symptoms get worse or new symptoms appear' },
        { term: 'remission', definition: 'Period when symptoms improve or disappear' },
      ],
      analogies: ['Nerves are like electrical wires with insulation. In MS, the immune system strips away this insulation, causing electrical shorts and failed connections.'],
      examples: ['A 28-year-old woman notices blurry vision in one eye that worsens with heat and improves after a few weeks, then later develops tingling in her feet.'],
    },
    2: {
      level: 2,
      summary: 'Multiple sclerosis is an immune-mediated demyelinating disorder of the CNS characterized by relapses and remissions, with diagnosis based on clinical presentation and MRI showing lesions disseminated in time and space.',
      explanation: `## Pathophysiology
- **Autoimmune attack:** T-cells cross blood-brain barrier
- **Demyelination:** Loss of oligodendrocyte-produced myelin
- **Axonal damage:** Occurs early and accumulates
- **Gliosis:** Formation of glial scar tissue (plaques)

## Clinical Course (McDonald Criteria)

**Relapsing-Remitting MS (RRMS):**
- 85% of cases at onset
- Clear relapses with recovery
- Stable between relapses
- Can transition to SPMS

**Secondary Progressive MS (SPMS):**
- Starts as RRMS
- Gradual progression with or without relapses
- Average 10-20 years after onset

**Primary Progressive MS (PPMS):**
- 10-15% of cases
- Gradual progression from onset
- No relapses (or minimal)

**Progressive-Relapsing MS (rare):**
- Progressive from onset
- With acute relapses

## Common Presentations
- **Optic neuritis:** Vision loss, eye pain
- **Internuclear ophthalmoplegia:** Double vision
- **Sensory symptoms:** Numbness, paresthesias
- **Motor weakness:** Spastic paresis
- **Lhermitte sign:** Electric sensation with neck flexion
- **Uhthoff phenomenon:** Worsening with heat

## Diagnosis (McDonald Criteria 2017)
**Requires:**
- Evidence of lesions **disseminated in space** (≥2 CNS sites)
- AND **disseminated in time** (≥2 distinct episodes)
- AND exclusion of alternative diagnoses`,
      keyTerms: [
        { term: 'disseminated in space', definition: 'Lesions in different parts of the CNS' },
        { term: 'disseminated in time', definition: 'Lesions appearing at different times' },
        { term: 'Lhermitte sign', definition: 'Electric shock sensation down spine with neck flexion' },
        { term: 'optic neuritis', definition: 'Inflammation of the optic nerve causing vision loss' },
      ],
    },
    3: {
      level: 3,
      summary: 'MS management includes acute relapse treatment with corticosteroids, disease-modifying therapies targeting inflammation and neurodegeneration, and symptom-specific therapies for spasticity, fatigue, and bladder dysfunction.',
      explanation: `## Diagnostic Testing

**MRI (essential):**
- **T2 hyperintense lesions:** Periventricular, juxtacortical, infratentorial, spinal cord
- **Gadolinium-enhancing:** Active lesions (blood-brain barrier breakdown)
- **Black holes:** Chronic axonal loss (T1 hypointense)

**CSF analysis:**
- Elevated IgG index
- Oligoclonal bands (OCBs) in 90%
- No cells (no pleocytosis)

**Evoked potentials:**
- VEP, SSEP, BAEP (less commonly used now)

**Differential diagnosis:**
- NMOSD (AQP4 antibodies)
- MOG antibody disease
- ADEM
- Sarcoidosis, vasculitis, Lyme

## Disease-Modifying Therapies (DMTs)

**High-efficacy (preferred for active disease):**
- **Ocrelizumab:** Anti-CD20 (B-cell depletion) - RRMS and PPMS
- **Natalizumab:** Alpha-4 integrin blocker (PML risk)
- **Alemtuzumab:** Anti-CD52 (risk of secondary autoimmunity)
- **Cladribine:** Selective lymphocyte depletion
- **Ofatumumab:** Anti-CD20 (subcutaneous)

**Medium-efficacy:**
- **Fingolimod:** Sphingosine-1-phosphate modulator
- **Siponimod, Ozanimod:** Newer S1P modulators
- **Dimethyl fumarate:** Nrf2 activator
- **Teriflunomide:** DHODH inhibitor

**Injectable (lower efficacy):**
- Interferon beta-1a/1b
- Glatiramer acetate

## Relapse Management
- **IV methylprednisolone:** 1000 mg daily x 3-5 days
- **Oral steroids:** Equivalent high-dose regimen
- **Plasma exchange:** For severe steroid-refractory relapses`,
      keyTerms: [
        { term: 'PML', definition: 'Progressive multifocal leukoencephalopathy; serious brain infection from natalizumab' },
        { term: 'oligoclonal bands', definition: 'Abnormal bands of IgG in CSF indicating CNS inflammation' },
        { term: 'AQP4', definition: 'Aquaporin-4; antibody target in neuromyelitis optica' },
      ],
      clinicalNotes: 'AQP4 and MOG antibodies must be checked to exclude NMOSD and MOGAD, which require different treatments. JCV antibody status required for natalizumab—positive increases PML risk.',
    },
    4: {
      level: 4,
      summary: 'Advanced MS care addresses aggressive induction therapy, switching DMTs due to breakthrough disease, pregnancy considerations, progressive MS management, and complication prevention.',
      explanation: `## Treatment Strategy

**Early, high-efficacy approach:**
- Treat early in disease course
- Use high-efficacy DMT for active disease
- "Time is brain" applies to MS
- Prevent irreversible disability accumulation

**Escalation vs Induction:**
- **Escalation:** Start lower, escalate if active
- **Induction:** Start high-efficacy immediately
- Trend toward early high-efficacy in practice

**Breakthrough Disease**
**Define as:**
- Clinical relapse
- New/enlarging MRI lesions
- Confirmed disability progression

**Management:**
- Confirm adherence
- Confirm adequate drug levels
- Switch to different mechanism DMT
- Consider combination (limited evidence)

## Pregnancy and MS

**General:**
- Relapses decrease during pregnancy
- Increase postpartum (especially 3-6 months)
- No effect on fertility
- Pregnancy does not worsen long-term prognosis

**DMT considerations:**
- **Stop before conception:** Most DMTs
- **Possible during pregnancy:** Glatiramer acetate, interferon beta
- **Consider continuing:** Some providers continue high-efficacy if high disease activity
- **Can restart immediately postpartum:** Most DMTs compatible with breastfeeding

## Progressive MS Management

**SPMS with activity:**
- Continue DMT if inflammatory component
- Ocrelizumab approved for SPMS

**PPMS and SPMS without activity:**
- Ocrelizumab for PPMS
- Symptomatic treatments
- Rehabilitation focus
- Neuroprotective agents under study

## Symptom Management

**Spasticity:**
- Baclofen (oral or intrathecal pump)
- Tizanidine
- Botulinum toxin injections
- Physical therapy

**Fatigue:**
- Amantadine, modafinil
- Energy conservation
- Exercise programs

**Bladder dysfunction:**
- Anticholinergics (oxybutynin)
- Beta-3 agonist (mirabegron)
- Intermittent catheterization

**Depression:**
- SSRI antidepressants
- Screen regularly
- Psychotherapy`,
      keyTerms: [
        { term: 'confirmed disability progression', definition: 'Worsening EDSS sustained over time, not due to relapse' },
        { term: 'EDSS', definition: 'Expanded Disability Status Scale; measures MS disability from 0-10' },
        { term: 'intrathecal baclofen pump', definition: 'Implanted device delivering baclofen directly to spinal cord for severe spasticity' },
      ],
      clinicalNotes: 'Women on high-efficacy DMTs who become pregnant need individualized discussion. Many now continue natalizumab or ocrelizumab through pregnancy due to high postpartum relapse risk.',
    },
    5: {
      level: 5,
      summary: 'Precision MS medicine incorporates biomarker-guided therapy selection, neurofilament light chain monitoring, remyelination strategies, B-cell and plasma cell targeted therapies, and individualized risk-benefit assessment.',
      explanation: `## Biomarkers and Monitoring

**Neurofilament Light Chain (NfL):**
- Marker of neuroaxonal damage
- Serum and CSF levels correlate with disease activity
- Predicts disability progression and brain atrophy
- May guide treatment intensity decisions

**Glial fibrillary acidic protein (GFAP):**
- Astrocyte damage marker
- May indicate progressive pathology
- Combined with NfL for comprehensive monitoring

**MRI biomarkers:**
- Brain atrophy rate
- Spinal cord atrophy
- Leptomeningeal enhancement
- Paramagnetic rim lesions (chronic active lesions)

**Pharmacogenomics:**
- HLA types predicting drug reactions
- CYP variants for metabolism
- Antibody responses to biologics

## Novel Therapeutic Targets

**B-cell therapies:**
- **Ocrelizumab:** Anti-CD20
- **Ofatumumab:** Subcutaneous anti-CD20
- **Ublituximab:** Newer anti-CD20
- **Inebilizumab:** Anti-CD19 (B-cells + plasma cells)

**Plasma cell targeting:**
- **Bortezomib:** Proteasome inhibitor
- **Anti-BCMA therapies:** In development

**Bruton tyrosine kinase (BTK) inhibitors:**
- **Evobrutinib, tolebrutinib:** Cross BBB
- Target B-cells and microglia
- Oral administration
- Phase 3 trials ongoing

**Sphingosine-1-phosphate (S1P) modulators:**
- **Ponesimod:** Approved 2021
- **Ozanimod:** More selective S1P receptor
- Multiple newer agents in development

## Remyelination and Neuroprotection

**Remyelination strategies:**
- **Anti-LINGO-1 (opicinumab):** Phase 2 mixed results
- **Clemastine:** Antihistamine with remyelination properties
- **Stem cell approaches:** Mesenchymal, oligodendrocyte precursor cells

**Neuroprotective agents:**
- **Ibudilast:** Phosphodiesterase inhibitor
- **Siponimod:** Neuroprotective beyond anti-inflammatory
- **Alpha-lipoic acid:** Antioxidant

## Autologous Hematopoietic Stem Cell Transplant (AHSCT)
- Highly effective for aggressive RRMS
- One-time treatment with durable remission
- Significant mortality risk (1-2%)
- Best in younger patients with high inflammatory activity
- May halt disease progression

## Precision Medicine
- MRI lesion morphology predicts treatment response
- Serum NfL for treatment monitoring
- Genetic risk scores for prognosis
- Machine learning models for individualized therapy selection`,
      keyTerms: [
        { term: 'NfL', definition: 'Neurofilament light chain; biomarker of neuroaxonal damage' },
        { term: 'paramagnetic rim lesions', definition: 'Iron-containing MS lesions indicating chronic active inflammation' },
        { term: 'AHSCT', definition: 'Autologous hematopoietic stem cell transplant; aggressive MS treatment' },
      ],
      clinicalNotes: 'Serum NfL is becoming clinically available and may transform MS monitoring. BTK inhibitors represent promising oral option targeting both peripheral and CNS-resident B-cells. AHSCT offers potential for treatment-free remission in select patients.',
    },
  },

  media: [],
  citations: [
    { id: 'mcdonald-2017', type: 'article', title: 'McDonald Criteria for the Diagnosis of Multiple Sclerosis', source: 'Lancet Neurology' },
    { id: 'aan-ms-2018', type: 'article', title: 'AAN Guidelines for Disease-Modifying Therapies in MS', source: 'Neurology' },
  ],
  crossReferences: [
    { targetId: 'condition-neuromyelitis-optica', targetType: 'condition', relationship: 'related', label: 'Neuromyelitis Optica' },
    { targetId: 'condition-mogad', targetType: 'condition', relationship: 'related', label: 'MOG Antibody Disease' },
  ],
  tags: {
    systems: ['neurological'],
    topics: ['neurology', 'autoimmune'],
    keywords: ['multiple sclerosis', 'MS', 'demyelinating', 'DMT', 'ocrelizumab'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['neurology', 'medicine'] },
  },
  createdAt: '2025-01-26T00:00:00.000Z',
  updatedAt: '2025-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default multipleSclerosis;
