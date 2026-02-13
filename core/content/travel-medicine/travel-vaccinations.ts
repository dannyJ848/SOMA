/**
 * Travel Vaccinations - Travel Medicine
 *
 * Comprehensive content on vaccines required and recommended for international
 * travel, including schedules, contraindications, and special considerations.
 */

import { EducationalContent } from '../types';

export const travelVaccinations: EducationalContent = {
  id: 'travel-vaccinations',
  type: 'concept',
  name: 'Travel Vaccinations',
  alternateNames: ['Travel Vaccines', 'Travel Immunizations', 'Pre-Travel Immunization'],

  levels: {
    1: {
      level: 1,
      summary: 'Travel vaccinations are special shots that protect you from diseases found in other parts of the world before you visit those places.',
      explanation: `When you travel to different countries, you might encounter diseases that are not common where you live. Travel vaccines help protect you from getting sick.

**Why Travel Vaccines Are Important:**
- Some diseases exist only in certain parts of the world
- Your body has not had a chance to build protection against these diseases
- Getting sick while traveling can ruin your trip
- Some countries require proof of vaccination to enter

**Common Travel Vaccines:**
- **Yellow Fever:** Required for some African and South American countries
- **Hepatitis A:** Protects against a liver disease from contaminated food/water
- **Typhoid:** Protects against a serious bacterial infection
- **Malaria pills:** Not a vaccine, but medicine to prevent malaria

**When to Get Vaccinated:**
- Visit your doctor 4-6 weeks BEFORE your trip
- Some vaccines need multiple shots over several weeks
- Your body needs time to build protection

**What to Expect:**
- Shots are usually given in your arm
- Some vaccines may cause mild side effects like soreness or tiredness
- Serious reactions are rare

**Routine Vaccines to Update:**
Before traveling, make sure these are current:
- Measles, Mumps, Rubella (MMR)
- Tetanus (Tdap)
- Flu shot
- Chickenpox vaccine

**Important Records:**
- Keep a copy of your vaccination record
- Some countries require an official vaccination card
- The yellow International Certificate of Vaccination is needed for some countries

**Questions to Ask Your Doctor:**
- What vaccines do I need for my destination?
- How long before my trip should I get them?
- Are there any side effects I should watch for?
- What other health precautions should I take?`,
      keyTerms: [
        { term: 'vaccine', definition: 'A shot that teaches your body to fight off specific diseases' },
        { term: 'immunity', definition: 'Your body\'s ability to fight off a disease after being vaccinated or getting sick' },
        { term: 'International Certificate of Vaccination', definition: 'An official document proving you have received certain vaccines, sometimes required to enter a country' },
      ],
      analogies: [
        'A vaccine is like giving your body a wanted poster - it shows your immune system what the bad guy looks like so it can catch it before you get sick.',
        'Getting vaccinated before travel is like wearing a seatbelt in a car - it protects you from harm just in case.',
      ],
      examples: [
        'If you are visiting relatives in India, you might need hepatitis A and typhoid vaccines.',
        'A safari trip to Kenya might require a yellow fever vaccine certificate.',
      ],
      patientCounselingPoints: [
        'Plan ahead - some vaccines require multiple doses over weeks.',
        'Bring your vaccination record when you travel internationally.',
        'Even with vaccines, practice good hygiene and food safety.',
      ],
    },
    2: {
      level: 2,
      summary: 'Travel vaccinations include routine vaccines that may need updating, required vaccines mandated by certain countries, and recommended vaccines based on destination-specific disease risks.',
      explanation: `## Categories of Travel Vaccines

**1. Routine Vaccines:**
Vaccines everyone should have, may need updating before travel:
| Vaccine | Usual Schedule | Travel Considerations |
|---------|----------------|----------------------|
| MMR | 2 doses lifetime | Verify immunity, measles outbreaks common |
| Tdap/Td | Tdap once, then Td every 10 years | Boost if >10 years |
| Influenza | Annually | Southern hemisphere timing differs |
| Varicella | 2 doses if not immune | Risk in developing countries |
| Polio | Childhood series | May need booster for some destinations |

**2. Required Vaccines:**
Mandatory for entry to certain countries:

*Yellow Fever:*
- Required for entry to many African and South American countries
- Some countries require if traveling FROM endemic areas
- International Certificate of Vaccination (yellow card) valid for life
- Must be given at approved vaccination center

*Meningococcal (for Hajj/Umrah):*
- Saudi Arabia requires for pilgrimage
- Quadrivalent vaccine (ACWY) required
- Certificate must be within certain timeframe

**3. Recommended Vaccines:**
Based on destination, activities, and duration:

| Vaccine | When Recommended |
|---------|------------------|
| Hepatitis A | Most international travel |
| Hepatitis B | Long stays, potential blood/body fluid exposure |
| Typhoid | South Asia, Africa, Latin America |
| Japanese Encephalitis | Rural Asia, long-term travel |
| Rabies | Animal contact, remote areas |
| Cholera | Aid workers, outbreak areas |

## Vaccine Timing

**Pre-Travel Planning:**
- Ideally 4-6 weeks before departure
- Some vaccines require 2-3 doses over time
- Some take 2 weeks to provide protection

**Accelerated Schedules:**
When time is limited:
| Vaccine | Standard Schedule | Accelerated Option |
|---------|-------------------|-------------------|
| Hepatitis A | 0, 6-12 months | Single dose provides rapid protection |
| Hepatitis B | 0, 1, 6 months | 0, 7, 21 days + 12 month booster |
| Rabies | 0, 7, 21-28 days | 0, 7 days (WHO approved) |

## Vaccine Types and Safety

**Live Vaccines:**
- Yellow fever, oral typhoid, MMR, varicella
- Generally avoided in pregnancy and immunocompromised
- Spaced 4 weeks apart if not given same day

**Inactivated Vaccines:**
- Hepatitis A, hepatitis B, injectable typhoid, meningococcal
- Can be given together
- Safe in pregnancy (most)
- Safe in immunocompromised (may have reduced response)

## Common Side Effects

| Effect | Frequency | Management |
|--------|-----------|------------|
| Injection site soreness | Very common | Ice, movement |
| Low-grade fever | Common | Acetaminophen/ibuprofen |
| Fatigue | Common | Rest |
| Headache | Common | Pain relievers |
| Serious allergic reaction | Rare | Seek immediate medical care |

## Documentation

**International Certificate of Vaccination (ICV):**
- Yellow book issued by approved centers
- Yellow fever vaccine record
- Required for border entry in some countries
- Valid for life (since 2016)

**Personal Vaccine Record:**
- Keep copies with travel documents
- Include dates and vaccine types
- Useful for future travel and healthcare`,
      keyTerms: [
        { term: 'endemic', definition: 'A disease that is constantly present in a particular geographic area' },
        { term: 'live vaccine', definition: 'A vaccine containing a weakened (attenuated) form of the virus or bacteria' },
        { term: 'inactivated vaccine', definition: 'A vaccine containing killed virus or bacteria, or parts of them' },
        { term: 'seroconversion', definition: 'When the body develops detectable antibodies after vaccination or infection' },
      ],
      analogies: [
        'Live vaccines are like a practice drill - they use a weakened opponent to train your immune system.',
        'Required vaccines are like having a passport - some countries simply won\'t let you in without them.',
      ],
    },
    3: {
      level: 3,
      summary: 'Travel immunization requires understanding vaccine immunology, risk-benefit analysis for specific itineraries, management of special populations, and appropriate documentation to meet international health regulations.',
      explanation: `## Vaccine-Specific Considerations

**Yellow Fever Vaccine:**

*Indications:*
- Travel to endemic areas (Sub-Saharan Africa, tropical South America)
- Required for entry to certain countries
- May be required if traveling FROM endemic areas

*Contraindications:*
- Age <6 months (absolute), <9 months (relative)
- Severe immunosuppression (CD4 <200, active AIDS)
- Thymus disorder
- History of severe reaction to vaccine components
- Pregnancy (relative - consider risk/benefit)
- Age ≥60 (increased viscerotropic disease risk - first-time vaccines)

*Adverse Events:*
- Yellow fever vaccine-associated viscerotropic disease (YEL-AVD): Rare (~0.4/100,000), potentially fatal
- Yellow fever vaccine-associated neurotropic disease (YEL-AND): ~0.8/100,000
- Higher risk in elderly, immunocompromised, thymus disorders

**Japanese Encephalitis Vaccine (Ixiaro):**

*Indications:*
- Travel to rural agricultural areas of Asia
- Travel during transmission season (monsoon, post-monsoon)
- Long-term travelers (>1 month)
- Frequent travelers to endemic areas

*Schedule:*
- Primary: Day 0 and day 28
- Booster: At 1 year if ongoing exposure
- Accelerated: Day 0 and day 7 (if needed)

**Rabies Pre-Exposure Prophylaxis:**

*Indications:*
- Extended travel to high-risk areas
- Activities with animal contact (veterinary, wildlife work)
- Children in endemic areas
- Limited access to post-exposure treatment

*Benefits of Pre-Exposure:*
- Simplifies post-exposure management (no RIG needed)
- Extends time window for post-exposure vaccination
- Provides partial protection while seeking care

*Schedule:*
- WHO: Days 0 and 7 (2-dose schedule)
- Previous: Days 0, 7, and 21-28 (3-dose)
- Booster: Based on risk, titer checking

## Risk Assessment Framework

**Factors Determining Vaccine Needs:**

| Factor | Impact on Recommendations |
|--------|---------------------------|
| Destination | Endemic disease presence |
| Season | Transmission patterns |
| Duration | Longer = higher cumulative risk |
| Activities | Adventure, healthcare, animal contact |
| Accommodations | Resort vs. local housing |
| Access to care | Remote vs. urban |
| Medical history | Contraindications, immune status |

**Evidence Sources:**
- CDC Yellow Book (Travelers' Health)
- WHO International Travel and Health
- ProMED disease surveillance
- Country-specific health ministry advisories

## Special Populations

**Pregnant Travelers:**

| Vaccine | Pregnancy Recommendation |
|---------|-------------------------|
| Tdap | Recommended each pregnancy (27-36 weeks) |
| Influenza | Recommended any trimester |
| Hepatitis A | Use if indicated, inactivated |
| Hepatitis B | Use if indicated |
| Yellow fever | Avoid unless high risk unavoidable |
| MMR | Contraindicated (live) |
| Varicella | Contraindicated (live) |
| Meningococcal | Use if indicated |

**Immunocompromised Travelers:**

*Live Vaccine Contraindications:*
- CD4 <200 or <15%
- Active immunosuppressive therapy
- Recent chemotherapy
- Certain biologic agents

*Inactivated Vaccines:*
- Generally safe but may have reduced response
- Consider checking titers post-vaccination
- May need additional doses

**Infants and Young Children:**

| Vaccine | Minimum Age |
|---------|-------------|
| Hepatitis A | 6 months (if traveling), off-label |
| Hepatitis B | Birth |
| Yellow fever | 9 months (6 months if high risk) |
| Japanese encephalitis | 2 months |
| Typhoid (injectable) | 2 years |
| Typhoid (oral) | 6 years |
| Meningococcal | 2 months (depends on product) |

## Documentation and Certification

**IHR 2005 Requirements:**
- Yellow fever is currently the only vaccine under IHR
- Certificate must specify:
  - Date of vaccination
  - Vaccine manufacturer and batch number
  - Official stamp of administering center
  - Signature of clinician

**Medical Waivers:**
- For travelers with contraindications to required vaccines
- Written on letterhead with rationale
- May or may not be accepted at borders
- Consider alternative travel plans if possible`,
      keyTerms: [
        { term: 'YEL-AVD', definition: 'Yellow Fever Vaccine-Associated Viscerotropic Disease; rare but potentially fatal complication of yellow fever vaccination' },
        { term: 'pre-exposure prophylaxis', definition: 'Vaccination given before potential exposure to prevent disease, such as rabies PrEP' },
        { term: 'RIG', definition: 'Rabies Immune Globulin; given with vaccine after rabies exposure in unvaccinated individuals' },
        { term: 'IHR', definition: 'International Health Regulations; WHO framework governing international public health responses' },
      ],
      clinicalNotes: 'For travelers ≥60 years receiving yellow fever vaccine for the first time, carefully weigh the risk of YEL-AVD against actual disease risk. Consider medical waiver if travel is to low-risk areas within endemic countries (urban, low transmission season).',
    },
    4: {
      level: 4,
      summary: 'Advanced travel immunization practice integrates complex medical decision-making for high-risk travelers, emerging vaccine technologies, outbreak response protocols, and evidence-based individualized immunization strategies.',
      explanation: `## Complex Traveler Scenarios

**HIV-Infected Travelers:**

*CD4-Based Decision Making:*
| CD4 Count | Live Vaccine Approach |
|-----------|----------------------|
| ≥200 cells/μL | Yellow fever, MMR generally safe |
| 200-500 cells/μL | Consider yellow fever if high risk |
| <200 cells/μL | Contraindicated; consider medical waiver |

*Immunologic Response:*
- May have blunted response to vaccines
- Consider checking post-vaccination titers
- May need additional doses or boosters
- Timing relative to ART initiation matters

**Solid Organ Transplant Recipients:**

*Timing Considerations:*
| Timing | Vaccination Approach |
|--------|---------------------|
| Pre-transplant | Accelerate routine and travel vaccines |
| 0-6 months post | Avoid live vaccines; inactivated okay |
| >6 months post | Individualize based on immunosuppression |
| Rejection treatment | Delay vaccination |

*Specific Recommendations:*
- Hepatitis B: Check titers, may need higher doses
- Influenza: Annual, high-dose in some cases
- Live vaccines: Generally avoided on immunosuppression

**Travelers on Biologic Therapy:**

*Agent-Specific Intervals for Live Vaccines:*
| Agent | Half-life | Interval Before Live Vaccine |
|-------|-----------|------------------------------|
| Infliximab | 8-10 days | 3-6 months |
| Adalimumab | 14 days | 3-6 months |
| Etanercept | 3-5 days | 1 month |
| Rituximab | 21 days | 6-12 months |

**Asplenic Travelers:**
- High risk for encapsulated organisms
- Pneumococcal, meningococcal, Hib vaccines essential
- Prophylactic antibiotics for some destinations
- Medical alert bracelet recommended
- Lower threshold for medical waiver for yellow fever

## Emerging Vaccines and Technologies

**Dengue Vaccines:**

*Qdenga (TAK-003):*
- Live attenuated tetravalent vaccine
- 2 doses, 3 months apart
- Indicated regardless of prior dengue infection
- Efficacy varies by serotype (54-80%)
- Now available for travelers in some regions

*Dengvaxia:*
- Requires prior dengue infection (seropositivity)
- Risk of severe dengue in seronegative recipients
- Limited travel medicine application

**Chikungunya Vaccine:**
- Ixchiq (VLA1553) - live attenuated, single dose
- FDA approved 2023
- For travelers ≥18 years to endemic areas
- Provides rapid protection (day 28 immunity)

**Malaria Vaccine:**
- RTS,S/AS01 (Mosquirix) - WHO recommended for children
- R21/Matrix-M - newer generation, higher efficacy
- Not currently available for travelers
- Focus on endemic pediatric populations

## Outbreak Response Vaccination

**Emerging Outbreak Considerations:**

| Situation | Vaccination Response |
|-----------|---------------------|
| Cholera outbreak | Consider CVD 103-HgR (Vaxchora) for travelers to affected areas |
| Meningitis outbreak | Expanded MenACWY, possibly Men B |
| Polio outbreak | Verify vaccination, IPV booster |
| Yellow fever outbreak | Enhanced recommendations, may become required |

**Ring Vaccination Strategies:**
- Targeted vaccination around outbreak
- May involve travelers to affected areas
- Requires real-time surveillance integration

## Vaccine Coadministration

**Same-Day Administration:**

*Generally Acceptable:*
- Multiple inactivated vaccines: Any combination
- Live vaccines: Can be given same day
- Live injectable + live oral: Acceptable

*Spacing Requirements:*
- Two live injectable vaccines not given same day: Wait 4 weeks
- Live parenteral and PPD: Give together or wait 4 weeks

**Immune Globulin Interactions:**
| Product | Interval to MMR/Varicella |
|---------|---------------------------|
| Ig (standard dose) | 3 months |
| RIG (rabies) | 4 months |
| VZIG | 5 months |
| High-dose IVIG | 11 months |

## Quality and Safety Monitoring

**Adverse Event Reporting:**
- VAERS (Vaccine Adverse Event Reporting System) in US
- Yellow Card scheme in UK
- Post-marketing surveillance essential
- Report all serious adverse events

**Vaccine Storage and Handling:**
- Cold chain maintenance critical
- Yellow fever especially temperature-sensitive
- Viability affected by light exposure
- Documentation of storage conditions

**Travel Clinic Quality Metrics:**
| Metric | Standard |
|--------|----------|
| Appropriate vaccine recommendation | >95% |
| Timing adequacy | >90% |
| Documentation completeness | 100% |
| Adverse event recognition | 100% |
| Contraindication screening | 100% |`,
      keyTerms: [
        { term: 'Qdenga', definition: 'Live attenuated tetravalent dengue vaccine; approved for travelers regardless of prior infection status' },
        { term: 'Ixchiq', definition: 'Live attenuated chikungunya vaccine; provides rapid single-dose protection for travelers' },
        { term: 'ring vaccination', definition: 'Strategy of vaccinating contacts and contacts of contacts around a case to contain outbreaks' },
        { term: 'VAERS', definition: 'Vaccine Adverse Event Reporting System; US passive surveillance for vaccine safety' },
      ],
      clinicalNotes: 'New dengue vaccine Qdenga is a game-changer for travelers - unlike Dengvaxia, it does not require prior infection screening. Consider for repeated travel to endemic areas. Chikungunya vaccine (Ixchiq) offers rapid protection for last-minute travelers to outbreak areas.',
    },
    5: {
      level: 5,
      summary: 'Expert travel immunization integrates vaccinology science, global health surveillance, policy development, and precision medicine approaches to optimize protection for diverse traveler populations in an evolving epidemiological landscape.',
      explanation: `## Advanced Vaccinology Concepts

**Correlates of Protection:**

| Vaccine | Correlate | Threshold |
|---------|-----------|-----------|
| Yellow fever | Neutralizing antibody | PRNT80 ≥1:10 |
| Hepatitis A | Anti-HAV IgG | ≥10 mIU/mL (varies) |
| Hepatitis B | Anti-HBs | ≥10 mIU/mL |
| Rabies | Virus-neutralizing antibody | ≥0.5 IU/mL |
| Japanese encephalitis | Neutralizing antibody | PRNT50 ≥1:10 |

**Factors Affecting Immunogenicity:**
| Factor | Effect | Implication |
|--------|--------|-------------|
| Age | ↓ Response in elderly | May need higher doses |
| Obesity | ↓ Response | Longer needle, intramuscular |
| Immunosuppression | ↓ Response | Check titers, boost |
| Genetics | Variable response | Personalized approaches emerging |
| Microbiome | Modulates response | Probiotic research ongoing |

**Duration of Protection:**

| Vaccine | Duration | Evidence Base |
|---------|----------|---------------|
| Yellow fever | Lifelong (WHO 2013) | Long-term cohort studies |
| Hepatitis A | Lifelong (likely) | Mathematical modeling |
| Hepatitis B | 30+ years | Long-term follow-up |
| Japanese encephalitis | Unknown, boosters may be needed | Limited data |
| Typhoid (injectable) | 2-3 years | Controlled trials |
| Rabies (pre-exposure) | 10+ years | Immunologic memory |

## Global Vaccine Policy

**WHO Position Papers:**
- Evidence-based recommendations
- Updated with new evidence
- Guide national policies
- Address equity considerations

**International Health Regulations:**

*Current IHR Vaccine Requirements:*
- Only yellow fever currently specified
- Framework for adding others (unused)
- COVID-19 demonstrated IHR flexibility

*IHR Reform Discussions:*
- Expanded vaccine passport concepts
- Digital verification systems
- Equity in vaccine access
- Sovereignty considerations

**Vaccination Certificate Evolution:**
- Paper yellow card (current)
- SMART Health Cards
- EU Digital COVID Certificate precedent
- WHO DDCC (Digital Documentation of COVID Certificates)
- Interoperability challenges

## Precision Immunization

**Pharmacogenomics of Vaccines:**

*HLA Associations:*
| Gene | Vaccine | Effect |
|------|---------|--------|
| HLA-DRB1 | Hepatitis B | Non-response associated with certain alleles |
| HLA-DQB1 | Hepatitis B | Response variability |
| Various HLA | Yellow fever | Adverse event risk |

*Emerging Applications:*
- Genetic screening for non-responders
- Personalized dosing strategies
- Adverse event prediction
- Currently research-stage

**Systems Vaccinology:**
- Transcriptomic signatures predicting response
- Metabolomic markers
- Integration with clinical data
- Individualized recommendations future possibility

## Vaccine Development Pipeline

**Emerging Travel Vaccines:**

| Vaccine | Target | Stage | Potential Impact |
|---------|--------|-------|------------------|
| Chikungunya (Ixchiq) | CHIKV | Approved 2023 | Major advancement |
| Dengue (Qdenga) | Dengue 1-4 | Approved | Traveler protection |
| Zika | ZIKV | Phase II/III | Pregnancy protection |
| Universal influenza | All strains | Research | End annual vaccination |
| Norovirus | Norovirus | Phase III | Cruise ship/travel |

**Platform Technologies:**
| Platform | Examples | Advantages |
|----------|----------|------------|
| mRNA | COVID vaccines | Rapid development, adaptable |
| Viral vector | Ebola vaccine | Strong immune response |
| Recombinant protein | Hepatitis B, HPV | Well-established, stable |
| Live attenuated | Yellow fever, oral typhoid | Single dose, long-lasting |

## Global Health Equity

**Vaccine Access Disparities:**
- High-cost vaccines unavailable in endemic countries
- Travel vaccines developed for travelers, not residents
- Manufacturing capacity limitations
- Supply chain challenges

**Ethical Considerations:**
| Issue | Consideration |
|-------|---------------|
| Resource allocation | Traveler vs. endemic population |
| Clinical trials | Conducted in endemic areas, benefit travelers |
| Technology transfer | Manufacturing in endemic regions |
| Pricing | Tiered pricing, GAVI support |

**COVAX/Gavi Model:**
- Pooled procurement
- Manufacturer commitments
- Advance market commitments
- Model for travel vaccines?

## Quality Assurance Systems

**Pre-Qualification:**
- WHO prequalification program
- Ensures manufacturing standards
- Enables UN procurement
- National regulatory reliance

**Post-Marketing Surveillance:**
| System | Region | Function |
|--------|--------|----------|
| VAERS | US | Passive reporting |
| Vaccine Safety Datalink | US | Active surveillance |
| Brighton Collaboration | Global | Case definition standardization |
| VigiBase | Global (WHO) | Pharmacovigilance database |

**Batch Release:**
- Independent testing by national authorities
- Ensures consistency
- Critical for live vaccines
- Quality assurance checkpoint

## Expert Practice Integration

**Decision Support Systems:**
- CDC TravWell app
- Shoreland Travax
- CATMAT guidelines (Canada)
- NaTHNaC (UK)
- Algorithm-based recommendations
- Integration with EHR

**Continuing Education:**
- ISTM (International Society of Travel Medicine)
- ASTMH (American Society of Tropical Medicine)
- Certificate in Travel Health programs
- Maintenance of competency

**Research Priorities:**
| Priority | Focus Area |
|----------|------------|
| Duration of protection | Long-term cohort studies |
| Correlates of protection | Standardized assays |
| Special populations | Immunocompromised, pregnancy |
| Implementation | Health system integration |
| Equity | Access and affordability |`,
      keyTerms: [
        { term: 'correlate of protection', definition: 'Immune marker (often antibody level) that predicts protection against disease after vaccination' },
        { term: 'systems vaccinology', definition: 'Application of systems biology approaches to understand and predict vaccine responses' },
        { term: 'WHO prequalification', definition: 'Process ensuring vaccines meet acceptable standards for international procurement' },
        { term: 'DDCC', definition: 'Digital Documentation of COVID-19 Certificates; WHO standard for vaccine verification' },
      ],
      clinicalNotes: `Expert Practice Points:
1. Correlates of protection enable evidence-based titer checking for immunocompromised travelers
2. New platform technologies (mRNA) may revolutionize travel vaccine development timelines
3. Chikungunya and improved dengue vaccines address major unmet traveler health needs
4. Global health equity demands consideration of endemic population access, not just traveler protection
5. Digital vaccine certificates will likely expand beyond COVID, affecting travel medicine practice
6. Systems vaccinology may enable personalized vaccination strategies in the future
7. Continuous professional development essential given rapidly evolving field`,
    },
  },

  media: [
    {
      id: 'vaccine-schedule-travel',
      type: 'diagram',
      filename: 'vaccine-schedule-travel.svg',
      title: 'Travel Vaccine Schedule Planning',
      description: 'Timeline for pre-travel immunization planning',
    },
    {
      id: 'vaccine-map',
      type: 'diagram',
      filename: 'vaccine-map.svg',
      title: 'Geographic Vaccine Requirements',
      description: 'World map showing vaccine requirements by region',
    },
  ],

  citations: [
    {
      id: 'cdc-travelers-health',
      type: 'website',
      title: 'CDC Travelers\' Health - Vaccines and Medicines',
      source: 'Centers for Disease Control and Prevention',
      url: 'https://wwwnc.cdc.gov/travel/page/vaccines-medicines',
    },
    {
      id: 'who-vaccines',
      type: 'website',
      title: 'WHO Vaccine Position Papers',
      source: 'World Health Organization',
      url: 'https://www.who.int/teams/immunization-vaccines-and-biologicals/policies/position-papers',
    },
  ],

  crossReferences: [
    { targetId: 'travel-health-overview', targetType: 'concept', relationship: 'parent', label: 'Travel Health Overview' },
    { targetId: 'immune-vaccines', targetType: 'concept', relationship: 'related', label: 'Vaccines and Immunization' },
    { targetId: 'infectious-disease-tropical', targetType: 'concept', relationship: 'related', label: 'Tropical Infectious Diseases' },
  ],

  tags: {
    systems: ['immune', 'infectious-disease'],
    topics: ['travel-medicine', 'immunization', 'preventive-care'],
    keywords: ['travel vaccines', 'yellow fever', 'hepatitis', 'typhoid', 'immunization'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'family-medicine', 'infectious-disease'],
    },
  },

  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};

export default travelVaccinations;
