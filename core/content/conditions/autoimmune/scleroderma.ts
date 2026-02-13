/**
 * Scleroderma/Systemic Sclerosis - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const sclerodermaContent: EducationalContent = {
  id: 'condition-systemic-sclerosis',
  type: 'condition',
  name: 'Systemic Sclerosis',
  nameEs: 'Esclerosis Sistémica',
  alternateNames: ['Scleroderma', 'SSc', 'Progressive Systemic Sclerosis'],
  hpoId: 'HP:0002907',

  levels: {
    1: {
      level: 1,
      summary: 'Scleroderma, also called systemic sclerosis, is an autoimmune disease that causes hardening and tightening of the skin and can affect internal organs like the lungs, heart, and kidneys.',
      explanation: `In scleroderma, your body produces too much collagen, causing thickening and hardening of tissues. This primarily affects the skin but can also involve internal organs.

**Types of scleroderma:**
- Limited: Mainly affects skin on hands, face, feet
- Diffuse: Affects larger skin areas and more organs

**Common symptoms:**
- Thick, hardened skin
- Tight skin on fingers
- Fingers turning color in cold (Raynaud phenomenon)
- Acid reflux
- Shortness of breath
- Joint pain and stiffness

**Raynaud phenomenon:**
- Fingers/toes turn white, then blue, then red
- Triggered by cold or stress
- Can cause ulcers or sores on fingertips

**Organ complications:**
- Lungs: Scarring (fibrosis), high blood pressure
- Heart: Weakening, rhythm problems
- Kidneys: Kidney crisis (dangerous if untreated)
- Digestive: Acid reflux, swallowing difficulty

**Treatment focuses on:**
- Managing specific symptoms
- Protecting organs from damage
- Medications for blood pressure
- Treating reflux
- Skin care and physical therapy`,
      keyTerms: [
        { term: 'Raynaud phenomenon', definition: 'Color changes in fingers/toes in response to cold or stress; white-blue-red sequence' },
        { term: 'fibrosis', definition: 'Thickening and scarring of tissue from excess collagen' },
        { term: 'collagen', definition: 'Protein that gives skin and tissues structure; produced in excess in scleroderma' },
        { term: 'reflux', definition: 'Stomach acid backing up into the esophagus; common in scleroderma' },
      ],
      analogies: [
        'Scleroderma is like your body producing too much "building material" (collagen) that hardens and thickens tissues like scar tissue.',
        'Raynaud phenomenon is like your blood vessels overreacting to cold by clamping down too tight.',
      ],
      examples: [
        'A 45-year-old woman notices her skin tightening on her fingers and face, along with heartburn and cold-triggered color changes in her fingers.',
        'Someone develops sores on their fingertips that don\'t heal well because of poor blood flow.',
        'A patient has increasing shortness of breath that requires lung testing to check for scarring.',
      ],
      patientCounselingPoints: [
        'Keep hands and feet warm - wear gloves in cold weather',
        'Quit smoking - it worsens Raynaud and lung problems',
        'Use sunscreen daily to protect your skin',
        'Exercise regularly but listen to your body',
        'Report any new symptoms like worsening shortness of breath or high blood pressure',
      ],
    },
    2: {
      level: 2,
      summary: 'Systemic sclerosis is characterized by fibrosis, vascular dysfunction, and autoantibody production, with limited cutaneous (lcSSc) and diffuse cutaneous (dcSSc) subtypes determining organ involvement and prognosis.',
      explanation: `## Classification

**Limited Cutaneous SSc (lcSSc):**
- Skin thickening distal to elbows/knees
- Face involvement common
- CREST syndrome subset
- Better prognosis
- Late pulmonary hypertension

**Diffuse Cutaneous SSc (dcSSc):**
- Skin thickening proximal to elbows/knees
- Trunk involvement
- Early internal organ involvement
- Worse prognosis
- Early interstitial lung disease

**CREST Syndrome:**
- **C**alcinosis: Calcium deposits in skin
- **R**aynaud phenomenon
- **E**sophageal dysmotility: Reflux, dysphagia
- **S**clerodactyly: Tight, thick skin on fingers
- **T**elangiectasias: Red spots on skin

## Clinical Manifestations

**Vascular:**
- Raynaud phenomenon (95%): Often presenting symptom
- Digital ulcers
- Pulmonary arterial hypertension
- Renal vascular crisis

**Skin:**
- Sclerodactyly: Skin tightening on fingers
- Salt-and-pepper appearance: Hypopigmentation + hyperpigmentation
- Telangiectasias
- Calcinosis (limited SSc)

**Musculoskeletal:**
- Arthralgias, myalgias
- Tendon friction rubs (dcSSc)
- Muscle weakness (myositis overlap)

**Gastrointestinal:**
- GERD (80%): Lower esophageal sphincter dysfunction
- Dysphagia: Esophageal dysmotility
- Small bowel: Bacterial overgrowth, pseudo-obstruction
- Constipation/diarrhea

**Pulmonary:**
- Interstitial lung disease (40-70%)
- Pulmonary hypertension (15-30%)
- Leading cause of death

**Cardiac:**
- Myocardial fibrosis
- Conduction abnormalities
- Pericardial effusion

**Renal:**
- Scleroderma renal crisis
- Malignant hypertension
- More common in dcSSc, early disease

## Autoantibodies

| Antibody | Subset | Associations |
|----------|--------|--------------|
| Anti-centromere | Limited (70%) | PAH, CREST, better survival |
| Anti-Scl-70 (topo I) | Diffuse (30-40%) | ILD, worse prognosis |
| Anti-RNA pol III | Diffuse (10-20%) | Renal crisis, cancer association |

## Diagnostic Approach
- ANA positive (95%): Pattern guides antibody testing
- Nailfold capillaroscopy: Microvascular changes
- PFTs with DLCO: Screen for lung involvement
- Echocardiogram: Screen for PAH
- High-resolution CT: ILD assessment`,
      keyTerms: [
        { term: 'sclerodactyly', definition: 'Thickening and tightening of skin on fingers, causing limited mobility' },
        { term: 'telangiectasia', definition: 'Dilated small blood vessels causing red spots on skin' },
        { term: 'calcinosis', definition: 'Calcium deposits in soft tissues, especially fingers' },
        { term: 'CREST', definition: 'Subset of limited scleroderma with Calcinosis, Raynaud, Esophageal dysmotility, Sclerodactyly, Telangiectasia' },
        { term: 'anti-Scl-70', definition: 'Antibody to topoisomerase I; associated with diffuse SSc and interstitial lung disease' },
      ],
      analogies: [
        'Nailfold capillaroscopy is like looking at the "treetops" of the circulatory system - the tiny capillaries show early disease.',
      ],
      examples: [
        'Anti-centromere positive patient with CREST symptoms and skin limited to hands has limited cutaneous SSc.',
        'A patient with rapid skin thickening extending to arms, anti-Scl-70 positive, needs early lung evaluation for ILD.',
      ],
    },
    3: {
      level: 3,
      summary: 'SSc pathogenesis involves endothelial injury, fibroblast activation, and autoimmunity leading to fibrosis and vascular dysfunction, with organ-specific complications requiring tailored management strategies.',
      explanation: `## Pathophysiology

**Triad of Pathogenesis:**
1. **Vascular injury:** Endothelial activation, apoptosis, intimal proliferation
2. **Autoimmunity:** T-cell activation, autoantibody production
3. **Fibrosis:** Fibroblast-to-myofibroblast conversion, collagen overproduction

**Key Mediators:**
- TGF-beta: Profibrotic cytokine
- Endothelin-1: Vasoconstriction, fibrosis
- PDGF: Fibroblast proliferation
- ROS: Oxidative stress

**Genetic Factors:**
- HLA associations
- Non-HLA genes (IRF5, STAT4)
- Gene-environment interactions

**Environmental Triggers:**
- Silica, solvents
- Epoxy resins
- Certain chemotherapy drugs

## Classification Criteria (2013 ACR/EULAR)

**Score-based system:**
- Skin thickening (fingers to MCP): 9 pts
- Nailfold capillary changes: 2 pts
- Raynaud phenomenon: 3 pts
- SSc-related antibodies: 3 pts
- PFT abnormalities: 2 pts
- Digital ulcers: 2 pts
- Telangiectasia: 2 pts
- SSc-specific antibodies: 3 pts

Score ≥9 = definite SSc

## Organ-Specific Manifestations

**Pulmonary:**
- **Interstitial Lung Disease:**
  - NSIP pattern most common
  - Ground glass opacities → fibrosis
  - Declining FVC/DLCO signals progression
  - Screen with HRCT, PFTs every 6-12 months

- **Pulmonary Arterial Hypertension:**
  - Isolated PAH (limited SSc)
  - PH-ILD (mixed picture)
  - Screen with echocardiogram annually
  - Right heart cath for confirmation

**Renal:**
- **Scleroderma Renal Crisis:**
  - Malignant hypertension
  - Rapid kidney failure
  - Microangiopathic hemolytic anemia
  - Triggered by high-dose steroids, pregnancy
  - TREAT WITH ACE INHIBITORS IMMEDIATELY

**Cardiac:**
- Myocardial fibrosis
- Diastolic dysfunction
- Conduction system disease
- Pericardial effusion
- Screen with ECG, echocardiogram

**Gastrointestinal:**
- Esophageal dysmotility (80%)
- Lower esophageal sphincter incompetence
- Gastric antral vascular ectasia (GAVE): "watermelon stomach"
- Small intestinal pseudo-obstruction
- Bacterial overgrowth
- Fecal incontinence

**Musculoskeletal:**
- Non-erosive arthritis
- Tendon friction rubs (dcSSc, poor prognosis)
- Myositis (anti-PM-Scl overlap)
- Muscle atrophy

## Treatment Strategies

**Skin:**
- Methotrexate: Early disease, limited SSc
- Mycophenolate: Moderate-severe skin
- Autologous stem cell transplant: Severe dcSSc

**Lung:**
- ILD: Mycophenolate first-line
- ILD: Cyclophosphamide alternative
- ILD: Nintedanib (anti-fibrotic)
- PAH: PAH-specific therapies (bosentan, ambrisentan, etc.)

**Renal Crisis:**
- ACE inhibitor immediately
- Target MAP <90 mmHg
- Dialysis if needed (may recover)

**Raynaud phenomenon:**
- CCBs: Nifedipine, amlodipine
- PDE5 inhibitors: Sildenafil
- Prostacyclin analogs for severe ulcers
- Avoid beta-blockers

**GERD:**
- PPIs (high dose)
- H2 blockers
- Promotility agents`,
      keyTerms: [
        { term: 'NSIP', definition: 'Nonspecific interstitial pneumonia; most common ILD pattern in SSc' },
        { term: 'GAVE', definition: 'Gastric antral vascular ectasia; "watermelon stomach" with vascular streaks causing bleeding' },
        { term: 'tendon friction rub', definition: 'Creaking sensation on tendon movement; indicates tendon inflammation and poor prognosis' },
        { term: 'nailfold capillaroscopy', definition: 'Microscopic examination of capillaries at nailfold; detects early microvascular disease' },
      ],
      clinicalNotes: 'Scleroderma renal crisis: Start ACE inhibitor immediately regardless of blood pressure, titrate aggressively. Avoid high-dose steroids in diffuse SSc (triggers renal crisis). Screen for PAH annually with echo. Mycophenolate is first-line for SSc-ILD.',
    },
    4: {
      level: 4,
      summary: 'Advanced SSc management requires organ-specific protocols, prognostic stratification, early intervention strategies, and multidisciplinary care addressing the complex interplay between fibrosis, vascular dysfunction, and autoimmunity.',
      explanation: `## Prognostic Stratification

**Poor Prognosis Indicators:**
- Diffuse cutaneous subtype
- Anti-Scl-70, anti-RNA pol III antibodies
- Early and rapid skin progression
- Tendon friction rubs
- Significant ILD (FVC <70%)
- Pulmonary hypertension
- Cardiac involvement
- Older age at onset
- Male sex

**Better Prognosis:**
- Limited cutaneous subtype
- Anti-centromere antibodies
- Late-onset PAH (treatable)

## Pulmonary Hypertension Management

**Screening Protocol:**
- Annual echocardiogram
- DLCO trends (disproportionate drop = PH)
- Right heart cath for confirmation
- mPAP >20 mmHg = PH (new definition)
- PVR >3 WU = precapillary PH

**PAH-Specific Therapy:**
- Endothelin receptor antagonists: Bosentan, ambrisentan, macitentan
- PDE5 inhibitors: Sildenafil, tadalafil
- Soluble guanylate cyclase stimulator: Riociguat
- Prostacyclin pathway: Epoprostenol, treprostinil, selexipag
- Combination therapy for severe disease

**ILD Management:**
- Mycophenolate 2-3 g/day (first-line)
- Cyclophosphamide (alternative)
- Nintedanib: Anti-fibrotic, slows decline
- Tocilizumab: For inflammatory component
- Autologous stem cell transplant: Select dcSSc

## Scleroderma Renal Crisis

**Risk Factors:**
- Diffuse cutaneous SSc
- Early disease (<3 years)
- Anti-RNA pol III antibodies
- Rapid skin progression
- High-dose glucocorticoids
- Pregnancy

**Management:**
- ACE inhibitor: Start immediately, titrate aggressively
- Target BP: <140/80, MAP <90
- Add other antihypertensives as needed
- Dialysis if needed (may recover)
- Avoid ACE inhibitors in established renal failure (bilateral renal artery stenosis)

## Difficult Skin Disease

**Severe Skin Disease:**
- Mycophenolate mofetil
- Methotrexate (limited disease)
- Autologous stem cell transplant (severe dcSSc)
- Rituximab (investigational)
- Tocilizumab (investigational)

**Calcinosus Treatment:**
- Calcium channel blockers
- Diltiazem
- Surgical excision for symptomatic deposits
- IVIG (reports of benefit)
- Bisphosphonates (investigational)

## Refractory Raynaud/Digital Ulcers

**Medical Therapy:**
- CCBs: Nifedipine ER, amlodipine
- PDE5 inhibitors: Sildenafil
- Prostacyclin analogs: Iloprost IV, epoprostenol
- Bosentan (prevents new ulcers)
- Statins (may help endothelial function)

**Non-pharmacologic:**
- Keep warm (critical)
- Avoid vasoconstrictors (nicotine, caffeine, decongestants, beta-blockers)
- Biofeedback
- Local wound care for ulcers

## Gastrointestinal Management

**GERD:**
- High-dose PPIs
- Head of bed elevation
- Avoid late meals
- Consider fundoplication (careful selection)

**Dysmotility:**
- Prokinetics: Metoclopramide, erythromycin
- Small bowel: Antibiotics for bacterial overgrowth
- Constipation: Polyethylene glycol
- Diarrhea: Loperamide, codeine

**GAVE:**
- Ablation therapy (APC)
- Iron replacement
- Transfusion if needed`,
      keyTerms: [
        { term: 'autologous stem cell transplant', definition: 'High-dose immunosuppression followed by patient\'s own stem cell rescue; for severe dcSSc' },
        { term: 'GAVE', definition: 'Gastric antral vascular ectasia; treated with argon plasma coagulation' },
        { term: 'mPAP', definition: 'Mean pulmonary arterial pressure; >20 mmHg defines pulmonary hypertension' },
        { term: 'PVR', definition: 'Pulmonary vascular resistance; >3 Wood units confirms precapillary PH' },
      ],
      clinicalNotes: 'Board pearl: ACE inhibitors are the treatment of choice for scleroderma renal crisis - start immediately, titrate aggressively. Avoid high-dose steroids in diffuse SSc. Mycophenolate is first-line for SSc-ILD. Annual echo screening for PAH in limited SSc.',
    },
    5: {
      level: 5,
      summary: 'Contemporary SSc care incorporates novel antifibrotic therapies, precision medicine approaches, stem cell transplantation, targeted biologic agents, and evidence-based protocols for organ-specific complications while optimizing long-term outcomes.',
      explanation: `## Precision Medicine in SSc

**Gene Expression Profiling:**
- Intrinsic subsets: Normal-like, inflammatory, fibroproliferative
- Predicts treatment response and progression
- Guides personalized therapy

**Biomarker-Guided Therapy:**
- Serum biomarkers: CXCL4 predicts PAH severity
- Genetic: Anti-RNA pol III → cancer screening
- Proteomic signatures for ILD progression

## Novel Therapeutic Agents

**Antifibrotic Therapies:**
- Nintedanib: Approved for SSc-ILD, slows FVC decline
- Pirfenidone: Alternative antifibrotic
- Tocilizumab: IL-6 inhibition (limited skin benefit)
- Abatacept: T-cell costimulation blockade

**Targeted Biologics:**
- Rituximab: B-cell depletion (skin, ILD benefit)
- Belimumab: Anti-BLyS (investigational)
- Fresolimumab: Anti-TGF-beta (investigational)

**Vascular Therapies:**
- Selexipag: Oral prostacyclin receptor agonist
- Riociguat: sGC stimulator
- Macitentan: Newer ERA

**Tyrosine Kinase Inhibitors:**
- Nintedanib: PDGF, FGF, VEGF inhibition
- Dasatinib: Investigational

## Autologous Stem Cell Transplant

**SCOT Trial:**
- ASCT vs cyclophosphamide in severe dcSSc
- Superior event-free survival
- Significant treatment-related mortality risk
- Patient selection critical

**Indications:**
- Severe dcSSc with organ involvement
- Progressive disease despite therapy
- Age <65, good performance status
- No significant irreversible organ damage

## Scleroderma Renal Crisis Updates

**Contemporary Management:**
- Immediate ACE inhibitor (captopril IV if needed)
- Target BP <140/80 within 24 hours
- Add amlodipine, doxazosin as needed
- Dialysis if indicated (30% may recover renal function)
- Avoid ACE inhibitors in chronic renal failure

**Prevention:**
- Avoid high-dose steroids (>15 mg prednisone)
- Educate patients about symptoms
- Home BP monitoring
- Early reporting of headache, visual changes

## Cancer Screening

**SSc-Associated Malignancy Risk:**
- Anti-RNA pol III: ~4x risk, synchronous with SSc onset
- Breast, lung, ovarian, GI
- Screen at diagnosis and annually for 3-5 years
- Consider whole-body imaging if high risk

## Lung Transplantation

**Indications:**
- End-stage ILD (FVC <30-40%)
- Refractory PAH despite maximal therapy
- Combined lung-kidney for renal crisis survivors
- Multi-list for heart-lung if cardiac involvement

**Outcomes:**
- Similar to other ILD post-transplant
- GI anastomotic leak risk higher
- Careful pre-transplant GI assessment

## Future Directions

**Targeted Therapies:**
- LOXL2 inhibition: Fibrosis
- CTGF inhibition: Connective tissue growth factor
- JAK/STAT inhibition: Inflammation
- Senolytics: Target senescent fibroblasts

**Stem Cell Therapies:**
- Mesenchymal stem cells
- Regulatory T cell therapy
- Gene editing approaches

**Microbiome Modulation:**
- Gut-lung axis
- Microbial metabolites influencing fibrosis

## Quality of Life and Rehabilitation

**Multidisciplinary Care:**
- Physical and occupational therapy
- Hand therapy for contractures
- Speech therapy for facial involvement
- Psychological support
- Pain management

**Fatigue Management:**
- Exercise programs
- Energy conservation techniques
- Treat contributing factors (anemia, depression, sleep)

**Sexual Health:**
- Vaginal dryness: Lubricants, moisturizers
- Erectile dysfunction: PDE5 inhibitors
- Body image concerns

## Pregnancy Considerations
- High-risk pregnancy
- Pre-conception counseling mandatory
- ACE inhibitors contraindicated
- Close monitoring for renal crisis, PAH worsening`,
      keyTerms: [
        { term: 'CXCL4', definition: 'Chemokine platelet factor 4; biomarker for SSc severity and PAH' },
        { term: 'intrinsic subsets', definition: 'Gene expression-based SSc subtypes: normal-like, inflammatory, fibroproliferative' },
        { term: 'senolytics', definition: 'Drugs that selectively eliminate senescent cells; potential antifibrotic therapy' },
      ],
      clinicalNotes: 'Board pearls: ACE inhibitors first-line for scleroderma renal crisis regardless of BP. Avoid high-dose steroids in diffuse SSc. Mycophenolate first-line for ILD. Nintedanib slows FVC decline. Annual echo for PAH screening in limited SSc. Anti-centromere = limited/PAH; anti-Scl-70 = diffuse/ILD; anti-RNA pol III = renal crisis.',
    },
  },

  media: [
    {
      id: 'scleroderma-skin',
      type: 'image',
      filename: 'sclerodactyly-scleroderma.jpg',
      title: 'Sclerodactyly in Systemic Sclerosis',
      description: 'Skin tightening and thickening of fingers with shiny appearance',
    },
    {
      id: 'nailfold-capillaroscopy',
      type: 'image',
      filename: 'nailfold-capillary-changes.jpg',
      title: 'Nailfold Capillaroscopy in SSc',
      description: 'Dilated capillary loops and hemorrhages characteristic of SSc',
    },
  ],
  citations: [
    {
      id: 'van-den-hoogen-2013',
      type: 'article',
      title: '2013 classification criteria for systemic sclerosis',
      authors: ['van den Hoogen F', 'Khanna D', 'Fransen J', 'et al.'],
      source: 'Arthritis & Rheumatology',
      url: 'https://doi.org/10.1002/art.38098',
    },
    {
      id: 'distler-2017',
      type: 'article',
      title: '2017 update of EULAR recommendations for the treatment of systemic sclerosis',
      authors: ['Distler O', 'Landewe R', 'Euley E', 'et al.'],
      source: 'Annals of the Rheumatic Diseases',
    },
  ],
  crossReferences: [
    { targetId: 'condition-systemic-lupus-erythematosus', targetType: 'condition', relationship: 'related', label: 'Systemic Lupus Erythematosus' },
    { targetId: 'condition-dermatomyositis', targetType: 'condition', relationship: 'related', label: 'Dermatomyositis' },
  ],
  tags: {
    systems: ['immune', 'integumentary', 'pulmonary', 'renal', 'cardiovascular', 'gastrointestinal'],
    topics: ['rheumatology', 'autoimmunity', 'dermatology', 'pulmonology', 'nephrology'],
    keywords: ['scleroderma', 'systemic sclerosis', 'CREST', 'Raynaud', 'anti-centromere', 'anti-Scl-70', 'ILD', 'pulmonary hypertension'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine'] },
  },

  createdAt: '2026-01-26T00:00:00.000Z',
  updatedAt: '2026-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default sclerodermaContent;
