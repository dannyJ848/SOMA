/**
 * Travel Vaccinations Guide
 */

import { EducationalContent } from '../../types';

export const TRAVEL_VACCINATIONS_GUIDE: EducationalContent = {
  id: 'travel-vaccinations-guide',
  type: 'concept',
  name: 'Travel Vaccinations Guide',
  alternateNames: ['Travel Immunizations', 'Pre-Travel Vaccines'],

  levels: {
    1: {
      level: 1,
      summary: 'Different countries have different diseases, so travelers may need special vaccines before visiting. Some vaccines are required, and others are recommended to keep you safe.',
      explanation: `**Types of Travel Vaccines:**

**Required:**
- Yellow fever (for some countries)
- Meningococcal (for Hajj pilgrims)
- Polio (some countries require proof)

**Commonly Recommended:**
- Hepatitis A (contaminated food/water)
- Typhoid (contaminated food/water)
- Hepatitis B (blood/body fluids)
- Rabies (animal bites, remote areas)

**When to Get Vaccines:**
- Ideally 4-6 weeks before travel
- Some vaccines need multiple doses
- Some take time to work`,
      keyTerms: [
        { term: 'travel vaccine', definition: 'Immunization recommended or required for international travel' },
        { term: 'yellow fever vaccine', definition: 'Vaccine against yellow fever, required for entry to some countries' },
      ],
      analogies: ['Travel vaccines are like getting a local tour guide for your immune system.'],
      examples: ['Travelers to sub-Saharan Africa often need yellow fever vaccine and certificate.'],
    },
    2: {
      level: 2,
      summary: 'Travel vaccinations include routine vaccines, required vaccines for entry, and recommended vaccines based on destination-specific risks and traveler factors.',
      explanation: `**Vaccine Categories:**

| Category | Examples | Notes |
|----------|----------|-------|
| Routine | MMR, Tdap, influenza | Update if due |
| Required | Yellow fever, meningococcal | Country entry requirements |
| Recommended | Hepatitis A/B, typhoid, rabies | Risk-based |

**Yellow Fever:**
- Required for entry to many African and South American countries
- International Certificate of Vaccination required
- Single dose, lifetime validity
- Live vaccine - contraindications

**Hepatitis A:**
- Most common vaccine-preventable travel infection
- Two-dose series (0, 6-12 months)
- First dose gives rapid protection

**Typhoid:**
- For South Asia, high-risk areas
- Injectable (single dose) or oral (4 doses)`,
      keyTerms: [
        { term: 'International Certificate of Vaccination', definition: 'Official document proving yellow fever vaccination' },
        { term: 'accelerated schedule', definition: 'Shortened vaccine schedule for urgent travel' },
      ],
      analogies: ['Vaccine requirements are like visa requirements - different countries have different rules.'],
    },
    3: {
      level: 3,
      summary: 'Travel vaccination recommendations integrate destination epidemiology, traveler characteristics, trip details, and vaccine properties to optimize protection.',
      explanation: `**Decision Framework:**

| Factor | Assessment |
|--------|-----------|
| Destination | Endemic diseases, outbreaks |
| Traveler | Age, immunity, comorbidities |
| Trip | Duration, activities, accommodation |
| Vaccine | Efficacy, timing, contraindications |

**Specific Vaccines:**

| Vaccine | Indication | Schedule | Protection Onset |
|---------|-----------|----------|-----------------|
| Hepatitis A | Most international | 2 doses | 2-4 weeks |
| Typhoid | South Asia, high risk | 1 or 4 doses | 1-2 weeks |
| Yellow fever | Endemic areas | 1 dose | 10 days |
| Rabies | Animal exposure risk | 3 doses | 7-28 days |
| Japanese encephalitis | Asia, prolonged rural | 2 doses | 1 week |
| Cholera | Outbreak areas | 2 doses | 1 week |`,
      keyTerms: [
        { term: 'pre-exposure prophylaxis', definition: 'Vaccination before potential exposure' },
        { term: 'booster', definition: 'Additional vaccine dose to maintain immunity' },
      ],
      clinicalNotes: 'Assess individual risk. Consider accelerated schedules. Document vaccines in official certificate.',
    },
    4: {
      level: 4,
      summary: 'Evidence-based travel vaccination requires understanding of vaccine immunology, epidemiologic risk assessment, and practical implementation within constrained timelines.',
      explanation: `**Evidence Base:**

| Vaccine | Efficacy | Evidence Quality |
|---------|----------|-----------------|
| Hepatitis A | >95% | High |
| Yellow fever | ~99% | High |
| Typhoid (injectable) | 50-80% | Moderate |
| Rabies (pre-exposure) | Near 100% | High |

**Special Populations:**
- Pregnancy: Live vaccines contraindicated
- Immunocompromised: Avoid live vaccines
- Elderly: May have reduced response
- Infants: Age-specific recommendations

**Quality Improvement:**
- Standardized risk assessment
- Decision support tools
- Vaccine availability`,
      keyTerms: [
        { term: 'live attenuated vaccine', definition: 'Vaccine using weakened but living pathogen' },
        { term: 'serologic testing', definition: 'Blood test to check immunity' },
      ],
      clinicalNotes: 'Screen for contraindications. Consider serologic testing in select cases. Provide written schedule.',
    },
    5: {
      level: 5,
      summary: 'Travel vaccination operates at the intersection of individual protection and global health. Vaccine development, supply, and access shape global equity while travel patterns affect disease transmission.',
      explanation: `**Global Considerations:**
- Vaccine equity and access
- Yellow fever vaccine shortage
- Novel vaccine introduction
- Surveillance-vaccination links

**Research Frontiers:**
- Long-term protection duration
- Simplified schedules
- Novel vaccines (e.g., chikungunya)
- Implementation research`,
      keyTerms: [
        { term: 'fractional dosing', definition: 'Using smaller doses to extend vaccine supply' },
        { term: 'herd immunity threshold', definition: 'Coverage needed to interrupt transmission' },
      ],
      clinicalNotes: 'Stay current on recommendations. Report adverse events. Contribute to surveillance.',
    },
  },

  media: [],
  citations: [],
  crossReferences: [
    { targetId: 'travel-health-overview', targetType: 'topic', relationship: 'parent', label: 'Travel Health Overview' },
    { targetId: 'vaccine-preventable-overview', targetType: 'topic', relationship: 'related', label: 'Vaccine-Preventable Diseases' },
  ],
  tags: {
    systems: ['immune-system', 'public-health'],
    topics: ['travel-medicine', 'immunization'],
    keywords: ['travel vaccines', 'immunization', 'yellow fever', 'hepatitis'],
    clinicalRelevance: 'high',
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
