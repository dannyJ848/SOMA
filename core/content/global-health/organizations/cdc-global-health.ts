/**
 * CDC Global Health
 */

import { EducationalContent } from '../../types';

export const CDC_GLOBAL_HEALTH: EducationalContent = {
  id: 'cdc-global-health',
  type: 'concept',
  name: 'CDC Global Health',
  alternateNames: ['Centers for Disease Control and Prevention Global', 'US CDC International'],

  levels: {
    1: {
      level: 1,
      summary: 'The CDC (Centers for Disease Control and Prevention) is the US government agency that protects Americans from health threats. It also works around the world to stop disease outbreaks before they reach the US.',
      explanation: `**What Is CDC?**
CDC is America's health protection agency. It tracks diseases, investigates outbreaks, and helps keep people healthy.

**Why Does CDC Work Globally?**
- Diseases don't respect borders
- Stopping outbreaks abroad protects Americans
- Sharing expertise helps everyone

**What CDC Does Globally:**
- Sends disease detectives to investigate outbreaks
- Trains health workers in other countries
- Runs laboratories around the world
- Provides travel health information

**Key Programs:**
- Global Health Security
- HIV/AIDS (PEPFAR)
- Malaria programs
- Polio eradication
- Emergency response`,
      keyTerms: [
        { term: 'CDC', definition: 'Centers for Disease Control and Prevention - US health protection agency' },
        { term: 'disease detective', definition: 'CDC epidemiologist who investigates disease outbreaks' },
      ],
      analogies: ['CDC acts like health firefighters, rushing to put out disease outbreaks anywhere in the world.'],
      examples: ['During the 2014 Ebola outbreak, CDC sent hundreds of experts to West Africa.'],
    },
    2: {
      level: 2,
      summary: 'CDC is the US national public health agency, with significant global health programs addressing health security, infectious disease, and health systems strengthening in partnership with other countries.',
      explanation: `**CDC's Global Mission:**
Protect Americans by working globally to:
- Detect threats early
- Build country capacity
- Respond to emergencies
- Implement programs

**Major Global Programs:**

**Global Health Security:**
- Builds capacity in 50+ countries
- Surveillance systems
- Laboratory networks
- Emergency response

**PEPFAR (President's Emergency Plan for AIDS Relief):**
- Largest global health program ever
- Supports HIV treatment and prevention
- Works in 50+ countries

**President's Malaria Initiative:**
- Prevention and treatment
- Bed nets, medicines, spraying
- 27 countries in Africa and Asia

**Organizational Structure:**
- Center for Global Health
- Country offices
- Field Epidemiology Training Programs
- Reference laboratories`,
      keyTerms: [
        { term: 'PEPFAR', definition: 'President\'s Emergency Plan for AIDS Relief - US global HIV program' },
        { term: 'Global Health Security Agenda', definition: 'International partnership to prevent, detect, and respond to threats' },
      ],
      analogies: ['CDC\'s global work is like installing smoke detectors around the world - catching problems early.'],
    },
    3: {
      level: 3,
      summary: 'CDC implements US global health programs through technical assistance, surveillance, research, and emergency response, working within broader global health architecture including WHO and bilateral partnerships.',
      explanation: `**Technical Areas:**

| Area | Activities |
|------|-----------|
| Epidemiology | EIS officers, FETP |
| Laboratory | Reference labs, training |
| Emergency Response | EOC, rapid response |
| Disease Programs | HIV, TB, malaria, NTDs |
| Health Security | Surveillance, preparedness |

**Field Epidemiology Training Program (FETP):**
- Train local epidemiologists
- 80+ countries
- "Teach a person to fish" approach
- CDC's most successful capacity building

**Global Health Security Agenda:**
- Multi-country partnership
- IHR implementation
- Core capacities
- Joint External Evaluations

**Emergency Response:**
- Emergency Operations Center
- Rapid deployment
- Technical expertise
- Coordination`,
      keyTerms: [
        { term: 'EIS', definition: 'Epidemic Intelligence Service - CDC\'s disease detective training program' },
        { term: 'FETP', definition: 'Field Epidemiology Training Program - training epidemiologists globally' },
      ],
      clinicalNotes: 'CDC provides clinical guidance for many conditions. Travel health recommendations at CDC.gov.',
    },
    4: {
      level: 4,
      summary: 'CDC global health operates within US foreign policy context, balancing health security framing with development goals. Programs demonstrate impact while raising questions about sustainable capacity building.',
      explanation: `**Political Context:**
- US foreign policy tool
- Health security framing
- Bipartisan support
- Budget dynamics

**Evidence of Impact:**

**PEPFAR:**
- 25+ million on treatment
- 5.5 million babies born HIV-free
- Health systems strengthened
- Largest single-disease program ever

**Malaria:**
- 50% reduction in endemic areas
- Millions of nets distributed
- Lives saved

**Critiques:**
- Verticalization vs. integration
- Sustainability concerns
- Country ownership
- Health security framing limitations`,
      keyTerms: [
        { term: 'vertical program', definition: 'Disease-specific program separate from general health system' },
        { term: 'country ownership', definition: 'Principle that countries should lead their own health programs' },
      ],
      clinicalNotes: 'Understand role of bilateral programs in global health. Engage with guideline development.',
    },
    5: {
      level: 5,
      summary: 'CDC global health reflects US health diplomacy within evolving global health governance. Analysis requires understanding of securitization, soft power, and tensions between national and global interests.',
      explanation: `**Critical Analysis:**

**Securitization:**
- Health as national security
- Framing implications
- Resource mobilization
- Equity considerations

**Soft Power:**
- Health diplomacy
- US global influence
- Pandemic preparedness
- Competing powers

**Future Directions:**
- Pandemic preparedness
- Climate and health
- AMR
- Digital health

**Research:**
- Implementation science
- Evaluation
- Health systems
- Global health security`,
      keyTerms: [
        { term: 'health diplomacy', definition: 'Using health programs to achieve foreign policy goals' },
        { term: 'securitization', definition: 'Framing health issues as security threats' },
      ],
      clinicalNotes: 'Engage with broader context of global health programs. Contribute to evidence base.',
    },
  },

  media: [],
  citations: [
    {
      id: 'cdc-global-health',
      type: 'website',
      title: 'CDC Global Health',
      source: 'Centers for Disease Control and Prevention',
      url: 'https://www.cdc.gov/globalhealth/',
      license: 'Public Domain',
    },
  ],
  crossReferences: [
    { targetId: 'who-overview', targetType: 'topic', relationship: 'sibling', label: 'WHO Overview' },
    { targetId: 'global-health-partnerships', targetType: 'topic', relationship: 'sibling', label: 'Global Health Partnerships' },
  ],
  tags: {
    systems: ['public-health'],
    topics: ['global-health', 'organizations', 'infectious-diseases'],
    keywords: ['CDC', 'global health security', 'PEPFAR', 'epidemiology'],
    clinicalRelevance: 'high',
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
