import { EducationalContent } from '../types';

/**
 * Comprehensive Viral Infections Educational Content
 *
 * Covers major viral pathogens (HIV, influenza, hepatitis, herpesviruses,
 * respiratory viruses, emerging infections), antiviral mechanisms,
 * and vaccine platforms across all 5 complexity levels.
 */
export const VIRAL_INFECTIONS: EducationalContent = {
  id: 'infectious-disease-viral-infections-comprehensive',
  type: 'topic',
  name: 'Viral Infections and Antiviral Therapy',
  nameEs: 'Infecciones Virales y Terapia Antiviral',
  alternateNames: [
    'Virology',
    'Antiviral Therapy',
    'Viral Pathogens',
    'Vaccine-Preventable Diseases',
  ],
  levels: {
    1: {
      level: 1,
      summary:
        'Viruses are tiny germs even smaller than bacteria that hijack your cells to make copies of themselves, and we fight them with antiviral medicines and vaccines that teach your body to recognize the virus.',
      explanation: `Viruses are the smallest germs that can make you sick. They are so tiny that you need a super-powerful microscope to see them. Unlike bacteria, viruses cannot live or multiply on their own - they need to get inside your cells to make copies of themselves.

**How Viruses Work:**
Think of a virus like a tiny pirate that boards your cells (the ships). Once inside, the pirate takes over the ship's controls and forces it to make more pirates. Eventually, so many pirates are made that the ship breaks apart, releasing them to attack more ships.

**Common Viral Infections:**
- **Cold and flu**: Caused by different viruses; the flu is more serious
- **COVID-19**: Caused by the SARS-CoV-2 coronavirus
- **Stomach flu** (norovirus): Causes vomiting and diarrhea
- **Chicken pox and shingles**: Caused by the varicella-zoster virus
- **Cold sores**: Caused by herpes simplex virus
- **Mono** ("the kissing disease"): Caused by Epstein-Barr virus
- **HIV**: Attacks the immune system (covered in detail separately)
- **Hepatitis**: Viruses that attack the liver

**How We Fight Viruses:**

*Antiviral Medicines:*
Unlike antibiotics (which fight bacteria), antiviral medicines help fight viral infections. They work by:
- Stopping the virus from entering your cells
- Preventing the virus from making copies of itself
- Helping your immune system find and destroy infected cells

*Vaccines - Training Your Immune System:*
Vaccines are like training exercises for your immune system:
- They show your immune system what a virus looks like (without making you sick)
- Your body makes "memory soldiers" (antibodies) that remember the virus
- If the real virus ever attacks, your body is ready to fight it quickly
- Different types: shots, nasal sprays, and even newer mRNA vaccines

**Important Facts:**
- Antibiotics do NOT work against viruses
- Most viral infections get better on their own with rest and fluids
- Some viral infections can be prevented with vaccines
- Washing your hands is one of the best ways to prevent viral spread`,
      keyTerms: [
        {
          term: 'Virus',
          definition:
            'A tiny germ, even smaller than bacteria, that needs to get inside your cells to make copies of itself',
        },
        {
          term: 'Vaccine',
          definition:
            'A shot or medicine that teaches your immune system to recognize and fight a specific virus before you get sick',
        },
        {
          term: 'Antiviral',
          definition:
            'A medicine that fights viral infections by stopping viruses from copying themselves',
        },
        {
          term: 'Antibodies',
          definition:
            'Special proteins made by your immune system that recognize and attack specific germs',
        },
        {
          term: 'Contagious',
          definition:
            'Able to spread from one person to another',
        },
      ],
      analogies: [
        'A virus is like a pirate that hijacks your cells and forces them to make more pirates.',
        'Vaccines are like wanted posters - they show your immune system what a virus looks like so it can be caught quickly.',
        'Your immune system after a vaccine is like a guard who has memorized a criminal\'s face.',
      ],
      examples: [
        'Getting a flu shot every year helps protect you from influenza.',
        'COVID-19 vaccines helped people develop protection against the SARS-CoV-2 virus.',
        'Chicken pox vaccine prevents the itchy rash that children used to commonly get.',
      ],
      patientCounselingPoints: [
        'Rest and drink plenty of fluids when you have a viral infection.',
        'Do not ask for antibiotics for a cold or flu - they will not help.',
        'Cover your cough and sneeze into your elbow to prevent spreading viruses.',
        'Stay up to date on recommended vaccines for your age.',
      ],
    },
    2: {
      level: 2,
      summary:
        'Viruses are obligate intracellular parasites classified by their genome type, and major human viral pathogens include influenza, HIV, hepatitis viruses, herpesviruses, and respiratory viruses, each with distinct transmission, clinical features, and available treatments or vaccines.',
      explanation: `Viruses are obligate intracellular parasites, meaning they can only replicate inside living cells. They consist of genetic material (DNA or RNA) surrounded by a protein coat (capsid), and some have an outer lipid envelope.

**Virus Classification:**

*By Genetic Material:*
- **DNA viruses**: Herpesviruses, adenoviruses, HPV, hepatitis B
- **RNA viruses**: Influenza, HIV, hepatitis C, coronaviruses, measles
- **Retroviruses**: RNA viruses that convert their RNA to DNA (HIV)

*By Structure:*
- **Enveloped**: Have a lipid membrane (flu, HIV, coronaviruses) - more fragile, killed by soap and alcohol
- **Non-enveloped (naked)**: No lipid membrane (norovirus, adenovirus) - more resistant to disinfection

**Major Viral Pathogens:**

*Influenza:*
- Types A, B, C (A and B cause seasonal illness)
- Antigenic drift: Small mutations causing seasonal variation
- Antigenic shift: Major changes (type A only) causing pandemics
- Treatment: Oseltamivir (Tamiflu) within 48 hours of symptoms
- Prevention: Annual flu vaccine (updated each year)

*Hepatitis Viruses:*

| Virus | Transmission | Chronic? | Vaccine? | Treatment |
|-------|-------------|----------|----------|-----------|
| Hep A | Fecal-oral (food/water) | No | Yes | Supportive |
| Hep B | Blood, sexual, perinatal | Yes (5-10% adults) | Yes | Antivirals |
| Hep C | Blood (IV drugs, transfusion) | Yes (75-85%) | No | Curative DAAs |
| Hep D | Blood (requires Hep B) | Yes | Hep B vaccine | Limited |
| Hep E | Fecal-oral (water) | Rare | Limited | Supportive |

*Herpesviruses:*

| Virus | Name | Key Disease |
|-------|------|-------------|
| HHV-1 | HSV-1 | Oral herpes (cold sores) |
| HHV-2 | HSV-2 | Genital herpes |
| HHV-3 | Varicella-zoster (VZV) | Chicken pox, shingles |
| HHV-4 | Epstein-Barr (EBV) | Mononucleosis; linked to cancers |
| HHV-5 | Cytomegalovirus (CMV) | Congenital infection, disease in immunocompromised |
| HHV-6 | Roseolovirus | Roseola (sixth disease) in children |
| HHV-8 | KSHV | Kaposi sarcoma |

Key feature: All herpesviruses establish lifelong latency and can reactivate.

*Respiratory Viruses:*
- **SARS-CoV-2**: COVID-19; multiple variants; mRNA and other vaccines available
- **RSV**: Leading cause of bronchiolitis in infants; monoclonal antibody (nirsevimab) and maternal vaccine now available
- **Rhinovirus**: Most common cause of the common cold
- **Adenovirus**: Upper respiratory infections, conjunctivitis
- **Parainfluenza**: Croup in children

*HIV:*
- Retrovirus targeting CD4+ T cells
- Treated with antiretroviral therapy (ART)
- Prevention: PrEP, condoms, U=U (covered in detail separately)

**Antiviral Drug Classes:**
- **Neuraminidase inhibitors**: Block influenza release (oseltamivir)
- **Nucleos(t)ide analogues**: Block viral DNA/RNA replication (acyclovir, tenofovir, sofosbuvir)
- **Protease inhibitors**: Block viral protein processing (HIV PIs, HCV PIs)
- **Integrase inhibitors**: Prevent HIV DNA integration (dolutegravir)

**Vaccine Types:**
- **Live attenuated**: Weakened virus (MMR, varicella, nasal flu)
- **Inactivated**: Killed virus (flu shot, hepatitis A, polio IPV)
- **Subunit/recombinant**: Viral protein pieces (hepatitis B, HPV, shingrix)
- **mRNA**: Genetic instructions for spike protein (COVID-19 Pfizer/Moderna)
- **Viral vector**: Harmless virus delivers antigen gene (COVID-19 J&J, Ebola)`,
      keyTerms: [
        {
          term: 'Obligate intracellular parasite',
          definition:
            'An organism that can only reproduce inside a living host cell; all viruses are obligate intracellular parasites',
        },
        {
          term: 'Antigenic drift',
          definition:
            'Small, gradual mutations in viral surface proteins that occur over time, requiring annual flu vaccine updates',
        },
        {
          term: 'Antigenic shift',
          definition:
            'A major, sudden change in influenza A surface proteins through genetic reassortment, potentially causing pandemics',
        },
        {
          term: 'Latency',
          definition:
            'A state where a virus remains dormant inside cells without actively replicating; characteristic of all herpesviruses',
        },
        {
          term: 'Direct-acting antiviral (DAA)',
          definition:
            'A drug that directly targets a specific step in viral replication; DAAs can cure hepatitis C in 8-12 weeks',
        },
        {
          term: 'mRNA vaccine',
          definition:
            'A vaccine that uses messenger RNA to instruct cells to make a viral protein, training the immune system without using any live virus',
        },
      ],
      examples: [
        'A patient with flu symptoms within 48 hours can benefit from oseltamivir (Tamiflu).',
        'Hepatitis C, once a chronic lifelong infection, can now be cured with 8-12 weeks of DAA therapy.',
        'The shingles vaccine (Shingrix) is recommended for adults over 50 to prevent VZV reactivation.',
      ],
      patientCounselingPoints: [
        'The flu vaccine cannot give you the flu - it uses inactivated or partial virus components.',
        'Hepatitis C is now curable with antiviral pills taken for 8-12 weeks.',
        'If you get shingles, starting antiviral treatment within 72 hours reduces severity.',
      ],
    },
    3: {
      level: 3,
      summary:
        'Viral replication cycles follow distinct strategies based on genome type (Baltimore classification), antiviral agents target specific steps in these cycles, and modern vaccine platforms including mRNA, viral vector, and protein subunit technologies elicit protective immunity through distinct immunological mechanisms.',
      explanation: `Understanding viral pathogenesis, antiviral pharmacology, and vaccinology requires knowledge of viral replication strategies, host-virus interactions, and immune responses.

**Viral Replication Cycles:**

*Baltimore Classification (by replication strategy):*
- **Class I (dsDNA)**: Herpesviruses, adenoviruses, poxviruses. Replicate in nucleus using host machinery.
- **Class II (ssDNA)**: Parvoviruses. Require conversion to dsDNA before transcription.
- **Class III (dsRNA)**: Reoviruses (rotavirus). Carry own RNA-dependent RNA polymerase (RdRp).
- **Class IV (+ssRNA)**: Coronaviruses, flaviviruses (HCV, Zika, dengue), picornaviruses. Genome directly acts as mRNA.
- **Class V (-ssRNA)**: Influenza (segmented), Ebola, measles. Must first transcribe to +sense mRNA.
- **Class VI (ssRNA-RT)**: Retroviruses (HIV). RNA reverse-transcribed to DNA, integrated into host genome.
- **Class VII (dsDNA-RT)**: Hepadnaviruses (HBV). DNA genome replicates through RNA intermediate.

*General Replication Steps:*
1. **Attachment**: Viral surface proteins bind host cell receptors (e.g., SARS-CoV-2 spike binds ACE2; HIV gp120 binds CD4 + CCR5/CXCR4)
2. **Entry**: Membrane fusion (enveloped) or endocytosis (non-enveloped)
3. **Uncoating**: Release of viral genome from capsid
4. **Replication**: Genome copying (strategy depends on Baltimore class)
5. **Translation**: Production of viral proteins using host ribosomes
6. **Assembly**: New viral particles assembled
7. **Release**: Budding (enveloped; acquire lipid membrane) or cell lysis (non-enveloped)

**Antiviral Mechanisms by Target:**

*Entry/Fusion Inhibitors:*
- Maraviroc: CCR5 antagonist (HIV)
- Enfuvirtide: gp41 fusion inhibitor (HIV)
- Palivizumab/nirsevimab: Anti-RSV monoclonal antibodies (block F protein)

*Nucleos(t)ide Analogues (chain terminators/polymerase inhibitors):*
- **Acyclovir/valacyclovir**: Guanosine analogue; activated by viral thymidine kinase (HSV/VZV selective toxicity); inhibits viral DNA polymerase
- **Ganciclovir/valganciclovir**: For CMV; phosphorylated by UL97 kinase
- **Tenofovir/emtricitabine**: HIV and HBV reverse transcriptase inhibitors
- **Sofosbuvir**: HCV NS5B polymerase inhibitor; backbone of curative DAA regimens
- **Remdesivir**: Adenosine analogue; broad-spectrum RdRp inhibitor (SARS-CoV-2, Ebola)
- **Molnupiravir**: Induces lethal mutagenesis of viral RNA (SARS-CoV-2)

*Protease Inhibitors:*
- HIV: Darunavir, atazanavir (cleave Gag-Pol polyprotein)
- HCV: Glecaprevir, voxilaprevir (NS3/4A protease)
- SARS-CoV-2: Nirmatrelvir (3CL protease); given with ritonavir (Paxlovid)

*Neuraminidase Inhibitors (influenza):*
- Oseltamivir, zanamivir: Block neuraminidase, preventing virion release from infected cells
- Baloxavir marboxil: Cap-dependent endonuclease inhibitor (novel MOA); single-dose treatment

*Integrase Inhibitors (HIV):*
- Dolutegravir, bictegravir, cabotegravir: Block integration of proviral DNA

*NS5A Inhibitors (HCV):*
- Ledipasvir, velpatasvir, pibrentasvir: Disrupt HCV replication complex and virion assembly
- Combined with NS5B and/or NS3 inhibitors for pan-genotypic cure

**Vaccine Immunology and Platforms:**

*Immune Response to Vaccination:*
- **Innate response**: Pattern recognition receptors (PRRs) detect vaccine antigens/adjuvants
- **Adaptive humoral response**: B cells produce neutralizing antibodies targeting viral surface proteins
- **Adaptive cellular response**: CD8+ cytotoxic T cells kill virus-infected cells; CD4+ T helper cells coordinate response
- **Immunological memory**: Long-lived plasma cells and memory B/T cells provide durable protection
- **Correlates of protection**: Neutralizing antibody titers (most vaccines); T cell responses (some)

*Vaccine Platforms:*

| Platform | Mechanism | Advantages | Limitations | Examples |
|----------|-----------|------------|-------------|---------|
| Live attenuated | Weakened virus replicates | Strong, durable immunity; broad response | Contraindicated in immunocompromised | MMR, varicella, yellow fever |
| Inactivated | Killed whole virus | Safe in immunocompromised | Weaker response; may need boosters | Flu (IM), polio (IPV), hepatitis A |
| Protein subunit | Purified viral proteins | Very safe; well-established | Requires adjuvant; narrower response | Hepatitis B, HPV, Shingrix |
| mRNA | Lipid nanoparticle delivers mRNA | Rapid development; strong humoral + cellular | Cold chain requirements; reactogenicity | COVID-19 (Pfizer, Moderna) |
| Viral vector | Harmless virus delivers antigen gene | Strong cellular immunity | Pre-existing immunity to vector; rare side effects | COVID-19 (J&J, AstraZeneca), Ebola |
| Conjugate | Polysaccharide linked to protein carrier | Effective in young children | More complex manufacturing | Pneumococcal (PCV), meningococcal |

*Adjuvants:*
- Aluminum salts (alum): Most common; enhance antibody responses
- AS01B (Shingrix): Monophosphoryl lipid A + QS-21; strong T cell response
- AS04 (Cervarix): MPL + alum
- MF59 (Fluad): Oil-in-water emulsion for enhanced flu response in elderly
- CpG 1018 (Heplisav-B): TLR9 agonist; strong HBV antibody response`,
      keyTerms: [
        {
          term: 'Baltimore classification',
          definition:
            'A system that classifies viruses into seven groups based on genome type and replication strategy',
        },
        {
          term: 'RNA-dependent RNA polymerase (RdRp)',
          definition:
            'An enzyme that synthesizes RNA from an RNA template; found in RNA viruses but not in human cells, making it an antiviral target',
        },
        {
          term: 'Reverse transcriptase',
          definition:
            'A viral enzyme that synthesizes DNA from an RNA template; unique to retroviruses (HIV) and hepadnaviruses (HBV)',
        },
        {
          term: 'Neuraminidase',
          definition:
            'An influenza surface enzyme that cleaves sialic acid, enabling release of new virions from infected cells; target of oseltamivir',
        },
        {
          term: 'Lipid nanoparticle (LNP)',
          definition:
            'A tiny fat-based delivery vehicle used to protect and deliver mRNA in mRNA vaccines',
        },
        {
          term: 'Neutralizing antibody',
          definition:
            'An antibody that binds a virus and directly prevents it from infecting cells; the primary correlate of protection for most vaccines',
        },
        {
          term: 'Adjuvant',
          definition:
            'A substance added to a vaccine to enhance the immune response to the antigen',
        },
      ],
      clinicalNotes:
        'Antiviral timing is critical: oseltamivir within 48 hours for influenza, acyclovir within 72 hours for shingles, and PEP within 72 hours for HIV. HCV is now curable with 8-12 weeks of pan-genotypic DAA therapy (e.g., sofosbuvir/velpatasvir). Vaccine platform selection impacts immune response profile: mRNA and viral vector platforms generate stronger cellular immunity compared to inactivated or protein subunit vaccines, which is relevant for pathogens where T cell responses are important.',
    },
    4: {
      level: 4,
      summary:
        'Advanced virology integrates detailed understanding of viral immune evasion mechanisms, drug resistance mutations, host-directed therapies, emerging viral threats with pandemic potential, and the immunological basis for vaccine durability including germinal center responses and hybrid immunity.',
      explanation: `Graduate-level virology requires integration of molecular virology, immunology, pharmacology, and emerging infectious disease epidemiology.

**Viral Immune Evasion Mechanisms:**

*Interferon Antagonism:*
- Influenza NS1: Inhibits RIG-I sensing and IFN-beta production
- SARS-CoV-2 ORF6: Blocks STAT1 nuclear translocation
- HCV NS3/4A: Cleaves MAVS, disrupting RIG-I signaling
- HSV ICP34.5: Reverses PKR-mediated translational shutoff
- HIV Vpu: Downregulates BST-2/tetherin (restriction factor preventing virion release)

*MHC Downregulation:*
- HIV Nef: Downregulates MHC-I, preventing CD8+ T cell recognition
- CMV US2, US3, US6, US11: Multiple mechanisms to prevent MHC-I antigen presentation
- Adenovirus E3-19K: Retains MHC-I in ER

*Antigenic Variation:*
- HIV: Extremely high mutation rate (error-prone RT); glycan shielding of envelope
- Influenza: Antigenic drift (point mutations in HA/NA) and shift (reassortment)
- SARS-CoV-2: Spike protein mutations affecting antibody binding (VOCs: Alpha, Delta, Omicron sublineages)
- HCV: Quasispecies diversity within individual patients

*Latency and Persistence:*
- HSV/VZV: Latency in sensory ganglia; LAT RNA inhibits apoptosis; reactivated by stress, immunosuppression
- EBV: Latency programs (type I-III) in B cells; EBNA-1 evades proteasomal degradation; associated with Burkitt lymphoma, nasopharyngeal carcinoma, PTLD
- CMV: Latency in CD34+ myeloid progenitors; reactivation during immunosuppression (transplant)
- HIV: Proviral latency in resting memory CD4+ T cells (discussed separately)
- HBV: cccDNA in hepatocyte nucleus persists despite functional cure (HBsAg loss)

**Antiviral Resistance:**

*HIV Drug Resistance:*
- K65R: Tenofovir resistance
- M184V: Lamivudine/emtricitabine resistance (but increases susceptibility to tenofovir and impairs viral fitness)
- K103N: NNRTI resistance (efavirenz)
- Integrase resistance: Relatively rare with dolutegravir/bictegravir (high genetic barrier)

*HCV Resistance:*
- NS5A resistance-associated substitutions (RASs): Particularly Y93H
- Baseline RAS testing recommended before certain regimens
- Most pan-genotypic regimens (sofosbuvir/velpatasvir) effective despite most RASs

*Influenza Resistance:*
- Oseltamivir: H275Y mutation in neuraminidase (common in previous H1N1)
- Baloxavir: PA I38T/M substitution (detected in some treated patients)
- Amantadine/rimantadine: Widespread resistance in circulating H3N2 and post-2009 H1N1 (no longer recommended)

*SARS-CoV-2 Resistance:*
- Nirmatrelvir: Emerging 3CL protease mutations under investigation
- Monoclonal antibody escape: Multiple spike mutations rendering mAbs ineffective (bebtelovimab, sotrovimab - EUA revoked for some variants)

**Emerging Viral Infections and Pandemic Preparedness:**

*Emerging Threats:*
- **Influenza H5N1 (avian influenza)**: High mortality in sporadic human cases; pandemic potential if sustained human-to-human transmission evolves
- **Nipah virus**: Paramyxovirus; fruit bats reservoir; encephalitis; 40-75% case fatality rate; no approved treatment/vaccine
- **Ebola/Marburg**: Filoviruses; severe hemorrhagic fever; rVSV-ZEBOV vaccine approved for Ebola
- **MERS-CoV**: Middle East respiratory syndrome; camel reservoir; ~35% case fatality rate
- **Mpox (monkeypox)**: Orthopoxvirus; 2022 global outbreak of clade IIb; smallpox vaccines (JYNNEOS) cross-protective
- **Arboviruses**: Dengue (expanding range with climate change), Zika (congenital syndrome), chikungunya

*Pandemic Preparedness:*
- WHO Pandemic Influenza Preparedness Framework
- 100 Days Mission: Coalition for Epidemic Preparedness Innovations (CEPI) goal for rapid vaccine development
- mRNA platform advantage: Sequence-to-prototype in days (COVID-19 proof of concept)
- Stockpiling of candidate pandemic vaccines
- Global genomic surveillance networks

**Vaccine Immunology - Advanced Concepts:**

*Germinal Center Response:*
- Tfh cells in germinal centers drive B cell affinity maturation
- Somatic hypermutation and selection produce high-affinity antibodies
- Long-lived plasma cells (bone marrow) provide durable antibody production
- Memory B cells enable rapid anamnestic response to re-exposure

*Hybrid Immunity:*
- Combination of infection-derived and vaccine-derived immunity
- Broader and more durable than either alone
- Greater breadth of neutralization against variants
- Informs booster strategy decisions

*Correlates of Protection:*
- Neutralizing antibody titers: Established for many vaccines (influenza, HBV, COVID-19)
- T cell responses: Important for CMV, TB (though not traditional vaccines), potentially SARS-CoV-2 variants
- Mucosal immunity: IgA at respiratory/GI mucosal surfaces; intranasal vaccine development
- Innate immune training: BCG-induced trained immunity (heterologous protection)

*Breakthrough Infection and Immune Imprinting:*
- Original antigenic sin / immune imprinting: Prior exposure biases response toward original strain
- Implications for variant-adapted booster design
- Bivalent and updated vaccine strategies to broaden immunity

**Host-Directed Therapies:**

*Immunomodulatory Approaches:*
- Dexamethasone: Reduces mortality in severe COVID-19 (RECOVERY trial)
- JAK inhibitors (baricitinib): Anti-inflammatory for severe COVID-19
- IL-6 inhibitors (tocilizumab): Benefit in severe COVID-19 with systemic inflammation
- Interferon therapy: Historical use in HBV, HCV; limited role currently
- Convalescent plasma: Variable evidence; largely supplanted by mAbs and antivirals`,
      keyTerms: [
        {
          term: 'Immune evasion',
          definition:
            'Strategies employed by viruses to avoid detection and destruction by the host immune system, including interferon antagonism, MHC downregulation, and antigenic variation',
        },
        {
          term: 'cccDNA',
          definition:
            'Covalently closed circular DNA; the persistent form of HBV genome in hepatocyte nuclei that is not eliminated by current antivirals, representing the key barrier to HBV cure',
        },
        {
          term: 'Resistance-associated substitution (RAS)',
          definition:
            'A viral mutation that confers reduced susceptibility to an antiviral drug',
        },
        {
          term: 'Germinal center',
          definition:
            'A specialized microstructure in lymphoid tissue where B cells undergo affinity maturation, producing progressively higher-affinity antibodies after vaccination or infection',
        },
        {
          term: 'Hybrid immunity',
          definition:
            'Enhanced immune protection resulting from the combination of prior infection and vaccination, generating broader and more durable responses',
        },
        {
          term: 'Immune imprinting',
          definition:
            'The tendency of the immune system to preferentially recall responses to previously encountered antigens, potentially limiting responses to new variants (also called original antigenic sin)',
        },
        {
          term: 'Trained immunity',
          definition:
            'Enhanced innate immune responses following prior stimulation (e.g., BCG vaccination), mediated by epigenetic reprogramming of innate immune cells',
        },
        {
          term: 'Pandemic preparedness',
          definition:
            'Coordinated global efforts to detect, prevent, and rapidly respond to emerging viral threats with pandemic potential',
        },
      ],
      clinicalNotes:
        'HIV resistance testing (genotypic) should be performed before initiating or switching ART. HCV RAS testing is recommended before retreatment of DAA failures. Influenza antiviral selection should consider circulating strain resistance patterns. For COVID-19, antiviral and immunomodulatory therapy selection depends on disease severity, timing, and variant-specific monoclonal antibody efficacy. Updated COVID-19 vaccine boosters should match circulating variants. Clinicians should remain alert to emerging viral threats and report unusual clinical presentations to public health authorities.',
    },
    5: {
      level: 5,
      summary:
        'Expert virology encompasses next-generation antiviral strategies (broadly neutralizing antibodies, therapeutic vaccines, RNAi/antisense), universal vaccine design, pan-coronavirus preparedness, functional cure strategies for persistent viruses, and the integration of advanced diagnostics with public health surveillance.',
      explanation: `Mastery of clinical virology requires knowledge of cutting-edge therapeutics, novel vaccine approaches, and the translational pipeline from bench to bedside.

**Next-Generation Antiviral Strategies:**

*Broadly Neutralizing Antibodies (bNAbs):*
- HIV: VRC01, 3BNC117, 10-1074 targeting conserved CD4bs, V3-glycan epitopes
  - AMP trial: VRC01 prevented sensitive strains but overall efficacy limited
  - Combination bNAbs being explored for treatment and prevention
- SARS-CoV-2: Lessons learned from rapid mAb escape; need for cocktails targeting conserved epitopes
- Influenza: Antibodies targeting conserved HA stem region for pan-influenza activity

*Therapeutic Vaccines:*
- HIV: Aim for sustained virologic control without ART
  - Therapeutic vaccination + bNAbs + latency reversing agents
  - HTI vaccine targeting conserved HIV epitopes
  - Ongoing clinical trials (AELIX, IAVI)
- HBV functional cure: Therapeutic vaccines to restore exhausted T cell responses against HBsAg
- HPV: Therapeutic vaccines for established infections/dysplasia (VGX-3100)

*Gene-Based Antivirals:*
- RNA interference (RNAi): siRNA targeting viral RNA (givosiran model for liver-targeted delivery)
- Antisense oligonucleotides: Targeting HBV RNA (bepirovirsen; Phase 3 for HBV functional cure)
- CRISPR-based approaches: Targeting integrated proviral DNA (HIV) or cccDNA (HBV) - preclinical
- mRNA-encoded antibodies: Delivery of bNAb-encoding mRNA for passive immunization without protein manufacturing

*Host-Targeted Antivirals:*
- Cyclophilin inhibitors: Block viral use of host cyclophilins (broad-spectrum potential)
- DHODH inhibitors: Block pyrimidine synthesis needed for viral replication
- TMPRSS2 inhibitors: Block cellular protease needed for SARS-CoV-2 entry
- IFN-lambda (pegylated): Mucosal-focused interferon with fewer systemic side effects

**Universal and Next-Generation Vaccines:**

*Universal Influenza Vaccine:*
- Target: Conserved HA stalk domain, M2 ectodomain, or neuraminidase
- Chimeric HA constructs: Sequential immunization with different HA heads on shared stalk
- Computationally optimized broadly reactive antigens (COBRA)
- Nanoparticle display of conserved epitopes
- Goal: Protection against all influenza A subtypes without annual reformulation
- Multiple candidates in Phase 1-2 trials (FluMos-v2, others)

*Pan-Coronavirus Vaccine:*
- Target: Conserved regions of spike protein (S2 domain), RBD from multiple sarbecoviruses
- Mosaic nanoparticle approaches displaying RBDs from multiple coronaviruses
- Goal: Protection against known and future sarbecoviruses (SARS-CoV-1, SARS-CoV-2, bat coronaviruses)
- Sterilizing mucosal immunity: Intranasal/inhaled vaccine platforms to generate IgA

*Self-Amplifying RNA (saRNA) Vaccines:*
- Encode both the antigen and an alphavirus-derived replicase
- Lower dose needed (RNA self-replicates in cytoplasm)
- ARCT-154 (Arcturus) approved in some countries for COVID-19
- Platform advantage for resource-limited settings (dose-sparing)

*Thermostable Formulations:*
- Lyophilized mRNA: Room temperature stability
- Microarray patches: Thermostable, needle-free delivery
- Oral/mucosal delivery systems

**Functional Cure Strategies for Persistent Viruses:**

*HBV Functional Cure:*
- Definition: Sustained HBsAg loss after treatment discontinuation
- Current antivirals (tenofovir, entecavir) suppress but rarely achieve functional cure
- Pipeline approaches:
  - siRNA/antisense (bepirovirsen, xalnesiran): Reduce HBsAg to enable immune restoration
  - Capsid assembly modulators (lenacapavir-HBV, vebicorvir): Disrupt multiple replication steps
  - Entry inhibitors (bulevirtide): Block NTCP receptor; approved in EU for HDV
  - Therapeutic vaccines: Restore HBV-specific T cell responses
  - TLR agonists: Activate innate immunity in the liver
  - Combination strategies: Likely needed (similar to HCV cure revolution)
- cccDNA elimination: Ultimate cure; CRISPR approaches in preclinical development
- Finite treatment strategies being studied in selected patients with long-term suppression

*HSV Cure/Functional Cure:*
- Meganuclease gene editing targeting latent HSV genomes in ganglia
- HSV therapeutic vaccines (GEN-003, others)
- Helicase-primase inhibitors (pritelivir): Novel MOA for resistant HSV

**Advanced Diagnostics and Surveillance:**

*Wastewater Surveillance:*
- Detection of viral RNA in wastewater as early warning for community transmission
- Applied to SARS-CoV-2, influenza, RSV, poliovirus, mpox
- Enables detection of emerging variants before clinical detection
- WastewaterSCAN and National Wastewater Surveillance System (NWSS)

*Genomic Epidemiology:*
- Real-time viral genome sequencing for variant tracking
- GISAID, GenBank databases for global data sharing
- Phylodynamic analysis for transmission chain reconstruction
- Oxford Nanopore sequencing: Portable, rapid, field-deployable

*Multiplex Syndromic Panels:*
- Respiratory pathogen panels: 20+ targets in 45 minutes
- CSF meningitis/encephalitis panels
- Integration with clinical decision support and stewardship
- Cost-effectiveness and appropriate utilization considerations

*Serosurveillance:*
- Population-level antibody surveys to estimate infection burden and vaccine coverage
- Multiplex serological assays (Luminex, protein microarrays)
- Dried blood spots for field collection
- Informing policy decisions and identifying immunity gaps

**Virome and Beyond:**

*Human Virome:*
- Trillions of viruses in the human body (mostly bacteriophages in the gut)
- Anelloviruses: Universal commensal DNA viruses; virome marker of immunosuppression
- Endogenous retroviruses: ~8% of human genome; most defective but some functional (syncytin in placenta)
- Virome in health and disease: Emerging research on virome-immune interactions

*Oncolytic Virotherapy:*
- Talimogene laherparepvec (T-VEC): Modified HSV-1 for melanoma
- Engineered viruses that selectively replicate in and lyse tumor cells
- Combination with immune checkpoint inhibitors
- Multiple platforms in clinical trials (adenovirus, reovirus, vaccinia)`,
      keyTerms: [
        {
          term: 'Universal influenza vaccine',
          definition:
            'A vaccine designed to provide broad protection against all influenza A subtypes by targeting conserved epitopes such as the HA stalk, eliminating the need for annual reformulation',
        },
        {
          term: 'Self-amplifying RNA (saRNA)',
          definition:
            'An mRNA vaccine platform encoding both the antigen and a replicase enzyme, enabling the RNA to self-replicate in cells and allowing lower doses',
        },
        {
          term: 'HBV functional cure',
          definition:
            'Sustained loss of hepatitis B surface antigen (HBsAg) after treatment discontinuation, with persistent immune control despite residual cccDNA',
        },
        {
          term: 'Wastewater surveillance',
          definition:
            'The detection and quantification of pathogen genetic material in sewage as a population-level indicator of community disease burden',
        },
        {
          term: 'Oncolytic virotherapy',
          definition:
            'The use of engineered viruses that selectively infect and destroy cancer cells while sparing normal tissue',
        },
        {
          term: 'Pan-coronavirus vaccine',
          definition:
            'A vaccine designed to provide protection against multiple coronaviruses including future variants and novel zoonotic spillovers, by targeting conserved spike protein domains',
        },
        {
          term: 'Bepirovirsen',
          definition:
            'An antisense oligonucleotide targeting HBV RNA that reduces HBsAg levels, under investigation as part of HBV functional cure strategies',
        },
        {
          term: 'Genomic epidemiology',
          definition:
            'The use of pathogen genome sequencing and phylogenetic analysis to track transmission, identify variants, and inform public health responses in real time',
        },
      ],
      clinicalNotes:
        'The infectious disease specialist must remain at the forefront of rapidly evolving antiviral therapeutics and vaccine science. Key areas include: (1) Integration of updated variant-matched COVID-19 vaccines and antiviral sequencing into clinical practice. (2) HBV functional cure trials represent a paradigm shift analogous to the HCV DAA revolution. (3) Universal influenza and pan-coronavirus vaccine development may transform pandemic preparedness. (4) Wastewater surveillance and genomic epidemiology provide real-time population-level intelligence that should inform clinical awareness of circulating threats. (5) Novel antiviral modalities (bNAbs, RNAi, CRISPR) are transitioning from research to clinical application, and familiarity with ongoing trials is essential for patient counseling and referral.',
    },
  },
  media: [],
  citations: [
    {
      id: 'fields-virology-7e',
      type: 'textbook',
      title: 'Fields Virology',
      authors: ['Knipe DM', 'Howley PM'],
      source: 'Wolters Kluwer',
      chapter: 'Multiple',
      license: 'Copyrighted',
    },
    {
      id: 'plotkin-vaccines-8e',
      type: 'textbook',
      title: 'Plotkin\'s Vaccines',
      authors: ['Plotkin SA', 'Orenstein WA', 'Offit PA', 'Edwards KM'],
      source: 'Elsevier',
      license: 'Copyrighted',
    },
    {
      id: 'who-pandemic-preparedness',
      type: 'website',
      title: 'Pandemic Influenza Preparedness Framework',
      source: 'World Health Organization',
      url: 'https://www.who.int/initiatives/pandemic-influenza-preparedness-framework',
      license: 'CC BY-NC-SA 3.0 IGO',
    },
    {
      id: 'nature-reviews-antivirals-2023',
      type: 'article',
      title: 'Antiviral agents: structural basis of action and rational design',
      source: 'Nature Reviews Microbiology',
      license: 'Copyrighted',
    },
  ],
  crossReferences: [
    {
      targetId: 'infectious-disease-hiv-aids',
      targetType: 'condition',
      relationship: 'related',
      label: 'HIV/AIDS',
    },
    {
      targetId: 'infectious-disease-bacterial-infections-comprehensive',
      targetType: 'topic',
      relationship: 'sibling',
      label: 'Bacterial Infections and Antibiotics',
    },
    {
      targetId: 'infectious-disease-antimicrobial-resistance-comprehensive',
      targetType: 'topic',
      relationship: 'related',
      label: 'Antimicrobial Resistance and Stewardship',
    },
    {
      targetId: 'infectious-disease-infection-prevention',
      targetType: 'concept',
      relationship: 'related',
      label: 'Infection Prevention and Vaccination',
    },
  ],
  tags: {
    systems: ['infectious-disease', 'immunology', 'virology'],
    topics: [
      'viral-infections',
      'antivirals',
      'vaccines',
      'emerging-infections',
      'pandemic-preparedness',
    ],
    keywords: [
      'virus',
      'antiviral',
      'vaccine',
      'mRNA',
      'influenza',
      'HIV',
      'hepatitis',
      'herpesvirus',
      'COVID-19',
      'RSV',
      'pandemic',
      'Baltimore classification',
      'immune evasion',
      'broadly neutralizing antibody',
    ],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'pediatrics'],
    },
  },
  createdAt: '2025-01-30T00:00:00.000Z',
  updatedAt: '2025-01-30T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
