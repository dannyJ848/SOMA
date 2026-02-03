import { EducationalContent } from '../types';

export const travelVaccines: EducationalContent = {
  id: 'travel-vaccines',
  type: 'concept',
  name: 'Travel Vaccines',
  alternateNames: ['Travel Immunizations', 'Travel Vaccinations'],

  levels: {
    1: {
      level: 1,
      summary: 'Travel vaccines are shots that protect travelers from serious diseases found in other parts of the world.',
      explanation: `Vaccines are one of the most important ways to stay healthy when traveling internationally. Different countries have different disease risks, so travelers need specific protection based on where they are going.

**Types of Travel Vaccines:**

1. **Required Vaccines**
   - Some countries require proof of vaccination for entry
   - Yellow fever vaccine is the most common required vaccine
   - You get an official certificate (yellow card) to prove vaccination

2. **Recommended Vaccines**
   - These protect you from diseases common at your destination
   - Your doctor will suggest these based on where you are going
   - Examples: hepatitis A, typhoid, Japanese encephalitis

**Common Travel Vaccines:**

*Hepatitis A:*
- Protects against a liver infection
- Spread through contaminated food and water
- Recommended for most international travelers
- Two doses provide long-term protection

*Typhoid:*
- Protects against typhoid fever
- Spread through contaminated food and water
- Important for travelers to South Asia and sub-Saharan Africa
- Available as shot or pills

*Yellow Fever:*
- Required for entry to certain countries
- Spread by mosquitoes in tropical areas
- One shot provides lifelong protection
- Must be given at certified vaccination centers

*Japanese Encephalitis:*
- Protects against a brain infection
- Spread by mosquitoes in rural Asia
- Important for long-term travelers to rural areas
- Two-dose series

*Rabies:*
- Prevents rabies infection
- Important for travelers working with animals
- Also for adventure travelers in remote areas
- Three-dose series before travel

**Timing:**
- See your doctor 4-6 weeks before travel
- Some vaccines need multiple doses
- Some take time to become effective`,
      keyTerms: [
        { term: 'vaccine', definition: 'A medicine that helps your body fight specific diseases' },
        { term: 'hepatitis', definition: 'An infection of the liver' },
        { term: 'typhoid', definition: 'A bacterial infection spread by contaminated food and water' },
        { term: 'encephalitis', definition: 'Inflammation (swelling) of the brain' },
        { term: 'rabies', definition: 'A deadly virus spread through animal bites' },
      ],
      analogies: [
        'Vaccines are like giving your immune system a wanted poster of bad guys it might meet on your travels.',
        'Think of vaccines as training exercises for your body\'s defense system before the real battle.',
      ],
      examples: [
        'A tourist going on safari in Kenya needs yellow fever vaccine.',
        'A backpacker traveling through Southeast Asia gets hepatitis A and typhoid vaccines.',
        'A veterinarian volunteering abroad receives rabies pre-exposure vaccine.',
      ],
    },
    2: {
      level: 2,
      summary: 'Travel vaccines fall into three categories: routine, required, and recommended. Selection depends on destination epidemiology, trip duration, and traveler risk factors.',
      explanation: `Travel immunization involves updating routine vaccines, obtaining legally required vaccines for border entry, and receiving recommended vaccines based on destination-specific disease risks and individual risk factors.

**Categories of Travel Vaccines:**

*Routine Vaccines (Keep Current):*
- Measles-mumps-rubella (MMR)
- Diphtheria-tetanus-pertussis (Tdap)
- Influenza (seasonal)
- Polio
- COVID-19
- Pneumococcal (age and risk-based)

*Required Vaccines (International Health Regulations):*
- **Yellow Fever:** Required for entry to certain countries in Africa and South America
  - Certificate valid 10 days after vaccination
  - Certificate valid for life (since 2016)
  - Must be administered at certified yellow fever vaccination centers
  - Contraindicated in some individuals (infants, certain immunocompromised)
- **Meningococcal ACWY:** Required for Hajj and Umrah pilgrimage to Saudi Arabia

*Recommended Vaccines (Destination-Specific):*

| Vaccine | Primary Destinations | Risk Factors |
|---------|---------------------|--------------|
| Hepatitis A | Most developing countries | Food/water exposure |
| Typhoid | South Asia, sub-Saharan Africa | Longer stays, rural areas |
| Hepatitis B | Endemic regions worldwide | Medical care, long stays |
| Japanese Encephalitis | Rural Asia | >1 month rural, outdoor |
| Rabies | Worldwide except some islands | Animal exposure, remote areas |
| Cholera | Humanitarian emergencies | Relief workers |
| Yellow Fever | Endemic regions | Travel to risk areas |

**Vaccine Timing:**

| Vaccine | Doses | Schedule | Before Travel |
|---------|-------|----------|---------------|
| Hepatitis A | 2 | 0, 6-12 months | 2 weeks |
| Typhoid (IM) | 1 | Single dose | 2 weeks |
| Typhoid (oral) | 4 | Every other day x4 | 1 week |
| Yellow Fever | 1 | Single dose | 10 days |
| Japanese Encephalitis | 2 | 0, 28 days | 1 week after 2nd |
| Rabies (pre-exposure) | 3 | 0, 7, 21 or 28 days | Complete series |
| Cholera (oral) | 2 | 1-6 weeks apart | 2 weeks |

**Special Considerations:**

*Live Vaccines (MMR, yellow fever, oral typhoid, oral cholera):*
- Contraindicated in pregnancy
- Contraindicated in severe immunosuppression
- Should be given before immunosuppressive therapy if possible
- Can be given same day as other live vaccines or 28 days apart

*Vaccine Contraindications:*
- Severe allergic reaction to previous dose
- Severe allergy to vaccine component
- Moderate or severe acute illness (defer until recovered)
- Specific conditions (e.g., G6PD deficiency for tafenoquine, not vaccine but relevant)`,
      keyTerms: [
        { term: 'International Health Regulations', definition: 'WHO framework governing international disease spread prevention' },
        { term: 'live vaccine', definition: 'Vaccine containing weakened live virus or bacteria' },
        { term: 'inactivated vaccine', definition: 'Vaccine containing killed virus or bacteria' },
        { term: 'subunit vaccine', definition: 'Vaccine containing only parts of the pathogen' },
        { term: 'contraindication', definition: 'A condition that makes a treatment inadvisable' },
      ],
      analogies: [
        'Required vaccines are like a passport for entry - you cannot cross the border without them. Recommended vaccines are like travel insurance - they protect you even if not mandatory.',
      ],
      examples: [
        'A business traveler to urban China for 1 week needs hepatitis A vaccine but not Japanese encephalitis.',
        'A medical mission worker to Haiti needs hepatitis A, typhoid, and should be up to date on all routine vaccines.',
        'An elderly traveler to India needs polio booster (IPV) and all routine vaccines updated in addition to travel-specific vaccines.',
      ],
    },
    3: {
      level: 3,
      summary: 'Travel vaccine selection requires understanding of vaccine immunology, disease epidemiology, and risk stratification. Some vaccines provide incomplete protection, requiring additional preventive measures.',
      explanation: `Travel immunology involves understanding vaccine mechanisms, duration of immunity, efficacy rates, and the relationship between vaccination and non-vaccine preventive measures in comprehensive travel health protection.

**Vaccine Immunology:**

*Live Attenuated Vaccines:*
- Yellow fever, MMR, oral typhoid
- Mimic natural infection
- Strong cellular and humoral immunity
- Generally contraindicated in immunosuppression
- Single dose often provides long-lasting immunity

*Inactivated Vaccines:*
- Hepatitis A, injectable typhoid, Japanese encephalitis
- Cannot cause disease
- Require adjuvants to enhance immune response
- Multiple doses typically needed
- Boosters may be required

*Subunit/Recombinant Vaccines:*
- Hepatitis B, rabies
- Highly purified components
- Very safe profile
- Multiple doses required for primary series

**Efficacy and Duration:**

| Vaccine | Efficacy | Duration | Notes |
|---------|----------|----------|-------|
| Hepatitis A | >95% | >20 years, likely lifelong | 2-dose series |
| Typhoid (IM) | 50-80% | 2-3 years | Less effective than oral |
| Typhoid (oral) | 50-80% | 5 years | Live vaccine |
| Yellow Fever | >99% | Lifelong | Booster no longer required |
| Japanese Encephalitis | >90% | Unknown, likely years | 2-dose primary series |
| Rabies (pre-exposure) | Simplified post-exposure | Indefinite | Does not eliminate post-exposure treatment |
| Cholera | 50-60% | 3-6 months | Limited travel use |

**Complex Scenarios:**

*Accelerated Schedules:*
- Hepatitis A/B combination: 0, 7, 21-30 days + booster at 12 months
- Japanese encephalitis: accelerated schedule available (0, 7 days) for adults 18-65
- Useful for last-minute travelers but may affect long-term immunity

*Interrupted Schedules:*
- Do not restart series if interrupted
- Continue where left off regardless of interval
- Exceptions: oral typhoid (restart if >3 weeks between doses), oral cholera

*Unknown Vaccination History:*
- Serologic testing possible for some vaccines (hepatitis A, B)
- When in doubt, revaccinate (no harm in repeating inactivated vaccines)
- Live vaccines should not be repeated unnecessarily

*Vaccine Interactions:*
- Oral typhoid should not be given with antibiotics or mefloquine (separate by >24 hours)
- Oral choloid has similar antibiotic interactions
- Immune globulin can interfere with live vaccines (separate by 3-6 months)
- Different live vaccines can be given same day or 28 days apart

**Non-Vaccine Prevention Still Required:**
- Typhoid vaccine is 50-80% effective; food/water precautions essential
- Hepatitis A vaccine takes 2 weeks to provide protection
- Rabies vaccine simplifies but does not eliminate post-exposure treatment
- Yellow fever vaccine protects against yellow fever, not other mosquito diseases

**Vaccine Safety Monitoring:**
- Report adverse events to VAERS (Vaccine Adverse Event Reporting System)
- Yellow fever vaccine: rare viscerotropic disease and neurotropic disease
- Serious adverse events very rare compared to disease risk`,
      keyTerms: [
        { term: 'humoral immunity', definition: 'Antibody-mediated immune response' },
        { term: 'cellular immunity', definition: 'T-cell mediated immune response' },
        { term: 'adjuvant', definition: 'Substance added to vaccines to enhance immune response' },
        { term: 'viscerotropic disease', definition: 'Yellow fever vaccine-associated illness resembling wild-type disease' },
        { term: 'seroprotection', definition: 'Antibody level above threshold considered protective' },
      ],
      examples: [
        'A traveler with only 1 week before departure to Nepal receives JE vaccine on accelerated schedule (0, 7 days).',
        'An immunocompromised traveler cannot receive live yellow fever vaccine; waiver letter obtained with documentation of medical contraindication.',
        'A pregnant traveler defers live vaccines until after delivery; relies on inactivated vaccines and behavioral precautions.',
      ],
    },
    4: {
      level: 4,
      summary: 'Advanced travel vaccination involves managing complex medical scenarios, understanding global vaccine availability variations, and addressing vaccine hesitancy with evidence-based counseling.',
      explanation: `Expert travel immunization practice requires managing special populations, understanding international variations in vaccine products, navigating regulatory requirements, and effectively addressing patient concerns about vaccine safety and necessity.

**Special Populations:**

*Immunocompromised Travelers:*
- Cannot receive live vaccines (MMR, yellow fever, oral typhoid, oral cholera)
- May have suboptimal response to inactivated vaccines
- Consider antibody titers for hepatitis A and B post-vaccination
- Provide letter documenting contraindication to yellow fever if required
- Emphasize behavioral precautions (mosquito avoidance, food/water safety)

*HIV-Infected Travelers:*
- CD4 count guides vaccination decisions
- CD4 >200: can receive live vaccines with caution
- CD4 <200: avoid live vaccines
- Higher dose or additional doses of inactivated vaccines may be needed
- Pneumococcal and influenza particularly important

*Pregnant Travelers:*
- Live vaccines contraindicated (theoretical fetal infection risk)
- Inactivated vaccines generally safe
- Defer travel to yellow fever endemic areas if possible
- If travel unavoidable, risk-benefit assessment for yellow fever vaccine
- Influenza and Tdap recommended during pregnancy

*Pediatric Travelers:*
- Accelerated schedules available for some vaccines
- Efficacy may be lower in young children
- Consider primary series completion before travel when possible
- Routine vaccines take priority over travel vaccines

*Elderly Travelers:*
- Immune senescence may reduce vaccine response
- Higher risk of adverse events with yellow fever vaccine
- Consider antibody titers if vaccination history uncertain
- Pneumococcal and influenza vaccines especially important

**Global Vaccine Considerations:**

*Product Variations:*
- Different brands and formulations available internationally
- Japanese encephalitis: different vaccines in Asia vs. US/Europe
- Rabies vaccines: various cell culture products globally
- Cholera: different oral vaccines in different regions

*Vaccine Availability:*
- Yellow fever vaccine shortages periodically occur
- New vaccines (e.g., ERVEBO for Ebola) may have limited distribution
- Some vaccines not available in all countries
- Travelers may need to complete series abroad

*Regulatory Differences:*
- Vaccines licensed in some countries but not others
- Age indications vary by country
- Booster recommendations differ internationally
- WHO prequalification vs. national licensure

**Managing Vaccine Hesitancy:**

*Common Concerns:*
- "Too many vaccines at once" - address immune system capacity, safety data
- "Vaccines make you sick" - distinguish mild side effects from disease
- "Natural immunity is better" - balance risks of natural infection
- "Vaccines contain toxins" - explain ingredients, safety testing
- "Diseases are rare" - emphasize geographic variation, importation risk

*Evidence-Based Counseling:*
- Use motivational interviewing techniques
- Address specific concerns with factual information
- Emphasize severity of travel-related diseases
- Discuss risk of importing diseases to vulnerable contacts
- Document informed refusal if vaccines declined

**International Certificate of Vaccination:**
- Yellow fever certificate requirements
- Validity period changes (now lifetime)
- Medical contraindication waivers
- Falsification issues and security features
- Digital certificate development`,
      keyTerms: [
        { term: 'immune senescence', definition: 'Age-related decline in immune function' },
        { term: 'medical waiver', definition: 'Official exemption from vaccine requirement due to contraindication' },
        { term: 'WHO prequalification', definition: 'WHO assessment of vaccine quality for international procurement' },
        { term: 'antibody titer', definition: 'Laboratory measurement of antibody levels' },
        { term: 'suboptimal response', definition: 'Reduced immune response compared to healthy individuals' },
      ],
      clinicalNotes: 'Document all vaccinations given, including lot numbers and sites of administration. Provide travelers with International Certificate of Vaccination for yellow fever. For immunocompromised travelers declining or unable to receive required vaccines, provide detailed documentation of contraindication for border officials. Address vaccine hesitancy with respect; travelers who feel heard are more likely to accept recommendations. Be aware that protection is rarely 100%; emphasize that vaccines complement, not replace, behavioral precautions.',
    },
    5: {
      level: 5,
      summary: 'Specialist-level travel vaccinology encompasses vaccine development pipelines, global immunization policy, outbreak response vaccination strategies, and emerging technologies in travel immunization.',
      explanation: `Expert-level travel immunization practice requires knowledge of vaccine development pipelines, engagement with global health policy, understanding of outbreak response vaccination logistics, and awareness of cutting-edge immunization technologies.

**Vaccine Development Pipeline:**

*Travel-Relevant Vaccines in Development:*
- Universal influenza vaccine
- HIV vaccine (various candidates)
- Malaria vaccines (RTS,S/AS01 licensed; R21/Matrix-M promising)
- Dengue vaccines (challenges with antibody-dependent enhancement)
- Schistosomiasis vaccine
- Hookworm vaccine
- Leishmaniasis vaccine
- Travelers\' diarrhea vaccine (ETEC)

*Novel Vaccine Platforms:*
- mRNA vaccines (COVID-19 success enabling rapid development)
- Viral vector vaccines
- Virus-like particles
- DNA vaccines
- Nanoparticle vaccines
- Reverse vaccinology approaches

**Global Immunization Policy:**

*Strategic Advisory Group of Experts (SAGE):*
- WHO vaccine policy recommendations
- Travel vaccine guidance development
- Yellow fever vaccine dose sparing (fractional dosing)
- Fractional dosing in outbreak response

*International Health Regulations (2005):*
- Yellow fever as only routine required vaccine
- Revision processes and challenges
- Pandemic response frameworks
- Points of entry requirements

**Outbreak Response Vaccination:**

*Ring Vaccination Strategies:*
- Used for Ebola (ERVEBO vaccine)
- Contain outbreak by vaccinating contacts
- Logistical challenges in resource-limited settings
- Cold chain requirements

*Mass Vaccination Campaigns:*
- Yellow fever preventive campaigns
- Meningococcal vaccination before Hajj
- Cholera vaccination in humanitarian crises
- COVID-19 global vaccination efforts

*Emergency Use Authorization:*
- Expedited approval pathways
- Risk-benefit in outbreak settings
- Post-authorization safety monitoring

**Emerging Technologies:**

*Thermostable Vaccines:*
- Eliminate cold chain requirements
- Critical for remote travel destinations
- Development ongoing for existing vaccines

*Microneedle Patches:*
- Self-administration potential
- Thermostability advantages
- Reduced medical waste
- Ideal for travel medicine applications

*Single-Dose Regimens:*
- Long-acting platforms
- Improved adherence
- Simplified travel preparation

**Vaccine Equity and Access:**

*Global Disparities:*
- Travel vaccines often unavailable in endemic countries
- Cost barriers for travelers from low-resource settings
- VFR travelers may face access barriers in host countries
- Humanitarian exceptions and donation programs

*Refugee and Migrant Vaccination:*
- Catch-up immunization on arrival
- Vaccination documentation challenges
- WHO international vaccination certificate
- Integration with national programs

**Research Frontiers:**

*Immunologic Correlates:*
- Identifying protective antibody levels
- Cellular immunity measurements
- Correlates for diseases without established markers

*Personalized Vaccination:*
- Genetic factors affecting response
- Individual risk stratification
- Precision travel medicine

*Vaccine Impact Modeling:*
- Cost-effectiveness of travel vaccines
- Population-level protection effects
- Resistance and escape concerns

**Policy Challenges:**
- Mandatory vs. voluntary vaccination debates
- Proof of vaccination requirements
- Digital health certificates
- Privacy and discrimination concerns
- Cross-border harmonization of requirements`,
      keyTerms: [
        { term: 'antibody-dependent enhancement', definition: 'Paradoxical worsening of disease due to vaccine-induced antibodies' },
        { term: 'fractional dosing', definition: 'Using smaller vaccine doses to extend supply in emergencies' },
        { term: 'ring vaccination', definition: 'Vaccinating contacts of cases to contain outbreak spread' },
        { term: 'correlate of protection', definition: 'Immune marker associated with vaccine efficacy' },
        { term: 'reverse vaccinology', definition: 'Using genomic information to design vaccines without culturing pathogen' },
      ],
      clinicalNotes: 'Stay current with evolving vaccine recommendations through CDC Yellow Book, WHO resources, and specialized travel medicine organizations (ISTM). Monitor for new vaccine licensure that may benefit travelers. Engage in policy discussions about vaccine access and equity. Understand that travel medicine operates at the intersection of individual patient care and global health - decisions affect not only the traveler but potentially disease transmission dynamics. Consider research opportunities to advance the field through participation in vaccine trials or outcomes studies.',
    },
  },

  media: [],
  citations: [
    {
      id: 'cdc-yellow-book-vaccines',
      type: 'website',
      title: 'CDC Yellow Book 2024 - Travel Vaccines',
      source: 'Centers for Disease Control and Prevention',
      url: 'https://wwwnc.cdc.gov/travel/yellowbook/2024/preparing/immunizations',
      license: 'Public Domain',
    },
  ],
  crossReferences: [
    { targetId: 'pre-travel-consultation', targetType: 'concept', relationship: 'parent', label: 'Pre-Travel Consultation' },
    { targetId: 'travel-related-illnesses', targetType: 'concept', relationship: 'related', label: 'Travel-Related Illnesses' },
  ],
  tags: {
    systems: ['infectious', 'immune'],
    topics: ['travel-medicine', 'vaccines', 'prevention'],
    keywords: ['travel vaccines', 'yellow fever', 'hepatitis A', 'typhoid', 'immunization'],
    clinicalRelevance: 'high',
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default travelVaccines;
