/**
 * Coagulation & Hemostasis - Comprehensive Educational Content
 *
 * Covers primary hemostasis (platelets, vWF), secondary hemostasis
 * (coagulation cascade), fibrinolysis, anticoagulant mechanisms,
 * coagulation testing, DIC, and pharmacologic anticoagulation.
 */

import { EducationalContent } from '../../types';

export const coagulationHemostasis: EducationalContent = {
  id: 'physiology-coagulation-hemostasis',
  type: 'process',
  name: 'Coagulation & Hemostasis',
  nameEs: 'Coagulacion y Hemostasia',
  alternateNames: ['Blood Clotting', 'Hemostatic System', 'Clotting Cascade'],

  levels: {
    1: {
      level: 1,
      summary:
        'Hemostasis is how your body stops bleeding when you get a cut. It uses sticky cell fragments called platelets and special proteins to form a clot that seals the wound.',
      explanation: `## How Your Body Stops Bleeding

When you get a cut, your body works quickly to stop the bleeding. This process is called **hemostasis**.

### Step 1: Blood Vessels Squeeze Shut

Right after an injury, the damaged blood vessel tightens up to slow down blood flow. Think of it like pinching a leaky hose.

### Step 2: Platelets Form a Plug

Tiny cell fragments called **platelets** rush to the injury site and stick together, forming a temporary plug -- like putting a finger over a hole.

A sticky protein called **von Willebrand factor (vWF)** acts like glue that helps platelets stick to the damaged wall and to each other.

### Step 3: The Clot Gets Stronger

Special proteins in your blood called **clotting factors** work together in a chain reaction to build a strong mesh (called **fibrin**) over the platelet plug. This is like wrapping tape around the patch to make it stronger.

### Step 4: The Clot Dissolves

Once the wound heals, your body breaks down the clot so blood can flow normally again. This is called **fibrinolysis**.

### Why It Matters

- If clotting does not work well, you can bleed too much (like in hemophilia)
- If clotting happens too much, dangerous clots can form inside blood vessels (like a blood clot in your leg)`,
      keyTerms: [
        { term: 'hemostasis', definition: 'The process your body uses to stop bleeding' },
        { term: 'platelet', definition: 'Tiny cell fragments in blood that help form clots' },
        { term: 'clot', definition: 'A lump of blood that forms to seal a wound and stop bleeding' },
        { term: 'fibrin', definition: 'A protein that forms a mesh to strengthen a blood clot' },
      ],
      analogies: [
        'Platelets are like sandbags piled up to stop a flood -- they form a temporary barrier.',
        'Clotting factors are like a row of dominoes -- each one triggers the next until a strong clot is built.',
        'Fibrin is like a net draped over the platelet plug to hold everything in place.',
      ],
      examples: [
        'When you get a paper cut the bleeding stops in a few minutes because platelets and fibrin seal the wound.',
        'A bruise is blood that leaked under the skin because small vessels broke, but your clotting system kept it from spreading.',
      ],
      patientCounselingPoints: [
        'If you bruise easily or bleed for a long time after a cut, tell your doctor.',
        'Some medicines like aspirin and blood thinners slow down clotting on purpose to prevent dangerous clots.',
        'Staying hydrated and eating well helps your blood clot normally.',
      ],
    },

    2: {
      level: 2,
      summary:
        'Hemostasis involves three overlapping stages: vascular spasm and platelet plug formation (primary hemostasis), the coagulation cascade producing a fibrin clot (secondary hemostasis), and fibrinolysis that dissolves the clot after healing.',
      explanation: `## Overview of Hemostasis

Hemostasis has three main stages that overlap:

### 1. Primary Hemostasis -- Platelet Plug

When a blood vessel is injured, collagen in the vessel wall is exposed. **Von Willebrand factor (vWF)** binds to that collagen and acts as a bridge for platelets to attach (platelet adhesion).

Once attached, platelets become activated and release chemicals (ADP, thromboxane A2) that recruit more platelets. They change shape and stick together -- this is **platelet aggregation**. The result is a soft **platelet plug**.

### 2. Secondary Hemostasis -- Coagulation Cascade

The platelet plug alone is fragile. A series of clotting factor proteins (numbered with Roman numerals like Factor VII, Factor X) activate each other in a chain reaction called the **coagulation cascade**.

There are two starting pathways:
- **Extrinsic pathway** -- triggered by tissue factor released from damaged cells (fast)
- **Intrinsic pathway** -- triggered by contact with exposed collagen (slower)

Both pathways converge into the **common pathway**, which produces **thrombin**. Thrombin converts **fibrinogen** (a soluble protein) into **fibrin** (an insoluble mesh) that reinforces the platelet plug.

### 3. Fibrinolysis -- Clot Breakdown

After healing, the enzyme **plasmin** breaks down the fibrin mesh, dissolving the clot so normal blood flow returns.

### Anticoagulant Safety Mechanisms

Your body also has built-in brakes to prevent clotting from going out of control:
- **Antithrombin** -- neutralizes thrombin and other clotting factors
- **Protein C and Protein S** -- inactivate certain clotting factors

### Common Lab Tests

- **PT / INR** -- measures the extrinsic and common pathways
- **aPTT** -- measures the intrinsic and common pathways
- **Platelet count** -- checks if you have enough platelets
- **Fibrinogen level** -- measures the clot-building protein

### Medications That Affect Clotting

- **Aspirin** -- blocks platelet activation
- **Warfarin (Coumadin)** -- blocks vitamin K-dependent clotting factors (monitored by INR)
- **Heparin** -- boosts antithrombin activity (monitored by aPTT)
- **DOACs** (e.g., rivaroxaban, apixaban) -- directly block specific clotting factors`,
      keyTerms: [
        { term: 'von Willebrand factor', definition: 'A protein that helps platelets stick to damaged vessel walls and to each other' },
        { term: 'coagulation cascade', definition: 'A chain reaction of clotting factor proteins that produces a fibrin clot' },
        { term: 'thrombin', definition: 'The key enzyme that converts fibrinogen into fibrin to form a clot' },
        { term: 'fibrinolysis', definition: 'The process of breaking down a fibrin clot after healing' },
        { term: 'PT/INR', definition: 'A blood test that measures how well the extrinsic clotting pathway works; used to monitor warfarin' },
        { term: 'aPTT', definition: 'A blood test that measures how well the intrinsic clotting pathway works; used to monitor heparin' },
      ],
      analogies: [
        'The coagulation cascade is like a relay race -- each runner (clotting factor) passes the baton to the next until the race is finished (fibrin clot).',
        'Antithrombin is like a referee who stops the game if things get out of hand, preventing clots from forming where they should not.',
      ],
      examples: [
        'A patient on warfarin has their INR checked regularly to make sure the dose keeps clotting in the right range.',
        'In hemophilia A, Factor VIII is missing, so the intrinsic pathway does not work properly and bleeding is prolonged.',
      ],
    },

    3: {
      level: 3,
      summary:
        'Hemostasis is a tightly regulated process comprising vascular spasm, platelet adhesion/activation/aggregation via vWF and glycoprotein receptors, the tissue factor and contact activation coagulation pathways converging on Factor Xa and thrombin generation, fibrin cross-linking by Factor XIIIa, fibrinolysis via plasmin, and endogenous anticoagulant systems including antithrombin III, protein C/S, and TFPI.',
      explanation: `## Hemostasis in Detail

### Vascular Response

Injury triggers immediate **vascular spasm** (smooth muscle contraction) mediated by endothelin-1 release from damaged endothelial cells, reducing blood flow at the site.

### Primary Hemostasis

1. **Platelet adhesion** -- Subendothelial collagen is exposed. vWF binds collagen and the platelet glycoprotein Ib (GPIb) receptor, anchoring platelets to the vessel wall.
2. **Platelet activation** -- Adherent platelets degranulate, releasing ADP and thromboxane A2 (TXA2). ADP binds P2Y12 receptors; TXA2 binds TP receptors. Both amplify platelet activation.
3. **Platelet aggregation** -- Activated platelets express GPIIb/IIIa receptors, which bind fibrinogen and vWF, cross-linking platelets into a primary hemostatic plug.

### Secondary Hemostasis -- Coagulation Cascade

The cascade is a series of serine protease zymogens activated sequentially on phospholipid surfaces in the presence of calcium.

**Extrinsic (Tissue Factor) Pathway:**
- Tissue factor (TF) from damaged cells binds Factor VIIa
- TF-VIIa complex activates Factor X (and Factor IX as cross-talk)

**Intrinsic (Contact Activation) Pathway:**
- Factor XII is activated by contact with negatively charged surfaces (collagen, kaolin)
- XIIa activates XI, XIa activates IX
- Factor IXa + Factor VIIIa (tenase complex) activates Factor X

**Common Pathway:**
- Factor Xa + Factor Va (prothrombinase complex) converts prothrombin (II) to thrombin (IIa)
- Thrombin converts fibrinogen to fibrin monomers
- Factor XIIIa (transglutaminase, activated by thrombin) cross-links fibrin, stabilizing the clot

### Fibrinolysis

- Tissue plasminogen activator (tPA) converts plasminogen to **plasmin**
- Plasmin cleaves fibrin into fibrin degradation products (FDPs) including **D-dimer**
- Regulated by plasminogen activator inhibitor-1 (PAI-1) and alpha-2-antiplasmin

### Endogenous Anticoagulant Mechanisms

| Mechanism | Target | Function |
|-----------|--------|----------|
| Antithrombin III (ATIII) | Thrombin, Xa, IXa | Serine protease inhibitor (serpin); heparin accelerates 1000-fold |
| Protein C / Protein S | Factors Va, VIIIa | Thrombomodulin-thrombin complex activates protein C; protein S is cofactor |
| TFPI | TF-VIIa-Xa complex | Inhibits initiation of extrinsic pathway |

### Coagulation Testing

- **PT (Prothrombin Time)** -- Measures extrinsic + common pathway (Factors VII, X, V, II, fibrinogen). INR normalizes PT across laboratories.
- **aPTT (Activated Partial Thromboplastin Time)** -- Measures intrinsic + common pathway (Factors XII, XI, IX, VIII, X, V, II, fibrinogen).
- **Thrombin Time (TT)** -- Measures fibrinogen to fibrin conversion.
- **Fibrinogen level** -- Quantitative; low in DIC, liver failure.
- **D-dimer** -- Elevated when fibrin is actively being broken down (DVT, PE, DIC).
- **Mixing study** -- Distinguishes factor deficiency (corrects) from inhibitor (does not correct).

### Disseminated Intravascular Coagulation (DIC)

DIC is a pathologic activation of coagulation and fibrinolysis simultaneously:
- Triggered by sepsis, trauma, malignancy, obstetric complications
- Widespread microthrombi consume platelets and clotting factors
- Leads to paradoxical bleeding (consumptive coagulopathy)
- Labs: elevated PT/aPTT, low platelets, low fibrinogen, elevated D-dimer, schistocytes on smear

### Pharmacologic Anticoagulation

| Drug Class | Mechanism | Monitoring |
|------------|-----------|------------|
| Unfractionated heparin (UFH) | Potentiates ATIII (primarily anti-IIa, anti-Xa) | aPTT |
| Low-molecular-weight heparin (LMWH) | Potentiates ATIII (primarily anti-Xa) | Anti-Xa level |
| Warfarin | Inhibits vitamin K epoxide reductase (decreases II, VII, IX, X, protein C, S) | PT/INR |
| Direct oral anticoagulants (DOACs) | Direct inhibition of thrombin (dabigatran) or Xa (rivaroxaban, apixaban, edoxaban) | Generally not monitored routinely |`,
      keyTerms: [
        { term: 'GPIb', definition: 'Platelet glycoprotein receptor that binds von Willebrand factor for platelet adhesion', pronunciation: 'gly-co-PRO-teen one-B' },
        { term: 'GPIIb/IIIa', definition: 'Platelet receptor that binds fibrinogen to cross-link platelets during aggregation', pronunciation: 'gly-co-PRO-teen two-B three-A' },
        { term: 'tissue factor', definition: 'Transmembrane protein released by damaged cells that initiates the extrinsic pathway by binding Factor VIIa' },
        { term: 'tenase complex', definition: 'Complex of Factor IXa and Factor VIIIa on phospholipid surface that activates Factor X' },
        { term: 'prothrombinase complex', definition: 'Complex of Factor Xa and Factor Va on phospholipid surface that converts prothrombin to thrombin' },
        { term: 'D-dimer', definition: 'Fibrin degradation product; elevated levels indicate active clot formation and breakdown' },
        { term: 'DIC', definition: 'Disseminated intravascular coagulation -- pathologic systemic activation of clotting causing simultaneous thrombosis and hemorrhage' },
        { term: 'thrombomodulin', definition: 'Endothelial receptor that binds thrombin and activates protein C, switching thrombin from procoagulant to anticoagulant' },
      ],
      analogies: [
        'The tenase and prothrombinase complexes are like assembly lines on a factory floor (phospholipid surface) -- components must come together on the surface with calcium to work efficiently.',
        'DIC is like an army that fires all its ammunition at once -- it runs out and can no longer defend against bleeding.',
      ],
      examples: [
        'A patient with hemophilia A (Factor VIII deficiency) has a prolonged aPTT but normal PT because only the intrinsic pathway is affected.',
        'Warfarin initially creates a transient hypercoagulable state because protein C (anticoagulant, short half-life) drops before the procoagulant factors, which is why heparin bridging is used.',
      ],
      clinicalNotes: `DIC should be suspected in any critically ill patient with unexplained bleeding, thrombocytopenia, and elevated D-dimer. Treatment focuses on the underlying cause. Supportive care includes platelets, cryoprecipitate (fibrinogen), and FFP as needed.`,
    },

    4: {
      level: 4,
      summary:
        'Hemostasis is a cell-based model of coagulation comprising initiation (TF-VIIa on TF-bearing cells), amplification (thrombin-mediated platelet and cofactor activation), and propagation (tenase/prothrombinase assembly on activated platelet surfaces), regulated by ATIII, the protein C/thrombomodulin/EPCR system, and TFPI, with fibrinolysis governed by tPA/uPA-plasminogen and inhibited by PAI-1 and TAFI.',
      explanation: `## Cell-Based Model of Coagulation

The traditional cascade model (intrinsic/extrinsic) is useful for interpreting lab tests but does not reflect in vivo physiology. The **cell-based model** better describes hemostasis through three overlapping phases occurring on different cell surfaces.

### Phase 1: Initiation (TF-bearing cell surface)

- Subendothelial fibroblasts and monocytes constitutively express **tissue factor (TF)**
- TF binds circulating Factor VIIa (trace amounts always present, ~1% of total VII)
- TF-VIIa complex activates small amounts of Factor X and Factor IX
- Factor Xa on the TF-bearing cell generates a small amount of thrombin
- This thrombin is insufficient for clot formation but critical for amplification
- TFPI rapidly shuts down this initiation by inhibiting TF-VIIa-Xa

### Phase 2: Amplification (platelet surface)

Trace thrombin generated during initiation:
- Activates platelets (PAR-1, PAR-4 receptors)
- Activates Factor V to Va (on platelet surface)
- Activates Factor VIII (dissociating it from vWF carrier) to VIIIa
- Activates Factor XI to XIa (providing positive feedback via the intrinsic pathway)

### Phase 3: Propagation (activated platelet surface)

On the activated platelet phospholipid surface:
- **Tenase complex** (IXa + VIIIa) generates large amounts of Factor Xa
- **Prothrombinase complex** (Xa + Va) generates a thrombin burst
- Thrombin burst converts fibrinogen to fibrin monomers and activates Factor XIII
- Factor XIIIa cross-links fibrin (gamma-glutamyl-epsilon-lysine bonds) creating an insoluble, stable clot

### Anticoagulant Regulation -- Molecular Detail

**Antithrombin III (Serpinc1):**
- Irreversibly inhibits thrombin (IIa), Xa, IXa, XIa, XIIa
- Heparin binding induces conformational change, increasing inhibition rate ~1000-fold
- UFH bridges ATIII to thrombin (requires chain length >= 18 saccharides); LMWH primarily catalyzes anti-Xa

**Protein C Pathway:**
- Thrombin binds thrombomodulin on intact endothelium
- Thrombin-thrombomodulin activates protein C (APC) -- enhanced by endothelial protein C receptor (EPCR)
- APC + protein S proteolytically inactivate Factors Va and VIIIa
- Factor V Leiden mutation (R506Q) renders Factor Va resistant to APC cleavage -- most common inherited thrombophilia

**TFPI:**
- Produced by endothelium
- First inhibits Xa, then the TFPI-Xa complex inhibits TF-VIIa
- Effectively limits initiation to small amounts of thrombin

### Fibrinolysis -- Molecular Detail

- **tPA** (from endothelium) and **uPA** (urokinase) convert plasminogen to plasmin
- tPA is most active when bound to fibrin (fibrin acts as cofactor for its own destruction)
- Plasmin cleaves fibrin at specific lysine/arginine residues, generating FDPs and D-dimers
- **PAI-1** inhibits tPA and uPA
- **Alpha-2-antiplasmin** rapidly inactivates free plasmin
- **TAFI (thrombin-activatable fibrinolysis inhibitor)** removes lysine residues from fibrin, reducing plasminogen binding

### DIC -- Pathophysiology

DIC represents uncontrolled activation of the TF pathway:
1. Massive TF exposure (sepsis: monocyte/endothelial TF expression; trauma: tissue destruction; malignancy: tumor TF)
2. Systemic thrombin generation overwhelms ATIII and protein C
3. Widespread microvascular fibrin deposition causes organ ischemia
4. Consumption of platelets, fibrinogen, and factors V/VIII
5. Secondary fibrinolysis generates FDPs that further impair clot formation and platelet function
6. MAHA (microangiopathic hemolytic anemia) -- schistocytes from RBC shearing through fibrin strands

**ISTH DIC Score:** Platelet count, D-dimer, fibrinogen, PT -- score >= 5 is overt DIC.

### Pharmacology -- Detailed Mechanisms

**Unfractionated Heparin (UFH):**
- Heterogeneous mixture of glycosaminoglycans (MW 3,000-30,000)
- Binds ATIII via specific pentasaccharide sequence
- Anti-IIa activity requires long chains bridging ATIII to thrombin
- Monitored by aPTT; reversed by protamine sulfate (1 mg per 100 units)
- Risk of HIT (heparin-induced thrombocytopenia) -- antibodies to PF4-heparin complex

**Warfarin:**
- Inhibits vitamin K epoxide reductase (VKORC1)
- Prevents gamma-carboxylation of glutamate residues on Factors II, VII, IX, X and proteins C, S
- Gamma-carboxylation is required for calcium-dependent phospholipid binding
- Factor VII has the shortest half-life (~6 hours), so PT rises first
- Full anticoagulant effect takes 5-7 days (Factor II half-life ~60 hours)
- CYP2C9 and VKORC1 polymorphisms affect dosing
- Reversed by vitamin K (slow), FFP/4-factor PCC (rapid)

**Direct Oral Anticoagulants (DOACs):**
- Dabigatran: direct thrombin (IIa) inhibitor; reversed by idarucizumab
- Rivaroxaban, apixaban, edoxaban: direct Xa inhibitors; reversed by andexanet alfa
- Predictable pharmacokinetics -- generally no routine monitoring
- Renal clearance varies: dabigatran 80%, rivaroxaban 33%, apixaban 27%`,
      keyTerms: [
        { term: 'cell-based model', definition: 'Modern model describing coagulation as initiation, amplification, and propagation phases occurring on specific cell surfaces rather than intrinsic/extrinsic cascades', relatedTerms: ['tissue factor', 'thrombin burst'] },
        { term: 'PAR receptors', definition: 'Protease-activated receptors (PAR-1, PAR-4) on platelets cleaved by thrombin to trigger activation', pronunciation: 'par' },
        { term: 'Factor V Leiden', definition: 'Point mutation (R506Q) rendering Factor Va resistant to activated protein C cleavage; most common hereditary thrombophilia', pronunciation: 'factor five LY-den' },
        { term: 'EPCR', definition: 'Endothelial protein C receptor that enhances protein C activation by thrombomodulin-thrombin complex' },
        { term: 'TAFI', definition: 'Thrombin-activatable fibrinolysis inhibitor; removes lysine residues from fibrin to reduce plasminogen binding' },
        { term: 'HIT', definition: 'Heparin-induced thrombocytopenia; immune-mediated reaction to PF4-heparin complexes causing paradoxical thrombosis', relatedTerms: ['PF4', 'heparin'] },
        { term: 'ISTH DIC score', definition: 'International Society on Thrombosis and Haemostasis scoring system for diagnosing overt DIC using platelet count, D-dimer, fibrinogen, and PT' },
        { term: 'VKORC1', definition: 'Vitamin K epoxide reductase complex subunit 1; the molecular target of warfarin', pronunciation: 'V-KORC-one' },
      ],
      clinicalNotes: `Factor V Leiden is present in ~5% of Caucasians and is the most common inherited thrombophilia. Heterozygous carriers have a 5-10x increased risk of VTE; homozygous carriers have 50-80x risk. Testing is appropriate in patients with unprovoked VTE at a young age or strong family history.

HIT typically presents 5-10 days after heparin initiation with a platelet drop > 50% and/or new thrombosis. The 4T score (Thrombocytopenia, Timing, Thrombosis, oTher causes) guides diagnosis. All heparin must be stopped and a non-heparin anticoagulant (argatroban, bivalirudin) started immediately.`,
    },

    5: {
      level: 5,
      summary:
        'Advanced hemostasis integrates the cell-based coagulation model with endothelial biology (glycocalyx, NO/prostacyclin), contact pathway roles in inflammation versus hemostasis, NET-mediated immunothrombosis, thrombin generation assays, viscoelastic testing (TEG/ROTEM), advanced thrombophilia workup, and emerging anticoagulant targets (FXIa inhibitors).',
      explanation: `## Advanced Hemostasis & Thrombosis

### Endothelial Antithrombotic Surface

Intact endothelium is actively antithrombotic:
- **Glycocalyx** -- heparan sulfate proteoglycans on the luminal surface bind and potentiate ATIII locally
- **Nitric oxide (NO)** and **prostacyclin (PGI2)** inhibit platelet activation and cause vasodilation
- **Ecto-ADPase (CD39)** degrades ADP, preventing platelet recruitment
- **Thrombomodulin** and **EPCR** activate the protein C anticoagulant pathway
- **tPA release** promotes local fibrinolysis

Endothelial injury or activation (by cytokines, endotoxin) shifts the balance to a prothrombotic phenotype: TF expression, loss of thrombomodulin, vWF release from Weibel-Palade bodies, PAI-1 secretion.

### Contact Pathway: Thrombosis vs. Inflammation

Factor XII is not required for hemostasis (FXII deficiency does not cause bleeding) but plays roles in:
- **Pathologic thrombosis** -- activated by polyphosphates released from platelets, NETs, and misfolded proteins
- **Inflammation** -- FXIIa activates prekallikrein to kallikrein, which generates bradykinin from HMWK
- **Hereditary angioedema** -- C1-inhibitor deficiency leads to unregulated kallikrein and bradykinin production
- This separation makes FXI and FXII attractive drug targets for thromboprophylaxis without bleeding risk

### Immunothrombosis & NETs

Neutrophil extracellular traps (NETs) are expelled chromatin structures that trap pathogens but also:
- Provide a negatively charged surface activating FXII
- Contain histones that activate platelets and damage endothelium
- Bind vWF and fibrinogen, promoting thrombus growth
- Implicated in sepsis-associated DIC, COVID-19 coagulopathy, cancer-associated thrombosis
- DNase I disrupts NETs experimentally; potential therapeutic target

### Thrombin Generation Assays (TGA)

Calibrated automated thrombography (CAT) measures the full thrombin generation curve:
- **Lag time** -- time to initial thrombin generation
- **Peak thrombin** -- maximum thrombin concentration
- **Endogenous thrombin potential (ETP)** -- area under the curve (total thrombin generated)
- Provides a global assessment of hemostatic balance not captured by PT/aPTT
- Useful in assessing bleeding risk in mild factor deficiencies and monitoring bypassing agents in hemophilia with inhibitors

### Viscoelastic Testing (TEG / ROTEM)

Point-of-care assessment of whole-blood clot formation and lysis:
- **R-time / CT** -- time to initial clot formation (clotting factor function)
- **K-time / CFT** -- time to fixed clot strength (fibrinogen, platelets)
- **Alpha angle** -- rate of clot strengthening
- **MA / MCF** -- maximum clot strength (platelet-fibrin interaction)
- **LY30 / ML** -- percent lysis at 30 min (fibrinolysis)
- Used in trauma (MTP guidance), cardiac surgery, liver transplant, postpartum hemorrhage
- Enables targeted component therapy rather than empiric transfusion

### Advanced Thrombophilia Workup

Beyond Factor V Leiden:
- **Prothrombin G20210A** -- 3' UTR mutation increasing prothrombin mRNA stability and plasma levels
- **Antithrombin deficiency** -- most thrombogenic inherited thrombophilia (~25x VTE risk); quantitative (Type I) or qualitative (Type II)
- **Protein C / Protein S deficiency** -- heterozygous: VTE risk; homozygous protein C deficiency: neonatal purpura fulminans
- **Antiphospholipid syndrome** -- acquired; lupus anticoagulant, anti-cardiolipin, anti-beta-2-glycoprotein I antibodies; arterial and venous thrombosis, pregnancy morbidity
- Testing caveats: do not test during acute thrombosis or on anticoagulation (ATIII consumed acutely; warfarin lowers protein C/S; DOACs may cause false-positive lupus anticoagulant)

### DIC -- Advanced Management

Revised 2024 ISTH guidance emphasizes phenotyping DIC:
- **Thrombotic (non-overt) DIC** -- organ ischemia predominates; consider anticoagulation
- **Bleeding (overt) DIC** -- hemorrhage predominates; support with components
- **Fibrinolytic DIC** (e.g., APL, prostate cancer) -- hyperfibrinolysis; consider antifibrinolytics (TXA)
- Recombinant thrombomodulin (ART-123) has shown benefit in sepsis-associated DIC in Japanese trials but has not achieved global approval
- Treat underlying cause aggressively; DIC will not resolve without source control

### Emerging Anticoagulant Targets

**FXIa Inhibitors (abelacimab, milvexian, asundexian):**
- Rationale: FXI participates in pathologic thrombosis but is less important for hemostasis (FXI-deficient patients have mild or no bleeding)
- Phase 2 trials show reduced VTE after knee surgery with less bleeding vs. enoxaparin
- Abelacimab (anti-FXI antibody) showed 80% reduction in stroke/SE in AF patients (AZALEA-TIMI 71) before early termination for efficacy
- Potential to decouple anticoagulation from bleeding risk

**Other Targets:**
- Anti-FXIIa (garadacimab -- also being studied for HAE)
- Polyphosphate inhibitors
- NET-targeting agents (DNase, PAD4 inhibitors)
- Serpins engineered for enhanced specificity`,
      keyTerms: [
        { term: 'glycocalyx', definition: 'Carbohydrate-rich layer on the endothelial luminal surface containing heparan sulfate that locally potentiates antithrombin; disrupted in sepsis and trauma', pronunciation: 'GLY-co-KAY-licks' },
        { term: 'NETs', definition: 'Neutrophil extracellular traps; expelled chromatin fibers that trap pathogens but also activate coagulation via FXII, platelet activation, and endothelial damage', relatedTerms: ['immunothrombosis', 'NETosis'] },
        { term: 'thrombin generation assay', definition: 'Calibrated automated thrombography measuring lag time, peak, and endogenous thrombin potential (ETP) to assess global hemostatic balance' },
        { term: 'TEG/ROTEM', definition: 'Viscoelastic point-of-care tests measuring whole blood clot formation kinetics (R-time, K-time, MA) and fibrinolysis (LY30) to guide targeted transfusion' },
        { term: 'antiphospholipid syndrome', definition: 'Acquired autoimmune thrombophilia characterized by antibodies against phospholipid-binding proteins causing arterial/venous thrombosis and pregnancy morbidity', pronunciation: 'an-tee-FOS-fo-LIP-id' },
        { term: 'FXIa inhibitors', definition: 'Emerging anticoagulant class targeting Factor XIa to reduce thrombosis with potentially less bleeding; includes abelacimab, milvexian, asundexian' },
      ],
      clinicalNotes: `Viscoelastic testing (TEG/ROTEM) has transformed massive transfusion protocols. In trauma, a ROTEM-guided approach reduces blood product usage by 20-30% compared to conventional lab-guided transfusion. Key parameters: prolonged CT suggests clotting factor deficiency (give FFP/PCC); low MCF with normal FIBTEM suggests platelet deficit (give platelets); low FIBTEM MCF suggests hypofibrinogenemia (give cryoprecipitate/fibrinogen concentrate); elevated ML/LY30 suggests hyperfibrinolysis (give tranexamic acid).

Antiphospholipid syndrome requires persistent positivity (>= 12 weeks apart) of at least one criterion antibody. Triple positivity (LA + aCL + anti-B2GP1) confers the highest thrombotic risk. Warfarin remains the standard for secondary prophylaxis after thrombosis; DOACs showed inferior outcomes in the TRAPS trial for triple-positive APS patients.`,
    },
  },

  media: [],

  citations: [
    {
      id: 'guyton-hemostasis',
      type: 'textbook',
      title: 'Guyton and Hall Textbook of Medical Physiology',
      authors: ['John E. Hall', 'Michael E. Hall'],
      source: 'Elsevier',
      chapter: '37',
      section: 'Hemostasis and Blood Coagulation',
      license: 'All rights reserved',
    },
    {
      id: 'hoffbrand-hematology',
      type: 'textbook',
      title: 'Hoffbrand Essential Haematology',
      authors: ['A. Victor Hoffbrand', 'Paul A. H. Moss'],
      source: 'Wiley-Blackwell',
      chapter: '26-28',
      section: 'Coagulation Disorders',
      license: 'All rights reserved',
    },
    {
      id: 'uptodate-dic',
      type: 'website',
      title: 'Disseminated intravascular coagulation: Clinical features and diagnosis',
      source: 'UpToDate',
      url: 'https://www.uptodate.com/contents/disseminated-intravascular-coagulation',
      license: 'Subscription required',
    },
  ],

  crossReferences: [
    {
      targetId: 'physiology-blood-components',
      targetType: 'concept',
      relationship: 'parent',
      label: 'Blood Components',
    },
    {
      targetId: 'physiology-rbc-physiology',
      targetType: 'process',
      relationship: 'sibling',
      label: 'RBC Physiology',
    },
    {
      targetId: 'physiology-wbc-function',
      targetType: 'process',
      relationship: 'sibling',
      label: 'WBC Function',
    },
  ],

  tags: {
    systems: ['hematologic'],
    topics: ['physiology', 'pathology', 'pharmacology'],
    keywords: [
      'coagulation', 'hemostasis', 'platelets', 'fibrin', 'thrombin',
      'clotting cascade', 'DIC', 'anticoagulation', 'warfarin', 'heparin',
      'DOAC', 'thrombophilia', 'vWF', 'protein C', 'antithrombin',
    ],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery', 'emergency-medicine'],
    },
  },

  createdAt: '2026-01-30',
  updatedAt: '2026-01-30',
  version: 1,
  status: 'published',
  contributors: ['Claude Opus 4.5'],
};
