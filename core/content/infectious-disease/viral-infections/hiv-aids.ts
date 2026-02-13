import { EducationalContent } from '../../types';

export const HIV_AIDS: EducationalContent = {
  id: 'infectious-disease-hiv-aids',
  type: 'condition',
  name: 'HIV/AIDS',
  alternateNames: ['Human Immunodeficiency Virus', 'Acquired Immunodeficiency Syndrome', 'HIV Infection'],
  levels: {
    1: {
      level: 1,
      summary: 'HIV is a virus that attacks the immune system, and without treatment, it can lead to AIDS, a condition where the body cannot fight infections.',
      explanation: `HIV stands for Human Immunodeficiency Virus. This virus attacks cells in your immune system - the part of your body that fights off infections and diseases. Without treatment, HIV slowly weakens your immune system over many years.

**How HIV Spreads:**
HIV can only spread through specific body fluids:
- Blood
- Semen
- Vaginal fluids
- Breast milk

This means HIV can spread through:
- Unprotected sex
- Sharing needles
- From mother to baby during pregnancy, birth, or breastfeeding
- Blood transfusions (very rare now due to testing)

HIV does NOT spread through casual contact like hugging, shaking hands, sharing food, or using the same toilet.

**What is AIDS?**
AIDS (Acquired Immunodeficiency Syndrome) is the most advanced stage of HIV infection. It happens when HIV has seriously damaged the immune system. People with AIDS can get very sick from infections that wouldn't normally harm someone with a healthy immune system.

**The Good News:**
- HIV can be prevented
- HIV can be tested for easily
- HIV can be treated with daily medication
- People with HIV who take their medicine can live long, healthy lives
- Treatment makes HIV undetectable, meaning it cannot be spread to others

**Prevention:**
- Using condoms during sex
- Never sharing needles
- PrEP: A daily pill that prevents HIV infection in HIV-negative people
- Testing regularly if you might be at risk`,
      keyTerms: [
        { term: 'HIV', definition: 'Human Immunodeficiency Virus - a virus that attacks the immune system' },
        { term: 'AIDS', definition: 'Acquired Immunodeficiency Syndrome - advanced HIV infection with severe immune damage' },
        { term: 'Immune system', definition: 'The body\'s defense system against infections and diseases' },
        { term: 'PrEP', definition: 'Pre-exposure prophylaxis - medicine taken by HIV-negative people to prevent infection' },
      ],
    },
    2: {
      level: 2,
      summary: 'HIV is a retrovirus that infects CD4+ T cells, progressively depleting them and leading to immunodeficiency; modern antiretroviral therapy enables viral suppression and near-normal life expectancy.',
      explanation: `HIV belongs to a family of viruses called retroviruses. What makes HIV unique is its specific targeting of CD4+ T cells (also called T helper cells), which coordinate the immune response. As HIV destroys these cells, the immune system becomes progressively weaker.

**HIV Life Cycle:**
1. HIV attaches to CD4 receptors on T cells
2. The virus enters the cell and releases its genetic material (RNA)
3. HIV's reverse transcriptase enzyme converts RNA to DNA
4. Viral DNA integrates into the host cell's DNA
5. The cell produces new HIV particles
6. New viruses bud from the cell to infect other cells

**Disease Progression (Without Treatment):**

| Stage | Timeline | Characteristics |
|-------|----------|-----------------|
| Acute infection | 2-4 weeks | Flu-like symptoms, high viral load |
| Clinical latency | Years to decades | Few/no symptoms, CD4 decline |
| AIDS | - | CD4 < 200 or opportunistic infection |

**CD4 Count:**
- Normal: 500-1500 cells/mm³
- Mild immunosuppression: 200-500
- AIDS: < 200

**Common Opportunistic Infections:**
These occur when immunity is severely compromised:
- Pneumocystis pneumonia (PCP)
- Toxoplasmosis
- Candidiasis (thrush)
- Tuberculosis
- Kaposi's sarcoma (cancer)

**Antiretroviral Therapy (ART):**
Modern HIV treatment combines multiple drugs:
- Prevents viral replication
- Allows immune system recovery
- Reduces viral load to "undetectable" levels
- When undetectable, HIV cannot be transmitted sexually (U=U)

Common drug classes:
- NRTIs (nucleoside reverse transcriptase inhibitors)
- NNRTIs (non-nucleoside reverse transcriptase inhibitors)
- Integrase inhibitors
- Protease inhibitors

**Prevention Methods:**
- **Condoms**: Highly effective when used correctly
- **PrEP**: Daily pill or injection preventing HIV acquisition
- **PEP**: Post-exposure prophylaxis, taken within 72 hours of potential exposure
- **Testing**: Know your status; treat early if positive`,
      keyTerms: [
        { term: 'CD4+ T cell', definition: 'A type of white blood cell that coordinates the immune response; the primary target of HIV' },
        { term: 'Viral load', definition: 'The amount of HIV in the blood, measured as copies per milliliter' },
        { term: 'Opportunistic infection', definition: 'An infection that occurs because of a weakened immune system' },
        { term: 'Undetectable', definition: 'When HIV levels in blood are too low to be measured; means HIV cannot be sexually transmitted' },
        { term: 'ART', definition: 'Antiretroviral therapy - combination drug treatment that suppresses HIV' },
      ],
    },
    3: {
      level: 3,
      summary: 'HIV pathogenesis involves CD4+ T cell depletion through multiple mechanisms, immune activation, and establishment of viral reservoirs, with ART achieving viral suppression but not eradication due to latent proviral DNA.',
      explanation: `Understanding HIV requires knowledge of viral biology, immunopathogenesis, and the pharmacology of antiretroviral agents.

**HIV Virology:**

*Structure:*
- Enveloped retrovirus (Lentivirus genus)
- Two copies of single-stranded RNA genome
- Key enzymes: reverse transcriptase, integrase, protease
- Surface proteins: gp120 (attachment), gp41 (fusion)

*Tropism:*
- R5-tropic (CCR5 coreceptor): Predominates early infection
- X4-tropic (CXCR4 coreceptor): Associated with disease progression
- Dual-tropic: Uses both coreceptors

**Pathogenesis:**

*CD4+ T Cell Depletion Mechanisms:*
- Direct viral cytopathic effects
- Syncytia formation (cell-to-cell fusion)
- Apoptosis of infected and bystander cells
- Immune-mediated killing of infected cells
- Impaired T cell regeneration

*Immune Activation:*
- Chronic immune activation is hallmark of HIV disease
- Microbial translocation (gut barrier damage)
- Elevated inflammatory markers (IL-6, sCD14, D-dimer)
- Associated with non-AIDS comorbidities even when suppressed

*Viral Reservoir:*
- Latently infected resting memory CD4+ T cells
- Integrated proviral DNA persists for cell's lifetime
- Not affected by ART
- Source of viral rebound if therapy stopped
- Half-life estimated at 44 months (decades to clear)

**Clinical Staging:**

*WHO Clinical Staging:*
- Stage 1: Asymptomatic
- Stage 2: Minor mucocutaneous, weight loss <10%
- Stage 3: Unexplained weight loss >10%, chronic diarrhea, oral candidiasis, TB
- Stage 4: AIDS-defining conditions

*AIDS-Defining Conditions (selected):*
- Pneumocystis jirovecii pneumonia
- Esophageal candidiasis
- CNS toxoplasmosis
- Cryptococcal meningitis
- CMV retinitis
- Kaposi sarcoma
- Primary CNS lymphoma
- Progressive multifocal leukoencephalopathy (PML)

**Antiretroviral Pharmacology:**

*Drug Classes and Targets:*
| Class | Target | Examples |
|-------|--------|----------|
| NRTIs | Reverse transcriptase (competitive) | Tenofovir, emtricitabine, abacavir |
| NNRTIs | Reverse transcriptase (non-competitive) | Efavirenz, rilpivirine, doravirine |
| Integrase inhibitors (INSTIs) | Integrase enzyme | Dolutegravir, bictegravir |
| Protease inhibitors | HIV protease | Darunavir, atazanavir |
| Entry inhibitors | Fusion/entry | Maraviroc (CCR5), fostemsavir |

*Recommended Initial Regimens:*
- Bictegravir/tenofovir alafenamide/emtricitabine (Biktarvy)
- Dolutegravir + tenofovir/emtricitabine
- Dolutegravir/lamivudine (2-drug regimen)

*Treatment Goals:*
- Achieve undetectable viral load (<50 copies/mL)
- Maintain/restore CD4 count
- Prevent complications and transmission

**Prevention:**

*PrEP:*
- Daily: Tenofovir disoproxil fumarate/emtricitabine (TDF/FTC) or tenofovir alafenamide/emtricitabine (TAF/FTC)
- On-demand (2-1-1 regimen): For MSM, event-driven dosing with TDF/FTC
- Injectable: Cabotegravir every 2 months

*PEP:*
- Three-drug ART regimen within 72 hours of exposure
- Continue for 28 days
- Recommended for significant occupational or non-occupational exposures`,
      keyTerms: [
        { term: 'Provirus', definition: 'HIV DNA integrated into the host cell genome' },
        { term: 'Viral reservoir', definition: 'Cells harboring latent integrated proviral DNA that persist despite ART' },
        { term: 'Tropism', definition: 'The preference of HIV for cells expressing specific coreceptors (CCR5 or CXCR4)' },
        { term: 'INSTI', definition: 'Integrase strand transfer inhibitor - a drug class that prevents HIV DNA integration' },
        { term: 'Microbial translocation', definition: 'Movement of gut bacteria and their products into systemic circulation due to damaged gut barrier' },
      ],
    },
    4: {
      level: 4,
      summary: 'HIV cure research addresses the challenge of latent reservoirs through strategies including latency reversal, gene therapy, and broadly neutralizing antibodies, while optimal chronic disease management integrates ART optimization, comorbidity prevention, and aging-related considerations.',
      explanation: `Advanced HIV management requires understanding of reservoir biology, ART pharmacology, and the evolving landscape of cure research.

**Reservoir Biology:**

*Latency Mechanisms:*
- Integration into transcriptionally silent chromatin
- Absence of Tat for proviral transcription
- Cellular factors maintaining latency (HDAC, DNA methylation)
- Stochastic reactivation enables persistence

*Reservoir Measurement:*
- Quantitative viral outgrowth assay (QVOA): Gold standard but underestimates
- Total HIV DNA: Includes defective proviruses
- Intact proviral DNA assay (IPDA): More specific for replication-competent
- Ultrasensitive plasma viral load: Detects low-level viremia

*Anatomical Reservoirs:*
- Gut-associated lymphoid tissue
- Lymph nodes
- Central nervous system
- Bone marrow

**ART Optimization:**

*Switching Strategies:*
- Simplification to reduce pill burden
- Switch to avoid drug toxicity
- Two-drug regimens (dolutegravir + lamivudine or rilpivirine)
- Long-acting injectable (cabotegravir + rilpivirine) every 2 months

*Resistance Testing:*
- Genotypic testing standard before treatment
- Detects mutations in RT, protease, integrase genes
- Phenotypic testing for complex resistance
- Integrase resistance still relatively rare

*Special Populations:*
- Pregnancy: Continue effective ART; avoid dolutegravir at conception concerns resolved
- Renal impairment: Tenofovir alafenamide (TAF) preferred over TDF
- HBV coinfection: Use tenofovir-containing regimen
- TB coinfection: Drug interactions with rifampin; use efavirenz or adjusted dolutegravir

**Non-AIDS Comorbidities:**

*Cardiovascular Disease:*
- Higher risk even with viral suppression
- Immune activation and inflammation
- Some ART may affect lipids (abacavir controversy)
- Aggressive CV risk factor management

*Bone Health:*
- Tenofovir (TDF > TAF) associated with bone loss
- Baseline DXA in older patients
- Standard osteoporosis prevention

*Renal Disease:*
- TDF: Proximal tubulopathy, Fanconi syndrome
- HIV-associated nephropathy (HIVAN)
- Screen regularly with eGFR and urinalysis

*Metabolic:*
- Weight gain associated with integrase inhibitors
- TAF greater weight gain than TDF
- Lipodystrophy (historical with older agents)

*Neurocognitive:*
- HIV-associated neurocognitive disorder (HAND)
- Ranges from asymptomatic to dementia
- CNS penetration of ART may matter

**Cure Research:**

*Strategies:*

*Shock and Kill:*
- Latency reversing agents (LRAs) to reactivate reservoir
- HDAC inhibitors, PKC agonists
- Immune response then eliminates reactivated cells
- Clinical trials disappointing so far

*Block and Lock:*
- Permanently silence integrated provirus
- Tat inhibitors, epigenetic modifiers
- Earlier stage of research

*Gene Therapy:*
- CCR5 gene editing (zinc finger nucleases, CRISPR)
- Inspired by "Berlin patient" (Timothy Ray Brown) and "London patient"
- Stem cell transplant from CCR5-delta32 homozygous donor
- Gene-edited autologous cells under investigation

*Broadly Neutralizing Antibodies (bNAbs):*
- Target conserved epitopes on HIV envelope
- Therapeutic and prevention applications
- Combination approaches to prevent resistance
- Long-acting formulations in development

*Therapeutic Vaccines:*
- Induce immune responses to control HIV without ART
- Challenge: HIV sequence diversity and latent reservoir
- Combined with other modalities in trials

**Functional Cure Examples:**
- Elite controllers: Rare individuals who control HIV without ART
- Post-treatment controllers: Control after ART interruption (rare)
- Mississippi baby: Early treatment led to prolonged remission (eventual rebound)`,
      keyTerms: [
        { term: 'Latency reversing agent', definition: 'Drug that reactivates latent HIV to enable elimination of reservoir cells' },
        { term: 'IPDA', definition: 'Intact proviral DNA assay - a method to quantify replication-competent HIV provirus' },
        { term: 'Broadly neutralizing antibody', definition: 'An antibody that can neutralize diverse HIV strains by targeting conserved envelope regions' },
        { term: 'CCR5-delta32', definition: 'A mutation resulting in non-functional CCR5 coreceptor, conferring HIV resistance' },
        { term: 'Post-treatment controller', definition: 'A rare individual who maintains viral control after stopping ART' },
      ],
      clinicalNotes: 'Clinical management focuses on ART adherence, toxicity monitoring, and addressing comorbidities. Long-acting injectable ART represents a significant advance for adherence challenges. Cure research progresses but a scalable cure remains elusive. The U=U message (undetectable = untransmittable) has profound implications for stigma reduction and quality of life.',
    },
    5: {
      level: 5,
      summary: 'Expert HIV care integrates precision medicine approaches to ART optimization, comprehensive management of multimorbidity in aging populations, participation in cure research, and public health strategies toward epidemic control including implementation of PrEP, U=U messaging, and global treatment scale-up.',
      explanation: `Mastery of HIV medicine encompasses advanced therapeutics, complex patient management, cure science, and public health leadership.

**Precision ART Selection:**

*Pharmacogenomics:*
- HLA-B*5701: Screen before abacavir (hypersensitivity risk)
- CYP2B6 polymorphisms: Affect efavirenz levels
- UGT1A1 polymorphisms: Affect dolutegravir levels
- Emerging role for therapeutic drug monitoring

*Resistance Interpretation:*
- Stanford HIVdb algorithm
- ANRS resistance rules
- Archived resistance: May re-emerge under selective pressure
- Next-generation sequencing detects minority variants

*Drug Interactions:*
- CYP3A4 inducers (rifampin): Reduce PI/NNRTI levels
- CYP3A4 inhibitors (ritonavir/cobicistat as boosters)
- Integrase inhibitors: Polyvalent cation interactions
- HCV DAAs with HIV ART: Generally favorable

**Complex Clinical Scenarios:**

*Virologic Failure:*
1. Assess adherence (most common cause)
2. Review drug interactions
3. Resistance testing while on failing regimen
4. Construct new regimen with at least 2 active drugs

*Heavily Treatment-Experienced (HTE):*
- Fostemsavir: gp120 attachment inhibitor
- Ibalizumab: CD4-directed post-attachment inhibitor
- Cabotegravir: May be active against some INSTI resistance
- Lenacapavir: First-in-class capsid inhibitor (given every 6 months)

*Immune Non-Responders:*
- Viral suppression but CD4 < 200 despite years of ART
- Higher morbidity/mortality
- No proven intervention to boost CD4 response
- Maintain OI prophylaxis, vaccinations

**Aging with HIV:**

*Multimorbidity Management:*
- Polypharmacy considerations
- Falls, frailty assessment
- Cognitive screening
- Cancer screening (anal, lung, liver)
- Deprescribing when appropriate

*HIV and COVID-19:*
- People with HIV (especially advanced disease) at higher risk
- Vaccination highly effective
- Drug interactions between nirmatrelvir/ritonavir and ART
- Boosted PIs require alternative COVID treatment

**Global HIV:**

*UNAIDS 95-95-95 Targets:*
- 95% of people with HIV know their status
- 95% of diagnosed people on ART
- 95% of people on ART virally suppressed

*Implementation Science:*
- Differentiated service delivery models
- Community ART distribution
- Self-testing scale-up
- Same-day ART initiation

*Resistant HIV:*
- Pre-treatment drug resistance increasing in some regions
- Surveillance networks tracking NNRTI, INSTI resistance
- Implications for first-line regimen selection

**Cure Science Frontiers:**

*Ongoing Clinical Trials:*
- Combinations of bNAbs + LRAs
- CAR-T cells targeting HIV-infected cells
- Gene editing approaches (CRISPR)
- Therapeutic vaccines + immune checkpoint inhibitors

*Exceptional Responders:*
- Elite controllers: Host factors (HLA-B*57, TRIM5alpha)
- San Francisco patient, Barcelona patient: Additional possible cures
- Studying these individuals informs strategies

*Pediatric Cure:*
- Early ART may limit reservoir establishment
- Very early treatment can lead to ART-free remission in some
- Pediatric IMPAACT protocols

**Ending the Epidemic:**

*Domestic Initiatives:*
- Ending the HIV Epidemic (EHE) initiative targeting US hotspots
- Cluster detection and response
- Rapid ART initiation
- PrEP scale-up to high-risk populations

*Molecular HIV Surveillance:*
- Phylogenetic analysis identifies transmission networks
- Enables targeted prevention
- Ethical considerations regarding data use

*Stigma and Equity:*
- U=U messaging reduces stigma
- Addressing disparities by race, geography, gender identity
- Decriminalization advocacy
- Integration with other health services

**Future Directions:**

*Long-Acting Therapies:*
- Lenacapavir (every 6 months)
- Islatravir-based combinations (in development)
- Implantable devices

*HIV Vaccine:*
- Multiple candidates in trials
- mRNA platforms being explored
- Challenge: HIV diversity and immune evasion
- Passive immunization with bNAbs as bridge

*Prevention Innovation:*
- Long-acting injectable PrEP (cabotegravir)
- Dapivirine vaginal ring
- bNAbs for prevention
- Prevention effective vaccines the ultimate goal`,
      keyTerms: [
        { term: 'Lenacapavir', definition: 'First-in-class HIV capsid inhibitor administered every 6 months' },
        { term: '95-95-95 targets', definition: 'UNAIDS goals for diagnosis, treatment, and viral suppression coverage' },
        { term: 'Molecular HIV surveillance', definition: 'Use of viral genetic sequences to identify transmission networks and target prevention' },
        { term: 'Differentiated service delivery', definition: 'Tailored ART delivery models based on patient needs and stability' },
        { term: 'Cluster detection and response', definition: 'Identifying linked transmissions through molecular surveillance and intervening' },
      ],
      clinicalNotes: 'Expert HIV care requires staying current with rapidly evolving therapeutics, including long-acting agents and novel classes for treatment-experienced patients. Multimorbidity management in aging patients is increasingly central. Engagement with cure research through clinical trials advances the field. Public health leadership, including advocacy for PrEP access and stigma reduction (U=U), complements clinical care. The goal of ending the HIV epidemic is achievable with existing tools if implementation challenges are addressed.',
    },
  },
  media: [],
  citations: [
    {
      id: 'dhhs-hiv-guidelines-2024',
      type: 'website',
      title: 'Guidelines for the Use of Antiretroviral Agents in Adults and Adolescents with HIV',
      authors: ['Department of Health and Human Services'],
      source: 'AIDSinfo',
      license: 'Copyrighted',
    },
    {
      id: 'deeks-nature-2015',
      type: 'article',
      title: 'HIV infection',
      authors: ['Deeks SG', 'Overbaugh J', 'Phillips A', 'Buchbinder S'],
      source: 'Nature Reviews Disease Primers',
      license: 'Copyrighted',
    },
  ],
  crossReferences: [
    { targetId: 'infectious-disease-hepatitis', targetType: 'condition', relationship: 'related', label: 'Hepatitis' },
    { targetId: 'infectious-disease-infection-prevention', targetType: 'concept', relationship: 'related', label: 'Infection Prevention' },
    { targetId: 'infectious-disease-antibiotic-resistance', targetType: 'concept', relationship: 'related', label: 'Antimicrobial Resistance' },
  ],
  tags: {
    systems: ['infectious-disease', 'immunology'],
    topics: ['viral-infections', 'chronic-infections', 'immunodeficiency'],
    keywords: ['HIV', 'AIDS', 'ART', 'PrEP', 'CD4', 'viral load', 'cure research'],
    clinicalRelevance: 'critical',
  },
  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
