/**
 * Vaccination Science - Comprehensive Educational Content
 *
 * Covers vaccine immunology, types, schedules, and public health impact.
 */

import { EducationalContent } from '../../types';

export const vaccinationScience: EducationalContent = {
  id: 'infectious-disease-vaccination',
  type: 'topic',
  name: 'Vaccination Science',
  alternateNames: ['Immunization', 'Vaccine Immunology', 'Preventive Immunization'],

  levels: {
    1: {
      level: 1,
      summary: 'Vaccines teach your immune system to recognize and fight germs so you do not get sick when exposed to dangerous diseases.',
      explanation: `Vaccines are one of the greatest inventions in medicine. They prevent millions of deaths every year from diseases like measles, polio, and whooping cough.

**How Vaccines Work:**
1. A vaccine contains a safe piece of a germ (or a weakened germ)
2. Your immune system sees this and learns what it looks like
3. Your immune system creates special fighters (antibodies) to destroy it
4. Your immune system remembers this germ
5. If the real germ ever enters your body, your immune system attacks it immediately!

**It is Like a Fire Drill:**
Your body practices fighting a germ without actually getting sick. Then if the real thing comes along, it knows exactly what to do.

**Types of Vaccines:**
- **Killed vaccines:** Use dead germs (like flu shot)
- **Live vaccines:** Use very weak germs (like measles vaccine)
- **Piece vaccines:** Use just a part of the germ (like hepatitis B)
- **mRNA vaccines:** Teach your cells to make a small piece of the germ (like COVID-19 vaccines)

**Why Vaccines Are Important:**
- They prevent you from getting very sick
- They protect people around you who cannot get vaccinated (babies, people with weak immune systems)
- They can eliminate diseases completely (like smallpox!)

**Are Vaccines Safe?**
Yes! Vaccines are tested very carefully before they are approved. Side effects are usually mild, like a sore arm or low fever, and go away quickly.`,
      keyTerms: [
        { term: 'vaccine', definition: 'A medicine that teaches your immune system to fight a disease without making you sick' },
        { term: 'immune system', definition: 'Your body\'s defense system that fights off germs' },
        { term: 'antibody', definition: 'A protein your immune system makes to attack specific germs' },
        { term: 'immunization', definition: 'Getting a vaccine to become protected against a disease' },
      ],
      analogies: [
        'Getting a vaccine is like showing your immune system a "wanted poster" of a criminal, so it knows exactly who to arrest if that criminal ever shows up.',
        'Vaccines are like training wheels - they help your immune system practice before the real challenge.',
      ],
      examples: [
        'Thanks to vaccines, smallpox has been completely wiped out - no one gets this deadly disease anymore.',
        'Before the measles vaccine, millions of children got measles and thousands died each year.',
      ],
    },
    2: {
      level: 2,
      summary: 'Vaccines stimulate adaptive immune responses by presenting antigens without causing disease, generating memory B and T cells for rapid response upon subsequent pathogen exposure.',
      explanation: `Vaccines have eliminated or drastically reduced many infectious diseases. Understanding how they work helps appreciate their importance.

**Immune Response to Vaccines:**

**1. Antigen Recognition:**
- Vaccine introduces antigen to immune system
- Antigen-presenting cells (dendritic cells) process antigen
- Present to T cells in lymph nodes

**2. Adaptive Response:**
- B cells produce antibodies specific to antigen
- T cells activate to help B cells and kill infected cells
- Takes 1-2 weeks to develop full response

**3. Memory Formation:**
- Memory B cells: Produce antibodies faster on re-exposure
- Memory T cells: Rapidly expand upon re-infection
- Protection can last years to lifetime

**Types of Vaccines:**

| Type | Examples | Characteristics |
|------|----------|-----------------|
| Live attenuated | MMR, varicella, rotavirus | Weakened virus, strong immunity |
| Inactivated | Flu (shot), hepatitis A, polio (IPV) | Killed pathogen, may need boosters |
| Subunit/protein | Hepatitis B, pertussis (acellular) | Purified antigens, very safe |
| Toxoid | Tetanus, diphtheria | Inactivated toxin |
| Conjugate | Hib, PCV, meningococcal | Polysaccharide linked to protein |
| mRNA | COVID-19 (Pfizer, Moderna) | Genetic instructions for antigen |
| Viral vector | J&J COVID-19, Ebola | Harmless virus delivers antigen gene |

**Vaccine Schedule:**
- Vaccines given at specific ages for optimal protection
- Some require multiple doses (primary series)
- Boosters maintain immunity over time

**Herd Immunity:**
- When enough people are vaccinated, disease cannot spread easily
- Protects vulnerable individuals who cannot be vaccinated
- Threshold varies by disease (measles: 95%, polio: 80%)

**Vaccine-Preventable Diseases:**
- Measles, mumps, rubella
- Diphtheria, tetanus, pertussis
- Polio, Haemophilus influenzae type b
- Hepatitis A and B
- Varicella (chickenpox)
- Human papillomavirus (HPV)
- COVID-19

**Common Side Effects:**
- Injection site pain, redness, swelling
- Low-grade fever
- Fatigue
- Usually mild and short-lived`,
      keyTerms: [
        { term: 'antigen', definition: 'A molecule from a pathogen that triggers an immune response', pronunciation: 'AN-tih-jen' },
        { term: 'live attenuated vaccine', definition: 'Vaccine using weakened but living pathogen that cannot cause disease' },
        { term: 'conjugate vaccine', definition: 'Vaccine linking polysaccharide antigen to protein carrier for better immunity in children' },
        { term: 'herd immunity', definition: 'Population-level protection when enough people are immune to prevent disease spread' },
        { term: 'booster dose', definition: 'Additional vaccine dose given to maintain or enhance immunity' },
      ],
      analogies: [
        'Memory cells from vaccination are like soldiers who remember the enemy - they are ready to fight immediately if they see that enemy again.',
        'Herd immunity is like a firebreak - if enough trees (people) are protected, the fire (disease) cannot spread through the forest.',
      ],
    },
    3: {
      level: 3,
      summary: 'Vaccine immunology involves humoral and cellular responses, with vaccine platform selection based on pathogen characteristics, target population, and desired immune response profile.',
      explanation: `Modern vaccinology integrates immunology, microbiology, and public health to optimize disease prevention.

**Immunological Mechanisms:**

**Humoral Immunity (Antibodies):**
- B cells differentiate into plasma cells → antibodies
- Neutralizing antibodies: Block pathogen entry
- Opsonizing antibodies: Enhance phagocytosis
- Complement-fixing antibodies: Activate complement cascade
- IgG (most vaccines), IgA (mucosal immunity)

**Cellular Immunity:**
- CD4+ T helper cells: Coordinate immune response
  - Th1: Promote cellular immunity (intracellular pathogens)
  - Th2: Promote antibody responses
- CD8+ cytotoxic T cells: Kill infected cells
- Critical for intracellular pathogens (viruses, TB)

**Memory Response:**
- Memory B cells: Long-lived, rapid antibody production
- Long-lived plasma cells: Maintain circulating antibodies
- Memory T cells: Rapid expansion upon re-exposure
- Immune memory can last decades

**Vaccine Platforms:**

*Live Attenuated:*
- Advantages: Strong, durable immunity; mimic natural infection
- Disadvantages: Contraindicated in immunocompromised; storage requirements
- Attenuation methods: Serial passage, gene deletion

*Inactivated:*
- Advantages: Safe in immunocompromised; stable
- Disadvantages: Weaker immunity; usually require adjuvants/boosters

*Subunit/Recombinant:*
- Advantages: Highly pure; good safety profile
- Disadvantages: May need adjuvants; production complexity

*Conjugate:*
- Polysaccharides poorly immunogenic in <2 years (T-independent)
- Conjugation to protein (e.g., diphtheria toxoid) recruits T cells
- Enables immune response in infants

*mRNA:*
- Advantages: Rapid development; strong immune response
- Disadvantages: Cold chain requirements; newer technology

**Adjuvants:**
- Enhance immune response to vaccines
- Aluminum salts (most common): Th2-biased
- AS01 (shingrix): Contains MPL and QS-21
- MF59 (flu): Oil-in-water emulsion
- AS04 (HPV-Cervarix): Aluminum + MPL

**Correlates of Protection:**
- Measurable immune response predictive of protection
- Antibody titers: Measles, hepatitis B, diphtheria
- Functional antibodies: Pneumococcal disease
- T cells: May be important for intracellular pathogens

**Vaccine Failure:**
*Primary failure:* No immune response (rare)
*Secondary failure:* Waning immunity over time

**Contraindications:**
- Anaphylaxis to vaccine component (absolute)
- Live vaccines in immunocompromised (varies)
- Pregnancy: Some live vaccines contraindicated
- Current moderate-severe illness: Delay vaccination`,
      keyTerms: [
        { term: 'neutralizing antibody', definition: 'Antibody that blocks pathogen binding to host cells, preventing infection' },
        { term: 'adjuvant', definition: 'Substance added to vaccines to enhance immune response' },
        { term: 'correlate of protection', definition: 'Immune marker predictive of protection against disease' },
        { term: 'T-independent antigen', definition: 'Antigen (like polysaccharide) that stimulates B cells without T cell help, poorly immunogenic in infants' },
        { term: 'primary vaccine failure', definition: 'Failure to develop immune response after vaccination' },
      ],
      clinicalNotes: 'Live vaccines are generally contraindicated in pregnancy and immunocompromised patients. However, inactivated vaccines are safe and recommended. Egg allergy is no longer a contraindication for most vaccines except yellow fever.',
    },
    4: {
      level: 4,
      summary: 'Advanced vaccinology integrates mucosal immunity considerations, novel adjuvant platforms, vaccinomics for personalized approaches, and vaccine development for challenging pathogens.',
      explanation: `Contemporary vaccine science addresses complex immunological challenges and emerging pathogens.

**Mucosal Immunity:**

*Importance:*
- Most pathogens enter through mucosal surfaces
- Systemic vaccines may not induce mucosal immunity
- IgA at mucosa prevents infection (not just disease)

*Mucosal Vaccines:*
- Oral polio vaccine: GI tract immunity
- Intranasal flu vaccine (FluMist): Respiratory IgA
- Challenges: Antigen degradation, immune tolerance

*Sterilizing vs. Non-Sterilizing Immunity:*
- Sterilizing: Prevents infection entirely
- Non-sterilizing: Prevents disease but not infection
- Mucosal immunity more likely to provide sterilizing protection

**Advanced Adjuvant Systems:**

| Adjuvant | Vaccine | Mechanism |
|----------|---------|-----------|
| AS01B | Shingrix, malaria | MPL + QS-21; Th1 bias |
| AS04 | Cervarix | MPL + alum; TLR4 agonist |
| MF59 | Fluad | Squalene emulsion |
| CpG 1018 | Heplisav-B | TLR9 agonist |
| Matrix-M | Novavax COVID | Saponin-based |

*Next-Generation Adjuvants:*
- STING agonists
- TLR7/8 agonists
- Nanoparticle platforms

**Vaccinomics:**

*Concept:*
- Individual variation in vaccine response
- Genetic factors: HLA, cytokine genes
- Age, sex, obesity, microbiome affect response

*Personalized Vaccinology:*
- Identify non-responders for alternative strategies
- Dose optimization based on individual factors
- Systems biology approaches

**Vaccines for Challenging Pathogens:**

*HIV:*
- Antigenic diversity (multiple clades)
- Targets immune cells
- Integrated provirus
- Strategies: Broadly neutralizing antibodies, mosaic antigens, viral vectors

*TB (Tuberculosis):*
- BCG has limited efficacy in adults
- Need cellular immunity (Th1)
- M72/AS01E: Phase III success in preventing disease
- Candidates: VPM1002, ID93+GLA-SE

*Malaria:*
- Complex life cycle (multiple stages)
- RTS,S/AS01 (Mosquirix): 30-40% efficacy
- R21/Matrix-M: Promising Phase III data
- Transmission-blocking vaccines in development

*RSV:*
- Previous vaccine failure (formalin-inactivated, 1960s)
- Prefusion F stabilization breakthrough
- Arexvy, Abrysvo: Approved for older adults and maternal vaccination

**Universal Vaccines:**

*Universal Influenza:*
- Target conserved epitopes (HA stalk, M2e, NP)
- Aim: Protection against all strains
- Eliminate annual reformulation
- Chimeric HA, nanoparticle platforms in trials

*Pan-Coronavirus:*
- Target conserved regions across coronaviruses
- Preparation for future pandemics
- Mosaic nanoparticles, RBD cocktails

**Therapeutic Vaccines:**

*Cancer Vaccines:*
- HPV vaccines prevent HPV-related cancers
- Therapeutic: Provenge (prostate cancer), personalized neoantigen vaccines
- mRNA cancer vaccines in development

*Autoimmune/Allergy:*
- Tolerance induction
- Allergic desensitization parallels`,
      keyTerms: [
        { term: 'mucosal immunity', definition: 'Immune response at mucosal surfaces (respiratory, GI) involving secretory IgA' },
        { term: 'sterilizing immunity', definition: 'Immune protection that completely prevents infection, not just disease' },
        { term: 'vaccinomics', definition: 'Systems biology approach to understanding individual vaccine responses' },
        { term: 'broadly neutralizing antibody', definition: 'Antibody that neutralizes diverse viral variants, goal for HIV vaccine' },
        { term: 'prefusion stabilization', definition: 'Locking viral protein in conformation that elicits best antibody response (RSV success)' },
      ],
      clinicalNotes: 'Shingrix (recombinant with AS01B adjuvant) is 97% effective vs. 51% for Zostavax (live). Two doses required. RSV vaccines now approved for adults 60+; maternal vaccination protects infants. Consider in high-risk patients.',
    },
    5: {
      level: 5,
      summary: 'Cutting-edge vaccinology encompasses rapid platform technologies, structure-based vaccine design, global vaccine equity initiatives, and preparedness for emerging pathogens.',
      explanation: `State-of-the-art vaccine science integrates molecular engineering, public health policy, and global health security.

**Rapid Vaccine Development:**

*COVID-19 Lessons:*
- mRNA platform: Concept to EUA in 11 months
- Enabled by prior research (mRNA technology, MERS coronavirus)
- Parallel trials and manufacturing
- Regulatory flexibility with rigorous safety evaluation

*Prototype Pathogen Approach:*
- Develop vaccines for representative pathogens in priority families
- Pivot to outbreak strain rapidly
- Example: Coronavirus family → COVID-19

*100-Day Mission:*
- CEPI goal: Vaccine within 100 days of outbreak
- Requires platform preparation, manufacturing capacity, regulatory pathways

**Structure-Based Vaccine Design:**

*Rational Antigen Engineering:*
- Cryo-EM and X-ray crystallography reveal epitopes
- Design antigens that present epitopes optimally
- Stabilize proteins in immunogenic conformations

*Examples:*
- RSV prefusion F stabilization → effective vaccines
- Influenza HA stem focus for universal vaccine
- Coronavirus spike prefusion-stabilized

*Computational Approaches:*
- AI for epitope prediction
- Deep learning for immunogen optimization
- Molecular dynamics simulations

**Vaccine Delivery Innovation:**

*Needle-Free:*
- Microneedle patches: Thermostable, self-administrable
- Jet injectors
- Oral and intranasal formulations

*Improved Stability:*
- Thermostable formulations (lyophilized mRNA)
- Room temperature storage
- Critical for global distribution

*Controlled Release:*
- Single-dose vaccines with programmed booster release
- Microparticle technology

**Global Vaccine Equity:**

*COVAX Facility:*
- Global vaccine allocation mechanism
- Aim: Equitable access regardless of income
- Challenges: Supply, vaccine nationalism

*Technology Transfer:*
- mRNA manufacturing hubs in Africa
- Build local capacity
- WHO mRNA technology transfer program

*Regulatory Harmonization:*
- WHO prequalification
- Regional regulatory networks
- Streamlined approval pathways

**Vaccine Hesitancy:**

*Determinants:*
- Confidence: Trust in vaccine safety and efficacy
- Complacency: Low perceived disease risk
- Convenience: Access barriers

*Interventions:*
- Transparent communication
- Healthcare provider engagement
- Address misinformation
- Community-based approaches

*Infodemic Management:*
- Combat misinformation on social media
- Prebunking (inoculation against misinformation)
- Health authority presence on digital platforms

**Pandemic Preparedness:**

*Priority Pathogens:*
- WHO R&D Blueprint: Prioritized pathogens for vaccine development
- Disease X: Prepare for unknown pathogen

*Stockpiling and Surge:*
- Strategic reserves
- Manufacturing surge capacity
- Platform technology enabling rapid pivots

*Clinical Trial Infrastructure:*
- Established trial networks
- Master protocols ready
- Adaptive platform trials

**Future Vaccine Targets:**

| Pathogen | Challenge | Approach |
|----------|-----------|----------|
| HIV | Diversity, immune evasion | bnAbs, mosaic antigens |
| TB | Complex immunity | Subunit vaccines, revaccination |
| Malaria | Multi-stage life cycle | Pre-erythrocytic + blood stage |
| Group A Strep | Multiple serotypes, autoimmunity concern | Conserved antigens |
| C. diff | Toxin-mediated | Toxoid vaccines |
| HSV | Latency | T cell-focused approaches |
| CMV | Congenital disease prevention | Glycoprotein subunit |

**Correlates of Protection Research:**

*Importance:*
- Accelerate licensure (immunobridging)
- Reduce trial size
- Inform booster policy

*Challenges:*
- May differ by endpoint (infection vs. disease)
- Cellular correlates harder to measure
- Require standardized assays`,
      keyTerms: [
        { term: 'prototype pathogen', definition: 'Representative pathogen in a viral family for which vaccine is developed, enabling rapid pivot' },
        { term: 'immunobridging', definition: 'Using immune response data rather than clinical endpoints for vaccine approval' },
        { term: 'CEPI', definition: 'Coalition for Epidemic Preparedness Innovations; funds vaccines for epidemic threats' },
        { term: 'vaccine nationalism', definition: 'Countries prioritizing domestic vaccine access over global equity' },
        { term: 'microneedle patch', definition: 'Painless, thermostable vaccine delivery via dissolvable needles on a patch' },
      ],
      clinicalNotes: `**Clinical Pearls:**
1. Live vaccines: Space 4 weeks apart if not given simultaneously; OK to give with inactivated
2. Immunocompromised: Inactivated vaccines are safe; live vaccines require careful assessment (varies by degree of immunosuppression)
3. Pregnancy: Tdap each pregnancy (27-36 weeks); flu any trimester; RSV maternal vaccine now approved
4. Shingrix: Two doses 2-6 months apart; immunocompromised patients can receive it
5. HPV: FDA approved through age 45; shared decision-making for adults 27-45
6. COVID-19: Updated boosters annually; timing considerations for immunocompromised
7. Travel: Yellow fever, typhoid, Japanese encephalitis, rabies depending on destination`,
    },
  },

  media: [
    {
      id: 'vaccine-types',
      type: 'diagram',
      filename: 'vaccine-types.svg',
      title: 'Types of Vaccines',
      description: 'Comparison of vaccine platforms and mechanisms',
    },
    {
      id: 'immune-response',
      type: 'diagram',
      filename: 'vaccine-immune-response.svg',
      title: 'Immune Response to Vaccination',
      description: 'Humoral and cellular immunity following vaccination',
    },
  ],

  citations: [
    {
      id: 'cdc-immunization',
      type: 'website',
      title: 'Immunization Schedules',
      source: 'CDC',
      url: 'https://www.cdc.gov/vaccines/',
    },
    {
      id: 'plotkin-vaccines',
      type: 'textbook',
      title: 'Plotkin\'s Vaccines',
      authors: ['Plotkin SA', 'Orenstein WA', 'Offit PA'],
      source: 'Elsevier',
    },
  ],

  crossReferences: [
    { targetId: 'infectious-disease-viral-overview', targetType: 'topic', relationship: 'related', label: 'Viral Infections' },
    { targetId: 'infectious-disease-bacterial-overview', targetType: 'topic', relationship: 'related', label: 'Bacterial Infections' },
    { targetId: 'system-immune', targetType: 'system', relationship: 'related', label: 'Immune System' },
  ],

  tags: {
    systems: ['immune'],
    topics: ['infectious-disease', 'immunology', 'public-health', 'pediatrics'],
    keywords: ['vaccines', 'immunization', 'mRNA', 'antibodies', 'herd immunity'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'pediatrics'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default vaccinationScience;
