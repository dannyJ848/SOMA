import { EducationalContent } from '../../types';

export const MALARIA: EducationalContent = {
  id: 'infectious-disease-malaria',
  type: 'condition',
  name: 'Malaria',
  nameEs: 'Malaria',
  alternateNames: ['Paludism', 'Plasmodium Infection', 'Marsh Fever'],
  levels: {
    1: {
      level: 1,
      summary: 'Malaria is a serious disease spread by mosquito bites that causes high fevers, chills, and body aches; it is one of the most important infectious diseases in the world, killing hundreds of thousands of people each year, mostly children in Africa.',
      explanation: `Malaria is caused by tiny parasites called Plasmodium that are spread to humans through the bite of infected female Anopheles mosquitoes. When a mosquito bites you, the parasites enter your blood and travel to your liver, where they multiply. Then they enter your red blood cells, multiply again, and burst out, causing waves of fever and chills.

**Symptoms:**
- High fever that comes in cycles (every 48-72 hours)
- Shaking chills and sweats
- Headache and body aches
- Nausea and vomiting
- Fatigue and weakness
- In severe cases: seizures, confusion, organ failure, death

**Where Malaria Occurs:**
- Tropical and subtropical regions: Sub-Saharan Africa (most cases), Southeast Asia, South America, India
- NOT in the US or Europe (except travelers returning from endemic areas)

**Prevention:**
- Mosquito nets treated with insecticide (bed nets)
- Insect repellent (DEET)
- Antimalarial pills when traveling to endemic areas
- New malaria vaccine (RTS,S/Mosquirix) recommended for children in high-risk areas

**Treatment:**
- Antimalarial medications can cure malaria if started quickly
- Severe malaria requires IV medications in a hospital
- Early treatment is critical - delays can be fatal`,
      keyTerms: [
        { term: 'Malaria', definition: 'A serious disease caused by Plasmodium parasites spread through mosquito bites' },
        { term: 'Parasite', definition: 'A living thing that lives in or on another organism and causes it harm' },
        { term: 'Mosquito net', definition: 'A net hung over a bed to prevent mosquito bites while sleeping; treated ones also kill mosquitoes' },
        { term: 'Endemic', definition: 'Regularly found in a certain area; malaria is endemic in tropical regions' },
      ],
      analogies: [
        'Malaria parasites are like stowaways that enter through a mosquito\'s bite, hide in your liver, then hijack your red blood cells.',
        'The cyclical fever in malaria is like waves crashing on shore - the parasites burst out of red blood cells in synchronized waves.',
      ],
      examples: [
        'A child in Sub-Saharan Africa develops high fever and chills after being bitten by a mosquito at night.',
        'A traveler returning from India develops cyclical fevers - a blood test reveals malaria parasites inside red blood cells.',
      ],
      patientCounselingPoints: [
        'If traveling to a malaria area, take preventive medications exactly as prescribed.',
        'Use insect repellent and sleep under a treated bed net.',
        'Seek medical attention immediately if you develop fever after traveling to a tropical area.',
      ],
    },
    2: {
      level: 2,
      summary: 'Malaria is caused by five Plasmodium species (P. falciparum most lethal), transmitted by Anopheles mosquitoes, presenting with cyclical fevers and potentially fatal complications including cerebral malaria and severe anemia; diagnosed by blood smear or rapid diagnostic test and treated with artemisinin-based combination therapy.',
      explanation: `Malaria is a protozoan parasitic infection that remains one of the leading infectious causes of death globally, with approximately 250 million cases and 600,000 deaths annually (mostly children under 5 in sub-Saharan Africa).

**Plasmodium Species:**

| Species | Distribution | Severity | Cycle | Key Features |
|---------|-------------|----------|-------|-------------|
| P. falciparum | Tropics (Africa most) | Most severe/lethal | 48 hours | Cerebral malaria, high parasitemia, banana-shaped gametocytes |
| P. vivax | Wide (Asia, Americas) | Moderate | 48 hours | Relapse from hypnozoites in liver; enlarged RBCs |
| P. ovale | West Africa | Mild | 48 hours | Relapse (like vivax); oval-shaped RBCs |
| P. malariae | Wide (low level) | Mild | 72 hours | Chronic infection; nephrotic syndrome |
| P. knowlesi | Southeast Asia | Can be severe | 24 hours | Zoonotic (macaque monkeys); can cause high parasitemia |

**Life Cycle:**
1. Mosquito injects sporozoites during bite
2. Sporozoites travel to liver -> hepatic schizogony (asymptomatic, 1-2 weeks)
3. Merozoites released into blood -> invade red blood cells -> erythrocytic schizogony
4. RBCs burst releasing merozoites (causes fever/chills) -> reinvade new RBCs (cycle repeats)
5. Some become gametocytes -> taken up by mosquito (sexual reproduction)
6. P. vivax/ovale: Hypnozoites remain dormant in liver -> can reactivate months to years later

**Clinical Manifestations:**

*Uncomplicated Malaria:*
- Cyclical fevers, rigors, sweats (classic paroxysms)
- Headache, myalgia, malaise
- Splenomegaly, anemia, thrombocytopenia

*Severe/Complicated Malaria (P. falciparum):*
- Cerebral malaria: Altered consciousness, seizures, coma
- Severe anemia (Hgb <7 g/dL)
- Acute kidney injury
- Pulmonary edema/ARDS
- Hypoglycemia (especially with quinine)
- Acidosis (lactate >5 mmol/L)
- Parasitemia >5%
- DIC, hemoglobinuria ("blackwater fever")

**Diagnosis:**
- Thick blood smear: Screening (high sensitivity)
- Thin blood smear: Species identification, parasitemia quantification
- Rapid diagnostic test (RDT): Detects HRP2 (P. falciparum) or pLDH (pan-Plasmodium); point-of-care
- PCR: Most sensitive; useful for mixed infections and low parasitemia

**Treatment:**

| Scenario | Treatment |
|----------|-----------|
| Uncomplicated P. falciparum | Artemisinin-based combination therapy (ACT): artemether-lumefantrine (Coartem) |
| Severe P. falciparum | IV artesunate (superior to IV quinine; AQUAMAT and SEAQUAMAT trials) |
| P. vivax/ovale (acute) | Chloroquine (still effective) + primaquine (14 days for hypnozoites) |
| P. vivax/ovale (anti-relapse) | Primaquine 14 days or tafenoquine (single dose); check G6PD first |

**Prevention:**
- Chemoprophylaxis: Atovaquone-proguanil, doxycycline, or mefloquine
- Vector control: Insecticide-treated nets (ITNs), indoor residual spraying (IRS)
- RTS,S/AS01 (Mosquirix): First malaria vaccine; 30-40% efficacy; WHO-recommended for children
- R21/Matrix-M: Next-generation vaccine; 75% efficacy in trials; WHO-recommended 2023`,
      keyTerms: [
        { term: 'Artemisinin-based combination therapy (ACT)', definition: 'The standard treatment for uncomplicated falciparum malaria combining a fast-acting artemisinin derivative with a longer-acting partner drug' },
        { term: 'Hypnozoite', definition: 'A dormant liver stage of P. vivax and P. ovale that can reactivate months to years later, causing relapse' },
        { term: 'Cerebral malaria', definition: 'The most severe complication of P. falciparum; parasitized RBCs stick to brain blood vessels causing coma and death' },
        { term: 'G6PD deficiency', definition: 'A genetic enzyme deficiency that causes hemolytic anemia when exposed to primaquine; must be tested before prescribing' },
        { term: 'Thick and thin blood smear', definition: 'The gold standard diagnostic test for malaria; thick smear for screening, thin smear for species identification' },
        { term: 'RTS,S (Mosquirix)', definition: 'The first WHO-recommended malaria vaccine, targeting the circumsporozoite protein on the parasite surface' },
      ],
      examples: [
        'A febrile traveler returning from Nigeria has a thick smear showing P. falciparum with 3% parasitemia; treated with artemether-lumefantrine.',
        'A patient from India with P. vivax malaria is treated with chloroquine and then primaquine after confirming normal G6PD levels to prevent relapse.',
      ],
      patientCounselingPoints: [
        'Take all antimalarial pills as directed, even after you feel better.',
        'Primaquine must not be taken if you have G6PD deficiency - get tested first.',
        'Return to the doctor if fever recurs after treatment (may indicate relapse or resistance).',
      ],
    },
    3: {
      level: 3,
      summary: 'Malaria pathogenesis involves P. falciparum cytoadherence via PfEMP1 to endothelial receptors (ICAM-1, EPCR), rosetting, and sequestration causing microvascular obstruction; host immunity develops slowly through antibody-mediated mechanisms targeting merozoite surface proteins and variant surface antigens.',
      explanation: `Understanding the molecular pathogenesis, host-parasite interactions, and pharmacology of antimalarials is essential for comprehensive malaria management.

**Molecular Pathogenesis of P. falciparum:**

*Cytoadherence and Sequestration:*
- PfEMP1 (P. falciparum Erythrocyte Membrane Protein 1): Variant surface antigen displayed on infected RBC surface
  - Encoded by ~60 var genes per genome; antigenic variation through switching
  - Binds endothelial receptors: ICAM-1 (brain), EPCR (brain - cerebral malaria), CD36 (widespread), CSA (placenta - pregnancy malaria)
- Sequestration: Infected RBCs adhere to capillary endothelium in deep tissues; avoids splenic clearance
  - Explains why late-stage parasites not seen on peripheral smear in falciparum (only ring forms)
- Rosetting: Infected RBCs bind uninfected RBCs forming clusters; impairs microcirculation
- Knobs: Electron-dense protrusions on infected RBC surface containing PfEMP1; mediate cytoadherence

*Cerebral Malaria Pathophysiology:*
- PfEMP1 (DC8 and DC13 variants) binding to EPCR disrupts protein C pathway -> endothelial activation and barrier breakdown
- Microvascular obstruction from sequestered parasitized RBCs
- Blood-brain barrier disruption -> cerebral edema
- Ring hemorrhages around occluded vessels (pathognomonic on retinal examination and autopsy)
- Inflammatory cytokines: TNF-alpha, IFN-gamma amplify endothelial injury

*Severe Malarial Anemia:*
- Direct RBC destruction by parasite egress
- Bystander destruction: Complement and antibody deposition on uninfected RBCs
- Dyserythropoiesis: Parasite products suppress bone marrow erythropoiesis
- Splenic sequestration and phagocytosis

**Host Immunity:**
- Naturally acquired immunity: Develops slowly over years of repeated exposure; non-sterilizing
- Antibodies: Anti-merozoite (MSP1, AMA1); anti-PfEMP1 (variant-specific, accumulate over years); anti-gametocyte (transmission-blocking)
- Sickle cell trait (HbAS): 60-90% reduction in severe malaria; balanced selection
- Other protective polymorphisms: HbC, alpha-thalassemia, Duffy-negative (P. vivax resistance), G6PD deficiency (partial protection)
- Blood group O: Reduced rosetting compared to groups A and B

**Antimalarial Pharmacology:**

*Artemisinin Derivatives:*
- Mechanism: Endoperoxide bridge activated by heme iron in parasite food vacuole; generates free radicals; also targets PfKelch13 (artemisinin resistance marker)
- Fastest parasite clearance of any antimalarial
- Short half-life: Requires partner drug in ACT
- ACTs: Artemether-lumefantrine (AL), artesunate-amodiaquine, artesunate-mefloquine, DHA-piperaquine

*Anti-relapse Therapy:*
- Primaquine: 8-aminoquinoline; kills hypnozoites and gametocytes; causes hemolysis in G6PD deficiency via oxidative damage to RBCs
- Tafenoquine: Long-acting 8-aminoquinoline; single-dose anti-relapse (vs. 14 days primaquine); also requires G6PD testing
- Mechanism: Likely generation of reactive metabolites toxic to hypnozoites; exact mechanism unclear

*Resistance:*
- Chloroquine resistance (P. falciparum): PfCRT (chloroquine resistance transporter) mutations; widespread in Africa, Asia
- Artemisinin partial resistance: PfKelch13 propeller mutations (C580Y most common); prolonged parasite clearance; Greater Mekong Subregion; emerging in Africa (Rwanda, Uganda)
- Partner drug resistance: Piperaquine resistance (plasmepsin 2/3 amplification) in Southeast Asia
- ACT therapeutic failures: Artemisinin resistance + partner drug resistance = treatment failure in parts of Cambodia, Myanmar`,
      keyTerms: [
        { term: 'PfEMP1', definition: 'P. falciparum Erythrocyte Membrane Protein 1; the major variant surface antigen mediating cytoadherence of infected RBCs to endothelial receptors' },
        { term: 'Sequestration', definition: 'The adherence of P. falciparum-infected RBCs to capillary endothelium in deep tissues, causing microvascular obstruction and avoiding splenic clearance' },
        { term: 'PfKelch13', definition: 'A P. falciparum gene whose propeller domain mutations (e.g., C580Y) are the molecular marker for artemisinin partial resistance' },
        { term: 'EPCR', definition: 'Endothelial Protein C Receptor; a key receptor for PfEMP1 binding in cerebral malaria that disrupts the anticoagulant protein C pathway' },
        { term: 'Antigenic variation', definition: 'The switching between different var gene-encoded PfEMP1 variants that allows P. falciparum to evade antibody responses' },
      ],
      clinicalNotes: 'Artemisinin partial resistance is an evolving global threat; monitoring parasite clearance time and PfKelch13 mutations is essential. Sequestration explains why peripheral parasitemia underestimates true body burden in falciparum malaria. G6PD testing is mandatory before primaquine or tafenoquine. Pregnancy malaria (placental sequestration via CSA binding) requires specific management with quinine + clindamycin (first trimester) or ACT (second/third trimester). IV artesunate is definitively superior to IV quinine for severe malaria.',
    },
    4: {
      level: 4,
      summary: 'Advanced malariology encompasses artemisinin resistance molecular epidemiology, triple ACT strategies, the RTS,S and R21 vaccine immunology (anti-CSP antibodies from hepatocyte-stage targeting), genetically modified mosquitoes and gene drives, and mass drug administration strategies for elimination.',
      explanation: `Graduate-level understanding integrates molecular resistance, vaccine science, vector control innovation, and elimination strategies.

**Artemisinin Resistance:**
- PfKelch13 validated mutations: C580Y (most prevalent), R539T, I543T, R561H (Africa)
- Mechanism: Mutations enhance parasite stress response (PI3K upregulation); slow ring-stage growth reduces artemisinin exposure
- Geographic spread: Originally Greater Mekong Subregion; now independently emerging in Africa (Rwanda, Uganda, Eritrea)
- Clinical impact: Delayed parasite clearance (Day 3 parasitemia >0); ACT failure when combined with partner drug resistance
- Surveillance: pfkelch13 molecular markers; day 3 parasitemia monitoring; therapeutic efficacy studies (WHO protocol)
- Triple ACT: Adding a third drug (e.g., artemether-lumefantrine + amodiaquine) to overcome partial resistance; clinical trials ongoing (TACT trial)

**Vaccine Immunology:**

*RTS,S/AS01 (Mosquirix):*
- Antigen: Circumsporozoite protein (CSP) - covers sporozoite surface; essential for hepatocyte invasion
- RTS,S: CSP central repeat + C-terminal region fused to hepatitis B surface antigen
- Adjuvant: AS01 (MPL + QS-21 in liposomes); generates strong antibody and CD4+ T cell responses
- Efficacy: ~30% against clinical malaria, ~40% against severe malaria over 4 years (with booster)
- Mechanism: Anti-CSP antibodies neutralize sporozoites before hepatocyte invasion
- Limitation: Efficacy wanes rapidly; booster doses partially restore

*R21/Matrix-M:*
- Next-generation CSP vaccine: Higher proportion of CSP antigen (vs. excess HBsAg in RTS,S)
- Matrix-M adjuvant (saponin-based): Potent humoral and cellular immunity
- Phase 3: 75% efficacy against clinical malaria in seasonal settings (Burkina Faso trial)
- WHO-recommended (2023): Broader deployment expected
- Higher anti-CSP antibody titers correlate with protection

*PfSPZ Vaccine (Sanaria):*
- Radiation-attenuated whole sporozoites administered IV
- Achieves sterile protection in some trials (no blood-stage infection)
- Limitations: IV administration, cold chain, variable efficacy in endemic settings
- PfSPZ-CVac: Chemoattenuated (with chloroquine); allows liver-stage development but prevents blood-stage

**Innovative Vector Control:**

*Genetically Modified Mosquitoes:*
- Sterile insect technique (SIT): Release sterile males to suppress population
- Gene drive: Self-propagating genetic element that spreads through mosquito population
  - Population suppression drives: Reduce female fertility or survival
  - Population replacement drives: Make mosquitoes refractory to Plasmodium
  - CRISPR-Cas9 gene drives: Most advanced platform
  - Target Malaria consortium: Leading gene drive research in Africa
- Ethical and regulatory considerations: Environmental impact, gene drive containment, community consent

*Next-Generation Insecticides:*
- Chlorfenapyr (dual-active ITNs): Effective against pyrethroid-resistant mosquitoes
- New-generation ITNs (PBO nets, dual-active): WHO-recommended for areas with insecticide resistance
- Attractive targeted sugar baits (ATSB): Insecticide in sugar bait stations; targets outdoor-biting mosquitoes
- Spatial repellents: Transfluthrin emanators; reduce indoor mosquito biting

**Elimination Strategies:**
- Mass drug administration (MDA): Treat entire population in defined area regardless of infection status
  - ACT + primaquine (single low-dose for gametocyte clearance)
  - Effective in low-transmission settings; ethical and logistical challenges
- Seasonal malaria chemoprevention (SMC): Monthly SP + amodiaquine during rainy season for children 3-59 months in Sahel
- Reactive case detection: Test and treat household contacts of confirmed cases
- Elimination milestones: China (certified 2021), El Salvador (2021); 44 countries now malaria-free`,
      keyTerms: [
        { term: 'Gene drive', definition: 'A self-propagating genetic element designed to spread through mosquito populations, potentially suppressing vectors or making them resistant to malaria parasites' },
        { term: 'Triple ACT', definition: 'A strategy adding a third antimalarial drug to standard ACT to overcome artemisinin partial resistance' },
        { term: 'R21/Matrix-M', definition: 'A next-generation malaria vaccine showing 75% efficacy, WHO-recommended in 2023, using enhanced CSP antigen presentation with Matrix-M adjuvant' },
        { term: 'Circumsporozoite protein (CSP)', definition: 'The major surface protein of Plasmodium sporozoites and the target antigen for RTS,S and R21 malaria vaccines' },
        { term: 'Mass drug administration', definition: 'The strategy of treating an entire population with antimalarials regardless of individual infection status to rapidly reduce transmission' },
      ],
      clinicalNotes: 'Artemisinin resistance emergence in Africa is a critical global health concern requiring enhanced molecular surveillance. Triple ACT strategies are under evaluation as a response. R21/Matrix-M vaccine deployment alongside RTS,S will substantially increase global malaria vaccine coverage. Gene drive technology offers transformative potential but requires careful ethical and environmental assessment. Elimination requires integrated strategies combining vaccines, vector control, MDA, and surveillance.',
    },
    5: {
      level: 5,
      summary: 'Expert malariology integrates systems biology approaches to parasite-host interactions, next-generation drug development targeting novel parasite biology, monoclonal antibody prophylaxis, the economics of malaria elimination, and leadership in the global malaria eradication agenda.',
      explanation: `Expert-level knowledge encompasses the translational pipeline, global strategy, and scientific frontiers.

**Next-Generation Antimalarials:**

*Novel Targets and Drug Candidates:*
- **KAF156/Ganaplacide**: Targets PfCARL (cyclic amine resistance locus); pan-lifecycle activity (active against liver, blood, and transmission stages)
- **DSM265**: Dihydroorotate dehydrogenase (DHODH) inhibitor; long half-life enabling single-dose cure; chemoprotection potential
- **Cipargamin (KAE609)**: PfATP4 inhibitor (sodium/proton antiporter); rapid parasite clearance comparable to artemisinins; novel MOA
- **MMV048**: PI4K inhibitor; pan-lifecycle activity; oral, long-acting
- **Cabamiquine (M5717)**: PfeEF2 inhibitor (elongation factor 2; protein synthesis); ultra-long half-life; potential for chemoprevention and single-dose cure
- **Atoguanil (atovaquone-proguanil replacement candidates)**: Improved cytochrome bc1 inhibitors

*Monoclonal Antibodies for Prevention:*
- **CIS43LS**: Anti-CSP monoclonal antibody with Fc modifications for extended half-life; 88% efficacy over 24 weeks in Mali trial (VRC 612)
- **L9LS**: Next-generation anti-CSP mAb; higher potency; Phase 2 trials
- Advantages: Single injection, predictable pharmacokinetics, no adherence issues, no drug resistance
- Limitations: Cost, cold chain, need for repeated dosing, scalability

**Systems Biology:**
- Single-cell transcriptomics of Plasmodium during blood-stage development
- Metabolomics of infected RBCs: Identifying parasite-specific metabolic dependencies
- Structural biology: Cryo-EM structures of merozoite invasion machinery (RH5-CyRPA-RIPR complex) informing vaccine design
- Host-parasite protein-protein interaction maps
- CRISPR-Cas9 functional genomics: Systematic gene knockout screens identifying essential parasite genes

**RH5-Based Blood-Stage Vaccines:**
- RH5 (Reticulocyte-binding Homolog 5): Essential for merozoite invasion of RBCs via basigin receptor
- Unlike other merozoite antigens, RH5 is relatively conserved (less polymorphic)
- Phase 1/2 trials: Anti-RH5 antibodies show growth inhibition activity
- RH5.1/Matrix-M: Under clinical development
- Multi-stage vaccine strategy: CSP (pre-erythrocytic) + RH5 (blood-stage) + Pfs25/Pfs48/45 (transmission-blocking)

**Transmission-Blocking Strategies:**
- Transmission-blocking vaccines (TBVs): Target sexual-stage antigens (Pfs25, Pfs48/45, Pfs230)
  - "Altruistic vaccines": Protect community, not individual
  - Community-level efficacy modeling
- Endectocides: Ivermectin (kills mosquitoes feeding on treated humans); community-wide treatment under investigation (RIMDAMAL trial)
- Gametocyte-clearing drugs: Single low-dose primaquine + ACT; tafenoquine

**Economics of Malaria Elimination:**
- Global malaria funding: ~$4.1 billion/year; need: $6.8 billion/year (WHO estimate)
- Cost-effectiveness: R21 vaccine ~$3-5 per DALY averted; seasonal chemoprevention ~$50 per DALY averted
- Economic return: Every $1 invested in malaria yields $36 in economic returns (WHO)
- Last-mile challenge: Elimination costs per case increase exponentially as transmission decreases
- Sustaining elimination: Importation risk, resurgence potential, surveillance infrastructure maintenance

**Global Eradication Agenda:**
- WHO Global Technical Strategy for Malaria 2016-2030: Targets 90% reduction in incidence and mortality
- Malaria Eradication Research Agenda (malERA): Updated priorities for tools needed
- Zero Malaria Starts with Me: Pan-African grassroots movement
- Regional elimination targets: E-2025 initiative (25 countries aiming for elimination by 2025)
- Challenges: Artemisinin resistance in Africa, insecticide resistance, funding gaps, COVID-19 disruptions, climate change expanding transmission areas
- Enablers: R21 vaccine, monoclonal antibodies, gene drives, novel antimalarials, improved surveillance

**Expert Clinical Considerations:**
- Severe malaria management: IV artesunate minimum 24 hours; exchange transfusion controversial but considered for parasitemia >10% with organ dysfunction
- Post-artesunate delayed hemolysis (PADH): Hemolysis 7-21 days after IV artesunate; monitor hemoglobin post-treatment
- Drug interactions: Lumefantrine QTc prolongation; mefloquine neuropsychiatric effects
- Resistance monitoring: Day 3 parasitemia, pfkelch13, plasmepsin 2/3 (piperaquine resistance), pfmdr1 (lumefantrine susceptibility)
- Congenital malaria: Vertical transmission; consider in febrile neonates born to mothers from endemic areas`,
      keyTerms: [
        { term: 'CIS43LS', definition: 'A long-acting anti-CSP monoclonal antibody showing 88% efficacy for malaria prevention over 24 weeks in a landmark clinical trial' },
        { term: 'PfATP4', definition: 'A P. falciparum sodium/proton antiporter that is the target of cipargamin, a novel antimalarial with rapid killing comparable to artemisinins' },
        { term: 'RH5', definition: 'Reticulocyte-binding Homolog 5; a relatively conserved merozoite surface protein essential for RBC invasion, representing a promising blood-stage vaccine target' },
        { term: 'Transmission-blocking vaccine', definition: 'A vaccine targeting sexual-stage parasite antigens that prevents mosquito infection, blocking onward transmission rather than protecting the vaccinated individual directly' },
        { term: 'Post-artesunate delayed hemolysis', definition: 'A recognized complication occurring 7-21 days after IV artesunate treatment, characterized by hemolysis of previously infected RBCs' },
      ],
      clinicalNotes: 'The ID/tropical medicine specialist must integrate cutting-edge antimalarial development with global elimination strategy. Key priorities: (1) Monitor artemisinin resistance spread in Africa with pfkelch13 surveillance. (2) Support R21/RTS,S vaccine deployment. (3) Understand the monoclonal antibody prevention pipeline (CIS43LS, L9LS) as potential game-changers for high-risk populations. (4) Anticipate novel antimalarials (cipargamin, ganaplacide, cabamiquine) entering clinical use. (5) Advocate for sustained global malaria funding. (6) Contribute to elimination efforts through improved surveillance and treatment adherence programs.',
    },
  },
  media: [],
  citations: [
    { id: 'who-world-malaria-report-2023', type: 'website', title: 'World Malaria Report 2023', source: 'World Health Organization', license: 'CC BY-NC-SA 3.0 IGO' },
    { id: 'white-nejm-malaria-2014', type: 'article', title: 'Malaria', authors: ['White NJ', 'Pukrittayakamee S', 'Hien TT', 'Faiz MA', 'Mokuolu OA', 'Dondorp AM'], source: 'The Lancet', license: 'Copyrighted' },
    { id: 'datoo-lancet-r21-2022', type: 'article', title: 'Efficacy and immunogenicity of R21/Matrix-M vaccine against clinical malaria', authors: ['Datoo MS', 'Natama HM', 'Some A'], source: 'The Lancet', license: 'Copyrighted' },
  ],
  crossReferences: [
    { targetId: 'infectious-disease-toxoplasmosis', targetType: 'condition', relationship: 'sibling', label: 'Toxoplasmosis' },
    { targetId: 'infectious-disease-helminth-infections', targetType: 'topic', relationship: 'sibling', label: 'Helminth Infections' },
    { targetId: 'infectious-disease-hiv-aids', targetType: 'condition', relationship: 'related', label: 'HIV/AIDS' },
  ],
  tags: {
    systems: ['infectious-disease', 'parasitology', 'global-health', 'hematology'],
    topics: ['malaria', 'parasitic-infections', 'tropical-medicine', 'antimalarials', 'vaccines'],
    keywords: ['Plasmodium', 'falciparum', 'vivax', 'artemisinin', 'ACT', 'RTS,S', 'R21', 'mosquito', 'cerebral malaria', 'PfEMP1', 'gene drive'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'pediatrics'] },
  },
  createdAt: '2026-01-30T00:00:00.000Z',
  updatedAt: '2026-01-30T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['SOMA Content Team'],
};
