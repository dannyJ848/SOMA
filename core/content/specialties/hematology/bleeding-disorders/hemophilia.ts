/**
 * Hemophilia - Comprehensive Educational Content
 *
 * Covers hemophilia A and B, including pathophysiology, clinical presentation,
 * diagnosis, and modern management strategies.
 */

import { EducationalContent } from '../../../types';

export const hemophilia: EducationalContent = {
  id: 'condition-hemophilia',
  type: 'condition',
  name: 'Hemophilia',
  alternateNames: ['Hemophilia A', 'Hemophilia B', 'Factor VIII Deficiency', 'Factor IX Deficiency', 'Christmas Disease'],
  hpoId: 'HP:0001905',

  levels: {
    1: {
      level: 1,
      summary: 'Hemophilia is a genetic bleeding disorder where blood does not clot properly, causing longer bleeding after injuries.',
      explanation: `Hemophilia is a condition you are born with that affects how your blood clots. People with hemophilia bleed longer than normal because they are missing a clotting factor.

**Types:**
- Hemophilia A: Missing clotting factor 8 (VIII) - most common
- Hemophilia B: Missing clotting factor 9 (IX) - less common

**How It Is Inherited:**
- Passed from mother to son (X-linked)
- Affects mostly males
- Females are usually carriers

**Symptoms:**
- Easy bruising
- Bleeding into joints (painful swelling)
- Bleeding into muscles
- Long-lasting bleeding from cuts
- Nosebleeds that are hard to stop
- Blood in urine or stool

**Severity Levels:**
- Mild: May only bleed with surgery or major injury
- Moderate: Bleed after minor injuries
- Severe: Can bleed without any injury

**Treatment:**
- Replacing the missing clotting factor (infusion)
- Medicine to help blood clot
- Being careful to avoid injuries
- Regular treatment to prevent bleeds`,
      keyTerms: [
        { term: 'clotting factor', definition: 'A protein in blood that helps it clot' },
        { term: 'infusion', definition: 'Giving medicine or fluid through a vein' },
        { term: 'carrier', definition: 'A person who has the gene but may not have symptoms' },
      ],
      analogies: [
        'Blood clotting is like putting a patch on a tire. Hemophilia is like trying to patch the tire without glue - the patch will not stick properly.',
      ],
      examples: [
        'A young boy has swollen knees after playing because blood is leaking into his joints.',
        'A man needs special treatment before having a tooth pulled because his blood will not clot normally.',
      ],
    },
    2: {
      level: 2,
      summary: 'Hemophilia A and B are X-linked recessive bleeding disorders caused by factor VIII and IX deficiency respectively; severity correlates with factor level.',
      explanation: `Hemophilia is an inherited bleeding disorder with X-linked recessive inheritance.

**Genetics:**
- Hemophilia A: F8 gene mutation (factor VIII deficiency)
- Hemophilia B: F9 gene mutation (factor IX deficiency)
- X-linked recessive: Affects males; females are carriers
- 30% of cases: New mutations (no family history)

**Severity Classification:**
- Severe: <1% factor activity - spontaneous bleeding
- Moderate: 1-5% factor activity - bleeding after minor trauma
- Mild: 5-40% factor activity - bleeding after surgery/trauma

**Clinical Manifestations:**
- Hemarthrosis (joint bleeding): Most characteristic
  - Knees, elbows, ankles most common
  - Leads to arthropathy if untreated
- Muscle hematomas
- Intracranial hemorrhage (most common cause of death)
- GI bleeding
- Hematuria

**Laboratory Findings:**
- Prolonged aPTT
- Normal PT, platelet count
- Low factor VIII or IX level
- Normal von Willebrand factor

**Treatment:**
- Factor replacement: Recombinant or plasma-derived
- Desmopressin (DDAVP): For mild hemophilia A
- Antifibrinolytics (tranexamic acid)
- Prophylaxis vs. on-demand treatment`,
      keyTerms: [
        { term: 'aPTT', definition: 'Activated partial thromboplastin time; tests intrinsic pathway' },
        { term: 'hemarthrosis', definition: 'Bleeding into a joint space' },
        { term: 'prophylaxis', definition: 'Regular treatment to prevent bleeds' },
      ],
    },
    3: {
      level: 3,
      summary: 'Hemophilia management includes factor replacement for bleeding episodes, prophylactic regimens for severe disease, and emerging extended half-life and non-factor therapies.',
      explanation: `Modern hemophilia management has evolved significantly with new therapeutic options.

**Factor Replacement Strategies:**
- On-demand: Treat when bleeding occurs
- Primary prophylaxis: Start before age 2, before joint damage
- Secondary prophylaxis: After initial joint damage
- Extended half-life (EHL) products:
  - Fc fusion, PEGylated, albumin fusion
  - Allow less frequent dosing

**Dosing for Bleeds:**
- Minor (early joint, muscle): 20-40% correction
- Major (joint, muscle, GI): 40-60% correction
- Life-threatening (CNS, major surgery): 80-100% correction
- Factor VIII: 1 unit/kg raises level ~2%
- Factor IX: 1 unit/kg raises level ~1%

**Complications:**
- Inhibitors (alloantibodies):
  - Develop in 25-30% of hemophilia A, 5% of hemophilia B
  - Measured in Bethesda units (BU)
  - Low titer (<5 BU): May respond to higher factor doses
  - High titer (>5 BU): Bypassing agents needed
- Joint disease: Chronic arthropathy, target joints
- Blood-borne infections: Historical concern with plasma-derived products

**Non-Factor Therapies:**
- Emicizumab (Hemlibra): Bispecific antibody mimicking factor VIII
  - Prophylaxis for hemophilia A with/without inhibitors
  - Subcutaneous weekly, every 2 weeks, or monthly
- Bypassing agents for inhibitors:
  - aPCC (FEIBA): Activated prothrombin complex
  - rFVIIa: Recombinant factor VIIa`,
      keyTerms: [
        { term: 'inhibitor', definition: 'Antibody against replacement factor; complicates treatment' },
        { term: 'emicizumab', definition: 'Bispecific antibody mimicking FVIII function' },
        { term: 'Bethesda unit', definition: 'Measure of inhibitor titer' },
      ],
    },
    4: {
      level: 4,
      summary: 'Modern hemophilia care includes extended half-life factors, emicizumab prophylaxis, and immune tolerance induction for inhibitors; gene therapy offers potential cure.',
      explanation: `Comprehensive hemophilia management addresses prophylaxis, inhibitor management, and emerging curative approaches.

**Emicizumab Details:**
- Mechanism: Bridges FIXa and FX (mimics FVIIIa cofactor function)
- Dosing: Loading dose, then maintenance
  - 1.5 mg/kg weekly, 3 mg/kg every 2 weeks, or 6 mg/kg monthly
- Efficacy: 87% reduction in bleeds in HAVEN trials
- Safety: Thrombotic microangiopathy with concurrent aPCC (avoid >100 U/kg/day)
- Does not treat bleeds (still need factor for breakthrough)

**Inhibitor Management:**
- Immune Tolerance Induction (ITI):
  - Frequent factor exposure to eradicate inhibitor
  - Success rate ~70% for hemophilia A
  - Bonn, Van Creveld, and other protocols
- For failed ITI or hemophilia B:
  - Chronic bypassing agent prophylaxis
  - Emicizumab for hemophilia A inhibitors
  - Consider clinical trials (factor VIII gene therapy)

**Gene Therapy:**
- AAV vector delivering functional F8 or F9 gene
- Valoctocogene roxaparvovec (Hemophilia A): ~25% factor expression
- Etranacogene dezaparvovec (Hemophilia B): ~40% factor expression
- Single infusion, potentially durable for years
- Considerations: Pre-existing AAV antibodies, liver health, long-term data

**Comprehensive Care:**
- Hemophilia Treatment Centers (HTC): Multidisciplinary team
- Physical therapy: Joint assessment, exercise programs
- Psychosocial support
- Vaccination: Hepatitis A/B, avoid IM injections (SC or intradermal)
- Dental care: Coordinate with hematologist for procedures`,
      keyTerms: [
        { term: 'ITI', definition: 'Immune tolerance induction; eradicates inhibitors through repeated factor exposure' },
        { term: 'AAV', definition: 'Adeno-associated virus; vector for hemophilia gene therapy' },
        { term: 'target joint', definition: 'Joint with recurrent bleeds (≥3 in 6 months)' },
      ],
    },
    5: {
      level: 5,
      summary: 'Hemophilia treatment landscape now includes gene therapy, emicizumab, and EHL factors; inhibitor management remains challenging with ITI and novel agents under investigation.',
      explanation: `The hemophilia treatment paradigm has shifted dramatically with novel therapeutics and gene therapy.

**Gene Therapy Advances:**
- AAV5-hFVIII-SQ (Roctavian/Valoctocogene roxaparvovec):
  - FDA approved 2023 for severe hemophilia A
  - Single IV infusion
  - Mean FVIII activity ~25% at 2 years
  - Declining expression over time (annual ~5%)
- Etranacogene dezaparvovec (Hemgenix):
  - FDA approved 2022 for hemophilia B
  - FIX activity ~40%
  - More durable than FVIII gene therapy
- Patient selection:
  - No pre-existing AAV5 antibodies (for valoctocogene)
  - Adequate liver function
  - No active liver disease
  - Counseled on unknown long-term effects

**Novel Therapeutics in Development:**
- Fitusiran: siRNA targeting antithrombin
  - Increases thrombin generation
  - Monthly subcutaneous
  - For both hemophilia A and B, with/without inhibitors
- Concizumab: Anti-TFPI antibody
- Marstacimab: Anti-TFPI antibody
- Late-stage trials showing efficacy

**Inhibitor Challenges:**
- Hemophilia B inhibitors: May have anaphylaxis with factor IX
- ITI less successful than hemophilia A
- Gene therapy contraindicated with inhibitors
- Emicizumab has changed landscape for hemophilia A inhibitors

**Surgery in Hemophilia:**
- Pre-operative factor level target
- Multi-disciplinary planning
- Trough levels monitoring
- Duration of replacement based on surgery type
- Consider tranexamic acid
- With emicizumab: Add factor or bypassing agent`,
      keyTerms: [
        { term: 'fitusiran', definition: 'siRNA targeting antithrombin; rebalancing approach' },
        { term: 'TFPI', definition: 'Tissue factor pathway inhibitor; target of novel therapeutics' },
        { term: 'rebalancing therapy', definition: 'Anticoagulant pathway inhibition to restore hemostasis' },
      ],
    },
  },

  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    systems: ['hematologic'],
    topics: ['bleeding disorder', 'coagulation', 'genetic'],
    keywords: ['hemophilia', 'factor VIII', 'factor IX', 'bleeding'],
    clinicalRelevance: 'high',
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default hemophilia;
