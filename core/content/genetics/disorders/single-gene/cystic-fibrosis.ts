/**
 * Cystic Fibrosis - Comprehensive Educational Content
 */

import { EducationalContent } from "../../../types";

export const cysticFibrosisContent: EducationalContent = {
  id: "condition-cystic-fibrosis",
  type: "condition",
  name: "Cystic Fibrosis",
  alternateNames: ["CF", "Mucoviscidosis"],
  hpoId: "HP:0000819",

  levels: {
    1: {
      level: 1,
      summary: "Cystic fibrosis is a genetic condition that causes thick, sticky mucus to build up in the lungs and digestive system, making it hard to breathe and digest food.",
      explanation: `Cystic fibrosis (CF) is an inherited condition that affects the lungs and digestive system. It is caused by changes in the CFTR gene.

**What happens in CF?**
- The body makes mucus that is too thick and sticky
- This clogs the lungs, leading to breathing problems and infections
- It blocks the pancreas, making it hard to digest food
- It can also affect other organs

**Common symptoms:**
- Frequent lung infections
- Coughing and wheezing
- Poor growth despite good appetite
- Salty-tasting skin
- Digestive problems

**How is it inherited?**
- Both parents must be carriers
- Each pregnancy has a 25% chance of CF if both parents carry the gene
- Carriers do not have CF but can pass the gene to children

**Treatment:**
- Breathing treatments to clear mucus
- Antibiotics for infections
- Enzymes to help digest food
- New medicines that fix the underlying problem for many patients`,
      keyTerms: [
        { term: "cystic fibrosis", definition: "Genetic condition causing thick mucus that affects lungs and digestion" },
        { term: "CFTR gene", definition: "Gene that when not working causes cystic fibrosis" },
        { term: "carrier", definition: "Person with one CF gene who does not have symptoms" },
        { term: "mucus", definition: "Normally slippery substance that becomes thick and sticky in CF" },
      ],
      analogies: [
        "In CF, mucus is like honey instead of water - too thick to flow and clear properly.",
        "The CFTR protein is like a gate that controls salt and water - when broken, everything gets out of balance.",
      ],
      examples: [
        "A child with CF does breathing treatments twice daily to help clear mucus from the lungs.",
        "Newborn screening catches most CF cases early, allowing treatment to start right away.",
      ],
    },
    2: {
      level: 2,
      summary: "Cystic fibrosis is an autosomal recessive disorder caused by CFTR gene mutations resulting in defective chloride channel function, affecting multiple organ systems with progressive lung disease as the major cause of morbidity and mortality.",
      explanation: `Cystic fibrosis is caused by mutations in the CFTR gene (chromosome 7), which encodes a chloride channel protein.

**Genetics:**
| Aspect | Detail |
|--------|--------|
| Inheritance | Autosomal recessive |
| Gene | CFTR |
| Carrier frequency | ~1 in 25 (Caucasian) |
| Most common mutation | F508del (~70% of alleles) |

**Pathophysiology:**
- CFTR dysfunction → defective chloride/water transport
- Thick, dehydrated secretions
- Progressive organ damage

**Clinical Manifestations:**
| System | Features |
|--------|----------|
| Pulmonary | Chronic infection, bronchiectasis |
| Pancreatic | Insufficiency (85-90%) |
| GI | Meconium ileus, DIOS |
| Hepatobiliary | Cirrhosis, gallstones |
| Reproductive | Male infertility (CBAVD) |
| Other | Salty sweat, osteoporosis |

**Diagnosis:**
- Newborn screening (IRT + DNA or IRT + IRT)
- Sweat chloride test (>60 mmol/L diagnostic)
- Genetic testing

**Treatment:**
| Approach | Purpose |
|----------|---------|
| Airway clearance | Remove mucus |
| Mucolytics (dornase alfa) | Thin mucus |
| Antibiotics | Treat/prevent infection |
| Pancreatic enzymes | Aid digestion |
| CFTR modulators | Fix underlying defect |`,
      keyTerms: [
        { term: "CFTR", definition: "Cystic Fibrosis Transmembrane Conductance Regulator; chloride channel protein" },
        { term: "F508del", definition: "Most common CF mutation; deletion of phenylalanine at position 508" },
        { term: "sweat chloride", definition: "Diagnostic test measuring salt in sweat" },
        { term: "CBAVD", definition: "Congenital Bilateral Absence of Vas Deferens; cause of male CF infertility" },
        { term: "CFTR modulator", definition: "Drug that improves CFTR protein function" },
      ],
      analogies: [
        "CFTR modulators are like fixing a broken door rather than just cleaning up the mess it causes.",
        "Pancreatic enzymes are like adding extra workers to help digest food when the pancreas cannot.",
      ],
    },
    3: {
      level: 3,
      summary: "Cystic fibrosis involves classified CFTR mutation types with genotype-phenotype correlations informing modulator therapy eligibility, while comprehensive care addresses progressive multisystem involvement.",
      explanation: `## CFTR Mutation Classes

| Class | Defect | Example | Modulator Response |
|-------|--------|---------|-------------------|
| I | No protein synthesis | G542X | Read-through agents (research) |
| II | Protein trafficking | F508del | Correctors + potentiators |
| III | Gating defect | G551D | Potentiators |
| IV | Conductance defect | R117H | Potentiators |
| V | Reduced protein | 3849+10kbC>T | May respond to modulators |
| VI | Decreased stability | 4326delTC | Variable |

## Genotype-Phenotype

### Pancreatic Status
- PI (insufficient): Two severe mutations
- PS (sufficient): At least one mild mutation

### Sweat Chloride Correlation
| Category | Sweat Cl (mmol/L) |
|----------|-------------------|
| Classic CF | >60 |
| CFTR-related | 30-59 |
| Unlikely CF | <30 |

## CFTR Modulator Therapy

### Approved Medications
| Drug | Mechanism | Mutations |
|------|-----------|-----------|
| Ivacaftor | Potentiator | Gating (G551D, etc.) |
| Lumacaftor/ivacaftor | Corrector + potentiator | F508del homozygotes |
| Tezacaftor/ivacaftor | Corrector + potentiator | F508del |
| Elexacaftor/tezacaftor/ivacaftor | Triple | F508del + many others |

### Trikafta (ETI)
- ~90% of CF patients eligible
- Dramatic improvements in lung function
- Disease-modifying therapy

## Pulmonary Management

### Infection Control
| Pathogen | Approach |
|----------|----------|
| P. aeruginosa | Eradication, chronic suppression |
| MRSA | Eradication attempts |
| NTM | Screening, treatment if needed |

### Monitoring
- PFTs quarterly
- Respiratory cultures
- CT imaging periodic`,
      keyTerms: [
        { term: "potentiator", definition: "Drug increasing CFTR channel open time" },
        { term: "corrector", definition: "Drug helping CFTR protein fold and traffic correctly" },
        { term: "Trikafta", definition: "Triple combination modulator therapy effective for most CF patients" },
        { term: "pancreatic insufficiency", definition: "Inability to produce digestive enzymes; requires enzyme replacement" },
      ],
      clinicalNotes: "Assess CFTR genotype to determine modulator eligibility. Trikafta has transformed CF outcomes for eligible patients. Continue multidisciplinary CF care even with modulator therapy.",
    },
    4: {
      level: 4,
      summary: "Advanced CF care integrates precision modulator selection, management of CFTR-related conditions, transplant considerations, and addresses emerging complications in the era of highly effective modulator therapy.",
      explanation: `## Precision Therapy

### Mutation-Specific Selection
| Genotype | Recommended Therapy |
|----------|---------------------|
| F508del homozygous | Trikafta |
| F508del + responsive mutation | Trikafta |
| F508del + MF mutation | Trikafta |
| Gating mutation | Ivacaftor ± |
| Non-responsive | Supportive care, clinical trials |

### Response Assessment
- FEV1 improvement expected
- Sweat chloride reduction
- Quality of life measures
- Weight/nutritional status

## CFTR-Related Disorders

### CBAVD
- May be isolated CF manifestation
- CFTR testing indicated
- Partner carrier screening important

### CFTR-RD
- Sweat chloride 30-59
- Atypical presentations
- May benefit from modulators

## Transplant Era

### Indications
- FEV1 <30% predicted
- Rapid decline despite optimal therapy
- Recurrent severe exacerbations

### Modulator Considerations
- May delay need for transplant
- Role pre/post-transplant unclear

## New-Era Complications

### With Effective Modulators
| Issue | Consideration |
|-------|---------------|
| Hepatotoxicity | Monitoring needed |
| Cataracts | Pediatric screening |
| Pregnancy | Increasing, safety data accumulating |
| Mental health | Psychosocial adjustment |

### Aging CF Population
- New complications emerging
- Cardiovascular risk
- Malignancy surveillance`,
      keyTerms: [
        { term: "minimal function mutation", definition: "CFTR mutation producing no functional protein" },
        { term: "CFTR-RD", definition: "CFTR-Related Disorder; condition with some but not all CF features" },
        { term: "FEV1", definition: "Forced expiratory volume in 1 second; key lung function measure" },
      ],
      clinicalNotes: "Trikafta has decreased transplant listings dramatically. Pregnancy in CF increasing - pre-conception counseling important. Monitor for modulator side effects. Address psychosocial adjustment to transformed disease trajectory.",
    },
    5: {
      level: 5,
      summary: "State-of-the-art CF care encompasses emerging gene therapies, modulator-resistant mutation strategies, reproductive advances, and lifespan care as CF transitions from fatal childhood disease to manageable chronic condition.",
      explanation: `## Gene Therapy and Editing

### Approaches
| Technology | Status |
|------------|--------|
| mRNA delivery | Clinical trials |
| Gene editing (CRISPR) | Preclinical |
| Antisense for class I | Research |

### Challenges
- Lung delivery
- Durability of effect
- Immune response

## Non-Modulator-Responsive Mutations

### Research Strategies
| Approach | Target |
|----------|--------|
| Read-through agents | Class I |
| Amplifiers | Increase CFTR RNA |
| Next-gen correctors | Beyond F508del |
| Gene therapy | Universal |

## Reproductive Considerations

### Fertility
| Sex | Issue | Options |
|-----|-------|---------|
| Male | CBAVD | TESE + IVF |
| Female | Thickened mucus | Usually fertile |

### Pregnancy
- Modulator safety data growing
- Pre-conception optimization
- Multidisciplinary care

### Carrier Testing
- Expanded panels available
- Partner testing essential
- PGT-M option

## Lifespan Care

### Extended Survival
- Median survival now >50 years (projected)
- Adult care systems needed
- New complications emerging

### Quality Metrics
- CF Foundation care center network
- Registry data
- Treatment benchmarks

## Research Directions
- Precision combinations
- Biomarker development
- Long-term modulator outcomes
- Cure strategies`,
      keyTerms: [
        { term: "mRNA therapy", definition: "Delivery of CFTR mRNA to produce functional protein" },
        { term: "amplifiers", definition: "Drugs increasing CFTR mRNA levels before translation" },
        { term: "CF Foundation", definition: "Organization advancing CF research and care standards" },
      ],
      clinicalNotes: "Highly effective modulator therapy (HEMT) has transformed CF outcomes. Continue comprehensive care even with HEMT. Gene therapy approaches advancing but not yet clinical. Facilitate research participation.",
    },
  },

  media: [],
  citations: [],
  crossReferences: [
    { targetId: "concept-autosomal-recessive", targetType: "concept", relationship: "related", label: "Autosomal Recessive Inheritance" },
  ],
  tags: {
    systems: ["genetics", "pulmonology", "gastroenterology"],
    topics: ["single gene disorders", "respiratory disease"],
    keywords: ["cystic fibrosis", "CFTR", "Trikafta", "lung disease"],
    clinicalRelevance: "critical",
    examRelevance: { usmle: true, nbme: true, shelf: ["medicine", "pediatrics"] },
  },
  createdAt: "2026-01-24T00:00:00.000Z",
  updatedAt: "2026-01-24T00:00:00.000Z",
  version: 1,
  status: "published",
};

export default cysticFibrosisContent;
