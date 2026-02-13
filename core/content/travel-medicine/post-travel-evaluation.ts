import { EducationalContent } from '../types';

export const postTravelEvaluation: EducationalContent = {
  id: 'post-travel-evaluation',
  type: 'concept',
  name: 'Post-Travel Evaluation',
  alternateNames: ['Returned Traveler Assessment', 'Post-Travel Medical Care'],

  levels: {
    1: {
      level: 1,
      summary: 'Post-travel evaluation is medical care for people who get sick after returning from international travel.',
      explanation: `After returning from international travel, some people develop symptoms of illnesses they were exposed to during their trip. Getting proper medical care is important because some travel-related diseases can be serious.

**When to See a Doctor After Travel:**

See a doctor if you have any of these symptoms within 3 months of returning:
- Fever or chills
- Persistent diarrhea
- Skin rash or unusual sores
- Severe headache
- Persistent cough
- Unusual tiredness
- Yellowing of skin or eyes

**Why Post-Travel Care is Important:**

1. **Some Diseases Take Time to Show**
   - Malaria can cause fever weeks or months after exposure
   - Some parasites may not cause symptoms immediately
   - Early treatment leads to better outcomes

2. **Diseases May Be Unfamiliar to Local Doctors**
   - Tell your doctor exactly where you traveled
   - Mention any activities (safari, hiking, swimming)
   - List preventive medicines you took
   - Note any bites, scratches, or injuries

3. **Prevent Complications**
   - Malaria can become life-threatening if untreated
   - Some infections can spread to others
   - Early treatment prevents long-term problems

**What to Tell Your Doctor:**
- All countries you visited
- Dates of travel
- Activities you did
- Animal or insect exposures
- Food and water sources
- Whether you took preventive medicines
- When symptoms started

**Common Post-Travel Problems:**
- Malaria (fever)
- Dengue (fever, rash, pain)
- Traveler\'s diarrhea
- Skin infections or rashes
- Respiratory infections

**Prevent Spreading Illness:**
- Tell healthcare providers you traveled internationally
- Follow isolation instructions if given
- Practice good hand hygiene
- Avoid preparing food for others if you have diarrhea`,
      keyTerms: [
        { term: 'post-travel', definition: 'The period after returning from international travel' },
        { term: 'incubation period', definition: 'The time between exposure to a germ and getting sick' },
        { term: 'exposure', definition: 'Contact with something that can cause disease' },
        { term: 'malaria', definition: 'A serious disease spread by mosquitoes' },
      ],
      analogies: [
        'Post-travel evaluation is like getting your car inspected after a long road trip - problems may not show up until later.',
        'Think of disease incubation like a delayed delivery - you ordered it (were exposed) while traveling, but it arrives (symptoms appear) after you get home.',
      ],
      examples: [
        'A returned traveler from Kenya develops fever 2 weeks later - malaria testing is performed.',
        'A traveler returning from Thailand has persistent diarrhea and is tested for parasites.',
        'A student returning from study abroad in Ecuador gets a skin rash evaluated.',
      ],
    },
    2: {
      level: 2,
      summary: 'Post-travel evaluation requires systematic assessment of symptoms in context of travel history to diagnose imported infections, which may present with delayed onset and atypical features.',
      explanation: `The returned traveler presents unique diagnostic challenges. Symptoms may represent infections acquired abroad (imported infections), domestic infections, or non-infectious travel-related conditions. A detailed travel history is essential for appropriate diagnosis.

**Key Elements of Travel History:**

*Geographic Information:*
- All countries visited (including brief layovers)
- Specific regions within countries (rural vs. urban)
- Dates of travel in each location
- Season of travel

*Exposures:*
- Fresh water contact (swimming, wading) - schistosomiasis risk
- Animal contact (bites, scratches) - rabies risk
- Insect bites and prevention measures used
- Food and water sources
- Sexual contacts
- Healthcare received abroad
- Sick contacts during travel

*Preventive Measures:*
- Vaccinations received
- Malaria prophylaxis taken (compliance, timing)
- Mosquito avoidance measures
- Food/water precautions followed

**Differential Diagnosis by Symptom:**

*Fever:*
- Malaria (most common life-threatening cause)
- Dengue fever
- Typhoid fever
- Rickettsial diseases
- Viral hemorrhagic fevers
- Acute HIV infection
- Common domestic infections

*Diarrhea:*
- Bacterial (Campylobacter, Salmonella, Shigella, ETEC)
- Parasitic (Giardia, Cryptosporidium, Cyclospora, Entamoeba)
- Viral (norovirus, rotavirus)
- Post-infectious irritable bowel syndrome

*Skin Conditions:*
- Cutaneous larva migrans
- Myiasis
- Tungiasis
- Scabies
- Pyoderma
- Fungal infections

*Eosinophilia:*
- Strongly suggestive of parasitic infection
- Consider helminth infections, especially if freshwater exposure

**Incubation Period Guide:**

| Timing | Consider |
|--------|----------|
| <10 days | Malaria, dengue, typhoid, travelers\' diarrhea, rickettsiae |
| 10 days - 3 weeks | Typhoid, hepatitis A, acute schistosomiasis, leptospirosis |
| 3 weeks - 3 months | Malaria (P. ovale/vivax relapse), chronic schistosomiasis, TB |
| >3 months | Malaria (P. malariae), strongyloides, filariasis, latent TB |

**Initial Diagnostic Workup:**
- Complete blood count with differential (eosinophil count)
- Liver function tests
- Thick and thin blood films for malaria
- Rapid malaria antigen test
- Blood cultures
- Stool culture and O&P examination
- Urinalysis
- Chest X-ray if respiratory symptoms`,
      keyTerms: [
        { term: 'imported infection', definition: 'Infection acquired abroad and diagnosed after return' },
        { term: 'eosinophilia', definition: 'Elevated eosinophil count suggesting parasitic infection' },
        { term: 'incubation period', definition: 'Time between exposure and symptom onset' },
        { term: 'O&P', definition: 'Ova and parasites - stool test for parasites' },
        { term: 'prophylaxis', definition: 'Preventive treatment' },
      ],
      analogies: [
        'Diagnosing post-travel illness is like detective work - the travel history provides clues that narrow down the possibilities.',
        'Incubation periods are like delivery windows - you know approximately when to expect symptoms based on when you were exposed.',
      ],
      examples: [
        'A febrile returned traveler from West Africa prompts immediate malaria testing - smear positive for P. falciparum.',
        'A traveler with persistent diarrhea 2 weeks after returning from Nepal is diagnosed with Giardia on stool O&P.',
        'A returned Peace Corps volunteer with eosinophilia and cough is diagnosed with strongyloides infection.',
      ],
    },
    3: {
      level: 3,
      summary: 'Post-travel evaluation requires systematic syndromic approach, understanding of disease epidemiology, and targeted diagnostic testing to distinguish life-threatening imported infections from benign self-limited illness.',
      explanation: `Comprehensive post-travel evaluation applies syndromic diagnostic frameworks to efficiently identify serious imported infections while avoiding unnecessary testing. The approach prioritizes life-threatening conditions first.

**Syndromic Approach to Fever:**

*Life-Threatening Conditions (Rule Out First):*
1. **Malaria**
   - Most common cause of fever in returned travelers
   - Can be fatal if treatment delayed
   - Test: Thick/thin smears (repeat if negative), rapid antigen
   - Treatment depends on species and resistance

2. **Typhoid Fever**
   - Sustained fever, relative bradycardia, rose spots
   - Complications: intestinal perforation, hemorrhage
   - Diagnosis: Blood cultures (often require multiple)
   - Treatment: Azithromycin or ceftriaxone (fluoroquinolone resistance common)

3. **Dengue**
   - "Breakbone fever" - severe myalgia/arthralgia
   - Thrombocytopenia, hemoconcentration
   - Warning signs: abdominal pain, persistent vomiting, bleeding
   - No specific antiviral; supportive care

4. **Rickettsial Diseases**
   - African tick bite fever, Mediterranean spotted fever, scrub typhus
   - Eschar may be present
   - Doxycycline treatment

**Diagnostic Algorithm:**

*Initial Testing:*
- CBC with differential (eosinophil count critical)
- Comprehensive metabolic panel
- Malaria smears and rapid test
- Blood cultures (2 sets)
- Urinalysis
- Chest X-ray

*Additional Testing Based on Exposure:*
- Dengue NS1 antigen and serology
- Typhoid serology (limited utility)
- Rickettsial serology
- Leptospirosis serology
- Hepatitis panel
- HIV test if risk factors
- Schistosomiasis serology if freshwater exposure
- Strongyloides serology if eosinophilia

*Stool Studies for Diarrhea:*
- Bacterial culture
- Ova and parasites (3 samples)
- Giardia/Cryptosporidium antigen
- C. difficile toxin if recent antibiotics

**Malaria Diagnosis and Management:**

*Diagnostic Approach:*
- Thick smear: sensitive screening test
- Thin smear: species identification and parasitemia
- Rapid antigen tests: quick, miss low parasitemia
- Repeat testing if clinical suspicion high despite negative tests

*Species Considerations:*
- **P. falciparum:** Most severe, can be fatal, drug resistance common
- **P. vivax/ovale:** Can relapse from hypnozoites (liver stage)
- **P. malariae:** Low parasitemia, can cause nephrotic syndrome
- **P. knowlesi:** Severe disease potential, misidentified as P. malariae

**Eosinophilia Workup:**

*Eosinophil Count >500/uL suggests:*
- Helminth infection (most common in travelers)
- Schistosomiasis (freshwater exposure)
- Strongyloides (can persist for decades)
- Hookworm
- Filariais
- Ectoparasites

*Workup:*
- Serology for strongyloides, schistosomiasis, filariasis
- Stool O&P (multiple samples)
- Consider empiric albendazole or ivermectin

**Special Populations:**

*Immunocompromised:*
- Higher risk of severe disease
- Atypical presentations
- Reactivation of latent infections
- Strongyloides hyperinfection syndrome risk

*Pregnant:*
- Malaria more severe in pregnancy
- Avoid primaquine (G6PD testing needed)
- Vertical transmission concerns

*Pediatric:*
- Malaria: higher risk of severe disease
- Different differential for fever
- Dehydration risk with diarrhea`,
      keyTerms: [
        { term: 'syndromic approach', definition: 'Diagnostic strategy based on symptom patterns rather than specific etiology' },
        { term: 'hypnozoite', definition: 'Dormant liver stage of malaria causing late relapses' },
        { term: 'parasitemia', definition: 'Presence and concentration of parasites in blood' },
        { term: 'hemoconcentration', definition: 'Increased blood cell concentration due to plasma leakage' },
        { term: 'eschar', definition: 'Dark scab at site of tick or mite bite in rickettsial diseases' },
        { term: 'hyperinfection', definition: 'Massive strongyloides proliferation with immunosuppression' },
      ],
      examples: [
        'A febrile returned traveler with thrombocytopenia and transaminitis - both malaria and dengue testing positive (co-infection).',
        'A missionary returning from Liberia with eosinophilia and respiratory symptoms diagnosed with Loffler syndrome from strongyloides.',
        'A traveler returning from India with weeks of fever finally diagnosed with typhoid on third set of blood cultures.',
      ],
    },
    4: {
      level: 4,
      summary: 'Advanced post-travel evaluation addresses complex presentations, antimicrobial resistance, co-infections, and provides appropriate follow-up care including screening for latent infections with public health implications.',
      explanation: `Expert-level post-travel care manages complex diagnostic scenarios, recognizes antimicrobial resistance patterns, handles coinfections, and ensures appropriate follow-up including screening for latent infections that may have public health implications.

**Complex Diagnostic Scenarios:**

*Fever of Unknown Origin in Returned Traveler:*
- Definition: Fever >38.3C on multiple occasions, >3 weeks, undiagnosed after initial workup
- Expanded differential:
  - Extrapulmonary TB
  - Endocarditis (culture-negative)
  - Visceral leishmaniasis
  - Brucellosis
  - Q fever
  - Bartonellosis
  - Malaria (uncommon presentations)
  - Lymphoma (mimics infectious cause)

*Seronegative Window Period:*
- Many serologic tests negative early in illness
- Repeat testing 2-4 weeks after initial presentation
- Consider empiric therapy if clinical suspicion high
- Document rationale for empiric treatment

**Antimicrobial Resistance Considerations:**

*Malaria Treatment Failures:*
- Artemisinin resistance in Southeast Asia
- Delayed parasite clearance as marker
- Ensure appropriate weight-based dosing
- Check for vomiting/diarrhea affecting absorption
- Consider drug interactions affecting antimalarials

*Typhoid Resistance:*
- XDR typhoid (Pakistan): resistant to chloramphenicol, ampicillin, TMP-SMX, fluoroquinolones, 3rd-gen cephalosporins
- Azithromycin often remaining option
- Carbapenems for severe XDR cases
- Obtain susceptibilities when possible

*Travelers\' Diarrhea:*
- Fluoroquinolone resistance in Campylobacter (especially Southeast Asia)
- ESBL-producing Enterobacteriaceae increasingly common
- Azithromycin preferred empiric choice
- Rifaximin for non-invasive disease

**Coinfection Recognition:**

*Common Coinfection Patterns:*
- Malaria and typhoid ("typhomalarial fever")
- Malaria and dengue (both common in same regions)
- HIV and other infections (modifies presentation)

*Diagnostic Approach:*
- Do not stop with one diagnosis
- Continue evaluation if course atypical
- Consider broad differential in severely ill

**Public Health Reporting:**

*Reportable Conditions:*
- Malaria (CDC surveillance)
- Yellow fever
- Viral hemorrhagic fevers
- Novel influenza
- Public health emergencies of international concern
- COVID-19 (per local requirements)

*Infection Control:*
- Isolate suspected viral hemorrhagic fever immediately
- Standard precautions for most conditions
- Contact precautions for C. difficile, some parasitic infections
- Airborne precautions for suspected TB

**Follow-Up and Screening:**

*Strongyloides:*
- Screen if eosinophilia or exposure in endemic area
- Especially important before immunosuppression
- Serology preferred over stool examination
- Treat with ivermectin

*Schistosomiasis:*
- Serology 6-8 weeks after last exposure (earlier may be false negative)
- Treat with praziquantel
- Follow-up to assess response
- Screen for complications (liver fibrosis, bladder cancer)

*Latent TB:*
- IGRA or TST 8-10 weeks post-return
- Earlier testing may miss recent infection
- Treat latent TB to prevent reactivation

*Malaria Relapse Prevention:*
- P. vivax/ovale require anti-hypnozoite therapy
- Primaquine or tafenoquine
- G6PD testing required before treatment
- Single dose tafenoquine convenient but costly

*HIV Post-Exposure:*
- Test at baseline, 6 weeks, 3 months, 6 months
- PEP completion if indicated
- Counseling on risk reduction

**Long-Term Sequelae:**

*Post-Dengue:*
- Persistent fatigue
- Depression/anxiety
- Post-infectious chronic symptoms

*Post-Malaria:*
- Cognitive effects in cerebral malaria survivors
- Post-treatment hemolysis (artesunate-related)

*Post-Chikungunya:*
- Chronic arthropathy (can last years)
- May require rheumatology referral`,
      keyTerms: [
        { term: 'XDR', definition: 'Extensively drug-resistant - resistance to multiple antibiotic classes' },
        { term: 'ESBL', definition: 'Extended-spectrum beta-lactamase' },
        { term: 'IGRA', definition: 'Interferon-gamma release assay for TB testing' },
        { term: 'TST', definition: 'Tuberculin skin test' },
        { term: 'empiric therapy', definition: 'Treatment started before definitive diagnosis' },
        { term: 'coinfection', definition: 'Presence of two or more infections simultaneously' },
      ],
      clinicalNotes: 'Always maintain high index of suspicion for malaria in febrile returned travelers from endemic areas. Never dismiss fever as "viral" without excluding malaria. Consider that travelers may acquire common domestic infections - not everything is exotic. Document travel history clearly for future reference. Coordinate with public health authorities for notifiable conditions. Provide clear return precautions to patients. For complex cases, do not hesitate to consult infectious disease or tropical medicine specialists.',
    },
    5: {
      level: 5,
      summary: 'Specialist-level post-travel care addresses outbreak investigation, emerging pathogen recognition, integration with global surveillance systems, and management of mass casualty events involving travelers.',
      explanation: `Expert post-travel evaluation extends beyond individual patient care to include outbreak detection, emerging infectious disease recognition, contribution to global health surveillance, and preparedness for mass casualty events affecting travelers.

**Outbreak Investigation:**

*Recognizing Clusters:*
- Multiple travelers from same trip with similar illness
- Temporal or geographic clustering
- Unusual presentations suggesting novel pathogen
- Reporting to public health authorities

*Investigation Components:*
- Line list creation
- Epidemiologic curve
- Attack rate calculation
- Exposure assessment
- Environmental sampling
- Contact tracing

*Recent Examples:*
- COVID-19: initial travel-related cases alerted global community
- MERS-CoV: travelers from Middle East
- Zika: returned travelers with unusual symptoms
- Novel influenza: seasonal detection through surveillance

**Emerging Pathogen Recognition:**

*Index Case Detection:*
- Travelers often first detected cases of emerging infections
- Recognition requires high index of suspicion
- Unusual clinical features
- Failure to respond to standard therapy
- Exotic exposure history

*Diagnostic Approaches:*
- Broad-range PCR for bacterial identification
- Metagenomic sequencing
- Point-of-care diagnostics
- Reference laboratory consultation
- Sample preservation for future testing

*Response Coordination:*
- Immediate isolation if high consequence pathogen suspected
- Public health notification
- Contact identification and monitoring
- Diagnostic sample transport protocols
- Media and communication management

**Global Surveillance Contribution:**

*Sentinel Surveillance:*
- Returning travelers as sentinels for disease activity abroad
- Supplement limited surveillance in resource-limited settings
- Early warning system for outbreaks
- Antimicrobial resistance tracking

*Data Sources:*
- GeoSentinel surveillance network
- ProMED reporting
- National surveillance systems
- Airline and cruise line reporting
- Pharmaceutical sales data

*Challenges:*
- Underreporting
- Incomplete travel histories
- Diagnostic limitations
- Bias toward severe cases
- Lag time in reporting

**Mass Casualty Events:**

*Natural Disasters:*
- Earthquakes affecting tourist areas
- Tsunami with tourist casualties
- Hurricane evacuation
- Medical repatriation coordination

*Terrorism and Conflict:*
- Attacks targeting tourist sites
- Civil unrest affecting travelers
- Kidnapping and hostage situations
- Post-trauma care

*Transportation Disasters:*
- Aviation accidents
- Cruise ship outbreaks
- Tour bus accidents
- Mass casualty triage abroad

**Research and Academic Contributions:**

*Clinical Research:*
- Treatment effectiveness studies
- Drug resistance surveillance
- Vaccine effectiveness in travelers
- Novel diagnostic validation

*Epidemiologic Research:*
- Risk factor identification
- Attack rate studies
- Economic burden analysis
- Intervention effectiveness

*Quality Improvement:*
- Diagnostic error analysis
- Treatment guideline development
- Care pathway optimization
- Telemedicine integration

**Health Diplomacy:**

*International Relations:*
- Travel medicine at intersection of health and foreign policy
- Diplomatic pouch for diagnostic samples
- International health regulations compliance
- Cross-border health coordination

*Capacity Building:*
- Training programs for developing world
- Twinning partnerships
- Research collaboration
- Technology transfer

**Policy and Advocacy:**

*Travel Medicine Policy:*
- Vaccine requirement harmonization
- Border health policies
- Travel insurance requirements
- Medical tourism regulation

*Advocacy:*
- Access to care for VFR travelers
- Vaccine equity
- Global health security funding
- Climate change health impacts

**Future Directions:**

*Digital Health:*
- Electronic health records with travel flags
- Smartphone-based symptom monitoring
- AI-assisted differential diagnosis
- Telemedicine follow-up

*Point-of-Care Diagnostics:*
- Multiplex platforms
- Rapid molecular testing
- Biosensor technologies
- Decentralized testing

*Personalized Medicine:*
- Pharmacogenomics in antimalarial selection
- Host susceptibility factors
- Individual risk stratification
- Precision prophylaxis`,
      keyTerms: [
        { term: 'sentinel surveillance', definition: 'Monitoring disease through selected reporting sites to detect trends' },
        { term: 'index case', definition: 'First identified case in an outbreak' },
        { term: 'metagenomic sequencing', definition: 'Sequencing all genetic material in a sample to identify pathogens' },
        { term: 'epidemiologic curve', definition: 'Histogram showing cases over time by date of onset' },
        { term: 'attack rate', definition: 'Proportion of exposed people who become ill' },
        { term: 'broad-range PCR', definition: 'PCR using primers that detect multiple species' },
      ],
      clinicalNotes: 'Travel medicine physicians serve as frontline sentinels for global infectious disease threats. Every post-travel evaluation is an opportunity to contribute to global health security through accurate diagnosis, appropriate reporting, and contribution to surveillance networks. Maintain relationships with public health authorities, reference laboratories, and subspecialty colleagues. Document thoroughly for research and public health purposes. Stay current with evolving global threats through professional networks and surveillance systems. Consider that the next pandemic may first present as a mysterious illness in a returned traveler - vigilance and curiosity are essential professional attributes.',
    },
  },

  media: [],
  citations: [
    {
      id: 'cdc-returned-traveler',
      type: 'website',
      title: 'CDC Yellow Book 2024 - Returned Traveler Evaluation',
      source: 'Centers for Disease Control and Prevention',
      url: 'https://wwwnc.cdc.gov/travel/yellowbook/2024/post-travel-evaluation',
      license: 'Public Domain',
    },
  ],
  crossReferences: [
    { targetId: 'pre-travel-consultation', targetType: 'concept', relationship: 'related', label: 'Pre-Travel Consultation' },
    { targetId: 'travel-related-illnesses', targetType: 'concept', relationship: 'related', label: 'Travel-Related Illnesses' },
  ],
  tags: {
    systems: ['infectious', 'public-health'],
    topics: ['travel-medicine', 'diagnostics', 'global-health'],
    keywords: ['returned traveler', 'fever', 'malaria', 'imported infection', 'diagnostic workup'],
    clinicalRelevance: 'high',
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default postTravelEvaluation;
