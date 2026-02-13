import { EducationalContent } from '../../types';

export const childhoodVaccinationSchedule: EducationalContent = {
  id: 'pediatrics-vaccination-schedule',
  type: 'concept',
  name: 'Childhood Vaccination Schedule',
  alternateNames: ['Immunization Schedule', 'Pediatric Vaccine Schedule', 'Childhood Immunizations'],

  levels: {
    1: {
      level: 1,
      summary: 'Vaccines are shots that teach your child\'s body how to fight dangerous diseases, given at specific ages for the best protection.',
      explanation: `Vaccines are one of the most important things you can do to keep your child healthy. They protect against serious diseases that used to make many children very sick or even die.

**How Vaccines Work:**
Think of vaccines as training for your immune system. They contain tiny, harmless pieces of germs (or weakened versions) that teach your body to recognize and fight the real thing if you ever encounter it.

**Why the Timing Matters:**
- Babies are born with some protection from mom, but it fades
- Vaccines are timed to protect when kids are most vulnerable
- Some diseases are most dangerous for babies

**Vaccines Your Child Needs:**

*At Birth:*
- Hepatitis B (first dose)

*At 2 Months:*
- DTaP (diphtheria, tetanus, whooping cough)
- Polio
- Hib (Haemophilus influenzae type b)
- PCV (pneumococcal)
- Rotavirus
- Hepatitis B (second dose)

*At 4 Months:*
- Same vaccines as 2 months (second round)

*At 6 Months:*
- Same vaccines (third round)
- Flu shot (every year starting at 6 months)

*At 12-15 Months:*
- MMR (measles, mumps, rubella)
- Varicella (chickenpox)
- Hepatitis A

*At 4-6 Years:*
- Boosters of DTaP, polio, MMR, varicella

*At 11-12 Years:*
- Tdap booster
- HPV (human papillomavirus)
- Meningococcal vaccine

**Common Questions:**

*"Why so many shots?"*
We have vaccines for more diseases now than ever before, which is a good thing! Combination vaccines help reduce the number of shots.

*"Are vaccines safe?"*
Yes! Vaccines are thoroughly tested. Minor side effects (sore arm, mild fever) are common and show the immune system is responding.

*"What about autism?"*
Multiple large studies involving millions of children have shown no link between vaccines and autism.`,
      keyTerms: [
        { term: 'vaccine', definition: 'A shot that teaches your body to fight a specific disease' },
        { term: 'immune system', definition: 'Your body\'s defense system against germs' },
        { term: 'booster', definition: 'An extra dose of vaccine given later to strengthen protection' },
        { term: 'combination vaccine', definition: 'One shot that protects against multiple diseases' },
      ],
      analogies: [
        'Vaccines are like a wanted poster for your immune system - they show your body what the bad guys look like so it can catch them quickly.',
        'Getting vaccinated is like training with a practice dummy before the real game - your body learns the moves without any real danger.',
      ],
      examples: [
        'The MMR vaccine protects against measles, which can cause serious brain damage in children.',
        'Before the polio vaccine, thousands of children were paralyzed every year. Now polio is almost eliminated worldwide.',
      ],
    },
    2: {
      level: 2,
      summary: 'The CDC-recommended childhood immunization schedule provides vaccines at optimal ages to ensure protection during periods of highest vulnerability to vaccine-preventable diseases.',
      explanation: `The childhood immunization schedule is developed by the Advisory Committee on Immunization Practices (ACIP) based on immune response data and disease epidemiology.

**Vaccine Schedule (Birth through 18 years):**

**Birth:**
- Hepatitis B (HepB) - dose 1

**2 Months:**
- HepB - dose 2
- DTaP (Diphtheria, Tetanus, Pertussis) - dose 1
- Hib (Haemophilus influenzae type b) - dose 1
- IPV (Inactivated Polio Vaccine) - dose 1
- PCV15 or PCV20 (Pneumococcal Conjugate) - dose 1
- RV (Rotavirus) - dose 1

**4 Months:**
- DTaP - dose 2
- Hib - dose 2
- IPV - dose 2
- PCV - dose 2
- RV - dose 2

**6 Months:**
- DTaP - dose 3
- Hib - dose 3 (or 4, depending on brand)
- PCV - dose 3
- RV - dose 3 (if using RotaTeq)
- HepB - dose 3 (anytime 6-18 months)
- Influenza - annual (start at 6 months)

**12-15 Months:**
- Hib - final dose
- PCV - dose 4
- MMR (Measles, Mumps, Rubella) - dose 1
- Varicella - dose 1
- HepA (Hepatitis A) - dose 1

**15-18 Months:**
- DTaP - dose 4

**4-6 Years:**
- DTaP - dose 5
- IPV - dose 4
- MMR - dose 2
- Varicella - dose 2

**11-12 Years:**
- Tdap (Tetanus, Diphtheria, Pertussis booster)
- HPV (Human Papillomavirus) - 2 doses (6-12 months apart)
- MenACWY (Meningococcal conjugate) - dose 1

**16-18 Years:**
- MenACWY - dose 2
- MenB (Meningococcal B) - 2 doses (shared decision-making)

**Understanding Vaccine Types:**

*Live Attenuated:* MMR, Varicella, Rotavirus
- Weakened virus creates strong immune response
- Contraindicated in immunocompromised patients

*Inactivated/Killed:* IPV, Hepatitis A, Influenza (shot)
- Cannot cause disease
- May need multiple doses

*Subunit/Conjugate:* DTaP, Hib, PCV, HepB, HPV
- Use pieces of the germ
- Very safe, need boosters

**Catch-Up Schedule:**
For children who miss doses, catch-up schedules exist with minimum intervals between doses.

**Special Circumstances:**
- Premature infants: Vaccinate at chronological age
- Immunocompromised: Avoid live vaccines, may need extra doses
- Egg allergy: Most vaccines safe, even flu vaccine`,
      keyTerms: [
        { term: 'ACIP', definition: 'Advisory Committee on Immunization Practices; CDC expert panel that develops vaccine recommendations' },
        { term: 'live attenuated vaccine', definition: 'Vaccine using weakened but living pathogens' },
        { term: 'conjugate vaccine', definition: 'Vaccine linking sugar coating of bacteria to protein to improve immune response' },
        { term: 'catch-up schedule', definition: 'Guidelines for vaccinating children who are behind on their immunizations' },
      ],
      analogies: [
        'The primary series is like foundation courses - you need them before the advanced classes (boosters).',
        'Live vaccines are like sparring with a partner who\'s been told to go easy - you learn to fight without getting hurt.',
      ],
    },
    3: {
      level: 3,
      summary: 'The ACIP immunization schedule reflects complex immunological principles including maternal antibody interference, immune maturation, and optimal antigen spacing, with vaccine-specific considerations for special populations.',
      explanation: `Understanding the rationale behind vaccine timing requires knowledge of developmental immunology and vaccine-specific characteristics.

**Immunological Basis of Schedule:**

*Neonatal Immune System:*
- Maternal IgG crosses placenta, protective for 3-6 months
- Can interfere with vaccine response (especially measles)
- T-cell responses immature at birth
- B-cell responses improve with age

*Why Start at 2 Months:*
- Maternal antibodies waning
- Immune system capable of response
- Pertussis, Hib peak incidence in early infancy
- DTaP series generates protective immunity by 6 months

**Vaccine-Specific Considerations:**

*Hepatitis B:*
- Birth dose critical for perinatal transmission prevention
- HBsAg-positive mothers: Also give HBIG within 12 hours
- Series completion by 6-18 months

*DTaP vs. Tdap:*
- DTaP: 5-dose series (2, 4, 6, 15-18 mo, 4-6 yr)
- Tdap: Reduced antigen booster at 11-12 years (less reactogenic)
- Maternal Tdap: 27-36 weeks each pregnancy (passive protection for newborn)

*Hib:*
- Conjugate vaccine overcomes poor polysaccharide response in <2 years
- Brand-specific scheduling (PRP-OMP vs. PRP-T)

*Pneumococcal:*
- PCV15 followed by PPSV23 for high-risk children
- PCV20: Alternative single-series option

*MMR:*
- Delayed to 12-15 months due to maternal antibody interference
- 2-dose series achieves 97% measles protection
- Earlier dosing (6-11 mo) for international travel - doesn't count toward series

*HPV:*
- 9-14 years: 2-dose schedule (0, 6-12 months)
- 15+ years: 3-dose schedule (0, 1-2, 6 months)
- Recommended through age 26; shared decision 27-45

*Meningococcal:*
- MenACWY: All adolescents (conjugate vaccine)
- MenB: Shared decision-making ages 16-23 (protein-based)
- High-risk groups need both

**Minimum Intervals:**

| Vaccine | Minimum Interval |
|---------|------------------|
| DTaP doses 1-3 | 4 weeks |
| DTaP doses 3-4 | 6 months |
| MMR doses | 4 weeks |
| IPV doses 1-2 | 4 weeks |
| HepB doses 1-2 | 4 weeks |
| HepB doses 2-3 | 8 weeks |

**Contraindications:**

*True Contraindications:*
- Anaphylaxis to vaccine/component
- Encephalopathy within 7 days of pertussis vaccine
- Immunodeficiency for live vaccines

*NOT Contraindications:*
- Mild illness
- Current antibiotic therapy
- Family history of adverse events
- Prematurity`,
      keyTerms: [
        { term: 'maternal antibody interference', definition: 'Placental IgG can block infant immune response to certain vaccines, requiring delayed administration' },
        { term: 'conjugate vaccine', definition: 'Polysaccharide antigen linked to carrier protein to enable T-cell dependent immune response in young children' },
        { term: 'HBIG', definition: 'Hepatitis B Immune Globulin; passive antibodies given with HepB vaccine to high-risk newborns' },
        { term: 'minimum interval', definition: 'Shortest time between vaccine doses that still generates adequate immune response' },
      ],
      clinicalNotes: 'Never restart a vaccine series regardless of interval since last dose. Doses given 4+ days before minimum age or interval can be counted. Multiple vaccines can be given at same visit (different injection sites or at least 1 inch apart).',
    },
    4: {
      level: 4,
      summary: 'Advanced immunization practice requires understanding of vaccine immunogenicity, efficacy versus effectiveness, correlates of protection, and management of complex scenarios including immunocompromised hosts and vaccine adverse events.',
      explanation: `Clinical mastery of immunization requires integration of immunology, epidemiology, and practical vaccine administration principles.

**Vaccine Immunology:**

*Primary Response:*
- Initial antigen exposure activates naive B and T cells
- IgM first, then class switching to IgG
- Memory B and T cells formed
- Peak antibody: 2-4 weeks

*Secondary Response (Booster):*
- Memory cells activated rapidly
- Higher affinity antibodies
- Faster, stronger response
- Basis for multi-dose series

*Correlates of Protection:*
- Anti-HBs ≥10 mIU/mL (Hepatitis B)
- Serum bactericidal antibody (Meningococcal)
- IgG antibodies ≥0.15 μg/mL (Hib)
- Neutralizing antibody levels (various)

**Efficacy vs. Effectiveness:**

*Vaccine Efficacy:*
- Measured in controlled trials
- MMR: 97% for measles after 2 doses
- DTaP: ~85% for pertussis (wanes over time)
- Varicella: 90% against disease, nearly 100% against severe

*Vaccine Effectiveness:*
- Real-world performance
- Affected by cold chain, administration technique, population factors

**Special Populations:**

*Immunocompromised Patients:*

| Condition | Live Vaccines | Inactivated |
|-----------|--------------|-------------|
| HIV (CD4 ≥15%) | MMR, VAR ok | All indicated |
| HIV (CD4 <15%) | Contraindicated | All indicated |
| HSCT | Wait 24 months | Revaccinate |
| Solid organ transplant | Before transplant | Before + after |
| Asplenia | No restriction | PCV, MenACWY, MenB, Hib |

*Pregnancy:*
- Recommended: Tdap (each pregnancy, 27-36 weeks), Influenza
- Contraindicated: MMR, Varicella, LAIV
- Travel: May consider IPV, HepA, HepB if needed

*Healthcare Workers:*
- Annual influenza
- Hepatitis B (check titers)
- MMR (if non-immune)
- Varicella (if non-immune)
- Tdap (once)

**Vaccine Adverse Events:**

*Expected Reactions:*
- Local: Pain, redness, swelling (50%)
- Systemic: Fever, irritability (10-30%)

*Rare Serious Events:*
- Anaphylaxis: ~1/million doses
- Febrile seizure: MMR ~1/3000 (benign)
- Intussusception: Rotavirus ~1/100,000 (historical, lower with current)
- GBS: Influenza ~1/million (background rate ~1-2/100,000)

*Vaccine Injury Compensation:*
- National Vaccine Injury Compensation Program (VICP)
- Table injuries presumed causally related
- Petitions filed within 3 years of injury

**Documentation:**
- Record: Vaccine, manufacturer, lot number, site, date
- VIS (Vaccine Information Statement) must be provided
- Report adverse events to VAERS`,
      keyTerms: [
        { term: 'correlate of protection', definition: 'Measurable immune response (usually antibody level) associated with protection against disease' },
        { term: 'VAERS', definition: 'Vaccine Adverse Event Reporting System; passive surveillance for vaccine safety signals' },
        { term: 'VICP', definition: 'Vaccine Injury Compensation Program; no-fault system for vaccine injury claims' },
        { term: 'VIS', definition: 'Vaccine Information Statement; federally-required informational handout for vaccine recipients' },
      ],
      clinicalNotes: 'For unclear vaccine history without records, consider serologic testing (HepB, MMR, Varicella) or revaccinate. Post-exposure prophylaxis: MMR effective within 72 hours, Varicella within 3-5 days, HepB+HBIG within 24 hours of perinatal exposure.',
    },
    5: {
      level: 5,
      summary: 'Contemporary vaccinology integrates novel platform technologies, systems immunology approaches, correlates of protection research, and population-level strategies while addressing vaccine hesitancy through evidence-based communication frameworks.',
      explanation: `Advanced vaccine science reflects rapidly evolving technologies and understanding of immunological mechanisms.

**Novel Vaccine Technologies:**

*mRNA Vaccines:*
- Encode antigenic proteins
- Rapid development platform
- Strong humoral and cellular responses
- Cold chain requirements (improving)

*Viral Vector Vaccines:*
- Adenovirus vectors (Ad5, Ad26, ChAd)
- Strong cellular immunity
- Pre-existing immunity considerations

*Protein Subunit/Nanoparticle:*
- Recombinant proteins with adjuvants
- Good safety profile
- May need stronger adjuvants

*Universal Vaccine Approaches:*
- Conserved epitope targeting
- Broadly neutralizing antibody induction
- Universal influenza, pan-coronavirus efforts

**Systems Vaccinology:**

*Innate Immune Correlates:*
- Early gene expression signatures predict immunogenicity
- Type I interferon, inflammasome pathways
- Innate training via BCG and other live vaccines

*Adjuvant Science:*
- AS01 (MPL + QS-21): Shingrix, RTS,S malaria
- AS04 (MPL + alum): Cervarix
- MF59: Fluad
- Mechanisms: APC activation, depot effect, danger signals

*Systems Biology Approaches:*
- Transcriptomics predicting vaccine response
- Metabolomics of immune activation
- Immunophenotyping of responders vs. non-responders

**Precision Vaccinology:**

*Host Factors Affecting Response:*
- Age: Immunosenescence, maternal interference
- Genetics: HLA, cytokine polymorphisms
- Microbiome: Modulates mucosal immunity
- Chronic disease: Reduced responses in diabetes, CKD

*Biomarkers for Response Prediction:*
- Baseline plasmablast frequency
- Memory B cell phenotypes
- T follicular helper cell activity

**Population-Level Strategies:**

*Herd Immunity Thresholds:*
- Measles: ~95% (R0 12-18)
- Polio: ~80-85% (R0 5-7)
- COVID-19: Evolving with variants

*Disease Elimination Strategies:*
- Routine immunization + supplementary campaigns
- Surveillance and outbreak response
- Ring vaccination

*Maternal Immunization:*
- Tdap: Transplacental anti-pertussis antibodies
- RSV maternal vaccine: Emerging
- Influenza: Protects mother and infant

**Vaccine Hesitancy:**

*WHO Determinants:*
- Complacency: Low perceived disease risk
- Convenience: Access barriers
- Confidence: Trust in vaccines, providers, system

*Communication Strategies:*
- Motivational interviewing
- Presumptive language ("Your child is due for vaccines")
- Address specific concerns
- Avoid myths debunking paradox

*Evidence on Interventions:*
- Multicomponent interventions most effective
- Provider recommendation strongest predictor
- Reminder-recall systems improve uptake
- Mandates: Effective but politically complex

**Emerging Considerations:**

*Climate Change:*
- Expanded vector ranges (dengue, Zika)
- Cold chain challenges
- Shifting disease epidemiology

*Pandemic Preparedness:*
- Platform technologies for rapid development
- Correlates of protection for accelerated approval
- Global equity in distribution

*Novel Targets:*
- RSV vaccines across lifespan
- CMV vaccine (transplant/congenital)
- Universal coronavirus vaccine
- Therapeutic vaccines (cancer, chronic infections)

**Future Directions:**
- Needle-free delivery (microneedles, oral, nasal)
- Thermostable formulations
- AI-designed antigens
- Personalized vaccination schedules`,
      keyTerms: [
        { term: 'systems vaccinology', definition: 'Using systems biology approaches (omics, computational modeling) to understand and predict vaccine responses' },
        { term: 'adjuvant', definition: 'Substance added to vaccine to enhance immune response; mechanisms include APC activation and depot effect' },
        { term: 'correlate of protection', definition: 'Immune measurement statistically associated with vaccine-induced protection; enables accelerated licensure' },
        { term: 'herd immunity threshold', definition: 'Proportion of population needing immunity to prevent sustained transmission; varies by pathogen R0' },
        { term: 'immunosenescence', definition: 'Age-related decline in immune function affecting vaccine responses in elderly' },
      ],
      clinicalNotes: `**Current Clinical Pearls:**
- Tdap in pregnancy (27-36 weeks) provides 90% protection against infant pertussis
- HPV vaccine series through age 26; shared decision 27-45
- MenB for college freshmen in dorms (shared decision-making)
- High-dose or adjuvanted influenza for adults ≥65
- Shingrix (RZV) >97% effective; 2-dose series, 2-6 months apart
- RSV vaccines now available for older adults and pregnant individuals`,
    },
  },

  media: [
    {
      id: 'vaccine-schedule-chart',
      type: 'diagram',
      filename: 'cdc-vaccine-schedule.svg',
      title: 'CDC Childhood Vaccine Schedule',
      description: 'Comprehensive immunization schedule from birth through 18 years',
    },
    {
      id: 'vaccine-mechanisms',
      type: 'diagram',
      filename: 'vaccine-immune-response.svg',
      title: 'Vaccine Immune Response',
      description: 'Diagram showing primary and secondary immune responses to vaccination',
    },
  ],
  citations: [
    {
      id: 'acip-recommendations',
      type: 'article',
      title: 'Advisory Committee on Immunization Practices Recommended Immunization Schedule',
      source: 'MMWR',
      url: 'https://www.cdc.gov/vaccines/schedules/',
    },
    {
      id: 'red-book',
      type: 'textbook',
      title: 'Red Book: Report of the Committee on Infectious Diseases',
      authors: ['American Academy of Pediatrics'],
      source: 'American Academy of Pediatrics',
    },
  ],
  crossReferences: [
    { targetId: 'pediatrics-well-child-visits', targetType: 'topic', relationship: 'parent', label: 'Well-Child Visits' },
    { targetId: 'infectious-disease-vaccination-science', targetType: 'topic', relationship: 'related', label: 'Vaccination Science' },
    { targetId: 'immune-system', targetType: 'system', relationship: 'related', label: 'Immune System' },
  ],
  tags: {
    systems: ['immune'],
    topics: ['pediatrics', 'infectious-disease', 'immunization', 'preventive-medicine'],
    keywords: ['vaccines', 'immunization', 'schedule', 'MMR', 'DTaP', 'prevention', 'childhood'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['pediatrics', 'medicine'] },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default childhoodVaccinationSchedule;
