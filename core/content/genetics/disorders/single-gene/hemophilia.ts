/**
 * Hemophilia - Comprehensive Educational Content
 */

import { EducationalContent } from "../../../types";

export const hemophiliaContent: EducationalContent = {
  id: "condition-hemophilia",
  type: "condition",
  name: "Hemophilia",
  alternateNames: ["Hemophilia A", "Hemophilia B", "Royal Disease", "Bleeding Disorder"],
  hpoId: "HP:0001892",

  levels: {
    1: {
      level: 1,
      summary: "Hemophilia is an inherited bleeding disorder where blood does not clot properly because of missing clotting proteins, causing prolonged bleeding after injuries.",
      explanation: `Hemophilia is a genetic condition that affects how blood clots. People with hemophilia bleed longer than normal because they lack certain clotting proteins.

**Types:**
- **Hemophilia A**: Missing or low factor VIII (most common)
- **Hemophilia B**: Missing or low factor IX

**What happens?**
- Blood cannot clot normally after injury
- Internal bleeding can occur, especially in joints
- Minor cuts may bleed longer than usual
- Serious bleeding after surgery or dental work

**Severity:**
- **Mild**: Bleeding only after injury or surgery
- **Moderate**: Occasional spontaneous bleeding
- **Severe**: Frequent spontaneous bleeding, especially in joints

**How is it inherited?**
- X-linked recessive
- Mainly affects males
- Females are usually carriers

**Treatment:**
- Replacement of the missing clotting factor
- May be on-demand (when bleeding) or preventive (prophylaxis)
- New treatments can reduce or eliminate the need for infusions`,
      keyTerms: [
        { term: "hemophilia", definition: "Inherited bleeding disorder due to missing clotting factors" },
        { term: "clotting factor", definition: "Proteins in blood needed to form clots and stop bleeding" },
        { term: "prophylaxis", definition: "Preventive treatment given regularly to prevent bleeding" },
        { term: "X-linked", definition: "Gene carried on the X chromosome" },
      ],
      analogies: [
        "Clotting factors are like the ingredients in a recipe - if one is missing, the final product (a blood clot) does not form correctly.",
        "Prophylaxis is like wearing a seatbelt - protection before problems happen.",
      ],
      examples: [
        "A child with severe hemophilia A receives factor VIII infusions twice weekly to prevent bleeding.",
        "A man with mild hemophilia only needs treatment before dental procedures or surgery.",
      ],
    },
    2: {
      level: 2,
      summary: "Hemophilia A and B are X-linked recessive coagulation disorders caused by factor VIII and IX deficiency respectively, classified by factor level severity, with management evolving from replacement therapy to novel non-factor therapies and gene therapy.",
      explanation: `Hemophilia results from mutations in genes encoding clotting factors, predominantly affecting males.

**Classification:**
| Type | Gene | Chromosome | Incidence |
|------|------|------------|-----------|
| Hemophilia A | F8 | Xq28 | 1:5,000 males |
| Hemophilia B | F9 | Xq27 | 1:30,000 males |

**Severity by Factor Level:**
| Severity | Factor Level | Clinical |
|----------|--------------|----------|
| Severe | <1% | Spontaneous bleeding |
| Moderate | 1-5% | Bleeding with minor trauma |
| Mild | 5-40% | Bleeding with surgery/trauma |

**Clinical Features:**
| Site | Manifestation |
|------|---------------|
| Joints | Hemarthrosis (hallmark) |
| Muscles | Hematomas |
| CNS | Intracranial hemorrhage (serious) |
| GI | GI bleeding |
| GU | Hematuria |

**Diagnosis:**
- Prolonged aPTT, normal PT
- Factor VIII or IX assay
- Genetic testing for mutation identification

**Inheritance:**
- X-linked recessive
- Affected males pass to all daughters (carriers)
- Carrier females have 50% affected sons, 50% carrier daughters
- ~30% de novo mutations

**Treatment Evolution:**
| Era | Approach |
|-----|----------|
| Past | Blood products |
| Standard | Recombinant factors |
| Extended | Extended half-life factors |
| Novel | Non-factor therapies (emicizumab) |
| Emerging | Gene therapy |`,
      keyTerms: [
        { term: "hemarthrosis", definition: "Bleeding into joints; characteristic of severe hemophilia" },
        { term: "factor VIII", definition: "Clotting protein deficient in hemophilia A" },
        { term: "aPTT", definition: "Activated partial thromboplastin time; prolonged in hemophilia" },
        { term: "extended half-life", definition: "Modified factor products lasting longer in body" },
      ],
      analogies: [
        "The clotting cascade is like a row of dominoes - factor VIII or IX are key pieces that need to fall for the chain to complete.",
        "Extended half-life factors are like slow-release medications - they work longer so you need fewer doses.",
      ],
    },
    3: {
      level: 3,
      summary: "Hemophilia pathophysiology involves intrinsic pathway deficiency with genotype-phenotype correlations, management complicated by inhibitor development, and transformed by emicizumab and emerging gene therapies.",
      explanation: `## Molecular Pathophysiology

### Coagulation Cascade
- Factor VIII: Cofactor for Factor IXa
- Factor IX: Serine protease
- Together activate Factor X
- Deficiency impairs thrombin generation

### Mutations
| Type | Hemophilia A | Hemophilia B |
|------|--------------|--------------|
| Intron 22 inversion | ~45% severe | N/A |
| Point mutations | Variable | Most common |
| Deletions | Variable | Less common |

### Genotype-Phenotype
| Mutation Type | Phenotype |
|---------------|-----------|
| Null mutations | Severe, inhibitor risk |
| Missense | Variable |
| Splice site | Variable |

## Inhibitors

### Development
- Antibodies against infused factor
- Occurs in 25-30% of severe hemophilia A
- Less common in hemophilia B (1-3%)
- High-risk mutations identified

### Management
| Strategy | Approach |
|----------|----------|
| Immune tolerance induction | High-dose factor exposure |
| Bypassing agents | aPCC, rFVIIa |
| Emicizumab | Non-factor prophylaxis |

## Current Therapies

### Factor Replacement
| Type | Half-Life | Dosing |
|------|-----------|--------|
| Standard FVIII | 8-12 hours | 3x/week |
| Extended FVIII | 19+ hours | 2x/week |
| Standard FIX | 18-24 hours | 2x/week |
| Extended FIX | 70-100 hours | Weekly-biweekly |

### Emicizumab (Hemlibra)
- Bispecific antibody mimicking FVIII
- Works in patients with and without inhibitors
- Weekly to monthly dosing
- Subcutaneous administration

## Comprehensive Care
- Hemophilia Treatment Centers (HTCs)
- Multidisciplinary approach
- Joint assessment and physical therapy
- Psychosocial support`,
      keyTerms: [
        { term: "inhibitor", definition: "Antibody against clotting factor that neutralizes its activity" },
        { term: "immune tolerance induction", definition: "Protocol to eliminate inhibitors using high-dose factor" },
        { term: "emicizumab", definition: "Bispecific antibody mimicking factor VIII function" },
        { term: "bypassing agent", definition: "Treatment working around the missing factor to achieve clotting" },
      ],
      clinicalNotes: "Inhibitor development dramatically complicates management. Emicizumab has transformed care for inhibitor patients and increasingly used for all severe hemophilia A. Genetic testing identifies inhibitor risk and enables carrier detection.",
    },
    4: {
      level: 4,
      summary: "Advanced hemophilia management encompasses gene therapy approvals, individualized PK-guided dosing, comprehensive inhibitor management, and hemophilia B-specific considerations with emerging fitusiran.",
      explanation: `## Gene Therapy

### Approved Therapies
| Therapy | Type | Indication |
|---------|------|------------|
| Valoctocogene roxaparvovec | AAV-FVIII | Hem A without inhibitors |
| Etranacogene dezaparvovec | AAV-FIX | Hem B without inhibitors |

### Outcomes
- Sustained factor expression
- Reduced/eliminated prophylaxis
- Durability questions remain
- Liver safety monitoring

### Patient Selection
| Factor | Consideration |
|--------|---------------|
| AAV antibodies | May exclude |
| Liver disease | Contraindication |
| Inhibitors | Exclusion |
| Age | Typically adults |

## Individualized Dosing

### PK-Guided Approach
- Individual factor levels measured
- Population PK models
- Target trough optimization
- Activity-adjusted dosing

### Targets
| Activity | Target Trough |
|----------|---------------|
| Standard | 1-3% |
| Active lifestyle | 5-15% |
| High-risk | >15% |

## Hemophilia B Specifics

### Emerging Therapies
| Agent | Mechanism |
|-------|-----------|
| Extended FIX | Fc fusion, albumin fusion, PEGylated |
| Gene therapy | AAV-FIX (approved) |
| Fitusiran | siRNA targeting antithrombin |

### Fitusiran
- RNAi knockdown of antithrombin
- Rebalances hemostasis
- Works for Hem A and B
- Thrombosis risk monitoring needed

## Comprehensive Care Evolution

### HTCs
- Coordinated specialty care
- Outcome tracking
- Research participation

### Women with Hemophilia
- Symptomatic carriers (low factor)
- Acquired considerations
- Obstetric management`,
      keyTerms: [
        { term: "AAV", definition: "Adeno-associated virus; vector for gene therapy delivery" },
        { term: "PK-guided dosing", definition: "Pharmacokinetics-informed individualized factor dosing" },
        { term: "fitusiran", definition: "siRNA therapy targeting antithrombin to rebalance hemostasis" },
        { term: "trough level", definition: "Lowest factor level before next dose" },
      ],
      clinicalNotes: "Gene therapy approved for both hemophilia A and B in select patients. Individualized PK dosing optimizes prophylaxis. Fitusiran offers novel approach for both types. Women with hemophilia need appropriate recognition and care.",
    },
    5: {
      level: 5,
      summary: "State-of-the-art hemophilia care integrates approved gene therapies with long-term outcomes monitoring, emerging rebalancing therapies, global access initiatives, and precision medicine approaches.",
      explanation: `## Gene Therapy Landscape

### Current Status
| Factor | Therapy | Durability Data |
|--------|---------|-----------------|
| FVIII | Valrox | 5+ years, declining levels |
| FIX | Hemgenix | More stable expression |

### Challenges
- Pre-existing AAV immunity
- Expression durability
- Re-dosing limitations
- Cost and access

### Future Directions
- Capsid engineering
- Non-viral delivery
- In vivo gene editing
- Pediatric applications

## Rebalancing Therapies

### Concept
- Target anticoagulant proteins
- Restore hemostatic balance
- Factor-independent approach

### Pipeline
| Target | Mechanism |
|--------|-----------|
| Antithrombin (fitusiran) | siRNA |
| TFPI (concizumab) | Antibody |
| Protein C pathway | Research |

### Potential Advantages
- Subcutaneous dosing
- Longer intervals
- Works with inhibitors

## Global Access

### Disparities
| Region | Treatment Access |
|--------|------------------|
| High income | Novel therapies |
| Middle income | Standard factor |
| Low income | Limited/none |

### Initiatives
- World Federation of Hemophilia
- Humanitarian aid programs
- Local manufacturing support

## Precision Medicine

### Genotype-Informed Care
- Inhibitor risk prediction
- Carrier identification
- PK prediction
- Treatment selection

### Outcomes Research
- Real-world data
- Long-term gene therapy
- Quality of life metrics

## Patient-Centered Care

### Shared Decision-Making
- Therapy options
- Lifestyle considerations
- Risk-benefit discussion

### Transition
- Pediatric to adult care
- Self-management
- Comprehensive planning`,
      keyTerms: [
        { term: "rebalancing therapy", definition: "Treatment targeting natural anticoagulants to restore hemostatic balance" },
        { term: "TFPI", definition: "Tissue Factor Pathway Inhibitor; therapeutic target in hemophilia" },
        { term: "capsid engineering", definition: "Modifying AAV structure to reduce immunogenicity and improve delivery" },
      ],
      clinicalNotes: "Gene therapy represents potential functional cure for eligible patients. Rebalancing therapies offer novel non-factor approaches. Global equity remains major challenge. Support shared decision-making as options expand dramatically.",
    },
  },

  media: [],
  citations: [],
  crossReferences: [
    { targetId: "concept-x-linked", targetType: "concept", relationship: "related", label: "X-Linked Inheritance" },
  ],
  tags: {
    systems: ["genetics", "hematology"],
    topics: ["coagulation disorders", "single gene disorders"],
    keywords: ["hemophilia", "factor VIII", "factor IX", "gene therapy"],
    clinicalRelevance: "critical",
    examRelevance: { usmle: true, nbme: true, shelf: ["medicine", "pediatrics"] },
  },
  createdAt: "2026-01-24T00:00:00.000Z",
  updatedAt: "2026-01-24T00:00:00.000Z",
  version: 1,
  status: "published",
};

export default hemophiliaContent;
