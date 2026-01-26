/**
 * Hearing Screening
 *
 * Comprehensive education on hearing assessment and hearing loss prevention.
 */

import { EducationalContent } from '../../types';

export const HEARING_SCREENING: EducationalContent = {
  id: 'concept-hearing-screening',
  type: 'concept',
  name: 'Hearing Screening',
  alternateNames: ['Audiometry', 'Hearing test', 'Audiology screening'],

  levels: {
    1: {
      level: 1,
      summary: 'Hearing screening checks if you can hear sounds at normal levels and helps find hearing loss early.',
      explanation: `Hearing loss is common, especially as we age. Testing can find problems early when treatment helps most.

**Why Hearing Screening Matters:**
- Hearing loss affects communication
- Untreated hearing loss linked to dementia
- Hearing aids work better when started early
- Social isolation from hearing loss

**Signs of Hearing Loss:**
- Asking people to repeat themselves
- Trouble hearing in noisy places
- Turning up TV volume
- Missing words in conversation

**When to Get Tested:**
- Newborns: Before leaving hospital
- Children: Before starting school
- Adults: If symptoms or risk factors
- Older adults: Consider periodic screening`,
      keyTerms: [
        { term: 'hearing loss', definition: 'Reduced ability to hear sounds' },
        { term: 'hearing aid', definition: 'Device that amplifies sound for people with hearing loss' },
        { term: 'audiometry', definition: 'Test that measures how well you hear different sounds' },
      ],
      analogies: ['Hearing screening is like an eye test but for your ears - it shows what sounds you can and cannot hear.'],
      examples: ['Grandma noticed she was missing words in conversation. Hearing testing found moderate loss, and hearing aids greatly improved her quality of life.'],
    },
    2: {
      level: 2,
      summary: 'Hearing screening includes pure tone audiometry and speech testing, with recommendations for newborns, children, and at-risk adults to detect hearing loss and prevent associated cognitive and social consequences.',
      explanation: `**Types of Hearing Tests:**

*Pure Tone Audiometry:*
- Measures quietest sounds you can hear
- Tests different pitches (frequencies)
- Results on audiogram

*Speech Audiometry:*
- Speech recognition threshold
- Word recognition score
- Assesses functional hearing

*Tympanometry:*
- Middle ear function
- Detects fluid or other problems

**Screening Recommendations:**

*Newborns:*
- Universal newborn hearing screening
- Before hospital discharge
- USPSTF Grade B

*Children:*
- Periodic screening at school
- If speech/language delays

*Adults:*
- USPSTF: Insufficient evidence for asymptomatic screening
- But: High rates of untreated loss
- Consider if symptoms or risk factors`,
      keyTerms: [
        { term: 'audiogram', definition: 'Graph showing hearing ability at different pitches' },
        { term: 'tympanometry', definition: 'Test of middle ear function and eardrum movement' },
        { term: 'speech recognition threshold', definition: 'Quietest level at which speech can be understood' },
      ],
      analogies: [],
    },
    3: {
      level: 3,
      summary: 'Evidence-based hearing care addresses the high prevalence of untreated hearing loss, cognitive decline associations, and barriers to hearing aid adoption, despite limited USPSTF evidence for routine adult screening.',
      explanation: `**Hearing Loss Prevalence:**
- 15% of US adults have some hearing loss
- 25% of adults 65-74
- 50% of adults 75+
- Only 20-30% who could benefit use hearing aids

**USPSTF Recommendations:**

*Newborns:* Grade B - Recommend screening
*Adults ≥50:* Grade I - Insufficient evidence

*Despite Grade I:*
- High disease burden
- Effective treatments exist
- Strong association with cognitive decline
- AAO-HNS recommends screening

**Cognitive Decline Association:**
- Hearing loss associated with dementia risk
- Possible mechanisms: Cognitive load, social isolation, brain changes
- ACHIEVE trial: Hearing aids may slow cognitive decline in at-risk adults

**Barriers to Treatment:**
- Cost (Medicare does not cover hearing aids)
- Stigma
- Perceived benefit
- Access to audiologists`,
      keyTerms: [
        { term: 'presbycusis', definition: 'Age-related hearing loss' },
        { term: 'sensorineural hearing loss', definition: 'Hearing loss from inner ear or nerve damage' },
        { term: 'ACHIEVE trial', definition: 'Landmark study on hearing intervention and cognitive decline' },
      ],
      analogies: [],
      clinicalNotes: 'Screen older adults despite USPSTF Grade I. Discuss cognitive benefits of treating hearing loss. Address barriers including cost. Consider OTC hearing aids for mild-moderate loss.',
    },
    4: {
      level: 4,
      summary: 'Addressing the hearing health gap requires policy changes, technology advances including OTC hearing aids, and integration of hearing care into broader health services.',
      explanation: `**Policy Changes:**

*OTC Hearing Aids (2022):*
- FDA ruling allows over-the-counter sales
- For mild-moderate loss in adults
- Reduces cost barrier
- Primary care role in guidance

*Medicare Coverage:*
- Does not cover hearing aids
- Advocacy for change ongoing
- Some Medicare Advantage plans cover

**Technology Advances:**

*Modern Hearing Aids:*
- Digital processing
- Bluetooth connectivity
- Smartphone apps
- Rechargeable batteries
- Directional microphones

*Cochlear Implants:*
- For severe-profound loss
- Expanding indications
- Hybrid devices

**Integration with Healthcare:**

*Primary Care Role:*
- Screening questions
- Whispered voice test
- Handheld audiometer
- Referral pathways
- OTC counseling

*Falls Prevention:*
- Hearing loss increases fall risk
- Vestibular function related
- Comprehensive assessment`,
      keyTerms: [
        { term: 'OTC hearing aids', definition: 'Over-the-counter hearing aids available without prescription for mild-moderate loss' },
        { term: 'cochlear implant', definition: 'Surgically implanted device that directly stimulates auditory nerve' },
      ],
      analogies: [],
      clinicalNotes: 'Discuss OTC hearing aids for mild-moderate loss. Integrate hearing assessment into falls prevention. Advocate for Medicare coverage. Use validated screening questionnaires.',
    },
    5: {
      level: 5,
      summary: 'Future hearing care integrates precision medicine approaches, regenerative therapies, and population health strategies to address the global burden of hearing loss and its cognitive consequences.',
      explanation: `**Emerging Research:**

*Regenerative Therapies:*
- Hair cell regeneration research
- Gene therapy for genetic hearing loss
- Stem cell approaches

*Pharmacologic Protection:*
- Otoprotective agents for noise/drug exposure
- Clinical trials ongoing

*Precision Medicine:*
- Genetic testing for hearing loss
- Pharmacogenomics for ototoxicity risk
- Personalized amplification

**Population Health:**

*Global Burden:*
- 430 million people with disabling hearing loss
- WHO World Report on Hearing (2021)
- Low/middle-income countries most affected

*Prevention Strategies:*
- Noise exposure reduction
- Ototoxic medication monitoring
- Vaccination (preventing infections causing deafness)
- Occupational protections

**Technology Future:**
- AI-enhanced hearing aids
- Real-time translation
- Brain-computer interfaces
- Closed-loop systems`,
      keyTerms: [
        { term: 'hair cell regeneration', definition: 'Research into restoring inner ear sensory cells that do not naturally regenerate in mammals' },
        { term: 'otoprotective', definition: 'Agents that protect the inner ear from damage' },
      ],
      analogies: [],
      clinicalNotes: 'Stay current on regenerative therapy trials. Monitor ototoxic medications. Support noise protection policies. Advocate for global hearing health equity.',
    },
  },

  media: [],
  citations: [
    {
      id: 'uspstf-hearing',
      type: 'website',
      title: 'Hearing Loss in Older Adults Screening',
      source: 'US Preventive Services Task Force',
      url: 'https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/hearing-loss-older-adults-screening',
      accessedDate: '2025-01-24',
    },
  ],
  crossReferences: [],
  tags: {
    systems: ['nervous', 'special senses'],
    topics: ['preventive medicine', 'audiology', 'hearing'],
    keywords: ['hearing', 'hearing loss', 'audiometry', 'hearing aids', 'screening'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'family medicine'] },
  },
  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
