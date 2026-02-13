import { EducationalContent } from '../../types';

export const hivAidsPathophysiology: EducationalContent = {
  id: 'infectious-disease-hiv',
  type: 'concept',
  name: 'HIV/AIDS Pathophysiology',
  alternateNames: ['Human Immunodeficiency Virus', 'Acquired Immunodeficiency Syndrome', 'HIV Infection'],

  levels: {
    1: {
      level: 1,
      summary: 'HIV is a virus that attacks the immune system, specifically CD4 cells that help fight infections; if untreated, it can lead to AIDS, where the immune system is too weak to fight off serious infections.',
      explanation: `HIV (Human Immunodeficiency Virus) is a virus that attacks your immune system - the part of your body that fights off infections and diseases.

**How HIV Works:**
- HIV targets special white blood cells called CD4 cells (also called T-helper cells)
- These cells are like the "generals" of your immune army - they coordinate the fight against infections
- HIV gets inside these cells, makes copies of itself, and kills the cells in the process
- Over time, the number of CD4 cells drops, making it harder to fight infections

**How HIV Spreads:**
- Sexual contact (vaginal, anal, or oral sex)
- Sharing needles or syringes
- Mother to baby during pregnancy, birth, or breastfeeding
- Blood transfusions (rare in countries with blood screening)

HIV does NOT spread through:
- Hugging, kissing, or touching
- Sharing food or drinks
- Mosquito bites
- Toilet seats or doorknobs

**HIV vs. AIDS:**
- HIV is the virus that causes the infection
- AIDS (Acquired Immunodeficiency Syndrome) happens when HIV has severely damaged the immune system
- Without treatment, it typically takes 10 years for HIV to progress to AIDS
- With modern treatment, many people with HIV never develop AIDS

**Symptoms:**
*Early (acute):* Flu-like illness 2-4 weeks after infection
*Middle (chronic):* Often no symptoms for years
*Late (AIDS):* Unusual infections, certain cancers, severe weight loss

**Treatment and Prevention:**
- Antiretroviral therapy (ART) can control HIV and allow people to live long, healthy lives
- People on effective treatment cannot transmit HIV sexually ("Undetectable = Untransmittable")
- PrEP (Pre-Exposure Prophylaxis) can prevent HIV in people at high risk
- Condoms provide effective protection`,
      keyTerms: [
        { term: 'HIV', definition: 'Human Immunodeficiency Virus; the virus that attacks the immune system' },
        { term: 'AIDS', definition: 'Acquired Immunodeficiency Syndrome; advanced HIV infection with severe immune damage' },
        { term: 'CD4 cells', definition: 'White blood cells that coordinate the immune response; HIV\'s main target' },
        { term: 'ART', definition: 'Antiretroviral therapy; medications that control HIV' },
      ],
      analogies: [
        'CD4 cells are like generals in your immune army - HIV specifically targets and kills these leaders, leaving the army disorganized and unable to fight.',
        'Taking HIV medication is like putting the virus in jail - it cannot get out and cause trouble as long as you keep taking the medicine.',
      ],
      examples: [
        'Someone with untreated AIDS might get pneumonia from an organism that would not normally make healthy people sick (opportunistic infection).',
        'A person on effective HIV treatment with an undetectable viral load can expect to live a normal lifespan.',
      ],
    },
    2: {
      level: 2,
      summary: 'HIV is a retrovirus that uses reverse transcriptase to integrate into host DNA, preferentially infecting CD4+ T lymphocytes, leading to progressive immune dysfunction and susceptibility to opportunistic infections.',
      explanation: `HIV belongs to the retrovirus family, characterized by unique replication involving reverse transcription of RNA to DNA.

**HIV Structure:**

*Envelope:*
- Lipid bilayer from host cell membrane
- gp120: Surface protein, binds CD4
- gp41: Transmembrane protein, mediates fusion

*Core:*
- Capsid (p24 protein)
- RNA genome (two copies)
- Enzymes: Reverse transcriptase, integrase, protease

**Viral Life Cycle:**

1. **Binding:** gp120 binds CD4 receptor
2. **Co-receptor Binding:** gp120 binds CCR5 or CXCR4
3. **Fusion:** gp41 mediates membrane fusion
4. **Uncoating:** Capsid releases RNA and enzymes
5. **Reverse Transcription:** RNA → DNA
6. **Integration:** Viral DNA inserts into host chromosome
7. **Transcription:** Host machinery makes viral RNA
8. **Translation:** Viral proteins produced
9. **Assembly:** New virions form
10. **Budding:** Virions exit, acquiring envelope

**CD4+ T Cell Depletion Mechanisms:**
- Direct viral killing
- Immune-mediated killing of infected cells
- Bystander apoptosis
- Immune exhaustion

**Disease Stages:**

*Acute HIV Infection (2-4 weeks):*
- "Acute retroviral syndrome"
- Fever, lymphadenopathy, pharyngitis, rash
- Very high viral load, very contagious
- Antibodies not yet detectable

*Chronic (Clinical Latency):*
- Viral replication continues
- CD4 decline ~50-80 cells/year without treatment
- Usually asymptomatic
- Duration: ~10 years without treatment

*AIDS:*
- CD4 <200 cells/microL, or
- AIDS-defining condition (opportunistic infection or cancer)

**Opportunistic Infections by CD4 Count:**

| CD4 Count | Risk |
|-----------|------|
| <500 | Oral candidiasis, TB, Kaposi sarcoma |
| <200 | PCP, Toxoplasmosis, Histoplasmosis |
| <100 | Cryptococcosis, Cryptosporidiosis |
| <50 | MAC, CMV, PML |

**Diagnosis:**
- 4th generation Ag/Ab test (detects p24 antigen + antibodies)
- HIV-1/2 differentiation assay
- Viral load (HIV RNA) for confirmation and monitoring
- CD4 count for immune status`,
      keyTerms: [
        { term: 'retrovirus', definition: 'RNA virus that uses reverse transcriptase to create DNA copy for integration into host genome' },
        { term: 'reverse transcriptase', definition: 'Enzyme that converts HIV RNA into DNA' },
        { term: 'gp120', definition: 'HIV envelope protein that binds CD4 receptor' },
        { term: 'CCR5/CXCR4', definition: 'Coreceptors required for HIV entry; determines viral tropism' },
        { term: 'opportunistic infection', definition: 'Infection that occurs due to weakened immune system' },
      ],
      analogies: [
        'HIV integrating into your DNA is like a spy embedding themselves in your organization - they use your own resources to make more spies.',
        'The CD4 count is like a bank account balance for your immune system - as HIV spends it down, you become vulnerable to "purchases" (infections) you could easily afford before.',
      ],
    },
    3: {
      level: 3,
      summary: 'HIV pathogenesis involves viral tropism determined by coreceptor usage, reservoir establishment in lymphoid tissue, progressive CD4 depletion through multiple mechanisms, and immune activation driving disease progression.',
      explanation: `Understanding HIV disease requires integration of virology, immunology, and clinical manifestations.

**Molecular Virology:**

*HIV Genome:*
- gag: Structural proteins (MA, CA/p24, NC)
- pol: Enzymes (RT, integrase, protease)
- env: Envelope proteins (gp120, gp41)
- Regulatory: tat (transactivator), rev (RNA transport)
- Accessory: nef, vif, vpr, vpu

*Coreceptor Tropism:*
- R5 (M-tropic): Uses CCR5, predominates early, targets macrophages
- X4 (T-tropic): Uses CXCR4, emerges later, more cytopathic
- Dual-tropic: Uses both coreceptors

*CCR5-delta32 Mutation:*
- Homozygotes highly resistant to HIV infection
- Basis for stem cell transplant "cures"
- Maraviroc (CCR5 inhibitor) targets this receptor

**Reservoir and Latency:**

*Viral Reservoirs:*
- Resting CD4+ T cells (main reservoir)
- Macrophages, dendritic cells
- Gut-associated lymphoid tissue (GALT)
- CNS (microglial cells)
- Lymph nodes

*Latency:*
- Integrated provirus without active replication
- Invisible to immune system
- Activated by T cell stimulation
- Major barrier to cure

**Immune Activation:**

*Chronic Inflammation:*
- Microbial translocation from gut
- Persistent viral replication
- Elevated inflammatory markers (CRP, IL-6, D-dimer)
- Contributes to non-AIDS complications

*Immune Exhaustion:*
- Upregulation of PD-1, CTLA-4, LAG-3
- T cell dysfunction and senescence
- Impaired HIV-specific responses

**AIDS-Defining Conditions:**

*Opportunistic Infections:*
- PCP (Pneumocystis pneumonia)
- Toxoplasma encephalitis
- Cryptococcal meningitis
- CMV retinitis/colitis
- MAC (Mycobacterium avium complex)
- Cryptosporidiosis
- Progressive multifocal leukoencephalopathy (PML)

*Malignancies:*
- Kaposi sarcoma (HHV-8)
- Non-Hodgkin lymphoma (often EBV-related)
- Cervical/anal cancer (HPV)
- Primary CNS lymphoma (EBV)

**Diagnostic Algorithm:**

*4th Generation Testing:*
1. Initial: Ag/Ab combination immunoassay
2. Positive → HIV-1/2 differentiation assay
3. If indeterminate → HIV-1 RNA (viral load)

*Acute HIV:*
- Antibody may be negative
- p24 antigen and/or RNA positive
- High viral load (often >100,000)

*Monitoring:*
- CD4 count: Immune status
- Viral load: Treatment response
- Genotype: Resistance testing`,
      keyTerms: [
        { term: 'provirus', definition: 'HIV DNA integrated into host cell chromosome; basis for latent reservoir' },
        { term: 'viral tropism', definition: 'Coreceptor preference (R5 vs. X4) determining which cells HIV can infect' },
        { term: 'GALT', definition: 'Gut-associated lymphoid tissue; major site of CD4 depletion in early HIV' },
        { term: 'immune reconstitution inflammatory syndrome (IRIS)', definition: 'Paradoxical worsening of infection after starting ART due to recovering immunity' },
        { term: 'elite controller', definition: 'Rare individuals who control HIV without treatment; studied for cure research' },
      ],
      clinicalNotes: 'Acute HIV: Consider in any patient with mono-like illness; standard serology may be negative. PCP prophylaxis (TMP-SMX) indicated when CD4 <200. MAC prophylaxis (azithromycin) when CD4 <50. Start ART immediately for all HIV patients regardless of CD4 count.',
    },
    4: {
      level: 4,
      summary: 'HIV management requires integration of antiretroviral pharmacology, resistance patterns, opportunistic infection prophylaxis, and monitoring for ART-related toxicities and non-AIDS comorbidities.',
      explanation: `Advanced HIV medicine requires mastery of antiretroviral therapy, prevention, and management of complications.

**Antiretroviral Therapy (ART):**

*Drug Classes:*

| Class | Mechanism | Examples |
|-------|-----------|----------|
| NRTI | Nucleoside/nucleotide RT inhibitor | Tenofovir (TAF/TDF), abacavir, emtricitabine, lamivudine |
| NNRTI | Non-nucleoside RT inhibitor | Efavirenz, rilpivirine, doravirine |
| PI | Protease inhibitor | Darunavir (boosted) |
| INSTI | Integrase inhibitor | Dolutegravir, bictegravir, cabotegravir |
| Entry inhibitor | CCR5 or fusion inhibitor | Maraviroc, enfuvirtide |
| Capsid inhibitor | Multiple stages | Lenacapavir |

*Recommended Initial Regimens:*
- Bictegravir/TAF/emtricitabine (Biktarvy)
- Dolutegravir + TAF/emtricitabine or abacavir/lamivudine
- Dolutegravir/lamivudine (two-drug regimen, selected patients)

*Key Principles:*
- Start ART same day or within days of diagnosis
- Minimum 3 active drugs (2 for some regimens)
- Resistance testing before initiation
- Goal: Viral suppression (<50 copies/mL)

**Resistance:**

*Genotypic Testing:*
- Standard of care before starting ART
- At virologic failure
- NRTI, NNRTI, PI, integrase mutations characterized

*Common Mutations:*
- M184V: Lamivudine/emtricitabine (maintains some activity)
- K65R: Tenofovir
- K103N: First-generation NNRTIs
- Integrase mutations: Q148H/R/K, N155H, etc.

*Transmitted Drug Resistance:*
- 10-15% prevalence in new diagnoses
- Test before starting

**Prevention:**

*PrEP (Pre-Exposure Prophylaxis):*
- TDF/emtricitabine daily (FDA-approved)
- TAF/emtricitabine daily (not for receptive vaginal sex)
- Cabotegravir long-acting injectable (every 2 months)
- Indicated for HIV-negative at substantial risk

*PEP (Post-Exposure Prophylaxis):*
- Start within 72 hours of exposure
- 28-day course
- TDF/FTC + dolutegravir (or raltegravir)

*U=U (Undetectable = Untransmittable):*
- Viral suppression eliminates sexual transmission
- Scientific evidence from PARTNER studies

**Opportunistic Infection Prophylaxis:**

| Condition | When to Start | Agent |
|-----------|---------------|-------|
| PCP | CD4 <200 | TMP-SMX |
| Toxoplasmosis | CD4 <100 + IgG+ | TMP-SMX (higher dose) |
| MAC | CD4 <50 | Azithromycin |
| Cryptococcosis | CD4 <100, endemic | Fluconazole (debated) |

**Non-AIDS Complications:**

*Cardiovascular:*
- Accelerated atherosclerosis
- Chronic inflammation, dyslipidemia
- Some ART contributes (older PIs, abacavir)

*Renal:*
- TDF: Proximal tubulopathy, Fanconi syndrome
- TAF: Less renal toxicity
- Monitor creatinine, urinalysis

*Bone:*
- Decreased BMD with HIV and ART
- TDF worse than TAF
- Screen with DEXA as indicated

*Metabolic:*
- Weight gain with INSTIs (especially dolutegravir, bictegravir)
- Lipid changes with PIs
- Insulin resistance

**IRIS (Immune Reconstitution Inflammatory Syndrome):**
- Paradoxical worsening after starting ART
- Risk: Low CD4, high viral load, active OIs
- Common with MAC, TB, Cryptococcus, PML
- Management: Continue ART, treat OI, steroids if severe`,
      keyTerms: [
        { term: 'integrase strand transfer inhibitor (INSTI)', definition: 'Preferred ART class blocking integration of viral DNA into host genome' },
        { term: 'PrEP', definition: 'Pre-exposure prophylaxis; ART taken by HIV-negative individuals to prevent acquisition' },
        { term: 'virologic failure', definition: 'HIV RNA >200 copies/mL on two occasions while on ART' },
        { term: 'pharmacokinetic booster', definition: 'Drug (ritonavir, cobicistat) that inhibits CYP3A4 to increase levels of other ARVs' },
        { term: 'U=U', definition: 'Undetectable = Untransmittable; concept that virally suppressed individuals do not transmit HIV sexually' },
      ],
      clinicalNotes: `**Clinical Pearls:**
- HLA-B*5701 testing mandatory before abacavir (hypersensitivity)
- Tropism testing before maraviroc (only works for R5 virus)
- IRIS: Do not stop ART; treat underlying OI, steroids for severe cases
- TMP-SMX covers both PCP and Toxoplasma
- Weight gain: Consider switching to NNRTI or PI-based regimen if problematic
- Pregnancy: Continue/start ART; avoid efavirenz in first trimester; INSTI-based preferred`,
    },
    5: {
      level: 5,
      summary: 'Contemporary HIV medicine encompasses cure research strategies, long-acting therapeutic options, precision medicine approaches, and integrated management of aging with HIV addressing non-AIDS comorbidities and drug-drug interactions.',
      explanation: `Expert-level HIV medicine requires integration of emerging science, complex patient management, and global health perspectives.

**HIV Cure Research:**

*Current Strategies:*

1. **Shock and Kill:**
   - Latency-reversing agents (LRAs) activate reservoir
   - Immune response or other mechanisms clear infected cells
   - Challenges: Incomplete activation, immune exhaustion

2. **Block and Lock:**
   - Permanently silence integrated provirus
   - Didehydro-cortistatin A (dCA) and other agents
   - Goal: Functional cure without eradication

3. **Gene Therapy:**
   - CCR5 disruption (zinc finger nucleases, CRISPR)
   - CAR-T cells targeting HIV
   - In vivo gene editing

4. **Stem Cell Transplantation:**
   - Berlin, London, Dusseldorf patients: CCR5-delta32 donors
   - Not scalable; significant morbidity/mortality
   - Informs cure research

5. **Broadly Neutralizing Antibodies (bNAbs):**
   - Target conserved epitopes
   - VRC01, 3BNC117, 10-1074, N6LS
   - Trials for treatment, prevention, cure

*Post-Treatment Controllers:*
- Sustained viral control after ART interruption
- Rare; studied for insights into cure
- VISCONTI cohort and others

**Long-Acting Therapeutics:**

*Current Options:*
- Cabotegravir/rilpivirine (Cabenuva): Monthly or bimonthly IM
- Lenacapavir: Every 6 months (heavily treatment-experienced)

*Pipeline:*
- Long-acting capsid inhibitors
- Islatravir (if development continues)
- Broadly neutralizing antibody infusions

*Considerations:*
- Adherence assurance
- Drug "tail" after stopping (resistance risk)
- Injection site reactions

**Precision Medicine Approaches:**

*Pharmacogenomics:*
- HLA-B*5701: Abacavir hypersensitivity
- CYP2B6: Efavirenz metabolism (slow metabolizers at risk)
- UGT1A1: Atazanavir hyperbilirubinemia

*Proviral DNA Analysis:*
- Resistance archive in latent reservoir
- May detect resistance not seen on standard genotype

*Therapeutic Drug Monitoring:*
- Limited role in standard care
- Consider for drug interactions, extremes of weight

**Aging with HIV:**

*Non-AIDS Comorbidities:*
- Cardiovascular disease: Accelerated atherosclerosis
- Renal disease: HIV-associated nephropathy, ART toxicity
- Bone disease: Osteoporosis, fragility fractures
- Neurocognitive disorders: HIV-associated neurocognitive disorder (HAND)
- Malignancies: HPV-related, lung cancer, liver cancer

*Polypharmacy:*
- Drug-drug interactions common
- Ritonavir/cobicistat: Strong CYP3A4 inhibitors
- Proton pump inhibitors: Reduce rilpivirine absorption
- Statins: Interactions vary by ARV and statin

*Screening Recommendations:*
- Cardiovascular risk assessment
- DEXA for bone health
- Cancer screening (cervical, anal, liver per guidelines)
- Renal function monitoring

**Special Populations:**

*Pregnancy:*
- ART throughout pregnancy
- Preferred: Dolutegravir-based (after neural tube signal resolved)
- Avoid: Efavirenz first trimester, cobicistat (PK changes)
- Goal: Viral suppression before delivery

*Coinfections:*
- HBV: Use TDF or TAF-containing regimen (dual activity)
- HCV: DAA therapy; consider drug interactions
- TB: Rifampin interactions complex; use rifabutin or dolutegravir 50mg BID

*Elite Controllers and Long-Term Non-Progressors:*
- <1% of HIV+ individuals
- HLA-B*57, HLA-B*27 protective alleles
- Studied for immune correlates

**Global Perspectives:**

*Challenges:*
- 38+ million living with HIV globally
- Treatment access inequities
- Drug resistance emergence
- Key populations (MSM, PWID, sex workers)

*Innovations:*
- Dolutegravir-based generic regimens
- Differentiated service delivery
- HIV self-testing
- Long-acting PrEP (cabotegravir) rollout

**Vaccine Development:**

*Challenges:*
- Extreme viral diversity
- Rapid escape mutations
- Lack of natural immunity model

*Approaches:*
- Mosaic vaccines (Ad26.Mos4.HIV)
- Germline-targeting immunogens
- mRNA platforms
- Results from Mosaico, Imbokodo trials`,
      keyTerms: [
        { term: 'latency-reversing agent (LRA)', definition: 'Compound that reactivates latent HIV to enable elimination strategies' },
        { term: 'broadly neutralizing antibody (bNAb)', definition: 'Antibody capable of neutralizing diverse HIV strains by targeting conserved epitopes' },
        { term: 'lenacapavir', definition: 'Long-acting capsid inhibitor administered every 6 months for multidrug-resistant HIV' },
        { term: 'HAND', definition: 'HIV-associated neurocognitive disorder; spectrum from asymptomatic to dementia' },
        { term: 'elite controller', definition: 'Individual who maintains viral suppression without ART; <1% of HIV+ individuals' },
      ],
      clinicalNotes: `**Expert Pearls:**
- Long-acting CAB/RPV: Only for virologically suppressed, stable patients; requires R5 tropism
- Lenacapavir: For heavily treatment-experienced with MDR virus; capsid inhibitor + other agents
- bNAbs in trials: May enable ART-free control in some patients
- Cure attempts: Stem cell transplant only in those with hematologic malignancy requiring transplant anyway
- Aging with HIV: Address cardiovascular risk; statin selection matters (atorvastatin, rosuvastatin safer with INSTIs)
- TB-HIV: Dolutegravir 50mg BID with rifampin, or use rifabutin with standard ARV dosing`,
    },
  },

  media: [
    {
      id: 'hiv-life-cycle',
      type: 'diagram',
      filename: 'hiv-life-cycle.svg',
      title: 'HIV Life Cycle and Drug Targets',
      description: 'Diagram showing stages of HIV replication and where each ART class acts',
    },
    {
      id: 'hiv-disease-progression',
      type: 'diagram',
      filename: 'hiv-disease-progression.svg',
      title: 'Natural History of HIV Infection',
      description: 'Graph showing CD4 count and viral load over disease course',
    },
  ],
  citations: [
    {
      id: 'dhhs-guidelines',
      type: 'website',
      title: 'Guidelines for the Use of Antiretroviral Agents in Adults and Adolescents Living with HIV',
      source: 'Department of Health and Human Services',
      url: 'https://clinicalinfo.hiv.gov/en/guidelines',
    },
    {
      id: 'ias-usa',
      type: 'article',
      title: 'Antiretroviral Drugs for Treatment and Prevention of HIV Infection in Adults',
      authors: ['Saag MS', 'Gandhi RT', 'Hoy JF', 'et al.'],
      source: 'JAMA',
      url: 'https://doi.org/10.1001/jama.2020.17025',
    },
  ],
  crossReferences: [
    { targetId: 'infectious-disease-antiviral-therapy', targetType: 'topic', relationship: 'child', label: 'Antiviral Therapy' },
    { targetId: 'infectious-disease-opportunistic', targetType: 'topic', relationship: 'related', label: 'Opportunistic Infections' },
    { targetId: 'system-immune', targetType: 'system', relationship: 'related', label: 'Immune System' },
  ],
  tags: {
    systems: ['immune'],
    topics: ['infectious-disease', 'virology', 'immunology', 'pharmacology'],
    keywords: ['HIV', 'AIDS', 'ART', 'antiretroviral', 'CD4', 'opportunistic infection', 'PrEP'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine'] },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default hivAidsPathophysiology;
