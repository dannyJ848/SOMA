/**
 * HIV/AIDS - Global Health Perspective
 *
 * Comprehensive content on HIV/AIDS as a global health challenge,
 * including epidemiology, prevention, treatment, and the global response.
 */

import { EducationalContent } from '../../types';

export const HIV_AIDS_GLOBAL: EducationalContent = {
  id: 'hiv-aids-global',
  type: 'concept',
  name: 'HIV/AIDS: A Global Health Challenge',
  alternateNames: ['Global HIV Epidemic', 'AIDS Pandemic', 'HIV Worldwide'],

  levels: {
    1: {
      level: 1,
      summary: 'HIV is a virus that attacks the body\'s immune system. Without treatment, it can lead to AIDS. Today, people with HIV can live long, healthy lives with daily medicine.',
      explanation: `HIV is a virus that has affected millions of people around the world. But there is good news - with treatment, people with HIV can stay healthy!

**What is HIV?**
- HIV stands for Human Immunodeficiency Virus
- It attacks your immune system (the part of your body that fights germs)
- Without treatment, HIV can weaken your immune system until you get very sick

**What is AIDS?**
- AIDS stands for Acquired Immunodeficiency Syndrome
- It happens when HIV has badly damaged the immune system
- A person with AIDS can get very sick from infections that healthy people can fight off
- With today's medicine, most people with HIV never develop AIDS

**How Does HIV Spread?**
HIV spreads through certain body fluids:
- Blood
- During sex without protection
- From mother to baby during pregnancy, birth, or breastfeeding
- Sharing needles

**HIV Does NOT Spread Through:**
- Hugging or shaking hands
- Sharing food or drinks
- Mosquito bites
- Toilet seats or swimming pools

**Important Facts:**
- About 39 million people worldwide have HIV
- Anyone can get HIV - it doesn't matter who you are
- There is no cure yet, but medicine helps people stay healthy
- People on treatment can live just as long as people without HIV
- People on treatment can have children without passing HIV to them

**Prevention:**
- Using condoms during sex
- Getting tested so you know your status
- Medicine can prevent getting HIV (PrEP)
- Never sharing needles`,
      keyTerms: [
        { term: 'HIV', definition: 'Human Immunodeficiency Virus - a virus that attacks the immune system' },
        { term: 'AIDS', definition: 'Acquired Immunodeficiency Syndrome - serious illness that can happen when HIV is not treated' },
        { term: 'immune system', definition: 'The part of your body that fights off germs and keeps you from getting sick' },
      ],
      analogies: [
        'Your immune system is like an army protecting your body. HIV attacks the soldiers (cells) in that army, making it harder to fight off other germs.',
        'Taking HIV medicine every day is like recharging your phone daily - it keeps your immune system powered up.',
      ],
      examples: [
        'Magic Johnson announced he had HIV in 1991. With treatment, he has stayed healthy for over 30 years.',
        'Babies born to mothers with HIV can be protected with medicine, so the baby doesn\'t get HIV.',
      ],
    },
    2: {
      level: 2,
      summary: 'HIV remains a significant global health challenge with approximately 39 million people living with HIV worldwide. Antiretroviral therapy has transformed HIV from a fatal disease to a manageable chronic condition, and prevention tools including PrEP have expanded.',
      explanation: `HIV (Human Immunodeficiency Virus) infects immune cells called CD4+ T lymphocytes. Without treatment, it progressively weakens the immune system, leading to AIDS and death. However, antiretroviral therapy (ART) has revolutionized outcomes.

**Global Burden (2023 estimates):**
- 39 million people living with HIV globally
- 1.3 million new HIV infections per year
- 630,000 AIDS-related deaths per year
- Sub-Saharan Africa remains the most affected region (two-thirds of cases)

**HIV Transmission:**
- Sexual transmission (most common globally)
- Blood exposure (needle sharing, occupational exposure)
- Mother-to-child transmission (pregnancy, delivery, breastfeeding)
- Blood transfusion (rare in countries with screening)

**Disease Progression Without Treatment:**
1. **Acute HIV infection**: 2-4 weeks after exposure, flu-like symptoms
2. **Clinical latency**: Virus replicates slowly, may have no symptoms for years
3. **AIDS**: CD4 count drops below 200 cells/mm3, opportunistic infections occur

**Treatment - Antiretroviral Therapy (ART):**
- Suppresses viral replication to undetectable levels
- Immune system can recover
- Dramatically reduces transmission risk ("Undetectable = Untransmittable" or U=U)
- Requires daily adherence (though long-acting options emerging)
- Most people on ART have near-normal life expectancy

**Prevention Strategies:**
- **Condoms**: Effective barrier method
- **PrEP (Pre-Exposure Prophylaxis)**: Daily pill or injection prevents HIV acquisition
- **PEP (Post-Exposure Prophylaxis)**: Emergency treatment within 72 hours of exposure
- **PMTCT (Prevention of Mother-to-Child Transmission)**: ART during pregnancy, delivery, and breastfeeding
- **Harm reduction**: Needle/syringe programs for people who inject drugs

**Testing and Status Awareness:**
- Regular HIV testing is recommended
- Rapid tests provide results in minutes
- Self-testing kits are increasingly available
- Knowing your status enables treatment and prevents transmission

**Global Response - UNAIDS 95-95-95 Targets by 2025:**
- 95% of people with HIV know their status
- 95% of diagnosed people are on treatment
- 95% of those on treatment are virally suppressed`,
      keyTerms: [
        { term: 'CD4 cells', definition: 'Immune cells that HIV attacks and destroys, also called T-helper cells or CD4+ T lymphocytes' },
        { term: 'ART', definition: 'Antiretroviral Therapy - combination of medicines that control HIV' },
        { term: 'viral suppression', definition: 'When HIV medication reduces the virus in blood to very low or undetectable levels' },
        { term: 'PrEP', definition: 'Pre-Exposure Prophylaxis - medicine taken before potential HIV exposure to prevent infection' },
        { term: 'U=U', definition: 'Undetectable = Untransmittable - people with undetectable viral load cannot sexually transmit HIV' },
      ],
      analogies: [
        'ART is like putting HIV in a locked box - the virus is still there but it can\'t get out and cause damage.',
      ],
    },
    3: {
      level: 3,
      summary: 'The global HIV epidemic involves complex interactions between biological, behavioral, and structural factors. The response requires biomedical interventions (ART, PrEP), behavioral interventions, and addressing social determinants including stigma, discrimination, and legal barriers.',
      explanation: `**Epidemiologic Patterns:**

*Global Distribution:*
| Region | PLHIV (millions) | New Infections | Key Populations |
|--------|-----------------|----------------|-----------------|
| Eastern and Southern Africa | 20.6 | 500,000 | General population, young women |
| Western and Central Africa | 4.8 | 160,000 | General population, key populations |
| Asia and Pacific | 6.5 | 300,000 | Key populations, migrants |
| Latin America | 2.2 | 110,000 | MSM, transgender women |
| Eastern Europe/Central Asia | 2.0 | 160,000 | PWID, MSM |
| Western/Central Europe, N. America | 2.3 | 67,000 | MSM |

*Key Populations:*
- Men who have sex with men (MSM)
- People who inject drugs (PWID)
- Sex workers
- Transgender women
- Incarcerated people
- Migrants and mobile populations

**Pathophysiology:**

*HIV Structure and Replication:*
- Retrovirus with RNA genome
- Uses reverse transcriptase to create DNA copy
- Integrates into host cell genome (provirus)
- Primary target: CD4+ T lymphocytes
- Also infects macrophages, dendritic cells

*Natural History:*
| Stage | CD4 Count | Viral Load | Clinical Features |
|-------|-----------|------------|-------------------|
| Acute infection | Transient drop | Very high (millions) | Flu-like illness, highly infectious |
| Clinical latency | Gradual decline | Setpoint (variable) | Often asymptomatic |
| AIDS | <200/mm3 | High | Opportunistic infections, malignancies |

*AIDS-Defining Conditions:*
- Opportunistic infections: PCP, toxoplasmosis, cryptococcal meningitis, CMV, MAC
- Malignancies: Kaposi sarcoma, non-Hodgkin lymphoma, cervical cancer
- Wasting syndrome
- HIV encephalopathy

**Antiretroviral Therapy:**

*Drug Classes:*
- NRTIs (nucleoside reverse transcriptase inhibitors)
- NNRTIs (non-nucleoside reverse transcriptase inhibitors)
- Protease inhibitors (PIs)
- Integrase strand transfer inhibitors (INSTIs)
- Entry inhibitors

*Modern First-Line Regimens:*
- Typically INSTI-based (e.g., dolutegravir, bictegravir)
- Fixed-dose combinations improve adherence
- TDF/FTC/DTG or TAF/FTC/BIC common

*Treatment Goals:*
- Viral suppression (<50-200 copies/mL)
- Immune reconstitution
- Prevent opportunistic infections
- Reduce transmission
- Maintain quality of life

**Prevention Technologies:**

*Biomedical Prevention:*
| Intervention | Efficacy | Populations |
|--------------|----------|-------------|
| Daily oral PrEP (TDF/FTC) | >90% with adherence | MSM, heterosexual, PWID |
| Long-acting injectable PrEP (CAB-LA) | Superior to daily oral | All at-risk populations |
| Male circumcision | 50-60% | Heterosexual men in high-prevalence settings |
| ART as prevention (treatment = prevention) | 100% with suppression | PLHIV with undetectable VL |

*Structural Interventions:*
- Decriminalization of key populations
- Anti-discrimination laws
- Universal health coverage
- HIV integration with other services

**Stigma and Discrimination:**
- Barriers to testing, disclosure, and treatment adherence
- Criminalization of HIV transmission in some jurisdictions
- Healthcare discrimination
- Self-stigma and mental health impact`,
      keyTerms: [
        { term: 'opportunistic infection', definition: 'Infections that occur when the immune system is weakened and cannot defend against normally harmless microbes' },
        { term: 'integrase', definition: 'HIV enzyme that inserts viral DNA into the human cell genome' },
        { term: 'key populations', definition: 'Groups at increased HIV risk due to specific behaviors or conditions that may be criminalized or marginalized' },
        { term: 'CAB-LA', definition: 'Cabotegravir long-acting injectable PrEP, given every 2 months' },
      ],
      clinicalNotes: 'Clinical considerations: (1) Recommend HIV testing at least once for all adults, more frequently for those at ongoing risk, (2) Start ART regardless of CD4 count, (3) Assess and offer PrEP to at-risk individuals, (4) Screen for STIs, hepatitis, TB, and mental health, (5) Address adherence barriers.',
    },
    4: {
      level: 4,
      summary: 'Ending the HIV epidemic requires precision epidemiology, optimized biomedical interventions, health systems strengthening, and addressing structural drivers. Progress has been substantial but inequitable, with key populations and certain regions lagging behind global targets.',
      explanation: `**Virology and Immunology:**

*HIV-1 Subtypes and Recombinants:*
- Subtype C: Most prevalent globally (Southern/Eastern Africa, India)
- Subtype B: Predominant in Western Europe, Americas
- Circulating recombinant forms (CRFs): Important in epidemic dynamics
- Implications for vaccine development and drug resistance

*Immunopathogenesis:*
- Gut-associated lymphoid tissue (GALT) depletion in acute infection
- Chronic immune activation and inflammation
- Microbial translocation from gut damage
- Immune exhaustion (PD-1, TIM-3 expression)
- Residual immune dysfunction despite ART

*The HIV Reservoir:*
- Latently infected resting CD4 T cells
- Half-life ~44 months (extremely stable)
- Barrier to cure
- Sites: lymphoid tissue, gut, CNS, genital tract
- Established within days of infection

**Advanced Treatment Considerations:**

*Long-Acting ART:*
- Cabotegravir/rilpivirine injection every 2 months
- Lenacapavir every 6 months
- Improved adherence, reduced stigma
- Considerations for drug levels and resistance

*Treatment Optimization:*
- Switch strategies to reduce toxicity
- Dual therapy options
- Weekly oral options in development

*Drug Resistance:*
- Pretreatment resistance to NNRTIs increasing (>10% threshold in many regions)
- Acquired resistance with poor adherence
- Importance of viral load monitoring
- Integrase resistance less common but concerning

**HIV and Comorbidities:**

*Aging with HIV:*
- Cardiovascular disease risk increased
- Chronic inflammation despite viral suppression
- Polypharmacy considerations
- Frailty and neurocognitive decline
- Cancer screening

*Non-AIDS-Defining Cancers:*
- Lung, liver, anal, Hodgkin lymphoma increased
- HPV-related cancers
- Screening and prevention

**Epidemic Modeling and Program Science:**

*Transmission Dynamics:*
- Phylogenetic analysis for transmission clusters
- Molecular epidemiology informing prevention
- Population viral load as metric
- Core group and bridge population concepts

*Combination Prevention:*
- Mathematical models optimizing intervention mix
- Setting-specific package of interventions
- Cost-effectiveness analysis
- Implementation science

**Global Financing and Governance:**

*Financing Landscape:*
- $20+ billion available for HIV response globally
- PEPFAR: Largest bilateral health initiative in history
- Global Fund: Multilateral mechanism
- Domestic financing increasing but gaps remain

*Transition and Sustainability:*
- Donor transition in middle-income countries
- Domestic resource mobilization
- Health system integration
- Efficiency gains

**Equity and Rights-Based Approach:**

*Disparities:*
- Children: Only 57% on treatment vs 77% adults
- Adolescent girls/young women in Africa: High incidence
- Key populations: 65% of new infections, but services often lacking
- Stigma index: Measuring experienced discrimination

*Human Rights:*
- Criminalization of HIV transmission
- Age of consent barriers for testing and treatment
- Laws criminalizing key populations
- Right to health framework`,
      keyTerms: [
        { term: 'HIV reservoir', definition: 'Pool of latently infected cells that persist despite antiretroviral therapy and prevent cure' },
        { term: 'phylogenetic analysis', definition: 'Using genetic sequences to understand viral transmission patterns and relationships' },
        { term: 'PEPFAR', definition: 'President\'s Emergency Plan for AIDS Relief - US government global HIV program' },
        { term: 'molecular epidemiology', definition: 'Use of genetic data to study disease distribution and transmission' },
      ],
      clinicalNotes: 'Advanced clinical considerations: (1) Consider long-acting options for patients with adherence challenges, (2) Screen for non-AIDS malignancies and cardiovascular risk, (3) Resistance testing before ART initiation and with virologic failure, (4) Recognize manifestations of immune reconstitution inflammatory syndrome (IRIS).',
    },
    5: {
      level: 5,
      summary: 'The HIV/AIDS response exemplifies global health\'s evolution, with lessons for pandemic preparedness, health systems, and social justice. Current frontiers include cure research, vaccine development, and addressing structural drivers through transformative approaches.',
      explanation: `**Cure Research:**

*Cure Strategies:*
| Approach | Mechanism | Status |
|----------|-----------|--------|
| "Shock and kill" | Reactivate latent virus, then clear | Mixed trial results |
| Gene therapy | CCR5 disruption (gene editing) | Case reports, trials ongoing |
| Broadly neutralizing antibodies | Clear infected cells, reduce reservoir | Trials ongoing |
| Therapeutic vaccines | Immune-mediated control | Limited efficacy to date |
| Allogeneic stem cell transplant | Replace immune system | Curative cases (Berlin, London, Dusseldorf patients) |

*Barriers to Cure:*
- Reservoir heterogeneity and anatomic sanctuaries
- Latency reversal without killing
- Immune exhaustion and dysfunction
- Replication-competent vs. defective proviruses
- Ethical considerations for cure trials

**Vaccine Development:**

*Historical Challenges:*
- HIV diversity and mutation rate
- Envelope glycoprotein conformational masking
- Lack of correlates of protection
- Natural immunity rarely sterilizing

*Current Approaches:*
- Broadly neutralizing antibodies (bnAbs) and germline targeting
- Mosaic immunogens
- mRNA platforms
- Passive immunization with bnAbs
- Efficacy trials: HVTN 706 (Mosaico), PrEPVacc

*Broadly Neutralizing Antibodies:*
- VRC01, 3BNC117, 10-1074 classes
- Passive immunization for prevention
- Therapeutic potential
- Combination approaches

**Structural Determinants and Syndemics:**

*Syndemic Framework:*
- HIV intersecting with:
  - Mental health and substance use
  - Sexual violence
  - Poverty and food insecurity
  - Incarceration
  - Migration

*Structural Interventions Evidence:*
- Cash transfers reducing HIV risk behaviors
- Housing as HIV prevention
- Decriminalization impact on key population access
- School-based interventions for young women
- Microfinance and economic empowerment

**Global Health Governance:**

*Evolution of the HIV Response:*
- AIDS exceptionalism debate
- Global governance innovations (UNAIDS, Global Fund)
- Community and civil society role
- Affected community leadership

*Lessons for Global Health:*
- Community engagement and advocacy
- Treatment access as human right
- Generic manufacturing and TRIPS flexibilities
- Multisectoral response
- Sustained political commitment

*Current Governance Debates:*
- Integration vs. vertical programs
- Transition from donor to domestic financing
- Data systems and accountability
- Universal health coverage and HIV

**Frontier Science:**

*Novel Technologies:*
- Implantable drug delivery devices
- Gene therapy for CCR5 disruption
- CRISPR-based approaches
- Therapeutic vaccines with checkpoint inhibitors

*Implementation Science Priorities:*
- Differentiated service delivery models
- Self-testing and self-care
- Digital health interventions
- Integration with primary care

*Epidemiological Frontiers:*
- Microepidemic understanding
- Network-based interventions
- Geospatial analysis
- Real-time phylogenetics for outbreak response

**Ending AIDS by 2030:**

*What Would It Take?*
- 90% prevention coverage for key populations
- Same-day ART initiation
- Community-led services
- Removal of legal barriers
- Sustained financing
- Addressing stigma and discrimination

*Modeling Projections:*
- On current trajectory: miss 2030 targets
- With intensified action: achievable
- Without structural changes: persistent inequities`,
      keyTerms: [
        { term: 'broadly neutralizing antibody', definition: 'Antibodies that can neutralize multiple HIV strains across subtypes by targeting conserved epitopes' },
        { term: 'latency reversal agent', definition: 'Compounds that reactivate latent HIV in reservoir cells, potentially enabling clearance' },
        { term: 'differentiated service delivery', definition: 'Client-centered approach adapting HIV services to the needs of different groups' },
        { term: 'AIDS exceptionalism', definition: 'Debate over whether HIV requires special treatment in global health policy or should be integrated with other health services' },
      ],
      clinicalNotes: 'For HIV researchers and policy advisors: (1) Cure research requires careful ethical frameworks given risks, (2) Implementation research essential to translate efficacious interventions, (3) Community-led research increasingly important, (4) Intersectional approaches needed for syndemics.',
    },
  },

  media: [
    {
      id: 'hiv-global-burden-map',
      type: 'diagram',
      filename: 'hiv-prevalence-global.svg',
      title: 'Global HIV Prevalence',
      description: 'World map showing HIV prevalence by country',
    },
    {
      id: 'hiv-treatment-cascade',
      type: 'diagram',
      filename: 'hiv-care-cascade.svg',
      title: 'HIV Care Cascade',
      description: 'Diagram showing 95-95-95 targets and progress',
    },
  ],

  citations: [
    {
      id: 'unaids-global-report',
      type: 'website',
      title: 'Global AIDS Update',
      source: 'UNAIDS',
      url: 'https://www.unaids.org/en/resources/documents',
      license: 'Open Access',
    },
    {
      id: 'who-hiv-guidelines',
      type: 'website',
      title: 'HIV/AIDS Guidelines',
      source: 'World Health Organization',
      url: 'https://www.who.int/teams/global-hiv-hepatitis-and-stis-programmes/hiv/treatment',
      license: 'CC BY-NC-SA 3.0 IGO',
    },
  ],

  crossReferences: [
    { targetId: 'tuberculosis-global', targetType: 'topic', relationship: 'related', label: 'Tuberculosis (TB-HIV co-infection)' },
    { targetId: 'global-health-challenges', targetType: 'topic', relationship: 'parent', label: 'Global Health Challenges' },
    { targetId: 'vaccine-equity', targetType: 'topic', relationship: 'see-also', label: 'Vaccine Equity' },
  ],

  tags: {
    systems: ['infectious-disease', 'immunology'],
    topics: ['HIV', 'AIDS', 'global-health', 'sexually-transmitted-infections'],
    keywords: ['HIV', 'AIDS', 'antiretroviral', 'PrEP', 'viral suppression', 'U=U'],
    clinicalRelevance: 'high',
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
