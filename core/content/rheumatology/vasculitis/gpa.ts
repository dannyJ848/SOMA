/**
 * Granulomatosis with Polyangiitis (GPA)
 *
 * ANCA-associated small-vessel vasculitis causing granulomatous inflammation
 * of the respiratory tract and necrotizing glomerulonephritis.
 */

import { EducationalContent } from '../../types';

export const gpaContent: EducationalContent = {
  id: 'rheumatology-gpa',
  type: 'condition',
  name: 'Granulomatosis with Polyangiitis (GPA)',
  nameEs: 'Granulomatosis con Poliangeitis (GPA)',
  alternateNames: ['GPA', 'Wegener Granulomatosis', 'Wegener Disease', 'c-ANCA Vasculitis'],

  levels: {
    1: {
      level: 1,
      summary: 'GPA is a disease where blood vessels become inflamed, mainly affecting the nose, sinuses, lungs, and kidneys. It can cause nosebleeds, cough, and kidney problems if not treated.',
      explanation: `## What Is GPA?

GPA (granulomatosis with polyangiitis) is a type of vasculitis - a disease that causes inflammation (swelling and damage) in blood vessels. It mainly affects small blood vessels in the nose, sinuses, lungs, and kidneys.

## Common Symptoms

**Nose and Sinuses:**
- Chronic sinus infections that don't go away
- Nosebleeds
- Crusting in the nose
- Saddle nose deformity (bridge of nose collapses)

**Lungs:**
- Cough (sometimes with blood)
- Shortness of breath
- Chest pain

**Kidneys:**
- Blood in urine (may not be visible)
- Protein in urine
- Can lead to kidney failure if untreated

**General Symptoms:**
- Fever, fatigue, weight loss
- Joint pain
- Eye redness and pain
- Ear problems, hearing loss
- Skin sores

## How Is It Diagnosed?

- Blood test called ANCA (anti-neutrophil cytoplasmic antibodies)
- Biopsy of affected tissue
- CT scan of lungs and sinuses

## Treatment

- Medicines to calm the immune system (steroids, rituximab, cyclophosphamide)
- Treatment is very effective when started early
- Regular monitoring of kidneys and blood counts
- Long-term maintenance medicine to prevent return`,

      keyTerms: [
        { term: 'Vasculitis', definition: 'Inflammation and damage to blood vessels' },
        { term: 'ANCA', definition: 'Antibodies that attack white blood cells and cause vasculitis' },
        { term: 'Granuloma', definition: 'A cluster of immune cells that forms when the body tries to wall off something it sees as foreign' },
        { term: 'Saddle nose', definition: 'Collapse of the nasal bridge due to cartilage destruction' },
      ],
      analogies: [
        'Vasculitis is like the immune system attacking the pipes (blood vessels) instead of protecting them.',
        'A granuloma is like the body building a tiny wall around tissue it is fighting against.',
      ],
      examples: [
        'Person with chronic sinus problems, bloody nose, and blood in urine',
        'Someone with cough, lung nodules on X-ray, and kidney problems',
        'Patient with red, painful eyes and hearing loss along with sinus crusting',
      ],
      patientCounselingPoints: [
        'GPA is treatable - most people go into remission with proper medicine.',
        'Take medicines as prescribed even when feeling well to prevent relapse.',
        'Report any new symptoms immediately (especially blood in urine).',
        'Regular blood and urine tests are essential for monitoring.',
      ],
    },

    2: {
      level: 2,
      summary: 'GPA is an ANCA-associated vasculitis characterized by granulomatous inflammation of the upper and lower respiratory tract and necrotizing glomerulonephritis. c-ANCA/PR3 is the classic serologic marker.',
      explanation: `## Classification

**ANCA-Associated Vasculitis (AAV) Triad:**
- GPA: Granulomatous, upper/lower respiratory tract + kidneys
- MPA (Microscopic Polyangiitis): No granulomas, renal + pulmonary capillaritis
- EGPA (Eosinophilic GPA): Asthma, eosinophilia, granulomas

**Disease Subtypes:**
- Generalized GPA: Organ-threatening (renal, pulmonary hemorrhage)
- Limited GPA: Upper airway only (no renal involvement)
- Severe GPA: Life-threatening organ involvement

## Clinical Features by Organ

**Upper Airway (90%):**
- Chronic sinusitis (most common initial presentation)
- Nasal crusting, epistaxis, septal perforation
- Saddle nose deformity (cartilage destruction)
- Subglottic stenosis (life-threatening airway narrowing)
- Otitis media (serous or destructive)

**Lower Airway (85%):**
- Pulmonary nodules (may cavitate) on CT
- Diffuse alveolar hemorrhage (DAH): Hemoptysis, bilateral infiltrates
- Tracheal/bronchial stenosis

**Renal (80%):**
- Rapidly progressive glomerulonephritis (RPGN)
- Pauci-immune crescentic GN on biopsy
- Active sediment: RBC casts, dysmorphic RBCs
- Can progress to dialysis-dependent renal failure

**Eyes (50%):**
- Scleritis, episcleritis
- Orbital pseudotumor (retro-orbital granuloma)
- Proptosis, diplopia

**Other:**
- Mononeuritis multiplex
- Palpable purpura
- Arthritis (non-deforming)

## Diagnosis

**Serology:**
- c-ANCA (cytoplasmic pattern): 80-90% of generalized GPA
- PR3-ANCA (proteinase 3): More specific than pattern alone
- p-ANCA/MPO can occur in ~10%

**Biopsy:**
- Granulomatous inflammation with necrosis
- Vasculitis of small to medium vessels
- Renal biopsy: Pauci-immune crescentic GN (few immune deposits)

**Imaging:**
- CT chest: Nodules (may cavitate), ground-glass opacities
- CT sinuses: Mucosal thickening, bone destruction`,

      keyTerms: [
        { term: 'c-ANCA', definition: 'Cytoplasmic ANCA pattern seen on immunofluorescence, associated with PR3 antibody and GPA' },
        { term: 'PR3', definition: 'Proteinase 3 - the target antigen of c-ANCA in GPA' },
        { term: 'Pauci-immune', definition: 'Few or no immune deposits on biopsy - characteristic of ANCA vasculitis' },
        { term: 'Crescentic glomerulonephritis', definition: 'Severe kidney inflammation with crescent-shaped cell accumulations in glomeruli' },
        { term: 'Diffuse alveolar hemorrhage', definition: 'Bleeding into the lungs causing hemoptysis and respiratory failure' },
      ],
      analogies: [
        'c-ANCA/PR3 is like a name tag that identifies GPA among the ANCA vasculitides.',
        'Pauci-immune means the kidney damage is not from antibody deposits but from the vasculitis itself.',
      ],
      examples: [
        'Patient with sinusitis, lung nodules, and hematuria - c-ANCA/PR3 positive: GPA',
        'Rapid kidney failure with active sediment and crescents on biopsy in ANCA+ patient',
        'Young woman with subglottic stenosis and saddle nose - limited GPA',
      ],
      clinicalNotes: 'GPA is a medical emergency when presenting with RPGN or DAH. Start treatment immediately, even before biopsy results. PR3-ANCA titer may correlate with disease activity but should not be used alone to guide treatment changes. Biopsy is gold standard for diagnosis when possible. Always check urine sediment in any suspected vasculitis.',
    },

    3: {
      level: 3,
      summary: 'GPA treatment follows a remission-induction/maintenance paradigm. Rituximab or cyclophosphamide for induction, then rituximab or azathioprine for maintenance. Plasma exchange for severe renal disease. Avacopan (C5a inhibitor) is a steroid-sparing option.',
      explanation: `## Treatment: Remission Induction

**Generalized/Severe GPA:**
- Glucocorticoids: Pulse methylprednisolone 500-1000mg x3 days, then prednisone 1mg/kg taper
- PLUS either:
  - Rituximab 375mg/m2 weekly x4 (RAVE trial: non-inferior to CYC, superior in relapsing disease)
  - Cyclophosphamide IV pulse monthly x6 or oral daily (CYC-NOVAS, CYCLOPS)
- Rituximab preferred for: Relapsing disease, fertility concerns, CYC contraindication

**Severe Renal Disease:**
- Plasma exchange (PEXIVAS trial: No benefit for long-term renal survival)
  - Still considered for DAH with respiratory failure
  - Pulse methylprednisolone may be equally effective
- Reduced-dose glucocorticoid regimen non-inferior (PEXIVAS)

**Limited GPA (Upper Airway Only):**
- Methotrexate + glucocorticoids (NORAM trial)
- Trimethoprim-sulfamethoxazole for nasal disease (adjunctive, reduces relapse)

**Avacopan (Complement C5a Receptor Inhibitor):**
- ADVOCATE trial: Non-inferior to prednisone taper for remission
- Sustained remission at 52 weeks: Superior to prednisone
- Allows steroid-free or steroid-reduced regimen
- FDA approved for AAV

## Treatment: Maintenance

**After Remission Achieved:**
- Rituximab 500mg q6 months (MAINRITSAN: Superior to azathioprine)
- OR Azathioprine 2mg/kg daily
- OR Methotrexate 20-25mg weekly (if CrCl >30)
- Taper glucocorticoids (goal: off by 6 months if possible)
- Duration: Minimum 24 months (longer in PR3+, relapsing disease)

**Relapse Prevention:**
- PR3-ANCA positive: Higher relapse risk than MPO
- Rising ANCA titer: May predict relapse (treat preemptively? Controversial)
- Rituximab maintenance reduces relapse to <5% at 2 years (vs 29% with AZA)

## Complications of Treatment

**Cyclophosphamide:**
- Infections (PJP prophylaxis with TMP-SMX)
- Hemorrhagic cystitis (mesna, hydration)
- Bladder cancer (cumulative dose-dependent)
- Gonadal toxicity (egg/sperm preservation before treatment)
- Myelodysplasia/leukemia (late)

**Rituximab:**
- Infusion reactions
- Hypogammaglobulinemia (check IgG levels)
- Late-onset neutropenia
- PML (very rare)
- Hepatitis B reactivation (screen before)

## Monitoring

- Urinalysis and serum creatinine regularly
- ANCA titers (PR3 more useful than MPO for monitoring)
- CBC (neutropenia from treatment)
- IgG levels (rituximab-associated hypogammaglobulinemia)
- BVAS (Birmingham Vasculitis Activity Score) for disease activity`,

      keyTerms: [
        { term: 'RAVE trial', definition: 'Landmark trial showing rituximab non-inferior to cyclophosphamide for AAV induction, superior in relapsing disease' },
        { term: 'Avacopan', definition: 'Oral C5a receptor inhibitor for AAV enabling steroid-sparing treatment' },
        { term: 'MAINRITSAN', definition: 'Trial demonstrating rituximab maintenance superior to azathioprine in preventing AAV relapse' },
        { term: 'BVAS', definition: 'Birmingham Vasculitis Activity Score - standardized measure of vasculitis disease activity' },
      ],
      analogies: [
        'Induction-maintenance treatment is like putting out a fire (induction) then keeping watch to prevent reignition (maintenance).',
        'Avacopan blocking C5a is like cutting the phone line that calls in inflammatory reinforcements.',
      ],
      examples: [
        'New GPA with RPGN treated with pulse steroids + rituximab per RAVE protocol',
        'Relapsing GPA on azathioprine switched to rituximab maintenance per MAINRITSAN',
        'Avacopan added to rituximab induction to allow steroid-free remission per ADVOCATE',
      ],
      clinicalNotes: 'PEXIVAS changed practice: Plasma exchange no longer recommended routinely for severe renal AAV (eGFR <50). Reduced-dose steroids are non-inferior. Rituximab has largely replaced cyclophosphamide as preferred induction agent, especially for relapsing disease and patients with fertility concerns. PR3+ patients have higher relapse rates and may need longer maintenance. Always give PJP prophylaxis during induction.',
    },

    4: {
      level: 4,
      summary: 'GPA pathogenesis involves PR3-ANCA priming of neutrophils, NETosis, complement activation (alternative pathway), and granuloma formation. ANCA pathogenicity is demonstrated by in vitro and animal models. Complement C5a amplifies neutrophil activation.',
      explanation: `## Pathogenesis

**ANCA-Neutrophil Interaction:**
1. Priming: TNF-alpha/IL-1 from infection translocates PR3 to neutrophil surface
2. c-ANCA (anti-PR3) binds surface PR3 and Fc receptors simultaneously
3. Neutrophil activation: Respiratory burst, degranulation, cytokine release
4. Adherence to endothelium via beta2-integrins
5. Transmigration and perivascular inflammation
6. NETosis: Release of PR3-containing NETs amplifies ANCA exposure

**Complement Role (Alternative Pathway):**
- C5a generated by alternative pathway activation
- C5a primes neutrophils (upregulates PR3 surface expression)
- Amplification loop: ANCA-activated neutrophils generate more C5a
- C5a also recruits more neutrophils to sites of injury
- This is the rationale for avacopan (C5aR inhibitor)

**Granuloma Formation:**
- Poorly understood compared to vasculitis component
- Th1/Th17 cytokines drive granuloma formation
- Giant cells, epithelioid cells, central necrosis
- May represent initial immune response to unknown environmental trigger
- PR3 expression within granulomas
- Upper airway: Destructive granulomas with cartilage/bone involvement

**Epitope Spreading:**
- Initial immune response may target single PR3 epitope
- Chronic disease: Response spreads to multiple epitopes
- May explain treatment resistance and relapse

## PR3 vs MPO: Different Diseases?

**PR3-ANCA (GPA phenotype):**
- More relapse-prone (50% at 5 years vs 20% for MPO)
- Upper airway involvement common
- Granulomatous inflammation
- ANCA titer often correlates with activity
- Genetic associations: HLA-DP, SERPINA1 (alpha-1 antitrypsin - endogenous PR3 inhibitor)

**MPO-ANCA (MPA phenotype):**
- More chronic, less relapsing
- Renal-predominant
- More fibrotic on renal biopsy
- ANCA titer less useful for monitoring
- Genetic associations: HLA-DQ

## Renal Pathology Classification

**Berden Classification (2010):**
- Focal: >=50% normal glomeruli (best prognosis)
- Crescentic: >=50% crescents (intermediate)
- Mixed: <50% normal, <50% crescentic, <50% sclerotic
- Sclerotic: >=50% globally sclerosed (worst prognosis, often dialysis-dependent)

**Prognostic Significance:**
- Focal class: 93% renal survival at 5 years
- Sclerotic class: 50% renal survival at 5 years
- Class guides treatment intensity decisions`,

      keyTerms: [
        { term: 'Neutrophil priming', definition: 'Translocation of PR3 to cell surface by cytokines, making neutrophils susceptible to ANCA activation' },
        { term: 'Alternative complement pathway', definition: 'Complement activation without antibodies that generates C5a and amplifies ANCA-mediated inflammation' },
        { term: 'Berden classification', definition: 'Histopathologic classification of ANCA GN based on proportion of normal, crescentic, and sclerotic glomeruli' },
        { term: 'Epitope spreading', definition: 'Expansion of immune response to target additional epitopes on PR3 over time' },
      ],
      analogies: [
        'Neutrophil priming is like taking the safety off a gun - the cytokine unlocks PR3 on the surface, and ANCA pulls the trigger.',
        'The C5a amplification loop is like a microphone feeding back into its own speaker, escalating the inflammatory signal.',
      ],
      examples: [
        'PR3+ patient with focal class on renal biopsy has 93% renal survival - standard induction sufficient',
        'PR3+ GPA patient relapses at year 3 while on azathioprine - switched to rituximab maintenance',
        'Avacopan prescribed to break C5a amplification loop and reduce steroid dependence',
      ],
      clinicalNotes: 'PR3 vs MPO ANCA distinction is increasingly recognized as defining separate diseases rather than subtypes. PR3-ANCA patients need longer maintenance and closer monitoring for relapse. The Berden classification provides important prognostic information - sclerotic class patients are unlikely to recover renal function. ANCA pathogenicity is supported by in vitro neutrophil activation studies and MPO-ANCA transfer studies in animal models.',
    },

    5: {
      level: 5,
      summary: 'Current GPA research explores complement-targeted therapy (avacopan paradigm shift), biomarker-guided tapering, obinutuzumab vs rituximab, and NET-targeted therapy. Long-term outcomes show persistent morbidity from treatment toxicity and damage accrual.',
      explanation: `## Evolving Treatment Paradigms

**Steroid Minimization:**
- PEXIVAS: Reduced-dose steroids non-inferior to standard dose
- ADVOCATE: Avacopan as steroid replacement
- LoVAS: Low-dose glucocorticoid AAV induction feasible with rituximab
- Trend: Minimizing cumulative steroid exposure to reduce toxicity (diabetes, infections, osteoporosis, cataracts)

**Rituximab Optimization:**
- RITAZAREM: Fixed-schedule rituximab post-relapse superior to AZA
- Extended maintenance: Some centers use rituximab >2 years for PR3+
- Biomarker-guided: Retreatment based on B-cell reconstitution or ANCA rise
- CD19 vs CD20 monitoring to predict relapse timing

**Obinutuzumab (Type II Anti-CD20):**
- More potent B-cell depletion than rituximab
- ANCA-specific B cells may be more susceptible
- Phase 2 trial data awaited
- Rationale: More complete depletion reduces relapse

**Novel Targets:**
- NET-targeted therapy: DNase, PAD4 inhibitors (preclinical)
  - NETs are central to PR3 exposure and endothelial damage
  - Breaking NETs could interrupt pathogenic cycle
- Telitacicept (anti-BAFF/APRIL): B-cell survival factor blockade
- BTK inhibitors: Block B-cell receptor signaling
- PI3K-delta inhibitors: Targeting B-cell activation

## Long-Term Outcomes and Damage

**Mortality:**
- 5-year survival: 75-85% (improved from 50% pre-rituximab era)
- Leading causes: Infections (treatment-related), cardiovascular disease, malignancy
- Standardized mortality ratio: 2.6x general population

**Damage Accrual (VDI - Vasculitis Damage Index):**
- >95% of patients develop some permanent damage by 5 years
- Common: CKD, peripheral neuropathy, hearing loss
- Nasal/sinus damage, subglottic stenosis (difficult to treat)
- Treatment-related: Osteoporosis, cataracts, diabetes, malignancy

**Renal Outcomes:**
- 20-25% reach ESRD within 5 years despite treatment
- PR3-ANCA patients: Better initial renal response but higher relapse risk
- MPO-ANCA patients: More fibrosis at diagnosis, worse long-term renal prognosis
- Renal transplant: Feasible, low relapse rate on maintenance immunosuppression

## Biomarkers and Precision Medicine

**ANCA Monitoring:**
- PR3-ANCA: Serial monitoring has clinical utility (rising titer predicts relapse in some studies)
- MPO-ANCA: Less useful for relapse prediction
- Controversy: Preemptive treatment based on rising ANCA alone (REMAIN study pending)

**Urinary Biomarkers:**
- MCP-1 (monocyte chemoattractant protein-1): Active renal vasculitis
- Urinary soluble CD163: Macrophage activation in active GN
- May detect subclinical renal relapse before serum creatinine rises

**Transcriptomic Signatures:**
- Whole blood gene expression predicting relapse risk
- CD8+ T-cell exhaustion signature associated with stable remission
- Future: Personalizing maintenance duration based on immune profile`,

      keyTerms: [
        { term: 'ADVOCATE trial', definition: 'Landmark trial showing avacopan enables steroid-sparing remission induction in AAV' },
        { term: 'VDI', definition: 'Vasculitis Damage Index measuring irreversible organ damage from disease and treatment' },
        { term: 'LoVAS', definition: 'Trial demonstrating feasibility of low-dose glucocorticoid induction with rituximab in AAV' },
        { term: 'Urinary sCD163', definition: 'Urinary biomarker reflecting macrophage activation in active renal vasculitis' },
      ],
      analogies: [
        'Avacopan replacing steroids is like swapping a sledgehammer (steroids) for a scalpel (targeted C5a blockade) to control inflammation.',
        'Biomarker-guided maintenance is like adjusting fire suppression based on smoke detector readings rather than a fixed timer.',
      ],
      examples: [
        'PR3+ GPA patient on avacopan + rituximab achieves steroid-free remission per ADVOCATE protocol',
        'Rising urinary sCD163 detected subclinical renal relapse before creatinine rose',
        'Extended rituximab maintenance for PR3+ patient with prior relapses based on RITAZAREM data',
      ],
      clinicalNotes: 'The avacopan paradigm shift enables steroid-sparing treatment for the first time in AAV. However, cost is significant and long-term data are limited. Steroid minimization should be a priority given that treatment toxicity causes as much damage as the disease itself. PR3-ANCA patients benefit from longer maintenance (likely >4 years). Urinary biomarkers are promising but not yet validated for clinical use. The VDI should be tracked longitudinally to quantify damage accrual and guide treatment intensity.',
    },
  },

  media: [],
  citations: [
    { id: 'cite-rave', type: 'article', title: 'Rituximab versus Cyclophosphamide for ANCA-Associated Vasculitis (RAVE)', source: 'NEJM 2010' },
    { id: 'cite-advocate', type: 'article', title: 'Avacopan for ANCA-Associated Vasculitis (ADVOCATE)', source: 'NEJM 2021' },
    { id: 'cite-pexivas', type: 'article', title: 'Plasma Exchange and Glucocorticoids for AAV (PEXIVAS)', source: 'NEJM 2020' },
  ],
  crossReferences: [
    { targetId: 'rheumatology-pan', targetType: 'condition', relationship: 'sibling', label: 'Polyarteritis Nodosa' },
    { targetId: 'rheumatology-autoimmune-diseases', targetType: 'topic', relationship: 'parent', label: 'Autoimmune Diseases' },
    { targetId: 'nephrology-glomerulonephritis', targetType: 'topic', relationship: 'related', label: 'Glomerulonephritis' },
  ],
  tags: {
    topics: ['rheumatology', 'vasculitis', 'ANCA', 'GPA', 'glomerulonephritis', 'autoimmune'],
    systems: ['musculoskeletal', 'immune', 'renal', 'respiratory'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['rheumatology', 'medicine', 'nephrology'] },
  },

  createdAt: '2025-01-30',
  updatedAt: '2025-01-30',
  version: 1,
  status: 'published',
};
