/**
 * Travel Health Overview - Travel Medicine
 *
 * Comprehensive content on pre-travel health consultations, risk assessment,
 * and health preparation for international travel.
 */

import { EducationalContent } from '../types';

export const travelHealthOverview: EducationalContent = {
  id: 'travel-health-overview',
  type: 'concept',
  name: 'Travel Health Overview',
  alternateNames: ['Pre-Travel Health', 'Travel Medicine Basics', 'International Travel Health'],

  levels: {
    1: {
      level: 1,
      summary: 'Travel health means preparing your body to stay healthy when you visit other countries or places far from home.',
      explanation: `When you travel to new places, especially other countries, you might be exposed to things that could make you sick. Travel health helps you prepare so you can enjoy your trip safely.

**Why Travel Health Matters:**
- Some places have diseases that do not exist where you live
- The food and water might be different from what your body is used to
- You might be in very hot, cold, or high-altitude places
- Getting sick far from home can be scary and complicated

**Getting Ready for Travel:**
- **Visit your doctor** 4-6 weeks before your trip
- **Get any vaccines** you might need for your destination
- **Pack medicines** for common problems like headaches or upset stomach
- **Learn about your destination** - what health risks exist there

**Common Health Issues When Traveling:**
- Traveler's diarrhea (upset stomach from new food or water)
- Motion sickness (feeling sick on planes, boats, or cars)
- Jet lag (feeling tired because of time zone changes)
- Sunburn
- Insect bites

**Simple Ways to Stay Healthy:**
- Wash your hands often
- Be careful about what you eat and drink
- Use sunscreen and insect repellent
- Stay hydrated (drink plenty of safe water)
- Get enough rest

**What to Bring:**
- Any medicines you take regularly
- A small first aid kit
- Sunscreen and insect spray
- Hand sanitizer
- Your health insurance information

**When to See a Doctor:**
- Before your trip for vaccines and advice
- During your trip if you get very sick
- After your trip if you feel unwell`,
      keyTerms: [
        { term: 'vaccine', definition: 'A shot that helps protect you from getting certain diseases' },
        { term: 'traveler\'s diarrhea', definition: 'Stomach upset and loose bowel movements from eating or drinking contaminated food or water' },
        { term: 'jet lag', definition: 'Feeling tired and out of sorts because your body is used to a different time zone' },
      ],
      analogies: [
        'Getting travel vaccines is like bringing an umbrella on a trip - you prepare for possible problems before they happen.',
        'Your body meeting new germs is like meeting people who speak a different language - it takes time to adjust.',
      ],
      examples: [
        'A family visiting Africa might need yellow fever vaccines and malaria pills.',
        'Someone traveling to Mexico might bring medicine for traveler\'s diarrhea, just in case.',
      ],
      patientCounselingPoints: [
        'Start planning your health preparation 4-6 weeks before travel.',
        'Bring enough of your regular medicines plus extra in case of delays.',
        'Keep a list of your medicines and any allergies with you.',
      ],
    },
    2: {
      level: 2,
      summary: 'Travel medicine encompasses pre-travel consultations, vaccination requirements, disease prevention strategies, and management of health risks specific to travel destinations and activities.',
      explanation: `## The Pre-Travel Health Consultation

**Purpose:**
- Assess individual health risks
- Review itinerary-specific concerns
- Provide appropriate vaccinations
- Prescribe preventive medications
- Educate on health behaviors

**Timing:**
- Ideally 4-6 weeks before departure
- Some vaccines need multiple doses
- Certain medications need time to assess tolerability

**Information to Gather:**
- Complete itinerary (countries, regions, urban vs. rural)
- Trip duration and purpose
- Planned activities (trekking, diving, adventure sports)
- Accommodations type
- Previous travel experience
- Medical history and medications
- Vaccination history

## Risk Assessment

**Destination-Based Risks:**
| Region | Common Concerns |
|--------|-----------------|
| Sub-Saharan Africa | Malaria, yellow fever, typhoid |
| South Asia | Hepatitis A, typhoid, traveler's diarrhea |
| Southeast Asia | Dengue, Japanese encephalitis, malaria |
| Central/South America | Yellow fever, dengue, Zika |
| Middle East | Hepatitis A, MERS, respiratory infections |

**Activity-Based Risks:**
| Activity | Risks |
|----------|-------|
| Adventure travel | Injuries, altitude sickness |
| Volunteering | Prolonged exposure, healthcare work risks |
| Visiting family | Longer stays, local food/water |
| Cruise travel | Norovirus, respiratory infections |

## Vaccination Considerations

**Routine Vaccines to Update:**
- Measles, mumps, rubella (MMR)
- Tetanus, diphtheria, pertussis (Tdap)
- Influenza
- Varicella (chickenpox)
- Polio (if traveling to endemic areas)

**Travel-Specific Vaccines:**
| Vaccine | Primary Indications |
|---------|---------------------|
| Hepatitis A | Most international travel |
| Hepatitis B | Long-term travelers, medical work |
| Typhoid | South Asia, Africa, Latin America |
| Yellow Fever | Required for certain countries |
| Japanese Encephalitis | Rural Asia, long-term travel |
| Meningococcal | Meningitis belt, Hajj pilgrimage |
| Rabies | Remote areas, animal contact |

## Common Travel Health Issues

**Traveler's Diarrhea:**
- Most common travel illness (30-70% of travelers)
- Usually bacterial (E. coli, Campylobacter, Salmonella)
- Prevention: Safe food and water practices
- Treatment: Hydration, sometimes antibiotics

**Malaria Prevention:**
- Depends on destination and resistance patterns
- Medications: Atovaquone-proguanil, doxycycline, mefloquine
- Also requires mosquito bite prevention

**Motion Sickness:**
- Preventable with medications
- Options: Dimenhydrinate, meclizine, scopolamine patch

**Jet Lag:**
- Occurs when crossing multiple time zones
- Management: Light exposure, sleep schedule adjustment, melatonin

## Travel Health Kit

**Essential Items:**
| Category | Items |
|----------|-------|
| Medications | Pain relievers, antidiarrheal, antihistamines |
| First aid | Bandages, antiseptic, thermometer |
| Prevention | Sunscreen, insect repellent, hand sanitizer |
| Documentation | Prescriptions, vaccination records, insurance |

## After Travel

**Post-Travel Health Concerns:**
- See a doctor if: Fever, persistent diarrhea, skin rash, respiratory symptoms
- Some diseases have long incubation periods
- Malaria can appear weeks after return
- Keep travel health records for future reference`,
      keyTerms: [
        { term: 'pre-travel consultation', definition: 'A medical appointment before travel to assess risks and prepare health measures' },
        { term: 'endemic', definition: 'A disease that is constantly present in a particular region or population' },
        { term: 'incubation period', definition: 'The time between exposure to an infection and when symptoms first appear' },
        { term: 'prophylaxis', definition: 'Action taken to prevent disease, such as taking medicine or getting vaccinated' },
      ],
      analogies: [
        'A pre-travel consultation is like a weather briefing before a flight - it helps you prepare for conditions you\'ll encounter.',
        'Taking malaria prophylaxis is like wearing a seatbelt - you hope you don\'t need it, but you\'re protected if you do.',
      ],
    },
    3: {
      level: 3,
      summary: 'Travel medicine practice integrates epidemiological risk assessment, evidence-based vaccination protocols, chemoprophylaxis selection, and behavior modification counseling tailored to individual traveler profiles and itineraries.',
      explanation: `## Comprehensive Risk Assessment

**Risk Stratification Framework:**

| Factor | Low Risk | Moderate Risk | High Risk |
|--------|----------|---------------|-----------|
| Destination | Developed countries | Urban developing | Rural endemic areas |
| Duration | <2 weeks | 2-4 weeks | >1 month |
| Accommodations | Hotels | Mixed | Local housing |
| Activities | Tourism | Volunteering | Healthcare, adventure |
| Medical history | Healthy | Stable chronic conditions | Immunocompromised |

**Epidemiological Resources:**
- CDC Yellow Book (primary US reference)
- WHO International Travel and Health
- European CDC travel health advisories
- Local health ministry alerts
- ProMED-mail disease surveillance

## Vaccination Protocols

**Vaccine Schedules:**

*Hepatitis A:*
- Single dose provides ~2 weeks protection
- Second dose at 6-12 months for long-term immunity
- Combined HAV/HBV vaccine available

*Yellow Fever:*
- Single dose provides lifelong immunity (updated 2016)
- International certificate valid for life
- Live vaccine - contraindications important
- Required vs. recommended destinations

*Japanese Encephalitis (JE):*
- Ixiaro: 2 doses, days 0 and 28
- Indicated for: >1 month in endemic areas, rural areas, monsoon season
- Risk primarily in agricultural areas with pig farming and irrigated rice fields

*Rabies Pre-Exposure:*
- 2-dose schedule (days 0, 7) now accepted
- Does NOT eliminate need for post-exposure treatment
- Simplifies post-exposure management
- Indicated for: Remote travel, animal contact, children

**Accelerated Schedules:**
When time is limited before departure:
| Vaccine | Accelerated Schedule |
|---------|---------------------|
| Hepatitis A | Single dose provides rapid protection |
| Hepatitis B | 0, 7, 21 days (+ 12 month booster) |
| Typhoid | Injectable: 2 weeks before; Oral: complete series |
| Rabies | 0, 7 days |

## Malaria Prevention

**Chemoprophylaxis Selection:**

| Agent | Dosing | Advantages | Disadvantages |
|-------|--------|------------|---------------|
| Atovaquone-proguanil | Daily, start 1-2d before | Few side effects, short before/after | Cost, daily dosing |
| Doxycycline | Daily, start 1-2d before | Low cost, STI protection | Photosensitivity, daily |
| Mefloquine | Weekly, start 2-3wk before | Weekly dosing | Neuropsychiatric effects |
| Tafenoquine | Loading then weekly | Long half-life | G6PD testing required |

**Geographic Resistance Patterns:**
- Check CDC or WHO current recommendations
- Chloroquine resistance widespread
- Some areas have mefloquine resistance
- Artemisinin resistance emerging in Southeast Asia

**Personal Protective Measures:**
- DEET (20-50%) or picaridin repellents
- Permethrin-treated clothing and bed nets
- Long sleeves and pants at dusk/dawn
- Air conditioning or screened rooms

## Traveler's Diarrhea Management

**Prevention:**
- "Boil it, cook it, peel it, or forget it"
- Bottled water (verified seal) or treated water
- Avoid ice in drinks
- Bismuth subsalicylate prophylaxis (limited use)

**Treatment Algorithm:**

\`\`\`
Mild (tolerable, not interfering with activities)
  → Loperamide PRN

Moderate (distressing, limits activities)
  → Loperamide + antibiotics (azithromycin or fluoroquinolone)

Severe (incapacitating, bloody, febrile)
  → Seek medical care
  → Avoid loperamide if bloody/febrile
\`\`\`

**Antibiotic Selection:**
| Region | First Line | Alternative |
|--------|------------|-------------|
| Most destinations | Azithromycin 1g single or 500mg x3d | Fluoroquinolone |
| Southeast Asia | Azithromycin (quinolone resistance) | Rifaximin |
| Mexico/Caribbean | Fluoroquinolone or azithromycin | Rifaximin |

## Special Populations

**Pregnant Travelers:**
- Avoid Zika-endemic areas
- Live vaccines contraindicated
- Malaria prevention critical (higher morbidity)
- Modified medication options
- Healthcare availability at destination important

**Immunocompromised:**
- Live vaccines contraindicated
- Antimicrobial prophylaxis may be longer
- Lower threshold for illness
- Travel health insurance essential
- Consider destination healthcare quality

**Travelers with Chronic Conditions:**
- Sufficient medication supply (+extra)
- Medication interactions with prophylaxis
- Emergency plan for exacerbations
- Medical letter for controlled substances
- Know equivalent medications at destination`,
      keyTerms: [
        { term: 'chemoprophylaxis', definition: 'Use of medications to prevent disease, such as antimalarials taken before and during travel' },
        { term: 'Ixiaro', definition: 'Inactivated Japanese encephalitis vaccine for travelers to endemic areas in Asia' },
        { term: 'tafenoquine', definition: 'Long-acting antimalarial requiring G6PD screening before use' },
        { term: 'Yellow Book', definition: 'CDC\'s Health Information for International Travel; primary US travel medicine reference' },
      ],
      clinicalNotes: 'Yellow fever vaccination is contraindicated in travelers >60 years old with no prior vaccination due to increased risk of vaccine-associated viscerotropic disease. Careful risk-benefit discussion is essential. Medical waiver letters available for countries requiring proof of vaccination.',
    },
    4: {
      level: 4,
      summary: 'Advanced travel medicine practice requires integration of complex medical conditions, emerging infectious disease threats, occupational travel health, and post-travel illness evaluation within a global health framework.',
      explanation: `## Complex Traveler Management

**Immunocompromised Travelers:**

*HIV/AIDS:*
| CD4 Count | Considerations |
|-----------|----------------|
| >500 | Most travel feasible with standard precautions |
| 200-500 | Consider destination carefully, avoid high-risk areas |
| <200 | Higher risk, live vaccines contraindicated, antimicrobial prophylaxis |

Live vaccine contraindications:
- Yellow fever
- Oral typhoid
- MMR (if severely immunocompromised)
- Varicella

*Solid Organ Transplant:*
- Time since transplant matters
- Level of immunosuppression
- Avoid certain destinations in early post-transplant period
- Drug interactions with prophylactic agents

*Biologics and Immunomodulators:*
- Live vaccine timing based on drug half-life
- May require holding therapy for vaccinations
- Enhanced infectious risks

**Travelers with Cardiac Disease:**

*Pre-travel Evaluation:*
- Stability of condition
- Air travel physiological stressors
- Altitude destination considerations
- Medication supply and equivalents

*Specific Concerns:*
| Condition | Travel Considerations |
|-----------|----------------------|
| Recent MI | Delay travel 2-6 weeks |
| Unstable angina | Stabilize before travel |
| Pacemaker/ICD | Security screening protocols |
| Anticoagulation | INR monitoring plans |

**Pregnancy:**

*Zika Considerations:*
- Counsel on endemic areas
- Postpone if possible
- Male partners can transmit
- Prevention measures if travel necessary

*Malaria in Pregnancy:*
- Increased severity, fetal loss, prematurity
- Chloroquine and mefloquine acceptable
- Doxycycline, primaquine contraindicated
- High-risk areas: Consider postponing travel

## Emerging Infectious Disease Response

**Outbreak Monitoring:**
- WHO Disease Outbreak News
- CDC Travelers' Health notices
- Travel level designations (Watch, Alert, Warning, Avoid)

**Recent/Current Concerns:**
| Disease | Geographic Risk | Traveler Implications |
|---------|-----------------|----------------------|
| COVID-19 | Variable/evolving | Vaccination, testing requirements |
| Mpox | Endemic Africa, outbreaks elsewhere | Vaccination for high-risk |
| Chikungunya | Tropical/subtropical | No vaccine, prevention focus |
| Dengue | Expanding range | Vaccine for some, prevention |

**Vaccine-Preventable Emerging Diseases:**

*Dengue Vaccine (Qdenga):*
- Now available for travelers
- Two doses, 3 months apart
- Efficacy varies by serotype
- Consider for repeated travel to endemic areas

## Occupational Travel Health

**Healthcare Workers:**
- Enhanced PPE training
- Post-exposure protocols
- Evacuation insurance critical
- Mental health support

**High-Risk Occupational Groups:**

| Group | Primary Risks | Key Interventions |
|-------|---------------|-------------------|
| Aid workers | Infectious diseases, trauma, security | Comprehensive vaccination, security training |
| Business travelers | STIs, traffic accidents | Risk education, emergency contacts |
| Military | Endemic diseases, injuries | Pre-deployment vaccination |
| Laboratory/Research | Specific pathogen exposure | Pre-exposure vaccination, protocols |

**Long-Term Travelers/Expatriates:**
- Extended health screening
- Periodic reassessment
- Family health planning
- Re-entry health evaluation

## Post-Travel Illness Evaluation

**Fever in Returned Travelers:**

*Syndromic Approach:*
| Syndrome | Top Considerations |
|----------|-------------------|
| Fever + normal exam | Malaria, dengue, typhoid, rickettsial |
| Fever + rash | Dengue, chikungunya, acute HIV, drug reaction |
| Fever + respiratory | Influenza, COVID-19, pneumonia, TB |
| Fever + GI | Typhoid, hepatitis A, amoebic liver abscess |
| Fever + CNS | Malaria (cerebral), meningitis, JE, rabies |

*Diagnostic Priorities:*
1. Rule out malaria FIRST (thick/thin smear, rapid test)
2. Blood cultures
3. Complete blood count with differential
4. Liver function tests
5. Urinalysis
6. Consider dengue NS1/serology

**Chronic/Persistent Symptoms:**

*Eosinophilia:*
- Parasitic infection (schistosomiasis, strongyloides, filariasis)
- Evaluation: Stool ova/parasites, serology, imaging

*Chronic Diarrhea:*
- Giardia, Cryptosporidium, Cyclospora
- Tropical sprue
- Post-infectious IBS

*Skin Manifestations:*
| Finding | Consider |
|---------|----------|
| Migratory swelling | Loa loa, gnathostomiasis |
| Furuncle-like | Myiasis, tungiasis |
| Serpiginous track | Cutaneous larva migrans |
| Ulcer | Leishmaniasis, mycobacterial |

## Medical Tourism and Healthcare Abroad

**Considerations:**
- Accreditation verification (JCI, etc.)
- Infection control standards
- Surgical complications and follow-up
- Medical record access
- Insurance coverage gaps

**High-Risk Medical Procedures Abroad:**
- Dental work (hepatitis B/C risk)
- Cosmetic surgery
- Organ transplantation (ethical concerns)
- Stem cell treatments (unproven)`,
      keyTerms: [
        { term: 'vaccine-associated viscerotropic disease', definition: 'Rare but serious adverse reaction to yellow fever vaccine resembling wild-type infection' },
        { term: 'Qdenga', definition: 'Live attenuated tetravalent dengue vaccine approved for travelers and endemic populations' },
        { term: 'NS1', definition: 'Non-structural protein 1; dengue antigen detectable early in infection' },
        { term: 'JCI', definition: 'Joint Commission International; healthcare facility accreditation organization for international standards' },
      ],
      clinicalNotes: 'All febrile returned travelers from malaria-endemic areas must have malaria excluded urgently, regardless of prophylaxis history. Prophylaxis is not 100% effective, and delays in malaria diagnosis significantly increase morbidity and mortality.',
    },
    5: {
      level: 5,
      summary: 'Expert travel medicine practice integrates global health surveillance systems, advanced diagnostics for imported infections, public health notification requirements, and policy-level considerations for population health protection.',
      explanation: `## Global Health Surveillance Integration

**Real-Time Intelligence Sources:**
| Source | Type | Utility |
|--------|------|---------|
| GPHIN | Automated media surveillance | Early outbreak detection |
| ProMED-mail | Moderated reporting network | Emerging disease alerts |
| HealthMap | Aggregated surveillance | Geographic visualization |
| BlueDot | AI-powered prediction | Outbreak trajectory |
| WHO IHR | Official country reporting | Verified public health events |

**International Health Regulations (IHR 2005):**
- Legally binding on WHO member states
- Point of entry requirements
- Public health emergency of international concern (PHEIC)
- Disease reporting obligations
- Traveler health measures limitations

**Quarantine Station Operations:**
- US has 20 quarantine stations
- Authority under Public Health Service Act
- Conditional release and monitoring
- Isolation authority for specified diseases

## Advanced Diagnostics

**Molecular Diagnostics:**

| Platform | Applications | Turnaround |
|----------|--------------|------------|
| Multiplex PCR panels | Respiratory, GI, CNS pathogens | Hours |
| Targeted PCR | Malaria, dengue, Zika, chikungunya | Hours |
| Sequencing | Resistance, novel pathogens | Days |
| Metagenomic NGS | Unknown etiology | Days-weeks |

**Serological Testing:**
- Acute and convalescent titers (4-fold rise diagnostic)
- Cross-reactivity issues (flaviviruses)
- PRNT for confirmation
- IgM vs IgG timing considerations

**When to Pursue Advanced Workup:**
- Negative initial testing with high suspicion
- Unusual clinical presentation
- Possible novel pathogen
- Public health concerns (clusters, unusual illness)

**Reference Laboratory Network:**
- CDC Division of Global Migration and Quarantine
- State public health laboratories
- WHO Collaborating Centers
- Academic tropical medicine centers

## Clinical Decision-Making Frameworks

**Bayesian Approach to Returned Traveler:**
\`\`\`
Pre-test probability = f(destination, activities, timing, exposures, epidemiology)
Post-test probability = f(pre-test probability, test characteristics)
\`\`\`

**Example: Fever 14 Days After Safari**
- Pre-test probability malaria (East Africa, safari): ~70%
- Negative RDT (sensitivity 95%): Residual probability ~35%
- Negative thick smear (expert read): Probability <5%
- Still consider: Repeat testing, other diagnoses

**Diagnostic Stewardship:**
- Avoid reflexive pan-testing
- Targeted based on epidemiology
- Consider test performance in population
- Cost and yield considerations

## Public Health Notification

**Mandatory Reporting:**

*CDC Nationally Notifiable:*
- Malaria
- Typhoid fever
- Yellow fever
- Viral hemorrhagic fevers
- Cholera
- Plague
- Many others

**Contact Tracing Considerations:**
| Disease | Tracing Scope |
|---------|---------------|
| Measles | All contacts (airplane, waiting areas) |
| TB (active) | Close contacts, flight contacts |
| COVID-19 | Variable by current guidelines |
| Ebola/VHF | All contacts, extensive |

**Notification Process:**
1. Healthcare provider notifies local/state health department
2. State reports to CDC
3. CDC reports to WHO if IHR-reportable
4. Contact tracing initiated as indicated

## Policy and Guidelines Development

**Evidence Synthesis for Recommendations:**
- Systematic reviews
- GRADE methodology
- Expert consensus when evidence limited
- Risk-benefit assessment

**Guideline Updating:**
- Annual CDC Yellow Book revision
- Real-time updates for outbreaks
- WHO recommendations evolution
- Country-specific requirements changes

**Resource Allocation:**
- Vaccine prioritization during shortages
- Antimalarial formulary decisions
- Travel clinic accessibility
- Telehealth for pre-travel counseling

## Research and Future Directions

**Current Research Priorities:**
| Area | Examples |
|------|----------|
| Vaccine development | Pan-coronavirus, universal influenza |
| Prophylaxis | Single-dose malaria prevention |
| Diagnostics | Point-of-care molecular tests |
| Digital health | App-based symptom monitoring |
| Behavior | Effective risk communication |

**Climate Change Implications:**
- Geographic range expansion of vectors
- New endemic areas for malaria, dengue
- Heat-related illness risks
- Altered disease seasonality

**Emerging Technologies:**
- Wearable biosensors
- Blockchain for health records
- AI for risk prediction
- Telemedicine for remote support

## Quality Metrics in Travel Medicine

**Pre-Travel Consultation Quality:**
| Metric | Target |
|--------|--------|
| Appropriate vaccinations given | >95% |
| Malaria prophylaxis accuracy | 100% |
| Complete risk counseling | >90% |
| Documentation complete | 100% |

**Outcome Measures:**
| Outcome | Measure |
|---------|---------|
| Vaccine-preventable illness | Rate per 10,000 travelers |
| Malaria in travelers | Breakthrough rates |
| Traveler satisfaction | Survey scores |
| Adverse events | Vaccination reactions |

**Program Development:**
- Credentialing standards (ISTM Certificate)
- Practice guidelines adherence
- Peer review processes
- Continuing education requirements`,
      keyTerms: [
        { term: 'PHEIC', definition: 'Public Health Emergency of International Concern; WHO declaration triggering international response' },
        { term: 'PRNT', definition: 'Plaque Reduction Neutralization Test; gold standard confirmatory test for flavivirus infections' },
        { term: 'IHR 2005', definition: 'International Health Regulations; legally binding WHO framework for public health security' },
        { term: 'metagenomic NGS', definition: 'Unbiased next-generation sequencing to identify unknown pathogens' },
        { term: 'ISTM', definition: 'International Society of Travel Medicine; professional organization providing certification' },
      ],
      clinicalNotes: `Expert Practice Points:
1. Real-time surveillance integration is essential for outbreak response and traveler advisories
2. Bayesian diagnostic reasoning prevents both over- and under-testing
3. Public health notification is a professional and legal obligation for reportable diseases
4. Climate change is actively altering travel medicine risk assessments
5. Quality metrics drive improvement but require standardized data collection
6. Advanced molecular diagnostics have transformed post-travel illness evaluation
7. International collaboration and IHR compliance are fundamental to global health security`,
    },
  },

  media: [
    {
      id: 'pre-travel-checklist',
      type: 'diagram',
      filename: 'pre-travel-checklist.svg',
      title: 'Pre-Travel Health Checklist',
      description: 'Visual checklist for travel health preparation',
    },
    {
      id: 'travel-risk-map',
      type: 'diagram',
      filename: 'travel-risk-map.svg',
      title: 'Global Travel Health Risk Map',
      description: 'Geographic distribution of common travel health risks',
    },
  ],

  citations: [
    {
      id: 'cdc-yellow-book',
      type: 'website',
      title: 'CDC Yellow Book: Health Information for International Travel',
      source: 'Centers for Disease Control and Prevention',
      url: 'https://wwwnc.cdc.gov/travel/page/yellowbook-home',
    },
    {
      id: 'who-travel-health',
      type: 'website',
      title: 'International Travel and Health',
      source: 'World Health Organization',
      url: 'https://www.who.int/travel-advice',
    },
  ],

  crossReferences: [
    { targetId: 'travel-vaccinations', targetType: 'concept', relationship: 'child', label: 'Travel Vaccinations' },
    { targetId: 'travel-altitude-sickness', targetType: 'concept', relationship: 'related', label: 'Altitude Sickness' },
    { targetId: 'infectious-disease-tropical', targetType: 'concept', relationship: 'related', label: 'Tropical Infectious Diseases' },
  ],

  tags: {
    systems: ['general', 'infectious-disease'],
    topics: ['travel-medicine', 'preventive-care', 'global-health'],
    keywords: ['travel health', 'pre-travel', 'vaccination', 'malaria', 'traveler diarrhea'],
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

export default travelHealthOverview;
