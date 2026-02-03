import type { EducationalContent } from '../../../types';

export const primaryImmunodeficiency: EducationalContent = {
  id: 'primary-immunodeficiency',
  type: 'condition',
  name: 'Primary Immunodeficiency',
  alternateNames: ['Inborn Errors of Immunity', 'Primary Immune Deficiency Disorders', 'PIDD', 'IEI'],
  levels: {
    1: {
      level: 1,
      summary: 'Primary immunodeficiencies are inherited conditions where part of the immune system is missing or does not work properly, leading to increased infections and other health problems.',
      explanation: `Primary immunodeficiency diseases, also called inborn errors of immunity, are conditions people are born with that affect how their immune system works. Unlike secondary immunodeficiencies caused by medications or illnesses, these are genetic conditions passed down in families.

People with primary immunodeficiency get sick more often than others. They may have many ear infections, sinus infections, pneumonia, or other infections that keep coming back. They might also take longer to recover from illnesses.

There are more than 400 different types of primary immunodeficiency. Some are mild and may not be noticed until adulthood, while others are severe and appear in infancy. Common types include problems with making antibodies, problems with white blood cells, and problems with the complement system.

Treatment depends on the specific condition but may include antibiotics to prevent infections, immunoglobulin replacement therapy to provide antibodies, or in severe cases, stem cell transplantation to replace the faulty immune system.`,
      keyTerms: [
        { term: 'immune system', definition: 'The body\'s defense system that fights infections' },
        { term: 'antibodies', definition: 'Proteins made by the immune system to fight germs' },
        { term: 'genetic', definition: 'Passed down from parents through genes' },
        { term: 'immunoglobulin', definition: 'Another word for antibodies; proteins that fight infection' }
      ],
      analogies: [
        'Primary immunodeficiency is like having a security system with missing parts - some defenses are not working',
        'Antibodies are like soldiers in the army; some immunodeficiencies mean you do not have enough soldiers or they cannot fight properly'
      ],
      examples: [
        'A child who has had 8 ear infections and 3 cases of pneumonia by age 2',
        'An adult who always catches colds that last for weeks and often need antibiotics'
      ]
    },
    2: {
      level: 2,
      summary: 'Primary immunodeficiencies are inherited genetic disorders affecting immune system components, with over 400 recognized types classified by the affected immune compartment.',
      explanation: `Primary immunodeficiencies (PIDD), now called inborn errors of immunity (IEI), comprise a growing group of more than 400 genetic disorders affecting immune system development and function. These conditions collectively affect approximately 1 in 1,200 people.

Classification by immune compartment (International Union of Immunological Societies):

1. Combined immunodeficiencies (affecting T and B cells):
- Severe Combined Immunodeficiency (SCID): Most serious, no T-cell function
- Complete DiGeorge syndrome: Thymic aplasia
- Wiskott-Aldrich syndrome: T-cells, B-cells, platelets affected
- Ataxia-telangiectasia: DNA repair defect

2. Predominantly antibody deficiencies:
- X-linked agammaglobulinemia: No B-cells, no antibodies
- Common variable immunodeficiency (CVID): Most common symptomatic PID
- Selective IgA deficiency: Most common PID (often asymptomatic)
- Specific antibody deficiency: Poor response to vaccines
- Hyper-IgM syndromes: Defective class switching

3. Immune dysregulation:
- Hemophagocytic lymphohistiocytosis (HLH)
- Familial Mediterranean fever
- APECED (Autoimmune Polyendocrinopathy-Candidiasis-Ectodermal Dystrophy)

4. Phagocyte defects:
- Chronic granulomatous disease (CGD)
- Leukocyte adhesion deficiency
- Chediak-Higashi syndrome

5. Defects in innate immunity:
- TLR signaling defects
- Mendelian susceptibility to mycobacterial disease

6. Autoinflammatory disorders:
- Cryopyrin-associated periodic syndromes
- TNF receptor-associated periodic syndrome (TRAPS)

7. Complement deficiencies:
- C1-C4 deficiencies: Autoimmune disease, infections
- C5-C9 deficiencies: Neisseria infections
- Properdin deficiency

Inheritance patterns:
- X-linked: Affects males (XLA, Wiskott-Aldrich, Hyper-IgM type 1, CGD carrier females)
- Autosomal recessive: Both parents carriers (SCID, most CVID, CGD)
- Autosomal dominant: One affected parent (some CVID)

Warning signs (Jeffrey Modell Foundation 10 Warning Signs):
1. Four or more new ear infections within 1 year
2. Two or more serious sinus infections within 1 year
3. Two or more pneumonias within 1 year
4. Recurrent, deep skin or organ abscesses
5. Two or more deep-seated infections
6. Need for IV antibiotics to clear infections
7. Infections that do not resolve with antibiotics
8. Family history of primary immunodeficiency
9. Failure of infant to thrive or grow normally
10. Persistent thrush in mouth or fungal skin infections`,
      keyTerms: [
        { term: 'SCID', definition: 'Severe Combined Immunodeficiency; most serious form with absent T-cell function' },
        { term: 'CVID', definition: 'Common Variable Immunodeficiency; most common symptomatic antibody deficiency' },
        { term: 'agammaglobulinemia', definition: 'Absence of gamma globulins (antibodies) in blood' },
        { term: 'phagocyte', definition: 'White blood cell that engulfs and destroys bacteria and fungi' },
        { term: 'complement', definition: 'System of proteins that enhance antibody and phagocyte function' }
      ],
      analogies: [
        'Combined immunodeficiency is like having both the soldiers and the commanders missing from an army',
        'Antibody deficiencies are like having soldiers but no ammunition to fight infections'
      ],
      examples: [
        'A boy with X-linked agammaglobulinemia who gets repeated sinus and lung infections starting after 6 months of age',
        'A person with CVID who has bronchiectasis from repeated pneumonias and also has autoimmune thyroid disease'
      ]
    },
    3: {
      level: 3,
      summary: 'Primary immunodeficiency pathogenesis involves genetic mutations affecting immune cell development, signaling, or function, with diagnosis requiring clinical suspicion, laboratory testing, and genetic confirmation.',
      explanation: `Primary immunodeficiencies result from genetic mutations affecting immune system development, receptor signaling, cytokine production, or effector functions. Understanding these mechanisms guides diagnosis and treatment.

Molecular mechanisms by category:

Antibody deficiencies:

X-linked agammaglobulinemia (XLA):
- Mutation: BTK (Bruton tyrosine kinase)
- Mechanism: B-cell development arrested at pre-B stage
- Manifestation: No circulating B-cells, no antibodies
- Infections: Encapsulated bacteria (Streptococcus pneumoniae, Haemophilus influenzae)

Common Variable Immunodeficiency (CVID):
- Heterogeneous genetic causes: TACI (TNFRSF13B), BAFF-R, CD19, CD20, ICOS, others
- Mechanism: Defective B-cell differentiation to plasma cells
- Manifestation: Low IgG, IgA, and/or IgM; impaired vaccine responses
- Associated: Autoimmunity, granulomatous disease, lymphoid hyperplasia, cancer risk

Hyper-IgM syndromes:
- X-linked: CD40Ligand deficiency (T-cell help to B-cells impaired)
- Autosomal recessive: AICDA, UNG (class switch recombination defects)
- Manifestation: High IgM, low IgG, IgA; opportunistic infections
- CD40L deficiency: Also susceptible to Pneumocystis, Cryptosporidium

Selective IgA deficiency:
- Usually sporadic
- Mechanism: Block in IgA B-cell differentiation
- Often asymptomatic; may have allergies, autoimmunity, infections

Combined immunodeficiencies:

SCID:
- X-linked: IL2RG (common gamma chain) - 40% of cases
- Autosomal recessive: ADA (adenosine deaminase), RAG1/2, JAK3, IL7R, others
- Mechanism: Defective T-cell development (and B/NK depending on type)
- Manifestation: Absent T-cell function; presents with severe infections, failure to thrive
- "Bubble boy" disease
- Newborn screening now available (TREC test)

DiGeorge syndrome:
- 22q11.2 deletion
- Thymic hypoplasia/aplasia
- Variable T-cell deficiency
- Associated: Cardiac defects, hypocalcemia, characteristic facies

Phagocyte defects:

Chronic granulomatous disease (CGD):
- Mutations: GP91phox (X-linked), p47phox, p67phox, p22phox (autosomal)
- Mechanism: Defective NADPH oxidase, cannot make superoxide
- Manifestation: Susceptibility to catalase-positive bacteria and fungi
- Infections: Staphylococcus aureus, Burkholderia cepacia, Serratia, Aspergillus
- Granuloma formation, inflammatory complications

Leukocyte adhesion deficiency (LAD):
- LAD1: CD18 deficiency (integrin defect)
- LAD2: SLC35C1 (fucose transporter defect)
- Manifestation: Impaired leukocyte migration to infection sites
- Features: Delayed umbilical cord separation, poor wound healing, leukocytosis

Complement deficiencies:

Early classical pathway (C1, C2, C4):
- Associated with systemic lupus erythematosus-like disease
- Immune complex clearance impaired

Late complement (C5-C9):
- Susceptibility to Neisseria meningitidis
- Recurrent meningococcal infections

Properdin deficiency:
- X-linked
- Alternative pathway defect
- Severe meningococcal disease

Diagnostic approach:

Initial screening:
- CBC with differential and lymphocyte subset enumeration
- Quantitative immunoglobulins (IgG, IgA, IgM)
- IgG subclasses (controversial utility)
- Vaccine response assessment (tetanus, pneumococcal)
- Complement levels (CH50, AH50, individual components)

Advanced testing:
- Lymphocyte proliferation assays
- Cytokine production assessment
- Phagocyte function (DHR assay for CGD, chemotaxis)
- Specific genetic testing (single gene or panels)
- Whole exome sequencing for undiagnosed cases

Newborn screening:
- T-cell receptor excision circles (TRECs) for SCID
- Now mandated in all 50 US states
- Identifies infants before infections occur
- KREC assay for B-cell defects in development`,
      keyTerms: [
        { term: 'BTK', definition: 'Bruton tyrosine kinase; mutation causes X-linked agammaglobulinemia' },
        { term: 'class switch recombination', definition: 'Process allowing B-cells to change antibody class from IgM to IgG, IgA, or IgE' },
        { term: 'NADPH oxidase', definition: 'Enzyme complex producing superoxide for microbial killing; defective in CGD' },
        { term: 'TREC', definition: 'T-cell receptor excision circle; byproduct of T-cell development used for SCID screening' },
        { term: 'CH50', definition: 'Total hemolytic complement assay; measures classical pathway function' }
      ]
    },
    4: {
      level: 4,
      summary: 'Primary immunodeficiency treatment includes antimicrobial prophylaxis, immunoglobulin replacement, immunomodulatory therapy, enzyme replacement, and hematopoietic stem cell transplantation for severe cases.',
      explanation: `Management of primary immunodeficiency requires a multidisciplinary approach including infectious disease prevention, immune replacement or modulation, and in severe cases, curative therapies.

Antibody deficiency management:

Immunoglobulin replacement therapy (IgRT):

Indications:
- Significantly reduced IgG with impaired antibody responses
- Recurrent infections despite antibiotics

Routes:
- Intravenous immunoglobulin (IVIG): Every 3-4 weeks
- Subcutaneous immunoglobulin (SCIG): Weekly or biweekly self-administered

Dosing:
- 400-600 mg/kg/month (individualized based on response)
- Monitor trough levels (for IVIG) or steady-state levels
- Adjust for infection frequency

Efficacy:
- Reduces infections by 70-90%
- Slows progression of bronchiectasis
- Does not treat associated autoimmunity or granulomas

Complications:
- Headaches (aseptic meningitis)
- Thrombosis (high dose, older products rare)
- Hemolysis (high-titer anti-A or anti-B)
- Anaphylaxis (IgA deficiency with anti-IgA antibodies - use IgA-depleted product)
- Renal dysfunction (osmotic nephrosis with sucrose-containing products)

Antibiotic prophylaxis:
- Continuous (e.g., amoxicillin, azithromycin, TMP-SMX)
- Reduces infection frequency
- Risk of resistance with long-term use

Antimicrobial therapy:
- Early aggressive treatment of infections
- Broader spectrum coverage until cultures return
- Longer courses often needed
- Monitor for complications (abscess, bronchiectasis)

Vaccines:
- Live vaccines contraindicated in most cellular immunodeficiencies
- Inactivated vaccines safe but may be less effective
- Pneumococcal, meningococcal vaccines recommended for complement deficiencies
- Annual influenza vaccine

Specific treatments by condition:

SCID:
- Hematopoietic stem cell transplantation (HSCT): Curative, best outcomes <3.5 months
- Gene therapy: For ADA-SCID, X-linked SCID (investigational)
- Enzyme replacement: PEG-ADA for ADA-SCID (bridge to transplant)
- Protective isolation; no live vaccines; irradiated blood products

CGD:
- Prophylactic antibiotics (TMP-SMX) and antifungals (itraconazole)
- Interferon-gamma reduces infections by 70%
- Aggressive early treatment of infections
- HSCT curative but risks vs benefits considered
- Steroids for inflammatory complications (caution with infection)

Hyper-IgE syndrome (Job syndrome):
- Prophylactic antibiotics and antifungals
- Skin care for eczema
- Monitor for skeletal abnormalities, aneurysms
- HSCT in severe cases

Wiskott-Aldrich syndrome:
- Splenectomy may reduce bleeding and infections (infection risk)
- HSCT curative; best outcomes with matched sibling donor
- Supportive care for eczema, infections

Complement deficiencies:
- Early antibiotics for any fever (meningococcemia risk)
- Vaccination against encapsulated organisms
- Fresh frozen plasma for acute C1-inhibitor deficiency
- Eculizumab for C5 deficiency if paroxysmal nocturnal hemoglobinuria overlap

Hematopoietic stem cell transplantation:

Indications:
- SCID (definitive treatment)
- CGD with severe infections/inflammation
- Wiskott-Aldrich syndrome
- HLH
- IPEX syndrome
- Selected other severe PIDs

Donor selection:
- Matched sibling donor: Best outcomes
- Matched unrelated donor: Good alternative
- Haploidentical: Increasingly used
- Cord blood: Alternative source

Timing:
- Earlier transplantation better outcomes
- Before infections and organ damage
- SCID: Ideally <3.5 months

Conditioning:
- Myeloablative: Higher cure rates, more toxicity
- Reduced intensity: Less toxicity, may have mixed chimerism
- No conditioning: Used in some SCID (T-cell only reconstitution)

Gene therapy:
- Approved for ADA-SCID
- Investigational for X-linked SCID, WAS, CGD
- Autologous stem cells transduced with corrected gene
- Avoids graft-versus-host disease
- Risk of insertional oncogenesis (leukemia)

Monitoring and complications:

Regular surveillance:
- Infection history review
- Lung function testing
- CT chest (bronchiectasis screening)
- GI evaluation (malabsorption, enteropathy)
- Autoimmune screening
- Cancer surveillance (especially CVID - lymphoma, gastric cancer)

Associated conditions management:
- Autoimmunity: May require immunosuppression (caution)
- Granulomas: Steroids, TNF inhibitors
- Lymphoid hyperplasia: Rituximab in some cases
- Bronchiectasis: Airway clearance, rotating antibiotics

Patient education:
- Infection recognition and early treatment
- Adherence to prophylaxis
- Vaccine status for household contacts
- Genetic counseling for family planning
- Emergency action plans

Transition of care:
- Pediatric to adult care coordination
- Self-management skills
- Insurance and employment considerations
- Reproductive health counseling`,
      keyTerms: [
        { term: 'IVIG', definition: 'Intravenous immunoglobulin; antibody replacement therapy' },
        { term: 'SCID newborn screening', definition: 'TREC testing on dried blood spots to identify infants with severe T-cell defects' },
        { term: 'hematopoietic stem cell transplantation', definition: 'Replacement of immune system with donor stem cells; curative for severe PIDs' },
        { term: 'interferon-gamma', definition: 'Cytokine used as adjunctive therapy in CGD to boost immune function' },
        { term: 'gene therapy', definition: 'Correction of genetic defect using viral vectors to deliver normal gene' }
      ],
      clinicalNotes: `Clinical pearls for primary immunodeficiency:

1. Think of CVID in adults with recurrent sinopulmonary infections and low immunoglobulins
2. SCID is a pediatric emergency - newborn screening identifies infants before they get sick
3. In CGD, think of catalase-positive organisms; Serratia liver abscess is classic
4. Family history of early death from infection or consanguinity should raise suspicion

Diagnosis:
- Do not ignore the Jeffrey Modell warning signs
- Check quantitative immunoglobulins in patients with recurrent infections
- Vaccine responses distinguish CVID from specific antibody deficiency
- Genetic testing increasingly available; consider in undiagnosed cases

Treatment nuances:
- Start immunoglobulin before permanent organ damage (bronchiectasis)
- SCIG preferred by many patients for convenience and fewer systemic side effects
- Antibiotic prophylaxis reduces infections but monitoring for resistance needed
- Aggressive early treatment of infections in all PIDs

Transplant timing:
- Earlier is better for SCID - ideally before infections
- CGD transplant controversial - balance infection/inflammation vs transplant risks
- Gene therapy emerging alternative for some conditions

Complications to watch:
- CVID patients at risk for lymphoma, gastric cancer, lymphocytic interstitial pneumonitis
- Autoimmunity common in CVID, APECED, IPEX
- Granulomatous complications in CVID and CGD
- Bronchiectasis from recurrent infections

Genetic counseling:
- X-linked: Male children at risk, carrier females often asymptomatic
- Autosomal recessive: 25% risk for each pregnancy
- Prenatal diagnosis available for many severe forms
- Preimplantation genetic diagnosis possible

When to refer:
- Meeting warning sign criteria
- Unexplained recurrent infections
- Family history of PID
- Failure to thrive with infections
- Newborn screen positive for SCID`
    },
    5: {
      level: 5,
      summary: 'Advanced concepts include newborn screening implementation, newborn genetic diagnosis, targeted biologic therapies, improved HSCT techniques, and emerging gene therapy applications for primary immunodeficiencies.',
      explanation: `Contemporary management of primary immunodeficiency has been transformed by newborn screening, next-generation genetic diagnosis, improved transplant techniques, and gene therapy advances.

Newborn screening for SCID:

TREC assay:
- Detects T-cell receptor excision circles by PCR on dried blood spot
- Surrogate marker for naive T-cell production
- Low/absent TRECs indicate T-cell lymphopenia
- Implemented in all 50 US states since 2018

Benefits:
- Identifies SCID before infections occur
- Enables early HSCT with excellent outcomes
- Also detects other T-cell defects (DiGeorge, other lymphopenias)
- Cost-effective; prevents deaths and complications

Challenges:
- False positives (prematurity, cardiac surgery, other causes of lymphopenia)
- Need for rapid confirmatory testing
- Infrastructure for rapid HSCT referral
- Ethical considerations for conditions of unknown significance

Genetic diagnosis advances:

Next-generation sequencing:
- PID gene panels: 200+ genes
- Whole exome sequencing for undiagnosed cases
- Rapid diagnosis in critically ill infants
- Identifies atypical presentations

Benefits of genetic diagnosis:
- Definitive diagnosis
- Prognostic information
- Family planning
- Targeted therapy selection
- Identification of carriers
- Research opportunities

Variants of uncertain significance:
- Challenge in interpretation
- Need for functional studies
- International databases (Infevers, ClinVar)
- Expert committees for variant classification

Targeted biologic therapies:

JAK inhibitors:
- Ruxolitinib for HLH, some autoinflammatory disorders
- Tofacitinib for IPEX syndrome
- Controls immune dysregulation

TNF inhibitors:
- Etanercept, infliximab for inflammatory complications
- Caution in patients with infection risk

IL-1 blockade:
- Anakinra for autoinflammatory disorders
- Some forms of HLH

Anti-CD20 (rituximab):
- For lymphoid hyperplasia in CVID
- Autoimmune complications

Abatacept (CTLA4-Ig):
- For LRBA deficiency
- Replaces missing CTLA4 function

Tocilizumab (anti-IL-6):
- Cytokine release syndrome
- Some autoinflammatory conditions

HSCT advances:

Haploidentical transplantation:
- Post-transplant cyclophosphamide reduces GVHD
- Parent can be donor
- Expands donor pool
- Good outcomes in SCID

Reduced intensity conditioning:
- Less toxicity
- Suitable for older patients, those with organ dysfunction
- May have mixed chimerism

T-cell depleted grafts:
- Reduces GVHD
- Allows haploidentical donors
- Slower immune reconstitution
- Risk of viral infections

Gene therapy advances:

Approved therapies:
- Strimvelis (ADA-SCID): Retroviral vector, ex vivo
- Zynteglo (beta-thalassemia): Related technology

In development:
- X-linked SCID: Previous leukemia risk with gamma-retrovirus; lentiviral vectors safer
- WAS: Lentiviral gene therapy promising
- CGD: Challenges with oxidase complex expression
- XLA: More complex (requires B-cell reconstitution)

Challenges:
- Insertional oncogenesis
- Optimal stem cell collection
- Cost and access
- Durability of response
- Manufacturing complexity

Future directions:

In utero HSCT:
- Performed before birth for severe PIDs
- Tolerance induction to donor cells
- Experimental; promising for some conditions

Genome editing:
- CRISPR-Cas9 correction of mutations
- Ex vivo editing of patient stem cells
- Preclinical for many PIDs
- Potential for precise correction

Tolerance induction:
- For antibody deficiencies after transplant
- Reduced need for immunosuppression
- Enhances graft function

Early intervention:
- Presymptomatic diagnosis via genetic screening
- Family screening of at-risk newborns
- Early treatment before complications

Registries and collaboration:
- USIDNET (US Immunodeficiency Network)
- ESID (European Society for Immunodeficiencies)
- International data sharing
- Natural history studies
- Clinical trial networks

Quality improvement:
- Standardized diagnostic criteria
- Treatment guidelines
- Quality of life assessment
- Patient-reported outcomes
- Value-based care models

Global health considerations:
- SCID screening implementation worldwide
- Access to immunoglobulin in resource-limited settings
- HSCT access disparities
- Gene therapy affordability
- Training of specialists

Research frontiers:
- Understanding incomplete penetrance
- Modifier genes affecting severity
- Microbiome interactions
- Immune reconstitution biology
- Biomarkers for complications

Patient advocacy:
- Immune Deficiency Foundation
- Jeffrey Modell Foundation
- Patient education and support
- Research funding
- Awareness campaigns`,
      keyTerms: [
        { term: 'post-transplant cyclophosphamide', definition: 'High-dose cyclophosphamide after haploidentical transplant to prevent GVHD' },
        { term: 'lentiviral vector', definition: 'Gene therapy delivery system with improved safety profile over retrovirus' },
        { term: 'in utero HSCT', definition: 'Stem cell transplantation performed before birth; induces tolerance' },
        { term: 'insertional oncogenesis', definition: 'Cancer development from gene therapy vector integration near oncogenes' },
        { term: 'TREC screening', definition: 'Newborn screening test for severe combined immunodeficiency' }
      ],
      clinicalNotes: `Advanced clinical considerations:

VUS management:
- Do not over-interpret genetic variants
- Correlate with clinical phenotype
- Functional studies when possible
- Family segregation analysis
- Reclassification over time

Mosaicism:
- Somatic mosaicism may modify phenotype
- Revertant mosaicism can lead to spontaneous improvement
- Consider in atypical presentations

Female carriers:
- X-linked disorders: Skewed X-inactivation may cause symptoms
- CGD carriers: Discoid lupus, photosensitivity
- XLA carriers: Usually asymptomatic

Combined immunodeficiency variants:
- "Leaky" SCID: Some T-cell function, presents later
- Omenn syndrome: Maternal engraftment, erythroderma, hepatosplenomegaly
- Athabaskan SCID: DNA-PKcs deficiency; radiation sensitivity

Autoinflammatory vs autoimmune:
- Autoinflammatory: Innate immune activation, no autoantibodies, fever patterns
- Autoimmune: Adaptive immunity, autoantibodies, tissue-specific damage
- Some PIDs have both features

Evolving nomenclature:
- IEI (Inborn Errors of Immunity) replacing PIDD
- Recognizes immune dysregulation, not just deficiency
- Expanding spectrum of conditions

Research participation:
- Encourage enrollment in registries
- Natural history studies improve understanding
- Clinical trials for novel therapies
- Patient-reported outcomes valuable

Long-term survivors:
- Transition from pediatric to adult care
- Fertility preservation counseling
- Cancer surveillance
- Psychosocial support
- Career and insurance planning`
    }
  },
  media: [],
  citations: [
    { id: '1', type: 'textbook', title: 'Middleton\'s Allergy: Principles and Practice', authors: ['Burks AW', 'Holgate ST', 'O\'Hehir RE'], source: 'Elsevier', chapter: 'Chapter 60: Primary Immunodeficiency Diseases' },
    { id: '2', type: 'article', title: 'International Union of Immunological Societies: 2022 Update', authors: ['Tangye SG', 'Al-Herz W', 'Bousfiha A'], source: 'Journal of Clinical Immunology', chapter: '2022' }
  ],
  crossReferences: [
    { targetId: 'secondary-immunodeficiency', targetType: 'condition', relationship: 'sibling' },
    { targetId: 'iga-deficiency', targetType: 'condition', relationship: 'child' },
    { targetId: 'cvid', targetType: 'condition', relationship: 'child' }
  ],
  tags: {
    systems: ['allergy-immunology'],
    topics: ['immunodeficiency', 'genetic disorders', 'inborn errors of immunity'],
    keywords: ['primary immunodeficiency', 'SCID', 'CVID', 'antibody deficiency', 'immunoglobulin'],
    clinicalRelevance: 'high'
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published'
};
