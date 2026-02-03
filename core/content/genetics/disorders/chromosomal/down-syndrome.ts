/**
 * Down Syndrome - Comprehensive Educational Content
 */

import { EducationalContent } from "../../../types";

export const downSyndromeContent: EducationalContent = {
  id: "condition-down-syndrome",
  type: "condition",
  name: "Down Syndrome",
  alternateNames: ["Trisomy 21", "Down\"s Syndrome"],
  hpoId: "HP:0000821",

  levels: {
    1: {
      level: 1,
      summary: "Down syndrome is a genetic condition caused by having an extra copy of chromosome 21, which affects development and causes characteristic physical features.",
      explanation: `Down syndrome happens when a baby is born with an extra copy of chromosome 21. Instead of having 46 chromosomes, people with Down syndrome have 47.

**What causes it?**
- Usually happens by chance during egg or sperm formation
- The extra chromosome is not caused by anything parents did
- Risk increases with maternal age, but can happen at any age

**What are common features?**
- Characteristic facial features
- Some degree of intellectual disability (mild to moderate)
- Shorter stature
- Low muscle tone as babies
- May have heart defects or other health issues

**Health considerations:**
- Heart problems (about 50% have heart defects)
- Hearing and vision problems
- Thyroid problems
- Higher risk of certain infections

**Support and outcomes:**
- Early intervention helps development
- Many people live semi-independently
- Life expectancy has greatly improved (60+ years)
- Each person is unique with their own abilities`,
      keyTerms: [
        { term: "trisomy", definition: "Having three copies of a chromosome instead of two" },
        { term: "Down syndrome", definition: "Condition caused by an extra chromosome 21" },
        { term: "intellectual disability", definition: "Limitations in thinking and learning abilities" },
      ],
      analogies: [
        "Having trisomy 21 is like having an extra page in a instruction manual - it changes how things develop.",
        "Early intervention is like learning a skill when young - the earlier you start, the better the outcome.",
      ],
      examples: [
        "A baby with Down syndrome may need heart surgery in the first year of life if born with a heart defect.",
        "Many adults with Down syndrome work, have relationships, and participate actively in their communities.",
      ],
    },
    2: {
      level: 2,
      summary: "Down syndrome (trisomy 21) is the most common chromosomal cause of intellectual disability, associated with characteristic phenotype, congenital anomalies, and medical comorbidities requiring comprehensive multidisciplinary care.",
      explanation: `Down syndrome results from trisomy 21, with incidence of approximately 1 in 700 live births.

**Genetic Types:**
| Type | Frequency | Mechanism |
|------|-----------|-----------|
| Free trisomy 21 | 95% | Nondisjunction |
| Translocation | 3-4% | Usually Robertsonian |
| Mosaicism | 1-2% | Post-zygotic nondisjunction |

**Physical Features:**
- Flat facial profile
- Upslanting palpebral fissures
- Epicanthal folds
- Single palmar crease
- Hypotonia
- Small ears

**Medical Associations:**
| System | Condition | Frequency |
|--------|-----------|-----------|
| Cardiac | AVSD, VSD, ASD | 40-50% |
| GI | Duodenal atresia, Hirschsprung | 5-10% |
| Hematologic | Transient myeloproliferative disorder | 10% |
| Endocrine | Hypothyroidism | 15-20% |
| Vision | Cataracts, refractive errors | Common |
| Hearing | Hearing loss | 75% |

**Developmental:**
- Intellectual disability: Usually mild-moderate
- Speech and language delays
- Motor delays
- Variable cognitive profile

**Health Supervision:**
- AAP guidelines for preventive care
- Regular cardiac, thyroid, vision, hearing screening
- Atlantoaxial instability screening`,
      keyTerms: [
        { term: "nondisjunction", definition: "Failure of chromosomes to separate during cell division" },
        { term: "Robertsonian translocation", definition: "Fusion of two acrocentric chromosomes" },
        { term: "AVSD", definition: "Atrioventricular septal defect; common heart defect in Down syndrome" },
        { term: "atlantoaxial instability", definition: "Looseness between upper cervical vertebrae requiring screening" },
      ],
      analogies: [
        "Robertsonian translocation is like two books bound together as one - the material is mostly there but packaged differently.",
        "Mosaicism is like having two different versions of the same document in the same folder.",
      ],
    },
    3: {
      level: 3,
      summary: "Trisomy 21 results from maternal meiotic nondisjunction in most cases, with gene dosage imbalance affecting critical region genes, and phenotype modified by genetic background, mosaicism level, and comorbidity management.",
      explanation: `## Genetic Mechanisms

### Nondisjunction
- Meiosis I (majority): Homologs fail to separate
- Meiosis II: Sister chromatids fail to separate
- ~90% maternal origin
- Maternal age effect: Cohesion protein degradation

### Critical Region
- DSCR: 21q22.1-22.3
- APP gene: Alzheimer pathology
- DYRK1A: Cognitive development
- Multiple genes contribute

### Translocation DS
- 75% de novo
- 25% inherited (parental balanced carrier)
- If inherited: Recurrence risk varies by parent and type

## Phenotype-Genotype

### Mosaicism Effects
| % Trisomic Cells | Phenotype |
|------------------|-----------|
| >50% | Usually full phenotype |
| 10-50% | Variable, often milder |
| <10% | May be undetected |

### Modifier Genes
- GATA1: Megakaryocyte disorders
- JAK2: Myeloproliferative risk
- Individual variation

## Surveillance Guidelines

### By Age
| Age | Screening |
|-----|-----------|
| Newborn | Echo, CBC, TSH |
| 6 months | Hearing, vision |
| Annual | Thyroid, vision, hearing |
| 3-5 years | C-spine if symptomatic/sports |

### Cancer Risk
- ALL: 10-20x increased risk
- TMD: Unique to DS (resolves usually)
- Solid tumors: Decreased risk`,
      keyTerms: [
        { term: "DSCR", definition: "Down Syndrome Critical Region; chromosomal segment with key phenotype-determining genes" },
        { term: "TMD", definition: "Transient Myeloproliferative Disorder; self-limiting leukemia-like condition in newborns with DS" },
        { term: "cohesion proteins", definition: "Proteins holding sister chromatids together; degrade with maternal age" },
      ],
      clinicalNotes: "Translocation DS requires parental karyotypes - recurrence risk depends on parent of origin and translocation type. TMD usually resolves but requires monitoring for subsequent AMKL.",
    },
    4: {
      level: 4,
      summary: "Advanced Down syndrome management integrates precision health approaches, addresses Alzheimer pathology, navigates complex medical decision-making, and incorporates emerging therapeutic research.",
      explanation: `## Precision Health

### Individualized Surveillance
- Risk stratification tools emerging
- Biomarker-guided screening
- Genetic modifiers

### Comorbidity Management
| Condition | Approach |
|-----------|----------|
| CHD | Surgical timing optimization |
| OSA | CPAP, adenotonsillectomy |
| Leukemia | DS-specific protocols |
| Celiac | Screening, dietary management |

## Alzheimer Disease

### Pathophysiology
- APP gene triplication
- Amyloid accumulation by age 40
- Clinical dementia by age 60 in most

### Surveillance
- Baseline cognitive assessment
- Annual screening after 40
- Imaging and biomarkers (research)

### Emerging Treatments
- Amyloid-targeted therapies (research)
- DS-specific trials

## Reproductive Counseling

### For Individuals with DS
- Women: Fertility reduced but possible
- Men: Usually infertile
- Offspring: 50% risk of DS

### For Parents
| Scenario | Recurrence Risk |
|----------|-----------------|
| Free trisomy 21, <35 years | ~1% |
| Free trisomy 21, ≥35 years | Age-related + 1% |
| Maternal translocation carrier | 10-15% |
| Paternal translocation carrier | ~3% |

## Transition and Adult Care
- Healthcare transition planning
- Adult DS clinics
- Employment and housing support
- Guardianship/supported decision-making`,
      keyTerms: [
        { term: "APP gene", definition: "Amyloid Precursor Protein gene on chromosome 21; triplication contributes to Alzheimer in DS" },
        { term: "OSA", definition: "Obstructive Sleep Apnea; common in DS due to airway anatomy" },
        { term: "healthcare transition", definition: "Planned movement from pediatric to adult healthcare services" },
      ],
      clinicalNotes: "Establish baseline cognitive assessments before age 30 for Alzheimer surveillance. Translocation cases require genetic counseling for accurate recurrence risk. Adult DS care increasingly available at specialized centers.",
    },
    5: {
      level: 5,
      summary: "State-of-the-art Down syndrome care encompasses targeted therapeutic development, prenatal intervention research, lifespan health management, and ethical frameworks balancing medical advancement with disability rights perspectives.",
      explanation: `## Therapeutic Research

### Targeted Approaches
| Target | Approach | Status |
|--------|----------|--------|
| DYRK1A | Kinase inhibitors | Trials |
| GABA | Receptor modulators | Trials |
| Amyloid | Anti-amyloid therapies | Trials |
| Chromosome silencing | XIST research | Preclinical |

### Outcome Measures
- Cognitive assessments
- Adaptive function
- Quality of life metrics
- Biomarkers

## Prenatal Considerations

### Screening Evolution
- cfDNA: 99% detection rate
- Earlier detection
- Declining invasive testing

### Decision Support
- Nondirective counseling
- Accurate information
- Connection with DS community
- Full spectrum of outcomes

## Lifespan Health

### Aging Considerations
| Issue | Approach |
|-------|----------|
| Alzheimer | Surveillance, research participation |
| Menopause | Earlier, symptom management |
| Sensory decline | Enhanced screening |
| Mobility | Physical therapy, adaptive equipment |

### Quality of Life
- Supported employment
- Community living options
- Relationships and sexuality
- Recreation and inclusion

## Ethical Frameworks

### Prenatal Testing Debates
- Screening vs. elimination concerns
- Disability rights perspectives
- Information provision quality

### Research Ethics
- Consent and assent
- Benefit-risk balance
- Community engagement

### Allocation and Access
- Healthcare disparities
- Geographic variation
- Insurance challenges`,
      keyTerms: [
        { term: "DYRK1A inhibitors", definition: "Drugs targeting kinase overexpressed in DS; cognitive improvement research" },
        { term: "disability rights", definition: "Movement advocating for rights and inclusion of people with disabilities" },
        { term: "supported decision-making", definition: "Alternative to guardianship preserving autonomy with assistance" },
      ],
      clinicalNotes: "Engage with DS research networks for clinical trial opportunities. Provide balanced prenatal counseling including connection to DS community resources. Address healthcare transition and adult care access proactively.",
    },
  },

  media: [],
  citations: [],
  crossReferences: [
    { targetId: "concept-chromosomal-disorders-overview", targetType: "concept", relationship: "parent", label: "Chromosomal Disorders" },
  ],
  tags: {
    systems: ["genetics"],
    topics: ["chromosomal disorders", "intellectual disability", "congenital heart disease"],
    keywords: ["Down syndrome", "trisomy 21", "intellectual disability"],
    clinicalRelevance: "critical",
    examRelevance: { usmle: true, nbme: true, shelf: ["pediatrics", "medicine"] },
  },
  createdAt: "2026-01-24T00:00:00.000Z",
  updatedAt: "2026-01-24T00:00:00.000Z",
  version: 1,
  status: "published",
};

export default downSyndromeContent;
