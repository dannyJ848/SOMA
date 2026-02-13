/**
 * Travel Vaccines
 *
 * Comprehensive education on vaccines for international travel
 * based on CDC and WHO guidelines.
 */

import { EducationalContent } from '../../types';

export const TRAVEL_VACCINES: EducationalContent = {
  id: 'concept-travel-vaccines',
  type: 'concept',
  name: 'Travel Vaccines',
  alternateNames: ['Travel immunizations', 'Vaccination for international travel', 'Pre-travel vaccines'],

  levels: {
    1: {
      level: 1,
      summary: 'Traveling to some countries may require or recommend vaccines to protect you from diseases not common in the US.',
      explanation: `When you travel to certain parts of the world, you may be exposed to diseases that are rare or absent in your home country. Travel vaccines help protect you.

**Types of Travel Vaccines:**

**Required Vaccines:**
- **Yellow fever**: Required for entry to some countries in Africa and South America
- **Meningococcal**: Required for Hajj pilgrimage to Saudi Arabia

**Commonly Recommended:**
- **Hepatitis A**: Contaminated food/water (most destinations)
- **Typhoid**: Contaminated food/water (South Asia, other areas)
- **Hepatitis B**: Blood/body fluid exposure
- **Rabies**: Animal bites (remote travel, animal work)

**When to Get Vaccinated:**
- Ideally 4-6 weeks before travel
- Some vaccines need multiple doses
- Some take time to provide protection
- Last-minute travelers can still benefit

**Where to Get Travel Vaccines:**
- Travel clinic
- Some primary care offices
- Health departments
- Some pharmacies

**Plan Ahead:**
- Check CDC Travelers' Health website
- See a travel health provider
- Get vaccines early enough
- Carry vaccination record (especially yellow fever)`,
      keyTerms: [
        { term: 'endemic', definition: 'A disease that is regularly found in a certain area' },
        { term: 'yellow fever', definition: 'A serious viral disease spread by mosquitoes in parts of Africa and South America' },
        { term: 'typhoid', definition: 'A bacterial infection from contaminated food or water' },
      ],
      analogies: [
        'Travel vaccines are like packing the right clothes for your trip - you need different protection for different destinations.',
      ],
      examples: [
        'Before her trip to Kenya, Sarah visited a travel clinic and got yellow fever and hepatitis A vaccines, plus malaria pills.',
      ],
    },
    2: {
      level: 2,
      summary: 'Pre-travel health consultation assesses destination-specific risks and recommends required vaccines, routine vaccine updates, and destination-specific immunizations based on itinerary, activities, and traveler health status.',
      explanation: `Travel medicine consultations should occur 4-6 weeks before departure to allow time for vaccine series and immunity development.

**Categories of Travel Vaccines:**

**1. Required (Entry Requirements):**
- Yellow fever: Required by some countries
- Meningococcal: Required for Hajj/Umrah
- Polio: Required for some countries if outbreak

**2. Routine (Update if Needed):**
- MMR
- Tdap/Td
- Varicella
- Influenza
- COVID-19
- Pneumococcal (if indicated)

**3. Recommended (Based on Destination):**

| Vaccine | Key Destinations | Notes |
|---------|------------------|-------|
| Hepatitis A | Most developing countries | All travelers |
| Typhoid | South Asia, Africa, Latin America | Food handlers, adventurous eaters |
| Hepatitis B | All countries | Blood exposure risk |
| Rabies | Asia, Africa, Latin America | Remote areas, animal contact |
| Japanese encephalitis | Asia | Rural areas, prolonged stay |
| Yellow fever | Africa, South America | Required and recommended zones |
| Meningococcal | Sub-Saharan Africa (meningitis belt) | Dry season travel |
| Cholera | Areas with outbreaks | Rarely needed |
| Polio | Endemic/outbreak areas | Booster if previously vaccinated |

**Yellow Fever Vaccine:**
- Live attenuated vaccine
- Single dose provides lifetime protection
- International Certificate required
- Give at designated Yellow Fever Vaccination Center
- Contraindicated: Immunocompromised, infants <6 months

**Rabies Pre-Exposure Prophylaxis:**
- 2 doses (days 0, 7) for pre-exposure
- Recommended for: Remote travel, animal work, spelunking
- Simplifies post-exposure management
- Still need post-exposure vaccines (but fewer)

**Japanese Encephalitis:**
- 2 doses, 28 days apart
- For travelers spending ≥1 month in endemic rural areas
- Consider for shorter trips if extensive outdoor exposure

**Malaria:**
- Not a vaccine (chemoprophylaxis)
- Antimalarial medications based on destination
- Mosquito avoidance measures essential`,
      keyTerms: [
        { term: 'pre-exposure prophylaxis', definition: 'Vaccination before potential exposure to a disease' },
        { term: 'International Certificate of Vaccination', definition: 'Official document proving yellow fever vaccination required by some countries' },
        { term: 'Japanese encephalitis', definition: 'Mosquito-borne viral brain infection found in rural Asia' },
        { term: 'meningitis belt', definition: 'Sub-Saharan African region with high rates of meningococcal disease' },
      ],
      analogies: [
        'The meningitis belt in Africa is like a geographic zone where the risk of disease is highest, similar to tornado alley for severe weather.',
      ],
    },
    3: {
      level: 3,
      summary: 'Travel vaccine recommendations integrate disease epidemiology, vaccine characteristics, traveler risk factors, and destination-specific requirements, with attention to special populations including immunocompromised travelers and pregnant women.',
      explanation: `**Pre-Travel Risk Assessment:**

*Factors to Consider:*
- Destination(s)
- Duration of travel
- Type of travel (urban vs rural, adventure vs resort)
- Accommodations (hotels vs hostels vs camping)
- Activities planned
- Traveler's medical history
- Current medications
- Allergies
- Pregnancy status

**Yellow Fever:**

*Required vs Recommended:*
- Required: Country requires certificate for entry
- Recommended: CDC recommends for protection
- May be both, one, or neither depending on country

*Vaccine Characteristics:*
- Live attenuated (17D strain)
- Single dose provides lifetime immunity (WHO 2016)
- Booster no longer routinely recommended
- Give at least 10 days before travel

*Contraindications:*
- Age <6 months (absolute)
- Severe immunodeficiency
- Thymus disorder history
- Severe egg allergy

*Precautions:*
- Age 6-8 months
- Age ≥60 (increased viscerotropic disease risk)
- HIV with CD4 200-499
- Pregnancy
- Breastfeeding

*Medical Waiver:*
- Document on ICV if contraindicated
- Country may accept or not

**Rabies:**

*Pre-Exposure Prophylaxis (PrEP):*
- 2 doses: Days 0, 7
- Provides "priming" for post-exposure response
- Still need PEP vaccines if exposed
- No need for RIG if PrEP completed

*Who Should Receive:*
- Travelers to rabies-endemic areas with:
  - Prolonged stay (>30 days)
  - Limited medical access
  - Animal contact planned
  - Adventure activities (caving, hiking)
- Occupational risk (veterinarians, wildlife workers)

*Post-Exposure After PrEP:*
- 2 doses (days 0, 3)
- No RIG needed

**Typhoid:**

*Vaccine Options:*
- Vi polysaccharide (injection): Single dose, 2 years protection
- Ty21a (oral): 4 doses, 5 years protection

*Indications:*
- Travel to South Asia (highest risk)
- Other developing countries with risk
- Longer stays, adventurous eating

*Limitations:*
- 50-80% effective
- Does not replace food/water precautions

**Japanese Encephalitis:**

*Vaccine (Ixiaro):*
- Inactivated, 2-dose series (days 0, 28)
- Booster at 1 year if ongoing risk

*Indications:*
- ≥1 month in endemic rural Asia during transmission season
- Shorter if extensive outdoor exposure
- Repeated travel

*Contraindications:*
- Severe allergic reaction to prior dose

**Special Populations:**

*Pregnant Travelers:*
- Avoid live vaccines (yellow fever, oral typhoid)
- Yellow fever if travel unavoidable and risk high: May consider (consult specialist)
- Hepatitis A, B: Safe
- Rabies PrEP: If indicated, can give

*Immunocompromised:*
- Avoid live vaccines (yellow fever, oral typhoid)
- Consider IVIG for hepatitis A instead of vaccine
- Rabies: May have reduced response
- Consult specialist for individual recommendations`,
      keyTerms: [
        { term: 'viscerotropic disease', definition: 'Severe systemic yellow fever vaccine adverse event mimicking wild-type infection' },
        { term: 'RIG', definition: 'Rabies immunoglobulin; passive antibodies given for post-exposure prophylaxis' },
        { term: 'Ixiaro', definition: 'Inactivated Japanese encephalitis vaccine for travelers' },
        { term: 'Ty21a', definition: 'Live attenuated oral typhoid vaccine' },
      ],
      clinicalNotes: 'Yellow fever vaccine only at certified centers. Document medical exemptions on ICV. Rabies PrEP simplifies post-exposure management in resource-limited settings. Typhoid vaccines do not replace food/water precautions.',
    },
    4: {
      level: 4,
      summary: 'Advanced travel medicine integrates real-time disease surveillance, emerging outbreak response, complex itinerary management, and individualized risk-benefit assessment for high-risk travelers including the immunocompromised and those with chronic conditions.',
      explanation: `**Real-Time Risk Assessment:**

*Information Sources:*
- CDC Yellow Book (biennial, authoritative)
- CDC Travelers' Health website (real-time updates)
- WHO Disease Outbreak News
- ProMED-mail (early outbreak detection)
- GIDEON (epidemiology database)

*Dynamic Risk:*
- Outbreaks change recommendations
- Recent examples: Yellow fever (Brazil), Ebola (DRC), COVID-19
- Polio outbreak response vaccination

**Complex Itinerary Management:**

*Multi-Country Travel:*
- Assess each destination
- Consider transit countries (yellow fever certificate)
- Cumulative risk for endemic diseases

*Expedition/Adventure Travel:*
- Extended time in remote areas
- Limited medical access
- Higher rabies, JE, and tick-borne disease risk
- Consider comprehensive coverage

*Frequent/Repeat Travelers:*
- Long-term protection strategies
- Booster schedules
- Cost-effectiveness considerations

**Emerging Infections:**

*Recent Additions/Changes:*
- Cholera vaccine (Vaxchora): Single-dose, short-term protection
- Japanese encephalitis: Expanded geographic recommendations
- Zika: No vaccine; behavioral prevention only
- Dengue: Limited use (Dengvaxia for seropositive only)

*Pipeline Vaccines:*
- Chikungunya: Recently approved
- Malaria (RTS,S/AS01): For children in endemic areas
- Lyme: In development

**Immunocompromised Travelers:**

*Pre-Travel Considerations:*
- Timing relative to immunosuppression
- Vaccine response may be reduced
- Avoid live vaccines in most cases

*HIV:*
- Yellow fever if CD4 ≥200
- Japanese encephalitis, rabies: Can give
- Hepatitis A/B: May need higher doses

*Solid Organ Transplant:*
- Vaccinate before transplant if possible
- Post-transplant: Inactivated vaccines only
- Response may be blunted

*Biologics/Immunosuppressants:*
- Consult product labeling
- Ideally vaccinate before starting
- Live vaccines: Variable waiting periods after discontinuation

**VFR Travelers:**

*Visiting Friends and Relatives:*
- Often overlooked population
- May not perceive risk ("I've been before")
- Longer stays, closer local contact
- Higher disease rates than tourists

*Special Counseling:*
- Hepatitis A, typhoid still relevant
- Malaria prophylaxis important
- Food/water precautions

**Travel Health Kits:**

*Contents:*
- Routine medications
- Malaria prophylaxis (if needed)
- Traveler's diarrhea treatment
- Motion sickness medication
- First aid supplies
- Hand sanitizer
- Insect repellent (DEET)
- Sunscreen

**Post-Travel Screening:**

*When to Evaluate:*
- Fever within 3 months of travel (malaria!)
- Persistent GI symptoms
- Skin lesions
- Any concerning symptoms

*Tropical Medicine Consultation:*
- Unexplained fever
- Prolonged illness
- Unusual exposures`,
      keyTerms: [
        { term: 'VFR', definition: 'Visiting friends and relatives; high-risk travel population often overlooked' },
        { term: 'GIDEON', definition: 'Global Infectious Disease and Epidemiology Network; comprehensive disease database' },
        { term: 'Vaxchora', definition: 'Single-dose oral cholera vaccine for travelers' },
        { term: 'Yellow Book', definition: 'CDC Health Information for International Travel; authoritative travel medicine reference' },
      ],
      clinicalNotes: 'Check real-time outbreak updates before consultation. VFR travelers are high-risk but often underserved. Yellow fever vaccine adverse events increase with age >60. Document all vaccines in permanent record.',
    },
    5: {
      level: 5,
      summary: 'Comprehensive travel medicine integrates global disease surveillance, vaccine immunology, emerging pathogen preparedness, and health equity considerations while navigating the complexities of last-minute travel, complex medical conditions, and mass gathering events.',
      explanation: `**Global Disease Surveillance:**

*Systems:*
- WHO Global Health Observatory
- IHR (International Health Regulations)
- HealthMap (algorithmic surveillance)
- GPHIN (Global Public Health Intelligence Network)
- ProMED-mail

*Response Pathways:*
- PHEIC declaration (Public Health Emergency of International Concern)
- Temporary recommendations
- Travel advisories

**Mass Gathering Events:**

*Hajj/Umrah:*
- Meningococcal ACWY required
- Polio booster may be required
- Influenza, COVID-19 recommended
- Saudi requirements updated annually

*Olympics, World Cup, Large Festivals:*
- Assess local disease risks
- Crowding increases respiratory disease transmission
- Pre-event vaccination campaigns

**Vaccine Immunology for Travelers:**

*Timing Considerations:*
- Most vaccines: Protection within 2 weeks
- Yellow fever: 10 days for certificate validity
- Rabies PrEP: 7 days after second dose
- Japanese encephalitis: 1 week after second dose

*Duration of Protection:*
| Vaccine | Duration |
|---------|----------|
| Yellow fever | Lifetime |
| Hepatitis A | Lifelong (2 doses) |
| Hepatitis B | Lifelong (3 doses) |
| Typhoid Vi | 2 years |
| Typhoid Ty21a | 5 years |
| Meningococcal ACWY | 5 years |
| Japanese encephalitis | Unknown (booster at 1 year if ongoing risk) |
| Rabies | Lifelong priming (may need boosters for occupational) |

**Emerging Pathogens:**

*Arboviruses:*
- Dengue: Dengvaxia for seropositive only (test first)
- Zika: No vaccine, behavioral prevention
- Chikungunya: Vaccine recently approved (Ixchiq)

*Hemorrhagic Fevers:*
- Ebola: Ervebo for outbreak response
- No vaccines for Lassa, Marburg (in development)

*Novel Respiratory:*
- COVID-19: Ongoing adaptation
- Influenza pandemic preparedness
- MERS: Research vaccines

**High-Risk Medical Travelers:**

*Transplant Candidates Awaiting Abroad:*
- Pre-travel immunization completion
- Destination-specific risks
- Medical coordination

*Medical Tourism:*
- Procedure-specific risks
- Post-operative infection prevention
- Follow-up care planning

*Healthcare Workers Abroad:*
- Occupational vaccines
- Hepatitis B mandatory
- Rabies for endemic areas

**Research and Trials:**

*Vaccine Development:*
- Phase 3 trials increasingly global
- Travel vaccine pipeline active
- Challenges: Small market, high development costs

*Emerging Technologies:*
- Thermostable formulations
- Needle-free delivery
- Combination travel vaccines

**Health Equity in Travel Medicine:**

*Access Issues:*
- Travel vaccines often not covered by insurance
- Cost barrier for comprehensive coverage
- Limited specialized clinics in rural areas

*Global North-South:*
- Diseases of travelers vs diseases of residents
- Vaccine availability disparities
- Research priorities

**Last-Minute Travelers:**

*Accelerated Schedules:*
- Hepatitis A: Single dose provides rapid protection
- Hepatitis B: 0, 7, 21 days + 12 months (accelerated)
- Rabies: Days 0, 7 (minimum)
- Japanese encephalitis: Accelerated 0, 7 days approved

*Same-Day Departure:*
- Still valuable to vaccinate
- Hepatitis A protective very quickly
- Provide standby antibiotics for diarrhea
- Malaria prophylaxis
- Counseling on avoidance measures

**Documentation:**

*International Certificate of Vaccination (ICV):*
- Yellow fever (required)
- Polio (some countries)
- COVID-19 (varies)
- Must be complete, legible, stamped

*Electronic Records:*
- SMART Health Cards
- ICVP digital transformation
- Interoperability challenges`,
      keyTerms: [
        { term: 'PHEIC', definition: 'Public Health Emergency of International Concern; WHO declaration triggering international response' },
        { term: 'IHR', definition: 'International Health Regulations; binding legal framework for health event notification' },
        { term: 'Ervebo', definition: 'Ebola vaccine (rVSV-ZEBOV) for outbreak response' },
        { term: 'SMART Health Cards', definition: 'Digital vaccination records using verifiable credentials' },
      ],
      clinicalNotes: `**Clinical Excellence:**
- Consult CDC Yellow Book and real-time updates
- Document all vaccines in ICV and medical record
- VFR travelers need same recommendations as tourists
- Last-minute travelers still benefit from vaccination
- Yellow fever only at certified centers
- Age >60 requires careful yellow fever risk-benefit assessment
- Rabies PrEP simplifies post-exposure management abroad
- Consider accelerated schedules when needed
- Stay current: Outbreak updates change recommendations
- Refer complex cases to travel medicine specialist`,
    },
  },

  media: [
    {
      id: 'travel-vaccine-map',
      type: 'diagram',
      filename: 'travel-vaccine-world-map.svg',
      title: 'Travel Vaccine Recommendations by Region',
      description: 'World map showing vaccine recommendations by geographic region',
    },
  ],

  citations: [
    {
      id: 'cdc-yellow-book',
      type: 'website',
      title: 'CDC Yellow Book: Health Information for International Travel',
      source: 'Centers for Disease Control and Prevention',
      url: 'https://wwwnc.cdc.gov/travel/yellowbook/2024/table-of-contents',
      accessedDate: '2025-01-24',
    },
  ],

  crossReferences: [
    { targetId: 'concept-adult-vaccine-schedule', targetType: 'concept', relationship: 'related', label: 'Adult Vaccine Schedule' },
  ],

  tags: {
    systems: ['immune'],
    topics: ['preventive medicine', 'travel medicine', 'vaccination'],
    keywords: ['travel vaccines', 'yellow fever', 'typhoid', 'rabies', 'international travel'],
    clinicalRelevance: 'high',
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
