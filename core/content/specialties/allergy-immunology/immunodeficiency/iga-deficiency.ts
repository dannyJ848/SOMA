import type { EducationalContent } from '../../../types';

export const igaDeficiency: EducationalContent = {
  id: 'iga-deficiency',
  type: 'condition',
  name: 'IgA Deficiency',
  alternateNames: ['Selective IgA Deficiency', 'SIGAD', 'IgA Immunodeficiency'],
  levels: {
    1: {
      level: 1,
      summary: 'IgA deficiency is a condition where the body does not make enough IgA, a type of antibody that helps protect the nose, throat, lungs, and digestive system from infections.',
      explanation: `IgA deficiency is the most common type of primary immunodeficiency. It occurs when the body does not produce enough IgA, which is an antibody that protects the surfaces of the body that are exposed to the outside world, like the nose, throat, lungs, and intestines.

People with IgA deficiency often have no symptoms at all and may never know they have it. When symptoms do occur, they usually involve getting more infections in the sinuses, lungs, or digestive tract. Some people may also have allergies or autoimmune problems.

IgA deficiency is diagnosed through a blood test that shows low or absent IgA levels while other antibody levels remain normal. There is no cure for IgA deficiency, but infections can be treated with antibiotics when they occur.

People with IgA deficiency need to know about their condition because they may have reactions to blood transfusions or certain medications containing IgA. They should also inform their healthcare providers about their diagnosis.`,
      keyTerms: [
        { term: 'IgA', definition: 'Immunoglobulin A; an antibody that protects body surfaces like the nose and digestive tract' },
        { term: 'antibody', definition: 'A protein made by the immune system to fight germs' },
        { term: 'autoimmune', definition: 'When the immune system mistakenly attacks the body\'s own tissues' },
        { term: 'selective', definition: 'Affecting only one thing; in this case, only IgA is low while other antibodies are normal' }
      ],
      analogies: [
        'IgA is like a security guard stationed at the entrances to your body - without enough guards, infections can sneak in more easily',
        'IgA deficiency is like having a neighborhood watch program that is understaffed - most of the time things are fine, but occasionally problems occur'
      ],
      examples: [
        'A person who gets frequent sinus infections but otherwise stays healthy',
        'Someone found to have IgA deficiency during routine blood work who has never had serious health problems'
      ]
    },
    2: {
      level: 2,
      summary: 'Selective IgA deficiency is the most common primary immunodeficiency, characterized by low serum IgA with normal IgG and IgM, affecting approximately 1 in 500 people, most of whom are asymptomatic.',
      explanation: `Selective IgA deficiency (SIGAD) is defined as a serum IgA level below 7 mg/dL in adults (or below 2 SD for age in children) with normal serum IgG and IgM levels and normal antibody responses. It is the most common primary immunodeficiency, with a prevalence of approximately 1 in 300-500 in Western populations, though it varies by ethnicity (rarer in Asian populations).

Diagnostic criteria:
- Serum IgA <7 mg/dL (adults)
- Normal serum IgG and IgM
- Normal antibody responses to vaccines
- Exclusion of secondary causes
- Usually diagnosed after age 4 (IgA levels may be physiologically low in younger children)

Pathophysiology:
The exact cause is often unknown. Mechanisms include:
- Intrinsic B-cell defect in IgA class switching or differentiation
- T-cell helper dysfunction
- Cytokine abnormalities (IL-21, TGF-beta signaling)
- Genetic factors: Associated with certain HLA types and MHC region genes
- Can occur in families with common variable immunodeficiency (CVID)

Clinical spectrum:

Asymptomatic (majority):
- Two-thirds of affected individuals have no symptoms
- May be discovered incidentally on blood testing

Symptomatic (one-third):

Recurrent infections:
- Sinopulmonary: Sinusitis, otitis media, bronchitis, pneumonia
- Gastrointestinal: Chronic diarrhea, giardiasis
- Respiratory infections most common

Atopy and allergies:
- Higher incidence of allergic rhinitis, asthma, eczema
- Food allergies
- Possibly due to impaired mucosal barrier allowing antigen entry

Autoimmune diseases:
- Present in 20-30% of symptomatic patients
- Rheumatoid arthritis, SLE, celiac disease, inflammatory bowel disease
- Immune thrombocytopenia (ITP), autoimmune hemolytic anemia
- Type 1 diabetes, thyroid autoimmunity
- Mechanism: Impaired mucosal immunity, immune dysregulation

Malignancy:
- Slight increased risk of lymphoid malignancy (controversial)
- Gastric cancer risk (associated with atrophic gastritis, pernicious anemia)

Associated conditions:
- Common variable immunodeficiency (CVID) may develop later
- Autoimmune polyendocrine syndrome type 1
- IgG subclass deficiency may coexist
- Drugs: Phenytoin, D-penicillamine, gold, sulfasalazine (can induce)

Transfusion reactions:
- Risk of anti-IgA antibodies in some patients
- Can cause anaphylactic reactions to blood products containing IgA
- Risk estimated at 1 in 20 to 1 in 50 among IgA-deficient patients
- Most patients can receive transfusions without problems

Prognosis:
- Generally excellent
- Most live normal lives
- Some develop CVID later
- Others may spontaneously normalize IgA levels

Genetic associations:
- HLA-A1, B8, DR3 haplotype associated
- Family history of IgA deficiency or CVID in 10-20%
- Certain gene variants in MHC region
- Rare monogenic forms described (TACI, BAFF-R, LRBA in some cases)`,
      keyTerms: [
        { term: 'selective IgA deficiency', definition: 'Isolated absence of IgA with other immunoglobulins normal; most common primary immunodeficiency' },
        { term: 'mucosal immunity', definition: 'Immune protection at body surfaces like respiratory and gastrointestinal tracts' },
        { term: 'anti-IgA antibodies', definition: 'Antibodies against IgA that can develop in some IgA-deficient patients' },
        { term: 'CVID', definition: 'Common Variable Immunodeficiency; some IgA-deficient patients may progress to this' },
        { term: 'class switching', definition: 'Process where B-cells change antibody class from IgM to IgA, IgG, or IgE' }
      ],
      analogies: [
        'IgA deficiency is like having fewer security cameras at entry points - most intruders are still caught by other security measures',
        'It is like having one type of lock on your door that does not work, but you still have other locks that function'
      ],
      examples: [
        'A 30-year-old with recurrent sinus infections found to have IgA of 5 mg/dL with normal IgG and IgM',
        'A patient with celiac disease and low IgA discovered on tissue transglutaminase testing'
      ]
    },
    3: {
      level: 3,
      summary: 'IgA deficiency involves defective B-cell differentiation to IgA-producing plasma cells, with diagnosis requiring exclusion of secondary causes, and management focused on treating infections and associated conditions rather than IgA replacement.',
      explanation: `The immunopathogenesis of selective IgA deficiency involves failure of B-cells to undergo normal differentiation to IgA-secreting plasma cells. This can occur at multiple levels in the immune regulatory network.

Immunologic mechanisms:

B-cell defects:
- IgA-committed B-cells present in normal numbers
- Failure to differentiate to plasma cells
- Intact class-switch recombination machinery
- Normal T-cell help in most cases

Cytokine abnormalities:
- TGF-beta essential for IgA class switching
- IL-21 promotes IgA production
- IL-10 supports mucosal IgA responses
- Dysregulation of these cytokines may contribute

T-cell involvement:
- Most patients have normal T-cell function
- Some have altered T follicular helper cell function
- Decreased IL-21 production in some cases

Genetic factors:
- Usually polygenic
- Associated with HLA-DR1, DQ2, DQW2 in some populations
- Rare cases of monogenic IgA deficiency (TNFRSF13B/TACI variants)
- Linked to CVID loci on chromosomes 6, 18

Mucosal IgA:
- Serum IgA is primarily monomeric
- Secretory IgA at mucosal surfaces is dimeric with J-chain and secretory component
- Some patients have normal secretory IgA despite low serum IgA
- Mucosal IgG may compensate

Diagnosis:

Screening:
- Serum IgA level on quantitative immunoglobulins
- <7 mg/dL in adults (laboratory-specific cutoff)
- Age-adjusted norms for children

Confirmation:
- Repeat testing to confirm persistence
- Normal IgG and IgM levels
- Exclude secondary causes:
  - Medications (immunosuppressants, antiepileptics)
  - Protein-losing states
  - Lymphoproliferative disorders
  - Infections (congenital rubella)

Additional testing:
- IgG subclasses (may identify concurrent subclass deficiency)
- Specific antibody titers to vaccines (tetanus, pneumococcal)
- Consider celiac screening (tTG-IgA will be falsely negative; use tTG-IgG or EMA)
- Lymphocyte subsets if CVID suspected

Age considerations:
- IgA levels reach adult range by age 4-6
- Diagnosis in young children should be made cautiously
- May be transient in children

Differential diagnosis:

Secondary causes:
- Drugs: Phenytoin, carbamazepine, D-penicillamine, gold, sulfasalazine, captopril, NSAIDs
- Infections: Congenital rubella, CMV, HIV
- Malignancy: Lymphoma, leukemia
- Protein loss: Nephrotic syndrome, protein-losing enteropathy
- Immunosuppression: Corticosteroids, chemotherapy

Related conditions:
- CVID: Low IgG and/or IgM in addition to IgA
- IgG subclass deficiency: May coexist
- Transient hypogammaglobulinemia of infancy: All immunoglobulins low, improves with age

Associated immune abnormalities:
- IgG subclass deficiency (IgG2 most common)
- Poor polysaccharide vaccine responses
- Atopic disease
- Autoimmune disease

Clinical evaluation:

History:
- Infection frequency and severity
- Type of organisms
- Response to antibiotics
- Family history of immunodeficiency
- Autoimmune symptoms
- Allergic symptoms

Physical examination:
- Signs of chronic infection
- Autoimmune manifestations
- Growth parameters in children

Management:

Asymptomatic patients:
- No treatment required
- Monitor for development of symptoms
- Educate about condition
- Medical alert for blood transfusions (if anti-IgA antibodies present)

Infections:
- Prompt antibiotic treatment
- May require longer courses
- Prophylactic antibiotics for frequent infections
- Rotating antibiotics to prevent resistance

IgA replacement not possible:
- No IgA replacement product available
- IgG replacement not indicated unless specific antibody deficiency present
- IVIG contains some IgA but not therapeutically beneficial for IgA function
- Risk of sensitization to IgA from IVIG

Associated conditions:

Autoimmune disease:
- Treat per standard protocols
- May require immunosuppression
- Monitor for complications

Celiac disease:
- Cannot use tTG-IgA for screening
- Use tTG-IgG, endomysial antibody IgG, or biopsy
- Gluten-free diet if diagnosed

Allergies:
- Standard management
- May be more prevalent

Gastrointestinal infections:
- Particularly Giardia lamblia
- Test for parasites in chronic diarrhea
- Treat with appropriate antiparasitics

Transfusion management:

Anti-IgA testing:
- Consider testing for anti-IgA antibodies if transfusion required
- Not all patients need testing

If anti-IgA present:
- Use washed RBCs or IgA-deficient blood products
- Plasma-reduced platelets
- Autologous blood donation if elective surgery planned

Most patients:
- Can receive standard blood products without reaction
- Anti-IgA antibodies present in minority
- Risk of anaphylaxis low overall

Prognosis and follow-up:

Natural history:
- Most remain asymptomatic
- Some develop symptoms over time
- 5-10% may progress to CVID
- Rarely, spontaneous recovery occurs

Monitoring:
- Periodic immunoglobulin levels
- Assess for new infections or autoimmune disease
- Monitor associated conditions
- Genetic counseling if family history

Long-term outcomes:
- Generally excellent
- Quality of life usually normal
- Life expectancy not significantly reduced in most
- Morbidity from associated autoimmune disease in some`,
      keyTerms: [
        { term: 'secretory IgA', definition: 'Dimeric form of IgA found at mucosal surfaces with secretory component' },
        { term: 'tTG-IgA', definition: 'Tissue transglutaminase IgA antibody; falsely negative in IgA deficiency' },
        { term: 'washed RBCs', definition: 'Red blood cells washed to remove plasma proteins including IgA' },
        { term: 'sensitization', definition: 'Development of antibodies against a substance after exposure' },
        { term: 'polygenic', definition: 'Involving multiple genes rather than single gene mutation' }
      ]
    },
    4: {
      level: 4,
      summary: 'Selective IgA deficiency management requires awareness of transfusion reactions, proper screening for celiac disease using IgG-based tests, and monitoring for progression to CVID or development of significant associated diseases.',
      explanation: `Clinical management of selective IgA deficiency focuses on recognition of associated conditions, proper diagnostic testing modifications, and individualized treatment of complications.

Infectious complications management:

Recurrent sinopulmonary infections:
- Culture-directed antibiotics
- Prolonged courses (2-3 weeks)
- Rotating antibiotics if frequent infections
- Airway clearance techniques
- Monitor for bronchiectasis development
- CT imaging if persistent symptoms

Antibiotic prophylaxis:
- Indicated for >3-4 infections per year
- Amoxicillin, azithromycin, or TMP-SMX
- Trade-off: Infection prevention vs resistance development
- Consider seasonal prophylaxis

Gastrointestinal infections:
- Giardia lamblia most common
- Test stool for ova and parasites in chronic diarrhea
- Treat with metronidazole or tinidazole
- Consider empiric treatment if clinical suspicion high
- Blastocystis, Cryptosporidium also seen

Vaccination:
- Inactivated vaccines safe and recommended
- May have impaired polysaccharide responses (test if concern)
- Protein-conjugate vaccines preferred
- Annual influenza vaccine
- Pneumococcal vaccines per guidelines

Autoimmune disease association:

Rheumatologic:
- Rheumatoid arthritis, SLE, juvenile idiopathic arthritis
- Seronegative spondyloarthropathies
- Management same as general population
- Immunosuppression if indicated

Gastrointestinal:
- Celiac disease: 10-15x increased prevalence
- Inflammatory bowel disease (Crohn disease, ulcerative colitis)
- Autoimmune hepatitis

Hematologic:
- ITP, autoimmune hemolytic anemia
- May respond to standard therapy
- Splenectomy caution (infection risk)

Endocrine:
- Type 1 diabetes
- Thyroid autoimmunity
- Addison disease (especially with APS-1)

Dermatologic:
- Dermatomyositis
- Vitiligo

Pathophysiology of autoimmunity:
- Impaired mucosal barrier allows antigen entry
- Immune dysregulation
- Shared genetic susceptibility loci
- Molecular mimicry theories

Celiac disease screening:

Testing limitations:
- tTG-IgA: Falsely negative (low IgA)
- Must use alternative testing

Appropriate tests:
- tTG-IgG (tissue transglutaminase IgG)
- EMA-IgG (endomysial antibody IgG)
- DGP-IgG (deamidated gliadin peptide IgG)
- HLA-DQ2/DQ8 testing (exclusion if negative)
- Small bowel biopsy if serology equivocal

Management:
- Gluten-free diet if confirmed
- Nutritional monitoring
- Bone density assessment

Progression to CVID:

Risk factors:
- Family history of CVID
- Low-normal IgG or IgG subclass deficiency
- Poor vaccine responses
- Autoimmune manifestations

Monitoring:
- Annual immunoglobulin levels
- Monitor for declining IgG
- Assess specific antibody responses if concern

Development of CVID:
- Occurs in 5-10% of IgA-deficient patients
- May take years to decades
- Treatment transitions to CVID management if occurs

Transfusion medicine considerations:

Risk assessment:
- Anti-IgA antibodies in 10-40% of IgA-deficient patients
- Anaphylactic reactions rare overall
- Most reactions are mild or moderate

Pre-transfusion testing:
- Consider anti-IgA testing if:
  - History of transfusion reaction
  - Planned major surgery
  - Frequent transfusion needs

Product selection if anti-IgA positive:
- Washed RBCs (removes 99% of plasma IgA)
- IgA-deficient plasma products (rare but available)
- Plasma-reduced platelets
- Autologous donation for elective surgery

Emergency situations:
- Life-threatening hemorrhage: Use available products
- Benefits outweigh risks
- May premedicate with antihistamines, steroids
- Monitor closely

Documentation:
- Clear labeling of IgA deficiency
- Anti-IgA antibody status
- Transfusion reaction history
- Product requirements

IgG subclass deficiency coexistence:

Prevalence:
- 10-20% of IgA-deficient patients
- IgG2 most commonly affected
- May impair polysaccharide responses

Testing:
- IgG subclasses if frequent infections
- Specific antibody responses to polysaccharide vaccines

Management:
- IgG replacement only if documented specific antibody deficiency with infections
- Not indicated for subclass deficiency alone
- IVIG contains trace IgA (risk of sensitization)

Special populations:

Children:
- Diagnosis before age 4 may be transient
- May normalize as immune system matures
- Monitor before making definitive diagnosis
- Growth and development monitoring

Pregnancy:
- Generally no special considerations
- IVIG if concurrent specific antibody deficiency
- Transfusion planning for delivery

Surgical patients:
- Plan for possible blood loss
- Type and screen early
- Washed products if anti-IgA positive
- Consider autologous donation

Research and emerging concepts:

Genetic studies:
- Genome-wide association studies
- Identification of risk loci
- Relationship to CVID genetics

Mucosal immunity:
- Secretory IgA independent of serum IgA
- Compensatory mechanisms
- Microbiome interactions

Therapeutic considerations:
- No effective IgA replacement
- Cytokine therapy not established
- Gene therapy theoretical for monogenic forms
- IVIG not beneficial for isolated IgA deficiency

Natural history studies:
- Long-term outcomes
- Risk factors for complications
- Spontaneous recovery rates
- Progression to CVID predictors`,
      keyTerms: [
        { term: 'EMA-IgG', definition: 'Endomysial antibody IgG; alternative test for celiac disease in IgA deficiency' },
        { term: 'protein-conjugate vaccine', definition: 'Vaccine linking polysaccharide to protein carrier for better immune response' },
        { term: 'bronchiectasis', definition: 'Permanent enlargement of airways from chronic infection/inflammation' },
        { term: 'autologous donation', definition: 'Donating one\'s own blood before surgery for later transfusion' },
        { term: 'APS-1', definition: 'Autoimmune Polyendocrine Syndrome type 1; associated with IgA deficiency' }
      ],
      clinicalNotes: `Clinical pearls for IgA deficiency:

1. IgA deficiency is common and usually asymptomatic - do not overtreat
2. Always use IgG-based tests (tTG-IgG) for celiac screening - tTG-IgA is falsely negative
3. Most IgA-deficient patients can receive standard blood transfusions without problems
4. Monitor periodically for progression to CVID, especially if low-normal IgG

Diagnosis considerations:
- Confirm persistence on repeat testing
- Exclude secondary causes, especially medications
- Consider transient nature in young children
- Evaluate for associated conditions if symptomatic

Transfusion management:
- Do not assume all IgA-deficient patients need special blood products
- Test for anti-IgA if history of transfusion reactions or planned major surgery
- Washed RBCs effective for anti-IgA positive patients
- Emergency: Use available products with monitoring

Infection management:
- Treat infections promptly and possibly longer
- Prophylactic antibiotics for frequent infections
- Monitor for bronchiectasis in recurrent pneumonia
- Test for Giardia in chronic diarrhea

Associated conditions:
- Screen for celiac disease with appropriate IgG tests
- Monitor for autoimmune disease development
- Higher allergy prevalence - manage appropriately
- Family history important

When to worry:
- Declining IgG levels
- Poor vaccine responses
- Development of autoimmunity
- Frequent severe infections
- These may herald progression to CVID

Patient education:
- Generally good prognosis
- Importance of reporting condition to healthcare providers
- Blood transfusion considerations
- When to seek medical attention
- Genetic counseling for family planning`
    },
    5: {
      level: 5,
      summary: 'Advanced concepts include the relationship between IgA deficiency and CVID, monogenic forms, microbiome interactions, the role of mucosal IgG compensation, and emerging understanding of selective IgA deficiency pathogenesis.',
      explanation: `Contemporary research in IgA deficiency focuses on genetic architecture, mucosal immune compensation, relationship to common variable immunodeficiency, and potential therapeutic approaches.

Genetic advances:

Polygenic inheritance:
- Complex genetic architecture
- Multiple susceptibility loci
- HLA associations (DR1, B8, DQ2)
- MHC class III region genes
- Non-HLA genes involved

Monogenic forms:
- Rare but informative
- TNFRSF13B (TACI) variants: Also cause CVID
- BAFF-R mutations
- LRBA deficiency
- ICOS deficiency
- These typically have additional features beyond isolated IgA deficiency

GWAS findings:
- Large-scale genetic studies
- Risk loci on chromosomes 6, 18
- Shared loci with CVID
- Suggest common pathophysiology

Relationship to CVID:

Clinical overlap:
- IgA deficiency and CVID share features
- May represent spectrum of disease
- Some patients transition between diagnoses

Genetic overlap:
- Same genetic risk loci
- Family members may have either condition
- Common pathophysiologic mechanisms

Progression risk:
- 5-10% of IgA deficiency progresses to CVID
- Risk factors: Low IgG, family history, autoimmunity
- Monitoring for progression important

Mechanistic relationship:
- IgA deficiency may be milder phenotype of same genetic lesion
- Environmental triggers may determine severity
- Additional genetic hits may cause progression

Mucosal immunity compensation:

IgG at mucosal surfaces:
- Normally transported less efficiently than IgA
- Upregulated in IgA deficiency
- Can provide compensatory protection
- Detected in saliva, respiratory secretions, stool

Mechanisms:
- FcRn-mediated transport
- Increased transepithelial IgG transport
- Enhanced mucosal IgG production
- Polymeric Ig receptor involvement

Clinical significance:
- May explain mild phenotype in many patients
- Compensation not complete in all
- Variable between individuals
- May affect susceptibility to specific pathogens

Microbiome interactions:

Gut microbiome:
- IgA regulates microbiome composition
- IgA deficiency associated with dysbiosis
- Increased mucosal bacterial adherence
- Altered microbial community structure

Consequences:
- Increased bacterial translocation
- Chronic immune activation
- May contribute to autoimmunity
- Pro-inflammatory microbial profiles

Therapeutic implications:
- Probiotics may be beneficial
- Fecal microbiota transplantation theoretical
- Microbiome modulation strategies

Secretory IgA independent of serum:

Compartmentalization:
- Serum IgA and secretory IgA partially independent
- Some patients have normal secretory IgA despite low serum
- Different regulation and production sites

Clinical relevance:
- May explain variable clinical presentation
- Mucosal protection possible despite low serum
- Diagnostic limitations

Measurement challenges:
- Secretory IgA difficult to measure
- Salivary IgA not standardized
- Clinical utility uncertain

Therapeutic considerations:

Why no IgA replacement:
- Short half-life (6 days) requiring frequent dosing
- Difficult to produce in therapeutic quantities
- Monomeric vs dimeric forms
- Mucosal delivery challenges
- Cost-benefit unfavorable

IVIG limitations:
- Contains primarily IgG with trace IgA
- Not therapeutically useful for IgA function
- Risk of anti-IgA sensitization
- Not recommended for isolated IgA deficiency

Emerging approaches:
- Recombinant IgA production
- Gene therapy for monogenic forms
- Cytokine modulation (IL-21, TGF-beta)
- Microbiome manipulation

Research directions:

Natural history studies:
- Long-term outcome tracking
- Risk stratification
- Spontaneous recovery predictors
- CVID progression markers

Pathophysiology:
- B-cell differentiation block
- Cytokine networks
- T-cell help abnormalities
- Epigenetic factors

Clinical trials:
- Probiotic interventions
- Antibiotic strategies
- Immunomodulatory approaches
- Gene therapy for severe forms

Health economics:
- Cost of monitoring vs benefit
- Transfusion medicine implications
- Healthcare utilization patterns

Global health:
- Varying prevalence by ethnicity
- Diagnostic access
- Management disparities

Future prospects:

Personalized medicine:
- Risk stratification by genetic profile
- Individualized monitoring strategies
- Targeted interventions

Therapeutic development:
- Recombinant IgA for severe mucosal disease
- Gene editing for monogenic forms
- Cytokine therapy
- Microbiome restoration

Understanding spectrum:
- IgA deficiency to CVID as continuum
- Variable expressivity
- Environmental interactions
- Modifier genes

Prevention:
- Avoidance of iatrogenic causes
- Drug development screening
- Prenatal counseling for severe forms
- Family screening strategies`,
      keyTerms: [
        { term: 'GWAS', definition: 'Genome-wide association study; identifies genetic variants associated with disease' },
        { term: 'FcRn', definition: 'Neonatal Fc receptor; transports IgG across mucosal surfaces' },
        { term: 'dysbiosis', definition: 'Altered microbiome composition associated with disease' },
        { term: 'variable expressivity', definition: 'Range of phenotypes from same genetic variant' },
        { term: 'recombinant IgA', definition: 'Laboratory-produced IgA for therapeutic use' }
      ],
      clinicalNotes: `Advanced clinical considerations:

Rare presentations:
- Profound IgA deficiency with severe infections
- May have underlying monogenic defect
- Consider extended genetic testing
- Evaluate for CVID overlap

IgA nephropathy paradox:
- Most common glomerulonephritis
- Characterized by IgA deposition in kidneys
- Can occur in IgA-deficient patients (produced locally)
- Pathophysiology distinct from systemic IgA

Selective IgA deficiency in other species:
- Dogs: Common in certain breeds (Beagle)
- Similar clinical spectrum
- Veterinary model for human disease

Drug development:
- Screen new drugs for IgA-lowering effects
- Phenytoin and others well-documented
- Reversible with drug discontinuation

Atopy and infection balance:
- Some patients have allergies without infections
- Others have infections without allergies
- Variable penetrance of different features
- Genetic and environmental modifiers

Research enrollment:
- Natural history registries valuable
- USIDNET and similar databases
- Family studies for genetic research
- Novel therapeutic trials

Long-term care:
- Transition from pediatric to adult care
- Genetic counseling updates
- Reproductive planning
- Employment and insurance considerations

Quality of life:
- Generally excellent for most
- Anxiety about diagnosis common
- Education reduces concern
- Support groups available

Emerging associations:
- COVID-19 outcomes in IgA deficiency
- Cancer risk studies
- Autoimmune disease mechanisms
- Microbiome research applications`
    }
  },
  media: [],
  citations: [
    { id: '1', type: 'textbook', title: 'Middleton\'s Allergy: Principles and Practice', authors: ['Burks AW', 'Holgate ST', 'O\'Hehir RE'], source: 'Elsevier', chapter: 'Chapter 62: Selective IgA Deficiency' },
    { id: '2', type: 'article', title: 'Selective IgA deficiency: Clinical and laboratory characteristics of 238 children', authors: ['Yel L'], source: 'Clinical Reviews in Allergy and Immunology', chapter: '2010' }
  ],
  crossReferences: [
    { targetId: 'primary-immunodeficiency', targetType: 'condition', relationship: 'parent' },
    { targetId: 'cvid', targetType: 'condition', relationship: 'related' },
    { targetId: 'celiac-disease', targetType: 'condition', relationship: 'related' }
  ],
  tags: {
    systems: ['allergy-immunology'],
    topics: ['immunodeficiency', 'antibody deficiency', 'IgA'],
    keywords: ['IgA deficiency', 'selective IgA deficiency', 'primary immunodeficiency', 'celiac disease', 'transfusion reaction'],
    clinicalRelevance: 'medium'
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published'
};
