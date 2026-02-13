import type { EducationalContent } from '../../../types';

export const cllCmlContent: EducationalContent = {
  id: 'cll-cml',
  type: 'condition',
  name: 'CLL and CML',
  alternateNames: ['Chronic Lymphocytic Leukemia', 'Chronic Myeloid Leukemia', 'Chronic Leukemias'],
  levels: {
    1: {
      level: 1,
      summary: 'CLL and CML are slow-growing blood cancers where abnormal white blood cells build up over time, often discovered incidentally on routine blood tests.',
      explanation: `Chronic lymphocytic leukemia (CLL) and chronic myeloid leukemia (CML) are types of blood cancer that develop slowly over months or years. Unlike acute leukemias that progress rapidly, these chronic forms often cause few symptoms early on and may be found accidentally during routine blood work.

In CLL, the body makes too many mature-looking lymphocytes, a type of white blood cell. These cells accumulate in the blood, bone marrow, and lymph nodes. CLL mostly affects older adults and often does not require immediate treatment.

In CML, the body makes too many granulocytes, another type of white blood cell. CML has a specific genetic marker called the Philadelphia chromosome. Thanks to modern targeted therapies, many people with CML can live normal lifespans by taking daily medication.

Both conditions are monitored regularly with blood tests. Treatment may not be needed right away, especially for CLL. When treatment is needed, CLL uses chemotherapy or targeted drugs, while CML is treated with drugs that target the specific genetic abnormality.`,
      keyTerms: [
        { term: 'chronic leukemia', definition: 'Slow-growing blood cancer that progresses over months or years' },
        { term: 'lymphocyte', definition: 'A type of white blood cell that helps fight infections' },
        { term: 'granulocyte', definition: 'A type of white blood cell that fights bacterial infections' },
        { term: 'Philadelphia chromosome', definition: 'An abnormal chromosome found in most cases of CML' }
      ],
      analogies: [
        'Chronic leukemias are like a slowly leaking faucet - the problem builds up gradually rather than flooding immediately',
        'CLL is like having too many security guards who are not very good at their job - they crowd the area but do not help much'
      ],
      examples: [
        'A 70-year-old with no symptoms found to have high white blood cell count on routine labs - early CLL',
        'A 45-year-old diagnosed with CML who takes daily imatinib and lives a normal life'
      ]
    },
    2: {
      level: 2,
      summary: 'CLL and CML are chronic hematologic malignancies with distinct pathophysiology: CLL involves clonal B-cell proliferation while CML is defined by the BCR-ABL fusion tyrosine kinase.',
      explanation: `Chronic leukemias represent clonal proliferations of mature-appearing hematopoietic cells that accumulate over time. They differ fundamentally from acute leukemias in their slower progression and the maturity of the malignant cells.

Chronic Lymphocytic Leukemia (CLL):
- Clonal proliferation of mature-appearing CD5+ B-lymphocytes
- Most common leukemia in adults (median age 72)
- Often asymptomatic at diagnosis; discovered incidentally
- Characteristic immunophenotype: CD5+, CD19+, CD20(dim), CD23+, CD200+, sIg(dim)
- Prognosis varies widely: some never need treatment, others progress rapidly
- Rai and Binet staging systems based on lymphadenopathy, organomegaly, cytopenias

Chronic Myeloid Leukemia (CML):
- Clonal proliferation of myeloid progenitors driven by BCR-ABL fusion protein
- BCR-ABL creates constitutively active tyrosine kinase driving proliferation
- Three phases: chronic phase (stable), accelerated phase, blast crisis (resembles acute leukemia)
- Philadelphia chromosome (t(9;22)) present in 95% of cases
- Tyrosine kinase inhibitors (TKIs) have transformed CML into a chronic manageable disease
- Median age 50-60; can occur in younger patients

Key differences:
- CLL cells accumulate due to defective apoptosis (programmed cell death)
- CML cells proliferate due to oncogenic kinase signaling
- CLL treatment often delayed until symptomatic
- CML treatment initiated immediately at diagnosis
- CLL can transform to aggressive lymphoma (Richter transformation)
- CML can transform to acute leukemia (blast crisis)

Clinical presentation:
- CLL: Fatigue, lymphadenopathy, infections, autoimmune phenomena (AIHA, ITP)
- CML: Often asymptomatic; may have fatigue, splenomegaly, weight loss, night sweats`,
      keyTerms: [
        { term: 'BCR-ABL', definition: 'Fusion gene created by translocation between chromosomes 9 and 22; produces active tyrosine kinase' },
        { term: 'tyrosine kinase inhibitor', definition: 'Drug that blocks tyrosine kinase enzymes; imatinib and similar drugs for CML' },
        { term: 'CD5', definition: 'Cell surface marker typically on T-cells but also on CLL B-cells; helps diagnosis' },
        { term: 'blast crisis', definition: 'Transformation of CML to acute leukemia with increased blasts; poor prognosis' },
        { term: 'apoptosis', definition: 'Programmed cell death; defective in CLL allowing cell accumulation' }
      ],
      analogies: [
        'CML is like a car with a stuck gas pedal - the accelerator (tyrosine kinase) is always on',
        'Tyrosine kinase inhibitors are like removing the foot from the gas pedal - they block the signal to grow'
      ],
      examples: [
        'A 68-year-old with WBC 25,000, lymphocytosis, and enlarged lymph nodes - typical CLL presentation',
        'A 52-year-old with WBC 150,000, left shift, and splenomegaly - chronic phase CML'
      ]
    },
    3: {
      level: 3,
      summary: 'CLL pathogenesis involves genetic lesions affecting apoptosis and proliferation, with prognostic markers including IGHV mutation status, FISH abnormalities, and TP53 dysfunction. CML biology centers on BCR-ABL driven myeloproliferation.',
      explanation: `Chronic leukemias represent paradigm shifts in cancer biology: CLL illustrates the importance of the tumor microenvironment and defective apoptosis, while CML demonstrated the power of targeted therapy against a defined molecular driver.

Chronic Lymphocytic Leukemia pathophysiology:

CLL results from accumulation of monoclonal CD5+ B-cells with blocked apoptosis rather than excessive proliferation. The cells resemble mature antigen-experienced B-cells.

Genetic landscape:
- Del(13q): Most common (50%), favorable prognosis; targets miR-15a/16-1
- Trisomy 12: 15-20% of cases, intermediate prognosis
- Del(11q): 15-20%, unfavorable; ATM gene involved
- Del(17p): 5-10%, very poor prognosis; TP53 loss
- NOTCH1 mutations: 10-15%, associated with trisomy 12, poor prognosis
- SF3B1 mutations: 10-15%, associated with chemorefractoriness
- IGHV mutation status: Mutated IGHV (derived from germinal center) has excellent prognosis; unmutated has poor prognosis

Microenvironment dependency:
- CLL cells require signals from the microenvironment for survival
- BCR signaling through SYK, BTK, PI3K pathways
- Cytokine support: CCL3, CCL4, BAFF, APRIL
- Contact with nurse-like cells and stromal cells provides survival signals
- This explains why CLL is incurable with chemotherapy alone

Chronic Myeloid Leukemia pathophysiology:

The t(9;22)(q34;q11) translocation fuses BCR (breakpoint cluster region) on chromosome 22 with ABL1 (Abelson tyrosine kinase) on chromosome 9. The resulting BCR-ABL fusion protein has constitutively active tyrosine kinase activity.

BCR-ABL signaling:
- Activates multiple downstream pathways: JAK-STAT, PI3K-AKT, RAS-MAPK
- Increases proliferation and survival of myeloid progenitors
- Inhibits apoptosis
- Alters cell adhesion and migration

Disease phases:
- Chronic phase: Less than 10% blasts, stable disease
- Accelerated phase: 10-19% blasts, increasing basophils, additional cytogenetic abnormalities
- Blast crisis: Greater than or equal to 20% blasts (myeloid or lymphoid), resembles acute leukemia

Mechanisms of progression:
- Acquisition of additional mutations (TP53, RUNX1, ASXL1)
- Genomic instability from BCR-ABL
- Clonal evolution with TKI-resistant subclones

Prognostic scores:
- CLL-IPI: Age, stage, TP53 status, IGHV status, beta-2 microglobulin
- CML: Sokal, Hasford, and EUTOS scores predict response to TKI therapy`,
      keyTerms: [
        { term: 'IGHV mutation status', definition: 'Somatic hypermutation status of immunoglobulin heavy chain variable region; mutated indicates better prognosis' },
        { term: 'BCR signaling', definition: 'B-cell receptor pathway; critical for CLL cell survival' },
        { term: 'Sokal score', definition: 'Prognostic score for CML based on age, spleen size, platelet count, blast percentage' },
        { term: 'minimal residual disease', definition: 'Very low levels of leukemia detectable by sensitive methods' },
        { term: 'TP53', definition: 'Tumor suppressor gene; loss/mutation confers chemotherapy resistance in CLL' }
      ]
    },
    4: {
      level: 4,
      summary: 'CLL management follows watch-and-wait for early stage, with treatment initiated for active disease criteria. CML treatment uses tyrosine kinase inhibitors with molecular response monitoring guiding therapy decisions.',
      explanation: `Management of chronic leukemias has evolved dramatically with improved understanding of disease biology and development of targeted therapies.

Chronic Lymphocytic Leukemia management:

Watch-and-wait strategy:
- Appropriate for Rai stage 0-II, Binet stage A-B without symptoms
- Regular monitoring: physical exam, CBC every 3-6 months
- No survival benefit to early treatment in asymptomatic patients
- Treat when "active disease" criteria met

IWCLL treatment indications:
- Progressive marrow failure (cytopenias)
- Massive or symptomatic splenomegaly
- Massive lymph nodes or progressive lymphadenopathy
- Progressive lymphocytosis (>50% increase in 2 months or doubling time <6 months)
- Autoimmune cytopenias unresponsive to steroids
- Constitutional symptoms (weight loss >10%, fevers, night sweats, fatigue)

First-line treatment options:

Chemoimmunotherapy (declining use):
- FCR (fludarabine, cyclophosphamide, rituximab) for fit IGHV-mutated patients
- BR (bendamustine, rituximab)

Targeted agents (preferred):
- BTK inhibitors: Ibrutinib, acalabrutinib, zanubrutinib (continuous therapy)
- BCL2 inhibitor: Venetoclax with obinutuzumab (fixed-duration)
- PI3K inhibitors: Idelalisib, duvelisib (less commonly used due to toxicity)

Selection factors:
- IGHV mutation status: FCR for mutated, targeted agents for unmutated
- TP53 aberration: Avoid chemotherapy, use targeted agents
- Comorbidities: BTK inhibitors have cardiovascular toxicity considerations
- Treatment goal: Fixed-duration vs continuous therapy preference

Relapsed/refractory CLL:
- Switch class if progression on targeted agent
- PI3K inhibitors, CAR-T cells under investigation
- Allogeneic transplant for high-risk young patients

Chronic Myeloid Leukemia management:

Tyrosine kinase inhibitor selection:
- First generation: Imatinib (Gleevec) - well-tolerated, generic available
- Second generation: Dasatinib, nilotinib, bosutinib - faster responses, but different toxicity profiles
- Selection based on Sokal risk, comorbidities, side effect profiles

Response milestones (ELN recommendations):
- Optimal response at 3 months: BCR-ABL1 less than or equal to 10% (IS)
- Optimal response at 6 months: BCR-ABL1 less than 1%
- Optimal response at 12 months: BCR-ABL1 less than or equal to 0.1% (MMR)
- Major molecular response (MMR): BCR-ABL1 less than or equal to 0.1%
- Deep molecular response (MR4.0, MR4.5): BCR-ABL1 less than or equal to 0.01%, 0.0032%

Treatment failure criteria:
- BCR-ABL1 >10% at 6 months or >1% at 12 months
- Loss of response or progression to accelerated/blast phase
- ABL1 kinase domain mutation detection

Mutation testing:
- Perform if treatment failure or suboptimal response
- Common mutations: T315I (resistant to most TKIs except ponatinib), E255K/V, Y253H

Treatment-free remission:
- TKI discontinuation possible for patients with MR4.5 sustained for 2+ years
- 40-60% remain in remission; others experience molecular relapse requiring restart
- Requires close monitoring

Advanced phase CML:
- Blast crisis treated like acute leukemia with addition of TKI
- Allogeneic transplant indicated if response achieved`,
      keyTerms: [
        { term: 'BTK inhibitor', definition: 'Bruton tyrosine kinase inhibitor; blocks BCR signaling in CLL' },
        { term: 'BCL2 inhibitor', definition: 'Drug like venetoclax that blocks anti-apoptotic BCL2 protein' },
        { term: 'international scale', definition: 'Standardized scale for reporting BCR-ABL1 transcripts in CML' },
        { term: 'major molecular response', definition: 'BCR-ABL1 less than or equal to 0.1% on international scale; treatment goal in CML' },
        { term: 'T315I mutation', definition: 'ABL1 kinase domain mutation conferring resistance to most TKIs except ponatinib' }
      ],
      clinicalNotes: `Clinical pearls for CLL and CML:

CLL-specific:
1. Never treat CLL based on white count alone - wait for symptoms or complications
2. All patients need FISH for del(17p)/TP53 status before any treatment; this determines therapy choice
3. Autoimmune hemolytic anemia and ITP can occur in CLL; treat with steroids, not chemotherapy
4. Richter transformation to DLBCL occurs in 2-10%; presents with rapid nodal growth, elevated LDH
5. Prophylaxis for PCP, HBV reactivation during purine analog therapy

CML-specific:
1. Start TKI immediately - do not delay treatment
2. Monitor BCR-ABL1 PCR every 3 months initially, every 3-6 months once stable
3. T315I mutation requires ponatinib or asciminib; consider early if high-risk disease
4. Pleural effusions common with dasatinib; cardiovascular events with ponatinib/nilotinib
5. Drug-drug interactions important: CYP3A4 metabolism

Supportive care:
- CLL: IVIG for hypogammaglobulinemia with recurrent infections
- CML: Monitor for cardiovascular events, pulmonary hypertension, pancreatitis depending on TKI

Special populations:
- Pregnancy: Imatinib generally avoided; interferon-alpha safe in pregnancy
- Elderly/unfit: Reduced dose venetoclax ramp-up critical to prevent tumor lysis`
    },
    5: {
      level: 5,
      summary: 'Advanced concepts include MRD-directed treatment cessation in CLL, next-generation TKIs and allosteric inhibitors in CML, mechanisms of resistance, and novel immunotherapeutic approaches.',
      explanation: `Contemporary research in chronic leukemias focuses on treatment optimization, understanding resistance mechanisms, and developing curative strategies beyond chronic disease management.

Chronic Lymphocytic Leukemia advances:

MRD-directed therapy:
- MRD negativity in peripheral blood after fixed-duration venetoclax-based therapy associated with prolonged remission
- Trials investigating MRD-guided treatment extension or cessation
- uMRD (undetectable MRD) at 1 year post-venetoclax predicts treatment-free remission duration

Next-generation BTK inhibitors:
- Pirtobrutinib: Non-covalent (reversible) BTK inhibitor active against C481S mutation
- Nemtabrutinib, fenebrutinib: Additional non-covalent inhibitors in development
- These overcome resistance to covalent BTK inhibitors (ibrutinib, acalabrutinib)

BTK degradation:
- NX-2127, BGB-16673: PROTACs (proteolysis-targeting chimeras) that degrade BTK
- Active against wild-type and mutant BTK
- Early clinical trials show promise in heavily pretreated patients

Combination strategies:
- BTK inhibitor + venetoclax: Synergistic targeting of survival pathways
- Fixed-duration triple combinations: Obinutuzumab + ibrutinib + venetoclax
- Attempting to achieve high uMRD rates for durable treatment-free remission

Cellular therapy:
- Allogeneic transplant: Curative but high toxicity; reserved for high-risk young patients
- CAR-T cells: Lisocabtagene maraleucel approved for relapsed/refractory CLL after BTKi/venetoclax
- Reduced-intensity conditioning for older transplant candidates

Chronic Myeloid Leukemia advances:

Allosteric inhibitors:
- Asciminib: First STAMP (specifically targeting ABL myristoyl pocket) inhibitor
- Binds different site than ATP-competitive TKIs
- Active against T315I mutation
- Can be combined with ATP-competitive TKIs for dual ABL inhibition

Next-generation sequencing in CML:
- Serial BCR-ABL1 mutation testing can detect emerging resistance
- Low-level resistance mutations may be present before clinical failure
- NGS more sensitive than Sanger sequencing for mutation detection

Treatment-free remission optimization:
- DASFREE, EURO-SKI trials established criteria for TKI discontinuation
- TWISTER trial showed safety of imatinib cessation with close monitoring
- Predictors of sustained TFR: Deep molecular response duration, low Sokal score, stable MR4.5

Mechanisms of TKI resistance:
- BCR-ABL dependent: Kinase domain mutations, amplification
- BCR-ABL independent: Additional genetic lesions, clonal evolution, drug efflux pumps
- Some patients have persistent low-level disease despite adequate TKI exposure

Stem cell biology:
- CML stem cells are quiescent and TKI-resistant
- Survival signals: Wnt/beta-catenin, hedgehog, autophagy pathways
- Targeting stem cells may be key to cure

Immunotherapy approaches:
- Vaccines targeting BCR-ABL peptides
- Immune checkpoint inhibitors (limited efficacy as monotherapy)
- Combination with TKIs to restore immune surveillance

Prognostic biomarkers:
- CLL: Genomic complexity, telomere length, methylation patterns
- CML: Additional chromosomal abnormalities at diagnosis predict poorer TKI response`,
      keyTerms: [
        { term: 'non-covalent BTK inhibitor', definition: 'Reversible BTK inhibitor that does not bind C481; active against resistant mutations' },
        { term: 'PROTAC', definition: 'Proteolysis-targeting chimera; induces protein degradation rather than enzyme inhibition' },
        { term: 'STAMP inhibitor', definition: 'Specifically targeting ABL myristoyl pocket; allosteric inhibitor like asciminib' },
        { term: 'treatment-free remission', definition: 'Sustained molecular response after stopping TKI therapy' },
        { term: 'stem cell quiescence', definition: 'Dormant state of leukemia stem cells rendering them resistant to chemotherapy' }
      ],
      clinicalNotes: `Advanced clinical considerations:

CLL transformation:
- Richter transformation to DLBCL: 2-10% risk, poor prognosis
- Hodgkin transformation: Less common, 0.5-1%
- Second cancers increased in CLL patients (treatment-related and disease-related)
- Clonal evolution: New genetic lesions may emerge requiring repeat testing

CML special scenarios:
- T315I mutation: Use ponatinib or asciminib; consider early transplant evaluation
- Atypical transcripts: e1a2 BCR-ABL1 produces p190 protein; may require different monitoring
- Pediatrics: CML rare; imatinib approved; transplant consideration for resistant disease
- Pregnancy planning: TKI discontinuation before conception; interferon alternative during pregnancy

Resistance management:
- CLL: Switch drug class (BTKi to BCL2i or vice versa)
- CML: Switch TKI based on mutation profile; consider asciminib for multiple resistance mutations
- Clinical trials for multiply resistant disease

Quality of life considerations:
- CLL: Fatigue management important even in untreated patients
- CML: TKI side effects (fatigue, GI, muscle cramps, cardiovascular) affect adherence
- Patient-reported outcomes increasingly important in clinical trials

Future directions:
- CLL: Chemotherapy-free regimens for all patients; MRD-guided strategies
- CML: Functional cure through treatment-free remission; targeting leukemia stem cells`
    }
  },
  media: [],
  citations: [
    { id: '1', type: 'textbook', title: 'Hoffman Hematology: Basic Principles and Practice', authors: ['Hoffman R', 'Benz EJ', 'Silberstein LE'], source: 'Elsevier', chapter: 'Chapters 75-76: CLL and CML' },
    { id: '2', type: 'article', title: 'Chronic lymphocytic leukemia: ESMO Clinical Practice Guidelines', authors: ['Eichhorst B', 'Robak T', 'Montserrat E'], source: 'Annals of Oncology', chapter: '2021' }
  ],
  crossReferences: [
    { targetId: 'chronic-lymphocytic-leukemia', targetType: 'condition', relationship: 'child' },
    { targetId: 'chronic-myeloid-leukemia', targetType: 'condition', relationship: 'child' },
    { targetId: 'acute-leukemia-workup', targetType: 'concept', relationship: 'see-also' }
  ],
  tags: {
    systems: ['hematology', 'oncology'],
    topics: ['leukemia', 'chronic leukemia', 'blood cancer'],
    keywords: ['CLL', 'CML', 'BCR-ABL', 'tyrosine kinase inhibitor', 'venetoclax', 'ibrutinib'],
    clinicalRelevance: 'high'
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published'
};
