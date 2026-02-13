/**
 * Pediatric Immunization Schedule
 *
 * Comprehensive childhood vaccination recommendations based on
 * CDC/ACIP guidelines from birth through adolescence.
 */

import { EducationalContent } from '../../types';

export const PEDIATRIC_IMMUNIZATION_SCHEDULE: EducationalContent = {
  id: 'concept-pediatric-immunization-schedule',
  type: 'concept',
  name: 'Pediatric Immunization Schedule',
  alternateNames: ['Childhood vaccines', 'Child vaccination schedule', 'Kids immunization'],

  levels: {
    1: {
      level: 1,
      summary: 'Babies and children get vaccines at certain ages to protect them from serious diseases. Following the schedule keeps kids safe.',
      explanation: `Vaccines are like superhero training for your body! They teach your immune system to fight off dangerous germs.

**Why Babies Need So Many Shots:**
- Babies are born without protection against many diseases
- Each vaccine protects against a different disease
- Some vaccines need multiple doses to work fully
- Vaccines are given when babies can best respond to them

**The First Year:**
*At Birth:*
- Hepatitis B (first dose)

*At 2 Months:*
- Multiple vaccines given to protect against 6 diseases
- Including protection for whooping cough, diphtheria, and tetanus

*At 4 and 6 Months:*
- Additional doses to build stronger protection

*At 12 Months:*
- Vaccines for measles, mumps, rubella
- First chicken pox vaccine

**Toddler and Preschool Years (1-4):**
- Boosters for earlier vaccines
- Protection against hepatitis A

**School Age (5-11):**
- Final boosters before kindergarten
- Annual flu shot recommended

**Teenagers (12-18):**
- HPV vaccine to prevent certain cancers
- Meningitis vaccine for protection in crowded settings
- Tetanus booster (Tdap)

**How Combination Vaccines Help:**
- One shot can protect against several diseases
- Means fewer pokes for the same protection
- Example: One shot protects against 5-6 diseases at once!

Talk to your child's doctor if you have questions about the schedule.`,
      keyTerms: [
        { term: 'vaccine', definition: 'A shot that teaches your body to fight germs' },
        { term: 'booster', definition: 'An extra shot that makes your protection stronger' },
        { term: 'combination vaccine', definition: 'One shot that protects against several diseases at once' },
      ],
      analogies: [
        'Vaccines are like training wheels for your immune system - they help it learn to balance before facing the real challenge.',
        'The immunization schedule is like levels in a video game - you need to complete earlier levels to unlock full protection.',
      ],
      examples: [
        'The MMR vaccine protects against measles, mumps, and rubella with just two shots.',
        'Before vaccines, diseases like whooping cough made many babies very sick every year.',
      ],
    },
    2: {
      level: 2,
      summary: 'The pediatric immunization schedule is carefully designed based on when children are most vulnerable to diseases and when their immune systems can best respond to vaccines.',
      explanation: `The CDC and ACIP develop the childhood immunization schedule based on extensive research.

**Schedule Overview by Age:**

**Birth:**
- Hepatitis B (HepB) - First dose

**1-2 Months:**
- HepB - Second dose (can be given at 1-2 months)

**2 Months:**
- DTaP (Diphtheria, Tetanus, Pertussis)
- IPV (Polio)
- Hib (Haemophilus influenzae type b)
- PCV13 (Pneumococcal)
- RV (Rotavirus)

**4 Months:**
- DTaP, IPV, Hib, PCV13, RV - Second doses

**6 Months:**
- DTaP, Hib, PCV13 - Third doses
- RV - Third dose (depending on brand)
- HepB - Third dose (6-18 months)
- Influenza - Start annual flu shots (6 months+)

**12-15 Months:**
- MMR (Measles, Mumps, Rubella) - First dose
- Varicella (Chickenpox) - First dose
- Hib, PCV13 - Final doses
- HepA (Hepatitis A) - First dose (2 doses, 6 months apart)

**15-18 Months:**
- DTaP - Fourth dose

**4-6 Years (Before Kindergarten):**
- DTaP - Fifth dose
- IPV - Fourth dose
- MMR - Second dose
- Varicella - Second dose

**11-12 Years:**
- Tdap - Adolescent booster
- HPV - 2-dose series
- Meningococcal (MenACWY) - First dose

**16 Years:**
- MenACWY - Booster
- MenB - May be given (shared decision)

**Why This Timing?**

| Age | Reason for Timing |
|-----|-------------------|
| Birth | Early HepB prevents transmission from infected mothers |
| 2 months | Maternal antibodies waning; immune system ready |
| 12 months | MMR/Varicella: Maternal antibodies interfere earlier |
| 11-12 years | HPV before sexual activity; meningococcal for adolescent risk |

**Catch-Up Schedules:**
- If behind, vaccines can be caught up
- Minimum intervals between doses must be followed
- Never restart a series from the beginning`,
      keyTerms: [
        { term: 'DTaP', definition: 'Vaccine protecting against Diphtheria, Tetanus, and Pertussis (whooping cough)' },
        { term: 'MMR', definition: 'Combined vaccine for Measles, Mumps, and Rubella' },
        { term: 'IPV', definition: 'Inactivated Polio Vaccine given by injection' },
        { term: 'Hib', definition: 'Vaccine against Haemophilus influenzae type b bacteria' },
        { term: 'minimum interval', definition: 'Shortest time allowed between vaccine doses for proper immunity' },
      ],
      analogies: [
        'The vaccine schedule is like a recipe - the right ingredients at the right time create the best result.',
      ],
    },
    3: {
      level: 3,
      summary: 'Pediatric immunization schedules are based on immunologic maturation, disease epidemiology, vaccine efficacy data, and practical considerations to optimize protection during vulnerable periods.',
      explanation: `**Comprehensive Pediatric Schedule (ACIP 2024-2025):**

**Birth to 6 Months (Primary Series):**

| Vaccine | Birth | 2mo | 4mo | 6mo | Notes |
|---------|-------|-----|-----|-----|-------|
| HepB | Dose 1 | | | Dose 2-3 | Complete by 6-18mo |
| DTaP | | Dose 1 | Dose 2 | Dose 3 | |
| Hib | | Dose 1 | Dose 2 | Dose 3 | PRP-T 3-dose; PRP-OMP 2-dose |
| PCV15/20 | | Dose 1 | Dose 2 | Dose 3 | |
| IPV | | Dose 1 | Dose 2 | | Dose 3 at 6-18mo |
| RV | | Dose 1 | Dose 2 | Dose 3 | RV5 3-dose; RV1 2-dose |
| Influenza | | | | Start | Annual, 2 doses first season |

**6 Months to 6 Years:**

| Vaccine | 12-15mo | 15-18mo | 4-6yr | Notes |
|---------|---------|---------|-------|-------|
| Hib | Dose 4 | | | Final dose |
| PCV | Dose 4 | | | Final dose |
| MMR | Dose 1 | | Dose 2 | |
| Varicella | Dose 1 | | Dose 2 | |
| HepA | Dose 1 | | | Dose 2 at 6+ months later |
| DTaP | | Dose 4 | Dose 5 | |
| IPV | | | Dose 4 | Final dose |

**Adolescent Schedule (11-18 Years):**

| Vaccine | 11-12yr | 13-18yr | Notes |
|---------|---------|---------|-------|
| Tdap | Single dose | | Replaces Td |
| HPV | Dose 1,2 | | 9-14yo: 2 doses; 15+: 3 doses |
| MenACWY | Dose 1 | Dose 2 (16yr) | |
| MenB | | Consider | Shared decision or outbreaks |

**Immunologic Principles:**

*Maternal Antibody Interference:*
- Transplacental IgG provides passive immunity
- Half-life ~3-4 weeks; significant decline by 6 months
- MMR delayed to 12 months due to measles antibody interference
- Maternal RSV antibodies protect in early months

*Vaccine Immunogenicity by Age:*
- T-dependent responses mature by 2 months
- T-independent responses (polysaccharides) poor until 2 years
- Conjugate vaccines (PCV, Hib) overcome this limitation
- Adjuvants enhance responses in young infants

**Combination Vaccines:**

| Product | Components | Doses |
|---------|------------|-------|
| Pediarix | DTaP-HepB-IPV | 3 |
| Pentacel | DTaP-IPV-Hib | 4 |
| Vaxelis | DTaP-IPV-Hib-HepB | 3 |
| ProQuad | MMR-Varicella | 2 |
| Kinrix | DTaP-IPV | 1 (4-6yr) |
| Quadracel | DTaP-IPV | 1 (4-6yr) |

**Catch-Up Vaccination:**

*General Principles:*
- Do not restart series regardless of interval
- Maintain minimum intervals and ages
- Accelerated schedules available
- Invalid doses (too early/close) should be repeated

*Minimum Intervals:*
| Vaccine | Between Doses |
|---------|---------------|
| DTaP | 4 weeks (doses 1-3); 6 months (dose 4); 6 months (dose 5) |
| IPV | 4 weeks; final dose ≥6 months after previous |
| MMR | 4 weeks |
| Varicella | 3 months (under 13); 4 weeks (13+) |
| HepB | 4 weeks (1-2); 8 weeks (2-3); 16 weeks (1-3) |`,
      keyTerms: [
        { term: 'conjugate vaccine', definition: 'Vaccine linking polysaccharide to protein carrier to induce T-cell dependent immunity in young children' },
        { term: 'maternal antibody interference', definition: 'Passively acquired maternal IgG can neutralize vaccine antigens, reducing efficacy' },
        { term: 'accelerated schedule', definition: 'Compressed vaccination timeline using minimum intervals for rapid protection' },
        { term: 'PRP-T/PRP-OMP', definition: 'Hib vaccine types conjugated to different carrier proteins with different dosing schedules' },
        { term: 'invalid dose', definition: 'Dose given too early or too close to prior dose that must be repeated' },
      ],
      clinicalNotes: 'Always use age-appropriate formulations. DTaP (not Tdap) for children under 7. Document vaccines given and manufacturer. Report adverse events to VAERS.',
    },
    4: {
      level: 4,
      summary: 'Pediatric immunization optimization requires understanding developmental immunology, vaccine antigen processing, adjuvant mechanisms, and clinical trial evidence to address complex scenarios including preterm infants, immunocompromised children, and vaccine-hesitant families.',
      explanation: `**Developmental Immunology:**

**Neonatal Immune System:**

*Innate Immunity:*
- Functional neutrophils but reduced chemotaxis
- Lower complement levels
- Decreased TLR responses
- Monocytes/macrophages with altered cytokine production

*Adaptive Immunity:*
- Predominantly naive T cells
- Th2 skewing (tolerogenic environment in utero)
- B cells present but limited isotype switching
- Reduced somatic hypermutation

*Clinical Implications:*
- Enhanced susceptibility to encapsulated bacteria
- BCG vaccination effective (live vaccine, innate triggers)
- Hepatitis B vaccine works via TLR-dependent mechanisms
- Multiple doses needed to overcome tolerogenic bias

**Vaccine Responses by Age:**

| Component | Neonatal Response | Infant Response | Implications |
|-----------|-------------------|-----------------|--------------|
| T-dependent protein | Moderate | Good | DTaP effective from 2mo |
| Polysaccharide | Poor | Poor until 2yo | Need conjugate vaccines |
| Live attenuated | Variable | Good (post-maternal ab) | MMR at 12mo |
| Adjuvanted | Enhanced | Enhanced | Aluminum salts in most pediatric vaccines |

**Complex Vaccination Scenarios:**

*Preterm Infants:*
- Vaccinate according to chronological age (not gestational)
- Same doses as term infants
- HepB timing: If birth weight <2000g AND mother HBsAg-negative, delay first dose to 1 month or hospital discharge
- Monitor for apnea/bradycardia 48-72 hours after vaccination in NICU
- Consider RSV prophylaxis (palivizumab) if qualifying criteria

*Immunocompromised Children:*

| Condition | Live Vaccines | Inactivated | Special Considerations |
|-----------|--------------|-------------|----------------------|
| HIV (CD4 ≥15%) | MMR, Varicella OK | All | Check titers; may need extra doses |
| HIV (CD4 <15%) | Contraindicated | All | Defer live until immune reconstitution |
| Primary immunodeficiency | Generally contraindicated | Usually OK | Consult immunology |
| Malignancy on chemo | Contraindicated | Timing-dependent | 3 months post-chemo for live |
| Solid organ transplant | Contraindicated | Yes | Vaccinate pretransplant; revaccinate post |
| HSCT | Contraindicated | Revaccinate | Restart vaccines 6-12 months post |
| Asplenia | No live bacterial | All | Pneumococcal, Men ACWY+B, Hib critical |

*Household Contacts of Immunocompromised:*
- Vaccinate to create protective cocoon
- IPV (not OPV) for polio
- MMR and varicella OK (no shedding/transmission risk)
- LAIV avoided (potential shedding)

**Vaccine Hesitancy:**

*Common Concerns and Responses:*

| Concern | Evidence-Based Response |
|---------|------------------------|
| Too many vaccines | Immune system handles millions of antigens daily |
| Aluminum adjuvants | Amount less than in breast milk/formula; rapidly excreted |
| Overwhelm immune system | Combination vaccines well-tolerated; fewer antigens than natural infection |
| Vaccine-autism link | Multiple studies (>1 million children) show no association |
| Natural immunity better | Disease risks far exceed vaccine risks |
| Spacing out vaccines | Prolongs vulnerability; no safety benefit |

*Communication Strategies:*
- Presumptive approach: "Your child is due for vaccines today"
- Motivational interviewing techniques
- Address specific concerns with empathy
- Recommend strongly but respect autonomy
- Document refusal; offer vaccines at future visits

**Vaccine Safety Monitoring:**

*Pediatric-Specific Concerns:*
- Febrile seizures: Slightly increased with MMR+Varicella (ProQuad) at 12-15mo
- Intussusception: Very small risk with rotavirus (1-2/100,000)
- SIRVA: Shoulder injury related to vaccine administration
- Syncope: Common in adolescents; observe 15 minutes post-vaccine`,
      keyTerms: [
        { term: 'chronological age', definition: 'Time since birth, used for vaccine timing in preterm infants' },
        { term: 'TLR (toll-like receptor)', definition: 'Pattern recognition receptors triggering innate immunity; target of vaccine adjuvants' },
        { term: 'tolerogenic', definition: 'Promoting immune tolerance rather than active response' },
        { term: 'presumptive recommendation', definition: 'Communication style assuming vaccination will occur rather than asking about willingness' },
        { term: 'SIRVA', definition: 'Shoulder Injury Related to Vaccine Administration; inflammation from improper injection technique' },
      ],
      clinicalNotes: 'For preterm infants, use full vaccine doses. Document all vaccines refused. Consider mild sedation/distraction for anxious children. Report adverse events even if uncertain about causality.',
    },
    5: {
      level: 5,
      summary: 'Pediatric immunization practice requires integration of systems immunology, vaccine development science, behavioral economics of parental decision-making, and public health infrastructure to achieve and maintain herd immunity while addressing emerging pathogens and evolving epidemiology.',
      explanation: `**Systems-Level Pediatric Immunization:**

**1. Herd Immunity Thresholds:**

| Disease | R0 | Herd Immunity Threshold | Current US Coverage |
|---------|----|-----------------------|-------------------|
| Measles | 12-18 | 92-95% | ~91% (declining) |
| Pertussis | 12-17 | 92-94% | ~93% |
| Mumps | 4-7 | 75-86% | ~91% |
| Varicella | 10-12 | 90-92% | ~90% |
| Polio | 5-7 | 80-86% | ~93% |
| Rubella | 5-7 | 83-86% | ~91% |

*Implications:*
- Measles outbreaks when coverage drops below threshold
- Geographic clustering of undervaccination creates vulnerable pockets
- School entry requirements essential for maintaining coverage
- COVID-19 pandemic disrupted routine vaccination

**2. Vaccine Development and Approval:**

*Pediatric Trial Requirements:*
- Stepwise age de-escalation (adults → adolescents → children → infants)
- Safety database requirements (FDA guidance)
- Immunobridging studies (immune response vs. efficacy trial)
- Non-inferiority comparisons to established vaccines

*Recent Pediatric Approvals:*

| Vaccine | Year | Notes |
|---------|------|-------|
| COVID-19 (6mo+) | 2022 | mRNA and protein subunit |
| Dengue (9-16yo) | 2019 | Endemic areas; prior infection required |
| RSV maternal | 2023 | Protects newborns via maternal antibodies |
| Nirsevimab (RSV) | 2023 | Monoclonal antibody for infants |
| PCV20 pediatric | 2024 | Expanded serotype coverage |

**3. Immunization Program Quality:**

*VFC Program (Vaccines for Children):*
- Federally funded vaccines for eligible children
- Medicaid, uninsured, underinsured, AI/AN
- Covers ~50% of US children
- Critical for equity in vaccine access

*Quality Metrics:*
| Measure | Target | Data Source |
|---------|--------|-------------|
| DTaP series completion | ≥90% | NIS-Child |
| MMR (1+ dose) | ≥90% | NIS-Child |
| Kindergarten coverage | ≥95% | School surveys |
| Adolescent Tdap | ≥90% | NIS-Teen |
| HPV series completion | ≥80% | NIS-Teen (lagging) |

*Improvement Strategies:*
- Immunization Information Systems (IIS)
- Reminder/recall systems
- Provider assessment and feedback
- AFIX (Assessment, Feedback, Incentives, eXchange)
- Standing orders
- School-located vaccination

**4. Emerging Challenges:**

*Vaccine Hesitancy:*
- WHO top 10 global health threat (2019)
- Increasing exemption rates in some states
- Social media misinformation
- COVID-19 politicization affecting routine vaccines

*Intervention Evidence:*

| Strategy | Effect Size | Evidence Quality |
|----------|-------------|------------------|
| Reminder/recall | Moderate | Strong |
| Provider recommendation | Large | Strong |
| Presumptive announcement | Moderate | Moderate |
| Educational interventions alone | Small/None | Strong (limited effect) |
| Motivational interviewing | Moderate | Moderate |
| Eliminating non-medical exemptions | Large | Strong |

**5. Global Immunization:**

*EPI (Expanded Programme on Immunization):*
- BCG, OPV/IPV, DTP-HepB-Hib, Measles, PCV, Rotavirus
- Coverage targets: 90% national, 80% district
- Gavi support for low-income countries

*Eradication Progress:*
- Polio: Wild-type in 2 countries (Pakistan, Afghanistan)
- Measles: Regional elimination achieved and lost
- Rubella/CRS: Americas declared eliminated (2015)

*Challenges:*
- Cold chain maintenance
- Conflict zones
- Community trust
- Supply chain disruptions
- COVID-19 backsliding

**6. Novel Vaccine Platforms:**

*mRNA Vaccines in Pediatrics:*
- COVID-19 experience expanded platform acceptance
- RSV, influenza, CMV candidates in development
- Potential for combination mRNA vaccines
- Manufacturing flexibility for outbreak response

*Mucosal Vaccines:*
- Live attenuated influenza (LAIV)
- Oral rotavirus
- Mucosal COVID vaccines in development
- Potential for better mucosal immunity

**7. Legal and Ethical Framework:**

*School Vaccination Requirements:*
- All 50 states have requirements
- Medical exemptions: All states
- Religious exemptions: Most states
- Philosophical exemptions: 15 states
- Trend toward stricter requirements (CA, NY, ME, WV)

*Parental Autonomy vs. Child Welfare:*
- Mature minor doctrine
- Court-ordered vaccination (rare)
- Medical neglect considerations
- Best interest of the child standard

*Healthcare Provider Obligations:*
- Strong recommendation duty
- Documentation of refusal
- Continued care regardless of vaccine decisions
- Balance persuasion with respect`,
      keyTerms: [
        { term: 'R0 (basic reproduction number)', definition: 'Average number of cases generated by one infected person in susceptible population' },
        { term: 'VFC (Vaccines for Children)', definition: 'Federal entitlement program providing vaccines to eligible children at no cost' },
        { term: 'immunobridging', definition: 'Using immune response as surrogate for clinical efficacy in vaccine trials' },
        { term: 'AFIX', definition: 'Assessment, Feedback, Incentives, eXchange; CDC quality improvement program for immunization' },
        { term: 'NIS', definition: 'National Immunization Survey; CDC surveillance of vaccination coverage' },
      ],
      clinicalNotes: `**Implementation Pearls:**
- Know your state's exemption laws and school requirements
- Use IIS to identify undervaccinated patients
- Implement standing orders for nursing staff
- Bundle vaccine conversations with well-child care
- Address hesitancy with empathy, not judgment
- Stay current on ACIP updates and catch-up schedules
- Collaborate with schools and community organizations
- Report adverse events to VAERS`,
    },
  },

  media: [
    {
      id: 'pediatric-schedule-chart',
      type: 'diagram',
      filename: 'pediatric-immunization-schedule-2024.svg',
      title: 'Childhood Immunization Schedule 2024-2025',
      description: 'Visual chart of recommended vaccines from birth through 18 years',
    },
  ],

  citations: [
    {
      id: 'cdc-child-schedule',
      type: 'website',
      title: 'Recommended Child and Adolescent Immunization Schedule',
      source: 'Centers for Disease Control and Prevention',
      url: 'https://www.cdc.gov/vaccines/schedules/hcp/imz/child-adolescent.html',
      accessedDate: '2025-01-24',
    },
    {
      id: 'aap-immunization',
      type: 'website',
      title: 'Immunization Resources',
      source: 'American Academy of Pediatrics',
      url: 'https://www.aap.org/en/patient-care/immunizations/',
      accessedDate: '2025-01-24',
    },
  ],

  crossReferences: [
    { targetId: 'concept-adult-immunization-schedule', targetType: 'concept', relationship: 'related', label: 'Adult Immunizations' },
    { targetId: 'concept-vaccine-preventable-diseases', targetType: 'concept', relationship: 'related', label: 'Vaccine-Preventable Diseases' },
    { targetId: 'concept-well-child-visits', targetType: 'concept', relationship: 'related', label: 'Well-Child Visits' },
  ],

  tags: {
    systems: ['immune'],
    topics: ['preventive medicine', 'immunizations', 'pediatrics', 'public health'],
    keywords: ['childhood vaccines', 'immunization schedule', 'DTaP', 'MMR', 'HPV', 'well-child care'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['pediatrics', 'family medicine'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
