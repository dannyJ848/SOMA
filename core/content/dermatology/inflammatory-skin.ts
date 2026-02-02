/**
 * Inflammatory Skin Conditions
 *
 * Comprehensive coverage of eczema (atopic dermatitis), psoriasis,
 * acne vulgaris, and rosacea including pathophysiology, diagnosis,
 * and modern biologic/targeted therapies.
 */

import { EducationalContent } from '../types';

export const inflammatorySkinContent: EducationalContent = {
  id: 'dermatology-inflammatory-skin',
  type: 'topic',
  name: 'Inflammatory Skin Conditions',
  nameEs: 'Condiciones Inflamatorias de la Piel',
  alternateNames: ['Inflammatory Dermatoses', 'Chronic Skin Inflammation', 'Dermatitis'],

  levels: {
    1: {
      level: 1,
      summary: 'Inflammatory skin conditions are problems where the skin becomes red, itchy, swollen, or irritated. Common types include eczema, psoriasis, acne, and rosacea.',
      explanation: `## What Are Inflammatory Skin Conditions?

These are problems where your skin gets red, itchy, or irritated because your body's defense system overreacts. Think of it like a fire alarm going off when there is no real fire.

## Eczema (Atopic Dermatitis)

Eczema makes your skin dry, itchy, and red. It often appears in the creases of elbows and behind the knees. Many children have it, and some grow out of it.

**What causes it:**
- Runs in families
- Sensitive skin that loses moisture easily
- Triggers like soaps, dust, or certain foods

**What to do:**
- Keep skin moisturized
- Avoid scratching
- Use gentle soaps
- See a doctor for prescription creams if needed

## Psoriasis

Psoriasis creates thick, scaly patches on the skin, often on elbows, knees, and scalp. The skin cells grow too fast, piling up on the surface.

**What causes it:**
- Immune system attacks healthy skin cells by mistake
- Runs in families
- Stress, infections, or cold weather can trigger flare-ups

## Acne

Acne happens when pores get clogged with oil and dead skin cells, causing pimples, blackheads, and whiteheads. It is very common during the teenage years.

## Rosacea

Rosacea makes the face turn red, especially the cheeks and nose. Some people also get small bumps that look like pimples. It is more common in adults over 30.

**Common triggers:**
- Hot drinks, spicy food
- Sun exposure
- Stress and exercise
- Alcohol`,

      keyTerms: [
        { term: 'Eczema', definition: 'A condition that makes skin dry, itchy, and red' },
        { term: 'Psoriasis', definition: 'A condition where skin cells build up into thick, scaly patches' },
        { term: 'Rosacea', definition: 'A condition that causes redness and bumps on the face' },
        { term: 'Inflammation', definition: 'When part of the body becomes red, hot, swollen, or painful' },
        { term: 'Flare-up', definition: 'When a skin condition suddenly gets worse' },
      ],
      analogies: [
        'Inflammation is like a fire alarm going off in your skin even when there is no real danger.',
        'In psoriasis, skin cells are like a factory running too fast, making too many products that pile up.',
        'Eczema is like having a leaky roof on your skin that lets moisture escape and irritants get in.',
      ],
      examples: [
        'A child with itchy, red patches in the creases of their elbows (eczema)',
        'An adult with thick, silvery scales on their elbows and knees (psoriasis)',
        'A woman whose face turns red after drinking hot coffee (rosacea)',
      ],
      patientCounselingPoints: [
        'Moisturize your skin every day, especially after bathing.',
        'Avoid scratching, which can make the skin worse.',
        'Write down what makes your skin flare up so you can avoid triggers.',
        'See your doctor if over-the-counter treatments are not helping.',
      ],
    },

    2: {
      level: 2,
      summary: 'Inflammatory skin diseases include atopic dermatitis (eczema), psoriasis, acne vulgaris, and rosacea. Each has distinct pathogenesis, clinical presentations, and treatment approaches ranging from topical therapies to systemic agents.',
      explanation: `## Atopic Dermatitis (Eczema)

**Clinical Features:**
- Intensely pruritic (itchy) eczematous patches and plaques
- Infants: face, scalp, extensor surfaces
- Children/Adults: flexural areas (antecubital, popliteal fossae)
- Chronic changes: lichenification, excoriations

**Pathogenesis Basics:**
- Defective skin barrier (dry skin loses water)
- Overactive immune response (Type 2 inflammation)
- The "atopic march": eczema -> food allergy -> asthma -> allergic rhinitis

**Treatment Overview:**
- Emollients (moisturizers): cornerstone of therapy
- Topical corticosteroids: first-line anti-inflammatory
- Topical calcineurin inhibitors (tacrolimus, pimecrolimus): steroid-sparing
- Systemic therapy for severe disease

## Psoriasis

**Clinical Features:**
- Well-demarcated erythematous plaques with silvery scale
- Distribution: elbows, knees, scalp, sacrum, nails
- Auspitz sign: pinpoint bleeding when scale removed
- Koebner phenomenon: lesions at sites of skin trauma

**Types:**
- Plaque psoriasis (most common, ~80%)
- Guttate: small droplet-shaped lesions, often post-strep
- Inverse: affects skin folds
- Pustular: sterile pustules
- Erythrodermic: widespread redness (medical emergency)

**Treatment Overview:**
- Topical: corticosteroids, vitamin D analogues (calcipotriol)
- Phototherapy: narrowband UVB
- Systemic: methotrexate, cyclosporine
- Biologics: for moderate-to-severe disease

## Acne Vulgaris

**Four Pathogenic Factors:**
1. Excess sebum production (androgens)
2. Follicular hyperkeratinization (plugged pores)
3. Cutibacterium acnes proliferation
4. Inflammation

**Classification:**
- Comedonal (non-inflammatory): open/closed comedones
- Inflammatory: papules, pustules
- Nodulocystic: nodules, cysts (severe)

## Rosacea

**Subtypes:**
1. Erythematotelangiectatic: flushing, persistent redness, telangiectasias
2. Papulopustular: acne-like bumps and pustules
3. Phymatous: skin thickening, rhinophyma (enlarged nose)
4. Ocular: eye involvement, blepharitis

**Treatment:**
- Avoid triggers
- Topical metronidazole, azelaic acid, ivermectin
- Brimonidine for flushing
- Oral doxycycline for moderate-severe`,

      keyTerms: [
        { term: 'Atopic dermatitis', definition: 'Chronic eczema associated with allergies and asthma' },
        { term: 'Lichenification', definition: 'Thickened, leathery skin from chronic scratching' },
        { term: 'Auspitz sign', definition: 'Pinpoint bleeding when psoriasis scales are removed' },
        { term: 'Koebner phenomenon', definition: 'New skin lesions appearing at sites of injury or trauma' },
        { term: 'Rhinophyma', definition: 'Enlarged, bulbous nose from severe rosacea' },
        { term: 'Calcineurin inhibitor', definition: 'Steroid-sparing topical immunosuppressant for eczema' },
        { term: 'Guttate psoriasis', definition: 'Small drop-shaped psoriasis lesions, often triggered by strep throat' },
      ],
      analogies: [
        'The atopic march is like a chain reaction where one allergic problem leads to another over time.',
        'Auspitz sign is like removing a scab and seeing tiny dots of blood underneath.',
        'Calcineurin inhibitors are like alternative firefighters when you cannot keep using steroid "hoses."',
      ],
      examples: [
        'A child with flexural eczema and a history of food allergies and asthma',
        'An adult with thick silvery plaques on elbows showing Auspitz sign on examination',
        'A teenager who develops guttate psoriasis 2 weeks after strep pharyngitis',
        'A 45-year-old woman with facial flushing and papules diagnosed with rosacea',
      ],
      clinicalNotes: 'Atopic dermatitis affects up to 20% of children and 3% of adults. Psoriasis affects approximately 2-3% of the population. Both conditions significantly impact quality of life. Topical corticosteroids remain first-line for flares of both eczema and psoriasis, but long-term use carries risks of skin atrophy.',
    },

    3: {
      level: 3,
      summary: 'Inflammatory dermatoses involve distinct immunological pathways: Type 2 (Th2) inflammation in atopic dermatitis with IL-4/IL-13 predominance, Th17/IL-23 axis in psoriasis, and complex innate immune dysregulation in rosacea. Understanding these pathways guides targeted therapy selection.',
      explanation: `## Atopic Dermatitis: Type 2 Inflammation

**Immune Pathways:**
- Th2-predominant immune response
- Key cytokines: IL-4, IL-13, IL-31 (itch mediator)
- Elevated IgE levels
- Eosinophil and mast cell activation
- Acute phase: Th2 dominant
- Chronic phase: Th1 component emerges

**Skin Barrier Dysfunction:**
- Reduced filaggrin expression (even without mutations)
- Decreased ceramides in stratum corneum
- Increased transepidermal water loss (TEWL)
- Altered skin microbiome (Staphylococcus aureus colonization)

**Severity Scoring:**
- EASI (Eczema Area and Severity Index): standard in clinical trials
- SCORAD (Scoring Atopic Dermatitis)
- IGA (Investigator Global Assessment)
- DLQI (Dermatology Life Quality Index)

## Psoriasis: Th17/IL-23 Axis

**Immune Pathways:**
- Dendritic cells produce IL-23
- IL-23 activates Th17 cells
- Th17 cells produce IL-17A, IL-17F, IL-22
- IL-17 drives keratinocyte proliferation and neutrophil recruitment
- TNF-alpha amplifies inflammation
- Epidermal turnover: normal 28 days -> psoriasis 3-5 days

**PASI Scoring (Psoriasis Area Severity Index):**
- Assesses erythema, induration, desquamation in 4 body regions
- Score range: 0-72
- PASI 75: 75% improvement (standard efficacy endpoint)
- PASI 90/100: higher bar, achievable with modern biologics

**Comorbidities:**
- Psoriatic arthritis (up to 30% of psoriasis patients)
- Cardiovascular disease (increased risk)
- Metabolic syndrome
- Depression and anxiety
- Inflammatory bowel disease

## Acne: Comedogenesis and Inflammation

**Comedogenesis:**
- Androgens stimulate sebaceous gland activity
- Follicular keratinocytes become hyperproliferative
- Keratin and sebum plug the follicular ostium -> microcomedone
- Microcomedone -> closed comedone (whitehead) or open comedone (blackhead)

**Inflammatory Cascade:**
- C. acnes activates TLR-2 on keratinocytes and macrophages
- Triggers IL-1beta, TNF-alpha, IL-8 release
- Neutrophil recruitment -> pustule formation
- Follicular rupture -> foreign body giant cell reaction -> nodule

**Grading Systems:**
- Global Acne Grading System (GAGS)
- Leeds Revised Acne Grading
- IGA (Investigator Global Assessment) scale 0-4

## Rosacea: Innate Immune Dysregulation

**Pathophysiology:**
- Dysregulated innate immunity
- Increased cathelicidin (LL-37) production
- Abnormal kallikrein-5 (KLK5) protease activity
- Neurovascular dysregulation
- Demodex folliculorum overgrowth

**Diagnostic Criteria (2017 ROSacea COnsensus):**
- Diagnostic: phymatous changes OR persistent centrofacial erythema with periodic intensification
- Major: flushing, papules/pustules, telangiectasia, ocular manifestations
- Secondary: burning, stinging, dryness, edema`,

      keyTerms: [
        { term: 'IL-4/IL-13', definition: 'Key Type 2 cytokines that drive atopic dermatitis inflammation and impair skin barrier' },
        { term: 'IL-23/IL-17 axis', definition: 'Immune pathway central to psoriasis where dendritic cells activate Th17 cells' },
        { term: 'PASI', definition: 'Psoriasis Area Severity Index, scoring 0-72 based on erythema, induration, and scaling across body regions' },
        { term: 'EASI', definition: 'Eczema Area and Severity Index, standard clinical trial severity measure for atopic dermatitis' },
        { term: 'Comedogenesis', definition: 'The process of comedone (blackhead/whitehead) formation from follicular plugging' },
        { term: 'Cathelicidin', definition: 'Antimicrobial peptide (LL-37) that is abnormally processed in rosacea, driving inflammation' },
        { term: 'TEWL', definition: 'Transepidermal water loss, a measure of skin barrier function' },
        { term: 'Demodex folliculorum', definition: 'Microscopic mite that colonizes hair follicles, overabundant in rosacea' },
      ],
      analogies: [
        'The IL-23/IL-17 axis is like a chain of command: IL-23 is the general giving orders to IL-17 soldiers that attack the skin.',
        'PASI 75 means the patient improved by 75%, like a test score going from failing to near-passing.',
        'In rosacea, Demodex mites are like unwanted houseguests that multiply and trigger the immune alarm.',
      ],
      examples: [
        'A patient with moderate atopic dermatitis has an EASI score of 18 at baseline; after treatment the score drops to 5 (EASI 75 response)',
        'A psoriasis patient with PASI 22 achieves PASI 90 on biologic therapy',
        'A rosacea patient with papulopustular disease has skin biopsy showing perifollicular inflammation and increased Demodex',
        'An acne patient with nodular disease shows follicular rupture on histology with giant cell reaction',
      ],
      clinicalNotes: 'PASI 75 has been the standard primary endpoint in psoriasis trials, but PASI 90 and PASI 100 are now achievable with IL-17 and IL-23 inhibitors. In atopic dermatitis, EASI 75 at week 16 is the standard. The concept of "treat to target" is emerging in both conditions. Rosacea diagnosis was updated in 2017 with phenotype-based criteria replacing the older subtype classification.',
    },

    4: {
      level: 4,
      summary: 'Advanced understanding of inflammatory dermatoses requires knowledge of genetic susceptibility (filaggrin mutations, HLA associations), keratinocyte biology, signaling cascades (JAK-STAT), and the full psoriatic disease spectrum. Isotretinoin acts through retinoid receptor-mediated gene regulation affecting sebocyte apoptosis and differentiation.',
      explanation: `## Atopic Dermatitis: Skin Barrier and Genetics

**Filaggrin (FLG) Mutations:**
- FLG gene on chromosome 1q21.3 (epidermal differentiation complex)
- Encodes profilaggrin -> processed to filaggrin monomers
- Filaggrin aggregates keratin filaments in stratum corneum
- Breakdown products (pyrrolidone carboxylic acid, urocanic acid) form natural moisturizing factor (NMF)
- Loss-of-function mutations (R501X, 2282del4) present in ~30% of European AD patients
- Incomplete penetrance: not all carriers develop AD
- FLG-null increases risk of early-onset AD, persistent disease, and asthma

**Keratinocyte Differentiation:**
- Basal layer -> spinous layer -> granular layer -> stratum corneum
- Cornified envelope formation: involucrin, loricrin cross-linked by transglutaminase
- Lamellar bodies release ceramides, cholesterol, fatty acids into intercellular spaces
- In AD: reduced ceramide levels, altered lipid composition
- Tight junction proteins (claudins) also impaired

**JAK-STAT Pathway in Dermatitis:**
- IL-4 and IL-13 signal through JAK1/JAK3 (IL-4) and JAK1/TYK2 (IL-13)
- Activate STAT6 -> drives Th2 gene expression
- IL-31 (itch cytokine) signals through JAK1/JAK2 -> STAT3
- JAK inhibition blocks multiple downstream cytokine effects simultaneously
- Rationale for JAK inhibitor efficacy across multiple inflammatory dermatoses

**Systemic Treatment Ladder:**
- Topical corticosteroids and calcineurin inhibitors
- Phototherapy (narrowband UVB)
- Systemic immunosuppressants: cyclosporine, methotrexate, azathioprine, mycophenolate
- Biologics: dupilumab (anti-IL-4R alpha)
- JAK inhibitors: upadacitinib, abrocitinib

## Psoriasis: Full Disease Spectrum

**Genetics:**
- HLA-Cw6 association (psoriasis vulgaris type I, early onset)
- Polygenic: PSORS1-PSORS9 susceptibility loci
- IL-23R, IL-12B, TNFAIP3 polymorphisms
- Concordance: ~70% monozygotic twins

**Psoriatic Disease Spectrum:**
- Cutaneous psoriasis
- Psoriatic arthritis (peripheral, axial, enthesitis, dactylitis)
- Psoriatic nail disease (pitting, oil drop sign, onycholysis)
- Metabolic comorbidities (insulin resistance, dyslipidemia)
- Cardiovascular risk (equivalent to independent risk factor)
- Hepatic steatosis

**Immunopathogenesis Deep Dive:**
- Trigger (trauma, infection) -> dendritic cell activation
- Plasmacytoid DCs produce IFN-alpha
- Myeloid DCs produce IL-23, IL-12
- IL-23 -> Th17 differentiation and maintenance
- IL-17A/F -> keratinocyte activation -> antimicrobial peptides (beta-defensins, S100A proteins), chemokines (CXCL1, CXCL8)
- Positive feedback loop: keratinocyte products recruit more immune cells
- TNF-alpha synergizes with IL-17 signaling

## Isotretinoin: Mechanism of Action

**Retinoid Biology:**
- 13-cis retinoic acid -> converted to all-trans retinoic acid and 9-cis RA
- Binds RAR (retinoic acid receptors: alpha, beta, gamma)
- RAR heterodimerizes with RXR (retinoid X receptor)
- Binds RARE (retinoic acid response elements) in target gene promoters

**Effects:**
- Sebocyte apoptosis -> marked reduction in sebum production (up to 90%)
- Normalizes follicular keratinization
- Reduces C. acnes colonization (indirect, via reduced sebum)
- Anti-inflammatory: reduces TLR-2 expression, IL-1beta
- Alters gene expression in >500 genes

**Pharmacology:**
- Oral bioavailability enhanced with high-fat meal (2x increase)
- Half-life: 10-20 hours (active metabolite 4-oxo-isotretinoin: 29 hours)
- Hepatic metabolism via CYP2C8, CYP3A4, CYP2B6
- Teratogenicity: Category X, effects on neural crest cells

## Rosacea: Neurovascular and Immune Mechanisms

**TRPV1 and Neurogenic Inflammation:**
- Transient receptor potential vanilloid 1 (TRPV1) channels on sensory neurons
- Activated by heat, capsaicin, alcohol -> vasodilation, flushing
- Neuropeptides (substance P, CGRP) drive neurogenic inflammation

**Cathelicidin Pathway:**
- LL-37 (cathelicidin) overexpressed in rosacea skin
- KLK5 (kallikrein-5) serine protease cleaves cathelicidin into pro-inflammatory fragments
- These fragments activate TLR-2, chemotaxis, angiogenesis
- Explains why metronidazole (anti-inflammatory) and ivermectin (anti-Demodex + anti-inflammatory) work`,

      keyTerms: [
        { term: 'Filaggrin', definition: 'Protein that aggregates keratin filaments in the stratum corneum; loss-of-function mutations are the strongest genetic risk for atopic dermatitis' },
        { term: 'JAK-STAT pathway', definition: 'Janus kinase-Signal Transducer and Activator of Transcription signaling cascade mediating cytokine effects; therapeutic target in inflammatory dermatoses' },
        { term: 'HLA-Cw6', definition: 'Major histocompatibility complex allele strongly associated with early-onset plaque psoriasis' },
        { term: 'RAR/RXR', definition: 'Retinoic acid receptor/Retinoid X receptor nuclear receptors mediating isotretinoin gene regulation effects' },
        { term: 'Natural moisturizing factor', definition: 'Filaggrin breakdown products that maintain stratum corneum hydration' },
        { term: 'TRPV1', definition: 'Transient receptor potential vanilloid 1 channel on sensory neurons, mediating flushing in rosacea' },
        { term: 'Cornified envelope', definition: 'Cross-linked protein structure of terminal keratinocyte differentiation forming the skin barrier' },
        { term: 'Psoriatic arthritis', definition: 'Inflammatory joint disease occurring in up to 30% of psoriasis patients, part of the psoriatic disease spectrum' },
      ],
      analogies: [
        'Filaggrin is like the mortar between bricks in a wall; without it, the skin barrier crumbles and lets water out and irritants in.',
        'The JAK-STAT pathway is like a telephone relay: the cytokine calls the JAK operator, who connects the STAT signal to the nucleus.',
        'The positive feedback loop in psoriasis is like a microphone too close to a speaker, creating a self-amplifying cycle of inflammation.',
      ],
      examples: [
        'An infant with severe early-onset eczema is found to carry homozygous FLG R501X mutations, later develops asthma',
        'A psoriasis patient with nail pitting and morning stiffness is evaluated for psoriatic arthritis with inflammatory markers and imaging',
        'A patient on isotretinoin has a lipid panel showing triglycerides of 450 mg/dL requiring dose reduction',
        'A rosacea patient with severe flushing is found to have elevated TRPV1 expression on skin biopsy',
      ],
      clinicalNotes: 'Filaggrin mutation testing is not routinely performed clinically but predicts more severe, persistent AD and increased asthma risk. JAK-STAT inhibition represents a paradigm shift in dermatology, offering oral and topical options across eczema, psoriasis, vitiligo, and alopecia areata. Psoriatic arthritis screening should be performed at every psoriasis visit using tools like PEST (Psoriasis Epidemiology Screening Tool). Isotretinoin requires iPLEDGE registration; the purported link to depression remains controversial with conflicting evidence.',
    },

    5: {
      level: 5,
      summary: 'State-of-the-art management of inflammatory dermatoses employs targeted biologics and small molecules: dupilumab and tralokinumab (anti-IL-4/13) and JAK inhibitors (upadacitinib, abrocitinib) for atopic dermatitis; IL-17 inhibitors (secukinumab, ixekizumab, bimekizumab), IL-23 inhibitors (risankizumab, guselkumab), and TYK2 inhibitors (deucravacitinib) for psoriasis; plus emerging microbiome therapeutics and tapinarof (AhR agonist).',
      explanation: `## Biologics for Atopic Dermatitis

**Dupilumab (Dupixent):**
- Mechanism: Monoclonal antibody targeting IL-4 receptor alpha subunit
- Blocks both IL-4 and IL-13 signaling (shared receptor component)
- Approved: moderate-to-severe AD (adults and children >= 6 months)
- Dosing: 300mg SC every 2 weeks (after loading dose)
- Efficacy: ~40% achieve EASI 75 at week 16 (vs ~15% placebo)
- Also approved for asthma, CRSwNP, eosinophilic esophagitis, prurigo nodularis
- Side effects: injection site reactions, conjunctivitis (8-25%), rare eosinophilia

**Tralokinumab (Adbry):**
- Mechanism: Anti-IL-13 monoclonal antibody (does not block IL-4)
- Approved: moderate-to-severe AD in adults
- Dosing: 300mg SC every 2 weeks
- Efficacy: ~25-33% achieve IGA 0/1 at week 16
- Rationale: IL-13 may be the dominant effector cytokine in AD skin lesions
- Side effects: conjunctivitis, injection site reactions

**Lebrikizumab:**
- Anti-IL-13 (different epitope from tralokinumab)
- Approved in some regions for moderate-to-severe AD
- Dosing advantage: every 4 weeks after induction

## JAK Inhibitors for Atopic Dermatitis

**Upadacitinib (Rinvoq):**
- Selective JAK1 inhibitor (oral)
- Approved: moderate-to-severe AD (adults and adolescents >= 12 years)
- Dosing: 15mg or 30mg daily
- Efficacy: EASI 75 ~70% at week 16 (30mg); superior to dupilumab in head-to-head trial (Heads Up)
- Rapid onset: significant itch improvement within days
- Risks: serious infections, VTE, malignancy (boxed warning), herpes zoster reactivation, CPK elevation, acne

**Abrocitinib (Cibinqo):**
- Selective JAK1 inhibitor (oral)
- Approved: moderate-to-severe AD in adults
- Dosing: 100mg or 200mg daily
- Efficacy: EASI 75 ~60% at week 12 (200mg)
- JADE DARE trial: abrocitinib 200mg showed faster itch response vs dupilumab but similar EASI responses
- Risks: similar to upadacitinib plus platelet reduction, nausea

**Topical JAK Inhibitors:**
- Ruxolitinib cream (Opzelura): JAK1/JAK2 inhibitor, approved for mild-to-moderate AD
- Delgocitinib: pan-JAK inhibitor (approved in Japan)

## Biologics for Psoriasis

**IL-17 Inhibitors:**
- Secukinumab (Cosentyx): anti-IL-17A; 300mg SC monthly
  - PASI 90: ~60-70% at week 16
  - Also approved for PsA, axSpA
- Ixekizumab (Taltz): anti-IL-17A; 80mg SC every 2-4 weeks
  - PASI 90: ~70% at week 12
  - Very rapid onset
- Brodalumab (Siliq): anti-IL-17RA (blocks IL-17A, -F, -E, -C)
  - PASI 100: ~40% at week 12
  - Boxed warning: suicidal ideation (REMS program)
- Bimekizumab (Bimzelx): dual IL-17A and IL-17F inhibitor
  - PASI 90: ~85% at week 16 (BE READY trial)
  - PASI 100: ~60%
  - Superior to secukinumab (BE RADIANT), adalimumab (BE SURE), ustekinumab (BE VIVID)
  - Side effects: oral candidiasis (~7-16%)

**IL-23 Inhibitors:**
- Guselkumab (Tremfya): anti-IL-23p19; 100mg SC every 8 weeks
  - PASI 90: ~70-80% at week 48
  - Durable response: many maintain after withdrawal
- Risankizumab (Skyrizi): anti-IL-23p19; 150mg SC every 12 weeks
  - PASI 90: ~75% at week 16
  - Convenient dosing interval
  - Also approved for PsA, Crohn disease
- Tildrakizumab (Ilumya): anti-IL-23p19; 100mg SC every 12 weeks
  - PASI 75: ~64% at week 28

**TYK2 Inhibitor:**
- Deucravacitinib (Sotyktu): oral selective TYK2 inhibitor
  - First oral TYK2 inhibitor for psoriasis
  - PASI 75: ~58% at week 16 (POETYK PSO-1)
  - Superior to apremilast
  - TYK2 mediates IL-23 and IL-12 signaling
  - Improved safety vs JAK1/2/3 inhibitors (no boxed warning)

## Emerging Therapeutics

**Tapinarof (Vtama):**
- Aryl hydrocarbon receptor (AhR) agonist
- Topical cream, first-in-class
- Approved for plaque psoriasis; trials in AD
- Mechanism: AhR activation -> downregulates Th17 cytokines, restores skin barrier
- "Remittive effect": sustained improvement after treatment cessation
- Side effects: folliculitis, headache

**Nemolizumab:**
- Anti-IL-31 receptor alpha antibody
- Targets the "itch cytokine" IL-31
- Approved in some regions for prurigo nodularis; trials for AD
- Dramatic itch reduction within first week

**Microbiome Therapeutics:**
- Roseomonas mucosa (live biotherapeutic): Phase 2 trials in AD
- Staphylococcus hominis A9 (producing anti-S. aureus lantibiotics)
- Coagulase-negative staphylococci transplant approaches
- Rationale: restore microbial diversity, reduce S. aureus colonization
- Phage therapy targeting S. aureus under investigation

**Other Pipeline Agents:**
- Rocatinlimab (anti-OX40): T-cell depletion approach in AD
- Amlitelimab (anti-OX40L): non-depleting approach
- Spesolimab (anti-IL-36R): approved for generalized pustular psoriasis flares
- Oral IL-17 pathway inhibitors in development

## Treatment Paradigm Shifts

**Head-to-Head Data Guiding Decisions:**
- Upadacitinib vs dupilumab (Heads Up): JAKi showed superior efficacy
- Bimekizumab vs secukinumab (BE RADIANT): dual IL-17 superior
- Risankizumab vs secukinumab (IMMerge): comparable at 16 weeks, IL-23i superior at 52 weeks
- IL-23 inhibitors show superior durability vs IL-17 inhibitors

**Personalized Medicine:**
- Biomarker-guided therapy: IgE levels, eosinophils, cytokine profiles
- Pharmacogenomics: HLA-Cw6 status may predict response to ustekinumab
- Treat-to-target: aiming for PASI 90/100 or EASI 90, not just PASI 75
- Dose optimization and de-escalation strategies`,

      keyTerms: [
        { term: 'Dupilumab', definition: 'Anti-IL-4 receptor alpha monoclonal antibody blocking both IL-4 and IL-13 signaling; first biologic approved for atopic dermatitis' },
        { term: 'Bimekizumab', definition: 'Dual IL-17A and IL-17F inhibitor with highest PASI response rates among psoriasis biologics' },
        { term: 'Risankizumab', definition: 'Anti-IL-23p19 antibody with convenient every-12-week dosing and durable responses in psoriasis' },
        { term: 'Upadacitinib', definition: 'Selective oral JAK1 inhibitor for atopic dermatitis; showed superiority over dupilumab in Heads Up trial' },
        { term: 'Abrocitinib', definition: 'Selective oral JAK1 inhibitor for atopic dermatitis with rapid itch relief' },
        { term: 'Tapinarof', definition: 'Topical aryl hydrocarbon receptor agonist, first-in-class agent for psoriasis with remittive effect' },
        { term: 'Deucravacitinib', definition: 'First oral selective TYK2 inhibitor for psoriasis; mediates IL-23/IL-12 signaling without JAK1/2/3 inhibition' },
        { term: 'Tralokinumab', definition: 'Anti-IL-13 monoclonal antibody for atopic dermatitis; targets the dominant effector cytokine in skin lesions' },
        { term: 'Spesolimab', definition: 'Anti-IL-36 receptor antibody approved for generalized pustular psoriasis flares' },
      ],
      analogies: [
        'Dupilumab blocking IL-4R alpha is like blocking a doorway that two different visitors (IL-4 and IL-13) both need to enter.',
        'Bimekizumab targeting both IL-17A and IL-17F is like catching two culprits instead of just one, explaining its higher efficacy.',
        'IL-23 inhibitors are like cutting the head of the snake: by blocking the upstream signal, the entire downstream cascade (IL-17) quiets down.',
        'Tapinarof AhR agonist remittive effect is like retraining the immune system so it stays calm even after stopping the medication.',
      ],
      examples: [
        'A 35-year-old with moderate-to-severe AD fails topical therapy and starts dupilumab; develops mild conjunctivitis at week 8 managed with artificial tears',
        'A psoriasis patient on secukinumab achieves PASI 75 but not PASI 90; switches to bimekizumab and achieves PASI 100',
        'A patient with psoriasis and Crohn disease is placed on risankizumab (approved for both conditions)',
        'A young woman with severe AD prefers oral therapy; started on upadacitinib 15mg with herpes zoster vaccination performed beforehand',
        'A patient with generalized pustular psoriasis flare receives spesolimab IV with rapid clearance',
      ],
      clinicalNotes: 'The biologic revolution has transformed management of moderate-to-severe psoriasis and atopic dermatitis. IL-23 inhibitors offer the best combination of efficacy and safety for psoriasis, with some patients maintaining responses after drug withdrawal. For AD, the choice between dupilumab (established safety, injection) and JAK inhibitors (faster onset, oral, but boxed warning) depends on patient factors. Bimekizumab shows the highest absolute PASI 90/100 rates but has increased oral candidiasis. TYK2 inhibition (deucravacitinib) offers an oral option for psoriasis without the cardiovascular safety signals of JAK1/2 inhibitors. Microbiome therapeutics represent the next frontier. Always screen for latent TB and hepatitis B before biologics; ensure age-appropriate vaccinations (especially varicella-zoster for JAK inhibitors).',
    },
  },

  media: [],
  citations: [
    {
      id: 'inflammatory-skin-ref-1',
      type: 'textbook',
      title: "Dermatology (Bolognia)",
      authors: ['Bolognia, J.', 'Schaffer, J.', 'Cerroni, L.'],
      source: 'Elsevier',
      chapter: 'Atopic Dermatitis, Psoriasis, Acne, Rosacea',
    },
    {
      id: 'inflammatory-skin-ref-2',
      type: 'article',
      title: 'Dupilumab efficacy and safety in moderate-to-severe atopic dermatitis',
      source: 'New England Journal of Medicine',
      url: 'https://doi.org/10.1056/NEJMoa1610020',
    },
    {
      id: 'inflammatory-skin-ref-3',
      type: 'article',
      title: 'Bimekizumab versus secukinumab in plaque psoriasis (BE RADIANT)',
      source: 'New England Journal of Medicine',
      url: 'https://doi.org/10.1056/NEJMoa2102383',
    },
  ],
  crossReferences: [
    {
      targetId: 'dermatology-acne',
      targetType: 'topic',
      relationship: 'related',
      label: 'Acne Vulgaris (Detailed)',
    },
    {
      targetId: 'dermatology-eczema',
      targetType: 'topic',
      relationship: 'related',
      label: 'Eczema (Detailed)',
    },
    {
      targetId: 'dermatology-psoriasis',
      targetType: 'topic',
      relationship: 'related',
      label: 'Psoriasis (Detailed)',
    },
  ],
  tags: {
    topics: ['dermatology', 'inflammatory-skin', 'eczema', 'psoriasis', 'acne', 'rosacea', 'biologics', 'immunology'],
    systems: ['integumentary', 'immune'],
    keywords: ['atopic dermatitis', 'dupilumab', 'secukinumab', 'JAK inhibitors', 'IL-17', 'IL-23', 'filaggrin', 'Th2', 'Th17'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, shelf: ['dermatology', 'medicine'] },
  },

  createdAt: '2025-01-30',
  updatedAt: '2025-01-30',
  version: 1,
  status: 'published',
};
