/**
 * Childhood Vaccines
 *
 * Comprehensive education on pediatric immunization schedule
 * based on CDC/ACIP guidelines.
 */

import { EducationalContent } from '../../types';

export const CHILDHOOD_VACCINES: EducationalContent = {
  id: 'concept-childhood-vaccines',
  type: 'concept',
  name: 'Childhood Vaccines',
  alternateNames: ['Pediatric immunizations', 'Child vaccination schedule', 'Kids vaccines'],

  levels: {
    1: {
      level: 1,
      summary: 'Childhood vaccines protect babies and children from serious diseases and are given at specific ages when they work best.',
      explanation: `Vaccines help children's bodies learn to fight dangerous diseases before they get sick. They are one of the safest ways to protect your child's health.

**Why Vaccinate Children:**
- Prevents serious diseases that can harm or kill
- Protects children when they are most vulnerable
- Some diseases have no cure, only prevention
- Keeps diseases from spreading to others

**Common Childhood Vaccines:**

**First Year of Life:**
- Hepatitis B (at birth)
- DTaP (diphtheria, tetanus, pertussis)
- Polio
- Hib (Haemophilus influenzae type b)
- PCV (pneumococcal)
- Rotavirus

**Ages 1-2 Years:**
- MMR (measles, mumps, rubella)
- Varicella (chickenpox)
- Hepatitis A

**Ages 4-6 Years:**
- Boosters of earlier vaccines
- Before starting school

**Ages 11-12 Years:**
- Tdap booster
- HPV vaccine
- Meningococcal vaccine

**Are Vaccines Safe?**
- Yes, vaccines are very safe
- Studied more than almost any other medicine
- Serious side effects are very rare
- Common side effects are mild (sore arm, low fever)

**Talk to Your Doctor If:**
- Your child is sick on vaccine day
- Your child had a reaction before
- You have questions or concerns`,
      keyTerms: [
        { term: 'vaccine', definition: 'Medicine that teaches the body to fight a disease' },
        { term: 'immunization', definition: 'The process of getting vaccinated and becoming protected' },
        { term: 'booster', definition: 'An extra dose given later to keep protection strong' },
      ],
      analogies: [
        'Vaccines are like training wheels for your immune system - they help it learn safely before facing the real thing.',
      ],
      examples: [
        'Baby Emma got her vaccines on schedule. When a measles outbreak happened at her daycare, she was protected while unvaccinated children got sick.',
      ],
    },
    2: {
      level: 2,
      summary: 'The childhood immunization schedule is designed to provide protection at the earliest safe age, with multiple doses building immunity and catch-up schedules available for children who fall behind.',
      explanation: `The CDC childhood vaccine schedule is based on extensive research about when vaccines work best and when children are most vulnerable.

**Birth to 15 Months Schedule:**

| Age | Vaccines |
|-----|----------|
| Birth | HepB (dose 1) |
| 2 months | DTaP, IPV, Hib, PCV, RV, HepB (dose 2) |
| 4 months | DTaP, IPV, Hib, PCV, RV |
| 6 months | DTaP, PCV, RV, HepB (dose 3), Flu (annually) |
| 12-15 months | MMR, Varicella, Hib, PCV, HepA |

**Ages 4-6 Years:**
- DTaP (booster)
- IPV (booster)
- MMR (dose 2)
- Varicella (dose 2)

**Ages 11-12 Years:**
- Tdap
- HPV (2 or 3 doses)
- MenACWY
- Consider MenB

**Key Vaccines Explained:**

*DTaP (Diphtheria, Tetanus, Pertussis):*
- Diphtheria: Throat infection, can block airway
- Tetanus: "Lockjaw" from wound infection
- Pertussis: "Whooping cough" - dangerous for babies

*MMR (Measles, Mumps, Rubella):*
- Measles: Rash, fever, can cause brain damage
- Mumps: Swollen glands, can cause deafness
- Rubella: Dangerous if pregnant woman exposed

*Polio (IPV):*
- Causes paralysis
- Nearly eliminated worldwide
- Vaccination still essential

**Why Multiple Doses?**
- First dose "primes" the immune system
- Additional doses build stronger, lasting protection
- Some protection wanes without boosters
- Schedule is optimized for best response

**Catch-Up Schedules:**
- Available for children who missed vaccines
- Minimum intervals between doses
- Consult CDC catch-up schedule
- Most children can catch up safely

**Combination Vaccines:**
- Reduce number of shots
- Examples: Pediarix (DTaP-HepB-IPV), ProQuad (MMR-Varicella)
- Same protection, fewer injections`,
      keyTerms: [
        { term: 'DTaP', definition: 'Diphtheria, tetanus, and acellular pertussis vaccine for children' },
        { term: 'IPV', definition: 'Inactivated polio vaccine; given by injection' },
        { term: 'MenACWY', definition: 'Meningococcal conjugate vaccine covering serogroups A, C, W, Y' },
        { term: 'combination vaccine', definition: 'Single shot containing multiple vaccines to reduce injections' },
      ],
      analogies: [
        'Multiple vaccine doses are like practice sessions for sports - the more you practice, the better you perform when it counts.',
      ],
    },
    3: {
      level: 3,
      summary: 'The childhood immunization schedule reflects immunologic principles of optimal antibody response timing, herd immunity thresholds, and disease epidemiology, with contraindications, precautions, and catch-up schedules guiding clinical decision-making.',
      explanation: `**Immunologic Basis of Schedule:**

*Why Start at Birth (HepB):*
- Prevent perinatal transmission
- Immune system can respond
- High risk of chronic infection if infected as infant

*Why 2-Month Start (Most Vaccines):*
- Maternal antibodies waning
- Infant immune system mature enough to respond
- Protection needed before exposure increases

*Multiple Doses:*
- Primary series: Primes immune memory
- Boosters: Expand and sustain protection
- T-cell and B-cell memory development

**Vaccine-Specific Details:**

*Rotavirus:*
- Oral vaccine
- Maximum age for first dose: 14 weeks 6 days
- Maximum age for last dose: 8 months 0 days
- Cannot be given outside age window (intussusception risk)

*MMR and Varicella:*
- Live attenuated vaccines
- Minimum age: 12 months (maternal antibody interference)
- Second dose: At least 4 weeks later
- Can be given as MMRV (ProQuad)

*Meningococcal:*
- MenACWY: 11-12 years, booster at 16
- MenB: 16-23 years (shared decision) or high-risk
- Complement deficiency, asplenia: Both vaccines required

**Contraindications and Precautions:**

*True Contraindications:*
- Severe allergic reaction to prior dose or component
- Encephalopathy within 7 days of pertussis vaccine
- For live vaccines: Severe immunodeficiency

*Not Contraindications (Can Vaccinate):*
- Mild illness
- Current antibiotic use
- Prematurity (use chronologic age)
- Breastfeeding
- Family history of adverse events

**Special Populations:**

*Preterm Infants:*
- Use chronologic age, not corrected age
- May need additional Hep B dose if <2000g at birth
- Full doses (no reduction)

*Immunocompromised Children:*
- Avoid live vaccines (MMR, varicella, rotavirus)
- May need additional doses of inactivated vaccines
- Consult IDSA guidelines

*HIV-Exposed/Infected:*
- Most vaccines on schedule
- MMR if CD4 ≥15% (avoid if severely immunocompromised)
- No rotavirus if HIV-infected

**Catch-Up Guidelines:**

*Minimum Intervals:*
- Cannot accelerate beyond minimum
- Allows faster completion when behind
- Use CDC catch-up schedule tables

*Lapsed Series:*
- Do not restart series
- Continue from where stopped
- "Every dose counts"

**Adverse Events:**

*Common (Expected):*
- Local: Pain, redness, swelling
- Systemic: Fever, fussiness, fatigue

*Rare Serious:*
- Anaphylaxis: ~1 per million doses
- Febrile seizures: Increased with MMRV
- Intussusception: Rotavirus (background rate)`,
      keyTerms: [
        { term: 'maternal antibodies', definition: 'Antibodies passed from mother to infant providing temporary protection' },
        { term: 'live attenuated vaccine', definition: 'Vaccine containing weakened pathogen that can replicate but not cause disease' },
        { term: 'minimum interval', definition: 'Shortest acceptable time between vaccine doses for valid immunity' },
        { term: 'intussusception', definition: 'Intestinal blockage monitored as rare rotavirus vaccine adverse event' },
      ],
      clinicalNotes: 'Never exceed maximum rotavirus age limits. Use chronologic age for preterm infants. Mild illness is not a contraindication. Live vaccines spaced ≥4 weeks apart if not given same day. Document vaccine lot numbers.',
    },
    4: {
      level: 4,
      summary: 'Pediatric vaccination practice integrates evidence on vaccine effectiveness, duration of protection, outbreak response, and addressing vaccine hesitancy, with consideration of novel vaccines, accelerated schedules, and global eradication efforts.',
      explanation: `**Vaccine Effectiveness Data:**

| Vaccine | Effectiveness |
|---------|---------------|
| MMR (measles) | 97% (2 doses) |
| DTaP (pertussis) | 80-90% initially, wanes |
| IPV (polio) | 99% (3 doses) |
| Hib | >95% |
| PCV13 | 80-90% invasive disease |

**Duration of Protection:**

*Long-Lasting:*
- Measles, mumps, rubella: Lifelong after 2 doses
- Hepatitis B: 20+ years, likely lifelong
- Polio: Lifelong

*Waning Protection:*
- Pertussis: Immunity wanes 5-10 years
- Reason for Tdap boosters
- Explains outbreaks in vaccinated adolescents

**Outbreak Response:**

*Measles:*
- High transmissibility (R0 = 12-18)
- Herd immunity requires >95% coverage
- Post-exposure prophylaxis: MMR within 72 hours

*Pertussis:*
- Outbreaks occur despite vaccination
- Recommend Tdap for close contacts
- Cocooning: Vaccinate household before newborn arrival

**Vaccine Hesitancy:**

*Parental Concerns:*
- Too many vaccines, too soon
- Autism (thoroughly debunked)
- "Natural" immunity preferred
- Ingredient concerns (thimerosal, aluminum)

*Communication Strategies:*
- Listen actively to concerns
- Acknowledge emotions
- Provide evidence simply
- Share personal recommendation
- Use presumptive language
- Offer to revisit

*Addressing Specific Myths:*
- Thimerosal: Removed from childhood vaccines (except multi-dose flu)
- Aluminum: Amount is less than in formula/breast milk
- Autism: Extensive studies show no link
- Immune overload: Children encounter more antigens daily than in all vaccines

**Novel Vaccines:**

*RSV (Infants):*
- Nirsevimab: Monoclonal antibody for all infants <8 months
- Given before first RSV season
- Or maternal RSVpreF vaccine in pregnancy

*MenB:*
- Bexsero, Trumenba
- Shared decision-making ages 16-23
- Required for high-risk (complement deficiency, outbreaks)

**Alternative Schedules:**

*Requests to Space Out:*
- No evidence supports alternative schedules
- Increases time unprotected
- May lead to incomplete vaccination
- Can discuss concerns while recommending standard schedule

*Medical Exemptions:*
- True contraindications only
- Document clearly
- Rare

**Global Context:**

*Polio Eradication:*
- Endemic only in Afghanistan, Pakistan
- Final push ongoing
- Switch from OPV to IPV in most countries

*Measles Elimination:*
- Eliminated in US (imported cases occur)
- Outbreaks from unvaccinated clusters
- Global goal: Elimination

*Equity:*
- Gavi supports vaccination in low-income countries
- Supply chain challenges
- Cold chain requirements`,
      keyTerms: [
        { term: 'herd immunity', definition: 'Population-level protection when enough individuals are immune to prevent disease spread' },
        { term: 'cocooning', definition: 'Vaccinating those around a newborn to protect the infant before they can be vaccinated' },
        { term: 'nirsevimab', definition: 'Monoclonal antibody providing passive immunity to RSV for infants' },
        { term: 'R0', definition: 'Basic reproduction number; average number of cases one case generates in susceptible population' },
      ],
      clinicalNotes: 'Use motivational interviewing for vaccine hesitancy. Measles requires >95% coverage for herd immunity. Recommend nirsevimab for all infants before RSV season. Document refusals and re-offer at subsequent visits.',
    },
    5: {
      level: 5,
      summary: 'Advanced pediatric immunization integrates immunologic maturation principles, correlates of protection research, implementation science for coverage optimization, and global vaccine equity, while navigating novel vaccine platforms, combination vaccines, and strategies to combat vaccine hesitancy.',
      explanation: `**Immunologic Development:**

*Neonatal Immunity:*
- Th2-biased (humoral)
- Developing Th1 responses
- Maternal antibody interference
- Vaccines can overcome with proper design

*Immune Maturation:*
- B-cell development continues through childhood
- Marginal zone B cells (polysaccharide response) mature by age 2
- Reason for conjugate vaccines in infants (protein carrier)

*Correlates of Protection:*
| Vaccine | Correlate |
|---------|-----------|
| HepB | Anti-HBs ≥10 mIU/mL |
| Tetanus | Antitoxin ≥0.01 IU/mL |
| Measles | Neutralizing antibody |
| Hib | Anti-PRP ≥0.15 μg/mL |

**Conjugate Vaccine Technology:**

*Principle:*
- Polysaccharide antigen alone: T-independent response
- Conjugate to protein carrier: T-dependent response
- Induces memory, works in infants

*Examples:*
- Hib: First successful conjugate
- PCV: 7-valent → 13-valent → 15-valent → 20-valent
- MenACWY: Conjugated to diphtheria or tetanus toxoid

**Novel Platforms:**

*mRNA in Pediatrics:*
- COVID-19: Approved for children ≥6 months
- Future: Influenza, RSV, others

*Viral Vectors:*
- Ebola: Used in outbreak settings
- COVID-19: Age restrictions on some

**Implementation Science:**

*Coverage Determinants:*
- Access (geographic, financial)
- Provider recommendation
- Parental attitudes
- Reminder systems
- School requirements

*Interventions That Work:*
- Provider recommendation (most impactful)
- Reminder-recall systems
- Reducing out-of-pocket costs
- Standing orders
- School-based vaccination

*Tracking:*
- Immunization information systems
- Assessment-feedback-incentive-exchange (AFIX)
- Adolescent vaccination platforms

**Addressing Hesitancy:**

*Understanding Types:*
- Complacent: Don't perceive risk
- Confident (low): Safety/efficacy concerns
- Convenience: Access barriers

*C.A.S.E. Approach:*
- Corroborate: Acknowledge concerns
- About me: Share why you believe in vaccines
- Science: Explain evidence simply
- Explain: Recommend vaccination

*Motivational Interviewing:*
- Open-ended questions
- Affirm
- Reflect
- Summarize
- Elicit change talk

**Global Vaccine Equity:**

*Challenges:*
- Cold chain maintenance
- Healthcare worker availability
- Conflict zones
- Funding gaps
- Vaccine nationalism (COVID highlighted)

*Innovations:*
- Heat-stable vaccines (MenAfriVac)
- Microarray patches
- Simplified schedules
- Community health worker delivery

**Research Frontiers:**

*Next-Generation Vaccines:*
- Broader pneumococcal coverage
- Universal influenza
- Norovirus
- Group B streptococcus (maternal)
- RSV maternal/infant strategies

*Mucosal Immunity:*
- Oral/nasal vaccines
- IgA response at site of infection
- May prevent transmission better

*Therapeutic Vaccines:*
- Cancer prevention (HPV, HBV)
- Therapeutic applications (research)

**Quality Metrics:**

*Coverage Targets:*
- 4:3:1:3:3:1:4 (DTaP, polio, MMR, Hib, HepB, varicella, PCV)
- NIS (National Immunization Survey) tracking
- Healthy People 2030 goals

*Provider Assessment:*
- AFIX visits
- Identify missed opportunities
- Recall systems

*Equity Monitoring:*
- Coverage by race/ethnicity
- Coverage by insurance status
- Geographic disparities`,
      keyTerms: [
        { term: 'correlate of protection', definition: 'Measurable immune response associated with protection against disease' },
        { term: 'conjugate vaccine', definition: 'Polysaccharide antigen linked to protein carrier to enhance immune response in infants' },
        { term: 'AFIX', definition: 'Assessment-Feedback-Incentive-Exchange; CDC program to improve provider immunization practices' },
        { term: 'microarray patch', definition: 'Needle-free vaccine delivery technology using dissolving microneedles' },
      ],
      clinicalNotes: `**Clinical Excellence:**
- Follow current ACIP schedule precisely
- Use combination vaccines to reduce injections
- Implement reminder-recall systems
- Train staff in motivational interviewing
- Never miss an opportunity to vaccinate
- Document all vaccines in IIS
- Track coverage rates and disparities
- Use catch-up schedule for those behind
- Recommend nirsevimab for RSV prevention
- Stay current: New vaccines and recommendations evolve`,
    },
  },

  media: [
    {
      id: 'childhood-vaccine-schedule',
      type: 'diagram',
      filename: 'childhood-immunization-schedule.svg',
      title: 'Childhood Immunization Schedule',
      description: 'Visual timeline of recommended childhood vaccines from birth to 18 years',
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
  ],

  crossReferences: [
    { targetId: 'concept-how-vaccines-work', targetType: 'concept', relationship: 'related', label: 'How Vaccines Work' },
    { targetId: 'concept-vaccine-safety', targetType: 'concept', relationship: 'related', label: 'Vaccine Safety' },
  ],

  tags: {
    systems: ['immune'],
    topics: ['preventive medicine', 'pediatrics', 'vaccination'],
    keywords: ['vaccines', 'immunization', 'childhood', 'pediatric', 'ACIP', 'MMR', 'DTaP'],
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
