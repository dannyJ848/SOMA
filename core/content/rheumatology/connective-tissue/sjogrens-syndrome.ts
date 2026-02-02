/**
 * Sjogren Syndrome
 *
 * Chronic autoimmune disease targeting exocrine glands, primarily salivary and lacrimal,
 * with significant systemic manifestations including lymphoma risk.
 */

import { EducationalContent } from '../../types';

export const sjogrensSyndromeContent: EducationalContent = {
  id: 'rheumatology-sjogrens',
  type: 'condition',
  name: 'Sjogren Syndrome',
  nameEs: 'Sindrome de Sjogren',
  alternateNames: ['Sjogren Disease', 'SS', 'Sicca Syndrome', 'Autoimmune Exocrinopathy'],

  levels: {
    1: {
      level: 1,
      summary: 'Sjogren syndrome is a disease where your immune system attacks the glands that make tears and saliva, causing very dry eyes and dry mouth. It can also affect other parts of the body.',
      explanation: `## What Is Sjogren Syndrome?

Sjogren syndrome is an autoimmune disease that mainly attacks the glands that make moisture - particularly the tear glands and saliva glands.

## Main Symptoms

**Dry Eyes (Sicca):**
- Eyes feel gritty, sandy, or burning
- Sensitivity to light
- Blurred vision
- Need to use eye drops frequently

**Dry Mouth:**
- Difficulty swallowing dry food without water
- Increased cavities and gum disease
- Mouth feels like cotton
- Tongue may crack or be sore

**Other Symptoms:**
- Extreme fatigue
- Joint pain
- Dry skin
- Vaginal dryness
- Chronic cough (dry airways)
- Swollen salivary glands

## Who Gets It?

- Women (9 out of 10 patients)
- Usually diagnosed between ages 40-60
- Can occur alone (primary) or with another autoimmune disease (secondary)

## Treatment

- Artificial tears and eye drops
- Saliva substitutes and lozenges
- Drinking water frequently
- Prescription medicines for severe dryness
- Regular dental care is very important
- Medicines to calm the immune system if organs are affected`,

      keyTerms: [
        { term: 'Sicca', definition: 'Medical term for dryness, especially of eyes and mouth' },
        { term: 'Saliva', definition: 'The liquid made by glands in your mouth that helps you chew and swallow' },
        { term: 'Autoimmune', definition: 'When the immune system mistakenly attacks the body' },
        { term: 'Lacrimal glands', definition: 'The glands above your eyes that produce tears' },
      ],
      analogies: [
        'Sjogren syndrome is like the immune system turning off the faucets that keep your eyes and mouth moist.',
        'Living with Sjogren is like being in a desert - everything feels dry all the time.',
      ],
      examples: [
        'Woman who always needs water to swallow food and uses eye drops many times a day',
        'Person with increasing dental cavities despite good brushing who also has dry, gritty eyes',
        'Someone whose parotid glands (in front of ears) are swollen and has joint pain',
      ],
      patientCounselingPoints: [
        'Carry water with you at all times.',
        'Use sugar-free gum or lozenges to stimulate saliva.',
        'See your dentist every 3-4 months (increased cavity risk).',
        'Use a humidifier at home, especially in the bedroom.',
        'Avoid antihistamines and decongestants which worsen dryness.',
      ],
    },

    2: {
      level: 2,
      summary: 'Sjogren syndrome involves lymphocytic infiltration of exocrine glands causing sicca symptoms. Diagnosis requires anti-SSA/Ro antibodies or salivary gland biopsy. Major concern is 5-10% lifetime risk of B-cell lymphoma.',
      explanation: `## Pathophysiology

**Glandular Infiltration:**
- CD4+ T lymphocytes and B cells infiltrate salivary and lacrimal glands
- Periductal lymphocytic focus (cluster of >50 lymphocytes)
- Progressive acinar destruction
- Ectopic germinal center formation in severe cases

**Primary vs Secondary:**
- Primary: Sjogren alone
- Secondary: With RA, SLE, systemic sclerosis, or other autoimmune disease
- Secondary is common: 20-30% of RA patients have secondary Sjogren

## Clinical Features

**Glandular (Sicca):**
- Keratoconjunctivitis sicca: Dry eyes, corneal damage
- Xerostomia: Dry mouth, dental caries, oral candidiasis
- Parotid gland enlargement (bilateral, recurrent)

**Extraglandular (Systemic):**
- Arthralgias/arthritis (60-70%, non-erosive)
- Interstitial lung disease, lymphocytic interstitial pneumonia (LIP)
- Renal tubular acidosis (type 1, distal)
- Peripheral neuropathy (sensory > motor)
- Cutaneous vasculitis, purpura
- Raynaud phenomenon (20%)
- Fatigue (dominant symptom affecting quality of life)

**Lymphoma Risk:**
- 5-10% lifetime risk of B-cell non-Hodgkin lymphoma
- Most common: MALT lymphoma of salivary glands
- Risk factors: Persistent parotid enlargement, lymphadenopathy, palpable purpura, low C4, cryoglobulinemia, high RF
- Monitor: Parotid swelling, lymphadenopathy, new cytopenia

## Diagnosis

**2016 ACR/EULAR Classification Criteria (score >=4):**
- Labial salivary gland biopsy: Focus score >=1 (3 points)
- Anti-SSA/Ro positive (3 points)
- Ocular staining score >=5 (1 point)
- Schirmer test <=5mm/5min (1 point)
- Unstimulated salivary flow <=0.1mL/min (1 point)

**Key Autoantibodies:**
- Anti-SSA/Ro: 60-70% (most sensitive)
- Anti-SSB/La: 30-40% (more specific)
- ANA: 80%+
- RF: 50-70%
- Low complement C4`,

      keyTerms: [
        { term: 'Focus score', definition: 'Number of lymphocytic foci per 4mm2 of salivary gland tissue on biopsy; >=1 is diagnostic' },
        { term: 'Anti-SSA/Ro', definition: 'Antibody most sensitive for Sjogren; also associated with neonatal lupus' },
        { term: 'MALT lymphoma', definition: 'Mucosa-associated lymphoid tissue lymphoma - most common lymphoma in Sjogren' },
        { term: 'Schirmer test', definition: 'Paper strip placed under lower eyelid to measure tear production' },
      ],
      analogies: [
        'Lymphocytes infiltrating salivary glands is like an invading army occupying a water treatment plant.',
        'The focus score on biopsy is like counting enemy encampments to assess invasion severity.',
      ],
      examples: [
        'Woman with dry eyes and mouth, positive anti-SSA/Ro, and focus score of 2 on biopsy',
        'Patient with persistent parotid swelling and low C4 - monitor closely for lymphoma',
        'Person with Sjogren who develops renal tubular acidosis type 1 with hypokalemia',
      ],
      clinicalNotes: 'Anti-SSA/Ro crosses the placenta and can cause neonatal lupus including congenital heart block. Screen pregnant women with Sjogren for anti-SSA. Monitor fetal heart rate starting at 16 weeks. Low C4 and cryoglobulinemia are the strongest predictors of lymphoma development in Sjogren.',
    },

    3: {
      level: 3,
      summary: 'Treatment of Sjogren is primarily symptomatic for sicca, with immunosuppressants reserved for systemic manifestations. Rituximab is used for severe extraglandular disease. Lymphoma surveillance is critical given the 15-20x increased risk.',
      explanation: `## Treatment

**Ocular:**
- Artificial tears (preservative-free for frequent use)
- Cyclosporine 0.05% ophthalmic (Restasis) or lifitegrast (Xiidra)
- Punctal plugs to retain tears
- Autologous serum eye drops for severe cases
- Avoid low-humidity environments, use humidifiers

**Oral:**
- Pilocarpine 5mg TID or cevimeline 30mg TID (muscarinic agonists)
- Stimulate residual salivary function
- Side effects: Sweating, GI upset, urinary frequency
- Fluoride treatments, dental sealants
- Treat oral candidiasis with antifungals

**Systemic Disease:**
- Hydroxychloroquine: Fatigue, arthralgias (limited evidence but widely used)
- Methotrexate or azathioprine for arthritis
- Rituximab for severe extraglandular disease (cryoglobulinemic vasculitis, neuropathy, severe parotid swelling)
- Cyclophosphamide for life-threatening organ involvement (CNS, severe vasculitis)
- Mycophenolate for ILD

**Lymphoma Management:**
- MALT lymphoma: Often indolent, may watch and wait
- Aggressive lymphoma: Standard chemotherapy (R-CHOP)
- Transformation from MALT to DLBCL: Poor prognosis

## Neonatal Lupus (Anti-SSA/Ro)

**Risk:**
- 2% risk of congenital heart block per pregnancy (anti-SSA+ mother)
- 15-20% risk if previous affected child
- Heart block occurs 18-24 weeks gestation

**Monitoring:**
- Fetal echocardiography starting 16 weeks, weekly through 26 weeks
- Hydroxychloroquine may reduce risk (PATCH trial)
- Dexamethasone for incomplete block (controversial)
- Complete heart block often requires pacemaker

## Prognostic Stratification

**Higher Risk Features:**
- Low C4 complement
- Cryoglobulinemia (mixed type II)
- Palpable purpura
- Persistent parotid enlargement
- Lymphadenopathy
- Monoclonal gammopathy
- ESSDAI score used for extraglandular disease activity`,

      keyTerms: [
        { term: 'Pilocarpine', definition: 'Muscarinic agonist that stimulates salivary and lacrimal gland secretion' },
        { term: 'Punctal plugs', definition: 'Tiny devices inserted into tear ducts to block drainage and retain tears on the eye surface' },
        { term: 'ESSDAI', definition: 'EULAR Sjogren Syndrome Disease Activity Index measuring extraglandular disease' },
        { term: 'Cryoglobulinemia', definition: 'Abnormal proteins that precipitate in cold; type II strongly linked to lymphoma risk in Sjogren' },
      ],
      analogies: [
        'Pilocarpine is like turning the faucet back on in glands that still have some function left.',
        'Punctal plugs are like putting a stopper in the bathtub drain to keep tears from draining away too fast.',
      ],
      examples: [
        'Sjogren patient with severe dry eyes started on cyclosporine drops after artificial tears insufficient',
        'Pregnant woman with anti-SSA gets weekly fetal echo from 16-26 weeks for heart block screening',
        'Patient with cryoglobulinemia and purpura gets rituximab for vasculitis and close lymphoma surveillance',
      ],
      clinicalNotes: 'Hydroxychloroquine is widely used in Sjogren for fatigue and arthralgia despite limited trial evidence (JOQUER trial was negative for primary endpoint). Rituximab showed improvement in fatigue and extraglandular disease in TRACTISS trial but did not meet primary endpoint for oral dryness. Focus treatment on quality of life and preventing complications.',
    },

    4: {
      level: 4,
      summary: 'Sjogren pathogenesis involves TLR activation, ectopic germinal centers, and BAFF overexpression driving B-cell hyperactivity. The continuum from autoimmunity to lymphoproliferation is mediated by chronic B-cell stimulation and NF-kappaB dysregulation.',
      explanation: `## Advanced Pathogenesis

**Innate Immunity:**
- Epithelial cells are active participants (not just targets)
- Salivary gland epithelial cells express TLR3, produce IFN-beta
- Type I IFN signature present (similar to SLE)
- BAFF overexpression by epithelial cells and IFN-stimulated monocytes
- pDCs infiltrate glands and produce IFN-alpha

**Ectopic Germinal Centers (EGC):**
- Form within salivary glands in 25-30% of patients
- Contain follicular dendritic cell networks, Tfh cells, proliferating B cells
- Support local autoantibody production
- EGC presence correlates with higher ESSDAI, lower C4, and lymphoma risk
- Key transcription factor: BCL6

**Autoimmunity-to-Lymphoma Continuum:**
- Chronic B-cell stimulation by autoantigens
- NF-kappaB constitutive activation
- BAFF promotes survival of autoreactive and pre-malignant B cells
- Clonal B-cell expansion detectable years before lymphoma
- Somatic mutations accumulate (MYD88 L265P, TNFAIP3 inactivation)
- Transition: Polyclonal -> oligoclonal -> monoclonal B-cell proliferation
- Marginal zone B cells are the cell of origin for MALT lymphoma

**Genetic Susceptibility:**
- HLA-DR3 (DRB1*03:01): Strongest genetic association
- IRF5, STAT4, BLK, TNFAIP3 polymorphisms
- Shared genetic architecture with SLE

## Lymphoma Pathogenesis

**Risk Factors (Validated):**
- Cryoglobulinemia (type II): OR 5-10x
- Low C4: OR 5-8x
- Palpable purpura: OR 3-5x
- Lymphadenopathy
- Monoclonal gammopathy on serum electrophoresis
- GC-like structures on biopsy
- Baseline ESSDAI >5

**MALT Lymphoma Biology:**
- Arises from marginal zone B cells in salivary glands
- Antigen-driven: Auto-reactive B cells stimulated by immune complexes
- t(11;18), t(14;18), t(1;14) translocations in some cases
- BCL10 and MALT1 dysregulation -> NF-kappaB activation
- Can transform to diffuse large B-cell lymphoma (DLBCL)

## Neurological Manifestations

**Peripheral Neuropathy (10-30%):**
- Small fiber neuropathy: Most common, painful burning sensation
- Sensory ataxic neuropathy (dorsal root ganglionitis)
- Mononeuritis multiplex (vasculitic)
- Cranial neuropathies (trigeminal sensory neuropathy)

**CNS Involvement (Rare but Serious):**
- Optic neuritis, transverse myelitis (NMO-like)
- Anti-aquaporin-4 overlap with neuromyelitis optica spectrum disorder
- Cognitive dysfunction ("brain fog")`,

      keyTerms: [
        { term: 'Ectopic germinal center', definition: 'Lymphoid structures forming within salivary glands driving local autoantibody production and lymphomagenesis' },
        { term: 'BAFF', definition: 'B-cell activating factor overproduced by epithelial cells driving B-cell survival and autoimmunity in Sjogren' },
        { term: 'MYD88 L265P', definition: 'Somatic mutation in MALT lymphoma activating NF-kappaB downstream of TLR signaling' },
        { term: 'Anti-aquaporin-4', definition: 'Antibody linking Sjogren to neuromyelitis optica spectrum disorder' },
      ],
      analogies: [
        'The autoimmunity-to-lymphoma continuum is like a slow-burning fire of B-cell stimulation that eventually ignites cancer.',
        'Ectopic germinal centers in salivary glands are like rogue factories producing antibodies outside their normal jurisdiction.',
      ],
      examples: [
        'Sjogren patient with monoclonal gammopathy and low C4 gets PET-CT for lymphoma surveillance',
        'Biopsy shows ectopic GCs in salivary gland - patient at higher risk for MALT lymphoma',
        'Patient with Sjogren and optic neuritis tested for anti-aquaporin-4 (NMO overlap)',
      ],
      clinicalNotes: 'Cryoglobulinemia and low C4 are the strongest lymphoma predictors and should be checked at baseline and periodically. An increase in parotid size, new lymphadenopathy, or worsening cytopenias should prompt evaluation for lymphoma transformation. Small fiber neuropathy is frequently underdiagnosed in Sjogren and requires skin biopsy for definitive diagnosis (intraepidermal nerve fiber density).',
    },

    5: {
      level: 5,
      summary: 'Current research focuses on targeting BAFF (belimumab), IFN pathways (anifrolumab), and Bruton tyrosine kinase (BTK inhibitors) in Sjogren. Salivary gland ultrasound is emerging as a non-invasive diagnostic tool. Single-cell transcriptomics are revealing disease heterogeneity.',
      explanation: `## Emerging Therapeutics

**Anti-BAFF:**
- Belimumab: Phase 3 BELISS study showed improvement in ESSDAI and dryness in subset
- Ianalumab (anti-BAFFR): Depletes BAFF-dependent B cells + blocks BAFF signaling
  - Phase 2b results: Significant ESSDAI improvement, anti-SSA reduction
  - Promising lead compound for Sjogren

**BTK Inhibitors:**
- Remibrutinib: Selective BTK inhibitor in Phase 3 for Sjogren (LOUiSSe trial)
- BTK expressed in B cells and macrophages
- Inhibits B-cell receptor signaling and autoantibody production
- May address B-cell hyperactivity without global immunosuppression

**Anti-IFNAR:**
- Anifrolumab: Under investigation (type I IFN signature present in 50-60% of Sjogren)
- May benefit IFN-high patients

**CD40/CD40L Blockade:**
- Iscalimab (anti-CD40): Phase 2 study showed ESSDAI improvement
- Blocks T-B cell costimulation
- Dapirolizumab pegol (anti-CD40L): Also under investigation

**Other Targets:**
- Emapalumab (anti-IFN-gamma): Targeting IFN-gamma in glandular inflammation
- Telitacicept (anti-BAFF/APRIL): Dual blockade, SLE data may translate to Sjogren
- CAR-T therapy: Case reports in Sjogren (extrapolating from SLE success)
- Intraglandular injection: Local therapies being explored

## Salivary Gland Ultrasound (SGUS)

**As Diagnostic Tool:**
- Non-invasive alternative to salivary gland biopsy
- Scoring systems: Hocevar, OMERACT
- Hypoechoic/anechoic areas representing lymphocytic infiltration
- Sensitivity 60-85%, specificity 85-95%
- Proposed for inclusion in future classification criteria
- Reproducible with standardized scoring

**As Monitoring Tool:**
- SGUS scores improve with effective treatment (rituximab)
- May detect early structural damage before clinical sicca

## Single-Cell and Spatial Transcriptomics

**Disease Heterogeneity:**
- Single-cell RNA-seq reveals multiple epithelial cell states in affected glands
- Progenitor cell depletion in advanced disease (explains irreversible gland destruction)
- Distinct immune cell infiltrate patterns: T-dominant vs B-dominant
- Spatial transcriptomics mapping ectopic GC architecture

**Clinical Implications:**
- T-dominant infiltrate: May respond to abatacept
- B-dominant infiltrate: May respond to rituximab or anti-BAFF
- IFN-high signature: May respond to anifrolumab
- Future: Biopsy-guided therapy selection

## Outcome Measures and Trial Design

**Challenges in Sjogren Clinical Trials:**
- Heterogeneous disease, slow progression
- Sicca symptoms poorly correlate with disease activity
- ESSDAI (extraglandular activity) vs ESSPRI (patient-reported symptoms)
- Composite endpoints emerging: Combined ESSDAI + ESSPRI response
- Objective salivary flow rate and Schirmer test as secondary endpoints
- Long follow-up needed for meaningful sicca improvement`,

      keyTerms: [
        { term: 'Ianalumab', definition: 'Anti-BAFF receptor antibody showing promising results in Sjogren Phase 2b trials' },
        { term: 'BTK inhibitor', definition: 'Bruton tyrosine kinase inhibitor blocking B-cell receptor signaling; remibrutinib in Phase 3 for Sjogren' },
        { term: 'SGUS', definition: 'Salivary gland ultrasound - emerging non-invasive diagnostic and monitoring tool for Sjogren' },
        { term: 'ESSPRI', definition: 'EULAR Sjogren Syndrome Patient Reported Index measuring dryness, fatigue, and pain' },
      ],
      analogies: [
        'Biopsy-guided therapy is like matching the right key to the specific lock of each patient disease phenotype.',
        'SGUS replacing biopsy is like using an airport scanner instead of opening every suitcase.',
      ],
      examples: [
        'Sjogren patient enrolled in ianalumab trial after rituximab showed incomplete response',
        'SGUS used to monitor treatment response in research setting, showing improved echostructure',
        'Single-cell transcriptomics on salivary gland biopsy reveals B-dominant infiltrate, guiding rituximab use',
      ],
      clinicalNotes: 'Sjogren therapeutics are at an inflection point. After decades of negative trials (TEARS, TRACTISS, JOQUER), the ianalumab Phase 2b and ongoing BTK inhibitor trials represent the most promising pipeline. The key insight is disease heterogeneity - one drug will not work for all patients. Biomarker-guided therapy (IFN signature, B-cell dominance, EGC presence) is the path toward effective treatment. SGUS is likely to be incorporated into future classification criteria and treatment monitoring.',
    },
  },

  media: [],
  citations: [
    { id: 'cite-sjogren-acr-eular', type: 'article', title: '2016 ACR/EULAR Classification Criteria for Sjogren Syndrome', source: 'Ann Rheum Dis 2017' },
    { id: 'cite-tractiss', type: 'article', title: 'Rituximab in Primary Sjogren Syndrome (TRACTISS)', source: 'Lancet 2017' },
  ],
  crossReferences: [
    { targetId: 'rheumatology-autoimmune-diseases', targetType: 'topic', relationship: 'parent', label: 'Autoimmune Diseases' },
    { targetId: 'rheumatology-scleroderma', targetType: 'condition', relationship: 'sibling', label: 'Scleroderma' },
    { targetId: 'rheumatology-lupus', targetType: 'topic', relationship: 'related', label: 'SLE' },
  ],
  tags: {
    topics: ['rheumatology', 'sjogrens', 'sicca', 'autoimmune', 'connective-tissue', 'lymphoma', 'dry-eyes'],
    systems: ['musculoskeletal', 'immune'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['rheumatology', 'medicine'] },
  },

  createdAt: '2025-01-30',
  updatedAt: '2025-01-30',
  version: 1,
  status: 'published',
};
