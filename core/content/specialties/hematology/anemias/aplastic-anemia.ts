/**
 * Aplastic Anemia - Comprehensive Educational Content
 *
 * A rare but severe bone marrow failure syndrome characterized by pancytopenia
 * and hypocellular bone marrow, with immune-mediated destruction of hematopoietic
 * stem cells as the predominant mechanism.
 */

import { EducationalContent } from '../../../types';

export const aplasticAnemia: EducationalContent = {
  id: 'condition-aplastic-anemia',
  type: 'condition',
  name: 'Aplastic Anemia',
  alternateNames: ['Bone marrow failure', 'Hypoplastic anemia', 'AA'],

  levels: {
    1: {
      level: 1,
      summary: 'Aplastic anemia is a serious condition where your bone marrow stops making enough blood cells.',
      explanation: `Aplastic anemia is like a factory shutdown - your bone marrow, which normally produces blood cells, stops working properly and cannot make enough red blood cells, white blood cells, or platelets.

**Why This Happens:**
The bone marrow is the factory inside your bones that makes all your blood cells. In aplastic anemia, something damages this factory so it cannot work. This can happen because:
- Your immune system attacks the bone marrow by mistake
- Certain drugs or chemicals damage it
- Viral infections
- Sometimes the cause is unknown

**What Happens Without Enough Blood Cells:**
- Not enough red blood cells = tiredness, pale skin (anemia)
- Not enough white blood cells = frequent infections
- Not enough platelets = easy bleeding and bruising

**Common Signs:**
- Feeling very tired and weak
- Getting sick often with infections
- Bruising easily or bleeding that is hard to stop
- Nosebleeds, bleeding gums
- Pale skin

**How It's Treated:**
- Blood transfusions to replace missing cells
- Medicines to calm down the immune system
- Bone marrow transplant (replaces the damaged marrow with healthy marrow)`,
      keyTerms: [
        { term: 'aplastic', definition: 'Failure to develop or form; in this case, the bone marrow fails to make blood cells', pronunciation: 'ay-PLAS-tik' },
        { term: 'bone marrow', definition: 'The soft, spongy tissue inside bones where blood cells are made' },
        { term: 'pancytopenia', definition: 'Low levels of all three types of blood cells (red cells, white cells, and platelets)', pronunciation: 'pan-sy-toh-PEE-nee-ah' },
        { term: 'platelets', definition: 'Tiny blood cells that help your blood clot and stop bleeding' },
      ],
      analogies: [
        'Think of bone marrow like a car factory. In aplastic anemia, the factory mostly shuts down and cannot make enough cars (blood cells).',
        'Blood cells are like workers in your body. Without enough workers, the body cannot function properly.',
      ],
      examples: [
        'A child who develops frequent infections and bruises easily might be tested and found to have aplastic anemia.',
        'Someone exposed to certain chemicals at work might develop aplastic anemia if it damages their bone marrow.',
      ],
    },
    2: {
      level: 2,
      summary: 'Aplastic anemia is a bone marrow failure syndrome characterized by pancytopenia and hypocellular marrow, often caused by T-cell mediated autoimmune destruction of hematopoietic stem cells.',
      explanation: `Aplastic anemia (AA) is a rare but potentially life-threatening condition where the bone marrow fails to produce adequate blood cells. The predominant mechanism in most cases is immune-mediated destruction of hematopoietic stem cells.

**Pathophysiology:**
- Activated cytotoxic T-cells attack hematopoietic stem cells
- Release of interferon-gamma and TNF-alpha suppresses hematopoiesis
- Stem cell pool becomes depleted
- Result: Hypocellular marrow and pancytopenia

**Causes:**
- **Idiopathic**: 70% of cases, presumed autoimmune
- **Drugs**: Chloramphenicol, NSAIDs, antiepileptics, gold
- **Toxins**: Benzene, pesticides, radiation
- **Infections**: Hepatitis (seronegative), EBV, HIV, parvovirus B19
- **Inherited**: Fanconi anemia, dyskeratosis congenita

**Clinical Presentation:**

*Gradual onset over weeks to months:*
- Anemia: Fatigue, dyspnea, pallor
- Thrombocytopenia: Petechiae, purpura, mucosal bleeding
- Neutropenia: Recurrent infections, fever

*Physical Exam:*
- Pallor
- Petechiae, ecchymoses
- Usually NO lymphadenopathy or splenomegaly

**Diagnosis:**

*Blood Tests:*
- Pancytopenia (all cell lines decreased)
- Reticulocyte count very low (marrow not responding)
- No abnormal cells

*Bone Marrow Biopsy:*
- Hypocellular (<30% cellularity in adults)
- Fat replacement
- No fibrosis or malignant cells

**Severity Classification:**
- Moderate: Does not meet severe criteria
- Severe (SAA): At least 2 of 3: ANC <500, platelets <20K, reticulocytes <20K
- Very Severe (vSAA): SAA + ANC <200

**Treatment:**
- Supportive: Transfusions, infection prophylaxis
- Immunosuppressive therapy (IST): ATG + cyclosporine
- Allogeneic stem cell transplant: Curative for younger patients with matched donor`,
      keyTerms: [
        { term: 'hematopoietic stem cell', definition: 'The master cell in bone marrow that can develop into any type of blood cell', pronunciation: 'hee-mat-oh-poy-ET-ik' },
        { term: 'hypocellular marrow', definition: 'Bone marrow that has fewer cells than normal, replaced by fat' },
        { term: 'ATG', definition: 'Antithymocyte globulin; antibodies that suppress T-cells used in aplastic anemia treatment' },
        { term: 'reticulocyte', definition: 'Young red blood cell; very low in aplastic anemia because the marrow is not producing cells', pronunciation: 'reh-TIK-yoo-loh-site' },
      ],
      analogies: [
        'The bone marrow is like a garden where blood cells grow. In aplastic anemia, the soil becomes barren and nothing can grow.',
        'ATG treatment is like calling off the attack dogs (T-cells) that are destroying the garden.',
      ],
    },
    3: {
      level: 3,
      summary: 'Aplastic anemia diagnosis requires bone marrow biopsy demonstrating hypocellularity with exclusion of other causes, with treatment selection guided by age, severity, and donor availability for transplant.',
      explanation: `## Pathophysiology

**Immune-Mediated Mechanism:**
- Oligoclonal T-cell expansion (often Th1 phenotype)
- Cytotoxic T-cells recognize stem cell antigens
- IFN-gamma and TNF-alpha:
  - Direct stem cell toxicity
  - Fas-mediated apoptosis
  - Suppression of hematopoiesis
- Regulatory T-cell dysfunction contributes

**Evidence for Autoimmune Etiology:**
- Response to immunosuppressive therapy
- HLA associations (HLA-DR15)
- T-cell clonality in affected patients
- Presence of PNH clones (escape from immune attack)

## Classification and Etiology

**Acquired Aplastic Anemia:**

| Category | Examples |
|----------|----------|
| Idiopathic | 70% of cases |
| Drug-induced | Chloramphenicol, NSAIDs, gold, carbamazepine, phenytoin |
| Toxins | Benzene, pesticides |
| Viral | Hepatitis (seronegative), EBV, CMV, HIV, parvovirus |
| Pregnancy | Rare, may resolve post-partum |
| Paroxysmal nocturnal hemoglobinuria | Overlap syndrome |

**Inherited Bone Marrow Failure Syndromes:**

| Syndrome | Gene(s) | Features |
|----------|---------|----------|
| Fanconi anemia | FANC genes | Short stature, radial defects, cafe-au-lait |
| Dyskeratosis congenita | TERC, TERT, DKC1 | Nail dystrophy, leukoplakia, skin pigmentation |
| Shwachman-Diamond | SBDS | Pancreatic insufficiency, skeletal abnormalities |
| Diamond-Blackfan | RPS19, others | Pure red cell aplasia, thumb abnormalities |

## Diagnosis

**Initial Evaluation:**
- CBC with differential and reticulocyte count
- Peripheral smear (no dysplasia, no blasts)
- Comprehensive metabolic panel
- LDH, haptoglobin (rule out hemolysis)
- Vitamin B12, folate
- HIV, hepatitis panel

**Bone Marrow Evaluation:**
- Biopsy REQUIRED (aspirate may be falsely normal)
- Cellularity <30% (age-adjusted)
- No dysplasia, fibrosis, or malignant infiltration
- Cytogenetics (rule out MDS)
- Flow cytometry (rule out PNH clone)

**Additional Testing:**
- PNH screen by flow cytometry (present in 50-60%)
- Chromosome breakage test (if <50 years or physical findings)
  - Rules out Fanconi anemia
- Telomere length (if inherited syndrome suspected)
- HLA typing (for transplant planning)

**Differential Diagnosis:**
- Myelodysplastic syndrome (MDS)
- Hypoplastic MDS
- Large granular lymphocyte leukemia
- Hairy cell leukemia
- Metastatic infiltration
- Myelofibrosis (early)
- PNH

## Severity Classification (Camitta Criteria)

**Severe Aplastic Anemia (SAA):**
Marrow cellularity <25% (or <50% with <30% residual hematopoietic cells)
PLUS at least 2 of:
- Neutrophils <500/mcL
- Platelets <20,000/mcL
- Reticulocytes <20,000/mcL (or reticulocyte index <1%)

**Very Severe Aplastic Anemia (vSAA):**
SAA criteria PLUS ANC <200/mcL

**Non-Severe/Moderate AA:**
Does not meet SAA criteria

## Treatment

**Supportive Care:**
- Transfusions: PRBCs (Hb <7-8), platelets (<10K or bleeding)
- CMV-negative, leukocyte-reduced products
- Minimize transfusions in transplant candidates (alloimmunization)
- Infection prophylaxis: Fluoroquinolone, antifungal
- Avoid NSAIDs

**Definitive Therapy:**

*Allogeneic HSCT:*
- First-line for young patients (<40) with matched sibling donor
- 80-90% long-term survival with MSD
- Consider alternative donors if no MSD

*Immunosuppressive Therapy:*
- First-line if no MSD or age >40
- Horse ATG + Cyclosporine (standard)
- Eltrombopag added improves responses
- Response in 60-70% at 6 months

**Treatment Selection:**

| Patient | First-line |
|---------|-----------|
| <40 years, MSD | HSCT |
| <40 years, no MSD | IST +/- eltrombopag; consider MUD HSCT |
| >40 years | IST +/- eltrombopag |
| Refractory | Alternative IST, alternative donor HSCT |`,
      keyTerms: [
        { term: 'horse ATG', definition: 'Antithymocyte globulin derived from horses; first-line immunosuppression for aplastic anemia (superior to rabbit ATG)' },
        { term: 'Fanconi anemia', definition: 'Inherited bone marrow failure syndrome with DNA repair defects; diagnosed by chromosome breakage test', pronunciation: 'fan-KOH-nee' },
        { term: 'PNH clone', definition: 'Population of cells lacking GPI-anchored proteins; frequently found in aplastic anemia, may evolve to clinical PNH' },
        { term: 'MSD', definition: 'Matched sibling donor; optimal source for allogeneic hematopoietic stem cell transplant' },
        { term: 'telomere length', definition: 'Measurement of chromosome end caps; short telomeres suggest inherited bone marrow failure (dyskeratosis congenita)' },
      ],
      clinicalNotes: 'Always perform chromosome breakage testing in young patients (<50 years) to exclude Fanconi anemia before treatment, as these patients have increased sensitivity to conditioning regimens. Screen for PNH clone at diagnosis and follow-up.',
    },
    4: {
      level: 4,
      summary: 'Aplastic anemia management requires integration of immune pathophysiology, genetic predisposition, clonal evolution risk, and individualized treatment algorithms balancing transplant and immunosuppressive approaches.',
      explanation: `## Advanced Pathophysiology

**Immune Dysregulation:**

*T-cell Abnormalities:*
- Oligoclonal CD8+ expansion (skewed repertoire)
- Th1 polarization (IFN-gamma, TNF-alpha predominance)
- Deficient CD4+CD25+ regulatory T-cells
- Increased T-bet transcription factor

*Target Antigens:*
- Myeloperoxidase
- Proteinase 3
- Elastase
- Unknown stem cell antigens

*Cytokine Milieu:*
- Elevated IFN-gamma, TNF-alpha, IL-2
- Fas/FasL pathway activation
- TRAIL-mediated apoptosis

**Clonal Hematopoiesis and Evolution:**

*PNH Clone:*
- Present in 50-60% of AA patients
- Escape from immune attack (GPI-anchored proteins as targets)
- May expand or regress with treatment
- Progression to hemolytic PNH in 15-25%

*Clonal Evolution to MDS/AML:*
- 10-15% risk over 10 years
- Associated with monosomy 7, trisomy 8
- Worse prognosis
- May occur after successful IST

**Genetic Susceptibility:**
- HLA-DR15 overrepresentation
- GSTT1 null genotype (glutathione-S-transferase)
- TNF promoter polymorphisms
- Cytochrome P450 variants (drug metabolism)

## Inherited Bone Marrow Failure Syndromes

**Fanconi Anemia:**
- DNA crosslink repair defect
- 22 FANC genes identified
- Diagnosis: Chromosome breakage test (DEB, MMC)
- Features: Short stature, thumb/radial anomalies, skin pigmentation, cafe-au-lait spots
- Cancer risk: AML, squamous cell carcinoma
- Treatment: Reduced-intensity transplant (hypersensitive to alkylators)

**Dyskeratosis Congenita:**
- Telomere maintenance defect
- X-linked (DKC1), AD (TERC, TERT), AR (RTEL1, others)
- Diagnosis: Telomere length <1st percentile
- Classic triad: Nail dystrophy, oral leukoplakia, reticular skin pigmentation
- Pulmonary fibrosis, liver cirrhosis
- Poor response to IST

**Telomere Biology Disorders:**
- Spectrum beyond classic DC
- "Cryptic" presentations
- Screen if: Family history, pulmonary fibrosis, liver disease, short telomeres
- Affects treatment choice (worse HSCT outcomes with myeloablative conditioning)

## Treatment Details

**Immunosuppressive Therapy:**

*Standard Regimen:*
- Horse ATG 40 mg/kg/day x 4 days
- Cyclosporine 5-6 mg/kg/day (trough 150-200)
- Add eltrombopag 150 mg/day

*Why Horse ATG over Rabbit ATG:*
- Higher response rates (68% vs 37% at 6 months)
- Better survival
- Rabbit ATG has more profound lymphodepletion

*Eltrombopag Addition:*
- TPO receptor agonist
- RACE trial: 94% response with eltrombopag
- May promote stem cell expansion
- Standard of care addition to ATG/CsA

**Response Assessment:**
- Complete response: Normal counts
- Partial response: Transfusion independence, improvement
- Evaluate at 3-6 months
- Relapses occur in 30-40%

**Hematopoietic Stem Cell Transplant:**

*Conditioning Selection:*

| Setting | Regimen |
|---------|---------|
| MSD, young | Cyclophosphamide + ATG |
| MSD, older | Reduced intensity |
| MUD | Fludarabine + Cyclophosphamide + ATG |
| Fanconi | Reduced fludarabine/cyclophosphamide |

*Donor Selection Hierarchy:*
1. Matched sibling donor (MSD)
2. Matched unrelated donor (MUD) - 10/10 HLA match
3. Mismatched unrelated
4. Haploidentical
5. Cord blood

*Outcomes:*
- MSD: 80-90% survival
- MUD: 70-80% survival
- Improving with post-transplant cyclophosphamide protocols

## Special Considerations

**Treatment Sequencing:**

*Young patient, SAA, MSD available:*
- Transplant first-line
- Avoid unnecessary transfusions

*Young patient, SAA, no MSD:*
- IST + eltrombopag
- If no response: Alternative donor HSCT

*Older patient:*
- IST + eltrombopag
- Transplant generally reserved for refractory

**Clonal Evolution Monitoring:**
- Annual bone marrow in responders
- Cytogenetics
- PNH clone monitoring
- Monosomy 7 = poor prognosis, consider transplant

**Refractory Disease:**
- Repeat IST (rabbit ATG if failed horse)
- Alternative donor HSCT
- Alemtuzumab (limited data)
- Eltrombopag monotherapy

**Pregnancy in AA:**
- Can occur after treatment
- Close monitoring required
- CSA continuation debated
- Delivery planning important

## Complications

**IST-Related:**
- Serum sickness (ATG)
- Infections during immunosuppression
- Cyclosporine toxicity (renal, hypertension)
- Secondary malignancy (MDS/AML)

**HSCT-Related:**
- Graft failure (10-15%)
- GVHD
- Infections
- Secondary malignancy
- Infertility`,
      keyTerms: [
        { term: 'eltrombopag', definition: 'Oral TPO receptor agonist that improves responses when added to IST in aplastic anemia; may promote stem cell expansion', pronunciation: 'el-TROM-boh-pag' },
        { term: 'chromosome breakage test', definition: 'Diagnostic test for Fanconi anemia using DEB or mitomycin C to induce DNA damage in patient lymphocytes' },
        { term: 'clonal evolution', definition: 'Development of cytogenetic abnormalities or transformation to MDS/AML in aplastic anemia patients, particularly after IST' },
        { term: 'T-bet', definition: 'Transcription factor driving Th1 differentiation; overexpressed in aplastic anemia T-cells' },
        { term: 'reduced-intensity conditioning', definition: 'Less toxic transplant preparative regimen; appropriate for older patients or those with comorbidities' },
      ],
      clinicalNotes: 'Eltrombopag addition to IST has significantly improved response rates and is now standard of care. Monitor for clonal evolution with annual bone marrow examinations including cytogenetics. Telomere length testing should be considered in all patients under 50, especially with family history or suggestive clinical features.',
    },
    5: {
      level: 5,
      summary: 'Contemporary aplastic anemia management integrates molecular understanding of immune pathogenesis, telomere biology, clonal hematopoiesis, and emerging therapies, with evolving transplant approaches expanding curative options.',
      explanation: `## Molecular Pathogenesis

**Immune Targeting of Stem Cells:**

*Antigenic Targets:*
- Wilms tumor protein (WT1)
- Diazepam-binding inhibitor-related protein 1
- Myeloperoxidase epitopes
- Possibly mutated or stress-modified self-antigens

*Single-Cell Analysis Findings:*
- Oligoclonal CD8+ T-cells in marrow
- Effector memory phenotype
- Shared TCR sequences across patients
- Exhaustion markers in chronic disease

**Genetic Landscape:**

*Somatic Mutations in AA:*
- Present in 20-30% at diagnosis
- BCOR, BCORL1 (good prognosis with IST)
- PIGA (PNH clone)
- ASXL1, DNMT3A (concerning for clonal evolution)
- RUNX1, TP53 (high-risk)

*Clonal Hematopoiesis of Indeterminate Potential (CHIP):*
- Overlap with AA
- May complicate diagnosis
- Prognostic implications emerging

**Telomere Biology:**

*Telomere-Related AA:*
- ~5-10% of "acquired" AA have short telomeres
- TERT, TERC mutations (AD, incomplete penetrance)
- May lack classic DC features
- Worse response to IST
- Guide transplant conditioning

*Telomere Length Testing:*
- Flow-FISH (gold standard)
- qPCR (more available, less precise)
- <1st percentile highly suggestive
- Age-adjusted interpretation critical

## Treatment Advances

**Optimized IST:**

*Current Standard:*
\`\`\`
Horse ATG 40 mg/kg x 4 days
+ Cyclosporine 5-6 mg/kg (trough 150-200)
+ Eltrombopag 150 mg starting day 1
\`\`\`

*Response Rates (RACE Trial):*
- Overall response 94% at 6 months
- Complete response 58%
- Superior to historical controls

*Duration:*
- Cyclosporine: Slow taper after 12-24 months
- Eltrombopag: Continue until response, then taper

**Transplant Evolution:**

*Haploidentical Approaches:*
- Post-transplant cyclophosphamide revolutionized
- Outcomes approaching MUD
- Expands donor pool significantly
- Particularly for minorities with limited MUD

*Conditioning Optimization:*
\`\`\`
Modern MUD Regimen:
Fludarabine 30 mg/m2 x 4 days
Cyclophosphamide 300 mg/m2 x 4 days
ATG (rabbit) 2.5-3.75 mg/kg
+/- Low-dose TBI
\`\`\`

*Graft Source:*
- Peripheral blood: Faster engraftment, more chronic GVHD
- Bone marrow: Less chronic GVHD, standard for young patients
- Cord blood: Less GVHD, slower engraftment

**Emerging Therapies:**

| Agent | Mechanism | Status |
|-------|-----------|--------|
| Eltrombopag | TPO agonist | Standard addition to IST |
| Romiplostim | TPO agonist | Trial data emerging |
| Avatrombopag | TPO agonist | Under investigation |
| Alemtuzumab | Anti-CD52 | Refractory disease |
| Danazol | Telomere elongation | Short telomere AA |
| JAK inhibitors | T-cell modulation | Investigational |

## Risk Stratification and Prognosis

**Prognostic Factors:**

*Favorable:*
- Younger age
- BCOR/BCORL1 mutations
- Response to first-line IST
- Normal karyotype

*Unfavorable:*
- Very severe AA (ANC <200)
- Older age
- Monosomy 7
- Short telomeres
- ASXL1, RUNX1, TP53 mutations

**Clonal Evolution Risk:**

*High-Risk Features:*
- Monosomy 7 at any time
- Complex karyotype
- Multiple courses of IST
- RUNX1, TP53 mutations
- Persistent deep cytopenias

*Surveillance:*
- Annual marrow in responders
- Cytogenetics
- Molecular monitoring (if mutations present)
- PNH clone quantification

## Special Populations

**Pediatric AA:**
- Higher proportion inherited syndromes
- Chromosome breakage testing mandatory
- Telomere length in all
- Transplant preferred for severe AA
- Excellent outcomes with MSD

**Elderly AA:**
- More comorbidities
- IST preferred over transplant
- Reduced-intensity transplant if needed
- Careful supportive care
- Consider frailty assessment

**Pregnancy-Associated AA:**
- May resolve spontaneously post-partum
- Supportive care through delivery if mild
- Definitive treatment if severe
- Subsequent pregnancies may trigger relapse

**AA and Solid Organ Transplant:**
- Described after liver, kidney transplant
- Often hepatitis-associated
- May respond to IST modification

## Monitoring and Long-Term Care

**Response Categories:**

| Category | Definition |
|----------|------------|
| Complete | Normal CBC |
| Partial | Transfusion independent, improved counts |
| No response | Transfusion dependent, minimal improvement |
| Relapse | Loss of response after initial improvement |

**Long-Term Complications:**

*Post-IST:*
- Relapse (30-40%)
- Clonal evolution (10-15% over 10 years)
- Secondary MDS/AML
- PNH evolution

*Post-HSCT:*
- Chronic GVHD
- Secondary malignancy
- Infertility
- Endocrine dysfunction

**Quality Metrics:**
- Chromosome breakage test in young patients
- Telomere length consideration
- PNH screening at diagnosis and follow-up
- Annual marrow surveillance in responders
- Cytogenetic monitoring
- Vaccination post-transplant

## Research Frontiers

**Active Investigations:**
1. Biomarkers predicting IST response
2. Optimal TPO agonist dosing
3. Novel conditioning regimens
4. Gene therapy for inherited syndromes
5. Targeting pathogenic T-cell clones
6. JAK inhibitor combinations

**Clinical Trial Considerations:**
- High-risk patients (refractory, clonal evolution)
- Alternative donor strategies
- Novel immunosuppressants
- Telomere-directed therapies`,
      keyTerms: [
        { term: 'BCOR/BCORL1', definition: 'Somatic mutations associated with favorable response to IST in aplastic anemia; encode transcriptional corepressors' },
        { term: 'post-transplant cyclophosphamide', definition: 'Strategy using high-dose cyclophosphamide after transplant to eliminate alloreactive T-cells; enables haploidentical transplant' },
        { term: 'Flow-FISH', definition: 'Flow cytometry with fluorescent in situ hybridization; gold standard for telomere length measurement' },
        { term: 'haploidentical transplant', definition: 'HSCT from half-matched family donor; increasingly used with PTCy, expanding donor options' },
        { term: 'somatic mosaicism', definition: 'Presence of genetically distinct cell populations; in AA, PNH clone represents beneficial mosaic escaping immune attack' },
      ],
      clinicalNotes: `**Board-Relevant Pearls:**
- Horse ATG superior to rabbit ATG for first-line IST
- Eltrombopag addition to IST improves response rates to >90%
- Chromosome breakage test required for all young patients to exclude Fanconi anemia
- Short telomeres suggest telomere biology disorder - poor IST response, guide transplant conditioning
- PNH clone present in majority, may evolve to hemolytic PNH
- BCOR/BCORL1 mutations = favorable prognosis
- Monosomy 7 = high-risk, consider transplant
- Annual marrow surveillance for clonal evolution
- Post-transplant cyclophosphamide enables haploidentical transplant with excellent outcomes`,
    },
  },

  media: [
    {
      id: 'aplastic-anemia-pathophysiology',
      type: 'diagram',
      filename: 'aplastic-anemia-immune-mechanism.svg',
      title: 'Immune Pathophysiology of Aplastic Anemia',
      description: 'T-cell mediated destruction of hematopoietic stem cells',
    },
    {
      id: 'aplastic-marrow',
      type: 'histology',
      filename: 'aplastic-anemia-bone-marrow.jpg',
      title: 'Bone Marrow Biopsy in Aplastic Anemia',
      description: 'Hypocellular marrow with fat replacement',
    },
    {
      id: 'aa-treatment-algorithm',
      type: 'diagram',
      filename: 'aplastic-anemia-treatment-algorithm.svg',
      title: 'Aplastic Anemia Treatment Algorithm',
      description: 'Decision tree for IST versus transplant based on age and donor availability',
    },
  ],

  citations: [
    {
      id: 'young-2018',
      type: 'article',
      title: 'Aplastic Anemia',
      authors: ['Young NS', 'Calado RT', 'Scheinberg P'],
      source: 'New England Journal of Medicine',
      url: 'https://doi.org/10.1056/NEJMra1612534',
    },
    {
      id: 'townsley-2017',
      type: 'article',
      title: 'Eltrombopag Added to Standard Immunosuppression for Aplastic Anemia',
      authors: ['Townsley DM', 'Scheinberg P', 'Winkler T'],
      source: 'New England Journal of Medicine',
      url: 'https://doi.org/10.1056/NEJMoa1613878',
    },
    {
      id: 'williams-aa',
      type: 'textbook',
      title: 'Aplastic Anemia',
      source: 'Williams Hematology',
      chapter: '35',
    },
  ],

  crossReferences: [
    { targetId: 'condition-pnh', targetType: 'condition', relationship: 'related', label: 'Paroxysmal Nocturnal Hemoglobinuria' },
    { targetId: 'condition-mds', targetType: 'condition', relationship: 'related', label: 'Myelodysplastic Syndrome' },
    { targetId: 'condition-fanconi-anemia', targetType: 'condition', relationship: 'related', label: 'Fanconi Anemia' },
    { targetId: 'procedure-hsct', targetType: 'topic', relationship: 'related', label: 'Hematopoietic Stem Cell Transplant' },
  ],

  tags: {
    systems: ['hematologic', 'immune'],
    topics: ['anemia', 'bone marrow failure', 'autoimmune', 'transplant', 'hematology'],
    keywords: ['aplastic', 'pancytopenia', 'hypocellular', 'ATG', 'cyclosporine', 'eltrombopag', 'HSCT'],
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

export default aplasticAnemia;
