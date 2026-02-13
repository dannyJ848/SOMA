import { EducationalContent } from '../../types';

export const CRYPTOCOCCOSIS: EducationalContent = {
  id: 'infectious-disease-cryptococcosis',
  type: 'condition',
  name: 'Cryptococcosis',
  nameEs: 'Criptococosis',
  alternateNames: ['Cryptococcal Meningitis', 'Cryptococcal Infection', 'Cryptococcus neoformans Infection'],
  levels: {
    1: {
      level: 1,
      summary: 'Cryptococcosis is a serious infection caused by a fungus found in soil and bird droppings that can infect the lungs and brain, especially in people with weakened immune systems like those with HIV/AIDS.',
      explanation: `Cryptococcus is a fungus found in soil all around the world, especially in areas with lots of bird droppings (particularly pigeons). When tiny fungal particles are breathed in, they can cause an infection in the lungs. In people with healthy immune systems, the body usually fights it off. But in people with very weak immune systems, especially those with advanced HIV/AIDS, the fungus can spread to the brain and cause a very serious type of meningitis (infection of the lining around the brain).

**Symptoms:**
- **Lung infection**: Cough, shortness of breath, chest pain
- **Brain infection (meningitis)**: Severe headache, fever, neck stiffness, confusion, sensitivity to light
- The headache from cryptococcal meningitis can be extremely severe due to pressure building up around the brain

**Who Is at Risk:**
- People with advanced HIV/AIDS (most common cause worldwide)
- People taking medications that suppress the immune system
- People who have had organ transplants

**Treatment:**
- Strong antifungal medicines given through an IV (amphotericin B) followed by pills (fluconazole)
- Sometimes the doctor needs to remove spinal fluid to relieve pressure on the brain
- Treatment lasts many months

**Prevention:**
- People with HIV should take their antiretroviral medications to keep their immune system strong
- In some countries, people with very low CD4 counts receive preventive fluconazole`,
      keyTerms: [
        { term: 'Cryptococcus', definition: 'A fungus found in soil and bird droppings that can cause serious infections in the lungs and brain' },
        { term: 'Meningitis', definition: 'An infection of the protective membranes covering the brain and spinal cord' },
        { term: 'CD4 cells', definition: 'White blood cells that help fight infections; HIV destroys these cells' },
        { term: 'Lumbar puncture', definition: 'A procedure where a needle is inserted into the lower back to collect or drain spinal fluid' },
      ],
      analogies: [
        'Cryptococcus has a thick sugar coating (capsule) that acts like an invisibility cloak, hiding it from your immune system.',
        'Draining spinal fluid in cryptococcal meningitis is like releasing pressure from an overinflated tire to prevent damage.',
      ],
      examples: [
        'A person with untreated HIV develops severe headaches, confusion, and fever - testing reveals cryptococcal meningitis.',
        'A kidney transplant patient on immunosuppressive drugs develops a lung infection caused by Cryptococcus.',
      ],
      patientCounselingPoints: [
        'Take HIV medications consistently to prevent your immune system from becoming weak enough for this infection.',
        'The treatment is long (often 6-12 months of fluconazole) - do not stop early.',
        'If you develop severe headaches during treatment, contact your doctor immediately.',
      ],
    },
    2: {
      level: 2,
      summary: 'Cryptococcus neoformans is an encapsulated yeast causing meningoencephalitis primarily in HIV/AIDS patients with CD4 <100, diagnosed by India ink stain and cryptococcal antigen testing, and treated with amphotericin B plus flucytosine induction followed by fluconazole consolidation and maintenance.',
      explanation: `Cryptococcus neoformans is an encapsulated basidiomycetous yeast found globally in soil contaminated with pigeon guano. C. gattii is a related species affecting immunocompetent individuals, primarily in tropical regions and the Pacific Northwest.

**Epidemiology:**
- Leading cause of meningitis in sub-Saharan Africa (~180,000 deaths/year globally)
- Primarily affects HIV patients with CD4 <100 cells/mcL
- Third most common opportunistic infection in AIDS

**Clinical Manifestations:**
- Meningoencephalitis: Subacute onset (days to weeks); headache, fever, altered mental status, cranial nerve palsies
- Pulmonary: Cough, dyspnea; may be asymptomatic; nodules or consolidation on imaging
- Disseminated: Skin lesions (umbilicated papules mimicking molluscum), lymphadenopathy, bone
- Elevated intracranial pressure: Present in >50% of cryptococcal meningitis cases; major cause of morbidity and mortality

**Diagnosis:**

| Test | Description | Sensitivity |
|------|-------------|-------------|
| Cryptococcal antigen (CrAg) | Latex agglutination or lateral flow assay; detects capsular polysaccharide | >95% (serum and CSF) |
| India ink | Direct visualization of encapsulated yeast in CSF | 50-80% |
| CSF culture | Gold standard; growth in 3-7 days | 90-95% |
| CSF opening pressure | Often elevated (>25 cm H2O); critical to measure | N/A |
| CrAg screening | Serum CrAg in HIV patients with CD4 <100 to detect subclinical disease | N/A |

**CSF Findings:**
- Elevated protein, low glucose, lymphocytic pleocytosis (may be minimal in severe immunosuppression)
- Elevated opening pressure (>25 cm H2O in ~60-80%)

**Treatment Protocol:**

| Phase | Duration | Regimen |
|-------|----------|---------|
| Induction | 2 weeks | Amphotericin B deoxycholate (1 mg/kg/day) + flucytosine (100 mg/kg/day divided q6h) |
| Consolidation | 8 weeks | Fluconazole 400 mg/day |
| Maintenance | Until CD4 >200 for 6+ months on ART | Fluconazole 200 mg/day |

- Liposomal amphotericin B preferred if available (less nephrotoxicity)
- WHO 2022 guidelines: Single high-dose liposomal amphotericin B (10 mg/kg) + 14 days fluconazole + flucytosine as alternative induction
- Elevated ICP management: Serial therapeutic lumbar punctures (remove 20-30 mL or until pressure <20 cm H2O); daily if needed
- ART timing: Delay 4-6 weeks after antifungal initiation to prevent IRIS

**C. gattii:**
- Distinct species affecting immunocompetent hosts
- Associated with eucalyptus trees and Pacific Northwest outbreaks
- Cryptococcomas (mass lesions) more common
- Longer treatment duration may be needed`,
      keyTerms: [
        { term: 'Cryptococcal antigen (CrAg)', definition: 'A highly sensitive blood or spinal fluid test detecting Cryptococcus capsular polysaccharide' },
        { term: 'India ink stain', definition: 'A microscopy technique where the thick Cryptococcus capsule appears as a clear halo against a dark background' },
        { term: 'Flucytosine', definition: 'An antifungal drug used in combination with amphotericin B for cryptococcal meningitis induction therapy' },
        { term: 'IRIS', definition: 'Immune Reconstitution Inflammatory Syndrome; paradoxical worsening when the immune system recovers on ART' },
        { term: 'Intracranial pressure', definition: 'The pressure inside the skull; dangerously elevated in cryptococcal meningitis and managed with serial lumbar punctures' },
      ],
      examples: [
        'An HIV patient with CD4 of 45 presents with 2 weeks of worsening headache; LP shows CrAg-positive CSF with opening pressure of 35 cm H2O.',
        'CrAg screening in a newly diagnosed HIV patient with CD4 of 80 reveals positive serum antigen, prompting LP before starting ART.',
      ],
      patientCounselingPoints: [
        'Do not start HIV medications until your doctor says it is safe; starting too early can make the brain infection worse.',
        'You will need to take fluconazole for many months after the initial treatment.',
        'Report any worsening headaches immediately, as pressure may need to be relieved.',
      ],
    },
    3: {
      level: 3,
      summary: 'Cryptococcus neoformans pathogenesis depends on its polysaccharide capsule (glucuronoxylomannan) for immune evasion, melanin production for oxidative stress protection, and ability to survive within macrophages; host defense requires CD4+ T-cell-mediated Th1 responses with granuloma formation.',
      explanation: `Detailed understanding of Cryptococcus virulence factors, host-pathogen interactions, and treatment optimization is essential for managing this infection.

**Virulence Factors:**

*Polysaccharide Capsule:*
- Composed primarily of glucuronoxylomannan (GXM) and galactoxylomannan (GalXM)
- Functions: Inhibits phagocytosis, suppresses T-cell proliferation, depletes complement, induces immunosuppressive IL-10
- Capsule size increases in vivo and in response to CO2, iron limitation
- GXM shed in large quantities; detectable by CrAg testing; acts as immune decoy
- Interferes with antigen presentation by dendritic cells

*Melanin:*
- Synthesized by laccase enzyme from catecholamine substrates (dopamine in CNS - explains CNS tropism)
- Protects against oxidative killing by macrophages and neutrophils
- Scavenges free radicals
- May contribute to resistance to amphotericin B

*Intracellular Survival:*
- Survives and replicates within macrophage phagolysosomes
- Phagosomal pH modulation, capsule enlargement within macrophages
- Non-lytic exocytosis (vomocytosis): Escape from macrophages without cell lysis
- Titan cells: Giant cells (>10 um) that resist phagocytosis; generated in vivo

**Host Immune Response:**
- Alveolar macrophages: First encounter; containment depends on Th1 activation
- CD4+ T cells: Critical (explains HIV association); IFN-gamma activates macrophage fungicidal activity
- Granuloma formation: Contains infection in immunocompetent hosts (latent infection possible)
- Th2 response: Associated with disease progression; IL-4/IL-13 promote alternatively activated macrophages
- Antibody role: Anti-GXM antibodies can enhance phagocytosis; basis for vaccine/immunotherapy research

**Treatment Optimization:**

*Amphotericin B + Flucytosine Synergy:*
- Amphotericin B: Binds ergosterol creating membrane pores
- Flucytosine: Converted to 5-fluorouracil by fungal cytosine deaminase; inhibits DNA/RNA synthesis
- Synergy: Amphotericin B pores increase flucytosine intracellular accumulation
- Combination achieves more rapid CSF sterilization than either agent alone
- Day 14 CSF culture negativity predicts long-term outcome

*ICP Management:*
- Pathophysiology: Capsular polysaccharide obstructs CSF reabsorption at arachnoid granulations
- Opening pressure >25 cm H2O requires intervention
- Serial therapeutic LPs: Remove CSF until OP <20 or 50% reduction; daily initially
- Ventriculoperitoneal shunt for refractory elevated ICP
- Acetazolamide and mannitol are NOT effective

*IRIS (Immune Reconstitution Inflammatory Syndrome):*
- Paradoxical IRIS: Worsening symptoms despite effective antifungal therapy after ART initiation
- Unmasking IRIS: New cryptococcal disease revealed after ART initiation
- Risk factors: Low baseline CD4, high fungal burden, early ART initiation
- Management: Continue ART and antifungals; corticosteroids for severe IRIS (dexamethasone 0.3 mg/kg/day tapered); serial LPs for ICP
- ART timing: Delay 4-6 weeks after antifungal induction reduces IRIS risk (COAT trial)

**Resistance:**
- Primary resistance to fluconazole increasing in some regions (Africa)
- Heteroresistance: Subpopulations with varying MICs; may explain relapse on fluconazole
- Aneuploidy/disomy of chromosome 1: Rapid adaptation mechanism conferring fluconazole resistance`,
      keyTerms: [
        { term: 'Glucuronoxylomannan (GXM)', definition: 'The major capsular polysaccharide of Cryptococcus that inhibits phagocytosis, suppresses T-cell responses, and is the target of CrAg diagnostic tests' },
        { term: 'Vomocytosis', definition: 'Non-lytic exocytosis allowing Cryptococcus to escape from macrophages without killing the host cell, enabling dissemination' },
        { term: 'Titan cells', definition: 'Enlarged Cryptococcus cells (>10 um) generated in vivo that resist phagocytosis and may serve as a reservoir for infection' },
        { term: 'Laccase', definition: 'A Cryptococcus enzyme that synthesizes melanin from catecholamine substrates, contributing to CNS tropism and protection against oxidative stress' },
        { term: 'Heteroresistance', definition: 'The presence of subpopulations with different antifungal susceptibilities within a single isolate, contributing to treatment failure' },
      ],
      clinicalNotes: 'CSF sterilization by day 14 of induction is the strongest predictor of long-term outcome and should guide treatment decisions. Aggressive ICP management with serial LPs is critical and often underutilized. ART should be delayed 4-6 weeks to reduce IRIS risk. Fluconazole heteroresistance is increasingly recognized and may contribute to relapse despite apparent in vitro susceptibility. Flucytosine therapeutic drug monitoring (target 2-hour level 25-100 mcg/mL) prevents bone marrow toxicity.',
    },
    4: {
      level: 4,
      summary: 'Advanced cryptococcosis management encompasses WHO-recommended single high-dose liposomal amphotericin B strategies for resource-limited settings, the molecular basis of CNS tropism (inositol/dopamine utilization), novel diagnostic approaches (CrAg lateral flow screening algorithms), and emerging therapies including anti-GXM antibodies and tamoxifen repurposing.',
      explanation: `Graduate-level understanding integrates global health strategies, molecular pathogenesis, and translational research.

**WHO 2022 Treatment Guidelines:**
- Preferred induction: Single high-dose liposomal amphotericin B (10 mg/kg on day 1) + flucytosine (14 days) + fluconazole (1200 mg/day, 14 days)
- AMBITION trial: Non-inferior to standard 7-day amphotericin B + flucytosine with lower toxicity; simplified implementation
- Resource-limited alternatives: Amphotericin B deoxycholate (1 mg/kg/day for 7 days) + flucytosine + fluconazole (1200 mg/day)
- Flucytosine access: WHO Essential Medicine; now generically available through partnerships
- CrAg screening: WHO recommends serum CrAg screening for all HIV patients with CD4 <200; preemptive fluconazole if positive/LP negative

**Molecular Basis of CNS Tropism:**
- Dopamine: Substrate for laccase-mediated melanin synthesis; high concentration in basal ganglia explains predilection
- Inositol: C. neoformans acquires host inositol (abundant in brain) via specific transporters (ITR1, ITR3); essential for capsule synthesis
- BBB crossing: Transcellular migration across brain endothelial cells; requires metalloproteinase (Mpr1), urease, and hyaluronic acid synthesis
- Trojan horse mechanism: Macrophages carrying intracellular yeast cross the BBB
- Temperature: 37C optimal growth; thermotolerance distinguishes pathogenic from environmental strains

**Novel Therapeutic Approaches:**

*18B7 Anti-GXM Antibody:*
- Murine monoclonal antibody targeting capsular GXM
- Enhances phagocytosis and antigen presentation
- Phase 1 trial completed; safe and tolerated
- Humanized versions in development

*Tamoxifen:*
- Calmodulin antagonist with direct antifungal activity against Cryptococcus
- Synergistic with fluconazole in vitro and in animal models
- Crosses BBB
- Phase 2 clinical trial (ACACIA) in progress as adjunctive therapy
- Repurposed drug advantage: Known safety profile, low cost, widely available

*Sertraline:*
- SSRI with in vitro and in vivo anti-cryptococcal activity
- Crosses BBB; concentrates in CNS
- ASTRO-CM trial: Did not improve 18-week survival as adjunctive therapy (negative result)
- Illustrates challenge of translating in vitro activity to clinical outcomes

*APX001 (Fosmanogepix):*
- Gwt1 inhibitor with anti-Cryptococcus activity
- Under investigation for invasive fungal infections

**Immune-Based Strategies:**
- IFN-gamma: Adjunctive therapy; enhances macrophage killing; case series support in refractory disease
- Checkpoint inhibition: PD-1 blockade may restore exhausted T-cell responses in cryptococcal meningitis (experimental)
- Dendritic cell vaccines: Cryptococcus antigen-loaded DCs to boost adaptive immunity (preclinical)

**Global Epidemiology and Screening:**
- CrAg lateral flow assay (IMMY): Point-of-care test; sensitivity/specificity >99%; finger-prick blood sample
- Screen-and-treat: CrAg screening at HIV diagnosis if CD4 <200; preemptive fluconazole if CrAg+ and LP negative
- Implementation: Reduced cryptococcal meningitis incidence by 28% in some programs
- Cost-effectiveness: CrAg screening is cost-effective in sub-Saharan Africa at CD4 <200 threshold
- Persistent global mortality: Despite effective ART, cryptococcal meningitis remains leading cause of AIDS-related death in Africa`,
      keyTerms: [
        { term: 'AMBITION trial', definition: 'A landmark trial demonstrating that single high-dose liposomal amphotericin B is non-inferior to standard 7-day induction for cryptococcal meningitis, simplifying treatment in resource-limited settings' },
        { term: 'CrAg lateral flow assay', definition: 'A rapid, low-cost, point-of-care diagnostic test for cryptococcal antigen with >99% sensitivity, enabling population-level screening in HIV programs' },
        { term: 'Trojan horse mechanism', definition: 'The theory that Cryptococcus crosses the blood-brain barrier inside macrophages, using them as vehicles for CNS dissemination' },
        { term: 'Tamoxifen repurposing', definition: 'The investigation of the breast cancer drug tamoxifen as an adjunctive antifungal agent for cryptococcosis due to its calmodulin antagonist and direct anti-cryptococcal activity' },
        { term: 'Inositol transporter', definition: 'Cryptococcus-specific transporters (ITR1/ITR3) that acquire host brain inositol for capsule synthesis, contributing to CNS tropism' },
      ],
      clinicalNotes: 'The AMBITION regimen represents a paradigm shift in cryptococcal meningitis treatment for resource-limited settings. CrAg screening programs are a proven, cost-effective intervention that should be integrated into all HIV care programs. Novel therapeutic approaches (tamoxifen, anti-GXM antibodies) are in clinical development. Understanding the molecular basis of CNS tropism informs drug target selection. Flucytosine access remains a global equity issue despite WHO essential medicine listing.',
    },
    5: {
      level: 5,
      summary: 'Expert cryptococcosis management integrates the latest clinical trial data, global policy advocacy for CrAg screening implementation, understanding of adaptive resistance mechanisms, next-generation antifungal pipeline for cryptococcal disease, and the design of pragmatic clinical trials in resource-limited settings.',
      explanation: `Expert-level knowledge encompasses translational science, global health implementation, and research frontiers.

**Current Research Frontiers:**

*Vaccine Development:*
- GXM-tetanus toxoid conjugate vaccine: Immunogenic in animal models; generates protective antibodies
- Beta-glucan-CRM197 conjugate: Pan-fungal vaccine targeting conserved cell wall component
- Whole-killed Cryptococcus plus adjuvant: Generates Th1 protective immunity in mice
- Live attenuated strains: Engineered capsule-deficient or virulence-attenuated mutants
- Challenges: Target population (HIV-immunosuppressed) may not mount adequate vaccine response; pre-exposure vaccination strategy needed

*Adaptive Resistance Mechanisms:*
- Aneuploidy: Rapid generation of extra chromosomes (especially chromosome 1) under fluconazole pressure; increases ERG11 copy number
- Heteroresistance: Subpopulations with aneuploid cells at higher MICs; unstable but clinically significant
- Epigenetic regulation: Chromatin modifications affecting drug target expression
- RNA interference pathway: Transposon-derived siRNAs may regulate drug resistance gene expression in C. neoformans

*Single-Cell Genomics:*
- Single-cell RNA sequencing of Cryptococcus during host infection reveals phenotypic heterogeneity
- Dormant vs. actively replicating populations
- Niche-specific gene expression (lung vs. brain vs. bloodstream)
- Understanding heterogeneity informs combination therapy rationale

**Implementation Science:**
- CrAg reflexive testing: Automatic laboratory CrAg testing when CD4 <200; opt-out rather than opt-in increases screening rates
- Integration with ART clinics: Point-of-care CrAg testing at ART initiation
- Supply chain: Ensuring consistent flucytosine and liposomal amphotericin B availability
- Task-shifting: Training non-physician providers for LP and ICP management
- Quality improvement: Bundled care protocols (CrAg screen, LP if positive, ICP management, delayed ART, fluconazole maintenance)

**Pragmatic Trial Design:**
- AMBITION-cm: Pragmatic, open-label, non-inferiority design suitable for resource-limited settings
- Cluster-randomized designs: Comparing screening strategies at health facility level
- Composite endpoints: 10-week all-cause mortality + disability; patient-centered outcomes
- Adaptive platform: Testing multiple adjunctive therapies (IFN-gamma, tamoxifen, next-generation azoles) within single infrastructure

**Health Economic Considerations:**
- Cryptococcal meningitis treatment costs: $2,000-5,000 per episode in Africa
- CrAg screening cost: ~$2 per test; cost-effective at CD4 <200 threshold
- Prevention via sustained ART: Most cost-effective strategy long-term
- DALY burden: 1.7 million DALYs annually from cryptococcal meningitis
- Economic argument for flucytosine access: Each $1 invested in flucytosine availability returns $3-5 in reduced mortality and hospitalization costs

**Expert Clinical Pearls:**
- CSF CrAg titer >1:1024 and CSF white cell count <20 cells/mcL predict poor outcome
- Repeat LP at 2 weeks: Persistent culture positivity should prompt treatment reassessment
- Fluconazole maintenance can be discontinued when CD4 >200 for 6+ months on ART with undetectable viral load
- C. gattii: Longer induction may be needed; cryptococcomas may require surgery; IRIS more common
- Pregnancy: Amphotericin B is relatively safe; fluconazole is teratogenic in first trimester (risk-benefit)`,
      keyTerms: [
        { term: 'Aneuploidy-mediated resistance', definition: 'A rapid, reversible mechanism of fluconazole resistance in Cryptococcus involving gain of extra chromosomes carrying drug target genes' },
        { term: 'Reflexive CrAg testing', definition: 'Automatic laboratory-triggered cryptococcal antigen testing when a CD4 count result falls below a threshold, removing the need for separate physician orders' },
        { term: 'Task-shifting', definition: 'The delegation of clinical procedures (such as lumbar punctures) to non-physician healthcare workers to improve access in resource-limited settings' },
        { term: 'DALY', definition: 'Disability-Adjusted Life Year; a measure of overall disease burden combining years lost to premature death and years lived with disability' },
        { term: 'Single-cell genomics', definition: 'Technology enabling transcriptomic analysis of individual fungal cells during infection, revealing phenotypic heterogeneity and niche-specific gene expression' },
      ],
      clinicalNotes: 'The ID specialist must be both a clinical expert and global health advocate for cryptococcal disease. Key priorities: (1) Implementation of CrAg screening in all HIV programs. (2) Adoption of the AMBITION single high-dose regimen where liposomal amphotericin B is available. (3) Advocacy for flucytosine access globally. (4) Understanding that fluconazole heteroresistance is a clinically relevant phenomenon. (5) Monitoring the antifungal pipeline including novel azoles, GXM-targeted antibodies, and vaccine candidates. (6) Contributing to pragmatic clinical trial design for resource-limited settings. Cryptococcal meningitis remains a leading cause of AIDS-related mortality, and reducing this burden is an achievable global health goal.',
    },
  },
  media: [],
  citations: [
    { id: 'perfect-cid-crypto-2010', type: 'article', title: 'Clinical Practice Guidelines for the Management of Cryptococcal Disease: 2010 Update by IDSA', authors: ['Perfect JR', 'Dismukes WE', 'Dromer F'], source: 'Clinical Infectious Diseases', license: 'Copyrighted' },
    { id: 'ambition-nejm-2022', type: 'article', title: 'Single-Dose Liposomal Amphotericin B Treatment for Cryptococcal Meningitis', authors: ['Jarvis JN', 'Lawrence DS', 'Meya DB'], source: 'New England Journal of Medicine', license: 'Copyrighted' },
    { id: 'who-crypto-guidelines-2022', type: 'website', title: 'Guidelines for Diagnosing, Preventing, and Managing Cryptococcal Disease in Adults, Adolescents, and Children Living with HIV', source: 'World Health Organization', license: 'CC BY-NC-SA 3.0 IGO' },
  ],
  crossReferences: [
    { targetId: 'infectious-disease-candidiasis', targetType: 'condition', relationship: 'sibling', label: 'Candidiasis' },
    { targetId: 'infectious-disease-aspergillosis', targetType: 'condition', relationship: 'sibling', label: 'Aspergillosis' },
    { targetId: 'infectious-disease-meningitis', targetType: 'condition', relationship: 'related', label: 'Meningitis' },
    { targetId: 'infectious-disease-hiv-aids', targetType: 'condition', relationship: 'related', label: 'HIV/AIDS' },
  ],
  tags: {
    systems: ['infectious-disease', 'mycology', 'neurology'],
    topics: ['fungal-infections', 'cryptococcosis', 'meningitis', 'HIV-opportunistic-infections'],
    keywords: ['Cryptococcus', 'CrAg', 'cryptococcal meningitis', 'amphotericin B', 'flucytosine', 'fluconazole', 'ICP', 'IRIS', 'capsule', 'GXM'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine'] },
  },
  createdAt: '2026-01-30T00:00:00.000Z',
  updatedAt: '2026-01-30T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['SOMA Content Team'],
};
