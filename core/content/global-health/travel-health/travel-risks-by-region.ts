/**
 * Travel Risks by Region
 */

import { EducationalContent } from '../../types';

export const TRAVEL_RISKS_BY_REGION: EducationalContent = {
  id: 'travel-risks-by-region',
  type: 'concept',
  name: 'Travel Risks by Region',
  alternateNames: ['Regional Travel Health', 'Geographic Health Risks'],

  levels: {
    1: {
      level: 1,
      summary: 'Different parts of the world have different health risks. Knowing what to expect helps travelers prepare and stay safe.',
      explanation: `**Major Regions and Key Risks:**

**Sub-Saharan Africa:**
- Malaria (bring preventive medication)
- Yellow fever (vaccine often required)
- Traveler's diarrhea

**South Asia:**
- Typhoid fever
- Hepatitis A
- Dengue fever
- Traveler's diarrhea

**Southeast Asia:**
- Dengue (especially urban)
- Malaria (some areas)
- Japanese encephalitis (rural)

**Central/South America:**
- Dengue
- Yellow fever (some areas)
- Malaria (Amazon region)

**Middle East/North Africa:**
- MERS (Saudi Arabia)
- Hepatitis A
- Heat-related illness`,
      keyTerms: [
        { term: 'endemic region', definition: 'Area where a disease regularly occurs' },
        { term: 'risk zone', definition: 'Geographic area with specific health threats' },
      ],
      analogies: ['Knowing regional risks is like checking the weather forecast before packing.'],
      examples: ['Travelers to India should be vaccinated against typhoid and hepatitis A.'],
    },
    2: {
      level: 2,
      summary: 'Regional health risks reflect climate, sanitation, endemic diseases, and healthcare infrastructure. Travelers should prepare based on specific itinerary and activities.',
      explanation: `**Regional Risk Profiles:**

| Region | Key Infections | Vector Risk | Other |
|--------|---------------|-------------|-------|
| Sub-Saharan Africa | Malaria, typhoid, meningitis | High | Yellow fever zones |
| South Asia | Typhoid, hepatitis, dengue | Moderate-high | Pollution |
| Southeast Asia | Dengue, malaria (some), JE | Moderate | Traffic |
| South America | Yellow fever, dengue, Chagas | Moderate | Altitude |
| Middle East | MERS, hepatitis | Low | Heat |

**Activity-Specific Risks:**
- Safari/wildlife: Rabies, animal injury
- Trekking: Altitude, injury
- Diving: Barotrauma, marine envenomation
- Volunteering: Extended exposure`,
      keyTerms: [
        { term: 'meningitis belt', definition: 'Sub-Saharan African region with seasonal meningococcal outbreaks' },
        { term: 'Japanese encephalitis zone', definition: 'Asian region with endemic JE transmission' },
      ],
      analogies: ['Regional risks are like local road conditions - you need to know them to travel safely.'],
    },
    3: {
      level: 3,
      summary: 'Regional risk assessment integrates disease epidemiology, seasonal patterns, healthcare access, and traveler-specific factors to guide prevention strategies.',
      explanation: `**Assessment Framework:**

| Factor | Variables |
|--------|----------|
| Disease | Endemicity, seasonality, transmission mode |
| Traveler | Duration, accommodation, activities |
| Healthcare | Access, quality, evacuation |

**Region-Specific Details:**

**Sub-Saharan Africa:**
- Malaria: Varies by country and season
- Meningitis belt: December-June
- Yellow fever: Endemic zone vaccination
- Schistosomiasis: Freshwater contact

**South/Southeast Asia:**
- Dengue: Urban, peridomestic Aedes
- JE: Rural rice farming, rainy season
- Typhoid: Food/waterborne
- Rabies: Street dogs

**Latin America:**
- Yellow fever: Amazon basin
- Chagas: Rural, adobe housing
- Dengue: Widespread urban
- Altitude: Andean travel`,
      keyTerms: [
        { term: 'endemicity', definition: 'Degree to which disease is established in an area' },
        { term: 'focal transmission', definition: 'Disease limited to specific geographic foci' },
      ],
      clinicalNotes: 'Individualize risk assessment. Consider microgeography. Update for outbreaks.',
    },
    4: {
      level: 4,
      summary: 'Regional epidemiology informs evidence-based recommendations while recognizing limitations of aggregated data. Monitoring systems track changing risks.',
      explanation: `**Epidemiologic Intelligence:**

**Sources:**
- CDC destination pages
- WHO Disease Outbreak News
- ProMED
- GIDEON database

**Dynamic Risks:**
- Outbreaks (Ebola, cholera)
- Climate effects (expanding dengue)
- Conflict zones
- Natural disasters

**Risk Communication:**
- Contextualizing statistics
- Behavioral adherence
- Uncertainty communication`,
      keyTerms: [
        { term: 'surveillance', definition: 'Systematic disease monitoring' },
        { term: 'outbreak intelligence', definition: 'Rapid detection and reporting of disease events' },
      ],
      clinicalNotes: 'Check current advisories before finalizing recommendations. Counsel on monitoring.',
    },
    5: {
      level: 5,
      summary: 'Regional health risks reflect broader determinants including development, climate, and health systems. Global health security requires international collaboration and surveillance.',
      explanation: `**Broader Context:**
- Climate change expanding disease ranges
- Urbanization and dengue
- Antimicrobial resistance geography
- Healthcare tourism

**Global Surveillance:**
- IHR notification
- GOARN response
- Event-based surveillance
- Predictive modeling`,
      keyTerms: [
        { term: 'GOARN', definition: 'Global Outbreak Alert and Response Network' },
        { term: 'event-based surveillance', definition: 'Detection of disease through informal sources' },
      ],
      clinicalNotes: 'Integrate with global health intelligence. Contribute to surveillance.',
    },
  },

  media: [],
  citations: [],
  crossReferences: [
    { targetId: 'travel-health-overview', targetType: 'topic', relationship: 'parent', label: 'Travel Health Overview' },
    { targetId: 'malaria-global', targetType: 'topic', relationship: 'related', label: 'Malaria' },
  ],
  tags: {
    systems: ['public-health'],
    topics: ['travel-medicine', 'epidemiology'],
    keywords: ['regional risks', 'travel health', 'endemic diseases'],
    clinicalRelevance: 'high',
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
