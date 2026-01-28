import { EducationalContent } from '../types';

export const travelRelatedIllnesses: EducationalContent = {
  id: 'travel-related-illnesses',
  type: 'concept',
  name: 'Travel-Related Illnesses',
  alternateNames: ['Travel Diseases', 'Travelers\' Illnesses', 'Travel Health Risks'],

  levels: {
    1: {
      level: 1,
      summary: 'Travel-related illnesses are diseases that people can get when visiting other countries. The most common are malaria, dengue, and traveler\'s diarrhea.',
      explanation: `When people travel to other countries, especially tropical regions, they may encounter diseases that are rare or do not exist at home. Understanding these illnesses helps travelers take steps to stay healthy.

**Malaria:**
- A serious disease spread by mosquito bites
- Found in tropical parts of Africa, Asia, and South America
- Causes fever, chills, headache, and can be deadly
- Prevention: Take prescribed pills, use mosquito nets and repellent
- No vaccine available (yet)

**Dengue:**
- Spread by mosquitoes during the day
- Found in tropical and subtropical regions worldwide
- Causes high fever, severe headache, muscle and joint pain
- Sometimes called "breakbone fever" because of the pain
- No specific treatment or vaccine for travelers
- Prevention: Mosquito bite avoidance

**Traveler\'s Diarrhea:**
- The most common illness among travelers
- Usually caused by contaminated food or water
- Symptoms: loose stools, stomach cramps, sometimes nausea
- Usually lasts 3-5 days
- Prevention: "Boil it, cook it, peel it, or forget it"
- Treatment: Stay hydrated, sometimes antibiotics

**Other Common Travel Illnesses:**

*Typhoid Fever:*
- From contaminated food and water
- Causes high fever, stomach pain, weakness
- Can be prevented with vaccine

*Hepatitis A:*
- From contaminated food and water
- Causes yellow skin (jaundice), tiredness
- Can be prevented with vaccine

*Chikungunya:*
- Spread by mosquitoes
- Causes fever and severe joint pain
- Found in Africa, Asia, and Americas

**When to Seek Medical Help:**
- High fever after visiting malaria areas
- Bloody diarrhea
- Severe dehydration
- Confusion or severe headache
- Trouble breathing`,
      keyTerms: [
        { term: 'malaria', definition: 'A serious disease spread by mosquitoes that causes fever and chills' },
        { term: 'dengue', definition: 'A disease spread by mosquitoes that causes fever and severe pain' },
        { term: 'traveler\'s diarrhea', definition: 'Loose stools and stomach upset caused by contaminated food or water while traveling' },
        { term: 'typhoid', definition: 'A bacterial infection from contaminated food and water' },
        { term: 'hepatitis A', definition: 'A liver infection spread through contaminated food and water' },
      ],
      analogies: [
        'Travel-related illnesses are like different traps set in different parts of the world - you need to know what to watch out for where you are going.',
        'Think of preventive medicines for malaria like a raincoat - they do not stop the rain (mosquitoes) but keep you dry (protected).',
      ],
      examples: [
        'A traveler to Kenya takes malaria pills and sleeps under a mosquito net to prevent malaria.',
        'A backpacker in Thailand gets traveler\'s diarrhea from eating street food and needs to rest and drink fluids.',
        'A tourist in Brazil uses insect repellent to avoid dengue-carrying mosquitoes.',
      ],
    },
    2: {
      level: 2,
      summary: 'Travel-related illnesses include infectious diseases, environmental hazards, and vector-borne infections. Prevention combines behavioral measures, chemoprophylaxis, and vaccination.',
      explanation: `Travel medicine addresses a broad spectrum of health risks that vary by destination, season, and traveler behavior. Understanding disease transmission mechanisms enables targeted prevention strategies.

**Vector-Borne Diseases:**

*Malaria:*
- Transmitted: Anopheles mosquitoes (dusk to dawn biting)
- Regions: Sub-Saharan Africa (highest risk), South Asia, Amazon basin
- Symptoms: Cyclical fever, chills, headache, anemia
- Severe: Cerebral malaria, severe anemia, respiratory distress
- Prevention: Chemoprophylaxis, insecticide-treated nets, repellents
- Treatment: Artemisinin-based combination therapy (ACT)

*Dengue:*
- Transmitted: Aedes aegypti and Aedes albopictus (daytime biting)
- Regions: Tropical/subtropical worldwide
- Symptoms: Sudden fever, severe headache, retro-orbital pain, myalgia, arthralgia, rash
- Severe: Dengue hemorrhagic fever, shock syndrome
- No chemoprophylaxis; vaccine limited availability
- Prevention: Mosquito avoidance

*Chikungunya:*
- Transmitted: Aedes mosquitoes (daytime)
- Regions: Africa, Asia, Caribbean, Americas
- Symptoms: Fever, debilitating arthralgia (can persist months)
- Prevention: Mosquito avoidance

*Zika:*
- Transmitted: Aedes mosquitoes, sexual transmission
- Regions: Americas, Africa, Asia, Pacific
- Symptoms: Usually mild (fever, rash, conjunctivitis)
- Concerns: Congenital microcephaly, Guillain-Barre syndrome
- Prevention: Mosquito avoidance, condom use

*Japanese Encephalitis:*
- Transmitted: Culex mosquitoes (evening/night)
- Regions: Rural Asia
- Symptoms: Most asymptomatic; severe cases: encephalitis, death
- Prevention: Vaccine available

**Food and Waterborne Diseases:**

*Travelers\' Diarrhea:*
- Pathogens: ETEC (most common), Campylobacter, Salmonella, Shigella, viruses, parasites
- Risk: 20-50% of travelers to high-risk areas
- Prevention: Food/water precautions, bismuth subsalicylate
- Treatment: Oral rehydration, loperamide, antibiotics (azithromycin preferred)

*Typhoid and Paratyphoid:*
- Pathogen: Salmonella typhi/paratyphi
- Transmission: Fecal-oral route
- Symptoms: Sustained fever, relative bradycardia, rose spots, constipation or diarrhea
- Complications: Intestinal perforation, hemorrhage

*Hepatitis A:*
- Transmission: Fecal-oral route
- Symptoms: Jaundice, fatigue, nausea, hepatomegaly
- Prevention: Vaccine highly effective

*Cholera:*
- Pathogen: Vibrio cholerae
- Transmission: Contaminated water
- Symptoms: Profuse "rice water" diarrhea, rapid dehydration
- Prevention: Oral vaccine available (limited use)

**Environmental Hazards:**

*Altitude Illness:*
- Acute Mountain Sickness (AMS): headache, nausea, fatigue
- High-Altitude Cerebral Edema (HACE): confusion, ataxia
- High-Altitude Pulmonary Edema (HAPE): dyspnea, cough
- Prevention: Gradual ascent, acetazolamide

*Heat-Related Illness:*
- Heat exhaustion: heavy sweating, weakness
- Heat stroke: altered mental status, hot dry skin (emergency)

**Other Important Infections:**

*Schistosomiasis:*
- Transmission: Fresh water contact (larvae penetrate skin)
- Regions: Africa, Middle East, South America, Asia
- Acute: Katayama fever (fever, cough, abdominal pain)
- Chronic: Hepatosplenic, urinary, CNS disease

*Strongyloides:*
- Transmission: Soil-transmitted, larvae penetrate skin
- Can persist for decades
- Hyperinfection with immunosuppression (life-threatening)`,
      keyTerms: [
        { term: 'vector', definition: 'An organism that transmits disease (e.g., mosquito, tick)' },
        { term: 'chemoprophylaxis', definition: 'Using medication to prevent disease' },
        { term: 'ETEC', definition: 'Enterotoxigenic Escherichia coli - common cause of traveler\'s diarrhea' },
        { term: 'ACT', definition: 'Artemisinin-based combination therapy - standard malaria treatment' },
        { term: 'fecal-oral route', definition: 'Transmission through ingestion of fecally contaminated material' },
        { term: 'retro-orbital pain', definition: 'Pain behind the eyes' },
      ],
      analogies: [
        'Different mosquitoes are like different delivery services - some work during the day (Aedes for dengue), some at night (Anopheles for malaria).',
        'Traveler\'s diarrhea prevention is like food safety at home but with extra caution - the local bacteria are unfamiliar to your gut.',
      ],
      examples: [
        'A business traveler to urban India gets dengue despite not going to rural areas - urban transmission is common.',
        'A trekker in Nepal develops AMS at 3500m and must descend to prevent progression to HAPE.',
        'A returned traveler from West Africa presents with fever - malaria must be ruled out first.',
      ],
    },
    3: {
      level: 3,
      summary: 'Travel-related illnesses require understanding of disease epidemiology, clinical presentations across incubation periods, and evidence-based management including recognition of severe manifestations requiring urgent care.',
      explanation: `Comprehensive management of travel-related illnesses requires knowledge of geographic disease distribution, incubation periods for diagnostic timing, clinical presentations ranging from self-limited to life-threatening, and appropriate treatment modalities.

**Diagnostic Approach Based on Incubation Period:**

*<10 days:*
- Malaria (can present later)
- Dengue
- Chikungunya
- Typhoid fever
- Travelers\' diarrhea
- Rickettsial diseases
- Viral hemorrhagic fevers

*10 days - 3 weeks:*
- Typhoid
- Hepatitis A
- Acute schistosomiasis (Katayama fever)
- Leptospirosis
- Acute HIV infection

*>3 weeks - months:*
- Tuberculosis
- Malaria (P. malariae)
- Chronic schistosomiasis
- Strongyloides
- Filariasis
- Intestinal parasites

**Detailed Clinical Syndromes:**

*Fever in the Returned Traveler:*
- Malaria is the most important diagnosis to exclude
- Key questions: itinerary, prophylaxis adherence, activities, exposures
- Initial workup: thick/thin smears, rapid antigen test, blood cultures, CBC, LFTs
- Consider: typhoid, dengue, rickettsial diseases, leptospirosis

*Fever and Thrombocytopenia:*
- Differential: malaria, dengue, chikungunya, rickettsiae, leptospirosis
- Dengue: hemoconcentration, transaminitis
- Malaria: hemolysis, parasitemia on smear

*Fever and Elevated Liver Enzymes:*
- Viral hepatitis (A, B, C, E)
- Liver abscess (amoebic, pyogenic)
- Yellow fever
- Leptospirosis
- Relapsing fever

*Fever and Neurological Symptoms:*
- Cerebral malaria
- Meningococcal meningitis
- Japanese encephalitis
- Rabies (once symptomatic, nearly always fatal)
- African trypanosomiasis

*Eosinophilia:*
- Strong indicator of parasitic infection
- Helminth infections most common
- Strongyloides (important in immunosuppressed)
- Schistosomiasis
- Filariasis
- Hookworm
- Loffler syndrome

**Treatment Considerations:**

*Malaria:*
| Species/Region | First-Line Treatment |
|----------------|---------------------|
| Uncomplicated P. falciparum (most regions) | ACT (artemether-lumefantrine, etc.) |
| P. vivax/ovale | Chloroquine (if sensitive) + primaquine |
| Severe malaria | IV artesunate |

*Travelers\' Diarrhea:*
- Mild: Oral rehydration, loperamide, bismuth subsalicylate
- Moderate: Add azithromycin 500mg daily x 3 days or single 1000mg
- Severe/dysentery: Azithromycin preferred (fluoroquinolone resistance common)
- Rifaximin for non-invasive diarrhea

*Typhoid Fever:*
- Fluoroquinolone resistance common in South Asia
- Azithromycin or ceftriaxone preferred empirically
- Treatment duration: 7-14 days
- Monitor for intestinal complications

*Schistosomiasis:*
- Praziquantel 40mg/kg divided doses
- Treat all species
- Follow-up to assess response

*Strongyloides:*
- Ivermectin preferred
- Albendazole alternative
- Treat before immunosuppression

**Zoonotic and Environmental Exposures:**

*Leptospirosis:*
- Fresh water exposure (swimming, rafting)
- Biphasic illness: septicemic then immune phase
- Weil disease: hepatic and renal failure
- Treatment: Doxycycline or penicillin

*Rabies:*
- Post-exposure prophylaxis essential after bite/scratch
- Previously vaccinated: 2 vaccine doses days 0 and 3
- Not previously vaccinated: vaccine + rabies immune globulin
- Wound cleansing critical

*Marine Hazards:*
- Ciguatera: reef fish toxin, hot-cold reversal
- Scombroid: histamine fish poisoning
- Box jellyfish: vinegar first aid
- Sea urchin: heat, remove spines`,
      keyTerms: [
        { term: 'incubation period', definition: 'Time between exposure to pathogen and symptom onset' },
        { term: 'parasitemia', definition: 'Presence of parasites in the blood' },
        { term: 'hemoconcentration', definition: 'Increased concentration of blood cells due to plasma loss' },
        { term: 'ACT', definition: 'Artemisinin-based combination therapy' },
        { term: 'Katayama fever', definition: 'Acute serum sickness-like reaction to schistosomiasis infection' },
        { term: 'zoonotic', definition: 'Disease transmitted from animals to humans' },
      ],
      examples: [
        'A returned traveler from Tanzania presents with fever 10 days after return - malaria smears negative, dengue NS1 positive.',
        'A missionary worker develops fever and abdominal pain 3 weeks after returning from Liberia - schistosomiasis serology positive after freshwater exposure.',
        'A returned traveler with fever, thrombocytopenia, and elevated transaminases - dual infection with malaria and dengue documented.',
      ],
    },
    4: {
      level: 4,
      summary: 'Advanced management of travel-related illnesses involves recognizing complex presentations, drug-resistant infections, co-infections, and life-threatening complications requiring specialized interventions.',
      explanation: `Expert-level diagnosis and management of travel-related illnesses requires recognition of atypical presentations, antimicrobial resistance patterns, complex co-infections, and critical care management of severe disease manifestations.

**Antimicrobial Resistance in Travel Medicine:**

*Malaria Resistance:*
- Chloroquine resistance widespread (except Caribbean, Central America west of Panama)
- Sulfadoxine-pyrimethamine resistance common
- Artemisinin resistance emerging in Southeast Asia
- Delayed parasite clearance with ACTs in resistant areas
- Importance of compliance with prophylaxis

*Typhoid Resistance:*
- Fluoroquinolone resistance >50% in South Asia
- Extensively drug-resistant (XDR) typhoid in Pakistan
- Azithromycin resistance emerging
- Ceftriaxone resistance rare but concerning
- Treatment guided by susceptibility when possible

*Travelers\' Diarrhea Resistance:*
- Fluoroquinolone resistance in Campylobacter (especially Southeast Asia)
- Azithromycin becoming preferred empiric choice
- Extended-spectrum beta-lactamase (ESBL) producers
- Rifaximin non-inferior for non-invasive disease

**Severe and Complicated Malaria:**

*Criteria for Severe Malaria:*
- Impaired consciousness/coma
- Prostration (inability to sit/stand without support)
- Multiple convulsions
- Acidosis
- Hypoglycemia
- Severe anemia
- Renal impairment
- Jaundice
- Pulmonary edema
- Shock
- Significant bleeding
- Hyperparasitemia (>5% or >250,000/uL)

*Management:*
- IV artesunate (superior to quinine)
- Hemodynamic support
- Blood transfusion if severe anemia
- Hemofiltration if renal failure
- Treat hypoglycemia aggressively
- Exchange transfusion for hyperparasitemia (controversial)
- Monitor for delayed hemolysis after artesunate

**Severe Dengue:*

*Warning Signs:*
- Severe abdominal pain
- Persistent vomiting
- Mucosal bleeding
- Lethargy/restlessness
- Hepatomegaly
- Rising hematocrit with falling platelets

*Management:*
- Vigilant fluid management (risk of fluid overload)
- No specific antiviral
- Avoid NSAIDs (bleeding risk)
- Monitor for plasma leakage phase
- ICU care for shock

**Coinfections and Diagnostic Challenges:**

*Malaria and Dengue:*
- Both common in same regions
- Both cause fever and thrombocytopenia
- Both can be severe
- Require different treatments
- Test for both in endemic areas

*Malaria and Typhoid:*
- "Typhomalarial fever" - historical recognition of common co-occurrence
- Both cause sustained fever
- Different treatments required
- Blood cultures essential

*HIV and Travel:*
- Acute retroviral syndrome mimics many travel diseases
- Immune reconstitution inflammatory syndrome (IRIS) after starting ART
- Opportunistic infections in advanced disease
- Drug interactions with travel medications

**Post-Exposure Prophylaxis:**

*Rabies:*
- Wound cleansing: soap and water, povidone-iodine
- Unvaccinated: RIG infiltrated in/around wound + vaccine days 0, 3, 7, 14
- Previously vaccinated: Vaccine days 0 and 3 only (no RIG)
- Critical timing: earlier is better

*HIV:*
- Occupational or sexual exposure
- 3-drug PEP regimen
- Start within 72 hours
- Continue 28 days

*Meningococcus:*
- Close contacts of confirmed case
- Ciprofloxacin, rifampin, or ceftriaxone
- Vaccination for serogroup not covered by previous vaccine

**Long-Term Complications:**

*Post-Acute Sequelae:*
- Post-malaria anemia
- Post-dengue fatigue syndrome
- Persistent arthralgia after chikungunya
- Chronic schistosomiasis complications
- Post-treatment strongyloides concerns

*Screening Recommendations:*
- Strongyloides before immunosuppression
- Schistosomiasis after freshwater exposure
- Latent TB testing 8-10 weeks post-travel
- Hepatitis serologies if exposure suspected`,
      keyTerms: [
        { term: 'XDR', definition: 'Extensively drug-resistant - resistance to multiple antibiotic classes' },
        { term: 'ESBL', definition: 'Extended-spectrum beta-lactamase - enzyme conferring broad antibiotic resistance' },
        { term: 'hyperparasitemia', definition: 'Very high level of malaria parasites in blood' },
        { term: 'IRIS', definition: 'Immune reconstitution inflammatory syndrome' },
        { term: 'prostration', definition: 'Extreme exhaustion preventing normal activities' },
        { term: 'plasma leakage', definition: 'Movement of plasma from blood vessels into tissues - hallmark of severe dengue' },
      ],
      clinicalNotes: 'Always consider malaria in a febrile returned traveler from an endemic area until proven otherwise. Do not rely on single negative smear - repeat testing if clinical suspicion high. Rapid antigen tests miss low parasitemia. For severe malaria, IV artesunate is first-line; have it available or transfer protocol established. Drug resistance patterns evolve - check current local resistance before empiric therapy. Not all fever in returned travelers is exotic - common domestic infections must also be considered.',
    },
    5: {
      level: 5,
      summary: 'Specialist-level understanding encompasses emerging infectious disease threats, biosecurity considerations, expedition medicine in remote settings, and global health security implications of travel-related disease spread.',
      explanation: `Expert travel medicine practice requires awareness of emerging pathogens, understanding of global health security frameworks, management of extreme environment medical problems, and engagement with research advancing the field.

**Emerging Infectious Diseases:**

*Novel Coronaviruses:*
- MERS-CoV: Middle East, camel exposure
- SARS-CoV-2: global pandemic transformed travel medicine
- Surveillance at points of entry
- Quarantine and border restrictions
- Vaccine passports and health certificates

*Viral Hemorrhagic Fevers:*
- Ebola: West and Central Africa, humanitarian worker risk
- Marburg: Central/East Africa
- Lassa fever: West Africa
- Rapid diagnostic challenges
- Biocontainment requirements
- Post-exposure vaccine (ERVEBO for Ebola)

*Emerging Arboviruses:*
- Nipah virus: Southeast Asia, bat exposure
- Zika: congenital syndrome recognition transformed approach
- Chikungunya: expanding range with competent vectors
- Mayaro virus: potential next emerging threat
- Usutu virus: emerging neuroinvasive potential

**Biosecurity and Travel Medicine:**

*Dual-Use Research Concerns:*
- Pathogen transmission research
- Gain-of-function studies
- International regulations
- Export control considerations

*Biological Weapon Concerns:*
- Historical use (anthrax, smallpox)
- Traveler preparedness
- Recognition and reporting

**Extreme Environment Medicine:**

*Polar Regions:*
- Cold injury: hypothermia, frostbite
- Non-freezing cold injury (trench foot)
- Snow blindness
- Vitamin D deficiency
- Psychological effects (isolation, seasonal affective disorder)

*Maritime Medicine:*
- Motion sickness management
- Scurvy (still occurs)
- Decompression illness
- Marine envenomations
- Limited medical resources at sea

*Space Medicine (Emerging):*
- Radiation exposure
- Microgravity effects
- Telemedicine reliance
- Medical evacuation impossibility

**Mass Gathering Medicine:**

*Hajj and Umrah:*
- Heat-related illness (major concern)
- Respiratory disease transmission
- Meningococcal disease risk
- Crowd crush injuries
- Preparedness requirements

*Olympics and World Cup:*
- Enhanced surveillance systems
- Rapid response capabilities
- Legacy health infrastructure
- Research opportunities

**Global Health Security:**

*International Health Regulations (2005):*
- Core capacity requirements
- Points of entry
- Reporting obligations
- Emergency committees
- Pandemic preparedness

*Border Health:*
- Entry/exit screening effectiveness
- Quarantine implementation
- Individual rights vs. public health
- Risk communication challenges

**Climate Change and Disease:**

*Vector Range Expansion:*
- Malaria to higher altitudes and latitudes
- Dengue emergence in new regions (southern US, Europe)
- Tick-borne diseases expanding northward
- Season extension for transmission

*Extreme Weather:*
- Flooding and waterborne disease
- Heat-related mortality
- Forced migration and health systems

**Research Frontiers:**

*New Prevention Strategies:*
- Monoclonal antibodies for malaria prevention
- Transmission-blocking vaccines
- Spatial repellents
- Endectocidal ivermectin
- Gene drive mosquitoes

*Diagnostics:*
- Point-of-care molecular diagnostics
- Biosensor technologies
- Smartphone-based diagnostics
- AI-assisted clinical decision support

*Treatment:*
- New antimalarials (single-dose cures)
- Direct-acting antivirals for dengue
- Host-directed therapies
- Immunomodulatory approaches

**Ethical Considerations:**
- Resource allocation for expensive prophylaxis
- Vaccine equity and access
- Medical tourism ethics
- Reporting obligations vs. confidentiality
- Duty to warn contacts of exposure`,
      keyTerms: [
        { term: 'arbovirus', definition: 'Arthropod-borne virus transmitted by mosquitoes or ticks' },
        { term: 'endectocidal', definition: 'Killing parasites in the blood that then kill mosquitoes that feed' },
        { term: 'gain-of-function', definition: 'Research that enhances pathogen capabilities' },
        { term: 'competent vector', definition: 'Mosquito species capable of transmitting specific pathogens' },
        { term: 'biocontainment', definition: 'Physical containment of highly infectious agents' },
        { term: 'non-freezing cold injury', definition: 'Tissue damage from cold wet conditions above freezing' },
      ],
      clinicalNotes: 'Travel medicine operates at the intersection of individual patient care and global health security. Emerging infectious diseases require constant vigilance and readiness to adapt recommendations. The COVID-19 pandemic fundamentally changed travel medicine practice and highlighted the need for flexible, evidence-based approaches to novel threats. Maintain awareness of global outbreak alerts through ProMED, HealthMap, and official sources. Consider research participation to advance the field. Document thoroughly for public health reporting when required.',
    },
  },

  media: [],
  citations: [
    {
      id: 'cdc-yellow-book-diseases',
      type: 'website',
      title: 'CDC Yellow Book 2024 - Travel-Related Infectious Diseases',
      source: 'Centers for Disease Control and Prevention',
      url: 'https://wwwnc.cdc.gov/travel/yellowbook/2024/infections-diseases',
      license: 'Public Domain',
    },
  ],
  crossReferences: [
    { targetId: 'pre-travel-consultation', targetType: 'concept', relationship: 'related', label: 'Pre-Travel Consultation' },
    { targetId: 'post-travel-evaluation', targetType: 'concept', relationship: 'related', label: 'Post-Travel Evaluation' },
    { targetId: 'malaria-global', targetType: 'concept', relationship: 'related', label: 'Malaria' },
  ],
  tags: {
    systems: ['infectious'],
    topics: ['travel-medicine', 'infectious-diseases', 'global-health'],
    keywords: ['malaria', 'dengue', 'traveler\'s diarrhea', 'typhoid', 'vector-borne', 'parasites'],
    clinicalRelevance: 'high',
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default travelRelatedIllnesses;
