/**
 * Periodontitis - Comprehensive Educational Content
 *
 * Covers chronic and aggressive periodontal disease, stages,
 * treatment approaches, and systemic connections.
 */

import { EducationalContent } from '../../types';

export const periodontitis: EducationalContent = {
  id: 'condition-periodontitis',
  type: 'condition',
  name: 'Periodontitis',
  alternateNames: [
    'Periodontal Disease',
    'Advanced Gum Disease',
    'Pyorrhea',
  ],

  levels: {
    1: {
      level: 1,
      summary: 'Periodontitis is serious gum disease where gums pull away from teeth and bone is lost. Unlike gingivitis, the damage cannot fully heal on its own, but treatment can stop it from getting worse.',
      explanation: `**What Is Periodontitis?**

Periodontitis is a serious infection of the gums that damages the soft tissue and bone supporting your teeth. If not treated, it can lead to tooth loss.

**How Is It Different from Gingivitis?**

- **Gingivitis**: Gums are inflamed but no permanent damage; can be reversed
- **Periodontitis**: Damage to bone and tissues that cannot fully heal

**Warning Signs:**
- Gums that bleed easily
- Red, swollen, or tender gums
- Gums pulling away from teeth
- Persistent bad breath
- Loose or shifting teeth
- Painful chewing
- Teeth that look longer (gum recession)

**What Causes Periodontitis?**

1. Gingivitis is not treated
2. Plaque spreads below the gum line
3. Bacteria produce toxins that irritate tissues
4. Body's immune response causes tissue destruction
5. Bone around teeth starts to break down
6. Gums pull away, forming "pockets"

**Risk Factors:**
- Smoking (biggest risk factor!)
- Diabetes
- Poor oral hygiene
- Genetics (runs in families)
- Certain medications that reduce saliva
- Stress
- Hormonal changes

**How Is It Treated?**

**Deep Cleaning (Scaling and Root Planing)**
- Removes plaque and tartar below the gums
- Smooths rough spots on tooth roots
- May need local anesthesia
- Done in sections over multiple visits

**Surgery (for advanced cases)**
- Flap surgery to clean deep pockets
- Bone or tissue grafts to rebuild what was lost

**Ongoing Care**
- More frequent dental visits (every 3-4 months)
- Excellent home care
- May need to quit smoking

**Can Periodontitis Be Cured?**

The damage cannot be fully reversed, but with treatment:
- The disease process can be stopped
- You can keep your teeth
- Further bone loss can be prevented
- Gums can become healthier`,
      keyTerms: [
        { term: 'periodontitis', definition: 'Serious gum disease that damages the bone and tissues supporting teeth' },
        { term: 'periodontal pocket', definition: 'A deep space between the gum and tooth caused by disease' },
        { term: 'bone loss', definition: 'When the bone supporting teeth breaks down due to infection' },
        { term: 'scaling and root planing', definition: 'Deep cleaning treatment that removes bacteria below the gums' },
        { term: 'recession', definition: 'When gums shrink back, making teeth look longer' },
      ],
      analogies: [
        'Periodontitis is like termites eating the foundation of a house - you cannot see it at first, but it weakens the structure.',
        'Periodontal pockets are like moats that get too deep to clean, allowing bacteria to hide and cause damage.',
        'Bone loss around teeth is like erosion around a fence post - eventually the post becomes loose.',
      ],
      examples: [
        'A person notices their front teeth look longer and spread apart - this is from bone loss and gum recession from periodontitis.',
        'After deep cleaning treatment and better home care, a patient\'s gum pockets shrink from 6mm to 4mm.',
      ],
    },
    2: {
      level: 2,
      summary: 'Periodontitis is an inflammatory disease causing destruction of the periodontal attachment apparatus, including alveolar bone. It is classified by stage (severity) and grade (progression risk), and requires professional treatment plus lifelong maintenance.',
      explanation: `## Understanding Periodontitis

**Definition:** Periodontitis is a chronic multifactorial inflammatory disease associated with dysbiotic biofilms, characterized by progressive destruction of the tooth-supporting apparatus (periodontium).

## Key Features

**What Is Destroyed:**
- Periodontal ligament (PDL)
- Alveolar bone
- Cementum
- Gingival attachment

**Clinical Signs:**

| Sign | Description |
|------|-------------|
| Probing depths >3 mm | Deepened pockets from attachment loss |
| Attachment loss | Loss of connective tissue attachment |
| Bone loss | Visible on X-rays |
| Bleeding on probing | Active inflammation |
| Tooth mobility | Advanced cases |
| Furcation involvement | Bone loss between roots |

## Classification (2017 AAP/EFP)

**Staging (Severity and Complexity):**

| Stage | CAL | Bone Loss | Teeth Lost | Complexity |
|-------|-----|-----------|------------|------------|
| I | 1-2 mm | <15% of root | None | None |
| II | 3-4 mm | 15-33% | None | Moderate |
| III | ≥5 mm | >33% or to middle third | ≤4 teeth | High |
| IV | ≥5 mm | >33% | ≥5 teeth | Very high |

**Grading (Progression Risk):**

| Grade | Description | Progression | Risk Factors |
|-------|-------------|-------------|--------------|
| A | Slow | <0.25 mm/year CAL loss | None |
| B | Moderate | 0.25-1.0 mm/year | None or controlled |
| C | Rapid | >1.0 mm/year | Smoking ≥10/day or HbA1c ≥7% |

## Risk Factors

**Non-Modifiable:**
- Genetics (IL-1 polymorphisms)
- Age
- Gender (slightly higher in males)

**Modifiable:**
- Smoking (strongest modifiable risk factor)
- Diabetes (poorly controlled)
- Obesity
- Stress
- Poor oral hygiene

**Local Factors:**
- Calculus accumulation
- Overhanging restorations
- Tooth crowding
- Faulty prosthetics

## Treatment

**Phase 1: Non-Surgical Therapy**

1. **Patient Education**
   - Oral hygiene instruction
   - Risk factor counseling (smoking cessation)

2. **Scaling and Root Planing (SRP)**
   - Remove plaque and calculus subgingivally
   - Smooth root surfaces
   - Usually done with local anesthesia
   - May be performed in quadrants

3. **Re-evaluation (6-8 weeks)**
   - Assess healing response
   - Determine need for further treatment

**Phase 2: Surgical Therapy (if needed)**

- Indicated for residual deep pockets (>5 mm)
- Flap surgery for access and pocket reduction
- Regenerative procedures (bone grafts, GTR)
- Resective procedures (osseous surgery)

**Phase 3: Maintenance (Supportive Periodontal Therapy)**

- Every 3-4 months typically
- Professional plaque removal
- Pocket monitoring
- Reinforcement of home care
- Lifelong requirement

## Connection to Systemic Health

**Periodontitis is associated with:**
- Cardiovascular disease
- Diabetes (bidirectional relationship)
- Adverse pregnancy outcomes
- Respiratory diseases
- Rheumatoid arthritis

**Mechanisms:**
- Chronic inflammation (elevated CRP)
- Bacteremia
- Immune dysregulation`,
      keyTerms: [
        { term: 'clinical attachment loss (CAL)', definition: 'Distance from the CEJ to the base of the pocket; measure of periodontal destruction' },
        { term: 'periodontal pocket', definition: 'Pathologically deepened sulcus resulting from attachment and bone loss' },
        { term: 'furcation', definition: 'Area between roots of multi-rooted teeth; involvement indicates advanced disease' },
        { term: 'scaling and root planing', definition: 'Non-surgical debridement of root surfaces to remove biofilm and calculus' },
        { term: 'supportive periodontal therapy', definition: 'Ongoing maintenance care to prevent disease progression after active treatment' },
        { term: 'AAP/EFP classification', definition: '2017 staging and grading system for periodontitis severity and progression risk' },
      ],
      analogies: [
        'Staging tells you how much damage has occurred (like staging cancer), while grading tells you how aggressive the disease is.',
        'SRP is like power-washing the foundation of a house to remove buildup that is causing damage.',
        'Maintenance visits are like changing your oil regularly - you cannot skip them if you want to keep things running.',
      ],
    },
    3: {
      level: 3,
      summary: 'Periodontitis pathophysiology involves dysbiotic microbiome interaction with host immune responses, leading to extracellular matrix destruction and alveolar bone resorption through inflammatory and RANKL-mediated pathways. Treatment targets biofilm disruption and host modulation.',
      explanation: `## Pathophysiology

**Microbiological Basis:**

*Dysbiosis Model:*
- Shift from symbiotic to dysbiotic community
- Keystone pathogen concept (P. gingivalis)
- Red Complex: P. gingivalis, T. denticola, T. forsythia
- Orange Complex as intermediaries

*Microbial Virulence:*
| Pathogen | Virulence Factors |
|----------|-------------------|
| P. gingivalis | Gingipains, LPS, fimbriae, capsule |
| T. denticola | Proteases, dentilisin |
| A. actinomycetemcomitans | Leukotoxin, CDT |
| F. nucleatum | Adhesins, bridge organism |

**Host Response:**

*Inflammatory Cascade:*
1. Bacterial products cross epithelium
2. TLR activation → NF-κB signaling
3. Cytokine production (IL-1β, TNF-α, IL-6)
4. Neutrophil recruitment (primary defense)
5. Chronic inflammatory infiltrate
6. Tissue destruction begins

*Bone Resorption Mechanism:*
- RANKL/RANK/OPG axis
- IL-1β and TNF-α increase RANKL expression
- RANKL activates osteoclast differentiation
- OPG (decoy receptor) is protective
- Imbalanced ratio → net bone loss

**Tissue Destruction:**

*Matrix Metalloproteinases (MMPs):*
- MMP-8 (collagenase-2): Primary collagen destroyer
- MMP-9 (gelatinase): Basement membrane
- MMP-13: Collagen degradation
- Host-derived, not bacterial

*Cytokine Network Effects:*
| Mediator | Source | Effect |
|----------|--------|--------|
| IL-1β | Macrophages | MMP induction, bone resorption |
| TNF-α | Macrophages | RANKL, tissue damage |
| IL-17 | Th17 cells | Neutrophil recruitment, RANKL |
| PGE2 | Multiple | Vasodilation, bone resorption |

## Diagnosis

**Comprehensive Periodontal Examination:**

1. **Probing Depth Measurement**
   - Six sites per tooth
   - Florida Probe or manual
   - Record to nearest millimeter

2. **Clinical Attachment Level**
   - CEJ to base of pocket
   - True measure of destruction
   - CAL = recession + probing depth

3. **Bleeding on Probing**
   - Indicates active inflammation
   - Percentage of sites
   - Absence = good prognosis

4. **Radiographic Assessment**
   - Periapical or bitewing series
   - Assess bone loss pattern and extent
   - Horizontal vs. vertical defects

5. **Tooth Mobility**
   - Miller classification (I, II, III)
   - Fremitus with occlusal contact

6. **Furcation Assessment**
   - Nabers probe
   - Class I, II, III involvement
   - Affects prognosis and treatment

## Treatment Protocols

**Non-Surgical Phase:**

*Scaling and Root Planing:*
- Full-mouth or quadrant approach
- Ultrasonic and hand instrumentation
- Endpoint: Smooth, hard root surface
- Re-evaluate at 4-6 weeks

*Adjunctive Therapies:*
| Therapy | Indication | Evidence |
|---------|------------|----------|
| Local antimicrobials | Non-responding pockets | Moderate benefit |
| Systemic antibiotics | Aggressive disease | Specific indications |
| Host modulation (SDD) | Chronic periodontitis | Modest CAL gain |

**Surgical Phase:**

*Access Flap Surgery:*
- Open flap debridement
- Visibility for thorough debridement
- Pocket reduction

*Regenerative Procedures:*
- Guided Tissue Regeneration (GTR)
- Bone grafts (autograft, allograft, xenograft, synthetic)
- Enamel matrix derivative (Emdogain)
- Intrabony defects best candidates

*Resective Procedures:*
- Osseous surgery
- Furcation management
- Pocket elimination

**Maintenance Phase:**

*Supportive Periodontal Therapy (SPT):*
- 3-4 month intervals typical
- Assess stability
- Reinforce home care
- Professional debridement
- Adjust interval based on risk

## Risk Assessment

**Periodontal Risk Assessment (PRA):**

*Parameters:*
1. BOP percentage
2. Residual pockets ≥5 mm
3. Teeth lost to periodontitis
4. Bone loss/age ratio
5. Systemic/genetic factors
6. Environmental factors (smoking)

*Risk Categories:*
- Low: Minimal risk factors
- Moderate: Some risk factors
- High: Multiple risk factors or poor response

**Prognosis:**

*Factors Affecting Individual Tooth Prognosis:*
| Factor | Favorable | Unfavorable |
|--------|-----------|-------------|
| Mobility | None-mild | Severe |
| Furcation | None-Class I | Class II-III |
| Bone loss | <50% | >50% |
| Root anatomy | Favorable | Unfavorable |
| Crown-root ratio | ≥1:1 | <1:1 |`,
      keyTerms: [
        { term: 'Red Complex', definition: 'P. gingivalis, T. denticola, T. forsythia; strongly associated with periodontitis' },
        { term: 'RANKL', definition: 'Receptor Activator of Nuclear Factor Kappa B Ligand; drives osteoclast differentiation and bone resorption' },
        { term: 'OPG', definition: 'Osteoprotegerin; decoy receptor that inhibits RANKL, protecting against bone loss' },
        { term: 'MMP-8', definition: 'Matrix Metalloproteinase-8 (collagenase-2); primary enzyme in periodontal collagen destruction' },
        { term: 'Guided Tissue Regeneration', definition: 'Surgical technique using membranes to promote periodontal regeneration by excluding epithelium' },
        { term: 'intrabony defect', definition: 'Vertical bone loss adjacent to tooth extending below crestal bone; candidate for regeneration' },
      ],
      clinicalNotes: 'The 2017 staging/grading system replaces chronic vs. aggressive terminology. Stage describes current severity while grade predicts progression. BOP absence is the best predictor of stability. Non-surgical therapy alone can effectively manage most periodontitis; surgery is for residual deep pockets or regeneration opportunities. Smoking cessation is as important as mechanical treatment.',
    },
    4: {
      level: 4,
      summary: 'Advanced periodontology integrates molecular understanding of host-pathogen interactions, precision diagnostics using biomarkers and microbiome profiling, regenerative biology, and systemic health connections to develop personalized treatment strategies.',
      explanation: `## Molecular Pathogenesis

**Keystone Pathogen Hypothesis:**

*P. gingivalis Mechanisms:*
- Low abundance, high impact
- Gingipains cleave complement (C3, C5)
- Manipulates TLR2/TLR4 signaling
- Subverts neutrophil function
- Enables community dysbiosis
- PPAD produces citrullinated proteins (RA link)

*Complement Manipulation:*
| Mechanism | Effect | Consequence |
|-----------|--------|-------------|
| C5 cleavage | C5a generation | Persistent inflammation |
| C3 cleavage | C3b degradation | Impaired opsonization |
| C4b inactivation | Classical pathway block | Immune evasion |

**Neutrophil Dysfunction:**

*Central Role:*
- Primary periodontal defense
- Constantly emigrate to sulcus
- Balance protection vs. tissue damage

*Disease States:*
- Hyper-responsive: Excessive ROS, tissue damage
- Hypo-responsive: Inadequate bacterial control
- LAD syndromes: Severe aggressive periodontitis

*Neutrophil Extracellular Traps (NETs):*
- DNA-based bacterial traps
- Excessive NETosis damages tissue
- May contribute to chronicity

**Resolution Failure:**

*SPM Deficiency:*
- Specialized Pro-resolving Mediators reduced
- Failure of active resolution
- Chronic inflammation persists
- Therapeutic target

**Genetic Susceptibility:**

| Gene | Association | Risk Increase |
|------|-------------|---------------|
| IL-1β cluster | Pro-inflammatory | 2-3x aggressive disease |
| IL-6 | Inflammation intensity | Variable |
| MMP polymorphisms | Tissue destruction | Modest |
| Fc receptors | Antibody function | Variable |
| Vitamin D receptor | Immune modulation | Emerging |

## Precision Diagnostics

**Biomarker Applications:**

*GCF Biomarkers:*
| Biomarker | Indication | Clinical Use |
|-----------|------------|--------------|
| MMP-8 | Active destruction | PerioSafe test |
| IL-1β | Inflammation | Research |
| ICTP | Bone resorption | Research |
| OPG/RANKL | Bone metabolism | Research |

*Salivary Diagnostics:*
- Non-invasive collection
- Whole-mouth assessment
- Point-of-care development
- Combined biomarker panels

**Microbiome Profiling:**

*Clinical Applications:*
- Beyond Red Complex
- Community structure analysis
- Functional gene profiling
- Treatment response monitoring
- Emerging clinical utility

*Sequencing Technologies:*
- 16S rRNA (bacteria identification)
- Whole metagenome (functional potential)
- Metatranscriptomics (active expression)

**Imaging Advances:**

*CBCT Applications:*
- 3D bone assessment
- Furcation visualization
- Defect morphology
- Treatment planning

*Molecular Imaging:*
- Research applications
- Inflammation targeting
- Future clinical potential

## Advanced Therapeutics

**Regenerative Biology:**

*Periodontal Ligament Stem Cells (PDLSCs):*
- Multipotent mesenchymal cells
- Regenerate PDL, bone, cementum
- Cell-based therapies emerging

*Growth Factors:*
| Factor | Source | Effect |
|--------|--------|--------|
| PDGF | Recombinant (GEM 21S) | Cell proliferation, angiogenesis |
| BMPs | Various | Bone formation |
| TGF-β | Endogenous | Matrix synthesis |
| FGF-2 | Research | Multiple regenerative effects |

*Enamel Matrix Derivative (Emdogain):*
- Amelogenin-based
- Mimics development
- Promotes regeneration
- Good evidence base

*Scaffolds:*
- Collagen matrices
- Synthetic polymers
- Decellularized matrices
- 3D-printed constructs

**Host Modulation:**

*Subantimicrobial Dose Doxycycline:*
- 20 mg BID
- MMP inhibition (not antibiotic)
- Reduces collagenase activity
- 0.5 mm additional CAL gain
- FDA-approved adjunct

*Future Targets:*
- Resolution agonists (resolvins)
- Anti-cytokine therapies
- RANKL inhibition (research)
- Complement modulation

**Laser and Photodynamic Therapy:**

*LANAP Protocol:*
- Nd:YAG laser
- Selective tissue removal
- Clot formation
- Controversial evidence

*Photodynamic Therapy:*
- Photosensitizer + light
- Adjunctive bacterial kill
- Pocket disinfection
- Mixed clinical results

## Systemic Connections

**Cardiovascular Disease:**

*Evidence:*
- 1.5-2x increased CVD risk
- Periodontal bacteria in plaques
- Systemic inflammation (CRP)
- Shared risk factors

*Mechanisms:*
- Bacteremia → endothelial injury
- Chronic inflammation → atherosclerosis
- Molecular mimicry possible
- Treatment studies ongoing

**Diabetes Mellitus:**

*Bidirectional Relationship:*
- Diabetes → 2-3x periodontitis risk
- Periodontitis → impaired glycemic control
- Treatment reduces HbA1c ~0.4%

*Mechanisms:*
- AGE accumulation
- Impaired neutrophils
- Exaggerated inflammation
- Delayed healing

*Clinical Implications:*
- Screen diabetics for periodontitis
- Periodontal care improves diabetes control
- ADA/AAP joint statement

**Adverse Pregnancy Outcomes:**

*Associations:*
- Preterm birth OR ~1.6
- Low birth weight
- Preeclampsia

*Mechanisms:*
- Hematogenous bacterial spread
- F. nucleatum crosses placenta
- Inflammatory mediators

*Treatment Studies:*
- Safe during pregnancy
- Prevention of APO: Mixed results

**Rheumatoid Arthritis:**

*P. gingivalis Connection:*
- PPAD enzyme citrullinates proteins
- Anti-citrullinated protein antibodies (ACPA)
- Potential RA trigger/amplifier
- Treatment may improve RA (preliminary)`,
      keyTerms: [
        { term: 'gingipains', definition: 'Cysteine proteases of P. gingivalis that cleave host proteins and manipulate complement' },
        { term: 'PPAD', definition: 'Peptidylarginine Deiminase from P. gingivalis; citrullinates proteins, linked to RA' },
        { term: 'PDLSCs', definition: 'Periodontal Ligament Stem Cells; multipotent cells for regenerative therapy' },
        { term: 'LANAP', definition: 'Laser Assisted New Attachment Procedure; Nd:YAG laser protocol' },
        { term: 'CBCT', definition: 'Cone Beam Computed Tomography; 3D imaging for periodontal assessment' },
        { term: 'NETosis', definition: 'Release of Neutrophil Extracellular Traps; can cause collateral tissue damage' },
      ],
      clinicalNotes: 'The keystone pathogen model explains how low-abundance P. gingivalis drives community-wide dysbiosis. MMP-8 testing (PerioSafe) may identify active disease progression. Regeneration is predictable only in specific defect morphologies (narrow intrabony, 3-wall). Host modulation with SDD is FDA-approved but underutilized. The diabetes-periodontitis bidirectional relationship has strong evidence - treat aggressively in diabetics.',
    },
    5: {
      level: 5,
      summary: 'Contemporary periodontology integrates systems biology, microbiome engineering, precision medicine frameworks, and advanced regenerative strategies to develop personalized approaches to disease prediction, prevention, and therapy with implications for systemic health management.',
      explanation: `## Systems Biology Approach

**Network Analysis:**

*Inflammatory Networks:*
- Highly redundant pathways
- Hub nodes as therapeutic targets
- Crosstalk between systems
- Predictive modeling applications

*Integration Levels:*
| Level | Data Type | Application |
|-------|-----------|-------------|
| Genome | SNP profiles | Risk prediction |
| Transcriptome | Gene expression | Disease activity |
| Proteome | Protein profiles | Biomarkers |
| Metabolome | Metabolites | Functional status |
| Microbiome | Community composition | Dysbiosis detection |
| Exposome | Environmental factors | Risk modification |

**Machine Learning Applications:**

*Predictive Modeling:*
- Disease progression prediction
- Treatment response prediction
- Personalized maintenance intervals
- Integration of multi-omics data

*Radiographic AI:*
- Automated bone loss detection
- Consistency improvement
- Screening applications
- Monitoring over time

## Microbiome Engineering

**Community Modification:**

*Targeted Approaches:*
| Strategy | Mechanism | Status |
|----------|-----------|--------|
| STAMPs | Selective pathogen killing | Research |
| Bacteriophages | P. gingivalis specific | Preclinical |
| Probiotics | Competitive exclusion | Limited evidence |
| Prebiotics | Promote beneficial species | Emerging |

*Ecological Interventions:*
- Arginine supplementation (raises pH)
- Nitrate modulation (salivary nitrate)
- Oxygen/oxidation modulation
- Community resilience enhancement

**Full-Mouth Disinfection Concept:**

*One-Stage Full-Mouth Approach:*
- Complete debridement in 24 hours
- Prevent cross-contamination
- Adjunctive antimicrobials
- Controversy: Similar outcomes to quadrant approach in most studies

## Precision Periodontics

**Personalized Risk Assessment:**

*Multi-Level Integration:*
\`\`\`
Risk Score = f(Clinical + Microbiome + Biomarkers + Genetics + Lifestyle)
\`\`\`

*Clinical Implementation:*
| Risk Category | Characteristics | Protocol |
|---------------|-----------------|----------|
| Low | Minimal disease, no risk factors | Annual monitoring |
| Moderate | Mild disease, some risk factors | 6-month SPT |
| High | Moderate disease, significant risk | 3-4 month SPT, adjuncts |
| Very High | Severe disease, multiple risks | Intensive protocol |

**Pharmacogenomics:**

*Drug Metabolism:*
- CYP enzyme polymorphisms
- Antibiotic effectiveness prediction
- Personalized dosing

*Drug Response:*
- Host modulation responders
- Anti-inflammatory response variation
- Future individualization

## Advanced Regeneration

**Tissue Engineering:**

*Cell-Based Approaches:*
- PDL stem cells
- Dental pulp stem cells
- Adipose-derived stem cells
- iPSC-derived cells (research)

*Scaffolds and Matrices:*
| Type | Characteristics | Applications |
|------|----------------|--------------|
| Collagen | Natural, biocompatible | GTR, soft tissue |
| Synthetic polymers | Tunable, reproducible | Research |
| Decellularized ECM | Tissue-specific cues | Emerging |
| 3D-printed | Custom geometry | Future |

*Growth Factor Delivery:*
- Controlled release systems
- Sequential delivery
- Biomimetic gradients
- Gene therapy approaches

**Whole Tooth Regeneration:**

*Research Status:*
- Proof of concept in animals
- Major challenges remain
- Vascularization, innervation, eruption
- Clinical application distant

## Resolution-Based Therapeutics

**Pro-Resolving Mediators:**

*Classes and Functions:*
| Class | Precursor | Key Actions |
|-------|-----------|-------------|
| Lipoxin A4 | Arachidonic acid | Stop PMN recruitment |
| Resolvin E1 | EPA | Reduce inflammation |
| Resolvin D1-5 | DHA | Promote regeneration |
| Maresin 1 | DHA | Macrophage switching |

*Therapeutic Development:*
- Resolvin E1 analogs in trials
- Demonstrated bone sparing in animal models
- Shift from anti-inflammation to pro-resolution
- Paradigm change in treatment philosophy

**Omega-3 Fatty Acids:**

*Clinical Evidence:*
- SPM precursor supplementation
- Meta-analysis: Modest clinical benefit
- Adjunctive to mechanical therapy
- Not yet standard of care

## Systemic Health Integration

**Periodontitis as Systemic Inflammatory Load:**

*Chronic Inflammation:*
- Elevated CRP, IL-6
- Contributes to systemic burden
- Treatment reduces markers
- Part of inflammaging

**Integrated Care Models:**

*Medical-Dental Collaboration:*
| Condition | Integration |
|-----------|-------------|
| Diabetes | Bidirectional referral, HbA1c monitoring |
| CVD | Risk assessment, inflammation monitoring |
| CKD | Shared inflammatory pathways |
| Pregnancy | Prenatal dental care |
| Rheumatoid arthritis | Shared pathogen focus |

*Value-Based Frameworks:*
- Periodontal health as quality metric
- Cost-effectiveness of prevention
- Population health approaches
- Accountable care models

## Research Frontiers

**Microbiome Therapeutics:**

*Next Generation:*
- Defined community transplant
- Engineered probiotics
- Postbiotics (metabolites)
- Phage cocktails

**Immunotherapy:**

*Concepts:*
- Tolerogenic approaches
- Vaccine development (research)
- Checkpoint modulation
- Regulatory T-cell enhancement

**Digital Health:**

*Applications:*
- Remote monitoring
- AI-assisted diagnosis
- Wearable biomarker sensing
- Predictive analytics
- Population surveillance

## Clinical Translation

**Current Evidence-Based Practice:**

1. Stage and grade all periodontitis
2. Smoking cessation is therapeutic intervention
3. Non-surgical therapy first line for most
4. Regeneration for specific defects only
5. Maintenance interval based on risk
6. Systemic health integration essential

**Emerging Standards:**

1. Point-of-care biomarker testing
2. Microbiome-guided therapy
3. Precision prevention protocols
4. Resolution-targeted adjuncts
5. Host modulation integration
6. Digital monitoring tools`,
      keyTerms: [
        { term: 'STAMPs', definition: 'Specifically Targeted Antimicrobial Peptides; precision elimination of pathogens' },
        { term: 'Resolvin E1', definition: 'EPA-derived specialized pro-resolving mediator with therapeutic potential in periodontitis' },
        { term: 'inflammaging', definition: 'Chronic low-grade inflammation associated with aging; periodontitis contributes' },
        { term: 'multi-omics', definition: 'Integration of genomics, proteomics, metabolomics, microbiomics for comprehensive analysis' },
        { term: 'postbiotics', definition: 'Beneficial bacterial metabolites or components, not live organisms' },
        { term: 'digital phenotyping', definition: 'Continuous data collection from digital devices for health monitoring' },
      ],
      clinicalNotes: `Translation to practice priorities:
1. The 2017 classification is now standard - document stage and grade for all patients
2. Biomarker testing (MMP-8) increasingly available for risk stratification
3. Resolution biology offers new therapeutic paradigm beyond anti-inflammation
4. Medical-dental integration is evidence-based for diabetes, CVD risk
5. AI-assisted radiographic interpretation improving and approaching clinical use
6. Microbiome therapeutics are research-stage but conceptually sound
7. Precision maintenance intervals based on individual risk optimize outcomes
8. Periodontal care affects systemic health - advocate for integration into medical care`,
    },
  },

  media: [
    {
      id: 'periodontitis-radiograph',
      type: 'image',
      filename: 'periodontitis-bone-loss-xray.jpg',
      title: 'Periodontitis Bone Loss',
      description: 'Radiograph showing horizontal and vertical alveolar bone loss',
    },
    {
      id: 'pocket-formation',
      type: 'diagram',
      filename: 'periodontal-pocket-formation.svg',
      title: 'Periodontal Pocket Formation',
      description: 'Cross-section showing progression from healthy sulcus to deep pocket',
    },
  ],

  citations: [
    {
      id: 'tonetti-2018-staging',
      type: 'article',
      title: 'Staging and grading of periodontitis',
      authors: ['Tonetti, M.S.', 'Greenwell, H.', 'Kornman, K.S.'],
      source: 'Journal of Clinical Periodontology',
    },
    {
      id: 'lang-lindhe',
      type: 'textbook',
      title: 'Clinical Periodontology and Implant Dentistry',
      authors: ['Lang, N.P.', 'Lindhe, J.'],
      source: 'Wiley-Blackwell',
    },
  ],

  crossReferences: [
    { targetId: 'condition-gingivitis', targetType: 'condition', relationship: 'related', label: 'Gingivitis' },
    { targetId: 'condition-oral-systemic-health', targetType: 'condition', relationship: 'related', label: 'Oral-Systemic Health' },
    { targetId: 'topic-professional-cleanings', targetType: 'topic', relationship: 'see-also', label: 'Professional Cleanings' },
  ],

  tags: {
    systems: ['digestive', 'dental', 'immune'],
    structures: ['gingiva', 'periodontium', 'alveolar bone'],
    topics: ['pathology', 'treatment', 'systemic connections'],
    keywords: ['periodontitis', 'periodontal disease', 'gum disease', 'bone loss', 'scaling'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default periodontitis;
