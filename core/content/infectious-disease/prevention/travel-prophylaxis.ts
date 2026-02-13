import { EducationalContent } from '../../types';

export const travelProphylaxis: EducationalContent = {
  id: 'infectious-disease-travel-prophylaxis',
  type: 'concept',
  name: 'Travel Medicine and Prophylaxis',
  alternateNames: ['Travel Health', 'Pre-Travel Consultation', 'Travel Vaccines'],

  levels: {
    1: {
      level: 1,
      summary: 'Travel prophylaxis means taking steps before and during travel to prevent getting sick from diseases common in other parts of the world.',
      explanation: `When people travel to other countries, they may encounter diseases that are rare or do not exist at home. Travel prophylaxis includes vaccines, medicines, and behaviors to stay healthy while abroad.

**Before Travel:**

1. **See a Doctor 4-6 Weeks Before**
   - Check routine vaccines are up to date
   - Get destination-specific vaccines
   - Get prescriptions for preventive medicines

2. **Common Travel Vaccines**
   - Hepatitis A and B
   - Typhoid fever
   - Yellow fever (required for some countries)
   - Japanese encephalitis
   - Rabies (for long stays in rural areas)

3. **Malaria Prevention**
   - Take pills before, during, and after trip
   - Sleep under mosquito nets
   - Use insect repellent
   - Wear long sleeves and pants

**During Travel:**

1. **Food and Water Safety**
   - Drink only bottled or purified water
   - Avoid ice cubes
   - Eat only cooked, hot foods
   - Avoid raw vegetables and unpeeled fruits
   - "Boil it, cook it, peel it, or forget it"

2. **Insect Protection**
   - Use DEET insect repellent
   - Wear long sleeves and pants
   - Sleep in air-conditioned or screened rooms
   - Use bed nets if needed

3. **Sun and Heat Protection**
   - Stay hydrated
   - Use sunscreen
   - Take breaks from heat

**After Travel:**
- Watch for symptoms for up to 3 months
- See doctor if you develop fever, diarrhea, or rash
- Tell doctor where you traveled`,
      keyTerms: [
        { term: 'prophylaxis', definition: 'Prevention of disease' },
        { term: 'malaria', definition: 'Serious disease spread by mosquitoes in tropical areas' },
        { term: 'typhoid', definition: 'Bacterial infection from contaminated food and water' },
        { term: 'hepatitis', definition: 'Liver infection caused by different viruses' },
      ],
      analogies: [
        'Travel prophylaxis is like packing an umbrella and raincoat before a trip to a rainy place - you prepare for conditions you expect to encounter.',
        'Think of vaccines as giving your immune system a map of enemies it might meet on your journey.',
      ],
      examples: [
        'A traveler to Africa takes malaria pills and gets yellow fever vaccine.',
        'A backpacker in Southeast Asia drinks only bottled water to avoid diarrhea.',
        'A missionary worker gets rabies vaccine before living in a rural village.',
      ],
    },
    2: {
      level: 2,
      summary: 'Pre-travel consultation assesses individual risk factors and destination-specific disease threats to provide personalized recommendations for vaccines, malaria chemoprophylaxis, and behavioral preventive measures.',
      explanation: `Travel medicine is a specialized field focused on preventing travel-related illness through pre-travel risk assessment, preventive interventions, and post-travel care for returned travelers.

**Pre-Travel Risk Assessment:**

*Destination Factors:*
- Geographic region and country-specific risks
- Urban vs rural itinerary
- Duration of stay
- Season and climate
- Altitude
- Current disease outbreaks

*Traveler Factors:*
- Age and underlying medical conditions
- Pregnancy or breastfeeding
- Immune status
- Previous vaccinations
- Purpose of travel (tourism, business, VFR, missionary)
- Accommodation type (luxury hotels vs. rural homestays)
- Adventure activities planned

*VFR (Visiting Friends and Relatives) Travelers:*
- Higher risk profile than tourists
- Longer stays
- Rural destinations
- Often underestimate risk
- Lower vaccination rates despite familiarity

**Routine Vaccines to Update:**
- Measles-mumps-rubella (MMR)
- Diphtheria-tetanus-pertussis (Tdap)
- Influenza (seasonal)
- Polio
- COVID-19

**Travel-Specific Vaccines:**

*Required (International Health Regulations):*
- Yellow fever (certain countries)
- Meningococcal (Hajj pilgrimage)

*Recommended:*
- Hepatitis A (most travelers)
- Typhoid (South Asia, sub-Saharan Africa)
- Hepatitis B (long-term, medical, adventure travel)
- Japanese encephalitis (rural Asia)
- Rabies (long-term, remote areas)
- Cholera (humanitarian workers)

**Malaria Chemoprophylaxis:**

*Risk Assessment:*
- Country-specific risk
- Urban vs rural
- Season
- Duration

*Medication Options:*
- Atovaquone-proguanil (Malarone): Daily, start 1-2 days before, continue 7 days after
- Doxycycline: Daily, start 1-2 days before, continue 4 weeks after
- Mefloquine: Weekly, start 2 weeks before, continue 4 weeks after
- Tafenoquine: Weekly (long-acting, single post-trip dose)
- Chloroquine: Limited use due to resistance

*Mosquito Avoidance:*
- DEET 20-50% or picaridin 20%
- Permethrin-treated clothing
- Screened/air-conditioned accommodations
- Bed nets (insecticide-treated)
- Peak biting times (dusk to dawn for malaria)

**Travelers Diarrhea Prevention:**
- Food and water precautions
- Bismuth subsalicylate (Pepto-Bismol) prophylaxis (limited use)
- Rifaximin prophylaxis (short-term, high-risk)
- Treatment kit for self-management`,
      keyTerms: [
        { term: 'chemoprophylaxis', definition: 'Using medication to prevent disease' },
        { term: 'VFR', definition: 'Visiting friends and relatives' },
        { term: 'DEET', definition: 'N,N-diethyl-meta-toluamide - insect repellent' },
        { term: 'permethrin', definition: 'Insecticide for treating clothing and bed nets' },
        { term: 'ribavirin', definition: 'Antiviral medication (not commonly used)' },
      ],
      analogies: [
        'Malaria prophylaxis is like wearing armor - the medicine protects your blood while mosquito avoidance keeps the enemy away.',
      ],
      examples: [
        'A business traveler to urban India needs hepatitis A vaccine but not Japanese encephalitis.',
        'A backpacker trekking in rural Amazon needs yellow fever vaccine and malaria pills.',
        'A pregnant traveler to Africa should avoid mefloquine and doxycycline - atovaquone-proguanil preferred.',
      ],
    },
    3: {
      level: 3,
      summary: 'Travel medicine integrates epidemiology, pharmacology, and preventive medicine to address complex scenarios including high-altitude illness, diving medicine, and special populations with comprehensive pre-travel preparation and post-travel evaluation.',
      explanation: `Comprehensive travel medicine addresses diverse health risks beyond infectious diseases, including environmental hazards, altitude-related illness, and specific considerations for travelers with underlying medical conditions.

**Altitude Illness:**

*Acute Mountain Sickness (AMS):*
- Headache plus nausea, fatigue, dizziness, sleep disturbance
- Occurs >2500m (8200ft), risk increases with altitude
- Prevention: Gradual ascent, rest days
- Treatment: Descent, acetazolamide, dexamethasone, ibuprofen

*High-Altitude Cerebral Edema (HACE):*
- Altered mental status, ataxia
- Life-threatening
- Immediate descent essential
- Dexamethasone, supplemental oxygen

*High-Altitude Pulmonary Edema (HAPE):*
- Dyspnea at rest, cough, decreased exercise tolerance
- Life-threatening
- Immediate descent, nifedipine, supplemental oxygen
- Tadalafil or dexamethasone for prevention in high-risk

**Environmental Hazards:**

*Heat-Related Illness:*
- Heat exhaustion: Heavy sweating, weakness, nausea
- Heat stroke: Altered mental status, hot dry skin - emergency
- Prevention: Hydration, electrolytes, acclimatization

*Sun Exposure:*
- UV index awareness
- Sunscreen SPF 30+
- Protective clothing
- Photoprotection for photosensitizing medications

*Marine Hazards:*
- Jellyfish stings (vinegar for box jellyfish)
- Coral cuts (infection risk)
- Sea urchin injuries
- Decompression illness (diving)

**Medical Tourism:**

*Risks:*
- Variable quality standards
- Antibiotic-resistant infections
- Blood supply safety
- Continuity of care
- Legal recourse challenges

*Counseling Points:*
- Research facility credentials
- Plan for complications
- Ensure follow-up care
- Documentation of procedures

**Special Populations:**

*Pregnant Travelers:*
- Avoid live vaccines
- Malaria more severe in pregnancy
- Zika risk assessment
- Air travel generally safe until 36 weeks
- thrombosis prophylaxis for long flights

*Pediatric Travelers:*
- Vaccine schedules may need acceleration
- Malaria prophylaxis options limited
- Dehydration risk with diarrhea
- Car seat safety abroad

*Immunocompromised:*
- Avoid live vaccines (give before immunosuppression if possible)
- Increased infection risk
- Reduced vaccine response
- Avoid raw foods strictly

*Diabetic Travelers:*
- Time zone insulin adjustments
- Sick day rules
- Supplies and backup
- Glucose monitoring supplies availability

**Travelers Diarrhea Management:**
- Oral rehydration essential
- Loperamide for symptom control (avoid if bloody diarrhea)
- Azithromycin preferred antibiotic (single dose 1000mg or 500mg daily 3 days)
- Rifaximin for non-invasive diarrhea
- Seek care if: bloody stools, high fever, severe dehydration, >3-4 days

**Vector-Borne Diseases Beyond Malaria:**
- Dengue: Daytime biting Aedes mosquitoes, no prophylaxis
- Zika: Congenital concerns, sexual transmission
- Chikungunya: Severe arthritis
- Japanese encephalitis: Vaccine available
- Yellow fever: Vaccine required/protective`,
      keyTerms: [
        { term: 'AMS', definition: 'Acute mountain sickness' },
        { term: 'HACE', definition: 'High-altitude cerebral edema' },
        { term: 'HAPE', definition: 'High-altitude pulmonary edema' },
        { term: 'acetazolamide', definition: 'Carbonic anhydrase inhibitor for AMS prevention/treatment' },
        { term: 'medical tourism', definition: 'Traveling abroad to receive medical care' },
      ],
    },
    4: {
      level: 4,
      summary: 'Post-travel evaluation addresses the returned traveler with fever, eosinophilia, or persistent symptoms, requiring systematic approach to diagnosing imported infections and recognizing syndromes based on geographic exposures.',
      explanation: `The returned traveler with illness presents diagnostic challenges requiring knowledge of geographic disease distribution, incubation periods, and clinical syndromes to distinguish common self-limited illness from life-threatening infections.

**Approach to Fever in the Returned Traveler:**

*Immediate Life Threats (Rule Out First):*
- Malaria (most common cause of fever)
- Typhoid fever
- Dengue
- Rickettsial diseases
- Meningococcemia
- Viral hemorrhagic fevers

*Diagnostic Workup:*
- Thick and thin blood films (malaria)
- Rapid malaria antigen tests
- Blood cultures (typhoid, rickettsiae)
- CBC with differential (eosinophil count)
- Liver enzymes
- Urinalysis
- Chest X-ray

**Key Syndromes:**

*Fever and Thrombocytopenia:*
- Malaria
- Dengue
- Chikungunya
- Rickettsial diseases
- Leptospirosis

*Fever and Abnormal Liver Tests:*
- Viral hepatitis
- Liver abscess (amoebic, pyogenic)
- Yellow fever
- Leptospirosis

*Fever and CNS Symptoms:*
- Cerebral malaria
- Meningococcal meningitis
- Japanese encephalitis
- Rabies (once symptoms develop, fatal)

*Eosinophilia:*
- Parasitic infections (helminths)
- Strongyloides (important in immunosuppressed)
- Schistosomiasis
- Filariasis
- Loffler syndrome

**Specific Diseases:**

*Malaria:*
- Plasmodium falciparum: Most severe, can be fatal
- Vivax/ovale: Can relapse (hypnozoites)
- Malariae: Nephrotic syndrome
- Knowlesi: Severe disease potential
- Treatment depends on species and resistance patterns

*Typhoid Fever:*
- Salmonella typhi
- Rose spots, relative bradycardia
- Intestinal perforation risk
- Fluoroquinolone resistance common in South Asia
- Azithromycin or ceftriaxone

*Dengue:*
- "Breakbone fever"
- Thrombocytopenia, hemoconcentration
- Warning signs for severe dengue
- Supportive care only (no specific antiviral)

*Rickettsial Diseases:*
- Rocky Mountain spotted fever (Americas)
- African tick bite fever
- Mediterranean spotted fever
- Scrub typhus (Asia-Pacific)
- Doxycycline treatment

*Schistosomiasis:*
- Fresh water exposure in endemic areas
- Katayama fever (acute serum sickness-like)
- Chronic: Hepatosplenic, urinary, CNS
- Praziquantel treatment

*Strongyloides:*
- Can persist for decades
- Hyperinfection with immunosuppression
- Treat before steroids
- Ivermectin preferred

**Post-Exposure Prophylaxis:**
- Rabies: If unvaccinated, needs vaccine + immunoglobulin
- HIV: Occupational or sexual exposure
- Meningococcus: Close contacts
- Hepatitis B: Exposure management

**Long-Term Follow-up:**
- Latent TB testing 8-10 weeks post-return
- Strongyloides screening if eosinophilia or immunosuppression planned
- Schistosomiasis serology if freshwater exposure
- Malaria prophylaxis failure assessment`,
      keyTerms: [
        { term: 'eosinophilia', definition: 'Elevated eosinophil count, suggests parasitic infection' },
        { term: 'imported infection', definition: 'Infection acquired abroad and diagnosed after return' },
        { term: 'hypnozoite', definition: 'Dormant liver stage of malaria causing relapses' },
        { term: 'Katayama fever', definition: 'Acute serum sickness-like reaction to schistosomiasis' },
        { term: 'hyperinfection', definition: 'Massive strongyloides proliferation with immunosuppression' },
      ],
      clinicalNotes: 'Malaria is the most important cause of fever in the returned traveler and must be excluded first. Ask about prophylaxis compliance, exact itinerary, activities, and exposures. Eosinophilia strongly suggests parasitic infection. Consider common domestic infections too - not every fever in a returned traveler is exotic.',
    },
    5: {
      level: 5,
      summary: 'Expert travel medicine encompasses emerging infectious disease threats, mass gathering medicine, expedition and wilderness medical support, and global health security considerations for mobile populations.',
      explanation: `Advanced travel medicine addresses complex scenarios including emerging pathogens, large population movements, extreme environment expeditions, and intersection with global health policy.

**Emerging Infectious Diseases:**

*Zika Virus:*
- Congenital Zika syndrome (microcephaly)
- Sexual transmission persistence
- Guillain-Barre association
- Vaccine development ongoing

*Novel Coronaviruses:*
- MERS-CoV: Camel exposure (Middle East)
- SARS-CoV-2: Global pandemic
- Surveillance at borders
- Travel restrictions and public health measures

*Antimicrobial Resistance Abroad:*
- Healthcare-associated infections with resistant organisms
- Medical tourism risks
- ESBL, CRE acquisition during travel
- Screening and decolonization considerations

**Mass Gatherings:**

*Hajj and Umrah:*
- Meningococcal vaccine requirement
- Respiratory disease transmission
- Heat-related illness
- Crowd-related trauma
- Preparedness planning essential

*Olympics and World Cup:*
- Enhanced surveillance
- Rapid response capabilities
- Coordination with local health systems
- Legacy of improved infrastructure

**Expedition and Wilderness Medicine:**

*Remote Area Considerations:*
- Evacuation planning
- Extended care protocols
- Satellite communication
- Telemedicine support

*Extreme Environments:*
- Cold: Hypothermia, frostbite
- Desert: Heat stroke, dehydration
- Jungle: Tropical diseases, envenomation
- Maritime: Motion sickness, diving medicine

**Global Health Security:**

*International Health Regulations (2005):*
- Reporting requirements
- Points of entry capacities
- National core capacities
- Emergency committees

*Border Health:*
- Entry/exit screening effectiveness
- Quarantine authority and implementation
- Risk communication
- Balancing individual rights vs public health

**Refugee and Migrant Health:**

*Health Assessments:*
- Overseas medical examination (US)
- Vaccination catch-up
- Tuberculosis screening
- Parasite treatment (refugees)

*Ongoing Care:*
- Cultural competence
- Language access
- Mental health (trauma)
- Chronic disease management
- Health literacy

**Research Frontiers:**

*Malaria Prevention:*
- Transmission-blocking vaccines
- Monoclonal antibodies
- Ivermectin for mosquito killing
- Gene drive mosquitoes

*New Vaccines:*
- Schistosomiasis
- Hookworm
- Leishmaniasis
- Dengue (challenges with ADE)

**Climate Change and Travel Medicine:**
- Expanding malaria zones
- Dengue emergence in new areas
- Heat-related illness
- Extreme weather events
- Displacement and migration

**Telemedicine in Travel Medicine:**
- Pre-travel consultations remotely
- Support during travel
- Post-travel follow-up
- Prescription management across borders`,
      keyTerms: [
        { term: 'mass gathering', definition: 'Large organized event with public health implications' },
        { term: 'IHR', definition: 'International Health Regulations (2005)' },
        { term: 'ADE', definition: 'Antibody-dependent enhancement - complication of some vaccines' },
        { term: 'gene drive', definition: 'Genetic technology to spread traits through populations' },
        { term: 'ADE', definition: 'Antibody-dependent enhancement' },
      ],
      clinicalNotes: 'The field of travel medicine continues to evolve with emerging infections, climate change expanding vector ranges, and increasing global mobility. Mass gatherings require specialized preparedness. The COVID-19 pandemic transformed travel medicine practice and highlighted the interconnectedness of global health.',
    },
  },

  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    systems: ['infectious'],
    topics: ['travel-medicine', 'prevention', 'global-health'],
    keywords: ['travel vaccines', 'malaria prophylaxis', 'travelers diarrhea', 'yellow fever'],
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default travelProphylaxis;
