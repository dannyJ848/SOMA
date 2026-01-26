import { EducationalContent } from '../../types';

export const sclerodermaContent: EducationalContent = {
  id: 'condition-scleroderma',
  type: 'condition',
  name: 'Scleroderma',
  alternateNames: ['Systemic sclerosis', 'SSc', 'Progressive systemic sclerosis'],
  hpoId: 'HP:0100324',

  levels: {
    1: {
      level: 1,
      summary: 'Scleroderma is a condition where the body makes too much collagen, causing the skin and internal organs to become thick and hard.',
      explanation: `Scleroderma means "hard skin" - and that describes what happens in this condition. The body produces too much of a protein called collagen, which normally gives skin and tissues their strength.

**What happens in scleroderma:**
- Skin becomes thick, tight, and hard
- Blood vessels don't work properly
- Internal organs can be affected
- The immune system is overactive

**Common symptoms:**
- Fingers and toes turn white or blue in the cold (Raynaud's phenomenon)
- Skin becomes thick and tight, especially on hands and face
- Fingers may swell and become hard to bend
- Heartburn and swallowing problems
- Shortness of breath
- Fatigue

**Two main types:**
1. **Limited scleroderma:**
   - Skin changes mainly on hands, face, and lower arms/legs
   - Progresses slowly
   - Internal organs affected later

2. **Diffuse scleroderma:**
   - Skin changes spread more widely
   - Internal organs affected earlier
   - More aggressive form

**Who gets scleroderma:**
- More common in women (4:1)
- Usually develops between ages 30-50
- Rare disease overall

**Treatment:**
- Medications to help blood flow
- Drugs to suppress the overactive immune system
- Treatment for specific organ problems
- Physical therapy to maintain movement

**Living with scleroderma:**
While there's no cure, many treatments can help manage symptoms and slow the disease.`,
      keyTerms: [
        { term: 'scleroderma', definition: 'A condition where too much collagen makes skin and organs hard and thick' },
        { term: 'collagen', definition: 'A protein that gives strength to skin, bones, and connective tissues' },
        { term: 'Raynaud\'s phenomenon', definition: 'When fingers or toes turn white or blue in cold due to blood vessel spasms', pronunciation: 'ray-NOHZ' },
        { term: 'fibrosis', definition: 'Scarring and hardening of tissues from too much collagen' },
      ],
      analogies: [
        'Scleroderma is like the body laying down too much cement - tissues that should be flexible become stiff and hard.',
        'Raynaud\'s phenomenon is like the blood vessels overreacting to cold, slamming shut when they shouldn\'t.',
      ],
      examples: [
        'A woman notices her fingers turn white in cold weather, then becomes concerned when the skin on her hands becomes tight and shiny',
        'Someone develops difficulty swallowing and severe heartburn along with skin tightening',
        'A patient\'s face becomes mask-like and the mouth opening becomes smaller over time',
      ],
    },
    2: {
      level: 2,
      summary: 'Systemic sclerosis (scleroderma) is an autoimmune connective tissue disease characterized by vasculopathy, immune activation, and fibrosis affecting skin and internal organs, classified as limited or diffuse based on extent of skin involvement.',
      explanation: `Systemic sclerosis involves three key pathologic processes: vascular damage, immune dysregulation, and excessive fibrosis.

**Classification:**

*Limited Cutaneous SSc (lcSSc):*
- Skin involvement distal to elbows/knees
- Face involvement common
- CREST syndrome features:
  - Calcinosis
  - Raynaud's phenomenon
  - Esophageal dysmotility
  - Sclerodactyly
  - Telangiectasias
- Anti-centromere antibody positive
- Pulmonary arterial hypertension risk

*Diffuse Cutaneous SSc (dcSSc):*
- Widespread skin involvement (trunk, proximal limbs)
- Early internal organ involvement
- Anti-Scl-70 (topoisomerase I) antibody
- Interstitial lung disease risk
- More aggressive course

**Clinical Features:**

*Vascular:*
- Raynaud's phenomenon (>95%)
- Digital ulcers
- Pulmonary arterial hypertension
- Scleroderma renal crisis

*Skin:*
- Skin thickening (sclerosis)
- Puffy fingers early, then sclerodactyly
- Facial changes (mask-like)
- Calcinosis cutis

*Gastrointestinal (most common internal involvement):*
- Esophageal dysmotility (GERD, dysphagia)
- Small bowel dysmotility (bacterial overgrowth)
- Constipation

*Pulmonary:*
- Interstitial lung disease (leading cause of death)
- Pulmonary arterial hypertension
- Restrictive pattern on PFTs

*Cardiac:*
- Myocardial fibrosis
- Pericarditis
- Arrhythmias

*Renal:*
- Scleroderma renal crisis (SRC)
- Malignant hypertension
- Microangiopathic hemolytic anemia

**Diagnosis:**
- 2013 ACR/EULAR classification criteria
- Autoantibodies: ANA, anti-centromere, anti-Scl-70, anti-RNA polymerase III
- Nailfold capillaroscopy
- Skin biopsy (rarely needed)

**Treatment:**
- Raynaud's: Calcium channel blockers, PDE5 inhibitors
- Digital ulcers: Prostanoids, bosentan
- ILD: Mycophenolate, nintedanib
- PAH: ERA, PDE5i, prostanoids
- Renal crisis: ACE inhibitors (life-saving)
- GI: PPIs, prokinetics`,
      keyTerms: [
        { term: 'CREST syndrome', definition: 'Limited scleroderma features: Calcinosis, Raynaud\'s, Esophageal dysmotility, Sclerodactyly, Telangiectasias' },
        { term: 'sclerodactyly', definition: 'Thickening and tightening of skin on the fingers', pronunciation: 'skler-oh-DAK-til-ee' },
        { term: 'anti-centromere antibody', definition: 'Autoantibody associated with limited cutaneous scleroderma' },
        { term: 'anti-Scl-70', definition: 'Anti-topoisomerase I antibody; associated with diffuse scleroderma and ILD' },
        { term: 'scleroderma renal crisis', definition: 'Life-threatening complication with malignant hypertension and renal failure' },
      ],
      analogies: [
        'The three processes in scleroderma are like a triple threat: vessels narrowing, immune system attacking, and tissues scarring.',
        'Scleroderma renal crisis is like a sudden blood pressure emergency that can destroy the kidneys within days.',
      ],
    },
    3: {
      level: 3,
      summary: 'Systemic sclerosis pathogenesis involves endothelial injury, immune activation with Th2 polarization, and fibroblast activation leading to excessive collagen deposition, with clinical management guided by antibody profile, organ involvement, and disease subset.',
      explanation: `**Pathophysiology:**

1. **Vascular Injury:**
   - Endothelial cell activation and apoptosis
   - Intimal proliferation and adventitial fibrosis
   - Progressive luminal obliteration
   - Tissue hypoxia drives fibrosis

2. **Immune Dysregulation:**
   - B cell hyperactivity (autoantibodies)
   - T cell activation (Th2 polarization)
   - Macrophage activation (M2 phenotype)
   - Profibrotic cytokines (TGF-beta, IL-4, IL-13)

3. **Fibrosis:**
   - Fibroblast activation to myofibroblasts
   - Excessive extracellular matrix deposition
   - Type I and III collagen accumulation
   - Impaired matrix degradation

**Autoantibody Associations:**

| Antibody | Subset | Clinical Association |
|----------|--------|---------------------|
| Anti-centromere | lcSSc | PAH, limited skin |
| Anti-Scl-70 | dcSSc | ILD, diffuse skin |
| Anti-RNA pol III | dcSSc | Renal crisis, cancer |
| Anti-U1 RNP | Overlap | MCTD features |
| Anti-Th/To | lcSSc | PAH, ILD (limited) |
| Anti-PM-Scl | Overlap | Myositis overlap |

**Organ-Specific Management:**

*Interstitial Lung Disease:*
- Screening: PFTs, HRCT at diagnosis
- Monitor: PFTs every 6-12 months
- Treatment: Mycophenolate (SLS II), nintedanib (SENSCIS)
- Progressive: Consider cyclophosphamide, transplant evaluation

*Pulmonary Arterial Hypertension:*
- Screening: TTE annually, RHC if suspected
- Treatment: Combination therapy upfront
  - ERA (ambrisentan, bosentan)
  - PDE5i (sildenafil, tadalafil)
  - Prostanoids (epoprostenol, treprostinil)
  - Soluble guanylate cyclase stimulator (riociguat)

*Scleroderma Renal Crisis:*
- Risk factors: dcSSc, anti-RNA pol III, steroids >15 mg/day
- Presentation: Malignant HTN, AKI, MAHA
- Treatment: ACE inhibitors immediately, even if creatinine rises
- Continue ACE inhibitors indefinitely
- 50% require dialysis (some recover)

*Raynaud's and Digital Ulcers:*
- First-line: CCBs (nifedipine, amlodipine)
- Add: PDE5i (sildenafil)
- Prostanoids: IV iloprost for active ulcers
- Bosentan: Prevention of new digital ulcers
- Wound care, infection prevention

*GI Involvement:*
- GERD: PPIs (high dose)
- Dysmotility: Prokinetics (metoclopramide, prucalopride)
- Bacterial overgrowth: Rotating antibiotics
- Nutrition: Small frequent meals, nutritional support

**Modified Rodnan Skin Score (mRSS):**
- Standardized assessment of skin thickness
- 17 body areas, scored 0-3 each
- Maximum score 51
- Used to monitor disease activity

**Prognosis:**
- 5-year survival: ~80% overall
- Worse: dcSSc, ILD, PAH, renal crisis
- Better: lcSSc without organ involvement
- Leading causes of death: ILD, PAH, cardiac`,
      keyTerms: [
        { term: 'anti-RNA polymerase III', definition: 'Autoantibody associated with diffuse SSc, renal crisis, and cancer risk' },
        { term: 'modified Rodnan skin score', definition: 'Standardized clinical assessment of skin thickness used to monitor scleroderma activity' },
        { term: 'nintedanib', definition: 'Tyrosine kinase inhibitor shown to slow ILD progression in scleroderma (SENSCIS trial)' },
        { term: 'myofibroblast', definition: 'Activated fibroblast responsible for excessive collagen production in scleroderma' },
        { term: 'nailfold capillaroscopy', definition: 'Microscopic examination of nail bed capillaries showing characteristic changes in scleroderma' },
      ],
      clinicalNotes: 'Never use high-dose steroids (>15 mg/day prednisone) in diffuse SSc due to renal crisis risk. ACE inhibitors are mandatory in renal crisis - do not stop even if creatinine rises initially. Anti-RNA polymerase III positive patients need cancer screening. Screen all SSc patients for ILD and PAH at diagnosis and regularly thereafter.',
    },
    4: {
      level: 4,
      summary: 'Systemic sclerosis pathogenesis involves vascular endothelial injury triggering immune activation with TGF-beta-driven fibroblast transdifferentiation, while targeted therapies address specific pathways including endothelin signaling, TGF-beta, and tyrosine kinases, with autologous stem cell transplant considered for severe refractory disease.',
      explanation: `**Detailed Pathogenesis:**

1. **Initiating Events:**
   - Endothelial injury (unknown trigger)
   - Genetic susceptibility (HLA, IRF5, STAT4)
   - Environmental factors (silica, solvents)
   - Viral triggers proposed (CMV, parvovirus)

2. **Vascular Pathology:**
   - Endothelial cell apoptosis
   - Loss of capillaries (rarefaction)
   - Intimal hyperplasia
   - Adventitial fibrosis
   - Progressive luminal narrowing
   - Endothelial-to-mesenchymal transition

3. **Immune Activation:**

   *Innate Immunity:*
   - Toll-like receptor signaling
   - Type I interferon signature
   - Macrophage polarization (M2)
   - Platelet activation

   *Adaptive Immunity:*
   - B cell hyperactivity
   - Pathogenic autoantibodies
   - Th2 polarization (IL-4, IL-13)
   - Reduced Tregs

4. **Fibrotic Pathway:**

   *TGF-beta Signaling:*
   - Central profibrotic mediator
   - SMAD-dependent pathway
   - SMAD-independent (MAPK, PI3K)
   - Fibroblast activation
   - ECM production

   *Other Mediators:*
   - PDGF (fibroblast proliferation)
   - CTGF/CCN2 (downstream of TGF-beta)
   - Endothelin-1 (vasoconstriction, fibrosis)
   - IL-6 (inflammation, fibrosis)
   - Wnt signaling

5. **Cellular Players:**
   - Fibroblasts → myofibroblasts
   - Pericytes → myofibroblasts
   - Epithelial cells (EMT)
   - Endothelial cells (EndoMT)
   - Circulating fibrocytes

**Targeted Therapies by Pathway:**

*Anti-fibrotic:*
- Nintedanib: VEGF, PDGF, FGF receptor inhibitor
- Pirfenidone: TGF-beta modulator (under study)
- Tocilizumab: IL-6 inhibition (faSScinate trial)

*Immunomodulatory:*
- Mycophenolate: T and B cell suppression
- Cyclophosphamide: Severe ILD, skin
- Rituximab: B cell depletion (case series)
- Abatacept: T cell co-stimulation (under study)

*Vascular:*
- Endothelin receptor antagonists
- Phosphodiesterase-5 inhibitors
- Prostacyclin analogues
- Soluble guanylate cyclase stimulators

**Autologous Stem Cell Transplant:**

*Trials:*
- ASSIST: Superiority over cyclophosphamide
- ASTIS: Improved event-free survival
- SCOT: Improved event-free survival at 54 months

*Indications:*
- Severe diffuse SSc
- Progressive disease on standard therapy
- No severe organ damage (relative)
- Early in disease course preferred

*Risks:*
- Treatment-related mortality 5-10%
- Cardiac screening critical
- Long-term outcomes improving

**Scleroderma Renal Crisis Deep Dive:**

*Pathophysiology:*
- Vascular injury → ischemia → renin release
- Renin-angiotensin activation
- Malignant hypertension
- Thrombotic microangiopathy
- Rapid renal failure

*Risk Factors:*
- Diffuse cutaneous SSc
- Early disease (<4 years)
- Anti-RNA polymerase III
- High-dose corticosteroids
- Tendon friction rubs

*Management:*
- ACE inhibitors: Cornerstone of treatment
- BP target: 20 mmHg reduction per day
- May need additional antihypertensives
- Monitor for hyperkalemia
- Dialysis if needed (may be temporary)
- Continue ACE inhibitor even on dialysis

**Cancer Association:**
- Increased cancer risk in SSc
- Particularly with anti-RNA pol III
- Cancer can trigger scleroderma (paraneoplastic)
- Screen: Age-appropriate + thorough review
- Highest risk: First 3 years after diagnosis`,
      keyTerms: [
        { term: 'EndoMT', definition: 'Endothelial-to-mesenchymal transition; process where endothelial cells transform into fibroblast-like cells contributing to fibrosis' },
        { term: 'CTGF/CCN2', definition: 'Connective tissue growth factor; key mediator downstream of TGF-beta in fibrosis' },
        { term: 'thrombotic microangiopathy', definition: 'Vascular pathology with microthrombi and hemolysis seen in scleroderma renal crisis' },
        { term: 'faSScinate', definition: 'Trial showing tocilizumab trend toward skin improvement in early diffuse SSc' },
        { term: 'tendon friction rubs', definition: 'Palpable rubbing sensation over tendons; marker of severe disease and renal crisis risk' },
      ],
      clinicalNotes: 'Autologous HSCT shows long-term benefit in severe diffuse SSc but carries significant early mortality risk. Anti-RNA pol III antibodies are associated with both renal crisis and synchronous malignancy - cancer screening is mandatory. Tocilizumab shows promise for skin fibrosis. The modified Rodnan skin score typically peaks at 1-2 years in diffuse SSc then may plateau or improve.',
    },
    5: {
      level: 5,
      summary: 'Systemic sclerosis represents a complex interplay of vascular injury, aberrant immunity, and fibrosis mediated by TGF-beta, PDGF, and endothelin pathways, with therapeutic advances targeting specific molecular mechanisms including tyrosine kinase inhibition, IL-6 blockade, and cellular therapies, while precision medicine approaches stratify patients by autoantibody profile and disease phenotype.',
      explanation: `**Precision Medicine Approaches:**

1. **Autoantibody-Guided Management:**

   *Anti-centromere (ACA):*
   - Limited cutaneous phenotype
   - Lower ILD risk
   - Higher PAH risk (isolated)
   - Better overall prognosis
   - Monitor: Annual TTE, DLCO

   *Anti-Scl-70 (Anti-Topo I):*
   - Diffuse cutaneous phenotype
   - High ILD risk
   - Lower isolated PAH
   - Aggressive ILD screening
   - Consider early immunosuppression

   *Anti-RNA Polymerase III:*
   - Rapidly progressive skin
   - High renal crisis risk
   - Cancer association (synchronous)
   - Avoid high-dose steroids
   - Cancer screening mandatory

   *Anti-U11/U12 RNP:*
   - Severe ILD phenotype
   - GI dysmotility
   - Less skin involvement

2. **Molecular Phenotyping:**

   *Gene Expression Signatures:*
   - Inflammatory subset: TGF-beta, interferon
   - Fibroproliferative subset: Proliferation genes
   - Normal-like subset: Better prognosis
   - May predict treatment response

   *Biomarkers:*
   - KL-6: ILD activity
   - SP-D: ILD severity
   - ET-1: Vascular disease
   - CXCL4: Disease activity

3. **Current Clinical Trials:**

   *Anti-fibrotic:*
   - Pirfenidone in SSc-ILD
   - Lenabasum (cannabinoid receptor agonist)
   - Romilkimab (anti-IL-4/IL-13)
   - PRM-151 (pentraxin-2 analog)

   *Immunomodulatory:*
   - Belimumab (anti-BAFF)
   - Rituximab (ongoing trials)
   - JAK inhibitors
   - Anti-CD19 CAR-T

   *Cellular Therapies:*
   - Mesenchymal stem cells
   - Adipose-derived stem cells
   - Optimized HSCT protocols

4. **Treatment Algorithms - 2023 EULAR:**

   *Skin Fibrosis:*
   - MTX for early diffuse (limited evidence)
   - Tocilizumab option
   - HSCT for severe/progressive
   - MMF considered

   *ILD:*
   - Mild/stable: Monitor closely
   - Progressive: MMF first-line (SLS II)
   - Add nintedanib (SENSCIS)
   - Refractory: Cyclophosphamide, rituximab
   - Severe/progressive: HSCT, transplant evaluation

   *PAH:*
   - Risk stratification (ESC/ERS guidelines)
   - Upfront combination therapy
   - ERA + PDE5i or ERA + prostanoid
   - Triple therapy if needed
   - Lung transplant consideration

   *Renal Crisis:*
   - ACE inhibitors immediately
   - Continue even if Cr rises
   - Additional antihypertensives as needed
   - Dialysis bridge - may recover
   - Avoid: ARBs less studied, not preferred

5. **Special Considerations:**

   *SSc-ILD Progression:*
   - Decline in FVC >10% or >5% with DLCO decline
   - HRCT progression
   - Predictors: Anti-Scl-70, extensive disease, elevated KL-6
   - Nintedanib slows decline regardless of baseline treatment

   *Cardiac Involvement:*
   - Often subclinical
   - Myocardial fibrosis
   - Conduction abnormalities
   - Screen with ECG, TTE
   - Cardiac MRI for fibrosis assessment

   *GI Failure:*
   - Intestinal pseudo-obstruction
   - Malnutrition common
   - May need TPN
   - Small bowel transplant rarely

   *Overlap Syndromes:*
   - SSc-myositis overlap
   - SSc-Sjogren's overlap
   - Mixed connective tissue disease
   - Treatment targets predominant features

6. **Outcomes and Prognosis:**

   *Survival Improvement:*
   - Better with ACE inhibitors (renal crisis)
   - Improved PAH therapy
   - Earlier ILD detection
   - 10-year survival: 65-70%

   *Mortality Predictors:*
   - Diffuse cutaneous subtype
   - Extent of skin involvement
   - Cardiac involvement
   - ILD extent >20% on HRCT
   - Reduced DLCO
   - Older age at onset`,
      keyTerms: [
        { term: 'lenabasum', definition: 'Cannabinoid receptor type 2 agonist with anti-inflammatory effects under investigation for SSc' },
        { term: 'romilkimab', definition: 'Bispecific antibody targeting IL-4 and IL-13; anti-fibrotic agent in development' },
        { term: 'KL-6', definition: 'Krebs von den Lungen-6; serum biomarker elevated in ILD activity' },
        { term: 'SENSCIS', definition: 'Trial demonstrating nintedanib slows FVC decline in SSc-ILD' },
        { term: 'SLS II', definition: 'Scleroderma Lung Study II showing mycophenolate equivalent to cyclophosphamide for SSc-ILD' },
      ],
      clinicalNotes: `**Board-Relevant Pearls:**
- Anti-centromere = limited SSc, PAH risk
- Anti-Scl-70 = diffuse SSc, ILD risk
- Anti-RNA pol III = renal crisis, cancer risk
- ACE inhibitors are mandatory in renal crisis - never stop
- High-dose steroids (>15 mg) increase renal crisis risk
- Mycophenolate is first-line for SSc-ILD (SLS II)
- Nintedanib adds benefit in progressive ILD (SENSCIS)
- Screen all patients for ILD (PFTs, HRCT) and PAH (TTE, DLCO)
- Autologous HSCT improves outcomes in severe diffuse SSc
- Nailfold capillaroscopy shows enlarged/dropout capillaries
- Modified Rodnan skin score monitors skin disease activity`,
    },
  },

  media: [
    {
      id: 'scleroderma-hands',
      type: 'image',
      filename: 'scleroderma-sclerodactyly.jpg',
      title: 'Sclerodactyly in Scleroderma',
      description: 'Thickened, tight skin on fingers with flexion contractures',
    },
    {
      id: 'raynauds',
      type: 'image',
      filename: 'raynauds-phenomenon.jpg',
      title: 'Raynaud\'s Phenomenon',
      description: 'Color changes in fingers from vasospasm: white, blue, red phases',
    },
    {
      id: 'nailfold-capillaroscopy',
      type: 'image',
      filename: 'nailfold-capillaroscopy-ssc.jpg',
      title: 'Nailfold Capillaroscopy in SSc',
      description: 'Dilated capillaries and avascular areas characteristic of scleroderma',
    },
  ],
  citations: [
    {
      id: 'denton-2017',
      type: 'article',
      title: 'Systemic sclerosis',
      authors: ['Denton CP', 'Khanna D'],
      source: 'Lancet',
      url: 'https://doi.org/10.1016/S0140-6736(17)30933-9',
    },
    {
      id: 'distler-2019',
      type: 'article',
      title: 'Nintedanib for Systemic Sclerosis-Associated Interstitial Lung Disease',
      authors: ['Distler O', 'Highland KB', 'Gahlemann M', 'et al.'],
      source: 'NEJM',
      url: 'https://doi.org/10.1056/NEJMoa1903076',
    },
  ],
  crossReferences: [
    { targetId: 'condition-systemic-lupus-erythematosus', targetType: 'condition', relationship: 'related', label: 'Systemic Lupus Erythematosus' },
    { targetId: 'condition-rheumatoid-arthritis', targetType: 'condition', relationship: 'related', label: 'Rheumatoid Arthritis' },
    { targetId: 'topic-autoimmune-serology', targetType: 'topic', relationship: 'related', label: 'Autoimmune Serology' },
  ],
  tags: {
    systems: ['integumentary', 'vascular', 'respiratory', 'renal', 'gastrointestinal'],
    topics: ['rheumatology', 'autoimmune disease', 'connective tissue disease'],
    keywords: ['scleroderma', 'systemic sclerosis', 'Raynaud\'s', 'fibrosis', 'ILD', 'PAH'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine'] },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default sclerodermaContent;
