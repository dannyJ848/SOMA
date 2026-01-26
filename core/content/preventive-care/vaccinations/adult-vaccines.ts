/**
 * Adult Vaccination Schedule
 *
 * Comprehensive adult immunization recommendations based on
 * CDC/ACIP guidelines.
 */

import { EducationalContent } from '../../types';

export const ADULT_VACCINES: EducationalContent = {
  id: 'concept-adult-vaccines',
  type: 'concept',
  name: 'Adult Vaccination Schedule',
  alternateNames: ['Adult immunization', 'Grown-up vaccines', 'Adult vaccination guidelines'],

  levels: {
    1: {
      level: 1,
      summary: 'Adults need vaccines too. Some vaccines need boosters, and others become important as we age or develop certain health conditions.',
      explanation: `Vaccines are not just for children. Adults need to stay vaccinated to protect themselves and others around them.

**Vaccines All Adults Need:**

**Flu Shot (Influenza)**
- Every year
- Protects against seasonal flu
- Best time: Before flu season (fall)

**COVID-19 Vaccine**
- Stays up to date with current recommendations
- Boosters as recommended

**Tetanus, Diphtheria, Pertussis (Tdap)**
- One dose of Tdap
- Td or Tdap booster every 10 years

**Vaccines Based on Age:**

**Age 50+:**
- Shingles vaccine (Shingrix): 2 doses
- Prevents painful shingles rash

**Age 65+:**
- Pneumonia vaccines: One or more doses
- Prevents serious pneumonia infections

**Vaccines Based on Health:**

Some vaccines are important if you have:
- Diabetes
- Heart or lung disease
- Liver problems
- Weak immune system

**Vaccines You May Have Missed:**
- MMR (measles, mumps, rubella)
- Hepatitis B
- Hepatitis A
- HPV (through age 26)
- Chickenpox (if never had disease or vaccine)

**Why Adults Need Vaccines:**
- Protection from childhood vaccines can wear off
- New vaccines become available
- Some diseases are more dangerous as we age
- Protect yourself and others around you

**Where to Get Vaccines:**
- Doctor's office
- Pharmacy
- Health department
- Workplace clinics`,
      keyTerms: [
        { term: 'booster', definition: 'Extra dose of vaccine to maintain protection over time' },
        { term: 'immunity', definition: 'Protection from disease provided by the immune system' },
        { term: 'shingles', definition: 'Painful rash caused by reactivation of chickenpox virus' },
      ],
      analogies: [
        'Adult vaccines are like updating your phone software - protection needs refreshing to work against new threats.',
        'Think of immunity like a bank account - you need to keep adding to it (vaccines) or it runs out over time.',
      ],
      examples: [
        'At age 65, Robert received his pneumonia and shingles vaccines. He also gets a flu shot every fall.',
        'Maria cut her hand badly. Her doctor asked when she last had a tetanus shot - it had been 12 years, so she needed a booster.',
      ],
    },
    2: {
      level: 2,
      summary: 'The adult immunization schedule includes routine vaccines for all adults, age-based recommendations starting at age 50, and risk-based vaccines for specific medical conditions or exposures.',
      explanation: `**Routine Vaccines for All Adults:**

| Vaccine | Schedule |
|---------|----------|
| Influenza | Annual |
| COVID-19 | Per current guidance |
| Tdap/Td | Tdap once, then Td every 10 years |

**Age-Based Vaccines:**

| Vaccine | Age | Doses |
|---------|-----|-------|
| Zoster (Shingrix) | 50+ | 2 doses, 2-6 months apart |
| Pneumococcal | 65+ | PCV20 alone OR PCV15 + PPSV23 |

**Risk-Based Vaccines:**

*Hepatitis B:*
- Adults 19-59: Universal recommendation
- Adults 60+: Based on risk factors
- Risk factors: Diabetes, liver disease, HIV, multiple partners
- 3-dose series

*Hepatitis A:*
- Chronic liver disease
- Men who have sex with men
- Drug users
- Travel to endemic areas
- 2-dose series

*HPV:*
- Routine through age 26
- Shared decision-making ages 27-45
- 2 or 3 doses depending on age at start

**Special Populations:**

*Pregnancy:*
- Flu shot: Any trimester
- Tdap: 27-36 weeks (each pregnancy)
- RSV vaccine: 32-36 weeks (seasonal)

*Healthcare Workers:*
- Hepatitis B
- Annual influenza
- MMR (if not immune)
- Varicella (if not immune)
- COVID-19

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
        { term: 'ACIP', definition: 'Advisory Committee on Immunization Practices; CDC committee making vaccine recommendations' },
        { term: 'live vaccine', definition: 'Vaccine containing weakened virus; avoid in immunocompromised' },
        { term: 'shared decision-making', definition: 'Patient and doctor discussing options together to decide' },
        { term: 'Shingrix', definition: 'Recombinant shingles vaccine recommended for adults 50+' },
      ],
      analogies: [],
    },
    3: {
      level: 3,
      summary: 'Adult immunization integrates routine, age-based, and risk-based recommendations with consideration of contraindications, special populations, and implementation of standing orders to optimize coverage.',
      explanation: `**ACIP Recommendation Categories:**

*Routine:* Recommended for all adults in age group
*Shared Clinical Decision-Making:* Individual decision with provider
*Special Populations:* Based on risk factors or medical conditions

**Vaccine-Specific Recommendations:**

*Influenza:*
- Annual vaccination for all adults
- Options: Standard dose, high-dose (65+), adjuvanted (65+), recombinant
- Timing: Before flu season (by end of October)

*Tetanus, Diphtheria, Pertussis:*
- Tdap once (if not previously received)
- Td or Tdap booster every 10 years
- Tdap each pregnancy (27-36 weeks)
- Wound management: Td/Tdap if >5 years since last dose

*Zoster (Shingles):*
- Shingrix (RZV): 2 doses, 2-6 months apart
- Recommended for adults ≥50
- Even if prior shingles or Zostavax (old vaccine)

*Pneumococcal:*
- Adults ≥65: PCV20 alone OR PCV15 + PPSV23
- Adults 19-64 with risk conditions: Same approach
- Risk conditions: Chronic heart/lung/liver disease, diabetes, alcoholism, smoking, CSF leak, cochlear implant

**Immunocompromised Considerations:**

*Avoid Live Vaccines:*
- MMR, varicella, LAIV, yellow fever
-≥4 weeks before immunosuppression if possible

*May Need Additional Doses:*
- 3-dose HepB series may need 4 doses
- Pneumococcal: Complete both vaccines

**Contraindications vs. Precautions:**

*Contraindications (Do Not Give):*
- Severe allergic reaction to prior dose
- Severe allergic reaction to vaccine component
- Live vaccines: Immunocompromised, pregnancy

*Precautions (May Give if Benefit > Risk):*
- Moderate or severe acute illness
- Recent blood product receipt
- Guillain-Barre after prior dose

**Implementation Strategies:**

*Standing Orders:*
- Allow nurses/pharmacists to vaccinate without individual MD order
- Increases vaccination rates
- CDC-recommended approach

*Reminder Systems:*
- Patient reminders for due vaccines
- Provider alerts at point of care
- Text, phone, mail, patient portal`,
      keyTerms: [
        { term: 'RZV', definition: 'Recombinant zoster vaccine (Shingrix); preferred shingles vaccine' },
        { term: 'PCV20', definition: 'Pneumococcal conjugate vaccine covering 20 serotypes' },
        { term: 'PPSV23', definition: 'Pneumococcal polysaccharide vaccine covering 23 serotypes' },
        { term: 'LAIV', definition: 'Live attenuated influenza vaccine (nasal spray)' },
      ],
      analogies: [],
      clinicalNotes: 'Review vaccine history at every visit. Use CDC schedules app. Multiple vaccines can be given same visit. Document contraindications. Use standing orders.',
    },
    4: {
      level: 4,
      summary: 'Optimizing adult immunization requires addressing vaccine hesitancy, implementing standing orders, navigating complex recommendations (especially for pneumococcal vaccines), and managing special populations.',
      explanation: `**Pneumococcal Vaccine Evolution (2023 Updates):**

*Simplified Recommendations:*
- PCV20 alone is now an option
- OR: PCV15 + PPSV23 (≥1 year apart)
- No need to assess prior PPSV23 history
- Simplifies clinical decision-making

*High-Risk Conditions:*
- Asplenia/splenic dysfunction
- HIV
- CSF leak, cochlear implant
- Malignancy
- Solid organ transplant
- Chronic renal failure

**Vaccine Hesitancy:**

*Common Concerns:*
- Safety (adverse effects)
- Necessity ("I'm healthy")
- Efficacy ("vaccines don't work")
- Pharmaceutical distrust

*Communication Strategies:*
- Presumptive approach: "You're due for your flu shot today"
- Motivational interviewing
- Address specific concerns with evidence
- Emphasize personal and community protection
- Provider recommendation most effective

**Newer Vaccines:**

*RSV Vaccines (2023):*
- Older adults 60+: Shared clinical decision-making
- Single dose of RSVPreF or RSVPreF3
- Pregnancy: RSVpreF at 32-36 weeks OR infant nirsevimab
- Seasonal administration

*COVID-19:*
- Primary series plus updated boosters
- Recommendations evolve; check current guidance
- May be given with other vaccines

**Implementation Best Practices:**

*Standing Orders:*
- Increases vaccination rates significantly
- Allows nurses/pharmacists to vaccinate
- CDC-recommended best practice

*Immunization Information Systems (IIS):*
- State-based registries
- Track vaccines received anywhere
- Identify overdue patients
- Consolidate records

**Special Populations:**

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

*Pregnancy:*
- Inactivated vaccines safe
- Live vaccines contraindicated
- Passive protection to newborn (Tdap, flu)
- RSV vaccine in third trimester (seasonal)`,
      keyTerms: [
        { term: 'presumptive approach', definition: 'Vaccination communication assuming patient will accept rather than asking if interested' },
        { term: 'motivational interviewing', definition: 'Communication style exploring and resolving ambivalence' },
        { term: 'nirsevimab', definition: 'Monoclonal antibody protecting infants from RSV' },
        { term: 'IIS', definition: 'Immunization information system; state vaccine registry' },
      ],
      analogies: [],
      clinicalNotes: 'Use presumptive language. Implement standing orders. Check IIS for vaccination history. Simplified pneumococcal recommendations. Vaccinate before immunosuppression when possible.',
    },
    5: {
      level: 5,
      summary: 'Advanced adult immunization practice integrates novel vaccine platforms, addresses emerging pathogens, implements precision vaccination strategies, and tackles health equity challenges.',
      explanation: `**Novel Vaccine Technologies:**

*mRNA Vaccines:*
- COVID-19 demonstrated platform potential
- Rapid development capability
- Influenza mRNA vaccines in development
- CMV, RSV mRNA vaccines in trials

*Viral Vector Vaccines:*
- Adenovirus-based platforms
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

**Precision Vaccination:**

*Immunosenescence:*
- Aging immune system responds less
- Higher doses for older adults (influenza)
- Adjuvants to boost response

*Genetic Factors:*
- HLA polymorphisms affect response
- May explain non-responders
- Future: Personalized vaccination

*Microbiome:*
- Gut microbiome affects vaccine response
- Antibiotics may reduce efficacy
- Probiotic research

**Post-Marketing Surveillance:**

*Systems:*
- VAERS (passive reporting)
- VSD (active surveillance)
- CISA (expert consultation)

*Interpreting VAERS:*
- Does not prove causation
- Important for signal detection
- Requires active investigation

**Health Equity in Vaccination:**

*Disparities:*
- Lower rates in Black, Hispanic, rural populations
- Historical medical mistrust
- Access barriers

*Interventions:*
- Community partnerships
- Faith-based initiatives
- Culturally competent messaging
- Pharmacy-based vaccination

**Global Considerations:**

*WHO Recommendations:*
- EPI (Expanded Programme on Immunization)
- SAGE (Strategic Advisory Group)
- Global Vaccine Action Plan

**Future Directions:**

*Universal Influenza Vaccine:*
- Targets conserved regions
- Protection against all strains

*Cancer Vaccines:*
- Preventive: HPV, HBV
- Therapeutic: Personalized neoantigen

*HIV Vaccine:*
- mRNA approaches
- Broadly neutralizing antibodies

*Quality Improvement:*
- Track vaccination rates
- Standing orders
- Patient-centered communication
- Continuous quality improvement`,
      keyTerms: [
        { term: 'immunosenescence', definition: 'Age-related decline in immune function' },
        { term: 'VAERS', definition: 'Vaccine Adverse Event Reporting System' },
        { term: 'VSD', definition: 'Vaccine Safety Datalink' },
        { term: 'broadly neutralizing antibodies', definition: 'Antibodies that neutralize multiple variants' },
      ],
      analogies: [],
      clinicalNotes: 'Use current ACIP schedules. Implement standing orders. Use presumptive communication. Vaccinate immunocompromised before treatment when possible. Report adverse events. Address disparities.',
    },
  },

  media: [
    {
      id: 'adult-vaccine-schedule',
      type: 'diagram',
      filename: 'adult-vaccination-schedule.svg',
      title: 'Adult Vaccination Schedule',
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
      accessedDate: '2025-01-25',
    },
  ],

  crossReferences: [
    { targetId: 'concept-childhood-vaccines', targetType: 'concept', relationship: 'related', label: 'Childhood Vaccines' },
    { targetId: 'concept-travel-vaccines', targetType: 'concept', relationship: 'related', label: 'Travel Vaccines' },
    { targetId: 'concept-vaccine-safety', targetType: 'concept', relationship: 'related', label: 'Vaccine Safety' },
  ],

  tags: {
    systems: ['immune'],
    topics: ['preventive medicine', 'immunology', 'vaccination'],
    keywords: ['adult vaccines', 'immunization', 'shingles', 'pneumonia vaccine', 'tetanus'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'family medicine'],
    },
  },

  createdAt: '2025-01-25T00:00:00.000Z',
  updatedAt: '2025-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
