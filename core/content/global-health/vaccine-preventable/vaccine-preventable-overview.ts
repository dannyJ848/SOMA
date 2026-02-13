/**
 * Vaccine-Preventable Diseases Overview
 *
 * Educational content about diseases that can be prevented through vaccination,
 * global immunization programs, and the impact of vaccines on public health.
 */

import { EducationalContent } from '../../types';

export const VACCINE_PREVENTABLE_OVERVIEW: EducationalContent = {
  id: 'vaccine-preventable-overview',
  type: 'concept',
  name: 'Vaccine-Preventable Diseases Overview',
  alternateNames: ['VPDs', 'Immunization-Preventable Diseases'],

  levels: {
    1: {
      level: 1,
      summary: 'Vaccine-preventable diseases are illnesses that can be stopped by getting vaccinated. Vaccines teach your body to fight off germs before they can make you sick.',
      explanation: `Vaccines are one of the greatest health discoveries ever made! They protect us from many dangerous diseases.

**What Are Vaccines?**
Vaccines are like training for your immune system. They teach your body to recognize and fight specific germs, so if you ever encounter those germs, your body already knows how to beat them!

**Diseases Vaccines Can Prevent:**

**1. Childhood Diseases:**
- Measles - causes rash, fever, can damage brain
- Mumps - swells face and can cause deafness
- Whooping cough - makes you cough so hard you can't breathe
- Chickenpox - itchy blisters all over body

**2. Serious Infections:**
- Polio - can paralyze arms and legs forever
- Tetanus - makes muscles lock up painfully
- Diphtheria - blocks your throat so you can't breathe
- Hepatitis B - damages the liver

**3. Common but Dangerous:**
- Flu - can be deadly, especially for elderly
- Pneumonia - serious lung infection
- Rotavirus - severe diarrhea in babies

**How Vaccines Work:**
1. A weak or dead germ (or piece of one) goes into your body
2. Your immune system learns to recognize it
3. Your body makes "memory cells" that remember the germ
4. If the real germ ever attacks, your body fights it off quickly!

**Why Vaccines Matter:**
- They've saved millions of lives
- Smallpox was completely eliminated by vaccines
- Polio is almost gone from the world
- When enough people are vaccinated, diseases can't spread easily`,
      keyTerms: [
        { term: 'vaccine', definition: 'A medicine that trains your body to fight off a specific disease' },
        { term: 'immune system', definition: 'Your body\'s defense system against germs' },
        { term: 'immunization', definition: 'Getting a vaccine to become protected against a disease' },
      ],
      analogies: [
        'A vaccine is like a wanted poster for your immune system - it shows your body what the bad guys look like so it can catch them!',
        'Getting vaccinated is like a fire drill - you practice fighting the disease so you\'re ready if it really comes.',
      ],
      examples: [
        'Before the measles vaccine, almost every child got measles. Now it\'s rare in many countries.',
        'The polio vaccine has nearly eliminated a disease that used to paralyze thousands of children.',
      ],
    },
    2: {
      level: 2,
      summary: 'Vaccine-preventable diseases (VPDs) are infectious diseases for which effective vaccines exist. Global immunization programs have dramatically reduced or eliminated many VPDs, preventing millions of deaths annually, though challenges remain in achieving universal coverage.',
      explanation: `Vaccines represent one of the most cost-effective public health interventions, preventing an estimated 2-3 million deaths annually, with potential to prevent 1.5 million more with improved coverage.

**Categories of Vaccine-Preventable Diseases:**

**1. Diseases Targeted by Routine Childhood Immunization:**
| Disease | Vaccine | Global Cases (Pre-vaccine era) |
|---------|---------|------------------------------|
| Measles | MMR | 2+ million deaths/year |
| Polio | OPV/IPV | 350,000 paralyzed/year |
| Tetanus | DTP | 1 million deaths/year |
| Pertussis | DTP | 500,000 deaths/year |
| Diphtheria | DTP | 40,000 deaths/year |
| Hepatitis B | HepB | 1 million deaths/year (liver cancer) |

**2. Additional Childhood Vaccines:**
- Rotavirus (severe diarrhea)
- Haemophilus influenzae type b (Hib) - meningitis, pneumonia
- Pneumococcal disease
- Varicella (chickenpox)
- Hepatitis A

**3. Adolescent/Adult Vaccines:**
- HPV (prevents cervical and other cancers)
- Meningococcal disease
- Influenza (yearly)
- COVID-19

**4. Travel/Special Population Vaccines:**
- Yellow fever
- Typhoid
- Japanese encephalitis
- Rabies

**Global Immunization Achievements:**

**Eradication:**
- Smallpox (1980) - first disease eradicated by vaccination
- Rinderpest (cattle, 2011)

**Near-Elimination:**
- Polio: From 350,000 cases (1988) to <100 (2023)
- Maternal and neonatal tetanus: Eliminated in most countries

**Dramatic Reductions:**
- Measles deaths down 73% (2000-2018)
- Hib meningitis nearly eliminated in countries with vaccine

**How Vaccines Create Immunity:**

**Types of Vaccines:**
1. *Live attenuated*: Weakened live germs (MMR, oral polio)
2. *Inactivated*: Killed germs (flu shot, hepatitis A)
3. *Subunit/conjugate*: Pieces of germs (HepB, Hib, pneumococcal)
4. *Toxoid*: Inactivated toxins (tetanus, diphtheria)
5. *mRNA*: Genetic instructions (COVID-19)

**Herd Immunity:**
When enough people are vaccinated, diseases can't spread easily, protecting even unvaccinated people. Threshold varies by disease (measles needs 95%, polio needs 80-85%).

**Remaining Challenges:**
- Reaching remote and marginalized populations
- Vaccine hesitancy and misinformation
- Cold chain requirements
- Funding gaps
- Conflict and displacement disrupting programs`,
      keyTerms: [
        { term: 'herd immunity', definition: 'When enough people are immune to stop disease spread in a community', pronunciation: 'herd im-MYOO-nit-ee' },
        { term: 'DTP/DPT', definition: 'Combined vaccine against diphtheria, tetanus, and pertussis (whooping cough)' },
        { term: 'cold chain', definition: 'System for keeping vaccines at proper temperature from manufacture to administration' },
        { term: 'live attenuated', definition: 'Vaccine made from weakened (but still living) versions of the disease-causing organism' },
      ],
      analogies: [
        'Herd immunity works like a firebreak - if enough trees are removed (people vaccinated), the fire (disease) can\'t spread across the forest (population).',
      ],
    },
    3: {
      level: 3,
      summary: 'VPDs encompass a spectrum of infectious diseases preventable through active immunization. Global immunization architecture, anchored by WHO recommendations and supported by organizations like Gavi, aims to achieve universal coverage while addressing equity gaps and emerging challenges.',
      explanation: `Immunization is fundamental to achieving Sustainable Development Goal 3 (good health and well-being) and preventing an estimated 154 million deaths from 1974-2024 through the Expanded Programme on Immunization (EPI).

**Global Immunization Architecture:**

**WHO Immunization Recommendations:**
The Strategic Advisory Group of Experts (SAGE) guides global policy.

**Core EPI Vaccines (WHO-recommended for all countries):**
| Vaccine | Target Disease | Schedule |
|---------|---------------|----------|
| BCG | Tuberculosis | Birth |
| HepB | Hepatitis B | Birth + series |
| DTP | Diphtheria, tetanus, pertussis | 6, 10, 14 weeks |
| Hib | H. influenzae type b | 6, 10, 14 weeks |
| Polio | Poliomyelitis | OPV or IPV series |
| PCV | Pneumococcal disease | 6, 10, 14 weeks |
| Rotavirus | Rotavirus gastroenteritis | 6, 10 weeks |
| Measles | Measles | 9 and 15 months |
| Rubella | Rubella | Combined with measles |

**Additional WHO-Recommended Vaccines:**
- HPV (girls 9-14)
- Yellow fever (endemic areas)
- Meningococcal (meningitis belt)
- Japanese encephalitis (endemic areas)
- Hepatitis A (intermediate/high endemicity)
- Typhoid (high burden areas)
- Cholera (endemic/outbreak settings)
- Malaria (Plasmodium falciparum regions)

**Immunization Coverage Indicators:**

**Key Metrics:**
- DTP3: Third dose of DTP - proxy for immunization system strength
- MCV1: First dose measles-containing vaccine
- Zero-dose children: Never received DTP1

**Global Coverage (2022):**
- DTP3: 84% (down from 86% pre-COVID)
- MCV1: 83%
- Zero-dose: 14.3 million children

**Equity Gaps:**
Coverage varies dramatically by:
- Income (low-income countries: 72% DTP3)
- Geography (urban vs. rural)
- Wealth quintile
- Maternal education

**Immunology of Vaccination:**

**Primary Response:**
1. Antigen presentation to T cells
2. B cell activation
3. Antibody production (IgM, then IgG)
4. Memory cell formation

**Anamnestic (Booster) Response:**
- Faster and stronger than primary
- Memory B cells rapidly differentiate
- Higher affinity antibodies
- Basis for booster recommendations

**Correlates of Protection:**
| Vaccine | Primary Correlate |
|---------|------------------|
| Hepatitis B | Anti-HBs >10 mIU/mL |
| Measles | Neutralizing antibody |
| Tetanus | Anti-toxin >0.1 IU/mL |
| Pneumococcal | Serotype-specific IgG |

**Challenges and Strategies:**

**Vaccine Hesitancy:**
- Identified by WHO as top 10 global health threat
- Misinformation spread via social media
- Addressing through trusted messengers and tailored communication

**Missed Opportunities:**
- Healthcare contacts without vaccination offered
- Reducing these could significantly increase coverage

**Supply Chain:**
- Cold chain maintenance (2-8°C most vaccines)
- Ultra-cold requirements (mRNA vaccines)
- Last-mile delivery challenges

**New Vaccine Introduction:**
- Gavi supports introduction in low-income countries
- WHO prequalification ensures quality
- Country readiness assessments needed`,
      keyTerms: [
        { term: 'Expanded Programme on Immunization (EPI)', definition: 'WHO-initiated global program to ensure universal access to vaccines', pronunciation: 'ee-pee-eye' },
        { term: 'SAGE', definition: 'Strategic Advisory Group of Experts - advises WHO on immunization policy' },
        { term: 'correlate of protection', definition: 'Immune response marker associated with vaccine-induced protection' },
        { term: 'zero-dose children', definition: 'Children who have never received any routine vaccines' },
      ],
      clinicalNotes: 'Check immunization status at every visit. Catch-up schedules available for incomplete vaccination. Consider accelerated schedules for travel or outbreak response. Report adverse events following immunization (AEFI).',
    },
    4: {
      level: 4,
      summary: 'The VPD landscape involves complex interactions between vaccine immunobiology, epidemiological dynamics, health system capacity, and sociopolitical factors. Achieving IA2030 targets requires addressing immunity gaps, optimizing schedules, and leveraging new vaccine technologies.',
      explanation: `**Immunization Agenda 2030 (IA2030):**

**Vision:** A world where everyone, everywhere, at every age, fully benefits from vaccines.

**Strategic Priorities:**
1. Immunization programs for primary health care and UHC
2. Commitment and demand
3. Coverage and equity
4. Life-course and integration
5. Outbreaks and emergencies
6. Supply and sustainability
7. Research and innovation

**Impact Goals (2030):**
- 50% reduction in missed vaccinations
- 90% coverage for essential vaccines
- 500 new vaccine introductions

**Epidemiological Dynamics:**

**Reproduction Number and Herd Immunity:**
| Disease | R0 | Herd Immunity Threshold |
|---------|----|-----------------------|
| Measles | 12-18 | 92-95% |
| Pertussis | 5-17 | 92-94% |
| Polio | 5-7 | 80-85% |
| Diphtheria | 6-7 | 85% |
| COVID-19 (original) | 2-3 | 60-70% |

**Susceptible Accumulation:**
- Sub-optimal coverage creates immunity gaps
- Susceptibles accumulate until outbreak threshold
- Birth cohort analysis critical for planning
- Supplementary immunization activities (SIAs) address gaps

**Outbreak Response:**
- Ring vaccination strategy
- Mass campaigns
- School-based vaccination
- Reactive case detection

**Vaccine Immunology - Advanced:**

**B Cell and Antibody Response:**
- Germinal center formation
- Somatic hypermutation and affinity maturation
- Class switching
- Long-lived plasma cells in bone marrow
- Memory B cell persistence

**T Cell Responses:**
- CD4+ helper T cells (Th1/Th2/Tfh)
- CD8+ cytotoxic T cells (important for viral vaccines)
- Regulatory T cells modulating response
- Tissue-resident memory T cells

**Adjuvants:**
| Adjuvant | Mechanism | Vaccines |
|----------|-----------|----------|
| Alum | Depot effect, inflammasome | Many childhood vaccines |
| AS01B | MPL + QS-21 | Shingrix, RTS,S |
| AS04 | MPL + alum | HPV (Cervarix), HepB (Fendrix) |
| MF59 | Squalene emulsion | Flu (Fluad) |
| CpG 1018 | TLR9 agonist | HepB (Heplisav-B) |

**Vaccine Platforms:**

**Traditional:**
- Live attenuated (MMR, varicella, rotavirus)
- Inactivated whole pathogen (IPV, hepatitis A)
- Protein subunit (HepB, acellular pertussis)
- Polysaccharide conjugates (Hib, PCV, MenACWY)
- Toxoid (tetanus, diphtheria)

**Novel Platforms:**
- mRNA (Pfizer, Moderna COVID-19)
- Viral vector (J&J, AstraZeneca COVID-19; Ebola)
- Virus-like particles (HPV)
- Recombinant proteins with novel adjuvants (Novavax)
- Self-amplifying RNA (in development)

**Schedule Optimization:**

**Considerations:**
- Maternal antibody interference
- Immunological maturity
- Disease epidemiology
- Practical feasibility
- Co-administration compatibility

**Alternative Approaches:**
- Fractional dosing (yellow fever, IPV)
- Delayed schedules (not recommended but studied)
- Accelerated schedules for high-risk
- Extended intervals (may enhance response)

**Programmatic Challenges:**

**Supply Chain:**
- Vaccine vial monitor (VVM) technology
- Controlled temperature chain (CTC)
- Multi-dose vial policies
- Wastage reduction

**Health Workforce:**
- Training and supervision
- Motivation and retention
- Task shifting/sharing
- Data management capacity`,
      keyTerms: [
        { term: 'germinal center', definition: 'Site in lymph nodes where B cells proliferate and undergo affinity maturation' },
        { term: 'affinity maturation', definition: 'Process improving antibody binding strength over time' },
        { term: 'supplementary immunization activity', definition: 'Mass vaccination campaign targeting specific age groups to close immunity gaps' },
        { term: 'vaccine vial monitor', definition: 'Heat-sensitive label on vaccine vials indicating exposure to heat' },
      ],
      clinicalNotes: 'Understand immunological basis for timing recommendations. Multiple simultaneous vaccines are safe and effective. Modified schedules may be needed for immunocompromised. Document all vaccinations in registries.',
    },
    5: {
      level: 5,
      summary: 'VPD control exemplifies complex adaptive systems requiring integration of cutting-edge immunology, implementation science, behavioral science, and health systems research. Transformative technologies and approaches offer potential for disease elimination while raising equity and governance challenges.',
      explanation: `**Theoretical Frameworks:**

**Systems Thinking in Immunization:**
- Feedback loops (coverage -> herd immunity -> reduced perceived risk -> lower coverage)
- Emergent properties of vaccination programs
- Unintended consequences (e.g., age shift in disease)
- Resilience and adaptation

**Evolutionary Considerations:**
- Pathogen evolution under vaccine pressure
- Antigenic drift and shift (influenza)
- Serotype replacement (pneumococcus)
- Variant emergence (SARS-CoV-2)

**Implications:**
- Vaccine composition updates (annual flu, variant-adapted COVID)
- Broader coverage vaccines (next-gen universal flu)
- Monitoring for escape mutations

**Cutting-Edge Immunology:**

**Systems Vaccinology:**
- High-dimensional immune profiling
- Transcriptomics for correlates
- Predicting vaccine response
- Individual optimization

**Novel Concepts:**
- Trained immunity (innate immune memory)
- Mucosal immunity strategies
- Broadly neutralizing antibodies
- Heterologous boosting effects

**Next-Generation Vaccines:**

**In Development:**
| Vaccine Target | Approach | Status |
|---------------|----------|--------|
| Universal influenza | Conserved epitopes | Phase II/III |
| Pan-coronavirus | Multiple spike antigens | Preclinical/Phase I |
| HIV | Multiple approaches | Phase I-III ongoing |
| TB (improved) | M72/AS01E | Phase III |
| Norovirus | VLP-based | Phase II |
| RSV | Prefusion F protein | Approved (older adults) |

**Transformative Technologies:**
- Thermostable formulations (removing cold chain)
- Needle-free delivery (patches, oral, nasal)
- Self-amplifying RNA platforms
- Controlled human infection models for development

**Implementation Science:**

**Determinants of Vaccine Uptake:**
- Individual level: knowledge, attitudes, beliefs
- Interpersonal: social norms, peer influence
- Community: trust in institutions, cultural factors
- Health system: access, provider practices
- Policy: mandates, incentives, barriers

**Behavioral Insights:**
- Defaults and nudges
- Reminder/recall systems
- Addressing specific concerns (not general education)
- Motivational interviewing techniques
- Leveraging trusted voices

**Equity Focus:**
- Zero-dose identification and reaching
- Gender barriers (reaching girls for HPV)
- Urban poor and mobile populations
- Disability-inclusive immunization
- Humanitarian settings

**Global Health Governance:**

**COVAX and Lessons:**
- Multilateral vaccine access mechanism
- Achievements and shortcomings
- Implications for future pandemic response

**Intellectual Property:**
- TRIPS flexibilities
- Technology transfer debates
- Local manufacturing capacity
- mRNA hubs

**Health Security:**
- Vaccines as medical countermeasures
- Stockpiling strategies
- Emergency use authorization pathways
- Equity in access

**Elimination and Eradication:**

**Current Programs:**
| Disease | Status | Challenges |
|---------|--------|------------|
| Polio | Near eradication | Afghanistan, Pakistan; cVDPV |
| Measles | Elimination in some regions | Requires 95% coverage |
| Rubella | Elimination targets | Program integration |
| Maternal/neonatal tetanus | Near elimination | Reaching last populations |

**Prerequisites for Eradication:**
- No animal reservoir
- Effective vaccine
- Lifelong immunity possible
- Epidemiological feasibility
- Political will and resources

**Research Frontiers:**

**Key Questions:**
- Optimal schedules across life course
- Duration of protection and booster needs
- Improving responses in immunocompromised
- Predicting individual vaccine responses
- Mucosal immunity strategies

**Emerging Priorities:**
- Antimicrobial resistance and vaccines
- Cancer prevention vaccines (beyond HPV)
- Therapeutic vaccines
- Vaccines for noncommunicable diseases

**Ethical Considerations:**

**Key Issues:**
- Mandatory vaccination debates
- Risk communication and transparency
- Compensation for rare adverse events
- Priority setting for limited supply
- Research ethics (challenge studies, vulnerable populations)

**Framework:**
- Solidarity and equity
- Transparency and accountability
- Effectiveness and efficiency
- Respect for autonomy`,
      keyTerms: [
        { term: 'systems vaccinology', definition: 'Application of systems biology approaches to understand and predict vaccine responses' },
        { term: 'trained immunity', definition: 'Long-term functional reprogramming of innate immune cells' },
        { term: 'circulating vaccine-derived poliovirus (cVDPV)', definition: 'Mutated oral polio vaccine virus capable of causing paralysis', pronunciation: 'see-vee-dee-pee-vee' },
        { term: 'controlled human infection model', definition: 'Deliberate infection of volunteers for vaccine/treatment research', pronunciation: 'CHIM' },
      ],
      clinicalNotes: 'Engage with evolving evidence on schedules and boosters. Participate in adverse event monitoring and reporting. Advocate for equitable access. Consider vaccination in context of life-course approach.',
    },
  },

  media: [
    {
      id: 'global-immunization-coverage',
      type: 'diagram',
      filename: 'global-immunization-coverage.svg',
      title: 'Global Immunization Coverage Trends',
      description: 'Graph showing coverage of key vaccines globally over time',
    },
    {
      id: 'vaccine-preventable-diseases-impact',
      type: 'diagram',
      filename: 'vpd-reduction-impact.svg',
      title: 'Impact of Vaccines on Disease Burden',
      description: 'Before and after comparison of disease incidence with vaccination',
    },
  ],

  citations: [
    {
      id: 'who-immunization-agenda-2030',
      type: 'website',
      title: 'Immunization Agenda 2030',
      source: 'World Health Organization',
      url: 'https://www.who.int/teams/immunization-vaccines-and-biologicals/strategies/ia2030',
      license: 'CC BY-NC-SA 3.0 IGO',
    },
    {
      id: 'lancet-vaccine-coverage',
      type: 'article',
      title: 'Global routine vaccination coverage',
      source: 'The Lancet',
      license: 'Open Access',
    },
  ],

  crossReferences: [
    { targetId: 'childhood-immunization-global', targetType: 'topic', relationship: 'child', label: 'Childhood Immunization' },
    { targetId: 'vaccine-equity', targetType: 'topic', relationship: 'child', label: 'Vaccine Equity' },
    { targetId: 'global-health-challenges', targetType: 'topic', relationship: 'parent', label: 'Global Health Challenges' },
  ],

  tags: {
    systems: ['public-health', 'immune-system'],
    topics: ['global-health', 'immunization', 'preventive-medicine'],
    keywords: ['vaccines', 'immunization', 'VPD', 'herd immunity', 'EPI'],
    clinicalRelevance: 'critical',
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
