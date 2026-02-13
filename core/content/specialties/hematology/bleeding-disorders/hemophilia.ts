/**
 * Hemophilia - Comprehensive Educational Content
 *
 * X-linked bleeding disorders caused by deficiency of factor VIII (A) or IX (B).
 */

import { EducationalContent } from '../../../types';

export const hemophilia: EducationalContent = {
  id: 'condition-hemophilia',
  type: 'condition',
  name: 'Hemophilia',
  alternateNames: ['Hemophilia A', 'Hemophilia B', 'Christmas disease', 'Factor VIII deficiency', 'Factor IX deficiency'],

  levels: {
    1: {
      level: 1,
      summary: 'Hemophilia is a bleeding disorder where blood does not clot properly because of missing clotting proteins.',
      explanation: `Hemophilia is a condition where the blood cannot clot normally.

**What Happens:**
- The body is missing proteins needed to stop bleeding
- Even small injuries can cause prolonged bleeding
- Bleeding often happens inside the body, especially in joints

**Types:**
- Hemophilia A: Missing factor VIII (most common)
- Hemophilia B: Missing factor IX

**Who Gets It:**
- Mostly affects males
- Passed down in families
- Females are usually carriers

**Common Signs:**
- Bruising easily
- Bleeding that won't stop
- Painful swollen joints (from bleeding inside)
- Nosebleeds

**Treatment:**
- Replacing the missing clotting factor
- Given through IV (into the vein)
- Can be given regularly to prevent bleeding
- New medicines can also help`,
      keyTerms: [
        { term: 'clotting factors', definition: 'Proteins in blood that help stop bleeding' },
        { term: 'factor VIII', definition: 'A clotting protein missing in hemophilia A' },
        { term: 'X-linked', definition: 'A condition passed on the X chromosome, mainly affecting males' },
      ],
      analogies: [
        'Blood clotting is like a relay race where proteins pass the baton to each other. In hemophilia, one runner is missing, so the race cannot be completed and bleeding continues.',
      ],
      examples: [
        'A young boy keeps getting painful swollen knees with no injury. Tests show he has hemophilia A and the swelling is from bleeding into his joints.',
      ],
    },
    2: {
      level: 2,
      summary: 'Hemophilia A (factor VIII deficiency) and B (factor IX deficiency) are X-linked coagulation disorders causing joint and soft tissue bleeding, managed with factor replacement.',
      explanation: `Hemophilia is an inherited coagulation disorder affecting the intrinsic pathway of coagulation.

**Genetics:**
- X-linked recessive inheritance
- Males affected (XY), females carriers (XX)
- ~30% are new mutations

**Classification by Severity:**
| Severity | Factor Level | Bleeding Pattern |
|----------|--------------|------------------|
| Severe | <1% | Spontaneous bleeding |
| Moderate | 1-5% | Bleeding with minor trauma |
| Mild | 5-40% | Bleeding with surgery/trauma |

**Clinical Manifestations:**
- Hemarthrosis (joint bleeding) - hallmark
- Muscle hematomas
- Prolonged bleeding after procedures
- Intracranial hemorrhage (life-threatening)
- GI bleeding

**Diagnosis:**
- Prolonged aPTT (PT normal)
- Low factor VIII (hemophilia A) or IX (hemophilia B)
- Normal platelet count
- Normal bleeding time

**Treatment:**
- Factor replacement (on-demand or prophylaxis)
- Desmopressin (DDAVP) for mild hemophilia A
- Antifibrinolytics for mucosal bleeding
- Emicizumab for hemophilia A

**Complications:**
- Inhibitor development (antibodies against factor)
- Joint destruction (hemophilic arthropathy)
- Infection (historical - contaminated products)`,
      keyTerms: [
        { term: 'hemarthrosis', definition: 'Bleeding into a joint; the hallmark of hemophilia', pronunciation: 'hee-mar-THROH-sis' },
        { term: 'aPTT', definition: 'Activated partial thromboplastin time; prolonged in hemophilia' },
        { term: 'prophylaxis', definition: 'Regular factor replacement to prevent bleeding episodes' },
        { term: 'inhibitor', definition: 'Antibody against infused factor that neutralizes treatment' },
      ],
      analogies: [
        'Factor replacement is like providing the missing relay runner so the clotting cascade can complete its race.',
      ],
    },
    3: {
      level: 3,
      summary: 'Hemophilia management requires severity-based treatment, inhibitor monitoring, and evolving non-factor therapies that are changing the treatment landscape.',
      explanation: `## Overview

Hemophilia A and B are X-linked disorders of the intrinsic pathway with similar clinical features but different factor deficiencies.

## Epidemiology
- Hemophilia A: 1/5,000 male births
- Hemophilia B: 1/30,000 male births
- Combined prevalence: ~20,000 in US

## Pathophysiology

**Coagulation Cascade:**
- Factor VIII: Cofactor for factor IXa in intrinsic tenase
- Factor IX: Serine protease in intrinsic tenase
- Deficiency impairs thrombin generation

**Genetic Basis:**
- F8 gene: Xq28 (intron 22 inversion common)
- F9 gene: Xq27
- Correlation between genotype and phenotype

## Diagnosis

**Laboratory:**
- PT: Normal (extrinsic pathway intact)
- aPTT: Prolonged (intrinsic pathway affected)
- Mixing study: Corrects (no inhibitor)
- Specific factor assays: VIII or IX low

**Differential:**
- von Willebrand disease
- Factor XI deficiency
- Acquired hemophilia

## Treatment

**Factor Products:**
| Type | Source | Considerations |
|------|--------|----------------|
| Plasma-derived | Human plasma | Viral inactivation |
| Recombinant | Cell lines | Lower inhibitor risk (some data) |
| Extended half-life | PEGylated/Fc fusion | Less frequent dosing |

**Dosing (Hemophilia A):**
- 1 unit/kg raises factor VIII by ~2%
- Minor bleed: Target 30-50%
- Major bleed: Target 80-100%
- Surgery: 80-100% initially, 50-80% maintenance

**Prophylaxis:**
- Standard of care for severe hemophilia
- Prevents hemophilic arthropathy
- Start before age 3 or after first bleed
- Factor VIII: 25-40 units/kg 3x/week
- Factor IX: 40-60 units/kg 2x/week

## Non-Factor Therapies

**Emicizumab (Hemlibra):**
- Bispecific antibody mimicking factor VIII
- Bridges factor IXa and factor X
- Subcutaneous, weekly to monthly
- Works in patients with inhibitors
- Revolutionized hemophilia A treatment

**Fitusiran:**
- siRNA targeting antithrombin
- Rebalances hemostasis
- Monthly subcutaneous
- Phase 3 trials ongoing

## Inhibitor Management

**Incidence:**
- Hemophilia A: 25-30% (severe)
- Hemophilia B: 3-5%

**Treatment of Bleeding:**
- Low titer inhibitor: High-dose factor
- High titer: Bypassing agents (rFVIIa, FEIBA)

**Immune Tolerance Induction:**
- Daily high-dose factor for months to years
- Goal: Eradicate inhibitor
- Success rate: 60-80%`,
      keyTerms: [
        { term: 'emicizumab', definition: 'Bispecific antibody mimicking factor VIII function; subcutaneous prophylaxis' },
        { term: 'bypassing agent', definition: 'Therapy that bypasses the need for factor VIII/IX (rFVIIa, FEIBA)' },
        { term: 'immune tolerance induction', definition: 'Regimen to eliminate inhibitors using regular factor exposure' },
        { term: 'extended half-life', definition: 'Factor products engineered to last longer in circulation' },
      ],
      clinicalNotes: 'Emicizumab cannot be monitored with standard aPTT. Use chromogenic factor VIII assay (bovine-based). Do not use FEIBA with emicizumab - thrombotic risk.',
    },
    4: {
      level: 4,
      summary: 'Hemophilia treatment is evolving from factor replacement toward non-factor therapies and gene therapy, with personalized approaches based on PK and inhibitor status.',
      explanation: `## Pathobiology

**Factor VIII Structure:**
- Large protein (2332 amino acids)
- A1-A2-B-A3-C1-C2 domains
- B domain dispensable for function
- Circulates bound to von Willebrand factor

**Factor IX Structure:**
- Vitamin K-dependent serine protease
- Gla domain for membrane binding
- Activation by factor XIa or VIIa-TF

## Pharmacokinetics

**Standard Factor VIII:**
- Half-life: 8-12 hours
- Wide interpatient variability
- Increased clearance in children

**Extended Half-Life (EHL):**
- PEGylation: 14-19 hours
- Fc fusion: 19 hours
- Albumin fusion: Similar extension

**Factor IX EHL:**
- Fc fusion (Alprolix): ~80 hours
- Albumin (Idelvion): ~100 hours
- Dramatic improvement over standard

## Inhibitor Biology

**Risk Factors:**
- Severe mutations (null genotype)
- Family history
- Intensive early treatment
- African ancestry
- HLA type

**Mechanisms:**
- Alloantibodies against foreign epitopes
- Polyclonal, often targeting C2 or A2 domains
- Can be transient or persistent

**Bethesda Assay:**
- Measures inhibitor titer
- 1 BU = 50% reduction in factor activity
- Low titer: <5 BU, High titer: ≥5 BU

## Treatment Algorithm

**Without Inhibitor:**
- Prophylaxis: Factor EHL or emicizumab
- Breakthrough bleeds: Factor replacement
- Surgery: Factor replacement

**With Inhibitor:**
- Prophylaxis: Emicizumab preferred
- Bleeding: rFVIIa or aPCC (FEIBA)
- Caution: No aPCC with emicizumab

**Emicizumab Details:**
- Loading: 3mg/kg weekly x 4 weeks
- Maintenance: 1.5mg/kg weekly, 3mg/kg q2wk, or 6mg/kg q4wk
- Monitor: Anti-drug antibodies
- Lab interference: aPTT uninterpretable

## Gene Therapy

**Hemophilia A:**
- AAV5-FVIII (valoctocogene roxaparvovec)
- Single IV infusion
- Factor levels: 20-60% in responders
- Declining over time in some

**Hemophilia B:**
- AAV5-FIX (etranacogene dezaparvovec)
- More durable responses
- Factor IX >30% sustained
- Approved by FDA

**Considerations:**
- Pre-existing AAV antibodies
- One-time treatment
- Liver enzyme monitoring
- Long-term durability unknown

## Special Situations

**Surgery:**
- Continuous infusion or frequent bolus
- Maintain trough >50% for major surgery
- Antifibrinolytics for dental procedures

**Acquired Hemophilia:**
- Autoantibodies against factor VIII
- Often idiopathic or autoimmune
- Treat with bypassing agents + immunosuppression`,
      keyTerms: [
        { term: 'Bethesda unit', definition: 'Measure of inhibitor titer; amount that neutralizes 50% of factor' },
        { term: 'aPCC', definition: 'Activated prothrombin complex concentrate (FEIBA); bypassing agent' },
        { term: 'AAV', definition: 'Adeno-associated virus; vector for hemophilia gene therapy' },
        { term: 'pharmacokinetic dosing', definition: 'Individualizing factor doses based on patient-specific PK parameters' },
      ],
      clinicalNotes: 'Gene therapy offers potential cure but durability uncertain. Pre-existing AAV antibodies exclude some patients. Hepatotoxicity requires monitoring.',
    },
    5: {
      level: 5,
      summary: 'Contemporary hemophilia care integrates personalized factor replacement, non-factor therapies, and potentially curative gene therapy in a comprehensive management approach.',
      explanation: `## Precision Medicine in Hemophilia

**Genotype-Phenotype:**
- Null mutations: Highest inhibitor risk
- Intron 22 inversion: 40% of severe A
- Missense mutations: May have residual activity

**Pharmacokinetic Tailoring:**
- Population PK models
- Web-accessible dosing tools
- Trough-driven prophylaxis

## Non-Factor Therapies

**Rebalancing Hemostasis:**

*Emicizumab:*
- Bridges FIXa-FX, mimics FVIIIa
- 87% reduction in bleeds (HAVEN trials)
- Works with and without inhibitors
- Cannot be monitored with aPTT

*Fitusiran:*
- Antithrombin knockdown via siRNA
- Monthly subcutaneous
- Phase 3 demonstrated efficacy
- Thrombosis signal under investigation

*Concizumab:*
- Anti-TFPI antibody
- Releases brake on coagulation initiation
- Subcutaneous, daily or longer
- Phase 3 ongoing

**Comparative Considerations:**
| Agent | Target | Route | Frequency | Inhibitor |
|-------|--------|-------|-----------|-----------|
| Emicizumab | FIXa-FX | SQ | Weekly-monthly | Yes |
| Fitusiran | Antithrombin | SQ | Monthly | Yes |
| Concizumab | TFPI | SQ | Daily | Yes |

## Gene Therapy

**Current Landscape:**

*Hemophilia A:*
- Valoctocogene roxaparvovec (BioMarin)
- Mean FVIII 40 IU/dL at 1 year
- Decline observed over time
- Approved in EU, under review in US

*Hemophilia B:*
- Etranacogene dezaparvovec (CSL)
- Mean FIX 37 IU/dL sustained
- FDA approved (2022)
- More durable than hemophilia A GT

**Eligibility:**
- Adults with severe hemophilia
- No pre-existing AAV antibodies (30-50% excluded)
- No active liver disease
- Acceptable inhibitor history

**Monitoring:**
- Factor levels
- Liver enzymes (transaminitis common)
- Capsid antibodies
- Long-term tumor surveillance

**Limitations:**
- Single vector dose (anti-capsid immunity)
- Durability questions
- Cost (~$2-3 million)
- Re-dosing not possible with same vector

## Comprehensive Care

**Components:**
- Hematologist specializing in hemophilia
- Orthopedics for joint management
- Physical therapy
- Psychosocial support
- Genetics/counseling
- Dental care
- Emergency planning

**Hemophilic Arthropathy:**
- Prevention: Primary prophylaxis
- Management: Physical therapy, pain control
- Surgery: Synovectomy, joint replacement
- Imaging: MRI for early changes

**Women with Hemophilia:**
- Carriers may have low factor levels
- Bleeding with menses, procedures
- Pregnancy management complex
- Peripartum factor coverage

## Future Directions

**Next-Gen Gene Therapy:**
- Improved vector designs
- Higher expression
- Re-dosing strategies
- In vivo gene editing

**Novel Non-Factor:**
- Combination approaches
- Improved safety profiles
- Oral agents in development

**Treatment Goals:**
- Zero bleeds
- Normal joint health
- Improved quality of life
- Potential cure with gene therapy`,
      keyTerms: [
        { term: 'HAVEN trials', definition: 'Clinical program establishing emicizumab efficacy in hemophilia A' },
        { term: 'valoctocogene roxaparvovec', definition: 'AAV5-FVIII gene therapy for hemophilia A' },
        { term: 'etranacogene dezaparvovec', definition: 'AAV5-FIX gene therapy; FDA approved for hemophilia B' },
        { term: 'TFPI', definition: 'Tissue factor pathway inhibitor; target for concizumab' },
      ],
      clinicalNotes: `**Board Pearls:**
- Hemophilia: X-linked, prolonged aPTT, normal PT
- Hemophilia A (VIII) more common than B (IX)
- Severity correlates with factor level (<1% severe)
- Hemarthrosis is hallmark, leads to arthropathy
- Emicizumab revolutionized hemophilia A treatment
- Gene therapy approved for hemophilia B, promising for A
- Inhibitors: 30% in severe A, treat with bypassing agents
- Do not use aPCC (FEIBA) with emicizumab - TMA risk`,
    },
  },

  media: [
    {
      id: 'hemophilia-joint',
      type: 'image',
      filename: 'hemophilic-arthropathy.jpg',
      title: 'Hemophilic Arthropathy',
      description: 'X-ray showing joint damage from recurrent hemarthrosis',
    },
  ],

  citations: [
    {
      id: 'srivastava-2020',
      type: 'article',
      title: 'WFH Guidelines for the Management of Hemophilia, 3rd edition',
      authors: ['Srivastava A', 'Santagostino E', 'et al'],
      source: 'Haemophilia',
      url: 'https://doi.org/10.1111/hae.14046',
    },
  ],

  crossReferences: [
    { targetId: 'condition-von-willebrand-disease', targetType: 'condition', relationship: 'related', label: 'von Willebrand Disease' },
    { targetId: 'process-coagulation-cascade', targetType: 'pathway', relationship: 'related', label: 'Coagulation Cascade' },
  ],

  tags: {
    systems: ['hematologic'],
    topics: ['bleeding disorder', 'coagulation', 'hematology'],
    keywords: ['hemophilia', 'factor VIII', 'factor IX', 'emicizumab', 'gene therapy'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'pediatrics'],
    },
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default hemophilia;
