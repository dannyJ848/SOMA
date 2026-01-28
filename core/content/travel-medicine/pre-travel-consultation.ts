import { EducationalContent } from '../types';

export const preTravelConsultation: EducationalContent = {
  id: 'pre-travel-consultation',
  type: 'concept',
  name: 'Pre-Travel Consultation',
  alternateNames: ['Travel Health Assessment', 'Pre-Travel Medical Visit'],

  levels: {
    1: {
      level: 1,
      summary: 'A pre-travel consultation is a visit with a doctor before international travel to get vaccines and advice to stay healthy during your trip.',
      explanation: `Before traveling to another country, it is important to see a healthcare provider who specializes in travel medicine. This visit helps protect you from diseases that are common in other parts of the world.

**When to Schedule:**
- Plan your visit 4-6 weeks before departure
- Some vaccines need multiple doses over time
- Some vaccines take time to become effective

**What Happens During the Visit:**

1. **Health Review**
   - Check your current health status
   - Review your medical history
   - Discuss any chronic conditions
   - List current medications

2. **Trip Planning Discussion**
   - Where you are going (countries and regions)
   - How long you will stay
   - What activities you plan to do
   - Type of accommodations (hotels vs. rural areas)
   - Season of travel

3. **Vaccine Review**
   - Check routine vaccines (tetanus, measles, flu)
   - Determine which travel vaccines you need
   - Administer required and recommended vaccines

4. **Medication Planning**
   - Prescriptions for malaria prevention if needed
   - Medicines for traveler\'s diarrhea
   - Other preventive medications based on destination

**Why It Matters:**
- Prevents serious diseases like yellow fever and typhoid
- Reduces risk of malaria
- Prepares you for health challenges abroad
- Ensures safe travel with chronic conditions`,
      keyTerms: [
        { term: 'travel medicine', definition: 'A medical specialty focused on health issues related to travel' },
        { term: 'vaccine', definition: 'A shot that helps your body fight specific diseases' },
        { term: 'malaria', definition: 'A serious disease spread by mosquitoes in tropical areas' },
        { term: 'prophylaxis', definition: 'Prevention of disease through medication or other measures' },
      ],
      analogies: [
        'A pre-travel consultation is like doing a safety inspection before a long road trip - you check everything to prevent problems on the journey.',
        'Think of travel vaccines like updating your phone\'s security software before connecting to new networks.',
      ],
      examples: [
        'A family traveling to Kenya gets yellow fever vaccine and malaria pills.',
        'A student studying abroad in Thailand receives hepatitis A and typhoid vaccines.',
        'A pregnant traveler discusses safe destinations and vaccines safe during pregnancy.',
      ],
    },
    2: {
      level: 2,
      summary: 'Pre-travel consultation involves comprehensive risk assessment based on destination epidemiology, traveler characteristics, and trip specifics to provide personalized prevention strategies.',
      explanation: `The pre-travel consultation is a systematic evaluation that matches preventive interventions to individual risk profiles. Effective consultation requires understanding destination-specific health threats and traveler-specific vulnerabilities.

**Risk Assessment Framework:**

*Destination Factors:*
- Geographic region and country-specific disease patterns
- Urban vs. rural itinerary (rural areas often have higher infectious disease risk)
- Altitude (risk of altitude illness above 2500m)
- Season (disease transmission varies by season)
- Current disease outbreaks
- Quality of medical care available at destination

*Traveler Factors:*
- Age (elderly and young children have different risks)
- Underlying medical conditions (diabetes, heart disease, immune disorders)
- Pregnancy or breastfeeding status
- Immune status (immunocompromised travelers need special precautions)
- Previous vaccination history
- Medications that interact with travel medicines

*Trip Characteristics:*
- Duration (longer stays increase exposure risk)
- Purpose: tourism, business, visiting friends/relatives (VFR), missionary work, adventure travel
- Accommodation type (luxury hotels vs. rural homestays)
- Planned activities (safaris, trekking, diving, medical work)

**Routine Vaccines to Update:**
- Measles-mumps-rubella (MMR) - especially important as measles outbreaks occur globally
- Diphtheria-tetanus-pertussis (Tdap) - tetanus booster every 10 years
- Influenza - seasonal protection
- Polio - still required for some destinations
- COVID-19 - requirements vary by country
- Pneumococcal - for elderly or high-risk travelers

**Timing Considerations:**
- Yellow fever vaccine: at least 10 days before travel for certificate validity
- Japanese encephalitis: 2-dose series over 28 days
- Hepatitis A: 2-dose series (second dose at 6-12 months)
- Rabies pre-exposure: 2-3 dose series over 3-4 weeks
- Malaria prophylaxis: start 1-2 days to 2 weeks before travel depending on drug`,
      keyTerms: [
        { term: 'VFR travelers', definition: 'Visiting friends and relatives - travelers returning to their country of origin' },
        { term: 'epidemiology', definition: 'The study of disease patterns in populations' },
        { term: 'chemoprophylaxis', definition: 'Using medication to prevent disease' },
        { term: 'immunocompromised', definition: 'Having a weakened immune system' },
        { term: 'endemic', definition: 'Regularly occurring in a particular geographic area' },
      ],
      analogies: [
        'Risk assessment is like a financial advisor evaluating your portfolio - they analyze multiple factors to create a personalized protection plan.',
      ],
      examples: [
        'A business traveler to urban India needs hepatitis A vaccine but not Japanese encephalitis vaccine due to urban itinerary.',
        'A VFR traveler to Nigeria has higher risk than a tourist because of longer stay and rural family visits.',
        'An immunocompromised traveler cannot receive live vaccines like yellow fever and needs alternative protection strategies.',
      ],
    },
    3: {
      level: 3,
      summary: 'Pre-travel consultation integrates epidemiologic intelligence, pharmacology, and behavioral medicine to address complex scenarios including high-altitude illness, diving medicine, and special populations with underlying conditions.',
      explanation: `Comprehensive pre-travel consultation addresses diverse health risks beyond infectious diseases, including environmental hazards, special activity risks, and complex medical scenarios requiring individualized management.

**Altitude Medicine:**

*Risk Assessment:*
- Destination altitude and sleeping altitude
- Rate of ascent
- Previous altitude illness history
- Individual susceptibility factors

*Prevention Strategies:*
- Gradual ascent (sleep no more than 500m higher per day above 2500m)
- Rest days every 3-4 days or 1000m gained
- Pre-acclimatization strategies
- Medication prophylaxis for high-risk individuals
  - Acetazolamide 125-250mg twice daily (most effective)
  - Dexamethasone for those intolerant to acetazolamide
  - Tadalafil for HAPE prevention in high-risk

*Education Points:*
- Recognition of acute mountain sickness (AMS) symptoms
- When to stop ascent and when to descend
- Never ascend with symptoms of altitude illness

**Diving Medicine:**

*Fitness to Dive Assessment:*
- Cardiovascular fitness
- Pulmonary conditions (asthma, pneumothorax history)
- ENT issues (equalization problems)
- Medications (sedating medications contraindicated)

*Decompression Illness Prevention:*
- Dive tables and computer use
- Safety stops
- Ascent rates
- Surface intervals
- Flying after diving (minimum 18-24 hours)

**Medical Tourism Considerations:**

*Risks:*
- Variable quality standards internationally
- Antibiotic-resistant healthcare-associated infections
- Blood supply safety concerns
- Continuity of care challenges
- Legal recourse limitations

*Counseling Points:*
- Research facility accreditation and credentials
- Plan for complications and extended stay
- Ensure documentation for follow-up care
- Understand travel insurance coverage

**Special Populations:**

*Pregnant Travelers:*
- Generally avoid travel to areas with malaria or Zika risk
- Live vaccines contraindicated (MMR, yellow fever)
- Inactivated vaccines generally safe
- Air travel safe until 36 weeks (earlier for complicated pregnancies)
- Thrombosis prophylaxis for long flights
- Destination medical care quality critical

*Pediatric Travelers:*
- Accelerated vaccine schedules may be possible
- Malaria prophylaxis options limited in infants
- Dehydration risk higher with diarrhea
- Car seat safety may not be available
- Sun protection essential

*Elderly Travelers:*
- Cardiovascular events most common serious problem
- Deep vein thrombosis risk with long flights
- Multiple medications increase interaction risk
- Fall risk in unfamiliar environments
- Travel insurance with medical evacuation essential

*Immunocompromised:*
- Live vaccines generally contraindicated
- Give live vaccines before immunosuppression if possible
- Increased susceptibility to infections
- Reduced vaccine response (may need antibody titers)
- Strict food and water precautions
- Prophylactic antibiotics for some conditions`,
      keyTerms: [
        { term: 'AMS', definition: 'Acute mountain sickness - illness caused by rapid ascent to high altitude' },
        { term: 'HACE', definition: 'High-altitude cerebral edema - life-threatening brain swelling at altitude' },
        { term: 'HAPE', definition: 'High-altitude pulmonary edema - life-threatening lung fluid at altitude' },
        { term: 'acetazolamide', definition: 'Carbonic anhydrase inhibitor used for altitude illness prevention and treatment' },
        { term: 'decompression illness', definition: 'Condition caused by nitrogen bubble formation with rapid pressure change' },
      ],
      examples: [
        'A trekker to Everest Base Camp starts acetazolamide 24 hours before ascent at 2800m.',
        'A cruise passenger with recent DVT requires therapeutic anticoagulation and compression stockings.',
        'A missionary family with an immunocompromised child plans alternative vaccine schedule and strict food precautions.',
      ],
    },
    4: {
      level: 4,
      summary: 'Advanced pre-travel consultation addresses complex medical scenarios, drug interactions, and provides evidence-based recommendations while managing uncertainty in dynamic global health environments.',
      explanation: `Expert-level pre-travel consultation requires integration of multiple clinical disciplines, understanding of pharmacokinetic interactions, and ability to synthesize rapidly evolving epidemiologic data for optimal traveler protection.

**Complex Medical Scenarios:**

*Diabetes Management:*
- Time zone insulin adjustments (eastward vs. westward travel)
- Crossing time zones: move injections toward new schedule gradually
- Insulin pump considerations (time changes, altitude effects)
- Carry double supplies in carry-on luggage
- Sick day rules education
- Glucose monitoring supply availability at destination
- Medical alert identification
- Letter for security explaining supplies

*Cardiovascular Disease:*
- Flight assessment for unstable conditions
- Deep vein thrombosis prophylaxis for long flights
- Medication timing across time zones
- Access to cardiac care at destination
- Altitude restrictions for severe cardiac disease
- Pacemaker/ICD travel considerations (security screening, programming)

*Anticoagulation Management:*
- Warfarin: variable dosing around travel
- DOACs: timing with meals and time zones
- Bridging therapy for high-risk procedures
- Bleeding risk with travel activities
- Access to INR monitoring if on warfarin

*HIV/AIDS:*
- ART adherence across time zones
- Drug interactions with travel medications
- Immune status assessment for live vaccines
- Opportunistic infection prophylaxis
- Destination medical care access

**Pharmacologic Considerations:**

*Drug Interactions:*
- Mefloquine contraindicated with certain psychiatric medications
- Doxycycline interactions with antacids, calcium, warfarin
- Atovaquone-proguanil reduced absorption with metoclopramide
- Rifamycins accelerate metabolism of many drugs
- Chloroquine interacts with amiodarone, increasing QT prolongation risk

*Malaria Prophylaxis Selection:*
| Drug | Advantages | Contraindications/Precautions |
|------|------------|-------------------------------|
| Atovaquone-proguanil | Well-tolerated, short pre/post dosing | High cost, GI upset |
| Doxycycline | Inexpensive, additional STI protection | Photosensitivity, GI upset, contraception |
| Mefloquine | Weekly dosing, long history | Neuropsychiatric side effects, cardiac |
| Tafenoquine | Weekly, single post-trip dose | G6PD deficiency required, costly |
| Chloroquine | Inexpensive, weekly | Widespread resistance, limited use |

**Behavioral Medicine in Travel:**

*Adherence Strategies:*
- Written and verbal instructions
- Pill organizers for complex regimens
- Mobile app reminders
- Addressing health beliefs and misconceptions
- Cultural considerations affecting adherence

*Risk Communication:*
- Balancing concern with realistic risk
- Addressing vaccine hesitancy
- Managing anxiety about travel health risks
- Realistic expectations about protection (no prevention is 100%)

**Documentation:**
- International Certificate of Vaccination (yellow fever)
- Medical letter for medications and supplies
- Emergency contact information
- Travel health summary for traveler\'s records
- Pre-travel consultation note in medical record`,
      keyTerms: [
        { term: 'pharmacokinetics', definition: 'How the body processes medications - absorption, distribution, metabolism, elimination' },
        { term: 'bridging therapy', definition: 'Temporary alternative anticoagulation when stopping usual therapy for procedures' },
        { term: 'G6PD deficiency', definition: 'Glucose-6-phosphate dehydrogenase deficiency - contraindication for certain drugs' },
        { term: 'DOACs', definition: 'Direct oral anticoagulants (apixaban, rivaroxaban, etc.)' },
        { term: 'INR', definition: 'International normalized ratio - measures blood clotting for warfarin monitoring' },
      ],
      clinicalNotes: 'Always document the risk assessment and counseling provided. Travelers retain only a portion of verbal information - written materials are essential. Update routine vaccines before travel-specific vaccines to minimize side effect confusion. Consider that travelers may seek care abroad; providing a summary in English and translated if possible facilitates foreign medical care.',
    },
    5: {
      level: 5,
      summary: 'Expert-level pre-travel consultation integrates emerging research, mass gathering medicine, expedition medical support, and addresses global health security implications of individual travel decisions.',
      explanation: `Specialist-level travel medicine practice addresses frontier areas including emerging infectious disease threats, extreme environment expeditions, and operates at the intersection of individual patient care and global health policy.

**Mass Gathering Medicine:**

*Hajj and Umrah:*
- Meningococcal ACWY vaccine required
- Pneumococcal vaccine recommended
- Influenza vaccine recommended
- Heat-related illness major concern
- Respiratory disease transmission risk
- Crowd-related trauma preparedness
- Pre-departure health screening requirements

*Olympic Games and World Cup:*
- Enhanced surveillance for infectious disease
- Coordination with host country health systems
- Rapid response capabilities
- Legacy health infrastructure improvements
- Long-term surveillance data value

**Expedition and Wilderness Medicine:**

*Remote Area Medical Support:*
- Medical kit contents based on evacuation time
- Extended care protocols when evacuation impossible
- Telemedicine support via satellite communication
- Dental emergency preparedness
- Psychiatric emergency management

*Extreme Environment Considerations:*
- Cold environments: hypothermia, frostbite, snow blindness
- Desert: heat stroke, dehydration, venomous creatures
- Jungle: tropical diseases, envenomation, fungal infections
- Maritime: motion sickness, diving medicine, marine injuries
- Space: radiation, microgravity effects (emerging field)

**Emerging Infectious Disease Preparedness:**

*Dynamic Risk Assessment:*
- Real-time outbreak monitoring (ProMED, HealthMap)
- Rapidly evolving travel recommendations
- Uncertainty communication to travelers
- Border restriction awareness
- Quarantine possibility discussion

*Novel Pathogen Response:*
- COVID-19 transformed travel medicine practice
- MERS-CoV: camel exposure counseling
- Ebola: humanitarian worker preparation
- Zika: reproductive counseling
- Nipah virus: specific geographic risks

**Research Frontiers:**

*Next-Generation Prophylaxis:*
- Monoclonal antibodies for malaria prevention
- Transmission-blocking vaccines
- Ivermectin for mosquito killing (endectocidal)
- Gene drive mosquitoes
- Spatial repellents

*Traveler Behavior Research:*
- Factors affecting adherence to prophylaxis
- Risk perception and decision-making
- Effective health communication strategies
- Post-travel care-seeking behavior

**Climate Change Implications:**
- Expanding malaria and dengue ranges
- Extreme heat events
- Climate refugees and health system strain
- Vector habitat expansion
- Food security and infectious disease

**Telemedicine and Digital Health:**
- Remote pre-travel consultations
- Real-time support during travel
- Post-travel follow-up without office visit
- Prescription management across borders
- AI-assisted risk assessment tools

**Ethics and Policy:**
- Balancing individual autonomy vs. public health
- Resource allocation for travel medicine services
- Health equity in access to travel health
- Medical tourism ethical considerations
- Reporting obligations for notifiable diseases`,
      keyTerms: [
        { term: 'mass gathering', definition: 'Large organized event with defined public health implications' },
        { term: 'endectocidal', definition: 'Killing parasites in the blood that are then transmitted to vectors' },
        { term: 'gene drive', definition: 'Genetic technology to spread traits rapidly through populations' },
        { term: 'transmission-blocking vaccine', definition: 'Vaccine that prevents transmission from human to vector, not just human disease' },
        { term: 'ProMED', definition: 'Program for Monitoring Emerging Diseases - early outbreak reporting system' },
      ],
      clinicalNotes: 'Travel medicine practice requires continuous learning as global disease patterns shift, new vaccines emerge, and geopolitical factors affect travel. Develop relationships with specialists in infectious disease, tropical medicine, and relevant subspecialties for complex cases. Maintain awareness of international health regulations and reporting requirements. Document thoroughly for medicolegal protection given the inherent uncertainties in travel health risk assessment.',
    },
  },

  media: [],
  citations: [
    {
      id: 'cdc-yellow-book-2024',
      type: 'website',
      title: 'CDC Yellow Book 2024',
      source: 'Centers for Disease Control and Prevention',
      url: 'https://wwwnc.cdc.gov/travel/yellowbook/2024/table-of-contents',
      license: 'Public Domain',
    },
  ],
  crossReferences: [
    { targetId: 'travel-vaccines', targetType: 'concept', relationship: 'related', label: 'Travel Vaccines' },
    { targetId: 'travel-related-illnesses', targetType: 'concept', relationship: 'related', label: 'Travel-Related Illnesses' },
  ],
  tags: {
    systems: ['infectious', 'public-health'],
    topics: ['travel-medicine', 'prevention'],
    keywords: ['pre-travel', 'vaccines', 'malaria prophylaxis', 'risk assessment', 'travel health'],
    clinicalRelevance: 'high',
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default preTravelConsultation;
