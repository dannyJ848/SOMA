/**
 * Vaccine-Preventable Diseases Educational Content
 *
 * Comprehensive overview of diseases that can be prevented through vaccination,
 * including global immunization efforts and challenges.
 */

import { EducationalContent } from '../types';

export const VACCINE_PREVENTABLE_DISEASES: EducationalContent = {
  id: 'vaccine-preventable-diseases',
  type: 'topic',
  name: 'Vaccine-Preventable Diseases',
  alternateNames: ['VPDs', 'Immunization-Preventable Conditions', 'Diseases Prevented by Vaccination'],

  levels: {
    1: {
      level: 1,
      summary: "Vaccine-preventable diseases are serious illnesses that we can stop from spreading by getting shots that teach our body how to fight off germs.",
      explanation: `Vaccines are like training for your body. They teach your immune system to recognize and fight dangerous germs before you get sick.

**What Are Vaccine-Preventable Diseases?**

These are diseases that used to make lots of people very sick or even die, but now we can prevent them with vaccines:

- **Measles** - Causes a red rash and high fever, can be very dangerous
- **Polio** - Used to paralyze children, now almost eliminated worldwide
- **Whooping cough** - Makes babies cough so hard they can't breathe
- **Tetanus** - Causes muscles to lock up, very painful and dangerous
- **Chickenpox** - Causes itchy blisters all over the body
- **Mumps** - Makes the cheeks swell up like a chipmunk
- **Flu** - Can be serious for older people and young children

**How Vaccines Work:**

1. Vaccines contain tiny, harmless pieces of germs or weakened germs
2. Your body learns to recognize these "practice" germs
3. If real germs try to attack later, your body knows how to fight them off
4. It's like a fire drill - practice so you're ready for the real thing!

**Why Vaccines Matter:**

- Before vaccines, many children died from diseases that are now rare
- When most people get vaccinated, even those who can't get shots are protected
- Vaccines have saved millions of lives around the world`,
      keyTerms: [
        { term: 'vaccine', definition: 'A special medicine, usually given as a shot, that teaches your body to fight off specific diseases' },
        { term: 'immune system', definition: 'Your body defense system that fights germs and keeps you from getting sick' },
        { term: 'contagious', definition: 'Can spread from one person to another' },
      ],
      analogies: [
        "A vaccine is like a wanted poster for your immune system - it shows what the bad guy looks like so your body can catch it if it ever shows up.",
        "Getting vaccinated is like putting on armor before a battle instead of waiting until you're already hurt.",
      ],
      examples: [
        "Before the measles vaccine, about 3-4 million Americans got measles every year. Now there are only a few hundred cases.",
        "Smallpox used to kill millions of people, but vaccines completely wiped it out - no one has gotten it since 1977!",
      ],
    },
    2: {
      level: 2,
      summary: "Vaccine-preventable diseases (VPDs) are infectious conditions that can be largely prevented through immunization, which has dramatically reduced global morbidity and mortality from once-common childhood illnesses.",
      explanation: `Vaccines represent one of the greatest public health achievements, preventing an estimated 2-3 million deaths annually and protecting billions from serious illness.

**Major Vaccine-Preventable Diseases:**

**Childhood Diseases:**
- **Measles**: Highly contagious viral illness; complications include pneumonia, encephalitis
- **Mumps**: Viral infection causing parotid swelling; can cause meningitis, orchitis
- **Rubella**: "German measles"; dangerous during pregnancy (congenital rubella syndrome)
- **Pertussis**: Whooping cough; severe in infants, causes prolonged cough in older children/adults
- **Diphtheria**: Bacterial infection producing toxin affecting heart and nerves
- **Tetanus**: Bacterial toxin causing severe muscle spasms; often from wound contamination
- **Polio**: Viral disease that can cause paralysis; close to global eradication

**Other Important VPDs:**
- **Hepatitis A and B**: Liver infections; B can become chronic and cause cancer
- **Human papillomavirus (HPV)**: Causes cervical, throat, and other cancers
- **Rotavirus**: Leading cause of severe diarrhea in young children
- **Pneumococcal disease**: Causes pneumonia, meningitis, ear infections
- **Meningococcal disease**: Bacterial meningitis, can be rapidly fatal
- **Influenza**: Seasonal flu causes 290,000-650,000 deaths globally each year
- **COVID-19**: Pandemic virus with effective vaccines developed in record time

**How Vaccines Create Protection:**

1. **Active immunity**: Body produces its own antibodies and memory cells
2. **Types of vaccines**:
   - Live attenuated (weakened virus): MMR, varicella
   - Inactivated: Polio (IPV), hepatitis A
   - Subunit/conjugate: HPV, pneumococcal
   - mRNA: COVID-19 (Pfizer, Moderna)
   - Viral vector: COVID-19 (J&J, AstraZeneca)

3. **Herd immunity**: When enough people are vaccinated, disease can't spread easily, protecting those who can't be vaccinated

**Global Immunization Achievements:**
- Smallpox eradicated (1980)
- Polio 99% reduced (from 350,000 cases in 1988 to <100 in recent years)
- Measles deaths reduced by 73% since 2000
- Maternal and neonatal tetanus eliminated from most countries`,
      keyTerms: [
        { term: 'herd immunity', definition: 'Community protection that occurs when a high percentage of the population is immune to a disease', pronunciation: 'herd im-YOO-nit-ee' },
        { term: 'immunization', definition: 'The process of making a person immune to a disease, usually through vaccination' },
        { term: 'antibodies', definition: 'Proteins made by the immune system that recognize and help destroy specific germs' },
        { term: 'live attenuated vaccine', definition: 'A vaccine using weakened but living germs that cannot cause disease' },
        { term: 'booster', definition: 'An additional dose of vaccine given to maintain immunity over time' },
      ],
      analogies: [
        "Herd immunity works like a firebreak in a forest - if enough trees are protected, the fire can't spread to the vulnerable ones.",
      ],
    },
    3: {
      level: 3,
      summary: "Vaccine-preventable diseases encompass a spectrum of bacterial, viral, and parasitic infections for which effective vaccines exist, with global immunization programs achieving remarkable disease reduction while facing ongoing challenges in coverage equity, vaccine hesitancy, and emerging variants.",
      explanation: `Immunization programs have transformed the landscape of infectious disease, eliminating smallpox, nearly eradicating polio, and dramatically reducing the burden of numerous other conditions. Understanding VPDs requires knowledge of disease epidemiology, vaccine immunology, and public health implementation.

**Vaccine Immunology Fundamentals:**

**Immune Response to Vaccination:**
1. **Innate response**: Pattern recognition, inflammation, APC activation
2. **Adaptive response**:
   - B cell activation → antibody production
   - T cell responses (CD4+ helper, CD8+ cytotoxic)
   - Memory cell formation
3. **Correlates of protection**: Antibody levels predicting immunity (varies by disease)

**Vaccine Types and Mechanisms:**
| Type | Examples | Characteristics |
|------|----------|-----------------|
| Live attenuated | MMR, varicella, yellow fever, oral polio | Strong immunity, often single dose; contraindicated in immunocompromised |
| Inactivated whole | IPV, hepatitis A, rabies | Stable, safe; may need boosters |
| Subunit/protein | Hepatitis B, HPV, acellular pertussis | Safe, well-defined antigens |
| Conjugate | PCV, Hib, MenACWY | Links polysaccharide to protein for better response |
| Toxoid | Tetanus, diphtheria | Inactivated toxin |
| mRNA | COVID-19 (BNT162b2, mRNA-1273) | Rapid development, strong immunity |
| Viral vector | COVID-19 (Ad26.COV2.S), Ebola | Uses harmless virus to deliver antigen |

**Disease-Specific Epidemiology:**

**Measles:**
- R₀ of 12-18 (extremely contagious)
- Requires 95% coverage for herd immunity
- Complications: otitis media (7-9%), pneumonia (1-6%), encephalitis (0.1%), SSPE (rare)
- Resurgences occur with coverage gaps

**Pertussis:**
- Cyclical epidemics despite high coverage (waning immunity, incomplete protection)
- Severe in infants <6 months (before full series)
- Cocooning strategy: vaccinating close contacts of newborns
- Maternal vaccination in third trimester recommended

**HPV:**
- Causes >90% cervical cancers, most oropharyngeal cancers
- Vaccine targets oncogenic types (16, 18 cause 70% of cervical cancers)
- 9-valent vaccine expands coverage
- Impact: Countries with high uptake seeing pre-cancerous lesion reductions

**Pneumococcal Disease:**
- >90 serotypes, vaccines cover most invasive disease-causing types
- PCV13 and PCV20 for children; PPSV23 for adults at risk
- Indirect effects: Reduced carriage, protection for unvaccinated
- Serotype replacement: Non-vaccine types may increase

**Global Immunization Program Elements:**

**Routine Childhood Schedule:**
- Birth: BCG, Hepatitis B birth dose
- 6-14 weeks: DTP-HepB-Hib, OPV/IPV, PCV, rotavirus
- 9-12 months: Measles-containing vaccine, PCV booster
- Additional doses through childhood

**Supplementary Immunization Activities (SIAs):**
- Campaign-based vaccination for rapid coverage increase
- Outbreak response
- Catch-up for missed children

**Key Metrics:**
- DTP3 coverage: Global indicator of immunization system strength
- MCV1/MCV2: Measles vaccine first and second dose coverage
- Zero-dose children: ~18 million children receive no vaccines`,
      keyTerms: [
        { term: 'correlate of protection', definition: 'Immune measurement (often antibody level) statistically associated with protection from disease' },
        { term: 'R₀', definition: 'Basic reproduction number - average secondary infections from one case in fully susceptible population', pronunciation: 'R-naught' },
        { term: 'serotype replacement', definition: 'Phenomenon where non-vaccine pathogen types increase after vaccine introduction' },
        { term: 'zero-dose children', definition: 'Children who have received no routine vaccines, often the hardest to reach' },
      ],
      clinicalNotes: 'For patients with uncertain vaccination history: (1) Consider serological testing for measles, rubella, varicella, hepatitis B, (2) Revaccination is safe if uncertain, (3) Document clearly in immunization record. Vaccine timing after immunoglobulin or blood products varies by product.',
    },
    4: {
      level: 4,
      summary: "Vaccine-preventable diseases exist within complex systems of pathogen evolution, host immunity, vaccine technology, and health systems, with contemporary challenges including waning immunity, variant emergence, coverage inequity, and sophisticated anti-vaccine movements requiring evidence-based communication strategies.",
      explanation: `**Advanced Vaccine Immunology:**

**Mechanisms of Vaccine-Induced Protection:**

*Humoral Immunity:*
- Neutralizing antibodies: Block pathogen entry (key for many VPDs)
- Opsonizing antibodies: Enhance phagocytosis
- Complement activation
- Antibody-dependent cellular cytotoxicity (ADCC)

*Cellular Immunity:*
- CD4+ T helper cells: Coordinate immune response, help B cells
- CD8+ cytotoxic T cells: Kill infected cells (critical for intracellular pathogens)
- Tissue-resident memory T cells: Local rapid response

*Durability of Protection:*
- Long-lived plasma cells (bone marrow) → sustained antibody production
- Memory B cells → rapid anamnestic response
- Memory T cells → long-term cellular protection
- Varies by vaccine: measles (lifelong), pertussis (years), influenza (months)

**Immunological Challenges:**

*Waning Immunity:*
| Vaccine | Duration | Clinical Implications |
|---------|----------|----------------------|
| Measles | Lifelong | Rarely need booster |
| Tetanus | ~10 years | Boosters needed |
| Pertussis | 4-12 years | Adolescent/adult boosters |
| Hepatitis B | >20 years | Immune memory persists |
| COVID-19 | Months-years | Boosters for variants, waning |

*Poor Responders:*
- Elderly (immunosenescence)
- Immunocompromised
- Genetic factors affecting response
- Strategies: Higher doses, adjuvants, alternative schedules

*Vaccine Interference:*
- Maternal antibody interference in infants
- Oral polio vaccine interference in tropical settings (enteric pathogens)
- Timing of multiple live vaccines

**Variant Evolution and Vaccine Escape:**

*Mechanisms:*
- Antigenic drift (gradual mutation) - influenza
- Antigenic shift (reassortment) - pandemic influenza
- Selective pressure from immunity
- Immune escape mutations

*Examples:*
- Influenza: Annual strain selection, occasional mismatches
- SARS-CoV-2: Omicron subvariants with reduced neutralization
- Poliovirus: Vaccine-derived polioviruses (VDPVs)
- Pertussis: Possible vaccine antigen adaptation

**Vaccine Hesitancy and Misinformation:**

*WHO Identified as Top 10 Global Health Threat (2019):*

*Determinants (3Cs Model):*
1. **Confidence**: Trust in vaccine safety, efficacy, system
2. **Complacency**: Low perceived risk of disease
3. **Convenience**: Access, affordability, availability

*Advanced Considerations:*
- Confident refusers vs. hesitant accepters (different interventions)
- Echo chambers and social media algorithms
- Motivated reasoning and backfire effects
- Health literacy and numeracy
- Historical medical mistrust (Tuskegee, etc.)

*Evidence-Based Communication:*
- Motivational interviewing techniques
- Presumptive (vs. participatory) recommendations
- Focusing on protection, not disease
- Acknowledge concerns without amplifying
- Narrative and social norms messaging

**Health Systems for Immunization:**

*Effective Vaccine Management:*
- Cold chain maintenance (varies by vaccine: -70°C to room temp)
- Stock management preventing stockouts and wastage
- Multi-dose vial policy
- Injection safety

*Surveillance for VPDs:*
- Case-based surveillance for elimination targets
- Acute flaccid paralysis surveillance (polio)
- Fever and rash surveillance (measles)
- Genomic surveillance for pathogen tracking

*Equity Considerations:*
- Urban-rural disparities
- Wealth gradients
- Gender-related barriers
- Conflict and humanitarian settings
- Zero-dose children concentrated in specific geographies/populations

**Economic Analysis:**

*Cost-Effectiveness:*
- Vaccines consistently among most cost-effective interventions
- ROI estimated at $44 for every $1 invested
- DALY averted costs typically well below thresholds

*Financing:*
- Gavi support for low-income countries
- PAHO Revolving Fund (Americas)
- Domestic financing transition
- COVID-19 COVAX experience`,
      keyTerms: [
        { term: 'immunosenescence', definition: 'Age-related decline in immune function affecting vaccine response in elderly', pronunciation: 'im-yoo-no-sen-ES-ens' },
        { term: 'antigenic drift', definition: 'Gradual accumulation of mutations in pathogen surface proteins over time' },
        { term: 'vaccine-derived poliovirus', definition: 'Poliovirus originating from oral vaccine that has regained virulence through mutation' },
        { term: 'presumptive recommendation', definition: 'Communication approach stating vaccination as the default expected action' },
        { term: 'cold chain', definition: 'Temperature-controlled supply chain ensuring vaccines remain effective from manufacture to administration' },
      ],
      clinicalNotes: 'When encountering vaccine-hesitant patients: (1) Listen first, acknowledge concerns, (2) Use motivational interviewing, (3) Give a strong recommendation, (4) Focus on disease protection, (5) Leave door open for future discussion. Document declinations. For immunocompromised patients, consult IDSA guidelines for live vaccine contraindications and optimal timing.',
    },
    5: {
      level: 5,
      summary: "Vaccine-preventable diseases represent a frontier of biomedical science, public health practice, and social behavioral research, with current challenges including next-generation vaccine development, global health governance for equitable access, integration of immunization with primary healthcare, and countering organized disinformation within information ecosystems.",
      explanation: `**Vaccinology Research Frontiers:**

**Next-Generation Vaccine Technologies:**

*Universal Vaccines:*
- Universal influenza vaccine: Targeting conserved epitopes (HA stalk, M2e)
- Pan-coronavirus vaccines: Conserved S2 domain, receptor binding motifs
- Challenge: Balancing breadth and potency

*Novel Platforms:*
| Platform | Advantages | Challenges |
|----------|------------|------------|
| mRNA | Rapid development, strong immunity | Stability, cold chain |
| Self-amplifying RNA | Lower doses, sustained expression | Manufacturing scale |
| Virus-like particles | Safety, immunogenicity | Production complexity |
| Nanoparticle display | Multivalent, enhanced responses | Novel technology |
| Live attenuated (codon deoptimization) | Rapid development, established platform | Reversion risk |

*Mucosal Vaccines:*
- Rationale: Prevent infection at portal of entry
- Intranasal, oral routes
- Challenges: Generating robust mucosal immunity
- FluMist (LAIV) variable effectiveness example

*Adjuvant Development:*
- AS01 (MPL + QS-21): RTS,S malaria vaccine, Shingrix
- AS04 (MPL): Cervarix HPV
- MF59, AS03: Enhance influenza vaccines
- Novel TLR agonists, STING agonists under development

**Systems Vaccinology:**

*Approach:*
- High-dimensional immunological profiling
- Transcriptomics, proteomics, metabolomics
- Machine learning for correlate identification
- Predicting vaccine response

*Insights:*
- Innate immune signatures predicting adaptive responses
- Baseline immune state affecting outcomes
- Genetic polymorphisms in response variation

**Global Health Governance for Vaccines:**

*Key Institutions and Mechanisms:*
| Entity | Role |
|--------|------|
| WHO SAGE | Global vaccination policy recommendations |
| WHO Prequalification | Quality assurance for procurement |
| Gavi | Financing for low-income countries |
| UNICEF SD | Procurement and supply |
| CEPI | Epidemic/pandemic vaccine development |
| BARDA | US biodefense and pandemic preparedness |

*Equity Challenges:*
- COVID-19 vaccine nationalism
- TRIPS waiver debates
- Technology transfer (mRNA hub in South Africa)
- COVAX shortfalls and lessons
- Pandemic treaty negotiations

*100 Days Mission:*
- Goal: Develop, test, approve vaccines within 100 days of pandemic pathogen emergence
- Requires: Platform technologies, clinical trial networks, regulatory harmonization

**Integration with Primary Health Care:**

*Immunization as Entry Point:*
- Contact opportunities for comprehensive care
- Life-course immunization approach
- Integration with antenatal care, well-child visits
- Adult immunization expansion

*Big Catch-Up Initiative (post-COVID-19):*
- Address coverage declines during pandemic
- Focus on zero-dose and under-vaccinated
- Strengthen routine immunization systems

**Information Environment and Vaccine Acceptance:**

*Theoretical Frameworks:*
- Social cognitive theory
- Health belief model
- Reasoned action approach
- Moral foundations theory
- Motivated reasoning and identity-protective cognition

*Information Ecosystem Challenges:*
- Organized anti-vaccine movement (financial interests, ideological)
- Platform algorithms amplifying emotional content
- Cross-border misinformation flows
- Erosion of institutional trust
- Data voids exploited

*Evidence-Based Interventions:*
- Prebunking (inoculation theory)
- Lateral reading/SIFT method
- Trusted messenger approaches
- Community engagement
- Social norms messaging

*Research Gaps:*
- Optimal messaging for different hesitancy profiles
- Long-term effectiveness of interventions
- Social media regulation impact
- Health professional training

**Ethical Frameworks:**

*Vaccine Ethics Considerations:*
- Individual autonomy vs. collective benefit
- Mandates: When justified?
- Prioritization in scarcity
- Pediatric consent/assent
- Research in low-resource settings
- Compensation for adverse events

*Key Principles:*
- Justice and equity
- Solidarity
- Reciprocity
- Trust and transparency
- Proportionality

**Future Directions:**

1. **Thermostable vaccines**: Eliminating cold chain barriers
2. **Microarray patches**: Simplified administration
3. **Maternal immunization expansion**: Protecting vulnerable newborns
4. **Therapeutic vaccines**: Cancer, chronic infections
5. **Integrated delivery platforms**: mRNA vaccines for multiple diseases
6. **Elimination/eradication targets**: Measles, rubella post-polio

**Clinical Leadership:**

Clinicians occupy a critical position in vaccine acceptance:
- Strong provider recommendation is top predictor of vaccination
- Need training in motivational interviewing
- Understanding social determinants of under-vaccination
- Advocacy for policy and resource allocation
- Contributing to pharmacovigilance
- Global health engagement opportunities`,
      keyTerms: [
        { term: 'systems vaccinology', definition: 'Application of systems biology approaches to understand immune responses to vaccines' },
        { term: 'prebunking', definition: 'Preemptively exposing people to weakened misinformation to build resistance to future exposure' },
        { term: 'inoculation theory', definition: 'Psychological theory that preexposure to weakened arguments creates resistance to persuasion' },
        { term: 'SAGE', definition: 'Strategic Advisory Group of Experts - WHO body providing vaccine policy recommendations' },
        { term: 'data voids', definition: 'Topics with little authoritative information online that can be filled by misinformation' },
      ],
      clinicalNotes: 'Clinical leadership in vaccination: (1) Stay current with ACIP/SAGE recommendations, (2) Implement standing orders to improve opportunistic vaccination, (3) Use IIS (Immunization Information Systems) to identify gaps, (4) Build team-based approaches with nurses and pharmacists, (5) Engage in quality improvement and advocacy. Consider population health responsibilities alongside individual care.',
    },
  },

  media: [
    {
      id: 'vaccine-timeline',
      type: 'diagram',
      filename: 'vaccine-development-timeline.svg',
      title: 'History of Vaccine Development',
      description: 'Timeline showing major vaccine discoveries and disease elimination milestones',
    },
    {
      id: 'immunization-schedule',
      type: 'diagram',
      filename: 'routine-immunization-schedule.svg',
      title: 'Recommended Immunization Schedule',
      description: 'Visual representation of recommended childhood and adult vaccine schedule',
    },
  ],

  citations: [
    {
      id: 'who-immunization-guidelines',
      type: 'website',
      title: 'WHO Vaccine Position Papers',
      source: 'World Health Organization',
      url: 'https://www.who.int/immunization/policy/position_papers/en/',
      license: 'CC BY-NC-SA 3.0 IGO',
    },
    {
      id: 'plotkin-vaccines',
      type: 'textbook',
      title: "Plotkin's Vaccines",
      authors: ['Plotkin SA', 'Orenstein WA', 'Offit PA', 'Edwards KM'],
      source: 'Elsevier',
      chapter: 'Multiple',
    },
    {
      id: 'cdc-pink-book',
      type: 'website',
      title: 'Epidemiology and Prevention of Vaccine-Preventable Diseases (Pink Book)',
      source: 'Centers for Disease Control and Prevention',
      url: 'https://www.cdc.gov/vaccines/pubs/pinkbook/index.html',
    },
  ],

  crossReferences: [
    { targetId: 'vaccine-preventable-overview', targetType: 'topic', relationship: 'related', label: 'Vaccine-Preventable Overview' },
    { targetId: 'childhood-immunization-global', targetType: 'topic', relationship: 'child', label: 'Childhood Immunization' },
    { targetId: 'vaccine-equity', targetType: 'topic', relationship: 'related', label: 'Vaccine Equity' },
    { targetId: 'emerging-infectious-diseases', targetType: 'topic', relationship: 'related', label: 'Emerging Infectious Diseases' },
  ],

  tags: {
    systems: ['immunology', 'public-health', 'infectious-disease'],
    topics: ['vaccination', 'immunization', 'preventive-medicine', 'global-health'],
    keywords: ['vaccines', 'immunization', 'vaccine-preventable diseases', 'herd immunity', 'vaccine hesitancy'],
    clinicalRelevance: 'critical',
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
