/**
 * Returning Traveler Evaluation
 */

import { EducationalContent } from '../../types';

export const RETURNING_TRAVELER: EducationalContent = {
  id: 'returning-traveler',
  type: 'concept',
  name: 'Returning Traveler Evaluation',
  alternateNames: ['Post-Travel Illness', 'Imported Infections'],

  levels: {
    1: {
      level: 1,
      summary: 'When travelers get sick after returning home, doctors need to think about diseases from the places they visited. Some infections take weeks to show symptoms.',
      explanation: `**Warning Signs After Travel:**
- Fever (could be malaria - a medical emergency!)
- Diarrhea lasting more than a few days
- Unusual skin rashes or sores
- Cough or breathing problems
- Extreme fatigue

**Important to Tell Your Doctor:**
- Where you traveled
- What you did (swimming, hiking, animal contact)
- What you ate and drank
- Any medications you took
- Vaccines you received before travel

**Malaria Emergency:**
Fever after travel to Africa or other malaria areas is a medical emergency. Get tested immediately - malaria can become deadly within hours.`,
      keyTerms: [
        { term: 'imported infection', definition: 'Disease caught abroad and diagnosed at home' },
        { term: 'incubation period', definition: 'Time between infection and symptoms appearing' },
      ],
      analogies: ['Post-travel symptoms are like delayed echoes from your journey.'],
      examples: ['A traveler returning from Africa with fever must be tested for malaria immediately.'],
    },
    2: {
      level: 2,
      summary: 'Evaluation of ill returned travelers uses syndromic approach based on symptoms, incubation periods, and travel history to guide differential diagnosis and testing.',
      explanation: `**Syndromic Approach:**

| Syndrome | Common Causes | Key Tests |
|----------|--------------|-----------|
| Fever | Malaria, dengue, typhoid, rickettsiae | Blood smear, cultures |
| Diarrhea | Bacterial, parasitic | Stool studies |
| Skin | Cutaneous larva migrans, leishmaniasis | Biopsy if needed |
| Respiratory | TB, influenza, COVID | CXR, PCR |
| Eosinophilia | Helminths, schistosomiasis | Serology, stool |

**Incubation Periods:**
| Disease | Incubation |
|---------|-----------|
| Dengue | 4-14 days |
| Malaria (P. falciparum) | 7-30 days |
| Malaria (P. vivax/ovale) | Weeks to months |
| Typhoid | 7-14 days |
| Hepatitis A | 15-50 days |
| Schistosomiasis | 2-12 weeks |`,
      keyTerms: [
        { term: 'syndromic approach', definition: 'Organizing differential diagnosis by symptom patterns' },
        { term: 'incubation period', definition: 'Time from exposure to symptom onset' },
      ],
      analogies: ['Incubation periods are like time-delay fuses - different infections have different delays.'],
    },
    3: {
      level: 3,
      summary: 'Systematic evaluation integrates detailed travel history, symptom chronology, and knowledge of regional epidemiology to prioritize differential diagnosis and testing.',
      explanation: `**Clinical Approach:**

**History:**
- Detailed itinerary
- Accommodations
- Activities/exposures
- Food/water sources
- Pre-travel preparation
- Symptoms timeline

**Fever in Returned Traveler:**
| Diagnosis | Geographic Association | Key Features |
|-----------|----------------------|--------------|
| Malaria | Africa, Asia, Americas | Cyclic fever, thrombocytopenia |
| Dengue | Tropics (urban) | Fever, rash, myalgia |
| Typhoid | South Asia | Gradual onset, rose spots |
| Rickettsioses | Africa, Asia | Eschar, rash |
| Chikungunya | Tropics | Joint pain prominent |

**Testing Algorithm:**
1. Malaria smear (urgent if endemic exposure)
2. Blood cultures (typhoid, bacteremia)
3. Dengue serology/NS1
4. CBC with differential
5. LFTs, renal function`,
      keyTerms: [
        { term: 'eschar', definition: 'Black necrotic skin lesion at tick bite site', pronunciation: 'ES-kar' },
        { term: 'thrombocytopenia', definition: 'Low platelet count, common in dengue and malaria' },
      ],
      clinicalNotes: 'Always consider malaria in febrile patients from endemic areas. Test urgently. Repeat smear if negative.',
    },
    4: {
      level: 4,
      summary: 'Post-travel evaluation requires knowledge of global epidemiology, disease-specific diagnostics, and public health implications of imported infections.',
      explanation: `**Advanced Diagnostics:**

| Test | Indication | Timing |
|------|-----------|--------|
| Thick/thin smear | Malaria | Immediate, repeat x3 |
| RDT | Malaria screening | Rapid, less sensitive |
| NS1 antigen | Early dengue | Days 1-5 |
| Dengue serology | Late dengue | After day 5 |
| Quantiferon/T-SPOT | TB exposure | 8-10 weeks post |

**Public Health:**
- Notifiable diseases
- Contact tracing
- Outbreak detection
- Surveillance contribution

**Special Considerations:**
- VFR travelers (higher risk, less prepared)
- Immunocompromised
- Pregnancy
- Drug resistance patterns`,
      keyTerms: [
        { term: 'RDT', definition: 'Rapid Diagnostic Test - quick antigen-based screening' },
        { term: 'notifiable disease', definition: 'Condition required to be reported to public health' },
      ],
      clinicalNotes: 'Know your notifiable diseases. Report suspected cases. Consider antimicrobial resistance.',
    },
    5: {
      level: 5,
      summary: 'Returning traveler medicine operates at the interface of clinical care and global health surveillance. Imported infections inform global epidemiology and may signal outbreaks.',
      explanation: `**Surveillance Value:**
- Sentinel surveillance through travelers
- Outbreak detection
- Drug resistance monitoring
- Novel pathogen identification

**Research:**
- GeoSentinel network
- EuroTravNet
- Travel medicine consortia

**Global Health Security:**
- IHR notification
- Point of entry screening
- Contact tracing
- Quarantine decisions`,
      keyTerms: [
        { term: 'GeoSentinel', definition: 'Global surveillance network of travel medicine clinics' },
        { term: 'sentinel surveillance', definition: 'Using specific sites to monitor disease trends' },
      ],
      clinicalNotes: 'Contribute to surveillance networks. Report unusual findings. Stay connected to global health intelligence.',
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
    topics: ['travel-medicine', 'infectious-diseases', 'clinical-diagnosis'],
    keywords: ['returning traveler', 'imported infections', 'fever', 'post-travel'],
    clinicalRelevance: 'critical',
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
