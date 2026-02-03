/**
 * Wound Healing Phases
 *
 * Comprehensive content on the four overlapping phases of wound healing:
 * hemostasis, inflammation, proliferation, and remodeling.
 */

import { EducationalContent } from '../types';

export const woundHealingPhases: EducationalContent = {
  id: 'wound-care-healing-phases',
  type: 'process',
  name: 'Wound Healing Phases',
  alternateNames: ['Stages of Wound Healing', 'Tissue Repair Process', 'Wound Repair Cascade'],

  levels: {
    1: {
      level: 1,
      summary: 'When you get a cut or scrape, your body fixes it in four main steps that overlap with each other.',
      explanation: `When you get hurt and your skin is broken, your body starts fixing itself right away. There are four main steps, and they overlap like waves:

## Step 1: Stopping the Bleeding (Minutes)

When you first get hurt:
- Your blood vessels squeeze tight to slow bleeding
- Special blood cells called platelets stick together like a plug
- A clot forms like a scab to seal the wound
- This usually happens in the first few minutes

## Step 2: Fighting Germs (Days 1-4)

Your body sends helper cells to clean up:
- The area gets red, warm, and a bit swollen - this is normal!
- White blood cells rush in like soldiers to fight germs
- Dead cells and dirt get cleaned out
- You might see some clear or slightly yellow fluid (this is good!)

## Step 3: Building New Skin (Days 4-21)

Your body starts rebuilding:
- New tiny blood vessels grow to bring food to the healing area
- New skin cells grow from the edges toward the middle
- The wound gets smaller as new tissue fills it in
- Pink, bumpy tissue called granulation tissue forms

## Step 4: Making the Skin Stronger (Weeks to Years)

The final fixing stage:
- The new tissue gets reorganized and stronger
- The scar may look red at first, then fade
- The healed skin is never quite as strong as before (about 80%)
- This step can take months or even years

**What helps healing:**
- Keep the wound clean and protected
- Eat healthy foods with protein
- Get enough rest
- Don't pick at scabs!`,
      keyTerms: [
        { term: 'scab', definition: 'A hard crust that forms over a wound to protect it while healing' },
        { term: 'platelets', definition: 'Tiny blood cells that help stop bleeding by sticking together' },
        { term: 'white blood cells', definition: 'Blood cells that fight germs and clean up damaged tissue' },
        { term: 'scar', definition: 'The mark left on your skin after a wound heals' },
      ],
      analogies: [
        'Wound healing is like fixing a hole in a road - first you stop traffic (bleeding), then clean up debris (inflammation), then fill in the hole (proliferation), and finally smooth and seal the surface (remodeling).',
        'The healing process is like a relay race where each runner (phase) starts before the previous one finishes.',
      ],
      examples: [
        'When you scrape your knee, it bleeds for a minute, gets red and puffy for a few days, then forms pink new skin that eventually leaves a pale scar.',
        'A paper cut stops bleeding quickly, feels sore for a day or two, and usually heals completely in about a week.',
      ],
    },

    2: {
      level: 2,
      summary: 'Wound healing occurs in four overlapping phases: hemostasis (bleeding control), inflammation (immune response), proliferation (tissue rebuilding), and remodeling (strengthening).',
      explanation: `## Overview of Wound Healing

Wound healing is a complex, coordinated process that begins immediately after injury. The four phases overlap and work together to restore tissue integrity.

## Phase 1: Hemostasis (0-Minutes)

**Purpose:** Stop bleeding and create initial wound closure

**Process:**
1. **Vascular response:** Blood vessels constrict (vasoconstriction) to reduce blood flow
2. **Platelet activation:** Platelets stick to damaged tissue and each other
3. **Coagulation cascade:** Proteins in blood form a fibrin mesh
4. **Clot formation:** Platelets + fibrin = blood clot (scab on surface)

**Timeline:** Begins immediately, completed within minutes

## Phase 2: Inflammation (Days 1-4)

**Purpose:** Clean the wound and prevent infection

**Key events:**
- Blood vessels dilate (open up), causing redness and warmth
- Fluid leaks into tissue, causing swelling
- White blood cells arrive:
  - **Neutrophils** (first 24-48 hours): Kill bacteria, remove debris
  - **Macrophages** (48-72 hours): "Clean up crew," also signal other cells

**Signs of normal inflammation:**
- Redness (rubor)
- Heat (calor)
- Swelling (tumor)
- Pain (dolor)
- These signs decrease after 3-4 days in normal healing

## Phase 3: Proliferation (Days 4-21)

**Purpose:** Rebuild tissue and close the wound

**Key processes:**
1. **Angiogenesis:** New blood vessels grow into the wound
2. **Granulation tissue:** Pink, bumpy tissue forms at the wound base
3. **Epithelialization:** Skin cells grow from wound edges inward
4. **Wound contraction:** Wound edges pull together to reduce size

**Important cells:**
- **Fibroblasts:** Make collagen (structural protein)
- **Keratinocytes:** Form new skin surface
- **Endothelial cells:** Create new blood vessels

## Phase 4: Remodeling (3 Weeks - 2 Years)

**Purpose:** Strengthen and reorganize new tissue

**What happens:**
- Type III collagen is replaced by stronger Type I collagen
- Collagen fibers reorganize along stress lines
- Extra blood vessels regress (go away)
- Scar matures: red to pink to pale

**Final outcome:**
- Maximum tensile strength: ~80% of original
- Scar tissue never has sweat glands, hair follicles, or normal sensation

## Factors Affecting Healing

| Factor | Effect on Healing |
|--------|------------------|
| Age | Slower healing in elderly |
| Nutrition | Protein, vitamin C, zinc needed |
| Diabetes | Delayed healing, infection risk |
| Smoking | Reduced blood flow, delayed healing |
| Medications | Steroids slow healing |
| Infection | Prolongs inflammation phase |
| Moisture | Moist wounds heal faster |`,
      keyTerms: [
        { term: 'hemostasis', definition: 'The process of stopping bleeding through vessel constriction, platelet plugs, and blood clotting', pronunciation: 'hee-moh-STAY-sis' },
        { term: 'inflammation', definition: 'The body\'s protective response involving redness, heat, swelling, and pain that helps fight infection and clean wounds' },
        { term: 'proliferation', definition: 'The rebuilding phase where new blood vessels, tissue, and skin form', pronunciation: 'pro-lif-er-AY-shun' },
        { term: 'remodeling', definition: 'The final phase where scar tissue is reorganized and strengthened' },
        { term: 'granulation tissue', definition: 'Pink, bumpy tissue with new blood vessels that fills in wounds during healing' },
        { term: 'fibroblasts', definition: 'Cells that produce collagen and other structural proteins to rebuild tissue' },
      ],
      analogies: [
        'The four phases are like emergency response to a disaster: first responders stop immediate danger (hemostasis), police secure the scene (inflammation), construction crews rebuild (proliferation), and city planners improve infrastructure (remodeling).',
      ],
      clinicalNotes: 'Normal inflammation should begin to subside after 3-4 days. If redness, warmth, and swelling continue to increase after this time, infection should be suspected.',
    },

    3: {
      level: 3,
      summary: 'Wound healing involves hemostasis via the coagulation cascade, inflammation with sequential neutrophil and macrophage infiltration, proliferation with angiogenesis and re-epithelialization, and remodeling with collagen maturation.',
      explanation: `## Molecular and Cellular Mechanisms of Wound Healing

### Phase 1: Hemostasis

**Vascular Response:**
- Immediate vasoconstriction mediated by endothelin, thromboxane A2
- Exposed subendothelial collagen activates platelets
- Duration: seconds to minutes

**Platelet Activation:**
- Adhesion via von Willebrand factor (vWF) binding to GPIb
- Activation by collagen, thrombin, ADP
- Aggregation via GPIIb/IIIa crosslinking with fibrinogen
- Alpha granule release: PDGF, TGF-beta, fibrinogen
- Dense granule release: ADP, serotonin, calcium

**Coagulation Cascade:**
- Extrinsic pathway: Tissue factor + Factor VII
- Intrinsic pathway: Contact activation (XII -> XI -> IX -> VIII)
- Common pathway: X -> prothrombin -> thrombin -> fibrinogen -> fibrin
- Fibrin mesh stabilized by Factor XIIIa (crosslinking)

### Phase 2: Inflammation

**Early Inflammation (0-48 hours):**
- Vasodilation: histamine, prostaglandins, NO
- Increased vascular permeability: VEGF, histamine
- Neutrophil recruitment:
  - Rolling: selectins (E, P, L)
  - Adhesion: integrins (LFA-1, Mac-1)
  - Transmigration: PECAM-1, chemokines (IL-8, C5a)
- Neutrophil function: phagocytosis, ROS generation, NETs

**Late Inflammation (48-96 hours):**
- Macrophage recruitment via MCP-1, MIP-1alpha
- Macrophage phenotypes:
  - M1 (pro-inflammatory): TNF-alpha, IL-1, IL-6, iNOS
  - M2 (pro-healing): IL-10, TGF-beta, arginase, VEGF
- Debris clearance and growth factor release
- Transition signal: Resolution of inflammation critical for progression

### Phase 3: Proliferation

**Angiogenesis:**
- Triggered by hypoxia, VEGF, FGF-2
- Endothelial cell migration and proliferation
- Tube formation and anastomosis
- Pericyte recruitment for vessel stabilization

**Fibroplasia and ECM Deposition:**
- Fibroblast migration (PDGF, TGF-beta stimulated)
- Myofibroblast differentiation (alpha-SMA expression)
- ECM production:
  - Type III collagen (initially)
  - Fibronectin, hyaluronic acid
  - Proteoglycans

**Granulation Tissue:**
- Composition: fibroblasts, myofibroblasts, neovasculature, inflammatory cells, ECM
- Clinically appears as pink/red, moist, granular surface
- Friable, bleeds easily (good sign)

**Re-epithelialization:**
- Keratinocyte activation at wound edge
- Migration: "leapfrog" or "train" pattern
- Proliferation in zone behind leading edge
- Contact inhibition when edges meet
- Basement membrane restoration

**Wound Contraction:**
- Mediated by myofibroblasts
- Alpha-SMA-positive, generate contractile force
- Reduces wound surface area by 5-10% per day
- More significant in open wounds vs. sutured

### Phase 4: Remodeling

**Collagen Maturation:**
- Type III collagen replaced by Type I (ratio: 4:1 initially -> 4:1 Type I)
- Collagen crosslinking increases tensile strength
- Fiber realignment along stress lines
- MMP/TIMP balance regulates turnover

**Scar Maturation:**
- Vascular regression
- Decreased cellularity
- Continued collagen remodeling for 12-24 months
- Maximum tensile strength: 80% of unwounded skin

**Scar Types:**
- Normal (mature): Flat, pale, soft
- Hypertrophic: Raised, stays within wound boundaries
- Keloid: Raised, extends beyond wound boundaries

### Growth Factors in Wound Healing

| Growth Factor | Source | Function |
|--------------|--------|----------|
| PDGF | Platelets, macrophages | Fibroblast/SMC migration, proliferation |
| TGF-beta | Platelets, macrophages, fibroblasts | ECM synthesis, myofibroblast differentiation |
| VEGF | Macrophages, keratinocytes | Angiogenesis, vascular permeability |
| EGF | Platelets, macrophages | Keratinocyte proliferation, migration |
| FGF-2 | Macrophages, fibroblasts | Angiogenesis, fibroblast proliferation |
| KGF/FGF-7 | Fibroblasts | Keratinocyte proliferation |

### Wound Healing Types

- **Primary intention:** Clean, sutured wound; minimal granulation tissue
- **Secondary intention:** Open wound; heals by contraction and epithelialization
- **Tertiary intention (delayed primary):** Wound left open initially, then sutured after 4-5 days`,
      keyTerms: [
        { term: 'coagulation cascade', definition: 'Sequential activation of clotting factors leading to fibrin clot formation; includes intrinsic, extrinsic, and common pathways' },
        { term: 'angiogenesis', definition: 'Formation of new blood vessels from pre-existing vessels, essential for granulation tissue formation', pronunciation: 'an-jee-oh-JEN-eh-sis' },
        { term: 'myofibroblast', definition: 'Specialized fibroblast expressing alpha-smooth muscle actin; responsible for wound contraction and ECM production' },
        { term: 're-epithelialization', definition: 'Migration and proliferation of keratinocytes to restore the epithelial barrier' },
        { term: 'MMP', definition: 'Matrix metalloproteinases; enzymes that degrade ECM components during remodeling' },
        { term: 'VEGF', definition: 'Vascular endothelial growth factor; key mediator of angiogenesis', pronunciation: 'vee-gee-eff' },
      ],
      clinicalNotes: 'Wounds stuck in the inflammatory phase (chronic wounds) show persistent neutrophilic infiltrate, elevated MMP levels, and degraded growth factors. Addressing underlying causes (ischemia, infection, moisture imbalance) is essential to restart the healing cascade.',
    },

    4: {
      level: 4,
      summary: 'Wound healing requires precise spatiotemporal coordination of hemostatic, inflammatory, proliferative, and remodeling phases, mediated by complex signaling networks involving growth factors, cytokines, and matrix components.',
      explanation: `## Advanced Wound Healing Physiology

### Temporal Orchestration

The wound healing phases are not discrete but represent overlapping waves of cellular and molecular activity. Dysregulation of phase transitions underlies most chronic wound pathologies.

**Phase Transition Checkpoints:**
1. Hemostasis -> Inflammation: Platelet degranulation releases chemokines
2. Inflammation -> Proliferation: Macrophage phenotype switch (M1 to M2)
3. Proliferation -> Remodeling: Growth factor withdrawal, apoptosis of myofibroblasts

### Hemostasis: Advanced Concepts

**Platelet Biology:**
- Thrombin generation on activated platelet surface (phosphatidylserine exposure)
- Platelet factor 4 (PF4): Inhibits angiogenesis, recruits neutrophils
- Sphingosine-1-phosphate (S1P): Regulates endothelial barrier function
- Microparticle release: Carries coagulation factors, miRNAs

**Fibrin Matrix Functions:**
- Provisional scaffold for cell migration
- Growth factor reservoir (binds VEGF, FGF, PDGF)
- Fibrin degradation products are chemotactic

### Inflammation: Molecular Resolution

**Neutrophil Fate:**
- Apoptosis and efferocytosis by macrophages
- NETosis in infected wounds (extracellular trap formation)
- Reverse migration (rare, pro-inflammatory outcome)

**Macrophage Plasticity:**
M1/M2 represents a spectrum, not binary states:
- DAMPs, IFN-gamma, LPS -> M1 polarization (classical)
- IL-4, IL-13, apoptotic cells, IL-10 -> M2 polarization (alternative)
- M1 predominance early, M2 predominance required for progression

**Resolution of Inflammation:**
- Lipid mediator class-switching: Prostaglandins -> Lipoxins, Resolvins, Protectins
- Specialized pro-resolving mediators (SPMs):
  - Lipoxin A4: Stops neutrophil recruitment, stimulates efferocytosis
  - Resolvin D1/E1: Anti-inflammatory, pro-resolution
  - Maresin-1: Promotes M2 polarization, reduces pain

### Proliferation: Fibroblast Heterogeneity

**Fibroblast Subpopulations:**
- Papillary dermal fibroblasts: Thin collagen fibrils
- Reticular dermal fibroblasts: Thick collagen bundles
- Lineage-traced populations: En1-lineage fibroblasts responsible for most scar formation

**Myofibroblast Regulation:**
- Differentiation: TGF-beta1 + mechanical tension + ED-A fibronectin
- Alpha-SMA expression: Contractile phenotype
- Persistence vs. apoptosis: Determines scar outcome
- Mechanotransduction: YAP/TAZ pathway activation

**ECM Dynamics:**
- Provisional matrix: Fibronectin, fibrin, hyaluronan (HA)
- Transitional matrix: Type III collagen, SPARC, tenascin-C
- Mature matrix: Type I collagen, decorin, lumican
- Matricryptic sites: Cryptic peptides released during ECM remodeling

### Remodeling: Biomechanical Considerations

**Collagen Crosslinking:**
- Enzymatic (LOX): Lysyl oxidase-mediated
- Non-enzymatic (AGEs): Advanced glycation end products (increased in diabetes)
- Crosslink density determines tissue stiffness

**Scar Contracture:**
- Continued myofibroblast activity
- Collagen organization along tension lines
- Wolff's law: Tissue remodels in response to mechanical stress

**Fetal vs. Adult Healing:**
- Fetal (early gestation): Scarless healing
- Differences: Lower TGF-beta1/beta2, higher TGF-beta3, rapid re-epithelialization, minimal inflammation

### Impaired Healing Pathophysiology

**Diabetes:**
- Hyperglycemia: AGE formation, oxidative stress
- Neuropathy: Reduced protective sensation -> repeated trauma
- Vasculopathy: Impaired angiogenesis, O2 delivery
- Immune dysfunction: Impaired neutrophil/macrophage function
- Biofilm formation: Chronic bacterial colonization

**Aging:**
- Delayed inflammatory response
- Reduced angiogenesis
- Decreased fibroblast proliferation
- Increased MMP:TIMP ratio
- Reduced growth factor responsiveness

**Venous Insufficiency:**
- Venous hypertension -> capillary leak
- Fibrin cuff hypothesis (debated)
- Iron deposition and hemosiderin
- Lipodermatosclerosis: Chronic fibrosis

**Arterial Insufficiency:**
- Critical limb ischemia
- Tissue hypoxia limits all healing phases
- Revascularization essential before healing can proceed

### Biomarkers of Healing

| Biomarker | Indicates |
|-----------|----------|
| MMP-9/TIMP-1 ratio | Elevated in chronic wounds |
| IL-1beta, TNF-alpha | Persistent inflammation |
| VEGF, PDGF | Angiogenic/growth factor activity |
| Hydroxyproline | Collagen content |
| Bacterial load | >10^5 CFU/g = infected |

### Emerging Concepts

**Wound Microbiome:**
- Diverse microbial communities in chronic wounds
- Biofilm: Antibiotic-tolerant bacterial communities in EPS matrix
- Dysbiosis correlates with impaired healing
- Quorum sensing: Bacterial communication affecting virulence

**Epigenetic Regulation:**
- DNA methylation patterns in chronic wounds
- Histone modifications affecting gene expression
- miRNAs: miR-21, miR-132 promote healing; miR-155, miR-200 impair healing

**Mechanobiology:**
- Negative pressure wound therapy (NPWT): Macrodeformation, microdeformation, fluid removal
- Wound offloading: Reduces mechanical stress on pressure ulcers, diabetic foot ulcers`,
      keyTerms: [
        { term: 'specialized pro-resolving mediators', definition: 'Lipid-derived molecules (lipoxins, resolvins, protectins, maresins) that actively resolve inflammation and promote healing' },
        { term: 'mechanotransduction', definition: 'Conversion of mechanical signals into biochemical responses; affects fibroblast behavior, ECM production, and scar formation' },
        { term: 'efferocytosis', definition: 'Phagocytic clearance of apoptotic cells, particularly neutrophils by macrophages; triggers anti-inflammatory signaling', pronunciation: 'ef-er-oh-sy-TOE-sis' },
        { term: 'biofilm', definition: 'Structured microbial community encased in self-produced extracellular polymeric substance; resistant to antibiotics and host immunity' },
        { term: 'matricryptic sites', definition: 'Biologically active peptide sequences exposed during ECM degradation that can signal to cells' },
        { term: 'LOX', definition: 'Lysyl oxidase; enzyme catalyzing collagen and elastin crosslinking, critical for tissue strength' },
      ],
      clinicalNotes: 'Chronic wound assessment should include evaluation for: 1) Persistent bacterial biofilm requiring debridement, 2) Imbalanced proteases (elevated MMPs), 3) Senescent cells failing to respond to growth factors, 4) Underlying arterial insufficiency or venous hypertension, 5) Glycemic control in diabetics.',
    },

    5: {
      level: 5,
      summary: 'Contemporary wound healing science integrates molecular biology, tissue engineering, regenerative medicine approaches, and translational research to develop evidence-based therapies targeting specific healing phase dysfunctions.',
      explanation: `## State-of-the-Art Wound Healing Science

### Molecular Pathways and Therapeutic Targets

**TGF-beta Signaling:**
- Three isoforms: TGF-beta1, beta2 (profibrotic); beta3 (anti-scarring)
- Canonical pathway: SMAD2/3 phosphorylation -> SMAD4 -> nucleus
- Non-canonical: MAPK, PI3K/Akt, Rho GTPases
- Therapeutic approaches:
  - Avotermin (TGF-beta3): Phase III trials in scar reduction (discontinued)
  - Anti-TGF-beta1 antibodies: Studied in fibrosis
  - SMAD7 overexpression: Blocks signaling

**Wnt/beta-catenin Pathway:**
- Essential for skin appendage regeneration
- Activated Wnt enhances wound closure but may increase scarring
- Hair follicle neogenesis in wound healing (murine models)
- Therapeutic potential: Wnt agonists for regeneration, antagonists for scar reduction

**Notch Signaling:**
- Keratinocyte differentiation and migration
- Vascular development
- Cross-talk with TGF-beta pathway

**Hippo/YAP-TAZ Pathway:**
- Mechanosensing and growth control
- YAP activation in stiff substrates -> fibrosis
- Verteporfin (YAP inhibitor) reduces scarring in preclinical models

### Cellular Therapies

**Stem Cell Approaches:**
- Mesenchymal stem cells (MSCs):
  - Bone marrow-derived, adipose-derived, umbilical cord
  - Paracrine effects > direct differentiation
  - Clinical trials: Mixed results, standardization challenges
  - Secretome/exosomes: Cell-free alternative

- Induced pluripotent stem cells (iPSCs):
  - Patient-specific cell source
  - Differentiation to keratinocytes, fibroblasts, endothelial cells
  - Teratoma risk requires differentiation before application

**Skin Substitutes:**
- Acellular matrices: AlloDerm, Integra (collagen-GAG with silicone)
- Cellular products: Apligraf (neonatal fibroblasts + keratinocytes), Dermagraft
- Bioprinted constructs: Layer-by-layer deposition with multiple cell types

### Advanced Therapeutics

**Growth Factor Therapy:**
- Becaplermin (PDGF-BB): Only FDA-approved GF for wounds (diabetic foot ulcers)
  - Black box warning: Cancer risk (controversial, off-label use declining)
- rhEGF: Approved in some countries for diabetic ulcers
- Combination GF approaches: Improved efficacy in preclinical studies

**Gene Therapy:**
- VEGF gene transfer: Enhanced angiogenesis
- PDGF gene therapy: Phase I trials
- SDF-1 (CXCL12): Enhances progenitor cell recruitment
- Challenges: Delivery, duration, safety

**RNA Therapeutics:**
- miRNA mimics: miR-21, miR-132 for healing promotion
- Anti-miRs: Targeting miR-155, miR-200 in chronic wounds
- siRNA: Silencing of CTGF, specific MMPs

**Small Molecule Drugs:**
- Becaplermin alternatives in development
- LOX inhibitors for scar reduction
- Pirfenidone, nintedanib: Antifibrotics (approved for IPF, studied in skin)

### Bioengineering Approaches

**Scaffolds and Biomaterials:**
- Natural: Collagen, hyaluronic acid, silk fibroin, alginate
- Synthetic: PLGA, PCL, PEG hydrogels
- Design considerations: Porosity, degradation rate, mechanical properties
- Functionalization: Growth factor conjugation, cell adhesion peptides

**3D Bioprinting:**
- Inkjet, extrusion, laser-assisted techniques
- Bioinks: Cell-laden hydrogels
- Stratified skin constructs with appendages (experimental)
- Challenges: Vascularization, maturation, scale-up

**Electrospun Nanofibers:**
- ECM-mimetic architecture
- Controlled fiber diameter and alignment
- Drug/GF incorporation and release

### Clinical Trial Landscape

**Negative Pressure Wound Therapy (NPWT):**
- Well-established efficacy for complex wounds
- Instillation therapy (NPWTi-d): Improved biofilm disruption
- ROCF (reticulated open-cell foam) vs. gauze dressings

**Hyperbaric Oxygen Therapy (HBOT):**
- Increased dissolved O2 -> improved healing in hypoxic wounds
- Evidence strongest for diabetic foot ulcers
- UHMS guidelines: 40 treatments typical protocol

**Electrical Stimulation:**
- Endogenous wound electric fields guide cell migration
- Low-frequency ES: Some evidence for pressure ulcer healing
- Pulsed radiofrequency: Modulates inflammation

**Extracorporeal Shockwave Therapy (ESWT):**
- Mechanotransduction, angiogenesis stimulation
- Growing evidence for chronic wounds
- Non-invasive, well-tolerated

### Regenerative Medicine Paradigm

**Scarless Healing Goals:**
- Understanding fetal/oral mucosa healing
- Reducing inflammatory response
- Promoting regeneration over repair
- Achieving skin appendage (hair, gland) regeneration

**Axolotl Model Insights:**
- Complete limb regeneration
- Blastema formation
- Dedifferentiation and redifferentiation
- Translational potential: Identify human regenerative capacities

**Skin Organoids:**
- Self-organizing 3D cultures
- Hair follicle neogenesis in culture
- Disease modeling
- Transplantation potential

### Precision Medicine in Wound Care

**Biomarker-Guided Therapy:**
- Proteomic profiling of wound fluid
- MMP/TIMP ratios for intervention timing
- Bacterial profiling for antimicrobial selection

**Pharmacogenomics:**
- CYP450 variants affecting drug metabolism
- Sulfasalazine for pyoderma gangrenosum
- Personalized growth factor combinations

**Wound Imaging:**
- Multispectral imaging: Tissue oxygenation
- Fluorescence imaging: Bacterial detection (MolecuLight)
- Optical coherence tomography: Tissue architecture
- AI-assisted wound measurement and healing prediction

### Quality Metrics and Evidence Synthesis

**Outcome Measures:**
- Complete wound closure (gold standard)
- Percent area reduction (PAR)
- Time to healing
- Quality of life measures (CWIS, W-QoL)
- Recurrence rates (especially for pressure ulcers)

**Key Trials and Meta-analyses:**
- Cochrane reviews for dressing comparisons
- TIME framework validation
- NPWT vs. standard care meta-analyses
- Cellular product comparative effectiveness

**Implementation Science:**
- Guideline adherence challenges
- Care bundles for pressure ulcer prevention
- Telehealth wound monitoring
- Multidisciplinary wound care teams`,
      keyTerms: [
        { term: 'iPSC', definition: 'Induced pluripotent stem cell; adult cells reprogrammed to embryonic-like state capable of differentiating into any cell type', pronunciation: 'eye-P-S-C' },
        { term: 'secretome', definition: 'The complete set of proteins secreted by a cell; MSC secretome contains growth factors, cytokines, and extracellular vesicles with therapeutic potential' },
        { term: 'bioprinting', definition: 'Additive manufacturing technique using cell-laden bioinks to create 3D tissue constructs layer by layer' },
        { term: 'blastema', definition: 'Mass of dedifferentiated cells capable of regenerating lost tissue structures; formed in regenerating organisms like axolotl' },
        { term: 'TIME framework', definition: 'Wound bed preparation principles: Tissue (non-viable), Infection/Inflammation, Moisture imbalance, Edge (non-advancing)' },
        { term: 'electrospinning', definition: 'Technique using electric field to produce nanoscale fibers from polymer solutions; creates ECM-mimetic scaffolds' },
      ],
      clinicalNotes: `Evidence-Based Practice Points:

1. **Moist wound healing** remains foundational - occlusive dressings outperform dry dressings

2. **Debridement** is critical for converting chronic to acute wounds, but method selection (sharp, enzymatic, autolytic, mechanical) should match clinical situation

3. **NPWT** has strongest evidence for complex surgical wounds, traumatic wounds, and diabetic foot ulcers; consider for wounds with cavitation or high exudate

4. **Cellular products** show benefit in diabetic ulcers but are costly; use after standard treatments fail

5. **Biofilm** should be suspected in wounds non-responsive to standard care; requires aggressive debridement ± topical antimicrobials (cadexomer iodine, medical-grade honey)

6. **Compression** is essential for venous leg ulcers regardless of dressing choice

7. **Offloading** non-negotiable for diabetic foot ulcers; total contact casting is gold standard

8. **Multidisciplinary approach** improves outcomes: vascular, endocrinology, infectious disease, nutrition, wound specialists`,
    },
  },

  media: [
    {
      id: 'wound-healing-phases-diagram',
      type: 'diagram',
      filename: 'wound-healing-phases.svg',
      title: 'Four Phases of Wound Healing',
      description: 'Timeline showing overlapping hemostasis, inflammation, proliferation, and remodeling phases',
    },
    {
      id: 'granulation-tissue',
      type: 'image',
      filename: 'granulation-tissue.jpg',
      title: 'Healthy Granulation Tissue',
      description: 'Clinical appearance of granulation tissue in a healing wound',
    },
  ],

  citations: [
    {
      id: 'gurtner-nature-2008',
      type: 'article',
      title: 'Wound repair and regeneration',
      authors: ['Gurtner, G.C.', 'Werner, S.', 'Barrandon, Y.', 'Longaker, M.T.'],
      source: 'Nature',
      url: 'https://doi.org/10.1038/nature07039',
    },
    {
      id: 'singer-nejm-1999',
      type: 'article',
      title: 'Cutaneous wound healing',
      authors: ['Singer, A.J.', 'Clark, R.A.F.'],
      source: 'New England Journal of Medicine',
    },
    {
      id: 'eming-stm-2014',
      type: 'article',
      title: 'Wound repair and regeneration: Mechanisms, signaling, and translation',
      authors: ['Eming, S.A.', 'Martin, P.', 'Tomic-Canic, M.'],
      source: 'Science Translational Medicine',
    },
  ],

  crossReferences: [
    { targetId: 'wound-care-types', targetType: 'topic', relationship: 'sibling', label: 'Wound Types' },
    { targetId: 'wound-care-infection', targetType: 'topic', relationship: 'related', label: 'Signs of Infection' },
    { targetId: 'wound-care-chronic', targetType: 'topic', relationship: 'related', label: 'Chronic Wounds' },
  ],

  tags: {
    systems: ['integumentary', 'immune'],
    topics: ['wound healing', 'tissue repair', 'inflammation', 'regeneration'],
    keywords: ['hemostasis', 'inflammation', 'proliferation', 'remodeling', 'granulation', 'collagen'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      shelf: ['surgery', 'medicine'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default woundHealingPhases;
