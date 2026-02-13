/**
 * Travel Health Overview
 */

import { EducationalContent } from '../../types';

export const TRAVEL_HEALTH_OVERVIEW: EducationalContent = {
  id: 'travel-health-overview',
  type: 'concept',
  name: 'Travel Health Overview',
  alternateNames: ['Travel Medicine', 'International Travel Health'],

  levels: {
    1: {
      level: 1,
      summary: 'Travel health is about staying healthy when you travel to other countries. Different places have different diseases, and travelers need to prepare to stay safe.',
      explanation: `When you travel, especially to tropical countries, you may face health risks that don't exist at home.

**Key Travel Health Concerns:**
- Vaccines needed before travel
- Food and water safety
- Insect-borne diseases (malaria, dengue)
- Traveler's diarrhea
- Altitude sickness
- Jet lag

**Before You Travel:**
- See a travel health provider 4-6 weeks before
- Get recommended vaccines
- Get prescriptions for preventive medications
- Learn about health risks at your destination`,
      keyTerms: [
        { term: 'travel medicine', definition: 'Medical specialty focused on health issues related to travel' },
        { term: 'malaria prophylaxis', definition: 'Medication taken to prevent malaria' },
      ],
      analogies: ['Travel health preparation is like packing an invisible suitcase of protection.'],
      examples: ['Travelers to Africa often need yellow fever vaccine and malaria prevention pills.'],
    },
    2: {
      level: 2,
      summary: 'Travel medicine addresses pre-travel preparation, health during travel, and post-travel evaluation. Risks vary by destination, traveler characteristics, and type of travel.',
      explanation: `**Pre-Travel Consultation:**
- Risk assessment
- Vaccination review
- Chemoprophylaxis
- Travel health advice

**Common Travel Health Risks:**
| Risk | Prevention |
|------|------------|
| Traveler's diarrhea | Food/water precautions, antibiotics |
| Malaria | Chemoprophylaxis, bite prevention |
| Vaccine-preventable | Pre-travel immunization |
| Accidents | Awareness, precautions |
| STIs | Safe practices |

**Special Populations:**
- Pregnant travelers
- Immunocompromised
- Children
- Elderly
- VFR travelers (visiting friends and relatives)`,
      keyTerms: [
        { term: 'VFR travelers', definition: 'People visiting friends and relatives in their country of origin' },
        { term: 'chemoprophylaxis', definition: 'Taking medication to prevent disease', pronunciation: 'kee-moh-proh-fih-LAK-sis' },
      ],
      analogies: ['Travel health consultation is like getting a map for health risks at your destination.'],
    },
    3: {
      level: 3,
      summary: 'Travel medicine integrates epidemiology, vaccinology, infectious disease, and behavioral health to optimize traveler outcomes through risk assessment and evidence-based interventions.',
      explanation: `**Risk Assessment:**
| Factor | Considerations |
|--------|---------------|
| Destination | Endemic diseases, infrastructure |
| Traveler | Age, immunity, comorbidities |
| Trip | Duration, activities, accommodation |
| Purpose | Tourism, business, humanitarian |

**Immunization:**
- Routine vaccines (update status)
- Required (yellow fever, meningococcal for Hajj)
- Recommended based on risk
- COVID-19 requirements (evolving)

**Malaria Prevention:**
| Drug | Regimen | Considerations |
|------|---------|----------------|
| Atovaquone-proguanil | Daily | Short half-life |
| Doxycycline | Daily | Photosensitivity |
| Mefloquine | Weekly | Neuropsychiatric |
| Tafenoquine | Weekly | G6PD screening |`,
      keyTerms: [
        { term: 'endemic', definition: 'Regularly occurring in a particular area' },
        { term: 'standby emergency treatment', definition: 'Self-treatment medications for remote areas' },
      ],
      clinicalNotes: 'Assess individual risk. Consider drug interactions. Provide written instructions. Plan for emergencies.',
    },
    4: {
      level: 4,
      summary: 'Travel medicine requires understanding of global disease epidemiology, vaccine science, and behavioral factors affecting adherence. Post-travel evaluation addresses imported infections with public health implications.',
      explanation: `**Epidemiologic Intelligence:**
- CDC Yellow Book
- WHO travel advice
- ProMED surveillance
- Outbreak monitoring

**Evidence Base:**
| Intervention | Evidence |
|-------------|----------|
| Malaria chemoprophylaxis | Strong |
| Hepatitis A vaccine | Strong |
| Traveler's diarrhea self-treatment | Moderate |
| Standby malaria treatment | Context-dependent |

**Post-Travel:**
- Fever evaluation (malaria, dengue, typhoid)
- GI symptoms
- Skin conditions
- Eosinophilia workup`,
      keyTerms: [
        { term: 'imported infection', definition: 'Disease acquired abroad and diagnosed after return' },
        { term: 'syndromic approach', definition: 'Diagnosis based on symptom patterns' },
      ],
      clinicalNotes: 'Always consider malaria in febrile returned travelers. Take detailed travel history.',
    },
    5: {
      level: 5,
      summary: 'Travel medicine operates at the intersection of individual health and global health security. Mass travel contributes to infectious disease spread, requiring integration of travel medicine with surveillance and outbreak response.',
      explanation: `**Global Health Security:**
- Travel as disease vector
- IHR and traveler screening
- Pandemic preparedness
- Points of entry

**Emerging Challenges:**
- Climate change and disease range
- Antimicrobial resistance
- Novel pathogens
- Medical tourism

**Research Frontiers:**
- Vaccine optimization
- Behavioral interventions
- Risk communication
- Point-of-care diagnostics`,
      keyTerms: [
        { term: 'IHR', definition: 'International Health Regulations - WHO framework for cross-border health threats' },
        { term: 'points of entry', definition: 'Airports, ports, ground crossings where travelers enter countries' },
      ],
      clinicalNotes: 'Integrate with public health surveillance. Report notifiable conditions. Stay current on global outbreaks.',
    },
  },

  media: [],
  citations: [
    {
      id: 'cdc-yellow-book',
      type: 'website',
      title: 'CDC Yellow Book - Health Information for International Travel',
      source: 'CDC',
      url: 'https://wwwnc.cdc.gov/travel/yellowbook/2024/table-of-contents',
      license: 'Public Domain',
    },
  ],
  crossReferences: [
    { targetId: 'travel-vaccinations-guide', targetType: 'topic', relationship: 'child', label: 'Travel Vaccinations' },
    { targetId: 'travel-risks-by-region', targetType: 'topic', relationship: 'child', label: 'Travel Risks by Region' },
    { targetId: 'returning-traveler', targetType: 'topic', relationship: 'child', label: 'Returning Traveler' },
  ],
  tags: {
    systems: ['public-health'],
    topics: ['global-health', 'travel-medicine', 'infectious-diseases'],
    keywords: ['travel health', 'travel medicine', 'vaccines', 'malaria prevention'],
    clinicalRelevance: 'high',
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
