/**
 * Restrictive Lung Diseases
 *
 * Comprehensive content covering interstitial lung diseases (ILD),
 * pulmonary fibrosis, sarcoidosis, and connective tissue disease-associated ILD.
 */

import { EducationalContent } from '../types';

export const restrictiveDiseasesContent: EducationalContent = {
  id: 'pulmonology-restrictive-diseases',
  type: 'topic',
  name: 'Restrictive Lung Diseases',
  nameEs: 'Enfermedades Pulmonares Restrictivas',
  alternateNames: [
    'Interstitial Lung Diseases',
    'Diffuse Parenchymal Lung Diseases',
    'ILD',
    'Pulmonary Fibrosis Spectrum',
  ],

  levels: {
    1: {
      level: 1,
      summary:
        'Restrictive lung diseases make the lungs stiff and hard to expand, so they cannot fill with enough air. Scarring (fibrosis), inflammation, or other conditions can cause this stiffness.',
      explanation: `## Lungs That Cannot Stretch

Your lungs are like balloons that expand when you breathe in and shrink when you breathe out. In restrictive lung diseases, the lungs become stiff - like trying to blow up a thick, tough balloon. You cannot get enough air in.

## What Causes Stiff Lungs?

### Scarring (Pulmonary Fibrosis)
- Scar tissue forms in the lungs over time
- Makes the lung tissue thick and stiff
- The most serious type is called IPF (Idiopathic Pulmonary Fibrosis) - "idiopathic" means we do not know the exact cause
- Breathing gets harder and harder over months to years

### Inflammation (Sarcoidosis)
- The immune system creates tiny clumps of cells called granulomas
- These clumps can form in the lungs, skin, eyes, and other organs
- Most common in young adults, especially African Americans
- Many people get better on their own; some need treatment

### Allergic Reactions (Hypersensitivity Pneumonitis)
- Breathing in certain dusts, molds, or chemicals can trigger lung inflammation
- Examples: bird feathers, moldy hay, hot tub mist
- Avoiding the trigger is the most important treatment

### Autoimmune Diseases
- Conditions like rheumatoid arthritis, lupus, or scleroderma can affect the lungs
- The immune system attacks the lung tissue by mistake
- Called "connective tissue disease-associated ILD"

## Common Symptoms
- Shortness of breath (especially during activity)
- Dry cough that does not go away
- Feeling tired all the time
- Crackling sounds when a doctor listens to your lungs

## How Is It Different from Obstructive Disease?
- **Obstructive** (like asthma, COPD): Hard to breathe air OUT - airways are too narrow
- **Restrictive** (like fibrosis): Hard to breathe air IN - lungs are too stiff to expand`,

      keyTerms: [
        {
          term: 'Fibrosis',
          definition: 'Scarring of lung tissue that makes it stiff and hard to expand',
        },
        {
          term: 'Granuloma',
          definition: 'A tiny clump of immune cells that forms when the body tries to wall off something it sees as foreign',
        },
        {
          term: 'Idiopathic',
          definition: 'A medical word meaning the cause is unknown',
        },
        {
          term: 'Interstitial',
          definition: 'The tissue between the air sacs in the lungs where scarring happens',
        },
      ],
      analogies: [
        'A healthy lung is like a soft sponge that easily soaks up air. A fibrotic lung is like a dried-out sponge that is stiff and barely expands.',
        'Sarcoidosis granulomas are like tiny speed bumps inside the lungs - they get in the way of normal breathing.',
        'Hypersensitivity pneumonitis is like your lungs having an allergic reaction to something you breathed in.',
      ],
      examples: [
        'A 65-year-old man who gradually becomes more breathless over a year and is diagnosed with pulmonary fibrosis',
        'A 30-year-old woman with sarcoidosis who has swollen lymph nodes and lung spots on X-ray',
        'A farmer who develops cough and breathlessness from breathing moldy hay dust',
      ],
      patientCounselingPoints: [
        'If you notice increasing shortness of breath, especially with exercise, see your doctor.',
        'Pulmonary fibrosis cannot be reversed, but treatments can slow it down.',
        'If you have sarcoidosis, many cases improve on their own without treatment.',
        'Avoid known triggers if you have hypersensitivity pneumonitis - this is the most important step.',
        'Pulmonary rehabilitation (exercise programs) can help you stay active.',
      ],
    },

    2: {
      level: 2,
      summary:
        'Restrictive lung diseases show reduced total lung capacity (TLC) on pulmonary function testing, with preserved or elevated FEV1/FVC ratio. HRCT patterns (UIP, NSIP, granulomatous) guide diagnosis. Key diseases include IPF, sarcoidosis, hypersensitivity pneumonitis, and CTD-ILD.',
      explanation: `## Defining Restriction

### Pulmonary Function Tests
- **TLC reduced** (<80% predicted): Defines restriction
- **FEV1/FVC ratio normal or elevated** (>0.70): Unlike obstruction
- **FVC reduced**: Proportional to TLC reduction
- **DLCO reduced**: Impaired gas exchange from thickened interstitium
- Caution: Reduced FVC alone does not confirm restriction (can occur with air trapping in obstruction); need lung volumes

### Key Difference from Obstruction
| Feature | Obstructive | Restrictive |
|---------|-------------|-------------|
| FEV1/FVC | <0.70 (reduced) | ≥0.70 (normal/high) |
| TLC | Normal or increased | Reduced |
| FVC | Reduced | Reduced |
| DLCO | Variable | Usually reduced |
| Flow-volume loop | Concave (scooped) | Narrow and tall |

## Major Restrictive Diseases

### Idiopathic Pulmonary Fibrosis (IPF)
- **Most common idiopathic interstitial pneumonia**
- Age >50, male predominance, smoking history common
- Progressive and fatal; median survival 3-5 years without treatment
- Symptoms: Progressive dyspnea, dry cough, bibasilar Velcro-like crackles
- CXR: Bilateral reticular opacities, lower lobe predominant
- HRCT: Usual interstitial pneumonia (UIP) pattern
- Clubbing in 25-50% of patients

### Sarcoidosis
- **Non-caseating granulomatous disease**
- Peak age 25-40, African Americans 3x more affected
- Multisystem: lungs (>90%), skin, eyes, liver, joints, heart, nervous system
- CXR staging:
  - Stage 0: Normal
  - Stage I: Bilateral hilar lymphadenopathy (BHL) alone
  - Stage II: BHL + pulmonary infiltrates
  - Stage III: Pulmonary infiltrates without BHL
  - Stage IV: Pulmonary fibrosis
- Labs: Elevated ACE, hypercalcemia (1,25-dihydroxy vitamin D from granulomas)
- Many cases self-resolve (especially Stage I: 60-80% spontaneous remission)

### Hypersensitivity Pneumonitis (HP)
- **Immune reaction to inhaled organic antigens**
- Acute: Fever, cough, dyspnea 4-8 hours after exposure ("Monday sickness")
- Chronic: Insidious dyspnea, fibrosis if exposure continues
- Common causes:
  - Bird fancier's lung (avian proteins)
  - Farmer's lung (thermophilic actinomycetes)
  - Hot tub lung (Mycobacterium avium)
- Serum precipitins (IgG antibodies): Exposure marker, not diagnostic alone
- BAL: Lymphocytosis (>40%)

### Connective Tissue Disease-Associated ILD (CTD-ILD)
- **Systemic autoimmune diseases affecting the lungs**
- Rheumatoid arthritis: UIP or NSIP pattern
- Systemic sclerosis (scleroderma): NSIP most common, leading cause of death
- Dermatomyositis/polymyositis: NSIP, organizing pneumonia; anti-MDA5 = rapidly progressive
- Sjogren syndrome: LIP, NSIP
- SLE: Pleuritis, acute lupus pneumonitis, shrinking lung syndrome
- Mixed CTD: Variable ILD patterns

## HRCT Patterns
- **UIP**: Basal-predominant honeycombing, traction bronchiectasis, reticulation; minimal ground glass
- **NSIP**: Ground-glass opacity with subpleural sparing, lower lobe predominant; less honeycombing
- **Organizing pneumonia**: Peripheral consolidation, reverse halo sign
- **Granulomatous**: Upper/mid-zone nodules along lymphatics (sarcoidosis)`,

      keyTerms: [
        {
          term: 'TLC',
          definition: 'Total Lung Capacity - the maximum volume of air the lungs can hold; reduced in restrictive disease',
        },
        {
          term: 'DLCO',
          definition: 'Diffusing Capacity for Carbon Monoxide - measures gas transfer across the alveolar membrane; reduced when interstitium is thickened',
        },
        {
          term: 'UIP',
          definition: 'Usual Interstitial Pneumonia - HRCT pattern of basal honeycombing and traction bronchiectasis; hallmark of IPF',
        },
        {
          term: 'NSIP',
          definition: 'Nonspecific Interstitial Pneumonia - HRCT pattern of ground-glass opacity with subpleural sparing; better prognosis than UIP',
        },
        {
          term: 'Non-caseating granuloma',
          definition: 'Organized collection of macrophages without central necrosis; hallmark of sarcoidosis',
        },
        {
          term: 'Honeycombing',
          definition: 'Clustered cystic spaces on CT representing end-stage fibrotic destruction of lung tissue',
        },
      ],
      analogies: [
        'UIP pattern on HRCT looks like the base of the lungs has been replaced by a honeycomb - clusters of tiny holes where normal tissue used to be.',
        'Sarcoidosis staging is like a staircase: Stage I starts with just swollen lymph nodes, and each stage adds more lung involvement until Stage IV where scarring is permanent.',
        'DLCO is like testing how easily oxygen can cross from air to blood - when the wall between them is thickened by scar tissue, less gets across.',
      ],
      examples: [
        'A 62-year-old man with progressive dyspnea, Velcro crackles, and HRCT showing basal honeycombing (IPF with UIP pattern)',
        'A 28-year-old African American woman with bilateral hilar lymphadenopathy on CXR and elevated ACE level (sarcoidosis Stage I)',
        'A pigeon breeder with recurrent fevers and cough after cleaning the coop (hypersensitivity pneumonitis)',
        'A woman with scleroderma and worsening dyspnea; HRCT shows ground-glass opacity with subpleural sparing (CTD-ILD, NSIP pattern)',
      ],
      clinicalNotes:
        'A definite UIP pattern on HRCT in the appropriate clinical context (age >60, male, smoking history) is sufficient for IPF diagnosis without surgical lung biopsy. Always screen for CTD in any new ILD diagnosis with autoimmune serologies. Sarcoidosis Stage I has excellent prognosis and usually does not need treatment.',
    },

    3: {
      level: 3,
      summary:
        'IPF is a progressive fibrotic ILD with UIP pattern requiring antifibrotic therapy. Sarcoidosis involves non-caseating granulomas with multisystem involvement. CTD-ILD pattern determines prognosis. Multidisciplinary discussion (MDD) is the gold standard for ILD diagnosis.',
      explanation: `## UIP vs. NSIP: Pattern Recognition

### UIP (Usual Interstitial Pneumonia)
**HRCT Features (definite UIP):**
- Basal and peripheral predominant
- Honeycombing with or without traction bronchiectasis
- Reticulation
- Absence of features suggesting alternative diagnosis
- Heterogeneous: Areas of fibrosis adjacent to normal lung (temporal heterogeneity)

**Pathology:**
- Patchy dense fibrosis alternating with normal lung
- Fibroblastic foci at interface of fibrosis and normal tissue (active remodeling)
- Honeycombing with bronchiolized epithelium
- Temporal heterogeneity is pathognomonic

**Prognosis:**
- IPF (idiopathic UIP): Median survival 3-5 years
- RA-UIP: Similar prognosis to IPF
- UIP pattern generally worse than NSIP regardless of etiology

### NSIP (Nonspecific Interstitial Pneumonia)
**HRCT Features:**
- Ground-glass opacity (predominant)
- Lower lobe predominant
- Subpleural sparing (key distinguishing feature from UIP)
- Traction bronchiectasis in fibrotic NSIP
- Absence of honeycombing

**Subtypes:**
- Cellular NSIP: Predominantly inflammation → better prognosis, steroid-responsive
- Fibrotic NSIP: Predominantly fibrosis → intermediate prognosis

**Common Associations:**
- CTD-ILD (especially scleroderma, dermatomyositis)
- Drug-induced ILD
- Hypersensitivity pneumonitis (chronic)
- Idiopathic NSIP

## IPF: Detailed Management

### Diagnosis (2022 ATS/ERS/JRS/ALAT Guidelines)
- **Clinical context**: Age >50, exposure history, exclude known causes
- **HRCT pattern**: Definite UIP, probable UIP, indeterminate, alternative diagnosis
- **MDD**: Multidisciplinary discussion (pulmonologist + radiologist + pathologist) for non-definite UIP
- **Surgical lung biopsy**: Only when MDD cannot reach confident diagnosis
- **Transbronchial cryobiopsy**: Emerging alternative to SLB with lower morbidity

### Antifibrotic Therapy

**Pirfenidone (Esbriet):**
- Mechanism: Inhibits TGF-β signaling, anti-inflammatory, antioxidant
- Dose: 801 mg TID (titrate over 2 weeks)
- Efficacy: Slows FVC decline by ~50%, may improve survival
- Side effects: GI (nausea, anorexia), photosensitivity (severe sunburn), hepatotoxicity
- Monitoring: LFTs monthly x6 months, then quarterly

**Nintedanib (Ofev):**
- Mechanism: Triple tyrosine kinase inhibitor (VEGFR, FGFR, PDGFR)
- Dose: 150 mg BID with food
- Efficacy: Slows FVC decline by ~50%, consistent across subgroups
- Side effects: Diarrhea (60-70%, usually manageable), hepatotoxicity, bleeding risk
- Also approved for: Systemic sclerosis-ILD, progressive pulmonary fibrosis (PPF)
- Monitoring: LFTs before start, monthly x3, then quarterly

**What NOT to Use:**
- Immunosuppression (prednisone + azathioprine + NAC): PANTHER-IPF trial showed HARM
- Anticoagulation: ACE-IPF trial showed no benefit, possible harm
- Endothelin receptor antagonists: No benefit in IPF

### Lung Transplant
- Consider early referral (at diagnosis for IPF)
- Criteria: Progressive decline despite antifibrotics, DLCO <40%, desaturation <88% on 6MWT
- Median post-transplant survival: ~5.5 years
- Single vs. bilateral: Bilateral increasingly preferred

## Sarcoidosis: Advanced Management

### Phenotyping
- **Lofgren syndrome**: Erythema nodosum + bilateral hilar lymphadenopathy + fever + polyarthralgia → excellent prognosis (>90% resolve)
- **Acute sarcoidosis**: Good prognosis, self-limited
- **Chronic sarcoidosis**: Progressive fibrosis, organ damage
- **Cardiac sarcoidosis**: AV block, cardiomyopathy, sudden death → requires screening (ECG, echo, consider cardiac MRI/PET)
- **Neurosarcoidosis**: Cranial neuropathy (VII most common), meningitis, CNS lesions

### Treatment Approach
- Stage I: Usually observe (60-80% spontaneous remission)
- Stage II-III with symptoms/declining PFTs: Treat
- First-line: Prednisone 20-40 mg/day, taper over 6-12 months
- Steroid-sparing: Methotrexate (most common), azathioprine, mycophenolate
- Refractory: Anti-TNF (infliximab), especially for neurosarcoidosis and lupus pernio
- Emerging: JAK inhibitors (tofacitinib), repository corticotropin

## CTD-ILD Management

### Screening
- PFTs with DLCO at baseline for all CTD patients
- HRCT if symptoms or PFT abnormalities
- Serial monitoring every 6-12 months in high-risk CTDs (scleroderma, anti-MDA5 dermatomyositis)

### Treatment by Disease
- **Scleroderma-ILD**: Mycophenolate (SLS-II trial) or nintedanib (SENSCIS trial); combination emerging
- **RA-ILD**: UIP pattern may benefit from antifibrotics; NSIP from immunosuppression
- **Inflammatory myopathy-ILD**: Aggressive immunosuppression (high-dose steroids + mycophenolate/tacrolimus); anti-MDA5 = rituximab + calcineurin inhibitor
- **SLE**: Steroids + mycophenolate for acute lupus pneumonitis

### Progressive Pulmonary Fibrosis (PPF)
- Any non-IPF ILD that shows progressive fibrosis despite standard management
- Defined by ≥2 of: worsening symptoms, FVC decline ≥5%, DLCO decline ≥10%, or HRCT progression within 12 months
- Nintedanib approved for PPF (INBUILD trial)
- Paradigm shift: Treat the fibrotic process regardless of underlying diagnosis`,

      keyTerms: [
        {
          term: 'Multidisciplinary Discussion (MDD)',
          definition:
            'Gold-standard diagnostic approach for ILD involving pulmonologist, radiologist, and pathologist reviewing cases together',
        },
        {
          term: 'Pirfenidone',
          definition:
            'Antifibrotic drug that inhibits TGF-β signaling; approved for IPF; slows FVC decline by approximately 50%',
        },
        {
          term: 'Nintedanib',
          definition:
            'Triple tyrosine kinase inhibitor (VEGFR/FGFR/PDGFR); approved for IPF, SSc-ILD, and progressive pulmonary fibrosis',
        },
        {
          term: 'Progressive Pulmonary Fibrosis (PPF)',
          definition:
            'Non-IPF ILD showing progressive fibrosis despite standard management; nintedanib is approved treatment',
        },
        {
          term: 'Lofgren syndrome',
          definition:
            'Acute sarcoidosis variant with erythema nodosum, bilateral hilar lymphadenopathy, fever, and polyarthralgia; excellent prognosis',
        },
        {
          term: 'Fibroblastic foci',
          definition:
            'Aggregates of myofibroblasts and loose connective tissue at the interface of fibrosis and normal lung; hallmark of UIP and marker of active disease',
        },
        {
          term: 'Transbronchial cryobiopsy',
          definition:
            'Bronchoscopic technique using a cryoprobe to obtain larger lung tissue samples than forceps biopsy; emerging alternative to surgical lung biopsy in ILD',
        },
      ],
      analogies: [
        'UIP pattern is like an old wall with patches of new plaster next to crumbling brick - the hallmark temporal heterogeneity where old scars sit beside fresh injury.',
        'Antifibrotics are like slowing down a freight train - they do not reverse the damage already done but they meaningfully reduce how fast it progresses.',
        'PPF treats the fibrotic process like treating the fire regardless of what started it - whether the spark was sarcoidosis, RA, or HP, the flames of fibrosis respond to the same extinguisher.',
      ],
      examples: [
        'A 70-year-old man with definite UIP on HRCT started on nintedanib 150 mg BID; FVC decline slowed from -200 mL/yr to -100 mL/yr',
        'A 25-year-old with Lofgren syndrome (erythema nodosum + BHL + fever) managed with NSAIDs and observation; resolved in 6 months',
        'A scleroderma patient with progressive NSIP started on mycophenolate (SLS-II protocol) with stabilization of FVC',
        'A patient with RA-ILD showing progressive fibrosis despite methotrexate; started on nintedanib as PPF',
      ],
      clinicalNotes:
        'The PANTHER-IPF trial is a landmark negative study: triple therapy (prednisone + azathioprine + NAC) increased mortality in IPF. This fundamentally changed practice - immunosuppression is harmful in IPF. Always distinguish UIP-pattern ILD (antifibrotics) from inflammatory ILD (immunosuppression). The INBUILD trial established nintedanib for any progressive fibrotic ILD regardless of underlying diagnosis. Scleroderma-ILD increasingly uses combination mycophenolate + nintedanib based on emerging data.',
    },

    4: {
      level: 4,
      summary:
        'Advanced ILD pathophysiology involves aberrant wound healing in IPF (epithelial injury → myofibroblast activation → ECM deposition), granuloma immunology in sarcoidosis (Th1/Th17 with paradoxical peripheral anergy), and the molecular basis of fibrotic progression across diagnostic categories.',
      explanation: `## IPF: Aberrant Wound Healing

### Pathogenic Model
IPF is now understood as aberrant epithelial-mesenchymal crosstalk rather than purely inflammatory disease:

1. **Repetitive epithelial injury**: AEC2 (alveolar type 2 cells) are damaged by unknown insults (microaspiration, viral infection, smoking, genetic susceptibility)
2. **Impaired re-epithelialization**: Senescent AEC2 cells fail to regenerate; secrete pro-fibrotic mediators
3. **Myofibroblast activation**: From resident fibroblasts, epithelial-mesenchymal transition (EMT), circulating fibrocytes, pericytes
4. **Extracellular matrix deposition**: Collagen I/III, fibronectin, tenascin-C → progressive architectural distortion
5. **Positive feedback loops**: Stiff matrix activates mechanosensitive pathways (YAP/TAZ) → more fibroblast activation

### Molecular Pathways
- **TGF-β**: Master fibrogenic cytokine; activates Smad2/3 → collagen transcription; targeted by pirfenidone
- **PDGF/VEGF/FGF**: Mesenchymal proliferation and angiogenesis; targeted by nintedanib
- **Wnt/β-catenin**: Promotes fibroblast proliferation and myofibroblast differentiation
- **Hedgehog signaling**: Epithelial-mesenchymal crosstalk in fibrosis
- **mTOR pathway**: Regulates senescence and fibroblast activation; rapamycin under investigation
- **Galectin-3**: Macrophage activation, fibroblast proliferation; GB0139 (inhaled galectin-3 inhibitor) in trials
- **LPA/autotaxin axis**: Fibroblast migration and survival; ziritaxestat (autotaxin inhibitor) studied
- **Pentraxin-2 (SAP)**: Regulates macrophage differentiation; PRM-151 in trials

### Genetic Risk
- **MUC5B promoter variant** (rs35705950): Present in 30-35% of IPF patients vs. 9% of controls; strongest known genetic risk factor; paradoxically associated with better survival
- **Telomere-related genes** (TERT, TERC, RTEL1, PARN): Short telomeres → epithelial senescence → impaired regeneration; 10-15% of familial IPF
- **Surfactant genes** (SFTPC, SFTPA2): ER stress in AEC2 → apoptosis
- **TOLLIP, ELMOD2**: Innate immunity variants

### Cellular Senescence
- Senescent AEC2 cells accumulate in IPF lungs
- Express p16^INK4a, p21, senescence-associated secretory phenotype (SASP)
- SASP includes pro-fibrotic mediators (TGF-β, CTGF, PAI-1, IL-6)
- Senolytics (dasatinib + quercetin) in early-phase clinical trials

## Sarcoidosis: Granuloma Immunology

### Granuloma Formation
1. Unknown antigen (mycobacterial? environmental?) presented by HLA class II
2. CD4+ T cell activation → Th1 differentiation (IFN-γ, IL-2, TNF-α)
3. Macrophage activation → epithelioid transformation → multinucleated giant cells
4. Organized granuloma: Central macrophages surrounded by T cells, peripheral fibrosis

### Immunological Paradox
- **Compartmentalized hyperactivity**: Intense Th1/Th17 response at disease sites (lungs, skin)
- **Peripheral anergy**: Cutaneous anergy to recall antigens (tuberculin), lymphopenia
- CD4+ T cell sequestration in granulomas depletes peripheral pool
- Regulatory T cell dysfunction at disease sites

### Key Cytokines
- TNF-α: Central to granuloma maintenance (explains infliximab efficacy)
- IL-12/IL-18: Drive Th1 differentiation
- IL-17: Th17 axis contributes to granulomatous inflammation
- CXCL10 (IP-10): Th1 chemokine, potential biomarker
- Serum IL-2R (sIL-2R): Marker of T cell activation, may track disease activity

### Fibrotic Sarcoidosis
- 10-20% progress to pulmonary fibrosis (Stage IV)
- Risk factors: African American, chronic disease, cardiac involvement, lupus pernio
- TGF-β and IL-17 implicated in fibrotic transition
- Upper/mid-zone fibrosis with traction (unlike IPF basal pattern)
- May develop progressive pulmonary fibrosis → consider antifibrotics

## Hypersensitivity Pneumonitis: Immunopathogenesis

### Acute/Inflammatory Phase
- Type III hypersensitivity: Immune complex deposition (IgG precipitins)
- Type IV hypersensitivity: T cell-mediated granulomatous response
- BAL: Lymphocytosis (often >50%), CD8+ predominant (low CD4/CD8 ratio)
- Poorly formed, non-caseating granulomas (unlike well-formed in sarcoidosis)

### Chronic/Fibrotic Phase
- Persistent low-level exposure → insidious fibrosis
- HRCT: Upper/mid-zone mosaic attenuation, air trapping, fibrosis
- BAL lymphocytosis may decrease in chronic fibrotic HP
- Can mimic IPF radiologically but mosaic attenuation, air trapping, and upper-lobe predominance help distinguish
- Three-headed bird sign on HRCT: Fibrosis + ground glass + mosaic attenuation

### Classification Update (2020 ATS/JRS/ALAT)
- Non-fibrotic HP (inflammatory): Better prognosis, often reversible
- Fibrotic HP: Progressive, may require antifibrotics
- Exposure identification crucial but absent in 30-50% of cases

## Drug-Induced ILD

### Common Offenders
- **Methotrexate**: Hypersensitivity pneumonitis pattern
- **Amiodarone**: Phospholipidosis, organizing pneumonia, or fibrosis; high-attenuation consolidation on CT
- **Nitrofurantoin**: Acute eosinophilic or chronic fibrotic
- **Bleomycin**: Dose-dependent fibrosis (cumulative >400 units), oxygen potentiates toxicity
- **Checkpoint inhibitors** (nivolumab, pembrolizumab): Immune-mediated pneumonitis (3-5%); organizing pneumonia or NSIP pattern
- **Radiation**: Radiation pneumonitis → fibrosis within radiation field

### Management
- Discontinue offending agent
- Corticosteroids for inflammatory pattern
- Monitor for progression to fibrosis
- Checkpoint inhibitor pneumonitis: Hold immunotherapy, steroids, resume only if grade 1-2 resolves`,

      keyTerms: [
        {
          term: 'Epithelial-mesenchymal transition (EMT)',
          definition:
            'Process by which epithelial cells transform into mesenchymal cells (fibroblasts), contributing to the myofibroblast pool in fibrosis',
        },
        {
          term: 'MUC5B promoter variant',
          definition:
            'The strongest genetic risk factor for IPF (rs35705950), present in ~35% of IPF patients; affects mucin production and mucociliary clearance',
        },
        {
          term: 'Cellular senescence',
          definition:
            'Permanent cell cycle arrest with adoption of pro-inflammatory, pro-fibrotic secretory phenotype (SASP); key driver of IPF pathogenesis',
        },
        {
          term: 'SASP',
          definition:
            'Senescence-Associated Secretory Phenotype - pro-fibrotic mediators (TGF-β, CTGF, IL-6) secreted by senescent cells that drive neighboring cells toward fibrosis',
        },
        {
          term: 'Compartmentalized hyperactivity',
          definition:
            'Paradox in sarcoidosis where intense immune activation occurs at disease sites while peripheral immunity is suppressed (anergy)',
        },
        {
          term: 'Fibroblastic foci',
          definition:
            'Aggregates of activated myofibroblasts depositing collagen at the leading edge of fibrosis in UIP; their density correlates with rate of disease progression',
        },
        {
          term: 'Mechanotransduction',
          definition:
            'Process by which increased tissue stiffness activates YAP/TAZ signaling in fibroblasts, creating a positive feedback loop driving progressive fibrosis',
        },
      ],
      analogies: [
        'IPF is like a wound that never finishes healing - the repair process gets stuck in overdrive, laying down scar tissue that makes the problem worse instead of better.',
        'The MUC5B variant is paradoxical: it increases your risk of getting IPF but if you do get it, you actually survive longer - like a mutation that makes you more likely to catch a cold but less likely to get pneumonia from it.',
        'Sarcoidosis immune compartmentalization is like having a fire department that sends every truck to one neighborhood (the lungs) while leaving the rest of the city (peripheral immunity) completely undefended.',
        'The YAP/TAZ mechanotransduction loop in fibrosis is like quicksand - the stiffer the tissue gets, the more it signals for even more stiffness, creating an inescapable cycle.',
      ],
      examples: [
        'A familial IPF patient with short telomeres (TERT mutation) presents at age 45 with rapidly progressive disease requiring early transplant evaluation',
        'An IPF patient enrolled in a senolytic trial (dasatinib + quercetin) targeting senescent AEC2 cells',
        'A sarcoidosis patient with peripheral anergy (negative tuberculin despite prior TB exposure) but intense BAL lymphocytosis showing compartmentalized immunity',
        'A patient on pembrolizumab for lung cancer develops grade 3 checkpoint inhibitor pneumonitis requiring immunotherapy hold and high-dose steroids',
      ],
      clinicalNotes:
        'The shift from "inflammation-driven" to "aberrant wound healing" in IPF was paradigm-changing and explains why immunosuppression fails (PANTHER-IPF). Short telomere syndromes present unique challenges: increased post-transplant complications (bone marrow failure, infections). Fibrotic HP can be difficult to distinguish from IPF; look for mosaic attenuation, air trapping, and relative upper-lobe involvement. Always consider drug-induced ILD in the differential - it is the most treatable cause.',
    },

    5: {
      level: 5,
      summary:
        'Current frontiers in restrictive lung disease include novel antifibrotic pipeline targets (autotaxin, galectin-3, pentraxin-2, αvβ6 integrin), senolytics for IPF, combination antifibrotic regimens, biomarker-guided ILD management, precision phenotyping in sarcoidosis, and regenerative medicine approaches.',
      explanation: `## Emerging Antifibrotic Pipeline for IPF

### Phase 3 and Late-Phase Candidates
**BI 1015550 (Nerandomilast):**
- Phosphodiesterase 4B (PDE4B) selective inhibitor
- Phase 3 FIBRONEER-IPF and FIBRONEER-ILD trials
- Slowed FVC decline in phase 2 alone and added to background antifibrotic
- Potential first add-on antifibrotic therapy

**Pamrevlumab (Anti-CTGF):**
- Monoclonal antibody against connective tissue growth factor
- Phase 3 ZEPHYRUS trials in IPF
- CTGF is downstream effector of TGF-β
- Initial phase 2 showed FVC stabilization

### Earlier Pipeline Targets
- **αvβ6 integrin inhibitors** (bexotegrast, PLN-74809): Block TGF-β activation at cell surface; Phase 2
- **Galectin-3 inhibitors** (GB0139, inhaled): Macrophage and fibroblast modulation; Phase 2
- **Autotaxin/LPA pathway** (ziritaxestat, BBT-877): Fibroblast migration; Phase 2 (ziritaxestat discontinued; BBT-877 ongoing)
- **Pentraxin-2 analog** (PRM-151/Zinpentraxin alfa): Promotes reparative macrophage phenotype; Phase 2 showed FVC stabilization
- **PI3K inhibitor** (BI 1015550 also has PI3K activity): Anti-inflammatory + antifibrotic
- **Senolytics** (DQ: dasatinib + quercetin): Eliminate senescent cells; Phase 1b showed improved physical function
- **CAR-T cells targeting FAP+** myofibroblasts: Preclinical proof-of-concept for targeted fibroblast elimination

### Combination Strategies
- Pirfenidone + nintedanib: Safety established; overlapping but distinct mechanisms; no additive efficacy data yet
- Antifibrotic + anti-inflammatory: BI 1015550 (PDE4B) + nintedanib design
- Antifibrotic + senolytic: Targeting both ongoing fibrosis and cellular senescence
- Antifibrotic + antioxidant: NAC (uncertain benefit) + standard antifibrotic

## Biomarker-Guided ILD Management

### Diagnostic Biomarkers
- **KL-6 (Krebs von den Lungen-6)**: Glycoprotein from damaged AEC2; elevated in IPF, HP, CTD-ILD; used clinically in Japan
- **SP-D (Surfactant Protein D)**: Elevated in AEC2 damage; correlates with disease extent
- **MMP-7**: Elevated in IPF serum; part of multi-biomarker panels
- **CCL18**: Macrophage-derived; predicts mortality in IPF

### Prognostic Biomarkers
- **Gender-Age-Physiology (GAP) index**: Validated staging system for IPF (stages I-III)
- **Composite physiologic index (CPI)**: Accounts for emphysema + fibrosis
- **FVC decline >10% in 6-12 months**: Strong predictor of mortality
- **Six-minute walk test desaturation**: <88% predicts poor outcomes
- **Telomere length**: Short telomeres predict worse transplant outcomes
- **Monocyte count**: Elevated monocytes (>0.6 × 10^9/L) predict IPF mortality

### Molecular Phenotyping
- Transcriptomic classifiers from transbronchial biopsies (Envisia genomic classifier): Identifies UIP pattern molecularly, may avoid surgical biopsy
- Machine learning on HRCT: Automated quantification of fibrosis extent, texture analysis predicting progression (CALIPER)
- Blood proteomic panels: Multi-protein classifiers for diagnosis and prognosis
- Microbiome: Increased bacterial burden in BAL correlates with IPF progression

## Sarcoidosis: Precision Approaches

### Genomic Insights
- HLA associations: HLA-DRB1*0301 (Lofgren, good prognosis), HLA-DRB1*1501 (chronic, poor prognosis)
- BTNL2 variants: Butyrophilin-like 2 gene on chromosome 6; T cell regulation
- ANXA11: Annexin A11; autophagy regulation
- mTOR pathway activation: Potential therapeutic target

### Emerging Therapeutics
- **JAK inhibitors** (tofacitinib, ruxolitinib): Block downstream signaling of multiple cytokines; case series showing efficacy in refractory sarcoidosis
- **Repository corticotropin injection (Acthar gel)**: ACTH analog; Phase 4 positive in pulmonary sarcoidosis
- **Anti-IL-17** (secukinumab): Targeting Th17 axis; being investigated
- **Anti-IL-12/23** (ustekinumab): Targeting granuloma formation; case reports
- **mTOR inhibitors** (sirolimus): Autophagy modulation; case series in refractory disease

### Cardiac Sarcoidosis
- Screening all sarcoidosis patients: ECG + echocardiogram at baseline
- Advanced imaging: Cardiac MRI (late gadolinium enhancement) or FDG-PET (after myocardial suppression protocol)
- Sudden cardiac death risk: ICD placement if LVEF <35% or sustained VT
- HRS 2014 expert consensus: Treatment with immunosuppression + antiarrhythmic management

## Lung Transplant in ILD

### Referral Timing
- IPF: Refer at diagnosis (median wait time must be factored)
- Other ILD: Refer when FVC declining despite maximal medical therapy
- Sarcoidosis: Refer for Stage IV with progressive decline
- Early referral: DLCO <40%, oxygen requirement, decline in 6MWD

### ILD-Specific Considerations
- IPF patients have highest wait-list mortality of any transplant indication
- Bilateral transplant increasingly preferred (better survival, avoids native lung complications)
- Short telomere syndrome: Risk of post-transplant cytopenias, consider single-lung
- Scleroderma: Esophageal dysmotility increases aspiration risk; gastric fundoplication may be needed
- Anti-MDA5 myopathy: May recur in allograft

### Post-Transplant Outcomes in ILD
- 1-year survival: ~85-90%
- 5-year survival: ~55-60%
- Chronic lung allograft dysfunction (CLAD): Leading cause of late mortality
- Restrictive allograft syndrome (RAS): Fibrotic form of CLAD, worse prognosis than BOS

## Regenerative Medicine

### Cell-Based Approaches
- **AEC2 progenitor transplantation**: Replacing damaged epithelium; preclinical
- **iPSC-derived AEC2**: Patient-specific cell replacement; research phase
- **Mesenchymal stromal cells (MSC)**: Paracrine anti-inflammatory/antifibrotic; Phase 1/2 trials in IPF
- **Lung organoids**: For disease modeling and drug screening

### Bioengineered Lungs
- Decellularized lung scaffolds re-seeded with patient cells
- Successful in rodent models; porcine scale demonstrated
- Years from clinical application but represents ultimate regenerative goal
- Ex vivo lung perfusion platforms enable assessment before transplant`,

      keyTerms: [
        {
          term: 'Nerandomilast (BI 1015550)',
          definition:
            'Selective PDE4B inhibitor in Phase 3 trials for IPF; potential first add-on antifibrotic therapy to pirfenidone or nintedanib',
        },
        {
          term: 'αvβ6 integrin',
          definition:
            'Cell surface receptor that activates latent TGF-β; blocking it prevents TGF-β-driven fibrosis at its earliest activation step',
        },
        {
          term: 'GAP index',
          definition:
            'Gender-Age-Physiology staging system for IPF mortality prediction (stages I-III based on sex, age, FVC%, DLCO%)',
        },
        {
          term: 'Envisia genomic classifier',
          definition:
            'Transcriptomic test on transbronchial biopsy tissue that molecularly identifies UIP pattern, potentially avoiding surgical lung biopsy',
        },
        {
          term: 'CALIPER',
          definition:
            'Computer-Aided Lung Informatics for Pathology Evaluation and Rating - automated CT analysis quantifying fibrosis extent and predicting progression',
        },
        {
          term: 'Chronic lung allograft dysfunction (CLAD)',
          definition:
            'Persistent decline in lung function after transplant; encompasses obstructive (BOS) and restrictive (RAS) phenotypes; leading cause of late post-transplant mortality',
        },
        {
          term: 'CAR-T for fibrosis',
          definition:
            'Chimeric antigen receptor T cells engineered to target FAP-expressing myofibroblasts; preclinical proof-of-concept for direct fibroblast elimination',
        },
        {
          term: 'KL-6',
          definition:
            'Krebs von den Lungen-6 - glycoprotein biomarker reflecting alveolar epithelial damage; used clinically in Japan for ILD diagnosis and monitoring',
        },
      ],
      analogies: [
        'The antifibrotic pipeline is like attacking fibrosis from every possible angle simultaneously: blocking TGF-β activation (integrins), its downstream signaling (pirfenidone), the growth factors driving fibroblast proliferation (nintedanib), and even eliminating the senescent cells fueling the process (senolytics).',
        'CAR-T targeting myofibroblasts is like reprogramming your immune system to be a precision demolition crew that removes only the scar-producing cells while leaving healthy tissue intact.',
        'The Envisia genomic classifier is like having a molecular fingerprint reader for UIP - instead of surgically removing lung tissue, a tiny bronchoscopic sample reveals the pattern through its gene expression profile.',
      ],
      examples: [
        'An IPF patient on nintedanib enrolled in the FIBRONEER-IPF trial adding nerandomilast (PDE4B inhibitor) as combination antifibrotic therapy',
        'A patient with unclear HRCT pattern undergoes transbronchial cryobiopsy with Envisia genomic classifier confirming UIP, avoiding surgical lung biopsy',
        'A sarcoidosis patient with refractory lupus pernio unresponsive to infliximab started on tofacitinib (JAK inhibitor) with significant skin improvement',
        'An IPF patient with short telomeres (TERT mutation) listed for single-lung transplant to reduce cytopenias; pre-transplant monocyte count elevated at 0.9 × 10^9/L predicting higher wait-list mortality',
        'A Phase 1 trial of dasatinib + quercetin (senolytics) in IPF shows improved 6MWD and reduced SASP biomarkers after 3 weeks of intermittent dosing',
      ],
      clinicalNotes:
        'The antifibrotic pipeline is the most active area in pulmonary drug development. Key concepts for the clinician: (1) BI 1015550 may be the first add-on antifibrotic - if Phase 3 confirms, combination antifibrotic therapy becomes standard. (2) Integrin inhibitors (αvβ6) target TGF-β activation at the earliest step and may be superior to downstream blockade. (3) Senolytics represent a paradigm shift targeting the cellular aging that drives fibrosis. (4) Biomarkers like KL-6, MMP-7, and monocyte counts are moving toward clinical use for prognostication and treatment monitoring. (5) Transplant referral timing in IPF is critical - early referral is underutilized and the highest wait-list mortality is in this population. (6) CALIPER quantitative CT analysis is more reproducible than visual scoring and predicts mortality independently of PFTs.',
    },
  },

  media: [],
  citations: [
    {
      id: 'ats-ipf-2022',
      type: 'article',
      title: 'Idiopathic Pulmonary Fibrosis: ATS/ERS/JRS/ALAT Clinical Practice Guideline 2022',
      authors: ['Raghu, G.', 'Remy-Jardin, M.', 'Richeldi, L.'],
      source: 'American Journal of Respiratory and Critical Care Medicine',
      url: 'https://doi.org/10.1164/rccm.202202-0399ST',
    },
    {
      id: 'ats-hp-2020',
      type: 'article',
      title: 'Diagnosis of Hypersensitivity Pneumonitis in Adults: ATS/JRS/ALAT Clinical Practice Guideline',
      authors: ['Raghu, G.', 'Remy-Jardin, M.', 'Ryerson, C.J.'],
      source: 'American Journal of Respiratory and Critical Care Medicine',
      url: 'https://doi.org/10.1164/rccm.202005-2032ST',
    },
    {
      id: 'inbuild-2019',
      type: 'article',
      title: 'Nintedanib in Progressive Fibrosing Interstitial Lung Diseases (INBUILD)',
      authors: ['Flaherty, K.R.', 'Wells, A.U.', 'Cottin, V.'],
      source: 'New England Journal of Medicine',
      url: 'https://doi.org/10.1056/NEJMoa1908681',
    },
    {
      id: 'panther-ipf-2012',
      type: 'article',
      title: 'Prednisone, Azathioprine, and N-Acetylcysteine for Pulmonary Fibrosis (PANTHER-IPF)',
      source: 'New England Journal of Medicine',
      url: 'https://doi.org/10.1056/NEJMoa1113354',
    },
  ],
  crossReferences: [
    {
      targetId: 'pulmonology-obstructive-diseases',
      targetType: 'topic',
      relationship: 'sibling',
      label: 'Obstructive Lung Diseases',
    },
    {
      targetId: 'pulmonology-pulmonary-vascular',
      targetType: 'topic',
      relationship: 'sibling',
      label: 'Pulmonary Vascular Diseases',
    },
    {
      targetId: 'pulmonology-asthma',
      targetType: 'topic',
      relationship: 'related',
      label: 'Asthma',
    },
  ],
  tags: {
    systems: ['respiratory'],
    topics: [
      'pulmonology',
      'interstitial lung disease',
      'pulmonary fibrosis',
      'IPF',
      'sarcoidosis',
      'hypersensitivity pneumonitis',
      'restrictive',
    ],
    keywords: [
      'UIP',
      'NSIP',
      'honeycombing',
      'antifibrotic',
      'nintedanib',
      'pirfenidone',
      'granuloma',
      'TGF-beta',
      'progressive pulmonary fibrosis',
      'connective tissue disease ILD',
    ],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'pulmonology'],
    },
  },

  createdAt: '2025-01-30',
  updatedAt: '2025-01-30',
  version: 1,
  status: 'published',
};
