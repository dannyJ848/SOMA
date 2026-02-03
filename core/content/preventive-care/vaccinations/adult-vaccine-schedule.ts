/**
 * Adult Vaccine Schedule
 *
 * Comprehensive education on adult immunization recommendations
 * based on CDC/ACIP guidelines.
 */

import { EducationalContent } from '../../types';

export const ADULT_VACCINE_SCHEDULE: EducationalContent = {
  id: 'concept-adult-vaccine-schedule',
  type: 'concept',
  name: 'Adult Vaccine Schedule',
  alternateNames: ['Adult immunization schedule', 'Grown-up vaccines', 'Adult vaccination guidelines'],

  levels: {
    1: {
      level: 1,
      summary: 'Adults need vaccines too - some from childhood need boosters, and others are recommended as we get older.',
      explanation: `Vaccines are not just for kids. Adults need certain vaccines to stay protected against serious diseases.

**Vaccines for All Adults:**
- **Flu shot**: Every year (protects against seasonal influenza)
- **COVID-19**: Per current recommendations
- **Tdap**: One dose, then Td booster every 10 years

**Vaccines Based on Age:**
- **Shingles vaccine**: Age 50+ (prevents painful shingles rash)
- **Pneumonia vaccines**: Age 65+ (protects against pneumonia)

**Vaccines Based on Health Conditions:**
Some vaccines are especially important if you have:
- Diabetes
- Heart disease
- Lung disease
- Weak immune system

**Vaccines You May Have Missed:**
- **MMR**: Measles, mumps, rubella (if never received)
- **Hepatitis B**: If at risk
- **HPV**: Up to age 26 (or 45 with discussion)

**Why Adults Need Vaccines:**
- Protection can wear off over time
- New vaccines become available
- Some diseases are more dangerous as we age
- Protect yourself and others around you`,
      keyTerms: [
        { term: 'vaccine', definition: 'A substance that helps your body learn to fight a specific disease' },
        { term: 'booster', definition: 'An additional dose of vaccine to maintain protection' },
        { term: 'immunization', definition: 'The process of becoming protected against a disease through vaccination' },
      ],
      analogies: [
        'Vaccines train your immune system like fire drills train people - so when the real emergency comes, everyone knows what to do.',
      ],
      examples: [
        'At age 65, Robert got his pneumonia and shingles vaccines. He also gets a flu shot every fall to protect himself and his grandchildren.',
      ],
    },
    2: {
      level: 2,
      summary: 'The adult immunization schedule includes routine vaccines for all adults, age-based recommendations, and vaccines indicated for specific medical conditions or risk factors.',
      explanation: `The CDC and ACIP (Advisory Committee on Immunization Practices) update adult vaccine recommendations annually.

**Routine Vaccines for All Adults:**

| Vaccine | Schedule |
|---------|----------|
| Influenza | Annual |
| COVID-19 | Per current guidance |
| Tdap/Td | Tdap once, then Td every 10 years |

**Age-Based Vaccines:**

| Vaccine | Age | Doses |
|---------|-----|-------|
| Zoster (Shingrix) | 50+ | 2 doses, 2-6 months apart |
| Pneumococcal (PCV20 or PCV15+PPSV23) | 65+ | Per series completion |

**Risk-Based Vaccines:**

*Hepatitis B:*
- Adults 19-59: Universal recommendation
- Adults 60+: Based on risk factors
- Risk factors: Diabetes, liver disease, HIV, multiple partners

*Hepatitis A:*
- Chronic liver disease
- Men who have sex with men
- Drug users
- Travel to endemic areas

*HPV:*
- Routine through age 26
- Shared decision-making ages 27-45
- 2 or 3 doses depending on age at start

**Special Population Recommendations:**

*Pregnancy:*
- Flu shot: Any trimester
- Tdap: Each pregnancy (27-36 weeks)
- RSV vaccine: 32-36 weeks (seasonal)

*Healthcare Workers:*
- Hepatitis B
- Annual influenza
- MMR (if not immune)
- Varicella (if not immune)

*Immunocompromised:*
- Avoid live vaccines (MMR, varicella, LAIV)
- May need additional doses
- Timing around immunosuppressive therapy

**Catch-Up Vaccination:**
Adults who missed childhood vaccines may need:
- MMR: 1-2 doses
- Varicella: 2 doses if never had chickenpox
- Hepatitis B: 3-dose series`,
      keyTerms: [
        { term: 'ACIP', definition: 'Advisory Committee on Immunization Practices - CDC committee that makes vaccine recommendations' },
        { term: 'live vaccine', definition: 'Vaccine containing weakened (attenuated) virus that should not be given to immunocompromised patients' },
        { term: 'catch-up vaccination', definition: 'Vaccines given to adults who missed them during childhood' },
        { term: 'Shingrix', definition: 'Recombinant zoster vaccine recommended for adults 50 and older' },
      ],
      analogies: [
        'The vaccine schedule is like a maintenance schedule for your car - different services are needed at different mileages (ages).',
      ],
    },
    3: {
      level: 3,
      summary: 'Adult immunization integrates routine, age-based, and risk-based recommendations with consideration of immunocompromised states, pregnancy, and contraindications, requiring provider familiarity with current ACIP schedules and shared clinical decision-making.',
      explanation: `**ACIP Recommendation Categories:**

*Routine:* Recommended for all adults in age group
*Shared Clinical Decision-Making:* Individual decision with provider
*Special Populations:* Based on risk factors or medical conditions

**Detailed Vaccine Recommendations:**

*Influenza:*
- Annual vaccination for all adults
- Options: Standard dose, high-dose (65+), adjuvanted (65+), recombinant
- Timing: Before flu season (ideally by end of October)

*COVID-19:*
- Primary series plus updated boosters
- Recommendations evolve; check current CDC guidance
- May be given with other vaccines

*Tetanus, Diphtheria, Pertussis:*
- Tdap once (if not previously received)
- Td or Tdap booster every 10 years
- Tdap each pregnancy (27-36 weeks)
- Wound management: Td/Tdap if >5 years since last dose

*Zoster (Shingles):*
- Shingrix (RZV): 2 doses, 2-6 months apart
- Recommended for adults ≥50
- Also for immunocompromised ≥19 (timing considerations)
- Even if prior shingles or Zostavax

*Pneumococcal:*
- Adults ≥65: PCV20 alone OR PCV15 followed by PPSV23
- Adults 19-64 with risk conditions: Same
- Risk conditions: Chronic heart/lung/liver disease, diabetes, alcoholism, smoking, CSF leak, cochlear implant, immunocompromising conditions

*HPV:*
- Ages 9-14: 2-dose series
- Ages 15-26: 3-dose series (0, 1-2, 6 months)
- Ages 27-45: Shared decision-making

**Immunocompromised Considerations:**

*Avoid Live Vaccines:*
- MMR
- Varicella
- LAIV (live attenuated influenza)
- Yellow fever
- Zoster live (Zostavax - no longer available in US)

*May Need Additional Doses:*
- 3-dose HepB series may need 4 doses
- Pneumococcal: Complete both vaccines

*Timing Around Immunosuppression:*
- Ideally vaccinate before starting therapy
- Live vaccines ≥4 weeks before
- Inactivated vaccines ≥2 weeks before

**Contraindications vs. Precautions:**

*Contraindications (Do Not Give):*
- Severe allergic reaction to prior dose
- Severe allergic reaction to vaccine component
- For live vaccines: Immunocompromised states, pregnancy

*Precautions (May Give if Benefit > Risk):*
- Moderate or severe acute illness
- Recent blood product receipt
- Guillain-Barre syndrome after prior dose`,
      keyTerms: [
        { term: 'RZV', definition: 'Recombinant zoster vaccine (Shingrix); preferred shingles vaccine for adults ≥50' },
        { term: 'PCV20', definition: 'Pneumococcal conjugate vaccine covering 20 serotypes' },
        { term: 'PPSV23', definition: 'Pneumococcal polysaccharide vaccine covering 23 serotypes' },
        { term: 'LAIV', definition: 'Live attenuated influenza vaccine (nasal spray); contraindicated in immunocompromised' },
      ],
      clinicalNotes: 'Review vaccine history at every visit. Use CDC immunization schedules app for current recommendations. Multiple vaccines can be given at same visit. Document contraindications and refusals.',
    },
    4: {
      level: 4,
      summary: 'Optimizing adult immunization requires integration of evidence-based guidelines with patient-specific factors, addressing vaccine hesitancy, implementing population health strategies, and staying current with evolving recommendations for new vaccines and special populations.',
      explanation: `**Pneumococcal Vaccine Evolution:**

*2023 Simplified Recommendations:*
- PCV20 alone is now an option
- OR: PCV15 + PPSV23 (≥1 year apart)
- No need for prior PPSV23 history assessment
- Simplifies clinical decision-making

*High-Risk Conditions:*
- Asplenia/splenic dysfunction
- HIV
- CSF leak, cochlear implant
- Malignancy
- Solid organ transplant
- Chronic renal failure

**Influenza Vaccine Selection:**

*For Adults 65+:*
- Preferentially recommended:
  - High-dose quadrivalent
  - Adjuvanted quadrivalent
  - Recombinant quadrivalent
- If unavailable, standard dose is acceptable

*Egg Allergy:*
- Severe egg allergy: Any age-appropriate vaccine can be given
- No longer need special precautions
- Can use recombinant (Flublok) if preferred

**RSV Vaccines (New 2023):**

*Older Adults:*
- Adults 60+ using shared clinical decision-making
- Single dose of RSVPreF or RSVPreF3 (brand options)

*Pregnancy:*
- RSVpreF vaccine at 32-36 weeks gestation
- OR: Infant receives nirsevimab (monoclonal antibody)
- Seasonal administration (Sept-Jan in most US)

**Vaccine Hesitancy:**

*Common Concerns:*
- Safety (adverse effects)
- Necessity ("I'm healthy")
- Efficacy ("flu shot doesn't work")
- Distrust of pharmaceutical industry

*Communication Strategies:*
- Presumptive approach: "You're due for your flu shot today"
- Motivational interviewing
- Address specific concerns with evidence
- Emphasize personal and community protection
- Provider recommendation is most effective

**Implementation Strategies:**

*Standing Orders:*
- Allow nurses/pharmacists to vaccinate without individual MD order
- Increases vaccination rates
- CDC-recommended

*Immunization Information Systems (IIS):*
- State-based registries
- Track vaccines received anywhere
- Identify overdue patients
- Consolidate records

*Reminder-Recall Systems:*
- Patient reminders for due/overdue vaccines
- Provider reminders at point of care
- Text, phone, mail, patient portal

**Special Situations:**

*Asplenia:*
- All pneumococcal vaccines
- Meningococcal ACWY and B
- Hib vaccine
- Annual influenza
- Ideally vaccinate 2 weeks before splenectomy

*Solid Organ Transplant:*
- Complete vaccines before transplant if possible
- Avoid live vaccines post-transplant
- May need re-vaccination after transplant

*HIV:*
- CD4 count guides recommendations
- Pneumococcal vaccines regardless of CD4
- MMR if CD4 ≥200 (avoid if CD4 <200)
- Shingrix safe regardless of CD4

*Biologics/Immunosuppressants:*
- Timing varies by agent
- Consult specific guidelines
- Generally: Vaccinate before starting if possible`,
      keyTerms: [
        { term: 'presumptive approach', definition: 'Vaccination communication style that assumes patient will accept rather than asking if interested' },
        { term: 'standing orders', definition: 'Pre-authorized protocols allowing vaccination without individual provider order' },
        { term: 'immunization information system', definition: 'Confidential, population-based, computerized database of immunization records' },
        { term: 'RSVpreF', definition: 'RSV prefusion F protein vaccine for adults 60+ and pregnant individuals' },
      ],
      clinicalNotes: 'Use IIS to identify vaccination history. Implement standing orders. Use presumptive language. Vaccinate before immunosuppression when possible. Stay current with ACIP updates.',
    },
    5: {
      level: 5,
      summary: 'Advanced adult immunization practice integrates novel vaccine platforms, addresses emerging pathogens, implements precision vaccination strategies, and tackles health equity challenges while navigating the complex landscape of vaccine development, regulatory approval, and post-marketing surveillance.',
      explanation: `**Novel Vaccine Technologies:**

*mRNA Vaccines:*
- COVID-19 demonstrated platform potential
- Rapid development capability
- Influenza mRNA vaccines in development
- CMV, RSV mRNA vaccines in trials
- Cancer vaccines (therapeutic)

*Viral Vector Vaccines:*
- Adenovirus-based platforms
- Chimpanzee adenovirus (AstraZeneca COVID)
- Considerations: Pre-existing immunity

*Protein Subunit/Recombinant:*
- Shingrix (adjuvanted protein)
- RSV vaccines (prefusion F protein)
- May be preferred in immunocompromised

**Emerging Infectious Diseases:**

*Pandemic Preparedness:*
- mRNA platform enables rapid response
- Stockpile strategies
- Equitable global distribution challenges

*Pathogens of Concern:*
- Influenza (H5N1, H7N9)
- Coronaviruses
- Mpox
- Marburg, Ebola
- Antimicrobial-resistant bacteria (future vaccines)

**Precision Vaccination:**

*Immunosenescence:*
- Aging immune system responds less to vaccines
- Higher doses for older adults (influenza)
- Adjuvants to boost response
- Optimal timing (not during acute illness)

*Genetic Factors:*
- HLA polymorphisms affect response
- May explain non-responders
- Potential for personalized vaccination
- Research phase

*Microbiome:*
- Gut microbiome affects vaccine response
- Antibiotics may reduce efficacy
- Probiotics under investigation

**Post-Marketing Surveillance:**

*Systems:*
- VAERS (Vaccine Adverse Event Reporting System)
- VSD (Vaccine Safety Datalink)
- CISA (Clinical Immunization Safety Assessment)

*Interpreting VAERS:*
- Passive reporting system
- Does not prove causation
- Important for signal detection
- Requires active investigation

*Recent Safety Signals:*
- mRNA COVID: Myocarditis (young males)
- Adenovirus COVID: Thrombosis (rare)
- HPV: Ongoing monitoring confirms safety

**Health Equity in Vaccination:**

*Disparities:*
- Lower vaccination rates in:
  - Black and Hispanic adults
  - Rural populations
  - Low income, uninsured
- Historical medical mistrust

*Interventions:*
- Community partnerships
- Faith-based initiatives
- Culturally competent messaging
- Addressing SDOH
- Pharmacy-based vaccination
- Mobile vaccination units

**Global Vaccine Policy:**

*WHO Recommendations:*
- EPI (Expanded Programme on Immunization)
- SAGE (Strategic Advisory Group of Experts)
- Global Vaccine Action Plan

*COVAX:*
- Equitable global COVID vaccine access
- Challenges encountered
- Lessons for future pandemics

**Future Directions:**

*Universal Influenza Vaccine:*
- Targets conserved regions
- Protection against all strains
- Multiple candidates in development

*Cancer Vaccines:*
- Preventive: HPV, HBV (liver cancer)
- Therapeutic: Personalized neoantigen vaccines
- mRNA platform promising

*HIV Vaccine:*
- Decades of research
- mRNA approaches renewed hope
- Broadly neutralizing antibodies

*Microbiome-Based:*
- Live biotherapeutics
- Engineered bacteria
- Oral vaccines

**Quality Improvement:**

*Metrics:*
- Adult vaccination rates
- High-risk population coverage
- Disparities monitoring
- Adverse event rates

*Best Practices:*
- EHR integration
- Registry participation
- Standing orders
- Patient-centered communication
- Continuous quality improvement`,
      keyTerms: [
        { term: 'immunosenescence', definition: 'Age-related decline in immune function affecting vaccine responses' },
        { term: 'VAERS', definition: 'Vaccine Adverse Event Reporting System; passive surveillance for vaccine safety' },
        { term: 'VSD', definition: 'Vaccine Safety Datalink; active surveillance network linking vaccine data with medical records' },
        { term: 'broadly neutralizing antibodies', definition: 'Antibodies that can neutralize multiple variants of a pathogen; goal for HIV vaccine' },
      ],
      clinicalNotes: `**Clinical Excellence:**
- Use current ACIP schedules (updated annually)
- Implement standing orders for routine vaccines
- Check IIS for vaccination history
- Use presumptive communication
- Address hesitancy with empathy and evidence
- Vaccinate immunocompromised before treatment when possible
- Report adverse events to VAERS
- Track and address disparities in your practice
- Stay current: New vaccines and recommendations evolve
- Coordinate with pharmacy-based vaccination`,
    },
  },

  media: [
    {
      id: 'adult-vaccine-schedule-table',
      type: 'diagram',
      filename: 'adult-immunization-schedule.svg',
      title: 'Adult Immunization Schedule',
      description: 'Visual schedule of recommended adult vaccines by age and risk factors',
    },
  ],

  citations: [
    {
      id: 'cdc-adult-schedule',
      type: 'website',
      title: 'Recommended Adult Immunization Schedule',
      source: 'Centers for Disease Control and Prevention',
      url: 'https://www.cdc.gov/vaccines/schedules/hcp/imz/adult.html',
      accessedDate: '2025-01-24',
    },
  ],

  crossReferences: [
    { targetId: 'concept-how-vaccines-work', targetType: 'concept', relationship: 'related', label: 'How Vaccines Work' },
    { targetId: 'concept-vaccine-safety', targetType: 'concept', relationship: 'related', label: 'Vaccine Safety' },
  ],

  tags: {
    systems: ['immune'],
    topics: ['preventive medicine', 'immunology', 'vaccination'],
    keywords: ['vaccines', 'immunization', 'adult', 'ACIP', 'flu shot', 'shingles'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'family medicine'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
